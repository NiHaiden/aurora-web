"use client";
import React, { useEffect } from "react";
import { NewspaperIcon } from "lucide-react";

export default function News() {

  const [discourseHtml, setDiscourseHtml] = React.useState({ __html: "" });

  useEffect(() => {
    setDiscourseHtml(discourseTopics());
  }, []);

  return (
    <>
      <div className={"bg-gray-300 w-full flex flex-col justify-center items-center p-40"}>
        <div className={"animate-fade-up"}>
          <h1
            className={"text-4xl font-bold bg-gradient-to-br drop-shadow-md from-aurora-lightorange via-aurora-darkblue to-aurora-lightorange text-transparent bg-clip-text leading-tight flex flex-row items-center gap-3"}>
            <NewspaperIcon
              className={"w-12 h-12 lg:w-24 lg:h-24 stroke-aurora-darkblue"} />News</h1>
          <div className={"w-[500px] h-[350px]"} dangerouslySetInnerHTML={discourseHtml}></div>
        </div>
      </div>
    </>
  );
}


function discourseTopics() {
  return { __html: " <d-topics-list discourse-url=\"https://universal-blue.discourse.group\" per-page=\"5\" tags=\"bluefin-news\" template=\"complete\"></d-topics-list> " };
}


export function DiscourseForum() {
  useEffect(() => {
    // @ts-ignore
    window.DiscourseEmbed = {
      discourseUrl: "https://universal-blue.discourse.group/",
      tags: "bluefin-news"
    };

    const d = document.createElement("script");
    d.type = "text/javascript";
    d.async = true;
    // @ts-ignore
    d.src = window.DiscourseEmbed.discourseUrl + "javascripts/embed.js";
    (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(d);
  }, []);

  return (
    <div>
      <div id="discourse-comments"></div>
    </div>
  );
}

