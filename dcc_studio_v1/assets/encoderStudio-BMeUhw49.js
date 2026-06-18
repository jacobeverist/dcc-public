import { ay as R, az as I, aF as O, i as T, c as _, __tla as __tla_0 } from "./StackedSubplotPanel-DOZUNL8i.js";
import { j as o, R as L, t as B, v, r as l, o as G, q as U, s as D, C as M, p as k } from "./reactflow-C_yu4jb3.js";
import "./markdown-BhQy4Yqe.js";
import "./echarts-CxWuOr5q.js";
import { s as z, a as F, b as H, H as W, __tla as __tla_1 } from "./HelpDrawer-ClRiNlqH.js";
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
  const V = [
    {
      id: "demos",
      type: "demos",
      position: {
        x: 0,
        y: 0
      },
      data: {}
    },
    {
      id: "plotrange",
      type: "plotrange",
      position: {
        x: 0,
        y: 90
      },
      data: {}
    },
    {
      id: "controls",
      type: "controls",
      position: {
        x: 0,
        y: 200
      },
      data: {}
    },
    {
      id: "picker",
      type: "picker",
      position: {
        x: 0,
        y: 720
      },
      data: {}
    },
    {
      id: "cursor",
      type: "cursor",
      position: {
        x: 0,
        y: 880
      },
      data: {}
    },
    {
      id: "bits",
      type: "bits",
      position: {
        x: 920,
        y: 0
      },
      data: {}
    },
    {
      id: "refpoints",
      type: "refpoints",
      position: {
        x: 920,
        y: 560
      },
      data: {}
    },
    {
      id: "stackedPanel",
      type: "stackedPanel",
      position: {
        x: 920,
        y: 340
      },
      data: {}
    },
    {
      id: "stacked",
      type: "stacked",
      position: {
        x: 1180,
        y: 0
      },
      data: {},
      style: {
        width: 460,
        height: 420
      },
      className: "studio-plot-node"
    }
  ], X = 360, Z = [
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
      target: "bits"
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
      target: "stacked"
    }
  ];
  function $(i, r, a) {
    if (a) return a;
    const p = (O[i] ?? 1) >= 2;
    return {
      id: `subplot-${i}`,
      type: "subplot",
      position: {
        x: X,
        y: r * 300
      },
      data: {
        specs: [
          i
        ]
      },
      style: {
        width: 452,
        height: p ? 320 : 240
      },
      className: "studio-plot-node"
    };
  }
  function q() {
    R();
    const i = I((s) => s.subplots), [r, a, p] = B(V), [u, , w] = v(Z), [E, b] = l.useState(false), C = l.useCallback(async () => {
      const s = z(F(r, u));
      try {
        await navigator.clipboard.writeText(s);
      } catch {
        window.prompt("Embed URL (copy):", s);
      }
      b(true), window.setTimeout(() => b(false), 1800);
    }, [
      r,
      u
    ]), j = l.useCallback(() => {
      a((d) => {
        const m = new Map(d.map((t) => [
          t.id,
          t
        ])), e = (t) => {
          var _a, _b;
          return {
            w: ((_a = t.measured) == null ? void 0 : _a.width) ?? 280,
            h: ((_b = t.measured) == null ? void 0 : _b.height) ?? 180
          };
        }, c = (t) => t.map((n) => m.get(n)).filter(Boolean), S = d.filter((t) => t.type === "subplot").sort((t, n) => t.position.y - n.position.y), N = [
          c([
            "demos",
            "plotrange",
            "controls",
            "refpoints",
            "picker",
            "cursor"
          ]),
          S,
          c([
            "bits",
            "stackedPanel"
          ]),
          c([
            "stacked"
          ])
        ], y = /* @__PURE__ */ new Map();
        let f = 0;
        for (const t of N) {
          let n = 0, g = 0;
          for (const x of t) {
            const { w: P, h: A } = e(x);
            y.set(x.id, {
              x: f,
              y: n
            }), n += A + 24, g = Math.max(g, P);
          }
          t.length > 0 && (f += g + 60);
        }
        return d.map((t) => y.has(t.id) ? {
          ...t,
          position: y.get(t.id)
        } : t);
      });
    }, [
      a
    ]);
    return l.useEffect(() => {
      a((s) => {
        const h = s.filter((e) => e.type !== "subplot"), d = new Map(s.filter((e) => e.type === "subplot").map((e) => [
          e.id,
          e
        ])), m = i.map((e, c) => $(e, c, d.get(`subplot-${e}`)));
        return [
          ...h,
          ...m
        ];
      });
    }, [
      i,
      a
    ]), o.jsxs("div", {
      style: {
        width: "100vw",
        height: "100vh",
        background: "#888888"
      },
      children: [
        o.jsxs(G, {
          nodes: r,
          edges: u,
          nodeTypes: H,
          onNodesChange: p,
          onEdgesChange: w,
          fitView: true,
          minZoom: 0.2,
          maxZoom: 2,
          proOptions: {
            hideAttribution: true
          },
          children: [
            o.jsx(U, {
              variant: D.Dots,
              gap: 16,
              size: 1,
              color: "#777"
            }),
            o.jsxs(M, {
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
                  onClick: C,
                  "data-tooltip": "Copy embed config URL",
                  "data-tooltip-placement": "right",
                  "aria-label": "Copy embed config URL",
                  children: "\u29C9"
                })
              ]
            })
          ]
        }),
        E && o.jsx("div", {
          className: "studio-toast",
          children: "Embed config copied to clipboard"
        })
      ]
    });
  }
  function J() {
    return o.jsx(L, {
      children: o.jsx(q, {})
    });
  }
  T();
  _.createRoot(document.getElementById("root")).render(o.jsxs(l.StrictMode, {
    children: [
      o.jsx(J, {}),
      o.jsx(W, {})
    ]
  }));
});
