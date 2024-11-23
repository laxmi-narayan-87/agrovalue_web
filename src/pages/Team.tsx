import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";

const Team = () => {
  const teamMembers = [
    {
      name: "Laxmi Narayan",
      role: "Team Leader & Full Stack Developer",
      image: "https://erp.psit.ac.in/assets/img/Simages/2313455.jpg",
      linkedin: "https://www.linkedin.com/in/laxminarayan87/",
      description: "Leading the development of AgroValue and implementing core functionalities."
    },
    // Add your other 5 team members here with their details
  ];

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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the innovative minds behind AgroValue - a Smart India Hackathon 2024 project (Problem #1647) 
            dedicated to revolutionizing agricultural price prediction through AI technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </section>

      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 AgroValue - SIH 2024 Project #1647</p>
        </div>
      </footer>
    </div>
  );
};

export default Team;