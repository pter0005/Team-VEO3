import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Users, TrendingUp } from 'lucide-react';

const statsData = [
  {
    icon: Eye,
    value: "9.066.228",
    label: "Visualizações Totais",
    description: "Impacto massivo em todas as plataformas.",
  },
  {
    icon: TrendingUp,
    value: "2.769.022",
    label: "Contas Únicas Alcançadas",
    description: "Expandindo o alcance para novos públicos diariamente.",
  },
  {
    icon: Users,
    valueComponent: (
      <div className="text-center">
        <p className="font-headline text-3xl md:text-4xl font-bold text-foreground">
          <span className="text-primary">4,2%</span>
        </p>
        <p className="text-sm text-muted-foreground font-rubik -mt-1 mb-2">Seguidores</p>
        <p className="font-headline text-3xl md:text-4xl font-bold text-foreground">
          <span className="text-accent">95,8%</span>
        </p>
        <p className="text-sm text-muted-foreground font-rubik -mt-1">Não Seguidores</p>
      </div>
    ),
    label: "Perfil dos Espectadores",
    description: "Viralização que atrai majoritariamente novos espectadores.",
  },
];

export default function ResultsSection() {
  return (
    <section id="resultados" className="py-16 md:py-24 bg-background scroll-mt-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          Resultados Reais Que <span className="text-primary">Impressionam</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {statsData.map((stat, index) => (
            <Card key={index} className="bg-card border-border shadow-xl flex flex-col text-center items-center hover:border-primary/70 hover:shadow-primary-glow-soft transition-all duration-300 p-4 md:p-6">
              <CardHeader className="items-center p-2">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-sora text-lg md:text-xl">{stat.label}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-center items-center p-2">
                {stat.valueComponent ? stat.valueComponent : (
                  <p className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</p>
                )}
                <p className="text-xs md:text-sm text-muted-foreground font-rubik mt-2">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
