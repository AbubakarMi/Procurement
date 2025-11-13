import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

import { navLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="mb-6 inline-block group">
              <div className="flex items-center gap-3 md:gap-4 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/kanostatelogo.png"
                  alt="Kano State Government Logo"
                  width={56}
                  height={56}
                  className="h-12 w-12 md:h-14 md:w-14 object-contain drop-shadow-lg flex-shrink-0"
                />
                <span className="font-extrabold text-sm md:text-base text-primary-foreground font-headline leading-tight tracking-tight max-w-xs">
                  Ministry for Public Procurement, Project Monitoring and Evaluation
                </span>
              </div>
            </Link>
            <p className="text-base text-primary-foreground/90 leading-relaxed">
              Ministry of Public Works &amp; Infrastructure. Committed to transparency, accountability, and measurable progress.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/90 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-primary-foreground">Contact Us</h3>
            <address className="not-italic text-primary-foreground/90 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="leading-relaxed">21 Magaji Rumfa Road</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@procurement.kn.gov.ng" className="hover:text-white transition-colors">
                  info@procurement.kn.gov.ng
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p>08065455715</p>
              </div>
            </address>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-primary-foreground">Follow Us</h3>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Stay connected for updates and announcements
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" asChild className="bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300 hover:scale-110">
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300 hover:scale-110">
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300 hover:scale-110">
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/90 text-sm">
              &copy; {new Date().getFullYear()} Ministry for Public Procurement, Project Monitoring and Evaluation. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/90">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
