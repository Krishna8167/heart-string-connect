
import { Profile } from "@/data/profiles";
import { Heart } from "lucide-react";

interface LikesTabProps {
  likedProfiles: Profile[];
}

const LikesTab = ({ likedProfiles }: LikesTabProps) => {
  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold mb-4">People who liked you</h2>
      
      {likedProfiles.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {likedProfiles.map((profile) => (
            <div key={profile.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative">
                <img 
                  src={profile.images[0]} 
                  alt={profile.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-medium">{profile.name}, {profile.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-12 bg-white rounded-xl shadow">
          <div className="mx-auto w-16 h-16 bg-purple-light rounded-full flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-purple" />
          </div>
          <h3 className="text-xl font-semibold">No likes yet</h3>
          <p className="text-gray-500 mt-2">Keep swiping to get matches!</p>
        </div>
      )}
    </div>
  );
};

export default LikesTab;
