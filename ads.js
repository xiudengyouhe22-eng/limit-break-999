/* =========================================================
   脳汁ゲー案内所 — 共通広告タグ（忍者AdMax / オーバーレイ型）
   設置: 各ページの </body> 直前に <script src="ads.js" defer></script>
   - admax_id : 488c6cde7dd8e4144e32f52db81e8ec4
   - 広告枠   : 脳汁ゲー案内所_SP下部（320x50 固定オーバーレイ）
   ========================================================= */
(function () {
  "use strict";

  var ADMAX_ID = "488c6cde7dd8e4144e32f52db81e8ec4";
  var TAG_SRC = "https://adm.shinobi.jp/st/t.js";

  /* 同一ページで二重に読み込まれても広告を増やさない */
  if (window.__admaxLoaded || window.__admaxQueued) return;
  window.__admaxQueued = true;

  try {
    (window.admaxads = window.admaxads || []).push({
      admax_id: ADMAX_ID,
      type: "overlay"
    });
  } catch (e) { /* 何があってもゲームは止めない */ }

  function loadTag() {
    try {
      if (document.querySelector('script[src*="adm.shinobi.jp/st/t.js"]')) return;
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.charset = "utf-8";
      s.async = true;
      s.src = TAG_SRC;
      s.onload = function () { window.__admaxLoaded = true; };
      s.onerror = function () { /* 広告ブロッカー等でもゲームは動かす */ };
      (document.body || document.documentElement).appendChild(s);
    } catch (e) { /* noop */ }
  }

  if (document.body) {
    loadTag();
  } else {
    document.addEventListener("DOMContentLoaded", loadTag, false);
  }
})();
