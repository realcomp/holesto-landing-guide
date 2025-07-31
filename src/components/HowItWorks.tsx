import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Analyzes your blood test",
      description: "Just send the bot a PDF or photo — it will automatically recognize your values, highlight key metrics, and identify abnormalities."
    },
    {
      number: "2", 
      title: "Provides personalized recommendations",
      description: "The bot explains which values are outside the normal range, what they mean, and gives you specific goals — lower cholesterol, support your thyroid, boost metabolism, etc. Then it offers 5–7 clear recommendations: what to eat, what to avoid, how to adjust your diet without extremes."
    },
    {
      number: "3",
      title: "Helps you choose what to eat every day",
      description: "Thinking about eating something? Just send Dr.Holesto a photo of the dish — or describe it in text. The bot will assess whether it's suitable for you, explain why or why not, and suggest improvements. Like a doctor — but always available."
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Three simple steps to personalized nutrition
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-medical-blue rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-xl md:text-2xl font-bold text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;