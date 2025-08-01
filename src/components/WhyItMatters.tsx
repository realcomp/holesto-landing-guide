import { Card, CardContent } from "@/components/ui/card";
import { useContent } from "@/hooks/useContent";

const WhyItMatters = () => {
  const { getText } = useContent();
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
            {getText('why_it_matters.title', 'Why This Matters')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8 md:p-8">
              <h3 className="text-lg md:text-2xl font-semibold text-foreground mb-3 md:mb-4">
                {getText('why_it_matters.card1.title', 'You are what you eat')}
              </h3>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                {getText('why_it_matters.card1.description', 'Food is not just energy — it\'s information for your body.')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8 md:p-8">
              <h3 className="text-lg md:text-2xl font-semibold text-foreground mb-3 md:mb-4">
                {getText('why_it_matters.card2.title', 'Prevention is key')}
              </h3>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                {getText('why_it_matters.card2.description', 'Poor nutrition is the main cause of chronic illness.')}
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-medical-blue/5 border-2 border-primary/30">
            <CardContent className="p-8 md:p-8">
              <h3 className="text-lg md:text-2xl font-semibold text-foreground mb-3 md:mb-4">
                {getText('why_it_matters.card3.title', 'But how do you know what your body really needs?')}
              </h3>
              <div className="text-sm md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {getText('why_it_matters.card3.description', 'Dr.Holesto gives you the answer.')}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;