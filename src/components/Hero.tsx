import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-12 md:py-20 pt-24 md:pt-32 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/lovable-uploads/92a8f5fa-d518-4c43-93b4-4246b94af40e.png)'}}>
      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-trust-blue/80 to-secondary/80"></div>
      <div className="container mx-auto max-w-4xl relative z-10 flex justify-center">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-3xl">
          <div className="text-center space-y-6 md:space-y-8">
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Dr.Holesto
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                Your personal nutrition assistant based on blood analysis
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                A smart Telegram bot that helps you understand what's happening inside your body — 
                and shows you how to eat in a way that truly fits your current health.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
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
                className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 transition-all duration-300 hover:bg-primary hover:text-primary-foreground border-gray-300 text-gray-700 hover:border-primary"
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