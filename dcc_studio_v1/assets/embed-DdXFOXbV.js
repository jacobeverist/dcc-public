import { a as W, i as q, c as B, __tla as __tla_0 } from "./StackedSubplotPanel-DOZUNL8i.js";
import { r as i, j as t, R as H, b as U, u as V } from "./reactflow-C_yu4jb3.js";
import "./markdown-BhQy4Yqe.js";
import "./echarts-CxWuOr5q.js";
import { b as s, u as N, d as K, e as X, f as y, P as _, k as G, l as J, m as Q, n as Y, D as E, N as Z, __tla as __tla_1 } from "./NetworkPanel-Ba8_oO-o.js";
import { $ as ee, __tla as __tla_2 } from "./ToggleButton-BOMWLtnk.js";
import "./elkjs-rLLxZdMu.js";
import { __tla as __tla_3 } from "./wasm-api-CIbLdSEZ.js";
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
  })()
]).then(async () => {
  function te({ demoKey: p }) {
    const a = s((e) => e.speed), b = s((e) => e.setSpeed), r = 500, c = 2, h = (e) => {
      const l = e / 100;
      return Math.round(Math.pow(l, c) * r);
    }, g = (e) => {
      const l = e / r;
      return Math.round(Math.pow(l, 1 / c) * 100);
    }, [w, f] = i.useState(g(a)), o = s((e) => e.isRunning), n = s((e) => e.wasmReady), S = s((e) => e.networkStatus), m = s((e) => e.learningEnabled);
    s((e) => e.executionStep), s((e) => e.currentDemo);
    const u = s((e) => e.start), j = s((e) => e.stop);
    s((e) => e.fullReset);
    const k = s((e) => e.destroyNetwork), v = s((e) => e.setWasmNetwork), C = s((e) => e.setSpeed), D = s((e) => e.toggleLearning), R = s((e) => e.singleStep), z = N((e) => e.nodes), L = N((e) => e.reset), P = K((e) => e.clearData), F = X((e) => e.clearData), { initializeDemo: M } = y(), d = z.length > 0, $ = () => {
      !n || !d || u();
    }, A = () => {
      !n || !d || o || R();
    }, I = () => {
      j();
    }, T = (e) => {
      const l = parseInt(e.target.value);
      f(l);
      const x = h(l);
      b(x), C(x);
    }, O = async () => {
      if (!(!p || !n)) try {
        if (S !== "None") {
          console.log("[EmbeddableControls] Destroying and recreating network..."), o && j(), k(), L(), P(), F(), await new Promise((x) => setTimeout(x, 50));
          const e = await G();
          if (!e) {
            console.error("[EmbeddableControls] Failed to create new network");
            return;
          }
          v(e), console.log("[EmbeddableControls] New network created successfully"), await M(p) ? console.log("[EmbeddableControls] Demo reinitialized successfully") : console.error("[EmbeddableControls] Failed to reinitialize demo");
        }
      } catch (e) {
        console.error("[EmbeddableControls] Error during reset:", e);
      }
    };
    return t.jsxs("div", {
      className: "embed-controls",
      children: [
        t.jsxs("div", {
          className: "embed-header",
          children: [
            t.jsx("div", {
              children: "Discrete Cortical Circuits (DCC) Simulator"
            }),
            t.jsx(_, {})
          ]
        }),
        t.jsxs("div", {
          className: "embed-controls-bar",
          children: [
            t.jsxs("div", {
              className: "control-group",
              children: [
                t.jsx("button", {
                  id: "start-btn",
                  className: "primary",
                  onClick: $,
                  disabled: !n || !d || o,
                  "data-tooltip": "Start continuous execution",
                  "data-tooltip-placement": "bottom",
                  children: "\u25B6 Run"
                }),
                t.jsx("button", {
                  id: "step-btn",
                  className: "primary",
                  onClick: A,
                  disabled: !n || !d || o,
                  "data-tooltip": "Execute single step",
                  "data-tooltip-placement": "bottom",
                  children: "\u23ED Step"
                }),
                t.jsx("button", {
                  className: W("control-btn", "danger"),
                  onClick: I,
                  disabled: !o,
                  "data-tooltip": "Stop execution",
                  "data-tooltip-placement": "bottom",
                  children: "\u23F8 Stop"
                }),
                t.jsx("button", {
                  id: "reset-btn",
                  className: "primary",
                  onClick: O,
                  disabled: !n || !d || o,
                  "data-tooltip": "Reset network to initial state",
                  "data-tooltip-placement": "bottom",
                  children: "\u21BA Reset"
                }),
                t.jsx(ee, {
                  id: "learning-toggle",
                  className: ({ isSelected: e }) => e ? "primary" : "danger",
                  isSelected: m,
                  onChange: D,
                  isDisabled: !n || !d || o,
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
                  value: w,
                  onChange: T,
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
            })
          ]
        })
      ]
    });
  }
  function se() {
    const { getNodes: p } = U(), [a, b] = i.useState(null), [r, c] = i.useState(null), { applyElkDefault: h } = J(), g = V({
      includeHiddenNodes: true
    }), [w, f] = i.useState(p());
    Q(), Y();
    const o = s((m) => m.wasmReady), { initializeDemo: n } = y();
    i.useEffect(() => {
      const u = new URLSearchParams(window.location.search).get("demo") || "sequence";
      if (!E[u]) {
        b(`Invalid demo: "${u}". Available demos: ${Object.keys(E).join(", ")}`), c(null);
        return;
      }
      c(u), b(null);
    }, []), i.useEffect(() => {
      g && h();
    }, [
      g
    ]), i.useEffect(() => {
      o && r && !a && (console.log(`[EmbeddableApp] Initializing demo: ${r}`), n(r).then(() => {
        console.log("Demo initialized successfully");
      }, () => {
        console.log("Failed to initialize demo");
      }));
    }, [
      o,
      r,
      a,
      n
    ]);
    const S = {
      padding: 0.1
    };
    return a ? t.jsx("div", {
      className: "embed-container",
      children: t.jsxs("div", {
        className: "embed-error",
        children: [
          t.jsx("h2", {
            children: "Error Loading Demo"
          }),
          t.jsx("p", {
            children: a
          }),
          t.jsxs("p", {
            className: "error-hint",
            children: [
              "Try adding a valid demo parameter to the URL, e.g., ",
              t.jsx("code", {
                children: "?demo=sequence"
              })
            ]
          })
        ]
      })
    }) : o ? t.jsxs("div", {
      className: "embed-container",
      children: [
        t.jsx(te, {
          demoKey: r
        }),
        t.jsx("div", {
          className: "embed-network-wrapper",
          children: t.jsx(Z, {
            fitViewOptions: S
          })
        })
      ]
    }) : t.jsx("div", {
      className: "embed-container",
      children: t.jsxs("div", {
        className: "embed-loading",
        children: [
          t.jsx("div", {
            className: "loading-spinner"
          }),
          t.jsx("p", {
            children: "Loading WASM module..."
          })
        ]
      })
    });
  }
  function oe() {
    return t.jsx(H, {
      children: t.jsx(se, {})
    });
  }
  q();
  B.createRoot(document.getElementById("root")).render(t.jsx(i.StrictMode, {
    children: t.jsx(oe, {})
  }));
});
