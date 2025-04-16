
import { MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  senderName: string;
  senderAvatar?: string;
  isRead: boolean;
}

const MessagesTab = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState<{name?: string}>({});
  
  useEffect(() => {
    // Get user profile
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      setUserProfile(JSON.parse(storedProfile));
    }
    
    // Simulate loading messages
    const timer = setTimeout(() => {
      setMessages([]);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return (
      <div className="w-full p-4">
        <h2 className="text-2xl font-bold mb-4">Messages</h2>
        <div className="text-center p-4">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>
            <div className="h-10 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold mb-4">Messages</h2>
      
      {messages.length > 0 ? (
        <div className="space-y-3">
          {messages.map(message => (
            <div 
              key={message.id}
              className="p-3 rounded-lg bg-white shadow flex items-center gap-3"
            >
              {/* Message content */}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-12 bg-white rounded-xl shadow">
          <div className="mx-auto w-16 h-16 bg-purple-light rounded-full flex items-center justify-center mb-4">
            <MessageSquare className="h-8 w-8 text-purple" />
          </div>
          <h3 className="text-xl font-semibold">No messages yet</h3>
          <p className="text-gray-500 mt-2">
            {userProfile.name ? 
              `When you match with someone ${userProfile.name}, you can start chatting here` :
              "When you match with someone, you can start chatting here"
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default MessagesTab;
