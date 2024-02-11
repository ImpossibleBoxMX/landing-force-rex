import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Impossible Box de México | Transformemos juntos',
  tagline: 'Descubre cómo la tecnología puede cambiar la vida de las comunidades',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.impossiblebox.com.mx',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
  [
    'classic',
    {
      // Elimina o comenta todo el bloque 'docs', incluyendo las llaves
      // docs: {
      //   sidebarPath: './sidebars.ts',
      //   editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      // },

      blog: {
        showReadingTime: true,
        editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },
      theme: {
        customCss: './src/css/custom.css',
      },
    } as Preset.Options,
  ],
],


  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
  //title: 'My Site',
  logo: {
    alt: 'My Site Logo',
    src: 'img/path13.png',
  },
  
  items: [
    //{type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Tutorial',},
    {to: '/blog', label: 'Blog', position: 'left'},
    // Aquí se ha eliminado el enlace a GitHub
  ],
},

    footer: {
      style: 'dark',
      links: [
        //{
         // title: 'Docs',
       //   items: [
            {
              // label: 'Tutorial',
              //to: '/docs/intro',
           // },
        //  ],
       // },
        // {
          title: 'Sobre Impossible Box de México',
          items: [
            {
              label: 'Manfiesto de fundación',
              href: '/blog/manifiesto-de-fundacion',
            },
            {
              label: 'Nuestros valores',
              href: '/blog/nostros',
            },
            {
              label: 'Impossible Box Bulletin',
              href: 'https://impossiblebox.substack.com/',
            },
          ],
        },
        {
          title: 'Proyectos',
          items: [
            {
              label: 'Estantería Digital',
              to: 'https://estanteria.impossiblebox.com.mx/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Este sito es una versión beta. Copyright © ${new Date().getFullYear()} Impossible Box de México S.A.S. de C.V. Todos los derechos reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
     colorMode: {
    defaultMode: 'dark', // Establece el modo oscuro como predeterminado
    disableSwitch: true, // Deshabilita el interruptor de cambio de modo
    respectPrefersColorScheme: false, // Ignora la preferencia de esquema de color del sistema del usuario
  },
  } satisfies Preset.ThemeConfig,
};

export default config;
