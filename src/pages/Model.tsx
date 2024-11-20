import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Model = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Try Our AI Model
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience our advanced machine learning model for agricultural price predictions. 
            Click below to access our interactive Streamlit application.
          </p>
          
          <a 
            href="https://agrovalue.streamlit.app/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-green-600 hover:bg-green-700">
              Launch Model <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Model;