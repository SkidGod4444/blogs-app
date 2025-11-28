export interface Author {
  name: string;
  position: string;
  avatar: string;
  url: string;
}

export const authors: Record<string, Author> = {
  saidevdhal: {
    name: "Saidev Dhal",
    position: "Software Engineer",
    url: "https://devwtf.in",
    avatar: "/authors/saidevdhal.png",
  },
} as const;

export type AuthorKey = keyof typeof authors;

export function getAuthor(key: AuthorKey): Author {
  return authors[key];
}

export function isValidAuthor(key: string): key is AuthorKey {
  return key in authors;
}
