import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UserProfile() {
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    address: "",
    history: "No history available",
    password: "",
    newPassword: "",
  });

  const handleChange = (field: string, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Profile Header */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">User Profile</CardTitle>
          </CardHeader>
        </Card>

        {/* Personal Details */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input
                placeholder="Your full name"
                value={profile.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>

            <div>
              <Label>Phone Number</Label>
              <Input
                placeholder="Enter phone number"
                value={profile.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>

            <div>
              <Label>Address</Label>
              <Input
                placeholder="City, State, Country"
                value={profile.address}
                onChange={(e) => handleChange("address", e.target.value)}
              />
            </div>

            <Button className="w-full bg-blue-600 text-white">Save Changes</Button>
          </CardContent>
        </Card>

        {/* Donation / Request History */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{profile.history}</p>
          </CardContent>
        </Card>

        {/* Change Password */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Change Password</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Current Password</Label>
              <Input
                type="password"
                value={profile.password}
                onChange={(e) => handleChange("password", e.target.value)}
              />
            </div>
            <div>
              <Label>New Password</Label>
              <Input
                type="password"
                value={profile.newPassword}
                onChange={(e) => handleChange("newPassword", e.target.value)}
              />
            </div>
            <Button className="w-full bg-green-600 text-white">Update Password</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 
