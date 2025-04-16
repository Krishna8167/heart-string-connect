
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut, Settings, Edit, Camera, User, Mail, MapPin } from "lucide-react";

const ProfileTab = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Profile</h2>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
        <div className="relative bg-purple-light h-32">
          <div className="absolute -bottom-12 left-4 bg-white p-1 rounded-full">
            <div className="relative h-24 w-24 rounded-full bg-gray-200 border-4 border-white flex items-center justify-center">
              <User className="h-12 w-12 text-gray-400" />
              <button className="absolute bottom-0 right-0 bg-purple text-white p-1.5 rounded-full">
                <Camera className="h-4 w-4" />
              </button>
            </div>
          </div>
          <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-1.5 rounded-full">
            <Edit className="h-4 w-4" />
          </button>
        </div>
        
        <div className="pt-14 px-4 pb-4">
          <h3 className="text-xl font-bold">Your Name</h3>
          <p className="text-gray-500 flex items-center gap-1 mt-1">
            <MapPin className="h-4 w-4" /> Your Location
          </p>
          
          <div className="border-t border-gray-100 mt-4 pt-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="h-4 w-4" />
              <span>email@example.com</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <Button 
          variant="outline" 
          className="w-full justify-start text-gray-700"
        >
          <Edit className="h-4 w-4 mr-2" />
          Edit Profile
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full justify-start text-gray-700"
        >
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full justify-start text-red-500 border-red-100 hover:bg-red-50"
          onClick={() => navigate("/login")}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default ProfileTab;
