-- Insert all website content with placeholders for translation
INSERT INTO site_content (content_key, translations) VALUES
-- Hero section
('hero.title', '{"en": "Dr.Holesto", "ru": "", "he": ""}'),
('hero.subtitle', '{"en": "Your personal nutrition assistant based on blood analysis", "ru": "", "he": ""}'),
('hero.description', '{"en": "A smart Telegram bot that helps you understand what''s happening inside your body — and shows you how to eat in a way that truly fits your current health.", "ru": "", "he": ""}'),
('hero.try_bot', '{"en": "Try Dr.Holesto Bot", "ru": "", "he": ""}'),
('hero.learn_more', '{"en": "Learn More", "ru": "", "he": ""}'),

-- Why It Matters section  
('why_it_matters.title', '{"en": "Why This Matters", "ru": "", "he": ""}'),
('why_it_matters.you_are_what_you_eat.title', '{"en": "You are what you eat", "ru": "", "he": ""}'),
('why_it_matters.you_are_what_you_eat.description', '{"en": "Food is not just energy — it''s information for your body. It affects everything: hormones, mood, metabolism, immunity, even sleep.", "ru": "", "he": ""}'),
('why_it_matters.prevention_is_key.title', '{"en": "Prevention is key", "ru": "", "he": ""}'),
('why_it_matters.prevention_is_key.description', '{"en": "Poor nutrition is the main cause of chronic illness in the 21st century. Personalized, conscious nutrition is the best prevention.", "ru": "", "he": ""}'),
('why_it_matters.how_to_know.title', '{"en": "But how do you know what your body really needs?", "ru": "", "he": ""}'),
('why_it_matters.how_to_know.description', '{"en": "Dr.Holesto gives you the answer.\n\nWe make food choices every day — but no one tells us if these choices are right for our own body.\n\nDr.Holesto helps you understand your bloodwork and connects it to your meals, so your health decisions are based on data, not guesswork.\n\nIt works in any language — English, Russian, Hebrew, Arabic, Japanese and more. No signup, no app — just Telegram.", "ru": "", "he": ""}'),

-- How It Works section
('how_it_works.title', '{"en": "How It Works", "ru": "", "he": ""}'),
('how_it_works.subtitle', '{"en": "Three simple steps to personalized nutrition", "ru": "", "he": ""}'),
('how_it_works.step1.title', '{"en": "Analyzes your blood test", "ru": "", "he": ""}'),
('how_it_works.step1.description', '{"en": "Just send the bot a PDF or photo — it will automatically recognize your values, highlight key metrics, and identify abnormalities.", "ru": "", "he": ""}'),
('how_it_works.step2.title', '{"en": "Provides personalized recommendations", "ru": "", "he": ""}'),
('how_it_works.step2.description', '{"en": "The bot explains which values are outside the normal range, what they mean, and gives you specific goals — lower cholesterol, support your thyroid, boost metabolism, etc. Then it offers 5–7 clear recommendations: what to eat, what to avoid, how to adjust your diet without extremes.", "ru": "", "he": ""}'),
('how_it_works.step3.title', '{"en": "Helps you choose what to eat every day", "ru": "", "he": ""}'),
('how_it_works.step3.description', '{"en": "Thinking about eating something? Just send Dr.Holesto a photo of the dish — or describe it in text. The bot will assess whether it''s suitable for you, explain why or why not, and suggest improvements. Like a doctor — but always available.", "ru": "", "he": ""}'),

-- Sample Responses section
('sample_responses.title', '{"en": "Sample Responses", "ru": "", "he": ""}'),
('sample_responses.subtitle', '{"en": "See how Dr.Holesto analyzes your health data and food choices", "ru": "", "he": ""}'),
('sample_responses.blood_test.title', '{"en": "Blood Test Analysis", "ru": "", "he": ""}'),
('sample_responses.blood_test.content', '{"en": "Detected abnormalities:\n\n- Total cholesterol: 232 mg/dL (normal: 120–200 mg/dL)\n- ALT: 58 U/L (normal: 0–40 U/L)\n\nDietary goals:\nLower cholesterol, reduce liver strain\n\nRecommendations:\n1. Reduce fatty meats, sausages, and fried foods\n2. Include oatmeal, buckwheat, and vegetables in every meal\n3. Eat fish, nuts, and olive oil weekly\n4. Eliminate alcohol for at least 2 weeks\n5. Drink at least 2 liters of water daily", "ru": "", "he": ""}'),
('sample_responses.food_photo.title', '{"en": "Food Photo Analysis", "ru": "", "he": ""}'),
('sample_responses.food_photo.content', '{"en": "Detected: Pita with lamb\n\nRecommendation: Eat with caution\n\nThe dish is high in calories and fat, which can be excessive if you have high cholesterol. It''s better to reduce the portion, avoid added oils, and serve with a fresh vegetable salad.", "ru": "", "he": ""}'),

