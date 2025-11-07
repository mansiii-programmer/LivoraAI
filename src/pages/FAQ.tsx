import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle, Phone, Mail } from "lucide-react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          question: "How do I register as a donor?",
          answer: "Registration is simple! Click 'Register' in the top navigation, select 'Donor' as your role, and complete the step-by-step onboarding process. You'll need to provide personal information, medical history, and complete identity verification."
        },
        {
          question: "What information do I need to provide?",
          answer: "You'll need basic personal information (name, contact details), medical information (blood type, medical history), identification documents, and emergency contact information. All data is encrypted and HIPAA-compliant."
        },
        {
          question: "Is my personal information secure?",
          answer: "Absolutely. We use bank-level encryption and are fully HIPAA-compliant. Your medical information is protected with the highest security standards and is only shared with authorized medical professionals involved in your care."
        },
        {
          question: "Can I change my mind after registering?",
          answer: "Yes, you can update your donor status, modify your preferences, or withdraw from the program at any time through your dashboard settings. Your autonomy and consent are always respected."
        }
      ]
    },
    {
      title: "Matching Process",
      questions: [
        {
          question: "How does the AI matching work?",
          answer: "Our AI analyzes over 50 compatibility factors including blood type, tissue compatibility, geographic location, medical urgency, and historical success rates to find the best possible matches in real-time."
        },
        {
          question: "How long does it take to find a match?",
          answer: "Our AI processes matches in under 2 minutes. However, finding a compatible donor depends on many factors including blood type, organ needed, and geographic location. Recipients are notified immediately when potential matches are identified."
        },
        {
          question: "What happens when a match is found?",
          answer: "Both parties and their medical teams are immediately notified. The system initiates the coordination process, schedules medical evaluations, and provides real-time updates throughout the transplant journey."
        },
        {
          question: "Can I see who I'm matched with?",
          answer: "For privacy and medical reasons, personal identities are protected until medical teams approve contact. The system provides compatibility scores and medical relevance without revealing personal details initially."
        }
      ]
    },
    {
      title: "Medical & Safety",
      questions: [
        {
          question: "Is organ donation safe?",
          answer: "Yes, organ donation is very safe. All procedures are performed by qualified medical professionals in accredited hospitals. Living donors undergo thorough medical evaluations to ensure their safety."
        },
        {
          question: "What medical tests are required?",
          answer: "Medical evaluations vary by organ type but typically include blood tests, imaging studies, psychological evaluation, and consultations with specialists. All tests are coordinated through the platform."
        },
        {
          question: "Are there age restrictions?",
          answer: "Age requirements vary by organ type and medical condition. Our medical team evaluates each case individually. Generally, donors can be from newborn to elderly, and recipients of all ages can be considered."
        },
        {
          question: "What if complications arise?",
          answer: "We have 24/7 medical support and emergency protocols. All procedures are covered by comprehensive medical support, and we coordinate with your insurance and medical teams throughout the process."
        }
      ]
    },
    {
      title: "For Hospitals",
      questions: [
        {
          question: "How do hospitals join the platform?",
          answer: "Hospitals can register through our institutional signup process. They need to provide accreditation documents, staff credentials, and complete our verification process. We work with transplant centers worldwide."
        },
        {
          question: "What are the integration requirements?",
          answer: "Our platform integrates with most hospital information systems through secure APIs. We provide technical support for implementation and staff training. The integration typically takes 2-4 weeks."
        },
        {
          question: "How does billing work?",
          answer: "We work with hospitals and insurance providers to streamline billing. The platform helps coordinate insurance approvals and provides transparent cost information throughout the process."
        },
        {
          question: "What reporting features are available?",
          answer: "Hospitals get access to comprehensive analytics including success rates, wait times, patient outcomes, and compliance reports. All reporting maintains patient privacy while providing valuable insights."
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light to-secondary-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6 animate-fade-in">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up">
              Find answers to common questions about organ donation, our platform, and the matching process.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative animate-scale-in">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Search FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.length > 0 ? (
            <div className="space-y-12">
              {filteredCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                  <h2 className="text-2xl font-bold font-heading text-foreground mb-6 text-center">
                    {category.title}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`} className="border border-border rounded-lg">
                        <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                          <span className="font-medium text-foreground">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms or browse all categories.</p>
              <Button 
                onClick={() => setSearchTerm("")}
                className="mt-4"
                variant="outline"
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our support team is here to help 24/7. Reach out through any of these channels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="font-heading">Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Get instant help from our support team
                </CardDescription>
                <Button className="w-full">Start Chat</Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="font-heading">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  24/7 emergency support available
                </CardDescription>
                <Button className="w-full" variant="outline">1-800-LIVORA-1</Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="font-heading">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Send us a detailed message
                </CardDescription>
                <Button className="w-full" variant="outline">support@livora.ai</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;