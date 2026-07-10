import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />

      {/* Scroll progress */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60] pointer-events-none">
        <div className="h-full bg-blue-600 w-0" id="progress" />
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var bar = document.getElementById('progress');
              if(!bar) return;
              function update(){
                var scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
                bar.style.width = scrolled + '%';
              }
              window.addEventListener('scroll', update, {passive:true});
              update();
            })();
          `,
        }}
      />
    </main>
  );
}
