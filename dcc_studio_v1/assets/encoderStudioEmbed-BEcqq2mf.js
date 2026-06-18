import { ax as h, aF as g, a4 as y, aE as b, ay as w, __tla as __tla_0 } from "./StackedSubplotPanel-De_N8OhU.js";
import { j as i, R as x, f as v, t as E, r as l, n as k, p as S, q as j } from "./reactflow-DDaPvTHK.js";
import "./markdown-BhQy4Yqe.js";
import "./echarts-CxWuOr5q.js";
import { c as N, b as C, r as L, d as O, e as p, H as A, __tla as __tla_1 } from "./HelpDrawer-Dyzq8NaB.js";
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
  function F(e) {
    const t = e.type === "subplot" || e.type === "stacked", o = {
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
    return (e.width != null || e.height != null || t) && (o.style = {
      width: e.width ?? (e.type === "stacked" ? 460 : 452),
      height: e.height ?? (e.type === "stacked" ? 420 : 240)
    }), t && (o.className = "studio-plot-node"), o;
  }
  function f(e) {
    if (e.nodes && e.nodes.length > 0) return e.nodes.map(F);
    const t = L(e.ui), o = [];
    let a = 0;
    const n = (c, u, m) => {
      o.push({
        id: c,
        type: u,
        position: {
          x: 0,
          y: a
        },
        data: {}
      }), a += m + 24;
    };
    t.demos && n("demos", "demos", 70), t.plotrange && n("plotrange", "plotrange", 90), t.controls && n("controls", "controls", 480), t.picker && n("picker", "picker", 210), t.stackedPanel && n("stackedPanel", "stackedPanel", 240), t.refpoints && n("refpoints", "refpoints", 100), t.cursor && n("cursor", "cursor", 72), t.bits && n("bits", "bits", 170);
    const s = a > 0 ? 340 : 0;
    let d = 0;
    if (t.subplots) for (const c of e.subplots ?? []) {
      const u = (g[c] ?? 1) >= 2 ? 320 : 240;
      o.push({
        id: `subplot-${c}`,
        type: "subplot",
        position: {
          x: s,
          y: d
        },
        data: {
          specs: [
            c
          ]
        },
        style: {
          width: 452,
          height: u
        },
        className: "studio-plot-node"
      }), d += u + 24;
    }
    return t.stacked && o.push({
      id: "stacked",
      type: "stacked",
      position: {
        x: s,
        y: d
      },
      data: {},
      style: {
        width: 460,
        height: 420
      },
      className: "studio-plot-node"
    }), o;
  }
  function P(e) {
    return e.edges ? e.edges.map((t, o) => ({
      id: t.id ?? `e-${t.source}-${t.target}-${o}`,
      source: t.source,
      target: t.target,
      animated: !!t.animated
    })) : [];
  }
  function R({ config: e }) {
    h();
    const t = v(), [o, a, n] = E(f(e)), r = l.useMemo(() => P(e), [
      e
    ]);
    l.useEffect(() => {
      N(e), a(f(e));
      const d = requestAnimationFrame(() => t.fitView({
        padding: 0.12
      }));
      return () => cancelAnimationFrame(d);
    }, [
      e,
      a,
      t
    ]);
    const s = !!e.interactive;
    return i.jsx("div", {
      className: "studio-flow studio-embed",
      style: {
        width: "100vw",
        height: "100vh"
      },
      children: i.jsx(k, {
        nodes: o,
        edges: r,
        nodeTypes: C,
        onNodesChange: n,
        fitView: true,
        fitViewOptions: {
          padding: 0.12
        },
        nodesDraggable: s,
        nodesConnectable: false,
        elementsSelectable: s,
        zoomOnScroll: s,
        zoomOnDoubleClick: s,
        zoomOnPinch: s,
        panOnDrag: s,
        panOnScroll: false,
        preventScrolling: s,
        minZoom: 0.1,
        maxZoom: 4,
        proOptions: {
          hideAttribution: true
        },
        children: e.background && i.jsx(S, {
          variant: j.Dots,
          gap: 16,
          size: 1,
          color: "#777"
        })
      })
    });
  }
  function T({ config: e }) {
    return i.jsx(x, {
      children: i.jsx(R, {
        config: e
      })
    });
  }
  y();
  function D() {
    const [e, t] = l.useState(() => O());
    return l.useEffect(() => {
      let o = false;
      e == null && p().then((r) => {
        o || t(r);
      });
      const a = (r) => {
        const s = r.data;
        !s || s.source !== "dcc-dashboard" || (s.type === "set-cursor" && typeof s.value == "number" ? w.getState().setScalarCursor(s.value) : s.type === "set-config" && s.config && t(s.config));
      }, n = () => {
        p().then((r) => {
          o || t(r);
        });
      };
      return window.addEventListener("message", a), window.addEventListener("hashchange", n), () => {
        o = true, window.removeEventListener("message", a), window.removeEventListener("hashchange", n);
      };
    }, []), e == null ? null : i.jsxs(i.Fragment, {
      children: [
        i.jsx(T, {
          config: e
        }),
        i.jsx(A, {})
      ]
    });
  }
  b.createRoot(document.getElementById("root")).render(i.jsx(l.StrictMode, {
    children: i.jsx(D, {})
  }));
});
