import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    (e.target as HTMLFormElement).reset();
  };

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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">LAXMINARAYAN955459+AGROVALUE@GMAIL.COM</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+91 8090540317</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Office</h3>
                <p className="text-gray-600">Kanpur, Uttar Pradesh, India</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <Card>
            <CardContent className="p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://erp.psit.ac.in/assets/img/Simages/2313455.jpg" 
                  alt="Laxminarayan - Founder of AgroValue"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-center gap-4 mb-4">
                <a
                  href="https://www.linkedin.com/in/laxminarayan87/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                  <Linkedin className="h-6 w-6" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
              <p className="text-gray-600">
                Connect with Laxminarayan, the founder of AgroValue, to learn more about our mission
                and vision for revolutionizing agricultural price predictions.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input id="name" required placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" required placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    placeholder="How can we help you?"
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
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
