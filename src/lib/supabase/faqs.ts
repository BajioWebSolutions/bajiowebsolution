
import { supabase, handleSupabaseError } from "@/integrations/supabase/client";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  order?: number;
}

export const fetchFAQs = async (): Promise<FAQItem[]> => {
  try {
    const { data, error } = await supabase
      .from("faq_items")
      .select("*")
      .order("order_index", { ascending: true });

    if (error) {
      console.error("Error fetching FAQs:", error);
      return mockFAQs;
    }

    // Transform the data to match our FAQItem interface
    const faqs: FAQItem[] = data.map(item => ({
      id: item.id,
      question: item.question,
      answer: item.answer,
      category: item.category || undefined,
      order: item.order_index || undefined
    }));

    return faqs.length > 0 ? faqs : mockFAQs;
  } catch (error) {
    handleSupabaseError(error as Error, "Failed to fetch FAQs");
    return mockFAQs;
  }
};

// Mock FAQs in case the database is empty or there's an error
const mockFAQs: FAQItem[] = [
  {
    id: "1",
    question: "What services do you offer?",
    answer: "We offer a wide range of digital services including web design, app development, branding, UI/UX design, and digital marketing solutions tailored to your business needs.",
    category: "Services",
    order: 1,
  },
  {
    id: "2",
    question: "How much does a typical project cost?",
    answer: "Project costs vary depending on scope, complexity, and requirements. We offer customized quotes after an initial consultation. Contact us to discuss your project and receive a detailed estimate.",
    category: "Pricing",
    order: 2,
  },
  {
    id: "3",
    question: "What is your typical timeline for completing a project?",
    answer: "Our timelines depend on project scope and complexity. A simple website might take 3-4 weeks, while more complex applications can take 2-3 months. We'll provide a clear timeline during the proposal phase.",
    category: "Process",
    order: 3,
  },
  {
    id: "4",
    question: "Do you provide maintenance after the project is completed?",
    answer: "Yes, we offer ongoing maintenance and support packages for all our projects. These include regular updates, security patches, performance monitoring, and technical support.",
    category: "Support",
    order: 4,
  },
  {
    id: "5",
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern technologies like React, Next.js, Angular, Vue.js for front-end development, and Node.js, Python, and PHP for back-end systems. We also work with WordPress, Shopify, and various other platforms.",
    category: "Technical",
    order: 5,
  },
  {
    id: "6",
    question: "How do you handle project revisions?",
    answer: "Our process includes dedicated revision phases. Most packages include 2-3 rounds of revisions. Additional revisions can be arranged at an hourly rate if needed.",
    category: "Process",
    order: 6,
  },
  {
    id: "7",
    question: "Do you offer discounts for non-profits or startups?",
    answer: "We offer special pricing for non-profit organizations and early-stage startups. Please contact us to discuss your specific situation and how we can help.",
    category: "Pricing",
    order: 7,
  },
  {
    id: "8",
    question: "How do you handle project payments?",
    answer: "We typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we can arrange milestone-based payment schedules.",
    category: "Pricing",
    order: 8,
  },
];
