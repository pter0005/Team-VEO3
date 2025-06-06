import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "O que eu vou aprender de verdade?",
    answer: "Você aprenderá a criar vídeos virais usando a IA Google Veo 3, desde a concepção da ideia, criação de prompts, edição, até a monetização em diversas plataformas. Tudo isso sem precisar aparecer, focando em conteúdo de alto impacto.",
  },
  {
    question: "Preciso ser bom em tecnologia?",
    answer: "Não! O curso Team Veo3 foi desenhado para ser acessível a todos, mesmo que você não tenha nenhuma experiência com IA ou edição de vídeos. Mostramos o passo a passo de forma simples e direta.",
  },
  {
    question: "Esse curso é só mais um?",
    answer: "Definitivamente não. O Team Veo3 é focado na novíssima IA do Google, Veo 3, e em estratégias práticas e atuais para viralização e monetização. É um conhecimento de ponta que poucos dominam.",
  },
  {
    question: "Dá pra ganhar dinheiro mesmo?",
    answer: "Sim! O curso ensina diversas formas de monetização, seja com seus próprios canais ou prestando serviços. Muitos alunos já estão colhendo resultados financeiros expressivos.",
  },
  {
    question: "O acesso é vitalício?",
    answer: "Sim! Ao se inscrever, você ganha acesso vitalício ao curso e a todas as futuras atualizações, incluindo novos módulos e estratégias.",
  },
  {
    question: "Tem garantia?",
    answer: "Com certeza! Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não gostar do curso, basta pedir o reembolso integral do seu investimento.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-card/50 scroll-mt-20">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
          Perguntas <span className="text-primary">Frequentes</span>
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-[#1A1A1A] border border-border rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-primary-glow-soft hover:border-primary/50">
              <AccordionTrigger className="px-6 py-4 text-left font-inter font-semibold text-lg tracking-wider hover:no-underline hover:text-primary transition-colors [&[data-state=open]>svg]:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground data-[state=open]:bg-muted/10 font-rubik text-base tracking-wide">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
