import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';

const professionalFeatures = [
  { text: 'Curso Completo PTER-VEO3', icon: CheckCircle },
  { text: 'Todos os Bônus Exclusivos', icon: CheckCircle },
  { text: 'Acesso Vitalício e Atualizações Futuras', icon: Sparkles },
  { text: 'Comunidade VIP de Networking', icon: CheckCircle },
  { text: 'Suporte Prioritário Dedicado', icon: CheckCircle },
];


export default function PricingSection() {
  return (
    <section id="precos" className="py-16 md:py-24 bg-background-end scroll-mt-20">
      <div className="container mx-auto max-w-3xl px-4 md:px-6 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
          Aproveite a <span className="text-primary">oportunidade</span> enquanto ela está disponível
        </h2>
        <p className="text-muted-foreground md:text-lg mb-10 font-rubik">Uma oportunidade única para transformar sua presença digital e financeira.</p>
        
        <Card className="bg-foreground/5 backdrop-blur-lg border border-foreground/10 shadow-2xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl md:text-3xl text-foreground">Plano Profissional 1 Ano</CardTitle>
            <CardDescription className="text-muted-foreground text-base md:text-lg font-rubik">
              Tudo que você precisa para criar vídeos virais e lucrativos com IA.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center my-6">
              <p className="text-2xl text-muted-foreground line-through">De R$ 129,99</p>
              <p className="font-headline text-5xl md:text-[42px] font-bold text-primary mt-1">
                Por R$ 23,99
              </p>
              <p className="text-muted-foreground mt-2 font-rubik">(Pagamento Único - Sem Mensalidades)</p>
            </div>
            <ul className="space-y-3 text-left max-w-md mx-auto">
              {professionalFeatures.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <feature.icon className={`h-5 w-5 ${feature.glow ? 'text-consulting-glow' : 'text-accent'} flex-shrink-0`} />
                  <span 
                    className={`text-foreground/90 text-sm md:text-base font-rubik ${feature.glow ? 'text-consulting-glow font-bold' : ''}`}
                    style={feature.glow ? {textShadow: '0 0 6px hsl(var(--consulting-glow))'} : {}}
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex-col items-center gap-4 pt-8">
            <Button
              asChild
              size="lg"
              className="w-full max-w-xs bg-gradient-orange-red text-primary-foreground font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <Link href="#">Liberar Acesso Agora</Link>
            </Button>
            <p className="text-xs text-muted-foreground font-rubik">Compra segura. Garantia de 7 dias.</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
