import Balancer from 'react-wrap-balancer';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <p className="text-sm text-primary mb-2">Home &gt; Contact Us</p>
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
                  <p className="text-foreground/80">123 Government Avenue, Capital City, 10101</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-foreground/80">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-foreground/80"><a href="mailto:info@gov.co" className="text-primary hover:underline">info@gov.co</a></p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.720193108603!2d-118.24584068478466!3d34.05223498060699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c634251ab351%3A0x34c449326e1c9533!2sLos%20Angeles%20City%20Hall!5e0!3m2!1sen!2sus!4v1626966141381!5m2!1sen!2sus"
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
