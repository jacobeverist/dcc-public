import { r as f, j as e, a as q, H as G, P as J, N as Y } from "./reactflow-DDaPvTHK.js";
import { ay as d, f as re, e as Q, L as U, c as H, d as K, aG as w, E as oe, a as ie, B as _, g as M, P as O, i as L, j as le, k as ce, l as de, ab as ue, al as F, ak as C, a7 as Z, a8 as pe, ac as A, ag as W, aj as T, aC as me, aA as ee, aB as he, az as fe, af as V, aH as X, aI as xe, aJ as ge, __tla as __tla_0 } from "./StackedSubplotPanel-De_N8OhU.js";
let st, tt, Je, Qe, Ze, et, Ye, nt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function te() {
    const t = f.useRef(null), [a, n] = f.useState({
      w: 0,
      h: 0
    });
    return f.useEffect(() => {
      const s = t.current;
      if (!s) return;
      const l = new ResizeObserver((o) => {
        const u = o[0].contentRect;
        n({
          w: Math.round(u.width),
          h: Math.round(u.height)
        });
      });
      return l.observe(s), () => l.disconnect();
    }, []), [
      t,
      a
    ];
  }
  const ve = f.memo(function({ index: a }) {
    const n = d((r) => r.lastData), s = d((r) => r.scalarCursor);
    if (!n || n.codes.length === 0) return null;
    const l = n.sub_encoders[a];
    if (!l) return null;
    const o = n.codes[re(n.boundaries, s)] ?? [], [u, x] = l.bit_range, m = o.slice(u, x);
    if (m.length === 0) return null;
    const c = Q(a);
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
  }), be = {
    "interval-fixed": "Interval: Fixed Weight",
    "interval-tapering": "Interval: Tapering Weight",
    "interval-random-cell": "Interval: Random Cells",
    "periodic-fixed": "Periodic: Fixed Weight",
    "periodic-cell": "Periodic: Multi-Scale Cells",
    "periodic-random-cell": "Periodic: Random Cells"
  }, je = [
    "interval-fixed",
    "interval-tapering",
    "interval-random-cell",
    "periodic-fixed",
    "periodic-cell",
    "periodic-random-cell"
  ];
  function ne(t) {
    switch (t) {
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
          min_period: K,
          max_period: H,
          l_frac: U
        };
      case "periodic-random-cell":
        return {
          w: 1,
          min_period: K,
          max_period: H,
          l_frac: U,
          seed: 0,
          randomize_origins: true,
          randomize_periods: false,
          randomize_l_frac: false
        };
      case "interval-random-cell":
        return {
          w: 2,
          seed: 0,
          randomize_l: true,
          const_l: 0.1,
          max_l: 0.1
        };
      default:
        return {};
    }
  }
  function ye(t, a = 13) {
    return {
      type: t,
      n: a,
      w: 1,
      lower_bound: 0,
      upper_bound: 1,
      ...ne(t)
    };
  }
  const Ne = {
    "interval-fixed": true,
    "interval-tapering": true,
    "interval-random-cell": true,
    "periodic-fixed": true,
    "periodic-cell": false,
    "periodic-random-cell": false
  }, _e = {
    "interval-fixed": false,
    "interval-tapering": false,
    "interval-random-cell": false,
    "periodic-fixed": true,
    "periodic-cell": false,
    "periodic-random-cell": false
  }, we = {
    "interval-fixed": false,
    "interval-tapering": false,
    "interval-random-cell": false,
    "periodic-fixed": false,
    "periodic-cell": true,
    "periodic-random-cell": true
  }, Pe = {
    "interval-fixed": false,
    "interval-tapering": false,
    "interval-random-cell": true,
    "periodic-fixed": false,
    "periodic-cell": false,
    "periodic-random-cell": true
  };
  function b({ label: t, value: a, min: n, max: s, step: l, integer: o, help: u, onChange: x }) {
    return e.jsxs("div", {
      className: "enc-field nodrag",
      children: [
        e.jsxs("label", {
          children: [
            t,
            u && e.jsx(w, {
              helpKey: u
            })
          ]
        }),
        e.jsx("input", {
          type: "range",
          min: n,
          max: s,
          step: l,
          value: a,
          onChange: (m) => x(o ? parseInt(m.target.value, 10) : parseFloat(m.target.value))
        }),
        e.jsx("input", {
          type: "number",
          min: n,
          max: s,
          step: l,
          value: a,
          onChange: (m) => {
            const c = o ? parseInt(m.target.value, 10) : parseFloat(m.target.value);
            Number.isFinite(c) && x(c);
          }
        })
      ]
    });
  }
  const Ee = f.memo(function({ index: a, encoder: n, onChange: s, onRemove: l, canRemove: o }) {
    const u = Q(a), x = Math.max(1, Math.floor(n.n / 2)), m = (r) => s({
      type: r,
      ...ne(r)
    }), c = (r) => {
      const i = Math.min(n.w ?? 1, Math.max(1, Math.floor(r / 2)));
      s({
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
              value: n.type,
              onChange: (r) => m(r.target.value),
              children: je.map((r) => e.jsx("option", {
                value: r,
                children: be[r]
              }, r))
            }),
            e.jsx(w, {
              helpKey: `encoderType.${n.type}`
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
        e.jsx(b, {
          label: "n",
          value: n.n,
          min: ie,
          max: oe,
          step: 1,
          integer: true,
          help: "param.n",
          onChange: c
        }),
        Ne[n.type] && e.jsx(b, {
          label: "w",
          value: n.w ?? 1,
          min: 1,
          max: x,
          step: 1,
          integer: true,
          help: "param.w",
          onChange: (r) => s({
            w: r
          })
        }),
        e.jsx(b, {
          label: "lo",
          value: n.lower_bound,
          min: -5,
          max: 6,
          step: _,
          help: "param.offset",
          onChange: (r) => s({
            lower_bound: r
          })
        }),
        e.jsx(b, {
          label: "hi",
          value: n.upper_bound,
          min: -5,
          max: 6,
          step: _,
          help: "param.range",
          onChange: (r) => s({
            upper_bound: r
          })
        }),
        _e[n.type] && e.jsx(b, {
          label: "period",
          value: n.period ?? 1,
          min: L,
          max: O,
          step: M,
          help: "param.period",
          onChange: (r) => s({
            period: r
          })
        }),
        we[n.type] && e.jsxs(e.Fragment, {
          children: [
            e.jsx(b, {
              label: "minP",
              value: n.min_period ?? 0.2,
              min: L,
              max: O,
              step: M,
              help: "param.min_period",
              onChange: (r) => s({
                min_period: r
              })
            }),
            e.jsx(b, {
              label: "maxP",
              value: n.max_period ?? 0.6,
              min: L,
              max: O,
              step: M,
              help: "param.max_period",
              onChange: (r) => s({
                max_period: r
              })
            }),
            e.jsx(b, {
              label: "lFrac",
              value: n.l_frac ?? 0.4,
              min: de,
              max: ce,
              step: le,
              help: "param.l_frac",
              onChange: (r) => s({
                l_frac: r
              })
            })
          ]
        }),
        Pe[n.type] && e.jsxs(e.Fragment, {
          children: [
            e.jsx(b, {
              label: "seed",
              value: n.seed ?? 0,
              min: 0,
              max: 9999,
              step: 1,
              integer: true,
              help: "param.seed",
              onChange: (r) => s({
                seed: r
              })
            }),
            n.type === "periodic-random-cell" && e.jsxs(e.Fragment, {
              children: [
                e.jsxs("label", {
                  className: "enc-field-check nodrag",
                  children: [
                    e.jsx("input", {
                      type: "checkbox",
                      checked: !!n.randomize_origins,
                      onChange: (r) => s({
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
                      checked: !!n.randomize_periods,
                      onChange: (r) => s({
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
                      checked: !!n.randomize_l_frac,
                      onChange: (r) => s({
                        randomize_l_frac: r.target.checked
                      })
                    }),
                    "randomize duty"
                  ]
                })
              ]
            }),
            n.type === "interval-random-cell" && e.jsxs(e.Fragment, {
              children: [
                e.jsx(b, {
                  label: "l (bin size)",
                  value: n.const_l ?? 0.1,
                  min: 0.01,
                  max: Math.max(0.02, n.upper_bound - n.lower_bound),
                  step: 0.01,
                  help: "param.l",
                  onChange: (r) => s({
                    const_l: r,
                    max_l: r
                  })
                }),
                e.jsxs("label", {
                  className: "enc-field-check nodrag",
                  children: [
                    e.jsx("input", {
                      type: "checkbox",
                      checked: !!n.randomize_l,
                      onChange: (r) => s({
                        randomize_l: r.target.checked
                      })
                    }),
                    "randomize length"
                  ]
                })
              ]
            })
          ]
        }),
        e.jsx(ve, {
          index: a
        })
      ]
    });
  }), Se = f.memo(function() {
    const a = d((o) => o.encoders), n = d((o) => o.addEncoder), s = d((o) => o.removeEncoder), l = d((o) => o.updateEncoder);
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
              disabled: a.length >= ue,
              onClick: () => n(ye("interval-fixed")),
              children: "+ Add"
            }),
            e.jsx(w, {
              helpKey: "control.add"
            })
          ]
        }),
        a.length === 0 && e.jsx("div", {
          className: "enc-empty",
          children: "Add an encoder or pick a preset."
        }),
        a.map((o, u) => e.jsx(Ee, {
          index: u,
          encoder: o,
          onChange: (x) => l(u, x),
          onRemove: () => s(u),
          canRemove: a.length > 1
        }, u))
      ]
    });
  }), Ce = F - C, B = (t) => (t - C) / Ce * 100, ke = f.memo(function() {
    const a = d((p) => p.viewBounds), n = d((p) => p.setViewBounds), [s, l] = f.useState(a[0]), [o, u] = f.useState(a[1]), [x, m] = f.useState(a[0].toFixed(1)), [c, r] = f.useState(a[1].toFixed(1));
    f.useEffect(() => {
      l(a[0]), u(a[1]), m(a[0].toFixed(1)), r(a[1].toFixed(1));
    }, [
      a
    ]);
    const i = f.useRef(null), E = f.useRef(null), N = (p) => {
      E.current = p, i.current == null && (i.current = requestAnimationFrame(() => {
        i.current = null, E.current && n(E.current);
      }));
    };
    f.useEffect(() => () => {
      i.current != null && cancelAnimationFrame(i.current);
    }, []);
    const S = (p) => {
      const g = Math.min(p, o - _);
      l(g), m(g.toFixed(1)), N([
        g,
        o
      ]);
    }, D = (p) => {
      const g = Math.max(p, s + _);
      u(g), r(g.toFixed(1)), N([
        s,
        g
      ]);
    }, k = () => {
      const p = parseFloat(x);
      if (Number.isFinite(p)) {
        const g = Math.max(C, Math.min(p, o - _));
        l(g), m(g.toFixed(1)), n([
          g,
          o
        ]);
      } else m(s.toFixed(1));
    }, R = () => {
      const p = parseFloat(c);
      if (Number.isFinite(p)) {
        const g = Math.min(F, Math.max(p, s + _));
        u(g), r(g.toFixed(1)), n([
          s,
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
                value: x,
                "aria-label": "Plot x-range minimum",
                onChange: (p) => m(p.target.value),
                onBlur: k,
                onKeyDown: (p) => {
                  p.key === "Enter" && k();
                }
              }),
              e.jsxs("div", {
                className: "dual-range-track",
                children: [
                  e.jsx("div", {
                    className: "dual-range-fill",
                    style: {
                      left: `${B(s)}%`,
                      width: `${Math.max(0, B(o) - B(s))}%`
                    }
                  }),
                  e.jsx("input", {
                    type: "range",
                    min: C,
                    max: F,
                    step: _,
                    value: s,
                    "aria-label": "Plot x-range minimum slider",
                    onChange: (p) => S(parseFloat(p.target.value))
                  }),
                  e.jsx("input", {
                    type: "range",
                    min: C,
                    max: F,
                    step: _,
                    value: o,
                    "aria-label": "Plot x-range maximum slider",
                    onChange: (p) => D(parseFloat(p.target.value))
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
  }), Re = [
    "bins",
    "per-bin",
    "similarity",
    "bits-by-data",
    "projected-similarity",
    "decomposition",
    "similarity-heatmap",
    "features"
  ], Fe = f.memo(function() {
    const a = d((s) => s.subplots), n = d((s) => s.toggleSubplot);
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
          children: Re.map((s) => {
            const l = a.includes(s), o = pe[s];
            return e.jsxs("span", {
              style: {
                display: "inline-flex",
                alignItems: "center"
              },
              children: [
                e.jsx("button", {
                  className: "nodrag",
                  onClick: () => n(s),
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
                  children: Z[s] ?? s
                }),
                e.jsx(w, {
                  helpKey: `subplot.${s}`
                })
              ]
            }, s);
          })
        })
      ]
    });
  }), Ie = f.memo(function() {
    const a = d((l) => l.applyPreset), [n, s] = f.useState(0);
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
          value: n,
          onChange: (l) => {
            const o = parseInt(l.target.value, 10);
            s(o), A[o] && a(A[o]);
          },
          style: {
            width: "100%",
            boxSizing: "border-box"
          },
          children: A.map((l, o) => e.jsx("option", {
            value: o,
            children: l.label
          }, o))
        })
      ]
    });
  }), De = f.memo(function() {
    const a = d((h) => h.refPoints), [n, s] = d((h) => h.viewBounds), l = d((h) => h.scalarCursor), o = d((h) => h.addRefPoint), u = d((h) => h.updateRefPoint), x = d((h) => h.removeRefPoint), m = f.useRef(null), [c, r] = f.useState(null), i = (h) => W[h % W.length], E = (s - n) / 500 || 0.01, N = f.useRef(null), S = f.useRef(null), D = (h, v) => {
      S.current = v, N.current == null && (N.current = requestAnimationFrame(() => {
        N.current = null, S.current != null && u(h, S.current);
      }));
    };
    f.useEffect(() => () => {
      N.current != null && cancelAnimationFrame(N.current);
    }, []);
    const k = () => {
      var _a;
      if (a.length >= T) return;
      const h = a.length, v = Math.min(s, Math.max(n, l));
      o(v);
      const j = (_a = m.current) == null ? void 0 : _a.getBoundingClientRect();
      r({
        index: h,
        addedNew: true,
        original: v,
        x: (j == null ? void 0 : j.left) ?? 100,
        y: ((j == null ? void 0 : j.bottom) ?? 100) + 4
      });
    }, R = (h, v) => {
      const j = v.getBoundingClientRect();
      r({
        index: h,
        addedNew: false,
        original: a[h],
        x: j.left,
        y: j.bottom + 4
      });
    }, p = () => r(null), g = () => {
      c && (c.addedNew ? x(c.index) : u(c.index, c.original), r(null));
    }, z = c ? a[c.index] ?? c.original : 0;
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
            a.map((h, v) => e.jsxs("span", {
              className: "enc-ref-chip",
              style: {
                borderColor: i(v),
                cursor: "pointer"
              },
              onClick: (j) => R(v, j.currentTarget),
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
                  onClick: (j) => {
                    j.stopPropagation(), x(v);
                  },
                  "data-tooltip": "Remove",
                  children: "\xD7"
                })
              ]
            }, v)),
            a.length < T && e.jsx("button", {
              ref: m,
              className: "enc-add-btn",
              onClick: k,
              children: "+ Add Value"
            }),
            a.length === 0 && e.jsx("span", {
              className: "enc-empty",
              style: {
                padding: 0
              },
              children: "none"
            })
          ]
        }),
        c && q.createPortal(e.jsx("div", {
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
                    min: n,
                    max: s,
                    step: E,
                    value: Math.min(s, Math.max(n, z)),
                    onChange: (h) => D(c.index, parseFloat(h.target.value)),
                    style: {
                      width: 160
                    }
                  }),
                  e.jsx("span", {
                    className: "enc-cursor-val",
                    children: z.toFixed(3)
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
  }), P = e.jsx(G, {
    type: "target",
    position: J.Left,
    style: {
      background: "var(--btn-primary-bg)"
    }
  }), y = e.jsx(G, {
    type: "source",
    position: J.Right,
    style: {
      background: "var(--btn-primary-bg)"
    }
  }), se = {
    borderColor: "transparent",
    borderWidth: 4
  }, ae = {
    width: 14,
    height: 14,
    background: "transparent",
    border: "none"
  };
  function Me() {
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(Ie, {}),
        y
      ]
    });
  }
  function Oe() {
    return e.jsxs(e.Fragment, {
      children: [
        P,
        e.jsx(Se, {}),
        y
      ]
    });
  }
  function Le() {
    return e.jsxs(e.Fragment, {
      children: [
        P,
        e.jsx(ke, {}),
        y
      ]
    });
  }
  function Ae() {
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(fe, {}),
        y
      ]
    });
  }
  function Be() {
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(Fe, {}),
        y
      ]
    });
  }
  function Te() {
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(me, {}),
        y
      ]
    });
  }
  function ze() {
    const t = d((i) => i.stackedOrder), a = d((i) => i.stackedActive), n = d((i) => i.lastData), s = d((i) => i.scalarCursor), l = d((i) => i.refPoints), o = d((i) => i.viewBounds), u = d((i) => i.subplotParams), x = f.useMemo(() => t.filter((i) => a.includes(i)), [
      t,
      a
    ]), [m, { w: c, h: r }] = te();
    return e.jsxs("div", {
      className: "studio-subplot studio-subplot--fill",
      children: [
        e.jsx(Y, {
          minWidth: 260,
          minHeight: 160,
          lineStyle: se,
          handleStyle: ae
        }),
        P,
        e.jsxs("div", {
          className: "studio-node-title",
          children: [
            "Stacked Chart (",
            x.length,
            ")"
          ]
        }),
        e.jsx("div", {
          ref: m,
          className: "studio-subplot-chart",
          children: x.length === 0 ? e.jsx("div", {
            className: "enc-empty",
            children: "Enable a subplot in the Stacked Subplots panel."
          }) : c > 0 && r > 0 && e.jsx(ee, {
            specs: x,
            data: n,
            cursor: s,
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
  function Ue() {
    return e.jsxs(e.Fragment, {
      children: [
        P,
        e.jsx(he, {})
      ]
    });
  }
  function He() {
    return e.jsxs(e.Fragment, {
      children: [
        P,
        e.jsx(De, {}),
        y
      ]
    });
  }
  function Ke({ data: t }) {
    const a = t.specs ?? [
      "bins"
    ], n = d((i) => i.lastData), s = d((i) => i.scalarCursor), l = d((i) => i.refPoints), o = d((i) => i.viewBounds), u = d((i) => i.subplotParams), [x, { w: m, h: c }] = te(), r = a.map((i) => Z[i] ?? i).join(" + ");
    return e.jsxs("div", {
      className: "studio-subplot studio-subplot--fill",
      children: [
        e.jsx(Y, {
          minWidth: 240,
          minHeight: 140,
          lineStyle: se,
          handleStyle: ae
        }),
        P,
        e.jsx("div", {
          className: "studio-node-title",
          children: r
        }),
        e.jsx("div", {
          ref: x,
          className: "studio-subplot-chart",
          children: m > 0 && c > 0 && e.jsx(ee, {
            specs: a,
            data: n,
            cursor: s,
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
  let We;
  Je = {
    demos: Me,
    controls: Oe,
    plotrange: Le,
    cursor: Ae,
    bits: Ue,
    refpoints: He,
    subplot: Ke,
    stacked: ze,
    stackedPanel: Te,
    picker: Be
  };
  We = {
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
  Ye = function(t) {
    return {
      ...We,
      ...t ?? {}
    };
  };
  Qe = function(t) {
    const a = {};
    t.encoders && (a.encoders = t.encoders.map((n) => ({
      ...n
    }))), t.viewBounds && (a.viewBounds = [
      ...t.viewBounds
    ]), typeof t.scalarCursor == "number" && (a.scalarCursor = t.scalarCursor), t.refPoints && (a.refPoints = t.refPoints.slice(0, T)), t.subplots && (a.subplots = [
      ...t.subplots
    ]), t.subplotParams && (a.subplotParams = {
      ...t.subplotParams
    }), t.stacked && (a.stackedOrder = t.stacked.order ?? [
      ...V
    ], a.stackedActive = t.stacked.active ?? t.stacked.order ?? [
      ...V
    ]), d.setState(a);
  };
  function I(t) {
    if (!t) return null;
    try {
      return JSON.parse(decodeURIComponent(t));
    } catch {
      try {
        return JSON.parse(t);
      } catch {
        return null;
      }
    }
  }
  Ze = function() {
    if (window.__ENCODER_STUDIO_CONFIG__) return window.__ENCODER_STUDIO_CONFIG__;
    const t = new URLSearchParams(window.location.search).get("config");
    return I(t) ?? I(window.location.hash ? window.location.hash.slice(1) : null);
  };
  function Ve() {
    var _a, _b;
    const t = (_b = (_a = document.querySelector('meta[name="encoder-studio-config"]')) == null ? void 0 : _a.getAttribute("content")) == null ? void 0 : _b.trim();
    if (!t) return null;
    try {
      return new URL(t, document.baseURI).href;
    } catch {
      return t;
    }
  }
  function Xe(t) {
    return /^(https?:\/\/|\.?\/)/.test(t) || t.toLowerCase().endsWith(".json");
  }
  async function $(t) {
    try {
      const a = await fetch(t, {
        cache: "no-cache"
      });
      return a.ok ? await a.json() : null;
    } catch {
      return null;
    }
  }
  et = async function() {
    if (window.__ENCODER_STUDIO_CONFIG__) return window.__ENCODER_STUDIO_CONFIG__;
    const t = new URLSearchParams(window.location.search).get("config");
    if (t) {
      if (Xe(t)) {
        const l = await $(t);
        if (l) return l;
      }
      const s = I(t);
      if (s) return s;
    }
    const a = I(window.location.hash ? window.location.hash.slice(1) : null);
    if (a) return a;
    const n = Ve();
    if (n) {
      const s = await $(n);
      if (s) return s;
    }
    return {};
  };
  function $e(t) {
    var _a, _b, _c, _d;
    const a = typeof ((_a = t.style) == null ? void 0 : _a.width) == "number" ? t.style.width : void 0, n = typeof ((_b = t.style) == null ? void 0 : _b.height) == "number" ? t.style.height : void 0;
    return {
      w: ((_c = t.measured) == null ? void 0 : _c.width) ?? a,
      h: ((_d = t.measured) == null ? void 0 : _d.height) ?? n
    };
  }
  tt = function(t, a) {
    const n = d.getState(), s = t.map((o) => {
      var _a;
      const u = o.type ?? "subplot", x = {
        id: o.id,
        type: u,
        position: {
          x: Math.round(o.position.x),
          y: Math.round(o.position.y)
        }
      };
      if (u === "subplot" || u === "stacked") {
        const { w: c, h: r } = $e(o);
        c && (x.width = Math.round(c)), r && (x.height = Math.round(r));
      }
      const m = (_a = o.data) == null ? void 0 : _a.specs;
      return m && (x.specs = m), x;
    }), l = a.map((o) => ({
      id: o.id,
      source: o.source,
      target: o.target,
      animated: !!o.animated
    }));
    return {
      encoders: n.encoders.map((o) => ({
        ...o
      })),
      viewBounds: [
        ...n.viewBounds
      ],
      scalarCursor: n.scalarCursor,
      refPoints: [
        ...n.refPoints
      ],
      stacked: {
        order: [
          ...n.stackedOrder
        ],
        active: [
          ...n.stackedActive
        ]
      },
      subplotParams: {
        ...n.subplotParams
      },
      nodes: s,
      edges: l,
      interactive: false,
      background: false
    };
  };
  nt = function(t) {
    const a = encodeURIComponent(JSON.stringify(t));
    return `${window.location.origin}/encoder-studio-embed.html#${a}`;
  };
  st = function() {
    const t = X((s) => s.helpKey), a = X((s) => s.close);
    if (f.useEffect(() => {
      if (!t) return;
      const s = (l) => {
        l.key === "Escape" && a();
      };
      return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
    }, [
      t,
      a
    ]), !t) return null;
    const n = xe[t];
    return n ? q.createPortal(e.jsx("div", {
      className: "help-backdrop",
      onClick: a,
      children: e.jsxs("div", {
        className: "help-drawer",
        onClick: (s) => s.stopPropagation(),
        children: [
          e.jsxs("div", {
            className: "help-drawer-head",
            children: [
              e.jsx("span", {
                className: "help-drawer-title",
                children: n.title
              }),
              e.jsx("button", {
                className: "help-drawer-close",
                onClick: a,
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
                children: n.short
              }),
              e.jsx("div", {
                dangerouslySetInnerHTML: {
                  __html: ge(n.body)
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
  st as H,
  __tla,
  tt as a,
  Je as b,
  Qe as c,
  Ze as d,
  et as e,
  Ye as r,
  nt as s
};
