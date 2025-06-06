
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import InteractiveBackground from '@/components/InteractiveBackground'; // New component for the background

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-24">
      <InteractiveBackground />
      <div id="hero-section-content" className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <div className="text-left">
            <Badge variant="outline" className="border-primary text-primary mb-3 text-sm py-1 px-3">
              A Nova Geração de IA
            </Badge>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-[52px] lg:text-[56px] font-bold mb-6 leading-tight">
              Lucre Todos os Dias com{' '}
              <span className="block md:inline">Vídeos Virais usando</span>
              <span className="block text-primary">
                Google VEO3
              </span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Descubra como a inteligência artificial VEO3 pode transformar sua produção de conteúdo e monetização, mesmo sem aparecer ou ter experiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-3 px-8 rounded-lg shadow-lg hover:shadow-primary-glow-soft transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                <Link href="#precos">Quero Começar Agora</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:text-accent-foreground hover:bg-accent font-bold text-lg py-3 px-8 rounded-lg transition-all duration-300 w-full sm:w-auto"
              >
                <Link href="#como-funciona">Saber Mais</Link>
              </Button>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-accent" />
                Resultados rápidos, mesmo para iniciantes.
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-accent" />
                Potencial de viralização massivo.
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-accent" />
                Seu vídeo viral começa com um clique — no celular ou no computador.
              </li>
            </ul>
          </div>

          {/* Right Column - Video */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-primary/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-primary-glow-soft">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/XofVssZlpIE"
                title="YouTube video player - Team VEO3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
