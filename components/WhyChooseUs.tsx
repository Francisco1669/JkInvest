import React from 'react';
import { Section } from './Section';
import { CheckCircle2, Clock, Shield, Users, TrendingUp } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: CheckCircle2,
      title: 'Processo 100% digital e simples',
      description: 'Esqueça a papelada. Tudo acontece online, de forma rápida e descomplicada.',
      color: 'text-primary-blue',
      bgColor: 'bg-primary-blue/10',
    },
    {
      icon: Clock,
      title: 'Análise imediata',
      description: 'Nossa tecnologia analisa seus recebíveis em tempo real. Resposta em minutos.',
      color: 'text-gold',
      bgColor: 'bg-gold/10',
    },
    {
      icon: Shield,
      title: 'Liberação no mesmo dia',
      description: 'Dinheiro na sua conta em até 24 horas. Sem espera, sem burocracia.',
      color: 'text-primary-blue',
      bgColor: 'bg-primary-blue/10',
    },
    {
      icon: Users,
      title: 'Atendimento humano',
      description: 'Tecnologia de ponta com suporte humanizado. Nossa equipe está sempre disponível.',
      color: 'text-gold',
      bgColor: 'bg-gold/10',
    },
    {
      icon: TrendingUp,
      title: 'Transparência e taxas competitivas',
      description: 'Sem letras miúdas. Taxas claras e justas, sempre alinhadas com o mercado.',
      color: 'text-primary-blue',
      bgColor: 'bg-primary-blue/10',
    },
  ];

  return (
    <Section background="white">
      {/* Header com contraste forte */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <div className="inline-block mb-6">
          <div className="bg-graphite text-white px-6 py-3 rounded-lg">
            <span className="text-gold font-bold text-sm uppercase tracking-wider">Por que escolher</span>
          </div>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-graphite mb-6 leading-tight">
          Por que empresas <br className="hidden md:block" />
          <span className="text-primary-blue">escolhem a JK Bank?</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Mais de 1.000 empresas já confiam na nossa solução. Descubra o que nos torna diferentes.
        </p>
      </div>

      {/* Grid de razões */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-primary-blue hover:shadow-2xl transition-all duration-300"
            >
              {/* Número de ordem */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-graphite text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                {index + 1}
              </div>

              {/* Ícone */}
              <div className={`w-16 h-16 ${reason.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-8 h-8 ${reason.color}`} />
              </div>

              {/* Conteúdo */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-graphite group-hover:text-primary-blue transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Linha decorativa */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary-blue to-gold group-hover:w-full transition-all duration-500"></div>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <div className="bg-gradient-to-br from-graphite to-graphite-light rounded-3xl p-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Pronto para experimentar a diferença?
            </h3>
            <p className="text-xl text-gray-300">
              Junte-se às empresas que já transformaram seu fluxo de caixa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-graphite font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Falar com especialista
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-graphite transition-all duration-300"
              >
                Ver como funciona
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
