# Checklist de Botões da Landing Page

## Navbar (`components/Navbar.tsx`)

### Desktop
- [x] **"Abrir conta"** → `/contato` ✅

### Mobile (Menu hambúrguer)
- [x] **"Abrir conta"** → `/contato` ✅
- [x] **"Baixar app"** → `#app` (scroll para seção do app) ✅

---

## Hero Section (`components/Hero.tsx`)

- [x] **"Abrir conta agora"** → `/contato` ✅
- [x] **"Baixar o app"** → `#app` (scroll para seção do app) ✅

---

## Como Funciona (`components/HowItWorks.tsx`)

❌ Não possui botões

---

## Seção Educacional (`components/EducationalSection.tsx`)

❌ Não possui botões

---

## Prova Social (`components/SocialProof.tsx`)

❌ Não possui botões

---

## Download do App (`components/AppDownload.tsx`)

- [x] **"App Store"** → `https://apps.apple.com/br/app/jk-bank/id6473048014` ✅
- [x] **"Google Play"** → `https://play.google.com/store/apps/details?id=br.com.jkbank` ✅

---

## CTA Final (`components/FinalCTA.tsx`)

- [x] **"Criar conta em 2 minutos"** → `/contato` ✅
- [x] **"Falar com especialista"** → `/contato` ✅

---

## Footer (`components/Footer.tsx`)

### Links de Produtos
- [ ] **"Antecipação de Recebíveis"** → Sem href (precisa de página ou scroll)
- [ ] **"Securitização"** → Sem href (precisa de página ou scroll)
- [ ] **"Capital de Giro"** → Sem href (precisa de página ou scroll)

### Links de Empresa
- [ ] **"Sobre nós"** → Sem href (precisa de página)
- [ ] **"Blog"** → Sem href (precisa de página)
- [ ] **"Carreiras"** → Sem href (precisa de página)
- [ ] **"Contato"** → Deveria ir para `/contato`

### Links de Contato
- [x] **Email** → `mailto:contato@jkbank.com.br` ✅
- [x] **Telefone** → `tel:+551140634063` ✅

### Redes Sociais
- [x] **Instagram** → `https://instagram.com/jkbankoficial` ✅
- [ ] **LinkedIn** → Sem href real (placeholder `#`)

### Links Legais
- [ ] **"Política de Privacidade"** → Sem href (precisa de página)
- [ ] **"Termos de Uso"** → Sem href (precisa de página)

---

## Página de Contato (`app/contato/page.tsx`)

- [x] **"Voltar para página inicial"** → `/` ✅
- [x] **"Enviar mensagem"** → Submit do formulário ✅
- [x] **Telefone CTA** → `tel:+551140634063` ✅
- [x] **WhatsApp CTA** → `https://wa.me/5511999999999` ✅

---

## Resumo de Ações Necessárias

### ✅ Funcionando Corretamente
- Todos os CTAs principais levam para `/contato`
- Links de download do app funcionam
- Links de contato (email, telefone, Instagram) funcionam
- Página de contato com navegação completa

### ⚠️ Links que precisam ser atualizados (Footer)

1. **"Contato"** no footer → deve ir para `/contato`
2. Links de produtos → podem ir para seções específicas ou páginas
3. Links de empresa → precisam de páginas criadas ou serem removidos
4. **LinkedIn** → precisa do link real
5. Links legais → precisam de páginas criadas ou serem removidos

### 📝 Recomendações

- Atualizar link "Contato" do footer para `/contato`
- Adicionar link real do LinkedIn ou remover
- Considerar criar páginas para:
  - Sobre nós
  - Política de Privacidade
  - Termos de Uso
- Ou remover temporariamente os links que não levam a lugar nenhum
