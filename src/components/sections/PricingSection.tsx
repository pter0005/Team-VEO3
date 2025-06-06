'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Sparkles } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const professionalFeatures = [
  { text: 'Curso Completo Team VEO3', icon: CheckCircle },
  { text: 'Todos os Bônus Exclusivos', icon: CheckCircle },
  { text: 'Acesso Vitalício e Atualizações Futuras', icon: Sparkles },
  { text: 'Comunidade VIP de Networking', icon: CheckCircle },
  { text: 'Suporte Prioritário Dedicado', icon: CheckCircle },
];

const BASE_CHECKOUT_URL = 'https://pay.kiwify.com.br/fDJSYQh';

export default function PricingSection() {
  const searchParams = useSearchParams();
  const [finalCheckoutUrl, setFinalCheckoutUrl] = useState(BASE_CHECKOUT_URL);

  useEffect(() => {
    // Este useEffect será executado no lado do cliente após a montagem do componente
    // e sempre que searchParams mudar.
    const refParam = searchParams.get('ref');
    if (refParam) {
      setFinalCheckoutUrl(`${BASE_CHECKOUT_URL}?afid=${refParam}`);
    } else {
      setFinalCheckoutUrl(BASE_CHECKOUT_URL); // Garante que volte ao normal se o ref for removido
    }
  }, [searchParams]); // Dependência para re-executar quando searchParams mudar

  return (
    <section id="precos" className="py-16 md:py-24 bg-background-end scroll-mt-20">
      <div className="container mx-auto max-w-3xl px-4 md:px-6 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
          Aproveite a <span className="text-primary">oportunidade</span> enquanto ela está disponível
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-10 font-rubik">Uma oportunidade única para transformar sua presença digital e financeira.</p>
        
        <Card className="bg-foreground/5 backdrop-blur-lg border border-foreground/10 shadow-2xl transition-all duration-300 ease-in-out hover:shadow-primary-glow-soft hover:border-primary/50">
          <CardHeader>
            <CardTitle className="font-headline text-2xl md:text-3xl text-foreground">Plano Profissional 1 Ano</CardTitle>
            <CardDescription className="text-muted-foreground text-base md:text-lg font-rubik">
              Tudo que você precisa para criar vídeos virais e lucrativos com IA.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center my-6">
              <p className="text-2xl text-muted-foreground line-through">De R$ 76,99</p>
              <p className="font-headline text-4xl sm:text-5xl md:text-[42px] font-bold text-primary mt-1">
                Por R$ 23,99
              </p>
              <p className="text-muted-foreground mt-2 font-rubik">(Pagamento Único - Sem Mensalidades)</p>
            </div>
            <ul className="space-y-3 text-left max-w-md mx-auto">
              {professionalFeatures.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <feature.icon className={`h-5 w-5 text-accent flex-shrink-0`} />
                  <span className={`text-foreground/90 text-sm md:text-base font-rubik`}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex-col items-center gap-4 pt-8">
            <Button
              asChild // Importante para que o <Button> renderize como um <a>
              size="lg"
              className="w-full max-w-xs bg-gradient-orange-red text-primary-foreground font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              {/* O href é dinâmico baseado no estado finalCheckoutUrl */}
              <a href={finalCheckoutUrl} target="_blank" rel="noopener noreferrer">
                Liberar Acesso Agora
              </a>
            </Button>
            <p className="text-xs text-muted-foreground font-rubik">Compra segura. Garantia de 7 dias.</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
