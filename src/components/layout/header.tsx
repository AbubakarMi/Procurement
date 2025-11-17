'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 hover:opacity-90 transition-opacity">
            <Image
              src="/kanostatelogo.png"
              alt="Kano State Government"
              width={44}
              height={44}
              className="h-10 w-10 lg:h-11 lg:w-11 object-contain"
              priority
            />
            <div className="hidden sm:block">
              <h1 className="text-xs lg:text-sm font-bold text-primary leading-tight tracking-tight">
                Ministry for Public Procurement,
                <br />
                Project Monitoring and Evaluation
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200',
                  pathname === link.href
                    ? 'bg-primary text-white shadow-md'
                    : 'text-foreground hover:bg-primary/5 hover:text-primary'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 hover:bg-primary/10"
              >
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
                {/* Mobile Logo */}
                <div className="flex items-center gap-3 pb-6 border-b">
                  <Image
                    src="/kanostatelogo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                  <div>
                    <p className="text-xs font-bold text-primary leading-tight">
                      Ministry for Public Procurement,
                      <br />
                      Project Monitoring and Evaluation
                    </p>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'px-4 py-3 text-base font-semibold rounded-lg transition-all',
                        pathname === link.href
                          ? 'bg-primary text-white'
                          : 'text-foreground hover:bg-primary/5 hover:text-primary'
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
