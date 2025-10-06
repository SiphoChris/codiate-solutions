import Header from "@/components/mvpblocks/header-1";
import HeroSecion from "@/components/mvpblocks/geometric-hero";
import Services from "@/components/mvpblocks/feature-1";
import FAQ from "@/components/mvpblocks/faq-3";
import Footer from "@/components/mvpblocks/footer-4col";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSecion />
        <Services />
        <FAQ />
      </main>
      <Footer/>
    </>
  );
}
