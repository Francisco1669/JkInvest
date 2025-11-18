import React from 'react';
import { Button } from './Button';
import { ArrowRight, Smartphone } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Elementos decorativos geométricos */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-graphite leading-tight">
                Antecipe seus recebíveis com{' '}
                <span className="text-primary-blue">rapidez</span> e{' '}
                <span className="text-primary-blue">segurança</span>.
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-xl">
                Dinheiro no mesmo dia, sem a burocracia tradicional dos bancos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="primary" className="group" href="/contato">
                Abrir conta agora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group" href="#app">
                <Smartphone className="mr-2 w-5 h-5" />
                Baixar o app
              </Button>
            </div>

            <div className="pt-8 flex items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold"></div>
                <span>Sem burocracia</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold"></div>
                <span>Aprovação rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold"></div>
                <span>100% digital</span>
              </div>
            </div>
          </div>

          {/* Ilustração abstrata */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              {/* Formas geométricas abstratas */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary-blue rounded-2xl transform rotate-12 opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold rounded-2xl transform -rotate-6 opacity-20"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-4 border-primary-blue rounded-2xl rotate-45"></div>

              {/* Card flutuante */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-2xl shadow-2xl w-72">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Antecipação</span>
                    <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-gold rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-graphite">R$ 150.000</div>
                    <div className="text-sm text-gray-500">Disponível em 24h</div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary-blue to-gold w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
