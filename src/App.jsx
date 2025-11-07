import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B12] font-inter text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
        <footer className="bg-[#0B0B12] border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 text-center text-sm text-white/60">
            © {new Date().getFullYear()} Yeah SaaS. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
