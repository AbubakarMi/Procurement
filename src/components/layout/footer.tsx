import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, MapPin, Mail, Phone, Sparkles, ArrowRight } from 'lucide-react';
import { navLinks } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* About Section */}
          <div>
            <Link href="/" className="mb-6 inline-block">
              <div className="flex items-center gap-3">
                <Image
                  src="/kanostatelogo.png"
                  alt="Kano State Government Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain flex-shrink-0"
                />
                <span className="font-bold text-sm text-white font-headline leading-tight max-w-[200px]">
                  Ministry for Public Procurement, Project Monitoring and Evaluation
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/80 leading-relaxed">
              Committed to transparency, accountability, and measurable progress in public procurement and project monitoring across Kano State.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-base text-white mb-4">Contact Us</h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white/80">
                  21 Magaji Rumfa Road<br />
                  Nassarawa, Kano, Nigeria
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white flex-shrink-0" />
                <a
                  href="mailto:info@procurement.kn.gov.ng"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  info@procurement.kn.gov.ng
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white flex-shrink-0" />
                <a
                  href="tel:08065455715"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  08065455715
                </a>
              </div>
            </address>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="font-bold text-base text-white mb-4">Connect With Us</h3>
            <p className="text-sm text-white/80 mb-4">
              Stay updated with our latest news and announcements
            </p>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2.5 border border-white/30 rounded-lg text-white/80 hover:text-white hover:border-white hover:bg-white/10 transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2.5 border border-white/30 rounded-lg text-white/80 hover:text-white hover:border-white hover:bg-white/10 transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2.5 border border-white/30 rounded-lg text-white/80 hover:text-white hover:border-white hover:bg-white/10 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-sm text-white/80 text-center md:text-left">
              &copy; {new Date().getFullYear()} Ministry for Public Procurement, Project Monitoring and Evaluation. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>

          {/* Powered by Nyra */}
          <div className="text-center pt-4 border-t border-white/10">
            <p className="text-xs text-white/60">
              Powered by{' '}
              <a
                href="https://nyra.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white font-semibold transition-colors"
              >
                Nyra
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
