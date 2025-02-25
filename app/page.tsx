import Hero from "@/app/components/Hero";

export default function Home() {
  return (
      <>
          <main>
              <Hero></Hero>
              <div id="content">
                  {/* Dummy Sections */}
                  <section id="about" className="min-h-screen bg-gray-100">
                      <div className="container">
                          <h2 className="text-3xl font-bold">Upcoming Concerts</h2>
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
