
import { MessageSquare } from "lucide-react";

const MessagesTab = () => {
  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold mb-4">Messages</h2>
      
      <div className="text-center p-12 bg-white rounded-xl shadow">
        <div className="mx-auto w-16 h-16 bg-purple-light rounded-full flex items-center justify-center mb-4">
          <MessageSquare className="h-8 w-8 text-purple" />
        </div>
        <h3 className="text-xl font-semibold">No messages yet</h3>
        <p className="text-gray-500 mt-2">When you match with someone, you can start chatting here</p>
      </div>
    </div>
  );
};

export default MessagesTab;
