import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import CultureSection from "@/components/culture/CultureSection";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import WhyChooseSection from "@/components/why-choose/WhyChooseSection";
import CtaBanner from "@/components/cta/CtaBanner";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CultureSection />
      <HowItWorks />
      <WhyChooseSection />
      <CtaBanner />
      <Footer />
    </main>
  );
}
