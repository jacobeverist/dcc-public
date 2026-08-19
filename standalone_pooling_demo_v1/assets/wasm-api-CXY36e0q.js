import { a as c, __tla as __tla_0 } from "./index-d6tzJi_p.js";
import "./reactflow-7fxXwhal.js";
import "./elkjs-rLLxZdMu.js";
import "./echarts-CxWuOr5q.js";
let u, h, _;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  u = 600;
  let d = c;
  _ = function(e) {
    d = e;
  };
  h = function(e) {
    if (!e.encoders || e.encoders.length === 0) throw new Error("At least one encoder is required");
    const [o, i] = e.viewBounds;
    if (!Number.isFinite(o) || !Number.isFinite(i) || o >= i) throw new Error("Invalid view bounds: require finite view_lo < view_hi");
    const s = i - o;
    for (const n of e.encoders) {
      const r = Number.isFinite(n.min_modulus) && n.min_modulus > 0 ? n.min_modulus : Number.isFinite(n.modulus) && n.modulus > 0 ? n.modulus : null;
      if (r !== null) {
        const t = s / r;
        if (t > u) throw new Error(`Encoder too fine to analyze over this range: ~${Math.round(t)} periods (finest modulus ${r} across a range of ${s}). Increase the modulus or narrow the plot range so periods-in-view stays under ${u}.`);
      }
    }
    const l = JSON.stringify({
      view_lo: o,
      view_hi: i,
      encoders: e.encoders
    });
    return JSON.parse(d(l));
  };
});
export {
  u as MAX_PERIODS_IN_VIEW,
  __tla,
  h as runAnalysis,
  _ as setAnalyzeFn
};
