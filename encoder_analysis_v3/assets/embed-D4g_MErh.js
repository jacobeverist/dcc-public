import { c as e, __tla as __tla_0 } from "./encoder_analysis-B1zNt_AW.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function o(n) {
    if (!n) return null;
    try {
      return JSON.parse(decodeURIComponent(n));
    } catch {
      try {
        return JSON.parse(n);
      } catch {
        return null;
      }
    }
  }
  function t() {
    if (window.__ENCODER_EMBED_CONFIG__) return window.__ENCODER_EMBED_CONFIG__;
    const n = new URLSearchParams(window.location.search).get("config");
    return o(n) ?? o(window.location.hash ? window.location.hash.slice(1) : null) ?? void 0;
  }
  const r = document.getElementById("app") ?? document.body;
  e(r, t());
});
