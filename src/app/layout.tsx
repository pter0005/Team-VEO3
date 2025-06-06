import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

// NENHUM SCRIPT DE REDIRECIONAMENTO DE AFILIADO DEVE ESTAR AQUI.
// QUALQUER LÓGICA DE AFILIADO DEVE ESTAR APENAS NO COMPONENTE PricingSection
// E SER ACIONADA SOMENTE NO CLIQUE DO BOTÃO DE COMPRA.
// ESTE ARQUIVO É APENAS PARA A ESTRUTURA DA PÁGINA E METADADOS.
// NÃO ADICIONE NENHUM window.location.href OU LÓGICA DE searchParams AQUI QUE RODE NO CARREGAMENTO DA PÁGINA.
// QUALQUER SCRIPT <script>...</script> AQUI NÃO DEVE FAZER REDIRECIONAMENTO.

export const metadata: Metadata = {
  metadataBase: new URL('https://teamveo3.com'),
  title: 'Veo Viral',
  description: 'Lucre todos os dias com vídeos virais usando a nova IA do Google Team VEO3',
  openGraph: {
    title: 'Veo Viral',
    description: 'Lucre todos os dias com vídeos virais usando a nova IA do Google Team VEO3',
    url: 'https://teamveo3.com',
    siteName: 'Team VEO3',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&family=Sora:wght@400;500;600;700&family=Rubik:wght@400;500&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {/* NENHUM SCRIPT DE REDIRECIONAMENTO DEVE ESTAR AQUI NO BODY TAMBÉM */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
