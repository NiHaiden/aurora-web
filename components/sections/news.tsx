"use client";
import React, { RefObject, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function News({ newsRef }: { newsRef: RefObject<any> }) {
  const [discourseHtml, setDiscourseHtml] = React.useState({ __html: "" });

  useEffect(() => {
    const lists = document.querySelectorAll("d-topics-list");

    for (let i = 0; i < lists.length; i++) {
      const list = lists[i];
      const url = list.getAttribute("discourse-url");
      if (!url || url.length === 0) {
        console.error("Error, `discourse-url` was not found");
        continue;
      }
      const frameId = `de-${Math.random().toString(36).substr(2, 9)}`;
      const params = [`discourse_embed_id=${frameId}`];
      list.removeAttribute("discourse-url");

      for (let j = 0; j < list.attributes.length; j++) {
        const attr = list.attributes[j];
        params.push(`${attr.name.replace("-", "_")}=${attr.value}`);
      }

      const iframe = document.createElement("iframe");
      iframe.src = `${url}/embed/topics?${params.join("&")}`;
      iframe.className = "rounded-2xl w-[850px] overflow-y-scroll";
      iframe.id = frameId;
      iframe.frameBorder = String(0);
      iframe.scrolling = "no";
      list.appendChild(iframe);
    }
  }, []);
  const t = useTranslations("Navbar");
  return (
    <div
      ref={newsRef}
      className={"flex w-full flex-col items-center justify-center"}
    >
      <div className={"animate-fade-up"}>
        <div className={"flex flex-row items-center justify-center gap-5"}>
          <h1
            className={
              "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-4xl font-bold text-transparent lg:text-7xl"
            }
          >
            {t("news")}
          </h1>
        </div>
        <div
          className={
            "h-[350px] w-full min-w-[450px] rounded-2xl p-6 invert lg:w-[850px]"
          }
          dangerouslySetInnerHTML={discourseTopics()}
        />
      </div>
    </div>
  );
}

function discourseTopics() {
  return {
    __html:
      ' <d-topics-list discourse-url="https://universal-blue.discourse.group" per-page="5" tags="aurora-news" template="complete"></d-topics-list> ',
  };
}