-- Who It's For section
('who_its_for.title', '{"en": "Who Is It For?", "ru": "", "he": ""}'),
('who_its_for.lab_results.title', '{"en": "People with lab results", "ru": "", "he": ""}'),
('who_its_for.lab_results.description', '{"en": "Have blood test results but don''t know what to do with them", "ru": "", "he": ""}'),
('who_its_for.patients.title', '{"en": "Patients undergoing treatment", "ru": "", "he": ""}'),
('who_its_for.patients.description', '{"en": "Want to align their diet with medical therapy", "ru": "", "he": ""}'),
('who_its_for.health_conscious.title', '{"en": "Health-conscious individuals", "ru": "", "he": ""}'),
('who_its_for.health_conscious.description', '{"en": "Healthy people who want to stay that way", "ru": "", "he": ""}'),

-- FAQ section
('faq.title', '{"en": "Frequently Asked Questions", "ru": "", "he": ""}'),
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

-- Limitations section
('limitations.title', '{"en": "Limitations", "ru": "", "he": ""}'),
('limitations.not_doctor', '{"en": "It does not diagnose or replace doctors", "ru": "", "he": ""}'),
('limitations.no_comparison', '{"en": "It cannot compare past and current tests", "ru": "", "he": ""}'),
('limitations.single_user', '{"en": "It does not support multiple users in one chat", "ru": "", "he": ""}'),
('limitations.no_medication', '{"en": "It does not give medication advice", "ru": "", "he": ""}'),
('limitations.calorie_estimation', '{"en": "It cannot accurately estimate calories or composition from photos — it''s just an approximation", "ru": "", "he": ""}'),
('limitations.no_memory', '{"en": "It doesn''t remember your past questions (yet)", "ru": "", "he": ""}'),

-- Future Features section
('future_features.title', '{"en": "Coming Soon", "ru": "", "he": ""}'),
('future_features.subtitle', '{"en": "Features we''re working on to make Dr.Holesto even better", "ru": "", "he": ""}'),

-- About Creator section
('about_creator.title', '{"en": "About the Creator", "ru": "", "he": ""}'),
('about_creator.professional.description', '{"en": "Hi, I''m Dmitry Braverman — a product and project manager with over 20 years of experience building digital products. I''ve launched and scaled solutions across media, fintech, automation, e-commerce, and advertising. I''ve led cross-functional teams, overseen end-to-end development, managed budgets up to $300,000, and delivered products that combine strong UX with real-world impact.\n\nIn the past, I led digital transformation at Forbes Russia and Cosmopolitan, developed AI tools and no-code platforms, and built media ecosystems with millions of users. I know how to take a product from idea to release — and make it matter.", "ru": "", "he": ""}'),
('about_creator.story.title', '{"en": "But this bot wasn''t made for the market.\nIt started with a lab result.", "ru": "", "he": ""}'),
('about_creator.story.subtitle', '{"en": "The Story Behind It", "ru": "", "he": ""}'),
('about_creator.story.description', '{"en": "One day I received routine bloodwork — and was shocked to see dangerously high cholesterol.\n\nI felt fine. I work out. I''ve completed multiple Ironman races. And yet, something was clearly off.\n\nI began researching, trying to make sense of what those numbers meant, and what I could — or couldn''t — eat. It was harder than it should be.\n\nSo I built a tool.\nFirst, just for myself.\nThen for my wife.\nAnd finally, for anyone who wants to understand their health and eat accordingly.\n\nDr.Holesto is simple, smart, and personal — a Telegram bot that speaks your language and helps you take control of your well-being.\n\nNo app. No login. Just insight.", "ru": "", "he": ""}'),

-- Contact section
('contact.title', '{"en": "Get in Touch", "ru": "", "he": ""}'),
('contact.telegram.title', '{"en": "Telegram", "ru": "", "he": ""}'),
('contact.telegram.description', '{"en": "Start using Dr.Holesto bot", "ru": "", "he": ""}'),
('contact.telegram.button', '{"en": "Open Bot", "ru": "", "he": ""}'),
('contact.website.title', '{"en": "Website", "ru": "", "he": ""}'),
('contact.website.description', '{"en": "Learn more about the project", "ru": "", "he": ""}'),
('contact.website.button', '{"en": "Visit Site", "ru": "", "he": ""}'),
('contact.email.title', '{"en": "Email", "ru": "", "he": ""}'),
('contact.email.description', '{"en": "Direct communication", "ru": "", "he": ""}'),
('contact.email.button', '{"en": "Send Email", "ru": "", "he": ""}'),
('contact.cta.text', '{"en": "Ready to take control of your nutrition?", "ru": "", "he": ""}'),
('contact.cta.button', '{"en": "Start with Dr.Holesto", "ru": "", "he": ""}');