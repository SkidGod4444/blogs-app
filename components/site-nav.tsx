/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "./ui/button";
import { RiDiscordFill } from "@remixicon/react";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto w-full flex h-14 items-center justify-between px-6">
        <div className="mr-4 flex">
          <Link
            href="/"
            className="mr-6 flex items-center space-x-2 font-medium text-lg tracking-tighter h-12 w-12 rounded-lg overflow-hidden"
          >
            <img
              src="/openstack-logo.jpg"
              alt="OpenStack"
              className="w-12 h-12 object-cover"
            />
          </Link>
        </div>

        <div className="flex flex-1 w-full justify-end">
          <nav className="flex items-center justify-between gap-2">
            <ThemeToggle />
            <Link href="https://l.devwtf.in/discord" target="_blank">
              <Button variant="outline" size={"icon"}>
                <RiDiscordFill />
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
