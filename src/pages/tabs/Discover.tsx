
import ProfileCard from "@/components/ProfileCard";
import { Profile } from "@/data/profiles";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface DiscoverTabProps {
  currentProfiles: Profile[];
  onLike: (id: string) => void;
  onPass: (id: string) => void;
}

const DiscoverTab = ({ currentProfiles, onLike, onPass }: DiscoverTabProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      {currentProfiles.length > 0 ? (
        <ProfileCard 
          profile={currentProfiles[0]} 
          onLike={onLike} 
          onPass={onPass} 
        />
      ) : (
        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">That's everyone for now!</h3>
          <p className="text-gray-600 mb-4">Check back soon for new profiles</p>
        </div>
      )}
    </div>
  );
};

export default DiscoverTab;
