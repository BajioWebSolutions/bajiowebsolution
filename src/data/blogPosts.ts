import { BlogPost } from "@/types/blog";

export const blogPostsData: Record<string, BlogPost> = {
  "tacos-la-rosa-spotlight": {
    title: "Customer Spotlight: A New Digital Home for Tacos La Rosa in Willimantic",
    date: "April 20, 2025",
    category: "Customer Spotlight",
    author: "Rigoberto Lopez",
    tags: ["Customer Success", "Local Business", "Web Design", "Connecticut"],
    content: `
      <div class="mb-8">
        <img src="/src/assets/tacos-la-rosa-featured.jpg" alt="Delicious authentic tacos at Tacos La Rosa" class="w-full h-auto rounded-lg shadow-lg mb-6" />
      </div>

      <p>Here at Bajio Web Solutions, nothing makes us happier than helping a fellow local business succeed. We were recently honored to work with Tacos La Rosa, a fantastic and authentic Mexican restaurant located right in Willimantic, CT.</p>
      
      <h2>The Challenge</h2>
      
      <p>Tacos La Rosa serves incredible food, but their online presence didn't fully capture the quality of their restaurant. Customers had trouble finding their menu on mobile devices, and the overall design didn't reflect their vibrant brand.</p>
      
      <h2>Our Solution</h2>
      
      <p>We worked closely with them to design and launch a brand-new, professional website with a clear goal: make it easy for hungry customers to find them and their menu. We focused on:</p>
      
      <ul>
        <li><strong>A Mobile-First Design:</strong> Ensuring the website looks perfect on any phone.</li>
        <li><strong>An Easy-to-Navigate Menu:</strong> We created a dedicated, high-quality menu page that's simple to read and browse.</li>
        <li><strong>Highlighting What Makes Them Special:</strong> We used professional imagery and clear messaging to showcase their story and their delicious food.</li>
      </ul>
      
      <h2>The Result</h2>
      
      <p>Tacos La Rosa now has a powerful digital storefront that matches the quality of their restaurant. It's a website that not only attracts new customers but also serves their existing ones better.</p>
      
      <p>Is your local business ready for a website that works as hard as you do? <a href="/contact">Contact us today for a free consultation.</a></p>
    `
  }
};