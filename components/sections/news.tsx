"use client";
import React, { RefObject, useEffect } from "react";
import { NewspaperIcon } from "lucide-react";

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
			iframe.className = "rounded-2xl w-[850px] border border-aurora-darkblue";
			iframe.id = frameId;
			iframe.frameBorder = String(0);
			iframe.scrolling = "no";
			list.appendChild(iframe);
		}
	}, []);

	return (
		<div
			ref={newsRef}
			className={
				"bg-white w-full flex flex-col justify-center items-center p-40"
			}
		>
			<div className={"animate-fade-up"}>
				<h1
					className={
						"w-fit p-4 text-7xl font-bold bg-gradient-to-br drop-shadow-md from-aurora-lightorange via-aurora-darkblue to-aurora-lightorange bg-clip-text text-transparent leading-tight flex flex-row items-center gap-3"
					}
				>
					<NewspaperIcon
						className={"w-12 h-12 lg:w-24 lg:h-24 stroke-aurora-darkblue"}
					/>
					News
				</h1>
				<div
					className={
						"min-w-[350px] w-full lg:w-[850px] h-[350px] p-4  rounded-2xl"
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
			' <d-topics-list discourse-url="https://universal-blue.discourse.group" per-page="5" tags="bluefin-news" template="complete"></d-topics-list> ',
	};
}
