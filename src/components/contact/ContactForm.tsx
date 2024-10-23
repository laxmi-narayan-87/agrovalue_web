import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const timestamp = new Date().toISOString();
    formData.append('entry.1234567890', timestamp);
    
    try {
      const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSebMdsS8qA423rlcjrDFcAPgCnCv1baTzrxSC1tTpXzpVZ71Q/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="max-w-4xl mx-auto"
    >
      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue="form" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="form">Quick Contact Form</TabsTrigger>
              <TabsTrigger value="embedded">Full Contact Form</TabsTrigger>
            </TabsList>
            
            <TabsContent value="form">
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                action="https://docs.google.com/forms/d/e/1FAIpQLSebMdsS8qA423rlcjrDFcAPgCnCv1baTzrxSC1tTpXzpVZ71Q/formResponse"
                method="post"
                target="_blank"
              >
                <input type="hidden" name="entry.1234567890" id="timestamp" />
                <div>
                  <label htmlFor="entry.2005620554" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input 
                    id="entry.2005620554" 
                    name="entry.2005620554" 
                    required 
                    placeholder="Your name" 
                  />
                </div>
                <div>
                  <label htmlFor="entry.1045781291" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input 
                    id="entry.1045781291" 
                    name="entry.1045781291" 
                    type="email" 
                    required 
                    placeholder="your@email.com" 
                  />
                </div>
                <div>
                  <label htmlFor="entry.839337160" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="entry.839337160"
                    name="entry.839337160"
                    required
                    placeholder="How can we help you?"
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Send Message
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="embedded">
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
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
};