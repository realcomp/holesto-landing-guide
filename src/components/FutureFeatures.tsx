import { Card, CardContent } from "@/components/ui/card";
import { useContent } from "@/hooks/useContent";

const FutureFeatures = () => {
  const { getText } = useContent();
  const features = [
    "Support for multiple blood tests with history",
    "Tracking weight, height, and activity",
    "Food evaluation based on recipe (not just photos)",
    "Ability to save favorite tips",
    "Integration with nutrition and fitness trackers",
    "Reminders to update blood tests",
    "Mobile app (in development)"
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            {getText('future_features.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {getText('future_features.subtitle')}
          </p>
        </div>
        
        <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-medical-blue/5">
          <CardContent className="p-8">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg mt-1">✓</span>
                  <span className="text-foreground text-lg leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FutureFeatures;