
import { Bell } from "lucide-react";

const NotificationsTab = () => {
  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      
      <div className="text-center p-12 bg-white rounded-xl shadow">
        <div className="mx-auto w-16 h-16 bg-purple-light rounded-full flex items-center justify-center mb-4">
          <Bell className="h-8 w-8 text-purple" />
        </div>
        <h3 className="text-xl font-semibold">No notifications</h3>
        <p className="text-gray-500 mt-2">We'll notify you when there's activity on your profile</p>
      </div>
    </div>
  );
};

export default NotificationsTab;
