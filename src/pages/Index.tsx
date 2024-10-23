import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ArrowRight, BarChart2, Brain, Sprout } from "lucide-react";
import Navigation from "@/components/Navigation";

const demoData = [
  { month: "Jan", price: 45 },
  { month: "Feb", price: 52 },
  { month: "Mar", price: 48 },
  { month: "Apr", price: 51 },
  { month: "May", price: 55 },
  { month: "Jun", price: 58 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Predicting Agricultural Commodity Prices with{" "}
            <span className="text-green-600">AI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Advanced ML models for accurate price predictions of pulses and vegetables
            across 550 reporting centers in India.
          </p>
          <Button className="bg-green-600 hover:bg-green-700">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <CardContent className="pt-6">
              <Brain className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Advanced machine learning models analyzing price trends across multiple
                commodities.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="pt-6">
              <BarChart2 className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Price Forecasting</h3>
              <p className="text-gray-600">
                Accurate predictions for 22 essential food commodities using historical
                data.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="pt-6">
              <Sprout className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Market Intelligence</h3>
              <p className="text-gray-600">
                Strategic insights for better decision-making in agricultural markets.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16 bg-white rounded-lg shadow-lg mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Price Trend Analysis
        </h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={demoData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#16a34a"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 AgroValue</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
