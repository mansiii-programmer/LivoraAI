import { useState } from "react";
import { Building, Users, FilePlus, Settings, Menu, X, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const HospitalDashboard = () => {
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
            <Building className="text-white h-6 w-6" />
          </div>
          <span className="text-xl font-bold text-primary">Livora Hospital</span>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon">
            <Bell />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary text-white">DH</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="p-6 space-y-6">
        {/* Welcome */}
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

        {/* Manage Patients */}
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

        {/* Upload Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FilePlus className="h-5 w-5" />
              <span>Upload Medical Reports</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Upload File</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default HospitalDashboard;
