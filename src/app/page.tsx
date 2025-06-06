import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import PromiseSection from '@/components/sections/PromiseSection';
import ResultsSection from '@/components/sections/ResultsSection'; // Nova importação
import CurriculumSection from '@/components/sections/CurriculumSection';
import AccessSection from '@/components/sections/AccessSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import BonusesSection from '@/components/sections/BonusesSection';
import PricingSection from '@/components/sections/PricingSection';
import FaqSection from '@/components/sections/FaqSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <BenefitsSection />
        <PromiseSection />
        <ResultsSection /> {/* Nova seção adicionada */}
        <CurriculumSection />
        <AccessSection />
        <SocialProofSection />
        <BonusesSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
