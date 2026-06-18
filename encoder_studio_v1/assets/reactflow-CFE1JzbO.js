function Tr(e3) {
  return e3 && e3.__esModule && Object.prototype.hasOwnProperty.call(e3, "default") ? e3.default : e3;
}
var pn = { exports: {} }, et = {};
var yo;
function wa() {
  if (yo) return et;
  yo = 1;
  var e3 = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(o, r, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), r.key !== void 0 && (s = "" + r.key), "key" in r) {
      i = {};
      for (var c in r) c !== "key" && (i[c] = r[c]);
    } else i = r;
    return r = i.ref, { $$typeof: e3, type: o, key: s, ref: r !== void 0 ? r : null, props: i };
  }
  return et.Fragment = t, et.jsx = n, et.jsxs = n, et;
}
var xo;
function va() {
  return xo || (xo = 1, pn.exports = wa()), pn.exports;
}
var k = va(), mn = { exports: {} }, G = {};
var wo;
function _a() {
  if (wo) return G;
  wo = 1;
  var e3 = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), a = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), d = Symbol.for("react.activity"), l = Symbol.iterator;
  function h(m) {
    return m === null || typeof m != "object" ? null : (m = l && m[l] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var x = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, p = Object.assign, _ = {};
  function y(m, E, L) {
    this.props = m, this.context = E, this.refs = _, this.updater = L || x;
  }
  y.prototype.isReactComponent = {}, y.prototype.setState = function(m, E) {
    if (typeof m != "object" && typeof m != "function" && m != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, m, E, "setState");
  }, y.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function M() {
  }
  M.prototype = y.prototype;
  function g(m, E, L) {
    this.props = m, this.context = E, this.refs = _, this.updater = L || x;
  }
  var w = g.prototype = new M();
  w.constructor = g, p(w, y.prototype), w.isPureReactComponent = true;
  var C = Array.isArray;
  function b() {
  }
  var S = { H: null, A: null, T: null, S: null }, R = Object.prototype.hasOwnProperty;
  function $(m, E, L) {
    var z = L.ref;
    return { $$typeof: e3, type: m, key: E, ref: z !== void 0 ? z : null, props: L };
  }
  function X(m, E) {
    return $(m.type, E, m.props);
  }
  function D(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e3;
  }
  function O(m) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(L) {
      return E[L];
    });
  }
  var B = /\/+/g;
  function v(m, E) {
    return typeof m == "object" && m !== null && m.key != null ? O("" + m.key) : E.toString(36);
  }
  function A(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (typeof m.status == "string" ? m.then(b, b) : (m.status = "pending", m.then(function(E) {
          m.status === "pending" && (m.status = "fulfilled", m.value = E);
        }, function(E) {
          m.status === "pending" && (m.status = "rejected", m.reason = E);
        })), m.status) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function N(m, E, L, z, Y) {
    var W = typeof m;
    (W === "undefined" || W === "boolean") && (m = null);
    var F = false;
    if (m === null) F = true;
    else switch (W) {
      case "bigint":
      case "string":
      case "number":
        F = true;
        break;
      case "object":
        switch (m.$$typeof) {
          case e3:
          case t:
            F = true;
            break;
          case f:
            return F = m._init, N(F(m._payload), E, L, z, Y);
        }
    }
    if (F) return Y = Y(m), F = z === "" ? "." + v(m, 0) : z, C(Y) ? (L = "", F != null && (L = F.replace(B, "$&/") + "/"), N(Y, E, L, "", function(Q) {
      return Q;
    })) : Y != null && (D(Y) && (Y = X(Y, L + (Y.key == null || m && m.key === Y.key ? "" : ("" + Y.key).replace(B, "$&/") + "/") + F)), E.push(Y)), 1;
    F = 0;
    var j = z === "" ? "." : z + ":";
    if (C(m)) for (var Z = 0; Z < m.length; Z++) z = m[Z], W = j + v(z, Z), F += N(z, E, L, W, Y);
    else if (Z = h(m), typeof Z == "function") for (m = Z.call(m), Z = 0; !(z = m.next()).done; ) z = z.value, W = j + v(z, Z++), F += N(z, E, L, W, Y);
    else if (W === "object") {
      if (typeof m.then == "function") return N(A(m), E, L, z, Y);
      throw E = String(m), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
    }
    return F;
  }
  function I(m, E, L) {
    if (m == null) return m;
    var z = [], Y = 0;
    return N(m, z, "", "", function(W) {
      return E.call(L, W, Y++);
    }), z;
  }
  function T(m) {
    if (m._status === -1) {
      var E = m._result;
      E = E(), E.then(function(L) {
        (m._status === 0 || m._status === -1) && (m._status = 1, m._result = L);
      }, function(L) {
        (m._status === 0 || m._status === -1) && (m._status = 2, m._result = L);
      }), m._status === -1 && (m._status = 0, m._result = E);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var P = typeof reportError == "function" ? reportError : function(m) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var E = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m), error: m });
      if (!window.dispatchEvent(E)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", m);
      return;
    }
    console.error(m);
  }, V = { map: I, forEach: function(m, E, L) {
    I(m, function() {
      E.apply(this, arguments);
    }, L);
  }, count: function(m) {
    var E = 0;
    return I(m, function() {
      E++;
    }), E;
  }, toArray: function(m) {
    return I(m, function(E) {
      return E;
    }) || [];
  }, only: function(m) {
    if (!D(m)) throw Error("React.Children.only expected to receive a single React element child.");
    return m;
  } };
  return G.Activity = d, G.Children = V, G.Component = y, G.Fragment = n, G.Profiler = r, G.PureComponent = g, G.StrictMode = o, G.Suspense = u, G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S, G.__COMPILER_RUNTIME = { __proto__: null, c: function(m) {
    return S.H.useMemoCache(m);
  } }, G.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, G.cacheSignal = function() {
    return null;
  }, G.cloneElement = function(m, E, L) {
    if (m == null) throw Error("The argument must be a React element, but you passed " + m + ".");
    var z = p({}, m.props), Y = m.key;
    if (E != null) for (W in E.key !== void 0 && (Y = "" + E.key), E) !R.call(E, W) || W === "key" || W === "__self" || W === "__source" || W === "ref" && E.ref === void 0 || (z[W] = E[W]);
    var W = arguments.length - 2;
    if (W === 1) z.children = L;
    else if (1 < W) {
      for (var F = Array(W), j = 0; j < W; j++) F[j] = arguments[j + 2];
      z.children = F;
    }
    return $(m.type, Y, z);
  }, G.createContext = function(m) {
    return m = { $$typeof: s, _currentValue: m, _currentValue2: m, _threadCount: 0, Provider: null, Consumer: null }, m.Provider = m, m.Consumer = { $$typeof: i, _context: m }, m;
  }, G.createElement = function(m, E, L) {
    var z, Y = {}, W = null;
    if (E != null) for (z in E.key !== void 0 && (W = "" + E.key), E) R.call(E, z) && z !== "key" && z !== "__self" && z !== "__source" && (Y[z] = E[z]);
    var F = arguments.length - 2;
    if (F === 1) Y.children = L;
    else if (1 < F) {
      for (var j = Array(F), Z = 0; Z < F; Z++) j[Z] = arguments[Z + 2];
      Y.children = j;
    }
    if (m && m.defaultProps) for (z in F = m.defaultProps, F) Y[z] === void 0 && (Y[z] = F[z]);
    return $(m, W, Y);
  }, G.createRef = function() {
    return { current: null };
  }, G.forwardRef = function(m) {
    return { $$typeof: c, render: m };
  }, G.isValidElement = D, G.lazy = function(m) {
    return { $$typeof: f, _payload: { _status: -1, _result: m }, _init: T };
  }, G.memo = function(m, E) {
    return { $$typeof: a, type: m, compare: E === void 0 ? null : E };
  }, G.startTransition = function(m) {
    var E = S.T, L = {};
    S.T = L;
    try {
      var z = m(), Y = S.S;
      Y !== null && Y(L, z), typeof z == "object" && z !== null && typeof z.then == "function" && z.then(b, P);
    } catch (W) {
      P(W);
    } finally {
      E !== null && L.types !== null && (E.types = L.types), S.T = E;
    }
  }, G.unstable_useCacheRefresh = function() {
    return S.H.useCacheRefresh();
  }, G.use = function(m) {
    return S.H.use(m);
  }, G.useActionState = function(m, E, L) {
    return S.H.useActionState(m, E, L);
  }, G.useCallback = function(m, E) {
    return S.H.useCallback(m, E);
  }, G.useContext = function(m) {
    return S.H.useContext(m);
  }, G.useDebugValue = function() {
  }, G.useDeferredValue = function(m, E) {
    return S.H.useDeferredValue(m, E);
  }, G.useEffect = function(m, E) {
    return S.H.useEffect(m, E);
  }, G.useEffectEvent = function(m) {
    return S.H.useEffectEvent(m);
  }, G.useId = function() {
    return S.H.useId();
  }, G.useImperativeHandle = function(m, E, L) {
    return S.H.useImperativeHandle(m, E, L);
  }, G.useInsertionEffect = function(m, E) {
    return S.H.useInsertionEffect(m, E);
  }, G.useLayoutEffect = function(m, E) {
    return S.H.useLayoutEffect(m, E);
  }, G.useMemo = function(m, E) {
    return S.H.useMemo(m, E);
  }, G.useOptimistic = function(m, E) {
    return S.H.useOptimistic(m, E);
  }, G.useReducer = function(m, E, L) {
    return S.H.useReducer(m, E, L);
  }, G.useRef = function(m) {
    return S.H.useRef(m);
  }, G.useState = function(m) {
    return S.H.useState(m);
  }, G.useSyncExternalStore = function(m, E, L) {
    return S.H.useSyncExternalStore(m, E, L);
  }, G.useTransition = function() {
    return S.H.useTransition();
  }, G.version = "19.2.0", G;
}
var vo;
function Qt() {
  return vo || (vo = 1, mn.exports = _a()), mn.exports;
}
var H = Qt();
const Ea = Tr(H);
var yn = { exports: {} }, ce = {};
var _o;
function ba() {
  if (_o) return ce;
  _o = 1;
  var e3 = Qt();
  function t(u) {
    var a = "https://react.dev/errors/" + u;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var f = 2; f < arguments.length; f++) a += "&args[]=" + encodeURIComponent(arguments[f]);
    }
    return "Minified React error #" + u + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function n() {
  }
  var o = { d: { f: n, r: function() {
    throw Error(t(522));
  }, D: n, C: n, L: n, m: n, X: n, S: n, M: n }, p: 0, findDOMNode: null }, r = Symbol.for("react.portal");
  function i(u, a, f) {
    var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: r, key: d == null ? null : "" + d, children: u, containerInfo: a, implementation: f };
  }
  var s = e3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function c(u, a) {
    if (u === "font") return "";
    if (typeof a == "string") return a === "use-credentials" ? a : "";
  }
  return ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, ce.createPortal = function(u, a) {
    var f = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11) throw Error(t(299));
    return i(u, a, null, f);
  }, ce.flushSync = function(u) {
    var a = s.T, f = o.p;
    try {
      if (s.T = null, o.p = 2, u) return u();
    } finally {
      s.T = a, o.p = f, o.d.f();
    }
  }, ce.preconnect = function(u, a) {
    typeof u == "string" && (a ? (a = a.crossOrigin, a = typeof a == "string" ? a === "use-credentials" ? a : "" : void 0) : a = null, o.d.C(u, a));
  }, ce.prefetchDNS = function(u) {
    typeof u == "string" && o.d.D(u);
  }, ce.preinit = function(u, a) {
    if (typeof u == "string" && a && typeof a.as == "string") {
      var f = a.as, d = c(f, a.crossOrigin), l = typeof a.integrity == "string" ? a.integrity : void 0, h = typeof a.fetchPriority == "string" ? a.fetchPriority : void 0;
      f === "style" ? o.d.S(u, typeof a.precedence == "string" ? a.precedence : void 0, { crossOrigin: d, integrity: l, fetchPriority: h }) : f === "script" && o.d.X(u, { crossOrigin: d, integrity: l, fetchPriority: h, nonce: typeof a.nonce == "string" ? a.nonce : void 0 });
    }
  }, ce.preinitModule = function(u, a) {
    if (typeof u == "string") if (typeof a == "object" && a !== null) {
      if (a.as == null || a.as === "script") {
        var f = c(a.as, a.crossOrigin);
        o.d.M(u, { crossOrigin: f, integrity: typeof a.integrity == "string" ? a.integrity : void 0, nonce: typeof a.nonce == "string" ? a.nonce : void 0 });
      }
    } else a == null && o.d.M(u);
  }, ce.preload = function(u, a) {
    if (typeof u == "string" && typeof a == "object" && a !== null && typeof a.as == "string") {
      var f = a.as, d = c(f, a.crossOrigin);
      o.d.L(u, f, { crossOrigin: d, integrity: typeof a.integrity == "string" ? a.integrity : void 0, nonce: typeof a.nonce == "string" ? a.nonce : void 0, type: typeof a.type == "string" ? a.type : void 0, fetchPriority: typeof a.fetchPriority == "string" ? a.fetchPriority : void 0, referrerPolicy: typeof a.referrerPolicy == "string" ? a.referrerPolicy : void 0, imageSrcSet: typeof a.imageSrcSet == "string" ? a.imageSrcSet : void 0, imageSizes: typeof a.imageSizes == "string" ? a.imageSizes : void 0, media: typeof a.media == "string" ? a.media : void 0 });
    }
  }, ce.preloadModule = function(u, a) {
    if (typeof u == "string") if (a) {
      var f = c(a.as, a.crossOrigin);
      o.d.m(u, { as: typeof a.as == "string" && a.as !== "script" ? a.as : void 0, crossOrigin: f, integrity: typeof a.integrity == "string" ? a.integrity : void 0 });
    } else o.d.m(u);
  }, ce.requestFormReset = function(u) {
    o.d.r(u);
  }, ce.unstable_batchedUpdates = function(u, a) {
    return u(a);
  }, ce.useFormState = function(u, a, f) {
    return s.H.useFormState(u, a, f);
  }, ce.useFormStatus = function() {
    return s.H.useHostTransitionStatus();
  }, ce.version = "19.2.0", ce;
}
var Eo;
function Sa() {
  if (Eo) return yn.exports;
  Eo = 1;
  function e3() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e3);
    } catch (t) {
      console.error(t);
    }
  }
  return e3(), yn.exports = ba(), yn.exports;
}
var Tg = Sa();
function se(e3) {
  if (typeof e3 == "string" || typeof e3 == "number") return "" + e3;
  let t = "";
  if (Array.isArray(e3)) for (let n = 0, o; n < e3.length; n++) (o = se(e3[n])) !== "" && (t += (t && " ") + o);
  else for (let n in e3) e3[n] && (t += (t && " ") + n);
  return t;
}
var Na = { value: () => {
} };
function Jt() {
  for (var e3 = 0, t = arguments.length, n = {}, o; e3 < t; ++e3) {
    if (!(o = arguments[e3] + "") || o in n || /[\s.]/.test(o)) throw new Error("illegal type: " + o);
    n[o] = [];
  }
  return new Dt(n);
}
function Dt(e3) {
  this._ = e3;
}
function Ca(e3, t) {
  return e3.trim().split(/^|\s+/).map(function(n) {
    var o = "", r = n.indexOf(".");
    if (r >= 0 && (o = n.slice(r + 1), n = n.slice(0, r)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: o };
  });
}
Dt.prototype = Jt.prototype = { constructor: Dt, on: function(e3, t) {
  var n = this._, o = Ca(e3 + "", n), r, i = -1, s = o.length;
  if (arguments.length < 2) {
    for (; ++i < s; ) if ((r = (e3 = o[i]).type) && (r = Ma(n[r], e3.name))) return r;
    return;
  }
  if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
  for (; ++i < s; ) if (r = (e3 = o[i]).type) n[r] = bo(n[r], e3.name, t);
  else if (t == null) for (r in n) n[r] = bo(n[r], e3.name, null);
  return this;
}, copy: function() {
  var e3 = {}, t = this._;
  for (var n in t) e3[n] = t[n].slice();
  return new Dt(e3);
}, call: function(e3, t) {
  if ((r = arguments.length - 2) > 0) for (var n = new Array(r), o = 0, r, i; o < r; ++o) n[o] = arguments[o + 2];
  if (!this._.hasOwnProperty(e3)) throw new Error("unknown type: " + e3);
  for (i = this._[e3], o = 0, r = i.length; o < r; ++o) i[o].value.apply(t, n);
}, apply: function(e3, t, n) {
  if (!this._.hasOwnProperty(e3)) throw new Error("unknown type: " + e3);
  for (var o = this._[e3], r = 0, i = o.length; r < i; ++r) o[r].value.apply(t, n);
} };
function Ma(e3, t) {
  for (var n = 0, o = e3.length, r; n < o; ++n) if ((r = e3[n]).name === t) return r.value;
}
function bo(e3, t, n) {
  for (var o = 0, r = e3.length; o < r; ++o) if (e3[o].name === t) {
    e3[o] = Na, e3 = e3.slice(0, o).concat(e3.slice(o + 1));
    break;
  }
  return n != null && e3.push({ name: t, value: n }), e3;
}
var kn = "http://www.w3.org/1999/xhtml";
const So = { svg: "http://www.w3.org/2000/svg", xhtml: kn, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };
function en(e3) {
  var t = e3 += "", n = t.indexOf(":");
  return n >= 0 && (t = e3.slice(0, n)) !== "xmlns" && (e3 = e3.slice(n + 1)), So.hasOwnProperty(t) ? { space: So[t], local: e3 } : e3;
}
function Aa(e3) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === kn && t.documentElement.namespaceURI === kn ? t.createElement(e3) : t.createElementNS(n, e3);
  };
}
function Ia(e3) {
  return function() {
    return this.ownerDocument.createElementNS(e3.space, e3.local);
  };
}
function kr(e3) {
  var t = en(e3);
  return (t.local ? Ia : Aa)(t);
}
function Ta() {
}
function Xn(e3) {
  return e3 == null ? Ta : function() {
    return this.querySelector(e3);
  };
}
function ka(e3) {
  typeof e3 != "function" && (e3 = Xn(e3));
  for (var t = this._groups, n = t.length, o = new Array(n), r = 0; r < n; ++r) for (var i = t[r], s = i.length, c = o[r] = new Array(s), u, a, f = 0; f < s; ++f) (u = i[f]) && (a = e3.call(u, u.__data__, f, i)) && ("__data__" in u && (a.__data__ = u.__data__), c[f] = a);
  return new fe(o, this._parents);
}
function Pa(e3) {
  return e3 == null ? [] : Array.isArray(e3) ? e3 : Array.from(e3);
}
function Ra() {
  return [];
}
function Pr(e3) {
  return e3 == null ? Ra : function() {
    return this.querySelectorAll(e3);
  };
}
function $a(e3) {
  return function() {
    return Pa(e3.apply(this, arguments));
  };
}
function Da(e3) {
  typeof e3 == "function" ? e3 = $a(e3) : e3 = Pr(e3);
  for (var t = this._groups, n = t.length, o = [], r = [], i = 0; i < n; ++i) for (var s = t[i], c = s.length, u, a = 0; a < c; ++a) (u = s[a]) && (o.push(e3.call(u, u.__data__, a, s)), r.push(u));
  return new fe(o, r);
}
function Rr(e3) {
  return function() {
    return this.matches(e3);
  };
}
function $r(e3) {
  return function(t) {
    return t.matches(e3);
  };
}
var Ha = Array.prototype.find;
function Oa(e3) {
  return function() {
    return Ha.call(this.children, e3);
  };
}
function za() {
  return this.firstElementChild;
}
function La(e3) {
  return this.select(e3 == null ? za : Oa(typeof e3 == "function" ? e3 : $r(e3)));
}
var Va = Array.prototype.filter;
function Ba() {
  return Array.from(this.children);
}
function ja(e3) {
  return function() {
    return Va.call(this.children, e3);
  };
}
function Fa(e3) {
  return this.selectAll(e3 == null ? Ba : ja(typeof e3 == "function" ? e3 : $r(e3)));
}
function Ya(e3) {
  typeof e3 != "function" && (e3 = Rr(e3));
  for (var t = this._groups, n = t.length, o = new Array(n), r = 0; r < n; ++r) for (var i = t[r], s = i.length, c = o[r] = [], u, a = 0; a < s; ++a) (u = i[a]) && e3.call(u, u.__data__, a, i) && c.push(u);
  return new fe(o, this._parents);
}
function Dr(e3) {
  return new Array(e3.length);
}
function Xa() {
  return new fe(this._enter || this._groups.map(Dr), this._parents);
}
function Vt(e3, t) {
  this.ownerDocument = e3.ownerDocument, this.namespaceURI = e3.namespaceURI, this._next = null, this._parent = e3, this.__data__ = t;
}
Vt.prototype = { constructor: Vt, appendChild: function(e3) {
  return this._parent.insertBefore(e3, this._next);
}, insertBefore: function(e3, t) {
  return this._parent.insertBefore(e3, t);
}, querySelector: function(e3) {
  return this._parent.querySelector(e3);
}, querySelectorAll: function(e3) {
  return this._parent.querySelectorAll(e3);
} };
function Za(e3) {
  return function() {
    return e3;
  };
}
function Wa(e3, t, n, o, r, i) {
  for (var s = 0, c, u = t.length, a = i.length; s < a; ++s) (c = t[s]) ? (c.__data__ = i[s], o[s] = c) : n[s] = new Vt(e3, i[s]);
  for (; s < u; ++s) (c = t[s]) && (r[s] = c);
}
function qa(e3, t, n, o, r, i, s) {
  var c, u, a = /* @__PURE__ */ new Map(), f = t.length, d = i.length, l = new Array(f), h;
  for (c = 0; c < f; ++c) (u = t[c]) && (l[c] = h = s.call(u, u.__data__, c, t) + "", a.has(h) ? r[c] = u : a.set(h, u));
  for (c = 0; c < d; ++c) h = s.call(e3, i[c], c, i) + "", (u = a.get(h)) ? (o[c] = u, u.__data__ = i[c], a.delete(h)) : n[c] = new Vt(e3, i[c]);
  for (c = 0; c < f; ++c) (u = t[c]) && a.get(l[c]) === u && (r[c] = u);
}
function Ua(e3) {
  return e3.__data__;
}
function Ga(e3, t) {
  if (!arguments.length) return Array.from(this, Ua);
  var n = t ? qa : Wa, o = this._parents, r = this._groups;
  typeof e3 != "function" && (e3 = Za(e3));
  for (var i = r.length, s = new Array(i), c = new Array(i), u = new Array(i), a = 0; a < i; ++a) {
    var f = o[a], d = r[a], l = d.length, h = Ka(e3.call(f, f && f.__data__, a, o)), x = h.length, p = c[a] = new Array(x), _ = s[a] = new Array(x), y = u[a] = new Array(l);
    n(f, d, p, _, y, h, t);
    for (var M = 0, g = 0, w, C; M < x; ++M) if (w = p[M]) {
      for (M >= g && (g = M + 1); !(C = _[g]) && ++g < x; ) ;
      w._next = C || null;
    }
  }
  return s = new fe(s, o), s._enter = c, s._exit = u, s;
}
function Ka(e3) {
  return typeof e3 == "object" && "length" in e3 ? e3 : Array.from(e3);
}
function Qa() {
  return new fe(this._exit || this._groups.map(Dr), this._parents);
}
function Ja(e3, t, n) {
  var o = this.enter(), r = this, i = this.exit();
  return typeof e3 == "function" ? (o = e3(o), o && (o = o.selection())) : o = o.append(e3 + ""), t != null && (r = t(r), r && (r = r.selection())), n == null ? i.remove() : n(i), o && r ? o.merge(r).order() : r;
}
function ec(e3) {
  for (var t = e3.selection ? e3.selection() : e3, n = this._groups, o = t._groups, r = n.length, i = o.length, s = Math.min(r, i), c = new Array(r), u = 0; u < s; ++u) for (var a = n[u], f = o[u], d = a.length, l = c[u] = new Array(d), h, x = 0; x < d; ++x) (h = a[x] || f[x]) && (l[x] = h);
  for (; u < r; ++u) c[u] = n[u];
  return new fe(c, this._parents);
}
function tc() {
  for (var e3 = this._groups, t = -1, n = e3.length; ++t < n; ) for (var o = e3[t], r = o.length - 1, i = o[r], s; --r >= 0; ) (s = o[r]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function nc(e3) {
  e3 || (e3 = oc);
  function t(d, l) {
    return d && l ? e3(d.__data__, l.__data__) : !d - !l;
  }
  for (var n = this._groups, o = n.length, r = new Array(o), i = 0; i < o; ++i) {
    for (var s = n[i], c = s.length, u = r[i] = new Array(c), a, f = 0; f < c; ++f) (a = s[f]) && (u[f] = a);
    u.sort(t);
  }
  return new fe(r, this._parents).order();
}
function oc(e3, t) {
  return e3 < t ? -1 : e3 > t ? 1 : e3 >= t ? 0 : NaN;
}
function rc() {
  var e3 = arguments[0];
  return arguments[0] = this, e3.apply(null, arguments), this;
}
function ic() {
  return Array.from(this);
}
function sc() {
  for (var e3 = this._groups, t = 0, n = e3.length; t < n; ++t) for (var o = e3[t], r = 0, i = o.length; r < i; ++r) {
    var s = o[r];
    if (s) return s;
  }
  return null;
}
function ac() {
  let e3 = 0;
  for (const t of this) ++e3;
  return e3;
}
function cc() {
  return !this.node();
}
function uc(e3) {
  for (var t = this._groups, n = 0, o = t.length; n < o; ++n) for (var r = t[n], i = 0, s = r.length, c; i < s; ++i) (c = r[i]) && e3.call(c, c.__data__, i, r);
  return this;
}
function lc(e3) {
  return function() {
    this.removeAttribute(e3);
  };
}
function fc(e3) {
  return function() {
    this.removeAttributeNS(e3.space, e3.local);
  };
}
function dc(e3, t) {
  return function() {
    this.setAttribute(e3, t);
  };
}
function hc(e3, t) {
  return function() {
    this.setAttributeNS(e3.space, e3.local, t);
  };
}
function gc(e3, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e3) : this.setAttribute(e3, n);
  };
}
function pc(e3, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e3.space, e3.local) : this.setAttributeNS(e3.space, e3.local, n);
  };
}
function mc(e3, t) {
  var n = en(e3);
  if (arguments.length < 2) {
    var o = this.node();
    return n.local ? o.getAttributeNS(n.space, n.local) : o.getAttribute(n);
  }
  return this.each((t == null ? n.local ? fc : lc : typeof t == "function" ? n.local ? pc : gc : n.local ? hc : dc)(n, t));
}
function Hr(e3) {
  return e3.ownerDocument && e3.ownerDocument.defaultView || e3.document && e3 || e3.defaultView;
}
function yc(e3) {
  return function() {
    this.style.removeProperty(e3);
  };
}
function xc(e3, t, n) {
  return function() {
    this.style.setProperty(e3, t, n);
  };
}
function wc(e3, t, n) {
  return function() {
    var o = t.apply(this, arguments);
    o == null ? this.style.removeProperty(e3) : this.style.setProperty(e3, o, n);
  };
}
function vc(e3, t, n) {
  return arguments.length > 1 ? this.each((t == null ? yc : typeof t == "function" ? wc : xc)(e3, t, n ?? "")) : Xe(this.node(), e3);
}
function Xe(e3, t) {
  return e3.style.getPropertyValue(t) || Hr(e3).getComputedStyle(e3, null).getPropertyValue(t);
}
function _c(e3) {
  return function() {
    delete this[e3];
  };
}
function Ec(e3, t) {
  return function() {
    this[e3] = t;
  };
}
function bc(e3, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e3] : this[e3] = n;
  };
}
function Sc(e3, t) {
  return arguments.length > 1 ? this.each((t == null ? _c : typeof t == "function" ? bc : Ec)(e3, t)) : this.node()[e3];
}
function Or(e3) {
  return e3.trim().split(/^|\s+/);
}
function Zn(e3) {
  return e3.classList || new zr(e3);
}
function zr(e3) {
  this._node = e3, this._names = Or(e3.getAttribute("class") || "");
}
zr.prototype = { add: function(e3) {
  var t = this._names.indexOf(e3);
  t < 0 && (this._names.push(e3), this._node.setAttribute("class", this._names.join(" ")));
}, remove: function(e3) {
  var t = this._names.indexOf(e3);
  t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
}, contains: function(e3) {
  return this._names.indexOf(e3) >= 0;
} };
function Lr(e3, t) {
  for (var n = Zn(e3), o = -1, r = t.length; ++o < r; ) n.add(t[o]);
}
function Vr(e3, t) {
  for (var n = Zn(e3), o = -1, r = t.length; ++o < r; ) n.remove(t[o]);
}
function Nc(e3) {
  return function() {
    Lr(this, e3);
  };
}
function Cc(e3) {
  return function() {
    Vr(this, e3);
  };
}
function Mc(e3, t) {
  return function() {
    (t.apply(this, arguments) ? Lr : Vr)(this, e3);
  };
}
function Ac(e3, t) {
  var n = Or(e3 + "");
  if (arguments.length < 2) {
    for (var o = Zn(this.node()), r = -1, i = n.length; ++r < i; ) if (!o.contains(n[r])) return false;
    return true;
  }
  return this.each((typeof t == "function" ? Mc : t ? Nc : Cc)(n, t));
}
function Ic() {
  this.textContent = "";
}
function Tc(e3) {
  return function() {
    this.textContent = e3;
  };
}
function kc(e3) {
  return function() {
    var t = e3.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Pc(e3) {
  return arguments.length ? this.each(e3 == null ? Ic : (typeof e3 == "function" ? kc : Tc)(e3)) : this.node().textContent;
}
function Rc() {
  this.innerHTML = "";
}
function $c(e3) {
  return function() {
    this.innerHTML = e3;
  };
}
function Dc(e3) {
  return function() {
    var t = e3.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Hc(e3) {
  return arguments.length ? this.each(e3 == null ? Rc : (typeof e3 == "function" ? Dc : $c)(e3)) : this.node().innerHTML;
}
function Oc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function zc() {
  return this.each(Oc);
}
function Lc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Vc() {
  return this.each(Lc);
}
function Bc(e3) {
  var t = typeof e3 == "function" ? e3 : kr(e3);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function jc() {
  return null;
}
function Fc(e3, t) {
  var n = typeof e3 == "function" ? e3 : kr(e3), o = t == null ? jc : typeof t == "function" ? t : Xn(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), o.apply(this, arguments) || null);
  });
}
function Yc() {
  var e3 = this.parentNode;
  e3 && e3.removeChild(this);
}
function Xc() {
  return this.each(Yc);
}
function Zc() {
  var e3 = this.cloneNode(false), t = this.parentNode;
  return t ? t.insertBefore(e3, this.nextSibling) : e3;
}
function Wc() {
  var e3 = this.cloneNode(true), t = this.parentNode;
  return t ? t.insertBefore(e3, this.nextSibling) : e3;
}
function qc(e3) {
  return this.select(e3 ? Wc : Zc);
}
function Uc(e3) {
  return arguments.length ? this.property("__data__", e3) : this.node().__data__;
}
function Gc(e3) {
  return function(t) {
    e3.call(this, t, this.__data__);
  };
}
function Kc(e3) {
  return e3.trim().split(/^|\s+/).map(function(t) {
    var n = "", o = t.indexOf(".");
    return o >= 0 && (n = t.slice(o + 1), t = t.slice(0, o)), { type: t, name: n };
  });
}
function Qc(e3) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, o = -1, r = t.length, i; n < r; ++n) i = t[n], (!e3.type || i.type === e3.type) && i.name === e3.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++o] = i;
      ++o ? t.length = o : delete this.__on;
    }
  };
}
function Jc(e3, t, n) {
  return function() {
    var o = this.__on, r, i = Gc(t);
    if (o) {
      for (var s = 0, c = o.length; s < c; ++s) if ((r = o[s]).type === e3.type && r.name === e3.name) {
        this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = i, r.options = n), r.value = t;
        return;
      }
    }
    this.addEventListener(e3.type, i, n), r = { type: e3.type, name: e3.name, value: t, listener: i, options: n }, o ? o.push(r) : this.__on = [r];
  };
}
function eu(e3, t, n) {
  var o = Kc(e3 + ""), r, i = o.length, s;
  if (arguments.length < 2) {
    var c = this.node().__on;
    if (c) {
      for (var u = 0, a = c.length, f; u < a; ++u) for (r = 0, f = c[u]; r < i; ++r) if ((s = o[r]).type === f.type && s.name === f.name) return f.value;
    }
    return;
  }
  for (c = t ? Jc : Qc, r = 0; r < i; ++r) this.each(c(o[r], t, n));
  return this;
}
function Br(e3, t, n) {
  var o = Hr(e3), r = o.CustomEvent;
  typeof r == "function" ? r = new r(t, n) : (r = o.document.createEvent("Event"), n ? (r.initEvent(t, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(t, false, false)), e3.dispatchEvent(r);
}
function tu(e3, t) {
  return function() {
    return Br(this, e3, t);
  };
}
function nu(e3, t) {
  return function() {
    return Br(this, e3, t.apply(this, arguments));
  };
}
function ou(e3, t) {
  return this.each((typeof t == "function" ? nu : tu)(e3, t));
}
function* ru() {
  for (var e3 = this._groups, t = 0, n = e3.length; t < n; ++t) for (var o = e3[t], r = 0, i = o.length, s; r < i; ++r) (s = o[r]) && (yield s);
}
var jr = [null];
function fe(e3, t) {
  this._groups = e3, this._parents = t;
}
function yt() {
  return new fe([[document.documentElement]], jr);
}
function iu() {
  return this;
}
fe.prototype = yt.prototype = { constructor: fe, select: ka, selectAll: Da, selectChild: La, selectChildren: Fa, filter: Ya, data: Ga, enter: Xa, exit: Qa, join: Ja, merge: ec, selection: iu, order: tc, sort: nc, call: rc, nodes: ic, node: sc, size: ac, empty: cc, each: uc, attr: mc, style: vc, property: Sc, classed: Ac, text: Pc, html: Hc, raise: zc, lower: Vc, append: Bc, insert: Fc, remove: Xc, clone: qc, datum: Uc, on: eu, dispatch: ou, [Symbol.iterator]: ru };
function le(e3) {
  return typeof e3 == "string" ? new fe([[document.querySelector(e3)]], [document.documentElement]) : new fe([[e3]], jr);
}
function su(e3) {
  let t;
  for (; t = e3.sourceEvent; ) e3 = t;
  return e3;
}
function de(e3, t) {
  if (e3 = su(e3), t === void 0 && (t = e3.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var o = n.createSVGPoint();
      return o.x = e3.clientX, o.y = e3.clientY, o = o.matrixTransform(t.getScreenCTM().inverse()), [o.x, o.y];
    }
    if (t.getBoundingClientRect) {
      var r = t.getBoundingClientRect();
      return [e3.clientX - r.left - t.clientLeft, e3.clientY - r.top - t.clientTop];
    }
  }
  return [e3.pageX, e3.pageY];
}
const au = { passive: false }, at = { capture: true, passive: false };
function xn(e3) {
  e3.stopImmediatePropagation();
}
function Fe(e3) {
  e3.preventDefault(), e3.stopImmediatePropagation();
}
function Fr(e3) {
  var t = e3.document.documentElement, n = le(e3).on("dragstart.drag", Fe, at);
  "onselectstart" in t ? n.on("selectstart.drag", Fe, at) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Yr(e3, t) {
  var n = e3.document.documentElement, o = le(e3).on("dragstart.drag", null);
  t && (o.on("click.drag", Fe, at), setTimeout(function() {
    o.on("click.drag", null);
  }, 0)), "onselectstart" in n ? o.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Ct = (e3) => () => e3;
function Pn(e3, { sourceEvent: t, subject: n, target: o, identifier: r, active: i, x: s, y: c, dx: u, dy: a, dispatch: f }) {
  Object.defineProperties(this, { type: { value: e3, enumerable: true, configurable: true }, sourceEvent: { value: t, enumerable: true, configurable: true }, subject: { value: n, enumerable: true, configurable: true }, target: { value: o, enumerable: true, configurable: true }, identifier: { value: r, enumerable: true, configurable: true }, active: { value: i, enumerable: true, configurable: true }, x: { value: s, enumerable: true, configurable: true }, y: { value: c, enumerable: true, configurable: true }, dx: { value: u, enumerable: true, configurable: true }, dy: { value: a, enumerable: true, configurable: true }, _: { value: f } });
}
Pn.prototype.on = function() {
  var e3 = this._.on.apply(this._, arguments);
  return e3 === this._ ? this : e3;
};
function cu(e3) {
  return !e3.ctrlKey && !e3.button;
}
function uu() {
  return this.parentNode;
}
function lu(e3, t) {
  return t ?? { x: e3.x, y: e3.y };
}
function fu() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Xr() {
  var e3 = cu, t = uu, n = lu, o = fu, r = {}, i = Jt("start", "drag", "end"), s = 0, c, u, a, f, d = 0;
  function l(w) {
    w.on("mousedown.drag", h).filter(o).on("touchstart.drag", _).on("touchmove.drag", y, au).on("touchend.drag touchcancel.drag", M).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(w, C) {
    if (!(f || !e3.call(this, w, C))) {
      var b = g(this, t.call(this, w, C), w, C, "mouse");
      b && (le(w.view).on("mousemove.drag", x, at).on("mouseup.drag", p, at), Fr(w.view), xn(w), a = false, c = w.clientX, u = w.clientY, b("start", w));
    }
  }
  function x(w) {
    if (Fe(w), !a) {
      var C = w.clientX - c, b = w.clientY - u;
      a = C * C + b * b > d;
    }
    r.mouse("drag", w);
  }
  function p(w) {
    le(w.view).on("mousemove.drag mouseup.drag", null), Yr(w.view, a), Fe(w), r.mouse("end", w);
  }
  function _(w, C) {
    if (e3.call(this, w, C)) {
      var b = w.changedTouches, S = t.call(this, w, C), R = b.length, $, X;
      for ($ = 0; $ < R; ++$) (X = g(this, S, w, C, b[$].identifier, b[$])) && (xn(w), X("start", w, b[$]));
    }
  }
  function y(w) {
    var C = w.changedTouches, b = C.length, S, R;
    for (S = 0; S < b; ++S) (R = r[C[S].identifier]) && (Fe(w), R("drag", w, C[S]));
  }
  function M(w) {
    var C = w.changedTouches, b = C.length, S, R;
    for (f && clearTimeout(f), f = setTimeout(function() {
      f = null;
    }, 500), S = 0; S < b; ++S) (R = r[C[S].identifier]) && (xn(w), R("end", w, C[S]));
  }
  function g(w, C, b, S, R, $) {
    var X = i.copy(), D = de($ || b, C), O, B, v;
    if ((v = n.call(w, new Pn("beforestart", { sourceEvent: b, target: l, identifier: R, active: s, x: D[0], y: D[1], dx: 0, dy: 0, dispatch: X }), S)) != null) return O = v.x - D[0] || 0, B = v.y - D[1] || 0, function A(N, I, T) {
      var P = D, V;
      switch (N) {
        case "start":
          r[R] = A, V = s++;
          break;
        case "end":
          delete r[R], --s;
        case "drag":
          D = de(T || I, C), V = s;
          break;
      }
      X.call(N, w, new Pn(N, { sourceEvent: I, subject: v, target: l, identifier: R, active: V, x: D[0] + O, y: D[1] + B, dx: D[0] - P[0], dy: D[1] - P[1], dispatch: X }), S);
    };
  }
  return l.filter = function(w) {
    return arguments.length ? (e3 = typeof w == "function" ? w : Ct(!!w), l) : e3;
  }, l.container = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : Ct(w), l) : t;
  }, l.subject = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : Ct(w), l) : n;
  }, l.touchable = function(w) {
    return arguments.length ? (o = typeof w == "function" ? w : Ct(!!w), l) : o;
  }, l.on = function() {
    var w = i.on.apply(i, arguments);
    return w === i ? l : w;
  }, l.clickDistance = function(w) {
    return arguments.length ? (d = (w = +w) * w, l) : Math.sqrt(d);
  }, l;
}
function Wn(e3, t, n) {
  e3.prototype = t.prototype = n, n.constructor = e3;
}
function Zr(e3, t) {
  var n = Object.create(e3.prototype);
  for (var o in t) n[o] = t[o];
  return n;
}
function xt() {
}
var ct = 0.7, Bt = 1 / ct, Ye = "\\s*([+-]?\\d+)\\s*", ut = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", xe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", du = /^#([0-9a-f]{3,8})$/, hu = new RegExp(`^rgb\\(${Ye},${Ye},${Ye}\\)$`), gu = new RegExp(`^rgb\\(${xe},${xe},${xe}\\)$`), pu = new RegExp(`^rgba\\(${Ye},${Ye},${Ye},${ut}\\)$`), mu = new RegExp(`^rgba\\(${xe},${xe},${xe},${ut}\\)$`), yu = new RegExp(`^hsl\\(${ut},${xe},${xe}\\)$`), xu = new RegExp(`^hsla\\(${ut},${xe},${xe},${ut}\\)$`), No = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
Wn(xt, De, { copy(e3) {
  return Object.assign(new this.constructor(), this, e3);
}, displayable() {
  return this.rgb().displayable();
}, hex: Co, formatHex: Co, formatHex8: wu, formatHsl: vu, formatRgb: Mo, toString: Mo });
function Co() {
  return this.rgb().formatHex();
}
function wu() {
  return this.rgb().formatHex8();
}
function vu() {
  return Wr(this).formatHsl();
}
function Mo() {
  return this.rgb().formatRgb();
}
function De(e3) {
  var t, n;
  return e3 = (e3 + "").trim().toLowerCase(), (t = du.exec(e3)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ao(t) : n === 3 ? new ue(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Mt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Mt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = hu.exec(e3)) ? new ue(t[1], t[2], t[3], 1) : (t = gu.exec(e3)) ? new ue(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = pu.exec(e3)) ? Mt(t[1], t[2], t[3], t[4]) : (t = mu.exec(e3)) ? Mt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = yu.exec(e3)) ? ko(t[1], t[2] / 100, t[3] / 100, 1) : (t = xu.exec(e3)) ? ko(t[1], t[2] / 100, t[3] / 100, t[4]) : No.hasOwnProperty(e3) ? Ao(No[e3]) : e3 === "transparent" ? new ue(NaN, NaN, NaN, 0) : null;
}
function Ao(e3) {
  return new ue(e3 >> 16 & 255, e3 >> 8 & 255, e3 & 255, 1);
}
function Mt(e3, t, n, o) {
  return o <= 0 && (e3 = t = n = NaN), new ue(e3, t, n, o);
}
function _u(e3) {
  return e3 instanceof xt || (e3 = De(e3)), e3 ? (e3 = e3.rgb(), new ue(e3.r, e3.g, e3.b, e3.opacity)) : new ue();
}
function Rn(e3, t, n, o) {
  return arguments.length === 1 ? _u(e3) : new ue(e3, t, n, o ?? 1);
}
function ue(e3, t, n, o) {
  this.r = +e3, this.g = +t, this.b = +n, this.opacity = +o;
}
Wn(ue, Rn, Zr(xt, { brighter(e3) {
  return e3 = e3 == null ? Bt : Math.pow(Bt, e3), new ue(this.r * e3, this.g * e3, this.b * e3, this.opacity);
}, darker(e3) {
  return e3 = e3 == null ? ct : Math.pow(ct, e3), new ue(this.r * e3, this.g * e3, this.b * e3, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new ue(Re(this.r), Re(this.g), Re(this.b), jt(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: Io, formatHex: Io, formatHex8: Eu, formatRgb: To, toString: To }));
function Io() {
  return `#${Pe(this.r)}${Pe(this.g)}${Pe(this.b)}`;
}
function Eu() {
  return `#${Pe(this.r)}${Pe(this.g)}${Pe(this.b)}${Pe((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function To() {
  const e3 = jt(this.opacity);
  return `${e3 === 1 ? "rgb(" : "rgba("}${Re(this.r)}, ${Re(this.g)}, ${Re(this.b)}${e3 === 1 ? ")" : `, ${e3})`}`;
}
function jt(e3) {
  return isNaN(e3) ? 1 : Math.max(0, Math.min(1, e3));
}
function Re(e3) {
  return Math.max(0, Math.min(255, Math.round(e3) || 0));
}
function Pe(e3) {
  return e3 = Re(e3), (e3 < 16 ? "0" : "") + e3.toString(16);
}
function ko(e3, t, n, o) {
  return o <= 0 ? e3 = t = n = NaN : n <= 0 || n >= 1 ? e3 = t = NaN : t <= 0 && (e3 = NaN), new he(e3, t, n, o);
}
function Wr(e3) {
  if (e3 instanceof he) return new he(e3.h, e3.s, e3.l, e3.opacity);
  if (e3 instanceof xt || (e3 = De(e3)), !e3) return new he();
  if (e3 instanceof he) return e3;
  e3 = e3.rgb();
  var t = e3.r / 255, n = e3.g / 255, o = e3.b / 255, r = Math.min(t, n, o), i = Math.max(t, n, o), s = NaN, c = i - r, u = (i + r) / 2;
  return c ? (t === i ? s = (n - o) / c + (n < o) * 6 : n === i ? s = (o - t) / c + 2 : s = (t - n) / c + 4, c /= u < 0.5 ? i + r : 2 - i - r, s *= 60) : c = u > 0 && u < 1 ? 0 : s, new he(s, c, u, e3.opacity);
}
function bu(e3, t, n, o) {
  return arguments.length === 1 ? Wr(e3) : new he(e3, t, n, o ?? 1);
}
function he(e3, t, n, o) {
  this.h = +e3, this.s = +t, this.l = +n, this.opacity = +o;
}
Wn(he, bu, Zr(xt, { brighter(e3) {
  return e3 = e3 == null ? Bt : Math.pow(Bt, e3), new he(this.h, this.s, this.l * e3, this.opacity);
}, darker(e3) {
  return e3 = e3 == null ? ct : Math.pow(ct, e3), new he(this.h, this.s, this.l * e3, this.opacity);
}, rgb() {
  var e3 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e3) || isNaN(this.s) ? 0 : this.s, n = this.l, o = n + (n < 0.5 ? n : 1 - n) * t, r = 2 * n - o;
  return new ue(wn(e3 >= 240 ? e3 - 240 : e3 + 120, r, o), wn(e3, r, o), wn(e3 < 120 ? e3 + 240 : e3 - 120, r, o), this.opacity);
}, clamp() {
  return new he(Po(this.h), At(this.s), At(this.l), jt(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  const e3 = jt(this.opacity);
  return `${e3 === 1 ? "hsl(" : "hsla("}${Po(this.h)}, ${At(this.s) * 100}%, ${At(this.l) * 100}%${e3 === 1 ? ")" : `, ${e3})`}`;
} }));
function Po(e3) {
  return e3 = (e3 || 0) % 360, e3 < 0 ? e3 + 360 : e3;
}
function At(e3) {
  return Math.max(0, Math.min(1, e3 || 0));
}
function wn(e3, t, n) {
  return (e3 < 60 ? t + (n - t) * e3 / 60 : e3 < 180 ? n : e3 < 240 ? t + (n - t) * (240 - e3) / 60 : t) * 255;
}
const qn = (e3) => () => e3;
function Su(e3, t) {
  return function(n) {
    return e3 + n * t;
  };
}
function Nu(e3, t, n) {
  return e3 = Math.pow(e3, n), t = Math.pow(t, n) - e3, n = 1 / n, function(o) {
    return Math.pow(e3 + o * t, n);
  };
}
function Cu(e3) {
  return (e3 = +e3) == 1 ? qr : function(t, n) {
    return n - t ? Nu(t, n, e3) : qn(isNaN(t) ? n : t);
  };
}
function qr(e3, t) {
  var n = t - e3;
  return n ? Su(e3, n) : qn(isNaN(e3) ? t : e3);
}
const Ft = (function e(t) {
  var n = Cu(t);
  function o(r, i) {
    var s = n((r = Rn(r)).r, (i = Rn(i)).r), c = n(r.g, i.g), u = n(r.b, i.b), a = qr(r.opacity, i.opacity);
    return function(f) {
      return r.r = s(f), r.g = c(f), r.b = u(f), r.opacity = a(f), r + "";
    };
  }
  return o.gamma = e, o;
})(1);
function Mu(e3, t) {
  t || (t = []);
  var n = e3 ? Math.min(t.length, e3.length) : 0, o = t.slice(), r;
  return function(i) {
    for (r = 0; r < n; ++r) o[r] = e3[r] * (1 - i) + t[r] * i;
    return o;
  };
}
function Au(e3) {
  return ArrayBuffer.isView(e3) && !(e3 instanceof DataView);
}
function Iu(e3, t) {
  var n = t ? t.length : 0, o = e3 ? Math.min(n, e3.length) : 0, r = new Array(o), i = new Array(n), s;
  for (s = 0; s < o; ++s) r[s] = it(e3[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(c) {
    for (s = 0; s < o; ++s) i[s] = r[s](c);
    return i;
  };
}
function Tu(e3, t) {
  var n = /* @__PURE__ */ new Date();
  return e3 = +e3, t = +t, function(o) {
    return n.setTime(e3 * (1 - o) + t * o), n;
  };
}
function ye(e3, t) {
  return e3 = +e3, t = +t, function(n) {
    return e3 * (1 - n) + t * n;
  };
}
function ku(e3, t) {
  var n = {}, o = {}, r;
  (e3 === null || typeof e3 != "object") && (e3 = {}), (t === null || typeof t != "object") && (t = {});
  for (r in t) r in e3 ? n[r] = it(e3[r], t[r]) : o[r] = t[r];
  return function(i) {
    for (r in n) o[r] = n[r](i);
    return o;
  };
}
var $n = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, vn = new RegExp($n.source, "g");
function Pu(e3) {
  return function() {
    return e3;
  };
}
function Ru(e3) {
  return function(t) {
    return e3(t) + "";
  };
}
function Ur(e3, t) {
  var n = $n.lastIndex = vn.lastIndex = 0, o, r, i, s = -1, c = [], u = [];
  for (e3 = e3 + "", t = t + ""; (o = $n.exec(e3)) && (r = vn.exec(t)); ) (i = r.index) > n && (i = t.slice(n, i), c[s] ? c[s] += i : c[++s] = i), (o = o[0]) === (r = r[0]) ? c[s] ? c[s] += r : c[++s] = r : (c[++s] = null, u.push({ i: s, x: ye(o, r) })), n = vn.lastIndex;
  return n < t.length && (i = t.slice(n), c[s] ? c[s] += i : c[++s] = i), c.length < 2 ? u[0] ? Ru(u[0].x) : Pu(t) : (t = u.length, function(a) {
    for (var f = 0, d; f < t; ++f) c[(d = u[f]).i] = d.x(a);
    return c.join("");
  });
}
function it(e3, t) {
  var n = typeof t, o;
  return t == null || n === "boolean" ? qn(t) : (n === "number" ? ye : n === "string" ? (o = De(t)) ? (t = o, Ft) : Ur : t instanceof De ? Ft : t instanceof Date ? Tu : Au(t) ? Mu : Array.isArray(t) ? Iu : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? ku : ye)(e3, t);
}
var Ro = 180 / Math.PI, Dn = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
function Gr(e3, t, n, o, r, i) {
  var s, c, u;
  return (s = Math.sqrt(e3 * e3 + t * t)) && (e3 /= s, t /= s), (u = e3 * n + t * o) && (n -= e3 * u, o -= t * u), (c = Math.sqrt(n * n + o * o)) && (n /= c, o /= c, u /= c), e3 * o < t * n && (e3 = -e3, t = -t, u = -u, s = -s), { translateX: r, translateY: i, rotate: Math.atan2(t, e3) * Ro, skewX: Math.atan(u) * Ro, scaleX: s, scaleY: c };
}
var It;
function $u(e3) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e3 + "");
  return t.isIdentity ? Dn : Gr(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Du(e3) {
  return e3 == null || (It || (It = document.createElementNS("http://www.w3.org/2000/svg", "g")), It.setAttribute("transform", e3), !(e3 = It.transform.baseVal.consolidate())) ? Dn : (e3 = e3.matrix, Gr(e3.a, e3.b, e3.c, e3.d, e3.e, e3.f));
}
function Kr(e3, t, n, o) {
  function r(a) {
    return a.length ? a.pop() + " " : "";
  }
  function i(a, f, d, l, h, x) {
    if (a !== d || f !== l) {
      var p = h.push("translate(", null, t, null, n);
      x.push({ i: p - 4, x: ye(a, d) }, { i: p - 2, x: ye(f, l) });
    } else (d || l) && h.push("translate(" + d + t + l + n);
  }
  function s(a, f, d, l) {
    a !== f ? (a - f > 180 ? f += 360 : f - a > 180 && (a += 360), l.push({ i: d.push(r(d) + "rotate(", null, o) - 2, x: ye(a, f) })) : f && d.push(r(d) + "rotate(" + f + o);
  }
  function c(a, f, d, l) {
    a !== f ? l.push({ i: d.push(r(d) + "skewX(", null, o) - 2, x: ye(a, f) }) : f && d.push(r(d) + "skewX(" + f + o);
  }
  function u(a, f, d, l, h, x) {
    if (a !== d || f !== l) {
      var p = h.push(r(h) + "scale(", null, ",", null, ")");
      x.push({ i: p - 4, x: ye(a, d) }, { i: p - 2, x: ye(f, l) });
    } else (d !== 1 || l !== 1) && h.push(r(h) + "scale(" + d + "," + l + ")");
  }
  return function(a, f) {
    var d = [], l = [];
    return a = e3(a), f = e3(f), i(a.translateX, a.translateY, f.translateX, f.translateY, d, l), s(a.rotate, f.rotate, d, l), c(a.skewX, f.skewX, d, l), u(a.scaleX, a.scaleY, f.scaleX, f.scaleY, d, l), a = f = null, function(h) {
      for (var x = -1, p = l.length, _; ++x < p; ) d[(_ = l[x]).i] = _.x(h);
      return d.join("");
    };
  };
}
var Hu = Kr($u, "px, ", "px)", "deg)"), Ou = Kr(Du, ", ", ")", ")"), zu = 1e-12;
function $o(e3) {
  return ((e3 = Math.exp(e3)) + 1 / e3) / 2;
}
function Lu(e3) {
  return ((e3 = Math.exp(e3)) - 1 / e3) / 2;
}
function Vu(e3) {
  return ((e3 = Math.exp(2 * e3)) - 1) / (e3 + 1);
}
const Ht = (function e2(t, n, o) {
  function r(i, s) {
    var c = i[0], u = i[1], a = i[2], f = s[0], d = s[1], l = s[2], h = f - c, x = d - u, p = h * h + x * x, _, y;
    if (p < zu) y = Math.log(l / a) / t, _ = function(S) {
      return [c + S * h, u + S * x, a * Math.exp(t * S * y)];
    };
    else {
      var M = Math.sqrt(p), g = (l * l - a * a + o * p) / (2 * a * n * M), w = (l * l - a * a - o * p) / (2 * l * n * M), C = Math.log(Math.sqrt(g * g + 1) - g), b = Math.log(Math.sqrt(w * w + 1) - w);
      y = (b - C) / t, _ = function(S) {
        var R = S * y, $ = $o(C), X = a / (n * M) * ($ * Vu(t * R + C) - Lu(C));
        return [c + X * h, u + X * x, a * $ / $o(t * R + C)];
      };
    }
    return _.duration = y * 1e3 * t / Math.SQRT2, _;
  }
  return r.rho = function(i) {
    var s = Math.max(1e-3, +i), c = s * s, u = c * c;
    return e2(s, c, u);
  }, r;
})(Math.SQRT2, 2, 4);
var Ze = 0, ot = 0, tt = 0, Qr = 1e3, Yt, rt, Xt = 0, He = 0, tn = 0, lt = typeof performance == "object" && performance.now ? performance : Date, Jr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e3) {
  setTimeout(e3, 17);
};
function Un() {
  return He || (Jr(Bu), He = lt.now() + tn);
}
function Bu() {
  He = 0;
}
function Zt() {
  this._call = this._time = this._next = null;
}
Zt.prototype = ei.prototype = { constructor: Zt, restart: function(e3, t, n) {
  if (typeof e3 != "function") throw new TypeError("callback is not a function");
  n = (n == null ? Un() : +n) + (t == null ? 0 : +t), !this._next && rt !== this && (rt ? rt._next = this : Yt = this, rt = this), this._call = e3, this._time = n, Hn();
}, stop: function() {
  this._call && (this._call = null, this._time = 1 / 0, Hn());
} };
function ei(e3, t, n) {
  var o = new Zt();
  return o.restart(e3, t, n), o;
}
function ju() {
  Un(), ++Ze;
  for (var e3 = Yt, t; e3; ) (t = He - e3._time) >= 0 && e3._call.call(void 0, t), e3 = e3._next;
  --Ze;
}
function Do() {
  He = (Xt = lt.now()) + tn, Ze = ot = 0;
  try {
    ju();
  } finally {
    Ze = 0, Yu(), He = 0;
  }
}
function Fu() {
  var e3 = lt.now(), t = e3 - Xt;
  t > Qr && (tn -= t, Xt = e3);
}
function Yu() {
  for (var e3, t = Yt, n, o = 1 / 0; t; ) t._call ? (o > t._time && (o = t._time), e3 = t, t = t._next) : (n = t._next, t._next = null, t = e3 ? e3._next = n : Yt = n);
  rt = e3, Hn(o);
}
function Hn(e3) {
  if (!Ze) {
    ot && (ot = clearTimeout(ot));
    var t = e3 - He;
    t > 24 ? (e3 < 1 / 0 && (ot = setTimeout(Do, e3 - lt.now() - tn)), tt && (tt = clearInterval(tt))) : (tt || (Xt = lt.now(), tt = setInterval(Fu, Qr)), Ze = 1, Jr(Do));
  }
}
function Ho(e3, t, n) {
  var o = new Zt();
  return t = t == null ? 0 : +t, o.restart((r) => {
    o.stop(), e3(r + t);
  }, t, n), o;
}
var Xu = Jt("start", "end", "cancel", "interrupt"), Zu = [], ti = 0, Oo = 1, On = 2, Ot = 3, zo = 4, zn = 5, zt = 6;
function nn(e3, t, n, o, r, i) {
  var s = e3.__transition;
  if (!s) e3.__transition = {};
  else if (n in s) return;
  Wu(e3, n, { name: t, index: o, group: r, on: Xu, tween: Zu, time: i.time, delay: i.delay, duration: i.duration, ease: i.ease, timer: null, state: ti });
}
function Gn(e3, t) {
  var n = me(e3, t);
  if (n.state > ti) throw new Error("too late; already scheduled");
  return n;
}
function ve(e3, t) {
  var n = me(e3, t);
  if (n.state > Ot) throw new Error("too late; already running");
  return n;
}
function me(e3, t) {
  var n = e3.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Wu(e3, t, n) {
  var o = e3.__transition, r;
  o[t] = n, n.timer = ei(i, 0, n.time);
  function i(a) {
    n.state = Oo, n.timer.restart(s, n.delay, n.time), n.delay <= a && s(a - n.delay);
  }
  function s(a) {
    var f, d, l, h;
    if (n.state !== Oo) return u();
    for (f in o) if (h = o[f], h.name === n.name) {
      if (h.state === Ot) return Ho(s);
      h.state === zo ? (h.state = zt, h.timer.stop(), h.on.call("interrupt", e3, e3.__data__, h.index, h.group), delete o[f]) : +f < t && (h.state = zt, h.timer.stop(), h.on.call("cancel", e3, e3.__data__, h.index, h.group), delete o[f]);
    }
    if (Ho(function() {
      n.state === Ot && (n.state = zo, n.timer.restart(c, n.delay, n.time), c(a));
    }), n.state = On, n.on.call("start", e3, e3.__data__, n.index, n.group), n.state === On) {
      for (n.state = Ot, r = new Array(l = n.tween.length), f = 0, d = -1; f < l; ++f) (h = n.tween[f].value.call(e3, e3.__data__, n.index, n.group)) && (r[++d] = h);
      r.length = d + 1;
    }
  }
  function c(a) {
    for (var f = a < n.duration ? n.ease.call(null, a / n.duration) : (n.timer.restart(u), n.state = zn, 1), d = -1, l = r.length; ++d < l; ) r[d].call(e3, f);
    n.state === zn && (n.on.call("end", e3, e3.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = zt, n.timer.stop(), delete o[t];
    for (var a in o) return;
    delete e3.__transition;
  }
}
function Lt(e3, t) {
  var n = e3.__transition, o, r, i = true, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((o = n[s]).name !== t) {
        i = false;
        continue;
      }
      r = o.state > On && o.state < zn, o.state = zt, o.timer.stop(), o.on.call(r ? "interrupt" : "cancel", e3, e3.__data__, o.index, o.group), delete n[s];
    }
    i && delete e3.__transition;
  }
}
function qu(e3) {
  return this.each(function() {
    Lt(this, e3);
  });
}
function Uu(e3, t) {
  var n, o;
  return function() {
    var r = ve(this, e3), i = r.tween;
    if (i !== n) {
      o = n = i;
      for (var s = 0, c = o.length; s < c; ++s) if (o[s].name === t) {
        o = o.slice(), o.splice(s, 1);
        break;
      }
    }
    r.tween = o;
  };
}
function Gu(e3, t, n) {
  var o, r;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = ve(this, e3), s = i.tween;
    if (s !== o) {
      r = (o = s).slice();
      for (var c = { name: t, value: n }, u = 0, a = r.length; u < a; ++u) if (r[u].name === t) {
        r[u] = c;
        break;
      }
      u === a && r.push(c);
    }
    i.tween = r;
  };
}
function Ku(e3, t) {
  var n = this._id;
  if (e3 += "", arguments.length < 2) {
    for (var o = me(this.node(), n).tween, r = 0, i = o.length, s; r < i; ++r) if ((s = o[r]).name === e3) return s.value;
    return null;
  }
  return this.each((t == null ? Uu : Gu)(n, e3, t));
}
function Kn(e3, t, n) {
  var o = e3._id;
  return e3.each(function() {
    var r = ve(this, o);
    (r.value || (r.value = {}))[t] = n.apply(this, arguments);
  }), function(r) {
    return me(r, o).value[t];
  };
}
function ni(e3, t) {
  var n;
  return (typeof t == "number" ? ye : t instanceof De ? Ft : (n = De(t)) ? (t = n, Ft) : Ur)(e3, t);
}
function Qu(e3) {
  return function() {
    this.removeAttribute(e3);
  };
}
function Ju(e3) {
  return function() {
    this.removeAttributeNS(e3.space, e3.local);
  };
}
function el(e3, t, n) {
  var o, r = n + "", i;
  return function() {
    var s = this.getAttribute(e3);
    return s === r ? null : s === o ? i : i = t(o = s, n);
  };
}
function tl(e3, t, n) {
  var o, r = n + "", i;
  return function() {
    var s = this.getAttributeNS(e3.space, e3.local);
    return s === r ? null : s === o ? i : i = t(o = s, n);
  };
}
function nl(e3, t, n) {
  var o, r, i;
  return function() {
    var s, c = n(this), u;
    return c == null ? void this.removeAttribute(e3) : (s = this.getAttribute(e3), u = c + "", s === u ? null : s === o && u === r ? i : (r = u, i = t(o = s, c)));
  };
}
function ol(e3, t, n) {
  var o, r, i;
  return function() {
    var s, c = n(this), u;
    return c == null ? void this.removeAttributeNS(e3.space, e3.local) : (s = this.getAttributeNS(e3.space, e3.local), u = c + "", s === u ? null : s === o && u === r ? i : (r = u, i = t(o = s, c)));
  };
}
function rl(e3, t) {
  var n = en(e3), o = n === "transform" ? Ou : ni;
  return this.attrTween(e3, typeof t == "function" ? (n.local ? ol : nl)(n, o, Kn(this, "attr." + e3, t)) : t == null ? (n.local ? Ju : Qu)(n) : (n.local ? tl : el)(n, o, t));
}
function il(e3, t) {
  return function(n) {
    this.setAttribute(e3, t.call(this, n));
  };
}
function sl(e3, t) {
  return function(n) {
    this.setAttributeNS(e3.space, e3.local, t.call(this, n));
  };
}
function al(e3, t) {
  var n, o;
  function r() {
    var i = t.apply(this, arguments);
    return i !== o && (n = (o = i) && sl(e3, i)), n;
  }
  return r._value = t, r;
}
function cl(e3, t) {
  var n, o;
  function r() {
    var i = t.apply(this, arguments);
    return i !== o && (n = (o = i) && il(e3, i)), n;
  }
  return r._value = t, r;
}
function ul(e3, t) {
  var n = "attr." + e3;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var o = en(e3);
  return this.tween(n, (o.local ? al : cl)(o, t));
}
function ll(e3, t) {
  return function() {
    Gn(this, e3).delay = +t.apply(this, arguments);
  };
}
function fl(e3, t) {
  return t = +t, function() {
    Gn(this, e3).delay = t;
  };
}
function dl(e3) {
  var t = this._id;
  return arguments.length ? this.each((typeof e3 == "function" ? ll : fl)(t, e3)) : me(this.node(), t).delay;
}
function hl(e3, t) {
  return function() {
    ve(this, e3).duration = +t.apply(this, arguments);
  };
}
function gl(e3, t) {
  return t = +t, function() {
    ve(this, e3).duration = t;
  };
}
function pl(e3) {
  var t = this._id;
  return arguments.length ? this.each((typeof e3 == "function" ? hl : gl)(t, e3)) : me(this.node(), t).duration;
}
function ml(e3, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    ve(this, e3).ease = t;
  };
}
function yl(e3) {
  var t = this._id;
  return arguments.length ? this.each(ml(t, e3)) : me(this.node(), t).ease;
}
function xl(e3, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    ve(this, e3).ease = n;
  };
}
function wl(e3) {
  if (typeof e3 != "function") throw new Error();
  return this.each(xl(this._id, e3));
}
function vl(e3) {
  typeof e3 != "function" && (e3 = Rr(e3));
  for (var t = this._groups, n = t.length, o = new Array(n), r = 0; r < n; ++r) for (var i = t[r], s = i.length, c = o[r] = [], u, a = 0; a < s; ++a) (u = i[a]) && e3.call(u, u.__data__, a, i) && c.push(u);
  return new Se(o, this._parents, this._name, this._id);
}
function _l(e3) {
  if (e3._id !== this._id) throw new Error();
  for (var t = this._groups, n = e3._groups, o = t.length, r = n.length, i = Math.min(o, r), s = new Array(o), c = 0; c < i; ++c) for (var u = t[c], a = n[c], f = u.length, d = s[c] = new Array(f), l, h = 0; h < f; ++h) (l = u[h] || a[h]) && (d[h] = l);
  for (; c < o; ++c) s[c] = t[c];
  return new Se(s, this._parents, this._name, this._id);
}
function El(e3) {
  return (e3 + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function bl(e3, t, n) {
  var o, r, i = El(t) ? Gn : ve;
  return function() {
    var s = i(this, e3), c = s.on;
    c !== o && (r = (o = c).copy()).on(t, n), s.on = r;
  };
}
function Sl(e3, t) {
  var n = this._id;
  return arguments.length < 2 ? me(this.node(), n).on.on(e3) : this.each(bl(n, e3, t));
}
function Nl(e3) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e3) return;
    t && t.removeChild(this);
  };
}
function Cl() {
  return this.on("end.remove", Nl(this._id));
}
function Ml(e3) {
  var t = this._name, n = this._id;
  typeof e3 != "function" && (e3 = Xn(e3));
  for (var o = this._groups, r = o.length, i = new Array(r), s = 0; s < r; ++s) for (var c = o[s], u = c.length, a = i[s] = new Array(u), f, d, l = 0; l < u; ++l) (f = c[l]) && (d = e3.call(f, f.__data__, l, c)) && ("__data__" in f && (d.__data__ = f.__data__), a[l] = d, nn(a[l], t, n, l, a, me(f, n)));
  return new Se(i, this._parents, t, n);
}
function Al(e3) {
  var t = this._name, n = this._id;
  typeof e3 != "function" && (e3 = Pr(e3));
  for (var o = this._groups, r = o.length, i = [], s = [], c = 0; c < r; ++c) for (var u = o[c], a = u.length, f, d = 0; d < a; ++d) if (f = u[d]) {
    for (var l = e3.call(f, f.__data__, d, u), h, x = me(f, n), p = 0, _ = l.length; p < _; ++p) (h = l[p]) && nn(h, t, n, p, l, x);
    i.push(l), s.push(f);
  }
  return new Se(i, s, t, n);
}
var Il = yt.prototype.constructor;
function Tl() {
  return new Il(this._groups, this._parents);
}
function kl(e3, t) {
  var n, o, r;
  return function() {
    var i = Xe(this, e3), s = (this.style.removeProperty(e3), Xe(this, e3));
    return i === s ? null : i === n && s === o ? r : r = t(n = i, o = s);
  };
}
function oi(e3) {
  return function() {
    this.style.removeProperty(e3);
  };
}
function Pl(e3, t, n) {
  var o, r = n + "", i;
  return function() {
    var s = Xe(this, e3);
    return s === r ? null : s === o ? i : i = t(o = s, n);
  };
}
function Rl(e3, t, n) {
  var o, r, i;
  return function() {
    var s = Xe(this, e3), c = n(this), u = c + "";
    return c == null && (u = c = (this.style.removeProperty(e3), Xe(this, e3))), s === u ? null : s === o && u === r ? i : (r = u, i = t(o = s, c));
  };
}
function $l(e3, t) {
  var n, o, r, i = "style." + t, s = "end." + i, c;
  return function() {
    var u = ve(this, e3), a = u.on, f = u.value[i] == null ? c || (c = oi(t)) : void 0;
    (a !== n || r !== f) && (o = (n = a).copy()).on(s, r = f), u.on = o;
  };
}
function Dl(e3, t, n) {
  var o = (e3 += "") == "transform" ? Hu : ni;
  return t == null ? this.styleTween(e3, kl(e3, o)).on("end.style." + e3, oi(e3)) : typeof t == "function" ? this.styleTween(e3, Rl(e3, o, Kn(this, "style." + e3, t))).each($l(this._id, e3)) : this.styleTween(e3, Pl(e3, o, t), n).on("end.style." + e3, null);
}
function Hl(e3, t, n) {
  return function(o) {
    this.style.setProperty(e3, t.call(this, o), n);
  };
}
function Ol(e3, t, n) {
  var o, r;
  function i() {
    var s = t.apply(this, arguments);
    return s !== r && (o = (r = s) && Hl(e3, s, n)), o;
  }
  return i._value = t, i;
}
function zl(e3, t, n) {
  var o = "style." + (e3 += "");
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (t == null) return this.tween(o, null);
  if (typeof t != "function") throw new Error();
  return this.tween(o, Ol(e3, t, n ?? ""));
}
function Ll(e3) {
  return function() {
    this.textContent = e3;
  };
}
function Vl(e3) {
  return function() {
    var t = e3(this);
    this.textContent = t ?? "";
  };
}
function Bl(e3) {
  return this.tween("text", typeof e3 == "function" ? Vl(Kn(this, "text", e3)) : Ll(e3 == null ? "" : e3 + ""));
}
function jl(e3) {
  return function(t) {
    this.textContent = e3.call(this, t);
  };
}
function Fl(e3) {
  var t, n;
  function o() {
    var r = e3.apply(this, arguments);
    return r !== n && (t = (n = r) && jl(r)), t;
  }
  return o._value = e3, o;
}
function Yl(e3) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e3 == null) return this.tween(t, null);
  if (typeof e3 != "function") throw new Error();
  return this.tween(t, Fl(e3));
}
function Xl() {
  for (var e3 = this._name, t = this._id, n = ri(), o = this._groups, r = o.length, i = 0; i < r; ++i) for (var s = o[i], c = s.length, u, a = 0; a < c; ++a) if (u = s[a]) {
    var f = me(u, t);
    nn(u, e3, n, a, s, { time: f.time + f.delay + f.duration, delay: 0, duration: f.duration, ease: f.ease });
  }
  return new Se(o, this._parents, e3, n);
}
function Zl() {
  var e3, t, n = this, o = n._id, r = n.size();
  return new Promise(function(i, s) {
    var c = { value: s }, u = { value: function() {
      --r === 0 && i();
    } };
    n.each(function() {
      var a = ve(this, o), f = a.on;
      f !== e3 && (t = (e3 = f).copy(), t._.cancel.push(c), t._.interrupt.push(c), t._.end.push(u)), a.on = t;
    }), r === 0 && i();
  });
}
var Wl = 0;
function Se(e3, t, n, o) {
  this._groups = e3, this._parents = t, this._name = n, this._id = o;
}
function ri() {
  return ++Wl;
}
var Ee = yt.prototype;
Se.prototype = { constructor: Se, select: Ml, selectAll: Al, selectChild: Ee.selectChild, selectChildren: Ee.selectChildren, filter: vl, merge: _l, selection: Tl, transition: Xl, call: Ee.call, nodes: Ee.nodes, node: Ee.node, size: Ee.size, empty: Ee.empty, each: Ee.each, on: Sl, attr: rl, attrTween: ul, style: Dl, styleTween: zl, text: Bl, textTween: Yl, remove: Cl, tween: Ku, delay: dl, duration: pl, ease: yl, easeVarying: wl, end: Zl, [Symbol.iterator]: Ee[Symbol.iterator] };
function ql(e3) {
  return ((e3 *= 2) <= 1 ? e3 * e3 * e3 : (e3 -= 2) * e3 * e3 + 2) / 2;
}
var Ul = { time: null, delay: 0, duration: 250, ease: ql };
function Gl(e3, t) {
  for (var n; !(n = e3.__transition) || !(n = n[t]); ) if (!(e3 = e3.parentNode)) throw new Error(`transition ${t} not found`);
  return n;
}
function Kl(e3) {
  var t, n;
  e3 instanceof Se ? (t = e3._id, e3 = e3._name) : (t = ri(), (n = Ul).time = Un(), e3 = e3 == null ? null : e3 + "");
  for (var o = this._groups, r = o.length, i = 0; i < r; ++i) for (var s = o[i], c = s.length, u, a = 0; a < c; ++a) (u = s[a]) && nn(u, e3, t, a, s, n || Gl(u, t));
  return new Se(o, this._parents, e3, t);
}
yt.prototype.interrupt = qu;
yt.prototype.transition = Kl;
const Tt = (e3) => () => e3;
function Ql(e3, { sourceEvent: t, target: n, transform: o, dispatch: r }) {
  Object.defineProperties(this, { type: { value: e3, enumerable: true, configurable: true }, sourceEvent: { value: t, enumerable: true, configurable: true }, target: { value: n, enumerable: true, configurable: true }, transform: { value: o, enumerable: true, configurable: true }, _: { value: r } });
}
function be(e3, t, n) {
  this.k = e3, this.x = t, this.y = n;
}
be.prototype = { constructor: be, scale: function(e3) {
  return e3 === 1 ? this : new be(this.k * e3, this.x, this.y);
}, translate: function(e3, t) {
  return e3 === 0 & t === 0 ? this : new be(this.k, this.x + this.k * e3, this.y + this.k * t);
}, apply: function(e3) {
  return [e3[0] * this.k + this.x, e3[1] * this.k + this.y];
}, applyX: function(e3) {
  return e3 * this.k + this.x;
}, applyY: function(e3) {
  return e3 * this.k + this.y;
}, invert: function(e3) {
  return [(e3[0] - this.x) / this.k, (e3[1] - this.y) / this.k];
}, invertX: function(e3) {
  return (e3 - this.x) / this.k;
}, invertY: function(e3) {
  return (e3 - this.y) / this.k;
}, rescaleX: function(e3) {
  return e3.copy().domain(e3.range().map(this.invertX, this).map(e3.invert, e3));
}, rescaleY: function(e3) {
  return e3.copy().domain(e3.range().map(this.invertY, this).map(e3.invert, e3));
}, toString: function() {
  return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
} };
var on = new be(1, 0, 0);
ii.prototype = be.prototype;
function ii(e3) {
  for (; !e3.__zoom; ) if (!(e3 = e3.parentNode)) return on;
  return e3.__zoom;
}
function _n(e3) {
  e3.stopImmediatePropagation();
}
function nt(e3) {
  e3.preventDefault(), e3.stopImmediatePropagation();
}
function Jl(e3) {
  return (!e3.ctrlKey || e3.type === "wheel") && !e3.button;
}
function ef() {
  var e3 = this;
  return e3 instanceof SVGElement ? (e3 = e3.ownerSVGElement || e3, e3.hasAttribute("viewBox") ? (e3 = e3.viewBox.baseVal, [[e3.x, e3.y], [e3.x + e3.width, e3.y + e3.height]]) : [[0, 0], [e3.width.baseVal.value, e3.height.baseVal.value]]) : [[0, 0], [e3.clientWidth, e3.clientHeight]];
}
function Lo() {
  return this.__zoom || on;
}
function tf(e3) {
  return -e3.deltaY * (e3.deltaMode === 1 ? 0.05 : e3.deltaMode ? 1 : 2e-3) * (e3.ctrlKey ? 10 : 1);
}
function nf() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function of(e3, t, n) {
  var o = e3.invertX(t[0][0]) - n[0][0], r = e3.invertX(t[1][0]) - n[1][0], i = e3.invertY(t[0][1]) - n[0][1], s = e3.invertY(t[1][1]) - n[1][1];
  return e3.translate(r > o ? (o + r) / 2 : Math.min(0, o) || Math.max(0, r), s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s));
}
function si() {
  var e3 = Jl, t = ef, n = of, o = tf, r = nf, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], c = 250, u = Ht, a = Jt("start", "zoom", "end"), f, d, l, h = 500, x = 150, p = 0, _ = 10;
  function y(v) {
    v.property("__zoom", Lo).on("wheel.zoom", R, { passive: false }).on("mousedown.zoom", $).on("dblclick.zoom", X).filter(r).on("touchstart.zoom", D).on("touchmove.zoom", O).on("touchend.zoom touchcancel.zoom", B).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  y.transform = function(v, A, N, I) {
    var T = v.selection ? v.selection() : v;
    T.property("__zoom", Lo), v !== T ? C(v, A, N, I) : T.interrupt().each(function() {
      b(this, arguments).event(I).start().zoom(null, typeof A == "function" ? A.apply(this, arguments) : A).end();
    });
  }, y.scaleBy = function(v, A, N, I) {
    y.scaleTo(v, function() {
      var T = this.__zoom.k, P = typeof A == "function" ? A.apply(this, arguments) : A;
      return T * P;
    }, N, I);
  }, y.scaleTo = function(v, A, N, I) {
    y.transform(v, function() {
      var T = t.apply(this, arguments), P = this.__zoom, V = N == null ? w(T) : typeof N == "function" ? N.apply(this, arguments) : N, m = P.invert(V), E = typeof A == "function" ? A.apply(this, arguments) : A;
      return n(g(M(P, E), V, m), T, s);
    }, N, I);
  }, y.translateBy = function(v, A, N, I) {
    y.transform(v, function() {
      return n(this.__zoom.translate(typeof A == "function" ? A.apply(this, arguments) : A, typeof N == "function" ? N.apply(this, arguments) : N), t.apply(this, arguments), s);
    }, null, I);
  }, y.translateTo = function(v, A, N, I, T) {
    y.transform(v, function() {
      var P = t.apply(this, arguments), V = this.__zoom, m = I == null ? w(P) : typeof I == "function" ? I.apply(this, arguments) : I;
      return n(on.translate(m[0], m[1]).scale(V.k).translate(typeof A == "function" ? -A.apply(this, arguments) : -A, typeof N == "function" ? -N.apply(this, arguments) : -N), P, s);
    }, I, T);
  };
  function M(v, A) {
    return A = Math.max(i[0], Math.min(i[1], A)), A === v.k ? v : new be(A, v.x, v.y);
  }
  function g(v, A, N) {
    var I = A[0] - N[0] * v.k, T = A[1] - N[1] * v.k;
    return I === v.x && T === v.y ? v : new be(v.k, I, T);
  }
  function w(v) {
    return [(+v[0][0] + +v[1][0]) / 2, (+v[0][1] + +v[1][1]) / 2];
  }
  function C(v, A, N, I) {
    v.on("start.zoom", function() {
      b(this, arguments).event(I).start();
    }).on("interrupt.zoom end.zoom", function() {
      b(this, arguments).event(I).end();
    }).tween("zoom", function() {
      var T = this, P = arguments, V = b(T, P).event(I), m = t.apply(T, P), E = N == null ? w(m) : typeof N == "function" ? N.apply(T, P) : N, L = Math.max(m[1][0] - m[0][0], m[1][1] - m[0][1]), z = T.__zoom, Y = typeof A == "function" ? A.apply(T, P) : A, W = u(z.invert(E).concat(L / z.k), Y.invert(E).concat(L / Y.k));
      return function(F) {
        if (F === 1) F = Y;
        else {
          var j = W(F), Z = L / j[2];
          F = new be(Z, E[0] - j[0] * Z, E[1] - j[1] * Z);
        }
        V.zoom(null, F);
      };
    });
  }
  function b(v, A, N) {
    return !N && v.__zooming || new S(v, A);
  }
  function S(v, A) {
    this.that = v, this.args = A, this.active = 0, this.sourceEvent = null, this.extent = t.apply(v, A), this.taps = 0;
  }
  S.prototype = { event: function(v) {
    return v && (this.sourceEvent = v), this;
  }, start: function() {
    return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
  }, zoom: function(v, A) {
    return this.mouse && v !== "mouse" && (this.mouse[1] = A.invert(this.mouse[0])), this.touch0 && v !== "touch" && (this.touch0[1] = A.invert(this.touch0[0])), this.touch1 && v !== "touch" && (this.touch1[1] = A.invert(this.touch1[0])), this.that.__zoom = A, this.emit("zoom"), this;
  }, end: function() {
    return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
  }, emit: function(v) {
    var A = le(this.that).datum();
    a.call(v, this.that, new Ql(v, { sourceEvent: this.sourceEvent, target: y, transform: this.that.__zoom, dispatch: a }), A);
  } };
  function R(v, ...A) {
    if (!e3.apply(this, arguments)) return;
    var N = b(this, A).event(v), I = this.__zoom, T = Math.max(i[0], Math.min(i[1], I.k * Math.pow(2, o.apply(this, arguments)))), P = de(v);
    if (N.wheel) (N.mouse[0][0] !== P[0] || N.mouse[0][1] !== P[1]) && (N.mouse[1] = I.invert(N.mouse[0] = P)), clearTimeout(N.wheel);
    else {
      if (I.k === T) return;
      N.mouse = [P, I.invert(P)], Lt(this), N.start();
    }
    nt(v), N.wheel = setTimeout(V, x), N.zoom("mouse", n(g(M(I, T), N.mouse[0], N.mouse[1]), N.extent, s));
    function V() {
      N.wheel = null, N.end();
    }
  }
  function $(v, ...A) {
    if (l || !e3.apply(this, arguments)) return;
    var N = v.currentTarget, I = b(this, A, true).event(v), T = le(v.view).on("mousemove.zoom", E, true).on("mouseup.zoom", L, true), P = de(v, N), V = v.clientX, m = v.clientY;
    Fr(v.view), _n(v), I.mouse = [P, this.__zoom.invert(P)], Lt(this), I.start();
    function E(z) {
      if (nt(z), !I.moved) {
        var Y = z.clientX - V, W = z.clientY - m;
        I.moved = Y * Y + W * W > p;
      }
      I.event(z).zoom("mouse", n(g(I.that.__zoom, I.mouse[0] = de(z, N), I.mouse[1]), I.extent, s));
    }
    function L(z) {
      T.on("mousemove.zoom mouseup.zoom", null), Yr(z.view, I.moved), nt(z), I.event(z).end();
    }
  }
  function X(v, ...A) {
    if (e3.apply(this, arguments)) {
      var N = this.__zoom, I = de(v.changedTouches ? v.changedTouches[0] : v, this), T = N.invert(I), P = N.k * (v.shiftKey ? 0.5 : 2), V = n(g(M(N, P), I, T), t.apply(this, A), s);
      nt(v), c > 0 ? le(this).transition().duration(c).call(C, V, I, v) : le(this).call(y.transform, V, I, v);
    }
  }
  function D(v, ...A) {
    if (e3.apply(this, arguments)) {
      var N = v.touches, I = N.length, T = b(this, A, v.changedTouches.length === I).event(v), P, V, m, E;
      for (_n(v), V = 0; V < I; ++V) m = N[V], E = de(m, this), E = [E, this.__zoom.invert(E), m.identifier], T.touch0 ? !T.touch1 && T.touch0[2] !== E[2] && (T.touch1 = E, T.taps = 0) : (T.touch0 = E, P = true, T.taps = 1 + !!f);
      f && (f = clearTimeout(f)), P && (T.taps < 2 && (d = E[0], f = setTimeout(function() {
        f = null;
      }, h)), Lt(this), T.start());
    }
  }
  function O(v, ...A) {
    if (this.__zooming) {
      var N = b(this, A).event(v), I = v.changedTouches, T = I.length, P, V, m, E;
      for (nt(v), P = 0; P < T; ++P) V = I[P], m = de(V, this), N.touch0 && N.touch0[2] === V.identifier ? N.touch0[0] = m : N.touch1 && N.touch1[2] === V.identifier && (N.touch1[0] = m);
      if (V = N.that.__zoom, N.touch1) {
        var L = N.touch0[0], z = N.touch0[1], Y = N.touch1[0], W = N.touch1[1], F = (F = Y[0] - L[0]) * F + (F = Y[1] - L[1]) * F, j = (j = W[0] - z[0]) * j + (j = W[1] - z[1]) * j;
        V = M(V, Math.sqrt(F / j)), m = [(L[0] + Y[0]) / 2, (L[1] + Y[1]) / 2], E = [(z[0] + W[0]) / 2, (z[1] + W[1]) / 2];
      } else if (N.touch0) m = N.touch0[0], E = N.touch0[1];
      else return;
      N.zoom("touch", n(g(V, m, E), N.extent, s));
    }
  }
  function B(v, ...A) {
    if (this.__zooming) {
      var N = b(this, A).event(v), I = v.changedTouches, T = I.length, P, V;
      for (_n(v), l && clearTimeout(l), l = setTimeout(function() {
        l = null;
      }, h), P = 0; P < T; ++P) V = I[P], N.touch0 && N.touch0[2] === V.identifier ? delete N.touch0 : N.touch1 && N.touch1[2] === V.identifier && delete N.touch1;
      if (N.touch1 && !N.touch0 && (N.touch0 = N.touch1, delete N.touch1), N.touch0) N.touch0[1] = this.__zoom.invert(N.touch0[0]);
      else if (N.end(), N.taps === 2 && (V = de(V, this), Math.hypot(d[0] - V[0], d[1] - V[1]) < _)) {
        var m = le(this).on("dblclick.zoom");
        m && m.apply(this, arguments);
      }
    }
  }
  return y.wheelDelta = function(v) {
    return arguments.length ? (o = typeof v == "function" ? v : Tt(+v), y) : o;
  }, y.filter = function(v) {
    return arguments.length ? (e3 = typeof v == "function" ? v : Tt(!!v), y) : e3;
  }, y.touchable = function(v) {
    return arguments.length ? (r = typeof v == "function" ? v : Tt(!!v), y) : r;
  }, y.extent = function(v) {
    return arguments.length ? (t = typeof v == "function" ? v : Tt([[+v[0][0], +v[0][1]], [+v[1][0], +v[1][1]]]), y) : t;
  }, y.scaleExtent = function(v) {
    return arguments.length ? (i[0] = +v[0], i[1] = +v[1], y) : [i[0], i[1]];
  }, y.translateExtent = function(v) {
    return arguments.length ? (s[0][0] = +v[0][0], s[1][0] = +v[1][0], s[0][1] = +v[0][1], s[1][1] = +v[1][1], y) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, y.constrain = function(v) {
    return arguments.length ? (n = v, y) : n;
  }, y.duration = function(v) {
    return arguments.length ? (c = +v, y) : c;
  }, y.interpolate = function(v) {
    return arguments.length ? (u = v, y) : u;
  }, y.on = function() {
    var v = a.on.apply(a, arguments);
    return v === a ? y : v;
  }, y.clickDistance = function(v) {
    return arguments.length ? (p = (v = +v) * v, y) : Math.sqrt(p);
  }, y.tapDistance = function(v) {
    return arguments.length ? (_ = +v, y) : _;
  }, y;
}
const we = { error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001", error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.", error003: (e3) => `Node type "${e3}" not found. Using fallback type "default".`, error004: () => "The React Flow parent container needs a width and a height to render the graph.", error005: () => "Only child nodes can use a parent extent.", error006: () => "Can't create edge. An edge needs a source and a target.", error007: (e3) => `The old edge with id=${e3} does not exist.`, error009: (e3) => `Marker type "${e3}" doesn't exist.`, error008: (e3, { id: t, sourceHandle: n, targetHandle: o }) => `Couldn't create edge for ${e3} handle id: "${e3 === "source" ? n : o}", edge id: ${t}.`, error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.", error011: (e3) => `Edge type "${e3}" not found. Using fallback type "default".`, error012: (e3) => `Node with id "${e3}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`, error013: (e3 = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e3}/dist/style.css' or base.css to make sure everything is working properly.`, error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.", error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs." }, ft = [[Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY], [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]], ai = ["Enter", " ", "Escape"], ci = { "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.", "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.", "node.a11yDescription.ariaLiveMessage": ({ direction: e3, x: t, y: n }) => `Moved selected node ${e3}. New position, x: ${t}, y: ${n}`, "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.", "controls.ariaLabel": "Control Panel", "controls.zoomIn.ariaLabel": "Zoom In", "controls.zoomOut.ariaLabel": "Zoom Out", "controls.fitView.ariaLabel": "Fit View", "controls.interactive.ariaLabel": "Toggle Interactivity", "minimap.ariaLabel": "Mini Map", "handle.ariaLabel": "Handle" };
var We;
(function(e3) {
  e3.Strict = "strict", e3.Loose = "loose";
})(We || (We = {}));
var $e;
(function(e3) {
  e3.Free = "free", e3.Vertical = "vertical", e3.Horizontal = "horizontal";
})($e || ($e = {}));
var dt;
(function(e3) {
  e3.Partial = "partial", e3.Full = "full";
})(dt || (dt = {}));
const ui = { inProgress: false, isValid: null, from: null, fromHandle: null, fromPosition: null, fromNode: null, to: null, toHandle: null, toPosition: null, toNode: null };
var Ae;
(function(e3) {
  e3.Bezier = "default", e3.Straight = "straight", e3.Step = "step", e3.SmoothStep = "smoothstep", e3.SimpleBezier = "simplebezier";
})(Ae || (Ae = {}));
var Wt;
(function(e3) {
  e3.Arrow = "arrow", e3.ArrowClosed = "arrowclosed";
})(Wt || (Wt = {}));
var q;
(function(e3) {
  e3.Left = "left", e3.Top = "top", e3.Right = "right", e3.Bottom = "bottom";
})(q || (q = {}));
const Vo = { [q.Left]: q.Right, [q.Right]: q.Left, [q.Top]: q.Bottom, [q.Bottom]: q.Top };
function li(e3) {
  return e3 === null ? null : e3 ? "valid" : "invalid";
}
const fi = (e3) => "id" in e3 && "source" in e3 && "target" in e3, rf = (e3) => "id" in e3 && "position" in e3 && !("source" in e3) && !("target" in e3), Qn = (e3) => "id" in e3 && "internals" in e3 && !("source" in e3) && !("target" in e3), wt = (e3, t = [0, 0]) => {
  const { width: n, height: o } = Ne(e3), r = e3.origin ?? t, i = n * r[0], s = o * r[1];
  return { x: e3.position.x - i, y: e3.position.y - s };
}, sf = (e3, t = { nodeOrigin: [0, 0] }) => {
  if (e3.length === 0) return { x: 0, y: 0, width: 0, height: 0 };
  const n = e3.reduce((o, r) => {
    const i = typeof r == "string";
    let s = !t.nodeLookup && !i ? r : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(r) : Qn(r) ? r : t.nodeLookup.get(r.id));
    const c = s ? qt(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return rn(o, c);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return sn(n);
}, vt = (e3, t = {}) => {
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 }, o = false;
  return e3.forEach((r) => {
    (t.filter === void 0 || t.filter(r)) && (n = rn(n, qt(r)), o = true);
  }), o ? sn(n) : { x: 0, y: 0, width: 0, height: 0 };
}, Jn = (e3, t, [n, o, r] = [0, 0, 1], i = false, s = false) => {
  const c = { ...Et(t, [n, o, r]), width: t.width / r, height: t.height / r }, u = [];
  for (const a of e3.values()) {
    const { measured: f, selectable: d = true, hidden: l = false } = a;
    if (s && !d || l) continue;
    const h = f.width ?? a.width ?? a.initialWidth ?? null, x = f.height ?? a.height ?? a.initialHeight ?? null, p = ht(c, Ue(a)), _ = (h ?? 0) * (x ?? 0), y = i && p > 0;
    (!a.internals.handleBounds || y || p >= _ || a.dragging) && u.push(a);
  }
  return u;
}, af = (e3, t) => {
  const n = /* @__PURE__ */ new Set();
  return e3.forEach((o) => {
    n.add(o.id);
  }), t.filter((o) => n.has(o.source) || n.has(o.target));
};
function cf(e3, t) {
  const n = /* @__PURE__ */ new Map(), o = (t == null ? void 0 : t.nodes) ? new Set(t.nodes.map((r) => r.id)) : null;
  return e3.forEach((r) => {
    r.measured.width && r.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !r.hidden) && (!o || o.has(r.id)) && n.set(r.id, r);
  }), n;
}
async function uf({ nodes: e3, width: t, height: n, panZoom: o, minZoom: r, maxZoom: i }, s) {
  if (e3.size === 0) return Promise.resolve(true);
  const c = cf(e3, s), u = vt(c), a = eo(u, t, n, (s == null ? void 0 : s.minZoom) ?? r, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await o.setViewport(a, { duration: s == null ? void 0 : s.duration, ease: s == null ? void 0 : s.ease, interpolate: s == null ? void 0 : s.interpolate }), Promise.resolve(true);
}
function di({ nodeId: e3, nextPosition: t, nodeLookup: n, nodeOrigin: o = [0, 0], nodeExtent: r, onError: i }) {
  const s = n.get(e3), c = s.parentId ? n.get(s.parentId) : void 0, { x: u, y: a } = c ? c.internals.positionAbsolute : { x: 0, y: 0 }, f = s.origin ?? o;
  let d = s.extent || r;
  if (s.extent === "parent" && !s.expandParent) if (!c) i == null ? void 0 : i("005", we.error005());
  else {
    const h = c.measured.width, x = c.measured.height;
    h && x && (d = [[u, a], [u + h, a + x]]);
  }
  else c && Ge(s.extent) && (d = [[s.extent[0][0] + u, s.extent[0][1] + a], [s.extent[1][0] + u, s.extent[1][1] + a]]);
  const l = Ge(d) ? Oe(t, d, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && (i == null ? void 0 : i("015", we.error015())), { position: { x: l.x - u + (s.measured.width ?? 0) * f[0], y: l.y - a + (s.measured.height ?? 0) * f[1] }, positionAbsolute: l };
}
async function lf({ nodesToRemove: e3 = [], edgesToRemove: t = [], nodes: n, edges: o, onBeforeDelete: r }) {
  const i = new Set(e3.map((l) => l.id)), s = [];
  for (const l of n) {
    if (l.deletable === false) continue;
    const h = i.has(l.id), x = !h && l.parentId && s.find((p) => p.id === l.parentId);
    (h || x) && s.push(l);
  }
  const c = new Set(t.map((l) => l.id)), u = o.filter((l) => l.deletable !== false), f = af(s, u);
  for (const l of u) c.has(l.id) && !f.find((x) => x.id === l.id) && f.push(l);
  if (!r) return { edges: f, nodes: s };
  const d = await r({ nodes: s, edges: f });
  return typeof d == "boolean" ? d ? { edges: f, nodes: s } : { edges: [], nodes: [] } : d;
}
const qe = (e3, t = 0, n = 1) => Math.min(Math.max(e3, t), n), Oe = (e3 = { x: 0, y: 0 }, t, n) => ({ x: qe(e3.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)), y: qe(e3.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0)) });
function hi(e3, t, n) {
  const { width: o, height: r } = Ne(n), { x: i, y: s } = n.internals.positionAbsolute;
  return Oe(e3, [[i, s], [i + o, s + r]], t);
}
const Bo = (e3, t, n) => e3 < t ? qe(Math.abs(e3 - t), 1, t) / t : e3 > n ? -qe(Math.abs(e3 - n), 1, t) / t : 0, gi = (e3, t, n = 15, o = 40) => {
  const r = Bo(e3.x, o, t.width - o) * n, i = Bo(e3.y, o, t.height - o) * n;
  return [r, i];
}, rn = (e3, t) => ({ x: Math.min(e3.x, t.x), y: Math.min(e3.y, t.y), x2: Math.max(e3.x2, t.x2), y2: Math.max(e3.y2, t.y2) }), Ln = ({ x: e3, y: t, width: n, height: o }) => ({ x: e3, y: t, x2: e3 + n, y2: t + o }), sn = ({ x: e3, y: t, x2: n, y2: o }) => ({ x: e3, y: t, width: n - e3, height: o - t }), Ue = (e3, t = [0, 0]) => {
  var _a2, _b;
  const { x: n, y: o } = Qn(e3) ? e3.internals.positionAbsolute : wt(e3, t);
  return { x: n, y: o, width: ((_a2 = e3.measured) == null ? void 0 : _a2.width) ?? e3.width ?? e3.initialWidth ?? 0, height: ((_b = e3.measured) == null ? void 0 : _b.height) ?? e3.height ?? e3.initialHeight ?? 0 };
}, qt = (e3, t = [0, 0]) => {
  var _a2, _b;
  const { x: n, y: o } = Qn(e3) ? e3.internals.positionAbsolute : wt(e3, t);
  return { x: n, y: o, x2: n + (((_a2 = e3.measured) == null ? void 0 : _a2.width) ?? e3.width ?? e3.initialWidth ?? 0), y2: o + (((_b = e3.measured) == null ? void 0 : _b.height) ?? e3.height ?? e3.initialHeight ?? 0) };
}, pi = (e3, t) => sn(rn(Ln(e3), Ln(t))), ht = (e3, t) => {
  const n = Math.max(0, Math.min(e3.x + e3.width, t.x + t.width) - Math.max(e3.x, t.x)), o = Math.max(0, Math.min(e3.y + e3.height, t.y + t.height) - Math.max(e3.y, t.y));
  return Math.ceil(n * o);
}, jo = (e3) => ge(e3.width) && ge(e3.height) && ge(e3.x) && ge(e3.y), ge = (e3) => !isNaN(e3) && isFinite(e3), ff = (e3, t) => {
}, _t = (e3, t = [1, 1]) => ({ x: t[0] * Math.round(e3.x / t[0]), y: t[1] * Math.round(e3.y / t[1]) }), Et = ({ x: e3, y: t }, [n, o, r], i = false, s = [1, 1]) => {
  const c = { x: (e3 - n) / r, y: (t - o) / r };
  return i ? _t(c, s) : c;
}, Ut = ({ x: e3, y: t }, [n, o, r]) => ({ x: e3 * r + n, y: t * r + o });
function Ve(e3, t) {
  if (typeof e3 == "number") return Math.floor((t - t / (1 + e3)) * 0.5);
  if (typeof e3 == "string" && e3.endsWith("px")) {
    const n = parseFloat(e3);
    if (!Number.isNaN(n)) return Math.floor(n);
  }
  if (typeof e3 == "string" && e3.endsWith("%")) {
    const n = parseFloat(e3);
    if (!Number.isNaN(n)) return Math.floor(t * n * 0.01);
  }
  return console.error(`[React Flow] The padding value "${e3}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function df(e3, t, n) {
  if (typeof e3 == "string" || typeof e3 == "number") {
    const o = Ve(e3, n), r = Ve(e3, t);
    return { top: o, right: r, bottom: o, left: r, x: r * 2, y: o * 2 };
  }
  if (typeof e3 == "object") {
    const o = Ve(e3.top ?? e3.y ?? 0, n), r = Ve(e3.bottom ?? e3.y ?? 0, n), i = Ve(e3.left ?? e3.x ?? 0, t), s = Ve(e3.right ?? e3.x ?? 0, t);
    return { top: o, right: s, bottom: r, left: i, x: i + s, y: o + r };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function hf(e3, t, n, o, r, i) {
  const { x: s, y: c } = Ut(e3, [t, n, o]), { x: u, y: a } = Ut({ x: e3.x + e3.width, y: e3.y + e3.height }, [t, n, o]), f = r - u, d = i - a;
  return { left: Math.floor(s), top: Math.floor(c), right: Math.floor(f), bottom: Math.floor(d) };
}
const eo = (e3, t, n, o, r, i) => {
  const s = df(i, t, n), c = (t - s.x) / e3.width, u = (n - s.y) / e3.height, a = Math.min(c, u), f = qe(a, o, r), d = e3.x + e3.width / 2, l = e3.y + e3.height / 2, h = t / 2 - d * f, x = n / 2 - l * f, p = hf(e3, h, x, f, t, n), _ = { left: Math.min(p.left - s.left, 0), top: Math.min(p.top - s.top, 0), right: Math.min(p.right - s.right, 0), bottom: Math.min(p.bottom - s.bottom, 0) };
  return { x: h - _.left + _.right, y: x - _.top + _.bottom, zoom: f };
}, gt = () => {
  var _a2;
  return typeof navigator < "u" && ((_a2 = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a2.indexOf("Mac")) >= 0;
};
function Ge(e3) {
  return e3 != null && e3 !== "parent";
}
function Ne(e3) {
  var _a2, _b;
  return { width: ((_a2 = e3.measured) == null ? void 0 : _a2.width) ?? e3.width ?? e3.initialWidth ?? 0, height: ((_b = e3.measured) == null ? void 0 : _b.height) ?? e3.height ?? e3.initialHeight ?? 0 };
}
function mi(e3) {
  var _a2, _b;
  return (((_a2 = e3.measured) == null ? void 0 : _a2.width) ?? e3.width ?? e3.initialWidth) !== void 0 && (((_b = e3.measured) == null ? void 0 : _b.height) ?? e3.height ?? e3.initialHeight) !== void 0;
}
function yi(e3, t = { width: 0, height: 0 }, n, o, r) {
  const i = { ...e3 }, s = o.get(n);
  if (s) {
    const c = s.origin || r;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * c[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * c[1];
  }
  return i;
}
function Fo(e3, t) {
  if (e3.size !== t.size) return false;
  for (const n of e3) if (!t.has(n)) return false;
  return true;
}
function gf() {
  let e3, t;
  return { promise: new Promise((o, r) => {
    e3 = o, t = r;
  }), resolve: e3, reject: t };
}
function pf(e3) {
  return { ...ci, ...e3 || {} };
}
function st(e3, { snapGrid: t = [0, 0], snapToGrid: n = false, transform: o, containerBounds: r }) {
  const { x: i, y: s } = pe(e3), c = Et({ x: i - ((r == null ? void 0 : r.left) ?? 0), y: s - ((r == null ? void 0 : r.top) ?? 0) }, o), { x: u, y: a } = n ? _t(c, t) : c;
  return { xSnapped: u, ySnapped: a, ...c };
}
const to = (e3) => ({ width: e3.offsetWidth, height: e3.offsetHeight }), xi = (e3) => {
  var _a2;
  return ((_a2 = e3 == null ? void 0 : e3.getRootNode) == null ? void 0 : _a2.call(e3)) || (window == null ? void 0 : window.document);
}, mf = ["INPUT", "SELECT", "TEXTAREA"];
function wi(e3) {
  var _a2, _b;
  const t = ((_b = (_a2 = e3.composedPath) == null ? void 0 : _a2.call(e3)) == null ? void 0 : _b[0]) || e3.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? false : mf.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const vi = (e3) => "clientX" in e3, pe = (e3, t) => {
  var _a2, _b;
  const n = vi(e3), o = n ? e3.clientX : (_a2 = e3.touches) == null ? void 0 : _a2[0].clientX, r = n ? e3.clientY : (_b = e3.touches) == null ? void 0 : _b[0].clientY;
  return { x: o - ((t == null ? void 0 : t.left) ?? 0), y: r - ((t == null ? void 0 : t.top) ?? 0) };
}, Yo = (e3, t, n, o, r) => {
  const i = t.querySelectorAll(`.${e3}`);
  return !i || !i.length ? null : Array.from(i).map((s) => {
    const c = s.getBoundingClientRect();
    return { id: s.getAttribute("data-handleid"), type: e3, nodeId: r, position: s.getAttribute("data-handlepos"), x: (c.left - n.left) / o, y: (c.top - n.top) / o, ...to(s) };
  });
};
function _i({ sourceX: e3, sourceY: t, targetX: n, targetY: o, sourceControlX: r, sourceControlY: i, targetControlX: s, targetControlY: c }) {
  const u = e3 * 0.125 + r * 0.375 + s * 0.375 + n * 0.125, a = t * 0.125 + i * 0.375 + c * 0.375 + o * 0.125, f = Math.abs(u - e3), d = Math.abs(a - t);
  return [u, a, f, d];
}
function kt(e3, t) {
  return e3 >= 0 ? 0.5 * e3 : t * 25 * Math.sqrt(-e3);
}
function Xo({ pos: e3, x1: t, y1: n, x2: o, y2: r, c: i }) {
  switch (e3) {
    case q.Left:
      return [t - kt(t - o, i), n];
    case q.Right:
      return [t + kt(o - t, i), n];
    case q.Top:
      return [t, n - kt(n - r, i)];
    case q.Bottom:
      return [t, n + kt(r - n, i)];
  }
}
function Ei({ sourceX: e3, sourceY: t, sourcePosition: n = q.Bottom, targetX: o, targetY: r, targetPosition: i = q.Top, curvature: s = 0.25 }) {
  const [c, u] = Xo({ pos: n, x1: e3, y1: t, x2: o, y2: r, c: s }), [a, f] = Xo({ pos: i, x1: o, y1: r, x2: e3, y2: t, c: s }), [d, l, h, x] = _i({ sourceX: e3, sourceY: t, targetX: o, targetY: r, sourceControlX: c, sourceControlY: u, targetControlX: a, targetControlY: f });
  return [`M${e3},${t} C${c},${u} ${a},${f} ${o},${r}`, d, l, h, x];
}
function bi({ sourceX: e3, sourceY: t, targetX: n, targetY: o }) {
  const r = Math.abs(n - e3) / 2, i = n < e3 ? n + r : n - r, s = Math.abs(o - t) / 2, c = o < t ? o + s : o - s;
  return [i, c, r, s];
}
function yf({ sourceNode: e3, targetNode: t, selected: n = false, zIndex: o, elevateOnSelect: r = false }) {
  if (o !== void 0) return o;
  const i = r && n ? 1e3 : 0, s = Math.max(e3.parentId || r && e3.selected ? e3.internals.z : 0, t.parentId || r && t.selected ? t.internals.z : 0);
  return i + s;
}
function xf({ sourceNode: e3, targetNode: t, width: n, height: o, transform: r }) {
  const i = rn(qt(e3), qt(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = { x: -r[0] / r[2], y: -r[1] / r[2], width: n / r[2], height: o / r[2] };
  return ht(s, sn(i)) > 0;
}
const wf = ({ source: e3, sourceHandle: t, target: n, targetHandle: o }) => `xy-edge__${e3}${t || ""}-${n}${o || ""}`, vf = (e3, t) => t.some((n) => n.source === e3.source && n.target === e3.target && (n.sourceHandle === e3.sourceHandle || !n.sourceHandle && !e3.sourceHandle) && (n.targetHandle === e3.targetHandle || !n.targetHandle && !e3.targetHandle)), _f = (e3, t) => {
  if (!e3.source || !e3.target) return t;
  let n;
  return fi(e3) ? n = { ...e3 } : n = { ...e3, id: wf(e3) }, vf(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Si({ sourceX: e3, sourceY: t, targetX: n, targetY: o }) {
  const [r, i, s, c] = bi({ sourceX: e3, sourceY: t, targetX: n, targetY: o });
  return [`M ${e3},${t}L ${n},${o}`, r, i, s, c];
}
const Zo = { [q.Left]: { x: -1, y: 0 }, [q.Right]: { x: 1, y: 0 }, [q.Top]: { x: 0, y: -1 }, [q.Bottom]: { x: 0, y: 1 } }, Ef = ({ source: e3, sourcePosition: t = q.Bottom, target: n }) => t === q.Left || t === q.Right ? e3.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e3.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Wo = (e3, t) => Math.sqrt(Math.pow(t.x - e3.x, 2) + Math.pow(t.y - e3.y, 2));
function bf({ source: e3, sourcePosition: t = q.Bottom, target: n, targetPosition: o = q.Top, center: r, offset: i, stepPosition: s }) {
  const c = Zo[t], u = Zo[o], a = { x: e3.x + c.x * i, y: e3.y + c.y * i }, f = { x: n.x + u.x * i, y: n.y + u.y * i }, d = Ef({ source: a, sourcePosition: t, target: f }), l = d.x !== 0 ? "x" : "y", h = d[l];
  let x = [], p, _;
  const y = { x: 0, y: 0 }, M = { x: 0, y: 0 }, [, , g, w] = bi({ sourceX: e3.x, sourceY: e3.y, targetX: n.x, targetY: n.y });
  if (c[l] * u[l] === -1) {
    l === "x" ? (p = r.x ?? a.x + (f.x - a.x) * s, _ = r.y ?? (a.y + f.y) / 2) : (p = r.x ?? (a.x + f.x) / 2, _ = r.y ?? a.y + (f.y - a.y) * s);
    const b = [{ x: p, y: a.y }, { x: p, y: f.y }], S = [{ x: a.x, y: _ }, { x: f.x, y: _ }];
    c[l] === h ? x = l === "x" ? b : S : x = l === "x" ? S : b;
  } else {
    const b = [{ x: a.x, y: f.y }], S = [{ x: f.x, y: a.y }];
    if (l === "x" ? x = c.x === h ? S : b : x = c.y === h ? b : S, t === o) {
      const O = Math.abs(e3[l] - n[l]);
      if (O <= i) {
        const B = Math.min(i - 1, i - O);
        c[l] === h ? y[l] = (a[l] > e3[l] ? -1 : 1) * B : M[l] = (f[l] > n[l] ? -1 : 1) * B;
      }
    }
    if (t !== o) {
      const O = l === "x" ? "y" : "x", B = c[l] === u[O], v = a[O] > f[O], A = a[O] < f[O];
      (c[l] === 1 && (!B && v || B && A) || c[l] !== 1 && (!B && A || B && v)) && (x = l === "x" ? b : S);
    }
    const R = { x: a.x + y.x, y: a.y + y.y }, $ = { x: f.x + M.x, y: f.y + M.y }, X = Math.max(Math.abs(R.x - x[0].x), Math.abs($.x - x[0].x)), D = Math.max(Math.abs(R.y - x[0].y), Math.abs($.y - x[0].y));
    X >= D ? (p = (R.x + $.x) / 2, _ = x[0].y) : (p = x[0].x, _ = (R.y + $.y) / 2);
  }
  return [[e3, { x: a.x + y.x, y: a.y + y.y }, ...x, { x: f.x + M.x, y: f.y + M.y }, n], p, _, g, w];
}
function Sf(e3, t, n, o) {
  const r = Math.min(Wo(e3, t) / 2, Wo(t, n) / 2, o), { x: i, y: s } = t;
  if (e3.x === i && i === n.x || e3.y === s && s === n.y) return `L${i} ${s}`;
  if (e3.y === s) {
    const a = e3.x < n.x ? -1 : 1, f = e3.y < n.y ? 1 : -1;
    return `L ${i + r * a},${s}Q ${i},${s} ${i},${s + r * f}`;
  }
  const c = e3.x < n.x ? 1 : -1, u = e3.y < n.y ? -1 : 1;
  return `L ${i},${s + r * u}Q ${i},${s} ${i + r * c},${s}`;
}
function Vn({ sourceX: e3, sourceY: t, sourcePosition: n = q.Bottom, targetX: o, targetY: r, targetPosition: i = q.Top, borderRadius: s = 5, centerX: c, centerY: u, offset: a = 20, stepPosition: f = 0.5 }) {
  const [d, l, h, x, p] = bf({ source: { x: e3, y: t }, sourcePosition: n, target: { x: o, y: r }, targetPosition: i, center: { x: c, y: u }, offset: a, stepPosition: f });
  return [d.reduce((y, M, g) => {
    let w = "";
    return g > 0 && g < d.length - 1 ? w = Sf(d[g - 1], M, d[g + 1], s) : w = `${g === 0 ? "M" : "L"}${M.x} ${M.y}`, y += w, y;
  }, ""), l, h, x, p];
}
function qo(e3) {
  var _a2;
  return e3 && !!(e3.internals.handleBounds || ((_a2 = e3.handles) == null ? void 0 : _a2.length)) && !!(e3.measured.width || e3.width || e3.initialWidth);
}
function Nf(e3) {
  var _a2;
  const { sourceNode: t, targetNode: n } = e3;
  if (!qo(t) || !qo(n)) return null;
  const o = t.internals.handleBounds || Uo(t.handles), r = n.internals.handleBounds || Uo(n.handles), i = Go((o == null ? void 0 : o.source) ?? [], e3.sourceHandle), s = Go(e3.connectionMode === We.Strict ? (r == null ? void 0 : r.target) ?? [] : ((r == null ? void 0 : r.target) ?? []).concat((r == null ? void 0 : r.source) ?? []), e3.targetHandle);
  if (!i || !s) return (_a2 = e3.onError) == null ? void 0 : _a2.call(e3, "008", we.error008(i ? "target" : "source", { id: e3.id, sourceHandle: e3.sourceHandle, targetHandle: e3.targetHandle })), null;
  const c = (i == null ? void 0 : i.position) || q.Bottom, u = (s == null ? void 0 : s.position) || q.Top, a = pt(t, i, c), f = pt(n, s, u);
  return { sourceX: a.x, sourceY: a.y, targetX: f.x, targetY: f.y, sourcePosition: c, targetPosition: u };
}
function Uo(e3) {
  if (!e3) return null;
  const t = [], n = [];
  for (const o of e3) o.width = o.width ?? 1, o.height = o.height ?? 1, o.type === "source" ? t.push(o) : o.type === "target" && n.push(o);
  return { source: t, target: n };
}
function pt(e3, t, n = q.Left, o = false) {
  const r = ((t == null ? void 0 : t.x) ?? 0) + e3.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e3.internals.positionAbsolute.y, { width: s, height: c } = t ?? Ne(e3);
  if (o) return { x: r + s / 2, y: i + c / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case q.Top:
      return { x: r + s / 2, y: i };
    case q.Right:
      return { x: r + s, y: i + c / 2 };
    case q.Bottom:
      return { x: r + s / 2, y: i + c };
    case q.Left:
      return { x: r, y: i + c / 2 };
  }
}
function Go(e3, t) {
  return e3 && (t ? e3.find((n) => n.id === t) : e3[0]) || null;
}
function Bn(e3, t) {
  return e3 ? typeof e3 == "string" ? e3 : `${t ? `${t}__` : ""}${Object.keys(e3).sort().map((o) => `${o}=${e3[o]}`).join("&")}` : "";
}
function Cf(e3, { id: t, defaultColor: n, defaultMarkerStart: o, defaultMarkerEnd: r }) {
  const i = /* @__PURE__ */ new Set();
  return e3.reduce((s, c) => ([c.markerStart || o, c.markerEnd || r].forEach((u) => {
    if (u && typeof u == "object") {
      const a = Bn(u, t);
      i.has(a) || (s.push({ id: a, color: u.color || n, ...u }), i.add(a));
    }
  }), s), []).sort((s, c) => s.id.localeCompare(c.id));
}
const Ni = 1e3, Mf = 10, no = { nodeOrigin: [0, 0], nodeExtent: ft, elevateNodesOnSelect: true, defaults: {} }, Af = { ...no, checkEquality: true };
function oo(e3, t) {
  const n = { ...e3 };
  for (const o in t) t[o] !== void 0 && (n[o] = t[o]);
  return n;
}
function If(e3, t, n) {
  const o = oo(no, n);
  for (const r of e3.values()) if (r.parentId) ro(r, e3, t, o);
  else {
    const i = wt(r, o.nodeOrigin), s = Ge(r.extent) ? r.extent : o.nodeExtent, c = Oe(i, s, Ne(r));
    r.internals.positionAbsolute = c;
  }
}
function Tf(e3, t) {
  if (!e3.handles) return e3.measured ? t == null ? void 0 : t.internals.handleBounds : void 0;
  const n = [], o = [];
  for (const r of e3.handles) {
    const i = { id: r.id, width: r.width ?? 1, height: r.height ?? 1, nodeId: e3.id, x: r.x, y: r.y, position: r.position, type: r.type };
    r.type === "source" ? n.push(i) : r.type === "target" && o.push(i);
  }
  return { source: n, target: o };
}
function jn(e3, t, n, o) {
  var _a2, _b;
  const r = oo(Af, o);
  let i = { i: -1 }, s = e3.length > 0;
  const c = new Map(t), u = (r == null ? void 0 : r.elevateNodesOnSelect) ? Ni : 0;
  t.clear(), n.clear();
  for (const a of e3) {
    let f = c.get(a.id);
    if (r.checkEquality && a === (f == null ? void 0 : f.internals.userNode)) t.set(a.id, f);
    else {
      const d = wt(a, r.nodeOrigin), l = Ge(a.extent) ? a.extent : r.nodeExtent, h = Oe(d, l, Ne(a));
      f = { ...r.defaults, ...a, measured: { width: (_a2 = a.measured) == null ? void 0 : _a2.width, height: (_b = a.measured) == null ? void 0 : _b.height }, internals: { positionAbsolute: h, handleBounds: Tf(a, f), z: Ci(a, u), userNode: a } }, t.set(a.id, f);
    }
    (f.measured === void 0 || f.measured.width === void 0 || f.measured.height === void 0) && !f.hidden && (s = false), a.parentId && ro(f, t, n, o, i);
  }
  return s;
}
function kf(e3, t) {
  if (!e3.parentId) return;
  const n = t.get(e3.parentId);
  n ? n.set(e3.id, e3) : t.set(e3.parentId, /* @__PURE__ */ new Map([[e3.id, e3]]));
}
function ro(e3, t, n, o, r) {
  const { elevateNodesOnSelect: i, nodeOrigin: s, nodeExtent: c } = oo(no, o), u = e3.parentId, a = t.get(u);
  if (!a) {
    console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  kf(e3, n), r && !a.parentId && a.internals.rootParentIndex === void 0 && (a.internals.rootParentIndex = ++r.i, a.internals.z = a.internals.z + r.i * Mf), r && a.internals.rootParentIndex !== void 0 && (r.i = a.internals.rootParentIndex);
  const f = i ? Ni : 0, { x: d, y: l, z: h } = Pf(e3, a, s, c, f), { positionAbsolute: x } = e3.internals, p = d !== x.x || l !== x.y;
  (p || h !== e3.internals.z) && t.set(e3.id, { ...e3, internals: { ...e3.internals, positionAbsolute: p ? { x: d, y: l } : x, z: h } });
}
function Ci(e3, t) {
  return (ge(e3.zIndex) ? e3.zIndex : 0) + (e3.selected ? t : 0);
}
function Pf(e3, t, n, o, r) {
  const { x: i, y: s } = t.internals.positionAbsolute, c = Ne(e3), u = wt(e3, n), a = Ge(e3.extent) ? Oe(u, e3.extent, c) : u;
  let f = Oe({ x: i + a.x, y: s + a.y }, o, c);
  e3.extent === "parent" && (f = hi(f, c, t));
  const d = Ci(e3, r), l = t.internals.z ?? 0;
  return { x: f.x, y: f.y, z: l >= d ? l + 1 : d };
}
function io(e3, t, n, o = [0, 0]) {
  var _a2;
  const r = [], i = /* @__PURE__ */ new Map();
  for (const s of e3) {
    const c = t.get(s.parentId);
    if (!c) continue;
    const u = ((_a2 = i.get(s.parentId)) == null ? void 0 : _a2.expandedRect) ?? Ue(c), a = pi(u, s.rect);
    i.set(s.parentId, { expandedRect: a, parent: c });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: c }, u) => {
    var _a3;
    const a = c.internals.positionAbsolute, f = Ne(c), d = c.origin ?? o, l = s.x < a.x ? Math.round(Math.abs(a.x - s.x)) : 0, h = s.y < a.y ? Math.round(Math.abs(a.y - s.y)) : 0, x = Math.max(f.width, Math.round(s.width)), p = Math.max(f.height, Math.round(s.height)), _ = (x - f.width) * d[0], y = (p - f.height) * d[1];
    (l > 0 || h > 0 || _ || y) && (r.push({ id: u, type: "position", position: { x: c.position.x - l + _, y: c.position.y - h + y } }), (_a3 = n.get(u)) == null ? void 0 : _a3.forEach((M) => {
      e3.some((g) => g.id === M.id) || r.push({ id: M.id, type: "position", position: { x: M.position.x + l, y: M.position.y + h } });
    })), (f.width < s.width || f.height < s.height || l || h) && r.push({ id: u, type: "dimensions", setAttributes: true, dimensions: { width: x + (l ? d[0] * l - _ : 0), height: p + (h ? d[1] * h - y : 0) } });
  }), r;
}
function Rf(e3, t, n, o, r, i) {
  const s = o == null ? void 0 : o.querySelector(".xyflow__viewport");
  let c = false;
  if (!s) return { changes: [], updatedInternals: c };
  const u = [], a = window.getComputedStyle(s), { m22: f } = new window.DOMMatrixReadOnly(a.transform), d = [];
  for (const l of e3.values()) {
    const h = t.get(l.id);
    if (!h) continue;
    if (h.hidden) {
      t.set(h.id, { ...h, internals: { ...h.internals, handleBounds: void 0 } }), c = true;
      continue;
    }
    const x = to(l.nodeElement), p = h.measured.width !== x.width || h.measured.height !== x.height;
    if (!!(x.width && x.height && (p || !h.internals.handleBounds || l.force))) {
      const y = l.nodeElement.getBoundingClientRect(), M = Ge(h.extent) ? h.extent : i;
      let { positionAbsolute: g } = h.internals;
      h.parentId && h.extent === "parent" ? g = hi(g, x, t.get(h.parentId)) : M && (g = Oe(g, M, x));
      const w = { ...h, measured: x, internals: { ...h.internals, positionAbsolute: g, handleBounds: { source: Yo("source", l.nodeElement, y, f, h.id), target: Yo("target", l.nodeElement, y, f, h.id) } } };
      t.set(h.id, w), h.parentId && ro(w, t, n, { nodeOrigin: r }), c = true, p && (u.push({ id: h.id, type: "dimensions", dimensions: x }), h.expandParent && h.parentId && d.push({ id: h.id, parentId: h.parentId, rect: Ue(w, r) }));
    }
  }
  if (d.length > 0) {
    const l = io(d, t, n, r);
    u.push(...l);
  }
  return { changes: u, updatedInternals: c };
}
async function $f({ delta: e3, panZoom: t, transform: n, translateExtent: o, width: r, height: i }) {
  if (!t || !e3.x && !e3.y) return Promise.resolve(false);
  const s = await t.setViewportConstrained({ x: n[0] + e3.x, y: n[1] + e3.y, zoom: n[2] }, [[0, 0], [r, i]], o), c = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
  return Promise.resolve(c);
}
function Ko(e3, t, n, o, r, i) {
  let s = r;
  const c = o.get(s) || /* @__PURE__ */ new Map();
  o.set(s, c.set(n, t)), s = `${r}-${e3}`;
  const u = o.get(s) || /* @__PURE__ */ new Map();
  if (o.set(s, u.set(n, t)), i) {
    s = `${r}-${e3}-${i}`;
    const a = o.get(s) || /* @__PURE__ */ new Map();
    o.set(s, a.set(n, t));
  }
}
function Mi(e3, t, n) {
  e3.clear(), t.clear();
  for (const o of n) {
    const { source: r, target: i, sourceHandle: s = null, targetHandle: c = null } = o, u = { edgeId: o.id, source: r, target: i, sourceHandle: s, targetHandle: c }, a = `${r}-${s}--${i}-${c}`, f = `${i}-${c}--${r}-${s}`;
    Ko("source", u, f, e3, r, s), Ko("target", u, a, e3, i, c), t.set(o.id, o);
  }
}
function Ai(e3, t) {
  if (!e3.parentId) return false;
  const n = t.get(e3.parentId);
  return n ? n.selected ? true : Ai(n, t) : false;
}
function Qo(e3, t, n) {
  var _a2;
  let o = e3;
  do {
    if ((_a2 = o == null ? void 0 : o.matches) == null ? void 0 : _a2.call(o, t)) return true;
    if (o === n) return false;
    o = o == null ? void 0 : o.parentElement;
  } while (o);
  return false;
}
function Df(e3, t, n, o) {
  const r = /* @__PURE__ */ new Map();
  for (const [i, s] of e3) if ((s.selected || s.id === o) && (!s.parentId || !Ai(s, e3)) && (s.draggable || t && typeof s.draggable > "u")) {
    const c = e3.get(i);
    c && r.set(i, { id: i, position: c.position || { x: 0, y: 0 }, distance: { x: n.x - c.internals.positionAbsolute.x, y: n.y - c.internals.positionAbsolute.y }, extent: c.extent, parentId: c.parentId, origin: c.origin, expandParent: c.expandParent, internals: { positionAbsolute: c.internals.positionAbsolute || { x: 0, y: 0 } }, measured: { width: c.measured.width ?? 0, height: c.measured.height ?? 0 } });
  }
  return r;
}
function En({ nodeId: e3, dragItems: t, nodeLookup: n, dragging: o = true }) {
  var _a2, _b, _c2;
  const r = [];
  for (const [s, c] of t) {
    const u = (_a2 = n.get(s)) == null ? void 0 : _a2.internals.userNode;
    u && r.push({ ...u, position: c.position, dragging: o });
  }
  if (!e3) return [r[0], r];
  const i = (_b = n.get(e3)) == null ? void 0 : _b.internals.userNode;
  return [i ? { ...i, position: ((_c2 = t.get(e3)) == null ? void 0 : _c2.position) || i.position, dragging: o } : r[0], r];
}
function Hf({ dragItems: e3, snapGrid: t, x: n, y: o }) {
  const r = e3.values().next().value;
  if (!r) return null;
  const i = { x: n - r.distance.x, y: o - r.distance.y }, s = _t(i, t);
  return { x: s.x - i.x, y: s.y - i.y };
}
function Of({ onNodeMouseDown: e3, getStoreItems: t, onDragStart: n, onDrag: o, onDragStop: r }) {
  let i = { x: null, y: null }, s = 0, c = /* @__PURE__ */ new Map(), u = false, a = { x: 0, y: 0 }, f = null, d = false, l = null, h = false, x = false, p = null;
  function _({ noDragClassName: M, handleSelector: g, domNode: w, isSelectable: C, nodeId: b, nodeClickDistance: S = 0 }) {
    l = le(w);
    function R({ x: O, y: B }) {
      const { nodeLookup: v, nodeExtent: A, snapGrid: N, snapToGrid: I, nodeOrigin: T, onNodeDrag: P, onSelectionDrag: V, onError: m, updateNodePositions: E } = t();
      i = { x: O, y: B };
      let L = false;
      const z = c.size > 1, Y = z && A ? Ln(vt(c)) : null, W = z && I ? Hf({ dragItems: c, snapGrid: N, x: O, y: B }) : null;
      for (const [F, j] of c) {
        if (!v.has(F)) continue;
        let Z = { x: O - j.distance.x, y: B - j.distance.y };
        I && (Z = W ? { x: Math.round(Z.x + W.x), y: Math.round(Z.y + W.y) } : _t(Z, N));
        let Q = null;
        if (z && A && !j.extent && Y) {
          const { positionAbsolute: K } = j.internals, ee = K.x - Y.x + A[0][0], ne = K.x + j.measured.width - Y.x2 + A[1][0], oe = K.y - Y.y + A[0][1], ae = K.y + j.measured.height - Y.y2 + A[1][1];
          Q = [[ee, oe], [ne, ae]];
        }
        const { position: J, positionAbsolute: U } = di({ nodeId: F, nextPosition: Z, nodeLookup: v, nodeExtent: Q || A, nodeOrigin: T, onError: m });
        L = L || j.position.x !== J.x || j.position.y !== J.y, j.position = J, j.internals.positionAbsolute = U;
      }
      if (x = x || L, !!L && (E(c, true), p && (o || P || !b && V))) {
        const [F, j] = En({ nodeId: b, dragItems: c, nodeLookup: v });
        o == null ? void 0 : o(p, c, F, j), P == null ? void 0 : P(p, F, j), b || (V == null ? void 0 : V(p, j));
      }
    }
    async function $() {
      if (!f) return;
      const { transform: O, panBy: B, autoPanSpeed: v, autoPanOnNodeDrag: A } = t();
      if (!A) {
        u = false, cancelAnimationFrame(s);
        return;
      }
      const [N, I] = gi(a, f, v);
      (N !== 0 || I !== 0) && (i.x = (i.x ?? 0) - N / O[2], i.y = (i.y ?? 0) - I / O[2], await B({ x: N, y: I }) && R(i)), s = requestAnimationFrame($);
    }
    function X(O) {
      var _a2;
      const { nodeLookup: B, multiSelectionActive: v, nodesDraggable: A, transform: N, snapGrid: I, snapToGrid: T, selectNodesOnDrag: P, onNodeDragStart: V, onSelectionDragStart: m, unselectNodesAndEdges: E } = t();
      d = true, (!P || !C) && !v && b && (((_a2 = B.get(b)) == null ? void 0 : _a2.selected) || E()), C && P && b && (e3 == null ? void 0 : e3(b));
      const L = st(O.sourceEvent, { transform: N, snapGrid: I, snapToGrid: T, containerBounds: f });
      if (i = L, c = Df(B, A, L, b), c.size > 0 && (n || V || !b && m)) {
        const [z, Y] = En({ nodeId: b, dragItems: c, nodeLookup: B });
        n == null ? void 0 : n(O.sourceEvent, c, z, Y), V == null ? void 0 : V(O.sourceEvent, z, Y), b || (m == null ? void 0 : m(O.sourceEvent, Y));
      }
    }
    const D = Xr().clickDistance(S).on("start", (O) => {
      const { domNode: B, nodeDragThreshold: v, transform: A, snapGrid: N, snapToGrid: I } = t();
      f = (B == null ? void 0 : B.getBoundingClientRect()) || null, h = false, x = false, p = O.sourceEvent, v === 0 && X(O), i = st(O.sourceEvent, { transform: A, snapGrid: N, snapToGrid: I, containerBounds: f }), a = pe(O.sourceEvent, f);
    }).on("drag", (O) => {
      const { autoPanOnNodeDrag: B, transform: v, snapGrid: A, snapToGrid: N, nodeDragThreshold: I, nodeLookup: T } = t(), P = st(O.sourceEvent, { transform: v, snapGrid: A, snapToGrid: N, containerBounds: f });
      if (p = O.sourceEvent, (O.sourceEvent.type === "touchmove" && O.sourceEvent.touches.length > 1 || b && !T.has(b)) && (h = true), !h) {
        if (!u && B && d && (u = true, $()), !d) {
          const V = pe(O.sourceEvent, f), m = V.x - a.x, E = V.y - a.y;
          Math.sqrt(m * m + E * E) > I && X(O);
        }
        (i.x !== P.xSnapped || i.y !== P.ySnapped) && c && d && (a = pe(O.sourceEvent, f), R(P));
      }
    }).on("end", (O) => {
      if (!(!d || h) && (u = false, d = false, cancelAnimationFrame(s), c.size > 0)) {
        const { nodeLookup: B, updateNodePositions: v, onNodeDragStop: A, onSelectionDragStop: N } = t();
        if (x && (v(c, false), x = false), r || A || !b && N) {
          const [I, T] = En({ nodeId: b, dragItems: c, nodeLookup: B, dragging: false });
          r == null ? void 0 : r(O.sourceEvent, c, I, T), A == null ? void 0 : A(O.sourceEvent, I, T), b || (N == null ? void 0 : N(O.sourceEvent, T));
        }
      }
    }).filter((O) => {
      const B = O.target;
      return !O.button && (!M || !Qo(B, `.${M}`, w)) && (!g || Qo(B, g, w));
    });
    l.call(D);
  }
  function y() {
    l == null ? void 0 : l.on(".drag", null);
  }
  return { update: _, destroy: y };
}
function zf(e3, t, n) {
  const o = [], r = { x: e3.x - n, y: e3.y - n, width: n * 2, height: n * 2 };
  for (const i of t.values()) ht(r, Ue(i)) > 0 && o.push(i);
  return o;
}
const Lf = 250;
function Vf(e3, t, n, o) {
  var _a2, _b;
  let r = [], i = 1 / 0;
  const s = zf(e3, n, t + Lf);
  for (const c of s) {
    const u = [...((_a2 = c.internals.handleBounds) == null ? void 0 : _a2.source) ?? [], ...((_b = c.internals.handleBounds) == null ? void 0 : _b.target) ?? []];
    for (const a of u) {
      if (o.nodeId === a.nodeId && o.type === a.type && o.id === a.id) continue;
      const { x: f, y: d } = pt(c, a, a.position, true), l = Math.sqrt(Math.pow(f - e3.x, 2) + Math.pow(d - e3.y, 2));
      l > t || (l < i ? (r = [{ ...a, x: f, y: d }], i = l) : l === i && r.push({ ...a, x: f, y: d }));
    }
  }
  if (!r.length) return null;
  if (r.length > 1) {
    const c = o.type === "source" ? "target" : "source";
    return r.find((u) => u.type === c) ?? r[0];
  }
  return r[0];
}
function Ii(e3, t, n, o, r, i = false) {
  var _a2, _b, _c2;
  const s = o.get(e3);
  if (!s) return null;
  const c = r === "strict" ? (_a2 = s.internals.handleBounds) == null ? void 0 : _a2[t] : [...((_b = s.internals.handleBounds) == null ? void 0 : _b.source) ?? [], ...((_c2 = s.internals.handleBounds) == null ? void 0 : _c2.target) ?? []], u = (n ? c == null ? void 0 : c.find((a) => a.id === n) : c == null ? void 0 : c[0]) ?? null;
  return u && i ? { ...u, ...pt(s, u, u.position, true) } : u;
}
function Ti(e3, t) {
  return e3 || ((t == null ? void 0 : t.classList.contains("target")) ? "target" : (t == null ? void 0 : t.classList.contains("source")) ? "source" : null);
}
function Bf(e3, t) {
  let n = null;
  return t ? n = true : e3 && !t && (n = false), n;
}
const ki = () => true;
function jf(e3, { connectionMode: t, connectionRadius: n, handleId: o, nodeId: r, edgeUpdaterType: i, isTarget: s, domNode: c, nodeLookup: u, lib: a, autoPanOnConnect: f, flowId: d, panBy: l, cancelConnection: h, onConnectStart: x, onConnect: p, onConnectEnd: _, isValidConnection: y = ki, onReconnectEnd: M, updateConnection: g, getTransform: w, getFromHandle: C, autoPanSpeed: b, dragThreshold: S = 1, handleDomNode: R }) {
  const $ = xi(e3.target);
  let X = 0, D;
  const { x: O, y: B } = pe(e3), v = Ti(i, R), A = c == null ? void 0 : c.getBoundingClientRect();
  let N = false;
  if (!A || !v) return;
  const I = Ii(r, v, o, u, t);
  if (!I) return;
  let T = pe(e3, A), P = false, V = null, m = false, E = null;
  function L() {
    if (!f || !A) return;
    const [J, U] = gi(T, A, b);
    l({ x: J, y: U }), X = requestAnimationFrame(L);
  }
  const z = { ...I, nodeId: r, type: v, position: I.position }, Y = u.get(r);
  let F = { inProgress: true, isValid: null, from: pt(Y, z, q.Left, true), fromHandle: z, fromPosition: z.position, fromNode: Y, to: T, toHandle: null, toPosition: Vo[z.position], toNode: null };
  function j() {
    N = true, g(F), x == null ? void 0 : x(e3, { nodeId: r, handleId: o, handleType: v });
  }
  S === 0 && j();
  function Z(J) {
    if (!N) {
      const { x: ne, y: oe } = pe(J), ae = ne - O, _e = oe - B;
      if (!(ae * ae + _e * _e > S * S)) return;
      j();
    }
    if (!C() || !z) {
      Q(J);
      return;
    }
    const U = w();
    T = pe(J, A), D = Vf(Et(T, U, false, [1, 1]), n, u, z), P || (L(), P = true);
    const K = Pi(J, { handle: D, connectionMode: t, fromNodeId: r, fromHandleId: o, fromType: s ? "target" : "source", isValidConnection: y, doc: $, lib: a, flowId: d, nodeLookup: u });
    E = K.handleDomNode, V = K.connection, m = Bf(!!D, K.isValid);
    const ee = { ...F, isValid: m, to: K.toHandle && m ? Ut({ x: K.toHandle.x, y: K.toHandle.y }, U) : T, toHandle: K.toHandle, toPosition: m && K.toHandle ? K.toHandle.position : Vo[z.position], toNode: K.toHandle ? u.get(K.toHandle.nodeId) : null };
    m && D && F.toHandle && ee.toHandle && F.toHandle.type === ee.toHandle.type && F.toHandle.nodeId === ee.toHandle.nodeId && F.toHandle.id === ee.toHandle.id && F.to.x === ee.to.x && F.to.y === ee.to.y || (g(ee), F = ee);
  }
  function Q(J) {
    if (!("touches" in J && J.touches.length > 0)) {
      if (N) {
        (D || E) && V && m && (p == null ? void 0 : p(V));
        const { inProgress: U, ...K } = F, ee = { ...K, toPosition: F.toHandle ? F.toPosition : null };
        _ == null ? void 0 : _(J, ee), i && (M == null ? void 0 : M(J, ee));
      }
      h(), cancelAnimationFrame(X), P = false, m = false, V = null, E = null, $.removeEventListener("mousemove", Z), $.removeEventListener("mouseup", Q), $.removeEventListener("touchmove", Z), $.removeEventListener("touchend", Q);
    }
  }
  $.addEventListener("mousemove", Z), $.addEventListener("mouseup", Q), $.addEventListener("touchmove", Z), $.addEventListener("touchend", Q);
}
function Pi(e3, { handle: t, connectionMode: n, fromNodeId: o, fromHandleId: r, fromType: i, doc: s, lib: c, flowId: u, isValidConnection: a = ki, nodeLookup: f }) {
  const d = i === "target", l = t ? s.querySelector(`.${c}-flow__handle[data-id="${u}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: h, y: x } = pe(e3), p = s.elementFromPoint(h, x), _ = (p == null ? void 0 : p.classList.contains(`${c}-flow__handle`)) ? p : l, y = { handleDomNode: _, isValid: false, connection: null, toHandle: null };
  if (_) {
    const M = Ti(void 0, _), g = _.getAttribute("data-nodeid"), w = _.getAttribute("data-handleid"), C = _.classList.contains("connectable"), b = _.classList.contains("connectableend");
    if (!g || !M) return y;
    const S = { source: d ? g : o, sourceHandle: d ? w : r, target: d ? o : g, targetHandle: d ? r : w };
    y.connection = S;
    const $ = C && b && (n === We.Strict ? d && M === "source" || !d && M === "target" : g !== o || w !== r);
    y.isValid = $ && a(S), y.toHandle = Ii(g, M, w, f, n, true);
  }
  return y;
}
const Fn = { onPointerDown: jf, isValid: Pi };
function Ff({ domNode: e3, panZoom: t, getTransform: n, getViewScale: o }) {
  const r = le(e3);
  function i({ translateExtent: c, width: u, height: a, zoomStep: f = 1, pannable: d = true, zoomable: l = true, inversePan: h = false }) {
    const x = (g) => {
      if (g.sourceEvent.type !== "wheel" || !t) return;
      const w = n(), C = g.sourceEvent.ctrlKey && gt() ? 10 : 1, b = -g.sourceEvent.deltaY * (g.sourceEvent.deltaMode === 1 ? 0.05 : g.sourceEvent.deltaMode ? 1 : 2e-3) * f, S = w[2] * Math.pow(2, b * C);
      t.scaleTo(S);
    };
    let p = [0, 0];
    const _ = (g) => {
      (g.sourceEvent.type === "mousedown" || g.sourceEvent.type === "touchstart") && (p = [g.sourceEvent.clientX ?? g.sourceEvent.touches[0].clientX, g.sourceEvent.clientY ?? g.sourceEvent.touches[0].clientY]);
    }, y = (g) => {
      const w = n();
      if (g.sourceEvent.type !== "mousemove" && g.sourceEvent.type !== "touchmove" || !t) return;
      const C = [g.sourceEvent.clientX ?? g.sourceEvent.touches[0].clientX, g.sourceEvent.clientY ?? g.sourceEvent.touches[0].clientY], b = [C[0] - p[0], C[1] - p[1]];
      p = C;
      const S = o() * Math.max(w[2], Math.log(w[2])) * (h ? -1 : 1), R = { x: w[0] - b[0] * S, y: w[1] - b[1] * S }, $ = [[0, 0], [u, a]];
      t.setViewportConstrained({ x: R.x, y: R.y, zoom: w[2] }, $, c);
    }, M = si().on("start", _).on("zoom", d ? y : null).on("zoom.wheel", l ? x : null);
    r.call(M, {});
  }
  function s() {
    r.on("zoom", null);
  }
  return { update: i, destroy: s, pointer: de };
}
const an = (e3) => ({ x: e3.x, y: e3.y, zoom: e3.k }), bn = ({ x: e3, y: t, zoom: n }) => on.translate(e3, t).scale(n), Be = (e3, t) => e3.target.closest(`.${t}`), Ri = (e3, t) => t === 2 && Array.isArray(e3) && e3.includes(2), Yf = (e3) => ((e3 *= 2) <= 1 ? e3 * e3 * e3 : (e3 -= 2) * e3 * e3 + 2) / 2, Sn = (e3, t = 0, n = Yf, o = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || o(), r ? e3.transition().duration(t).ease(n).on("end", o) : e3;
}, $i = (e3) => {
  const t = e3.ctrlKey && gt() ? 10 : 1;
  return -e3.deltaY * (e3.deltaMode === 1 ? 0.05 : e3.deltaMode ? 1 : 2e-3) * t;
};
function Xf({ zoomPanValues: e3, noWheelClassName: t, d3Selection: n, d3Zoom: o, panOnScrollMode: r, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: c, onPanZoom: u, onPanZoomEnd: a }) {
  return (f) => {
    if (Be(f, t)) return f.ctrlKey && f.preventDefault(), false;
    f.preventDefault(), f.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (f.ctrlKey && s) {
      const _ = de(f), y = $i(f), M = d * Math.pow(2, y);
      o.scaleTo(n, M, _, f);
      return;
    }
    const l = f.deltaMode === 1 ? 20 : 1;
    let h = r === $e.Vertical ? 0 : f.deltaX * l, x = r === $e.Horizontal ? 0 : f.deltaY * l;
    !gt() && f.shiftKey && r !== $e.Vertical && (h = f.deltaY * l, x = 0), o.translateBy(n, -(h / d) * i, -(x / d) * i, { internal: true });
    const p = an(n.property("__zoom"));
    clearTimeout(e3.panScrollTimeout), e3.isPanScrolling ? (u == null ? void 0 : u(f, p), e3.panScrollTimeout = setTimeout(() => {
      a == null ? void 0 : a(f, p), e3.isPanScrolling = false;
    }, 150)) : (e3.isPanScrolling = true, c == null ? void 0 : c(f, p));
  };
}
function Zf({ noWheelClassName: e3, preventScrolling: t, d3ZoomHandler: n }) {
  return function(o, r) {
    const i = o.type === "wheel", s = !t && i && !o.ctrlKey, c = Be(o, e3);
    if (o.ctrlKey && i && c && o.preventDefault(), s || c) return null;
    o.preventDefault(), n.call(this, o, r);
  };
}
function Wf({ zoomPanValues: e3, onDraggingChange: t, onPanZoomStart: n }) {
  return (o) => {
    var _a2, _b, _c2;
    if ((_a2 = o.sourceEvent) == null ? void 0 : _a2.internal) return;
    const r = an(o.transform);
    e3.mouseButton = ((_b = o.sourceEvent) == null ? void 0 : _b.button) || 0, e3.isZoomingOrPanning = true, e3.prevViewport = r, ((_c2 = o.sourceEvent) == null ? void 0 : _c2.type) === "mousedown" && t(true), n && (n == null ? void 0 : n(o.sourceEvent, r));
  };
}
function qf({ zoomPanValues: e3, panOnDrag: t, onPaneContextMenu: n, onTransformChange: o, onPanZoom: r }) {
  return (i) => {
    var _a2, _b;
    e3.usedRightMouseButton = !!(n && Ri(t, e3.mouseButton ?? 0)), ((_a2 = i.sourceEvent) == null ? void 0 : _a2.sync) || o([i.transform.x, i.transform.y, i.transform.k]), r && !((_b = i.sourceEvent) == null ? void 0 : _b.internal) && (r == null ? void 0 : r(i.sourceEvent, an(i.transform)));
  };
}
function Uf({ zoomPanValues: e3, panOnDrag: t, panOnScroll: n, onDraggingChange: o, onPanZoomEnd: r, onPaneContextMenu: i }) {
  return (s) => {
    var _a2;
    if (!((_a2 = s.sourceEvent) == null ? void 0 : _a2.internal) && (e3.isZoomingOrPanning = false, i && Ri(t, e3.mouseButton ?? 0) && !e3.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e3.usedRightMouseButton = false, o(false), r)) {
      const c = an(s.transform);
      e3.prevViewport = c, clearTimeout(e3.timerId), e3.timerId = setTimeout(() => {
        r == null ? void 0 : r(s.sourceEvent, c);
      }, n ? 150 : 0);
    }
  };
}
function Gf({ zoomActivationKeyPressed: e3, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: o, panOnScroll: r, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: c, noPanClassName: u, lib: a, connectionInProgress: f }) {
  return (d) => {
    var _a2;
    const l = e3 || t, h = n && d.ctrlKey, x = d.type === "wheel";
    if (d.button === 1 && d.type === "mousedown" && (Be(d, `${a}-flow__node`) || Be(d, `${a}-flow__edge`))) return true;
    if (!o && !l && !r && !i && !n || s || f && !x || Be(d, c) && x || Be(d, u) && (!x || r && x && !e3) || !n && d.ctrlKey && x) return false;
    if (!n && d.type === "touchstart" && ((_a2 = d.touches) == null ? void 0 : _a2.length) > 1) return d.preventDefault(), false;
    if (!l && !r && !h && x || !o && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(o) && !o.includes(d.button) && d.type === "mousedown") return false;
    const p = Array.isArray(o) && o.includes(d.button) || !d.button || d.button <= 1;
    return (!d.ctrlKey || x) && p;
  };
}
function Kf({ domNode: e3, minZoom: t, maxZoom: n, translateExtent: o, viewport: r, onPanZoom: i, onPanZoomStart: s, onPanZoomEnd: c, onDraggingChange: u }) {
  const a = { isZoomingOrPanning: false, usedRightMouseButton: false, prevViewport: {}, mouseButton: 0, timerId: void 0, panScrollTimeout: void 0, isPanScrolling: false }, f = e3.getBoundingClientRect(), d = si().scaleExtent([t, n]).translateExtent(o), l = le(e3).call(d);
  M({ x: r.x, y: r.y, zoom: qe(r.zoom, t, n) }, [[0, 0], [f.width, f.height]], o);
  const h = l.on("wheel.zoom"), x = l.on("dblclick.zoom");
  d.wheelDelta($i);
  function p(D, O) {
    return l ? new Promise((B) => {
      d == null ? void 0 : d.interpolate((O == null ? void 0 : O.interpolate) === "linear" ? it : Ht).transform(Sn(l, O == null ? void 0 : O.duration, O == null ? void 0 : O.ease, () => B(true)), D);
    }) : Promise.resolve(false);
  }
  function _({ noWheelClassName: D, noPanClassName: O, onPaneContextMenu: B, userSelectionActive: v, panOnScroll: A, panOnDrag: N, panOnScrollMode: I, panOnScrollSpeed: T, preventScrolling: P, zoomOnPinch: V, zoomOnScroll: m, zoomOnDoubleClick: E, zoomActivationKeyPressed: L, lib: z, onTransformChange: Y, connectionInProgress: W, paneClickDistance: F, selectionOnDrag: j }) {
    v && !a.isZoomingOrPanning && y();
    const Z = A && !L && !v;
    d.clickDistance(j ? 1 / 0 : !ge(F) || F < 0 ? 0 : F);
    const Q = Z ? Xf({ zoomPanValues: a, noWheelClassName: D, d3Selection: l, d3Zoom: d, panOnScrollMode: I, panOnScrollSpeed: T, zoomOnPinch: V, onPanZoomStart: s, onPanZoom: i, onPanZoomEnd: c }) : Zf({ noWheelClassName: D, preventScrolling: P, d3ZoomHandler: h });
    if (l.on("wheel.zoom", Q, { passive: false }), !v) {
      const U = Wf({ zoomPanValues: a, onDraggingChange: u, onPanZoomStart: s });
      d.on("start", U);
      const K = qf({ zoomPanValues: a, panOnDrag: N, onPaneContextMenu: !!B, onPanZoom: i, onTransformChange: Y });
      d.on("zoom", K);
      const ee = Uf({ zoomPanValues: a, panOnDrag: N, panOnScroll: A, onPaneContextMenu: B, onPanZoomEnd: c, onDraggingChange: u });
      d.on("end", ee);
    }
    const J = Gf({ zoomActivationKeyPressed: L, panOnDrag: N, zoomOnScroll: m, panOnScroll: A, zoomOnDoubleClick: E, zoomOnPinch: V, userSelectionActive: v, noPanClassName: O, noWheelClassName: D, lib: z, connectionInProgress: W });
    d.filter(J), E ? l.on("dblclick.zoom", x) : l.on("dblclick.zoom", null);
  }
  function y() {
    d.on("zoom", null);
  }
  async function M(D, O, B) {
    const v = bn(D), A = d == null ? void 0 : d.constrain()(v, O, B);
    return A && await p(A), new Promise((N) => N(A));
  }
  async function g(D, O) {
    const B = bn(D);
    return await p(B, O), new Promise((v) => v(B));
  }
  function w(D) {
    if (l) {
      const O = bn(D), B = l.property("__zoom");
      (B.k !== D.zoom || B.x !== D.x || B.y !== D.y) && (d == null ? void 0 : d.transform(l, O, null, { sync: true }));
    }
  }
  function C() {
    const D = l ? ii(l.node()) : { x: 0, y: 0, k: 1 };
    return { x: D.x, y: D.y, zoom: D.k };
  }
  function b(D, O) {
    return l ? new Promise((B) => {
      d == null ? void 0 : d.interpolate((O == null ? void 0 : O.interpolate) === "linear" ? it : Ht).scaleTo(Sn(l, O == null ? void 0 : O.duration, O == null ? void 0 : O.ease, () => B(true)), D);
    }) : Promise.resolve(false);
  }
  function S(D, O) {
    return l ? new Promise((B) => {
      d == null ? void 0 : d.interpolate((O == null ? void 0 : O.interpolate) === "linear" ? it : Ht).scaleBy(Sn(l, O == null ? void 0 : O.duration, O == null ? void 0 : O.ease, () => B(true)), D);
    }) : Promise.resolve(false);
  }
  function R(D) {
    d == null ? void 0 : d.scaleExtent(D);
  }
  function $(D) {
    d == null ? void 0 : d.translateExtent(D);
  }
  function X(D) {
    const O = !ge(D) || D < 0 ? 0 : D;
    d == null ? void 0 : d.clickDistance(O);
  }
  return { update: _, destroy: y, setViewport: g, setViewportConstrained: M, getViewport: C, scaleTo: b, scaleBy: S, setScaleExtent: R, setTranslateExtent: $, syncViewport: w, setClickDistance: X };
}
var ze;
(function(e3) {
  e3.Line = "line", e3.Handle = "handle";
})(ze || (ze = {}));
const Qf = ["top-left", "top-right", "bottom-left", "bottom-right"], Jf = ["top", "right", "bottom", "left"];
function ed({ width: e3, prevWidth: t, height: n, prevHeight: o, affectsX: r, affectsY: i }) {
  const s = e3 - t, c = n - o, u = [s > 0 ? 1 : s < 0 ? -1 : 0, c > 0 ? 1 : c < 0 ? -1 : 0];
  return s && r && (u[0] = u[0] * -1), c && i && (u[1] = u[1] * -1), u;
}
function Jo(e3) {
  const t = e3.includes("right") || e3.includes("left"), n = e3.includes("bottom") || e3.includes("top"), o = e3.includes("left"), r = e3.includes("top");
  return { isHorizontal: t, isVertical: n, affectsX: o, affectsY: r };
}
function Ce(e3, t) {
  return Math.max(0, t - e3);
}
function Me(e3, t) {
  return Math.max(0, e3 - t);
}
function Pt(e3, t, n) {
  return Math.max(0, t - e3, e3 - n);
}
function er(e3, t) {
  return e3 ? !t : t;
}
function td(e3, t, n, o, r, i, s, c) {
  let { affectsX: u, affectsY: a } = t;
  const { isHorizontal: f, isVertical: d } = t, l = f && d, { xSnapped: h, ySnapped: x } = n, { minWidth: p, maxWidth: _, minHeight: y, maxHeight: M } = o, { x: g, y: w, width: C, height: b, aspectRatio: S } = e3;
  let R = Math.floor(f ? h - e3.pointerX : 0), $ = Math.floor(d ? x - e3.pointerY : 0);
  const X = C + (u ? -R : R), D = b + (a ? -$ : $), O = -i[0] * C, B = -i[1] * b;
  let v = Pt(X, p, _), A = Pt(D, y, M);
  if (s) {
    let T = 0, P = 0;
    u && R < 0 ? T = Ce(g + R + O, s[0][0]) : !u && R > 0 && (T = Me(g + X + O, s[1][0])), a && $ < 0 ? P = Ce(w + $ + B, s[0][1]) : !a && $ > 0 && (P = Me(w + D + B, s[1][1])), v = Math.max(v, T), A = Math.max(A, P);
  }
  if (c) {
    let T = 0, P = 0;
    u && R > 0 ? T = Me(g + R, c[0][0]) : !u && R < 0 && (T = Ce(g + X, c[1][0])), a && $ > 0 ? P = Me(w + $, c[0][1]) : !a && $ < 0 && (P = Ce(w + D, c[1][1])), v = Math.max(v, T), A = Math.max(A, P);
  }
  if (r) {
    if (f) {
      const T = Pt(X / S, y, M) * S;
      if (v = Math.max(v, T), s) {
        let P = 0;
        !u && !a || u && !a && l ? P = Me(w + B + X / S, s[1][1]) * S : P = Ce(w + B + (u ? R : -R) / S, s[0][1]) * S, v = Math.max(v, P);
      }
      if (c) {
        let P = 0;
        !u && !a || u && !a && l ? P = Ce(w + X / S, c[1][1]) * S : P = Me(w + (u ? R : -R) / S, c[0][1]) * S, v = Math.max(v, P);
      }
    }
    if (d) {
      const T = Pt(D * S, p, _) / S;
      if (A = Math.max(A, T), s) {
        let P = 0;
        !u && !a || a && !u && l ? P = Me(g + D * S + O, s[1][0]) / S : P = Ce(g + (a ? $ : -$) * S + O, s[0][0]) / S, A = Math.max(A, P);
      }
      if (c) {
        let P = 0;
        !u && !a || a && !u && l ? P = Ce(g + D * S, c[1][0]) / S : P = Me(g + (a ? $ : -$) * S, c[0][0]) / S, A = Math.max(A, P);
      }
    }
  }
  $ = $ + ($ < 0 ? A : -A), R = R + (R < 0 ? v : -v), r && (l ? X > D * S ? $ = (er(u, a) ? -R : R) / S : R = (er(u, a) ? -$ : $) * S : f ? ($ = R / S, a = u) : (R = $ * S, u = a));
  const N = u ? g + R : g, I = a ? w + $ : w;
  return { width: C + (u ? -R : R), height: b + (a ? -$ : $), x: i[0] * R * (u ? -1 : 1) + N, y: i[1] * $ * (a ? -1 : 1) + I };
}
const Di = { width: 0, height: 0, x: 0, y: 0 }, nd = { ...Di, pointerX: 0, pointerY: 0, aspectRatio: 1 };
function od(e3) {
  return [[0, 0], [e3.measured.width, e3.measured.height]];
}
function rd(e3, t, n) {
  const o = t.position.x + e3.position.x, r = t.position.y + e3.position.y, i = e3.measured.width ?? 0, s = e3.measured.height ?? 0, c = n[0] * i, u = n[1] * s;
  return [[o - c, r - u], [o + i - c, r + s - u]];
}
function id({ domNode: e3, nodeId: t, getStoreItems: n, onChange: o, onEnd: r }) {
  const i = le(e3);
  let s = { controlDirection: Jo("bottom-right"), boundaries: { minWidth: 0, minHeight: 0, maxWidth: Number.MAX_VALUE, maxHeight: Number.MAX_VALUE }, resizeDirection: void 0, keepAspectRatio: false };
  function c({ controlPosition: a, boundaries: f, keepAspectRatio: d, resizeDirection: l, onResizeStart: h, onResize: x, onResizeEnd: p, shouldResize: _ }) {
    let y = { ...Di }, M = { ...nd };
    s = { boundaries: f, resizeDirection: l, keepAspectRatio: d, controlDirection: Jo(a) };
    let g, w = null, C = [], b, S, R, $ = false;
    const X = Xr().on("start", (D) => {
      const { nodeLookup: O, transform: B, snapGrid: v, snapToGrid: A, nodeOrigin: N, paneDomNode: I } = n();
      if (g = O.get(t), !g) return;
      w = (I == null ? void 0 : I.getBoundingClientRect()) ?? null;
      const { xSnapped: T, ySnapped: P } = st(D.sourceEvent, { transform: B, snapGrid: v, snapToGrid: A, containerBounds: w });
      y = { width: g.measured.width ?? 0, height: g.measured.height ?? 0, x: g.position.x ?? 0, y: g.position.y ?? 0 }, M = { ...y, pointerX: T, pointerY: P, aspectRatio: y.width / y.height }, b = void 0, g.parentId && (g.extent === "parent" || g.expandParent) && (b = O.get(g.parentId), S = b && g.extent === "parent" ? od(b) : void 0), C = [], R = void 0;
      for (const [V, m] of O) if (m.parentId === t && (C.push({ id: V, position: { ...m.position }, extent: m.extent }), m.extent === "parent" || m.expandParent)) {
        const E = rd(m, g, m.origin ?? N);
        R ? R = [[Math.min(E[0][0], R[0][0]), Math.min(E[0][1], R[0][1])], [Math.max(E[1][0], R[1][0]), Math.max(E[1][1], R[1][1])]] : R = E;
      }
      h == null ? void 0 : h(D, { ...y });
    }).on("drag", (D) => {
      const { transform: O, snapGrid: B, snapToGrid: v, nodeOrigin: A } = n(), N = st(D.sourceEvent, { transform: O, snapGrid: B, snapToGrid: v, containerBounds: w }), I = [];
      if (!g) return;
      const { x: T, y: P, width: V, height: m } = y, E = {}, L = g.origin ?? A, { width: z, height: Y, x: W, y: F } = td(M, s.controlDirection, N, s.boundaries, s.keepAspectRatio, L, S, R), j = z !== V, Z = Y !== m, Q = W !== T && j, J = F !== P && Z;
      if (!Q && !J && !j && !Z) return;
      if ((Q || J || L[0] === 1 || L[1] === 1) && (E.x = Q ? W : y.x, E.y = J ? F : y.y, y.x = E.x, y.y = E.y, C.length > 0)) {
        const ne = W - T, oe = F - P;
        for (const ae of C) ae.position = { x: ae.position.x - ne + L[0] * (z - V), y: ae.position.y - oe + L[1] * (Y - m) }, I.push(ae);
      }
      if ((j || Z) && (E.width = j && (!s.resizeDirection || s.resizeDirection === "horizontal") ? z : y.width, E.height = Z && (!s.resizeDirection || s.resizeDirection === "vertical") ? Y : y.height, y.width = E.width, y.height = E.height), b && g.expandParent) {
        const ne = L[0] * (E.width ?? 0);
        E.x && E.x < ne && (y.x = ne, M.x = M.x - (E.x - ne));
        const oe = L[1] * (E.height ?? 0);
        E.y && E.y < oe && (y.y = oe, M.y = M.y - (E.y - oe));
      }
      const U = ed({ width: y.width, prevWidth: V, height: y.height, prevHeight: m, affectsX: s.controlDirection.affectsX, affectsY: s.controlDirection.affectsY }), K = { ...y, direction: U };
      (_ == null ? void 0 : _(D, K)) !== false && ($ = true, x == null ? void 0 : x(D, K), o(E, I));
    }).on("end", (D) => {
      $ && (p == null ? void 0 : p(D, { ...y }), r == null ? void 0 : r({ ...y }), $ = false);
    });
    i.call(X);
  }
  function u() {
    i.on(".drag", null);
  }
  return { update: c, destroy: u };
}
var Nn = { exports: {} }, Cn = {}, Mn = { exports: {} }, An = {};
var tr;
function sd() {
  if (tr) return An;
  tr = 1;
  var e3 = Qt();
  function t(d, l) {
    return d === l && (d !== 0 || 1 / d === 1 / l) || d !== d && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : t, o = e3.useState, r = e3.useEffect, i = e3.useLayoutEffect, s = e3.useDebugValue;
  function c(d, l) {
    var h = l(), x = o({ inst: { value: h, getSnapshot: l } }), p = x[0].inst, _ = x[1];
    return i(function() {
      p.value = h, p.getSnapshot = l, u(p) && _({ inst: p });
    }, [d, h, l]), r(function() {
      return u(p) && _({ inst: p }), d(function() {
        u(p) && _({ inst: p });
      });
    }, [d]), s(h), h;
  }
  function u(d) {
    var l = d.getSnapshot;
    d = d.value;
    try {
      var h = l();
      return !n(d, h);
    } catch {
      return true;
    }
  }
  function a(d, l) {
    return l();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? a : c;
  return An.useSyncExternalStore = e3.useSyncExternalStore !== void 0 ? e3.useSyncExternalStore : f, An;
}
var nr;
function ad() {
  return nr || (nr = 1, Mn.exports = sd()), Mn.exports;
}
var or;
function cd() {
  if (or) return Cn;
  or = 1;
  var e3 = Qt(), t = ad();
  function n(a, f) {
    return a === f && (a !== 0 || 1 / a === 1 / f) || a !== a && f !== f;
  }
  var o = typeof Object.is == "function" ? Object.is : n, r = t.useSyncExternalStore, i = e3.useRef, s = e3.useEffect, c = e3.useMemo, u = e3.useDebugValue;
  return Cn.useSyncExternalStoreWithSelector = function(a, f, d, l, h) {
    var x = i(null);
    if (x.current === null) {
      var p = { hasValue: false, value: null };
      x.current = p;
    } else p = x.current;
    x = c(function() {
      function y(b) {
        if (!M) {
          if (M = true, g = b, b = l(b), h !== void 0 && p.hasValue) {
            var S = p.value;
            if (h(S, b)) return w = S;
          }
          return w = b;
        }
        if (S = w, o(g, b)) return S;
        var R = l(b);
        return h !== void 0 && h(S, R) ? (g = b, S) : (g = b, w = R);
      }
      var M = false, g, w, C = d === void 0 ? null : d;
      return [function() {
        return y(f());
      }, C === null ? void 0 : function() {
        return y(C());
      }];
    }, [f, d, l, h]);
    var _ = r(a, x[0], x[1]);
    return s(function() {
      p.hasValue = true, p.value = _;
    }, [_]), u(_), _;
  }, Cn;
}
var rr;
function ud() {
  return rr || (rr = 1, Nn.exports = cd()), Nn.exports;
}
var ld = ud();
const fd = Tr(ld), dd = {}, ir = (e3) => {
  let t;
  const n = /* @__PURE__ */ new Set(), o = (f, d) => {
    const l = typeof f == "function" ? f(t) : f;
    if (!Object.is(l, t)) {
      const h = t;
      t = d ?? (typeof l != "object" || l === null) ? l : Object.assign({}, t, l), n.forEach((x) => x(t, h));
    }
  }, r = () => t, u = { setState: o, getState: r, getInitialState: () => a, subscribe: (f) => (n.add(f), () => n.delete(f)), destroy: () => {
    (dd ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear();
  } }, a = t = e3(o, r, u);
  return u;
}, hd = (e3) => e3 ? ir(e3) : ir, { useDebugValue: gd } = Ea, { useSyncExternalStoreWithSelector: pd } = fd, md = (e3) => e3;
function Hi(e3, t = md, n) {
  const o = pd(e3.subscribe, e3.getState, e3.getServerState || e3.getInitialState, t, n);
  return gd(o), o;
}
const sr = (e3, t) => {
  const n = hd(e3), o = (r, i = t) => Hi(n, r, i);
  return Object.assign(o, n), o;
}, yd = (e3, t) => e3 ? sr(e3, t) : sr;
function ie(e3, t) {
  if (Object.is(e3, t)) return true;
  if (typeof e3 != "object" || e3 === null || typeof t != "object" || t === null) return false;
  if (e3 instanceof Map && t instanceof Map) {
    if (e3.size !== t.size) return false;
    for (const [o, r] of e3) if (!Object.is(r, t.get(o))) return false;
    return true;
  }
  if (e3 instanceof Set && t instanceof Set) {
    if (e3.size !== t.size) return false;
    for (const o of e3) if (!t.has(o)) return false;
    return true;
  }
  const n = Object.keys(e3);
  if (n.length !== Object.keys(t).length) return false;
  for (const o of n) if (!Object.prototype.hasOwnProperty.call(t, o) || !Object.is(e3[o], t[o])) return false;
  return true;
}
const cn = H.createContext(null), xd = cn.Provider, Oi = we.error001();
function te(e3, t) {
  const n = H.useContext(cn);
  if (n === null) throw new Error(Oi);
  return Hi(n, e3, t);
}
function re() {
  const e3 = H.useContext(cn);
  if (e3 === null) throw new Error(Oi);
  return H.useMemo(() => ({ getState: e3.getState, setState: e3.setState, subscribe: e3.subscribe }), [e3]);
}
const ar = { display: "none" }, wd = { position: "absolute", width: 1, height: 1, margin: -1, border: 0, padding: 0, overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)" }, zi = "react-flow__node-desc", Li = "react-flow__edge-desc", vd = "react-flow__aria-live", _d = (e3) => e3.ariaLiveMessage, Ed = (e3) => e3.ariaLabelConfig;
function bd({ rfId: e3 }) {
  const t = te(_d);
  return k.jsx("div", { id: `${vd}-${e3}`, "aria-live": "assertive", "aria-atomic": "true", style: wd, children: t });
}
function Sd({ rfId: e3, disableKeyboardA11y: t }) {
  const n = te(Ed);
  return k.jsxs(k.Fragment, { children: [k.jsx("div", { id: `${zi}-${e3}`, style: ar, children: t ? n["node.a11yDescription.default"] : n["node.a11yDescription.keyboardDisabled"] }), k.jsx("div", { id: `${Li}-${e3}`, style: ar, children: n["edge.a11yDescription.default"] }), !t && k.jsx(bd, { rfId: e3 })] });
}
const un = H.forwardRef(({ position: e3 = "top-left", children: t, className: n, style: o, ...r }, i) => {
  const s = `${e3}`.split("-");
  return k.jsx("div", { className: se(["react-flow__panel", n, ...s]), style: o, ref: i, ...r, children: t });
});
un.displayName = "Panel";
function Nd({ proOptions: e3, position: t = "bottom-right" }) {
  return (e3 == null ? void 0 : e3.hideAttribution) ? null : k.jsx(un, { position: t, className: "react-flow__attribution", "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev", children: k.jsx("a", { href: "https://reactflow.dev", target: "_blank", rel: "noopener noreferrer", "aria-label": "React Flow attribution", children: "React Flow" }) });
}
const Cd = (e3) => {
  const t = [], n = [];
  for (const [, o] of e3.nodeLookup) o.selected && t.push(o.internals.userNode);
  for (const [, o] of e3.edgeLookup) o.selected && n.push(o);
  return { selectedNodes: t, selectedEdges: n };
}, Rt = (e3) => e3.id;
function Md(e3, t) {
  return ie(e3.selectedNodes.map(Rt), t.selectedNodes.map(Rt)) && ie(e3.selectedEdges.map(Rt), t.selectedEdges.map(Rt));
}
function Ad({ onSelectionChange: e3 }) {
  const t = re(), { selectedNodes: n, selectedEdges: o } = te(Cd, Md);
  return H.useEffect(() => {
    const r = { nodes: n, edges: o };
    e3 == null ? void 0 : e3(r), t.getState().onSelectionChangeHandlers.forEach((i) => i(r));
  }, [n, o, e3]), null;
}
const Id = (e3) => !!e3.onSelectionChangeHandlers;
function Td({ onSelectionChange: e3 }) {
  const t = te(Id);
  return e3 || t ? k.jsx(Ad, { onSelectionChange: e3 }) : null;
}
const Vi = [0, 0], kd = { x: 0, y: 0, zoom: 1 }, Pd = ["nodes", "edges", "defaultNodes", "defaultEdges", "onConnect", "onConnectStart", "onConnectEnd", "onClickConnectStart", "onClickConnectEnd", "nodesDraggable", "autoPanOnNodeFocus", "nodesConnectable", "nodesFocusable", "edgesFocusable", "edgesReconnectable", "elevateNodesOnSelect", "elevateEdgesOnSelect", "minZoom", "maxZoom", "nodeExtent", "onNodesChange", "onEdgesChange", "elementsSelectable", "connectionMode", "snapGrid", "snapToGrid", "translateExtent", "connectOnClick", "defaultEdgeOptions", "fitView", "fitViewOptions", "onNodesDelete", "onEdgesDelete", "onDelete", "onNodeDrag", "onNodeDragStart", "onNodeDragStop", "onSelectionDrag", "onSelectionDragStart", "onSelectionDragStop", "onMoveStart", "onMove", "onMoveEnd", "noPanClassName", "nodeOrigin", "autoPanOnConnect", "autoPanOnNodeDrag", "onError", "connectionRadius", "isValidConnection", "selectNodesOnDrag", "nodeDragThreshold", "connectionDragThreshold", "onBeforeDelete", "debug", "autoPanSpeed", "ariaLabelConfig"], cr = [...Pd, "rfId"], Rd = (e3) => ({ setNodes: e3.setNodes, setEdges: e3.setEdges, setMinZoom: e3.setMinZoom, setMaxZoom: e3.setMaxZoom, setTranslateExtent: e3.setTranslateExtent, setNodeExtent: e3.setNodeExtent, reset: e3.reset, setDefaultNodesAndEdges: e3.setDefaultNodesAndEdges }), ur = { translateExtent: ft, nodeOrigin: Vi, minZoom: 0.5, maxZoom: 2, elementsSelectable: true, noPanClassName: "nopan", rfId: "1" };
function $d(e3) {
  const { setNodes: t, setEdges: n, setMinZoom: o, setMaxZoom: r, setTranslateExtent: i, setNodeExtent: s, reset: c, setDefaultNodesAndEdges: u } = te(Rd, ie), a = re();
  H.useEffect(() => (u(e3.defaultNodes, e3.defaultEdges), () => {
    f.current = ur, c();
  }), []);
  const f = H.useRef(ur);
  return H.useEffect(() => {
    for (const d of cr) {
      const l = e3[d], h = f.current[d];
      l !== h && (typeof e3[d] > "u" || (d === "nodes" ? t(l) : d === "edges" ? n(l) : d === "minZoom" ? o(l) : d === "maxZoom" ? r(l) : d === "translateExtent" ? i(l) : d === "nodeExtent" ? s(l) : d === "ariaLabelConfig" ? a.setState({ ariaLabelConfig: pf(l) }) : d === "fitView" ? a.setState({ fitViewQueued: l }) : d === "fitViewOptions" ? a.setState({ fitViewOptions: l }) : a.setState({ [d]: l })));
    }
    f.current = e3;
  }, cr.map((d) => e3[d])), null;
}
function lr() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function Dd(e3) {
  var _a2;
  const [t, n] = H.useState(e3 === "system" ? null : e3);
  return H.useEffect(() => {
    if (e3 !== "system") {
      n(e3);
      return;
    }
    const o = lr(), r = () => n((o == null ? void 0 : o.matches) ? "dark" : "light");
    return r(), o == null ? void 0 : o.addEventListener("change", r), () => {
      o == null ? void 0 : o.removeEventListener("change", r);
    };
  }, [e3]), t !== null ? t : ((_a2 = lr()) == null ? void 0 : _a2.matches) ? "dark" : "light";
}
const fr = typeof document < "u" ? document : null;
function mt(e3 = null, t = { target: fr, actInsideInputWithModifier: true }) {
  const [n, o] = H.useState(false), r = H.useRef(false), i = H.useRef(/* @__PURE__ */ new Set([])), [s, c] = H.useMemo(() => {
    if (e3 !== null) {
      const a = (Array.isArray(e3) ? e3 : [e3]).filter((d) => typeof d == "string").map((d) => d.replace("+", `
`).replace(`

`, `
+`).split(`
`)), f = a.reduce((d, l) => d.concat(...l), []);
      return [a, f];
    }
    return [[], []];
  }, [e3]);
  return H.useEffect(() => {
    const u = (t == null ? void 0 : t.target) ?? fr, a = (t == null ? void 0 : t.actInsideInputWithModifier) ?? true;
    if (e3 !== null) {
      const f = (h) => {
        var _a2, _b;
        if (r.current = h.ctrlKey || h.metaKey || h.shiftKey || h.altKey, (!r.current || r.current && !a) && wi(h)) return false;
        const p = hr(h.code, c);
        if (i.current.add(h[p]), dr(s, i.current, false)) {
          const _ = ((_b = (_a2 = h.composedPath) == null ? void 0 : _a2.call(h)) == null ? void 0 : _b[0]) || h.target, y = (_ == null ? void 0 : _.nodeName) === "BUTTON" || (_ == null ? void 0 : _.nodeName) === "A";
          t.preventDefault !== false && (r.current || !y) && h.preventDefault(), o(true);
        }
      }, d = (h) => {
        const x = hr(h.code, c);
        dr(s, i.current, true) ? (o(false), i.current.clear()) : i.current.delete(h[x]), h.key === "Meta" && i.current.clear(), r.current = false;
      }, l = () => {
        i.current.clear(), o(false);
      };
      return u == null ? void 0 : u.addEventListener("keydown", f), u == null ? void 0 : u.addEventListener("keyup", d), window.addEventListener("blur", l), window.addEventListener("contextmenu", l), () => {
        u == null ? void 0 : u.removeEventListener("keydown", f), u == null ? void 0 : u.removeEventListener("keyup", d), window.removeEventListener("blur", l), window.removeEventListener("contextmenu", l);
      };
    }
  }, [e3, o]), n;
}
function dr(e3, t, n) {
  return e3.filter((o) => n || o.length === t.size).some((o) => o.every((r) => t.has(r)));
}
function hr(e3, t) {
  return t.includes(e3) ? "code" : "key";
}
const Hd = () => {
  const e3 = re();
  return H.useMemo(() => ({ zoomIn: (t) => {
    const { panZoom: n } = e3.getState();
    return n ? n.scaleBy(1.2, { duration: t == null ? void 0 : t.duration }) : Promise.resolve(false);
  }, zoomOut: (t) => {
    const { panZoom: n } = e3.getState();
    return n ? n.scaleBy(1 / 1.2, { duration: t == null ? void 0 : t.duration }) : Promise.resolve(false);
  }, zoomTo: (t, n) => {
    const { panZoom: o } = e3.getState();
    return o ? o.scaleTo(t, { duration: n == null ? void 0 : n.duration }) : Promise.resolve(false);
  }, getZoom: () => e3.getState().transform[2], setViewport: async (t, n) => {
    const { transform: [o, r, i], panZoom: s } = e3.getState();
    return s ? (await s.setViewport({ x: t.x ?? o, y: t.y ?? r, zoom: t.zoom ?? i }, n), Promise.resolve(true)) : Promise.resolve(false);
  }, getViewport: () => {
    const [t, n, o] = e3.getState().transform;
    return { x: t, y: n, zoom: o };
  }, setCenter: async (t, n, o) => e3.getState().setCenter(t, n, o), fitBounds: async (t, n) => {
    const { width: o, height: r, minZoom: i, maxZoom: s, panZoom: c } = e3.getState(), u = eo(t, o, r, i, s, (n == null ? void 0 : n.padding) ?? 0.1);
    return c ? (await c.setViewport(u, { duration: n == null ? void 0 : n.duration, ease: n == null ? void 0 : n.ease, interpolate: n == null ? void 0 : n.interpolate }), Promise.resolve(true)) : Promise.resolve(false);
  }, screenToFlowPosition: (t, n = {}) => {
    const { transform: o, snapGrid: r, snapToGrid: i, domNode: s } = e3.getState();
    if (!s) return t;
    const { x: c, y: u } = s.getBoundingClientRect(), a = { x: t.x - c, y: t.y - u }, f = n.snapGrid ?? r, d = n.snapToGrid ?? i;
    return Et(a, o, d, f);
  }, flowToScreenPosition: (t) => {
    const { transform: n, domNode: o } = e3.getState();
    if (!o) return t;
    const { x: r, y: i } = o.getBoundingClientRect(), s = Ut(t, n);
    return { x: s.x + r, y: s.y + i };
  } }), []);
};
function Bi(e3, t) {
  const n = [], o = /* @__PURE__ */ new Map(), r = [];
  for (const i of e3) if (i.type === "add") {
    r.push(i);
    continue;
  } else if (i.type === "remove" || i.type === "replace") o.set(i.id, [i]);
  else {
    const s = o.get(i.id);
    s ? s.push(i) : o.set(i.id, [i]);
  }
  for (const i of t) {
    const s = o.get(i.id);
    if (!s) {
      n.push(i);
      continue;
    }
    if (s[0].type === "remove") continue;
    if (s[0].type === "replace") {
      n.push({ ...s[0].item });
      continue;
    }
    const c = { ...i };
    for (const u of s) Od(u, c);
    n.push(c);
  }
  return r.length && r.forEach((i) => {
    i.index !== void 0 ? n.splice(i.index, 0, { ...i.item }) : n.push({ ...i.item });
  }), n;
}
function Od(e3, t) {
  switch (e3.type) {
    case "select": {
      t.selected = e3.selected;
      break;
    }
    case "position": {
      typeof e3.position < "u" && (t.position = e3.position), typeof e3.dragging < "u" && (t.dragging = e3.dragging);
      break;
    }
    case "dimensions": {
      typeof e3.dimensions < "u" && (t.measured ?? (t.measured = {}), t.measured.width = e3.dimensions.width, t.measured.height = e3.dimensions.height, e3.setAttributes && ((e3.setAttributes === true || e3.setAttributes === "width") && (t.width = e3.dimensions.width), (e3.setAttributes === true || e3.setAttributes === "height") && (t.height = e3.dimensions.height))), typeof e3.resizing == "boolean" && (t.resizing = e3.resizing);
      break;
    }
  }
}
function ji(e3, t) {
  return Bi(e3, t);
}
function zd(e3, t) {
  return Bi(e3, t);
}
function ke(e3, t) {
  return { id: e3, type: "select", selected: t };
}
function je(e3, t = /* @__PURE__ */ new Set(), n = false) {
  const o = [];
  for (const [r, i] of e3) {
    const s = t.has(r);
    !(i.selected === void 0 && !s) && i.selected !== s && (n && (i.selected = s), o.push(ke(i.id, s)));
  }
  return o;
}
function gr({ items: e3 = [], lookup: t }) {
  var _a2;
  const n = [], o = new Map(e3.map((r) => [r.id, r]));
  for (const [r, i] of e3.entries()) {
    const s = t.get(i.id), c = ((_a2 = s == null ? void 0 : s.internals) == null ? void 0 : _a2.userNode) ?? s;
    c !== void 0 && c !== i && n.push({ id: i.id, item: i, type: "replace" }), c === void 0 && n.push({ item: i, type: "add", index: r });
  }
  for (const [r] of t) o.get(r) === void 0 && n.push({ id: r, type: "remove" });
  return n;
}
function pr(e3) {
  return { id: e3.id, type: "remove" };
}
const mr = (e3) => rf(e3), Ld = (e3) => fi(e3);
function Fi(e3) {
  return H.forwardRef(e3);
}
const Vd = typeof window < "u" ? H.useLayoutEffect : H.useEffect;
function yr(e3) {
  const [t, n] = H.useState(BigInt(0)), [o] = H.useState(() => Bd(() => n((r) => r + BigInt(1))));
  return Vd(() => {
    const r = o.get();
    r.length && (e3(r), o.reset());
  }, [t]), o;
}
function Bd(e3) {
  let t = [];
  return { get: () => t, reset: () => {
    t = [];
  }, push: (n) => {
    t.push(n), e3();
  } };
}
const Yi = H.createContext(null);
function jd({ children: e3 }) {
  const t = re(), n = H.useCallback((c) => {
    const { nodes: u = [], setNodes: a, hasDefaultNodes: f, onNodesChange: d, nodeLookup: l, fitViewQueued: h } = t.getState();
    let x = u;
    for (const _ of c) x = typeof _ == "function" ? _(x) : _;
    const p = gr({ items: x, lookup: l });
    f && a(x), p.length > 0 ? d == null ? void 0 : d(p) : h && window.requestAnimationFrame(() => {
      const { fitViewQueued: _, nodes: y, setNodes: M } = t.getState();
      _ && M(y);
    });
  }, []), o = yr(n), r = H.useCallback((c) => {
    const { edges: u = [], setEdges: a, hasDefaultEdges: f, onEdgesChange: d, edgeLookup: l } = t.getState();
    let h = u;
    for (const x of c) h = typeof x == "function" ? x(h) : x;
    f ? a(h) : d && d(gr({ items: h, lookup: l }));
  }, []), i = yr(r), s = H.useMemo(() => ({ nodeQueue: o, edgeQueue: i }), []);
  return k.jsx(Yi.Provider, { value: s, children: e3 });
}
function Fd() {
  const e3 = H.useContext(Yi);
  if (!e3) throw new Error("useBatchContext must be used within a BatchProvider");
  return e3;
}
const Yd = (e3) => !!e3.panZoom;
function so() {
  const e3 = Hd(), t = re(), n = Fd(), o = te(Yd), r = H.useMemo(() => {
    const i = (d) => t.getState().nodeLookup.get(d), s = (d) => {
      n.nodeQueue.push(d);
    }, c = (d) => {
      n.edgeQueue.push(d);
    }, u = (d) => {
      var _a2, _b;
      const { nodeLookup: l, nodeOrigin: h } = t.getState(), x = mr(d) ? d : l.get(d.id), p = x.parentId ? yi(x.position, x.measured, x.parentId, l, h) : x.position, _ = { ...x, position: p, width: ((_a2 = x.measured) == null ? void 0 : _a2.width) ?? x.width, height: ((_b = x.measured) == null ? void 0 : _b.height) ?? x.height };
      return Ue(_);
    }, a = (d, l, h = { replace: false }) => {
      s((x) => x.map((p) => {
        if (p.id === d) {
          const _ = typeof l == "function" ? l(p) : l;
          return h.replace && mr(_) ? _ : { ...p, ..._ };
        }
        return p;
      }));
    }, f = (d, l, h = { replace: false }) => {
      c((x) => x.map((p) => {
        if (p.id === d) {
          const _ = typeof l == "function" ? l(p) : l;
          return h.replace && Ld(_) ? _ : { ...p, ..._ };
        }
        return p;
      }));
    };
    return { getNodes: () => t.getState().nodes.map((d) => ({ ...d })), getNode: (d) => {
      var _a2;
      return (_a2 = i(d)) == null ? void 0 : _a2.internals.userNode;
    }, getInternalNode: i, getEdges: () => {
      const { edges: d = [] } = t.getState();
      return d.map((l) => ({ ...l }));
    }, getEdge: (d) => t.getState().edgeLookup.get(d), setNodes: s, setEdges: c, addNodes: (d) => {
      const l = Array.isArray(d) ? d : [d];
      n.nodeQueue.push((h) => [...h, ...l]);
    }, addEdges: (d) => {
      const l = Array.isArray(d) ? d : [d];
      n.edgeQueue.push((h) => [...h, ...l]);
    }, toObject: () => {
      const { nodes: d = [], edges: l = [], transform: h } = t.getState(), [x, p, _] = h;
      return { nodes: d.map((y) => ({ ...y })), edges: l.map((y) => ({ ...y })), viewport: { x, y: p, zoom: _ } };
    }, deleteElements: async ({ nodes: d = [], edges: l = [] }) => {
      const { nodes: h, edges: x, onNodesDelete: p, onEdgesDelete: _, triggerNodeChanges: y, triggerEdgeChanges: M, onDelete: g, onBeforeDelete: w } = t.getState(), { nodes: C, edges: b } = await lf({ nodesToRemove: d, edgesToRemove: l, nodes: h, edges: x, onBeforeDelete: w }), S = b.length > 0, R = C.length > 0;
      if (S) {
        const $ = b.map(pr);
        _ == null ? void 0 : _(b), M($);
      }
      if (R) {
        const $ = C.map(pr);
        p == null ? void 0 : p(C), y($);
      }
      return (R || S) && (g == null ? void 0 : g({ nodes: C, edges: b })), { deletedNodes: C, deletedEdges: b };
    }, getIntersectingNodes: (d, l = true, h) => {
      const x = jo(d), p = x ? d : u(d), _ = h !== void 0;
      return p ? (h || t.getState().nodes).filter((y) => {
        const M = t.getState().nodeLookup.get(y.id);
        if (M && !x && (y.id === d.id || !M.internals.positionAbsolute)) return false;
        const g = Ue(_ ? y : M), w = ht(g, p);
        return l && w > 0 || w >= g.width * g.height || w >= p.width * p.height;
      }) : [];
    }, isNodeIntersecting: (d, l, h = true) => {
      const p = jo(d) ? d : u(d);
      if (!p) return false;
      const _ = ht(p, l);
      return h && _ > 0 || _ >= l.width * l.height || _ >= p.width * p.height;
    }, updateNode: a, updateNodeData: (d, l, h = { replace: false }) => {
      a(d, (x) => {
        const p = typeof l == "function" ? l(x) : l;
        return h.replace ? { ...x, data: p } : { ...x, data: { ...x.data, ...p } };
      }, h);
    }, updateEdge: f, updateEdgeData: (d, l, h = { replace: false }) => {
      f(d, (x) => {
        const p = typeof l == "function" ? l(x) : l;
        return h.replace ? { ...x, data: p } : { ...x, data: { ...x.data, ...p } };
      }, h);
    }, getNodesBounds: (d) => {
      const { nodeLookup: l, nodeOrigin: h } = t.getState();
      return sf(d, { nodeLookup: l, nodeOrigin: h });
    }, getHandleConnections: ({ type: d, id: l, nodeId: h }) => {
      var _a2;
      return Array.from(((_a2 = t.getState().connectionLookup.get(`${h}-${d}${l ? `-${l}` : ""}`)) == null ? void 0 : _a2.values()) ?? []);
    }, getNodeConnections: ({ type: d, handleId: l, nodeId: h }) => {
      var _a2;
      return Array.from(((_a2 = t.getState().connectionLookup.get(`${h}${d ? l ? `-${d}-${l}` : `-${d}` : ""}`)) == null ? void 0 : _a2.values()) ?? []);
    }, fitView: async (d) => {
      const l = t.getState().fitViewResolver ?? gf();
      return t.setState({ fitViewQueued: true, fitViewOptions: d, fitViewResolver: l }), n.nodeQueue.push((h) => [...h]), l.promise;
    } };
  }, []);
  return H.useMemo(() => ({ ...r, ...e3, viewportInitialized: o }), [o]);
}
const xr = (e3) => e3.selected, Xd = typeof window < "u" ? window : void 0;
function Zd({ deleteKeyCode: e3, multiSelectionKeyCode: t }) {
  const n = re(), { deleteElements: o } = so(), r = mt(e3, { actInsideInputWithModifier: false }), i = mt(t, { target: Xd });
  H.useEffect(() => {
    if (r) {
      const { edges: s, nodes: c } = n.getState();
      o({ nodes: c.filter(xr), edges: s.filter(xr) }), n.setState({ nodesSelectionActive: false });
    }
  }, [r]), H.useEffect(() => {
    n.setState({ multiSelectionActive: i });
  }, [i]);
}
function Wd(e3) {
  const t = re();
  H.useEffect(() => {
    const n = () => {
      var _a2, _b, _c2, _d2;
      if (!e3.current || !(((_b = (_a2 = e3.current).checkVisibility) == null ? void 0 : _b.call(_a2)) ?? true)) return false;
      const o = to(e3.current);
      (o.height === 0 || o.width === 0) && ((_d2 = (_c2 = t.getState()).onError) == null ? void 0 : _d2.call(_c2, "004", we.error004())), t.setState({ width: o.width || 500, height: o.height || 500 });
    };
    if (e3.current) {
      n(), window.addEventListener("resize", n);
      const o = new ResizeObserver(() => n());
      return o.observe(e3.current), () => {
        window.removeEventListener("resize", n), o && e3.current && o.unobserve(e3.current);
      };
    }
  }, []);
}
const ln = { position: "absolute", width: "100%", height: "100%", top: 0, left: 0 }, qd = (e3) => ({ userSelectionActive: e3.userSelectionActive, lib: e3.lib, connectionInProgress: e3.connection.inProgress });
function Ud({ onPaneContextMenu: e3, zoomOnScroll: t = true, zoomOnPinch: n = true, panOnScroll: o = false, panOnScrollSpeed: r = 0.5, panOnScrollMode: i = $e.Free, zoomOnDoubleClick: s = true, panOnDrag: c = true, defaultViewport: u, translateExtent: a, minZoom: f, maxZoom: d, zoomActivationKeyCode: l, preventScrolling: h = true, children: x, noWheelClassName: p, noPanClassName: _, onViewportChange: y, isControlledViewport: M, paneClickDistance: g, selectionOnDrag: w }) {
  const C = re(), b = H.useRef(null), { userSelectionActive: S, lib: R, connectionInProgress: $ } = te(qd, ie), X = mt(l), D = H.useRef();
  Wd(b);
  const O = H.useCallback((B) => {
    y == null ? void 0 : y({ x: B[0], y: B[1], zoom: B[2] }), M || C.setState({ transform: B });
  }, [y, M]);
  return H.useEffect(() => {
    if (b.current) {
      D.current = Kf({ domNode: b.current, minZoom: f, maxZoom: d, translateExtent: a, viewport: u, onDraggingChange: (N) => C.setState({ paneDragging: N }), onPanZoomStart: (N, I) => {
        const { onViewportChangeStart: T, onMoveStart: P } = C.getState();
        P == null ? void 0 : P(N, I), T == null ? void 0 : T(I);
      }, onPanZoom: (N, I) => {
        const { onViewportChange: T, onMove: P } = C.getState();
        P == null ? void 0 : P(N, I), T == null ? void 0 : T(I);
      }, onPanZoomEnd: (N, I) => {
        const { onViewportChangeEnd: T, onMoveEnd: P } = C.getState();
        P == null ? void 0 : P(N, I), T == null ? void 0 : T(I);
      } });
      const { x: B, y: v, zoom: A } = D.current.getViewport();
      return C.setState({ panZoom: D.current, transform: [B, v, A], domNode: b.current.closest(".react-flow") }), () => {
        var _a2;
        (_a2 = D.current) == null ? void 0 : _a2.destroy();
      };
    }
  }, []), H.useEffect(() => {
    var _a2;
    (_a2 = D.current) == null ? void 0 : _a2.update({ onPaneContextMenu: e3, zoomOnScroll: t, zoomOnPinch: n, panOnScroll: o, panOnScrollSpeed: r, panOnScrollMode: i, zoomOnDoubleClick: s, panOnDrag: c, zoomActivationKeyPressed: X, preventScrolling: h, noPanClassName: _, userSelectionActive: S, noWheelClassName: p, lib: R, onTransformChange: O, connectionInProgress: $, selectionOnDrag: w, paneClickDistance: g });
  }, [e3, t, n, o, r, i, s, c, X, h, _, S, p, R, O, $, w, g]), k.jsx("div", { className: "react-flow__renderer", ref: b, style: ln, children: x });
}
const Gd = (e3) => ({ userSelectionActive: e3.userSelectionActive, userSelectionRect: e3.userSelectionRect });
function Kd() {
  const { userSelectionActive: e3, userSelectionRect: t } = te(Gd, ie);
  return e3 && t ? k.jsx("div", { className: "react-flow__selection react-flow__container", style: { width: t.width, height: t.height, transform: `translate(${t.x}px, ${t.y}px)` } }) : null;
}
const In = (e3, t) => (n) => {
  n.target === t.current && (e3 == null ? void 0 : e3(n));
}, Qd = (e3) => ({ userSelectionActive: e3.userSelectionActive, elementsSelectable: e3.elementsSelectable, connectionInProgress: e3.connection.inProgress, dragging: e3.paneDragging });
function Jd({ isSelecting: e3, selectionKeyPressed: t, selectionMode: n = dt.Full, panOnDrag: o, paneClickDistance: r, selectionOnDrag: i, onSelectionStart: s, onSelectionEnd: c, onPaneClick: u, onPaneContextMenu: a, onPaneScroll: f, onPaneMouseEnter: d, onPaneMouseMove: l, onPaneMouseLeave: h, children: x }) {
  const p = re(), { userSelectionActive: _, elementsSelectable: y, dragging: M, connectionInProgress: g } = te(Qd, ie), w = y && (e3 || _), C = H.useRef(null), b = H.useRef(), S = H.useRef(/* @__PURE__ */ new Set()), R = H.useRef(/* @__PURE__ */ new Set()), $ = H.useRef(false), X = (T) => {
    if ($.current || g) {
      $.current = false;
      return;
    }
    u == null ? void 0 : u(T), p.getState().resetSelectedElements(), p.setState({ nodesSelectionActive: false });
  }, D = (T) => {
    if (Array.isArray(o) && (o == null ? void 0 : o.includes(2))) {
      T.preventDefault();
      return;
    }
    a == null ? void 0 : a(T);
  }, O = f ? (T) => f(T) : void 0, B = (T) => {
    $.current && (T.stopPropagation(), $.current = false);
  }, v = (T) => {
    var _a2, _b;
    const { domNode: P } = p.getState();
    if (b.current = P == null ? void 0 : P.getBoundingClientRect(), !b.current) return;
    const V = T.target === C.current;
    if (!V && !!T.target.closest(".nokey") || !e3 || !(i && V || t) || T.button !== 0 || !T.isPrimary) return;
    (_b = (_a2 = T.target) == null ? void 0 : _a2.setPointerCapture) == null ? void 0 : _b.call(_a2, T.pointerId), $.current = false;
    const { x: L, y: z } = pe(T.nativeEvent, b.current);
    p.setState({ userSelectionRect: { width: 0, height: 0, startX: L, startY: z, x: L, y: z } }), V || (T.stopPropagation(), T.preventDefault());
  }, A = (T) => {
    const { userSelectionRect: P, transform: V, nodeLookup: m, edgeLookup: E, connectionLookup: L, triggerNodeChanges: z, triggerEdgeChanges: Y, defaultEdgeOptions: W, resetSelectedElements: F } = p.getState();
    if (!b.current || !P) return;
    const { x: j, y: Z } = pe(T.nativeEvent, b.current), { startX: Q, startY: J } = P;
    if (!$.current) {
      const oe = t ? 0 : r;
      if (Math.hypot(j - Q, Z - J) <= oe) return;
      F(), s == null ? void 0 : s(T);
    }
    $.current = true;
    const U = { startX: Q, startY: J, x: j < Q ? j : Q, y: Z < J ? Z : J, width: Math.abs(j - Q), height: Math.abs(Z - J) }, K = S.current, ee = R.current;
    S.current = new Set(Jn(m, U, V, n === dt.Partial, true).map((oe) => oe.id)), R.current = /* @__PURE__ */ new Set();
    const ne = (W == null ? void 0 : W.selectable) ?? true;
    for (const oe of S.current) {
      const ae = L.get(oe);
      if (ae) for (const { edgeId: _e } of ae.values()) {
        const Te = E.get(_e);
        Te && (Te.selectable ?? ne) && R.current.add(_e);
      }
    }
    if (!Fo(K, S.current)) {
      const oe = je(m, S.current, true);
      z(oe);
    }
    if (!Fo(ee, R.current)) {
      const oe = je(E, R.current);
      Y(oe);
    }
    p.setState({ userSelectionRect: U, userSelectionActive: true, nodesSelectionActive: false });
  }, N = (T) => {
    var _a2, _b;
    T.button === 0 && ((_b = (_a2 = T.target) == null ? void 0 : _a2.releasePointerCapture) == null ? void 0 : _b.call(_a2, T.pointerId), !_ && T.target === C.current && p.getState().userSelectionRect && (X == null ? void 0 : X(T)), p.setState({ userSelectionActive: false, userSelectionRect: null }), $.current && (c == null ? void 0 : c(T), p.setState({ nodesSelectionActive: S.current.size > 0 })));
  }, I = o === true || Array.isArray(o) && o.includes(0);
  return k.jsxs("div", { className: se(["react-flow__pane", { draggable: I, dragging: M, selection: e3 }]), onClick: w ? void 0 : In(X, C), onContextMenu: In(D, C), onWheel: In(O, C), onPointerEnter: w ? void 0 : d, onPointerMove: w ? A : l, onPointerUp: w ? N : void 0, onPointerDownCapture: w ? v : void 0, onClickCapture: w ? B : void 0, onPointerLeave: h, ref: C, style: ln, children: [x, k.jsx(Kd, {})] });
}
function Yn({ id: e3, store: t, unselect: n = false, nodeRef: o }) {
  const { addSelectedNodes: r, unselectNodesAndEdges: i, multiSelectionActive: s, nodeLookup: c, onError: u } = t.getState(), a = c.get(e3);
  if (!a) {
    u == null ? void 0 : u("012", we.error012(e3));
    return;
  }
  t.setState({ nodesSelectionActive: false }), a.selected ? (n || a.selected && s) && (i({ nodes: [a], edges: [] }), requestAnimationFrame(() => {
    var _a2;
    return (_a2 = o == null ? void 0 : o.current) == null ? void 0 : _a2.blur();
  })) : r([e3]);
}
function Xi({ nodeRef: e3, disabled: t = false, noDragClassName: n, handleSelector: o, nodeId: r, isSelectable: i, nodeClickDistance: s }) {
  const c = re(), [u, a] = H.useState(false), f = H.useRef();
  return H.useEffect(() => {
    f.current = Of({ getStoreItems: () => c.getState(), onNodeMouseDown: (d) => {
      Yn({ id: d, store: c, nodeRef: e3 });
    }, onDragStart: () => {
      a(true);
    }, onDragStop: () => {
      a(false);
    } });
  }, []), H.useEffect(() => {
    var _a2, _b;
    if (t) (_a2 = f.current) == null ? void 0 : _a2.destroy();
    else if (e3.current) return (_b = f.current) == null ? void 0 : _b.update({ noDragClassName: n, handleSelector: o, domNode: e3.current, isSelectable: i, nodeId: r, nodeClickDistance: s }), () => {
      var _a3;
      (_a3 = f.current) == null ? void 0 : _a3.destroy();
    };
  }, [n, o, t, i, e3, r]), u;
}
const eh = (e3) => (t) => t.selected && (t.draggable || e3 && typeof t.draggable > "u");
function Zi() {
  const e3 = re();
  return H.useCallback((n) => {
    const { nodeExtent: o, snapToGrid: r, snapGrid: i, nodesDraggable: s, onError: c, updateNodePositions: u, nodeLookup: a, nodeOrigin: f } = e3.getState(), d = /* @__PURE__ */ new Map(), l = eh(s), h = r ? i[0] : 5, x = r ? i[1] : 5, p = n.direction.x * h * n.factor, _ = n.direction.y * x * n.factor;
    for (const [, y] of a) {
      if (!l(y)) continue;
      let M = { x: y.internals.positionAbsolute.x + p, y: y.internals.positionAbsolute.y + _ };
      r && (M = _t(M, i));
      const { position: g, positionAbsolute: w } = di({ nodeId: y.id, nextPosition: M, nodeLookup: a, nodeExtent: o, nodeOrigin: f, onError: c });
      y.position = g, y.internals.positionAbsolute = w, d.set(y.id, y);
    }
    u(d);
  }, []);
}
const ao = H.createContext(null), th = ao.Provider;
ao.Consumer;
const Wi = () => H.useContext(ao), nh = (e3) => ({ connectOnClick: e3.connectOnClick, noPanClassName: e3.noPanClassName, rfId: e3.rfId }), oh = (e3, t, n) => (o) => {
  const { connectionClickStartHandle: r, connectionMode: i, connection: s } = o, { fromHandle: c, toHandle: u, isValid: a } = s, f = (u == null ? void 0 : u.nodeId) === e3 && (u == null ? void 0 : u.id) === t && (u == null ? void 0 : u.type) === n;
  return { connectingFrom: (c == null ? void 0 : c.nodeId) === e3 && (c == null ? void 0 : c.id) === t && (c == null ? void 0 : c.type) === n, connectingTo: f, clickConnecting: (r == null ? void 0 : r.nodeId) === e3 && (r == null ? void 0 : r.id) === t && (r == null ? void 0 : r.type) === n, isPossibleEndHandle: i === We.Strict ? (c == null ? void 0 : c.type) !== n : e3 !== (c == null ? void 0 : c.nodeId) || t !== (c == null ? void 0 : c.id), connectionInProcess: !!c, clickConnectionInProcess: !!r, valid: f && a };
};
function rh({ type: e3 = "source", position: t = q.Top, isValidConnection: n, isConnectable: o = true, isConnectableStart: r = true, isConnectableEnd: i = true, id: s, onConnect: c, children: u, className: a, onMouseDown: f, onTouchStart: d, ...l }, h) {
  var _a2, _b;
  const x = s || null, p = e3 === "target", _ = re(), y = Wi(), { connectOnClick: M, noPanClassName: g, rfId: w } = te(nh, ie), { connectingFrom: C, connectingTo: b, clickConnecting: S, isPossibleEndHandle: R, connectionInProcess: $, clickConnectionInProcess: X, valid: D } = te(oh(y, x, e3), ie);
  y || ((_b = (_a2 = _.getState()).onError) == null ? void 0 : _b.call(_a2, "010", we.error010()));
  const O = (A) => {
    const { defaultEdgeOptions: N, onConnect: I, hasDefaultEdges: T } = _.getState(), P = { ...N, ...A };
    if (T) {
      const { edges: V, setEdges: m } = _.getState();
      m(_f(P, V));
    }
    I == null ? void 0 : I(P), c == null ? void 0 : c(P);
  }, B = (A) => {
    if (!y) return;
    const N = vi(A.nativeEvent);
    if (r && (N && A.button === 0 || !N)) {
      const I = _.getState();
      Fn.onPointerDown(A.nativeEvent, { handleDomNode: A.currentTarget, autoPanOnConnect: I.autoPanOnConnect, connectionMode: I.connectionMode, connectionRadius: I.connectionRadius, domNode: I.domNode, nodeLookup: I.nodeLookup, lib: I.lib, isTarget: p, handleId: x, nodeId: y, flowId: I.rfId, panBy: I.panBy, cancelConnection: I.cancelConnection, onConnectStart: I.onConnectStart, onConnectEnd: I.onConnectEnd, updateConnection: I.updateConnection, onConnect: O, isValidConnection: n || I.isValidConnection, getTransform: () => _.getState().transform, getFromHandle: () => _.getState().connection.fromHandle, autoPanSpeed: I.autoPanSpeed, dragThreshold: I.connectionDragThreshold });
    }
    N ? f == null ? void 0 : f(A) : d == null ? void 0 : d(A);
  }, v = (A) => {
    const { onClickConnectStart: N, onClickConnectEnd: I, connectionClickStartHandle: T, connectionMode: P, isValidConnection: V, lib: m, rfId: E, nodeLookup: L, connection: z } = _.getState();
    if (!y || !T && !r) return;
    if (!T) {
      N == null ? void 0 : N(A.nativeEvent, { nodeId: y, handleId: x, handleType: e3 }), _.setState({ connectionClickStartHandle: { nodeId: y, type: e3, id: x } });
      return;
    }
    const Y = xi(A.target), W = n || V, { connection: F, isValid: j } = Fn.isValid(A.nativeEvent, { handle: { nodeId: y, id: x, type: e3 }, connectionMode: P, fromNodeId: T.nodeId, fromHandleId: T.id || null, fromType: T.type, isValidConnection: W, flowId: E, doc: Y, lib: m, nodeLookup: L });
    j && F && O(F);
    const Z = structuredClone(z);
    delete Z.inProgress, Z.toPosition = Z.toHandle ? Z.toHandle.position : null, I == null ? void 0 : I(A, Z), _.setState({ connectionClickStartHandle: null });
  };
  return k.jsx("div", { "data-handleid": x, "data-nodeid": y, "data-handlepos": t, "data-id": `${w}-${y}-${x}-${e3}`, className: se(["react-flow__handle", `react-flow__handle-${t}`, "nodrag", g, a, { source: !p, target: p, connectable: o, connectablestart: r, connectableend: i, clickconnecting: S, connectingfrom: C, connectingto: b, valid: D, connectionindicator: o && (!$ || R) && ($ || X ? i : r) }]), onMouseDown: B, onTouchStart: B, onClick: M ? v : void 0, ref: h, ...l, children: u });
}
const Gt = H.memo(Fi(rh));
function ih({ data: e3, isConnectable: t, sourcePosition: n = q.Bottom }) {
  return k.jsxs(k.Fragment, { children: [e3 == null ? void 0 : e3.label, k.jsx(Gt, { type: "source", position: n, isConnectable: t })] });
}
function sh({ data: e3, isConnectable: t, targetPosition: n = q.Top, sourcePosition: o = q.Bottom }) {
  return k.jsxs(k.Fragment, { children: [k.jsx(Gt, { type: "target", position: n, isConnectable: t }), e3 == null ? void 0 : e3.label, k.jsx(Gt, { type: "source", position: o, isConnectable: t })] });
}
function ah() {
  return null;
}
function ch({ data: e3, isConnectable: t, targetPosition: n = q.Top }) {
  return k.jsxs(k.Fragment, { children: [k.jsx(Gt, { type: "target", position: n, isConnectable: t }), e3 == null ? void 0 : e3.label] });
}
const Kt = { ArrowUp: { x: 0, y: -1 }, ArrowDown: { x: 0, y: 1 }, ArrowLeft: { x: -1, y: 0 }, ArrowRight: { x: 1, y: 0 } }, wr = { input: ih, default: sh, output: ch, group: ah };
function uh(e3) {
  var _a2, _b, _c2, _d2;
  return e3.internals.handleBounds === void 0 ? { width: e3.width ?? e3.initialWidth ?? ((_a2 = e3.style) == null ? void 0 : _a2.width), height: e3.height ?? e3.initialHeight ?? ((_b = e3.style) == null ? void 0 : _b.height) } : { width: e3.width ?? ((_c2 = e3.style) == null ? void 0 : _c2.width), height: e3.height ?? ((_d2 = e3.style) == null ? void 0 : _d2.height) };
}
const lh = (e3) => {
  const { width: t, height: n, x: o, y: r } = vt(e3.nodeLookup, { filter: (i) => !!i.selected });
  return { width: ge(t) ? t : null, height: ge(n) ? n : null, userSelectionActive: e3.userSelectionActive, transformString: `translate(${e3.transform[0]}px,${e3.transform[1]}px) scale(${e3.transform[2]}) translate(${o}px,${r}px)` };
};
function fh({ onSelectionContextMenu: e3, noPanClassName: t, disableKeyboardA11y: n }) {
  const o = re(), { width: r, height: i, transformString: s, userSelectionActive: c } = te(lh, ie), u = Zi(), a = H.useRef(null);
  if (H.useEffect(() => {
    var _a2;
    n || ((_a2 = a.current) == null ? void 0 : _a2.focus({ preventScroll: true }));
  }, [n]), Xi({ nodeRef: a }), c || !r || !i) return null;
  const f = e3 ? (l) => {
    const h = o.getState().nodes.filter((x) => x.selected);
    e3(l, h);
  } : void 0, d = (l) => {
    Object.prototype.hasOwnProperty.call(Kt, l.key) && (l.preventDefault(), u({ direction: Kt[l.key], factor: l.shiftKey ? 4 : 1 }));
  };
  return k.jsx("div", { className: se(["react-flow__nodesselection", "react-flow__container", t]), style: { transform: s }, children: k.jsx("div", { ref: a, className: "react-flow__nodesselection-rect", onContextMenu: f, tabIndex: n ? void 0 : -1, onKeyDown: n ? void 0 : d, style: { width: r, height: i } }) });
}
const vr = typeof window < "u" ? window : void 0, dh = (e3) => ({ nodesSelectionActive: e3.nodesSelectionActive, userSelectionActive: e3.userSelectionActive });
function qi({ children: e3, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: o, onPaneMouseLeave: r, onPaneContextMenu: i, onPaneScroll: s, paneClickDistance: c, deleteKeyCode: u, selectionKeyCode: a, selectionOnDrag: f, selectionMode: d, onSelectionStart: l, onSelectionEnd: h, multiSelectionKeyCode: x, panActivationKeyCode: p, zoomActivationKeyCode: _, elementsSelectable: y, zoomOnScroll: M, zoomOnPinch: g, panOnScroll: w, panOnScrollSpeed: C, panOnScrollMode: b, zoomOnDoubleClick: S, panOnDrag: R, defaultViewport: $, translateExtent: X, minZoom: D, maxZoom: O, preventScrolling: B, onSelectionContextMenu: v, noWheelClassName: A, noPanClassName: N, disableKeyboardA11y: I, onViewportChange: T, isControlledViewport: P }) {
  const { nodesSelectionActive: V, userSelectionActive: m } = te(dh), E = mt(a, { target: vr }), L = mt(p, { target: vr }), z = L || R, Y = L || w, W = f && z !== true, F = E || m || W;
  return Zd({ deleteKeyCode: u, multiSelectionKeyCode: x }), k.jsx(Ud, { onPaneContextMenu: i, elementsSelectable: y, zoomOnScroll: M, zoomOnPinch: g, panOnScroll: Y, panOnScrollSpeed: C, panOnScrollMode: b, zoomOnDoubleClick: S, panOnDrag: !E && z, defaultViewport: $, translateExtent: X, minZoom: D, maxZoom: O, zoomActivationKeyCode: _, preventScrolling: B, noWheelClassName: A, noPanClassName: N, onViewportChange: T, isControlledViewport: P, paneClickDistance: c, selectionOnDrag: W, children: k.jsxs(Jd, { onSelectionStart: l, onSelectionEnd: h, onPaneClick: t, onPaneMouseEnter: n, onPaneMouseMove: o, onPaneMouseLeave: r, onPaneContextMenu: i, onPaneScroll: s, panOnDrag: z, isSelecting: !!F, selectionMode: d, selectionKeyPressed: E, paneClickDistance: c, selectionOnDrag: W, children: [e3, V && k.jsx(fh, { onSelectionContextMenu: v, noPanClassName: N, disableKeyboardA11y: I })] }) });
}
qi.displayName = "FlowRenderer";
const hh = H.memo(qi), gh = (e3) => (t) => e3 ? Jn(t.nodeLookup, { x: 0, y: 0, width: t.width, height: t.height }, t.transform, true).map((n) => n.id) : Array.from(t.nodeLookup.keys());
function ph(e3) {
  return te(H.useCallback(gh(e3), [e3]), ie);
}
const mh = (e3) => e3.updateNodeInternals;
function yh() {
  const e3 = te(mh), [t] = H.useState(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((n) => {
    const o = /* @__PURE__ */ new Map();
    n.forEach((r) => {
      const i = r.target.getAttribute("data-id");
      o.set(i, { id: i, nodeElement: r.target, force: true });
    }), e3(o);
  }));
  return H.useEffect(() => () => {
    t == null ? void 0 : t.disconnect();
  }, [t]), t;
}
function xh({ node: e3, nodeType: t, hasDimensions: n, resizeObserver: o }) {
  const r = re(), i = H.useRef(null), s = H.useRef(null), c = H.useRef(e3.sourcePosition), u = H.useRef(e3.targetPosition), a = H.useRef(t), f = n && !!e3.internals.handleBounds;
  return H.useEffect(() => {
    i.current && !e3.hidden && (!f || s.current !== i.current) && (s.current && (o == null ? void 0 : o.unobserve(s.current)), o == null ? void 0 : o.observe(i.current), s.current = i.current);
  }, [f, e3.hidden]), H.useEffect(() => () => {
    s.current && (o == null ? void 0 : o.unobserve(s.current), s.current = null);
  }, []), H.useEffect(() => {
    if (i.current) {
      const d = a.current !== t, l = c.current !== e3.sourcePosition, h = u.current !== e3.targetPosition;
      (d || l || h) && (a.current = t, c.current = e3.sourcePosition, u.current = e3.targetPosition, r.getState().updateNodeInternals(/* @__PURE__ */ new Map([[e3.id, { id: e3.id, nodeElement: i.current, force: true }]])));
    }
  }, [e3.id, t, e3.sourcePosition, e3.targetPosition]), i;
}
function wh({ id: e3, onClick: t, onMouseEnter: n, onMouseMove: o, onMouseLeave: r, onContextMenu: i, onDoubleClick: s, nodesDraggable: c, elementsSelectable: u, nodesConnectable: a, nodesFocusable: f, resizeObserver: d, noDragClassName: l, noPanClassName: h, disableKeyboardA11y: x, rfId: p, nodeTypes: _, nodeClickDistance: y, onError: M }) {
  const { node: g, internals: w, isParent: C } = te((j) => {
    const Z = j.nodeLookup.get(e3), Q = j.parentLookup.has(e3);
    return { node: Z, internals: Z.internals, isParent: Q };
  }, ie);
  let b = g.type || "default", S = (_ == null ? void 0 : _[b]) || wr[b];
  S === void 0 && (M == null ? void 0 : M("003", we.error003(b)), b = "default", S = (_ == null ? void 0 : _.default) || wr.default);
  const R = !!(g.draggable || c && typeof g.draggable > "u"), $ = !!(g.selectable || u && typeof g.selectable > "u"), X = !!(g.connectable || a && typeof g.connectable > "u"), D = !!(g.focusable || f && typeof g.focusable > "u"), O = re(), B = mi(g), v = xh({ node: g, nodeType: b, hasDimensions: B, resizeObserver: d }), A = Xi({ nodeRef: v, disabled: g.hidden || !R, noDragClassName: l, handleSelector: g.dragHandle, nodeId: e3, isSelectable: $, nodeClickDistance: y }), N = Zi();
  if (g.hidden) return null;
  const I = Ne(g), T = uh(g), P = $ || R || t || n || o || r, V = n ? (j) => n(j, { ...w.userNode }) : void 0, m = o ? (j) => o(j, { ...w.userNode }) : void 0, E = r ? (j) => r(j, { ...w.userNode }) : void 0, L = i ? (j) => i(j, { ...w.userNode }) : void 0, z = s ? (j) => s(j, { ...w.userNode }) : void 0, Y = (j) => {
    const { selectNodesOnDrag: Z, nodeDragThreshold: Q } = O.getState();
    $ && (!Z || !R || Q > 0) && Yn({ id: e3, store: O, nodeRef: v }), t && t(j, { ...w.userNode });
  }, W = (j) => {
    if (!(wi(j.nativeEvent) || x)) {
      if (ai.includes(j.key) && $) {
        const Z = j.key === "Escape";
        Yn({ id: e3, store: O, unselect: Z, nodeRef: v });
      } else if (R && g.selected && Object.prototype.hasOwnProperty.call(Kt, j.key)) {
        j.preventDefault();
        const { ariaLabelConfig: Z } = O.getState();
        O.setState({ ariaLiveMessage: Z["node.a11yDescription.ariaLiveMessage"]({ direction: j.key.replace("Arrow", "").toLowerCase(), x: ~~w.positionAbsolute.x, y: ~~w.positionAbsolute.y }) }), N({ direction: Kt[j.key], factor: j.shiftKey ? 4 : 1 });
      }
    }
  }, F = () => {
    var _a2;
    if (x || !((_a2 = v.current) == null ? void 0 : _a2.matches(":focus-visible"))) return;
    const { transform: j, width: Z, height: Q, autoPanOnNodeFocus: J, setCenter: U } = O.getState();
    if (!J) return;
    Jn(/* @__PURE__ */ new Map([[e3, g]]), { x: 0, y: 0, width: Z, height: Q }, j, true).length > 0 || U(g.position.x + I.width / 2, g.position.y + I.height / 2, { zoom: j[2] });
  };
  return k.jsx("div", { className: se(["react-flow__node", `react-flow__node-${b}`, { [h]: R }, g.className, { selected: g.selected, selectable: $, parent: C, draggable: R, dragging: A }]), ref: v, style: { zIndex: w.z, transform: `translate(${w.positionAbsolute.x}px,${w.positionAbsolute.y}px)`, pointerEvents: P ? "all" : "none", visibility: B ? "visible" : "hidden", ...g.style, ...T }, "data-id": e3, "data-testid": `rf__node-${e3}`, onMouseEnter: V, onMouseMove: m, onMouseLeave: E, onContextMenu: L, onClick: Y, onDoubleClick: z, onKeyDown: D ? W : void 0, tabIndex: D ? 0 : void 0, onFocus: D ? F : void 0, role: g.ariaRole ?? (D ? "group" : void 0), "aria-roledescription": "node", "aria-describedby": x ? void 0 : `${zi}-${p}`, "aria-label": g.ariaLabel, ...g.domAttributes, children: k.jsx(th, { value: e3, children: k.jsx(S, { id: e3, data: g.data, type: b, positionAbsoluteX: w.positionAbsolute.x, positionAbsoluteY: w.positionAbsolute.y, selected: g.selected ?? false, selectable: $, draggable: R, deletable: g.deletable ?? true, isConnectable: X, sourcePosition: g.sourcePosition, targetPosition: g.targetPosition, dragging: A, dragHandle: g.dragHandle, zIndex: w.z, parentId: g.parentId, ...I }) }) });
}
var vh = H.memo(wh);
const _h = (e3) => ({ nodesDraggable: e3.nodesDraggable, nodesConnectable: e3.nodesConnectable, nodesFocusable: e3.nodesFocusable, elementsSelectable: e3.elementsSelectable, onError: e3.onError });
function Ui(e3) {
  const { nodesDraggable: t, nodesConnectable: n, nodesFocusable: o, elementsSelectable: r, onError: i } = te(_h, ie), s = ph(e3.onlyRenderVisibleElements), c = yh();
  return k.jsx("div", { className: "react-flow__nodes", style: ln, children: s.map((u) => k.jsx(vh, { id: u, nodeTypes: e3.nodeTypes, nodeExtent: e3.nodeExtent, onClick: e3.onNodeClick, onMouseEnter: e3.onNodeMouseEnter, onMouseMove: e3.onNodeMouseMove, onMouseLeave: e3.onNodeMouseLeave, onContextMenu: e3.onNodeContextMenu, onDoubleClick: e3.onNodeDoubleClick, noDragClassName: e3.noDragClassName, noPanClassName: e3.noPanClassName, rfId: e3.rfId, disableKeyboardA11y: e3.disableKeyboardA11y, resizeObserver: c, nodesDraggable: t, nodesConnectable: n, nodesFocusable: o, elementsSelectable: r, nodeClickDistance: e3.nodeClickDistance, onError: i }, u)) });
}
Ui.displayName = "NodeRenderer";
const Eh = H.memo(Ui);
function bh(e3) {
  return te(H.useCallback((n) => {
    if (!e3) return n.edges.map((r) => r.id);
    const o = [];
    if (n.width && n.height) for (const r of n.edges) {
      const i = n.nodeLookup.get(r.source), s = n.nodeLookup.get(r.target);
      i && s && xf({ sourceNode: i, targetNode: s, width: n.width, height: n.height, transform: n.transform }) && o.push(r.id);
    }
    return o;
  }, [e3]), ie);
}
const Sh = ({ color: e3 = "none", strokeWidth: t = 1 }) => {
  const n = { strokeWidth: t, ...e3 && { stroke: e3 } };
  return k.jsx("polyline", { className: "arrow", style: n, strokeLinecap: "round", fill: "none", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4" });
}, Nh = ({ color: e3 = "none", strokeWidth: t = 1 }) => {
  const n = { strokeWidth: t, ...e3 && { stroke: e3, fill: e3 } };
  return k.jsx("polyline", { className: "arrowclosed", style: n, strokeLinecap: "round", strokeLinejoin: "round", points: "-5,-4 0,0 -5,4 -5,-4" });
}, _r = { [Wt.Arrow]: Sh, [Wt.ArrowClosed]: Nh };
function Ch(e3) {
  const t = re();
  return H.useMemo(() => {
    var _a2, _b;
    return Object.prototype.hasOwnProperty.call(_r, e3) ? _r[e3] : ((_b = (_a2 = t.getState()).onError) == null ? void 0 : _b.call(_a2, "009", we.error009(e3)), null);
  }, [e3]);
}
const Mh = ({ id: e3, type: t, color: n, width: o = 12.5, height: r = 12.5, markerUnits: i = "strokeWidth", strokeWidth: s, orient: c = "auto-start-reverse" }) => {
  const u = Ch(t);
  return u ? k.jsx("marker", { className: "react-flow__arrowhead", id: e3, markerWidth: `${o}`, markerHeight: `${r}`, viewBox: "-10 -10 20 20", markerUnits: i, orient: c, refX: "0", refY: "0", children: k.jsx(u, { color: n, strokeWidth: s }) }) : null;
}, Gi = ({ defaultColor: e3, rfId: t }) => {
  const n = te((i) => i.edges), o = te((i) => i.defaultEdgeOptions), r = H.useMemo(() => Cf(n, { id: t, defaultColor: e3, defaultMarkerStart: o == null ? void 0 : o.markerStart, defaultMarkerEnd: o == null ? void 0 : o.markerEnd }), [n, o, t, e3]);
  return r.length ? k.jsx("svg", { className: "react-flow__marker", "aria-hidden": "true", children: k.jsx("defs", { children: r.map((i) => k.jsx(Mh, { id: i.id, type: i.type, color: i.color, width: i.width, height: i.height, markerUnits: i.markerUnits, strokeWidth: i.strokeWidth, orient: i.orient }, i.id)) }) }) : null;
};
Gi.displayName = "MarkerDefinitions";
var Ah = H.memo(Gi);
function Ki({ x: e3, y: t, label: n, labelStyle: o, labelShowBg: r = true, labelBgStyle: i, labelBgPadding: s = [2, 4], labelBgBorderRadius: c = 2, children: u, className: a, ...f }) {
  const [d, l] = H.useState({ x: 1, y: 0, width: 0, height: 0 }), h = se(["react-flow__edge-textwrapper", a]), x = H.useRef(null);
  return H.useEffect(() => {
    if (x.current) {
      const p = x.current.getBBox();
      l({ x: p.x, y: p.y, width: p.width, height: p.height });
    }
  }, [n]), n ? k.jsxs("g", { transform: `translate(${e3 - d.width / 2} ${t - d.height / 2})`, className: h, visibility: d.width ? "visible" : "hidden", ...f, children: [r && k.jsx("rect", { width: d.width + 2 * s[0], x: -s[0], y: -s[1], height: d.height + 2 * s[1], className: "react-flow__edge-textbg", style: i, rx: c, ry: c }), k.jsx("text", { className: "react-flow__edge-text", y: d.height / 2, dy: "0.3em", ref: x, style: o, children: n }), u] }) : null;
}
Ki.displayName = "EdgeText";
const Ih = H.memo(Ki);
function fn({ path: e3, labelX: t, labelY: n, label: o, labelStyle: r, labelShowBg: i, labelBgStyle: s, labelBgPadding: c, labelBgBorderRadius: u, interactionWidth: a = 20, ...f }) {
  return k.jsxs(k.Fragment, { children: [k.jsx("path", { ...f, d: e3, fill: "none", className: se(["react-flow__edge-path", f.className]) }), a ? k.jsx("path", { d: e3, fill: "none", strokeOpacity: 0, strokeWidth: a, className: "react-flow__edge-interaction" }) : null, o && ge(t) && ge(n) ? k.jsx(Ih, { x: t, y: n, label: o, labelStyle: r, labelShowBg: i, labelBgStyle: s, labelBgPadding: c, labelBgBorderRadius: u }) : null] });
}
function Er({ pos: e3, x1: t, y1: n, x2: o, y2: r }) {
  return e3 === q.Left || e3 === q.Right ? [0.5 * (t + o), n] : [t, 0.5 * (n + r)];
}
function Qi({ sourceX: e3, sourceY: t, sourcePosition: n = q.Bottom, targetX: o, targetY: r, targetPosition: i = q.Top }) {
  const [s, c] = Er({ pos: n, x1: e3, y1: t, x2: o, y2: r }), [u, a] = Er({ pos: i, x1: o, y1: r, x2: e3, y2: t }), [f, d, l, h] = _i({ sourceX: e3, sourceY: t, targetX: o, targetY: r, sourceControlX: s, sourceControlY: c, targetControlX: u, targetControlY: a });
  return [`M${e3},${t} C${s},${c} ${u},${a} ${o},${r}`, f, d, l, h];
}
function Ji(e3) {
  return H.memo(({ id: t, sourceX: n, sourceY: o, targetX: r, targetY: i, sourcePosition: s, targetPosition: c, label: u, labelStyle: a, labelShowBg: f, labelBgStyle: d, labelBgPadding: l, labelBgBorderRadius: h, style: x, markerEnd: p, markerStart: _, interactionWidth: y }) => {
    const [M, g, w] = Qi({ sourceX: n, sourceY: o, sourcePosition: s, targetX: r, targetY: i, targetPosition: c }), C = e3.isInternal ? void 0 : t;
    return k.jsx(fn, { id: C, path: M, labelX: g, labelY: w, label: u, labelStyle: a, labelShowBg: f, labelBgStyle: d, labelBgPadding: l, labelBgBorderRadius: h, style: x, markerEnd: p, markerStart: _, interactionWidth: y });
  });
}
const Th = Ji({ isInternal: false }), es = Ji({ isInternal: true });
Th.displayName = "SimpleBezierEdge";
es.displayName = "SimpleBezierEdgeInternal";
function ts(e3) {
  return H.memo(({ id: t, sourceX: n, sourceY: o, targetX: r, targetY: i, label: s, labelStyle: c, labelShowBg: u, labelBgStyle: a, labelBgPadding: f, labelBgBorderRadius: d, style: l, sourcePosition: h = q.Bottom, targetPosition: x = q.Top, markerEnd: p, markerStart: _, pathOptions: y, interactionWidth: M }) => {
    const [g, w, C] = Vn({ sourceX: n, sourceY: o, sourcePosition: h, targetX: r, targetY: i, targetPosition: x, borderRadius: y == null ? void 0 : y.borderRadius, offset: y == null ? void 0 : y.offset, stepPosition: y == null ? void 0 : y.stepPosition }), b = e3.isInternal ? void 0 : t;
    return k.jsx(fn, { id: b, path: g, labelX: w, labelY: C, label: s, labelStyle: c, labelShowBg: u, labelBgStyle: a, labelBgPadding: f, labelBgBorderRadius: d, style: l, markerEnd: p, markerStart: _, interactionWidth: M });
  });
}
const ns = ts({ isInternal: false }), os = ts({ isInternal: true });
ns.displayName = "SmoothStepEdge";
os.displayName = "SmoothStepEdgeInternal";
function rs(e3) {
  return H.memo(({ id: t, ...n }) => {
    var _a2;
    const o = e3.isInternal ? void 0 : t;
    return k.jsx(ns, { ...n, id: o, pathOptions: H.useMemo(() => {
      var _a3;
      return { borderRadius: 0, offset: (_a3 = n.pathOptions) == null ? void 0 : _a3.offset };
    }, [(_a2 = n.pathOptions) == null ? void 0 : _a2.offset]) });
  });
}
const kh = rs({ isInternal: false }), is = rs({ isInternal: true });
kh.displayName = "StepEdge";
is.displayName = "StepEdgeInternal";
function ss(e3) {
  return H.memo(({ id: t, sourceX: n, sourceY: o, targetX: r, targetY: i, label: s, labelStyle: c, labelShowBg: u, labelBgStyle: a, labelBgPadding: f, labelBgBorderRadius: d, style: l, markerEnd: h, markerStart: x, interactionWidth: p }) => {
    const [_, y, M] = Si({ sourceX: n, sourceY: o, targetX: r, targetY: i }), g = e3.isInternal ? void 0 : t;
    return k.jsx(fn, { id: g, path: _, labelX: y, labelY: M, label: s, labelStyle: c, labelShowBg: u, labelBgStyle: a, labelBgPadding: f, labelBgBorderRadius: d, style: l, markerEnd: h, markerStart: x, interactionWidth: p });
  });
}
const Ph = ss({ isInternal: false }), as = ss({ isInternal: true });
Ph.displayName = "StraightEdge";
as.displayName = "StraightEdgeInternal";
function cs(e3) {
  return H.memo(({ id: t, sourceX: n, sourceY: o, targetX: r, targetY: i, sourcePosition: s = q.Bottom, targetPosition: c = q.Top, label: u, labelStyle: a, labelShowBg: f, labelBgStyle: d, labelBgPadding: l, labelBgBorderRadius: h, style: x, markerEnd: p, markerStart: _, pathOptions: y, interactionWidth: M }) => {
    const [g, w, C] = Ei({ sourceX: n, sourceY: o, sourcePosition: s, targetX: r, targetY: i, targetPosition: c, curvature: y == null ? void 0 : y.curvature }), b = e3.isInternal ? void 0 : t;
    return k.jsx(fn, { id: b, path: g, labelX: w, labelY: C, label: u, labelStyle: a, labelShowBg: f, labelBgStyle: d, labelBgPadding: l, labelBgBorderRadius: h, style: x, markerEnd: p, markerStart: _, interactionWidth: M });
  });
}
const Rh = cs({ isInternal: false }), us = cs({ isInternal: true });
Rh.displayName = "BezierEdge";
us.displayName = "BezierEdgeInternal";
const br = { default: us, straight: as, step: is, smoothstep: os, simplebezier: es }, Sr = { sourceX: null, sourceY: null, targetX: null, targetY: null, sourcePosition: null, targetPosition: null }, $h = (e3, t, n) => n === q.Left ? e3 - t : n === q.Right ? e3 + t : e3, Dh = (e3, t, n) => n === q.Top ? e3 - t : n === q.Bottom ? e3 + t : e3, Nr = "react-flow__edgeupdater";
function Cr({ position: e3, centerX: t, centerY: n, radius: o = 10, onMouseDown: r, onMouseEnter: i, onMouseOut: s, type: c }) {
  return k.jsx("circle", { onMouseDown: r, onMouseEnter: i, onMouseOut: s, className: se([Nr, `${Nr}-${c}`]), cx: $h(t, o, e3), cy: Dh(n, o, e3), r: o, stroke: "transparent", fill: "transparent" });
}
function Hh({ isReconnectable: e3, reconnectRadius: t, edge: n, sourceX: o, sourceY: r, targetX: i, targetY: s, sourcePosition: c, targetPosition: u, onReconnect: a, onReconnectStart: f, onReconnectEnd: d, setReconnecting: l, setUpdateHover: h }) {
  const x = re(), p = (w, C) => {
    if (w.button !== 0) return;
    const { autoPanOnConnect: b, domNode: S, isValidConnection: R, connectionMode: $, connectionRadius: X, lib: D, onConnectStart: O, onConnectEnd: B, cancelConnection: v, nodeLookup: A, rfId: N, panBy: I, updateConnection: T } = x.getState(), P = C.type === "target", V = (L, z) => {
      l(false), d == null ? void 0 : d(L, n, C.type, z);
    }, m = (L) => a == null ? void 0 : a(n, L), E = (L, z) => {
      l(true), f == null ? void 0 : f(w, n, C.type), O == null ? void 0 : O(L, z);
    };
    Fn.onPointerDown(w.nativeEvent, { autoPanOnConnect: b, connectionMode: $, connectionRadius: X, domNode: S, handleId: C.id, nodeId: C.nodeId, nodeLookup: A, isTarget: P, edgeUpdaterType: C.type, lib: D, flowId: N, cancelConnection: v, panBy: I, isValidConnection: R, onConnect: m, onConnectStart: E, onConnectEnd: B, onReconnectEnd: V, updateConnection: T, getTransform: () => x.getState().transform, getFromHandle: () => x.getState().connection.fromHandle, dragThreshold: x.getState().connectionDragThreshold, handleDomNode: w.currentTarget });
  }, _ = (w) => p(w, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }), y = (w) => p(w, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }), M = () => h(true), g = () => h(false);
  return k.jsxs(k.Fragment, { children: [(e3 === true || e3 === "source") && k.jsx(Cr, { position: c, centerX: o, centerY: r, radius: t, onMouseDown: _, onMouseEnter: M, onMouseOut: g, type: "source" }), (e3 === true || e3 === "target") && k.jsx(Cr, { position: u, centerX: i, centerY: s, radius: t, onMouseDown: y, onMouseEnter: M, onMouseOut: g, type: "target" })] });
}
function Oh({ id: e3, edgesFocusable: t, edgesReconnectable: n, elementsSelectable: o, onClick: r, onDoubleClick: i, onContextMenu: s, onMouseEnter: c, onMouseMove: u, onMouseLeave: a, reconnectRadius: f, onReconnect: d, onReconnectStart: l, onReconnectEnd: h, rfId: x, edgeTypes: p, noPanClassName: _, onError: y, disableKeyboardA11y: M }) {
  let g = te((U) => U.edgeLookup.get(e3));
  const w = te((U) => U.defaultEdgeOptions);
  g = w ? { ...w, ...g } : g;
  let C = g.type || "default", b = (p == null ? void 0 : p[C]) || br[C];
  b === void 0 && (y == null ? void 0 : y("011", we.error011(C)), C = "default", b = (p == null ? void 0 : p.default) || br.default);
  const S = !!(g.focusable || t && typeof g.focusable > "u"), R = typeof d < "u" && (g.reconnectable || n && typeof g.reconnectable > "u"), $ = !!(g.selectable || o && typeof g.selectable > "u"), X = H.useRef(null), [D, O] = H.useState(false), [B, v] = H.useState(false), A = re(), { zIndex: N, sourceX: I, sourceY: T, targetX: P, targetY: V, sourcePosition: m, targetPosition: E } = te(H.useCallback((U) => {
    const K = U.nodeLookup.get(g.source), ee = U.nodeLookup.get(g.target);
    if (!K || !ee) return { zIndex: g.zIndex, ...Sr };
    const ne = Nf({ id: e3, sourceNode: K, targetNode: ee, sourceHandle: g.sourceHandle || null, targetHandle: g.targetHandle || null, connectionMode: U.connectionMode, onError: y });
    return { zIndex: yf({ selected: g.selected, zIndex: g.zIndex, sourceNode: K, targetNode: ee, elevateOnSelect: U.elevateEdgesOnSelect }), ...ne || Sr };
  }, [g.source, g.target, g.sourceHandle, g.targetHandle, g.selected, g.zIndex]), ie), L = H.useMemo(() => g.markerStart ? `url('#${Bn(g.markerStart, x)}')` : void 0, [g.markerStart, x]), z = H.useMemo(() => g.markerEnd ? `url('#${Bn(g.markerEnd, x)}')` : void 0, [g.markerEnd, x]);
  if (g.hidden || I === null || T === null || P === null || V === null) return null;
  const Y = (U) => {
    var _a2;
    const { addSelectedEdges: K, unselectNodesAndEdges: ee, multiSelectionActive: ne } = A.getState();
    $ && (A.setState({ nodesSelectionActive: false }), g.selected && ne ? (ee({ nodes: [], edges: [g] }), (_a2 = X.current) == null ? void 0 : _a2.blur()) : K([e3])), r && r(U, g);
  }, W = i ? (U) => {
    i(U, { ...g });
  } : void 0, F = s ? (U) => {
    s(U, { ...g });
  } : void 0, j = c ? (U) => {
    c(U, { ...g });
  } : void 0, Z = u ? (U) => {
    u(U, { ...g });
  } : void 0, Q = a ? (U) => {
    a(U, { ...g });
  } : void 0, J = (U) => {
    var _a2;
    if (!M && ai.includes(U.key) && $) {
      const { unselectNodesAndEdges: K, addSelectedEdges: ee } = A.getState();
      U.key === "Escape" ? ((_a2 = X.current) == null ? void 0 : _a2.blur(), K({ edges: [g] })) : ee([e3]);
    }
  };
  return k.jsx("svg", { style: { zIndex: N }, children: k.jsxs("g", { className: se(["react-flow__edge", `react-flow__edge-${C}`, g.className, _, { selected: g.selected, animated: g.animated, inactive: !$ && !r, updating: D, selectable: $ }]), onClick: Y, onDoubleClick: W, onContextMenu: F, onMouseEnter: j, onMouseMove: Z, onMouseLeave: Q, onKeyDown: S ? J : void 0, tabIndex: S ? 0 : void 0, role: g.ariaRole ?? (S ? "group" : "img"), "aria-roledescription": "edge", "data-id": e3, "data-testid": `rf__edge-${e3}`, "aria-label": g.ariaLabel === null ? void 0 : g.ariaLabel || `Edge from ${g.source} to ${g.target}`, "aria-describedby": S ? `${Li}-${x}` : void 0, ref: X, ...g.domAttributes, children: [!B && k.jsx(b, { id: e3, source: g.source, target: g.target, type: g.type, selected: g.selected, animated: g.animated, selectable: $, deletable: g.deletable ?? true, label: g.label, labelStyle: g.labelStyle, labelShowBg: g.labelShowBg, labelBgStyle: g.labelBgStyle, labelBgPadding: g.labelBgPadding, labelBgBorderRadius: g.labelBgBorderRadius, sourceX: I, sourceY: T, targetX: P, targetY: V, sourcePosition: m, targetPosition: E, data: g.data, style: g.style, sourceHandleId: g.sourceHandle, targetHandleId: g.targetHandle, markerStart: L, markerEnd: z, pathOptions: "pathOptions" in g ? g.pathOptions : void 0, interactionWidth: g.interactionWidth }), R && k.jsx(Hh, { edge: g, isReconnectable: R, reconnectRadius: f, onReconnect: d, onReconnectStart: l, onReconnectEnd: h, sourceX: I, sourceY: T, targetX: P, targetY: V, sourcePosition: m, targetPosition: E, setUpdateHover: O, setReconnecting: v })] }) });
}
var zh = H.memo(Oh);
const Lh = (e3) => ({ edgesFocusable: e3.edgesFocusable, edgesReconnectable: e3.edgesReconnectable, elementsSelectable: e3.elementsSelectable, connectionMode: e3.connectionMode, onError: e3.onError });
function ls({ defaultMarkerColor: e3, onlyRenderVisibleElements: t, rfId: n, edgeTypes: o, noPanClassName: r, onReconnect: i, onEdgeContextMenu: s, onEdgeMouseEnter: c, onEdgeMouseMove: u, onEdgeMouseLeave: a, onEdgeClick: f, reconnectRadius: d, onEdgeDoubleClick: l, onReconnectStart: h, onReconnectEnd: x, disableKeyboardA11y: p }) {
  const { edgesFocusable: _, edgesReconnectable: y, elementsSelectable: M, onError: g } = te(Lh, ie), w = bh(t);
  return k.jsxs("div", { className: "react-flow__edges", children: [k.jsx(Ah, { defaultColor: e3, rfId: n }), w.map((C) => k.jsx(zh, { id: C, edgesFocusable: _, edgesReconnectable: y, elementsSelectable: M, noPanClassName: r, onReconnect: i, onContextMenu: s, onMouseEnter: c, onMouseMove: u, onMouseLeave: a, onClick: f, reconnectRadius: d, onDoubleClick: l, onReconnectStart: h, onReconnectEnd: x, rfId: n, onError: g, edgeTypes: o, disableKeyboardA11y: p }, C))] });
}
ls.displayName = "EdgeRenderer";
const Vh = H.memo(ls), Bh = (e3) => `translate(${e3.transform[0]}px,${e3.transform[1]}px) scale(${e3.transform[2]})`;
function jh({ children: e3 }) {
  const t = te(Bh);
  return k.jsx("div", { className: "react-flow__viewport xyflow__viewport react-flow__container", style: { transform: t }, children: e3 });
}
function Fh(e3) {
  const t = so(), n = H.useRef(false);
  H.useEffect(() => {
    !n.current && t.viewportInitialized && e3 && (setTimeout(() => e3(t), 1), n.current = true);
  }, [e3, t.viewportInitialized]);
}
const Yh = (e3) => {
  var _a2;
  return (_a2 = e3.panZoom) == null ? void 0 : _a2.syncViewport;
};
function Xh(e3) {
  const t = te(Yh), n = re();
  return H.useEffect(() => {
    e3 && (t == null ? void 0 : t(e3), n.setState({ transform: [e3.x, e3.y, e3.zoom] }));
  }, [e3, t]), null;
}
function Zh(e3) {
  return e3.connection.inProgress ? { ...e3.connection, to: Et(e3.connection.to, e3.transform) } : { ...e3.connection };
}
function Wh(e3) {
  return Zh;
}
function qh(e3) {
  const t = Wh();
  return te(t, ie);
}
const Uh = (e3) => ({ nodesConnectable: e3.nodesConnectable, isValid: e3.connection.isValid, inProgress: e3.connection.inProgress, width: e3.width, height: e3.height });
function Gh({ containerStyle: e3, style: t, type: n, component: o }) {
  const { nodesConnectable: r, width: i, height: s, isValid: c, inProgress: u } = te(Uh, ie);
  return !(i && r && u) ? null : k.jsx("svg", { style: e3, width: i, height: s, className: "react-flow__connectionline react-flow__container", children: k.jsx("g", { className: se(["react-flow__connection", li(c)]), children: k.jsx(fs, { style: t, type: n, CustomComponent: o, isValid: c }) }) });
}
const fs = ({ style: e3, type: t = Ae.Bezier, CustomComponent: n, isValid: o }) => {
  const { inProgress: r, from: i, fromNode: s, fromHandle: c, fromPosition: u, to: a, toNode: f, toHandle: d, toPosition: l } = qh();
  if (!r) return;
  if (n) return k.jsx(n, { connectionLineType: t, connectionLineStyle: e3, fromNode: s, fromHandle: c, fromX: i.x, fromY: i.y, toX: a.x, toY: a.y, fromPosition: u, toPosition: l, connectionStatus: li(o), toNode: f, toHandle: d });
  let h = "";
  const x = { sourceX: i.x, sourceY: i.y, sourcePosition: u, targetX: a.x, targetY: a.y, targetPosition: l };
  switch (t) {
    case Ae.Bezier:
      [h] = Ei(x);
      break;
    case Ae.SimpleBezier:
      [h] = Qi(x);
      break;
    case Ae.Step:
      [h] = Vn({ ...x, borderRadius: 0 });
      break;
    case Ae.SmoothStep:
      [h] = Vn(x);
      break;
    default:
      [h] = Si(x);
  }
  return k.jsx("path", { d: h, fill: "none", className: "react-flow__connection-path", style: e3 });
};
fs.displayName = "ConnectionLine";
const Kh = {};
function Mr(e3 = Kh) {
  H.useRef(e3), re(), H.useEffect(() => {
  }, [e3]);
}
function Qh() {
  re(), H.useRef(false), H.useEffect(() => {
  }, []);
}
function ds({ nodeTypes: e3, edgeTypes: t, onInit: n, onNodeClick: o, onEdgeClick: r, onNodeDoubleClick: i, onEdgeDoubleClick: s, onNodeMouseEnter: c, onNodeMouseMove: u, onNodeMouseLeave: a, onNodeContextMenu: f, onSelectionContextMenu: d, onSelectionStart: l, onSelectionEnd: h, connectionLineType: x, connectionLineStyle: p, connectionLineComponent: _, connectionLineContainerStyle: y, selectionKeyCode: M, selectionOnDrag: g, selectionMode: w, multiSelectionKeyCode: C, panActivationKeyCode: b, zoomActivationKeyCode: S, deleteKeyCode: R, onlyRenderVisibleElements: $, elementsSelectable: X, defaultViewport: D, translateExtent: O, minZoom: B, maxZoom: v, preventScrolling: A, defaultMarkerColor: N, zoomOnScroll: I, zoomOnPinch: T, panOnScroll: P, panOnScrollSpeed: V, panOnScrollMode: m, zoomOnDoubleClick: E, panOnDrag: L, onPaneClick: z, onPaneMouseEnter: Y, onPaneMouseMove: W, onPaneMouseLeave: F, onPaneScroll: j, onPaneContextMenu: Z, paneClickDistance: Q, nodeClickDistance: J, onEdgeContextMenu: U, onEdgeMouseEnter: K, onEdgeMouseMove: ee, onEdgeMouseLeave: ne, reconnectRadius: oe, onReconnect: ae, onReconnectStart: _e, onReconnectEnd: Te, noDragClassName: bt, noWheelClassName: St, noPanClassName: Ke, disableKeyboardA11y: Qe, nodeExtent: dn, rfId: Nt, viewport: Le, onViewportChange: Je }) {
  return Mr(e3), Mr(t), Qh(), Fh(n), Xh(Le), k.jsx(hh, { onPaneClick: z, onPaneMouseEnter: Y, onPaneMouseMove: W, onPaneMouseLeave: F, onPaneContextMenu: Z, onPaneScroll: j, paneClickDistance: Q, deleteKeyCode: R, selectionKeyCode: M, selectionOnDrag: g, selectionMode: w, onSelectionStart: l, onSelectionEnd: h, multiSelectionKeyCode: C, panActivationKeyCode: b, zoomActivationKeyCode: S, elementsSelectable: X, zoomOnScroll: I, zoomOnPinch: T, zoomOnDoubleClick: E, panOnScroll: P, panOnScrollSpeed: V, panOnScrollMode: m, panOnDrag: L, defaultViewport: D, translateExtent: O, minZoom: B, maxZoom: v, onSelectionContextMenu: d, preventScrolling: A, noDragClassName: bt, noWheelClassName: St, noPanClassName: Ke, disableKeyboardA11y: Qe, onViewportChange: Je, isControlledViewport: !!Le, children: k.jsxs(jh, { children: [k.jsx(Vh, { edgeTypes: t, onEdgeClick: r, onEdgeDoubleClick: s, onReconnect: ae, onReconnectStart: _e, onReconnectEnd: Te, onlyRenderVisibleElements: $, onEdgeContextMenu: U, onEdgeMouseEnter: K, onEdgeMouseMove: ee, onEdgeMouseLeave: ne, reconnectRadius: oe, defaultMarkerColor: N, noPanClassName: Ke, disableKeyboardA11y: Qe, rfId: Nt }), k.jsx(Gh, { style: p, type: x, component: _, containerStyle: y }), k.jsx("div", { className: "react-flow__edgelabel-renderer" }), k.jsx(Eh, { nodeTypes: e3, onNodeClick: o, onNodeDoubleClick: i, onNodeMouseEnter: c, onNodeMouseMove: u, onNodeMouseLeave: a, onNodeContextMenu: f, nodeClickDistance: J, onlyRenderVisibleElements: $, noPanClassName: Ke, noDragClassName: bt, disableKeyboardA11y: Qe, nodeExtent: dn, rfId: Nt }), k.jsx("div", { className: "react-flow__viewport-portal" })] }) });
}
ds.displayName = "GraphView";
const Jh = H.memo(ds), Ar = ({ nodes: e3, edges: t, defaultNodes: n, defaultEdges: o, width: r, height: i, fitView: s, fitViewOptions: c, minZoom: u = 0.5, maxZoom: a = 2, nodeOrigin: f, nodeExtent: d } = {}) => {
  const l = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), _ = o ?? t ?? [], y = n ?? e3 ?? [], M = f ?? [0, 0], g = d ?? ft;
  Mi(x, p, _);
  const w = jn(y, l, h, { nodeOrigin: M, nodeExtent: g, elevateNodesOnSelect: false });
  let C = [0, 0, 1];
  if (s && r && i) {
    const b = vt(l, { filter: (X) => !!((X.width || X.initialWidth) && (X.height || X.initialHeight)) }), { x: S, y: R, zoom: $ } = eo(b, r, i, u, a, (c == null ? void 0 : c.padding) ?? 0.1);
    C = [S, R, $];
  }
  return { rfId: "1", width: r ?? 0, height: i ?? 0, transform: C, nodes: y, nodesInitialized: w, nodeLookup: l, parentLookup: h, edges: _, edgeLookup: p, connectionLookup: x, onNodesChange: null, onEdgesChange: null, hasDefaultNodes: n !== void 0, hasDefaultEdges: o !== void 0, panZoom: null, minZoom: u, maxZoom: a, translateExtent: ft, nodeExtent: g, nodesSelectionActive: false, userSelectionActive: false, userSelectionRect: null, connectionMode: We.Strict, domNode: null, paneDragging: false, noPanClassName: "nopan", nodeOrigin: M, nodeDragThreshold: 1, connectionDragThreshold: 1, snapGrid: [15, 15], snapToGrid: false, nodesDraggable: true, nodesConnectable: true, nodesFocusable: true, edgesFocusable: true, edgesReconnectable: true, elementsSelectable: true, elevateNodesOnSelect: true, elevateEdgesOnSelect: false, selectNodesOnDrag: true, multiSelectionActive: false, fitViewQueued: s ?? false, fitViewOptions: c, fitViewResolver: null, connection: { ...ui }, connectionClickStartHandle: null, connectOnClick: true, ariaLiveMessage: "", autoPanOnConnect: true, autoPanOnNodeDrag: true, autoPanOnNodeFocus: true, autoPanSpeed: 15, connectionRadius: 20, onError: ff, isValidConnection: void 0, onSelectionChangeHandlers: [], lib: "react", debug: false, ariaLabelConfig: ci };
}, eg = ({ nodes: e3, edges: t, defaultNodes: n, defaultEdges: o, width: r, height: i, fitView: s, fitViewOptions: c, minZoom: u, maxZoom: a, nodeOrigin: f, nodeExtent: d }) => yd((l, h) => {
  async function x() {
    const { nodeLookup: p, panZoom: _, fitViewOptions: y, fitViewResolver: M, width: g, height: w, minZoom: C, maxZoom: b } = h();
    _ && (await uf({ nodes: p, width: g, height: w, panZoom: _, minZoom: C, maxZoom: b }, y), M == null ? void 0 : M.resolve(true), l({ fitViewResolver: null }));
  }
  return { ...Ar({ nodes: e3, edges: t, width: r, height: i, fitView: s, fitViewOptions: c, minZoom: u, maxZoom: a, nodeOrigin: f, nodeExtent: d, defaultNodes: n, defaultEdges: o }), setNodes: (p) => {
    const { nodeLookup: _, parentLookup: y, nodeOrigin: M, elevateNodesOnSelect: g, fitViewQueued: w } = h(), C = jn(p, _, y, { nodeOrigin: M, nodeExtent: d, elevateNodesOnSelect: g, checkEquality: true });
    w && C ? (x(), l({ nodes: p, nodesInitialized: C, fitViewQueued: false, fitViewOptions: void 0 })) : l({ nodes: p, nodesInitialized: C });
  }, setEdges: (p) => {
    const { connectionLookup: _, edgeLookup: y } = h();
    Mi(_, y, p), l({ edges: p });
  }, setDefaultNodesAndEdges: (p, _) => {
    if (p) {
      const { setNodes: y } = h();
      y(p), l({ hasDefaultNodes: true });
    }
    if (_) {
      const { setEdges: y } = h();
      y(_), l({ hasDefaultEdges: true });
    }
  }, updateNodeInternals: (p) => {
    const { triggerNodeChanges: _, nodeLookup: y, parentLookup: M, domNode: g, nodeOrigin: w, nodeExtent: C, debug: b, fitViewQueued: S } = h(), { changes: R, updatedInternals: $ } = Rf(p, y, M, g, w, C);
    $ && (If(y, M, { nodeOrigin: w, nodeExtent: C }), S ? (x(), l({ fitViewQueued: false, fitViewOptions: void 0 })) : l({}), (R == null ? void 0 : R.length) > 0 && (b && console.log("React Flow: trigger node changes", R), _ == null ? void 0 : _(R)));
  }, updateNodePositions: (p, _ = false) => {
    const y = [], M = [], { nodeLookup: g, triggerNodeChanges: w } = h();
    for (const [C, b] of p) {
      const S = g.get(C), R = !!((S == null ? void 0 : S.expandParent) && (S == null ? void 0 : S.parentId) && (b == null ? void 0 : b.position)), $ = { id: C, type: "position", position: R ? { x: Math.max(0, b.position.x), y: Math.max(0, b.position.y) } : b.position, dragging: _ };
      R && S.parentId && y.push({ id: C, parentId: S.parentId, rect: { ...b.internals.positionAbsolute, width: b.measured.width ?? 0, height: b.measured.height ?? 0 } }), M.push($);
    }
    if (y.length > 0) {
      const { parentLookup: C, nodeOrigin: b } = h(), S = io(y, g, C, b);
      M.push(...S);
    }
    w(M);
  }, triggerNodeChanges: (p) => {
    const { onNodesChange: _, setNodes: y, nodes: M, hasDefaultNodes: g, debug: w } = h();
    if (p == null ? void 0 : p.length) {
      if (g) {
        const C = ji(p, M);
        y(C);
      }
      w && console.log("React Flow: trigger node changes", p), _ == null ? void 0 : _(p);
    }
  }, triggerEdgeChanges: (p) => {
    const { onEdgesChange: _, setEdges: y, edges: M, hasDefaultEdges: g, debug: w } = h();
    if (p == null ? void 0 : p.length) {
      if (g) {
        const C = zd(p, M);
        y(C);
      }
      w && console.log("React Flow: trigger edge changes", p), _ == null ? void 0 : _(p);
    }
  }, addSelectedNodes: (p) => {
    const { multiSelectionActive: _, edgeLookup: y, nodeLookup: M, triggerNodeChanges: g, triggerEdgeChanges: w } = h();
    if (_) {
      const C = p.map((b) => ke(b, true));
      g(C);
      return;
    }
    g(je(M, /* @__PURE__ */ new Set([...p]), true)), w(je(y));
  }, addSelectedEdges: (p) => {
    const { multiSelectionActive: _, edgeLookup: y, nodeLookup: M, triggerNodeChanges: g, triggerEdgeChanges: w } = h();
    if (_) {
      const C = p.map((b) => ke(b, true));
      w(C);
      return;
    }
    w(je(y, /* @__PURE__ */ new Set([...p]))), g(je(M, /* @__PURE__ */ new Set(), true));
  }, unselectNodesAndEdges: ({ nodes: p, edges: _ } = {}) => {
    const { edges: y, nodes: M, nodeLookup: g, triggerNodeChanges: w, triggerEdgeChanges: C } = h(), b = p || M, S = _ || y, R = b.map((X) => {
      const D = g.get(X.id);
      return D && (D.selected = false), ke(X.id, false);
    }), $ = S.map((X) => ke(X.id, false));
    w(R), C($);
  }, setMinZoom: (p) => {
    const { panZoom: _, maxZoom: y } = h();
    _ == null ? void 0 : _.setScaleExtent([p, y]), l({ minZoom: p });
  }, setMaxZoom: (p) => {
    const { panZoom: _, minZoom: y } = h();
    _ == null ? void 0 : _.setScaleExtent([y, p]), l({ maxZoom: p });
  }, setTranslateExtent: (p) => {
    var _a2;
    (_a2 = h().panZoom) == null ? void 0 : _a2.setTranslateExtent(p), l({ translateExtent: p });
  }, resetSelectedElements: () => {
    const { edges: p, nodes: _, triggerNodeChanges: y, triggerEdgeChanges: M, elementsSelectable: g } = h();
    if (!g) return;
    const w = _.reduce((b, S) => S.selected ? [...b, ke(S.id, false)] : b, []), C = p.reduce((b, S) => S.selected ? [...b, ke(S.id, false)] : b, []);
    y(w), M(C);
  }, setNodeExtent: (p) => {
    const { nodes: _, nodeLookup: y, parentLookup: M, nodeOrigin: g, elevateNodesOnSelect: w, nodeExtent: C } = h();
    p[0][0] === C[0][0] && p[0][1] === C[0][1] && p[1][0] === C[1][0] && p[1][1] === C[1][1] || (jn(_, y, M, { nodeOrigin: g, nodeExtent: p, elevateNodesOnSelect: w, checkEquality: false }), l({ nodeExtent: p }));
  }, panBy: (p) => {
    const { transform: _, width: y, height: M, panZoom: g, translateExtent: w } = h();
    return $f({ delta: p, panZoom: g, transform: _, translateExtent: w, width: y, height: M });
  }, setCenter: async (p, _, y) => {
    const { width: M, height: g, maxZoom: w, panZoom: C } = h();
    if (!C) return Promise.resolve(false);
    const b = typeof (y == null ? void 0 : y.zoom) < "u" ? y.zoom : w;
    return await C.setViewport({ x: M / 2 - p * b, y: g / 2 - _ * b, zoom: b }, { duration: y == null ? void 0 : y.duration, ease: y == null ? void 0 : y.ease, interpolate: y == null ? void 0 : y.interpolate }), Promise.resolve(true);
  }, cancelConnection: () => {
    l({ connection: { ...ui } });
  }, updateConnection: (p) => {
    l({ connection: p });
  }, reset: () => l({ ...Ar() }) };
}, Object.is);
function tg({ initialNodes: e3, initialEdges: t, defaultNodes: n, defaultEdges: o, initialWidth: r, initialHeight: i, initialMinZoom: s, initialMaxZoom: c, initialFitViewOptions: u, fitView: a, nodeOrigin: f, nodeExtent: d, children: l }) {
  const [h] = H.useState(() => eg({ nodes: e3, edges: t, defaultNodes: n, defaultEdges: o, width: r, height: i, fitView: a, minZoom: s, maxZoom: c, fitViewOptions: u, nodeOrigin: f, nodeExtent: d }));
  return k.jsx(xd, { value: h, children: k.jsx(jd, { children: l }) });
}
function ng({ children: e3, nodes: t, edges: n, defaultNodes: o, defaultEdges: r, width: i, height: s, fitView: c, fitViewOptions: u, minZoom: a, maxZoom: f, nodeOrigin: d, nodeExtent: l }) {
  return H.useContext(cn) ? k.jsx(k.Fragment, { children: e3 }) : k.jsx(tg, { initialNodes: t, initialEdges: n, defaultNodes: o, defaultEdges: r, initialWidth: i, initialHeight: s, fitView: c, initialFitViewOptions: u, initialMinZoom: a, initialMaxZoom: f, nodeOrigin: d, nodeExtent: l, children: e3 });
}
const og = { width: "100%", height: "100%", overflow: "hidden", position: "relative", zIndex: 0 };
function rg({ nodes: e3, edges: t, defaultNodes: n, defaultEdges: o, className: r, nodeTypes: i, edgeTypes: s, onNodeClick: c, onEdgeClick: u, onInit: a, onMove: f, onMoveStart: d, onMoveEnd: l, onConnect: h, onConnectStart: x, onConnectEnd: p, onClickConnectStart: _, onClickConnectEnd: y, onNodeMouseEnter: M, onNodeMouseMove: g, onNodeMouseLeave: w, onNodeContextMenu: C, onNodeDoubleClick: b, onNodeDragStart: S, onNodeDrag: R, onNodeDragStop: $, onNodesDelete: X, onEdgesDelete: D, onDelete: O, onSelectionChange: B, onSelectionDragStart: v, onSelectionDrag: A, onSelectionDragStop: N, onSelectionContextMenu: I, onSelectionStart: T, onSelectionEnd: P, onBeforeDelete: V, connectionMode: m, connectionLineType: E = Ae.Bezier, connectionLineStyle: L, connectionLineComponent: z, connectionLineContainerStyle: Y, deleteKeyCode: W = "Backspace", selectionKeyCode: F = "Shift", selectionOnDrag: j = false, selectionMode: Z = dt.Full, panActivationKeyCode: Q = "Space", multiSelectionKeyCode: J = gt() ? "Meta" : "Control", zoomActivationKeyCode: U = gt() ? "Meta" : "Control", snapToGrid: K, snapGrid: ee, onlyRenderVisibleElements: ne = false, selectNodesOnDrag: oe, nodesDraggable: ae, autoPanOnNodeFocus: _e, nodesConnectable: Te, nodesFocusable: bt, nodeOrigin: St = Vi, edgesFocusable: Ke, edgesReconnectable: Qe, elementsSelectable: dn = true, defaultViewport: Nt = kd, minZoom: Le = 0.5, maxZoom: Je = 2, translateExtent: co = ft, preventScrolling: ms = true, nodeExtent: hn, defaultMarkerColor: ys = "#b1b1b7", zoomOnScroll: xs = true, zoomOnPinch: ws = true, panOnScroll: vs = false, panOnScrollSpeed: _s = 0.5, panOnScrollMode: Es = $e.Free, zoomOnDoubleClick: bs = true, panOnDrag: Ss = true, onPaneClick: Ns, onPaneMouseEnter: Cs, onPaneMouseMove: Ms, onPaneMouseLeave: As, onPaneScroll: Is, onPaneContextMenu: Ts, paneClickDistance: ks = 0, nodeClickDistance: Ps = 0, children: Rs, onReconnect: $s, onReconnectStart: Ds, onReconnectEnd: Hs, onEdgeContextMenu: Os, onEdgeDoubleClick: zs, onEdgeMouseEnter: Ls, onEdgeMouseMove: Vs, onEdgeMouseLeave: Bs, reconnectRadius: js = 10, onNodesChange: Fs, onEdgesChange: Ys, noDragClassName: Xs = "nodrag", noWheelClassName: Zs = "nowheel", noPanClassName: uo = "nopan", fitView: lo, fitViewOptions: fo, connectOnClick: Ws, attributionPosition: qs, proOptions: Us, defaultEdgeOptions: Gs, elevateNodesOnSelect: Ks, elevateEdgesOnSelect: Qs, disableKeyboardA11y: ho = false, autoPanOnConnect: Js, autoPanOnNodeDrag: ea, autoPanSpeed: ta, connectionRadius: na, isValidConnection: oa, onError: ra, style: ia, id: go, nodeDragThreshold: sa, connectionDragThreshold: aa, viewport: ca, onViewportChange: ua, width: la, height: fa, colorMode: da = "light", debug: ha, onScroll: po, ariaLabelConfig: ga, ...pa }, ma) {
  const gn = go || "1", ya = Dd(da), xa = H.useCallback((mo) => {
    mo.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }), po == null ? void 0 : po(mo);
  }, [po]);
  return k.jsx("div", { "data-testid": "rf__wrapper", ...pa, onScroll: xa, style: { ...ia, ...og }, ref: ma, className: se(["react-flow", r, ya]), id: go, role: "application", children: k.jsxs(ng, { nodes: e3, edges: t, width: la, height: fa, fitView: lo, fitViewOptions: fo, minZoom: Le, maxZoom: Je, nodeOrigin: St, nodeExtent: hn, children: [k.jsx(Jh, { onInit: a, onNodeClick: c, onEdgeClick: u, onNodeMouseEnter: M, onNodeMouseMove: g, onNodeMouseLeave: w, onNodeContextMenu: C, onNodeDoubleClick: b, nodeTypes: i, edgeTypes: s, connectionLineType: E, connectionLineStyle: L, connectionLineComponent: z, connectionLineContainerStyle: Y, selectionKeyCode: F, selectionOnDrag: j, selectionMode: Z, deleteKeyCode: W, multiSelectionKeyCode: J, panActivationKeyCode: Q, zoomActivationKeyCode: U, onlyRenderVisibleElements: ne, defaultViewport: Nt, translateExtent: co, minZoom: Le, maxZoom: Je, preventScrolling: ms, zoomOnScroll: xs, zoomOnPinch: ws, zoomOnDoubleClick: bs, panOnScroll: vs, panOnScrollSpeed: _s, panOnScrollMode: Es, panOnDrag: Ss, onPaneClick: Ns, onPaneMouseEnter: Cs, onPaneMouseMove: Ms, onPaneMouseLeave: As, onPaneScroll: Is, onPaneContextMenu: Ts, paneClickDistance: ks, nodeClickDistance: Ps, onSelectionContextMenu: I, onSelectionStart: T, onSelectionEnd: P, onReconnect: $s, onReconnectStart: Ds, onReconnectEnd: Hs, onEdgeContextMenu: Os, onEdgeDoubleClick: zs, onEdgeMouseEnter: Ls, onEdgeMouseMove: Vs, onEdgeMouseLeave: Bs, reconnectRadius: js, defaultMarkerColor: ys, noDragClassName: Xs, noWheelClassName: Zs, noPanClassName: uo, rfId: gn, disableKeyboardA11y: ho, nodeExtent: hn, viewport: ca, onViewportChange: ua }), k.jsx($d, { nodes: e3, edges: t, defaultNodes: n, defaultEdges: o, onConnect: h, onConnectStart: x, onConnectEnd: p, onClickConnectStart: _, onClickConnectEnd: y, nodesDraggable: ae, autoPanOnNodeFocus: _e, nodesConnectable: Te, nodesFocusable: bt, edgesFocusable: Ke, edgesReconnectable: Qe, elementsSelectable: dn, elevateNodesOnSelect: Ks, elevateEdgesOnSelect: Qs, minZoom: Le, maxZoom: Je, nodeExtent: hn, onNodesChange: Fs, onEdgesChange: Ys, snapToGrid: K, snapGrid: ee, connectionMode: m, translateExtent: co, connectOnClick: Ws, defaultEdgeOptions: Gs, fitView: lo, fitViewOptions: fo, onNodesDelete: X, onEdgesDelete: D, onDelete: O, onNodeDragStart: S, onNodeDrag: R, onNodeDragStop: $, onSelectionDrag: A, onSelectionDragStart: v, onSelectionDragStop: N, onMove: f, onMoveStart: d, onMoveEnd: l, noPanClassName: uo, nodeOrigin: St, rfId: gn, autoPanOnConnect: Js, autoPanOnNodeDrag: ea, autoPanSpeed: ta, onError: ra, connectionRadius: na, isValidConnection: oa, selectNodesOnDrag: oe, nodeDragThreshold: sa, connectionDragThreshold: aa, onBeforeDelete: V, debug: ha, ariaLabelConfig: ga }), k.jsx(Td, { onSelectionChange: B }), Rs, k.jsx(Nd, { proOptions: Us, position: qs }), k.jsx(Sd, { rfId: gn, disableKeyboardA11y: ho })] }) });
}
var kg = Fi(rg);
function Pg(e3) {
  const [t, n] = H.useState(e3), o = H.useCallback((r) => n((i) => ji(r, i)), []);
  return [t, n, o];
}
function ig({ dimensions: e3, lineWidth: t, variant: n, className: o }) {
  return k.jsx("path", { strokeWidth: t, d: `M${e3[0] / 2} 0 V${e3[1]} M0 ${e3[1] / 2} H${e3[0]}`, className: se(["react-flow__background-pattern", n, o]) });
}
function sg({ radius: e3, className: t }) {
  return k.jsx("circle", { cx: e3, cy: e3, r: e3, className: se(["react-flow__background-pattern", "dots", t]) });
}
var Ie;
(function(e3) {
  e3.Lines = "lines", e3.Dots = "dots", e3.Cross = "cross";
})(Ie || (Ie = {}));
const ag = { [Ie.Dots]: 1, [Ie.Lines]: 1, [Ie.Cross]: 6 }, cg = (e3) => ({ transform: e3.transform, patternId: `pattern-${e3.rfId}` });
function hs({ id: e3, variant: t = Ie.Dots, gap: n = 20, size: o, lineWidth: r = 1, offset: i = 0, color: s, bgColor: c, style: u, className: a, patternClassName: f }) {
  const d = H.useRef(null), { transform: l, patternId: h } = te(cg, ie), x = o || ag[t], p = t === Ie.Dots, _ = t === Ie.Cross, y = Array.isArray(n) ? n : [n, n], M = [y[0] * l[2] || 1, y[1] * l[2] || 1], g = x * l[2], w = Array.isArray(i) ? i : [i, i], C = _ ? [g, g] : M, b = [w[0] * l[2] || 1 + C[0] / 2, w[1] * l[2] || 1 + C[1] / 2], S = `${h}${e3 || ""}`;
  return k.jsxs("svg", { className: se(["react-flow__background", a]), style: { ...u, ...ln, "--xy-background-color-props": c, "--xy-background-pattern-color-props": s }, ref: d, "data-testid": "rf__background", children: [k.jsx("pattern", { id: S, x: l[0] % M[0], y: l[1] % M[1], width: M[0], height: M[1], patternUnits: "userSpaceOnUse", patternTransform: `translate(-${b[0]},-${b[1]})`, children: p ? k.jsx(sg, { radius: g / 2, className: f }) : k.jsx(ig, { dimensions: C, lineWidth: r, variant: t, className: f }) }), k.jsx("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: `url(#${S})` })] });
}
hs.displayName = "Background";
const Rg = H.memo(hs);
function ug() {
  return k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: k.jsx("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }) });
}
function lg() {
  return k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5", children: k.jsx("path", { d: "M0 0h32v4.2H0z" }) });
}
function fg() {
  return k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30", children: k.jsx("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }) });
}
function dg() {
  return k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: k.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }) });
}
function hg() {
  return k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32", children: k.jsx("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }) });
}
function $t({ children: e3, className: t, ...n }) {
  return k.jsx("button", { type: "button", className: se(["react-flow__controls-button", t]), ...n, children: e3 });
}
const gg = (e3) => ({ isInteractive: e3.nodesDraggable || e3.nodesConnectable || e3.elementsSelectable, minZoomReached: e3.transform[2] <= e3.minZoom, maxZoomReached: e3.transform[2] >= e3.maxZoom, ariaLabelConfig: e3.ariaLabelConfig });
function gs({ style: e3, showZoom: t = true, showFitView: n = true, showInteractive: o = true, fitViewOptions: r, onZoomIn: i, onZoomOut: s, onFitView: c, onInteractiveChange: u, className: a, children: f, position: d = "bottom-left", orientation: l = "vertical", "aria-label": h }) {
  const x = re(), { isInteractive: p, minZoomReached: _, maxZoomReached: y, ariaLabelConfig: M } = te(gg, ie), { zoomIn: g, zoomOut: w, fitView: C } = so(), b = () => {
    g(), i == null ? void 0 : i();
  }, S = () => {
    w(), s == null ? void 0 : s();
  }, R = () => {
    C(r), c == null ? void 0 : c();
  }, $ = () => {
    x.setState({ nodesDraggable: !p, nodesConnectable: !p, elementsSelectable: !p }), u == null ? void 0 : u(!p);
  }, X = l === "horizontal" ? "horizontal" : "vertical";
  return k.jsxs(un, { className: se(["react-flow__controls", X, a]), position: d, style: e3, "data-testid": "rf__controls", "aria-label": h ?? M["controls.ariaLabel"], children: [t && k.jsxs(k.Fragment, { children: [k.jsx($t, { onClick: b, className: "react-flow__controls-zoomin", title: M["controls.zoomIn.ariaLabel"], "aria-label": M["controls.zoomIn.ariaLabel"], disabled: y, children: k.jsx(ug, {}) }), k.jsx($t, { onClick: S, className: "react-flow__controls-zoomout", title: M["controls.zoomOut.ariaLabel"], "aria-label": M["controls.zoomOut.ariaLabel"], disabled: _, children: k.jsx(lg, {}) })] }), n && k.jsx($t, { className: "react-flow__controls-fitview", onClick: R, title: M["controls.fitView.ariaLabel"], "aria-label": M["controls.fitView.ariaLabel"], children: k.jsx(fg, {}) }), o && k.jsx($t, { className: "react-flow__controls-interactive", onClick: $, title: M["controls.interactive.ariaLabel"], "aria-label": M["controls.interactive.ariaLabel"], children: p ? k.jsx(hg, {}) : k.jsx(dg, {}) }), f] });
}
gs.displayName = "Controls";
const $g = H.memo(gs);
function pg({ id: e3, x: t, y: n, width: o, height: r, style: i, color: s, strokeColor: c, strokeWidth: u, className: a, borderRadius: f, shapeRendering: d, selected: l, onClick: h }) {
  const { background: x, backgroundColor: p } = i || {}, _ = s || x || p;
  return k.jsx("rect", { className: se(["react-flow__minimap-node", { selected: l }, a]), x: t, y: n, rx: f, ry: f, width: o, height: r, style: { fill: _, stroke: c, strokeWidth: u }, shapeRendering: d, onClick: h ? (y) => h(y, e3) : void 0 });
}
const mg = H.memo(pg), yg = (e3) => e3.nodes.map((t) => t.id), Tn = (e3) => e3 instanceof Function ? e3 : () => e3;
function xg({ nodeStrokeColor: e3, nodeColor: t, nodeClassName: n = "", nodeBorderRadius: o = 5, nodeStrokeWidth: r, nodeComponent: i = mg, onClick: s }) {
  const c = te(yg, ie), u = Tn(t), a = Tn(e3), f = Tn(n), d = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision";
  return k.jsx(k.Fragment, { children: c.map((l) => k.jsx(vg, { id: l, nodeColorFunc: u, nodeStrokeColorFunc: a, nodeClassNameFunc: f, nodeBorderRadius: o, nodeStrokeWidth: r, NodeComponent: i, onClick: s, shapeRendering: d }, l)) });
}
function wg({ id: e3, nodeColorFunc: t, nodeStrokeColorFunc: n, nodeClassNameFunc: o, nodeBorderRadius: r, nodeStrokeWidth: i, shapeRendering: s, NodeComponent: c, onClick: u }) {
  const { node: a, x: f, y: d, width: l, height: h } = te((x) => {
    const { internals: p } = x.nodeLookup.get(e3), _ = p.userNode, { x: y, y: M } = p.positionAbsolute, { width: g, height: w } = Ne(_);
    return { node: _, x: y, y: M, width: g, height: w };
  }, ie);
  return !a || a.hidden || !mi(a) ? null : k.jsx(c, { x: f, y: d, width: l, height: h, style: a.style, selected: !!a.selected, className: o(a), color: t(a), borderRadius: r, strokeColor: n(a), strokeWidth: i, shapeRendering: s, onClick: u, id: a.id });
}
const vg = H.memo(wg);
var _g = H.memo(xg);
const Eg = 200, bg = 150, Sg = (e3) => !e3.hidden, Ng = (e3) => {
  const t = { x: -e3.transform[0] / e3.transform[2], y: -e3.transform[1] / e3.transform[2], width: e3.width / e3.transform[2], height: e3.height / e3.transform[2] };
  return { viewBB: t, boundingRect: e3.nodeLookup.size > 0 ? pi(vt(e3.nodeLookup, { filter: Sg }), t) : t, rfId: e3.rfId, panZoom: e3.panZoom, translateExtent: e3.translateExtent, flowWidth: e3.width, flowHeight: e3.height, ariaLabelConfig: e3.ariaLabelConfig };
}, Cg = "react-flow__minimap-desc";
function ps({ style: e3, className: t, nodeStrokeColor: n, nodeColor: o, nodeClassName: r = "", nodeBorderRadius: i = 5, nodeStrokeWidth: s, nodeComponent: c, bgColor: u, maskColor: a, maskStrokeColor: f, maskStrokeWidth: d, position: l = "bottom-right", onClick: h, onNodeClick: x, pannable: p = false, zoomable: _ = false, ariaLabel: y, inversePan: M, zoomStep: g = 1, offsetScale: w = 5 }) {
  const C = re(), b = H.useRef(null), { boundingRect: S, viewBB: R, rfId: $, panZoom: X, translateExtent: D, flowWidth: O, flowHeight: B, ariaLabelConfig: v } = te(Ng, ie), A = (e3 == null ? void 0 : e3.width) ?? Eg, N = (e3 == null ? void 0 : e3.height) ?? bg, I = S.width / A, T = S.height / N, P = Math.max(I, T), V = P * A, m = P * N, E = w * P, L = S.x - (V - S.width) / 2 - E, z = S.y - (m - S.height) / 2 - E, Y = V + E * 2, W = m + E * 2, F = `${Cg}-${$}`, j = H.useRef(0), Z = H.useRef();
  j.current = P, H.useEffect(() => {
    if (b.current && X) return Z.current = Ff({ domNode: b.current, panZoom: X, getTransform: () => C.getState().transform, getViewScale: () => j.current }), () => {
      var _a2;
      (_a2 = Z.current) == null ? void 0 : _a2.destroy();
    };
  }, [X]), H.useEffect(() => {
    var _a2;
    (_a2 = Z.current) == null ? void 0 : _a2.update({ translateExtent: D, width: O, height: B, inversePan: M, pannable: p, zoomStep: g, zoomable: _ });
  }, [p, _, M, g, D, O, B]);
  const Q = h ? (K) => {
    var _a2;
    const [ee, ne] = ((_a2 = Z.current) == null ? void 0 : _a2.pointer(K)) || [0, 0];
    h(K, { x: ee, y: ne });
  } : void 0, J = x ? H.useCallback((K, ee) => {
    const ne = C.getState().nodeLookup.get(ee).internals.userNode;
    x(K, ne);
  }, []) : void 0, U = y ?? v["minimap.ariaLabel"];
  return k.jsx(un, { position: l, style: { ...e3, "--xy-minimap-background-color-props": typeof u == "string" ? u : void 0, "--xy-minimap-mask-background-color-props": typeof a == "string" ? a : void 0, "--xy-minimap-mask-stroke-color-props": typeof f == "string" ? f : void 0, "--xy-minimap-mask-stroke-width-props": typeof d == "number" ? d * P : void 0, "--xy-minimap-node-background-color-props": typeof o == "string" ? o : void 0, "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0, "--xy-minimap-node-stroke-width-props": typeof s == "number" ? s : void 0 }, className: se(["react-flow__minimap", t]), "data-testid": "rf__minimap", children: k.jsxs("svg", { width: A, height: N, viewBox: `${L} ${z} ${Y} ${W}`, className: "react-flow__minimap-svg", role: "img", "aria-labelledby": F, ref: b, onClick: Q, children: [U && k.jsx("title", { id: F, children: U }), k.jsx(_g, { onClick: J, nodeColor: o, nodeStrokeColor: n, nodeBorderRadius: i, nodeClassName: r, nodeStrokeWidth: s, nodeComponent: c }), k.jsx("path", { className: "react-flow__minimap-mask", d: `M${L - E},${z - E}h${Y + E * 2}v${W + E * 2}h${-Y - E * 2}z
        M${R.x},${R.y}h${R.width}v${R.height}h${-R.width}z`, fillRule: "evenodd", pointerEvents: "none" })] }) });
}
ps.displayName = "MiniMap";
H.memo(ps);
const Mg = (e3) => (t) => e3 ? `${Math.max(1 / t.transform[2], 1)}` : void 0, Ag = { [ze.Line]: "right", [ze.Handle]: "bottom-right" };
function Ig({ nodeId: e3, position: t, variant: n = ze.Handle, className: o, style: r = void 0, children: i, color: s, minWidth: c = 10, minHeight: u = 10, maxWidth: a = Number.MAX_VALUE, maxHeight: f = Number.MAX_VALUE, keepAspectRatio: d = false, resizeDirection: l, autoScale: h = true, shouldResize: x, onResizeStart: p, onResize: _, onResizeEnd: y }) {
  const M = Wi(), g = typeof e3 == "string" ? e3 : M, w = re(), C = H.useRef(null), b = n === ze.Handle, S = te(H.useCallback(Mg(b && h), [b, h]), ie), R = H.useRef(null), $ = t ?? Ag[n];
  H.useEffect(() => {
    if (!(!C.current || !g)) return R.current || (R.current = id({ domNode: C.current, nodeId: g, getStoreItems: () => {
      const { nodeLookup: D, transform: O, snapGrid: B, snapToGrid: v, nodeOrigin: A, domNode: N } = w.getState();
      return { nodeLookup: D, transform: O, snapGrid: B, snapToGrid: v, nodeOrigin: A, paneDomNode: N };
    }, onChange: (D, O) => {
      const { triggerNodeChanges: B, nodeLookup: v, parentLookup: A, nodeOrigin: N } = w.getState(), I = [], T = { x: D.x, y: D.y }, P = v.get(g);
      if (P && P.expandParent && P.parentId) {
        const V = P.origin ?? N, m = D.width ?? P.measured.width ?? 0, E = D.height ?? P.measured.height ?? 0, L = { id: P.id, parentId: P.parentId, rect: { width: m, height: E, ...yi({ x: D.x ?? P.position.x, y: D.y ?? P.position.y }, { width: m, height: E }, P.parentId, v, V) } }, z = io([L], v, A, N);
        I.push(...z), T.x = D.x ? Math.max(V[0] * m, D.x) : void 0, T.y = D.y ? Math.max(V[1] * E, D.y) : void 0;
      }
      if (T.x !== void 0 && T.y !== void 0) {
        const V = { id: g, type: "position", position: { ...T } };
        I.push(V);
      }
      if (D.width !== void 0 && D.height !== void 0) {
        const m = { id: g, type: "dimensions", resizing: true, setAttributes: l ? l === "horizontal" ? "width" : "height" : true, dimensions: { width: D.width, height: D.height } };
        I.push(m);
      }
      for (const V of O) {
        const m = { ...V, type: "position" };
        I.push(m);
      }
      B(I);
    }, onEnd: ({ width: D, height: O }) => {
      const B = { id: g, type: "dimensions", resizing: false, dimensions: { width: D, height: O } };
      w.getState().triggerNodeChanges([B]);
    } })), R.current.update({ controlPosition: $, boundaries: { minWidth: c, minHeight: u, maxWidth: a, maxHeight: f }, keepAspectRatio: d, resizeDirection: l, onResizeStart: p, onResize: _, onResizeEnd: y, shouldResize: x }), () => {
      var _a2;
      (_a2 = R.current) == null ? void 0 : _a2.destroy();
    };
  }, [$, c, u, a, f, d, p, _, y, x]);
  const X = $.split("-");
  return k.jsx("div", { className: se(["react-flow__resize-control", "nodrag", ...X, n, o]), ref: C, style: { ...r, scale: S, ...s && { [b ? "backgroundColor" : "borderColor"]: s } }, children: i });
}
const Ir = H.memo(Ig);
function Dg({ nodeId: e3, isVisible: t = true, handleClassName: n, handleStyle: o, lineClassName: r, lineStyle: i, color: s, minWidth: c = 10, minHeight: u = 10, maxWidth: a = Number.MAX_VALUE, maxHeight: f = Number.MAX_VALUE, keepAspectRatio: d = false, autoScale: l = true, shouldResize: h, onResizeStart: x, onResize: p, onResizeEnd: _ }) {
  return t ? k.jsxs(k.Fragment, { children: [Jf.map((y) => k.jsx(Ir, { className: r, style: i, nodeId: e3, position: y, variant: ze.Line, color: s, minWidth: c, minHeight: u, maxWidth: a, maxHeight: f, onResizeStart: x, keepAspectRatio: d, autoScale: l, shouldResize: h, onResize: p, onResizeEnd: _ }, y)), Qf.map((y) => k.jsx(Ir, { className: n, style: o, nodeId: e3, position: y, color: s, minWidth: c, minHeight: u, maxWidth: a, maxHeight: f, onResizeStart: x, keepAspectRatio: d, autoScale: l, shouldResize: h, onResize: p, onResizeEnd: _ }, y))] }) : null;
}
export {
  Rg as B,
  $g as C,
  Gt as H,
  Dg as N,
  q as P,
  tg as R,
  Ie as a,
  $t as b,
  so as c,
  Qt as d,
  Sa as e,
  Ea as f,
  Tg as g,
  kg as i,
  k as j,
  H as r,
  Pg as u
};
