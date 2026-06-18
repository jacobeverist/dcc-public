import { ax as T, ay as I, aF as L, a4 as v, aE as O, __tla as __tla_0 } from "./StackedSubplotPanel-De_N8OhU.js";
import { j as o, R, t as B, v as U, r as p, n as G, p as D, q as M, C as F, o as k } from "./reactflow-DDaPvTHK.js";
import "./markdown-BhQy4Yqe.js";
import "./echarts-CxWuOr5q.js";
import { s as H, a as $, b as z, c as W, H as V, __tla as __tla_1 } from "./HelpDrawer-Dyzq8NaB.js";
import "./elkjs-rLLxZdMu.js";
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
  const g = {
    encoders: [
      {
        type: "interval-fixed",
        n: 7,
        w: 2,
        lower_bound: 0,
        upper_bound: 1
      },
      {
        type: "interval-tapering",
        n: 11,
        w: 3,
        lower_bound: 0,
        upper_bound: 1
      },
      {
        type: "periodic-fixed",
        n: 13,
        w: 2,
        lower_bound: 0,
        upper_bound: 1,
        period: 1
      }
    ],
    viewBounds: [
      -1,
      2
    ],
    scalarCursor: 0.5,
    refPoints: [],
    subplots: [
      "bins"
    ],
    stacked: {
      order: [
        "bins",
        "per-bin",
        "similarity",
        "bits-by-data",
        "projected-similarity",
        "decomposition",
        "similarity-heatmap",
        "features"
      ],
      active: [
        "bins",
        "per-bin"
      ]
    },
    subplotParams: {},
    nodes: [
      {
        id: "demos",
        type: "demos",
        position: {
          x: 89,
          y: -83
        }
      },
      {
        id: "plotrange",
        type: "plotrange",
        position: {
          x: 82,
          y: -15
        }
      },
      {
        id: "controls",
        type: "controls",
        position: {
          x: 80,
          y: 62
        }
      },
      {
        id: "picker",
        type: "picker",
        position: {
          x: 860,
          y: -93
        }
      },
      {
        id: "cursor",
        type: "cursor",
        position: {
          x: 1091,
          y: 97
        }
      },
      {
        id: "bits",
        type: "bits",
        position: {
          x: 1084,
          y: -96
        }
      },
      {
        id: "refpoints",
        type: "refpoints",
        position: {
          x: 1092,
          y: 30
        }
      },
      {
        id: "stackedPanel",
        type: "stackedPanel",
        position: {
          x: 848,
          y: 174
        }
      },
      {
        id: "stacked",
        type: "stacked",
        position: {
          x: 1079,
          y: 170
        },
        width: 460,
        height: 420
      },
      {
        id: "subplot-bins",
        type: "subplot",
        position: {
          x: 385,
          y: -90
        },
        width: 452,
        height: 320,
        specs: [
          "bins"
        ]
      }
    ],
    edges: [
      {
        id: "e-demos-controls",
        source: "demos",
        target: "controls",
        animated: true
      },
      {
        id: "e-plotrange-stacked",
        source: "plotrange",
        target: "stacked",
        animated: true
      },
      {
        id: "e-controls-bits",
        source: "controls",
        target: "bits",
        animated: true
      },
      {
        id: "e-cursor-bits",
        source: "cursor",
        target: "bits",
        animated: false
      },
      {
        id: "e-controls-stacked",
        source: "controls",
        target: "stacked",
        animated: true
      },
      {
        id: "e-panel-stacked",
        source: "stackedPanel",
        target: "stacked",
        animated: false
      }
    ]
  };
  function Z(t) {
    const a = t.type === "subplot" || t.type === "stacked", s = {
      id: t.id,
      type: t.type,
      position: {
        ...t.position
      },
      data: {
        ...t.specs ? {
          specs: t.specs
        } : {},
        ...t.data ?? {}
      }
    };
    return (t.width != null || t.height != null || a) && (s.style = {
      width: t.width ?? (t.type === "stacked" ? 460 : 452),
      height: t.height ?? (t.type === "stacked" ? 420 : 240)
    }), a && (s.className = "studio-plot-node"), s;
  }
  const q = (g.nodes ?? []).map(Z), X = 360, Y = (g.edges ?? []).map((t) => ({
    id: t.id ?? `e-${t.source}-${t.target}`,
    source: t.source,
    target: t.target,
    animated: !!t.animated
  }));
  function J(t, a, s) {
    if (s) return s;
    const l = (L[t] ?? 1) >= 2;
    return {
      id: `subplot-${t}`,
      type: "subplot",
      position: {
        x: X,
        y: a * 300
      },
      data: {
        specs: [
          t
        ]
      },
      style: {
        width: 452,
        height: l ? 320 : 240
      },
      className: "studio-plot-node"
    };
  }
  function K() {
    T();
    const t = I((n) => n.subplots), [a, s, l] = B(q), [u, , E] = U(Y), [C, h] = p.useState(false), _ = p.useCallback(async () => {
      const n = H($(a, u));
      try {
        await navigator.clipboard.writeText(n);
      } catch {
        window.prompt("Embed URL (copy):", n);
      }
      h(true), window.setTimeout(() => h(false), 1800);
    }, [
      a,
      u
    ]), j = p.useCallback(() => {
      s((d) => {
        const m = new Map(d.map((e) => [
          e.id,
          e
        ])), i = (e) => {
          var _a, _b;
          return {
            w: ((_a = e.measured) == null ? void 0 : _a.width) ?? 280,
            h: ((_b = e.measured) == null ? void 0 : _b.height) ?? 180
          };
        }, c = (e) => e.map((r) => m.get(r)).filter(Boolean), N = d.filter((e) => e.type === "subplot").sort((e, r) => e.position.y - r.position.y), P = [
          c([
            "demos",
            "plotrange",
            "controls",
            "refpoints",
            "picker",
            "cursor"
          ]),
          N,
          c([
            "bits",
            "stackedPanel"
          ]),
          c([
            "stacked"
          ])
        ], y = /* @__PURE__ */ new Map();
        let x = 0;
        for (const e of P) {
          let r = 0, b = 0;
          for (const w of e) {
            const { w: S, h: A } = i(w);
            y.set(w.id, {
              x,
              y: r
            }), r += A + 24, b = Math.max(b, S);
          }
          e.length > 0 && (x += b + 60);
        }
        return d.map((e) => y.has(e.id) ? {
          ...e,
          position: y.get(e.id)
        } : e);
      });
    }, [
      s
    ]);
    return p.useEffect(() => {
      s((n) => {
        const f = n.filter((i) => i.type !== "subplot"), d = new Map(n.filter((i) => i.type === "subplot").map((i) => [
          i.id,
          i
        ])), m = t.map((i, c) => J(i, c, d.get(`subplot-${i}`)));
        return [
          ...f,
          ...m
        ];
      });
    }, [
      t,
      s
    ]), o.jsxs("div", {
      className: "studio-flow",
      style: {
        width: "100vw",
        height: "100vh",
        background: "#888888"
      },
      children: [
        o.jsxs(G, {
          nodes: a,
          edges: u,
          nodeTypes: z,
          onNodesChange: l,
          onEdgesChange: E,
          fitView: true,
          minZoom: 0.2,
          maxZoom: 2,
          proOptions: {
            hideAttribution: true
          },
          children: [
            o.jsx(D, {
              variant: M.Dots,
              gap: 16,
              size: 1,
              color: "#777"
            }),
            o.jsxs(F, {
              showInteractive: false,
              children: [
                o.jsx(k, {
                  onClick: j,
                  "data-tooltip": "Auto-layout nodes",
                  "data-tooltip-placement": "right",
                  "aria-label": "Auto-layout nodes",
                  children: "\u25A6"
                }),
                o.jsx(k, {
                  onClick: _,
                  "data-tooltip": "Copy embed config URL",
                  "data-tooltip-placement": "right",
                  "aria-label": "Copy embed config URL",
                  children: "\u29C9"
                })
              ]
            })
          ]
        }),
        C && o.jsx("div", {
          className: "studio-toast",
          children: "Embed config copied to clipboard"
        })
      ]
    });
  }
  function Q() {
    return o.jsx(R, {
      children: o.jsx(K, {})
    });
  }
  v();
  W(g);
  O.createRoot(document.getElementById("root")).render(o.jsxs(p.StrictMode, {
    children: [
      o.jsx(Q, {}),
      o.jsx(V, {})
    ]
  }));
});
