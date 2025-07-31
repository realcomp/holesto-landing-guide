import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-12 md:py-20 pt-24 md:pt-32 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/lovable-uploads/92a8f5fa-d518-4c43-93b4-4246b94af40e.png)'}}>
      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-trust-blue/80 to-secondary/80"></div>
      <div className="container mx-auto max-w-4xl relative z-10 flex justify-start pl-8">
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl max-w-lg">
          <div className="text-center space-y-4 md:space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                Dr.Holesto
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
                Your personal nutrition assistant based on blood analysis
              </p>
              <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6 leading-relaxed">
                A smart Telegram bot that helps you understand what's happening inside your body — 
                and shows you how to eat in a way that truly fits your current health.
              </p>
            </div>
            
            <div className="flex flex-col gap-2 md:gap-3 justify-center">
              <Button 
                size="sm" 
                className="text-sm md:text-base px-4 md:px-6 py-2 md:py-3 transition-all duration-300 hover:shadow-lg hover:scale-105"
                asChild
              >
                <a href="https://t.me/DrHolestoBot" target="_blank" rel="noopener noreferrer">
                  Try Dr.Holesto Bot
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="text-sm md:text-base px-4 md:px-6 py-2 md:py-3 transition-all duration-300 hover:bg-primary hover:text-primary-foreground border-gray-300 text-gray-700 hover:border-primary"
                asChild
              >
                <a href="https://holesto.sportomatics.com" target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;