import React from 'react';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import vitaminCImg from '../assets/images/vitamin_c_serum_1781759729975.jpg';
import aloeMoisturizerImg from '../assets/images/aloe_moisturizer_1781759744290.jpg';
import foamingCleanserImg from '../assets/images/foaming_cleanser_1781759756213.jpg';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Glow With Amisha | Skincare Tips | Beauty Routine</title>
        <meta name="description" content="GlowWithAmisha offers dermatologically tested, natural skincare products to nourish, protect, and enhance your skin." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-stone-200 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-400 via-stone-200 to-stone-200"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-rose-600 font-medium tracking-wider uppercase text-sm mb-4 block">Welcome to GlowWithAmisha</span>
          <h1 className="text-4xl sm:text-6xl font-serif text-stone-900 mb-6 tracking-tight">Reveal Your Natural Glow</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            At GlowWithAmisha, we believe healthy skin is the foundation of confidence. Our skincare products are carefully crafted using skin-loving ingredients that nourish, protect, and enhance your natural beauty.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => navigate('/products')}
              className="bg-stone-900 text-white px-8 py-4 rounded-sm hover:bg-stone-800 transition-colors flex items-center gap-2"
            >
              Shop Collection <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-stone-900 mb-4">Why Choose Us?</h2>
            <div className="w-16 h-0.5 bg-rose-200 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
             {[
               "Dermatologically tested formulas",
               "Natural and cruelty-free ingredients",
               "Suitable for all skin types",
               "Sustainable packaging",
               "Trusted by thousands of happy customers"
             ].map((feature, i) => (
               <div key={i} className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-lg">
                 <CheckCircle2 className="h-8 w-8 text-rose-400 mb-4" />
                 <p className="text-sm text-stone-800 font-medium">{feature}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-stone-900 mb-4">Our Best Sellers</h2>
            <div className="w-16 h-0.5 bg-rose-200 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Product 1 */}
             <div className="bg-white p-6 rounded-lg shadow-sm group">
               <div className="aspect-square bg-stone-100 mb-6 rounded-md overflow-hidden relative">
                 <img src={vitaminCImg} alt="Radiance Vitamin C Serum" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 className="text-lg font-medium text-stone-900 mb-2">Radiance Vitamin C Serum</h3>
               <p className="text-stone-500 text-sm mb-4">Brightens dull skin and reduces the appearance of dark spots.</p>
               <button onClick={() => navigate('/products')} className="text-rose-600 font-medium text-sm hover:text-rose-700">View Product →</button>
             </div>
             
             {/* Product 2 */}
             <div className="bg-white p-6 rounded-lg shadow-sm group">
               <div className="aspect-square bg-stone-100 mb-6 rounded-md overflow-hidden relative">
                 <img src={aloeMoisturizerImg} alt="Hydrating Aloe Moisturizer" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 className="text-lg font-medium text-stone-900 mb-2">Hydrating Aloe Moisturizer</h3>
               <p className="text-stone-500 text-sm mb-4">Provides long-lasting hydration while soothing sensitive skin.</p>
               <button onClick={() => navigate('/products')} className="text-rose-600 font-medium text-sm hover:text-rose-700">View Product →</button>
             </div>

             {/* Product 3 */}
             <div className="bg-white p-6 rounded-lg shadow-sm group">
               <div className="aspect-square bg-stone-100 mb-6 rounded-md overflow-hidden relative">
                 <img src={foamingCleanserImg} alt="Gentle Foaming Cleanser" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
               <h3 className="text-lg font-medium text-stone-900 mb-2">Gentle Foaming Cleanser</h3>
               <p className="text-stone-500 text-sm mb-4">Removes impurities without stripping the skin's natural moisture.</p>
               <button onClick={() => navigate('/products')} className="text-rose-600 font-medium text-sm hover:text-rose-700">View Product →</button>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-stone-900 mb-12">Customer Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-left">
              <div className="flex text-amber-400 mb-4">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <p className="text-stone-700 italic mb-6">"My skin has never looked better! The Vitamin C Serum transformed my skincare routine."</p>
              <p className="font-medium text-stone-900">— Priya S.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-left">
              <div className="flex text-amber-400 mb-4">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <p className="text-stone-700 italic mb-6">"Lightweight, effective, and affordable. Highly recommended!"</p>
              <p className="font-medium text-stone-900">— Sarah M.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
