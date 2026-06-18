import { ay as f, aF as g, i as y, c as b, az as w, __tla as __tla_0 } from "./StackedSubplotPanel-DOZUNL8i.js";
import { j as i, R as x, b as v, t as E, r as l, o as k, q as S, s as j } from "./reactflow-C_yu4jb3.js";
import "./markdown-BhQy4Yqe.js";
import "./echarts-CxWuOr5q.js";
import { c as N, b as C, r as L, d as u, H as O, __tla as __tla_1 } from "./HelpDrawer-ClRiNlqH.js";
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
  function m(e) {
    if (e.nodes && e.nodes.length > 0) return e.nodes.map(F);
    const t = L(e.ui), s = [];
    let a = 0;
    const o = (c, p, h) => {
      s.push({
        id: c,
        type: p,
        position: {
          x: 0,
          y: a
        },
        data: {}
      }), a += h + 24;
    };
    t.demos && o("demos", "demos", 70), t.plotrange && o("plotrange", "plotrange", 90), t.controls && o("controls", "controls", 480), t.picker && o("picker", "picker", 210), t.stackedPanel && o("stackedPanel", "stackedPanel", 240), t.refpoints && o("refpoints", "refpoints", 100), t.cursor && o("cursor", "cursor", 72), t.bits && o("bits", "bits", 170);
    const r = a > 0 ? 340 : 0;
    let d = 0;
    if (t.subplots) for (const c of e.subplots ?? []) {
      const p = (g[c] ?? 1) >= 2 ? 320 : 240;
      s.push({
        id: `subplot-${c}`,
        type: "subplot",
        position: {
          x: r,
          y: d
        },
        data: {
          specs: [
            c
          ]
        },
        style: {
          width: 452,
          height: p
        },
        className: "studio-plot-node"
      }), d += p + 24;
    }
    return t.stacked && s.push({
      id: "stacked",
      type: "stacked",
      position: {
        x: r,
        y: d
      },
      data: {},
      style: {
        width: 460,
        height: 420
      },
      className: "studio-plot-node"
    }), s;
  }
  function P(e) {
    return e.edges ? e.edges.map((t, s) => ({
      id: t.id ?? `e-${t.source}-${t.target}-${s}`,
      source: t.source,
      target: t.target,
      animated: !!t.animated
    })) : [];
  }
  function A({ config: e }) {
    f();
    const t = v(), [s, a, o] = E(m(e)), n = l.useMemo(() => P(e), [
      e
    ]);
    l.useEffect(() => {
      N(e), a(m(e));
      const d = requestAnimationFrame(() => t.fitView({
        padding: 0.12
      }));
      return () => cancelAnimationFrame(d);
    }, [
      e,
      a,
      t
    ]);
    const r = !!e.interactive;
    return i.jsx("div", {
      style: {
        width: "100vw",
        height: "100vh"
      },
      children: i.jsx(k, {
        nodes: s,
        edges: n,
        nodeTypes: C,
        onNodesChange: o,
        fitView: true,
        fitViewOptions: {
          padding: 0.12
        },
        nodesDraggable: r,
        nodesConnectable: false,
        elementsSelectable: r,
        zoomOnScroll: r,
        zoomOnDoubleClick: r,
        zoomOnPinch: r,
        panOnDrag: r,
        panOnScroll: false,
        preventScrolling: r,
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
  function R({ config: e }) {
    return i.jsx(x, {
      children: i.jsx(A, {
        config: e
      })
    });
  }
  y();
  function T() {
    const [e, t] = l.useState(() => u() ?? {});
    return l.useEffect(() => {
      const s = (o) => {
        const n = o.data;
        !n || n.source !== "dcc-dashboard" || (n.type === "set-cursor" && typeof n.value == "number" ? w.getState().setScalarCursor(n.value) : n.type === "set-config" && n.config && t(n.config));
      }, a = () => {
        const o = u();
        o && t(o);
      };
      return window.addEventListener("message", s), window.addEventListener("hashchange", a), () => {
        window.removeEventListener("message", s), window.removeEventListener("hashchange", a);
      };
    }, []), i.jsxs(i.Fragment, {
      children: [
        i.jsx(R, {
          config: e
        }),
        i.jsx(O, {})
      ]
    });
  }
  b.createRoot(document.getElementById("root")).render(i.jsx(l.StrictMode, {
    children: i.jsx(T, {})
  }));
});
