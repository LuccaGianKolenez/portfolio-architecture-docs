import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Architecture Docs',
  tagline: 'ADRs • C4 • RFCs',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  // GitHub Pages (projeto)
  url: 'https://luccagiankolenez.github.io',
  baseUrl: '/portfolio-architecture-docs/',
  organizationName: 'LuccaGianKolenez',
  projectName: 'portfolio-architecture-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // i18n
  i18n: { defaultLocale: 'pt-BR', locales: ['pt-BR'] },

  // Habilita mermaid nos .md/.mdx (diagramas rápidos)
  themes: ['@docusaurus/theme-mermaid'],
  markdown: { mermaid: true },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/LuccaGianKolenez/portfolio-architecture-docs/edit/main/',
        },
        blog: false, // sem blog
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Architecture',
      logo: { alt: 'Architecture Logo', src: 'img/logo.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'Documentação' },
        { href: 'https://github.com/LuccaGianKolenez/portfolio-architecture-docs', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Conteúdo',
          items: [{ label: 'Documentação', to: '/docs' }],
        },
        {
          title: 'Mais',
          items: [{ label: 'GitHub', href: 'https://github.com/LuccaGianKolenez/portfolio-architecture-docs' }],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Lucca Gian Kolenez`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  } satisfies Preset.ThemeConfig,
};

export default config;
