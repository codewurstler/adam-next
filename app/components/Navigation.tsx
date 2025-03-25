import Link from "next/link";
import Image from "next/image";
import {Bars3BottomLeftIcon} from "@heroicons/react/24/outline";

function Navigation() {
    return (
        <div className="navbar bg-base-100 fixed top-0 left-0 z-10 shadow-sm">
            <div className="container flex">
                <div className="navbar-start">
                    <Link className="btn btn-ghost text-lg" href="/">
                        <Image src="/adam_schwarz.svg"
                               height={0}
                               width={0}
                               style={{width:'auto', height: "100%" }}
                               alt="logo black"
                        />
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-square btn-soft btn-primary">
                            <Bars3BottomLeftIcon className="h-6 w-6"></Bars3BottomLeftIcon>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-100 rounded-box z-1 min-w-[200px] p-2 shadow-sm mt-4">
                            <li><Link href="/#concerts">Upcoming Concerts</Link></li>
                            <li><Link href="/#booking">Contact / Booking</Link></li>
                            <li><Link href="/#social-media">Social Media</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;

