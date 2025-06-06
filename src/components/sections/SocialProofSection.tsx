import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Users, BarChart3 } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    image: "https://placehold.co/400x300.png?text=Print+DM",
    alt: "Direct Message Testimonial",
    caption: "“Finalmente consegui viralizar! Obrigado PTER-VEO3!”",
    icon: MessageSquare,
    hint: "chat bubble"
  },
  {
    id: 2,
    image: "https://placehold.co/400x300.png?text=Instagram+Views",
    alt: "Instagram Views Proof",
    caption: "+300k views no primeiro vídeo seguindo o método.",
    icon: BarChart3,
    hint: "graph chart"
  },
  {
    id: 3,
    image: "https://placehold.co/400x300.png?text=Followers+Increase",
    alt: "Follower Increase Proof",
    caption: "Meus seguidores não param de crescer!",
    icon: Users,
    hint: "social profile"
  },
];

export default function SocialProofSection() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          Resultados <span className="text-primary">Reais</span> dos Nossos Alunos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card border-border shadow-lg overflow-hidden group">
              <CardContent className="p-0">
                 <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.alt}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={testimonial.hint}
                        className="transition-transform duration-300 group-hover:scale-105"
                    />
                 </div>
                <div className="p-6 text-center">
                  <testimonial.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground italic">"{testimonial.caption}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* For a real carousel, you'd use a library or custom implementation here */}
        <p className="text-center mt-8 text-sm text-muted-foreground">(Carrossel de depoimentos e resultados)</p>
      </div>
    </section>
  );
}
