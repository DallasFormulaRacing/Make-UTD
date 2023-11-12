import Image from "next/image";
import tempHomeImage from "public/temp_home.png";
import Navbar from "./(Shared-Components)/Navbar";
import About from "./(home)/About";
import Challenges from "./(home)/Challenges";
import FAQ from "./(home)/FAQ";

export default function Home() {
    return (
        <main className="bg-[#000035]">
            <div className="relative h-[100svh] bg-[url('../public/temp_space_home.jpg')] bg-cover">
                <Navbar />
            </div>
            <About />
            <Challenges />
            <FAQ />
        </main>
    );
}
