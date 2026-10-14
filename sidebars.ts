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
        'concepts/web5',
        'concepts/why-verification-matters',
        'concepts/verifiable-data',
        'concepts/full-onchain',
        'concepts/nftdrive-storage',
        'concepts/trust-model',
        'concepts/guarantees',
      ],
    },
    {
      type: 'category',
      label: 'ガイド',
      items: [
        'guide/installation',
        'guide/editions',
        'guide/verify-data',
        'guide/write-data',
        'guide/web5-site',
        'guide/network-profile',
        'guide/file-encryption',
        'guide/verified-drive',
      ],
    },
    {
      type: 'category',
      label: '高度なトピック',
      items: [
        'advanced/beacon',
        'advanced/dao-operation',
        'advanced/chain-finalization',
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
        'reference/record-size-limits',
        'reference/nftdrive-record-format',
        'reference/development-and-licensing',
        'reference/known-limitations',
      ],
    },
  ],
};

export default sidebars;
