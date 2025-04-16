
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Search, User, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Footer = ({ activeTab, onTabChange }: FooterProps) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-2 px-4">
      <div className="flex justify-around">
        <Button 
          variant="ghost" 
          className={cn(
            "flex flex-col items-center px-0 gap-1", 
            activeTab === "discover" && "text-purple"
          )}
          onClick={() => onTabChange("discover")}
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
          onClick={() => onTabChange("likes")}
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
          onClick={() => onTabChange("messages")}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs">Messages</span>
        </Button>

        <Button 
          variant="ghost" 
          className={cn(
            "flex flex-col items-center px-0 gap-1", 
            activeTab === "notifications" && "text-purple"
          )}
          onClick={() => onTabChange("notifications")}
        >
          <Bell className="h-5 w-5" />
          <span className="text-xs">Notifications</span>
        </Button>
        
        <Button 
          variant="ghost" 
          className={cn(
            "flex flex-col items-center px-0 gap-1", 
            activeTab === "profile" && "text-purple"
          )}
          onClick={() => onTabChange("profile")}
        >
          <User className="h-5 w-5" />
          <span className="text-xs">Profile</span>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
