var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as G, j as k, a as Ta, c as Ec, d as Cc, e as $c, g as Nc, f as Ic, h as Tc, N as Dc, b as ut, H as Qe, P as et, i as on, B as Ut, k as ms, l as Rc, m as Oc, n as vi, o as jc, C as Lc, p as Mc, q as Ac, s as Fc } from "./reactflow-C_yu4jb3.js";
import { g as qc, E as Bc } from "./elkjs-rLLxZdMu.js";
import { T as tt, f as lt, h as xa, e as dt, E as zc, b as fs, d as Vc, P as Sa, g as hs, j as Wc, L as ys, k as gs, l as Rt, m as _s, n as gn, o as _n, B as Ae, p as _t, V as wa, q as vs, r as Jr, s as Uc, t as Hc, u as Gc, v as Kc, w as Yc, x as Xc, y as Jc, z as Zr, A as Da, C as bs, F as Zc, D as Qc, G as el, H as xs, I as Ss, J as tl, K as nl, M as ws, N as ks, R as rl, O as Ps, Q as al, S as Es, U as sl, W as ol, X as bi, Y as il, Z as xi, _ as Cs, $ as cl, a0 as ll, a1 as dl, a2 as ul, a3 as pl, a4 as ml, a5 as fl, a6 as hl, i as yl, a7 as gl, a8 as _l, a9 as vn, aa as Qr, ab as vl, ac as bn, ad as $s, ae as ht, af as Ns, ag as bl, ah as Is, ai as Je, aj as Ts, ak as ea, al as ta, am as xn, an as Sn, ao as xl, ap as Sl, aq as wl, ar as Ht, as as wr, at as kl, au as Ra, a as bt, av as Si, aw as kr, ax as Pr, ay as Pl, az as Be, aA as El, aB as Cl, aC as $l, aD as Nl, aE as Il, __tla as __tla_0 } from "./StackedSubplotPanel-DOZUNL8i.js";
import "./markdown-BhQy4Yqe.js";
import { g as Tl, i as Dl } from "./echarts-CxWuOr5q.js";
import { runAnalysis as Rl, __tla as __tla_1 } from "./wasm-api-CIbLdSEZ.js";
let nc, si, Ri, vh, th, Oi, sn, pe, nt, Ge, ke, _h, gh, ln, sd, yh, Yi, Qm, mh, hh, uh, dh, ph, lh, ec, _m, ae, fh;
let __tla = Promise.all([
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
  var Ol = {
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
  nt = (e, t, n, r) => {
    const a = G.forwardRef(({ color: s = "currentColor", size: o = 24, stroke: i = 2, title: c, className: l, children: u, ...v }, y) => G.createElement("svg", {
      ref: y,
      ...Ol[e],
      width: o,
      height: o,
      className: [
        "tabler-icon",
        `tabler-icon-${t}`,
        l
      ].join(" "),
      strokeWidth: i,
      stroke: s,
      ...v
    }, [
      c && G.createElement("title", {
        key: "svg-title"
      }, c),
      ...r.map(([g, x]) => G.createElement(g, x)),
      ...Array.isArray(u) ? u : [
        u
      ]
    ]));
    return a.displayName = `${n}`, a;
  };
  const jl = [
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
  ], Ll = nt("outline", "adjustments", "Adjustments", jl);
  const Ml = [
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
  ], Al = nt("outline", "binary", "Binary", Ml);
  const Fl = [
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
  ], ql = nt("outline", "brain", "Brain", Fl);
  const Bl = [
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
  ], wi = nt("outline", "chart-bar", "ChartBar", Bl);
  const zl = [
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
  ], Vl = nt("outline", "dice-5", "Dice5", zl);
  const Wl = [
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
  ], Ul = nt("outline", "square-plus", "SquarePlus", Wl);
  const Hl = [
    [
      "path",
      {
        d: "M3 12h5l4 8v-16l4 8h5",
        key: "svg-0"
      }
    ]
  ], Gl = nt("outline", "wave-saw-tool", "WaveSawTool", Hl);
  const Kl = [
    [
      "path",
      {
        d: "M21 12h-2c-.894 0 -1.662 -.857 -1.761 -2c-.296 -3.45 -.749 -6 -2.749 -6s-2.5 3.582 -2.5 8s-.5 8 -2.5 8s-2.452 -2.547 -2.749 -6c-.1 -1.147 -.867 -2 -1.763 -2h-2",
        key: "svg-0"
      }
    ]
  ], Yl = nt("outline", "wave-sine", "WaveSine", Kl);
  const Xl = [
    [
      "path",
      {
        d: "M3 12h5v8h4v-16h4v8h5",
        key: "svg-0"
      }
    ]
  ], Jl = nt("outline", "wave-square", "WaveSquare", Xl);
  const Zl = [
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
  ], Ql = nt("outline", "x", "X", Zl), ed = "0.1.0", td = "__DCC_DASHBOARD_CONFIG__", nd = "dcc-dashboard-config";
  function rd(e) {
    return JSON.stringify(e);
  }
  function ad(e) {
    return encodeURIComponent(rd(e));
  }
  sd = function(e, t) {
    return `${e}#${ad(t)}`;
  };
  function na(e) {
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
  function od(e) {
    return e.global ? e.global : na(e.query) ?? na(e.hash) ?? na(e.scriptText);
  }
  lh = function() {
    if (typeof window > "u") return null;
    const t = window[td] ?? null, n = new URLSearchParams(window.location.search).get("config"), r = window.location.hash ? window.location.hash.slice(1) : null, a = typeof document < "u" ? document.getElementById(nd) : null, s = a ? a.textContent : null;
    return od({
      global: t,
      query: n,
      hash: r,
      scriptText: s
    });
  };
  const id = /* @__PURE__ */ new Set([
    "FixedWeightTransformer",
    "TaperingWeightTransformer",
    "PeriodicScalarTransformer",
    "PeriodicCellTransformer"
  ]);
  function an(e) {
    return !!e && id.has(e);
  }
  const cd = 2;
  function Le(e, t, n) {
    const r = e[t];
    return typeof r == "number" && Number.isFinite(r) ? r : n;
  }
  function ka(e, t) {
    const n = Le(t, "min_val", 0), r = Le(t, "max_val", 1);
    if (!(n < r)) return null;
    const a = r - n;
    let s = null;
    switch (e) {
      case "FixedWeightTransformer":
        s = {
          type: "interval-fixed",
          n: Le(t, "n", 20),
          w: Le(t, "w", 5),
          lower_bound: n,
          upper_bound: r
        };
        break;
      case "TaperingWeightTransformer":
        s = {
          type: "interval-tapering",
          n: Le(t, "n", 20),
          w: Le(t, "w", 5),
          lower_bound: n,
          upper_bound: r
        };
        break;
      case "PeriodicScalarTransformer": {
        const o = Le(t, "period", a);
        s = {
          type: "periodic-fixed",
          n: Le(t, "n", 24),
          w: Le(t, "w", 5),
          lower_bound: n,
          upper_bound: n + o,
          period: o
        };
        break;
      }
      case "PeriodicCellTransformer":
        s = {
          type: "periodic-cell",
          n: Le(t, "n", 8),
          w: cd,
          lower_bound: n,
          upper_bound: r,
          min_period: Le(t, "min_period", 0.1 * a),
          max_period: Le(t, "max_period", a),
          l_frac: Le(t, "l_frac", 0.15)
        };
        break;
      default:
        return null;
    }
    return {
      encoder: s,
      viewBounds: [
        n,
        r
      ]
    };
  }
  const Ds = (e) => ({
    addRemoveNodes: e,
    layout: e,
    datasources: e,
    visualization: e,
    editNetworks: () => e,
    editParams: () => e
  });
  function Rs(e) {
    const t = (e == null ? void 0 : e.mode) ?? "sandbox";
    if (t === "static") return Ds(false);
    if (t === "sandbox") return Ds(true);
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
      editParams: (r, a, s) => {
        const o = n.params;
        if (o === true) return true;
        if (o && typeof o == "object") {
          const i = o[r];
          if (i === true) return true;
          if (Array.isArray(i)) return i.includes(a) || s != null && i.includes(s);
        }
        return false;
      }
    };
  }
  const Oa = "main";
  function ld(e, t) {
    const n = (t == null ? void 0 : t.networkId) ?? Oa, r = {
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
      version: e.version ?? ed,
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
  dh = function(e, t) {
    const n = e.networks[t];
    return n ? {
      version: e.version,
      blocks: n.blocks ?? [],
      datasources: n.datasources ?? [],
      connections: n.connections ?? [],
      interfaces: n.interfaces ?? [],
      learnedState: n.learnedState ?? null
    } : null;
  };
  uh = function(e) {
    return Object.entries(e.networks);
  };
  const dd = "|";
  function ki(e, t) {
    return `${e}${dd}${t}`;
  }
  function ud(e, t) {
    const n = {};
    for (const r of e) n[ki(r.networkId, r.blockId)] = {
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
  ph = function(e, t, n) {
    return e == null ? void 0 : e.nodes[ki(t, n)];
  };
  const Te = (e, t, n, r, a, s = 1) => ({
    key: e,
    label: t,
    kind: "int",
    default: n,
    min: r,
    max: a,
    step: s
  }), Ie = (e, t, n, r, a) => ({
    key: e,
    label: t,
    kind: "int",
    default: n,
    min: r,
    max: a,
    step: 1,
    scale: "log"
  }), We = (e, t, n, r, a, s) => ({
    key: e,
    label: t,
    kind: "float",
    default: n,
    min: r,
    max: a,
    step: s
  }), ra = (e, t, n) => ({
    key: e,
    label: t,
    kind: "bool",
    default: n
  }), ze = (e = 42) => ({
    key: "seed",
    label: "seed",
    kind: "seed",
    default: e,
    min: 0,
    max: 99999,
    step: 1
  }), Fe = () => Te("num_t", "Time Window Steps", 2, 1, 8), $t = (e) => We("min_val", "min value", e, -1e3, 1e3, 0.1), Nt = (e) => We("max_val", "max value", e, -1e3, 1e3, 0.1), wn = () => [
    Te("perm_thr", "perm thresh", 20, 0, 99),
    Te("perm_inc", "perm inc", 2, 0, 99),
    Te("perm_dec", "perm dec", 1, 0, 99)
  ], Os = () => [
    We("pct_pool", "pct pool", 0.8, 0, 1, 0.05),
    We("pct_conn", "pct conn", 0.5, 0, 1, 0.05),
    We("pct_learn", "pct learn", 0.3, 0, 1, 0.05)
  ], Er = {
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
        Te("w", "w (weight)", 5, 1, 512),
        $t(-1),
        Nt(1),
        Fe(),
        ze()
      ]
    },
    TaperingWeightTransformer: {
      type: "TaperingWeightTransformer",
      label: "Tapering Weight",
      category: "encoder",
      addMethod: "add_tapering_weight_transformer",
      params: [
        Ie("n", "n (bits)", 16, 2, 2048),
        Te("w", "w (weight)", 5, 1, 512),
        $t(-1),
        Nt(1),
        Fe(),
        ze()
      ]
    },
    PeriodicScalarTransformer: {
      type: "PeriodicScalarTransformer",
      label: "Periodic Scalar",
      category: "encoder",
      addMethod: "add_periodic_scalar_transformer",
      params: [
        Ie("n", "n (bits)", 16, 2, 2048),
        Te("w", "w (weight)", 5, 1, 512),
        We("period", "period", 2, 0.01, 1e3, 0.1),
        $t(-1),
        Nt(1),
        Fe(),
        ze()
      ]
    },
    PeriodicCellTransformer: {
      type: "PeriodicCellTransformer",
      label: "Periodic Cell",
      category: "encoder",
      addMethod: "add_periodic_cell_transformer",
      params: [
        Ie("n", "n (cells)", 16, 2, 256),
        We("min_period", "min period", 0.1, 0.01, 1e3, 0.1),
        We("max_period", "max period", 1, 0.01, 1e3, 0.1),
        We("l_frac", "l frac", 0.15, 0, 1, 0.01),
        $t(-1),
        Nt(1),
        Fe(),
        ze()
      ]
    },
    PlaceCellTransformer: {
      type: "PlaceCellTransformer",
      label: "Place Cell",
      category: "encoder",
      addMethod: "add_place_cell_transformer",
      params: [
        $t(-1),
        Nt(1),
        We("default_bin_size", "bin size", 0.2, 0.01, 100, 0.01),
        Fe()
      ]
    },
    RandomizedPlaceCellTransformer: {
      type: "RandomizedPlaceCellTransformer",
      label: "Random Place Cell",
      category: "encoder",
      addMethod: "add_randomized_place_cell_transformer",
      params: [
        Ie("n", "n", 16, 2, 2048),
        We("bin_size", "bin size", 0.3, 0.01, 100, 0.01),
        $t(-1),
        Nt(1),
        Fe(),
        ze()
      ]
    },
    DiscreteTransformer: {
      type: "DiscreteTransformer",
      label: "Discrete",
      category: "encoder",
      addMethod: "add_discrete_transformer",
      params: [
        Te("num_v", "num values", 10, 2, 256),
        Ie("num_s", "num statelets", 512, 1, 4096),
        Fe(),
        ze()
      ]
    },
    PersistenceTransformer: {
      type: "PersistenceTransformer",
      label: "Persistence",
      category: "encoder",
      hidden: true,
      addMethod: "add_persistence_transformer",
      params: [
        $t(-1),
        Nt(1),
        Ie("num_s", "num statelets", 2048, 1, 4096),
        Ie("num_as", "active statelets", 256, 1, 1024),
        Te("max_step", "max step", 10, 1, 100),
        Fe(),
        ze()
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
        ...wn(),
        ...Os(),
        ra("always_update", "always update", false),
        Fe(),
        ze(0)
      ]
    },
    PatternClassifier: {
      type: "PatternClassifier",
      label: "Pattern Classifier",
      category: "learning",
      addMethod: "add_pattern_classifier",
      needsInit: true,
      params: [
        Te("num_l", "num labels", 3, 2, 64),
        Ie("num_s", "num statelets", 1024, 1, 4096),
        Ie("num_as", "active statelets (total)", 30, 1, 1024),
        ...wn(),
        ...Os(),
        Fe(),
        ze(0)
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
        Te("num_spc", "cells/col", 4, 1, 128),
        Te("num_dps", "dendrites/cell", 8, 1, 128),
        Ie("num_rpd", "receptors/dendrite", 32, 1, 256),
        Te("d_thresh", "dendrite thresh", 20, 1, 99),
        ...wn(),
        Fe(),
        ra("always_update", "always update", false),
        ze()
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
        Te("num_spc", "cells/col", 4, 1, 128),
        Te("num_dps", "dendrites/cell", 8, 1, 128),
        Ie("num_rpd", "receptors/dendrite", 32, 1, 256),
        Te("d_thresh", "dendrite thresh", 20, 1, 99),
        ...wn(),
        Fe(),
        ra("always_update", "always update", false),
        ze()
      ]
    }
  }, pd = [
    "datasource",
    "encoder",
    "learning"
  ];
  function vt(e) {
    return Er[e];
  }
  function md(e) {
    return Object.values(Er).filter((t) => t.category === e);
  }
  function fd(e) {
    const t = Er[e];
    if (!t) return {};
    const n = {};
    for (const r of t.params) n[r.key] = r.default;
    return n;
  }
  function Pi(e) {
    var _a2;
    return ((_a2 = Er[e]) == null ? void 0 : _a2.params) ?? [];
  }
  function rn(e, t) {
    return Pi(e).some((n) => n.key === t);
  }
  const Oe = (e, t) => Number(e[t]);
  function Ei(e, t, n) {
    if (t === "w" && rn(e, "n")) return Math.max(1, Math.floor(Oe(n, "n") / 2));
    if (t === "num_as" && rn(e, "num_s")) return Math.max(1, Oe(n, "num_s"));
    if (t === "d_thresh" && rn(e, "num_rpd")) return Math.max(1, Oe(n, "num_rpd"));
  }
  function hd(e, t) {
    const n = {
      ...t
    };
    for (const r of [
      "w",
      "num_as",
      "d_thresh"
    ]) {
      const a = Ei(e, r, n);
      a !== void 0 && typeof n[r] == "number" && (n[r] = Math.min(n[r], a));
    }
    return n;
  }
  function yd(e, t) {
    const n = [], r = (a, s) => rn(e, a) && rn(e, s);
    return r("n", "w") && Oe(t, "w") > Math.floor(Oe(t, "n") / 2) && n.push(`w must be \u2264 n / 2 (${Math.floor(Oe(t, "n") / 2)})`), r("num_s", "num_as") && Oe(t, "num_as") > Oe(t, "num_s") && n.push("active statelets (num_as) must be \u2264 num_s"), r("num_rpd", "d_thresh") && Oe(t, "d_thresh") > Oe(t, "num_rpd") && n.push("dendrite thresh (d_thresh) must be \u2264 receptors/dendrite (num_rpd)"), r("min_val", "max_val") && Oe(t, "min_val") >= Oe(t, "max_val") && n.push("min value must be < max value"), r("min_period", "max_period") && Oe(t, "min_period") >= Oe(t, "max_period") && n.push("min period must be < max period"), n;
  }
  const ja = [
    "sine",
    "square",
    "sawtooth",
    "ramp",
    "bounded_noise"
  ], Pa = {
    sine: "Sine",
    square: "Square",
    sawtooth: "Sawtooth",
    ramp: "Ramp",
    bounded_noise: "Bounded Noise"
  }, Ci = [
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
  ], Ot = {
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
  function gd(e) {
    const t = _d(e);
    if (!t || typeof t.type != "string") return null;
    const n = t.type;
    if (!Ot[n]) return null;
    const r = t.time ?? {}, a = {
      rate: Number(r.rate ?? 20),
      duration: Number(r.duration ?? 100)
    };
    for (const s of Ot[n]) a[s.key] = Number(t[s.key] ?? s.default);
    return {
      seriesType: n,
      values: a
    };
  }
  function _d(e) {
    if (!e || typeof e != "object") return null;
    if (typeof e.type == "string" && Ot[e.type]) return e;
    const t = e.series;
    if (t && typeof t.type == "string") return t;
    const n = e.layers;
    if (Array.isArray(n)) {
      for (const r of n) for (const a of (r == null ? void 0 : r.events) ?? []) {
        const s = a == null ? void 0 : a.series;
        if (s && typeof s.type == "string" && Ot[s.type]) return s;
      }
      for (const r of n) for (const a of (r == null ? void 0 : r.events) ?? []) if ((a == null ? void 0 : a.series) && typeof a.series.type == "string") return a.series;
    }
    return null;
  }
  function Ea(e) {
    const t = {};
    for (const n of [
      ...Ot[e],
      ...Ci
    ]) t[n.key] = n.default;
    return t;
  }
  function $i(e, t) {
    const n = {
      rate: t.rate,
      duration: t.duration
    }, r = {
      type: e,
      time: n
    };
    for (const a of Ot[e]) r[a.key] = t[a.key];
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
  const vd = [
    "restart",
    "hold",
    "stop"
  ];
  function Ni() {
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
  function Ii(e) {
    return {
      type: "repeating",
      patterns: e.patterns,
      iters: e.iters,
      recur: e.recur,
      loop_mode: e.loop_mode
    };
  }
  let Ti, Di, bd, xd, jt, Sd, wd, kd;
  Ti = "application/dcc-block-type";
  Di = "application/dcc-waveform";
  bd = [
    "VizBitField",
    "VizTimeSeries",
    "VizEncoder"
  ];
  xd = {
    VizBitField: "bitfield",
    VizTimeSeries: "timeseries",
    VizEncoder: "encoderChart"
  };
  Ri = {
    bitfield: "VizBitField",
    timeseries: "VizTimeSeries",
    encoderChart: "VizEncoder"
  };
  Oi = {
    VizBitField: "Bit Field",
    VizTimeSeries: "Time Series",
    VizEncoder: "Encoder Visual"
  };
  jt = (e) => !!e && bd.includes(e);
  Sd = {
    datasource: "Data Sources",
    encoder: "Encoders",
    learning: "Learning"
  };
  wd = {
    datasource: Gl,
    encoder: Al,
    learning: ql
  };
  kd = [
    "datasource",
    ...pd.filter((e) => e !== "datasource")
  ];
  function js({ type: e, label: t, title: n, waveform: r }) {
    return k.jsx("div", {
      draggable: true,
      onDragStart: (a) => {
        a.dataTransfer.setData(Ti, e), r && a.dataTransfer.setData(Di, r), a.dataTransfer.effectAllowed = "move";
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
  function Pd() {
    const [e, t] = G.useState(true);
    return k.jsxs("div", {
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
        k.jsxs("button", {
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
            k.jsxs("span", {
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: 5
              },
              children: [
                k.jsx(Ul, {
                  size: 16,
                  stroke: 2,
                  "aria-hidden": true
                }),
                " Drag to Add Block"
              ]
            }),
            k.jsx("span", {
              style: {
                color: "var(--text-tertiary)"
              },
              children: e ? "\u25BE" : "\u25B8"
            })
          ]
        }),
        e && k.jsx("div", {
          style: {
            padding: "6px 6px 8px",
            overflowY: "auto"
          },
          children: kd.map((n) => k.jsxs("div", {
            style: {
              marginBottom: 6
            },
            children: [
              k.jsxs("div", {
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
                    const r = wd[n];
                    return k.jsx(r, {
                      size: 13,
                      stroke: 2
                    });
                  })(),
                  Sd[n]
                ]
              }),
              md(n).filter((r) => !r.hidden).flatMap((r) => r.type === "SynflowScalarDataSource" ? ja.map((a) => k.jsx(js, {
                type: r.type,
                waveform: a,
                label: Pa[a],
                title: `Drag to add a ${Pa[a]} scalar source`
              }, `${r.type}:${a}`)) : [
                k.jsx(js, {
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
  const Cr = 200, La = (e) => Math.max(e ?? 1, 1);
  function Ed(e, t, n) {
    const r = La(t);
    return Math.round(r * Math.pow(n / r, e / Cr));
  }
  function ji(e, t, n) {
    const r = La(t);
    return Math.round(Cr * Math.log(Math.max(e, r) / r) / Math.log(n / r));
  }
  function Li(e, t, n) {
    return ji(e, t, n) / Cr * 100;
  }
  function Cd(e, t) {
    const n = La(e), r = [], a = Math.ceil(Math.log2(n));
    for (let s = a; ; s++) {
      const o = 2 ** s;
      if (o > t) break;
      o < n || r.push({
        value: o,
        pct: Li(o, e, t)
      });
    }
    return r;
  }
  const aa = (e, t, n) => Math.max(t, Math.min(n, e));
  function $d({ spec: e, value: t, max: n, invalid: r, onChange: a }) {
    const s = e.kind === "int" || e.kind === "seed", o = (y) => s ? parseInt(y, 10) : parseFloat(y), i = e.scale === "log", c = e.min ?? 0, l = i ? Li(t, e.min, n) : n > c ? (t - c) / (n - c) * 100 : 0, u = {
      "--bc-fill": `${Math.max(0, Math.min(100, l))}%`
    }, v = i ? Cd(e.min, n) : [];
    return k.jsxs("div", {
      className: r ? "bc-field bc-invalid" : "bc-field",
      children: [
        k.jsx("label", {
          children: e.label
        }),
        k.jsx("input", {
          type: "number",
          min: e.min,
          max: n,
          step: e.step ?? 1,
          value: t,
          onChange: (y) => {
            const g = o(y.target.value);
            Number.isFinite(g) && a(g);
          }
        }),
        k.jsxs("div", {
          className: "bc-slider-cell",
          children: [
            i ? k.jsx("input", {
              type: "range",
              min: 0,
              max: Cr,
              step: 1,
              style: u,
              value: ji(t, e.min, n),
              onChange: (y) => a(Ed(Number(y.target.value), e.min, n))
            }) : k.jsx("input", {
              type: "range",
              min: e.min,
              max: n,
              step: e.step ?? 1,
              style: u,
              value: t,
              onChange: (y) => a(o(y.target.value))
            }),
            v.length > 0 && k.jsx("div", {
              className: "bc-ticks",
              "aria-hidden": "true",
              children: v.map((y) => k.jsx("span", {
                className: "bc-tick",
                style: {
                  left: `${y.pct}%`
                },
                "data-tooltip": String(y.value)
              }, y.value))
            }),
            k.jsxs("div", {
              className: "bc-bounds",
              "aria-hidden": "true",
              children: [
                k.jsx("span", {
                  children: c
                }),
                k.jsx("span", {
                  children: n
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Nd({ value: e, onChange: t }) {
    return k.jsxs("div", {
      className: "bc-field bc-field-seed",
      children: [
        k.jsx("label", {
          children: "seed"
        }),
        k.jsx("input", {
          type: "number",
          min: 0,
          step: 1,
          value: e,
          onChange: (n) => {
            const r = parseInt(n.target.value, 10);
            Number.isFinite(r) && t(r);
          }
        }),
        k.jsx(tt, {
          label: "Randomize seed",
          placement: "top",
          children: k.jsx("button", {
            type: "button",
            className: "bc-dice",
            "aria-label": "Randomize seed",
            onClick: () => t(Math.floor(Math.random() * 1e5)),
            children: k.jsx(Vl, {
              size: 20,
              stroke: 2,
              "aria-hidden": true
            })
          })
        })
      ]
    });
  }
  function Id({ trackMin: e, trackMax: t, step: n, lo: r, hi: a, invalid: s, onChange: o }) {
    const i = t - e || 1, c = (l) => (aa(l, e, t) - e) / i * 100;
    return k.jsxs("div", {
      className: s ? "bc-dual bc-invalid" : "bc-dual",
      children: [
        k.jsx("input", {
          type: "number",
          className: "bc-dual-val",
          step: n,
          value: r,
          onChange: (l) => {
            const u = parseFloat(l.target.value);
            Number.isFinite(u) && o(u, a);
          }
        }),
        k.jsxs("div", {
          className: "bc-dual-track",
          children: [
            k.jsx("div", {
              className: "bc-dual-fill",
              style: {
                left: `${c(r)}%`,
                width: `${Math.max(0, c(a) - c(r))}%`
              }
            }),
            k.jsx("input", {
              type: "range",
              min: e,
              max: t,
              step: n,
              value: aa(r, e, t),
              onChange: (l) => o(Math.min(parseFloat(l.target.value), a - n), a)
            }),
            k.jsx("input", {
              type: "range",
              min: e,
              max: t,
              step: n,
              value: aa(a, e, t),
              onChange: (l) => o(r, Math.max(parseFloat(l.target.value), r + n))
            })
          ]
        }),
        k.jsx("input", {
          type: "number",
          className: "bc-dual-val",
          step: n,
          value: a,
          onChange: (l) => {
            const u = parseFloat(l.target.value);
            Number.isFinite(u) && o(r, u);
          }
        })
      ]
    });
  }
  function Td({ type: e, onCreate: t, onCancel: n, initialValues: r, submitLabel: a = "Create", onRemove: s, renderPreview: o, renderAux: i }) {
    var _a2;
    const [c, l] = G.useState(false);
    G.useEffect(() => {
      const C = (T) => {
        T.key === "Escape" && (T.stopPropagation(), n());
      };
      return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
    }, [
      n
    ]);
    const u = G.useMemo(() => Pi(e), [
      e
    ]), v = ((_a2 = vt(e)) == null ? void 0 : _a2.label) ?? e, y = a !== "Create", g = G.useMemo(() => u.find((C) => C.key === "min_val"), [
      u
    ]), x = G.useMemo(() => u.find((C) => C.key === "max_val"), [
      u
    ]), w = !!g && !!x, d = G.useMemo(() => {
      const C = Number((g == null ? void 0 : g.default) ?? 0), T = Number((x == null ? void 0 : x.default) ?? 1), O = T - C || 1;
      return {
        min: Math.max((g == null ? void 0 : g.min) ?? -1e3, C - O),
        max: Math.min((x == null ? void 0 : x.max) ?? 1e3, T + O),
        step: (g == null ? void 0 : g.step) ?? 0.1
      };
    }, [
      g,
      x
    ]), [f, p] = G.useState(() => {
      const C = {};
      for (const T of u) C[T.key] = (r == null ? void 0 : r[T.key]) ?? T.default;
      return C;
    }), b = (C, T) => p((O) => hd(e, {
      ...O,
      [C]: T
    })), S = (C, T) => p((O) => ({
      ...O,
      min_val: C,
      max_val: T
    })), _ = yd(e, f), h = G.useMemo(() => {
      const C = /* @__PURE__ */ new Set();
      return _.some((T) => /min value/.test(T)) && (C.add("min_val"), C.add("max_val")), _.some((T) => /min period/.test(T)) && (C.add("min_period"), C.add("max_period")), C;
    }, [
      _
    ]), m = [], P = /* @__PURE__ */ new Set();
    for (const C of u) P.has(C.key) || (C.key === "min_val" && w ? (P.add("min_val"), P.add("max_val"), m.push(k.jsxs("div", {
      className: "bc-dual-row",
      children: [
        k.jsx("label", {
          children: "range"
        }),
        k.jsx(Id, {
          trackMin: d.min,
          trackMax: d.max,
          step: d.step,
          lo: Number(f.min_val),
          hi: Number(f.max_val),
          invalid: h.has("min_val"),
          onChange: S
        })
      ]
    }, "bounds"))) : C.kind === "bool" ? m.push(k.jsxs("label", {
      className: "bc-check",
      children: [
        k.jsx("input", {
          type: "checkbox",
          checked: !!f[C.key],
          onChange: (T) => b(C.key, T.target.checked)
        }),
        C.label
      ]
    }, C.key)) : C.kind === "seed" ? m.push(k.jsx(Nd, {
      value: Number(f[C.key]),
      onChange: (T) => b(C.key, T)
    }, C.key)) : m.push(k.jsx($d, {
      spec: C,
      value: Number(f[C.key]),
      max: Ei(e, C.key, f) ?? C.max ?? 100,
      invalid: h.has(C.key),
      onChange: (T) => b(C.key, T)
    }, C.key)));
    const N = !!o && c;
    return Ta.createPortal(k.jsx("div", {
      className: "bc-overlay",
      onClick: n,
      children: k.jsxs("div", {
        className: N ? "bc-shell bc-shell-docked" : "bc-shell",
        onClick: (C) => C.stopPropagation(),
        children: [
          k.jsxs("div", {
            className: "bc-config-col",
            children: [
              k.jsxs("div", {
                className: "bc-card",
                children: [
                  k.jsxs("div", {
                    className: "bc-header",
                    children: [
                      k.jsx(tt, {
                        label: "Close (Esc)",
                        placement: "right",
                        children: k.jsx("button", {
                          type: "button",
                          className: "bc-close",
                          "aria-label": "Close",
                          onClick: n,
                          children: k.jsxs("svg", {
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
                              k.jsx("line", {
                                x1: "18",
                                y1: "6",
                                x2: "6",
                                y2: "18"
                              }),
                              k.jsx("line", {
                                x1: "6",
                                y1: "6",
                                x2: "18",
                                y2: "18"
                              })
                            ]
                          })
                        })
                      }),
                      k.jsxs("span", {
                        className: "bc-title",
                        children: [
                          y ? "Configure" : "New",
                          " ",
                          v
                        ]
                      }),
                      o && k.jsx(tt, {
                        label: c ? "Hide live preview" : "Show live preview",
                        placement: "left",
                        children: k.jsx("button", {
                          type: "button",
                          className: c ? "bc-preview-toggle active" : "bc-preview-toggle",
                          "aria-pressed": c,
                          "aria-label": c ? "Hide live preview" : "Show live preview",
                          onClick: () => l((C) => !C),
                          children: k.jsx(wi, {
                            size: 22,
                            stroke: 2,
                            "aria-hidden": true
                          })
                        })
                      })
                    ]
                  }),
                  m,
                  _.length > 0 && k.jsx("ul", {
                    className: "bc-errors",
                    children: _.map((C) => k.jsxs("li", {
                      children: [
                        "\u26A0 ",
                        C
                      ]
                    }, C))
                  }),
                  k.jsxs("div", {
                    className: "bc-actions",
                    children: [
                      s && k.jsx("button", {
                        className: "bc-btn bc-btn-danger bc-btn-remove",
                        onClick: s,
                        children: "Remove"
                      }),
                      k.jsx("button", {
                        className: "bc-btn",
                        onClick: n,
                        children: "Cancel"
                      }),
                      k.jsx("button", {
                        className: "bc-btn bc-btn-primary",
                        onClick: () => t(f),
                        disabled: _.length > 0,
                        children: a
                      })
                    ]
                  })
                ]
              }),
              N && i && k.jsx("div", {
                className: "bc-config-aux",
                children: i(f)
              })
            ]
          }),
          N && k.jsx("div", {
            className: "bc-preview-dock",
            children: o(f)
          })
        ]
      })
    }), document.body);
  }
  function Dd({ type: e, onCreate: t, onCancel: n, initialConfig: r, submitLabel: a = "Create", onRemove: s }) {
    const o = e === "SynflowDiscreteDataSource", i = a !== "Create", c = o ? null : gd(r), [l, u] = G.useState((c == null ? void 0 : c.seriesType) ?? "sine"), [v, y] = G.useState(() => (c == null ? void 0 : c.values) ?? Ea("sine")), g = G.useMemo(() => [
      ...Ot[l],
      ...Ci
    ], [
      l
    ]), x = (r == null ? void 0 : r.patterns) ?? null, [w, d] = G.useState(x ? x.join(", ") : "A, B, C, D"), [f, p] = G.useState(() => o && r ? {
      patterns: x ?? [
        "A"
      ],
      iters: Number(r.iters ?? 1),
      recur: Number(r.recur ?? 1),
      loop_mode: String(r.loop_mode ?? "restart")
    } : Ni()), b = (h, m) => y((P) => ({
      ...P,
      [h]: m
    })), S = (h) => {
      u(h), y((m) => {
        const P = Ea(h);
        for (const N of Object.keys(P)) m[N] !== void 0 && Number.isFinite(m[N]) && (P[N] = m[N]);
        return P;
      });
    }, _ = () => {
      if (o) {
        const h = w.split(",").map((m) => m.trim()).filter(Boolean);
        if (h.length === 0) return;
        t(Ii({
          ...f,
          patterns: h
        }));
      } else t($i(l, v));
    };
    return Ta.createPortal(k.jsx("div", {
      className: "bc-overlay",
      onClick: n,
      children: k.jsxs("div", {
        className: "bc-card",
        onClick: (h) => h.stopPropagation(),
        children: [
          k.jsxs("div", {
            className: "bc-header",
            children: [
              k.jsxs("span", {
                className: "bc-title",
                children: [
                  i ? "Configure" : "New",
                  " ",
                  o ? "Discrete Source" : "Scalar Source"
                ]
              }),
              k.jsx(tt, {
                label: "Close",
                placement: "right",
                children: k.jsx("button", {
                  type: "button",
                  className: "bc-close",
                  "aria-label": "Close",
                  onClick: n,
                  children: k.jsxs("svg", {
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
                      k.jsx("line", {
                        x1: "18",
                        y1: "6",
                        x2: "6",
                        y2: "18"
                      }),
                      k.jsx("line", {
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
          o ? k.jsxs(k.Fragment, {
            children: [
              k.jsxs("div", {
                className: "bc-row",
                children: [
                  k.jsx("label", {
                    children: "patterns"
                  }),
                  k.jsx("input", {
                    className: "bc-input",
                    value: w,
                    onChange: (h) => d(h.target.value)
                  })
                ]
              }),
              k.jsxs("div", {
                className: "bc-row",
                children: [
                  k.jsx("label", {
                    children: "iters"
                  }),
                  k.jsx("input", {
                    type: "number",
                    className: "bc-input",
                    value: f.iters,
                    onChange: (h) => p((m) => ({
                      ...m,
                      iters: Number(h.target.value)
                    }))
                  })
                ]
              }),
              k.jsxs("div", {
                className: "bc-row",
                children: [
                  k.jsx("label", {
                    children: "persistence"
                  }),
                  k.jsx("input", {
                    type: "number",
                    className: "bc-input",
                    value: f.recur,
                    onChange: (h) => p((m) => ({
                      ...m,
                      recur: Number(h.target.value)
                    }))
                  })
                ]
              }),
              k.jsxs("div", {
                className: "bc-row",
                children: [
                  k.jsx("label", {
                    children: "loop mode"
                  }),
                  k.jsx("select", {
                    className: "bc-input",
                    value: f.loop_mode,
                    onChange: (h) => p((m) => ({
                      ...m,
                      loop_mode: h.target.value
                    })),
                    children: vd.map((h) => k.jsx("option", {
                      value: h,
                      children: h
                    }, h))
                  })
                ]
              })
            ]
          }) : k.jsxs(k.Fragment, {
            children: [
              k.jsxs("div", {
                className: "bc-row",
                children: [
                  k.jsx("label", {
                    children: "waveform"
                  }),
                  k.jsx("select", {
                    className: "bc-input",
                    value: l,
                    onChange: (h) => S(h.target.value),
                    children: ja.map((h) => k.jsx("option", {
                      value: h,
                      children: Pa[h]
                    }, h))
                  })
                ]
              }),
              g.map((h) => k.jsxs("div", {
                className: "bc-row",
                children: [
                  k.jsx("label", {
                    children: h.label
                  }),
                  k.jsx("input", {
                    type: "number",
                    step: h.step,
                    className: "bc-input",
                    value: v[h.key],
                    onChange: (m) => b(h.key, Number(m.target.value))
                  })
                ]
              }, h.key))
            ]
          }),
          k.jsxs("div", {
            className: "bc-actions",
            children: [
              s && k.jsx("button", {
                className: "bc-btn bc-btn-danger bc-btn-remove",
                onClick: s,
                children: "Remove"
              }),
              k.jsx("button", {
                className: "bc-btn",
                onClick: n,
                children: "Cancel"
              }),
              k.jsx("button", {
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
  function Rd({ title: e = "Confirm", message: t, confirmLabel: n = "OK", cancelLabel: r = "Cancel", danger: a = false, onConfirm: s, onCancel: o }) {
    return G.useEffect(() => {
      const i = (c) => {
        c.key === "Escape" ? (c.stopPropagation(), o()) : c.key === "Enter" && (c.stopPropagation(), s());
      };
      return window.addEventListener("keydown", i, true), () => window.removeEventListener("keydown", i, true);
    }, [
      o,
      s
    ]), Ta.createPortal(k.jsx("div", {
      className: "bc-overlay",
      onClick: o,
      children: k.jsxs("div", {
        className: "bc-card bc-card-confirm",
        onClick: (i) => i.stopPropagation(),
        children: [
          k.jsxs("div", {
            className: "bc-header",
            children: [
              k.jsx("span", {
                className: "bc-swatch",
                style: {
                  background: a ? "var(--accent-red)" : "var(--accent-blue)"
                }
              }),
              k.jsx("span", {
                className: "bc-title",
                children: e
              }),
              k.jsx(tt, {
                label: "Close",
                placement: "right",
                children: k.jsx("button", {
                  type: "button",
                  className: "bc-close",
                  "aria-label": "Close",
                  onClick: o,
                  children: k.jsxs("svg", {
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
                      k.jsx("line", {
                        x1: "18",
                        y1: "6",
                        x2: "6",
                        y2: "18"
                      }),
                      k.jsx("line", {
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
          k.jsx("div", {
            className: "bc-confirm-message",
            children: t
          }),
          k.jsxs("div", {
            className: "bc-actions",
            children: [
              k.jsx("button", {
                className: "bc-btn",
                onClick: o,
                autoFocus: true,
                children: r
              }),
              k.jsx("button", {
                className: a ? "bc-btn bc-btn-danger" : "bc-btn bc-btn-primary",
                onClick: s,
                children: n
              })
            ]
          })
        ]
      })
    }), document.body);
  }
  class Od {
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
  function Ls(e) {
    return new Od(e);
  }
  const jd = `
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
  function Ld() {
    const e = document.getElementById("view-bounds-lo"), t = document.getElementById("view-bounds-hi");
    return !e || !t ? wa : [
      parseFloat(e.value),
      parseFloat(t.value)
    ];
  }
  function yt(e, t, n) {
    return Math.max(t, Math.min(n, e));
  }
  function ve(e) {
    return e.toFixed(2);
  }
  function kn(e) {
    const t = document.createElement("input");
    return t.type = "text", t.className = "enc-n-val", t.setAttribute("inputmode", "decimal"), t.spellcheck = false, t.value = e, t;
  }
  function Md(e) {
    return e.toFixed(1);
  }
  function Ms(e) {
    const t = document.createElement("div");
    t.className = "n-tick-row";
    const n = () => {
      const r = parseFloat(e.min), a = parseFloat(e.max);
      t.replaceChildren(...[
        r,
        a
      ].map((s) => {
        const o = document.createElement("span");
        return o.textContent = Md(s), o;
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
  function Pn(e, t, n, r = false) {
    const a = () => {
      t.classList.add("enc-val-invalid"), setTimeout(() => t.classList.remove("enc-val-invalid"), 600), t.value = n(parseFloat(e.value));
    }, s = () => {
      const o = parseFloat(t.value.trim()), i = parseFloat(e.min), c = parseFloat(e.max), l = parseFloat(e.step) || 1;
      if (!isFinite(o)) {
        a();
        return;
      }
      if (r && !Number.isInteger(o)) {
        a();
        return;
      }
      let u = Math.min(c, Math.max(i, o));
      u = i + Math.round((u - i) / l) * l, u = Math.min(c, Math.max(i, u)), e.value = String(u), t.value = n(parseFloat(e.value)), t.classList.remove("enc-val-invalid"), e.dispatchEvent(new Event("input", {
        bubbles: true
      }));
    };
    t.addEventListener("keydown", (o) => {
      o.key === "Enter" && (o.preventDefault(), s(), t.blur());
    }), t.addEventListener("change", s), t.addEventListener("blur", s);
  }
  let Mi = 0;
  const sa = {
    "periodic-fixed": "Periodic: Fixed Weight",
    "periodic-cell": "Periodic: Multi-Scale Cells",
    "periodic-random-cell": "Periodic: Random Cells",
    "interval-random-cell": "Interval: Random Cells",
    "interval-fixed": "Interval: Fixed Weight",
    "interval-tapering": "Interval: Tapering Weight"
  }, Ad = {
    type: "periodic-fixed",
    n: 13,
    w: 1,
    lower_bound: 0,
    upper_bound: 1
  };
  function Ai(e = {}, t) {
    const n = {
      ...Ad,
      ...e
    }, r = document.createElement("div");
    r.className = "enc-row", r.dataset.colorIdx = String(Mi++), r.dataset.type = n.type;
    const a = document.createElement("div");
    a.className = "enc-header-row";
    const s = document.createElement("span");
    s.className = "enc-type-label", s.textContent = sa[n.type];
    const o = document.createElement("button");
    o.className = "enc-edit-btn", o.type = "button", o.textContent = "\u22EE", o.dataset.tooltip = "Edit parameters", o.setAttribute("aria-label", "Edit parameters");
    const i = document.createElement("button");
    i.className = "enc-remove", i.textContent = "\xD7", i.dataset.tooltip = "Remove this encoder", a.append(i, s, o), r.appendChild(a), o.addEventListener("click", (m) => {
      m.stopPropagation(), Vd(r);
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
      P.value = m, P.textContent = sa[m], m === n.type && (P.selected = true), u.appendChild(P);
    });
    const v = document.createElement("span");
    v.className = "enc-type-help enc-help-cell", c.append(l, v, u);
    function y() {
      v.replaceChildren(_t(`encoderType.${r.dataset.type}`));
    }
    function g() {
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
      ], N = Ma(r);
      for (const [C, T] of P) {
        const O = N.querySelector(C);
        if (!O) continue;
        const F = O.closest(".n-slider-row") ?? O.parentElement;
        if (F && !F.querySelector(".enc-help-cell")) {
          const z = _t(T);
          z.classList.add("enc-help-cell");
          const W = F.querySelector(".enc-slider-label");
          W && W.nextSibling ? F.insertBefore(z, W.nextSibling) : F.appendChild(z);
        }
      }
    }
    const x = document.createElement("span");
    x.className = "enc-shorthand", r.appendChild(x);
    const w = document.createElement("div");
    w.className = "enc-mini-bits", r.appendChild(w), Ca(r, n.n);
    const d = document.createElement("div");
    d.className = "enc-body", r.appendChild(d);
    function f(m, P) {
      d.innerHTML = "";
      const N = Math.max(zc, P.n), C = Math.max(fs, Math.min(N, P.n)), T = Math.max(1, Math.floor(C / 2)), O = document.createElement("div");
      O.className = "n-slider-row";
      const F = document.createElement("span");
      F.className = "enc-slider-label", F.textContent = "n";
      const z = document.createElement("input");
      z.type = "range", z.className = "enc-n", z.min = String(fs), z.max = String(N), z.step = "1", z.value = String(C);
      const W = kn(String(C));
      O.append(F, z, W), Pn(z, W, String, true);
      const X = document.createElement("div");
      X.className = "n-tick-row", Vc.forEach((U) => {
        const J = document.createElement("span");
        J.textContent = U, X.appendChild(J);
      });
      const ie = document.createElement("div");
      ie.className = "n-slider-row";
      const oe = document.createElement("span");
      oe.className = "enc-slider-label", oe.textContent = "w";
      const te = document.createElement("input");
      te.type = "range", te.className = "enc-w", te.min = "1", te.max = String(T), te.step = "1";
      const V = Math.max(1, Math.min(T, P.w));
      te.value = String(V);
      const D = kn(String(V));
      ie.append(oe, te, D), Pn(te, D, String, true);
      const q = document.createElement("div");
      q.className = "n-tick-row";
      function L(U) {
        const J = [
          .../* @__PURE__ */ new Set([
            1,
            U
          ])
        ];
        q.innerHTML = J.map((ce) => `<span>${ce}</span>`).join("");
      }
      L(T), te.addEventListener("input", () => {
        D.value = te.value;
      }), z.addEventListener("input", () => {
        W.value = z.value;
        const U = Math.max(1, Math.floor(parseInt(z.value, 10) / 2));
        te.max = String(U), parseInt(te.value, 10) > U && (te.value = String(U), D.value = String(U)), L(U);
      });
      const [E, I] = t ?? Ld(), B = yt(P.upper_bound - P.lower_bound, Ae, I - E), ne = yt(P.lower_bound, E, I - B), ee = h("offset", "enc-offset", E, I - B, ne), re = h(m === "periodic-fixed" ? "period" : "range", "enc-range", Ae, I - ne, B), R = m === "periodic-cell", M = m === "periodic-random-cell", K = m === "interval-random-cell";
      if (R || M || K ? d.append(c, O, X, ee.row, ee.tickRow, re.row, re.tickRow) : d.append(c, O, X, ie, q, ee.row, ee.tickRow, re.row, re.tickRow), ee.slider.addEventListener("input", () => {
        let U = parseFloat(ee.slider.value);
        const J = parseFloat(re.slider.value), ce = I - J;
        U > ce && (U = ce, ee.slider.value = String(U)), ee.valSpan.value = ve(U), re.slider.max = String(I - U);
      }), re.slider.addEventListener("input", () => {
        const U = parseFloat(re.slider.value);
        re.valSpan.value = ve(U);
        const J = parseFloat(ee.slider.value), ce = I - U;
        ee.slider.max = String(ce), J > ce && (ee.slider.value = String(ce), ee.valSpan.value = ve(ce));
      }), R) {
        const U = I - E, J = Math.min(Math.max(Sa, P.max_period ?? 0, P.min_period ?? 0), U), ce = yt(P.max_period ?? hs, Rt, J), Se = yt(P.min_period ?? Wc, Rt, ce), be = yt(P.l_frac ?? ys, _n, gn), se = _("min_period", "enc-min-period", Rt, ce, Se), he = _("max_period", "enc-max-period", Se, J, ce), Pe = _("duty cycle", "enc-l-frac", _n, gn, be, _s);
        d.append(se.row, se.tickRow, he.row, he.tickRow, Pe.row, Pe.tickRow), se.slider.addEventListener("input", () => {
          let ue = parseFloat(se.slider.value);
          const De = parseFloat(he.slider.value);
          ue > De && (ue = De, se.slider.value = String(ue)), se.valSpan.value = ve(ue), he.slider.min = String(ue);
        }), he.slider.addEventListener("input", () => {
          let ue = parseFloat(he.slider.value);
          const De = parseFloat(se.slider.value);
          ue < De && (ue = De, he.slider.value = String(ue)), he.valSpan.value = ve(ue), se.slider.max = String(ue);
        }), Pe.slider.addEventListener("input", () => {
          Pe.valSpan.value = ve(parseFloat(Pe.slider.value));
        });
      }
      if (M) {
        const U = I - E, J = Math.min(Sa, U), ce = yt(P.const_period ?? P.max_period ?? hs, Rt, J), Se = yt(P.const_l_frac ?? P.max_l_frac ?? ys, _n, gn);
        b(ee.row, "enc-rand-origin", P.randomize_origins ?? false, ee.slider);
        const be = S("period", "enc-period-rand", Rt, J, ce, gs, "enc-rand-period", P.randomize_periods ?? false), se = S("duty cycle", "enc-l-frac-rand", _n, gn, Se, _s, "enc-rand-l-frac", P.randomize_l_frac ?? false), he = p(r);
        d.append(be.row, be.tickRow, se.row, se.tickRow, he), be.slider.addEventListener("input", () => {
          be.valSpan.value = ve(parseFloat(be.slider.value));
        }), se.slider.addEventListener("input", () => {
          se.valSpan.value = ve(parseFloat(se.slider.value));
        });
      }
      if (K) {
        const U = I - E, J = Math.min(U, Ae * 100), ce = yt(P.const_l ?? P.max_l ?? 0.1, Ae, J), Se = S("l (bin size)", "enc-l-rand", Ae, U, ce, Ae, "enc-rand-l", P.randomize_l ?? false), be = p(r);
        d.append(Se.row, Se.tickRow, be), Se.slider.addEventListener("input", () => {
          Se.valSpan.value = ve(parseFloat(Se.slider.value));
        });
      }
      if (M || K) {
        const U = P.seed ?? Math.floor(Math.random() * 1e6);
        r.dataset.seed = String(U);
      }
    }
    function p(m) {
      const P = document.createElement("div");
      P.className = "n-slider-row enc-reshuffle-row";
      const N = document.createElement("span");
      N.className = "enc-slider-label", N.textContent = "seed", P.appendChild(N);
      const C = document.createElement("button");
      return C.className = "enc-reshuffle", C.type = "button", C.textContent = "\u{1F3B2} Reshuffle", C.dataset.tooltip = "Resample random parameters", C.addEventListener("click", () => {
        const T = parseInt(m.dataset.seed ?? "0", 10);
        m.dataset.seed = String(T + 1 >>> 0), m.dispatchEvent(new Event("input", {
          bubbles: true
        }));
      }), P.appendChild(C), P;
    }
    function b(m, P, N, C) {
      const T = document.createElement("input");
      T.type = "checkbox", T.className = `${P} enc-rand-icon`, T.checked = N, T.setAttribute("aria-label", "Randomize this parameter");
      const O = () => {
        T.dataset.tooltip = T.checked ? "Randomize: ON \u2014 slider sets the upper bound; values sampled uniformly in [min, slider]" : "Randomize: OFF \u2014 slider sets the constant value. Click to toggle.", T.checked ? C.dataset.tooltip = "Upper bound \u2014 values sampled uniformly in [min, this]" : delete C.dataset.tooltip;
      };
      return O(), T.addEventListener("change", O), m.appendChild(T), T;
    }
    function S(m, P, N, C, T, O, F, z) {
      const W = _(m, P, N, C, T, O), X = b(W.row, F, z, W.slider);
      return {
        ...W,
        toggle: X
      };
    }
    function _(m, P, N, C, T, O = gs) {
      const F = document.createElement("div");
      F.className = "n-slider-row";
      const z = document.createElement("span");
      z.className = "enc-slider-label", z.textContent = m;
      const W = document.createElement("input");
      W.type = "range", W.className = P, W.min = String(N), W.max = String(C), W.step = String(O), W.value = String(T);
      const X = kn(ve(T));
      F.append(z, W, X), Pn(W, X, ve);
      const ie = Ms(W);
      return {
        row: F,
        slider: W,
        valSpan: X,
        tickRow: ie
      };
    }
    function h(m, P, N, C, T) {
      const O = document.createElement("div");
      O.className = "n-slider-row";
      const F = document.createElement("span");
      F.className = "enc-slider-label", F.textContent = m;
      const z = document.createElement("input");
      z.type = "range", z.className = P, z.min = String(N), z.max = String(C), z.step = String(Ae), z.value = String(T);
      const W = kn(ve(T));
      O.append(F, z, W), Pn(z, W, ve);
      const X = Ms(z);
      return {
        row: O,
        slider: z,
        valSpan: W,
        tickRow: X
      };
    }
    return f(n.type, n), y(), g(), oa(r, x), u.addEventListener("change", () => {
      const m = u.value, P = yr(r);
      r.dataset.type = m, s.textContent = sa[m];
      const N = {
        ...P
      };
      f(m, N), y(), g(), oa(r, x), r.dispatchEvent(new Event("input", {
        bubbles: true
      }));
    }), r.addEventListener("input", () => {
      oa(r, x);
      const m = yr(r);
      Ca(r, m.n);
    }), r;
  }
  const Fd = "#000000";
  function Ca(e, t) {
    const n = e.querySelector(".enc-mini-bits");
    if (!n) return;
    const r = parseInt(e.dataset.colorIdx ?? "0", 10), a = dt(r);
    if (n.childElementCount !== t) {
      n.replaceChildren();
      for (let s = 0; s < t; s++) {
        const o = document.createElement("span");
        o.className = "enc-mini-bit", o.style.background = a, n.appendChild(o);
      }
    }
  }
  function qd(e, t) {
    const n = e.querySelector(".enc-mini-bits");
    if (!n) return;
    const r = parseInt(e.dataset.colorIdx ?? "0", 10), a = dt(r), s = n.children, o = Math.min(s.length, t.length);
    for (let i = 0; i < o; i++) s[i].style.background = t[i] ? Fd : a;
  }
  function En(e, t, n) {
    if (!e || !Array.isArray(e.codes) || e.codes.length === 0) return;
    const r = Math.max(0, lt(e.boundaries, t)), a = e.codes[r];
    if (!a) return;
    n.querySelectorAll(".enc-row").forEach((o, i) => {
      var _a2, _b;
      const c = (_a2 = e.sub_encoders) == null ? void 0 : _a2[i];
      if (!c) return;
      const l = ((_b = c.bit_range) == null ? void 0 : _b[0]) ?? 0, u = c.n_bits ?? 0, v = o.querySelector(".enc-mini-bits");
      v && v.childElementCount !== u && Ca(o, u), qd(o, a.slice(l, l + u));
    });
  }
  let $e = null, Ue = null, He = null;
  function Ma(e) {
    const t = e.querySelector(".enc-body");
    if (t) return t;
    if (He === e && Ue) {
      const n = Ue.querySelector(".enc-body");
      if (n) return n;
    }
    return e;
  }
  function Bd() {
    if ($e) return $e;
    $e = document.createElement("div"), $e.id = "enc-edit-popup", $e.style.display = "none";
    const e = document.createElement("div");
    e.className = "enc-edit-popup-header";
    const t = document.createElement("span");
    t.className = "enc-edit-popup-title", t.textContent = "Edit encoder";
    const n = document.createElement("button");
    n.type = "button", n.className = "enc-edit-popup-close", n.textContent = "\xD7", n.setAttribute("aria-label", "Close"), n.addEventListener("click", $r), e.append(t, n), Ue = document.createElement("div"), Ue.className = "enc-edit-popup-body";
    const r = (a) => {
      Ue.addEventListener(a, () => {
        He && He.dispatchEvent(new Event(a, {
          bubbles: true
        }));
      });
    };
    return r("input"), r("change"), $e.append(e, Ue), document.body.appendChild($e), $e;
  }
  function zd(e) {
    if (!$e) return;
    const t = e.getBoundingClientRect(), n = $e.offsetWidth || 320, r = $e.offsetHeight || 360, a = 8;
    let s = t.right + a;
    s + n > window.innerWidth - a && (s = t.left - n - a), s = Math.max(a, Math.min(s, window.innerWidth - n - a));
    let o = t.top;
    o = Math.max(a, Math.min(o, window.innerHeight - r - a)), $e.style.left = `${s}px`, $e.style.top = `${o}px`;
  }
  function Fi(e) {
    if (!$e || !He) return;
    const t = e.target;
    $e.contains(t) || t instanceof Element && t.closest(".help-drawer, .help-backdrop, .help-popover") || $r();
  }
  function qi(e) {
    e.key === "Escape" && $r();
  }
  function Vd(e) {
    if (He === e) {
      $r();
      return;
    }
    const t = Bd(), n = e.querySelector(".enc-body");
    if (!(!n || !Ue)) {
      if (He) {
        const r = Ue.querySelector(".enc-body");
        r && He.appendChild(r);
      }
      He = e, Ue.appendChild(n), t.style.display = "block", zd(e), setTimeout(() => {
        document.addEventListener("click", Fi), document.addEventListener("keydown", qi);
      }, 0);
    }
  }
  function $r() {
    if (!$e || !He || !Ue) return;
    const e = Ue.querySelector(".enc-body");
    e && He.appendChild(e), $e.style.display = "none", He = null, document.removeEventListener("click", Fi), document.removeEventListener("keydown", qi);
  }
  function Wd(e) {
    const t = yr(e), n = ve(t.lower_bound), r = ve(t.upper_bound), a = `[${n}, ${r}]`;
    switch (t.type) {
      case "interval-fixed":
      case "interval-tapering":
        return `n=${t.n} w=${t.w} ${a}`;
      case "periodic-fixed":
        return `n=${t.n} w=${t.w} ${a} T=${ve(t.period ?? 0)}`;
      case "periodic-cell":
        return `n=${t.n} ${a} T=[${ve(t.min_period ?? 0)}, ${ve(t.max_period ?? 0)}] l=${ve(t.l_frac ?? 0)}`;
      case "periodic-random-cell": {
        const s = t.randomize_periods ? "*" : "", o = t.randomize_l_frac ? "*" : "", i = t.randomize_periods ? `T\u2264${ve(t.max_period ?? t.const_period ?? 0)}${s}` : `T=${ve(t.const_period ?? 0)}`, c = t.randomize_l_frac ? `l\u2264${ve(t.max_l_frac ?? t.const_l_frac ?? 0)}${o}` : `l=${ve(t.const_l_frac ?? 0)}`, l = t.randomize_origins || t.randomize_periods || t.randomize_l_frac ? " \u{1F3B2}" : "";
        return `n=${t.n} ${a} ${i} ${c}${l}`;
      }
      case "interval-random-cell": {
        const s = t.randomize_l ? `l\u2264${ve(t.max_l ?? t.const_l ?? 0)}*` : `l=${ve(t.const_l ?? 0)}`, o = t.randomize_l ? " \u{1F3B2}" : "";
        return `n=${t.n} ${a} ${s} ${o}`;
      }
    }
  }
  function oa(e, t) {
    t.textContent = Wd(e);
  }
  function yr(e) {
    const t = Ma(e), n = e.dataset.type ?? "interval-fixed", r = parseInt(t.querySelector(".enc-n").value, 10), a = t.querySelector(".enc-w"), s = a ? parseInt(a.value, 10) : 1, o = parseFloat(t.querySelector(".enc-offset").value), i = parseFloat(t.querySelector(".enc-range").value), c = n === "periodic-fixed" ? i : void 0, l = {
      type: n,
      n: r,
      w: s,
      lower_bound: o,
      upper_bound: o + i,
      period: c
    };
    if (n === "periodic-cell") {
      const u = t.querySelector(".enc-min-period"), v = t.querySelector(".enc-max-period"), y = t.querySelector(".enc-l-frac");
      u && v && y && (l.min_period = parseFloat(u.value), l.max_period = parseFloat(v.value), l.l_frac = parseFloat(y.value));
    }
    if (n === "periodic-random-cell") {
      const u = t.querySelector(".enc-period-rand"), v = t.querySelector(".enc-l-frac-rand"), y = t.querySelector(".enc-rand-origin"), g = t.querySelector(".enc-rand-period"), x = t.querySelector(".enc-rand-l-frac");
      if (u && v) {
        const d = parseFloat(u.value), f = parseFloat(v.value);
        l.const_period = d, l.max_period = d, l.const_l_frac = f, l.max_l_frac = f, l.const_origin = o;
      }
      l.randomize_origins = (y == null ? void 0 : y.checked) ?? false, l.randomize_periods = (g == null ? void 0 : g.checked) ?? false, l.randomize_l_frac = (x == null ? void 0 : x.checked) ?? false;
      const w = e.dataset.seed;
      w && (l.seed = parseInt(w, 10));
    }
    if (n === "interval-random-cell") {
      const u = t.querySelector(".enc-l-rand"), v = t.querySelector(".enc-rand-l");
      if (u) {
        const g = parseFloat(u.value);
        l.const_l = g, l.max_l = g;
      }
      l.randomize_l = (v == null ? void 0 : v.checked) ?? false;
      const y = e.dataset.seed;
      y && (l.seed = parseInt(y, 10));
    }
    return l;
  }
  function Ud(e, t, n) {
    var _a2, _b, _c, _d2;
    const r = Ma(e), a = r.querySelector(".enc-offset"), s = r.querySelector(".enc-range");
    if (!a || !s) return;
    const o = (_a2 = a.parentElement) == null ? void 0 : _a2.querySelector(".enc-n-val"), i = (_b = s.parentElement) == null ? void 0 : _b.querySelector(".enc-n-val"), c = parseFloat(a.value), l = parseFloat(s.value), u = Math.max(Ae, Math.min(l, n - t));
    s.min = String(Ae), s.max = String(n - t), u !== l && (s.value = String(u), i && (i.value = ve(u)));
    const v = Math.max(t, Math.min(c, n - u));
    a.min = String(t), a.max = String(n - u), v !== c && (a.value = String(v), o && (o.value = ve(v))), s.max = String(n - v);
    const y = r.querySelector(".enc-max-period"), g = r.querySelector(".enc-min-period");
    if (y && g) {
      const x = Math.min(Sa, n - t), w = (_c = y.parentElement) == null ? void 0 : _c.querySelector(".enc-n-val"), d = (_d2 = g.parentElement) == null ? void 0 : _d2.querySelector(".enc-n-val"), f = parseFloat(y.value), p = Math.max(Rt, Math.min(f, x));
      y.max = String(x), p !== f && (y.value = String(p), w && (w.value = ve(p)));
      const b = parseFloat(g.value), S = Math.max(Rt, Math.min(b, p));
      g.max = String(p), S !== b && (g.value = String(S), d && (d.value = ve(S)));
    }
  }
  function zt(e, t, n) {
    Mi = 0, e.innerHTML = "", t.forEach((r) => e.appendChild(Ai(r, n))), $a(e);
  }
  function $a(e) {
    e.querySelectorAll(".enc-row").forEach((n) => {
      const r = n.querySelector(".enc-remove");
      r.style.visibility = "visible";
      const a = parseInt(n.dataset.colorIdx ?? "0", 10), s = dt(a);
      n.style.background = xa(s, 1), n.style.borderColor = xa("#000", 1);
    });
  }
  function Zt(e) {
    const t = e.querySelectorAll(".enc-row");
    return t.length === 0 ? null : Array.from(t).map((n) => yr(n));
  }
  const As = {
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
  function Hd(e, t) {
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
      for (const r of Object.keys(As)) n[r] === false && e.classList.add(`embed-no-${As[r]}`);
    }
    return n;
  }
  const Gd = "#0064a3";
  function Kd() {
    let e = false, t = false, n = false, r = false, a = Jr, s = 3, o = [], i = -1, c = NaN, l = [], u = [], v = [], y = [], g = null, x = null, w = null;
    function d() {
      if (g) {
        if (g.innerHTML = "", l.length > 0) {
          const m = isFinite(c) ? c.toFixed(3) : "\u2014";
          g.appendChild(f(l, m, Gd));
        }
        u.forEach((m, P) => {
          g.appendChild(f(m, v[P].toFixed(3), y[P] ?? null));
        });
      }
    }
    function f(m, P, N) {
      const C = document.createElement("div");
      C.className = "bp-row";
      const T = document.createElement("div");
      if (T.className = "bp-row-label", N) {
        const W = document.createElement("span");
        W.style.cssText = `display:inline-block;width:8px;height:8px;background:${N};border-radius:50%;flex-shrink:0`, T.appendChild(W);
      }
      const O = document.createElement("span");
      O.textContent = P, T.appendChild(O), C.appendChild(T);
      const F = document.createElement("div");
      F.className = "bp-squares-wrap";
      let z = Array.from({
        length: m.length
      }, (W, X) => X);
      t && (n && z.sort((W, X) => (m[X] ?? 0) - (m[W] ?? 0)), r && (z = z.filter((W) => (m[W] ?? 0) === 1)));
      for (const W of z) {
        const X = m[W] ?? 0;
        let ie, oe;
        X === 1 ? (ie = e ? o[W] ?? vs : "#111111", oe = Gc) : (ie = Kc, oe = Yc);
        const te = String(t ? W : X), V = te.length, D = Uc[V] ?? Hc, q = Math.max(6, Math.round(D * (a / Jr))), L = document.createElement("div");
        L.style.cssText = [
          `width:${a}px`,
          `height:${a}px`,
          `background:${ie}`,
          `border:${s}px solid #000`,
          "display:flex",
          "align-items:center",
          "justify-content:center",
          `font-size:${q}px`,
          "font-family:monospace",
          "font-weight:bold",
          `color:${oe}`,
          "flex-shrink:0",
          "box-sizing:border-box"
        ].join(";"), L.textContent = te, L.dataset.tooltip = `bit ${W}`, F.appendChild(L);
      }
      return C.appendChild(F), C;
    }
    function p(m, P, N = [], C = [], T = [], O) {
      P.innerHTML = "";
      const F = !!P.closest("[data-embed]");
      a = F ? Xc : Jr, s = F ? 1 : 3, i = -1, c = NaN, l = [], o = new Array(m.n_bits).fill(vs), m.sub_encoders.forEach((V, D) => {
        var _a2;
        const q = ((_a2 = V.bit_range) == null ? void 0 : _a2[0]) ?? 0, L = V.n_bits ?? 0, E = T[D] ?? dt(D);
        for (let I = 0; I < L; I++) o[q + I] = E;
      }), v = N.slice(), y = C.slice(), u = N.map((V) => {
        const D = Math.max(0, lt(m.boundaries, V));
        return m.codes[D] ?? [];
      });
      const z = document.createElement("div");
      z.className = "chip-controls";
      let W, X;
      const ie = () => {
        const V = t;
        [
          W,
          X
        ].forEach((D) => {
          D.disabled = !V, D.style.opacity = V ? "" : "0.4", D.style.cursor = V ? "" : "not-allowed";
        });
      }, oe = document.createElement("button");
      oe.className = "chip-toggle-btn" + (e ? " active" : ""), oe.textContent = "Color-Coded", oe.addEventListener("click", () => {
        e = !e, oe.classList.toggle("active", e), d();
      });
      const te = document.createElement("button");
      te.className = "chip-toggle-btn" + (t ? " active" : ""), te.textContent = "Show Index", te.addEventListener("click", () => {
        t = !t, te.classList.toggle("active", t), ie(), d();
      }), W = document.createElement("button"), W.className = "chip-toggle-btn" + (n ? " active" : ""), W.textContent = "Sort by Active", W.addEventListener("click", () => {
        n = !n, W.classList.toggle("active", n), d();
      }), X = document.createElement("button"), X.className = "chip-toggle-btn" + (r ? " active" : ""), X.textContent = "Hide 0s", X.addEventListener("click", () => {
        r = !r, X.classList.toggle("active", r), d();
      }), ie(), z.append(_t("control.bitsPanel"), oe, te, W, X), w = O ?? null, x = document.createElement("div"), x.className = "bp-ref-slot", z.appendChild(x), w && w(x), P.appendChild(z), g = document.createElement("div"), g.className = "bp-rows", P.appendChild(g), P.style.display = "flex", P.style.flexDirection = "column";
    }
    function b() {
      x && w && w(x);
    }
    function S(m) {
      m.innerHTML = "", o = [], l = [], c = NaN, u = [], v = [], y = [], g = null, x = null, w = null, i = -1;
      const P = document.createElement("div");
      P.className = "bits-panel-placeholder", P.textContent = "Add encoders to see bit codes here", m.appendChild(P), m.style.display = "flex";
    }
    function _(m, P, N) {
      g && (v = P.slice(), y = N.slice(), u = P.map((C) => {
        const T = Math.max(0, lt(m.boundaries, C));
        return m.codes[T] ?? [];
      }), d());
    }
    function h(m, P, N = [], C = []) {
      if (!g || !isFinite(P)) return;
      (N.length !== v.length || N.some((O, F) => O !== v[F])) && (v = N.slice(), y = C.slice(), u = N.map((O) => {
        const F = Math.max(0, lt(m.boundaries, O));
        return m.codes[F] ?? [];
      }));
      const T = lt(m.boundaries, P);
      T === i && P === c || (c = P, i = T, l = m.codes[T] ?? [], d());
    }
    return {
      buildBitsPanelStructure: p,
      refreshBitsPanelRefControls: b,
      showBitsPanelPlaceholder: S,
      refreshBitsPanelRefs: _,
      updateBitsPanelScalar: h
    };
  }
  function Fs(e, t) {
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
  function Bi(e, t, n = {}) {
    const r = n.xWindow, [a, s] = Da(t), o = (i) => ({
      xaxis: {
        fixedrange: true,
        title: {
          text: i
        },
        range: r ?? [
          a,
          s
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
          overrides: o("Encoded Scalar Input Value")
        };
      default:
        return Bi("bins-only", t, n);
    }
  }
  function Qt(e, t, n) {
    return e + (t - e) * n;
  }
  function Yd(e) {
    return e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e;
  }
  class Xd {
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
        const [a, s, o] = r.value, [i, c] = n.coord([
          a,
          s
        ]), [, l] = n.coord([
          a,
          o
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
        const [a, s, o, i] = r.value, c = n.coord([
          a,
          i
        ]), l = n.coord([
          o,
          s
        ]), u = c[0], v = c[1], y = l[0] - u, g = l[1] - v;
        if (y <= 0 || g <= 0) return {
          type: "group",
          children: []
        };
        const x = [
          {
            type: "rect",
            shape: {
              x: u,
              y: v,
              width: y,
              height: g
            },
            style: {
              fill: r.color,
              opacity: r.opacity,
              stroke: "#000000",
              lineWidth: 1.5
            }
          }
        ];
        if (y >= ks && g >= ks) {
          const w = Math.max(5, Math.min(Math.floor(0.9 * g), Math.floor(0.6 * y)));
          x.push({
            type: "text",
            style: {
              x: u + y / 2,
              y: v + g / 2,
              text: r.label,
              textAlign: "center",
              textVerticalAlign: "middle",
              fontSize: w,
              fill: "#000000",
              opacity: r.isCongruent ? 0.1 : 1,
              width: y - 2,
              overflow: "truncate",
              ellipsis: ""
            }
          });
        }
        return {
          type: "group",
          children: x
        };
      });
      __publicField(this, "renderDecompItem", (t, n) => {
        const r = this.currentDecompItems[t.dataIndex];
        if (!r) return {
          type: "group",
          children: []
        };
        const [a, s, o, i] = r.value, c = n.coord([
          a,
          i
        ]), l = n.coord([
          o,
          s
        ]), u = c[0], v = c[1], y = l[0] - u, g = l[1] - v;
        if (y <= 0 || g <= 0) return {
          type: "group",
          children: []
        };
        const x = [
          {
            type: "rect",
            shape: {
              x: u,
              y: v,
              width: y,
              height: g
            },
            style: {
              fill: rl,
              stroke: "#000",
              lineWidth: 1
            }
          }
        ];
        if (y >= 8 && g >= 8) {
          const w = u + y / 2, d = v + g / 2, f = r.label.split("/");
          if (f.length === 2 && g >= 14) {
            const p = Math.max(f[0].length, f[1].length), b = Math.max(5, Math.min(Math.floor(0.42 * g), Math.floor(y / Math.max(1, p)))), S = Math.max(1, Math.floor(b * 0.15)), _ = Math.min(y - 2, Math.max(p * Math.floor(0.55 * b), 8));
            x.push({
              type: "text",
              style: {
                x: w,
                y: d - S,
                text: f[0],
                textAlign: "center",
                textVerticalAlign: "bottom",
                fontSize: b,
                fill: "#000000",
                fontWeight: "bold",
                width: y - 2,
                overflow: "truncate",
                ellipsis: ""
              }
            }, {
              type: "rect",
              shape: {
                x: w - _ / 2,
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
                x: w,
                y: d + S,
                text: f[1],
                textAlign: "center",
                textVerticalAlign: "top",
                fontSize: b,
                fill: "#000000",
                fontWeight: "bold",
                width: y - 2,
                overflow: "truncate",
                ellipsis: ""
              }
            });
          } else {
            const p = Math.max(5, Math.min(Math.floor(0.9 * g), Math.floor(0.6 * y)));
            x.push({
              type: "text",
              style: {
                x: w,
                y: d,
                text: r.label,
                textAlign: "center",
                textVerticalAlign: "middle",
                fontSize: p,
                fill: "#000000",
                fontWeight: "bold",
                width: y - 2,
                overflow: "truncate",
                ellipsis: ""
              }
            });
          }
        }
        return {
          type: "group",
          children: x
        };
      });
      __publicField(this, "renderSimHeatmapItem", (t, n) => {
        const r = this.currentSimHeatItems[t.dataIndex];
        if (!r) return {
          type: "group",
          children: []
        };
        const [a, s, o, i] = r.value, c = n.coord([
          a,
          i
        ]), l = n.coord([
          o,
          s
        ]), u = c[0], v = c[1], y = l[0] - u, g = l[1] - v;
        return y <= 0 || g <= 0 ? {
          type: "group",
          children: []
        } : {
          type: "rect",
          shape: {
            x: u,
            y: v,
            width: y,
            height: g
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
      this.chart = Tl(n) ?? Dl(n, void 0, {
        renderer: "canvas"
      }), r.forEach((o) => n.appendChild(o));
      const a = n.firstElementChild ?? n;
      a.querySelectorAll(":scope > .ev-cursor-wrap, :scope > .ev-controls-wrap").forEach((o) => o.remove());
      const s = document.createElement("div");
      s.className = "ev-cursor-wrap", s.style.cssText = "position:absolute;inset:0;pointer-events:none;z-index:20", a.appendChild(s), this.cursorLineEl = document.createElement("div"), this.cursorLineEl.style.cssText = `position:absolute;width:2px;margin-left:-1px;display:none;pointer-events:none;background:${Zr}`, s.appendChild(this.cursorLineEl), this.controlsWrap = document.createElement("div"), this.controlsWrap.className = "ev-controls-wrap", this.controlsWrap.style.cssText = "position:absolute;inset:0;pointer-events:none;z-index:21", a.appendChild(this.controlsWrap), this.chart.on("resize", () => this.renderStaticSubplots());
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
      var _a2, _b, _c;
      this.chart.resize(), this.specs = t, this.data = n;
      const a = (_a2 = r == null ? void 0 : r.xaxis) == null ? void 0 : _a2.range;
      return Array.isArray(a) && a.length === 2 ? (this.axisMin = a[0], this.axisMax = a[1]) : [this.axisMin, this.axisMax] = Da(n), this.binsGridIndex = t.findIndex((s) => s.type === "bins"), this.folded = ((_c = (_b = t.find((s) => s.type === "bins")) == null ? void 0 : _b.params) == null ? void 0 : _c.folded) ?? false, this.binsGridIndex >= 0 && (this.currentBins = this.computeBins(this.folded, null)), this.chart.setOption(this.buildFullOption(), {
        notMerge: true
      }), this.renderStaticSubplots(), isFinite(this.lastScalar) && this.updateScalar(this.lastScalar), this;
    }
    updateScalar(t) {
      var _a2;
      if (this.animating || !this.data) return;
      this.lastScalar = t;
      const n = [];
      if (this.binsGridIndex >= 0) {
        const s = this.getActiveCode(t), o = this.computeBins(this.folded, s);
        this.currentBins = o, n.push({
          id: "bins-series",
          data: o
        });
      }
      this.specs.some((s) => s.type === "similarity") && n.push({
        id: "similarity-cursor",
        data: this.buildSimilarityCursorData(t)
      });
      const r = this.specs.findIndex((s) => s.type === "similarity-heatmap");
      r >= 0 && (this.currentSimHeatItems = this.buildSimHeatmapItems(t), n.push({
        id: `sim-heatmap-${r}`,
        data: this.currentSimHeatItems
      }));
      const a = this.specs.findIndex((s) => s.type === "per-bin");
      a >= 0 && (this.currentPerBinItems = bs(this.data, t, (_a2 = this.specs[a].params) == null ? void 0 : _a2.colors), n.push({
        id: `per-bin-${a}`,
        data: this.currentPerBinItems
      })), this.chart.setOption({
        series: n
      }), this.updateDOMCursor(t);
    }
    async animateBinsFold(t, n = Zc) {
      if (this.animating || !this.data || this.binsGridIndex < 0 || this.folded === t) return;
      const r = this.getActiveCode(this.lastScalar), a = this.computeBins(this.folded, r), s = this.currentBoundLines, o = this.binsTotalHeight;
      this.folded = t;
      const i = this.computeBins(t, r), c = this.currentBoundLines, l = this.binsTotalHeight;
      return this.animating = true, new Promise((u) => {
        const v = performance.now(), y = (g) => {
          const x = Math.min((g - v) / n, 1), w = Yd(x), d = a.map((_, h) => {
            const m = i[h] ?? _;
            return {
              ...m,
              value: [
                m.value[0],
                Qt(_.value[1], m.value[1], w),
                m.value[2],
                Qt(_.value[3], m.value[3], w)
              ]
            };
          }), f = s.map((_, h) => {
            const m = c[h] ?? _;
            return {
              value: [
                m.value[0],
                Qt(_.value[1], m.value[1], w),
                Qt(_.value[2], m.value[2], w)
              ]
            };
          });
          this.currentBins = d, this.currentBoundLines = f;
          const p = Qt(o, l, w), { min: b, max: S } = this.computeBinsYRange(p);
          this.chart.setOption({
            yAxis: [
              {
                id: "bins-yaxis",
                min: b,
                max: S
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
          }), x < 1 ? requestAnimationFrame(y) : (this.animating = false, u());
        };
        requestAnimationFrame(y);
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
      var _a2, _b, _c, _d2;
      if (!this.data) return this.currentBoundLines = [], [];
      const r = this.data.sub_encoders, a = this.specs.find((f) => f.type === "bins"), s = ((_a2 = a == null ? void 0 : a.params) == null ? void 0 : _a2.w) ?? 1, o = ((_b = a == null ? void 0 : a.params) == null ? void 0 : _b.lo) ?? this.axisMin, i = ((_c = a == null ? void 0 : a.params) == null ? void 0 : _c.hi) ?? this.axisMax, c = Qc(r, t, s), { yBases: l, totalHeight: u } = el(c);
      this.binsTotalHeight = u;
      const v = 0, y = [];
      r.forEach((f, p) => {
        const b = l[p] - v, S = l[p] + c[p].nRows + v;
        y.push({
          value: [
            f.lower_bound,
            b,
            S
          ]
        }), y.push({
          value: [
            f.upper_bound,
            b,
            S
          ]
        });
      }), this.currentBoundLines = y;
      const g = (_d2 = a == null ? void 0 : a.params) == null ? void 0 : _d2.colors, x = 0.05, w = 1, d = [];
      return r.forEach((f, p) => {
        var _a3;
        const b = f.bins ?? [], S = (g == null ? void 0 : g[p]) ?? dt(p), _ = l[p], { primaryRows: h, primaryIndices: m, expandedWidth: P } = c[p], N = ((_a3 = f.bit_range) == null ? void 0 : _a3[0]) ?? 0;
        b.forEach((C, T) => {
          const O = Math.max(C.lower, o), F = Math.min(typeof C.upper == "number" ? C.upper : C.lower + P, i);
          if (O >= F) return;
          const z = h[m[T]], W = C.is_congruent ?? false, X = N + m[T];
          let ie;
          if (n !== null) {
            const V = X < n.length && n[X] === 1;
            ie = W ? V ? dl : ul : V ? pl : ml;
          } else ie = W ? fl : hl;
          const oe = _ + z * w + x, te = _ + (z + 1) * w - x;
          d.push({
            value: [
              O,
              oe,
              F,
              te
            ],
            color: S,
            opacity: ie,
            label: String(X),
            bitIdx: X,
            isCongruent: W
          });
        });
      }), d;
    }
    getActiveCode(t) {
      if (!this.data || !isFinite(t)) return null;
      const n = lt(this.data.boundaries, t);
      return n >= 0 ? this.data.codes[n] ?? null : null;
    }
    buildSimilarityCursorData(t) {
      if (!this.data || !isFinite(t)) return [];
      const { boundaries: n, codes: r } = this.data, a = lt(n, t), s = xs(r, r[a]), o = [];
      for (let i = 0; i < n.length - 1; i++) {
        const c = (n[i] + n[i + 1]) / 2;
        o.push([
          n[i],
          s[i]
        ], [
          c,
          s[i]
        ]);
      }
      return o.push([
        n[n.length - 1],
        s[s.length - 1]
      ]), o;
    }
    buildSimilarityLines(t, n) {
      if (!this.data || t.length === 0) return [];
      const { boundaries: r, codes: a } = this.data;
      return t.map((s, o) => {
        const i = lt(r, s), c = xs(a, a[i]), l = [], u = [];
        for (let v = 0; v < r.length - 1; v++) {
          const y = (r[v] + r[v + 1]) / 2;
          l.push(r[v], y), u.push(c[v], c[v]);
        }
        return l.push(r[r.length - 1]), u.push(c[c.length - 1]), {
          x: l,
          y: u,
          color: n[o] ?? dt(o + 4)
        };
      });
    }
    getGridRect(t) {
      var _a2, _b, _c;
      try {
        return ((_c = (_b = (_a2 = this.chart.getModel().getComponent("grid", t)) == null ? void 0 : _a2.coordinateSystem) == null ? void 0 : _b.getRect) == null ? void 0 : _c.call(_b)) ?? null;
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
        const s = this.getGridRect(a);
        if (!s || !isFinite(s.width) || s.width <= 0 || s.height <= 0) {
          console.warn(`[encoder_analysis] canvas subplot gi=${a} (${r.type}) skipped \u2014 gridRect=${s ? JSON.stringify(s) : "null"}`);
          return;
        }
        const o = document.createElement("canvas");
        o.width = Math.round(s.width * t), o.height = Math.round(s.height * t);
        const i = o.getContext("2d");
        i.scale(t, t), (r.type === "bits-by-data" ? this.renderBitsByDataCanvas(i, s, a, r.params) : this.renderProjSimCanvas(i, s, a, r.params)) && (this.staticImages.set(a, o), n.push({
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
        const s = Fs(r.type, r.params), o = ((_a2 = this.subplotHelpIcon) == null ? void 0 : _a2.call(this, r.type)) ?? null, i = s.length + (o ? 1 : 0);
        if (i === 0) return;
        const c = this.getGridRect(a);
        if (!c || !isFinite(c.y) || c.height <= 0) return;
        const l = document.createElement("div");
        if (l.className = "subplot-gutter-cluster", this.compact) l.style.cssText = `position:absolute;left:2px;top:${c.y + 2}px;display:flex;flex-direction:column;gap:${n}px;align-items:flex-start;pointer-events:none;`;
        else {
          const u = i * t + (i - 1) * n, v = c.y + Math.max(0, (c.height - u) / 2);
          l.style.cssText = `position:absolute;left:3px;width:${this.controlGutterPx - 5}px;top:${v}px;display:flex;flex-direction:column;gap:${n}px;align-items:center;pointer-events:none;`;
        }
        o && (o.classList.add("subplot-gutter-help"), o.style.pointerEvents = "auto", l.appendChild(o));
        for (const u of s) {
          const v = document.createElement("button");
          v.type = "button", v.className = "subplot-gutter-ctl" + (u.active ? " active" : ""), v.textContent = u.glyph, v.dataset.tooltip = u.title, v.setAttribute("aria-pressed", u.active ? "true" : "false"), v.style.pointerEvents = "auto", v.addEventListener("click", (y) => {
            var _a3;
            y.stopPropagation(), (_a3 = this.onSubplotControlToggle) == null ? void 0 : _a3.call(this, a, u.id);
          }), l.appendChild(v);
        }
        this.controlsWrap.appendChild(l);
      });
    }
    drawVerticalBoundaryLines(t, n, r, a) {
      t.strokeStyle = Ss, t.lineWidth = 1;
      for (const s of a) {
        const o = this.chart.convertToPixel({
          xAxisIndex: r
        }, s) - n.x;
        t.beginPath(), t.moveTo(o, 0), t.lineTo(o, n.height), t.stroke();
      }
    }
    renderBitsByDataCanvas(t, n, r, a = {}) {
      var _a2;
      if (!this.data) return false;
      const { codes: s, boundaries: o, n_bits: i } = this.data;
      if (o.length < 2 || i === 0) return false;
      const c = this.chart.convertToPixel({
        xAxisIndex: r
      }, o[0]);
      if (!isFinite(c)) return console.warn(`[encoder_analysis] bits-by-data canvas: probe pixel NaN (gi=${r}, boundaries[0]=${o[0]})`), false;
      const l = (a.gap ?? 0) > 0, u = this.gridPrimaryYIdx[r] ?? r, v = [];
      for (let y = 0; y < i; y++) {
        const g = this.chart.convertToPixel({
          yAxisIndex: u
        }, y + 0.5) - n.y, x = this.chart.convertToPixel({
          yAxisIndex: u
        }, y - 0.5) - n.y;
        v.push({
          pyTop: g,
          cellPixelHeight: Math.max(1, x - g)
        });
      }
      for (let y = 0; y < o.length - 1; y++) {
        const g = this.chart.convertToPixel({
          xAxisIndex: r
        }, o[y]) - n.x, x = this.chart.convertToPixel({
          xAxisIndex: r
        }, o[y + 1]) - n.x, w = Math.max(1, x - g);
        for (let d = 0; d < i; d++) {
          const { pyTop: f, cellPixelHeight: p } = v[d];
          t.fillStyle = ((_a2 = s[y]) == null ? void 0 : _a2[d]) ?? 0 ? tl : nl, t.fillRect(g, f, w, p);
        }
      }
      return l && this.drawVerticalBoundaryLines(t, n, r, o), true;
    }
    renderProjSimCanvas(t, n, r, a = {}) {
      var _a2;
      if (!this.data) return false;
      const { similarity: s, boundaries: o } = this.data;
      if (o.length < 2 || s.length === 0) return console.warn(`[encoder_analysis] projected-similarity canvas: degenerate data (gi=${r}, boundaries.length=${o.length}, similarity.length=${s.length})`), false;
      const i = this.chart.convertToPixel({
        xAxisIndex: r
      }, o[0]);
      if (!isFinite(i)) return console.warn(`[encoder_analysis] projected-similarity canvas: probe pixel NaN (gi=${r}, boundaries[0]=${o[0]})`), false;
      let c = 1;
      for (let d = 0; d < s.length; d++) {
        const f = s[d];
        if (f) for (let p = 0; p < f.length; p++) {
          const b = f[p];
          b > c && (c = b);
        }
      }
      const l = o.length - 1, u = (a.gap ?? 0) > 0, v = a.showText ?? false, y = 4, g = this.gridPrimaryYIdx[r] ?? r, x = [];
      for (let d = 0; d < l; d++) {
        const f = this.chart.convertToPixel({
          xAxisIndex: r
        }, o[d]) - n.x, p = this.chart.convertToPixel({
          xAxisIndex: r
        }, o[d + 1]) - n.x;
        x.push({
          px0: f,
          cellPixelWidth: Math.max(1, p - f)
        });
      }
      const w = [];
      for (let d = 0; d < l; d++) {
        const f = this.chart.convertToPixel({
          yAxisIndex: g
        }, o[d + 1]) - n.y, p = this.chart.convertToPixel({
          yAxisIndex: g
        }, o[d]) - n.y;
        w.push({
          pyTop: f,
          cellPixelHeight: Math.max(1, p - f)
        });
      }
      for (let d = 0; d < l; d++) {
        const { px0: f, cellPixelWidth: p } = x[d];
        for (let b = 0; b < l; b++) {
          const { pyTop: S, cellPixelHeight: _ } = w[b], h = ((_a2 = s[d]) == null ? void 0 : _a2[b]) ?? 0, m = c > 0 ? h / c : 0;
          if (t.fillStyle = ws(m), t.fillRect(f, S, p, _), v && p >= 6 && _ >= 6) {
            const P = Math.max(y, Math.min(Math.floor(0.65 * _), Math.floor(0.55 * p)));
            t.font = `${P}px sans-serif`, t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = m > 0.55 ? "#ffffff" : "#111111", t.fillText(String(h), f + p / 2, S + _ / 2);
          }
        }
      }
      if (u) {
        this.drawVerticalBoundaryLines(t, n, r, o), t.strokeStyle = Ss, t.lineWidth = 1;
        for (const d of o) {
          const f = this.chart.convertToPixel({
            yAxisIndex: g
          }, d) - n.y;
          t.beginPath(), t.moveTo(0, f), t.lineTo(n.width, f), t.stroke();
        }
      }
      return true;
    }
    buildDecompItems() {
      if (!this.data) return [];
      const { boundaries: t } = this.data, n = t[0], a = t[t.length - 1] - n;
      return t.slice(0, -1).map((s, o) => {
        const i = t[o + 1], c = Math.round(a / (i - s));
        return {
          value: [
            s,
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
      const s = Math.max(0, lt(n, t)), o = r[s] ?? [];
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
        color: ws(i > 0 ? (o[l] ?? 0) / i : 0)
      }));
    }
    buildFeaturesData() {
      if (!this.data) return [];
      const { boundaries: t, deltas: n } = this.data, r = t.slice(1, -1), a = [];
      return r.forEach((s, o) => {
        const i = n[o] ?? 0;
        for (let c = 0; c < i; c++) a.push([
          s,
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
      const t = this.specs.reduce((a, s) => a + s.heightFrac, 0), n = 1 - Ps - al - Es * (this.specs.length - 1);
      let r = Ps;
      return this.specs.map((a) => {
        const s = a.heightFrac / t * n, o = {
          topPct: r,
          heightPct: s
        };
        return r += s + Es, o;
      });
    }
    buildFullOption() {
      const t = this.computeGridPositions(), n = [], r = [], a = [], s = [];
      let o = 0;
      this.gridPrimaryYIdx = [];
      const i = this.specs.length > 0 && (this.subplotHelpIcon != null || this.specs.some((y) => Fs(y.type, y.params).length > 0));
      this.controlGutterPx = !this.compact && i ? sl : 0;
      const c = this.compact ? ol : bi, l = this.compact ? il : xi, u = this.data.n_bits === 0 && this.data.n_regions === 0, v = {
        show: true,
        precision: 4,
        backgroundColor: "rgba(20,30,60,0.9)",
        color: "#e8eaff",
        fontSize: Cs
      };
      return this.specs.forEach((y, g) => {
        var _a2, _b, _c;
        const { topPct: x, heightPct: w } = t[g], d = g === 0, f = g === this.specs.length - 1, p = this.specs.length === 1, b = d && !p ? "top" : "bottom", S = d || f;
        n.push({
          left: c + this.controlGutterPx,
          right: l,
          top: `${(x * 100).toFixed(1)}%`,
          height: `${(w * 100).toFixed(1)}%`
        }), r.push({
          type: "value",
          gridIndex: g,
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
            fontSize: Cs,
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
              show: S
            }
          }
        });
        const _ = {
          gridIndex: g,
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
        }, h = {
          color: y.color ?? "#333",
          fontWeight: "bold",
          fontSize: 11
        };
        if (y.type === "bins") {
          const m = this.computeBinsYRange(this.binsTotalHeight);
          this.gridPrimaryYIdx.push(o), a.push({
            ..._,
            id: "bins-yaxis",
            type: "value",
            min: m.min,
            max: m.max,
            name: "Bins",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: h
          }), o++, s.push({
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
            xAxisIndex: g,
            yAxisIndex: this.gridPrimaryYIdx[g],
            zlevel: 10,
            emphasis: {
              disabled: true
            }
          }), s.push({
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
            xAxisIndex: g,
            yAxisIndex: this.gridPrimaryYIdx[g],
            zlevel: 11,
            silent: true,
            itemStyle: {
              borderWidth: 4,
              color: "black"
            }
          });
        } else if (y.type === "similarity") {
          if (!this.data) {
            this.gridPrimaryYIdx.push(o), a.push(_), o++;
            return;
          }
          let m = 1;
          for (let T = 0; T < this.data.codes.length; T++) {
            const O = this.data.codes[T];
            let F = 0;
            for (let z = 0; z < O.length; z++) F += O[z];
            F > m && (m = F);
          }
          const P = m + 1;
          this.gridPrimaryYIdx.push(o), a.push({
            ..._,
            type: "value",
            position: "left",
            min: 0,
            max: P,
            name: "Similarity",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: h
          }), o++, a.push({
            ..._,
            type: "value",
            position: "right",
            min: 0,
            max: P,
            axisLabel: {
              show: true,
              color: "#111111"
            }
          }), o++;
          const N = ((_a2 = y.params) == null ? void 0 : _a2.refPoints) ?? [], C = ((_b = y.params) == null ? void 0 : _b.colors) ?? [];
          this.buildSimilarityLines(N, C).forEach(({ x: T, y: O, color: F }) => {
            s.push({
              type: "line",
              data: T.map((z, W) => [
                z,
                O[W]
              ]),
              showSymbol: false,
              step: "end",
              lineStyle: {
                color: F,
                width: 2
              },
              areaStyle: {
                color: xa(F, 0.3)
              },
              xAxisIndex: g,
              yAxisIndex: this.gridPrimaryYIdx[g]
            });
          }), N.forEach((T, O) => {
            s.push({
              type: "line",
              data: [],
              markLine: {
                symbol: "none",
                lineStyle: {
                  type: "dashed",
                  color: C[O] ?? dt(O + 4),
                  width: 1
                },
                data: [
                  {
                    xAxis: T
                  }
                ],
                label: {
                  show: false
                }
              },
              xAxisIndex: g,
              yAxisIndex: this.gridPrimaryYIdx[g]
            });
          }), s.push({
            id: "similarity-cursor",
            type: "line",
            data: [],
            showSymbol: false,
            step: "end",
            lineStyle: {
              color: Zr,
              width: 2
            },
            areaStyle: {
              color: cl
            },
            xAxisIndex: g,
            yAxisIndex: this.gridPrimaryYIdx[g],
            zlevel: 10
          });
        } else if (y.type === "bits-by-data") {
          const m = ll["bits-by-data"], P = u ? m[0] : -0.5, N = u ? m[1] : Math.max(this.data.n_bits - 0.5, m[1]);
          this.gridPrimaryYIdx.push(o), a.push({
            ..._,
            type: "value",
            position: "left",
            min: P,
            max: N,
            name: "Bit Index",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: h
          }), o++, a.push({
            ..._,
            type: "value",
            position: "right",
            min: P,
            max: N,
            axisLabel: {
              show: true,
              color: "#111111"
            }
          }), o++;
          const C = g, T = N, O = P;
          s.push({
            type: "custom",
            id: `static-canvas-${g}`,
            renderItem: (F, z) => {
              const W = this.staticImages.get(C);
              if (!W) return {
                type: "group",
                children: []
              };
              const [X, ie] = z.coord([
                this.axisMin,
                T
              ]), [oe, te] = z.coord([
                this.axisMax,
                O
              ]);
              return {
                type: "image",
                style: {
                  image: W,
                  x: X,
                  y: ie,
                  width: Math.max(0, oe - X),
                  height: Math.max(0, te - ie)
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
            xAxisIndex: g,
            yAxisIndex: this.gridPrimaryYIdx[g]
          }), s.push({
            type: "line",
            data: this.buildProbeData(0),
            lineStyle: {
              opacity: 0
            },
            showSymbol: false,
            emphasis: {
              disabled: true
            },
            xAxisIndex: g,
            yAxisIndex: this.gridPrimaryYIdx[g]
          });
        } else if (y.type === "projected-similarity") {
          if (!this.data) {
            this.gridPrimaryYIdx.push(o), a.push(_), o++;
            return;
          }
          const m = this.data.boundaries, P = this.data.sub_encoders ?? [];
          let N = m[0], C = m[m.length - 1];
          P.length > 0 && (N = Math.min(...P.map((z) => z.lower_bound)), C = Math.max(...P.map((z) => z.upper_bound))), this.gridPrimaryYIdx.push(o), a.push({
            ..._,
            type: "value",
            position: "left",
            min: N,
            max: C,
            name: "Self-Sim.",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: h
          }), o++, a.push({
            ..._,
            type: "value",
            position: "right",
            min: N,
            max: C,
            axisLabel: {
              show: true,
              color: "#111111"
            }
          }), o++;
          const T = g, O = N, F = C;
          s.push({
            type: "custom",
            id: `static-canvas-${g}`,
            renderItem: (z, W) => {
              const X = this.staticImages.get(T);
              if (!X) return {
                type: "group",
                children: []
              };
              const [ie, oe] = W.coord([
                this.axisMin,
                F
              ]), [te, V] = W.coord([
                this.axisMax,
                O
              ]);
              return {
                type: "image",
                style: {
                  image: X,
                  x: ie,
                  y: oe,
                  width: Math.max(0, te - ie),
                  height: Math.max(0, V - oe)
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
            xAxisIndex: g,
            yAxisIndex: this.gridPrimaryYIdx[g]
          }), s.push({
            type: "line",
            data: this.buildProbeData(this.axisMin),
            lineStyle: {
              opacity: 0
            },
            showSymbol: false,
            emphasis: {
              disabled: true
            },
            xAxisIndex: g,
            yAxisIndex: this.gridPrimaryYIdx[g]
          });
        } else if (y.type === "decomposition") this.currentDecompItems = this.buildDecompItems(), this.gridPrimaryYIdx.push(o), a.push({
          ..._,
          type: "value",
          min: 0,
          max: 1,
          name: "Regions",
          nameLocation: "middle",
          nameGap: 10,
          nameTextStyle: h
        }), o++, s.push({
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
          xAxisIndex: g,
          yAxisIndex: this.gridPrimaryYIdx[g]
        });
        else if (y.type === "per-bin") {
          r[g] = {
            ...r[g],
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
          this.currentPerBinItems = bs(this.data, m, (_c = y.params) == null ? void 0 : _c.colors), this.gridPrimaryYIdx.push(o), a.push({
            ..._,
            type: "value",
            min: 0,
            max: 1,
            name: "Per-Bin",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: h
          }), o++, s.push({
            id: `per-bin-${g}`,
            type: "custom",
            renderItem: this.renderPerBinItem,
            data: this.currentPerBinItems,
            encode: {
              x: 0,
              y: 1
            },
            xAxisIndex: g,
            yAxisIndex: this.gridPrimaryYIdx[g],
            silent: true
          });
        } else if (y.type === "similarity-heatmap") {
          const m = isFinite(this.lastScalar) ? this.lastScalar : (this.axisMin + this.axisMax) / 2;
          this.currentSimHeatItems = this.buildSimHeatmapItems(m), this.gridPrimaryYIdx.push(o), a.push({
            ..._,
            type: "value",
            min: 0,
            max: 1,
            name: "Sim. Heat",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: h,
            axisLabel: {
              show: false
            }
          }), o++, s.push({
            id: `sim-heatmap-${g}`,
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
            xAxisIndex: g,
            yAxisIndex: this.gridPrimaryYIdx[g]
          });
        } else if (y.type === "features") {
          if (!this.data) {
            this.gridPrimaryYIdx.push(o), a.push(_), o++;
            return;
          }
          const m = this.buildFeaturesData();
          let P = 1;
          for (let C = 0; C < this.data.deltas.length; C++) this.data.deltas[C] > P && (P = this.data.deltas[C]);
          const N = (P - 1) / 2;
          this.gridPrimaryYIdx.push(o), a.push({
            ..._,
            type: "value",
            position: "left",
            min: -(N + 1),
            max: N + 1,
            name: "Crossings",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: h
          }), o++, a.push({
            ..._,
            type: "value",
            position: "right",
            min: -(N + 1),
            max: N + 1,
            axisLabel: {
              show: true,
              color: "#111111"
            }
          }), o++, s.push({
            type: "scatter",
            data: m,
            symbolSize: 6,
            itemStyle: {
              color: "#333333"
            },
            xAxisIndex: g,
            yAxisIndex: this.gridPrimaryYIdx[g]
          });
        }
      }), {
        animation: false,
        backgroundColor: "transparent",
        grid: n,
        xAxis: r,
        yAxis: a,
        series: s,
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
          formatter: (y) => {
            var _a2, _b, _c, _d2, _e2, _f2, _g, _h2, _i2;
            const g = Array.isArray(y) ? y : [
              y
            ];
            if (!g.length) return "";
            const x = ((_a2 = g[0]) == null ? void 0 : _a2.axisValue) ?? ((_c = (_b = g[0]) == null ? void 0 : _b.value) == null ? void 0 : _c[0]);
            if (x == null) return "";
            const d = parseFloat(String(x)).toFixed(4), f = ((_d2 = g[0]) == null ? void 0 : _d2.axisIndex) ?? 0, p = this.specs[f];
            if (!p) return `x: ${d}`;
            const b = (S) => `<span style="display:inline-block;width:8px;height:8px;background:${S};border-radius:50%;margin-right:4px;vertical-align:middle"></span>`;
            switch (p.type) {
              case "bins":
                return `<b>Scalar:</b> ${d}`;
              case "similarity": {
                const S = ((_e2 = p.params) == null ? void 0 : _e2.refPoints) ?? [], _ = ((_f2 = p.params) == null ? void 0 : _f2.colors) ?? [], h = g.find((N) => N.seriesId === "similarity-cursor"), m = g.filter((N) => N.seriesType === "line" && N.seriesId !== "similarity-cursor");
                let P = `<b>Scalar:</b> ${d}`;
                if (m.forEach((N, C) => {
                  const T = S[C], O = Array.isArray(N.value) ? N.value[1] : null, F = _[C] ?? N.color;
                  P += `<br>${b(F)}vs ${T != null ? T.toFixed(3) : "?"}: <b>${O != null ? Math.round(O) : "\u2014"} bits</b>`;
                }), h) {
                  const N = Array.isArray(h.value) ? h.value[1] : null;
                  P += `<br>${b(Zr)}cursor: <b>${N != null ? Math.round(N) : "\u2014"} bits</b>`;
                }
                return P;
              }
              case "decomposition": {
                const S = (_g = g[0]) == null ? void 0 : _g.value;
                if (Array.isArray(S) && S.length >= 3) {
                  const _ = parseFloat(String(S[0])), h = parseFloat(String(S[2]));
                  return `<b>Region:</b> [${_.toFixed(4)}, ${h.toFixed(4)}]<br><b>Width:</b> ${(h - _).toFixed(4)}`;
                }
                return `<b>Scalar:</b> ${d}`;
              }
              case "features": {
                const S = (_i2 = (_h2 = g[0]) == null ? void 0 : _h2.value) == null ? void 0 : _i2[0];
                if (S != null && this.data) {
                  const h = this.data.boundaries.slice(1, -1).findIndex((P) => Math.abs(P - S) < 1e-9), m = h >= 0 ? this.data.deltas[h] ?? 0 : 0;
                  return `<b>Boundary:</b> ${parseFloat(String(S)).toFixed(4)}<br><b>Crossings:</b> ${m}`;
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
  function Jd(e, t) {
    var _a2, _b, _c2, _d2, _e2, _f2, _g;
    yl(), e.innerHTML = jd;
    const n = Hd(e, t == null ? void 0 : t.ui), r = n.plotPanel !== false, a = n.cursorSlider !== false;
    Sl(n);
    const s = e.querySelector(".enc-config-right");
    s && s.appendChild(gl()), (_c2 = (_b = (_a2 = e.querySelector("#preset-select")) == null ? void 0 : _a2.closest(".control-group")) == null ? void 0 : _b.querySelector("label")) == null ? void 0 : _c2.appendChild(_t("control.presets")), (_f2 = (_e2 = (_d2 = e.querySelector("#view-bounds-slider")) == null ? void 0 : _d2.closest(".control-group")) == null ? void 0 : _e2.querySelector("label")) == null ? void 0 : _f2.appendChild(_t("control.viewBounds"));
    {
      const $ = _t("control.scalarSlider");
      $.classList.add("info-icon-scalar"), (_g = e.querySelector("#scalar-slider-wrap")) == null ? void 0 : _g.appendChild($);
    }
    const o = Kd(), i = e.querySelector("#view-select"), c = e.querySelector("#encoder-list"), l = e.querySelector("#enc-add"), u = e.querySelector("#enc-reset"), v = e.querySelector("#ref-points"), y = e.querySelector("#ref-point-popup"), g = e.querySelector("#ref-point-popup-slider"), x = e.querySelector("#ref-point-popup-lo"), w = e.querySelector("#ref-point-popup-hi"), d = e.querySelector("#ref-point-popup-valtext"), f = e.querySelector("#ref-point-popup-add"), p = e.querySelector("#ref-point-popup-cancel"), b = e.querySelector("#view-bounds-lo"), S = e.querySelector("#view-bounds-hi"), _ = e.querySelector("#view-bounds-lo-val"), h = e.querySelector("#view-bounds-hi-val"), m = e.querySelector("#view-bounds-fill"), P = e.querySelector("#show-regions"), N = e.querySelector("#show-counts"), C = e.querySelector("#metrics"), T = e.querySelector("#error-banner"), O = e.querySelector("#loading"), F = e.querySelector("#folded-bins"), z = e.querySelector("#scalar-row"), W = e.querySelector("#scalar-slider"), X = e.querySelector("#scalar-slider-wrap"), ie = e.querySelector("#scalar-val"), oe = e.querySelector("#scalar-val-gutter"), te = e.querySelector("#scalar-right-pad"), V = e.querySelector("#scalar-bits-panel"), D = e.querySelector("#subplot-panel"), q = e.querySelector("#subplot-chips"), L = e.querySelector("#empty-plot-msg");
    function E() {
      return [
        parseFloat(b.value),
        parseFloat(S.value)
      ];
    }
    function I() {
      const [$, A] = E();
      return `${$.toFixed(1)},${A.toFixed(1)}`;
    }
    function B($, A) {
      const j = Math.min(xn, $), H = Math.max(Sn, A);
      [
        b,
        S
      ].forEach((we) => {
        we.min = String(j), we.max = String(H);
      });
      const Q = Math.max(j, Math.min(H - Ae, $)), Z = Math.max(Q + Ae, Math.min(H, A));
      b.value = String(Q), S.value = String(Z), _.value = Q.toFixed(1), h.value = Z.toFixed(1), ne();
    }
    function ne() {
      const $ = parseFloat(b.min) || xn, A = parseFloat(b.max) || Sn, j = parseFloat(b.value), H = parseFloat(S.value), Q = A - $, Z = (j - $) / Q * 100, we = (H - j) / Q * 100;
      m.style.left = `${Z}%`, m.style.width = `${we}%`;
    }
    function ee() {
      const $ = c.querySelectorAll(".enc-row");
      if ($.length === 0) return null;
      let A = 1 / 0, j = -1 / 0;
      return $.forEach((H) => {
        const Q = parseFloat(H.querySelector(".enc-offset").value), Z = parseFloat(H.querySelector(".enc-range").value);
        A = Math.min(A, Q), j = Math.max(j, Q + Z);
      }), {
        minEncLo: A,
        maxEncHi: j
      };
    }
    function fe() {
      const [$, A] = E();
      c.querySelectorAll(".enc-row").forEach((j) => {
        Ud(j, $, A);
      });
    }
    function re() {
      try {
        return v.value.split(",").map(($) => parseFloat($.trim())).filter(($) => !isNaN($));
      } catch {
        return [];
      }
    }
    function R($) {
      if (v.value = $.join(","), o.refreshBitsPanelRefControls(), J) {
        const A = re(), j = ue.map((H) => Je[H % Je.length]);
        o.refreshBitsPanelRefs(J, A, j);
      }
    }
    function M($) {
      T.textContent = $, T.style.display = "block";
    }
    function K() {
      T.style.display = "none";
    }
    const Y = /* @__PURE__ */ new Set([
      "bins-only"
    ]);
    let U = null, J = null, ce = null, Se = null, be = NaN;
    const se = Ls([]);
    let he = {}, Pe = i.value, ue = [], De = 0;
    function Gt($) {
      return Je[(ue[$] ?? $) % Je.length];
    }
    function rt($) {
      const A = re();
      A.length >= ta && ue.shift(), ue.push(De++);
      const j = [
        ...A,
        $
      ].slice(-ta);
      R(j);
    }
    function Lt($) {
      ue.splice($, 1);
      const A = re().filter((j, H) => H !== $);
      R(A);
    }
    function Mt($) {
      $.replaceChildren();
      const A = re();
      if (A.forEach((j, H) => {
        const Q = Gt(H), Z = document.createElement("div");
        Z.className = "ref-point-chip", Z.style.borderColor = Q, Z.style.cursor = "pointer", Z.dataset.tooltip = "Edit reference value", Z.onclick = (xe) => {
          xe.stopPropagation(), y.style.display === "none" && is(Z, H);
        };
        const we = document.createElement("span");
        we.className = "ref-point-swatch", we.style.background = Q;
        const Ee = document.createElement("span");
        Ee.className = "ref-point-chip-label", Ee.textContent = String(j);
        const de = document.createElement("button");
        de.className = "ref-point-chip-remove", de.textContent = "\xD7", de.dataset.tooltip = "Remove", de.onclick = (xe) => {
          xe.stopPropagation(), Lt(H), je();
        }, Z.append(we, Ee, de), $.appendChild(Z);
      }), A.length < ta) {
        const j = document.createElement("button");
        j.className = "chip-toggle-btn", j.textContent = "+ Add Value", j.onclick = (H) => {
          H.stopPropagation(), y.style.display === "none" ? is(j) : Xr();
        }, $.appendChild(j);
      }
    }
    const at = Ls([
      ...Is
    ]);
    function wt() {
      const $ = new Map(se.value.map((A) => [
        A.type,
        A
      ]));
      se.value = at.value.filter((A) => $.has(A)).map((A) => $.get(A));
    }
    if (se.subscribe(() => fn()), at.subscribe(() => wt()), !n.plotControls) {
      const $ = () => _l(se.value.map((A) => A.type));
      se.subscribe($), $();
    }
    let Kt = null, Br = false;
    function Qa($) {
      const [A, j] = E(), H = (j - A) / 1e3;
      W.min = String(A), W.max = String(j), W.step = String(H);
      const Q = parseFloat(W.value);
      (isNaN(Q) || Q < A || Q > j) && (W.value = String((A + j) / 2)), ie.textContent = parseFloat(W.value).toFixed(3);
    }
    function zr() {
      const $ = c.querySelectorAll(".enc-row");
      return Array.from($).map((A) => dt(parseInt(A.dataset.colorIdx ?? "0", 10)));
    }
    function un() {
      return {
        refPoints: re(),
        refColors: ue.map(($) => Je[$ % Je.length])
      };
    }
    function Vr() {
      const $ = parseFloat(W.value);
      ie.textContent = $.toFixed(3), pn($), be = $, Se === null && (Se = requestAnimationFrame(() => {
        Se = null;
        const A = be;
        if (J && (U || !r)) {
          U == null ? void 0 : U.updateScalar(A);
          const { refPoints: j, refColors: H } = un();
          o.updateBitsPanelScalar(J, A, j, H), En(J, A, c);
        }
      }));
    }
    let st = 0, kt = 1, Ye = 0, pt = 1, At = false;
    function Ft() {
      const $ = J !== null, A = se.value.length > 0;
      return !$ && !A ? 1 : $ && !A ? 2 : !$ && A ? 3 : 4;
    }
    function es() {
      if (!a) return;
      const $ = z.clientWidth;
      Ye = 0, pt = $, oe.style.width = "0px", X.style.flex = "none", X.style.width = `${$}px`, te.style.width = "0px", pn(parseFloat(W.value));
    }
    function Yt() {
      if (!a) return;
      if (!r) {
        es();
        return;
      }
      const A = e.querySelector("#plot-container").getBoundingClientRect(), j = z.getBoundingClientRect(), H = A.left - j.left, Q = A.right - j.left;
      Ye = H, pt = Q, oe.style.width = `${H}px`, X.style.flex = "none", X.style.width = `${Q - H}px`, te.style.width = `${z.clientWidth - Q}px`, pn(parseFloat(W.value));
    }
    function qt() {
      if (!a || z.style.display === "none") return;
      if (!r || !U) {
        es();
        return;
      }
      const $ = U.convertToPixel(st), A = U.convertToPixel(kt);
      if ($ == null || A == null) return;
      const j = e.querySelector("#plot-container"), Q = (j.firstElementChild ?? j).getBoundingClientRect(), Z = z.getBoundingClientRect(), we = Q.left - Z.left;
      Ye = $ + we, pt = A + we, !(pt <= Ye) && (oe.style.width = `${Ye - Ts - ea}px`, X.style.flex = "none", X.style.width = `${pt - Ye + 3 * ea}px`, te.style.width = `${z.clientWidth - pt - Ts - ea - 2}px`, pn(parseFloat(W.value)));
    }
    function pn($) {
      const A = kt - st;
      if (A <= 0) return;
      const j = Math.max(0, Math.min(1, ($ - st) / A));
      ie.style.left = `${Ye + j * (pt - Ye)}px`;
    }
    function Xt($, A, j) {
      var _a3, _b2;
      const [H, Q] = Da(A), Z = re(), we = (j == null ? void 0 : j.folded) ?? false, Ee = (j == null ? void 0 : j.gap) ?? 0, de = (j == null ? void 0 : j.showText) ?? false, xe = ((_b2 = (_a3 = Zt(c)) == null ? void 0 : _a3[0]) == null ? void 0 : _b2.w) ?? 1;
      switch ($) {
        case "bins": {
          const Ne = c.querySelectorAll(".enc-row"), Xe = Array.from(Ne).map((ge, Ct) => (ce == null ? void 0 : ce[Ct]) ?? dt(parseInt(ge.dataset.colorIdx ?? "0", 10)));
          return {
            folded: we,
            w: xe,
            lo: H,
            hi: Q,
            colors: Xe
          };
        }
        case "per-bin":
          return ce ? {
            colors: ce
          } : {};
        case "similarity":
          return {
            refPoints: Z,
            colors: ue.map((Ne) => Je[Ne % Je.length])
          };
        case "bits-by-data":
          return {
            gap: Ee
          };
        case "projected-similarity":
          return {
            gap: Ee,
            showText: de
          };
        default:
          return {};
      }
    }
    function mn() {
      const $ = Ft();
      L && (L.textContent = $ === 1 ? "Add encoders above, then enable plots to the left" : $ === 2 ? "No plots enabled, click one of the highlighted plot types to the left" : "Add encoders to see data", L.style.display = $ !== 4 ? "flex" : "none"), l == null ? void 0 : l.classList.toggle("attention-pulse", $ === 1 || $ === 3);
    }
    function fn() {
      if (!D) return;
      D.style.display = "flex";
      const $ = !!n.compactPlotControls;
      D.classList.toggle("subplot-panel-compact", $);
      const A = Ft() === 2;
      q.innerHTML = "", at.value.forEach((j, H) => {
        var _a3;
        const Q = se.value.some((ge) => ge.type === j), Z = document.createElement("div"), we = !Q && A;
        Z.className = "subplot-chip" + (Q ? "" : " chip-disabled") + (we ? " attention-pulse" : "") + ($ ? " subplot-chip-compact" : ""), Z.draggable = true, Z.setAttribute("role", "button"), Z.tabIndex = 0, Z.setAttribute("aria-pressed", Q ? "true" : "false"), Z.setAttribute("aria-label", `Toggle ${vn[j] ?? j}`), Z.dataset.tooltip = `${vn[j] ?? j} \u2014 ${Q ? "enabled" : "disabled"} \xB7 click to toggle, drag to reorder`;
        const Ee = Qr[j];
        if (Ee && (Z.style.background = Q ? Ee.bg : Ee.mutedBg), !$) {
          const ge = document.createElement("div");
          ge.className = "chip-drag-handle", ge.textContent = "\u283F", Z.appendChild(ge);
        }
        const de = document.createElement("div");
        if (de.className = "chip-body", $ || Z.appendChild(de), Z.addEventListener("dragstart", (ge) => {
          Kt = H, Br = true, Z.style.opacity = "0.45", ge.dataTransfer.effectAllowed = "move", ge.dataTransfer.setData("text/plain", String(H));
        }), Z.addEventListener("dragend", () => {
          Z.style.opacity = "1", q.querySelectorAll(".subplot-chip").forEach((ge) => ge.classList.remove("drag-over")), setTimeout(() => {
            Br = false;
          }, 0);
        }), Z.addEventListener("dragover", (ge) => {
          ge.preventDefault(), ge.dataTransfer.dropEffect = "move", Z.classList.add("drag-over");
        }), Z.addEventListener("dragleave", (ge) => {
          Z.contains(ge.relatedTarget) || Z.classList.remove("drag-over");
        }), Z.addEventListener("drop", (ge) => {
          if (ge.preventDefault(), Z.classList.remove("drag-over"), Kt === null || Kt === H) return;
          const Ct = [
            ...at.value
          ], [Pc] = Ct.splice(Kt, 1);
          Ct.splice(H, 0, Pc), at.value = Ct, Kt = null, Pt();
        }), Z.addEventListener("click", () => {
          Br || ts(j, Q ? "off" : "on");
        }), Z.addEventListener("keydown", (ge) => {
          (ge.key === "Enter" || ge.key === " ") && (ge.preventDefault(), ts(j, Q ? "off" : "on"));
        }), $) {
          const ge = document.createElement("span");
          ge.className = "subplot-chip-icon", ge.textContent = vl[j] ?? ((_a3 = vn[j]) == null ? void 0 : _a3[0]) ?? "?", Z.appendChild(ge), q.appendChild(Z);
          return;
        }
        const xe = document.createElement("div");
        xe.className = "chip-top-row";
        const Ne = document.createElement("span");
        Ne.className = "subplot-chip-label";
        const Xe = document.createElement("span");
        if (Xe.className = "subplot-chip-icon", Xe.textContent = "", Ne.append(Xe, " " + (vn[j] ?? j)), xe.append(Ne, _t(`subplot.${j}`)), de.appendChild(xe), !Q) {
          q.appendChild(Z);
          return;
        }
        q.appendChild(Z);
      });
    }
    function ts($, A) {
      A === "on" ? gc($) : (se.update((j) => j.filter((H) => H.type !== $)), mn(), Pt());
    }
    function Wr() {
      if (se.value.length > 0) return;
      const $ = {
        id: `bins-${Date.now()}`,
        type: "bins",
        heightFrac: 0.33,
        xAxis: "shared",
        params: J ? Xt("bins", J) : {}
      };
      se.update((A) => [
        ...A,
        $
      ]), wt();
    }
    function gc($) {
      const A = {
        id: `${$}-${Date.now()}`,
        type: $,
        heightFrac: 0.33,
        xAxis: "shared",
        params: J ? Xt($, J) : {}
      };
      se.update((j) => [
        ...j,
        A
      ]), wt(), mn(), Pt();
    }
    function Pt() {
      if (mn(), Ft() !== 4) {
        je();
        return;
      }
      if (!J || !U) return;
      const $ = J;
      if (se.update((A) => A.map((j) => {
        var _a3;
        return {
          ...j,
          params: Xt(j.type, $, j.params),
          color: (_a3 = Qr[j.type]) == null ? void 0 : _a3.titleColor
        };
      })), U.compose(se.value, $, he), Y.has(i.value)) {
        qt();
        const A = parseFloat(W.value);
        U.updateScalar(A);
        const { refPoints: j, refColors: H } = un();
        o.buildBitsPanelStructure($, V, j, H, zr(), Mt), o.updateBitsPanelScalar($, A, j, H), En($, A, c);
      }
    }
    function _c($, A) {
      const j = se.value[$];
      if (!j) return;
      const H = j.params ?? (j.params = {});
      if (A === "fold") {
        const Q = !H.folded;
        H.folded = Q, (async () => (U && await U.animateBinsFold(Q), Pt()))();
        return;
      }
      A === "boundaries" ? H.gap = H.gap === 1 ? 0 : 1 : A === "counts" && (H.showText = !H.showText), Pt();
    }
    function Ur() {
      var _a3;
      if ((t == null ? void 0 : t.persistState) !== false) try {
        const $ = Zt(c), A = ((_a3 = e.querySelector("#preset-select")) == null ? void 0 : _a3.value) ?? "", j = {
          encoders: $ ?? [],
          viewBounds: I(),
          refPoints: v.value,
          view: i.value,
          folded: F.checked,
          scalarCursor: W.value,
          presetIdx: A
        };
        if ((t == null ? void 0 : t.setup) || (t == null ? void 0 : t.ui)) {
          const H = {
            encoders: j.encoders,
            viewBounds: j.viewBounds,
            refPoints: j.refPoints,
            view: j.view,
            folded: j.folded,
            scalarCursor: j.scalarCursor,
            subplots: se.value.map((Q) => Q.type)
          };
          window.location.hash = encodeURIComponent(JSON.stringify({
            setup: H,
            ui: t.ui
          }));
        } else window.location.hash = encodeURIComponent(JSON.stringify(j));
      } catch {
      }
    }
    function vc() {
      try {
        if (!window.location.hash) return;
        const $ = JSON.parse(decodeURIComponent(window.location.hash.slice(1)));
        if ($.viewBounds) {
          const [A, j] = $.viewBounds.split(",").map(parseFloat);
          Number.isFinite(A) && Number.isFinite(j) && B(A, j);
        }
        if (Array.isArray($.encoders) && $.encoders.length > 0 && (zt(c, $.encoders, E()), mt()), $.refPoints) {
          const A = $.refPoints.split(",").map(Number).filter((j) => !isNaN(j));
          ue = A.map((j, H) => H), De = A.length, R(A);
        }
        $.view && (i.value = $.view), $.folded !== void 0 && (F.checked = $.folded), $.scalarCursor && (W.value = $.scalarCursor, ie.textContent = parseFloat($.scalarCursor).toFixed(3));
      } catch {
      }
    }
    function bc() {
      const $ = Zt(c);
      if (!$) return c.querySelectorAll(".enc-row").length > 0 ? M("Invalid encoder configuration") : K(), null;
      K();
      try {
        return Rl({
          encoders: $,
          viewBounds: E()
        });
      } catch (A) {
        return M(`WASM error: ${A instanceof Error ? A.message : String(A)}`), null;
      }
    }
    function xc($, A, j) {
      var _a3;
      P.checked, N.checked, F == null ? void 0 : F.checked;
      const H = Zt(c);
      (_a3 = H == null ? void 0 : H[0]) == null ? void 0 : _a3.w;
      const { specs: Q, overrides: Z } = Bi(A, $, {
        xWindow: void 0
      });
      he = Z;
      const we = A !== Pe;
      Pe = A, we && (se.value = Q, wt()), se.update((de) => de.map((xe) => ({
        ...xe,
        params: Xt(xe.type, $, xe.params)
      })));
      const Ee = Y.has(A);
      z.style.display = Ee ? "flex" : "none", Ee ? V.style.display = "flex" : V.style.display = "none", se.update((de) => de.map((xe) => {
        var _a4;
        return {
          ...xe,
          color: (_a4 = Qr[xe.type]) == null ? void 0 : _a4.titleColor
        };
      })), U == null ? void 0 : U.compose(se.value, $, he), C && (C.textContent = `Bits: ${$.n_bits}  |  Regions: ${$.n_regions}  |  n: [${H == null ? void 0 : H.map((de) => de.n).join(", ")}]  |  w: [${H == null ? void 0 : H.map((de) => de.w).join(", ")}]`);
    }
    async function je() {
      O && (O.style.display = "flex"), await new Promise((j) => requestAnimationFrame(() => j()));
      const $ = bc();
      O && (O.style.display = "none"), J = $;
      const A = se.value.length > 0;
      if (r && !U && (U = new Xd(e.querySelector("#plot-container")), U.getChart().on("finished", () => {
        if (At || !Y.has(i.value)) return;
        const j = Ft();
        (j === 3 || j === 4) && qt();
      }), U.onSubplotControlToggle = _c, U.compact = (t == null ? void 0 : t.compact) === true, U.compact || (U.subplotHelpIcon = (j) => _t(`subplot.${j}`))), a && Y.has(i.value) && (z.style.display = "flex"), !$ && !A) U && (U.getChart().clear(), U.hideCursor()), W.min = "0", W.max = "1", st = 0, kt = 1, fn(), o.showBitsPanelPlaceholder(V), Yt();
      else if ($ && !A) {
        U && (U.getChart().clear(), U.hideCursor()), Qa(), st = parseFloat(W.min), kt = parseFloat(W.max), fn();
        const { refPoints: j, refColors: H } = un();
        o.buildBitsPanelStructure($, V, j, H, zr(), Mt);
        const Q = parseFloat(W.value);
        o.updateBitsPanelScalar($, Q, j, H), En($, Q, c), Yt();
      } else if (!$ && A) U && (U.getChart().clear(), U.hideCursor()), W.min = String(bn[0]), W.max = String(bn[1]), st = bn[0], kt = bn[1], fn(), o.showBitsPanelPlaceholder(V), Yt();
      else {
        if (xc($, i.value, re()), Y.has(i.value)) {
          Qa(), st = parseFloat(W.min), kt = parseFloat(W.max), qt();
          const { refPoints: j, refColors: H } = un();
          o.buildBitsPanelStructure($, V, j, H, zr(), Mt);
          const Q = parseFloat(W.value);
          U == null ? void 0 : U.updateScalar(Q), o.updateBitsPanelScalar($, Q, j, H), En($, Q, c);
        }
        Ur();
      }
      Pe = i.value, mn();
    }
    function Hr($) {
      const A = e.querySelector("#preset-select");
      if (A) {
        const Q = ht.indexOf($);
        A.value = Q >= 0 ? String(Q) : "";
      }
      if ($.empty) return zt(c, []), mt(), se.value = [], je();
      const [j, H] = $.viewBounds.split(",").map(parseFloat);
      return B(j, H), zt(c, $.encoders, E()), mt(), i.value = $.view, Wr(), je();
    }
    function ns($) {
      if ($.presetIdx != null && ht[$.presetIdx]) return Hr(ht[$.presetIdx]);
      let A = null;
      if (Array.isArray($.viewBounds)) A = $.viewBounds;
      else if (typeof $.viewBounds == "string") {
        const [j, H] = $.viewBounds.split(",").map(parseFloat);
        Number.isFinite(j) && Number.isFinite(H) && (A = [
          j,
          H
        ]);
      }
      if (A && B(A[0], A[1]), ce = $.colors && $.colors.length ? $.colors : null, zt(c, $.encoders ?? [], E()), mt(), $.refPoints != null) {
        const j = (Array.isArray($.refPoints) ? $.refPoints : String($.refPoints).split(",").map(Number)).filter((H) => !isNaN(H));
        ue = j.map((H, Q) => Q), De = j.length, R(j);
      }
      if (i.value = $.view ?? "bins-only", F.checked = !!$.folded, $.scalarCursor != null && (W.value = String($.scalarCursor), ie.textContent = parseFloat(String($.scalarCursor)).toFixed(3)), $.subplots && $.subplots.length > 0) {
        const j = $.subplots;
        at.value = [
          ...j,
          ...Is.filter((H) => !j.includes(H))
        ], se.value = j.map((H, Q) => ({
          id: `${H}-${Date.now()}-${Q}`,
          type: H,
          heightFrac: 0.33,
          xAxis: "shared",
          params: J ? Xt(H, J) : {}
        })), wt();
      } else Wr();
      return Pe = i.value, je();
    }
    function rs($, A) {
      let j;
      return ((...H) => {
        clearTimeout(j), j = setTimeout(() => $(...H), A);
      });
    }
    const Sc = rs(je, wl);
    c.addEventListener("input", () => {
      Sc();
    });
    function mt() {
      l.disabled = c.querySelectorAll(".enc-row").length >= $s;
    }
    c.addEventListener("click", ($) => {
      const A = $.target.closest(".enc-remove");
      if (!A) return;
      const j = A.closest(".enc-row");
      j && (j.remove(), $a(c), mt(), je());
    }), l.addEventListener("click", () => {
      const $ = c.querySelectorAll(".enc-row");
      if ($.length >= $s) return;
      const A = $.length === 0, j = $[$.length - 1], H = (() => {
        if (!j) return {};
        const Q = j.dataset.type ?? "interval-fixed", Z = parseFloat(j.querySelector(".enc-offset").value), we = parseFloat(j.querySelector(".enc-range").value), Ee = j.querySelector(".enc-w"), de = {
          type: Q,
          n: parseInt(j.querySelector(".enc-n").value, 10),
          w: Ee ? parseInt(Ee.value, 10) : 1,
          lower_bound: Z,
          upper_bound: Z + we
        };
        if (Q === "periodic-cell") {
          const xe = j.querySelector(".enc-min-period"), Ne = j.querySelector(".enc-max-period"), Xe = j.querySelector(".enc-l-frac");
          xe && (de.min_period = parseFloat(xe.value)), Ne && (de.max_period = parseFloat(Ne.value)), Xe && (de.l_frac = parseFloat(Xe.value));
        }
        if (Q === "periodic-random-cell") {
          const xe = j.querySelector(".enc-period-rand"), Ne = j.querySelector(".enc-l-frac-rand"), Xe = j.querySelector(".enc-rand-origin"), ge = j.querySelector(".enc-rand-period"), Ct = j.querySelector(".enc-rand-l-frac");
          xe && (de.const_period = parseFloat(xe.value), de.max_period = parseFloat(xe.value)), Ne && (de.const_l_frac = parseFloat(Ne.value), de.max_l_frac = parseFloat(Ne.value)), de.randomize_origins = (Xe == null ? void 0 : Xe.checked) ?? false, de.randomize_periods = (ge == null ? void 0 : ge.checked) ?? false, de.randomize_l_frac = (Ct == null ? void 0 : Ct.checked) ?? false, j.dataset.seed && (de.seed = parseInt(j.dataset.seed, 10));
        }
        if (Q === "interval-random-cell") {
          const xe = j.querySelector(".enc-l-rand"), Ne = j.querySelector(".enc-rand-l");
          xe && (de.const_l = parseFloat(xe.value), de.max_l = parseFloat(xe.value)), de.randomize_l = (Ne == null ? void 0 : Ne.checked) ?? false, j.dataset.seed && (de.seed = parseInt(j.dataset.seed, 10));
        }
        return de;
      })();
      c.appendChild(Ai(H, E())), $a(c), mt(), A && Wr(), je();
    }), u.addEventListener("click", () => {
      zt(c, []), B(wa[0], wa[1]);
      const $ = e.querySelector("#preset-select");
      $ && ($.value = "0"), mt(), je();
    });
    const as = rs(() => {
      fe(), je();
    }, xl);
    b.addEventListener("input", () => {
      let $ = parseFloat(b.value);
      const j = parseFloat(S.value) - Ae, H = ee(), Q = H ? H.minEncLo : 1 / 0, Z = Math.min(j, Q);
      $ > Z && ($ = Z, b.value = String($)), _.value = $.toFixed(1), ne(), as();
    }), S.addEventListener("input", () => {
      let $ = parseFloat(S.value);
      const j = parseFloat(b.value) + Ae, H = ee(), Q = H ? H.maxEncHi : -1 / 0, Z = Math.max(j, Q);
      $ < Z && ($ = Z, S.value = String($)), h.value = $.toFixed(1), ne(), as();
    });
    function ss($, A) {
      const j = () => {
        const H = parseFloat($.value.trim());
        if (!isFinite(H)) {
          $.classList.add("enc-val-invalid"), setTimeout(() => $.classList.remove("enc-val-invalid"), 600), $.value = parseFloat(A.value).toFixed(1);
          return;
        }
        const Q = parseFloat(A.step) || 0.1;
        let Z = Math.max(xn, Math.min(Sn, H));
        Z = Math.round(Z / Q) * Q, Z = Math.max(xn, Math.min(Sn, Z)), A.value = String(Z), A.dispatchEvent(new Event("input", {
          bubbles: true
        })), $.value = parseFloat(A.value).toFixed(1), $.classList.remove("enc-val-invalid");
      };
      $.addEventListener("change", j), $.addEventListener("blur", j), $.addEventListener("keydown", (H) => {
        H.key === "Enter" && (H.preventDefault(), j(), $.blur());
      });
    }
    ss(_, b), ss(h, S), ne();
    let Gr = null, Et = null, Bt = null, ft = null;
    function wc() {
      Et = {
        value: v.value,
        colorIdxs: [
          ...ue
        ],
        nextIdx: De
      };
    }
    function Kr() {
      Et && (v.value = Et.value, ue = [
        ...Et.colorIdxs
      ], De = Et.nextIdx);
    }
    function Yr() {
      if (se.value.some(($) => $.type === "similarity")) Pt();
      else if (J) {
        const $ = ue.map((A) => Je[A % Je.length]);
        o.refreshBitsPanelRefControls(), o.refreshBitsPanelRefs(J, re(), $);
      }
    }
    function os($) {
      if (!isNaN($)) {
        if (Kr(), ft !== null) {
          const A = re();
          A[ft] = $, v.value = A.join(",");
        } else rt($);
        Yr();
      }
    }
    function is($, A = null) {
      Gr = $, ft = A, wc();
      const [j, H] = E(), Q = parseFloat(((H - j) / 500).toPrecision(2));
      let Z = A !== null ? re()[A] : (j + H) / 2;
      isFinite(Z) || (Z = (j + H) / 2), Z = Math.max(j, Math.min(H, parseFloat(Z.toFixed(4)))), g.min = String(j), g.max = String(H), g.step = String(Q), g.value = String(Z), x.textContent = j.toFixed(3), w.textContent = H.toFixed(3), d.textContent = Z.toFixed(4), f.textContent = A !== null ? "Ok" : "Add";
      const we = $.getBoundingClientRect(), Ee = Math.min(we.right + 8, window.innerWidth - 215), de = Math.max(0, Math.min(we.top, window.innerHeight - 180));
      y.style.left = `${Ee}px`, y.style.top = `${de}px`, y.style.display = "block", os(Z), setTimeout(() => document.addEventListener("click", ds), 0);
    }
    function cs() {
      Bt !== null && (cancelAnimationFrame(Bt), Bt = null), y.style.display = "none", Gr = null, document.removeEventListener("click", ds);
    }
    function Xr() {
      const $ = ft;
      Kr(), $ !== null && Lt($), Et = null, ft = null, cs(), Yr(), $ !== null && Ur();
    }
    function ls() {
      const $ = parseFloat(g.value), A = ft;
      if (Kr(), A !== null) {
        const j = re();
        isNaN($) || (j[A] = $), v.value = j.join(",");
      } else isNaN($) || rt($);
      Et = null, ft = null, cs(), Yr(), Ur();
    }
    function ds($) {
      !y.contains($.target) && $.target !== Gr && (ft !== null ? ls() : Xr());
    }
    g.addEventListener("input", () => {
      const $ = parseFloat(g.value);
      d.textContent = $.toFixed(4), Bt === null && (Bt = requestAnimationFrame(() => {
        Bt = null, os(parseFloat(g.value));
      }));
    }), f.addEventListener("click", () => ls()), p.addEventListener("click", () => Xr()), i.addEventListener("change", je), W == null ? void 0 : W.addEventListener("input", Vr), W == null ? void 0 : W.addEventListener("pointerdown", () => {
      At = true;
    }), W == null ? void 0 : W.addEventListener("pointerup", () => {
      At = false, Y.has(i.value) && qt();
    }), ie == null ? void 0 : ie.addEventListener("pointerdown", ($) => {
      $.preventDefault(), ie.setPointerCapture($.pointerId), At = true;
    }), ie == null ? void 0 : ie.addEventListener("pointermove", ($) => {
      if (!ie.hasPointerCapture($.pointerId)) return;
      const A = z.getBoundingClientRect(), j = pt - Ye;
      if (j <= 0) return;
      const H = Math.max(0, Math.min(1, ($.clientX - A.left - Ye) / j)), Q = st + H * (kt - st);
      W.value = String(Q), Vr();
    });
    const us = ($) => {
      ie.releasePointerCapture($.pointerId), At = false, Y.has(i.value) && qt();
    };
    ie == null ? void 0 : ie.addEventListener("pointerup", us), ie == null ? void 0 : ie.addEventListener("pointercancel", us);
    const Jt = e.querySelector("#preset-select");
    if (Jt) {
      ht.forEach(($, A) => {
        const j = document.createElement("option");
        j.value = String(A), j.textContent = $.label, Jt.appendChild(j);
      });
      try {
        if (window.location.hash) {
          const $ = JSON.parse(decodeURIComponent(window.location.hash.slice(1)));
          $.presetIdx !== void 0 && (Jt.value = $.presetIdx);
        }
      } catch {
      }
      Jt.addEventListener("change", () => {
        const $ = parseInt(Jt.value, 10);
        !isNaN($) && ht[$] && Hr(ht[$]);
      });
    }
    function kc() {
      if (!U) return;
      const $ = U.getChart();
      $.getZr().on("click", (A) => {
        const j = $.convertFromPixel({
          xAxisIndex: 0
        }, A.offsetX);
        if (j == null || !isFinite(j)) return;
        const H = parseFloat(j.toFixed(3));
        rt(H), je();
      });
    }
    let hn;
    if (t == null ? void 0 : t.setup) hn = ns(t.setup);
    else if (window.location.hash) zt(c, [
      {
        type: "interval-fixed",
        n: 13,
        w: 1,
        lower_bound: 0,
        upper_bound: 1
      }
    ], E()), mt(), vc(), Pe = "", hn = je();
    else {
      const $ = (t == null ? void 0 : t.initialPresetIdx) ?? Ns;
      hn = Hr(ht[$] ?? ht[Ns]);
    }
    let yn = null;
    window.addEventListener("resize", () => {
      if (U == null ? void 0 : U.getChart().resize(), !At && Y.has(i.value)) {
        const $ = Ft();
        if ($ === 1 || $ === 2) Yt();
        else if (qt(), $ === 4) {
          const A = parseFloat(W.value);
          U && isFinite(A) && U.updateScalar(A);
        }
      }
    });
    const ps = e.querySelector("#plot-container");
    if (ps && typeof ResizeObserver < "u") {
      let $ = false, A = 0, j = 0;
      yn = new ResizeObserver((H) => {
        var _a3;
        const Q = (_a3 = H[0]) == null ? void 0 : _a3.contentRect;
        if (!Q) return;
        const Z = Math.round(Q.width), we = Math.round(Q.height);
        Z === A && we === j || (A = Z, j = we, !$ && ($ = true, requestAnimationFrame(() => {
          $ = false, U && (U.getChart().resize(), Ft() === 4 ? Pt() : Y.has(i.value) && Yt());
        })));
      }), yn.observe(ps);
    }
    return hn.then(() => {
      kc();
    }), window.__dccDebugCapture = () => {
      var _a3, _b2, _c3;
      const $ = e.querySelector("#plot-container"), A = se.value.map((H, Q) => {
        const Z = $ == null ? void 0 : $.querySelector("canvas");
        return {
          gi: Q,
          type: H.type,
          hasCanvas: !!Z,
          params: H.params
        };
      }), j = {
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        encoders: Zt(c),
        viewBounds: E(),
        currentSpecs: A,
        scalarCursor: parseFloat(W.value),
        refPoints: re(),
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
          sub_encoders: J.sub_encoders.map((H) => {
            var _a4, _b3;
            return {
              type: H.type,
              n_bits: H.n_bits,
              lower_bound: H.lower_bound,
              upper_bound: H.upper_bound,
              view_lower_bound: H.view_lower_bound,
              view_upper_bound: H.view_upper_bound,
              n_primary_bins: (_a4 = H.primary_bins) == null ? void 0 : _a4.length,
              n_bins_total: (_b3 = H.bins) == null ? void 0 : _b3.length
            };
          })
        } : null
      };
      console.log("[__dccDebugCapture]", j);
      try {
        const H = JSON.stringify(j, null, 2);
        (_c3 = navigator.clipboard) == null ? void 0 : _c3.writeText(H), console.log("[__dccDebugCapture] copied JSON to clipboard");
      } catch {
      }
      return j;
    }, {
      destroy() {
        yn == null ? void 0 : yn.disconnect(), yn = null, bl(), e.innerHTML = "", delete window.__dccDebugCapture;
      },
      setScalarCursor($) {
        Number.isFinite($) && (W.value = String($), Vr());
      },
      setConfig($, A) {
        ns($);
      }
    };
  }
  const Zd = Jd, Qd = '*{box-sizing:border-box;margin:0;padding:0}@keyframes attention-pulse{0%,to{outline:3px solid transparent;outline-offset:0px}50%{outline:6px solid rgb(238 130 49 / .81);outline-offset:0px}}.attention-pulse{animation:attention-pulse 1.1s ease-in-out infinite}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;background:#888;color:#111;padding:4px 8px 8px;display:flex;flex-direction:column;min-height:100vh;overflow-y:auto;overflow-x:hidden}h1{font-size:1.1rem;font-weight:600;color:#111;flex-shrink:0}#control-panels{display:flex;flex-direction:row;gap:2px;margin:2px 0 0;flex-shrink:0;align-items:stretch}.controls{display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start;background:#ccc;border:2px solid #333333;border-radius:8px;padding:10px 14px;flex-shrink:0;box-shadow:2px 4px 8px #0006,inset 0 1px #ffffff8c}.controls.encoder-config{flex:1;flex-direction:row;gap:8px;align-items:stretch;padding:10px 6px}.enc-config-left{flex:1;min-width:0;display:flex;flex-direction:column;gap:12px}.enc-config-right{flex:0 0 250px;display:flex;flex-direction:column;gap:8px;align-items:stretch}.enc-group{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px 16px;align-items:flex-start}.panel-title{display:flex;flex-wrap:wrap;justify-content:center;border:solid 1px #333333;border-radius:8px;padding:2px 6px;background:#ccc;text-align:center;font-size:1.2rem;font-weight:600;color:#555;pointer-events:none}.controls.view-config{flex:.1;flex-direction:column;gap:8px}.config-row-start{display:flex;gap:16px;align-items:flex-start}.config-row-end{display:flex;flex-direction:row;gap:8px;align-items:flex-start;justify-content:flex-end}.enc-list-row{display:flex;flex-wrap:wrap;gap:4px;align-items:center}.control-group{display:flex;flex-direction:column;gap:4px}label{font-size:.72rem;color:#111;text-transform:uppercase;letter-spacing:.05em;align-self:center}select,input[type=text],input[type=number]{background:#ccc;border:2px solid #333333;border-radius:4px;color:#111;padding:4px 7px;font-size:.85rem}select{box-shadow:1px 2px 4px #0000004d,inset 0 1px #ffffff80;cursor:pointer}input[type=text]{width:140px}input[type=number]{width:54px;-moz-appearance:textfield}input[type=number]::-webkit-outer-spin-button,input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=range]{width:100px;accent-color:#333333}input[type=range]:disabled{opacity:.3;cursor:not-allowed}.range-row{display:flex;align-items:center;gap:6px}.range-val{font-size:.85rem;min-width:1.2em;color:#111}.w-slider-col{display:flex;flex-direction:column;gap:1px}#w-tick-row{display:flex;justify-content:space-between;width:100px;font-size:.6rem;color:#444;line-height:1}.checkbox-row{display:flex;align-items:center;gap:5px;font-size:.82rem}#encoder-list{display:flex;flex-direction:row;flex-wrap:wrap;align-items:flex-start;gap:8px;flex:1;min-width:0}.enc-header-row{display:flex;align-items:center;gap:4px;justify-content:space-between;margin:-4px -6px 4px;padding:4px 8px;background:#00000040;border-radius:2px 2px 0 0;border-bottom:1px solid rgba(0,0,0,.3);user-select:none}.enc-type{box-sizing:border-box;grid-column:3 / -1;width:100%;font-size:.62rem;letter-spacing:.05em;background:#ccc;border:2px solid #333333;border-radius:4px;color:#111;padding:2px 6px;box-shadow:1px 2px 4px #0000004d,inset 0 1px #ffffff80;cursor:pointer}div.enc-header-row select.enc-type ::picker{background:#fff;border:2px solid #333;box-shadow:0 4px 12px #0000001a;padding:5px}select:not(:-internal-list-box)::picker .enc-type{color:-internal-auto-base(inherit,CanvasText)}.enc-row{display:flex;flex-direction:column;align-items:stretch;flex:0 0 304px;width:304px;box-sizing:border-box;background:#0f3460;border:2px solid #000000;border-radius:4px;padding:4px 6px;box-shadow:1px 2px 5px #00000080,inset 0 1px #ffffff2e}.enc-edit-btn{background:#ffffff2e;border:1px solid #000000;border-radius:3px;color:#fff;cursor:pointer;font-size:.75rem;padding:1px 5px;line-height:1.4;box-shadow:1px 1px 3px #0006,inset 0 1px #ffffff4d}.enc-edit-btn:hover{background:#fff6}.enc-edit-btn:active{box-shadow:inset 1px 1px 3px #00000073}.enc-type-label{flex:1;min-width:0;font-size:.62rem;letter-spacing:.05em;color:#fff;padding:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.enc-shorthand{display:block;color:#fff;font-size:.7rem;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;padding:2px 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.enc-mini-bits{display:flex;flex-wrap:nowrap;gap:2px;padding:3px 4px 4px;overflow:hidden}.enc-mini-bit{flex:1 1 0;min-width:0;height:14px;box-sizing:border-box;border-radius:2px;border:2px solid #000000}.enc-row .enc-body{display:none}.n-slider-col{display:flex;flex-direction:column;gap:1px}.enc-body{display:grid;grid-template-columns:64px 18px 120px 36px 24px;column-gap:6px;row-gap:2px;align-items:center}.enc-help-cell{grid-column:2;justify-self:center;align-self:center;margin:0}.enc-help-cell .info-icon,.enc-help-cell.info-icon{margin:0}.n-slider-row{display:contents}input[type=range].enc-n,input[type=range].enc-w,input[type=range].enc-offset,input[type=range].enc-range,input[type=range].enc-period,input[type=range].enc-period-rand,input[type=range].enc-l-frac,input[type=range].enc-l-frac-rand,input[type=range].enc-l-rand,input[type=range].enc-min-period,input[type=range].enc-max-period{grid-column:3;width:120px;accent-color:#ffffff}input.enc-n-val{grid-column:4;box-sizing:border-box;width:100%;min-width:0;font-size:.6rem;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff;text-align:center;background:#0000004d;border:1px solid rgba(255,255,255,.22);border-radius:3px;padding:0 1px;-moz-appearance:textfield;appearance:textfield}.enc-n-val:hover{border-color:#fff6}.enc-n-val:focus{outline:none;border-color:#4a90d9;background:#00000073}.enc-n-val.enc-val-invalid{border-color:#e15759}.enc-slider-label{grid-column:1;font-size:.6rem;color:#fff;text-transform:uppercase;text-align:right;white-space:normal;line-height:1.1}.n-tick-row{display:flex;justify-content:space-between;grid-column:3;width:120px;padding:0 0 0 4px;box-sizing:border-box;font-size:.58rem;color:#fff;line-height:1;margin-top:-5px;margin-bottom:1px}.enc-w-divider{border-top:1px solid #555555;margin:3px 0}.dual-range{display:flex;align-items:center;gap:6px}.dual-range-track{position:relative;width:380px;height:24px}.dual-range-track:before{content:"";position:absolute;left:0;right:0;top:50%;height:14px;transform:translateY(-50%);background:#ccc;border:2px solid #333333;border-radius:4px;box-shadow:1px 2px 4px #0000004d,inset 0 1px #ffffff80}.dual-range-track:after{content:"";position:absolute;left:6px;right:6px;top:50%;height:4px;transform:translateY(-50%);background:#888;border-radius:2px;pointer-events:none;z-index:1}.dual-range-fill{position:absolute;top:50%;height:4px;transform:translateY(-50%);background:#4a90d9;border-radius:2px;pointer-events:none;z-index:2}.dual-range-track input[type=range]{position:absolute;inset:0;width:100%;background:transparent;-webkit-appearance:none;appearance:none;pointer-events:none;z-index:3}.dual-range-track input[type=range]::-webkit-slider-runnable-track{background:transparent;border:none}.dual-range-track input[type=range]::-moz-range-track{background:transparent;border:none}.dual-range-track input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;pointer-events:auto;width:16px;height:16px;border-radius:50%;background:#fff;border:2px solid #333333;cursor:pointer;margin-top:0}.dual-range-track input[type=range]::-moz-range-thumb{pointer-events:auto;width:16px;height:16px;border-radius:50%;background:#fff;border:2px solid #333333;cursor:pointer}input.dual-range-val{box-sizing:border-box;width:46px;min-width:46px;font-size:.72rem;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:#111;text-align:center;background:#e8e8e8;border:1px solid #888888;border-radius:3px;padding:2px;font-variant-numeric:tabular-nums}input.dual-range-val:hover{border-color:#555}input.dual-range-val:focus{outline:none;border-color:#4a90d9;background:#fff}input.dual-range-val.enc-val-invalid{border-color:#e15759;background:#ffe8e8}.enc-remove{background:#ffffff2e;border:1px solid #000000;border-radius:3px;color:#fff;cursor:pointer;font-size:.75rem;padding:1px 5px;line-height:1.4;box-shadow:1px 1px 3px #0006,inset 0 1px #ffffff4d}.enc-remove:hover{border-color:#e15759;color:#e15759}.enc-remove:active{box-shadow:inset 1px 1px 3px #00000073}.enc-reshuffle{grid-column:3;justify-self:center;margin-top:4px}#enc-add,#enc-reset,.enc-reshuffle{background:#ccc;border:2px solid #333333;border-radius:4px;color:#111;cursor:pointer;font-size:.75rem;padding:2px 8px;box-shadow:1px 2px 4px #0000004d,inset 0 1px #ffffff8c}#enc-add:hover,#enc-reset:hover,.enc-reshuffle:hover{border-color:#000;color:#000}#enc-add:active,#enc-reset:active,.enc-reshuffle:active{box-shadow:inset 1px 2px 4px #00000059}#enc-add:disabled,#enc-reset:disabled,.enc-reshuffle:disabled{background:#aaa;border-color:#888;color:#666;cursor:not-allowed;box-shadow:none;opacity:.6}.enc-rand-icon{grid-column:5;justify-self:center;appearance:none;-webkit-appearance:none;box-sizing:border-box;width:24px;height:20px;margin:0;padding:0;border:1px solid rgba(255,255,255,.3);border-radius:3px;background-color:#00000040;background-image:repeating-linear-gradient(45deg,rgba(255,255,255,.1) 0,rgba(255,255,255,.1) 2px,transparent 2px,transparent 4px);cursor:pointer;position:relative;flex-shrink:0;transition:background-color .15s ease,border-color .15s ease,box-shadow .1s ease,filter .15s ease;filter:grayscale(1) opacity(.55)}.enc-rand-icon:before{content:"\u{1F3B2}";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:1rem;line-height:1}.enc-rand-icon:hover{border-color:gold}.enc-rand-icon:active{box-shadow:inset 0 1px 2px #00000073}.enc-rand-icon:checked{background-color:#4a90d9;background-image:none;border-color:#ffffff80;filter:none;box-shadow:inset 0 1px 2px #00000040}.enc-rand-icon:checked:hover{border-color:gold;background-color:#5aa0e9}.metrics-label{align-self:center}.metrics{font-size:.78rem;background:#aaa;border:1px solid #555555;border-radius:3px;padding:2px 6px;align-self:center;justify-self:end}.error-banner{display:none;background:#fdd;border:2px solid #cc0000;border-radius:4px;padding:7px 11px;font-size:.82rem;color:#500;margin-bottom:8px;flex-shrink:0}#periodic-controls,#fixed-controls,#weight-control{display:none}#scalar-row{display:none;align-items:stretch;margin:0;padding:0;gap:0;flex-shrink:0;position:relative}#scalar-val-gutter{flex-shrink:0}#scalar-val{position:absolute;top:50%;left:0;transform:translate(-50%,-50%);z-index:10;cursor:grab;user-select:none;touch-action:none;font-size:.82rem;color:#fff;background:#0064a3;border:2px solid #000000;border-radius:5px;padding:3px 2px;box-shadow:2px 4px 8px #0000004d,inset 0 1px #fff3;white-space:nowrap;display:flex;align-items:center;font-weight:600}#scalar-val:before{content:"\u283F";font-size:.75rem;color:#ffffff80;margin-right:4px;line-height:1}#scalar-val:after{content:"\u283F";font-size:.75rem;color:#ffffff80;margin-left:4px;line-height:1}#scalar-val:active{cursor:grabbing;background:#004f82}#scalar-slider-wrap{position:relative;background:#0064a300;border:2px solid #000000;border-radius:5px;padding:4px;box-shadow:2px 4px 16px #000c,inset 0 1px #fff3;display:flex;align-items:center;min-width:0;min-height:36px;flex-shrink:0}#scalar-slider{-webkit-appearance:none;appearance:none;min-width:0;width:100%;height:6px;border-radius:3px;background:#0064a359;outline:none;cursor:pointer}#scalar-slider::-webkit-slider-runnable-track{height:6px;border-radius:3px;background:#0064a359}#scalar-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:0;height:0;border:none;box-shadow:none;margin-top:0}#scalar-slider::-moz-range-thumb{width:0;height:0;border:none;box-shadow:none}#scalar-slider::-moz-range-track{height:6px;border-radius:3px;background:#0064a359}#scalar-right-pad{flex-shrink:0}#plot-container{background:#eee;border:2px solid #333333;border-radius:8px;padding:0 8px;width:100%;flex:1;min-height:300px;position:relative;overflow:hidden;box-shadow:2px 4px 8px #0006,inset 0 1px #ffffff8c;margin:0}#empty-plot-msg{display:none;position:absolute;inset:0;align-items:center;justify-content:center;color:#555;font-size:.95rem;pointer-events:none;z-index:15}#main-area{display:flex;flex:1;flex-direction:column;min-height:600px;margin:16px 0 0}[data-embed] #main-area{min-height:0;margin-top:0}[data-embed] #plot-container{min-height:0}#center-col{flex:1;min-width:0;min-height:0;display:flex;flex-direction:row;gap:8px}#subplot-panel{display:none;flex-direction:column;gap:6px;width:200px;flex-shrink:0;align-self:stretch;overflow-y:auto;background:#ccc;border:2px solid #333333;border-radius:8px;padding:8px;box-shadow:2px 4px 8px #0006,inset 0 1px #ffffff8c}#subplot-chips{display:flex;flex-direction:column;gap:4px}.subplot-panel-title{font-size:.68rem;font-weight:700;color:#444;letter-spacing:.07em;text-align:center;text-transform:uppercase;padding-bottom:4px;border-bottom:1px solid #aaa;margin-bottom:2px}.subplot-chip-icon{font-size:.8rem;line-height:1;margin-right:3px}.subplot-chip-label{flex:1;font-size:.78rem;font-weight:600;overflow-wrap:anywhere;line-height:1.15}.subplot-chip{display:flex;flex-direction:row;align-items:stretch;gap:0;background:#d4d4d4;border:1px solid #888888;border-radius:4px;padding:4px 5px;font-size:.75rem;color:#111;cursor:pointer;box-shadow:1px 2px 4px #00000040,inset 0 1px #ffffff8c}.subplot-chip:hover{filter:brightness(1.06)}.subplot-chip:focus-visible{outline:2px solid rgba(255,160,20,.9);outline-offset:2px}.chip-drag-handle{display:flex;align-items:center;justify-content:center;width:14px;flex-shrink:0;padding-right:4px;font-size:.9rem;color:#0000004d;user-select:none;cursor:grab}.chip-body{display:flex;flex-direction:column;flex:1;gap:0;min-width:0}.chip-top-row{display:flex;align-items:center;gap:3px;width:100%;padding:3px 5px;user-select:none}#subplot-panel.subplot-panel-compact{width:auto;padding:5px;gap:5px;overflow-x:hidden}#subplot-panel.subplot-panel-compact .subplot-panel-title{display:none}#subplot-panel.subplot-panel-compact #subplot-chips{gap:5px}.subplot-chip.subplot-chip-compact{flex-direction:row;align-items:center;justify-content:center;width:30px;height:30px;padding:0}.subplot-chip.subplot-chip-compact .subplot-chip-icon{margin:0;font-size:1.05rem;line-height:1}.chip-controls{display:flex;flex-wrap:wrap;gap:3px;padding-top:2px}.chip-toggle-btn{font-size:.65rem;padding:2px 5px;border:2px solid #333333;border-radius:4px;background:#00000012;color:#222;cursor:pointer;white-space:nowrap;line-height:1.3;box-shadow:1px 2px 4px #00000040,inset 0 1px #ffffff8c}.chip-toggle-btn:hover{background:#00000026}.chip-toggle-btn.active{background:#4a80b5;color:#fff;border-color:#2a5a90}.chip-toggle-btn.active:hover{background:#3a6a9f}.subplot-gutter-ctl{width:18px;height:18px;padding:0;font-size:.72rem;line-height:1;display:flex;align-items:center;justify-content:center;border:1.5px solid #333333;border-radius:4px;background:#ffffffeb;color:#222;cursor:pointer;box-shadow:1px 1px 3px #0000004d,inset 0 1px #ffffff8c}.subplot-gutter-ctl:hover{background:#eef3f9}.subplot-gutter-ctl.active{background:#4a80b5;color:#fff;border-color:#2a5a90}.subplot-gutter-ctl.active:hover{background:#3a6a9f}.subplot-gutter-cluster .info-icon.subplot-gutter-help{margin-left:0}.chip-ref-controls{flex-direction:column;gap:3px;align-items:flex-start}.subplot-chip.chip-disabled{cursor:pointer}.subplot-chip.drag-over{outline:2px solid #000000;background:#bbb}.ref-point-chip{display:flex;align-items:center;gap:4px;border:1.5px solid #888;border-radius:4px;padding:2px 4px;font-size:.75rem;background:#ffffff59}.ref-point-swatch{width:8px;height:8px;border-radius:50%;flex-shrink:0}.ref-point-chip-label{flex:1;font-variant-numeric:tabular-nums}.ref-point-chip-remove{background:none;border:none;cursor:pointer;color:#666;font-size:.8rem;font-weight:700;padding:0 2px;line-height:1}.ref-point-chip-remove:hover{color:#c00}.bp-ref-slot{display:flex;align-items:center;flex-wrap:wrap;gap:4px}.ref-point-hint{font-size:.65rem;color:#888;margin-top:2px;display:block}#ref-point-popup{display:none;position:fixed;z-index:1000;background:#f2f2f2;border:1.5px solid #5a88bb;border-radius:6px;padding:8px 10px;box-shadow:2px 6px 16px #0000004d;width:200px}.ref-point-popup-range{display:flex;justify-content:space-between;font-size:.65rem;color:#666;margin-bottom:1px}#ref-point-popup-slider{width:100%;display:block;margin-bottom:4px}.ref-point-popup-val{text-align:center;font-size:.85rem;font-weight:700;font-variant-numeric:tabular-nums;margin-bottom:8px;color:#111}.ref-point-popup-btns{display:flex;gap:5px;justify-content:flex-end}.ref-point-popup-btns button{font-size:.75rem;padding:2px 10px;border-radius:3px;cursor:pointer;border:1px solid #999;background:#ddd}#ref-point-popup-add{background:#c8dcf0;border-color:#5a88bb;color:#1a3a5c;font-weight:600}#ref-point-popup-add:hover{background:#b8cfe8}#scalar-bits-panel{display:flex;flex-direction:column;background:#ccc;border:2px solid #333333;border-radius:6px;padding:4px;box-shadow:2px 4px 8px #0006,inset 0 1px #ffffff8c;margin:0 0 4px;flex-shrink:0;overflow-y:auto;align-self:flex-start;min-height:60px}.bp-rows{display:flex;flex-direction:column;gap:6px}.bp-row{display:flex;flex-direction:column;gap:2px}.bp-row-label{font-size:.7rem;font-weight:700;color:#333;display:flex;align-items:center;gap:3px}.bp-squares-wrap{display:flex;flex-wrap:wrap;gap:3px}.bits-panel-placeholder{padding:8px 10px;color:#888;font-size:.8rem;font-style:italic;white-space:nowrap}.info-icon{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;margin-left:5px;padding:0;font-size:.72rem;line-height:1;color:#fff;background:#206f9b;border:none;border-radius:50%;cursor:help;vertical-align:middle;flex:0 0 auto}.info-icon:hover,.info-icon:focus{color:#0064a3;background:#fff;outline:none}.info-icon-scalar{position:absolute;left:-30px;top:50%;transform:translateY(-50%);z-index:11;font-weight:900}.help-popover{position:fixed;z-index:1100;width:260px;background:#f2f2f2;border:1.5px solid #5a88bb;border-radius:6px;padding:9px 11px;box-shadow:2px 6px 16px #0000004d;font-size:.78rem;color:#222}.help-popover-title{font-weight:700;margin-bottom:3px;color:#0064a3}.help-popover-short{line-height:1.35;margin-bottom:6px}.help-popover-more{border:none;background:transparent;color:#0064a3;font-weight:600;font-size:.76rem;padding:0;cursor:pointer}.help-popover-more:hover{text-decoration:underline}.help-open-btn{margin-left:10px;padding:3px 9px;font-size:.8rem;font-weight:600;color:#fff;background:#0064a3;border:1px solid #003f66;border-radius:4px;cursor:pointer}.help-open-btn:hover{background:#004f82}.help-backdrop{position:fixed;inset:0;z-index:1200;background:#00000059}.help-drawer{position:fixed;top:0;right:0;bottom:0;z-index:1201;width:min(460px,92vw);display:flex;flex-direction:column;background:#1f2329;color:#e6e6e6;box-shadow:-4px 0 18px #00000073}.help-drawer-header{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;font-size:1rem;font-weight:700;border-bottom:1px solid #3a3f47;flex:0 0 auto}.help-drawer-close{background:transparent;border:none;color:#cfcfcf;font-size:1rem;cursor:pointer;padding:2px 6px;border-radius:4px}.help-drawer-close:hover{background:#3a3f47;color:#fff}.help-drawer-body{flex:1 1 auto;overflow-y:auto;padding:12px 18px 28px}.help-ai-disclaimer{margin:4px 0 8px;padding:8px 11px;font-size:.74rem;line-height:1.45;color:#c9b27a;background:#be963c1a;border:1px solid rgba(190,150,60,.35);border-radius:6px}.help-ai-disclaimer strong{color:#e0c585}.help-group-heading{font-size:.78rem;text-transform:uppercase;letter-spacing:.08em;color:#7fb2dd;margin:18px 0 6px;border-bottom:1px solid #3a3f47;padding-bottom:3px}.help-section{padding:10px;border-radius:6px;margin:4px 0}.help-section h3{font-size:.92rem;color:#fff;margin-bottom:4px}.help-section-body{font-size:.84rem;line-height:1.5;color:#d6d6d6}.help-section-body p{margin:6px 0}.help-section-body code{background:#2b3038;padding:1px 4px;border-radius:3px;font-size:.8rem}.help-section-body .katex{color:#f0f0f0}@keyframes help-flash-kf{0%{background:#7fb2dd6b}to{background:transparent}}.help-flash{animation:help-flash-kf 1.6s ease-out}[data-embed].embed-no-add-remove #enc-add,[data-embed].embed-no-add-remove #enc-reset,[data-embed].embed-no-add-remove .enc-remove,[data-embed].embed-no-enc-cards #encoder-list,[data-embed].embed-no-enc-controls .enc-edit-btn,[data-embed].embed-no-enc-controls .enc-row .enc-body,[data-embed].embed-no-plot-controls #subplot-panel,[data-embed].embed-no-bit-panels #scalar-bits-panel,[data-embed].embed-no-cursor-slider #scalar-row{display:none!important}[data-embed].embed-no-demo-selector .control-group:has(>#preset-select){display:none!important}[data-embed].embed-no-viewport-range .control-group:has(#view-bounds-slider){display:none!important}[data-embed].embed-no-enc-panel #control-panels,[data-embed].embed-no-plot-panel #center-col{display:none!important}#enc-edit-popup{position:fixed;z-index:1001;width:320px;background:#0f3460;border:2px solid #000;border-radius:6px;padding:6px;box-shadow:2px 8px 24px #0000008c,inset 0 1px #ffffff2e;color:#fff}.enc-edit-popup-header{display:flex;align-items:center;justify-content:space-between;padding:2px 4px 6px;border-bottom:1px solid rgba(255,255,255,.15);margin-bottom:6px}.enc-edit-popup-title{font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;color:#c8d4e6}.enc-edit-popup-close{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.3);border-radius:3px;padding:0 6px;line-height:1.15;cursor:pointer;font-size:.95rem}.enc-edit-popup-close:hover{background:#ffffff2e;border-color:#ffffff8c}';
  let qs = false;
  function eu() {
    if (qs) return;
    qs = true;
    const e = document.createElement("style");
    e.setAttribute("data-encoder-viz", ""), e.textContent = `.encoder-viz {
${Qd}
}`, document.head.appendChild(e);
  }
  function tu({ setup: e, ui: t, cursor: n, compact: r, className: a, style: s }) {
    const o = G.useRef(null), i = G.useRef(null), c = G.useRef(null);
    G.useEffect(() => {
      eu();
      const u = o.current;
      if (u) return i.current = Zd(u, {
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
    return G.useEffect(() => {
      var _a2;
      c.current !== e && ((_a2 = i.current) == null ? void 0 : _a2.setConfig(e, t));
    }, [
      l
    ]), G.useEffect(() => {
      var _a2;
      typeof n == "number" && ((_a2 = i.current) == null ? void 0 : _a2.setScalarCursor(n));
    }, [
      n
    ]), k.jsx("div", {
      className: a ? `encoder-viz ${a}` : "encoder-viz",
      style: {
        display: "flex",
        overflow: "hidden",
        ...s
      },
      children: k.jsx("div", {
        ref: o,
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
  function nu(e, t) {
    return e.filter((n) => n.parentId === t);
  }
  function ru(e, t = 320, n = 260) {
    var _a2, _b, _c, _d2;
    const r = e;
    return {
      w: ((_a2 = r.measured) == null ? void 0 : _a2.width) ?? ((_b = e.style) == null ? void 0 : _b.width) ?? r.width ?? t,
      h: ((_c = r.measured) == null ? void 0 : _c.height) ?? ((_d2 = e.style) == null ? void 0 : _d2.height) ?? r.height ?? n
    };
  }
  function Aa(e, t, n = 40) {
    var _a2, _b, _c, _d2, _e2, _f2;
    const r = e.find((w) => w.type === "group"), a = e.find((w) => w.id === t);
    if (!r || !a || a.parentId) return e;
    const s = ((_a2 = r.position) == null ? void 0 : _a2.x) ?? 0, o = ((_b = r.position) == null ? void 0 : _b.y) ?? 0, i = {
      ...a,
      parentId: r.id,
      position: {
        x: (((_c = a.position) == null ? void 0 : _c.x) ?? 0) - s,
        y: (((_d2 = a.position) == null ? void 0 : _d2.y) ?? 0) - o
      }
    }, c = e.filter((w) => w.parentId === r.id).concat(i);
    let l = 1 / 0, u = 1 / 0, v = -1 / 0, y = -1 / 0;
    for (const w of c) {
      const { w: d, h: f } = ru(w), p = ((_e2 = w.position) == null ? void 0 : _e2.x) ?? 0, b = ((_f2 = w.position) == null ? void 0 : _f2.y) ?? 0;
      l = Math.min(l, p), u = Math.min(u, b), v = Math.max(v, p + d), y = Math.max(y, b + f);
    }
    const g = l - n, x = u - n;
    return e.map((w) => {
      var _a3, _b2;
      return w.id === r.id ? {
        ...w,
        position: {
          x: s + g,
          y: o + x
        },
        style: {
          ...w.style,
          width: v - l + n * 2,
          height: y - u + n * 2
        }
      } : w.id === t ? {
        ...i,
        position: {
          x: i.position.x - g,
          y: i.position.y - x
        }
      } : w.parentId === r.id ? {
        ...w,
        position: {
          x: (((_a3 = w.position) == null ? void 0 : _a3.x) ?? 0) - g,
          y: (((_b2 = w.position) == null ? void 0 : _b2.y) ?? 0) - x
        }
      } : w;
    });
  }
  function au(e) {
    if (!e || e.length === 0) return {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    let t = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0;
    return e.forEach((s) => {
      var _a2, _b, _c, _d2, _e2, _f2;
      const o = ((_a2 = s.position) == null ? void 0 : _a2.x) ?? 0, i = ((_b = s.position) == null ? void 0 : _b.y) ?? 0, c = ((_c = s.measured) == null ? void 0 : _c.width) ?? ((_d2 = s.style) == null ? void 0 : _d2.width) ?? s.width ?? 150, l = ((_e2 = s.measured) == null ? void 0 : _e2.height) ?? ((_f2 = s.style) == null ? void 0 : _f2.height) ?? s.height ?? 50;
      t = Math.min(t, o), n = Math.min(n, i), r = Math.max(r, o + c), a = Math.max(a, i + l);
    }), {
      x: t,
      y: n,
      width: r - t,
      height: a - n
    };
  }
  let su, ou, iu, cu, lu, du, uu, pu, mu, fu, hu, yu, gu, _u;
  ae = Ht()(wr((e, t) => ({
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
      const r = $c(n, t().nodes);
      if (n.filter((s) => s.type === "position" && s.dragging === false).length > 0) {
        const s = r.filter((o) => o.type === "group");
        if (s.length > 0) {
          let o = [
            ...r
          ];
          s.forEach((i) => {
            const c = nu(o, i.id);
            if (c.length > 0) {
              const l = Nc(c), u = 40, v = l.x - u, y = l.y - u;
              v !== 0 || y !== 0 ? o = o.map((g) => g.parentId === i.id ? {
                ...g,
                position: {
                  x: g.position.x - v,
                  y: g.position.y - y
                }
              } : g.id === i.id ? {
                ...g,
                position: {
                  x: g.position.x + v,
                  y: g.position.y + y
                },
                style: {
                  ...g.style,
                  width: l.width + u * 2,
                  height: l.height + u * 2
                },
                data: {
                  ...g.data,
                  computedBounds: l
                }
              } : g) : o = o.map((g) => g.id === i.id ? {
                ...g,
                style: {
                  ...g.style,
                  width: l.width + u * 2,
                  height: l.height + u * 2
                },
                data: {
                  ...g.data,
                  computedBounds: l
                }
              } : g);
            }
          }), e({
            nodes: o
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
        edges: Cc(n, t().edges)
      });
    },
    onConnect: (n) => {
      var _a2, _b;
      const r = t().nodes.find((i) => i.id === n.source), a = ((_a2 = r == null ? void 0 : r.data) == null ? void 0 : _a2.blockType) === "DiscreteDataSource" || ((_b = r == null ? void 0 : r.data) == null ? void 0 : _b.blockType) === "ScalarDataSource", s = a ? "dataSource" : "input", o = a ? {
        sourceType: r.data.sourceType,
        animated: false
      } : {};
      e({
        edges: Ec({
          ...n,
          type: s,
          data: o
        }, t().edges)
      }), console.log(`[NetworkStore] Connected ${n.source} \u2192 ${n.target} (type: ${s})`);
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
      const { history: r, historyIndex: a, maxHistorySize: s } = t(), o = r.slice(0, a + 1);
      o.push(n), o.length > s && o.shift(), e({
        history: o,
        historyIndex: o.length - 1
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
  }));
  su = {
    method: "add_discrete_transformer",
    defaults: {
      num_v: 10,
      num_s: 512,
      num_t: 2,
      seed: 42
    }
  };
  ou = {
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
  };
  iu = {
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
  };
  cu = {
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
  };
  lu = {
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
  };
  du = {
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
  };
  uu = {
    method: "add_fixed_weight_transformer",
    defaults: {
      n: 16,
      w: 5,
      min_val: -1,
      max_val: 1,
      num_t: 2,
      seed: 42
    }
  };
  pu = {
    method: "add_tapering_weight_transformer",
    defaults: {
      n: 16,
      w: 5,
      min_val: -1,
      max_val: 1,
      num_t: 2,
      seed: 42
    }
  };
  mu = {
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
  };
  fu = {
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
  };
  hu = {
    method: "add_place_cell_transformer",
    defaults: {
      min_val: -1,
      max_val: 1,
      default_bin_size: 0.2,
      num_t: 2
    }
  };
  yu = {
    method: "add_randomized_place_cell_transformer",
    defaults: {
      n: 16,
      bin_size: 0.3,
      min_val: -1,
      max_val: 1,
      num_t: 2,
      seed: 42
    }
  };
  gu = {
    DiscreteTransformer: su,
    PersistenceTransformer: ou,
    PatternPooler: iu,
    PatternClassifier: cu,
    SequenceLearner: lu,
    ContextLearner: du,
    FixedWeightTransformer: uu,
    TaperingWeightTransformer: pu,
    PeriodicCellTransformer: mu,
    PeriodicScalarTransformer: fu,
    PlaceCellTransformer: hu,
    RandomizedPlaceCellTransformer: yu
  };
  _u = gu;
  function Nr(e) {
    return [
      "PatternClassifier",
      "SequenceLearner",
      "ContextLearner",
      "SynflowScalarDataSource"
    ].includes(e);
  }
  var Cn = {
    exports: {}
  }, ia = {}, ot = {}, It = {}, ca = {}, la = {}, da = {}, Bs;
  function gr() {
    return Bs || (Bs = 1, (function(e) {
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
          return (p = this._str) !== null && p !== void 0 ? p : this._str = this._items.reduce((b, S) => `${b}${S}`, "");
        }
        get names() {
          var p;
          return (p = this._names) !== null && p !== void 0 ? p : this._names = this._items.reduce((b, S) => (S instanceof n && (b[S.str] = (b[S.str] || 0) + 1), b), {});
        }
      }
      e._Code = r, e.nil = new r("");
      function a(f, ...p) {
        const b = [
          f[0]
        ];
        let S = 0;
        for (; S < p.length; ) i(b, p[S]), b.push(f[++S]);
        return new r(b);
      }
      e._ = a;
      const s = new r("+");
      function o(f, ...p) {
        const b = [
          g(f[0])
        ];
        let S = 0;
        for (; S < p.length; ) b.push(s), i(b, p[S]), b.push(s, g(f[++S]));
        return c(b), new r(b);
      }
      e.str = o;
      function i(f, p) {
        p instanceof r ? f.push(...p._items) : p instanceof n ? f.push(p) : f.push(v(p));
      }
      e.addCodeArg = i;
      function c(f) {
        let p = 1;
        for (; p < f.length - 1; ) {
          if (f[p] === s) {
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
        return p.emptyStr() ? f : f.emptyStr() ? p : o`${f}${p}`;
      }
      e.strConcat = u;
      function v(f) {
        return typeof f == "number" || typeof f == "boolean" || f === null ? f : g(Array.isArray(f) ? f.join(",") : f);
      }
      function y(f) {
        return new r(g(f));
      }
      e.stringify = y;
      function g(f) {
        return JSON.stringify(f).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
      }
      e.safeStringify = g;
      function x(f) {
        return typeof f == "string" && e.IDENTIFIER.test(f) ? new r(`.${f}`) : a`[${f}]`;
      }
      e.getProperty = x;
      function w(f) {
        if (typeof f == "string" && e.IDENTIFIER.test(f)) return new r(`${f}`);
        throw new Error(`CodeGen: invalid export name: ${f}, use explicit $id name mapping`);
      }
      e.getEsmExportName = w;
      function d(f) {
        return new r(f.toString());
      }
      e.regexpCode = d;
    })(da)), da;
  }
  var ua = {}, zs;
  function Vs() {
    return zs || (zs = 1, (function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
      const t = gr();
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
      class s extends t.Name {
        constructor(l, u) {
          super(u), this.prefix = l;
        }
        setValue(l, { property: u, itemIndex: v }) {
          this.value = l, this.scopePath = (0, t._)`.${new t.Name(u)}[${v}]`;
        }
      }
      e.ValueScopeName = s;
      const o = (0, t._)`\n`;
      class i extends a {
        constructor(l) {
          super(l), this._values = {}, this._scope = l.scope, this.opts = {
            ...l,
            _n: l.lines ? o : t.nil
          };
        }
        get() {
          return this._scope;
        }
        name(l) {
          return new s(l, this._newName(l));
        }
        value(l, u) {
          var v;
          if (u.ref === void 0) throw new Error("CodeGen: ref must be passed in value");
          const y = this.toName(l), { prefix: g } = y, x = (v = u.key) !== null && v !== void 0 ? v : u.ref;
          let w = this._values[g];
          if (w) {
            const p = w.get(x);
            if (p) return p;
          } else w = this._values[g] = /* @__PURE__ */ new Map();
          w.set(x, y);
          const d = this._scope[g] || (this._scope[g] = []), f = d.length;
          return d[f] = u.ref, y.setValue(u, {
            property: g,
            itemIndex: f
          }), y;
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
          return this._reduceValues(l, (y) => {
            if (y.value === void 0) throw new Error(`CodeGen: name "${y}" has no value`);
            return y.value.code;
          }, u, v);
        }
        _reduceValues(l, u, v = {}, y) {
          let g = t.nil;
          for (const x in l) {
            const w = l[x];
            if (!w) continue;
            const d = v[x] = v[x] || /* @__PURE__ */ new Map();
            w.forEach((f) => {
              if (d.has(f)) return;
              d.set(f, r.Started);
              let p = u(f);
              if (p) {
                const b = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
                g = (0, t._)`${g}${b} ${f} = ${p};${this.opts._n}`;
              } else if (p = y == null ? void 0 : y(f)) g = (0, t._)`${g}${p}${this.opts._n}`;
              else throw new n(f);
              d.set(f, r.Completed);
            });
          }
          return g;
        }
      }
      e.ValueScope = i;
    })(ua)), ua;
  }
  var Ws;
  function me() {
    return Ws || (Ws = 1, (function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
      const t = gr(), n = Vs();
      var r = gr();
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
      var a = Vs();
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
      class s {
        optimizeNodes() {
          return this;
        }
        optimizeNames(E, I) {
          return this;
        }
      }
      class o extends s {
        constructor(E, I, B) {
          super(), this.varKind = E, this.name = I, this.rhs = B;
        }
        render({ es5: E, _n: I }) {
          const B = E ? n.varKinds.var : this.varKind, ne = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
          return `${B} ${this.name}${ne};` + I;
        }
        optimizeNames(E, I) {
          if (E[this.name.str]) return this.rhs && (this.rhs = z(this.rhs, E, I)), this;
        }
        get names() {
          return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
        }
      }
      class i extends s {
        constructor(E, I, B) {
          super(), this.lhs = E, this.rhs = I, this.sideEffects = B;
        }
        render({ _n: E }) {
          return `${this.lhs} = ${this.rhs};` + E;
        }
        optimizeNames(E, I) {
          if (!(this.lhs instanceof t.Name && !E[this.lhs.str] && !this.sideEffects)) return this.rhs = z(this.rhs, E, I), this;
        }
        get names() {
          const E = this.lhs instanceof t.Name ? {} : {
            ...this.lhs.names
          };
          return F(E, this.rhs);
        }
      }
      class c extends i {
        constructor(E, I, B, ne) {
          super(E, B, ne), this.op = I;
        }
        render({ _n: E }) {
          return `${this.lhs} ${this.op}= ${this.rhs};` + E;
        }
      }
      class l extends s {
        constructor(E) {
          super(), this.label = E, this.names = {};
        }
        render({ _n: E }) {
          return `${this.label}:` + E;
        }
      }
      class u extends s {
        constructor(E) {
          super(), this.label = E, this.names = {};
        }
        render({ _n: E }) {
          return `break${this.label ? ` ${this.label}` : ""};` + E;
        }
      }
      class v extends s {
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
      class y extends s {
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
          return this.code = z(this.code, E, I), this;
        }
        get names() {
          return this.code instanceof t._CodeOrName ? this.code.names : {};
        }
      }
      class g extends s {
        constructor(E = []) {
          super(), this.nodes = E;
        }
        render(E) {
          return this.nodes.reduce((I, B) => I + B.render(E), "");
        }
        optimizeNodes() {
          const { nodes: E } = this;
          let I = E.length;
          for (; I--; ) {
            const B = E[I].optimizeNodes();
            Array.isArray(B) ? E.splice(I, 1, ...B) : B ? E[I] = B : E.splice(I, 1);
          }
          return E.length > 0 ? this : void 0;
        }
        optimizeNames(E, I) {
          const { nodes: B } = this;
          let ne = B.length;
          for (; ne--; ) {
            const ee = B[ne];
            ee.optimizeNames(E, I) || (W(E, ee.names), B.splice(ne, 1));
          }
          return B.length > 0 ? this : void 0;
        }
        get names() {
          return this.nodes.reduce((E, I) => O(E, I.names), {});
        }
      }
      class x extends g {
        render(E) {
          return "{" + E._n + super.render(E) + "}" + E._n;
        }
      }
      class w extends g {
      }
      class d extends x {
      }
      d.kind = "else";
      class f extends x {
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
            const B = I.optimizeNodes();
            I = this.else = Array.isArray(B) ? new d(B) : B;
          }
          if (I) return E === false ? I instanceof f ? I : I.nodes : this.nodes.length ? this : new f(X(E), I instanceof f ? [
            I
          ] : I.nodes);
          if (!(E === false || !this.nodes.length)) return this;
        }
        optimizeNames(E, I) {
          var B;
          if (this.else = (B = this.else) === null || B === void 0 ? void 0 : B.optimizeNames(E, I), !!(super.optimizeNames(E, I) || this.else)) return this.condition = z(this.condition, E, I), this;
        }
        get names() {
          const E = super.names;
          return F(E, this.condition), this.else && O(E, this.else.names), E;
        }
      }
      f.kind = "if";
      class p extends x {
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
          if (super.optimizeNames(E, I)) return this.iteration = z(this.iteration, E, I), this;
        }
        get names() {
          return O(super.names, this.iteration.names);
        }
      }
      class S extends p {
        constructor(E, I, B, ne) {
          super(), this.varKind = E, this.name = I, this.from = B, this.to = ne;
        }
        render(E) {
          const I = E.es5 ? n.varKinds.var : this.varKind, { name: B, from: ne, to: ee } = this;
          return `for(${I} ${B}=${ne}; ${B}<${ee}; ${B}++)` + super.render(E);
        }
        get names() {
          const E = F(super.names, this.from);
          return F(E, this.to);
        }
      }
      class _ extends p {
        constructor(E, I, B, ne) {
          super(), this.loop = E, this.varKind = I, this.name = B, this.iterable = ne;
        }
        render(E) {
          return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(E);
        }
        optimizeNames(E, I) {
          if (super.optimizeNames(E, I)) return this.iterable = z(this.iterable, E, I), this;
        }
        get names() {
          return O(super.names, this.iterable.names);
        }
      }
      class h extends x {
        constructor(E, I, B) {
          super(), this.name = E, this.args = I, this.async = B;
        }
        render(E) {
          return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(E);
        }
      }
      h.kind = "func";
      class m extends g {
        render(E) {
          return "return " + super.render(E);
        }
      }
      m.kind = "return";
      class P extends x {
        render(E) {
          let I = "try" + super.render(E);
          return this.catch && (I += this.catch.render(E)), this.finally && (I += this.finally.render(E)), I;
        }
        optimizeNodes() {
          var E, I;
          return super.optimizeNodes(), (E = this.catch) === null || E === void 0 || E.optimizeNodes(), (I = this.finally) === null || I === void 0 || I.optimizeNodes(), this;
        }
        optimizeNames(E, I) {
          var B, ne;
          return super.optimizeNames(E, I), (B = this.catch) === null || B === void 0 || B.optimizeNames(E, I), (ne = this.finally) === null || ne === void 0 || ne.optimizeNames(E, I), this;
        }
        get names() {
          const E = super.names;
          return this.catch && O(E, this.catch.names), this.finally && O(E, this.finally.names), E;
        }
      }
      class N extends x {
        constructor(E) {
          super(), this.error = E;
        }
        render(E) {
          return `catch(${this.error})` + super.render(E);
        }
      }
      N.kind = "catch";
      class C extends x {
        render(E) {
          return "finally" + super.render(E);
        }
      }
      C.kind = "finally";
      class T {
        constructor(E, I = {}) {
          this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = {
            ...I,
            _n: I.lines ? `
` : ""
          }, this._extScope = E, this._scope = new n.Scope({
            parent: E
          }), this._nodes = [
            new w()
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
          const B = this._extScope.value(E, I);
          return (this._values[B.prefix] || (this._values[B.prefix] = /* @__PURE__ */ new Set())).add(B), B;
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
        _def(E, I, B, ne) {
          const ee = this._scope.toName(I);
          return B !== void 0 && ne && (this._constants[ee.str] = B), this._leafNode(new o(E, ee, B)), ee;
        }
        const(E, I, B) {
          return this._def(n.varKinds.const, E, I, B);
        }
        let(E, I, B) {
          return this._def(n.varKinds.let, E, I, B);
        }
        var(E, I, B) {
          return this._def(n.varKinds.var, E, I, B);
        }
        assign(E, I, B) {
          return this._leafNode(new i(E, I, B));
        }
        add(E, I) {
          return this._leafNode(new c(E, e.operators.ADD, I));
        }
        code(E) {
          return typeof E == "function" ? E() : E !== t.nil && this._leafNode(new y(E)), this;
        }
        object(...E) {
          const I = [
            "{"
          ];
          for (const [B, ne] of E) I.length > 1 && I.push(","), I.push(B), (B !== ne || this.opts.es5) && (I.push(":"), (0, t.addCodeArg)(I, ne));
          return I.push("}"), new t._Code(I);
        }
        if(E, I, B) {
          if (this._blockNode(new f(E)), I && B) this.code(I).else().code(B).endIf();
          else if (I) this.code(I).endIf();
          else if (B) throw new Error('CodeGen: "else" body without "then" body');
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
        forRange(E, I, B, ne, ee = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
          const fe = this._scope.toName(E);
          return this._for(new S(ee, fe, I, B), () => ne(fe));
        }
        forOf(E, I, B, ne = n.varKinds.const) {
          const ee = this._scope.toName(E);
          if (this.opts.es5) {
            const fe = I instanceof t.Name ? I : this.var("_arr", I);
            return this.forRange("_i", 0, (0, t._)`${fe}.length`, (re) => {
              this.var(ee, (0, t._)`${fe}[${re}]`), B(ee);
            });
          }
          return this._for(new _("of", ne, ee, I), () => B(ee));
        }
        forIn(E, I, B, ne = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
          if (this.opts.ownProperties) return this.forOf(E, (0, t._)`Object.keys(${I})`, B);
          const ee = this._scope.toName(E);
          return this._for(new _("in", ne, ee, I), () => B(ee));
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
        try(E, I, B) {
          if (!I && !B) throw new Error('CodeGen: "try" without "catch" and "finally"');
          const ne = new P();
          if (this._blockNode(ne), this.code(E), I) {
            const ee = this.name("e");
            this._currNode = ne.catch = new N(ee), I(ee);
          }
          return B && (this._currNode = ne.finally = new C(), this.code(B)), this._endBlockNode(N, C);
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
          const B = this._nodes.length - I;
          if (B < 0 || E !== void 0 && B !== E) throw new Error(`CodeGen: wrong number of nodes: ${B} vs ${E} expected`);
          return this._nodes.length = I, this;
        }
        func(E, I = t.nil, B, ne) {
          return this._blockNode(new h(E, I, B)), ne && this.code(ne).endFunc(), this;
        }
        endFunc() {
          return this._endBlockNode(h);
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
          const B = this._currNode;
          if (B instanceof E || I && B instanceof I) return this._nodes.pop(), this;
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
      e.CodeGen = T;
      function O(L, E) {
        for (const I in E) L[I] = (L[I] || 0) + (E[I] || 0);
        return L;
      }
      function F(L, E) {
        return E instanceof t._CodeOrName ? O(L, E.names) : L;
      }
      function z(L, E, I) {
        if (L instanceof t.Name) return B(L);
        if (!ne(L)) return L;
        return new t._Code(L._items.reduce((ee, fe) => (fe instanceof t.Name && (fe = B(fe)), fe instanceof t._Code ? ee.push(...fe._items) : ee.push(fe), ee), []));
        function B(ee) {
          const fe = I[ee.str];
          return fe === void 0 || E[ee.str] !== 1 ? ee : (delete E[ee.str], fe);
        }
        function ne(ee) {
          return ee instanceof t._Code && ee._items.some((fe) => fe instanceof t.Name && E[fe.str] === 1 && I[fe.str] !== void 0);
        }
      }
      function W(L, E) {
        for (const I in E) L[I] = (L[I] || 0) - (E[I] || 0);
      }
      function X(L) {
        return typeof L == "boolean" || typeof L == "number" || L === null ? !L : (0, t._)`!${q(L)}`;
      }
      e.not = X;
      const ie = D(e.operators.AND);
      function oe(...L) {
        return L.reduce(ie);
      }
      e.and = oe;
      const te = D(e.operators.OR);
      function V(...L) {
        return L.reduce(te);
      }
      e.or = V;
      function D(L) {
        return (E, I) => E === t.nil ? I : I === t.nil ? E : (0, t._)`${q(E)} ${L} ${q(I)}`;
      }
      function q(L) {
        return L instanceof t.Name ? L : (0, t._)`(${L})`;
      }
    })(la)), la;
  }
  var le = {}, Us;
  function ye() {
    if (Us) return le;
    Us = 1, Object.defineProperty(le, "__esModule", {
      value: true
    }), le.checkStrictMode = le.getErrorPath = le.Type = le.useFunc = le.setEvaluated = le.evaluatedPropsToName = le.mergeEvaluated = le.eachItem = le.unescapeJsonPointer = le.escapeJsonPointer = le.escapeFragment = le.unescapeFragment = le.schemaRefOrVal = le.schemaHasRulesButRef = le.schemaHasRules = le.checkUnknownRules = le.alwaysValidSchema = le.toHash = void 0;
    const e = me(), t = gr();
    function n(_) {
      const h = {};
      for (const m of _) h[m] = true;
      return h;
    }
    le.toHash = n;
    function r(_, h) {
      return typeof h == "boolean" ? h : Object.keys(h).length === 0 ? true : (a(_, h), !s(h, _.self.RULES.all));
    }
    le.alwaysValidSchema = r;
    function a(_, h = _.schema) {
      const { opts: m, self: P } = _;
      if (!m.strictSchema || typeof h == "boolean") return;
      const N = P.RULES.keywords;
      for (const C in h) N[C] || S(_, `unknown keyword: "${C}"`);
    }
    le.checkUnknownRules = a;
    function s(_, h) {
      if (typeof _ == "boolean") return !_;
      for (const m in _) if (h[m]) return true;
      return false;
    }
    le.schemaHasRules = s;
    function o(_, h) {
      if (typeof _ == "boolean") return !_;
      for (const m in _) if (m !== "$ref" && h.all[m]) return true;
      return false;
    }
    le.schemaHasRulesButRef = o;
    function i({ topSchemaRef: _, schemaPath: h }, m, P, N) {
      if (!N) {
        if (typeof m == "number" || typeof m == "boolean") return m;
        if (typeof m == "string") return (0, e._)`${m}`;
      }
      return (0, e._)`${_}${h}${(0, e.getProperty)(P)}`;
    }
    le.schemaRefOrVal = i;
    function c(_) {
      return v(decodeURIComponent(_));
    }
    le.unescapeFragment = c;
    function l(_) {
      return encodeURIComponent(u(_));
    }
    le.escapeFragment = l;
    function u(_) {
      return typeof _ == "number" ? `${_}` : _.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    le.escapeJsonPointer = u;
    function v(_) {
      return _.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    le.unescapeJsonPointer = v;
    function y(_, h) {
      if (Array.isArray(_)) for (const m of _) h(m);
      else h(_);
    }
    le.eachItem = y;
    function g({ mergeNames: _, mergeToName: h, mergeValues: m, resultToName: P }) {
      return (N, C, T, O) => {
        const F = T === void 0 ? C : T instanceof e.Name ? (C instanceof e.Name ? _(N, C, T) : h(N, C, T), T) : C instanceof e.Name ? (h(N, T, C), C) : m(C, T);
        return O === e.Name && !(F instanceof e.Name) ? P(N, F) : F;
      };
    }
    le.mergeEvaluated = {
      props: g({
        mergeNames: (_, h, m) => _.if((0, e._)`${m} !== true && ${h} !== undefined`, () => {
          _.if((0, e._)`${h} === true`, () => _.assign(m, true), () => _.assign(m, (0, e._)`${m} || {}`).code((0, e._)`Object.assign(${m}, ${h})`));
        }),
        mergeToName: (_, h, m) => _.if((0, e._)`${m} !== true`, () => {
          h === true ? _.assign(m, true) : (_.assign(m, (0, e._)`${m} || {}`), w(_, m, h));
        }),
        mergeValues: (_, h) => _ === true ? true : {
          ..._,
          ...h
        },
        resultToName: x
      }),
      items: g({
        mergeNames: (_, h, m) => _.if((0, e._)`${m} !== true && ${h} !== undefined`, () => _.assign(m, (0, e._)`${h} === true ? true : ${m} > ${h} ? ${m} : ${h}`)),
        mergeToName: (_, h, m) => _.if((0, e._)`${m} !== true`, () => _.assign(m, h === true ? true : (0, e._)`${m} > ${h} ? ${m} : ${h}`)),
        mergeValues: (_, h) => _ === true ? true : Math.max(_, h),
        resultToName: (_, h) => _.var("items", h)
      })
    };
    function x(_, h) {
      if (h === true) return _.var("props", true);
      const m = _.var("props", (0, e._)`{}`);
      return h !== void 0 && w(_, m, h), m;
    }
    le.evaluatedPropsToName = x;
    function w(_, h, m) {
      Object.keys(m).forEach((P) => _.assign((0, e._)`${h}${(0, e.getProperty)(P)}`, true));
    }
    le.setEvaluated = w;
    const d = {};
    function f(_, h) {
      return _.scopeValue("func", {
        ref: h,
        code: d[h.code] || (d[h.code] = new t._Code(h.code))
      });
    }
    le.useFunc = f;
    var p;
    (function(_) {
      _[_.Num = 0] = "Num", _[_.Str = 1] = "Str";
    })(p || (le.Type = p = {}));
    function b(_, h, m) {
      if (_ instanceof e.Name) {
        const P = h === p.Num;
        return m ? P ? (0, e._)`"[" + ${_} + "]"` : (0, e._)`"['" + ${_} + "']"` : P ? (0, e._)`"/" + ${_}` : (0, e._)`"/" + ${_}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
      }
      return m ? (0, e.getProperty)(_).toString() : "/" + u(_);
    }
    le.getErrorPath = b;
    function S(_, h, m = _.opts.strictSchema) {
      if (m) {
        if (h = `strict mode: ${h}`, m === true) throw new Error(h);
        _.self.logger.warn(h);
      }
    }
    return le.checkStrictMode = S, le;
  }
  var $n = {}, Hs;
  function xt() {
    if (Hs) return $n;
    Hs = 1, Object.defineProperty($n, "__esModule", {
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
    return $n.default = t, $n;
  }
  var Gs;
  function Ir() {
    return Gs || (Gs = 1, (function(e) {
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
        const { it: S } = d, { gen: _, compositeRule: h, allErrors: m } = S, P = v(d, f, p);
        b ?? (h || m) ? c(_, P) : l(S, (0, t._)`[${P}]`);
      }
      e.reportError = a;
      function s(d, f = e.keywordError, p) {
        const { it: b } = d, { gen: S, compositeRule: _, allErrors: h } = b, m = v(d, f, p);
        c(S, m), _ || h || l(b, r.default.vErrors);
      }
      e.reportExtraError = s;
      function o(d, f) {
        d.assign(r.default.errors, f), d.if((0, t._)`${r.default.vErrors} !== null`, () => d.if(f, () => d.assign((0, t._)`${r.default.vErrors}.length`, f), () => d.assign(r.default.vErrors, null)));
      }
      e.resetErrorsCount = o;
      function i({ gen: d, keyword: f, schemaValue: p, data: b, errsCount: S, it: _ }) {
        if (S === void 0) throw new Error("ajv implementation error");
        const h = d.name("err");
        d.forRange("i", S, r.default.errors, (m) => {
          d.const(h, (0, t._)`${r.default.vErrors}[${m}]`), d.if((0, t._)`${h}.instancePath === undefined`, () => d.assign((0, t._)`${h}.instancePath`, (0, t.strConcat)(r.default.instancePath, _.errorPath))), d.assign((0, t._)`${h}.schemaPath`, (0, t.str)`${_.errSchemaPath}/${f}`), _.opts.verbose && (d.assign((0, t._)`${h}.schema`, p), d.assign((0, t._)`${h}.data`, b));
        });
      }
      e.extendErrors = i;
      function c(d, f) {
        const p = d.const("err", f);
        d.if((0, t._)`${r.default.vErrors} === null`, () => d.assign(r.default.vErrors, (0, t._)`[${p}]`), (0, t._)`${r.default.vErrors}.push(${p})`), d.code((0, t._)`${r.default.errors}++`);
      }
      function l(d, f) {
        const { gen: p, validateName: b, schemaEnv: S } = d;
        S.$async ? p.throw((0, t._)`new ${d.ValidationError}(${f})`) : (p.assign((0, t._)`${b}.errors`, f), p.return(false));
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
        return b === false ? (0, t._)`{}` : y(d, f, p);
      }
      function y(d, f, p = {}) {
        const { gen: b, it: S } = d, _ = [
          g(S, p),
          x(d, p)
        ];
        return w(d, f, _), b.object(..._);
      }
      function g({ errorPath: d }, { instancePath: f }) {
        const p = f ? (0, t.str)`${d}${(0, n.getErrorPath)(f, n.Type.Str)}` : d;
        return [
          r.default.instancePath,
          (0, t.strConcat)(r.default.instancePath, p)
        ];
      }
      function x({ keyword: d, it: { errSchemaPath: f } }, { schemaPath: p, parentSchema: b }) {
        let S = b ? f : (0, t.str)`${f}/${d}`;
        return p && (S = (0, t.str)`${S}${(0, n.getErrorPath)(p, n.Type.Str)}`), [
          u.schemaPath,
          S
        ];
      }
      function w(d, { params: f, message: p }, b) {
        const { keyword: S, data: _, schemaValue: h, it: m } = d, { opts: P, propertyName: N, topSchemaRef: C, schemaPath: T } = m;
        b.push([
          u.keyword,
          S
        ], [
          u.params,
          typeof f == "function" ? f(d) : f || (0, t._)`{}`
        ]), P.messages && b.push([
          u.message,
          typeof p == "function" ? p(d) : p
        ]), P.verbose && b.push([
          u.schema,
          h
        ], [
          u.parentSchema,
          (0, t._)`${C}${T}`
        ], [
          r.default.data,
          _
        ]), N && b.push([
          u.propertyName,
          N
        ]);
      }
    })(ca)), ca;
  }
  var Ks;
  function vu() {
    if (Ks) return It;
    Ks = 1, Object.defineProperty(It, "__esModule", {
      value: true
    }), It.boolOrEmptySchema = It.topBoolOrEmptySchema = void 0;
    const e = Ir(), t = me(), n = xt(), r = {
      message: "boolean schema is false"
    };
    function a(i) {
      const { gen: c, schema: l, validateName: u } = i;
      l === false ? o(i, false) : typeof l == "object" && l.$async === true ? c.return(n.default.data) : (c.assign((0, t._)`${u}.errors`, null), c.return(true));
    }
    It.topBoolOrEmptySchema = a;
    function s(i, c) {
      const { gen: l, schema: u } = i;
      u === false ? (l.var(c, false), o(i)) : l.var(c, true);
    }
    It.boolOrEmptySchema = s;
    function o(i, c) {
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
  var Ce = {}, Tt = {}, Ys;
  function zi() {
    if (Ys) return Tt;
    Ys = 1, Object.defineProperty(Tt, "__esModule", {
      value: true
    }), Tt.getRules = Tt.isJSONType = void 0;
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
    Tt.isJSONType = n;
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
    return Tt.getRules = r, Tt;
  }
  var it = {}, Xs;
  function Vi() {
    if (Xs) return it;
    Xs = 1, Object.defineProperty(it, "__esModule", {
      value: true
    }), it.shouldUseRule = it.shouldUseGroup = it.schemaHasRulesForType = void 0;
    function e({ schema: r, self: a }, s) {
      const o = a.RULES.types[s];
      return o && o !== true && t(r, o);
    }
    it.schemaHasRulesForType = e;
    function t(r, a) {
      return a.rules.some((s) => n(r, s));
    }
    it.shouldUseGroup = t;
    function n(r, a) {
      var s;
      return r[a.keyword] !== void 0 || ((s = a.definition.implements) === null || s === void 0 ? void 0 : s.some((o) => r[o] !== void 0));
    }
    return it.shouldUseRule = n, it;
  }
  var Js;
  function _r() {
    if (Js) return Ce;
    Js = 1, Object.defineProperty(Ce, "__esModule", {
      value: true
    }), Ce.reportTypeError = Ce.checkDataTypes = Ce.checkDataType = Ce.coerceAndCheckDataType = Ce.getJSONTypes = Ce.getSchemaTypes = Ce.DataType = void 0;
    const e = zi(), t = Vi(), n = Ir(), r = me(), a = ye();
    var s;
    (function(p) {
      p[p.Correct = 0] = "Correct", p[p.Wrong = 1] = "Wrong";
    })(s || (Ce.DataType = s = {}));
    function o(p) {
      const b = i(p.type);
      if (b.includes("null")) {
        if (p.nullable === false) throw new Error("type: null contradicts nullable: false");
      } else {
        if (!b.length && p.nullable !== void 0) throw new Error('"nullable" cannot be used without "type"');
        p.nullable === true && b.push("null");
      }
      return b;
    }
    Ce.getSchemaTypes = o;
    function i(p) {
      const b = Array.isArray(p) ? p : p ? [
        p
      ] : [];
      if (b.every(e.isJSONType)) return b;
      throw new Error("type must be JSONType or JSONType[]: " + b.join(","));
    }
    Ce.getJSONTypes = i;
    function c(p, b) {
      const { gen: S, data: _, opts: h } = p, m = u(b, h.coerceTypes), P = b.length > 0 && !(m.length === 0 && b.length === 1 && (0, t.schemaHasRulesForType)(p, b[0]));
      if (P) {
        const N = x(b, _, h.strictNumbers, s.Wrong);
        S.if(N, () => {
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
      return b ? p.filter((S) => l.has(S) || b === "array" && S === "array") : [];
    }
    function v(p, b, S) {
      const { gen: _, data: h, opts: m } = p, P = _.let("dataType", (0, r._)`typeof ${h}`), N = _.let("coerced", (0, r._)`undefined`);
      m.coerceTypes === "array" && _.if((0, r._)`${P} == 'object' && Array.isArray(${h}) && ${h}.length == 1`, () => _.assign(h, (0, r._)`${h}[0]`).assign(P, (0, r._)`typeof ${h}`).if(x(b, h, m.strictNumbers), () => _.assign(N, h))), _.if((0, r._)`${N} !== undefined`);
      for (const T of S) (l.has(T) || T === "array" && m.coerceTypes === "array") && C(T);
      _.else(), d(p), _.endIf(), _.if((0, r._)`${N} !== undefined`, () => {
        _.assign(h, N), y(p, N);
      });
      function C(T) {
        switch (T) {
          case "string":
            _.elseIf((0, r._)`${P} == "number" || ${P} == "boolean"`).assign(N, (0, r._)`"" + ${h}`).elseIf((0, r._)`${h} === null`).assign(N, (0, r._)`""`);
            return;
          case "number":
            _.elseIf((0, r._)`${P} == "boolean" || ${h} === null
              || (${P} == "string" && ${h} && ${h} == +${h})`).assign(N, (0, r._)`+${h}`);
            return;
          case "integer":
            _.elseIf((0, r._)`${P} === "boolean" || ${h} === null
              || (${P} === "string" && ${h} && ${h} == +${h} && !(${h} % 1))`).assign(N, (0, r._)`+${h}`);
            return;
          case "boolean":
            _.elseIf((0, r._)`${h} === "false" || ${h} === 0 || ${h} === null`).assign(N, false).elseIf((0, r._)`${h} === "true" || ${h} === 1`).assign(N, true);
            return;
          case "null":
            _.elseIf((0, r._)`${h} === "" || ${h} === 0 || ${h} === false`), _.assign(N, null);
            return;
          case "array":
            _.elseIf((0, r._)`${P} === "string" || ${P} === "number"
              || ${P} === "boolean" || ${h} === null`).assign(N, (0, r._)`[${h}]`);
        }
      }
    }
    function y({ gen: p, parentData: b, parentDataProperty: S }, _) {
      p.if((0, r._)`${b} !== undefined`, () => p.assign((0, r._)`${b}[${S}]`, _));
    }
    function g(p, b, S, _ = s.Correct) {
      const h = _ === s.Correct ? r.operators.EQ : r.operators.NEQ;
      let m;
      switch (p) {
        case "null":
          return (0, r._)`${b} ${h} null`;
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
          return (0, r._)`typeof ${b} ${h} ${p}`;
      }
      return _ === s.Correct ? m : (0, r.not)(m);
      function P(N = r.nil) {
        return (0, r.and)((0, r._)`typeof ${b} == "number"`, N, S ? (0, r._)`isFinite(${b})` : r.nil);
      }
    }
    Ce.checkDataType = g;
    function x(p, b, S, _) {
      if (p.length === 1) return g(p[0], b, S, _);
      let h;
      const m = (0, a.toHash)(p);
      if (m.array && m.object) {
        const P = (0, r._)`typeof ${b} != "object"`;
        h = m.null ? P : (0, r._)`!${b} || ${P}`, delete m.null, delete m.array, delete m.object;
      } else h = r.nil;
      m.number && delete m.integer;
      for (const P in m) h = (0, r.and)(h, g(P, b, S, _));
      return h;
    }
    Ce.checkDataTypes = x;
    const w = {
      message: ({ schema: p }) => `must be ${p}`,
      params: ({ schema: p, schemaValue: b }) => typeof p == "string" ? (0, r._)`{type: ${p}}` : (0, r._)`{type: ${b}}`
    };
    function d(p) {
      const b = f(p);
      (0, n.reportError)(b, w);
    }
    Ce.reportTypeError = d;
    function f(p) {
      const { gen: b, data: S, schema: _ } = p, h = (0, a.schemaRefOrVal)(p, _, "type");
      return {
        gen: b,
        keyword: "type",
        data: S,
        schema: _.type,
        schemaCode: h,
        schemaValue: h,
        parentSchema: _,
        params: {},
        it: p
      };
    }
    return Ce;
  }
  var en = {}, Zs;
  function bu() {
    if (Zs) return en;
    Zs = 1, Object.defineProperty(en, "__esModule", {
      value: true
    }), en.assignDefaults = void 0;
    const e = me(), t = ye();
    function n(a, s) {
      const { properties: o, items: i } = a.schema;
      if (s === "object" && o) for (const c in o) r(a, c, o[c].default);
      else s === "array" && Array.isArray(i) && i.forEach((c, l) => r(a, l, c.default));
    }
    en.assignDefaults = n;
    function r(a, s, o) {
      const { gen: i, compositeRule: c, data: l, opts: u } = a;
      if (o === void 0) return;
      const v = (0, e._)`${l}${(0, e.getProperty)(s)}`;
      if (c) {
        (0, t.checkStrictMode)(a, `default is ignored for: ${v}`);
        return;
      }
      let y = (0, e._)`${v} === undefined`;
      u.useDefaults === "empty" && (y = (0, e._)`${y} || ${v} === null || ${v} === ""`), i.if(y, (0, e._)`${v} = ${(0, e.stringify)(o)}`);
    }
    return en;
  }
  var Ve = {}, _e = {}, Qs;
  function Ke() {
    if (Qs) return _e;
    Qs = 1, Object.defineProperty(_e, "__esModule", {
      value: true
    }), _e.validateUnion = _e.validateArray = _e.usePattern = _e.callValidateCode = _e.schemaProperties = _e.allSchemaProperties = _e.noPropertyInData = _e.propertyInData = _e.isOwnProperty = _e.hasPropFunc = _e.reportMissingProp = _e.checkMissingProp = _e.checkReportMissingProp = void 0;
    const e = me(), t = ye(), n = xt(), r = ye();
    function a(p, b) {
      const { gen: S, data: _, it: h } = p;
      S.if(u(S, _, b, h.opts.ownProperties), () => {
        p.setParams({
          missingProperty: (0, e._)`${b}`
        }, true), p.error();
      });
    }
    _e.checkReportMissingProp = a;
    function s({ gen: p, data: b, it: { opts: S } }, _, h) {
      return (0, e.or)(..._.map((m) => (0, e.and)(u(p, b, m, S.ownProperties), (0, e._)`${h} = ${m}`)));
    }
    _e.checkMissingProp = s;
    function o(p, b) {
      p.setParams({
        missingProperty: b
      }, true), p.error();
    }
    _e.reportMissingProp = o;
    function i(p) {
      return p.scopeValue("func", {
        ref: Object.prototype.hasOwnProperty,
        code: (0, e._)`Object.prototype.hasOwnProperty`
      });
    }
    _e.hasPropFunc = i;
    function c(p, b, S) {
      return (0, e._)`${i(p)}.call(${b}, ${S})`;
    }
    _e.isOwnProperty = c;
    function l(p, b, S, _) {
      const h = (0, e._)`${b}${(0, e.getProperty)(S)} !== undefined`;
      return _ ? (0, e._)`${h} && ${c(p, b, S)}` : h;
    }
    _e.propertyInData = l;
    function u(p, b, S, _) {
      const h = (0, e._)`${b}${(0, e.getProperty)(S)} === undefined`;
      return _ ? (0, e.or)(h, (0, e.not)(c(p, b, S))) : h;
    }
    _e.noPropertyInData = u;
    function v(p) {
      return p ? Object.keys(p).filter((b) => b !== "__proto__") : [];
    }
    _e.allSchemaProperties = v;
    function y(p, b) {
      return v(b).filter((S) => !(0, t.alwaysValidSchema)(p, b[S]));
    }
    _e.schemaProperties = y;
    function g({ schemaCode: p, data: b, it: { gen: S, topSchemaRef: _, schemaPath: h, errorPath: m }, it: P }, N, C, T) {
      const O = T ? (0, e._)`${p}, ${b}, ${_}${h}` : b, F = [
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
      P.opts.dynamicRef && F.push([
        n.default.dynamicAnchors,
        n.default.dynamicAnchors
      ]);
      const z = (0, e._)`${O}, ${S.object(...F)}`;
      return C !== e.nil ? (0, e._)`${N}.call(${C}, ${z})` : (0, e._)`${N}(${z})`;
    }
    _e.callValidateCode = g;
    const x = (0, e._)`new RegExp`;
    function w({ gen: p, it: { opts: b } }, S) {
      const _ = b.unicodeRegExp ? "u" : "", { regExp: h } = b.code, m = h(S, _);
      return p.scopeValue("pattern", {
        key: m.toString(),
        ref: m,
        code: (0, e._)`${h.code === "new RegExp" ? x : (0, r.useFunc)(p, h)}(${S}, ${_})`
      });
    }
    _e.usePattern = w;
    function d(p) {
      const { gen: b, data: S, keyword: _, it: h } = p, m = b.name("valid");
      if (h.allErrors) {
        const N = b.let("valid", true);
        return P(() => b.assign(N, false)), N;
      }
      return b.var(m, true), P(() => b.break()), m;
      function P(N) {
        const C = b.const("len", (0, e._)`${S}.length`);
        b.forRange("i", 0, C, (T) => {
          p.subschema({
            keyword: _,
            dataProp: T,
            dataPropType: t.Type.Num
          }, m), b.if((0, e.not)(m), N);
        });
      }
    }
    _e.validateArray = d;
    function f(p) {
      const { gen: b, schema: S, keyword: _, it: h } = p;
      if (!Array.isArray(S)) throw new Error("ajv implementation error");
      if (S.some((C) => (0, t.alwaysValidSchema)(h, C)) && !h.opts.unevaluated) return;
      const P = b.let("valid", false), N = b.name("_valid");
      b.block(() => S.forEach((C, T) => {
        const O = p.subschema({
          keyword: _,
          schemaProp: T,
          compositeRule: true
        }, N);
        b.assign(P, (0, e._)`${P} || ${N}`), p.mergeValidEvaluated(O, N) || b.if((0, e.not)(P));
      })), p.result(P, () => p.reset(), () => p.error(true));
    }
    return _e.validateUnion = f, _e;
  }
  var eo;
  function xu() {
    if (eo) return Ve;
    eo = 1, Object.defineProperty(Ve, "__esModule", {
      value: true
    }), Ve.validateKeywordUsage = Ve.validSchemaType = Ve.funcKeywordCode = Ve.macroKeywordCode = void 0;
    const e = me(), t = xt(), n = Ke(), r = Ir();
    function a(y, g) {
      const { gen: x, keyword: w, schema: d, parentSchema: f, it: p } = y, b = g.macro.call(p.self, d, f, p), S = l(x, w, b);
      p.opts.validateSchema !== false && p.self.validateSchema(b, true);
      const _ = x.name("valid");
      y.subschema({
        schema: b,
        schemaPath: e.nil,
        errSchemaPath: `${p.errSchemaPath}/${w}`,
        topSchemaRef: S,
        compositeRule: true
      }, _), y.pass(_, () => y.error(true));
    }
    Ve.macroKeywordCode = a;
    function s(y, g) {
      var x;
      const { gen: w, keyword: d, schema: f, parentSchema: p, $data: b, it: S } = y;
      c(S, g);
      const _ = !b && g.compile ? g.compile.call(S.self, f, p, S) : g.validate, h = l(w, d, _), m = w.let("valid");
      y.block$data(m, P), y.ok((x = g.valid) !== null && x !== void 0 ? x : m);
      function P() {
        if (g.errors === false) T(), g.modifying && o(y), O(() => y.error());
        else {
          const F = g.async ? N() : C();
          g.modifying && o(y), O(() => i(y, F));
        }
      }
      function N() {
        const F = w.let("ruleErrs", null);
        return w.try(() => T((0, e._)`await `), (z) => w.assign(m, false).if((0, e._)`${z} instanceof ${S.ValidationError}`, () => w.assign(F, (0, e._)`${z}.errors`), () => w.throw(z))), F;
      }
      function C() {
        const F = (0, e._)`${h}.errors`;
        return w.assign(F, null), T(e.nil), F;
      }
      function T(F = g.async ? (0, e._)`await ` : e.nil) {
        const z = S.opts.passContext ? t.default.this : t.default.self, W = !("compile" in g && !b || g.schema === false);
        w.assign(m, (0, e._)`${F}${(0, n.callValidateCode)(y, h, z, W)}`, g.modifying);
      }
      function O(F) {
        var z;
        w.if((0, e.not)((z = g.valid) !== null && z !== void 0 ? z : m), F);
      }
    }
    Ve.funcKeywordCode = s;
    function o(y) {
      const { gen: g, data: x, it: w } = y;
      g.if(w.parentData, () => g.assign(x, (0, e._)`${w.parentData}[${w.parentDataProperty}]`));
    }
    function i(y, g) {
      const { gen: x } = y;
      x.if((0, e._)`Array.isArray(${g})`, () => {
        x.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${g} : ${t.default.vErrors}.concat(${g})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, r.extendErrors)(y);
      }, () => y.error());
    }
    function c({ schemaEnv: y }, g) {
      if (g.async && !y.$async) throw new Error("async keyword in sync schema");
    }
    function l(y, g, x) {
      if (x === void 0) throw new Error(`keyword "${g}" failed to compile`);
      return y.scopeValue("keyword", typeof x == "function" ? {
        ref: x
      } : {
        ref: x,
        code: (0, e.stringify)(x)
      });
    }
    function u(y, g, x = false) {
      return !g.length || g.some((w) => w === "array" ? Array.isArray(y) : w === "object" ? y && typeof y == "object" && !Array.isArray(y) : typeof y == w || x && typeof y > "u");
    }
    Ve.validSchemaType = u;
    function v({ schema: y, opts: g, self: x, errSchemaPath: w }, d, f) {
      if (Array.isArray(d.keyword) ? !d.keyword.includes(f) : d.keyword !== f) throw new Error("ajv implementation error");
      const p = d.dependencies;
      if (p == null ? void 0 : p.some((b) => !Object.prototype.hasOwnProperty.call(y, b))) throw new Error(`parent schema must have dependencies of ${f}: ${p.join(",")}`);
      if (d.validateSchema && !d.validateSchema(y[f])) {
        const S = `keyword "${f}" value is invalid at path "${w}": ` + x.errorsText(d.validateSchema.errors);
        if (g.validateSchema === "log") x.logger.error(S);
        else throw new Error(S);
      }
    }
    return Ve.validateKeywordUsage = v, Ve;
  }
  var ct = {}, to;
  function Su() {
    if (to) return ct;
    to = 1, Object.defineProperty(ct, "__esModule", {
      value: true
    }), ct.extendSubschemaMode = ct.extendSubschemaData = ct.getSubschema = void 0;
    const e = me(), t = ye();
    function n(s, { keyword: o, schemaProp: i, schema: c, schemaPath: l, errSchemaPath: u, topSchemaRef: v }) {
      if (o !== void 0 && c !== void 0) throw new Error('both "keyword" and "schema" passed, only one allowed');
      if (o !== void 0) {
        const y = s.schema[o];
        return i === void 0 ? {
          schema: y,
          schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(o)}`,
          errSchemaPath: `${s.errSchemaPath}/${o}`
        } : {
          schema: y[i],
          schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(o)}${(0, e.getProperty)(i)}`,
          errSchemaPath: `${s.errSchemaPath}/${o}/${(0, t.escapeFragment)(i)}`
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
    ct.getSubschema = n;
    function r(s, o, { dataProp: i, dataPropType: c, data: l, dataTypes: u, propertyName: v }) {
      if (l !== void 0 && i !== void 0) throw new Error('both "data" and "dataProp" passed, only one allowed');
      const { gen: y } = o;
      if (i !== void 0) {
        const { errorPath: x, dataPathArr: w, opts: d } = o, f = y.let("data", (0, e._)`${o.data}${(0, e.getProperty)(i)}`, true);
        g(f), s.errorPath = (0, e.str)`${x}${(0, t.getErrorPath)(i, c, d.jsPropertySyntax)}`, s.parentDataProperty = (0, e._)`${i}`, s.dataPathArr = [
          ...w,
          s.parentDataProperty
        ];
      }
      if (l !== void 0) {
        const x = l instanceof e.Name ? l : y.let("data", l, true);
        g(x), v !== void 0 && (s.propertyName = v);
      }
      u && (s.dataTypes = u);
      function g(x) {
        s.data = x, s.dataLevel = o.dataLevel + 1, s.dataTypes = [], o.definedProperties = /* @__PURE__ */ new Set(), s.parentData = o.data, s.dataNames = [
          ...o.dataNames,
          x
        ];
      }
    }
    ct.extendSubschemaData = r;
    function a(s, { jtdDiscriminator: o, jtdMetadata: i, compositeRule: c, createErrors: l, allErrors: u }) {
      c !== void 0 && (s.compositeRule = c), l !== void 0 && (s.createErrors = l), u !== void 0 && (s.allErrors = u), s.jtdDiscriminator = o, s.jtdMetadata = i;
    }
    return ct.extendSubschemaMode = a, ct;
  }
  var Re = {}, pa, no;
  function Wi() {
    return no || (no = 1, pa = function e(t, n) {
      if (t === n) return true;
      if (t && n && typeof t == "object" && typeof n == "object") {
        if (t.constructor !== n.constructor) return false;
        var r, a, s;
        if (Array.isArray(t)) {
          if (r = t.length, r != n.length) return false;
          for (a = r; a-- !== 0; ) if (!e(t[a], n[a])) return false;
          return true;
        }
        if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
        if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
        if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
        if (s = Object.keys(t), r = s.length, r !== Object.keys(n).length) return false;
        for (a = r; a-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(n, s[a])) return false;
        for (a = r; a-- !== 0; ) {
          var o = s[a];
          if (!e(t[o], n[o])) return false;
        }
        return true;
      }
      return t !== t && n !== n;
    }), pa;
  }
  var ma = {
    exports: {}
  }, ro;
  function wu() {
    if (ro) return ma.exports;
    ro = 1;
    var e = ma.exports = function(r, a, s) {
      typeof a == "function" && (s = a, a = {}), s = a.cb || s;
      var o = typeof s == "function" ? s : s.pre || function() {
      }, i = s.post || function() {
      };
      t(a, o, i, r, "", r);
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
    function t(r, a, s, o, i, c, l, u, v, y) {
      if (o && typeof o == "object" && !Array.isArray(o)) {
        a(o, i, c, l, u, v, y);
        for (var g in o) {
          var x = o[g];
          if (Array.isArray(x)) {
            if (g in e.arrayKeywords) for (var w = 0; w < x.length; w++) t(r, a, s, x[w], i + "/" + g + "/" + w, c, i, g, o, w);
          } else if (g in e.propsKeywords) {
            if (x && typeof x == "object") for (var d in x) t(r, a, s, x[d], i + "/" + g + "/" + n(d), c, i, g, o, d);
          } else (g in e.keywords || r.allKeys && !(g in e.skipKeywords)) && t(r, a, s, x, i + "/" + g, c, i, g, o);
        }
        s(o, i, c, l, u, v, y);
      }
    }
    function n(r) {
      return r.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    return ma.exports;
  }
  var ao;
  function Tr() {
    if (ao) return Re;
    ao = 1, Object.defineProperty(Re, "__esModule", {
      value: true
    }), Re.getSchemaRefs = Re.resolveUrl = Re.normalizeId = Re._getFullPath = Re.getFullPath = Re.inlineRef = void 0;
    const e = ye(), t = Wi(), n = wu(), r = /* @__PURE__ */ new Set([
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
    function a(w, d = true) {
      return typeof w == "boolean" ? true : d === true ? !o(w) : d ? i(w) <= d : false;
    }
    Re.inlineRef = a;
    const s = /* @__PURE__ */ new Set([
      "$ref",
      "$recursiveRef",
      "$recursiveAnchor",
      "$dynamicRef",
      "$dynamicAnchor"
    ]);
    function o(w) {
      for (const d in w) {
        if (s.has(d)) return true;
        const f = w[d];
        if (Array.isArray(f) && f.some(o) || typeof f == "object" && o(f)) return true;
      }
      return false;
    }
    function i(w) {
      let d = 0;
      for (const f in w) {
        if (f === "$ref") return 1 / 0;
        if (d++, !r.has(f) && (typeof w[f] == "object" && (0, e.eachItem)(w[f], (p) => d += i(p)), d === 1 / 0)) return 1 / 0;
      }
      return d;
    }
    function c(w, d = "", f) {
      f !== false && (d = v(d));
      const p = w.parse(d);
      return l(w, p);
    }
    Re.getFullPath = c;
    function l(w, d) {
      return w.serialize(d).split("#")[0] + "#";
    }
    Re._getFullPath = l;
    const u = /#\/?$/;
    function v(w) {
      return w ? w.replace(u, "") : "";
    }
    Re.normalizeId = v;
    function y(w, d, f) {
      return f = v(f), w.resolve(d, f);
    }
    Re.resolveUrl = y;
    const g = /^[a-z_][-a-z0-9._]*$/i;
    function x(w, d) {
      if (typeof w == "boolean") return {};
      const { schemaId: f, uriResolver: p } = this.opts, b = v(w[f] || d), S = {
        "": b
      }, _ = c(p, b, false), h = {}, m = /* @__PURE__ */ new Set();
      return n(w, {
        allKeys: true
      }, (C, T, O, F) => {
        if (F === void 0) return;
        const z = _ + T;
        let W = S[F];
        typeof C[f] == "string" && (W = X.call(this, C[f])), ie.call(this, C.$anchor), ie.call(this, C.$dynamicAnchor), S[T] = W;
        function X(oe) {
          const te = this.opts.uriResolver.resolve;
          if (oe = v(W ? te(W, oe) : oe), m.has(oe)) throw N(oe);
          m.add(oe);
          let V = this.refs[oe];
          return typeof V == "string" && (V = this.refs[V]), typeof V == "object" ? P(C, V.schema, oe) : oe !== v(z) && (oe[0] === "#" ? (P(C, h[oe], oe), h[oe] = C) : this.refs[oe] = z), oe;
        }
        function ie(oe) {
          if (typeof oe == "string") {
            if (!g.test(oe)) throw new Error(`invalid anchor "${oe}"`);
            X.call(this, `#${oe}`);
          }
        }
      }), h;
      function P(C, T, O) {
        if (T !== void 0 && !t(C, T)) throw N(O);
      }
      function N(C) {
        return new Error(`reference "${C}" resolves to more than one schema`);
      }
    }
    return Re.getSchemaRefs = x, Re;
  }
  var so;
  function Dr() {
    if (so) return ot;
    so = 1, Object.defineProperty(ot, "__esModule", {
      value: true
    }), ot.getData = ot.KeywordCxt = ot.validateFunctionCode = void 0;
    const e = vu(), t = _r(), n = Vi(), r = _r(), a = bu(), s = xu(), o = Su(), i = me(), c = xt(), l = Tr(), u = ye(), v = Ir();
    function y(R) {
      if (_(R) && (m(R), S(R))) {
        d(R);
        return;
      }
      g(R, () => (0, e.topBoolOrEmptySchema)(R));
    }
    ot.validateFunctionCode = y;
    function g({ gen: R, validateName: M, schema: K, schemaEnv: Y, opts: U }, J) {
      U.code.es5 ? R.func(M, (0, i._)`${c.default.data}, ${c.default.valCxt}`, Y.$async, () => {
        R.code((0, i._)`"use strict"; ${p(K, U)}`), w(R, U), R.code(J);
      }) : R.func(M, (0, i._)`${c.default.data}, ${x(U)}`, Y.$async, () => R.code(p(K, U)).code(J));
    }
    function x(R) {
      return (0, i._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${R.dynamicRef ? (0, i._)`, ${c.default.dynamicAnchors}={}` : i.nil}}={}`;
    }
    function w(R, M) {
      R.if(c.default.valCxt, () => {
        R.var(c.default.instancePath, (0, i._)`${c.default.valCxt}.${c.default.instancePath}`), R.var(c.default.parentData, (0, i._)`${c.default.valCxt}.${c.default.parentData}`), R.var(c.default.parentDataProperty, (0, i._)`${c.default.valCxt}.${c.default.parentDataProperty}`), R.var(c.default.rootData, (0, i._)`${c.default.valCxt}.${c.default.rootData}`), M.dynamicRef && R.var(c.default.dynamicAnchors, (0, i._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
      }, () => {
        R.var(c.default.instancePath, (0, i._)`""`), R.var(c.default.parentData, (0, i._)`undefined`), R.var(c.default.parentDataProperty, (0, i._)`undefined`), R.var(c.default.rootData, c.default.data), M.dynamicRef && R.var(c.default.dynamicAnchors, (0, i._)`{}`);
      });
    }
    function d(R) {
      const { schema: M, opts: K, gen: Y } = R;
      g(R, () => {
        K.$comment && M.$comment && F(R), C(R), Y.let(c.default.vErrors, null), Y.let(c.default.errors, 0), K.unevaluated && f(R), P(R), z(R);
      });
    }
    function f(R) {
      const { gen: M, validateName: K } = R;
      R.evaluated = M.const("evaluated", (0, i._)`${K}.evaluated`), M.if((0, i._)`${R.evaluated}.dynamicProps`, () => M.assign((0, i._)`${R.evaluated}.props`, (0, i._)`undefined`)), M.if((0, i._)`${R.evaluated}.dynamicItems`, () => M.assign((0, i._)`${R.evaluated}.items`, (0, i._)`undefined`));
    }
    function p(R, M) {
      const K = typeof R == "object" && R[M.schemaId];
      return K && (M.code.source || M.code.process) ? (0, i._)`/*# sourceURL=${K} */` : i.nil;
    }
    function b(R, M) {
      if (_(R) && (m(R), S(R))) {
        h(R, M);
        return;
      }
      (0, e.boolOrEmptySchema)(R, M);
    }
    function S({ schema: R, self: M }) {
      if (typeof R == "boolean") return !R;
      for (const K in R) if (M.RULES.all[K]) return true;
      return false;
    }
    function _(R) {
      return typeof R.schema != "boolean";
    }
    function h(R, M) {
      const { schema: K, gen: Y, opts: U } = R;
      U.$comment && K.$comment && F(R), T(R), O(R);
      const J = Y.const("_errs", c.default.errors);
      P(R, J), Y.var(M, (0, i._)`${J} === ${c.default.errors}`);
    }
    function m(R) {
      (0, u.checkUnknownRules)(R), N(R);
    }
    function P(R, M) {
      if (R.opts.jtd) return X(R, [], false, M);
      const K = (0, t.getSchemaTypes)(R.schema), Y = (0, t.coerceAndCheckDataType)(R, K);
      X(R, K, !Y, M);
    }
    function N(R) {
      const { schema: M, errSchemaPath: K, opts: Y, self: U } = R;
      M.$ref && Y.ignoreKeywordsWithRef && (0, u.schemaHasRulesButRef)(M, U.RULES) && U.logger.warn(`$ref: keywords ignored in schema at path "${K}"`);
    }
    function C(R) {
      const { schema: M, opts: K } = R;
      M.default !== void 0 && K.useDefaults && K.strictSchema && (0, u.checkStrictMode)(R, "default is ignored in the schema root");
    }
    function T(R) {
      const M = R.schema[R.opts.schemaId];
      M && (R.baseId = (0, l.resolveUrl)(R.opts.uriResolver, R.baseId, M));
    }
    function O(R) {
      if (R.schema.$async && !R.schemaEnv.$async) throw new Error("async schema in sync schema");
    }
    function F({ gen: R, schemaEnv: M, schema: K, errSchemaPath: Y, opts: U }) {
      const J = K.$comment;
      if (U.$comment === true) R.code((0, i._)`${c.default.self}.logger.log(${J})`);
      else if (typeof U.$comment == "function") {
        const ce = (0, i.str)`${Y}/$comment`, Se = R.scopeValue("root", {
          ref: M.root
        });
        R.code((0, i._)`${c.default.self}.opts.$comment(${J}, ${ce}, ${Se}.schema)`);
      }
    }
    function z(R) {
      const { gen: M, schemaEnv: K, validateName: Y, ValidationError: U, opts: J } = R;
      K.$async ? M.if((0, i._)`${c.default.errors} === 0`, () => M.return(c.default.data), () => M.throw((0, i._)`new ${U}(${c.default.vErrors})`)) : (M.assign((0, i._)`${Y}.errors`, c.default.vErrors), J.unevaluated && W(R), M.return((0, i._)`${c.default.errors} === 0`));
    }
    function W({ gen: R, evaluated: M, props: K, items: Y }) {
      K instanceof i.Name && R.assign((0, i._)`${M}.props`, K), Y instanceof i.Name && R.assign((0, i._)`${M}.items`, Y);
    }
    function X(R, M, K, Y) {
      const { gen: U, schema: J, data: ce, allErrors: Se, opts: be, self: se } = R, { RULES: he } = se;
      if (J.$ref && (be.ignoreKeywordsWithRef || !(0, u.schemaHasRulesButRef)(J, he))) {
        U.block(() => ne(R, "$ref", he.all.$ref.definition));
        return;
      }
      be.jtd || oe(R, M), U.block(() => {
        for (const ue of he.rules) Pe(ue);
        Pe(he.post);
      });
      function Pe(ue) {
        (0, n.shouldUseGroup)(J, ue) && (ue.type ? (U.if((0, r.checkDataType)(ue.type, ce, be.strictNumbers)), ie(R, ue), M.length === 1 && M[0] === ue.type && K && (U.else(), (0, r.reportTypeError)(R)), U.endIf()) : ie(R, ue), Se || U.if((0, i._)`${c.default.errors} === ${Y || 0}`));
      }
    }
    function ie(R, M) {
      const { gen: K, schema: Y, opts: { useDefaults: U } } = R;
      U && (0, a.assignDefaults)(R, M.type), K.block(() => {
        for (const J of M.rules) (0, n.shouldUseRule)(Y, J) && ne(R, J.keyword, J.definition, M.type);
      });
    }
    function oe(R, M) {
      R.schemaEnv.meta || !R.opts.strictTypes || (te(R, M), R.opts.allowUnionTypes || V(R, M), D(R, R.dataTypes));
    }
    function te(R, M) {
      if (M.length) {
        if (!R.dataTypes.length) {
          R.dataTypes = M;
          return;
        }
        M.forEach((K) => {
          L(R.dataTypes, K) || I(R, `type "${K}" not allowed by context "${R.dataTypes.join(",")}"`);
        }), E(R, M);
      }
    }
    function V(R, M) {
      M.length > 1 && !(M.length === 2 && M.includes("null")) && I(R, "use allowUnionTypes to allow union type keyword");
    }
    function D(R, M) {
      const K = R.self.RULES.all;
      for (const Y in K) {
        const U = K[Y];
        if (typeof U == "object" && (0, n.shouldUseRule)(R.schema, U)) {
          const { type: J } = U.definition;
          J.length && !J.some((ce) => q(M, ce)) && I(R, `missing type "${J.join(",")}" for keyword "${Y}"`);
        }
      }
    }
    function q(R, M) {
      return R.includes(M) || M === "number" && R.includes("integer");
    }
    function L(R, M) {
      return R.includes(M) || M === "integer" && R.includes("number");
    }
    function E(R, M) {
      const K = [];
      for (const Y of R.dataTypes) L(M, Y) ? K.push(Y) : M.includes("integer") && Y === "number" && K.push("integer");
      R.dataTypes = K;
    }
    function I(R, M) {
      const K = R.schemaEnv.baseId + R.errSchemaPath;
      M += ` at "${K}" (strictTypes)`, (0, u.checkStrictMode)(R, M, R.opts.strictTypes);
    }
    class B {
      constructor(M, K, Y) {
        if ((0, s.validateKeywordUsage)(M, K, Y), this.gen = M.gen, this.allErrors = M.allErrors, this.keyword = Y, this.data = M.data, this.schema = M.schema[Y], this.$data = K.$data && M.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, u.schemaRefOrVal)(M, this.schema, Y, this.$data), this.schemaType = K.schemaType, this.parentSchema = M.schema, this.params = {}, this.it = M, this.def = K, this.$data) this.schemaCode = M.gen.const("vSchema", re(this.$data, M));
        else if (this.schemaCode = this.schemaValue, !(0, s.validSchemaType)(this.schema, K.schemaType, K.allowUndefined)) throw new Error(`${Y} value must be ${JSON.stringify(K.schemaType)}`);
        ("code" in K ? K.trackErrors : K.errors !== false) && (this.errsCount = M.gen.const("_errs", c.default.errors));
      }
      result(M, K, Y) {
        this.failResult((0, i.not)(M), K, Y);
      }
      failResult(M, K, Y) {
        this.gen.if(M), Y ? Y() : this.error(), K ? (this.gen.else(), K(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
      }
      pass(M, K) {
        this.failResult((0, i.not)(M), void 0, K);
      }
      fail(M) {
        if (M === void 0) {
          this.error(), this.allErrors || this.gen.if(false);
          return;
        }
        this.gen.if(M), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
      }
      fail$data(M) {
        if (!this.$data) return this.fail(M);
        const { schemaCode: K } = this;
        this.fail((0, i._)`${K} !== undefined && (${(0, i.or)(this.invalid$data(), M)})`);
      }
      error(M, K, Y) {
        if (K) {
          this.setParams(K), this._error(M, Y), this.setParams({});
          return;
        }
        this._error(M, Y);
      }
      _error(M, K) {
        (M ? v.reportExtraError : v.reportError)(this, this.def.error, K);
      }
      $dataError() {
        (0, v.reportError)(this, this.def.$dataError || v.keyword$DataError);
      }
      reset() {
        if (this.errsCount === void 0) throw new Error('add "trackErrors" to keyword definition');
        (0, v.resetErrorsCount)(this.gen, this.errsCount);
      }
      ok(M) {
        this.allErrors || this.gen.if(M);
      }
      setParams(M, K) {
        K ? Object.assign(this.params, M) : this.params = M;
      }
      block$data(M, K, Y = i.nil) {
        this.gen.block(() => {
          this.check$data(M, Y), K();
        });
      }
      check$data(M = i.nil, K = i.nil) {
        if (!this.$data) return;
        const { gen: Y, schemaCode: U, schemaType: J, def: ce } = this;
        Y.if((0, i.or)((0, i._)`${U} === undefined`, K)), M !== i.nil && Y.assign(M, true), (J.length || ce.validateSchema) && (Y.elseIf(this.invalid$data()), this.$dataError(), M !== i.nil && Y.assign(M, false)), Y.else();
      }
      invalid$data() {
        const { gen: M, schemaCode: K, schemaType: Y, def: U, it: J } = this;
        return (0, i.or)(ce(), Se());
        function ce() {
          if (Y.length) {
            if (!(K instanceof i.Name)) throw new Error("ajv implementation error");
            const be = Array.isArray(Y) ? Y : [
              Y
            ];
            return (0, i._)`${(0, r.checkDataTypes)(be, K, J.opts.strictNumbers, r.DataType.Wrong)}`;
          }
          return i.nil;
        }
        function Se() {
          if (U.validateSchema) {
            const be = M.scopeValue("validate$data", {
              ref: U.validateSchema
            });
            return (0, i._)`!${be}(${K})`;
          }
          return i.nil;
        }
      }
      subschema(M, K) {
        const Y = (0, o.getSubschema)(this.it, M);
        (0, o.extendSubschemaData)(Y, this.it, M), (0, o.extendSubschemaMode)(Y, M);
        const U = {
          ...this.it,
          ...Y,
          items: void 0,
          props: void 0
        };
        return b(U, K), U;
      }
      mergeEvaluated(M, K) {
        const { it: Y, gen: U } = this;
        Y.opts.unevaluated && (Y.props !== true && M.props !== void 0 && (Y.props = u.mergeEvaluated.props(U, M.props, Y.props, K)), Y.items !== true && M.items !== void 0 && (Y.items = u.mergeEvaluated.items(U, M.items, Y.items, K)));
      }
      mergeValidEvaluated(M, K) {
        const { it: Y, gen: U } = this;
        if (Y.opts.unevaluated && (Y.props !== true || Y.items !== true)) return U.if(K, () => this.mergeEvaluated(M, i.Name)), true;
      }
    }
    ot.KeywordCxt = B;
    function ne(R, M, K, Y) {
      const U = new B(R, K, M);
      "code" in K ? K.code(U, Y) : U.$data && K.validate ? (0, s.funcKeywordCode)(U, K) : "macro" in K ? (0, s.macroKeywordCode)(U, K) : (K.compile || K.validate) && (0, s.funcKeywordCode)(U, K);
    }
    const ee = /^\/(?:[^~]|~0|~1)*$/, fe = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function re(R, { dataLevel: M, dataNames: K, dataPathArr: Y }) {
      let U, J;
      if (R === "") return c.default.rootData;
      if (R[0] === "/") {
        if (!ee.test(R)) throw new Error(`Invalid JSON-pointer: ${R}`);
        U = R, J = c.default.rootData;
      } else {
        const se = fe.exec(R);
        if (!se) throw new Error(`Invalid JSON-pointer: ${R}`);
        const he = +se[1];
        if (U = se[2], U === "#") {
          if (he >= M) throw new Error(be("property/index", he));
          return Y[M - he];
        }
        if (he > M) throw new Error(be("data", he));
        if (J = K[M - he], !U) return J;
      }
      let ce = J;
      const Se = U.split("/");
      for (const se of Se) se && (J = (0, i._)`${J}${(0, i.getProperty)((0, u.unescapeJsonPointer)(se))}`, ce = (0, i._)`${ce} && ${J}`);
      return ce;
      function be(se, he) {
        return `Cannot access ${se} ${he} levels up, current level is ${M}`;
      }
    }
    return ot.getData = re, ot;
  }
  var Nn = {}, oo;
  function Fa() {
    if (oo) return Nn;
    oo = 1, Object.defineProperty(Nn, "__esModule", {
      value: true
    });
    class e extends Error {
      constructor(n) {
        super("validation failed"), this.errors = n, this.ajv = this.validation = true;
      }
    }
    return Nn.default = e, Nn;
  }
  var In = {}, io;
  function Rr() {
    if (io) return In;
    io = 1, Object.defineProperty(In, "__esModule", {
      value: true
    });
    const e = Tr();
    class t extends Error {
      constructor(r, a, s, o) {
        super(o || `can't resolve reference ${s} from id ${a}`), this.missingRef = (0, e.resolveUrl)(r, a, s), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(r, this.missingRef));
      }
    }
    return In.default = t, In;
  }
  var Me = {}, co;
  function qa() {
    if (co) return Me;
    co = 1, Object.defineProperty(Me, "__esModule", {
      value: true
    }), Me.resolveSchema = Me.getCompilingSchema = Me.resolveRef = Me.compileSchema = Me.SchemaEnv = void 0;
    const e = me(), t = Fa(), n = xt(), r = Tr(), a = ye(), s = Dr();
    class o {
      constructor(f) {
        var p;
        this.refs = {}, this.dynamicAnchors = {};
        let b;
        typeof f.schema == "object" && (b = f.schema), this.schema = f.schema, this.schemaId = f.schemaId, this.root = f.root || this, this.baseId = (p = f.baseId) !== null && p !== void 0 ? p : (0, r.normalizeId)(b == null ? void 0 : b[f.schemaId || "$id"]), this.schemaPath = f.schemaPath, this.localRefs = f.localRefs, this.meta = f.meta, this.$async = b == null ? void 0 : b.$async, this.refs = {};
      }
    }
    Me.SchemaEnv = o;
    function i(d) {
      const f = u.call(this, d);
      if (f) return f;
      const p = (0, r.getFullPath)(this.opts.uriResolver, d.root.baseId), { es5: b, lines: S } = this.opts.code, { ownProperties: _ } = this.opts, h = new e.CodeGen(this.scope, {
        es5: b,
        lines: S,
        ownProperties: _
      });
      let m;
      d.$async && (m = h.scopeValue("Error", {
        ref: t.default,
        code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
      }));
      const P = h.scopeName("validate");
      d.validateName = P;
      const N = {
        gen: h,
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
        topSchemaRef: h.scopeValue("schema", this.opts.code.source === true ? {
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
        this._compilations.add(d), (0, s.validateFunctionCode)(N), h.optimize(this.opts.code.optimize);
        const T = h.toString();
        C = `${h.scopeRefs(n.default.scope)}return ${T}`, this.opts.code.process && (C = this.opts.code.process(C, d));
        const F = new Function(`${n.default.self}`, `${n.default.scope}`, C)(this, this.scope.get());
        if (this.scope.value(P, {
          ref: F
        }), F.errors = null, F.schema = d.schema, F.schemaEnv = d, d.$async && (F.$async = true), this.opts.code.source === true && (F.source = {
          validateName: P,
          validateCode: T,
          scopeValues: h._values
        }), this.opts.unevaluated) {
          const { props: z, items: W } = N;
          F.evaluated = {
            props: z instanceof e.Name ? void 0 : z,
            items: W instanceof e.Name ? void 0 : W,
            dynamicProps: z instanceof e.Name,
            dynamicItems: W instanceof e.Name
          }, F.source && (F.source.evaluated = (0, e.stringify)(F.evaluated));
        }
        return d.validate = F, d;
      } catch (T) {
        throw delete d.validate, delete d.validateName, C && this.logger.error("Error compiling schema, function code:", C), T;
      } finally {
        this._compilations.delete(d);
      }
    }
    Me.compileSchema = i;
    function c(d, f, p) {
      var b;
      p = (0, r.resolveUrl)(this.opts.uriResolver, f, p);
      const S = d.refs[p];
      if (S) return S;
      let _ = y.call(this, d, p);
      if (_ === void 0) {
        const h = (b = d.localRefs) === null || b === void 0 ? void 0 : b[p], { schemaId: m } = this.opts;
        h && (_ = new o({
          schema: h,
          schemaId: m,
          root: d,
          baseId: f
        }));
      }
      if (_ !== void 0) return d.refs[p] = l.call(this, _);
    }
    Me.resolveRef = c;
    function l(d) {
      return (0, r.inlineRef)(d.schema, this.opts.inlineRefs) ? d.schema : d.validate ? d : i.call(this, d);
    }
    function u(d) {
      for (const f of this._compilations) if (v(f, d)) return f;
    }
    Me.getCompilingSchema = u;
    function v(d, f) {
      return d.schema === f.schema && d.root === f.root && d.baseId === f.baseId;
    }
    function y(d, f) {
      let p;
      for (; typeof (p = this.refs[f]) == "string"; ) f = p;
      return p || this.schemas[f] || g.call(this, d, f);
    }
    function g(d, f) {
      const p = this.opts.uriResolver.parse(f), b = (0, r._getFullPath)(this.opts.uriResolver, p);
      let S = (0, r.getFullPath)(this.opts.uriResolver, d.baseId, void 0);
      if (Object.keys(d.schema).length > 0 && b === S) return w.call(this, p, d);
      const _ = (0, r.normalizeId)(b), h = this.refs[_] || this.schemas[_];
      if (typeof h == "string") {
        const m = g.call(this, d, h);
        return typeof (m == null ? void 0 : m.schema) != "object" ? void 0 : w.call(this, p, m);
      }
      if (typeof (h == null ? void 0 : h.schema) == "object") {
        if (h.validate || i.call(this, h), _ === (0, r.normalizeId)(f)) {
          const { schema: m } = h, { schemaId: P } = this.opts, N = m[P];
          return N && (S = (0, r.resolveUrl)(this.opts.uriResolver, S, N)), new o({
            schema: m,
            schemaId: P,
            root: d,
            baseId: S
          });
        }
        return w.call(this, p, h);
      }
    }
    Me.resolveSchema = g;
    const x = /* @__PURE__ */ new Set([
      "properties",
      "patternProperties",
      "enum",
      "dependencies",
      "definitions"
    ]);
    function w(d, { baseId: f, schema: p, root: b }) {
      var S;
      if (((S = d.fragment) === null || S === void 0 ? void 0 : S[0]) !== "/") return;
      for (const m of d.fragment.slice(1).split("/")) {
        if (typeof p == "boolean") return;
        const P = p[(0, a.unescapeFragment)(m)];
        if (P === void 0) return;
        p = P;
        const N = typeof p == "object" && p[this.opts.schemaId];
        !x.has(m) && N && (f = (0, r.resolveUrl)(this.opts.uriResolver, f, N));
      }
      let _;
      if (typeof p != "boolean" && p.$ref && !(0, a.schemaHasRulesButRef)(p, this.RULES)) {
        const m = (0, r.resolveUrl)(this.opts.uriResolver, f, p.$ref);
        _ = g.call(this, b, m);
      }
      const { schemaId: h } = this.opts;
      if (_ = _ || new o({
        schema: p,
        schemaId: h,
        root: b,
        baseId: f
      }), _.schema !== _.root.schema) return _;
    }
    return Me;
  }
  const ku = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Pu = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Eu = "object", Cu = [
    "$data"
  ], $u = {
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
  }, Nu = false, Iu = {
    $id: ku,
    description: Pu,
    type: Eu,
    required: Cu,
    properties: $u,
    additionalProperties: Nu
  };
  var Tn = {}, tn = {
    exports: {}
  }, fa, lo;
  function Ui() {
    if (lo) return fa;
    lo = 1;
    const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
    function n(y) {
      let g = "", x = 0, w = 0;
      for (w = 0; w < y.length; w++) if (x = y[w].charCodeAt(0), x !== 48) {
        if (!(x >= 48 && x <= 57 || x >= 65 && x <= 70 || x >= 97 && x <= 102)) return "";
        g += y[w];
        break;
      }
      for (w += 1; w < y.length; w++) {
        if (x = y[w].charCodeAt(0), !(x >= 48 && x <= 57 || x >= 65 && x <= 70 || x >= 97 && x <= 102)) return "";
        g += y[w];
      }
      return g;
    }
    const r = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
    function a(y) {
      return y.length = 0, true;
    }
    function s(y, g, x) {
      if (y.length) {
        const w = n(y);
        if (w !== "") g.push(w);
        else return x.error = true, false;
        y.length = 0;
      }
      return true;
    }
    function o(y) {
      let g = 0;
      const x = {
        error: false,
        address: "",
        zone: ""
      }, w = [], d = [];
      let f = false, p = false, b = s;
      for (let S = 0; S < y.length; S++) {
        const _ = y[S];
        if (!(_ === "[" || _ === "]")) if (_ === ":") {
          if (f === true && (p = true), !b(d, w, x)) break;
          if (++g > 7) {
            x.error = true;
            break;
          }
          S > 0 && y[S - 1] === ":" && (f = true), w.push(":");
          continue;
        } else if (_ === "%") {
          if (!b(d, w, x)) break;
          b = a;
        } else {
          d.push(_);
          continue;
        }
      }
      return d.length && (b === a ? x.zone = d.join("") : p ? w.push(d.join("")) : w.push(n(d))), x.address = w.join(""), x;
    }
    function i(y) {
      if (c(y, ":") < 2) return {
        host: y,
        isIPV6: false
      };
      const g = o(y);
      if (g.error) return {
        host: y,
        isIPV6: false
      };
      {
        let x = g.address, w = g.address;
        return g.zone && (x += "%" + g.zone, w += "%25" + g.zone), {
          host: x,
          isIPV6: true,
          escapedHost: w
        };
      }
    }
    function c(y, g) {
      let x = 0;
      for (let w = 0; w < y.length; w++) y[w] === g && x++;
      return x;
    }
    function l(y) {
      let g = y;
      const x = [];
      let w = -1, d = 0;
      for (; d = g.length; ) {
        if (d === 1) {
          if (g === ".") break;
          if (g === "/") {
            x.push("/");
            break;
          } else {
            x.push(g);
            break;
          }
        } else if (d === 2) {
          if (g[0] === ".") {
            if (g[1] === ".") break;
            if (g[1] === "/") {
              g = g.slice(2);
              continue;
            }
          } else if (g[0] === "/" && (g[1] === "." || g[1] === "/")) {
            x.push("/");
            break;
          }
        } else if (d === 3 && g === "/..") {
          x.length !== 0 && x.pop(), x.push("/");
          break;
        }
        if (g[0] === ".") {
          if (g[1] === ".") {
            if (g[2] === "/") {
              g = g.slice(3);
              continue;
            }
          } else if (g[1] === "/") {
            g = g.slice(2);
            continue;
          }
        } else if (g[0] === "/" && g[1] === ".") {
          if (g[2] === "/") {
            g = g.slice(2);
            continue;
          } else if (g[2] === "." && g[3] === "/") {
            g = g.slice(3), x.length !== 0 && x.pop();
            continue;
          }
        }
        if ((w = g.indexOf("/", 1)) === -1) {
          x.push(g);
          break;
        } else x.push(g.slice(0, w)), g = g.slice(w);
      }
      return x.join("");
    }
    function u(y, g) {
      const x = g !== true ? escape : unescape;
      return y.scheme !== void 0 && (y.scheme = x(y.scheme)), y.userinfo !== void 0 && (y.userinfo = x(y.userinfo)), y.host !== void 0 && (y.host = x(y.host)), y.path !== void 0 && (y.path = x(y.path)), y.query !== void 0 && (y.query = x(y.query)), y.fragment !== void 0 && (y.fragment = x(y.fragment)), y;
    }
    function v(y) {
      const g = [];
      if (y.userinfo !== void 0 && (g.push(y.userinfo), g.push("@")), y.host !== void 0) {
        let x = unescape(y.host);
        if (!t(x)) {
          const w = i(x);
          w.isIPV6 === true ? x = `[${w.escapedHost}]` : x = y.host;
        }
        g.push(x);
      }
      return (typeof y.port == "number" || typeof y.port == "string") && (g.push(":"), g.push(String(y.port))), g.length ? g.join("") : void 0;
    }
    return fa = {
      nonSimpleDomain: r,
      recomposeAuthority: v,
      normalizeComponentEncoding: u,
      removeDotSegments: l,
      isIPv4: t,
      isUUID: e,
      normalizeIPv6: i,
      stringArrayToHexStripped: n
    }, fa;
  }
  var ha, uo;
  function Tu() {
    if (uo) return ha;
    uo = 1;
    const { isUUID: e } = Ui(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = [
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
    function s(_) {
      return _.host || (_.error = _.error || "HTTP URIs must have a host."), _;
    }
    function o(_) {
      const h = String(_.scheme).toLowerCase() === "https";
      return (_.port === (h ? 443 : 80) || _.port === "") && (_.port = void 0), _.path || (_.path = "/"), _;
    }
    function i(_) {
      return _.secure = a(_), _.resourceName = (_.path || "/") + (_.query ? "?" + _.query : ""), _.path = void 0, _.query = void 0, _;
    }
    function c(_) {
      if ((_.port === (a(_) ? 443 : 80) || _.port === "") && (_.port = void 0), typeof _.secure == "boolean" && (_.scheme = _.secure ? "wss" : "ws", _.secure = void 0), _.resourceName) {
        const [h, m] = _.resourceName.split("?");
        _.path = h && h !== "/" ? h : void 0, _.query = m, _.resourceName = void 0;
      }
      return _.fragment = void 0, _;
    }
    function l(_, h) {
      if (!_.path) return _.error = "URN can not be parsed", _;
      const m = _.path.match(t);
      if (m) {
        const P = h.scheme || _.scheme || "urn";
        _.nid = m[1].toLowerCase(), _.nss = m[2];
        const N = `${P}:${h.nid || _.nid}`, C = S(N);
        _.path = void 0, C && (_ = C.parse(_, h));
      } else _.error = _.error || "URN can not be parsed.";
      return _;
    }
    function u(_, h) {
      if (_.nid === void 0) throw new Error("URN without nid cannot be serialized");
      const m = h.scheme || _.scheme || "urn", P = _.nid.toLowerCase(), N = `${m}:${h.nid || P}`, C = S(N);
      C && (_ = C.serialize(_, h));
      const T = _, O = _.nss;
      return T.path = `${P || h.nid}:${O}`, h.skipEscape = true, T;
    }
    function v(_, h) {
      const m = _;
      return m.uuid = m.nss, m.nss = void 0, !h.tolerant && (!m.uuid || !e(m.uuid)) && (m.error = m.error || "UUID is not valid."), m;
    }
    function y(_) {
      const h = _;
      return h.nss = (_.uuid || "").toLowerCase(), h;
    }
    const g = {
      scheme: "http",
      domainHost: true,
      parse: s,
      serialize: o
    }, x = {
      scheme: "https",
      domainHost: g.domainHost,
      parse: s,
      serialize: o
    }, w = {
      scheme: "ws",
      domainHost: true,
      parse: i,
      serialize: c
    }, d = {
      scheme: "wss",
      domainHost: w.domainHost,
      parse: w.parse,
      serialize: w.serialize
    }, b = {
      http: g,
      https: x,
      ws: w,
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
        serialize: y,
        skipNormalize: true
      }
    };
    Object.setPrototypeOf(b, null);
    function S(_) {
      return _ && (b[_] || b[_.toLowerCase()]) || void 0;
    }
    return ha = {
      wsIsSecure: a,
      SCHEMES: b,
      isValidSchemeName: r,
      getSchemeHandler: S
    }, ha;
  }
  var po;
  function Du() {
    if (po) return tn.exports;
    po = 1;
    const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizeComponentEncoding: r, isIPv4: a, nonSimpleDomain: s } = Ui(), { SCHEMES: o, getSchemeHandler: i } = Tu();
    function c(d, f) {
      return typeof d == "string" ? d = y(x(d, f), f) : typeof d == "object" && (d = x(y(d, f), f)), d;
    }
    function l(d, f, p) {
      const b = p ? Object.assign({
        scheme: "null"
      }, p) : {
        scheme: "null"
      }, S = u(x(d, b), x(f, b), b, true);
      return b.skipEscape = true, y(S, b);
    }
    function u(d, f, p, b) {
      const S = {};
      return b || (d = x(y(d, p), p), f = x(y(f, p), p)), p = p || {}, !p.tolerant && f.scheme ? (S.scheme = f.scheme, S.userinfo = f.userinfo, S.host = f.host, S.port = f.port, S.path = t(f.path || ""), S.query = f.query) : (f.userinfo !== void 0 || f.host !== void 0 || f.port !== void 0 ? (S.userinfo = f.userinfo, S.host = f.host, S.port = f.port, S.path = t(f.path || ""), S.query = f.query) : (f.path ? (f.path[0] === "/" ? S.path = t(f.path) : ((d.userinfo !== void 0 || d.host !== void 0 || d.port !== void 0) && !d.path ? S.path = "/" + f.path : d.path ? S.path = d.path.slice(0, d.path.lastIndexOf("/") + 1) + f.path : S.path = f.path, S.path = t(S.path)), S.query = f.query) : (S.path = d.path, f.query !== void 0 ? S.query = f.query : S.query = d.query), S.userinfo = d.userinfo, S.host = d.host, S.port = d.port), S.scheme = d.scheme), S.fragment = f.fragment, S;
    }
    function v(d, f, p) {
      return typeof d == "string" ? (d = unescape(d), d = y(r(x(d, p), true), {
        ...p,
        skipEscape: true
      })) : typeof d == "object" && (d = y(r(d, true), {
        ...p,
        skipEscape: true
      })), typeof f == "string" ? (f = unescape(f), f = y(r(x(f, p), true), {
        ...p,
        skipEscape: true
      })) : typeof f == "object" && (f = y(r(f, true), {
        ...p,
        skipEscape: true
      })), d.toLowerCase() === f.toLowerCase();
    }
    function y(d, f) {
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
      }, b = Object.assign({}, f), S = [], _ = i(b.scheme || p.scheme);
      _ && _.serialize && _.serialize(p, b), p.path !== void 0 && (b.skipEscape ? p.path = unescape(p.path) : (p.path = escape(p.path), p.scheme !== void 0 && (p.path = p.path.split("%3A").join(":")))), b.reference !== "suffix" && p.scheme && S.push(p.scheme, ":");
      const h = n(p);
      if (h !== void 0 && (b.reference !== "suffix" && S.push("//"), S.push(h), p.path && p.path[0] !== "/" && S.push("/")), p.path !== void 0) {
        let m = p.path;
        !b.absolutePath && (!_ || !_.absolutePath) && (m = t(m)), h === void 0 && m[0] === "/" && m[1] === "/" && (m = "/%2F" + m.slice(2)), S.push(m);
      }
      return p.query !== void 0 && S.push("?", p.query), p.fragment !== void 0 && S.push("#", p.fragment), S.join("");
    }
    const g = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
    function x(d, f) {
      const p = Object.assign({}, f), b = {
        scheme: void 0,
        userinfo: void 0,
        host: "",
        port: void 0,
        path: "",
        query: void 0,
        fragment: void 0
      };
      let S = false;
      p.reference === "suffix" && (p.scheme ? d = p.scheme + ":" + d : d = "//" + d);
      const _ = d.match(g);
      if (_) {
        if (b.scheme = _[1], b.userinfo = _[3], b.host = _[4], b.port = parseInt(_[5], 10), b.path = _[6] || "", b.query = _[7], b.fragment = _[8], isNaN(b.port) && (b.port = _[5]), b.host) if (a(b.host) === false) {
          const P = e(b.host);
          b.host = P.host.toLowerCase(), S = P.isIPV6;
        } else S = true;
        b.scheme === void 0 && b.userinfo === void 0 && b.host === void 0 && b.port === void 0 && b.query === void 0 && !b.path ? b.reference = "same-document" : b.scheme === void 0 ? b.reference = "relative" : b.fragment === void 0 ? b.reference = "absolute" : b.reference = "uri", p.reference && p.reference !== "suffix" && p.reference !== b.reference && (b.error = b.error || "URI is not a " + p.reference + " reference.");
        const h = i(p.scheme || b.scheme);
        if (!p.unicodeSupport && (!h || !h.unicodeSupport) && b.host && (p.domainHost || h && h.domainHost) && S === false && s(b.host)) try {
          b.host = URL.domainToASCII(b.host.toLowerCase());
        } catch (m) {
          b.error = b.error || "Host's domain name can not be converted to ASCII: " + m;
        }
        (!h || h && !h.skipNormalize) && (d.indexOf("%") !== -1 && (b.scheme !== void 0 && (b.scheme = unescape(b.scheme)), b.host !== void 0 && (b.host = unescape(b.host))), b.path && (b.path = escape(unescape(b.path))), b.fragment && (b.fragment = encodeURI(decodeURIComponent(b.fragment)))), h && h.parse && h.parse(b, p);
      } else b.error = b.error || "URI can not be parsed.";
      return b;
    }
    const w = {
      SCHEMES: o,
      normalize: c,
      resolve: l,
      resolveComponent: u,
      equal: v,
      serialize: y,
      parse: x
    };
    return tn.exports = w, tn.exports.default = w, tn.exports.fastUri = w, tn.exports;
  }
  var mo;
  function Ru() {
    if (mo) return Tn;
    mo = 1, Object.defineProperty(Tn, "__esModule", {
      value: true
    });
    const e = Du();
    return e.code = 'require("ajv/dist/runtime/uri").default', Tn.default = e, Tn;
  }
  var fo;
  function Ou() {
    return fo || (fo = 1, (function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
      var t = Dr();
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
      const r = Fa(), a = Rr(), s = zi(), o = qa(), i = me(), c = Tr(), l = _r(), u = ye(), v = Iu, y = Ru(), g = (V, D) => new RegExp(V, D);
      g.code = "new RegExp";
      const x = [
        "removeAdditional",
        "useDefaults",
        "coerceTypes"
      ], w = /* @__PURE__ */ new Set([
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
      function b(V) {
        var D, q, L, E, I, B, ne, ee, fe, re, R, M, K, Y, U, J, ce, Se, be, se, he, Pe, ue, De, Gt;
        const rt = V.strict, Lt = (D = V.code) === null || D === void 0 ? void 0 : D.optimize, Mt = Lt === true || Lt === void 0 ? 1 : Lt || 0, at = (L = (q = V.code) === null || q === void 0 ? void 0 : q.regExp) !== null && L !== void 0 ? L : g, wt = (E = V.uriResolver) !== null && E !== void 0 ? E : y.default;
        return {
          strictSchema: (B = (I = V.strictSchema) !== null && I !== void 0 ? I : rt) !== null && B !== void 0 ? B : true,
          strictNumbers: (ee = (ne = V.strictNumbers) !== null && ne !== void 0 ? ne : rt) !== null && ee !== void 0 ? ee : true,
          strictTypes: (re = (fe = V.strictTypes) !== null && fe !== void 0 ? fe : rt) !== null && re !== void 0 ? re : "log",
          strictTuples: (M = (R = V.strictTuples) !== null && R !== void 0 ? R : rt) !== null && M !== void 0 ? M : "log",
          strictRequired: (Y = (K = V.strictRequired) !== null && K !== void 0 ? K : rt) !== null && Y !== void 0 ? Y : false,
          code: V.code ? {
            ...V.code,
            optimize: Mt,
            regExp: at
          } : {
            optimize: Mt,
            regExp: at
          },
          loopRequired: (U = V.loopRequired) !== null && U !== void 0 ? U : p,
          loopEnum: (J = V.loopEnum) !== null && J !== void 0 ? J : p,
          meta: (ce = V.meta) !== null && ce !== void 0 ? ce : true,
          messages: (Se = V.messages) !== null && Se !== void 0 ? Se : true,
          inlineRefs: (be = V.inlineRefs) !== null && be !== void 0 ? be : true,
          schemaId: (se = V.schemaId) !== null && se !== void 0 ? se : "$id",
          addUsedSchema: (he = V.addUsedSchema) !== null && he !== void 0 ? he : true,
          validateSchema: (Pe = V.validateSchema) !== null && Pe !== void 0 ? Pe : true,
          validateFormats: (ue = V.validateFormats) !== null && ue !== void 0 ? ue : true,
          unicodeRegExp: (De = V.unicodeRegExp) !== null && De !== void 0 ? De : true,
          int32range: (Gt = V.int32range) !== null && Gt !== void 0 ? Gt : true,
          uriResolver: wt
        };
      }
      class S {
        constructor(D = {}) {
          this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), D = this.opts = {
            ...D,
            ...b(D)
          };
          const { es5: q, lines: L } = this.opts.code;
          this.scope = new i.ValueScope({
            scope: {},
            prefixes: w,
            es5: q,
            lines: L
          }), this.logger = O(D.logger);
          const E = D.validateFormats;
          D.validateFormats = false, this.RULES = (0, s.getRules)(), _.call(this, d, D, "NOT SUPPORTED"), _.call(this, f, D, "DEPRECATED", "warn"), this._metaOpts = C.call(this), D.formats && P.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), D.keywords && N.call(this, D.keywords), typeof D.meta == "object" && this.addMetaSchema(D.meta), m.call(this), D.validateFormats = E;
        }
        _addVocabularies() {
          this.addKeyword("$async");
        }
        _addDefaultMetaSchema() {
          const { $data: D, meta: q, schemaId: L } = this.opts;
          let E = v;
          L === "id" && (E = {
            ...v
          }, E.id = E.$id, delete E.$id), q && D && this.addMetaSchema(E, E[L], false);
        }
        defaultMeta() {
          const { meta: D, schemaId: q } = this.opts;
          return this.opts.defaultMeta = typeof D == "object" ? D[q] || D : void 0;
        }
        validate(D, q) {
          let L;
          if (typeof D == "string") {
            if (L = this.getSchema(D), !L) throw new Error(`no schema with key or ref "${D}"`);
          } else L = this.compile(D);
          const E = L(q);
          return "$async" in L || (this.errors = L.errors), E;
        }
        compile(D, q) {
          const L = this._addSchema(D, q);
          return L.validate || this._compileSchemaEnv(L);
        }
        compileAsync(D, q) {
          if (typeof this.opts.loadSchema != "function") throw new Error("options.loadSchema should be a function");
          const { loadSchema: L } = this.opts;
          return E.call(this, D, q);
          async function E(re, R) {
            await I.call(this, re.$schema);
            const M = this._addSchema(re, R);
            return M.validate || B.call(this, M);
          }
          async function I(re) {
            re && !this.getSchema(re) && await E.call(this, {
              $ref: re
            }, true);
          }
          async function B(re) {
            try {
              return this._compileSchemaEnv(re);
            } catch (R) {
              if (!(R instanceof a.default)) throw R;
              return ne.call(this, R), await ee.call(this, R.missingSchema), B.call(this, re);
            }
          }
          function ne({ missingSchema: re, missingRef: R }) {
            if (this.refs[re]) throw new Error(`AnySchema ${re} is loaded but ${R} cannot be resolved`);
          }
          async function ee(re) {
            const R = await fe.call(this, re);
            this.refs[re] || await I.call(this, R.$schema), this.refs[re] || this.addSchema(R, re, q);
          }
          async function fe(re) {
            const R = this._loading[re];
            if (R) return R;
            try {
              return await (this._loading[re] = L(re));
            } finally {
              delete this._loading[re];
            }
          }
        }
        addSchema(D, q, L, E = this.opts.validateSchema) {
          if (Array.isArray(D)) {
            for (const B of D) this.addSchema(B, void 0, L, E);
            return this;
          }
          let I;
          if (typeof D == "object") {
            const { schemaId: B } = this.opts;
            if (I = D[B], I !== void 0 && typeof I != "string") throw new Error(`schema ${B} must be string`);
          }
          return q = (0, c.normalizeId)(q || I), this._checkUnique(q), this.schemas[q] = this._addSchema(D, L, q, E, true), this;
        }
        addMetaSchema(D, q, L = this.opts.validateSchema) {
          return this.addSchema(D, q, true, L), this;
        }
        validateSchema(D, q) {
          if (typeof D == "boolean") return true;
          let L;
          if (L = D.$schema, L !== void 0 && typeof L != "string") throw new Error("$schema must be a string");
          if (L = L || this.opts.defaultMeta || this.defaultMeta(), !L) return this.logger.warn("meta-schema not available"), this.errors = null, true;
          const E = this.validate(L, D);
          if (!E && q) {
            const I = "schema is invalid: " + this.errorsText();
            if (this.opts.validateSchema === "log") this.logger.error(I);
            else throw new Error(I);
          }
          return E;
        }
        getSchema(D) {
          let q;
          for (; typeof (q = h.call(this, D)) == "string"; ) D = q;
          if (q === void 0) {
            const { schemaId: L } = this.opts, E = new o.SchemaEnv({
              schema: {},
              schemaId: L
            });
            if (q = o.resolveSchema.call(this, E, D), !q) return;
            this.refs[D] = q;
          }
          return q.validate || this._compileSchemaEnv(q);
        }
        removeSchema(D) {
          if (D instanceof RegExp) return this._removeAllSchemas(this.schemas, D), this._removeAllSchemas(this.refs, D), this;
          switch (typeof D) {
            case "undefined":
              return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
            case "string": {
              const q = h.call(this, D);
              return typeof q == "object" && this._cache.delete(q.schema), delete this.schemas[D], delete this.refs[D], this;
            }
            case "object": {
              const q = D;
              this._cache.delete(q);
              let L = D[this.opts.schemaId];
              return L && (L = (0, c.normalizeId)(L), delete this.schemas[L], delete this.refs[L]), this;
            }
            default:
              throw new Error("ajv.removeSchema: invalid parameter");
          }
        }
        addVocabulary(D) {
          for (const q of D) this.addKeyword(q);
          return this;
        }
        addKeyword(D, q) {
          let L;
          if (typeof D == "string") L = D, typeof q == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), q.keyword = L);
          else if (typeof D == "object" && q === void 0) {
            if (q = D, L = q.keyword, Array.isArray(L) && !L.length) throw new Error("addKeywords: keyword must be string or non-empty array");
          } else throw new Error("invalid addKeywords parameters");
          if (z.call(this, L, q), !q) return (0, u.eachItem)(L, (I) => W.call(this, I)), this;
          ie.call(this, q);
          const E = {
            ...q,
            type: (0, l.getJSONTypes)(q.type),
            schemaType: (0, l.getJSONTypes)(q.schemaType)
          };
          return (0, u.eachItem)(L, E.type.length === 0 ? (I) => W.call(this, I, E) : (I) => E.type.forEach((B) => W.call(this, I, E, B))), this;
        }
        getKeyword(D) {
          const q = this.RULES.all[D];
          return typeof q == "object" ? q.definition : !!q;
        }
        removeKeyword(D) {
          const { RULES: q } = this;
          delete q.keywords[D], delete q.all[D];
          for (const L of q.rules) {
            const E = L.rules.findIndex((I) => I.keyword === D);
            E >= 0 && L.rules.splice(E, 1);
          }
          return this;
        }
        addFormat(D, q) {
          return typeof q == "string" && (q = new RegExp(q)), this.formats[D] = q, this;
        }
        errorsText(D = this.errors, { separator: q = ", ", dataVar: L = "data" } = {}) {
          return !D || D.length === 0 ? "No errors" : D.map((E) => `${L}${E.instancePath} ${E.message}`).reduce((E, I) => E + q + I);
        }
        $dataMetaSchema(D, q) {
          const L = this.RULES.all;
          D = JSON.parse(JSON.stringify(D));
          for (const E of q) {
            const I = E.split("/").slice(1);
            let B = D;
            for (const ne of I) B = B[ne];
            for (const ne in L) {
              const ee = L[ne];
              if (typeof ee != "object") continue;
              const { $data: fe } = ee.definition, re = B[ne];
              fe && re && (B[ne] = te(re));
            }
          }
          return D;
        }
        _removeAllSchemas(D, q) {
          for (const L in D) {
            const E = D[L];
            (!q || q.test(L)) && (typeof E == "string" ? delete D[L] : E && !E.meta && (this._cache.delete(E.schema), delete D[L]));
          }
        }
        _addSchema(D, q, L, E = this.opts.validateSchema, I = this.opts.addUsedSchema) {
          let B;
          const { schemaId: ne } = this.opts;
          if (typeof D == "object") B = D[ne];
          else {
            if (this.opts.jtd) throw new Error("schema must be object");
            if (typeof D != "boolean") throw new Error("schema must be object or boolean");
          }
          let ee = this._cache.get(D);
          if (ee !== void 0) return ee;
          L = (0, c.normalizeId)(B || L);
          const fe = c.getSchemaRefs.call(this, D, L);
          return ee = new o.SchemaEnv({
            schema: D,
            schemaId: ne,
            meta: q,
            baseId: L,
            localRefs: fe
          }), this._cache.set(ee.schema, ee), I && !L.startsWith("#") && (L && this._checkUnique(L), this.refs[L] = ee), E && this.validateSchema(D, true), ee;
        }
        _checkUnique(D) {
          if (this.schemas[D] || this.refs[D]) throw new Error(`schema with key or id "${D}" already exists`);
        }
        _compileSchemaEnv(D) {
          if (D.meta ? this._compileMetaSchema(D) : o.compileSchema.call(this, D), !D.validate) throw new Error("ajv implementation error");
          return D.validate;
        }
        _compileMetaSchema(D) {
          const q = this.opts;
          this.opts = this._metaOpts;
          try {
            o.compileSchema.call(this, D);
          } finally {
            this.opts = q;
          }
        }
      }
      S.ValidationError = r.default, S.MissingRefError = a.default, e.default = S;
      function _(V, D, q, L = "error") {
        for (const E in V) {
          const I = E;
          I in D && this.logger[L](`${q}: option ${E}. ${V[I]}`);
        }
      }
      function h(V) {
        return V = (0, c.normalizeId)(V), this.schemas[V] || this.refs[V];
      }
      function m() {
        const V = this.opts.schemas;
        if (V) if (Array.isArray(V)) this.addSchema(V);
        else for (const D in V) this.addSchema(V[D], D);
      }
      function P() {
        for (const V in this.opts.formats) {
          const D = this.opts.formats[V];
          D && this.addFormat(V, D);
        }
      }
      function N(V) {
        if (Array.isArray(V)) {
          this.addVocabulary(V);
          return;
        }
        this.logger.warn("keywords option as map is deprecated, pass array");
        for (const D in V) {
          const q = V[D];
          q.keyword || (q.keyword = D), this.addKeyword(q);
        }
      }
      function C() {
        const V = {
          ...this.opts
        };
        for (const D of x) delete V[D];
        return V;
      }
      const T = {
        log() {
        },
        warn() {
        },
        error() {
        }
      };
      function O(V) {
        if (V === false) return T;
        if (V === void 0) return console;
        if (V.log && V.warn && V.error) return V;
        throw new Error("logger must implement log, warn and error methods");
      }
      const F = /^[a-z_$][a-z0-9_$:-]*$/i;
      function z(V, D) {
        const { RULES: q } = this;
        if ((0, u.eachItem)(V, (L) => {
          if (q.keywords[L]) throw new Error(`Keyword ${L} is already defined`);
          if (!F.test(L)) throw new Error(`Keyword ${L} has invalid name`);
        }), !!D && D.$data && !("code" in D || "validate" in D)) throw new Error('$data keyword must have "code" or "validate" function');
      }
      function W(V, D, q) {
        var L;
        const E = D == null ? void 0 : D.post;
        if (q && E) throw new Error('keyword with "post" flag cannot have "type"');
        const { RULES: I } = this;
        let B = E ? I.post : I.rules.find(({ type: ee }) => ee === q);
        if (B || (B = {
          type: q,
          rules: []
        }, I.rules.push(B)), I.keywords[V] = true, !D) return;
        const ne = {
          keyword: V,
          definition: {
            ...D,
            type: (0, l.getJSONTypes)(D.type),
            schemaType: (0, l.getJSONTypes)(D.schemaType)
          }
        };
        D.before ? X.call(this, B, ne, D.before) : B.rules.push(ne), I.all[V] = ne, (L = D.implements) === null || L === void 0 || L.forEach((ee) => this.addKeyword(ee));
      }
      function X(V, D, q) {
        const L = V.rules.findIndex((E) => E.keyword === q);
        L >= 0 ? V.rules.splice(L, 0, D) : (V.rules.push(D), this.logger.warn(`rule ${q} is not defined`));
      }
      function ie(V) {
        let { metaSchema: D } = V;
        D !== void 0 && (V.$data && this.opts.$data && (D = te(D)), V.validateSchema = this.compile(D, true));
      }
      const oe = {
        $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
      };
      function te(V) {
        return {
          anyOf: [
            V,
            oe
          ]
        };
      }
    })(ia)), ia;
  }
  var Dn = {}, Rn = {}, On = {}, ho;
  function ju() {
    if (ho) return On;
    ho = 1, Object.defineProperty(On, "__esModule", {
      value: true
    });
    const e = {
      keyword: "id",
      code() {
        throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
      }
    };
    return On.default = e, On;
  }
  var gt = {}, yo;
  function Lu() {
    if (yo) return gt;
    yo = 1, Object.defineProperty(gt, "__esModule", {
      value: true
    }), gt.callRef = gt.getValidate = void 0;
    const e = Rr(), t = Ke(), n = me(), r = xt(), a = qa(), s = ye(), o = {
      keyword: "$ref",
      schemaType: "string",
      code(l) {
        const { gen: u, schema: v, it: y } = l, { baseId: g, schemaEnv: x, validateName: w, opts: d, self: f } = y, { root: p } = x;
        if ((v === "#" || v === "#/") && g === p.baseId) return S();
        const b = a.resolveRef.call(f, p, g, v);
        if (b === void 0) throw new e.default(y.opts.uriResolver, g, v);
        if (b instanceof a.SchemaEnv) return _(b);
        return h(b);
        function S() {
          if (x === p) return c(l, w, x, x.$async);
          const m = u.scopeValue("root", {
            ref: p
          });
          return c(l, (0, n._)`${m}.validate`, p, p.$async);
        }
        function _(m) {
          const P = i(l, m);
          c(l, P, m, m.$async);
        }
        function h(m) {
          const P = u.scopeValue("schema", d.code.source === true ? {
            ref: m,
            code: (0, n.stringify)(m)
          } : {
            ref: m
          }), N = u.name("valid"), C = l.subschema({
            schema: m,
            dataTypes: [],
            schemaPath: n.nil,
            topSchemaRef: P,
            errSchemaPath: v
          }, N);
          l.mergeEvaluated(C), l.ok(N);
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
    function c(l, u, v, y) {
      const { gen: g, it: x } = l, { allErrors: w, schemaEnv: d, opts: f } = x, p = f.passContext ? r.default.this : n.nil;
      y ? b() : S();
      function b() {
        if (!d.$async) throw new Error("async schema referenced by sync schema");
        const m = g.let("valid");
        g.try(() => {
          g.code((0, n._)`await ${(0, t.callValidateCode)(l, u, p)}`), h(u), w || g.assign(m, true);
        }, (P) => {
          g.if((0, n._)`!(${P} instanceof ${x.ValidationError})`, () => g.throw(P)), _(P), w || g.assign(m, false);
        }), l.ok(m);
      }
      function S() {
        l.result((0, t.callValidateCode)(l, u, p), () => h(u), () => _(u));
      }
      function _(m) {
        const P = (0, n._)`${m}.errors`;
        g.assign(r.default.vErrors, (0, n._)`${r.default.vErrors} === null ? ${P} : ${r.default.vErrors}.concat(${P})`), g.assign(r.default.errors, (0, n._)`${r.default.vErrors}.length`);
      }
      function h(m) {
        var P;
        if (!x.opts.unevaluated) return;
        const N = (P = v == null ? void 0 : v.validate) === null || P === void 0 ? void 0 : P.evaluated;
        if (x.props !== true) if (N && !N.dynamicProps) N.props !== void 0 && (x.props = s.mergeEvaluated.props(g, N.props, x.props));
        else {
          const C = g.var("props", (0, n._)`${m}.evaluated.props`);
          x.props = s.mergeEvaluated.props(g, C, x.props, n.Name);
        }
        if (x.items !== true) if (N && !N.dynamicItems) N.items !== void 0 && (x.items = s.mergeEvaluated.items(g, N.items, x.items));
        else {
          const C = g.var("items", (0, n._)`${m}.evaluated.items`);
          x.items = s.mergeEvaluated.items(g, C, x.items, n.Name);
        }
      }
    }
    return gt.callRef = c, gt.default = o, gt;
  }
  var go;
  function Mu() {
    if (go) return Rn;
    go = 1, Object.defineProperty(Rn, "__esModule", {
      value: true
    });
    const e = ju(), t = Lu(), n = [
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
    return Rn.default = n, Rn;
  }
  var jn = {}, Ln = {}, _o;
  function Au() {
    if (_o) return Ln;
    _o = 1, Object.defineProperty(Ln, "__esModule", {
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
      message: ({ keyword: s, schemaCode: o }) => (0, e.str)`must be ${n[s].okStr} ${o}`,
      params: ({ keyword: s, schemaCode: o }) => (0, e._)`{comparison: ${n[s].okStr}, limit: ${o}}`
    }, a = {
      keyword: Object.keys(n),
      type: "number",
      schemaType: "number",
      $data: true,
      error: r,
      code(s) {
        const { keyword: o, data: i, schemaCode: c } = s;
        s.fail$data((0, e._)`${i} ${n[o].fail} ${c} || isNaN(${i})`);
      }
    };
    return Ln.default = a, Ln;
  }
  var Mn = {}, vo;
  function Fu() {
    if (vo) return Mn;
    vo = 1, Object.defineProperty(Mn, "__esModule", {
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
        const { gen: a, data: s, schemaCode: o, it: i } = r, c = i.opts.multipleOfPrecision, l = a.let("res"), u = c ? (0, e._)`Math.abs(Math.round(${l}) - ${l}) > 1e-${c}` : (0, e._)`${l} !== parseInt(${l})`;
        r.fail$data((0, e._)`(${o} === 0 || (${l} = ${s}/${o}, ${u}))`);
      }
    };
    return Mn.default = n, Mn;
  }
  var An = {}, Fn = {}, bo;
  function qu() {
    if (bo) return Fn;
    bo = 1, Object.defineProperty(Fn, "__esModule", {
      value: true
    });
    function e(t) {
      const n = t.length;
      let r = 0, a = 0, s;
      for (; a < n; ) r++, s = t.charCodeAt(a++), s >= 55296 && s <= 56319 && a < n && (s = t.charCodeAt(a), (s & 64512) === 56320 && a++);
      return r;
    }
    return Fn.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Fn;
  }
  var xo;
  function Bu() {
    if (xo) return An;
    xo = 1, Object.defineProperty(An, "__esModule", {
      value: true
    });
    const e = me(), t = ye(), n = qu(), a = {
      keyword: [
        "maxLength",
        "minLength"
      ],
      type: "string",
      schemaType: "number",
      $data: true,
      error: {
        message({ keyword: s, schemaCode: o }) {
          const i = s === "maxLength" ? "more" : "fewer";
          return (0, e.str)`must NOT have ${i} than ${o} characters`;
        },
        params: ({ schemaCode: s }) => (0, e._)`{limit: ${s}}`
      },
      code(s) {
        const { keyword: o, data: i, schemaCode: c, it: l } = s, u = o === "maxLength" ? e.operators.GT : e.operators.LT, v = l.opts.unicode === false ? (0, e._)`${i}.length` : (0, e._)`${(0, t.useFunc)(s.gen, n.default)}(${i})`;
        s.fail$data((0, e._)`${v} ${u} ${c}`);
      }
    };
    return An.default = a, An;
  }
  var qn = {}, So;
  function zu() {
    if (So) return qn;
    So = 1, Object.defineProperty(qn, "__esModule", {
      value: true
    });
    const e = Ke(), t = me(), r = {
      keyword: "pattern",
      type: "string",
      schemaType: "string",
      $data: true,
      error: {
        message: ({ schemaCode: a }) => (0, t.str)`must match pattern "${a}"`,
        params: ({ schemaCode: a }) => (0, t._)`{pattern: ${a}}`
      },
      code(a) {
        const { data: s, $data: o, schema: i, schemaCode: c, it: l } = a, u = l.opts.unicodeRegExp ? "u" : "", v = o ? (0, t._)`(new RegExp(${c}, ${u}))` : (0, e.usePattern)(a, i);
        a.fail$data((0, t._)`!${v}.test(${s})`);
      }
    };
    return qn.default = r, qn;
  }
  var Bn = {}, wo;
  function Vu() {
    if (wo) return Bn;
    wo = 1, Object.defineProperty(Bn, "__esModule", {
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
          const s = r === "maxProperties" ? "more" : "fewer";
          return (0, e.str)`must NOT have ${s} than ${a} properties`;
        },
        params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
      },
      code(r) {
        const { keyword: a, data: s, schemaCode: o } = r, i = a === "maxProperties" ? e.operators.GT : e.operators.LT;
        r.fail$data((0, e._)`Object.keys(${s}).length ${i} ${o}`);
      }
    };
    return Bn.default = n, Bn;
  }
  var zn = {}, ko;
  function Wu() {
    if (ko) return zn;
    ko = 1, Object.defineProperty(zn, "__esModule", {
      value: true
    });
    const e = Ke(), t = me(), n = ye(), a = {
      keyword: "required",
      type: "object",
      schemaType: "array",
      $data: true,
      error: {
        message: ({ params: { missingProperty: s } }) => (0, t.str)`must have required property '${s}'`,
        params: ({ params: { missingProperty: s } }) => (0, t._)`{missingProperty: ${s}}`
      },
      code(s) {
        const { gen: o, schema: i, schemaCode: c, data: l, $data: u, it: v } = s, { opts: y } = v;
        if (!u && i.length === 0) return;
        const g = i.length >= y.loopRequired;
        if (v.allErrors ? x() : w(), y.strictRequired) {
          const p = s.parentSchema.properties, { definedProperties: b } = s.it;
          for (const S of i) if ((p == null ? void 0 : p[S]) === void 0 && !b.has(S)) {
            const _ = v.schemaEnv.baseId + v.errSchemaPath, h = `required property "${S}" is not defined at "${_}" (strictRequired)`;
            (0, n.checkStrictMode)(v, h, v.opts.strictRequired);
          }
        }
        function x() {
          if (g || u) s.block$data(t.nil, d);
          else for (const p of i) (0, e.checkReportMissingProp)(s, p);
        }
        function w() {
          const p = o.let("missing");
          if (g || u) {
            const b = o.let("valid", true);
            s.block$data(b, () => f(p, b)), s.ok(b);
          } else o.if((0, e.checkMissingProp)(s, i, p)), (0, e.reportMissingProp)(s, p), o.else();
        }
        function d() {
          o.forOf("prop", c, (p) => {
            s.setParams({
              missingProperty: p
            }), o.if((0, e.noPropertyInData)(o, l, p, y.ownProperties), () => s.error());
          });
        }
        function f(p, b) {
          s.setParams({
            missingProperty: p
          }), o.forOf(p, c, () => {
            o.assign(b, (0, e.propertyInData)(o, l, p, y.ownProperties)), o.if((0, t.not)(b), () => {
              s.error(), o.break();
            });
          }, t.nil);
        }
      }
    };
    return zn.default = a, zn;
  }
  var Vn = {}, Po;
  function Uu() {
    if (Po) return Vn;
    Po = 1, Object.defineProperty(Vn, "__esModule", {
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
          const s = r === "maxItems" ? "more" : "fewer";
          return (0, e.str)`must NOT have ${s} than ${a} items`;
        },
        params: ({ schemaCode: r }) => (0, e._)`{limit: ${r}}`
      },
      code(r) {
        const { keyword: a, data: s, schemaCode: o } = r, i = a === "maxItems" ? e.operators.GT : e.operators.LT;
        r.fail$data((0, e._)`${s}.length ${i} ${o}`);
      }
    };
    return Vn.default = n, Vn;
  }
  var Wn = {}, Un = {}, Eo;
  function Ba() {
    if (Eo) return Un;
    Eo = 1, Object.defineProperty(Un, "__esModule", {
      value: true
    });
    const e = Wi();
    return e.code = 'require("ajv/dist/runtime/equal").default', Un.default = e, Un;
  }
  var Co;
  function Hu() {
    if (Co) return Wn;
    Co = 1, Object.defineProperty(Wn, "__esModule", {
      value: true
    });
    const e = _r(), t = me(), n = ye(), r = Ba(), s = {
      keyword: "uniqueItems",
      type: "array",
      schemaType: "boolean",
      $data: true,
      error: {
        message: ({ params: { i: o, j: i } }) => (0, t.str)`must NOT have duplicate items (items ## ${i} and ${o} are identical)`,
        params: ({ params: { i: o, j: i } }) => (0, t._)`{i: ${o}, j: ${i}}`
      },
      code(o) {
        const { gen: i, data: c, $data: l, schema: u, parentSchema: v, schemaCode: y, it: g } = o;
        if (!l && !u) return;
        const x = i.let("valid"), w = v.items ? (0, e.getSchemaTypes)(v.items) : [];
        o.block$data(x, d, (0, t._)`${y} === false`), o.ok(x);
        function d() {
          const S = i.let("i", (0, t._)`${c}.length`), _ = i.let("j");
          o.setParams({
            i: S,
            j: _
          }), i.assign(x, true), i.if((0, t._)`${S} > 1`, () => (f() ? p : b)(S, _));
        }
        function f() {
          return w.length > 0 && !w.some((S) => S === "object" || S === "array");
        }
        function p(S, _) {
          const h = i.name("item"), m = (0, e.checkDataTypes)(w, h, g.opts.strictNumbers, e.DataType.Wrong), P = i.const("indices", (0, t._)`{}`);
          i.for((0, t._)`;${S}--;`, () => {
            i.let(h, (0, t._)`${c}[${S}]`), i.if(m, (0, t._)`continue`), w.length > 1 && i.if((0, t._)`typeof ${h} == "string"`, (0, t._)`${h} += "_"`), i.if((0, t._)`typeof ${P}[${h}] == "number"`, () => {
              i.assign(_, (0, t._)`${P}[${h}]`), o.error(), i.assign(x, false).break();
            }).code((0, t._)`${P}[${h}] = ${S}`);
          });
        }
        function b(S, _) {
          const h = (0, n.useFunc)(i, r.default), m = i.name("outer");
          i.label(m).for((0, t._)`;${S}--;`, () => i.for((0, t._)`${_} = ${S}; ${_}--;`, () => i.if((0, t._)`${h}(${c}[${S}], ${c}[${_}])`, () => {
            o.error(), i.assign(x, false).break(m);
          })));
        }
      }
    };
    return Wn.default = s, Wn;
  }
  var Hn = {}, $o;
  function Gu() {
    if ($o) return Hn;
    $o = 1, Object.defineProperty(Hn, "__esModule", {
      value: true
    });
    const e = me(), t = ye(), n = Ba(), a = {
      keyword: "const",
      $data: true,
      error: {
        message: "must be equal to constant",
        params: ({ schemaCode: s }) => (0, e._)`{allowedValue: ${s}}`
      },
      code(s) {
        const { gen: o, data: i, $data: c, schemaCode: l, schema: u } = s;
        c || u && typeof u == "object" ? s.fail$data((0, e._)`!${(0, t.useFunc)(o, n.default)}(${i}, ${l})`) : s.fail((0, e._)`${u} !== ${i}`);
      }
    };
    return Hn.default = a, Hn;
  }
  var Gn = {}, No;
  function Ku() {
    if (No) return Gn;
    No = 1, Object.defineProperty(Gn, "__esModule", {
      value: true
    });
    const e = me(), t = ye(), n = Ba(), a = {
      keyword: "enum",
      schemaType: "array",
      $data: true,
      error: {
        message: "must be equal to one of the allowed values",
        params: ({ schemaCode: s }) => (0, e._)`{allowedValues: ${s}}`
      },
      code(s) {
        const { gen: o, data: i, $data: c, schema: l, schemaCode: u, it: v } = s;
        if (!c && l.length === 0) throw new Error("enum must have non-empty array");
        const y = l.length >= v.opts.loopEnum;
        let g;
        const x = () => g ?? (g = (0, t.useFunc)(o, n.default));
        let w;
        if (y || c) w = o.let("valid"), s.block$data(w, d);
        else {
          if (!Array.isArray(l)) throw new Error("ajv implementation error");
          const p = o.const("vSchema", u);
          w = (0, e.or)(...l.map((b, S) => f(p, S)));
        }
        s.pass(w);
        function d() {
          o.assign(w, false), o.forOf("v", u, (p) => o.if((0, e._)`${x()}(${i}, ${p})`, () => o.assign(w, true).break()));
        }
        function f(p, b) {
          const S = l[b];
          return typeof S == "object" && S !== null ? (0, e._)`${x()}(${i}, ${p}[${b}])` : (0, e._)`${i} === ${S}`;
        }
      }
    };
    return Gn.default = a, Gn;
  }
  var Io;
  function Yu() {
    if (Io) return jn;
    Io = 1, Object.defineProperty(jn, "__esModule", {
      value: true
    });
    const e = Au(), t = Fu(), n = Bu(), r = zu(), a = Vu(), s = Wu(), o = Uu(), i = Hu(), c = Gu(), l = Ku(), u = [
      e.default,
      t.default,
      n.default,
      r.default,
      a.default,
      s.default,
      o.default,
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
    return jn.default = u, jn;
  }
  var Kn = {}, Vt = {}, To;
  function Hi() {
    if (To) return Vt;
    To = 1, Object.defineProperty(Vt, "__esModule", {
      value: true
    }), Vt.validateAdditionalItems = void 0;
    const e = me(), t = ye(), r = {
      keyword: "additionalItems",
      type: "array",
      schemaType: [
        "boolean",
        "object"
      ],
      before: "uniqueItems",
      error: {
        message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
        params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
      },
      code(s) {
        const { parentSchema: o, it: i } = s, { items: c } = o;
        if (!Array.isArray(c)) {
          (0, t.checkStrictMode)(i, '"additionalItems" is ignored when "items" is not an array of schemas');
          return;
        }
        a(s, c);
      }
    };
    function a(s, o) {
      const { gen: i, schema: c, data: l, keyword: u, it: v } = s;
      v.items = true;
      const y = i.const("len", (0, e._)`${l}.length`);
      if (c === false) s.setParams({
        len: o.length
      }), s.pass((0, e._)`${y} <= ${o.length}`);
      else if (typeof c == "object" && !(0, t.alwaysValidSchema)(v, c)) {
        const x = i.var("valid", (0, e._)`${y} <= ${o.length}`);
        i.if((0, e.not)(x), () => g(x)), s.ok(x);
      }
      function g(x) {
        i.forRange("i", o.length, y, (w) => {
          s.subschema({
            keyword: u,
            dataProp: w,
            dataPropType: t.Type.Num
          }, x), v.allErrors || i.if((0, e.not)(x), () => i.break());
        });
      }
    }
    return Vt.validateAdditionalItems = a, Vt.default = r, Vt;
  }
  var Yn = {}, Wt = {}, Do;
  function Gi() {
    if (Do) return Wt;
    Do = 1, Object.defineProperty(Wt, "__esModule", {
      value: true
    }), Wt.validateTuple = void 0;
    const e = me(), t = ye(), n = Ke(), r = {
      keyword: "items",
      type: "array",
      schemaType: [
        "object",
        "array",
        "boolean"
      ],
      before: "uniqueItems",
      code(s) {
        const { schema: o, it: i } = s;
        if (Array.isArray(o)) return a(s, "additionalItems", o);
        i.items = true, !(0, t.alwaysValidSchema)(i, o) && s.ok((0, n.validateArray)(s));
      }
    };
    function a(s, o, i = s.schema) {
      const { gen: c, parentSchema: l, data: u, keyword: v, it: y } = s;
      w(l), y.opts.unevaluated && i.length && y.items !== true && (y.items = t.mergeEvaluated.items(c, i.length, y.items));
      const g = c.name("valid"), x = c.const("len", (0, e._)`${u}.length`);
      i.forEach((d, f) => {
        (0, t.alwaysValidSchema)(y, d) || (c.if((0, e._)`${x} > ${f}`, () => s.subschema({
          keyword: v,
          schemaProp: f,
          dataProp: f
        }, g)), s.ok(g));
      });
      function w(d) {
        const { opts: f, errSchemaPath: p } = y, b = i.length, S = b === d.minItems && (b === d.maxItems || d[o] === false);
        if (f.strictTuples && !S) {
          const _ = `"${v}" is ${b}-tuple, but minItems or maxItems/${o} are not specified or different at path "${p}"`;
          (0, t.checkStrictMode)(y, _, f.strictTuples);
        }
      }
    }
    return Wt.validateTuple = a, Wt.default = r, Wt;
  }
  var Ro;
  function Xu() {
    if (Ro) return Yn;
    Ro = 1, Object.defineProperty(Yn, "__esModule", {
      value: true
    });
    const e = Gi(), t = {
      keyword: "prefixItems",
      type: "array",
      schemaType: [
        "array"
      ],
      before: "uniqueItems",
      code: (n) => (0, e.validateTuple)(n, "items")
    };
    return Yn.default = t, Yn;
  }
  var Xn = {}, Oo;
  function Ju() {
    if (Oo) return Xn;
    Oo = 1, Object.defineProperty(Xn, "__esModule", {
      value: true
    });
    const e = me(), t = ye(), n = Ke(), r = Hi(), s = {
      keyword: "items",
      type: "array",
      schemaType: [
        "object",
        "boolean"
      ],
      before: "uniqueItems",
      error: {
        message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
        params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
      },
      code(o) {
        const { schema: i, parentSchema: c, it: l } = o, { prefixItems: u } = c;
        l.items = true, !(0, t.alwaysValidSchema)(l, i) && (u ? (0, r.validateAdditionalItems)(o, u) : o.ok((0, n.validateArray)(o)));
      }
    };
    return Xn.default = s, Xn;
  }
  var Jn = {}, jo;
  function Zu() {
    if (jo) return Jn;
    jo = 1, Object.defineProperty(Jn, "__esModule", {
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
        message: ({ params: { min: a, max: s } }) => s === void 0 ? (0, e.str)`must contain at least ${a} valid item(s)` : (0, e.str)`must contain at least ${a} and no more than ${s} valid item(s)`,
        params: ({ params: { min: a, max: s } }) => s === void 0 ? (0, e._)`{minContains: ${a}}` : (0, e._)`{minContains: ${a}, maxContains: ${s}}`
      },
      code(a) {
        const { gen: s, schema: o, parentSchema: i, data: c, it: l } = a;
        let u, v;
        const { minContains: y, maxContains: g } = i;
        l.opts.next ? (u = y === void 0 ? 1 : y, v = g) : u = 1;
        const x = s.const("len", (0, e._)`${c}.length`);
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
        if ((0, t.alwaysValidSchema)(l, o)) {
          let b = (0, e._)`${x} >= ${u}`;
          v !== void 0 && (b = (0, e._)`${b} && ${x} <= ${v}`), a.pass(b);
          return;
        }
        l.items = true;
        const w = s.name("valid");
        v === void 0 && u === 1 ? f(w, () => s.if(w, () => s.break())) : u === 0 ? (s.let(w, true), v !== void 0 && s.if((0, e._)`${c}.length > 0`, d)) : (s.let(w, false), d()), a.result(w, () => a.reset());
        function d() {
          const b = s.name("_valid"), S = s.let("count", 0);
          f(b, () => s.if(b, () => p(S)));
        }
        function f(b, S) {
          s.forRange("i", 0, x, (_) => {
            a.subschema({
              keyword: "contains",
              dataProp: _,
              dataPropType: t.Type.Num,
              compositeRule: true
            }, b), S();
          });
        }
        function p(b) {
          s.code((0, e._)`${b}++`), v === void 0 ? s.if((0, e._)`${b} >= ${u}`, () => s.assign(w, true).break()) : (s.if((0, e._)`${b} > ${v}`, () => s.assign(w, false).break()), u === 1 ? s.assign(w, true) : s.if((0, e._)`${b} >= ${u}`, () => s.assign(w, true)));
        }
      }
    };
    return Jn.default = r, Jn;
  }
  var ya = {}, Lo;
  function Qu() {
    return Lo || (Lo = 1, (function(e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
      const t = me(), n = ye(), r = Ke();
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
          const [l, u] = s(c);
          o(c, l), i(c, u);
        }
      };
      function s({ schema: c }) {
        const l = {}, u = {};
        for (const v in c) {
          if (v === "__proto__") continue;
          const y = Array.isArray(c[v]) ? l : u;
          y[v] = c[v];
        }
        return [
          l,
          u
        ];
      }
      function o(c, l = c.schema) {
        const { gen: u, data: v, it: y } = c;
        if (Object.keys(l).length === 0) return;
        const g = u.let("missing");
        for (const x in l) {
          const w = l[x];
          if (w.length === 0) continue;
          const d = (0, r.propertyInData)(u, v, x, y.opts.ownProperties);
          c.setParams({
            property: x,
            depsCount: w.length,
            deps: w.join(", ")
          }), y.allErrors ? u.if(d, () => {
            for (const f of w) (0, r.checkReportMissingProp)(c, f);
          }) : (u.if((0, t._)`${d} && (${(0, r.checkMissingProp)(c, w, g)})`), (0, r.reportMissingProp)(c, g), u.else());
        }
      }
      e.validatePropertyDeps = o;
      function i(c, l = c.schema) {
        const { gen: u, data: v, keyword: y, it: g } = c, x = u.name("valid");
        for (const w in l) (0, n.alwaysValidSchema)(g, l[w]) || (u.if((0, r.propertyInData)(u, v, w, g.opts.ownProperties), () => {
          const d = c.subschema({
            keyword: y,
            schemaProp: w
          }, x);
          c.mergeValidEvaluated(d, x);
        }, () => u.var(x, true)), c.ok(x));
      }
      e.validateSchemaDeps = i, e.default = a;
    })(ya)), ya;
  }
  var Zn = {}, Mo;
  function ep() {
    if (Mo) return Zn;
    Mo = 1, Object.defineProperty(Zn, "__esModule", {
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
        const { gen: s, schema: o, data: i, it: c } = a;
        if ((0, t.alwaysValidSchema)(c, o)) return;
        const l = s.name("valid");
        s.forIn("key", i, (u) => {
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
          }, l), s.if((0, e.not)(l), () => {
            a.error(true), c.allErrors || s.break();
          });
        }), a.ok(l);
      }
    };
    return Zn.default = r, Zn;
  }
  var Qn = {}, Ao;
  function Ki() {
    if (Ao) return Qn;
    Ao = 1, Object.defineProperty(Qn, "__esModule", {
      value: true
    });
    const e = Ke(), t = me(), n = xt(), r = ye(), s = {
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
        params: ({ params: o }) => (0, t._)`{additionalProperty: ${o.additionalProperty}}`
      },
      code(o) {
        const { gen: i, schema: c, parentSchema: l, data: u, errsCount: v, it: y } = o;
        if (!v) throw new Error("ajv implementation error");
        const { allErrors: g, opts: x } = y;
        if (y.props = true, x.removeAdditional !== "all" && (0, r.alwaysValidSchema)(y, c)) return;
        const w = (0, e.allSchemaProperties)(l.properties), d = (0, e.allSchemaProperties)(l.patternProperties);
        f(), o.ok((0, t._)`${v} === ${n.default.errors}`);
        function f() {
          i.forIn("key", u, (h) => {
            !w.length && !d.length ? S(h) : i.if(p(h), () => S(h));
          });
        }
        function p(h) {
          let m;
          if (w.length > 8) {
            const P = (0, r.schemaRefOrVal)(y, l.properties, "properties");
            m = (0, e.isOwnProperty)(i, P, h);
          } else w.length ? m = (0, t.or)(...w.map((P) => (0, t._)`${h} === ${P}`)) : m = t.nil;
          return d.length && (m = (0, t.or)(m, ...d.map((P) => (0, t._)`${(0, e.usePattern)(o, P)}.test(${h})`))), (0, t.not)(m);
        }
        function b(h) {
          i.code((0, t._)`delete ${u}[${h}]`);
        }
        function S(h) {
          if (x.removeAdditional === "all" || x.removeAdditional && c === false) {
            b(h);
            return;
          }
          if (c === false) {
            o.setParams({
              additionalProperty: h
            }), o.error(), g || i.break();
            return;
          }
          if (typeof c == "object" && !(0, r.alwaysValidSchema)(y, c)) {
            const m = i.name("valid");
            x.removeAdditional === "failing" ? (_(h, m, false), i.if((0, t.not)(m), () => {
              o.reset(), b(h);
            })) : (_(h, m), g || i.if((0, t.not)(m), () => i.break()));
          }
        }
        function _(h, m, P) {
          const N = {
            keyword: "additionalProperties",
            dataProp: h,
            dataPropType: r.Type.Str
          };
          P === false && Object.assign(N, {
            compositeRule: true,
            createErrors: false,
            allErrors: false
          }), o.subschema(N, m);
        }
      }
    };
    return Qn.default = s, Qn;
  }
  var er = {}, Fo;
  function tp() {
    if (Fo) return er;
    Fo = 1, Object.defineProperty(er, "__esModule", {
      value: true
    });
    const e = Dr(), t = Ke(), n = ye(), r = Ki(), a = {
      keyword: "properties",
      type: "object",
      schemaType: "object",
      code(s) {
        const { gen: o, schema: i, parentSchema: c, data: l, it: u } = s;
        u.opts.removeAdditional === "all" && c.additionalProperties === void 0 && r.default.code(new e.KeywordCxt(u, r.default, "additionalProperties"));
        const v = (0, t.allSchemaProperties)(i);
        for (const d of v) u.definedProperties.add(d);
        u.opts.unevaluated && v.length && u.props !== true && (u.props = n.mergeEvaluated.props(o, (0, n.toHash)(v), u.props));
        const y = v.filter((d) => !(0, n.alwaysValidSchema)(u, i[d]));
        if (y.length === 0) return;
        const g = o.name("valid");
        for (const d of y) x(d) ? w(d) : (o.if((0, t.propertyInData)(o, l, d, u.opts.ownProperties)), w(d), u.allErrors || o.else().var(g, true), o.endIf()), s.it.definedProperties.add(d), s.ok(g);
        function x(d) {
          return u.opts.useDefaults && !u.compositeRule && i[d].default !== void 0;
        }
        function w(d) {
          s.subschema({
            keyword: "properties",
            schemaProp: d,
            dataProp: d
          }, g);
        }
      }
    };
    return er.default = a, er;
  }
  var tr = {}, qo;
  function np() {
    if (qo) return tr;
    qo = 1, Object.defineProperty(tr, "__esModule", {
      value: true
    });
    const e = Ke(), t = me(), n = ye(), r = ye(), a = {
      keyword: "patternProperties",
      type: "object",
      schemaType: "object",
      code(s) {
        const { gen: o, schema: i, data: c, parentSchema: l, it: u } = s, { opts: v } = u, y = (0, e.allSchemaProperties)(i), g = y.filter((S) => (0, n.alwaysValidSchema)(u, i[S]));
        if (y.length === 0 || g.length === y.length && (!u.opts.unevaluated || u.props === true)) return;
        const x = v.strictSchema && !v.allowMatchingProperties && l.properties, w = o.name("valid");
        u.props !== true && !(u.props instanceof t.Name) && (u.props = (0, r.evaluatedPropsToName)(o, u.props));
        const { props: d } = u;
        f();
        function f() {
          for (const S of y) x && p(S), u.allErrors ? b(S) : (o.var(w, true), b(S), o.if(w));
        }
        function p(S) {
          for (const _ in x) new RegExp(S).test(_) && (0, n.checkStrictMode)(u, `property ${_} matches pattern ${S} (use allowMatchingProperties)`);
        }
        function b(S) {
          o.forIn("key", c, (_) => {
            o.if((0, t._)`${(0, e.usePattern)(s, S)}.test(${_})`, () => {
              const h = g.includes(S);
              h || s.subschema({
                keyword: "patternProperties",
                schemaProp: S,
                dataProp: _,
                dataPropType: r.Type.Str
              }, w), u.opts.unevaluated && d !== true ? o.assign((0, t._)`${d}[${_}]`, true) : !h && !u.allErrors && o.if((0, t.not)(w), () => o.break());
            });
          });
        }
      }
    };
    return tr.default = a, tr;
  }
  var nr = {}, Bo;
  function rp() {
    if (Bo) return nr;
    Bo = 1, Object.defineProperty(nr, "__esModule", {
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
        const { gen: r, schema: a, it: s } = n;
        if ((0, e.alwaysValidSchema)(s, a)) {
          n.fail();
          return;
        }
        const o = r.name("valid");
        n.subschema({
          keyword: "not",
          compositeRule: true,
          createErrors: false,
          allErrors: false
        }, o), n.failResult(o, () => n.reset(), () => n.error());
      },
      error: {
        message: "must NOT be valid"
      }
    };
    return nr.default = t, nr;
  }
  var rr = {}, zo;
  function ap() {
    if (zo) return rr;
    zo = 1, Object.defineProperty(rr, "__esModule", {
      value: true
    });
    const t = {
      keyword: "anyOf",
      schemaType: "array",
      trackErrors: true,
      code: Ke().validateUnion,
      error: {
        message: "must match a schema in anyOf"
      }
    };
    return rr.default = t, rr;
  }
  var ar = {}, Vo;
  function sp() {
    if (Vo) return ar;
    Vo = 1, Object.defineProperty(ar, "__esModule", {
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
        const { gen: s, schema: o, parentSchema: i, it: c } = a;
        if (!Array.isArray(o)) throw new Error("ajv implementation error");
        if (c.opts.discriminator && i.discriminator) return;
        const l = o, u = s.let("valid", false), v = s.let("passing", null), y = s.name("_valid");
        a.setParams({
          passing: v
        }), s.block(g), a.result(u, () => a.reset(), () => a.error(true));
        function g() {
          l.forEach((x, w) => {
            let d;
            (0, t.alwaysValidSchema)(c, x) ? s.var(y, true) : d = a.subschema({
              keyword: "oneOf",
              schemaProp: w,
              compositeRule: true
            }, y), w > 0 && s.if((0, e._)`${y} && ${u}`).assign(u, false).assign(v, (0, e._)`[${v}, ${w}]`).else(), s.if(y, () => {
              s.assign(u, true), s.assign(v, w), d && a.mergeEvaluated(d, e.Name);
            });
          });
        }
      }
    };
    return ar.default = r, ar;
  }
  var sr = {}, Wo;
  function op() {
    if (Wo) return sr;
    Wo = 1, Object.defineProperty(sr, "__esModule", {
      value: true
    });
    const e = ye(), t = {
      keyword: "allOf",
      schemaType: "array",
      code(n) {
        const { gen: r, schema: a, it: s } = n;
        if (!Array.isArray(a)) throw new Error("ajv implementation error");
        const o = r.name("valid");
        a.forEach((i, c) => {
          if ((0, e.alwaysValidSchema)(s, i)) return;
          const l = n.subschema({
            keyword: "allOf",
            schemaProp: c
          }, o);
          n.ok(o), n.mergeEvaluated(l);
        });
      }
    };
    return sr.default = t, sr;
  }
  var or = {}, Uo;
  function ip() {
    if (Uo) return or;
    Uo = 1, Object.defineProperty(or, "__esModule", {
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
        message: ({ params: s }) => (0, e.str)`must match "${s.ifClause}" schema`,
        params: ({ params: s }) => (0, e._)`{failingKeyword: ${s.ifClause}}`
      },
      code(s) {
        const { gen: o, parentSchema: i, it: c } = s;
        i.then === void 0 && i.else === void 0 && (0, t.checkStrictMode)(c, '"if" without "then" and "else" is ignored');
        const l = a(c, "then"), u = a(c, "else");
        if (!l && !u) return;
        const v = o.let("valid", true), y = o.name("_valid");
        if (g(), s.reset(), l && u) {
          const w = o.let("ifClause");
          s.setParams({
            ifClause: w
          }), o.if(y, x("then", w), x("else", w));
        } else l ? o.if(y, x("then")) : o.if((0, e.not)(y), x("else"));
        s.pass(v, () => s.error(true));
        function g() {
          const w = s.subschema({
            keyword: "if",
            compositeRule: true,
            createErrors: false,
            allErrors: false
          }, y);
          s.mergeEvaluated(w);
        }
        function x(w, d) {
          return () => {
            const f = s.subschema({
              keyword: w
            }, y);
            o.assign(v, y), s.mergeValidEvaluated(f, v), d ? o.assign(d, (0, e._)`${w}`) : s.setParams({
              ifClause: w
            });
          };
        }
      }
    };
    function a(s, o) {
      const i = s.schema[o];
      return i !== void 0 && !(0, t.alwaysValidSchema)(s, i);
    }
    return or.default = r, or;
  }
  var ir = {}, Ho;
  function cp() {
    if (Ho) return ir;
    Ho = 1, Object.defineProperty(ir, "__esModule", {
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
    return ir.default = t, ir;
  }
  var Go;
  function lp() {
    if (Go) return Kn;
    Go = 1, Object.defineProperty(Kn, "__esModule", {
      value: true
    });
    const e = Hi(), t = Xu(), n = Gi(), r = Ju(), a = Zu(), s = Qu(), o = ep(), i = Ki(), c = tp(), l = np(), u = rp(), v = ap(), y = sp(), g = op(), x = ip(), w = cp();
    function d(f = false) {
      const p = [
        u.default,
        v.default,
        y.default,
        g.default,
        x.default,
        w.default,
        o.default,
        i.default,
        s.default,
        c.default,
        l.default
      ];
      return f ? p.push(t.default, r.default) : p.push(e.default, n.default), p.push(a.default), p;
    }
    return Kn.default = d, Kn;
  }
  var cr = {}, lr = {}, Ko;
  function dp() {
    if (Ko) return lr;
    Ko = 1, Object.defineProperty(lr, "__esModule", {
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
        const { gen: s, data: o, $data: i, schema: c, schemaCode: l, it: u } = r, { opts: v, errSchemaPath: y, schemaEnv: g, self: x } = u;
        if (!v.validateFormats) return;
        i ? w() : d();
        function w() {
          const f = s.scopeValue("formats", {
            ref: x.formats,
            code: v.code.formats
          }), p = s.const("fDef", (0, e._)`${f}[${l}]`), b = s.let("fType"), S = s.let("format");
          s.if((0, e._)`typeof ${p} == "object" && !(${p} instanceof RegExp)`, () => s.assign(b, (0, e._)`${p}.type || "string"`).assign(S, (0, e._)`${p}.validate`), () => s.assign(b, (0, e._)`"string"`).assign(S, p)), r.fail$data((0, e.or)(_(), h()));
          function _() {
            return v.strictSchema === false ? e.nil : (0, e._)`${l} && !${S}`;
          }
          function h() {
            const m = g.$async ? (0, e._)`(${p}.async ? await ${S}(${o}) : ${S}(${o}))` : (0, e._)`${S}(${o})`, P = (0, e._)`(typeof ${S} == "function" ? ${m} : ${S}.test(${o}))`;
            return (0, e._)`${S} && ${S} !== true && ${b} === ${a} && !${P}`;
          }
        }
        function d() {
          const f = x.formats[c];
          if (!f) {
            _();
            return;
          }
          if (f === true) return;
          const [p, b, S] = h(f);
          p === a && r.pass(m());
          function _() {
            if (v.strictSchema === false) {
              x.logger.warn(P());
              return;
            }
            throw new Error(P());
            function P() {
              return `unknown format "${c}" ignored in schema at path "${y}"`;
            }
          }
          function h(P) {
            const N = P instanceof RegExp ? (0, e.regexpCode)(P) : v.code.formats ? (0, e._)`${v.code.formats}${(0, e.getProperty)(c)}` : void 0, C = s.scopeValue("formats", {
              key: c,
              ref: P,
              code: N
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
              if (!g.$async) throw new Error("async format in sync schema");
              return (0, e._)`await ${S}(${o})`;
            }
            return typeof b == "function" ? (0, e._)`${S}(${o})` : (0, e._)`${S}.test(${o})`;
          }
        }
      }
    };
    return lr.default = n, lr;
  }
  var Yo;
  function up() {
    if (Yo) return cr;
    Yo = 1, Object.defineProperty(cr, "__esModule", {
      value: true
    });
    const t = [
      dp().default
    ];
    return cr.default = t, cr;
  }
  var Dt = {}, Xo;
  function pp() {
    return Xo || (Xo = 1, Object.defineProperty(Dt, "__esModule", {
      value: true
    }), Dt.contentVocabulary = Dt.metadataVocabulary = void 0, Dt.metadataVocabulary = [
      "title",
      "description",
      "default",
      "deprecated",
      "readOnly",
      "writeOnly",
      "examples"
    ], Dt.contentVocabulary = [
      "contentMediaType",
      "contentEncoding",
      "contentSchema"
    ]), Dt;
  }
  var Jo;
  function mp() {
    if (Jo) return Dn;
    Jo = 1, Object.defineProperty(Dn, "__esModule", {
      value: true
    });
    const e = Mu(), t = Yu(), n = lp(), r = up(), a = pp(), s = [
      e.default,
      t.default,
      (0, n.default)(),
      r.default,
      a.metadataVocabulary,
      a.contentVocabulary
    ];
    return Dn.default = s, Dn;
  }
  var dr = {}, nn = {}, Zo;
  function fp() {
    if (Zo) return nn;
    Zo = 1, Object.defineProperty(nn, "__esModule", {
      value: true
    }), nn.DiscrError = void 0;
    var e;
    return (function(t) {
      t.Tag = "tag", t.Mapping = "mapping";
    })(e || (nn.DiscrError = e = {})), nn;
  }
  var Qo;
  function hp() {
    if (Qo) return dr;
    Qo = 1, Object.defineProperty(dr, "__esModule", {
      value: true
    });
    const e = me(), t = fp(), n = qa(), r = Rr(), a = ye(), o = {
      keyword: "discriminator",
      type: "object",
      schemaType: "object",
      error: {
        message: ({ params: { discrError: i, tagName: c } }) => i === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
        params: ({ params: { discrError: i, tag: c, tagName: l } }) => (0, e._)`{error: ${i}, tag: ${l}, tagValue: ${c}}`
      },
      code(i) {
        const { gen: c, data: l, schema: u, parentSchema: v, it: y } = i, { oneOf: g } = v;
        if (!y.opts.discriminator) throw new Error("discriminator: requires discriminator option");
        const x = u.propertyName;
        if (typeof x != "string") throw new Error("discriminator: requires propertyName");
        if (u.mapping) throw new Error("discriminator: mapping is not supported");
        if (!g) throw new Error("discriminator: requires oneOf keyword");
        const w = c.let("valid", false), d = c.const("tag", (0, e._)`${l}${(0, e.getProperty)(x)}`);
        c.if((0, e._)`typeof ${d} == "string"`, () => f(), () => i.error(false, {
          discrError: t.DiscrError.Tag,
          tag: d,
          tagName: x
        })), i.ok(w);
        function f() {
          const S = b();
          c.if(false);
          for (const _ in S) c.elseIf((0, e._)`${d} === ${_}`), c.assign(w, p(S[_]));
          c.else(), i.error(false, {
            discrError: t.DiscrError.Mapping,
            tag: d,
            tagName: x
          }), c.endIf();
        }
        function p(S) {
          const _ = c.name("valid"), h = i.subschema({
            keyword: "oneOf",
            schemaProp: S
          }, _);
          return i.mergeEvaluated(h, e.Name), _;
        }
        function b() {
          var S;
          const _ = {}, h = P(v);
          let m = true;
          for (let T = 0; T < g.length; T++) {
            let O = g[T];
            if ((O == null ? void 0 : O.$ref) && !(0, a.schemaHasRulesButRef)(O, y.self.RULES)) {
              const z = O.$ref;
              if (O = n.resolveRef.call(y.self, y.schemaEnv.root, y.baseId, z), O instanceof n.SchemaEnv && (O = O.schema), O === void 0) throw new r.default(y.opts.uriResolver, y.baseId, z);
            }
            const F = (S = O == null ? void 0 : O.properties) === null || S === void 0 ? void 0 : S[x];
            if (typeof F != "object") throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${x}"`);
            m = m && (h || P(O)), N(F, T);
          }
          if (!m) throw new Error(`discriminator: "${x}" must be required`);
          return _;
          function P({ required: T }) {
            return Array.isArray(T) && T.includes(x);
          }
          function N(T, O) {
            if (T.const) C(T.const, O);
            else if (T.enum) for (const F of T.enum) C(F, O);
            else throw new Error(`discriminator: "properties/${x}" must have "const" or "enum"`);
          }
          function C(T, O) {
            if (typeof T != "string" || T in _) throw new Error(`discriminator: "${x}" values must be unique strings`);
            _[T] = O;
          }
        }
      }
    };
    return dr.default = o, dr;
  }
  const yp = "http://json-schema.org/draft-07/schema#", gp = "http://json-schema.org/draft-07/schema#", _p = "Core schema meta-schema", vp = {
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
  }, bp = [
    "object",
    "boolean"
  ], xp = {
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
  }, Sp = {
    $schema: yp,
    $id: gp,
    title: _p,
    definitions: vp,
    type: bp,
    properties: xp,
    default: true
  };
  var ei;
  function wp() {
    return ei || (ei = 1, (function(e, t) {
      Object.defineProperty(t, "__esModule", {
        value: true
      }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
      const n = Ou(), r = mp(), a = hp(), s = Sp, o = [
        "/properties"
      ], i = "http://json-schema.org/draft-07/schema";
      class c extends n.default {
        _addVocabularies() {
          super._addVocabularies(), r.default.forEach((x) => this.addVocabulary(x)), this.opts.discriminator && this.addKeyword(a.default);
        }
        _addDefaultMetaSchema() {
          if (super._addDefaultMetaSchema(), !this.opts.meta) return;
          const x = this.opts.$data ? this.$dataMetaSchema(s, o) : s;
          this.addMetaSchema(x, i, false), this.refs["http://json-schema.org/schema"] = i;
        }
        defaultMeta() {
          return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
        }
      }
      t.Ajv = c, e.exports = t = c, e.exports.Ajv = c, Object.defineProperty(t, "__esModule", {
        value: true
      }), t.default = c;
      var l = Dr();
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
      var v = Fa();
      Object.defineProperty(t, "ValidationError", {
        enumerable: true,
        get: function() {
          return v.default;
        }
      });
      var y = Rr();
      Object.defineProperty(t, "MissingRefError", {
        enumerable: true,
        get: function() {
          return y.default;
        }
      });
    })(Cn, Cn.exports)), Cn.exports;
  }
  var kp = wp();
  const Pp = qc(kp), Ep = "http://json-schema.org/draft-07/schema#", Cp = "network-state.schema.json", $p = "Network State (Canonical Format)", Np = "Network state snapshot for visualization (from WASM get_state_canonical() + JavaScript datasources)", Ip = "object", Tp = [
    "blocks",
    "connections"
  ], Dp = {
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
  }, Rp = {
    $schema: Ep,
    $id: Cp,
    title: $p,
    description: Np,
    type: Ip,
    required: Tp,
    properties: Dp
  }, Op = "http://json-schema.org/draft-07/schema#", jp = "network-config.schema.json", Lp = "Network Configuration (Canonical Format)", Mp = "Network configuration for export/import (from WASM export_config_canonical())", Ap = "object", Fp = [
    "version",
    "blocks",
    "connections"
  ], qp = {
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
  }, Bp = {
    $schema: Op,
    $id: jp,
    title: Lp,
    description: Mp,
    type: Ap,
    required: Fp,
    properties: qp
  }, zp = "http://json-schema.org/draft-07/schema#", Vp = "block-definition.schema.json", Wp = "Block Definitions", Up = "WASM block type definitions with defaults (block_defaults.json)", Hp = "object", Gp = {
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
  }, Kp = false, Yp = {
    $schema: zp,
    $id: Vp,
    title: Wp,
    description: Up,
    type: Hp,
    patternProperties: Gp,
    additionalProperties: Kp
  }, ga = new Pp({
    allErrors: true,
    verbose: true,
    strict: false
  }), ti = {
    networkState: ga.compile(Rp),
    networkConfig: ga.compile(Bp),
    blockDefinition: ga.compile(Yp)
  };
  function Xp(e, t) {
    const n = ti[t];
    if (!n) throw new Error(`Unknown schema: ${t}. Available schemas: ${Object.keys(ti).join(", ")}`);
    return n(e) ? {
      valid: true
    } : {
      valid: false,
      errors: n.errors,
      errorMessage: Jp(n.errors)
    };
  }
  function Jp(e) {
    return !e || e.length === 0 ? "" : e.map((t) => {
      const n = t.instancePath || "root", r = t.message || "validation failed", a = t.params ? ` (${JSON.stringify(t.params)})` : "";
      return `${n}: ${r}${a}`;
    }).join(`
`);
  }
  function Zp(e, t, n = "") {
    const r = Xp(e, t);
    if (!r.valid) {
      const a = n ? ` [${n}]` : "";
      return console.warn(`[Validator] Validation warning${a}:`, r.errorMessage), console.warn("[Validator] Invalid data:", e), false;
    }
    return true;
  }
  const Qp = kl;
  let fr = false, ur = false;
  const hr = [];
  let _a = false;
  const za = false;
  function em() {
    if (!(_a || hr.length === 0)) {
      for (_a = true; hr.length > 0; ) {
        const e = hr.shift();
        if (!e) break;
        const { fn: t, resolve: n, reject: r, context: a } = e;
        try {
          const s = t();
          n(s);
        } catch (s) {
          console.error(`[WASM Bridge] Failed to ${a}:`, s), r(s);
        }
      }
      _a = false;
    }
  }
  function qe(e, t = "WASM call") {
    return new Promise((n, r) => {
      hr.push({
        fn: e,
        resolve: n,
        reject: r,
        context: t
      }), queueMicrotask(em);
    });
  }
  async function tm() {
    if (fr || ur) return false;
    ur = true;
    try {
      return fr = true, ur = false, true;
    } catch (e) {
      return console.error("[WASM Bridge] Failed to initialize:", e), fr = false, ur = false, false;
    }
  }
  Yi = function() {
    return fr ? qe(() => {
      const e = new Qp();
      return e._blockMetadata = /* @__PURE__ */ new Map(), e._needsBuild = false, e._needsInit = /* @__PURE__ */ new Set(), e;
    }, "create network") : (console.error("[WASM Bridge] Cannot create network: WASM not initialized"), Promise.resolve(null));
  };
  function Va(e, t, n = {}) {
    return e ? qe(() => {
      const r = _u[t];
      if (!r) throw new Error(`Unknown block type: ${t}`);
      const a = {
        ...r.defaults,
        ...n
      }, s = n.name || t;
      let o = "";
      switch (t) {
        case "DiscreteTransformer":
          o = e.add_discrete_transformer(s, a.num_v, a.num_s, a.num_t, a.seed);
          break;
        case "PersistenceTransformer":
          o = e.add_persistence_transformer(s, a.min_val, a.max_val, a.num_s, a.num_as, a.max_step, a.num_t, a.seed);
          break;
        case "PatternPooler":
          o = e.add_pattern_pooler(s, a.num_s, a.num_as, a.perm_thr, a.perm_inc, a.perm_dec, a.pct_pool, a.pct_conn, a.pct_learn, a.always_update, a.num_t, a.seed);
          break;
        case "PatternClassifier":
          o = e.add_pattern_classifier(s, a.num_l, a.num_s, a.num_as, a.perm_thr, a.perm_inc, a.perm_dec, a.pct_pool, a.pct_conn, a.pct_learn, a.num_t, a.seed);
          break;
        case "SequenceLearner":
          o = e.add_sequence_learner(s, a.num_c, a.num_spc, a.num_dps, a.num_rpd, a.d_thresh, a.perm_thr, a.perm_inc, a.perm_dec, a.num_t, a.always_update, a.seed);
          break;
        case "ContextLearner":
          o = e.add_context_learner(s, a.num_c, a.num_spc, a.num_dps, a.num_rpd, a.d_thresh, a.perm_thr, a.perm_inc, a.perm_dec, a.num_t, a.always_update, a.seed);
          break;
        case "FixedWeightTransformer":
          o = e.add_fixed_weight_transformer(s, a.n, a.w, a.min_val, a.max_val, a.num_t, a.seed);
          break;
        case "TaperingWeightTransformer":
          o = e.add_tapering_weight_transformer(s, a.n, a.w, a.min_val, a.max_val, a.num_t, a.seed);
          break;
        case "PeriodicCellTransformer":
          o = e.add_periodic_cell_transformer(s, a.n, a.min_period, a.max_period, a.l_frac, a.min_val, a.max_val, a.num_t, a.seed);
          break;
        case "PeriodicScalarTransformer":
          o = e.add_periodic_scalar_transformer(s, a.n, a.w, a.period, a.min_val, a.max_val, a.num_t, a.seed);
          break;
        case "PlaceCellTransformer":
          o = e.add_place_cell_transformer(s, a.min_val, a.max_val, a.default_bin_size, a.num_t);
          break;
        case "RandomizedPlaceCellTransformer":
          o = e.add_randomized_place_cell_transformer(s, a.n, a.bin_size, a.min_val, a.max_val, a.num_t, a.seed);
          break;
        default:
          throw new Error(`Unhandled block type: ${t}`);
      }
      return e._blockMetadata.set(o, {
        type: t,
        name: s
      }), e._needsBuild = true, r.needsInit && e._needsInit.add(o), o;
    }, "add block") : Promise.resolve(null);
  }
  function vr(e, t, n, r = "input", a = 0) {
    return e ? qe(() => {
      a > 0 ? r === "context" ? e.connect_to_context_with_offset(t, n, a) : e.connect_to_input_with_offset(t, n, a) : r === "context" ? e.connect_to_context(t, n) : e.connect_to_input(t, n), e._needsBuild = true;
    }, "connect blocks") : Promise.resolve();
  }
  function Wa(e, t, n) {
    return e ? qe(() => {
      const r = e.add_datasource_from_config(t, n);
      return e._blockMetadata.set(r, {
        type: "FixedWeightTransformer",
        name: t
      }), e._needsBuild = true, e._needsInit.add(r), r;
    }, "add datasource from config") : Promise.resolve(null);
  }
  function Ua(e, t, n) {
    return e ? qe(() => {
      e.connect_scalar_source(t, n), e._needsBuild = true;
    }, "connect scalar source") : Promise.resolve();
  }
  function Ha(e, t, n) {
    return e ? qe(() => {
      const r = e.add_discrete_datasource_from_config(t, n);
      return e._blockMetadata.set(r, {
        type: "DiscreteTransformer",
        name: t
      }), e._needsBuild = true, e._needsInit.add(r), r;
    }, "add discrete datasource from config") : Promise.resolve(null);
  }
  function Ga(e, t, n) {
    return e ? qe(() => {
      e.connect_discrete_source(t, n), e._needsBuild = true;
    }, "connect discrete source") : Promise.resolve();
  }
  function br(e, t, n) {
    return e ? qe(() => {
      e.connect_label_source(t, n), e._needsBuild = true;
    }, "connect label source") : Promise.resolve();
  }
  function cn(e) {
    return e ? qe(() => {
      e.build(), e._needsInit.forEach((t) => {
        try {
          e.init_block(t);
        } catch (n) {
          console.warn(`[WASM Bridge] Failed to init block ${t}:`, n);
        }
      }), e._needsBuild = false;
    }, "rebuild network") : Promise.resolve();
  }
  function nm(e, t = true) {
    return e ? qe(() => {
      e._needsBuild && (e.build(), e._needsInit.forEach((n) => {
        try {
          e.init_block(n);
        } catch (r) {
          console.warn(`[WASM Bridge] Failed to init block ${n}:`, r);
        }
      }), e._needsBuild = false), e.execute(t);
    }, "execute network") : Promise.resolve();
  }
  function rm(e) {
    return e ? qe(() => {
      const t = e.get_state_canonical();
      if (!t) return console.warn("[WASM Bridge] get_state_canonical returned null"), {};
      const n = JSON.parse(t);
      return n.blocks && n.blocks.length === 0 && console.warn("[WASM Bridge] get_state_canonical returned empty blocks array", n), Zp(n, "networkState", "getExecutionState"), n;
    }, "get execution state").catch(() => ({})) : Promise.resolve({});
  }
  function am(e, t) {
    return !e || !t || t.length === 0 ? Promise.resolve({}) : qe(() => {
      const n = t.map((o) => o.id), r = e.get_all_block_outputs(n), a = JSON.parse(r), s = {};
      for (const { id: o } of t) {
        const i = a[o];
        s[o] = i !== null ? i : void 0;
      }
      return s;
    }, "get block outputs batch");
  }
  pe = Ht()(wr((e, t) => ({
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
  mh = function() {
    const e = G.useRef(false), t = pe((o) => o.setWasmNetwork), n = pe((o) => o.setWasmError), r = pe((o) => o.setWasmLoading), a = pe((o) => o.setWasmStatus), s = pe((o) => o.wasmReady);
    G.useEffect(() => {
      if (!s && !e.current) return e.current = true, r(true), a("Loading"), tm().then(async () => {
        const o = await Yi();
        if (!o) throw new Error("Failed to create network instance");
        t(o), n(null);
      }).catch((o) => {
        console.error("[useWasmNetwork] \u2717 Initialization failed:", o), n(o.message), e.current = false;
      }), () => {
      };
    }, [
      s
    ]);
  };
  Ge = Ht()(wr((e, t) => ({
    timeSeriesData: {},
    getTimeSeries: (n, r) => {
      const { timeSeriesData: a } = t(), s = a[n] || {
        data: [],
        maxPoints: 100
      };
      return r === void 0 ? {
        ...s
      } : {
        maxPoints: s.maxPoints,
        data: s.data.slice(-r)
      };
    },
    updateTimeSeries: (n, r, a) => {
      const { timeSeriesData: s } = t(), o = s[n] || {
        data: [],
        maxPoints: 100
      }, i = {
        step: a,
        value: r
      }, c = [
        ...o.data,
        i
      ];
      c.length > o.maxPoints && c.shift(), e({
        timeSeriesData: {
          ...s,
          [n]: {
            ...o,
            data: c
          }
        }
      });
    },
    batchUpdateTimeSeries: (n) => {
      const { timeSeriesData: r } = t(), a = {
        ...r
      };
      Object.entries(n).forEach(([s, { value: o, step: i }]) => {
        const c = a[s] || {
          data: [],
          maxPoints: 100
        }, l = {
          step: i,
          value: o
        }, u = [
          ...c.data,
          l
        ];
        u.length > c.maxPoints && u.shift(), a[s] = {
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
      Object.entries(n).forEach(([s, o]) => {
        const i = a[s] || {
          data: [],
          maxPoints: 100
        }, c = [
          ...i.data
        ];
        for (o.forEach(({ value: l, step: u }) => {
          c.push({
            step: u,
            value: l
          });
        }); c.length > i.maxPoints; ) c.shift();
        a[s] = {
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
      const { timeSeriesData: a } = t(), s = a[n] || {
        data: [],
        maxPoints: 100
      };
      e({
        timeSeriesData: {
          ...a,
          [n]: {
            ...s,
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
  }));
  ke = Ht()(wr((e, t) => ({
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
      const { bitFieldData: s } = t();
      if (!Array.isArray(r)) {
        console.warn(`[BitFieldStore] Invalid bitField for ${n}: not an array`);
        return;
      }
      if (!(a instanceof Set)) {
        console.warn(`[BitFieldStore] Invalid activeSet for ${n}: not a Set`);
        return;
      }
      const o = r.length, i = a.size, c = Array.from(a).map((l) => l.toString()).join(" ");
      e({
        bitFieldData: {
          ...s,
          [n]: {
            bitField: r,
            activeSet: a,
            numActive: i,
            numBits: o,
            statePreview: c
          }
        }
      });
    },
    batchUpdateBitFields: (n) => {
      const { bitFieldData: r } = t(), a = {
        ...r
      };
      Object.entries(n).forEach(([s, { bitField: o, activeSet: i }]) => {
        if (!Array.isArray(o)) {
          console.warn(`[BitFieldStore] Invalid bitField for ${s}: not an array`);
          return;
        }
        if (!(i instanceof Set)) {
          console.warn(`[BitFieldStore] Invalid activeSet for ${s}: not a Set`);
          return;
        }
        const c = o.length, l = i.size, u = Array.from(i).map((v) => v.toString()).join(" ");
        a[s] = {
          bitField: o,
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
        totalBits: r.reduce((a, s) => {
          var _a2;
          return a + (((_a2 = n[s]) == null ? void 0 : _a2.numBits) || 0);
        }, 0),
        totalActive: r.reduce((a, s) => {
          var _a2;
          return a + (((_a2 = n[s]) == null ? void 0 : _a2.numActive) || 0);
        }, 0)
      };
    }
  }), {
    name: "BitFieldStore"
  }));
  function sm(e, t) {
    const n = new Array(t).fill(0);
    return e.forEach((r) => {
      r >= 0 && r < t && (n[r] = 1);
    }), n;
  }
  function Or(e, t) {
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
  const om = /* @__PURE__ */ new Set([
    "SequenceLearner",
    "ContextLearner"
  ]);
  function Xi(e, t) {
    const n = new Map(e.map((s) => [
      s.id,
      s
    ])), r = (s) => {
      const o = n.get(s);
      return o ? Or(o.type, o.params) : 0;
    }, a = [];
    for (const s of e) {
      if (!om.has(s.type)) continue;
      const o = t.filter((c) => c.target === s.id && c.type === "input").reduce((c, l) => c + r(l.source), 0), i = s.params.num_c ?? 0;
      o > 0 && i !== o && a.push({
        id: s.id,
        from: i,
        to: o
      });
    }
    return a;
  }
  function Ji(e, t) {
    const n = Or(e, t);
    return new Array(n).fill(0);
  }
  class im {
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
      const r = n.map((u) => u.duration), a = r.reduce((u, v) => u + v, 0) / r.length, s = Math.min(...r), o = Math.max(...r), i = [
        ...r
      ].sort((u, v) => u - v), c = i[Math.floor(r.length * 0.95)], l = i[Math.floor(r.length * 0.99)];
      return {
        count: r.length,
        avg: a.toFixed(2),
        min: s.toFixed(2),
        max: o.toFixed(2),
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
      return t.filter((s) => s.timestamp >= r).length;
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
      return t.filter((s) => s.timestamp >= r).length;
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
  const Ze = new im();
  typeof window < "u" && (window.perfMonitor = Ze);
  const cm = /* @__PURE__ */ new Set([
    "SynflowScalarDataSource",
    "SynflowDiscreteDataSource"
  ]), lm = /* @__PURE__ */ new Set([
    "VizBitField",
    "VizTimeSeries",
    "VizEncoder",
    "VizNode"
  ]);
  ln = function(e, t, n, r) {
    var _a2, _b;
    const a = Oa, s = (d) => {
      var _a3;
      const f = n[d.id];
      if (f) {
        const p = {
          ...f
        };
        return delete p.type, p;
      }
      return ((_a3 = d.data) == null ? void 0 : _a3.params) ?? {};
    }, o = [], i = [], c = [], l = {}, u = /* @__PURE__ */ new Map();
    for (const d of e) {
      if (d.type === "group") continue;
      const f = d.data, p = f == null ? void 0 : f.canonicalId, b = f == null ? void 0 : f.blockType;
      if (!p || !b) continue;
      u.set(d.id, p);
      const S = {
        id: p,
        type: b,
        name: (f == null ? void 0 : f.label) ?? b,
        params: s(d)
      };
      cm.has(b) ? o.push(S) : i.push(S), c.push({
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
    const v = [], y = [];
    for (const d of t) {
      const f = d.data, p = u.get(d.source), b = u.get(d.target);
      if (!p || !b) continue;
      const S = f == null ? void 0 : f.interfaceType;
      if (S) y.push({
        source: p,
        target: b,
        type: S
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
    const g = [];
    for (const d of e) {
      if (!d.type || !lm.has(d.type)) continue;
      const f = (_a2 = d.data) == null ? void 0 : _a2.targetNodeId, p = f ? u.get(f) : void 0;
      p && g.push({
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
    const x = {
      version: "0.1.0",
      blocks: i,
      datasources: o,
      connections: v,
      interfaces: y
    }, w = {};
    return g.length && (w.vizNodes = g), Object.keys(l).length && (w.inline = l), ld(x, {
      networkId: a,
      layout: ud(c),
      ...Object.keys(w).length ? {
        visualization: w
      } : {}
    });
  };
  function xr(e, t) {
    const n = t.filter((a) => (a.targetHandle ?? "input") === "input").length, r = t.filter((a) => a.targetHandle === "context").length;
    return e === "ContextLearner" ? n >= 1 && r >= 1 : n >= 1;
  }
  function dm(e, t) {
    return xr(e, t.map((n) => ({
      target: "",
      targetHandle: n.type === "context" ? "context" : n.type === "input" || n.type === "scalarInput" || n.type === "discreteInput" ? "input" : "other"
    })));
  }
  function Na(e, t) {
    var _a2;
    if (t.source === t.target) return true;
    const n = /* @__PURE__ */ new Map(), r = (o, i) => {
      const c = n.get(o) ?? [];
      c.push(i), n.set(o, c);
    };
    for (const o of e) o.source && o.type !== "vizLink" && (((_a2 = o.data) == null ? void 0 : _a2.timeOffset) ?? 0) === 0 && r(o.source, o.target);
    r(t.source, t.target);
    const a = /* @__PURE__ */ new Set(), s = [
      t.target
    ];
    for (; s.length; ) {
      const o = s.pop();
      if (o === t.source) return true;
      if (!a.has(o)) {
        a.add(o);
        for (const i of n.get(o) ?? []) s.push(i);
      }
    }
    return false;
  }
  function um(e) {
    var _a2;
    const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
    for (const s of e) {
      if (!s.source || s.type === "vizLink" || (((_a2 = s.data) == null ? void 0 : _a2.timeOffset) ?? 0) !== 0) continue;
      const o = t.get(s.source) ?? [];
      o.push(s.target), t.set(s.source, o), n.add(s.source), n.add(s.target);
    }
    const r = (s, o) => {
      const i = /* @__PURE__ */ new Set(), c = [
        ...t.get(s) ?? []
      ];
      for (; c.length; ) {
        const l = c.pop();
        if (l === o) return true;
        if (!i.has(l)) {
          i.add(l);
          for (const u of t.get(l) ?? []) c.push(u);
        }
      }
      return false;
    }, a = /* @__PURE__ */ new Set();
    for (const s of n) r(s, s) && a.add(s);
    return a;
  }
  function pm(e) {
    return e === "ContextLearner" ? "needs an input and a context connection" : "needs an input connection";
  }
  fh = function(e, t) {
    var _a2, _b;
    const n = /* @__PURE__ */ new Set(), r = [], a = /* @__PURE__ */ new Set();
    for (const o of t) o.type !== "vizLink" && (o.source && a.add(o.source), a.add(o.target));
    const s = um(t);
    for (const o of e) {
      const i = (_a2 = o.data) == null ? void 0 : _a2.blockType, c = i ? vt(i) : void 0;
      if (!i || !(c == null ? void 0 : c.category)) continue;
      const l = ((_b = o.data) == null ? void 0 : _b.label) ?? i;
      if (c.needsInit) {
        const u = t.filter((v) => v.target === o.id);
        xr(i, u) || (n.add(o.id), r.push({
          kind: "incomplete",
          level: "warn",
          nodeId: o.id,
          blockType: i,
          message: `${l} ${pm(i)}`
        }));
      } else a.has(o.id) || r.push({
        kind: "orphan",
        level: "warn",
        nodeId: o.id,
        blockType: i,
        message: `${l} isn't connected to anything`
      });
      s.has(o.id) && r.push({
        kind: "cycle",
        level: "error",
        nodeId: o.id,
        blockType: i,
        message: `${l} is part of a dependency loop with no time delay`
      });
    }
    return {
      incompleteNodeIds: n,
      issues: r
    };
  };
  function Zi(e, t, n) {
    const r = ke.getState(), a = Ge.getState();
    if (r.updateBitField(e, Ji(t, n), /* @__PURE__ */ new Set()), r.setBitFieldParams(e, {
      ...n,
      type: t
    }), Nr(t)) if (t === "PatternClassifier") {
      const s = n.num_l || 2;
      a.updateTimeSeries(e, new Array(s).fill(0), 0);
    } else a.updateTimeSeries(e, 0, 0);
  }
  const mm = "main";
  async function jr(e) {
    var _a2, _b;
    const t = e.networks[mm];
    if (!t) return false;
    const n = new Map(Xi(t.blocks ?? [], t.connections ?? []).map((l) => (console.info(`[rebuildWasm] cascaded ${l.id}.num_c ${l.from} \u2192 ${l.to} (input width)`), [
      l.id,
      l.to
    ]))), r = (l) => n.has(l.id) ? {
      ...l.params,
      num_c: n.get(l.id)
    } : l.params, a = pe.getState();
    a.destroyNetwork();
    const s = await Yi();
    if (!s) return false;
    a.setWasmNetwork(s);
    const o = Ge.getState();
    o.clearData();
    for (const l of t.datasources ?? []) {
      const u = JSON.stringify(l.params ?? {}), v = l.type === "SynflowDiscreteDataSource" ? await Ha(s, l.name, u) : await Wa(s, l.name, u);
      v && o.updateTimeSeries(`node-${v}`, 0, 0);
    }
    for (const l of t.blocks ?? []) {
      const u = r(l), v = await Va(s, l.type, {
        ...u,
        name: l.name
      });
      if (!v) continue;
      const y = `node-${v}`;
      Zi(y, l.type, u), ((_a2 = vt(l.type)) == null ? void 0 : _a2.needsInit) && s._needsInit.delete(v);
    }
    for (const l of t.interfaces ?? []) try {
      l.type === "discreteInput" ? await Ga(s, l.source, l.target) : l.type === "labelInput" ? await br(s, l.source, l.target) : await Ua(s, l.source, l.target);
    } catch (u) {
      console.warn("[rebuildWasm] interface failed:", l, u);
    }
    for (const l of t.connections ?? []) try {
      await vr(s, l.source, l.target, l.type, l.timeOffset || 0);
    } catch (u) {
      console.warn("[rebuildWasm] connection failed:", l, u);
    }
    const i = (l) => [
      ...(t.connections ?? []).filter((u) => u.target === l),
      ...(t.interfaces ?? []).filter((u) => u.target === l)
    ], c = [];
    for (const l of t.blocks ?? []) ((_b = vt(l.type)) == null ? void 0 : _b.needsInit) && dm(l.type, i(l.id)) && (s._needsInit.add(l.id), c.push(l.id));
    try {
      await cn(s);
    } catch (l) {
      console.warn("[rebuildWasm] rebuild failed:", l);
    }
    for (const l of c) s._needsInit.delete(l);
    return pe.getState().setNetworkStatus("Ready"), true;
  }
  const fm = /recursive use|unsafe aliasing|unreachable|RuntimeError/i;
  function Qi(e) {
    const t = e instanceof Error ? e.message : String(e ?? "");
    return fm.test(t);
  }
  async function hm() {
    const { nodes: e, edges: t } = ae.getState(), { bitFieldParams: n } = ke.getState(), r = ln(e, t, n);
    return jr(r);
  }
  const ym = [
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
  function gm(e) {
    const t = e instanceof Error ? e.message : String(e ?? "");
    for (const n of ym) if (n.match.test(t)) return n.message;
    return t || "Unknown network error.";
  }
  hh = function() {
    const e = G.useRef(null), t = G.useRef(null), n = G.useRef(null), r = G.useRef(0), a = G.useRef(false), o = 1e3 / 60, i = pe((S) => S.isRunning), c = pe((S) => S.speed), l = pe((S) => S.learningEnabled), u = pe((S) => S.wasmNetwork), v = pe((S) => S.getExecutionStep), y = pe((S) => S.pendingSingleStep), g = pe((S) => S.clearSingleStepFlag), x = ae((S) => S.nodes);
    ae((S) => S.edges);
    const w = ae((S) => S.batchUpdateNodeData), d = Ge((S) => S.batchUpdateTimeSeriesMultiple), f = ke((S) => S.batchUpdateBitFields);
    ke((S) => S.bitFieldData), G.useEffect(() => {
      y && u && !i && !a.current && (b(), g());
    }, [
      y,
      u,
      i
    ]), G.useEffect(() => {
      if (i && u) if (t.current || (r.current = performance.now()), c < 10) {
        let S = function() {
          const h = performance.now();
          h - _ >= c && !a.current && (b(), _ = h), e.current = setTimeout(S, 0);
        }, _ = performance.now();
        S();
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
      w
    ]);
    function p(S) {
      if (S - r.current < o) {
        t.current = requestAnimationFrame(p);
        return;
      }
      t.current = null, r.current = S;
      const h = n.current;
      if (!h) return;
      Ze.recordFrame();
      const m = Ze.startTimer("batchUpdates");
      h.timeSeriesUpdates && Object.keys(h.timeSeriesUpdates).length > 0 && d(h.timeSeriesUpdates), h.bitFieldUpdates && Object.keys(h.bitFieldUpdates).length > 0 && f(h.bitFieldUpdates), h.nodeDataUpdates && Object.keys(h.nodeDataUpdates).length > 0 && w(h.nodeDataUpdates), Ze.endTimer(m);
      let P = 0;
      Object.values(h.timeSeriesUpdates || {}).forEach((N) => {
        P += N.length;
      }), Object.keys(h.timeSeriesUpdates || {}).length, Object.keys(h.bitFieldUpdates || {}).length, Object.keys(h.nodeDataUpdates || {}).length, n.current = {
        timeSeriesUpdates: {},
        bitFieldUpdates: {},
        nodeDataUpdates: {}
      };
    }
    async function b() {
      var _a2;
      if (a.current) return;
      a.current = true;
      const S = performance.now(), _ = Ze.startTimer("executeStep");
      Ze.recordExecutionStep();
      const h = {
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
        await nm(u, l), h.executeNetwork = performance.now() - m;
        let P = 0;
        pe.setState((te) => (P = te.executionStep + 1, {
          executionStep: P
        }));
        const N = v();
        m = performance.now();
        const C = await rm(u);
        h.getExecutionState = performance.now() - m;
        const T = {}, O = {}, F = {};
        m = performance.now();
        const z = x.filter((te) => te.data.wasmHandle !== void 0), W = z.filter((te) => te.data.blockType !== "SynflowScalarDataSource" && te.data.blockType !== "SynflowDiscreteDataSource");
        for (let te = 0; te < W.length; te++) {
          const V = W[te], D = V.data.wasmHandle, q = (_a2 = C == null ? void 0 : C.blocks) == null ? void 0 : _a2.find((L) => L.id === D);
          if (q && q.state && q.state.numBits !== void 0) try {
            const { numBits: L, activeBits: E } = q.state, I = sm(E, L), B = new Set(E);
            T[V.id] = {
              bitField: I,
              activeSet: B
            }, F[V.id] = {
              hasOutput: true
            }, V.id, I.length, B.size;
          } catch (L) {
            console.error(`[Execution Loop] Failed to collect bitfield for node ${V.id}:`, L);
          }
        }
        h.collectBitField = performance.now() - m, m = performance.now();
        const X = z.map((te, V) => ({
          id: te.data.wasmHandle,
          nodeType: te.data.blockType,
          nodeId: te.id,
          index: V
        })), ie = await am(u, X);
        h.getBlockOutputs = performance.now() - m, m = performance.now();
        for (const { nodeId: te, id: V, nodeType: D } of X) {
          const q = ie[V];
          Array.isArray(q) ? q.length > 0 && q.every((E) => typeof E == "number" && isFinite(E)) ? (O[te] = {
            value: q,
            step: N
          }, q.length, void 0) : console.warn(`[Execution Loop] Invalid vector output for node ${te}:`, q) : typeof q == "number" && isFinite(q) ? (O[te] = {
            value: q,
            step: N
          }, (D === "SynflowScalarDataSource" || D === "SynflowDiscreteDataSource" || (D == null ? void 0 : D.includes("DataSource"))) && (F[te] || (F[te] = {}), F[te].currentValue = q), void 0) : q != null && console.warn(`[Execution Loop] Invalid output for node ${te}:`, q);
        }
        h.processBlockOutputs = performance.now() - m, m = performance.now();
        const oe = O;
        n.current || (n.current = {
          timeSeriesUpdates: {},
          bitFieldUpdates: {},
          nodeDataUpdates: {}
        }), Object.entries(oe).forEach(([te, V]) => {
          n.current.timeSeriesUpdates[te] || (n.current.timeSeriesUpdates[te] = []), n.current.timeSeriesUpdates[te].push(V);
        }), Object.assign(n.current.bitFieldUpdates, T), Object.assign(n.current.nodeDataUpdates, F), h.collectUpdates = performance.now() - m, m = performance.now(), t.current || (t.current = requestAnimationFrame(p)), h.scheduleRAF = performance.now() - m, h.total = performance.now() - S, P % 100 === 0 && console.log(`[Execution Profile] Step ${P}:`, {
          executeNetwork: `${h.executeNetwork.toFixed(2)}ms`,
          getExecutionState: `${h.getExecutionState.toFixed(2)}ms`,
          getBlockOutputs: `${h.getBlockOutputs.toFixed(2)}ms`,
          collectUpdates: `${h.collectUpdates.toFixed(2)}ms`,
          collectBitField: `${h.collectBitField.toFixed(2)}ms`,
          processBlockOutputs: `${h.processBlockOutputs.toFixed(2)}ms`,
          scheduleRAF: `${h.scheduleRAF.toFixed(2)}ms`,
          total: `${h.total.toFixed(2)}ms`,
          percentages: {
            executeNetwork: `${(h.executeNetwork / h.total * 100).toFixed(1)}%`,
            getExecutionState: `${(h.getExecutionState / h.total * 100).toFixed(1)}%`,
            getBlockOutputs: `${(h.getBlockOutputs / h.total * 100).toFixed(1)}%`,
            collectUpdates: `${(h.collectUpdates / h.total * 100).toFixed(1)}%`,
            collectBitField: `${(h.collectBitField / h.total * 100).toFixed(1)}%`,
            processBlockOutputs: `${(h.processBlockOutputs / h.total * 100).toFixed(1)}%`,
            scheduleRAF: `${(h.scheduleRAF / h.total * 100).toFixed(1)}%`
          }
        }), x.length, Ze.endTimer(_);
      } catch (m) {
        console.error("[Execution Loop] Error during step:", m), v(), m.message, m.stack, pe.setState({
          isRunning: false
        }), Qi(m) && pe.getState().setLastError(gm(m)), Ze.endTimer(_);
      } finally {
        a.current = false;
      }
    }
  };
  let vm, bm;
  _m = Ht((e) => ({
    config: null,
    capabilities: Rs(void 0),
    setInteractivity: (t) => e({
      config: t,
      capabilities: Rs(t ?? void 0)
    })
  }));
  vm = {
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
  };
  bm = {
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
  function xm(e, t, n) {
    const r = ka(e, t);
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
      ui: bm,
      inputRange: r.viewBounds,
      period: a
    };
  }
  const ni = "vizLink", Sm = (e) => `viz-edge-${e}`;
  ec = function(e, t) {
    var _a2;
    const n = new Set(e.map((s) => s.id)), r = t.filter((s) => s.type !== ni), a = [];
    for (const s of e) {
      if (!jt(s.type)) continue;
      const o = ((_a2 = s.data) == null ? void 0 : _a2.targetNodeId) ?? null;
      !o || !n.has(o) || a.push({
        id: Sm(s.id),
        source: o,
        target: s.id,
        type: ni,
        selectable: false,
        data: {}
      });
    }
    return [
      ...r,
      ...a
    ];
  };
  const wm = (e) => Oi[Ri[e]];
  function km(e) {
    if (!e) return [];
    const t = [];
    return /DataSource$/.test(e) || t.push("bitfield"), Nr(e) && t.push("timeseries"), an(e) && t.push("encoderChart"), t;
  }
  const ri = {
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
  function tc(e) {
    var _a2, _b;
    const { vizKind: t, position: n, targetNodeId: r = null, size: a } = e, s = Ri[t], o = `viz-${Date.now()}`, { nodes: i, edges: c, setNodes: l, setEdges: u, setManualLayout: v } = ae.getState(), y = r ? i.filter((f) => {
      var _a3;
      return !(jt(f.type) && f.type === s && ((_a3 = f.data) == null ? void 0 : _a3.targetNodeId) === r);
    }) : i, g = y.filter((f) => f.type !== "group").length, x = r ? (_b = (_a2 = y.find((f) => f.id === r)) == null ? void 0 : _a2.style) == null ? void 0 : _b["--node-bg"] : void 0, w = {
      id: o,
      type: s,
      position: n,
      style: {
        "--node-bg": x ?? Ra(g),
        width: (a == null ? void 0 : a.width) ?? ri[s].width,
        height: (a == null ? void 0 : a.height) ?? ri[s].height
      },
      data: {
        id: o,
        label: Oi[s],
        vizKind: t,
        targetNodeId: r
      }
    }, d = Aa([
      ...y,
      w
    ], o);
    return l(d), u(ec(d, c)), v(true), o;
  }
  yh = {
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
  };
  nc = {
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
  gh = function() {
    const e = {};
    for (const [t, n] of Object.entries(nc)) e[t] = n.description;
    return e;
  };
  function Pm({ data: e, selected: t, type: n = "group" }) {
    return e.label, k.jsx("div", {
      className: bt("circuit-node", n, "circuit-hidden")
    });
  }
  const Em = G.memo(Pm), Cm = {
    width: 340,
    height: 340
  }, $m = {
    width: 320,
    height: 300
  }, Nm = {
    width: 380,
    height: 400
  };
  function Ka(e, t = false) {
    return e === "PatternClassifier" ? {
      ...Nm
    } : t ? {
      ...$m
    } : {
      ...Cm
    };
  }
  const Im = {
    borderColor: "transparent",
    borderWidth: 4
  }, Tm = {
    width: 14,
    height: 14,
    background: "transparent",
    border: "none"
  }, ai = 24, Dm = 50, Rm = 52, pr = 8, Om = 88, jm = 170, Lm = 2.5;
  function rc(e, t) {
    let n = ai + Dm;
    return t.valueBox && (n += pr + Rm), t.plot && (n += pr + Math.ceil((e - ai) / Lm)), t.bitfield && (n += pr + Om), t.encoderViz && (n += pr + jm), Math.round(n);
  }
  function Lr({ minWidth: e = 280, minHeight: t = 80, valueBox: n, plot: r, bitfield: a, encoderViz: s }) {
    const o = Ic(), i = Tc((u) => {
      var _a2;
      const v = o ? u.nodeLookup.get(o) : void 0;
      return (v == null ? void 0 : v.width) ?? ((_a2 = v == null ? void 0 : v.measured) == null ? void 0 : _a2.width) ?? e;
    }), l = n || r || a || s ? Math.max(t, rc(i, {
      valueBox: n,
      plot: r,
      bitfield: a,
      encoderViz: s
    })) : t;
    return k.jsx(Dc, {
      minWidth: e,
      minHeight: l,
      lineStyle: Im,
      handleStyle: Tm
    });
  }
  const Mr = {
    interactive: false,
    showChrome: false,
    colorCoded: true,
    labelMode: "none",
    gapPx: 1,
    paddingPx: 2
  };
  function Mm(e) {
    if (!Array.isArray(e)) return [];
    const t = /* @__PURE__ */ new Set(), n = [];
    for (const r of e) {
      const a = String(r);
      t.has(a) || (t.add(a), n.push(a));
    }
    return n;
  }
  function Ar(e, t) {
    const n = t ?? Mm(e).length;
    return Array.from({
      length: Math.max(0, n)
    }, (r, a) => Si(a));
  }
  const Am = {
    error: "\u26D4",
    warn: "\u26A0",
    info: "\u2139"
  };
  function Fm({ alerts: e }) {
    return e.length ? k.jsx("div", {
      className: "node-alerts nodrag",
      children: e.map((t, n) => k.jsx("span", {
        className: bt("node-alert", `node-alert-${t.level}`),
        "data-tooltip": t.message,
        "aria-label": t.message,
        role: "img",
        children: Am[t.level]
      }, `${t.level}-${n}`))
    }) : null;
  }
  const qm = G.memo(Fm);
  function Bm({ label: e, type: t, alerts: n }) {
    return k.jsx("div", {
      className: "node-header",
      children: k.jsxs("div", {
        className: "node-content",
        children: [
          k.jsxs("div", {
            className: "node-name-row",
            children: [
              k.jsx("div", {
                className: "node-name",
                children: e
              }),
              n && n.length > 0 && k.jsx(qm, {
                alerts: n
              })
            ]
          }),
          k.jsx("div", {
            className: "node-id",
            children: t
          })
        ]
      })
    });
  }
  const Ya = G.memo(Bm);
  function ac() {
    return {
      updateBlockConfig: G.useCallback(async (t, n) => {
        var _a2, _b, _c;
        const { nodes: r, edges: a } = ae.getState(), s = r.find((d) => d.id === t), o = (_a2 = s == null ? void 0 : s.data) == null ? void 0 : _a2.canonicalId;
        if (!s || !o) return false;
        const i = pe.getState(), c = i.isRunning;
        c && i.stop();
        const { bitFieldParams: l } = ke.getState(), u = ln(r, a, l), v = u.networks[Oa], y = (_b = v == null ? void 0 : v.blocks) == null ? void 0 : _b.find((d) => d.id === o), g = (_c = v == null ? void 0 : v.datasources) == null ? void 0 : _c.find((d) => d.id === o);
        if (y) y.params = n;
        else if (g) g.params = n;
        else return false;
        if (!await jr(u)) return false;
        g && ae.getState().updateNodeData(t, {
          params: n
        });
        const w = ae.getState();
        return w.setNodes([
          ...w.nodes
        ]), c && pe.getState().start(), true;
      }, [])
    };
  }
  let Ia = false;
  function Xa() {
    Ia = true;
  }
  function zm() {
    return Ia ? (Ia = false, true) : false;
  }
  function sc() {
    return k.jsx(Ll, {
      size: 22,
      stroke: 2,
      "aria-hidden": true
    });
  }
  function Vm({ nodeId: e, sourceType: t, config: n }) {
    const [r, a] = G.useState(false), { updateBlockConfig: s } = ac(), { deleteElements: o } = ut();
    return k.jsxs(k.Fragment, {
      children: [
        k.jsx(tt, {
          label: "Configure datasource",
          placement: "top",
          children: k.jsx("button", {
            className: "node-inspect-btn nodrag",
            "aria-label": "Configure datasource",
            onClick: (i) => {
              i.stopPropagation(), a(true);
            },
            children: k.jsx(sc, {})
          })
        }),
        r && k.jsx(Dd, {
          type: t,
          initialConfig: n,
          submitLabel: "Update",
          onCancel: () => a(false),
          onCreate: async (i) => {
            a(false), await s(e, i);
          },
          onRemove: () => {
            a(false), Xa(), o({
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
  const Wm = G.memo(Vm);
  function Um({ nodeId: e }) {
    const { deleteElements: t } = ut();
    return k.jsx(tt, {
      label: "Remove node",
      placement: "top",
      children: k.jsx("button", {
        className: "node-remove-btn nodrag",
        "aria-label": "Remove node",
        onClick: (n) => {
          n.stopPropagation(), Xa(), t({
            nodes: [
              {
                id: e
              }
            ]
          });
        },
        children: k.jsx(Ql, {
          size: 22,
          stroke: 2,
          "aria-hidden": true
        })
      })
    });
  }
  let Fr;
  Fr = G.memo(Um);
  sn = Ht()((e) => ({
    incompleteNodeIds: /* @__PURE__ */ new Set(),
    issues: [],
    byNode: /* @__PURE__ */ new Map(),
    setValidation: (t, n) => {
      const r = /* @__PURE__ */ new Map();
      for (const a of n) {
        const s = r.get(a.nodeId) ?? [];
        s.push(a), r.set(a.nodeId, s);
      }
      e({
        incompleteNodeIds: t,
        issues: n,
        byNode: r
      });
    }
  }));
  function Ja({ data: e, selected: t, type: n, iconShape: r, id: a }) {
    var _a2, _b;
    const s = e.plotVisible ?? true, { getNode: o } = ut(), i = ((_b = (_a2 = o(a)) == null ? void 0 : _a2.style) == null ? void 0 : _b["--node-bg"]) ?? "var(--accent-blue)", c = sn((_) => _.byNode.get(a)), l = ae((_) => _.connecting && _.viableTargetIds.has(a)), u = ae((_) => _.colorCodedBits), v = e.currentValue ?? null, y = Ge((_) => {
      var _a3;
      return (_a3 = _.timeSeriesData[a]) == null ? void 0 : _a3.data;
    }), g = G.useMemo(() => !y || !Array.isArray(y) ? [] : y.slice(-50), [
      y
    ]), x = () => v == null ? "---" : e.sourceType === "scalar" ? typeof v == "number" ? v.toFixed(2) : String(v) : e.sourceType === "discrete" ? typeof v == "number" ? v.toFixed(0) : String(v) : v.toString(), w = g && g.length > 0, d = e.sourceType === "scalar", f = e.sourceType === "discrete", p = G.useMemo(() => {
      var _a3;
      if (!f) return [];
      const _ = (_a3 = e.params) == null ? void 0 : _a3.patterns;
      if (!Array.isArray(_) || _.length === 0) return [];
      const h = new Set(_).size, m = typeof v == "number" ? Math.trunc(v) : -1, P = new Array(h).fill(0);
      return m >= 0 && m < h && (P[m] = 1), P;
    }, [
      f,
      e.params,
      v
    ]), b = p.length > 0, S = G.useMemo(() => {
      var _a3;
      if (b) return Ar((_a3 = e.params) == null ? void 0 : _a3.patterns);
    }, [
      b,
      e.params
    ]);
    return k.jsxs("div", {
      className: bt("custom-node", "data-source", n, {
        selected: t,
        "viable-target": l
      }),
      children: [
        k.jsx(Lr, {
          valueBox: true,
          plot: w && d && s,
          bitfield: b
        }),
        k.jsx(Fr, {
          nodeId: a
        }),
        k.jsx(Wm, {
          nodeId: a,
          sourceType: e.blockType,
          config: e.params ?? {}
        }),
        k.jsx(Ya, {
          nodeID: e.canonicalId,
          label: e.label,
          type: e.blockType,
          iconShape: r,
          alerts: c ?? []
        }),
        k.jsx("div", {
          className: "node-current-value",
          children: k.jsx("div", {
            className: "value-display",
            children: x()
          })
        }),
        b && k.jsx("div", {
          className: "node-bitfield-section",
          children: k.jsx(kr, {
            bitfield: p,
            color: i,
            ...S ? {
              colorMap: S,
              colorMapColorGaps: true,
              gapColorPx: 2
            } : {},
            ...Mr,
            colorCoded: u,
            gapPx: 4,
            borderPx: 2
          })
        }),
        w && d && s && k.jsx("div", {
          className: "node-plot-section",
          style: {
            pointerEvents: "none"
          },
          children: k.jsx(Pr, {
            data: g,
            color: i
          })
        }),
        k.jsx(Qe, {
          type: "source",
          position: et.Bottom,
          id: "output"
        })
      ]
    });
  }
  G.memo(Ja);
  function Hm(e) {
    return k.jsx(Ja, {
      ...e,
      type: "data-source-discrete",
      iconShape: "circle"
    });
  }
  function Gm(e) {
    return k.jsx(Ja, {
      ...e,
      type: "data-source-scalar",
      iconShape: "circle"
    });
  }
  const Km = new Bc(), Ym = {
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
  async function Xm(e, t, n = {}, r = null) {
    if (console.log("ELK Layout: ", e, t, n), !e || e.length === 0) return {
      nodes: [],
      edges: []
    };
    const a = n["elk.direction"] || "RIGHT", s = a === "RIGHT" || a === "LEFT", o = e.find((h) => h.type === "group"), i = e.filter((h) => h.type !== "group"), c = [
      "DiscreteDataSource",
      "ScalarDataSource",
      "group"
    ], l = {
      id: "root",
      layoutOptions: n,
      children: i.map((h) => ({
        id: h.id,
        width: h.measured.width || 150,
        height: h.measured.height || 50
      })),
      edges: t.map((h) => ({
        id: h.id,
        sources: [
          h.source
        ],
        targets: [
          h.target
        ]
      }))
    };
    let u;
    try {
      const h = await Km.layout(l);
      console.log("ELK Layouted Graph: ", h), u = h.children.map((m) => ({
        ...e.find((N) => N.id === m.id),
        position: {
          x: m.x,
          y: m.y
        },
        sourcePosition: s ? "right" : "bottom",
        targetPosition: s ? "left" : "top"
      }));
    } catch (h) {
      console.error("[ELK Layout] Error:", h);
    }
    const v = u.filter((h) => c.includes(h.type)), y = u.filter((h) => !c.includes(h.type)), g = au(y), { x, y: w, width: d, height: f } = g;
    console.log("[ELK Layout] Calculated parent bounds from layout data:", g);
    const p = 40, b = {
      ...o,
      position: {
        x: x - p,
        y: w - p
      },
      style: {
        ...o.style,
        width: d + p * 2,
        height: f + p * 2
      },
      data: {
        ...o.data,
        computedBounds: {
          x,
          y: w,
          width: d,
          height: f
        }
      }
    }, S = y.map((h) => ({
      ...h,
      position: {
        x: h.position.x - x + p,
        y: h.position.y - w + p
      },
      parentId: o.id
    }));
    return {
      nodes: [
        b,
        ...v,
        ...S
      ],
      edges: t
    };
  }
  function Jm(e, t) {
    const n = {}, r = {};
    e.forEach((i) => {
      r[i.id] = 0;
    }), t.forEach((i) => {
      r[i.target] !== void 0 && r[i.target]++;
    });
    const s = e.filter((i) => r[i.id] === 0).map((i) => ({
      node: i,
      level: 0
    })), o = /* @__PURE__ */ new Set();
    for (; s.length > 0; ) {
      const { node: i, level: c } = s.shift();
      if (o.has(i.id)) continue;
      o.add(i.id), n[i.id] = c, t.filter((u) => u.source === i.id).forEach((u) => {
        const v = e.find((y) => y.id === u.target);
        v && !o.has(v.id) && s.push({
          node: v,
          level: c + 1
        });
      });
    }
    return e.forEach((i) => {
      n[i.id] === void 0 && (n[i.id] = 0);
    }), n;
  }
  function Zm(e, t, n = 500, r = 600) {
    if (e.length === 0) return e;
    const a = Jm(e, t), s = {};
    return e.forEach((i) => {
      const c = a[i.id] || 0;
      s[c] || (s[c] = []), s[c].push(i);
    }), e.map((i) => {
      const c = a[i.id] || 0, l = s[c], u = l.indexOf(i), v = c * n + 100, x = -((l.length - 1) * r) / 2 + u * r;
      return {
        ...i,
        position: {
          x: v,
          y: x
        }
      };
    });
  }
  si = {
    top: "20px",
    right: "20px",
    bottom: "60px",
    left: "200px"
  };
  Qm = function() {
    const e = ae((c) => c.nodes), t = ae((c) => c.edges), n = ae((c) => c.setNodes), r = ae((c) => c.setEdges), { fitView: a, getNodesBounds: s } = ut(), o = G.useCallback(() => {
      if (e.length === 0) {
        console.log("[Layout] No nodes to layout");
        return;
      }
      const c = Zm(e, t);
      n(c), setTimeout(() => {
        a({
          duration: 300,
          padding: si
        });
      }, 0), console.log(`[Layout] Applied BFS hierarchical layout to ${e.length} nodes`);
    }, [
      e,
      t,
      n,
      a
    ]), i = G.useCallback(async (c = "dccNetwork", l = {}) => {
      const u = ae.getState().nodes, v = ae.getState().edges, y = ae.getState().layoutOptions;
      if (console.log("[Layout] layoutOptions:", y), u.length === 0) {
        console.log("[Layout] No nodes to layout");
        return;
      }
      const g = {
        ...Ym[c],
        ...l,
        ...y
      };
      try {
        const { nodes: x, edges: w } = await Xm(u, v, g, s);
        console.log("[Layout] edges, layoutedEdges:", v, w), n(x), r(w), setTimeout(() => {
          a({
            duration: 300,
            padding: si
          });
        }, 50), console.log(`[Layout] Applied ELK ${c} layout to ${u.length} nodes`);
      } catch (x) {
        console.error("[Layout] ELK layout failed:", x);
      }
    }, [
      n,
      r,
      a,
      s
    ]);
    return {
      applyHierarchical: o,
      applyElk: i,
      applyElkDefault: G.useCallback(() => i("dccNetwork"), [
        i
      ]),
      applyElkHierarchical: G.useCallback(() => i("hierarchical"), [
        i
      ]),
      applyElkCompact: G.useCallback(() => i("hierarchicalCompact"), [
        i
      ]),
      applyElkHorizontal: G.useCallback(() => i("horizontalFlow"), [
        i
      ]),
      applyElkForce: G.useCallback(() => i("force"), [
        i
      ]),
      applyElkRadial: G.useCallback(() => i("radial"), [
        i
      ])
    };
  };
  class ef {
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
      const n = [], r = new Set((t.blocks || []).map((o) => o.id)), a = new Set((t.datasources || []).map((o) => o.id)), s = /* @__PURE__ */ new Set([
        ...r,
        ...a
      ]);
      return t.connections && t.connections.forEach((o, i) => {
        r.has(o.source) || n.push(`Connection ${i}: source ${o.source} not found in blocks`), r.has(o.target) || n.push(`Connection ${i}: target ${o.target} not found in blocks`);
      }), t.interfaces && t.interfaces.forEach((o, i) => {
        s.has(o.source) || n.push(`Interface ${i}: source ${o.source} not found`), r.has(o.target) || n.push(`Interface ${i}: target ${o.target} must be a block ID`);
      }), {
        valid: n.length === 0,
        errors: n
      };
    }
  }
  const oi = new ef();
  _h = function() {
    const e = ae((v) => v.setNodes), t = ae((v) => v.setEdges), n = ae((v) => v.reset), r = ae((v) => v.setLayoutOptions), a = pe((v) => v.setNetworkStatus), s = Ge((v) => v.clearData), o = Ge((v) => v.updateTimeSeries), i = ke((v) => v.clearData), { applyElkDefault: c } = Qm(), l = G.useCallback(async (v) => {
      const y = pe.getState().wasmNetwork;
      if (!y) return console.error("[Demo Init] WASM network not ready"), false;
      const g = v.name ?? "Network", x = v.layout || {
        "elk.direction": "RIGHT"
      };
      n(), s(), i(), oi.reset(), oi.loadFromConfig(v);
      const w = [], d = [], f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), b = "parent-node-0", S = {
        id: b,
        type: "group",
        position: {
          x: 0,
          y: 0
        },
        data: {
          id: b,
          label: "CIRCUIT - " + g,
          circuitStyle: 2
        },
        draggable: false,
        selectable: false,
        connectable: false,
        style: {
          pointerEvents: "none"
        }
      };
      w.push(S);
      for (const m of v.datasources || []) if (m.type === "SynflowScalarDataSource") {
        const P = JSON.stringify(m.params), N = await Wa(y, m.name, P);
        if (N === null) {
          console.error("[Demo Init] Failed to create synflow scalar datasource:", m);
          continue;
        }
        p.set(m.id, N);
        const C = `node-${N}`;
        f.set(m.id, C);
        const T = {
          id: C,
          type: "SynflowScalarDataSource",
          position: {
            x: 0,
            y: 0
          },
          data: {
            id: C,
            label: m.name,
            canonicalId: N,
            blockType: "SynflowScalarDataSource",
            wasmHandle: N,
            sourceId: `synflow-${m.id}`,
            sourceType: "scalar",
            hasOutput: true,
            hasInput: false,
            params: m.params
          }
        };
        w.push(T), o(C, 0, 0);
      } else if (m.type === "SynflowDiscreteDataSource") {
        const P = JSON.stringify(m.params), N = await Ha(y, m.name, P);
        if (N === null) {
          console.error("[Demo Init] Failed to create synflow discrete datasource:", m);
          continue;
        }
        p.set(m.id, N);
        const C = `node-${N}`;
        f.set(m.id, C);
        const T = {
          id: C,
          type: "SynflowDiscreteDataSource",
          position: {
            x: 0,
            y: 0
          },
          data: {
            id: C,
            label: m.name,
            canonicalId: N,
            blockType: "SynflowDiscreteDataSource",
            wasmHandle: N,
            sourceId: `synflow-discrete-${m.id}`,
            sourceType: "discrete",
            hasOutput: true,
            hasInput: false,
            params: m.params
          }
        };
        w.push(T), o(C, 0, 0);
      } else {
        console.error("[Demo Init] Unsupported datasource type:", m.type), console.error("[Demo Init] Only synflow datasources are supported. Use SynflowScalarDataSource or SynflowDiscreteDataSource.");
        continue;
      }
      const _ = new Map(Xi(v.blocks || [], v.connections || []).map((m) => (console.info(`[Demo Init] cascaded ${m.id}.num_c ${m.from} \u2192 ${m.to} (input width)`), [
        m.id,
        m.to
      ])));
      for (const m of v.blocks || []) {
        const P = _.has(m.id) ? {
          ...m.params,
          num_c: _.get(m.id)
        } : m.params, N = await Va(y, m.type, {
          ...P,
          name: m.name
        });
        if (N === null) {
          console.error("[Demo Init] Failed to create WASM block:", m);
          continue;
        }
        p.set(m.id, N);
        const C = `node-${N}`;
        f.set(m.id, C), Zi(C, m.type, P);
        const T = {
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
            canonicalId: N,
            blockType: m.type,
            wasmHandle: N,
            hasInput: true,
            hasOutput: true,
            hasContext: m.type === "SequenceLearner" || m.type === "ContextLearner",
            hasLabel: m.type === "PatternClassifier",
            enabled: true,
            bitfieldVisible: true
          }
        };
        w.push(T);
      }
      for (const m of v.interfaces || []) {
        const P = f.get(m.source), N = f.get(m.target);
        if (!P || !N) {
          console.error("[Demo Init] Invalid interface:", m);
          continue;
        }
        const C = p.get(m.source), T = p.get(m.target);
        C !== void 0 && T !== void 0 && (m.type === "labelInput" ? await br(y, C, T) : m.type === "discreteInput" ? await Ga(y, C, T) : m.type === "labelInput" ? await br(y, C, T) : await Ua(y, C, T));
        let O, F;
        switch (m.type) {
          case "scalarInput":
            O = "scalarData", F = "input";
            break;
          case "discreteInput":
            O = "discreteData", F = "input";
            break;
          case "labelInput":
            O = "label", F = "label";
            break;
          default:
            O = "dataSource", F = "input", console.warn(`[Demo Init] Unknown interface type: ${m.type}`);
        }
        const z = {
          id: `edge-iface-${m.source}-${m.target}-${m.type}`,
          source: P,
          target: N,
          sourceHandle: "output",
          targetHandle: F,
          type: O,
          data: {
            animated: false,
            interfaceType: m.type,
            canonicalSource: m.source,
            canonicalTarget: m.target
          }
        };
        d.push(z);
      }
      for (const m of v.connections || []) {
        const P = f.get(m.source), N = f.get(m.target), C = p.get(m.source), T = p.get(m.target);
        if (!P || !N || C === void 0 || T === void 0) {
          console.error("[Demo Init] Invalid connection:", m);
          continue;
        }
        await vr(y, C, T, m.type, m.timeOffset || 0);
        const O = {
          id: `edge-conn-${m.source}-${m.target}-${m.type}`,
          source: P,
          target: N,
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
        d.push(O);
      }
      await cn(y);
      let h = 0;
      for (const m of w) {
        if (m.type === "group") continue;
        const P = m.type === "SynflowScalarDataSource" || m.type === "SynflowDiscreteDataSource";
        m.style = {
          ...m.style ?? {},
          "--node-bg": P ? "#000000" : Ra(h),
          ...Ka(m.type ?? "", P)
        }, h++;
      }
      return e(w), t(d), a("Ready"), r(x), setTimeout(() => {
        c();
      }, 50), true;
    }, [
      e,
      t,
      n,
      a,
      s,
      o,
      i,
      c
    ]);
    return {
      initializeDemo: G.useCallback(async (v) => {
        const y = nc[v];
        return y ? l(y) : (console.error("[Demo Init] Invalid demo key:", v), false);
      }, [
        l
      ]),
      initializeFromCanonical: l
    };
  };
  const tf = 520, nf = 420, rf = 9, ii = 9, af = [
    "bins",
    "per-bin"
  ];
  function sf({ blockType: e, values: t }) {
    Pl();
    const n = Be((P) => P.setEncoders), r = Be((P) => P.setViewBounds), a = Be((P) => P.setScalarCursor), s = Be((P) => P.setRefPoints), o = Be((P) => P.setStackedActive), i = Be((P) => P.stackedOrder), c = Be((P) => P.stackedActive), l = Be((P) => P.lastData), u = Be((P) => P.scalarCursor), v = Be((P) => P.viewBounds), y = Be((P) => P.subplotParams);
    G.useEffect(() => {
      s([]), o(af);
      const P = ka(e, t);
      P && a((P.viewBounds[0] + P.viewBounds[1]) / 2);
    }, []), G.useEffect(() => {
      const P = ka(e, t);
      P && (n([
        P.encoder
      ]), r(P.viewBounds));
    }, [
      e,
      t,
      n,
      r
    ]);
    const g = G.useMemo(() => i.filter((P) => c.includes(P)), [
      i,
      c
    ]), x = G.useRef(null), [w, d] = G.useState({
      w: tf,
      h: nf
    });
    G.useEffect(() => {
      const P = x.current;
      if (!P || typeof ResizeObserver > "u") return;
      const N = new ResizeObserver((C) => {
        var _a2;
        const T = (_a2 = C[0]) == null ? void 0 : _a2.contentRect;
        T && d({
          w: Math.max(120, Math.floor(T.width)),
          h: Math.max(120, Math.floor(T.height))
        });
      });
      return N.observe(P), () => N.disconnect();
    }, []);
    const [f, p] = G.useState(null), b = G.useCallback((P) => {
      p((N) => N && N.left === P.left && N.right === P.right ? N : {
        left: P.left,
        right: P.right
      });
    }, []), S = (f == null ? void 0 : f.left) ?? bi, _ = (f == null ? void 0 : f.right) ?? w.w - xi, h = rf + Math.max(0, S - ii), m = Math.max(20, _ - S + 2 * ii);
    return k.jsxs("div", {
      className: "vec-dock",
      children: [
        k.jsxs("div", {
          className: "vec-slider-row",
          children: [
            k.jsx("div", {
              className: "vec-slider-spacer",
              style: {
                width: h
              }
            }),
            k.jsx("div", {
              className: "vec-slider-wrap",
              style: {
                width: m
              },
              children: k.jsx(El, {
                bare: true
              })
            })
          ]
        }),
        k.jsx("div", {
          className: "vec-chart-cell",
          ref: x,
          children: k.jsx(Cl, {
            specs: g,
            data: l,
            cursor: u,
            viewBounds: v,
            params: y,
            width: w.w,
            height: w.h,
            onPlotRect: b
          })
        })
      ]
    });
  }
  function of() {
    return k.jsxs("div", {
      className: "vec-aux",
      children: [
        k.jsx("div", {
          className: "vec-aux-bits",
          children: k.jsx($l, {})
        }),
        k.jsx("div", {
          className: "vec-aux-subplots",
          children: k.jsx(Nl, {})
        })
      ]
    });
  }
  function cf({ nodeId: e, blockType: t }) {
    const [n, r] = G.useState(false), { updateBlockConfig: a } = ac(), { deleteElements: s } = ut(), o = ke((c) => c.getBitFieldParams), i = () => {
      const c = o(e) ?? {}, l = {};
      for (const [u, v] of Object.entries(c)) u !== "type" && (typeof v == "number" || typeof v == "boolean") && (l[u] = v);
      return l;
    };
    return k.jsxs(k.Fragment, {
      children: [
        k.jsx(tt, {
          label: "Configure node",
          placement: "top",
          children: k.jsx("button", {
            className: "node-inspect-btn nodrag",
            "aria-label": "Configure node",
            onClick: (c) => {
              c.stopPropagation(), r(true);
            },
            children: k.jsx(sc, {})
          })
        }),
        n && k.jsx(Td, {
          type: t,
          initialValues: i(),
          submitLabel: "Update",
          renderPreview: an(t) ? (c) => k.jsx(sf, {
            blockType: t,
            values: c
          }) : void 0,
          renderAux: an(t) ? () => k.jsx(of, {}) : void 0,
          onCancel: () => r(false),
          onCreate: async (c) => {
            r(false), await a(e, c);
          },
          onRemove: () => {
            r(false), Xa(), s({
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
  const oc = G.memo(cf);
  function lf({ nodeId: e, blockType: t }) {
    const n = km(t), [r, a] = G.useState(false), s = G.useRef(null), o = G.useRef(null), i = G.useRef(null), c = G.useRef(false), { getInternalNode: l, getNode: u } = ut(), v = ae((d) => d.nodes), y = G.useMemo(() => {
      var _a2, _b;
      const d = /* @__PURE__ */ new Set();
      for (const f of v) jt(f.type) && ((_a2 = f.data) == null ? void 0 : _a2.targetNodeId) === e && ((_b = f.data) == null ? void 0 : _b.vizKind) && d.add(f.data.vizKind);
      return d;
    }, [
      v,
      e
    ]), g = n.length > 0 && n.every((d) => y.has(d));
    if (G.useEffect(() => {
      var _a2, _b;
      if (!r) return;
      const d = (p) => {
        var _a3;
        const b = document.elementFromPoint(p.clientX, p.clientY), S = b == null ? void 0 : b.closest(".node-viz-menu-item");
        if (S && ((_a3 = o.current) == null ? void 0 : _a3.contains(S)) && !S.disabled) {
          c.current = false;
          const _ = S.dataset.kind;
          _ && x(_);
          return;
        }
        c.current && (c.current = false, i.current && b && i.current.contains(b) || a(false));
      }, f = (p) => {
        s.current && !s.current.contains(p.target) && a(false);
      };
      return document.addEventListener("pointerup", d), document.addEventListener("pointerdown", f), (_b = (_a2 = o.current) == null ? void 0 : _a2.querySelector("button:not(:disabled)")) == null ? void 0 : _b.focus(), () => {
        document.removeEventListener("pointerup", d), document.removeEventListener("pointerdown", f);
      };
    }, [
      r
    ]), n.length === 0) return null;
    const x = (d) => {
      var _a2, _b, _c;
      if (y.has(d)) return;
      const f = l(e), p = (f == null ? void 0 : f.internals.positionAbsolute) ?? ((_a2 = u(e)) == null ? void 0 : _a2.position) ?? {
        x: 0,
        y: 0
      }, b = ((_b = f == null ? void 0 : f.measured) == null ? void 0 : _b.width) ?? 320, S = b * 2, _ = d === "timeseries" ? rc(S, {
        plot: true
      }) : Math.round(S * 3 / 4), h = ae.getState().nodes.filter((m) => {
        var _a3;
        return jt(m.type) && ((_a3 = m.data) == null ? void 0 : _a3.targetNodeId) === e;
      }).length;
      tc({
        vizKind: d,
        targetNodeId: e,
        position: {
          x: p.x + b + 60,
          y: p.y + h * 40
        },
        size: {
          width: S,
          height: _
        }
      }), a(false), (_c = i.current) == null ? void 0 : _c.focus();
    }, w = (d) => {
      var _a2, _b, _c, _d2, _e2, _f2, _g, _h2;
      const f = Array.from(((_a2 = o.current) == null ? void 0 : _a2.querySelectorAll("button:not(:disabled)")) ?? []);
      if (f.length === 0 && d.key !== "Escape") return;
      const p = f.indexOf(document.activeElement);
      if (d.key === "ArrowDown") d.preventDefault(), (_b = f[(p + 1) % f.length]) == null ? void 0 : _b.focus();
      else if (d.key === "ArrowUp") d.preventDefault(), (_c = f[(p - 1 + f.length) % f.length]) == null ? void 0 : _c.focus();
      else if (d.key === "Home") d.preventDefault(), (_d2 = f[0]) == null ? void 0 : _d2.focus();
      else if (d.key === "End") d.preventDefault(), (_e2 = f[f.length - 1]) == null ? void 0 : _e2.focus();
      else if (d.key === "Enter" || d.key === " ") {
        d.preventDefault();
        const b = (_g = (_f2 = document.activeElement) == null ? void 0 : _f2.dataset) == null ? void 0 : _g.kind;
        b && x(b);
      } else d.key === "Escape" && (d.preventDefault(), a(false), (_h2 = i.current) == null ? void 0 : _h2.focus());
    };
    return k.jsxs("div", {
      className: "node-viz-spawn nodrag",
      ref: s,
      children: [
        k.jsx(tt, {
          label: g ? "All visualizations already added" : "Add a visualization of this node",
          placement: "top",
          children: k.jsx("button", {
            ref: i,
            className: "node-viz-btn",
            "aria-label": "Add a visualization of this node",
            "aria-haspopup": "menu",
            "aria-expanded": r,
            disabled: g,
            onPointerDown: (d) => {
              d.stopPropagation(), !(g || n.length === 1) && (r ? a(false) : (c.current = true, a(true)));
            },
            onClick: (d) => {
              d.stopPropagation(), !g && n.length === 1 && x(n[0]);
            },
            children: k.jsx(wi, {
              size: 22,
              stroke: 2,
              "aria-hidden": true
            })
          })
        }),
        r && k.jsx("div", {
          className: "node-viz-menu",
          role: "menu",
          ref: o,
          onKeyDown: w,
          children: n.map((d) => {
            const f = y.has(d);
            return k.jsx("button", {
              type: "button",
              role: "menuitem",
              className: "node-viz-menu-item",
              "data-kind": d,
              disabled: f,
              "aria-disabled": f,
              "data-tooltip": f ? "Already added" : void 0,
              "data-tooltip-placement": "right",
              tabIndex: -1,
              children: wm(d)
            }, d);
          })
        })
      ]
    });
  }
  const ic = G.memo(lf);
  function df(e) {
    if (!e || e.length === 0) return 0;
    let t = 0;
    for (const n of e) n && t++;
    return t / e.length;
  }
  function uf({ bitfield: e, color: t }) {
    const n = Math.round(df(e) * 100);
    return k.jsxs("div", {
      className: "node-activity",
      "data-tooltip": `${n}% of bits active`,
      children: [
        k.jsx("div", {
          className: "node-activity-bar",
          children: k.jsx("div", {
            className: "node-activity-fill",
            style: {
              width: `${n}%`,
              background: t ?? "var(--accent-blue)"
            }
          })
        }),
        k.jsxs("span", {
          className: "node-activity-label",
          children: [
            n,
            "% active"
          ]
        })
      ]
    });
  }
  const cc = G.memo(uf);
  function pf({ data: e, selected: t, type: n, iconShape: r, id: a, bitfieldProps: s }) {
    var _a2, _b;
    const o = e.plotVisible ?? true, i = e.bitfieldVisible ?? true, { getNode: c } = ut(), l = ((_b = (_a2 = c(a)) == null ? void 0 : _a2.style) == null ? void 0 : _b["--node-bg"]) ?? "var(--accent-blue)", u = ke((h) => h.bitFieldData[a]), v = ke((h) => h.getBitFieldParams), y = ae((h) => h.colorCodedBits), g = v(a), x = Ge((h) => {
      var _a3;
      return (_a3 = h.timeSeriesData[a]) == null ? void 0 : _a3.data;
    }), w = G.useMemo(() => !x || !Array.isArray(x) ? [] : x.slice(-50), [
      x
    ]), d = w && w.length > 0, f = u && u.bitField && u.bitField.length > 0, p = !o && !i, b = !!vt(e.blockType), S = sn((h) => h.byNode.get(a)), _ = ae((h) => h.connecting && h.viableTargetIds.has(a));
    return k.jsxs("div", {
      className: bt("custom-node", n, {
        selected: t,
        "viable-target": _
      }),
      children: [
        k.jsx(Lr, {
          plot: d && o,
          bitfield: f && i
        }),
        k.jsx(Fr, {
          nodeId: a
        }),
        k.jsx(Qe, {
          type: "target",
          position: et.Top,
          id: "input"
        }),
        b && k.jsx(oc, {
          nodeId: a,
          blockType: e.blockType,
          label: e.label ?? e.blockType
        }),
        k.jsx(ic, {
          nodeId: a,
          blockType: e.blockType
        }),
        k.jsx(Ya, {
          nodeID: e.canonicalId,
          label: e.label,
          type: e.blockType,
          iconShape: r,
          alerts: S ?? []
        }),
        d && o && k.jsx("div", {
          className: "node-plot-section",
          children: k.jsx(Pr, {
            data: w,
            color: l
          })
        }),
        f && i && k.jsx("div", {
          className: "node-bitfield-section",
          children: k.jsx(kr, {
            bitfield: u.bitField,
            bitFieldParams: g,
            color: l,
            ...Mr,
            ...s,
            colorCoded: y
          })
        }),
        f && p && k.jsx(cc, {
          bitfield: u.bitField,
          color: l
        }),
        k.jsx(Qe, {
          type: "source",
          position: et.Bottom,
          id: "output"
        }),
        e.hasContext && k.jsx(Qe, {
          type: "target",
          position: et.Left,
          id: "context"
        }),
        e.hasLabel && k.jsx(Qe, {
          type: "target",
          position: et.Right,
          id: "label"
        })
      ]
    });
  }
  const St = G.memo(pf);
  function mf(e) {
    return k.jsx(St, {
      ...e,
      type: "discrete",
      iconShape: "triangle"
    });
  }
  function ff(e) {
    return k.jsx(St, {
      ...e,
      type: "persistence",
      iconShape: "triangle"
    });
  }
  function hf(e) {
    return k.jsx(St, {
      ...e,
      type: "fixedWeight",
      iconShape: "triangle"
    });
  }
  function yf(e) {
    return k.jsx(St, {
      ...e,
      type: "taperingWeight",
      iconShape: "triangle"
    });
  }
  function gf(e) {
    return k.jsx(St, {
      ...e,
      type: "periodicCell",
      iconShape: "triangle"
    });
  }
  function _f(e) {
    return k.jsx(St, {
      ...e,
      type: "periodicScalar",
      iconShape: "triangle"
    });
  }
  function vf(e) {
    return k.jsx(St, {
      ...e,
      type: "placeCell",
      iconShape: "triangle"
    });
  }
  function bf(e) {
    return k.jsx(St, {
      ...e,
      type: "randomPlaceCell",
      iconShape: "triangle"
    });
  }
  function lc(e, t, n) {
    var _a2, _b, _c;
    const r = t.find((a) => a.target === n && a.type === "label");
    if (r) return (_c = (_b = (_a2 = e.find((a) => a.id === r.source)) == null ? void 0 : _a2.data) == null ? void 0 : _b.params) == null ? void 0 : _c.patterns;
  }
  function dc(e, t, n) {
    if (!e || t < 2) return;
    const r = Ar(n), a = Math.ceil(e / t), s = new Array(e);
    for (let o = 0; o < e; o++) {
      const i = Math.floor(o / a);
      s[o] = r[i] ?? Si(i);
    }
    return s;
  }
  function xf({ stacked: e, onToggle: t }) {
    return k.jsx(tt, {
      placement: "top",
      label: `Plot style: ${e ? "Stacked areas" : "Multi-line"} \u2014 click to switch to ${e ? "Multi-line" : "Stacked areas"}`,
      children: k.jsx("button", {
        type: "button",
        className: "node-plot-mode-btn nodrag",
        "aria-pressed": e,
        "aria-label": `Switch classifier plot to ${e ? "multi-line" : "stacked areas"}`,
        onClick: (n) => {
          n.stopPropagation(), t();
        },
        onMouseDown: (n) => n.stopPropagation(),
        children: e ? k.jsxs("svg", {
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
            k.jsx("path", {
              d: "M3 3v18h18"
            }),
            k.jsx("path", {
              d: "M3 21V14l5 2 5-6 8 3v8Z",
              fill: "currentColor",
              stroke: "none",
              opacity: "0.85"
            })
          ]
        }) : k.jsxs("svg", {
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
            k.jsx("path", {
              d: "M3 3v18h18"
            }),
            k.jsx("polyline", {
              points: "3,15 8,10 13,13 21,6"
            }),
            k.jsx("polyline", {
              points: "3,19 8,17 13,18 21,14",
              opacity: "0.6"
            })
          ]
        })
      })
    });
  }
  const uc = G.memo(xf);
  function qr(e) {
    function t({ data: n, selected: r, type: a, iconShape: s, id: o }) {
      var _a2, _b, _c;
      const i = n.plotVisible ?? true, c = n.bitfieldVisible ?? true, { getNode: l } = ut(), u = ((_b = (_a2 = l(o)) == null ? void 0 : _a2.style) == null ? void 0 : _b["--node-bg"]) ?? "var(--accent-blue)", v = ke((X) => X.bitFieldData[o]), g = ke((X) => X.getBitFieldParams)(o), x = ae((X) => X.colorCodedBits), w = ae((X) => X.updateNodeData), d = n.plotStacked ?? true, f = sn((X) => X.incompleteNodeIds.has(o)), p = sn((X) => X.byNode.get(o)), b = ae((X) => X.connecting && X.viableTargetIds.has(o)), S = Ge((X) => {
        var _a3;
        return (_a3 = X.timeSeriesData[o]) == null ? void 0 : _a3.data;
      }), _ = G.useMemo(() => !S || !Array.isArray(S) ? [] : S.slice(-50), [
        S
      ]), h = _ && _.length > 0, m = v && v.bitField && v.bitField.length > 0, P = !i && !c, N = ((_c = v == null ? void 0 : v.bitField) == null ? void 0 : _c.length) ?? 0, C = (g == null ? void 0 : g.num_l) ?? 0, T = ae((X) => e.classColorMap ? lc(X.nodes, X.edges, o) : void 0), O = G.useMemo(() => e.classColorMap ? dc(N, C, T) : void 0, [
        N,
        C,
        T
      ]), F = G.useMemo(() => e.stackedPlot && C >= 1 ? Ar(T, C) : void 0, [
        C,
        T
      ]), z = !!e.stackedPlot && d, W = e.bitPanel === "columnar" ? Il : kr;
      return k.jsxs("div", {
        className: bt("custom-node", a, {
          selected: r,
          "node-incomplete": f,
          "viable-target": b
        }),
        children: [
          k.jsx(Lr, {
            plot: h && i,
            bitfield: m && c
          }),
          k.jsx(Fr, {
            nodeId: o
          }),
          k.jsx(Qe, {
            type: "target",
            position: et.Top,
            id: "input"
          }),
          k.jsx(oc, {
            nodeId: o,
            blockType: n.blockType,
            label: n.label
          }),
          k.jsx(ic, {
            nodeId: o,
            blockType: n.blockType
          }),
          k.jsx(Ya, {
            nodeID: n.canonicalId,
            label: n.label,
            type: n.blockType,
            iconShape: s,
            alerts: p ?? []
          }),
          h && i && k.jsxs(k.Fragment, {
            children: [
              e.stackedPlot && k.jsx(uc, {
                stacked: d,
                onToggle: () => w(o, {
                  plotStacked: !d
                })
              }),
              k.jsx("div", {
                className: "node-plot-section",
                children: k.jsx(Pr, {
                  data: _,
                  color: u,
                  ...e.pinYAxis && !z ? {
                    yMin: 0,
                    yMax: 1
                  } : {},
                  ...e.step && !z ? {
                    step: e.step
                  } : {},
                  ...e.stackedPlot ? {
                    stacked: z,
                    seriesColors: F
                  } : {}
                })
              })
            ]
          }),
          m && c && k.jsx("div", {
            className: "node-bitfield-section",
            children: k.jsx(W, {
              bitfield: v.bitField,
              bitFieldParams: g,
              color: u,
              ...Mr,
              ...e.classColorMap ? {
                colorMap: O,
                colorMapColorGaps: true,
                gapPx: 4,
                borderPx: 2
              } : {},
              colorCoded: x
            })
          }),
          m && P && k.jsx(cc, {
            bitfield: v.bitField,
            color: u
          }),
          e.contextHandle && n.hasContext && k.jsx(Qe, {
            type: "target",
            position: et.Left,
            id: "context"
          }),
          k.jsx(Qe, {
            type: "source",
            position: et.Bottom,
            id: "output"
          }),
          e.labelHandle && n.hasLabel && k.jsx(Qe, {
            type: "target",
            position: et.Right,
            id: "label"
          })
        ]
      });
    }
    return t.displayName = e.displayName, G.memo(t);
  }
  const Sf = qr({
    displayName: "PatternClassifierNode",
    bitPanel: "standard",
    pinYAxis: true,
    step: "end",
    classColorMap: true,
    stackedPlot: true,
    labelHandle: true
  }), wf = qr({
    displayName: "PatternPoolerNode",
    bitPanel: "standard"
  }), kf = qr({
    displayName: "SequenceLearnerNode",
    bitPanel: "columnar",
    pinYAxis: true
  }), Pf = qr({
    displayName: "ContextLearnerNode",
    bitPanel: "columnar",
    pinYAxis: true,
    contextHandle: true
  }), ci = {
    bitfield: "Bit Field",
    timeseries: "Time Series",
    encoderChart: "Encoder Visual"
  }, Ef = "var(--accent-blue)";
  function Cf({ id: e, data: t, selected: n }) {
    var _a2;
    const r = t.vizKind ?? "bitfield", a = t.targetNodeId ?? "", s = ae((O) => O.nodes), o = ae((O) => O.edges), i = ae((O) => O.updateNodeData), c = ae((O) => O.colorCodedBits), l = t.plotStacked ?? true, u = G.useMemo(() => s.filter((O) => {
      var _a3;
      return O.type !== "group" && O.type !== "VizNode" && ((_a3 = O.data) == null ? void 0 : _a3.canonicalId);
    }).filter((O) => {
      var _a3;
      const F = ((_a3 = O.data) == null ? void 0 : _a3.blockType) ?? "";
      return r === "timeseries" ? Nr(F) : r === "encoderChart" ? an(F) : !/DataSource$/.test(F);
    }).map((O) => {
      var _a3, _b;
      return {
        id: O.id,
        label: ((_a3 = O.data) == null ? void 0 : _a3.label) ?? ((_b = O.data) == null ? void 0 : _b.blockType) ?? O.id
      };
    }), [
      s,
      r
    ]), v = ke((O) => a ? O.bitFieldData[a] : void 0), y = ke((O) => O.getBitFieldParams), g = a ? y(a) : null, x = G.useMemo(() => {
      var _a3, _b;
      return ((_b = (_a3 = s.find((O) => O.id === a)) == null ? void 0 : _a3.data) == null ? void 0 : _b.blockType) ?? "";
    }, [
      s,
      a
    ]), w = G.useMemo(() => {
      var _a3, _b;
      return ((_b = (_a3 = s.find((O) => O.id === a)) == null ? void 0 : _a3.data) == null ? void 0 : _b.label) ?? x;
    }, [
      s,
      a,
      x
    ]), d = G.useMemo(() => {
      var _a3, _b;
      return ((_b = (_a3 = s.find((F) => F.id === a)) == null ? void 0 : _a3.style) == null ? void 0 : _b["--node-bg"]) ?? Ef;
    }, [
      s,
      a
    ]), f = G.useMemo(() => r === "encoderChart" && a && an(x) && g ? xm(x, g, d) : null, [
      r,
      a,
      x,
      g,
      d
    ]), p = Ge((O) => {
      var _a3;
      return a ? (_a3 = O.timeSeriesData[a]) == null ? void 0 : _a3.data : void 0;
    }), b = G.useMemo(() => Array.isArray(p) ? p.slice(-50) : [], [
      p
    ]), S = G.useMemo(() => {
      var _a3, _b;
      if (r !== "encoderChart" || !a) return;
      const O = o.find((F) => F.target === a && F.type === "scalarData");
      if (O) return (_b = (_a3 = s.find((F) => F.id === O.source)) == null ? void 0 : _a3.data) == null ? void 0 : _b.currentValue;
    }, [
      r,
      a,
      o,
      s
    ]), _ = !!((_a2 = v == null ? void 0 : v.bitField) == null ? void 0 : _a2.length), h = b.length > 0, m = (g == null ? void 0 : g.num_l) ?? 0, P = G.useMemo(() => x === "PatternClassifier" ? lc(s, o, a) : void 0, [
      x,
      s,
      o,
      a
    ]), N = G.useMemo(() => {
      var _a3;
      if (x === "PatternClassifier") return dc(((_a3 = v == null ? void 0 : v.bitField) == null ? void 0 : _a3.length) ?? 0, m, P);
    }, [
      x,
      v,
      m,
      P
    ]), C = G.useMemo(() => x === "PatternClassifier" ? Ar(P, m) : void 0, [
      x,
      m,
      P
    ]), T = (O) => {
      i(e, {
        targetNodeId: O || null
      });
      const { nodes: F, edges: z, setEdges: W } = ae.getState();
      W(ec(F, z));
    };
    return k.jsxs("div", {
      className: bt("custom-node", "viz-node", {
        selected: n
      }),
      children: [
        k.jsx(Lr, {
          plot: r === "timeseries" && h,
          bitfield: r === "bitfield",
          encoderViz: r === "encoderChart"
        }),
        k.jsx(Fr, {
          nodeId: e
        }),
        k.jsx(Qe, {
          type: "target",
          position: et.Top,
          id: "viz-in"
        }),
        k.jsx("div", {
          className: "node-header",
          children: k.jsxs("div", {
            className: "node-content",
            children: [
              k.jsx("div", {
                className: "node-name",
                children: t.label ?? "Visualization"
              }),
              k.jsx("div", {
                className: "node-id",
                children: a ? `${ci[r]} \xB7 ${w}` : `${ci[r]} view`
              })
            ]
          })
        }),
        !a && k.jsx("div", {
          className: "viz-controls nodrag",
          children: k.jsxs("select", {
            className: "viz-target-select",
            value: "",
            onChange: (O) => T(O.target.value),
            children: [
              k.jsx("option", {
                value: "",
                children: "\u2014 pick a block \u2014"
              }),
              u.map((O) => k.jsx("option", {
                value: O.id,
                children: O.label
              }, O.id))
            ]
          })
        }),
        r === "encoderChart" ? f ? k.jsx("div", {
          className: "node-encoder-viz-section",
          children: k.jsx(tu, {
            setup: f.setup,
            ui: vm,
            cursor: S,
            compact: true,
            style: {
              width: "100%",
              flex: "1 1 0",
              minHeight: 0
            }
          })
        }) : k.jsx(va, {
          text: a ? "Encoder chart needs an encoder block" : "Pick an encoder to visualize"
        }) : r === "timeseries" ? h ? k.jsxs(k.Fragment, {
          children: [
            x === "PatternClassifier" && k.jsx(uc, {
              stacked: l,
              onToggle: () => i(e, {
                plotStacked: !l
              })
            }),
            k.jsx("div", {
              className: "node-plot-section",
              children: k.jsx(Pr, {
                data: b,
                color: d,
                ...x === "PatternClassifier" ? l ? {
                  stacked: true,
                  seriesColors: C
                } : {
                  stacked: false,
                  seriesColors: C,
                  yMin: 0,
                  yMax: 1,
                  step: "end"
                } : x === "SequenceLearner" || x === "ContextLearner" ? {
                  yMin: 0,
                  yMax: 1
                } : {}
              })
            })
          ]
        }) : k.jsx(va, {
          text: a ? "No time-series data yet (step the network)" : "Pick a block to visualize"
        }) : _ ? k.jsx("div", {
          className: "node-bitfield-section",
          children: k.jsx(kr, {
            bitfield: v.bitField,
            bitFieldParams: g,
            color: d,
            ...Mr,
            ...N ? {
              colorMap: N,
              colorMapColorGaps: true,
              gapPx: 4,
              borderPx: 2
            } : {},
            interactive: true,
            showChrome: true,
            colorCoded: c
          })
        }) : k.jsx(va, {
          text: a ? "No bitfield data yet (step the network)" : "Pick a block to visualize"
        })
      ]
    });
  }
  function va({ text: e }) {
    return k.jsx("div", {
      className: "viz-placeholder",
      children: e
    });
  }
  const mr = G.memo(Cf), $f = {
    DiscreteTransformer: mf,
    PersistenceTransformer: ff,
    FixedWeightTransformer: hf,
    TaperingWeightTransformer: yf,
    PeriodicCellTransformer: gf,
    PeriodicScalarTransformer: _f,
    PlaceCellTransformer: vf,
    RandomizedPlaceCellTransformer: bf,
    PatternPooler: wf,
    PatternClassifier: Sf,
    SequenceLearner: kf,
    ContextLearner: Pf,
    SynflowScalarDataSource: Gm,
    SynflowDiscreteDataSource: Hm,
    group: Em,
    VizBitField: mr,
    VizTimeSeries: mr,
    VizEncoder: mr,
    VizNode: mr
  };
  function Nf(e, t) {
    const n = [];
    return e > 0 && n.push(`${e}b`), t && t > 0 && n.push(`\u0394t${t}`), n.join(" \xB7 ");
  }
  const li = 200, di = 52;
  function If({ sourceNodeId: e, text: t, labelX: n, labelY: r, timeOffset: a, color: s, selected: o, title: i, icon: c }) {
    const l = ae((x) => {
      var _a2, _b;
      return e ? (_b = (_a2 = x.nodes.find((w) => w.id === e)) == null ? void 0 : _a2.data) == null ? void 0 : _b.blockType : void 0;
    }), u = ke((x) => e ? x.bitFieldParams[e] : void 0);
    let v = 0;
    if (!t && l && u) try {
      const x = Or(l, u);
      Number.isFinite(x) && x > 0 && (v = x);
    } catch {
    }
    const y = t ?? Nf(v, a);
    if (!c && !y) return null;
    const g = i ?? `source output: ${v} bit${v === 1 ? "" : "s"}${a && a > 0 ? `, time lag ${a}` : ""}`;
    return k.jsx("foreignObject", {
      x: n - li / 2,
      y: r - di / 2,
      width: li,
      height: di,
      style: {
        overflow: "visible",
        pointerEvents: "none"
      },
      children: k.jsx("div", {
        className: "edge-info-label-wrap",
        children: k.jsx("div", {
          className: bt("edge-info-label", {
            selected: o,
            "edge-info-label-icon": !!c
          }),
          style: {
            "--edge-info-color": s ?? "var(--border-secondary)",
            pointerEvents: c ? "auto" : "none"
          },
          "data-tooltip": g,
          "data-tooltip-placement": "top",
          children: c ?? y
        })
      })
    });
  }
  const dn = G.memo(If);
  function Tf({ id: e, source: t, sourceX: n, sourceY: r, targetX: a, targetY: s, sourcePosition: o, targetPosition: i, style: c = {}, selected: l, data: u }) {
    const v = u, [y, g, x] = on({
      sourceX: n,
      sourceY: r,
      targetX: a,
      targetY: s,
      sourcePosition: o,
      targetPosition: i
    }), w = "var(--edge-input)", d = "url(#input-arrow-marker)", f = k.jsx(k.Fragment, {
      children: k.jsx("svg", {
        style: {
          position: "absolute",
          top: 0,
          left: 0
        },
        children: k.jsx("defs", {
          children: k.jsx("marker", {
            className: "react-flow__arrowhead",
            id: "input-arrow-marker",
            markerWidth: "40",
            markerHeight: "40",
            viewBox: "-10 -10 20 20",
            markerUnits: "userSpaceOnUse",
            orient: "auto-start-reverse",
            refX: "0",
            refY: "0",
            children: k.jsx("polyline", {
              className: "arrowclosed",
              style: {
                strokeWidth: 1,
                stroke: w,
                fill: w
              },
              strokeLinecap: "round",
              strokeLinejoin: "round",
              points: "-5,-6 0,0 -5,6 -5,-6"
            })
          })
        })
      })
    });
    return k.jsxs(k.Fragment, {
      children: [
        f,
        (v == null ? void 0 : v.animated) && k.jsx("path", {
          d: y,
          fill: "none",
          stroke: w,
          strokeWidth: "3",
          strokeOpacity: "0.3",
          className: "label-edge-animated",
          style: {
            strokeDasharray: "8 4",
            animation: "dash 1.5s linear infinite"
          }
        }),
        k.jsx(Ut, {
          id: e,
          path: y,
          markerEnd: d,
          style: {
            ...c,
            stroke: w,
            strokeWidth: l ? 12 : 8
          },
          className: "input-edge"
        }),
        k.jsx(dn, {
          sourceNodeId: t,
          labelX: g,
          labelY: x,
          timeOffset: v == null ? void 0 : v.timeOffset,
          color: w,
          selected: l
        })
      ]
    });
  }
  function Df({ id: e, source: t, sourceX: n, sourceY: r, targetX: a, targetY: s, sourcePosition: o, targetPosition: i, style: c = {}, selected: l, data: u }) {
    const v = u, [y, g, x] = on({
      sourceX: n,
      sourceY: r,
      sourcePosition: o,
      targetX: a,
      targetY: s,
      targetPosition: i
    }), w = "var(--edge-context)", d = "url(#context-arrow-marker)", f = k.jsx(k.Fragment, {
      children: k.jsx("svg", {
        style: {
          position: "absolute",
          top: 0,
          left: 0
        },
        children: k.jsx("defs", {
          children: k.jsx("marker", {
            className: "react-flow__arrowhead",
            id: "context-arrow-marker",
            markerWidth: "40",
            markerHeight: "40",
            viewBox: "-10 -10 20 20",
            markerUnits: "userSpaceOnUse",
            orient: "auto-start-reverse",
            refX: "0",
            refY: "0",
            children: k.jsx("polyline", {
              className: "arrowclosed",
              style: {
                strokeWidth: 1,
                stroke: w,
                fill: w
              },
              strokeLinecap: "round",
              strokeLinejoin: "round",
              points: "-5,-4 0,0 -5,4 -5,-4"
            })
          })
        })
      })
    });
    return k.jsxs(k.Fragment, {
      children: [
        f,
        (v == null ? void 0 : v.animated) && k.jsx("path", {
          d: y,
          fill: "none",
          stroke: w,
          strokeWidth: "3",
          strokeOpacity: "0.3",
          className: "label-edge-animated",
          style: {
            strokeDasharray: "8 4",
            animation: "dash 1.5s linear infinite"
          }
        }),
        k.jsx(Ut, {
          id: e,
          path: y,
          markerEnd: d,
          style: {
            ...c,
            stroke: w,
            strokeWidth: l ? 12 : 8,
            strokeDasharray: "14 10"
          },
          className: "context-edge"
        }),
        k.jsx(dn, {
          sourceNodeId: t,
          labelX: g,
          labelY: x,
          timeOffset: v == null ? void 0 : v.timeOffset,
          color: w,
          selected: l
        })
      ]
    });
  }
  function Rf({ id: e, sourceX: t, sourceY: n, targetX: r, targetY: a, sourcePosition: s, targetPosition: o, style: i = {}, selected: c = false, data: l }) {
    const u = l;
    u.animated = true;
    const [v, y, g] = on({
      sourceX: t,
      sourceY: n,
      targetX: r,
      targetY: a,
      sourcePosition: s,
      targetPosition: o
    }), x = "var(--edge-scalar-data)", w = "url(#scalar-arrow-marker)", d = k.jsx(k.Fragment, {
      children: k.jsx("svg", {
        style: {
          position: "absolute",
          top: 0,
          left: 0
        },
        children: k.jsx("defs", {
          children: k.jsx("marker", {
            className: "react-flow__arrowhead",
            id: "scalar-arrow-marker",
            markerWidth: "40",
            markerHeight: "40",
            viewBox: "-10 -10 20 20",
            markerUnits: "userSpaceOnUse",
            orient: "auto-start-reverse",
            refX: "0",
            refY: "0",
            children: k.jsx("polyline", {
              className: "arrowclosed",
              style: {
                strokeWidth: 1,
                stroke: x,
                fill: x
              },
              strokeLinecap: "round",
              strokeLinejoin: "round",
              points: "-5,-4 0,0 -5,4 -5,-4"
            })
          })
        })
      })
    });
    return k.jsxs(k.Fragment, {
      children: [
        d,
        (u == null ? void 0 : u.animated) && k.jsx("path", {
          d: v,
          fill: "none",
          stroke: x,
          strokeWidth: "3",
          strokeOpacity: "1.0",
          className: "scalar-data-edge-animated",
          style: {
            strokeDasharray: "5 5",
            animation: "dash 0.2s linear infinite"
          }
        }),
        k.jsx(Ut, {
          id: e,
          path: v,
          markerEnd: w,
          style: {
            ...i,
            stroke: x,
            strokeWidth: c ? 12 : 8
          },
          className: "scalar-data-edge"
        }),
        k.jsx(dn, {
          icon: k.jsx(Yl, {
            size: 26,
            stroke: 2.25,
            "aria-hidden": true
          }),
          title: "scalar data",
          labelX: y,
          labelY: g,
          color: x,
          selected: c
        })
      ]
    });
  }
  function Of({ id: e, sourceX: t, sourceY: n, targetX: r, targetY: a, sourcePosition: s, targetPosition: o, style: i = {}, selected: c = false, data: l }) {
    const u = l;
    u.animated = true;
    const [v, y, g] = on({
      sourceX: t,
      sourceY: n,
      targetX: r,
      targetY: a,
      sourcePosition: s,
      targetPosition: o
    }), x = "var(--edge-discrete-data)", w = "url(#discrete-arrow-marker)", d = k.jsx(k.Fragment, {
      children: k.jsx("svg", {
        style: {
          position: "absolute",
          top: 0,
          left: 0
        },
        children: k.jsx("defs", {
          children: k.jsx("marker", {
            className: "react-flow__arrowhead",
            id: "discrete-arrow-marker",
            markerWidth: "40",
            markerHeight: "40",
            viewBox: "-10 -10 20 20",
            markerUnits: "userSpaceOnUse",
            orient: "auto-start-reverse",
            refX: "0",
            refY: "0",
            children: k.jsx("polyline", {
              className: "arrowclosed",
              style: {
                strokeWidth: 1,
                stroke: x,
                fill: x
              },
              strokeLinecap: "round",
              strokeLinejoin: "round",
              points: "-5,-4 0,0 -5,4 -5,-4"
            })
          })
        })
      })
    });
    return k.jsxs(k.Fragment, {
      children: [
        d,
        (u == null ? void 0 : u.animated) && k.jsx("path", {
          d: v,
          fill: "none",
          stroke: x,
          strokeWidth: "3",
          strokeOpacity: "1.0",
          className: "discrete-data-edge-animated",
          style: {
            strokeDasharray: "5 5",
            animation: "dash 0.2s linear infinite"
          }
        }),
        k.jsx(Ut, {
          id: e,
          path: v,
          markerEnd: w,
          style: {
            ...i,
            stroke: x,
            strokeWidth: c ? 12 : 8
          },
          className: "discrete-data-edge"
        }),
        k.jsx(dn, {
          icon: k.jsx(Jl, {
            size: 26,
            stroke: 2.25,
            "aria-hidden": true
          }),
          title: "discrete data",
          labelX: y,
          labelY: g,
          color: x,
          selected: c
        })
      ]
    });
  }
  function jf({ id: e, sourceX: t, sourceY: n, targetX: r, targetY: a, sourcePosition: s, targetPosition: o, style: i = {}, selected: c = false }) {
    const [l, u, v] = on({
      sourceX: t,
      sourceY: n,
      targetX: r,
      targetY: a,
      sourcePosition: s,
      targetPosition: o,
      borderRadius: 40,
      offset: 40,
      stepPosition: 1
    }), y = "var(--edge-discrete-data)", g = "url(#label-arrow-marker)", x = k.jsx(k.Fragment, {
      children: k.jsx("svg", {
        style: {
          position: "absolute",
          top: 0,
          left: 0
        },
        children: k.jsx("defs", {
          children: k.jsx("marker", {
            className: "react-flow__arrowhead",
            id: "label-arrow-marker",
            markerWidth: "40",
            markerHeight: "40",
            viewBox: "-10 -10 20 20",
            markerUnits: "userSpaceOnUse",
            orient: "auto-start-reverse",
            refX: "0",
            refY: "0",
            children: k.jsx("polyline", {
              className: "arrowclosed",
              style: {
                strokeWidth: 1,
                stroke: y,
                fill: y
              },
              strokeLinecap: "round",
              strokeLinejoin: "round",
              points: "-5,-4 0,0 -5,4 -5,-4"
            })
          })
        })
      })
    });
    return k.jsxs(k.Fragment, {
      children: [
        x,
        k.jsx(Ut, {
          id: e,
          path: l,
          markerEnd: g,
          style: {
            ...i,
            stroke: y,
            strokeWidth: c ? 12 : 8,
            strokeDasharray: "14 10"
          },
          className: "label-edge"
        }),
        k.jsx(dn, {
          text: "label",
          title: "supervised label",
          labelX: u,
          labelY: v,
          color: y,
          selected: c
        })
      ]
    });
  }
  function ui(e, t) {
    const n = e.x + e.width / 2, r = e.y + e.height / 2, a = t.x - n, s = t.y - r;
    if (a === 0 && s === 0) return {
      x: n,
      y: r
    };
    const o = e.width / 2, i = e.height / 2, c = a !== 0 ? o / Math.abs(a) : 1 / 0, l = s !== 0 ? i / Math.abs(s) : 1 / 0, u = Math.min(c, l);
    return {
      x: n + a * u,
      y: r + s * u
    };
  }
  function Lf(e, t) {
    const n = {
      x: e.x + e.width / 2,
      y: e.y + e.height / 2
    }, r = {
      x: t.x + t.width / 2,
      y: t.y + t.height / 2
    }, a = ui(e, r), s = ui(t, n);
    return {
      sx: a.x,
      sy: a.y,
      tx: s.x,
      ty: s.y
    };
  }
  function pi(e) {
    var _a2, _b, _c;
    if (!e) return null;
    const t = (_a2 = e.internals) == null ? void 0 : _a2.positionAbsolute, n = (_b = e.measured) == null ? void 0 : _b.width, r = (_c = e.measured) == null ? void 0 : _c.height;
    return !t || !n || !r ? null : {
      x: t.x,
      y: t.y,
      width: n,
      height: r
    };
  }
  function Mf({ id: e, source: t, target: n, style: r = {}, selected: a }) {
    const s = ms(t), o = ms(n), i = pi(s), c = pi(o);
    if (!i || !c) return null;
    const { sx: l, sy: u, tx: v, ty: y } = Lf(i, c), [g] = Rc({
      sourceX: l,
      sourceY: u,
      targetX: v,
      targetY: y
    });
    return k.jsx(Ut, {
      id: e,
      path: g,
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
  const Af = {
    input: Tf,
    context: Df,
    scalarData: Rf,
    discreteData: Of,
    label: jf,
    vizLink: Mf
  }, pc = "SynflowScalarDataSource", mc = "SynflowDiscreteDataSource", fc = "DiscreteTransformer";
  function Za(e) {
    var _a2;
    if (e) return e === pc || e === mc ? "datasource" : (_a2 = vt(e)) == null ? void 0 : _a2.category;
  }
  const mi = (e) => Za(e) === "datasource", hc = (e) => Za(e) === "encoder", fi = (e) => Za(e) === "learning", Ff = (e) => hc(e) && e !== fc;
  function Sr(e, t, n, r) {
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
    const a = e.blockType, s = n.blockType, o = r ?? "input";
    return mi(s) ? {
      ok: false,
      reason: "a datasource has no inputs"
    } : !hc(s) && !fi(s) ? {
      ok: false,
      reason: "target cannot receive connections"
    } : mi(a) ? o === "context" ? {
      ok: false,
      reason: "a datasource cannot feed a context input"
    } : o === "label" ? a === mc && s === "PatternClassifier" ? {
      ok: true,
      kind: "labelInput"
    } : {
      ok: false,
      reason: "a label needs a discrete datasource into a PatternClassifier"
    } : a === pc ? Ff(s) ? {
      ok: true,
      kind: "scalarInput"
    } : {
      ok: false,
      reason: "a scalar datasource must feed a scalar encoder"
    } : s === fc ? {
      ok: true,
      kind: "discreteInput"
    } : {
      ok: false,
      reason: "a discrete datasource must feed a DiscreteTransformer"
    } : t && t !== "output" ? {
      ok: false,
      reason: "connect from the block output handle"
    } : o === "label" ? {
      ok: false,
      reason: "a label needs a discrete datasource, not a block output"
    } : fi(s) ? o === "context" ? {
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
  const qf = [
    "input",
    "context",
    "label"
  ];
  function Bf(e, t, n) {
    var _a2, _b;
    const r = /* @__PURE__ */ new Set(), a = t.find((i) => i.id === e.nodeId);
    if (!a) return r;
    const s = (_a2 = a.data) == null ? void 0 : _a2.blockType, o = e.handleType === "target";
    for (const i of t) {
      if (i.id === e.nodeId) continue;
      const c = (_b = i.data) == null ? void 0 : _b.blockType;
      if (!c) continue;
      let l = false;
      if (o) l = Sr({
        id: i.id,
        blockType: c
      }, "output", {
        id: e.nodeId,
        blockType: s
      }, e.handleId ?? "input").ok && !Na(n, {
        source: i.id,
        target: e.nodeId
      });
      else for (const u of qf) if (Sr({
        id: e.nodeId,
        blockType: s
      }, e.handleId ?? "output", {
        id: i.id,
        blockType: c
      }, u).ok && !Na(n, {
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
  function zf(e, t, n) {
    const r = (t || e).replace(/\s+/g, ""), a = new Set(n);
    let s = 1;
    for (; a.has(`${e}:${r}${s}`); ) s++;
    return `${r}${s}`;
  }
  let hi = Promise.resolve();
  function Vf() {
    return {
      addBlockToCanvas: G.useCallback((t, n, r) => {
        const a = hi.then(() => Wf(t, n, r));
        return hi = a.catch(() => {
        }), a;
      }, [])
    };
  }
  async function Wf(e, t, n) {
    const r = pe.getState().wasmNetwork;
    if (!r) return console.error("[AddBlock] WASM network not ready"), null;
    const a = vt(e);
    if (!a) return console.error("[AddBlock] unknown block type:", e), null;
    const s = ae.getState().nodes.map((d) => {
      var _a2;
      return ((_a2 = d.data) == null ? void 0 : _a2.canonicalId) ?? "";
    }).filter(Boolean), o = zf(e, a.label, s), i = {
      ...fd(e),
      ...n ?? {}
    };
    let c = pe.getState().networkStatus === "Error", l;
    if (c) l = `${e}:${o}`;
    else try {
      const d = await Va(r, e, {
        ...i,
        name: o
      });
      if (!d) return console.error("[AddBlock] failed to add block:", e), null;
      l = d;
    } catch (d) {
      if (!Qi(d)) throw d;
      console.warn("[AddBlock] network poisoned \u2014 rebuilding from canvas"), pe.getState().setNetworkStatus("Error"), c = true, l = `${e}:${o}`;
    }
    const u = `node-${l}`;
    !c && a.needsInit && r._needsInit.delete(l);
    const { updateBitField: v, setBitFieldParams: y } = ke.getState(), g = Ji(e, i);
    if (v(u, g, /* @__PURE__ */ new Set()), y(u, {
      ...i,
      type: e
    }), Nr(e)) {
      const { updateTimeSeries: d } = Ge.getState();
      if (e === "PatternClassifier") {
        const f = i.num_l || 2;
        d(u, new Array(f).fill(0), 0);
      } else d(u, 0, 0);
    }
    const x = {
      id: u,
      type: e,
      position: t,
      style: {
        "--node-bg": Ra(s.length),
        ...Ka(e)
      },
      data: {
        id: u,
        label: o,
        canonicalId: l,
        blockType: e,
        wasmHandle: l,
        colorIdx: s.length,
        hasInput: true,
        hasOutput: true,
        hasContext: e === "SequenceLearner" || e === "ContextLearner",
        hasLabel: e === "PatternClassifier",
        enabled: true,
        bitfieldVisible: true
      }
    }, w = ae.getState();
    return w.setNodes(Aa([
      ...w.nodes,
      x
    ], u)), w.setManualLayout(true), c ? await hm() : (await cn(r), pe.getState().setNetworkStatus("Ready")), u;
  }
  const Uf = /* @__PURE__ */ new Set([
    "SequenceLearner",
    "ContextLearner"
  ]), Hf = /* @__PURE__ */ new Set([
    "SynflowScalarDataSource",
    "SynflowDiscreteDataSource"
  ]);
  function yc() {
    return G.useCallback((e) => {
      (async () => {
        var _a2, _b, _c, _d2, _e2, _f2, _g;
        const t = pe.getState().wasmNetwork;
        if (!t) return;
        const { nodes: n, edges: r, setEdges: a, setManualLayout: s } = ae.getState(), o = n.find((b) => b.id === e.source), i = n.find((b) => b.id === e.target);
        if (!o || !i) return;
        const c = ((_a2 = o.data) == null ? void 0 : _a2.canonicalId) ?? ((_b = o.data) == null ? void 0 : _b.wasmHandle), l = ((_c = i.data) == null ? void 0 : _c.canonicalId) ?? ((_d2 = i.data) == null ? void 0 : _d2.wasmHandle);
        if (!c || !l) return;
        const u = e.targetHandle ?? "input", v = Hf.has(o.type ?? ""), y = ((_e2 = i.data) == null ? void 0 : _e2.blockType) ?? i.type ?? "", g = ((_f2 = o.data) == null ? void 0 : _f2.blockType) ?? o.type ?? "", x = Sr({
          id: e.source,
          blockType: g
        }, e.sourceHandle, {
          id: e.target,
          blockType: y
        }, e.targetHandle);
        if (!x.ok) {
          console.warn("[ConnectBlocks] invalid connection rejected:", x.reason);
          return;
        }
        if (u === "input" && !v && Uf.has(y)) {
          const b = ke.getState(), S = b.getBitFieldParams(i.id), _ = (N) => {
            var _a3;
            const C = n.find((F) => F.id === N), T = b.getBitFieldParams(N), O = ((_a3 = C == null ? void 0 : C.data) == null ? void 0 : _a3.blockType) ?? (C == null ? void 0 : C.type) ?? "";
            return C && T ? Or(O, T) : 0;
          }, h = /* @__PURE__ */ new Set([
            ...r.filter((N) => N.target === e.target && (N.targetHandle ?? "input") === "input").map((N) => N.source),
            e.source
          ]), m = [];
          for (const N of h) {
            const C = _(N);
            C > 0 && m.push(C);
          }
          const P = m.reduce((N, C) => N + C, 0);
          if (P > 0 && S && S.num_c !== P) {
            b.setBitFieldParams(i.id, {
              ...S,
              num_c: P
            });
            const N = {
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
              ...r.filter((W) => W.id !== N.id),
              N
            ];
            a(C), s(true);
            const T = ae.getState().nodes, O = ke.getState().bitFieldParams, F = ln(T, C, O), z = await jr(F);
            console.info(`[ConnectBlocks] auto-matched ${y}.num_c \u2192 ${P} (sum of ${m.length} input source(s))`), z && pe.getState().setNetworkStatus("Ready");
            return;
          }
        }
        let w, d;
        try {
          switch (x.kind) {
            case "labelInput":
              await br(t, c, l), w = "label", d = "labelInput";
              break;
            case "discreteInput":
              await Ga(t, c, l), w = "discreteData", d = "discreteInput";
              break;
            case "scalarInput":
              await Ua(t, c, l), w = "scalarData", d = "scalarInput";
              break;
            case "context":
              await vr(t, c, l, "context", 0), w = "context";
              break;
            default:
              await vr(t, c, l, "input", 0), w = "input";
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
          type: w,
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
        ]), s(true);
        let p = false;
        if ((_g = vt(y)) == null ? void 0 : _g.needsInit) {
          const b = [
            ...r.filter((_) => _.id !== f.id),
            f
          ].filter((_) => _.target === e.target), S = b.filter((_) => _.id !== f.id);
          p = !xr(y, S) && xr(y, b), p && t._needsInit.add(l);
        }
        try {
          await cn(t);
        } catch (b) {
          console.warn("[ConnectBlocks] rebuild failed (e.g. cycle):", b);
        } finally {
          p && t._needsInit.delete(l);
        }
        pe.getState().setNetworkStatus("Ready");
      })();
    }, []);
  }
  const Gf = 180, ba = "proximity-temp";
  function Kf() {
    const e = Oc(), t = yc(), n = G.useCallback((s) => {
      const { nodeLookup: o } = e.getState(), i = o.get(s.id);
      if (!i || jt(i.type)) return null;
      const c = i.internals.positionAbsolute;
      let l = null;
      for (const v of o.values()) {
        if (v.id === i.id || jt(v.type)) continue;
        const y = v.internals.positionAbsolute, g = y.x - c.x, x = y.y - c.y, w = Math.sqrt(g * g + x * x);
        w < Gf && (l === null || w < l.distance) && (l = {
          id: v.id,
          x: y.x,
          distance: w
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
    ]), r = G.useCallback((s, o) => {
      const i = n(o), { edges: c, setEdges: l } = ae.getState(), u = c.filter((v) => v.className !== ba);
      if (i && !u.some((v) => v.source === i.source && v.target === i.target)) {
        const v = {
          id: `proximity-${i.source}-${i.target}`,
          source: i.source,
          target: i.target,
          sourceHandle: "output",
          targetHandle: "input",
          className: ba,
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
    ]), a = G.useCallback((s, o) => {
      const i = n(o), { edges: c, setEdges: l } = ae.getState(), u = c.filter((y) => y.className !== ba);
      if (u.length !== c.length && l(u), !i || u.some((y) => y.source === i.source && y.target === i.target)) return;
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
  let yi = Promise.resolve();
  function gi(e) {
    const t = yi.then(e);
    return yi = t.catch(() => {
    }), t;
  }
  async function _i() {
    const { nodes: e, edges: t } = ae.getState(), { bitFieldParams: n } = ke.getState(), r = ln(e, t, n);
    await jr(r) && pe.getState().setNetworkStatus("Ready");
  }
  function Yf() {
    const e = G.useCallback((n) => {
      n.some((r) => {
        var _a2;
        return (_a2 = r.data) == null ? void 0 : _a2.canonicalId;
      }) && gi(_i);
    }, []), t = G.useCallback((n) => {
      const r = ae.getState().nodes, a = (o) => r.some((i) => i.id === o);
      n.some((o) => o.type !== "vizLink" && a(o.source) && a(o.target)) && gi(_i);
    }, []);
    return {
      onNodesDelete: e,
      onEdgesDelete: t
    };
  }
  function Xf(e, t, n) {
    const r = new Set(n);
    let a = 1;
    for (; r.has(`${e}:${t}${a}`); ) a++;
    return `${t}${a}`;
  }
  function Jf() {
    return {
      addDatasource: G.useCallback(async (t, n, r) => {
        const a = pe.getState().wasmNetwork;
        if (!a) return console.error("[AddDatasource] WASM network not ready"), null;
        const s = t === "SynflowDiscreteDataSource", o = ae.getState().nodes.map((g) => {
          var _a2;
          return ((_a2 = g.data) == null ? void 0 : _a2.canonicalId) ?? "";
        }).filter(Boolean), i = Xf(t, s ? "DiscreteSource" : "ScalarSource", o), c = JSON.stringify(r), l = s ? await Ha(a, i, c) : await Wa(a, i, c);
        if (!l) return console.error("[AddDatasource] failed to create datasource:", t), null;
        const u = `node-${l}`;
        Ge.getState().updateTimeSeries(u, 0, 0);
        const v = {
          id: u,
          type: t,
          position: n,
          style: {
            "--node-bg": "#000000",
            ...Ka(t, true)
          },
          data: {
            id: u,
            label: i,
            canonicalId: l,
            blockType: t,
            wasmHandle: l,
            sourceId: `synflow-${l}`,
            sourceType: s ? "discrete" : "scalar",
            colorIdx: o.length,
            hasOutput: true,
            hasInput: false,
            params: r
          }
        }, y = ae.getState();
        return y.setNodes(Aa([
          ...y.nodes,
          v
        ], u)), y.setManualLayout(true), await cn(a), pe.getState().setNetworkStatus("Ready"), u;
      }, [])
    };
  }
  function Zf() {
    const e = sn((c) => c.issues), t = pe((c) => c.networkStatus), n = pe((c) => c.lastError);
    let r = null, a = "", s = "";
    const o = e.filter((c) => c.kind === "cycle"), i = e.filter((c) => c.level === "warn");
    if (t === "Error") r = "error", a = "\u26D4", s = n ?? "Network error \u2014 it will rebuild from the canvas on your next edit.";
    else if (o.length > 0) {
      r = "error", a = "\u26D4";
      const c = new Set(o.map((l) => l.nodeId)).size;
      s = `Dependency loop with no time delay (${c} block${c > 1 ? "s" : ""}). Add a time-delayed connection or remove an edge.`;
    } else if (i.length > 0) {
      r = "warn", a = "\u26A0";
      const c = i.slice(0, 2).map((u) => u.message), l = i.length - c.length;
      s = (i.length === 1 ? "1 issue \u2014 " : `${i.length} issues \u2014 `) + c.join("; ") + (l > 0 ? `; +${l} more` : "");
    }
    return r ? k.jsx(vi, {
      position: "bottom-center",
      children: k.jsxs("div", {
        className: `network-status-footer network-status-footer-${r}`,
        role: r === "error" ? "alert" : "status",
        children: [
          k.jsx("span", {
            className: "network-status-footer-icon",
            children: a
          }),
          k.jsx("span", {
            className: "network-status-footer-text",
            children: s
          })
        ]
      })
    }) : null;
  }
  const Qf = G.memo(Zf), eh = (e) => e >= 55 ? "good" : e >= 30 ? "ok" : "poor";
  th = function({ statusId: e }) {
    const [t, n] = G.useState(0), [r, a] = G.useState(0), s = pe((u) => u.wasmReady), o = pe((u) => u.wasmStatus), i = pe((u) => u.isRunning), c = pe((u) => u.executionStep), l = s ? i ? "Running" : "Ready" : o;
    return G.useEffect(() => {
      const u = setInterval(() => {
        n(Ze.getCurrentFPS()), a(Ze.getCurrentExecutionRate());
      }, 200);
      return () => clearInterval(u);
    }, []), k.jsxs("div", {
      className: "perf-stats",
      role: "status",
      "aria-label": "Runtime status",
      children: [
        k.jsxs("div", {
          className: "perf-stat",
          children: [
            k.jsx("span", {
              className: bt("status-indicator", {
                active: s,
                running: i
              }),
              id: e
            }),
            k.jsx("span", {
              className: "perf-label",
              children: "Simulator"
            }),
            k.jsx("span", {
              className: "perf-value",
              "data-running": i,
              children: l
            })
          ]
        }),
        k.jsx("span", {
          className: "perf-sep"
        }),
        k.jsxs("div", {
          className: "perf-stat",
          children: [
            k.jsx("span", {
              className: "perf-label",
              children: "Step"
            }),
            k.jsx("span", {
              className: "perf-value perf-num",
              children: c
            })
          ]
        }),
        k.jsx("span", {
          className: "perf-sep"
        }),
        k.jsxs("div", {
          className: "perf-stat",
          children: [
            k.jsx("span", {
              className: "perf-label",
              children: "Render"
            }),
            k.jsx("span", {
              className: "perf-value perf-num",
              "data-level": eh(t),
              children: t
            }),
            k.jsx("span", {
              className: "perf-unit",
              children: "FPS"
            })
          ]
        }),
        k.jsx("span", {
          className: "perf-sep"
        }),
        k.jsxs("div", {
          className: "perf-stat",
          children: [
            k.jsx("span", {
              className: "perf-label",
              children: "Exec"
            }),
            k.jsx("span", {
              className: "perf-value perf-num",
              "data-running": r > 0,
              children: r
            }),
            k.jsx("span", {
              className: "perf-unit",
              children: "steps/s"
            })
          ]
        })
      ]
    });
  };
  const nh = /* @__PURE__ */ new Set([
    "SynflowScalarDataSource",
    "SynflowDiscreteDataSource"
  ]);
  vh = function({ fitViewOptions: e }) {
    const t = ae((C) => C.nodes), n = ae((C) => C.edges), r = ae((C) => C.onNodesChange), a = ae((C) => C.onEdgesChange), s = ae((C) => C.onConnect), o = _m((C) => C.capabilities), { screenToFlowPosition: i } = ut(), { addBlockToCanvas: c } = Vf(), { addDatasource: l } = Jf(), u = yc(), { onNodeDrag: v, onNodeDragStop: y } = Kf(), { onNodesDelete: g, onEdgesDelete: x } = Yf(), w = G.useCallback((C) => {
      var _a2, _b;
      const { nodes: T, edges: O } = ae.getState(), F = T.find((X) => X.id === C.source), z = T.find((X) => X.id === C.target);
      return Sr({
        id: C.source,
        blockType: ((_a2 = F == null ? void 0 : F.data) == null ? void 0 : _a2.blockType) ?? (F == null ? void 0 : F.type)
      }, C.sourceHandle, {
        id: C.target,
        blockType: ((_b = z == null ? void 0 : z.data) == null ? void 0 : _b.blockType) ?? (z == null ? void 0 : z.type)
      }, C.targetHandle).ok ? !Na(O, {
        source: C.source,
        target: C.target
      }) : false;
    }, []), d = ae((C) => C.beginConnect), f = ae((C) => C.endConnect), p = G.useCallback((C, T) => {
      if (!T.nodeId) return;
      const { nodes: O, edges: F } = ae.getState();
      d(Bf({
        nodeId: T.nodeId,
        handleId: T.handleId,
        handleType: T.handleType
      }, O, F));
    }, [
      d
    ]), b = G.useCallback(() => f(), [
      f
    ]), [S, _] = G.useState(null), h = G.useCallback(({ nodes: C, edges: T }) => zm() || C.length === 0 ? Promise.resolve(true) : new Promise((O) => {
      _({
        nodeCount: C.length,
        edgeCount: T.length,
        resolve: O
      });
    }), []), m = G.useCallback((C) => {
      o.addRemoveNodes && (C.preventDefault(), C.dataTransfer.dropEffect = "move");
    }, [
      o.addRemoveNodes
    ]), P = G.useCallback(async (C) => {
      if (!o.addRemoveNodes) return;
      C.preventDefault();
      const T = C.dataTransfer.getData(Ti);
      if (!T) return;
      const O = i({
        x: C.clientX,
        y: C.clientY
      });
      if (jt(T)) {
        tc({
          vizKind: xd[T],
          position: O,
          targetNodeId: null
        });
        return;
      }
      if (nh.has(T)) {
        const F = T === "SynflowDiscreteDataSource", z = C.dataTransfer.getData(Di), W = ja.includes(z) ? z : "sine", X = F ? Ii(Ni()) : $i(W, Ea(W));
        await l(T, O, X);
        return;
      }
      await c(T, O);
    }, [
      o.addRemoveNodes,
      i,
      c,
      l
    ]), N = G.useCallback(async () => {
      const { nodes: C, edges: T } = ae.getState(), { bitFieldParams: O } = ke.getState(), F = ln(C, T, O), z = sd(`${window.location.origin}${window.location.pathname}`, F);
      try {
        await navigator.clipboard.writeText(z), console.log("[Export] DashboardConfig URL copied to clipboard");
      } catch {
        window.prompt("Dashboard config URL (copy):", z);
      }
    }, []);
    return k.jsxs("div", {
      id: "network-panel",
      children: [
        k.jsxs(jc, {
          nodes: t,
          edges: n,
          nodeTypes: $f,
          edgeTypes: Af,
          onNodesChange: r,
          onEdgesChange: a,
          onConnect: o.addRemoveNodes ? u : s,
          onConnectStart: o.addRemoveNodes ? p : void 0,
          onConnectEnd: o.addRemoveNodes ? b : void 0,
          isValidConnection: w,
          connectionLineStyle: {
            stroke: "var(--accent-blue)",
            strokeWidth: 6,
            strokeLinecap: "round"
          },
          connectionRadius: 45,
          onNodeDrag: o.addRemoveNodes ? v : void 0,
          onNodeDragStop: o.addRemoveNodes ? y : void 0,
          onNodesDelete: o.addRemoveNodes ? g : void 0,
          onEdgesDelete: o.addRemoveNodes ? x : void 0,
          onBeforeDelete: o.addRemoveNodes ? h : void 0,
          onDragOver: m,
          onDrop: P,
          nodesDraggable: o.layout,
          nodesConnectable: o.addRemoveNodes,
          elementsSelectable: o.layout || o.addRemoveNodes,
          minZoom: 0.01,
          proOptions: {
            hideAttribution: true
          },
          children: [
            o.addRemoveNodes && k.jsx(vi, {
              position: "top-left",
              children: k.jsx(Pd, {})
            }),
            k.jsx(Lc, {
              fitViewOptions: e,
              showInteractive: false,
              className: "my-custom-control-button",
              children: k.jsx(Mc, {
                onClick: N,
                "data-tooltip": "Export config (copy URL)",
                "data-tooltip-placement": "right",
                "aria-label": "Export config",
                children: "\u2913"
              })
            }),
            k.jsx(Ac, {
              variant: Fc.Dots,
              gap: 12,
              size: 1,
              color: "var(--border-primary)"
            }),
            k.jsx(Qf, {})
          ]
        }),
        k.jsx("div", {
          className: "perf-stats-ribbon",
          children: k.jsx(th, {})
        }),
        S && k.jsx(Rd, {
          title: "Delete?",
          danger: true,
          confirmLabel: "Delete",
          message: S.nodeCount === 1 ? `Delete this node${S.edgeCount > 0 ? ` and its ${S.edgeCount} edge${S.edgeCount === 1 ? "" : "s"}` : ""}?` : `Delete these ${S.nodeCount} nodes${S.edgeCount > 0 ? ` and their ${S.edgeCount} edge${S.edgeCount === 1 ? "" : "s"}` : ""}?`,
          onConfirm: () => {
            S.resolve(true), _(null);
          },
          onCancel: () => {
            S.resolve(false), _(null);
          }
        })
      ]
    });
  };
});
export {
  nc as D,
  si as F,
  Ri as K,
  vh as N,
  th as P,
  Oi as V,
  __tla,
  sn as a,
  pe as b,
  nt as c,
  Ge as d,
  ke as e,
  _h as f,
  gh as g,
  ln as h,
  sd as i,
  yh as j,
  Yi as k,
  Qm as l,
  mh as m,
  hh as n,
  uh as o,
  dh as p,
  ph as q,
  lh as r,
  ec as s,
  _m as t,
  ae as u,
  fh as v
};
