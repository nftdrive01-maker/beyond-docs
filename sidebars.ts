import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// BEYOND Docs のサイドバー構成。
// カテゴリと並び順はここで明示的に管理します。

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: '概念',
      items: [
        'concepts/verifiable-data',
        'concepts/full-onchain',
        'concepts/trust-model',
        'concepts/guarantees',
      ],
    },
    {
      type: 'category',
      label: 'ガイド',
      items: [
        'guide/verify-data',
        'guide/write-data',
        'guide/network-profile',
      ],
    },
    {
      type: 'category',
      label: '高度なトピック',
      items: [
        'advanced/chain-finalization',
        'advanced/snapshot-proof',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: ['faq/faq'],
    },
    {
      type: 'category',
      label: 'リファレンス',
      items: [
        'reference/glossary',
        'reference/known-limitations',
      ],
    },
  ],
};

export default sidebars;
