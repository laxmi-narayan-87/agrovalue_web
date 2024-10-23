import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="max-w-4xl mx-auto"
    >
      <Card>
        <CardContent className="p-6">
          <div className="w-full flex justify-center">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSebMdsS8qA423rlcjrDFcAPgCnCv1baTzrxSC1tTpXzpVZ71Q/viewform?embedded=true" 
              width="100%" 
              height="914" 
              className="border-0"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};