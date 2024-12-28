import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary hover:bg-primary-dark text-background transition-all duration-300 hover:scale-105 group"
          size="lg"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 mr-2" />
          <span className="hidden group-hover:inline">Back to Top</span>
        </Button>
      )}
    </>
  );
};