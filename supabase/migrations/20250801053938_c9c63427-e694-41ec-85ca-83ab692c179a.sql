-- Update existing content with English text and add missing keys
-- Update Hero section
UPDATE site_content SET translations = '{"en": "Try Dr.Holesto Bot", "ru": "", "he": ""}' WHERE content_key = 'hero.start_button';

-- Update Why It Matters section with new content structure
UPDATE site_content SET translations = '{"en": "You are what you eat", "ru": "", "he": ""}' WHERE content_key = 'why_it_matters.card1.title';
UPDATE site_content SET translations = '{"en": "Food is not just energy — it''s information for your body. It affects everything: hormones, mood, metabolism, immunity, even sleep.", "ru": "", "he": ""}' WHERE content_key = 'why_it_matters.card1.description';

UPDATE site_content SET translations = '{"en": "Prevention is key", "ru": "", "he": ""}' WHERE content_key = 'why_it_matters.card2.title';
UPDATE site_content SET translations = '{"en": "Poor nutrition is the main cause of chronic illness in the 21st century. Personalized, conscious nutrition is the best prevention.", "ru": "", "he": ""}' WHERE content_key = 'why_it_matters.card2.description';

UPDATE site_content SET translations = '{"en": "But how do you know what your body really needs?", "ru": "", "he": ""}' WHERE content_key = 'why_it_matters.card3.title';
UPDATE site_content SET translations = '{"en": "Dr.Holesto gives you the answer.\n\nWe make food choices every day — but no one tells us if these choices are right for our own body.\n\nDr.Holesto helps you understand your bloodwork and connects it to your meals, so your health decisions are based on data, not guesswork.\n\nIt works in any language — English, Russian, Hebrew, Arabic, Japanese and more. No signup, no app — just Telegram.", "ru": "", "he": ""}' WHERE content_key = 'why_it_matters.card3.description';

-- Update Who It's For section
UPDATE site_content SET translations = '{"en": "People with lab results", "ru": "", "he": ""}' WHERE content_key = 'who_its_for.chronic_conditions.title';
UPDATE site_content SET translations = '{"en": "Have blood test results but don''t know what to do with them", "ru": "", "he": ""}' WHERE content_key = 'who_its_for.chronic_conditions.description';

UPDATE site_content SET translations = '{"en": "Patients undergoing treatment", "ru": "", "he": ""}' WHERE content_key = 'who_its_for.weight_management.title';
UPDATE site_content SET translations = '{"en": "Want to align their diet with medical therapy", "ru": "", "he": ""}' WHERE content_key = 'who_its_for.weight_management.description';

UPDATE site_content SET translations = '{"en": "Health-conscious individuals", "ru": "", "he": ""}' WHERE content_key = 'who_its_for.health_enthusiasts.title';
UPDATE site_content SET translations = '{"en": "Healthy people who want to stay that way", "ru": "", "he": ""}' WHERE content_key = 'who_its_for.health_enthusiasts.description';

-- Update Sample Responses
UPDATE site_content SET translations = '{"en": "Blood Test Analysis", "ru": "", "he": ""}' WHERE content_key = 'sample_responses.blood_test.title';
UPDATE site_content SET translations = '{"en": "Food Photo Analysis", "ru": "", "he": ""}' WHERE content_key = 'sample_responses.food_photo.title';

-- Update contact section
UPDATE site_content SET translations = '{"en": "Ready to take control of your nutrition?", "ru": "", "he": ""}' WHERE content_key = 'contact.cta';

-- Update Future Features
UPDATE site_content SET translations = '{"en": "Coming Soon", "ru": "", "he": ""}' WHERE content_key = 'future_features.title';
UPDATE site_content SET translations = '{"en": "Features we''re working on to make Dr.Holesto even better", "ru": "", "he": ""}' WHERE content_key = 'future_features.subtitle';

