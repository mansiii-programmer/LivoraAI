import { useState } from "react";
import { Users, Activity, ClipboardList, Settings, Menu, X, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const CoordinatorDashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
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
            <Users className="text-white h-6 w-6" />
          </div>
          <span className="text-xl font-bold text-primary">Coordinator Panel</span>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon">
            <Bell />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary text-white">CA</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="p-6 space-y-6">
        <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold text-primary mb-2">
              Welcome, Central Coordinator
            </h1>
            <p className="text-muted-foreground">
              Manage organ matching, donor–recipient coordination, and hospital network.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span>Active Transplants</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Monitor all active transplant processes and statuses across hospitals.
            </p>
            <Button className="w-full bg-blue-600 text-white mt-3">
              View Active List
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ClipboardList className="h-5 w-5" />
              <span>User Management</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Approve or reject donor and recipient registrations.
            </p>
            <Button variant="outline" className="w-full mt-2">
              Manage Users
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CoordinatorDashboard;
