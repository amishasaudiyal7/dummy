import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function Contact() {
  return (
    <div className="py-16 sm:py-24 bg-stone-50">
      <Helmet>
        <title>Contact Us | GlowWithAmisha</title>
        <meta name="description" content="Get in touch with GlowWithAmisha. Reach out for questions, support, or skincare advice." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-serif text-stone-900 mb-6">Get In Touch</h1>
          <div className="w-16 h-0.5 bg-rose-200 mx-auto mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our products, need skincare advice, or just want to say hi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-serif text-stone-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-rose-100 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-1">Email</p>
                    <p className="text-stone-600">support@glowwithamisha.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-rose-100 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-stone-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-rose-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-1">Office Address</p>
                    <p className="text-stone-600">GlowWithAmisha Headquarters<br/>245 Beauty Avenue<br/>New Delhi, India 110001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-rose-100 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-1">Business Hours</p>
                    <p className="text-stone-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br/>
                      Saturday: 10:00 AM - 4:00 PM<br/>
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-stone-900 mb-6">Follow Us</h3>
              <div className="flex gap-4 text-stone-600">
                <a href="#" className="hover:text-rose-500 transition-colors">Instagram: @glowwithamisha</a>
                <span>|</span>
                <a href="#" className="hover:text-rose-500 transition-colors">Facebook</a>
                <span>|</span>
                <a href="#" className="hover:text-rose-500 transition-colors">YouTube</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-sm border border-stone-100">
            <h3 className="text-2xl font-serif text-stone-900 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-rose-300 focus:border-rose-300 transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-rose-300 focus:border-rose-300 transition-colors" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-rose-300 focus:border-rose-300 transition-colors" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">Subject</label>
                  <input type="text" id="subject" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-rose-300 focus:border-rose-300 transition-colors" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-rose-300 focus:border-rose-300 transition-colors"></textarea>
              </div>

              <button type="button" className="w-full bg-stone-900 text-white py-4 rounded-sm hover:bg-stone-800 transition-colors font-medium tracking-wide">
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-stone-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-12 h-0.5 bg-rose-200 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-stone-100 shadow-sm">
              <h4 className="text-lg font-medium text-stone-900 mb-2">Are your products suitable for sensitive skin?</h4>
              <p className="text-stone-600">Yes, our products are formulated to be gentle and suitable for most skin types.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-stone-100 shadow-sm">
              <h4 className="text-lg font-medium text-stone-900 mb-2">Do you test on animals?</h4>
              <p className="text-stone-600">No, GlowWithAmisha is a cruelty-free brand.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-stone-100 shadow-sm">
              <h4 className="text-lg font-medium text-stone-900 mb-2">How long does shipping take?</h4>
              <p className="text-stone-600">Typically 3–7 business days within India for all standard orders.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
