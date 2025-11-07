import { useState } from "react";
import { Bell, Search, User, Heart, Users, Activity, MapPin, MessageCircle, Settings, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Dashboard = () => {
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

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left - Logo */}
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

          {/* Center - Search */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search organs, hospitals..."
                className="pl-10 bg-muted/30"
              />
            </div>
          </div>

          {/* Right - Notifications & User */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-destructive text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
            <div className="flex items-center space-x-2">
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
        {/* Left Sidebar - Desktop */}
        <aside className="hidden md:block w-64 bg-white border-r border-border min-h-screen">
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab(item.id)}
                >
                  <Icon className="h-4 w-4 mr-3" />
                  {item.label}
                </Button>
              );
            })}
          </nav>
        </aside>

        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40">
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <aside className="fixed left-0 top-16 w-64 bg-white border-r border-border h-full">
              <nav className="p-4 space-y-2">
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

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">
          {/* Welcome Banner */}
          <Card className="mb-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-primary mb-2">
                    Hi, Mansi 👋
                  </h1>
                  <p className="text-muted-foreground mb-2">
                    You're waiting for a Kidney match.
                  </p>
                  <Badge variant="destructive" className="bg-orange-100 text-orange-800 border-orange-200">
                    Urgent
                  </Badge>
                </div>
                <div className="hidden md:block">
                  <div className="bg-white/80 rounded-full p-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Real-time Alert */}
          <Card className="mb-6 border-orange-200 bg-orange-50">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 text-orange-800">
                <span>🚨</span>
                <span className="font-medium">Urgent match available in Delhi Hospital</span>
                <Button size="sm" className="ml-auto">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Matches Found
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">12</div>
                <p className="text-xs text-muted-foreground">+3 new this week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Potential Donors Nearby
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-secondary">8</div>
                <p className="text-xs text-muted-foreground">Within 50km radius</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Average Match Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">89%</div>
                <p className="text-xs text-muted-foreground">Excellent compatibility</p>
              </CardContent>
            </Card>
          </div>

          {/* Match Suggestions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>AI Match Suggestions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockMatches.map((match) => (
                  <Card key={match.id} className="border border-border/50 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-secondary text-white">
                            {match.initials}
                          </AvatarFallback>
                        </Avatar>
                        <Badge 
                          variant={match.urgency === "urgent" ? "destructive" : "secondary"}
                          className={match.urgency === "urgent" ? "bg-orange-100 text-orange-800" : ""}
                        >
                          {match.urgency}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Blood Group:</span>
                          <span className="font-semibold">{match.bloodGroup}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Compatibility:</span>
                          <span className="font-semibold text-primary">{match.compatibility}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Location:</span>
                          <span className="text-sm">{match.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Distance:</span>
                          <span className="text-sm">{match.distance}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          View Details
                        </Button>
                        <Button size="sm" className="flex-1">
                          Request Organ
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>

        {/* Right Sidebar - Desktop */}
        <aside className="hidden lg:block w-80 bg-white border-l border-border min-h-screen p-4">
          {/* Messages Preview */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-sm">Recent Messages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-white">DH</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Delhi Hospital</p>
                  <p className="text-xs text-muted-foreground truncate">
                    Your match request has been...
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">2m</div>
              </div>
              
              <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-secondary text-white">JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">John Doe</p>
                  <p className="text-xs text-muted-foreground truncate">
                    Thank you for considering...
                  </p>
                </div>
                <div className="text-xs text-muted-foreground">1h</div>
              </div>
            </CardContent>
          </Card>

          {/* Verification Status */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-sm">Verification Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-primary rounded-full"></div>
                <span className="text-sm">Medical docs verified ✓</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-primary rounded-full"></div>
                <span className="text-sm">Identity verified ✓</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm">Hospital linkage pending</span>
              </div>
            </CardContent>
          </Card>

          {/* Tips Widget */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Tips & Support</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground">
                  💡 Keep your medical information updated for better matches.
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Chat with Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border">
        <div className="grid grid-cols-5 gap-1 p-2">
          {sidebarItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                className={`flex flex-col items-center py-2 h-auto ${
                  activeTab === item.id ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon className="h-4 w-4 mb-1" />
                <span className="text-xs">{item.label.split(" ")[0]}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Floating Action Button - Mobile */}
      <Button
        size="lg"
        className="md:hidden fixed bottom-20 right-4 rounded-full h-14 w-14 shadow-lg"
      >
        <Heart className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Dashboard;