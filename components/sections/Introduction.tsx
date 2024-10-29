import { ChevronDown, CircleArrowDown } from "lucide-react";
import { RefObject } from "react";

export default function Introduction({ introRef, aboutRef }: { introRef: RefObject<any>; aboutRef: RefObject<any> }) {
  return (
    <div ref={introRef}
         className={"bgimg flex flex-col gap-4 justify-center text-white w-1/4 text-wrap animate-fade-up animate-ease-linear"}>
      <div className={"flex flex-col items-center justify-center lg:m-0"}>
        <div className={"m-6 mt-20 p-4 flex flex-col justify-center items-center gap-5"}>
          <img className={"w-[250px] h-[250px] lg:w-[350px] lg:h-[375px]"} src={"/aurora-v3_logo.svg"} />
          <h1
            className={"text-3xl lg:text-6xl font-black text-center bg-gradient-to-r from-aurora-lightorange via-aurora-darkblue to-aurora-blue drop-shadow-md text-transparent bg-clip-text leading-snug"}>Hello
            stargazer, a new experience awaits.</h1>
          <h1 className={"text-2xl text-center"}>Powered by the awesomeness of KDE and Universal Blue, crafted for
            you.</h1>
          <p className={"text-xl text-center"}>Get onboard. Aurora is the ultimate desktop OS for your developer
            workstation or the perfect maintenance-free OS for your grandma.
            <br />Let's gaze at the stars together, fellow traveller.</p>
        </div>

      </div>
      <div className="flex justify-center items-center p-4">
        <div className="animate-smooth-bounce cursor-pointer flex flex-row gap-2 items-center" onClick={() => {
          aboutRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }}>
          <ChevronDown className="w-16 h-16 text-white" />
          <span className={"text-2xl"}>Learn more</span>

        </div>

        <style jsx>{`
            @keyframes smooth-bounce {
                0%, 100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(20px);
                }
            }

            .animate-smooth-bounce {
                animation: smooth-bounce 1.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
            }
        `}</style>
      </div>
    </div>
  );
}