import React from 'react';
import { Section } from './Section';
import { Check, X, ArrowRight } from 'lucide-react';

export function Comparison() {
  const comparisonPoints = [
    {
      feature: 'Gera dívida no balanço?',
      securitizacao: { value: false, text: 'Não gera dívida' },
      emprestimo: { value: true, text: 'Gera dívida' },
    },
    {
      feature: 'Velocidade de aprovação',
      securitizacao: { value: true, text: 'Análise imediata' },
      emprestimo: { value: false, text: 'Dias ou semanas' },
    },
    {
      feature: 'Garantia necessária',
      securitizacao: { value: true, text: 'Seus recebíveis' },
      emprestimo: { value: false, text: 'Bens ou avalistas' },
    },
    {
      feature: 'Burocracia',
      securitizacao: { value: true, text: 'Mínima' },
      emprestimo: { value: false, text: 'Alta' },
    },
    {
      feature: 'Liberação do valor',
      securitizacao: { value: true, text: 'Até 24 horas' },
      emprestimo: { value: false, text: 'Vários dias' },
    },
  ];

  return (
    <Section background="white" className="py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block mb-6">
          <span className="text-sm font-semibold tracking-wider uppercase text-gold bg-gold/10 px-6 py-2 rounded-lg">
            Comparativo
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-graphite mb-4 leading-tight">
          Securitização vs. Empréstimo
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Entenda por que a securitização é a melhor escolha para empresas que buscam agilidade e menos burocracia.
        </p>
      </div>

      {/* Comparison Grid - Estilo Feed Instagram */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          {/* Lado Esquerdo - Securitização (Branco) */}
          <div className="bg-white p-12 lg:p-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="w-16 h-1 bg-primary-blue rounded-full"></div>
                <h3 className="text-4xl md:text-5xl font-bold text-graphite">
                  Securitização
                </h3>
                <p className="text-xl text-gray-600">
                  A solução moderna para empresas ágeis
                </p>
              </div>

              <div className="space-y-6 pt-6">
                {comparisonPoints.map((point, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      {point.feature}
                    </div>
                    <div className="flex items-start gap-3">
                      {point.securitizacao.value ? (
                        <div className="w-8 h-8 bg-primary-blue rounded-lg flex items-center justify-center shrink-0">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center shrink-0">
                          <X className="w-5 h-5 text-gray-400" />
                        </div>
                      )}
                      <div className="text-lg font-semibold text-graphite pt-1">
                        {point.securitizacao.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <a
                  href="/contato"
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-blue/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Escolher securitização
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Lado Direito - Empréstimo (Preto) */}
          <div className="bg-graphite p-12 lg:p-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="w-16 h-1 bg-gold rounded-full"></div>
                <h3 className="text-4xl md:text-5xl font-bold text-white">
                  Empréstimo <br />Tradicional
                </h3>
                <p className="text-xl text-gray-300">
                  O método convencional dos bancos
                </p>
              </div>

              <div className="space-y-6 pt-6">
                {comparisonPoints.map((point, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      {point.feature}
                    </div>
                    <div className="flex items-start gap-3">
                      {point.emprestimo.value ? (
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                          <Check className="w-5 h-5 text-gray-400" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                          <X className="w-5 h-5 text-gray-500" />
                        </div>
                      )}
                      <div className="text-lg font-semibold text-gray-200 pt-1">
                        {point.emprestimo.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <div className="w-full px-8 py-4 bg-white/5 border-2 border-white/20 text-white/60 font-semibold rounded-lg text-center">
                  Processo tradicional
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="text-primary-blue font-bold text-lg">
              A escolha é clara
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-graphite">
              Antecipe seus recebíveis sem comprometer seu balanço
            </h3>
            <p className="text-gray-600 text-lg">
              Com a securitização da JK Bank, você transforma seus recebíveis em capital de giro imediato,
              sem gerar dívida e com processo 100% digital.
            </p>
            <div className="pt-4">
              <a
                href="#educacao"
                className="inline-flex items-center text-primary-blue font-semibold hover:text-primary-blue/80 transition-colors group"
              >
                Saiba mais sobre securitização
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
