import { Card, CardContent } from "@/components/ui/card";

const WhoItsFor = () => {
  const targetUsers = [
    {
      title: "People with lab results",
      description: "Have blood test results but don't know what to do with them",
      icon: "📋"
    },
    {
      title: "Patients undergoing treatment", 
      description: "Want to align their diet with medical therapy",
      icon: "💊"
    },
    {
      title: "Health-conscious individuals",
      description: "Healthy people who want to stay that way",
      icon: "💪"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Who Is It For?
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