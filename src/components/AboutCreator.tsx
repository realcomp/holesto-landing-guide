import { Card, CardContent } from "@/components/ui/card";

const AboutCreator = () => {
  return (
    <section id="about-creator" className="py-12 md:py-20 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
            About the Creator
          </h2>
        </div>
        
        <div className="space-y-8">
          <Card className="border-2 border-primary/20 overflow-hidden">
            <img 
              src="/lovable-uploads/4db38e6e-73d7-4044-8ae5-03ba35a04b2e.png" 
              alt="Dmitry Braverman at Olympic & 226 Sochi 2018 triathlon finish line" 
              className="w-full h-64 object-cover"
            />
            <CardContent className="p-8">
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-6">
                Hi, I'm Dmitry Braverman — a product and project manager with over 20 years of experience building digital products. I've launched and scaled solutions across media, fintech, automation, e-commerce, and advertising. I've led cross-functional teams, overseen end-to-end development, managed budgets up to $300,000, and delivered products that combine strong UX with real-world impact.
              </p>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-6">
                In the past, I led digital transformation at Forbes Russia and Cosmopolitan, developed AI tools and no-code platforms, and built media ecosystems with millions of users. I know how to take a product from idea to release — and make it matter.
              </p>
              <p className="text-base md:text-xl text-foreground font-semibold text-center">
                But this bot wasn't made for the market.<br />
                It started with a lab result.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-primary/5 to-medical-blue/5 border-2 border-primary/30">
            <CardContent className="p-8">
              <h3 className="text-lg md:text-2xl font-semibold text-foreground mb-6 text-center">
                The Story Behind It
              </h3>
              <div className="space-y-4 text-sm md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  One day I received routine bloodwork — and was shocked to see dangerously high cholesterol.
                </p>
                <p>
                  I felt fine. I work out. I've completed multiple Ironman races. And yet, something was clearly off.
                </p>
                <p>
                  I began researching, trying to make sense of what those numbers meant, and what I could — or couldn't — eat. It was harder than it should be.
                </p>
                <p className="text-foreground font-medium">
                  So I built a tool.<br />
                  First, just for myself.<br />
                  Then for my wife.<br />
                  And finally, for anyone who wants to understand their health and eat accordingly.
                </p>
                <p className="text-base md:text-xl text-primary font-semibold text-center pt-4">
                  Dr.Holesto is simple, smart, and personal — a Telegram bot that speaks your language and helps you take control of your well-being.
                </p>
                <p className="text-center text-foreground font-medium">
                  No app. No login. Just insight.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutCreator;