import Hero from "@/app/components/Hero";

export default function Home() {
  return (
    <div className="grid">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero></Hero>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
