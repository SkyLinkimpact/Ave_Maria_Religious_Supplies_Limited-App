import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

function ContactUsPage() {
  return (
    <div className="w-full grid md:grid-cols-[auto_1fr] gap-4 justify-center items-center">
      <div className="flex flex-col gap-4 md:border-r p-4">
        <h3 className="text-lg lg:text-2xl">Store Information</h3>
        <div className="flex gap-4 items-center">
          <MapPin className="size-8" />
          <p>
            Agora Shopping Centre Unit 34-39,
            <br /> 140a Queensway,
            <br /> Bletchley, MK2 2RS Milton Keynes England
          </p>
        </div>

        <div className="flex gap-4 items-center group">
          <Phone className="size-8" />
          <div>
            <p>Call Us:</p>
            <a
              href="tel:07947181049"
              className="group-hover:text-primary group-hover:underline"
            >
              07947 181049
            </a>
          </div>
        </div>

        <div className="flex gap-4 items-center group">
          <Mail className="size-8" />
          <div>
            <p>Email Us:</p>
            <a
              href="mailto:avemaria.supplies@hotmail.com"
              className="group-hover:text-primary group-hover:underline"
            >
              avemaria.supplies@hotmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 gap-4 flex flex-col">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-[auto_1fr] gap-4 grid-rows-4 items-center">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" />
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" />
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" />
              <Button className="col-span-full">Send</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ContactUsPage;
