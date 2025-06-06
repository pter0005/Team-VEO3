import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 w-full md:w-11/12 lg:w-9/10 text-center">
        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Lucre todos os dias com vídeos virais <br className="hidden md:block" />
          usando a nova IA do Google{' '}
          <span className="bg-gradient-to-r from-primary via-accent to-primary gradient-text">
            PTER-VEO3
          </span>
        </h1>
        
        <div className="relative max-w-3xl mx-auto my-8 md:my-12 aspect-video rounded-xl overflow-hidden shadow-2xl group cursor-pointer border border-primary/20">
          <Image
            src="https://placehold.co/1280x720.png?text=Demonstra%C3%A7%C3%A3o+do+Curso"
            alt="Demonstração do Curso PTER-VEO3"
            layout="fill"
            objectFit="cover"
            data-ai-hint="video player"
            className="transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <PlayCircle className="h-20 w-20 text-white/80" />
          </div>
           <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
            <PlayCircle className="h-20 w-20 text-primary/70" />
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Ganhar dinheiro utilizando IA nunca foi tão simples.
        </p>

        <Button
          asChild
          id="comecar"
          size="lg"
          className="bg-gradient-orange-red text-primary-foreground font-bold text-lg md:text-xl py-4 px-10 md:py-5 md:px-12 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
        >
          <Link href="#precos">Quero Começar Agora</Link>
        </Button>
      </div>
    </section>
  );
}
