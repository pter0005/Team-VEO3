
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Users, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    image: "https://i.imgur.com/1FcDkwo.png",
    alt: "Depoimento em mensagem direta mostrando sucesso com Team VEO3",
    caption: "Esse curso me salvou, comecei dia 1 e já consegui minha primeira grana",
    icon: MessageSquare,
    hint: "social proof"
  },
  {
    id: 2,
    image: "https://i.imgur.com/wr9aTj8.png",
    alt: "Print de tela mostrando ganhos financeiros após usar o Team VEO3",
    caption: "Comecei um perfil hoje e meu primeiro vídeo está com 100 mil visualizações",
    icon: BarChart3,
    hint: "earnings proof"
  },
  {
    id: 3,
    image: "https://placehold.co/400x300.png",
    alt: "Gráfico mostrando aumento de seguidores após usar o Team VEO3",
    caption: "Meus seguidores não param de crescer!",
    icon: Users,
    hint: "followers increase"
  },
];

export default function SocialProofSection() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-background-end scroll-mt-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          Resultados <span className="text-primary">Reais</span> dos Nossos Alunos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card border-border shadow-lg overflow-hidden group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-primary-glow-soft hover:border-primary/50">
              <CardContent className="p-0">
                 <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.alt}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={testimonial.hint}
                        className={cn(
                          "transition-transform duration-300 group-hover:scale-105"
                        )}
                    />
                 </div>
                <div className="p-6 text-center">
                  <testimonial.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground italic font-rubik">"{testimonial.caption}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center mt-8 text-sm text-muted-foreground font-rubik">(Carrossel de depoimentos e resultados)</p>
      </div>
    </section>
  );
}

