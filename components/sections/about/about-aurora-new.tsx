import Contributors from "@/components/sections/contributors";
import ParadigmShift from "@/components/sections/about/paradigm-shift";
import AboutDocs from "@/components/sections/about/docs";
import YourNewDesktop from "@/components/sections/about/your-new-desktop";

export default function AboutAuroraNew() {
  return (
    <main className={"min-h-dvh bg-zinc-950 p-10 text-white"}>
      <div className={"flex flex-row gap-10"}>
        <div className="flex w-full flex-col items-center justify-center gap-32">
          <YourNewDesktop />
          <ParadigmShift />
          <Contributors />
          <AboutDocs />
        </div>
      </div>
    </main>
  );
}