
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

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
    <section className="py-20 bg-background-dark relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background-dark to-background-dark opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground-dark">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-neutral text-lg max-w-3xl mx-auto">
            Find answers to common questions about our services and process.
            If you can't find what you're looking for, please contact us.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-primary/20 rounded-lg bg-neutral-dark/20 backdrop-blur-sm shadow-lg overflow-hidden"
            >
              <button
                className="w-full py-4 px-6 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg hover:bg-primary/5 transition-colors"
                onClick={() => setSelectedQuestion(item)}
                aria-expanded={selectedQuestion === item}
              >
                <span className="font-semibold text-foreground-dark">{item.question}</span>
                <ChevronDown
                  className="w-5 h-5 text-primary transition-transform duration-200 flex-shrink-0"
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedQuestion} onOpenChange={() => setSelectedQuestion(null)}>
        <DialogContent className="max-w-2xl bg-neutral-dark/95 backdrop-blur-xl border-neutral-dark rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground-dark">
              {selectedQuestion?.question}
            </DialogTitle>
            <DialogDescription className="text-neutral-light text-base leading-relaxed mt-4">
              {selectedQuestion?.answer}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};
