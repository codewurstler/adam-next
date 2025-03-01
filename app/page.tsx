import Hero from "@/app/components/Hero";
import {SocialIcon} from "react-social-icons/component";
import 'react-social-icons/youtube';
import 'react-social-icons/tiktok';
import 'react-social-icons/instagram';
import Concerts from "@/app/components/Concerts";

export const revalidate = 60
export const dynamicParams = true

export default function Home() {
    return (
        <>
            <Hero></Hero>
            <div id="content">
                <section id="concerts" className="py-20 lg:py-32">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl lg:text-6xl text-primary mb-20">Upcoming Concerts</h2>
                        <div className="overflow-x-auto max-w-4xl mx-auto">
                            <Concerts />
                        </div>
                    </div>
                </section>
                <section id="booking" className="py-20 lg:py-32 bg-gray-200">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl lg:text-6xl text-primary mb-20">Contact / Booking</h2>
                        <p className="text-2xl">Contact us now for any booking related questions and more.</p>
                        <p className="text-2xl mt-2">dudesofadam@gmail.com</p>
                        <a href="mailto:dudesofadam@gmail.com" className="btn btn-primary btn-lg mt-12">Contact us
                            now!</a>
                    </div>
                </section>
                <section id="social-media" className="py-20 lg:py-32 bg-gray-300">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl lg:text-6xl text-primary mb-20">Social Media</h2>
                        <p className="text-2xl">Checkout out all of our social media channels.</p>
                        <p className="text-2xl mt-2">Don&#39;t forget to follow!</p>

                        <div className="flex justify-center space-x-12 flex-wrap mt-10">
                            <div><SocialIcon url="https://www.instagram.com/dudesofadam" target="_blank"
                                             rel="noopener noreferrer"/></div>
                            <div><SocialIcon url="https://www.youtube.com/@Dudes_of_Adam" target="_blank"
                                             rel="noopener noreferrer"/></div>
                            <div><SocialIcon url="https://www.tiktok.com/@dudesofadam" target="_blank"
                                             rel="noopener noreferrer"/></div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
