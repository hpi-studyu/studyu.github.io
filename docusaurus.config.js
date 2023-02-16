// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'StudyU',
  // Eine Plattform zum Erstellen und Durchführen von personalisierten N-of-1 Studien.
  tagline: 'N-Of-1 Trials Made Easy! StudyU is a platform for conducting user-centric N-of-1 trials.',
  url: 'https://studyu.health',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hpi-studyu', // Usually your GitHub org/user name.
  projectName: 'studyu', // Usually your repo name.

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
          type: 'dropdown',
          label: 'Learning Center',
          position: 'left',
          items: [
            {
			  type: 'doc',
              docId: 'basics/n-of-1-trials',
              label: 'The N-of-1 Concept',
            },
            {
			  type: 'doc',
              docId: 'basics/studyu-platform',
              label: 'StudyU Platform',
            },
            // ... more items
          ],
        },
		{
		  type: 'doc',
		  docId: 'intro',
		  position: 'left',
		  label: 'Documentation',
		},
		{
		  type: 'doc',
		  docId: 'history',
		  position: 'left',
		  label: 'Publications',
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
                to: '/docs/intro',
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
