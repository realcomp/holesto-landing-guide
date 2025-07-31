import { Card, CardContent } from "@/components/ui/card";

const WhyItMatters = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Why This Matters
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                You are what you eat
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Food is not just energy — it's information for your body. 
                It affects everything: hormones, mood, metabolism, immunity, even sleep.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Prevention is key
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Poor nutrition is the main cause of chronic illness in the 21st century. 
                Personalized, conscious nutrition is the best prevention.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-medical-blue/5 border-2 border-primary/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                But how do you know what your body really needs?
              </h3>
              <p className="text-xl text-primary font-medium">
                Dr.Holesto gives you the answer.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;