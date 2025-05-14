import Image from "next/image";
import { ContactForm } from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="space-y-12 px-4 md:px-16 py-10">
      {/* Contact Section */}
      <div className="flex flex-col md:flex-row w-full h-[500px] gap-6">
        {/* Image Side */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-full">
          <Image
            src={"/demo/presentation/catering-images/contact-page.jpg"}
            alt="Home Contact"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>

        {/* Info + Form Side */}
        <div className="w-full md:w-1/2 flex text-[var(--light-brown)] flex-col justify-center gap-4">
           <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold">Contact Us</h3>
                <h4 className="text-lg">123-456-7890 | info@mysite.com</h4>
                <h4 className="text-lg">
                    Address: 500 Terry Francine St., San Francisco, CA 94158
                </h4>
           </div>
           <ContactForm />
        </div>
      </div>

      {/* Google Maps */}
      <div className="w-full h-[400px]">
        <iframe
          className="w-full h-full rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086082363229!2d-122.39083262343026!3d37.77053997197326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7fd74a8c6a15%3A0x12c6e72983e243d6!2s500%20Terry%20Francine%20St%2C%20San%20Francisco%2C%20CA%2094158%2C%20USA!5e0!3m2!1sen!2s!4v1713525695589!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Socials */}
      <div className="flex flex-row  justify-center gap-6 text-3xl text-[var(--light-brown)]">
        <span className="hover:underline cursor-pointer">Instagram</span>
        <span className="hover:underline cursor-pointer">Facebook</span>
        <span className="hover:underline cursor-pointer">X</span>
      </div>
    </div>
  );
}
