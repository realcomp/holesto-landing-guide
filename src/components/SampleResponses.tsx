import { Card, CardContent } from "@/components/ui/card";
import { useContent } from "@/hooks/useContent";

const SampleResponses = () => {
  const { getText } = useContent();

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            {getText('sample_responses.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {getText('sample_responses.subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6">
                <span className="text-2xl mb-4 block">🧪</span>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {getText('sample_responses.blood_test.title')}
                </h3>
              </div>
              
              <div className="space-y-4 text-sm font-mono bg-accent/50 p-4 rounded-lg">
                <div>
                  <p className="font-semibold text-foreground">Detected abnormalities:</p>
                  <p className="text-muted-foreground">- Total cholesterol: 232 mg/dL (normal: 120–200 mg/dL)</p>
                  <p className="text-muted-foreground">- ALT: 58 U/L (normal: 0–40 U/L)</p>
                </div>
                
                <div>
                  <p className="font-semibold text-foreground">Dietary goals:</p>
                  <p className="text-muted-foreground">Lower cholesterol, reduce liver strain</p>
                </div>
                
                <div>
                  <p className="font-semibold text-foreground">Recommendations:</p>
                  <p className="text-muted-foreground">1. Reduce fatty meats, sausages, and fried foods</p>
                  <p className="text-muted-foreground">2. Include oatmeal, buckwheat, and vegetables in every meal</p>
                  <p className="text-muted-foreground">3. Eat fish, nuts, and olive oil weekly</p>
                  <p className="text-muted-foreground">4. Eliminate alcohol for at least 2 weeks</p>
                  <p className="text-muted-foreground">5. Drink at least 2 liters of water daily</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6">
                <span className="text-2xl mb-4 block">🥗</span>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {getText('sample_responses.food_photo.title')}
                </h3>
              </div>
              
              <div className="space-y-4 text-sm font-mono bg-accent/50 p-4 rounded-lg">
                <div>
                  <p className="font-semibold text-foreground">Detected: Pita with lamb</p>
                </div>
                
                <div>
                  <p className="font-semibold text-foreground">Recommendation: Eat with caution</p>
                </div>
                
                <div>
                  <p className="text-muted-foreground">
                    The dish is high in calories and fat, which can be excessive if you have high cholesterol.
                    It's better to reduce the portion, avoid added oils, and serve with a fresh vegetable salad.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SampleResponses;