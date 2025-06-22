import { NextRequest, NextResponse } from "next/server";
import { IG_GraphQLResponseDto } from "@/features/api/_dto/instagram";
import { getInstagramPostGraphQL } from "../instagram/p/[shortcode]/utils";

function extractShortcodeFromUrl(url: string): string | null {
  // Handle various Instagram URL formats
  const patterns = [
    /instagram\.com\/p\/([A-Za-z0-9_-]+)/,
    /instagram\.com\/reel\/([A-Za-z0-9_-]+)/,
    /instagram\.com\/tv\/([A-Za-z0-9_-]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }
  
  return null;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const instagramUrl = searchParams.get("url");
  const filename = searchParams.get("filename") || "instagram-video.mp4";

  if (!instagramUrl) {
    return NextResponse.json(
      { error: "missingUrl", message: "Instagram URL is required" },
      { status: 400 }
    );
  }

  try {
    // Extract shortcode from Instagram URL
    const shortcode = extractShortcodeFromUrl(instagramUrl);
    
    if (!shortcode) {
      return NextResponse.json(
        { error: "invalidUrl", message: "Invalid Instagram URL format" },
        { status: 400 }
      );
    }

    // Get Instagram post data to extract video URL
    const instagramResponse = await getInstagramPostGraphQL({ shortcode });
    
    if (!instagramResponse.ok) {
      if (instagramResponse.status === 404) {
        return NextResponse.json(
          { error: "notFound", message: "Instagram post not found" },
          { status: 404 }
        );
      }
      if (instagramResponse.status === 429) {
        return NextResponse.json(
          { error: "tooManyRequests", message: "Too many requests, try again later" },
          { status: 429 }
        );
      }
      throw new Error(`Instagram API error: ${instagramResponse.statusText}`);
    }

    const { data } = (await instagramResponse.json()) as IG_GraphQLResponseDto;
    
    if (!data.xdt_shortcode_media) {
      return NextResponse.json(
        { error: "notFound", message: "Post not found" },
        { status: 404 }
      );
    }

    if (!data.xdt_shortcode_media.is_video) {
      return NextResponse.json(
        { error: "notVideo", message: "Post is not a video" },
        { status: 400 }
      );
    }

    const videoUrl = data.xdt_shortcode_media.video_url;
    
    if (!videoUrl) {
      return NextResponse.json(
        { error: "noVideoUrl", message: "Video URL not found" },
        { status: 404 }
      );
    }

    // Fetch the actual video from Instagram's CDN
    const videoResponse = await fetch(videoUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-G973U) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/14.2 Chrome/87.0.4280.141 Mobile Safari/537.36',
        'Referer': 'https://www.instagram.com/'
      }
    });

    if (!videoResponse.ok) {
      throw new Error(`Failed to fetch video: ${videoResponse.statusText}`);
    }

    // Get the video data as a ReadableStream
    const videoStream = videoResponse.body;

    if (!videoStream) {
      throw new Error("Video stream is not available");
    }

    // Set headers for video streaming (not forced download)
    const headers = new Headers();
    
    // Set Content-Type for video streaming
    headers.set(
      "Content-Type",
      videoResponse.headers.get("Content-Type") || "video/mp4"
    );
    
    // Set Content-Length if available for proper video streaming
    if (videoResponse.headers.get("Content-Length")) {
      headers.set(
        "Content-Length",
        videoResponse.headers.get("Content-Length")!
      );
    }
    
    // Enable range requests for video seeking
    if (videoResponse.headers.get("Accept-Ranges")) {
      headers.set("Accept-Ranges", videoResponse.headers.get("Accept-Ranges")!);
    } else {
      headers.set("Accept-Ranges", "bytes");
    }
    
    // Set cache headers for better performance
    headers.set("Cache-Control", "public, max-age=3600");
    
    // Optional: Set Content-Disposition for download when explicitly requested
    const download = request.nextUrl.searchParams.get("download");
    if (download === "true") {
      headers.set("Content-Disposition", `attachment; filename="${filename}"`);
    } else {
      headers.set("Content-Disposition", `inline; filename="${filename}"`);
    }

    // Return the stream response
    return new NextResponse(videoStream, {
      status: 200,
      headers: headers,
    });
  } catch (error: any) {
    console.error("Download proxy error:", error);
    return NextResponse.json(
      { error: "serverError", message: error.message },
      { status: 500 }
    );
  }
}
