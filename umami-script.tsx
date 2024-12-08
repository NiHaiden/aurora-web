"use client";

import Script from "next/script";

export default function UmamiScript() {
  return (
    <Script
      src={"https://umami.nhaiden.io/script.js"}
      data-website-id="9e6bac58-0193-43f4-9693-133ded57ec9b"
    />
  );
}
