import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-12 md:py-20 pt-24 md:pt-32 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'}}>
      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-trust-blue/80 to-secondary/80"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                Dr.Holesto
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                Your personal nutrition assistant based on blood analysis
              </p>
              <p className="text-base md:text-lg text-foreground mb-6 md:mb-8 leading-relaxed">
                A smart Telegram bot that helps you understand what's happening inside your body — 
                and shows you how to eat in a way that truly fits your current health.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button 
                size="lg" 
                className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 transition-all duration-300 hover:shadow-lg hover:scale-105"
                asChild
              >
                <a href="https://t.me/DrHolestoBot" target="_blank" rel="noopener noreferrer">
                  Try Dr.Holesto Bot
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://holesto.sportomatics.com" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/4c7e2437-f753-4ceb-b12a-a343edd6459b.png" 
                alt="Doctor holding cholesterol chart" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;