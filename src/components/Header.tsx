import React, { useState, useEffect } from 'react';
import { Download, Sun, Moon, Menu, X } from 'lucide-react';
import resumePdf from '../image/Sarankumar.pdf';

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
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full py-4 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-lg shadow-slate-900/5'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-cyan-500 via-emerald-500 to-rose-500 bg-clip-text text-transparent"
        >
          SARAN<span className="text-emerald-600 dark:text-emerald-400">DEV</span>
        </a>

        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={resumePdf}
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/30"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
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

        <div className="lg:hidden flex items-center">
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

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-950 shadow-lg py-4 px-4 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={resumePdf}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-rose-500 px-4 py-3 text-sm font-semibold text-white shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
