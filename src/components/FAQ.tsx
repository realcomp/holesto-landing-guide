import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useContent } from "@/hooks/useContent";

const FAQ = () => {
  const { getText } = useContent();
  const faqs = [
    {
      question: getText('faq.q1', 'Is this bot a real doctor?'),
      answer: getText('faq.a1', 'No, Dr.Holesto is not a doctor and cannot replace medical consultation.')
    },
    {
      question: getText('faq.q2', 'I want to replace my blood test'),
      answer: getText('faq.a2', 'You can upload a new blood test anytime.')
    },
    {
      question: getText('faq.q3', 'Why doesn\'t the bot accept food photos I send?'),
      answer: getText('faq.a3', 'Make sure you\'ve uploaded your blood test first.')
    },
    {
      question: getText('faq.q4', 'I uploaded a blood test photo, but it wasn\'t recognized correctly'),
      answer: getText('faq.a4', 'Try uploading a clearer photo or a PDF version.')
    },
    {
      question: getText('faq.q5', 'How do I know which commands are available?'),
      answer: getText('faq.a5', 'Just type /help in the bot.')
    },
    {
      question: getText('faq.q6', 'Can I use the bot for someone else?'),
      answer: getText('faq.a6', 'Each chat session is designed for one person.')
    },
    {
      question: getText('faq.q7', 'What languages does the bot support?'),
      answer: getText('faq.a7', 'Dr.Holesto works in multiple languages.')
    },
    {
      question: getText('faq.q8', 'Can I upload multiple tests?'),
      answer: getText('faq.a8', 'Currently, the bot works with one test at a time.')
    },
    {
      question: getText('faq.q9', 'The bot is buggy or unresponsive. What should I do?'),
      answer: getText('faq.a9', 'Try restarting the conversation with /start.')
    },
    {
      question: getText('faq.q10', 'Is my data confidential?'),
      answer: getText('faq.a10', 'Yes, your health data is processed securely.')
    },
    {
      question: getText('faq.q11', 'How do I ask food-related questions?'),
      answer: getText('faq.a11', 'Just send a photo of the food you plan to eat.')
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