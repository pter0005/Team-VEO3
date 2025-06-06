import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 w-full text-center">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-[56px] lg:text-[56px] font-bold mb-6">
          Lucre todos os dias com vídeos virais <br className="hidden md:block" />
          usando a nova IA do Google{' '}
          <span className="bg-gradient-to-r from-primary via-accent to-primary gradient-text">
            PTER-VEO3
          </span>
        </h1>

        {/* Vídeo Incorporado do YouTube */}
        <div className="relative max-w-3xl mx-auto my-8 md:my-12 aspect-video rounded-xl overflow-hidden shadow-2xl border border-primary/20">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/XofVssZlpIE" // Link atualizado
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <p className="font-dm-sans text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
          Ganhar dinheiro utilizando IA nunca foi tão simples.
        </p>

        <Button
          asChild
          id="comecar"
          size="lg"
          className="bg-gradient-orange-red text-primary-foreground font-bold text-lg md:text-xl py-4 px-10 md:py-5 md:px-12 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
        >
          <Link href="https://pay.kiwify.com.br/fDJSYQh">Quero Começar Agora</Link>
        </Button>
      </div>
    </section>
  );
}
