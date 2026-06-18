import { r as x, j as e, a as $, H as J, P as q, N as G } from "./reactflow-C_yu4jb3.js";
import { az as d, f as ae, e as Y, L as z, g as H, j as U, aG as w, E as re, b as oe, B as _, k as M, P as D, l as A, m as ie, n as le, o as ce, ad as de, an as F, am as k, a9 as Q, aa as ue, ae as O, ai as K, al as L, aD as pe, aB as Z, aC as me, aA as he, ah as W, aH as V, aI as xe, aJ as fe, __tla as __tla_0 } from "./StackedSubplotPanel-DOZUNL8i.js";
let Ze, Ye, $e, qe, Ge, Je, Qe;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function ee() {
    const a = x.useRef(null), [s, t] = x.useState({
      w: 0,
      h: 0
    });
    return x.useEffect(() => {
      const n = a.current;
      if (!n) return;
      const l = new ResizeObserver((o) => {
        const u = o[0].contentRect;
        t({
          w: Math.round(u.width),
          h: Math.round(u.height)
        });
      });
      return l.observe(n), () => l.disconnect();
    }, []), [
      a,
      s
    ];
  }
  const ge = x.memo(function({ index: s }) {
    const t = d((r) => r.lastData), n = d((r) => r.scalarCursor);
    if (!t || t.codes.length === 0) return null;
    const l = t.sub_encoders[s];
    if (!l) return null;
    const o = t.codes[ae(t.boundaries, n)] ?? [], [u, f] = l.bit_range, m = o.slice(u, f);
    if (m.length === 0) return null;
    const c = Y(s);
    return e.jsx("div", {
      className: "enc-mini-bits",
      children: m.map((r, i) => e.jsx("span", {
        className: "enc-mini-bit",
        style: {
          background: r === 1 ? c : "var(--viz-bits-off)",
          opacity: r === 1 ? 1 : 0.5
        }
      }, i))
    });
  }), ve = {
    "interval-fixed": "Interval: Fixed Weight",
    "interval-tapering": "Interval: Tapering Weight",
    "interval-random-cell": "Interval: Random Cells",
    "periodic-fixed": "Periodic: Fixed Weight",
    "periodic-cell": "Periodic: Multi-Scale Cells",
    "periodic-random-cell": "Periodic: Random Cells"
  }, be = [
    "interval-fixed",
    "interval-tapering",
    "interval-random-cell",
    "periodic-fixed",
    "periodic-cell",
    "periodic-random-cell"
  ];
  function te(a) {
    switch (a) {
      case "interval-fixed":
        return {
          w: 1
        };
      case "interval-tapering":
        return {
          w: 2
        };
      case "periodic-fixed":
        return {
          w: 1,
          period: 1
        };
      case "periodic-cell":
        return {
          w: 1,
          min_period: U,
          max_period: H,
          l_frac: z
        };
      case "periodic-random-cell":
        return {
          w: 1,
          min_period: U,
          max_period: H,
          l_frac: z,
          seed: 0,
          randomize_origins: true,
          randomize_periods: false,
          randomize_l_frac: false
        };
      case "interval-random-cell":
        return {
          w: 2,
          seed: 0,
          randomize_l: true
        };
      default:
        return {};
    }
  }
  function je(a, s = 13) {
    return {
      type: a,
      n: s,
      w: 1,
      lower_bound: 0,
      upper_bound: 1,
      ...te(a)
    };
  }
  const ye = {
    "interval-fixed": true,
    "interval-tapering": true,
    "interval-random-cell": true,
    "periodic-fixed": true,
    "periodic-cell": false,
    "periodic-random-cell": false
  }, Ne = {
    "interval-fixed": false,
    "interval-tapering": false,
    "interval-random-cell": false,
    "periodic-fixed": true,
    "periodic-cell": false,
    "periodic-random-cell": false
  }, _e = {
    "interval-fixed": false,
    "interval-tapering": false,
    "interval-random-cell": false,
    "periodic-fixed": false,
    "periodic-cell": true,
    "periodic-random-cell": true
  }, we = {
    "interval-fixed": false,
    "interval-tapering": false,
    "interval-random-cell": true,
    "periodic-fixed": false,
    "periodic-cell": false,
    "periodic-random-cell": true
  };
  function j({ label: a, value: s, min: t, max: n, step: l, integer: o, help: u, onChange: f }) {
    return e.jsxs("div", {
      className: "enc-field nodrag",
      children: [
        e.jsxs("label", {
          children: [
            a,
            u && e.jsx(w, {
              helpKey: u
            })
          ]
        }),
        e.jsx("input", {
          type: "range",
          min: t,
          max: n,
          step: l,
          value: s,
          onChange: (m) => f(o ? parseInt(m.target.value, 10) : parseFloat(m.target.value))
        }),
        e.jsx("input", {
          type: "number",
          min: t,
          max: n,
          step: l,
          value: s,
          onChange: (m) => {
            const c = o ? parseInt(m.target.value, 10) : parseFloat(m.target.value);
            Number.isFinite(c) && f(c);
          }
        })
      ]
    });
  }
  const Pe = x.memo(function({ index: s, encoder: t, onChange: n, onRemove: l, canRemove: o }) {
    const u = Y(s), f = Math.max(1, Math.floor(t.n / 2)), m = (r) => n({
      type: r,
      ...te(r)
    }), c = (r) => {
      const i = Math.min(t.w ?? 1, Math.max(1, Math.floor(r / 2)));
      n({
        n: r,
        w: i
      });
    };
    return e.jsxs("div", {
      className: "enc-card",
      style: {
        borderLeft: `4px solid ${u}`
      },
      children: [
        e.jsxs("div", {
          className: "enc-card-header",
          children: [
            e.jsx("span", {
              className: "enc-card-swatch",
              style: {
                background: u
              }
            }),
            e.jsx("select", {
              className: "enc-card-type nodrag",
              value: t.type,
              onChange: (r) => m(r.target.value),
              children: be.map((r) => e.jsx("option", {
                value: r,
                children: ve[r]
              }, r))
            }),
            e.jsx(w, {
              helpKey: `encoderType.${t.type}`
            }),
            e.jsx("button", {
              className: "enc-card-remove nodrag",
              onClick: l,
              disabled: !o,
              "data-tooltip": "Remove encoder",
              children: "\xD7"
            })
          ]
        }),
        e.jsx(j, {
          label: "n",
          value: t.n,
          min: oe,
          max: re,
          step: 1,
          integer: true,
          help: "param.n",
          onChange: c
        }),
        ye[t.type] && e.jsx(j, {
          label: "w",
          value: t.w ?? 1,
          min: 1,
          max: f,
          step: 1,
          integer: true,
          help: "param.w",
          onChange: (r) => n({
            w: r
          })
        }),
        e.jsx(j, {
          label: "lo",
          value: t.lower_bound,
          min: -5,
          max: 6,
          step: _,
          help: "param.offset",
          onChange: (r) => n({
            lower_bound: r
          })
        }),
        e.jsx(j, {
          label: "hi",
          value: t.upper_bound,
          min: -5,
          max: 6,
          step: _,
          help: "param.range",
          onChange: (r) => n({
            upper_bound: r
          })
        }),
        Ne[t.type] && e.jsx(j, {
          label: "period",
          value: t.period ?? 1,
          min: A,
          max: D,
          step: M,
          help: "param.period",
          onChange: (r) => n({
            period: r
          })
        }),
        _e[t.type] && e.jsxs(e.Fragment, {
          children: [
            e.jsx(j, {
              label: "minP",
              value: t.min_period ?? 0.2,
              min: A,
              max: D,
              step: M,
              help: "param.min_period",
              onChange: (r) => n({
                min_period: r
              })
            }),
            e.jsx(j, {
              label: "maxP",
              value: t.max_period ?? 0.6,
              min: A,
              max: D,
              step: M,
              help: "param.max_period",
              onChange: (r) => n({
                max_period: r
              })
            }),
            e.jsx(j, {
              label: "lFrac",
              value: t.l_frac ?? 0.4,
              min: ce,
              max: le,
              step: ie,
              help: "param.l_frac",
              onChange: (r) => n({
                l_frac: r
              })
            })
          ]
        }),
        we[t.type] && e.jsxs(e.Fragment, {
          children: [
            e.jsx(j, {
              label: "seed",
              value: t.seed ?? 0,
              min: 0,
              max: 9999,
              step: 1,
              integer: true,
              help: "param.seed",
              onChange: (r) => n({
                seed: r
              })
            }),
            t.type === "periodic-random-cell" && e.jsxs(e.Fragment, {
              children: [
                e.jsxs("label", {
                  className: "enc-field-check nodrag",
                  children: [
                    e.jsx("input", {
                      type: "checkbox",
                      checked: !!t.randomize_origins,
                      onChange: (r) => n({
                        randomize_origins: r.target.checked
                      })
                    }),
                    "randomize origins"
                  ]
                }),
                e.jsxs("label", {
                  className: "enc-field-check nodrag",
                  children: [
                    e.jsx("input", {
                      type: "checkbox",
                      checked: !!t.randomize_periods,
                      onChange: (r) => n({
                        randomize_periods: r.target.checked
                      })
                    }),
                    "randomize periods"
                  ]
                }),
                e.jsxs("label", {
                  className: "enc-field-check nodrag",
                  children: [
                    e.jsx("input", {
                      type: "checkbox",
                      checked: !!t.randomize_l_frac,
                      onChange: (r) => n({
                        randomize_l_frac: r.target.checked
                      })
                    }),
                    "randomize duty"
                  ]
                })
              ]
            }),
            t.type === "interval-random-cell" && e.jsxs("label", {
              className: "enc-field-check nodrag",
              children: [
                e.jsx("input", {
                  type: "checkbox",
                  checked: !!t.randomize_l,
                  onChange: (r) => n({
                    randomize_l: r.target.checked
                  })
                }),
                "randomize length"
              ]
            })
          ]
        }),
        e.jsx(ge, {
          index: s
        })
      ]
    });
  }), Ee = x.memo(function() {
    const s = d((o) => o.encoders), t = d((o) => o.addEncoder), n = d((o) => o.removeEncoder), l = d((o) => o.updateEncoder);
    return e.jsxs("div", {
      className: "enc-panel",
      style: {
        width: 280
      },
      children: [
        e.jsx("div", {
          className: "enc-panel-title",
          children: "Encoders"
        }),
        e.jsxs("div", {
          className: "enc-controls-row",
          children: [
            e.jsx("button", {
              className: "enc-add-btn nodrag",
              disabled: s.length >= de,
              onClick: () => t(je("interval-fixed")),
              children: "+ Add"
            }),
            e.jsx(w, {
              helpKey: "control.add"
            })
          ]
        }),
        s.length === 0 && e.jsx("div", {
          className: "enc-empty",
          children: "Add an encoder or pick a preset."
        }),
        s.map((o, u) => e.jsx(Pe, {
          index: u,
          encoder: o,
          onChange: (f) => l(u, f),
          onRemove: () => n(u),
          canRemove: s.length > 1
        }, u))
      ]
    });
  }), Se = F - k, B = (a) => (a - k) / Se * 100, ke = x.memo(function() {
    const s = d((p) => p.viewBounds), t = d((p) => p.setViewBounds), [n, l] = x.useState(s[0]), [o, u] = x.useState(s[1]), [f, m] = x.useState(s[0].toFixed(1)), [c, r] = x.useState(s[1].toFixed(1));
    x.useEffect(() => {
      l(s[0]), u(s[1]), m(s[0].toFixed(1)), r(s[1].toFixed(1));
    }, [
      s
    ]);
    const i = x.useRef(null), E = x.useRef(null), N = (p) => {
      E.current = p, i.current == null && (i.current = requestAnimationFrame(() => {
        i.current = null, E.current && t(E.current);
      }));
    };
    x.useEffect(() => () => {
      i.current != null && cancelAnimationFrame(i.current);
    }, []);
    const S = (p) => {
      const g = Math.min(p, o - _);
      l(g), m(g.toFixed(1)), N([
        g,
        o
      ]);
    }, I = (p) => {
      const g = Math.max(p, n + _);
      u(g), r(g.toFixed(1)), N([
        n,
        g
      ]);
    }, C = () => {
      const p = parseFloat(f);
      if (Number.isFinite(p)) {
        const g = Math.max(k, Math.min(p, o - _));
        l(g), m(g.toFixed(1)), t([
          g,
          o
        ]);
      } else m(n.toFixed(1));
    }, R = () => {
      const p = parseFloat(c);
      if (Number.isFinite(p)) {
        const g = Math.min(F, Math.max(p, n + _));
        u(g), r(g.toFixed(1)), t([
          n,
          g
        ]);
      } else r(o.toFixed(1));
    };
    return e.jsxs("div", {
      className: "enc-panel",
      style: {
        width: 280
      },
      children: [
        e.jsxs("div", {
          className: "enc-panel-title",
          children: [
            "Plot X-Range ",
            e.jsx(w, {
              helpKey: "control.viewBounds"
            })
          ]
        }),
        e.jsx("div", {
          className: "enc-controls-row",
          children: e.jsxs("div", {
            className: "dual-range nodrag",
            children: [
              e.jsx("input", {
                type: "text",
                inputMode: "decimal",
                className: "dual-range-val",
                value: f,
                "aria-label": "Plot x-range minimum",
                onChange: (p) => m(p.target.value),
                onBlur: C,
                onKeyDown: (p) => {
                  p.key === "Enter" && C();
                }
              }),
              e.jsxs("div", {
                className: "dual-range-track",
                children: [
                  e.jsx("div", {
                    className: "dual-range-fill",
                    style: {
                      left: `${B(n)}%`,
                      width: `${Math.max(0, B(o) - B(n))}%`
                    }
                  }),
                  e.jsx("input", {
                    type: "range",
                    min: k,
                    max: F,
                    step: _,
                    value: n,
                    "aria-label": "Plot x-range minimum slider",
                    onChange: (p) => S(parseFloat(p.target.value))
                  }),
                  e.jsx("input", {
                    type: "range",
                    min: k,
                    max: F,
                    step: _,
                    value: o,
                    "aria-label": "Plot x-range maximum slider",
                    onChange: (p) => I(parseFloat(p.target.value))
                  })
                ]
              }),
              e.jsx("input", {
                type: "text",
                inputMode: "decimal",
                className: "dual-range-val",
                value: c,
                "aria-label": "Plot x-range maximum",
                onChange: (p) => r(p.target.value),
                onBlur: R,
                onKeyDown: (p) => {
                  p.key === "Enter" && R();
                }
              })
            ]
          })
        })
      ]
    });
  }), Ce = [
    "bins",
    "per-bin",
    "similarity",
    "bits-by-data",
    "projected-similarity",
    "decomposition",
    "similarity-heatmap",
    "features"
  ], Re = x.memo(function() {
    const s = d((n) => n.subplots), t = d((n) => n.toggleSubplot);
    return e.jsxs("div", {
      className: "enc-panel",
      style: {
        width: 200
      },
      children: [
        e.jsx("div", {
          className: "enc-panel-title",
          children: "Subplot Nodes"
        }),
        e.jsx("div", {
          style: {
            display: "flex",
            flexWrap: "wrap",
            gap: 4
          },
          children: Ce.map((n) => {
            const l = s.includes(n), o = ue[n];
            return e.jsxs("span", {
              style: {
                display: "inline-flex",
                alignItems: "center"
              },
              children: [
                e.jsx("button", {
                  className: "nodrag",
                  onClick: () => t(n),
                  style: {
                    fontSize: 11,
                    padding: "2px 6px",
                    borderRadius: 4,
                    cursor: "pointer",
                    border: `2px solid ${(o == null ? void 0 : o.border) ?? "var(--text-tertiary)"}`,
                    background: l ? (o == null ? void 0 : o.bg) ?? "var(--accent-blue)" : "var(--bg-tertiary)",
                    color: "var(--text-primary)",
                    opacity: l ? 1 : 0.55
                  },
                  children: Q[n] ?? n
                }),
                e.jsx(w, {
                  helpKey: `subplot.${n}`
                })
              ]
            }, n);
          })
        })
      ]
    });
  }), Fe = x.memo(function() {
    const s = d((l) => l.applyPreset), [t, n] = x.useState(0);
    return e.jsxs("div", {
      className: "enc-panel",
      style: {
        width: 260
      },
      children: [
        e.jsxs("div", {
          className: "enc-panel-title",
          children: [
            "Demos ",
            e.jsx(w, {
              helpKey: "control.presets"
            })
          ]
        }),
        e.jsx("select", {
          className: "nodrag enc-select",
          value: t,
          onChange: (l) => {
            const o = parseInt(l.target.value, 10);
            n(o), O[o] && s(O[o]);
          },
          style: {
            width: "100%",
            boxSizing: "border-box"
          },
          children: O.map((l, o) => e.jsx("option", {
            value: o,
            children: l.label
          }, o))
        })
      ]
    });
  }), Ie = x.memo(function() {
    const s = d((h) => h.refPoints), [t, n] = d((h) => h.viewBounds), l = d((h) => h.scalarCursor), o = d((h) => h.addRefPoint), u = d((h) => h.updateRefPoint), f = d((h) => h.removeRefPoint), m = x.useRef(null), [c, r] = x.useState(null), i = (h) => K[h % K.length], E = (n - t) / 500 || 0.01, N = x.useRef(null), S = x.useRef(null), I = (h, v) => {
      S.current = v, N.current == null && (N.current = requestAnimationFrame(() => {
        N.current = null, S.current != null && u(h, S.current);
      }));
    };
    x.useEffect(() => () => {
      N.current != null && cancelAnimationFrame(N.current);
    }, []);
    const C = () => {
      var _a;
      if (s.length >= L) return;
      const h = s.length, v = Math.min(n, Math.max(t, l));
      o(v);
      const b = (_a = m.current) == null ? void 0 : _a.getBoundingClientRect();
      r({
        index: h,
        addedNew: true,
        original: v,
        x: (b == null ? void 0 : b.left) ?? 100,
        y: ((b == null ? void 0 : b.bottom) ?? 100) + 4
      });
    }, R = (h, v) => {
      const b = v.getBoundingClientRect();
      r({
        index: h,
        addedNew: false,
        original: s[h],
        x: b.left,
        y: b.bottom + 4
      });
    }, p = () => r(null), g = () => {
      c && (c.addedNew ? f(c.index) : u(c.index, c.original), r(null));
    }, T = c ? s[c.index] ?? c.original : 0;
    return e.jsxs("div", {
      className: "enc-panel",
      style: {
        width: 240
      },
      children: [
        e.jsxs("div", {
          className: "enc-panel-title",
          children: [
            "Reference Points ",
            e.jsx(w, {
              helpKey: "control.bitsPanel"
            })
          ]
        }),
        e.jsxs("div", {
          className: "enc-ref-controls nodrag",
          children: [
            s.map((h, v) => e.jsxs("span", {
              className: "enc-ref-chip",
              style: {
                borderColor: i(v),
                cursor: "pointer"
              },
              onClick: (b) => R(v, b.currentTarget),
              "data-tooltip": "Edit reference value",
              children: [
                e.jsx("span", {
                  className: "enc-bits-dot",
                  style: {
                    background: i(v)
                  }
                }),
                h.toFixed(2),
                e.jsx("button", {
                  onClick: (b) => {
                    b.stopPropagation(), f(v);
                  },
                  "data-tooltip": "Remove",
                  children: "\xD7"
                })
              ]
            }, v)),
            s.length < L && e.jsx("button", {
              ref: m,
              className: "enc-add-btn",
              onClick: C,
              children: "+ Add Value"
            }),
            s.length === 0 && e.jsx("span", {
              className: "enc-empty",
              style: {
                padding: 0
              },
              children: "none"
            })
          ]
        }),
        c && $.createPortal(e.jsx("div", {
          className: "enc-ref-popup-backdrop",
          onClick: p,
          children: e.jsxs("div", {
            className: "enc-ref-popup",
            style: {
              left: c.x,
              top: c.y
            },
            onClick: (h) => h.stopPropagation(),
            children: [
              e.jsxs("div", {
                className: "enc-ref-popup-row",
                children: [
                  e.jsx("input", {
                    type: "range",
                    min: t,
                    max: n,
                    step: E,
                    value: Math.min(n, Math.max(t, T)),
                    onChange: (h) => I(c.index, parseFloat(h.target.value)),
                    style: {
                      width: 160
                    }
                  }),
                  e.jsx("span", {
                    className: "enc-cursor-val",
                    children: T.toFixed(3)
                  })
                ]
              }),
              e.jsxs("div", {
                className: "enc-ref-popup-actions",
                children: [
                  e.jsx("button", {
                    className: "enc-add-btn",
                    onClick: p,
                    children: c.addedNew ? "Add" : "OK"
                  }),
                  e.jsx("button", {
                    className: "enc-ref-cancel",
                    onClick: g,
                    children: "Cancel"
                  })
                ]
              })
            ]
          })
        }), document.body)
      ]
    });
  }), P = e.jsx(J, {
    type: "target",
    position: q.Left,
    style: {
      background: "var(--btn-primary-bg)"
    }
  }), y = e.jsx(J, {
    type: "source",
    position: q.Right,
    style: {
      background: "var(--btn-primary-bg)"
    }
  }), ne = {
    borderColor: "transparent",
    borderWidth: 4
  }, se = {
    width: 14,
    height: 14,
    background: "transparent",
    border: "none"
  };
  function Me() {
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(Fe, {}),
        y
      ]
    });
  }
  function De() {
    return e.jsxs(e.Fragment, {
      children: [
        P,
        e.jsx(Ee, {}),
        y
      ]
    });
  }
  function Ae() {
    return e.jsxs(e.Fragment, {
      children: [
        P,
        e.jsx(ke, {}),
        y
      ]
    });
  }
  function Oe() {
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(he, {}),
        y
      ]
    });
  }
  function Be() {
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(Re, {}),
        y
      ]
    });
  }
  function Le() {
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(pe, {}),
        y
      ]
    });
  }
  function Te() {
    const a = d((i) => i.stackedOrder), s = d((i) => i.stackedActive), t = d((i) => i.lastData), n = d((i) => i.scalarCursor), l = d((i) => i.refPoints), o = d((i) => i.viewBounds), u = d((i) => i.subplotParams), f = x.useMemo(() => a.filter((i) => s.includes(i)), [
      a,
      s
    ]), [m, { w: c, h: r }] = ee();
    return e.jsxs("div", {
      className: "studio-subplot studio-subplot--fill",
      children: [
        e.jsx(G, {
          minWidth: 260,
          minHeight: 160,
          lineStyle: ne,
          handleStyle: se
        }),
        P,
        e.jsxs("div", {
          className: "studio-node-title",
          children: [
            "Stacked Chart (",
            f.length,
            ")"
          ]
        }),
        e.jsx("div", {
          ref: m,
          className: "studio-subplot-chart",
          children: f.length === 0 ? e.jsx("div", {
            className: "enc-empty",
            children: "Enable a subplot in the Stacked Subplots panel."
          }) : c > 0 && r > 0 && e.jsx(Z, {
            specs: f,
            data: t,
            cursor: n,
            refPoints: l,
            viewBounds: o,
            params: u,
            width: c,
            height: r
          })
        }),
        y
      ]
    });
  }
  function ze() {
    return e.jsxs(e.Fragment, {
      children: [
        P,
        e.jsx(me, {})
      ]
    });
  }
  function He() {
    return e.jsxs(e.Fragment, {
      children: [
        P,
        e.jsx(Ie, {}),
        y
      ]
    });
  }
  function Ue({ data: a }) {
    const s = a.specs ?? [
      "bins"
    ], t = d((i) => i.lastData), n = d((i) => i.scalarCursor), l = d((i) => i.refPoints), o = d((i) => i.viewBounds), u = d((i) => i.subplotParams), [f, { w: m, h: c }] = ee(), r = s.map((i) => Q[i] ?? i).join(" + ");
    return e.jsxs("div", {
      className: "studio-subplot studio-subplot--fill",
      children: [
        e.jsx(G, {
          minWidth: 240,
          minHeight: 140,
          lineStyle: ne,
          handleStyle: se
        }),
        P,
        e.jsx("div", {
          className: "studio-node-title",
          children: r
        }),
        e.jsx("div", {
          ref: f,
          className: "studio-subplot-chart",
          children: m > 0 && c > 0 && e.jsx(Z, {
            specs: s,
            data: t,
            cursor: n,
            refPoints: l,
            viewBounds: o,
            params: u,
            width: m,
            height: c
          })
        }),
        y
      ]
    });
  }
  let Ke;
  $e = {
    demos: Me,
    controls: De,
    plotrange: Ae,
    cursor: Oe,
    bits: ze,
    refpoints: He,
    subplot: Ue,
    stacked: Te,
    stackedPanel: Le,
    picker: Be
  };
  Ke = {
    demos: false,
    controls: false,
    plotrange: false,
    picker: false,
    refpoints: false,
    stackedPanel: false,
    cursor: true,
    bits: true,
    stacked: true,
    subplots: false
  };
  Je = function(a) {
    return {
      ...Ke,
      ...a ?? {}
    };
  };
  qe = function(a) {
    const s = {};
    a.encoders && (s.encoders = a.encoders.map((t) => ({
      ...t
    }))), a.viewBounds && (s.viewBounds = [
      ...a.viewBounds
    ]), typeof a.scalarCursor == "number" && (s.scalarCursor = a.scalarCursor), a.refPoints && (s.refPoints = a.refPoints.slice(0, L)), a.subplots && (s.subplots = [
      ...a.subplots
    ]), a.subplotParams && (s.subplotParams = {
      ...a.subplotParams
    }), a.stacked && (s.stackedOrder = a.stacked.order ?? [
      ...W
    ], s.stackedActive = a.stacked.active ?? a.stacked.order ?? [
      ...W
    ]), d.setState(s);
  };
  function X(a) {
    if (!a) return null;
    try {
      return JSON.parse(decodeURIComponent(a));
    } catch {
      try {
        return JSON.parse(a);
      } catch {
        return null;
      }
    }
  }
  Ge = function() {
    if (window.__ENCODER_STUDIO_CONFIG__) return window.__ENCODER_STUDIO_CONFIG__;
    const a = new URLSearchParams(window.location.search).get("config");
    return X(a) ?? X(window.location.hash ? window.location.hash.slice(1) : null);
  };
  function We(a) {
    var _a, _b, _c, _d;
    const s = typeof ((_a = a.style) == null ? void 0 : _a.width) == "number" ? a.style.width : void 0, t = typeof ((_b = a.style) == null ? void 0 : _b.height) == "number" ? a.style.height : void 0;
    return {
      w: ((_c = a.measured) == null ? void 0 : _c.width) ?? s,
      h: ((_d = a.measured) == null ? void 0 : _d.height) ?? t
    };
  }
  Ye = function(a, s) {
    const t = d.getState(), n = a.map((o) => {
      var _a;
      const u = o.type ?? "subplot", f = {
        id: o.id,
        type: u,
        position: {
          x: Math.round(o.position.x),
          y: Math.round(o.position.y)
        }
      };
      if (u === "subplot" || u === "stacked") {
        const { w: c, h: r } = We(o);
        c && (f.width = Math.round(c)), r && (f.height = Math.round(r));
      }
      const m = (_a = o.data) == null ? void 0 : _a.specs;
      return m && (f.specs = m), f;
    }), l = s.map((o) => ({
      id: o.id,
      source: o.source,
      target: o.target,
      animated: !!o.animated
    }));
    return {
      encoders: t.encoders.map((o) => ({
        ...o
      })),
      viewBounds: [
        ...t.viewBounds
      ],
      scalarCursor: t.scalarCursor,
      refPoints: [
        ...t.refPoints
      ],
      stacked: {
        order: [
          ...t.stackedOrder
        ],
        active: [
          ...t.stackedActive
        ]
      },
      subplotParams: {
        ...t.subplotParams
      },
      nodes: n,
      edges: l,
      interactive: false,
      background: false
    };
  };
  Qe = function(a) {
    const s = encodeURIComponent(JSON.stringify(a));
    return `${window.location.origin}/encoder-studio-embed.html#${s}`;
  };
  Ze = function() {
    const a = V((n) => n.helpKey), s = V((n) => n.close);
    if (x.useEffect(() => {
      if (!a) return;
      const n = (l) => {
        l.key === "Escape" && s();
      };
      return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
    }, [
      a,
      s
    ]), !a) return null;
    const t = xe[a];
    return t ? $.createPortal(e.jsx("div", {
      className: "help-backdrop",
      onClick: s,
      children: e.jsxs("div", {
        className: "help-drawer",
        onClick: (n) => n.stopPropagation(),
        children: [
          e.jsxs("div", {
            className: "help-drawer-head",
            children: [
              e.jsx("span", {
                className: "help-drawer-title",
                children: t.title
              }),
              e.jsx("button", {
                className: "help-drawer-close",
                onClick: s,
                "aria-label": "Close help",
                children: "\xD7"
              })
            ]
          }),
          e.jsxs("div", {
            className: "help-drawer-body",
            children: [
              e.jsxs("p", {
                className: "help-ai-disclaimer",
                role: "note",
                children: [
                  e.jsx("strong", {
                    children: "NOTE:"
                  }),
                  " This text is partially generated with AI from hand-written documentation and research notes."
                ]
              }),
              e.jsx("p", {
                className: "help-short",
                children: t.short
              }),
              e.jsx("div", {
                dangerouslySetInnerHTML: {
                  __html: fe(t.body)
                }
              })
            ]
          })
        ]
      })
    }), document.body) : null;
  };
});
export {
  Ze as H,
  __tla,
  Ye as a,
  $e as b,
  qe as c,
  Ge as d,
  Je as r,
  Qe as s
};
