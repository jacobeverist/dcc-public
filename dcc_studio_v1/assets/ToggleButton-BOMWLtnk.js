import { $ as G, r as f } from "./reactflow-C_yu4jb3.js";
import { a as it, __tla as __tla_0 } from "./StackedSubplotPanel-DOZUNL8i.js";
let hn;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const $e = typeof document < "u" ? G.useLayoutEffect : () => {
  };
  var se;
  const at = (se = G.useInsertionEffect) !== null && se !== void 0 ? se : $e;
  function K(e) {
    const t = f.useRef(null);
    return at(() => {
      t.current = e;
    }, [
      e
    ]), f.useCallback((...n) => {
      const r = t.current;
      return r == null ? void 0 : r(...n);
    }, []);
  }
  let ue = /* @__PURE__ */ new Map();
  typeof FinalizationRegistry < "u" && new FinalizationRegistry((e) => {
    ue.delete(e);
  });
  function st(e, t) {
    if (e === t) return e;
    let n = ue.get(e);
    if (n) return n.forEach((o) => o.current = t), t;
    let r = ue.get(t);
    return r ? (r.forEach((o) => o.current = e), e) : t;
  }
  function ye(...e) {
    return (...t) => {
      for (let n of e) typeof n == "function" && n(...t);
    };
  }
  const L = (e) => {
    var t;
    return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
  }, F = (e) => e && "window" in e && e.window === e ? e : L(e).defaultView || window;
  function lt(e) {
    return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
  }
  function ut(e) {
    return lt(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
  }
  let ct = false;
  function ge() {
    return ct;
  }
  function k(e, t) {
    if (!ge()) return t && e ? e.contains(t) : false;
    if (!e || !t) return false;
    let n = t;
    for (; n !== null; ) {
      if (n === e) return true;
      n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : ut(n) ? n = n.host : n = n.parentNode;
    }
    return false;
  }
  const X = (e = document) => {
    var t;
    if (!ge()) return e.activeElement;
    let n = e.activeElement;
    for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
    return n;
  };
  function x(e) {
    return ge() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
  }
  function I(...e) {
    let t = {
      ...e[0]
    };
    for (let n = 1; n < e.length; n++) {
      let r = e[n];
      for (let o in r) {
        let i = t[o], l = r[o];
        typeof i == "function" && typeof l == "function" && o[0] === "o" && o[1] === "n" && o.charCodeAt(2) >= 65 && o.charCodeAt(2) <= 90 ? t[o] = ye(i, l) : (o === "className" || o === "UNSAFE_className") && typeof i == "string" && typeof l == "string" ? t[o] = it(i, l) : o === "id" && i && l ? t.id = st(i, l) : t[o] = l !== void 0 ? l : i;
      }
    }
    return t;
  }
  function dt(...e) {
    return e.length === 1 && e[0] ? e[0] : (t) => {
      let n = false;
      const r = e.map((o) => {
        const i = xe(o, t);
        return n || (n = typeof i == "function"), i;
      });
      if (n) return () => {
        r.forEach((o, i) => {
          typeof o == "function" ? o() : xe(e[i], null);
        });
      };
    };
  }
  function xe(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t);
  }
  const ft = /* @__PURE__ */ new Set([
    "id"
  ]), bt = /* @__PURE__ */ new Set([
    "aria-label",
    "aria-labelledby",
    "aria-describedby",
    "aria-details"
  ]), pt = /* @__PURE__ */ new Set([
    "href",
    "hrefLang",
    "target",
    "rel",
    "download",
    "ping",
    "referrerPolicy"
  ]), vt = /* @__PURE__ */ new Set([
    "dir",
    "lang",
    "hidden",
    "inert",
    "translate"
  ]), Le = /* @__PURE__ */ new Set([
    "onClick",
    "onAuxClick",
    "onContextMenu",
    "onDoubleClick",
    "onMouseDown",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseOut",
    "onMouseOver",
    "onMouseUp",
    "onTouchCancel",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "onPointerDown",
    "onPointerMove",
    "onPointerUp",
    "onPointerCancel",
    "onPointerEnter",
    "onPointerLeave",
    "onPointerOver",
    "onPointerOut",
    "onGotPointerCapture",
    "onLostPointerCapture",
    "onScroll",
    "onWheel",
    "onAnimationStart",
    "onAnimationEnd",
    "onAnimationIteration",
    "onTransitionCancel",
    "onTransitionEnd",
    "onTransitionRun",
    "onTransitionStart"
  ]), $t = /^(data-.*)$/;
  function _e(e, t = {}) {
    let { labelable: n, isLink: r, global: o, events: i = o, propNames: l } = t, a = {};
    for (const u in e) Object.prototype.hasOwnProperty.call(e, u) && (ft.has(u) || n && bt.has(u) || r && pt.has(u) || o && vt.has(u) || i && Le.has(u) || u.endsWith("Capture") && Le.has(u.slice(0, -7)) || (l == null ? void 0 : l.has(u)) || $t.test(u)) && (a[u] = e[u]);
    return a;
  }
  function B(e) {
    if (yt()) e.focus({
      preventScroll: true
    });
    else {
      let t = gt(e);
      e.focus(), mt(t);
    }
  }
  let Q = null;
  function yt() {
    if (Q == null) {
      Q = false;
      try {
        document.createElement("div").focus({
          get preventScroll() {
            return Q = true, true;
          }
        });
      } catch {
      }
    }
    return Q;
  }
  function gt(e) {
    let t = e.parentNode, n = [], r = document.scrollingElement || document.documentElement;
    for (; t instanceof HTMLElement && t !== r; ) (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
    return r instanceof HTMLElement && n.push({
      element: r,
      scrollTop: r.scrollTop,
      scrollLeft: r.scrollLeft
    }), n;
  }
  function mt(e) {
    for (let { element: t, scrollTop: n, scrollLeft: r } of e) t.scrollTop = n, t.scrollLeft = r;
  }
  function ie(e) {
    var t;
    if (typeof window > "u" || window.navigator == null) return false;
    let n = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands;
    return Array.isArray(n) && n.some((r) => e.test(r.brand)) || e.test(window.navigator.userAgent);
  }
  function me(e) {
    var t;
    return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : false;
  }
  function A(e) {
    let t = null;
    return () => (t == null && (t = e()), t);
  }
  const q = A(function() {
    return me(/^Mac/i);
  }), Et = A(function() {
    return me(/^iPhone/i);
  }), Ae = A(function() {
    return me(/^iPad/i) || q() && navigator.maxTouchPoints > 1;
  }), Re = A(function() {
    return Et() || Ae();
  }), ht = A(function() {
    return ie(/AppleWebKit/i) && !Pt();
  }), Pt = A(function() {
    return ie(/Chrome/i);
  }), Ne = A(function() {
    return ie(/Android/i);
  }), Tt = A(function() {
    return ie(/Firefox/i);
  });
  function J(e, t, n = true) {
    var r, o;
    let { metaKey: i, ctrlKey: l, altKey: a, shiftKey: u } = t;
    Tt() && (!((o = window.event) === null || o === void 0 || (r = o.type) === null || r === void 0) && r.startsWith("key")) && e.target === "_blank" && (q() ? i = true : l = true);
    let p = ht() && q() && !Ae() ? new KeyboardEvent("keydown", {
      keyIdentifier: "Enter",
      metaKey: i,
      ctrlKey: l,
      altKey: a,
      shiftKey: u
    }) : new MouseEvent("click", {
      metaKey: i,
      ctrlKey: l,
      altKey: a,
      shiftKey: u,
      bubbles: true,
      cancelable: true
    });
    J.isOpening = n, B(e), e.dispatchEvent(p), J.isOpening = false;
  }
  J.isOpening = false;
  let _ = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Set();
  function Ce() {
    if (typeof window > "u") return;
    function e(r) {
      return "propertyName" in r;
    }
    let t = (r) => {
      if (!e(r) || !r.target) return;
      let o = _.get(r.target);
      o || (o = /* @__PURE__ */ new Set(), _.set(r.target, o), r.target.addEventListener("transitioncancel", n, {
        once: true
      })), o.add(r.propertyName);
    }, n = (r) => {
      if (!e(r) || !r.target) return;
      let o = _.get(r.target);
      if (o && (o.delete(r.propertyName), o.size === 0 && (r.target.removeEventListener("transitioncancel", n), _.delete(r.target)), _.size === 0)) {
        for (let i of ce) i();
        ce.clear();
      }
    };
    document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
  }
  typeof document < "u" && (document.readyState !== "loading" ? Ce() : document.addEventListener("DOMContentLoaded", Ce));
  function wt() {
    for (const [e] of _) "isConnected" in e && !e.isConnected && _.delete(e);
  }
  function Ve(e) {
    requestAnimationFrame(() => {
      wt(), _.size === 0 ? e() : ce.add(e);
    });
  }
  function Ee() {
    let e = f.useRef(/* @__PURE__ */ new Map()), t = f.useCallback((o, i, l, a) => {
      let u = (a == null ? void 0 : a.once) ? (...p) => {
        e.current.delete(l), l(...p);
      } : l;
      e.current.set(l, {
        type: i,
        eventTarget: o,
        fn: u,
        options: a
      }), o.addEventListener(i, u, a);
    }, []), n = f.useCallback((o, i, l, a) => {
      var u;
      let p = ((u = e.current.get(l)) === null || u === void 0 ? void 0 : u.fn) || l;
      o.removeEventListener(i, p, a), e.current.delete(l);
    }, []), r = f.useCallback(() => {
      e.current.forEach((o, i) => {
        n(o.eventTarget, o.type, i, o.options);
      });
    }, [
      n
    ]);
    return f.useEffect(() => r, [
      r
    ]), {
      addGlobalListener: t,
      removeGlobalListener: n,
      removeAllGlobalListeners: r
    };
  }
  function St(e) {
    const t = f.useRef(null), n = f.useRef(void 0), r = f.useCallback((o) => {
      if (typeof e == "function") {
        const i = e, l = i(o);
        return () => {
          typeof l == "function" ? l() : i(null);
        };
      } else if (e) return e.current = o, () => {
        e.current = null;
      };
    }, [
      e
    ]);
    return f.useMemo(() => ({
      get current() {
        return t.current;
      },
      set current(o) {
        t.current = o, n.current && (n.current(), n.current = void 0), o != null && (n.current = r(o));
      }
    }), [
      r
    ]);
  }
  function Ue(e, t) {
    $e(() => {
      if (e && e.ref && t) return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
    });
  }
  function We(e) {
    return e.pointerType === "" && e.isTrusted ? true : Ne() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
  }
  function xt(e) {
    return !Ne() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
  }
  const Lt = typeof Element < "u" && "checkVisibility" in Element.prototype;
  function Ct(e) {
    const t = F(e);
    if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return false;
    let { display: n, visibility: r } = e.style, o = n !== "none" && r !== "hidden" && r !== "collapse";
    if (o) {
      const { getComputedStyle: i } = e.ownerDocument.defaultView;
      let { display: l, visibility: a } = i(e);
      o = l !== "none" && a !== "hidden" && a !== "collapse";
    }
    return o;
  }
  function kt(e, t) {
    return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : true);
  }
  function Ge(e, t) {
    return Lt ? e.checkVisibility({
      visibilityProperty: true
    }) && !e.closest("[data-react-aria-prevent-focus]") : e.nodeName !== "#comment" && Ct(e) && kt(e, t) && (!e.parentElement || Ge(e.parentElement, e));
  }
  const Be = [
    "input:not([disabled]):not([type=hidden])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "a[href]",
    "area[href]",
    "summary",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    '[contenteditable]:not([contenteditable^="false"])',
    "permission"
  ], Ft = Be.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
  Be.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
  function Mt(e) {
    return e.matches(Ft) && Ge(e) && !Dt(e);
  }
  function Dt(e) {
    let t = e;
    for (; t != null; ) {
      if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return true;
      t = t.parentElement;
    }
    return false;
  }
  function Ot(e, t, n) {
    let [r, o] = f.useState(e || t), i = f.useRef(e !== void 0), l = e !== void 0;
    f.useEffect(() => {
      i.current, i.current = l;
    }, [
      l
    ]);
    let a = l ? e : r, u = f.useCallback((p, ...b) => {
      let $ = (h, ...g) => {
        n && (Object.is(a, h) || n(h, ...g)), l || (a = h);
      };
      typeof p == "function" ? o((g, ...w) => {
        let y = p(l ? a : g, ...w);
        return $(y, ...b), l ? g : y;
      }) : (l || o(p), $(p, ...b));
    }, [
      l,
      a,
      n
    ]);
    return [
      a,
      u
    ];
  }
  const It = Symbol("default");
  function Ht(e) {
    let { className: t, style: n, children: r, defaultClassName: o, defaultChildren: i, defaultStyle: l, values: a } = e;
    return f.useMemo(() => {
      let u, p, b;
      return typeof t == "function" ? u = t({
        ...a,
        defaultClassName: o
      }) : u = t, typeof n == "function" ? p = n({
        ...a,
        defaultStyle: l || {}
      }) : p = n, typeof r == "function" ? b = r({
        ...a,
        defaultChildren: i
      }) : r == null ? b = i : b = r, {
        className: u ?? o,
        style: p || l ? {
          ...l,
          ...p
        } : void 0,
        children: b ?? i,
        "data-rac": ""
      };
    }, [
      t,
      n,
      r,
      o,
      i,
      l,
      a
    ]);
  }
  function Kt(e, t) {
    let n = f.useContext(e);
    if (t === null) return null;
    if (n && typeof n == "object" && "slots" in n && n.slots) {
      let r = t || It;
      if (!n.slots[r]) {
        let o = new Intl.ListFormat().format(Object.keys(n.slots).map((l) => `"${l}"`)), i = t ? `Invalid slot "${t}".` : "A slot prop is required.";
        throw new Error(`${i} Valid slot names are ${o}.`);
      }
      return n.slots[r];
    }
    return n;
  }
  function _t(e, t, n) {
    let r = Kt(n, e.slot) || {}, { ref: o, ...i } = r, l = St(f.useMemo(() => dt(t, o), [
      t,
      o
    ])), a = I(i, e);
    return "style" in i && i.style && "style" in e && e.style && (typeof i.style == "function" || typeof e.style == "function" ? a.style = (u) => {
      let p = typeof i.style == "function" ? i.style(u) : i.style, b = {
        ...u.defaultStyle,
        ...p
      }, $ = typeof e.style == "function" ? e.style({
        ...u,
        defaultStyle: b
      }) : e.style;
      return {
        ...b,
        ...$
      };
    } : a.style = {
      ...i.style,
      ...e.style
    }), [
      a,
      l
    ];
  }
  function At(e, t) {
    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function Rt(e, t, n) {
    At(e, t), t.set(e, n);
  }
  function he(e) {
    let t = e;
    return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
    }, t;
  }
  function je(e, t) {
    Object.defineProperty(e, "target", {
      value: t
    }), Object.defineProperty(e, "currentTarget", {
      value: t
    });
  }
  function ze(e) {
    let t = f.useRef({
      isFocused: false,
      observer: null
    });
    $e(() => {
      const r = t.current;
      return () => {
        r.observer && (r.observer.disconnect(), r.observer = null);
      };
    }, []);
    let n = K((r) => {
      e == null ? void 0 : e(r);
    });
    return f.useCallback((r) => {
      if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
        t.current.isFocused = true;
        let o = r.target, i = (l) => {
          if (t.current.isFocused = false, o.disabled) {
            let a = he(l);
            n(a);
          }
          t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
        };
        o.addEventListener("focusout", i, {
          once: true
        }), t.current.observer = new MutationObserver(() => {
          if (t.current.isFocused && o.disabled) {
            var l;
            (l = t.current.observer) === null || l === void 0 || l.disconnect();
            let a = o === document.activeElement ? null : document.activeElement;
            o.dispatchEvent(new FocusEvent("blur", {
              relatedTarget: a
            })), o.dispatchEvent(new FocusEvent("focusout", {
              bubbles: true,
              relatedTarget: a
            }));
          }
        }), t.current.observer.observe(o, {
          attributes: true,
          attributeFilter: [
            "disabled"
          ]
        });
      }
    }, [
      n
    ]);
  }
  let re = false;
  function Nt(e) {
    for (; e && !Mt(e); ) e = e.parentElement;
    let t = F(e), n = t.document.activeElement;
    if (!n || n === e) return;
    re = true;
    let r = false, o = (b) => {
      (b.target === n || r) && b.stopImmediatePropagation();
    }, i = (b) => {
      (b.target === n || r) && (b.stopImmediatePropagation(), !e && !r && (r = true, B(n), u()));
    }, l = (b) => {
      (b.target === e || r) && b.stopImmediatePropagation();
    }, a = (b) => {
      (b.target === e || r) && (b.stopImmediatePropagation(), r || (r = true, B(n), u()));
    };
    t.addEventListener("blur", o, true), t.addEventListener("focusout", i, true), t.addEventListener("focusin", a, true), t.addEventListener("focus", l, true);
    let u = () => {
      cancelAnimationFrame(p), t.removeEventListener("blur", o, true), t.removeEventListener("focusout", i, true), t.removeEventListener("focusin", a, true), t.removeEventListener("focus", l, true), re = false, r = false;
    }, p = requestAnimationFrame(u);
    return u;
  }
  let U = "default", de = "", ne = /* @__PURE__ */ new WeakMap();
  function Vt(e) {
    if (Re()) {
      if (U === "default") {
        const t = L(e);
        de = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
      }
      U = "disabled";
    } else if (e instanceof HTMLElement || e instanceof SVGElement) {
      let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
      ne.set(e, e.style[t]), e.style[t] = "none";
    }
  }
  function ke(e) {
    if (Re()) {
      if (U !== "disabled") return;
      U = "restoring", setTimeout(() => {
        Ve(() => {
          if (U === "restoring") {
            const t = L(e);
            t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = de || ""), de = "", U = "default";
          }
        });
      }, 300);
    } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && ne.has(e)) {
      let t = ne.get(e), n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
      e.style[n] === "none" && (e.style[n] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), ne.delete(e);
    }
  }
  const Ye = G.createContext({
    register: () => {
    }
  });
  Ye.displayName = "PressResponderContext";
  function Ut(e, t) {
    return t.get ? t.get.call(e) : t.value;
  }
  function Xe(e, t, n) {
    if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
    return t.get(e);
  }
  function Wt(e, t) {
    var n = Xe(e, t, "get");
    return Ut(e, n);
  }
  function Gt(e, t, n) {
    if (t.set) t.set.call(e, n);
    else {
      if (!t.writable) throw new TypeError("attempted to set read only private field");
      t.value = n;
    }
  }
  function Fe(e, t, n) {
    var r = Xe(e, t, "set");
    return Gt(e, r, n), n;
  }
  function Bt(e) {
    let t = f.useContext(Ye);
    if (t) {
      let { register: n, ...r } = t;
      e = I(r, e), n();
    }
    return Ue(t, e.ref), e;
  }
  var Z = /* @__PURE__ */ new WeakMap();
  class ee {
    continuePropagation() {
      Fe(this, Z, false);
    }
    get shouldStopPropagation() {
      return Wt(this, Z);
    }
    constructor(t, n, r, o) {
      Rt(this, Z, {
        writable: true,
        value: void 0
      }), Fe(this, Z, true);
      var i;
      let l = (i = o == null ? void 0 : o.target) !== null && i !== void 0 ? i : r.currentTarget;
      const a = l == null ? void 0 : l.getBoundingClientRect();
      let u, p = 0, b, $ = null;
      r.clientX != null && r.clientY != null && (b = r.clientX, $ = r.clientY), a && (b != null && $ != null ? (u = b - a.left, p = $ - a.top) : (u = a.width / 2, p = a.height / 2)), this.type = t, this.pointerType = n, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = u, this.y = p;
    }
  }
  const Me = Symbol("linkClicked"), De = "react-aria-pressable-style", Oe = "data-react-aria-pressable";
  function jt(e) {
    let { onPress: t, onPressChange: n, onPressStart: r, onPressEnd: o, onPressUp: i, onClick: l, isDisabled: a, isPressed: u, preventFocusOnPress: p, shouldCancelOnPointerExit: b, allowTextSelectionOnPress: $, ref: h, ...g } = Bt(e), [w, y] = f.useState(false), m = f.useRef({
      isPressed: false,
      ignoreEmulatedMouseEvents: false,
      didFirePressStart: false,
      isTriggeringEvent: false,
      activePointerId: null,
      target: null,
      isOverTarget: false,
      pointerType: null,
      disposables: []
    }), { addGlobalListener: S, removeAllGlobalListeners: M } = Ee(), D = K((s, v) => {
      let T = m.current;
      if (a || T.didFirePressStart) return false;
      let c = true;
      if (T.isTriggeringEvent = true, r) {
        let E = new ee("pressstart", v, s);
        r(E), c = E.shouldStopPropagation;
      }
      return n && n(true), T.isTriggeringEvent = false, T.didFirePressStart = true, y(true), c;
    }), H = K((s, v, T = true) => {
      let c = m.current;
      if (!c.didFirePressStart) return false;
      c.didFirePressStart = false, c.isTriggeringEvent = true;
      let E = true;
      if (o) {
        let d = new ee("pressend", v, s);
        o(d), E = d.shouldStopPropagation;
      }
      if (n && n(false), y(false), t && T && !a) {
        let d = new ee("press", v, s);
        t(d), E && (E = d.shouldStopPropagation);
      }
      return c.isTriggeringEvent = false, E;
    }), z = K((s, v) => {
      let T = m.current;
      if (a) return false;
      if (i) {
        T.isTriggeringEvent = true;
        let c = new ee("pressup", v, s);
        return i(c), T.isTriggeringEvent = false, c.shouldStopPropagation;
      }
      return true;
    }), R = K((s) => {
      let v = m.current;
      if (v.isPressed && v.target) {
        v.didFirePressStart && v.pointerType != null && H(N(v.target, s), v.pointerType, false), v.isPressed = false, v.isOverTarget = false, v.activePointerId = null, v.pointerType = null, M(), $ || ke(v.target);
        for (let T of v.disposables) T();
        v.disposables = [];
      }
    }), we = K((s) => {
      b && R(s);
    }), ae = K((s) => {
      a || (l == null ? void 0 : l(s));
    }), Se = K((s, v) => {
      if (!a && l) {
        let T = new MouseEvent("click", s);
        je(T, v), l(he(T));
      }
    }), ot = f.useMemo(() => {
      let s = m.current, v = {
        onKeyDown(c) {
          if (le(c.nativeEvent, c.currentTarget) && k(c.currentTarget, x(c.nativeEvent))) {
            var E;
            Ie(x(c.nativeEvent), c.key) && c.preventDefault();
            let d = true;
            if (!s.isPressed && !c.repeat) {
              s.target = c.currentTarget, s.isPressed = true, s.pointerType = "keyboard", d = D(c, "keyboard");
              let P = c.currentTarget, C = (O) => {
                le(O, P) && !O.repeat && k(P, x(O)) && s.target && z(N(s.target, O), "keyboard");
              };
              S(L(c.currentTarget), "keyup", ye(C, T), true);
            }
            d && c.stopPropagation(), c.metaKey && q() && ((E = s.metaKeyEvents) === null || E === void 0 || E.set(c.key, c.nativeEvent));
          } else c.key === "Meta" && (s.metaKeyEvents = /* @__PURE__ */ new Map());
        },
        onClick(c) {
          if (!(c && !k(c.currentTarget, x(c.nativeEvent))) && c && c.button === 0 && !s.isTriggeringEvent && !J.isOpening) {
            let E = true;
            if (a && c.preventDefault(), !s.ignoreEmulatedMouseEvents && !s.isPressed && (s.pointerType === "virtual" || We(c.nativeEvent))) {
              let d = D(c, "virtual"), P = z(c, "virtual"), C = H(c, "virtual");
              ae(c), E = d && P && C;
            } else if (s.isPressed && s.pointerType !== "keyboard") {
              let d = s.pointerType || c.nativeEvent.pointerType || "virtual", P = z(N(c.currentTarget, c), d), C = H(N(c.currentTarget, c), d, true);
              E = P && C, s.isOverTarget = false, ae(c), R(c);
            }
            s.ignoreEmulatedMouseEvents = false, E && c.stopPropagation();
          }
        }
      }, T = (c) => {
        var E;
        if (s.isPressed && s.target && le(c, s.target)) {
          var d;
          Ie(x(c), c.key) && c.preventDefault();
          let C = x(c), O = k(s.target, x(c));
          H(N(s.target, c), "keyboard", O), O && Se(c, s.target), M(), c.key !== "Enter" && Pe(s.target) && k(s.target, C) && !c[Me] && (c[Me] = true, J(s.target, c, false)), s.isPressed = false, (d = s.metaKeyEvents) === null || d === void 0 || d.delete(c.key);
        } else if (c.key === "Meta" && (!((E = s.metaKeyEvents) === null || E === void 0) && E.size)) {
          var P;
          let C = s.metaKeyEvents;
          s.metaKeyEvents = void 0;
          for (let O of C.values()) (P = s.target) === null || P === void 0 || P.dispatchEvent(new KeyboardEvent("keyup", O));
        }
      };
      if (typeof PointerEvent < "u") {
        v.onPointerDown = (d) => {
          if (d.button !== 0 || !k(d.currentTarget, x(d.nativeEvent))) return;
          if (xt(d.nativeEvent)) {
            s.pointerType = "virtual";
            return;
          }
          s.pointerType = d.pointerType;
          let P = true;
          if (!s.isPressed) {
            s.isPressed = true, s.isOverTarget = true, s.activePointerId = d.pointerId, s.target = d.currentTarget, $ || Vt(s.target), P = D(d, s.pointerType);
            let C = x(d.nativeEvent);
            "releasePointerCapture" in C && C.releasePointerCapture(d.pointerId), S(L(d.currentTarget), "pointerup", c, false), S(L(d.currentTarget), "pointercancel", E, false);
          }
          P && d.stopPropagation();
        }, v.onMouseDown = (d) => {
          if (k(d.currentTarget, x(d.nativeEvent)) && d.button === 0) {
            if (p) {
              let P = Nt(d.target);
              P && s.disposables.push(P);
            }
            d.stopPropagation();
          }
        }, v.onPointerUp = (d) => {
          !k(d.currentTarget, x(d.nativeEvent)) || s.pointerType === "virtual" || d.button === 0 && !s.isPressed && z(d, s.pointerType || d.pointerType);
        }, v.onPointerEnter = (d) => {
          d.pointerId === s.activePointerId && s.target && !s.isOverTarget && s.pointerType != null && (s.isOverTarget = true, D(N(s.target, d), s.pointerType));
        }, v.onPointerLeave = (d) => {
          d.pointerId === s.activePointerId && s.target && s.isOverTarget && s.pointerType != null && (s.isOverTarget = false, H(N(s.target, d), s.pointerType, false), we(d));
        };
        let c = (d) => {
          if (d.pointerId === s.activePointerId && s.isPressed && d.button === 0 && s.target) {
            if (k(s.target, x(d)) && s.pointerType != null) {
              let P = false, C = setTimeout(() => {
                s.isPressed && s.target instanceof HTMLElement && (P ? R(d) : (B(s.target), s.target.click()));
              }, 80);
              S(d.currentTarget, "click", () => P = true, true), s.disposables.push(() => clearTimeout(C));
            } else R(d);
            s.isOverTarget = false;
          }
        }, E = (d) => {
          R(d);
        };
        v.onDragStart = (d) => {
          k(d.currentTarget, x(d.nativeEvent)) && R(d);
        };
      }
      return v;
    }, [
      S,
      a,
      p,
      M,
      $,
      R,
      we,
      H,
      D,
      z,
      ae,
      Se
    ]);
    return f.useEffect(() => {
      if (!h) return;
      const s = L(h.current);
      if (!s || !s.head || s.getElementById(De)) return;
      const v = s.createElement("style");
      v.id = De, v.textContent = `
@layer {
  [${Oe}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), s.head.prepend(v);
    }, [
      h
    ]), f.useEffect(() => {
      let s = m.current;
      return () => {
        var v;
        $ || ke((v = s.target) !== null && v !== void 0 ? v : void 0);
        for (let T of s.disposables) T();
        s.disposables = [];
      };
    }, [
      $
    ]), {
      isPressed: u || w,
      pressProps: I(g, ot, {
        [Oe]: true
      })
    };
  }
  function Pe(e) {
    return e.tagName === "A" && e.hasAttribute("href");
  }
  function le(e, t) {
    const { key: n, code: r } = e, o = t, i = o.getAttribute("role");
    return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(o instanceof F(o).HTMLInputElement && !qe(o, n) || o instanceof F(o).HTMLTextAreaElement || o.isContentEditable) && !((i === "link" || !i && Pe(o)) && n !== "Enter");
  }
  function N(e, t) {
    let n = t.clientX, r = t.clientY;
    return {
      currentTarget: e,
      shiftKey: t.shiftKey,
      ctrlKey: t.ctrlKey,
      metaKey: t.metaKey,
      altKey: t.altKey,
      clientX: n,
      clientY: r
    };
  }
  function zt(e) {
    return e instanceof HTMLInputElement ? false : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Pe(e);
  }
  function Ie(e, t) {
    return e instanceof HTMLInputElement ? !qe(e, t) : zt(e);
  }
  const Yt = /* @__PURE__ */ new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset"
  ]);
  function qe(e, t) {
    return e.type === "checkbox" || e.type === "radio" ? t === " " : Yt.has(e.type);
  }
  let j = null, fe = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Map(), V = false, be = false;
  const Xt = {
    Tab: true,
    Escape: true
  };
  function Te(e, t) {
    for (let n of fe) n(e, t);
  }
  function qt(e) {
    return !(e.metaKey || !q() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
  }
  function oe(e) {
    V = true, qt(e) && (j = "keyboard", Te("keyboard", e));
  }
  function W(e) {
    j = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (V = true, Te("pointer", e));
  }
  function Je(e) {
    We(e) && (V = true, j = "virtual");
  }
  function Qe(e) {
    e.target === window || e.target === document || re || !e.isTrusted || (!V && !be && (j = "virtual", Te("virtual", e)), V = false, be = false);
  }
  function Ze() {
    re || (V = false, be = true);
  }
  function pe(e) {
    if (typeof window > "u" || typeof document > "u" || Y.get(F(e))) return;
    const t = F(e), n = L(e);
    let r = t.HTMLElement.prototype.focus;
    t.HTMLElement.prototype.focus = function() {
      V = true, r.apply(this, arguments);
    }, n.addEventListener("keydown", oe, true), n.addEventListener("keyup", oe, true), n.addEventListener("click", Je, true), t.addEventListener("focus", Qe, true), t.addEventListener("blur", Ze, false), typeof PointerEvent < "u" && (n.addEventListener("pointerdown", W, true), n.addEventListener("pointermove", W, true), n.addEventListener("pointerup", W, true)), t.addEventListener("beforeunload", () => {
      et(e);
    }, {
      once: true
    }), Y.set(t, {
      focus: r
    });
  }
  const et = (e, t) => {
    const n = F(e), r = L(e);
    t && r.removeEventListener("DOMContentLoaded", t), Y.has(n) && (n.HTMLElement.prototype.focus = Y.get(n).focus, r.removeEventListener("keydown", oe, true), r.removeEventListener("keyup", oe, true), r.removeEventListener("click", Je, true), n.removeEventListener("focus", Qe, true), n.removeEventListener("blur", Ze, false), typeof PointerEvent < "u" && (r.removeEventListener("pointerdown", W, true), r.removeEventListener("pointermove", W, true), r.removeEventListener("pointerup", W, true)), Y.delete(n));
  };
  function Jt(e) {
    const t = L(e);
    let n;
    return t.readyState !== "loading" ? pe(e) : (n = () => {
      pe(e);
    }, t.addEventListener("DOMContentLoaded", n)), () => et(e, n);
  }
  typeof document < "u" && Jt();
  function tt() {
    return j !== "pointer";
  }
  function Qt() {
    return j;
  }
  const Zt = /* @__PURE__ */ new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset"
  ]);
  function en(e, t, n) {
    let r = L(n == null ? void 0 : n.target);
    const o = typeof window < "u" ? F(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? F(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? F(n == null ? void 0 : n.target).HTMLElement : HTMLElement, a = typeof window < "u" ? F(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
    return e = e || r.activeElement instanceof o && !Zt.has(r.activeElement.type) || r.activeElement instanceof i || r.activeElement instanceof l && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof a && !Xt[n.key]);
  }
  function tn(e, t, n) {
    pe(), f.useEffect(() => {
      let r = (o, i) => {
        en(!!(n == null ? void 0 : n.isTextInput), o, i) && e(tt());
      };
      return fe.add(r), () => {
        fe.delete(r);
      };
    }, t);
  }
  function nn(e) {
    const t = L(e), n = X(t);
    if (Qt() === "virtual") {
      let r = n;
      Ve(() => {
        X(t) === r && e.isConnected && B(e);
      });
    } else B(e);
  }
  function nt(e) {
    let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
    const i = f.useCallback((u) => {
      if (u.target === u.currentTarget) return r && r(u), o && o(false), true;
    }, [
      r,
      o
    ]), l = ze(i), a = f.useCallback((u) => {
      const p = L(u.target), b = p ? X(p) : X();
      u.target === u.currentTarget && b === x(u.nativeEvent) && (n && n(u), o && o(true), l(u));
    }, [
      o,
      n,
      l
    ]);
    return {
      focusProps: {
        onFocus: !t && (n || o || r) ? a : void 0,
        onBlur: !t && (r || o) ? i : void 0
      }
    };
  }
  function He(e) {
    if (!e) return;
    let t = true;
    return (n) => {
      let r = {
        ...n,
        preventDefault() {
          n.preventDefault();
        },
        isDefaultPrevented() {
          return n.isDefaultPrevented();
        },
        stopPropagation() {
          t = true;
        },
        continuePropagation() {
          t = false;
        },
        isPropagationStopped() {
          return t;
        }
      };
      e(r), t && n.stopPropagation();
    };
  }
  function rn(e) {
    return {
      keyboardProps: e.isDisabled ? {} : {
        onKeyDown: He(e.onKeyDown),
        onKeyUp: He(e.onKeyUp)
      }
    };
  }
  let on = G.createContext(null);
  function an(e) {
    let t = f.useContext(on) || {};
    Ue(t, e);
    let { ref: n, ...r } = t;
    return r;
  }
  function sn(e, t) {
    let { focusProps: n } = nt(e), { keyboardProps: r } = rn(e), o = I(n, r), i = an(t), l = e.isDisabled ? {} : i, a = f.useRef(e.autoFocus);
    f.useEffect(() => {
      a.current && t.current && nn(t.current), a.current = false;
    }, [
      t
    ]);
    let u = e.excludeFromTabOrder ? -1 : 0;
    return e.isDisabled && (u = void 0), {
      focusableProps: I({
        ...o,
        tabIndex: u
      }, l)
    };
  }
  function ln(e) {
    let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = f.useRef({
      isFocusWithin: false
    }), { addGlobalListener: l, removeAllGlobalListeners: a } = Ee(), u = f.useCallback(($) => {
      $.currentTarget.contains($.target) && i.current.isFocusWithin && !$.currentTarget.contains($.relatedTarget) && (i.current.isFocusWithin = false, a(), n && n($), o && o(false));
    }, [
      n,
      o,
      i,
      a
    ]), p = ze(u), b = f.useCallback(($) => {
      if (!$.currentTarget.contains($.target)) return;
      const h = L($.target), g = X(h);
      if (!i.current.isFocusWithin && g === x($.nativeEvent)) {
        r && r($), o && o(true), i.current.isFocusWithin = true, p($);
        let w = $.currentTarget;
        l(h, "focus", (y) => {
          if (i.current.isFocusWithin && !k(w, y.target)) {
            let m = new h.defaultView.FocusEvent("blur", {
              relatedTarget: y.target
            });
            je(m, w);
            let S = he(m);
            u(S);
          }
        }, {
          capture: true
        });
      }
    }, [
      r,
      o,
      p,
      l,
      u
    ]);
    return t ? {
      focusWithinProps: {
        onFocus: void 0,
        onBlur: void 0
      }
    } : {
      focusWithinProps: {
        onFocus: b,
        onBlur: u
      }
    };
  }
  let ve = false, te = 0;
  function un() {
    ve = true, setTimeout(() => {
      ve = false;
    }, 50);
  }
  function Ke(e) {
    e.pointerType === "touch" && un();
  }
  function cn() {
    if (!(typeof document > "u")) return te === 0 && typeof PointerEvent < "u" && document.addEventListener("pointerup", Ke), te++, () => {
      te--, !(te > 0) && typeof PointerEvent < "u" && document.removeEventListener("pointerup", Ke);
    };
  }
  function dn(e) {
    let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, l] = f.useState(false), a = f.useRef({
      isHovered: false,
      ignoreEmulatedMouseEvents: false,
      pointerType: "",
      target: null
    }).current;
    f.useEffect(cn, []);
    let { addGlobalListener: u, removeAllGlobalListeners: p } = Ee(), { hoverProps: b, triggerHoverEnd: $ } = f.useMemo(() => {
      let h = (y, m) => {
        if (a.pointerType = m, o || m === "touch" || a.isHovered || !y.currentTarget.contains(y.target)) return;
        a.isHovered = true;
        let S = y.currentTarget;
        a.target = S, u(L(y.target), "pointerover", (M) => {
          a.isHovered && a.target && !k(a.target, M.target) && g(M, M.pointerType);
        }, {
          capture: true
        }), t && t({
          type: "hoverstart",
          target: S,
          pointerType: m
        }), n && n(true), l(true);
      }, g = (y, m) => {
        let S = a.target;
        a.pointerType = "", a.target = null, !(m === "touch" || !a.isHovered || !S) && (a.isHovered = false, p(), r && r({
          type: "hoverend",
          target: S,
          pointerType: m
        }), n && n(false), l(false));
      }, w = {};
      return typeof PointerEvent < "u" && (w.onPointerEnter = (y) => {
        ve && y.pointerType === "mouse" || h(y, y.pointerType);
      }, w.onPointerLeave = (y) => {
        !o && y.currentTarget.contains(y.target) && g(y, y.pointerType);
      }), {
        hoverProps: w,
        triggerHoverEnd: g
      };
    }, [
      t,
      n,
      r,
      o,
      a,
      u,
      p
    ]);
    return f.useEffect(() => {
      o && $({
        currentTarget: a.target
      }, a.pointerType);
    }, [
      o
    ]), {
      hoverProps: b,
      isHovered: i
    };
  }
  function fn(e = {}) {
    let { autoFocus: t = false, isTextInput: n, within: r } = e, o = f.useRef({
      isFocused: false,
      isFocusVisible: t || tt()
    }), [i, l] = f.useState(false), [a, u] = f.useState(() => o.current.isFocused && o.current.isFocusVisible), p = f.useCallback(() => u(o.current.isFocused && o.current.isFocusVisible), []), b = f.useCallback((g) => {
      o.current.isFocused = g, l(g), p();
    }, [
      p
    ]);
    tn((g) => {
      o.current.isFocusVisible = g, p();
    }, [], {
      isTextInput: n
    });
    let { focusProps: $ } = nt({
      isDisabled: r,
      onFocusChange: b
    }), { focusWithinProps: h } = ln({
      isDisabled: !r,
      onFocusWithinChange: b
    });
    return {
      isFocused: i,
      isFocusVisible: a,
      focusProps: r ? h : $
    };
  }
  function bn(e, t) {
    let { elementType: n = "button", isDisabled: r, onPress: o, onPressStart: i, onPressEnd: l, onPressUp: a, onPressChange: u, preventFocusOnPress: p, allowFocusWhenDisabled: b, onClick: $, href: h, target: g, rel: w, type: y = "button" } = e, m;
    n === "button" ? m = {
      type: y,
      disabled: r,
      form: e.form,
      formAction: e.formAction,
      formEncType: e.formEncType,
      formMethod: e.formMethod,
      formNoValidate: e.formNoValidate,
      formTarget: e.formTarget,
      name: e.name,
      value: e.value
    } : m = {
      role: "button",
      href: n === "a" && !r ? h : void 0,
      target: n === "a" ? g : void 0,
      type: n === "input" ? y : void 0,
      disabled: n === "input" ? r : void 0,
      "aria-disabled": !r || n === "input" ? void 0 : r,
      rel: n === "a" ? w : void 0
    };
    let { pressProps: S, isPressed: M } = jt({
      onPressStart: i,
      onPressEnd: l,
      onPressChange: u,
      onPress: o,
      onPressUp: a,
      onClick: $,
      isDisabled: r,
      preventFocusOnPress: p,
      ref: t
    }), { focusableProps: D } = sn(e, t);
    b && (D.tabIndex = r ? -1 : D.tabIndex);
    let H = I(D, S, _e(e, {
      labelable: true
    }));
    return {
      isPressed: M,
      buttonProps: I(m, H, {
        "aria-haspopup": e["aria-haspopup"],
        "aria-expanded": e["aria-expanded"],
        "aria-controls": e["aria-controls"],
        "aria-pressed": e["aria-pressed"],
        "aria-current": e["aria-current"],
        "aria-disabled": e["aria-disabled"]
      })
    };
  }
  function rt(e, t, n) {
    const { isSelected: r } = t, { isPressed: o, buttonProps: i } = bn({
      ...e,
      onPress: ye(t.toggle, e.onPress)
    }, n);
    return {
      isPressed: o,
      isSelected: r,
      isDisabled: e.isDisabled || false,
      buttonProps: I(i, {
        "aria-pressed": r
      })
    };
  }
  function pn(e, t, n) {
    let r = {
      isSelected: t.selectedKeys.has(e.id),
      defaultSelected: false,
      setSelected(u) {
        t.setSelected(e.id, u);
      },
      toggle() {
        t.toggleKey(e.id);
      }
    }, { isPressed: o, isSelected: i, isDisabled: l, buttonProps: a } = rt({
      ...e,
      id: void 0,
      isDisabled: e.isDisabled || t.isDisabled
    }, r, n);
    return t.selectionMode === "single" && (a.role = "radio", a["aria-checked"] = r.isSelected, delete a["aria-pressed"]), {
      isPressed: o,
      isSelected: i,
      isDisabled: l,
      buttonProps: a
    };
  }
  function vn(e = {}) {
    let { isReadOnly: t } = e, [n, r] = Ot(e.isSelected, e.defaultSelected || false, e.onChange), [o] = f.useState(n);
    function i(u) {
      t || r(u);
    }
    function l() {
      t || r(!n);
    }
    var a;
    return {
      isSelected: n,
      defaultSelected: (a = e.defaultSelected) !== null && a !== void 0 ? a : o,
      setSelected: i,
      toggle: l
    };
  }
  let $n, yn, gn;
  $n = f.createContext({
    isSelected: false
  });
  yn = f.createContext(null);
  gn = f.createContext({});
  hn = f.forwardRef(function(t, n) {
    [t, n] = _t(t, n, gn);
    let r = f.useContext(yn), o = vn(r && t.id != null ? {
      isSelected: r.selectedKeys.has(t.id),
      onChange(m) {
        r.setSelected(t.id, m);
      }
    } : t), { buttonProps: i, isPressed: l, isSelected: a, isDisabled: u } = r && t.id != null ? pn({
      ...t,
      id: t.id
    }, r, n) : rt({
      ...t,
      id: t.id != null ? String(t.id) : void 0
    }, o, n), { focusProps: p, isFocused: b, isFocusVisible: $ } = fn(t), { hoverProps: h, isHovered: g } = dn(t), w = Ht({
      ...t,
      id: void 0,
      values: {
        isHovered: g,
        isPressed: l,
        isFocused: b,
        isSelected: o.isSelected,
        isFocusVisible: $,
        isDisabled: u,
        state: o
      },
      defaultClassName: "react-aria-ToggleButton"
    }), y = _e(t, {
      global: true
    });
    return delete y.id, delete y.onClick, G.createElement("button", {
      ...I(y, w, i, p, h),
      ref: n,
      slot: t.slot || void 0,
      "data-focused": b || void 0,
      "data-disabled": u || void 0,
      "data-pressed": l || void 0,
      "data-selected": a || void 0,
      "data-hovered": g || void 0,
      "data-focus-visible": $ || void 0
    }, G.createElement($n.Provider, {
      value: {
        isSelected: a
      }
    }, w.children));
  });
});
export {
  hn as $,
  __tla
};
