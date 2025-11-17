import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  Search,
  User,
  Heart,
  Users,
  Activity,
  MapPin,
  MessageCircle,
  Settings,
  Menu,
  X
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RecipientDashboard = () => {
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const sidebarItems = [
    { id: "home", label: "Home", icon: Heart },
    { id: "matches", label: "Matches", icon: Users },
    { id: "requests", label: "Requests", icon: Activity },
    { id: "messages", label: "Messages", icon: MessageCircle },
    { id: "tracking", label: "Tracking", icon: MapPin },
    { id: "profile", label: "Profile & Settings", icon: Settings },
  ];

  const mockMatches = [
    {
      id: 1,
      initials: "JD",
      bloodGroup: "O+",
      compatibility: 95,
      location: "Delhi",
      distance: "2.5 km",
      urgency: "urgent"
    },
    {
      id: 2,
      initials: "SM",
      bloodGroup: "O+",
      compatibility: 87,
      location: "Mumbai",
      distance: "15 km",
      urgency: "normal"
    },
    {
      id: 3,
      initials: "RK",
      bloodGroup: "O-",
      compatibility: 92,
      location: "Bangalore",
      distance: "8 km",
      urgency: "urgent"
    }
  ];

  // 🔥 OPEN PROFILE WHEN CLICKED
  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Nav */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          
          {/* Left */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">Livora</span>
          </div>

          {/* Center Search */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search organs, hospitals..." className="pl-10 bg-muted/30" />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center space-x-4">

            {/* Notification */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-destructive text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>

            {/* Profile Clickable */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={goToProfile}>
              <Avatar className="h-8 w-8">
                <AvatarImage src="" />
                <AvatarFallback className="bg-primary text-white">MA</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Mansi Awasthi</p>
                <p className="text-xs text-muted-foreground">Recipient</p>
              </div>
            </div>

          </div>

        </div>
      </header>

      <div className="flex">
        {/* LEFT SIDEBAR */}
        <aside className="hidden md:block w-64 bg-white border-r border-border min-h-screen">
          <nav className="p-4 space-y-2">
            {sidebarItems.map(item => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => {
                    setActiveTab(item.id);

                    if (item.id === "profile") {
                      goToProfile();
                    }
                  }}
                >
                  <Icon className="h-4 w-4 mr-3" />
                  {item.label}
                </Button>
              );
            })}
          </nav>
        </aside>

        {/* MOBILE SIDEBAR */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40">
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />

            <aside className="fixed left-0 top-16 w-64 bg-white border-r border-border h-full">
              <nav className="p-4 space-y-2">
                {sidebarItems.map(item => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant={activeTab === item.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => {
                        setActiveTab(item.id);
                        setIsMobileMenuOpen(false);

                        if (item.id === "profile") {
                          goToProfile();
                        }
                      }}
                    >
                      <Icon className="h-4 w-4 mr-3" />
                      {item.label}
                    </Button>
                  );
                })}
              </nav>
            </aside>
          </div>
        )}

        {/* MAIN CONTENT (unchanged) */}
        <main className="flex-1 p-4 md:p-6">
          {/* ... YOUR EXISTING CONTENT ... */}
          {/* I'm not changing your dashboard content */}
        </main>

      </div>

      {/* MOBILE BOTTOM BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border">
        <div className="grid grid-cols-5 gap-1 p-2">
          {sidebarItems.slice(0, 5).map(item => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                className={`flex flex-col items-center py-2 h-auto
                  ${activeTab === item.id ? "text-primary" : "text-muted-foreground"}`}
                onClick={() => {
                  setActiveTab(item.id);
                  if (item.id === "profile") {
                    goToProfile();
                  }
                }}
              >
                <Icon className="h-4 w-4 mb-1" />
                <span className="text-xs">{item.label.split(" ")[0]}</span>
              </Button>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default RecipientDashboard;
