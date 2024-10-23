import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { 
  LineChart, 
  BarChart, 
  Database, 
  Share2, 
  ShieldCheck 
} from "lucide-react";

const LearnMore = () => {
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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            How AgroValue Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced AI-powered platform combines multiple data sources and machine learning
            algorithms to provide accurate price predictions for agricultural commodities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <Database className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
                <p className="text-gray-600">
                  We gather historical price data, weather patterns, and market trends from
                  550+ reporting centers across India.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <LineChart className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Analysis</h3>
                <p className="text-gray-600">
                  Our ML models analyze patterns and correlations in the data to identify
                  key price influencing factors.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <BarChart className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Prediction</h3>
                <p className="text-gray-600">
                  Generate accurate price forecasts for various agricultural commodities
                  using advanced predictive modeling.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <Share2 className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Distribution</h3>
                <p className="text-gray-600">
                  Deliver insights through an easy-to-use platform accessible to farmers,
                  traders, and other stakeholders.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <ShieldCheck className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Validation</h3>
                <p className="text-gray-600">
                  Continuous validation and refinement of our models ensures high accuracy
                  and reliability of predictions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
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

export default LearnMore;