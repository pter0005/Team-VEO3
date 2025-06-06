
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
    thumb: "https://placehold.co/600x400.png", 
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder video
    hint:"movie scene" 
  },
  { 
    id: 3, 
    title: "POV: O que deveria ter acontecido em 1500", 
    thumb: "https://placehold.co/600x400.png", 
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder video
    hint:"finance chart" 
  },
  { 
    id: 4, 
    title: "POV: Seu time perdeu", 
    thumb: "https://img.youtube.com/vi/VTxWgMCixCs/sddefault.jpg", 
    videoUrl: "https://www.youtube.com/watch?v=VTxWgMCixCs",
    hint:"soccer loss" 
  },
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
        <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg mb-12 font-rubik">
          Os vídeos abaixo foram criados por mim, em apenas 2 dias eu viralizei eles alcançando mais de 15 milhões de visualização no TikTok e no Instagram. E nesse curso você vai aprender como fiz isso, e como qualquer pessoa consegue lucrar com a VEO3 sem precisar ser o expert em computadores.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"> {/* Changed to lg:grid-cols-2 for larger videos */}
          {videoExamples.map((video) => (
            <Card key={video.id} className="overflow-hidden group bg-card border-border hover:shadow-primary-glow-soft hover:border-primary/50 transition-all duration-300 ease-in-out h-full flex flex-col hover:scale-105">
              <CardContent className="p-0 flex-grow flex flex-col">
                <div className="relative w-full aspect-video">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={video.embedUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 mt-auto bg-card">
                  <h3 className="font-sora font-semibold text-base text-foreground group-hover:text-primary transition-colors">{video.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
