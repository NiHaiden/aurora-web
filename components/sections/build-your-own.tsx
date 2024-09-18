import { ArrowRightCircle, Hammer } from "lucide-react";

export default function BuildYourOwn() {
	return (
		<div
			className={
				"w-full min-h-fit h-full p-20 lg:p-40 bg-gradient-to-tr from-aurora-darkblue to-aurora-blue "
			}
		>
			<div className={"flex flex-col justify-center w-full gap-5"}>
				<div className={"flex flex-row gap-3"}>
					<h1
						className={
							"lg: flex items-center gap-2 text-2xl lg:text-6xl text-white font-bold drop-shadow-md"
						}
					>
						<Hammer className={"w-12 h-12 text-white"} />
						Build Your Own Aurora
					</h1>
				</div>
				<div
					className={
						"w-full grid h-fit grid-rows-1 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-20"
					}
				>
					<div
						className={
							"flex flex-col gap-3 text-xl lg:text-2xl text-white w-full"
						}
					>
						Do you want to build your own image? Want to extend Aurora with your
						custom themes and bling? Use our image template to help you get
						started. All you need is some working knowledge on containerization
						with Docker and a little bit of time. Let's goooo!
						<a
							className={
								"flex flex-row gap-2 justify-center items-center bg-gradient-to-tr from-aurora-purple to-aurora-darkblue rounded-3xl drop-shadow-md w-fit p-5"
							}
							href={"https://github.com/ublue-os/image-template"}
						>
							Get the image template{" "}
							<ArrowRightCircle className={"w-10 h-10"} />
						</a>
					</div>
					<div className={"h-fit"}>
						<img
							className={"w-full hidden lg:block lg:max-w-[900px]"}
							alt={"Picture of Code for first Aurora Custom Image"}
							src={"/carbon(3).png"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
