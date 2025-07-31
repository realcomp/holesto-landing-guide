import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [currentLanguage, setCurrentLanguage] = useState("English");

  const languages = ["English", "Русский", "עברית"];

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
    // Language change logic would go here
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Dr.Holesto
          </button>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('why-it-matters')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Why This Matters
            </button>
            <button 
              onClick={() => scrollToSection('sample-responses')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sample Responses
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('about-creator')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About the Creator
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Language Selector */}
          <div className="flex items-center space-x-2">
            {languages.map((language) => (
              <button
                key={language}
                onClick={() => handleLanguageChange(language)}
                className={`px-3 py-1 text-sm transition-colors ${
                  currentLanguage === language
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {language}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;