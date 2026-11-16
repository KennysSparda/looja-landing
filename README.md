# LOOJA — Landing Page

Landing page da LOOJA, aplicativo de controle de **validades**, **estoque** e
**promotores**. Construída em Next.js 14 (App Router) + TypeScript + Tailwind CSS,
componentizada e pronta para deploy na Vercel.

## Estrutura

```
app/
  layout.tsx        → layout raiz, carrega a fonte (Archivo) e metadados
  page.tsx          → monta a página a partir dos componentes
  globals.css       → tokens de cor, estilo da "etiqueta" (.tag-shape)
components/
  Navbar.tsx
  Hero.tsx
  Stats.tsx
  Features.tsx      → pilares: Validades, Estoque, Promotores
  HowItWorks.tsx
  Testimonial.tsx
  CTA.tsx
  Footer.tsx
  icons.tsx         → ícones SVG usados pelos componentes
tailwind.config.ts  → paleta laranja/branco e tokens de tipografia
```

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub/GitLab/Bitbucket.
2. Em https://vercel.com, clique em **Add New → Project** e importe o repositório.
3. A Vercel detecta o framework Next.js automaticamente — não é preciso configurar nada.
4. Clique em **Deploy**.

Ou, pela CLI, dentro da pasta do projeto:

```bash
npm install -g vercel
vercel
```

## Personalização

- **Cores**: edite `tailwind.config.ts` (chaves `orange`, `ink`, `bg-soft`, `line`).
- **Textos**: cada seção tem seu conteúdo em arrays/strings no topo do próprio
  arquivo do componente (ex.: `produtos` em `Hero.tsx`, `features` em `Features.tsx`).
- **CTAs**: os links `href="#"` em `CTA.tsx` e `Navbar.tsx` devem apontar para
  o cadastro/login reais do app.
