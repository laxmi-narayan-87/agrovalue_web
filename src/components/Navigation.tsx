import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-green-600">
            AgroValue
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link to="/model" className="text-gray-600 hover:text-green-600 transition-colors">
              Try Model
            </Link>
            <Link to="/team" className="text-gray-600 hover:text-green-600 transition-colors">
              Team
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="/" className="text-lg font-medium text-gray-600 hover:text-green-600 transition-colors">
                    Home
                  </Link>
                  <Link to="/about" className="text-lg font-medium text-gray-600 hover:text-green-600 transition-colors">
                    About
                  </Link>
                  <Link to="/model" className="text-lg font-medium text-gray-600 hover:text-green-600 transition-colors">
                    Try Model
                  </Link>
                  <Link to="/team" className="text-lg font-medium text-gray-600 hover:text-green-600 transition-colors">
                    Team
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;