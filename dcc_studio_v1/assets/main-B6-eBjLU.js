var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { T as Me, f as dt, h as Na, e as ut, E as Bc, a as ko, b as zc, P as $a, c as Po, d as Vc, L as Eo, g as Co, i as Rt, j as No, k as vn, l as bn, B as qe, m as _t, V as Ia, n as $o, o as ta, p as Wc, q as Uc, r as Hc, s as Gc, t as Kc, u as Yc, v as Jc, w as na, x as Fa, y as Io, F as Xc, z as Zc, A as Qc, C as Do, D as To, G as el, H as tl, I as Ro, J as jo, R as nl, K as Oo, M as rl, N as Mo, O as al, Q as ol, S as Di, U as sl, W as Ti, X as Lo, Y as il, Z as cl, _ as ll, $ as dl, a0 as ul, a1 as pl, a2 as ml, a3 as fl, a4 as Ri, a5 as hl, a6 as yl, a7 as xn, a8 as ra, a9 as gl, aa as Sn, ab as Fo, ac as ht, ad as Ao, ae as _l, af as qo, ag as Qe, ah as Bo, ai as aa, aj as oa, ak as wn, al as kn, am as vl, an as bl, ao as xl, ap as Kt, aq as Pr, ar as Sl, as as Aa, at as bt, au as ji, av as Er, aw as Cr, ax as wl, ay as We, az as kl, aA as Pl, aB as El, aC as Cl, aD as Nl, aE as $l, __tla as __tla_0 } from "./StackedSubplotPanel-De_N8OhU.js";
import { r as U, j as x, a as Nr, b as Il, c as Dl, d as Tl, g as Rl, u as jl, e as Ol, N as Ml, f as rt, H as tt, P as nt, h as dn, B as Yt, i as zo, k as Ll, l as Fl, m as Oi, n as Al, C as ql, o as Bl, p as zl, q as Vl, R as Wl, s as Ul } from "./reactflow-DDaPvTHK.js";
import "./markdown-BhQy4Yqe.js";
import { g as Hl, i as Gl } from "./echarts-CxWuOr5q.js";
import { g as Kl, E as Yl } from "./elkjs-rLLxZdMu.js";
import { runAnalysis as Jl, __tla as __tla_1 } from "./wasm-api-BL9csqJ5.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  var Xl = {
    outline: {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    filled: {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      stroke: "none"
    }
  };
  const je = (e, t, n, r) => {
    const a = U.forwardRef(({ color: o = "currentColor", size: s = 24, stroke: i = 2, title: c, className: l, children: u, ...v }, h) => U.createElement("svg", {
      ref: h,
      ...Xl[e],
      width: s,
      height: s,
      className: [
        "tabler-icon",
        `tabler-icon-${t}`,
        l
      ].join(" "),
      strokeWidth: i,
      stroke: o,
      ...v
    }, [
      c && U.createElement("title", {
        key: "svg-title"
      }, c),
      ...r.map(([y, S]) => U.createElement(y, S)),
      ...Array.isArray(u) ? u : [
        u
      ]
    ]));
    return a.displayName = `${n}`, a;
  };
  const Zl = [
    [
      "path",
      {
        d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
        key: "svg-0"
      }
    ],
    [
      "path",
      {
        d: "M6 4v4",
        key: "svg-1"
      }
    ],
    [
      "path",
      {
        d: "M6 12v8",
        key: "svg-2"
      }
    ],
    [
      "path",
      {
        d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
        key: "svg-3"
      }
    ],
    [
      "path",
      {
        d: "M12 4v10",
        key: "svg-4"
      }
    ],
    [
      "path",
      {
        d: "M12 18v2",
        key: "svg-5"
      }
    ],
    [
      "path",
      {
        d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
        key: "svg-6"
      }
    ],
    [
      "path",
      {
        d: "M18 4v1",
        key: "svg-7"
      }
    ],
    [
      "path",
      {
        d: "M18 9v11",
        key: "svg-8"
      }
    ]
  ], Ql = je("outline", "adjustments", "Adjustments", Zl);
  const ed = [
    [
      "path",
      {
        d: "M11 10v-5h-1m8 14v-5h-1",
        key: "svg-0"
      }
    ],
    [
      "path",
      {
        d: "M15 5.5a.5 .5 0 0 1 .5 -.5h2a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5l0 -4",
        key: "svg-1"
      }
    ],
    [
      "path",
      {
        d: "M10 14.5a.5 .5 0 0 1 .5 -.5h2a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5l0 -4",
        key: "svg-2"
      }
    ],
    [
      "path",
      {
        d: "M6 10h.01m-.01 9h.01",
        key: "svg-3"
      }
    ]
  ], td = je("outline", "binary", "Binary", ed);
  const nd = [
    [
      "path",
      {
        d: "M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8",
        key: "svg-0"
      }
    ],
    [
      "path",
      {
        d: "M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8",
        key: "svg-1"
      }
    ],
    [
      "path",
      {
        d: "M17.5 16a3.5 3.5 0 0 0 0 -7h-.5",
        key: "svg-2"
      }
    ],
    [
      "path",
      {
        d: "M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0",
        key: "svg-3"
      }
    ],
    [
      "path",
      {
        d: "M6.5 16a3.5 3.5 0 0 1 0 -7h.5",
        key: "svg-4"
      }
    ],
    [
      "path",
      {
        d: "M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10",
        key: "svg-5"
      }
    ]
  ], rd = je("outline", "brain", "Brain", nd);
  const ad = [
    [
      "path",
      {
        d: "M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6",
        key: "svg-0"
      }
    ],
    [
      "path",
      {
        d: "M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -10",
        key: "svg-1"
      }
    ],
    [
      "path",
      {
        d: "M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -14",
        key: "svg-2"
      }
    ],
    [
      "path",
      {
        d: "M4 20h14",
        key: "svg-3"
      }
    ]
  ], Mi = je("outline", "chart-bar", "ChartBar", ad);
  const od = [
    [
      "path",
      {
        d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14",
        key: "svg-0"
      }
    ],
    [
      "path",
      {
        d: "M8 8.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0",
        fill: "currentColor",
        key: "svg-1"
      }
    ],
    [
      "path",
      {
        d: "M15 8.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0",
        fill: "currentColor",
        key: "svg-2"
      }
    ],
    [
      "path",
      {
        d: "M15 15.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0",
        fill: "currentColor",
        key: "svg-3"
      }
    ],
    [
      "path",
      {
        d: "M8 15.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0",
        fill: "currentColor",
        key: "svg-4"
      }
    ],
    [
      "path",
      {
        d: "M11.5 12a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0",
        fill: "currentColor",
        key: "svg-5"
      }
    ]
  ], sd = je("outline", "dice-5", "Dice5", od);
  const id = [
    [
      "path",
      {
        d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",
        key: "svg-0"
      }
    ],
    [
      "path",
      {
        d: "M7 11l5 5l5 -5",
        key: "svg-1"
      }
    ],
    [
      "path",
      {
        d: "M12 4l0 12",
        key: "svg-2"
      }
    ]
  ], cd = je("outline", "download", "Download", id);
  const ld = [
    [
      "path",
      {
        d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
        key: "svg-0"
      }
    ],
    [
      "path",
      {
        d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
        key: "svg-1"
      }
    ],
    [
      "path",
      {
        d: "M13.41 10.59l2.59 -2.59",
        key: "svg-2"
      }
    ],
    [
      "path",
      {
        d: "M7 12a5 5 0 0 1 5 -5",
        key: "svg-3"
      }
    ]
  ], dd = je("outline", "gauge", "Gauge", ld);
  const ud = [
    [
      "path",
      {
        d: "M9 15l6 -6",
        key: "svg-0"
      }
    ],
    [
      "path",
      {
        d: "M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464",
        key: "svg-1"
      }
    ],
    [
      "path",
      {
        d: "M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463",
        key: "svg-2"
      }
    ]
  ], pd = je("outline", "link", "Link", ud);
  const md = [
    [
      "path",
      {
        d: "M3 4l18 0",
        key: "svg-0"
      }
    ],
    [
      "path",
      {
        d: "M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10",
        key: "svg-1"
      }
    ],
    [
      "path",
      {
        d: "M12 16l0 4",
        key: "svg-2"
      }
    ],
    [
      "path",
      {
        d: "M9 20l6 0",
        key: "svg-3"
      }
    ],
    [
      "path",
      {
        d: "M8 12l3 -3l2 2l3 -3",
        key: "svg-4"
      }
    ]
  ], fd = je("outline", "presentation", "Presentation", md);
  const hd = [
    [
      "path",
      {
        d: "M9 12h6",
        key: "svg-0"
      }
    ],
    [
      "path",
      {
        d: "M12 9v6",
        key: "svg-1"
      }
    ],
    [
      "path",
      {
        d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14",
        key: "svg-2"
      }
    ]
  ], yd = je("outline", "square-plus", "SquarePlus", hd);
  const gd = [
    [
      "path",
      {
        d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",
        key: "svg-0"
      }
    ],
    [
      "path",
      {
        d: "M7 9l5 -5l5 5",
        key: "svg-1"
      }
    ],
    [
      "path",
      {
        d: "M12 4l0 12",
        key: "svg-2"
      }
    ]
  ], _d = je("outline", "upload", "Upload", gd);
  const vd = [
    [
      "path",
      {
        d: "M3 12h5l4 8v-16l4 8h5",
        key: "svg-0"
      }
    ]
  ], bd = je("outline", "wave-saw-tool", "WaveSawTool", vd);
  const xd = [
    [
      "path",
      {
        d: "M21 12h-2c-.894 0 -1.662 -.857 -1.761 -2c-.296 -3.45 -.749 -6 -2.749 -6s-2.5 3.582 -2.5 8s-.5 8 -2.5 8s-2.452 -2.547 -2.749 -6c-.1 -1.147 -.867 -2 -1.763 -2h-2",
        key: "svg-0"
      }
    ]
  ], Sd = je("outline", "wave-sine", "WaveSine", xd);
  const wd = [
    [
      "path",
      {
        d: "M3 12h5v8h4v-16h4v8h5",
        key: "svg-0"
      }
    ]
  ], kd = je("outline", "wave-square", "WaveSquare", wd);
  const Pd = [
    [
      "path",
      {
        d: "M18 6l-12 12",
        key: "svg-0"
      }
    ],
    [
      "path",
      {
        d: "M6 6l12 12",
        key: "svg-1"
      }
    ]
  ], Ed = je("outline", "x", "X", Pd), Cd = "0.1.0", Vo = [
    "static",
    "partial",
    "sandbox"
  ];
  function tn(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
  }
  function Nd(e) {
    var _a2, _b, _c2, _d2, _e, _f2;
    const t = [], n = (s) => t.push(s);
    if (!tn(e)) return {
      valid: false,
      errors: [
        "config must be an object"
      ]
    };
    typeof e.version != "string" && n('missing/invalid "version"');
    const r = e.networks;
    if (!tn(r) || Object.keys(r).length === 0) return n('"networks" must be a non-empty object'), {
      valid: false,
      errors: t
    };
    const a = {};
    for (const [s, i] of Object.entries(r)) {
      if (!tn(i)) {
        n(`network "${s}" must be an object`);
        continue;
      }
      const c = i;
      if (!Array.isArray(c.blocks)) {
        n(`network "${s}": "blocks" must be an array`);
        continue;
      }
      const l = /* @__PURE__ */ new Set();
      for (const u of [
        ...c.blocks ?? [],
        ...c.datasources ?? []
      ]) !u || typeof u.id != "string" ? n(`network "${s}": item missing string id`) : l.has(u.id) ? n(`network "${s}": duplicate id "${u.id}"`) : l.add(u.id);
      a[s] = l;
      for (const u of c.connections ?? []) l.has(u.source) || n(`network "${s}": connection source "${u.source}" not found`), l.has(u.target) || n(`network "${s}": connection target "${u.target}" not found`);
      for (const u of c.interfaces ?? []) l.has(u.source) || n(`network "${s}": interface source "${u.source}" not found`), l.has(u.target) || n(`network "${s}": interface target "${u.target}" not found`);
    }
    const o = (s, i) => !!a[s] && a[s].has(i);
    if (e.layout !== void 0) {
      const s = e.layout;
      if (!tn(s == null ? void 0 : s.nodes)) n('"layout.nodes" must be an object');
      else for (const [i, c] of Object.entries(s.nodes)) o(c.networkId, c.blockId) || n(`layout node "${i}" \u2192 (${c.networkId}, ${c.blockId}) not found`);
    }
    if (e.visualization !== void 0) {
      const s = e.visualization, i = /* @__PURE__ */ new Set();
      for (const c of (s == null ? void 0 : s.vizNodes) ?? []) i.has(c.id) && n(`duplicate vizNode id "${c.id}"`), i.add(c.id), o((_a2 = c.target) == null ? void 0 : _a2.networkId, (_b = c.target) == null ? void 0 : _b.blockId) || n(`vizNode "${c.id}" target (${(_c2 = c.target) == null ? void 0 : _c2.networkId}, ${(_d2 = c.target) == null ? void 0 : _d2.blockId}) not found`);
      for (const [c, l] of Object.entries((s == null ? void 0 : s.inline) ?? {})) for (const u of Object.keys(l)) o(c, u) || n(`visualization.inline (${c}, ${u}) not found`);
    }
    if (e.interactivity !== void 0) {
      const s = e.interactivity;
      (!s || !Vo.includes(s.mode)) && n(`interactivity.mode must be one of ${Vo.join(" | ")}`);
      const i = (_e = s == null ? void 0 : s.editable) == null ? void 0 : _e.params;
      if (tn(i)) for (const l of Object.keys(i)) a[l] || n(`interactivity.editable.params references unknown network "${l}"`);
      const c = (_f2 = s == null ? void 0 : s.editable) == null ? void 0 : _f2.networks;
      if (Array.isArray(c)) for (const l of c) a[l] || n(`interactivity.editable.networks references unknown network "${l}"`);
    }
    return {
      valid: t.length === 0,
      errors: t
    };
  }
  const $d = "__DCC_DASHBOARD_CONFIG__", Id = "dcc-dashboard-config";
  function Dd(e) {
    return JSON.stringify(e);
  }
  function Td(e) {
    return encodeURIComponent(Dd(e));
  }
  function Li(e, t) {
    return `${e}#${Td(t)}`;
  }
  function sa(e) {
    if (!e) return null;
    try {
      return JSON.parse(decodeURIComponent(e));
    } catch {
      try {
        return JSON.parse(e);
      } catch {
        return null;
      }
    }
  }
  function Rd(e) {
    return e.global ? e.global : sa(e.query) ?? sa(e.hash) ?? sa(e.scriptText);
  }
  function Fi() {
    if (typeof window > "u") return null;
    const t = window[$d] ?? null, n = new URLSearchParams(window.location.search).get("config"), r = window.location.hash ? window.location.hash.slice(1) : null, a = typeof document < "u" ? document.getElementById(Id) : null, o = a ? a.textContent : null;
    return Rd({
      global: t,
      query: n,
      hash: r,
      scriptText: o
    });
  }
  const jd = /* @__PURE__ */ new Set([
    "FixedWeightTransformer",
    "TaperingWeightTransformer",
    "PeriodicScalarTransformer",
    "PeriodicCellTransformer"
  ]);
  function ln(e) {
    return !!e && jd.has(e);
  }
  const Od = 2;
  function Fe(e, t, n) {
    const r = e[t];
    return typeof r == "number" && Number.isFinite(r) ? r : n;
  }
  function Da(e, t) {
    const n = Fe(t, "min_val", 0), r = Fe(t, "max_val", 1);
    if (!(n < r)) return null;
    const a = r - n;
    let o = null;
    switch (e) {
      case "FixedWeightTransformer":
        o = {
          type: "interval-fixed",
          n: Fe(t, "n", 20),
          w: Fe(t, "w", 5),
          lower_bound: n,
          upper_bound: r
        };
        break;
      case "TaperingWeightTransformer":
        o = {
          type: "interval-tapering",
          n: Fe(t, "n", 20),
          w: Fe(t, "w", 5),
          lower_bound: n,
          upper_bound: r
        };
        break;
      case "PeriodicScalarTransformer": {
        const s = Fe(t, "period", a);
        o = {
          type: "periodic-fixed",
          n: Fe(t, "n", 24),
          w: Fe(t, "w", 5),
          lower_bound: n,
          upper_bound: n + s,
          period: s
        };
        break;
      }
      case "PeriodicCellTransformer":
        o = {
          type: "periodic-cell",
          n: Fe(t, "n", 8),
          w: Od,
          lower_bound: n,
          upper_bound: r,
          min_period: Fe(t, "min_period", 0.1 * a),
          max_period: Fe(t, "max_period", a),
          l_frac: Fe(t, "l_frac", 0.15)
        };
        break;
      default:
        return null;
    }
    return {
      encoder: o,
      viewBounds: [
        n,
        r
      ]
    };
  }
  const Wo = (e) => ({
    addRemoveNodes: e,
    layout: e,
    datasources: e,
    visualization: e,
    editNetworks: () => e,
    editParams: () => e
  });
  function Uo(e) {
    const t = (e == null ? void 0 : e.mode) ?? "sandbox";
    if (t === "static") return Wo(false);
    if (t === "sandbox") return Wo(true);
    const n = (e == null ? void 0 : e.editable) ?? {};
    return {
      addRemoveNodes: !!n.addRemoveNodes,
      layout: !!n.layout,
      datasources: !!n.datasources,
      visualization: !!n.visualization,
      editNetworks: (r) => {
        const a = n.networks;
        return a === true ? true : Array.isArray(a) ? r === void 0 ? a.length > 0 : a.includes(r) : false;
      },
      editParams: (r, a, o) => {
        const s = n.params;
        if (s === true) return true;
        if (s && typeof s == "object") {
          const i = s[r];
          if (i === true) return true;
          if (Array.isArray(i)) return i.includes(a) || o != null && i.includes(o);
        }
        return false;
      }
    };
  }
  const qa = "main";
  function Md(e, t) {
    const n = (t == null ? void 0 : t.networkId) ?? qa, r = {
      blocks: e.blocks ?? [],
      ...e.datasources ? {
        datasources: e.datasources
      } : {},
      ...e.connections ? {
        connections: e.connections
      } : {},
      ...e.interfaces ? {
        interfaces: e.interfaces
      } : {}
    };
    return {
      version: e.version ?? Cd,
      ...(t == null ? void 0 : t.meta) ? {
        meta: t.meta
      } : {},
      networks: {
        [n]: r
      },
      ...(t == null ? void 0 : t.layout) ? {
        layout: t.layout
      } : {},
      ...(t == null ? void 0 : t.visualization) ? {
        visualization: t.visualization
      } : {},
      ...(t == null ? void 0 : t.interactivity) ? {
        interactivity: t.interactivity
      } : {}
    };
  }
  function Ld(e, t) {
    const n = e.networks[t];
    return n ? {
      version: e.version,
      blocks: n.blocks ?? [],
      datasources: n.datasources ?? [],
      connections: n.connections ?? [],
      interfaces: n.interfaces ?? [],
      learnedState: n.learnedState ?? null
    } : null;
  }
  function Fd(e) {
    return Object.entries(e.networks);
  }
  const Ad = "|";
  function Ai(e, t) {
    return `${e}${Ad}${t}`;
  }
  function qd(e, t) {
    const n = {};
    for (const r of e) n[Ai(r.networkId, r.blockId)] = {
      networkId: r.networkId,
      blockId: r.blockId,
      position: r.position,
      ...r.size ? {
        size: r.size
      } : {},
      ...r.parentId ? {
        parentId: r.parentId
      } : {}
    };
    return {
      nodes: n
    };
  }
  function Bd(e, t, n) {
    return e == null ? void 0 : e.nodes[Ai(t, n)];
  }
  const De = (e, t, n, r, a, o = 1) => ({
    key: e,
    label: t,
    kind: "int",
    default: n,
    min: r,
    max: a,
    step: o
  }), Ie = (e, t, n, r, a) => ({
    key: e,
    label: t,
    kind: "int",
    default: n,
    min: r,
    max: a,
    step: 1,
    scale: "log"
  }), Ge = (e, t, n, r, a, o) => ({
    key: e,
    label: t,
    kind: "float",
    default: n,
    min: r,
    max: a,
    step: o
  }), ia = (e, t, n) => ({
    key: e,
    label: t,
    kind: "bool",
    default: n
  }), Ue = (e = 42) => ({
    key: "seed",
    label: "seed",
    kind: "seed",
    default: e,
    min: 0,
    max: 99999,
    step: 1
  }), Be = () => De("num_t", "Time Window Steps", 2, 1, 8), Nt = (e) => Ge("min_val", "min value", e, -1e3, 1e3, 0.1), $t = (e) => Ge("max_val", "max value", e, -1e3, 1e3, 0.1), Pn = () => [
    De("perm_thr", "perm thresh", 20, 0, 99),
    De("perm_inc", "perm inc", 2, 0, 99),
    De("perm_dec", "perm dec", 1, 0, 99)
  ], Ho = () => [
    Ge("pct_pool", "pct pool", 0.8, 0, 1, 0.05),
    Ge("pct_conn", "pct conn", 0.5, 0, 1, 0.05),
    Ge("pct_learn", "pct learn", 0.3, 0, 1, 0.05)
  ], $r = {
    SynflowScalarDataSource: {
      type: "SynflowScalarDataSource",
      label: "Scalar Source",
      category: "datasource",
      bespokeConfig: true,
      params: []
    },
    SynflowDiscreteDataSource: {
      type: "SynflowDiscreteDataSource",
      label: "Discrete Source",
      category: "datasource",
      bespokeConfig: true,
      params: []
    },
    FixedWeightTransformer: {
      type: "FixedWeightTransformer",
      label: "Fixed Weight",
      category: "encoder",
      addMethod: "add_fixed_weight_transformer",
      params: [
        Ie("n", "n (bits)", 16, 2, 2048),
        De("w", "w (weight)", 5, 1, 512),
        Nt(-1),
        $t(1),
        Be(),
        Ue()
      ]
    },
    TaperingWeightTransformer: {
      type: "TaperingWeightTransformer",
      label: "Tapering Weight",
      category: "encoder",
      addMethod: "add_tapering_weight_transformer",
      params: [
        Ie("n", "n (bits)", 16, 2, 2048),
        De("w", "w (weight)", 5, 1, 512),
        Nt(-1),
        $t(1),
        Be(),
        Ue()
      ]
    },
    PeriodicScalarTransformer: {
      type: "PeriodicScalarTransformer",
      label: "Periodic Scalar",
      category: "encoder",
      addMethod: "add_periodic_scalar_transformer",
      params: [
        Ie("n", "n (bits)", 16, 2, 2048),
        De("w", "w (weight)", 5, 1, 512),
        Ge("period", "period", 2, 0.01, 1e3, 0.1),
        Nt(-1),
        $t(1),
        Be(),
        Ue()
      ]
    },
    PeriodicCellTransformer: {
      type: "PeriodicCellTransformer",
      label: "Periodic Cell",
      category: "encoder",
      addMethod: "add_periodic_cell_transformer",
      params: [
        Ie("n", "n (cells)", 16, 2, 256),
        Ge("min_period", "min period", 0.1, 0.01, 1e3, 0.1),
        Ge("max_period", "max period", 1, 0.01, 1e3, 0.1),
        Ge("l_frac", "l frac", 0.15, 0, 1, 0.01),
        Nt(-1),
        $t(1),
        Be(),
        Ue()
      ]
    },
    PlaceCellTransformer: {
      type: "PlaceCellTransformer",
      label: "Place Cell",
      category: "encoder",
      addMethod: "add_place_cell_transformer",
      params: [
        Nt(-1),
        $t(1),
        Ge("default_bin_size", "bin size", 0.2, 0.01, 100, 0.01),
        Be()
      ]
    },
    RandomizedPlaceCellTransformer: {
      type: "RandomizedPlaceCellTransformer",
      label: "Random Place Cell",
      category: "encoder",
      addMethod: "add_randomized_place_cell_transformer",
      params: [
        Ie("n", "n", 16, 2, 2048),
        Ge("bin_size", "bin size", 0.3, 0.01, 100, 0.01),
        Nt(-1),
        $t(1),
        Be(),
        Ue()
      ]
    },
    DiscreteTransformer: {
      type: "DiscreteTransformer",
      label: "Discrete",
      category: "encoder",
      addMethod: "add_discrete_transformer",
      params: [
        De("num_v", "num values", 10, 2, 256),
        Ie("num_s", "num statelets", 512, 1, 4096),
        Be(),
        Ue()
      ]
    },
    PersistenceTransformer: {
      type: "PersistenceTransformer",
      label: "Persistence",
      category: "encoder",
      hidden: true,
      addMethod: "add_persistence_transformer",
      params: [
        Nt(-1),
        $t(1),
        Ie("num_s", "num statelets", 2048, 1, 4096),
        Ie("num_as", "active statelets", 256, 1, 1024),
        De("max_step", "max step", 10, 1, 100),
        Be(),
        Ue()
      ]
    },
    PatternPooler: {
      type: "PatternPooler",
      label: "Pattern Pooler",
      category: "learning",
      addMethod: "add_pattern_pooler",
      needsInit: true,
      params: [
        Ie("num_s", "num statelets", 1024, 1, 4096),
        Ie("num_as", "active statelets", 40, 1, 1024),
        ...Pn(),
        ...Ho(),
        ia("always_update", "always update", false),
        Be(),
        Ue(0)
      ]
    },
    PatternClassifier: {
      type: "PatternClassifier",
      label: "Pattern Classifier",
      category: "learning",
      addMethod: "add_pattern_classifier",
      needsInit: true,
      params: [
        De("num_l", "num labels", 3, 2, 64),
        Ie("num_s", "num statelets", 1024, 1, 4096),
        Ie("num_as", "active statelets (total)", 30, 1, 1024),
        ...Pn(),
        ...Ho(),
        Be(),
        Ue(0)
      ]
    },
    SequenceLearner: {
      type: "SequenceLearner",
      label: "Sequence Learner",
      category: "learning",
      addMethod: "add_sequence_learner",
      needsInit: true,
      params: [
        Ie("num_c", "num columns", 512, 1, 4096),
        De("num_spc", "cells/col", 4, 1, 128),
        De("num_dps", "dendrites/cell", 8, 1, 128),
        Ie("num_rpd", "receptors/dendrite", 32, 1, 256),
        De("d_thresh", "dendrite thresh", 20, 1, 99),
        ...Pn(),
        Be(),
        ia("always_update", "always update", false),
        Ue()
      ]
    },
    ContextLearner: {
      type: "ContextLearner",
      label: "Context Learner",
      category: "learning",
      addMethod: "add_context_learner",
      needsInit: true,
      params: [
        Ie("num_c", "num columns", 512, 1, 4096),
        De("num_spc", "cells/col", 4, 1, 128),
        De("num_dps", "dendrites/cell", 8, 1, 128),
        Ie("num_rpd", "receptors/dendrite", 32, 1, 256),
        De("d_thresh", "dendrite thresh", 20, 1, 99),
        ...Pn(),
        Be(),
        ia("always_update", "always update", false),
        Ue()
      ]
    }
  }, zd = [
    "datasource",
    "encoder",
    "learning"
  ];
  function vt(e) {
    return $r[e];
  }
  function Vd(e) {
    return Object.values($r).filter((t) => t.category === e);
  }
  function Wd(e) {
    const t = $r[e];
    if (!t) return {};
    const n = {};
    for (const r of t.params) n[r.key] = r.default;
    return n;
  }
  function qi(e) {
    var _a2;
    return ((_a2 = $r[e]) == null ? void 0 : _a2.params) ?? [];
  }
  function cn(e, t) {
    return qi(e).some((n) => n.key === t);
  }
  const Oe = (e, t) => Number(e[t]);
  function Bi(e, t, n) {
    if (t === "w" && cn(e, "n")) return Math.max(1, Math.floor(Oe(n, "n") / 2));
    if (t === "num_as" && cn(e, "num_s")) return Math.max(1, Oe(n, "num_s"));
    if (t === "d_thresh" && cn(e, "num_rpd")) return Math.max(1, Oe(n, "num_rpd"));
  }
  function Ud(e, t) {
    const n = {
      ...t
    };
    for (const r of [
      "w",
      "num_as",
      "d_thresh"
    ]) {
      const a = Bi(e, r, n);
      a !== void 0 && typeof n[r] == "number" && (n[r] = Math.min(n[r], a));
    }
    return n;
  }
  function Hd(e, t) {
    const n = [], r = (a, o) => cn(e, a) && cn(e, o);
    return r("n", "w") && Oe(t, "w") > Math.floor(Oe(t, "n") / 2) && n.push(`w must be \u2264 n / 2 (${Math.floor(Oe(t, "n") / 2)})`), r("num_s", "num_as") && Oe(t, "num_as") > Oe(t, "num_s") && n.push("active statelets (num_as) must be \u2264 num_s"), r("num_rpd", "d_thresh") && Oe(t, "d_thresh") > Oe(t, "num_rpd") && n.push("dendrite thresh (d_thresh) must be \u2264 receptors/dendrite (num_rpd)"), r("min_val", "max_val") && Oe(t, "min_val") >= Oe(t, "max_val") && n.push("min value must be < max value"), r("min_period", "max_period") && Oe(t, "min_period") >= Oe(t, "max_period") && n.push("min period must be < max period"), n;
  }
  const Ba = [
    "sine",
    "square",
    "sawtooth",
    "ramp",
    "bounded_noise"
  ], Ta = {
    sine: "Sine",
    square: "Square",
    sawtooth: "Sawtooth",
    ramp: "Ramp",
    bounded_noise: "Bounded Noise"
  }, zi = [
    {
      key: "rate",
      label: "rate (Hz)",
      default: 20,
      step: 1
    },
    {
      key: "duration",
      label: "duration (s)",
      default: 100,
      step: 1
    }
  ], jt = {
    sine: [
      {
        key: "amplitude",
        label: "amplitude",
        default: 1,
        step: 0.1
      },
      {
        key: "frequency",
        label: "frequency",
        default: 2,
        step: 0.1
      },
      {
        key: "phase",
        label: "phase",
        default: 0,
        step: 0.1
      },
      {
        key: "offset",
        label: "offset",
        default: 0,
        step: 0.1
      }
    ],
    square: [
      {
        key: "amplitude",
        label: "amplitude",
        default: 1,
        step: 0.1
      },
      {
        key: "frequency",
        label: "frequency",
        default: 2,
        step: 0.1
      },
      {
        key: "duty_cycle",
        label: "duty cycle",
        default: 0.5,
        step: 0.05
      }
    ],
    sawtooth: [
      {
        key: "amplitude",
        label: "amplitude",
        default: 1,
        step: 0.1
      },
      {
        key: "frequency",
        label: "frequency",
        default: 2,
        step: 0.1
      },
      {
        key: "offset",
        label: "offset",
        default: 0,
        step: 0.1
      }
    ],
    ramp: [
      {
        key: "start",
        label: "start",
        default: -1,
        step: 0.1
      },
      {
        key: "end",
        label: "end",
        default: 1,
        step: 0.1
      }
    ],
    bounded_noise: [
      {
        key: "min_value",
        label: "min value",
        default: -1,
        step: 0.1
      },
      {
        key: "max_value",
        label: "max value",
        default: 1,
        step: 0.1
      },
      {
        key: "seed",
        label: "seed",
        default: 42,
        step: 1
      }
    ]
  };
  function Gd(e) {
    const t = Kd(e);
    if (!t || typeof t.type != "string") return null;
    const n = t.type;
    if (!jt[n]) return null;
    const r = t.time ?? {}, a = {
      rate: Number(r.rate ?? 20),
      duration: Number(r.duration ?? 100)
    };
    for (const o of jt[n]) a[o.key] = Number(t[o.key] ?? o.default);
    return {
      seriesType: n,
      values: a
    };
  }
  function Kd(e) {
    if (!e || typeof e != "object") return null;
    if (typeof e.type == "string" && jt[e.type]) return e;
    const t = e.series;
    if (t && typeof t.type == "string") return t;
    const n = e.layers;
    if (Array.isArray(n)) {
      for (const r of n) for (const a of (r == null ? void 0 : r.events) ?? []) {
        const o = a == null ? void 0 : a.series;
        if (o && typeof o.type == "string" && jt[o.type]) return o;
      }
      for (const r of n) for (const a of (r == null ? void 0 : r.events) ?? []) if ((a == null ? void 0 : a.series) && typeof a.series.type == "string") return a.series;
    }
    return null;
  }
  function Ra(e) {
    const t = {};
    for (const n of [
      ...jt[e],
      ...zi
    ]) t[n.key] = n.default;
    return t;
  }
  function Vi(e, t) {
    const n = {
      rate: t.rate,
      duration: t.duration
    }, r = {
      type: e,
      time: n
    };
    for (const a of jt[e]) r[a.key] = t[a.key];
    return {
      layers: [
        {
          priority: 0,
          stitch_method: "forward_precedence",
          events: [
            {
              series: r,
              start_time: 0
            }
          ]
        }
      ]
    };
  }
  const Yd = [
    "restart",
    "hold",
    "stop"
  ];
  function Wi() {
    return {
      patterns: [
        "A",
        "B",
        "C",
        "D"
      ],
      iters: 1,
      recur: 1,
      loop_mode: "restart"
    };
  }
  function Ui(e) {
    return {
      type: "repeating",
      patterns: e.patterns,
      iters: e.iters,
      recur: e.recur,
      loop_mode: e.loop_mode
    };
  }
  const Hi = "application/dcc-block-type", Gi = "application/dcc-waveform", Jd = [
    "VizBitField",
    "VizTimeSeries",
    "VizEncoder"
  ], Xd = {
    VizBitField: "bitfield",
    VizTimeSeries: "timeseries",
    VizEncoder: "encoderChart"
  }, za = {
    bitfield: "VizBitField",
    timeseries: "VizTimeSeries",
    encoderChart: "VizEncoder"
  }, Va = {
    VizBitField: "Bit Field",
    VizTimeSeries: "Time Series",
    VizEncoder: "Encoder Visual"
  }, Ot = (e) => !!e && Jd.includes(e), Zd = {
    datasource: "Data Sources",
    encoder: "Encoders",
    learning: "Learning"
  }, Qd = {
    datasource: bd,
    encoder: td,
    learning: rd
  }, eu = [
    "datasource",
    ...zd.filter((e) => e !== "datasource")
  ];
  function Go({ type: e, label: t, title: n, waveform: r }) {
    return x.jsx("div", {
      draggable: true,
      onDragStart: (a) => {
        a.dataTransfer.setData(Hi, e), r && a.dataTransfer.setData(Gi, r), a.dataTransfer.effectAllowed = "move";
      },
      "data-tooltip": n,
      "data-tooltip-placement": "right",
      style: {
        padding: "4px 7px",
        margin: "2px 0",
        background: "var(--bg-primary)",
        border: "1px solid var(--border-secondary)",
        borderRadius: 4,
        cursor: "grab",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      },
      children: t
    });
  }
  function tu() {
    const [e, t] = U.useState(true);
    return x.jsxs("div", {
      style: {
        width: 168,
        background: "var(--bg-secondary)",
        border: "1px solid var(--border-primary)",
        borderRadius: 6,
        boxShadow: "0 2px 8px rgba(0,0,0,0.35)",
        fontSize: 12,
        color: "var(--text-primary)",
        userSelect: "none",
        overflow: "hidden"
      },
      children: [
        x.jsxs("button", {
          onClick: () => t((n) => !n),
          style: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "6px 8px",
            background: "var(--bg-tertiary)",
            color: "var(--text-primary)",
            border: "none",
            borderBottom: e ? "1px solid var(--border-primary)" : "none",
            cursor: "pointer",
            fontSize: 12,
            fontWeight: 600
          },
          "data-tooltip": "Drag a block onto the canvas to add it",
          "data-tooltip-placement": "bottom",
          "aria-expanded": e,
          children: [
            x.jsxs("span", {
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: 5
              },
              children: [
                x.jsx(yd, {
                  size: 16,
                  stroke: 2,
                  "aria-hidden": true
                }),
                " Drag to Add Block"
              ]
            }),
            x.jsx("span", {
              style: {
                color: "var(--text-tertiary)"
              },
              children: e ? "\u25BE" : "\u25B8"
            })
          ]
        }),
        e && x.jsx("div", {
          style: {
            padding: "6px 6px 8px",
            overflowY: "auto"
          },
          children: eu.map((n) => x.jsxs("div", {
            style: {
              marginBottom: 6
            },
            children: [
              x.jsxs("div", {
                style: {
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  color: "var(--text-tertiary)",
                  margin: "4px 2px",
                  display: "flex",
                  alignItems: "center",
                  gap: 4
                },
                children: [
                  (() => {
                    const r = Qd[n];
                    return x.jsx(r, {
                      size: 13,
                      stroke: 2
                    });
                  })(),
                  Zd[n]
                ]
              }),
              Vd(n).filter((r) => !r.hidden).flatMap((r) => r.type === "SynflowScalarDataSource" ? Ba.map((a) => x.jsx(Go, {
                type: r.type,
                waveform: a,
                label: Ta[a],
                title: `Drag to add a ${Ta[a]} scalar source`
              }, `${r.type}:${a}`)) : [
                x.jsx(Go, {
                  type: r.type,
                  label: r.label,
                  title: `Drag to add a ${r.label} (${r.type})`
                }, r.type)
              ])
            ]
          }, n))
        })
      ]
    });
  }
  const Ir = 200, Wa = (e) => Math.max(e ?? 1, 1);
  function nu(e, t, n) {
    const r = Wa(t);
    return Math.round(r * Math.pow(n / r, e / Ir));
  }
  function Ki(e, t, n) {
    const r = Wa(t);
    return Math.round(Ir * Math.log(Math.max(e, r) / r) / Math.log(n / r));
  }
  function Yi(e, t, n) {
    return Ki(e, t, n) / Ir * 100;
  }
  function ru(e, t) {
    const n = Wa(e), r = [], a = Math.ceil(Math.log2(n));
    for (let o = a; ; o++) {
      const s = 2 ** o;
      if (s > t) break;
      s < n || r.push({
        value: s,
        pct: Yi(s, e, t)
      });
    }
    return r;
  }
  const ca = (e, t, n) => Math.max(t, Math.min(n, e));
  function au({ spec: e, value: t, max: n, invalid: r, onChange: a }) {
    const o = e.kind === "int" || e.kind === "seed", s = (h) => o ? parseInt(h, 10) : parseFloat(h), i = e.scale === "log", c = e.min ?? 0, l = i ? Yi(t, e.min, n) : n > c ? (t - c) / (n - c) * 100 : 0, u = {
      "--bc-fill": `${Math.max(0, Math.min(100, l))}%`
    }, v = i ? ru(e.min, n) : [];
    return x.jsxs("div", {
      className: r ? "bc-field bc-invalid" : "bc-field",
      children: [
        x.jsx("label", {
          children: e.label
        }),
        x.jsx("input", {
          type: "number",
          min: e.min,
          max: n,
          step: e.step ?? 1,
          value: t,
          onChange: (h) => {
            const y = s(h.target.value);
            Number.isFinite(y) && a(y);
          }
        }),
        x.jsxs("div", {
          className: "bc-slider-cell",
          children: [
            i ? x.jsx("input", {
              type: "range",
              min: 0,
              max: Ir,
              step: 1,
              style: u,
              value: Ki(t, e.min, n),
              onChange: (h) => a(nu(Number(h.target.value), e.min, n))
            }) : x.jsx("input", {
              type: "range",
              min: e.min,
              max: n,
              step: e.step ?? 1,
              style: u,
              value: t,
              onChange: (h) => a(s(h.target.value))
            }),
            v.length > 0 && x.jsx("div", {
              className: "bc-ticks",
              "aria-hidden": "true",
              children: v.map((h) => x.jsx("span", {
                className: "bc-tick",
                style: {
                  left: `${h.pct}%`
                },
                "data-tooltip": String(h.value)
              }, h.value))
            }),
            x.jsxs("div", {
              className: "bc-bounds",
              "aria-hidden": "true",
              children: [
                x.jsx("span", {
                  children: c
                }),
                x.jsx("span", {
                  children: n
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function ou({ value: e, onChange: t }) {
    return x.jsxs("div", {
      className: "bc-field bc-field-seed",
      children: [
        x.jsx("label", {
          children: "seed"
        }),
        x.jsx("input", {
          type: "number",
          min: 0,
          step: 1,
          value: e,
          onChange: (n) => {
            const r = parseInt(n.target.value, 10);
            Number.isFinite(r) && t(r);
          }
        }),
        x.jsx(Me, {
          label: "Randomize seed",
          placement: "top",
          children: x.jsx("button", {
            type: "button",
            className: "bc-dice",
            "aria-label": "Randomize seed",
            onClick: () => t(Math.floor(Math.random() * 1e5)),
            children: x.jsx(sd, {
              size: 20,
              stroke: 2,
              "aria-hidden": true
            })
          })
        })
      ]
    });
  }
  function su({ trackMin: e, trackMax: t, step: n, lo: r, hi: a, invalid: o, onChange: s }) {
    const i = t - e || 1, c = (l) => (ca(l, e, t) - e) / i * 100;
    return x.jsxs("div", {
      className: o ? "bc-dual bc-invalid" : "bc-dual",
      children: [
        x.jsx("input", {
          type: "number",
          className: "bc-dual-val",
          step: n,
          value: r,
          onChange: (l) => {
            const u = parseFloat(l.target.value);
            Number.isFinite(u) && s(u, a);
          }
        }),
        x.jsxs("div", {
          className: "bc-dual-track",
          children: [
            x.jsx("div", {
              className: "bc-dual-fill",
              style: {
                left: `${c(r)}%`,
                width: `${Math.max(0, c(a) - c(r))}%`
              }
            }),
            x.jsx("input", {
              type: "range",
              min: e,
              max: t,
              step: n,
              value: ca(r, e, t),
              onChange: (l) => s(Math.min(parseFloat(l.target.value), a - n), a)
            }),
            x.jsx("input", {
              type: "range",
              min: e,
              max: t,
              step: n,
              value: ca(a, e, t),
              onChange: (l) => s(r, Math.max(parseFloat(l.target.value), r + n))
            })
          ]
        }),
        x.jsx("input", {
          type: "number",
          className: "bc-dual-val",
          step: n,
          value: a,
          onChange: (l) => {
            const u = parseFloat(l.target.value);
            Number.isFinite(u) && s(r, u);
          }
        })
      ]
    });
  }
  function iu({ type: e, onCreate: t, onCancel: n, initialValues: r, submitLabel: a = "Create", onRemove: o, renderPreview: s, renderAux: i }) {
    var _a2;
    const [c, l] = U.useState(false);
    U.useEffect(() => {
      const C = (D) => {
        D.key === "Escape" && (D.stopPropagation(), n());
      };
      return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
    }, [
      n
    ]);
    const u = U.useMemo(() => qi(e), [
      e
    ]), v = ((_a2 = vt(e)) == null ? void 0 : _a2.label) ?? e, h = a !== "Create", y = U.useMemo(() => u.find((C) => C.key === "min_val"), [
      u
    ]), S = U.useMemo(() => u.find((C) => C.key === "max_val"), [
      u
    ]), k = !!y && !!S, d = U.useMemo(() => {
      const C = Number((y == null ? void 0 : y.default) ?? 0), D = Number((S == null ? void 0 : S.default) ?? 1), j = D - C || 1;
      return {
        min: Math.max((y == null ? void 0 : y.min) ?? -1e3, C - j),
        max: Math.min((S == null ? void 0 : S.max) ?? 1e3, D + j),
        step: (y == null ? void 0 : y.step) ?? 0.1
      };
    }, [
      y,
      S
    ]), [f, p] = U.useState(() => {
      const C = {};
      for (const D of u) C[D.key] = (r == null ? void 0 : r[D.key]) ?? D.default;
      return C;
    }), b = (C, D) => p((j) => Ud(e, {
      ...j,
      [C]: D
    })), w = (C, D) => p((j) => ({
      ...j,
      min_val: C,
      max_val: D
    })), _ = Hd(e, f), g = U.useMemo(() => {
      const C = /* @__PURE__ */ new Set();
      return _.some((D) => /min value/.test(D)) && (C.add("min_val"), C.add("max_val")), _.some((D) => /min period/.test(D)) && (C.add("min_period"), C.add("max_period")), C;
    }, [
      _
    ]), m = [], P = /* @__PURE__ */ new Set();
    for (const C of u) P.has(C.key) || (C.key === "min_val" && k ? (P.add("min_val"), P.add("max_val"), m.push(x.jsxs("div", {
      className: "bc-dual-row",
      children: [
        x.jsx("label", {
          children: "range"
        }),
        x.jsx(su, {
          trackMin: d.min,
          trackMax: d.max,
          step: d.step,
          lo: Number(f.min_val),
          hi: Number(f.max_val),
          invalid: g.has("min_val"),
          onChange: w
        })
      ]
    }, "bounds"))) : C.kind === "bool" ? m.push(x.jsxs("label", {
      className: "bc-check",
      children: [
        x.jsx("input", {
          type: "checkbox",
          checked: !!f[C.key],
          onChange: (D) => b(C.key, D.target.checked)
        }),
        C.label
      ]
    }, C.key)) : C.kind === "seed" ? m.push(x.jsx(ou, {
      value: Number(f[C.key]),
      onChange: (D) => b(C.key, D)
    }, C.key)) : m.push(x.jsx(au, {
      spec: C,
      value: Number(f[C.key]),
      max: Bi(e, C.key, f) ?? C.max ?? 100,
      invalid: g.has(C.key),
      onChange: (D) => b(C.key, D)
    }, C.key)));
    const $ = !!s && c;
    return Nr.createPortal(x.jsx("div", {
      className: "bc-overlay",
      onClick: n,
      children: x.jsxs("div", {
        className: $ ? "bc-shell bc-shell-docked" : "bc-shell",
        onClick: (C) => C.stopPropagation(),
        children: [
          x.jsxs("div", {
            className: "bc-config-col",
            children: [
              x.jsxs("div", {
                className: "bc-card",
                children: [
                  x.jsxs("div", {
                    className: "bc-header",
                    children: [
                      x.jsx(Me, {
                        label: "Close (Esc)",
                        placement: "right",
                        children: x.jsx("button", {
                          type: "button",
                          className: "bc-close",
                          "aria-label": "Close",
                          onClick: n,
                          children: x.jsxs("svg", {
                            viewBox: "0 0 24 24",
                            width: "11",
                            height: "11",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            "aria-hidden": "true",
                            children: [
                              x.jsx("line", {
                                x1: "18",
                                y1: "6",
                                x2: "6",
                                y2: "18"
                              }),
                              x.jsx("line", {
                                x1: "6",
                                y1: "6",
                                x2: "18",
                                y2: "18"
                              })
                            ]
                          })
                        })
                      }),
                      x.jsxs("span", {
                        className: "bc-title",
                        children: [
                          h ? "Configure" : "New",
                          " ",
                          v
                        ]
                      }),
                      s && x.jsx(Me, {
                        label: c ? "Hide live preview" : "Show live preview",
                        placement: "left",
                        children: x.jsx("button", {
                          type: "button",
                          className: c ? "bc-preview-toggle active" : "bc-preview-toggle",
                          "aria-pressed": c,
                          "aria-label": c ? "Hide live preview" : "Show live preview",
                          onClick: () => l((C) => !C),
                          children: x.jsx(Mi, {
                            size: 22,
                            stroke: 2,
                            "aria-hidden": true
                          })
                        })
                      })
                    ]
                  }),
                  m,
                  _.length > 0 && x.jsx("ul", {
                    className: "bc-errors",
                    children: _.map((C) => x.jsxs("li", {
                      children: [
                        "\u26A0 ",
                        C
                      ]
                    }, C))
                  }),
                  x.jsxs("div", {
                    className: "bc-actions",
                    children: [
                      o && x.jsx("button", {
                        className: "bc-btn bc-btn-danger bc-btn-remove",
                        onClick: o,
                        children: "Remove"
                      }),
                      x.jsx("button", {
                        className: "bc-btn",
                        onClick: n,
                        children: "Cancel"
                      }),
                      x.jsx("button", {
                        className: "bc-btn bc-btn-primary",
                        onClick: () => t(f),
                        disabled: _.length > 0,
                        children: a
                      })
                    ]
                  })
                ]
              }),
              $ && i && x.jsx("div", {
                className: "bc-config-aux",
                children: i(f)
              })
            ]
          }),
          $ && x.jsx("div", {
            className: "bc-preview-dock",
            children: s(f)
          })
        ]
      })
    }), document.body);
  }
  function cu({ type: e, onCreate: t, onCancel: n, initialConfig: r, submitLabel: a = "Create", onRemove: o }) {
    const s = e === "SynflowDiscreteDataSource", i = a !== "Create", c = s ? null : Gd(r), [l, u] = U.useState((c == null ? void 0 : c.seriesType) ?? "sine"), [v, h] = U.useState(() => (c == null ? void 0 : c.values) ?? Ra("sine")), y = U.useMemo(() => [
      ...jt[l],
      ...zi
    ], [
      l
    ]), S = (r == null ? void 0 : r.patterns) ?? null, [k, d] = U.useState(S ? S.join(", ") : "A, B, C, D"), [f, p] = U.useState(() => s && r ? {
      patterns: S ?? [
        "A"
      ],
      iters: Number(r.iters ?? 1),
      recur: Number(r.recur ?? 1),
      loop_mode: String(r.loop_mode ?? "restart")
    } : Wi()), b = (g, m) => h((P) => ({
      ...P,
      [g]: m
    })), w = (g) => {
      u(g), h((m) => {
        const P = Ra(g);
        for (const $ of Object.keys(P)) m[$] !== void 0 && Number.isFinite(m[$]) && (P[$] = m[$]);
        return P;
      });
    }, _ = () => {
      if (s) {
        const g = k.split(",").map((m) => m.trim()).filter(Boolean);
        if (g.length === 0) return;
        t(Ui({
          ...f,
          patterns: g
        }));
      } else t(Vi(l, v));
    };
    return Nr.createPortal(x.jsx("div", {
      className: "bc-overlay",
      onClick: n,
      children: x.jsxs("div", {
        className: "bc-card",
        onClick: (g) => g.stopPropagation(),
        children: [
          x.jsxs("div", {
            className: "bc-header",
            children: [
              x.jsxs("span", {
                className: "bc-title",
                children: [
                  i ? "Configure" : "New",
                  " ",
                  s ? "Discrete Source" : "Scalar Source"
                ]
              }),
              x.jsx(Me, {
                label: "Close",
                placement: "right",
                children: x.jsx("button", {
                  type: "button",
                  className: "bc-close",
                  "aria-label": "Close",
                  onClick: n,
                  children: x.jsxs("svg", {
                    viewBox: "0 0 24 24",
                    width: "11",
                    height: "11",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": "true",
                    children: [
                      x.jsx("line", {
                        x1: "18",
                        y1: "6",
                        x2: "6",
                        y2: "18"
                      }),
                      x.jsx("line", {
                        x1: "6",
                        y1: "6",
                        x2: "18",
                        y2: "18"
                      })
                    ]
                  })
                })
              })
            ]
          }),
          s ? x.jsxs(x.Fragment, {
            children: [
              x.jsxs("div", {
                className: "bc-row",
                children: [
                  x.jsx("label", {
                    children: "patterns"
                  }),
                  x.jsx("input", {
                    className: "bc-input",
                    value: k,
                    onChange: (g) => d(g.target.value)
                  })
                ]
              }),
              x.jsxs("div", {
                className: "bc-row",
                children: [
                  x.jsx("label", {
                    children: "iters"
                  }),
                  x.jsx("input", {
                    type: "number",
                    className: "bc-input",
                    value: f.iters,
                    onChange: (g) => p((m) => ({
                      ...m,
                      iters: Number(g.target.value)
                    }))
                  })
                ]
              }),
              x.jsxs("div", {
                className: "bc-row",
                children: [
                  x.jsx("label", {
                    children: "persistence"
                  }),
                  x.jsx("input", {
                    type: "number",
                    className: "bc-input",
                    value: f.recur,
                    onChange: (g) => p((m) => ({
                      ...m,
                      recur: Number(g.target.value)
                    }))
                  })
                ]
              }),
              x.jsxs("div", {
                className: "bc-row",
                children: [
                  x.jsx("label", {
                    children: "loop mode"
                  }),
                  x.jsx("select", {
                    className: "bc-input",
                    value: f.loop_mode,
                    onChange: (g) => p((m) => ({
                      ...m,
                      loop_mode: g.target.value
                    })),
                    children: Yd.map((g) => x.jsx("option", {
                      value: g,
                      children: g
                    }, g))
                  })
                ]
              })
            ]
          }) : x.jsxs(x.Fragment, {
            children: [
              x.jsxs("div", {
                className: "bc-row",
                children: [
                  x.jsx("label", {
                    children: "waveform"
                  }),
                  x.jsx("select", {
                    className: "bc-input",
                    value: l,
                    onChange: (g) => w(g.target.value),
                    children: Ba.map((g) => x.jsx("option", {
                      value: g,
                      children: Ta[g]
                    }, g))
                  })
                ]
              }),
              y.map((g) => x.jsxs("div", {
                className: "bc-row",
                children: [
                  x.jsx("label", {
                    children: g.label
                  }),
                  x.jsx("input", {
                    type: "number",
                    step: g.step,
                    className: "bc-input",
                    value: v[g.key],
                    onChange: (m) => b(g.key, Number(m.target.value))
                  })
                ]
              }, g.key))
            ]
          }),
          x.jsxs("div", {
            className: "bc-actions",
            children: [
              o && x.jsx("button", {
                className: "bc-btn bc-btn-danger bc-btn-remove",
                onClick: o,
                children: "Remove"
              }),
              x.jsx("button", {
                className: "bc-btn",
                onClick: n,
                children: "Cancel"
              }),
              x.jsx("button", {
                className: "bc-btn bc-btn-primary",
                onClick: _,
                children: a
              })
            ]
          })
        ]
      })
    }), document.body);
  }
  function lu({ title: e = "Confirm", message: t, confirmLabel: n = "OK", cancelLabel: r = "Cancel", danger: a = false, onConfirm: o, onCancel: s }) {
    return U.useEffect(() => {
      const i = (c) => {
        c.key === "Escape" ? (c.stopPropagation(), s()) : c.key === "Enter" && (c.stopPropagation(), o());
      };
      return window.addEventListener("keydown", i, true), () => window.removeEventListener("keydown", i, true);
    }, [
      s,
      o
    ]), Nr.createPortal(x.jsx("div", {
      className: "bc-overlay",
      onClick: s,
      children: x.jsxs("div", {
        className: "bc-card bc-card-confirm",
        onClick: (i) => i.stopPropagation(),
        children: [
          x.jsxs("div", {
            className: "bc-header",
            children: [
              x.jsx("span", {
                className: "bc-swatch",
                style: {
                  background: a ? "var(--accent-red)" : "var(--accent-blue)"
                }
              }),
              x.jsx("span", {
                className: "bc-title",
                children: e
              }),
              x.jsx(Me, {
                label: "Close",
                placement: "right",
                children: x.jsx("button", {
                  type: "button",
                  className: "bc-close",
                  "aria-label": "Close",
                  onClick: s,
                  children: x.jsxs("svg", {
                    viewBox: "0 0 24 24",
                    width: "11",
                    height: "11",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    "aria-hidden": "true",
                    children: [
                      x.jsx("line", {
                        x1: "18",
                        y1: "6",
                        x2: "6",
                        y2: "18"
                      }),
                      x.jsx("line", {
                        x1: "6",
                        y1: "6",
                        x2: "18",
                        y2: "18"
                      })
                    ]
                  })
                })
              })
            ]
          }),
          x.jsx("div", {
            className: "bc-confirm-message",
            children: t
          }),
          x.jsxs("div", {
            className: "bc-actions",
            children: [
              x.jsx("button", {
                className: "bc-btn",
                onClick: s,
                autoFocus: true,
                children: r
              }),
              x.jsx("button", {
                className: a ? "bc-btn bc-btn-danger" : "bc-btn bc-btn-primary",
                onClick: o,
                children: n
              })
            ]
          })
        ]
      })
    }), document.body);
  }
  class du {
    constructor(t) {
      __publicField(this, "_value");
      __publicField(this, "listeners", /* @__PURE__ */ new Set());
      this._value = t;
    }
    get value() {
      return this._value;
    }
    set value(t) {
      if (Object.is(t, this._value)) return;
      const n = this._value;
      this._value = t, Array.from(this.listeners).forEach((r) => r(t, n));
    }
    update(t) {
      this.value = t(this._value);
    }
    notify() {
      Array.from(this.listeners).forEach((t) => t(this._value, this._value));
    }
    subscribe(t) {
      return this.listeners.add(t), () => this.listeners.delete(t);
    }
    clearListeners() {
      this.listeners.clear();
    }
  }
  function Ko(e) {
    return new du(e);
  }
  const uu = `
<div id="control-panels">

    <!-- Encoder configuration panel: two-column layout. -->
    <div class="controls encoder-config">
        <!-- Left column -->
        <div class="enc-config-left">
            <!-- Group 1: presets + view bounds -->
            <div class="enc-group">
                <div class="control-group">
                    <label>Demo Gallery</label>
                    <select id="preset-select"></select>
                </div>
                <div class="control-group">
                    <label>Plot X-Range</label>
                    <div id="view-bounds-slider" class="dual-range">
                        <input type="text" inputmode="decimal" class="dual-range-val" id="view-bounds-lo-val" value="-1.0" aria-label="Plot x-range minimum"/>
                        <div class="dual-range-track" id="view-bounds-track">
                            <div class="dual-range-fill" id="view-bounds-fill"></div>
                            <input type="range" id="view-bounds-lo" min="-5" max="6" step="0.1" value="-1.0"/>
                            <input type="range" id="view-bounds-hi" min="-5" max="6" step="0.1" value="2.0"/>
                        </div>
                        <input type="text" inputmode="decimal" class="dual-range-val" id="view-bounds-hi-val" value="2.0" aria-label="Plot x-range maximum"/>
                    </div>
                </div>
            </div>

            <!-- Group 2: add button + encoder cards -->
            <div class="enc-group enc-cards-group">
                <div class="control-group">
                    <label>Encoders</label>
                    <button id="enc-add">+ Add</button>
                    <button id="enc-reset" data-tooltip="Clear encoders and view bounds; keep subplot selection">Reset</button>
                </div>
                <div id="encoder-list"></div>
            </div>
        </div>

        <!-- Right column: title + (hidden) metrics -->
        <div class="enc-config-right">
            <span class="panel-title">Real Interval Encoder Analysis Tool</span>
        </div>
    </div>

    <!-- Hidden backing stores for chip-coupled controls -->
    <div style="display:none">
        <select id="view-select">
            <option value="bins-only">Bins</option>
        </select>
        <input type="hidden" id="ref-points" value=""/>
        <input type="checkbox" id="show-regions"/>
        <input type="checkbox" id="show-counts"/>
<!--        <input type="checkbox" id="folded-bins" checked/>-->
        <input type="checkbox" id="folded-bins"/>
    </div>

</div>

<div class="error-banner" id="error-banner"></div>

<div id="scalar-bits-panel"></div>

<div id="main-area">
    <div id="scalar-row">
        <div id="scalar-val-gutter"><span id="scalar-val">0.500</span></div>
        <div id="scalar-slider-wrap"><input type="range" id="scalar-slider" min="0" max="1" step="0.001" value="0.5"/></div>
        <div id="scalar-right-pad"></div>
    </div>

    <div id="center-col">
        <div id="subplot-panel">
            <div class="subplot-panel-title">Plot Control</div>
            <div id="subplot-chips"></div>
        </div>

        <div id="plot-container">
            <div id="loading"
                 style="display:none; position:absolute; inset:0; background:rgba(136,136,136,0.85); align-items:center; justify-content:center; font-size:1.1rem; color:#111111; z-index:10; border-radius:8px;">
                Analyzing\u2026
            </div>
            <div id="empty-plot-msg">No subplots enabled \u2014 click a chip to visualize</div>
        </div>
    </div>
</div>

<div id="ref-point-popup" style="display:none">
    <div class="ref-point-popup-range">
        <span id="ref-point-popup-lo"></span>
        <span id="ref-point-popup-hi"></span>
    </div>
    <input type="range" id="ref-point-popup-slider"/>
    <div class="ref-point-popup-val">
        <span id="ref-point-popup-valtext"></span>
    </div>
    <div class="ref-point-popup-btns">
        <button id="ref-point-popup-cancel">Cancel</button>
        <button id="ref-point-popup-add">Add</button>
    </div>
</div>
`;
  function pu() {
    const e = document.getElementById("view-bounds-lo"), t = document.getElementById("view-bounds-hi");
    return !e || !t ? Ia : [
      parseFloat(e.value),
      parseFloat(t.value)
    ];
  }
  function yt(e, t, n) {
    return Math.max(t, Math.min(n, e));
  }
  function be(e) {
    return e.toFixed(2);
  }
  function En(e) {
    const t = document.createElement("input");
    return t.type = "text", t.className = "enc-n-val", t.setAttribute("inputmode", "decimal"), t.spellcheck = false, t.value = e, t;
  }
  function mu(e) {
    return e.toFixed(1);
  }
  function Yo(e) {
    const t = document.createElement("div");
    t.className = "n-tick-row";
    const n = () => {
      const r = parseFloat(e.min), a = parseFloat(e.max);
      t.replaceChildren(...[
        r,
        a
      ].map((o) => {
        const s = document.createElement("span");
        return s.textContent = mu(o), s;
      }));
    };
    return n(), new MutationObserver(n).observe(e, {
      attributes: true,
      attributeFilter: [
        "min",
        "max"
      ]
    }), t;
  }
  function Cn(e, t, n, r = false) {
    const a = () => {
      t.classList.add("enc-val-invalid"), setTimeout(() => t.classList.remove("enc-val-invalid"), 600), t.value = n(parseFloat(e.value));
    }, o = () => {
      const s = parseFloat(t.value.trim()), i = parseFloat(e.min), c = parseFloat(e.max), l = parseFloat(e.step) || 1;
      if (!isFinite(s)) {
        a();
        return;
      }
      if (r && !Number.isInteger(s)) {
        a();
        return;
      }
      let u = Math.min(c, Math.max(i, s));
      u = i + Math.round((u - i) / l) * l, u = Math.min(c, Math.max(i, u)), e.value = String(u), t.value = n(parseFloat(e.value)), t.classList.remove("enc-val-invalid"), e.dispatchEvent(new Event("input", {
        bubbles: true
      }));
    };
    t.addEventListener("keydown", (s) => {
      s.key === "Enter" && (s.preventDefault(), o(), t.blur());
    }), t.addEventListener("change", o), t.addEventListener("blur", o);
  }
  let Ji = 0;
  const la = {
    "periodic-fixed": "Periodic: Fixed Weight",
    "periodic-cell": "Periodic: Multi-Scale Cells",
    "periodic-random-cell": "Periodic: Random Cells",
    "interval-random-cell": "Interval: Random Cells",
    "interval-fixed": "Interval: Fixed Weight",
    "interval-tapering": "Interval: Tapering Weight"
  }, fu = {
    type: "periodic-fixed",
    n: 13,
    w: 1,
    lower_bound: 0,
    upper_bound: 1
  };
  function Xi(e = {}, t) {
    const n = {
      ...fu,
      ...e
    }, r = document.createElement("div");
    r.className = "enc-row", r.dataset.colorIdx = String(Ji++), r.dataset.type = n.type;
    const a = document.createElement("div");
    a.className = "enc-header-row";
    const o = document.createElement("span");
    o.className = "enc-type-label", o.textContent = la[n.type];
    const s = document.createElement("button");
    s.className = "enc-edit-btn", s.type = "button", s.textContent = "\u22EE", s.dataset.tooltip = "Edit parameters", s.setAttribute("aria-label", "Edit parameters");
    const i = document.createElement("button");
    i.className = "enc-remove", i.textContent = "\xD7", i.dataset.tooltip = "Remove this encoder", a.append(i, o, s), r.appendChild(a), s.addEventListener("click", (m) => {
      m.stopPropagation(), vu(r);
    });
    const c = document.createElement("div");
    c.className = "n-slider-row enc-type-row";
    const l = document.createElement("span");
    l.className = "enc-slider-label", l.textContent = "type";
    const u = document.createElement("select");
    u.className = "enc-type", [
      "periodic-fixed",
      "periodic-cell",
      "periodic-random-cell",
      "interval-random-cell",
      "interval-fixed",
      "interval-tapering"
    ].forEach((m) => {
      const P = document.createElement("option");
      P.value = m, P.textContent = la[m], m === n.type && (P.selected = true), u.appendChild(P);
    });
    const v = document.createElement("span");
    v.className = "enc-type-help enc-help-cell", c.append(l, v, u);
    function h() {
      v.replaceChildren(_t(`encoderType.${r.dataset.type}`));
    }
    function y() {
      const m = r.dataset.type === "periodic-fixed", P = [
        [
          ".enc-n",
          "param.n"
        ],
        [
          ".enc-w",
          "param.w"
        ],
        [
          ".enc-offset",
          "param.offset"
        ],
        [
          ".enc-range",
          m ? "param.period" : "param.range"
        ],
        [
          ".enc-period-rand",
          "param.period"
        ],
        [
          ".enc-min-period",
          "param.min_period"
        ],
        [
          ".enc-max-period",
          "param.max_period"
        ],
        [
          ".enc-l-frac",
          "param.l_frac"
        ],
        [
          ".enc-l-frac-rand",
          "param.l_frac"
        ],
        [
          ".enc-reshuffle",
          "param.seed"
        ]
      ], $ = Ua(r);
      for (const [C, D] of P) {
        const j = $.querySelector(C);
        if (!j) continue;
        const B = j.closest(".n-slider-row") ?? j.parentElement;
        if (B && !B.querySelector(".enc-help-cell")) {
          const W = _t(D);
          W.classList.add("enc-help-cell");
          const H = B.querySelector(".enc-slider-label");
          H && H.nextSibling ? B.insertBefore(W, H.nextSibling) : B.appendChild(W);
        }
      }
    }
    const S = document.createElement("span");
    S.className = "enc-shorthand", r.appendChild(S);
    const k = document.createElement("div");
    k.className = "enc-mini-bits", r.appendChild(k), ja(r, n.n);
    const d = document.createElement("div");
    d.className = "enc-body", r.appendChild(d);
    function f(m, P) {
      d.innerHTML = "";
      const $ = Math.max(Bc, P.n), C = Math.max(ko, Math.min($, P.n)), D = Math.max(1, Math.floor(C / 2)), j = document.createElement("div");
      j.className = "n-slider-row";
      const B = document.createElement("span");
      B.className = "enc-slider-label", B.textContent = "n";
      const W = document.createElement("input");
      W.type = "range", W.className = "enc-n", W.min = String(ko), W.max = String($), W.step = "1", W.value = String(C);
      const H = En(String(C));
      j.append(B, W, H), Cn(W, H, String, true);
      const X = document.createElement("div");
      X.className = "n-tick-row", zc.forEach((q) => {
        const J = document.createElement("span");
        J.textContent = q, X.appendChild(J);
      });
      const ce = document.createElement("div");
      ce.className = "n-slider-row";
      const oe = document.createElement("span");
      oe.className = "enc-slider-label", oe.textContent = "w";
      const Q = document.createElement("input");
      Q.type = "range", Q.className = "enc-w", Q.min = "1", Q.max = String(D), Q.step = "1";
      const G = Math.max(1, Math.min(D, P.w));
      Q.value = String(G);
      const T = En(String(G));
      ce.append(oe, Q, T), Cn(Q, T, String, true);
      const z = document.createElement("div");
      z.className = "n-tick-row";
      function M(q) {
        const J = [
          .../* @__PURE__ */ new Set([
            1,
            q
          ])
        ];
        z.innerHTML = J.map((le) => `<span>${le}</span>`).join("");
      }
      M(D), Q.addEventListener("input", () => {
        T.value = Q.value;
      }), W.addEventListener("input", () => {
        H.value = W.value;
        const q = Math.max(1, Math.floor(parseInt(W.value, 10) / 2));
        Q.max = String(q), parseInt(Q.value, 10) > q && (Q.value = String(q), T.value = String(q)), M(q);
      });
      const [E, I] = t ?? pu(), V = yt(P.upper_bound - P.lower_bound, qe, I - E), ne = yt(P.lower_bound, E, I - V), ee = g("offset", "enc-offset", E, I - V, ne), ae = g(m === "periodic-fixed" ? "period" : "range", "enc-range", qe, I - ne, V), R = m === "periodic-cell", F = m === "periodic-random-cell", Y = m === "interval-random-cell";
      if (R || F || Y ? d.append(c, j, X, ee.row, ee.tickRow, ae.row, ae.tickRow) : d.append(c, j, X, ce, z, ee.row, ee.tickRow, ae.row, ae.tickRow), ee.slider.addEventListener("input", () => {
        let q = parseFloat(ee.slider.value);
        const J = parseFloat(ae.slider.value), le = I - J;
        q > le && (q = le, ee.slider.value = String(q)), ee.valSpan.value = be(q), ae.slider.max = String(I - q);
      }), ae.slider.addEventListener("input", () => {
        const q = parseFloat(ae.slider.value);
        ae.valSpan.value = be(q);
        const J = parseFloat(ee.slider.value), le = I - q;
        ee.slider.max = String(le), J > le && (ee.slider.value = String(le), ee.valSpan.value = be(le));
      }), R) {
        const q = I - E, J = Math.min(Math.max($a, P.max_period ?? 0, P.min_period ?? 0), q), le = yt(P.max_period ?? Po, Rt, J), ge = yt(P.min_period ?? Vc, Rt, le), xe = yt(P.l_frac ?? Eo, bn, vn), se = _("min_period", "enc-min-period", Rt, le, ge), he = _("max_period", "enc-max-period", ge, J, le), Pe = _("duty cycle", "enc-l-frac", bn, vn, xe, No);
        d.append(se.row, se.tickRow, he.row, he.tickRow, Pe.row, Pe.tickRow), se.slider.addEventListener("input", () => {
          let pe = parseFloat(se.slider.value);
          const Te = parseFloat(he.slider.value);
          pe > Te && (pe = Te, se.slider.value = String(pe)), se.valSpan.value = be(pe), he.slider.min = String(pe);
        }), he.slider.addEventListener("input", () => {
          let pe = parseFloat(he.slider.value);
          const Te = parseFloat(se.slider.value);
          pe < Te && (pe = Te, he.slider.value = String(pe)), he.valSpan.value = be(pe), se.slider.max = String(pe);
        }), Pe.slider.addEventListener("input", () => {
          Pe.valSpan.value = be(parseFloat(Pe.slider.value));
        });
      }
      if (F) {
        const q = I - E, J = Math.min($a, q), le = yt(P.const_period ?? P.max_period ?? Po, Rt, J), ge = yt(P.const_l_frac ?? P.max_l_frac ?? Eo, bn, vn);
        b(ee.row, "enc-rand-origin", P.randomize_origins ?? false, ee.slider);
        const xe = w("period", "enc-period-rand", Rt, J, le, Co, "enc-rand-period", P.randomize_periods ?? false), se = w("duty cycle", "enc-l-frac-rand", bn, vn, ge, No, "enc-rand-l-frac", P.randomize_l_frac ?? false), he = p(r);
        d.append(xe.row, xe.tickRow, se.row, se.tickRow, he), xe.slider.addEventListener("input", () => {
          xe.valSpan.value = be(parseFloat(xe.slider.value));
        }), se.slider.addEventListener("input", () => {
          se.valSpan.value = be(parseFloat(se.slider.value));
        });
      }
      if (Y) {
        const q = I - E, J = Math.min(q, qe * 100), le = yt(P.const_l ?? P.max_l ?? 0.1, qe, J), ge = w("l (bin size)", "enc-l-rand", qe, q, le, qe, "enc-rand-l", P.randomize_l ?? false), xe = p(r);
        d.append(ge.row, ge.tickRow, xe), ge.slider.addEventListener("input", () => {
          ge.valSpan.value = be(parseFloat(ge.slider.value));
        });
      }
      if (F || Y) {
        const q = P.seed ?? Math.floor(Math.random() * 1e6);
        r.dataset.seed = String(q);
      }
    }
    function p(m) {
      const P = document.createElement("div");
      P.className = "n-slider-row enc-reshuffle-row";
      const $ = document.createElement("span");
      $.className = "enc-slider-label", $.textContent = "seed", P.appendChild($);
      const C = document.createElement("button");
      return C.className = "enc-reshuffle", C.type = "button", C.textContent = "\u{1F3B2} Reshuffle", C.dataset.tooltip = "Resample random parameters", C.addEventListener("click", () => {
        const D = parseInt(m.dataset.seed ?? "0", 10);
        m.dataset.seed = String(D + 1 >>> 0), m.dispatchEvent(new Event("input", {
          bubbles: true
        }));
      }), P.appendChild(C), P;
    }
    function b(m, P, $, C) {
      const D = document.createElement("input");
      D.type = "checkbox", D.className = `${P} enc-rand-icon`, D.checked = $, D.setAttribute("aria-label", "Randomize this parameter");
      const j = () => {
        D.dataset.tooltip = D.checked ? "Randomize: ON \u2014 slider sets the upper bound; values sampled uniformly in [min, slider]" : "Randomize: OFF \u2014 slider sets the constant value. Click to toggle.", D.checked ? C.dataset.tooltip = "Upper bound \u2014 values sampled uniformly in [min, this]" : delete C.dataset.tooltip;
      };
      return j(), D.addEventListener("change", j), m.appendChild(D), D;
    }
    function w(m, P, $, C, D, j, B, W) {
      const H = _(m, P, $, C, D, j), X = b(H.row, B, W, H.slider);
      return {
        ...H,
        toggle: X
      };
    }
    function _(m, P, $, C, D, j = Co) {
      const B = document.createElement("div");
      B.className = "n-slider-row";
      const W = document.createElement("span");
      W.className = "enc-slider-label", W.textContent = m;
      const H = document.createElement("input");
      H.type = "range", H.className = P, H.min = String($), H.max = String(C), H.step = String(j), H.value = String(D);
      const X = En(be(D));
      B.append(W, H, X), Cn(H, X, be);
      const ce = Yo(H);
      return {
        row: B,
        slider: H,
        valSpan: X,
        tickRow: ce
      };
    }
    function g(m, P, $, C, D) {
      const j = document.createElement("div");
      j.className = "n-slider-row";
      const B = document.createElement("span");
      B.className = "enc-slider-label", B.textContent = m;
      const W = document.createElement("input");
      W.type = "range", W.className = P, W.min = String($), W.max = String(C), W.step = String(qe), W.value = String(D);
      const H = En(be(D));
      j.append(B, W, H), Cn(W, H, be);
      const X = Yo(W);
      return {
        row: j,
        slider: W,
        valSpan: H,
        tickRow: X
      };
    }
    return f(n.type, n), h(), y(), da(r, S), u.addEventListener("change", () => {
      const m = u.value, P = _r(r);
      r.dataset.type = m, o.textContent = la[m];
      const $ = {
        ...P
      };
      f(m, $), h(), y(), da(r, S), r.dispatchEvent(new Event("input", {
        bubbles: true
      }));
    }), r.addEventListener("input", () => {
      da(r, S);
      const m = _r(r);
      ja(r, m.n);
    }), r;
  }
  const hu = "#000000";
  function ja(e, t) {
    const n = e.querySelector(".enc-mini-bits");
    if (!n) return;
    const r = parseInt(e.dataset.colorIdx ?? "0", 10), a = ut(r);
    if (n.childElementCount !== t) {
      n.replaceChildren();
      for (let o = 0; o < t; o++) {
        const s = document.createElement("span");
        s.className = "enc-mini-bit", s.style.background = a, n.appendChild(s);
      }
    }
  }
  function yu(e, t) {
    const n = e.querySelector(".enc-mini-bits");
    if (!n) return;
    const r = parseInt(e.dataset.colorIdx ?? "0", 10), a = ut(r), o = n.children, s = Math.min(o.length, t.length);
    for (let i = 0; i < s; i++) o[i].style.background = t[i] ? hu : a;
  }
  function Nn(e, t, n) {
    if (!e || !Array.isArray(e.codes) || e.codes.length === 0) return;
    const r = Math.max(0, dt(e.boundaries, t)), a = e.codes[r];
    if (!a) return;
    n.querySelectorAll(".enc-row").forEach((s, i) => {
      var _a2, _b;
      const c = (_a2 = e.sub_encoders) == null ? void 0 : _a2[i];
      if (!c) return;
      const l = ((_b = c.bit_range) == null ? void 0 : _b[0]) ?? 0, u = c.n_bits ?? 0, v = s.querySelector(".enc-mini-bits");
      v && v.childElementCount !== u && ja(s, u), yu(s, a.slice(l, l + u));
    });
  }
  let Ne = null, Ke = null, Ye = null;
  function Ua(e) {
    const t = e.querySelector(".enc-body");
    if (t) return t;
    if (Ye === e && Ke) {
      const n = Ke.querySelector(".enc-body");
      if (n) return n;
    }
    return e;
  }
  function gu() {
    if (Ne) return Ne;
    Ne = document.createElement("div"), Ne.id = "enc-edit-popup", Ne.style.display = "none";
    const e = document.createElement("div");
    e.className = "enc-edit-popup-header";
    const t = document.createElement("span");
    t.className = "enc-edit-popup-title", t.textContent = "Edit encoder";
    const n = document.createElement("button");
    n.type = "button", n.className = "enc-edit-popup-close", n.textContent = "\xD7", n.setAttribute("aria-label", "Close"), n.addEventListener("click", Dr), e.append(t, n), Ke = document.createElement("div"), Ke.className = "enc-edit-popup-body";
    const r = (a) => {
      Ke.addEventListener(a, () => {
        Ye && Ye.dispatchEvent(new Event(a, {
          bubbles: true
        }));
      });
    };
    return r("input"), r("change"), Ne.append(e, Ke), document.body.appendChild(Ne), Ne;
  }
  function _u(e) {
    if (!Ne) return;
    const t = e.getBoundingClientRect(), n = Ne.offsetWidth || 320, r = Ne.offsetHeight || 360, a = 8;
    let o = t.right + a;
    o + n > window.innerWidth - a && (o = t.left - n - a), o = Math.max(a, Math.min(o, window.innerWidth - n - a));
    let s = t.top;
    s = Math.max(a, Math.min(s, window.innerHeight - r - a)), Ne.style.left = `${o}px`, Ne.style.top = `${s}px`;
  }
  function Zi(e) {
    if (!Ne || !Ye) return;
    const t = e.target;
    Ne.contains(t) || t instanceof Element && t.closest(".help-drawer, .help-backdrop, .help-popover") || Dr();
  }
  function Qi(e) {
    e.key === "Escape" && Dr();
  }
  function vu(e) {
    if (Ye === e) {
      Dr();
      return;
    }
    const t = gu(), n = e.querySelector(".enc-body");
    if (!(!n || !Ke)) {
      if (Ye) {
        const r = Ke.querySelector(".enc-body");
        r && Ye.appendChild(r);
      }
      Ye = e, Ke.appendChild(n), t.style.display = "block", _u(e), setTimeout(() => {
        document.addEventListener("click", Zi), document.addEventListener("keydown", Qi);
      }, 0);
    }
  }
  function Dr() {
    if (!Ne || !Ye || !Ke) return;
    const e = Ke.querySelector(".enc-body");
    e && Ye.appendChild(e), Ne.style.display = "none", Ye = null, document.removeEventListener("click", Zi), document.removeEventListener("keydown", Qi);
  }
  function bu(e) {
    const t = _r(e), n = be(t.lower_bound), r = be(t.upper_bound), a = `[${n}, ${r}]`;
    switch (t.type) {
      case "interval-fixed":
      case "interval-tapering":
        return `n=${t.n} w=${t.w} ${a}`;
      case "periodic-fixed":
        return `n=${t.n} w=${t.w} ${a} T=${be(t.period ?? 0)}`;
      case "periodic-cell":
        return `n=${t.n} ${a} T=[${be(t.min_period ?? 0)}, ${be(t.max_period ?? 0)}] l=${be(t.l_frac ?? 0)}`;
      case "periodic-random-cell": {
        const o = t.randomize_periods ? "*" : "", s = t.randomize_l_frac ? "*" : "", i = t.randomize_periods ? `T\u2264${be(t.max_period ?? t.const_period ?? 0)}${o}` : `T=${be(t.const_period ?? 0)}`, c = t.randomize_l_frac ? `l\u2264${be(t.max_l_frac ?? t.const_l_frac ?? 0)}${s}` : `l=${be(t.const_l_frac ?? 0)}`, l = t.randomize_origins || t.randomize_periods || t.randomize_l_frac ? " \u{1F3B2}" : "";
        return `n=${t.n} ${a} ${i} ${c}${l}`;
      }
      case "interval-random-cell": {
        const o = t.randomize_l ? `l\u2264${be(t.max_l ?? t.const_l ?? 0)}*` : `l=${be(t.const_l ?? 0)}`, s = t.randomize_l ? " \u{1F3B2}" : "";
        return `n=${t.n} ${a} ${o} ${s}`;
      }
    }
  }
  function da(e, t) {
    t.textContent = bu(e);
  }
  function _r(e) {
    const t = Ua(e), n = e.dataset.type ?? "interval-fixed", r = parseInt(t.querySelector(".enc-n").value, 10), a = t.querySelector(".enc-w"), o = a ? parseInt(a.value, 10) : 1, s = parseFloat(t.querySelector(".enc-offset").value), i = parseFloat(t.querySelector(".enc-range").value), c = n === "periodic-fixed" ? i : void 0, l = {
      type: n,
      n: r,
      w: o,
      lower_bound: s,
      upper_bound: s + i,
      period: c
    };
    if (n === "periodic-cell") {
      const u = t.querySelector(".enc-min-period"), v = t.querySelector(".enc-max-period"), h = t.querySelector(".enc-l-frac");
      u && v && h && (l.min_period = parseFloat(u.value), l.max_period = parseFloat(v.value), l.l_frac = parseFloat(h.value));
    }
    if (n === "periodic-random-cell") {
      const u = t.querySelector(".enc-period-rand"), v = t.querySelector(".enc-l-frac-rand"), h = t.querySelector(".enc-rand-origin"), y = t.querySelector(".enc-rand-period"), S = t.querySelector(".enc-rand-l-frac");
      if (u && v) {
        const d = parseFloat(u.value), f = parseFloat(v.value);
        l.const_period = d, l.max_period = d, l.const_l_frac = f, l.max_l_frac = f, l.const_origin = s;
      }
      l.randomize_origins = (h == null ? void 0 : h.checked) ?? false, l.randomize_periods = (y == null ? void 0 : y.checked) ?? false, l.randomize_l_frac = (S == null ? void 0 : S.checked) ?? false;
      const k = e.dataset.seed;
      k && (l.seed = parseInt(k, 10));
    }
    if (n === "interval-random-cell") {
      const u = t.querySelector(".enc-l-rand"), v = t.querySelector(".enc-rand-l");
      if (u) {
        const y = parseFloat(u.value);
        l.const_l = y, l.max_l = y;
      }
      l.randomize_l = (v == null ? void 0 : v.checked) ?? false;
      const h = e.dataset.seed;
      h && (l.seed = parseInt(h, 10));
    }
    return l;
  }
  function xu(e, t, n) {
    var _a2, _b, _c2, _d2;
    const r = Ua(e), a = r.querySelector(".enc-offset"), o = r.querySelector(".enc-range");
    if (!a || !o) return;
    const s = (_a2 = a.parentElement) == null ? void 0 : _a2.querySelector(".enc-n-val"), i = (_b = o.parentElement) == null ? void 0 : _b.querySelector(".enc-n-val"), c = parseFloat(a.value), l = parseFloat(o.value), u = Math.max(qe, Math.min(l, n - t));
    o.min = String(qe), o.max = String(n - t), u !== l && (o.value = String(u), i && (i.value = be(u)));
    const v = Math.max(t, Math.min(c, n - u));
    a.min = String(t), a.max = String(n - u), v !== c && (a.value = String(v), s && (s.value = be(v))), o.max = String(n - v);
    const h = r.querySelector(".enc-max-period"), y = r.querySelector(".enc-min-period");
    if (h && y) {
      const S = Math.min($a, n - t), k = (_c2 = h.parentElement) == null ? void 0 : _c2.querySelector(".enc-n-val"), d = (_d2 = y.parentElement) == null ? void 0 : _d2.querySelector(".enc-n-val"), f = parseFloat(h.value), p = Math.max(Rt, Math.min(f, S));
      h.max = String(S), p !== f && (h.value = String(p), k && (k.value = be(p)));
      const b = parseFloat(y.value), w = Math.max(Rt, Math.min(b, p));
      y.max = String(p), w !== b && (y.value = String(w), d && (d.value = be(w)));
    }
  }
  function Vt(e, t, n) {
    Ji = 0, e.innerHTML = "", t.forEach((r) => e.appendChild(Xi(r, n))), Oa(e);
  }
  function Oa(e) {
    e.querySelectorAll(".enc-row").forEach((n) => {
      const r = n.querySelector(".enc-remove");
      r.style.visibility = "visible";
      const a = parseInt(n.dataset.colorIdx ?? "0", 10), o = ut(a);
      n.style.background = Na(o, 1), n.style.borderColor = Na("#000", 1);
    });
  }
  function nn(e) {
    const t = e.querySelectorAll(".enc-row");
    return t.length === 0 ? null : Array.from(t).map((n) => _r(n));
  }
  const Jo = {
    addRemoveEncoders: "add-remove",
    encoderCards: "enc-cards",
    encoderControls: "enc-controls",
    plotControls: "plot-controls",
    bitPanels: "bit-panels",
    cursorSlider: "cursor-slider",
    demoSelector: "demo-selector",
    viewportRange: "viewport-range",
    encoderPanel: "enc-panel",
    plotPanel: "plot-panel"
  };
  function Su(e, t) {
    const n = {
      addRemoveEncoders: true,
      encoderCards: true,
      encoderControls: true,
      plotControls: true,
      bitPanels: true,
      cursorSlider: true,
      demoSelector: true,
      viewportRange: true,
      encoderPanel: true,
      plotPanel: true,
      compactPlotControls: false,
      ...t
    };
    if (t) {
      e.setAttribute("data-embed", "");
      for (const r of Object.keys(Jo)) n[r] === false && e.classList.add(`embed-no-${Jo[r]}`);
    }
    return n;
  }
  const wu = "#0064a3";
  function ku() {
    let e = false, t = false, n = false, r = false, a = ta, o = 3, s = [], i = -1, c = NaN, l = [], u = [], v = [], h = [], y = null, S = null, k = null;
    function d() {
      if (y) {
        if (y.innerHTML = "", l.length > 0) {
          const m = isFinite(c) ? c.toFixed(3) : "\u2014";
          y.appendChild(f(l, m, wu));
        }
        u.forEach((m, P) => {
          y.appendChild(f(m, v[P].toFixed(3), h[P] ?? null));
        });
      }
    }
    function f(m, P, $) {
      const C = document.createElement("div");
      C.className = "bp-row";
      const D = document.createElement("div");
      if (D.className = "bp-row-label", $) {
        const H = document.createElement("span");
        H.style.cssText = `display:inline-block;width:8px;height:8px;background:${$};border-radius:50%;flex-shrink:0`, D.appendChild(H);
      }
      const j = document.createElement("span");
      j.textContent = P, D.appendChild(j), C.appendChild(D);
      const B = document.createElement("div");
      B.className = "bp-squares-wrap";
      let W = Array.from({
        length: m.length
      }, (H, X) => X);
      t && (n && W.sort((H, X) => (m[X] ?? 0) - (m[H] ?? 0)), r && (W = W.filter((H) => (m[H] ?? 0) === 1)));
      for (const H of W) {
        const X = m[H] ?? 0;
        let ce, oe;
        X === 1 ? (ce = e ? s[H] ?? $o : "#111111", oe = Hc) : (ce = Gc, oe = Kc);
        const Q = String(t ? H : X), G = Q.length, T = Wc[G] ?? Uc, z = Math.max(6, Math.round(T * (a / ta))), M = document.createElement("div");
        M.style.cssText = [
          `width:${a}px`,
          `height:${a}px`,
          `background:${ce}`,
          `border:${o}px solid #000`,
          "display:flex",
          "align-items:center",
          "justify-content:center",
          `font-size:${z}px`,
          "font-family:monospace",
          "font-weight:bold",
          `color:${oe}`,
          "flex-shrink:0",
          "box-sizing:border-box"
        ].join(";"), M.textContent = Q, M.dataset.tooltip = `bit ${H}`, B.appendChild(M);
      }
      return C.appendChild(B), C;
    }
    function p(m, P, $ = [], C = [], D = [], j) {
      P.innerHTML = "";
      const B = !!P.closest("[data-embed]");
      a = B ? Yc : ta, o = B ? 1 : 3, i = -1, c = NaN, l = [], s = new Array(m.n_bits).fill($o), m.sub_encoders.forEach((G, T) => {
        var _a2;
        const z = ((_a2 = G.bit_range) == null ? void 0 : _a2[0]) ?? 0, M = G.n_bits ?? 0, E = D[T] ?? ut(T);
        for (let I = 0; I < M; I++) s[z + I] = E;
      }), v = $.slice(), h = C.slice(), u = $.map((G) => {
        const T = Math.max(0, dt(m.boundaries, G));
        return m.codes[T] ?? [];
      });
      const W = document.createElement("div");
      W.className = "chip-controls";
      let H, X;
      const ce = () => {
        const G = t;
        [
          H,
          X
        ].forEach((T) => {
          T.disabled = !G, T.style.opacity = G ? "" : "0.4", T.style.cursor = G ? "" : "not-allowed";
        });
      }, oe = document.createElement("button");
      oe.className = "chip-toggle-btn" + (e ? " active" : ""), oe.textContent = "Color-Coded", oe.addEventListener("click", () => {
        e = !e, oe.classList.toggle("active", e), d();
      });
      const Q = document.createElement("button");
      Q.className = "chip-toggle-btn" + (t ? " active" : ""), Q.textContent = "Show Index", Q.addEventListener("click", () => {
        t = !t, Q.classList.toggle("active", t), ce(), d();
      }), H = document.createElement("button"), H.className = "chip-toggle-btn" + (n ? " active" : ""), H.textContent = "Sort by Active", H.addEventListener("click", () => {
        n = !n, H.classList.toggle("active", n), d();
      }), X = document.createElement("button"), X.className = "chip-toggle-btn" + (r ? " active" : ""), X.textContent = "Hide 0s", X.addEventListener("click", () => {
        r = !r, X.classList.toggle("active", r), d();
      }), ce(), W.append(_t("control.bitsPanel"), oe, Q, H, X), k = j ?? null, S = document.createElement("div"), S.className = "bp-ref-slot", W.appendChild(S), k && k(S), P.appendChild(W), y = document.createElement("div"), y.className = "bp-rows", P.appendChild(y), P.style.display = "flex", P.style.flexDirection = "column";
    }
    function b() {
      S && k && k(S);
    }
    function w(m) {
      m.innerHTML = "", s = [], l = [], c = NaN, u = [], v = [], h = [], y = null, S = null, k = null, i = -1;
      const P = document.createElement("div");
      P.className = "bits-panel-placeholder", P.textContent = "Add encoders to see bit codes here", m.appendChild(P), m.style.display = "flex";
    }
    function _(m, P, $) {
      y && (v = P.slice(), h = $.slice(), u = P.map((C) => {
        const D = Math.max(0, dt(m.boundaries, C));
        return m.codes[D] ?? [];
      }), d());
    }
    function g(m, P, $ = [], C = []) {
      if (!y || !isFinite(P)) return;
      ($.length !== v.length || $.some((j, B) => j !== v[B])) && (v = $.slice(), h = C.slice(), u = $.map((j) => {
        const B = Math.max(0, dt(m.boundaries, j));
        return m.codes[B] ?? [];
      }));
      const D = dt(m.boundaries, P);
      D === i && P === c || (c = P, i = D, l = m.codes[D] ?? [], d());
    }
    return {
      buildBitsPanelStructure: p,
      refreshBitsPanelRefControls: b,
      showBitsPanelPlaceholder: w,
      refreshBitsPanelRefs: _,
      updateBitsPanelScalar: g
    };
  }
  function Xo(e, t) {
    const n = t ?? {};
    switch (e) {
      case "bins":
        return [
          {
            id: "fold",
            glyph: "\u229F",
            title: "Fold bins into one period",
            active: !!n.folded
          }
        ];
      case "bits-by-data":
        return [
          {
            id: "boundaries",
            glyph: "\u2261",
            title: "Show region boundaries",
            active: n.gap === 1
          }
        ];
      case "projected-similarity":
        return [
          {
            id: "boundaries",
            glyph: "\u2261",
            title: "Show region boundaries",
            active: n.gap === 1
          },
          {
            id: "counts",
            glyph: "#",
            title: "Show similarity values",
            active: !!n.showText
          }
        ];
      default:
        return [];
    }
  }
  function ec(e, t, n = {}) {
    const r = n.xWindow, [a, o] = Fa(t), s = (i) => ({
      xaxis: {
        fixedrange: true,
        title: {
          text: i
        },
        range: r ?? [
          a,
          o
        ]
      }
    });
    switch (e) {
      case "bins-only":
        return {
          specs: [
            {
              id: "self_sim",
              type: "bins",
              heightFrac: 0.33,
              xAxis: "shared"
            }
          ],
          overrides: s("Encoded Scalar Input Value")
        };
      default:
        return ec("bins-only", t, n);
    }
  }
  function rn(e, t, n) {
    return e + (t - e) * n;
  }
  function Pu(e) {
    return e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e;
  }
  class Eu {
    constructor(t) {
      __publicField(this, "chart");
      __publicField(this, "specs", []);
      __publicField(this, "data", null);
      __publicField(this, "axisMin", 0);
      __publicField(this, "axisMax", 1);
      __publicField(this, "lastScalar", NaN);
      __publicField(this, "folded", false);
      __publicField(this, "animating", false);
      __publicField(this, "binsGridIndex", -1);
      __publicField(this, "currentBins", []);
      __publicField(this, "currentBoundLines", []);
      __publicField(this, "binsTotalHeight", 1);
      __publicField(this, "currentDecompItems", []);
      __publicField(this, "currentSimHeatItems", []);
      __publicField(this, "currentPerBinItems", []);
      __publicField(this, "renderPerBinItem", Jc(() => this.currentPerBinItems));
      __publicField(this, "gridPrimaryYIdx", []);
      __publicField(this, "staticImages", /* @__PURE__ */ new Map());
      __publicField(this, "staticVersion", 0);
      __publicField(this, "pendingStaticHandler", null);
      __publicField(this, "cursorLineEl");
      __publicField(this, "controlsWrap");
      __publicField(this, "controlGutterPx", 0);
      __publicField(this, "compact", false);
      __publicField(this, "onSubplotControlToggle");
      __publicField(this, "subplotHelpIcon");
      __publicField(this, "renderBoundLineItem", (t, n) => {
        const r = this.currentBoundLines[t.dataIndex];
        if (!r) return {
          type: "group",
          children: []
        };
        const [a, o, s] = r.value, [i, c] = n.coord([
          a,
          o
        ]), [, l] = n.coord([
          a,
          s
        ]);
        return {
          type: "line",
          shape: {
            x1: i,
            y1: c,
            x2: i,
            y2: l
          },
          style: {
            stroke: "#000000",
            lineWidth: 4,
            opacity: 1
          },
          silent: true
        };
      });
      __publicField(this, "renderBinItem", (t, n) => {
        const r = this.currentBins[t.dataIndex];
        if (!r) return {
          type: "group",
          children: []
        };
        const [a, o, s, i] = r.value, c = n.coord([
          a,
          i
        ]), l = n.coord([
          s,
          o
        ]), u = c[0], v = c[1], h = l[0] - u, y = l[1] - v;
        if (h <= 0 || y <= 0) return {
          type: "group",
          children: []
        };
        const S = [
          {
            type: "rect",
            shape: {
              x: u,
              y: v,
              width: h,
              height: y
            },
            style: {
              fill: r.color,
              opacity: r.opacity,
              stroke: "#000000",
              lineWidth: 1.5
            }
          }
        ];
        if (h >= jo && y >= jo) {
          const k = Math.max(5, Math.min(Math.floor(0.9 * y), Math.floor(0.6 * h)));
          S.push({
            type: "text",
            style: {
              x: u + h / 2,
              y: v + y / 2,
              text: r.label,
              textAlign: "center",
              textVerticalAlign: "middle",
              fontSize: k,
              fill: "#000000",
              opacity: r.isCongruent ? 0.1 : 1,
              width: h - 2,
              overflow: "truncate",
              ellipsis: ""
            }
          });
        }
        return {
          type: "group",
          children: S
        };
      });
      __publicField(this, "renderDecompItem", (t, n) => {
        const r = this.currentDecompItems[t.dataIndex];
        if (!r) return {
          type: "group",
          children: []
        };
        const [a, o, s, i] = r.value, c = n.coord([
          a,
          i
        ]), l = n.coord([
          s,
          o
        ]), u = c[0], v = c[1], h = l[0] - u, y = l[1] - v;
        if (h <= 0 || y <= 0) return {
          type: "group",
          children: []
        };
        const S = [
          {
            type: "rect",
            shape: {
              x: u,
              y: v,
              width: h,
              height: y
            },
            style: {
              fill: nl,
              stroke: "#000",
              lineWidth: 1
            }
          }
        ];
        if (h >= 8 && y >= 8) {
          const k = u + h / 2, d = v + y / 2, f = r.label.split("/");
          if (f.length === 2 && y >= 14) {
            const p = Math.max(f[0].length, f[1].length), b = Math.max(5, Math.min(Math.floor(0.42 * y), Math.floor(h / Math.max(1, p)))), w = Math.max(1, Math.floor(b * 0.15)), _ = Math.min(h - 2, Math.max(p * Math.floor(0.55 * b), 8));
            S.push({
              type: "text",
              style: {
                x: k,
                y: d - w,
                text: f[0],
                textAlign: "center",
                textVerticalAlign: "bottom",
                fontSize: b,
                fill: "#000000",
                fontWeight: "bold",
                width: h - 2,
                overflow: "truncate",
                ellipsis: ""
              }
            }, {
              type: "rect",
              shape: {
                x: k - _ / 2,
                y: d - 0.5,
                width: _,
                height: 1
              },
              style: {
                fill: "#000000"
              }
            }, {
              type: "text",
              style: {
                x: k,
                y: d + w,
                text: f[1],
                textAlign: "center",
                textVerticalAlign: "top",
                fontSize: b,
                fill: "#000000",
                fontWeight: "bold",
                width: h - 2,
                overflow: "truncate",
                ellipsis: ""
              }
            });
          } else {
            const p = Math.max(5, Math.min(Math.floor(0.9 * y), Math.floor(0.6 * h)));
            S.push({
              type: "text",
              style: {
                x: k,
                y: d,
                text: r.label,
                textAlign: "center",
                textVerticalAlign: "middle",
                fontSize: p,
                fill: "#000000",
                fontWeight: "bold",
                width: h - 2,
                overflow: "truncate",
                ellipsis: ""
              }
            });
          }
        }
        return {
          type: "group",
          children: S
        };
      });
      __publicField(this, "renderSimHeatmapItem", (t, n) => {
        const r = this.currentSimHeatItems[t.dataIndex];
        if (!r) return {
          type: "group",
          children: []
        };
        const [a, o, s, i] = r.value, c = n.coord([
          a,
          i
        ]), l = n.coord([
          s,
          o
        ]), u = c[0], v = c[1], h = l[0] - u, y = l[1] - v;
        return h <= 0 || y <= 0 ? {
          type: "group",
          children: []
        } : {
          type: "rect",
          shape: {
            x: u,
            y: v,
            width: h,
            height: y
          },
          style: {
            fill: r.color,
            stroke: "rgba(0,0,0,0.15)",
            lineWidth: 0.5
          },
          emphasis: {
            disabled: true
          }
        };
      });
      const n = typeof t == "string" ? document.getElementById(t) : t, r = Array.from(n.children);
      this.chart = Hl(n) ?? Gl(n, void 0, {
        renderer: "canvas"
      }), r.forEach((s) => n.appendChild(s));
      const a = n.firstElementChild ?? n;
      a.querySelectorAll(":scope > .ev-cursor-wrap, :scope > .ev-controls-wrap").forEach((s) => s.remove());
      const o = document.createElement("div");
      o.className = "ev-cursor-wrap", o.style.cssText = "position:absolute;inset:0;pointer-events:none;z-index:20", a.appendChild(o), this.cursorLineEl = document.createElement("div"), this.cursorLineEl.style.cssText = `position:absolute;width:2px;margin-left:-1px;display:none;pointer-events:none;background:${na}`, o.appendChild(this.cursorLineEl), this.controlsWrap = document.createElement("div"), this.controlsWrap.className = "ev-controls-wrap", this.controlsWrap.style.cssText = "position:absolute;inset:0;pointer-events:none;z-index:21", a.appendChild(this.controlsWrap), this.chart.on("resize", () => this.renderStaticSubplots());
    }
    getChart() {
      return this.chart;
    }
    getXAxisRange() {
      return isFinite(this.axisMin) && isFinite(this.axisMax) ? [
        this.axisMin,
        this.axisMax
      ] : null;
    }
    convertToPixel(t) {
      const n = this.chart.convertToPixel({
        xAxisIndex: 0
      }, t);
      return isFinite(n) ? n : null;
    }
    hideCursor() {
      this.cursorLineEl.style.display = "none", this.controlsWrap.replaceChildren();
    }
    compose(t, n, r) {
      var _a2, _b, _c2;
      this.chart.resize(), this.specs = t, this.data = n;
      const a = (_a2 = r == null ? void 0 : r.xaxis) == null ? void 0 : _a2.range;
      return Array.isArray(a) && a.length === 2 ? (this.axisMin = a[0], this.axisMax = a[1]) : [this.axisMin, this.axisMax] = Fa(n), this.binsGridIndex = t.findIndex((o) => o.type === "bins"), this.folded = ((_c2 = (_b = t.find((o) => o.type === "bins")) == null ? void 0 : _b.params) == null ? void 0 : _c2.folded) ?? false, this.binsGridIndex >= 0 && (this.currentBins = this.computeBins(this.folded, null)), this.chart.setOption(this.buildFullOption(), {
        notMerge: true
      }), this.renderStaticSubplots(), isFinite(this.lastScalar) && this.updateScalar(this.lastScalar), this;
    }
    updateScalar(t) {
      var _a2;
      if (this.animating || !this.data) return;
      this.lastScalar = t;
      const n = [];
      if (this.binsGridIndex >= 0) {
        const o = this.getActiveCode(t), s = this.computeBins(this.folded, o);
        this.currentBins = s, n.push({
          id: "bins-series",
          data: s
        });
      }
      this.specs.some((o) => o.type === "similarity") && n.push({
        id: "similarity-cursor",
        data: this.buildSimilarityCursorData(t)
      });
      const r = this.specs.findIndex((o) => o.type === "similarity-heatmap");
      r >= 0 && (this.currentSimHeatItems = this.buildSimHeatmapItems(t), n.push({
        id: `sim-heatmap-${r}`,
        data: this.currentSimHeatItems
      }));
      const a = this.specs.findIndex((o) => o.type === "per-bin");
      a >= 0 && (this.currentPerBinItems = Io(this.data, t, (_a2 = this.specs[a].params) == null ? void 0 : _a2.colors), n.push({
        id: `per-bin-${a}`,
        data: this.currentPerBinItems
      })), this.chart.setOption({
        series: n
      }), this.updateDOMCursor(t);
    }
    async animateBinsFold(t, n = Xc) {
      if (this.animating || !this.data || this.binsGridIndex < 0 || this.folded === t) return;
      const r = this.getActiveCode(this.lastScalar), a = this.computeBins(this.folded, r), o = this.currentBoundLines, s = this.binsTotalHeight;
      this.folded = t;
      const i = this.computeBins(t, r), c = this.currentBoundLines, l = this.binsTotalHeight;
      return this.animating = true, new Promise((u) => {
        const v = performance.now(), h = (y) => {
          const S = Math.min((y - v) / n, 1), k = Pu(S), d = a.map((_, g) => {
            const m = i[g] ?? _;
            return {
              ...m,
              value: [
                m.value[0],
                rn(_.value[1], m.value[1], k),
                m.value[2],
                rn(_.value[3], m.value[3], k)
              ]
            };
          }), f = o.map((_, g) => {
            const m = c[g] ?? _;
            return {
              value: [
                m.value[0],
                rn(_.value[1], m.value[1], k),
                rn(_.value[2], m.value[2], k)
              ]
            };
          });
          this.currentBins = d, this.currentBoundLines = f;
          const p = rn(s, l, k), { min: b, max: w } = this.computeBinsYRange(p);
          this.chart.setOption({
            yAxis: [
              {
                id: "bins-yaxis",
                min: b,
                max: w
              }
            ],
            series: [
              {
                id: "bins-series",
                data: d
              },
              {
                id: "bins-bound-lines",
                data: f
              }
            ]
          }), S < 1 ? requestAnimationFrame(h) : (this.animating = false, u());
        };
        requestAnimationFrame(h);
      });
    }
    computeBinsYRange(t) {
      const a = (Math.max(t, 5) - t) / 2;
      return {
        min: -a,
        max: t + a
      };
    }
    computeBins(t, n) {
      var _a2, _b, _c2, _d2;
      if (!this.data) return this.currentBoundLines = [], [];
      const r = this.data.sub_encoders, a = this.specs.find((f) => f.type === "bins"), o = ((_a2 = a == null ? void 0 : a.params) == null ? void 0 : _a2.w) ?? 1, s = ((_b = a == null ? void 0 : a.params) == null ? void 0 : _b.lo) ?? this.axisMin, i = ((_c2 = a == null ? void 0 : a.params) == null ? void 0 : _c2.hi) ?? this.axisMax, c = Zc(r, t, o), { yBases: l, totalHeight: u } = Qc(c);
      this.binsTotalHeight = u;
      const v = 0, h = [];
      r.forEach((f, p) => {
        const b = l[p] - v, w = l[p] + c[p].nRows + v;
        h.push({
          value: [
            f.lower_bound,
            b,
            w
          ]
        }), h.push({
          value: [
            f.upper_bound,
            b,
            w
          ]
        });
      }), this.currentBoundLines = h;
      const y = (_d2 = a == null ? void 0 : a.params) == null ? void 0 : _d2.colors, S = 0.05, k = 1, d = [];
      return r.forEach((f, p) => {
        var _a3;
        const b = f.bins ?? [], w = (y == null ? void 0 : y[p]) ?? ut(p), _ = l[p], { primaryRows: g, primaryIndices: m, expandedWidth: P } = c[p], $ = ((_a3 = f.bit_range) == null ? void 0 : _a3[0]) ?? 0;
        b.forEach((C, D) => {
          const j = Math.max(C.lower, s), B = Math.min(typeof C.upper == "number" ? C.upper : C.lower + P, i);
          if (j >= B) return;
          const W = g[m[D]], H = C.is_congruent ?? false, X = $ + m[D];
          let ce;
          if (n !== null) {
            const G = X < n.length && n[X] === 1;
            ce = H ? G ? ll : dl : G ? ul : pl;
          } else ce = H ? ml : fl;
          const oe = _ + W * k + S, Q = _ + (W + 1) * k - S;
          d.push({
            value: [
              j,
              oe,
              B,
              Q
            ],
            color: w,
            opacity: ce,
            label: String(X),
            bitIdx: X,
            isCongruent: H
          });
        });
      }), d;
    }
    getActiveCode(t) {
      if (!this.data || !isFinite(t)) return null;
      const n = dt(this.data.boundaries, t);
      return n >= 0 ? this.data.codes[n] ?? null : null;
    }
    buildSimilarityCursorData(t) {
      if (!this.data || !isFinite(t)) return [];
      const { boundaries: n, codes: r } = this.data, a = dt(n, t), o = Do(r, r[a]), s = [];
      for (let i = 0; i < n.length - 1; i++) {
        const c = (n[i] + n[i + 1]) / 2;
        s.push([
          n[i],
          o[i]
        ], [
          c,
          o[i]
        ]);
      }
      return s.push([
        n[n.length - 1],
        o[o.length - 1]
      ]), s;
    }
    buildSimilarityLines(t, n) {
      if (!this.data || t.length === 0) return [];
      const { boundaries: r, codes: a } = this.data;
      return t.map((o, s) => {
        const i = dt(r, o), c = Do(a, a[i]), l = [], u = [];
        for (let v = 0; v < r.length - 1; v++) {
          const h = (r[v] + r[v + 1]) / 2;
          l.push(r[v], h), u.push(c[v], c[v]);
        }
        return l.push(r[r.length - 1]), u.push(c[c.length - 1]), {
          x: l,
          y: u,
          color: n[s] ?? ut(s + 4)
        };
      });
    }
    getGridRect(t) {
      var _a2, _b, _c2;
      try {
        return ((_c2 = (_b = (_a2 = this.chart.getModel().getComponent("grid", t)) == null ? void 0 : _a2.coordinateSystem) == null ? void 0 : _b.getRect) == null ? void 0 : _c2.call(_b)) ?? null;
      } catch {
        return null;
      }
    }
    renderStaticSubplots() {
      this.pendingStaticHandler && (this.chart.off("finished", this.pendingStaticHandler), this.pendingStaticHandler = null), this.staticImages.clear();
      const t = () => {
        this.chart.off("finished", t), this.pendingStaticHandler = null, Promise.resolve().then(() => this.renderStaticSubplotsCore());
      };
      this.pendingStaticHandler = t, this.chart.on("finished", t);
    }
    renderStaticSubplotsCore() {
      if (!this.data) return;
      this.staticImages.clear();
      const t = window.devicePixelRatio ?? 1, n = [];
      this.staticVersion++, this.specs.forEach((r, a) => {
        if (r.type !== "bits-by-data" && r.type !== "projected-similarity") return;
        const o = this.getGridRect(a);
        if (!o || !isFinite(o.width) || o.width <= 0 || o.height <= 0) {
          console.warn(`[encoder_analysis] canvas subplot gi=${a} (${r.type}) skipped \u2014 gridRect=${o ? JSON.stringify(o) : "null"}`);
          return;
        }
        const s = document.createElement("canvas");
        s.width = Math.round(o.width * t), s.height = Math.round(o.height * t);
        const i = s.getContext("2d");
        i.scale(t, t), (r.type === "bits-by-data" ? this.renderBitsByDataCanvas(i, o, a, r.params) : this.renderProjSimCanvas(i, o, a, r.params)) && (this.staticImages.set(a, s), n.push({
          id: `static-canvas-${a}`,
          data: [
            [
              this.staticVersion
            ]
          ]
        }));
      }), n.length && this.chart.setOption({
        series: n
      }), this.renderSubplotControlsCore();
    }
    renderSubplotControlsCore() {
      if (this.controlsWrap.replaceChildren(), !this.compact && this.controlGutterPx <= 0 || !this.data) return;
      const t = 18, n = 9;
      this.specs.forEach((r, a) => {
        var _a2;
        const o = Xo(r.type, r.params), s = ((_a2 = this.subplotHelpIcon) == null ? void 0 : _a2.call(this, r.type)) ?? null, i = o.length + (s ? 1 : 0);
        if (i === 0) return;
        const c = this.getGridRect(a);
        if (!c || !isFinite(c.y) || c.height <= 0) return;
        const l = document.createElement("div");
        if (l.className = "subplot-gutter-cluster", this.compact) l.style.cssText = `position:absolute;left:2px;top:${c.y + 2}px;display:flex;flex-direction:column;gap:${n}px;align-items:flex-start;pointer-events:none;`;
        else {
          const u = i * t + (i - 1) * n, v = c.y + Math.max(0, (c.height - u) / 2);
          l.style.cssText = `position:absolute;left:3px;width:${this.controlGutterPx - 5}px;top:${v}px;display:flex;flex-direction:column;gap:${n}px;align-items:center;pointer-events:none;`;
        }
        s && (s.classList.add("subplot-gutter-help"), s.style.pointerEvents = "auto", l.appendChild(s));
        for (const u of o) {
          const v = document.createElement("button");
          v.type = "button", v.className = "subplot-gutter-ctl" + (u.active ? " active" : ""), v.textContent = u.glyph, v.dataset.tooltip = u.title, v.setAttribute("aria-pressed", u.active ? "true" : "false"), v.style.pointerEvents = "auto", v.addEventListener("click", (h) => {
            var _a3;
            h.stopPropagation(), (_a3 = this.onSubplotControlToggle) == null ? void 0 : _a3.call(this, a, u.id);
          }), l.appendChild(v);
        }
        this.controlsWrap.appendChild(l);
      });
    }
    drawVerticalBoundaryLines(t, n, r, a) {
      t.strokeStyle = To, t.lineWidth = 1;
      for (const o of a) {
        const s = this.chart.convertToPixel({
          xAxisIndex: r
        }, o) - n.x;
        t.beginPath(), t.moveTo(s, 0), t.lineTo(s, n.height), t.stroke();
      }
    }
    renderBitsByDataCanvas(t, n, r, a = {}) {
      var _a2;
      if (!this.data) return false;
      const { codes: o, boundaries: s, n_bits: i } = this.data;
      if (s.length < 2 || i === 0) return false;
      const c = this.chart.convertToPixel({
        xAxisIndex: r
      }, s[0]);
      if (!isFinite(c)) return console.warn(`[encoder_analysis] bits-by-data canvas: probe pixel NaN (gi=${r}, boundaries[0]=${s[0]})`), false;
      const l = (a.gap ?? 0) > 0, u = this.gridPrimaryYIdx[r] ?? r, v = [];
      for (let h = 0; h < i; h++) {
        const y = this.chart.convertToPixel({
          yAxisIndex: u
        }, h + 0.5) - n.y, S = this.chart.convertToPixel({
          yAxisIndex: u
        }, h - 0.5) - n.y;
        v.push({
          pyTop: y,
          cellPixelHeight: Math.max(1, S - y)
        });
      }
      for (let h = 0; h < s.length - 1; h++) {
        const y = this.chart.convertToPixel({
          xAxisIndex: r
        }, s[h]) - n.x, S = this.chart.convertToPixel({
          xAxisIndex: r
        }, s[h + 1]) - n.x, k = Math.max(1, S - y);
        for (let d = 0; d < i; d++) {
          const { pyTop: f, cellPixelHeight: p } = v[d];
          t.fillStyle = ((_a2 = o[h]) == null ? void 0 : _a2[d]) ?? 0 ? el : tl, t.fillRect(y, f, k, p);
        }
      }
      return l && this.drawVerticalBoundaryLines(t, n, r, s), true;
    }
    renderProjSimCanvas(t, n, r, a = {}) {
      var _a2;
      if (!this.data) return false;
      const { similarity: o, boundaries: s } = this.data;
      if (s.length < 2 || o.length === 0) return console.warn(`[encoder_analysis] projected-similarity canvas: degenerate data (gi=${r}, boundaries.length=${s.length}, similarity.length=${o.length})`), false;
      const i = this.chart.convertToPixel({
        xAxisIndex: r
      }, s[0]);
      if (!isFinite(i)) return console.warn(`[encoder_analysis] projected-similarity canvas: probe pixel NaN (gi=${r}, boundaries[0]=${s[0]})`), false;
      let c = 1;
      for (let d = 0; d < o.length; d++) {
        const f = o[d];
        if (f) for (let p = 0; p < f.length; p++) {
          const b = f[p];
          b > c && (c = b);
        }
      }
      const l = s.length - 1, u = (a.gap ?? 0) > 0, v = a.showText ?? false, h = 4, y = this.gridPrimaryYIdx[r] ?? r, S = [];
      for (let d = 0; d < l; d++) {
        const f = this.chart.convertToPixel({
          xAxisIndex: r
        }, s[d]) - n.x, p = this.chart.convertToPixel({
          xAxisIndex: r
        }, s[d + 1]) - n.x;
        S.push({
          px0: f,
          cellPixelWidth: Math.max(1, p - f)
        });
      }
      const k = [];
      for (let d = 0; d < l; d++) {
        const f = this.chart.convertToPixel({
          yAxisIndex: y
        }, s[d + 1]) - n.y, p = this.chart.convertToPixel({
          yAxisIndex: y
        }, s[d]) - n.y;
        k.push({
          pyTop: f,
          cellPixelHeight: Math.max(1, p - f)
        });
      }
      for (let d = 0; d < l; d++) {
        const { px0: f, cellPixelWidth: p } = S[d];
        for (let b = 0; b < l; b++) {
          const { pyTop: w, cellPixelHeight: _ } = k[b], g = ((_a2 = o[d]) == null ? void 0 : _a2[b]) ?? 0, m = c > 0 ? g / c : 0;
          if (t.fillStyle = Ro(m), t.fillRect(f, w, p, _), v && p >= 6 && _ >= 6) {
            const P = Math.max(h, Math.min(Math.floor(0.65 * _), Math.floor(0.55 * p)));
            t.font = `${P}px sans-serif`, t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = m > 0.55 ? "#ffffff" : "#111111", t.fillText(String(g), f + p / 2, w + _ / 2);
          }
        }
      }
      if (u) {
        this.drawVerticalBoundaryLines(t, n, r, s), t.strokeStyle = To, t.lineWidth = 1;
        for (const d of s) {
          const f = this.chart.convertToPixel({
            yAxisIndex: y
          }, d) - n.y;
          t.beginPath(), t.moveTo(0, f), t.lineTo(n.width, f), t.stroke();
        }
      }
      return true;
    }
    buildDecompItems() {
      if (!this.data) return [];
      const { boundaries: t } = this.data, n = t[0], a = t[t.length - 1] - n;
      return t.slice(0, -1).map((o, s) => {
        const i = t[s + 1], c = Math.round(a / (i - o));
        return {
          value: [
            o,
            0,
            i,
            1,
            0
          ],
          label: c > 1 ? `1/${c}` : "1"
        };
      });
    }
    buildSimHeatmapItems(t) {
      var _a2;
      if (!this.data) return [];
      const { boundaries: n, similarity: r } = this.data;
      if (n.length - 1 === 0) return [];
      const o = Math.max(0, dt(n, t)), s = r[o] ?? [];
      let i = 0;
      for (let c = 0; c < r.length; c++) {
        const l = ((_a2 = r[c]) == null ? void 0 : _a2[c]) ?? 0;
        l > i && (i = l);
      }
      return n.slice(0, -1).map((c, l) => ({
        value: [
          c,
          0,
          n[l + 1],
          1
        ],
        color: Ro(i > 0 ? (s[l] ?? 0) / i : 0)
      }));
    }
    buildFeaturesData() {
      if (!this.data) return [];
      const { boundaries: t, deltas: n } = this.data, r = t.slice(1, -1), a = [];
      return r.forEach((o, s) => {
        const i = n[s] ?? 0;
        for (let c = 0; c < i; c++) a.push([
          o,
          c - (i - 1) / 2
        ]);
      }), a;
    }
    buildProbeData(t) {
      var _a2;
      const n = (_a2 = this.data) == null ? void 0 : _a2.boundaries;
      if (!n || n.length < 2) return [
        [
          this.axisMin,
          t
        ],
        [
          this.axisMax,
          t
        ]
      ];
      const r = [];
      for (let a = 0; a < n.length - 1; a++) r.push([
        n[a],
        t
      ], [
        (n[a] + n[a + 1]) / 2,
        t
      ]);
      return r.push([
        n[n.length - 1],
        t
      ]), r;
    }
    computeGridPositions() {
      const t = this.specs.reduce((a, o) => a + o.heightFrac, 0), n = 1 - Oo - rl - Mo * (this.specs.length - 1);
      let r = Oo;
      return this.specs.map((a) => {
        const o = a.heightFrac / t * n, s = {
          topPct: r,
          heightPct: o
        };
        return r += o + Mo, s;
      });
    }
    buildFullOption() {
      const t = this.computeGridPositions(), n = [], r = [], a = [], o = [];
      let s = 0;
      this.gridPrimaryYIdx = [];
      const i = this.specs.length > 0 && (this.subplotHelpIcon != null || this.specs.some((h) => Xo(h.type, h.params).length > 0));
      this.controlGutterPx = !this.compact && i ? al : 0;
      const c = this.compact ? ol : Di, l = this.compact ? sl : Ti, u = this.data.n_bits === 0 && this.data.n_regions === 0, v = {
        show: true,
        precision: 4,
        backgroundColor: "rgba(20,30,60,0.9)",
        color: "#e8eaff",
        fontSize: Lo
      };
      return this.specs.forEach((h, y) => {
        var _a2, _b, _c2;
        const { topPct: S, heightPct: k } = t[y], d = y === 0, f = y === this.specs.length - 1, p = this.specs.length === 1, b = d && !p ? "top" : "bottom", w = d || f;
        n.push({
          left: c + this.controlGutterPx,
          right: l,
          top: `${(S * 100).toFixed(1)}%`,
          height: `${(k * 100).toFixed(1)}%`
        }), r.push({
          type: "value",
          gridIndex: y,
          min: this.axisMin,
          max: this.axisMax,
          position: b,
          axisLine: {
            show: true,
            onZero: false,
            lineStyle: {
              color: "#000000",
              width: 1
            }
          },
          axisTick: {
            show: f
          },
          axisLabel: {
            show: f,
            fontSize: Lo,
            color: "#111111"
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#888888",
              opacity: 0.4
            }
          },
          axisPointer: {
            show: true,
            label: {
              ...v,
              show: w
            }
          }
        });
        const _ = {
          gridIndex: y,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        }, g = {
          color: h.color ?? "#333",
          fontWeight: "bold",
          fontSize: 11
        };
        if (h.type === "bins") {
          const m = this.computeBinsYRange(this.binsTotalHeight);
          this.gridPrimaryYIdx.push(s), a.push({
            ..._,
            id: "bins-yaxis",
            type: "value",
            min: m.min,
            max: m.max,
            name: "Bins",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: g
          }), s++, o.push({
            id: "bins-series",
            type: "custom",
            renderItem: this.renderBinItem,
            data: this.currentBins,
            encode: {
              x: [
                0,
                2
              ],
              y: [
                1,
                3
              ]
            },
            xAxisIndex: y,
            yAxisIndex: this.gridPrimaryYIdx[y],
            zlevel: 10,
            emphasis: {
              disabled: true
            }
          }), o.push({
            id: "bins-bound-lines",
            type: "custom",
            renderItem: this.renderBoundLineItem,
            data: this.currentBoundLines,
            encode: {
              x: 0,
              y: [
                1,
                2
              ]
            },
            xAxisIndex: y,
            yAxisIndex: this.gridPrimaryYIdx[y],
            zlevel: 11,
            silent: true,
            itemStyle: {
              borderWidth: 4,
              color: "black"
            }
          });
        } else if (h.type === "similarity") {
          if (!this.data) {
            this.gridPrimaryYIdx.push(s), a.push(_), s++;
            return;
          }
          let m = 1;
          for (let D = 0; D < this.data.codes.length; D++) {
            const j = this.data.codes[D];
            let B = 0;
            for (let W = 0; W < j.length; W++) B += j[W];
            B > m && (m = B);
          }
          const P = m + 1;
          this.gridPrimaryYIdx.push(s), a.push({
            ..._,
            type: "value",
            position: "left",
            min: 0,
            max: P,
            name: "Similarity",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: g
          }), s++, a.push({
            ..._,
            type: "value",
            position: "right",
            min: 0,
            max: P,
            axisLabel: {
              show: true,
              color: "#111111"
            }
          }), s++;
          const $ = ((_a2 = h.params) == null ? void 0 : _a2.refPoints) ?? [], C = ((_b = h.params) == null ? void 0 : _b.colors) ?? [];
          this.buildSimilarityLines($, C).forEach(({ x: D, y: j, color: B }) => {
            o.push({
              type: "line",
              data: D.map((W, H) => [
                W,
                j[H]
              ]),
              showSymbol: false,
              step: "end",
              lineStyle: {
                color: B,
                width: 2
              },
              areaStyle: {
                color: Na(B, 0.3)
              },
              xAxisIndex: y,
              yAxisIndex: this.gridPrimaryYIdx[y]
            });
          }), $.forEach((D, j) => {
            o.push({
              type: "line",
              data: [],
              markLine: {
                symbol: "none",
                lineStyle: {
                  type: "dashed",
                  color: C[j] ?? ut(j + 4),
                  width: 1
                },
                data: [
                  {
                    xAxis: D
                  }
                ],
                label: {
                  show: false
                }
              },
              xAxisIndex: y,
              yAxisIndex: this.gridPrimaryYIdx[y]
            });
          }), o.push({
            id: "similarity-cursor",
            type: "line",
            data: [],
            showSymbol: false,
            step: "end",
            lineStyle: {
              color: na,
              width: 2
            },
            areaStyle: {
              color: il
            },
            xAxisIndex: y,
            yAxisIndex: this.gridPrimaryYIdx[y],
            zlevel: 10
          });
        } else if (h.type === "bits-by-data") {
          const m = cl["bits-by-data"], P = u ? m[0] : -0.5, $ = u ? m[1] : Math.max(this.data.n_bits - 0.5, m[1]);
          this.gridPrimaryYIdx.push(s), a.push({
            ..._,
            type: "value",
            position: "left",
            min: P,
            max: $,
            name: "Bit Index",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: g
          }), s++, a.push({
            ..._,
            type: "value",
            position: "right",
            min: P,
            max: $,
            axisLabel: {
              show: true,
              color: "#111111"
            }
          }), s++;
          const C = y, D = $, j = P;
          o.push({
            type: "custom",
            id: `static-canvas-${y}`,
            renderItem: (B, W) => {
              const H = this.staticImages.get(C);
              if (!H) return {
                type: "group",
                children: []
              };
              const [X, ce] = W.coord([
                this.axisMin,
                D
              ]), [oe, Q] = W.coord([
                this.axisMax,
                j
              ]);
              return {
                type: "image",
                style: {
                  image: H,
                  x: X,
                  y: ce,
                  width: Math.max(0, oe - X),
                  height: Math.max(0, Q - ce)
                },
                silent: true
              };
            },
            data: [
              [
                0
              ]
            ],
            emphasis: {
              disabled: true
            },
            xAxisIndex: y,
            yAxisIndex: this.gridPrimaryYIdx[y]
          }), o.push({
            type: "line",
            data: this.buildProbeData(0),
            lineStyle: {
              opacity: 0
            },
            showSymbol: false,
            emphasis: {
              disabled: true
            },
            xAxisIndex: y,
            yAxisIndex: this.gridPrimaryYIdx[y]
          });
        } else if (h.type === "projected-similarity") {
          if (!this.data) {
            this.gridPrimaryYIdx.push(s), a.push(_), s++;
            return;
          }
          const m = this.data.boundaries, P = this.data.sub_encoders ?? [];
          let $ = m[0], C = m[m.length - 1];
          P.length > 0 && ($ = Math.min(...P.map((W) => W.lower_bound)), C = Math.max(...P.map((W) => W.upper_bound))), this.gridPrimaryYIdx.push(s), a.push({
            ..._,
            type: "value",
            position: "left",
            min: $,
            max: C,
            name: "Self-Sim.",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: g
          }), s++, a.push({
            ..._,
            type: "value",
            position: "right",
            min: $,
            max: C,
            axisLabel: {
              show: true,
              color: "#111111"
            }
          }), s++;
          const D = y, j = $, B = C;
          o.push({
            type: "custom",
            id: `static-canvas-${y}`,
            renderItem: (W, H) => {
              const X = this.staticImages.get(D);
              if (!X) return {
                type: "group",
                children: []
              };
              const [ce, oe] = H.coord([
                this.axisMin,
                B
              ]), [Q, G] = H.coord([
                this.axisMax,
                j
              ]);
              return {
                type: "image",
                style: {
                  image: X,
                  x: ce,
                  y: oe,
                  width: Math.max(0, Q - ce),
                  height: Math.max(0, G - oe)
                },
                silent: true
              };
            },
            data: [
              [
                0
              ]
            ],
            emphasis: {
              disabled: true
            },
            xAxisIndex: y,
            yAxisIndex: this.gridPrimaryYIdx[y]
          }), o.push({
            type: "line",
            data: this.buildProbeData(this.axisMin),
            lineStyle: {
              opacity: 0
            },
            showSymbol: false,
            emphasis: {
              disabled: true
            },
            xAxisIndex: y,
            yAxisIndex: this.gridPrimaryYIdx[y]
          });
        } else if (h.type === "decomposition") this.currentDecompItems = this.buildDecompItems(), this.gridPrimaryYIdx.push(s), a.push({
          ..._,
          type: "value",
          min: 0,
          max: 1,
          name: "Regions",
          nameLocation: "middle",
          nameGap: 10,
          nameTextStyle: g
        }), s++, o.push({
          type: "custom",
          renderItem: this.renderDecompItem,
          data: this.currentDecompItems,
          encode: {
            x: [
              0,
              2
            ],
            y: [
              1,
              3
            ]
          },
          xAxisIndex: y,
          yAxisIndex: this.gridPrimaryYIdx[y]
        });
        else if (h.type === "per-bin") {
          r[y] = {
            ...r[y],
            min: 0,
            max: 1,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisPointer: {
              show: false
            }
          };
          const m = isFinite(this.lastScalar) ? this.lastScalar : (this.axisMin + this.axisMax) / 2;
          this.currentPerBinItems = Io(this.data, m, (_c2 = h.params) == null ? void 0 : _c2.colors), this.gridPrimaryYIdx.push(s), a.push({
            ..._,
            type: "value",
            min: 0,
            max: 1,
            name: "Per-Bin",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: g
          }), s++, o.push({
            id: `per-bin-${y}`,
            type: "custom",
            renderItem: this.renderPerBinItem,
            data: this.currentPerBinItems,
            encode: {
              x: 0,
              y: 1
            },
            xAxisIndex: y,
            yAxisIndex: this.gridPrimaryYIdx[y],
            silent: true
          });
        } else if (h.type === "similarity-heatmap") {
          const m = isFinite(this.lastScalar) ? this.lastScalar : (this.axisMin + this.axisMax) / 2;
          this.currentSimHeatItems = this.buildSimHeatmapItems(m), this.gridPrimaryYIdx.push(s), a.push({
            ..._,
            type: "value",
            min: 0,
            max: 1,
            name: "Sim. Heat",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: g,
            axisLabel: {
              show: false
            }
          }), s++, o.push({
            id: `sim-heatmap-${y}`,
            type: "custom",
            renderItem: this.renderSimHeatmapItem,
            data: this.currentSimHeatItems,
            encode: {
              x: [
                0,
                2
              ],
              y: [
                1,
                3
              ]
            },
            xAxisIndex: y,
            yAxisIndex: this.gridPrimaryYIdx[y]
          });
        } else if (h.type === "features") {
          if (!this.data) {
            this.gridPrimaryYIdx.push(s), a.push(_), s++;
            return;
          }
          const m = this.buildFeaturesData();
          let P = 1;
          for (let C = 0; C < this.data.deltas.length; C++) this.data.deltas[C] > P && (P = this.data.deltas[C]);
          const $ = (P - 1) / 2;
          this.gridPrimaryYIdx.push(s), a.push({
            ..._,
            type: "value",
            position: "left",
            min: -($ + 1),
            max: $ + 1,
            name: "Crossings",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: g
          }), s++, a.push({
            ..._,
            type: "value",
            position: "right",
            min: -($ + 1),
            max: $ + 1,
            axisLabel: {
              show: true,
              color: "#111111"
            }
          }), s++, o.push({
            type: "scatter",
            data: m,
            symbolSize: 6,
            itemStyle: {
              color: "#333333"
            },
            xAxisIndex: y,
            yAxisIndex: this.gridPrimaryYIdx[y]
          });
        }
      }), {
        animation: false,
        backgroundColor: "transparent",
        grid: n,
        xAxis: r,
        yAxis: a,
        series: o,
        tooltip: {
          trigger: "axis",
          showDelay: 0,
          hideDelay: 0,
          transitionDuration: 0,
          axisPointer: {
            type: "line",
            lineStyle: {
              color: "#8899bb",
              width: 1,
              type: "dashed"
            }
          },
          backgroundColor: "rgba(20,30,60,0.9)",
          textStyle: {
            color: "#e8eaff",
            fontSize: 11
          },
          formatter: (h) => {
            var _a2, _b, _c2, _d2, _e, _f2, _g, _h2, _i2;
            const y = Array.isArray(h) ? h : [
              h
            ];
            if (!y.length) return "";
            const S = ((_a2 = y[0]) == null ? void 0 : _a2.axisValue) ?? ((_c2 = (_b = y[0]) == null ? void 0 : _b.value) == null ? void 0 : _c2[0]);
            if (S == null) return "";
            const d = parseFloat(String(S)).toFixed(4), f = ((_d2 = y[0]) == null ? void 0 : _d2.axisIndex) ?? 0, p = this.specs[f];
            if (!p) return `x: ${d}`;
            const b = (w) => `<span style="display:inline-block;width:8px;height:8px;background:${w};border-radius:50%;margin-right:4px;vertical-align:middle"></span>`;
            switch (p.type) {
              case "bins":
                return `<b>Scalar:</b> ${d}`;
              case "similarity": {
                const w = ((_e = p.params) == null ? void 0 : _e.refPoints) ?? [], _ = ((_f2 = p.params) == null ? void 0 : _f2.colors) ?? [], g = y.find(($) => $.seriesId === "similarity-cursor"), m = y.filter(($) => $.seriesType === "line" && $.seriesId !== "similarity-cursor");
                let P = `<b>Scalar:</b> ${d}`;
                if (m.forEach(($, C) => {
                  const D = w[C], j = Array.isArray($.value) ? $.value[1] : null, B = _[C] ?? $.color;
                  P += `<br>${b(B)}vs ${D != null ? D.toFixed(3) : "?"}: <b>${j != null ? Math.round(j) : "\u2014"} bits</b>`;
                }), g) {
                  const $ = Array.isArray(g.value) ? g.value[1] : null;
                  P += `<br>${b(na)}cursor: <b>${$ != null ? Math.round($) : "\u2014"} bits</b>`;
                }
                return P;
              }
              case "decomposition": {
                const w = (_g = y[0]) == null ? void 0 : _g.value;
                if (Array.isArray(w) && w.length >= 3) {
                  const _ = parseFloat(String(w[0])), g = parseFloat(String(w[2]));
                  return `<b>Region:</b> [${_.toFixed(4)}, ${g.toFixed(4)}]<br><b>Width:</b> ${(g - _).toFixed(4)}`;
                }
                return `<b>Scalar:</b> ${d}`;
              }
              case "features": {
                const w = (_i2 = (_h2 = y[0]) == null ? void 0 : _h2.value) == null ? void 0 : _i2[0];
                if (w != null && this.data) {
                  const g = this.data.boundaries.slice(1, -1).findIndex((P) => Math.abs(P - w) < 1e-9), m = g >= 0 ? this.data.deltas[g] ?? 0 : 0;
                  return `<b>Boundary:</b> ${parseFloat(String(w)).toFixed(4)}<br><b>Crossings:</b> ${m}`;
                }
                return `<b>Boundary:</b> ${d}`;
              }
              case "similarity-heatmap":
                return `<b>Scalar:</b> ${d}`;
              case "bits-by-data":
                return `<b>Scalar:</b> ${d}`;
              case "projected-similarity":
                return `<b>Scalar:</b> ${d}`;
              default:
                return `x: ${d}`;
            }
          }
        },
        axisPointer: {
          link: [
            {
              xAxisIndex: "all"
            }
          ],
          label: {
            show: true
          }
        },
        graphic: []
      };
    }
    updateDOMCursor(t) {
      if (!isFinite(t)) {
        this.cursorLineEl.style.display = "none";
        return;
      }
      const n = this.chart.convertToPixel({
        xAxisIndex: 0
      }, t), r = this.getGridRect(0), a = this.getGridRect(this.specs.length - 1);
      if (!r || !a) {
        this.cursorLineEl.style.display = "none";
        return;
      }
      this.cursorLineEl.style.left = `${n}px`, this.cursorLineEl.style.top = `${r.y}px`, this.cursorLineEl.style.height = `${a.y + a.height - r.y}px`, this.cursorLineEl.style.display = "";
    }
  }
  function Cu(e, t) {
    var _a2, _b, _c2, _d2, _e, _f2, _g;
    Ri(), e.innerHTML = uu;
    const n = Su(e, t == null ? void 0 : t.ui), r = n.plotPanel !== false, a = n.cursorSlider !== false;
    bl(n);
    const o = e.querySelector(".enc-config-right");
    o && o.appendChild(hl()), (_c2 = (_b = (_a2 = e.querySelector("#preset-select")) == null ? void 0 : _a2.closest(".control-group")) == null ? void 0 : _b.querySelector("label")) == null ? void 0 : _c2.appendChild(_t("control.presets")), (_f2 = (_e = (_d2 = e.querySelector("#view-bounds-slider")) == null ? void 0 : _d2.closest(".control-group")) == null ? void 0 : _e.querySelector("label")) == null ? void 0 : _f2.appendChild(_t("control.viewBounds"));
    {
      const N = _t("control.scalarSlider");
      N.classList.add("info-icon-scalar"), (_g = e.querySelector("#scalar-slider-wrap")) == null ? void 0 : _g.appendChild(N);
    }
    const s = ku(), i = e.querySelector("#view-select"), c = e.querySelector("#encoder-list"), l = e.querySelector("#enc-add"), u = e.querySelector("#enc-reset"), v = e.querySelector("#ref-points"), h = e.querySelector("#ref-point-popup"), y = e.querySelector("#ref-point-popup-slider"), S = e.querySelector("#ref-point-popup-lo"), k = e.querySelector("#ref-point-popup-hi"), d = e.querySelector("#ref-point-popup-valtext"), f = e.querySelector("#ref-point-popup-add"), p = e.querySelector("#ref-point-popup-cancel"), b = e.querySelector("#view-bounds-lo"), w = e.querySelector("#view-bounds-hi"), _ = e.querySelector("#view-bounds-lo-val"), g = e.querySelector("#view-bounds-hi-val"), m = e.querySelector("#view-bounds-fill"), P = e.querySelector("#show-regions"), $ = e.querySelector("#show-counts"), C = e.querySelector("#metrics"), D = e.querySelector("#error-banner"), j = e.querySelector("#loading"), B = e.querySelector("#folded-bins"), W = e.querySelector("#scalar-row"), H = e.querySelector("#scalar-slider"), X = e.querySelector("#scalar-slider-wrap"), ce = e.querySelector("#scalar-val"), oe = e.querySelector("#scalar-val-gutter"), Q = e.querySelector("#scalar-right-pad"), G = e.querySelector("#scalar-bits-panel"), T = e.querySelector("#subplot-panel"), z = e.querySelector("#subplot-chips"), M = e.querySelector("#empty-plot-msg");
    function E() {
      return [
        parseFloat(b.value),
        parseFloat(w.value)
      ];
    }
    function I() {
      const [N, A] = E();
      return `${N.toFixed(1)},${A.toFixed(1)}`;
    }
    function V(N, A) {
      const O = Math.min(wn, N), K = Math.max(kn, A);
      [
        b,
        w
      ].forEach((we) => {
        we.min = String(O), we.max = String(K);
      });
      const te = Math.max(O, Math.min(K - qe, N)), Z = Math.max(te + qe, Math.min(K, A));
      b.value = String(te), w.value = String(Z), _.value = te.toFixed(1), g.value = Z.toFixed(1), ne();
    }
    function ne() {
      const N = parseFloat(b.min) || wn, A = parseFloat(b.max) || kn, O = parseFloat(b.value), K = parseFloat(w.value), te = A - N, Z = (O - N) / te * 100, we = (K - O) / te * 100;
      m.style.left = `${Z}%`, m.style.width = `${we}%`;
    }
    function ee() {
      const N = c.querySelectorAll(".enc-row");
      if (N.length === 0) return null;
      let A = 1 / 0, O = -1 / 0;
      return N.forEach((K) => {
        const te = parseFloat(K.querySelector(".enc-offset").value), Z = parseFloat(K.querySelector(".enc-range").value);
        A = Math.min(A, te), O = Math.max(O, te + Z);
      }), {
        minEncLo: A,
        maxEncHi: O
      };
    }
    function fe() {
      const [N, A] = E();
      c.querySelectorAll(".enc-row").forEach((O) => {
        xu(O, N, A);
      });
    }
    function ae() {
      try {
        return v.value.split(",").map((N) => parseFloat(N.trim())).filter((N) => !isNaN(N));
      } catch {
        return [];
      }
    }
    function R(N) {
      if (v.value = N.join(","), s.refreshBitsPanelRefControls(), J) {
        const A = ae(), O = pe.map((K) => Qe[K % Qe.length]);
        s.refreshBitsPanelRefs(J, A, O);
      }
    }
    function F(N) {
      D.textContent = N, D.style.display = "block";
    }
    function Y() {
      D.style.display = "none";
    }
    const L = /* @__PURE__ */ new Set([
      "bins-only"
    ]);
    let q = null, J = null, le = null, ge = null, xe = NaN;
    const se = Ko([]);
    let he = {}, Pe = i.value, pe = [], Te = 0;
    function Jt(N) {
      return Qe[(pe[N] ?? N) % Qe.length];
    }
    function at(N) {
      const A = ae();
      A.length >= oa && pe.shift(), pe.push(Te++);
      const O = [
        ...A,
        N
      ].slice(-oa);
      R(O);
    }
    function Lt(N) {
      pe.splice(N, 1);
      const A = ae().filter((O, K) => K !== N);
      R(A);
    }
    function Ft(N) {
      N.replaceChildren();
      const A = ae();
      if (A.forEach((O, K) => {
        const te = Jt(K), Z = document.createElement("div");
        Z.className = "ref-point-chip", Z.style.borderColor = te, Z.style.cursor = "pointer", Z.dataset.tooltip = "Edit reference value", Z.onclick = (Se) => {
          Se.stopPropagation(), h.style.display === "none" && _o(Z, K);
        };
        const we = document.createElement("span");
        we.className = "ref-point-swatch", we.style.background = te;
        const Ee = document.createElement("span");
        Ee.className = "ref-point-chip-label", Ee.textContent = String(O);
        const ue = document.createElement("button");
        ue.className = "ref-point-chip-remove", ue.textContent = "\xD7", ue.dataset.tooltip = "Remove", ue.onclick = (Se) => {
          Se.stopPropagation(), Lt(K), Le();
        }, Z.append(we, Ee, ue), N.appendChild(Z);
      }), A.length < oa) {
        const O = document.createElement("button");
        O.className = "chip-toggle-btn", O.textContent = "+ Add Value", O.onclick = (K) => {
          K.stopPropagation(), h.style.display === "none" ? _o(O) : ea();
        }, N.appendChild(O);
      }
    }
    const ot = Ko([
      ...qo
    ]);
    function wt() {
      const N = new Map(se.value.map((A) => [
        A.type,
        A
      ]));
      se.value = ot.value.filter((A) => N.has(A)).map((A) => N.get(A));
    }
    if (se.subscribe(() => yn()), ot.subscribe(() => wt()), !n.plotControls) {
      const N = () => yl(se.value.map((A) => A.type));
      se.subscribe(N), N();
    }
    let Xt = null, Ur = false;
    function lo(N) {
      const [A, O] = E(), K = (O - A) / 1e3;
      H.min = String(A), H.max = String(O), H.step = String(K);
      const te = parseFloat(H.value);
      (isNaN(te) || te < A || te > O) && (H.value = String((A + O) / 2)), ce.textContent = parseFloat(H.value).toFixed(3);
    }
    function Hr() {
      const N = c.querySelectorAll(".enc-row");
      return Array.from(N).map((A) => ut(parseInt(A.dataset.colorIdx ?? "0", 10)));
    }
    function mn() {
      return {
        refPoints: ae(),
        refColors: pe.map((N) => Qe[N % Qe.length])
      };
    }
    function Gr() {
      const N = parseFloat(H.value);
      ce.textContent = N.toFixed(3), fn(N), xe = N, ge === null && (ge = requestAnimationFrame(() => {
        ge = null;
        const A = xe;
        if (J && (q || !r)) {
          q == null ? void 0 : q.updateScalar(A);
          const { refPoints: O, refColors: K } = mn();
          s.updateBitsPanelScalar(J, A, O, K), Nn(J, A, c);
        }
      }));
    }
    let st = 0, kt = 1, Xe = 0, pt = 1, At = false;
    function qt() {
      const N = J !== null, A = se.value.length > 0;
      return !N && !A ? 1 : N && !A ? 2 : !N && A ? 3 : 4;
    }
    function uo() {
      if (!a) return;
      const N = W.clientWidth;
      Xe = 0, pt = N, oe.style.width = "0px", X.style.flex = "none", X.style.width = `${N}px`, Q.style.width = "0px", fn(parseFloat(H.value));
    }
    function Zt() {
      if (!a) return;
      if (!r) {
        uo();
        return;
      }
      const A = e.querySelector("#plot-container").getBoundingClientRect(), O = W.getBoundingClientRect(), K = A.left - O.left, te = A.right - O.left;
      Xe = K, pt = te, oe.style.width = `${K}px`, X.style.flex = "none", X.style.width = `${te - K}px`, Q.style.width = `${W.clientWidth - te}px`, fn(parseFloat(H.value));
    }
    function Bt() {
      if (!a || W.style.display === "none") return;
      if (!r || !q) {
        uo();
        return;
      }
      const N = q.convertToPixel(st), A = q.convertToPixel(kt);
      if (N == null || A == null) return;
      const O = e.querySelector("#plot-container"), te = (O.firstElementChild ?? O).getBoundingClientRect(), Z = W.getBoundingClientRect(), we = te.left - Z.left;
      Xe = N + we, pt = A + we, !(pt <= Xe) && (oe.style.width = `${Xe - Bo - aa}px`, X.style.flex = "none", X.style.width = `${pt - Xe + 3 * aa}px`, Q.style.width = `${W.clientWidth - pt - Bo - aa - 2}px`, fn(parseFloat(H.value)));
    }
    function fn(N) {
      const A = kt - st;
      if (A <= 0) return;
      const O = Math.max(0, Math.min(1, (N - st) / A));
      ce.style.left = `${Xe + O * (pt - Xe)}px`;
    }
    function Qt(N, A, O) {
      var _a3, _b2;
      const [K, te] = Fa(A), Z = ae(), we = (O == null ? void 0 : O.folded) ?? false, Ee = (O == null ? void 0 : O.gap) ?? 0, ue = (O == null ? void 0 : O.showText) ?? false, Se = ((_b2 = (_a3 = nn(c)) == null ? void 0 : _a3[0]) == null ? void 0 : _b2.w) ?? 1;
      switch (N) {
        case "bins": {
          const $e = c.querySelectorAll(".enc-row"), Ze = Array.from($e).map((_e2, Ct) => (le == null ? void 0 : le[Ct]) ?? ut(parseInt(_e2.dataset.colorIdx ?? "0", 10)));
          return {
            folded: we,
            w: Se,
            lo: K,
            hi: te,
            colors: Ze
          };
        }
        case "per-bin":
          return le ? {
            colors: le
          } : {};
        case "similarity":
          return {
            refPoints: Z,
            colors: pe.map(($e) => Qe[$e % Qe.length])
          };
        case "bits-by-data":
          return {
            gap: Ee
          };
        case "projected-similarity":
          return {
            gap: Ee,
            showText: ue
          };
        default:
          return {};
      }
    }
    function hn() {
      const N = qt();
      M && (M.textContent = N === 1 ? "Add encoders above, then enable plots to the left" : N === 2 ? "No plots enabled, click one of the highlighted plot types to the left" : "Add encoders to see data", M.style.display = N !== 4 ? "flex" : "none"), l == null ? void 0 : l.classList.toggle("attention-pulse", N === 1 || N === 3);
    }
    function yn() {
      if (!T) return;
      T.style.display = "flex";
      const N = !!n.compactPlotControls;
      T.classList.toggle("subplot-panel-compact", N);
      const A = qt() === 2;
      z.innerHTML = "", ot.value.forEach((O, K) => {
        var _a3;
        const te = se.value.some((_e2) => _e2.type === O), Z = document.createElement("div"), we = !te && A;
        Z.className = "subplot-chip" + (te ? "" : " chip-disabled") + (we ? " attention-pulse" : "") + (N ? " subplot-chip-compact" : ""), Z.draggable = true, Z.setAttribute("role", "button"), Z.tabIndex = 0, Z.setAttribute("aria-pressed", te ? "true" : "false"), Z.setAttribute("aria-label", `Toggle ${xn[O] ?? O}`), Z.dataset.tooltip = `${xn[O] ?? O} \u2014 ${te ? "enabled" : "disabled"} \xB7 click to toggle, drag to reorder`;
        const Ee = ra[O];
        if (Ee && (Z.style.background = te ? Ee.bg : Ee.mutedBg), !N) {
          const _e2 = document.createElement("div");
          _e2.className = "chip-drag-handle", _e2.textContent = "\u283F", Z.appendChild(_e2);
        }
        const ue = document.createElement("div");
        if (ue.className = "chip-body", N || Z.appendChild(ue), Z.addEventListener("dragstart", (_e2) => {
          Xt = K, Ur = true, Z.style.opacity = "0.45", _e2.dataTransfer.effectAllowed = "move", _e2.dataTransfer.setData("text/plain", String(K));
        }), Z.addEventListener("dragend", () => {
          Z.style.opacity = "1", z.querySelectorAll(".subplot-chip").forEach((_e2) => _e2.classList.remove("drag-over")), setTimeout(() => {
            Ur = false;
          }, 0);
        }), Z.addEventListener("dragover", (_e2) => {
          _e2.preventDefault(), _e2.dataTransfer.dropEffect = "move", Z.classList.add("drag-over");
        }), Z.addEventListener("dragleave", (_e2) => {
          Z.contains(_e2.relatedTarget) || Z.classList.remove("drag-over");
        }), Z.addEventListener("drop", (_e2) => {
          if (_e2.preventDefault(), Z.classList.remove("drag-over"), Xt === null || Xt === K) return;
          const Ct = [
            ...ot.value
          ], [qc] = Ct.splice(Xt, 1);
          Ct.splice(K, 0, qc), ot.value = Ct, Xt = null, Pt();
        }), Z.addEventListener("click", () => {
          Ur || po(O, te ? "off" : "on");
        }), Z.addEventListener("keydown", (_e2) => {
          (_e2.key === "Enter" || _e2.key === " ") && (_e2.preventDefault(), po(O, te ? "off" : "on"));
        }), N) {
          const _e2 = document.createElement("span");
          _e2.className = "subplot-chip-icon", _e2.textContent = gl[O] ?? ((_a3 = xn[O]) == null ? void 0 : _a3[0]) ?? "?", Z.appendChild(_e2), z.appendChild(Z);
          return;
        }
        const Se = document.createElement("div");
        Se.className = "chip-top-row";
        const $e = document.createElement("span");
        $e.className = "subplot-chip-label";
        const Ze = document.createElement("span");
        if (Ze.className = "subplot-chip-icon", Ze.textContent = "", $e.append(Ze, " " + (xn[O] ?? O)), Se.append($e, _t(`subplot.${O}`)), ue.appendChild(Se), !te) {
          z.appendChild(Z);
          return;
        }
        z.appendChild(Z);
      });
    }
    function po(N, A) {
      A === "on" ? Tc(N) : (se.update((O) => O.filter((K) => K.type !== N)), hn(), Pt());
    }
    function Kr() {
      if (se.value.length > 0) return;
      const N = {
        id: `bins-${Date.now()}`,
        type: "bins",
        heightFrac: 0.33,
        xAxis: "shared",
        params: J ? Qt("bins", J) : {}
      };
      se.update((A) => [
        ...A,
        N
      ]), wt();
    }
    function Tc(N) {
      const A = {
        id: `${N}-${Date.now()}`,
        type: N,
        heightFrac: 0.33,
        xAxis: "shared",
        params: J ? Qt(N, J) : {}
      };
      se.update((O) => [
        ...O,
        A
      ]), wt(), hn(), Pt();
    }
    function Pt() {
      if (hn(), qt() !== 4) {
        Le();
        return;
      }
      if (!J || !q) return;
      const N = J;
      if (se.update((A) => A.map((O) => {
        var _a3;
        return {
          ...O,
          params: Qt(O.type, N, O.params),
          color: (_a3 = ra[O.type]) == null ? void 0 : _a3.titleColor
        };
      })), q.compose(se.value, N, he), L.has(i.value)) {
        Bt();
        const A = parseFloat(H.value);
        q.updateScalar(A);
        const { refPoints: O, refColors: K } = mn();
        s.buildBitsPanelStructure(N, G, O, K, Hr(), Ft), s.updateBitsPanelScalar(N, A, O, K), Nn(N, A, c);
      }
    }
    function Rc(N, A) {
      const O = se.value[N];
      if (!O) return;
      const K = O.params ?? (O.params = {});
      if (A === "fold") {
        const te = !K.folded;
        K.folded = te, (async () => (q && await q.animateBinsFold(te), Pt()))();
        return;
      }
      A === "boundaries" ? K.gap = K.gap === 1 ? 0 : 1 : A === "counts" && (K.showText = !K.showText), Pt();
    }
    function Yr() {
      var _a3;
      if ((t == null ? void 0 : t.persistState) !== false) try {
        const N = nn(c), A = ((_a3 = e.querySelector("#preset-select")) == null ? void 0 : _a3.value) ?? "", O = {
          encoders: N ?? [],
          viewBounds: I(),
          refPoints: v.value,
          view: i.value,
          folded: B.checked,
          scalarCursor: H.value,
          presetIdx: A
        };
        if ((t == null ? void 0 : t.setup) || (t == null ? void 0 : t.ui)) {
          const K = {
            encoders: O.encoders,
            viewBounds: O.viewBounds,
            refPoints: O.refPoints,
            view: O.view,
            folded: O.folded,
            scalarCursor: O.scalarCursor,
            subplots: se.value.map((te) => te.type)
          };
          window.location.hash = encodeURIComponent(JSON.stringify({
            setup: K,
            ui: t.ui
          }));
        } else window.location.hash = encodeURIComponent(JSON.stringify(O));
      } catch {
      }
    }
    function jc() {
      try {
        if (!window.location.hash) return;
        const N = JSON.parse(decodeURIComponent(window.location.hash.slice(1)));
        if (N.viewBounds) {
          const [A, O] = N.viewBounds.split(",").map(parseFloat);
          Number.isFinite(A) && Number.isFinite(O) && V(A, O);
        }
        if (Array.isArray(N.encoders) && N.encoders.length > 0 && (Vt(c, N.encoders, E()), mt()), N.refPoints) {
          const A = N.refPoints.split(",").map(Number).filter((O) => !isNaN(O));
          pe = A.map((O, K) => K), Te = A.length, R(A);
        }
        N.view && (i.value = N.view), N.folded !== void 0 && (B.checked = N.folded), N.scalarCursor && (H.value = N.scalarCursor, ce.textContent = parseFloat(N.scalarCursor).toFixed(3));
      } catch {
      }
    }
    function Oc() {
      const N = nn(c);
      if (!N) return c.querySelectorAll(".enc-row").length > 0 ? F("Invalid encoder configuration") : Y(), null;
      Y();
      try {
        return Jl({
          encoders: N,
          viewBounds: E()
        });
      } catch (A) {
        return F(`WASM error: ${A instanceof Error ? A.message : String(A)}`), null;
      }
    }
    function Mc(N, A, O) {
      var _a3;
      P.checked, $.checked, B == null ? void 0 : B.checked;
      const K = nn(c);
      (_a3 = K == null ? void 0 : K[0]) == null ? void 0 : _a3.w;
      const { specs: te, overrides: Z } = ec(A, N, {
        xWindow: void 0
      });
      he = Z;
      const we = A !== Pe;
      Pe = A, we && (se.value = te, wt()), se.update((ue) => ue.map((Se) => ({
        ...Se,
        params: Qt(Se.type, N, Se.params)
      })));
      const Ee = L.has(A);
      W.style.display = Ee ? "flex" : "none", Ee ? G.style.display = "flex" : G.style.display = "none", se.update((ue) => ue.map((Se) => {
        var _a4;
        return {
          ...Se,
          color: (_a4 = ra[Se.type]) == null ? void 0 : _a4.titleColor
        };
      })), q == null ? void 0 : q.compose(se.value, N, he), C && (C.textContent = `Bits: ${N.n_bits}  |  Regions: ${N.n_regions}  |  n: [${K == null ? void 0 : K.map((ue) => ue.n).join(", ")}]  |  w: [${K == null ? void 0 : K.map((ue) => ue.w).join(", ")}]`);
    }
    async function Le() {
      j && (j.style.display = "flex"), await new Promise((O) => requestAnimationFrame(() => O()));
      const N = Oc();
      j && (j.style.display = "none"), J = N;
      const A = se.value.length > 0;
      if (r && !q && (q = new Eu(e.querySelector("#plot-container")), q.getChart().on("finished", () => {
        if (At || !L.has(i.value)) return;
        const O = qt();
        (O === 3 || O === 4) && Bt();
      }), q.onSubplotControlToggle = Rc, q.compact = (t == null ? void 0 : t.compact) === true, q.compact || (q.subplotHelpIcon = (O) => _t(`subplot.${O}`))), a && L.has(i.value) && (W.style.display = "flex"), !N && !A) q && (q.getChart().clear(), q.hideCursor()), H.min = "0", H.max = "1", st = 0, kt = 1, yn(), s.showBitsPanelPlaceholder(G), Zt();
      else if (N && !A) {
        q && (q.getChart().clear(), q.hideCursor()), lo(), st = parseFloat(H.min), kt = parseFloat(H.max), yn();
        const { refPoints: O, refColors: K } = mn();
        s.buildBitsPanelStructure(N, G, O, K, Hr(), Ft);
        const te = parseFloat(H.value);
        s.updateBitsPanelScalar(N, te, O, K), Nn(N, te, c), Zt();
      } else if (!N && A) q && (q.getChart().clear(), q.hideCursor()), H.min = String(Sn[0]), H.max = String(Sn[1]), st = Sn[0], kt = Sn[1], yn(), s.showBitsPanelPlaceholder(G), Zt();
      else {
        if (Mc(N, i.value, ae()), L.has(i.value)) {
          lo(), st = parseFloat(H.min), kt = parseFloat(H.max), Bt();
          const { refPoints: O, refColors: K } = mn();
          s.buildBitsPanelStructure(N, G, O, K, Hr(), Ft);
          const te = parseFloat(H.value);
          q == null ? void 0 : q.updateScalar(te), s.updateBitsPanelScalar(N, te, O, K), Nn(N, te, c);
        }
        Yr();
      }
      Pe = i.value, hn();
    }
    function Jr(N) {
      const A = e.querySelector("#preset-select");
      if (A) {
        const te = ht.indexOf(N);
        A.value = te >= 0 ? String(te) : "";
      }
      if (N.empty) return Vt(c, []), mt(), se.value = [], Le();
      const [O, K] = N.viewBounds.split(",").map(parseFloat);
      return V(O, K), Vt(c, N.encoders, E()), mt(), i.value = N.view, Kr(), Le();
    }
    function mo(N) {
      if (N.presetIdx != null && ht[N.presetIdx]) return Jr(ht[N.presetIdx]);
      let A = null;
      if (Array.isArray(N.viewBounds)) A = N.viewBounds;
      else if (typeof N.viewBounds == "string") {
        const [O, K] = N.viewBounds.split(",").map(parseFloat);
        Number.isFinite(O) && Number.isFinite(K) && (A = [
          O,
          K
        ]);
      }
      if (A && V(A[0], A[1]), le = N.colors && N.colors.length ? N.colors : null, Vt(c, N.encoders ?? [], E()), mt(), N.refPoints != null) {
        const O = (Array.isArray(N.refPoints) ? N.refPoints : String(N.refPoints).split(",").map(Number)).filter((K) => !isNaN(K));
        pe = O.map((K, te) => te), Te = O.length, R(O);
      }
      if (i.value = N.view ?? "bins-only", B.checked = !!N.folded, N.scalarCursor != null && (H.value = String(N.scalarCursor), ce.textContent = parseFloat(String(N.scalarCursor)).toFixed(3)), N.subplots && N.subplots.length > 0) {
        const O = N.subplots;
        ot.value = [
          ...O,
          ...qo.filter((K) => !O.includes(K))
        ], se.value = O.map((K, te) => ({
          id: `${K}-${Date.now()}-${te}`,
          type: K,
          heightFrac: 0.33,
          xAxis: "shared",
          params: J ? Qt(K, J) : {}
        })), wt();
      } else Kr();
      return Pe = i.value, Le();
    }
    function fo(N, A) {
      let O;
      return ((...K) => {
        clearTimeout(O), O = setTimeout(() => N(...K), A);
      });
    }
    const Lc = fo(Le, xl);
    c.addEventListener("input", () => {
      Lc();
    });
    function mt() {
      l.disabled = c.querySelectorAll(".enc-row").length >= Fo;
    }
    c.addEventListener("click", (N) => {
      const A = N.target.closest(".enc-remove");
      if (!A) return;
      const O = A.closest(".enc-row");
      O && (O.remove(), Oa(c), mt(), Le());
    }), l.addEventListener("click", () => {
      const N = c.querySelectorAll(".enc-row");
      if (N.length >= Fo) return;
      const A = N.length === 0, O = N[N.length - 1], K = (() => {
        if (!O) return {};
        const te = O.dataset.type ?? "interval-fixed", Z = parseFloat(O.querySelector(".enc-offset").value), we = parseFloat(O.querySelector(".enc-range").value), Ee = O.querySelector(".enc-w"), ue = {
          type: te,
          n: parseInt(O.querySelector(".enc-n").value, 10),
          w: Ee ? parseInt(Ee.value, 10) : 1,
          lower_bound: Z,
          upper_bound: Z + we
        };
        if (te === "periodic-cell") {
          const Se = O.querySelector(".enc-min-period"), $e = O.querySelector(".enc-max-period"), Ze = O.querySelector(".enc-l-frac");
          Se && (ue.min_period = parseFloat(Se.value)), $e && (ue.max_period = parseFloat($e.value)), Ze && (ue.l_frac = parseFloat(Ze.value));
        }
        if (te === "periodic-random-cell") {
          const Se = O.querySelector(".enc-period-rand"), $e = O.querySelector(".enc-l-frac-rand"), Ze = O.querySelector(".enc-rand-origin"), _e2 = O.querySelector(".enc-rand-period"), Ct = O.querySelector(".enc-rand-l-frac");
          Se && (ue.const_period = parseFloat(Se.value), ue.max_period = parseFloat(Se.value)), $e && (ue.const_l_frac = parseFloat($e.value), ue.max_l_frac = parseFloat($e.value)), ue.randomize_origins = (Ze == null ? void 0 : Ze.checked) ?? false, ue.randomize_periods = (_e2 == null ? void 0 : _e2.checked) ?? false, ue.randomize_l_frac = (Ct == null ? void 0 : Ct.checked) ?? false, O.dataset.seed && (ue.seed = parseInt(O.dataset.seed, 10));
        }
        if (te === "interval-random-cell") {
          const Se = O.querySelector(".enc-l-rand"), $e = O.querySelector(".enc-rand-l");
          Se && (ue.const_l = parseFloat(Se.value), ue.max_l = parseFloat(Se.value)), ue.randomize_l = ($e == null ? void 0 : $e.checked) ?? false, O.dataset.seed && (ue.seed = parseInt(O.dataset.seed, 10));
        }
        return ue;
      })();
      c.appendChild(Xi(K, E())), Oa(c), mt(), A && Kr(), Le();
    }), u.addEventListener("click", () => {
      Vt(c, []), V(Ia[0], Ia[1]);
      const N = e.querySelector("#preset-select");
      N && (N.value = "0"), mt(), Le();
    });
    const ho = fo(() => {
      fe(), Le();
    }, vl);
    b.addEventListener("input", () => {
      let N = parseFloat(b.value);
      const O = parseFloat(w.value) - qe, K = ee(), te = K ? K.minEncLo : 1 / 0, Z = Math.min(O, te);
      N > Z && (N = Z, b.value = String(N)), _.value = N.toFixed(1), ne(), ho();
    }), w.addEventListener("input", () => {
      let N = parseFloat(w.value);
      const O = parseFloat(b.value) + qe, K = ee(), te = K ? K.maxEncHi : -1 / 0, Z = Math.max(O, te);
      N < Z && (N = Z, w.value = String(N)), g.value = N.toFixed(1), ne(), ho();
    });
    function yo(N, A) {
      const O = () => {
        const K = parseFloat(N.value.trim());
        if (!isFinite(K)) {
          N.classList.add("enc-val-invalid"), setTimeout(() => N.classList.remove("enc-val-invalid"), 600), N.value = parseFloat(A.value).toFixed(1);
          return;
        }
        const te = parseFloat(A.step) || 0.1;
        let Z = Math.max(wn, Math.min(kn, K));
        Z = Math.round(Z / te) * te, Z = Math.max(wn, Math.min(kn, Z)), A.value = String(Z), A.dispatchEvent(new Event("input", {
          bubbles: true
        })), N.value = parseFloat(A.value).toFixed(1), N.classList.remove("enc-val-invalid");
      };
      N.addEventListener("change", O), N.addEventListener("blur", O), N.addEventListener("keydown", (K) => {
        K.key === "Enter" && (K.preventDefault(), O(), N.blur());
      });
    }
    yo(_, b), yo(g, w), ne();
    let Xr = null, Et = null, zt = null, ft = null;
    function Fc() {
      Et = {
        value: v.value,
        colorIdxs: [
          ...pe
        ],
        nextIdx: Te
      };
    }
    function Zr() {
      Et && (v.value = Et.value, pe = [
        ...Et.colorIdxs
      ], Te = Et.nextIdx);
    }
    function Qr() {
      if (se.value.some((N) => N.type === "similarity")) Pt();
      else if (J) {
        const N = pe.map((A) => Qe[A % Qe.length]);
        s.refreshBitsPanelRefControls(), s.refreshBitsPanelRefs(J, ae(), N);
      }
    }
    function go(N) {
      if (!isNaN(N)) {
        if (Zr(), ft !== null) {
          const A = ae();
          A[ft] = N, v.value = A.join(",");
        } else at(N);
        Qr();
      }
    }
    function _o(N, A = null) {
      Xr = N, ft = A, Fc();
      const [O, K] = E(), te = parseFloat(((K - O) / 500).toPrecision(2));
      let Z = A !== null ? ae()[A] : (O + K) / 2;
      isFinite(Z) || (Z = (O + K) / 2), Z = Math.max(O, Math.min(K, parseFloat(Z.toFixed(4)))), y.min = String(O), y.max = String(K), y.step = String(te), y.value = String(Z), S.textContent = O.toFixed(3), k.textContent = K.toFixed(3), d.textContent = Z.toFixed(4), f.textContent = A !== null ? "Ok" : "Add";
      const we = N.getBoundingClientRect(), Ee = Math.min(we.right + 8, window.innerWidth - 215), ue = Math.max(0, Math.min(we.top, window.innerHeight - 180));
      h.style.left = `${Ee}px`, h.style.top = `${ue}px`, h.style.display = "block", go(Z), setTimeout(() => document.addEventListener("click", xo), 0);
    }
    function vo() {
      zt !== null && (cancelAnimationFrame(zt), zt = null), h.style.display = "none", Xr = null, document.removeEventListener("click", xo);
    }
    function ea() {
      const N = ft;
      Zr(), N !== null && Lt(N), Et = null, ft = null, vo(), Qr(), N !== null && Yr();
    }
    function bo() {
      const N = parseFloat(y.value), A = ft;
      if (Zr(), A !== null) {
        const O = ae();
        isNaN(N) || (O[A] = N), v.value = O.join(",");
      } else isNaN(N) || at(N);
      Et = null, ft = null, vo(), Qr(), Yr();
    }
    function xo(N) {
      !h.contains(N.target) && N.target !== Xr && (ft !== null ? bo() : ea());
    }
    y.addEventListener("input", () => {
      const N = parseFloat(y.value);
      d.textContent = N.toFixed(4), zt === null && (zt = requestAnimationFrame(() => {
        zt = null, go(parseFloat(y.value));
      }));
    }), f.addEventListener("click", () => bo()), p.addEventListener("click", () => ea()), i.addEventListener("change", Le), H == null ? void 0 : H.addEventListener("input", Gr), H == null ? void 0 : H.addEventListener("pointerdown", () => {
      At = true;
    }), H == null ? void 0 : H.addEventListener("pointerup", () => {
      At = false, L.has(i.value) && Bt();
    }), ce == null ? void 0 : ce.addEventListener("pointerdown", (N) => {
      N.preventDefault(), ce.setPointerCapture(N.pointerId), At = true;
    }), ce == null ? void 0 : ce.addEventListener("pointermove", (N) => {
      if (!ce.hasPointerCapture(N.pointerId)) return;
      const A = W.getBoundingClientRect(), O = pt - Xe;
      if (O <= 0) return;
      const K = Math.max(0, Math.min(1, (N.clientX - A.left - Xe) / O)), te = st + K * (kt - st);
      H.value = String(te), Gr();
    });
    const So = (N) => {
      ce.releasePointerCapture(N.pointerId), At = false, L.has(i.value) && Bt();
    };
    ce == null ? void 0 : ce.addEventListener("pointerup", So), ce == null ? void 0 : ce.addEventListener("pointercancel", So);
    const en = e.querySelector("#preset-select");
    if (en) {
      ht.forEach((N, A) => {
        const O = document.createElement("option");
        O.value = String(A), O.textContent = N.label, en.appendChild(O);
      });
      try {
        if (window.location.hash) {
          const N = JSON.parse(decodeURIComponent(window.location.hash.slice(1)));
          N.presetIdx !== void 0 && (en.value = N.presetIdx);
        }
      } catch {
      }
      en.addEventListener("change", () => {
        const N = parseInt(en.value, 10);
        !isNaN(N) && ht[N] && Jr(ht[N]);
      });
    }
    function Ac() {
      if (!q) return;
      const N = q.getChart();
      N.getZr().on("click", (A) => {
        const O = N.convertFromPixel({
          xAxisIndex: 0
        }, A.offsetX);
        if (O == null || !isFinite(O)) return;
        const K = parseFloat(O.toFixed(3));
        at(K), Le();
      });
    }
    let gn;
    if (t == null ? void 0 : t.setup) gn = mo(t.setup);
    else if (window.location.hash) Vt(c, [
      {
        type: "interval-fixed",
        n: 13,
        w: 1,
        lower_bound: 0,
        upper_bound: 1
      }
    ], E()), mt(), jc(), Pe = "", gn = Le();
    else {
      const N = (t == null ? void 0 : t.initialPresetIdx) ?? Ao;
      gn = Jr(ht[N] ?? ht[Ao]);
    }
    let _n = null;
    window.addEventListener("resize", () => {
      if (q == null ? void 0 : q.getChart().resize(), !At && L.has(i.value)) {
        const N = qt();
        if (N === 1 || N === 2) Zt();
        else if (Bt(), N === 4) {
          const A = parseFloat(H.value);
          q && isFinite(A) && q.updateScalar(A);
        }
      }
    });
    const wo = e.querySelector("#plot-container");
    if (wo && typeof ResizeObserver < "u") {
      let N = false, A = 0, O = 0;
      _n = new ResizeObserver((K) => {
        var _a3;
        const te = (_a3 = K[0]) == null ? void 0 : _a3.contentRect;
        if (!te) return;
        const Z = Math.round(te.width), we = Math.round(te.height);
        Z === A && we === O || (A = Z, O = we, !N && (N = true, requestAnimationFrame(() => {
          N = false, q && (q.getChart().resize(), qt() === 4 ? Pt() : L.has(i.value) && Zt());
        })));
      }), _n.observe(wo);
    }
    return gn.then(() => {
      Ac();
    }), window.__dccDebugCapture = () => {
      var _a3, _b2, _c3;
      const N = e.querySelector("#plot-container"), A = se.value.map((K, te) => {
        const Z = N == null ? void 0 : N.querySelector("canvas");
        return {
          gi: te,
          type: K.type,
          hasCanvas: !!Z,
          params: K.params
        };
      }), O = {
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        encoders: nn(c),
        viewBounds: E(),
        currentSpecs: A,
        scalarCursor: parseFloat(H.value),
        refPoints: ae(),
        lastEncoderData: J ? {
          n_bits: J.n_bits,
          n_regions: J.n_regions,
          boundaries: J.boundaries,
          deltas: J.deltas,
          weights: J.weights,
          similarity_shape: [
            J.similarity.length,
            ((_a3 = J.similarity[0]) == null ? void 0 : _a3.length) ?? 0
          ],
          codes_shape: [
            J.codes.length,
            ((_b2 = J.codes[0]) == null ? void 0 : _b2.length) ?? 0
          ],
          sub_encoders: J.sub_encoders.map((K) => {
            var _a4, _b3;
            return {
              type: K.type,
              n_bits: K.n_bits,
              lower_bound: K.lower_bound,
              upper_bound: K.upper_bound,
              view_lower_bound: K.view_lower_bound,
              view_upper_bound: K.view_upper_bound,
              n_primary_bins: (_a4 = K.primary_bins) == null ? void 0 : _a4.length,
              n_bins_total: (_b3 = K.bins) == null ? void 0 : _b3.length
            };
          })
        } : null
      };
      console.log("[__dccDebugCapture]", O);
      try {
        const K = JSON.stringify(O, null, 2);
        (_c3 = navigator.clipboard) == null ? void 0 : _c3.writeText(K), console.log("[__dccDebugCapture] copied JSON to clipboard");
      } catch {
      }
      return O;
    }, {
      destroy() {
        _n == null ? void 0 : _n.disconnect(), _n = null, _l(), e.innerHTML = "", delete window.__dccDebugCapture;
      },
      setScalarCursor(N) {
        Number.isFinite(N) && (H.value = String(N), Gr());
      },
      setConfig(N, A) {
        mo(N);
      }
    };
  }
  const Nu = Cu, $u = '*{box-sizing:border-box;margin:0;padding:0}@keyframes attention-pulse{0%,to{outline:3px solid transparent;outline-offset:0px}50%{outline:6px solid rgb(238 130 49 / .81);outline-offset:0px}}.attention-pulse{animation:attention-pulse 1.1s ease-in-out infinite}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;background:#888;color:#111;padding:4px 8px 8px;display:flex;flex-direction:column;min-height:100vh;overflow-y:auto;overflow-x:hidden}h1{font-size:1.1rem;font-weight:600;color:#111;flex-shrink:0}#control-panels{display:flex;flex-direction:row;gap:2px;margin:2px 0 0;flex-shrink:0;align-items:stretch}.controls{display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start;background:#ccc;border:2px solid #333333;border-radius:8px;padding:10px 14px;flex-shrink:0;box-shadow:2px 4px 8px #0006,inset 0 1px #ffffff8c}.controls.encoder-config{flex:1;flex-direction:row;gap:8px;align-items:stretch;padding:10px 6px}.enc-config-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:12px}.enc-config-right{flex:0 0 250px;display:flex;flex-direction:column;gap:8px;align-items:stretch}.enc-group{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px 16px;align-items:flex-start}.panel-title{display:flex;flex-wrap:wrap;justify-content:center;border:solid 1px #333333;border-radius:8px;padding:2px 6px;background:#ccc;text-align:center;font-size:1.2rem;font-weight:600;color:#555;pointer-events:none}.controls.view-config{flex:.1;flex-direction:column;gap:8px}.config-row-start{display:flex;gap:16px;align-items:flex-start}.config-row-end{display:flex;flex-direction:row;gap:8px;align-items:flex-start;justify-content:flex-end}.enc-list-row{display:flex;flex-wrap:wrap;gap:4px;align-items:center}.control-group{display:flex;flex-direction:column;gap:4px}label{font-size:.72rem;color:#111;text-transform:uppercase;letter-spacing:.05em;align-self:center}select,input[type=text],input[type=number]{background:#ccc;border:2px solid #333333;border-radius:4px;color:#111;padding:4px 7px;font-size:.85rem}select{box-shadow:1px 2px 4px #0000004d,inset 0 1px #ffffff80;cursor:pointer}input[type=text]{width:140px}input[type=number]{width:54px;-moz-appearance:textfield}input[type=number]::-webkit-outer-spin-button,input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=range]{width:100px;accent-color:#333333}input[type=range]:disabled{opacity:.3;cursor:not-allowed}.range-row{display:flex;align-items:center;gap:6px}.range-val{font-size:.85rem;min-width:1.2em;color:#111}.w-slider-col{display:flex;flex-direction:column;gap:1px}#w-tick-row{display:flex;justify-content:space-between;width:100px;font-size:.6rem;color:#444;line-height:1}.checkbox-row{display:flex;align-items:center;gap:5px;font-size:.82rem}#encoder-list{display:flex;flex-direction:row;flex-wrap:wrap;align-items:flex-start;gap:8px;flex:1;min-width:0}.enc-header-row{display:flex;align-items:center;gap:4px;justify-content:space-between;margin:-4px -6px 4px;padding:4px 8px;background:#00000040;border-radius:2px 2px 0 0;border-bottom:1px solid rgba(0,0,0,.3);user-select:none}.enc-type{box-sizing:border-box;grid-column:3 / -1;width:100%;font-size:.62rem;letter-spacing:.05em;background:#ccc;border:2px solid #333333;border-radius:4px;color:#111;padding:2px 6px;box-shadow:1px 2px 4px #0000004d,inset 0 1px #ffffff80;cursor:pointer}div.enc-header-row select.enc-type ::picker{background:#fff;border:2px solid #333;box-shadow:0 4px 12px #0000001a;padding:5px}select:not(:-internal-list-box)::picker .enc-type{color:-internal-auto-base(inherit,CanvasText)}.enc-row{display:flex;flex-direction:column;align-items:stretch;flex:0 0 304px;width:304px;box-sizing:border-box;background:#0f3460;border:2px solid #000000;border-radius:4px;padding:4px 6px;box-shadow:1px 2px 5px #00000080,inset 0 1px #ffffff2e}.enc-edit-btn{background:#ffffff2e;border:1px solid #000000;border-radius:3px;color:#fff;cursor:pointer;font-size:.75rem;padding:1px 5px;line-height:1.4;box-shadow:1px 1px 3px #0006,inset 0 1px #ffffff4d}.enc-edit-btn:hover{background:#fff6}.enc-edit-btn:active{box-shadow:inset 1px 1px 3px #00000073}.enc-type-label{flex:1;min-width:0;font-size:.62rem;letter-spacing:.05em;color:#fff;padding:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.enc-shorthand{display:block;color:#fff;font-size:.7rem;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;padding:2px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.enc-mini-bits{display:flex;flex-wrap:nowrap;gap:2px;padding:3px 4px 4px;overflow:hidden}.enc-mini-bit{flex:1 1 0;min-width:0;height:14px;box-sizing:border-box;border-radius:2px;border:2px solid #000000}.enc-row .enc-body{display:none}.n-slider-col{display:flex;flex-direction:column;gap:1px}.enc-body{display:grid;grid-template-columns:64px 18px 120px 36px 24px;column-gap:6px;row-gap:2px;align-items:center}.enc-help-cell{grid-column:2;justify-self:center;align-self:center;margin:0}.enc-help-cell .info-icon,.enc-help-cell.info-icon{margin:0}.n-slider-row{display:contents}input[type=range].enc-n,input[type=range].enc-w,input[type=range].enc-offset,input[type=range].enc-range,input[type=range].enc-period,input[type=range].enc-period-rand,input[type=range].enc-l-frac,input[type=range].enc-l-frac-rand,input[type=range].enc-l-rand,input[type=range].enc-min-period,input[type=range].enc-max-period{grid-column:3;width:120px;accent-color:#ffffff}input.enc-n-val{grid-column:4;box-sizing:border-box;width:100%;min-width:0;font-size:.6rem;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff;text-align:center;background:#0000004d;border:1px solid rgba(255,255,255,.22);border-radius:3px;padding:0 1px;-moz-appearance:textfield;appearance:textfield}.enc-n-val:hover{border-color:#fff6}.enc-n-val:focus{outline:none;border-color:#4a90d9;background:#00000073}.enc-n-val.enc-val-invalid{border-color:#e15759}.enc-slider-label{grid-column:1;font-size:.6rem;color:#fff;text-transform:uppercase;text-align:right;white-space:normal;line-height:1.1}.n-tick-row{display:flex;justify-content:space-between;grid-column:3;width:120px;padding:0 0 0 4px;box-sizing:border-box;font-size:.58rem;color:#fff;line-height:1;margin-top:-5px;margin-bottom:1px}.enc-w-divider{border-top:1px solid #555555;margin:3px 0}.dual-range{display:flex;align-items:center;gap:6px}.dual-range-track{position:relative;width:380px;height:24px}.dual-range-track:before{content:"";position:absolute;left:0;right:0;top:50%;height:14px;transform:translateY(-50%);background:#ccc;border:2px solid #333333;border-radius:4px;box-shadow:1px 2px 4px #0000004d,inset 0 1px #ffffff80}.dual-range-track:after{content:"";position:absolute;left:6px;right:6px;top:50%;height:4px;transform:translateY(-50%);background:#888;border-radius:2px;pointer-events:none;z-index:1}.dual-range-fill{position:absolute;top:50%;height:4px;transform:translateY(-50%);background:#4a90d9;border-radius:2px;pointer-events:none;z-index:2}.dual-range-track input[type=range]{position:absolute;inset:0;width:100%;background:transparent;-webkit-appearance:none;appearance:none;pointer-events:none;z-index:3}.dual-range-track input[type=range]::-webkit-slider-runnable-track{background:transparent;border:none}.dual-range-track input[type=range]::-moz-range-track{background:transparent;border:none}.dual-range-track input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;pointer-events:auto;width:16px;height:16px;border-radius:50%;background:#fff;border:2px solid #333333;cursor:pointer;margin-top:0}.dual-range-track input[type=range]::-moz-range-thumb{pointer-events:auto;width:16px;height:16px;border-radius:50%;background:#fff;border:2px solid #333333;cursor:pointer}input.dual-range-val{box-sizing:border-box;width:46px;min-width:46px;font-size:.72rem;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:#111;text-align:center;background:#e8e8e8;border:1px solid #888888;border-radius:3px;padding:2px;font-variant-numeric:tabular-nums}input.dual-range-val:hover{border-color:#555}input.dual-range-val:focus{outline:none;border-color:#4a90d9;background:#fff}input.dual-range-val.enc-val-invalid{border-color:#e15759;background:#ffe8e8}.enc-remove{background:#ffffff2e;border:1px solid #000000;border-radius:3px;color:#fff;cursor:pointer;font-size:.75rem;padding:1px 5px;line-height:1.4;box-shadow:1px 1px 3px #0006,inset 0 1px #ffffff4d}.enc-remove:hover{border-color:#e15759;color:#e15759}.enc-remove:active{box-shadow:inset 1px 1px 3px #00000073}.enc-reshuffle{grid-column:3;justify-self:center;margin-top:4px}#enc-add,#enc-reset,.enc-reshuffle{background:#ccc;border:2px solid #333333;border-radius:4px;color:#111;cursor:pointer;font-size:.75rem;padding:2px 8px;box-shadow:1px 2px 4px #0000004d,inset 0 1px #ffffff8c}#enc-add:hover,#enc-reset:hover,.enc-reshuffle:hover{border-color:#000;color:#000}#enc-add:active,#enc-reset:active,.enc-reshuffle:active{box-shadow:inset 1px 2px 4px #00000059}#enc-add:disabled,#enc-reset:disabled,.enc-reshuffle:disabled{background:#aaa;border-color:#888;color:#666;cursor:not-allowed;box-shadow:none;opacity:.6}.enc-rand-icon{grid-column:5;justify-self:center;appearance:none;-webkit-appearance:none;box-sizing:border-box;width:24px;height:20px;margin:0;padding:0;border:1px solid rgba(255,255,255,.3);border-radius:3px;background-color:#00000040;background-image:repeating-linear-gradient(45deg,rgba(255,255,255,.1) 0,rgba(255,255,255,.1) 2px,transparent 2px,transparent 4px);cursor:pointer;position:relative;flex-shrink:0;transition:background-color .15s ease,border-color .15s ease,box-shadow .1s ease,filter .15s ease;filter:grayscale(1) opacity(.55)}.enc-rand-icon:before{content:"\u{1F3B2}";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:1rem;line-height:1}.enc-rand-icon:hover{border-color:gold}.enc-rand-icon:active{box-shadow:inset 0 1px 2px #00000073}.enc-rand-icon:checked{background-color:#4a90d9;background-image:none;border-color:#ffffff80;filter:none;box-shadow:inset 0 1px 2px #00000040}.enc-rand-icon:checked:hover{border-color:gold;background-color:#5aa0e9}.metrics-label{align-self:center}.metrics{font-size:.78rem;background:#aaa;border:1px solid #555555;border-radius:3px;padding:2px 6px;align-self:center;justify-self:end}.error-banner{display:none;background:#fdd;border:2px solid #cc0000;border-radius:4px;padding:7px 11px;font-size:.82rem;color:#500;margin-bottom:8px;flex-shrink:0}#periodic-controls,#fixed-controls,#weight-control{display:none}#scalar-row{display:none;align-items:stretch;margin:0;padding:0;gap:0;flex-shrink:0;position:relative}#scalar-val-gutter{flex-shrink:0}#scalar-val{position:absolute;top:50%;left:0;transform:translate(-50%,-50%);z-index:10;cursor:grab;user-select:none;touch-action:none;font-size:.82rem;color:#fff;background:#0064a3;border:2px solid #000000;border-radius:5px;padding:3px 2px;box-shadow:2px 4px 8px #0000004d,inset 0 1px #fff3;white-space:nowrap;display:flex;align-items:center;font-weight:600}#scalar-val:before{content:"\u283F";font-size:.75rem;color:#ffffff80;margin-right:4px;line-height:1}#scalar-val:after{content:"\u283F";font-size:.75rem;color:#ffffff80;margin-left:4px;line-height:1}#scalar-val:active{cursor:grabbing;background:#004f82}#scalar-slider-wrap{position:relative;background:#0064a300;border:2px solid #000000;border-radius:5px;padding:4px;box-shadow:2px 4px 16px #000c,inset 0 1px #fff3;display:flex;align-items:center;min-width:0;min-height:36px;flex-shrink:0}#scalar-slider{-webkit-appearance:none;appearance:none;min-width:0;width:100%;height:6px;border-radius:3px;background:#0064a359;outline:none;cursor:pointer}#scalar-slider::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:#0064a359}#scalar-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:0;height:0;border:none;box-shadow:none;margin-top:0}#scalar-slider::-moz-range-thumb{width:0;height:0;border:none;box-shadow:none}#scalar-slider::-moz-range-track{height:6px;border-radius:3px;background:#0064a359}#scalar-right-pad{flex-shrink:0}#plot-container{background:#eee;border:2px solid #333333;border-radius:8px;padding:0 8px;width:100%;flex:1;min-height:300px;position:relative;overflow:hidden;box-shadow:2px 4px 8px #0006,inset 0 1px #ffffff8c;margin:0}#empty-plot-msg{display:none;position:absolute;inset:0;align-items:center;justify-content:center;color:#555;font-size:.95rem;pointer-events:none;z-index:15}#main-area{display:flex;flex:1;flex-direction:column;min-height:600px;margin:16px 0 0}[data-embed] #main-area{min-height:0;margin-top:0}[data-embed] #plot-container{min-height:0}#center-col{flex:1;min-width:0;min-height:0;display:flex;flex-direction:row;gap:8px}#subplot-panel{display:none;flex-direction:column;gap:6px;width:200px;flex-shrink:0;align-self:stretch;overflow-y:auto;background:#ccc;border:2px solid #333333;border-radius:8px;padding:8px;box-shadow:2px 4px 8px #0006,inset 0 1px #ffffff8c}#subplot-chips{display:flex;flex-direction:column;gap:4px}.subplot-panel-title{font-size:.68rem;font-weight:700;color:#444;letter-spacing:.07em;text-align:center;text-transform:uppercase;padding-bottom:4px;border-bottom:1px solid #aaa;margin-bottom:2px}.subplot-chip-icon{font-size:.8rem;line-height:1;margin-right:3px}.subplot-chip-label{flex:1;font-size:.78rem;font-weight:600;overflow-wrap:anywhere;line-height:1.15}.subplot-chip{display:flex;flex-direction:row;align-items:stretch;gap:0;background:#d4d4d4;border:1px solid #888888;border-radius:4px;padding:4px 5px;font-size:.75rem;color:#111;cursor:pointer;box-shadow:1px 2px 4px #00000040,inset 0 1px #ffffff8c}.subplot-chip:hover{filter:brightness(1.06)}.subplot-chip:focus-visible{outline:2px solid rgba(255,160,20,.9);outline-offset:2px}.chip-drag-handle{display:flex;align-items:center;justify-content:center;width:14px;flex-shrink:0;padding-right:4px;font-size:.9rem;color:#0000004d;user-select:none;cursor:grab}.chip-body{display:flex;flex-direction:column;flex:1;gap:0;min-width:0}.chip-top-row{display:flex;align-items:center;gap:3px;width:100%;padding:3px 5px;user-select:none}#subplot-panel.subplot-panel-compact{width:auto;padding:5px;gap:5px;overflow-x:hidden}#subplot-panel.subplot-panel-compact .subplot-panel-title{display:none}#subplot-panel.subplot-panel-compact #subplot-chips{gap:5px}.subplot-chip.subplot-chip-compact{flex-direction:row;align-items:center;justify-content:center;width:30px;height:30px;padding:0}.subplot-chip.subplot-chip-compact .subplot-chip-icon{margin:0;font-size:1.05rem;line-height:1}.chip-controls{display:flex;flex-wrap:wrap;gap:3px;padding-top:2px}.chip-toggle-btn{font-size:.65rem;padding:2px 5px;border:2px solid #333333;border-radius:4px;background:#00000012;color:#222;cursor:pointer;white-space:nowrap;line-height:1.3;box-shadow:1px 2px 4px #00000040,inset 0 1px #ffffff8c}.chip-toggle-btn:hover{background:#00000026}.chip-toggle-btn.active{background:#4a80b5;color:#fff;border-color:#2a5a90}.chip-toggle-btn.active:hover{background:#3a6a9f}.subplot-gutter-ctl{width:18px;height:18px;padding:0;font-size:.72rem;line-height:1;display:flex;align-items:center;justify-content:center;border:1.5px solid #333333;border-radius:4px;background:#ffffffeb;color:#222;cursor:pointer;box-shadow:1px 1px 3px #0000004d,inset 0 1px #ffffff8c}.subplot-gutter-ctl:hover{background:#eef3f9}.subplot-gutter-ctl.active{background:#4a80b5;color:#fff;border-color:#2a5a90}.subplot-gutter-ctl.active:hover{background:#3a6a9f}.subplot-gutter-cluster .info-icon.subplot-gutter-help{margin-left:0}.chip-ref-controls{flex-direction:column;gap:3px;align-items:flex-start}.subplot-chip.chip-disabled{cursor:pointer}.subplot-chip.drag-over{outline:2px solid #000000;background:#bbb}.ref-point-chip{display:flex;align-items:center;gap:4px;border:1.5px solid #888;border-radius:4px;padding:2px 4px;font-size:.75rem;background:#ffffff59}.ref-point-swatch{width:8px;height:8px;border-radius:50%;flex-shrink:0}.ref-point-chip-label{flex:1;font-variant-numeric:tabular-nums}.ref-point-chip-remove{background:none;border:none;cursor:pointer;color:#666;font-size:.8rem;font-weight:700;padding:0 2px;line-height:1}.ref-point-chip-remove:hover{color:#c00}.bp-ref-slot{display:flex;align-items:center;flex-wrap:wrap;gap:4px}.ref-point-hint{font-size:.65rem;color:#888;margin-top:2px;display:block}#ref-point-popup{display:none;position:fixed;z-index:1000;background:#f2f2f2;border:1.5px solid #5a88bb;border-radius:6px;padding:8px 10px;box-shadow:2px 6px 16px #0000004d;width:200px}.ref-point-popup-range{display:flex;justify-content:space-between;font-size:.65rem;color:#666;margin-bottom:1px}#ref-point-popup-slider{width:100%;display:block;margin-bottom:4px}.ref-point-popup-val{text-align:center;font-size:.85rem;font-weight:700;font-variant-numeric:tabular-nums;margin-bottom:8px;color:#111}.ref-point-popup-btns{display:flex;gap:5px;justify-content:flex-end}.ref-point-popup-btns button{font-size:.75rem;padding:2px 10px;border-radius:3px;cursor:pointer;border:1px solid #999;background:#ddd}#ref-point-popup-add{background:#c8dcf0;border-color:#5a88bb;color:#1a3a5c;font-weight:600}#ref-point-popup-add:hover{background:#b8cfe8}#scalar-bits-panel{display:flex;flex-direction:column;background:#ccc;border:2px solid #333333;border-radius:6px;padding:4px;box-shadow:2px 4px 8px #0006,inset 0 1px #ffffff8c;margin:0 0 4px;flex-shrink:0;overflow-y:auto;align-self:flex-start;min-height:60px}.bp-rows{display:flex;flex-direction:column;gap:6px}.bp-row{display:flex;flex-direction:column;gap:2px}.bp-row-label{font-size:.7rem;font-weight:700;color:#333;display:flex;align-items:center;gap:3px}.bp-squares-wrap{display:flex;flex-wrap:wrap;gap:3px}.bits-panel-placeholder{padding:8px 10px;color:#888;font-size:.8rem;font-style:italic;white-space:nowrap}.info-icon{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;margin-left:5px;padding:0;font-size:.72rem;line-height:1;color:#fff;background:#206f9b;border:none;border-radius:50%;cursor:help;vertical-align:middle;flex:0 0 auto}.info-icon:hover,.info-icon:focus{color:#0064a3;background:#fff;outline:none}.info-icon-scalar{position:absolute;left:-30px;top:50%;transform:translateY(-50%);z-index:11;font-weight:900}.help-popover{position:fixed;z-index:1100;width:260px;background:#f2f2f2;border:1.5px solid #5a88bb;border-radius:6px;padding:9px 11px;box-shadow:2px 6px 16px #0000004d;font-size:.78rem;color:#222}.help-popover-title{font-weight:700;margin-bottom:3px;color:#0064a3}.help-popover-short{line-height:1.35;margin-bottom:6px}.help-popover-more{border:none;background:transparent;color:#0064a3;font-weight:600;font-size:.76rem;padding:0;cursor:pointer}.help-popover-more:hover{text-decoration:underline}.help-open-btn{margin-left:10px;padding:3px 9px;font-size:.8rem;font-weight:600;color:#fff;background:#0064a3;border:1px solid #003f66;border-radius:4px;cursor:pointer}.help-open-btn:hover{background:#004f82}.help-backdrop{position:fixed;inset:0;z-index:1200;background:#00000059}.help-drawer{position:fixed;top:0;right:0;bottom:0;z-index:1201;width:min(460px,92vw);display:flex;flex-direction:column;background:#1f2329;color:#e6e6e6;box-shadow:-4px 0 18px #00000073}.help-drawer-header{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;font-size:1rem;font-weight:700;border-bottom:1px solid #3a3f47;flex:0 0 auto}.help-drawer-close{background:transparent;border:none;color:#cfcfcf;font-size:1rem;cursor:pointer;padding:2px 6px;border-radius:4px}.help-drawer-close:hover{background:#3a3f47;color:#fff}.help-drawer-body{flex:1 1 auto;overflow-y:auto;padding:12px 18px 28px}.help-ai-disclaimer{margin:4px 0 8px;padding:8px 11px;font-size:.74rem;line-height:1.45;color:#c9b27a;background:#be963c1a;border:1px solid rgba(190,150,60,.35);border-radius:6px}.help-ai-disclaimer strong{color:#e0c585}.help-group-heading{font-size:.78rem;text-transform:uppercase;letter-spacing:.08em;color:#7fb2dd;margin:18px 0 6px;border-bottom:1px solid #3a3f47;padding-bottom:3px}.help-section{padding:10px;border-radius:6px;margin:4px 0}.help-section h3{font-size:.92rem;color:#fff;margin-bottom:4px}.help-section-body{font-size:.84rem;line-height:1.5;color:#d6d6d6}.help-section-body p{margin:6px 0}.help-section-body code{background:#2b3038;padding:1px 4px;border-radius:3px;font-size:.8rem}.help-section-body .katex{color:#f0f0f0}@keyframes help-flash-kf{0%{background:#7fb2dd6b}to{background:transparent}}.help-flash{animation:help-flash-kf 1.6s ease-out}[data-embed].embed-no-add-remove #enc-add,[data-embed].embed-no-add-remove #enc-reset,[data-embed].embed-no-add-remove .enc-remove,[data-embed].embed-no-enc-cards #encoder-list,[data-embed].embed-no-enc-controls .enc-edit-btn,[data-embed].embed-no-enc-controls .enc-row .enc-body,[data-embed].embed-no-plot-controls #subplot-panel,[data-embed].embed-no-bit-panels #scalar-bits-panel,[data-embed].embed-no-cursor-slider #scalar-row{display:none!important}[data-embed].embed-no-demo-selector .control-group:has(>#preset-select){display:none!important}[data-embed].embed-no-viewport-range .control-group:has(#view-bounds-slider){display:none!important}[data-embed].embed-no-enc-panel #control-panels,[data-embed].embed-no-plot-panel #center-col{display:none!important}#enc-edit-popup{position:fixed;z-index:1001;width:320px;background:#0f3460;border:2px solid #000;border-radius:6px;padding:6px;box-shadow:2px 8px 24px #0000008c,inset 0 1px #ffffff2e;color:#fff}.enc-edit-popup-header{display:flex;align-items:center;justify-content:space-between;padding:2px 4px 6px;border-bottom:1px solid rgba(255,255,255,.15);margin-bottom:6px}.enc-edit-popup-title{font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;color:#c8d4e6}.enc-edit-popup-close{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.3);border-radius:3px;padding:0 6px;line-height:1.15;cursor:pointer;font-size:.95rem}.enc-edit-popup-close:hover{background:#ffffff2e;border-color:#ffffff8c}';
  let Zo = false;
  function Iu() {
    if (Zo) return;
    Zo = true;
    const e = document.createElement("style");
    e.setAttribute("data-encoder-viz", ""), e.textContent = `.encoder-viz {
${$u}
}`, document.head.appendChild(e);
  }
  function Du({ setup: e, ui: t, cursor: n, compact: r, className: a, style: o }) {
    const s = U.useRef(null), i = U.useRef(null), c = U.useRef(null);
    U.useEffect(() => {
      Iu();
      const u = s.current;
      if (u) return i.current = Nu(u, {
        setup: e,
        ui: t,
        persistState: false,
        compact: r
      }), c.current = e, () => {
        var _a2;
        (_a2 = i.current) == null ? void 0 : _a2.destroy(), i.current = null;
      };
    }, []);
    const l = JSON.stringify(e);
    return U.useEffect(() => {
      var _a2;
      c.current !== e && ((_a2 = i.current) == null ? void 0 : _a2.setConfig(e, t));
    }, [
      l
    ]), U.useEffect(() => {
      var _a2;
      typeof n == "number" && ((_a2 = i.current) == null ? void 0 : _a2.setScalarCursor(n));
    }, [
      n
    ]), x.jsx("div", {
      className: a ? `encoder-viz ${a}` : "encoder-viz",
      style: {
        display: "flex",
        overflow: "hidden",
        ...o
      },
      children: x.jsx("div", {
        ref: s,
        style: {
          flex: 1,
          minWidth: 0,
          minHeight: 0,
          display: "flex",
          flexDirection: "column"
        }
      })
    });
  }
  function Tu(e, t) {
    return e.filter((n) => n.parentId === t);
  }
  function Ru(e, t = 320, n = 260) {
    var _a2, _b, _c2, _d2;
    const r = e;
    return {
      w: ((_a2 = r.measured) == null ? void 0 : _a2.width) ?? ((_b = e.style) == null ? void 0 : _b.width) ?? r.width ?? t,
      h: ((_c2 = r.measured) == null ? void 0 : _c2.height) ?? ((_d2 = e.style) == null ? void 0 : _d2.height) ?? r.height ?? n
    };
  }
  function Ha(e, t, n = 40) {
    var _a2, _b, _c2, _d2, _e, _f2;
    const r = e.find((k) => k.type === "group"), a = e.find((k) => k.id === t);
    if (!r || !a || a.parentId) return e;
    const o = ((_a2 = r.position) == null ? void 0 : _a2.x) ?? 0, s = ((_b = r.position) == null ? void 0 : _b.y) ?? 0, i = {
      ...a,
      parentId: r.id,
      position: {
        x: (((_c2 = a.position) == null ? void 0 : _c2.x) ?? 0) - o,
        y: (((_d2 = a.position) == null ? void 0 : _d2.y) ?? 0) - s
      }
    }, c = e.filter((k) => k.parentId === r.id).concat(i);
    let l = 1 / 0, u = 1 / 0, v = -1 / 0, h = -1 / 0;
    for (const k of c) {
      const { w: d, h: f } = Ru(k), p = ((_e = k.position) == null ? void 0 : _e.x) ?? 0, b = ((_f2 = k.position) == null ? void 0 : _f2.y) ?? 0;
      l = Math.min(l, p), u = Math.min(u, b), v = Math.max(v, p + d), h = Math.max(h, b + f);
    }
    const y = l - n, S = u - n;
    return e.map((k) => {
      var _a3, _b2;
      return k.id === r.id ? {
        ...k,
        position: {
          x: o + y,
          y: s + S
        },
        style: {
          ...k.style,
          width: v - l + n * 2,
          height: h - u + n * 2
        }
      } : k.id === t ? {
        ...i,
        position: {
          x: i.position.x - y,
          y: i.position.y - S
        }
      } : k.parentId === r.id ? {
        ...k,
        position: {
          x: (((_a3 = k.position) == null ? void 0 : _a3.x) ?? 0) - y,
          y: (((_b2 = k.position) == null ? void 0 : _b2.y) ?? 0) - S
        }
      } : k;
    });
  }
  function ju(e) {
    if (!e || e.length === 0) return {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    let t = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0;
    return e.forEach((o) => {
      var _a2, _b, _c2, _d2, _e, _f2;
      const s = ((_a2 = o.position) == null ? void 0 : _a2.x) ?? 0, i = ((_b = o.position) == null ? void 0 : _b.y) ?? 0, c = ((_c2 = o.measured) == null ? void 0 : _c2.width) ?? ((_d2 = o.style) == null ? void 0 : _d2.width) ?? o.width ?? 150, l = ((_e = o.measured) == null ? void 0 : _e.height) ?? ((_f2 = o.style) == null ? void 0 : _f2.height) ?? o.height ?? 50;
      t = Math.min(t, s), n = Math.min(n, i), r = Math.max(r, s + c), a = Math.max(a, i + l);
    }), {
      x: t,
      y: n,
      width: r - t,
      height: a - n
    };
  }
  const re = Kt()(Pr((e, t) => ({
    nodes: [],
    edges: [],
    selectedNodes: [],
    selectedEdges: [],
    history: [],
    historyIndex: -1,
    maxHistorySize: 50,
    layoutOptions: {},
    manualLayout: false,
    connecting: false,
    viableTargetIds: /* @__PURE__ */ new Set(),
    colorCodedBits: true,
    setManualLayout: (n) => {
      e({
        manualLayout: n
      });
    },
    beginConnect: (n) => {
      e({
        connecting: true,
        viableTargetIds: n
      });
    },
    endConnect: () => {
      e({
        connecting: false,
        viableTargetIds: /* @__PURE__ */ new Set()
      });
    },
    setColorCodedBits: (n) => {
      e({
        colorCodedBits: n
      });
    },
    setLayoutOptions: (n) => {
      const a = {
        ...t().layoutOptions,
        ...n
      };
      e({
        layoutOptions: a
      });
    },
    setNodes: (n) => {
      e({
        nodes: n
      });
    },
    setEdges: (n) => {
      e({
        edges: n
      });
    },
    onNodesChange: (n) => {
      const r = Tl(n, t().nodes);
      if (n.filter((o) => o.type === "position" && o.dragging === false).length > 0) {
        const o = r.filter((s) => s.type === "group");
        if (o.length > 0) {
          let s = [
            ...r
          ];
          o.forEach((i) => {
            const c = Tu(s, i.id);
            if (c.length > 0) {
              const l = Rl(c), u = 40, v = l.x - u, h = l.y - u;
              v !== 0 || h !== 0 ? s = s.map((y) => y.parentId === i.id ? {
                ...y,
                position: {
                  x: y.position.x - v,
                  y: y.position.y - h
                }
              } : y.id === i.id ? {
                ...y,
                position: {
                  x: y.position.x + v,
                  y: y.position.y + h
                },
                style: {
                  ...y.style,
                  width: l.width + u * 2,
                  height: l.height + u * 2
                },
                data: {
                  ...y.data,
                  computedBounds: l
                }
              } : y) : s = s.map((y) => y.id === i.id ? {
                ...y,
                style: {
                  ...y.style,
                  width: l.width + u * 2,
                  height: l.height + u * 2
                },
                data: {
                  ...y.data,
                  computedBounds: l
                }
              } : y);
            }
          }), e({
            nodes: s
          });
          return;
        }
      }
      e({
        nodes: r
      });
    },
    onEdgesChange: (n) => {
      e({
        edges: Dl(n, t().edges)
      });
    },
    onConnect: (n) => {
      var _a2, _b;
      const r = t().nodes.find((i) => i.id === n.source), a = ((_a2 = r == null ? void 0 : r.data) == null ? void 0 : _a2.blockType) === "DiscreteDataSource" || ((_b = r == null ? void 0 : r.data) == null ? void 0 : _b.blockType) === "ScalarDataSource", o = a ? "dataSource" : "input", s = a ? {
        sourceType: r.data.sourceType,
        animated: false
      } : {};
      e({
        edges: Il({
          ...n,
          type: o,
          data: s
        }, t().edges)
      }), console.log(`[NetworkStore] Connected ${n.source} \u2192 ${n.target} (type: ${o})`);
    },
    addNode: (n) => {
      const r = {
        id: `node-${Date.now()}`,
        position: {
          x: 0,
          y: 0
        },
        ...n,
        data: {
          id: `node-${Date.now()}`,
          ...n.data
        }
      };
      return e({
        nodes: [
          ...t().nodes,
          r
        ]
      }), t().pushHistory({
        type: "ADD_NODE",
        nodeId: r.id,
        node: r
      }), r;
    },
    removeNode: (n) => {
      const r = t().nodes.find((a) => a.id === n);
      r && (e({
        nodes: t().nodes.filter((a) => a.id !== n),
        edges: t().edges.filter((a) => a.source !== n && a.target !== n)
      }), t().pushHistory({
        type: "REMOVE_NODE",
        nodeId: n,
        node: r
      }));
    },
    addEdge: (n) => {
      const r = {
        id: `edge-${Date.now()}`,
        source: "",
        target: "",
        ...n
      };
      return e({
        edges: [
          ...t().edges,
          r
        ]
      }), t().pushHistory({
        type: "ADD_EDGE",
        edgeId: r.id,
        edge: r
      }), r;
    },
    removeEdge: (n) => {
      const r = t().edges.find((a) => a.id === n);
      r && (e({
        edges: t().edges.filter((a) => a.id !== n)
      }), t().pushHistory({
        type: "REMOVE_EDGE",
        edgeId: n,
        edge: r
      }));
    },
    updateNodeData: (n, r) => {
      e({
        nodes: t().nodes.map((a) => a.id === n ? {
          ...a,
          data: {
            ...a.data,
            ...r
          }
        } : a)
      });
    },
    batchUpdateNodeData: (n) => {
      e({
        nodes: t().nodes.map((r) => r.id in n ? {
          ...r,
          data: {
            ...r.data,
            ...n[r.id]
          }
        } : r)
      });
    },
    pushHistory: (n) => {
      const { history: r, historyIndex: a, maxHistorySize: o } = t(), s = r.slice(0, a + 1);
      s.push(n), s.length > o && s.shift(), e({
        history: s,
        historyIndex: s.length - 1
      });
    },
    undo: () => {
      const { history: n, historyIndex: r } = t();
      if (r < 0) return;
      const a = n[r];
      t().executeInverseOperation(a), e({
        historyIndex: r - 1
      });
    },
    redo: () => {
      const { history: n, historyIndex: r } = t();
      if (r >= n.length - 1) return;
      const a = n[r + 1];
      t().executeOperation(a), e({
        historyIndex: r + 1
      });
    },
    executeOperation: (n) => {
      switch (n.type) {
        case "ADD_NODE":
          e({
            nodes: [
              ...t().nodes,
              n.node
            ]
          });
          break;
        case "REMOVE_NODE":
          e({
            nodes: t().nodes.filter((r) => r.id !== n.nodeId),
            edges: t().edges.filter((r) => r.source !== n.nodeId && r.target !== n.nodeId)
          });
          break;
        case "ADD_EDGE":
          e({
            edges: [
              ...t().edges,
              n.edge
            ]
          });
          break;
        case "REMOVE_EDGE":
          e({
            edges: t().edges.filter((r) => r.id !== n.edgeId)
          });
          break;
      }
    },
    executeInverseOperation: (n) => {
      switch (n.type) {
        case "ADD_NODE":
          e({
            nodes: t().nodes.filter((r) => r.id !== n.nodeId),
            edges: t().edges.filter((r) => r.source !== n.nodeId && r.target !== n.nodeId)
          });
          break;
        case "REMOVE_NODE":
          e({
            nodes: [
              ...t().nodes,
              n.node
            ]
          });
          break;
        case "ADD_EDGE":
          e({
            edges: t().edges.filter((r) => r.id !== n.edgeId)
          });
          break;
        case "REMOVE_EDGE":
          e({
            edges: [
              ...t().edges,
              n.edge
            ]
          });
          break;
      }
    },
    clearHistory: () => {
      e({
        history: [],
        historyIndex: -1
      });
    },
    reset: () => {
      e({
        nodes: [],
        edges: [],
        selectedNodes: [],
        selectedEdges: [],
        manualLayout: false
      }), t().clearHistory();
    }
  }), {
    name: "NetworkStore"
  })), Ou = {
    method: "add_discrete_transformer",
    defaults: {
      num_v: 10,
      num_s: 512,
      num_t: 2,
      seed: 42
    }
  }, Mu = {
    method: "add_persistence_transformer",
    defaults: {
      min_val: -1,
      max_val: 1,
      num_s: 2048,
      num_as: 256,
      max_step: 10,
      num_t: 2,
      seed: 42
    }
  }, Lu = {
    method: "add_pattern_pooler",
    defaults: {
      num_s: 1024,
      num_as: 40,
      perm_thr: 20,
      perm_inc: 2,
      perm_dec: 1,
      pct_pool: 0.8,
      pct_conn: 0.5,
      pct_learn: 0.3,
      always_update: false,
      num_t: 2,
      seed: 0
    },
    needsInit: true
  }, Fu = {
    method: "add_pattern_classifier",
    defaults: {
      num_l: 3,
      num_s: 1024,
      num_as: 30,
      perm_thr: 20,
      perm_inc: 2,
      perm_dec: 1,
      pct_pool: 0.8,
      pct_conn: 0.5,
      pct_learn: 0.3,
      num_t: 2,
      seed: 0
    },
    needsInit: true
  }, Au = {
    method: "add_sequence_learner",
    defaults: {
      num_c: 512,
      num_spc: 4,
      num_dps: 8,
      num_rpd: 32,
      d_thresh: 20,
      perm_thr: 20,
      perm_inc: 2,
      perm_dec: 1,
      num_t: 2,
      always_update: false,
      seed: 42
    },
    needsInit: true
  }, qu = {
    method: "add_context_learner",
    defaults: {
      num_c: 512,
      num_spc: 4,
      num_dps: 8,
      num_rpd: 32,
      d_thresh: 20,
      perm_thr: 20,
      perm_inc: 2,
      perm_dec: 1,
      num_t: 2,
      always_update: false,
      seed: 42
    },
    needsInit: true
  }, Bu = {
    method: "add_fixed_weight_transformer",
    defaults: {
      n: 16,
      w: 5,
      min_val: -1,
      max_val: 1,
      num_t: 2,
      seed: 42
    }
  }, zu = {
    method: "add_tapering_weight_transformer",
    defaults: {
      n: 16,
      w: 5,
      min_val: -1,
      max_val: 1,
      num_t: 2,
      seed: 42
    }
  }, Vu = {
    method: "add_periodic_cell_transformer",
    defaults: {
      n: 16,
      min_period: 0.1,
      max_period: 1,
      l_frac: 0.15,
      min_val: -1,
      max_val: 1,
      num_t: 2,
      seed: 42
    }
  }, Wu = {
    method: "add_periodic_scalar_transformer",
    defaults: {
      n: 16,
      w: 5,
      period: 2,
      min_val: -1,
      max_val: 1,
      num_t: 2,
      seed: 42
    }
  }, Uu = {
    method: "add_place_cell_transformer",
    defaults: {
      min_val: -1,
      max_val: 1,
      default_bin_size: 0.2,
      num_t: 2
    }
  }, Hu = {
    method: "add_randomized_place_cell_transformer",
    defaults: {
      n: 16,
      bin_size: 0.3,
      min_val: -1,
      max_val: 1,
      num_t: 2,
      seed: 42
    }
  }, Gu = {
    DiscreteTransformer: Ou,
    PersistenceTransformer: Mu,
    PatternPooler: Lu,
    PatternClassifier: Fu,
    SequenceLearner: Au,
    ContextLearner: qu,
    FixedWeightTransformer: Bu,
    TaperingWeightTransformer: zu,
    PeriodicCellTransformer: Vu,
    PeriodicScalarTransformer: Wu,
    PlaceCellTransformer: Uu,
    RandomizedPlaceCellTransformer: Hu
  }, Ku = Gu;
  function Tr(e) {
    return [
      "PatternClassifier",
      "SequenceLearner",
      "ContextLearner",
      "SynflowScalarDataSource"
    ].includes(e);
  }
  var $n = {
    exports: {}
  }, ua = {}, it = {}, It = {}, pa = {}, ma = {}, fa = {}, Qo;
  function vr() {
    return Qo || (Qo = 1, (function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
      class t {
      }
      e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
      class n extends t {
        constructor(p) {
          if (super(), !e.IDENTIFIER.test(p)) throw new Error("CodeGen: name must be a valid identifier");
          this.str = p;
        }
        toString() {
          return this.str;
        }
        emptyStr() {
          return false;
        }
        get names() {
          return {
            [this.str]: 1
          };
        }
      }
      e.Name = n;
      class r extends t {
        constructor(p) {
          super(), this._items = typeof p == "string" ? [
            p
          ] : p;
        }
        toString() {
          return this.str;
        }
        emptyStr() {
          if (this._items.length > 1) return false;
          const p = this._items[0];
          return p === "" || p === '""';
        }
        get str() {
          var p;
          return (p = this._str) !== null && p !== void 0 ? p : this._str = this._items.reduce((b, w) => `${b}${w}`, "");
        }
        get names() {
          var p;
          return (p = this._names) !== null && p !== void 0 ? p : this._names = this._items.reduce((b, w) => (w instanceof n && (b[w.str] = (b[w.str] || 0) + 1), b), {});
        }
      }
      e._Code = r, e.nil = new r("");
      function a(f, ...p) {
        const b = [
          f[0]
        ];
        let w = 0;
        for (; w < p.length; ) i(b, p[w]), b.push(f[++w]);
        return new r(b);
      }
      e._ = a;
      const o = new r("+");
      function s(f, ...p) {
        const b = [
          y(f[0])
        ];
        let w = 0;
        for (; w < p.length; ) b.push(o), i(b, p[w]), b.push(o, y(f[++w]));
        return c(b), new r(b);
      }
      e.str = s;
      function i(f, p) {
        p instanceof r ? f.push(...p._items) : p instanceof n ? f.push(p) : f.push(v(p));
      }
      e.addCodeArg = i;
      function c(f) {
        let p = 1;
        for (; p < f.length - 1; ) {
          if (f[p] === o) {
            const b = l(f[p - 1], f[p + 1]);
            if (b !== void 0) {
              f.splice(p - 1, 3, b);
              continue;
            }
            f[p++] = "+";
          }
          p++;
        }
      }
      function l(f, p) {
        if (p === '""') return f;
        if (f === '""') return p;
        if (typeof f == "string") return p instanceof n || f[f.length - 1] !== '"' ? void 0 : typeof p != "string" ? `${f.slice(0, -1)}${p}"` : p[0] === '"' ? f.slice(0, -1) + p.slice(1) : void 0;
        if (typeof p == "string" && p[0] === '"' && !(f instanceof n)) return `"${f}${p.slice(1)}`;
      }
      function u(f, p) {
        return p.emptyStr() ? f : f.emptyStr() ? p : s`${f}${p}`;
      }
      e.strConcat = u;
      function v(f) {
        return typeof f == "number" || typeof f == "boolean" || f === null ? f : y(Array.isArray(f) ? f.join(",") : f);
      }
      function h(f) {
        return new r(y(f));
      }
      e.stringify = h;
      function y(f) {
        return JSON.stringify(f).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
      }
      e.safeStringify = y;
      function S(f) {
        return typeof f == "string" && e.IDENTIFIER.test(f) ? new r(`.${f}`) : a`[${f}]`;
      }
      e.getProperty = S;
      function k(f) {
        if (typeof f == "string" && e.IDENTIFIER.test(f)) return new r(`${f}`);
        throw new Error(`CodeGen: invalid export name: ${f}, use explicit $id name mapping`);
      }
      e.getEsmExportName = k;
      function d(f) {
        return new r(f.toString());
      }
      e.regexpCode = d;
    })(fa)), fa;
  }
  var ha = {}, es;
  function ts() {
    return es || (es = 1, (function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
      const t = vr();
      class n extends Error {
        constructor(l) {
          super(`CodeGen: "code" for ${l} not defined`), this.value = l.value;
        }
      }
      var r;
      (function(c) {
        c[c.Started = 0] = "Started", c[c.Completed = 1] = "Completed";
      })(r || (e.UsedValueState = r = {})), e.varKinds = {
        const: new t.Name("const"),
        let: new t.Name("let"),
        var: new t.Name("var")
      };
      class a {
        constructor({ prefixes: l, parent: u } = {}) {
          this._names = {}, this._prefixes = l, this._parent = u;
        }
        toName(l) {
          return l instanceof t.Name ? l : this.name(l);
        }
        name(l) {
          return new t.Name(this._newName(l));
        }
        _newName(l) {
          const u = this._names[l] || this._nameGroup(l);
          return `${l}${u.index++}`;
        }
        _nameGroup(l) {
          var u, v;
          if (!((v = (u = this._parent) === null || u === void 0 ? void 0 : u._prefixes) === null || v === void 0) && v.has(l) || this._prefixes && !this._prefixes.has(l)) throw new Error(`CodeGen: prefix "${l}" is not allowed in this scope`);
          return this._names[l] = {
            prefix: l,
            index: 0
          };
        }
      }
      e.Scope = a;
      class o extends t.Name {
        constructor(l, u) {
          super(u), this.prefix = l;
        }
        setValue(l, { property: u, itemIndex: v }) {
          this.value = l, this.scopePath = (0, t._)`.${new t.Name(u)}[${v}]`;
        }
      }
      e.ValueScopeName = o;
      const s = (0, t._)`\n`;
      class i extends a {
        constructor(l) {
          super(l), this._values = {}, this._scope = l.scope, this.opts = {
            ...l,
            _n: l.lines ? s : t.nil
          };
        }
        get() {
          return this._scope;
        }
        name(l) {
          return new o(l, this._newName(l));
        }
        value(l, u) {
          var v;
          if (u.ref === void 0) throw new Error("CodeGen: ref must be passed in value");
          const h = this.toName(l), { prefix: y } = h, S = (v = u.key) !== null && v !== void 0 ? v : u.ref;
          let k = this._values[y];
          if (k) {
            const p = k.get(S);
            if (p) return p;
          } else k = this._values[y] = /* @__PURE__ */ new Map();
          k.set(S, h);
          const d = this._scope[y] || (this._scope[y] = []), f = d.length;
          return d[f] = u.ref, h.setValue(u, {
            property: y,
            itemIndex: f
          }), h;
        }
        getValue(l, u) {
          const v = this._values[l];
          if (v) return v.get(u);
        }
        scopeRefs(l, u = this._values) {
          return this._reduceValues(u, (v) => {
            if (v.scopePath === void 0) throw new Error(`CodeGen: name "${v}" has no value`);
            return (0, t._)`${l}${v.scopePath}`;
          });
        }
        scopeCode(l = this._values, u, v) {
          return this._reduceValues(l, (h) => {
            if (h.value === void 0) throw new Error(`CodeGen: name "${h}" has no value`);
            return h.value.code;
          }, u, v);
        }
        _reduceValues(l, u, v = {}, h) {
          let y = t.nil;
          for (const S in l) {
            const k = l[S];
            if (!k) continue;
            const d = v[S] = v[S] || /* @__PURE__ */ new Map();
            k.forEach((f) => {
              if (d.has(f)) return;
              d.set(f, r.Started);
              let p = u(f);
              if (p) {
                const b = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
                y = (0, t._)`${y}${b} ${f} = ${p};${this.opts._n}`;
              } else if (p = h == null ? void 0 : h(f)) y = (0, t._)`${y}${p}${this.opts._n}`;
              else throw new n(f);
              d.set(f, r.Completed);
            });
          }
          return y;
        }
      }
      e.ValueScope = i;
    })(ha)), ha;
  }
  var ns;
  function me() {
    return ns || (ns = 1, (function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
      const t = vr(), n = ts();
      var r = vr();
      Object.defineProperty(e, "_", {
        enumerable: true,
        get: function() {
          return r._;
        }
      }), Object.defineProperty(e, "str", {
        enumerable: true,
        get: function() {
          return r.str;
        }
      }), Object.defineProperty(e, "strConcat", {
        enumerable: true,
        get: function() {
          return r.strConcat;
        }
      }), Object.defineProperty(e, "nil", {
        enumerable: true,
        get: function() {
          return r.nil;
        }
      }), Object.defineProperty(e, "getProperty", {
        enumerable: true,
        get: function() {
          return r.getProperty;
        }
      }), Object.defineProperty(e, "stringify", {
        enumerable: true,
        get: function() {
          return r.stringify;
        }
      }), Object.defineProperty(e, "regexpCode", {
        enumerable: true,
        get: function() {
          return r.regexpCode;
        }
      }), Object.defineProperty(e, "Name", {
        enumerable: true,
        get: function() {
          return r.Name;
        }
      });
      var a = ts();
      Object.defineProperty(e, "Scope", {
        enumerable: true,
        get: function() {
          return a.Scope;
        }
      }), Object.defineProperty(e, "ValueScope", {
        enumerable: true,
        get: function() {
          return a.ValueScope;
        }
      }), Object.defineProperty(e, "ValueScopeName", {
        enumerable: true,
        get: function() {
          return a.ValueScopeName;
        }
      }), Object.defineProperty(e, "varKinds", {
        enumerable: true,
        get: function() {
          return a.varKinds;
        }
      }), e.operators = {
        GT: new t._Code(">"),
        GTE: new t._Code(">="),
        LT: new t._Code("<"),
        LTE: new t._Code("<="),
        EQ: new t._Code("==="),
        NEQ: new t._Code("!=="),
        NOT: new t._Code("!"),
        OR: new t._Code("||"),
        AND: new t._Code("&&"),
        ADD: new t._Code("+")
      };
      class o {
        optimizeNodes() {
          return this;
        }
        optimizeNames(E, I) {
          return this;
        }
      }
      class s extends o {
        constructor(E, I, V) {
          super(), this.varKind = E, this.name = I, this.rhs = V;
        }
        render({ es5: E, _n: I }) {
          const V = E ? n.varKinds.var : this.varKind, ne = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
          return `${V} ${this.name}${ne};` + I;
        }
        optimizeNames(E, I) {
          if (E[this.name.str]) return this.rhs && (this.rhs = W(this.rhs, E, I)), this;
        }
        get names() {
          return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
        }
      }
      class i extends o {
        constructor(E, I, V) {
          super(), this.lhs = E, this.rhs = I, this.sideEffects = V;
        }
        render({ _n: E }) {
          return `${this.lhs} = ${this.rhs};` + E;
        }
        optimizeNames(E, I) {
          if (!(this.lhs instanceof t.Name && !E[this.lhs.str] && !this.sideEffects)) return this.rhs = W(this.rhs, E, I), this;
        }
        get names() {
          const E = this.lhs instanceof t.Name ? {} : {
            ...this.lhs.names
          };
          return B(E, this.rhs);
        }
      }
      class c extends i {
        constructor(E, I, V, ne) {
          super(E, V, ne), this.op = I;
        }
        render({ _n: E }) {
          return `${this.lhs} ${this.op}= ${this.rhs};` + E;
        }
      }
      class l extends o {
        constructor(E) {
          super(), this.label = E, this.names = {};
        }
        render({ _n: E }) {
          return `${this.label}:` + E;
        }
      }
      class u extends o {
        constructor(E) {
          super(), this.label = E, this.names = {};
        }
        render({ _n: E }) {
          return `break${this.label ? ` ${this.label}` : ""};` + E;
        }
      }
      class v extends o {
        constructor(E) {
          super(), this.error = E;
        }
        render({ _n: E }) {
          return `throw ${this.error};` + E;
        }
        get names() {
          return this.error.names;
        }
      }
      class h extends o {
        constructor(E) {
          super(), this.code = E;
        }
        render({ _n: E }) {
          return `${this.code};` + E;
        }
        optimizeNodes() {
          return `${this.code}` ? this : void 0;
        }
        optimizeNames(E, I) {
          return this.code = W(this.code, E, I), this;
        }
        get names() {
          return this.code instanceof t._CodeOrName ? this.code.names : {};
        }
      }
      class y extends o {
        constructor(E = []) {
          super(), this.nodes = E;
        }
        render(E) {
          return this.nodes.reduce((I, V) => I + V.render(E), "");
        }
        optimizeNodes() {
          const { nodes: E } = this;
          let I = E.length;
          for (; I--; ) {
            const V = E[I].optimizeNodes();
            Array.isArray(V) ? E.splice(I, 1, ...V) : V ? E[I] = V : E.splice(I, 1);
          }
          return E.length > 0 ? this : void 0;
        }
        optimizeNames(E, I) {
          const { nodes: V } = this;
          let ne = V.length;
          for (; ne--; ) {
            const ee = V[ne];
            ee.optimizeNames(E, I) || (H(E, ee.names), V.splice(ne, 1));
          }
          return V.length > 0 ? this : void 0;
        }
        get names() {
          return this.nodes.reduce((E, I) => j(E, I.names), {});
        }
      }
      class S extends y {
        render(E) {
          return "{" + E._n + super.render(E) + "}" + E._n;
        }
      }
      class k extends y {
      }
      class d extends S {
      }
      d.kind = "else";
      class f extends S {
        constructor(E, I) {
          super(I), this.condition = E;
        }
        render(E) {
          let I = `if(${this.condition})` + super.render(E);
          return this.else && (I += "else " + this.else.render(E)), I;
        }
        optimizeNodes() {
          super.optimizeNodes();
          const E = this.condition;
          if (E === true) return this.nodes;
          let I = this.else;
          if (I) {
            const V = I.optimizeNodes();
            I = this.else = Array.isArray(V) ? new d(V) : V;
          }
          if (I) return E === false ? I instanceof f ? I : I.nodes : this.nodes.length ? this : new f(X(E), I instanceof f ? [
            I
          ] : I.nodes);
          if (!(E === false || !this.nodes.length)) return this;
        }
        optimizeNames(E, I) {
          var V;
          if (this.else = (V = this.else) === null || V === void 0 ? void 0 : V.optimizeNames(E, I), !!(super.optimizeNames(E, I) || this.else)) return this.condition = W(this.condition, E, I), this;
        }
        get names() {
          const E = super.names;
          return B(E, this.condition), this.else && j(E, this.else.names), E;
        }
      }
      f.kind = "if";
      class p extends S {
      }
      p.kind = "for";
      class b extends p {
        constructor(E) {
          super(), this.iteration = E;
        }
        render(E) {
          return `for(${this.iteration})` + super.render(E);
        }
        optimizeNames(E, I) {
          if (super.optimizeNames(E, I)) return this.iteration = W(this.iteration, E, I), this;
        }
        get names() {
          return j(super.names, this.iteration.names);
        }
      }
      class w extends p {
        constructor(E, I, V, ne) {
          super(), this.varKind = E, this.name = I, this.from = V, this.to = ne;
        }
        render(E) {
          const I = E.es5 ? n.varKinds.var : this.varKind, { name: V, from: ne, to: ee } = this;
          return `for(${I} ${V}=${ne}; ${V}<${ee}; ${V}++)` + super.render(E);
        }
        get names() {
          const E = B(super.names, this.from);
          return B(E, this.to);
        }
      }
      class _ extends p {
        constructor(E, I, V, ne) {
          super(), this.loop = E, this.varKind = I, this.name = V, this.iterable = ne;
        }
        render(E) {
          return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(E);
        }
        optimizeNames(E, I) {
          if (super.optimizeNames(E, I)) return this.iterable = W(this.iterable, E, I), this;
        }
        get names() {
          return j(super.names, this.iterable.names);
        }
      }
      class g extends S {
        constructor(E, I, V) {
          super(), this.name = E, this.args = I, this.async = V;
        }
        render(E) {
          return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(E);
        }
      }
      g.kind = "func";
      class m extends y {
        render(E) {
          return "return " + super.render(E);
        }
      }
      m.kind = "return";
      class P extends S {
        render(E) {
          let I = "try" + super.render(E);
          return this.catch && (I += this.catch.render(E)), this.finally && (I += this.finally.render(E)), I;
        }
        optimizeNodes() {
          var E, I;
          return super.optimizeNodes(), (E = this.catch) === null || E === void 0 || E.optimizeNodes(), (I = this.finally) === null || I === void 0 || I.optimizeNodes(), this;
        }
        optimizeNames(E, I) {
          var V, ne;
          return super.optimizeNames(E, I), (V = this.catch) === null || V === void 0 || V.optimizeNames(E, I), (ne = this.finally) === null || ne === void 0 || ne.optimizeNames(E, I), this;
        }
        get names() {
          const E = super.names;
          return this.catch && j(E, this.catch.names), this.finally && j(E, this.finally.names), E;
        }
      }
      class $ extends S {
        constructor(E) {
          super(), this.error = E;
        }
        render(E) {
          return `catch(${this.error})` + super.render(E);
        }
      }
      $.kind = "catch";
      class C extends S {
        render(E) {
          return "finally" + super.render(E);
        }
      }
      C.kind = "finally";
      class D {
        constructor(E, I = {}) {
          this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = {
            ...I,
            _n: I.lines ? `
` : ""
          }, this._extScope = E, this._scope = new n.Scope({
            parent: E
          }), this._nodes = [
            new k()
          ];
        }
        toString() {
          return this._root.render(this.opts);
        }
        name(E) {
          return this._scope.name(E);
        }
        scopeName(E) {
          return this._extScope.name(E);
        }
        scopeValue(E, I) {
          const V = this._extScope.value(E, I);
          return (this._values[V.prefix] || (this._values[V.prefix] = /* @__PURE__ */ new Set())).add(V), V;
        }
        getScopeValue(E, I) {
          return this._extScope.getValue(E, I);
        }
        scopeRefs(E) {
          return this._extScope.scopeRefs(E, this._values);
        }
        scopeCode() {
          return this._extScope.scopeCode(this._values);
        }
        _def(E, I, V, ne) {
          const ee = this._scope.toName(I);
          return V !== void 0 && ne && (this._constants[ee.str] = V), this._leafNode(new s(E, ee, V)), ee;
        }
        const(E, I, V) {
          return this._def(n.varKinds.const, E, I, V);
        }
        let(E, I, V) {
          return this._def(n.varKinds.let, E, I, V);
        }
        var(E, I, V) {
          return this._def(n.varKinds.var, E, I, V);
        }
        assign(E, I, V) {
          return this._leafNode(new i(E, I, V));
        }
        add(E, I) {
          return this._leafNode(new c(E, e.operators.ADD, I));
        }
        code(E) {
          return typeof E == "function" ? E() : E !== t.nil && this._leafNode(new h(E)), this;
        }
        object(...E) {
          const I = [
            "{"
          ];
          for (const [V, ne] of E) I.length > 1 && I.push(","), I.push(V), (V !== ne || this.opts.es5) && (I.push(":"), (0, t.addCodeArg)(I, ne));
          return I.push("}"), new t._Code(I);
        }
        if(E, I, V) {
          if (this._blockNode(new f(E)), I && V) this.code(I).else().code(V).endIf();
          else if (I) this.code(I).endIf();
          else if (V) throw new Error('CodeGen: "else" body without "then" body');
          return this;
        }
        elseIf(E) {
          return this._elseNode(new f(E));
        }
        else() {
          return this._elseNode(new d());
        }
        endIf() {
          return this._endBlockNode(f, d);
        }
        _for(E, I) {
          return this._blockNode(E), I && this.code(I).endFor(), this;
        }
        for(E, I) {
          return this._for(new b(E), I);
        }
        forRange(E, I, V, ne, ee = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
          const fe = this._scope.toName(E);
          return this._for(new w(ee, fe, I, V), () => ne(fe));
        }
        forOf(E, I, V, ne = n.varKinds.const) {
          const ee = this._scope.toName(E);
          if (this.opts.es5) {
            const fe = I instanceof t.Name ? I : this.var("_arr", I);
            return this.forRange("_i", 0, (0, t._)`${fe}.length`, (ae) => {
              this.var(ee, (0, t._)`${fe}[${ae}]`), V(ee);
            });
          }
          return this._for(new _("of", ne, ee, I), () => V(ee));
        }
        forIn(E, I, V, ne = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
          if (this.opts.ownProperties) return this.forOf(E, (0, t._)`Object.keys(${I})`, V);
          const ee = this._scope.toName(E);
          return this._for(new _("in", ne, ee, I), () => V(ee));
        }
        endFor() {
          return this._endBlockNode(p);
        }
        label(E) {
          return this._leafNode(new l(E));
        }
        break(E) {
          return this._leafNode(new u(E));
        }
        return(E) {
          const I = new m();
          if (this._blockNode(I), this.code(E), I.nodes.length !== 1) throw new Error('CodeGen: "return" should have one node');
          return this._endBlockNode(m);
        }
        try(E, I, V) {
          if (!I && !V) throw new Error('CodeGen: "try" without "catch" and "finally"');
          const ne = new P();
          if (this._blockNode(ne), this.code(E), I) {
            const ee = this.name("e");
            this._currNode = ne.catch = new $(ee), I(ee);
          }
          return V && (this._currNode = ne.finally = new C(), this.code(V)), this._endBlockNode($, C);
        }
        throw(E) {
          return this._leafNode(new v(E));
        }
        block(E, I) {
          return this._blockStarts.push(this._nodes.length), E && this.code(E).endBlock(I), this;
        }
        endBlock(E) {
          const I = this._blockStarts.pop();
          if (I === void 0) throw new Error("CodeGen: not in self-balancing block");
          const V = this._nodes.length - I;
          if (V < 0 || E !== void 0 && V !== E) throw new Error(`CodeGen: wrong number of nodes: ${V} vs ${E} expected`);
          return this._nodes.length = I, this;
        }
        func(E, I = t.nil, V, ne) {
          return this._blockNode(new g(E, I, V)), ne && this.code(ne).endFunc(), this;
        }
        endFunc() {
          return this._endBlockNode(g);
        }
        optimize(E = 1) {
          for (; E-- > 0; ) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
        }
        _leafNode(E) {
          return this._currNode.nodes.push(E), this;
        }
        _blockNode(E) {
          this._currNode.nodes.push(E), this._nodes.push(E);
        }
        _endBlockNode(E, I) {
          const V = this._currNode;
          if (V instanceof E || I && V instanceof I) return this._nodes.pop(), this;
          throw new Error(`CodeGen: not in block "${I ? `${E.kind}/${I.kind}` : E.kind}"`);
        }
        _elseNode(E) {
          const I = this._currNode;
          if (!(I instanceof f)) throw new Error('CodeGen: "else" without "if"');
          return this._currNode = I.else = E, this;
        }
        get _root() {
          return this._nodes[0];
        }
        get _currNode() {
          const E = this._nodes;
          return E[E.length - 1];
        }
        set _currNode(E) {
          const I = this._nodes;
          I[I.length - 1] = E;
        }
      }
      e.CodeGen = D;
      function j(M, E) {
        for (const I in E) M[I] = (M[I] || 0) + (E[I] || 0);
        return M;
      }
      function B(M, E) {
        return E instanceof t._CodeOrName ? j(M, E.names) : M;
      }
      function W(M, E, I) {
        if (M instanceof t.Name) return V(M);
        if (!ne(M)) return M;
        return new t._Code(M._items.reduce((ee, fe) => (fe instanceof t.Name && (fe = V(fe)), fe instanceof t._Code ? ee.push(...fe._items) : ee.push(fe), ee), []));
        function V(ee) {
          const fe = I[ee.str];
          return fe === void 0 || E[ee.str] !== 1 ? ee : (delete E[ee.str], fe);
        }
        function ne(ee) {
          return ee instanceof t._Code && ee._items.some((fe) => fe instanceof t.Name && E[fe.str] === 1 && I[fe.str] !== void 0);
        }
      }
      function H(M, E) {
        for (const I in E) M[I] = (M[I] || 0) - (E[I] || 0);
      }
      function X(M) {
        return typeof M == "boolean" || typeof M == "number" || M === null ? !M : (0, t._)`!${z(M)}`;
      }
      e.not = X;
      const ce = T(e.operators.AND);
      function oe(...M) {
        return M.reduce(ce);
      }
      e.and = oe;
      const Q = T(e.operators.OR);
      function G(...M) {
        return M.reduce(Q);
      }
      e.or = G;
      function T(M) {
        return (E, I) => E === t.nil ? I : I === t.nil ? E : (0, t._)`${z(E)} ${M} ${z(I)}`;
      }
      function z(M) {
        return M instanceof t.Name ? M : (0, t._)`(${M})`;
      }
    })(ma)), ma;
  }
  var de = {}, rs;
  function ye() {
    if (rs) return de;
    rs = 1, Object.defineProperty(de, "__esModule", {
      value: true
    }), de.checkStrictMode = de.getErrorPath = de.Type = de.useFunc = de.setEvaluated = de.evaluatedPropsToName = de.mergeEvaluated = de.eachItem = de.unescapeJsonPointer = de.escapeJsonPointer = de.escapeFragment = de.unescapeFragment = de.schemaRefOrVal = de.schemaHasRulesButRef = de.schemaHasRules = de.checkUnknownRules = de.alwaysValidSchema = de.toHash = void 0;
    const e = me(), t = vr();
    function n(_) {
      const g = {};
      for (const m of _) g[m] = true;
      return g;
    }
    de.toHash = n;
    function r(_, g) {
      return typeof g == "boolean" ? g : Object.keys(g).length === 0 ? true : (a(_, g), !o(g, _.self.RULES.all));
    }
    de.alwaysValidSchema = r;
    function a(_, g = _.schema) {
      const { opts: m, self: P } = _;
      if (!m.strictSchema || typeof g == "boolean") return;
      const $ = P.RULES.keywords;
      for (const C in g) $[C] || w(_, `unknown keyword: "${C}"`);
    }
    de.checkUnknownRules = a;
    function o(_, g) {
      if (typeof _ == "boolean") return !_;
      for (const m in _) if (g[m]) return true;
      return false;
    }
    de.schemaHasRules = o;
    function s(_, g) {
      if (typeof _ == "boolean") return !_;
      for (const m in _) if (m !== "$ref" && g.all[m]) return true;
      return false;
    }
    de.schemaHasRulesButRef = s;
    function i({ topSchemaRef: _, schemaPath: g }, m, P, $) {
      if (!$) {
        if (typeof m == "number" || typeof m == "boolean") return m;
        if (typeof m == "string") return (0, e._)`${m}`;
      }
      return (0, e._)`${_}${g}${(0, e.getProperty)(P)}`;
    }
    de.schemaRefOrVal = i;
    function c(_) {
      return v(decodeURIComponent(_));
    }
    de.unescapeFragment = c;
    function l(_) {
      return encodeURIComponent(u(_));
    }
    de.escapeFragment = l;
    function u(_) {
      return typeof _ == "number" ? `${_}` : _.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    de.escapeJsonPointer = u;
    function v(_) {
      return _.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    de.unescapeJsonPointer = v;
    function h(_, g) {
      if (Array.isArray(_)) for (const m of _) g(m);
      else g(_);
    }
    de.eachItem = h;
    function y({ mergeNames: _, mergeToName: g, mergeValues: m, resultToName: P }) {
      return ($, C, D, j) => {
        const B = D === void 0 ? C : D instanceof e.Name ? (C instanceof e.Name ? _($, C, D) : g($, C, D), D) : C instanceof e.Name ? (g($, D, C), C) : m(C, D);
        return j === e.Name && !(B instanceof e.Name) ? P($, B) : B;
      };
    }
    de.mergeEvaluated = {
      props: y({
        mergeNames: (_, g, m) => _.if((0, e._)`${m} !== true && ${g} !== undefined`, () => {
          _.if((0, e._)`${g} === true`, () => _.assign(m, true), () => _.assign(m, (0, e._)`${m} || {}`).code((0, e._)`Object.assign(${m}, ${g})`));
        }),
        mergeToName: (_, g, m) => _.if((0, e._)`${m} !== true`, () => {
          g === true ? _.assign(m, true) : (_.assign(m, (0, e._)`${m} || {}`), k(_, m, g));
        }),
        mergeValues: (_, g) => _ === true ? true : {
          ..._,
          ...g
        },
        resultToName: S
      }),
      items: y({
        mergeNames: (_, g, m) => _.if((0, e._)`${m} !== true && ${g} !== undefined`, () => _.assign(m, (0, e._)`${g} === true ? true : ${m} > ${g} ? ${m} : ${g}`)),
        mergeToName: (_, g, m) => _.if((0, e._)`${m} !== true`, () => _.assign(m, g === true ? true : (0, e._)`${m} > ${g} ? ${m} : ${g}`)),
        mergeValues: (_, g) => _ === true ? true : Math.max(_, g),
        resultToName: (_, g) => _.var("items", g)
      })
    };
    function S(_, g) {
      if (g === true) return _.var("props", true);
      const m = _.var("props", (0, e._)`{}`);
      return g !== void 0 && k(_, m, g), m;
    }
    de.evaluatedPropsToName = S;
    function k(_, g, m) {
      Object.keys(m).forEach((P) => _.assign((0, e._)`${g}${(0, e.getProperty)(P)}`, true));
    }
    de.setEvaluated = k;
    const d = {};
    function f(_, g) {
      return _.scopeValue("func", {
        ref: g,
        code: d[g.code] || (d[g.code] = new t._Code(g.code))
      });
    }
    de.useFunc = f;
    var p;
    (function(_) {
      _[_.Num = 0] = "Num", _[_.Str = 1] = "Str";
    })(p || (de.Type = p = {}));
    function b(_, g, m) {
      if (_ instanceof e.Name) {
        const P = g === p.Num;
        return m ? P ? (0, e._)`"[" + ${_} + "]"` : (0, e._)`"['" + ${_} + "']"` : P ? (0, e._)`"/" + ${_}` : (0, e._)`"/" + ${_}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
      }
      return m ? (0, e.getProperty)(_).toString() : "/" + u(_);
    }
    de.getErrorPath = b;
    function w(_, g, m = _.opts.strictSchema) {
      if (m) {
        if (g = `strict mode: ${g}`, m === true) throw new Error(g);
        _.self.logger.warn(g);
      }
    }
    return de.checkStrictMode = w, de;
  }
  var In = {}, as;
  function xt() {
    if (as) return In;
    as = 1, Object.defineProperty(In, "__esModule", {
      value: true
    });
    const e = me(), t = {
      data: new e.Name("data"),
      valCxt: new e.Name("valCxt"),
      instancePath: new e.Name("instancePath"),
      parentData: new e.Name("parentData"),
      parentDataProperty: new e.Name("parentDataProperty"),
      rootData: new e.Name("rootData"),
      dynamicAnchors: new e.Name("dynamicAnchors"),
      vErrors: new e.Name("vErrors"),
      errors: new e.Name("errors"),
      this: new e.Name("this"),
      self: new e.Name("self"),
      scope: new e.Name("scope"),
      json: new e.Name("json"),
      jsonPos: new e.Name("jsonPos"),
      jsonLen: new e.Name("jsonLen"),
      jsonPart: new e.Name("jsonPart")
    };
    return In.default = t, In;
  }
  var os;
  function Rr() {
    return os || (os = 1, (function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
      const t = me(), n = ye(), r = xt();
      e.keywordError = {
        message: ({ keyword: d }) => (0, t.str)`must pass "${d}" keyword validation`
      }, e.keyword$DataError = {
        message: ({ keyword: d, schemaType: f }) => f ? (0, t.str)`"${d}" keyword must be ${f} ($data)` : (0, t.str)`"${d}" keyword is invalid ($data)`
      };
      function a(d, f = e.keywordError, p, b) {
        const { it: w } = d, { gen: _, compositeRule: g, allErrors: m } = w, P = v(d, f, p);
        b ?? (g || m) ? c(_, P) : l(w, (0, t._)`[${P}]`);
      }
      e.reportError = a;
      function o(d, f = e.keywordError, p) {
        const { it: b } = d, { gen: w, compositeRule: _, allErrors: g } = b, m = v(d, f, p);
        c(w, m), _ || g || l(b, r.default.vErrors);
      }
      e.reportExtraError = o;
      function s(d, f) {
        d.assign(r.default.errors, f), d.if((0, t._)`${r.default.vErrors} !== null`, () => d.if(f, () => d.assign((0, t._)`${r.default.vErrors}.length`, f), () => d.assign(r.default.vErrors, null)));
      }
      e.resetErrorsCount = s;
      function i({ gen: d, keyword: f, schemaValue: p, data: b, errsCount: w, it: _ }) {
        if (w === void 0) throw new Error("ajv implementation error");
        const g = d.name("err");
        d.forRange("i", w, r.default.errors, (m) => {
          d.const(g, (0, t._)`${r.default.vErrors}[${m}]`), d.if((0, t._)`${g}.instancePath === undefined`, () => d.assign((0, t._)`${g}.instancePath`, (0, t.strConcat)(r.default.instancePath, _.errorPath))), d.assign((0, t._)`${g}.schemaPath`, (0, t.str)`${_.errSchemaPath}/${f}`), _.opts.verbose && (d.assign((0, t._)`${g}.schema`, p), d.assign((0, t._)`${g}.data`, b));
        });
      }
      e.extendErrors = i;
      function c(d, f) {
        const p = d.const("err", f);
        d.if((0, t._)`${r.default.vErrors} === null`, () => d.assign(r.default.vErrors, (0, t._)`[${p}]`), (0, t._)`${r.default.vErrors}.push(${p})`), d.code((0, t._)`${r.default.errors}++`);
      }
      function l(d, f) {
        const { gen: p, validateName: b, schemaEnv: w } = d;
        w.$async ? p.throw((0, t._)`new ${d.ValidationError}(${f})`) : (p.assign((0, t._)`${b}.errors`, f), p.return(false));
      }
      const u = {
        keyword: new t.Name("keyword"),
        schemaPath: new t.Name("schemaPath"),
        params: new t.Name("params"),
        propertyName: new t.Name("propertyName"),
        message: new t.Name("message"),
        schema: new t.Name("schema"),
        parentSchema: new t.Name("parentSchema")
      };
      function v(d, f, p) {
        const { createErrors: b } = d.it;
        return b === false ? (0, t._)`{}` : h(d, f, p);
      }
      function h(d, f, p = {}) {
        const { gen: b, it: w } = d, _ = [
          y(w, p),
          S(d, p)
        ];
        return k(d, f, _), b.object(..._);
      }
      function y({ errorPath: d }, { instancePath: f }) {
        const p = f ? (0, t.str)`${d}${(0, n.getErrorPath)(f, n.Type.Str)}` : d;
        return [
          r.default.instancePath,
          (0, t.strConcat)(r.default.instancePath, p)
        ];
      }
      function S({ keyword: d, it: { errSchemaPath: f } }, { schemaPath: p, parentSchema: b }) {
        let w = b ? f : (0, t.str)`${f}/${d}`;
        return p && (w = (0, t.str)`${w}${(0, n.getErrorPath)(p, n.Type.Str)}`), [
          u.schemaPath,
          w
        ];
      }
      function k(d, { params: f, message: p }, b) {
        const { keyword: w, data: _, schemaValue: g, it: m } = d, { opts: P, propertyName: $, topSchemaRef: C, schemaPath: D } = m;
        b.push([
          u.keyword,
          w
        ], [
          u.params,
          typeof f == "function" ? f(d) : f || (0, t._)`{}`
        ]), P.messages && b.push([
          u.message,
          typeof p == "function" ? p(d) : p
        ]), P.verbose && b.push([
          u.schema,
          g
        ], [
          u.parentSchema,
          (0, t._)`${C}${D}`
        ], [
          r.default.data,
          _
        ]), $ && b.push([
          u.propertyName,
          $
        ]);
      }
    })(pa)), pa;
  }
  var ss;
  function Yu() {
    if (ss) return It;
    ss = 1, Object.defineProperty(It, "__esModule", {
      value: true
    }), It.boolOrEmptySchema = It.topBoolOrEmptySchema = void 0;
    const e = Rr(), t = me(), n = xt(), r = {
      message: "boolean schema is false"
    };
    function a(i) {
      const { gen: c, schema: l, validateName: u } = i;
      l === false ? s(i, false) : typeof l == "object" && l.$async === true ? c.return(n.default.data) : (c.assign((0, t._)`${u}.errors`, null), c.return(true));
    }
    It.topBoolOrEmptySchema = a;
    function o(i, c) {
      const { gen: l, schema: u } = i;
      u === false ? (l.var(c, false), s(i)) : l.var(c, true);
    }
    It.boolOrEmptySchema = o;
    function s(i, c) {
      const { gen: l, data: u } = i, v = {
        gen: l,
        keyword: "false schema",
        data: u,
        schema: false,
        schemaCode: false,
        schemaValue: false,
        params: {},
        it: i
      };
      (0, e.reportError)(v, r, void 0, c);
    }
    return It;
  }
  var Ce = {}, Dt = {}, is;
  function tc() {
    if (is) return Dt;
    is = 1, Object.defineProperty(Dt, "__esModule", {
      value: true
    }), Dt.getRules = Dt.isJSONType = void 0;
    const e = [
      "string",
      "number",
      "integer",
      "boolean",
      "null",
      "object",
      "array"
    ], t = new Set(e);
    function n(a) {
      return typeof a == "string" && t.has(a);
    }
    Dt.isJSONType = n;
    function r() {
      const a = {
        number: {
          type: "number",
          rules: []
        },
        string: {
          type: "string",
          rules: []
        },
        array: {
          type: "array",
          rules: []
        },
        object: {
          type: "object",
          rules: []
        }
      };
      return {
        types: {
          ...a,
          integer: true,
          boolean: true,
          null: true
        },
        rules: [
          {
            rules: []
          },
          a.number,
          a.string,
          a.array,
          a.object
        ],
        post: {
          rules: []
        },
        all: {},
        keywords: {}
      };
    }
    return Dt.getRules = r, Dt;
  }
  var ct = {}, cs;
  function nc() {
    if (cs) return ct;
    cs = 1, Object.defineProperty(ct, "__esModule", {
      value: true
    }), ct.shouldUseRule = ct.shouldUseGroup = ct.schemaHasRulesForType = void 0;
    function e({ schema: r, self: a }, o) {
      const s = a.RULES.types[o];
      return s && s !== true && t(r, s);
    }
    ct.schemaHasRulesForType = e;
    function t(r, a) {
      return a.rules.some((o) => n(r, o));
    }
    ct.shouldUseGroup = t;
    function n(r, a) {
      var o;
      return r[a.keyword] !== void 0 || ((o = a.definition.implements) === null || o === void 0 ? void 0 : o.some((s) => r[s] !== void 0));
    }
    return ct.shouldUseRule = n, ct;
  }
  var ls;
  function br() {
    if (ls) return Ce;
    ls = 1, Object.defineProperty(Ce, "__esModule", {
      value: true
    }), Ce.reportTypeError = Ce.checkDataTypes = Ce.checkDataType = Ce.coerceAndCheckDataType = Ce.getJSONTypes = Ce.getSchemaTypes = Ce.DataType = void 0;
    const e = tc(), t = nc(), n = Rr(), r = me(), a = ye();
    var o;
    (function(p) {
      p[p.Correct = 0] = "Correct", p[p.Wrong = 1] = "Wrong";
    })(o || (Ce.DataType = o = {}));
    function s(p) {
      const b = i(p.type);
      if (b.includes("null")) {
        if (p.nullable === false) throw new Error("type: null contradicts nullable: false");
      } else {
        if (!b.length && p.nullable !== void 0) throw new Error('"nullable" cannot be used without "type"');
        p.nullable === true && b.push("null");
      }
      return b;
    }
    Ce.getSchemaTypes = s;
    function i(p) {
      const b = Array.isArray(p) ? p : p ? [
        p
      ] : [];
      if (b.every(e.isJSONType)) return b;
      throw new Error("type must be JSONType or JSONType[]: " + b.join(","));
    }
    Ce.getJSONTypes = i;
    function c(p, b) {
      const { gen: w, data: _, opts: g } = p, m = u(b, g.coerceTypes), P = b.length > 0 && !(m.length === 0 && b.length === 1 && (0, t.schemaHasRulesForType)(p, b[0]));
      if (P) {
        const $ = S(b, _, g.strictNumbers, o.Wrong);
        w.if($, () => {
          m.length ? v(p, b, m) : d(p);
        });
      }
      return P;
    }
    Ce.coerceAndCheckDataType = c;
    const l = /* @__PURE__ */ new Set([
      "string",
      "number",
      "integer",
      "boolean",
      "null"
    ]);
    function u(p, b) {
      return b ? p.filter((w) => l.has(w) || b === "array" && w === "array") : [];
    }
    function v(p, b, w) {
      const { gen: _, data: g, opts: m } = p, P = _.let("dataType", (0, r._)`typeof ${g}`), $ = _.let("coerced", (0, r._)`undefined`);
      m.coerceTypes === "array" && _.if((0, r._)`${P} == 'object' && Array.isArray(${g}) && ${g}.length == 1`, () => _.assign(g, (0, r._)`${g}[0]`).assign(P, (0, r._)`typeof ${g}`).if(S(b, g, m.strictNumbers), () => _.assign($, g))), _.if((0, r._)`${$} !== undefined`);
      for (const D of w) (l.has(D) || D === "array" && m.coerceTypes === "array") && C(D);
      _.else(), d(p), _.endIf(), _.if((0, r._)`${$} !== undefined`, () => {
        _.assign(g, $), h(p, $);
      });
      function C(D) {
        switch (D) {
          case "string":
            _.elseIf((0, r._)`${P} == "number" || ${P} == "boolean"`).assign($, (0, r._)`"" + ${g}`).elseIf((0, r._)`${g} === null`).assign($, (0, r._)`""`);
            return;
          case "number":
            _.elseIf((0, r._)`${P} == "boolean" || ${g} === null
              || (${P} == "string" && ${g} && ${g} == +${g})`).assign($, (0, r._)`+${g}`);
            return;
          case "integer":
            _.elseIf((0, r._)`${P} === "boolean" || ${g} === null
              || (${P} === "string" && ${g} && ${g} == +${g} && !(${g} % 1))`).assign($, (0, r._)`+${g}`);
            return;
          case "boolean":
            _.elseIf((0, r._)`${g} === "false" || ${g} === 0 || ${g} === null`).assign($, false).elseIf((0, r._)`${g} === "true" || ${g} === 1`).assign($, true);
            return;
          case "null":
            _.elseIf((0, r._)`${g} === "" || ${g} === 0 || ${g} === false`), _.assign($, null);
            return;
          case "array":
            _.elseIf((0, r._)`${P} === "string" || ${P} === "number"
              || ${P} === "boolean" || ${g} === null`).assign($, (0, r._)`[${g}]`);
        }
      }
    }
    function h({ gen: p, parentData: b, parentDataProperty: w }, _) {
      p.if((0, r._)`${b} !== undefined`, () => p.assign((0, r._)`${b}[${w}]`, _));
    }
    function y(p, b, w, _ = o.Correct) {
      const g = _ === o.Correct ? r.operators.EQ : r.operators.NEQ;
      let m;
      switch (p) {
        case "null":
          return (0, r._)`${b} ${g} null`;
        case "array":
          m = (0, r._)`Array.isArray(${b})`;
          break;
        case "object":
          m = (0, r._)`${b} && typeof ${b} == "object" && !Array.isArray(${b})`;
          break;
        case "integer":
          m = P((0, r._)`!(${b} % 1) && !isNaN(${b})`);
          break;
        case "number":
          m = P();
          break;
        default:
          return (0, r._)`typeof ${b} ${g} ${p}`;
      }
      return _ === o.Correct ? m : (0, r.not)(m);
      function P($ = r.nil) {
        return (0, r.and)((0, r._)`typeof ${b} == "number"`, $, w ? (0, r._)`isFinite(${b})` : r.nil);
      }
    }
    Ce.checkDataType = y;
    function S(p, b, w, _) {
      if (p.length === 1) return y(p[0], b, w, _);
      let g;
      const m = (0, a.toHash)(p);
      if (m.array && m.object) {
        const P = (0, r._)`typeof ${b} != "object"`;
        g = m.null ? P : (0, r._)`!${b} || ${P}`, delete m.null, delete m.array, delete m.object;
      } else g = r.nil;
      m.number && delete m.integer;
      for (const P in m) g = (0, r.and)(g, y(P, b, w, _));
      return g;
    }
    Ce.checkDataTypes = S;
    const k = {
      message: ({ schema: p }) => `must be ${p}`,
      params: ({ schema: p, schemaValue: b }) => typeof p == "string" ? (0, r._)`{type: ${p}}` : (0, r._)`{type: ${b}}`
    };
    function d(p) {
      const b = f(p);
      (0, n.reportError)(b, k);
    }
    Ce.reportTypeError = d;
    function f(p) {
      const { gen: b, data: w, schema: _ } = p, g = (0, a.schemaRefOrVal)(p, _, "type");
      return {
        gen: b,
        keyword: "type",
        data: w,
        schema: _.type,
        schemaCode: g,
        schemaValue: g,
        parentSchema: _,
        params: {},
        it: p
      };
    }
    return Ce;
  }
  var an = {}, ds;
  function Ju() {
    if (ds) return an;
    ds = 1, Object.defineProperty(an, "__esModule", {
      value: true
    }), an.assignDefaults = void 0;
    const e = me(), t = ye();
    function n(a, o) {
      const { properties: s, items: i } = a.schema;
      if (o === "object" && s) for (const c in s) r(a, c, s[c].default);
      else o === "array" && Array.isArray(i) && i.forEach((c, l) => r(a, l, c.default));
    }
    an.assignDefaults = n;
    function r(a, o, s) {
      const { gen: i, compositeRule: c, data: l, opts: u } = a;
      if (s === void 0) return;
      const v = (0, e._)`${l}${(0, e.getProperty)(o)}`;
      if (c) {
        (0, t.checkStrictMode)(a, `default is ignored for: ${v}`);
        return;
      }
      let h = (0, e._)`${v} === undefined`;
      u.useDefaults === "empty" && (h = (0, e._)`${h} || ${v} === null || ${v} === ""`), i.if(h, (0, e._)`${v} = ${(0, e.stringify)(s)}`);
    }
    return an;
  }
  var He = {}, ve = {}, us;
  function Je() {
    if (us) return ve;
    us = 1, Object.defineProperty(ve, "__esModule", {
      value: true
    }), ve.validateUnion = ve.validateArray = ve.usePattern = ve.callValidateCode = ve.schemaProperties = ve.allSchemaProperties = ve.noPropertyInData = ve.propertyInData = ve.isOwnProperty = ve.hasPropFunc = ve.reportMissingProp = ve.checkMissingProp = ve.checkReportMissingProp = void 0;
    const e = me(), t = ye(), n = xt(), r = ye();
    function a(p, b) {
      const { gen: w, data: _, it: g } = p;
      w.if(u(w, _, b, g.opts.ownProperties), () => {
        p.setParams({
          missingProperty: (0, e._)`${b}`
        }, true), p.error();
      });
    }
    ve.checkReportMissingProp = a;
    function o({ gen: p, data: b, it: { opts: w } }, _, g) {
      return (0, e.or)(..._.map((m) => (0, e.and)(u(p, b, m, w.ownProperties), (0, e._)`${g} = ${m}`)));
    }
    ve.checkMissingProp = o;
    function s(p, b) {
      p.setParams({
        missingProperty: b
      }, true), p.error();
    }
    ve.reportMissingProp = s;
    function i(p) {
      return p.scopeValue("func", {
        ref: Object.prototype.hasOwnProperty,
        code: (0, e._)`Object.prototype.hasOwnProperty`
      });
    }
    ve.hasPropFunc = i;
    function c(p, b, w) {
      return (0, e._)`${i(p)}.call(${b}, ${w})`;
    }
    ve.isOwnProperty = c;
    function l(p, b, w, _) {
      const g = (0, e._)`${b}${(0, e.getProperty)(w)} !== undefined`;
      return _ ? (0, e._)`${g} && ${c(p, b, w)}` : g;
    }
    ve.propertyInData = l;
    function u(p, b, w, _) {
      const g = (0, e._)`${b}${(0, e.getProperty)(w)} === undefined`;
      return _ ? (0, e.or)(g, (0, e.not)(c(p, b, w))) : g;
    }
    ve.noPropertyInData = u;
    function v(p) {
      return p ? Object.keys(p).filter((b) => b !== "__proto__") : [];
    }
    ve.allSchemaProperties = v;
    function h(p, b) {
      return v(b).filter((w) => !(0, t.alwaysValidSchema)(p, b[w]));
    }
    ve.schemaProperties = h;
    function y({ schemaCode: p, data: b, it: { gen: w, topSchemaRef: _, schemaPath: g, errorPath: m }, it: P }, $, C, D) {
      const j = D ? (0, e._)`${p}, ${b}, ${_}${g}` : b, B = [
        [
          n.default.instancePath,
          (0, e.strConcat)(n.default.instancePath, m)
        ],
        [
          n.default.parentData,
          P.parentData
        ],
        [
          n.default.parentDataProperty,
          P.parentDataProperty
        ],
        [
          n.default.rootData,
          n.default.rootData
        ]
      ];
      P.opts.dynamicRef && B.push([
        n.default.dynamicAnchors,
        n.default.dynamicAnchors
      ]);
      const W = (0, e._)`${j}, ${w.object(...B)}`;
      return C !== e.nil ? (0, e._)`${$}.call(${C}, ${W})` : (0, e._)`${$}(${W})`;
    }
    ve.callValidateCode = y;
    const S = (0, e._)`new RegExp`;
    function k({ gen: p, it: { opts: b } }, w) {
      const _ = b.unicodeRegExp ? "u" : "", { regExp: g } = b.code, m = g(w, _);
      return p.scopeValue("pattern", {
        key: m.toString(),
        ref: m,
        code: (0, e._)`${g.code === "new RegExp" ? S : (0, r.useFunc)(p, g)}(${w}, ${_})`
      });
    }
    ve.usePattern = k;
    function d(p) {
      const { gen: b, data: w, keyword: _, it: g } = p, m = b.name("valid");
      if (g.allErrors) {
        const $ = b.let("valid", true);
        return P(() => b.assign($, false)), $;
      }
      return b.var(m, true), P(() => b.break()), m;
      function P($) {
        const C = b.const("len", (0, e._)`${w}.length`);
        b.forRange("i", 0, C, (D) => {
          p.subschema({
            keyword: _,
            dataProp: D,
            dataPropType: t.Type.Num
          }, m), b.if((0, e.not)(m), $);
        });
      }
    }
    ve.validateArray = d;
    function f(p) {
      const { gen: b, schema: w, keyword: _, it: g } = p;
      if (!Array.isArray(w)) throw new Error("ajv implementation error");
      if (w.some((C) => (0, t.alwaysValidSchema)(g, C)) && !g.opts.unevaluated) return;
      const P = b.let("valid", false), $ = b.name("_valid");
      b.block(() => w.forEach((C, D) => {
        const j = p.subschema({
          keyword: _,
          schemaProp: D,
          compositeRule: true
        }, $);
        b.assign(P, (0, e._)`${P} || ${$}`), p.mergeValidEvaluated(j, $) || b.if((0, e.not)(P));
      })), p.result(P, () => p.reset(), () => p.error(true));
    }
    return ve.validateUnion = f, ve;
  }
  var ps;
  function Xu() {
    if (ps) return He;
    ps = 1, Object.defineProperty(He, "__esModule", {
      value: true
    }), He.validateKeywordUsage = He.validSchemaType = He.funcKeywordCode = He.macroKeywordCode = void 0;
    const e = me(), t = xt(), n = Je(), r = Rr();
    function a(h, y) {
      const { gen: S, keyword: k, schema: d, parentSchema: f, it: p } = h, b = y.macro.call(p.self, d, f, p), w = l(S, k, b);
      p.opts.validateSchema !== false && p.self.validateSchema(b, true);
      const _ = S.name("valid");
      h.subschema({
        schema: b,
        schemaPath: e.nil,
        errSchemaPath: `${p.errSchemaPath}/${k}`,
        topSchemaRef: w,
        compositeRule: true
      }, _), h.pass(_, () => h.error(true));
    }
    He.macroKeywordCode = a;
    function o(h, y) {
      var S;
      const { gen: k, keyword: d, schema: f, parentSchema: p, $data: b, it: w } = h;
      c(w, y);
      const _ = !b && y.compile ? y.compile.call(w.self, f, p, w) : y.validate, g = l(k, d, _), m = k.let("valid");
      h.block$data(m, P), h.ok((S = y.valid) !== null && S !== void 0 ? S : m);
      function P() {
        if (y.errors === false) D(), y.modifying && s(h), j(() => h.error());
        else {
          const B = y.async ? $() : C();
          y.modifying && s(h), j(() => i(h, B));
        }
      }
      function $() {
        const B = k.let("ruleErrs", null);
        return k.try(() => D((0, e._)`await `), (W) => k.assign(m, false).if((0, e._)`${W} instanceof ${w.ValidationError}`, () => k.assign(B, (0, e._)`${W}.errors`), () => k.throw(W))), B;
      }
      function C() {
        const B = (0, e._)`${g}.errors`;
        return k.assign(B, null), D(e.nil), B;
      }
      function D(B = y.async ? (0, e._)`await ` : e.nil) {
        const W = w.opts.passContext ? t.default.this : t.default.self, H = !("compile" in y && !b || y.schema === false);
        k.assign(m, (0, e._)`${B}${(0, n.callValidateCode)(h, g, W, H)}`, y.modifying);
      }
      function j(B) {
        var W;
        k.if((0, e.not)((W = y.valid) !== null && W !== void 0 ? W : m), B);
      }
    }
    He.funcKeywordCode = o;
    function s(h) {
      const { gen: y, data: S, it: k } = h;
      y.if(k.parentData, () => y.assign(S, (0, e._)`${k.parentData}[${k.parentDataProperty}]`));
    }
    function i(h, y) {
      const { gen: S } = h;
      S.if((0, e._)`Array.isArray(${y})`, () => {
        S.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${y} : ${t.default.vErrors}.concat(${y})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(h);
      }, () => h.error());
    }
    function c({ schemaEnv: h }, y) {
      if (y.async && !h.$async) throw new Error("async keyword in sync schema");
    }
    function l(h, y, S) {
      if (S === void 0) throw new Error(`keyword "${y}" failed to compile`);
      return h.scopeValue("keyword", typeof S == "function" ? {
        ref: S
      } : {
        ref: S,
        code: (0, e.stringify)(S)
      });
    }
    function u(h, y, S = false) {
      return !y.length || y.some((k) => k === "array" ? Array.isArray(h) : k === "object" ? h && typeof h == "object" && !Array.isArray(h) : typeof h == k || S && typeof h > "u");
    }
    He.validSchemaType = u;
    function v({ schema: h, opts: y, self: S, errSchemaPath: k }, d, f) {
      if (Array.isArray(d.keyword) ? !d.keyword.includes(f) : d.keyword !== f) throw new Error("ajv implementation error");
      const p = d.dependencies;
      if (p == null ? void 0 : p.some((b) => !Object.prototype.hasOwnProperty.call(h, b))) throw new Error(`parent schema must have dependencies of ${f}: ${p.join(",")}`);
      if (d.validateSchema && !d.validateSchema(h[f])) {
        const w = `keyword "${f}" value is invalid at path "${k}": ` + S.errorsText(d.validateSchema.errors);
        if (y.validateSchema === "log") S.logger.error(w);
        else throw new Error(w);
      }
    }
    return He.validateKeywordUsage = v, He;
  }
  var lt = {}, ms;
  function Zu() {
    if (ms) return lt;
    ms = 1, Object.defineProperty(lt, "__esModule", {
      value: true
    }), lt.extendSubschemaMode = lt.extendSubschemaData = lt.getSubschema = void 0;
    const e = me(), t = ye();
    function n(o, { keyword: s, schemaProp: i, schema: c, schemaPath: l, errSchemaPath: u, topSchemaRef: v }) {
      if (s !== void 0 && c !== void 0) throw new Error('both "keyword" and "schema" passed, only one allowed');
      if (s !== void 0) {
        const h = o.schema[s];
        return i === void 0 ? {
          schema: h,
          schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(s)}`,
          errSchemaPath: `${o.errSchemaPath}/${s}`
        } : {
          schema: h[i],
          schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(s)}${(0, e.getProperty)(i)}`,
          errSchemaPath: `${o.errSchemaPath}/${s}/${(0, t.escapeFragment)(i)}`
        };
      }
      if (c !== void 0) {
        if (l === void 0 || u === void 0 || v === void 0) throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
        return {
          schema: c,
          schemaPath: l,
          topSchemaRef: v,
          errSchemaPath: u
        };
      }
      throw new Error('either "keyword" or "schema" must be passed');
    }
    lt.getSubschema = n;
    function r(o, s, { dataProp: i, dataPropType: c, data: l, dataTypes: u, propertyName: v }) {
      if (l !== void 0 && i !== void 0) throw new Error('both "data" and "dataProp" passed, only one allowed');
      const { gen: h } = s;
      if (i !== void 0) {
        const { errorPath: S, dataPathArr: k, opts: d } = s, f = h.let("data", (0, e._)`${s.data}${(0, e.getProperty)(i)}`, true);
        y(f), o.errorPath = (0, e.str)`${S}${(0, t.getErrorPath)(i, c, d.jsPropertySyntax)}`, o.parentDataProperty = (0, e._)`${i}`, o.dataPathArr = [
          ...k,
          o.parentDataProperty
        ];
      }
      if (l !== void 0) {
        const S = l instanceof e.Name ? l : h.let("data", l, true);
        y(S), v !== void 0 && (o.propertyName = v);
      }
      u && (o.dataTypes = u);
      function y(S) {
        o.data = S, o.dataLevel = s.dataLevel + 1, o.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), o.parentData = s.data, o.dataNames = [
          ...s.dataNames,
          S
        ];
      }
    }
    lt.extendSubschemaData = r;
    function a(o, { jtdDiscriminator: s, jtdMetadata: i, compositeRule: c, createErrors: l, allErrors: u }) {
      c !== void 0 && (o.compositeRule = c), l !== void 0 && (o.createErrors = l), u !== void 0 && (o.allErrors = u), o.jtdDiscriminator = s, o.jtdMetadata = i;
    }
    return lt.extendSubschemaMode = a, lt;
  }
  var Re = {}, ya, fs;
  function rc() {
    return fs || (fs = 1, ya = function e(t, n) {
      if (t === n) return true;
      if (t && n && typeof t == "object" && typeof n == "object") {
        if (t.constructor !== n.constructor) return false;
        var r, a, o;
        if (Array.isArray(t)) {
          if (r = t.length, r != n.length) return false;
          for (a = r; a-- !== 0; ) if (!e(t[a], n[a])) return false;
          return true;
        }
        if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
        if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
        if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
        if (o = Object.keys(t), r = o.length, r !== Object.keys(n).length) return false;
        for (a = r; a-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(n, o[a])) return false;
        for (a = r; a-- !== 0; ) {
          var s = o[a];
          if (!e(t[s], n[s])) return false;
        }
        return true;
      }
      return t !== t && n !== n;
    }), ya;
  }
  var ga = {
    exports: {}
  }, hs;
  function Qu() {
    if (hs) return ga.exports;
    hs = 1;
    var e = ga.exports = function(r, a, o) {
      typeof a == "function" && (o = a, a = {}), o = a.cb || o;
      var s = typeof o == "function" ? o : o.pre || function() {
      }, i = o.post || function() {
      };
      t(a, s, i, r, "", r);
    };
    e.keywords = {
      additionalItems: true,
      items: true,
      contains: true,
      additionalProperties: true,
      propertyNames: true,
      not: true,
      if: true,
      then: true,
      else: true
    }, e.arrayKeywords = {
      items: true,
      allOf: true,
      anyOf: true,
      oneOf: true
    }, e.propsKeywords = {
      $defs: true,
      definitions: true,
      properties: true,
      patternProperties: true,
      dependencies: true
    }, e.skipKeywords = {
      default: true,
      enum: true,
      const: true,
      required: true,
      maximum: true,
      minimum: true,
      exclusiveMaximum: true,
      exclusiveMinimum: true,
      multipleOf: true,
      maxLength: true,
      minLength: true,
      pattern: true,
      format: true,
      maxItems: true,
      minItems: true,
      uniqueItems: true,
      maxProperties: true,
      minProperties: true
    };
    function t(r, a, o, s, i, c, l, u, v, h) {
      if (s && typeof s == "object" && !Array.isArray(s)) {
        a(s, i, c, l, u, v, h);
        for (var y in s) {
          var S = s[y];
          if (Array.isArray(S)) {
            if (y in e.arrayKeywords) for (var k = 0; k < S.length; k++) t(r, a, o, S[k], i + "/" + y + "/" + k, c, i, y, s, k);
          } else if (y in e.propsKeywords) {
            if (S && typeof S == "object") for (var d in S) t(r, a, o, S[d], i + "/" + y + "/" + n(d), c, i, y, s, d);
          } else (y in e.keywords || r.allKeys && !(y in e.skipKeywords)) && t(r, a, o, S, i + "/" + y, c, i, y, s);
        }
        o(s, i, c, l, u, v, h);
      }
    }
    function n(r) {
      return r.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    return ga.exports;
  }
  var ys;
  function jr() {
    if (ys) return Re;
    ys = 1, Object.defineProperty(Re, "__esModule", {
      value: true
    }), Re.getSchemaRefs = Re.resolveUrl = Re.normalizeId = Re._getFullPath = Re.getFullPath = Re.inlineRef = void 0;
    const e = ye(), t = rc(), n = Qu(), r = /* @__PURE__ */ new Set([
      "type",
      "format",
      "pattern",
      "maxLength",
      "minLength",
      "maxProperties",
      "minProperties",
      "maxItems",
      "minItems",
      "maximum",
      "minimum",
      "uniqueItems",
      "multipleOf",
      "required",
      "enum",
      "const"
    ]);
    function a(k, d = true) {
      return typeof k == "boolean" ? true : d === true ? !s(k) : d ? i(k) <= d : false;
    }
    Re.inlineRef = a;
    const o = /* @__PURE__ */ new Set([
      "$ref",
      "$recursiveRef",
      "$recursiveAnchor",
      "$dynamicRef",
      "$dynamicAnchor"
    ]);
    function s(k) {
      for (const d in k) {
        if (o.has(d)) return true;
        const f = k[d];
        if (Array.isArray(f) && f.some(s) || typeof f == "object" && s(f)) return true;
      }
      return false;
    }
    function i(k) {
      let d = 0;
      for (const f in k) {
        if (f === "$ref") return 1 / 0;
        if (d++, !r.has(f) && (typeof k[f] == "object" && (0, e.eachItem)(k[f], (p) => d += i(p)), d === 1 / 0)) return 1 / 0;
      }
      return d;
    }
    function c(k, d = "", f) {
      f !== false && (d = v(d));
      const p = k.parse(d);
      return l(k, p);
    }
    Re.getFullPath = c;
    function l(k, d) {
      return k.serialize(d).split("#")[0] + "#";
    }
    Re._getFullPath = l;
    const u = /#\/?$/;
    function v(k) {
      return k ? k.replace(u, "") : "";
    }
    Re.normalizeId = v;
    function h(k, d, f) {
      return f = v(f), k.resolve(d, f);
    }
    Re.resolveUrl = h;
    const y = /^[a-z_][-a-z0-9._]*$/i;
    function S(k, d) {
      if (typeof k == "boolean") return {};
      const { schemaId: f, uriResolver: p } = this.opts, b = v(k[f] || d), w = {
        "": b
      }, _ = c(p, b, false), g = {}, m = /* @__PURE__ */ new Set();
      return n(k, {
        allKeys: true
      }, (C, D, j, B) => {
        if (B === void 0) return;
        const W = _ + D;
        let H = w[B];
        typeof C[f] == "string" && (H = X.call(this, C[f])), ce.call(this, C.$anchor), ce.call(this, C.$dynamicAnchor), w[D] = H;
        function X(oe) {
          const Q = this.opts.uriResolver.resolve;
          if (oe = v(H ? Q(H, oe) : oe), m.has(oe)) throw $(oe);
          m.add(oe);
          let G = this.refs[oe];
          return typeof G == "string" && (G = this.refs[G]), typeof G == "object" ? P(C, G.schema, oe) : oe !== v(W) && (oe[0] === "#" ? (P(C, g[oe], oe), g[oe] = C) : this.refs[oe] = W), oe;
        }
        function ce(oe) {
          if (typeof oe == "string") {
            if (!y.test(oe)) throw new Error(`invalid anchor "${oe}"`);
            X.call(this, `#${oe}`);
          }
        }
      }), g;
      function P(C, D, j) {
        if (D !== void 0 && !t(C, D)) throw $(j);
      }
      function $(C) {
        return new Error(`reference "${C}" resolves to more than one schema`);
      }
    }
    return Re.getSchemaRefs = S, Re;
  }
  var gs;
  function Or() {
    if (gs) return it;
    gs = 1, Object.defineProperty(it, "__esModule", {
      value: true
    }), it.getData = it.KeywordCxt = it.validateFunctionCode = void 0;
    const e = Yu(), t = br(), n = nc(), r = br(), a = Ju(), o = Xu(), s = Zu(), i = me(), c = xt(), l = jr(), u = ye(), v = Rr();
    function h(R) {
      if (_(R) && (m(R), w(R))) {
        d(R);
        return;
      }
      y(R, () => (0, e.topBoolOrEmptySchema)(R));
    }
    it.validateFunctionCode = h;
    function y({ gen: R, validateName: F, schema: Y, schemaEnv: L, opts: q }, J) {
      q.code.es5 ? R.func(F, (0, i._)`${c.default.data}, ${c.default.valCxt}`, L.$async, () => {
        R.code((0, i._)`"use strict"; ${p(Y, q)}`), k(R, q), R.code(J);
      }) : R.func(F, (0, i._)`${c.default.data}, ${S(q)}`, L.$async, () => R.code(p(Y, q)).code(J));
    }
    function S(R) {
      return (0, i._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${R.dynamicRef ? (0, i._)`, ${c.default.dynamicAnchors}={}` : i.nil}}={}`;
    }
    function k(R, F) {
      R.if(c.default.valCxt, () => {
        R.var(c.default.instancePath, (0, i._)`${c.default.valCxt}.${c.default.instancePath}`), R.var(c.default.parentData, (0, i._)`${c.default.valCxt}.${c.default.parentData}`), R.var(c.default.parentDataProperty, (0, i._)`${c.default.valCxt}.${c.default.parentDataProperty}`), R.var(c.default.rootData, (0, i._)`${c.default.valCxt}.${c.default.rootData}`), F.dynamicRef && R.var(c.default.dynamicAnchors, (0, i._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
      }, () => {
        R.var(c.default.instancePath, (0, i._)`""`), R.var(c.default.parentData, (0, i._)`undefined`), R.var(c.default.parentDataProperty, (0, i._)`undefined`), R.var(c.default.rootData, c.default.data), F.dynamicRef && R.var(c.default.dynamicAnchors, (0, i._)`{}`);
      });
    }
    function d(R) {
      const { schema: F, opts: Y, gen: L } = R;
      y(R, () => {
        Y.$comment && F.$comment && B(R), C(R), L.let(c.default.vErrors, null), L.let(c.default.errors, 0), Y.unevaluated && f(R), P(R), W(R);
      });
    }
    function f(R) {
      const { gen: F, validateName: Y } = R;
      R.evaluated = F.const("evaluated", (0, i._)`${Y}.evaluated`), F.if((0, i._)`${R.evaluated}.dynamicProps`, () => F.assign((0, i._)`${R.evaluated}.props`, (0, i._)`undefined`)), F.if((0, i._)`${R.evaluated}.dynamicItems`, () => F.assign((0, i._)`${R.evaluated}.items`, (0, i._)`undefined`));
    }
    function p(R, F) {
      const Y = typeof R == "object" && R[F.schemaId];
      return Y && (F.code.source || F.code.process) ? (0, i._)`/*# sourceURL=${Y} */` : i.nil;
    }
    function b(R, F) {
      if (_(R) && (m(R), w(R))) {
        g(R, F);
        return;
      }
      (0, e.boolOrEmptySchema)(R, F);
    }
    function w({ schema: R, self: F }) {
      if (typeof R == "boolean") return !R;
      for (const Y in R) if (F.RULES.all[Y]) return true;
      return false;
    }
    function _(R) {
      return typeof R.schema != "boolean";
    }
    function g(R, F) {
      const { schema: Y, gen: L, opts: q } = R;
      q.$comment && Y.$comment && B(R), D(R), j(R);
      const J = L.const("_errs", c.default.errors);
      P(R, J), L.var(F, (0, i._)`${J} === ${c.default.errors}`);
    }
    function m(R) {
      (0, u.checkUnknownRules)(R), $(R);
    }
    function P(R, F) {
      if (R.opts.jtd) return X(R, [], false, F);
      const Y = (0, t.getSchemaTypes)(R.schema), L = (0, t.coerceAndCheckDataType)(R, Y);
      X(R, Y, !L, F);
    }
    function $(R) {
      const { schema: F, errSchemaPath: Y, opts: L, self: q } = R;
      F.$ref && L.ignoreKeywordsWithRef && (0, u.schemaHasRulesButRef)(F, q.RULES) && q.logger.warn(`$ref: keywords ignored in schema at path "${Y}"`);
    }
    function C(R) {
      const { schema: F, opts: Y } = R;
      F.default !== void 0 && Y.useDefaults && Y.strictSchema && (0, u.checkStrictMode)(R, "default is ignored in the schema root");
    }
    function D(R) {
      const F = R.schema[R.opts.schemaId];
      F && (R.baseId = (0, l.resolveUrl)(R.opts.uriResolver, R.baseId, F));
    }
    function j(R) {
      if (R.schema.$async && !R.schemaEnv.$async) throw new Error("async schema in sync schema");
    }
    function B({ gen: R, schemaEnv: F, schema: Y, errSchemaPath: L, opts: q }) {
      const J = Y.$comment;
      if (q.$comment === true) R.code((0, i._)`${c.default.self}.logger.log(${J})`);
      else if (typeof q.$comment == "function") {
        const le = (0, i.str)`${L}/$comment`, ge = R.scopeValue("root", {
          ref: F.root
        });
        R.code((0, i._)`${c.default.self}.opts.$comment(${J}, ${le}, ${ge}.schema)`);
      }
    }
    function W(R) {
      const { gen: F, schemaEnv: Y, validateName: L, ValidationError: q, opts: J } = R;
      Y.$async ? F.if((0, i._)`${c.default.errors} === 0`, () => F.return(c.default.data), () => F.throw((0, i._)`new ${q}(${c.default.vErrors})`)) : (F.assign((0, i._)`${L}.errors`, c.default.vErrors), J.unevaluated && H(R), F.return((0, i._)`${c.default.errors} === 0`));
    }
    function H({ gen: R, evaluated: F, props: Y, items: L }) {
      Y instanceof i.Name && R.assign((0, i._)`${F}.props`, Y), L instanceof i.Name && R.assign((0, i._)`${F}.items`, L);
    }
    function X(R, F, Y, L) {
      const { gen: q, schema: J, data: le, allErrors: ge, opts: xe, self: se } = R, { RULES: he } = se;
      if (J.$ref && (xe.ignoreKeywordsWithRef || !(0, u.schemaHasRulesButRef)(J, he))) {
        q.block(() => ne(R, "$ref", he.all.$ref.definition));
        return;
      }
      xe.jtd || oe(R, F), q.block(() => {
        for (const pe of he.rules) Pe(pe);
        Pe(he.post);
      });
      function Pe(pe) {
        (0, n.shouldUseGroup)(J, pe) && (pe.type ? (q.if((0, r.checkDataType)(pe.type, le, xe.strictNumbers)), ce(R, pe), F.length === 1 && F[0] === pe.type && Y && (q.else(), (0, r.reportTypeError)(R)), q.endIf()) : ce(R, pe), ge || q.if((0, i._)`${c.default.errors} === ${L || 0}`));
      }
    }
    function ce(R, F) {
      const { gen: Y, schema: L, opts: { useDefaults: q } } = R;
      q && (0, a.assignDefaults)(R, F.type), Y.block(() => {
        for (const J of F.rules) (0, n.shouldUseRule)(L, J) && ne(R, J.keyword, J.definition, F.type);
      });
    }
    function oe(R, F) {
      R.schemaEnv.meta || !R.opts.strictTypes || (Q(R, F), R.opts.allowUnionTypes || G(R, F), T(R, R.dataTypes));
    }
    function Q(R, F) {
      if (F.length) {
        if (!R.dataTypes.length) {
          R.dataTypes = F;
          return;
        }
        F.forEach((Y) => {
          M(R.dataTypes, Y) || I(R, `type "${Y}" not allowed by context "${R.dataTypes.join(",")}"`);
        }), E(R, F);
      }
    }
    function G(R, F) {
      F.length > 1 && !(F.length === 2 && F.includes("null")) && I(R, "use allowUnionTypes to allow union type keyword");
    }
    function T(R, F) {
      const Y = R.self.RULES.all;
      for (const L in Y) {
        const q = Y[L];
        if (typeof q == "object" && (0, n.shouldUseRule)(R.schema, q)) {
          const { type: J } = q.definition;
          J.length && !J.some((le) => z(F, le)) && I(R, `missing type "${J.join(",")}" for keyword "${L}"`);
        }
      }
    }
    function z(R, F) {
      return R.includes(F) || F === "number" && R.includes("integer");
    }
    function M(R, F) {
      return R.includes(F) || F === "integer" && R.includes("number");
    }
    function E(R, F) {
      const Y = [];
      for (const L of R.dataTypes) M(F, L) ? Y.push(L) : F.includes("integer") && L === "number" && Y.push("integer");
      R.dataTypes = Y;
    }
    function I(R, F) {
      const Y = R.schemaEnv.baseId + R.errSchemaPath;
      F += ` at "${Y}" (strictTypes)`, (0, u.checkStrictMode)(R, F, R.opts.strictTypes);
    }
    class V {
      constructor(F, Y, L) {
        if ((0, o.validateKeywordUsage)(F, Y, L), this.gen = F.gen, this.allErrors = F.allErrors, this.keyword = L, this.data = F.data, this.schema = F.schema[L], this.$data = Y.$data && F.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, u.schemaRefOrVal)(F, this.schema, L, this.$data), this.schemaType = Y.schemaType, this.parentSchema = F.schema, this.params = {}, this.it = F, this.def = Y, this.$data) this.schemaCode = F.gen.const("vSchema", ae(this.$data, F));
        else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, Y.schemaType, Y.allowUndefined)) throw new Error(`${L} value must be ${JSON.stringify(Y.schemaType)}`);
        ("code" in Y ? Y.trackErrors : Y.errors !== false) && (this.errsCount = F.gen.const("_errs", c.default.errors));
      }
      result(F, Y, L) {
        this.failResult((0, i.not)(F), Y, L);
      }
      failResult(F, Y, L) {
        this.gen.if(F), L ? L() : this.error(), Y ? (this.gen.else(), Y(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
      }
      pass(F, Y) {
        this.failResult((0, i.not)(F), void 0, Y);
      }
      fail(F) {
        if (F === void 0) {
          this.error(), this.allErrors || this.gen.if(false);
          return;
        }
        this.gen.if(F), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
      }
      fail$data(F) {
        if (!this.$data) return this.fail(F);
        const { schemaCode: Y } = this;
        this.fail((0, i._)`${Y} !== undefined && (${(0, i.or)(this.invalid$data(), F)})`);
      }
      error(F, Y, L) {
        if (Y) {
          this.setParams(Y), this._error(F, L), this.setParams({});
          return;
        }
        this._error(F, L);
      }
      _error(F, Y) {
        (F ? v.reportExtraError : v.reportError)(this, this.def.error, Y);
      }
      $dataError() {
        (0, v.reportError)(this, this.def.$dataError || v.keyword$DataError);
      }
      reset() {
        if (this.errsCount === void 0) throw new Error('add "trackErrors" to keyword definition');
        (0, v.resetErrorsCount)(this.gen, this.errsCount);
      }
      ok(F) {
        this.allErrors || this.gen.if(F);
      }
      setParams(F, Y) {
        Y ? Object.assign(this.params, F) : this.params = F;
      }
      block$data(F, Y, L = i.nil) {
        this.gen.block(() => {
          this.check$data(F, L), Y();
        });
      }
      check$data(F = i.nil, Y = i.nil) {
        if (!this.$data) return;
        const { gen: L, schemaCode: q, schemaType: J, def: le } = this;
        L.if((0, i.or)((0, i._)`${q} === undefined`, Y)), F !== i.nil && L.assign(F, true), (J.length || le.validateSchema) && (L.elseIf(this.invalid$data()), this.$dataError(), F !== i.nil && L.assign(F, false)), L.else();
      }
      invalid$data() {
        const { gen: F, schemaCode: Y, schemaType: L, def: q, it: J } = this;
        return (0, i.or)(le(), ge());
        function le() {
          if (L.length) {
            if (!(Y instanceof i.Name)) throw new Error("ajv implementation error");
            const xe = Array.isArray(L) ? L : [
              L
            ];
            return (0, i._)`${(0, r.checkDataTypes)(xe, Y, J.opts.strictNumbers, r.DataType.Wrong)}`;
          }
          return i.nil;
        }
        function ge() {
          if (q.validateSchema) {
            const xe = F.scopeValue("validate$data", {
              ref: q.validateSchema
            });
            return (0, i._)`!${xe}(${Y})`;
          }
          return i.nil;
        }
      }
      subschema(F, Y) {
        const L = (0, s.getSubschema)(this.it, F);
        (0, s.extendSubschemaData)(L, this.it, F), (0, s.extendSubschemaMode)(L, F);
        const q = {
          ...this.it,
          ...L,
          items: void 0,
          props: void 0
        };
        return b(q, Y), q;
      }
      mergeEvaluated(F, Y) {
        const { it: L, gen: q } = this;
        L.opts.unevaluated && (L.props !== true && F.props !== void 0 && (L.props = u.mergeEvaluated.props(q, F.props, L.props, Y)), L.items !== true && F.items !== void 0 && (L.items = u.mergeEvaluated.items(q, F.items, L.items, Y)));
      }
      mergeValidEvaluated(F, Y) {
        const { it: L, gen: q } = this;
        if (L.opts.unevaluated && (L.props !== true || L.items !== true)) return q.if(Y, () => this.mergeEvaluated(F, i.Name)), true;
      }
    }
    it.KeywordCxt = V;
    function ne(R, F, Y, L) {
      const q = new V(R, Y, F);
      "code" in Y ? Y.code(q, L) : q.$data && Y.validate ? (0, o.funcKeywordCode)(q, Y) : "macro" in Y ? (0, o.macroKeywordCode)(q, Y) : (Y.compile || Y.validate) && (0, o.funcKeywordCode)(q, Y);
    }
    const ee = /^\/(?:[^~]|~0|~1)*$/, fe = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function ae(R, { dataLevel: F, dataNames: Y, dataPathArr: L }) {
      let q, J;
      if (R === "") return c.default.rootData;
      if (R[0] === "/") {
        if (!ee.test(R)) throw new Error(`Invalid JSON-pointer: ${R}`);
        q = R, J = c.default.rootData;
      } else {
        const se = fe.exec(R);
        if (!se) throw new Error(`Invalid JSON-pointer: ${R}`);
        const he = +se[1];
        if (q = se[2], q === "#") {
          if (he >= F) throw new Error(xe("property/index", he));
          return L[F - he];
        }
        if (he > F) throw new Error(xe("data", he));
        if (J = Y[F - he], !q) return J;
      }
      let le = J;
      const ge = q.split("/");
      for (const se of ge) se && (J = (0, i._)`${J}${(0, i.getProperty)((0, u.unescapeJsonPointer)(se))}`, le = (0, i._)`${le} && ${J}`);
      return le;
      function xe(se, he) {
        return `Cannot access ${se} ${he} levels up, current level is ${F}`;
      }
    }
    return it.getData = ae, it;
  }
  var Dn = {}, _s;
  function Ga() {
    if (_s) return Dn;
    _s = 1, Object.defineProperty(Dn, "__esModule", {
      value: true
    });
    class e extends Error {
      constructor(n) {
        super("validation failed"), this.errors = n, this.ajv = this.validation = true;
      }
    }
    return Dn.default = e, Dn;
  }
  var Tn = {}, vs;
  function Mr() {
    if (vs) return Tn;
    vs = 1, Object.defineProperty(Tn, "__esModule", {
      value: true
    });
    const e = jr();
    class t extends Error {
      constructor(r, a, o, s) {
        super(s || `can't resolve reference ${o} from id ${a}`), this.missingRef = (0, e.resolveUrl)(r, a, o), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
      }
    }
    return Tn.default = t, Tn;
  }
  var Ae = {}, bs;
  function Ka() {
    if (bs) return Ae;
    bs = 1, Object.defineProperty(Ae, "__esModule", {
      value: true
    }), Ae.resolveSchema = Ae.getCompilingSchema = Ae.resolveRef = Ae.compileSchema = Ae.SchemaEnv = void 0;
    const e = me(), t = Ga(), n = xt(), r = jr(), a = ye(), o = Or();
    class s {
      constructor(f) {
        var p;
        this.refs = {}, this.dynamicAnchors = {};
        let b;
        typeof f.schema == "object" && (b = f.schema), this.schema = f.schema, this.schemaId = f.schemaId, this.root = f.root || this, this.baseId = (p = f.baseId) !== null && p !== void 0 ? p : (0, r.normalizeId)(b == null ? void 0 : b[f.schemaId || "$id"]), this.schemaPath = f.schemaPath, this.localRefs = f.localRefs, this.meta = f.meta, this.$async = b == null ? void 0 : b.$async, this.refs = {};
      }
    }
    Ae.SchemaEnv = s;
    function i(d) {
      const f = u.call(this, d);
      if (f) return f;
      const p = (0, r.getFullPath)(this.opts.uriResolver, d.root.baseId), { es5: b, lines: w } = this.opts.code, { ownProperties: _ } = this.opts, g = new e.CodeGen(this.scope, {
        es5: b,
        lines: w,
        ownProperties: _
      });
      let m;
      d.$async && (m = g.scopeValue("Error", {
        ref: t.default,
        code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
      }));
      const P = g.scopeName("validate");
      d.validateName = P;
      const $ = {
        gen: g,
        allErrors: this.opts.allErrors,
        data: n.default.data,
        parentData: n.default.parentData,
        parentDataProperty: n.default.parentDataProperty,
        dataNames: [
          n.default.data
        ],
        dataPathArr: [
          e.nil
        ],
        dataLevel: 0,
        dataTypes: [],
        definedProperties: /* @__PURE__ */ new Set(),
        topSchemaRef: g.scopeValue("schema", this.opts.code.source === true ? {
          ref: d.schema,
          code: (0, e.stringify)(d.schema)
        } : {
          ref: d.schema
        }),
        validateName: P,
        ValidationError: m,
        schema: d.schema,
        schemaEnv: d,
        rootId: p,
        baseId: d.baseId || p,
        schemaPath: e.nil,
        errSchemaPath: d.schemaPath || (this.opts.jtd ? "" : "#"),
        errorPath: (0, e._)`""`,
        opts: this.opts,
        self: this
      };
      let C;
      try {
        this._compilations.add(d), (0, o.validateFunctionCode)($), g.optimize(this.opts.code.optimize);
        const D = g.toString();
        C = `${g.scopeRefs(n.default.scope)}return ${D}`, this.opts.code.process && (C = this.opts.code.process(C, d));
        const B = new Function(`${n.default.self}`, `${n.default.scope}`, C)(this, this.scope.get());
        if (this.scope.value(P, {
          ref: B
        }), B.errors = null, B.schema = d.schema, B.schemaEnv = d, d.$async && (B.$async = true), this.opts.code.source === true && (B.source = {
          validateName: P,
          validateCode: D,
          scopeValues: g._values
        }), this.opts.unevaluated) {
          const { props: W, items: H } = $;
          B.evaluated = {
            props: W instanceof e.Name ? void 0 : W,
            items: H instanceof e.Name ? void 0 : H,
            dynamicProps: W instanceof e.Name,
            dynamicItems: H instanceof e.Name
          }, B.source && (B.source.evaluated = (0, e.stringify)(B.evaluated));
        }
        return d.validate = B, d;
      } catch (D) {
        throw delete d.validate, delete d.validateName, C && this.logger.error("Error compiling schema, function code:", C), D;
      } finally {
        this._compilations.delete(d);
      }
    }
    Ae.compileSchema = i;
    function c(d, f, p) {
      var b;
      p = (0, r.resolveUrl)(this.opts.uriResolver, f, p);
      const w = d.refs[p];
      if (w) return w;
      let _ = h.call(this, d, p);
      if (_ === void 0) {
        const g = (b = d.localRefs) === null || b === void 0 ? void 0 : b[p], { schemaId: m } = this.opts;
        g && (_ = new s({
          schema: g,
          schemaId: m,
          root: d,
          baseId: f
        }));
      }
      if (_ !== void 0) return d.refs[p] = l.call(this, _);
    }
    Ae.resolveRef = c;
    function l(d) {
      return (0, r.inlineRef)(d.schema, this.opts.inlineRefs) ? d.schema : d.validate ? d : i.call(this, d);
    }
    function u(d) {
      for (const f of this._compilations) if (v(f, d)) return f;
    }
    Ae.getCompilingSchema = u;
    function v(d, f) {
      return d.schema === f.schema && d.root === f.root && d.baseId === f.baseId;
    }
    function h(d, f) {
      let p;
      for (; typeof (p = this.refs[f]) == "string"; ) f = p;
      return p || this.schemas[f] || y.call(this, d, f);
    }
    function y(d, f) {
      const p = this.opts.uriResolver.parse(f), b = (0, r._getFullPath)(this.opts.uriResolver, p);
      let w = (0, r.getFullPath)(this.opts.uriResolver, d.baseId, void 0);
      if (Object.keys(d.schema).length > 0 && b === w) return k.call(this, p, d);
      const _ = (0, r.normalizeId)(b), g = this.refs[_] || this.schemas[_];
      if (typeof g == "string") {
        const m = y.call(this, d, g);
        return typeof (m == null ? void 0 : m.schema) != "object" ? void 0 : k.call(this, p, m);
      }
      if (typeof (g == null ? void 0 : g.schema) == "object") {
        if (g.validate || i.call(this, g), _ === (0, r.normalizeId)(f)) {
          const { schema: m } = g, { schemaId: P } = this.opts, $ = m[P];
          return $ && (w = (0, r.resolveUrl)(this.opts.uriResolver, w, $)), new s({
            schema: m,
            schemaId: P,
            root: d,
            baseId: w
          });
        }
        return k.call(this, p, g);
      }
    }
    Ae.resolveSchema = y;
    const S = /* @__PURE__ */ new Set([
      "properties",
      "patternProperties",
      "enum",
      "dependencies",
      "definitions"
    ]);
    function k(d, { baseId: f, schema: p, root: b }) {
      var w;
      if (((w = d.fragment) === null || w === void 0 ? void 0 : w[0]) !== "/") return;
      for (const m of d.fragment.slice(1).split("/")) {
        if (typeof p == "boolean") return;
        const P = p[(0, a.unescapeFragment)(m)];
        if (P === void 0) return;
        p = P;
        const $ = typeof p == "object" && p[this.opts.schemaId];
        !S.has(m) && $ && (f = (0, r.resolveUrl)(this.opts.uriResolver, f, $));
      }
      let _;
      if (typeof p != "boolean" && p.$ref && !(0, a.schemaHasRulesButRef)(p, this.RULES)) {
        const m = (0, r.resolveUrl)(this.opts.uriResolver, f, p.$ref);
        _ = y.call(this, b, m);
      }
      const { schemaId: g } = this.opts;
      if (_ = _ || new s({
        schema: p,
        schemaId: g,
        root: b,
        baseId: f
      }), _.schema !== _.root.schema) return _;
    }
    return Ae;
  }
  const ep = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", tp = "Meta-schema for $data reference (JSON AnySchema extension proposal)", np = "object", rp = [
    "$data"
  ], ap = {
    $data: {
      type: "string",
      anyOf: [
        {
          format: "relative-json-pointer"
        },
        {
          format: "json-pointer"
        }
      ]
    }
  }, op = false, sp = {
    $id: ep,
    description: tp,
    type: np,
    required: rp,
    properties: ap,
    additionalProperties: op
  };
  var Rn = {}, on = {
    exports: {}
  }, _a, xs;
  function ac() {
    if (xs) return _a;
    xs = 1;
    const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
    function n(h) {
      let y = "", S = 0, k = 0;
      for (k = 0; k < h.length; k++) if (S = h[k].charCodeAt(0), S !== 48) {
        if (!(S >= 48 && S <= 57 || S >= 65 && S <= 70 || S >= 97 && S <= 102)) return "";
        y += h[k];
        break;
      }
      for (k += 1; k < h.length; k++) {
        if (S = h[k].charCodeAt(0), !(S >= 48 && S <= 57 || S >= 65 && S <= 70 || S >= 97 && S <= 102)) return "";
        y += h[k];
      }
      return y;
    }
    const r = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
    function a(h) {
      return h.length = 0, true;
    }
    function o(h, y, S) {
      if (h.length) {
        const k = n(h);
        if (k !== "") y.push(k);
        else return S.error = true, false;
        h.length = 0;
      }
      return true;
    }
    function s(h) {
      let y = 0;
      const S = {
        error: false,
        address: "",
        zone: ""
      }, k = [], d = [];
      let f = false, p = false, b = o;
      for (let w = 0; w < h.length; w++) {
        const _ = h[w];
        if (!(_ === "[" || _ === "]")) if (_ === ":") {
          if (f === true && (p = true), !b(d, k, S)) break;
          if (++y > 7) {
            S.error = true;
            break;
          }
          w > 0 && h[w - 1] === ":" && (f = true), k.push(":");
          continue;
        } else if (_ === "%") {
          if (!b(d, k, S)) break;
          b = a;
        } else {
          d.push(_);
          continue;
        }
      }
      return d.length && (b === a ? S.zone = d.join("") : p ? k.push(d.join("")) : k.push(n(d))), S.address = k.join(""), S;
    }
    function i(h) {
      if (c(h, ":") < 2) return {
        host: h,
        isIPV6: false
      };
      const y = s(h);
      if (y.error) return {
        host: h,
        isIPV6: false
      };
      {
        let S = y.address, k = y.address;
        return y.zone && (S += "%" + y.zone, k += "%25" + y.zone), {
          host: S,
          isIPV6: true,
          escapedHost: k
        };
      }
    }
    function c(h, y) {
      let S = 0;
      for (let k = 0; k < h.length; k++) h[k] === y && S++;
      return S;
    }
    function l(h) {
      let y = h;
      const S = [];
      let k = -1, d = 0;
      for (; d = y.length; ) {
        if (d === 1) {
          if (y === ".") break;
          if (y === "/") {
            S.push("/");
            break;
          } else {
            S.push(y);
            break;
          }
        } else if (d === 2) {
          if (y[0] === ".") {
            if (y[1] === ".") break;
            if (y[1] === "/") {
              y = y.slice(2);
              continue;
            }
          } else if (y[0] === "/" && (y[1] === "." || y[1] === "/")) {
            S.push("/");
            break;
          }
        } else if (d === 3 && y === "/..") {
          S.length !== 0 && S.pop(), S.push("/");
          break;
        }
        if (y[0] === ".") {
          if (y[1] === ".") {
            if (y[2] === "/") {
              y = y.slice(3);
              continue;
            }
          } else if (y[1] === "/") {
            y = y.slice(2);
            continue;
          }
        } else if (y[0] === "/" && y[1] === ".") {
          if (y[2] === "/") {
            y = y.slice(2);
            continue;
          } else if (y[2] === "." && y[3] === "/") {
            y = y.slice(3), S.length !== 0 && S.pop();
            continue;
          }
        }
        if ((k = y.indexOf("/", 1)) === -1) {
          S.push(y);
          break;
        } else S.push(y.slice(0, k)), y = y.slice(k);
      }
      return S.join("");
    }
    function u(h, y) {
      const S = y !== true ? escape : unescape;
      return h.scheme !== void 0 && (h.scheme = S(h.scheme)), h.userinfo !== void 0 && (h.userinfo = S(h.userinfo)), h.host !== void 0 && (h.host = S(h.host)), h.path !== void 0 && (h.path = S(h.path)), h.query !== void 0 && (h.query = S(h.query)), h.fragment !== void 0 && (h.fragment = S(h.fragment)), h;
    }
    function v(h) {
      const y = [];
      if (h.userinfo !== void 0 && (y.push(h.userinfo), y.push("@")), h.host !== void 0) {
        let S = unescape(h.host);
        if (!t(S)) {
          const k = i(S);
          k.isIPV6 === true ? S = `[${k.escapedHost}]` : S = h.host;
        }
        y.push(S);
      }
      return (typeof h.port == "number" || typeof h.port == "string") && (y.push(":"), y.push(String(h.port))), y.length ? y.join("") : void 0;
    }
    return _a = {
      nonSimpleDomain: r,
      recomposeAuthority: v,
      normalizeComponentEncoding: u,
      removeDotSegments: l,
      isIPv4: t,
      isUUID: e,
      normalizeIPv6: i,
      stringArrayToHexStripped: n
    }, _a;
  }
  var va, Ss;
  function ip() {
    if (Ss) return va;
    Ss = 1;
    const { isUUID: e } = ac(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = [
      "http",
      "https",
      "ws",
      "wss",
      "urn",
      "urn:uuid"
    ];
    function r(_) {
      return n.indexOf(_) !== -1;
    }
    function a(_) {
      return _.secure === true ? true : _.secure === false ? false : _.scheme ? _.scheme.length === 3 && (_.scheme[0] === "w" || _.scheme[0] === "W") && (_.scheme[1] === "s" || _.scheme[1] === "S") && (_.scheme[2] === "s" || _.scheme[2] === "S") : false;
    }
    function o(_) {
      return _.host || (_.error = _.error || "HTTP URIs must have a host."), _;
    }
    function s(_) {
      const g = String(_.scheme).toLowerCase() === "https";
      return (_.port === (g ? 443 : 80) || _.port === "") && (_.port = void 0), _.path || (_.path = "/"), _;
    }
    function i(_) {
      return _.secure = a(_), _.resourceName = (_.path || "/") + (_.query ? "?" + _.query : ""), _.path = void 0, _.query = void 0, _;
    }
    function c(_) {
      if ((_.port === (a(_) ? 443 : 80) || _.port === "") && (_.port = void 0), typeof _.secure == "boolean" && (_.scheme = _.secure ? "wss" : "ws", _.secure = void 0), _.resourceName) {
        const [g, m] = _.resourceName.split("?");
        _.path = g && g !== "/" ? g : void 0, _.query = m, _.resourceName = void 0;
      }
      return _.fragment = void 0, _;
    }
    function l(_, g) {
      if (!_.path) return _.error = "URN can not be parsed", _;
      const m = _.path.match(t);
      if (m) {
        const P = g.scheme || _.scheme || "urn";
        _.nid = m[1].toLowerCase(), _.nss = m[2];
        const $ = `${P}:${g.nid || _.nid}`, C = w($);
        _.path = void 0, C && (_ = C.parse(_, g));
      } else _.error = _.error || "URN can not be parsed.";
      return _;
    }
    function u(_, g) {
      if (_.nid === void 0) throw new Error("URN without nid cannot be serialized");
      const m = g.scheme || _.scheme || "urn", P = _.nid.toLowerCase(), $ = `${m}:${g.nid || P}`, C = w($);
      C && (_ = C.serialize(_, g));
      const D = _, j = _.nss;
      return D.path = `${P || g.nid}:${j}`, g.skipEscape = true, D;
    }
    function v(_, g) {
      const m = _;
      return m.uuid = m.nss, m.nss = void 0, !g.tolerant && (!m.uuid || !e(m.uuid)) && (m.error = m.error || "UUID is not valid."), m;
    }
    function h(_) {
      const g = _;
      return g.nss = (_.uuid || "").toLowerCase(), g;
    }
    const y = {
      scheme: "http",
      domainHost: true,
      parse: o,
      serialize: s
    }, S = {
      scheme: "https",
      domainHost: y.domainHost,
      parse: o,
      serialize: s
    }, k = {
      scheme: "ws",
      domainHost: true,
      parse: i,
      serialize: c
    }, d = {
      scheme: "wss",
      domainHost: k.domainHost,
      parse: k.parse,
      serialize: k.serialize
    }, b = {
      http: y,
      https: S,
      ws: k,
      wss: d,
      urn: {
        scheme: "urn",
        parse: l,
        serialize: u,
        skipNormalize: true
      },
      "urn:uuid": {
        scheme: "urn:uuid",
        parse: v,
        serialize: h,
        skipNormalize: true
      }
    };
    Object.setPrototypeOf(b, null);
    function w(_) {
      return _ && (b[_] || b[_.toLowerCase()]) || void 0;
    }
    return va = {
      wsIsSecure: a,
      SCHEMES: b,
      isValidSchemeName: r,
      getSchemeHandler: w
    }, va;
  }
  var ws;
  function cp() {
    if (ws) return on.exports;
    ws = 1;
    const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizeComponentEncoding: r, isIPv4: a, nonSimpleDomain: o } = ac(), { SCHEMES: s, getSchemeHandler: i } = ip();
    function c(d, f) {
      return typeof d == "string" ? d = h(S(d, f), f) : typeof d == "object" && (d = S(h(d, f), f)), d;
    }
    function l(d, f, p) {
      const b = p ? Object.assign({
        scheme: "null"
      }, p) : {
        scheme: "null"
      }, w = u(S(d, b), S(f, b), b, true);
      return b.skipEscape = true, h(w, b);
    }
    function u(d, f, p, b) {
      const w = {};
      return b || (d = S(h(d, p), p), f = S(h(f, p), p)), p = p || {}, !p.tolerant && f.scheme ? (w.scheme = f.scheme, w.userinfo = f.userinfo, w.host = f.host, w.port = f.port, w.path = t(f.path || ""), w.query = f.query) : (f.userinfo !== void 0 || f.host !== void 0 || f.port !== void 0 ? (w.userinfo = f.userinfo, w.host = f.host, w.port = f.port, w.path = t(f.path || ""), w.query = f.query) : (f.path ? (f.path[0] === "/" ? w.path = t(f.path) : ((d.userinfo !== void 0 || d.host !== void 0 || d.port !== void 0) && !d.path ? w.path = "/" + f.path : d.path ? w.path = d.path.slice(0, d.path.lastIndexOf("/") + 1) + f.path : w.path = f.path, w.path = t(w.path)), w.query = f.query) : (w.path = d.path, f.query !== void 0 ? w.query = f.query : w.query = d.query), w.userinfo = d.userinfo, w.host = d.host, w.port = d.port), w.scheme = d.scheme), w.fragment = f.fragment, w;
    }
    function v(d, f, p) {
      return typeof d == "string" ? (d = unescape(d), d = h(r(S(d, p), true), {
        ...p,
        skipEscape: true
      })) : typeof d == "object" && (d = h(r(d, true), {
        ...p,
        skipEscape: true
      })), typeof f == "string" ? (f = unescape(f), f = h(r(S(f, p), true), {
        ...p,
        skipEscape: true
      })) : typeof f == "object" && (f = h(r(f, true), {
        ...p,
        skipEscape: true
      })), d.toLowerCase() === f.toLowerCase();
    }
    function h(d, f) {
      const p = {
        host: d.host,
        scheme: d.scheme,
        userinfo: d.userinfo,
        port: d.port,
        path: d.path,
        query: d.query,
        nid: d.nid,
        nss: d.nss,
        uuid: d.uuid,
        fragment: d.fragment,
        reference: d.reference,
        resourceName: d.resourceName,
        secure: d.secure,
        error: ""
      }, b = Object.assign({}, f), w = [], _ = i(b.scheme || p.scheme);
      _ && _.serialize && _.serialize(p, b), p.path !== void 0 && (b.skipEscape ? p.path = unescape(p.path) : (p.path = escape(p.path), p.scheme !== void 0 && (p.path = p.path.split("%3A").join(":")))), b.reference !== "suffix" && p.scheme && w.push(p.scheme, ":");
      const g = n(p);
      if (g !== void 0 && (b.reference !== "suffix" && w.push("//"), w.push(g), p.path && p.path[0] !== "/" && w.push("/")), p.path !== void 0) {
        let m = p.path;
        !b.absolutePath && (!_ || !_.absolutePath) && (m = t(m)), g === void 0 && m[0] === "/" && m[1] === "/" && (m = "/%2F" + m.slice(2)), w.push(m);
      }
      return p.query !== void 0 && w.push("?", p.query), p.fragment !== void 0 && w.push("#", p.fragment), w.join("");
    }
    const y = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
    function S(d, f) {
      const p = Object.assign({}, f), b = {
        scheme: void 0,
        userinfo: void 0,
        host: "",
        port: void 0,
        path: "",
        query: void 0,
        fragment: void 0
      };
      let w = false;
      p.reference === "suffix" && (p.scheme ? d = p.scheme + ":" + d : d = "//" + d);
      const _ = d.match(y);
      if (_) {
        if (b.scheme = _[1], b.userinfo = _[3], b.host = _[4], b.port = parseInt(_[5], 10), b.path = _[6] || "", b.query = _[7], b.fragment = _[8], isNaN(b.port) && (b.port = _[5]), b.host) if (a(b.host) === false) {
          const P = e(b.host);
          b.host = P.host.toLowerCase(), w = P.isIPV6;
        } else w = true;
        b.scheme === void 0 && b.userinfo === void 0 && b.host === void 0 && b.port === void 0 && b.query === void 0 && !b.path ? b.reference = "same-document" : b.scheme === void 0 ? b.reference = "relative" : b.fragment === void 0 ? b.reference = "absolute" : b.reference = "uri", p.reference && p.reference !== "suffix" && p.reference !== b.reference && (b.error = b.error || "URI is not a " + p.reference + " reference.");
        const g = i(p.scheme || b.scheme);
        if (!p.unicodeSupport && (!g || !g.unicodeSupport) && b.host && (p.domainHost || g && g.domainHost) && w === false && o(b.host)) try {
          b.host = URL.domainToASCII(b.host.toLowerCase());
        } catch (m) {
          b.error = b.error || "Host's domain name can not be converted to ASCII: " + m;
        }
        (!g || g && !g.skipNormalize) && (d.indexOf("%") !== -1 && (b.scheme !== void 0 && (b.scheme = unescape(b.scheme)), b.host !== void 0 && (b.host = unescape(b.host))), b.path && (b.path = escape(unescape(b.path))), b.fragment && (b.fragment = encodeURI(decodeURIComponent(b.fragment)))), g && g.parse && g.parse(b, p);
      } else b.error = b.error || "URI can not be parsed.";
      return b;
    }
    const k = {
      SCHEMES: s,
      normalize: c,
      resolve: l,
      resolveComponent: u,
      equal: v,
      serialize: h,
      parse: S
    };
    return on.exports = k, on.exports.default = k, on.exports.fastUri = k, on.exports;
  }
  var ks;
  function lp() {
    if (ks) return Rn;
    ks = 1, Object.defineProperty(Rn, "__esModule", {
      value: true
    });
    const e = cp();
    return e.code = 'require("ajv/dist/runtime/uri").default', Rn.default = e, Rn;
  }
  var Ps;
  function dp() {
    return Ps || (Ps = 1, (function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
      var t = Or();
      Object.defineProperty(e, "KeywordCxt", {
        enumerable: true,
        get: function() {
          return t.KeywordCxt;
        }
      });
      var n = me();
      Object.defineProperty(e, "_", {
        enumerable: true,
        get: function() {
          return n._;
        }
      }), Object.defineProperty(e, "str", {
        enumerable: true,
        get: function() {
          return n.str;
        }
      }), Object.defineProperty(e, "stringify", {
        enumerable: true,
        get: function() {
          return n.stringify;
        }
      }), Object.defineProperty(e, "nil", {
        enumerable: true,
        get: function() {
          return n.nil;
        }
      }), Object.defineProperty(e, "Name", {
        enumerable: true,
        get: function() {
          return n.Name;
        }
      }), Object.defineProperty(e, "CodeGen", {
        enumerable: true,
        get: function() {
          return n.CodeGen;
        }
      });
      const r = Ga(), a = Mr(), o = tc(), s = Ka(), i = me(), c = jr(), l = br(), u = ye(), v = sp, h = lp(), y = (G, T) => new RegExp(G, T);
      y.code = "new RegExp";
      const S = [
        "removeAdditional",
        "useDefaults",
        "coerceTypes"
      ], k = /* @__PURE__ */ new Set([
        "validate",
        "serialize",
        "parse",
        "wrapper",
        "root",
        "schema",
        "keyword",
        "pattern",
        "formats",
        "validate$data",
        "func",
        "obj",
        "Error"
      ]), d = {
        errorDataPath: "",
        format: "`validateFormats: false` can be used instead.",
        nullable: '"nullable" keyword is supported by default.',
        jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
        extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
        missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
        processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
        sourceCode: "Use option `code: {source: true}`",
        strictDefaults: "It is default now, see option `strict`.",
        strictKeywords: "It is default now, see option `strict`.",
        uniqueItems: '"uniqueItems" keyword is always validated.',
        unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
        cache: "Map is used as cache, schema object as key.",
        serialize: "Map is used as cache, schema object as key.",
        ajvErrors: "It is default now."
      }, f = {
        ignoreKeywordsWithRef: "",
        jsPropertySyntax: "",
        unicode: '"minLength"/"maxLength" account for unicode characters by default.'
      }, p = 200;
      function b(G) {
        var T, z, M, E, I, V, ne, ee, fe, ae, R, F, Y, L, q, J, le, ge, xe, se, he, Pe, pe, Te, Jt;
        const at = G.strict, Lt = (T = G.code) === null || T === void 0 ? void 0 : T.optimize, Ft = Lt === true || Lt === void 0 ? 1 : Lt || 0, ot = (M = (z = G.code) === null || z === void 0 ? void 0 : z.regExp) !== null && M !== void 0 ? M : y, wt = (E = G.uriResolver) !== null && E !== void 0 ? E : h.default;
        return {
          strictSchema: (V = (I = G.strictSchema) !== null && I !== void 0 ? I : at) !== null && V !== void 0 ? V : true,
          strictNumbers: (ee = (ne = G.strictNumbers) !== null && ne !== void 0 ? ne : at) !== null && ee !== void 0 ? ee : true,
          strictTypes: (ae = (fe = G.strictTypes) !== null && fe !== void 0 ? fe : at) !== null && ae !== void 0 ? ae : "log",
          strictTuples: (F = (R = G.strictTuples) !== null && R !== void 0 ? R : at) !== null && F !== void 0 ? F : "log",
          strictRequired: (L = (Y = G.strictRequired) !== null && Y !== void 0 ? Y : at) !== null && L !== void 0 ? L : false,
          code: G.code ? {
            ...G.code,
            optimize: Ft,
            regExp: ot
          } : {
            optimize: Ft,
            regExp: ot
          },
          loopRequired: (q = G.loopRequired) !== null && q !== void 0 ? q : p,
          loopEnum: (J = G.loopEnum) !== null && J !== void 0 ? J : p,
          meta: (le = G.meta) !== null && le !== void 0 ? le : true,
          messages: (ge = G.messages) !== null && ge !== void 0 ? ge : true,
          inlineRefs: (xe = G.inlineRefs) !== null && xe !== void 0 ? xe : true,
          schemaId: (se = G.schemaId) !== null && se !== void 0 ? se : "$id",
          addUsedSchema: (he = G.addUsedSchema) !== null && he !== void 0 ? he : true,
          validateSchema: (Pe = G.validateSchema) !== null && Pe !== void 0 ? Pe : true,
          validateFormats: (pe = G.validateFormats) !== null && pe !== void 0 ? pe : true,
          unicodeRegExp: (Te = G.unicodeRegExp) !== null && Te !== void 0 ? Te : true,
          int32range: (Jt = G.int32range) !== null && Jt !== void 0 ? Jt : true,
          uriResolver: wt
        };
      }
      class w {
        constructor(T = {}) {
          this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), T = this.opts = {
            ...T,
            ...b(T)
          };
          const { es5: z, lines: M } = this.opts.code;
          this.scope = new i.ValueScope({
            scope: {},
            prefixes: k,
            es5: z,
            lines: M
          }), this.logger = j(T.logger);
          const E = T.validateFormats;
          T.validateFormats = false, this.RULES = (0, o.getRules)(), _.call(this, d, T, "NOT SUPPORTED"), _.call(this, f, T, "DEPRECATED", "warn"), this._metaOpts = C.call(this), T.formats && P.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), T.keywords && $.call(this, T.keywords), typeof T.meta == "object" && this.addMetaSchema(T.meta), m.call(this), T.validateFormats = E;
        }
        _addVocabularies() {
          this.addKeyword("$async");
        }
        _addDefaultMetaSchema() {
          const { $data: T, meta: z, schemaId: M } = this.opts;
          let E = v;
          M === "id" && (E = {
            ...v
          }, E.id = E.$id, delete E.$id), z && T && this.addMetaSchema(E, E[M], false);
        }
        defaultMeta() {
          const { meta: T, schemaId: z } = this.opts;
          return this.opts.defaultMeta = typeof T == "object" ? T[z] || T : void 0;
        }
        validate(T, z) {
          let M;
          if (typeof T == "string") {
            if (M = this.getSchema(T), !M) throw new Error(`no schema with key or ref "${T}"`);
          } else M = this.compile(T);
          const E = M(z);
          return "$async" in M || (this.errors = M.errors), E;
        }
        compile(T, z) {
          const M = this._addSchema(T, z);
          return M.validate || this._compileSchemaEnv(M);
        }
        compileAsync(T, z) {
          if (typeof this.opts.loadSchema != "function") throw new Error("options.loadSchema should be a function");
          const { loadSchema: M } = this.opts;
          return E.call(this, T, z);
          async function E(ae, R) {
            await I.call(this, ae.$schema);
            const F = this._addSchema(ae, R);
            return F.validate || V.call(this, F);
          }
          async function I(ae) {
            ae && !this.getSchema(ae) && await E.call(this, {
              $ref: ae
            }, true);
          }
          async function V(ae) {
            try {
              return this._compileSchemaEnv(ae);
            } catch (R) {
              if (!(R instanceof a.default)) throw R;
              return ne.call(this, R), await ee.call(this, R.missingSchema), V.call(this, ae);
            }
          }
          function ne({ missingSchema: ae, missingRef: R }) {
            if (this.refs[ae]) throw new Error(`AnySchema ${ae} is loaded but ${R} cannot be resolved`);
          }
          async function ee(ae) {
            const R = await fe.call(this, ae);
            this.refs[ae] || await I.call(this, R.$schema), this.refs[ae] || this.addSchema(R, ae, z);
          }
          async function fe(ae) {
            const R = this._loading[ae];
            if (R) return R;
            try {
              return await (this._loading[ae] = M(ae));
            } finally {
              delete this._loading[ae];
            }
          }
        }
        addSchema(T, z, M, E = this.opts.validateSchema) {
          if (Array.isArray(T)) {
            for (const V of T) this.addSchema(V, void 0, M, E);
            return this;
          }
          let I;
          if (typeof T == "object") {
            const { schemaId: V } = this.opts;
            if (I = T[V], I !== void 0 && typeof I != "string") throw new Error(`schema ${V} must be string`);
          }
          return z = (0, c.normalizeId)(z || I), this._checkUnique(z), this.schemas[z] = this._addSchema(T, M, z, E, true), this;
        }
        addMetaSchema(T, z, M = this.opts.validateSchema) {
          return this.addSchema(T, z, true, M), this;
        }
        validateSchema(T, z) {
          if (typeof T == "boolean") return true;
          let M;
          if (M = T.$schema, M !== void 0 && typeof M != "string") throw new Error("$schema must be a string");
          if (M = M || this.opts.defaultMeta || this.defaultMeta(), !M) return this.logger.warn("meta-schema not available"), this.errors = null, true;
          const E = this.validate(M, T);
          if (!E && z) {
            const I = "schema is invalid: " + this.errorsText();
            if (this.opts.validateSchema === "log") this.logger.error(I);
            else throw new Error(I);
          }
          return E;
        }
        getSchema(T) {
          let z;
          for (; typeof (z = g.call(this, T)) == "string"; ) T = z;
          if (z === void 0) {
            const { schemaId: M } = this.opts, E = new s.SchemaEnv({
              schema: {},
              schemaId: M
            });
            if (z = s.resolveSchema.call(this, E, T), !z) return;
            this.refs[T] = z;
          }
          return z.validate || this._compileSchemaEnv(z);
        }
        removeSchema(T) {
          if (T instanceof RegExp) return this._removeAllSchemas(this.schemas, T), this._removeAllSchemas(this.refs, T), this;
          switch (typeof T) {
            case "undefined":
              return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
            case "string": {
              const z = g.call(this, T);
              return typeof z == "object" && this._cache.delete(z.schema), delete this.schemas[T], delete this.refs[T], this;
            }
            case "object": {
              const z = T;
              this._cache.delete(z);
              let M = T[this.opts.schemaId];
              return M && (M = (0, c.normalizeId)(M), delete this.schemas[M], delete this.refs[M]), this;
            }
            default:
              throw new Error("ajv.removeSchema: invalid parameter");
          }
        }
        addVocabulary(T) {
          for (const z of T) this.addKeyword(z);
          return this;
        }
        addKeyword(T, z) {
          let M;
          if (typeof T == "string") M = T, typeof z == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), z.keyword = M);
          else if (typeof T == "object" && z === void 0) {
            if (z = T, M = z.keyword, Array.isArray(M) && !M.length) throw new Error("addKeywords: keyword must be string or non-empty array");
          } else throw new Error("invalid addKeywords parameters");
          if (W.call(this, M, z), !z) return (0, u.eachItem)(M, (I) => H.call(this, I)), this;
          ce.call(this, z);
          const E = {
            ...z,
            type: (0, l.getJSONTypes)(z.type),
            schemaType: (0, l.getJSONTypes)(z.schemaType)
          };
          return (0, u.eachItem)(M, E.type.length === 0 ? (I) => H.call(this, I, E) : (I) => E.type.forEach((V) => H.call(this, I, E, V))), this;
        }
        getKeyword(T) {
          const z = this.RULES.all[T];
          return typeof z == "object" ? z.definition : !!z;
        }
        removeKeyword(T) {
          const { RULES: z } = this;
          delete z.keywords[T], delete z.all[T];
          for (const M of z.rules) {
            const E = M.rules.findIndex((I) => I.keyword === T);
            E >= 0 && M.rules.splice(E, 1);
          }
          return this;
        }
        addFormat(T, z) {
          return typeof z == "string" && (z = new RegExp(z)), this.formats[T] = z, this;
        }
        errorsText(T = this.errors, { separator: z = ", ", dataVar: M = "data" } = {}) {
          return !T || T.length === 0 ? "No errors" : T.map((E) => `${M}${E.instancePath} ${E.message}`).reduce((E, I) => E + z + I);
        }
        $dataMetaSchema(T, z) {
          const M = this.RULES.all;
          T = JSON.parse(JSON.stringify(T));
          for (const E of z) {
            const I = E.split("/").slice(1);
            let V = T;
            for (const ne of I) V = V[ne];
            for (const ne in M) {
              const ee = M[ne];
              if (typeof ee != "object") continue;
              const { $data: fe } = ee.definition, ae = V[ne];
              fe && ae && (V[ne] = Q(ae));
            }
          }
          return T;
        }
        _removeAllSchemas(T, z) {
          for (const M in T) {
            const E = T[M];
            (!z || z.test(M)) && (typeof E == "string" ? delete T[M] : E && !E.meta && (this._cache.delete(E.schema), delete T[M]));
          }
        }
        _addSchema(T, z, M, E = this.opts.validateSchema, I = this.opts.addUsedSchema) {
          let V;
          const { schemaId: ne } = this.opts;
          if (typeof T == "object") V = T[ne];
          else {
            if (this.opts.jtd) throw new Error("schema must be object");
            if (typeof T != "boolean") throw new Error("schema must be object or boolean");
          }
          let ee = this._cache.get(T);
          if (ee !== void 0) return ee;
          M = (0, c.normalizeId)(V || M);
          const fe = c.getSchemaRefs.call(this, T, M);
          return ee = new s.SchemaEnv({
            schema: T,
            schemaId: ne,
            meta: z,
            baseId: M,
            localRefs: fe
          }), this._cache.set(ee.schema, ee), I && !M.startsWith("#") && (M && this._checkUnique(M), this.refs[M] = ee), E && this.validateSchema(T, true), ee;
        }
        _checkUnique(T) {
          if (this.schemas[T] || this.refs[T]) throw new Error(`schema with key or id "${T}" already exists`);
        }
        _compileSchemaEnv(T) {
          if (T.meta ? this._compileMetaSchema(T) : s.compileSchema.call(this, T), !T.validate) throw new Error("ajv implementation error");
          return T.validate;
        }
        _compileMetaSchema(T) {
          const z = this.opts;
          this.opts = this._metaOpts;
          try {
            s.compileSchema.call(this, T);
          } finally {
            this.opts = z;
          }
        }
      }
      w.ValidationError = r.default, w.MissingRefError = a.default, e.default = w;
      function _(G, T, z, M = "error") {
        for (const E in G) {
          const I = E;
          I in T && this.logger[M](`${z}: option ${E}. ${G[I]}`);
        }
      }
      function g(G) {
        return G = (0, c.normalizeId)(G), this.schemas[G] || this.refs[G];
      }
      function m() {
        const G = this.opts.schemas;
        if (G) if (Array.isArray(G)) this.addSchema(G);
        else for (const T in G) this.addSchema(G[T], T);
      }
      function P() {
        for (const G in this.opts.formats) {
          const T = this.opts.formats[G];
          T && this.addFormat(G, T);
        }
      }
      function $(G) {
        if (Array.isArray(G)) {
          this.addVocabulary(G);
          return;
        }
        this.logger.warn("keywords option as map is deprecated, pass array");
        for (const T in G) {
          const z = G[T];
          z.keyword || (z.keyword = T), this.addKeyword(z);
        }
      }
      function C() {
        const G = {
          ...this.opts
        };
        for (const T of S) delete G[T];
        return G;
      }
      const D = {
        log() {
        },
        warn() {
        },
        error() {
        }
      };
      function j(G) {
        if (G === false) return D;
        if (G === void 0) return console;
        if (G.log && G.warn && G.error) return G;
        throw new Error("logger must implement log, warn and error methods");
      }
      const B = /^[a-z_$][a-z0-9_$:-]*$/i;
      function W(G, T) {
        const { RULES: z } = this;
        if ((0, u.eachItem)(G, (M) => {
          if (z.keywords[M]) throw new Error(`Keyword ${M} is already defined`);
          if (!B.test(M)) throw new Error(`Keyword ${M} has invalid name`);
        }), !!T && T.$data && !("code" in T || "validate" in T)) throw new Error('$data keyword must have "code" or "validate" function');
      }
      function H(G, T, z) {
        var M;
        const E = T == null ? void 0 : T.post;
        if (z && E) throw new Error('keyword with "post" flag cannot have "type"');
        const { RULES: I } = this;
        let V = E ? I.post : I.rules.find(({ type: ee }) => ee === z);
        if (V || (V = {
          type: z,
          rules: []
        }, I.rules.push(V)), I.keywords[G] = true, !T) return;
        const ne = {
          keyword: G,
          definition: {
            ...T,
            type: (0, l.getJSONTypes)(T.type),
            schemaType: (0, l.getJSONTypes)(T.schemaType)
          }
        };
        T.before ? X.call(this, V, ne, T.before) : V.rules.push(ne), I.all[G] = ne, (M = T.implements) === null || M === void 0 || M.forEach((ee) => this.addKeyword(ee));
      }
      function X(G, T, z) {
        const M = G.rules.findIndex((E) => E.keyword === z);
        M >= 0 ? G.rules.splice(M, 0, T) : (G.rules.push(T), this.logger.warn(`rule ${z} is not defined`));
      }
      function ce(G) {
        let { metaSchema: T } = G;
        T !== void 0 && (G.$data && this.opts.$data && (T = Q(T)), G.validateSchema = this.compile(T, true));
      }
      const oe = {
        $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
      };
      function Q(G) {
        return {
          anyOf: [
            G,
            oe
          ]
        };
      }
    })(ua)), ua;
  }
  var jn = {}, On = {}, Mn = {}, Es;
  function up() {
    if (Es) return Mn;
    Es = 1, Object.defineProperty(Mn, "__esModule", {
      value: true
    });
    const e = {
      keyword: "id",
      code() {
        throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
      }
    };
    return Mn.default = e, Mn;
  }
  var gt = {}, Cs;
  function pp() {
    if (Cs) return gt;
    Cs = 1, Object.defineProperty(gt, "__esModule", {
      value: true
    }), gt.callRef = gt.getValidate = void 0;
    const e = Mr(), t = Je(), n = me(), r = xt(), a = Ka(), o = ye(), s = {
      keyword: "$ref",
      schemaType: "string",
      code(l) {
        const { gen: u, schema: v, it: h } = l, { baseId: y, schemaEnv: S, validateName: k, opts: d, self: f } = h, { root: p } = S;
        if ((v === "#" || v === "#/") && y === p.baseId) return w();
        const b = a.resolveRef.call(f, p, y, v);
        if (b === void 0) throw new e.default(h.opts.uriResolver, y, v);
        if (b instanceof a.SchemaEnv) return _(b);
        return g(b);
        function w() {
          if (S === p) return c(l, k, S, S.$async);
          const m = u.scopeValue("root", {
            ref: p
          });
          return c(l, (0, n._)`${m}.validate`, p, p.$async);
        }
        function _(m) {
          const P = i(l, m);
          c(l, P, m, m.$async);
        }
        function g(m) {
          const P = u.scopeValue("schema", d.code.source === true ? {
            ref: m,
            code: (0, n.stringify)(m)
          } : {
            ref: m
          }), $ = u.name("valid"), C = l.subschema({
            schema: m,
            dataTypes: [],
            schemaPath: n.nil,
            topSchemaRef: P,
            errSchemaPath: v
          }, $);
          l.mergeEvaluated(C), l.ok($);
        }
      }
    };
    function i(l, u) {
      const { gen: v } = l;
      return u.validate ? v.scopeValue("validate", {
        ref: u.validate
      }) : (0, n._)`${v.scopeValue("wrapper", {
        ref: u
      })}.validate`;
    }
    gt.getValidate = i;
    function c(l, u, v, h) {
      const { gen: y, it: S } = l, { allErrors: k, schemaEnv: d, opts: f } = S, p = f.passContext ? r.default.this : n.nil;
      h ? b() : w();
      function b() {
        if (!d.$async) throw new Error("async schema referenced by sync schema");
        const m = y.let("valid");
        y.try(() => {
          y.code((0, n._)`await ${(0, t.callValidateCode)(l, u, p)}`), g(u), k || y.assign(m, true);
        }, (P) => {
          y.if((0, n._)`!(${P} instanceof ${S.ValidationError})`, () => y.throw(P)), _(P), k || y.assign(m, false);
        }), l.ok(m);
      }
      function w() {
        l.result((0, t.callValidateCode)(l, u, p), () => g(u), () => _(u));
      }
      function _(m) {
        const P = (0, n._)`${m}.errors`;
        y.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${P} : ${r.default.vErrors}.concat(${P})`), y.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
      }
      function g(m) {
        var P;
        if (!S.opts.unevaluated) return;
        const $ = (P = v == null ? void 0 : v.validate) === null || P === void 0 ? void 0 : P.evaluated;
        if (S.props !== true) if ($ && !$.dynamicProps) $.props !== void 0 && (S.props = o.mergeEvaluated.props(y, $.props, S.props));
        else {
          const C = y.var("props", (0, n._)`${m}.evaluated.props`);
          S.props = o.mergeEvaluated.props(y, C, S.props, n.Name);
        }
        if (S.items !== true) if ($ && !$.dynamicItems) $.items !== void 0 && (S.items = o.mergeEvaluated.items(y, $.items, S.items));
        else {
          const C = y.var("items", (0, n._)`${m}.evaluated.items`);
          S.items = o.mergeEvaluated.items(y, C, S.items, n.Name);
        }
      }
    }
    return gt.callRef = c, gt.default = s, gt;
  }
  var Ns;
  function mp() {
    if (Ns) return On;
    Ns = 1, Object.defineProperty(On, "__esModule", {
      value: true
    });
    const e = up(), t = pp(), n = [
      "$schema",
      "$id",
      "$defs",
      "$vocabulary",
      {
        keyword: "$comment"
      },
      "definitions",
      e.default,
      t.default
    ];
    return On.default = n, On;
  }
  var Ln = {}, Fn = {}, $s;
  function fp() {
    if ($s) return Fn;
    $s = 1, Object.defineProperty(Fn, "__esModule", {
      value: true
    });
    const e = me(), t = e.operators, n = {
      maximum: {
        okStr: "<=",
        ok: t.LTE,
        fail: t.GT
      },
      minimum: {
        okStr: ">=",
        ok: t.GTE,
        fail: t.LT
      },
      exclusiveMaximum: {
        okStr: "<",
        ok: t.LT,
        fail: t.GTE
      },
      exclusiveMinimum: {
        okStr: ">",
        ok: t.GT,
        fail: t.LTE
      }
    }, r = {
      message: ({ keyword: o, schemaCode: s }) => (0, e.str)`must be ${n[o].okStr} ${s}`,
      params: ({ keyword: o, schemaCode: s }) => (0, e._)`{comparison: ${n[o].okStr}, limit: ${s}}`
    }, a = {
      keyword: Object.keys(n),
      type: "number",
      schemaType: "number",
      $data: true,
      error: r,
      code(o) {
        const { keyword: s, data: i, schemaCode: c } = o;
        o.fail$data((0, e._)`${i} ${n[s].fail} ${c} || isNaN(${i})`);
      }
    };
    return Fn.default = a, Fn;
  }
  var An = {}, Is;
  function hp() {
    if (Is) return An;
    Is = 1, Object.defineProperty(An, "__esModule", {
      value: true
    });
    const e = me(), n = {
      keyword: "multipleOf",
      type: "number",
      schemaType: "number",
      $data: true,
      error: {
        message: ({ schemaCode: r }) => (0, e.str)`must be multiple of ${r}`,
        params: ({ schemaCode: r }) => (0, e._)`{multipleOf: ${r}}`
      },
      code(r) {
        const { gen: a, data: o, schemaCode: s, it: i } = r, c = i.opts.multipleOfPrecision, l = a.let("res"), u = c ? (0, e._)`Math.abs(Math.round(${l}) - ${l}) > 1e-${c}` : (0, e._)`${l} !== parseInt(${l})`;
        r.fail$data((0, e._)`(${s} === 0 || (${l} = ${o}/${s}, ${u}))`);
      }
    };
    return An.default = n, An;
  }
  var qn = {}, Bn = {}, Ds;
  function yp() {
    if (Ds) return Bn;
    Ds = 1, Object.defineProperty(Bn, "__esModule", {
      value: true
    });
    function e(t) {
      const n = t.length;
      let r = 0, a = 0, o;
      for (; a < n; ) r++, o = t.charCodeAt(a++), o >= 55296 && o <= 56319 && a < n && (o = t.charCodeAt(a), (o & 64512) === 56320 && a++);
      return r;
    }
    return Bn.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Bn;
  }
  var Ts;
  function gp() {
    if (Ts) return qn;
    Ts = 1, Object.defineProperty(qn, "__esModule", {
      value: true
    });
    const e = me(), t = ye(), n = yp(), a = {
      keyword: [
        "maxLength",
        "minLength"
      ],
      type: "string",
      schemaType: "number",
      $data: true,
      error: {
        message({ keyword: o, schemaCode: s }) {
          const i = o === "maxLength" ? "more" : "fewer";
          return (0, e.str)`must NOT have ${i} than ${s} characters`;
        },
        params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
      },
      code(o) {
        const { keyword: s, data: i, schemaCode: c, it: l } = o, u = s === "maxLength" ? e.operators.GT : e.operators.LT, v = l.opts.unicode === false ? (0, e._)`${i}.length` : (0, e._)`${(0, t.useFunc)(o.gen, n.default)}(${i})`;
        o.fail$data((0, e._)`${v} ${u} ${c}`);
      }
    };
    return qn.default = a, qn;
  }
  var zn = {}, Rs;
  function _p() {
    if (Rs) return zn;
    Rs = 1, Object.defineProperty(zn, "__esModule", {
      value: true
    });
    const e = Je(), t = me(), r = {
      keyword: "pattern",
      type: "string",
      schemaType: "string",
      $data: true,
      error: {
        message: ({ schemaCode: a }) => (0, t.str)`must match pattern "${a}"`,
        params: ({ schemaCode: a }) => (0, t._)`{pattern: ${a}}`
      },
      code(a) {
        const { data: o, $data: s, schema: i, schemaCode: c, it: l } = a, u = l.opts.unicodeRegExp ? "u" : "", v = s ? (0, t._)`(new RegExp(${c}, ${u}))` : (0, e.usePattern)(a, i);
        a.fail$data((0, t._)`!${v}.test(${o})`);
      }
    };
    return zn.default = r, zn;
  }
  var Vn = {}, js;
  function vp() {
    if (js) return Vn;
    js = 1, Object.defineProperty(Vn, "__esModule", {
      value: true
    });
    const e = me(), n = {
      keyword: [
        "maxProperties",
        "minProperties"
      ],
      type: "object",
      schemaType: "number",
      $data: true,
      error: {
        message({ keyword: r, schemaCode: a }) {
          const o = r === "maxProperties" ? "more" : "fewer";
          return (0, e.str)`must NOT have ${o} than ${a} properties`;
        },
        params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
      },
      code(r) {
        const { keyword: a, data: o, schemaCode: s } = r, i = a === "maxProperties" ? e.operators.GT : e.operators.LT;
        r.fail$data((0, e._)`Object.keys(${o}).length ${i} ${s}`);
      }
    };
    return Vn.default = n, Vn;
  }
  var Wn = {}, Os;
  function bp() {
    if (Os) return Wn;
    Os = 1, Object.defineProperty(Wn, "__esModule", {
      value: true
    });
    const e = Je(), t = me(), n = ye(), a = {
      keyword: "required",
      type: "object",
      schemaType: "array",
      $data: true,
      error: {
        message: ({ params: { missingProperty: o } }) => (0, t.str)`must have required property '${o}'`,
        params: ({ params: { missingProperty: o } }) => (0, t._)`{missingProperty: ${o}}`
      },
      code(o) {
        const { gen: s, schema: i, schemaCode: c, data: l, $data: u, it: v } = o, { opts: h } = v;
        if (!u && i.length === 0) return;
        const y = i.length >= h.loopRequired;
        if (v.allErrors ? S() : k(), h.strictRequired) {
          const p = o.parentSchema.properties, { definedProperties: b } = o.it;
          for (const w of i) if ((p == null ? void 0 : p[w]) === void 0 && !b.has(w)) {
            const _ = v.schemaEnv.baseId + v.errSchemaPath, g = `required property "${w}" is not defined at "${_}" (strictRequired)`;
            (0, n.checkStrictMode)(v, g, v.opts.strictRequired);
          }
        }
        function S() {
          if (y || u) o.block$data(t.nil, d);
          else for (const p of i) (0, e.checkReportMissingProp)(o, p);
        }
        function k() {
          const p = s.let("missing");
          if (y || u) {
            const b = s.let("valid", true);
            o.block$data(b, () => f(p, b)), o.ok(b);
          } else s.if((0, e.checkMissingProp)(o, i, p)), (0, e.reportMissingProp)(o, p), s.else();
        }
        function d() {
          s.forOf("prop", c, (p) => {
            o.setParams({
              missingProperty: p
            }), s.if((0, e.noPropertyInData)(s, l, p, h.ownProperties), () => o.error());
          });
        }
        function f(p, b) {
          o.setParams({
            missingProperty: p
          }), s.forOf(p, c, () => {
            s.assign(b, (0, e.propertyInData)(s, l, p, h.ownProperties)), s.if((0, t.not)(b), () => {
              o.error(), s.break();
            });
          }, t.nil);
        }
      }
    };
    return Wn.default = a, Wn;
  }
  var Un = {}, Ms;
  function xp() {
    if (Ms) return Un;
    Ms = 1, Object.defineProperty(Un, "__esModule", {
      value: true
    });
    const e = me(), n = {
      keyword: [
        "maxItems",
        "minItems"
      ],
      type: "array",
      schemaType: "number",
      $data: true,
      error: {
        message({ keyword: r, schemaCode: a }) {
          const o = r === "maxItems" ? "more" : "fewer";
          return (0, e.str)`must NOT have ${o} than ${a} items`;
        },
        params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
      },
      code(r) {
        const { keyword: a, data: o, schemaCode: s } = r, i = a === "maxItems" ? e.operators.GT : e.operators.LT;
        r.fail$data((0, e._)`${o}.length ${i} ${s}`);
      }
    };
    return Un.default = n, Un;
  }
  var Hn = {}, Gn = {}, Ls;
  function Ya() {
    if (Ls) return Gn;
    Ls = 1, Object.defineProperty(Gn, "__esModule", {
      value: true
    });
    const e = rc();
    return e.code = 'require("ajv/dist/runtime/equal").default', Gn.default = e, Gn;
  }
  var Fs;
  function Sp() {
    if (Fs) return Hn;
    Fs = 1, Object.defineProperty(Hn, "__esModule", {
      value: true
    });
    const e = br(), t = me(), n = ye(), r = Ya(), o = {
      keyword: "uniqueItems",
      type: "array",
      schemaType: "boolean",
      $data: true,
      error: {
        message: ({ params: { i: s, j: i } }) => (0, t.str)`must NOT have duplicate items (items ## ${i} and ${s} are identical)`,
        params: ({ params: { i: s, j: i } }) => (0, t._)`{i: ${s}, j: ${i}}`
      },
      code(s) {
        const { gen: i, data: c, $data: l, schema: u, parentSchema: v, schemaCode: h, it: y } = s;
        if (!l && !u) return;
        const S = i.let("valid"), k = v.items ? (0, e.getSchemaTypes)(v.items) : [];
        s.block$data(S, d, (0, t._)`${h} === false`), s.ok(S);
        function d() {
          const w = i.let("i", (0, t._)`${c}.length`), _ = i.let("j");
          s.setParams({
            i: w,
            j: _
          }), i.assign(S, true), i.if((0, t._)`${w} > 1`, () => (f() ? p : b)(w, _));
        }
        function f() {
          return k.length > 0 && !k.some((w) => w === "object" || w === "array");
        }
        function p(w, _) {
          const g = i.name("item"), m = (0, e.checkDataTypes)(k, g, y.opts.strictNumbers, e.DataType.Wrong), P = i.const("indices", (0, t._)`{}`);
          i.for((0, t._)`;${w}--;`, () => {
            i.let(g, (0, t._)`${c}[${w}]`), i.if(m, (0, t._)`continue`), k.length > 1 && i.if((0, t._)`typeof ${g} == "string"`, (0, t._)`${g} += "_"`), i.if((0, t._)`typeof ${P}[${g}] == "number"`, () => {
              i.assign(_, (0, t._)`${P}[${g}]`), s.error(), i.assign(S, false).break();
            }).code((0, t._)`${P}[${g}] = ${w}`);
          });
        }
        function b(w, _) {
          const g = (0, n.useFunc)(i, r.default), m = i.name("outer");
          i.label(m).for((0, t._)`;${w}--;`, () => i.for((0, t._)`${_} = ${w}; ${_}--;`, () => i.if((0, t._)`${g}(${c}[${w}], ${c}[${_}])`, () => {
            s.error(), i.assign(S, false).break(m);
          })));
        }
      }
    };
    return Hn.default = o, Hn;
  }
  var Kn = {}, As;
  function wp() {
    if (As) return Kn;
    As = 1, Object.defineProperty(Kn, "__esModule", {
      value: true
    });
    const e = me(), t = ye(), n = Ya(), a = {
      keyword: "const",
      $data: true,
      error: {
        message: "must be equal to constant",
        params: ({ schemaCode: o }) => (0, e._)`{allowedValue: ${o}}`
      },
      code(o) {
        const { gen: s, data: i, $data: c, schemaCode: l, schema: u } = o;
        c || u && typeof u == "object" ? o.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${i}, ${l})`) : o.fail((0, e._)`${u} !== ${i}`);
      }
    };
    return Kn.default = a, Kn;
  }
  var Yn = {}, qs;
  function kp() {
    if (qs) return Yn;
    qs = 1, Object.defineProperty(Yn, "__esModule", {
      value: true
    });
    const e = me(), t = ye(), n = Ya(), a = {
      keyword: "enum",
      schemaType: "array",
      $data: true,
      error: {
        message: "must be equal to one of the allowed values",
        params: ({ schemaCode: o }) => (0, e._)`{allowedValues: ${o}}`
      },
      code(o) {
        const { gen: s, data: i, $data: c, schema: l, schemaCode: u, it: v } = o;
        if (!c && l.length === 0) throw new Error("enum must have non-empty array");
        const h = l.length >= v.opts.loopEnum;
        let y;
        const S = () => y ?? (y = (0, t.useFunc)(s, n.default));
        let k;
        if (h || c) k = s.let("valid"), o.block$data(k, d);
        else {
          if (!Array.isArray(l)) throw new Error("ajv implementation error");
          const p = s.const("vSchema", u);
          k = (0, e.or)(...l.map((b, w) => f(p, w)));
        }
        o.pass(k);
        function d() {
          s.assign(k, false), s.forOf("v", u, (p) => s.if((0, e._)`${S()}(${i}, ${p})`, () => s.assign(k, true).break()));
        }
        function f(p, b) {
          const w = l[b];
          return typeof w == "object" && w !== null ? (0, e._)`${S()}(${i}, ${p}[${b}])` : (0, e._)`${i} === ${w}`;
        }
      }
    };
    return Yn.default = a, Yn;
  }
  var Bs;
  function Pp() {
    if (Bs) return Ln;
    Bs = 1, Object.defineProperty(Ln, "__esModule", {
      value: true
    });
    const e = fp(), t = hp(), n = gp(), r = _p(), a = vp(), o = bp(), s = xp(), i = Sp(), c = wp(), l = kp(), u = [
      e.default,
      t.default,
      n.default,
      r.default,
      a.default,
      o.default,
      s.default,
      i.default,
      {
        keyword: "type",
        schemaType: [
          "string",
          "array"
        ]
      },
      {
        keyword: "nullable",
        schemaType: "boolean"
      },
      c.default,
      l.default
    ];
    return Ln.default = u, Ln;
  }
  var Jn = {}, Wt = {}, zs;
  function oc() {
    if (zs) return Wt;
    zs = 1, Object.defineProperty(Wt, "__esModule", {
      value: true
    }), Wt.validateAdditionalItems = void 0;
    const e = me(), t = ye(), r = {
      keyword: "additionalItems",
      type: "array",
      schemaType: [
        "boolean",
        "object"
      ],
      before: "uniqueItems",
      error: {
        message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
        params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
      },
      code(o) {
        const { parentSchema: s, it: i } = o, { items: c } = s;
        if (!Array.isArray(c)) {
          (0, t.checkStrictMode)(i, '"additionalItems" is ignored when "items" is not an array of schemas');
          return;
        }
        a(o, c);
      }
    };
    function a(o, s) {
      const { gen: i, schema: c, data: l, keyword: u, it: v } = o;
      v.items = true;
      const h = i.const("len", (0, e._)`${l}.length`);
      if (c === false) o.setParams({
        len: s.length
      }), o.pass((0, e._)`${h} <= ${s.length}`);
      else if (typeof c == "object" && !(0, t.alwaysValidSchema)(v, c)) {
        const S = i.var("valid", (0, e._)`${h} <= ${s.length}`);
        i.if((0, e.not)(S), () => y(S)), o.ok(S);
      }
      function y(S) {
        i.forRange("i", s.length, h, (k) => {
          o.subschema({
            keyword: u,
            dataProp: k,
            dataPropType: t.Type.Num
          }, S), v.allErrors || i.if((0, e.not)(S), () => i.break());
        });
      }
    }
    return Wt.validateAdditionalItems = a, Wt.default = r, Wt;
  }
  var Xn = {}, Ut = {}, Vs;
  function sc() {
    if (Vs) return Ut;
    Vs = 1, Object.defineProperty(Ut, "__esModule", {
      value: true
    }), Ut.validateTuple = void 0;
    const e = me(), t = ye(), n = Je(), r = {
      keyword: "items",
      type: "array",
      schemaType: [
        "object",
        "array",
        "boolean"
      ],
      before: "uniqueItems",
      code(o) {
        const { schema: s, it: i } = o;
        if (Array.isArray(s)) return a(o, "additionalItems", s);
        i.items = true, !(0, t.alwaysValidSchema)(i, s) && o.ok((0, n.validateArray)(o));
      }
    };
    function a(o, s, i = o.schema) {
      const { gen: c, parentSchema: l, data: u, keyword: v, it: h } = o;
      k(l), h.opts.unevaluated && i.length && h.items !== true && (h.items = t.mergeEvaluated.items(c, i.length, h.items));
      const y = c.name("valid"), S = c.const("len", (0, e._)`${u}.length`);
      i.forEach((d, f) => {
        (0, t.alwaysValidSchema)(h, d) || (c.if((0, e._)`${S} > ${f}`, () => o.subschema({
          keyword: v,
          schemaProp: f,
          dataProp: f
        }, y)), o.ok(y));
      });
      function k(d) {
        const { opts: f, errSchemaPath: p } = h, b = i.length, w = b === d.minItems && (b === d.maxItems || d[s] === false);
        if (f.strictTuples && !w) {
          const _ = `"${v}" is ${b}-tuple, but minItems or maxItems/${s} are not specified or different at path "${p}"`;
          (0, t.checkStrictMode)(h, _, f.strictTuples);
        }
      }
    }
    return Ut.validateTuple = a, Ut.default = r, Ut;
  }
  var Ws;
  function Ep() {
    if (Ws) return Xn;
    Ws = 1, Object.defineProperty(Xn, "__esModule", {
      value: true
    });
    const e = sc(), t = {
      keyword: "prefixItems",
      type: "array",
      schemaType: [
        "array"
      ],
      before: "uniqueItems",
      code: (n) => (0, e.validateTuple)(n, "items")
    };
    return Xn.default = t, Xn;
  }
  var Zn = {}, Us;
  function Cp() {
    if (Us) return Zn;
    Us = 1, Object.defineProperty(Zn, "__esModule", {
      value: true
    });
    const e = me(), t = ye(), n = Je(), r = oc(), o = {
      keyword: "items",
      type: "array",
      schemaType: [
        "object",
        "boolean"
      ],
      before: "uniqueItems",
      error: {
        message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
        params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
      },
      code(s) {
        const { schema: i, parentSchema: c, it: l } = s, { prefixItems: u } = c;
        l.items = true, !(0, t.alwaysValidSchema)(l, i) && (u ? (0, r.validateAdditionalItems)(s, u) : s.ok((0, n.validateArray)(s)));
      }
    };
    return Zn.default = o, Zn;
  }
  var Qn = {}, Hs;
  function Np() {
    if (Hs) return Qn;
    Hs = 1, Object.defineProperty(Qn, "__esModule", {
      value: true
    });
    const e = me(), t = ye(), r = {
      keyword: "contains",
      type: "array",
      schemaType: [
        "object",
        "boolean"
      ],
      before: "uniqueItems",
      trackErrors: true,
      error: {
        message: ({ params: { min: a, max: o } }) => o === void 0 ? (0, e.str)`must contain at least ${a} valid item(s)` : (0, e.str)`must contain at least ${a} and no more than ${o} valid item(s)`,
        params: ({ params: { min: a, max: o } }) => o === void 0 ? (0, e._)`{minContains: ${a}}` : (0, e._)`{minContains: ${a}, maxContains: ${o}}`
      },
      code(a) {
        const { gen: o, schema: s, parentSchema: i, data: c, it: l } = a;
        let u, v;
        const { minContains: h, maxContains: y } = i;
        l.opts.next ? (u = h === void 0 ? 1 : h, v = y) : u = 1;
        const S = o.const("len", (0, e._)`${c}.length`);
        if (a.setParams({
          min: u,
          max: v
        }), v === void 0 && u === 0) {
          (0, t.checkStrictMode)(l, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
          return;
        }
        if (v !== void 0 && u > v) {
          (0, t.checkStrictMode)(l, '"minContains" > "maxContains" is always invalid'), a.fail();
          return;
        }
        if ((0, t.alwaysValidSchema)(l, s)) {
          let b = (0, e._)`${S} >= ${u}`;
          v !== void 0 && (b = (0, e._)`${b} && ${S} <= ${v}`), a.pass(b);
          return;
        }
        l.items = true;
        const k = o.name("valid");
        v === void 0 && u === 1 ? f(k, () => o.if(k, () => o.break())) : u === 0 ? (o.let(k, true), v !== void 0 && o.if((0, e._)`${c}.length > 0`, d)) : (o.let(k, false), d()), a.result(k, () => a.reset());
        function d() {
          const b = o.name("_valid"), w = o.let("count", 0);
          f(b, () => o.if(b, () => p(w)));
        }
        function f(b, w) {
          o.forRange("i", 0, S, (_) => {
            a.subschema({
              keyword: "contains",
              dataProp: _,
              dataPropType: t.Type.Num,
              compositeRule: true
            }, b), w();
          });
        }
        function p(b) {
          o.code((0, e._)`${b}++`), v === void 0 ? o.if((0, e._)`${b} >= ${u}`, () => o.assign(k, true).break()) : (o.if((0, e._)`${b} > ${v}`, () => o.assign(k, false).break()), u === 1 ? o.assign(k, true) : o.if((0, e._)`${b} >= ${u}`, () => o.assign(k, true)));
        }
      }
    };
    return Qn.default = r, Qn;
  }
  var ba = {}, Gs;
  function $p() {
    return Gs || (Gs = 1, (function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
      const t = me(), n = ye(), r = Je();
      e.error = {
        message: ({ params: { property: c, depsCount: l, deps: u } }) => {
          const v = l === 1 ? "property" : "properties";
          return (0, t.str)`must have ${v} ${u} when property ${c} is present`;
        },
        params: ({ params: { property: c, depsCount: l, deps: u, missingProperty: v } }) => (0, t._)`{property: ${c},
    missingProperty: ${v},
    depsCount: ${l},
    deps: ${u}}`
      };
      const a = {
        keyword: "dependencies",
        type: "object",
        schemaType: "object",
        error: e.error,
        code(c) {
          const [l, u] = o(c);
          s(c, l), i(c, u);
        }
      };
      function o({ schema: c }) {
        const l = {}, u = {};
        for (const v in c) {
          if (v === "__proto__") continue;
          const h = Array.isArray(c[v]) ? l : u;
          h[v] = c[v];
        }
        return [
          l,
          u
        ];
      }
      function s(c, l = c.schema) {
        const { gen: u, data: v, it: h } = c;
        if (Object.keys(l).length === 0) return;
        const y = u.let("missing");
        for (const S in l) {
          const k = l[S];
          if (k.length === 0) continue;
          const d = (0, r.propertyInData)(u, v, S, h.opts.ownProperties);
          c.setParams({
            property: S,
            depsCount: k.length,
            deps: k.join(", ")
          }), h.allErrors ? u.if(d, () => {
            for (const f of k) (0, r.checkReportMissingProp)(c, f);
          }) : (u.if((0, t._)`${d} && (${(0, r.checkMissingProp)(c, k, y)})`), (0, r.reportMissingProp)(c, y), u.else());
        }
      }
      e.validatePropertyDeps = s;
      function i(c, l = c.schema) {
        const { gen: u, data: v, keyword: h, it: y } = c, S = u.name("valid");
        for (const k in l) (0, n.alwaysValidSchema)(y, l[k]) || (u.if((0, r.propertyInData)(u, v, k, y.opts.ownProperties), () => {
          const d = c.subschema({
            keyword: h,
            schemaProp: k
          }, S);
          c.mergeValidEvaluated(d, S);
        }, () => u.var(S, true)), c.ok(S));
      }
      e.validateSchemaDeps = i, e.default = a;
    })(ba)), ba;
  }
  var er = {}, Ks;
  function Ip() {
    if (Ks) return er;
    Ks = 1, Object.defineProperty(er, "__esModule", {
      value: true
    });
    const e = me(), t = ye(), r = {
      keyword: "propertyNames",
      type: "object",
      schemaType: [
        "object",
        "boolean"
      ],
      error: {
        message: "property name must be valid",
        params: ({ params: a }) => (0, e._)`{propertyName: ${a.propertyName}}`
      },
      code(a) {
        const { gen: o, schema: s, data: i, it: c } = a;
        if ((0, t.alwaysValidSchema)(c, s)) return;
        const l = o.name("valid");
        o.forIn("key", i, (u) => {
          a.setParams({
            propertyName: u
          }), a.subschema({
            keyword: "propertyNames",
            data: u,
            dataTypes: [
              "string"
            ],
            propertyName: u,
            compositeRule: true
          }, l), o.if((0, e.not)(l), () => {
            a.error(true), c.allErrors || o.break();
          });
        }), a.ok(l);
      }
    };
    return er.default = r, er;
  }
  var tr = {}, Ys;
  function ic() {
    if (Ys) return tr;
    Ys = 1, Object.defineProperty(tr, "__esModule", {
      value: true
    });
    const e = Je(), t = me(), n = xt(), r = ye(), o = {
      keyword: "additionalProperties",
      type: [
        "object"
      ],
      schemaType: [
        "boolean",
        "object"
      ],
      allowUndefined: true,
      trackErrors: true,
      error: {
        message: "must NOT have additional properties",
        params: ({ params: s }) => (0, t._)`{additionalProperty: ${s.additionalProperty}}`
      },
      code(s) {
        const { gen: i, schema: c, parentSchema: l, data: u, errsCount: v, it: h } = s;
        if (!v) throw new Error("ajv implementation error");
        const { allErrors: y, opts: S } = h;
        if (h.props = true, S.removeAdditional !== "all" && (0, r.alwaysValidSchema)(h, c)) return;
        const k = (0, e.allSchemaProperties)(l.properties), d = (0, e.allSchemaProperties)(l.patternProperties);
        f(), s.ok((0, t._)`${v} === ${n.default.errors}`);
        function f() {
          i.forIn("key", u, (g) => {
            !k.length && !d.length ? w(g) : i.if(p(g), () => w(g));
          });
        }
        function p(g) {
          let m;
          if (k.length > 8) {
            const P = (0, r.schemaRefOrVal)(h, l.properties, "properties");
            m = (0, e.isOwnProperty)(i, P, g);
          } else k.length ? m = (0, t.or)(...k.map((P) => (0, t._)`${g} === ${P}`)) : m = t.nil;
          return d.length && (m = (0, t.or)(m, ...d.map((P) => (0, t._)`${(0, e.usePattern)(s, P)}.test(${g})`))), (0, t.not)(m);
        }
        function b(g) {
          i.code((0, t._)`delete ${u}[${g}]`);
        }
        function w(g) {
          if (S.removeAdditional === "all" || S.removeAdditional && c === false) {
            b(g);
            return;
          }
          if (c === false) {
            s.setParams({
              additionalProperty: g
            }), s.error(), y || i.break();
            return;
          }
          if (typeof c == "object" && !(0, r.alwaysValidSchema)(h, c)) {
            const m = i.name("valid");
            S.removeAdditional === "failing" ? (_(g, m, false), i.if((0, t.not)(m), () => {
              s.reset(), b(g);
            })) : (_(g, m), y || i.if((0, t.not)(m), () => i.break()));
          }
        }
        function _(g, m, P) {
          const $ = {
            keyword: "additionalProperties",
            dataProp: g,
            dataPropType: r.Type.Str
          };
          P === false && Object.assign($, {
            compositeRule: true,
            createErrors: false,
            allErrors: false
          }), s.subschema($, m);
        }
      }
    };
    return tr.default = o, tr;
  }
  var nr = {}, Js;
  function Dp() {
    if (Js) return nr;
    Js = 1, Object.defineProperty(nr, "__esModule", {
      value: true
    });
    const e = Or(), t = Je(), n = ye(), r = ic(), a = {
      keyword: "properties",
      type: "object",
      schemaType: "object",
      code(o) {
        const { gen: s, schema: i, parentSchema: c, data: l, it: u } = o;
        u.opts.removeAdditional === "all" && c.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(u, r.default, "additionalProperties"));
        const v = (0, t.allSchemaProperties)(i);
        for (const d of v) u.definedProperties.add(d);
        u.opts.unevaluated && v.length && u.props !== true && (u.props = n.mergeEvaluated.props(s, (0, n.toHash)(v), u.props));
        const h = v.filter((d) => !(0, n.alwaysValidSchema)(u, i[d]));
        if (h.length === 0) return;
        const y = s.name("valid");
        for (const d of h) S(d) ? k(d) : (s.if((0, t.propertyInData)(s, l, d, u.opts.ownProperties)), k(d), u.allErrors || s.else().var(y, true), s.endIf()), o.it.definedProperties.add(d), o.ok(y);
        function S(d) {
          return u.opts.useDefaults && !u.compositeRule && i[d].default !== void 0;
        }
        function k(d) {
          o.subschema({
            keyword: "properties",
            schemaProp: d,
            dataProp: d
          }, y);
        }
      }
    };
    return nr.default = a, nr;
  }
  var rr = {}, Xs;
  function Tp() {
    if (Xs) return rr;
    Xs = 1, Object.defineProperty(rr, "__esModule", {
      value: true
    });
    const e = Je(), t = me(), n = ye(), r = ye(), a = {
      keyword: "patternProperties",
      type: "object",
      schemaType: "object",
      code(o) {
        const { gen: s, schema: i, data: c, parentSchema: l, it: u } = o, { opts: v } = u, h = (0, e.allSchemaProperties)(i), y = h.filter((w) => (0, n.alwaysValidSchema)(u, i[w]));
        if (h.length === 0 || y.length === h.length && (!u.opts.unevaluated || u.props === true)) return;
        const S = v.strictSchema && !v.allowMatchingProperties && l.properties, k = s.name("valid");
        u.props !== true && !(u.props instanceof t.Name) && (u.props = (0, r.evaluatedPropsToName)(s, u.props));
        const { props: d } = u;
        f();
        function f() {
          for (const w of h) S && p(w), u.allErrors ? b(w) : (s.var(k, true), b(w), s.if(k));
        }
        function p(w) {
          for (const _ in S) new RegExp(w).test(_) && (0, n.checkStrictMode)(u, `property ${_} matches pattern ${w} (use allowMatchingProperties)`);
        }
        function b(w) {
          s.forIn("key", c, (_) => {
            s.if((0, t._)`${(0, e.usePattern)(o, w)}.test(${_})`, () => {
              const g = y.includes(w);
              g || o.subschema({
                keyword: "patternProperties",
                schemaProp: w,
                dataProp: _,
                dataPropType: r.Type.Str
              }, k), u.opts.unevaluated && d !== true ? s.assign((0, t._)`${d}[${_}]`, true) : !g && !u.allErrors && s.if((0, t.not)(k), () => s.break());
            });
          });
        }
      }
    };
    return rr.default = a, rr;
  }
  var ar = {}, Zs;
  function Rp() {
    if (Zs) return ar;
    Zs = 1, Object.defineProperty(ar, "__esModule", {
      value: true
    });
    const e = ye(), t = {
      keyword: "not",
      schemaType: [
        "object",
        "boolean"
      ],
      trackErrors: true,
      code(n) {
        const { gen: r, schema: a, it: o } = n;
        if ((0, e.alwaysValidSchema)(o, a)) {
          n.fail();
          return;
        }
        const s = r.name("valid");
        n.subschema({
          keyword: "not",
          compositeRule: true,
          createErrors: false,
          allErrors: false
        }, s), n.failResult(s, () => n.reset(), () => n.error());
      },
      error: {
        message: "must NOT be valid"
      }
    };
    return ar.default = t, ar;
  }
  var or = {}, Qs;
  function jp() {
    if (Qs) return or;
    Qs = 1, Object.defineProperty(or, "__esModule", {
      value: true
    });
    const t = {
      keyword: "anyOf",
      schemaType: "array",
      trackErrors: true,
      code: Je().validateUnion,
      error: {
        message: "must match a schema in anyOf"
      }
    };
    return or.default = t, or;
  }
  var sr = {}, ei;
  function Op() {
    if (ei) return sr;
    ei = 1, Object.defineProperty(sr, "__esModule", {
      value: true
    });
    const e = me(), t = ye(), r = {
      keyword: "oneOf",
      schemaType: "array",
      trackErrors: true,
      error: {
        message: "must match exactly one schema in oneOf",
        params: ({ params: a }) => (0, e._)`{passingSchemas: ${a.passing}}`
      },
      code(a) {
        const { gen: o, schema: s, parentSchema: i, it: c } = a;
        if (!Array.isArray(s)) throw new Error("ajv implementation error");
        if (c.opts.discriminator && i.discriminator) return;
        const l = s, u = o.let("valid", false), v = o.let("passing", null), h = o.name("_valid");
        a.setParams({
          passing: v
        }), o.block(y), a.result(u, () => a.reset(), () => a.error(true));
        function y() {
          l.forEach((S, k) => {
            let d;
            (0, t.alwaysValidSchema)(c, S) ? o.var(h, true) : d = a.subschema({
              keyword: "oneOf",
              schemaProp: k,
              compositeRule: true
            }, h), k > 0 && o.if((0, e._)`${h} && ${u}`).assign(u, false).assign(v, (0, e._)`[${v}, ${k}]`).else(), o.if(h, () => {
              o.assign(u, true), o.assign(v, k), d && a.mergeEvaluated(d, e.Name);
            });
          });
        }
      }
    };
    return sr.default = r, sr;
  }
  var ir = {}, ti;
  function Mp() {
    if (ti) return ir;
    ti = 1, Object.defineProperty(ir, "__esModule", {
      value: true
    });
    const e = ye(), t = {
      keyword: "allOf",
      schemaType: "array",
      code(n) {
        const { gen: r, schema: a, it: o } = n;
        if (!Array.isArray(a)) throw new Error("ajv implementation error");
        const s = r.name("valid");
        a.forEach((i, c) => {
          if ((0, e.alwaysValidSchema)(o, i)) return;
          const l = n.subschema({
            keyword: "allOf",
            schemaProp: c
          }, s);
          n.ok(s), n.mergeEvaluated(l);
        });
      }
    };
    return ir.default = t, ir;
  }
  var cr = {}, ni;
  function Lp() {
    if (ni) return cr;
    ni = 1, Object.defineProperty(cr, "__esModule", {
      value: true
    });
    const e = me(), t = ye(), r = {
      keyword: "if",
      schemaType: [
        "object",
        "boolean"
      ],
      trackErrors: true,
      error: {
        message: ({ params: o }) => (0, e.str)`must match "${o.ifClause}" schema`,
        params: ({ params: o }) => (0, e._)`{failingKeyword: ${o.ifClause}}`
      },
      code(o) {
        const { gen: s, parentSchema: i, it: c } = o;
        i.then === void 0 && i.else === void 0 && (0, t.checkStrictMode)(c, '"if" without "then" and "else" is ignored');
        const l = a(c, "then"), u = a(c, "else");
        if (!l && !u) return;
        const v = s.let("valid", true), h = s.name("_valid");
        if (y(), o.reset(), l && u) {
          const k = s.let("ifClause");
          o.setParams({
            ifClause: k
          }), s.if(h, S("then", k), S("else", k));
        } else l ? s.if(h, S("then")) : s.if((0, e.not)(h), S("else"));
        o.pass(v, () => o.error(true));
        function y() {
          const k = o.subschema({
            keyword: "if",
            compositeRule: true,
            createErrors: false,
            allErrors: false
          }, h);
          o.mergeEvaluated(k);
        }
        function S(k, d) {
          return () => {
            const f = o.subschema({
              keyword: k
            }, h);
            s.assign(v, h), o.mergeValidEvaluated(f, v), d ? s.assign(d, (0, e._)`${k}`) : o.setParams({
              ifClause: k
            });
          };
        }
      }
    };
    function a(o, s) {
      const i = o.schema[s];
      return i !== void 0 && !(0, t.alwaysValidSchema)(o, i);
    }
    return cr.default = r, cr;
  }
  var lr = {}, ri;
  function Fp() {
    if (ri) return lr;
    ri = 1, Object.defineProperty(lr, "__esModule", {
      value: true
    });
    const e = ye(), t = {
      keyword: [
        "then",
        "else"
      ],
      schemaType: [
        "object",
        "boolean"
      ],
      code({ keyword: n, parentSchema: r, it: a }) {
        r.if === void 0 && (0, e.checkStrictMode)(a, `"${n}" without "if" is ignored`);
      }
    };
    return lr.default = t, lr;
  }
  var ai;
  function Ap() {
    if (ai) return Jn;
    ai = 1, Object.defineProperty(Jn, "__esModule", {
      value: true
    });
    const e = oc(), t = Ep(), n = sc(), r = Cp(), a = Np(), o = $p(), s = Ip(), i = ic(), c = Dp(), l = Tp(), u = Rp(), v = jp(), h = Op(), y = Mp(), S = Lp(), k = Fp();
    function d(f = false) {
      const p = [
        u.default,
        v.default,
        h.default,
        y.default,
        S.default,
        k.default,
        s.default,
        i.default,
        o.default,
        c.default,
        l.default
      ];
      return f ? p.push(t.default, r.default) : p.push(e.default, n.default), p.push(a.default), p;
    }
    return Jn.default = d, Jn;
  }
  var dr = {}, ur = {}, oi;
  function qp() {
    if (oi) return ur;
    oi = 1, Object.defineProperty(ur, "__esModule", {
      value: true
    });
    const e = me(), n = {
      keyword: "format",
      type: [
        "number",
        "string"
      ],
      schemaType: "string",
      $data: true,
      error: {
        message: ({ schemaCode: r }) => (0, e.str)`must match format "${r}"`,
        params: ({ schemaCode: r }) => (0, e._)`{format: ${r}}`
      },
      code(r, a) {
        const { gen: o, data: s, $data: i, schema: c, schemaCode: l, it: u } = r, { opts: v, errSchemaPath: h, schemaEnv: y, self: S } = u;
        if (!v.validateFormats) return;
        i ? k() : d();
        function k() {
          const f = o.scopeValue("formats", {
            ref: S.formats,
            code: v.code.formats
          }), p = o.const("fDef", (0, e._)`${f}[${l}]`), b = o.let("fType"), w = o.let("format");
          o.if((0, e._)`typeof ${p} == "object" && !(${p} instanceof RegExp)`, () => o.assign(b, (0, e._)`${p}.type || "string"`).assign(w, (0, e._)`${p}.validate`), () => o.assign(b, (0, e._)`"string"`).assign(w, p)), r.fail$data((0, e.or)(_(), g()));
          function _() {
            return v.strictSchema === false ? e.nil : (0, e._)`${l} && !${w}`;
          }
          function g() {
            const m = y.$async ? (0, e._)`(${p}.async ? await ${w}(${s}) : ${w}(${s}))` : (0, e._)`${w}(${s})`, P = (0, e._)`(typeof ${w} == "function" ? ${m} : ${w}.test(${s}))`;
            return (0, e._)`${w} && ${w} !== true && ${b} === ${a} && !${P}`;
          }
        }
        function d() {
          const f = S.formats[c];
          if (!f) {
            _();
            return;
          }
          if (f === true) return;
          const [p, b, w] = g(f);
          p === a && r.pass(m());
          function _() {
            if (v.strictSchema === false) {
              S.logger.warn(P());
              return;
            }
            throw new Error(P());
            function P() {
              return `unknown format "${c}" ignored in schema at path "${h}"`;
            }
          }
          function g(P) {
            const $ = P instanceof RegExp ? (0, e.regexpCode)(P) : v.code.formats ? (0, e._)`${v.code.formats}${(0, e.getProperty)(c)}` : void 0, C = o.scopeValue("formats", {
              key: c,
              ref: P,
              code: $
            });
            return typeof P == "object" && !(P instanceof RegExp) ? [
              P.type || "string",
              P.validate,
              (0, e._)`${C}.validate`
            ] : [
              "string",
              P,
              C
            ];
          }
          function m() {
            if (typeof f == "object" && !(f instanceof RegExp) && f.async) {
              if (!y.$async) throw new Error("async format in sync schema");
              return (0, e._)`await ${w}(${s})`;
            }
            return typeof b == "function" ? (0, e._)`${w}(${s})` : (0, e._)`${w}.test(${s})`;
          }
        }
      }
    };
    return ur.default = n, ur;
  }
  var si;
  function Bp() {
    if (si) return dr;
    si = 1, Object.defineProperty(dr, "__esModule", {
      value: true
    });
    const t = [
      qp().default
    ];
    return dr.default = t, dr;
  }
  var Tt = {}, ii;
  function zp() {
    return ii || (ii = 1, Object.defineProperty(Tt, "__esModule", {
      value: true
    }), Tt.contentVocabulary = Tt.metadataVocabulary = void 0, Tt.metadataVocabulary = [
      "title",
      "description",
      "default",
      "deprecated",
      "readOnly",
      "writeOnly",
      "examples"
    ], Tt.contentVocabulary = [
      "contentMediaType",
      "contentEncoding",
      "contentSchema"
    ]), Tt;
  }
  var ci;
  function Vp() {
    if (ci) return jn;
    ci = 1, Object.defineProperty(jn, "__esModule", {
      value: true
    });
    const e = mp(), t = Pp(), n = Ap(), r = Bp(), a = zp(), o = [
      e.default,
      t.default,
      (0, n.default)(),
      r.default,
      a.metadataVocabulary,
      a.contentVocabulary
    ];
    return jn.default = o, jn;
  }
  var pr = {}, sn = {}, li;
  function Wp() {
    if (li) return sn;
    li = 1, Object.defineProperty(sn, "__esModule", {
      value: true
    }), sn.DiscrError = void 0;
    var e;
    return (function(t) {
      t.Tag = "tag", t.Mapping = "mapping";
    })(e || (sn.DiscrError = e = {})), sn;
  }
  var di;
  function Up() {
    if (di) return pr;
    di = 1, Object.defineProperty(pr, "__esModule", {
      value: true
    });
    const e = me(), t = Wp(), n = Ka(), r = Mr(), a = ye(), s = {
      keyword: "discriminator",
      type: "object",
      schemaType: "object",
      error: {
        message: ({ params: { discrError: i, tagName: c } }) => i === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
        params: ({ params: { discrError: i, tag: c, tagName: l } }) => (0, e._)`{error: ${i}, tag: ${l}, tagValue: ${c}}`
      },
      code(i) {
        const { gen: c, data: l, schema: u, parentSchema: v, it: h } = i, { oneOf: y } = v;
        if (!h.opts.discriminator) throw new Error("discriminator: requires discriminator option");
        const S = u.propertyName;
        if (typeof S != "string") throw new Error("discriminator: requires propertyName");
        if (u.mapping) throw new Error("discriminator: mapping is not supported");
        if (!y) throw new Error("discriminator: requires oneOf keyword");
        const k = c.let("valid", false), d = c.const("tag", (0, e._)`${l}${(0, e.getProperty)(S)}`);
        c.if((0, e._)`typeof ${d} == "string"`, () => f(), () => i.error(false, {
          discrError: t.DiscrError.Tag,
          tag: d,
          tagName: S
        })), i.ok(k);
        function f() {
          const w = b();
          c.if(false);
          for (const _ in w) c.elseIf((0, e._)`${d} === ${_}`), c.assign(k, p(w[_]));
          c.else(), i.error(false, {
            discrError: t.DiscrError.Mapping,
            tag: d,
            tagName: S
          }), c.endIf();
        }
        function p(w) {
          const _ = c.name("valid"), g = i.subschema({
            keyword: "oneOf",
            schemaProp: w
          }, _);
          return i.mergeEvaluated(g, e.Name), _;
        }
        function b() {
          var w;
          const _ = {}, g = P(v);
          let m = true;
          for (let D = 0; D < y.length; D++) {
            let j = y[D];
            if ((j == null ? void 0 : j.$ref) && !(0, a.schemaHasRulesButRef)(j, h.self.RULES)) {
              const W = j.$ref;
              if (j = n.resolveRef.call(h.self, h.schemaEnv.root, h.baseId, W), j instanceof n.SchemaEnv && (j = j.schema), j === void 0) throw new r.default(h.opts.uriResolver, h.baseId, W);
            }
            const B = (w = j == null ? void 0 : j.properties) === null || w === void 0 ? void 0 : w[S];
            if (typeof B != "object") throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${S}"`);
            m = m && (g || P(j)), $(B, D);
          }
          if (!m) throw new Error(`discriminator: "${S}" must be required`);
          return _;
          function P({ required: D }) {
            return Array.isArray(D) && D.includes(S);
          }
          function $(D, j) {
            if (D.const) C(D.const, j);
            else if (D.enum) for (const B of D.enum) C(B, j);
            else throw new Error(`discriminator: "properties/${S}" must have "const" or "enum"`);
          }
          function C(D, j) {
            if (typeof D != "string" || D in _) throw new Error(`discriminator: "${S}" values must be unique strings`);
            _[D] = j;
          }
        }
      }
    };
    return pr.default = s, pr;
  }
  const Hp = "http://json-schema.org/draft-07/schema#", Gp = "http://json-schema.org/draft-07/schema#", Kp = "Core schema meta-schema", Yp = {
    schemaArray: {
      type: "array",
      minItems: 1,
      items: {
        $ref: "#"
      }
    },
    nonNegativeInteger: {
      type: "integer",
      minimum: 0
    },
    nonNegativeIntegerDefault0: {
      allOf: [
        {
          $ref: "#/definitions/nonNegativeInteger"
        },
        {
          default: 0
        }
      ]
    },
    simpleTypes: {
      enum: [
        "array",
        "boolean",
        "integer",
        "null",
        "number",
        "object",
        "string"
      ]
    },
    stringArray: {
      type: "array",
      items: {
        type: "string"
      },
      uniqueItems: true,
      default: []
    }
  }, Jp = [
    "object",
    "boolean"
  ], Xp = {
    $id: {
      type: "string",
      format: "uri-reference"
    },
    $schema: {
      type: "string",
      format: "uri"
    },
    $ref: {
      type: "string",
      format: "uri-reference"
    },
    $comment: {
      type: "string"
    },
    title: {
      type: "string"
    },
    description: {
      type: "string"
    },
    default: true,
    readOnly: {
      type: "boolean",
      default: false
    },
    examples: {
      type: "array",
      items: true
    },
    multipleOf: {
      type: "number",
      exclusiveMinimum: 0
    },
    maximum: {
      type: "number"
    },
    exclusiveMaximum: {
      type: "number"
    },
    minimum: {
      type: "number"
    },
    exclusiveMinimum: {
      type: "number"
    },
    maxLength: {
      $ref: "#/definitions/nonNegativeInteger"
    },
    minLength: {
      $ref: "#/definitions/nonNegativeIntegerDefault0"
    },
    pattern: {
      type: "string",
      format: "regex"
    },
    additionalItems: {
      $ref: "#"
    },
    items: {
      anyOf: [
        {
          $ref: "#"
        },
        {
          $ref: "#/definitions/schemaArray"
        }
      ],
      default: true
    },
    maxItems: {
      $ref: "#/definitions/nonNegativeInteger"
    },
    minItems: {
      $ref: "#/definitions/nonNegativeIntegerDefault0"
    },
    uniqueItems: {
      type: "boolean",
      default: false
    },
    contains: {
      $ref: "#"
    },
    maxProperties: {
      $ref: "#/definitions/nonNegativeInteger"
    },
    minProperties: {
      $ref: "#/definitions/nonNegativeIntegerDefault0"
    },
    required: {
      $ref: "#/definitions/stringArray"
    },
    additionalProperties: {
      $ref: "#"
    },
    definitions: {
      type: "object",
      additionalProperties: {
        $ref: "#"
      },
      default: {}
    },
    properties: {
      type: "object",
      additionalProperties: {
        $ref: "#"
      },
      default: {}
    },
    patternProperties: {
      type: "object",
      additionalProperties: {
        $ref: "#"
      },
      propertyNames: {
        format: "regex"
      },
      default: {}
    },
    dependencies: {
      type: "object",
      additionalProperties: {
        anyOf: [
          {
            $ref: "#"
          },
          {
            $ref: "#/definitions/stringArray"
          }
        ]
      }
    },
    propertyNames: {
      $ref: "#"
    },
    const: true,
    enum: {
      type: "array",
      items: true,
      minItems: 1,
      uniqueItems: true
    },
    type: {
      anyOf: [
        {
          $ref: "#/definitions/simpleTypes"
        },
        {
          type: "array",
          items: {
            $ref: "#/definitions/simpleTypes"
          },
          minItems: 1,
          uniqueItems: true
        }
      ]
    },
    format: {
      type: "string"
    },
    contentMediaType: {
      type: "string"
    },
    contentEncoding: {
      type: "string"
    },
    if: {
      $ref: "#"
    },
    then: {
      $ref: "#"
    },
    else: {
      $ref: "#"
    },
    allOf: {
      $ref: "#/definitions/schemaArray"
    },
    anyOf: {
      $ref: "#/definitions/schemaArray"
    },
    oneOf: {
      $ref: "#/definitions/schemaArray"
    },
    not: {
      $ref: "#"
    }
  }, Zp = {
    $schema: Hp,
    $id: Gp,
    title: Kp,
    definitions: Yp,
    type: Jp,
    properties: Xp,
    default: true
  };
  var ui;
  function Qp() {
    return ui || (ui = 1, (function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: true
      }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
      const n = dp(), r = Vp(), a = Up(), o = Zp, s = [
        "/properties"
      ], i = "http://json-schema.org/draft-07/schema";
      class c extends n.default {
        _addVocabularies() {
          super._addVocabularies(), r.default.forEach((S) => this.addVocabulary(S)), this.opts.discriminator && this.addKeyword(a.default);
        }
        _addDefaultMetaSchema() {
          if (super._addDefaultMetaSchema(), !this.opts.meta) return;
          const S = this.opts.$data ? this.$dataMetaSchema(o, s) : o;
          this.addMetaSchema(S, i, false), this.refs["http://json-schema.org/schema"] = i;
        }
        defaultMeta() {
          return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
        }
      }
      t.Ajv = c, e.exports = t = c, e.exports.Ajv = c, Object.defineProperty(t, "__esModule", {
        value: true
      }), t.default = c;
      var l = Or();
      Object.defineProperty(t, "KeywordCxt", {
        enumerable: true,
        get: function() {
          return l.KeywordCxt;
        }
      });
      var u = me();
      Object.defineProperty(t, "_", {
        enumerable: true,
        get: function() {
          return u._;
        }
      }), Object.defineProperty(t, "str", {
        enumerable: true,
        get: function() {
          return u.str;
        }
      }), Object.defineProperty(t, "stringify", {
        enumerable: true,
        get: function() {
          return u.stringify;
        }
      }), Object.defineProperty(t, "nil", {
        enumerable: true,
        get: function() {
          return u.nil;
        }
      }), Object.defineProperty(t, "Name", {
        enumerable: true,
        get: function() {
          return u.Name;
        }
      }), Object.defineProperty(t, "CodeGen", {
        enumerable: true,
        get: function() {
          return u.CodeGen;
        }
      });
      var v = Ga();
      Object.defineProperty(t, "ValidationError", {
        enumerable: true,
        get: function() {
          return v.default;
        }
      });
      var h = Mr();
      Object.defineProperty(t, "MissingRefError", {
        enumerable: true,
        get: function() {
          return h.default;
        }
      });
    })($n, $n.exports)), $n.exports;
  }
  var em = Qp();
  const tm = Kl(em), nm = "http://json-schema.org/draft-07/schema#", rm = "network-state.schema.json", am = "Network State (Canonical Format)", om = "Network state snapshot for visualization (from WASM get_state_canonical() + JavaScript datasources)", sm = "object", im = [
    "blocks",
    "connections"
  ], cm = {
    blocks: {
      type: "array",
      description: "Array of WASM blocks with their current state",
      items: {
        type: "object",
        required: [
          "id",
          "type",
          "name",
          "state"
        ],
        properties: {
          id: {
            type: "string",
            minLength: 1,
            description: "Block canonical ID (format: 'BlockType:Name')"
          },
          type: {
            type: "string",
            enum: [
              "DiscreteTransformer",
              "PersistenceTransformer",
              "PatternPooler",
              "PatternClassifier",
              "SequenceLearner",
              "ContextLearner",
              "FixedWeightTransformer",
              "TaperingWeightTransformer",
              "PeriodicCellTransformer",
              "PeriodicScalarTransformer",
              "PlaceCellTransformer",
              "RandomizedPlaceCellTransformer"
            ],
            description: "WASM block type"
          },
          name: {
            type: "string",
            minLength: 1,
            description: "Human-readable block name"
          },
          state: {
            type: "object",
            required: [
              "numBits",
              "activeBits",
              "numActive"
            ],
            properties: {
              numBits: {
                type: "integer",
                minimum: 0,
                description: "Total number of bits in the state vector (may be 0 for dynamic encoders like PlaceCell)"
              },
              activeBits: {
                type: "array",
                items: {
                  type: "integer",
                  minimum: 0
                },
                description: "Sparse array of active bit indices"
              },
              numActive: {
                type: "integer",
                minimum: 0,
                description: "Number of active bits"
              }
            }
          }
        }
      }
    },
    connections: {
      type: "array",
      description: "Block-to-block connections (WASM blocks only)",
      items: {
        type: "object",
        required: [
          "source",
          "target",
          "type",
          "timeOffset"
        ],
        properties: {
          source: {
            type: "string",
            minLength: 1,
            description: "Source block canonical ID (must be a WASM block)"
          },
          target: {
            type: "string",
            minLength: 1,
            description: "Target block canonical ID (must be a WASM block)"
          },
          type: {
            type: "string",
            enum: [
              "input",
              "context"
            ],
            description: "Connection type"
          },
          timeOffset: {
            type: "integer",
            minimum: 0,
            description: "Time offset for temporal connections"
          }
        }
      }
    },
    datasources: {
      type: "array",
      description: "External data sources with current state (optional, JavaScript-only)",
      items: {
        type: "object",
        required: [
          "id",
          "type",
          "name",
          "state"
        ],
        properties: {
          id: {
            type: "string",
            minLength: 1,
            description: "Datasource canonical ID (shares namespace with blocks)"
          },
          type: {
            type: "string",
            enum: [
              "ScalarDataSource",
              "DiscreteDataSource"
            ],
            description: "Datasource type"
          },
          name: {
            type: "string",
            minLength: 1,
            description: "Human-readable datasource name"
          },
          state: {
            type: "object",
            required: [
              "currentValue",
              "step"
            ],
            properties: {
              currentValue: {
                type: "number",
                description: "Current value from datasource"
              },
              step: {
                type: "integer",
                minimum: 0,
                description: "Current execution step"
              }
            }
          }
        }
      }
    },
    interfaces: {
      type: "array",
      description: "Datasource-to-block connections (optional, JavaScript-only)",
      items: {
        type: "object",
        required: [
          "source",
          "target",
          "type"
        ],
        properties: {
          source: {
            type: "string",
            minLength: 1,
            description: "Source datasource canonical ID"
          },
          target: {
            type: "string",
            minLength: 1,
            description: "Target block canonical ID (must be a WASM block)"
          },
          type: {
            type: "string",
            enum: [
              "scalarInput",
              "discreteInput"
            ],
            description: "Interface type"
          }
        }
      }
    }
  }, lm = {
    $schema: nm,
    $id: rm,
    title: am,
    description: om,
    type: sm,
    required: im,
    properties: cm
  }, dm = "http://json-schema.org/draft-07/schema#", um = "network-config.schema.json", pm = "Network Configuration (Canonical Format)", mm = "Network configuration for export/import (from WASM export_config_canonical())", fm = "object", hm = [
    "version",
    "blocks",
    "connections"
  ], ym = {
    version: {
      type: "string",
      pattern: "^\\d+\\.\\d+\\.\\d+$",
      description: "Configuration format version"
    },
    blocks: {
      type: "array",
      description: "Array of WASM blocks with their configuration parameters",
      items: {
        type: "object",
        required: [
          "id",
          "type",
          "name",
          "params"
        ],
        properties: {
          id: {
            type: "string",
            minLength: 1,
            description: "Block canonical ID (format: 'BlockType:Name')"
          },
          type: {
            type: "string",
            enum: [
              "FixedWeightTransformer",
              "DiscreteTransformer",
              "PersistenceTransformer",
              "PatternPooler",
              "PatternClassifier",
              "SequenceLearner",
              "ContextLearner"
            ],
            description: "WASM block type"
          },
          name: {
            type: "string",
            minLength: 1,
            description: "Human-readable block name"
          },
          params: {
            type: "object",
            description: "Block initialization parameters (type-specific)"
          }
        }
      }
    },
    connections: {
      type: "array",
      description: "Block-to-block connections (WASM blocks only)",
      items: {
        type: "object",
        required: [
          "source",
          "target",
          "type",
          "timeOffset"
        ],
        properties: {
          source: {
            type: "string",
            minLength: 1,
            description: "Source block canonical ID (must be a WASM block)"
          },
          target: {
            type: "string",
            minLength: 1,
            description: "Target block canonical ID (must be a WASM block)"
          },
          type: {
            type: "string",
            enum: [
              "input",
              "context"
            ],
            description: "Connection type"
          },
          timeOffset: {
            type: "integer",
            minimum: 0,
            description: "Time offset for temporal connections"
          }
        }
      }
    },
    datasources: {
      type: "array",
      description: "External data sources (optional, implemented outside WASM)",
      items: {
        type: "object",
        required: [
          "id",
          "type",
          "name",
          "params"
        ],
        properties: {
          id: {
            type: "string",
            minLength: 1,
            description: "Datasource canonical ID (shares namespace with blocks)"
          },
          type: {
            type: "string",
            enum: [
              "ScalarDataSource",
              "DiscreteDataSource"
            ],
            description: "Datasource type"
          },
          name: {
            type: "string",
            minLength: 1,
            description: "Human-readable datasource name"
          },
          params: {
            type: "object",
            description: "Datasource configuration (type-specific)"
          }
        }
      }
    },
    interfaces: {
      type: "array",
      description: "Datasource-to-block connections (optional)",
      items: {
        type: "object",
        required: [
          "source",
          "target",
          "type"
        ],
        properties: {
          source: {
            type: "string",
            minLength: 1,
            description: "Source datasource canonical ID"
          },
          target: {
            type: "string",
            minLength: 1,
            description: "Target block canonical ID (must be a WASM block)"
          },
          type: {
            type: "string",
            enum: [
              "scalarInput",
              "discreteInput",
              "labelInput"
            ],
            description: "Interface type (labelInput for PatternClassifier supervised learning)"
          }
        }
      }
    },
    learnedState: {
      description: "Optional learned state data",
      oneOf: [
        {
          type: "null"
        },
        {
          type: "object"
        },
        {
          type: "array"
        }
      ]
    }
  }, gm = {
    $schema: dm,
    $id: um,
    title: pm,
    description: mm,
    type: fm,
    required: hm,
    properties: ym
  }, _m = "http://json-schema.org/draft-07/schema#", vm = "block-definition.schema.json", bm = "Block Definitions", xm = "WASM block type definitions with defaults (block_defaults.json)", Sm = "object", wm = {
    "^[A-Z][a-zA-Z]+$": {
      type: "object",
      required: [
        "method",
        "defaults"
      ],
      properties: {
        method: {
          type: "string",
          pattern: "^add_[a-z_]+$",
          description: "WASM method name for creating this block type"
        },
        defaults: {
          type: "object",
          description: "Default parameters for this block type",
          additionalProperties: {
            oneOf: [
              {
                type: "number"
              },
              {
                type: "boolean"
              },
              {
                type: "string"
              },
              {
                type: "integer"
              }
            ]
          }
        },
        needsInit: {
          type: "boolean",
          description: "Whether this block requires init_block() to be called"
        }
      }
    }
  }, km = false, Pm = {
    $schema: _m,
    $id: vm,
    title: bm,
    description: xm,
    type: Sm,
    patternProperties: wm,
    additionalProperties: km
  }, xa = new tm({
    allErrors: true,
    verbose: true,
    strict: false
  }), pi = {
    networkState: xa.compile(lm),
    networkConfig: xa.compile(gm),
    blockDefinition: xa.compile(Pm)
  };
  function Em(e, t) {
    const n = pi[t];
    if (!n) throw new Error(`Unknown schema: ${t}. Available schemas: ${Object.keys(pi).join(", ")}`);
    return n(e) ? {
      valid: true
    } : {
      valid: false,
      errors: n.errors,
      errorMessage: Cm(n.errors)
    };
  }
  function Cm(e) {
    return !e || e.length === 0 ? "" : e.map((t) => {
      const n = t.instancePath || "root", r = t.message || "validation failed", a = t.params ? ` (${JSON.stringify(t.params)})` : "";
      return `${n}: ${r}${a}`;
    }).join(`
`);
  }
  function Nm(e, t, n = "") {
    const r = Em(e, t);
    if (!r.valid) {
      const a = n ? ` [${n}]` : "";
      return console.warn(`[Validator] Validation warning${a}:`, r.errorMessage), console.warn("[Validator] Invalid data:", e), false;
    }
    return true;
  }
  const $m = Sl;
  let yr = false, mr = false;
  const gr = [];
  let Sa = false;
  const Ja = false;
  function Im() {
    if (!(Sa || gr.length === 0)) {
      for (Sa = true; gr.length > 0; ) {
        const e = gr.shift();
        if (!e) break;
        const { fn: t, resolve: n, reject: r, context: a } = e;
        try {
          const o = t();
          n(o);
        } catch (o) {
          console.error(`[WASM Bridge] Failed to ${a}:`, o), r(o);
        }
      }
      Sa = false;
    }
  }
  function Ve(e, t = "WASM call") {
    return new Promise((n, r) => {
      gr.push({
        fn: e,
        resolve: n,
        reject: r,
        context: t
      }), queueMicrotask(Im);
    });
  }
  async function Dm() {
    if (yr || mr) return false;
    mr = true;
    try {
      return yr = true, mr = false, true;
    } catch (e) {
      return console.error("[WASM Bridge] Failed to initialize:", e), yr = false, mr = false, false;
    }
  }
  function Xa() {
    return yr ? Ve(() => {
      const e = new $m();
      return e._blockMetadata = /* @__PURE__ */ new Map(), e._needsBuild = false, e._needsInit = /* @__PURE__ */ new Set(), e;
    }, "create network") : (console.error("[WASM Bridge] Cannot create network: WASM not initialized"), Promise.resolve(null));
  }
  function Za(e, t, n = {}) {
    return e ? Ve(() => {
      const r = Ku[t];
      if (!r) throw new Error(`Unknown block type: ${t}`);
      const a = {
        ...r.defaults,
        ...n
      }, o = n.name || t;
      let s = "";
      switch (t) {
        case "DiscreteTransformer":
          s = e.add_discrete_transformer(o, a.num_v, a.num_s, a.num_t, a.seed);
          break;
        case "PersistenceTransformer":
          s = e.add_persistence_transformer(o, a.min_val, a.max_val, a.num_s, a.num_as, a.max_step, a.num_t, a.seed);
          break;
        case "PatternPooler":
          s = e.add_pattern_pooler(o, a.num_s, a.num_as, a.perm_thr, a.perm_inc, a.perm_dec, a.pct_pool, a.pct_conn, a.pct_learn, a.always_update, a.num_t, a.seed);
          break;
        case "PatternClassifier":
          s = e.add_pattern_classifier(o, a.num_l, a.num_s, a.num_as, a.perm_thr, a.perm_inc, a.perm_dec, a.pct_pool, a.pct_conn, a.pct_learn, a.num_t, a.seed);
          break;
        case "SequenceLearner":
          s = e.add_sequence_learner(o, a.num_c, a.num_spc, a.num_dps, a.num_rpd, a.d_thresh, a.perm_thr, a.perm_inc, a.perm_dec, a.num_t, a.always_update, a.seed);
          break;
        case "ContextLearner":
          s = e.add_context_learner(o, a.num_c, a.num_spc, a.num_dps, a.num_rpd, a.d_thresh, a.perm_thr, a.perm_inc, a.perm_dec, a.num_t, a.always_update, a.seed);
          break;
        case "FixedWeightTransformer":
          s = e.add_fixed_weight_transformer(o, a.n, a.w, a.min_val, a.max_val, a.num_t, a.seed);
          break;
        case "TaperingWeightTransformer":
          s = e.add_tapering_weight_transformer(o, a.n, a.w, a.min_val, a.max_val, a.num_t, a.seed);
          break;
        case "PeriodicCellTransformer":
          s = e.add_periodic_cell_transformer(o, a.n, a.min_period, a.max_period, a.l_frac, a.min_val, a.max_val, a.num_t, a.seed);
          break;
        case "PeriodicScalarTransformer":
          s = e.add_periodic_scalar_transformer(o, a.n, a.w, a.period, a.min_val, a.max_val, a.num_t, a.seed);
          break;
        case "PlaceCellTransformer":
          s = e.add_place_cell_transformer(o, a.min_val, a.max_val, a.default_bin_size, a.num_t);
          break;
        case "RandomizedPlaceCellTransformer":
          s = e.add_randomized_place_cell_transformer(o, a.n, a.bin_size, a.min_val, a.max_val, a.num_t, a.seed);
          break;
        default:
          throw new Error(`Unhandled block type: ${t}`);
      }
      return e._blockMetadata.set(s, {
        type: t,
        name: o
      }), e._needsBuild = true, r.needsInit && e._needsInit.add(s), s;
    }, "add block") : Promise.resolve(null);
  }
  function xr(e, t, n, r = "input", a = 0) {
    return e ? Ve(() => {
      a > 0 ? r === "context" ? e.connect_to_context_with_offset(t, n, a) : e.connect_to_input_with_offset(t, n, a) : r === "context" ? e.connect_to_context(t, n) : e.connect_to_input(t, n), e._needsBuild = true;
    }, "connect blocks") : Promise.resolve();
  }
  function Qa(e, t, n) {
    return e ? Ve(() => {
      const r = e.add_datasource_from_config(t, n);
      return e._blockMetadata.set(r, {
        type: "FixedWeightTransformer",
        name: t
      }), e._needsBuild = true, e._needsInit.add(r), r;
    }, "add datasource from config") : Promise.resolve(null);
  }
  function eo(e, t, n) {
    return e ? Ve(() => {
      e.connect_scalar_source(t, n), e._needsBuild = true;
    }, "connect scalar source") : Promise.resolve();
  }
  function to(e, t, n) {
    return e ? Ve(() => {
      const r = e.add_discrete_datasource_from_config(t, n);
      return e._blockMetadata.set(r, {
        type: "DiscreteTransformer",
        name: t
      }), e._needsBuild = true, e._needsInit.add(r), r;
    }, "add discrete datasource from config") : Promise.resolve(null);
  }
  function no(e, t, n) {
    return e ? Ve(() => {
      e.connect_discrete_source(t, n), e._needsBuild = true;
    }, "connect discrete source") : Promise.resolve();
  }
  function Sr(e, t, n) {
    return e ? Ve(() => {
      e.connect_label_source(t, n), e._needsBuild = true;
    }, "connect label source") : Promise.resolve();
  }
  function un(e) {
    return e ? Ve(() => {
      e.build(), e._needsInit.forEach((t) => {
        try {
          e.init_block(t);
        } catch (n) {
          console.warn(`[WASM Bridge] Failed to init block ${t}:`, n);
        }
      }), e._needsBuild = false;
    }, "rebuild network") : Promise.resolve();
  }
  function Tm(e, t = true) {
    return e ? Ve(() => {
      e._needsBuild && (e.build(), e._needsInit.forEach((n) => {
        try {
          e.init_block(n);
        } catch (r) {
          console.warn(`[WASM Bridge] Failed to init block ${n}:`, r);
        }
      }), e._needsBuild = false), e.execute(t);
    }, "execute network") : Promise.resolve();
  }
  function Rm(e) {
    return e ? Ve(() => {
      const t = e.get_state_canonical();
      if (!t) return console.warn("[WASM Bridge] get_state_canonical returned null"), {};
      const n = JSON.parse(t);
      return n.blocks && n.blocks.length === 0 && console.warn("[WASM Bridge] get_state_canonical returned empty blocks array", n), Nm(n, "networkState", "getExecutionState"), n;
    }, "get execution state").catch(() => ({})) : Promise.resolve({});
  }
  function jm(e, t) {
    return !e || !t || t.length === 0 ? Promise.resolve({}) : Ve(() => {
      const n = t.map((s) => s.id), r = e.get_all_block_outputs(n), a = JSON.parse(r), o = {};
      for (const { id: s } of t) {
        const i = a[s];
        o[s] = i !== null ? i : void 0;
      }
      return o;
    }, "get block outputs batch");
  }
  const ie = Kt()(Pr((e, t) => ({
    wasmNetwork: null,
    wasmReady: false,
    wasmLoading: false,
    wasmError: null,
    isRunning: false,
    executionStep: 0,
    speed: 250,
    learningEnabled: true,
    pendingSingleStep: false,
    currentDemo: null,
    demoDescription: "No demo selected",
    networkStatus: "None",
    wasmStatus: "Not loaded",
    lastError: null,
    getExecutionStep: () => t().executionStep,
    setWasmStatus: (n) => {
      e({
        wasmStatus: n
      });
    },
    setWasmLoading: (n) => {
      e({
        wasmLoading: n
      });
    },
    setWasmReady: (n) => {
      e({
        wasmReady: n
      });
    },
    setWasmNetwork: (n) => {
      e({
        wasmNetwork: n,
        wasmReady: true,
        wasmLoading: false,
        wasmStatus: "Ready",
        wasmError: null
      });
    },
    setWasmError: (n) => {
      e(n ? {
        wasmError: n,
        wasmStatus: "Failed to load",
        wasmReady: false,
        wasmLoading: false
      } : {
        wasmError: null
      });
    },
    start: () => {
      if (!t().wasmReady) {
        console.error("Cannot start: WASM not ready");
        return;
      }
      e({
        isRunning: true
      });
    },
    stop: () => {
      e({
        isRunning: false
      });
    },
    reset: () => {
      e({
        isRunning: false,
        executionStep: 0,
        pendingSingleStep: false
      });
    },
    setSpeed: (n) => {
      e({
        speed: n
      });
    },
    toggleLearning: () => {
      e((n) => ({
        learningEnabled: !n.learningEnabled
      }));
    },
    setLearning: (n) => {
      e({
        learningEnabled: n
      });
    },
    singleStep: () => {
      if (!t().wasmReady) {
        console.error("Cannot single step: WASM not ready");
        return;
      }
      e({
        pendingSingleStep: true
      });
    },
    clearSingleStepFlag: () => {
      e({
        pendingSingleStep: false
      });
    },
    setCurrentDemo: (n, r = "") => {
      e({
        currentDemo: n,
        demoDescription: r
      });
    },
    setNetworkStatus: (n) => {
      e(n === "Error" ? {
        networkStatus: n
      } : {
        networkStatus: n,
        lastError: null
      });
    },
    setLastError: (n) => {
      e({
        networkStatus: "Error",
        lastError: n
      });
    },
    destroyNetwork: () => {
      e({
        wasmNetwork: null,
        networkStatus: "None",
        executionStep: 0,
        isRunning: false
      }), console.log("[ExecutionStore] Network destroyed, ready for recreation");
    },
    fullReset: () => {
      e({
        wasmLoading: false,
        wasmError: null,
        isRunning: false,
        executionStep: 0,
        speed: 50,
        learningEnabled: true,
        pendingSingleStep: false,
        currentDemo: null,
        demoDescription: "No demo selected"
      });
    }
  }), {
    name: "ExecutionStore"
  }));
  function Om() {
    const e = U.useRef(false), t = ie((s) => s.setWasmNetwork), n = ie((s) => s.setWasmError), r = ie((s) => s.setWasmLoading), a = ie((s) => s.setWasmStatus), o = ie((s) => s.wasmReady);
    U.useEffect(() => {
      if (!o && !e.current) return e.current = true, r(true), a("Loading"), Dm().then(async () => {
        const s = await Xa();
        if (!s) throw new Error("Failed to create network instance");
        t(s), n(null);
      }).catch((s) => {
        console.error("[useWasmNetwork] \u2717 Initialization failed:", s), n(s.message), e.current = false;
      }), () => {
      };
    }, [
      o
    ]);
  }
  const ze = Kt()(Pr((e, t) => ({
    timeSeriesData: {},
    getTimeSeries: (n, r) => {
      const { timeSeriesData: a } = t(), o = a[n] || {
        data: [],
        maxPoints: 100
      };
      return r === void 0 ? {
        ...o
      } : {
        maxPoints: o.maxPoints,
        data: o.data.slice(-r)
      };
    },
    updateTimeSeries: (n, r, a) => {
      const { timeSeriesData: o } = t(), s = o[n] || {
        data: [],
        maxPoints: 100
      }, i = {
        step: a,
        value: r
      }, c = [
        ...s.data,
        i
      ];
      c.length > s.maxPoints && c.shift(), e({
        timeSeriesData: {
          ...o,
          [n]: {
            ...s,
            data: c
          }
        }
      });
    },
    batchUpdateTimeSeries: (n) => {
      const { timeSeriesData: r } = t(), a = {
        ...r
      };
      Object.entries(n).forEach(([o, { value: s, step: i }]) => {
        const c = a[o] || {
          data: [],
          maxPoints: 100
        }, l = {
          step: i,
          value: s
        }, u = [
          ...c.data,
          l
        ];
        u.length > c.maxPoints && u.shift(), a[o] = {
          ...c,
          data: u
        };
      }), e({
        timeSeriesData: a
      });
    },
    batchUpdateTimeSeriesMultiple: (n) => {
      const { timeSeriesData: r } = t(), a = {
        ...r
      };
      Object.entries(n).forEach(([o, s]) => {
        const i = a[o] || {
          data: [],
          maxPoints: 100
        }, c = [
          ...i.data
        ];
        for (s.forEach(({ value: l, step: u }) => {
          c.push({
            step: u,
            value: l
          });
        }); c.length > i.maxPoints; ) c.shift();
        a[o] = {
          ...i,
          data: c
        };
      }), e({
        timeSeriesData: a
      });
    },
    clearData: () => {
      e({
        timeSeriesData: {}
      });
    },
    setTimeSeriesMaxPoints: (n, r) => {
      const { timeSeriesData: a } = t(), o = a[n] || {
        data: [],
        maxPoints: 100
      };
      e({
        timeSeriesData: {
          ...a,
          [n]: {
            ...o,
            maxPoints: r
          }
        }
      });
    },
    clearTimeSeriesForBlock: (n) => {
      const { timeSeriesData: r } = t(), a = {
        ...r
      };
      delete a[n], e({
        timeSeriesData: a
      });
    }
  }), {
    name: "TimeSeriesStore"
  })), ke = Kt()(Pr((e, t) => ({
    bitFieldData: {},
    bitFieldParams: {},
    getBitField: (n) => {
      const { bitFieldData: r } = t();
      return r[n] || null;
    },
    getBitFieldParams: (n) => {
      const { bitFieldParams: r } = t();
      return r[n] || null;
    },
    setBitFieldParams: (n, r) => {
      const { bitFieldParams: a } = t();
      e({
        bitFieldParams: {
          ...a,
          [n]: r
        }
      });
    },
    getBitFieldArray: (n) => {
      var _a2;
      const { bitFieldData: r } = t();
      return ((_a2 = r[n]) == null ? void 0 : _a2.bitField) || [];
    },
    getActiveSet: (n) => {
      var _a2;
      const { bitFieldData: r } = t();
      return ((_a2 = r[n]) == null ? void 0 : _a2.activeSet) || /* @__PURE__ */ new Set();
    },
    getStatePreview: (n) => {
      var _a2;
      const { bitFieldData: r } = t();
      return ((_a2 = r[n]) == null ? void 0 : _a2.statePreview) || "";
    },
    updateBitField: (n, r, a) => {
      const { bitFieldData: o } = t();
      if (!Array.isArray(r)) {
        console.warn(`[BitFieldStore] Invalid bitField for ${n}: not an array`);
        return;
      }
      if (!(a instanceof Set)) {
        console.warn(`[BitFieldStore] Invalid activeSet for ${n}: not a Set`);
        return;
      }
      const s = r.length, i = a.size, c = Array.from(a).map((l) => l.toString()).join(" ");
      e({
        bitFieldData: {
          ...o,
          [n]: {
            bitField: r,
            activeSet: a,
            numActive: i,
            numBits: s,
            statePreview: c
          }
        }
      });
    },
    batchUpdateBitFields: (n) => {
      const { bitFieldData: r } = t(), a = {
        ...r
      };
      Object.entries(n).forEach(([o, { bitField: s, activeSet: i }]) => {
        if (!Array.isArray(s)) {
          console.warn(`[BitFieldStore] Invalid bitField for ${o}: not an array`);
          return;
        }
        if (!(i instanceof Set)) {
          console.warn(`[BitFieldStore] Invalid activeSet for ${o}: not a Set`);
          return;
        }
        const c = s.length, l = i.size, u = Array.from(i).map((v) => v.toString()).join(" ");
        a[o] = {
          bitField: s,
          activeSet: i,
          numActive: l,
          numBits: c,
          statePreview: u
        };
      }), e({
        bitFieldData: a
      });
    },
    hasBitField: (n) => {
      const { bitFieldData: r } = t();
      return n in r && r[n].bitField.length > 0;
    },
    clearBitFieldForBlock: (n) => {
      const { bitFieldData: r } = t(), a = {
        ...r
      };
      delete a[n], e({
        bitFieldData: a
      });
    },
    clearData: () => {
      e({
        bitFieldData: {},
        bitFieldParams: {}
      });
    },
    getStats: () => {
      const { bitFieldData: n } = t(), r = Object.keys(n);
      return {
        numBlocks: r.length,
        totalBits: r.reduce((a, o) => {
          var _a2;
          return a + (((_a2 = n[o]) == null ? void 0 : _a2.numBits) || 0);
        }, 0),
        totalActive: r.reduce((a, o) => {
          var _a2;
          return a + (((_a2 = n[o]) == null ? void 0 : _a2.numActive) || 0);
        }, 0)
      };
    }
  }), {
    name: "BitFieldStore"
  }));
  function Mm(e, t) {
    const n = new Array(t).fill(0);
    return e.forEach((r) => {
      r >= 0 && r < t && (n[r] = 1);
    }), n;
  }
  function Lr(e, t) {
    switch (e) {
      case "DiscreteTransformer":
      case "PersistenceTransformer":
        return t.num_s;
      case "PatternPooler":
      case "PatternClassifier":
        return t.num_s;
      case "SequenceLearner":
      case "ContextLearner":
        return t.num_c * (t.num_spc || 4);
      case "FixedWeightTransformer":
      case "TaperingWeightTransformer":
      case "PeriodicCellTransformer":
      case "PeriodicScalarTransformer":
      case "RandomizedPlaceCellTransformer":
        return t.n;
      case "PlaceCellTransformer":
        if (t.min_val !== void 0 && t.max_val !== void 0 && t.default_bin_size) {
          const n = t.max_val - t.min_val;
          return Math.ceil(n / t.default_bin_size);
        }
        return 64;
      default:
        return console.warn(`[Format Converters] Unknown block type: ${e}`), 64;
    }
  }
  const Lm = /* @__PURE__ */ new Set([
    "SequenceLearner",
    "ContextLearner"
  ]);
  function cc(e, t) {
    const n = new Map(e.map((o) => [
      o.id,
      o
    ])), r = (o) => {
      const s = n.get(o);
      return s ? Lr(s.type, s.params) : 0;
    }, a = [];
    for (const o of e) {
      if (!Lm.has(o.type)) continue;
      const s = t.filter((c) => c.target === o.id && c.type === "input").reduce((c, l) => c + r(l.source), 0), i = o.params.num_c ?? 0;
      s > 0 && i !== s && a.push({
        id: o.id,
        from: i,
        to: s
      });
    }
    return a;
  }
  function lc(e, t) {
    const n = Lr(e, t);
    return new Array(n).fill(0);
  }
  class Fm {
    constructor() {
      __publicField(this, "metrics");
      __publicField(this, "maxSamples");
      __publicField(this, "maxExecutionSteps");
      __publicField(this, "enabled");
      __publicField(this, "detailedProfiling");
      __publicField(this, "lastFrameTime");
      __publicField(this, "executionStepCount");
      __publicField(this, "lastExecutionRateCheck");
      this.metrics = {
        executeStep: [],
        stateUpdates: [],
        renders: [],
        frame: [],
        executionSteps: []
      }, this.maxSamples = 500, this.maxExecutionSteps = 500, this.enabled = true, this.detailedProfiling = false, this.lastFrameTime = performance.now(), this.executionStepCount = 0, this.lastExecutionRateCheck = Date.now();
    }
    startTimer(t) {
      return this.enabled ? {
        label: t,
        start: performance.now()
      } : null;
    }
    endTimer(t, n = "executeStep") {
      if (!this.enabled || !t) return;
      const r = performance.now() - t.start;
      return this.metrics[n] || (this.metrics[n] = []), this.metrics[n].push({
        label: t.label,
        duration: r,
        timestamp: Date.now()
      }), this.metrics[n].length > this.maxSamples && this.metrics[n].shift(), r;
    }
    recordFrame() {
      if (!this.enabled) return;
      const t = performance.now(), n = t - this.lastFrameTime;
      this.lastFrameTime = t, this.metrics.frame.push({
        duration: n,
        timestamp: Date.now()
      }), this.metrics.frame.length > this.maxSamples && this.metrics.frame.shift();
    }
    recordRender(t, n = {}) {
      this.enabled && (this.metrics.renders.push({
        component: t,
        propsChanged: Object.keys(n),
        timestamp: Date.now()
      }), this.metrics.renders.length > this.maxSamples && this.metrics.renders.shift());
    }
    recordStateUpdate(t, n, r = {}) {
      this.enabled && (this.metrics.stateUpdates.push({
        store: t,
        operation: n,
        data: r,
        timestamp: Date.now()
      }), this.metrics.stateUpdates.length > this.maxSamples && this.metrics.stateUpdates.shift());
    }
    getStats(t = "executeStep") {
      const n = this.metrics[t];
      if (!n || n.length === 0) return null;
      const r = n.map((u) => u.duration), a = r.reduce((u, v) => u + v, 0) / r.length, o = Math.min(...r), s = Math.max(...r), i = [
        ...r
      ].sort((u, v) => u - v), c = i[Math.floor(r.length * 0.95)], l = i[Math.floor(r.length * 0.99)];
      return {
        count: r.length,
        avg: a.toFixed(2),
        min: o.toFixed(2),
        max: s.toFixed(2),
        p95: c.toFixed(2),
        p99: l.toFixed(2)
      };
    }
    getFrameStats() {
      const t = this.getStats("frame");
      return t ? {
        ...t,
        fps: (1e3 / parseFloat(t.avg)).toFixed(1),
        minFps: (1e3 / parseFloat(t.max)).toFixed(1),
        maxFps: (1e3 / parseFloat(t.min)).toFixed(1)
      } : null;
    }
    getCurrentFPS() {
      const t = this.metrics.frame;
      if (!t || t.length < 2) return 0;
      const r = Date.now() - 1e3;
      return t.filter((o) => o.timestamp >= r).length;
    }
    recordExecutionStep() {
      if (!this.enabled) return;
      this.executionStepCount++;
      const t = Date.now();
      this.metrics.executionSteps.push({
        timestamp: t
      }), this.metrics.executionSteps.length > this.maxExecutionSteps && this.metrics.executionSteps.shift();
    }
    getCurrentExecutionRate() {
      const t = this.metrics.executionSteps;
      if (!t || t.length < 2) return 0;
      const r = Date.now() - 1e3;
      return t.filter((o) => o.timestamp >= r).length;
    }
    getRenderStats() {
      const t = this.metrics.renders;
      if (!t || t.length === 0) return null;
      const n = {};
      return t.forEach((r) => {
        n[r.component] = (n[r.component] || 0) + 1;
      }), {
        totalRenders: t.length,
        componentCounts: n,
        topComponents: Object.entries(n).sort((r, a) => a[1] - r[1]).slice(0, 5)
      };
    }
    getStateUpdateStats() {
      const t = this.metrics.stateUpdates;
      if (!t || t.length === 0) return null;
      const n = {};
      return t.forEach((r) => {
        n[r.store] = (n[r.store] || 0) + 1;
      }), {
        totalUpdates: t.length,
        storeCounts: n,
        topStores: Object.entries(n).sort((r, a) => a[1] - r[1])
      };
    }
    printReport() {
      if (!this.enabled) return;
      console.group("\u{1F4CA} Performance Report");
      const t = this.getStats("executeStep");
      t && console.log("\u26A1 Execute Step:", t);
      const n = this.getFrameStats();
      n && console.log("\u{1F3AC} Frame Rate:", n);
      const r = this.getRenderStats();
      r && console.log("\u{1F504} Renders:", r);
      const a = this.getStateUpdateStats();
      a && console.log("\u{1F4BE} State Updates:", a), console.groupEnd();
    }
    clear() {
      this.metrics = {
        executeStep: [],
        stateUpdates: [],
        renders: [],
        frame: [],
        executionSteps: []
      };
    }
    setEnabled(t) {
      this.enabled = t;
    }
  }
  const et = new Fm();
  typeof window < "u" && (window.perfMonitor = et);
  const Am = /* @__PURE__ */ new Set([
    "SynflowScalarDataSource",
    "SynflowDiscreteDataSource"
  ]), qm = /* @__PURE__ */ new Set([
    "VizBitField",
    "VizTimeSeries",
    "VizEncoder",
    "VizNode"
  ]);
  function Mt(e, t, n, r) {
    var _a2, _b;
    const a = qa, o = (d) => {
      var _a3;
      const f = n[d.id];
      if (f) {
        const p = {
          ...f
        };
        return delete p.type, p;
      }
      return ((_a3 = d.data) == null ? void 0 : _a3.params) ?? {};
    }, s = [], i = [], c = [], l = {}, u = /* @__PURE__ */ new Map();
    for (const d of e) {
      if (d.type === "group") continue;
      const f = d.data, p = f == null ? void 0 : f.canonicalId, b = f == null ? void 0 : f.blockType;
      if (!p || !b) continue;
      u.set(d.id, p);
      const w = {
        id: p,
        type: b,
        name: (f == null ? void 0 : f.label) ?? b,
        params: o(d)
      };
      Am.has(b) ? s.push(w) : i.push(w), c.push({
        networkId: a,
        blockId: p,
        position: {
          x: d.position.x,
          y: d.position.y
        }
      }), (f == null ? void 0 : f.plotVisible) === false && (f == null ? void 0 : f.bitfieldVisible) === false && ((l[a] ?? (l[a] = {}))[p] = {
        show: false
      });
    }
    const v = [], h = [];
    for (const d of t) {
      const f = d.data, p = u.get(d.source), b = u.get(d.target);
      if (!p || !b) continue;
      const w = f == null ? void 0 : f.interfaceType;
      if (w) h.push({
        source: p,
        target: b,
        type: w
      });
      else if (d.type === "input" || d.type === "context") {
        const _ = f == null ? void 0 : f.timeOffset;
        v.push({
          source: p,
          target: b,
          type: d.type,
          ..._ ? {
            timeOffset: _
          } : {}
        });
      }
    }
    const y = [];
    for (const d of e) {
      if (!d.type || !qm.has(d.type)) continue;
      const f = (_a2 = d.data) == null ? void 0 : _a2.targetNodeId, p = f ? u.get(f) : void 0;
      p && y.push({
        id: d.id,
        target: {
          networkId: a,
          blockId: p
        },
        kind: ((_b = d.data) == null ? void 0 : _b.vizKind) ?? "bitfield",
        position: {
          x: d.position.x,
          y: d.position.y
        }
      });
    }
    const S = {
      version: "0.1.0",
      blocks: i,
      datasources: s,
      connections: v,
      interfaces: h
    }, k = {};
    return y.length && (k.vizNodes = y), Object.keys(l).length && (k.inline = l), Md(S, {
      networkId: a,
      layout: qd(c),
      ...Object.keys(k).length ? {
        visualization: k
      } : {}
    });
  }
  function wr(e, t) {
    const n = t.filter((a) => (a.targetHandle ?? "input") === "input").length, r = t.filter((a) => a.targetHandle === "context").length;
    return e === "ContextLearner" ? n >= 1 && r >= 1 : n >= 1;
  }
  function Bm(e, t) {
    return wr(e, t.map((n) => ({
      target: "",
      targetHandle: n.type === "context" ? "context" : n.type === "input" || n.type === "scalarInput" || n.type === "discreteInput" ? "input" : "other"
    })));
  }
  function Ma(e, t) {
    var _a2;
    if (t.source === t.target) return true;
    const n = /* @__PURE__ */ new Map(), r = (s, i) => {
      const c = n.get(s) ?? [];
      c.push(i), n.set(s, c);
    };
    for (const s of e) s.source && s.type !== "vizLink" && (((_a2 = s.data) == null ? void 0 : _a2.timeOffset) ?? 0) === 0 && r(s.source, s.target);
    r(t.source, t.target);
    const a = /* @__PURE__ */ new Set(), o = [
      t.target
    ];
    for (; o.length; ) {
      const s = o.pop();
      if (s === t.source) return true;
      if (!a.has(s)) {
        a.add(s);
        for (const i of n.get(s) ?? []) o.push(i);
      }
    }
    return false;
  }
  function zm(e) {
    var _a2;
    const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
    for (const o of e) {
      if (!o.source || o.type === "vizLink" || (((_a2 = o.data) == null ? void 0 : _a2.timeOffset) ?? 0) !== 0) continue;
      const s = t.get(o.source) ?? [];
      s.push(o.target), t.set(o.source, s), n.add(o.source), n.add(o.target);
    }
    const r = (o, s) => {
      const i = /* @__PURE__ */ new Set(), c = [
        ...t.get(o) ?? []
      ];
      for (; c.length; ) {
        const l = c.pop();
        if (l === s) return true;
        if (!i.has(l)) {
          i.add(l);
          for (const u of t.get(l) ?? []) c.push(u);
        }
      }
      return false;
    }, a = /* @__PURE__ */ new Set();
    for (const o of n) r(o, o) && a.add(o);
    return a;
  }
  function Vm(e) {
    return e === "ContextLearner" ? "needs an input and a context connection" : "needs an input connection";
  }
  function Wm(e, t) {
    var _a2, _b;
    const n = /* @__PURE__ */ new Set(), r = [], a = /* @__PURE__ */ new Set();
    for (const s of t) s.type !== "vizLink" && (s.source && a.add(s.source), a.add(s.target));
    const o = zm(t);
    for (const s of e) {
      const i = (_a2 = s.data) == null ? void 0 : _a2.blockType, c = i ? vt(i) : void 0;
      if (!i || !(c == null ? void 0 : c.category)) continue;
      const l = ((_b = s.data) == null ? void 0 : _b.label) ?? i;
      if (c.needsInit) {
        const u = t.filter((v) => v.target === s.id);
        wr(i, u) || (n.add(s.id), r.push({
          kind: "incomplete",
          level: "warn",
          nodeId: s.id,
          blockType: i,
          message: `${l} ${Vm(i)}`
        }));
      } else a.has(s.id) || r.push({
        kind: "orphan",
        level: "warn",
        nodeId: s.id,
        blockType: i,
        message: `${l} isn't connected to anything`
      });
      o.has(s.id) && r.push({
        kind: "cycle",
        level: "error",
        nodeId: s.id,
        blockType: i,
        message: `${l} is part of a dependency loop with no time delay`
      });
    }
    return {
      incompleteNodeIds: n,
      issues: r
    };
  }
  function dc(e, t, n) {
    const r = ke.getState(), a = ze.getState();
    if (r.updateBitField(e, lc(t, n), /* @__PURE__ */ new Set()), r.setBitFieldParams(e, {
      ...n,
      type: t
    }), Tr(t)) if (t === "PatternClassifier") {
      const o = n.num_l || 2;
      a.updateTimeSeries(e, new Array(o).fill(0), 0);
    } else a.updateTimeSeries(e, 0, 0);
  }
  const Um = "main";
  async function Fr(e) {
    var _a2, _b;
    const t = e.networks[Um];
    if (!t) return false;
    const n = new Map(cc(t.blocks ?? [], t.connections ?? []).map((l) => (console.info(`[rebuildWasm] cascaded ${l.id}.num_c ${l.from} \u2192 ${l.to} (input width)`), [
      l.id,
      l.to
    ]))), r = (l) => n.has(l.id) ? {
      ...l.params,
      num_c: n.get(l.id)
    } : l.params, a = ie.getState();
    a.destroyNetwork();
    const o = await Xa();
    if (!o) return false;
    a.setWasmNetwork(o);
    const s = ze.getState();
    s.clearData();
    for (const l of t.datasources ?? []) {
      const u = JSON.stringify(l.params ?? {}), v = l.type === "SynflowDiscreteDataSource" ? await to(o, l.name, u) : await Qa(o, l.name, u);
      v && s.updateTimeSeries(`node-${v}`, 0, 0);
    }
    for (const l of t.blocks ?? []) {
      const u = r(l), v = await Za(o, l.type, {
        ...u,
        name: l.name
      });
      if (!v) continue;
      const h = `node-${v}`;
      dc(h, l.type, u), ((_a2 = vt(l.type)) == null ? void 0 : _a2.needsInit) && o._needsInit.delete(v);
    }
    for (const l of t.interfaces ?? []) try {
      l.type === "discreteInput" ? await no(o, l.source, l.target) : l.type === "labelInput" ? await Sr(o, l.source, l.target) : await eo(o, l.source, l.target);
    } catch (u) {
      console.warn("[rebuildWasm] interface failed:", l, u);
    }
    for (const l of t.connections ?? []) try {
      await xr(o, l.source, l.target, l.type, l.timeOffset || 0);
    } catch (u) {
      console.warn("[rebuildWasm] connection failed:", l, u);
    }
    const i = (l) => [
      ...(t.connections ?? []).filter((u) => u.target === l),
      ...(t.interfaces ?? []).filter((u) => u.target === l)
    ], c = [];
    for (const l of t.blocks ?? []) ((_b = vt(l.type)) == null ? void 0 : _b.needsInit) && Bm(l.type, i(l.id)) && (o._needsInit.add(l.id), c.push(l.id));
    try {
      await un(o);
    } catch (l) {
      console.warn("[rebuildWasm] rebuild failed:", l);
    }
    for (const l of c) o._needsInit.delete(l);
    return ie.getState().setNetworkStatus("Ready"), true;
  }
  const Hm = /recursive use|unsafe aliasing|unreachable|RuntimeError/i;
  function uc(e) {
    const t = e instanceof Error ? e.message : String(e ?? "");
    return Hm.test(t);
  }
  async function Gm() {
    const { nodes: e, edges: t } = re.getState(), { bitFieldParams: n } = ke.getState(), r = Mt(e, t, n);
    return Fr(r);
  }
  const Km = [
    {
      match: /cycle detected/i,
      message: "This network has a dependency loop with no time delay. Add a time-delayed connection or remove an edge."
    },
    {
      match: /must be initialized|not initialized|uninitialized/i,
      message: "A learning block isn\u2019t connected yet \u2014 give it an input (ContextLearner also needs a context)."
    },
    {
      match: /input_size|num_c|input size/i,
      message: "A learner\u2019s size doesn\u2019t match its input width. Reconnect or reconfigure it so the sizes agree."
    },
    {
      match: /recursive use|unsafe aliasing|unreachable|RuntimeError/i,
      message: "The computation hit an internal error and was reset. Your next edit rebuilds the network from the canvas."
    }
  ];
  function Ym(e) {
    const t = e instanceof Error ? e.message : String(e ?? "");
    for (const n of Km) if (n.match.test(t)) return n.message;
    return t || "Unknown network error.";
  }
  function Jm() {
    const e = U.useRef(null), t = U.useRef(null), n = U.useRef(null), r = U.useRef(0), a = U.useRef(false), s = 1e3 / 60, i = ie((w) => w.isRunning), c = ie((w) => w.speed), l = ie((w) => w.learningEnabled), u = ie((w) => w.wasmNetwork), v = ie((w) => w.getExecutionStep), h = ie((w) => w.pendingSingleStep), y = ie((w) => w.clearSingleStepFlag), S = re((w) => w.nodes);
    re((w) => w.edges);
    const k = re((w) => w.batchUpdateNodeData), d = ze((w) => w.batchUpdateTimeSeriesMultiple), f = ke((w) => w.batchUpdateBitFields);
    ke((w) => w.bitFieldData), U.useEffect(() => {
      h && u && !i && !a.current && (b(), y());
    }, [
      h,
      u,
      i
    ]), U.useEffect(() => {
      if (i && u) if (t.current || (r.current = performance.now()), c < 10) {
        let w = function() {
          const g = performance.now();
          g - _ >= c && !a.current && (b(), _ = g), e.current = setTimeout(w, 0);
        }, _ = performance.now();
        w();
      } else e.current = setInterval(() => {
        b();
      }, c);
      else e.current !== null && (clearInterval(e.current), clearTimeout(e.current), e.current = null);
      return () => {
        e.current !== null && (clearInterval(e.current), clearTimeout(e.current), e.current = null), t.current !== null && (cancelAnimationFrame(t.current), t.current = null);
      };
    }, [
      i,
      c,
      u,
      d,
      f,
      k
    ]);
    function p(w) {
      if (w - r.current < s) {
        t.current = requestAnimationFrame(p);
        return;
      }
      t.current = null, r.current = w;
      const g = n.current;
      if (!g) return;
      et.recordFrame();
      const m = et.startTimer("batchUpdates");
      g.timeSeriesUpdates && Object.keys(g.timeSeriesUpdates).length > 0 && d(g.timeSeriesUpdates), g.bitFieldUpdates && Object.keys(g.bitFieldUpdates).length > 0 && f(g.bitFieldUpdates), g.nodeDataUpdates && Object.keys(g.nodeDataUpdates).length > 0 && k(g.nodeDataUpdates), et.endTimer(m);
      let P = 0;
      Object.values(g.timeSeriesUpdates || {}).forEach(($) => {
        P += $.length;
      }), Object.keys(g.timeSeriesUpdates || {}).length, Object.keys(g.bitFieldUpdates || {}).length, Object.keys(g.nodeDataUpdates || {}).length, n.current = {
        timeSeriesUpdates: {},
        bitFieldUpdates: {},
        nodeDataUpdates: {}
      };
    }
    async function b() {
      var _a2;
      if (a.current) return;
      a.current = true;
      const w = performance.now(), _ = et.startTimer("executeStep");
      et.recordExecutionStep();
      const g = {
        dataSources: 0,
        setScalarValues: 0,
        executeNetwork: 0,
        getExecutionState: 0,
        getBlockOutputs: 0,
        collectUpdates: 0,
        collectBitField: 0,
        processBlockOutputs: 0,
        scheduleRAF: 0,
        total: 0
      };
      try {
        let m = performance.now();
        await Tm(u, l), g.executeNetwork = performance.now() - m;
        let P = 0;
        ie.setState((Q) => (P = Q.executionStep + 1, {
          executionStep: P
        }));
        const $ = v();
        m = performance.now();
        const C = await Rm(u);
        g.getExecutionState = performance.now() - m;
        const D = {}, j = {}, B = {};
        m = performance.now();
        const W = S.filter((Q) => Q.data.wasmHandle !== void 0), H = W.filter((Q) => Q.data.blockType !== "SynflowScalarDataSource" && Q.data.blockType !== "SynflowDiscreteDataSource");
        for (let Q = 0; Q < H.length; Q++) {
          const G = H[Q], T = G.data.wasmHandle, z = (_a2 = C == null ? void 0 : C.blocks) == null ? void 0 : _a2.find((M) => M.id === T);
          if (z && z.state && z.state.numBits !== void 0) try {
            const { numBits: M, activeBits: E } = z.state, I = Mm(E, M), V = new Set(E);
            D[G.id] = {
              bitField: I,
              activeSet: V
            }, B[G.id] = {
              hasOutput: true
            }, G.id, I.length, V.size;
          } catch (M) {
            console.error(`[Execution Loop] Failed to collect bitfield for node ${G.id}:`, M);
          }
        }
        g.collectBitField = performance.now() - m, m = performance.now();
        const X = W.map((Q, G) => ({
          id: Q.data.wasmHandle,
          nodeType: Q.data.blockType,
          nodeId: Q.id,
          index: G
        })), ce = await jm(u, X);
        g.getBlockOutputs = performance.now() - m, m = performance.now();
        for (const { nodeId: Q, id: G, nodeType: T } of X) {
          const z = ce[G];
          Array.isArray(z) ? z.length > 0 && z.every((E) => typeof E == "number" && isFinite(E)) ? (j[Q] = {
            value: z,
            step: $
          }, z.length, void 0) : console.warn(`[Execution Loop] Invalid vector output for node ${Q}:`, z) : typeof z == "number" && isFinite(z) ? (j[Q] = {
            value: z,
            step: $
          }, (T === "SynflowScalarDataSource" || T === "SynflowDiscreteDataSource" || (T == null ? void 0 : T.includes("DataSource"))) && (B[Q] || (B[Q] = {}), B[Q].currentValue = z), void 0) : z != null && console.warn(`[Execution Loop] Invalid output for node ${Q}:`, z);
        }
        g.processBlockOutputs = performance.now() - m, m = performance.now();
        const oe = j;
        n.current || (n.current = {
          timeSeriesUpdates: {},
          bitFieldUpdates: {},
          nodeDataUpdates: {}
        }), Object.entries(oe).forEach(([Q, G]) => {
          n.current.timeSeriesUpdates[Q] || (n.current.timeSeriesUpdates[Q] = []), n.current.timeSeriesUpdates[Q].push(G);
        }), Object.assign(n.current.bitFieldUpdates, D), Object.assign(n.current.nodeDataUpdates, B), g.collectUpdates = performance.now() - m, m = performance.now(), t.current || (t.current = requestAnimationFrame(p)), g.scheduleRAF = performance.now() - m, g.total = performance.now() - w, P % 100 === 0 && console.log(`[Execution Profile] Step ${P}:`, {
          executeNetwork: `${g.executeNetwork.toFixed(2)}ms`,
          getExecutionState: `${g.getExecutionState.toFixed(2)}ms`,
          getBlockOutputs: `${g.getBlockOutputs.toFixed(2)}ms`,
          collectUpdates: `${g.collectUpdates.toFixed(2)}ms`,
          collectBitField: `${g.collectBitField.toFixed(2)}ms`,
          processBlockOutputs: `${g.processBlockOutputs.toFixed(2)}ms`,
          scheduleRAF: `${g.scheduleRAF.toFixed(2)}ms`,
          total: `${g.total.toFixed(2)}ms`,
          percentages: {
            executeNetwork: `${(g.executeNetwork / g.total * 100).toFixed(1)}%`,
            getExecutionState: `${(g.getExecutionState / g.total * 100).toFixed(1)}%`,
            getBlockOutputs: `${(g.getBlockOutputs / g.total * 100).toFixed(1)}%`,
            collectUpdates: `${(g.collectUpdates / g.total * 100).toFixed(1)}%`,
            collectBitField: `${(g.collectBitField / g.total * 100).toFixed(1)}%`,
            processBlockOutputs: `${(g.processBlockOutputs / g.total * 100).toFixed(1)}%`,
            scheduleRAF: `${(g.scheduleRAF / g.total * 100).toFixed(1)}%`
          }
        }), S.length, et.endTimer(_);
      } catch (m) {
        console.error("[Execution Loop] Error during step:", m), v(), m.message, m.stack, ie.setState({
          isRunning: false
        }), uc(m) && ie.getState().setLastError(Ym(m)), et.endTimer(_);
      } finally {
        a.current = false;
      }
    }
  }
  const pc = Kt((e) => ({
    config: null,
    capabilities: Uo(void 0),
    setInteractivity: (t) => e({
      config: t,
      capabilities: Uo(t ?? void 0)
    })
  })), Xm = {
    encoderPanel: false,
    encoderCards: false,
    encoderControls: false,
    addRemoveEncoders: false,
    demoSelector: false,
    viewportRange: false,
    plotPanel: true,
    plotControls: true,
    compactPlotControls: true,
    bitPanels: false,
    cursorSlider: false
  }, Zm = {
    encoderPanel: false,
    encoderCards: false,
    encoderControls: false,
    addRemoveEncoders: false,
    demoSelector: false,
    viewportRange: false,
    plotPanel: true,
    bitPanels: true,
    plotControls: false,
    cursorSlider: false
  };
  function Qm(e, t, n) {
    const r = Da(e, t);
    if (!r) return null;
    const a = r.encoder.type === "periodic-fixed" ? r.encoder.period : void 0;
    return {
      setup: {
        encoders: [
          r.encoder
        ],
        viewBounds: r.viewBounds,
        subplots: [
          "bins",
          "per-bin"
        ],
        ...n ? {
          colors: [
            n
          ]
        } : {}
      },
      ui: Zm,
      inputRange: r.viewBounds,
      period: a
    };
  }
  const mi = "vizLink", ef = (e) => `viz-edge-${e}`;
  function ro(e, t) {
    var _a2;
    const n = new Set(e.map((o) => o.id)), r = t.filter((o) => o.type !== mi), a = [];
    for (const o of e) {
      if (!Ot(o.type)) continue;
      const s = ((_a2 = o.data) == null ? void 0 : _a2.targetNodeId) ?? null;
      !s || !n.has(s) || a.push({
        id: ef(o.id),
        source: s,
        target: o.id,
        type: mi,
        selectable: false,
        data: {}
      });
    }
    return [
      ...r,
      ...a
    ];
  }
  const tf = (e) => Va[za[e]];
  function nf(e) {
    if (!e) return [];
    const t = [];
    return /DataSource$/.test(e) || t.push("bitfield"), Tr(e) && t.push("timeseries"), ln(e) && t.push("encoderChart"), t;
  }
  const fi = {
    VizEncoder: {
      width: 400,
      height: 380
    },
    VizTimeSeries: {
      width: 320,
      height: 240
    },
    VizBitField: {
      width: 320,
      height: 320
    }
  };
  function mc(e) {
    var _a2, _b;
    const { vizKind: t, position: n, targetNodeId: r = null, size: a } = e, o = za[t], s = `viz-${Date.now()}`, { nodes: i, edges: c, setNodes: l, setEdges: u, setManualLayout: v } = re.getState(), h = r ? i.filter((f) => {
      var _a3;
      return !(Ot(f.type) && f.type === o && ((_a3 = f.data) == null ? void 0 : _a3.targetNodeId) === r);
    }) : i, y = h.filter((f) => f.type !== "group").length, S = r ? (_b = (_a2 = h.find((f) => f.id === r)) == null ? void 0 : _a2.style) == null ? void 0 : _b["--node-bg"] : void 0, k = {
      id: s,
      type: o,
      position: n,
      style: {
        "--node-bg": S ?? Aa(y),
        width: (a == null ? void 0 : a.width) ?? fi[o].width,
        height: (a == null ? void 0 : a.height) ?? fi[o].height
      },
      data: {
        id: s,
        label: Va[o],
        vizKind: t,
        targetNodeId: r
      }
    }, d = Ha([
      ...h,
      k
    ], s);
    return l(d), u(ro(d, c)), v(true), s;
  }
  const rf = {
    Encoders: [
      "simpleEncoder",
      "encoderComparison"
    ],
    Classification: [
      "classifierComparison",
      "partial_classification",
      "labeledClassification",
      "multiModal"
    ],
    "Sequence Learning": [
      "sequence",
      "timeSeries",
      "pooling",
      "thirdOrderSequences"
    ],
    Pooling: [
      "simplePooler"
    ],
    "Context Learning": [
      "contextualAnomalyDetection",
      "multiContextSequence"
    ],
    "Data Sources": [
      "synflowSine",
      "synflowNoisyRamp",
      "synflowComplexSignal",
      "synflowDiscreteRepeating",
      "synflowDiscreteGrowing",
      "synflowDiscreteBranching"
    ],
    "Large-Scale Demos": [
      "largeSequence",
      "deepHierarchy",
      "wideParallel"
    ],
    "Scale Tests": [
      "scale8",
      "scale16",
      "scale32",
      "scale64"
    ]
  }, Ar = {
    encoderComparison: {
      name: "Encoder Comparison",
      description: "Compare 6 advanced encoder types with same input",
      version: "0.1.0",
      layout: {
        "elk.direction": "DOWN"
      },
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "Sine Wave",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 50,
                      frequency: 2,
                      phase: 0,
                      offset: 50
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        }
      ],
      blocks: [
        {
          id: "node-1",
          type: "FixedWeightTransformer",
          name: "Fixed Weight",
          params: {
            n: 64,
            w: 16,
            min_val: 0,
            max_val: 100,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-2",
          type: "TaperingWeightTransformer",
          name: "Tapering Weight",
          params: {
            n: 64,
            w: 16,
            min_val: 0,
            max_val: 100,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-3",
          type: "PeriodicScalarTransformer",
          name: "Periodic Scalar",
          params: {
            n: 64,
            w: 16,
            period: 40,
            min_val: 0,
            max_val: 100,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-4",
          type: "RandomizedPlaceCellTransformer",
          name: "Random Place Cell",
          params: {
            n: 64,
            bin_size: 15,
            min_val: 0,
            max_val: 100,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-5",
          type: "PeriodicCellTransformer",
          name: "Periodic Cell",
          params: {
            n: 64,
            min_period: 10,
            max_period: 50,
            l_frac: 0.5,
            min_val: 0,
            max_val: 100,
            num_t: 2,
            seed: 42
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-1",
          type: "scalarInput"
        },
        {
          source: "node-0",
          target: "node-2",
          type: "scalarInput"
        },
        {
          source: "node-0",
          target: "node-3",
          type: "scalarInput"
        },
        {
          source: "node-0",
          target: "node-4",
          type: "scalarInput"
        },
        {
          source: "node-0",
          target: "node-5",
          type: "scalarInput"
        }
      ],
      connections: [],
      learnedState: null
    },
    simpleEncoder: {
      name: "Simple Scalar Encoder",
      description: "Simple scalar encoder with icalar input data source",
      version: "0.1.0",
      layout: {
        "elk.direction": "RIGHT"
      },
      blocks: [
        {
          id: "node-6",
          type: "FixedWeightTransformer",
          name: "Simple Scalar Encoder",
          params: {
            min_val: 0,
            max_val: 1,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 42
          }
        }
      ],
      connections: [],
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "Sine Wave",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 0.5,
                      frequency: 0.5,
                      phase: 0,
                      offset: 0.5
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-6",
          type: "scalarInput"
        }
      ],
      learnedState: null
    },
    classifierComparison: {
      name: "Classifier Comparison",
      description: "Compare multiple configurations of the Cortical Classifier",
      version: "0.1.0",
      layout: {
        "elk.direction": "DOWN"
      },
      datasources: [
        {
          id: "source-0",
          type: "SynflowDiscreteDataSource",
          name: "4-State Sequence",
          params: {
            type: "repeating",
            patterns: [
              "State0",
              "State1",
              "State2",
              "State3"
            ],
            iters: 1,
            recur: 1,
            loop_mode: "restart"
          }
        },
        {
          id: "source-1",
          type: "SynflowDiscreteDataSource",
          name: "8-State Sequence",
          params: {
            type: "repeating",
            patterns: [
              "State0",
              "State1",
              "State2",
              "State3",
              "State4",
              "State5",
              "State6",
              "State7"
            ],
            iters: 1,
            recur: 1,
            loop_mode: "restart"
          }
        },
        {
          id: "source-2",
          type: "SynflowDiscreteDataSource",
          name: "16-State Sequence",
          params: {
            type: "repeating",
            patterns: [
              "State0",
              "State1",
              "State2",
              "State3",
              "State4",
              "State5",
              "State6",
              "State7",
              "State8",
              "State9",
              "State10",
              "State11",
              "State12",
              "State13",
              "State14",
              "State15"
            ],
            iters: 1,
            recur: 1,
            loop_mode: "restart"
          }
        }
      ],
      blocks: [
        {
          id: "encode-0",
          type: "DiscreteTransformer",
          name: "4-State Encoder",
          params: {
            num_v: 4,
            num_s: 64,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "encode-1",
          type: "DiscreteTransformer",
          name: "8-State Encoder",
          params: {
            num_v: 8,
            num_s: 128,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "encode-2",
          type: "DiscreteTransformer",
          name: "16-State Encoder",
          params: {
            num_v: 16,
            num_s: 256,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "cls-4-state-16-active",
          type: "PatternClassifier",
          name: "4-State Classifier",
          params: {
            num_l: 4,
            num_s: 64,
            num_as: 16,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2,
            seed: 0
          }
        },
        {
          id: "cls-8-state-16-active",
          type: "PatternClassifier",
          name: "8-State Classifier",
          params: {
            num_l: 8,
            num_s: 128,
            num_as: 16,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2,
            seed: 0
          }
        },
        {
          id: "cls-16-state-16-active",
          type: "PatternClassifier",
          name: "16-State Classifier",
          params: {
            num_l: 16,
            num_s: 256,
            num_as: 16,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2,
            seed: 0
          }
        }
      ],
      interfaces: [
        {
          source: "source-0",
          target: "encode-0",
          type: "discreteInput"
        },
        {
          source: "source-1",
          target: "encode-1",
          type: "discreteInput"
        },
        {
          source: "source-2",
          target: "encode-2",
          type: "discreteInput"
        },
        {
          source: "source-0",
          target: "cls-4-state-16-active",
          type: "labelInput"
        },
        {
          source: "source-1",
          target: "cls-8-state-16-active",
          type: "labelInput"
        },
        {
          source: "source-2",
          target: "cls-16-state-16-active",
          type: "labelInput"
        }
      ],
      connections: [
        {
          source: "encode-0",
          target: "cls-4-state-16-active",
          type: "input",
          timeOffset: 0
        },
        {
          source: "encode-1",
          target: "cls-8-state-16-active",
          type: "input",
          timeOffset: 0
        },
        {
          source: "encode-2",
          target: "cls-16-state-16-active",
          type: "input",
          timeOffset: 0
        }
      ],
      learnedState: null
    },
    partial_classification: {
      name: "Partial Classification",
      description: "Classify one signal out of two",
      version: "0.1.0",
      blocks: [
        {
          id: "node-2",
          type: "DiscreteTransformer",
          name: "Feature 1",
          params: {
            size: 64,
            bins: 16,
            num_v: 4,
            num_s: 64,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-3",
          type: "DiscreteTransformer",
          name: "Feature 2",
          params: {
            size: 64,
            bins: 16,
            num_v: 5,
            num_s: 64,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-5",
          type: "PatternClassifier",
          name: "Classifier",
          params: {
            num_l: 4,
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2,
            seed: 0
          }
        }
      ],
      connections: [
        {
          source: "node-2",
          target: "node-5",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-3",
          target: "node-5",
          type: "input",
          timeOffset: 0
        }
      ],
      datasources: [
        {
          id: "node-0",
          type: "SynflowDiscreteDataSource",
          name: "Sequential States 1",
          params: {
            type: "repeating",
            patterns: [
              "State0",
              "State1",
              "State2",
              "State3"
            ],
            iters: 1,
            recur: 1,
            loop_mode: "restart"
          }
        },
        {
          id: "node-1",
          type: "SynflowDiscreteDataSource",
          name: "Sequential States 2",
          params: {
            type: "repeating",
            patterns: [
              "State0",
              "State1",
              "State2",
              "State3",
              "State4"
            ],
            iters: 1,
            recur: 1,
            loop_mode: "restart"
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-2",
          type: "discreteInput"
        },
        {
          source: "node-1",
          target: "node-3",
          type: "discreteInput"
        },
        {
          source: "node-0",
          target: "node-5",
          type: "labelInput"
        }
      ],
      learnedState: null
    },
    labeledClassification: {
      name: "Labeled Classification",
      description: "Supervised learning with discrete labels for PatternClassifier",
      version: "0.1.0",
      datasources: [
        {
          id: "node-0",
          type: "SynflowDiscreteDataSource",
          name: "Sequential States 1",
          params: {
            type: "repeating",
            patterns: [
              "State0",
              "State1",
              "State2",
              "State3"
            ],
            iters: 3,
            recur: 1,
            loop_mode: "restart"
          }
        }
      ],
      blocks: [
        {
          id: "node-1",
          type: "DiscreteTransformer",
          name: "Discrete Transform",
          params: {
            num_v: 4,
            num_s: 64,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-2",
          type: "PatternClassifier",
          name: "Classifier",
          params: {
            num_l: 4,
            num_s: 64,
            num_as: 16,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2,
            seed: 0
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-1",
          type: "discreteInput"
        },
        {
          source: "node-0",
          target: "node-2",
          type: "labelInput"
        }
      ],
      connections: [
        {
          source: "node-1",
          target: "node-2",
          type: "input",
          timeOffset: 0
        }
      ],
      learnedState: null
    },
    multiModal: {
      name: "Multi-Modal Input",
      description: "Both scalar and discrete sources combined",
      version: "0.1.0",
      blocks: [
        {
          id: "node-2",
          type: "FixedWeightTransformer",
          name: "Scalar Path",
          params: {
            min_val: -10,
            max_val: 10,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-3",
          type: "DiscreteTransformer",
          name: "Discrete Path",
          params: {
            size: 64,
            bins: 16,
            num_v: 4,
            num_s: 64,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-4",
          type: "PatternPooler",
          name: "Combine Features",
          params: {
            num_s: 256,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            always_update: false,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-5",
          type: "PatternClassifier",
          name: "Joint Classifier",
          params: {
            num_l: 8,
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2,
            seed: 0
          }
        }
      ],
      connections: [
        {
          source: "node-2",
          target: "node-4",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-3",
          target: "node-4",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-4",
          target: "node-5",
          type: "input",
          timeOffset: 0
        }
      ],
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "Continuous Signal",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 10,
                      frequency: 1,
                      phase: 0,
                      offset: 0
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-1",
          type: "SynflowDiscreteDataSource",
          name: "Category Signal",
          params: {
            type: "repeating",
            patterns: [
              "State0",
              "State1",
              "State2",
              "State3"
            ],
            iters: 5,
            recur: 10,
            loop_mode: "restart"
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-2",
          type: "scalarInput"
        },
        {
          source: "node-1",
          target: "node-3",
          type: "discreteInput"
        },
        {
          source: "node-1",
          target: "node-5",
          type: "labelInput"
        }
      ],
      learnedState: null
    },
    sensorFusion: {
      name: "Sensor Fusion",
      description: "Multiple scalar sources simulating sensors",
      version: "0.1.0",
      blocks: [
        {
          id: "node-3",
          type: "FixedWeightTransformer",
          name: "Temp Transform",
          params: {
            min_val: 0,
            max_val: 40,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-4",
          type: "FixedWeightTransformer",
          name: "Humidity Transform",
          params: {
            min_val: 30,
            max_val: 90,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-5",
          type: "FixedWeightTransformer",
          name: "Pressure Transform",
          params: {
            min_val: 950,
            max_val: 1050,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-6",
          type: "PatternPooler",
          name: "Sensor Fusion",
          params: {
            num_s: 256,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            always_update: false,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-7",
          type: "PatternClassifier",
          name: "Weather Prediction",
          params: {
            num_l: 8,
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2,
            seed: 0
          }
        }
      ],
      connections: [
        {
          source: "node-3",
          target: "node-6",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-4",
          target: "node-6",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-5",
          target: "node-6",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-6",
          target: "node-7",
          type: "input",
          timeOffset: 0
        }
      ],
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "Temperature",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 15,
                      frequency: 1,
                      offset: 0,
                      phase: 0
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-1",
          type: "SynflowScalarDataSource",
          name: "Humidity",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 20,
                      frequency: 1,
                      offset: 0,
                      phase: 0
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-2",
          type: "SynflowScalarDataSource",
          name: "Pressure",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 1,
                      frequency: 1,
                      offset: 0,
                      phase: 0
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-3",
          type: "scalarInput"
        },
        {
          source: "node-1",
          target: "node-4",
          type: "scalarInput"
        },
        {
          source: "node-2",
          target: "node-5",
          type: "scalarInput"
        }
      ],
      learnedState: null
    },
    sequence: {
      name: "Sequence Learning",
      description: "Learn and predict temporal sequences",
      version: "0.1.0",
      blocks: [
        {
          id: "node-1",
          type: "FixedWeightTransformer",
          name: "Scalar Transformer",
          params: {
            min_val: 0,
            max_val: 1,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-2",
          type: "SequenceLearner",
          name: "Sequence Learner",
          params: {
            num_c: 64,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false,
            seed: 42
          }
        },
        {
          id: "node-3",
          type: "PatternPooler",
          name: "Pattern Pooler",
          params: {
            num_s: 256,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            always_update: false,
            num_t: 2,
            seed: 42
          }
        }
      ],
      connections: [
        {
          source: "node-1",
          target: "node-2",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-2",
          target: "node-3",
          type: "input",
          timeOffset: 0
        }
      ],
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "Sine Wave Data",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 0.5,
                      frequency: 1,
                      phase: 0,
                      offset: 0.5
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-1",
          type: "scalarInput"
        }
      ],
      learnedState: null
    },
    timeSeries: {
      name: "Time Series Classifier",
      description: "Data source driving temporal sequence learning",
      version: "0.1.0",
      blocks: [
        {
          id: "node-1",
          type: "FixedWeightTransformer",
          name: "Feature Extract",
          params: {
            min_val: -10,
            max_val: 10,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-2",
          type: "SequenceLearner",
          name: "Temporal Memory",
          params: {
            num_c: 64,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false,
            seed: 42
          }
        },
        {
          id: "node-3",
          type: "PatternClassifier",
          name: "Prediction",
          params: {
            num_l: 8,
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2,
            seed: 0
          }
        }
      ],
      connections: [
        {
          source: "node-1",
          target: "node-2",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-2",
          target: "node-3",
          type: "input",
          timeOffset: 0
        }
      ],
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "Time Series Data",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 10,
                      frequency: 1,
                      offset: 0,
                      phase: 0
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-1",
          type: "scalarInput"
        }
      ],
      learnedState: null
    },
    pooling: {
      name: "Pooled Sequence Learning",
      description: "Pool features from multiple inputs",
      version: "0.1.0",
      blocks: [
        {
          id: "node-3",
          type: "FixedWeightTransformer",
          name: "Input A",
          params: {
            min_val: 0,
            max_val: 1,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-4",
          type: "FixedWeightTransformer",
          name: "Input B",
          params: {
            min_val: 0,
            max_val: 1,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-5",
          type: "FixedWeightTransformer",
          name: "Input C",
          params: {
            min_val: 0,
            max_val: 1,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-6",
          type: "PatternPooler",
          name: "Feature Pooler",
          params: {
            num_s: 192,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            always_update: false,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-7",
          type: "SequenceLearner",
          name: "Temporal Integration",
          params: {
            num_c: 192,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false,
            seed: 42
          }
        }
      ],
      connections: [
        {
          source: "node-3",
          target: "node-6",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-4",
          target: "node-6",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-5",
          target: "node-6",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-6",
          target: "node-7",
          type: "input",
          timeOffset: 0
        }
      ],
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "Sine Wave 1",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 0.5,
                      frequency: 1,
                      phase: 1.571,
                      offset: 0.5
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-1",
          type: "SynflowScalarDataSource",
          name: "Sine Wave 2",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 0.5,
                      frequency: 1,
                      phase: 0.785,
                      offset: 0.5
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-2",
          type: "SynflowScalarDataSource",
          name: "Sine Wave 3",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 0.5,
                      frequency: 1,
                      phase: 2.356,
                      offset: 0.5
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-3",
          type: "scalarInput"
        },
        {
          source: "node-1",
          target: "node-4",
          type: "scalarInput"
        },
        {
          source: "node-2",
          target: "node-5",
          type: "scalarInput"
        }
      ],
      learnedState: null
    },
    thirdOrderSequences: {
      name: "Third-Order Sequences",
      description: "Time-delayed feedback loop with context learning",
      version: "0.1.0",
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "Sine Wave",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 0.5,
                      frequency: 1,
                      phase: 0,
                      offset: 0.5
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        }
      ],
      blocks: [
        {
          id: "node-1",
          type: "FixedWeightTransformer",
          name: "Encoder",
          params: {
            min_val: 0,
            max_val: 1,
            n: 256,
            w: 20,
            num_t: 2,
            seed: 0
          }
        },
        {
          id: "node-2",
          type: "ContextLearner",
          name: "Context Learner",
          params: {
            num_c: 256,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: true,
            seed: 1
          }
        },
        {
          id: "node-3",
          type: "PatternPooler",
          name: "Pattern Pooler",
          params: {
            num_s: 256,
            num_as: 20,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            always_update: true,
            num_t: 2,
            seed: 2
          }
        },
        {
          id: "node-4",
          type: "SequenceLearner",
          name: "Sequence Learner",
          params: {
            num_c: 256,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: true,
            seed: 3
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-1",
          type: "scalarInput"
        }
      ],
      connections: [
        {
          source: "node-1",
          target: "node-2",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-2",
          target: "node-3",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-3",
          target: "node-4",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-2",
          target: "node-2",
          type: "context",
          timeOffset: 1
        },
        {
          source: "node-4",
          target: "node-2",
          type: "context",
          timeOffset: 1
        }
      ],
      learnedState: null
    },
    unpooled_multisequence: {
      name: "Multi-Input Sequence Learning",
      description: "Pool features from multiple inputs",
      version: "0.1.0",
      blocks: [
        {
          id: "node-3",
          type: "FixedWeightTransformer",
          name: "Input A",
          params: {
            min_val: 0,
            max_val: 1,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-4",
          type: "FixedWeightTransformer",
          name: "Input B",
          params: {
            min_val: 0,
            max_val: 1,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-5",
          type: "FixedWeightTransformer",
          name: "Input C",
          params: {
            min_val: 0,
            max_val: 1,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-6",
          type: "SequenceLearner",
          name: "Temporal Integration",
          params: {
            num_c: 192,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false,
            seed: 42
          }
        }
      ],
      connections: [
        {
          source: "node-3",
          target: "node-6",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-4",
          target: "node-6",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-5",
          target: "node-6",
          type: "input",
          timeOffset: 0
        }
      ],
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "Sine Wave 1",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 0.5,
                      frequency: 1,
                      offset: 0.5,
                      phase: 1.57
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-1",
          type: "SynflowScalarDataSource",
          name: "Sine Wave 2",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 0.5,
                      frequency: 1,
                      offset: 0.5,
                      phase: 0.785
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-2",
          type: "SynflowScalarDataSource",
          name: "Sine Wave 3",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 0.5,
                      frequency: 1,
                      offset: 0.5,
                      phase: 2.356
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-3",
          type: "scalarInput"
        },
        {
          source: "node-1",
          target: "node-4",
          type: "scalarInput"
        },
        {
          source: "node-2",
          target: "node-5",
          type: "scalarInput"
        }
      ],
      learnedState: null
    },
    contextualAnomalyDetection: {
      name: "Contextual Anomaly Detection",
      description: "Detect anomalies based on changing context",
      version: "0.1.0",
      blocks: [
        {
          id: "node-2",
          type: "FixedWeightTransformer",
          name: "Main Encoder",
          params: {
            min_val: 25,
            max_val: 75,
            n: 128,
            w: 16,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-3",
          type: "FixedWeightTransformer",
          name: "Context Encoder",
          params: {
            min_val: 20,
            max_val: 60,
            n: 128,
            w: 16,
            num_t: 2,
            seed: 43
          }
        },
        {
          id: "node-4",
          type: "ContextLearner",
          name: "Context Memory",
          params: {
            num_c: 128,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false,
            seed: 42
          }
        }
      ],
      connections: [
        {
          source: "node-2",
          target: "node-4",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-3",
          target: "node-4",
          type: "context",
          timeOffset: 0
        }
      ],
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "Main Signal",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 25,
                      frequency: 3,
                      phase: 0,
                      offset: 50
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-1",
          type: "SynflowScalarDataSource",
          name: "Context Signal",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 20,
                      frequency: 1,
                      phase: 0,
                      offset: 40
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-2",
          type: "scalarInput"
        },
        {
          source: "node-1",
          target: "node-3",
          type: "scalarInput"
        }
      ],
      learnedState: null
    },
    multiContextSequence: {
      name: "Multi-Context Sequence Learning",
      description: "Sequence learning with dual context inputs",
      version: "0.1.0",
      blocks: [
        {
          id: "node-3",
          type: "FixedWeightTransformer",
          name: "Input Encoder",
          params: {
            min_val: 20,
            max_val: 80,
            n: 128,
            w: 16,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-4",
          type: "FixedWeightTransformer",
          name: "Context A Encoder",
          params: {
            min_val: 15,
            max_val: 45,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 43
          }
        },
        {
          id: "node-5",
          type: "FixedWeightTransformer",
          name: "Context B Encoder",
          params: {
            min_val: 15,
            max_val: 35,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 44
          }
        },
        {
          id: "node-6",
          type: "ContextLearner",
          name: "Dual Context Memory",
          params: {
            num_c: 128,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false,
            seed: 42
          }
        }
      ],
      connections: [
        {
          source: "node-3",
          target: "node-6",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-4",
          target: "node-6",
          type: "context",
          timeOffset: 0
        },
        {
          source: "node-5",
          target: "node-6",
          type: "context",
          timeOffset: 0
        }
      ],
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "Primary Input",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 30,
                      frequency: 2,
                      phase: 0,
                      offset: 50
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-1",
          type: "SynflowScalarDataSource",
          name: "Context A",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 15,
                      frequency: 1,
                      phase: 0,
                      offset: 30
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-2",
          type: "SynflowScalarDataSource",
          name: "Context B",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "bounded_noise",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      min_value: 0,
                      max_value: 1,
                      seed: 42
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-3",
          type: "scalarInput"
        },
        {
          source: "node-1",
          target: "node-4",
          type: "scalarInput"
        },
        {
          source: "node-2",
          target: "node-5",
          type: "scalarInput"
        }
      ],
      learnedState: null
    },
    simplePooler: {
      name: "Pooling: Simple Pattern Pooler",
      description: "Sine wave \u2192 FixedWeight encoder \u2192 PatternPooler (unsupervised feature pooling)",
      version: "0.1.0",
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "Sine Wave",
          params: {
            layers: [
              {
                priority: 0,
                name: "sine_wave",
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 50,
                      frequency: 2,
                      phase: 0,
                      offset: 50
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        }
      ],
      blocks: [
        {
          id: "node-1",
          type: "FixedWeightTransformer",
          name: "FixedWeight Encoder",
          params: {
            n: 16,
            w: 5,
            min_val: 0,
            max_val: 100,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-2",
          type: "PatternPooler",
          name: "Pattern Pooler",
          params: {
            num_s: 1024,
            num_as: 40,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            always_update: false,
            num_t: 2,
            seed: 0
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-1",
          type: "scalarInput"
        }
      ],
      connections: [
        {
          source: "node-1",
          target: "node-2",
          type: "input",
          timeOffset: 0
        }
      ],
      learnedState: null
    },
    synflowSine: {
      name: "Scalar: Sine Wave",
      description: "WASM-based sine wave datasource using synflow library",
      version: "0.1.0",
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "Sine Wave",
          params: {
            layers: [
              {
                priority: 0,
                name: "sine_wave",
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 100,
                        duration: 3
                      },
                      amplitude: 1,
                      frequency: 5,
                      phase: 0,
                      offset: 0
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        }
      ],
      blocks: [
        {
          id: "node-1",
          type: "FixedWeightTransformer",
          name: "Encoder",
          params: {
            min_val: -2,
            max_val: 2,
            n: 128,
            w: 16,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-2",
          type: "SequenceLearner",
          name: "Sequence Learner",
          params: {
            num_c: 128,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false,
            seed: 42
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-1",
          type: "scalarInput"
        }
      ],
      connections: [
        {
          source: "node-1",
          target: "node-2",
          type: "input",
          timeOffset: 0
        }
      ],
      learnedState: null
    },
    synflowNoisyRamp: {
      name: "Scalar: Noisy Ramp",
      description: "Multi-layer synflow datasource with ramp + noise",
      version: "0.1.0",
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "Noisy Ramp",
          params: {
            layers: [
              {
                priority: 0,
                name: "baseline",
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "ramp",
                      time: {
                        rate: 100,
                        duration: 3
                      },
                      start: 0,
                      end: 10
                    },
                    start_time: 0
                  }
                ]
              },
              {
                priority: 1,
                name: "noise",
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "bounded_noise",
                      time: {
                        rate: 100,
                        duration: 3
                      },
                      min_value: -0.5,
                      max_value: 0.5,
                      seed: 42
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        }
      ],
      blocks: [
        {
          id: "node-1",
          type: "FixedWeightTransformer",
          name: "Encoder",
          params: {
            min_val: -0.5,
            max_val: 10.5,
            n: 128,
            w: 8,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-2",
          type: "SequenceLearner",
          name: "Sequence Learner",
          params: {
            num_c: 128,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false,
            seed: 42
          }
        },
        {
          id: "node-3",
          type: "PatternPooler",
          name: "Pattern Pooler",
          params: {
            num_s: 128,
            num_as: 16,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            always_update: false,
            num_t: 2,
            seed: 42
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-1",
          type: "scalarInput"
        }
      ],
      connections: [
        {
          source: "node-1",
          target: "node-2",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-2",
          target: "node-3",
          type: "input",
          timeOffset: 0
        }
      ],
      learnedState: null
    },
    synflowComplexSignal: {
      name: "Scalar: Complex Multi-Event Signal",
      description: "Background sine wave with event-based square pulses",
      version: "0.1.0",
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "Complex Signal",
          params: {
            layers: [
              {
                priority: 0,
                name: "background",
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 100,
                        duration: 5
                      },
                      amplitude: 2,
                      frequency: 2,
                      phase: 0,
                      offset: 0
                    },
                    start_time: 0
                  }
                ]
              },
              {
                priority: 1,
                name: "events",
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "square",
                      time: {
                        rate: 100,
                        duration: 0.5
                      },
                      amplitude: 5,
                      frequency: 5,
                      duty_cycle: 0.5
                    },
                    start_time: 1
                  },
                  {
                    series: {
                      type: "square",
                      time: {
                        rate: 100,
                        duration: 0.5
                      },
                      amplitude: 5,
                      frequency: 4,
                      duty_cycle: 0.5
                    },
                    start_time: 3
                  }
                ]
              }
            ]
          }
        }
      ],
      blocks: [
        {
          id: "node-1",
          type: "FixedWeightTransformer",
          name: "Encoder",
          params: {
            min_val: -5,
            max_val: 10,
            n: 256,
            w: 32,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-2",
          type: "SequenceLearner",
          name: "Sequence Learner",
          params: {
            num_c: 256,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 16,
            d_thresh: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false,
            seed: 42
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-1",
          type: "scalarInput"
        }
      ],
      connections: [
        {
          source: "node-1",
          target: "node-2",
          type: "input",
          timeOffset: 0
        }
      ],
      learnedState: null
    },
    synflowDiscreteRepeating: {
      name: "Discrete: Repeating Pattern",
      description: "Discrete sequence datasource with repeating pattern (traffic light simulation)",
      version: "0.1.0",
      datasources: [
        {
          id: "node-0",
          type: "SynflowDiscreteDataSource",
          name: "Traffic Light",
          params: {
            type: "repeating",
            patterns: [
              "Red",
              "Green",
              "Blue"
            ],
            iters: 5,
            recur: 3,
            loop_mode: "restart"
          }
        }
      ],
      blocks: [
        {
          id: "node-1",
          type: "DiscreteTransformer",
          name: "State Encoder",
          params: {
            num_v: 3,
            num_s: 128,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-2",
          type: "SequenceLearner",
          name: "Pattern Learner",
          params: {
            num_c: 128,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false,
            seed: 42
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-1",
          type: "discreteInput"
        }
      ],
      connections: [
        {
          source: "node-1",
          target: "node-2",
          type: "input",
          timeOffset: 0
        }
      ],
      learnedState: null
    },
    synflowDiscreteGrowing: {
      name: "Discrete: Growing Pattern",
      description: "Discrete sequence with gradually expanding pattern set (A \u2192 AB \u2192 ABC)",
      version: "0.1.0",
      datasources: [
        {
          id: "node-0",
          type: "SynflowDiscreteDataSource",
          name: "Growing Vocabulary",
          params: {
            type: "growing",
            patterns: [
              "Alpha",
              "Beta",
              "Gamma"
            ],
            iters: 1,
            recur: 4,
            loop_mode: "restart"
          }
        }
      ],
      blocks: [
        {
          id: "node-1",
          type: "DiscreteTransformer",
          name: "Symbol Encoder",
          params: {
            num_v: 3,
            num_s: 128,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-2",
          type: "SequenceLearner",
          name: "Sequence Learner",
          params: {
            num_c: 128,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false,
            seed: 42
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-1",
          type: "discreteInput"
        }
      ],
      connections: [
        {
          source: "node-1",
          target: "node-2",
          type: "input",
          timeOffset: 0
        }
      ],
      learnedState: null
    },
    synflowDiscreteBranching: {
      name: "Discrete: Branching Pattern",
      description: "Discrete sequence with branching state machine pattern",
      version: "0.1.0",
      datasources: [
        {
          id: "node-0",
          type: "SynflowDiscreteDataSource",
          name: "State Machine",
          params: {
            type: "branching",
            patterns: [
              "Start",
              "PathA",
              "PathB",
              "PathC"
            ],
            iters: 1,
            recur: 3,
            loop_mode: "restart"
          }
        }
      ],
      blocks: [
        {
          id: "node-1",
          type: "DiscreteTransformer",
          name: "State Encoder",
          params: {
            num_v: 4,
            num_s: 128,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-2",
          type: "SequenceLearner",
          name: "Branch Learner",
          params: {
            num_c: 128,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false,
            seed: 42
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-1",
          type: "discreteInput"
        }
      ],
      connections: [
        {
          source: "node-1",
          target: "node-2",
          type: "input",
          timeOffset: 0
        }
      ],
      learnedState: null
    },
    largeSequence: {
      name: "High-Dimensional Blocks",
      description: "High-dimensional sequence learning (512 columns)",
      version: "0.1.0",
      blocks: [
        {
          id: "node-1",
          type: "FixedWeightTransformer",
          name: "Encoder",
          params: {
            min_val: 0,
            max_val: 100,
            n: 512,
            w: 64,
            num_t: 3,
            seed: 42
          }
        },
        {
          id: "node-2",
          type: "SequenceLearner",
          name: "Temporal Memory (512 cols)",
          params: {
            num_c: 512,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 16,
            d_thresh: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 3,
            always_update: false,
            seed: 42
          }
        }
      ],
      connections: [
        {
          source: "node-1",
          target: "node-2",
          type: "input",
          timeOffset: 0
        }
      ],
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "Signal",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 50,
                      frequency: 1,
                      phase: 0,
                      offset: 50
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-1",
          type: "scalarInput"
        }
      ],
      learnedState: null
    },
    deepHierarchy: {
      name: "Deep Network",
      description: "Multi-layer hierarchical learning (5 levels)",
      version: "0.1.0",
      blocks: [
        {
          id: "node-1",
          type: "FixedWeightTransformer",
          name: "L1 Encoder",
          params: {
            min_val: 0,
            max_val: 100,
            n: 256,
            w: 32,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-2",
          type: "PatternPooler",
          name: "L2 Pooler",
          params: {
            num_s: 256,
            num_as: 32,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            always_update: false,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-3",
          type: "PatternPooler",
          name: "L3 Pooler",
          params: {
            num_s: 128,
            num_as: 16,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            always_update: false,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-4",
          type: "PatternPooler",
          name: "L4 Pooler",
          params: {
            num_s: 64,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            always_update: false,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-5",
          type: "PatternClassifier",
          name: "L5 Classifier",
          params: {
            num_l: 5,
            num_s: 64,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2,
            seed: 0
          }
        }
      ],
      connections: [
        {
          source: "node-1",
          target: "node-2",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-2",
          target: "node-3",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-3",
          target: "node-4",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-4",
          target: "node-5",
          type: "input",
          timeOffset: 0
        }
      ],
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "Input Signal",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 50,
                      frequency: 2,
                      phase: 0,
                      offset: 50
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-1",
          type: "scalarInput"
        }
      ],
      learnedState: null
    },
    wideParallel: {
      name: "Wide Network",
      description: "Many parallel paths converging (6 inputs)",
      version: "0.1.0",
      layout: {
        "elk.direction": "DOWN"
      },
      blocks: [
        {
          id: "node-6",
          type: "FixedWeightTransformer",
          name: "Enc 1",
          params: {
            min_val: 0,
            max_val: 20,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 42
          }
        },
        {
          id: "node-7",
          type: "FixedWeightTransformer",
          name: "Enc 2",
          params: {
            min_val: 0,
            max_val: 20,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 43
          }
        },
        {
          id: "node-8",
          type: "FixedWeightTransformer",
          name: "Enc 3",
          params: {
            min_val: 0,
            max_val: 20,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 44
          }
        },
        {
          id: "node-9",
          type: "FixedWeightTransformer",
          name: "Enc 4",
          params: {
            min_val: 0,
            max_val: 20,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 45
          }
        },
        {
          id: "node-10",
          type: "FixedWeightTransformer",
          name: "Enc 5",
          params: {
            min_val: 0,
            max_val: 20,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 46
          }
        },
        {
          id: "node-11",
          type: "FixedWeightTransformer",
          name: "Enc 6",
          params: {
            min_val: 0,
            max_val: 20,
            n: 64,
            w: 8,
            num_t: 2,
            seed: 47
          }
        },
        {
          id: "node-12",
          type: "SequenceLearner",
          name: "Convergence (384 inputs)",
          params: {
            num_c: 384,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 16,
            d_thresh: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false,
            seed: 42
          }
        }
      ],
      connections: [
        {
          source: "node-6",
          target: "node-12",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-7",
          target: "node-12",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-8",
          target: "node-12",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-9",
          target: "node-12",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-10",
          target: "node-12",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-11",
          target: "node-12",
          type: "input",
          timeOffset: 0
        }
      ],
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "Input 1",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 10,
                      frequency: 1,
                      phase: 0,
                      offset: 10
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-1",
          type: "SynflowScalarDataSource",
          name: "Input 2",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 10,
                      frequency: 2,
                      phase: 0,
                      offset: 10
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-2",
          type: "SynflowScalarDataSource",
          name: "Input 3",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 10,
                      frequency: 3,
                      phase: 0,
                      offset: 10
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-3",
          type: "SynflowScalarDataSource",
          name: "Input 4",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 10,
                      frequency: 4,
                      phase: 0,
                      offset: 10
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-4",
          type: "SynflowScalarDataSource",
          name: "Input 5",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 10,
                      frequency: 5,
                      phase: 0,
                      offset: 10
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-5",
          type: "SynflowScalarDataSource",
          name: "Input 6",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 10,
                      frequency: 6,
                      phase: 0,
                      offset: 10
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-6",
          type: "scalarInput"
        },
        {
          source: "node-1",
          target: "node-7",
          type: "scalarInput"
        },
        {
          source: "node-2",
          target: "node-8",
          type: "scalarInput"
        },
        {
          source: "node-3",
          target: "node-9",
          type: "scalarInput"
        },
        {
          source: "node-4",
          target: "node-10",
          type: "scalarInput"
        },
        {
          source: "node-5",
          target: "node-11",
          type: "scalarInput"
        }
      ],
      learnedState: null
    },
    scale8: {
      name: "Scale Test: 8 Nodes",
      description: "Small network with 8 nodes using all block types",
      version: "0.1.0",
      blocks: [
        {
          id: "node-2",
          type: "FixedWeightTransformer",
          name: "FixedWeightTransformer",
          params: {
            min_val: 0,
            max_val: 100,
            n: 32,
            w: 4,
            num_t: 2
          }
        },
        {
          id: "node-3",
          type: "DiscreteTransformer",
          name: "DiscreteTransformer",
          params: {
            num_v: 8,
            num_s: 32,
            num_as: 4,
            num_t: 2
          }
        },
        {
          id: "node-4",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 64,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-5",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 64,
            num_spc: 8,
            num_dps: 8,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-6",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 128,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-7",
          type: "PatternClassifier",
          name: "PatternClassifier",
          params: {
            num_l: 10,
            alpha: 1e-3
          }
        }
      ],
      connections: [
        {
          source: "node-2",
          target: "node-4",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-3",
          target: "node-4",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-4",
          target: "node-5",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-5",
          target: "node-6",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-6",
          target: "node-7",
          type: "input",
          timeOffset: 0
        }
      ],
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "ScalarDataSource",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 50,
                      frequency: 2,
                      phase: 0,
                      offset: 50
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-1",
          type: "SynflowDiscreteDataSource",
          name: "DiscreteDataSource",
          params: {
            type: "repeating",
            patterns: [
              "State0",
              "State1",
              "State2",
              "State3",
              "State4",
              "State5",
              "State6",
              "State7"
            ],
            iters: 5,
            recur: 10,
            loop_mode: "restart"
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-2",
          type: "scalarInput"
        },
        {
          source: "node-1",
          target: "node-3",
          type: "discreteInput"
        },
        {
          source: "node-1",
          target: "node-7",
          type: "labelInput"
        }
      ],
      learnedState: null
    },
    scale16: {
      name: "Scale Test: 16 Nodes",
      description: "Medium network with 16 nodes - dual pathway architecture",
      version: "0.1.0",
      blocks: [
        {
          id: "node-2",
          type: "FixedWeightTransformer",
          name: "FixedWeightTransformer",
          params: {
            min_val: 0,
            max_val: 100,
            n: 32,
            w: 4,
            num_t: 2
          }
        },
        {
          id: "node-3",
          type: "FixedWeightTransformer",
          name: "FixedWeightTransformer",
          params: {
            min_val: 0,
            max_val: 100,
            n: 32,
            w: 4,
            num_t: 2
          }
        },
        {
          id: "node-4",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 64,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-5",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 64,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-6",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-9",
          type: "DiscreteTransformer",
          name: "DiscreteTransformer",
          params: {
            num_v: 10,
            num_s: 32,
            num_as: 4,
            num_t: 2
          }
        },
        {
          id: "node-10",
          type: "DiscreteTransformer",
          name: "DiscreteTransformer",
          params: {
            num_v: 8,
            num_s: 32,
            num_as: 4,
            num_t: 2
          }
        },
        {
          id: "node-11",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 64,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-12",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 64,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-13",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 256,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-14",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 256,
            num_spc: 12,
            num_dps: 12,
            num_rpd: 16,
            d_thresh: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-15",
          type: "PatternClassifier",
          name: "PatternClassifier",
          params: {
            num_l: 12,
            alpha: 1e-3
          }
        }
      ],
      connections: [
        {
          source: "node-2",
          target: "node-4",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-3",
          target: "node-4",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-4",
          target: "node-5",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-5",
          target: "node-6",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-9",
          target: "node-11",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-10",
          target: "node-11",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-11",
          target: "node-12",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-6",
          target: "node-13",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-12",
          target: "node-13",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-13",
          target: "node-14",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-14",
          target: "node-15",
          type: "input",
          timeOffset: 0
        }
      ],
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "ScalarDataSource",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 50,
                      frequency: 1,
                      phase: 0,
                      offset: 50
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-1",
          type: "SynflowScalarDataSource",
          name: "ScalarDataSource",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sawtooth",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 40,
                      frequency: 2,
                      offset: 50
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-7",
          type: "SynflowDiscreteDataSource",
          name: "DiscreteDataSource",
          params: {
            type: "repeating",
            patterns: [
              "State0",
              "State1",
              "State2",
              "State3",
              "State4",
              "State5",
              "State6",
              "State7",
              "State8",
              "State9"
            ],
            iters: 5,
            recur: 10,
            loop_mode: "restart"
          }
        },
        {
          id: "node-8",
          type: "SynflowDiscreteDataSource",
          name: "DiscreteDataSource",
          params: {
            type: "ambiguous_middle",
            first_pattern: "State0",
            last_pattern: "State7",
            patterns: [
              "State1",
              "State2",
              "State3",
              "State4",
              "State5",
              "State6"
            ],
            iters: 3,
            recur: 10
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-2",
          type: "scalarInput"
        },
        {
          source: "node-1",
          target: "node-3",
          type: "scalarInput"
        },
        {
          source: "node-7",
          target: "node-9",
          type: "discreteInput"
        },
        {
          source: "node-8",
          target: "node-10",
          type: "discreteInput"
        },
        {
          source: "node-7",
          target: "node-15",
          type: "labelInput"
        }
      ],
      learnedState: null
    },
    scale32: {
      name: "Scale Test: 32 Nodes",
      description: "Large network with 32 nodes - quad pathway with context",
      version: "0.1.0",
      blocks: [
        {
          id: "node-2",
          type: "FixedWeightTransformer",
          name: "FixedWeightTransformer",
          params: {
            min_val: 0,
            max_val: 100,
            n: 24,
            w: 4,
            num_t: 2
          }
        },
        {
          id: "node-3",
          type: "FixedWeightTransformer",
          name: "FixedWeightTransformer",
          params: {
            min_val: 0,
            max_val: 100,
            n: 24,
            w: 4,
            num_t: 2
          }
        },
        {
          id: "node-4",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 48,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-5",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 48,
            num_spc: 8,
            num_dps: 8,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-8",
          type: "DiscreteTransformer",
          name: "DiscreteTransformer",
          params: {
            num_v: 12,
            num_s: 24,
            num_as: 4,
            num_t: 2
          }
        },
        {
          id: "node-9",
          type: "DiscreteTransformer",
          name: "DiscreteTransformer",
          params: {
            num_v: 10,
            num_s: 24,
            num_as: 4,
            num_t: 2
          }
        },
        {
          id: "node-10",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 48,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-11",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 48,
            num_spc: 8,
            num_dps: 8,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-14",
          type: "FixedWeightTransformer",
          name: "FixedWeightTransformer",
          params: {
            min_val: 0,
            max_val: 100,
            n: 24,
            w: 4,
            num_t: 2
          }
        },
        {
          id: "node-15",
          type: "DiscreteTransformer",
          name: "DiscreteTransformer",
          params: {
            num_v: 8,
            num_s: 24,
            num_as: 4,
            num_t: 2
          }
        },
        {
          id: "node-16",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 48,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-17",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 48,
            num_spc: 8,
            num_dps: 8,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-18",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 96,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-20",
          type: "FixedWeightTransformer",
          name: "FixedWeightTransformer",
          params: {
            min_val: 0,
            max_val: 100,
            n: 32,
            w: 4,
            num_t: 2
          }
        },
        {
          id: "node-21",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 64,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-22",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 64,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-23",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-24",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 144,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-25",
          type: "ContextLearner",
          name: "ContextLearner",
          params: {
            num_c: 144,
            num_spc: 12,
            num_dps: 12,
            num_rpd: 16,
            d_thresh: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-26",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 256,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-27",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 256,
            num_spc: 12,
            num_dps: 12,
            num_rpd: 16,
            d_thresh: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-28",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 512,
            num_as: 16,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-29",
          type: "PatternClassifier",
          name: "PatternClassifier",
          params: {
            num_l: 15,
            alpha: 1e-3
          }
        }
      ],
      connections: [
        {
          source: "node-2",
          target: "node-4",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-3",
          target: "node-4",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-4",
          target: "node-5",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-8",
          target: "node-10",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-9",
          target: "node-10",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-10",
          target: "node-11",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-14",
          target: "node-16",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-15",
          target: "node-16",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-16",
          target: "node-17",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-17",
          target: "node-18",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-20",
          target: "node-21",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-21",
          target: "node-22",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-22",
          target: "node-23",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-5",
          target: "node-24",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-11",
          target: "node-24",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-18",
          target: "node-24",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-24",
          target: "node-25",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-23",
          target: "node-25",
          type: "context",
          timeOffset: 0
        },
        {
          source: "node-25",
          target: "node-26",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-26",
          target: "node-27",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-27",
          target: "node-28",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-28",
          target: "node-29",
          type: "input",
          timeOffset: 0
        }
      ],
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "ScalarDataSource",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 50,
                      frequency: 1,
                      phase: 0,
                      offset: 50
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-1",
          type: "SynflowScalarDataSource",
          name: "ScalarDataSource",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sawtooth",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 45,
                      frequency: 15,
                      offset: 50
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-6",
          type: "SynflowDiscreteDataSource",
          name: "DiscreteDataSource",
          params: {
            type: "repeating",
            patterns: [
              "State0",
              "State1",
              "State2",
              "State3",
              "State4",
              "State5",
              "State6",
              "State7",
              "State8",
              "State9",
              "State10",
              "State11"
            ],
            iters: 5,
            recur: 10,
            loop_mode: "restart"
          }
        },
        {
          id: "node-7",
          type: "SynflowDiscreteDataSource",
          name: "DiscreteDataSource",
          params: {
            type: "ambiguous_middle",
            first_pattern: "State0",
            last_pattern: "State9",
            patterns: [
              "State1",
              "State2",
              "State3",
              "State4",
              "State5",
              "State6",
              "State7",
              "State8"
            ],
            iters: 4,
            recur: 10
          }
        },
        {
          id: "node-12",
          type: "SynflowScalarDataSource",
          name: "ScalarDataSource",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sawtooth",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 60,
                      frequency: 2,
                      offset: 50
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-13",
          type: "SynflowDiscreteDataSource",
          name: "DiscreteDataSource",
          params: {
            type: "repeating",
            patterns: [
              "State0",
              "State1",
              "State2",
              "State3",
              "State4",
              "State5",
              "State6",
              "State7"
            ],
            iters: 6,
            recur: 10,
            loop_mode: "restart"
          }
        },
        {
          id: "node-19",
          type: "SynflowScalarDataSource",
          name: "ScalarDataSource",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 30,
                      frequency: 0.5,
                      phase: 0,
                      offset: 50
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-2",
          type: "scalarInput"
        },
        {
          source: "node-1",
          target: "node-3",
          type: "scalarInput"
        },
        {
          source: "node-6",
          target: "node-8",
          type: "discreteInput"
        },
        {
          source: "node-7",
          target: "node-9",
          type: "discreteInput"
        },
        {
          source: "node-12",
          target: "node-14",
          type: "scalarInput"
        },
        {
          source: "node-13",
          target: "node-15",
          type: "discreteInput"
        },
        {
          source: "node-19",
          target: "node-20",
          type: "scalarInput"
        },
        {
          source: "node-6",
          target: "node-29",
          type: "labelInput"
        }
      ],
      learnedState: null
    },
    scale64: {
      name: "Scale Test: 64 Nodes",
      description: "Very large network with 64 nodes - 8 parallel pathways",
      version: "0.1.0",
      blocks: [
        {
          id: "node-1",
          type: "FixedWeightTransformer",
          name: "FixedWeightTransformer",
          params: {
            min_val: 0,
            max_val: 100,
            n: 16,
            w: 4,
            num_t: 2
          }
        },
        {
          id: "node-2",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 32,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-3",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 32,
            num_spc: 8,
            num_dps: 8,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-4",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 64,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-5",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 64,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-6",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-8",
          type: "DiscreteTransformer",
          name: "DiscreteTransformer",
          params: {
            num_v: 10,
            num_s: 16,
            num_as: 4,
            num_t: 2
          }
        },
        {
          id: "node-9",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 32,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-10",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 32,
            num_spc: 8,
            num_dps: 8,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-11",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 64,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-12",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 64,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-13",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-15",
          type: "FixedWeightTransformer",
          name: "FixedWeightTransformer",
          params: {
            min_val: 0,
            max_val: 100,
            n: 16,
            w: 4,
            num_t: 2
          }
        },
        {
          id: "node-16",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 32,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-17",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 32,
            num_spc: 8,
            num_dps: 8,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-18",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 64,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-19",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 64,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-20",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-22",
          type: "DiscreteTransformer",
          name: "DiscreteTransformer",
          params: {
            num_v: 8,
            num_s: 16,
            num_as: 4,
            num_t: 2
          }
        },
        {
          id: "node-23",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 32,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-24",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 32,
            num_spc: 8,
            num_dps: 8,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-25",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 64,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-26",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 64,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-27",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-29",
          type: "FixedWeightTransformer",
          name: "FixedWeightTransformer",
          params: {
            min_val: 0,
            max_val: 100,
            n: 16,
            w: 4,
            num_t: 2
          }
        },
        {
          id: "node-30",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 32,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-31",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 32,
            num_spc: 8,
            num_dps: 8,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-32",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 64,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-33",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 64,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-34",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-36",
          type: "DiscreteTransformer",
          name: "DiscreteTransformer",
          params: {
            num_v: 12,
            num_s: 16,
            num_as: 4,
            num_t: 2
          }
        },
        {
          id: "node-37",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 32,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-38",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 32,
            num_spc: 8,
            num_dps: 8,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-39",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 64,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-40",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 64,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-41",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-43",
          type: "FixedWeightTransformer",
          name: "FixedWeightTransformer",
          params: {
            min_val: 0,
            max_val: 100,
            n: 16,
            w: 4,
            num_t: 2
          }
        },
        {
          id: "node-44",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 32,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-45",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 32,
            num_spc: 8,
            num_dps: 8,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-46",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 64,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-47",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 64,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-48",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-50",
          type: "DiscreteTransformer",
          name: "DiscreteTransformer",
          params: {
            num_v: 15,
            num_s: 16,
            num_as: 4,
            num_t: 2
          }
        },
        {
          id: "node-51",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 32,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-52",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 32,
            num_spc: 8,
            num_dps: 8,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-53",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 64,
            num_as: 4,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-54",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 64,
            num_spc: 10,
            num_dps: 10,
            num_rpd: 12,
            d_thresh: 6,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-55",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-56",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 1024,
            num_as: 16,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-57",
          type: "SequenceLearner",
          name: "SequenceLearner",
          params: {
            num_c: 1024,
            num_spc: 15,
            num_dps: 15,
            num_rpd: 20,
            d_thresh: 10,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            num_t: 2,
            always_update: false
          }
        },
        {
          id: "node-58",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-59",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-60",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-61",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-62",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-63",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-64",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        },
        {
          id: "node-65",
          type: "PatternPooler",
          name: "PatternPooler",
          params: {
            num_s: 128,
            num_as: 8,
            perm_thr: 20,
            perm_inc: 2,
            perm_dec: 1,
            pct_pool: 0.8,
            pct_conn: 0.5,
            pct_learn: 0.3,
            num_t: 2
          }
        }
      ],
      connections: [
        {
          source: "node-1",
          target: "node-2",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-2",
          target: "node-3",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-3",
          target: "node-4",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-4",
          target: "node-5",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-5",
          target: "node-6",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-8",
          target: "node-9",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-9",
          target: "node-10",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-10",
          target: "node-11",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-11",
          target: "node-12",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-12",
          target: "node-13",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-15",
          target: "node-16",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-16",
          target: "node-17",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-17",
          target: "node-18",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-18",
          target: "node-19",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-19",
          target: "node-20",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-22",
          target: "node-23",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-23",
          target: "node-24",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-24",
          target: "node-25",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-25",
          target: "node-26",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-26",
          target: "node-27",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-29",
          target: "node-30",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-30",
          target: "node-31",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-31",
          target: "node-32",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-32",
          target: "node-33",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-33",
          target: "node-34",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-36",
          target: "node-37",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-37",
          target: "node-38",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-38",
          target: "node-39",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-39",
          target: "node-40",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-40",
          target: "node-41",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-43",
          target: "node-44",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-44",
          target: "node-45",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-45",
          target: "node-46",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-46",
          target: "node-47",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-47",
          target: "node-48",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-50",
          target: "node-51",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-51",
          target: "node-52",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-52",
          target: "node-53",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-53",
          target: "node-54",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-54",
          target: "node-55",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-6",
          target: "node-56",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-13",
          target: "node-56",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-20",
          target: "node-56",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-27",
          target: "node-56",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-34",
          target: "node-56",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-41",
          target: "node-56",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-48",
          target: "node-56",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-55",
          target: "node-56",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-56",
          target: "node-57",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-57",
          target: "node-58",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-57",
          target: "node-59",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-57",
          target: "node-60",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-57",
          target: "node-61",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-57",
          target: "node-62",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-57",
          target: "node-63",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-57",
          target: "node-64",
          type: "input",
          timeOffset: 0
        },
        {
          source: "node-57",
          target: "node-65",
          type: "input",
          timeOffset: 0
        }
      ],
      datasources: [
        {
          id: "node-0",
          type: "SynflowScalarDataSource",
          name: "ScalarDataSource",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 50,
                      frequency: 1,
                      phase: 0,
                      offset: 50
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-7",
          type: "SynflowDiscreteDataSource",
          name: "DiscreteDataSource",
          params: {
            type: "repeating",
            patterns: [
              "State0",
              "State1",
              "State2",
              "State3",
              "State4",
              "State5",
              "State6",
              "State7",
              "State8",
              "State9"
            ],
            iters: 5,
            recur: 10,
            loop_mode: "restart"
          }
        },
        {
          id: "node-14",
          type: "SynflowScalarDataSource",
          name: "ScalarDataSource",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sawtooth",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 45,
                      frequency: 15,
                      offset: 50
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-21",
          type: "SynflowDiscreteDataSource",
          name: "DiscreteDataSource",
          params: {
            type: "ambiguous_middle",
            first_pattern: "State0",
            last_pattern: "State7",
            patterns: [
              "State1",
              "State2",
              "State3",
              "State4",
              "State5",
              "State6"
            ],
            iters: 4,
            recur: 10
          }
        },
        {
          id: "node-28",
          type: "SynflowScalarDataSource",
          name: "ScalarDataSource",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sawtooth",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 60,
                      frequency: 2,
                      offset: 50
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-35",
          type: "SynflowDiscreteDataSource",
          name: "DiscreteDataSource",
          params: {
            type: "repeating",
            patterns: [
              "State0",
              "State1",
              "State2",
              "State3",
              "State4",
              "State5",
              "State6",
              "State7",
              "State8",
              "State9",
              "State10",
              "State11"
            ],
            iters: 6,
            recur: 10,
            loop_mode: "restart"
          }
        },
        {
          id: "node-42",
          type: "SynflowScalarDataSource",
          name: "ScalarDataSource",
          params: {
            layers: [
              {
                priority: 0,
                stitch_method: "forward_precedence",
                events: [
                  {
                    series: {
                      type: "sine",
                      time: {
                        rate: 20,
                        duration: 100
                      },
                      amplitude: 40,
                      frequency: 0.8,
                      phase: 0,
                      offset: 50
                    },
                    start_time: 0
                  }
                ]
              }
            ]
          }
        },
        {
          id: "node-49",
          type: "SynflowDiscreteDataSource",
          name: "DiscreteDataSource",
          params: {
            type: "ambiguous_middle",
            first_pattern: "State0",
            last_pattern: "State14",
            patterns: [
              "State1",
              "State2",
              "State3",
              "State4",
              "State5",
              "State6",
              "State7",
              "State8",
              "State9",
              "State10",
              "State11",
              "State12",
              "State13"
            ],
            iters: 7,
            recur: 10
          }
        }
      ],
      interfaces: [
        {
          source: "node-0",
          target: "node-1",
          type: "scalarInput"
        },
        {
          source: "node-7",
          target: "node-8",
          type: "discreteInput"
        },
        {
          source: "node-14",
          target: "node-15",
          type: "scalarInput"
        },
        {
          source: "node-21",
          target: "node-22",
          type: "discreteInput"
        },
        {
          source: "node-28",
          target: "node-29",
          type: "scalarInput"
        },
        {
          source: "node-35",
          target: "node-36",
          type: "discreteInput"
        },
        {
          source: "node-42",
          target: "node-43",
          type: "scalarInput"
        },
        {
          source: "node-49",
          target: "node-50",
          type: "discreteInput"
        }
      ],
      learnedState: null
    }
  };
  function af() {
    const e = {};
    for (const [t, n] of Object.entries(Ar)) e[t] = n.description;
    return e;
  }
  function of({ data: e, selected: t, type: n = "group" }) {
    return e.label, x.jsx("div", {
      className: bt("circuit-node", n, "circuit-hidden")
    });
  }
  const sf = U.memo(of), cf = {
    width: 340,
    height: 340
  }, lf = {
    width: 320,
    height: 300
  }, df = {
    width: 380,
    height: 400
  };
  function ao(e, t = false) {
    return e === "PatternClassifier" ? {
      ...df
    } : t ? {
      ...lf
    } : {
      ...cf
    };
  }
  const uf = {
    borderColor: "transparent",
    borderWidth: 4
  }, pf = {
    width: 14,
    height: 14,
    background: "transparent",
    border: "none"
  }, hi = 24, mf = 50, ff = 52, fr = 8, hf = 88, yf = 170, gf = 2.5;
  function fc(e, t) {
    let n = hi + mf;
    return t.valueBox && (n += fr + ff), t.plot && (n += fr + Math.ceil((e - hi) / gf)), t.bitfield && (n += fr + hf), t.encoderViz && (n += fr + yf), Math.round(n);
  }
  function qr({ minWidth: e = 280, minHeight: t = 80, valueBox: n, plot: r, bitfield: a, encoderViz: o }) {
    const s = jl(), i = Ol((u) => {
      var _a2;
      const v = s ? u.nodeLookup.get(s) : void 0;
      return (v == null ? void 0 : v.width) ?? ((_a2 = v == null ? void 0 : v.measured) == null ? void 0 : _a2.width) ?? e;
    }), l = n || r || a || o ? Math.max(t, fc(i, {
      valueBox: n,
      plot: r,
      bitfield: a,
      encoderViz: o
    })) : t;
    return x.jsx(Ml, {
      minWidth: e,
      minHeight: l,
      lineStyle: uf,
      handleStyle: pf
    });
  }
  const Br = {
    interactive: false,
    showChrome: false,
    colorCoded: true,
    labelMode: "none",
    gapPx: 1,
    paddingPx: 2
  };
  function _f(e) {
    if (!Array.isArray(e)) return [];
    const t = /* @__PURE__ */ new Set(), n = [];
    for (const r of e) {
      const a = String(r);
      t.has(a) || (t.add(a), n.push(a));
    }
    return n;
  }
  function zr(e, t) {
    const n = t ?? _f(e).length;
    return Array.from({
      length: Math.max(0, n)
    }, (r, a) => ji(a));
  }
  const vf = {
    error: "\u26D4",
    warn: "\u26A0",
    info: "\u2139"
  };
  function bf({ alerts: e }) {
    return e.length ? x.jsx("div", {
      className: "node-alerts nodrag",
      children: e.map((t, n) => x.jsx("span", {
        className: bt("node-alert", `node-alert-${t.level}`),
        "data-tooltip": t.message,
        "aria-label": t.message,
        role: "img",
        children: vf[t.level]
      }, `${t.level}-${n}`))
    }) : null;
  }
  const xf = U.memo(bf);
  function Sf({ label: e, type: t, alerts: n }) {
    return x.jsx("div", {
      className: "node-header",
      children: x.jsxs("div", {
        className: "node-content",
        children: [
          x.jsxs("div", {
            className: "node-name-row",
            children: [
              x.jsx("div", {
                className: "node-name",
                children: e
              }),
              n && n.length > 0 && x.jsx(xf, {
                alerts: n
              })
            ]
          }),
          x.jsx("div", {
            className: "node-id",
            children: t
          })
        ]
      })
    });
  }
  const oo = U.memo(Sf);
  function hc() {
    return {
      updateBlockConfig: U.useCallback(async (t, n) => {
        var _a2, _b, _c2;
        const { nodes: r, edges: a } = re.getState(), o = r.find((d) => d.id === t), s = (_a2 = o == null ? void 0 : o.data) == null ? void 0 : _a2.canonicalId;
        if (!o || !s) return false;
        const i = ie.getState(), c = i.isRunning;
        c && i.stop();
        const { bitFieldParams: l } = ke.getState(), u = Mt(r, a, l), v = u.networks[qa], h = (_b = v == null ? void 0 : v.blocks) == null ? void 0 : _b.find((d) => d.id === s), y = (_c2 = v == null ? void 0 : v.datasources) == null ? void 0 : _c2.find((d) => d.id === s);
        if (h) h.params = n;
        else if (y) y.params = n;
        else return false;
        if (!await Fr(u)) return false;
        y && re.getState().updateNodeData(t, {
          params: n
        });
        const k = re.getState();
        return k.setNodes([
          ...k.nodes
        ]), c && ie.getState().start(), true;
      }, [])
    };
  }
  let La = false;
  function so() {
    La = true;
  }
  function wf() {
    return La ? (La = false, true) : false;
  }
  function yc() {
    return x.jsx(Ql, {
      size: 22,
      stroke: 2,
      "aria-hidden": true
    });
  }
  function kf({ nodeId: e, sourceType: t, config: n }) {
    const [r, a] = U.useState(false), { updateBlockConfig: o } = hc(), { deleteElements: s } = rt();
    return x.jsxs(x.Fragment, {
      children: [
        x.jsx(Me, {
          label: "Configure datasource",
          placement: "top",
          children: x.jsx("button", {
            className: "node-inspect-btn nodrag",
            "aria-label": "Configure datasource",
            onClick: (i) => {
              i.stopPropagation(), a(true);
            },
            children: x.jsx(yc, {})
          })
        }),
        r && x.jsx(cu, {
          type: t,
          initialConfig: n,
          submitLabel: "Update",
          onCancel: () => a(false),
          onCreate: async (i) => {
            a(false), await o(e, i);
          },
          onRemove: () => {
            a(false), so(), s({
              nodes: [
                {
                  id: e
                }
              ]
            });
          }
        })
      ]
    });
  }
  const Pf = U.memo(kf);
  function Ef({ nodeId: e }) {
    const { deleteElements: t } = rt();
    return x.jsx(Me, {
      label: "Remove node",
      placement: "top",
      children: x.jsx("button", {
        className: "node-remove-btn nodrag",
        "aria-label": "Remove node",
        onClick: (n) => {
          n.stopPropagation(), so(), t({
            nodes: [
              {
                id: e
              }
            ]
          });
        },
        children: x.jsx(Ed, {
          size: 22,
          stroke: 2,
          "aria-hidden": true
        })
      })
    });
  }
  const Vr = U.memo(Ef), Gt = Kt()((e) => ({
    incompleteNodeIds: /* @__PURE__ */ new Set(),
    issues: [],
    byNode: /* @__PURE__ */ new Map(),
    setValidation: (t, n) => {
      const r = /* @__PURE__ */ new Map();
      for (const a of n) {
        const o = r.get(a.nodeId) ?? [];
        o.push(a), r.set(a.nodeId, o);
      }
      e({
        incompleteNodeIds: t,
        issues: n,
        byNode: r
      });
    }
  }));
  function io({ data: e, selected: t, type: n, iconShape: r, id: a }) {
    var _a2, _b;
    const o = e.plotVisible ?? true, { getNode: s } = rt(), i = ((_b = (_a2 = s(a)) == null ? void 0 : _a2.style) == null ? void 0 : _b["--node-bg"]) ?? "var(--accent-blue)", c = Gt((_) => _.byNode.get(a)), l = re((_) => _.connecting && _.viableTargetIds.has(a)), u = re((_) => _.colorCodedBits), v = e.currentValue ?? null, h = ze((_) => {
      var _a3;
      return (_a3 = _.timeSeriesData[a]) == null ? void 0 : _a3.data;
    }), y = U.useMemo(() => !h || !Array.isArray(h) ? [] : h.slice(-50), [
      h
    ]), S = () => v == null ? "---" : e.sourceType === "scalar" ? typeof v == "number" ? v.toFixed(2) : String(v) : e.sourceType === "discrete" ? typeof v == "number" ? v.toFixed(0) : String(v) : v.toString(), k = y && y.length > 0, d = e.sourceType === "scalar", f = e.sourceType === "discrete", p = U.useMemo(() => {
      var _a3;
      if (!f) return [];
      const _ = (_a3 = e.params) == null ? void 0 : _a3.patterns;
      if (!Array.isArray(_) || _.length === 0) return [];
      const g = new Set(_).size, m = typeof v == "number" ? Math.trunc(v) : -1, P = new Array(g).fill(0);
      return m >= 0 && m < g && (P[m] = 1), P;
    }, [
      f,
      e.params,
      v
    ]), b = p.length > 0, w = U.useMemo(() => {
      var _a3;
      if (b) return zr((_a3 = e.params) == null ? void 0 : _a3.patterns);
    }, [
      b,
      e.params
    ]);
    return x.jsxs("div", {
      className: bt("custom-node", "data-source", n, {
        selected: t,
        "viable-target": l
      }),
      children: [
        x.jsx(qr, {
          valueBox: true,
          plot: k && d && o,
          bitfield: b
        }),
        x.jsx(Vr, {
          nodeId: a
        }),
        x.jsx(Pf, {
          nodeId: a,
          sourceType: e.blockType,
          config: e.params ?? {}
        }),
        x.jsx(oo, {
          nodeID: e.canonicalId,
          label: e.label,
          type: e.blockType,
          iconShape: r,
          alerts: c ?? []
        }),
        x.jsx("div", {
          className: "node-current-value",
          children: x.jsx("div", {
            className: "value-display",
            children: S()
          })
        }),
        b && x.jsx("div", {
          className: "node-bitfield-section",
          children: x.jsx(Er, {
            bitfield: p,
            color: i,
            ...w ? {
              colorMap: w,
              colorMapColorGaps: true,
              gapColorPx: 2
            } : {},
            ...Br,
            colorCoded: u,
            gapPx: 4,
            borderPx: 2
          })
        }),
        k && d && o && x.jsx("div", {
          className: "node-plot-section",
          style: {
            pointerEvents: "none"
          },
          children: x.jsx(Cr, {
            data: y,
            color: i
          })
        }),
        x.jsx(tt, {
          type: "source",
          position: nt.Bottom,
          id: "output"
        })
      ]
    });
  }
  U.memo(io);
  function Cf(e) {
    return x.jsx(io, {
      ...e,
      type: "data-source-discrete",
      iconShape: "circle"
    });
  }
  function Nf(e) {
    return x.jsx(io, {
      ...e,
      type: "data-source-scalar",
      iconShape: "circle"
    });
  }
  const $f = new Yl(), If = {
    hierarchical: {
      "elk.algorithm": "layered",
      "elk.direction": "DOWN",
      "elk.spacing.nodeNode": 80,
      "elk.layered.spacing.nodeNodeBetweenLayers": 120,
      "elk.edgeRouting": "ORTHOGONAL",
      "elk.layered.crossingMinimization.strategy": "LAYER_SWEEP"
    },
    hierarchicalCompact: {
      "elk.algorithm": "layered",
      "elk.direction": "DOWN",
      "elk.spacing.nodeNode": 50,
      "elk.layered.spacing.nodeNodeBetweenLayers": 80,
      "elk.edgeRouting": "ORTHOGONAL",
      "elk.layered.compaction.postCompaction.strategy": "EDGE_LENGTH"
    },
    horizontalFlow: {
      "elk.algorithm": "layered",
      "elk.direction": "RIGHT",
      "elk.spacing.nodeNode": 80,
      "elk.layered.spacing.nodeNodeBetweenLayers": 100,
      "elk.edgeRouting": "ORTHOGONAL"
    },
    force: {
      "elk.algorithm": "mrtree",
      "elk.force.iterations": 300,
      "elk.force.repulsion": 150,
      "elk.edgeRouting": "alg.libavoid"
    },
    radial: {
      "elk.algorithm": "box",
      "elk.radial.radius": 450,
      "elk.spacing.nodeNode": 100,
      "elk.edgeRouting": "POLYLINE"
    },
    dccNetwork: {
      "elk.algorithm": "layered",
      "elk.direction": "RIGHT",
      "elk.spacing.nodeNode": 100,
      "elk.layered.spacing.nodeNodeBetweenLayers": 150,
      "elk.edgeRouting": "ORTHOGONAL",
      "elk.layered.nodePlacement.strategy": "NETWORK_SIMPLEX",
      "elk.layered.crossingMinimization.strategy": "LAYER_SWEEP",
      "elk.layered.considerModelOrder.strategy": "PREFER_EDGES"
    }
  };
  async function Df(e, t, n = {}, r = null) {
    if (console.log("ELK Layout: ", e, t, n), !e || e.length === 0) return {
      nodes: [],
      edges: []
    };
    const a = n["elk.direction"] || "RIGHT", o = a === "RIGHT" || a === "LEFT", s = e.find((g) => g.type === "group"), i = e.filter((g) => g.type !== "group"), c = [
      "DiscreteDataSource",
      "ScalarDataSource",
      "group"
    ], l = {
      id: "root",
      layoutOptions: n,
      children: i.map((g) => ({
        id: g.id,
        width: g.measured.width || 150,
        height: g.measured.height || 50
      })),
      edges: t.map((g) => ({
        id: g.id,
        sources: [
          g.source
        ],
        targets: [
          g.target
        ]
      }))
    };
    let u;
    try {
      const g = await $f.layout(l);
      console.log("ELK Layouted Graph: ", g), u = g.children.map((m) => ({
        ...e.find(($) => $.id === m.id),
        position: {
          x: m.x,
          y: m.y
        },
        sourcePosition: o ? "right" : "bottom",
        targetPosition: o ? "left" : "top"
      }));
    } catch (g) {
      console.error("[ELK Layout] Error:", g);
    }
    const v = u.filter((g) => c.includes(g.type)), h = u.filter((g) => !c.includes(g.type)), y = ju(h), { x: S, y: k, width: d, height: f } = y;
    console.log("[ELK Layout] Calculated parent bounds from layout data:", y);
    const p = 40, b = {
      ...s,
      position: {
        x: S - p,
        y: k - p
      },
      style: {
        ...s.style,
        width: d + p * 2,
        height: f + p * 2
      },
      data: {
        ...s.data,
        computedBounds: {
          x: S,
          y: k,
          width: d,
          height: f
        }
      }
    }, w = h.map((g) => ({
      ...g,
      position: {
        x: g.position.x - S + p,
        y: g.position.y - k + p
      },
      parentId: s.id
    }));
    return {
      nodes: [
        b,
        ...v,
        ...w
      ],
      edges: t
    };
  }
  function Tf(e, t) {
    const n = {}, r = {};
    e.forEach((i) => {
      r[i.id] = 0;
    }), t.forEach((i) => {
      r[i.target] !== void 0 && r[i.target]++;
    });
    const o = e.filter((i) => r[i.id] === 0).map((i) => ({
      node: i,
      level: 0
    })), s = /* @__PURE__ */ new Set();
    for (; o.length > 0; ) {
      const { node: i, level: c } = o.shift();
      if (s.has(i.id)) continue;
      s.add(i.id), n[i.id] = c, t.filter((u) => u.source === i.id).forEach((u) => {
        const v = e.find((h) => h.id === u.target);
        v && !s.has(v.id) && o.push({
          node: v,
          level: c + 1
        });
      });
    }
    return e.forEach((i) => {
      n[i.id] === void 0 && (n[i.id] = 0);
    }), n;
  }
  function Rf(e, t, n = 500, r = 600) {
    if (e.length === 0) return e;
    const a = Tf(e, t), o = {};
    return e.forEach((i) => {
      const c = a[i.id] || 0;
      o[c] || (o[c] = []), o[c].push(i);
    }), e.map((i) => {
      const c = a[i.id] || 0, l = o[c], u = l.indexOf(i), v = c * n + 100, S = -((l.length - 1) * r) / 2 + u * r;
      return {
        ...i,
        position: {
          x: v,
          y: S
        }
      };
    });
  }
  const yi = {
    top: "20px",
    right: "20px",
    bottom: "60px",
    left: "200px"
  };
  function gc() {
    const e = re((c) => c.nodes), t = re((c) => c.edges), n = re((c) => c.setNodes), r = re((c) => c.setEdges), { fitView: a, getNodesBounds: o } = rt(), s = U.useCallback(() => {
      if (e.length === 0) {
        console.log("[Layout] No nodes to layout");
        return;
      }
      const c = Rf(e, t);
      n(c), setTimeout(() => {
        a({
          duration: 300,
          padding: yi
        });
      }, 0), console.log(`[Layout] Applied BFS hierarchical layout to ${e.length} nodes`);
    }, [
      e,
      t,
      n,
      a
    ]), i = U.useCallback(async (c = "dccNetwork", l = {}) => {
      const u = re.getState().nodes, v = re.getState().edges, h = re.getState().layoutOptions;
      if (console.log("[Layout] layoutOptions:", h), u.length === 0) {
        console.log("[Layout] No nodes to layout");
        return;
      }
      const y = {
        ...If[c],
        ...l,
        ...h
      };
      try {
        const { nodes: S, edges: k } = await Df(u, v, y, o);
        console.log("[Layout] edges, layoutedEdges:", v, k), n(S), r(k), setTimeout(() => {
          a({
            duration: 300,
            padding: yi
          });
        }, 50), console.log(`[Layout] Applied ELK ${c} layout to ${u.length} nodes`);
      } catch (S) {
        console.error("[Layout] ELK layout failed:", S);
      }
    }, [
      n,
      r,
      a,
      o
    ]);
    return {
      applyHierarchical: s,
      applyElk: i,
      applyElkDefault: U.useCallback(() => i("dccNetwork"), [
        i
      ]),
      applyElkHierarchical: U.useCallback(() => i("hierarchical"), [
        i
      ]),
      applyElkCompact: U.useCallback(() => i("hierarchicalCompact"), [
        i
      ]),
      applyElkHorizontal: U.useCallback(() => i("horizontalFlow"), [
        i
      ]),
      applyElkForce: U.useCallback(() => i("force"), [
        i
      ]),
      applyElkRadial: U.useCallback(() => i("radial"), [
        i
      ])
    };
  }
  class jf {
    constructor() {
      __publicField(this, "usedIds");
      this.usedIds = /* @__PURE__ */ new Set();
    }
    reserveId(t) {
      if (this.usedIds.has(t)) throw new Error(`ID ${t} is already in use`);
      this.usedIds.add(t);
    }
    releaseId(t) {
      this.usedIds.delete(t);
    }
    isAvailable(t) {
      return !this.usedIds.has(t);
    }
    getUsedIds() {
      return Array.from(this.usedIds).sort();
    }
    getUsedCount() {
      return this.usedIds.size;
    }
    reset() {
      this.usedIds.clear();
    }
    loadFromConfig(t) {
      this.reset();
      const n = /* @__PURE__ */ new Set();
      t.blocks && t.blocks.forEach((r) => {
        if (n.has(r.id)) throw new Error(`Duplicate ID found: ${r.id} (in blocks)`);
        n.add(r.id), this.reserveId(r.id);
      }), t.datasources && t.datasources.forEach((r) => {
        if (n.has(r.id)) throw new Error(`Duplicate ID found: ${r.id} (conflicts between blocks and datasources)`);
        n.add(r.id), this.reserveId(r.id);
      });
    }
    validateConnections(t) {
      const n = [], r = new Set((t.blocks || []).map((s) => s.id)), a = new Set((t.datasources || []).map((s) => s.id)), o = /* @__PURE__ */ new Set([
        ...r,
        ...a
      ]);
      return t.connections && t.connections.forEach((s, i) => {
        r.has(s.source) || n.push(`Connection ${i}: source ${s.source} not found in blocks`), r.has(s.target) || n.push(`Connection ${i}: target ${s.target} not found in blocks`);
      }), t.interfaces && t.interfaces.forEach((s, i) => {
        o.has(s.source) || n.push(`Interface ${i}: source ${s.source} not found`), r.has(s.target) || n.push(`Interface ${i}: target ${s.target} must be a block ID`);
      }), {
        valid: n.length === 0,
        errors: n
      };
    }
  }
  const gi = new jf();
  function _c() {
    const e = re((v) => v.setNodes), t = re((v) => v.setEdges), n = re((v) => v.reset), r = re((v) => v.setLayoutOptions), a = ie((v) => v.setNetworkStatus), o = ze((v) => v.clearData), s = ze((v) => v.updateTimeSeries), i = ke((v) => v.clearData), { applyElkDefault: c } = gc(), l = U.useCallback(async (v) => {
      const h = ie.getState().wasmNetwork;
      if (!h) return console.error("[Demo Init] WASM network not ready"), false;
      const y = v.name ?? "Network", S = v.layout || {
        "elk.direction": "RIGHT"
      };
      n(), o(), i(), gi.reset(), gi.loadFromConfig(v);
      const k = [], d = [], f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), b = "parent-node-0", w = {
        id: b,
        type: "group",
        position: {
          x: 0,
          y: 0
        },
        data: {
          id: b,
          label: "CIRCUIT - " + y,
          circuitStyle: 2
        },
        draggable: false,
        selectable: false,
        connectable: false,
        style: {
          pointerEvents: "none"
        }
      };
      k.push(w);
      for (const m of v.datasources || []) if (m.type === "SynflowScalarDataSource") {
        const P = JSON.stringify(m.params), $ = await Qa(h, m.name, P);
        if ($ === null) {
          console.error("[Demo Init] Failed to create synflow scalar datasource:", m);
          continue;
        }
        p.set(m.id, $);
        const C = `node-${$}`;
        f.set(m.id, C);
        const D = {
          id: C,
          type: "SynflowScalarDataSource",
          position: {
            x: 0,
            y: 0
          },
          data: {
            id: C,
            label: m.name,
            canonicalId: $,
            blockType: "SynflowScalarDataSource",
            wasmHandle: $,
            sourceId: `synflow-${m.id}`,
            sourceType: "scalar",
            hasOutput: true,
            hasInput: false,
            params: m.params
          }
        };
        k.push(D), s(C, 0, 0);
      } else if (m.type === "SynflowDiscreteDataSource") {
        const P = JSON.stringify(m.params), $ = await to(h, m.name, P);
        if ($ === null) {
          console.error("[Demo Init] Failed to create synflow discrete datasource:", m);
          continue;
        }
        p.set(m.id, $);
        const C = `node-${$}`;
        f.set(m.id, C);
        const D = {
          id: C,
          type: "SynflowDiscreteDataSource",
          position: {
            x: 0,
            y: 0
          },
          data: {
            id: C,
            label: m.name,
            canonicalId: $,
            blockType: "SynflowDiscreteDataSource",
            wasmHandle: $,
            sourceId: `synflow-discrete-${m.id}`,
            sourceType: "discrete",
            hasOutput: true,
            hasInput: false,
            params: m.params
          }
        };
        k.push(D), s(C, 0, 0);
      } else {
        console.error("[Demo Init] Unsupported datasource type:", m.type), console.error("[Demo Init] Only synflow datasources are supported. Use SynflowScalarDataSource or SynflowDiscreteDataSource.");
        continue;
      }
      const _ = new Map(cc(v.blocks || [], v.connections || []).map((m) => (console.info(`[Demo Init] cascaded ${m.id}.num_c ${m.from} \u2192 ${m.to} (input width)`), [
        m.id,
        m.to
      ])));
      for (const m of v.blocks || []) {
        const P = _.has(m.id) ? {
          ...m.params,
          num_c: _.get(m.id)
        } : m.params, $ = await Za(h, m.type, {
          ...P,
          name: m.name
        });
        if ($ === null) {
          console.error("[Demo Init] Failed to create WASM block:", m);
          continue;
        }
        p.set(m.id, $);
        const C = `node-${$}`;
        f.set(m.id, C), dc(C, m.type, P);
        const D = {
          id: C,
          type: m.type,
          position: {
            x: 0,
            y: 0
          },
          parentId: b,
          data: {
            id: C,
            label: m.name,
            canonicalId: $,
            blockType: m.type,
            wasmHandle: $,
            hasInput: true,
            hasOutput: true,
            hasContext: m.type === "SequenceLearner" || m.type === "ContextLearner",
            hasLabel: m.type === "PatternClassifier",
            enabled: true,
            bitfieldVisible: true
          }
        };
        k.push(D);
      }
      for (const m of v.interfaces || []) {
        const P = f.get(m.source), $ = f.get(m.target);
        if (!P || !$) {
          console.error("[Demo Init] Invalid interface:", m);
          continue;
        }
        const C = p.get(m.source), D = p.get(m.target);
        C !== void 0 && D !== void 0 && (m.type === "labelInput" ? await Sr(h, C, D) : m.type === "discreteInput" ? await no(h, C, D) : m.type === "labelInput" ? await Sr(h, C, D) : await eo(h, C, D));
        let j, B;
        switch (m.type) {
          case "scalarInput":
            j = "scalarData", B = "input";
            break;
          case "discreteInput":
            j = "discreteData", B = "input";
            break;
          case "labelInput":
            j = "label", B = "label";
            break;
          default:
            j = "dataSource", B = "input", console.warn(`[Demo Init] Unknown interface type: ${m.type}`);
        }
        const W = {
          id: `edge-iface-${m.source}-${m.target}-${m.type}`,
          source: P,
          target: $,
          sourceHandle: "output",
          targetHandle: B,
          type: j,
          data: {
            animated: false,
            interfaceType: m.type,
            canonicalSource: m.source,
            canonicalTarget: m.target
          }
        };
        d.push(W);
      }
      for (const m of v.connections || []) {
        const P = f.get(m.source), $ = f.get(m.target), C = p.get(m.source), D = p.get(m.target);
        if (!P || !$ || C === void 0 || D === void 0) {
          console.error("[Demo Init] Invalid connection:", m);
          continue;
        }
        await xr(h, C, D, m.type, m.timeOffset || 0);
        const j = {
          id: `edge-conn-${m.source}-${m.target}-${m.type}`,
          source: P,
          target: $,
          sourceHandle: "output",
          targetHandle: m.type === "context" ? "context" : "input",
          type: m.type,
          data: {
            animated: false,
            canonicalSource: m.source,
            canonicalTarget: m.target,
            timeOffset: m.timeOffset
          }
        };
        d.push(j);
      }
      await un(h);
      let g = 0;
      for (const m of k) {
        if (m.type === "group") continue;
        const P = m.type === "SynflowScalarDataSource" || m.type === "SynflowDiscreteDataSource";
        m.style = {
          ...m.style ?? {},
          "--node-bg": P ? "#000000" : Aa(g),
          ...ao(m.type ?? "", P)
        }, g++;
      }
      return e(k), t(d), a("Ready"), r(S), setTimeout(() => {
        c();
      }, 50), true;
    }, [
      e,
      t,
      n,
      a,
      o,
      s,
      i,
      c
    ]);
    return {
      initializeDemo: U.useCallback(async (v) => {
        const h = Ar[v];
        return h ? l(h) : (console.error("[Demo Init] Invalid demo key:", v), false);
      }, [
        l
      ]),
      initializeFromCanonical: l
    };
  }
  function Of() {
    const e = ie((r) => r.wasmReady), { initializeFromCanonical: t } = _c(), n = U.useRef(false);
    U.useEffect(() => {
      if (!e || n.current) return;
      const r = Fi();
      if (!r) return;
      n.current = true;
      const { valid: a, errors: o } = Nd(r);
      if (!a) {
        console.error("[Config Boot] invalid DashboardConfig:", o);
        return;
      }
      const s = Fd(r);
      if (s.length === 0) return;
      const [i] = s[0], c = Ld(r, i);
      c && (async () => {
        var _a2, _b, _c2, _d2;
        if (!await t(c)) return;
        const u = (_b = (_a2 = r.visualization) == null ? void 0 : _a2.inline) == null ? void 0 : _b[i];
        if (((_c2 = r.layout) == null ? void 0 : _c2.nodes) || u) {
          const { nodes: h, setNodes: y } = re.getState();
          y(h.map((S) => {
            var _a3, _b2;
            const k = (_a3 = S.data) == null ? void 0 : _a3.canonicalId;
            let d = S;
            const f = k && r.layout ? Bd(r.layout, i, k) : void 0;
            return f && (d = {
              ...d,
              position: {
                ...f.position
              }
            }), u && k && ((_b2 = u[k]) == null ? void 0 : _b2.show) === false && (d = {
              ...d,
              data: {
                ...d.data,
                plotVisible: false,
                bitfieldVisible: false
              }
            }), d;
          }));
        }
        const v = (((_d2 = r.visualization) == null ? void 0 : _d2.vizNodes) ?? []).filter((h) => h.target.networkId === i);
        if (v.length) {
          const { nodes: h, edges: y, setNodes: S, setEdges: k } = re.getState(), d = [
            ...h,
            ...v.map((f) => {
              var _a3, _b2;
              const p = za[f.kind] ?? "VizBitField";
              return {
                id: f.id,
                type: p,
                position: {
                  x: ((_a3 = f.position) == null ? void 0 : _a3.x) ?? 0,
                  y: ((_b2 = f.position) == null ? void 0 : _b2.y) ?? 0
                },
                style: {
                  width: p === "VizEncoder" ? 400 : 320,
                  height: p === "VizEncoder" ? 380 : p === "VizTimeSeries" ? 240 : 320
                },
                data: {
                  id: f.id,
                  label: Va[p],
                  vizKind: f.kind,
                  targetNodeId: `node-${f.target.blockId}`
                }
              };
            })
          ];
          S(d), k(ro(d, y));
        }
        pc.getState().setInteractivity(r.interactivity ?? null);
      })();
    }, [
      e,
      t
    ]);
  }
  function Mf() {
    const e = re((r) => r.nodes), t = re((r) => r.edges), n = Gt((r) => r.setValidation);
    U.useEffect(() => {
      const { incompleteNodeIds: r, issues: a } = Wm(e, t);
      n(r, a);
    }, [
      e,
      t,
      n
    ]);
  }
  const Lf = 520, Ff = 420, Af = 9, _i = 9, qf = [
    "bins",
    "per-bin"
  ];
  function Bf({ blockType: e, values: t }) {
    wl();
    const n = We((P) => P.setEncoders), r = We((P) => P.setViewBounds), a = We((P) => P.setScalarCursor), o = We((P) => P.setRefPoints), s = We((P) => P.setStackedActive), i = We((P) => P.stackedOrder), c = We((P) => P.stackedActive), l = We((P) => P.lastData), u = We((P) => P.scalarCursor), v = We((P) => P.viewBounds), h = We((P) => P.subplotParams);
    U.useEffect(() => {
      o([]), s(qf);
      const P = Da(e, t);
      P && a((P.viewBounds[0] + P.viewBounds[1]) / 2);
    }, []), U.useEffect(() => {
      const P = Da(e, t);
      P && (n([
        P.encoder
      ]), r(P.viewBounds));
    }, [
      e,
      t,
      n,
      r
    ]);
    const y = U.useMemo(() => i.filter((P) => c.includes(P)), [
      i,
      c
    ]), S = U.useRef(null), [k, d] = U.useState({
      w: Lf,
      h: Ff
    });
    U.useEffect(() => {
      const P = S.current;
      if (!P || typeof ResizeObserver > "u") return;
      const $ = new ResizeObserver((C) => {
        var _a2;
        const D = (_a2 = C[0]) == null ? void 0 : _a2.contentRect;
        D && d({
          w: Math.max(120, Math.floor(D.width)),
          h: Math.max(120, Math.floor(D.height))
        });
      });
      return $.observe(P), () => $.disconnect();
    }, []);
    const [f, p] = U.useState(null), b = U.useCallback((P) => {
      p(($) => $ && $.left === P.left && $.right === P.right ? $ : {
        left: P.left,
        right: P.right
      });
    }, []), w = (f == null ? void 0 : f.left) ?? Di, _ = (f == null ? void 0 : f.right) ?? k.w - Ti, g = Af + Math.max(0, w - _i), m = Math.max(20, _ - w + 2 * _i);
    return x.jsxs("div", {
      className: "vec-dock",
      children: [
        x.jsxs("div", {
          className: "vec-slider-row",
          children: [
            x.jsx("div", {
              className: "vec-slider-spacer",
              style: {
                width: g
              }
            }),
            x.jsx("div", {
              className: "vec-slider-wrap",
              style: {
                width: m
              },
              children: x.jsx(kl, {
                bare: true
              })
            })
          ]
        }),
        x.jsx("div", {
          className: "vec-chart-cell",
          ref: S,
          children: x.jsx(Pl, {
            specs: y,
            data: l,
            cursor: u,
            viewBounds: v,
            params: h,
            width: k.w,
            height: k.h,
            onPlotRect: b
          })
        })
      ]
    });
  }
  function zf() {
    return x.jsxs("div", {
      className: "vec-aux",
      children: [
        x.jsx("div", {
          className: "vec-aux-bits",
          children: x.jsx(El, {})
        }),
        x.jsx("div", {
          className: "vec-aux-subplots",
          children: x.jsx(Cl, {})
        })
      ]
    });
  }
  function Vf({ nodeId: e, blockType: t }) {
    const [n, r] = U.useState(false), { updateBlockConfig: a } = hc(), { deleteElements: o } = rt(), s = ke((c) => c.getBitFieldParams), i = () => {
      const c = s(e) ?? {}, l = {};
      for (const [u, v] of Object.entries(c)) u !== "type" && (typeof v == "number" || typeof v == "boolean") && (l[u] = v);
      return l;
    };
    return x.jsxs(x.Fragment, {
      children: [
        x.jsx(Me, {
          label: "Configure node",
          placement: "top",
          children: x.jsx("button", {
            className: "node-inspect-btn nodrag",
            "aria-label": "Configure node",
            onClick: (c) => {
              c.stopPropagation(), r(true);
            },
            children: x.jsx(yc, {})
          })
        }),
        n && x.jsx(iu, {
          type: t,
          initialValues: i(),
          submitLabel: "Update",
          renderPreview: ln(t) ? (c) => x.jsx(Bf, {
            blockType: t,
            values: c
          }) : void 0,
          renderAux: ln(t) ? () => x.jsx(zf, {}) : void 0,
          onCancel: () => r(false),
          onCreate: async (c) => {
            r(false), await a(e, c);
          },
          onRemove: () => {
            r(false), so(), o({
              nodes: [
                {
                  id: e
                }
              ]
            });
          }
        })
      ]
    });
  }
  const vc = U.memo(Vf);
  function Wf({ nodeId: e, blockType: t }) {
    const n = nf(t), [r, a] = U.useState(false), o = U.useRef(null), s = U.useRef(null), i = U.useRef(null), c = U.useRef(false), { getInternalNode: l, getNode: u } = rt(), v = re((d) => d.nodes), h = U.useMemo(() => {
      var _a2, _b;
      const d = /* @__PURE__ */ new Set();
      for (const f of v) Ot(f.type) && ((_a2 = f.data) == null ? void 0 : _a2.targetNodeId) === e && ((_b = f.data) == null ? void 0 : _b.vizKind) && d.add(f.data.vizKind);
      return d;
    }, [
      v,
      e
    ]), y = n.length > 0 && n.every((d) => h.has(d));
    if (U.useEffect(() => {
      var _a2, _b;
      if (!r) return;
      const d = (p) => {
        var _a3;
        const b = document.elementFromPoint(p.clientX, p.clientY), w = b == null ? void 0 : b.closest(".node-viz-menu-item");
        if (w && ((_a3 = s.current) == null ? void 0 : _a3.contains(w)) && !w.disabled) {
          c.current = false;
          const _ = w.dataset.kind;
          _ && S(_);
          return;
        }
        c.current && (c.current = false, i.current && b && i.current.contains(b) || a(false));
      }, f = (p) => {
        o.current && !o.current.contains(p.target) && a(false);
      };
      return document.addEventListener("pointerup", d), document.addEventListener("pointerdown", f), (_b = (_a2 = s.current) == null ? void 0 : _a2.querySelector("button:not(:disabled)")) == null ? void 0 : _b.focus(), () => {
        document.removeEventListener("pointerup", d), document.removeEventListener("pointerdown", f);
      };
    }, [
      r
    ]), n.length === 0) return null;
    const S = (d) => {
      var _a2, _b, _c2;
      if (h.has(d)) return;
      const f = l(e), p = (f == null ? void 0 : f.internals.positionAbsolute) ?? ((_a2 = u(e)) == null ? void 0 : _a2.position) ?? {
        x: 0,
        y: 0
      }, b = ((_b = f == null ? void 0 : f.measured) == null ? void 0 : _b.width) ?? 320, w = b * 2, _ = d === "timeseries" ? fc(w, {
        plot: true
      }) : Math.round(w * 3 / 4), g = re.getState().nodes.filter((m) => {
        var _a3;
        return Ot(m.type) && ((_a3 = m.data) == null ? void 0 : _a3.targetNodeId) === e;
      }).length;
      mc({
        vizKind: d,
        targetNodeId: e,
        position: {
          x: p.x + b + 60,
          y: p.y + g * 40
        },
        size: {
          width: w,
          height: _
        }
      }), a(false), (_c2 = i.current) == null ? void 0 : _c2.focus();
    }, k = (d) => {
      var _a2, _b, _c2, _d2, _e, _f2, _g, _h2;
      const f = Array.from(((_a2 = s.current) == null ? void 0 : _a2.querySelectorAll("button:not(:disabled)")) ?? []);
      if (f.length === 0 && d.key !== "Escape") return;
      const p = f.indexOf(document.activeElement);
      if (d.key === "ArrowDown") d.preventDefault(), (_b = f[(p + 1) % f.length]) == null ? void 0 : _b.focus();
      else if (d.key === "ArrowUp") d.preventDefault(), (_c2 = f[(p - 1 + f.length) % f.length]) == null ? void 0 : _c2.focus();
      else if (d.key === "Home") d.preventDefault(), (_d2 = f[0]) == null ? void 0 : _d2.focus();
      else if (d.key === "End") d.preventDefault(), (_e = f[f.length - 1]) == null ? void 0 : _e.focus();
      else if (d.key === "Enter" || d.key === " ") {
        d.preventDefault();
        const b = (_g = (_f2 = document.activeElement) == null ? void 0 : _f2.dataset) == null ? void 0 : _g.kind;
        b && S(b);
      } else d.key === "Escape" && (d.preventDefault(), a(false), (_h2 = i.current) == null ? void 0 : _h2.focus());
    };
    return x.jsxs("div", {
      className: "node-viz-spawn nodrag",
      ref: o,
      children: [
        x.jsx(Me, {
          label: y ? "All visualizations already added" : "Add a visualization of this node",
          placement: "top",
          children: x.jsx("button", {
            ref: i,
            className: "node-viz-btn",
            "aria-label": "Add a visualization of this node",
            "aria-haspopup": "menu",
            "aria-expanded": r,
            disabled: y,
            onPointerDown: (d) => {
              d.stopPropagation(), !(y || n.length === 1) && (r ? a(false) : (c.current = true, a(true)));
            },
            onClick: (d) => {
              d.stopPropagation(), !y && n.length === 1 && S(n[0]);
            },
            children: x.jsx(Mi, {
              size: 22,
              stroke: 2,
              "aria-hidden": true
            })
          })
        }),
        r && x.jsx("div", {
          className: "node-viz-menu",
          role: "menu",
          ref: s,
          onKeyDown: k,
          children: n.map((d) => {
            const f = h.has(d);
            return x.jsx("button", {
              type: "button",
              role: "menuitem",
              className: "node-viz-menu-item",
              "data-kind": d,
              disabled: f,
              "aria-disabled": f,
              "data-tooltip": f ? "Already added" : void 0,
              "data-tooltip-placement": "right",
              tabIndex: -1,
              children: tf(d)
            }, d);
          })
        })
      ]
    });
  }
  const bc = U.memo(Wf);
  function Uf(e) {
    if (!e || e.length === 0) return 0;
    let t = 0;
    for (const n of e) n && t++;
    return t / e.length;
  }
  function Hf({ bitfield: e, color: t }) {
    const n = Math.round(Uf(e) * 100);
    return x.jsxs("div", {
      className: "node-activity",
      "data-tooltip": `${n}% of bits active`,
      children: [
        x.jsx("div", {
          className: "node-activity-bar",
          children: x.jsx("div", {
            className: "node-activity-fill",
            style: {
              width: `${n}%`,
              background: t ?? "var(--accent-blue)"
            }
          })
        }),
        x.jsxs("span", {
          className: "node-activity-label",
          children: [
            n,
            "% active"
          ]
        })
      ]
    });
  }
  const xc = U.memo(Hf);
  function Gf({ data: e, selected: t, type: n, iconShape: r, id: a, bitfieldProps: o }) {
    var _a2, _b;
    const s = e.plotVisible ?? true, i = e.bitfieldVisible ?? true, { getNode: c } = rt(), l = ((_b = (_a2 = c(a)) == null ? void 0 : _a2.style) == null ? void 0 : _b["--node-bg"]) ?? "var(--accent-blue)", u = ke((g) => g.bitFieldData[a]), v = ke((g) => g.getBitFieldParams), h = re((g) => g.colorCodedBits), y = v(a), S = ze((g) => {
      var _a3;
      return (_a3 = g.timeSeriesData[a]) == null ? void 0 : _a3.data;
    }), k = U.useMemo(() => !S || !Array.isArray(S) ? [] : S.slice(-50), [
      S
    ]), d = k && k.length > 0, f = u && u.bitField && u.bitField.length > 0, p = !s && !i, b = !!vt(e.blockType), w = Gt((g) => g.byNode.get(a)), _ = re((g) => g.connecting && g.viableTargetIds.has(a));
    return x.jsxs("div", {
      className: bt("custom-node", n, {
        selected: t,
        "viable-target": _
      }),
      children: [
        x.jsx(qr, {
          plot: d && s,
          bitfield: f && i
        }),
        x.jsx(Vr, {
          nodeId: a
        }),
        x.jsx(tt, {
          type: "target",
          position: nt.Top,
          id: "input"
        }),
        b && x.jsx(vc, {
          nodeId: a,
          blockType: e.blockType,
          label: e.label ?? e.blockType
        }),
        x.jsx(bc, {
          nodeId: a,
          blockType: e.blockType
        }),
        x.jsx(oo, {
          nodeID: e.canonicalId,
          label: e.label,
          type: e.blockType,
          iconShape: r,
          alerts: w ?? []
        }),
        d && s && x.jsx("div", {
          className: "node-plot-section",
          children: x.jsx(Cr, {
            data: k,
            color: l
          })
        }),
        f && i && x.jsx("div", {
          className: "node-bitfield-section",
          children: x.jsx(Er, {
            bitfield: u.bitField,
            bitFieldParams: y,
            color: l,
            ...Br,
            ...o,
            colorCoded: h
          })
        }),
        f && p && x.jsx(xc, {
          bitfield: u.bitField,
          color: l
        }),
        x.jsx(tt, {
          type: "source",
          position: nt.Bottom,
          id: "output"
        }),
        e.hasContext && x.jsx(tt, {
          type: "target",
          position: nt.Left,
          id: "context"
        }),
        e.hasLabel && x.jsx(tt, {
          type: "target",
          position: nt.Right,
          id: "label"
        })
      ]
    });
  }
  const St = U.memo(Gf);
  function Kf(e) {
    return x.jsx(St, {
      ...e,
      type: "discrete",
      iconShape: "triangle"
    });
  }
  function Yf(e) {
    return x.jsx(St, {
      ...e,
      type: "persistence",
      iconShape: "triangle"
    });
  }
  function Jf(e) {
    return x.jsx(St, {
      ...e,
      type: "fixedWeight",
      iconShape: "triangle"
    });
  }
  function Xf(e) {
    return x.jsx(St, {
      ...e,
      type: "taperingWeight",
      iconShape: "triangle"
    });
  }
  function Zf(e) {
    return x.jsx(St, {
      ...e,
      type: "periodicCell",
      iconShape: "triangle"
    });
  }
  function Qf(e) {
    return x.jsx(St, {
      ...e,
      type: "periodicScalar",
      iconShape: "triangle"
    });
  }
  function eh(e) {
    return x.jsx(St, {
      ...e,
      type: "placeCell",
      iconShape: "triangle"
    });
  }
  function th(e) {
    return x.jsx(St, {
      ...e,
      type: "randomPlaceCell",
      iconShape: "triangle"
    });
  }
  function Sc(e, t, n) {
    var _a2, _b, _c2;
    const r = t.find((a) => a.target === n && a.type === "label");
    if (r) return (_c2 = (_b = (_a2 = e.find((a) => a.id === r.source)) == null ? void 0 : _a2.data) == null ? void 0 : _b.params) == null ? void 0 : _c2.patterns;
  }
  function wc(e, t, n) {
    if (!e || t < 2) return;
    const r = zr(n), a = Math.ceil(e / t), o = new Array(e);
    for (let s = 0; s < e; s++) {
      const i = Math.floor(s / a);
      o[s] = r[i] ?? ji(i);
    }
    return o;
  }
  function nh({ stacked: e, onToggle: t }) {
    return x.jsx(Me, {
      placement: "top",
      label: `Plot style: ${e ? "Stacked areas" : "Multi-line"} \u2014 click to switch to ${e ? "Multi-line" : "Stacked areas"}`,
      children: x.jsx("button", {
        type: "button",
        className: "node-plot-mode-btn nodrag",
        "aria-pressed": e,
        "aria-label": `Switch classifier plot to ${e ? "multi-line" : "stacked areas"}`,
        onClick: (n) => {
          n.stopPropagation(), t();
        },
        onMouseDown: (n) => n.stopPropagation(),
        children: e ? x.jsxs("svg", {
          viewBox: "0 0 24 24",
          width: "16",
          height: "16",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": "true",
          children: [
            x.jsx("path", {
              d: "M3 3v18h18"
            }),
            x.jsx("path", {
              d: "M3 21V14l5 2 5-6 8 3v8Z",
              fill: "currentColor",
              stroke: "none",
              opacity: "0.85"
            })
          ]
        }) : x.jsxs("svg", {
          viewBox: "0 0 24 24",
          width: "16",
          height: "16",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": "true",
          children: [
            x.jsx("path", {
              d: "M3 3v18h18"
            }),
            x.jsx("polyline", {
              points: "3,15 8,10 13,13 21,6"
            }),
            x.jsx("polyline", {
              points: "3,19 8,17 13,18 21,14",
              opacity: "0.6"
            })
          ]
        })
      })
    });
  }
  const kc = U.memo(nh);
  function Wr(e) {
    function t({ data: n, selected: r, type: a, iconShape: o, id: s }) {
      var _a2, _b, _c2;
      const i = n.plotVisible ?? true, c = n.bitfieldVisible ?? true, { getNode: l } = rt(), u = ((_b = (_a2 = l(s)) == null ? void 0 : _a2.style) == null ? void 0 : _b["--node-bg"]) ?? "var(--accent-blue)", v = ke((X) => X.bitFieldData[s]), y = ke((X) => X.getBitFieldParams)(s), S = re((X) => X.colorCodedBits), k = re((X) => X.updateNodeData), d = n.plotStacked ?? true, f = Gt((X) => X.incompleteNodeIds.has(s)), p = Gt((X) => X.byNode.get(s)), b = re((X) => X.connecting && X.viableTargetIds.has(s)), w = ze((X) => {
        var _a3;
        return (_a3 = X.timeSeriesData[s]) == null ? void 0 : _a3.data;
      }), _ = U.useMemo(() => !w || !Array.isArray(w) ? [] : w.slice(-50), [
        w
      ]), g = _ && _.length > 0, m = v && v.bitField && v.bitField.length > 0, P = !i && !c, $ = ((_c2 = v == null ? void 0 : v.bitField) == null ? void 0 : _c2.length) ?? 0, C = (y == null ? void 0 : y.num_l) ?? 0, D = re((X) => e.classColorMap ? Sc(X.nodes, X.edges, s) : void 0), j = U.useMemo(() => e.classColorMap ? wc($, C, D) : void 0, [
        $,
        C,
        D
      ]), B = U.useMemo(() => e.stackedPlot && C >= 1 ? zr(D, C) : void 0, [
        C,
        D
      ]), W = !!e.stackedPlot && d, H = e.bitPanel === "columnar" ? Nl : Er;
      return x.jsxs("div", {
        className: bt("custom-node", a, {
          selected: r,
          "node-incomplete": f,
          "viable-target": b
        }),
        children: [
          x.jsx(qr, {
            plot: g && i,
            bitfield: m && c
          }),
          x.jsx(Vr, {
            nodeId: s
          }),
          x.jsx(tt, {
            type: "target",
            position: nt.Top,
            id: "input"
          }),
          x.jsx(vc, {
            nodeId: s,
            blockType: n.blockType,
            label: n.label
          }),
          x.jsx(bc, {
            nodeId: s,
            blockType: n.blockType
          }),
          x.jsx(oo, {
            nodeID: n.canonicalId,
            label: n.label,
            type: n.blockType,
            iconShape: o,
            alerts: p ?? []
          }),
          g && i && x.jsxs(x.Fragment, {
            children: [
              e.stackedPlot && x.jsx(kc, {
                stacked: d,
                onToggle: () => k(s, {
                  plotStacked: !d
                })
              }),
              x.jsx("div", {
                className: "node-plot-section",
                children: x.jsx(Cr, {
                  data: _,
                  color: u,
                  ...e.pinYAxis && !W ? {
                    yMin: 0,
                    yMax: 1
                  } : {},
                  ...e.step && !W ? {
                    step: e.step
                  } : {},
                  ...e.stackedPlot ? {
                    stacked: W,
                    seriesColors: B
                  } : {}
                })
              })
            ]
          }),
          m && c && x.jsx("div", {
            className: "node-bitfield-section",
            children: x.jsx(H, {
              bitfield: v.bitField,
              bitFieldParams: y,
              color: u,
              ...Br,
              ...e.classColorMap ? {
                colorMap: j,
                colorMapColorGaps: true,
                gapPx: 4,
                borderPx: 2
              } : {},
              colorCoded: S
            })
          }),
          m && P && x.jsx(xc, {
            bitfield: v.bitField,
            color: u
          }),
          e.contextHandle && n.hasContext && x.jsx(tt, {
            type: "target",
            position: nt.Left,
            id: "context"
          }),
          x.jsx(tt, {
            type: "source",
            position: nt.Bottom,
            id: "output"
          }),
          e.labelHandle && n.hasLabel && x.jsx(tt, {
            type: "target",
            position: nt.Right,
            id: "label"
          })
        ]
      });
    }
    return t.displayName = e.displayName, U.memo(t);
  }
  const rh = Wr({
    displayName: "PatternClassifierNode",
    bitPanel: "standard",
    pinYAxis: true,
    step: "end",
    classColorMap: true,
    stackedPlot: true,
    labelHandle: true
  }), ah = Wr({
    displayName: "PatternPoolerNode",
    bitPanel: "standard"
  }), oh = Wr({
    displayName: "SequenceLearnerNode",
    bitPanel: "columnar",
    pinYAxis: true
  }), sh = Wr({
    displayName: "ContextLearnerNode",
    bitPanel: "columnar",
    pinYAxis: true,
    contextHandle: true
  }), vi = {
    bitfield: "Bit Field",
    timeseries: "Time Series",
    encoderChart: "Encoder Visual"
  }, ih = "var(--accent-blue)";
  function ch({ id: e, data: t, selected: n }) {
    var _a2;
    const r = t.vizKind ?? "bitfield", a = t.targetNodeId ?? "", o = re((j) => j.nodes), s = re((j) => j.edges), i = re((j) => j.updateNodeData), c = re((j) => j.colorCodedBits), l = t.plotStacked ?? true, u = U.useMemo(() => o.filter((j) => {
      var _a3;
      return j.type !== "group" && j.type !== "VizNode" && ((_a3 = j.data) == null ? void 0 : _a3.canonicalId);
    }).filter((j) => {
      var _a3;
      const B = ((_a3 = j.data) == null ? void 0 : _a3.blockType) ?? "";
      return r === "timeseries" ? Tr(B) : r === "encoderChart" ? ln(B) : !/DataSource$/.test(B);
    }).map((j) => {
      var _a3, _b;
      return {
        id: j.id,
        label: ((_a3 = j.data) == null ? void 0 : _a3.label) ?? ((_b = j.data) == null ? void 0 : _b.blockType) ?? j.id
      };
    }), [
      o,
      r
    ]), v = ke((j) => a ? j.bitFieldData[a] : void 0), h = ke((j) => j.getBitFieldParams), y = a ? h(a) : null, S = U.useMemo(() => {
      var _a3, _b;
      return ((_b = (_a3 = o.find((j) => j.id === a)) == null ? void 0 : _a3.data) == null ? void 0 : _b.blockType) ?? "";
    }, [
      o,
      a
    ]), k = U.useMemo(() => {
      var _a3, _b;
      return ((_b = (_a3 = o.find((j) => j.id === a)) == null ? void 0 : _a3.data) == null ? void 0 : _b.label) ?? S;
    }, [
      o,
      a,
      S
    ]), d = U.useMemo(() => {
      var _a3, _b;
      return ((_b = (_a3 = o.find((B) => B.id === a)) == null ? void 0 : _a3.style) == null ? void 0 : _b["--node-bg"]) ?? ih;
    }, [
      o,
      a
    ]), f = U.useMemo(() => r === "encoderChart" && a && ln(S) && y ? Qm(S, y, d) : null, [
      r,
      a,
      S,
      y,
      d
    ]), p = ze((j) => {
      var _a3;
      return a ? (_a3 = j.timeSeriesData[a]) == null ? void 0 : _a3.data : void 0;
    }), b = U.useMemo(() => Array.isArray(p) ? p.slice(-50) : [], [
      p
    ]), w = U.useMemo(() => {
      var _a3, _b;
      if (r !== "encoderChart" || !a) return;
      const j = s.find((B) => B.target === a && B.type === "scalarData");
      if (j) return (_b = (_a3 = o.find((B) => B.id === j.source)) == null ? void 0 : _a3.data) == null ? void 0 : _b.currentValue;
    }, [
      r,
      a,
      s,
      o
    ]), _ = !!((_a2 = v == null ? void 0 : v.bitField) == null ? void 0 : _a2.length), g = b.length > 0, m = (y == null ? void 0 : y.num_l) ?? 0, P = U.useMemo(() => S === "PatternClassifier" ? Sc(o, s, a) : void 0, [
      S,
      o,
      s,
      a
    ]), $ = U.useMemo(() => {
      var _a3;
      if (S === "PatternClassifier") return wc(((_a3 = v == null ? void 0 : v.bitField) == null ? void 0 : _a3.length) ?? 0, m, P);
    }, [
      S,
      v,
      m,
      P
    ]), C = U.useMemo(() => S === "PatternClassifier" ? zr(P, m) : void 0, [
      S,
      m,
      P
    ]), D = (j) => {
      i(e, {
        targetNodeId: j || null
      });
      const { nodes: B, edges: W, setEdges: H } = re.getState();
      H(ro(B, W));
    };
    return x.jsxs("div", {
      className: bt("custom-node", "viz-node", {
        selected: n
      }),
      children: [
        x.jsx(qr, {
          plot: r === "timeseries" && g,
          bitfield: r === "bitfield",
          encoderViz: r === "encoderChart"
        }),
        x.jsx(Vr, {
          nodeId: e
        }),
        x.jsx(tt, {
          type: "target",
          position: nt.Top,
          id: "viz-in"
        }),
        x.jsx("div", {
          className: "node-header",
          children: x.jsxs("div", {
            className: "node-content",
            children: [
              x.jsx("div", {
                className: "node-name",
                children: t.label ?? "Visualization"
              }),
              x.jsx("div", {
                className: "node-id",
                children: a ? `${vi[r]} \xB7 ${k}` : `${vi[r]} view`
              })
            ]
          })
        }),
        !a && x.jsx("div", {
          className: "viz-controls nodrag",
          children: x.jsxs("select", {
            className: "viz-target-select",
            value: "",
            onChange: (j) => D(j.target.value),
            children: [
              x.jsx("option", {
                value: "",
                children: "\u2014 pick a block \u2014"
              }),
              u.map((j) => x.jsx("option", {
                value: j.id,
                children: j.label
              }, j.id))
            ]
          })
        }),
        r === "encoderChart" ? f ? x.jsx("div", {
          className: "node-encoder-viz-section",
          children: x.jsx(Du, {
            setup: f.setup,
            ui: Xm,
            cursor: w,
            compact: true,
            style: {
              width: "100%",
              flex: "1 1 0",
              minHeight: 0
            }
          })
        }) : x.jsx(wa, {
          text: a ? "Encoder chart needs an encoder block" : "Pick an encoder to visualize"
        }) : r === "timeseries" ? g ? x.jsxs(x.Fragment, {
          children: [
            S === "PatternClassifier" && x.jsx(kc, {
              stacked: l,
              onToggle: () => i(e, {
                plotStacked: !l
              })
            }),
            x.jsx("div", {
              className: "node-plot-section",
              children: x.jsx(Cr, {
                data: b,
                color: d,
                ...S === "PatternClassifier" ? l ? {
                  stacked: true,
                  seriesColors: C
                } : {
                  stacked: false,
                  seriesColors: C,
                  yMin: 0,
                  yMax: 1,
                  step: "end"
                } : S === "SequenceLearner" || S === "ContextLearner" ? {
                  yMin: 0,
                  yMax: 1
                } : {}
              })
            })
          ]
        }) : x.jsx(wa, {
          text: a ? "No time-series data yet (step the network)" : "Pick a block to visualize"
        }) : _ ? x.jsx("div", {
          className: "node-bitfield-section",
          children: x.jsx(Er, {
            bitfield: v.bitField,
            bitFieldParams: y,
            color: d,
            ...Br,
            ...$ ? {
              colorMap: $,
              colorMapColorGaps: true,
              gapPx: 4,
              borderPx: 2
            } : {},
            interactive: true,
            showChrome: true,
            colorCoded: c
          })
        }) : x.jsx(wa, {
          text: a ? "No bitfield data yet (step the network)" : "Pick a block to visualize"
        })
      ]
    });
  }
  function wa({ text: e }) {
    return x.jsx("div", {
      className: "viz-placeholder",
      children: e
    });
  }
  const hr = U.memo(ch), lh = {
    DiscreteTransformer: Kf,
    PersistenceTransformer: Yf,
    FixedWeightTransformer: Jf,
    TaperingWeightTransformer: Xf,
    PeriodicCellTransformer: Zf,
    PeriodicScalarTransformer: Qf,
    PlaceCellTransformer: eh,
    RandomizedPlaceCellTransformer: th,
    PatternPooler: ah,
    PatternClassifier: rh,
    SequenceLearner: oh,
    ContextLearner: sh,
    SynflowScalarDataSource: Nf,
    SynflowDiscreteDataSource: Cf,
    group: sf,
    VizBitField: hr,
    VizTimeSeries: hr,
    VizEncoder: hr,
    VizNode: hr
  };
  function dh(e, t) {
    const n = [];
    return e > 0 && n.push(`${e}b`), t && t > 0 && n.push(`\u0394t${t}`), n.join(" \xB7 ");
  }
  const bi = 200, xi = 52;
  function uh({ sourceNodeId: e, text: t, labelX: n, labelY: r, timeOffset: a, color: o, selected: s, title: i, icon: c }) {
    const l = re((S) => {
      var _a2, _b;
      return e ? (_b = (_a2 = S.nodes.find((k) => k.id === e)) == null ? void 0 : _a2.data) == null ? void 0 : _b.blockType : void 0;
    }), u = ke((S) => e ? S.bitFieldParams[e] : void 0);
    let v = 0;
    if (!t && l && u) try {
      const S = Lr(l, u);
      Number.isFinite(S) && S > 0 && (v = S);
    } catch {
    }
    const h = t ?? dh(v, a);
    if (!c && !h) return null;
    const y = i ?? `source output: ${v} bit${v === 1 ? "" : "s"}${a && a > 0 ? `, time lag ${a}` : ""}`;
    return x.jsx("foreignObject", {
      x: n - bi / 2,
      y: r - xi / 2,
      width: bi,
      height: xi,
      style: {
        overflow: "visible",
        pointerEvents: "none"
      },
      children: x.jsx("div", {
        className: "edge-info-label-wrap",
        children: x.jsx("div", {
          className: bt("edge-info-label", {
            selected: s,
            "edge-info-label-icon": !!c
          }),
          style: {
            "--edge-info-color": o ?? "var(--border-secondary)",
            pointerEvents: c ? "auto" : "none"
          },
          "data-tooltip": y,
          "data-tooltip-placement": "top",
          children: c ?? h
        })
      })
    });
  }
  const pn = U.memo(uh);
  function ph({ id: e, source: t, sourceX: n, sourceY: r, targetX: a, targetY: o, sourcePosition: s, targetPosition: i, style: c = {}, selected: l, data: u }) {
    const v = u, [h, y, S] = dn({
      sourceX: n,
      sourceY: r,
      targetX: a,
      targetY: o,
      sourcePosition: s,
      targetPosition: i
    }), k = "var(--edge-input)", d = "url(#input-arrow-marker)", f = x.jsx(x.Fragment, {
      children: x.jsx("svg", {
        style: {
          position: "absolute",
          top: 0,
          left: 0
        },
        children: x.jsx("defs", {
          children: x.jsx("marker", {
            className: "react-flow__arrowhead",
            id: "input-arrow-marker",
            markerWidth: "40",
            markerHeight: "40",
            viewBox: "-10 -10 20 20",
            markerUnits: "userSpaceOnUse",
            orient: "auto-start-reverse",
            refX: "0",
            refY: "0",
            children: x.jsx("polyline", {
              className: "arrowclosed",
              style: {
                strokeWidth: 1,
                stroke: k,
                fill: k
              },
              strokeLinecap: "round",
              strokeLinejoin: "round",
              points: "-5,-6 0,0 -5,6 -5,-6"
            })
          })
        })
      })
    });
    return x.jsxs(x.Fragment, {
      children: [
        f,
        (v == null ? void 0 : v.animated) && x.jsx("path", {
          d: h,
          fill: "none",
          stroke: k,
          strokeWidth: "3",
          strokeOpacity: "0.3",
          className: "label-edge-animated",
          style: {
            strokeDasharray: "8 4",
            animation: "dash 1.5s linear infinite"
          }
        }),
        x.jsx(Yt, {
          id: e,
          path: h,
          markerEnd: d,
          style: {
            ...c,
            stroke: k,
            strokeWidth: l ? 12 : 8
          },
          className: "input-edge"
        }),
        x.jsx(pn, {
          sourceNodeId: t,
          labelX: y,
          labelY: S,
          timeOffset: v == null ? void 0 : v.timeOffset,
          color: k,
          selected: l
        })
      ]
    });
  }
  function mh({ id: e, source: t, sourceX: n, sourceY: r, targetX: a, targetY: o, sourcePosition: s, targetPosition: i, style: c = {}, selected: l, data: u }) {
    const v = u, [h, y, S] = dn({
      sourceX: n,
      sourceY: r,
      sourcePosition: s,
      targetX: a,
      targetY: o,
      targetPosition: i
    }), k = "var(--edge-context)", d = "url(#context-arrow-marker)", f = x.jsx(x.Fragment, {
      children: x.jsx("svg", {
        style: {
          position: "absolute",
          top: 0,
          left: 0
        },
        children: x.jsx("defs", {
          children: x.jsx("marker", {
            className: "react-flow__arrowhead",
            id: "context-arrow-marker",
            markerWidth: "40",
            markerHeight: "40",
            viewBox: "-10 -10 20 20",
            markerUnits: "userSpaceOnUse",
            orient: "auto-start-reverse",
            refX: "0",
            refY: "0",
            children: x.jsx("polyline", {
              className: "arrowclosed",
              style: {
                strokeWidth: 1,
                stroke: k,
                fill: k
              },
              strokeLinecap: "round",
              strokeLinejoin: "round",
              points: "-5,-4 0,0 -5,4 -5,-4"
            })
          })
        })
      })
    });
    return x.jsxs(x.Fragment, {
      children: [
        f,
        (v == null ? void 0 : v.animated) && x.jsx("path", {
          d: h,
          fill: "none",
          stroke: k,
          strokeWidth: "3",
          strokeOpacity: "0.3",
          className: "label-edge-animated",
          style: {
            strokeDasharray: "8 4",
            animation: "dash 1.5s linear infinite"
          }
        }),
        x.jsx(Yt, {
          id: e,
          path: h,
          markerEnd: d,
          style: {
            ...c,
            stroke: k,
            strokeWidth: l ? 12 : 8,
            strokeDasharray: "14 10"
          },
          className: "context-edge"
        }),
        x.jsx(pn, {
          sourceNodeId: t,
          labelX: y,
          labelY: S,
          timeOffset: v == null ? void 0 : v.timeOffset,
          color: k,
          selected: l
        })
      ]
    });
  }
  function fh({ id: e, sourceX: t, sourceY: n, targetX: r, targetY: a, sourcePosition: o, targetPosition: s, style: i = {}, selected: c = false, data: l }) {
    const u = l;
    u.animated = true;
    const [v, h, y] = dn({
      sourceX: t,
      sourceY: n,
      targetX: r,
      targetY: a,
      sourcePosition: o,
      targetPosition: s
    }), S = "var(--edge-scalar-data)", k = "url(#scalar-arrow-marker)", d = x.jsx(x.Fragment, {
      children: x.jsx("svg", {
        style: {
          position: "absolute",
          top: 0,
          left: 0
        },
        children: x.jsx("defs", {
          children: x.jsx("marker", {
            className: "react-flow__arrowhead",
            id: "scalar-arrow-marker",
            markerWidth: "40",
            markerHeight: "40",
            viewBox: "-10 -10 20 20",
            markerUnits: "userSpaceOnUse",
            orient: "auto-start-reverse",
            refX: "0",
            refY: "0",
            children: x.jsx("polyline", {
              className: "arrowclosed",
              style: {
                strokeWidth: 1,
                stroke: S,
                fill: S
              },
              strokeLinecap: "round",
              strokeLinejoin: "round",
              points: "-5,-4 0,0 -5,4 -5,-4"
            })
          })
        })
      })
    });
    return x.jsxs(x.Fragment, {
      children: [
        d,
        (u == null ? void 0 : u.animated) && x.jsx("path", {
          d: v,
          fill: "none",
          stroke: S,
          strokeWidth: "3",
          strokeOpacity: "1.0",
          className: "scalar-data-edge-animated",
          style: {
            strokeDasharray: "5 5",
            animation: "dash 0.2s linear infinite"
          }
        }),
        x.jsx(Yt, {
          id: e,
          path: v,
          markerEnd: k,
          style: {
            ...i,
            stroke: S,
            strokeWidth: c ? 12 : 8
          },
          className: "scalar-data-edge"
        }),
        x.jsx(pn, {
          icon: x.jsx(Sd, {
            size: 26,
            stroke: 2.25,
            "aria-hidden": true
          }),
          title: "scalar data",
          labelX: h,
          labelY: y,
          color: S,
          selected: c
        })
      ]
    });
  }
  function hh({ id: e, sourceX: t, sourceY: n, targetX: r, targetY: a, sourcePosition: o, targetPosition: s, style: i = {}, selected: c = false, data: l }) {
    const u = l;
    u.animated = true;
    const [v, h, y] = dn({
      sourceX: t,
      sourceY: n,
      targetX: r,
      targetY: a,
      sourcePosition: o,
      targetPosition: s
    }), S = "var(--edge-discrete-data)", k = "url(#discrete-arrow-marker)", d = x.jsx(x.Fragment, {
      children: x.jsx("svg", {
        style: {
          position: "absolute",
          top: 0,
          left: 0
        },
        children: x.jsx("defs", {
          children: x.jsx("marker", {
            className: "react-flow__arrowhead",
            id: "discrete-arrow-marker",
            markerWidth: "40",
            markerHeight: "40",
            viewBox: "-10 -10 20 20",
            markerUnits: "userSpaceOnUse",
            orient: "auto-start-reverse",
            refX: "0",
            refY: "0",
            children: x.jsx("polyline", {
              className: "arrowclosed",
              style: {
                strokeWidth: 1,
                stroke: S,
                fill: S
              },
              strokeLinecap: "round",
              strokeLinejoin: "round",
              points: "-5,-4 0,0 -5,4 -5,-4"
            })
          })
        })
      })
    });
    return x.jsxs(x.Fragment, {
      children: [
        d,
        (u == null ? void 0 : u.animated) && x.jsx("path", {
          d: v,
          fill: "none",
          stroke: S,
          strokeWidth: "3",
          strokeOpacity: "1.0",
          className: "discrete-data-edge-animated",
          style: {
            strokeDasharray: "5 5",
            animation: "dash 0.2s linear infinite"
          }
        }),
        x.jsx(Yt, {
          id: e,
          path: v,
          markerEnd: k,
          style: {
            ...i,
            stroke: S,
            strokeWidth: c ? 12 : 8
          },
          className: "discrete-data-edge"
        }),
        x.jsx(pn, {
          icon: x.jsx(kd, {
            size: 26,
            stroke: 2.25,
            "aria-hidden": true
          }),
          title: "discrete data",
          labelX: h,
          labelY: y,
          color: S,
          selected: c
        })
      ]
    });
  }
  function yh({ id: e, sourceX: t, sourceY: n, targetX: r, targetY: a, sourcePosition: o, targetPosition: s, style: i = {}, selected: c = false }) {
    const [l, u, v] = dn({
      sourceX: t,
      sourceY: n,
      targetX: r,
      targetY: a,
      sourcePosition: o,
      targetPosition: s,
      borderRadius: 40,
      offset: 40,
      stepPosition: 1
    }), h = "var(--edge-discrete-data)", y = "url(#label-arrow-marker)", S = x.jsx(x.Fragment, {
      children: x.jsx("svg", {
        style: {
          position: "absolute",
          top: 0,
          left: 0
        },
        children: x.jsx("defs", {
          children: x.jsx("marker", {
            className: "react-flow__arrowhead",
            id: "label-arrow-marker",
            markerWidth: "40",
            markerHeight: "40",
            viewBox: "-10 -10 20 20",
            markerUnits: "userSpaceOnUse",
            orient: "auto-start-reverse",
            refX: "0",
            refY: "0",
            children: x.jsx("polyline", {
              className: "arrowclosed",
              style: {
                strokeWidth: 1,
                stroke: h,
                fill: h
              },
              strokeLinecap: "round",
              strokeLinejoin: "round",
              points: "-5,-4 0,0 -5,4 -5,-4"
            })
          })
        })
      })
    });
    return x.jsxs(x.Fragment, {
      children: [
        S,
        x.jsx(Yt, {
          id: e,
          path: l,
          markerEnd: y,
          style: {
            ...i,
            stroke: h,
            strokeWidth: c ? 12 : 8,
            strokeDasharray: "14 10"
          },
          className: "label-edge"
        }),
        x.jsx(pn, {
          text: "label",
          title: "supervised label",
          labelX: u,
          labelY: v,
          color: h,
          selected: c
        })
      ]
    });
  }
  function Si(e, t) {
    const n = e.x + e.width / 2, r = e.y + e.height / 2, a = t.x - n, o = t.y - r;
    if (a === 0 && o === 0) return {
      x: n,
      y: r
    };
    const s = e.width / 2, i = e.height / 2, c = a !== 0 ? s / Math.abs(a) : 1 / 0, l = o !== 0 ? i / Math.abs(o) : 1 / 0, u = Math.min(c, l);
    return {
      x: n + a * u,
      y: r + o * u
    };
  }
  function gh(e, t) {
    const n = {
      x: e.x + e.width / 2,
      y: e.y + e.height / 2
    }, r = {
      x: t.x + t.width / 2,
      y: t.y + t.height / 2
    }, a = Si(e, r), o = Si(t, n);
    return {
      sx: a.x,
      sy: a.y,
      tx: o.x,
      ty: o.y
    };
  }
  function wi(e) {
    var _a2, _b, _c2;
    if (!e) return null;
    const t = (_a2 = e.internals) == null ? void 0 : _a2.positionAbsolute, n = (_b = e.measured) == null ? void 0 : _b.width, r = (_c2 = e.measured) == null ? void 0 : _c2.height;
    return !t || !n || !r ? null : {
      x: t.x,
      y: t.y,
      width: n,
      height: r
    };
  }
  function _h({ id: e, source: t, target: n, style: r = {}, selected: a }) {
    const o = zo(t), s = zo(n), i = wi(o), c = wi(s);
    if (!i || !c) return null;
    const { sx: l, sy: u, tx: v, ty: h } = gh(i, c), [y] = Ll({
      sourceX: l,
      sourceY: u,
      targetX: v,
      targetY: h
    });
    return x.jsx(Yt, {
      id: e,
      path: y,
      style: {
        ...r,
        stroke: "var(--edge-viz)",
        strokeWidth: a ? 4 : 2.5,
        strokeDasharray: "6 6",
        opacity: 0.85
      },
      className: "viz-link-edge"
    });
  }
  const vh = {
    input: ph,
    context: mh,
    scalarData: fh,
    discreteData: hh,
    label: yh,
    vizLink: _h
  }, Pc = "SynflowScalarDataSource", Ec = "SynflowDiscreteDataSource", Cc = "DiscreteTransformer";
  function co(e) {
    var _a2;
    if (e) return e === Pc || e === Ec ? "datasource" : (_a2 = vt(e)) == null ? void 0 : _a2.category;
  }
  const ki = (e) => co(e) === "datasource", Nc = (e) => co(e) === "encoder", Pi = (e) => co(e) === "learning", bh = (e) => Nc(e) && e !== Cc;
  function kr(e, t, n, r) {
    if (!e || !n) return {
      ok: false,
      reason: "unknown endpoint"
    };
    if (e.id === n.id) return {
      ok: false,
      reason: "cannot connect a node to itself"
    };
    if (t === "viz-out") return {
      ok: false,
      reason: "the viz handle is not a data output"
    };
    const a = e.blockType, o = n.blockType, s = r ?? "input";
    return ki(o) ? {
      ok: false,
      reason: "a datasource has no inputs"
    } : !Nc(o) && !Pi(o) ? {
      ok: false,
      reason: "target cannot receive connections"
    } : ki(a) ? s === "context" ? {
      ok: false,
      reason: "a datasource cannot feed a context input"
    } : s === "label" ? a === Ec && o === "PatternClassifier" ? {
      ok: true,
      kind: "labelInput"
    } : {
      ok: false,
      reason: "a label needs a discrete datasource into a PatternClassifier"
    } : a === Pc ? bh(o) ? {
      ok: true,
      kind: "scalarInput"
    } : {
      ok: false,
      reason: "a scalar datasource must feed a scalar encoder"
    } : o === Cc ? {
      ok: true,
      kind: "discreteInput"
    } : {
      ok: false,
      reason: "a discrete datasource must feed a DiscreteTransformer"
    } : t && t !== "output" ? {
      ok: false,
      reason: "connect from the block output handle"
    } : s === "label" ? {
      ok: false,
      reason: "a label needs a discrete datasource, not a block output"
    } : Pi(o) ? s === "context" ? {
      ok: true,
      kind: "context"
    } : {
      ok: true,
      kind: "input"
    } : {
      ok: false,
      reason: "only a learning block accepts an SDR input"
    };
  }
  const xh = [
    "input",
    "context",
    "label"
  ];
  function Sh(e, t, n) {
    var _a2, _b;
    const r = /* @__PURE__ */ new Set(), a = t.find((i) => i.id === e.nodeId);
    if (!a) return r;
    const o = (_a2 = a.data) == null ? void 0 : _a2.blockType, s = e.handleType === "target";
    for (const i of t) {
      if (i.id === e.nodeId) continue;
      const c = (_b = i.data) == null ? void 0 : _b.blockType;
      if (!c) continue;
      let l = false;
      if (s) l = kr({
        id: i.id,
        blockType: c
      }, "output", {
        id: e.nodeId,
        blockType: o
      }, e.handleId ?? "input").ok && !Ma(n, {
        source: i.id,
        target: e.nodeId
      });
      else for (const u of xh) if (kr({
        id: e.nodeId,
        blockType: o
      }, e.handleId ?? "output", {
        id: i.id,
        blockType: c
      }, u).ok && !Ma(n, {
        source: e.nodeId,
        target: i.id
      })) {
        l = true;
        break;
      }
      l && r.add(i.id);
    }
    return r;
  }
  function wh(e, t, n) {
    const r = (t || e).replace(/\s+/g, ""), a = new Set(n);
    let o = 1;
    for (; a.has(`${e}:${r}${o}`); ) o++;
    return `${r}${o}`;
  }
  let Ei = Promise.resolve();
  function kh() {
    return {
      addBlockToCanvas: U.useCallback((t, n, r) => {
        const a = Ei.then(() => Ph(t, n, r));
        return Ei = a.catch(() => {
        }), a;
      }, [])
    };
  }
  async function Ph(e, t, n) {
    const r = ie.getState().wasmNetwork;
    if (!r) return console.error("[AddBlock] WASM network not ready"), null;
    const a = vt(e);
    if (!a) return console.error("[AddBlock] unknown block type:", e), null;
    const o = re.getState().nodes.map((d) => {
      var _a2;
      return ((_a2 = d.data) == null ? void 0 : _a2.canonicalId) ?? "";
    }).filter(Boolean), s = wh(e, a.label, o), i = {
      ...Wd(e),
      ...n ?? {}
    };
    let c = ie.getState().networkStatus === "Error", l;
    if (c) l = `${e}:${s}`;
    else try {
      const d = await Za(r, e, {
        ...i,
        name: s
      });
      if (!d) return console.error("[AddBlock] failed to add block:", e), null;
      l = d;
    } catch (d) {
      if (!uc(d)) throw d;
      console.warn("[AddBlock] network poisoned \u2014 rebuilding from canvas"), ie.getState().setNetworkStatus("Error"), c = true, l = `${e}:${s}`;
    }
    const u = `node-${l}`;
    !c && a.needsInit && r._needsInit.delete(l);
    const { updateBitField: v, setBitFieldParams: h } = ke.getState(), y = lc(e, i);
    if (v(u, y, /* @__PURE__ */ new Set()), h(u, {
      ...i,
      type: e
    }), Tr(e)) {
      const { updateTimeSeries: d } = ze.getState();
      if (e === "PatternClassifier") {
        const f = i.num_l || 2;
        d(u, new Array(f).fill(0), 0);
      } else d(u, 0, 0);
    }
    const S = {
      id: u,
      type: e,
      position: t,
      style: {
        "--node-bg": Aa(o.length),
        ...ao(e)
      },
      data: {
        id: u,
        label: s,
        canonicalId: l,
        blockType: e,
        wasmHandle: l,
        colorIdx: o.length,
        hasInput: true,
        hasOutput: true,
        hasContext: e === "SequenceLearner" || e === "ContextLearner",
        hasLabel: e === "PatternClassifier",
        enabled: true,
        bitfieldVisible: true
      }
    }, k = re.getState();
    return k.setNodes(Ha([
      ...k.nodes,
      S
    ], u)), k.setManualLayout(true), c ? await Gm() : (await un(r), ie.getState().setNetworkStatus("Ready")), u;
  }
  const Eh = /* @__PURE__ */ new Set([
    "SequenceLearner",
    "ContextLearner"
  ]), Ch = /* @__PURE__ */ new Set([
    "SynflowScalarDataSource",
    "SynflowDiscreteDataSource"
  ]);
  function $c() {
    return U.useCallback((e) => {
      (async () => {
        var _a2, _b, _c2, _d2, _e, _f2, _g;
        const t = ie.getState().wasmNetwork;
        if (!t) return;
        const { nodes: n, edges: r, setEdges: a, setManualLayout: o } = re.getState(), s = n.find((b) => b.id === e.source), i = n.find((b) => b.id === e.target);
        if (!s || !i) return;
        const c = ((_a2 = s.data) == null ? void 0 : _a2.canonicalId) ?? ((_b = s.data) == null ? void 0 : _b.wasmHandle), l = ((_c2 = i.data) == null ? void 0 : _c2.canonicalId) ?? ((_d2 = i.data) == null ? void 0 : _d2.wasmHandle);
        if (!c || !l) return;
        const u = e.targetHandle ?? "input", v = Ch.has(s.type ?? ""), h = ((_e = i.data) == null ? void 0 : _e.blockType) ?? i.type ?? "", y = ((_f2 = s.data) == null ? void 0 : _f2.blockType) ?? s.type ?? "", S = kr({
          id: e.source,
          blockType: y
        }, e.sourceHandle, {
          id: e.target,
          blockType: h
        }, e.targetHandle);
        if (!S.ok) {
          console.warn("[ConnectBlocks] invalid connection rejected:", S.reason);
          return;
        }
        if (u === "input" && !v && Eh.has(h)) {
          const b = ke.getState(), w = b.getBitFieldParams(i.id), _ = ($) => {
            var _a3;
            const C = n.find((B) => B.id === $), D = b.getBitFieldParams($), j = ((_a3 = C == null ? void 0 : C.data) == null ? void 0 : _a3.blockType) ?? (C == null ? void 0 : C.type) ?? "";
            return C && D ? Lr(j, D) : 0;
          }, g = /* @__PURE__ */ new Set([
            ...r.filter(($) => $.target === e.target && ($.targetHandle ?? "input") === "input").map(($) => $.source),
            e.source
          ]), m = [];
          for (const $ of g) {
            const C = _($);
            C > 0 && m.push(C);
          }
          const P = m.reduce(($, C) => $ + C, 0);
          if (P > 0 && w && w.num_c !== P) {
            b.setBitFieldParams(i.id, {
              ...w,
              num_c: P
            });
            const $ = {
              id: `edge-${e.source}-${e.target}-${u}`,
              source: e.source,
              target: e.target,
              sourceHandle: e.sourceHandle ?? "output",
              targetHandle: u,
              type: "input",
              data: {
                animated: false,
                canonicalSource: c,
                canonicalTarget: l
              }
            }, C = [
              ...r.filter((H) => H.id !== $.id),
              $
            ];
            a(C), o(true);
            const D = re.getState().nodes, j = ke.getState().bitFieldParams, B = Mt(D, C, j), W = await Fr(B);
            console.info(`[ConnectBlocks] auto-matched ${h}.num_c \u2192 ${P} (sum of ${m.length} input source(s))`), W && ie.getState().setNetworkStatus("Ready");
            return;
          }
        }
        let k, d;
        try {
          switch (S.kind) {
            case "labelInput":
              await Sr(t, c, l), k = "label", d = "labelInput";
              break;
            case "discreteInput":
              await no(t, c, l), k = "discreteData", d = "discreteInput";
              break;
            case "scalarInput":
              await eo(t, c, l), k = "scalarData", d = "scalarInput";
              break;
            case "context":
              await xr(t, c, l, "context", 0), k = "context";
              break;
            default:
              await xr(t, c, l, "input", 0), k = "input";
          }
        } catch (b) {
          console.warn("[ConnectBlocks] WASM connection rejected; edge not added:", b);
          return;
        }
        const f = {
          id: `edge-${e.source}-${e.target}-${u}`,
          source: e.source,
          target: e.target,
          sourceHandle: e.sourceHandle ?? "output",
          targetHandle: u,
          type: k,
          data: {
            animated: false,
            canonicalSource: c,
            canonicalTarget: l,
            ...d ? {
              interfaceType: d
            } : {}
          }
        };
        a([
          ...r.filter((b) => b.id !== f.id),
          f
        ]), o(true);
        let p = false;
        if ((_g = vt(h)) == null ? void 0 : _g.needsInit) {
          const b = [
            ...r.filter((_) => _.id !== f.id),
            f
          ].filter((_) => _.target === e.target), w = b.filter((_) => _.id !== f.id);
          p = !wr(h, w) && wr(h, b), p && t._needsInit.add(l);
        }
        try {
          await un(t);
        } catch (b) {
          console.warn("[ConnectBlocks] rebuild failed (e.g. cycle):", b);
        } finally {
          p && t._needsInit.delete(l);
        }
        ie.getState().setNetworkStatus("Ready");
      })();
    }, []);
  }
  const Nh = 180, ka = "proximity-temp";
  function $h() {
    const e = Fl(), t = $c(), n = U.useCallback((o) => {
      const { nodeLookup: s } = e.getState(), i = s.get(o.id);
      if (!i || Ot(i.type)) return null;
      const c = i.internals.positionAbsolute;
      let l = null;
      for (const v of s.values()) {
        if (v.id === i.id || Ot(v.type)) continue;
        const h = v.internals.positionAbsolute, y = h.x - c.x, S = h.y - c.y, k = Math.sqrt(y * y + S * S);
        k < Nh && (l === null || k < l.distance) && (l = {
          id: v.id,
          x: h.x,
          distance: k
        });
      }
      if (!l) return null;
      const u = l.x < c.x;
      return {
        source: u ? l.id : i.id,
        target: u ? i.id : l.id
      };
    }, [
      e
    ]), r = U.useCallback((o, s) => {
      const i = n(s), { edges: c, setEdges: l } = re.getState(), u = c.filter((v) => v.className !== ka);
      if (i && !u.some((v) => v.source === i.source && v.target === i.target)) {
        const v = {
          id: `proximity-${i.source}-${i.target}`,
          source: i.source,
          target: i.target,
          sourceHandle: "output",
          targetHandle: "input",
          className: ka,
          data: {
            animated: false
          }
        };
        l([
          ...u,
          v
        ]);
      } else c.length !== u.length && l(u);
    }, [
      n
    ]), a = U.useCallback((o, s) => {
      const i = n(s), { edges: c, setEdges: l } = re.getState(), u = c.filter((h) => h.className !== ka);
      if (u.length !== c.length && l(u), !i || u.some((h) => h.source === i.source && h.target === i.target)) return;
      const v = {
        source: i.source,
        target: i.target,
        sourceHandle: "output",
        targetHandle: "input"
      };
      t(v);
    }, [
      n,
      t
    ]);
    return {
      onNodeDrag: r,
      onNodeDragStop: a
    };
  }
  let Ci = Promise.resolve();
  function Ni(e) {
    const t = Ci.then(e);
    return Ci = t.catch(() => {
    }), t;
  }
  async function $i() {
    const { nodes: e, edges: t } = re.getState(), { bitFieldParams: n } = ke.getState(), r = Mt(e, t, n);
    await Fr(r) && ie.getState().setNetworkStatus("Ready");
  }
  function Ih() {
    const e = U.useCallback((n) => {
      n.some((r) => {
        var _a2;
        return (_a2 = r.data) == null ? void 0 : _a2.canonicalId;
      }) && Ni($i);
    }, []), t = U.useCallback((n) => {
      const r = re.getState().nodes, a = (s) => r.some((i) => i.id === s);
      n.some((s) => s.type !== "vizLink" && a(s.source) && a(s.target)) && Ni($i);
    }, []);
    return {
      onNodesDelete: e,
      onEdgesDelete: t
    };
  }
  function Dh(e, t, n) {
    const r = new Set(n);
    let a = 1;
    for (; r.has(`${e}:${t}${a}`); ) a++;
    return `${t}${a}`;
  }
  function Th() {
    return {
      addDatasource: U.useCallback(async (t, n, r) => {
        const a = ie.getState().wasmNetwork;
        if (!a) return console.error("[AddDatasource] WASM network not ready"), null;
        const o = t === "SynflowDiscreteDataSource", s = re.getState().nodes.map((y) => {
          var _a2;
          return ((_a2 = y.data) == null ? void 0 : _a2.canonicalId) ?? "";
        }).filter(Boolean), i = Dh(t, o ? "DiscreteSource" : "ScalarSource", s), c = JSON.stringify(r), l = o ? await to(a, i, c) : await Qa(a, i, c);
        if (!l) return console.error("[AddDatasource] failed to create datasource:", t), null;
        const u = `node-${l}`;
        ze.getState().updateTimeSeries(u, 0, 0);
        const v = {
          id: u,
          type: t,
          position: n,
          style: {
            "--node-bg": "#000000",
            ...ao(t, true)
          },
          data: {
            id: u,
            label: i,
            canonicalId: l,
            blockType: t,
            wasmHandle: l,
            sourceId: `synflow-${l}`,
            sourceType: o ? "discrete" : "scalar",
            colorIdx: s.length,
            hasOutput: true,
            hasInput: false,
            params: r
          }
        }, h = re.getState();
        return h.setNodes(Ha([
          ...h.nodes,
          v
        ], u)), h.setManualLayout(true), await un(a), ie.getState().setNetworkStatus("Ready"), u;
      }, [])
    };
  }
  function Rh() {
    const e = Gt((c) => c.issues), t = ie((c) => c.networkStatus), n = ie((c) => c.lastError);
    let r = null, a = "", o = "";
    const s = e.filter((c) => c.kind === "cycle"), i = e.filter((c) => c.level === "warn");
    if (t === "Error") r = "error", a = "\u26D4", o = n ?? "Network error \u2014 it will rebuild from the canvas on your next edit.";
    else if (s.length > 0) {
      r = "error", a = "\u26D4";
      const c = new Set(s.map((l) => l.nodeId)).size;
      o = `Dependency loop with no time delay (${c} block${c > 1 ? "s" : ""}). Add a time-delayed connection or remove an edge.`;
    } else if (i.length > 0) {
      r = "warn", a = "\u26A0";
      const c = i.slice(0, 2).map((u) => u.message), l = i.length - c.length;
      o = (i.length === 1 ? "1 issue \u2014 " : `${i.length} issues \u2014 `) + c.join("; ") + (l > 0 ? `; +${l} more` : "");
    }
    return r ? x.jsx(Oi, {
      position: "bottom-center",
      children: x.jsxs("div", {
        className: `network-status-footer network-status-footer-${r}`,
        role: r === "error" ? "alert" : "status",
        children: [
          x.jsx("span", {
            className: "network-status-footer-icon",
            children: a
          }),
          x.jsx("span", {
            className: "network-status-footer-text",
            children: o
          })
        ]
      })
    }) : null;
  }
  const jh = U.memo(Rh), Oh = (e) => e >= 55 ? "good" : e >= 30 ? "ok" : "poor";
  function Mh({ statusId: e }) {
    const [t, n] = U.useState(0), [r, a] = U.useState(0), o = ie((u) => u.wasmReady), s = ie((u) => u.wasmStatus), i = ie((u) => u.isRunning), c = ie((u) => u.executionStep), l = o ? i ? "Running" : "Ready" : s;
    return U.useEffect(() => {
      const u = setInterval(() => {
        n(et.getCurrentFPS()), a(et.getCurrentExecutionRate());
      }, 200);
      return () => clearInterval(u);
    }, []), x.jsxs("div", {
      className: "perf-stats",
      role: "status",
      "aria-label": "Runtime status",
      children: [
        x.jsxs("div", {
          className: "perf-stat",
          children: [
            x.jsx("span", {
              className: bt("status-indicator", {
                active: o,
                running: i
              }),
              id: e
            }),
            x.jsx("span", {
              className: "perf-label",
              children: "Simulator"
            }),
            x.jsx("span", {
              className: "perf-value",
              "data-running": i,
              children: l
            })
          ]
        }),
        x.jsx("span", {
          className: "perf-sep"
        }),
        x.jsxs("div", {
          className: "perf-stat",
          children: [
            x.jsx("span", {
              className: "perf-label",
              children: "Step"
            }),
            x.jsx("span", {
              className: "perf-value perf-num",
              children: c
            })
          ]
        }),
        x.jsx("span", {
          className: "perf-sep"
        }),
        x.jsxs("div", {
          className: "perf-stat",
          children: [
            x.jsx("span", {
              className: "perf-label",
              children: "Render"
            }),
            x.jsx("span", {
              className: "perf-value perf-num",
              "data-level": Oh(t),
              children: t
            }),
            x.jsx("span", {
              className: "perf-unit",
              children: "FPS"
            })
          ]
        }),
        x.jsx("span", {
          className: "perf-sep"
        }),
        x.jsxs("div", {
          className: "perf-stat",
          children: [
            x.jsx("span", {
              className: "perf-label",
              children: "Exec"
            }),
            x.jsx("span", {
              className: "perf-value perf-num",
              "data-running": r > 0,
              children: r
            }),
            x.jsx("span", {
              className: "perf-unit",
              children: "steps/s"
            })
          ]
        })
      ]
    });
  }
  const Lh = /* @__PURE__ */ new Set([
    "SynflowScalarDataSource",
    "SynflowDiscreteDataSource"
  ]);
  function Fh({ fitViewOptions: e }) {
    const t = re((C) => C.nodes), n = re((C) => C.edges), r = re((C) => C.onNodesChange), a = re((C) => C.onEdgesChange), o = re((C) => C.onConnect), s = pc((C) => C.capabilities), { screenToFlowPosition: i } = rt(), { addBlockToCanvas: c } = kh(), { addDatasource: l } = Th(), u = $c(), { onNodeDrag: v, onNodeDragStop: h } = $h(), { onNodesDelete: y, onEdgesDelete: S } = Ih(), k = U.useCallback((C) => {
      var _a2, _b;
      const { nodes: D, edges: j } = re.getState(), B = D.find((X) => X.id === C.source), W = D.find((X) => X.id === C.target);
      return kr({
        id: C.source,
        blockType: ((_a2 = B == null ? void 0 : B.data) == null ? void 0 : _a2.blockType) ?? (B == null ? void 0 : B.type)
      }, C.sourceHandle, {
        id: C.target,
        blockType: ((_b = W == null ? void 0 : W.data) == null ? void 0 : _b.blockType) ?? (W == null ? void 0 : W.type)
      }, C.targetHandle).ok ? !Ma(j, {
        source: C.source,
        target: C.target
      }) : false;
    }, []), d = re((C) => C.beginConnect), f = re((C) => C.endConnect), p = U.useCallback((C, D) => {
      if (!D.nodeId) return;
      const { nodes: j, edges: B } = re.getState();
      d(Sh({
        nodeId: D.nodeId,
        handleId: D.handleId,
        handleType: D.handleType
      }, j, B));
    }, [
      d
    ]), b = U.useCallback(() => f(), [
      f
    ]), [w, _] = U.useState(null), g = U.useCallback(({ nodes: C, edges: D }) => wf() || C.length === 0 ? Promise.resolve(true) : new Promise((j) => {
      _({
        nodeCount: C.length,
        edgeCount: D.length,
        resolve: j
      });
    }), []), m = U.useCallback((C) => {
      s.addRemoveNodes && (C.preventDefault(), C.dataTransfer.dropEffect = "move");
    }, [
      s.addRemoveNodes
    ]), P = U.useCallback(async (C) => {
      if (!s.addRemoveNodes) return;
      C.preventDefault();
      const D = C.dataTransfer.getData(Hi);
      if (!D) return;
      const j = i({
        x: C.clientX,
        y: C.clientY
      });
      if (Ot(D)) {
        mc({
          vizKind: Xd[D],
          position: j,
          targetNodeId: null
        });
        return;
      }
      if (Lh.has(D)) {
        const B = D === "SynflowDiscreteDataSource", W = C.dataTransfer.getData(Gi), H = Ba.includes(W) ? W : "sine", X = B ? Ui(Wi()) : Vi(H, Ra(H));
        await l(D, j, X);
        return;
      }
      await c(D, j);
    }, [
      s.addRemoveNodes,
      i,
      c,
      l
    ]), $ = U.useCallback(async () => {
      const { nodes: C, edges: D } = re.getState(), { bitFieldParams: j } = ke.getState(), B = Mt(C, D, j), W = Li(`${window.location.origin}${window.location.pathname}`, B);
      try {
        await navigator.clipboard.writeText(W), console.log("[Export] DashboardConfig URL copied to clipboard");
      } catch {
        window.prompt("Dashboard config URL (copy):", W);
      }
    }, []);
    return x.jsxs("div", {
      id: "network-panel",
      children: [
        x.jsxs(Al, {
          nodes: t,
          edges: n,
          nodeTypes: lh,
          edgeTypes: vh,
          onNodesChange: r,
          onEdgesChange: a,
          onConnect: s.addRemoveNodes ? u : o,
          onConnectStart: s.addRemoveNodes ? p : void 0,
          onConnectEnd: s.addRemoveNodes ? b : void 0,
          isValidConnection: k,
          connectionLineStyle: {
            stroke: "var(--accent-blue)",
            strokeWidth: 6,
            strokeLinecap: "round"
          },
          connectionRadius: 45,
          onNodeDrag: s.addRemoveNodes ? v : void 0,
          onNodeDragStop: s.addRemoveNodes ? h : void 0,
          onNodesDelete: s.addRemoveNodes ? y : void 0,
          onEdgesDelete: s.addRemoveNodes ? S : void 0,
          onBeforeDelete: s.addRemoveNodes ? g : void 0,
          onDragOver: m,
          onDrop: P,
          nodesDraggable: s.layout,
          nodesConnectable: s.addRemoveNodes,
          elementsSelectable: s.layout || s.addRemoveNodes,
          minZoom: 0.01,
          proOptions: {
            hideAttribution: true
          },
          children: [
            s.addRemoveNodes && x.jsx(Oi, {
              position: "top-left",
              children: x.jsx(tu, {})
            }),
            x.jsx(ql, {
              fitViewOptions: e,
              showInteractive: false,
              className: "my-custom-control-button",
              children: x.jsx(Bl, {
                onClick: $,
                "data-tooltip": "Export config (copy URL)",
                "data-tooltip-placement": "right",
                "aria-label": "Export config",
                children: "\u2913"
              })
            }),
            x.jsx(zl, {
              variant: Vl.Dots,
              gap: 12,
              size: 1,
              color: "var(--border-primary)"
            }),
            x.jsx(jh, {})
          ]
        }),
        x.jsx("div", {
          className: "perf-stats-ribbon",
          children: x.jsx(Mh, {})
        }),
        w && x.jsx(lu, {
          title: "Delete?",
          danger: true,
          confirmLabel: "Delete",
          message: w.nodeCount === 1 ? `Delete this node${w.edgeCount > 0 ? ` and its ${w.edgeCount} edge${w.edgeCount === 1 ? "" : "s"}` : ""}?` : `Delete these ${w.nodeCount} nodes${w.edgeCount > 0 ? ` and their ${w.edgeCount} edge${w.edgeCount === 1 ? "" : "s"}` : ""}?`,
          onConfirm: () => {
            w.resolve(true), _(null);
          },
          onCancel: () => {
            w.resolve(false), _(null);
          }
        })
      ]
    });
  }
  const Ht = {
    padding: "5px 12px",
    borderRadius: 5,
    cursor: "pointer",
    fontSize: 13,
    border: "1px solid var(--border-primary)",
    background: "var(--bg-tertiary)",
    color: "var(--text-primary)"
  }, Pa = {
    ...Ht,
    background: "var(--accent-blue)",
    color: "var(--btn-primary-text)",
    borderColor: "var(--accent-blue)"
  }, Ea = {
    minWidth: 74,
    height: 26,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 8px",
    fontSize: 12.5,
    lineHeight: 1,
    boxSizing: "border-box"
  }, Ca = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    background: "var(--bg-tertiary)",
    border: "1px solid var(--border-primary)",
    borderRadius: 5,
    color: "var(--text-primary)",
    cursor: "pointer"
  }, Ah = {
    fontSize: 13,
    padding: "4px 6px",
    borderRadius: 5,
    border: "1px solid var(--border-primary)",
    background: "var(--bg-tertiary)",
    color: "var(--text-primary)",
    maxWidth: 220
  }, Ic = 500, Dc = 2, qh = (e) => Math.round(Math.pow(e / 100, Dc) * Ic), Bh = (e) => Math.round(Math.pow(e / Ic, 1 / Dc) * 100), zh = af();
  function Vh() {
    const e = rf, t = Object.keys(Ar), n = {}, r = /* @__PURE__ */ new Set();
    for (const [o, s] of Object.entries(e)) {
      const i = s.filter((c) => t.includes(c));
      i.length > 0 && (n[o] = i);
      for (const c of i) r.add(c);
    }
    const a = t.filter((o) => !r.has(o));
    return a.length > 0 && (n.Other = a), n;
  }
  function Wh() {
    const e = ie((L) => L.isRunning), t = ie((L) => L.wasmReady), n = ie((L) => L.networkStatus), r = ie((L) => L.currentDemo), a = ie((L) => L.demoDescription), o = ie((L) => L.speed), s = ie((L) => L.setSpeed), i = ie((L) => L.start), c = ie((L) => L.stop), l = ie((L) => L.singleStep), u = ie((L) => L.fullReset), v = ie((L) => L.destroyNetwork), h = ie((L) => L.setWasmNetwork), y = ie((L) => L.setCurrentDemo), S = re((L) => L.nodes), k = re((L) => L.colorCodedBits), d = re((L) => L.setColorCodedBits), f = re((L) => L.reset), p = ze((L) => L.clearData), b = ke((L) => L.clearData), { initializeDemo: w } = _c(), [_, g] = U.useState(Bh(o)), [m, P] = U.useState(""), $ = U.useMemo(() => Vh(), []), [C, D] = U.useState("idle"), j = U.useRef(null), B = (L) => {
      D(L), j.current !== null && window.clearTimeout(j.current), j.current = window.setTimeout(() => D("idle"), 1500);
    }, [W, H] = U.useState("closed"), [X, ce] = U.useState(""), [oe, Q] = U.useState(null);
    U.useEffect(() => {
      if (W === "closed") return;
      const L = (q) => {
        q.key === "Escape" && H("closed");
      };
      return window.addEventListener("keydown", L), () => window.removeEventListener("keydown", L);
    }, [
      W
    ]);
    const G = (L) => {
      const q = parseInt(L.target.value);
      g(q), s(qh(q));
    }, T = S.some((L) => {
      var _a2;
      return (_a2 = L.data) == null ? void 0 : _a2.canonicalId;
    }), z = t && T && !e, M = U.useRef(null), E = U.useRef(false), I = async (L) => {
      if (t) try {
        if (n !== "None") {
          e && c(), v(), f(), p(), b(), await new Promise((J) => setTimeout(J, 50));
          const q = await Xa();
          if (!q) {
            console.error("[Studio] Failed to create new WASM network");
            return;
          }
          h(q);
        }
        await w(L);
      } catch (q) {
        console.error("[Studio] Demo init failed:", q);
      }
    }, V = async (L) => {
      const q = L.target.value;
      if (P(q), !q) {
        M.current = null;
        return;
      }
      y(q, zh[q] || ""), E.current = true, M.current = null;
      try {
        await I(q), M.current = new Set(re.getState().nodes.map((J) => J.id));
      } finally {
        E.current = false;
      }
    };
    U.useEffect(() => {
      if (E.current || !m || !M.current) return;
      const L = M.current;
      S.length === L.size && S.every((J) => L.has(J.id)) || (P(""), M.current = null, y("", ""));
    }, [
      S,
      m,
      y
    ]);
    const ne = async () => {
      const { nodes: L, edges: q } = re.getState(), { bitFieldParams: J } = ke.getState(), le = Mt(L, q, J), ge = Li(`${window.location.origin}${window.location.pathname}`, le);
      try {
        await navigator.clipboard.writeText(ge), console.log("[Studio] config URL copied to clipboard"), B("copied");
      } catch {
        B("error"), window.prompt("Studio config URL (copy):", ge);
      }
    }, ee = () => {
      const { nodes: L, edges: q } = re.getState(), { bitFieldParams: J } = ke.getState(), le = Mt(L, q, J);
      ce(JSON.stringify(le, null, 2)), Q(null), H("export");
    }, fe = () => {
      ce(""), Q(null), H("import");
    }, ae = async () => {
      try {
        await navigator.clipboard.writeText(X), B("copied");
      } catch {
        B("error");
      }
    }, R = () => {
      const L = X.trim();
      if (!L) {
        Q("Paste a config JSON document first.");
        return;
      }
      try {
        JSON.parse(L);
      } catch (q) {
        Q(`Invalid JSON: ${q instanceof Error ? q.message : String(q)}`);
        return;
      }
      window.location.hash = `#${encodeURIComponent(L)}`, window.location.reload();
    }, F = () => {
      c(), u(), f(), p(), b();
    }, Y = o === 0 ? "max" : (1e3 / o).toFixed(1);
    return x.jsxs(x.Fragment, {
      children: [
        x.jsxs("header", {
          id: "studio-toolbar",
          style: {
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 12px",
            borderBottom: "1px solid var(--border-primary)",
            background: "var(--bg-secondary)",
            color: "var(--text-primary)"
          },
          children: [
            x.jsx("span", {
              style: {
                fontWeight: 700,
                marginRight: 8
              },
              children: "DCC Studio"
            }),
            x.jsx("button", {
              id: e ? "stop-btn" : "start-btn",
              style: {
                ...e ? Ht : Pa,
                ...Ea
              },
              onClick: e ? c : i,
              disabled: e ? false : !z,
              "data-tooltip": e ? "Stop the simulation" : "Run the simulation",
              "data-tooltip-placement": "bottom",
              children: e ? "\u23F9 Stop" : "\u25B6 Run"
            }),
            x.jsx("button", {
              id: "step-btn",
              style: {
                ...Ht,
                ...Ea
              },
              onClick: l,
              disabled: !z,
              children: "\u23ED Step"
            }),
            x.jsx("button", {
              id: "clear-btn",
              style: {
                ...Ht,
                ...Ea
              },
              onClick: F,
              disabled: e,
              children: "\u2326 Clear"
            }),
            x.jsx("span", {
              style: {
                marginLeft: 8,
                display: "inline-flex",
                alignItems: "center",
                color: "var(--text-secondary)"
              },
              "data-tooltip": "Speed control \u2014 drag to set the simulation step rate",
              "data-tooltip-placement": "bottom",
              "aria-label": "Speed control",
              children: x.jsx(dd, {
                size: 20,
                stroke: 2,
                "aria-hidden": true
              })
            }),
            x.jsx("input", {
              type: "range",
              id: "studio-speed",
              className: "dcc-range",
              min: 0,
              max: 100,
              value: _,
              onChange: G,
              "aria-label": "Speed control",
              "data-tooltip": `${o}ms (quadratic scale)`,
              "data-tooltip-placement": "bottom",
              style: {
                direction: "rtl",
                width: 120,
                "--range-fill": `${100 - _}%`
              }
            }),
            x.jsx("span", {
              style: {
                fontSize: 12,
                color: "var(--text-primary)",
                fontFamily: "ui-monospace, monospace",
                minWidth: 78,
                textAlign: "right"
              },
              children: Y === "max" ? "max speed" : `${Y} steps/s`
            }),
            x.jsx(Me, {
              placement: "bottom",
              label: k ? "Bitfields: color-coded (click for black & white)" : "Bitfields: black & white (click for color)",
              children: x.jsx("button", {
                id: "studio-color-bits",
                type: "button",
                className: "tb-colorbits-btn",
                style: {
                  marginLeft: 8
                },
                "aria-pressed": k,
                "aria-label": "Toggle color-coded bitfields",
                onClick: () => d(!k)
              })
            }),
            x.jsx("span", {
              style: {
                flex: 1
              }
            }),
            x.jsx("span", {
              style: {
                display: "inline-flex",
                alignItems: "center",
                color: "var(--text-secondary)"
              },
              "data-tooltip": "Load a demo network",
              "data-tooltip-placement": "bottom",
              "aria-label": "Load demo",
              children: x.jsx(fd, {
                size: 20,
                stroke: 2,
                "aria-hidden": true
              })
            }),
            x.jsxs("select", {
              id: "studio-demo",
              value: m,
              onChange: V,
              disabled: e || !t,
              "aria-label": "Load demo",
              style: Ah,
              children: [
                x.jsx("option", {
                  value: "",
                  children: "-- Select Demo --"
                }),
                Object.entries($).map(([L, q]) => x.jsx("optgroup", {
                  label: L,
                  children: q.map((J) => x.jsx("option", {
                    value: J,
                    children: Ar[J].name
                  }, J))
                }, L))
              ]
            }),
            x.jsx(Me, {
              label: "Copy a shareable link",
              placement: "bottom",
              children: x.jsx("button", {
                id: "export-btn",
                type: "button",
                className: "tb-icon-btn",
                style: Ca,
                onClick: ne,
                "aria-label": "Copy link",
                children: x.jsx(pd, {
                  size: 22,
                  stroke: 2,
                  "aria-hidden": true
                })
              })
            }),
            x.jsx(Me, {
              label: "Import config (JSON)",
              placement: "bottom",
              children: x.jsx("button", {
                id: "import-json-btn",
                type: "button",
                className: "tb-icon-btn",
                style: Ca,
                onClick: fe,
                "aria-label": "Import",
                children: x.jsx(_d, {
                  size: 22,
                  stroke: 2,
                  "aria-hidden": true
                })
              })
            }),
            x.jsx(Me, {
              label: "Export config (JSON)",
              placement: "bottom",
              children: x.jsx("button", {
                id: "export-json-btn",
                type: "button",
                className: "tb-icon-btn",
                style: Ca,
                onClick: ee,
                "aria-label": "Export",
                children: x.jsx(cd, {
                  size: 22,
                  stroke: 2,
                  "aria-hidden": true
                })
              })
            }),
            C !== "idle" && x.jsx("span", {
              role: "status",
              style: {
                fontSize: 12,
                padding: "3px 8px",
                borderRadius: 4,
                background: C === "copied" ? "var(--accent-green)" : "var(--accent-red)",
                color: "var(--btn-primary-text)",
                fontWeight: 600
              },
              children: C === "copied" ? "Copied!" : "Copy failed"
            })
          ]
        }),
        r && a && a !== "No demo selected" && x.jsxs("div", {
          id: "studio-demo-description",
          style: {
            padding: "4px 12px",
            fontSize: 12,
            color: "var(--text-secondary)",
            background: "var(--bg-tertiary)",
            borderBottom: "1px solid var(--border-primary)"
          },
          children: [
            x.jsxs("span", {
              style: {
                fontWeight: 600,
                color: "var(--text-primary)"
              },
              children: [
                r,
                ":"
              ]
            }),
            " ",
            a
          ]
        }),
        W !== "closed" && Nr.createPortal(x.jsx("div", {
          onClick: () => H("closed"),
          style: {
            position: "fixed",
            inset: 0,
            zIndex: 1e3,
            background: "rgba(0, 0, 0, 0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: x.jsxs("div", {
            onClick: (L) => L.stopPropagation(),
            style: {
              width: 720,
              maxWidth: "92vw",
              maxHeight: "88vh",
              background: "var(--bg-secondary)",
              border: "2px solid var(--border-primary)",
              borderRadius: "var(--radius-md)",
              boxShadow: "var(--shadow-md)",
              color: "var(--text-primary)",
              display: "flex",
              flexDirection: "column",
              padding: "16px 20px 18px"
            },
            children: [
              x.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  paddingBottom: 10,
                  marginBottom: 12,
                  borderBottom: "1px solid var(--border-secondary)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--header-title-color)"
                },
                children: [
                  x.jsx("span", {
                    style: {
                      flex: 1
                    },
                    children: W === "export" ? "Export Studio Config (JSON)" : "Import Studio Config (JSON)"
                  }),
                  x.jsx("button", {
                    type: "button",
                    onClick: () => H("closed"),
                    style: {
                      ...Ht,
                      fontSize: "1.2rem",
                      lineHeight: 1,
                      padding: "1px 10px"
                    },
                    "data-tooltip": "Close",
                    "data-tooltip-placement": "bottom",
                    children: "\xD7"
                  })
                ]
              }),
              x.jsx("textarea", {
                value: X,
                onChange: (L) => {
                  ce(L.target.value), Q(null);
                },
                readOnly: W === "export",
                spellCheck: false,
                style: {
                  flex: 1,
                  minHeight: 360,
                  width: "100%",
                  boxSizing: "border-box",
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: 12,
                  lineHeight: 1.4,
                  color: "var(--text-primary)",
                  background: "var(--bg-quaternary)",
                  border: "1px solid var(--border-secondary)",
                  borderRadius: 4,
                  padding: 8,
                  resize: "vertical",
                  whiteSpace: "pre",
                  overflow: "auto"
                },
                placeholder: W === "import" ? "Paste a Studio config JSON document here\u2026" : void 0
              }),
              oe && x.jsx("div", {
                style: {
                  marginTop: 10,
                  padding: "8px 10px",
                  background: "rgba(225, 87, 89, 0.16)",
                  border: "1px solid var(--accent-red)",
                  borderRadius: 5,
                  color: "var(--accent-red)",
                  fontSize: "0.85rem"
                },
                children: oe
              }),
              x.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 10,
                  marginTop: 16
                },
                children: [
                  x.jsx("button", {
                    type: "button",
                    onClick: () => H("closed"),
                    style: Ht,
                    children: "Cancel"
                  }),
                  W === "export" ? x.jsx("button", {
                    type: "button",
                    onClick: ae,
                    style: Pa,
                    children: "Copy to Clipboard"
                  }) : x.jsx("button", {
                    type: "button",
                    onClick: R,
                    style: Pa,
                    children: "Load"
                  })
                ]
              })
            ]
          })
        }), document.body)
      ]
    });
  }
  const Ii = {
    padding: 0.2
  };
  function Uh() {
    const e = Ul({
      includeHiddenNodes: true
    }), { applyElkDefault: t } = gc(), { fitView: n } = rt(), r = U.useRef(false);
    return U.useEffect(() => {
      var _a2;
      if (!e || re.getState().manualLayout || r.current) return;
      const a = Fi(), o = !!(((_a2 = a == null ? void 0 : a.layout) == null ? void 0 : _a2.nodes) && Object.keys(a.layout.nodes).length > 0);
      if (r.current = true, !o && re.getState().nodes.length > 0) {
        t();
        return;
      }
      re.getState().nodes.length > 0 && n(Ii);
    }, [
      e
    ]), Om(), Jm(), Of(), Mf(), x.jsxs("div", {
      id: "container",
      children: [
        x.jsx(Wh, {}),
        x.jsx("div", {
          id: "main-content",
          children: x.jsx(Fh, {
            fitViewOptions: Ii
          })
        })
      ]
    });
  }
  function Hh() {
    return x.jsx(Wl, {
      children: x.jsx(Uh, {})
    });
  }
  Ri();
  $l.createRoot(document.getElementById("root")).render(x.jsx(U.StrictMode, {
    children: x.jsx(Hh, {})
  }));
});
