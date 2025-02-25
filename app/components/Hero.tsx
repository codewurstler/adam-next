'use client'

import Image from "next/image";
import {Bars3BottomLeftIcon, ChevronDoubleDownIcon} from "@heroicons/react/24/outline";

export default function Hero() {
    const scrollToElement = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <div className="relative w-full h-screen">
            {/* Navbar */}
            <div className="navbar bg-base-100 fixed top-0 left-0 z-10">
                <div className="container">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-lg">
                            <Image src="/adam_schwarz.svg" width="50" height="20" alt="logo" />
                        </a>
                    </div>
                    <div className="flex-none">
                        <details className="dropdown dropdown-bottom dropdown-end">
                            <summary className="btn btn-square"><Bars3BottomLeftIcon className="h-6 w-6"></Bars3BottomLeftIcon></summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] min-w-[200px] p-2 shadow mt-3">
                                <li><a>Upcoming Concerts</a></li>
                                <li><a>Contact</a></li>
                                <li><a>Socialmedia</a></li>
                            </ul>
                        </details>
                    </div>
                </div>
            </div>

            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(/adam.jpg)",
                }}>
                <div className="hero-overlay logo-bg"></div>
                <div className="hero-content h-full relative">
                    <div className="max-w-xl text-center">
                        <Image src="/adam_white.svg" width="500" height="200" alt="logo" />
                        <button onClick={() => scrollToElement("content")} className="btn btn-primary btn-outline btn-square absolute bottom-10"><ChevronDoubleDownIcon className="h-6 w-6"></ChevronDoubleDownIcon></button>
                    </div>
                </div>
            </div>
        </div>
    );
}