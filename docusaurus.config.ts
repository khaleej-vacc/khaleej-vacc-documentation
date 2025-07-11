import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Khaleej vACC',
  tagline: 'Official documentation site of the Khaleej vACC.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.khaleejvacc.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'khaleej-vacc-documentation', // Usually your repo name.

  onBrokenLinks: 'ignore',
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
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog:false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Khaleej vACC CTD',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
      {
          type: "docSidebar",
          sidebarId: "sopsSidebar",
          position: "left",
          label: "SOPs",
      },
      {
          type: "docSidebar",
          sidebarId: "refSidebar",
          position: "left",
          label: "Reference Documents",
      },
      {
          type: "docSidebar",
          sidebarId: "vmatsSidebar",
          position: "left",
          label: "Training vMATS",
      },
      {
        type: "docSidebar",
        sidebarId: "PtdSidebar",
        position: "left",
        label: "Pilot Briefing",
    },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: 'https://docs.khaleejvacc.net/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://community.vatsim.net/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/khaleejvacc/',
            },
                        {
              label: 'TikTok',
              href: 'https://www.tiktok.com/@khaleejvacc',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/khaleej-vacc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Khaleej Subdivision - VATMENA.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
