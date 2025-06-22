# Instagram Video Downloader API

This API provides endpoints for downloading Instagram videos by extracting the actual video URLs from Instagram posts.

## Endpoints

### `/api/download-proxy`

A proxy endpoint that downloads Instagram videos and streams them directly to the client.

#### Method
`GET`

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The Instagram post/reel URL |
| `filename` | string | No | Custom filename for the video (default: "instagram-video.mp4") |
| `download` | boolean | No | Set to "true" to force download instead of inline streaming |

#### Supported Instagram URL Formats

- Posts: `https://www.instagram.com/p/{shortcode}/`
- Reels: `https://www.instagram.com/reel/{shortcode}/`
- IGTV: `https://www.instagram.com/tv/{shortcode}/`

#### Usage Examples

##### Stream Video in Browser (Inline)
```bash
curl 'http://localhost:3000/api/download-proxy?url=https://www.instagram.com/reel/DK_5ymnAr4G/&filename=myvideo.mp4'
```

##### Force Download
```bash
curl 'http://localhost:3000/api/download-proxy?url=https://www.instagram.com/reel/DK_5ymnAr4G/&filename=myvideo.mp4&download=true'
```

##### Download with Custom Filename
```bash
curl -L -o "my_custom_video.mp4" 'http://localhost:3000/api/download-proxy?url=https://www.instagram.com/reel/DK_5ymnAr4G/&filename=my_custom_video.mp4'
```

##### Use in HTML Video Element
```html
<video controls>
  <source src="http://localhost:3000/api/download-proxy?url=https://www.instagram.com/reel/DK_5ymnAr4G/" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

#### Response Headers

- `Content-Type`: `video/mp4`
- `Accept-Ranges`: `bytes` (enables video seeking)
- `Cache-Control`: `public, max-age=3600`
- `Content-Disposition`: `inline` (default) or `attachment` (when download=true)
- `Content-Length`: Size of the video file

#### Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| 400 | `missingUrl` | Instagram URL parameter is required |
| 400 | `invalidUrl` | Invalid Instagram URL format |
| 400 | `notVideo` | The Instagram post is not a video |
| 404 | `notFound` | Instagram post not found |
| 404 | `noVideoUrl` | Video URL could not be extracted |
| 429 | `tooManyRequests` | Rate limit exceeded, try again later |
| 500 | `serverError` | Internal server error |

### `/api/instagram/p/[shortcode]`

Returns Instagram post metadata including video information.

#### Method
`GET`

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `shortcode` | string | Yes | The Instagram post shortcode (from URL path) |

#### Usage Example
```bash
curl 'http://localhost:3000/api/instagram/p/DK_5ymnAr4G'
```

#### Response Format
```json
{
  "data": {
    "xdt_shortcode_media": {
      "id": "...",
      "shortcode": "DK_5ymnAr4G",
      "video_url": "https://...",
      "video_duration": 30,
      "is_video": true,
      "owner": {
        "username": "..."
      },
      // ... other metadata
    }
  }
}
```

## Features

- ✅ **Direct Video Streaming**: Works like a direct video URL
- ✅ **Range Requests**: Supports video seeking and progressive loading
- ✅ **Multiple Formats**: Handles posts, reels, and IGTV
- ✅ **Error Handling**: Comprehensive error responses
- ✅ **Caching**: Optimized with proper cache headers
- ✅ **Browser Compatible**: Works with HTML5 video elements
- ✅ **Download Support**: Optional forced download mode

## Technical Details

### How It Works

1. **URL Parsing**: Extracts the shortcode from various Instagram URL formats
2. **GraphQL Query**: Uses Instagram's internal GraphQL API to fetch post metadata
3. **Video URL Extraction**: Retrieves the direct video URL from the response
4. **Proxy Streaming**: Fetches and streams the video with proper headers

### Rate Limiting

The API respects Instagram's rate limits. If you encounter 429 errors, wait before making additional requests.

### Security

- Only HTTPS Instagram URLs are accepted
- Proper error handling prevents information leakage
- No user authentication required (public posts only)

## Development

### Local Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Test the endpoint:
   ```bash
   curl -I 'http://localhost:3000/api/download-proxy?url=https://www.instagram.com/reel/DK_5ymnAr4G/'
   ```

### Environment

- **Framework**: Next.js 14+ with App Router
- **Runtime**: Node.js
- **TypeScript**: Full type safety

## Troubleshooting

### Common Issues

1. **"Post not found" error**: The Instagram post may be private or deleted
2. **"Not a video" error**: The URL points to an image post, not a video
3. **Rate limiting**: Wait and retry, or implement request queuing
4. **CORS issues**: The API handles CORS automatically for video streaming

### Debug Tips

- Check the Instagram URL format
- Verify the post is public and contains a video
- Monitor server logs for detailed error information
- Test with different Instagram URLs to isolate issues