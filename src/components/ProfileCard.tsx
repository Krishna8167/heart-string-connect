
import { useState } from "react";
import { Profile } from "@/data/profiles";
import { Button } from "@/components/ui/button";
import { Heart, X, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ProfileCardProps {
  profile: Profile;
  onLike: (id: string) => void;
  onPass: (id: string) => void;
}

const ProfileCard = ({ profile, onLike, onPass }: ProfileCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const { toast } = useToast();
  
  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImageIndex < profile.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };
  
  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };
  
  const handleLike = () => {
    onLike(profile.id);
    toast({
      title: "Liked!",
      description: `You've liked ${profile.name}`,
    });
  };
  
  const handlePass = () => {
    onPass(profile.id);
  };
  
  const handleMessage = () => {
    toast({
      title: "Message sent!",
      description: `You've sent a message to ${profile.name}`,
    });
  };

  return (
    <div 
      className="profile-card w-full max-w-md rounded-xl overflow-hidden bg-white card-shadow"
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className="relative w-full aspect-[3/4]">
        <img 
          src={profile.images[currentImageIndex]} 
          alt={profile.name} 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 flex flex-col justify-end p-4">
          <h3 className="text-white text-2xl font-bold">{profile.name}, {profile.age}</h3>
          <p className="text-white/90">{profile.occupation}</p>
          <p className="text-white/80 text-sm">{profile.location}</p>
        </div>
        
        <div className="absolute top-0 left-0 right-0 p-2 flex justify-center space-x-1">
          {profile.images.map((_, index) => (
            <div 
              key={index}
              className={`h-1 flex-1 rounded-full ${
                index === currentImageIndex ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
        
        <button 
          onClick={handlePrevImage} 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-1"
          style={{ display: currentImageIndex === 0 ? 'none' : 'block' }}
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        
        <button 
          onClick={handleNextImage} 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-1"
          style={{ display: currentImageIndex === profile.images.length - 1 ? 'none' : 'block' }}
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
      
      {showDetails ? (
        <div className="p-4 animate-appear">
          <h4 className="text-lg font-medium mb-2">About</h4>
          <p className="text-gray-700 mb-4">{profile.bio}</p>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            {profile.education && (
              <div className="bg-purple-light/50 p-2 rounded-md">
                <p className="text-xs text-gray-500">Education</p>
                <p className="text-sm font-medium">{profile.education}</p>
              </div>
            )}
            {profile.height && (
              <div className="bg-purple-light/50 p-2 rounded-md">
                <p className="text-xs text-gray-500">Height</p>
                <p className="text-sm font-medium">{profile.height}</p>
              </div>
            )}
            {profile.lookingFor && (
              <div className="bg-purple-light/50 p-2 rounded-md">
                <p className="text-xs text-gray-500">Looking For</p>
                <p className="text-sm font-medium">{profile.lookingFor}</p>
              </div>
            )}
          </div>
          
          <h4 className="text-lg font-medium mb-2">Prompts</h4>
          <div className="space-y-3 mb-4">
            {profile.prompts.map((prompt, index) => (
              <div key={index} className="bg-purple-light/30 p-3 rounded-md">
                <p className="font-medium text-sm text-purple-dark">{prompt.question}</p>
                <p className="text-gray-700">{prompt.answer}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-4">
          <p className="text-gray-600 text-sm line-clamp-2 mb-1">{profile.bio}</p>
          <p className="text-xs text-gray-500">Tap to see more details</p>
        </div>
      )}
      
      <div className="flex justify-around p-4 border-t border-gray-100">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12 border-gray-200 hover:border-red-400 hover:bg-red-50"
          onClick={handlePass}
        >
          <X className="h-6 w-6 text-gray-400 hover:text-red-500" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12 border-gray-200 hover:border-purple-400 hover:bg-purple-50"
          onClick={handleMessage}
        >
          <MessageSquare className="h-6 w-6 text-gray-400 hover:text-purple" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12 border-gray-200 hover:border-green-400 hover:bg-green-50"
          onClick={handleLike}
        >
          <Heart className="h-6 w-6 text-gray-400 hover:text-green-500" />
        </Button>
      </div>
    </div>
  );
};

export default ProfileCard;
