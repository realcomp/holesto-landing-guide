import { Card, CardContent } from "@/components/ui/card";
import { useContent } from "@/hooks/useContent";

const Limitations = () => {
  const { getText } = useContent();
  const limitations = [
    "It does not diagnose or replace doctors",
    "It cannot compare past and current tests",
    "It does not support multiple users in one chat",
    "It does not give medication advice",
    "It cannot accurately estimate calories or composition from photos — it's just an approximation",
    "It doesn't remember your past questions (yet)"
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            {getText('limitations.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {getText('limitations.subtitle')}
          </p>
        </div>
        
        <Card className="border-2 border-destructive/30 bg-destructive/5">
          <CardContent className="p-8">
            <ul className="space-y-4">
              {limitations.map((limitation, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-destructive font-bold text-lg mt-1">•</span>
                  <span className="text-foreground text-lg leading-relaxed">
                    {limitation}
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

export default Limitations;