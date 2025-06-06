import Link from 'next/link';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#precos', label: 'Preços' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/60 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-[80px] max-w-7xl items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button
          asChild
          variant="outline"
          className="hidden md:inline-flex border-primary text-primary hover:text-primary hover:bg-primary/10 hover:shadow-primary-glow-soft font-sora font-bold uppercase px-7 py-4 rounded-lg text-sm"
          style={{ padding: '16px 28px' }}
        >
          <Link href="#comecar">Começar Agora</Link>
        </Button>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background-end">
              <div className="flex flex-col space-y-6 p-6">
                <Logo />
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:text-primary hover:bg-primary/10 hover:shadow-primary-glow-soft font-sora font-bold uppercase px-7 py-4 rounded-lg text-sm"
                   style={{ padding: '16px 28px' }}
                >
                  <Link href="#comecar">Começar Agora</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
