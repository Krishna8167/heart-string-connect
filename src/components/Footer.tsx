
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Search, User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("discover");
  const { toast } = useToast();
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    toast({
      description: `${tab.charAt(0).toUpperCase() + tab.slice(1)} tab`
    });
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-2 px-4">
      <div className="flex justify-around">
        <Button 
          variant="ghost" 
          className={cn(
            "flex flex-col items-center px-0 gap-1", 
            activeTab === "discover" && "text-purple"
          )}
          onClick={() => handleTabChange("discover")}
        >
          <Search className="h-5 w-5" />
          <span className="text-xs">Discover</span>
        </Button>
        
        <Button 
          variant="ghost" 
          className={cn(
            "flex flex-col items-center px-0 gap-1", 
            activeTab === "likes" && "text-purple"
          )}
          onClick={() => handleTabChange("likes")}
        >
          <Heart className="h-5 w-5" />
          <span className="text-xs">Likes</span>
        </Button>
        
        <Button 
          variant="ghost" 
          className={cn(
            "flex flex-col items-center px-0 gap-1", 
            activeTab === "messages" && "text-purple"
          )}
          onClick={() => handleTabChange("messages")}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs">Messages</span>
        </Button>
        
        <Button 
          variant="ghost" 
          className={cn(
            "flex flex-col items-center px-0 gap-1", 
            activeTab === "profile" && "text-purple"
          )}
          onClick={() => handleTabChange("profile")}
        >
          <User className="h-5 w-5" />
          <span className="text-xs">Profile</span>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
