import React from 'react';
import { Section } from './Section';
import { Card } from './Card';
import { Upload, Search, Zap } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: 'Envie seus recebíveis',
      description: 'Faça upload dos seus documentos de forma simples e segura através da nossa plataforma.',
    },
    {
      icon: Search,
      title: 'Receba a análise imediata',
      description: 'Nossa tecnologia analisa seus recebíveis em tempo real e retorna uma proposta personalizada.',
    },
    {
      icon: Zap,
      title: 'Dinheiro liberado no mesmo dia',
      description: 'Após aprovação, o valor é depositado em sua conta em até 24 horas.',
    },
  ];

  return (
    <Section background="gray">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4">
          Como funciona a antecipação?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Um processo simples, rápido e totalmente digital para impulsionar o caixa da sua empresa.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Card key={index} variant="elevated" className="relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center shadow-lg group-hover:bg-gold transition-colors">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-graphite">{step.title}</h3>
                  <span className="text-4xl font-bold text-gold/20">{index + 1}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