-- Add missing keys
INSERT INTO site_content (content_key, translations) VALUES
('hero.try_bot', '{"en": "Try Dr.Holesto Bot", "ru": "", "he": ""}'),
('sample_responses.blood_test.content', '{"en": "Detected abnormalities:\n\n- Total cholesterol: 232 mg/dL (normal: 120–200 mg/dL)\n- ALT: 58 U/L (normal: 0–40 U/L)\n\nDietary goals:\nLower cholesterol, reduce liver strain\n\nRecommendations:\n1. Reduce fatty meats, sausages, and fried foods\n2. Include oatmeal, buckwheat, and vegetables in every meal\n3. Eat fish, nuts, and olive oil weekly\n4. Eliminate alcohol for at least 2 weeks\n5. Drink at least 2 liters of water daily", "ru": "", "he": ""}'),
('sample_responses.food_photo.content', '{"en": "Detected: Pita with lamb\n\nRecommendation: Eat with caution\n\nThe dish is high in calories and fat, which can be excessive if you have high cholesterol. It''s better to reduce the portion, avoid added oils, and serve with a fresh vegetable salad.", "ru": "", "he": ""}'),
('faq.q1', '{"en": "Is this bot a real doctor?", "ru": "", "he": ""}'),
('faq.a1', '{"en": "No, Dr.Holesto is not a doctor and cannot replace medical consultation. It''s a smart assistant that helps you understand your blood test results and provides general nutrition recommendations based on them. Always consult with healthcare professionals for medical advice.", "ru": "", "he": ""}'),
('faq.q2', '{"en": "I want to replace my blood test", "ru": "", "he": ""}'),
('faq.a2', '{"en": "You can upload a new blood test anytime. The bot will analyze the new results and provide updated recommendations based on your current health status.", "ru": "", "he": ""}'),
('faq.q3', '{"en": "Why doesn''t the bot accept food photos I send?", "ru": "", "he": ""}'),
('faq.a3', '{"en": "Make sure you''ve uploaded your blood test first. The bot needs your health data to provide personalized food recommendations. Also, ensure the photo is clear and the food is clearly visible.", "ru": "", "he": ""}'),
('faq.q4', '{"en": "I uploaded a blood test photo, but it wasn''t recognized correctly", "ru": "", "he": ""}'),
('faq.a4', '{"en": "Try uploading a clearer photo or a PDF version of your results. Make sure all text is readable and the image isn''t blurry. You can also try cropping the image to show only the results table.", "ru": "", "he": ""}'),
('faq.q5', '{"en": "How do I know which commands are available?", "ru": "", "he": ""}'),
('faq.a5', '{"en": "Just type /help in the bot to see all available commands and features.", "ru": "", "he": ""}'),
('faq.q6', '{"en": "Can I use the bot for someone else?", "ru": "", "he": ""}'),
('faq.a6', '{"en": "Each chat session is designed for one person. If you want to get recommendations for someone else, use a separate chat or account.", "ru": "", "he": ""}'),
('faq.q7', '{"en": "What languages does the bot support?", "ru": "", "he": ""}'),
('faq.a7', '{"en": "Dr.Holesto works in multiple languages including English, Russian, Hebrew, Arabic, Japanese, and many others. Just write to the bot in your preferred language.", "ru": "", "he": ""}'),
('faq.q8', '{"en": "Can I upload multiple tests?", "ru": "", "he": ""}'),
('faq.a8', '{"en": "Currently, the bot works with one test at a time. You can upload a new test to replace the previous one, but it won''t compare historical data yet.", "ru": "", "he": ""}'),
('faq.q9', '{"en": "The bot is buggy or unresponsive. What should I do?", "ru": "", "he": ""}'),
('faq.a9', '{"en": "Try restarting the conversation with /start. If the problem persists, contact support through the links provided on this website.", "ru": "", "he": ""}'),
('faq.q10', '{"en": "Is my data confidential?", "ru": "", "he": ""}'),
('faq.a10', '{"en": "Yes, your health data is processed securely and is not shared with third parties. The bot analyzes your information only to provide personalized recommendations.", "ru": "", "he": ""}'),
('faq.q11', '{"en": "How do I ask food-related questions?", "ru": "", "he": ""}'),
('faq.a11', '{"en": "Just send a photo of the food you plan to eat — or describe it in text. You''ll get a personalized recommendation in a few seconds.", "ru": "", "he": ""}'),
('limitations.not_doctor', '{"en": "It does not diagnose or replace doctors", "ru": "", "he": ""}'),
('limitations.no_comparison', '{"en": "It cannot compare past and current tests", "ru": "", "he": ""}'),
('limitations.single_user', '{"en": "It does not support multiple users in one chat", "ru": "", "he": ""}'),
('limitations.no_medication', '{"en": "It does not give medication advice", "ru": "", "he": ""}'),
('limitations.calorie_estimation', '{"en": "It cannot accurately estimate calories or composition from photos — it''s just an approximation", "ru": "", "he": ""}'),
('limitations.no_memory', '{"en": "It doesn''t remember your past questions (yet)", "ru": "", "he": ""}'),
('contact.telegram.button', '{"en": "Open Bot", "ru": "", "he": ""}'),
('contact.website.button', '{"en": "Visit Site", "ru": "", "he": ""}'),
('contact.email.button', '{"en": "Send Email", "ru": "", "he": ""}'),
('contact.cta.button', '{"en": "Start with Dr.Holesto", "ru": "", "he": ""}'),
('about_creator.story.subtitle', '{"en": "The Story Behind It", "ru": "", "he": ""}');