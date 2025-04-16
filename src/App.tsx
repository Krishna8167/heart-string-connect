
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import { toast } from "@/components/ui/use-toast";

const queryClient = new QueryClient();

// Create a context for authentication
export const AuthContext = createContext<{
  isLoggedIn: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  userProfile: any;
}>({
  isLoggedIn: false,
  login: () => false,
  logout: () => {},
  userProfile: null,
});

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  
  const [userProfile, setUserProfile] = useState(() => {
    const storedProfile = localStorage.getItem("userProfile");
    return storedProfile ? JSON.parse(storedProfile) : null;
  });

  useEffect(() => {
    // Check login status when app loads
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
    
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      setUserProfile(JSON.parse(storedProfile));
    }
  }, []);
  
  const login = (email: string, password: string) => {
    // For demo purposes, any non-empty email and password is valid
    if (email && password) {
      // Create a simple user profile
      const newProfile = {
        email: email,
        name: email.split('@')[0],
        joinedDate: new Date().toISOString(),
        bio: "I'm new to HeartString!",
        interests: ["dating", "relationships"],
        location: "New York, NY"
      };
      
      // Save to localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userProfile", JSON.stringify(newProfile));
      
      // Update state
      setIsLoggedIn(true);
      setUserProfile(newProfile);
      
      return true;
    }
    return false;
  };
  
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userProfile");
    setIsLoggedIn(false);
    setUserProfile(null);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out"
    });
  };

  // Create a protected route component
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userProfile }}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={
                isLoggedIn ? 
                <Index /> : 
                <Navigate to="/login" replace />
              } />
              <Route path="/login" element={
                isLoggedIn ? 
                <Navigate to="/" replace /> : 
                <Login />
              } />
              <Route path="/signup" element={
                isLoggedIn ? 
                <Navigate to="/" replace /> : 
                <SignUp />
              } />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </AuthContext.Provider>
  );
};

export default App;
