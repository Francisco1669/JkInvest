import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { EducationalSection } from '@/components/EducationalSection';
import { SocialProof } from '@/components/SocialProof';
import { AppDownload } from '@/components/AppDownload';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <EducationalSection />
      <SocialProof />
      <AppDownload />
      <FinalCTA />
      <Footer />
    </main>
  );
}
