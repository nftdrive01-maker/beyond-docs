import {useEffect, useState} from 'react';

const manifestUrl = 'https://beyond.nftdrive.net/version.json';
type Release = {version: string; windows: string | null};

export default function LatestDownload() {
  const [attempt, setAttempt] = useState(0);
  const [release, setRelease] = useState<Release | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    setRelease(null);
    setFailed(false);
    const timeout = setTimeout(() => controller.abort(), 15000);

    async function load() {
      try {
        const response = await fetch(manifestUrl, {
          signal: controller.signal,
          cache: 'no-store',
          credentials: 'omit',
        });
        if (!response.ok) throw new Error('Manifest unavailable');
        const data: unknown = await response.json();
        if (!data || typeof data !== 'object') throw new Error('Invalid manifest');
        const {version, windows} = data as Record<string, unknown>;
        if (typeof version !== 'string' || !version.trim()) throw new Error('Invalid version');
        if (windows !== null) {
          if (typeof windows !== 'string') throw new Error('Invalid download');
          const url = new URL(windows);
          if (url.origin !== 'https://beyond.nftdrive.net' || url.username || url.password ||
              !url.pathname.startsWith('/downloads/') || !url.pathname.endsWith('.exe')) {
            throw new Error('Unexpected download URL');
          }
        }
        if (active) setRelease({version, windows: windows as string | null});
      } catch {
        if (active) setFailed(true);
      } finally {
        clearTimeout(timeout);
      }
    }
    void load();
    return () => {
      active = false;
      clearTimeout(timeout);
      controller.abort();
    };
  }, [attempt]);

  return (
    <div className="alert alert--info margin-bottom--lg" aria-live="polite">
      {failed ? (
        <>
          <p>最新の配布情報を取得できませんでした。通信状況を確認して再試行してください。</p>
          <button className="button button--secondary" onClick={() => setAttempt(value => value + 1)}>
            再試行
          </button>
          <p className="margin-top--sm"><a href="https://beyond.nftdrive.net/">Web版を開く</a> ／ <a href={manifestUrl}>配布情報（JSON）を確認する</a></p>
        </>
      ) : release ? (
        <>
          <p>最新バージョン：{release.version}</p>
          {release.windows ? (
            <>
              <a className="button button--primary" href={release.windows}>Windows版をダウンロード</a>
              <p className="margin-top--sm">ファイル名：<code style={{overflowWrap: 'anywhere'}}>{new URL(release.windows).pathname.split('/').pop()}</code></p>
            </>
          ) : <p>現在、Windows版のダウンロードリンクは公開されていません。</p>}
        </>
      ) : <p>最新の配布情報を確認しています…</p>}
      <noscript>ダウンロード情報の表示にはJavaScriptを有効にしてください。<a href={manifestUrl}>配布情報（JSON）</a>でも確認できます。</noscript>
    </div>
  );
}
