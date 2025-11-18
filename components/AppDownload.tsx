import React from 'react';
import { Section } from './Section';
import { Apple, Smartphone } from 'lucide-react';

export function AppDownload() {
  return (
    <Section background="white" id="app">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-primary-blue to-primary-blue/80 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center p-12 md:p-16">
            {/* Conteúdo */}
            <div className="space-y-6 text-white">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Baixe o app JK Bank
                </h2>
                <p className="text-xl text-blue-100">
                  Gerencie seus recebíveis, acompanhe antecipações e tenha controle total do seu fluxo de caixa na palma da mão.
                </p>
              </div>

              <div className="pt-4 space-y-4">
                <a
                  href="https://apps.apple.com/br/app/jk-bank/id6473048014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-900 transition-colors group w-full md:w-auto"
                >
                  <Apple className="w-8 h-8" />
                  <div className="text-left">
                    <div className="text-xs">Disponível na</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=br.com.jkbank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-900 transition-colors group w-full md:w-auto"
                >
                  <Smartphone className="w-8 h-8" />
                  <div className="text-left">
                    <div className="text-xs">Disponível no</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </a>
              </div>

              <div className="pt-6 flex items-center gap-6 text-sm text-blue-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold"></div>
                  <span>100% seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold"></div>
                  <span>Grátis</span>
                </div>
              </div>
            </div>

            {/* Mockup ilustrativo */}
            <div className="relative hidden md:block">
              <div className="relative w-full h-96">
                {/* Phone mockup abstrato */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-full bg-white/10 backdrop-blur-sm rounded-3xl border-4 border-white/20 p-4">
                    <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex flex-col items-center justify-center space-y-6 p-6">
                      <div className="w-20 h-20 bg-gold rounded-2xl"></div>
                      <div className="space-y-2 w-full">
                        <div className="h-4 bg-white/40 rounded w-3/4 mx-auto"></div>
                        <div className="h-4 bg-white/40 rounded w-1/2 mx-auto"></div>
                      </div>
                      <div className="space-y-3 w-full pt-4">
                        <div className="h-16 bg-white/30 rounded-xl"></div>
                        <div className="h-16 bg-white/20 rounded-xl"></div>
                        <div className="h-16 bg-white/20 rounded-xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
