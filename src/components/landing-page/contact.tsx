import { ContactForm } from "./contact-form";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0C0D0C]">
      <div className="max-w-5xl mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-4  space-mono-regular">
            Contact Me
          </h2>
        </div>

        <div className="grid">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
