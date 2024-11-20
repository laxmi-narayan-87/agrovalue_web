import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Shivam Gupta",
    role: "Team Lead & ML Engineer",
    image: "https://avatars.githubusercontent.com/u/96439011",
    github: "https://github.com/shivam-gupta0",
    linkedin: "https://www.linkedin.com/in/shivam-gupta-226b671ba/",
    email: "2301641530103@psit.ac.in"
  },
  {
    name: "Shivam Srivastava",
    role: "Full Stack Developer",
    image: "https://avatars.githubusercontent.com/u/96439011",
    github: "https://github.com/shivam-gupta0",
    linkedin: "https://www.linkedin.com/in/shivam-gupta-226b671ba/",
    email: "2301641530103@psit.ac.in"
  },
  {
    name: "Shivam Pandey",
    role: "Data Scientist",
    image: "https://avatars.githubusercontent.com/u/96439011",
    github: "https://github.com/shivam-gupta0",
    linkedin: "https://www.linkedin.com/in/shivam-gupta-226b671ba/",
    email: "2301641530103@psit.ac.in"
  }
];

const Team = () => {
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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals behind AgroValue who are working to revolutionize
            agricultural price prediction through AI technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 AgroValue</p>
        </div>
      </footer>
    </div>
  );
};

export default Team;