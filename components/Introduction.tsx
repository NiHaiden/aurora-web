import {CircleArrowDown} from "lucide-react";
import {RefObject} from "react";

export default function Introduction({aboutRef}: {aboutRef: RefObject<any>}) {
    return (
        <div className={"bgimg flex flex-col gap-4 justify-center text-white w-1/4 text-wrap animate-fade-up animate-ease-linear"}>
            <div className={"flex flex-col items-center justify-center lg:m-0"}>
                <div className={" m-6 p-4 flex flex-col justify-center items-center gap-5"}>
                <h1 className={"text-4xl lg:text-6xl font-black text-center"}>Next-gen Linux Desktop is here.</h1>
                    <h1 className={"text-2xl text-center"}>Powered by you, made for you.</h1>
                    <p className={"text-xl text-center"}>Aurora is a clean and reliable desktop operating system, with so much stuff built-in you'll never get configuration fatigue again.</p>
                </div>

            </div>
            <button className={"mt-5 flex flex-row items-center gap-5 justify-center animate-bounce"} onClick={() => {
                aboutRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: "start"
                })
            }}>
                <CircleArrowDown className={"w-10 h-10"}/>
                Learn More
            </button>
        </div>
    )
}