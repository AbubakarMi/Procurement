import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-primary"
      >
        <path d="M2 7l6 10.5L14 7" />
        <path d="M10 7l6 10.5L22 7" />
      </svg>
      <span className="font-bold text-lg text-primary font-headline">
        Ministry for Public Procurement, Project Monitoring and Evaluation
      </span>
    </div>
  );
}
