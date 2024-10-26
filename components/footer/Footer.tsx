import { RefObject } from "react";
import { CircleArrowUp, GithubIcon, GitMerge, GlobeIcon } from "lucide-react";

export default function Footer({ introRef }: { introRef: RefObject<any> }) {
  return (
    <>
			<footer
				className={"min-h-[30vh] w-full bg-gray-800 flex flex-col justify-center gap-4 p-12 lg:p-0 text-center text-white items-center"}>
				<button className={"mt-5 flex flex-row items-center gap-5 justify-center"}
								onClick={() => {
									introRef.current.scrollIntoView({
										behavior: "smooth",
										block: "start"
									});
								}}>
					<CircleArrowUp className={"w-10 h-10"} />
					Go up
				</button>
				<div className={"text-xl"}>
					Aurora is proudly built with technology from <a className={"underline font-bold"}
																													href={"https://universal-blue.org"}>Universal Blue</a> a
					community toolkit designed to reboot the Linux desktop. Built for the love of the game. Welcome to Indie Cloud
					Native.
				</div>


				<div>
					Built with ❤️ in Austria.
				</div>
				<div>
					Refined logo built by @reisvg. {"<3"}
				</div>
				<div>
					© Copyright {new Date().getFullYear()} Project Aurora authors.
				</div>

				<div
					className={
						"w-3/5 flex flex-col lg:flex-row gap-5 underline justify-center mb-5"
					}
				>
					<a
						className={"flex flex-row gap-1"}
						href={"https://github.com/ublue-os/bluefin"}
					>
						<GithubIcon /> Aurora GitHub Repository
					</a>

					<a
						className={"flex flex-row gap-1"}
						href={"https://universal-blue.org"}
					>
						<GlobeIcon />
						Universal Blue Website
					</a>

					<a
						className={"flex flex-row gap-1"}
						href={"https://github.com/NiHaiden/aurora-web"}
					>
						<GitMerge />
						Website Source Code
					</a>
				</div>
				<div className={"italic text-sm"}>
					Aurora is not affiliated and or endorsed by The Fedora Project, KDE
					e.V., The KDE Project, Red Hat, Microsoft, ASUS or any other companies
					mentioned above.
				</div>
			</footer>
		</>
	);
}
