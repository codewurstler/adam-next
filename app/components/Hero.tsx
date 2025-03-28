'use client'

import Image from "next/image";
import {ChevronDoubleDownIcon} from "@heroicons/react/24/outline";
import Navigation from "@/app/components/Navigation";

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
           <Navigation />

            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(/adam.jpg)",
                }}>
                <div className="hero-overlay logo-bg"></div>
                <div className="hero-content h-full relative">
                    <div className="max-w-xl text-center">
                        <Image src="/adam_white.svg"
                               height={0}
                               width={0}
                               style={{width:'500px', height: "auto" }}
                               alt="logo hero"
                               priority={true}
                        />
                        <button onClick={() => scrollToElement("content")} className="btn btn-primary btn-outline btn-square absolute bottom-10" aria-label="Scroll down to content"><ChevronDoubleDownIcon className="h-6 w-6"></ChevronDoubleDownIcon></button>
                    </div>
                </div>
            </div>
        </div>
    );
}