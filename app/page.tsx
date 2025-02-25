import Hero from "@/app/components/Hero";
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";
import {SocialIcon} from "react-social-icons/component";
import 'react-social-icons/youtube';
import 'react-social-icons/tiktok';
import 'react-social-icons/instagram';

export default function Home() {
    return (
        <>
            <main>
                <Hero></Hero>
                <div id="content">
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
                                        <td>d&#39;Seiser Curve</td>
                                        <td>Sins, AG</td>
                                        <td><a className="btn btn-link" href="https://seiserkurve.ch/programm/adam-und-voltage-arc.html" target="_blank" rel="noopener noreferrer">More <ArrowTopRightOnSquareIcon className="h-4 w-4" /> </a></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </section>
                    <section id="booking" className="py-20 lg:py-32 bg-gray-200">
                        <div className="container mx-auto text-center">
                            <h2 className="text-4xl lg:text-6xl text-primary mb-20">Contact / Booking</h2>
                            <p className="text-2xl">Contact us now for any booking related questions and more.</p>
                            <p className="text-2xl mt-2">dudesofadam@gmail.com</p>
                            <a href="mailto:dudesofadam@gmail.com" className="btn btn-primary btn-lg mt-12">Contact us now!</a>
                        </div>
                    </section>
                    <section id="socialmedia" className="py-20 lg:py-32 bg-gray-300">
                        <div className="container mx-auto text-center">
                            <h2 className="text-4xl lg:text-6xl text-primary mb-20">Social media</h2>
                            <p className="text-2xl">Checkout out all of our social media channels.</p>
                            <p className="text-2xl mt-2">Don&#39;t forget to follow!</p>

                            <div className="flex justify-center space-x-12 flex-wrap mt-10">
                                <div><SocialIcon url="https://www.instagram.com/dudesofadam" target="_blank" rel="noopener noreferrer" /> </div>
                                <div><SocialIcon url="https://www.youtube.com/@Dudes_of_Adam" target="_blank" rel="noopener noreferrer"/> </div>
                                <div><SocialIcon url="https://www.tiktok.com/@dudesofadam" target="_blank" rel="noopener noreferrer"/> </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            </footer>
        </>
    );
}
