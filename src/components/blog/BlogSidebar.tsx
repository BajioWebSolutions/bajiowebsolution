
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { Input } from "../ui/input";

interface BlogSidebarProps {
  onSearch: (query: string) => void;
  onSubscribe: (email: string) => void;
  onCategoryClick: (category: string) => void;
}

export const BlogSidebar = ({ onSearch, onSubscribe, onCategoryClick }: BlogSidebarProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [email, setEmail] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    onSubscribe(email);
    setEmail("");
  };

  return (
    <div className="md:w-1/4 space-y-8">
      {/* Search */}
      <div className="bg-gray-800 rounded-lg p-6 custom-shadow">
        <h3 className="text-xl font-bold mb-4 text-white">Search</h3>
        <form onSubmit={handleSearch} className="relative">
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full bg-gray-700 text-white px-4 py-3 rounded-button border-none"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button 
            type="submit"
            variant="ghost" 
            size="icon" 
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <Search className="h-5 w-5 text-gray-400" />
          </Button>
        </form>
      </div>

      {/* Categories */}
      <div className="bg-gray-800 rounded-lg p-6 custom-shadow">
        <h3 className="text-xl font-bold mb-4 text-white">Categories</h3>
        <ul className="space-y-3">
          {[
            { name: "Digital Strategy", count: 12 },
            { name: "SEO", count: 8 },
            { name: "Social Media", count: 15 },
            { name: "Content Marketing", count: 7 },
            { name: "Email Marketing", count: 9 },
            { name: "Web Development", count: 11 }
          ].map((category) => (
            <li key={category.name}>
              <button 
                onClick={() => onCategoryClick(category.name)}
                className="flex justify-between items-center w-full text-gray-300 hover:text-primary transition-colors"
              >
                <span>{category.name}</span>
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-800 rounded-lg p-6 custom-shadow">
        <h3 className="text-xl font-bold mb-3 text-white">Subscribe to Our Newsletter</h3>
        <p className="text-gray-300 mb-4">Get the latest digital marketing insights delivered to your inbox.</p>
        <form onSubmit={handleSubscribe}>
          <Input 
            type="email" 
            placeholder="Your email address" 
            className="w-full bg-gray-700 text-white px-4 py-3 rounded-button mb-3 border-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button 
            type="submit"
            className="w-full bg-primary hover:bg-opacity-90"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};
