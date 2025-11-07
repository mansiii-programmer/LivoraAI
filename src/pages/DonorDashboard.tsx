import { useState } from "react";
import { Heart, Upload, History, Settings, Menu, X, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const DonorDashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
          <span className="text-xl font-bold text-primary">Livora Donor</span>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon">
            <Bell />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary text-white">MA</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="p-6 space-y-6">
        {/* Welcome Banner */}
        <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold text-primary mb-2">
              Welcome, Mansi! 👋
            </h1>
            <p className="text-muted-foreground">
              You’re registered as an Organ Donor. Keep your details up-to-date to help save lives.
            </p>
          </CardContent>
        </Card>

        {/* Upload Organ Details */}
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
            <Button className="w-full bg-blue-600 text-white">Submit</Button>
          </CardContent>
        </Card>

        {/* Donation History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <History className="h-5 w-5" />
              <span>Donation History</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              You haven’t made any donations yet. Once you donate, your history will appear here.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DonorDashboard;
