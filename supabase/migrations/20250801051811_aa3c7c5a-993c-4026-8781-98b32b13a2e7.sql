-- Insert all website content with proper content keys
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
('sample_responses.blood_test.content', '{"en": "Detected abnormalities:\n\n- Total cholesterol: 232 mg/dL (normal: 120–200 mg/dL)\n\n- ALT: 58 U/L (normal: 0–40 U/L)\n\nDietary goals:\n\nLower cholesterol, reduce liver strain\n\nRecommendations:\n\n1. Reduce fatty meats, sausages, and fried foods\n\n2. Include oatmeal, buckwheat, and vegetables in every meal\n\n3. Eat fish, nuts, and olive oil weekly\n\n4. Eliminate alcohol for at least 2 weeks\n\n5. Drink at least 2 liters of water daily", "ru": "", "he": ""}'),
('sample_responses.food_analysis.title', '{"en": "Food Photo Analysis", "ru": "", "he": ""}'),
('sample_responses.food_analysis.content', '{"en": "Detected: Pita with lamb\n\nRecommendation: Eat with caution\n\nThe dish is high in calories and fat, which can be excessive if you have high cholesterol. It''s better to reduce the portion, avoid added oils, and serve with a fresh vegetable salad.", "ru": "", "he": ""}'),

-- FAQ section
('faq.title', '{"en": "Frequently Asked Questions", "ru": "", "he": ""}'),
('faq.real_doctor.question', '{"en": "Is this bot a real doctor?", "ru": "", "he": ""}'),
('faq.real_doctor.answer', '{"en": "No, Dr.Holesto is not a real doctor and does not provide medical diagnoses. It''s an AI assistant that helps you understand your blood test results and provides general nutrition recommendations. Always consult with healthcare professionals for medical advice.", "ru": "", "he": ""}'),
('faq.replace_blood_test.question', '{"en": "I want to replace my blood test", "ru": "", "he": ""}'),
('faq.replace_blood_test.answer', '{"en": "You can upload a new blood test anytime, and the bot will analyze it. However, it doesn''t currently support comparing multiple tests or tracking changes over time.", "ru": "", "he": ""}'),
('faq.food_photos.question', '{"en": "Why doesn''t the bot accept food photos I send?", "ru": "", "he": ""}'),
('faq.food_photos.answer', '{"en": "Make sure you''re sending clear photos of food. If the bot doesn''t recognize the image, try describing the food in text instead.", "ru": "", "he": ""}'),
('faq.blood_test_recognition.question', '{"en": "I uploaded a blood test photo, but it wasn''t recognized correctly", "ru": "", "he": ""}'),
('faq.blood_test_recognition.answer', '{"en": "Try uploading a clearer photo or a PDF version of your blood test. Make sure all text is visible and readable.", "ru": "", "he": ""}'),
('faq.available_commands.question', '{"en": "How do I know which commands are available?", "ru": "", "he": ""}'),
('faq.available_commands.answer', '{"en": "The bot will guide you through the process. You can send blood test files, food photos, or ask questions about nutrition anytime.", "ru": "", "he": ""}'),
('faq.multiple_users.question', '{"en": "Can I use the bot for someone else?", "ru": "", "he": ""}'),
('faq.multiple_users.answer', '{"en": "Currently, the bot doesn''t support multiple user profiles in one chat. Each person should use their own Telegram account.", "ru": "", "he": ""}'),
('faq.languages.question', '{"en": "What languages does the bot support?", "ru": "", "he": ""}'),
('faq.languages.answer', '{"en": "Dr.Holesto works in English, Russian, Hebrew, Arabic, Japanese, and many other languages. It automatically detects your language.", "ru": "", "he": ""}'),
('faq.multiple_tests.question', '{"en": "Can I upload multiple tests?", "ru": "", "he": ""}'),
('faq.multiple_tests.answer', '{"en": "You can upload new tests anytime, but the bot currently analyzes each test individually and doesn''t compare them.", "ru": "", "he": ""}'),
('faq.bot_issues.question', '{"en": "The bot is buggy or unresponsive. What should I do?", "ru": "", "he": ""}'),
('faq.bot_issues.answer', '{"en": "Try restarting the conversation or contact support through the website. We''re constantly improving the bot''s performance.", "ru": "", "he": ""}'),
('faq.data_confidential.question', '{"en": "Is my data confidential?", "ru": "", "he": ""}'),
('faq.data_confidential.answer', '{"en": "Yes, your health data is processed securely and is not shared with third parties. The bot only uses your information to provide personalized recommendations.", "ru": "", "he": ""}'),
('faq.food_questions.question', '{"en": "How do I ask food-related questions?", "ru": "", "he": ""}'),
('faq.food_questions.answer', '{"en": "Just send a photo of the food you plan to eat — or describe it in text. You''ll get a personalized recommendation in a few seconds.", "ru": "", "he": ""}'),

