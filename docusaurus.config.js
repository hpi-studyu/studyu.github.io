// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'StudyU - Personalized Health Interventions',
  // Eine Plattform zum Erstellen und Durchführen von personalisierten N-of-1 Studien.
  tagline: 'StudyU is a user-friendly, open-source platform for publishing user-centric N-of-1 trials and enables participants to take part in them. Start your own study today with StudyU!',
  url: 'https://www.studyu.health',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/icon.png',

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
        blog: false, /*{
          // blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
      ],
    ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
  colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    metadata: [{name: 'keywords', content: 'digital health, studyu, medical, n-of-1 trials, health, digital, study, personalized health, medical trials, randomized controlled trial'}],
    navbar: {
      title: '',
      logo: {
        alt: 'StudyU Logo',
        src: 'img/logo.png',
      },
      items: [
      {
        to: '/',
        position: 'left',
        label: 'Home',
        activeBaseRegex: '\A(?!x)x',
      },
     {
        to: '/',
        position: 'left',
        label: 'Try it out',
        // activeBaseRegex: 'docs/overview',
        items: [
          {
            label: 'StudyU App',
            href: 'https://app.studyu.health',
          },
          {
            label: 'StudyU Designer',
            href: 'https://designer.studyu.health',
          },
        ],
        },
      {
        type: 'dropdown',
        label: 'Learning Center',
        position: 'left',
        items: [
        {
          to: 'docs/overview',
          label: 'About',
          activeBaseRegex: 'docs/overview',
        },
        {
         to: 'docs/basics/n-of-1-trials',
         label: 'The N-of-1 Concept',
         activeBaseRegex: 'docs/basics/n-of-1-trials',
       },
        {
         to: 'docs/app/overview',
         label: 'StudyU App',
         activeBaseRegex: 'docs/app/overview',
       },
        {
         to: 'docs/designer/overview',
         label: 'StudyU Designer',
         activeBaseRegex: 'docs/designer/overview',
       },
      {
         to: 'docs/basics/studyu-platform#publications',
         label: 'Publications',
         activeBaseRegex: 'docs/basics/studyu-platform',
       },
      {
         to: 'docs/deployment/selfhosting',
         label: 'Deployment',
         activeBaseRegex: 'docs/deployment/selfhosting',
       },
       ],
      },
      {
        to: 'docs/basics/studies',
        position: 'left',
        label: 'Collaborations',
        activeBaseRegex: 'docs/basics/studies',
      },
      {to: '/blog', label: 'Blog', position: 'left'},
      {to: '/contact', label: 'Contact', position: 'left'},
      /*{
        label: 'StudyU App',
        href: 'https://app.studyu.health',
        position: 'right',
      },
      {
        label: 'StudyU Designer',
        href: 'https://designer.studyu.health',
        position: 'right',
      },*/
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
          label: 'How to use StudyU',
          to: '/docs/overview',
        },
        ],
      },
      {
        title: 'Community',
        items: [
        {
          label: 'StudyU @ HPI',
          href: 'https://hpi.de/lippert/projects/studyu.html',
        },
        /*{
          label: 'Twitter',
          href: 'https://twitter.com/studyuhealth',
        },*/
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
          href: 'https://github.com/hpi-studyu/studyu',
        },
        ],
      },
      {
        title: 'Legal',
        items: [
        {
          label: 'Terms Of Use',
          to: '/tos',
        },
        {
          label: 'Privacy',
          to: '/privacy',
        },
        {
          label: 'Legal Notice',
          href: '/imprint',
        },
        ],
      },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} StudyU`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
     announcementBar: {
          id: 'support_us',
          content:
            'New StudyU and StudyMe trial launched in Ghana! <a rel="noopener noreferrer" href="/blog">Read more</a>',
          backgroundColor: '#ebedf0',
          textColor: '#091E42',
          isCloseable: true,
        },
  }),
   plugins: [
       './plugins/custom-blog-plugin',
      [
        '@docusaurus/plugin-ideal-image',
        {
          disableInDev: false, // By default, the plugin is inactive in development
        },
      ],
    ]/*,
   scripts: [
       {
         src:
           '/js/foo.js',
         async: false,
       },
   ]*/
};

module.exports = config;
