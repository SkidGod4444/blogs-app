/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { type Author } from "@/lib/authors";
import { cn } from "@/lib/utils";
import { Link as LinkIcon } from "lucide-react";

interface AuthorCardProps {
  author: Author;
  className?: string;
}

export function AuthorCard({ author, className }: AuthorCardProps) {
  return (
    <div className={cn("flex items-center gap-2 border-b border-border pb-2", className)}>
      <img
        src={author.avatar}
        alt={author.name}
        className="rounded-md w-8 h-8 border border-border object-cover"
      />
      <div className="flex-1">
        <h3 className="text-sm tracking-tight text-balance font-semibold">
          {author.name}
        </h3>
        <p className="text-xs text-muted-foreground text-balance">
          {author.position}
        </p>
      </div>
      {author.url && (
        <Link
          href={author.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label={`Visit ${author.name}'s website`}
        >
          <LinkIcon className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
