import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export const FounderSection = () => {
  return (
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
              alt="Laxmi Narayan - Founder of AgroValue"
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
              <span>Connect with Laxmi Narayan</span>
            </a>
          </div>
          <p className="text-gray-600">
            Connect with Laxmi Narayan, the founder of AgroValue, to learn more about our mission
            and vision for revolutionizing agricultural price predictions.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};