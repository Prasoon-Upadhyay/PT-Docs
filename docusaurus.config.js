// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PANDA Docs',
  tagline: 'Your New Workspace',
  favicon: 'img/favicon.ico',
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/introduction/getting-started', // Target path
            from: '/',   // Path to redirect from
          },
        ],
      },
    ],
  ],
  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Prasoon-Upadhyay', // Usually your GitHub org/user name.
  projectName: 'PT-Docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: ' ',
        logo: {
          alt: 'PANDA Logo',
          src: 'img/favicon.ico',
          href: "https://www.pandaterminal.com"
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: ' ',
            items: [
              {
                label: 'Terminal',
                to: 'https://www.app.pandaterminal.com ',
                logo: {
                  alt: 'PANDA Logo',
                  src: 'img/favicon.ico',
                  href: "https://www.pandaterminal.com"
                }
              },
              {
                label: 'Telegram',
                href: 'https://t.me/pandaterminal',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/pandaterminal',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@xChangingGood',
              },
            ],
          },
        ],
        logo: {
          alt: 'PANDA Terminal',
          src: 'img/panda-footer-logo-light.png',
          href: 'https://www.pandaterminal.com',
        },
        copyright: `© 2023 Panda Terminal, All Rights reserved`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
