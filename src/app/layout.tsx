import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Veo Viral',
  description: 'Lucre todos os dias com vídeos virais usando a nova IA do Google Team VEO3',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&family=Sora:wght@400;500;600;700&family=Rubik:wght@400;500&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Script id="kiwify-affiliate-redirect" strategy="beforeInteractive">
          {`
            try {
              const url = new URL(window.location.href);
              const ref = url.searchParams.get("ref");

              if (ref) {
                // Garante que o script não execute em iframes (ex: previews) e só na janela principal
                if (window.top === window.self) { 
                  window.location.href = \`https://pay.kiwify.com.br/fDJSYQh?afid=\${ref}\`;
                }
              }
            } catch (e) {
              console.error('Erro no script de redirecionamento de afiliados:', e);
            }
          `}
        </Script>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
