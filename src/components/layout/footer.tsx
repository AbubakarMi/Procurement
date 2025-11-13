import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

import { Logo } from '@/components/icons';
import { navLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <div className="flex items-center gap-2">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary-foreground"
                 >
                    <path d="M2 7l6 10.5L14 7" />
                    <path d="M10 7l6 10.5L22 7" />
                </svg>
                <span className="font-bold text-xl text-primary-foreground font-headline">GovConnect</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Ministry of Public Works &amp; Infrastructure. Committed to transparency and progress.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-primary-foreground/80 space-y-2">
              <p>123 Government Ave, Capital City</p>
              <p>Email: <a href="mailto:info@gov.co" className="hover:text-primary-foreground">info@gov.co</a></p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook" className="text-primary-foreground/80 hover:text-primary-foreground">
                  <Facebook />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter" className="text-primary-foreground/80 hover:text-primary-foreground">
                  <Twitter />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn" className="text-primary-foreground/80 hover:text-primary-foreground">
                  <Linkedin />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} GovConnect Ministry. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
