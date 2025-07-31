import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContentTranslations {
  [key: string]: {
    en: string;
    ru: string;
    he: string;
  };
}

export const useContent = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState<ContentTranslations>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await (supabase as any)
          .from('site_content')
          .select('content_key, translations');

        if (error) throw error;

        const contentMap: ContentTranslations = {};
        data?.forEach((item: any) => {
          contentMap[item.content_key] = item.translations;
        });

        setContent(contentMap);
        setError(null);
      } catch (err) {
        console.error('Error fetching content:', err);
        setError('Failed to load content');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, []);

  const getText = (key: string, fallback?: string): string => {
    const translations = content[key];
    if (!translations) {
      console.warn(`Content key "${key}" not found`);
      return fallback || key;
    }
    return translations[language] || translations.en || fallback || key;
  };

  return { getText, isLoading, error };
};