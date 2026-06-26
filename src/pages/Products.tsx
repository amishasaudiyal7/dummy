import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import vitaminCImg from '../assets/images/vitamin_c_serum_1781759729975.jpg';
import aloeMoisturizerImg from '../assets/images/aloe_moisturizer_1781759744290.jpg';
import foamingCleanserImg from '../assets/images/foaming_cleanser_1781759756213.jpg';
import repairCreamImg from '../assets/images/repair_cream_1781759770848.jpg';
import dailySunscreenImg from '../assets/images/daily_sunscreen_1781759784252.jpg';

export function Products() {
  const products = [
    {
      id: 1,
      name: "Radiance Vitamin C Serum",
      price: "₹899",
      benefits: ["Brightens complexion", "Reduces dark spots", "Improves skin texture", "Antioxidant protection"],
      ingredients: ["Vitamin C", "Hyaluronic Acid", "Ferulic Acid"],
      image: vitaminCImg
    },
    {
      id: 2,
      name: "Hydrating Aloe Moisturizer",
      price: "₹699",
      benefits: ["Deep hydration", "Soothes irritation", "Lightweight formula", "Non-greasy finish"],
      ingredients: ["Aloe Vera", "Glycerin", "Vitamin E"],
      image: aloeMoisturizerImg
    },
    {
      id: 3,
      name: "Gentle Foaming Cleanser",
      price: "₹499",
      benefits: ["Removes dirt and oil", "Maintains skin balance", "Suitable for daily use"],
      ingredients: ["Green Tea Extract", "Chamomile", "Coconut Cleansers"],
      image: foamingCleanserImg
    },
    {
      id: 4,
      name: "Overnight Repair Cream",
      price: "₹1,099",
      benefits: ["Repairs skin overnight", "Improves elasticity", "Reduces dryness"],
      ingredients: ["Retinol", "Peptides", "Shea Butter"],
      image: repairCreamImg
    },
    {
      id: 5,
      name: "SPF 50 Daily Sunscreen",
      price: "₹799",
      benefits: ["Broad-spectrum protection", "Lightweight texture", "No white cast"],
      ingredients: ["Zinc Oxide", "Niacinamide", "Vitamin E"],
      image: dailySunscreenImg
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-stone-50">
      <Helmet>
        <title>Our Products | GlowWithAmisha</title>
        <meta name="description" content="Discover GlowWithAmisha's range of skincare essentials designed to bring out your natural glow." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-serif text-stone-900 mb-6">Our Products</h1>
          <div className="w-16 h-0.5 bg-rose-200 mx-auto mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Discover our range of specifically formulated skincare essentials designed to bring out your natural glow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden flex flex-col sm:flex-row group transition-all hover:shadow-md">
              
              {/* Product Image Placeholder */}
              <div className="sm:w-2/5 md:w-1/2 bg-stone-100 flex items-center justify-center min-h-[300px] overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Product Details */}
              <div className="p-8 sm:w-3/5 md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl font-serif text-stone-900">{product.name}</h2>
                  </div>
                  <p className="text-xl font-medium text-rose-500 mb-6">{product.price}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">Key Benefits</h4>
                    <ul className="space-y-1">
                      {product.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-stone-600 flex items-start gap-2">
                          <span className="text-rose-400 mt-0.5">•</span> {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">Key Ingredients</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.ingredients.map((ingredient, i) => (
                        <span key={i} className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-sm">
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-stone-900 text-white py-3 rounded-sm hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 group/btn">
                  <ShoppingBag className="h-4 w-4" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
