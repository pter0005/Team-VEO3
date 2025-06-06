
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function ResultsSection() {
  return (
    <section id="resultados" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-6">
          Resultados que conquistei com o <span className="text-primary">Bot Prompt Viral</span>
        </h2>
        <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg mb-12 text-center font-rubik">
          Descubra como usei prompts prontos e altamente otimizados para criar vídeos virais com inteligência artificial — atraindo milhares de visualizações, engajamento real e seguidores todos os dias. Tudo de forma simples, rápida e automática.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Card className="bg-card border-border shadow-xl overflow-hidden group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-primary-glow-soft hover:border-primary/50">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <Image
                  src="https://i.imgur.com/HSSwxF9.png"
                  alt="Resultado 1 do Bot Prompt Viral"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="success metrics"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border shadow-xl overflow-hidden group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-primary-glow-soft hover:border-primary/50">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <Image
                  src="https://i.imgur.com/byxz3U6.png"
                  alt="Resultado 2 do Bot Prompt Viral"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="achievement chart"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
