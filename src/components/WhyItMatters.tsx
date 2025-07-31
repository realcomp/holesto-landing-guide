import { Card, CardContent } from "@/components/ui/card";
import { useContent } from "@/hooks/useContent";

const WhyItMatters = () => {
  const { getText } = useContent();
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
            {getText('why_matters.title', 'Why This Matters')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8 md:p-8">
              <h3 className="text-lg md:text-2xl font-semibold text-foreground mb-3 md:mb-4">
                {getText('why_matters.you_are_what_you_eat.title', 'You are what you eat')}
              </h3>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                {getText('why_matters.you_are_what_you_eat.description', 'Food is not just energy — it\'s information for your body. It affects everything: hormones, mood, metabolism, immunity, even sleep.')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8 md:p-8">
              <h3 className="text-lg md:text-2xl font-semibold text-foreground mb-3 md:mb-4">
                {getText('why_matters.prevention.title', 'Prevention is key')}
              </h3>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                {getText('why_matters.prevention.description', 'Poor nutrition is the main cause of chronic illness in the 21st century. Personalized, conscious nutrition is the best prevention.')}
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-medical-blue/5 border-2 border-primary/30">
            <CardContent className="p-8 md:p-8">
              <h3 className="text-lg md:text-2xl font-semibold text-foreground mb-3 md:mb-4">
                {getText('why_matters.how_to_know.title', 'But how do you know what your body really needs?')}
              </h3>
              <p className="text-base md:text-xl text-primary font-medium mb-4 md:mb-6">
                {getText('why_matters.answer', 'Dr.Holesto gives you the answer.')}
              </p>
              <div className="text-sm md:text-lg text-foreground leading-relaxed space-y-3 md:space-y-4">
                <p>
                  {getText('why_matters.daily_choices', 'We make food choices every day — but no one tells us if these choices are right for our own body.')}
                </p>
                <p>
                  {getText('why_matters.data_based', 'Dr.Holesto helps you understand your bloodwork and connects it to your meals, so your health decisions are based on data, not guesswork.')}
                </p>
                <p>
                  {getText('why_matters.multilingual', 'It works in any language — English, Russian, Hebrew, Arabic, Japanese and more. No signup, no app — just Telegram.')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;