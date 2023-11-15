import Image from "next/image";
import tempHomeImage from "public/temp_home.png";
import Navbar from "./(Shared-Components)/Navbar";
import About from "./(home)/About";
import Challenges from "./(home)/Challenges";
import FAQ from "./(home)/FAQ";

export default function Home() {
    return (
        <main className="">
            {/* <Navbar /> */}
            <div className="relative h-[100svh]" />

            <About />
            <Challenges />
            <FAQ />
        </main>
    );
}
