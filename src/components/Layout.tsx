import React from 'react';
import { Menu, X, ShoppingBag, Leaf } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About Us' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans text-stone-900">
      {/* Announcement Bar */}
      <div className="bg-stone-900 text-stone-100 py-2 text-center text-sm tracking-wide">
        Get 15% OFF your first order with code: <span className="font-bold">GLOW15</span>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link 
              to="/"
              className="flex items-center gap-2 cursor-pointer"
            >
              <Leaf className="h-6 w-6 text-rose-400" />
              <span className="text-xl font-medium tracking-tight">GlowWithAmisha</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide transition-colors hover:text-rose-500 uppercase ${
                      isActive ? 'text-rose-500' : 'text-stone-600'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-stone-600 hover:text-rose-500 transition-colors">
                <ShoppingBag className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-stone-600 hover:text-stone-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-stone-50 border-b border-stone-200 absolute w-full left-0">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block w-full text-left px-3 py-4 text-base font-medium tracking-wide uppercase ${
                      isActive
                        ? 'text-rose-500 bg-stone-100'
                        : 'text-stone-600 hover:text-rose-500 hover:bg-stone-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-rose-400" />
              <span className="text-xl font-medium tracking-tight text-white">GlowWithAmisha</span>
            </div>
            <p className="text-stone-400 max-w-sm mb-6">
              Healthy skin is the foundation of confidence. Nourish, protect, and enhance your natural beauty with us.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">YouTube</a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-2">
              <li>support@glowwithamisha.com</li>
              <li>+91 98765 43210</li>
              <li>245 Beauty Avenue, New Delhi</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-800 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 GlowWithAmisha. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
