---
title: 作業進捗
---

# 作業進捗

最終更新日: 2026年7月27日

## 現在の状態

`draft` ブランチで、Conceptsカテゴリの横断レビューと編集を完了しています。

- 完了コミット: `cbacc15 docs: Conceptsの検証モデルを整理`
- リモート反映先: `origin/draft`
- 作業中断時点で、ドキュメントに未コミットの編集はありません

## 完了した内容

- Concepts全ページを「保存 → 取得 → 照合 → 検証」のモデルに統一
- 「検証可能なデータ」の定義と、データ実体からネットワークまでの検証経路を整理
- ハッシュのみ、外部ストレージ、フルオンチェーンの各方式を比較
- フルオンチェーンの容量、コスト、公開性、暗号方式、ネットワーク寿命の制約を明記
- BEYOND自身を無条件に信頼しない信頼モデルを明文化
- Network Profile、Verified Node、複数ノード照合、Trust Anchorの役割と限界を整理
- BEYONDが保証することと保証しないことを分離
- `docs/concepts/why-verification-matters.md` を追加
- 関連する用語集、Network Profile、導入ページの表現を整合
- 新規ページをConceptsカテゴリのサイドバーへ追加

## 検証結果

次の検証はすべて成功しています。

- Markdown内部リンクの存在確認
- `git diff --check`
- `npm run typecheck`
- `npm run build`

## 設計上の判断

DocusaurusにはMermaid用テーマまたはプラグインが設定されていませんでした。設定を変更せずに表示を維持するため、検証フローはMarkdownのテキスト図として記述しています。

`verification-flow.md` は追加していません。内容の重複を避けるため、保存・取得・照合・検証の流れを `docs/concepts/verifiable-data.md` に統合しています。

## 再開時の確認事項

- `draft` からPull Requestを作成し、レビュー結果を反映する
- Mermaidを採用する場合は、Docusaurus側の設定方針を決めてから図を置き換える
- BEYOND本体の実装や仕様が更新された場合は、Verified Node、SnapshotProof、Chain Finalizationの記述を実装と再照合する

## 備考

リポジトリ直下の未追跡 `.claude/` は、今回のドキュメント作業には含めていません。
