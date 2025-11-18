import React from 'react';
import { Section } from './Section';

export function EducationalSection() {
  const topics = [
    {
      question: 'O que é securitização?',
      answer:
        'Securitização é o processo de transformar recebíveis em títulos negociáveis no mercado. Isso permite que sua empresa antecipe valores futuros com mais agilidade e melhores condições.',
      layout: 'white-black', // fundo branco com texto preto
    },
    {
      question: 'Como a taxa de juros impacta o caixa?',
      answer:
        'Taxas altas podem comprometer sua margem de lucro. Na JK Bank, trabalhamos com taxas competitivas e transparentes, para que você mantenha a saúde financeira do seu negócio.',
      layout: 'black-white', // fundo preto com texto branco
    },
    {
      question: 'Quando faz sentido antecipar?',
      answer:
        'Antecipar recebíveis é estratégico quando você precisa de capital de giro imediato para aproveitar oportunidades, quitar dívidas mais caras ou simplesmente manter o fluxo de caixa saudável.',
      layout: 'blue-white', // fundo azul com texto branco
    },
  ];

  return (
    <Section background="white" className="py-20" id="educacao">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-graphite mb-4">
          Entenda como funciona
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Conhecimento que empodera suas decisões financeiras.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {topics.map((topic, index) => {
          const layouts = {
            'white-black': 'bg-white text-graphite border-2 border-gray-200',
            'black-white': 'bg-graphite text-white',
            'blue-white': 'bg-primary-blue text-white',
          };

          return (
            <div
              key={index}
              className={`${layouts[topic.layout as keyof typeof layouts]} p-10 rounded-2xl min-h-[400px] flex flex-col justify-between group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className={`text-sm font-semibold tracking-wider uppercase ${
                    topic.layout === 'white-black' ? 'text-gold' : 'text-gold-light'
                  }`}>
                    Educação Financeira
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                    {topic.question}
                  </h3>
                </div>
                <div className="h-1 w-16 bg-gold rounded-full"></div>
              </div>

              <p className={`text-lg leading-relaxed ${
                topic.layout === 'white-black' ? 'text-gray-600' : 'text-gray-100'
              }`}>
                {topic.answer}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
