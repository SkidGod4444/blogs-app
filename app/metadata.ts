import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadataKeywords = [
    "Blog",
    "Archive",
    "React",
    "OpenStack",
    "OpenStack Blog",
    "Saidev Dhal",
    "Next.js Blog",
    "React Blog",
    "Web Development",
    "Tutorials",
    "MDX Blog",
]

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: metadataKeywords,
    authors: [
        {
            name: "Saidev Dhal",
            url: "https://devwtf.in",
        },
    ],
    creator: "Saidev Dhal",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        creator: "@saidevdhal",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};