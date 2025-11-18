import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Mail, Phone, MapPin, Clock, ArrowLeft, Send } from 'lucide-react';

export const metadata = {
  title: 'Contato - JK Bank',
  description: 'Entre em contato com a JK Bank. Estamos prontos para ajudar sua empresa a crescer.',
};

export default function ContatoPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'contato@jkbank.com.br',
      link: 'mailto:contato@jkbank.com.br',
    },
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 4063-4063',
      link: 'tel:+551140634063',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      info: '(11) 99999-9999',
      link: 'https://wa.me/5511999999999',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      info: 'Segunda a Sexta: 9h às 18h',
      link: '#',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32">
        {/* Header */}
        <Section background="white" className="py-16">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary-blue hover:text-primary-blue/80 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Voltar para página inicial
            </Link>

            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-graphite">
                Fale com nossos <span className="text-primary-blue">especialistas</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Estamos prontos para ajudar sua empresa a crescer. Entre em contato e descubra as melhores soluções de antecipação de recebíveis.
              </p>
            </div>
          </div>
        </Section>

        {/* Contact Info Cards */}
        <Section background="gray" className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} variant="elevated" className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-graphite">{item.title}</h3>
                        {item.link !== '#' ? (
                          <a
                            href={item.link}
                            className="text-gray-600 hover:text-primary-blue transition-colors block"
                          >
                            {item.info}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.info}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <Card variant="elevated" className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-graphite mb-2">
                    Envie sua mensagem
                  </h2>
                  <p className="text-gray-600">
                    Preencha o formulário abaixo e entraremos em contato em até 24 horas.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-graphite mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-graphite mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-graphite mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-graphite mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-graphite mb-2">
                      Assunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="antecipacao">Antecipação de Recebíveis</option>
                      <option value="securitizacao">Securitização</option>
                      <option value="capital">Capital de Giro</option>
                      <option value="parcerias">Parcerias</option>
                      <option value="suporte">Suporte</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-graphite mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Descreva como podemos ajudar..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="mt-1 w-4 h-4 text-primary-blue border-gray-300 rounded focus:ring-primary-blue"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      Concordo em compartilhar minhas informações e aceito a{' '}
                      <a href="#" className="text-primary-blue hover:underline">
                        Política de Privacidade
                      </a>{' '}
                      da JK Bank.
                    </label>
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full group">
                    <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Enviar mensagem
                  </Button>

                  <p className="text-center text-sm text-gray-500">
                    Respondemos em até 24 horas úteis
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="blue" className="py-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Prefere falar por telefone?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Nossa equipe está disponível de segunda a sexta, das 9h às 18h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="group"
                href="tel:+551140634063"
              >
                <Phone className="mr-2 w-5 h-5" />
                (11) 4063-4063
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-blue"
                href="https://wa.me/5511999999999"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
