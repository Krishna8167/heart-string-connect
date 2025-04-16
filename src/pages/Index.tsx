
import { useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { profiles, Profile } from "@/data/profiles";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

const Index = () => {
  const [currentProfiles, setCurrentProfiles] = useState<Profile[]>(profiles);
  const [likedProfiles, setLikedProfiles] = useState<Profile[]>([]);
  const [passedProfiles, setPassedProfiles] = useState<Profile[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  
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
            
            <Button 
              onClick={handleStartSwiping}
              className="w-full bg-purple hover:bg-purple-dark text-white mb-3 font-medium py-6"
            >
              Start Meeting People
              <Sparkles className="h-4 w-4 ml-2" />
            </Button>
          </div>
        ) : (
          <>
            {currentProfiles.length > 0 ? (
              <div className="w-full">
                <ProfileCard 
                  profile={currentProfiles[0]} 
                  onLike={handleLike} 
                  onPass={handlePass} 
                />
              </div>
            ) : (
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">That's everyone for now!</h3>
                <p className="text-gray-600 mb-4">Check back soon for new profiles</p>
                <Button 
                  onClick={() => {
                    setCurrentProfiles([...profiles]);
                    setLikedProfiles([]);
                    setPassedProfiles([]);
                  }}
                >
                  Reset Profiles
                </Button>
              </div>
            )}
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
