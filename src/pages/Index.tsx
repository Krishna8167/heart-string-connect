
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "@/components/ProfileCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { profiles, Profile } from "@/data/profiles";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";

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
  const [activeTab, setActiveTab] = useState("discover");
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  
  // If not logged in, redirect to login
  if (!isLoggedIn) {
    navigate("/login");
    return null;
  }
  
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
        {renderTabContent()}
      </main>
      
      <Footer activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
};

export default Index;
