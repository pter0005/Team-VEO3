
import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import PromiseSection from '@/components/sections/PromiseSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import ResultsSection from '@/components/sections/ResultsSection';
import CurriculumSection from '@/components/sections/CurriculumSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import BonusesSection from '@/components/sections/BonusesSection';
import PricingSection from '@/components/sections/PricingSection';
import FaqSection from '@/components/sections/FaqSection';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PromiseSection />
        <BenefitsSection />
        <ResultsSection />
        <CurriculumSection />
        <SocialProofSection />
        <BonusesSection />
        <Suspense fallback={<div className="text-center py-12">Carregando informações de preço...</div>}>
          <PricingSection />
        </Suspense>
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
