import Hero from "@/app/components/Hero";
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";

export default function Home() {
    return (
        <>
            <main>
                <Hero></Hero>
                <div id="content">
                    {/* Dummy Sections */}
                    <section id="concerts" className="py-20 lg:py-32">
                        <div className="container mx-auto text-center">
                            <h2 className="text-4xl lg:text-6xl text-primary mb-20">Upcoming Concerts</h2>

                            <div className="overflow-x-auto max-w-4xl mx-auto">
                                <table className="table table-lg">
                                    {/* head */}
                                    <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Event</th>
                                        <th>Location</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th>05.04.2025</th>
                                        <td>Lanzig Fäscht</td>
                                        <td>Muotathal, SZ</td>
                                        <td><a className="btn btn-link" href="https://sonsofsobchak.jimdofree.com/gig-lanzigf%C3%A4scht/" target="_blank" rel="noopener noreferrer">More <ArrowTopRightOnSquareIcon className="h-4 w-4" /> </a></td>
                                    </tr>
                                    <tr>
                                        <th>12.04.2025</th>
                                        <td>d'Seiser Kurve</td>
                                        <td>Sins, AG</td>
                                        <td><a className="btn btn-link" href="https://seiserkurve.ch/programm/adam-und-voltage-arc.html" target="_blank" rel="noopener noreferrer">More <ArrowTopRightOnSquareIcon className="h-4 w-4" /> </a></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </section>
                    <section id="services" className="h-screen flex items-center justify-center bg-gray-200">
                        <h2 className="text-3xl font-bold">Our Services</h2>
                    </section>
                    <section id="contact" className="h-screen flex items-center justify-center bg-gray-300">
                        <h2 className="text-3xl font-bold">Contact Us</h2>
                    </section>
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            </footer>
        </>
    );
}
