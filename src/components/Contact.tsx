import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useContent } from "@/hooks/useContent";

const Contact = () => {
  const { getText } = useContent();

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            {getText('contact.title')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {getText('contact.telegram.title')}
              </h3>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://t.me/holesto_bot" target="_blank" rel="noopener noreferrer">
                  @holesto_bot
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {getText('contact.website.title')}
              </h3>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://holesto.sportomatics.com" target="_blank" rel="noopener noreferrer">
                  holesto.sportomatics.com
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {getText('contact.email.title')}
              </h3>
              <Button variant="outline" className="w-full" asChild>
                <a href="mailto:admin@sportomatics.com">
                  admin@sportomatics.com
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-16">
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href="https://t.me/holesto_bot" target="_blank" rel="noopener noreferrer">
              {getText('contact.cta')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;