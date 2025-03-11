
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

    // Transform the data to match the FAQItem interface
    const formattedData: FAQItem[] = data.map(item => ({
      id: item.id,
      question: item.question,
      answer: item.answer,
      category: item.category,
      order: item.order_index
    }));

    return formattedData.length > 0 ? formattedData : mockFAQs;
  } catch (error) {
    handleSupabaseError(error as Error, "Failed to fetch FAQs");
    return mockFAQs;
  }
};

// Mock FAQs in case the database is empty or there's an error
const mockFAQs: FAQItem[] = [
  {
    id: "1",
    question: "What services does Bajio Web Solutions offer?",
    answer: "We offer a wide range of digital services including web design, app development, branding, UI/UX design, and digital marketing solutions tailored to your business needs.",
    category: "Services",
    order: 1,
  },
  {
    id: "2",
    question: "Where is Bajio Web Solutions located?",
    answer: "Our main office is located in central Mexico, in the Bajio region. We serve clients globally and have team members working remotely across different time zones to provide better support.",
    category: "Company",
    order: 2,
  },
  {
    id: "3",
    question: "How experienced is your team?",
    answer: "Our team consists of senior developers with 5+ years of experience in their respective technologies. Each project is led by project managers with over 8 years of industry experience, ensuring high-quality delivery.",
    category: "Team",
    order: 3,
  },
  {
    id: "4",
    question: "How much does a typical project cost?",
    answer: "Project costs vary depending on scope, complexity, and requirements. We offer customized quotes after an initial consultation. Contact us to discuss your project and receive a detailed estimate.",
    category: "Pricing",
    order: 4,
  },
  {
    id: "5",
    question: "What is your typical timeline for completing a project?",
    answer: "Our timelines depend on project scope and complexity. A simple website might take 3-4 weeks, while more complex applications can take 2-3 months. We'll provide a clear timeline during the proposal phase.",
    category: "Process",
    order: 5,
  },
  {
    id: "6",
    question: "Do you provide maintenance after the project is completed?",
    answer: "Yes, we offer ongoing maintenance and support packages for all our projects. These include regular updates, security patches, performance monitoring, and technical support.",
    category: "Support",
    order: 6,
  },
  {
    id: "7",
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern technologies like React, Next.js, Angular, Vue.js for front-end development, and Node.js, Python, and PHP for back-end systems. We also work with WordPress, Shopify, and various other platforms.",
    category: "Technical",
    order: 7,
  },
  {
    id: "8",
    question: "How do you handle project revisions?",
    answer: "Our process includes dedicated revision phases. Most packages include 2-3 rounds of revisions. Additional revisions can be arranged at an hourly rate if needed.",
    category: "Process",
    order: 8,
  },
];
