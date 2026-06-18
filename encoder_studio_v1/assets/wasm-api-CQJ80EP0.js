import { h as a, __tla as __tla_0 } from "./HelpDrawer-l_qoOkyo.js";
import "./reactflow-CFE1JzbO.js";
import "./echarts-CxWuOr5q.js";
import "./markdown-BhQy4Yqe.js";
let d, h, _;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  d = 600;
  let c = a;
  _ = function(e) {
    c = e;
  };
  h = function(e) {
    if (!e.encoders || e.encoders.length === 0) throw new Error("At least one encoder is required");
    const [n, o] = e.viewBounds;
    if (!Number.isFinite(n) || !Number.isFinite(o) || n >= o) throw new Error("Invalid view bounds: require finite view_lo < view_hi");
    const t = o - n;
    for (const i of e.encoders) {
      const r = Number.isFinite(i.min_period) && i.min_period > 0 ? i.min_period : Number.isFinite(i.period) && i.period > 0 ? i.period : null;
      if (r !== null) {
        const s = t / r;
        if (s > d) throw new Error(`Encoder too fine to analyze over this range: ~${Math.round(s)} periods (finest period ${r} across a range of ${t}). Increase the period or narrow the plot range so periods-in-view stays under ${d}.`);
      }
    }
    const l = JSON.stringify({
      view_lo: n,
      view_hi: o,
      encoders: e.encoders
    });
    return JSON.parse(c(l));
  };
});
export {
  d as MAX_PERIODS_IN_VIEW,
  __tla,
  h as runAnalysis,
  _ as setAnalyzeFn
};
