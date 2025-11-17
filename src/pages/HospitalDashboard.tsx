import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Building,
  Users,
  FilePlus,
  Settings,
  Menu,
  X,
  Bell,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const HospitalDashboard = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("patients");

  const goToProfile = () => navigate("/profile");

  const sidebarItems = [
    { id: "patients", label: "Patient Management", icon: Users },
    { id: "reports", label: "Upload Reports", icon: FilePlus },
    { id: "profile", label: "Profile & Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* SIDEBAR DESKTOP */}
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

      {/* MAIN CONTENT WRAPPER */}
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
              <Building className="text-white h-6 w-6" />
            </div>

            <span className="text-xl font-bold text-primary">
              Livora Hospital
            </span>
          </div>

          {/* PROFILE ICON */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon">
              <Bell />
            </Button>

            <div className="cursor-pointer" onClick={goToProfile}>
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-white">
                  DH
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

            <aside className="fixed left-0 top-0 w-64 bg-white border-r border-border h-full p-4 pt-16 space-y-2">
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
          {/* WELCOME CARD */}
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="p-6">
              <h1 className="text-2xl font-bold text-primary mb-2">
                Welcome, Delhi Hospital 🏥
              </h1>
              <p className="text-muted-foreground">
                Manage registered donors and recipients efficiently.
              </p>
            </CardContent>
          </Card>

          {/* PATIENT MANAGEMENT TAB */}
          {activeTab === "patients" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Patient Management</span>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <Button className="w-full bg-blue-600 text-white mb-3">
                  Add New Patient Record
                </Button>

                <p className="text-sm text-muted-foreground">
                  View and manage patient organ requests and donor matches.
                </p>
              </CardContent>
            </Card>
          )}

          {/* UPLOAD REPORTS TAB */}
          {activeTab === "reports" && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FilePlus className="h-5 w-5" />
                  <span>Upload Medical Reports</span>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <Button variant="outline" className="w-full">
                  Upload File
                </Button>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
};

export default HospitalDashboard;
