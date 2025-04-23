
import { Button } from "../ui/button";

const categories = [
  { id: "all", label: "All Posts" },
  { id: "digital-strategy", label: "Digital Strategy" },
  { id: "seo", label: "SEO" },
  { id: "social-media", label: "Social Media" },
  { id: "content-marketing", label: "Content Marketing" },
  { id: "email-marketing", label: "Email Marketing" },
  { id: "web-development", label: "Web Development" }
];

interface BlogFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const BlogFilter = ({ activeCategory, onCategoryChange }: BlogFilterProps) => {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-8">
      <span className="text-gray-400">Filter by:</span>
      <div className="bg-gray-800 rounded-full p-1 flex flex-wrap">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "ghost"}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeCategory === category.id 
                ? "bg-primary text-white" 
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
