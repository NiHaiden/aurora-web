import {GlowEffect} from "@/components/ui/glow";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {MagicCard} from "@/components/magicui/magic-card";
import {auroraColors} from "@/lib/aurora-colors";
import KDELogo from "@/components/icons/kde";

export default function YourNewDesktop() {
    return (
        <div className="relative flex flex-col items-center justify-center gap-10">
            <div
                className={
                    "relative aspect-auto h-full w-full max-w-screen-2xl lg:min-w-[750px]"
                }
            >
                <div className="relative h-full w-full">
                    <GlowEffect
                        colors={[
                            "#3B1C6F",
                            "#D95C7F",
                            "#66B9F2",
                            "#4E67B2",
                            "#EC92A1",
                            "#AA507A",
                        ]}
                        mode="colorShift"
                        blur="soft"
                        duration={5}
                        scale={1.008}
                    />
                    <div className="relative h-full w-full bg-black text-white dark:bg-white dark:text-black">
                        <img
                            className={"h-full w-full"}
                            src={"/fresh-desktop.png"}
                            alt={"Desktop"}
                        />
                    </div>
                </div>
            </div>
            <div className={"flex w-full max-w-screen-2xl flex-col gap-3"}>
                <h2 className="text-3xl font-semibold">
                    <h1
                        className={
                            "bg-gradient-to-br from-aurora-blue to-aurora-orangina bg-clip-text text-4xl font-bold text-transparent lg:text-7xl"
                        }
                    >
                        Welcome, it's your new desktop.
                    </h1>
                </h2>
                <p className="w-full text-2xl">
                    <div
                        className={
                            "w-full text-xl font-semibold text-white lg:text-3xl"
                        }
                    >
                        Power on and feel right at home when using your computer, from
                        the first moment on.
                        <br />
                        Develop faster than ever before. Explore the galaxy. Write
                        your next novel.
                    </div>
                </p>
                <div className={"grid grid-cols-1 gap-10 lg:grid-cols-2"}>
                    <Card className={"border-none bg-black text-white"}>
                        <MagicCard
                            className={"border-none"}
                            gradientColor={auroraColors.blue}
                            gradientFrom={auroraColors.blue}
                            gradientTo={auroraColors.darkBlue}
                            gradientSize={100}
                            gradientOpacity={0.3}
                        >
                            <CardHeader>
                                <CardTitle className={"flex flex-row items-center gap-3"}>
                                    <KDELogo size={64} />
                                    <h1 className={"text-3xl font-bold"}>
                                        Built with KDE Plasma.
                                    </h1>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div>
                                    Aurora is built around the customizable and adaptable KDE
                                    Plasma Desktop Environment. <br />
                                    Customized by us to have the best experience out of the
                                    box. Feel right at home.
                                </div>
                            </CardContent>
                        </MagicCard>
                    </Card>
                    <Card className={"border-none bg-black text-white"}>
                        <MagicCard
                            className={"h-full border-none"}
                            gradientColor={auroraColors.blue}
                            gradientFrom={auroraColors.blue}
                            gradientTo={auroraColors.darkBlue}
                            gradientSize={100}
                            gradientOpacity={0.3}
                        >
                            <CardHeader>
                                <CardTitle className={"flex flex-row items-center gap-3"}>
                                    <h1 className={"text-3xl font-bold"}>
                                        Sensible defaults
                                    </h1>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div>
                                    Aurora is built around the customizable and adaptable KDE
                                    Plasma Desktop Environment. <br />
                                    Customized by us to have the best experience out of the
                                    box. Feel right at home.
                                    <br />
                                    We did the work for you.
                                </div>
                            </CardContent>
                        </MagicCard>
                    </Card>
                </div>
            </div>
        </div>
    )
}