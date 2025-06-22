import React from "react";

import { Button } from "@/components/ui/button";

import { Copy, Download, Link } from "lucide-react";

import { homeLinks, homeSections } from "@/lib/constants";

export function HowItWorks() {

  return (
    <section
      id={homeSections.howItWorks}
      className="w-full scroll-mt-12 bg-gradient-to-b from-white to-gray-50 py-12 md:py-24 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <div className="mb-2 inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700 dark:bg-teal-800 dark:text-teal-50">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              How It Works
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
              Download Instagram videos and photos in just 3 simple steps
            </p>
          </div>

          {/* Desktop version */}
          <div className="relative mx-auto mt-12 hidden w-full max-w-4xl md:block">
            <div className="grid grid-cols-3 gap-4">
              <div className="relative flex flex-col items-center space-y-4">
                <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 text-xl font-bold text-white shadow-lg">
                  1
                </div>
                <div className="h-full rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-4 flex justify-center">
                    <Copy className="h-8 w-8 text-teal-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    Copy Instagram URL
                  </h3>
                  <p className="text-muted-foreground">
                    Copy the URL of the Instagram post or reel you want to download from your browser or app
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col items-center space-y-4">
                <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 text-xl font-bold text-white shadow-lg">
                  2
                </div>
                <div className="h-full rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-4 flex justify-center">
                    <Link className="h-8 w-8 text-teal-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    Paste URL Here
                  </h3>
                  <p className="text-muted-foreground">
                    Paste the copied URL into our download form above and click the download button
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 text-xl font-bold text-white shadow-lg">
                  3
                </div>
                <div className="h-full rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-4 flex justify-center">
                    <Download className="h-8 w-8 text-teal-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    Download & Enjoy
                  </h3>
                  <p className="text-muted-foreground">
                    Your video or photo will be processed and ready for download in high quality within seconds
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile version with vertical steps */}
          <div className="relative mx-auto w-full max-w-sm space-y-8 md:hidden">
            {/* Vertical connecting line */}
            <div className="absolute top-0 bottom-16 left-4 w-0.5 bg-teal-200"></div>

            <div className="relative flex items-start space-x-6">
              <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-500 font-bold text-white">
                1
              </div>
              <div className="flex-1 rounded-lg border border-gray-100 bg-white p-4 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-2 flex items-center">
                  <Copy className="mr-2 h-5 w-5 text-teal-500" />
                  <h3 className="text-lg font-bold">Copy Instagram URL</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Copy the URL of the Instagram post or reel you want to download from your browser or app
                </p>
              </div>
            </div>

            <div className="relative flex items-start space-x-6">
              <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-500 font-bold text-white">
                2
              </div>
              <div className="flex-1 rounded-lg border border-gray-100 bg-white p-4 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-2 flex items-center">
                  <Link className="mr-2 h-5 w-5 text-teal-500" />
                  <h3 className="text-lg font-bold">
                    Paste URL Here
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Paste the copied URL into our download form above and click the download button
                </p>
              </div>
            </div>

            <div className="relative flex items-start space-x-6">
              <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-500 font-bold text-white">
                3
              </div>
              <div className="flex-1 rounded-lg border border-gray-100 bg-white p-4 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-2 flex items-center">
                  <Download className="mr-2 h-5 w-5 text-teal-500" />
                  <h3 className="text-lg font-bold">
                    Download & Enjoy
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Your video or photo will be processed and ready for download in high quality within seconds
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <Button
              className="bg-teal-500 text-white hover:bg-teal-600 dark:bg-teal-700 dark:hover:bg-teal-600"
              asChild
            >
              <a href={homeLinks.hero}>Try It Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
