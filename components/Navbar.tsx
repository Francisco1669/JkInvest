'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';
import { Button } from './Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Como funciona', href: '#como-funciona' },
    { name: 'Educação', href: '#educacao' },
    { name: 'Sobre nós', href: '#sobre' },
    { name: 'App', href: '#app' },
  ];

  return (
    <nav
      className={`fixed top-12 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] md:w-auto ${
        isScrolled ? 'shadow-xl' : 'shadow-lg'
      }`}
      style={{ maxWidth: '50%', minWidth: '320px' }}
    >
      <div
        className={`backdrop-blur-md bg-white/95 border border-gray-200/50 rounded-2xl px-6 py-4 transition-all duration-300 ${
          isScrolled ? 'bg-white/98' : ''
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold text-graphite group-hover:text-primary-blue transition-colors">
              JK <span className="text-gold">Bank</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-graphite hover:text-primary-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm">
              Abrir conta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-graphite hover:text-primary-blue transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-gray-200 space-y-4 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-graphite hover:text-primary-blue transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Button variant="primary" size="md" className="w-full">
                Abrir conta
              </Button>
              <Button variant="outline" size="md" className="w-full">
                <Smartphone className="mr-2 w-4 h-4" />
                Baixar app
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
