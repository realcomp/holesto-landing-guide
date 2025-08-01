import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useContent } from "@/hooks/useContent";

const FAQ = () => {
  const { getText } = useContent();
  const faqs = [
    {
      question: "Is this bot a real doctor?",
      answer: "No. It's an AI-powered assistant. It provides smart and helpful suggestions, but it's not a replacement for professional medical advice. Always consult your physician for final decisions."
    },
    {
      question: "I want to replace my blood test",
      answer: "Use the /blood delete command. After deletion, the bot switches to general mode based on data from an average healthy person. Food photo analysis will be disabled until you upload a new blood test."
    },
    {
      question: "Why doesn't the bot accept food photos I send?",
      answer: "Most likely, you haven't uploaded your blood test. Without it, the bot works in text-only mode based on general health data. Food image analysis will remain unavailable until a new test is uploaded."
    },
    {
      question: "I uploaded a blood test photo, but it wasn't recognized correctly",
      answer: "Photo-based recognition can sometimes fail. For best results, send a PDF or a clear scan. Screenshots from online medical portals also work."
    },
    {
      question: "How do I know which commands are available?",
      answer: "Send /help — the bot will show you all available options and instructions."
    },
    {
      question: "Can I use the bot for someone else?",
      answer: "Technically yes, but not recommended. Recommendations are based on personal data. Each user should ideally use their own account and test results."
    },
    {
      question: "What languages does the bot support?",
      answer: "Any languages. Just send the language name, e.g., \"русский\", \"English\", \"français\" — and the bot will switch."
    },
    {
      question: "Can I upload multiple tests?",
      answer: "No. Only one active blood test per user is supported. Uploading a new test automatically deletes the previous one."
    },
    {
      question: "The bot is buggy or unresponsive. What should I do?",
      answer: "Try /start to reset the session. If issues persist — contact admin@sportomatics.com"
    },
    {
      question: "Is my data confidential?",
      answer: "Yes. Blood tests and messages are processed automatically and not shared with third parties. You can delete your data anytime with /blood delete."
    },
    {
      question: "How do I ask food-related questions?",
      answer: "Just send a photo of the food you plan to eat — or describe it in text. You'll get a personalized recommendation in a few seconds."
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            {getText('faq.title')}
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-2 border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-colors duration-300"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;