import React from "react";

import { Star } from "lucide-react";

import { homeSections } from "@/lib/constants";

export function Testimonials() {

  return (
    <section
      id={homeSections.testimonials}
      className="w-full bg-gradient-to-t from-white to-gray-50 py-12 md:py-24 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
              Hear from thousands of satisfied users who trust our Instagram downloader
            </p>
          </div>
          <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col space-y-4 rounded-xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                &ldquo;This tool is amazing! I can easily download my favorite Instagram videos without any hassle. The quality is perfect and it&apos;s super fast.&rdquo;
              </p>
              <div className="flex items-center space-x-2">
                <div className="text-sm font-medium">Sarah Johnson</div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                &ldquo;I&apos;ve tried many Instagram downloaders, but this one is by far the best. Clean interface, reliable downloads, and completely free!&rdquo;
              </p>
              <div className="flex items-center space-x-2">
                <div className="text-sm font-medium">Mike Chen</div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 rounded-xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                &ldquo;Perfect for content creators like me. I can save my own posts and reels easily. The download speed is incredible!&rdquo;
              </p>
              <div className="flex items-center space-x-2">
                <div className="text-sm font-medium">Emma Rodriguez</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
