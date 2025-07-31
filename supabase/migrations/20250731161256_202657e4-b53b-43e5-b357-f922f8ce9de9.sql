-- Insert Who It's For content
INSERT INTO public.site_content (content_key, translations) VALUES
('who_its_for.title', '{"en": "Who It''s For"}'),
('who_its_for.subtitle', '{"en": "Perfect for health-conscious individuals"}'),
('who_its_for.health_enthusiasts.title', '{"en": "Health Enthusiasts"}'),
('who_its_for.health_enthusiasts.description', '{"en": "People who want to optimize their nutrition based on real data"}'),
('who_its_for.chronic_conditions.title', '{"en": "Managing Chronic Conditions"}'),
('who_its_for.chronic_conditions.description', '{"en": "Those dealing with diabetes, high cholesterol, or other health issues"}'),
('who_its_for.weight_management.title', '{"en": "Weight Management"}'),
('who_its_for.weight_management.description', '{"en": "Anyone looking to lose, gain, or maintain weight healthily"}');

-- Insert About Creator content
INSERT INTO public.site_content (content_key, translations) VALUES
('about_creator.title', '{"en": "About the Creator"}'),
('about_creator.professional.title', '{"en": "Professional Background"}'),
('about_creator.professional.description', '{"en": "As a seasoned product and project manager with over a decade of experience, I''ve led teams and delivered solutions across various industries. My expertise lies in transforming complex problems into user-friendly solutions."}'),
('about_creator.story.title', '{"en": "The Story Behind Dr.Holesto"}'),
('about_creator.story.description', '{"en": "This project was born from a personal need. After receiving concerning blood test results, I found myself overwhelmed by medical jargon and conflicting online advice. I realized that many people face the same challenge - having health data but not knowing how to act on it. Dr.Holesto bridges that gap, making health insights accessible and actionable for everyone.""}');

-- Insert Sample Responses content
INSERT INTO public.site_content (content_key, translations) VALUES
('sample_responses.title', '{"en": "See Dr.Holesto in Action"}'),
('sample_responses.subtitle', '{"en": "Real examples of personalized health guidance"}'),
('sample_responses.blood_test.title', '{"en": "Blood Test Analysis Response"}'),
('sample_responses.blood_test.content', '{"en": "Based on your blood test results, I can see several areas where dietary adjustments could help:\n\n🔍 **Key Findings:**\n• High LDL cholesterol (165 mg/dL) - target should be <100\n• Elevated fasting glucose (110 mg/dL) - indicates pre-diabetic range\n• Low vitamin D (18 ng/mL) - insufficient levels\n\n🎯 **Dietary Goals:**\n• Reduce saturated fat intake\n• Increase fiber-rich foods\n• Add vitamin D sources\n\n✅ **Specific Recommendations:**\n• Replace red meat with salmon 2-3x/week\n• Add 1 cup of oats or beans daily\n• Include fortified foods or consider D3 supplement\n• Limit processed foods and added sugars"}'),
('sample_responses.food_photo.title', '{"en": "Food Photo Analysis Response"}'),
('sample_responses.food_photo.content', '{"en": "📸 **Food Analysis: Pita with Lamb**\n\n⚠️ **Caution:** Given your high cholesterol levels, this meal is quite rich in saturated fat from the lamb.\n\n📊 **Estimated Breakdown:**\n• Calories: ~450-500\n• Saturated fat: ~8-10g (half your daily limit)\n• Protein: ~25g ✅\n• Fiber: ~3g\n\n💡 **Better Choice:** Try chicken or turkey instead of lamb, and add a side salad to increase fiber and nutrients while keeping portions moderate."}');