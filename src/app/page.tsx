import Header from "@/components/mvpblocks/header-1";
import HeroSecion from "@/components/mvpblocks/geometric-hero";
import Services from "@/components/mvpblocks/feature-1";
import FAQ from "@/components/mvpblocks/faq-3";
import Footer from "@/components/mvpblocks/footer-4col";
import Contact from "@/components/mvpblocks/contact-us-2";
import CTASection from "@/_components/cta-section";
import PricingSection from "@/_components/pricing-section";
import Portfolio from "@/_components/portfolio-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSecion />
        <Services />
        <Portfolio />
        <CTASection />
        <PricingSection />
        <Contact className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24" />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
