import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Heart, Users, Building2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
    urgent: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["1-800-LIVORA-1", "24/7 Emergency Line"],
      description: "Immediate assistance for urgent medical situations"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["support@livora.ai", "medical@livora.ai"],
      description: "General inquiries and medical questions"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["123 Medical Center Drive", "Healthcare City, HC 12345"],
      description: "Visit our main office for in-person consultations"
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: ["24/7 Emergency Support", "Business: Mon-Fri 8AM-6PM"],
      description: "We're here when you need us most"
    }
  ];

  const departments = [
    {
      icon: Heart,
      title: "Medical Support",
      description: "Questions about procedures, matching, and medical care",
      email: "medical@livora.ai"
    },
    {
      icon: Users,
      title: "Patient Services",
      description: "Registration, account, and general patient support",
      email: "patients@livora.ai"
    },
    {
      icon: Building2,
      title: "Hospital Partnerships",
      description: "Institutional partnerships and hospital integration",
      email: "hospitals@livora.ai"
    }
  ];

  const categories = [
    { value: "medical", label: "Medical Question" },
    { value: "technical", label: "Technical Support" },
    { value: "registration", label: "Registration Help" },
    { value: "matching", label: "Matching Process" },
    { value: "emergency", label: "Emergency Situation" },
    { value: "partnership", label: "Hospital Partnership" },
    { value: "other", label: "Other" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light to-secondary-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              We're here to help 24/7. Whether you have questions about organ donation, 
              need technical support, or require emergency assistance, our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-destructive py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-destructive-foreground font-semibold">
              🚨 Medical Emergency? Call 1-800-LIVORA-1 or your local emergency services immediately
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="category">Category</Label>
                        <Select onValueChange={(value) => handleInputChange("category", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category.value} value={category.value}>
                                {category.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        rows={6}
                        className="mt-1"
                        placeholder="Please provide as much detail as possible..."
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="urgent"
                        checked={formData.urgent}
                        onChange={(e) => handleInputChange("urgent", e.target.checked)}
                        className="rounded"
                      />
                      <Label htmlFor="urgent" className="text-sm">
                        This is an urgent medical matter
                      </Label>
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                      <MessageCircle className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <div className="flex items-center">
                        <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg mr-3">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="font-heading text-lg">{info.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="font-medium text-foreground mb-1">
                          {detail}
                        </p>
                      ))}
                      <CardDescription className="mt-2">
                        {info.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-6">
              Specialized Support Teams
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect directly with the right department for faster, more specialized assistance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="font-heading">{dept.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {dept.description}
                    </CardDescription>
                    <Button variant="outline" className="w-full">
                      {dept.email}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold font-heading text-foreground mb-6">
                Visit Our Headquarters
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Schedule an in-person consultation at our main office. 
                Our medical team is available for face-to-face meetings and detailed discussions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span>123 Medical Center Drive, Healthcare City, HC 12345</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <span>Monday - Friday: 8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span>1-800-LIVORA-1</span>
                </div>
              </div>
              <Button className="mt-6" size="lg">
                Schedule a Visit
              </Button>
            </div>
            <div className="animate-scale-in">
              <div className="bg-gradient-to-br from-primary-light to-secondary-light rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏥</div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Medical Center</h3>
                  <p className="text-muted-foreground">State-of-the-art facility</p>
                  <div className="mt-4">
                    <Button variant="outline">View on Map</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;