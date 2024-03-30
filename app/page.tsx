import Navbar from "@/components/nav/Navbar";
import Introduction from "@/components/Introduction";
import AboutAurora from "@/components/about-aurora";
import Footer from "@/components/footer/Footer";
import AboutAuroraDx from "@/components/about-aurora-dx";

export default function Home() {
    return (
        <main className="w-full min-h-screen">
            <Navbar/>
            <Introduction/>
            <AboutAurora/>
            <AboutAuroraDx/>
            <Footer/>
        </main>
    );
}
