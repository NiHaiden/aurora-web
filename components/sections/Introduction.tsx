import {CircleArrowDown} from "lucide-react";
import {Ref, RefObject} from "react";

export default function Introduction({introRef, aboutRef}: { introRef: RefObject<any>; aboutRef: RefObject<any> }) {
    return (
        <div ref={introRef}
             className={"bgimg flex flex-col gap-4 justify-center text-white w-1/4 text-wrap animate-fade-up animate-ease-linear"}>
            <div className={"flex flex-col items-center justify-center lg:m-0"}>
                <div className={" m-6 p-4 flex flex-col justify-center items-center gap-5"}>
                    <img className={"w-[250px] h-[250px] lg:w-[350px] lg:h-[375px]"} src={"/aurora_v2_logo.svg"}/>
                    <h1 className={"text-5xl lg:text-6xl font-black text-center bg-aurora-blue drop-shadow-md from-aurora-blue text-transparent bg-clip-text"}>Your
                        next-gen Linux Desktop is here.</h1>
                    <h1 className={"text-2xl text-center"}>Powered by KDE, Universal-Blue and you, made for you.</h1>
                    <p className={"text-xl text-center"}>Aurora is the ultimate OS for every type of user, from normal
                        people to pro developers.
                        <br/>
                        Run your spreadsheets or launch the next spacecraft.</p>
                </div>

            </div>
            <div className={"flex flex-col items-center justify-center lg:m-0"}>
            <button className={"mt-5 flex flex-row items-center gap-5 p-3 rounded-2xl justify-center bg-gradient-to-br from-aurora-blue to-aurora-purple animate-bounce"} onClick={() => {
                aboutRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: "start"
                })
            }}>
                <CircleArrowDown className={"w-10 h-10"}/>
                Learn More
            </button>
            </div>
        </div>
    )
}