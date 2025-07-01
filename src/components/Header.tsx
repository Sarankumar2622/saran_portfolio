import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full py-4 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          TECH<span className="text-blue-600 dark:text-blue-400">FOLIO</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors mr-2"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg py-4 px-4 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;