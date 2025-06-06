import type { SVGProps } from 'react';

const TechIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 7.5V16.5L12 21.5L21.5 16.5V7.5L12 12.5L2.5 7.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export default function Logo() {
  return (
    <a href="/" className="flex items-center space-x-2">
      <TechIcon className="text-primary h-7 w-7" />
      <span className="font-headline text-2xl font-bold text-primary">
        Team Veo3
      </span>
    </a>
  );
}
