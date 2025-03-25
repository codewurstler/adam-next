import Link from "next/link";
import Image from "next/image";
import {Bars3BottomLeftIcon} from "@heroicons/react/24/outline";

function Navigation() {
    return (
        <div className="navbar bg-base-100 fixed top-0 left-0 z-10 shadow-sm">
            <div className="container flex">
                <div className="flex-1">
                    <Link className="btn btn-ghost text-lg" href="/">
                        <Image src="/adam_schwarz.svg"
                               height={0}
                               width={0}
                               style={{width:'auto', height: "100%" }}
                               alt="logo black"
                        />
                    </Link>
                </div>
                <div className="flex-none">
                    <details className="dropdown dropdown-bottom dropdown-end">
                        <summary className="btn btn-square btn-soft btn-primary"><Bars3BottomLeftIcon
                            className="h-6 w-6"></Bars3BottomLeftIcon></summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 min-w-[200px] p-2 shadow-sm mt-4">
                            <li><Link href="/#concerts">Upcoming Concerts</Link></li>
                            <li><Link href="/#booking">Contact / Booking</Link></li>
                            <li><Link href="/#social-media">Social Media</Link></li>
                        </ul>
                    </details>
                </div>
            </div>
        </div>
    );
}

export default Navigation;