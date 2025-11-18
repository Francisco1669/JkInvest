# Images

Esta pasta contém imagens gerais para a landing page.

## Subpastas sugeridas:

- `hero/` - Imagens para a seção hero
- `illustrations/` - Ilustrações e elementos visuais
- `backgrounds/` - Imagens de fundo
- `team/` - Fotos da equipe (se necessário)
- `products/` - Imagens de produtos/serviços

## Formatos recomendados:

- **WebP** - Melhor compressão e qualidade
- **PNG** - Para imagens com transparência
- **JPG** - Para fotos

## Otimização:

- Use ferramentas como TinyPNG ou Squoosh para comprimir
- Exporte em múltiplas resoluções para diferentes dispositivos
- Next.js otimiza automaticamente com o componente Image

## Uso no código:

```tsx
import Image from 'next/image';

<Image
  src="/images/hero/banner.webp"
  alt="Descrição"
  width={1200}
  height={600}
  priority // Para imagens above-the-fold
/>
```
