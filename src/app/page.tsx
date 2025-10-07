import Header from "@/components/mvpblocks/header-1";
import HeroSecion from "@/components/mvpblocks/geometric-hero";
import Services from "@/components/mvpblocks/feature-1";
import FAQ from "@/components/mvpblocks/faq-3";
import Footer from "@/components/mvpblocks/footer-4col";
import Contact from "@/components/mvpblocks/contact-us-2";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSecion />
        <Services />
        <FAQ />
        <Contact className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24"/>
      </main>
      <Footer/>
    </>
  );
}