-- Limitations section
('limitations.title', '{"en": "Current Limitations", "ru": "", "he": ""}'),
('limitations.subtitle', '{"en": "What Dr.Holesto currently cannot do", "ru": "", "he": ""}'),
('limitations.no_diagnosis', '{"en": "It does not diagnose or replace doctors", "ru": "", "he": ""}'),
('limitations.no_comparison', '{"en": "It cannot compare past and current tests", "ru": "", "he": ""}'),
('limitations.single_user', '{"en": "It does not support multiple users in one chat", "ru": "", "he": ""}'),
('limitations.no_medication', '{"en": "It does not give medication advice", "ru": "", "he": ""}'),
('limitations.photo_approximation', '{"en": "It cannot accurately estimate calories or composition from photos — it''s just an approximation", "ru": "", "he": ""}'),
('limitations.no_memory', '{"en": "It doesn''t remember your past questions (yet)", "ru": "", "he": ""}'),

-- Future Features section
('future_features.title', '{"en": "Coming Soon", "ru": "", "he": ""}'),
('future_features.subtitle', '{"en": "Features we''re working on", "ru": "", "he": ""}'),
('future_features.multiple_tests', '{"en": "Support for multiple blood tests with history", "ru": "", "he": ""}'),
('future_features.tracking', '{"en": "Tracking weight, height, and activity", "ru": "", "he": ""}'),
('future_features.recipes', '{"en": "Food evaluation based on recipe (not just photos)", "ru": "", "he": ""}'),
('future_features.favorites', '{"en": "Ability to save favorite tips", "ru": "", "he": ""}'),
('future_features.integrations', '{"en": "Integration with nutrition and fitness trackers", "ru": "", "he": ""}'),
('future_features.reminders', '{"en": "Reminders to update blood tests", "ru": "", "he": ""}'),
('future_features.mobile_app', '{"en": "Mobile app (in development)", "ru": "", "he": ""}'),

-- About Creator section
('about_creator.title', '{"en": "About the Creator", "ru": "", "he": ""}'),
('about_creator.professional.title', '{"en": "Professional Background", "ru": "", "he": ""}'),
('about_creator.professional.description', '{"en": "Hi, I''m Dmitry Braverman — a product and project manager with over 20 years of experience building digital products. I''ve launched and scaled solutions across media, fintech, automation, e-commerce, and advertising. I''ve led cross-functional teams, overseen end-to-end development, managed budgets up to $300,000, and delivered products that combine strong UX with real-world impact.\n\nIn the past, I led digital transformation at Forbes Russia and Cosmopolitan, developed AI tools and no-code platforms, and built media ecosystems with millions of users. I know how to take a product from idea to release — and make it matter.", "ru": "", "he": ""}'),
('about_creator.story.title', '{"en": "The Story Behind It", "ru": "", "he": ""}'),
('about_creator.story.description', '{"en": "But this bot wasn''t made for the market.\nIt started with a lab result.\n\nOne day I received routine bloodwork — and was shocked to see dangerously high cholesterol.\n\nI felt fine. I work out. I''ve completed multiple Ironman races. And yet, something was clearly off.\n\nI began researching, trying to make sense of what those numbers meant, and what I could — or couldn''t — eat. It was harder than it should be.\n\nSo I built a tool.\nFirst, just for myself.\nThen for my wife.\nAnd finally, for anyone who wants to understand their health and eat accordingly.\n\nDr.Holesto is simple, smart, and personal — a Telegram bot that speaks your language and helps you take control of your well-being.\n\nNo app. No login. Just insight.", "ru": "", "he": ""}'),

-- Contact section
('contact.title', '{"en": "Get in Touch", "ru": "", "he": ""}'),
('contact.telegram.title', '{"en": "Telegram", "ru": "", "he": ""}'),
('contact.telegram.description', '{"en": "Start using Dr.Holesto bot", "ru": "", "he": ""}'),
('contact.telegram.button', '{"en": "Open Bot", "ru": "", "he": ""}'),
('contact.website.title', '{"en": "Website", "ru": "", "he": ""}'),
('contact.website.description', '{"en": "Learn more about the project", "ru": "", "he": ""}'),
('contact.website.button', '{"en": "Visit Site", "ru": "", "he": ""}'),
('contact.email.title', '{"en": "Email", "ru": "", "he": ""}'),
('contact.email.description', '{"en": "Get support or ask questions", "ru": "", "he": ""}'),
('contact.email.button', '{"en": "Send Email", "ru": "", "he": ""}'),
('contact.cta.title', '{"en": "Ready to understand your body better?", "ru": "", "he": ""}'),
('contact.cta.button', '{"en": "Try Dr.Holesto Now", "ru": "", "he": ""}');