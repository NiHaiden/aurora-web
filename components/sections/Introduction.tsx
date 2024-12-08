import { ChevronDown } from "lucide-react";
import { RefObject } from "react";

export default function Introduction({
  introRef,
  aboutRef,
}: {
  introRef: RefObject<any>;
  aboutRef: RefObject<any>;
}) {
  return (
    <div
      ref={introRef}
      className={
        "bgimg flex w-1/4 animate-fade-up flex-col justify-center gap-4 text-wrap text-white animate-ease-linear"
      }
    >
      <div className={"flex flex-col items-center justify-center lg:m-0"}>
        <div
          className={
            "m-6 mt-20 flex flex-col items-center justify-center gap-5 p-4"
          }
        >
          <img
            className={"h-[250px] w-[250px] lg:h-[375px] lg:w-[350px]"}
            src={"/aurora-v3_logo.svg"}
          />
          <h1
            className={
              "h-fit bg-gradient-to-r from-aurora-lightorange via-aurora-darkblue to-aurora-blue bg-clip-text p-1 text-center text-3xl font-black leading-snug text-transparent drop-shadow-md lg:text-6xl"
            }
          >
            Hello stargazer, a new experience awaits.
          </h1>
          <h1 className={"text-center text-2xl"}>
            Powered by the awesomeness of KDE and Universal Blue, crafted for
            you.
          </h1>
          <p className={"text-center text-xl"}>
            Get onboard. Aurora is the ultimate desktop OS for your developer
            workstation or the perfect maintenance-free OS for everyone.
            <br />
            Let's gaze at the stars together, fellow traveller.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center p-4">
        <div
          className="animate-smooth-bounce flex cursor-pointer flex-row items-center gap-2"
          onClick={() => {
            aboutRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <ChevronDown className="h-16 w-16 text-white" />
          <span className={"text-2xl"}>Learn more</span>
        </div>

        <style jsx>{`
          @keyframes smooth-bounce {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(20px);
            }
          }

          .animate-smooth-bounce {
            animation: smooth-bounce 1.5s cubic-bezier(0.45, 0.05, 0.55, 0.95)
              infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
