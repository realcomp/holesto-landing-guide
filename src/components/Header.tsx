import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { useContent } from "@/hooks/useContent";

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const { getText } = useContent();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'he', name: 'עברית' }
  ];

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="text-xl md:text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Dr.Holesto
          </button>

          {/* Hamburger Menu for all screen sizes */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-left text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted"
                >
                  {getText('header.how_it_works', 'How It Works')}
                </button>
                <button 
                  onClick={() => scrollToSection('why-it-matters')}
                  className="text-left text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted"
                >
                  {getText('header.why_it_matters', 'Why This Matters')}
                </button>
                <button 
                  onClick={() => scrollToSection('sample-responses')}
                  className="text-left text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted"
                >
                  {getText('header.sample_responses', 'Sample Responses')}
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-left text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted"
                >
                  {getText('header.faq', 'FAQ')}
                </button>
                <button 
                  onClick={() => scrollToSection('about-creator')}
                  className="text-left text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted"
                >
                  {getText('header.about_creator', 'About the Creator')}
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted"
                >
                  {getText('header.contact', 'Contact')}
                </button>
                
                {/* Language Selector */}
                <div className="border-t pt-4 mt-4">
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    {getText('header.language', 'Language')}
                  </p>
                  <div className="flex flex-col space-y-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`text-left p-2 rounded-md transition-colors ${
                          language === lang.code
                            ? 'text-primary font-medium bg-muted'
                            : 'text-foreground hover:text-primary hover:bg-muted'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;