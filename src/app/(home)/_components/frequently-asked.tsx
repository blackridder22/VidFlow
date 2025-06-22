import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { homeSections } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FrequentlyAsked() {

  return (
    <section
      id={homeSections.frequentlyAsked}
      className="w-full scroll-mt-12 bg-gradient-to-b from-white to-gray-50 py-12 md:py-24 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <div className="mb-2 inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700 dark:bg-teal-800 dark:text-teal-50">
              {t("badge")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Find answers to common questions about our Instagram downloader
            </p>
          </div>

          <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-6">
            {/* General */}
            <div className="rounded-xl border border-gray-50 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 flex items-center text-xl font-bold">
                <div className="mr-3 rounded-full bg-teal-100 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-600"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                </div>
                {t("sections.general.title")}
              </h3>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is this Instagram downloader free to use?</AccordionTrigger>
                  <AccordionContent>Yes, our Instagram downloader is completely free to use. There are no hidden fees, subscriptions, or registration requirements.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What types of Instagram content can I download?</AccordionTrigger>
                  <AccordionContent>You can download Instagram videos, photos, reels, IGTV videos, and stories. Our tool supports all major Instagram content formats.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do I need to install any software?</AccordionTrigger>
                  <AccordionContent>No installation required! Our Instagram downloader works directly in your web browser. Simply paste the URL and download instantly.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Technical */}
            <div className="rounded-xl border border-gray-50 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 flex items-center text-xl font-bold">
                <div className="mr-3 rounded-full bg-teal-100 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                {t("sections.technical.title")}
              </h3>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is it safe to use this downloader?</AccordionTrigger>
                  <AccordionContent>Absolutely! We prioritize your privacy and security. We don't store your data, require personal information, or install any malware on your device.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What quality are the downloaded videos?</AccordionTrigger>
                  <AccordionContent>We preserve the original quality of Instagram content. You'll get the same resolution and quality as the original post, including HD videos when available.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
