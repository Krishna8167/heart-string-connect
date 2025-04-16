
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "@/components/ProfileCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { profiles, Profile } from "@/data/profiles";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

// Import the tab components
import DiscoverTab from "./tabs/Discover";
import LikesTab from "./tabs/Likes";
import MessagesTab from "./tabs/Messages";
import NotificationsTab from "./tabs/Notifications";
import ProfileTab from "./tabs/Profile";

const Index = () => {
  const [currentProfiles, setCurrentProfiles] = useState<Profile[]>(profiles);
  const [likedProfiles, setLikedProfiles] = useState<Profile[]>([]);
  const [passedProfiles, setPassedProfiles] = useState<Profile[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeTab, setActiveTab] = useState("discover");
  const navigate = useNavigate();
  
  const handleLike = (id: string) => {
    const likedProfile = currentProfiles.find(profile => profile.id === id);
    if (likedProfile) {
      setLikedProfiles([...likedProfiles, likedProfile]);
      setCurrentProfiles(currentProfiles.filter(profile => profile.id !== id));
    }
  };
  
  const handlePass = (id: string) => {
    const passedProfile = currentProfiles.find(profile => profile.id === id);
    if (passedProfile) {
      setPassedProfiles([...passedProfiles, passedProfile]);
      setCurrentProfiles(currentProfiles.filter(profile => profile.id !== id));
    }
  };
  
  const handleStartSwiping = () => {
    setShowWelcome(false);
  };
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "discover":
        return (
          <DiscoverTab 
            currentProfiles={currentProfiles} 
            onLike={handleLike} 
            onPass={handlePass} 
          />
        );
      case "likes":
        return <LikesTab likedProfiles={likedProfiles} />;
      case "messages":
        return <MessagesTab />;
      case "notifications":
        return <NotificationsTab />;
      case "profile":
        return <ProfileTab />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">
      <Header />
      
      <main className="flex-1 p-4 max-w-2xl mx-auto w-full flex flex-col items-center justify-center">
        {showWelcome ? (
          <div className="text-center p-6 bg-white rounded-xl shadow-lg max-w-md w-full">
            <div className="h-24 w-24 bg-purple-light rounded-full mx-auto mb-6 flex items-center justify-center">
              <Heart className="h-12 w-12 text-purple" />
            </div>
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent fancy-gradient">HeartString</h1>
            <p className="text-gray-600 mb-6">Find meaningful connections through thoughtful conversations</p>
            
            <p className="text-sm text-gray-500 mb-8">
              Designed to be deleted. HeartString helps you find the right person by focusing on what matters most - genuine connection.
            </p>
            
            <div className="space-y-3">
              <Button 
                onClick={handleStartSwiping}
                className="w-full bg-purple hover:bg-purple-dark text-white mb-3 font-medium py-6"
              >
                Start Meeting People
                <Sparkles className="h-4 w-4 ml-2" />
              </Button>
              
              <div className="flex gap-3">
                <Button 
                  onClick={() => navigate("/login")}
                  variant="outline" 
                  className="w-1/2 border-purple text-purple hover:bg-purple-light"
                >
                  Log In
                </Button>
                <Button 
                  onClick={() => navigate("/signup")}
                  variant="outline" 
                  className="w-1/2 border-purple text-purple hover:bg-purple-light"
                >
                  Sign Up
                </Button>
              </div>
              
              <p className="text-xs text-gray-400 pt-2">
                By continuing, you agree to our{" "}
                <Link to="#" className="text-purple underline">Terms of Service</Link> and{" "}
                <Link to="#" className="text-purple underline">Privacy Policy</Link>
              </p>
            </div>
          </div>
        ) : (
          renderTabContent()
        )}
      </main>
      
      {!showWelcome && <Footer activeTab={activeTab} onTabChange={handleTabChange} />}
    </div>
  );
};

export default Index;
