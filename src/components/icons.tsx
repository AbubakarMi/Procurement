import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-2 md:gap-3 max-w-full">
      <Image
        src="/kanostatelogo.png"
        alt="Kano State Government Logo"
        width={40}
        height={40}
        className="h-9 w-9 md:h-10 md:w-10 object-contain flex-shrink-0"
        priority
      />
      <span className="font-bold text-[9px] sm:text-[10px] md:text-xs text-primary font-headline leading-snug tracking-tight line-clamp-2 md:line-clamp-1">
        Ministry for Public Procurement, Project Monitoring and Evaluation
      </span>
    </div>
  );
}
