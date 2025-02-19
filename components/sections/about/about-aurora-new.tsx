import { GlowEffect } from "@/components/ui/glow";

export default function AboutAuroraNew() {
  return (
    <main className={"min-h-dvh bg-zinc-950 text-white p-10"}>
      <div className={"flex flex-row gap-10"}>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="ml-10 relative flex flex-col items-center justify-center gap-10 lg:flex-row">
            <div className={"relative aspect-auto min-w-[860px] h-full w-full"}>
              <div className="relative h-full w-full">
                <GlowEffect
                  colors={['#3B1C6F','#D95C7F', '#66B9F2', '#4E67B2', '#EC92A1',  '#AA507A']}
                  mode='colorShift'
                  blur='soft'
                  duration={5}
                  scale={1.008}
                />
                <div className="relative h-full w-full rounded-lg bg-black text-white dark:bg-white dark:text-black">
                  <img className={"w-full h-full"} src={"/desktop.png"} alt={"Desktop"} />
                </div>
              </div>
            </div>
            <div className={"w-full"}>
              <h2 className="mt-8 text-3xl font-semibold">
                <h1 className={"text-7xl font-bold text-white"}>
                  Welcome to your new desktop.
                </h1>
              </h2>
              <p className="mt-4 w-full text-2xl">
                <div className={"w-full text-3xl font-semibold text-white"}>
                  Aurora is here to delight you with a beautiful, customizable
                  and flexible desktop where you feel right at home the moment
                  you turn the computer on.
                  <br />
                  Develop faster than ever before. Explore the galaxy. Write
                  your next novel.
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

/*
 const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // New intro section
  const introOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const introScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  const imageScale = useTransform(scrollYProgress, [0.1, 0.3], [0.5, 1]);
  const imageOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.4, 0.5],
    [0, 1, 1, 0],
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5, 0.6],
    [0, 1, 1, 0],
  );
  const textY = useTransform(scrollYProgress, [0.3, 0.4], ["50px", "0px"]);

  const almostThereOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.8, 0.9],
    [0, 1, 1, 0],
  );
  const almostThereY = useTransform(
    scrollYProgress,
    [0.6, 0.7],
    ["50px", "0px"],
  );

  const thankYouOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const thankYouY = useTransform(scrollYProgress, [0.9, 1], ["50px", "0px"]);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // New card animations
  const cardOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const card1X = useTransform(scrollYProgress, [0.85, 1], ["-100%", "0%"]);
  const card2Y = useTransform(scrollYProgress, [0.85, 1], ["100%", "0%"]);
  const card3X = useTransform(scrollYProgress, [0.85, 1], ["100%", "0%"]);

  return (
    <div ref={containerRef} className="h-[1500vh] bg-zinc-950 text-white">
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
<motion.div
  style={{ opacity: introOpacity, scale: introScale }}
  className="absolute inset-0 flex items-center justify-center"
>
  <h1 className="bg-gradient-to-r from-aurora-blue to-aurora-orangina bg-clip-text text-6xl font-bold text-transparent lg:text-9xl">
    Are you ready to experience Aurora? <br /> Let's go on a journey.
  </h1>
</motion.div>

<motion.div
  style={{ opacity: imageOpacity, scale: imageScale }}
  className="flex w-full flex-col items-center justify-center"
>
  <div className="relative flex flex-col items-center justify-center gap-10 lg:flex-row">
    <img
      className={"h-full w-full rounded-xl drop-shadow-2xl lg:w-2/3"}
      src={"/desktop.png"}
    />
    <div className={"w-full"}>
      <motion.h2
        style={{ opacity: textOpacity, y: textY }}
        className="mt-8 text-3xl font-semibold"
      >
        <h1 className={"text-7xl font-bold text-white"}>
          Welcome to your new desktop.
        </h1>
      </motion.h2>
      <motion.p
        style={{ opacity: textOpacity, y: textY }}
        className="mt-4 w-full text-2xl"
      >
        <div className={"w-full text-3xl font-semibold text-white"}>
          Aurora is here to delight you with a beautiful, customizable
          and flexible desktop where you feel right at home the moment
          you turn the computer on.
          <br />
          Develop faster than ever before. Explore the galaxy. Write
          your next novel.
        </div>
      </motion.p>
    </div>
  </div>
</motion.div>

<motion.h2
  style={{ opacity: almostThereOpacity, y: almostThereY }}
  className="absolute top-1/2 text-center text-3xl font-semibold"
>
  <h1 className={"text-5xl font-bold text-white"}>
    I want a stable desktop. Can you give me that?
  </h1>

  <h1
    className={
      "bg-gradient-to-br from-aurora-blue to-aurora-orangina bg-clip-text text-6xl font-bold text-transparent lg:text-9xl"
    }
  >
    Yes. And here is why.
  </h1>
</motion.h2>

<motion.div
  style={{ opacity: almostThereOpacity, y: almostThereY }}
  className="absolute top-1/2 text-center text-3xl font-semibold"
>
  <h1 className={"text-5xl font-bold text-white"}>
    hi there.
  </h1>

  <h1
    className={
      "bg-gradient-to-br from-aurora-blue to-aurora-orangina bg-clip-text text-6xl font-bold text-transparent lg:text-9xl"
    }
  >
    Yes. And here is why.
  </h1>
</motion.div>
</motion.div>
</div>
 */

/*
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
            <Animator animation={ batch(Fade(), Move(), Sticky())}>
              <div className={"flex flex-col items-center justify-center"}>
              <h1
                className={
                  " bg-gradient-to-r from-aurora-blue to-aurora-orangina bg-clip-text text-6xl lg:text-9xl font-bold text-transparent"
                }
              >
                Hello, stargazer.
              </h1>
              <div className="text-6xl font-bold h-[300vh] flex flex-col justify-center items-center">
                <span>Are you ready to experience Aurora?</span>
                <span>Let's go for a small journey through your new desktop.</span>
                <span>Experience tranquility and freedom.</span>
              </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator style={{height: "100vh"}} animation={ZoomInScrollOut}>

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
 */