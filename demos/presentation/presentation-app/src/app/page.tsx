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
       <ContactForm/>
    </div>
  );
}
