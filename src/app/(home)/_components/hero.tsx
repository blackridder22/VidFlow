import React from "react";

import { homeSections } from "@/lib/constants";
import { InstagramForm } from "@/components/instagram-form";
import { PrivacyTrigger } from "@/components/privacy-modal";

export function Hero() {

  return (
    <section
      id={homeSections.hero}
      className="w-full min-h-screen flex items-center justify-center scroll-mt-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="max-w-6xl space-y-2 text-balance">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Download Instagram Videos in Seconds
            </h1>
            <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
              Fast, free, and no login required. Just paste the URL and download.
            </p>
          </div>
          <InstagramForm className="max-w-xl" />
          <div className="mt-8 pt-4">
            <PrivacyTrigger />
          </div>
        </div>
      </div>
    </section>
  );
}
