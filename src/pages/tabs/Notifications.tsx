
import { Bell, User } from "lucide-react";
import { useState, useEffect } from "react";

interface Notification {
  id: string;
  type: "like" | "match" | "message" | "system";
  content: string;
  time: string;
  isRead: boolean;
  profilePic?: string;
}

const NotificationsTab = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading notifications
    const timer = setTimeout(() => {
      // Get user email to personalize notifications
      const userEmail = localStorage.getItem("userEmail");
      const userName = localStorage.getItem("userProfile") 
        ? JSON.parse(localStorage.getItem("userProfile") || "{}").name 
        : "there";
      
      // Create sample notifications for the user
      if (userEmail) {
        setNotifications([
          {
            id: "1",
            type: "system",
            content: `Welcome to HeartString, ${userName}!`,
            time: "Just now",
            isRead: false,
          },
          {
            id: "2",
            type: "system",
            content: "Complete your profile to get more matches",
            time: "5m ago",
            isRead: false,
          }
        ]);
      }
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const markAsRead = (id: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notif => 
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };
  
  if (loading) {
    return (
      <div className="w-full p-4">
        <h2 className="text-2xl font-bold mb-4">Notifications</h2>
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
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      
      {notifications.length > 0 ? (
        <div className="space-y-3">
          {notifications.map(notification => (
            <div 
              key={notification.id}
              className={`p-3 rounded-lg bg-white shadow flex items-center gap-3 ${
                !notification.isRead ? "border-l-4 border-purple" : ""
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="bg-purple-light rounded-full p-2">
                {notification.profilePic ? (
                  <img 
                    src={notification.profilePic} 
                    alt="profile" 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  notification.type === "system" ? (
                    <Bell className="h-5 w-5 text-purple" />
                  ) : (
                    <User className="h-5 w-5 text-purple" />
                  )
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm">{notification.content}</p>
                <p className="text-xs text-gray-500">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-12 bg-white rounded-xl shadow">
          <div className="mx-auto w-16 h-16 bg-purple-light rounded-full flex items-center justify-center mb-4">
            <Bell className="h-8 w-8 text-purple" />
          </div>
          <h3 className="text-xl font-semibold">No notifications</h3>
          <p className="text-gray-500 mt-2">We'll notify you when there's activity on your profile</p>
        </div>
      )}
    </div>
  );
};

export default NotificationsTab;
