import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { EducationalSection } from '@/components/EducationalSection';
import { Comparison } from '@/components/Comparison';
import { SocialProof } from '@/components/SocialProof';
import { AppDownload } from '@/components/AppDownload';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <EducationalSection />
        <Comparison />
        <SocialProof />
        <AppDownload />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
