import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  Upload,
  History,
  Settings,
  Menu,
  X,
  Bell,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const DonorDashboard = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigate to profile page
  const goToProfile = () => {
    navigate("/profile");
  };

  const sidebarItems = [
    { id: "donate", label: "Donate Organ", icon: Upload },
    { id: "history", label: "Donation History", icon: History },
    { id: "profile", label: "Profile & Settings", icon: Settings },
  ];

  const [activeTab, setActiveTab] = useState("donate");

  return (
    <div className="min-h-screen bg-background flex">
      {/* SIDEBAR (Desktop) */}
      <aside className="hidden md:block w-64 bg-white border-r border-border min-h-screen p-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => {
                setActiveTab(item.id);
                if (item.id === "profile") goToProfile();
              }}
            >
              <Icon className="h-4 w-4 mr-3" />
              {item.label}
            </Button>
          );
        })}
      </aside>

      <div className="flex-1">
        {/* HEADER */}
        <header className="bg-white border-b sticky top-0 z-50 flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>

            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
              <Heart className="text-white h-6 w-6" />
            </div>

            <span className="text-xl font-bold text-primary">
              Livora Donor
            </span>
          </div>

          {/* Profile icon → open profile page */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon">
              <Bell />
            </Button>

            <div
              className="cursor-pointer"
              onClick={goToProfile}
            >
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-white">
                  MA
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* MOBILE SIDEBAR */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40">
            <div
              className="fixed inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <aside className="fixed left-0 top-0 w-64 bg-white border-r border-border h-full p-4 space-y-2 pt-16">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={activeTab === item.id ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                      if (item.id === "profile") goToProfile();
                    }}
                  >
                    <Icon className="h-4 w-4 mr-3" />
                    {item.label}
                  </Button>
                );
              })}
            </aside>
          </div>
        )}

        {/* MAIN CONTENT */}
        <main className="p-6 space-y-6">
          {/* Welcome Banner */}
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="p-6">
              <h1 className="text-2xl font-bold text-primary mb-2">
                Welcome, Mansi! 👋
              </h1>
              <p className="text-muted-foreground">
                You’re registered as an Organ Donor. Keep your details up-to-date
                to help save lives.
              </p>
            </CardContent>
          </Card>

          {/* Donate Organ Form */}
          {activeTab === "donate" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="h-5 w-5" />
                  <span>Donate Organ</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Full Name" />
                <Input placeholder="Age" type="number" />
                <Input placeholder="Blood Group" />
                <Input placeholder="Organ Type (Kidney, Liver...)" />
                <Input placeholder="City / Hospital Name" />

                <Button className="w-full bg-blue-600 text-white">
                  Submit
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Donation History */}
          {activeTab === "history" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <History className="h-5 w-5" />
                  <span>Donation History</span>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  You haven’t made any donations yet. Once you donate, your
                  history will appear here.
                </p>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
};

export default DonorDashboard;
