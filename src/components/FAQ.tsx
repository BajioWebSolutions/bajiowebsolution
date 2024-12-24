import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  const [selectedQuestion, setSelectedQuestion] = useState<(typeof faqData)[0] | null>(null);

  return (
    <section className="py-16 px-8">
      <div className="max-w-[800px] mx-auto">
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
                className="w-full py-6 px-4 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg hover:bg-neutral-dark/10 transition-colors"
                onClick={() => setSelectedQuestion(item)}
                aria-expanded={selectedQuestion === item}
              >
                <span className="font-bold text-foreground">{item.question}</span>
                <ChevronDown
                  className="w-5 h-5 text-primary transition-transform duration-200"
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedQuestion} onOpenChange={() => setSelectedQuestion(null)}>
        <DialogContent className="max-w-2xl bg-neutral-dark/95 backdrop-blur-xl border-neutral-dark">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">
              {selectedQuestion?.question}
            </DialogTitle>
            <DialogDescription className="text-neutral text-base leading-relaxed mt-4">
              {selectedQuestion?.answer}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};