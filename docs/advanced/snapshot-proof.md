---
sidebar_position: 3
title: SnapshotProofについて
---

# SnapshotProofについて

SnapshotProofは、過去の設計文書で、特定時点のチェーン状態を後から照合するための外部証明を表す名称として使われていました。

現行の公開機能として案内する外部証明は、ノードが署名したBeacon Fileを検証し、別チェーンへ関連付ける **Beacon／Anchor** です。現在の利用方法は [BeaconとAnchor](./beacon.md) を参照してください。

SnapshotProofという名称だけで、特定のファイル形式、state rootの生成、チェーン終了後の検証機能が現行BEYONDに実装されているとはみなさないでください。将来この名称で仕様を公開する場合は、形式、生成主体、検証手順、Trust Anchor、保証範囲をあらためて定義します。
