import Hero from "@/app/components/Hero";
import 'react-social-icons/youtube';
import 'react-social-icons/tiktok';
import 'react-social-icons/instagram';
import Concerts from "@/app/components/Concerts";
import Socialmedia from "@/app/components/Socialmedia";

export const revalidate = 60
export const dynamicParams = true

export default function Home() {
    return (
        <>
            <Hero></Hero>
            <div id="content">
                <section id="intro" className="py-20 lg:py-32">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl lg:text-6xl text-primary">Adam</h1>
                        <h2 className="text-2xl">The Band!</h2>
                        <p className="prose md:prose-xl max-w-none mt-4">Adam is a Swiss rock band delivering powerful alternative rock with raw energy and deep emotions. Known for electrifying live performances, gripping lyrics, and a unique sound, we bring a fresh take on modern rock music. Explore our latest releases, upcoming concerts, and official merchandise. Stay updated with exclusive content, behind-the-scenes insights, and the latest news. Join our community and immerse yourself in the world of Adam – where music meets passion and every note tells a story. Don’t miss out – follow us for updates!</p>
                    </div>
                </section>
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
                        <p className="text-2xl mt-2 mb-10">Don&#39;t forget to follow!</p>
                        <Socialmedia urls={[
                            { url: "https://www.instagram.com/dudesofadam" },
                            { url: "https://www.youtube.com/@Adam-Band" },
                            { url: "https://www.tiktok.com/@dudesofadam" }
                        ]} />
                    </div>
                </section>
            </div>
        </>
    );
}
