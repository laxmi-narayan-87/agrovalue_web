import Navigation from "@/components/Navigation";

const Model = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-6">
            Try Our AI Model
          </h1>
          <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
            Experience our advanced machine learning model for agricultural price predictions 
            directly within our platform.
          </p>
        </div>
        
        <div className="w-full aspect-[16/9] bg-white rounded-lg shadow-lg overflow-hidden border-2 border-green-100">
          <iframe
            src="https://agrovalue.streamlit.app/?embedded=true"
            width="100%"
            height="100%"
            frameBorder="0"
            title="AgroValue AI Model"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Model;