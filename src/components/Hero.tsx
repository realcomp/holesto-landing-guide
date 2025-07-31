import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-12 md:py-20 pt-24 md:pt-32 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/lovable-uploads/92a8f5fa-d518-4c43-93b4-4246b94af40e.png)'}}>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg inline-block">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Dr.Holesto
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                Your personal nutrition assistant based on blood analysis
              </p>
              <p className="text-base md:text-lg text-gray-800 mb-0 leading-relaxed">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;