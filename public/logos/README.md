# Logos

Esta pasta contém os logos da JK Bank e marcas relacionadas.

## Arquivos esperados:

- `jk-bank-logo.svg` ou `jk-bank-logo.png` - Logo principal da JK Bank
- `jk-bank-logo-white.svg` ou `jk-bank-logo-white.png` - Logo em branco para fundos escuros
- `jk-bank-icon.svg` ou `jk-bank-icon.png` - Ícone/símbolo da marca (sem texto)

## Formatos recomendados:

- **SVG** - Preferível para logos, escala perfeitamente
- **PNG** - Com fundo transparente, alta resolução (2x ou 3x para retina)

## Uso no código:

```tsx
import Image from 'next/image';

<Image
  src="/logos/jk-bank-logo.svg"
  alt="JK Bank"
  width={200}
  height={50}
/>
```
