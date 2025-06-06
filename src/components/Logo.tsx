import { Lightbulb } from 'lucide-react';

export default function Logo() {
  return (
    <a href="/" className="flex items-center space-x-2">
      <Lightbulb className="text-primary h-7 w-7" />
      <span className="font-headline text-2xl font-bold text-primary">
        Team VEO3
      </span>
    </a>
  );
}
