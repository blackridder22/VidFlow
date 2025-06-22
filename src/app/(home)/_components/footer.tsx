import React from "react";

export function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-gray-100 py-6 md:py-0 dark:bg-gray-900">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-16 md:flex-row md:px-6">
        <p className="text-muted-foreground text-sm">
          © 2024 Instagram Downloader. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-muted-foreground text-sm hover:text-teal-500"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-muted-foreground text-sm hover:text-teal-500"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-muted-foreground text-sm hover:text-teal-500"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
