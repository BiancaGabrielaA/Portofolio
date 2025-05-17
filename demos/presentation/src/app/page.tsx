'use client';

import Image from 'next/image';
import { ContactForm } from "./components/ContactForm";
import { HomeAbout } from "./components/HomeAbout";
import { HomeGallery } from "./components/HomeGallery";
import { HomeTestimonials } from "./components/HomeTestimonials";

export default function Home() {
  return (
    <div className="mb-10">
       <HomeGallery/>
       <HomeAbout/>
       <HomeTestimonials/>
       <div className="flex flex-col md:flex-row mt-20 gap-6 px-6 md:px-20">
          {/* Left: Form Section */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="p-6 space-y-6 mx-auto border-b border-[var(--light-brown)] text-2xl font-semibold mb-6 text-[var(--light-brown)]">Drop us a line</h2>
            <ContactForm />
          </div>

          {/* Right: Image Section */}
          <div className="flex-1 relative min-h-[400px] md:min-h-auto rounded-xl overflow-hidden">
            <Image
              src={"/catering-images/home-contact.jpg"}
              alt="Home Contact"
              fill
              className="object-cover"
            />
          </div>
        </div>
    </div>
  );
}
