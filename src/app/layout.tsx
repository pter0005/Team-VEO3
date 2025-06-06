import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
// O Script foi removido daqui pois a lógica de afiliado agora está no botão de compra.

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
        {/* O Script de redirecionamento de afiliado foi removido daqui */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
