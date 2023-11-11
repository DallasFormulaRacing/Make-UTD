import Image from "next/image";
import tempHomeImage from "public/temp_home.png";
import Navbar from "./(Shared-Components)/Navbar";
import About from "./(home)/About";

export default function Home() {
    return (
        <main className="">
            <div className="relative h-[100svh] bg-[url('../public/temp_space_home.jpg')] bg-cover">
                <Navbar />
            </div>
            <About />
            Something
        </main>
    );
}
