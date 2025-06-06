import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const accessBenefits = [
  'Métodos mais virais do TikTok e Instagram',
  'Tutoriais COMPLETOS da criação de um vídeo',
  'Suporte para qualquer dúvida ou erro',
  'Passo a passo para iniciantes',
];

export default function AccessSection() {
  return (
    <section id="o-que-vai-ter-acesso" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full rounded-lg overflow-hidden shadow-2xl order-last md:order-first">
            <Image
              src="https://placehold.co/600x750.png"
              alt="Homem com lâmpada e raios simbolizando ideias e acesso ao conhecimento"
              layout="fill"
              objectFit="cover"
              data-ai-hint="nikola tesla idea"
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6 md:space-y-8">
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              O Que Você Vai <span className="text-primary">Ter Acesso:</span>
            </h2>
            <ul className="space-y-3 md:space-y-4">
              {accessBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg text-foreground/90 font-rubik">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-rubik text-muted-foreground text-sm md:text-base pt-4">
              Descubra o arsenal completo de ferramentas e conhecimentos que vão te transformar em um mestre da criação de conteúdo viral com IA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
