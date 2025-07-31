-- Create site_content table for multilingual content
CREATE TABLE public.site_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  content_key TEXT NOT NULL UNIQUE,
  translations JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access (since this is site content)
CREATE POLICY "Site content is publicly readable" 
ON public.site_content 
FOR SELECT 
USING (true);

-- Insert basic English content only
INSERT INTO public.site_content (content_key, translations) VALUES
('hero.title', '{"en": "Dr.Holesto"}'),
('hero.subtitle', '{"en": "Your Personal Health & Nutrition Guide"}'),
('hero.description', '{"en": "Get personalized dietary advice based on your blood tests and food choices. Chat with our AI-powered health assistant on Telegram."}'),
('hero.start_button', '{"en": "Start Chat on Telegram"}'),
('hero.learn_more', '{"en": "Learn More"}');

-- Insert How It Works content
INSERT INTO public.site_content (content_key, translations) VALUES
('how_it_works.title', '{"en": "How It Works"}'),
('how_it_works.subtitle', '{"en": "Three simple steps to better health"}'),
('how_it_works.step1.title', '{"en": "Upload Your Data"}'),
('how_it_works.step1.description', '{"en": "Share your blood test results or take a photo of your food"}'),
('how_it_works.step2.title', '{"en": "AI Analysis"}'),
('how_it_works.step2.description', '{"en": "Our AI analyzes your data and provides insights"}'),
('how_it_works.step3.title', '{"en": "Get Recommendations"}'),
('how_it_works.step3.description', '{"en": "Receive personalized dietary advice and health tips"}');

-- Insert Why It Matters content  
INSERT INTO public.site_content (content_key, translations) VALUES
('why_it_matters.title', '{"en": "Why It Matters"}'),
('why_it_matters.subtitle', '{"en": "Personalized nutrition based on your unique health data"}'),
('why_it_matters.card1.title', '{"en": "Data-Driven Insights"}'),
('why_it_matters.card1.description', '{"en": "Get recommendations based on your actual blood work, not generic advice"}'),
('why_it_matters.card2.title', '{"en": "Simple & Accessible"}'),
('why_it_matters.card2.description', '{"en": "No complex apps or expensive consultations. Just chat on Telegram"}'),
('why_it_matters.card3.title', '{"en": "Continuous Support"}'),
('why_it_matters.card3.description', '{"en": "Get ongoing guidance as your health journey evolves"}');