
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

const videoExamples = [
  { id: 1, title: "POV: Vc é uma gótica em aracajú", thumb: "https://img.youtube.com/vi/kLJm-nZGFsc/sddefault.jpg", hint:"gothic style" },
  { id: 2, title: "POV: Vc é uma gótica em aracajú 2", thumb: "https://placehold.co/600x400.png", hint:"movie scene" },
  { id: 3, title: "POV: O que deveria ter acontecido em 1500n mudou nada nao cara n mudou nada nao cara", thumb: "https://placehold.co/600x400.png", hint:"finance chart" },
  { id: 4, title: "POV: Seu time perdeu", thumb: "https://img.youtube.com/vi/VTxWgMCixCs/sddefault.jpg", hint:"soccer loss" },
];

export default function PromiseSection() {
  return (
    <section className="py-16 md:py-24 bg-[#111111]">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 text-center">
        <h2 className="font-sora text-3xl md:text-4xl font-bold mb-6">
          Você <span className="text-primary">Não Precisa Ser Expert</span> Para Criar Vídeos Virais
        </h2>
        <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg mb-12 font-rubik">
          Os vídeos abaixo foram criados por mim, em apenas 2 dias eu viralizei eles alcançando mais de 15 milhões de visualização no TikTok e no Instagram. E nesse curso você vai aprender como fiz isso, e como qualquer pessoa consegue lucrar com a VEO3 sem precisar ser o expert em computadores.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {videoExamples.map((video) => (
            <Card key={video.id} className="overflow-hidden group bg-card border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={video.thumb}
                    alt={video.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={video.hint}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle className="h-12 w-12 text-white/80" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-sora font-semibold text-sm text-foreground truncate group-hover:text-primary transition-colors">{video.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

