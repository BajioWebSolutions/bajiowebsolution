import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "What services does Bajio Web Solutions offer?",
    answer: "We offer comprehensive web design, development, and digital marketing services, creating custom solutions tailored to meet our clients' specific needs."
  },
  {
    question: "Where is Bajio Web Solutions located?",
    answer: "We are based in Lebanon, Connecticut, serving clients locally and remotely."
  },
  {
    question: "How experienced is your team?",
    answer: "Our expert team brings years of experience in web development and design, with a proven track record of successful projects."
  },
  {
    question: "What makes Bajio Web Solutions different?",
    answer: "We focus on creating lasting partnerships with our clients, providing modern and scalable technologies, and offering dedicated support and maintenance."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer dedicated support and maintenance services to ensure your digital solutions continue to perform optimally."
  },
  {
    question: "How can I start a project with Bajio Web Solutions?",
    answer: "You can schedule a consultation through our website or contact us directly to discuss your project requirements and goals."
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-8 max-w-[1200px] mx-auto">
      <h2 className="text-center text-3xl font-bold text-foreground mb-12">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-neutral/20 last:border-b-0"
          >
            <button
              className="w-full py-6 px-4 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
              onClick={() => toggleQuestion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`answer-${index}`}
            >
              <span className="font-bold text-foreground">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-primary transition-transform duration-200 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              id={`answer-${index}`}
              className={`overflow-hidden transition-all duration-200 ${
                activeIndex === index ? 'max-h-40 pb-6 px-4' : 'max-h-0'
              }`}
            >
              <p className="text-neutral">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};