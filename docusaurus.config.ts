import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Oblicua RFID',
  tagline: 'Manual de uso — App móvil y plataforma web de inventarios RFID',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://docs.oblicua.co',
  baseUrl: '/',

  organizationName: 'oblicua',
  projectName: 'oblicua-rfid-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/icon-mark.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Oblicua RFID',
      logo: {
        alt: 'Oblicua RFID',
        src: 'img/icon-mark.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Manual de uso',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {label: '¿Qué es Oblicua RFID?', to: '/docs/intro'},
            {label: 'Flujo de trabajo', to: '/docs/flujo-de-trabajo'},
            {label: 'App móvil', to: '/docs/app-movil/inicio-de-sesion'},
            {label: 'Plataforma web', to: '/docs/plataforma-web/inicio-de-sesion'},
          ],
        },
      ],
      copyright: `Oblicua · Manual de uso interno — ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
