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
              
              <div className="text-sm font-mono bg-accent/50 p-4 rounded-lg whitespace-pre-line text-muted-foreground">
                {getText('sample_responses.blood_test.content', 'Sample blood test analysis...')}
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
              
              <div className="text-sm font-mono bg-accent/50 p-4 rounded-lg whitespace-pre-line text-muted-foreground">
                {getText('sample_responses.food_photo.content', 'Sample food photo analysis...')}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SampleResponses;