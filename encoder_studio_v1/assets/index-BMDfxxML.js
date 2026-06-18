import { r as A, u as P, a as L, s as O, b as U, c as E, S as R, i as v, d as B, e as I, H as D, __tla as __tla_0 } from "./HelpDrawer-l_qoOkyo.js";
import { j as e, R as G, u as M, r as l, i as H, B as z, a as F, C as W, b as g } from "./reactflow-CFE1JzbO.js";
import "./markdown-BhQy4Yqe.js";
import "./echarts-CxWuOr5q.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const V = {
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
      "per-bin"
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
        "similarity",
        "similarity-heatmap"
      ]
    },
    subplotParams: {
      bins: {
        folded: true
      }
    },
    nodes: [
      {
        id: "demos",
        type: "demos",
        position: {
          x: -775,
          y: 188
        }
      },
      {
        id: "plotrange",
        type: "plotrange",
        position: {
          x: -508,
          y: 87
        }
      },
      {
        id: "controls",
        type: "controls",
        position: {
          x: -794,
          y: 252
        }
      },
      {
        id: "picker",
        type: "picker",
        position: {
          x: 154,
          y: 66
        }
      },
      {
        id: "cursor",
        type: "cursor",
        position: {
          x: -510,
          y: 10
        }
      },
      {
        id: "bits",
        type: "bits",
        position: {
          x: -798,
          y: 73
        }
      },
      {
        id: "refpoints",
        type: "refpoints",
        position: {
          x: -759,
          y: 10
        }
      },
      {
        id: "stackedPanel",
        type: "stackedPanel",
        position: {
          x: 72,
          y: 534
        }
      },
      {
        id: "stacked",
        type: "stacked",
        position: {
          x: -488,
          y: 174
        },
        width: 552,
        height: 697
      },
      {
        id: "subplot-per-bin",
        type: "subplot",
        position: {
          x: 360,
          y: 0
        },
        width: 458,
        height: 393,
        specs: [
          "per-bin"
        ]
      }
    ]
  }, w = A() ?? V;
  function Y(t) {
    const n = t.type === "subplot" || t.type === "stacked", s = {
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
    return (t.width != null || t.height != null || n) && (s.style = {
      width: t.width ?? (t.type === "stacked" ? 460 : 452),
      height: t.height ?? (t.type === "stacked" ? 420 : 240)
    }), n && (s.className = "studio-plot-node"), s;
  }
  const Z = (w.nodes ?? []).map(Y), $ = 360;
  function X(t, n, s) {
    if (s) return s;
    const c = (R[t] ?? 1) >= 2;
    return {
      id: `subplot-${t}`,
      type: "subplot",
      position: {
        x: $,
        y: n * 300
      },
      data: {
        specs: [
          t
        ]
      },
      style: {
        width: 452,
        height: c ? 320 : 240
      },
      className: "studio-plot-node"
    };
  }
  function q() {
    P();
    const t = L((a) => a.subplots), [n, s, c] = M(Z), [k, b] = l.useState(false), C = l.useCallback(async () => {
      const a = O(U(n, []));
      try {
        await navigator.clipboard.writeText(a);
      } catch {
        window.prompt("Studio config URL (copy):", a);
      }
      b(true), window.setTimeout(() => b(false), 1800);
    }, [
      n
    ]), S = l.useCallback(() => {
      s((d) => {
        const u = new Map(d.map((o) => [
          o.id,
          o
        ])), i = (o) => {
          var _a, _b;
          return {
            w: ((_a = o.measured) == null ? void 0 : _a.width) ?? 280,
            h: ((_b = o.measured) == null ? void 0 : _b.height) ?? 180
          };
        }, p = (o) => o.map((r) => u.get(r)).filter(Boolean), _ = d.filter((o) => o.type === "subplot").sort((o, r) => o.position.y - r.position.y), j = [
          p([
            "demos",
            "plotrange",
            "controls",
            "refpoints",
            "picker",
            "cursor"
          ]),
          _,
          p([
            "bits",
            "stackedPanel"
          ]),
          p([
            "stacked"
          ])
        ], y = /* @__PURE__ */ new Map();
        let m = 0;
        for (const o of j) {
          let r = 0, h = 0;
          for (const x of o) {
            const { w: N, h: T } = i(x);
            y.set(x.id, {
              x: m,
              y: r
            }), r += T + 24, h = Math.max(h, N);
          }
          o.length > 0 && (m += h + 60);
        }
        return d.map((o) => y.has(o.id) ? {
          ...o,
          position: y.get(o.id)
        } : o);
      });
    }, [
      s
    ]);
    return l.useEffect(() => {
      s((a) => {
        const f = a.filter((i) => i.type !== "subplot"), d = new Map(a.filter((i) => i.type === "subplot").map((i) => [
          i.id,
          i
        ])), u = t.map((i, p) => X(i, p, d.get(`subplot-${i}`)));
        return [
          ...f,
          ...u
        ];
      });
    }, [
      t,
      s
    ]), e.jsxs("div", {
      className: "studio-flow",
      style: {
        width: "100vw",
        height: "100vh",
        background: "#888888"
      },
      children: [
        e.jsxs(H, {
          nodes: n,
          edges: [],
          nodeTypes: E,
          onNodesChange: c,
          nodesConnectable: false,
          fitView: true,
          minZoom: 0.2,
          maxZoom: 2,
          proOptions: {
            hideAttribution: true
          },
          children: [
            e.jsx(z, {
              variant: F.Dots,
              gap: 16,
              size: 1,
              color: "#777"
            }),
            e.jsxs(W, {
              showInteractive: false,
              children: [
                e.jsx(g, {
                  onClick: S,
                  "data-tooltip": "Auto-layout nodes",
                  "data-tooltip-placement": "right",
                  "aria-label": "Auto-layout nodes",
                  children: "\u25A6"
                }),
                e.jsx(g, {
                  onClick: C,
                  "data-tooltip": "Copy config URL",
                  "data-tooltip-placement": "right",
                  "aria-label": "Copy config URL",
                  children: "\u29C9"
                })
              ]
            })
          ]
        }),
        k && e.jsx("div", {
          className: "studio-toast",
          children: "Config URL copied to clipboard"
        })
      ]
    });
  }
  function J() {
    return e.jsx(G, {
      children: e.jsx(q, {})
    });
  }
  v();
  B(w);
  I.createRoot(document.getElementById("root")).render(e.jsxs(l.StrictMode, {
    children: [
      e.jsx(J, {}),
      e.jsx(D, {})
    ]
  }));
});
