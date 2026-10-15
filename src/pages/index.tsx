import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          記録を、後から検証できる形へ。
        </Heading>
        <p className="hero__subtitle">
          BEYONDは、ブロックチェーンへの記録と、データ実体・トランザクション・
          ブロック・ネットワークの関係を確認するためのアプリケーションです。
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/guide/quickstart">
            5分で体験するBEYOND
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="https://beyond.nftdrive.net/">
            Web版を開く
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/guide/installation">
            Windows版をインストール
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
        <p className="margin-top--md">
          Webホスティングやクラウドへの預け入れではなく、チェーン上の記録を自分で取得・検証する環境です。
          <Link to="/docs/intro">BEYONDとは</Link>
        </p>
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
    title: 'Verified Browser',
    description:
      'データ実体を取得・復元し、トランザクション、ブロック、ネットワーク、取得元との関係を確認します。',
    to: '/docs/guide/verify-data',
  },
  {
    title: 'Studioと保存モード',
    description:
      'ファイルやコンテンツを記録し、Base64／バイナリ保存、暗号化、手数料、完了後の読み戻しを確認します。',
    to: '/docs/guide/write-data',
  },
  {
    title: 'ファイル暗号化',
    description:
      'デスクトップ版でファイル本体を暗号化し、復旧フレーズ、ロック、共有パスワードを管理します。',
    to: '/docs/guide/file-encryption',
  },
  {
    title: 'Verified Drive',
    description:
      'Windowsへ記録を同期し、初回取得時の基準値を使ってローカルファイルの変更や欠落を検知します。',
    to: '/docs/guide/verified-drive',
  },
  {
    title: 'BlockchainsとBeacon',
    description:
      '対象ネットワークとノードを管理し、ノードが署名したBeaconと別チェーン上のAnchorを確認します。',
    to: '/docs/advanced/beacon',
  },
  {
    title: '保証範囲の明示',
    description:
      '確認できる範囲と、内容の真実性やネットワークの永続性など保証しない範囲を明確にしています。',
    to: '/docs/concepts/guarantees',
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
        <Heading as="h2">目的から始める</Heading>
        <ul>
          <li><Link to="/docs/guide/verify-data">情報を閲覧・検証する</Link></li>
          <li><Link to="/docs/guide/write-data">自分のデータを記録する</Link></li>
          <li><Link to="/docs/guide/web5-site">名前を付ける・フルオンチェーンサイトを公開する</Link></li>
          <li><Link to="/docs/guide/network-design">ネットワークを設計・運用する</Link></li>
          <li><Link to="/docs/concepts/verifiable-data">検証可能なデータの考え方を知る</Link></li>
        </ul>
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
      description="BEYONDは、ブロックチェーンへの記録と、データ実体・トランザクション・ブロック・ネットワークの関係を確認するためのアプリケーションです。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
