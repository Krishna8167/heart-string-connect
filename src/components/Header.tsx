
import { Button } from "@/components/ui/button";
import { MessageCircle, Bell, User, Menu } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const handleNotifications = () => {
    toast({
      title: "No new notifications",
      description: "You're all caught up!"
    });
  };
  
  const handleMessages = () => {
    toast({
      title: "Messages",
      description: "No new messages yet"
    });
  };
  
  const handleProfile = () => {
    toast({
      title: "Profile",
      description: "Your profile is looking great!"
    });
  };

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center">
        {isMobile && (
          <Button variant="ghost" size="icon" className="mr-2">
            <Menu className="h-5 w-5 text-gray-600" />
          </Button>
        )}
        <h1 className="text-xl font-bold bg-clip-text text-transparent fancy-gradient">HeartString</h1>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" onClick={handleMessages}>
          <MessageCircle className="h-5 w-5 text-gray-600" />
        </Button>
        
        <Button variant="ghost" size="icon" onClick={handleNotifications}>
          <Bell className="h-5 w-5 text-gray-600" />
        </Button>
        
        <Button variant="ghost" size="icon" onClick={handleProfile}>
          <User className="h-5 w-5 text-gray-600" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
