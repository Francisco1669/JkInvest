import React from 'react';
import Image from 'next/image';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-graphite text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo e descrição */}
          <div className="space-y-4">
            <div className="relative h-12 w-32">
              <Image
                src="/logos/logo jk.jpg"
                alt="JK Bank"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <p className="text-sm text-gray-400">
              Antecipação de recebíveis com rapidez, segurança e sem burocracia.
            </p>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Antecipação de Recebíveis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Securitização
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Capital de Giro
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:contato@jkbank.com.br" className="hover:text-gold transition-colors">
                  contato@jkbank.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:+551140634063" className="hover:text-gold transition-colors">
                  (11) 4063-4063
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/jkbankoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-gold transition-colors group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-graphite" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-gold transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-graphite" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {currentYear} JK Bank. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
