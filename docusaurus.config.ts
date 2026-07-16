import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'BEYOND Docs',
  tagline: '記録を、後から検証できる形へ。',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // GitHub Pages のプロジェクトページとして公開する設定。
  // 将来的に独自ドメイン（https://docs.beyond.nftdrive.net/）へ移行する場合は、
  // 以下のように変更してください。
  //   url: 'https://docs.beyond.nftdrive.net',
  //   baseUrl: '/',
  url: 'https://nftdrive01-maker.github.io',
  baseUrl: '/beyond-docs/',

  // GitHub Pages deployment config.
  organizationName: 'nftdrive01-maker',
  projectName: 'beyond-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/nftdrive01-maker/beyond-docs/tree/main/',
        },
        // 初期段階ではブログは使用しない
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // SNSシェア時に表示される画像。専用のソーシャルカード画像ができたら差し替えてください。
    image: 'img/logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'BEYOND Docs',
      logo: {
        alt: 'BEYOND Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/faq/',
          label: 'FAQ',
          position: 'left',
        },
        {
          href: 'https://github.com/nftdrive01-maker/beyond-docs',
          label: 'GitHub',
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
              label: 'BEYONDとは',
              to: '/docs/intro',
            },
            {
              label: '検証可能なデータとは',
              to: '/docs/concepts/verifiable-data',
            },
            {
              label: 'FAQ',
              to: '/docs/faq/',
            },
          ],
        },
        {
          title: 'BEYOND / NFTDrive',
          items: [
            {
              label: 'NFTDrive',
              href: 'https://nftdrive.net/',
            },
            {
              label: 'BEYOND',
              href: 'https://nftdrive01-maker.github.io/beyond-docs/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/nftdrive01-maker/beyond-docs',
            },
            {
              label: '既知の制限',
              to: '/docs/reference/known-limitations',
            },
            // Legal 系リンクの枠。公開時に利用規約・プライバシーポリシー等の
            // URL が確定したらここへ追加してください。
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NFTDrive / BEYOND. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
