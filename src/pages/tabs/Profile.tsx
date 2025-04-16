
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut, Settings, Edit, Camera, User, Mail, MapPin, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface UserProfile {
  name: string;
  email: string;
  location: string;
  bio?: string;
  avatar?: string;
}

const ProfileTab = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    // Get profile from localStorage or use default values
    const savedProfile = localStorage.getItem("userProfile");
    return savedProfile ? JSON.parse(savedProfile) : {
      name: "Your Name",
      email: localStorage.getItem("userEmail") || "email@example.com",
      location: "Your Location",
      bio: "Tell us about yourself...",
    };
  });

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editedProfile, setEditedProfile] = useState<UserProfile>(userProfile);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleLogout = () => {
    // Clear stored user data
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    
    toast({
      title: "Logged out successfully",
      description: "See you next time!",
    });
    
    // Redirect to login page
    navigate("/login");
  };

  const handleProfileUpdate = () => {
    // Update profile and save to localStorage
    setUserProfile(editedProfile);
    localStorage.setItem("userProfile", JSON.stringify(editedProfile));
    
    setIsEditDialogOpen(false);
    
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAvatarChange = () => {
    toast({
      title: "Coming soon",
      description: "Profile picture upload will be available soon!",
    });
  };

  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Profile</h2>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        >
          <Settings className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
        <div className="relative bg-purple-light h-32">
          <div className="absolute -bottom-12 left-4 bg-white p-1 rounded-full">
            <div className="relative h-24 w-24 rounded-full bg-gray-200 border-4 border-white flex items-center justify-center overflow-hidden">
              {userProfile.avatar ? (
                <img 
                  src={userProfile.avatar} 
                  alt={userProfile.name} 
                  className="h-full w-full object-cover"
                />
              ) : (
                <User className="h-12 w-12 text-gray-400" />
              )}
              <button 
                className="absolute bottom-0 right-0 bg-purple text-white p-1.5 rounded-full"
                onClick={handleAvatarChange}
              >
                <Camera className="h-4 w-4" />
              </button>
            </div>
          </div>
          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogTrigger asChild>
              <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-1.5 rounded-full">
                <Edit className="h-4 w-4" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={editedProfile.name}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    value={editedProfile.email}
                    onChange={handleInputChange}
                    className="col-span-3"
                    disabled
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="location" className="text-right">
                    Location
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    value={editedProfile.location}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="bio" className="text-right">
                    Bio
                  </Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={editedProfile.bio}
                    onChange={handleInputChange}
                    className="col-span-3"
                    rows={4}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  onClick={handleProfileUpdate}
                  className="bg-purple hover:bg-purple-dark"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="pt-14 px-4 pb-4">
          <h3 className="text-xl font-bold">{userProfile.name}</h3>
          <p className="text-gray-500 flex items-center gap-1 mt-1">
            <MapPin className="h-4 w-4" /> {userProfile.location}
          </p>
          
          {userProfile.bio && (
            <p className="text-gray-600 mt-3 text-sm">
              {userProfile.bio}
            </p>
          )}
          
          <div className="border-t border-gray-100 mt-4 pt-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="h-4 w-4" />
              <span>{userProfile.email}</span>
            </div>
          </div>
        </div>
      </div>
      
      {isSettingsOpen ? (
        <div className="space-y-4 animate-fade-in">
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="account" className="flex-1">Account</TabsTrigger>
              <TabsTrigger value="privacy" className="flex-1">Privacy</TabsTrigger>
              <TabsTrigger value="notifications" className="flex-1">Notifications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="account" className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full justify-start text-gray-700"
                onClick={() => setIsEditDialogOpen(true)}
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start text-red-500 border-red-100 hover:bg-red-50"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Log Out
              </Button>
            </TabsContent>
            
            <TabsContent value="privacy" className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium mb-2">Privacy Settings</h4>
                <p className="text-sm text-gray-500">
                  Privacy settings will be available in future updates.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications" className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium mb-2">Notification Settings</h4>
                <p className="text-sm text-gray-500">
                  Notification settings will be available in future updates.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <div className="space-y-4">
          <Button 
            variant="outline" 
            className="w-full justify-start text-gray-700"
            onClick={() => setIsEditDialogOpen(true)}
          >
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start text-gray-700"
            onClick={() => setIsSettingsOpen(true)}
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full justify-start text-red-500 border-red-100 hover:bg-red-50"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Log Out
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileTab;
