import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-green-600">
            AgroValue
          </Link>
          <div className="space-x-4">
            <Link to="/" className="text-gray-600 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-green-600 transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;