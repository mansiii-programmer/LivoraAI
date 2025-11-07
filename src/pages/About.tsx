import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Heart, Brain, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description: "Every decision we make is guided by empathy and understanding for those in medical need."
    },
    {
      icon: Brain,
      title: "AI-Powered Precision",
      description: "Advanced algorithms ensure the most accurate matching between donors and recipients."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Medical-grade security and privacy protection for all sensitive health information."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      description: "20+ years in transplant medicine",
      image: "👩‍⚕️"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of AI Engineering",
      description: "Former Google Health AI researcher",
      image: "👨‍💻"
    },
    {
      name: "Dr. James Wilson",
      role: "Clinical Director",
      description: "Leading transplant surgeon",
      image: "👨‍⚕️"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light to-secondary-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6 animate-fade-in">
              About Livora
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              We're on a mission to revolutionize organ donation through artificial intelligence, 
              making the process more efficient, transparent, and life-saving.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold font-heading text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Every 10 minutes, someone is added to the organ transplant waiting list. 
                Yet thousands of potential life-saving matches go unidentified due to 
                inefficient traditional matching systems.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Livora harnesses the power of artificial intelligence to create the most 
                sophisticated organ matching platform ever built, reducing wait times 
                and saving more lives than ever before.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Match Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">AI Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Lives Saved</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="bg-gradient-to-br from-primary-light to-secondary-light rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🧠❤️</div>
                  <h3 className="text-xl font-semibold text-primary">AI + Heart</h3>
                  <p className="text-muted-foreground">Technology meets compassion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Livora
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center animate-fade-in border-0 shadow-lg" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="font-heading">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              World-class medical professionals and AI experts working together
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center animate-scale-in border-0 shadow-lg" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="text-6xl mb-4">{member.image}</div>
                  <CardTitle className="font-heading">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-heading text-white mb-6">
            Join Our Life-Saving Mission
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you're a donor, recipient, or healthcare professional, 
            there's a place for you at Livora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-white text-primary hover:bg-primary-light hover:text-primary-dark px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;