
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Gift, Users, MessageCircle, Zap, ShieldCheck, Gem, Wand2, Image, Layers, Bot } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Bonus {
  icon: LucideIcon;
  title: string;
  value?: string;
  description: string;
}

const bonuses: Bonus[] = [
  { icon: Gem, title: 'Acesso Vitalício', value: 'R$230,00', description: 'Aprenda no seu ritmo, para sempre.' },
  { icon: Users, title: 'Comunidade VIP de Alunos', description: 'Networking e suporte exclusivo com outros membros.' },
  { icon: Bot, title: 'BOT PROMPT VIRAL', description: 'A IA mais poderosa do mercado especializada em criar vídeos personalizados.' },
  { icon: Zap, title: 'Domine Outras IAs', description: 'Expanda seu arsenal de ferramentas de IA em alta.' },
  { icon: ShieldCheck, title: 'Guia de Monetização Avançado', description: 'Estratégias comprovadas para lucrar alto.' },
  { icon: Gift, title: 'Suporte Prioritário', description: 'Nossa equipe pronta para te ajudar a decolar.' },
];

export default function BonusesSection() {
  return (
    <section className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Ganhe <span className="text-primary">R$ 630,00</span> em Bônus Insanos
            </h2>
            <p className="text-muted-foreground mt-2 md:text-lg font-rubik">Ao se inscrever hoje, você leva tudo isso DE GRAÇA!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="bg-background-end border-border shadow-lg flex flex-col transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-primary-glow-soft hover:border-primary/50">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-accent/10 rounded-full mb-3">
                    <bonus.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-sora text-xl">{bonus.title}</CardTitle>
                {bonus.value && (
                  <CardDescription className="font-rubik">
                    <span className="line-through text-muted-foreground/70">{bonus.value}</span>
                    <span className="ml-2 text-green-500 font-bold">GRÁTIS HOJE</span>
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground text-center font-rubik">{bonus.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

