import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <Section background="graphite">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Pronto para impulsionar o caixa da sua empresa?
          </h2>
          <p className="text-xl text-gray-300">
            Abra sua conta e tenha acesso às melhores condições de antecipação do mercado.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" variant="secondary" className="group">
            Criar conta em 2 minutos
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-graphite">
            Falar com especialista
          </Button>
        </div>

        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-gold mb-2">2 min</div>
            <div className="text-gray-300">Para abrir sua conta</div>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-gold mb-2">24h</div>
            <div className="text-gray-300">Para receber o dinheiro</div>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-gold mb-2">0%</div>
            <div className="text-gray-300">De burocracia</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
