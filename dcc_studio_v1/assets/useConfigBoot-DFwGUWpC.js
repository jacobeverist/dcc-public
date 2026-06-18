import { r as p } from "./reactflow-C_yu4jb3.js";
import { b as z, f as I, r as j, o as E, p as V, u as $, q as N, K as S, V as C, s as A, t as O, __tla as __tla_0 } from "./NetworkPanel-Ba8_oO-o.js";
let D;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const h = [
    "static",
    "partial",
    "sandbox"
  ];
  function w(s) {
    return typeof s == "object" && s !== null && !Array.isArray(s);
  }
  function T(s) {
    var _a, _b, _c, _d, _e, _f;
    const f = [], n = (t) => f.push(t);
    if (!w(s)) return {
      valid: false,
      errors: [
        "config must be an object"
      ]
    };
    typeof s.version != "string" && n('missing/invalid "version"');
    const r = s.networks;
    if (!w(r) || Object.keys(r).length === 0) return n('"networks" must be a non-empty object'), {
      valid: false,
      errors: f
    };
    const l = {};
    for (const [t, i] of Object.entries(r)) {
      if (!w(i)) {
        n(`network "${t}" must be an object`);
        continue;
      }
      const e = i;
      if (!Array.isArray(e.blocks)) {
        n(`network "${t}": "blocks" must be an array`);
        continue;
      }
      const a = /* @__PURE__ */ new Set();
      for (const o of [
        ...e.blocks ?? [],
        ...e.datasources ?? []
      ]) !o || typeof o.id != "string" ? n(`network "${t}": item missing string id`) : a.has(o.id) ? n(`network "${t}": duplicate id "${o.id}"`) : a.add(o.id);
      l[t] = a;
      for (const o of e.connections ?? []) a.has(o.source) || n(`network "${t}": connection source "${o.source}" not found`), a.has(o.target) || n(`network "${t}": connection target "${o.target}" not found`);
      for (const o of e.interfaces ?? []) a.has(o.source) || n(`network "${t}": interface source "${o.source}" not found`), a.has(o.target) || n(`network "${t}": interface target "${o.target}" not found`);
    }
    const k = (t, i) => !!l[t] && l[t].has(i);
    if (s.layout !== void 0) {
      const t = s.layout;
      if (!w(t == null ? void 0 : t.nodes)) n('"layout.nodes" must be an object');
      else for (const [i, e] of Object.entries(t.nodes)) k(e.networkId, e.blockId) || n(`layout node "${i}" \u2192 (${e.networkId}, ${e.blockId}) not found`);
    }
    if (s.visualization !== void 0) {
      const t = s.visualization, i = /* @__PURE__ */ new Set();
      for (const e of (t == null ? void 0 : t.vizNodes) ?? []) i.has(e.id) && n(`duplicate vizNode id "${e.id}"`), i.add(e.id), k((_a = e.target) == null ? void 0 : _a.networkId, (_b = e.target) == null ? void 0 : _b.blockId) || n(`vizNode "${e.id}" target (${(_c = e.target) == null ? void 0 : _c.networkId}, ${(_d = e.target) == null ? void 0 : _d.blockId}) not found`);
      for (const [e, a] of Object.entries((t == null ? void 0 : t.inline) ?? {})) for (const o of Object.keys(a)) k(e, o) || n(`visualization.inline (${e}, ${o}) not found`);
    }
    if (s.interactivity !== void 0) {
      const t = s.interactivity;
      (!t || !h.includes(t.mode)) && n(`interactivity.mode must be one of ${h.join(" | ")}`);
      const i = (_e = t == null ? void 0 : t.editable) == null ? void 0 : _e.params;
      if (w(i)) for (const a of Object.keys(i)) l[a] || n(`interactivity.editable.params references unknown network "${a}"`);
      const e = (_f = t == null ? void 0 : t.editable) == null ? void 0 : _f.networks;
      if (Array.isArray(e)) for (const a of e) l[a] || n(`interactivity.editable.networks references unknown network "${a}"`);
    }
    return {
      valid: f.length === 0,
      errors: f
    };
  }
  D = function() {
    const s = z((r) => r.wasmReady), { initializeFromCanonical: f } = I(), n = p.useRef(false);
    p.useEffect(() => {
      if (!s || n.current) return;
      const r = j();
      if (!r) return;
      n.current = true;
      const { valid: l, errors: k } = T(r);
      if (!l) {
        console.error("[Config Boot] invalid DashboardConfig:", k);
        return;
      }
      const t = E(r);
      if (t.length === 0) return;
      const [i] = t[0], e = V(r, i);
      e && (async () => {
        var _a, _b, _c, _d;
        if (!await f(e)) return;
        const o = (_b = (_a = r.visualization) == null ? void 0 : _a.inline) == null ? void 0 : _b[i];
        if (((_c = r.layout) == null ? void 0 : _c.nodes) || o) {
          const { nodes: b, setNodes: v } = $.getState();
          v(b.map((g) => {
            var _a2, _b2;
            const u = (_a2 = g.data) == null ? void 0 : _a2.canonicalId;
            let d = g;
            const c = u && r.layout ? N(r.layout, i, u) : void 0;
            return c && (d = {
              ...d,
              position: {
                ...c.position
              }
            }), o && u && ((_b2 = o[u]) == null ? void 0 : _b2.show) === false && (d = {
              ...d,
              data: {
                ...d.data,
                plotVisible: false,
                bitfieldVisible: false
              }
            }), d;
          }));
        }
        const m = (((_d = r.visualization) == null ? void 0 : _d.vizNodes) ?? []).filter((b) => b.target.networkId === i);
        if (m.length) {
          const { nodes: b, edges: v, setNodes: g, setEdges: u } = $.getState(), d = [
            ...b,
            ...m.map((c) => {
              var _a2, _b2;
              const y = S[c.kind] ?? "VizBitField";
              return {
                id: c.id,
                type: y,
                position: {
                  x: ((_a2 = c.position) == null ? void 0 : _a2.x) ?? 0,
                  y: ((_b2 = c.position) == null ? void 0 : _b2.y) ?? 0
                },
                style: {
                  width: y === "VizEncoder" ? 400 : 320,
                  height: y === "VizEncoder" ? 380 : y === "VizTimeSeries" ? 240 : 320
                },
                data: {
                  id: c.id,
                  label: C[y],
                  vizKind: c.kind,
                  targetNodeId: `node-${c.target.blockId}`
                }
              };
            })
          ];
          g(d), u(A(d, v));
        }
        O.getState().setInteractivity(r.interactivity ?? null);
      })();
    }, [
      s,
      f
    ]);
  };
});
export {
  __tla,
  D as u
};
