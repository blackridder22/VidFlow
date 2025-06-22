import React from "react";

import { CheckCircle, Shield, TvMinimalPlay, Zap } from "lucide-react";

import { homeSections } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Features() {

  return (
    <section
      id={homeSections.features}
      className="w-full scroll-mt-12 bg-gradient-to-t from-white to-gray-50 py-12 md:py-24 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="mb-2 inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700 dark:bg-teal-800 dark:text-teal-50">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Why Choose Our Instagram Downloader?
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
              Experience the fastest, most reliable way to download Instagram videos and photos with our advanced features
            </p>
          </div>
          <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 xl:grid-cols-4">
            <div className="flex flex-col items-center space-y-3 rounded-xl border bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6 dark:bg-gray-800">
              <div className="rounded-full bg-teal-100 p-3">
                <Shield className="h-6 w-6 text-teal-600 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-lg font-bold sm:text-xl">
                100% Free & Safe
              </h3>
              <p className="text-muted-foreground text-center text-sm sm:text-base">
                No registration required, no hidden fees, and completely secure downloads with privacy protection
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 rounded-xl border bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6 dark:bg-gray-800">
              <div className="rounded-full bg-teal-100 p-3">
                <CheckCircle className="h-6 w-6 text-teal-600 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-lg font-bold sm:text-xl">
                No Registration Required
              </h3>
              <p className="text-muted-foreground text-center text-sm sm:text-base">
                Start downloading instantly without creating accounts or providing personal information
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 rounded-xl border bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6 dark:bg-gray-800">
              <div className="rounded-full bg-teal-100 p-3">
                <Zap className="h-6 w-6 text-teal-600 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-lg font-bold sm:text-xl">
                Lightning Fast Downloads
              </h3>
              <p className="text-muted-foreground text-center text-sm sm:text-base">
                Download Instagram videos and photos in seconds with our optimized servers and advanced compression technology
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 rounded-xl border bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6 dark:bg-gray-800">
              <div className="rounded-full bg-teal-100 p-3">
                <TvMinimalPlay className="h-6 w-6 text-teal-600 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-lg font-bold sm:text-xl">
                High Quality Downloads
              </h3>
              <p className="text-muted-foreground text-center text-sm sm:text-base">
                Preserve original quality with support for HD videos, high-resolution images, and crystal-clear audio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
