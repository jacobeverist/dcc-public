import { i as ne, c as oe, __tla as __tla_0 } from "./StackedSubplotPanel-DOZUNL8i.js";
import { r as c, b as k, j as t, R as re, u as ae } from "./reactflow-C_yu4jb3.js";
import "./markdown-BhQy4Yqe.js";
import "./echarts-CxWuOr5q.js";
import { g as ie, j as ce, D as v, b as n, u as f, d as le, e as de, f as ue, l as C, P as pe, k as me, r as ge, F as E, m as fe, n as he, N as xe, __tla as __tla_1 } from "./NetworkPanel-Ba8_oO-o.js";
import { $ as Se, __tla as __tla_2 } from "./ToggleButton-BOMWLtnk.js";
import { u as je, __tla as __tla_3 } from "./useConfigBoot-DFwGUWpC.js";
import "./elkjs-rLLxZdMu.js";
import { __tla as __tla_4 } from "./wasm-api-CIbLdSEZ.js";
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
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })()
]).then(async () => {
  const ye = false, we = ie(), be = () => {
    const u = ce, r = {}, l = Object.keys(v);
    Object.entries(u).forEach(([d, S]) => {
      const x = S.filter((j) => l.includes(j));
      x.length > 0 && (r[d] = x);
    });
    const a = Object.values(r).flat();
    return l.filter((d) => !a.includes(d)).length > 0, r;
  }, De = be();
  function Ne({ fitViewOptions: u }) {
    const [r, l] = c.useState(""), a = n((e) => e.speed), h = n((e) => e.setSpeed), [d, S] = c.useState(false), x = 500, j = 2, R = (e) => {
      const s = e / 100;
      return Math.round(Math.pow(s, j) * x);
    }, O = (e) => {
      const s = e / x;
      return Math.round(Math.pow(s, 1 / j) * 100);
    }, [L, P] = c.useState(O(a)), i = n((e) => e.isRunning), p = n((e) => e.wasmReady);
    n((e) => e.wasmStatus);
    const I = n((e) => e.networkStatus), z = n((e) => e.learningEnabled), F = n((e) => e.demoDescription), T = n((e) => e.start), w = n((e) => e.stop), A = n((e) => e.fullReset), M = n((e) => e.destroyNetwork), H = n((e) => e.setWasmNetwork), B = n((e) => e.setSpeed), _ = n((e) => e.toggleLearning), V = n((e) => e.singleStep), b = n((e) => e.setCurrentDemo), y = f((e) => e.nodes), N = f((e) => e.reset), W = le((e) => e.clearData), $ = de((e) => e.clearData), { initializeDemo: G } = ue(), { applyElkDefault: K } = C(), { fitView: U } = k(), q = async () => {
      K(), await U(u);
    }, m = c.useRef(null), D = c.useRef(false), X = async (e) => {
      if (p) try {
        if (I !== "None") {
          console.log("[Header] Network already exists, destroying and recreating..."), i && w(), M(), N(), W(), $(), await new Promise((se) => setTimeout(se, 50));
          const o = await me();
          if (!o) {
            console.error("[Header] Failed to create new network");
            return;
          }
          H(o), console.log("[Header] New network created successfully");
        }
        const s = await G(e);
      } catch (s) {
        console.error("[Header] Error during network initialization:", s);
      }
    }, J = async (e) => {
      const s = e.target.value;
      if (l(s), !s) {
        m.current = null;
        return;
      }
      b(s, we[s] || ""), D.current = true, m.current = null;
      try {
        await X(s), m.current = new Set(f.getState().nodes.map((o) => o.id));
      } finally {
        D.current = false;
      }
    };
    c.useEffect(() => {
      if (D.current || !r || !m.current) return;
      const e = m.current;
      y.length === e.size && y.every((o) => e.has(o.id)) || (l(""), m.current = null, b("", ""));
    }, [
      y,
      r,
      b
    ]);
    const Q = () => {
      !p || !g || T();
    }, Y = () => {
      !p || !g || i || V();
    }, Z = () => {
      w();
    }, ee = () => {
      w(), A(), N(), l("");
    }, te = (e) => {
      const s = parseInt(e.target.value);
      P(s);
      const o = R(s);
      h(o), B(o);
    }, g = y.length > 0;
    return t.jsxs("div", {
      id: "header",
      children: [
        t.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "var(--spacing-sm"
          },
          children: [
            t.jsx("div", {
              children: "Discrete Cortical Circuits (DCC) Simulator"
            }),
            t.jsx(pe, {
              statusId: "wasm-status"
            })
          ]
        }),
        t.jsxs("div", {
          id: "controls-bar",
          children: [
            t.jsxs("div", {
              className: "control-group",
              children: [
                t.jsx("label", {
                  children: "Demos"
                }),
                t.jsx("button", {
                  id: "reset-btn",
                  className: "danger",
                  onClick: ee,
                  disabled: i,
                  children: "Clear"
                }),
                t.jsxs("select", {
                  id: "demo-select",
                  value: r,
                  onChange: J,
                  disabled: i,
                  children: [
                    t.jsx("option", {
                      value: "",
                      children: "-- Select Demo --"
                    }),
                    Object.entries(De).map(([e, s]) => t.jsx("optgroup", {
                      label: e,
                      children: s.map((o) => t.jsx("option", {
                        value: o,
                        children: v[o].name
                      }, o))
                    }, e))
                  ]
                }),
                t.jsx("div", {
                  className: "status-item",
                  children: t.jsx("span", {
                    id: "demo-description",
                    children: F
                  })
                })
              ]
            }),
            t.jsxs("div", {
              className: "control-group",
              children: [
                t.jsx("label", {
                  children: "Controls"
                }),
                t.jsx("button", {
                  id: "start-btn",
                  className: "primary",
                  onClick: Q,
                  disabled: !p || !g || i,
                  children: "\u25B6 Run"
                }),
                t.jsx("button", {
                  id: "step-btn",
                  className: "primary",
                  onClick: Y,
                  disabled: !p || !g || i,
                  "data-tooltip": "Execute single step",
                  "data-tooltip-placement": "bottom",
                  children: "\u23ED Step"
                }),
                t.jsx("button", {
                  id: "stop-btn",
                  className: "danger",
                  onClick: Z,
                  disabled: !i,
                  children: "\u23F9 Stop"
                }),
                t.jsx(Se, {
                  id: "learning-toggle",
                  className: ({ isSelected: e }) => e ? "primary" : "danger",
                  isSelected: z,
                  onChange: _,
                  isDisabled: !p || !g || i,
                  children: ({ isSelected: e }) => e ? "Learning On" : "Learning Off"
                })
              ]
            }),
            t.jsxs("div", {
              className: "control-group",
              children: [
                t.jsx("label", {
                  children: "Speed"
                }),
                t.jsx("input", {
                  type: "range",
                  id: "speed-slider",
                  min: "0",
                  max: "100",
                  value: L,
                  onChange: te,
                  "data-tooltip": `${a}ms (quadratic scale)`,
                  "data-tooltip-placement": "bottom",
                  style: {
                    direction: "rtl"
                  }
                }),
                t.jsx("span", {
                  id: "speed-display",
                  style: {
                    color: "var(--text-primary)"
                  },
                  children: a == 0 ? "max speed" : (1 / (a / 1e3)).toFixed(1) + " steps/s"
                })
              ]
            }),
            t.jsx("div", {
              className: "header-group",
              children: t.jsx("button", {
                id: "reset-layout-btn",
                className: "primary",
                onClick: q,
                disabled: !g || i,
                children: "Layout Nodes"
              })
            })
          ]
        })
      ]
    });
  }
  function Ee() {
    const u = ae({
      includeHiddenNodes: true
    }), { applyElkDefault: r } = C(), { fitView: l } = k(), a = c.useRef(false);
    c.useEffect(() => {
      var _a;
      if (!u || f.getState().manualLayout || a.current) return;
      const d = ge(), S = !!(((_a = d == null ? void 0 : d.layout) == null ? void 0 : _a.nodes) && Object.keys(d.layout.nodes).length > 0);
      if (a.current = true, !S && f.getState().nodes.length > 0) {
        r();
        return;
      }
      f.getState().nodes.length > 0 && l({
        padding: E
      });
    }, [
      u
    ]), fe(), he(), je();
    const h = {
      padding: E
    };
    return t.jsxs("div", {
      id: "container",
      children: [
        t.jsx(Ne, {
          fitViewOptions: h
        }),
        t.jsx("div", {
          id: "main-content",
          children: t.jsx(xe, {
            fitViewOptions: h
          })
        })
      ]
    });
  }
  function ke() {
    return t.jsx(re, {
      children: t.jsx(Ee, {})
    });
  }
  ne();
  oe.createRoot(document.getElementById("root")).render(t.jsx(c.StrictMode, {
    children: t.jsx(ke, {})
  }));
});
