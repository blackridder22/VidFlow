import React from "react";

import { cn } from "@/lib/utils";
import { Fira_Sans as LogoFont } from "next/font/google";
import Image from "next/image";

const logoFont = LogoFont({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function LogoText({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-xl font-normal select-none",
        logoFont.className,
        className
      )}
      {...props}
    >
      VidFlow
    </div>
  );
}

export function LogoImage({
  className,
}: {
  className?: string;
}) {
  return (
    <Image
      src="/webflow.png"
      alt="VidFlow Logo"
      width={32}
      height={32}
      className={cn("object-contain", className)}
    />
  );
}
