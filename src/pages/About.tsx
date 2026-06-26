import React from 'react';
import { Target, Heart, Leaf, ShieldCheck, Users, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function About() {
  return (
    <div className="py-16 sm:py-24">
      <Helmet>
        <title>About Us | GlowWithAmisha</title>
        <meta name="description" content="Learn more about GlowWithAmisha's mission, vision, and core values in providing high-quality skincare." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-serif text-stone-900 mb-6">Our Story</h1>
          <div className="w-16 h-0.5 bg-rose-200 mx-auto"></div>
        </div>

        {/* Story Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              GlowWithAmisha was founded with a simple mission: to make high-quality skincare accessible to everyone.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed text-justify">
              After years of researching skincare formulations and understanding different skin concerns, our founder, Amisha, created a collection of products that combine science-backed ingredients with gentle care.
            </p>
          </div>
          <div className="bg-stone-200 aspect-square rounded-full flex items-center justify-center p-8 relative">
            <div className="absolute inset-0 bg-rose-50 rounded-full scale-[0.85]"></div>
            <div className="relative text-center">
              <h3 className="font-serif text-3xl text-stone-800 mb-2">Meet Amisha</h3>
              <p className="text-stone-500 font-medium tracking-wider text-sm uppercase">Founder & Skincare Enthusiast</p>
              <p className="mt-4 text-stone-600 max-w-xs italic text-sm">
                "With a passion for skincare education and product development, I created GlowWithAmisha to empower individuals to feel confident in their skin."
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-stone-50 p-10 rounded-xl">
            <div className="flex items-center gap-4 mb-6">
              <Target className="h-8 w-8 text-rose-400" />
              <h2 className="text-2xl font-serif text-stone-900">Our Mission</h2>
            </div>
            <p className="text-stone-600 leading-relaxed">
              To help people achieve healthy, glowing skin through safe, effective, and affordable skincare solutions.
            </p>
          </div>
          <div className="bg-stone-50 p-10 rounded-xl">
            <div className="flex items-center gap-4 mb-6">
              <Heart className="h-8 w-8 text-rose-400" />
              <h2 className="text-2xl font-serif text-stone-900">Our Vision</h2>
            </div>
            <p className="text-stone-600 leading-relaxed">
              To become a trusted skincare brand known for transparency, innovation, and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-stone-900 mb-4">Our Core Values</h2>
            <div className="w-16 h-0.5 bg-rose-200 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white border border-stone-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="h-10 w-10 text-rose-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-stone-900 mb-3">Transparency</h3>
              <p className="text-stone-600 text-sm">We clearly communicate what goes into our products.</p>
            </div>
            
            <div className="text-center p-6 bg-white border border-stone-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Star className="h-10 w-10 text-rose-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-stone-900 mb-3">Quality</h3>
              <p className="text-stone-600 text-sm">Every product undergoes rigorous testing before reaching our customers.</p>
            </div>
            
            <div className="text-center p-6 bg-white border border-stone-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Leaf className="h-10 w-10 text-rose-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-stone-900 mb-3">Sustainability</h3>
              <p className="text-stone-600 text-sm">We strive to reduce our environmental impact through eco-friendly practices.</p>
            </div>
            
            <div className="text-center p-6 bg-white border border-stone-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-10 w-10 text-rose-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-stone-900 mb-3">Customer First</h3>
              <p className="text-stone-600 text-sm">Your skin goals are our priority.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
