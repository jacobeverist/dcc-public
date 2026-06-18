import { T as w, i as ye, c as he, __tla as __tla_0 } from "./StackedSubplotPanel-DOZUNL8i.js";
import { r as s, j as t, a as fe, R as ve, u as Se, b as ke } from "./reactflow-C_yu4jb3.js";
import "./markdown-BhQy4Yqe.js";
import "./echarts-CxWuOr5q.js";
import { c as v, u as l, a as we, v as je, g as Ce, b as a, d as Ne, e as T, f as Re, D as X, h as q, i as De, j as Me, k as Ee, l as Ie, r as ze, m as Oe, n as Te, N as Be, __tla as __tla_1 } from "./NetworkPanel-Ba8_oO-o.js";
import { u as Pe, __tla as __tla_2 } from "./useConfigBoot-DFwGUWpC.js";
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
  const Je = [
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
  ], Le = v("outline", "download", "Download", Je);
  const Fe = [
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
  ], We = v("outline", "gauge", "Gauge", Fe);
  const _e = [
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
  ], $e = v("outline", "link", "Link", _e);
  const Ue = [
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
  ], He = v("outline", "presentation", "Presentation", Ue);
  const Ve = [
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
  ], Ae = v("outline", "upload", "Upload", Ve);
  function Ge() {
    const n = l((r) => r.nodes), d = l((r) => r.edges), p = we((r) => r.setValidation);
    s.useEffect(() => {
      const { incompleteNodeIds: r, issues: c } = je(n, d);
      p(r, c);
    }, [
      n,
      d,
      p
    ]);
  }
  const y = {
    padding: "5px 12px",
    borderRadius: 5,
    cursor: "pointer",
    fontSize: 13,
    border: "1px solid var(--border-primary)",
    background: "var(--bg-tertiary)",
    color: "var(--text-primary)"
  }, B = {
    ...y,
    background: "var(--accent-blue)",
    color: "var(--btn-primary-text)",
    borderColor: "var(--accent-blue)"
  }, P = {
    minWidth: 74,
    height: 26,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 8px",
    fontSize: 12.5,
    lineHeight: 1,
    boxSizing: "border-box"
  }, J = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    background: "var(--bg-tertiary)",
    border: "1px solid var(--border-primary)",
    borderRadius: 5,
    color: "var(--text-primary)",
    cursor: "pointer"
  }, qe = {
    fontSize: 13,
    padding: "4px 6px",
    borderRadius: 5,
    border: "1px solid var(--border-primary)",
    background: "var(--bg-tertiary)",
    color: "var(--text-primary)",
    maxWidth: 220
  }, Q = 500, Y = 2, Ke = (n) => Math.round(Math.pow(n / 100, Y) * Q), Xe = (n) => Math.round(Math.pow(n / Q, 1 / Y) * 100), Qe = Ce();
  function Ye() {
    const n = Me, d = Object.keys(X), p = {}, r = /* @__PURE__ */ new Set();
    for (const [u, j] of Object.entries(n)) {
      const h = j.filter((m) => d.includes(m));
      h.length > 0 && (p[u] = h);
      for (const m of h) r.add(m);
    }
    const c = d.filter((u) => !r.has(u));
    return c.length > 0 && (p.Other = c), p;
  }
  function Ze() {
    const n = a((e) => e.isRunning), d = a((e) => e.wasmReady), p = a((e) => e.networkStatus), r = a((e) => e.currentDemo), c = a((e) => e.demoDescription), u = a((e) => e.speed), j = a((e) => e.setSpeed), h = a((e) => e.start), m = a((e) => e.stop), Z = a((e) => e.singleStep), ee = a((e) => e.fullReset), te = a((e) => e.destroyNetwork), oe = a((e) => e.setWasmNetwork), C = a((e) => e.setCurrentDemo), S = l((e) => e.nodes), N = l((e) => e.colorCodedBits), ne = l((e) => e.setColorCodedBits), L = l((e) => e.reset), F = Ne((e) => e.clearData), W = T((e) => e.clearData), { initializeDemo: re } = Re(), [_, se] = s.useState(Xe(u)), [R, $] = s.useState(""), ae = s.useMemo(() => Ye(), []), [D, U] = s.useState("idle"), M = s.useRef(null), k = (e) => {
      U(e), M.current !== null && window.clearTimeout(M.current), M.current = window.setTimeout(() => U("idle"), 1500);
    }, [g, x] = s.useState("closed"), [E, I] = s.useState(""), [H, f] = s.useState(null);
    s.useEffect(() => {
      if (g === "closed") return;
      const e = (o) => {
        o.key === "Escape" && x("closed");
      };
      return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
    }, [
      g
    ]);
    const ie = (e) => {
      const o = parseInt(e.target.value);
      se(o), j(Ke(o));
    }, le = S.some((e) => {
      var _a;
      return (_a = e.data) == null ? void 0 : _a.canonicalId;
    }), V = d && le && !n, b = s.useRef(null), z = s.useRef(false), de = async (e) => {
      if (d) try {
        if (p !== "None") {
          n && m(), te(), L(), F(), W(), await new Promise((i) => setTimeout(i, 50));
          const o = await Ee();
          if (!o) {
            console.error("[Studio] Failed to create new WASM network");
            return;
          }
          oe(o);
        }
        await re(e);
      } catch (o) {
        console.error("[Studio] Demo init failed:", o);
      }
    }, ce = async (e) => {
      const o = e.target.value;
      if ($(o), !o) {
        b.current = null;
        return;
      }
      C(o, Qe[o] || ""), z.current = true, b.current = null;
      try {
        await de(o), b.current = new Set(l.getState().nodes.map((i) => i.id));
      } finally {
        z.current = false;
      }
    };
    s.useEffect(() => {
      if (z.current || !R || !b.current) return;
      const e = b.current;
      S.length === e.size && S.every((i) => e.has(i.id)) || ($(""), b.current = null, C("", ""));
    }, [
      S,
      R,
      C
    ]);
    const pe = async () => {
      const { nodes: e, edges: o } = l.getState(), { bitFieldParams: i } = T.getState(), O = q(e, o, i), G = De(`${window.location.origin}${window.location.pathname}`, O);
      try {
        await navigator.clipboard.writeText(G), console.log("[Studio] config URL copied to clipboard"), k("copied");
      } catch {
        k("error"), window.prompt("Studio config URL (copy):", G);
      }
    }, ue = () => {
      const { nodes: e, edges: o } = l.getState(), { bitFieldParams: i } = T.getState(), O = q(e, o, i);
      I(JSON.stringify(O, null, 2)), f(null), x("export");
    }, me = () => {
      I(""), f(null), x("import");
    }, ge = async () => {
      try {
        await navigator.clipboard.writeText(E), k("copied");
      } catch {
        k("error");
      }
    }, xe = () => {
      const e = E.trim();
      if (!e) {
        f("Paste a config JSON document first.");
        return;
      }
      try {
        JSON.parse(e);
      } catch (o) {
        f(`Invalid JSON: ${o instanceof Error ? o.message : String(o)}`);
        return;
      }
      window.location.hash = `#${encodeURIComponent(e)}`, window.location.reload();
    }, be = () => {
      m(), ee(), L(), F(), W();
    }, A = u === 0 ? "max" : (1e3 / u).toFixed(1);
    return t.jsxs(t.Fragment, {
      children: [
        t.jsxs("header", {
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
            t.jsx("span", {
              style: {
                fontWeight: 700,
                marginRight: 8
              },
              children: "DCC Studio"
            }),
            t.jsx("button", {
              id: n ? "stop-btn" : "start-btn",
              style: {
                ...n ? y : B,
                ...P
              },
              onClick: n ? m : h,
              disabled: n ? false : !V,
              "data-tooltip": n ? "Stop the simulation" : "Run the simulation",
              "data-tooltip-placement": "bottom",
              children: n ? "\u23F9 Stop" : "\u25B6 Run"
            }),
            t.jsx("button", {
              id: "step-btn",
              style: {
                ...y,
                ...P
              },
              onClick: Z,
              disabled: !V,
              children: "\u23ED Step"
            }),
            t.jsx("button", {
              id: "clear-btn",
              style: {
                ...y,
                ...P
              },
              onClick: be,
              disabled: n,
              children: "\u2326 Clear"
            }),
            t.jsx("span", {
              style: {
                marginLeft: 8,
                display: "inline-flex",
                alignItems: "center",
                color: "var(--text-secondary)"
              },
              "data-tooltip": "Speed control \u2014 drag to set the simulation step rate",
              "data-tooltip-placement": "bottom",
              "aria-label": "Speed control",
              children: t.jsx(We, {
                size: 20,
                stroke: 2,
                "aria-hidden": true
              })
            }),
            t.jsx("input", {
              type: "range",
              id: "studio-speed",
              className: "dcc-range",
              min: 0,
              max: 100,
              value: _,
              onChange: ie,
              "aria-label": "Speed control",
              "data-tooltip": `${u}ms (quadratic scale)`,
              "data-tooltip-placement": "bottom",
              style: {
                direction: "rtl",
                width: 120,
                "--range-fill": `${100 - _}%`
              }
            }),
            t.jsx("span", {
              style: {
                fontSize: 12,
                color: "var(--text-primary)",
                fontFamily: "ui-monospace, monospace",
                minWidth: 78,
                textAlign: "right"
              },
              children: A === "max" ? "max speed" : `${A} steps/s`
            }),
            t.jsx(w, {
              placement: "bottom",
              label: N ? "Bitfields: color-coded (click for black & white)" : "Bitfields: black & white (click for color)",
              children: t.jsx("button", {
                id: "studio-color-bits",
                type: "button",
                className: "tb-colorbits-btn",
                style: {
                  marginLeft: 8
                },
                "aria-pressed": N,
                "aria-label": "Toggle color-coded bitfields",
                onClick: () => ne(!N)
              })
            }),
            t.jsx("span", {
              style: {
                flex: 1
              }
            }),
            t.jsx("span", {
              style: {
                display: "inline-flex",
                alignItems: "center",
                color: "var(--text-secondary)"
              },
              "data-tooltip": "Load a demo network",
              "data-tooltip-placement": "bottom",
              "aria-label": "Load demo",
              children: t.jsx(He, {
                size: 20,
                stroke: 2,
                "aria-hidden": true
              })
            }),
            t.jsxs("select", {
              id: "studio-demo",
              value: R,
              onChange: ce,
              disabled: n || !d,
              "aria-label": "Load demo",
              style: qe,
              children: [
                t.jsx("option", {
                  value: "",
                  children: "-- Select Demo --"
                }),
                Object.entries(ae).map(([e, o]) => t.jsx("optgroup", {
                  label: e,
                  children: o.map((i) => t.jsx("option", {
                    value: i,
                    children: X[i].name
                  }, i))
                }, e))
              ]
            }),
            t.jsx(w, {
              label: "Copy a shareable link",
              placement: "bottom",
              children: t.jsx("button", {
                id: "export-btn",
                type: "button",
                className: "tb-icon-btn",
                style: J,
                onClick: pe,
                "aria-label": "Copy link",
                children: t.jsx($e, {
                  size: 22,
                  stroke: 2,
                  "aria-hidden": true
                })
              })
            }),
            t.jsx(w, {
              label: "Import config (JSON)",
              placement: "bottom",
              children: t.jsx("button", {
                id: "import-json-btn",
                type: "button",
                className: "tb-icon-btn",
                style: J,
                onClick: me,
                "aria-label": "Import",
                children: t.jsx(Ae, {
                  size: 22,
                  stroke: 2,
                  "aria-hidden": true
                })
              })
            }),
            t.jsx(w, {
              label: "Export config (JSON)",
              placement: "bottom",
              children: t.jsx("button", {
                id: "export-json-btn",
                type: "button",
                className: "tb-icon-btn",
                style: J,
                onClick: ue,
                "aria-label": "Export",
                children: t.jsx(Le, {
                  size: 22,
                  stroke: 2,
                  "aria-hidden": true
                })
              })
            }),
            D !== "idle" && t.jsx("span", {
              role: "status",
              style: {
                fontSize: 12,
                padding: "3px 8px",
                borderRadius: 4,
                background: D === "copied" ? "var(--accent-green)" : "var(--accent-red)",
                color: "var(--btn-primary-text)",
                fontWeight: 600
              },
              children: D === "copied" ? "Copied!" : "Copy failed"
            })
          ]
        }),
        r && c && c !== "No demo selected" && t.jsxs("div", {
          id: "studio-demo-description",
          style: {
            padding: "4px 12px",
            fontSize: 12,
            color: "var(--text-secondary)",
            background: "var(--bg-tertiary)",
            borderBottom: "1px solid var(--border-primary)"
          },
          children: [
            t.jsxs("span", {
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
            c
          ]
        }),
        g !== "closed" && fe.createPortal(t.jsx("div", {
          onClick: () => x("closed"),
          style: {
            position: "fixed",
            inset: 0,
            zIndex: 1e3,
            background: "rgba(0, 0, 0, 0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: t.jsxs("div", {
            onClick: (e) => e.stopPropagation(),
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
              t.jsxs("div", {
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
                  t.jsx("span", {
                    style: {
                      flex: 1
                    },
                    children: g === "export" ? "Export Studio Config (JSON)" : "Import Studio Config (JSON)"
                  }),
                  t.jsx("button", {
                    type: "button",
                    onClick: () => x("closed"),
                    style: {
                      ...y,
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
              t.jsx("textarea", {
                value: E,
                onChange: (e) => {
                  I(e.target.value), f(null);
                },
                readOnly: g === "export",
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
                placeholder: g === "import" ? "Paste a Studio config JSON document here\u2026" : void 0
              }),
              H && t.jsx("div", {
                style: {
                  marginTop: 10,
                  padding: "8px 10px",
                  background: "rgba(225, 87, 89, 0.16)",
                  border: "1px solid var(--accent-red)",
                  borderRadius: 5,
                  color: "var(--accent-red)",
                  fontSize: "0.85rem"
                },
                children: H
              }),
              t.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 10,
                  marginTop: 16
                },
                children: [
                  t.jsx("button", {
                    type: "button",
                    onClick: () => x("closed"),
                    style: y,
                    children: "Cancel"
                  }),
                  g === "export" ? t.jsx("button", {
                    type: "button",
                    onClick: ge,
                    style: B,
                    children: "Copy to Clipboard"
                  }) : t.jsx("button", {
                    type: "button",
                    onClick: xe,
                    style: B,
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
  const K = {
    padding: 0.2
  };
  function et() {
    const n = Se({
      includeHiddenNodes: true
    }), { applyElkDefault: d } = Ie(), { fitView: p } = ke(), r = s.useRef(false);
    return s.useEffect(() => {
      var _a;
      if (!n || l.getState().manualLayout || r.current) return;
      const c = ze(), u = !!(((_a = c == null ? void 0 : c.layout) == null ? void 0 : _a.nodes) && Object.keys(c.layout.nodes).length > 0);
      if (r.current = true, !u && l.getState().nodes.length > 0) {
        d();
        return;
      }
      l.getState().nodes.length > 0 && p(K);
    }, [
      n
    ]), Oe(), Te(), Pe(), Ge(), t.jsxs("div", {
      id: "container",
      children: [
        t.jsx(Ze, {}),
        t.jsx("div", {
          id: "main-content",
          children: t.jsx(Be, {
            fitViewOptions: K
          })
        })
      ]
    });
  }
  function tt() {
    return t.jsx(ve, {
      children: t.jsx(et, {})
    });
  }
  ye();
  he.createRoot(document.getElementById("root")).render(t.jsx(s.StrictMode, {
    children: t.jsx(tt, {})
  }));
});
