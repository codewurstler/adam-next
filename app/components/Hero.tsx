import Image from "next/image";
import Link from "next/link";
import {Bars3BottomLeftIcon} from "@heroicons/react/24/outline";

export default function Hero() {
    return (
        <div className="relative w-full h-screen">
            {/* Navbar */}
            <div className="navbar bg-base-100 fixed top-0 left-0 z-10">
                <div className="container">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-lg">
                            <Image src="/adam_schwarz.svg" width="75" height="20" alt="logo" />
                        </a>
                    </div>
                    <div className="flex-none">
                        <details className="dropdown">
                            <summary className="btn btn-square m-1"><Bars3BottomLeftIcon className="h-6 w-6"></Bars3BottomLeftIcon></summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </details>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="hero min-h-screen">
                {/* Background Image */}
                <Image
                    src="/adam.jpg"
                    alt="Hero Background"
                    fill={true}
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="hero-content text-center text-white">
                    <div className="container">
                        <div>
                            <Image src="/adam_outline.svg" width="400" height="200" alt="logo" />
                            <h1 className="hidden">Adam</h1>
                            <p className="text-xl mt-2">Kinda good but also kinda chaos</p>
                            <Link href="#booking" className="btn btn-primary mt-4">Book us now!</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dummy Sections */}
            <section id="about" className="h-screen flex items-center justify-center bg-gray-100">
                <h2 className="text-3xl font-bold">About Us</h2>
            </section>
            <section id="services" className="h-screen flex items-center justify-center bg-gray-200">
                <h2 className="text-3xl font-bold">Our Services</h2>
            </section>
            <section id="contact" className="h-screen flex items-center justify-center bg-gray-300">
                <h2 className="text-3xl font-bold">Contact Us</h2>
            </section>
        </div>
    );
}