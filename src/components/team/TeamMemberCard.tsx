import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  description: string;
}

export const TeamMemberCard = ({ name, role, image, linkedin, description }: TeamMemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card>
        <CardContent className="p-6 text-center">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
            <img 
              src={image}
              alt={`${name} - ${role}`}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{role}</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <Linkedin className="h-6 w-6" />
              <span>Connect with {name}</span>
            </a>
          </div>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};