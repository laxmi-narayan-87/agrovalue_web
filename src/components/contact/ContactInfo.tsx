import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const ContactInfo = () => {
  return (
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
  );
};