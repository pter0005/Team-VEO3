import Link from 'next/link';
import Logo from '@/components/Logo';
import { Instagram, Youtube, Twitter } from 'lucide-react';

// Simple TikTok icon SVG
const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.521 2.024a9.55 9.55 0 0 0-3.43.817 9.108 9.108 0 0 0-3.48 2.2A9.09 9.09 0 0 0 3.6 8.526a9.552 9.552 0 0 0-.2 2.836c.03.83.19 1.652.46 2.435A8.96 8.96 0 0 0 5.9 17.4a9.055 9.055 0 0 0 3.67 2.558 9.32 9.32 0 0 0 6.37.01 9.055 9.055 0 0 0 3.67-2.558 8.96 8.96 0 0 0 2.03-3.604 9.552 9.552 0 0 0-.2-2.836 9.09 9.09 0 0 0-2.01-3.485 9.108 9.108 0 0 0-3.48-2.2 9.55 9.55 0 0 0-3.43-.817V2.023Zm3.808 10.438c-.02.01-.05.01-.07.02-.52.18-1.06.28-1.6.3-.92.04-1.84-.04-2.75-.05-.03 0-.05-.01-.08-.01v-2.47c.95.01 1.91.09 2.85.05.03 0 .06 0 .09.01.55.07 1.08.22 1.58.4.02.01.03.02.05.03v2.02c-.02.01-.03.02-.05.03l-.02.01Z"></path>
    <path d="M12.521 2.024S13 4 13 6.5s-1 3.5-3 3.5-3-1-3-3.5 1-4.476 1-4.476"></path>
  </svg>
);


const navItems = [
  { href: '#', label: 'Início' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#precos', label: 'Preços' },
  { href: '#faq', label: 'FAQ' },
];

const socialLinks = [
  { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { Icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { Icon: TikTokIcon, href: 'https://tiktok.com', label: 'TikTok' },
  { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              A melhor metodologia para lucrar com IA, feita para pessoas comuns e criadores ambiciosos.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: pteracademy@gmail.com</li>
              <li>WhatsApp: +55 (71) 9286-1297</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} PTER-VEO3. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
