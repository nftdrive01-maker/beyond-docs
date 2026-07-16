# BEYOND Docs

BEYONDの公式ドキュメントサイトです。[Docusaurus](https://docusaurus.io/) で構築されています。

BEYONDは、ブロックチェーンに記録されたデータを、後から人間が検証できる形で扱うための検証ブラウザです。このリポジトリでは、BEYONDの概念・使い方・設計思想に関するドキュメントを管理します。

## 公開URL

https://nftdrive01-maker.github.io/beyond-docs/

## ローカル起動

Node.js 20以上が必要です。

```bash
npm install
npm start
```

`http://localhost:3000/beyond-docs/` で開発サーバーが起動します。ファイルの変更は自動で反映されます。

## ビルド

```bash
npm run build
```

`build/` ディレクトリに静的ファイルが生成されます。ローカルで確認する場合は `npm run serve` を実行してください。

## GitHub Pagesへの公開

`main` ブランチにpushすると、GitHub Actions（[.github/workflows/deploy.yml](.github/workflows/deploy.yml)）が自動でビルドとデプロイを行います。Actionsタブから `workflow_dispatch` で手動実行もできます。

### 初回に必要なGitHub側の設定

リポジトリの **Settings > Pages > Build and deployment > Source** を **GitHub Actions** に設定してください。この設定を行わないと、workflowのデプロイステップが失敗します。

## 独自ドメイン化する場合

将来的に `https://docs.beyond.nftdrive.net/` へ移行する場合は、[docusaurus.config.ts](docusaurus.config.ts) の以下2箇所を変更してください。

```ts
// 変更前（GitHub Pages プロジェクトページ）
url: 'https://nftdrive01-maker.github.io',
baseUrl: '/beyond-docs/',

// 変更後（独自ドメイン）
url: 'https://docs.beyond.nftdrive.net',
baseUrl: '/',
```

あわせて、GitHubの Settings > Pages でカスタムドメインを設定し、DNS（CNAMEレコード）を構成してください。

## ドキュメントを書く時の文体ルール

このリポジトリのドキュメントは、以下のルールで書きます。

- 日本語で書く。技術者にも非専門ユーザーにも伝わる文体にする。
- 誇大表現を避ける。「絶対」「永久」「完全保証」などの言葉は使わない。
- ただし思想は弱めすぎない。BEYONDは「検証可能性を扱うプロダクト」であることを一貫して表現する。
- 外部ストレージや他プロジェクトを批判しない。「目的が異なる」「設計思想が異なる」と説明する。
- 「保存」と「検証」を必ず分けて説明する。
- 「ブロックチェーンにも限界がある」ことを正直に書く。その上で、終了後も検証できる設計の重要性を説明する。
- BEYONDが保証すること / 保証しないことの境界を曖昧にしない。
