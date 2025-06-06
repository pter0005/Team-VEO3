import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { VideoOff, Zap, DollarSign, Smartphone, EyeOff } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: EyeOff,
    title: 'Sem Precisar Aparecer',
    description: 'Crie conteúdo de alto impacto sem mostrar o rosto.',
  },
  {
    icon: Zap,
    title: 'Viraliza Fácil e Rápido',
    description: 'Potencial de alcance massivo com menos esforço.',
  },
  {
    icon: DollarSign,
    title: 'Gasto Baixo, Lucro Alto',
    description: 'Monetize sua criatividade com investimento mínimo.',
  },
  {
    icon: Smartphone,
    title: 'Rende em Várias Plataformas',
    description: 'Maximize seus ganhos em Instagram, TikTok, Kwai e Shorts.',
  },
];

export default function BenefitsSection() {
  return (
    <section id="vantagens" className="py-16 md:py-24 bg-card/50 scroll-mt-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          Por que vídeos com <span className="text-primary">PTER-VEO3</span> são a nova onda do digital?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-background-end border border-primary/30 hover:border-primary/70 hover:shadow-primary-glow-soft transition-all duration-300 group shadow-lg">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:animate-pulse-slight">
                  <benefit.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl text-center">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm text-center font-rubik">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
