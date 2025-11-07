import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Shield, Brain, Bell, MessageCircle, MapPin, Check } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "1. Register & Verify",
      description: "Create your profile and complete medical verification",
      details: [
        "Secure account creation with medical information",
        "Document upload and verification process",
        "HIPAA-compliant data protection",
        "Identity and medical background checks"
      ]
    },
    {
      icon: Brain,
      title: "2. AI Matching",
      description: "Our AI analyzes compatibility factors in real-time",
      details: [
        "Blood type and tissue compatibility analysis",
        "Geographic proximity optimization",
        "Medical urgency prioritization",
        "Success probability calculations"
      ]
    },
    {
      icon: Bell,
      title: "3. Instant Notifications",
      description: "Get notified immediately when matches are found",
      details: [
        "Real-time match alerts",
        "Multi-channel notifications (SMS, email, app)",
        "Emergency contact system",
        "Medical team coordination"
      ]
    },
    {
      icon: MessageCircle,
      title: "4. Secure Communication",
      description: "Connect safely with medical teams and coordinators",
      details: [
        "HIPAA-compliant messaging system",
        "Medical team coordination tools",
        "Document sharing capabilities",
        "Timeline tracking and updates"
      ]
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Advanced algorithms consider 50+ compatibility factors for optimal matches"
    },
    {
      icon: Shield,
      title: "Medical-Grade Security",
      description: "Bank-level encryption and HIPAA compliance protect your sensitive data"
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "Track organ transport and procedure scheduling in real-time"
    },
    {
      icon: MessageCircle,
      title: "24/7 Support",
      description: "Round-the-clock medical support and emergency assistance"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light to-secondary-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6 animate-fade-in">
              How Livora Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Our AI-powered platform streamlines the organ donation process, 
              making it faster, safer, and more efficient for everyone involved.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`animate-fade-in ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full mr-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold font-heading text-foreground">
                        {step.title}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`animate-scale-in ${!isEven ? 'lg:col-start-1' : ''}`}>
                    <Card className="border-0 shadow-xl h-80 flex items-center justify-center bg-gradient-to-br from-primary-light to-secondary-light">
                      <div className="text-center">
                        <Icon className="h-24 w-24 mx-auto mb-4 text-primary" />
                        <h3 className="text-xl font-semibold text-primary">Step {index + 1}</h3>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-6">
              Platform Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced technology features that make Livora the most reliable organ donation platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center animate-fade-in border-0 shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="font-heading text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold font-heading text-foreground mb-6">
                Advanced AI Technology
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our proprietary AI algorithms analyze over 50 compatibility factors to ensure 
                the best possible matches between donors and recipients.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-muted-foreground">Machine learning models trained on millions of medical records</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-4"></div>
                  <span className="text-muted-foreground">Real-time compatibility scoring and ranking</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-4"></div>
                  <span className="text-muted-foreground">Predictive analytics for success probability</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-muted-foreground">Geographic optimization for time-sensitive procedures</span>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="bg-gradient-to-br from-primary-light to-secondary-light rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🧠</div>
                  <h3 className="text-xl font-semibold text-primary mb-2">AI Engine</h3>
                  <p className="text-muted-foreground">Processing millions of data points</p>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-primary">98.7%</div>
                      <div className="text-muted-foreground">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-secondary">&lt; 2 min</div>
                      <div className="text-muted-foreground">Match Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-heading text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of users who trust Livora with their most important medical decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-white text-primary hover:bg-primary-light hover:text-primary-dark px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Register Now
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;