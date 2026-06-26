import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function Blog() {
  const posts = [
    {
      id: 1,
      title: "5 Simple Steps for a Healthy Skincare Routine",
      date: "June 10, 2026",
      excerpt: "A consistent skincare routine doesn't have to be complicated. Learn how cleansing, moisturizing, and sun protection can improve your skin health.",
      category: "Skincare Tips"
    },
    {
      id: 2,
      title: "Understanding Your Skin Type",
      date: "June 5, 2026",
      excerpt: "Knowing whether your skin is oily, dry, combination, or sensitive helps you choose the right products and avoid irritation.",
      category: "Product Guides"
    },
    {
      id: 3,
      title: "Why Vitamin C Is a Skincare Superstar",
      date: "May 28, 2026",
      excerpt: "Vitamin C helps brighten skin, reduce pigmentation, and protect against environmental damage.",
      category: "Ingredient Spotlight"
    },
    {
      id: 4,
      title: "The Importance of Daily Sunscreen",
      date: "May 20, 2026",
      excerpt: "UV exposure can accelerate skin aging and cause pigmentation. Discover why sunscreen is a non-negotiable step in your routine.",
      category: "Healthy Lifestyle"
    }
  ];

  const categories = [
    "Skincare Tips",
    "Product Guides",
    "Beauty Trends",
    "Ingredient Spotlight",
    "Healthy Lifestyle"
  ];

  return (
    <div className="py-16 sm:py-24 bg-white">
      <Helmet>
        <title>Blog & Skincare Journal | GlowWithAmisha</title>
        <meta name="description" content="Explore GlowWithAmisha's latest articles, guides, and tips for maintaining a healthy and radiant complexion." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-serif text-stone-900 mb-6">Skincare Journal</h1>
          <div className="w-16 h-0.5 bg-rose-200 mx-auto mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Explore our latest articles, guides, and tips for maintaining a healthy and radiant complexion.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content - Blog Posts */}
          <div className="lg:w-2/3 space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="group border-b border-stone-200 pb-12 last:border-0">
                <div className="flex items-center gap-4 text-xs font-medium text-stone-500 uppercase tracking-widest mb-4">
                  <span className="text-rose-500">{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-stone-300"></span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-4 group-hover:text-rose-600 transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="text-sm font-medium text-stone-900 hover:text-rose-600 transition-colors flex items-center gap-2 uppercase tracking-wide">
                  Read Article <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-stone-50 border border-stone-100 rounded-lg p-8 sticky top-32">
              <h3 className="text-lg font-serif text-stone-900 mb-6">Categories</h3>
              <ul className="space-y-4">
                {categories.map((category, i) => (
                  <li key={i}>
                    <a href="#" className="text-stone-600 hover:text-rose-500 transition-colors flex items-center justify-between group">
                      <span>{category}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-12 pt-12 border-t border-stone-200">
                <h3 className="text-lg font-serif text-stone-900 mb-4">Newsletter</h3>
                <p className="text-stone-500 text-sm mb-4">Get the latest skincare tips and offers straight to your inbox.</p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-rose-300 focus:border-rose-300 transition-colors"
                  />
                  <button className="w-full bg-stone-900 text-white py-3 rounded-sm hover:bg-stone-800 transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
