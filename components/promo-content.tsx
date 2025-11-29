/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PromoContentProps {
  variant?: "desktop" | "mobile";
  className?: string;
}

export function PromoContent({
  variant = "desktop",
  className,
}: PromoContentProps) {
  if (variant === "mobile") {
    return (
      <div className={cn("border-t border-border bg-muted/20 p-3", className)}>
        <div className="flex items-center gap-3">
          <img
            src="/substack.png"
            alt="OpenStack"
            className="w-8 h-8 rounded object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-foreground/90 truncate">
              Subscribe us on Substack
            </p>
            <p className="text-xs text-muted-foreground truncate">
              Receive the latest updates and insights
            </p>
          </div>
          <a
            href="https://l.devwtf.in/substack" target="_blank"
            className="text-xs text-primary hover:text-primary/80 font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            Subscribe
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("border border-border rounded-lg p-4 bg-card", className)}
    >
      <Link href="https://l.devwtf.in/substack" target="_blank">
      <div className="flex flex-col gap-4">
        <img
          src="/substack.png"
          alt="OpenStack"
          className="w-full h-40 rounded-md object-cover"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold tracking-tighter">
            Subscribe us on Substack
          </h3>
          <p className="text-sm text-muted-foreground">
            Receive the latest updates and insights
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
}
