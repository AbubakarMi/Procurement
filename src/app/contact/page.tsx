import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapComponent } from '@/components/map';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 font-headline">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Get in touch with the Ministry for Public Procurement, Project Monitoring and Evaluation. We're here to help with your inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-primary">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Subject" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Submit Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-primary">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-sm text-muted-foreground">
                  21 Magaji Rumfa Road<br />
                  Nassarawa, Kano, Nigeria
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a href="tel:08065455715" className="text-sm text-primary hover:underline">
                  08065455715
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:info@procurement.kn.gov.ng" className="text-sm text-primary hover:underline">
                  info@procurement.kn.gov.ng
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Working Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday<br />
                  8:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Map Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold text-primary">Our Location</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <MapComponent height="450px" className="w-full" />
        </CardContent>
      </Card>
    </div>
  );
}
