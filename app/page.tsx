import Navbar from "@/components/nav/Navbar";
import Introduction from "@/components/Introduction";
import AboutAurora from "@/components/about-aurora";
import Footer from "@/components/footer/Footer";

export default function Home() {
    return (
        <main className="w-full min-h-screen">
            <Navbar/>
            <Introduction/>
            <AboutAurora/>
            <Footer/>
        </main>
    );
}
