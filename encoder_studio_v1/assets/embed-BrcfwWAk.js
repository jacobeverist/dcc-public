import { u as m, d as g, c as y, f as w, S as b, i as x, e as v, r as E, g as p, H as S, a as k, __tla as __tla_0 } from "./HelpDrawer-l_qoOkyo.js";
import { j as a, R as j, c as N, u as C, r as l, i as L, B as O, a as A } from "./reactflow-CFE1JzbO.js";
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
  function P(e) {
    const t = e.type === "subplot" || e.type === "stacked", s = {
      id: e.id,
      type: e.type,
      position: {
        ...e.position
      },
      data: {
        ...e.specs ? {
          specs: e.specs
        } : {},
        ...e.data ?? {}
      }
    };
    return (e.width != null || e.height != null || t) && (s.style = {
      width: e.width ?? (e.type === "stacked" ? 460 : 452),
      height: e.height ?? (e.type === "stacked" ? 420 : 240)
    }), t && (s.className = "studio-plot-node"), s;
  }
  function f(e) {
    if (e.nodes && e.nodes.length > 0) return e.nodes.map(P);
    const t = w(e.ui), s = [];
    let r = 0;
    const n = (d, c, h) => {
      s.push({
        id: d,
        type: c,
        position: {
          x: 0,
          y: r
        },
        data: {}
      }), r += h + 24;
    };
    t.demos && n("demos", "demos", 70), t.plotrange && n("plotrange", "plotrange", 90), t.controls && n("controls", "controls", 480), t.picker && n("picker", "picker", 210), t.stackedPanel && n("stackedPanel", "stackedPanel", 240), t.refpoints && n("refpoints", "refpoints", 100), t.cursor && n("cursor", "cursor", 72), t.bits && n("bits", "bits", 170);
    const i = r > 0 ? 340 : 0;
    let u = 0;
    if (t.subplots) for (const d of e.subplots ?? []) {
      const c = (b[d] ?? 1) >= 2 ? 320 : 240;
      s.push({
        id: `subplot-${d}`,
        type: "subplot",
        position: {
          x: i,
          y: u
        },
        data: {
          specs: [
            d
          ]
        },
        style: {
          width: 452,
          height: c
        },
        className: "studio-plot-node"
      }), u += c + 24;
    }
    return t.stacked && s.push({
      id: "stacked",
      type: "stacked",
      position: {
        x: i,
        y: u
      },
      data: {},
      style: {
        width: 460,
        height: 420
      },
      className: "studio-plot-node"
    }), s;
  }
  function F({ config: e }) {
    m();
    const t = N(), [s, r, n] = C(f(e));
    l.useEffect(() => {
      g(e), r(f(e));
      const i = requestAnimationFrame(() => t.fitView({
        padding: 0.12
      }));
      return () => cancelAnimationFrame(i);
    }, [
      e,
      r,
      t
    ]);
    const o = !!e.interactive;
    return a.jsx("div", {
      className: "studio-flow studio-embed",
      style: {
        width: "100vw",
        height: "100vh"
      },
      children: a.jsx(L, {
        nodes: s,
        edges: [],
        nodeTypes: y,
        onNodesChange: n,
        fitView: true,
        fitViewOptions: {
          padding: 0.12
        },
        nodesDraggable: o,
        nodesConnectable: false,
        elementsSelectable: o,
        zoomOnScroll: o,
        zoomOnDoubleClick: o,
        zoomOnPinch: o,
        panOnDrag: o,
        panOnScroll: false,
        preventScrolling: o,
        minZoom: 0.1,
        maxZoom: 4,
        proOptions: {
          hideAttribution: true
        },
        children: e.background && a.jsx(O, {
          variant: A.Dots,
          gap: 16,
          size: 1,
          color: "#777"
        })
      })
    });
  }
  function R({ config: e }) {
    return a.jsx(j, {
      children: a.jsx(F, {
        config: e
      })
    });
  }
  x();
  function T() {
    const [e, t] = l.useState(() => E());
    return l.useEffect(() => {
      let s = false;
      e == null && p().then((o) => {
        s || t(o);
      });
      const r = (o) => {
        const i = o.data;
        !i || i.source !== "dcc-dashboard" || (i.type === "set-cursor" && typeof i.value == "number" ? k.getState().setScalarCursor(i.value) : i.type === "set-config" && i.config && t(i.config));
      }, n = () => {
        p().then((o) => {
          s || t(o);
        });
      };
      return window.addEventListener("message", r), window.addEventListener("hashchange", n), () => {
        s = true, window.removeEventListener("message", r), window.removeEventListener("hashchange", n);
      };
    }, []), e == null ? null : a.jsxs(a.Fragment, {
      children: [
        a.jsx(R, {
          config: e
        }),
        a.jsx(S, {})
      ]
    });
  }
  v.createRoot(document.getElementById("root")).render(a.jsx(l.StrictMode, {
    children: a.jsx(T, {})
  }));
});
