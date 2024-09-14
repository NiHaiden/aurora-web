"use client";

import Script from "next/script";

export function DiscourseScript() {
  return (
    <Script type="text/javascript" src="https:///universal-blue.discourse.group/javascripts/embed-topics.js"
            defer></Script>
  )
}