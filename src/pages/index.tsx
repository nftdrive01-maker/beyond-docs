import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          記録を、後から検証できる形へ。
        </Heading>
        <p className="hero__subtitle">
          BEYONDは、ブロックチェーンに記録されたデータの根拠を、
          人間が確認できる形で扱うための検証ブラウザです。
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            BEYONDとは
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/concepts/verifiable-data">
            検証可能なデータとは
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/guide/verify-data">
            データを検証する
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/faq/">
            FAQ
          </Link>
        </div>
      </div>
    </header>
  );
}

type FeatureItem = {
  title: string;
  description: string;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'データ実体の確認',
    description:
      'ハッシュだけでなく、記録されたデータそのものが取得・復元できることを確認します。「保存されている」と「検証できる」を分けて扱います。',
    to: '/docs/guide/verify-data',
  },
  {
    title: 'ブロック・トランザクションの確認',
    description:
      '記録がどのトランザクションで作成され、どのブロックに含まれているかをたどり、記録の根拠を確認できます。',
    to: '/docs/guide/verify-data',
  },
  {
    title: 'Network Profile',
    description:
      'generationHashやノード情報によって「どのチェーンを、どのノード経由で見ているか」を明示し、検証の前提を確認可能にします。',
    to: '/docs/guide/network-profile',
  },
  {
    title: 'Chain Finalization / SnapshotProof',
    description:
      'チェーンの停止後まで含めて検証可能性を設計します。「永遠に動かす」ではなく「止まっても検証できる」という考え方です。',
    to: '/docs/advanced/chain-finalization',
  },
  {
    title: '保証範囲の明示',
    description:
      'BEYONDが保証すること / 保証しないことを明確に文書化しています。誇大な表現をせず、境界を示すことを信頼の基盤とします。',
    to: '/docs/concepts/guarantees',
  },
  {
    title: '長期的な再検証性',
    description:
      '稼働中だけでなく、停止後・移行後・再検証時まで含めて、記録を後から検証できる形で残すことを設計の中心に置いています。',
    to: '/docs/concepts/verifiable-data',
  },
];

function Feature({title, description, to}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <Link to={to} className={styles.featureCard}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </Link>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="BEYONDは、ブロックチェーンに記録されたデータの根拠を、人間が確認できる形で扱うための検証ブラウザです。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
