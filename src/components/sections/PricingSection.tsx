import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const features = [
  'Curso Completo PTER-VEO3',
  'Todos os Bônus Exclusivos',
  'Atualizações Constantes',
  'Acesso ao Grupo VIP',
  'Suporte Individualizado',
];

export default function PricingSection() {
  return (
    <section id="precos" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto max-w-3xl px-4 md:px-6 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
          Aproveite o <span className="text-primary">PTER-VEO3</span> enquanto ele é permitido
        </h2>
        <p className="text-muted-foreground md:text-lg mb-10">Uma oportunidade única para transformar sua presença digital e financeira.</p>
        
        <Card className="bg-card border-primary/50 shadow-2xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl md:text-3xl text-primary">Acesso Completo PTER-VEO3</CardTitle>
            <CardDescription className="text-muted-foreground text-base md:text-lg">
              Tudo que você precisa para criar vídeos virais e lucrativos com IA.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center my-6">
              <p className="text-2xl text-muted-foreground line-through">De R$ 159,00</p>
              <p className="font-headline text-5xl md:text-6xl font-bold text-primary mt-1">
                Por R$ 57,90
              </p>
              <p className="text-muted-foreground mt-2">(Pagamento Único - Sem Mensalidades)</p>
            </div>
            <ul className="space-y-3 text-left max-w-md mx-auto">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/90 text-sm md:text-base">{feature}</span>
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
            <p className="text-xs text-muted-foreground">Compra segura. Garantia de 7 dias.</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
