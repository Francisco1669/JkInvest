# JK Bank - Landing Page

Landing page oficial do JK Bank desenvolvida com Next.js 14, TailwindCSS e TypeScript.

## Características

- **Design Minimalista e Corporativo**: Seguindo o estilo visual do @jkbankoficial no Instagram
- **Paleta de cores**: Azul forte (#0A2463), Preto Grafite (#1A1A1A), Branco e Dourado (#D4AF37)
- **Layout Responsivo**: Totalmente adaptado para mobile, tablet e desktop
- **SEO Otimizado**: Meta tags, Open Graph e Twitter Cards configurados
- **Performance**: Server Components e otimizações do Next.js 14

## Estrutura

```
├── app/
│   ├── layout.tsx       # Layout principal com metadata SEO
│   ├── page.tsx         # Página inicial
│   └── globals.css      # Estilos globais com Tailwind
├── components/
│   ├── Hero.tsx         # Seção hero com CTA principal
│   ├── HowItWorks.tsx   # Como funciona a antecipação
│   ├── EducationalSection.tsx  # Conteúdo educacional estilo Instagram
│   ├── SocialProof.tsx  # Prova social e estatísticas
│   ├── AppDownload.tsx  # Download do app (iOS/Android)
│   ├── FinalCTA.tsx     # Call-to-action final
│   ├── Footer.tsx       # Rodapé
│   ├── Button.tsx       # Componente de botão
│   ├── Card.tsx         # Componente de card
│   └── Section.tsx      # Wrapper de seção
└── tailwind.config.ts   # Configuração do Tailwind com cores da marca
```

## Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

## Tecnologias

- **Next.js 14**: Framework React com App Router
- **TypeScript**: Tipagem estática
- **TailwindCSS**: Estilização utilitária
- **Lucide React**: Ícones modernos
- **Inter Font**: Tipografia limpa e moderna

## Links do App

- **App Store**: https://apps.apple.com/br/app/jk-bank/id6473048014
- **Google Play**: https://play.google.com/store/apps/details?id=br.com.jkbank

## Seções da Landing Page

1. **Hero Section**: Apresentação com título impactante e CTAs principais
2. **Como Funciona**: Processo em 3 passos da antecipação
3. **Educação Financeira**: Cards informativos estilo feed do Instagram
4. **Prova Social**: Estatísticas e features
5. **Download do App**: Links para App Store e Google Play
6. **CTA Final**: Chamada para ação com criar conta
7. **Footer**: Links e informações de contato

## Estilo Visual

O design segue rigorosamente o estilo visual do perfil @jkbankoficial:

- Layout minimalista com bastante espaço em branco
- Blocos visualmente separados
- Tipografia grande e impactante
- Elementos geométricos abstratos
- Contraste forte entre cores
- Tom de voz: clareza, objetividade e autoridade

## Deploy

Recomendado para deploy na Vercel:

```bash
vercel
```

## Licença

Copyright © 2024 JK Bank. Todos os direitos reservados.
