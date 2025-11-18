'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
    { name: 'Sobre', href: '#sobre' },
    { name: 'App', href: '#app' },
  ];

  return (
    <nav
      className={`fixed top-12 left-1/2 -translate-x-1/2 z-50 transition-all duration-300
        w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] md:w-auto lg:w-auto xl:w-auto
        ${isScrolled ? 'shadow-2xl' : 'shadow-xl'}`}
    >
      <div
        className={`backdrop-blur-md bg-white/95 border border-gray-200/50 rounded-2xl
          px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5
          transition-all duration-300 ${isScrolled ? 'bg-white/98' : ''}
          md:min-w-[700px] lg:min-w-[900px] xl:min-w-[1000px] max-w-[95vw]`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0 group relative">
            <Image
              src="/logos/logo jk.jpg"
              alt="JK Bank"
              width={120}
              height={40}
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 rounded-lg"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm xl:text-base font-medium text-graphite hover:text-primary-blue transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block shrink-0">
            <Button variant="primary" size="md" href="/contato">
              Abrir conta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 -mr-2 text-graphite hover:text-primary-blue transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-6 pt-6 border-t border-gray-200 space-y-3 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-graphite hover:text-primary-blue transition-colors py-2.5 px-2 rounded-lg hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Button variant="primary" size="md" className="w-full justify-center" href="/contato">
                Abrir conta
              </Button>
              <Button variant="outline" size="md" className="w-full justify-center" href="#app">
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
