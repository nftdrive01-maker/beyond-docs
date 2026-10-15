# スクリーンショット・図解の準備

**スクリーンショット21枚（JPG18枚・PNG3枚）とSVG図解2点を掲載済み**です。予定していた画像・図解の未掲載項目はありません。スクリーンショットは加工・再圧縮せず、各ガイドから拡大表示できる形で参照しています。追加のPNG3枚は、利用者の公開許可を確認しています。

## 掲載済み：情報通信インフラの図解

掲載先は `docs/concepts/independent-infrastructure.md` です。SVGはテキストと図形で構成し、外部画像・スクリプト・外部フォントには依存しません。

- I1：`static/img/concepts/infrastructure-layers.svg` — BNL・NFTDrive・BEYONDの役割とWEB5の構想
- I2：`static/img/concepts/infrastructure-nodes.svg` — 一部停止時の代替ノード・アーカイブからの取得経路

## 追加掲載済み：ノードの警告と自動修正

掲載先は `docs/guide/network-profile.md` の「ノードの自動修正」です。

| 画面 | ファイル（static/img/guide/配下） |
| --- | --- |
| Settingの警告マーク | `node-warning.png` |
| ノード接続エラーと自動修正ボタン | `node-auto-fix.png` |
| 自動修正の進捗（完了結果ではない） | `node-auto-fix-progress.png` |

## 撮影の共通ルール

- 公開用の検証環境とサンプルデータを使う。実際の秘密鍵、復旧フレーズ、パスワードは入力・撮影しない。
- アドレスは公開許可を得たサンプルのみ。個人名、メール、フォルダーパス、残高、未公開の組織構成は写さない。
- 画面共有・録画、パスワードマネージャーのポップアップ、ブラウザの個人用タブにも注意する。
- 画面を合成して実装済み機能に見せない。警告は実際に出た場合のみ撮影する。
- 各画像の撮影日、BEYONDのバージョン、OS、ブラウザを記録する。本文の名称・手順と再照合する。
- 下表の保存先は推奨名。実ファイルを用意し、機密情報を確認してからMarkdownの画像参照へ置き換える。

| ID | 画面・図 | 開き方・作成内容 | 推奨範囲 | 掲載先（docs/配下） | 推奨保存先（static/img/配下） | 個別の注意 |
| --- | --- | --- | --- | --- | --- | --- |
| Q1 | Web版初期画面 | 公式Web版のルートURLを新しいブラウザ環境で開く | URL、主要メニュー、中央画面 | guide/quickstart.md | guide/quickstart-initial.jpg | 個人のプロファイルを使わない |
| Q2 | Verified Browser起動 | 左メニューのVerified Browser | 選択中メニューと検索欄 | guide/quickstart.md | guide/quickstart-browser.jpg | 個人の検索履歴を写さない |
| Q3 | ネームスペース入力 | 中央検索欄へnftdrive.netを入力 | 検索欄と検索操作 | guide/quickstart.md | guide/quickstart-namespace.jpg | 検索実行前の状態 |
| Q4 | nftdrive.netの表示 | Enterで検索し復元を待つ | プレビュー、ネットワーク、アドレス、警告 | guide/quickstart.md | guide/quickstart-site.jpg | 撮影時の参照先を再確認。スクリプトは停止したまま |
| Q5 | 詳細・検証情報 | プレビュー上部の詳細情報ボタンを押す | 記録者、データアドレス、ネットワーク、ブロック高 | guide/quickstart.md | guide/quickstart-info.jpg | 表示だけで独立検証完了と注釈しない |
| I1 | 技術レイヤー図 | BNL→ネットワーク、NFTDrive→記録、BEYOND→利用、WEB5→構想を図示 | 役割と関係の全体 | concepts/independent-infrastructure.md | concepts/infrastructure-layers.svg | 架空のUIにしない |
| I2 | 分散配信図 | 別拠点のノード・アーカイブと代替取得経路を示す | 一部停止時の経路を含む全体 | concepts/independent-infrastructure.md | concepts/infrastructure-nodes.svg | 分散だけで可用性を保証しない |
| W1 | ダウンロードページ | ガイドの最新ダウンロード欄を開く | バージョン、ファイル名、ボタン | guide/installation.mdx | guide/windows-download.jpg | 撮影時に配布情報を更新確認 |
| W2 | インストーラー起動 | 公式Windows配布物を検証用PCで起動 | インストーラー本体 | guide/installation.mdx | guide/windows-installer.jpg | 個人のパスを写さない。実機確認が必要 |
| W3 | SmartScreen | W2で警告が実際に表示された場合 | 警告文、アプリ名、確認項目 | guide/installation.mdx | guide/windows-smartscreen.jpg | 警告を捏造しない。保護機能を無効化しない |
| W4 | Windows初期画面 | インストール完了後に起動 | ウィンドウとメニュー | guide/installation.mdx | guide/windows-first-launch.jpg | Web版の画面を代用しない |
| V1 | Vault初期設定 | AddressBookのファイル暗号化を開く | 設定開始画面 | guide/file-encryption.md | guide/vault-setup.jpg | 24語の生成・表示前に撮影 |
| V2 | Vault復旧テスト | ファイル暗号化の管理→復旧テスト | 空の入力欄と操作ボタン | guide/file-encryption.md | guide/vault-recovery-test.jpg | フレーズ入力前のみ撮影 |
| J1 | Jobs一覧 | 公開用サンプルをStudioから記録してJobsへ | 進捗、完了、失敗の状態 | guide/jobs.md | guide/jobs-list.jpg | 実記録は担当者の承認・試験環境で実施 |
| S1 | Studio設定 | サンプルファイルと記録アドレスを選ぶ | ネットワーク、保存モード、暗号化設定 | guide/write-data.md | guide/studio-settings.jpg | 鍵・パスワードの入力欄は撮影しない |
| S2 | Studio記録の完了 | サンプルジョブの完了結果を開く | 完了とVerified Browserへの導線 | guide/write-data.md | guide/studio-complete.jpg | 実際に完了した結果を使う |
| D1 | Verified Drive | Windows版で記録アドレス→Driveタブ | 同期状態と操作欄 | guide/verified-drive.md | guide/verified-drive.jpg | ローカルの個人名・パスを写さない |
| N1 | Designer | Designerのネットワーク設定を開く | 設計項目とネットワーク概要 | guide/network-design.md | guide/designer-network.jpg | 架空の組織名、公開可能な計画のみ |
| NS1 | ネームスペース登録 | NameSpaces→ネットワーク・公開用アカウント選択→新規登録 | 名前、ルート／サブ、期間 | guide/web5-site.md | guide/namespace-register.jpg | 撮影だけのために登録送信しない |
| NS2 | エイリアス設定 | NameSpacesで対象を選びエイリアス設定 | 名前、種類、参照先アドレス | guide/web5-site.md | guide/namespace-alias.jpg | 公開用アドレスを使う。撮影中に参照先変更を送信しない |
