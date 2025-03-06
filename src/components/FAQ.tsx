
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { fetchFAQs, FAQItem } from '@/lib/supabase/faqs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<FAQItem | null>(null);
  const [faqData, setFaqData] = useState<FAQItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const loadFAQs = async () => {
      setIsLoading(true);
      const data = await fetchFAQs();
      setFaqData(data);
      setIsLoading(false);
    };

    loadFAQs();
  }, []);

  // Group FAQs by category
  const categories = faqData.reduce<Record<string, FAQItem[]>>((acc, item) => {
    const category = item.category || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  const categoryNames = Object.keys(categories);

  const toggleQuestion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-section px-8 bg-background-dark">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 mt-4">
          Frequently Asked Questions
        </h2>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-pulse text-primary">Loading FAQs...</div>
          </div>
        ) : categoryNames.length > 1 ? (
          <Tabs defaultValue={categoryNames[0]} className="w-full">
            <TabsList className="w-full mb-6 flex overflow-x-auto space-x-1 bg-neutral-dark/20 p-1">
              {categoryNames.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="flex-1 min-w-max"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {categoryNames.map((category) => (
              <TabsContent key={category} value={category} className="space-y-6">
                {categories[category].map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-neutral-dark/30 last:border-b-0 pb-2"
                  >
                    <button
                      className="w-full py-6 flex justify-between items-center text-left focus:outline-none hover:text-primary transition-colors"
                      onClick={() => toggleQuestion(item.id)}
                      aria-expanded={expandedId === item.id}
                    >
                      <span className="text-xl md:text-2xl font-bold text-foreground-dark">{item.question}</span>
                      <ChevronDown
                        className={`w-6 h-6 text-primary transition-transform duration-200 ${
                          expandedId === item.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedId === item.id && (
                      <div className="pb-6 text-neutral-light">
                        <p className="text-lg">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="space-y-6">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="border-b border-neutral-dark/30 last:border-b-0 pb-2"
              >
                <button
                  className="w-full py-6 flex justify-between items-center text-left focus:outline-none hover:text-primary transition-colors"
                  onClick={() => toggleQuestion(item.id)}
                  aria-expanded={expandedId === item.id}
                >
                  <span className="text-xl md:text-2xl font-bold text-foreground-dark">{item.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-primary transition-transform duration-200 ${
                      expandedId === item.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedId === item.id && (
                  <div className="pb-6 text-neutral-light">
                    <p className="text-lg">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <Dialog open={!!selectedQuestion} onOpenChange={() => setSelectedQuestion(null)}>
        <DialogContent className="max-w-2xl bg-neutral-dark/95 backdrop-blur-xl border-neutral-dark rounded-card">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground-dark">
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
