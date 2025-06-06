
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const summarizedCurriculumItems = [
  'Crie vídeos virais com Google Veo 3 e integre com ChatGPT.',
  'Domine a edição profissional e as melhores técnicas de viralização.',
  'Aprenda a criar prompts cinematográficos para IA.',
  'Descubra estratégias eficazes para monetizar seu conteúdo online.',
  'Automatize a criação de vídeos sem precisar aparecer.',
  'Conheça os métodos mais virais do TikTok e Instagram.',
  'Acesso a tutoriais completos passo a passo, ideal para iniciantes.',
  'Suporte dedicado para esclarecer todas as suas dúvidas.',
];

export default function CurriculumSection() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-card/50 scroll-mt-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          O Que Você Vai Aprender e Ter Acesso <br className="sm:hidden" /> Dentro do Treinamento <span className="text-primary">Team Veo3</span>
        </h2>
        <Card className="bg-background-end shadow-xl border-primary/30 overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-primary-glow-soft hover:border-primary/50">
          <CardContent className="p-0">
            <div className="md:flex md:items-stretch w-full">
              <div className="md:w-1/3 md:flex-shrink-0 w-full relative aspect-video md:aspect-auto md:min-h-[450px] overflow-hidden">
                <div className="absolute inset-0 transition-all duration-300 ease-in-out group-hover:brightness-125">
                  <Image
                    // É AQUI QUE VOCÊ DEVE COLOCAR O LINK DIRETO DA SUA IMAGEM:
                    src="https://placehold.co/600x800.png" 
                    alt="Visual representando o conteúdo e aprendizado do curso"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="learning course" // Altere este hint se a imagem mudar
                    className="rounded-none md:rounded-l-lg md:rounded-r-none"
                  />
                </div>
              </div>
              <div className="md:w-2/3 md:flex-shrink-0 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <ul className="space-y-4">
                  {summarizedCurriculumItems.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-base md:text-lg text-foreground/90 font-rubik">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
