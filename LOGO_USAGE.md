# Uso do Logo JK Bank

Este documento descreve onde e como o logo da JK Bank está sendo utilizado na landing page.

## Localização do Logo

O logo está localizado em: `/public/logos/logo jk.jpg`

## Componentes que Usam o Logo

### 1. Navbar (`components/Navbar.tsx`)

**Localização:** Navbar flutuante no topo da página

**Implementação:**
```tsx
<Image
  src="/logos/logo jk.jpg"
  alt="JK Bank"
  width={120}
  height={40}
  className="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
  priority
/>
```

**Características:**
- Tamanho responsivo:
  - Mobile: h-8 (32px)
  - Tablet: h-10 (40px)
  - Desktop: h-12 (48px)
- Efeito hover: scale-105 (aumenta 5%)
- Priority loading (carrega com prioridade)
- Object-contain mantém proporção

### 2. Footer (`components/Footer.tsx`)

**Localização:** Rodapé da página, primeira coluna

**Implementação:**
```tsx
<div className="relative h-12 w-32">
  <Image
    src="/logos/logo jk.jpg"
    alt="JK Bank"
    fill
    className="object-contain object-left brightness-0 invert"
  />
</div>
```

**Características:**
- Tamanho fixo: 48px altura × 128px largura
- Filtros aplicados: brightness-0 invert (logo em branco para fundo escuro)
- Object-contain mantém proporção
- Object-left alinha à esquerda

## Otimizações

O Next.js automaticamente otimiza as imagens com:
- Formato WebP/AVIF quando suportado
- Lazy loading (exceto navbar com priority)
- Responsive images
- Cache automático

## Substituição do Logo

Para substituir o logo:

1. Substitua o arquivo em `/public/logos/logo jk.jpg`
2. Formatos aceitos: JPG, PNG, SVG, WebP
3. Tamanho recomendado: mínimo 240px de largura para qualidade retina
4. Fundo transparente (PNG/SVG) para melhor resultado

## Proporções Recomendadas

- Navbar: proporção 3:1 (largura:altura) funciona melhor
- Footer: proporção 8:3 é ideal

## Fallback

Caso o logo não esteja disponível, o Next.js mostrará:
- Alt text "JK Bank" durante carregamento
- Erro 404 se arquivo não existir (verificar console do browser)
