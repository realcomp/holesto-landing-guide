import { Card, CardContent } from "@/components/ui/card";
import { useContent } from "@/hooks/useContent";

const WhoItsFor = () => {
  const { getText } = useContent();
  
  const targetUsers = [
    {
      title: getText('who_its_for.chronic_conditions.title', 'People with lab results'),
      description: getText('who_its_for.chronic_conditions.description', 'Have blood test results but don\'t know what to do with them'),
      icon: "📋"
    },
    {
      title: getText('who_its_for.weight_management.title', 'Patients undergoing treatment'), 
      description: getText('who_its_for.weight_management.description', 'Want to align their diet with medical therapy'),
      icon: "💊"
    },
    {
      title: getText('who_its_for.health_enthusiasts.title', 'Health-conscious individuals'),
      description: getText('who_its_for.health_enthusiasts.description', 'Healthy people who want to stay that way'),
      icon: "💪"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            {getText('who_its_for.title', 'Who Is It For?')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {targetUsers.map((user, index) => (
            <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {user.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {user.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {user.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;