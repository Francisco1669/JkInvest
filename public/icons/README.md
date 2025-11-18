# Icons

Esta pasta contém ícones customizados e assets de ícones.

## Arquivos esperados:

- `favicon.ico` - Favicon padrão (16x16, 32x32, 48x48)
- `favicon.svg` - Favicon em SVG (escalável)
- `apple-touch-icon.png` - Ícone para iOS (180x180)
- `android-chrome-192x192.png` - Ícone para Android
- `android-chrome-512x512.png` - Ícone para Android

## Geração de favicons:

Use ferramentas como:
- https://realfavicongenerator.net/
- https://favicon.io/

## Uso automático:

O Next.js detecta automaticamente favicons na pasta `/public` ou `/app`:
- Coloque `favicon.ico` na raiz de `/app` ou `/public`
- Ou use metadata API no layout.tsx

```tsx
export const metadata = {
  icons: {
    icon: '/icons/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
  },
}
```
