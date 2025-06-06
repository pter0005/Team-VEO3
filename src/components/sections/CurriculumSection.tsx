import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const modules = [
  'Como criar vídeos com o Google Veo 3',
  'Como editar vídeos com qualidade profissional',
  'Como viralizar seus conteúdos nas redes',
  'Como criar prompts cinematográficos com IA',
  'Como usar ChatGPT junto com o Veo 3',
  'Como monetizar seus vídeos nas redes',
  'Como vender seus serviços como freelancer de IA',
  'Como automatizar vídeos sem precisar aparecer',
];

export default function CurriculumSection() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-card/50 scroll-mt-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          O Que Você Vai Aprender Dentro do <br className="sm:hidden" /> Treinamento <span className="text-primary">PTER-VEO3</span>
        </h2>
        <Card className="bg-background-end shadow-xl max-w-3xl mx-auto border-primary/30">
          <CardContent className="p-6 md:p-8">
            <ul className="space-y-4">
              {modules.map((module, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-base md:text-lg text-foreground/90 font-rubik">{module}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
