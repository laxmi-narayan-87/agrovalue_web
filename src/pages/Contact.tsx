import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { FounderSection } from "@/components/contact/FounderSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about AgroValue? We're here to help! Reach out to us using
            any of the methods below.
          </p>
        </motion.div>

        <ContactInfo />
        <FounderSection />
        <ContactForm />
      </section>

      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 AgroValue</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;