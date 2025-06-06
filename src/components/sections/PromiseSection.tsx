
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

interface VideoExample {
  id: number;
  title: string;
  thumb?: string; // Thumbnail can be optional if we're embedding directly
  videoUrl: string; // Original watch URL
  embedUrl: string; // URL for iframe embedding
  hint: string;
}

function getYouTubeEmbedUrl(watchUrl: string): string {
  let videoId = '';
  try {
    const url = new URL(watchUrl);
    if (url.hostname === 'youtu.be') {
      videoId = url.pathname.substring(1);
    } else if (url.hostname === 'www.youtube.com' || url.hostname === 'youtube.com') {
      if (url.pathname === '/watch') {
        videoId = url.searchParams.get('v') || '';
      } else if (url.pathname.startsWith('/embed/')) {
        videoId = url.pathname.substring('/embed/'.length);
      } else if (url.pathname.startsWith('/shorts/')) {
        videoId = url.pathname.substring('/shorts/'.length);
      }
    }
  } catch (e) {
    // Invalid URL or not a YouTube URL, use a placeholder
    return 'https://www.youtube.com/embed/XofVssZlpIE'; // Default placeholder video
  }

  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return 'https://www.youtube.com/embed/XofVssZlpIE'; // Fallback placeholder
}

const videoExamplesData: Omit<VideoExample, 'embedUrl'>[] = [
  { 
    id: 1, 
    title: "POV: Vc é uma gótica em aracajú", 
    thumb: "https://img.youtube.com/vi/kLJm-nZGFsc/sddefault.jpg", 
    videoUrl: "https://www.youtube.com/watch?v=kLJm-nZGFsc",
    hint:"gothic style" 
  },
  { 
    id: 2, 
    title: "POV: Vc é uma gótica em aracajú 2", 
    thumb: "https://img.youtube.com/vi/utBOsHZ7yAc/sddefault.jpg", 
    videoUrl: "https://www.youtube.com/watch?v=utBOsHZ7yAc", 
    hint:"gothic style" 
  },
  { 
    id: 3, 
    title: "POV: Vc está dando fuga na guarda colonial francesa", 
    thumb: "https://img.youtube.com/vi/flZ5EBFnLqM/sddefault.jpg", 
    videoUrl: "https://www.youtube.com/watch?v=flZ5EBFnLqM",
    hint:"action scene" 
  },
  { 
    id: 4, 
    title: "POV: Seu time perdeu", 
    thumb: "https://img.youtube.com/vi/VTxWgMCixCs/sddefault.jpg", 
    videoUrl: "https://www.youtube.com/watch?v=VTxWgMCixCs",
    hint:"soccer loss" 
  },
  {
    id: 5,
    title: "POV: Os mendigos estão arrasados por causa da virginia e do zé",
    thumb: "https://img.youtube.com/vi/8uiI9Cq72e4/sddefault.jpg",
    videoUrl: "https://youtu.be/8uiI9Cq72e4",
    hint: "comedy sketch"
  },
  {
    id: 6,
    title: "POV: Aracaju - Sergipe",
    thumb: "https://img.youtube.com/vi/GA8hqCUUIn0/sddefault.jpg",
    videoUrl: "https://youtu.be/GA8hqCUUIn0",
    hint: "city drone"
  }
];

const videoExamples: VideoExample[] = videoExamplesData.map(video => ({
  ...video,
  embedUrl: getYouTubeEmbedUrl(video.videoUrl),
}));

export default function PromiseSection() {
  return (
    <section className="py-16 md:py-24 bg-[#111111]">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 text-center">
        <h2 className="font-sora text-3xl md:text-4xl font-bold mb-6">
          Você <span className="text-primary">Não Precisa Ser Expert</span> Para Criar Vídeos Virais
        </h2>
        <p className="max-w-3xl mx-auto text-muted-foreground text-base sm:text-lg mb-12 font-rubik">
          Os vídeos abaixo foram criados por mim e, em apenas 2 dias, ultrapassaram 15 milhões de visualizações no TikTok e no Instagram.
          Neste curso, você vai aprender exatamente como eu consegui esse resultado e como qualquer pessoa pode lucrar com a VEO3, mesmo sem saber nada de edição ou computadores.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videoExamples.map((video) => (
            <Card 
              key={video.id} 
              className="rounded-xl overflow-hidden group bg-card border-border hover:shadow-primary-glow-soft hover:border-primary/50 transition-all duration-300 ease-in-out h-full flex flex-col hover:scale-105"
            >
              <CardContent className="p-0 flex-grow flex flex-col">
                <div className="relative w-full aspect-video">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src={video.embedUrl}
                    title={video.title} 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
