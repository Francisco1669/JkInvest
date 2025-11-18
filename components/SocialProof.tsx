import React from 'react';
import { Section } from './Section';
import { Shield, Zap, Award, TrendingUp } from 'lucide-react';

export function SocialProof() {
  const features = [
    {
      icon: Shield,
      text: 'Processo seguro e regulamentado',
    },
    {
      icon: Zap,
      text: 'Liberação em até 24 horas',
    },
    {
      icon: Award,
      text: 'Taxas competitivas do mercado',
    },
    {
      icon: TrendingUp,
      text: 'Sem comprometer seu limite bancário',
    },
  ];

  const cardBrands = [
    { name: 'Visa', color: 'bg-blue-600' },
    { name: 'Mastercard', color: 'bg-orange-600' },
    { name: 'Hipercard', color: 'bg-red-600' },
    { name: 'Elo', color: 'bg-yellow-500' },
    { name: 'Amex', color: 'bg-blue-500' },
    { name: 'Cabal', color: 'bg-purple-600' },
  ];

  return (
    <Section background="gray" id="sobre">
      <div className="text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-graphite">
            Confiança e credibilidade
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções usadas por empresas em todo o Brasil. Processo rápido, simples e seguro.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="space-y-2">
            <div className="text-5xl font-bold text-primary-blue">+1000</div>
            <div className="text-gray-600">Empresas atendidas</div>
          </div>
          <div className="space-y-2">
            <div className="text-5xl font-bold text-primary-blue">R$ 500M</div>
            <div className="text-gray-600">Antecipados</div>
          </div>
          <div className="space-y-2">
            <div className="text-5xl font-bold text-primary-blue">24h</div>
            <div className="text-gray-600">Liberação média</div>
          </div>
          <div className="space-y-2">
            <div className="text-5xl font-bold text-primary-blue">4.9/5</div>
            <div className="text-gray-600">Avaliação</div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-6 pt-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center space-y-4 p-6 group">
                <div className="w-16 h-16 bg-primary-blue rounded-xl flex items-center justify-center group-hover:bg-gold transition-colors shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-center text-gray-700 font-medium">{feature.text}</p>
              </div>
            );
          })}
        </div>

        {/* Card Brands */}
        <div className="pt-12">
          <p className="text-sm text-gray-500 mb-8 uppercase tracking-wider">
            Bandeiras aceitas nas máquinas JK Bank
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {cardBrands.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 min-w-[140px] group hover:scale-105"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className={`w-12 h-12 ${brand.color} rounded-lg flex items-center justify-center shadow-lg`}>
                    <div className="w-8 h-6 bg-white rounded opacity-90"></div>
                  </div>
                  <span className="text-sm font-semibold text-graphite group-hover:text-primary-blue transition-colors">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
