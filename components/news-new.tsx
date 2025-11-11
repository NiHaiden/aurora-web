"use client";
import { useTranslations } from "next-intl";
import React from "react";
import useSWR from "swr";
import { parseFeed } from "@rowanmanning/feed-parser";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";

export default function NewsFromBlog({
  newsRef,
}: {
  newsRef: React.RefObject<HTMLDivElement>;
}) {
  const t = useTranslations("Navbar");
  const news = useSWR("blogposts", async () => {
    const res = await fetch("https://docs.getaurora.dev/blog/rss.xml");
    if (!res.ok) throw new Error("Failed to fetch");
    return res.text();
  });

  if (news.error) {
    return (
      <div className={"flex w-full flex-col items-center justify-center gap-8"}>
        <h1
          className={
            "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-4xl font-bold text-transparent lg:text-7xl"
          }
        >
          {t("news")}
        </h1>
        <div className={"text-red-400"}>Failed to load blog posts</div>
      </div>
    );
  }

  if (!news.data) {
    return (
      <div className={"flex w-full flex-col items-center justify-center gap-8"}>
        <h1
          className={
            "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-4xl font-bold text-transparent lg:text-7xl"
          }
        >
          Latest from the Blog
        </h1>
        <div className={"animate-pulse text-gray-400"}>
          Loading blog posts...
        </div>
      </div>
    );
  }

  const feed = parseFeed(news.data);
  const recentPosts = feed.items?.slice(0, 5) || [];

  return (
    <div
      ref={newsRef}
      className={"flex w-full flex-col items-center justify-center gap-8"}
    >
      <div className={"flex flex-row items-center justify-center gap-5"}>
        <h1
          className={
            "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-4xl font-bold text-transparent lg:text-7xl"
          }
        >
          {t("news")}{" "}
        </h1>
      </div>

      <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
        {recentPosts.length > 0 ? (
          recentPosts.map((post, index) => {
            const publishedDate = post.published
              ? new Date(post.published).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : "No date";

            return (
              <div key={index} className="relative">
                <a
                  href={post.url!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-6 p-6 transition-all duration-200 hover:bg-zinc-800/50"
                >
                  {/* Content */}
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <div className="flex items-start gap-4">
                      <h3 className="flex-1 text-lg font-semibold text-white transition-colors group-hover:text-aurora-blue">
                        {post.title}
                      </h3>
                      <ExternalLink className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-500 transition-colors group-hover:text-aurora-blue" />
                    </div>

                    {post.description && (
                      <p className="line-clamp-2 text-sm text-gray-400">
                        {post.description.replace(/<[^>]*>/g, "")}
                      </p>
                    )}

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      {post.authors && post.authors.length > 0 && (
                        <span className="font-medium">
                          {post.authors.map((author) => author.name).join(", ")}
                        </span>
                      )}
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        <span>{publishedDate}</span>
                      </div>
                    </div>
                  </div>
                </a>

                {/* Separator line, except for last item */}
                {index < recentPosts.length - 1 && (
                  <div className="mx-6 border-t border-zinc-800" />
                )}
              </div>
            );
          })
        ) : (
          <div className="p-6 text-center text-gray-400">
            No blog posts available
          </div>
        )}
      </div>

      {/* View All Posts Link - Separate from the card */}
      {recentPosts.length > 0 && (
        <a
          href="https://docs.getaurora.dev/blog"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/30 px-6 py-3 text-sm font-medium text-gray-300 backdrop-blur-sm transition-all duration-200 hover:border-aurora-blue hover:bg-zinc-800/50 hover:text-aurora-blue"
        >
          <span>View all blog posts</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      )}
    </div>
  );
}
