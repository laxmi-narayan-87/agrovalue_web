import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const FounderSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto mb-16"
    >
      <Card>
        <CardContent className="p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Founder & Lead Developer</h2>
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-500">
            <img 
              src="https://erp.psit.ac.in/assets/img/Simages/2313455.jpg" 
              alt="Laxmi Narayan - Founder of AgroValue"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Laxmi Narayan</h3>
          <p className="text-gray-600 mb-4">
            Full Stack Developer & Machine Learning Engineer
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <a
              href="https://www.linkedin.com/in/laxminarayan87/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/laxminarayan1998"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:laxminarayan1998@gmail.com"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <div className="space-y-4 text-left">
            <p className="text-gray-600">
              As the creator of AgroValue, Laxmi Narayan combines expertise in full-stack development 
              and machine learning to revolutionize agricultural price predictions. With a passion for 
              technology and agriculture, he built this platform to help farmers make data-driven decisions.
            </p>
            <div className="border-t pt-4">
              <h4 className="font-semibold text-gray-900 mb-2">Technical Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "Python", "TensorFlow", "Machine Learning", "AWS"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};