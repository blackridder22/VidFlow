"use client";

import React from "react";

import { toast } from "sonner";
import { useForm } from "react-hook-form";


import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Download, Loader2, X, Play } from "lucide-react";

import { cn, getPostShortcode, isShortcodePresent } from "@/lib/utils";
import { useGetInstagramPostMutation } from "@/features/react-query/mutations/instagram";
import { HTTP_CODE_ENUM } from "@/features/api/http-codes";

// 5 minutes
const CACHE_TIME = 5 * 60 * 1000;

const useFormSchema = () => {
  return z.object({
    url: z
      .string({ required_error: "Instagram post URL is required" })
      .trim()
      .min(1, {
        message: "Instagram post URL is required",
      })
      .startsWith("https://www.instagram.com", "Please enter a valid Instagram post URL")
      .refine(
        (value) => {
          return isShortcodePresent(value);
        },
        { message: "Please enter a valid Instagram post URL" }
      ),
  });
};



type CachedUrl = {
  videoUrl?: string;
  expiresAt: number;
  invalid?: {
    messageKey: string;
  };
};

type VideoData = {
  url: string;
  originalUrl: string;
  shortcode: string;
};

export function InstagramForm(props: { className?: string }) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const cachedUrls = React.useRef(new Map<string, CachedUrl>());
  const [videoData, setVideoData] = React.useState<VideoData | null>(null);
  const [isDownloading, setIsDownloading] = React.useState(false);

  const {
    isError,
    isPending,
    mutateAsync: getInstagramPost,
  } = useGetInstagramPostMutation();

  const formSchema = useFormSchema();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });

  const errorMessage = form.formState.errors.url?.message;

  const isDisabled = isPending || !form.formState.isDirty;
  const isShowClearButton = form.watch("url").length > 0;

  function clearUrlField() {
    form.setValue("url", "");
    form.clearErrors("url");
    inputRef.current?.focus();
  }

  function setCachedUrl(
    shortcode: string,
    videoUrl?: string,
    invalid?: CachedUrl["invalid"]
  ) {
    cachedUrls.current?.set(shortcode, {
      videoUrl,
      expiresAt: Date.now() + CACHE_TIME,
      invalid,
    });
  }

  function getCachedUrl(shortcode: string) {
    const cachedUrl = cachedUrls.current?.get(shortcode);

    if (!cachedUrl) {
      return null;
    }

    if (cachedUrl.expiresAt < Date.now()) {
      cachedUrls.current.delete(shortcode);
      return null;
    }

    return cachedUrl;
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (isError) {
      toast.dismiss("toast-error");
    }

    const shortcode = getPostShortcode(values.url);

    if (!shortcode) {
      form.setError("url", { message: "Please enter a valid Instagram post URL" });
      return;
    }

    const cachedUrl = getCachedUrl(shortcode);
    if (cachedUrl?.invalid) {
      form.setError("url", { message: "Invalid Instagram post URL" });
      return;
    }

    if (cachedUrl?.videoUrl) {
      setVideoData({
        url: cachedUrl.videoUrl,
        originalUrl: values.url,
        shortcode
      });
      return;
    }

    try {
      const { data, status } = await getInstagramPost({ shortcode });

      if (status === HTTP_CODE_ENUM.OK) {
        const downloadUrl = data.data.xdt_shortcode_media.video_url;
        if (downloadUrl) {
          setVideoData({
            url: downloadUrl,
            originalUrl: values.url,
            shortcode
          });
          setCachedUrl(shortcode, downloadUrl);
          toast.success("Video loaded successfully!", {
            id: "toast-success",
            position: "top-center",
            duration: 1500,
          });
        } else {
          throw new Error("Video URL not found");
        }
      } else if (
        status === HTTP_CODE_ENUM.NOT_FOUND ||
        status === HTTP_CODE_ENUM.BAD_REQUEST ||
        status === HTTP_CODE_ENUM.TOO_MANY_REQUESTS ||
        status === HTTP_CODE_ENUM.INTERNAL_SERVER_ERROR
      ) {
        const errorMessageKey = `serverErrors.${data.error}`;
        form.setError("url", { message: "Failed to load video. Please check the URL and try again." });
        if (
          status === HTTP_CODE_ENUM.BAD_REQUEST ||
          status === HTTP_CODE_ENUM.NOT_FOUND
        ) {
          setCachedUrl(shortcode, undefined, {
            messageKey: errorMessageKey,
          });
        }
      } else {
        throw new Error("Failed to fetch video");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while loading the video", {
        dismissible: true,
        id: "toast-error",
        position: "top-center",
      });
    }
  }

  async function handleDownload() {
    if (!videoData) return;
    
    setIsDownloading(true);
    try {
      const randomTime = new Date().getTime().toString().slice(-8);
      const filename = `gram-grabberz-${randomTime}.mp4`;
      
      const proxyUrl = new URL("/api/download-proxy", window.location.origin);
      proxyUrl.searchParams.append("url", videoData.originalUrl);
      proxyUrl.searchParams.append("filename", filename);
      proxyUrl.searchParams.append("download", "true");
      
      const link = document.createElement("a");
      link.href = proxyUrl.toString();
      link.target = "_blank";
      link.setAttribute("download", filename);
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success("Download started!", {
        position: "top-center",
        duration: 2000,
      });
    } catch (error) {
      console.error(error);
      toast.error("Download failed. Please try again.", {
        position: "top-center",
      });
    } finally {
      setIsDownloading(false);
    }
  }

  function handleNewVideo() {
    setVideoData(null);
    form.setValue("url", "");
    form.clearErrors("url");
    inputRef.current?.focus();
  }

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  if (videoData) {
    const proxyUrl = new URL("/api/download-proxy", window.location.origin);
    proxyUrl.searchParams.append("url", videoData.originalUrl);
    
    return (
      <div className={cn("w-full space-y-4", props.className)}>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-video bg-black">
            <video
              controls
              className="w-full h-full object-contain"
              src={proxyUrl.toString()}
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='5,3 19,12 5,21'/%3E%3C/svg%3E"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={handleDownload}
                disabled={isDownloading}
                className="flex-1 bg-teal-500 text-white hover:bg-teal-600 dark:bg-teal-700 dark:hover:bg-teal-600"
              >
                {isDownloading ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <Download className="h-4 w-4 mr-2" />
                )}
                {isDownloading ? "Downloading..." : "Download"}
              </Button>
              <Button
                onClick={handleNewVideo}
                variant="outline"
                className="flex-1 sm:flex-initial"
              >
                New Video
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full space-y-2", props.className)}>
      {errorMessage ? (
        <p className="h-4 text-sm text-red-500 sm:text-start">{errorMessage}</p>
      ) : (
        <div className="h-4"></div>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-2 sm:flex-row sm:items-end"
        >
          <FormField
            control={form.control}
            name="url"
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="sr-only">
                  Video URL
                </FormLabel>
                <FormControl>
                  <div className="relative w-full">
                    <Input
                      {...field}
                      type="url"
                      ref={inputRef}
                      minLength={1}
                      maxLength={255}
                      placeholder="Paste Instagram video URL here..."
                    />
                    {isShowClearButton && (
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={clearUrlField}
                        className="absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2 cursor-pointer"
                      >
                        <X className="text-red-500" />
                      </Button>
                    )}
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            disabled={isDisabled}
            type="submit"
            className="bg-teal-500 text-white hover:bg-teal-600 dark:bg-teal-700 dark:hover:bg-teal-600"
          >
            {isPending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            Download
          </Button>
        </form>
      </Form>
      <p className="text-muted-foreground text-center text-xs">Works with Instagram posts and reels</p>
    </div>
  );
}
