import { useRef } from "react";
import {
  Animation,
  Animator,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

export default function AboutAuroraNew() {
  // Batch animations
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  // Make custom animation
  const Spin = (cycle: number, direction: "in" | "out" | "both" = "both") =>
    ({
      in:
        direction === "in" || direction === "both"
          ? { style: { transform: (p) => `rotate(${p * 360 * cycle}deg)` } }
          : {},
      out:
        direction === "out" || direction === "both"
          ? { style: { transform: (p) => `rotate(${p * 360 * cycle}deg)` } }
          : {},
    }) as Animation;

  const parent = useRef<HTMLDivElement>(null);
  return (
    <main className={"w-dvw bg-zinc-950 text-white"}>
      <section ref={parent}>
        <ScrollContainer scrollParent={parent.current}>
          <ScrollPage>
            <Animator animation={batch(Sticky(), Fade(), Spin(1, "out"))}>
              <h1
                className={
                  " bg-gradient-to-r from-aurora-blue to-aurora-orangina bg-clip-text text-6xl lg:text-9xl font-bold text-transparent"
                }
              >
                Hello, stargazer.
              </h1>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <span className={"text-6xl font-bold"}>
                Are you ready to experience Aurora? <br/>
                Let's go for a small journey through your new desktop. <br/>
                Experience tranquality and freedom.
              </span>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={ZoomInScrollOut}>
              <img
                className={"h-full w-full rounded-3xl drop-shadow-2xl"}
                src={"/desktop.png"}
              />
              <h1 className={"text-7xl font-bold text-white"}>
                Welcome to your new desktop.
              </h1>
              <div className={"text-2xl font-semibold text-white"}>
                Aurora is here to delight you with a beautiful, customizable and
                flexible desktop where you feel right at home the moment you
                turn the computer on.
                <br />
                Develop faster than ever before. Explore the galaxy. Write your
                next novel.
              </div>
            </Animator>
          </ScrollPage>
          <section
            style={{ height: "80vh" }}
            className={"bg-zinc-800"}
          ></section>
          <ScrollPage>
            <Animator animation={FadeUp}>
              <span style={{ fontSize: 40 }}>I'm FadeUp ⛅️</span>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <span style={{ fontSize: 40 }}>
                <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
                <Animator animation={MoveIn(1000, 0)}>
                  Nice to meet you 🙋🏻‍♀️
                </Animator>
                - I'm Dante Chun -
                <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
                <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
              </span>
            </div>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky())}>
              <span style={{ fontSize: 40 }}>Done</span>
              <br />
              <span style={{ fontSize: 30 }}>
                There's FadeAnimation, MoveAnimation, StickyAnimation,
                ZoomAnimation
              </span>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </section>

      <section style={{ height: "80vh", backgroundColor: "blue" }}></section>
      <section style={{ height: "80vh", backgroundColor: "green" }}></section>
    </main>
  );
}
