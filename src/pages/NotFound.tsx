
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-sm w-full">
        <div className="h-20 w-20 bg-purple-light rounded-full mx-auto mb-6 flex items-center justify-center">
          <Heart className="h-10 w-10 text-purple" />
        </div>
        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent fancy-gradient">404</h1>
        <p className="text-xl text-gray-600 mb-6">This match wasn't meant to be</p>
        <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
        
        <Button 
          className="bg-purple hover:bg-purple-dark text-white w-full"
          onClick={() => window.location.href = "/"}
        >
          Back to Discovering
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
