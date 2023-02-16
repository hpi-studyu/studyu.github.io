// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'StudyU',
  // Eine Plattform zum Erstellen und Durchführen von personalisierten N-of-1 Studien.
  tagline: 'N-Of-1 Trials Made Easy! StudyU is a platform for conducting user-centric N-of-1 trials.',
  url: 'https://hpi-studyu.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',

  // GitHub Pages Deployment
  projectName: 'docs',
  organizationName: 'hpi-studyu',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
      de: {
        htmlLang: 'de-DE',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
      ],
    ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    navbar: {
      title: '',
      logo: {
        alt: 'StudyU Logo',
        src: 'img/icon_wide.png',
      },
      items: [
      {
        to: '/',
        position: 'left',
        label: 'Home',
        activeBaseRegex: '\A(?!x)x',
      },
      {
        to: 'docs/overview',
        position: 'left',
        label: 'About',
        activeBaseRegex: 'docs/overview',
      },
      {
        type: 'dropdown',
        label: 'Learning Center',
        position: 'left',
        items: [
        {
         to: 'docs/basics/n-of-1-trials',
         label: 'The N-of-1 Concept',
         activeBaseRegex: 'docs/basics/n-of-1-trials',
       },
       {
         to: 'docs/basics/studyu-platform',
         label: 'StudyU Platform',
         activeBaseRegex: 'docs/basics/studyu-platform',
       },
            // ... more items
       ],
      },
      {
        to: 'docs/basics/studyu-platform',
        position: 'left',
        label: 'Publications',
        activeBaseRegex: 'docs/basics/studyu-platform',
      },
      {to: '/blog', label: 'Blog', position: 'left'},
      {
        label: 'StudyU App',
        href: 'https://app2.studyu.health',
        position: 'right',
      },
      {
        label: 'StudyU Designer',
        href: 'https://designer2.studyu.health',
        position: 'right',
      },
      {
        type: 'localeDropdown',
        position: 'right',
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
          to: '/docs/overview',
        },
        ],
      },
      {
        title: 'Community',
        items: [
        {
          label: 'StudyU @HPI',
          href: 'https://hpi.de/lippert/projects/studyu.html',
        },
        {
          label: 'Twitter',
          href: 'https://twitter.com/studyuhealth',
        },
        ],
      },
      {
        title: 'More',
        items: [
        {
          label: 'Blog',
          to: '/blog',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/studyu-health/studyu',
        },
        ],
      },
      {
        title: 'Legal',
        items: [
        {
          label: 'Privacy',
          to: 'https://#',
        },
        {
          label: 'Imprint',
          href: 'https://www13.hpi.uni-potsdam.de/fileadmin/user_upload/fachgebiete/lippert/studyu/StudyU_imprint_en.pdf',
        },
        ],
      },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} StudyU. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }),
};

module.exports = config;
