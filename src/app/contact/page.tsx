import Balancer from 'react-wrap-balancer';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <p className="text-sm text-primary mb-2">Home > Contact Us</p>
        <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl font-headline">
          <Balancer>Get In Touch</Balancer>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground md:text-xl">
          We're here to help and answer any question you might have.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-primary font-headline">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" className="bg-card" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your Email" className="bg-card"/>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Subject of your message" className="bg-card"/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} className="bg-card"/>
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        {/* Ministry Info & Map */}
        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-primary font-headline">Ministry Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-foreground/80">21 Magaji Rumfa Road</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-foreground/80">08065455715</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-foreground/80"><a href="mailto:info@procurement.kn.gov.ng" className="text-primary hover:underline">info@procurement.kn.gov.ng</a></p>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Working Hour</h3>
                  <p className="text-foreground/80">8:00 - 16:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex space-x-2">
                   <Button variant="ghost" size="icon" asChild>
                      <a href="#" aria-label="Facebook" className="text-primary hover:text-accent">
                         <Facebook />
                      </a>
                   </Button>
                   <Button variant="ghost" size="icon" asChild>
                      <a href="#" aria-label="Twitter" className="text-primary hover:text-accent">
                         <Twitter />
                      </a>
                   </Button>
                   <Button variant="ghost" size="icon" asChild>
                      <a href="#" aria-label="LinkedIn" className="text-primary hover:text-accent">
                         <Linkedin />
                      </a>
                   </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              {/* Note: This is a static image of a map. For a real interactive map, you'd need Google Maps API. */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.723139808621!2d8.542211975908233!3d11.99441113554032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae816793a846f3%3A0x805274154e1b59c7!2s21%20Magaji%20Rumfa%20Rd%2C%20Nassarawa%2C%20Kano%20700241%2C%20Kano%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1719530444318!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Ministry Location Map"
              ></iframe>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
