const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./wasm-api-CQJ80EP0.js","./reactflow-CFE1JzbO.js","./reactflow-BZV40eAE.css","./echarts-CxWuOr5q.js","./markdown-BhQy4Yqe.js","./markdown-dIRGbAJA.css"])))=>i.map(i=>d[i]);
import { d as fp, e as dp, r as q, j as g, f as Uu, g as Iu, H as ym, P as pm, N as bm } from "./reactflow-CFE1JzbO.js";
import { g as gm, i as vm } from "./echarts-CxWuOr5q.js";
import { g as hp, k as mp } from "./markdown-BhQy4Yqe.js";
let O_, v1, te, z_, x_, T_, v_, w_, E_, __, xm, A_, M_, S_;
let __tla = (async () => {
  (function() {
    const s = document.createElement("link").relList;
    if (s && s.supports && s.supports("modulepreload")) return;
    for (const d of document.querySelectorAll('link[rel="modulepreload"]')) c(d);
    new MutationObserver((d) => {
      for (const m of d) if (m.type === "childList") for (const h of m.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && c(h);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function r(d) {
      const m = {};
      return d.integrity && (m.integrity = d.integrity), d.referrerPolicy && (m.referrerPolicy = d.referrerPolicy), d.crossOrigin === "use-credentials" ? m.credentials = "include" : d.crossOrigin === "anonymous" ? m.credentials = "omit" : m.credentials = "same-origin", m;
    }
    function c(d) {
      if (d.ep) return;
      d.ep = true;
      const m = r(d);
      fetch(d.href, m);
    }
  })();
  var ms = {
    exports: {}
  }, ni = {}, ys = {
    exports: {}
  }, ps = {};
  var Bh;
  function yp() {
    return Bh || (Bh = 1, (function(u) {
      function s(D, Y) {
        var H = D.length;
        D.push(Y);
        e: for (; 0 < H; ) {
          var X = H - 1 >>> 1, V = D[X];
          if (0 < d(V, Y)) D[X] = Y, D[H] = V, H = X;
          else break e;
        }
      }
      function r(D) {
        return D.length === 0 ? null : D[0];
      }
      function c(D) {
        if (D.length === 0) return null;
        var Y = D[0], H = D.pop();
        if (H !== Y) {
          D[0] = H;
          e: for (var X = 0, V = D.length, be = V >>> 1; X < be; ) {
            var ee = 2 * (X + 1) - 1, I = D[ee], ne = ee + 1, Le = D[ne];
            if (0 > d(I, H)) ne < V && 0 > d(Le, I) ? (D[X] = Le, D[ne] = H, X = ne) : (D[X] = I, D[ee] = H, X = ee);
            else if (ne < V && 0 > d(Le, H)) D[X] = Le, D[ne] = H, X = ne;
            else break e;
          }
        }
        return Y;
      }
      function d(D, Y) {
        var H = D.sortIndex - Y.sortIndex;
        return H !== 0 ? H : D.id - Y.id;
      }
      if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var m = performance;
        u.unstable_now = function() {
          return m.now();
        };
      } else {
        var h = Date, p = h.now();
        u.unstable_now = function() {
          return h.now() - p;
        };
      }
      var x = [], T = [], v = 1, b = null, A = 3, C = false, U = false, w = false, O = false, L = typeof setTimeout == "function" ? setTimeout : null, G = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
      function ce(D) {
        for (var Y = r(T); Y !== null; ) {
          if (Y.callback === null) c(T);
          else if (Y.startTime <= D) c(T), Y.sortIndex = Y.expirationTime, s(x, Y);
          else break;
          Y = r(T);
        }
      }
      function W(D) {
        if (w = false, ce(D), !U) if (r(x) !== null) U = true, oe || (oe = true, He());
        else {
          var Y = r(T);
          Y !== null && ye(W, Y.startTime - D);
        }
      }
      var oe = false, k = -1, se = 5, Ne = -1;
      function tt() {
        return O ? true : !(u.unstable_now() - Ne < se);
      }
      function lt() {
        if (O = false, oe) {
          var D = u.unstable_now();
          Ne = D;
          var Y = true;
          try {
            e: {
              U = false, w && (w = false, G(k), k = -1), C = true;
              var H = A;
              try {
                t: {
                  for (ce(D), b = r(x); b !== null && !(b.expirationTime > D && tt()); ) {
                    var X = b.callback;
                    if (typeof X == "function") {
                      b.callback = null, A = b.priorityLevel;
                      var V = X(b.expirationTime <= D);
                      if (D = u.unstable_now(), typeof V == "function") {
                        b.callback = V, ce(D), Y = true;
                        break t;
                      }
                      b === r(x) && c(x), ce(D);
                    } else c(x);
                    b = r(x);
                  }
                  if (b !== null) Y = true;
                  else {
                    var be = r(T);
                    be !== null && ye(W, be.startTime - D), Y = false;
                  }
                }
                break e;
              } finally {
                b = null, A = H, C = false;
              }
              Y = void 0;
            }
          } finally {
            Y ? He() : oe = false;
          }
        }
      }
      var He;
      if (typeof K == "function") He = function() {
        K(lt);
      };
      else if (typeof MessageChannel < "u") {
        var Re = new MessageChannel(), re = Re.port2;
        Re.port1.onmessage = lt, He = function() {
          re.postMessage(null);
        };
      } else He = function() {
        L(lt, 0);
      };
      function ye(D, Y) {
        k = L(function() {
          D(u.unstable_now());
        }, Y);
      }
      u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(D) {
        D.callback = null;
      }, u.unstable_forceFrameRate = function(D) {
        0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : se = 0 < D ? Math.floor(1e3 / D) : 5;
      }, u.unstable_getCurrentPriorityLevel = function() {
        return A;
      }, u.unstable_next = function(D) {
        switch (A) {
          case 1:
          case 2:
          case 3:
            var Y = 3;
            break;
          default:
            Y = A;
        }
        var H = A;
        A = Y;
        try {
          return D();
        } finally {
          A = H;
        }
      }, u.unstable_requestPaint = function() {
        O = true;
      }, u.unstable_runWithPriority = function(D, Y) {
        switch (D) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            D = 3;
        }
        var H = A;
        A = D;
        try {
          return Y();
        } finally {
          A = H;
        }
      }, u.unstable_scheduleCallback = function(D, Y, H) {
        var X = u.unstable_now();
        switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? X + H : X) : H = X, D) {
          case 1:
            var V = -1;
            break;
          case 2:
            V = 250;
            break;
          case 5:
            V = 1073741823;
            break;
          case 4:
            V = 1e4;
            break;
          default:
            V = 5e3;
        }
        return V = H + V, D = {
          id: v++,
          callback: Y,
          priorityLevel: D,
          startTime: H,
          expirationTime: V,
          sortIndex: -1
        }, H > X ? (D.sortIndex = H, s(T, D), r(x) === null && D === r(T) && (w ? (G(k), k = -1) : w = true, ye(W, H - X))) : (D.sortIndex = V, s(x, D), U || C || (U = true, oe || (oe = true, He()))), D;
      }, u.unstable_shouldYield = tt, u.unstable_wrapCallback = function(D) {
        var Y = A;
        return function() {
          var H = A;
          A = Y;
          try {
            return D.apply(this, arguments);
          } finally {
            A = H;
          }
        };
      };
    })(ps)), ps;
  }
  var jh;
  function pp() {
    return jh || (jh = 1, ys.exports = yp()), ys.exports;
  }
  var Uh;
  function bp() {
    if (Uh) return ni;
    Uh = 1;
    var u = pp(), s = fp(), r = dp();
    function c(e) {
      var t = "https://react.dev/errors/" + e;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var l = 2; l < arguments.length; l++) t += "&args[]=" + encodeURIComponent(arguments[l]);
      }
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function d(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function m(e) {
      var t = e, l = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? l : null;
    }
    function h(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function p(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function x(e) {
      if (m(e) !== e) throw Error(c(188));
    }
    function T(e) {
      var t = e.alternate;
      if (!t) {
        if (t = m(e), t === null) throw Error(c(188));
        return t !== e ? null : e;
      }
      for (var l = e, n = t; ; ) {
        var a = l.return;
        if (a === null) break;
        var i = a.alternate;
        if (i === null) {
          if (n = a.return, n !== null) {
            l = n;
            continue;
          }
          break;
        }
        if (a.child === i.child) {
          for (i = a.child; i; ) {
            if (i === l) return x(a), e;
            if (i === n) return x(a), t;
            i = i.sibling;
          }
          throw Error(c(188));
        }
        if (l.return !== n.return) l = a, n = i;
        else {
          for (var o = false, f = a.child; f; ) {
            if (f === l) {
              o = true, l = a, n = i;
              break;
            }
            if (f === n) {
              o = true, n = a, l = i;
              break;
            }
            f = f.sibling;
          }
          if (!o) {
            for (f = i.child; f; ) {
              if (f === l) {
                o = true, l = i, n = a;
                break;
              }
              if (f === n) {
                o = true, n = i, l = a;
                break;
              }
              f = f.sibling;
            }
            if (!o) throw Error(c(189));
          }
        }
        if (l.alternate !== n) throw Error(c(190));
      }
      if (l.tag !== 3) throw Error(c(188));
      return l.stateNode.current === l ? e : t;
    }
    function v(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = v(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var b = Object.assign, A = Symbol.for("react.element"), C = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), K = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), Ne = Symbol.for("react.activity"), tt = Symbol.for("react.memo_cache_sentinel"), lt = Symbol.iterator;
    function He(e) {
      return e === null || typeof e != "object" ? null : (e = lt && e[lt] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var Re = Symbol.for("react.client.reference");
    function re(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.$$typeof === Re ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case w:
          return "Fragment";
        case L:
          return "Profiler";
        case O:
          return "StrictMode";
        case W:
          return "Suspense";
        case oe:
          return "SuspenseList";
        case Ne:
          return "Activity";
      }
      if (typeof e == "object") switch (e.$$typeof) {
        case U:
          return "Portal";
        case K:
          return e.displayName || "Context";
        case G:
          return (e._context.displayName || "Context") + ".Consumer";
        case ce:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case k:
          return t = e.displayName || null, t !== null ? t : re(e.type) || "Memo";
        case se:
          t = e._payload, e = e._init;
          try {
            return re(e(t));
          } catch {
          }
      }
      return null;
    }
    var ye = Array.isArray, D = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, X = [], V = -1;
    function be(e) {
      return {
        current: e
      };
    }
    function ee(e) {
      0 > V || (e.current = X[V], X[V] = null, V--);
    }
    function I(e, t) {
      V++, X[V] = e.current, e.current = t;
    }
    var ne = be(null), Le = be(null), qe = be(null), Ze = be(null);
    function Ke(e, t) {
      switch (I(qe, t), I(Le, e), I(ne, null), t.nodeType) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? nh(e) : 0;
          break;
        default:
          if (e = t.tagName, t = t.namespaceURI) t = nh(t), e = ah(t, e);
          else switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
      }
      ee(ne), I(ne, e);
    }
    function De() {
      ee(ne), ee(Le), ee(qe);
    }
    function ge(e) {
      e.memoizedState !== null && I(Ze, e);
      var t = ne.current, l = ah(t, e.type);
      t !== l && (I(Le, e), I(ne, l));
    }
    function Te(e) {
      Le.current === e && (ee(ne), ee(Le)), Ze.current === e && (ee(Ze), Pa._currentValue = H);
    }
    var Ge, Zt;
    function le(e) {
      if (Ge === void 0) try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Ge = t && t[1] || "", Zt = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + Ge + e + Zt;
    }
    var ae = false;
    function $(e, t) {
      if (!e || ae) return "";
      ae = true;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var n = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var j = function() {
                  throw Error();
                };
                if (Object.defineProperty(j.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(j, []);
                  } catch (N) {
                    var M = N;
                  }
                  Reflect.construct(e, [], j);
                } else {
                  try {
                    j.call();
                  } catch (N) {
                    M = N;
                  }
                  e.call(j.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (N) {
                  M = N;
                }
                (j = e()) && typeof j.catch == "function" && j.catch(function() {
                });
              }
            } catch (N) {
              if (N && M && typeof N.stack == "string") return [
                N.stack,
                M.stack
              ];
            }
            return [
              null,
              null
            ];
          }
        };
        n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, "name");
        a && a.configurable && Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
        var i = n.DetermineComponentFrameRoot(), o = i[0], f = i[1];
        if (o && f) {
          var y = o.split(`
`), z = f.split(`
`);
          for (a = n = 0; n < y.length && !y[n].includes("DetermineComponentFrameRoot"); ) n++;
          for (; a < z.length && !z[a].includes("DetermineComponentFrameRoot"); ) a++;
          if (n === y.length || a === z.length) for (n = y.length - 1, a = z.length - 1; 1 <= n && 0 <= a && y[n] !== z[a]; ) a--;
          for (; 1 <= n && 0 <= a; n--, a--) if (y[n] !== z[a]) {
            if (n !== 1 || a !== 1) do
              if (n--, a--, 0 > a || y[n] !== z[a]) {
                var R = `
` + y[n].replace(" at new ", " at ");
                return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), R;
              }
            while (1 <= n && 0 <= a);
            break;
          }
        }
      } finally {
        ae = false, Error.prepareStackTrace = l;
      }
      return (l = e ? e.displayName || e.name : "") ? le(l) : "";
    }
    function st(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return le(e.type);
        case 16:
          return le("Lazy");
        case 13:
          return e.child !== t && t !== null ? le("Suspense Fallback") : le("Suspense");
        case 19:
          return le("SuspenseList");
        case 0:
        case 15:
          return $(e.type, false);
        case 11:
          return $(e.type.render, false);
        case 1:
          return $(e.type, true);
        case 31:
          return le("Activity");
        default:
          return "";
      }
    }
    function Lt(e) {
      try {
        var t = "", l = null;
        do
          t += st(e, l), l = e, e = e.return;
        while (e);
        return t;
      } catch (n) {
        return `
Error generating stack: ` + n.message + `
` + n.stack;
      }
    }
    var Ce = Object.prototype.hasOwnProperty, zt = u.unstable_scheduleCallback, _l = u.unstable_cancelCallback, gn = u.unstable_shouldYield, vn = u.unstable_requestPaint, Me = u.unstable_now, qt = u.unstable_getCurrentPriorityLevel, nt = u.unstable_ImmediatePriority, Kt = u.unstable_UserBlockingPriority, Gt = u.unstable_NormalPriority, vi = u.unstable_LowPriority, Us = u.unstable_IdlePriority, km = u.log, Jm = u.unstable_setDisableYieldValue, fa = null, gt = null;
    function Sl(e) {
      if (typeof km == "function" && Jm(e), gt && typeof gt.setStrictMode == "function") try {
        gt.setStrictMode(fa, e);
      } catch {
      }
    }
    var vt = Math.clz32 ? Math.clz32 : Wm, $m = Math.log, Fm = Math.LN2;
    function Wm(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - ($m(e) / Fm | 0) | 0;
    }
    var _i = 256, Si = 262144, xi = 4194304;
    function Jl(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function wi(e, t, l) {
      var n = e.pendingLanes;
      if (n === 0) return 0;
      var a = 0, i = e.suspendedLanes, o = e.pingedLanes;
      e = e.warmLanes;
      var f = n & 134217727;
      return f !== 0 ? (n = f & ~i, n !== 0 ? a = Jl(n) : (o &= f, o !== 0 ? a = Jl(o) : l || (l = f & ~e, l !== 0 && (a = Jl(l))))) : (f = n & ~i, f !== 0 ? a = Jl(f) : o !== 0 ? a = Jl(o) : l || (l = n & ~e, l !== 0 && (a = Jl(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : a;
    }
    function da(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Im(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Hs() {
      var e = xi;
      return xi <<= 1, (xi & 62914560) === 0 && (xi = 4194304), e;
    }
    function tc(e) {
      for (var t = [], l = 0; 31 > l; l++) t.push(e);
      return t;
    }
    function ha(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Pm(e, t, l, n, a, i) {
      var o = e.pendingLanes;
      e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
      var f = e.entanglements, y = e.expirationTimes, z = e.hiddenUpdates;
      for (l = o & ~l; 0 < l; ) {
        var R = 31 - vt(l), j = 1 << R;
        f[R] = 0, y[R] = -1;
        var M = z[R];
        if (M !== null) for (z[R] = null, R = 0; R < M.length; R++) {
          var N = M[R];
          N !== null && (N.lane &= -536870913);
        }
        l &= ~j;
      }
      n !== 0 && Ls(e, n, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(o & ~t));
    }
    function Ls(e, t, l) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var n = 31 - vt(t);
      e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 261930;
    }
    function qs(e, t) {
      var l = e.entangledLanes |= t;
      for (e = e.entanglements; l; ) {
        var n = 31 - vt(l), a = 1 << n;
        a & t | e[n] & t && (e[n] |= t), l &= ~a;
      }
    }
    function Gs(e, t) {
      var l = t & -t;
      return l = (l & 42) !== 0 ? 1 : lc(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
    }
    function lc(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function nc(e) {
      return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function Ys() {
      var e = Y.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : zh(e.type));
    }
    function Xs(e, t) {
      var l = Y.p;
      try {
        return Y.p = e, t();
      } finally {
        Y.p = l;
      }
    }
    var xl = Math.random().toString(36).slice(2), at = "__reactFiber$" + xl, ft = "__reactProps$" + xl, _n = "__reactContainer$" + xl, ac = "__reactEvents$" + xl, e0 = "__reactListeners$" + xl, t0 = "__reactHandles$" + xl, Qs = "__reactResources$" + xl, ma = "__reactMarker$" + xl;
    function ic(e) {
      delete e[at], delete e[ft], delete e[ac], delete e[e0], delete e[t0];
    }
    function Sn(e) {
      var t = e[at];
      if (t) return t;
      for (var l = e.parentNode; l; ) {
        if (t = l[_n] || l[at]) {
          if (l = t.alternate, t.child !== null || l !== null && l.child !== null) for (e = fh(e); e !== null; ) {
            if (l = e[at]) return l;
            e = fh(e);
          }
          return t;
        }
        e = l, l = e.parentNode;
      }
      return null;
    }
    function xn(e) {
      if (e = e[at] || e[_n]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
      }
      return null;
    }
    function ya(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(c(33));
    }
    function wn(e) {
      var t = e[Qs];
      return t || (t = e[Qs] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), t;
    }
    function Pe(e) {
      e[ma] = true;
    }
    var Vs = /* @__PURE__ */ new Set(), Zs = {};
    function $l(e, t) {
      Tn(e, t), Tn(e + "Capture", t);
    }
    function Tn(e, t) {
      for (Zs[e] = t, e = 0; e < t.length; e++) Vs.add(t[e]);
    }
    var l0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ks = {}, ks = {};
    function n0(e) {
      return Ce.call(ks, e) ? true : Ce.call(Ks, e) ? false : l0.test(e) ? ks[e] = true : (Ks[e] = true, false);
    }
    function Ti(e, t, l) {
      if (n0(t)) if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var n = t.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
    }
    function Ai(e, t, l) {
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, "" + l);
      }
    }
    function Pt(e, t, l, n) {
      if (n === null) e.removeAttribute(l);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(l);
            return;
        }
        e.setAttributeNS(t, l, "" + n);
      }
    }
    function Mt(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function Js(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function a0(e, t, l) {
      var n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var a = n.get, i = n.set;
        return Object.defineProperty(e, t, {
          configurable: true,
          get: function() {
            return a.call(this);
          },
          set: function(o) {
            l = "" + o, i.call(this, o);
          }
        }), Object.defineProperty(e, t, {
          enumerable: n.enumerable
        }), {
          getValue: function() {
            return l;
          },
          setValue: function(o) {
            l = "" + o;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function uc(e) {
      if (!e._valueTracker) {
        var t = Js(e) ? "checked" : "value";
        e._valueTracker = a0(e, t, "" + e[t]);
      }
    }
    function $s(e) {
      if (!e) return false;
      var t = e._valueTracker;
      if (!t) return true;
      var l = t.getValue(), n = "";
      return e && (n = Js(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), true) : false;
    }
    function Ei(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var i0 = /[\n"\\]/g;
    function Ot(e) {
      return e.replace(i0, function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      });
    }
    function cc(e, t, l, n, a, i, o, f) {
      e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t != null ? o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Mt(t)) : e.value !== "" + Mt(t) && (e.value = "" + Mt(t)) : o !== "submit" && o !== "reset" || e.removeAttribute("value"), t != null ? oc(e, o, Mt(t)) : l != null ? oc(e, o, Mt(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + Mt(f) : e.removeAttribute("name");
    }
    function Fs(e, t, l, n, a, i, o, f) {
      if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
        if (!(i !== "submit" && i !== "reset" || t != null)) {
          uc(e);
          return;
        }
        l = l != null ? "" + Mt(l) : "", t = t != null ? "" + Mt(t) : l, f || t === e.value || (e.value = t), e.defaultValue = t;
      }
      n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = f ? e.checked : !!n, e.defaultChecked = !!n, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), uc(e);
    }
    function oc(e, t, l) {
      t === "number" && Ei(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
    }
    function An(e, t, l, n) {
      if (e = e.options, t) {
        t = {};
        for (var a = 0; a < l.length; a++) t["$" + l[a]] = true;
        for (l = 0; l < e.length; l++) a = t.hasOwnProperty("$" + e[l].value), e[l].selected !== a && (e[l].selected = a), a && n && (e[l].defaultSelected = true);
      } else {
        for (l = "" + Mt(l), t = null, a = 0; a < e.length; a++) {
          if (e[a].value === l) {
            e[a].selected = true, n && (e[a].defaultSelected = true);
            return;
          }
          t !== null || e[a].disabled || (t = e[a]);
        }
        t !== null && (t.selected = true);
      }
    }
    function Ws(e, t, l) {
      if (t != null && (t = "" + Mt(t), t !== e.value && (e.value = t), l == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = l != null ? "" + Mt(l) : "";
    }
    function Is(e, t, l, n) {
      if (t == null) {
        if (n != null) {
          if (l != null) throw Error(c(92));
          if (ye(n)) {
            if (1 < n.length) throw Error(c(93));
            n = n[0];
          }
          l = n;
        }
        l == null && (l = ""), t = l;
      }
      l = Mt(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n), uc(e);
    }
    function En(e, t) {
      if (t) {
        var l = e.firstChild;
        if (l && l === e.lastChild && l.nodeType === 3) {
          l.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var u0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Ps(e, t, l) {
      var n = t.indexOf("--") === 0;
      l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || u0.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
    }
    function er(e, t, l) {
      if (t != null && typeof t != "object") throw Error(c(62));
      if (e = e.style, l != null) {
        for (var n in l) !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
        for (var a in t) n = t[a], t.hasOwnProperty(a) && l[a] !== n && Ps(e, a, n);
      } else for (var i in t) t.hasOwnProperty(i) && Ps(e, i, t[i]);
    }
    function sc(e) {
      if (e.indexOf("-") === -1) return false;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var c0 = /* @__PURE__ */ new Map([
      [
        "acceptCharset",
        "accept-charset"
      ],
      [
        "htmlFor",
        "for"
      ],
      [
        "httpEquiv",
        "http-equiv"
      ],
      [
        "crossOrigin",
        "crossorigin"
      ],
      [
        "accentHeight",
        "accent-height"
      ],
      [
        "alignmentBaseline",
        "alignment-baseline"
      ],
      [
        "arabicForm",
        "arabic-form"
      ],
      [
        "baselineShift",
        "baseline-shift"
      ],
      [
        "capHeight",
        "cap-height"
      ],
      [
        "clipPath",
        "clip-path"
      ],
      [
        "clipRule",
        "clip-rule"
      ],
      [
        "colorInterpolation",
        "color-interpolation"
      ],
      [
        "colorInterpolationFilters",
        "color-interpolation-filters"
      ],
      [
        "colorProfile",
        "color-profile"
      ],
      [
        "colorRendering",
        "color-rendering"
      ],
      [
        "dominantBaseline",
        "dominant-baseline"
      ],
      [
        "enableBackground",
        "enable-background"
      ],
      [
        "fillOpacity",
        "fill-opacity"
      ],
      [
        "fillRule",
        "fill-rule"
      ],
      [
        "floodColor",
        "flood-color"
      ],
      [
        "floodOpacity",
        "flood-opacity"
      ],
      [
        "fontFamily",
        "font-family"
      ],
      [
        "fontSize",
        "font-size"
      ],
      [
        "fontSizeAdjust",
        "font-size-adjust"
      ],
      [
        "fontStretch",
        "font-stretch"
      ],
      [
        "fontStyle",
        "font-style"
      ],
      [
        "fontVariant",
        "font-variant"
      ],
      [
        "fontWeight",
        "font-weight"
      ],
      [
        "glyphName",
        "glyph-name"
      ],
      [
        "glyphOrientationHorizontal",
        "glyph-orientation-horizontal"
      ],
      [
        "glyphOrientationVertical",
        "glyph-orientation-vertical"
      ],
      [
        "horizAdvX",
        "horiz-adv-x"
      ],
      [
        "horizOriginX",
        "horiz-origin-x"
      ],
      [
        "imageRendering",
        "image-rendering"
      ],
      [
        "letterSpacing",
        "letter-spacing"
      ],
      [
        "lightingColor",
        "lighting-color"
      ],
      [
        "markerEnd",
        "marker-end"
      ],
      [
        "markerMid",
        "marker-mid"
      ],
      [
        "markerStart",
        "marker-start"
      ],
      [
        "overlinePosition",
        "overline-position"
      ],
      [
        "overlineThickness",
        "overline-thickness"
      ],
      [
        "paintOrder",
        "paint-order"
      ],
      [
        "panose-1",
        "panose-1"
      ],
      [
        "pointerEvents",
        "pointer-events"
      ],
      [
        "renderingIntent",
        "rendering-intent"
      ],
      [
        "shapeRendering",
        "shape-rendering"
      ],
      [
        "stopColor",
        "stop-color"
      ],
      [
        "stopOpacity",
        "stop-opacity"
      ],
      [
        "strikethroughPosition",
        "strikethrough-position"
      ],
      [
        "strikethroughThickness",
        "strikethrough-thickness"
      ],
      [
        "strokeDasharray",
        "stroke-dasharray"
      ],
      [
        "strokeDashoffset",
        "stroke-dashoffset"
      ],
      [
        "strokeLinecap",
        "stroke-linecap"
      ],
      [
        "strokeLinejoin",
        "stroke-linejoin"
      ],
      [
        "strokeMiterlimit",
        "stroke-miterlimit"
      ],
      [
        "strokeOpacity",
        "stroke-opacity"
      ],
      [
        "strokeWidth",
        "stroke-width"
      ],
      [
        "textAnchor",
        "text-anchor"
      ],
      [
        "textDecoration",
        "text-decoration"
      ],
      [
        "textRendering",
        "text-rendering"
      ],
      [
        "transformOrigin",
        "transform-origin"
      ],
      [
        "underlinePosition",
        "underline-position"
      ],
      [
        "underlineThickness",
        "underline-thickness"
      ],
      [
        "unicodeBidi",
        "unicode-bidi"
      ],
      [
        "unicodeRange",
        "unicode-range"
      ],
      [
        "unitsPerEm",
        "units-per-em"
      ],
      [
        "vAlphabetic",
        "v-alphabetic"
      ],
      [
        "vHanging",
        "v-hanging"
      ],
      [
        "vIdeographic",
        "v-ideographic"
      ],
      [
        "vMathematical",
        "v-mathematical"
      ],
      [
        "vectorEffect",
        "vector-effect"
      ],
      [
        "vertAdvY",
        "vert-adv-y"
      ],
      [
        "vertOriginX",
        "vert-origin-x"
      ],
      [
        "vertOriginY",
        "vert-origin-y"
      ],
      [
        "wordSpacing",
        "word-spacing"
      ],
      [
        "writingMode",
        "writing-mode"
      ],
      [
        "xmlnsXlink",
        "xmlns:xlink"
      ],
      [
        "xHeight",
        "x-height"
      ]
    ]), o0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function zi(e) {
      return o0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function el() {
    }
    var rc = null;
    function fc(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var zn = null, Mn = null;
    function tr(e) {
      var t = xn(e);
      if (t && (e = t.stateNode)) {
        var l = e[ft] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (cc(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
              for (l = e; l.parentNode; ) l = l.parentNode;
              for (l = l.querySelectorAll('input[name="' + Ot("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++) {
                var n = l[t];
                if (n !== e && n.form === e.form) {
                  var a = n[ft] || null;
                  if (!a) throw Error(c(90));
                  cc(n, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                }
              }
              for (t = 0; t < l.length; t++) n = l[t], n.form === e.form && $s(n);
            }
            break e;
          case "textarea":
            Ws(e, l.value, l.defaultValue);
            break e;
          case "select":
            t = l.value, t != null && An(e, !!l.multiple, t, false);
        }
      }
    }
    var dc = false;
    function lr(e, t, l) {
      if (dc) return e(t, l);
      dc = true;
      try {
        var n = e(t);
        return n;
      } finally {
        if (dc = false, (zn !== null || Mn !== null) && (mu(), zn && (t = zn, e = Mn, Mn = zn = null, tr(t), e))) for (t = 0; t < e.length; t++) tr(e[t]);
      }
    }
    function pa(e, t) {
      var l = e.stateNode;
      if (l === null) return null;
      var n = l[ft] || null;
      if (n === null) return null;
      l = n[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
          break e;
        default:
          e = false;
      }
      if (e) return null;
      if (l && typeof l != "function") throw Error(c(231, t, typeof l));
      return l;
    }
    var tl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), hc = false;
    if (tl) try {
      var ba = {};
      Object.defineProperty(ba, "passive", {
        get: function() {
          hc = true;
        }
      }), window.addEventListener("test", ba, ba), window.removeEventListener("test", ba, ba);
    } catch {
      hc = false;
    }
    var wl = null, mc = null, Mi = null;
    function nr() {
      if (Mi) return Mi;
      var e, t = mc, l = t.length, n, a = "value" in wl ? wl.value : wl.textContent, i = a.length;
      for (e = 0; e < l && t[e] === a[e]; e++) ;
      var o = l - e;
      for (n = 1; n <= o && t[l - n] === a[i - n]; n++) ;
      return Mi = a.slice(e, 1 < n ? 1 - n : void 0);
    }
    function Oi(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Ni() {
      return true;
    }
    function ar() {
      return false;
    }
    function dt(e) {
      function t(l, n, a, i, o) {
        this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = o, this.currentTarget = null;
        for (var f in e) e.hasOwnProperty(f) && (l = e[f], this[f] = l ? l(i) : i[f]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? Ni : ar, this.isPropagationStopped = ar, this;
      }
      return b(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var l = this.nativeEvent;
          l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = false), this.isDefaultPrevented = Ni);
        },
        stopPropagation: function() {
          var l = this.nativeEvent;
          l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = true), this.isPropagationStopped = Ni);
        },
        persist: function() {
        },
        isPersistent: Ni
      }), t;
    }
    var Fl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Di = dt(Fl), ga = b({}, Fl, {
      view: 0,
      detail: 0
    }), s0 = dt(ga), yc, pc, va, Ci = b({}, ga, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: gc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== va && (va && e.type === "mousemove" ? (yc = e.screenX - va.screenX, pc = e.screenY - va.screenY) : pc = yc = 0, va = e), yc);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : pc;
      }
    }), ir = dt(Ci), r0 = b({}, Ci, {
      dataTransfer: 0
    }), f0 = dt(r0), d0 = b({}, ga, {
      relatedTarget: 0
    }), bc = dt(d0), h0 = b({}, Fl, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), m0 = dt(h0), y0 = b({}, Fl, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), p0 = dt(y0), b0 = b({}, Fl, {
      data: 0
    }), ur = dt(b0), g0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, v0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, _0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function S0(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = _0[e]) ? !!t[e] : false;
    }
    function gc() {
      return S0;
    }
    var x0 = b({}, ga, {
      key: function(e) {
        if (e.key) {
          var t = g0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = Oi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? v0[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: gc,
      charCode: function(e) {
        return e.type === "keypress" ? Oi(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Oi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), w0 = dt(x0), T0 = b({}, Ci, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), cr = dt(T0), A0 = b({}, ga, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: gc
    }), E0 = dt(A0), z0 = b({}, Fl, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), M0 = dt(z0), O0 = b({}, Ci, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), N0 = dt(O0), D0 = b({}, Fl, {
      newState: 0,
      oldState: 0
    }), C0 = dt(D0), R0 = [
      9,
      13,
      27,
      32
    ], vc = tl && "CompositionEvent" in window, _a = null;
    tl && "documentMode" in document && (_a = document.documentMode);
    var B0 = tl && "TextEvent" in window && !_a, or = tl && (!vc || _a && 8 < _a && 11 >= _a), sr = " ", rr = false;
    function fr(e, t) {
      switch (e) {
        case "keyup":
          return R0.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function dr(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var On = false;
    function j0(e, t) {
      switch (e) {
        case "compositionend":
          return dr(t);
        case "keypress":
          return t.which !== 32 ? null : (rr = true, sr);
        case "textInput":
          return e = t.data, e === sr && rr ? null : e;
        default:
          return null;
      }
    }
    function U0(e, t) {
      if (On) return e === "compositionend" || !vc && fr(e, t) ? (e = nr(), Mi = mc = wl = null, On = false, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return or && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var H0 = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function hr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!H0[e.type] : t === "textarea";
    }
    function mr(e, t, l, n) {
      zn ? Mn ? Mn.push(n) : Mn = [
        n
      ] : zn = n, t = Su(t, "onChange"), 0 < t.length && (l = new Di("onChange", "change", null, l, n), e.push({
        event: l,
        listeners: t
      }));
    }
    var Sa = null, xa = null;
    function L0(e) {
      Wd(e, 0);
    }
    function Ri(e) {
      var t = ya(e);
      if ($s(t)) return e;
    }
    function yr(e, t) {
      if (e === "change") return t;
    }
    var pr = false;
    if (tl) {
      var _c;
      if (tl) {
        var Sc = "oninput" in document;
        if (!Sc) {
          var br = document.createElement("div");
          br.setAttribute("oninput", "return;"), Sc = typeof br.oninput == "function";
        }
        _c = Sc;
      } else _c = false;
      pr = _c && (!document.documentMode || 9 < document.documentMode);
    }
    function gr() {
      Sa && (Sa.detachEvent("onpropertychange", vr), xa = Sa = null);
    }
    function vr(e) {
      if (e.propertyName === "value" && Ri(xa)) {
        var t = [];
        mr(t, xa, e, fc(e)), lr(L0, t);
      }
    }
    function q0(e, t, l) {
      e === "focusin" ? (gr(), Sa = t, xa = l, Sa.attachEvent("onpropertychange", vr)) : e === "focusout" && gr();
    }
    function G0(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ri(xa);
    }
    function Y0(e, t) {
      if (e === "click") return Ri(t);
    }
    function X0(e, t) {
      if (e === "input" || e === "change") return Ri(t);
    }
    function Q0(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var _t = typeof Object.is == "function" ? Object.is : Q0;
    function wa(e, t) {
      if (_t(e, t)) return true;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
      var l = Object.keys(e), n = Object.keys(t);
      if (l.length !== n.length) return false;
      for (n = 0; n < l.length; n++) {
        var a = l[n];
        if (!Ce.call(t, a) || !_t(e[a], t[a])) return false;
      }
      return true;
    }
    function _r(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Sr(e, t) {
      var l = _r(e);
      e = 0;
      for (var n; l; ) {
        if (l.nodeType === 3) {
          if (n = e + l.textContent.length, e <= t && n >= t) return {
            node: l,
            offset: t - e
          };
          e = n;
        }
        e: {
          for (; l; ) {
            if (l.nextSibling) {
              l = l.nextSibling;
              break e;
            }
            l = l.parentNode;
          }
          l = void 0;
        }
        l = _r(l);
      }
    }
    function xr(e, t) {
      return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? xr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
    }
    function wr(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = Ei(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var l = typeof t.contentWindow.location.href == "string";
        } catch {
          l = false;
        }
        if (l) e = t.contentWindow;
        else break;
        t = Ei(e.document);
      }
      return t;
    }
    function xc(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    var V0 = tl && "documentMode" in document && 11 >= document.documentMode, Nn = null, wc = null, Ta = null, Tc = false;
    function Tr(e, t, l) {
      var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
      Tc || Nn == null || Nn !== Ei(n) || (n = Nn, "selectionStart" in n && xc(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
      } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
      }), Ta && wa(Ta, n) || (Ta = n, n = Su(wc, "onSelect"), 0 < n.length && (t = new Di("onSelect", "select", null, t, l), e.push({
        event: t,
        listeners: n
      }), t.target = Nn)));
    }
    function Wl(e, t) {
      var l = {};
      return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
    }
    var Dn = {
      animationend: Wl("Animation", "AnimationEnd"),
      animationiteration: Wl("Animation", "AnimationIteration"),
      animationstart: Wl("Animation", "AnimationStart"),
      transitionrun: Wl("Transition", "TransitionRun"),
      transitionstart: Wl("Transition", "TransitionStart"),
      transitioncancel: Wl("Transition", "TransitionCancel"),
      transitionend: Wl("Transition", "TransitionEnd")
    }, Ac = {}, Ar = {};
    tl && (Ar = document.createElement("div").style, "AnimationEvent" in window || (delete Dn.animationend.animation, delete Dn.animationiteration.animation, delete Dn.animationstart.animation), "TransitionEvent" in window || delete Dn.transitionend.transition);
    function Il(e) {
      if (Ac[e]) return Ac[e];
      if (!Dn[e]) return e;
      var t = Dn[e], l;
      for (l in t) if (t.hasOwnProperty(l) && l in Ar) return Ac[e] = t[l];
      return e;
    }
    var Er = Il("animationend"), zr = Il("animationiteration"), Mr = Il("animationstart"), Z0 = Il("transitionrun"), K0 = Il("transitionstart"), k0 = Il("transitioncancel"), Or = Il("transitionend"), Nr = /* @__PURE__ */ new Map(), Ec = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Ec.push("scrollEnd");
    function Yt(e, t) {
      Nr.set(e, t), $l(t, [
        e
      ]);
    }
    var Bi = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, Nt = [], Cn = 0, zc = 0;
    function ji() {
      for (var e = Cn, t = zc = Cn = 0; t < e; ) {
        var l = Nt[t];
        Nt[t++] = null;
        var n = Nt[t];
        Nt[t++] = null;
        var a = Nt[t];
        Nt[t++] = null;
        var i = Nt[t];
        if (Nt[t++] = null, n !== null && a !== null) {
          var o = n.pending;
          o === null ? a.next = a : (a.next = o.next, o.next = a), n.pending = a;
        }
        i !== 0 && Dr(l, a, i);
      }
    }
    function Ui(e, t, l, n) {
      Nt[Cn++] = e, Nt[Cn++] = t, Nt[Cn++] = l, Nt[Cn++] = n, zc |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
    }
    function Mc(e, t, l, n) {
      return Ui(e, t, l, n), Hi(e);
    }
    function Pl(e, t) {
      return Ui(e, null, null, t), Hi(e);
    }
    function Dr(e, t, l) {
      e.lanes |= l;
      var n = e.alternate;
      n !== null && (n.lanes |= l);
      for (var a = false, i = e.return; i !== null; ) i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = true)), e = i, i = i.return;
      return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - vt(l), e = i.hiddenUpdates, n = e[a], n === null ? e[a] = [
        t
      ] : n.push(t), t.lane = l | 536870912), i) : null;
    }
    function Hi(e) {
      if (50 < Ka) throw Ka = 0, Lo = null, Error(c(185));
      for (var t = e.return; t !== null; ) e = t, t = e.return;
      return e.tag === 3 ? e.stateNode : null;
    }
    var Rn = {};
    function J0(e, t, l, n) {
      this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function St(e, t, l, n) {
      return new J0(e, t, l, n);
    }
    function Oc(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function ll(e, t) {
      var l = e.alternate;
      return l === null ? (l = St(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
    }
    function Cr(e, t) {
      e.flags &= 65011714;
      var l = e.alternate;
      return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }), e;
    }
    function Li(e, t, l, n, a, i) {
      var o = 0;
      if (n = e, typeof e == "function") Oc(e) && (o = 1);
      else if (typeof e == "string") o = Py(e, l, ne.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else e: switch (e) {
        case Ne:
          return e = St(31, l, t, a), e.elementType = Ne, e.lanes = i, e;
        case w:
          return en(l.children, a, i, t);
        case O:
          o = 8, a |= 24;
          break;
        case L:
          return e = St(12, l, t, a | 2), e.elementType = L, e.lanes = i, e;
        case W:
          return e = St(13, l, t, a), e.elementType = W, e.lanes = i, e;
        case oe:
          return e = St(19, l, t, a), e.elementType = oe, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case K:
              o = 10;
              break e;
            case G:
              o = 9;
              break e;
            case ce:
              o = 11;
              break e;
            case k:
              o = 14;
              break e;
            case se:
              o = 16, n = null;
              break e;
          }
          o = 29, l = Error(c(130, e === null ? "null" : typeof e, "")), n = null;
      }
      return t = St(o, l, t, a), t.elementType = e, t.type = n, t.lanes = i, t;
    }
    function en(e, t, l, n) {
      return e = St(7, e, n, t), e.lanes = l, e;
    }
    function Nc(e, t, l) {
      return e = St(6, e, null, t), e.lanes = l, e;
    }
    function Rr(e) {
      var t = St(18, null, null, 0);
      return t.stateNode = e, t;
    }
    function Dc(e, t, l) {
      return t = St(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    var Br = /* @__PURE__ */ new WeakMap();
    function Dt(e, t) {
      if (typeof e == "object" && e !== null) {
        var l = Br.get(e);
        return l !== void 0 ? l : (t = {
          value: e,
          source: t,
          stack: Lt(t)
        }, Br.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Lt(t)
      };
    }
    var Bn = [], jn = 0, qi = null, Aa = 0, Ct = [], Rt = 0, Tl = null, kt = 1, Jt = "";
    function nl(e, t) {
      Bn[jn++] = Aa, Bn[jn++] = qi, qi = e, Aa = t;
    }
    function jr(e, t, l) {
      Ct[Rt++] = kt, Ct[Rt++] = Jt, Ct[Rt++] = Tl, Tl = e;
      var n = kt;
      e = Jt;
      var a = 32 - vt(n) - 1;
      n &= ~(1 << a), l += 1;
      var i = 32 - vt(t) + a;
      if (30 < i) {
        var o = a - a % 5;
        i = (n & (1 << o) - 1).toString(32), n >>= o, a -= o, kt = 1 << 32 - vt(t) + a | l << a | n, Jt = i + e;
      } else kt = 1 << i | l << a | n, Jt = e;
    }
    function Cc(e) {
      e.return !== null && (nl(e, 1), jr(e, 1, 0));
    }
    function Rc(e) {
      for (; e === qi; ) qi = Bn[--jn], Bn[jn] = null, Aa = Bn[--jn], Bn[jn] = null;
      for (; e === Tl; ) Tl = Ct[--Rt], Ct[Rt] = null, Jt = Ct[--Rt], Ct[Rt] = null, kt = Ct[--Rt], Ct[Rt] = null;
    }
    function Ur(e, t) {
      Ct[Rt++] = kt, Ct[Rt++] = Jt, Ct[Rt++] = Tl, kt = t.id, Jt = t.overflow, Tl = e;
    }
    var it = null, Be = null, pe = false, Al = null, Bt = false, Bc = Error(c(519));
    function El(e) {
      var t = Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw Ea(Dt(t, e)), Bc;
    }
    function Hr(e) {
      var t = e.stateNode, l = e.type, n = e.memoizedProps;
      switch (t[at] = e, t[ft] = n, l) {
        case "dialog":
          de("cancel", t), de("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          de("load", t);
          break;
        case "video":
        case "audio":
          for (l = 0; l < Ja.length; l++) de(Ja[l], t);
          break;
        case "source":
          de("error", t);
          break;
        case "img":
        case "image":
        case "link":
          de("error", t), de("load", t);
          break;
        case "details":
          de("toggle", t);
          break;
        case "input":
          de("invalid", t), Fs(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, true);
          break;
        case "select":
          de("invalid", t);
          break;
        case "textarea":
          de("invalid", t), Is(t, n.value, n.defaultValue, n.children);
      }
      l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === true || th(t.textContent, l) ? (n.popover != null && (de("beforetoggle", t), de("toggle", t)), n.onScroll != null && de("scroll", t), n.onScrollEnd != null && de("scrollend", t), n.onClick != null && (t.onclick = el), t = true) : t = false, t || El(e, true);
    }
    function Lr(e) {
      for (it = e.return; it; ) switch (it.tag) {
        case 5:
        case 31:
        case 13:
          Bt = false;
          return;
        case 27:
        case 3:
          Bt = true;
          return;
        default:
          it = it.return;
      }
    }
    function Un(e) {
      if (e !== it) return false;
      if (!pe) return Lr(e), pe = true, false;
      var t = e.tag, l;
      if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Po(e.type, e.memoizedProps)), l = !l), l && Be && El(e), Lr(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
        Be = rh(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
        Be = rh(e);
      } else t === 27 ? (t = Be, Gl(e.type) ? (e = as, as = null, Be = e) : Be = t) : Be = it ? Ut(e.stateNode.nextSibling) : null;
      return true;
    }
    function tn() {
      Be = it = null, pe = false;
    }
    function jc() {
      var e = Al;
      return e !== null && (pt === null ? pt = e : pt.push.apply(pt, e), Al = null), e;
    }
    function Ea(e) {
      Al === null ? Al = [
        e
      ] : Al.push(e);
    }
    var Uc = be(null), ln = null, al = null;
    function zl(e, t, l) {
      I(Uc, t._currentValue), t._currentValue = l;
    }
    function il(e) {
      e._currentValue = Uc.current, ee(Uc);
    }
    function Hc(e, t, l) {
      for (; e !== null; ) {
        var n = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
        e = e.return;
      }
    }
    function Lc(e, t, l, n) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null; ) {
        var i = a.dependencies;
        if (i !== null) {
          var o = a.child;
          i = i.firstContext;
          e: for (; i !== null; ) {
            var f = i;
            i = a;
            for (var y = 0; y < t.length; y++) if (f.context === t[y]) {
              i.lanes |= l, f = i.alternate, f !== null && (f.lanes |= l), Hc(i.return, l, e), n || (o = null);
              break e;
            }
            i = f.next;
          }
        } else if (a.tag === 18) {
          if (o = a.return, o === null) throw Error(c(341));
          o.lanes |= l, i = o.alternate, i !== null && (i.lanes |= l), Hc(o, l, e), o = null;
        } else o = a.child;
        if (o !== null) o.return = a;
        else for (o = a; o !== null; ) {
          if (o === e) {
            o = null;
            break;
          }
          if (a = o.sibling, a !== null) {
            a.return = o.return, o = a;
            break;
          }
          o = o.return;
        }
        a = o;
      }
    }
    function Hn(e, t, l, n) {
      e = null;
      for (var a = t, i = false; a !== null; ) {
        if (!i) {
          if ((a.flags & 524288) !== 0) i = true;
          else if ((a.flags & 262144) !== 0) break;
        }
        if (a.tag === 10) {
          var o = a.alternate;
          if (o === null) throw Error(c(387));
          if (o = o.memoizedProps, o !== null) {
            var f = a.type;
            _t(a.pendingProps.value, o.value) || (e !== null ? e.push(f) : e = [
              f
            ]);
          }
        } else if (a === Ze.current) {
          if (o = a.alternate, o === null) throw Error(c(387));
          o.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Pa) : e = [
            Pa
          ]);
        }
        a = a.return;
      }
      e !== null && Lc(t, e, l, n), t.flags |= 262144;
    }
    function Gi(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!_t(e.context._currentValue, e.memoizedValue)) return true;
        e = e.next;
      }
      return false;
    }
    function nn(e) {
      ln = e, al = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function ut(e) {
      return qr(ln, e);
    }
    function Yi(e, t) {
      return ln === null && nn(e), qr(e, t);
    }
    function qr(e, t) {
      var l = t._currentValue;
      if (t = {
        context: t,
        memoizedValue: l,
        next: null
      }, al === null) {
        if (e === null) throw Error(c(308));
        al = t, e.dependencies = {
          lanes: 0,
          firstContext: t
        }, e.flags |= 524288;
      } else al = al.next = t;
      return l;
    }
    var $0 = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: false,
        addEventListener: function(l, n) {
          e.push(n);
        }
      };
      this.abort = function() {
        t.aborted = true, e.forEach(function(l) {
          return l();
        });
      };
    }, F0 = u.unstable_scheduleCallback, W0 = u.unstable_NormalPriority, ke = {
      $$typeof: K,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function qc() {
      return {
        controller: new $0(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function za(e) {
      e.refCount--, e.refCount === 0 && F0(W0, function() {
        e.controller.abort();
      });
    }
    var Ma = null, Gc = 0, Ln = 0, qn = null;
    function I0(e, t) {
      if (Ma === null) {
        var l = Ma = [];
        Gc = 0, Ln = Vo(), qn = {
          status: "pending",
          value: void 0,
          then: function(n) {
            l.push(n);
          }
        };
      }
      return Gc++, t.then(Gr, Gr), t;
    }
    function Gr() {
      if (--Gc === 0 && Ma !== null) {
        qn !== null && (qn.status = "fulfilled");
        var e = Ma;
        Ma = null, Ln = 0, qn = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function P0(e, t) {
      var l = [], n = {
        status: "pending",
        value: null,
        reason: null,
        then: function(a) {
          l.push(a);
        }
      };
      return e.then(function() {
        n.status = "fulfilled", n.value = t;
        for (var a = 0; a < l.length; a++) (0, l[a])(t);
      }, function(a) {
        for (n.status = "rejected", n.reason = a, a = 0; a < l.length; a++) (0, l[a])(void 0);
      }), n;
    }
    var Yr = D.S;
    D.S = function(e, t) {
      Ad = Me(), typeof t == "object" && t !== null && typeof t.then == "function" && I0(e, t), Yr !== null && Yr(e, t);
    };
    var an = be(null);
    function Yc() {
      var e = an.current;
      return e !== null ? e : Oe.pooledCache;
    }
    function Xi(e, t) {
      t === null ? I(an, an.current) : I(an, t.pool);
    }
    function Xr() {
      var e = Yc();
      return e === null ? null : {
        parent: ke._currentValue,
        pool: e
      };
    }
    var Gn = Error(c(460)), Xc = Error(c(474)), Qi = Error(c(542)), Vi = {
      then: function() {
      }
    };
    function Qr(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Vr(e, t, l) {
      switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(el, el), t = l), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Kr(e), e;
        default:
          if (typeof t.status == "string") t.then(el, el);
          else {
            if (e = Oe, e !== null && 100 < e.shellSuspendCounter) throw Error(c(482));
            e = t, e.status = "pending", e.then(function(n) {
              if (t.status === "pending") {
                var a = t;
                a.status = "fulfilled", a.value = n;
              }
            }, function(n) {
              if (t.status === "pending") {
                var a = t;
                a.status = "rejected", a.reason = n;
              }
            });
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Kr(e), e;
          }
          throw cn = t, Gn;
      }
    }
    function un(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (l) {
        throw l !== null && typeof l == "object" && typeof l.then == "function" ? (cn = l, Gn) : l;
      }
    }
    var cn = null;
    function Zr() {
      if (cn === null) throw Error(c(459));
      var e = cn;
      return cn = null, e;
    }
    function Kr(e) {
      if (e === Gn || e === Qi) throw Error(c(483));
    }
    var Yn = null, Oa = 0;
    function Zi(e) {
      var t = Oa;
      return Oa += 1, Yn === null && (Yn = []), Vr(Yn, e, t);
    }
    function Na(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Ki(e, t) {
      throw t.$$typeof === A ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
    }
    function kr(e) {
      function t(S, _) {
        if (e) {
          var E = S.deletions;
          E === null ? (S.deletions = [
            _
          ], S.flags |= 16) : E.push(_);
        }
      }
      function l(S, _) {
        if (!e) return null;
        for (; _ !== null; ) t(S, _), _ = _.sibling;
        return null;
      }
      function n(S) {
        for (var _ = /* @__PURE__ */ new Map(); S !== null; ) S.key !== null ? _.set(S.key, S) : _.set(S.index, S), S = S.sibling;
        return _;
      }
      function a(S, _) {
        return S = ll(S, _), S.index = 0, S.sibling = null, S;
      }
      function i(S, _, E) {
        return S.index = E, e ? (E = S.alternate, E !== null ? (E = E.index, E < _ ? (S.flags |= 67108866, _) : E) : (S.flags |= 67108866, _)) : (S.flags |= 1048576, _);
      }
      function o(S) {
        return e && S.alternate === null && (S.flags |= 67108866), S;
      }
      function f(S, _, E, B) {
        return _ === null || _.tag !== 6 ? (_ = Nc(E, S.mode, B), _.return = S, _) : (_ = a(_, E), _.return = S, _);
      }
      function y(S, _, E, B) {
        var F = E.type;
        return F === w ? R(S, _, E.props.children, B, E.key) : _ !== null && (_.elementType === F || typeof F == "object" && F !== null && F.$$typeof === se && un(F) === _.type) ? (_ = a(_, E.props), Na(_, E), _.return = S, _) : (_ = Li(E.type, E.key, E.props, null, S.mode, B), Na(_, E), _.return = S, _);
      }
      function z(S, _, E, B) {
        return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== E.containerInfo || _.stateNode.implementation !== E.implementation ? (_ = Dc(E, S.mode, B), _.return = S, _) : (_ = a(_, E.children || []), _.return = S, _);
      }
      function R(S, _, E, B, F) {
        return _ === null || _.tag !== 7 ? (_ = en(E, S.mode, B, F), _.return = S, _) : (_ = a(_, E), _.return = S, _);
      }
      function j(S, _, E) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint") return _ = Nc("" + _, S.mode, E), _.return = S, _;
        if (typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case C:
              return E = Li(_.type, _.key, _.props, null, S.mode, E), Na(E, _), E.return = S, E;
            case U:
              return _ = Dc(_, S.mode, E), _.return = S, _;
            case se:
              return _ = un(_), j(S, _, E);
          }
          if (ye(_) || He(_)) return _ = en(_, S.mode, E, null), _.return = S, _;
          if (typeof _.then == "function") return j(S, Zi(_), E);
          if (_.$$typeof === K) return j(S, Yi(S, _), E);
          Ki(S, _);
        }
        return null;
      }
      function M(S, _, E, B) {
        var F = _ !== null ? _.key : null;
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint") return F !== null ? null : f(S, _, "" + E, B);
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case C:
              return E.key === F ? y(S, _, E, B) : null;
            case U:
              return E.key === F ? z(S, _, E, B) : null;
            case se:
              return E = un(E), M(S, _, E, B);
          }
          if (ye(E) || He(E)) return F !== null ? null : R(S, _, E, B, null);
          if (typeof E.then == "function") return M(S, _, Zi(E), B);
          if (E.$$typeof === K) return M(S, _, Yi(S, E), B);
          Ki(S, E);
        }
        return null;
      }
      function N(S, _, E, B, F) {
        if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint") return S = S.get(E) || null, f(_, S, "" + B, F);
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case C:
              return S = S.get(B.key === null ? E : B.key) || null, y(_, S, B, F);
            case U:
              return S = S.get(B.key === null ? E : B.key) || null, z(_, S, B, F);
            case se:
              return B = un(B), N(S, _, E, B, F);
          }
          if (ye(B) || He(B)) return S = S.get(E) || null, R(_, S, B, F, null);
          if (typeof B.then == "function") return N(S, _, E, Zi(B), F);
          if (B.$$typeof === K) return N(S, _, E, Yi(_, B), F);
          Ki(_, B);
        }
        return null;
      }
      function Z(S, _, E, B) {
        for (var F = null, ve = null, J = _, ue = _ = 0, me = null; J !== null && ue < E.length; ue++) {
          J.index > ue ? (me = J, J = null) : me = J.sibling;
          var _e = M(S, J, E[ue], B);
          if (_e === null) {
            J === null && (J = me);
            break;
          }
          e && J && _e.alternate === null && t(S, J), _ = i(_e, _, ue), ve === null ? F = _e : ve.sibling = _e, ve = _e, J = me;
        }
        if (ue === E.length) return l(S, J), pe && nl(S, ue), F;
        if (J === null) {
          for (; ue < E.length; ue++) J = j(S, E[ue], B), J !== null && (_ = i(J, _, ue), ve === null ? F = J : ve.sibling = J, ve = J);
          return pe && nl(S, ue), F;
        }
        for (J = n(J); ue < E.length; ue++) me = N(J, S, ue, E[ue], B), me !== null && (e && me.alternate !== null && J.delete(me.key === null ? ue : me.key), _ = i(me, _, ue), ve === null ? F = me : ve.sibling = me, ve = me);
        return e && J.forEach(function(Zl) {
          return t(S, Zl);
        }), pe && nl(S, ue), F;
      }
      function P(S, _, E, B) {
        if (E == null) throw Error(c(151));
        for (var F = null, ve = null, J = _, ue = _ = 0, me = null, _e = E.next(); J !== null && !_e.done; ue++, _e = E.next()) {
          J.index > ue ? (me = J, J = null) : me = J.sibling;
          var Zl = M(S, J, _e.value, B);
          if (Zl === null) {
            J === null && (J = me);
            break;
          }
          e && J && Zl.alternate === null && t(S, J), _ = i(Zl, _, ue), ve === null ? F = Zl : ve.sibling = Zl, ve = Zl, J = me;
        }
        if (_e.done) return l(S, J), pe && nl(S, ue), F;
        if (J === null) {
          for (; !_e.done; ue++, _e = E.next()) _e = j(S, _e.value, B), _e !== null && (_ = i(_e, _, ue), ve === null ? F = _e : ve.sibling = _e, ve = _e);
          return pe && nl(S, ue), F;
        }
        for (J = n(J); !_e.done; ue++, _e = E.next()) _e = N(J, S, ue, _e.value, B), _e !== null && (e && _e.alternate !== null && J.delete(_e.key === null ? ue : _e.key), _ = i(_e, _, ue), ve === null ? F = _e : ve.sibling = _e, ve = _e);
        return e && J.forEach(function(rp) {
          return t(S, rp);
        }), pe && nl(S, ue), F;
      }
      function ze(S, _, E, B) {
        if (typeof E == "object" && E !== null && E.type === w && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case C:
              e: {
                for (var F = E.key; _ !== null; ) {
                  if (_.key === F) {
                    if (F = E.type, F === w) {
                      if (_.tag === 7) {
                        l(S, _.sibling), B = a(_, E.props.children), B.return = S, S = B;
                        break e;
                      }
                    } else if (_.elementType === F || typeof F == "object" && F !== null && F.$$typeof === se && un(F) === _.type) {
                      l(S, _.sibling), B = a(_, E.props), Na(B, E), B.return = S, S = B;
                      break e;
                    }
                    l(S, _);
                    break;
                  } else t(S, _);
                  _ = _.sibling;
                }
                E.type === w ? (B = en(E.props.children, S.mode, B, E.key), B.return = S, S = B) : (B = Li(E.type, E.key, E.props, null, S.mode, B), Na(B, E), B.return = S, S = B);
              }
              return o(S);
            case U:
              e: {
                for (F = E.key; _ !== null; ) {
                  if (_.key === F) if (_.tag === 4 && _.stateNode.containerInfo === E.containerInfo && _.stateNode.implementation === E.implementation) {
                    l(S, _.sibling), B = a(_, E.children || []), B.return = S, S = B;
                    break e;
                  } else {
                    l(S, _);
                    break;
                  }
                  else t(S, _);
                  _ = _.sibling;
                }
                B = Dc(E, S.mode, B), B.return = S, S = B;
              }
              return o(S);
            case se:
              return E = un(E), ze(S, _, E, B);
          }
          if (ye(E)) return Z(S, _, E, B);
          if (He(E)) {
            if (F = He(E), typeof F != "function") throw Error(c(150));
            return E = F.call(E), P(S, _, E, B);
          }
          if (typeof E.then == "function") return ze(S, _, Zi(E), B);
          if (E.$$typeof === K) return ze(S, _, Yi(S, E), B);
          Ki(S, E);
        }
        return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, _ !== null && _.tag === 6 ? (l(S, _.sibling), B = a(_, E), B.return = S, S = B) : (l(S, _), B = Nc(E, S.mode, B), B.return = S, S = B), o(S)) : l(S, _);
      }
      return function(S, _, E, B) {
        try {
          Oa = 0;
          var F = ze(S, _, E, B);
          return Yn = null, F;
        } catch (J) {
          if (J === Gn || J === Qi) throw J;
          var ve = St(29, J, null, S.mode);
          return ve.lanes = B, ve.return = S, ve;
        } finally {
        }
      };
    }
    var on = kr(true), Jr = kr(false), Ml = false;
    function Qc(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          lanes: 0,
          hiddenCallbacks: null
        },
        callbacks: null
      };
    }
    function Vc(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Ol(e) {
      return {
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Nl(e, t, l) {
      var n = e.updateQueue;
      if (n === null) return null;
      if (n = n.shared, (Se & 2) !== 0) {
        var a = n.pending;
        return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Hi(e), Dr(e, null, l), t;
      }
      return Ui(e, n, t, l), Hi(e);
    }
    function Da(e, t, l) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
        var n = t.lanes;
        n &= e.pendingLanes, l |= n, t.lanes = l, qs(e, l);
      }
    }
    function Zc(e, t) {
      var l = e.updateQueue, n = e.alternate;
      if (n !== null && (n = n.updateQueue, l === n)) {
        var a = null, i = null;
        if (l = l.firstBaseUpdate, l !== null) {
          do {
            var o = {
              lane: l.lane,
              tag: l.tag,
              payload: l.payload,
              callback: null,
              next: null
            };
            i === null ? a = i = o : i = i.next = o, l = l.next;
          } while (l !== null);
          i === null ? a = i = t : i = i.next = t;
        } else a = i = t;
        l = {
          baseState: n.baseState,
          firstBaseUpdate: a,
          lastBaseUpdate: i,
          shared: n.shared,
          callbacks: n.callbacks
        }, e.updateQueue = l;
        return;
      }
      e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
    }
    var Kc = false;
    function Ca() {
      if (Kc) {
        var e = qn;
        if (e !== null) throw e;
      }
    }
    function Ra(e, t, l, n) {
      Kc = false;
      var a = e.updateQueue;
      Ml = false;
      var i = a.firstBaseUpdate, o = a.lastBaseUpdate, f = a.shared.pending;
      if (f !== null) {
        a.shared.pending = null;
        var y = f, z = y.next;
        y.next = null, o === null ? i = z : o.next = z, o = y;
        var R = e.alternate;
        R !== null && (R = R.updateQueue, f = R.lastBaseUpdate, f !== o && (f === null ? R.firstBaseUpdate = z : f.next = z, R.lastBaseUpdate = y));
      }
      if (i !== null) {
        var j = a.baseState;
        o = 0, R = z = y = null, f = i;
        do {
          var M = f.lane & -536870913, N = M !== f.lane;
          if (N ? (he & M) === M : (n & M) === M) {
            M !== 0 && M === Ln && (Kc = true), R !== null && (R = R.next = {
              lane: 0,
              tag: f.tag,
              payload: f.payload,
              callback: null,
              next: null
            });
            e: {
              var Z = e, P = f;
              M = t;
              var ze = l;
              switch (P.tag) {
                case 1:
                  if (Z = P.payload, typeof Z == "function") {
                    j = Z.call(ze, j, M);
                    break e;
                  }
                  j = Z;
                  break e;
                case 3:
                  Z.flags = Z.flags & -65537 | 128;
                case 0:
                  if (Z = P.payload, M = typeof Z == "function" ? Z.call(ze, j, M) : Z, M == null) break e;
                  j = b({}, j, M);
                  break e;
                case 2:
                  Ml = true;
              }
            }
            M = f.callback, M !== null && (e.flags |= 64, N && (e.flags |= 8192), N = a.callbacks, N === null ? a.callbacks = [
              M
            ] : N.push(M));
          } else N = {
            lane: M,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, R === null ? (z = R = N, y = j) : R = R.next = N, o |= M;
          if (f = f.next, f === null) {
            if (f = a.shared.pending, f === null) break;
            N = f, f = N.next, N.next = null, a.lastBaseUpdate = N, a.shared.pending = null;
          }
        } while (true);
        R === null && (y = j), a.baseState = y, a.firstBaseUpdate = z, a.lastBaseUpdate = R, i === null && (a.shared.lanes = 0), jl |= o, e.lanes = o, e.memoizedState = j;
      }
    }
    function $r(e, t) {
      if (typeof e != "function") throw Error(c(191, e));
      e.call(t);
    }
    function Fr(e, t) {
      var l = e.callbacks;
      if (l !== null) for (e.callbacks = null, e = 0; e < l.length; e++) $r(l[e], t);
    }
    var Xn = be(null), ki = be(0);
    function Wr(e, t) {
      e = ml, I(ki, e), I(Xn, t), ml = e | t.baseLanes;
    }
    function kc() {
      I(ki, ml), I(Xn, Xn.current);
    }
    function Jc() {
      ml = ki.current, ee(Xn), ee(ki);
    }
    var xt = be(null), jt = null;
    function Dl(e) {
      var t = e.alternate;
      I(Qe, Qe.current & 1), I(xt, e), jt === null && (t === null || Xn.current !== null || t.memoizedState !== null) && (jt = e);
    }
    function $c(e) {
      I(Qe, Qe.current), I(xt, e), jt === null && (jt = e);
    }
    function Ir(e) {
      e.tag === 22 ? (I(Qe, Qe.current), I(xt, e), jt === null && (jt = e)) : Cl();
    }
    function Cl() {
      I(Qe, Qe.current), I(xt, xt.current);
    }
    function wt(e) {
      ee(xt), jt === e && (jt = null), ee(Qe);
    }
    var Qe = be(0);
    function Ji(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var l = t.memoizedState;
          if (l !== null && (l = l.dehydrated, l === null || ls(l) || ns(l))) return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var ul = 0, ie = null, Ae = null, Je = null, $i = false, Qn = false, sn = false, Fi = 0, Ba = 0, Vn = null, ey = 0;
    function Ye() {
      throw Error(c(321));
    }
    function Fc(e, t) {
      if (t === null) return false;
      for (var l = 0; l < t.length && l < e.length; l++) if (!_t(e[l], t[l])) return false;
      return true;
    }
    function Wc(e, t, l, n, a, i) {
      return ul = i, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = e === null || e.memoizedState === null ? Uf : ho, sn = false, i = l(n, a), sn = false, Qn && (i = ef(t, l, n, a)), Pr(e), i;
    }
    function Pr(e) {
      D.H = Ha;
      var t = Ae !== null && Ae.next !== null;
      if (ul = 0, Je = Ae = ie = null, $i = false, Ba = 0, Vn = null, t) throw Error(c(300));
      e === null || $e || (e = e.dependencies, e !== null && Gi(e) && ($e = true));
    }
    function ef(e, t, l, n) {
      ie = e;
      var a = 0;
      do {
        if (Qn && (Vn = null), Ba = 0, Qn = false, 25 <= a) throw Error(c(301));
        if (a += 1, Je = Ae = null, e.updateQueue != null) {
          var i = e.updateQueue;
          i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
        }
        D.H = Hf, i = t(l, n);
      } while (Qn);
      return i;
    }
    function ty() {
      var e = D.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? ja(t) : t, e = e.useState()[0], (Ae !== null ? Ae.memoizedState : null) !== e && (ie.flags |= 1024), t;
    }
    function Ic() {
      var e = Fi !== 0;
      return Fi = 0, e;
    }
    function Pc(e, t, l) {
      t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
    }
    function eo(e) {
      if ($i) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        $i = false;
      }
      ul = 0, Je = Ae = ie = null, Qn = false, Ba = Fi = 0, Vn = null;
    }
    function rt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Je === null ? ie.memoizedState = Je = e : Je = Je.next = e, Je;
    }
    function Ve() {
      if (Ae === null) {
        var e = ie.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Ae.next;
      var t = Je === null ? ie.memoizedState : Je.next;
      if (t !== null) Je = t, Ae = e;
      else {
        if (e === null) throw ie.alternate === null ? Error(c(467)) : Error(c(310));
        Ae = e, e = {
          memoizedState: Ae.memoizedState,
          baseState: Ae.baseState,
          baseQueue: Ae.baseQueue,
          queue: Ae.queue,
          next: null
        }, Je === null ? ie.memoizedState = Je = e : Je = Je.next = e;
      }
      return Je;
    }
    function Wi() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function ja(e) {
      var t = Ba;
      return Ba += 1, Vn === null && (Vn = []), e = Vr(Vn, e, t), t = ie, (Je === null ? t.memoizedState : Je.next) === null && (t = t.alternate, D.H = t === null || t.memoizedState === null ? Uf : ho), e;
    }
    function Ii(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return ja(e);
        if (e.$$typeof === K) return ut(e);
      }
      throw Error(c(438, String(e)));
    }
    function to(e) {
      var t = null, l = ie.updateQueue;
      if (l !== null && (t = l.memoCache), t == null) {
        var n = ie.alternate;
        n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
          data: n.data.map(function(a) {
            return a.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = {
        data: [],
        index: 0
      }), l === null && (l = Wi(), ie.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for (l = t.data[t.index] = Array(e), n = 0; n < e; n++) l[n] = tt;
      return t.index++, l;
    }
    function cl(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Pi(e) {
      var t = Ve();
      return lo(t, Ae, e);
    }
    function lo(e, t, l) {
      var n = e.queue;
      if (n === null) throw Error(c(311));
      n.lastRenderedReducer = l;
      var a = e.baseQueue, i = n.pending;
      if (i !== null) {
        if (a !== null) {
          var o = a.next;
          a.next = i.next, i.next = o;
        }
        t.baseQueue = a = i, n.pending = null;
      }
      if (i = e.baseState, a === null) e.memoizedState = i;
      else {
        t = a.next;
        var f = o = null, y = null, z = t, R = false;
        do {
          var j = z.lane & -536870913;
          if (j !== z.lane ? (he & j) === j : (ul & j) === j) {
            var M = z.revertLane;
            if (M === 0) y !== null && (y = y.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            }), j === Ln && (R = true);
            else if ((ul & M) === M) {
              z = z.next, M === Ln && (R = true);
              continue;
            } else j = {
              lane: 0,
              revertLane: z.revertLane,
              gesture: null,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            }, y === null ? (f = y = j, o = i) : y = y.next = j, ie.lanes |= M, jl |= M;
            j = z.action, sn && l(i, j), i = z.hasEagerState ? z.eagerState : l(i, j);
          } else M = {
            lane: j,
            revertLane: z.revertLane,
            gesture: z.gesture,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          }, y === null ? (f = y = M, o = i) : y = y.next = M, ie.lanes |= j, jl |= j;
          z = z.next;
        } while (z !== null && z !== t);
        if (y === null ? o = i : y.next = f, !_t(i, e.memoizedState) && ($e = true, R && (l = qn, l !== null))) throw l;
        e.memoizedState = i, e.baseState = o, e.baseQueue = y, n.lastRenderedState = i;
      }
      return a === null && (n.lanes = 0), [
        e.memoizedState,
        n.dispatch
      ];
    }
    function no(e) {
      var t = Ve(), l = t.queue;
      if (l === null) throw Error(c(311));
      l.lastRenderedReducer = e;
      var n = l.dispatch, a = l.pending, i = t.memoizedState;
      if (a !== null) {
        l.pending = null;
        var o = a = a.next;
        do
          i = e(i, o.action), o = o.next;
        while (o !== a);
        _t(i, t.memoizedState) || ($e = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i;
      }
      return [
        i,
        n
      ];
    }
    function tf(e, t, l) {
      var n = ie, a = Ve(), i = pe;
      if (i) {
        if (l === void 0) throw Error(c(407));
        l = l();
      } else l = t();
      var o = !_t((Ae || a).memoizedState, l);
      if (o && (a.memoizedState = l, $e = true), a = a.queue, uo(af.bind(null, n, a, e), [
        e
      ]), a.getSnapshot !== t || o || Je !== null && Je.memoizedState.tag & 1) {
        if (n.flags |= 2048, Zn(9, {
          destroy: void 0
        }, nf.bind(null, n, a, l, t), null), Oe === null) throw Error(c(349));
        i || (ul & 127) !== 0 || lf(n, t, l);
      }
      return l;
    }
    function lf(e, t, l) {
      e.flags |= 16384, e = {
        getSnapshot: t,
        value: l
      }, t = ie.updateQueue, t === null ? (t = Wi(), ie.updateQueue = t, t.stores = [
        e
      ]) : (l = t.stores, l === null ? t.stores = [
        e
      ] : l.push(e));
    }
    function nf(e, t, l, n) {
      t.value = l, t.getSnapshot = n, uf(t) && cf(e);
    }
    function af(e, t, l) {
      return l(function() {
        uf(t) && cf(e);
      });
    }
    function uf(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var l = t();
        return !_t(e, l);
      } catch {
        return true;
      }
    }
    function cf(e) {
      var t = Pl(e, 2);
      t !== null && bt(t, e, 2);
    }
    function ao(e) {
      var t = rt();
      if (typeof e == "function") {
        var l = e;
        if (e = l(), sn) {
          Sl(true);
          try {
            l();
          } finally {
            Sl(false);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cl,
        lastRenderedState: e
      }, t;
    }
    function of(e, t, l, n) {
      return e.baseState = l, lo(e, Ae, typeof n == "function" ? n : cl);
    }
    function ly(e, t, l, n, a) {
      if (lu(e)) throw Error(c(485));
      if (e = t.action, e !== null) {
        var i = {
          payload: a,
          action: e,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(o) {
            i.listeners.push(o);
          }
        };
        D.T !== null ? l(true) : i.isTransition = false, n(i), l = t.pending, l === null ? (i.next = t.pending = i, sf(t, i)) : (i.next = l.next, t.pending = l.next = i);
      }
    }
    function sf(e, t) {
      var l = t.action, n = t.payload, a = e.state;
      if (t.isTransition) {
        var i = D.T, o = {};
        D.T = o;
        try {
          var f = l(a, n), y = D.S;
          y !== null && y(o, f), rf(e, t, f);
        } catch (z) {
          io(e, t, z);
        } finally {
          i !== null && o.types !== null && (i.types = o.types), D.T = i;
        }
      } else try {
        i = l(a, n), rf(e, t, i);
      } catch (z) {
        io(e, t, z);
      }
    }
    function rf(e, t, l) {
      l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(n) {
        ff(e, t, n);
      }, function(n) {
        return io(e, t, n);
      }) : ff(e, t, l);
    }
    function ff(e, t, l) {
      t.status = "fulfilled", t.value = l, df(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, sf(e, l)));
    }
    function io(e, t, l) {
      var n = e.pending;
      if (e.pending = null, n !== null) {
        n = n.next;
        do
          t.status = "rejected", t.reason = l, df(t), t = t.next;
        while (t !== n);
      }
      e.action = null;
    }
    function df(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function hf(e, t) {
      return t;
    }
    function mf(e, t) {
      if (pe) {
        var l = Oe.formState;
        if (l !== null) {
          e: {
            var n = ie;
            if (pe) {
              if (Be) {
                t: {
                  for (var a = Be, i = Bt; a.nodeType !== 8; ) {
                    if (!i) {
                      a = null;
                      break t;
                    }
                    if (a = Ut(a.nextSibling), a === null) {
                      a = null;
                      break t;
                    }
                  }
                  i = a.data, a = i === "F!" || i === "F" ? a : null;
                }
                if (a) {
                  Be = Ut(a.nextSibling), n = a.data === "F!";
                  break e;
                }
              }
              El(n);
            }
            n = false;
          }
          n && (t = l[0]);
        }
      }
      return l = rt(), l.memoizedState = l.baseState = t, n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hf,
        lastRenderedState: t
      }, l.queue = n, l = Rf.bind(null, ie, n), n.dispatch = l, n = ao(false), i = fo.bind(null, ie, false, n.queue), n = rt(), a = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, n.queue = a, l = ly.bind(null, ie, a, i, l), a.dispatch = l, n.memoizedState = e, [
        t,
        l,
        false
      ];
    }
    function yf(e) {
      var t = Ve();
      return pf(t, Ae, e);
    }
    function pf(e, t, l) {
      if (t = lo(e, t, hf)[0], e = Pi(cl)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
        var n = ja(t);
      } catch (o) {
        throw o === Gn ? Qi : o;
      }
      else n = t;
      t = Ve();
      var a = t.queue, i = a.dispatch;
      return l !== t.memoizedState && (ie.flags |= 2048, Zn(9, {
        destroy: void 0
      }, ny.bind(null, a, l), null)), [
        n,
        i,
        e
      ];
    }
    function ny(e, t) {
      e.action = t;
    }
    function bf(e) {
      var t = Ve(), l = Ae;
      if (l !== null) return pf(t, l, e);
      Ve(), t = t.memoizedState, l = Ve();
      var n = l.queue.dispatch;
      return l.memoizedState = e, [
        t,
        n,
        false
      ];
    }
    function Zn(e, t, l, n) {
      return e = {
        tag: e,
        create: l,
        deps: n,
        inst: t,
        next: null
      }, t = ie.updateQueue, t === null && (t = Wi(), ie.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
    }
    function gf() {
      return Ve().memoizedState;
    }
    function eu(e, t, l, n) {
      var a = rt();
      ie.flags |= e, a.memoizedState = Zn(1 | t, {
        destroy: void 0
      }, l, n === void 0 ? null : n);
    }
    function tu(e, t, l, n) {
      var a = Ve();
      n = n === void 0 ? null : n;
      var i = a.memoizedState.inst;
      Ae !== null && n !== null && Fc(n, Ae.memoizedState.deps) ? a.memoizedState = Zn(t, i, l, n) : (ie.flags |= e, a.memoizedState = Zn(1 | t, i, l, n));
    }
    function vf(e, t) {
      eu(8390656, 8, e, t);
    }
    function uo(e, t) {
      tu(2048, 8, e, t);
    }
    function ay(e) {
      ie.flags |= 4;
      var t = ie.updateQueue;
      if (t === null) t = Wi(), ie.updateQueue = t, t.events = [
        e
      ];
      else {
        var l = t.events;
        l === null ? t.events = [
          e
        ] : l.push(e);
      }
    }
    function _f(e) {
      var t = Ve().memoizedState;
      return ay({
        ref: t,
        nextImpl: e
      }), function() {
        if ((Se & 2) !== 0) throw Error(c(440));
        return t.impl.apply(void 0, arguments);
      };
    }
    function Sf(e, t) {
      return tu(4, 2, e, t);
    }
    function xf(e, t) {
      return tu(4, 4, e, t);
    }
    function wf(e, t) {
      if (typeof t == "function") {
        e = e();
        var l = t(e);
        return function() {
          typeof l == "function" ? l() : t(null);
        };
      }
      if (t != null) return e = e(), t.current = e, function() {
        t.current = null;
      };
    }
    function Tf(e, t, l) {
      l = l != null ? l.concat([
        e
      ]) : null, tu(4, 4, wf.bind(null, t, e), l);
    }
    function co() {
    }
    function Af(e, t) {
      var l = Ve();
      t = t === void 0 ? null : t;
      var n = l.memoizedState;
      return t !== null && Fc(t, n[1]) ? n[0] : (l.memoizedState = [
        e,
        t
      ], e);
    }
    function Ef(e, t) {
      var l = Ve();
      t = t === void 0 ? null : t;
      var n = l.memoizedState;
      if (t !== null && Fc(t, n[1])) return n[0];
      if (n = e(), sn) {
        Sl(true);
        try {
          e();
        } finally {
          Sl(false);
        }
      }
      return l.memoizedState = [
        n,
        t
      ], n;
    }
    function oo(e, t, l) {
      return l === void 0 || (ul & 1073741824) !== 0 && (he & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = zd(), ie.lanes |= e, jl |= e, l);
    }
    function zf(e, t, l, n) {
      return _t(l, t) ? l : Xn.current !== null ? (e = oo(e, l, n), _t(e, t) || ($e = true), e) : (ul & 42) === 0 || (ul & 1073741824) !== 0 && (he & 261930) === 0 ? ($e = true, e.memoizedState = l) : (e = zd(), ie.lanes |= e, jl |= e, t);
    }
    function Mf(e, t, l, n, a) {
      var i = Y.p;
      Y.p = i !== 0 && 8 > i ? i : 8;
      var o = D.T, f = {};
      D.T = f, fo(e, false, t, l);
      try {
        var y = a(), z = D.S;
        if (z !== null && z(f, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          var R = P0(y, n);
          Ua(e, t, R, Et(e));
        } else Ua(e, t, n, Et(e));
      } catch (j) {
        Ua(e, t, {
          then: function() {
          },
          status: "rejected",
          reason: j
        }, Et());
      } finally {
        Y.p = i, o !== null && f.types !== null && (o.types = f.types), D.T = o;
      }
    }
    function iy() {
    }
    function so(e, t, l, n) {
      if (e.tag !== 5) throw Error(c(476));
      var a = Of(e).queue;
      Mf(e, a, t, H, l === null ? iy : function() {
        return Nf(e), l(n);
      });
    }
    function Of(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: H,
        baseState: H,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: cl,
          lastRenderedState: H
        },
        next: null
      };
      var l = {};
      return t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: cl,
          lastRenderedState: l
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function Nf(e) {
      var t = Of(e);
      t.next === null && (t = e.alternate.memoizedState), Ua(e, t.next.queue, {}, Et());
    }
    function ro() {
      return ut(Pa);
    }
    function Df() {
      return Ve().memoizedState;
    }
    function Cf() {
      return Ve().memoizedState;
    }
    function uy(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var l = Et();
            e = Ol(l);
            var n = Nl(t, e, l);
            n !== null && (bt(n, t, l), Da(n, t, l)), t = {
              cache: qc()
            }, e.payload = t;
            return;
        }
        t = t.return;
      }
    }
    function cy(e, t, l) {
      var n = Et();
      l = {
        lane: n,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, lu(e) ? Bf(t, l) : (l = Mc(e, t, l, n), l !== null && (bt(l, e, n), jf(l, t, n)));
    }
    function Rf(e, t, l) {
      var n = Et();
      Ua(e, t, l, n);
    }
    function Ua(e, t, l, n) {
      var a = {
        lane: n,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (lu(e)) Bf(t, a);
      else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
          var o = t.lastRenderedState, f = i(o, l);
          if (a.hasEagerState = true, a.eagerState = f, _t(f, o)) return Ui(e, t, a, 0), Oe === null && ji(), false;
        } catch {
        } finally {
        }
        if (l = Mc(e, t, a, n), l !== null) return bt(l, e, n), jf(l, t, n), true;
      }
      return false;
    }
    function fo(e, t, l, n) {
      if (n = {
        lane: 2,
        revertLane: Vo(),
        gesture: null,
        action: n,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, lu(e)) {
        if (t) throw Error(c(479));
      } else t = Mc(e, l, n, 2), t !== null && bt(t, e, 2);
    }
    function lu(e) {
      var t = e.alternate;
      return e === ie || t !== null && t === ie;
    }
    function Bf(e, t) {
      Qn = $i = true;
      var l = e.pending;
      l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
    }
    function jf(e, t, l) {
      if ((l & 4194048) !== 0) {
        var n = t.lanes;
        n &= e.pendingLanes, l |= n, t.lanes = l, qs(e, l);
      }
    }
    var Ha = {
      readContext: ut,
      use: Ii,
      useCallback: Ye,
      useContext: Ye,
      useEffect: Ye,
      useImperativeHandle: Ye,
      useLayoutEffect: Ye,
      useInsertionEffect: Ye,
      useMemo: Ye,
      useReducer: Ye,
      useRef: Ye,
      useState: Ye,
      useDebugValue: Ye,
      useDeferredValue: Ye,
      useTransition: Ye,
      useSyncExternalStore: Ye,
      useId: Ye,
      useHostTransitionStatus: Ye,
      useFormState: Ye,
      useActionState: Ye,
      useOptimistic: Ye,
      useMemoCache: Ye,
      useCacheRefresh: Ye
    };
    Ha.useEffectEvent = Ye;
    var Uf = {
      readContext: ut,
      use: Ii,
      useCallback: function(e, t) {
        return rt().memoizedState = [
          e,
          t === void 0 ? null : t
        ], e;
      },
      useContext: ut,
      useEffect: vf,
      useImperativeHandle: function(e, t, l) {
        l = l != null ? l.concat([
          e
        ]) : null, eu(4194308, 4, wf.bind(null, t, e), l);
      },
      useLayoutEffect: function(e, t) {
        return eu(4194308, 4, e, t);
      },
      useInsertionEffect: function(e, t) {
        eu(4, 2, e, t);
      },
      useMemo: function(e, t) {
        var l = rt();
        t = t === void 0 ? null : t;
        var n = e();
        if (sn) {
          Sl(true);
          try {
            e();
          } finally {
            Sl(false);
          }
        }
        return l.memoizedState = [
          n,
          t
        ], n;
      },
      useReducer: function(e, t, l) {
        var n = rt();
        if (l !== void 0) {
          var a = l(t);
          if (sn) {
            Sl(true);
            try {
              l(t);
            } finally {
              Sl(false);
            }
          }
        } else a = t;
        return n.memoizedState = n.baseState = a, e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: a
        }, n.queue = e, e = e.dispatch = cy.bind(null, ie, e), [
          n.memoizedState,
          e
        ];
      },
      useRef: function(e) {
        var t = rt();
        return e = {
          current: e
        }, t.memoizedState = e;
      },
      useState: function(e) {
        e = ao(e);
        var t = e.queue, l = Rf.bind(null, ie, t);
        return t.dispatch = l, [
          e.memoizedState,
          l
        ];
      },
      useDebugValue: co,
      useDeferredValue: function(e, t) {
        var l = rt();
        return oo(l, e, t);
      },
      useTransition: function() {
        var e = ao(false);
        return e = Mf.bind(null, ie, e.queue, true, false), rt().memoizedState = e, [
          false,
          e
        ];
      },
      useSyncExternalStore: function(e, t, l) {
        var n = ie, a = rt();
        if (pe) {
          if (l === void 0) throw Error(c(407));
          l = l();
        } else {
          if (l = t(), Oe === null) throw Error(c(349));
          (he & 127) !== 0 || lf(n, t, l);
        }
        a.memoizedState = l;
        var i = {
          value: l,
          getSnapshot: t
        };
        return a.queue = i, vf(af.bind(null, n, i, e), [
          e
        ]), n.flags |= 2048, Zn(9, {
          destroy: void 0
        }, nf.bind(null, n, i, l, t), null), l;
      },
      useId: function() {
        var e = rt(), t = Oe.identifierPrefix;
        if (pe) {
          var l = Jt, n = kt;
          l = (n & ~(1 << 32 - vt(n) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Fi++, 0 < l && (t += "H" + l.toString(32)), t += "_";
        } else l = ey++, t = "_" + t + "r_" + l.toString(32) + "_";
        return e.memoizedState = t;
      },
      useHostTransitionStatus: ro,
      useFormState: mf,
      useActionState: mf,
      useOptimistic: function(e) {
        var t = rt();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = l, t = fo.bind(null, ie, true, l), l.dispatch = t, [
          e,
          t
        ];
      },
      useMemoCache: to,
      useCacheRefresh: function() {
        return rt().memoizedState = uy.bind(null, ie);
      },
      useEffectEvent: function(e) {
        var t = rt(), l = {
          impl: e
        };
        return t.memoizedState = l, function() {
          if ((Se & 2) !== 0) throw Error(c(440));
          return l.impl.apply(void 0, arguments);
        };
      }
    }, ho = {
      readContext: ut,
      use: Ii,
      useCallback: Af,
      useContext: ut,
      useEffect: uo,
      useImperativeHandle: Tf,
      useInsertionEffect: Sf,
      useLayoutEffect: xf,
      useMemo: Ef,
      useReducer: Pi,
      useRef: gf,
      useState: function() {
        return Pi(cl);
      },
      useDebugValue: co,
      useDeferredValue: function(e, t) {
        var l = Ve();
        return zf(l, Ae.memoizedState, e, t);
      },
      useTransition: function() {
        var e = Pi(cl)[0], t = Ve().memoizedState;
        return [
          typeof e == "boolean" ? e : ja(e),
          t
        ];
      },
      useSyncExternalStore: tf,
      useId: Df,
      useHostTransitionStatus: ro,
      useFormState: yf,
      useActionState: yf,
      useOptimistic: function(e, t) {
        var l = Ve();
        return of(l, Ae, e, t);
      },
      useMemoCache: to,
      useCacheRefresh: Cf
    };
    ho.useEffectEvent = _f;
    var Hf = {
      readContext: ut,
      use: Ii,
      useCallback: Af,
      useContext: ut,
      useEffect: uo,
      useImperativeHandle: Tf,
      useInsertionEffect: Sf,
      useLayoutEffect: xf,
      useMemo: Ef,
      useReducer: no,
      useRef: gf,
      useState: function() {
        return no(cl);
      },
      useDebugValue: co,
      useDeferredValue: function(e, t) {
        var l = Ve();
        return Ae === null ? oo(l, e, t) : zf(l, Ae.memoizedState, e, t);
      },
      useTransition: function() {
        var e = no(cl)[0], t = Ve().memoizedState;
        return [
          typeof e == "boolean" ? e : ja(e),
          t
        ];
      },
      useSyncExternalStore: tf,
      useId: Df,
      useHostTransitionStatus: ro,
      useFormState: bf,
      useActionState: bf,
      useOptimistic: function(e, t) {
        var l = Ve();
        return Ae !== null ? of(l, Ae, e, t) : (l.baseState = e, [
          e,
          l.queue.dispatch
        ]);
      },
      useMemoCache: to,
      useCacheRefresh: Cf
    };
    Hf.useEffectEvent = _f;
    function mo(e, t, l, n) {
      t = e.memoizedState, l = l(n, t), l = l == null ? t : b({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
    }
    var yo = {
      enqueueSetState: function(e, t, l) {
        e = e._reactInternals;
        var n = Et(), a = Ol(n);
        a.payload = t, l != null && (a.callback = l), t = Nl(e, a, n), t !== null && (bt(t, e, n), Da(t, e, n));
      },
      enqueueReplaceState: function(e, t, l) {
        e = e._reactInternals;
        var n = Et(), a = Ol(n);
        a.tag = 1, a.payload = t, l != null && (a.callback = l), t = Nl(e, a, n), t !== null && (bt(t, e, n), Da(t, e, n));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var l = Et(), n = Ol(l);
        n.tag = 2, t != null && (n.callback = t), t = Nl(e, n, l), t !== null && (bt(t, e, l), Da(t, e, l));
      }
    };
    function Lf(e, t, l, n, a, i, o) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, o) : t.prototype && t.prototype.isPureReactComponent ? !wa(l, n) || !wa(a, i) : true;
    }
    function qf(e, t, l, n) {
      e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && yo.enqueueReplaceState(t, t.state, null);
    }
    function rn(e, t) {
      var l = t;
      if ("ref" in t) {
        l = {};
        for (var n in t) n !== "ref" && (l[n] = t[n]);
      }
      if (e = e.defaultProps) {
        l === t && (l = b({}, l));
        for (var a in e) l[a] === void 0 && (l[a] = e[a]);
      }
      return l;
    }
    function Gf(e) {
      Bi(e);
    }
    function Yf(e) {
      console.error(e);
    }
    function Xf(e) {
      Bi(e);
    }
    function nu(e, t) {
      try {
        var l = e.onUncaughtError;
        l(t.value, {
          componentStack: t.stack
        });
      } catch (n) {
        setTimeout(function() {
          throw n;
        });
      }
    }
    function Qf(e, t, l) {
      try {
        var n = e.onCaughtError;
        n(l.value, {
          componentStack: l.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (a) {
        setTimeout(function() {
          throw a;
        });
      }
    }
    function po(e, t, l) {
      return l = Ol(l), l.tag = 3, l.payload = {
        element: null
      }, l.callback = function() {
        nu(e, t);
      }, l;
    }
    function Vf(e) {
      return e = Ol(e), e.tag = 3, e;
    }
    function Zf(e, t, l, n) {
      var a = l.type.getDerivedStateFromError;
      if (typeof a == "function") {
        var i = n.value;
        e.payload = function() {
          return a(i);
        }, e.callback = function() {
          Qf(t, l, n);
        };
      }
      var o = l.stateNode;
      o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
        Qf(t, l, n), typeof a != "function" && (Ul === null ? Ul = /* @__PURE__ */ new Set([
          this
        ]) : Ul.add(this));
        var f = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: f !== null ? f : ""
        });
      });
    }
    function oy(e, t, l, n, a) {
      if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
        if (t = l.alternate, t !== null && Hn(t, l, a, true), l = xt.current, l !== null) {
          switch (l.tag) {
            case 31:
            case 13:
              return jt === null ? yu() : l.alternate === null && Xe === 0 && (Xe = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Vi ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([
                n
              ]) : t.add(n), Yo(e, n, a)), false;
            case 22:
              return l.flags |= 65536, n === Vi ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  n
                ])
              }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([
                n
              ]) : l.add(n)), Yo(e, n, a)), false;
          }
          throw Error(c(435, l.tag));
        }
        return Yo(e, n, a), yu(), false;
      }
      if (pe) return t = xt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== Bc && (e = Error(c(422), {
        cause: n
      }), Ea(Dt(e, l)))) : (n !== Bc && (t = Error(c(423), {
        cause: n
      }), Ea(Dt(t, l))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = Dt(n, l), a = po(e.stateNode, n, a), Zc(e, a), Xe !== 4 && (Xe = 2)), false;
      var i = Error(c(520), {
        cause: n
      });
      if (i = Dt(i, l), Za === null ? Za = [
        i
      ] : Za.push(i), Xe !== 4 && (Xe = 2), t === null) return true;
      n = Dt(n, l), l = t;
      do {
        switch (l.tag) {
          case 3:
            return l.flags |= 65536, e = a & -a, l.lanes |= e, e = po(l.stateNode, n, e), Zc(l, e), false;
          case 1:
            if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ul === null || !Ul.has(i)))) return l.flags |= 65536, a &= -a, l.lanes |= a, a = Vf(a), Zf(a, e, l, n), Zc(l, a), false;
        }
        l = l.return;
      } while (l !== null);
      return false;
    }
    var bo = Error(c(461)), $e = false;
    function ct(e, t, l, n) {
      t.child = e === null ? Jr(t, null, l, n) : on(t, e.child, l, n);
    }
    function Kf(e, t, l, n, a) {
      l = l.render;
      var i = t.ref;
      if ("ref" in n) {
        var o = {};
        for (var f in n) f !== "ref" && (o[f] = n[f]);
      } else o = n;
      return nn(t), n = Wc(e, t, l, o, i, a), f = Ic(), e !== null && !$e ? (Pc(e, t, a), ol(e, t, a)) : (pe && f && Cc(t), t.flags |= 1, ct(e, t, n, a), t.child);
    }
    function kf(e, t, l, n, a) {
      if (e === null) {
        var i = l.type;
        return typeof i == "function" && !Oc(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, Jf(e, t, i, n, a)) : (e = Li(l.type, null, n, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (i = e.child, !Ao(e, a)) {
        var o = i.memoizedProps;
        if (l = l.compare, l = l !== null ? l : wa, l(o, n) && e.ref === t.ref) return ol(e, t, a);
      }
      return t.flags |= 1, e = ll(i, n), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Jf(e, t, l, n, a) {
      if (e !== null) {
        var i = e.memoizedProps;
        if (wa(i, n) && e.ref === t.ref) if ($e = false, t.pendingProps = n = i, Ao(e, a)) (e.flags & 131072) !== 0 && ($e = true);
        else return t.lanes = e.lanes, ol(e, t, a);
      }
      return go(e, t, l, n, a);
    }
    function $f(e, t, l, n) {
      var a = n.children, i = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), n.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = i !== null ? i.baseLanes | l : l, e !== null) {
            for (n = t.child = e.child, a = 0; n !== null; ) a = a | n.lanes | n.childLanes, n = n.sibling;
            n = a & ~i;
          } else n = 0, t.child = null;
          return Ff(e, t, i, l, n);
        }
        if ((l & 536870912) !== 0) t.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, e !== null && Xi(t, i !== null ? i.cachePool : null), i !== null ? Wr(t, i) : kc(), Ir(t);
        else return n = t.lanes = 536870912, Ff(e, t, i !== null ? i.baseLanes | l : l, l, n);
      } else i !== null ? (Xi(t, i.cachePool), Wr(t, i), Cl(), t.memoizedState = null) : (e !== null && Xi(t, null), kc(), Cl());
      return ct(e, t, a, l), t.child;
    }
    function La(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function Ff(e, t, l, n, a) {
      var i = Yc();
      return i = i === null ? null : {
        parent: ke._currentValue,
        pool: i
      }, t.memoizedState = {
        baseLanes: l,
        cachePool: i
      }, e !== null && Xi(t, null), kc(), Ir(t), e !== null && Hn(e, t, n, true), t.childLanes = a, null;
    }
    function au(e, t) {
      return t = uu({
        mode: t.mode,
        children: t.children
      }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Wf(e, t, l) {
      return on(t, e.child, null, l), e = au(t, t.pendingProps), e.flags |= 2, wt(t), t.memoizedState = null, e;
    }
    function sy(e, t, l) {
      var n = t.pendingProps, a = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (pe) {
          if (n.mode === "hidden") return e = au(t, n), t.lanes = 536870912, La(null, e);
          if ($c(t), (e = Be) ? (e = sh(e, Bt), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
            dehydrated: e,
            treeContext: Tl !== null ? {
              id: kt,
              overflow: Jt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Rr(e), l.return = t, t.child = l, it = t, Be = null)) : e = null, e === null) throw El(t);
          return t.lanes = 536870912, null;
        }
        return au(t, n);
      }
      var i = e.memoizedState;
      if (i !== null) {
        var o = i.dehydrated;
        if ($c(t), a) if (t.flags & 256) t.flags &= -257, t = Wf(e, t, l);
        else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
        else if ($e || Hn(e, t, l, false), a = (l & e.childLanes) !== 0, $e || a) {
          if (n = Oe, n !== null && (o = Gs(n, l), o !== 0 && o !== i.retryLane)) throw i.retryLane = o, Pl(e, o), bt(n, e, o), bo;
          yu(), t = Wf(e, t, l);
        } else e = i.treeContext, Be = Ut(o.nextSibling), it = t, pe = true, Al = null, Bt = false, e !== null && Ur(t, e), t = au(t, n), t.flags |= 4096;
        return t;
      }
      return e = ll(e.child, {
        mode: n.mode,
        children: n.children
      }), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function iu(e, t) {
      var l = t.ref;
      if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof l != "function" && typeof l != "object") throw Error(c(284));
        (e === null || e.ref !== l) && (t.flags |= 4194816);
      }
    }
    function go(e, t, l, n, a) {
      return nn(t), l = Wc(e, t, l, n, void 0, a), n = Ic(), e !== null && !$e ? (Pc(e, t, a), ol(e, t, a)) : (pe && n && Cc(t), t.flags |= 1, ct(e, t, l, a), t.child);
    }
    function If(e, t, l, n, a, i) {
      return nn(t), t.updateQueue = null, l = ef(t, n, l, a), Pr(e), n = Ic(), e !== null && !$e ? (Pc(e, t, i), ol(e, t, i)) : (pe && n && Cc(t), t.flags |= 1, ct(e, t, l, i), t.child);
    }
    function Pf(e, t, l, n, a) {
      if (nn(t), t.stateNode === null) {
        var i = Rn, o = l.contextType;
        typeof o == "object" && o !== null && (i = ut(o)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = yo, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, Qc(t), o = l.contextType, i.context = typeof o == "object" && o !== null ? ut(o) : Rn, i.state = t.memoizedState, o = l.getDerivedStateFromProps, typeof o == "function" && (mo(t, l, o, n), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (o = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), o !== i.state && yo.enqueueReplaceState(i, i.state, null), Ra(t, n, i, a), Ca(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = true;
      } else if (e === null) {
        i = t.stateNode;
        var f = t.memoizedProps, y = rn(l, f);
        i.props = y;
        var z = i.context, R = l.contextType;
        o = Rn, typeof R == "object" && R !== null && (o = ut(R));
        var j = l.getDerivedStateFromProps;
        R = typeof j == "function" || typeof i.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, R || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f || z !== o) && qf(t, i, n, o), Ml = false;
        var M = t.memoizedState;
        i.state = M, Ra(t, n, i, a), Ca(), z = t.memoizedState, f || M !== z || Ml ? (typeof j == "function" && (mo(t, l, j, n), z = t.memoizedState), (y = Ml || Lf(t, l, y, n, M, z, o)) ? (R || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = z), i.props = n, i.state = z, i.context = o, n = y) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = false);
      } else {
        i = t.stateNode, Vc(e, t), o = t.memoizedProps, R = rn(l, o), i.props = R, j = t.pendingProps, M = i.context, z = l.contextType, y = Rn, typeof z == "object" && z !== null && (y = ut(z)), f = l.getDerivedStateFromProps, (z = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== j || M !== y) && qf(t, i, n, y), Ml = false, M = t.memoizedState, i.state = M, Ra(t, n, i, a), Ca();
        var N = t.memoizedState;
        o !== j || M !== N || Ml || e !== null && e.dependencies !== null && Gi(e.dependencies) ? (typeof f == "function" && (mo(t, l, f, n), N = t.memoizedState), (R = Ml || Lf(t, l, R, n, M, N, y) || e !== null && e.dependencies !== null && Gi(e.dependencies)) ? (z || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, N, y), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(n, N, y)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = N), i.props = n, i.state = N, i.context = y, n = R) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), n = false);
      }
      return i = n, iu(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = on(t, e.child, null, a), t.child = on(t, null, l, a)) : ct(e, t, l, a), t.memoizedState = i.state, e = t.child) : e = ol(e, t, a), e;
    }
    function ed(e, t, l, n) {
      return tn(), t.flags |= 256, ct(e, t, l, n), t.child;
    }
    var vo = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function _o(e) {
      return {
        baseLanes: e,
        cachePool: Xr()
      };
    }
    function So(e, t, l) {
      return e = e !== null ? e.childLanes & ~l : 0, t && (e |= At), e;
    }
    function td(e, t, l) {
      var n = t.pendingProps, a = false, i = (t.flags & 128) !== 0, o;
      if ((o = i) || (o = e !== null && e.memoizedState === null ? false : (Qe.current & 2) !== 0), o && (a = true, t.flags &= -129), o = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (pe) {
          if (a ? Dl(t) : Cl(), (e = Be) ? (e = sh(e, Bt), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
            dehydrated: e,
            treeContext: Tl !== null ? {
              id: kt,
              overflow: Jt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Rr(e), l.return = t, t.child = l, it = t, Be = null)) : e = null, e === null) throw El(t);
          return ns(e) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var f = n.children;
        return n = n.fallback, a ? (Cl(), a = t.mode, f = uu({
          mode: "hidden",
          children: f
        }, a), n = en(n, a, l, null), f.return = t, n.return = t, f.sibling = n, t.child = f, n = t.child, n.memoizedState = _o(l), n.childLanes = So(e, o, l), t.memoizedState = vo, La(null, n)) : (Dl(t), xo(t, f));
      }
      var y = e.memoizedState;
      if (y !== null && (f = y.dehydrated, f !== null)) {
        if (i) t.flags & 256 ? (Dl(t), t.flags &= -257, t = wo(e, t, l)) : t.memoizedState !== null ? (Cl(), t.child = e.child, t.flags |= 128, t = null) : (Cl(), f = n.fallback, a = t.mode, n = uu({
          mode: "visible",
          children: n.children
        }, a), f = en(f, a, l, null), f.flags |= 2, n.return = t, f.return = t, n.sibling = f, t.child = n, on(t, e.child, null, l), n = t.child, n.memoizedState = _o(l), n.childLanes = So(e, o, l), t.memoizedState = vo, t = La(null, n));
        else if (Dl(t), ns(f)) {
          if (o = f.nextSibling && f.nextSibling.dataset, o) var z = o.dgst;
          o = z, n = Error(c(419)), n.stack = "", n.digest = o, Ea({
            value: n,
            source: null,
            stack: null
          }), t = wo(e, t, l);
        } else if ($e || Hn(e, t, l, false), o = (l & e.childLanes) !== 0, $e || o) {
          if (o = Oe, o !== null && (n = Gs(o, l), n !== 0 && n !== y.retryLane)) throw y.retryLane = n, Pl(e, n), bt(o, e, n), bo;
          ls(f) || yu(), t = wo(e, t, l);
        } else ls(f) ? (t.flags |= 192, t.child = e.child, t = null) : (e = y.treeContext, Be = Ut(f.nextSibling), it = t, pe = true, Al = null, Bt = false, e !== null && Ur(t, e), t = xo(t, n.children), t.flags |= 4096);
        return t;
      }
      return a ? (Cl(), f = n.fallback, a = t.mode, y = e.child, z = y.sibling, n = ll(y, {
        mode: "hidden",
        children: n.children
      }), n.subtreeFlags = y.subtreeFlags & 65011712, z !== null ? f = ll(z, f) : (f = en(f, a, l, null), f.flags |= 2), f.return = t, n.return = t, n.sibling = f, t.child = n, La(null, n), n = t.child, f = e.child.memoizedState, f === null ? f = _o(l) : (a = f.cachePool, a !== null ? (y = ke._currentValue, a = a.parent !== y ? {
        parent: y,
        pool: y
      } : a) : a = Xr(), f = {
        baseLanes: f.baseLanes | l,
        cachePool: a
      }), n.memoizedState = f, n.childLanes = So(e, o, l), t.memoizedState = vo, La(e.child, n)) : (Dl(t), l = e.child, e = l.sibling, l = ll(l, {
        mode: "visible",
        children: n.children
      }), l.return = t, l.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [
        e
      ], t.flags |= 16) : o.push(e)), t.child = l, t.memoizedState = null, l);
    }
    function xo(e, t) {
      return t = uu({
        mode: "visible",
        children: t
      }, e.mode), t.return = e, e.child = t;
    }
    function uu(e, t) {
      return e = St(22, e, null, t), e.lanes = 0, e;
    }
    function wo(e, t, l) {
      return on(t, e.child, null, l), e = xo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function ld(e, t, l) {
      e.lanes |= t;
      var n = e.alternate;
      n !== null && (n.lanes |= t), Hc(e.return, t, l);
    }
    function To(e, t, l, n, a, i) {
      var o = e.memoizedState;
      o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: l,
        tailMode: a,
        treeForkCount: i
      } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = n, o.tail = l, o.tailMode = a, o.treeForkCount = i);
    }
    function nd(e, t, l) {
      var n = t.pendingProps, a = n.revealOrder, i = n.tail;
      n = n.children;
      var o = Qe.current, f = (o & 2) !== 0;
      if (f ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, I(Qe, o), ct(e, t, n, l), n = pe ? Aa : 0, !f && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ld(e, l, t);
        else if (e.tag === 19) ld(e, l, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      switch (a) {
        case "forwards":
          for (l = t.child, a = null; l !== null; ) e = l.alternate, e !== null && Ji(e) === null && (a = l), l = l.sibling;
          l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), To(t, false, a, l, i, n);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (l = null, a = t.child, t.child = null; a !== null; ) {
            if (e = a.alternate, e !== null && Ji(e) === null) {
              t.child = a;
              break;
            }
            e = a.sibling, a.sibling = l, l = a, a = e;
          }
          To(t, true, l, null, i, n);
          break;
        case "together":
          To(t, false, null, null, void 0, n);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function ol(e, t, l) {
      if (e !== null && (t.dependencies = e.dependencies), jl |= t.lanes, (l & t.childLanes) === 0) if (e !== null) {
        if (Hn(e, t, l, false), (l & t.childLanes) === 0) return null;
      } else return null;
      if (e !== null && t.child !== e.child) throw Error(c(153));
      if (t.child !== null) {
        for (e = t.child, l = ll(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; ) e = e.sibling, l = l.sibling = ll(e, e.pendingProps), l.return = t;
        l.sibling = null;
      }
      return t.child;
    }
    function Ao(e, t) {
      return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && Gi(e)));
    }
    function ry(e, t, l) {
      switch (t.tag) {
        case 3:
          Ke(t, t.stateNode.containerInfo), zl(t, ke, e.memoizedState.cache), tn();
          break;
        case 27:
        case 5:
          ge(t);
          break;
        case 4:
          Ke(t, t.stateNode.containerInfo);
          break;
        case 10:
          zl(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return t.flags |= 128, $c(t), null;
          break;
        case 13:
          var n = t.memoizedState;
          if (n !== null) return n.dehydrated !== null ? (Dl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? td(e, t, l) : (Dl(t), e = ol(e, t, l), e !== null ? e.sibling : null);
          Dl(t);
          break;
        case 19:
          var a = (e.flags & 128) !== 0;
          if (n = (l & t.childLanes) !== 0, n || (Hn(e, t, l, false), n = (l & t.childLanes) !== 0), a) {
            if (n) return nd(e, t, l);
            t.flags |= 128;
          }
          if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), I(Qe, Qe.current), n) break;
          return null;
        case 22:
          return t.lanes = 0, $f(e, t, l, t.pendingProps);
        case 24:
          zl(t, ke, e.memoizedState.cache);
      }
      return ol(e, t, l);
    }
    function ad(e, t, l) {
      if (e !== null) if (e.memoizedProps !== t.pendingProps) $e = true;
      else {
        if (!Ao(e, l) && (t.flags & 128) === 0) return $e = false, ry(e, t, l);
        $e = (e.flags & 131072) !== 0;
      }
      else $e = false, pe && (t.flags & 1048576) !== 0 && jr(t, Aa, t.index);
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: {
            var n = t.pendingProps;
            if (e = un(t.elementType), t.type = e, typeof e == "function") Oc(e) ? (n = rn(e, n), t.tag = 1, t = Pf(null, t, e, n, l)) : (t.tag = 0, t = go(null, t, e, n, l));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === ce) {
                  t.tag = 11, t = Kf(null, t, e, n, l);
                  break e;
                } else if (a === k) {
                  t.tag = 14, t = kf(null, t, e, n, l);
                  break e;
                }
              }
              throw t = re(e) || e, Error(c(306, t, ""));
            }
          }
          return t;
        case 0:
          return go(e, t, t.type, t.pendingProps, l);
        case 1:
          return n = t.type, a = rn(n, t.pendingProps), Pf(e, t, n, a, l);
        case 3:
          e: {
            if (Ke(t, t.stateNode.containerInfo), e === null) throw Error(c(387));
            n = t.pendingProps;
            var i = t.memoizedState;
            a = i.element, Vc(e, t), Ra(t, n, null, l);
            var o = t.memoizedState;
            if (n = o.cache, zl(t, ke, n), n !== i.cache && Lc(t, [
              ke
            ], l, true), Ca(), n = o.element, i.isDehydrated) if (i = {
              element: n,
              isDehydrated: false,
              cache: o.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = ed(e, t, n, l);
              break e;
            } else if (n !== a) {
              a = Dt(Error(c(424)), t), Ea(a), t = ed(e, t, n, l);
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Be = Ut(e.firstChild), it = t, pe = true, Al = null, Bt = true, l = Jr(t, null, n, l), t.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
            else {
              if (tn(), n === a) {
                t = ol(e, t, l);
                break e;
              }
              ct(e, t, n, l);
            }
            t = t.child;
          }
          return t;
        case 26:
          return iu(e, t), e === null ? (l = yh(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : pe || (l = t.type, e = t.pendingProps, n = xu(qe.current).createElement(l), n[at] = t, n[ft] = e, ot(n, l, e), Pe(n), t.stateNode = n) : t.memoizedState = yh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
        case 27:
          return ge(t), e === null && pe && (n = t.stateNode = dh(t.type, t.pendingProps, qe.current), it = t, Bt = true, a = Be, Gl(t.type) ? (as = a, Be = Ut(n.firstChild)) : Be = a), ct(e, t, t.pendingProps.children, l), iu(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && pe && ((a = n = Be) && (n = Gy(n, t.type, t.pendingProps, Bt), n !== null ? (t.stateNode = n, it = t, Be = Ut(n.firstChild), Bt = false, a = true) : a = false), a || El(t)), ge(t), a = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, n = i.children, Po(a, i) ? n = null : o !== null && Po(a, o) && (t.flags |= 32), t.memoizedState !== null && (a = Wc(e, t, ty, null, null, l), Pa._currentValue = a), iu(e, t), ct(e, t, n, l), t.child;
        case 6:
          return e === null && pe && ((e = l = Be) && (l = Yy(l, t.pendingProps, Bt), l !== null ? (t.stateNode = l, it = t, Be = null, e = true) : e = false), e || El(t)), null;
        case 13:
          return td(e, t, l);
        case 4:
          return Ke(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = on(t, null, n, l) : ct(e, t, n, l), t.child;
        case 11:
          return Kf(e, t, t.type, t.pendingProps, l);
        case 7:
          return ct(e, t, t.pendingProps, l), t.child;
        case 8:
          return ct(e, t, t.pendingProps.children, l), t.child;
        case 12:
          return ct(e, t, t.pendingProps.children, l), t.child;
        case 10:
          return n = t.pendingProps, zl(t, t.type, n.value), ct(e, t, n.children, l), t.child;
        case 9:
          return a = t.type._context, n = t.pendingProps.children, nn(t), a = ut(a), n = n(a), t.flags |= 1, ct(e, t, n, l), t.child;
        case 14:
          return kf(e, t, t.type, t.pendingProps, l);
        case 15:
          return Jf(e, t, t.type, t.pendingProps, l);
        case 19:
          return nd(e, t, l);
        case 31:
          return sy(e, t, l);
        case 22:
          return $f(e, t, l, t.pendingProps);
        case 24:
          return nn(t), n = ut(ke), e === null ? (a = Yc(), a === null && (a = Oe, i = qc(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = {
            parent: n,
            cache: a
          }, Qc(t), zl(t, ke, a)) : ((e.lanes & l) !== 0 && (Vc(e, t), Ra(t, null, null, l), Ca()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = {
            parent: n,
            cache: n
          }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), zl(t, ke, n)) : (n = i.cache, zl(t, ke, n), n !== a.cache && Lc(t, [
            ke
          ], l, true))), ct(e, t, t.pendingProps.children, l), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(c(156, t.tag));
    }
    function sl(e) {
      e.flags |= 4;
    }
    function Eo(e, t, l, n, a) {
      if ((t = (e.mode & 32) !== 0) && (t = false), t) {
        if (e.flags |= 16777216, (a & 335544128) === a) if (e.stateNode.complete) e.flags |= 8192;
        else if (Dd()) e.flags |= 8192;
        else throw cn = Vi, Xc;
      } else e.flags &= -16777217;
    }
    function id(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
      else if (e.flags |= 16777216, !_h(t)) if (Dd()) e.flags |= 8192;
      else throw cn = Vi, Xc;
    }
    function cu(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Hs() : 536870912, e.lanes |= t, $n |= t);
    }
    function qa(e, t) {
      if (!pe) switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; ) t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var n = null; l !== null; ) l.alternate !== null && (n = l), l = l.sibling;
          n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
      }
    }
    function je(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, l = 0, n = 0;
      if (t) for (var a = e.child; a !== null; ) l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = e, a = a.sibling;
      else for (a = e.child; a !== null; ) l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
      return e.subtreeFlags |= n, e.childLanes = l, t;
    }
    function fy(e, t, l) {
      var n = t.pendingProps;
      switch (Rc(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return je(t), null;
        case 1:
          return je(t), null;
        case 3:
          return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), il(ke), De(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Un(t) ? sl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, jc())), je(t), null;
        case 26:
          var a = t.type, i = t.memoizedState;
          return e === null ? (sl(t), i !== null ? (je(t), id(t, i)) : (je(t), Eo(t, a, null, n, l))) : i ? i !== e.memoizedState ? (sl(t), je(t), id(t, i)) : (je(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && sl(t), je(t), Eo(t, a, e, n, l)), null;
        case 27:
          if (Te(t), l = qe.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== n && sl(t);
          else {
            if (!n) {
              if (t.stateNode === null) throw Error(c(166));
              return je(t), null;
            }
            e = ne.current, Un(t) ? Hr(t) : (e = dh(a, n, l), t.stateNode = e, sl(t));
          }
          return je(t), null;
        case 5:
          if (Te(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== n && sl(t);
          else {
            if (!n) {
              if (t.stateNode === null) throw Error(c(166));
              return je(t), null;
            }
            if (i = ne.current, Un(t)) Hr(t);
            else {
              var o = xu(qe.current);
              switch (i) {
                case 1:
                  i = o.createElementNS("http://www.w3.org/2000/svg", a);
                  break;
                case 2:
                  i = o.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                  break;
                default:
                  switch (a) {
                    case "svg":
                      i = o.createElementNS("http://www.w3.org/2000/svg", a);
                      break;
                    case "math":
                      i = o.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                      break;
                    case "script":
                      i = o.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(i.firstChild);
                      break;
                    case "select":
                      i = typeof n.is == "string" ? o.createElement("select", {
                        is: n.is
                      }) : o.createElement("select"), n.multiple ? i.multiple = true : n.size && (i.size = n.size);
                      break;
                    default:
                      i = typeof n.is == "string" ? o.createElement(a, {
                        is: n.is
                      }) : o.createElement(a);
                  }
              }
              i[at] = t, i[ft] = n;
              e: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6) i.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  o.child.return = o, o = o.child;
                  continue;
                }
                if (o === t) break e;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t) break e;
                  o = o.return;
                }
                o.sibling.return = o.return, o = o.sibling;
              }
              t.stateNode = i;
              e: switch (ot(i, a, n), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  n = !!n.autoFocus;
                  break e;
                case "img":
                  n = true;
                  break e;
                default:
                  n = false;
              }
              n && sl(t);
            }
          }
          return je(t), Eo(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l), null;
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== n && sl(t);
          else {
            if (typeof n != "string" && t.stateNode === null) throw Error(c(166));
            if (e = qe.current, Un(t)) {
              if (e = t.stateNode, l = t.memoizedProps, n = null, a = it, a !== null) switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
              e[at] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === true || th(e.nodeValue, l)), e || El(t, true);
            } else e = xu(e).createTextNode(n), e[at] = t, t.stateNode = e;
          }
          return je(t), null;
        case 31:
          if (l = t.memoizedState, e === null || e.memoizedState !== null) {
            if (n = Un(t), l !== null) {
              if (e === null) {
                if (!n) throw Error(c(318));
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
                e[at] = t;
              } else tn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              je(t), e = false;
            } else l = jc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = true;
            if (!e) return t.flags & 256 ? (wt(t), t) : (wt(t), null);
            if ((t.flags & 128) !== 0) throw Error(c(558));
          }
          return je(t), null;
        case 13:
          if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (a = Un(t), n !== null && n.dehydrated !== null) {
              if (e === null) {
                if (!a) throw Error(c(318));
                if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(c(317));
                a[at] = t;
              } else tn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              je(t), a = false;
            } else a = jc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = true;
            if (!a) return t.flags & 256 ? (wt(t), t) : (wt(t), null);
          }
          return wt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = n !== null, e = e !== null && e.memoizedState !== null, l && (n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), cu(t, t.updateQueue), je(t), null);
        case 4:
          return De(), e === null && Jo(t.stateNode.containerInfo), je(t), null;
        case 10:
          return il(t.type), je(t), null;
        case 19:
          if (ee(Qe), n = t.memoizedState, n === null) return je(t), null;
          if (a = (t.flags & 128) !== 0, i = n.rendering, i === null) if (a) qa(n, false);
          else {
            if (Xe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
              if (i = Ji(e), i !== null) {
                for (t.flags |= 128, qa(n, false), e = i.updateQueue, t.updateQueue = e, cu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; ) Cr(l, e), l = l.sibling;
                return I(Qe, Qe.current & 1 | 2), pe && nl(t, n.treeForkCount), t.child;
              }
              e = e.sibling;
            }
            n.tail !== null && Me() > du && (t.flags |= 128, a = true, qa(n, false), t.lanes = 4194304);
          }
          else {
            if (!a) if (e = Ji(i), e !== null) {
              if (t.flags |= 128, a = true, e = e.updateQueue, t.updateQueue = e, cu(t, e), qa(n, true), n.tail === null && n.tailMode === "hidden" && !i.alternate && !pe) return je(t), null;
            } else 2 * Me() - n.renderingStartTime > du && l !== 536870912 && (t.flags |= 128, a = true, qa(n, false), t.lanes = 4194304);
            n.isBackwards ? (i.sibling = t.child, t.child = i) : (e = n.last, e !== null ? e.sibling = i : t.child = i, n.last = i);
          }
          return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = Me(), e.sibling = null, l = Qe.current, I(Qe, a ? l & 1 | 2 : l & 1), pe && nl(t, n.treeForkCount), e) : (je(t), null);
        case 22:
        case 23:
          return wt(t), Jc(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), l = t.updateQueue, l !== null && cu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && ee(an), null;
        case 24:
          return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), il(ke), je(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(c(156, t.tag));
    }
    function dy(e, t) {
      switch (Rc(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
          return il(ke), De(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return Te(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (wt(t), t.alternate === null) throw Error(c(340));
            tn();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 13:
          if (wt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null) throw Error(c(340));
            tn();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
          return ee(Qe), null;
        case 4:
          return De(), null;
        case 10:
          return il(t.type), null;
        case 22:
        case 23:
          return wt(t), Jc(), e !== null && ee(an), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 24:
          return il(ke), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function ud(e, t) {
      switch (Rc(t), t.tag) {
        case 3:
          il(ke), De();
          break;
        case 26:
        case 27:
        case 5:
          Te(t);
          break;
        case 4:
          De();
          break;
        case 31:
          t.memoizedState !== null && wt(t);
          break;
        case 13:
          wt(t);
          break;
        case 19:
          ee(Qe);
          break;
        case 10:
          il(t.type);
          break;
        case 22:
        case 23:
          wt(t), Jc(), e !== null && ee(an);
          break;
        case 24:
          il(ke);
      }
    }
    function Ga(e, t) {
      try {
        var l = t.updateQueue, n = l !== null ? l.lastEffect : null;
        if (n !== null) {
          var a = n.next;
          l = a;
          do {
            if ((l.tag & e) === e) {
              n = void 0;
              var i = l.create, o = l.inst;
              n = i(), o.destroy = n;
            }
            l = l.next;
          } while (l !== a);
        }
      } catch (f) {
        we(t, t.return, f);
      }
    }
    function Rl(e, t, l) {
      try {
        var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
        if (a !== null) {
          var i = a.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              var o = n.inst, f = o.destroy;
              if (f !== void 0) {
                o.destroy = void 0, a = t;
                var y = l, z = f;
                try {
                  z();
                } catch (R) {
                  we(a, y, R);
                }
              }
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (R) {
        we(t, t.return, R);
      }
    }
    function cd(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var l = e.stateNode;
        try {
          Fr(t, l);
        } catch (n) {
          we(e, e.return, n);
        }
      }
    }
    function od(e, t, l) {
      l.props = rn(e.type, e.memoizedProps), l.state = e.memoizedState;
      try {
        l.componentWillUnmount();
      } catch (n) {
        we(e, t, n);
      }
    }
    function Ya(e, t) {
      try {
        var l = e.ref;
        if (l !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var n = e.stateNode;
              break;
            case 30:
              n = e.stateNode;
              break;
            default:
              n = e.stateNode;
          }
          typeof l == "function" ? e.refCleanup = l(n) : l.current = n;
        }
      } catch (a) {
        we(e, t, a);
      }
    }
    function $t(e, t) {
      var l = e.ref, n = e.refCleanup;
      if (l !== null) if (typeof n == "function") try {
        n();
      } catch (a) {
        we(e, t, a);
      } finally {
        e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
      }
      else if (typeof l == "function") try {
        l(null);
      } catch (a) {
        we(e, t, a);
      }
      else l.current = null;
    }
    function sd(e) {
      var t = e.type, l = e.memoizedProps, n = e.stateNode;
      try {
        e: switch (t) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            l.autoFocus && n.focus();
            break e;
          case "img":
            l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet);
        }
      } catch (a) {
        we(e, e.return, a);
      }
    }
    function zo(e, t, l) {
      try {
        var n = e.stateNode;
        By(n, e.type, l, t), n[ft] = t;
      } catch (a) {
        we(e, e.return, a);
      }
    }
    function rd(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Gl(e.type) || e.tag === 4;
    }
    function Mo(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || rd(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Gl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Oo(e, t, l) {
      var n = e.tag;
      if (n === 5 || n === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = el));
      else if (n !== 4 && (n === 27 && Gl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for (Oo(e, t, l), e = e.sibling; e !== null; ) Oo(e, t, l), e = e.sibling;
    }
    function ou(e, t, l) {
      var n = e.tag;
      if (n === 5 || n === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
      else if (n !== 4 && (n === 27 && Gl(e.type) && (l = e.stateNode), e = e.child, e !== null)) for (ou(e, t, l), e = e.sibling; e !== null; ) ou(e, t, l), e = e.sibling;
    }
    function fd(e) {
      var t = e.stateNode, l = e.memoizedProps;
      try {
        for (var n = e.type, a = t.attributes; a.length; ) t.removeAttributeNode(a[0]);
        ot(t, n, l), t[at] = e, t[ft] = l;
      } catch (i) {
        we(e, e.return, i);
      }
    }
    var rl = false, Fe = false, No = false, dd = typeof WeakSet == "function" ? WeakSet : Set, et = null;
    function hy(e, t) {
      if (e = e.containerInfo, Wo = Ou, e = wr(e), xc(e)) {
        if ("selectionStart" in e) var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
        else e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var a = n.anchorOffset, i = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break e;
            }
            var o = 0, f = -1, y = -1, z = 0, R = 0, j = e, M = null;
            t: for (; ; ) {
              for (var N; j !== l || a !== 0 && j.nodeType !== 3 || (f = o + a), j !== i || n !== 0 && j.nodeType !== 3 || (y = o + n), j.nodeType === 3 && (o += j.nodeValue.length), (N = j.firstChild) !== null; ) M = j, j = N;
              for (; ; ) {
                if (j === e) break t;
                if (M === l && ++z === a && (f = o), M === i && ++R === n && (y = o), (N = j.nextSibling) !== null) break;
                j = M, M = j.parentNode;
              }
              j = N;
            }
            l = f === -1 || y === -1 ? null : {
              start: f,
              end: y
            };
          } else l = null;
        }
        l = l || {
          start: 0,
          end: 0
        };
      } else l = null;
      for (Io = {
        focusedElem: e,
        selectionRange: l
      }, Ou = false, et = t; et !== null; ) if (t = et, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, et = e;
      else for (; et !== null; ) {
        switch (t = et, i = t.alternate, e = t.flags, t.tag) {
          case 0:
            if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null)) for (l = 0; l < e.length; l++) a = e[l], a.ref.impl = a.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((e & 1024) !== 0 && i !== null) {
              e = void 0, l = t, a = i.memoizedProps, i = i.memoizedState, n = l.stateNode;
              try {
                var Z = rn(l.type, a);
                e = n.getSnapshotBeforeUpdate(Z, i), n.__reactInternalSnapshotBeforeUpdate = e;
              } catch (P) {
                we(l, l.return, P);
              }
            }
            break;
          case 3:
            if ((e & 1024) !== 0) {
              if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) ts(e);
              else if (l === 1) switch (e.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  ts(e);
                  break;
                default:
                  e.textContent = "";
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if ((e & 1024) !== 0) throw Error(c(163));
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, et = e;
          break;
        }
        et = t.return;
      }
    }
    function hd(e, t, l) {
      var n = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          dl(e, l), n & 4 && Ga(5, l);
          break;
        case 1:
          if (dl(e, l), n & 4) if (e = l.stateNode, t === null) try {
            e.componentDidMount();
          } catch (o) {
            we(l, l.return, o);
          }
          else {
            var a = rn(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (o) {
              we(l, l.return, o);
            }
          }
          n & 64 && cd(l), n & 512 && Ya(l, l.return);
          break;
        case 3:
          if (dl(e, l), n & 64 && (e = l.updateQueue, e !== null)) {
            if (t = null, l.child !== null) switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
            try {
              Fr(e, t);
            } catch (o) {
              we(l, l.return, o);
            }
          }
          break;
        case 27:
          t === null && n & 4 && fd(l);
        case 26:
        case 5:
          dl(e, l), t === null && n & 4 && sd(l), n & 512 && Ya(l, l.return);
          break;
        case 12:
          dl(e, l);
          break;
        case 31:
          dl(e, l), n & 4 && pd(e, l);
          break;
        case 13:
          dl(e, l), n & 4 && bd(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = xy.bind(null, l), Xy(e, l))));
          break;
        case 22:
          if (n = l.memoizedState !== null || rl, !n) {
            t = t !== null && t.memoizedState !== null || Fe, a = rl;
            var i = Fe;
            rl = n, (Fe = t) && !i ? hl(e, l, (l.subtreeFlags & 8772) !== 0) : dl(e, l), rl = a, Fe = i;
          }
          break;
        case 30:
          break;
        default:
          dl(e, l);
      }
    }
    function md(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, md(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ic(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    var Ue = null, ht = false;
    function fl(e, t, l) {
      for (l = l.child; l !== null; ) yd(e, t, l), l = l.sibling;
    }
    function yd(e, t, l) {
      if (gt && typeof gt.onCommitFiberUnmount == "function") try {
        gt.onCommitFiberUnmount(fa, l);
      } catch {
      }
      switch (l.tag) {
        case 26:
          Fe || $t(l, t), fl(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
          break;
        case 27:
          Fe || $t(l, t);
          var n = Ue, a = ht;
          Gl(l.type) && (Ue = l.stateNode, ht = false), fl(e, t, l), Fa(l.stateNode), Ue = n, ht = a;
          break;
        case 5:
          Fe || $t(l, t);
        case 6:
          if (n = Ue, a = ht, Ue = null, fl(e, t, l), Ue = n, ht = a, Ue !== null) if (ht) try {
            (Ue.nodeType === 9 ? Ue.body : Ue.nodeName === "HTML" ? Ue.ownerDocument.body : Ue).removeChild(l.stateNode);
          } catch (i) {
            we(l, t, i);
          }
          else try {
            Ue.removeChild(l.stateNode);
          } catch (i) {
            we(l, t, i);
          }
          break;
        case 18:
          Ue !== null && (ht ? (e = Ue, ch(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), na(e)) : ch(Ue, l.stateNode));
          break;
        case 4:
          n = Ue, a = ht, Ue = l.stateNode.containerInfo, ht = true, fl(e, t, l), Ue = n, ht = a;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Rl(2, l, t), Fe || Rl(4, l, t), fl(e, t, l);
          break;
        case 1:
          Fe || ($t(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && od(l, t, n)), fl(e, t, l);
          break;
        case 21:
          fl(e, t, l);
          break;
        case 22:
          Fe = (n = Fe) || l.memoizedState !== null, fl(e, t, l), Fe = n;
          break;
        default:
          fl(e, t, l);
      }
    }
    function pd(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          na(e);
        } catch (l) {
          we(t, t.return, l);
        }
      }
    }
    function bd(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
        na(e);
      } catch (l) {
        we(t, t.return, l);
      }
    }
    function my(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new dd()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new dd()), t;
        default:
          throw Error(c(435, e.tag));
      }
    }
    function su(e, t) {
      var l = my(e);
      t.forEach(function(n) {
        if (!l.has(n)) {
          l.add(n);
          var a = wy.bind(null, e, n);
          n.then(a, a);
        }
      });
    }
    function mt(e, t) {
      var l = t.deletions;
      if (l !== null) for (var n = 0; n < l.length; n++) {
        var a = l[n], i = e, o = t, f = o;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Gl(f.type)) {
                Ue = f.stateNode, ht = false;
                break e;
              }
              break;
            case 5:
              Ue = f.stateNode, ht = false;
              break e;
            case 3:
            case 4:
              Ue = f.stateNode.containerInfo, ht = true;
              break e;
          }
          f = f.return;
        }
        if (Ue === null) throw Error(c(160));
        yd(i, o, a), Ue = null, ht = false, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) gd(t, e), t = t.sibling;
    }
    var Xt = null;
    function gd(e, t) {
      var l = e.alternate, n = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          mt(t, e), yt(e), n & 4 && (Rl(3, e, e.return), Ga(3, e), Rl(5, e, e.return));
          break;
        case 1:
          mt(t, e), yt(e), n & 512 && (Fe || l === null || $t(l, l.return)), n & 64 && rl && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
          break;
        case 26:
          var a = Xt;
          if (mt(t, e), yt(e), n & 512 && (Fe || l === null || $t(l, l.return)), n & 4) {
            var i = l !== null ? l.memoizedState : null;
            if (n = e.memoizedState, l === null) if (n === null) if (e.stateNode === null) {
              e: {
                n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                t: switch (n) {
                  case "title":
                    i = a.getElementsByTagName("title")[0], (!i || i[ma] || i[at] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(i, a.querySelector("head > title"))), ot(i, n, l), i[at] = e, Pe(i), n = i;
                    break e;
                  case "link":
                    var o = gh("link", "href", a).get(n + (l.href || ""));
                    if (o) {
                      for (var f = 0; f < o.length; f++) if (i = o[f], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                        o.splice(f, 1);
                        break t;
                      }
                    }
                    i = a.createElement(n), ot(i, n, l), a.head.appendChild(i);
                    break;
                  case "meta":
                    if (o = gh("meta", "content", a).get(n + (l.content || ""))) {
                      for (f = 0; f < o.length; f++) if (i = o[f], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                        o.splice(f, 1);
                        break t;
                      }
                    }
                    i = a.createElement(n), ot(i, n, l), a.head.appendChild(i);
                    break;
                  default:
                    throw Error(c(468, n));
                }
                i[at] = e, Pe(i), n = i;
              }
              e.stateNode = n;
            } else vh(a, e.type, e.stateNode);
            else e.stateNode = bh(a, n, e.memoizedProps);
            else i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? vh(a, e.type, e.stateNode) : bh(a, n, e.memoizedProps)) : n === null && e.stateNode !== null && zo(e, e.memoizedProps, l.memoizedProps);
          }
          break;
        case 27:
          mt(t, e), yt(e), n & 512 && (Fe || l === null || $t(l, l.return)), l !== null && n & 4 && zo(e, e.memoizedProps, l.memoizedProps);
          break;
        case 5:
          if (mt(t, e), yt(e), n & 512 && (Fe || l === null || $t(l, l.return)), e.flags & 32) {
            a = e.stateNode;
            try {
              En(a, "");
            } catch (Z) {
              we(e, e.return, Z);
            }
          }
          n & 4 && e.stateNode != null && (a = e.memoizedProps, zo(e, a, l !== null ? l.memoizedProps : a)), n & 1024 && (No = true);
          break;
        case 6:
          if (mt(t, e), yt(e), n & 4) {
            if (e.stateNode === null) throw Error(c(162));
            n = e.memoizedProps, l = e.stateNode;
            try {
              l.nodeValue = n;
            } catch (Z) {
              we(e, e.return, Z);
            }
          }
          break;
        case 3:
          if (Au = null, a = Xt, Xt = wu(t.containerInfo), mt(t, e), Xt = a, yt(e), n & 4 && l !== null && l.memoizedState.isDehydrated) try {
            na(t.containerInfo);
          } catch (Z) {
            we(e, e.return, Z);
          }
          No && (No = false, vd(e));
          break;
        case 4:
          n = Xt, Xt = wu(e.stateNode.containerInfo), mt(t, e), yt(e), Xt = n;
          break;
        case 12:
          mt(t, e), yt(e);
          break;
        case 31:
          mt(t, e), yt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, su(e, n)));
          break;
        case 13:
          mt(t, e), yt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (fu = Me()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, su(e, n)));
          break;
        case 22:
          a = e.memoizedState !== null;
          var y = l !== null && l.memoizedState !== null, z = rl, R = Fe;
          if (rl = z || a, Fe = R || y, mt(t, e), Fe = R, rl = z, yt(e), n & 8192) e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || y || rl || Fe || fn(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                y = l = t;
                try {
                  if (i = y.stateNode, a) o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none";
                  else {
                    f = y.stateNode;
                    var j = y.memoizedProps.style, M = j != null && j.hasOwnProperty("display") ? j.display : null;
                    f.style.display = M == null || typeof M == "boolean" ? "" : ("" + M).trim();
                  }
                } catch (Z) {
                  we(y, y.return, Z);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                y = t;
                try {
                  y.stateNode.nodeValue = a ? "" : y.memoizedProps;
                } catch (Z) {
                  we(y, y.return, Z);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                y = t;
                try {
                  var N = y.stateNode;
                  a ? oh(N, true) : oh(y.stateNode, false);
                } catch (Z) {
                  we(y, y.return, Z);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), t = t.return;
            }
            l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
          }
          n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, su(e, l))));
          break;
        case 19:
          mt(t, e), yt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, su(e, n)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          mt(t, e), yt(e);
      }
    }
    function yt(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var l, n = e.return; n !== null; ) {
            if (rd(n)) {
              l = n;
              break;
            }
            n = n.return;
          }
          if (l == null) throw Error(c(160));
          switch (l.tag) {
            case 27:
              var a = l.stateNode, i = Mo(e);
              ou(e, i, a);
              break;
            case 5:
              var o = l.stateNode;
              l.flags & 32 && (En(o, ""), l.flags &= -33);
              var f = Mo(e);
              ou(e, f, o);
              break;
            case 3:
            case 4:
              var y = l.stateNode.containerInfo, z = Mo(e);
              Oo(e, z, y);
              break;
            default:
              throw Error(c(161));
          }
        } catch (R) {
          we(e, e.return, R);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function vd(e) {
      if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
        var t = e;
        vd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
    }
    function dl(e, t) {
      if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) hd(e, t.alternate, t), t = t.sibling;
    }
    function fn(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Rl(4, t, t.return), fn(t);
            break;
          case 1:
            $t(t, t.return);
            var l = t.stateNode;
            typeof l.componentWillUnmount == "function" && od(t, t.return, l), fn(t);
            break;
          case 27:
            Fa(t.stateNode);
          case 26:
          case 5:
            $t(t, t.return), fn(t);
            break;
          case 22:
            t.memoizedState === null && fn(t);
            break;
          case 30:
            fn(t);
            break;
          default:
            fn(t);
        }
        e = e.sibling;
      }
    }
    function hl(e, t, l) {
      for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
        var n = t.alternate, a = e, i = t, o = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            hl(a, i, l), Ga(4, i);
            break;
          case 1:
            if (hl(a, i, l), n = i, a = n.stateNode, typeof a.componentDidMount == "function") try {
              a.componentDidMount();
            } catch (z) {
              we(n, n.return, z);
            }
            if (n = i, a = n.updateQueue, a !== null) {
              var f = n.stateNode;
              try {
                var y = a.shared.hiddenCallbacks;
                if (y !== null) for (a.shared.hiddenCallbacks = null, a = 0; a < y.length; a++) $r(y[a], f);
              } catch (z) {
                we(n, n.return, z);
              }
            }
            l && o & 64 && cd(i), Ya(i, i.return);
            break;
          case 27:
            fd(i);
          case 26:
          case 5:
            hl(a, i, l), l && n === null && o & 4 && sd(i), Ya(i, i.return);
            break;
          case 12:
            hl(a, i, l);
            break;
          case 31:
            hl(a, i, l), l && o & 4 && pd(a, i);
            break;
          case 13:
            hl(a, i, l), l && o & 4 && bd(a, i);
            break;
          case 22:
            i.memoizedState === null && hl(a, i, l), Ya(i, i.return);
            break;
          case 30:
            break;
          default:
            hl(a, i, l);
        }
        t = t.sibling;
      }
    }
    function Do(e, t) {
      var l = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && za(l));
    }
    function Co(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && za(e));
    }
    function Qt(e, t, l, n) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) _d(e, t, l, n), t = t.sibling;
    }
    function _d(e, t, l, n) {
      var a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Qt(e, t, l, n), a & 2048 && Ga(9, t);
          break;
        case 1:
          Qt(e, t, l, n);
          break;
        case 3:
          Qt(e, t, l, n), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && za(e)));
          break;
        case 12:
          if (a & 2048) {
            Qt(e, t, l, n), e = t.stateNode;
            try {
              var i = t.memoizedProps, o = i.id, f = i.onPostCommit;
              typeof f == "function" && f(o, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
            } catch (y) {
              we(t, t.return, y);
            }
          } else Qt(e, t, l, n);
          break;
        case 31:
          Qt(e, t, l, n);
          break;
        case 13:
          Qt(e, t, l, n);
          break;
        case 23:
          break;
        case 22:
          i = t.stateNode, o = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Qt(e, t, l, n) : Xa(e, t) : i._visibility & 2 ? Qt(e, t, l, n) : (i._visibility |= 2, Kn(e, t, l, n, (t.subtreeFlags & 10256) !== 0 || false)), a & 2048 && Do(o, t);
          break;
        case 24:
          Qt(e, t, l, n), a & 2048 && Co(t.alternate, t);
          break;
        default:
          Qt(e, t, l, n);
      }
    }
    function Kn(e, t, l, n, a) {
      for (a = a && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
        var i = e, o = t, f = l, y = n, z = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            Kn(i, o, f, y, a), Ga(8, o);
            break;
          case 23:
            break;
          case 22:
            var R = o.stateNode;
            o.memoizedState !== null ? R._visibility & 2 ? Kn(i, o, f, y, a) : Xa(i, o) : (R._visibility |= 2, Kn(i, o, f, y, a)), a && z & 2048 && Do(o.alternate, o);
            break;
          case 24:
            Kn(i, o, f, y, a), a && z & 2048 && Co(o.alternate, o);
            break;
          default:
            Kn(i, o, f, y, a);
        }
        t = t.sibling;
      }
    }
    function Xa(e, t) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
        var l = e, n = t, a = n.flags;
        switch (n.tag) {
          case 22:
            Xa(l, n), a & 2048 && Do(n.alternate, n);
            break;
          case 24:
            Xa(l, n), a & 2048 && Co(n.alternate, n);
            break;
          default:
            Xa(l, n);
        }
        t = t.sibling;
      }
    }
    var Qa = 8192;
    function kn(e, t, l) {
      if (e.subtreeFlags & Qa) for (e = e.child; e !== null; ) Sd(e, t, l), e = e.sibling;
    }
    function Sd(e, t, l) {
      switch (e.tag) {
        case 26:
          kn(e, t, l), e.flags & Qa && e.memoizedState !== null && ep(l, Xt, e.memoizedState, e.memoizedProps);
          break;
        case 5:
          kn(e, t, l);
          break;
        case 3:
        case 4:
          var n = Xt;
          Xt = wu(e.stateNode.containerInfo), kn(e, t, l), Xt = n;
          break;
        case 22:
          e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Qa, Qa = 16777216, kn(e, t, l), Qa = n) : kn(e, t, l));
          break;
        default:
          kn(e, t, l);
      }
    }
    function xd(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function Va(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null) for (var l = 0; l < t.length; l++) {
          var n = t[l];
          et = n, Td(n, e);
        }
        xd(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) wd(e), e = e.sibling;
    }
    function wd(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Va(e), e.flags & 2048 && Rl(9, e, e.return);
          break;
        case 3:
          Va(e);
          break;
        case 12:
          Va(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, ru(e)) : Va(e);
          break;
        default:
          Va(e);
      }
    }
    function ru(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null) for (var l = 0; l < t.length; l++) {
          var n = t[l];
          et = n, Td(n, e);
        }
        xd(e);
      }
      for (e = e.child; e !== null; ) {
        switch (t = e, t.tag) {
          case 0:
          case 11:
          case 15:
            Rl(8, t, t.return), ru(t);
            break;
          case 22:
            l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, ru(t));
            break;
          default:
            ru(t);
        }
        e = e.sibling;
      }
    }
    function Td(e, t) {
      for (; et !== null; ) {
        var l = et;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            Rl(8, l, t);
            break;
          case 23:
          case 22:
            if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
              var n = l.memoizedState.cachePool.pool;
              n != null && n.refCount++;
            }
            break;
          case 24:
            za(l.memoizedState.cache);
        }
        if (n = l.child, n !== null) n.return = l, et = n;
        else e: for (l = e; et !== null; ) {
          n = et;
          var a = n.sibling, i = n.return;
          if (md(n), n === l) {
            et = null;
            break e;
          }
          if (a !== null) {
            a.return = i, et = a;
            break e;
          }
          et = i;
        }
      }
    }
    var yy = {
      getCacheForType: function(e) {
        var t = ut(ke), l = t.data.get(e);
        return l === void 0 && (l = e(), t.data.set(e, l)), l;
      },
      cacheSignal: function() {
        return ut(ke).controller.signal;
      }
    }, py = typeof WeakMap == "function" ? WeakMap : Map, Se = 0, Oe = null, fe = null, he = 0, xe = 0, Tt = null, Bl = false, Jn = false, Ro = false, ml = 0, Xe = 0, jl = 0, dn = 0, Bo = 0, At = 0, $n = 0, Za = null, pt = null, jo = false, fu = 0, Ad = 0, du = 1 / 0, hu = null, Ul = null, We = 0, Hl = null, Fn = null, yl = 0, Uo = 0, Ho = null, Ed = null, Ka = 0, Lo = null;
    function Et() {
      return (Se & 2) !== 0 && he !== 0 ? he & -he : D.T !== null ? Vo() : Ys();
    }
    function zd() {
      if (At === 0) if ((he & 536870912) === 0 || pe) {
        var e = Si;
        Si <<= 1, (Si & 3932160) === 0 && (Si = 262144), At = e;
      } else At = 536870912;
      return e = xt.current, e !== null && (e.flags |= 32), At;
    }
    function bt(e, t, l) {
      (e === Oe && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) && (Wn(e, 0), Ll(e, he, At, false)), ha(e, l), ((Se & 2) === 0 || e !== Oe) && (e === Oe && ((Se & 2) === 0 && (dn |= l), Xe === 4 && Ll(e, he, At, false)), Ft(e));
    }
    function Md(e, t, l) {
      if ((Se & 6) !== 0) throw Error(c(327));
      var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || da(e, t), a = n ? vy(e, t) : Go(e, t, true), i = n;
      do {
        if (a === 0) {
          Jn && !n && Ll(e, t, 0, false);
          break;
        } else {
          if (l = e.current.alternate, i && !by(l)) {
            a = Go(e, t, false), i = false;
            continue;
          }
          if (a === 2) {
            if (i = t, e.errorRecoveryDisabledLanes & i) var o = 0;
            else o = e.pendingLanes & -536870913, o = o !== 0 ? o : o & 536870912 ? 536870912 : 0;
            if (o !== 0) {
              t = o;
              e: {
                var f = e;
                a = Za;
                var y = f.current.memoizedState.isDehydrated;
                if (y && (Wn(f, o).flags |= 256), o = Go(f, o, false), o !== 2) {
                  if (Ro && !y) {
                    f.errorRecoveryDisabledLanes |= i, dn |= i, a = 4;
                    break e;
                  }
                  i = pt, pt = a, i !== null && (pt === null ? pt = i : pt.push.apply(pt, i));
                }
                a = o;
              }
              if (i = false, a !== 2) continue;
            }
          }
          if (a === 1) {
            Wn(e, 0), Ll(e, t, 0, true);
            break;
          }
          e: {
            switch (n = e, i = a, i) {
              case 0:
              case 1:
                throw Error(c(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                Ll(n, t, At, !Bl);
                break e;
              case 2:
                pt = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(c(329));
            }
            if ((t & 62914560) === t && (a = fu + 300 - Me(), 10 < a)) {
              if (Ll(n, t, At, !Bl), wi(n, 0, true) !== 0) break e;
              yl = t, n.timeoutHandle = ih(Od.bind(null, n, l, pt, hu, jo, t, At, dn, $n, Bl, i, "Throttled", -0, 0), a);
              break e;
            }
            Od(n, l, pt, hu, jo, t, At, dn, $n, Bl, i, null, -0, 0);
          }
        }
        break;
      } while (true);
      Ft(e);
    }
    function Od(e, t, l, n, a, i, o, f, y, z, R, j, M, N) {
      if (e.timeoutHandle = -1, j = t.subtreeFlags, j & 8192 || (j & 16785408) === 16785408) {
        j = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: el
        }, Sd(t, i, j);
        var Z = (i & 62914560) === i ? fu - Me() : (i & 4194048) === i ? Ad - Me() : 0;
        if (Z = tp(j, Z), Z !== null) {
          yl = i, e.cancelPendingCommit = Z(Hd.bind(null, e, t, i, l, n, a, o, f, y, R, j, null, M, N)), Ll(e, i, o, !z);
          return;
        }
      }
      Hd(e, t, i, l, n, a, o, f, y);
    }
    function by(e) {
      for (var t = e; ; ) {
        var l = t.tag;
        if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null))) for (var n = 0; n < l.length; n++) {
          var a = l[n], i = a.getSnapshot;
          a = a.value;
          try {
            if (!_t(i(), a)) return false;
          } catch {
            return false;
          }
        }
        if (l = t.child, t.subtreeFlags & 16384 && l !== null) l.return = t, t = l;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return true;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return true;
    }
    function Ll(e, t, l, n) {
      t &= ~Bo, t &= ~dn, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
      for (var a = t; 0 < a; ) {
        var i = 31 - vt(a), o = 1 << i;
        n[i] = -1, a &= ~o;
      }
      l !== 0 && Ls(e, l, t);
    }
    function mu() {
      return (Se & 6) === 0 ? (ka(0), false) : true;
    }
    function qo() {
      if (fe !== null) {
        if (xe === 0) var e = fe.return;
        else e = fe, al = ln = null, eo(e), Yn = null, Oa = 0, e = fe;
        for (; e !== null; ) ud(e.alternate, e), e = e.return;
        fe = null;
      }
    }
    function Wn(e, t) {
      var l = e.timeoutHandle;
      l !== -1 && (e.timeoutHandle = -1, Hy(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), yl = 0, qo(), Oe = e, fe = l = ll(e.current, null), he = t, xe = 0, Tt = null, Bl = false, Jn = da(e, t), Ro = false, $n = At = Bo = dn = jl = Xe = 0, pt = Za = null, jo = false, (t & 8) !== 0 && (t |= t & 32);
      var n = e.entangledLanes;
      if (n !== 0) for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - vt(n), i = 1 << a;
        t |= e[a], n &= ~i;
      }
      return ml = t, ji(), l;
    }
    function Nd(e, t) {
      ie = null, D.H = Ha, t === Gn || t === Qi ? (t = Zr(), xe = 3) : t === Xc ? (t = Zr(), xe = 4) : xe = t === bo ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Tt = t, fe === null && (Xe = 1, nu(e, Dt(t, e.current)));
    }
    function Dd() {
      var e = xt.current;
      return e === null ? true : (he & 4194048) === he ? jt === null : (he & 62914560) === he || (he & 536870912) !== 0 ? e === jt : false;
    }
    function Cd() {
      var e = D.H;
      return D.H = Ha, e === null ? Ha : e;
    }
    function Rd() {
      var e = D.A;
      return D.A = yy, e;
    }
    function yu() {
      Xe = 4, Bl || (he & 4194048) !== he && xt.current !== null || (Jn = true), (jl & 134217727) === 0 && (dn & 134217727) === 0 || Oe === null || Ll(Oe, he, At, false);
    }
    function Go(e, t, l) {
      var n = Se;
      Se |= 2;
      var a = Cd(), i = Rd();
      (Oe !== e || he !== t) && (hu = null, Wn(e, t)), t = false;
      var o = Xe;
      e: do
        try {
          if (xe !== 0 && fe !== null) {
            var f = fe, y = Tt;
            switch (xe) {
              case 8:
                qo(), o = 6;
                break e;
              case 3:
              case 2:
              case 9:
              case 6:
                xt.current === null && (t = true);
                var z = xe;
                if (xe = 0, Tt = null, In(e, f, y, z), l && Jn) {
                  o = 0;
                  break e;
                }
                break;
              default:
                z = xe, xe = 0, Tt = null, In(e, f, y, z);
            }
          }
          gy(), o = Xe;
          break;
        } catch (R) {
          Nd(e, R);
        }
      while (true);
      return t && e.shellSuspendCounter++, al = ln = null, Se = n, D.H = a, D.A = i, fe === null && (Oe = null, he = 0, ji()), o;
    }
    function gy() {
      for (; fe !== null; ) Bd(fe);
    }
    function vy(e, t) {
      var l = Se;
      Se |= 2;
      var n = Cd(), a = Rd();
      Oe !== e || he !== t ? (hu = null, du = Me() + 500, Wn(e, t)) : Jn = da(e, t);
      e: do
        try {
          if (xe !== 0 && fe !== null) {
            t = fe;
            var i = Tt;
            t: switch (xe) {
              case 1:
                xe = 0, Tt = null, In(e, t, i, 1);
                break;
              case 2:
              case 9:
                if (Qr(i)) {
                  xe = 0, Tt = null, jd(t);
                  break;
                }
                t = function() {
                  xe !== 2 && xe !== 9 || Oe !== e || (xe = 7), Ft(e);
                }, i.then(t, t);
                break e;
              case 3:
                xe = 7;
                break e;
              case 4:
                xe = 5;
                break e;
              case 7:
                Qr(i) ? (xe = 0, Tt = null, jd(t)) : (xe = 0, Tt = null, In(e, t, i, 7));
                break;
              case 5:
                var o = null;
                switch (fe.tag) {
                  case 26:
                    o = fe.memoizedState;
                  case 5:
                  case 27:
                    var f = fe;
                    if (o ? _h(o) : f.stateNode.complete) {
                      xe = 0, Tt = null;
                      var y = f.sibling;
                      if (y !== null) fe = y;
                      else {
                        var z = f.return;
                        z !== null ? (fe = z, pu(z)) : fe = null;
                      }
                      break t;
                    }
                }
                xe = 0, Tt = null, In(e, t, i, 5);
                break;
              case 6:
                xe = 0, Tt = null, In(e, t, i, 6);
                break;
              case 8:
                qo(), Xe = 6;
                break e;
              default:
                throw Error(c(462));
            }
          }
          _y();
          break;
        } catch (R) {
          Nd(e, R);
        }
      while (true);
      return al = ln = null, D.H = n, D.A = a, Se = l, fe !== null ? 0 : (Oe = null, he = 0, ji(), Xe);
    }
    function _y() {
      for (; fe !== null && !gn(); ) Bd(fe);
    }
    function Bd(e) {
      var t = ad(e.alternate, e, ml);
      e.memoizedProps = e.pendingProps, t === null ? pu(e) : fe = t;
    }
    function jd(e) {
      var t = e, l = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = If(l, t, t.pendingProps, t.type, void 0, he);
          break;
        case 11:
          t = If(l, t, t.pendingProps, t.type.render, t.ref, he);
          break;
        case 5:
          eo(t);
        default:
          ud(l, t), t = fe = Cr(t, ml), t = ad(l, t, ml);
      }
      e.memoizedProps = e.pendingProps, t === null ? pu(e) : fe = t;
    }
    function In(e, t, l, n) {
      al = ln = null, eo(t), Yn = null, Oa = 0;
      var a = t.return;
      try {
        if (oy(e, a, t, l, he)) {
          Xe = 1, nu(e, Dt(l, e.current)), fe = null;
          return;
        }
      } catch (i) {
        if (a !== null) throw fe = a, i;
        Xe = 1, nu(e, Dt(l, e.current)), fe = null;
        return;
      }
      t.flags & 32768 ? (pe || n === 1 ? e = true : Jn || (he & 536870912) !== 0 ? e = false : (Bl = e = true, (n === 2 || n === 9 || n === 3 || n === 6) && (n = xt.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Ud(t, e)) : pu(t);
    }
    function pu(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Ud(t, Bl);
          return;
        }
        e = t.return;
        var l = fy(t.alternate, t, ml);
        if (l !== null) {
          fe = l;
          return;
        }
        if (t = t.sibling, t !== null) {
          fe = t;
          return;
        }
        fe = t = e;
      } while (t !== null);
      Xe === 0 && (Xe = 5);
    }
    function Ud(e, t) {
      do {
        var l = dy(e.alternate, e);
        if (l !== null) {
          l.flags &= 32767, fe = l;
          return;
        }
        if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
          fe = e;
          return;
        }
        fe = e = l;
      } while (e !== null);
      Xe = 6, fe = null;
    }
    function Hd(e, t, l, n, a, i, o, f, y) {
      e.cancelPendingCommit = null;
      do
        bu();
      while (We !== 0);
      if ((Se & 6) !== 0) throw Error(c(327));
      if (t !== null) {
        if (t === e.current) throw Error(c(177));
        if (i = t.lanes | t.childLanes, i |= zc, Pm(e, l, i, o, f, y), e === Oe && (fe = Oe = null, he = 0), Fn = t, Hl = e, yl = l, Uo = i, Ho = a, Ed = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ty(Gt, function() {
          return Xd(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
          n = D.T, D.T = null, a = Y.p, Y.p = 2, o = Se, Se |= 4;
          try {
            hy(e, t, l);
          } finally {
            Se = o, Y.p = a, D.T = n;
          }
        }
        We = 1, Ld(), qd(), Gd();
      }
    }
    function Ld() {
      if (We === 1) {
        We = 0;
        var e = Hl, t = Fn, l = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || l) {
          l = D.T, D.T = null;
          var n = Y.p;
          Y.p = 2;
          var a = Se;
          Se |= 4;
          try {
            gd(t, e);
            var i = Io, o = wr(e.containerInfo), f = i.focusedElem, y = i.selectionRange;
            if (o !== f && f && f.ownerDocument && xr(f.ownerDocument.documentElement, f)) {
              if (y !== null && xc(f)) {
                var z = y.start, R = y.end;
                if (R === void 0 && (R = z), "selectionStart" in f) f.selectionStart = z, f.selectionEnd = Math.min(R, f.value.length);
                else {
                  var j = f.ownerDocument || document, M = j && j.defaultView || window;
                  if (M.getSelection) {
                    var N = M.getSelection(), Z = f.textContent.length, P = Math.min(y.start, Z), ze = y.end === void 0 ? P : Math.min(y.end, Z);
                    !N.extend && P > ze && (o = ze, ze = P, P = o);
                    var S = Sr(f, P), _ = Sr(f, ze);
                    if (S && _ && (N.rangeCount !== 1 || N.anchorNode !== S.node || N.anchorOffset !== S.offset || N.focusNode !== _.node || N.focusOffset !== _.offset)) {
                      var E = j.createRange();
                      E.setStart(S.node, S.offset), N.removeAllRanges(), P > ze ? (N.addRange(E), N.extend(_.node, _.offset)) : (E.setEnd(_.node, _.offset), N.addRange(E));
                    }
                  }
                }
              }
              for (j = [], N = f; N = N.parentNode; ) N.nodeType === 1 && j.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
              for (typeof f.focus == "function" && f.focus(), f = 0; f < j.length; f++) {
                var B = j[f];
                B.element.scrollLeft = B.left, B.element.scrollTop = B.top;
              }
            }
            Ou = !!Wo, Io = Wo = null;
          } finally {
            Se = a, Y.p = n, D.T = l;
          }
        }
        e.current = t, We = 2;
      }
    }
    function qd() {
      if (We === 2) {
        We = 0;
        var e = Hl, t = Fn, l = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || l) {
          l = D.T, D.T = null;
          var n = Y.p;
          Y.p = 2;
          var a = Se;
          Se |= 4;
          try {
            hd(e, t.alternate, t);
          } finally {
            Se = a, Y.p = n, D.T = l;
          }
        }
        We = 3;
      }
    }
    function Gd() {
      if (We === 4 || We === 3) {
        We = 0, vn();
        var e = Hl, t = Fn, l = yl, n = Ed;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? We = 5 : (We = 0, Fn = Hl = null, Yd(e, e.pendingLanes));
        var a = e.pendingLanes;
        if (a === 0 && (Ul = null), nc(l), t = t.stateNode, gt && typeof gt.onCommitFiberRoot == "function") try {
          gt.onCommitFiberRoot(fa, t, void 0, (t.current.flags & 128) === 128);
        } catch {
        }
        if (n !== null) {
          t = D.T, a = Y.p, Y.p = 2, D.T = null;
          try {
            for (var i = e.onRecoverableError, o = 0; o < n.length; o++) {
              var f = n[o];
              i(f.value, {
                componentStack: f.stack
              });
            }
          } finally {
            D.T = t, Y.p = a;
          }
        }
        (yl & 3) !== 0 && bu(), Ft(e), a = e.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? e === Lo ? Ka++ : (Ka = 0, Lo = e) : Ka = 0, ka(0);
      }
    }
    function Yd(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, za(t)));
    }
    function bu() {
      return Ld(), qd(), Gd(), Xd();
    }
    function Xd() {
      if (We !== 5) return false;
      var e = Hl, t = Uo;
      Uo = 0;
      var l = nc(yl), n = D.T, a = Y.p;
      try {
        Y.p = 32 > l ? 32 : l, D.T = null, l = Ho, Ho = null;
        var i = Hl, o = yl;
        if (We = 0, Fn = Hl = null, yl = 0, (Se & 6) !== 0) throw Error(c(331));
        var f = Se;
        if (Se |= 4, wd(i.current), _d(i, i.current, o, l), Se = f, ka(0, false), gt && typeof gt.onPostCommitFiberRoot == "function") try {
          gt.onPostCommitFiberRoot(fa, i);
        } catch {
        }
        return true;
      } finally {
        Y.p = a, D.T = n, Yd(e, t);
      }
    }
    function Qd(e, t, l) {
      t = Dt(l, t), t = po(e.stateNode, t, 2), e = Nl(e, t, 2), e !== null && (ha(e, 2), Ft(e));
    }
    function we(e, t, l) {
      if (e.tag === 3) Qd(e, e, l);
      else for (; t !== null; ) {
        if (t.tag === 3) {
          Qd(t, e, l);
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Ul === null || !Ul.has(n))) {
            e = Dt(l, e), l = Vf(2), n = Nl(t, l, 2), n !== null && (Zf(l, n, t, e), ha(n, 2), Ft(n));
            break;
          }
        }
        t = t.return;
      }
    }
    function Yo(e, t, l) {
      var n = e.pingCache;
      if (n === null) {
        n = e.pingCache = new py();
        var a = /* @__PURE__ */ new Set();
        n.set(t, a);
      } else a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
      a.has(l) || (Ro = true, a.add(l), e = Sy.bind(null, e, t, l), t.then(e, e));
    }
    function Sy(e, t, l) {
      var n = e.pingCache;
      n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Oe === e && (he & l) === l && (Xe === 4 || Xe === 3 && (he & 62914560) === he && 300 > Me() - fu ? (Se & 2) === 0 && Wn(e, 0) : Bo |= l, $n === he && ($n = 0)), Ft(e);
    }
    function Vd(e, t) {
      t === 0 && (t = Hs()), e = Pl(e, t), e !== null && (ha(e, t), Ft(e));
    }
    function xy(e) {
      var t = e.memoizedState, l = 0;
      t !== null && (l = t.retryLane), Vd(e, l);
    }
    function wy(e, t) {
      var l = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var n = e.stateNode, a = e.memoizedState;
          a !== null && (l = a.retryLane);
          break;
        case 19:
          n = e.stateNode;
          break;
        case 22:
          n = e.stateNode._retryCache;
          break;
        default:
          throw Error(c(314));
      }
      n !== null && n.delete(t), Vd(e, l);
    }
    function Ty(e, t) {
      return zt(e, t);
    }
    var gu = null, Pn = null, Xo = false, vu = false, Qo = false, ql = 0;
    function Ft(e) {
      e !== Pn && e.next === null && (Pn === null ? gu = Pn = e : Pn = Pn.next = e), vu = true, Xo || (Xo = true, Ey());
    }
    function ka(e, t) {
      if (!Qo && vu) {
        Qo = true;
        do
          for (var l = false, n = gu; n !== null; ) {
            if (e !== 0) {
              var a = n.pendingLanes;
              if (a === 0) var i = 0;
              else {
                var o = n.suspendedLanes, f = n.pingedLanes;
                i = (1 << 31 - vt(42 | e) + 1) - 1, i &= a & ~(o & ~f), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
              }
              i !== 0 && (l = true, Jd(n, i));
            } else i = he, i = wi(n, n === Oe ? i : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (i & 3) === 0 || da(n, i) || (l = true, Jd(n, i));
            n = n.next;
          }
        while (l);
        Qo = false;
      }
    }
    function Ay() {
      Zd();
    }
    function Zd() {
      vu = Xo = false;
      var e = 0;
      ql !== 0 && Uy() && (e = ql);
      for (var t = Me(), l = null, n = gu; n !== null; ) {
        var a = n.next, i = Kd(n, t);
        i === 0 ? (n.next = null, l === null ? gu = a : l.next = a, a === null && (Pn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (vu = true)), n = a;
      }
      We !== 0 && We !== 5 || ka(e), ql !== 0 && (ql = 0);
    }
    function Kd(e, t) {
      for (var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
        var o = 31 - vt(i), f = 1 << o, y = a[o];
        y === -1 ? ((f & l) === 0 || (f & n) !== 0) && (a[o] = Im(f, t)) : y <= t && (e.expiredLanes |= f), i &= ~f;
      }
      if (t = Oe, l = he, l = wi(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n = e.callbackNode, l === 0 || e === t && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) return n !== null && n !== null && _l(n), e.callbackNode = null, e.callbackPriority = 0;
      if ((l & 3) === 0 || da(e, l)) {
        if (t = l & -l, t === e.callbackPriority) return t;
        switch (n !== null && _l(n), nc(l)) {
          case 2:
          case 8:
            l = Kt;
            break;
          case 32:
            l = Gt;
            break;
          case 268435456:
            l = Us;
            break;
          default:
            l = Gt;
        }
        return n = kd.bind(null, e), l = zt(l, n), e.callbackPriority = t, e.callbackNode = l, t;
      }
      return n !== null && n !== null && _l(n), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function kd(e, t) {
      if (We !== 0 && We !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
      var l = e.callbackNode;
      if (bu() && e.callbackNode !== l) return null;
      var n = he;
      return n = wi(e, e === Oe ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n === 0 ? null : (Md(e, n, t), Kd(e, Me()), e.callbackNode != null && e.callbackNode === l ? kd.bind(null, e) : null);
    }
    function Jd(e, t) {
      if (bu()) return null;
      Md(e, t, true);
    }
    function Ey() {
      Ly(function() {
        (Se & 6) !== 0 ? zt(nt, Ay) : Zd();
      });
    }
    function Vo() {
      if (ql === 0) {
        var e = Ln;
        e === 0 && (e = _i, _i <<= 1, (_i & 261888) === 0 && (_i = 256)), ql = e;
      }
      return ql;
    }
    function $d(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : zi("" + e);
    }
    function Fd(e, t) {
      var l = t.ownerDocument.createElement("input");
      return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
    }
    function zy(e, t, l, n, a) {
      if (t === "submit" && l && l.stateNode === a) {
        var i = $d((a[ft] || null).action), o = n.submitter;
        o && (t = (t = o[ft] || null) ? $d(t.formAction) : o.getAttribute("formAction"), t !== null && (i = t, o = null));
        var f = new Di("action", "action", null, n, a);
        e.push({
          event: f,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (n.defaultPrevented) {
                  if (ql !== 0) {
                    var y = o ? Fd(a, o) : new FormData(a);
                    so(l, {
                      pending: true,
                      data: y,
                      method: a.method,
                      action: i
                    }, null, y);
                  }
                } else typeof i == "function" && (f.preventDefault(), y = o ? Fd(a, o) : new FormData(a), so(l, {
                  pending: true,
                  data: y,
                  method: a.method,
                  action: i
                }, i, y));
              },
              currentTarget: a
            }
          ]
        });
      }
    }
    for (var Zo = 0; Zo < Ec.length; Zo++) {
      var Ko = Ec[Zo], My = Ko.toLowerCase(), Oy = Ko[0].toUpperCase() + Ko.slice(1);
      Yt(My, "on" + Oy);
    }
    Yt(Er, "onAnimationEnd"), Yt(zr, "onAnimationIteration"), Yt(Mr, "onAnimationStart"), Yt("dblclick", "onDoubleClick"), Yt("focusin", "onFocus"), Yt("focusout", "onBlur"), Yt(Z0, "onTransitionRun"), Yt(K0, "onTransitionStart"), Yt(k0, "onTransitionCancel"), Yt(Or, "onTransitionEnd"), Tn("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), Tn("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), Tn("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), Tn("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), $l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), $l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), $l("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), $l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), $l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), $l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Ja = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ny = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ja));
    function Wd(e, t) {
      t = (t & 4) !== 0;
      for (var l = 0; l < e.length; l++) {
        var n = e[l], a = n.event;
        n = n.listeners;
        e: {
          var i = void 0;
          if (t) for (var o = n.length - 1; 0 <= o; o--) {
            var f = n[o], y = f.instance, z = f.currentTarget;
            if (f = f.listener, y !== i && a.isPropagationStopped()) break e;
            i = f, a.currentTarget = z;
            try {
              i(a);
            } catch (R) {
              Bi(R);
            }
            a.currentTarget = null, i = y;
          }
          else for (o = 0; o < n.length; o++) {
            if (f = n[o], y = f.instance, z = f.currentTarget, f = f.listener, y !== i && a.isPropagationStopped()) break e;
            i = f, a.currentTarget = z;
            try {
              i(a);
            } catch (R) {
              Bi(R);
            }
            a.currentTarget = null, i = y;
          }
        }
      }
    }
    function de(e, t) {
      var l = t[ac];
      l === void 0 && (l = t[ac] = /* @__PURE__ */ new Set());
      var n = e + "__bubble";
      l.has(n) || (Id(t, e, 2, false), l.add(n));
    }
    function ko(e, t, l) {
      var n = 0;
      t && (n |= 4), Id(l, e, n, t);
    }
    var _u = "_reactListening" + Math.random().toString(36).slice(2);
    function Jo(e) {
      if (!e[_u]) {
        e[_u] = true, Vs.forEach(function(l) {
          l !== "selectionchange" && (Ny.has(l) || ko(l, false, e), ko(l, true, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[_u] || (t[_u] = true, ko("selectionchange", false, t));
      }
    }
    function Id(e, t, l, n) {
      switch (zh(t)) {
        case 2:
          var a = ap;
          break;
        case 8:
          a = ip;
          break;
        default:
          a = ss;
      }
      l = a.bind(null, t, l, e), a = void 0, !hc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = true), n ? a !== void 0 ? e.addEventListener(t, l, {
        capture: true,
        passive: a
      }) : e.addEventListener(t, l, true) : a !== void 0 ? e.addEventListener(t, l, {
        passive: a
      }) : e.addEventListener(t, l, false);
    }
    function $o(e, t, l, n, a) {
      var i = n;
      if ((t & 1) === 0 && (t & 2) === 0 && n !== null) e: for (; ; ) {
        if (n === null) return;
        var o = n.tag;
        if (o === 3 || o === 4) {
          var f = n.stateNode.containerInfo;
          if (f === a) break;
          if (o === 4) for (o = n.return; o !== null; ) {
            var y = o.tag;
            if ((y === 3 || y === 4) && o.stateNode.containerInfo === a) return;
            o = o.return;
          }
          for (; f !== null; ) {
            if (o = Sn(f), o === null) return;
            if (y = o.tag, y === 5 || y === 6 || y === 26 || y === 27) {
              n = i = o;
              continue e;
            }
            f = f.parentNode;
          }
        }
        n = n.return;
      }
      lr(function() {
        var z = i, R = fc(l), j = [];
        e: {
          var M = Nr.get(e);
          if (M !== void 0) {
            var N = Di, Z = e;
            switch (e) {
              case "keypress":
                if (Oi(l) === 0) break e;
              case "keydown":
              case "keyup":
                N = w0;
                break;
              case "focusin":
                Z = "focus", N = bc;
                break;
              case "focusout":
                Z = "blur", N = bc;
                break;
              case "beforeblur":
              case "afterblur":
                N = bc;
                break;
              case "click":
                if (l.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                N = ir;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                N = f0;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                N = E0;
                break;
              case Er:
              case zr:
              case Mr:
                N = m0;
                break;
              case Or:
                N = M0;
                break;
              case "scroll":
              case "scrollend":
                N = s0;
                break;
              case "wheel":
                N = N0;
                break;
              case "copy":
              case "cut":
              case "paste":
                N = p0;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                N = cr;
                break;
              case "toggle":
              case "beforetoggle":
                N = C0;
            }
            var P = (t & 4) !== 0, ze = !P && (e === "scroll" || e === "scrollend"), S = P ? M !== null ? M + "Capture" : null : M;
            P = [];
            for (var _ = z, E; _ !== null; ) {
              var B = _;
              if (E = B.stateNode, B = B.tag, B !== 5 && B !== 26 && B !== 27 || E === null || S === null || (B = pa(_, S), B != null && P.push($a(_, B, E))), ze) break;
              _ = _.return;
            }
            0 < P.length && (M = new N(M, Z, null, l, R), j.push({
              event: M,
              listeners: P
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (M = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", M && l !== rc && (Z = l.relatedTarget || l.fromElement) && (Sn(Z) || Z[_n])) break e;
            if ((N || M) && (M = R.window === R ? R : (M = R.ownerDocument) ? M.defaultView || M.parentWindow : window, N ? (Z = l.relatedTarget || l.toElement, N = z, Z = Z ? Sn(Z) : null, Z !== null && (ze = m(Z), P = Z.tag, Z !== ze || P !== 5 && P !== 27 && P !== 6) && (Z = null)) : (N = null, Z = z), N !== Z)) {
              if (P = ir, B = "onMouseLeave", S = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (P = cr, B = "onPointerLeave", S = "onPointerEnter", _ = "pointer"), ze = N == null ? M : ya(N), E = Z == null ? M : ya(Z), M = new P(B, _ + "leave", N, l, R), M.target = ze, M.relatedTarget = E, B = null, Sn(R) === z && (P = new P(S, _ + "enter", Z, l, R), P.target = E, P.relatedTarget = ze, B = P), ze = B, N && Z) t: {
                for (P = Dy, S = N, _ = Z, E = 0, B = S; B; B = P(B)) E++;
                B = 0;
                for (var F = _; F; F = P(F)) B++;
                for (; 0 < E - B; ) S = P(S), E--;
                for (; 0 < B - E; ) _ = P(_), B--;
                for (; E--; ) {
                  if (S === _ || _ !== null && S === _.alternate) {
                    P = S;
                    break t;
                  }
                  S = P(S), _ = P(_);
                }
                P = null;
              }
              else P = null;
              N !== null && Pd(j, M, N, P, false), Z !== null && ze !== null && Pd(j, ze, Z, P, true);
            }
          }
          e: {
            if (M = z ? ya(z) : window, N = M.nodeName && M.nodeName.toLowerCase(), N === "select" || N === "input" && M.type === "file") var ve = yr;
            else if (hr(M)) if (pr) ve = X0;
            else {
              ve = G0;
              var J = q0;
            }
            else N = M.nodeName, !N || N.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? z && sc(z.elementType) && (ve = yr) : ve = Y0;
            if (ve && (ve = ve(e, z))) {
              mr(j, ve, l, R);
              break e;
            }
            J && J(e, M, z), e === "focusout" && z && M.type === "number" && z.memoizedProps.value != null && oc(M, "number", M.value);
          }
          switch (J = z ? ya(z) : window, e) {
            case "focusin":
              (hr(J) || J.contentEditable === "true") && (Nn = J, wc = z, Ta = null);
              break;
            case "focusout":
              Ta = wc = Nn = null;
              break;
            case "mousedown":
              Tc = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Tc = false, Tr(j, l, R);
              break;
            case "selectionchange":
              if (V0) break;
            case "keydown":
            case "keyup":
              Tr(j, l, R);
          }
          var ue;
          if (vc) e: {
            switch (e) {
              case "compositionstart":
                var me = "onCompositionStart";
                break e;
              case "compositionend":
                me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                me = "onCompositionUpdate";
                break e;
            }
            me = void 0;
          }
          else On ? fr(e, l) && (me = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (me = "onCompositionStart");
          me && (or && l.locale !== "ko" && (On || me !== "onCompositionStart" ? me === "onCompositionEnd" && On && (ue = nr()) : (wl = R, mc = "value" in wl ? wl.value : wl.textContent, On = true)), J = Su(z, me), 0 < J.length && (me = new ur(me, e, null, l, R), j.push({
            event: me,
            listeners: J
          }), ue ? me.data = ue : (ue = dr(l), ue !== null && (me.data = ue)))), (ue = B0 ? j0(e, l) : U0(e, l)) && (me = Su(z, "onBeforeInput"), 0 < me.length && (J = new ur("onBeforeInput", "beforeinput", null, l, R), j.push({
            event: J,
            listeners: me
          }), J.data = ue)), zy(j, e, z, l, R);
        }
        Wd(j, t);
      });
    }
    function $a(e, t, l) {
      return {
        instance: e,
        listener: t,
        currentTarget: l
      };
    }
    function Su(e, t) {
      for (var l = t + "Capture", n = []; e !== null; ) {
        var a = e, i = a.stateNode;
        if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = pa(e, l), a != null && n.unshift($a(e, a, i)), a = pa(e, t), a != null && n.push($a(e, a, i))), e.tag === 3) return n;
        e = e.return;
      }
      return [];
    }
    function Dy(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Pd(e, t, l, n, a) {
      for (var i = t._reactName, o = []; l !== null && l !== n; ) {
        var f = l, y = f.alternate, z = f.stateNode;
        if (f = f.tag, y !== null && y === n) break;
        f !== 5 && f !== 26 && f !== 27 || z === null || (y = z, a ? (z = pa(l, i), z != null && o.unshift($a(l, z, y))) : a || (z = pa(l, i), z != null && o.push($a(l, z, y)))), l = l.return;
      }
      o.length !== 0 && e.push({
        event: t,
        listeners: o
      });
    }
    var Cy = /\r\n?/g, Ry = /\u0000|\uFFFD/g;
    function eh(e) {
      return (typeof e == "string" ? e : "" + e).replace(Cy, `
`).replace(Ry, "");
    }
    function th(e, t) {
      return t = eh(t), eh(e) === t;
    }
    function Ee(e, t, l, n, a, i) {
      switch (l) {
        case "children":
          typeof n == "string" ? t === "body" || t === "textarea" && n === "" || En(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && En(e, "" + n);
          break;
        case "className":
          Ai(e, "class", n);
          break;
        case "tabIndex":
          Ai(e, "tabindex", n);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Ai(e, l, n);
          break;
        case "style":
          er(e, n, i);
          break;
        case "data":
          if (t !== "object") {
            Ai(e, "data", n);
            break;
          }
        case "src":
        case "href":
          if (n === "" && (t !== "a" || l !== "href")) {
            e.removeAttribute(l);
            break;
          }
          if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
            e.removeAttribute(l);
            break;
          }
          n = zi("" + n), e.setAttribute(l, n);
          break;
        case "action":
        case "formAction":
          if (typeof n == "function") {
            e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof i == "function" && (l === "formAction" ? (t !== "input" && Ee(e, t, "name", a.name, a, null), Ee(e, t, "formEncType", a.formEncType, a, null), Ee(e, t, "formMethod", a.formMethod, a, null), Ee(e, t, "formTarget", a.formTarget, a, null)) : (Ee(e, t, "encType", a.encType, a, null), Ee(e, t, "method", a.method, a, null), Ee(e, t, "target", a.target, a, null)));
          if (n == null || typeof n == "symbol" || typeof n == "boolean") {
            e.removeAttribute(l);
            break;
          }
          n = zi("" + n), e.setAttribute(l, n);
          break;
        case "onClick":
          n != null && (e.onclick = el);
          break;
        case "onScroll":
          n != null && de("scroll", e);
          break;
        case "onScrollEnd":
          n != null && de("scrollend", e);
          break;
        case "dangerouslySetInnerHTML":
          if (n != null) {
            if (typeof n != "object" || !("__html" in n)) throw Error(c(61));
            if (l = n.__html, l != null) {
              if (a.children != null) throw Error(c(60));
              e.innerHTML = l;
            }
          }
          break;
        case "multiple":
          e.multiple = n && typeof n != "function" && typeof n != "symbol";
          break;
        case "muted":
          e.muted = n && typeof n != "function" && typeof n != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          l = zi("" + n), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "" + n) : e.removeAttribute(l);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
          break;
        case "capture":
        case "download":
          n === true ? e.setAttribute(l, "") : n !== false && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, n) : e.removeAttribute(l);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(l, n) : e.removeAttribute(l);
          break;
        case "rowSpan":
        case "start":
          n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(l) : e.setAttribute(l, n);
          break;
        case "popover":
          de("beforetoggle", e), de("toggle", e), Ti(e, "popover", n);
          break;
        case "xlinkActuate":
          Pt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
          break;
        case "xlinkArcrole":
          Pt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
          break;
        case "xlinkRole":
          Pt(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
          break;
        case "xlinkShow":
          Pt(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
          break;
        case "xlinkTitle":
          Pt(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
          break;
        case "xlinkType":
          Pt(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
          break;
        case "xmlBase":
          Pt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
          break;
        case "xmlLang":
          Pt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
          break;
        case "xmlSpace":
          Pt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
          break;
        case "is":
          Ti(e, "is", n);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = c0.get(l) || l, Ti(e, l, n));
      }
    }
    function Fo(e, t, l, n, a, i) {
      switch (l) {
        case "style":
          er(e, n, i);
          break;
        case "dangerouslySetInnerHTML":
          if (n != null) {
            if (typeof n != "object" || !("__html" in n)) throw Error(c(61));
            if (l = n.__html, l != null) {
              if (a.children != null) throw Error(c(60));
              e.innerHTML = l;
            }
          }
          break;
        case "children":
          typeof n == "string" ? En(e, n) : (typeof n == "number" || typeof n == "bigint") && En(e, "" + n);
          break;
        case "onScroll":
          n != null && de("scroll", e);
          break;
        case "onScrollEnd":
          n != null && de("scrollend", e);
          break;
        case "onClick":
          n != null && (e.onclick = el);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!Zs.hasOwnProperty(l)) e: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), i = e[ft] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof n == "function")) {
              typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
              break e;
            }
            l in e ? e[l] = n : n === true ? e.setAttribute(l, "") : Ti(e, l, n);
          }
      }
    }
    function ot(e, t, l) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          de("error", e), de("load", e);
          var n = false, a = false, i;
          for (i in l) if (l.hasOwnProperty(i)) {
            var o = l[i];
            if (o != null) switch (i) {
              case "src":
                n = true;
                break;
              case "srcSet":
                a = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Ee(e, t, i, o, l, null);
            }
          }
          a && Ee(e, t, "srcSet", l.srcSet, l, null), n && Ee(e, t, "src", l.src, l, null);
          return;
        case "input":
          de("invalid", e);
          var f = i = o = a = null, y = null, z = null;
          for (n in l) if (l.hasOwnProperty(n)) {
            var R = l[n];
            if (R != null) switch (n) {
              case "name":
                a = R;
                break;
              case "type":
                o = R;
                break;
              case "checked":
                y = R;
                break;
              case "defaultChecked":
                z = R;
                break;
              case "value":
                i = R;
                break;
              case "defaultValue":
                f = R;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(c(137, t));
                break;
              default:
                Ee(e, t, n, R, l, null);
            }
          }
          Fs(e, i, f, y, z, o, a, false);
          return;
        case "select":
          de("invalid", e), n = o = i = null;
          for (a in l) if (l.hasOwnProperty(a) && (f = l[a], f != null)) switch (a) {
            case "value":
              i = f;
              break;
            case "defaultValue":
              o = f;
              break;
            case "multiple":
              n = f;
            default:
              Ee(e, t, a, f, l, null);
          }
          t = i, l = o, e.multiple = !!n, t != null ? An(e, !!n, t, false) : l != null && An(e, !!n, l, true);
          return;
        case "textarea":
          de("invalid", e), i = a = n = null;
          for (o in l) if (l.hasOwnProperty(o) && (f = l[o], f != null)) switch (o) {
            case "value":
              n = f;
              break;
            case "defaultValue":
              a = f;
              break;
            case "children":
              i = f;
              break;
            case "dangerouslySetInnerHTML":
              if (f != null) throw Error(c(91));
              break;
            default:
              Ee(e, t, o, f, l, null);
          }
          Is(e, n, a, i);
          return;
        case "option":
          for (y in l) if (l.hasOwnProperty(y) && (n = l[y], n != null)) switch (y) {
            case "selected":
              e.selected = n && typeof n != "function" && typeof n != "symbol";
              break;
            default:
              Ee(e, t, y, n, l, null);
          }
          return;
        case "dialog":
          de("beforetoggle", e), de("toggle", e), de("cancel", e), de("close", e);
          break;
        case "iframe":
        case "object":
          de("load", e);
          break;
        case "video":
        case "audio":
          for (n = 0; n < Ja.length; n++) de(Ja[n], e);
          break;
        case "image":
          de("error", e), de("load", e);
          break;
        case "details":
          de("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          de("error", e), de("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (z in l) if (l.hasOwnProperty(z) && (n = l[z], n != null)) switch (z) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(c(137, t));
            default:
              Ee(e, t, z, n, l, null);
          }
          return;
        default:
          if (sc(t)) {
            for (R in l) l.hasOwnProperty(R) && (n = l[R], n !== void 0 && Fo(e, t, R, n, l, void 0));
            return;
          }
      }
      for (f in l) l.hasOwnProperty(f) && (n = l[f], n != null && Ee(e, t, f, n, l, null));
    }
    function By(e, t, l, n) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var a = null, i = null, o = null, f = null, y = null, z = null, R = null;
          for (N in l) {
            var j = l[N];
            if (l.hasOwnProperty(N) && j != null) switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                y = j;
              default:
                n.hasOwnProperty(N) || Ee(e, t, N, null, n, j);
            }
          }
          for (var M in n) {
            var N = n[M];
            if (j = l[M], n.hasOwnProperty(M) && (N != null || j != null)) switch (M) {
              case "type":
                i = N;
                break;
              case "name":
                a = N;
                break;
              case "checked":
                z = N;
                break;
              case "defaultChecked":
                R = N;
                break;
              case "value":
                o = N;
                break;
              case "defaultValue":
                f = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(c(137, t));
                break;
              default:
                N !== j && Ee(e, t, M, N, n, j);
            }
          }
          cc(e, o, f, y, z, R, i, a);
          return;
        case "select":
          N = o = f = M = null;
          for (i in l) if (y = l[i], l.hasOwnProperty(i) && y != null) switch (i) {
            case "value":
              break;
            case "multiple":
              N = y;
            default:
              n.hasOwnProperty(i) || Ee(e, t, i, null, n, y);
          }
          for (a in n) if (i = n[a], y = l[a], n.hasOwnProperty(a) && (i != null || y != null)) switch (a) {
            case "value":
              M = i;
              break;
            case "defaultValue":
              f = i;
              break;
            case "multiple":
              o = i;
            default:
              i !== y && Ee(e, t, a, i, n, y);
          }
          t = f, l = o, n = N, M != null ? An(e, !!l, M, false) : !!n != !!l && (t != null ? An(e, !!l, t, true) : An(e, !!l, l ? [] : "", false));
          return;
        case "textarea":
          N = M = null;
          for (f in l) if (a = l[f], l.hasOwnProperty(f) && a != null && !n.hasOwnProperty(f)) switch (f) {
            case "value":
              break;
            case "children":
              break;
            default:
              Ee(e, t, f, null, n, a);
          }
          for (o in n) if (a = n[o], i = l[o], n.hasOwnProperty(o) && (a != null || i != null)) switch (o) {
            case "value":
              M = a;
              break;
            case "defaultValue":
              N = a;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (a != null) throw Error(c(91));
              break;
            default:
              a !== i && Ee(e, t, o, a, n, i);
          }
          Ws(e, M, N);
          return;
        case "option":
          for (var Z in l) if (M = l[Z], l.hasOwnProperty(Z) && M != null && !n.hasOwnProperty(Z)) switch (Z) {
            case "selected":
              e.selected = false;
              break;
            default:
              Ee(e, t, Z, null, n, M);
          }
          for (y in n) if (M = n[y], N = l[y], n.hasOwnProperty(y) && M !== N && (M != null || N != null)) switch (y) {
            case "selected":
              e.selected = M && typeof M != "function" && typeof M != "symbol";
              break;
            default:
              Ee(e, t, y, M, n, N);
          }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var P in l) M = l[P], l.hasOwnProperty(P) && M != null && !n.hasOwnProperty(P) && Ee(e, t, P, null, n, M);
          for (z in n) if (M = n[z], N = l[z], n.hasOwnProperty(z) && M !== N && (M != null || N != null)) switch (z) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (M != null) throw Error(c(137, t));
              break;
            default:
              Ee(e, t, z, M, n, N);
          }
          return;
        default:
          if (sc(t)) {
            for (var ze in l) M = l[ze], l.hasOwnProperty(ze) && M !== void 0 && !n.hasOwnProperty(ze) && Fo(e, t, ze, void 0, n, M);
            for (R in n) M = n[R], N = l[R], !n.hasOwnProperty(R) || M === N || M === void 0 && N === void 0 || Fo(e, t, R, M, n, N);
            return;
          }
      }
      for (var S in l) M = l[S], l.hasOwnProperty(S) && M != null && !n.hasOwnProperty(S) && Ee(e, t, S, null, n, M);
      for (j in n) M = n[j], N = l[j], !n.hasOwnProperty(j) || M === N || M == null && N == null || Ee(e, t, j, M, n, N);
    }
    function lh(e) {
      switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return true;
        default:
          return false;
      }
    }
    function jy() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
          var a = l[n], i = a.transferSize, o = a.initiatorType, f = a.duration;
          if (i && f && lh(o)) {
            for (o = 0, f = a.responseEnd, n += 1; n < l.length; n++) {
              var y = l[n], z = y.startTime;
              if (z > f) break;
              var R = y.transferSize, j = y.initiatorType;
              R && lh(j) && (y = y.responseEnd, o += R * (y < f ? 1 : (f - z) / (y - z)));
            }
            if (--n, t += 8 * (i + o) / (a.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    var Wo = null, Io = null;
    function xu(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function nh(e) {
      switch (e) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function ah(e, t) {
      if (e === 0) switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return e === 1 && t === "foreignObject" ? 0 : e;
    }
    function Po(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var es = null;
    function Uy() {
      var e = window.event;
      return e && e.type === "popstate" ? e === es ? false : (es = e, true) : (es = null, false);
    }
    var ih = typeof setTimeout == "function" ? setTimeout : void 0, Hy = typeof clearTimeout == "function" ? clearTimeout : void 0, uh = typeof Promise == "function" ? Promise : void 0, Ly = typeof queueMicrotask == "function" ? queueMicrotask : typeof uh < "u" ? function(e) {
      return uh.resolve(null).then(e).catch(qy);
    } : ih;
    function qy(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Gl(e) {
      return e === "head";
    }
    function ch(e, t) {
      var l = t, n = 0;
      do {
        var a = l.nextSibling;
        if (e.removeChild(l), a && a.nodeType === 8) if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            e.removeChild(a), na(t);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") n++;
        else if (l === "html") Fa(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, Fa(l);
          for (var i = l.firstChild; i; ) {
            var o = i.nextSibling, f = i.nodeName;
            i[ma] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = o;
          }
        } else l === "body" && Fa(e.ownerDocument.body);
        l = a;
      } while (l);
      na(t);
    }
    function oh(e, t) {
      var l = e;
      e = 0;
      do {
        var n = l.nextSibling;
        if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), n && n.nodeType === 8) if (l = n.data, l === "/$") {
          if (e === 0) break;
          e--;
        } else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
        l = n;
      } while (l);
    }
    function ts(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var l = t;
        switch (t = t.nextSibling, l.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            ts(l), ic(l);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (l.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(l);
      }
    }
    function Gy(e, t, l, n) {
      for (; e.nodeType === 1; ) {
        var a = l;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
        } else if (n) {
          if (!e[ma]) switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence")) break;
              if (i !== a.rel || e.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title)) break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (i = e.getAttribute("src"), (i !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
              return e;
            default:
              return e;
          }
        } else if (t === "input" && e.type === "hidden") {
          var i = a.name == null ? null : "" + a.name;
          if (a.type === "hidden" && e.getAttribute("name") === i) return e;
        } else return e;
        if (e = Ut(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Yy(e, t, l) {
      if (t === "") return null;
      for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Ut(e.nextSibling), e === null)) return null;
      return e;
    }
    function sh(e, t) {
      for (; e.nodeType !== 8; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Ut(e.nextSibling), e === null)) return null;
      return e;
    }
    function ls(e) {
      return e.data === "$?" || e.data === "$~";
    }
    function ns(e) {
      return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
    }
    function Xy(e, t) {
      var l = e.ownerDocument;
      if (e.data === "$~") e._reactRetry = t;
      else if (e.data !== "$?" || l.readyState !== "loading") t();
      else {
        var n = function() {
          t(), l.removeEventListener("DOMContentLoaded", n);
        };
        l.addEventListener("DOMContentLoaded", n), e._reactRetry = n;
      }
    }
    function Ut(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
          if (t === "/$" || t === "/&") return null;
        }
      }
      return e;
    }
    var as = null;
    function rh(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var l = e.data;
          if (l === "/$" || l === "/&") {
            if (t === 0) return Ut(e.nextSibling);
            t--;
          } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function fh(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var l = e.data;
          if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
            if (t === 0) return e;
            t--;
          } else l !== "/$" && l !== "/&" || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function dh(e, t, l) {
      switch (t = xu(l), e) {
        case "html":
          if (e = t.documentElement, !e) throw Error(c(452));
          return e;
        case "head":
          if (e = t.head, !e) throw Error(c(453));
          return e;
        case "body":
          if (e = t.body, !e) throw Error(c(454));
          return e;
        default:
          throw Error(c(451));
      }
    }
    function Fa(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      ic(e);
    }
    var Ht = /* @__PURE__ */ new Map(), hh = /* @__PURE__ */ new Set();
    function wu(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    var pl = Y.d;
    Y.d = {
      f: Qy,
      r: Vy,
      D: Zy,
      C: Ky,
      L: ky,
      m: Jy,
      X: Fy,
      S: $y,
      M: Wy
    };
    function Qy() {
      var e = pl.f(), t = mu();
      return e || t;
    }
    function Vy(e) {
      var t = xn(e);
      t !== null && t.tag === 5 && t.type === "form" ? Nf(t) : pl.r(e);
    }
    var ea = typeof document > "u" ? null : document;
    function mh(e, t, l) {
      var n = ea;
      if (n && typeof t == "string" && t) {
        var a = Ot(t);
        a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), hh.has(a) || (hh.add(a), e = {
          rel: e,
          crossOrigin: l,
          href: t
        }, n.querySelector(a) === null && (t = n.createElement("link"), ot(t, "link", e), Pe(t), n.head.appendChild(t)));
      }
    }
    function Zy(e) {
      pl.D(e), mh("dns-prefetch", e, null);
    }
    function Ky(e, t) {
      pl.C(e, t), mh("preconnect", e, t);
    }
    function ky(e, t, l) {
      pl.L(e, t, l);
      var n = ea;
      if (n && e && t) {
        var a = 'link[rel="preload"][as="' + Ot(t) + '"]';
        t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Ot(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Ot(l.imageSizes) + '"]')) : a += '[href="' + Ot(e) + '"]';
        var i = a;
        switch (t) {
          case "style":
            i = ta(e);
            break;
          case "script":
            i = la(e);
        }
        Ht.has(i) || (e = b({
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        }, l), Ht.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(Wa(i)) || t === "script" && n.querySelector(Ia(i)) || (t = n.createElement("link"), ot(t, "link", e), Pe(t), n.head.appendChild(t)));
      }
    }
    function Jy(e, t) {
      pl.m(e, t);
      var l = ea;
      if (l && e) {
        var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Ot(n) + '"][href="' + Ot(e) + '"]', i = a;
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            i = la(e);
        }
        if (!Ht.has(i) && (e = b({
          rel: "modulepreload",
          href: e
        }, t), Ht.set(i, e), l.querySelector(a) === null)) {
          switch (n) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (l.querySelector(Ia(i))) return;
          }
          n = l.createElement("link"), ot(n, "link", e), Pe(n), l.head.appendChild(n);
        }
      }
    }
    function $y(e, t, l) {
      pl.S(e, t, l);
      var n = ea;
      if (n && e) {
        var a = wn(n).hoistableStyles, i = ta(e);
        t = t || "default";
        var o = a.get(i);
        if (!o) {
          var f = {
            loading: 0,
            preload: null
          };
          if (o = n.querySelector(Wa(i))) f.loading = 5;
          else {
            e = b({
              rel: "stylesheet",
              href: e,
              "data-precedence": t
            }, l), (l = Ht.get(i)) && is(e, l);
            var y = o = n.createElement("link");
            Pe(y), ot(y, "link", e), y._p = new Promise(function(z, R) {
              y.onload = z, y.onerror = R;
            }), y.addEventListener("load", function() {
              f.loading |= 1;
            }), y.addEventListener("error", function() {
              f.loading |= 2;
            }), f.loading |= 4, Tu(o, t, n);
          }
          o = {
            type: "stylesheet",
            instance: o,
            count: 1,
            state: f
          }, a.set(i, o);
        }
      }
    }
    function Fy(e, t) {
      pl.X(e, t);
      var l = ea;
      if (l && e) {
        var n = wn(l).hoistableScripts, a = la(e), i = n.get(a);
        i || (i = l.querySelector(Ia(a)), i || (e = b({
          src: e,
          async: true
        }, t), (t = Ht.get(a)) && us(e, t), i = l.createElement("script"), Pe(i), ot(i, "link", e), l.head.appendChild(i)), i = {
          type: "script",
          instance: i,
          count: 1,
          state: null
        }, n.set(a, i));
      }
    }
    function Wy(e, t) {
      pl.M(e, t);
      var l = ea;
      if (l && e) {
        var n = wn(l).hoistableScripts, a = la(e), i = n.get(a);
        i || (i = l.querySelector(Ia(a)), i || (e = b({
          src: e,
          async: true,
          type: "module"
        }, t), (t = Ht.get(a)) && us(e, t), i = l.createElement("script"), Pe(i), ot(i, "link", e), l.head.appendChild(i)), i = {
          type: "script",
          instance: i,
          count: 1,
          state: null
        }, n.set(a, i));
      }
    }
    function yh(e, t, l, n) {
      var a = (a = qe.current) ? wu(a) : null;
      if (!a) throw Error(c(446));
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof l.precedence == "string" && typeof l.href == "string" ? (t = ta(l.href), l = wn(a).hoistableStyles, n = l.get(t), n || (n = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, l.set(t, n)), n) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
            e = ta(l.href);
            var i = wn(a).hoistableStyles, o = i.get(e);
            if (o || (a = a.ownerDocument || a, o = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, i.set(e, o), (i = a.querySelector(Wa(e))) && !i._p && (o.instance = i, o.state.loading = 5), Ht.has(e) || (l = {
              rel: "preload",
              as: "style",
              href: l.href,
              crossOrigin: l.crossOrigin,
              integrity: l.integrity,
              media: l.media,
              hrefLang: l.hrefLang,
              referrerPolicy: l.referrerPolicy
            }, Ht.set(e, l), i || Iy(a, e, l, o.state))), t && n === null) throw Error(c(528, ""));
            return o;
          }
          if (t && n !== null) throw Error(c(529, ""));
          return null;
        case "script":
          return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = la(l), l = wn(a).hoistableScripts, n = l.get(t), n || (n = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, l.set(t, n)), n) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(c(444, e));
      }
    }
    function ta(e) {
      return 'href="' + Ot(e) + '"';
    }
    function Wa(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function ph(e) {
      return b({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Iy(e, t, l, n) {
      e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
        return n.loading |= 1;
      }), t.addEventListener("error", function() {
        return n.loading |= 2;
      }), ot(t, "link", l), Pe(t), e.head.appendChild(t));
    }
    function la(e) {
      return '[src="' + Ot(e) + '"]';
    }
    function Ia(e) {
      return "script[async]" + e;
    }
    function bh(e, t, l) {
      if (t.count++, t.instance === null) switch (t.type) {
        case "style":
          var n = e.querySelector('style[data-href~="' + Ot(l.href) + '"]');
          if (n) return t.instance = n, Pe(n), n;
          var a = b({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement("style"), Pe(n), ot(n, "style", a), Tu(n, l.precedence, e), t.instance = n;
        case "stylesheet":
          a = ta(l.href);
          var i = e.querySelector(Wa(a));
          if (i) return t.state.loading |= 4, t.instance = i, Pe(i), i;
          n = ph(l), (a = Ht.get(a)) && is(n, a), i = (e.ownerDocument || e).createElement("link"), Pe(i);
          var o = i;
          return o._p = new Promise(function(f, y) {
            o.onload = f, o.onerror = y;
          }), ot(i, "link", n), t.state.loading |= 4, Tu(i, l.precedence, e), t.instance = i;
        case "script":
          return i = la(l.src), (a = e.querySelector(Ia(i))) ? (t.instance = a, Pe(a), a) : (n = l, (a = Ht.get(i)) && (n = b({}, l), us(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Pe(a), ot(a, "link", n), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
      else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, Tu(n, l.precedence, e));
      return t.instance;
    }
    function Tu(e, t, l) {
      for (var n = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = n.length ? n[n.length - 1] : null, i = a, o = 0; o < n.length; o++) {
        var f = n[o];
        if (f.dataset.precedence === t) i = f;
        else if (i !== a) break;
      }
      i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
    }
    function is(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function us(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    var Au = null;
    function gh(e, t, l) {
      if (Au === null) {
        var n = /* @__PURE__ */ new Map(), a = Au = /* @__PURE__ */ new Map();
        a.set(l, n);
      } else a = Au, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
      if (n.has(e)) return n;
      for (n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++) {
        var i = l[a];
        if (!(i[ma] || i[at] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
          var o = i.getAttribute(t) || "";
          o = e + o;
          var f = n.get(o);
          f ? f.push(i) : n.set(o, [
            i
          ]);
        }
      }
      return n;
    }
    function vh(e, t, l) {
      e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null);
    }
    function Py(e, t, l) {
      if (l === 1 || t.itemProp != null) return false;
      switch (e) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
          return true;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
          switch (t.rel) {
            case "stylesheet":
              return e = t.disabled, typeof t.precedence == "string" && e == null;
            default:
              return true;
          }
        case "script":
          if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
      }
      return false;
    }
    function _h(e) {
      return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
    }
    function ep(e, t, l, n) {
      if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== false) && (l.state.loading & 4) === 0) {
        if (l.instance === null) {
          var a = ta(n.href), i = t.querySelector(Wa(a));
          if (i) {
            t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Eu.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = i, Pe(i);
            return;
          }
          i = t.ownerDocument || t, n = ph(n), (a = Ht.get(a)) && is(n, a), i = i.createElement("link"), Pe(i);
          var o = i;
          o._p = new Promise(function(f, y) {
            o.onload = f, o.onerror = y;
          }), ot(i, "link", n), l.instance = i;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = Eu.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
      }
    }
    var cs = 0;
    function tp(e, t) {
      return e.stylesheets && e.count === 0 && Mu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
        var n = setTimeout(function() {
          if (e.stylesheets && Mu(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4 + t);
        0 < e.imgBytes && cs === 0 && (cs = 62500 * jy());
        var a = setTimeout(function() {
          if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && Mu(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, (e.imgBytes > cs ? 50 : 800) + t);
        return e.unsuspend = l, function() {
          e.unsuspend = null, clearTimeout(n), clearTimeout(a);
        };
      } : null;
    }
    function Eu() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) Mu(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    var zu = null;
    function Mu(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, zu = /* @__PURE__ */ new Map(), t.forEach(lp, e), zu = null, Eu.call(e));
    }
    function lp(e, t) {
      if (!(t.state.loading & 4)) {
        var l = zu.get(e);
        if (l) var n = l.get(null);
        else {
          l = /* @__PURE__ */ new Map(), zu.set(e, l);
          for (var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < a.length; i++) {
            var o = a[i];
            (o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (l.set(o.dataset.precedence, o), n = o);
          }
          n && l.set(null, n);
        }
        a = t.instance, o = a.getAttribute("data-precedence"), i = l.get(o) || n, i === n && l.set(null, a), l.set(o, a), this.count++, n = Eu.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
      }
    }
    var Pa = {
      $$typeof: K,
      Provider: null,
      Consumer: null,
      _currentValue: H,
      _currentValue2: H,
      _threadCount: 0
    };
    function np(e, t, l, n, a, i, o, f, y) {
      this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = tc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tc(0), this.hiddenUpdates = tc(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function Sh(e, t, l, n, a, i, o, f, y, z, R, j) {
      return e = new np(e, t, l, o, y, z, R, j, f), t = 1, i === true && (t |= 24), i = St(3, null, null, t), e.current = i, i.stateNode = e, t = qc(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
        element: n,
        isDehydrated: l,
        cache: t
      }, Qc(i), e;
    }
    function xh(e) {
      return e ? (e = Rn, e) : Rn;
    }
    function wh(e, t, l, n, a, i) {
      a = xh(a), n.context === null ? n.context = a : n.pendingContext = a, n = Ol(t), n.payload = {
        element: l
      }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = Nl(e, n, t), l !== null && (bt(l, e, t), Da(l, e, t));
    }
    function Th(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var l = e.retryLane;
        e.retryLane = l !== 0 && l < t ? l : t;
      }
    }
    function os(e, t) {
      Th(e, t), (e = e.alternate) && Th(e, t);
    }
    function Ah(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Pl(e, 67108864);
        t !== null && bt(t, e, 67108864), os(e, 67108864);
      }
    }
    function Eh(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Et();
        t = lc(t);
        var l = Pl(e, t);
        l !== null && bt(l, e, t), os(e, t);
      }
    }
    var Ou = true;
    function ap(e, t, l, n) {
      var a = D.T;
      D.T = null;
      var i = Y.p;
      try {
        Y.p = 2, ss(e, t, l, n);
      } finally {
        Y.p = i, D.T = a;
      }
    }
    function ip(e, t, l, n) {
      var a = D.T;
      D.T = null;
      var i = Y.p;
      try {
        Y.p = 8, ss(e, t, l, n);
      } finally {
        Y.p = i, D.T = a;
      }
    }
    function ss(e, t, l, n) {
      if (Ou) {
        var a = rs(n);
        if (a === null) $o(e, t, n, Nu, l), Mh(e, n);
        else if (cp(a, e, t, l, n)) n.stopPropagation();
        else if (Mh(e, n), t & 4 && -1 < up.indexOf(e)) {
          for (; a !== null; ) {
            var i = xn(a);
            if (i !== null) switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var o = Jl(i.pendingLanes);
                  if (o !== 0) {
                    var f = i;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; o; ) {
                      var y = 1 << 31 - vt(o);
                      f.entanglements[1] |= y, o &= ~y;
                    }
                    Ft(i), (Se & 6) === 0 && (du = Me() + 500, ka(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = Pl(i, 2), f !== null && bt(f, i, 2), mu(), os(i, 2);
            }
            if (i = rs(n), i === null && $o(e, t, n, Nu, l), i === a) break;
            a = i;
          }
          a !== null && n.stopPropagation();
        } else $o(e, t, n, null, l);
      }
    }
    function rs(e) {
      return e = fc(e), fs(e);
    }
    var Nu = null;
    function fs(e) {
      if (Nu = null, e = Sn(e), e !== null) {
        var t = m(e);
        if (t === null) e = null;
        else {
          var l = t.tag;
          if (l === 13) {
            if (e = h(t), e !== null) return e;
            e = null;
          } else if (l === 31) {
            if (e = p(t), e !== null) return e;
            e = null;
          } else if (l === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return Nu = e, null;
    }
    function zh(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (qt()) {
            case nt:
              return 2;
            case Kt:
              return 8;
            case Gt:
            case vi:
              return 32;
            case Us:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var ds = false, Yl = null, Xl = null, Ql = null, ei = /* @__PURE__ */ new Map(), ti = /* @__PURE__ */ new Map(), Vl = [], up = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Mh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Yl = null;
          break;
        case "dragenter":
        case "dragleave":
          Xl = null;
          break;
        case "mouseover":
        case "mouseout":
          Ql = null;
          break;
        case "pointerover":
        case "pointerout":
          ei.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          ti.delete(t.pointerId);
      }
    }
    function li(e, t, l, n, a, i) {
      return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: l,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [
          a
        ]
      }, t !== null && (t = xn(t), t !== null && Ah(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
    }
    function cp(e, t, l, n, a) {
      switch (t) {
        case "focusin":
          return Yl = li(Yl, e, t, l, n, a), true;
        case "dragenter":
          return Xl = li(Xl, e, t, l, n, a), true;
        case "mouseover":
          return Ql = li(Ql, e, t, l, n, a), true;
        case "pointerover":
          var i = a.pointerId;
          return ei.set(i, li(ei.get(i) || null, e, t, l, n, a)), true;
        case "gotpointercapture":
          return i = a.pointerId, ti.set(i, li(ti.get(i) || null, e, t, l, n, a)), true;
      }
      return false;
    }
    function Oh(e) {
      var t = Sn(e.target);
      if (t !== null) {
        var l = m(t);
        if (l !== null) {
          if (t = l.tag, t === 13) {
            if (t = h(l), t !== null) {
              e.blockedOn = t, Xs(e.priority, function() {
                Eh(l);
              });
              return;
            }
          } else if (t === 31) {
            if (t = p(l), t !== null) {
              e.blockedOn = t, Xs(e.priority, function() {
                Eh(l);
              });
              return;
            }
          } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Du(e) {
      if (e.blockedOn !== null) return false;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var l = rs(e.nativeEvent);
        if (l === null) {
          l = e.nativeEvent;
          var n = new l.constructor(l.type, l);
          rc = n, l.target.dispatchEvent(n), rc = null;
        } else return t = xn(l), t !== null && Ah(t), e.blockedOn = l, false;
        t.shift();
      }
      return true;
    }
    function Nh(e, t, l) {
      Du(e) && l.delete(t);
    }
    function op() {
      ds = false, Yl !== null && Du(Yl) && (Yl = null), Xl !== null && Du(Xl) && (Xl = null), Ql !== null && Du(Ql) && (Ql = null), ei.forEach(Nh), ti.forEach(Nh);
    }
    function Cu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, ds || (ds = true, u.unstable_scheduleCallback(u.unstable_NormalPriority, op)));
    }
    var Ru = null;
    function Dh(e) {
      Ru !== e && (Ru = e, u.unstable_scheduleCallback(u.unstable_NormalPriority, function() {
        Ru === e && (Ru = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], n = e[t + 1], a = e[t + 2];
          if (typeof n != "function") {
            if (fs(n || l) === null) continue;
            break;
          }
          var i = xn(l);
          i !== null && (e.splice(t, 3), t -= 3, so(i, {
            pending: true,
            data: a,
            method: l.method,
            action: n
          }, n, a));
        }
      }));
    }
    function na(e) {
      function t(y) {
        return Cu(y, e);
      }
      Yl !== null && Cu(Yl, e), Xl !== null && Cu(Xl, e), Ql !== null && Cu(Ql, e), ei.forEach(t), ti.forEach(t);
      for (var l = 0; l < Vl.length; l++) {
        var n = Vl[l];
        n.blockedOn === e && (n.blockedOn = null);
      }
      for (; 0 < Vl.length && (l = Vl[0], l.blockedOn === null); ) Oh(l), l.blockedOn === null && Vl.shift();
      if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for (n = 0; n < l.length; n += 3) {
        var a = l[n], i = l[n + 1], o = a[ft] || null;
        if (typeof i == "function") o || Dh(l);
        else if (o) {
          var f = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, o = i[ft] || null) f = o.formAction;
            else if (fs(a) !== null) continue;
          } else f = o.action;
          typeof f == "function" ? l[n + 1] = f : (l.splice(n, 3), n -= 3), Dh(l);
        }
      }
    }
    function Ch() {
      function e(i) {
        i.canIntercept && i.info === "react-transition" && i.intercept({
          handler: function() {
            return new Promise(function(o) {
              return a = o;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function t() {
        a !== null && (a(), a = null), n || setTimeout(l, 20);
      }
      function l() {
        if (!n && !navigation.transition) {
          var i = navigation.currentEntry;
          i && i.url != null && navigation.navigate(i.url, {
            state: i.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var n = false, a = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
          n = true, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), a !== null && (a(), a = null);
        };
      }
    }
    function hs(e) {
      this._internalRoot = e;
    }
    Bu.prototype.render = hs.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      var l = t.current, n = Et();
      wh(l, n, e, t, null, null);
    }, Bu.prototype.unmount = hs.prototype.unmount = function() {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        wh(e.current, 2, null, e, null, null), mu(), t[_n] = null;
      }
    };
    function Bu(e) {
      this._internalRoot = e;
    }
    Bu.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Ys();
        e = {
          blockedOn: null,
          target: e,
          priority: t
        };
        for (var l = 0; l < Vl.length && t !== 0 && t < Vl[l].priority; l++) ;
        Vl.splice(l, 0, e), l === 0 && Oh(e);
      }
    };
    var Rh = s.version;
    if (Rh !== "19.2.0") throw Error(c(527, Rh, "19.2.0"));
    Y.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0) throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
      return e = T(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
    };
    var sp = {
      bundleType: 0,
      version: "19.2.0",
      rendererPackageName: "react-dom",
      currentDispatcherRef: D,
      reconcilerVersion: "19.2.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var ju = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!ju.isDisabled && ju.supportsFiber) try {
        fa = ju.inject(sp), gt = ju;
      } catch {
      }
    }
    return ni.createRoot = function(e, t) {
      if (!d(e)) throw Error(c(299));
      var l = false, n = "", a = Gf, i = Yf, o = Xf;
      return t != null && (t.unstable_strictMode === true && (l = true), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Sh(e, 1, false, null, null, l, n, null, a, i, o, Ch), e[_n] = t.current, Jo(e), new hs(t);
    }, ni.hydrateRoot = function(e, t, l) {
      if (!d(e)) throw Error(c(299));
      var n = false, a = "", i = Gf, o = Yf, f = Xf, y = null;
      return l != null && (l.unstable_strictMode === true && (n = true), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (o = l.onCaughtError), l.onRecoverableError !== void 0 && (f = l.onRecoverableError), l.formState !== void 0 && (y = l.formState)), t = Sh(e, 1, true, t, l ?? null, n, a, y, i, o, f, Ch), t.context = xh(null), l = t.current, n = Et(), n = lc(n), a = Ol(n), a.callback = null, Nl(l, a, n), l = n, t.current.lanes = l, ha(t, l), Ft(t), e[_n] = t.current, Jo(e), new Bu(t);
    }, ni.version = "19.2.0", ni;
  }
  var Hh;
  function gp() {
    if (Hh) return ms.exports;
    Hh = 1;
    function u() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (s) {
        console.error(s);
      }
    }
    return u(), ms.exports = bp(), ms.exports;
  }
  v_ = gp();
  const Hu = 8, Lu = 4, Lh = 400;
  let qh = false, gl = null, Vu, di = null;
  function vp(u) {
    var _a;
    const s = (_a = u.getAttribute) == null ? void 0 : _a.call(u, "data-tooltip-delay");
    if (s) {
      const d = parseFloat(s);
      if (Number.isFinite(d)) return d;
    }
    const r = getComputedStyle(document.documentElement).getPropertyValue("--tooltip-show-delay").trim();
    if (!r) return Lh;
    const c = r.endsWith("ms") ? parseFloat(r) : r.endsWith("s") ? parseFloat(r) * 1e3 : parseFloat(r);
    return Number.isFinite(c) ? c : Lh;
  }
  function _p() {
    return gl || (gl = document.createElement("div"), gl.className = "ui-tooltip", gl.setAttribute("role", "tooltip")), gl;
  }
  function _m() {
    Vu !== void 0 && (clearTimeout(Vu), Vu = void 0);
  }
  function ia() {
    _m(), di = null, gl && gl.parentNode && gl.parentNode.removeChild(gl);
  }
  function Sp(u) {
    const s = u.getAttribute("data-tooltip");
    if (!s) return;
    const r = u.getAttribute("data-tooltip-placement") || "top", c = _p();
    c.textContent = s, c.parentNode && c.parentNode.removeChild(c), c.style.left = "0", c.style.top = "0", c.style.visibility = "hidden", document.body.appendChild(c);
    const d = u.getBoundingClientRect(), m = c.offsetWidth, h = c.offsetHeight, p = d.left + d.width / 2, x = d.top + d.height / 2;
    let T, v;
    switch (r) {
      case "bottom":
        T = p - m / 2, v = d.bottom + Hu;
        break;
      case "left":
        T = d.left - Hu - m, v = x - h / 2;
        break;
      case "right":
        T = d.right + Hu, v = x - h / 2;
        break;
      case "top":
      default:
        T = p - m / 2, v = d.top - Hu - h;
        break;
    }
    const b = document.documentElement.clientWidth, A = document.documentElement.clientHeight;
    T = Math.max(Lu, Math.min(T, b - m - Lu)), v = Math.max(Lu, Math.min(v, A - h - Lu)), c.style.left = `${Math.round(T)}px`, c.style.top = `${Math.round(v)}px`, c.style.visibility = "visible";
  }
  function Pu(u) {
    const s = u.target;
    return s && typeof s.closest == "function" ? s.closest("[data-tooltip]") : null;
  }
  function Sm(u) {
    u !== di && (di = u, _m(), Vu = setTimeout(() => Sp(u), vp(u)));
  }
  function xp(u) {
    const s = Pu(u);
    s && Sm(s);
  }
  function wp(u) {
    const s = Pu(u);
    if (!s || s !== di) return;
    const r = u.relatedTarget;
    r && s.contains(r) || ia();
  }
  function Tp(u) {
    const s = Pu(u);
    s && Sm(s);
  }
  function Ap(u) {
    const s = Pu(u);
    s && s === di && ia();
  }
  function Ep(u) {
    u.key === "Escape" && ia();
  }
  xm = function() {
    qh || typeof document > "u" || (qh = true, document.addEventListener("pointerover", xp, true), document.addEventListener("pointerout", wp, true), document.addEventListener("pointerdown", ia, true), document.addEventListener("focusin", Tp, true), document.addEventListener("focusout", Ap, true), document.addEventListener("keydown", Ep, true), document.addEventListener("scroll", ia, true), window.addEventListener("blur", ia));
  };
  xm();
  xm();
  function wm(u) {
    var s, r, c = "";
    if (typeof u == "string" || typeof u == "number") c += u;
    else if (typeof u == "object") if (Array.isArray(u)) {
      var d = u.length;
      for (s = 0; s < d; s++) u[s] && (r = wm(u[s])) && (c && (c += " "), c += r);
    } else for (r in u) u[r] && (c && (c += " "), c += r);
    return c;
  }
  function zp() {
    for (var u, s, r = 0, c = "", d = arguments.length; r < d; r++) (u = arguments[r]) && (s = wm(u)) && (c && (c += " "), c += s);
    return c;
  }
  const Mp = 4096, Op = 16, Gh = 5, Np = 64, Dp = 0.14, Cp = 0.14, Rp = 0.1, Bp = 3, jp = 3, Yh = (u) => Math.max(1, Math.round(u * Dp)), Xh = (u) => Math.max(2, Math.round(u * Cp)), Up = 32, Hp = {
    1: 22,
    2: 19,
    3: 14
  }, Lp = 10, Qh = "#111111", qp = "#ffffff", Gp = "#ffffff", Yp = "#333333";
  function Xp(u) {
    return u ? Array.isArray(u) ? u : Array.from(u) : [];
  }
  function Qp(u, s) {
    const r = Hp[u.length] ?? Lp;
    return Math.max(6, Math.round(r * (s / Up)));
  }
  function qu({ active: u, disabled: s, onToggle: r, children: c }) {
    return g.jsx("button", {
      type: "button",
      className: zp("node-bit-ctl-btn", {
        active: u
      }),
      disabled: s,
      onMouseDown: (d) => d.stopPropagation(),
      onClick: (d) => {
        d.stopPropagation(), r();
      },
      children: c
    });
  }
  const Tm = q.memo(function({ bitField: s = [], color: r, colorMap: c, maxBits: d = Mp, squarePx: m, interactive: h = true, labelMode: p = "value", colorCoded: x = false, borderPx: T, gapPx: v = Bp, paddingPx: b = jp, showChrome: A = true, colorMapTintsInactive: C = false, colorMapColorGaps: U = false, gapColorPx: w }) {
    const [O, L] = q.useState(x), [G, K] = q.useState(p === "index"), [ce, W] = q.useState(false), [oe, k] = q.useState(false), se = h ? O : x, Ne = h ? G ? "index" : "value" : p, tt = h ? ce : false, lt = h ? oe : false, He = q.useRef(null), [Re, re] = q.useState(m ?? Op), [ye, D] = q.useState(0), Y = Xp(s);
    if (Y.length === 0) return null;
    const H = Y.length, X = H > d ? Y.slice(0, d) : Y, V = H > d;
    let be = 0;
    for (const le of Y) le === 1 && be++;
    const ee = X.length;
    q.useLayoutEffect(() => {
      if (m != null) return;
      const le = He.current;
      if (!le) return;
      const ae = () => {
        const st = le.clientWidth, Lt = le.clientHeight;
        if (!(st <= 0 || Lt <= 0 || ee <= 0)) {
          D(st);
          for (let Ce = Np; Ce >= Gh; Ce--) {
            const zt = Yh(Ce), _l = Xh(Ce), gn = st - 2 * _l, vn = Lt - 2 * _l;
            if (gn < Ce || vn < Ce) continue;
            const Me = Math.floor((gn + zt) / (Ce + zt));
            if (Me < 1) continue;
            if (Math.ceil(ee / Me) * (Ce + zt) - zt <= vn) {
              re(Ce);
              return;
            }
          }
          re(Gh);
        }
      };
      ae();
      const $ = new ResizeObserver(ae);
      return $.observe(le), () => $.disconnect();
    }, [
      m,
      ee
    ]);
    const I = m == null, ne = m ?? Re, Le = I ? Yh(ne) : v, qe = I ? Xh(ne) : b, Ze = (le, ae) => {
      if (le === 1) return se ? (c == null ? void 0 : c[ae]) ?? r ?? Qh : Qh;
      if (se && C) {
        const $ = c == null ? void 0 : c[ae];
        if ($) return `color-mix(in srgb, ${$} 20%, transparent)`;
      }
      return qp;
    }, Ke = !I && w != null ? w : Le / 2, De = (le) => {
      if (!se || !U) return;
      const ae = c == null ? void 0 : c[le];
      return ae ? `0 0 0 ${Ke}px ${ae}` : void 0;
    };
    let ge = X.map((le, ae) => ae);
    Ne === "index" && (tt && (ge = ge.slice().sort((le, ae) => (X[ae] ?? 0) - (X[le] ?? 0))), lt && (ge = ge.filter((le) => (X[le] ?? 0) === 1)));
    const Te = T ?? (I ? Math.max(1, Math.round(ne * Rp)) : ne >= 20 ? 3 : 2), Ge = I && ye > 0 ? Math.max(9, Math.min(18, Math.round(ye * 0.045))) : void 0, Zt = !G;
    return g.jsxs("div", {
      className: "node-bit-panel",
      children: [
        A && g.jsxs("div", {
          className: "node-bit-panel-title",
          style: Ge ? {
            fontSize: Ge
          } : void 0,
          children: [
            "Internal State ",
            V && `(showing ${d} of ${H})`
          ]
        }),
        h && g.jsxs("div", {
          className: "node-bit-panel-controls chip-controls nodrag",
          style: Ge ? {
            fontSize: Ge
          } : void 0,
          children: [
            g.jsx(qu, {
              active: O,
              onToggle: () => L((le) => !le),
              children: "Color-Coded"
            }),
            g.jsx(qu, {
              active: G,
              onToggle: () => K((le) => !le),
              children: "Show Index"
            }),
            g.jsx(qu, {
              active: ce,
              disabled: Zt,
              onToggle: () => W((le) => !le),
              children: "Sort by Active"
            }),
            g.jsx(qu, {
              active: oe,
              disabled: Zt,
              onToggle: () => k((le) => !le),
              children: "Hide 0s"
            })
          ]
        }),
        g.jsx("div", {
          className: "node-bit-squares",
          ref: He,
          style: {
            gap: Le,
            padding: qe
          },
          children: ge.map((le) => {
            const ae = X[le] ?? 0, $ = Ne === "none" ? "" : String(Ne === "index" ? le : ae);
            return g.jsx("div", {
              className: "node-bit-square",
              "data-tooltip": `bit ${le}: ${ae}`,
              style: {
                width: ne,
                height: ne,
                background: Ze(ae, le),
                color: ae === 1 ? Gp : Yp,
                border: `${Te}px solid #000`,
                ...De(le) ? {
                  boxShadow: De(le)
                } : {},
                fontSize: $ ? Qp($, ne) : 0
              },
              children: $
            }, le);
          })
        }),
        A && g.jsx("div", {
          className: "node-bit-panel-footer",
          children: g.jsxs("span", {
            children: [
              be,
              " / ",
              H,
              " active bits"
            ]
          })
        })
      ]
    });
  });
  q.memo(function({ bitfield: s = [], maxBits: r = 4096, bitFieldParams: c = {}, color: d, colorMap: m, interactive: h, labelMode: p, colorCoded: x, borderPx: T, gapPx: v, paddingPx: b, showChrome: A, squarePx: C, colorMapTintsInactive: U, colorMapColorGaps: w, gapColorPx: O }) {
    return !s || s.length === 0 ? null : g.jsx(Tm, {
      bitField: s,
      maxBits: r,
      numDepth: (c == null ? void 0 : c.num_dps) ?? 1,
      blockType: c == null ? void 0 : c.type,
      color: d,
      colorMap: m,
      interactive: h,
      labelMode: p,
      colorCoded: x,
      borderPx: T,
      gapPx: v,
      paddingPx: b,
      showChrome: A,
      squarePx: C,
      colorMapTintsInactive: U,
      colorMapColorGaps: w,
      gapColorPx: O
    });
  });
  q.memo(function({ bitfield: s = [], maxBits: r = 4096, bitFieldParams: c = {}, color: d, colorMap: m, interactive: h, labelMode: p, colorCoded: x, borderPx: T, gapPx: v, paddingPx: b, showChrome: A, squarePx: C, colorMapTintsInactive: U }) {
    return !s || s.length === 0 ? null : g.jsx(Tm, {
      bitField: s,
      maxBits: r,
      numDepth: (c == null ? void 0 : c.num_dps) ?? 1,
      blockType: c == null ? void 0 : c.type,
      color: d,
      colorMap: m,
      interactive: h,
      labelMode: p,
      colorCoded: x,
      borderPx: T,
      gapPx: v,
      paddingPx: b,
      showChrome: A,
      squarePx: C,
      colorMapTintsInactive: U
    });
  });
  const Ns = [
    "#d60000",
    "#8c3bff",
    "#018700",
    "#00acc6",
    "#e6a500",
    "#ff7ed1",
    "#6b004f",
    "#573b00",
    "#005659",
    "#15e18c",
    "#0000dd",
    "#a17569",
    "#bcb6ff",
    "#bf03b8",
    "#645472",
    "#790000",
    "#0774d8",
    "#729a7c",
    "#ff7752",
    "#004b00",
    "#8e7b01",
    "#f2007b",
    "#8eba00",
    "#a57bb8",
    "#5901a3",
    "#e2afaf",
    "#a03a52",
    "#a1c8c8",
    "#9e4b00",
    "#546744",
    "#bac389",
    "#5e7b87",
    "#60383b",
    "#8287ff",
    "#380000",
    "#e252ff",
    "#2f5282",
    "#7ecaff",
    "#c4668e",
    "#008069",
    "#919eb6",
    "#cc7407",
    "#7e2a8e",
    "#00bda3",
    "#2db152",
    "#4d33ff",
    "#00e400",
    "#ff00cd",
    "#c85748",
    "#e49cff",
    "#1ca1ff",
    "#6e70aa",
    "#c89a69",
    "#77563b",
    "#03dae6",
    "#c1a3c3",
    "#ff6989",
    "#ba00fd",
    "#915280",
    "#9e0174",
    "#93a14f",
    "#364424",
    "#af6dff",
    "#596d00",
    "#ff3146",
    "#828056",
    "#006d2d",
    "#8956af",
    "#5949a3",
    "#773416",
    "#85c39a",
    "#5e1123",
    "#d48580",
    "#a32818",
    "#0087b1",
    "#ca0044",
    "#ffa056",
    "#eb4d00",
    "#6b9700",
    "#528549",
    "#755900",
    "#c8c33f",
    "#91d370",
    "#4b9793",
    "#4d230c",
    "#60345b",
    "#8300cf",
    "#8a0031",
    "#9e6e31",
    "#ac8399",
    "#c63189",
    "#015438",
    "#086b83",
    "#87a8eb",
    "#6466ef",
    "#c35dba",
    "#019e70",
    "#805059",
    "#826e8c",
    "#b3bfda",
    "#b89028",
    "#ff97b1",
    "#a793e1",
    "#698cbd",
    "#4b4f01",
    "#4801cc",
    "#60006e",
    "#446966",
    "#9c5642",
    "#7bacb5",
    "#cd83bc",
    "#0054c1",
    "#7b2f4f",
    "#fb7c00",
    "#34bf00",
    "#ff9c87",
    "#e1b669",
    "#526077",
    "#5b3a7c",
    "#eda5da",
    "#ef52a3",
    "#5d7e69",
    "#c3774f",
    "#d14867",
    "#6e00eb",
    "#1f3400",
    "#c14103",
    "#6dd4c1",
    "#46709e",
    "#a101c3",
    "#0a8289",
    "#afa501",
    "#a55b6b",
    "#fd77ff",
    "#8a85ae",
    "#c67ee8",
    "#9aaa85",
    "#876bd8",
    "#01baf6",
    "#af5dd1",
    "#59502a",
    "#b5005e",
    "#7cb569",
    "#4985ff",
    "#00c182",
    "#d195aa",
    "#a34ba8",
    "#e205e2",
    "#16a300",
    "#382d00",
    "#832f33",
    "#5d95aa",
    "#590f00",
    "#7b4600",
    "#6e6e31",
    "#335726",
    "#4d60b5",
    "#a19564",
    "#623f28",
    "#44d457",
    "#70aacf",
    "#2d6b4d",
    "#72af9e",
    "#fd1500",
    "#d8b391",
    "#79893b",
    "#7cc6d8",
    "#db9036",
    "#eb605d",
    "#eb5ed4",
    "#e47ba7",
    "#a56b97",
    "#009744",
    "#ba5e21",
    "#bcac52",
    "#87d82f",
    "#873472",
    "#aea8d1",
    "#e28c62",
    "#d1b1eb",
    "#36429e",
    "#3abdc1",
    "#669c4d",
    "#9e0399",
    "#4d4d79",
    "#7b4b85",
    "#c33431",
    "#8c6677",
    "#aa002d",
    "#7e0175",
    "#01824d",
    "#724967",
    "#727790",
    "#6e0099",
    "#a0ba52",
    "#e16e31",
    "#c46970",
    "#6d5b95",
    "#a33b74",
    "#316200",
    "#87004f",
    "#335769",
    "#ba8c7c",
    "#1859ff",
    "#909101",
    "#2b8ad4",
    "#1626ff",
    "#21d3ff",
    "#a390af",
    "#8a6d4f",
    "#5d213d",
    "#db03b3",
    "#6e56ca",
    "#642821",
    "#ac7700",
    "#a3bff6",
    "#b58346",
    "#9738db",
    "#b15093",
    "#7242a3",
    "#878ed1",
    "#8970b1",
    "#6baf36",
    "#5979c8",
    "#c69eff",
    "#56831a",
    "#00d6a7",
    "#824638",
    "#11421c",
    "#59aa75",
    "#905b01",
    "#f64470",
    "#ff9703",
    "#e14231",
    "#ba91cf",
    "#34574d",
    "#f7807c",
    "#903400",
    "#b3cd00",
    "#2d9ed3",
    "#798a9e",
    "#50807c",
    "#c136d6",
    "#eb0552",
    "#b8ac7e",
    "#487031",
    "#839564",
    "#d89c89",
    "#0064a3",
    "#4b9077",
    "#8e6097",
    "#ff5238",
    "#a7423b",
    "#006e70",
    "#97833d",
    "#dbafc8"
  ];
  function Am(u) {
    return Ns[u % Ns.length];
  }
  const Vp = [
    "#a7423b",
    "#006e70",
    "#97833d",
    "#dbafc8"
  ], Zp = "#eeeeee", Vh = "#000000", Kp = "#111111", kp = "#888888", Jp = 8, $p = 4, Fp = 26, Wp = 6, Ip = 6, Pp = 16, Em = {
    fontSize: Jp,
    axisWidth: 1,
    tickLen: 4,
    gridLeft: Fp,
    gridRight: Wp,
    gridTop: Ip,
    gridBottom: Pp
  };
  function eb(u, s) {
    if (u <= 0 || s <= 0) return Em;
    const r = Math.min(u, s), c = Math.max(8, Math.min(22, Math.round(r * 0.075)));
    return {
      fontSize: c,
      axisWidth: c >= 15 ? 2 : 1,
      tickLen: Math.max(3, Math.round(c * 0.55)),
      gridLeft: Math.round(c * 2.4 + 10),
      gridRight: Math.max(6, Math.round(c * 0.7)),
      gridTop: Math.max(6, Math.round(c * 0.7)),
      gridBottom: Math.round(c * 1.7 + 6)
    };
  }
  function tb(u, s) {
    if (!u) return;
    if (!u.includes("var(")) return u;
    if (!s) return;
    const r = s.style.color;
    s.style.color = u;
    const c = getComputedStyle(s).color;
    return s.style.color = r, c || void 0;
  }
  function lb(u, s, r, c, d, m, h, p = Em) {
    const x = Array.isArray(u[0].value) || ArrayBuffer.isView(u[0].value), T = {
      type: "value",
      axisLine: {
        lineStyle: {
          color: Vh,
          width: p.axisWidth
        }
      },
      axisTick: {
        show: true,
        length: p.tickLen,
        lineStyle: {
          color: Vh,
          width: p.axisWidth
        }
      },
      axisLabel: {
        fontSize: p.fontSize,
        color: Kp,
        hideOverlap: true,
        margin: Math.round(p.fontSize * 0.55)
      }
    };
    let v;
    if (x) {
      const C = u[0].value.length;
      v = Array.from({
        length: C
      }, (U, w) => {
        const O = (h == null ? void 0 : h[w]) ?? Am(w);
        return {
          type: "line",
          showSymbol: false,
          smooth: false,
          step: d ?? false,
          ...m ? {
            stack: "cls"
          } : {},
          data: u.map((L) => {
            const G = L.value;
            return [
              L.step,
              G[w] ?? 0
            ];
          }),
          lineStyle: {
            width: m ? 1 : 1.5,
            color: O
          },
          itemStyle: {
            color: O
          },
          areaStyle: {
            color: O,
            opacity: m ? 0.85 : 0.12
          }
        };
      });
    } else v = [
      {
        type: "line",
        showSymbol: false,
        smooth: false,
        step: d ?? false,
        data: u.map((C) => [
          C.step,
          C.value
        ]),
        lineStyle: {
          width: 2,
          color: s
        },
        itemStyle: {
          color: s
        },
        areaStyle: {
          color: s,
          opacity: 0.12
        }
      }
    ];
    const b = r != null && c != null, A = {
      ...T,
      scale: !b && !m,
      splitLine: {
        show: true,
        lineStyle: {
          color: kp,
          opacity: 0.4
        }
      },
      ...b ? {
        min: r,
        max: c,
        interval: (c - r) / 2,
        axisLabel: {
          ...T.axisLabel,
          showMinLabel: true,
          showMaxLabel: true
        }
      } : {}
    };
    return {
      animation: false,
      backgroundColor: "transparent",
      grid: {
        left: p.gridLeft,
        right: p.gridRight,
        top: p.gridTop,
        bottom: p.gridBottom,
        containLabel: false
      },
      xAxis: {
        ...T,
        splitLine: {
          show: false
        },
        min: "dataMin",
        max: "dataMax"
      },
      yAxis: A,
      series: v
    };
  }
  q.memo(function({ data: s = [], color: r, height: c, width: d, yMin: m, yMax: h, step: p, stacked: x, seriesColors: T }) {
    const v = q.useRef(null), b = q.useRef(null), A = q.useRef(null), [C, U] = q.useState({
      w: 0,
      h: 0
    });
    q.useEffect(() => {
      if (!v.current) return;
      const L = gm(v.current) ?? vm(v.current, void 0, {
        renderer: "canvas"
      });
      return b.current = L, () => {
        L.dispose(), b.current = null;
      };
    }, []), q.useEffect(() => {
      const L = b.current;
      if (!L) return;
      if (d != null && c != null) {
        L.resize({
          width: d,
          height: c
        }), U({
          w: d,
          h: c
        });
        return;
      }
      const G = v.current;
      if (!G) return;
      const K = () => {
        L.resize(), U({
          w: G.clientWidth,
          h: G.clientHeight
        });
      }, ce = new ResizeObserver(K);
      return ce.observe(G), K(), () => ce.disconnect();
    }, [
      d,
      c
    ]), q.useEffect(() => {
      const L = b.current;
      if (!L) return;
      if (!s || s.length === 0) {
        L.clear();
        return;
      }
      const G = tb(r, v.current) ?? Am(0), K = eb(C.w, C.h);
      L.setOption(lb(s, G, m, h, p, x, T, K), {
        notMerge: true
      });
    }, [
      s,
      r,
      m,
      h,
      p,
      x,
      T,
      C
    ]);
    const w = {
      background: Zp,
      border: "2px solid #333333",
      borderRadius: "6px",
      padding: `${$p}px`,
      boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.40), inset 0 1px 0 rgba(255, 255, 255, 0.55)",
      pointerEvents: "none",
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      overflow: "hidden",
      flex: "1 1 auto",
      minWidth: 0,
      minHeight: 0
    }, O = d != null && c != null ? {
      width: `${d}px`,
      height: `${c}px`
    } : {
      width: "100%",
      height: "100%"
    };
    return s.length === 0 ? g.jsx("div", {
      ref: A,
      className: "node-plot-empty",
      style: {
        ...w,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "11px",
        color: "#555"
      },
      children: "No data available"
    }) : g.jsx("div", {
      ref: A,
      className: "node-echarts-plot",
      style: w,
      children: g.jsx("div", {
        ref: v,
        style: O
      })
    });
  });
  const nb = "" + new URL("dcc_bundle_bg-D8vw1f42.wasm", import.meta.url).href, ab = async (u = {}, s) => {
    let r;
    if (s.startsWith("data:")) {
      const c = s.replace(/^data:.*?base64,/, "");
      let d;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") d = Buffer.from(c, "base64");
      else if (typeof atob == "function") {
        const m = atob(c);
        d = new Uint8Array(m.length);
        for (let h = 0; h < m.length; h++) d[h] = m.charCodeAt(h);
      } else throw new Error("Cannot decode base64-encoded data URL");
      r = await WebAssembly.instantiate(d, u);
    } else {
      const c = await fetch(s), d = c.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && d.startsWith("application/wasm")) r = await WebAssembly.instantiateStreaming(c, u);
      else {
        const m = await c.arrayBuffer();
        r = await WebAssembly.instantiate(m, u);
      }
    }
    return r.instance.exports;
  };
  let Ie;
  function ib(u) {
    Ie = u;
  }
  function pi(u) {
    const s = Ie.__externref_table_alloc();
    return Ie.__wbindgen_export_2.set(s, u), s;
  }
  function bi(u, s) {
    try {
      return u.apply(this, s);
    } catch (r) {
      const c = pi(r);
      Ie.__wbindgen_exn_store(c);
    }
  }
  let Gu = null;
  function oi() {
    return (Gu === null || Gu.byteLength === 0) && (Gu = new Uint8Array(Ie.memory.buffer)), Gu;
  }
  let Zu = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  Zu.decode();
  const ub = 2146435072;
  let bs = 0;
  function cb(u, s) {
    return bs += s, bs >= ub && (Zu = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), Zu.decode(), bs = s), Zu.decode(oi().subarray(u, u + s));
  }
  function ec(u, s) {
    return u = u >>> 0, cb(u, s);
  }
  function zm(u, s) {
    return u = u >>> 0, oi().subarray(u / 1, u / 1 + s);
  }
  let hi = 0;
  const si = new TextEncoder();
  "encodeInto" in si || (si.encodeInto = function(u, s) {
    const r = si.encode(u);
    return s.set(r), {
      read: u.length,
      written: r.length
    };
  });
  function Rs(u, s, r) {
    if (r === void 0) {
      const p = si.encode(u), x = s(p.length, 1) >>> 0;
      return oi().subarray(x, x + p.length).set(p), hi = p.length, x;
    }
    let c = u.length, d = s(c, 1) >>> 0;
    const m = oi();
    let h = 0;
    for (; h < c; h++) {
      const p = u.charCodeAt(h);
      if (p > 127) break;
      m[d + h] = p;
    }
    if (h !== c) {
      h !== 0 && (u = u.slice(h)), d = r(d, c, c = h + u.length * 3, 1) >>> 0;
      const p = oi().subarray(d + h, d + c), x = si.encodeInto(u, p);
      h += x.written, d = r(d, c, h, 1) >>> 0;
    }
    return hi = h, d;
  }
  let aa = null;
  function Ju() {
    return (aa === null || aa.buffer.detached === true || aa.buffer.detached === void 0 && aa.buffer !== Ie.memory.buffer) && (aa = new DataView(Ie.memory.buffer)), aa;
  }
  function gi(u) {
    return u == null;
  }
  function Zh(u) {
    const s = Ie.__wbindgen_export_2.get(u);
    return Ie.__externref_table_dealloc(u), s;
  }
  __ = function(u) {
    const s = Rs(u, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), r = hi, c = Ie.analyze_mixed_encoder_configs(s, r);
    if (c[2]) throw Zh(c[1]);
    return Zh(c[0]);
  };
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((u) => Ie.__wbg_wasmnetwork_free(u >>> 0, 1));
  function ob() {
    return bi(function(u, s) {
      return u.call(s);
    }, arguments);
  }
  function sb() {
    return bi(function(u, s, r) {
      return u.call(s, r);
    }, arguments);
  }
  function rb(u) {
    return u.crypto;
  }
  function fb(u, s) {
    let r, c;
    try {
      r = u, c = s, console.error(ec(u, s));
    } finally {
      Ie.__wbindgen_free(r, c, 1);
    }
  }
  function db() {
    return bi(function(u, s) {
      u.getRandomValues(s);
    }, arguments);
  }
  function hb(u) {
    return u.length;
  }
  function mb(u) {
    return u.msCrypto;
  }
  function yb() {
    return new Error();
  }
  function pb(u, s) {
    return new Function(ec(u, s));
  }
  function bb(u) {
    return new Uint8Array(u >>> 0);
  }
  function gb(u) {
    return u.node;
  }
  function vb(u) {
    return u.process;
  }
  function _b(u, s, r) {
    Uint8Array.prototype.set.call(zm(u, s), r);
  }
  function Sb() {
    return bi(function(u, s) {
      u.randomFillSync(s);
    }, arguments);
  }
  function xb() {
    return bi(function() {
      return module.require;
    }, arguments);
  }
  function wb(u, s) {
    const r = s.stack, c = Rs(r, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), d = hi;
    Ju().setInt32(u + 4, d, true), Ju().setInt32(u + 0, c, true);
  }
  function Tb() {
    const u = typeof global > "u" ? null : global;
    return gi(u) ? 0 : pi(u);
  }
  function Ab() {
    const u = typeof globalThis > "u" ? null : globalThis;
    return gi(u) ? 0 : pi(u);
  }
  function Eb() {
    const u = typeof self > "u" ? null : self;
    return gi(u) ? 0 : pi(u);
  }
  function zb() {
    const u = typeof window > "u" ? null : window;
    return gi(u) ? 0 : pi(u);
  }
  function Mb(u, s, r) {
    return u.subarray(s >>> 0, r >>> 0);
  }
  function Ob(u) {
    return u.versions;
  }
  function Nb(u) {
    return typeof u == "function";
  }
  function Db(u) {
    const s = u;
    return typeof s == "object" && s !== null;
  }
  function Cb(u) {
    return typeof u == "string";
  }
  function Rb(u) {
    return u === void 0;
  }
  function Bb(u, s) {
    const r = s, c = typeof r == "string" ? r : void 0;
    var d = gi(c) ? 0 : Rs(c, Ie.__wbindgen_malloc, Ie.__wbindgen_realloc), m = hi;
    Ju().setInt32(u + 4, m, true), Ju().setInt32(u + 0, d, true);
  }
  function jb(u, s) {
    throw new Error(ec(u, s));
  }
  function Ub(u, s) {
    return ec(u, s);
  }
  function Hb(u, s) {
    return zm(u, s);
  }
  function Lb() {
    const u = Ie.__wbindgen_export_2, s = u.grow(4);
    u.set(0, void 0), u.set(s + 0, void 0), u.set(s + 1, null), u.set(s + 2, true), u.set(s + 3, false);
  }
  URL = globalThis.URL;
  const Q = await ab({
    "./dcc_bundle_bg.js": {
      __wbg_new_8a6f238a6ece86ea: yb,
      __wbg_stack_0ed75d68575b0f3c: wb,
      __wbg_error_7534b8e9a36f1ab4: fb,
      __wbg_crypto_574e78ad8b13b65f: rb,
      __wbg_process_dc0fbacc7c1c06f7: vb,
      __wbg_versions_c01dfd4722a88165: Ob,
      __wbg_node_905d3e251edff8a2: gb,
      __wbg_msCrypto_a61aeb35a24c1329: mb,
      __wbg_require_60cc747a6bc5215a: xb,
      __wbg_randomFillSync_ac0988aba3254290: Sb,
      __wbg_getRandomValues_b8f5dbd5f3995a9e: db,
      __wbg_newnoargs_254190557c45b4ec: pb,
      __wbg_length_6bb7e81f9d7713e4: hb,
      __wbg_prototypesetcall_3d4a26c1ed734349: _b,
      __wbg_newwithlength_a167dcc7aaa3ba77: bb,
      __wbg_subarray_70fd07feefe14294: Mb,
      __wbg_static_accessor_GLOBAL_THIS_f0a4409105898184: Ab,
      __wbg_call_13410aac570ffff7: ob,
      __wbg_static_accessor_SELF_995b214ae681ff99: Eb,
      __wbg_static_accessor_GLOBAL_8921f820c2ce3f12: Tb,
      __wbg_static_accessor_WINDOW_cde3890479c675ea: zb,
      __wbg_call_a5400b25a865cfd8: sb,
      __wbg_wbindgenstringget_0f16a6ddddef376f: Bb,
      __wbg_wbindgenthrow_451ec1a8469d7eb6: jb,
      __wbg_wbindgenisobject_307a53c6bd97fbf8: Db,
      __wbg_wbindgenisstring_d4fa939789f003b0: Cb,
      __wbg_wbindgenisfunction_8cee7dce3725ae74: Nb,
      __wbg_wbindgenisundefined_c4b71d073b92f3c5: Rb,
      __wbindgen_init_externref_table: Lb,
      __wbindgen_cast_cb9088102bce6b30: Hb,
      __wbindgen_cast_2241b6af4c4b2941: Ub
    }
  }, nb), qb = Q.memory, Gb = Q.__wbg_wasmnetwork_free, Yb = Q.analyze_mixed_encoder_configs, Xb = Q.analyze_multi_encoder, Qb = Q.analyze_multi_encoder_configs, Vb = Q.analyze_periodic_encoder_configs, Zb = Q.analyze_periodic_scalar_multi_encoder, Kb = Q.analyze_tapering_encoder, kb = Q.analyze_tapering_encoder_configs, Jb = Q.encode_scalar_fixed, $b = Q.encode_scalar_periodic, Fb = Q.wasmnetwork_add_constant_datasource, Wb = Q.wasmnetwork_add_context_learner, Ib = Q.wasmnetwork_add_datasource_from_config, Pb = Q.wasmnetwork_add_discrete_datasource_from_config, eg = Q.wasmnetwork_add_discrete_transformer, tg = Q.wasmnetwork_add_fixed_weight_transformer, lg = Q.wasmnetwork_add_multi_layer_datasource, ng = Q.wasmnetwork_add_pattern_classifier, ag = Q.wasmnetwork_add_pattern_pooler, ig = Q.wasmnetwork_add_periodic_cell_transformer, ug = Q.wasmnetwork_add_periodic_scalar_transformer, cg = Q.wasmnetwork_add_persistence_transformer, og = Q.wasmnetwork_add_place_cell_transformer, sg = Q.wasmnetwork_add_randomized_place_cell_transformer, rg = Q.wasmnetwork_add_scalar_transformer, fg = Q.wasmnetwork_add_sequence_learner, dg = Q.wasmnetwork_add_sine_datasource, hg = Q.wasmnetwork_add_square_datasource, mg = Q.wasmnetwork_add_tapering_weight_transformer, yg = Q.wasmnetwork_build, pg = Q.wasmnetwork_connect_discrete_source, bg = Q.wasmnetwork_connect_label_source, gg = Q.wasmnetwork_connect_scalar_source, vg = Q.wasmnetwork_connect_to_context, _g = Q.wasmnetwork_connect_to_context_with_offset, Sg = Q.wasmnetwork_connect_to_input, xg = Q.wasmnetwork_connect_to_input_with_offset, wg = Q.wasmnetwork_encode_scalar, Tg = Q.wasmnetwork_encode_scalars_batch, Ag = Q.wasmnetwork_execute, Eg = Q.wasmnetwork_export_config, zg = Q.wasmnetwork_export_config_canonical, Mg = Q.wasmnetwork_get_all_block_outputs, Og = Q.wasmnetwork_get_anomaly, Ng = Q.wasmnetwork_get_block_name, Dg = Q.wasmnetwork_get_block_state, Cg = Q.wasmnetwork_get_blocks_info, Rg = Q.wasmnetwork_get_probabilities, Bg = Q.wasmnetwork_get_scalar_value, jg = Q.wasmnetwork_get_state_canonical, Ug = Q.wasmnetwork_get_state_json, Hg = Q.wasmnetwork_get_trace_json, Lg = Q.wasmnetwork_import_config, qg = Q.wasmnetwork_import_config_canonical, Gg = Q.wasmnetwork_init_block, Yg = Q.wasmnetwork_is_recording, Xg = Q.wasmnetwork_new, Qg = Q.wasmnetwork_num_blocks, Vg = Q.wasmnetwork_place_cell_add_cell, Zg = Q.wasmnetwork_place_cell_num_bins, Kg = Q.wasmnetwork_place_cell_remove_cell, kg = Q.wasmnetwork_remove_block, Jg = Q.wasmnetwork_remove_connection, $g = Q.wasmnetwork_set_classifier_label, Fg = Q.wasmnetwork_set_discrete_value, Wg = Q.wasmnetwork_set_multiple_classifier_labels, Ig = Q.wasmnetwork_set_multiple_discrete_values, Pg = Q.wasmnetwork_set_multiple_scalar_values, ev = Q.wasmnetwork_set_scalar_value, tv = Q.wasmnetwork_start_recording, lv = Q.set_panic_hook, nv = Q.wasmnetwork_rebuild, av = Q.__wbindgen_exn_store, iv = Q.__externref_table_alloc, uv = Q.__wbindgen_export_2, cv = Q.__wbindgen_free, ov = Q.__wbindgen_malloc, sv = Q.__wbindgen_realloc, rv = Q.__externref_table_dealloc, Mm = Q.__wbindgen_start, fv = Object.freeze(Object.defineProperty({
    __proto__: null,
    __externref_table_alloc: iv,
    __externref_table_dealloc: rv,
    __wbg_wasmnetwork_free: Gb,
    __wbindgen_exn_store: av,
    __wbindgen_export_2: uv,
    __wbindgen_free: cv,
    __wbindgen_malloc: ov,
    __wbindgen_realloc: sv,
    __wbindgen_start: Mm,
    analyze_mixed_encoder_configs: Yb,
    analyze_multi_encoder: Xb,
    analyze_multi_encoder_configs: Qb,
    analyze_periodic_encoder_configs: Vb,
    analyze_periodic_scalar_multi_encoder: Zb,
    analyze_tapering_encoder: Kb,
    analyze_tapering_encoder_configs: kb,
    encode_scalar_fixed: Jb,
    encode_scalar_periodic: $b,
    memory: qb,
    set_panic_hook: lv,
    wasmnetwork_add_constant_datasource: Fb,
    wasmnetwork_add_context_learner: Wb,
    wasmnetwork_add_datasource_from_config: Ib,
    wasmnetwork_add_discrete_datasource_from_config: Pb,
    wasmnetwork_add_discrete_transformer: eg,
    wasmnetwork_add_fixed_weight_transformer: tg,
    wasmnetwork_add_multi_layer_datasource: lg,
    wasmnetwork_add_pattern_classifier: ng,
    wasmnetwork_add_pattern_pooler: ag,
    wasmnetwork_add_periodic_cell_transformer: ig,
    wasmnetwork_add_periodic_scalar_transformer: ug,
    wasmnetwork_add_persistence_transformer: cg,
    wasmnetwork_add_place_cell_transformer: og,
    wasmnetwork_add_randomized_place_cell_transformer: sg,
    wasmnetwork_add_scalar_transformer: rg,
    wasmnetwork_add_sequence_learner: fg,
    wasmnetwork_add_sine_datasource: dg,
    wasmnetwork_add_square_datasource: hg,
    wasmnetwork_add_tapering_weight_transformer: mg,
    wasmnetwork_build: yg,
    wasmnetwork_connect_discrete_source: pg,
    wasmnetwork_connect_label_source: bg,
    wasmnetwork_connect_scalar_source: gg,
    wasmnetwork_connect_to_context: vg,
    wasmnetwork_connect_to_context_with_offset: _g,
    wasmnetwork_connect_to_input: Sg,
    wasmnetwork_connect_to_input_with_offset: xg,
    wasmnetwork_encode_scalar: wg,
    wasmnetwork_encode_scalars_batch: Tg,
    wasmnetwork_execute: Ag,
    wasmnetwork_export_config: Eg,
    wasmnetwork_export_config_canonical: zg,
    wasmnetwork_get_all_block_outputs: Mg,
    wasmnetwork_get_anomaly: Og,
    wasmnetwork_get_block_name: Ng,
    wasmnetwork_get_block_state: Dg,
    wasmnetwork_get_blocks_info: Cg,
    wasmnetwork_get_probabilities: Rg,
    wasmnetwork_get_scalar_value: Bg,
    wasmnetwork_get_state_canonical: jg,
    wasmnetwork_get_state_json: Ug,
    wasmnetwork_get_trace_json: Hg,
    wasmnetwork_import_config: Lg,
    wasmnetwork_import_config_canonical: qg,
    wasmnetwork_init_block: Gg,
    wasmnetwork_is_recording: Yg,
    wasmnetwork_new: Xg,
    wasmnetwork_num_blocks: Qg,
    wasmnetwork_place_cell_add_cell: Vg,
    wasmnetwork_place_cell_num_bins: Zg,
    wasmnetwork_place_cell_remove_cell: Kg,
    wasmnetwork_rebuild: nv,
    wasmnetwork_remove_block: kg,
    wasmnetwork_remove_connection: Jg,
    wasmnetwork_set_classifier_label: $g,
    wasmnetwork_set_discrete_value: Fg,
    wasmnetwork_set_multiple_classifier_labels: Wg,
    wasmnetwork_set_multiple_discrete_values: Ig,
    wasmnetwork_set_multiple_scalar_values: Pg,
    wasmnetwork_set_scalar_value: ev,
    wasmnetwork_start_recording: tv
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ib(fv);
  Mm();
  const Bs = {
    "encoderType.interval-fixed": {
      title: "Fixed-Weight Encoder",
      short: "Each input lights a contiguous block of exactly w active bits that slides smoothly across the n-bit output as the value increases.",
      body: `A **fixed-weight** encoder lays $n$ overlapping bins across the interval
$[\\text{lo}, \\text{hi}]$ of size $L$. Every input activates **exactly $w$
bins** (constant weight) \u2014 near the edges some bins extend beyond the domain so
the weight stays constant. The canonical bin size is

$$ l = \\frac{w\\,L}{\\,n - w + 1\\,} $$
$$ (w = 1) \\Rightarrow (l = L/n) $$

with the invariant $n \\ge 2w$. Distinguishable regions have uniform width
$L / (n - w + 1)$.

In gnomic terms this is a **covering imbrication** with constant weight: the
overlapping cells tile the range *with overlap* (not a partition). $n$ is the
**grit** (resolution) and $w$ tunes the **focus** \u2014 larger $w$ blurs neighbours
together, so similarity decays smoothly and linearly with distance
(the **SISO** property: similar inputs \u2192 similar outputs). The most predictable
encoder: uniform resolution, constant sparsity, semantic locality \u221D numeric
locality.`
    },
    "encoderType.interval-tapering": {
      title: "Tapering-Weight Encoder",
      short: "Like fixed-weight, but every bin stays inside the bounds, so the active-bit count tapers from w in the middle down to 1 at the edges.",
      body: `A **tapering-weight** encoder keeps **all bins strictly within the bounds**.
Instead of letting edge bins spill past the domain, the active count tapers
from $w$ at the centre to $1$ at each edge. The canonical bin size is

$$ l = \\frac{w\\,L}{\\,n + w - 1\\,} \\qquad (w = 1 \\Rightarrow l = L/n), $$

again with $n \\ge 2w$.

A pure fixed-weight encoder *clips* at the bounds \u2014 distinct edge values
collapse to the same code. Tapering avoids that: boundary inputs stay separable
at the cost of non-constant weight. This is the vault's **region-centered**
interval style \u2014 it desynchronises the boundaries and removes the
large-represented-interval artefact at the ends. Use it when the interesting
signal lives near the range limits; expect varying region widths near the
edges in the **Regions** view.`
    },
    "encoderType.periodic-fixed": {
      title: "Periodic (Fixed-Weight) Encoder",
      short: 'A fixed-weight encoder wrapped on a circle of length "period": values one period apart encode identically.',
      body: `A **periodic** encoder fills one fundamental region of length $P$ with bins
and repeats it (a *grid-like* tiling that "fills up the entire region period").
The wrap is a **modular / abstract interval**

$$ I = \\{\\, a \\mid a \\bmod b \\in [i, j) \\,\\}, $$
$$ \\text{code}(x) = \\text{code}(x + kP),\\; k \\in \\mathbb{Z}. $$

Similarity decays with **circular** distance
$\\min(|\\Delta|,\\ P - |\\Delta|)$, not linear distance.

This is **aliasing by design**: inputs one period apart are *intentionally*
indistinguishable \u2014 the encoder returns the periodic structure of the space,
not absolute position, so uniqueness is only guaranteed within a bounded
locality. Use it for inherently cyclic quantities (phase, angle, time-of-day),
and widen the **Plot X-Range** past $P$ to see the repetition.`
    },
    "encoderType.periodic-cell": {
      title: "Periodic Multi-Scale Cells",
      short: "Stacks several periodic cells with different periods, so nearby values share bits while distant values stay separable across scales.",
      body: `A **multi-scale grid-cell** encoder stacks periodic cells with periods
$P_1 < P_2 < \\dots < P_m$ drawn between **min period** and **max period**.
Each cell occupies a fraction of its period set by the **duty cycle**
($l_\\text{frac}$); the period sets that cell's frequency.

Short periods give fine local discrimination; long periods give global
context. Concatenated, the union is unique over roughly the least common
multiple of the scales \u2014 far larger than any single period (the entorhinal
grid-cell principle, and the vault's $T\\cdot B$ bounded-locality property).
When cells across encoders share a period they **resonate**: high shared weight
and synchronised changes. Locally smooth yet globally unambiguous.`
    },
    "encoderType.periodic-random-cell": {
      title: "Periodic Random Cells",
      short: "Multi-scale periodic cells whose periods (and optionally phases and duty cycle) are randomized from a seed for decorrelated codes.",
      body: `Like the multi-scale periodic encoder, but periods \u2014 and optionally phase
**origins** and **duty cycle** \u2014 are **randomized** from a **seed**. This is
the *Sampling* lattice strategy (random overlaps): it deliberately
**desynchronises** the boundaries, avoiding the cliff-like similarity drops
that harmonically related periods produce. Randomised scales decorrelate the
sub-codes, raising capacity and reducing structured collisions, while the fixed
**seed** keeps the configuration bit-for-bit reproducible. The per-quantity \u{1F3B2}
toggles choose what is sampled vs held constant.`
    },
    "encoderType.interval-random-cell": {
      title: "Interval Random Cells",
      short: "Non-periodic place cells: bin centers are drawn by a seeded uniform random projection over the interval.",
      body: `An **interval random-cell** encoder is a non-periodic *place-cell* scheme.
Following the gnomecode \`RandomizedPlaceCellEncoder\`: draw $n$ bin centres
uniformly at random in $[\\text{lo}, \\text{hi}]$, each a cell of width $l$
($[c - l/2,\\ c + l/2)$); region boundaries are the sorted clipped bin edges.

Consequently **regions are non-uniform and weight varies** across the domain.
The gnomic payoff is that similarities are **strictly local** \u2014 no spurious
global similarity \u2014 at the cost of efficiency versus the aligned fixed-weight
encoder (the price of the *Sampling* strategy). The **seed** makes the random
layout reproducible.`
    },
    "param.n": {
      title: "n \u2014 output size",
      short: "Total number of output bits (bins). Larger n means finer resolution and more distinct codes, at higher dimensionality.",
      body: `**$n$** is the number of bins / output bits \u2014 the vault's **grit**: the
number of cells over the range, *equivalent to resolution when focus is
maximal*. With constant weight $w$, the number of distinguishable codes is
$n - w + 1$ and the bin size is $l = wL/(n - w + 1)$ (fixed-weight). Raising
$n$ increases resolution and capacity linearly while lowering sparsity $w/n$;
the cost is higher-dimensional downstream representations. Invariant: $n \\ge 2w$.`
    },
    "param.w": {
      title: "w \u2014 active bits (weight)",
      short: "How many bits are active per input. Sets sparsity (w/n) and the maximum overlap between nearby values.",
      body: `**$w$** is the **weight** \u2014 the number of simultaneously active bits, held
constant for a well-formed encoding. It sets sparsity $\\rho = w/n$ and the
**maximum overlap** between two codes (full overlap $= w$). It also tunes the
**focus**: a *sharp* (near-discrete) code has near-$k$ bit transitions per
**beat**; a *blurry* (near-continuous) code has near-$0$ transitions per beat,
so larger $w$ \u21D2 smoother similarity falloff and more noise robustness, smaller
$w$ \u21D2 sharper discrimination. Constrained to $w \\le \\lfloor n/2 \\rfloor$
(the $n \\ge 2w$ invariant) so overlap structure stays meaningful.`
    },
    "param.offset": {
      title: "lower bound / offset / origin",
      short: "The smallest input value the encoder resolves; values below it clamp (or wrap, for periodic).",
      body: `The encoder's **lower bound** $\\text{lo}$ \u2014 the origin of the **input
domain** (the space of original input values). For periodic encoders it is the
**origin**: where the lower edge of the fundamental region sits. Inputs below
it are clamped (non-periodic) or wrapped (periodic). It anchors the linear map
$x \\mapsto (x - \\text{lo}) / (\\text{hi} - \\text{lo})$.`
    },
    "param.range": {
      title: "upper bound / range",
      short: "The largest input value the encoder resolves. With the lower bound it sets the domain mapped onto n bits.",
      body: `The **upper bound** $\\text{hi}$, giving the **encoding range**
$L = \\text{hi} - \\text{lo}$ \u2014 "the end-to-end length of the cells covering
the input domain". Local resolution is
$L / (n - w + 1)$ per distinguishable code, so a wider range over the same $n$
means coarser resolution. (For periodic encoders, *range* is instead the
canonical interval before it cycles over to congruent intervals.)`
    },
    "param.period": {
      title: "period / range",
      short: "The wrap length of a periodic encoder: inputs exactly one period apart produce identical codes.",
      body: `The **period** $P$: the length of the fundamental region that is replicated
across the domain. Codes form a **modular / abstract interval**
$I = \\{a \\mid a \\bmod b \\in [i, j)\\}$, so
$\\text{code}(x) = \\text{code}(x + P)$ and similarity decays with **circular**
distance $\\min(|\\Delta|,\\ P - |\\Delta|)$. Pick $P$ to match the true cycle
length; inputs a period apart will *alias* (collide) \u2014 that is the intended
behaviour.`
    },
    "param.min_period": {
      title: "min period",
      short: "Shortest period among the multi-scale cells \u2014 controls the finest local discrimination.",
      body: `The shortest cell period in a multi-scale stack. Smaller values give finer
**local** discrimination but a shorter unambiguous span before that scale
repeats. It sets the fine end of the grid-cell scale ladder.`
    },
    "param.max_period": {
      title: "max period",
      short: "Longest period among the multi-scale cells \u2014 controls the global, unambiguous range.",
      body: `The longest cell period in a multi-scale stack. The combined code is
unambiguous over roughly the least common multiple of the scales (the vault's
$T \\cdot B$ bounded-locality region), so a larger **max period** extends
global range at the cost of coarser large-scale gradients.`
    },
    "param.l_frac": {
      title: "l_frac / duty cycle",
      short: "Fraction of each period a cell occupies. Higher duty cycle \u2192 broader, smoother bumps; lower \u2192 sharper tuning.",
      body: `**$l_\\text{frac}$** is the **duty cycle**: the percentage of the
fundamental region that each cell fills, so active bits per scale
$\\approx l_\\text{frac}\\cdot n_\\text{scale}$. Higher duty cycle widens the
tuning bump (smoother similarity, more overlap \u2014 blurrier **focus**); lower
sharpens it (finer discrimination, sparser codes). The period gives the cell's
frequency; the duty cycle gives its width within that period.`
    },
    "param.l": {
      title: "l (bin size)",
      short: "Length of each cell\u2019s active interval (in input units). Sets the fixed length, and the upper cap when randomizing.",
      body: `**$l$** is the **bin size** \u2014 the width of each place cell\u2019s active
interval, in input units. With *randomize length* off, every cell uses this
constant length; with it on, lengths are sampled from the **seed** up to this
value as the cap. Larger $l$ \u2192 broader, more-overlapping cells (smoother
similarity); smaller $l$ \u2192 sharper, sparser tuning.`
    },
    "param.randomize": {
      title: "randomize (\u{1F3B2})",
      short: "When on, this quantity is sampled from the seed instead of held at the slider value, decorrelating the scales.",
      body: `Toggles whether this quantity is **sampled** (from the **seed**) or held
**constant** at the slider value \u2014 selecting the *Sampling* lattice strategy
for it. Randomising periods/origins decorrelates the sub-codes and
**desynchronises** boundaries (avoiding harmonic cliff-drops), increasing
capacity and reducing structured collisions. The seed keeps any randomised
configuration exactly reproducible.`
    },
    "param.seed": {
      title: "seed",
      short: "Deterministic seed for all randomized quantities. The same seed reproduces an identical encoder.",
      body: `The PRNG **seed** for every randomised quantity. Identical seed + identical
\u{1F3B2} toggles \u21D2 a bit-for-bit identical encoder, so a *Sampling*-strategy
imbrication stays reproducible while you still explore the random family by
changing the seed.`
    },
    "subplot.bins": {
      title: "Bins",
      short: "Each row is an encoder; each cell a bit. Cell opacity shows which bits are active at the cursor value \u2014 the raw code.",
      body: `**Bins** shows the **imbrication** directly: each horizontal row is a
sub-encoder, each cell one bit's receptive field (**cell**) along the x-axis.
Cell **opacity** marks the bits active at the scalar cursor, so dragging the
cursor animates the sliding active window. The *width* of a cell is that bit's
receptive-field size; the *set of lit cells* at any $x$ is the literal output
code \u2014 equivalently, the set of overlapping cells containing $x$ (the
redundant-quantizer view).`
    },
    "subplot.similarity": {
      title: "Input Similarity",
      short: "Bit-overlap between the code at each x and the code at the cursor (and any reference points). Peaks at the reference, decays with distance.",
      body: `**Input similarity** plots, for every $x$, the overlap between
$\\text{code}(x)$ and the reference code(s) \u2014 the normalised count similarity
$|\\,\\text{code}(x) \\cap \\text{code}(r)\\,| / \\min(|{\\cdot}|,|{\\cdot}|)$.

The cursor is one reference; click to pin extra colored references. A
well-formed imbrication has the **monotonic-overlap / SISO** property: a clean
triangular peak that decays smoothly with distance. Periodic encoders show
repeated peaks one period apart (aliasing). Flat or jagged stretches reveal
where semantic locality is lost.`
    },
    "subplot.bits-by-data": {
      title: "Codes",
      short: "The full region \xD7 bit code matrix: one column per bit, one row per coding region. The raw dictionary of outputs.",
      body: `**Codes** is the dense \`region_codes\` matrix: rows are the distinct
coding regions in input order, columns are bits, a filled cell means that bit
is active in that region. It is the encoder's entire output dictionary at a
glance \u2014 diagonal banding \u21D2 a smoothly sliding window (good locality); vertical
stripes \u21D2 always-on/always-off bits; block structure \u21D2 multi-scale
composition.`
    },
    "subplot.projected-similarity": {
      title: "Self-Similarity",
      short: "Every region compared to every other region (overlap matrix). The bright diagonal band width shows the encoder's semantic neighborhood.",
      body: `**Self-similarity** is the full pairwise overlap matrix
$S_{ij} = |\\text{code}_i \\cap \\text{code}_j|$ over all regions, y-axis
clipped to the operating range. A wide bright band around the diagonal \u21D2 broad
generalisation (nearby inputs share many bits); a narrow band \u21D2 sharp
discrimination. Off-diagonal bright blocks expose **aliasing / resonance** \u2014
distant inputs that collide (expected and informative for periodic and
multi-scale encoders).`
    },
    "subplot.decomposition": {
      title: "Regions",
      short: "The input axis split into maximal intervals that share one identical code \u2014 bar width is each region's resolution.",
      body: `**Regions** is the **granulation**: the input axis split into maximal
intervals over which the code is constant (the partition induced by the
overlapping cells). Each bar is one region; its **width** is the local
resolution (inverse **grit**). Uniform widths \u21D2 uniform resolution
(fixed-weight); varying widths \u21D2 non-uniform resolution (tapering edges,
random or multi-scale cells). Hover a bar for its exact $[x_0, x_1]$ and width.`
    },
    "subplot.similarity-heatmap": {
      title: "Similarity Heatmap",
      short: "A 2-D heatmap of code overlap between input positions \u2014 color encodes how many bits two positions share.",
      body: `A 2-D heatmap of pairwise code overlap across input positions, normalised by
the **global maximum diagonal** (max active-bit count across regions) so colour
is comparable across cursor positions. The diagonal is self-overlap; band
thickness around it is the similarity radius (the gnomic *nearness horizon*);
bright off-diagonal cells are collisions. Global (not per-cursor) normalisation
keeps bit-count variation visible in mixed multi-encoders.`
    },
    "subplot.features": {
      title: "Crossings",
      short: "Hamming distance between consecutive regions: spikes mark input positions where the code changes the most.",
      body: `**Crossings** plots the Hamming distance between consecutive regions \u2014 the
size of the **chord** that flips at each **beat** (boundary):

$$ \\delta_i = \\big|\\,\\text{code}_{i} \\,\\triangle\\, \\text{code}_{i+1}\\,\\big|. $$

A *desired property* is a constant, low-variance rate of bin change: uniform
low values \u21D2 smooth, gradual change (good locality). Tall spikes \u21D2 abrupt
transitions where similarity breaks \u2014 synchronised boundaries, tapering edges,
or multi-scale wrap-around.`
    },
    "control.presets": {
      title: "Demo Gallery",
      short: "Curated example configurations across encoder types. Selecting one replaces the current encoders.",
      body: `Curated example configurations spanning the fixed, tapering, periodic and
multi-scale families. Selecting a preset replaces the current encoder list
(and resets dependent state) \u2014 the fastest way to see each family's
characteristic similarity and region signature before hand-tuning.`
    },
    "control.viewBounds": {
      title: "Plot X-Range",
      short: "The visible input window. It only changes what is plotted, not the encoder \u2014 widen it past a period to see periodic repetition.",
      body: `The **Plot X-Range** is purely a *viewport*: it sets the input interval the
charts display and does **not** change the encoder's own bounds. Set it inside
the operating range to zoom in, or beyond a periodic encoder's period to
visualise the wrap-around aliasing. The lower edge is constrained not to exceed
the smallest encoder origin so the active range stays visible.`
    },
    "control.scalarSlider": {
      title: "Scalar cursor",
      short: "The current input value. Moving it updates the active code, bits panel, and the similarity reference without re-running the encoder.",
      body: `The **scalar cursor** is the current input $x$ \u2014 the probe for the
*"am I in interval $[a,b]$?"* question the encoder is built to answer. Dragging
it re-highlights the active bits (Bins), updates the **Bits panel**, and moves
the similarity reference line \u2014 all without re-running WASM, since region codes
are cached. The primary tool for feeling how the code evolves with the input.`
    },
    "control.bitsPanel": {
      title: "Bits panel",
      short: "A live grid of every output bit for the current cursor value \u2014 filled squares are the active bits of the code.",
      body: `The **Bits panel** renders one square per output bit (grouped by
sub-encoder). Filled squares are the bits active at the current scalar cursor \u2014
the literal output vector, i.e. the set of overlapping cells that contain $x$.
Watch it while dragging the cursor to see exactly how many bits change and
where, complementing the aggregate **Crossings** plot.`
    },
    "control.add": {
      title: "+ Add encoder",
      short: "Append another sub-encoder. Multiple encoders are concatenated into one combined code.",
      body: `Appends a sub-encoder. Multiple sub-encoders are **concatenated** (the
\`MultiEncoder\` composition): each contributes its own bit block to the
combined output, enabling mixed-type and multi-scale codes. Beware that
sub-encoders with harmonically related periods can **synchronise** their
boundaries (cliff-drops in similarity). The first added encoder also
auto-enables the **Bins** subplot.`
    },
    "control.reset": {
      title: "Reset",
      short: "Clears all encoders and the view bounds but keeps your subplot (chip) selection.",
      body: `Clears every encoder and restores the default **Plot X-Range**, while
**preserving** your subplot chip selection so you can immediately rebuild a new
configuration into the same set of views.`
    }
  };
  function dv(u) {
    const s = [], r = (m, h) => {
      const p = s.length;
      return s.push({
        expr: m,
        display: h
      }), `@@MATH${p}@@`;
    };
    let c = u.replace(/\$\$([\s\S]+?)\$\$/g, (m, h) => r(h, true));
    c = c.replace(/\$([^$\n]+?)\$/g, (m, h) => r(h, false));
    let d = hp.parse(c, {
      async: false
    });
    return d = d.replace(/@@MATH(\d+)@@/g, (m, h) => {
      const p = s[Number(h)];
      if (!p) return "";
      try {
        return mp.renderToString(p.expr, {
          throwOnError: false,
          displayMode: p.display
        });
      } catch {
        return p.expr;
      }
    }), d;
  }
  const hv = Ns, mv = Vp, Kh = hv, gs = [
    [
      255,
      245,
      235
    ],
    [
      254,
      230,
      206
    ],
    [
      253,
      208,
      162
    ],
    [
      253,
      174,
      107
    ],
    [
      253,
      141,
      60
    ],
    [
      241,
      105,
      19
    ],
    [
      217,
      72,
      1
    ],
    [
      166,
      54,
      3
    ],
    [
      127,
      39,
      4
    ]
  ];
  function Om(u) {
    const s = gs.length - 1, r = Math.max(0, Math.min(1, u)) * s, c = Math.floor(r), d = Math.min(c + 1, s), m = r - c, [h, p, x] = gs[c], [T, v, b] = gs[d], A = Math.round(h + (T - h) * m), C = Math.round(p + (v - p) * m), U = Math.round(x + (b - x) * m);
    return `rgb(${A},${C},${U})`;
  }
  const $u = [
    "bins",
    "per-bin",
    "similarity",
    "bits-by-data",
    "projected-similarity",
    "decomposition",
    "similarity-heatmap",
    "features"
  ], Fu = {
    bins: "Bins",
    "per-bin": "Per-Bin View",
    similarity: "Input Similarity",
    "bits-by-data": "Codes",
    "projected-similarity": "Self-Similarity",
    decomposition: "Regions",
    "similarity-heatmap": "Similarity Heatmap",
    features: "Crossings"
  }, yv = "#cccccc", pv = 0, bv = 0.3;
  function kh(u) {
    const s = parseInt(u.slice(1), 16);
    return [
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255
    ];
  }
  function Jh(u, s, r) {
    const [c, d, m] = kh(u), [h, p, x] = kh(s), T = (C) => Math.max(0, Math.min(255, Math.round(C))), v = T(c + (h - c) * r), b = T(d + (p - d) * r), A = T(m + (x - m) * r);
    return `#${v.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}${A.toString(16).padStart(2, "0")}`;
  }
  function Kl(u, s) {
    return {
      bg: u,
      border: s,
      mutedBg: Jh(yv, u, pv),
      titleColor: Jh(u, "#000000", bv)
    };
  }
  const js = {
    bins: Kl("#a8c8e8", "#6898c0"),
    "per-bin": Kl("#a8e0d0", "#4faf95"),
    similarity: Kl("#a8d8b4", "#5a9e72"),
    "bits-by-data": Kl("#c8b8e8", "#8868c0"),
    "projected-similarity": Kl("#e8d0a8", "#b89060"),
    decomposition: Kl("#e8a8a8", "#c06060"),
    "similarity-heatmap": Kl("#f0c070", "#c08030"),
    features: Kl("#d4e8a8", "#7aaa40")
  }, ai = (u, s) => ({
    type: "interval-fixed",
    n: u,
    w: s,
    lower_bound: 0,
    upper_bound: 1
  }), ii = (u, s) => ({
    type: "interval-tapering",
    n: u,
    w: s,
    lower_bound: 0,
    upper_bound: 1
  }), ui = (u, s, r = 1) => ({
    type: "periodic-fixed",
    n: u,
    w: s,
    lower_bound: 0,
    upper_bound: 1,
    period: r
  }), gv = (u, s, r, c = 0.4) => ({
    type: "periodic-cell",
    n: u,
    w: 1,
    lower_bound: 0,
    upper_bound: 1,
    min_period: s,
    max_period: r,
    l_frac: c
  }), vs = [
    {
      label: "\u2014 None \u2014",
      encoders: [],
      viewBounds: "-1.0,2.0",
      view: "bins-only",
      empty: true
    },
    {
      label: "FixedWeight: w=1, primes",
      encoders: [
        2,
        3,
        5,
        7
      ].map((u) => ai(u, 1)),
      viewBounds: "-1.0,2.0",
      view: "bins-only"
    },
    {
      label: "FixedWeight: w=2, primes",
      encoders: [
        5,
        7,
        11,
        13
      ].map((u) => ai(u, 2)),
      viewBounds: "-1.0,2.0",
      view: "bins-only"
    },
    {
      label: "FixedWeight: w=1, powers of 2",
      encoders: [
        2,
        4,
        8,
        16
      ].map((u) => ai(u, 1)),
      viewBounds: "-1.0,2.0",
      view: "bins-only"
    },
    {
      label: "FixedWeight: w=2, powers of 2",
      encoders: [
        2,
        4,
        8,
        16
      ].map((u) => ai(u, 2)),
      viewBounds: "-1.0,2.0",
      view: "bins-only"
    },
    {
      label: "TaperingWeight: w=2, primes",
      encoders: [
        7,
        11,
        13,
        17
      ].map((u) => ii(u, 2)),
      viewBounds: "-1.0,2.0",
      view: "bins-only"
    },
    {
      label: "TaperingWeight: w=3, primes",
      encoders: [
        7,
        11,
        13,
        17
      ].map((u) => ii(u, 3)),
      viewBounds: "-1.0,2.0",
      view: "bins-only"
    },
    {
      label: "TaperingWeight: w=2, powers of 2",
      encoders: [
        4,
        8,
        16
      ].map((u) => ii(u, 2)),
      viewBounds: "-1.0,2.0",
      view: "bins-only"
    },
    {
      label: "TaperingWeight: w=3, powers of 2",
      encoders: [
        7,
        11,
        13,
        17
      ].map((u) => ii(u, 3)),
      viewBounds: "-1.0,2.0",
      view: "bins-only"
    },
    {
      label: "Periodic: w=1, primes",
      encoders: [
        5,
        7,
        11,
        13
      ].map((u) => ui(u, 1)),
      viewBounds: "-1.0,2.0",
      view: "bins-only"
    },
    {
      label: "Periodic: w=2, primes",
      encoders: [
        5,
        7,
        11,
        13
      ].map((u) => ui(u, 2)),
      viewBounds: "-1.0,2.0",
      view: "bins-only"
    },
    {
      label: "Periodic: w=1, powers of 2",
      encoders: [
        2,
        4,
        8,
        16
      ].map((u) => ui(u, 1)),
      viewBounds: "-1.0,2.0",
      view: "bins-only"
    },
    {
      label: "Periodic: w=2, powers of 2",
      encoders: [
        2,
        4,
        8,
        16
      ].map((u) => ui(u, 2)),
      viewBounds: "-1.0,2.0",
      view: "bins-only"
    },
    {
      label: "Mixed: interval-fixed + tapering + periodic",
      encoders: [
        ai(7, 2),
        ii(11, 3),
        ui(13, 2, 1)
      ],
      viewBounds: "-1.0,2.0",
      view: "bins-only"
    },
    {
      label: "PeriodicCell: n=8, period 0.2-0.6",
      encoders: [
        gv(8, 0.2, 0.6, 0.4)
      ],
      viewBounds: "-1.0,2.0",
      view: "bins-only"
    },
    {
      label: "PeriodicRandomCell: n=8, all-random",
      encoders: [
        {
          type: "periodic-random-cell",
          n: 8,
          w: 1,
          lower_bound: 0,
          upper_bound: 1,
          randomize_origins: true,
          randomize_periods: true,
          randomize_l_frac: true,
          const_origin: 0.5,
          const_period: 0.4,
          const_l_frac: 0.4,
          max_period: 0.6,
          max_l_frac: 0.8,
          seed: 42
        }
      ],
      viewBounds: "-1.0,2.0",
      view: "bins-only"
    },
    {
      label: "IntervalRandomCell: n=8, l=0.1 (random \u2264 0.2)",
      encoders: [
        {
          type: "interval-random-cell",
          n: 8,
          w: 1,
          lower_bound: 0,
          upper_bound: 1,
          randomize_l: true,
          const_l: 0.1,
          max_l: 0.2,
          seed: 42
        }
      ],
      viewBounds: "-1.0,2.0",
      view: "bins-only"
    }
  ], mi = 2, Nm = 10, vv = 2, _v = 20, ri = -5, Ku = 6, Sv = [
    -1,
    2
  ], kl = 0.01, _s = 0.01, Ss = 11, xs = 0.01, $h = 0.2, Fh = 0.6, xv = 0.01, wv = 1, Tv = 0.01, Wh = 0.4, Dm = "#0064a3", Av = "rgba(0,100,163,0.25)", Ev = 30, zv = 30, Ih = 0.025, Ph = 0.02, Mv = 0.06, Cm = 0.95, Ov = 0.5, Rm = 0.3, Nv = 0.12, Dv = 0.8, Cv = 0.25, em = 8, ws = 11, Rv = 280, Bv = "#5a9de0", Bm = "rgba(80,80,80,0.7)", jv = "#111111", Uv = "#dddddd";
  function sa(u) {
    return Kh[u % Kh.length];
  }
  const ca = mv;
  function Hv(u, s) {
    const r = parseInt(u.slice(1, 3), 16), c = parseInt(u.slice(3, 5), 16), d = parseInt(u.slice(5, 7), 16);
    return `rgba(${r},${c},${d},${s})`;
  }
  function jm(u, s) {
    return u.map((r) => r.reduce((c, d, m) => c + d * s[m], 0));
  }
  function pn(u, s) {
    for (let r = 0; r < u.length - 1; r++) if (s >= u[r] && s < u[r + 1]) return r;
    return u.length - 2;
  }
  function Lv(u, s, r) {
    return u.map((c) => {
      const d = c.bins ?? [], m = c.bin_width ?? (c.n_bits > 0 ? (c.upper_bound - c.lower_bound) / c.n_bits : 0), h = typeof c.w == "number" ? c.w : r, p = h * m, x = d.filter((w) => !w.is_congruent), T = x.length || 1;
      let v, b;
      if (s) {
        const w = [];
        v = [];
        const L = d.some((ce) => ce.is_congruent) && T % h !== 0 ? T % h : 0, G = T - L;
        for (let ce = 0; ce < G; ce++) {
          const W = x[ce], oe = typeof W.upper == "number" ? W.upper : W.lower + p;
          let k = 0;
          for (; k < w.length && w[k] > W.lower + 1e-9; ) k++;
          k >= w.length && w.push(-1 / 0), w[k] = oe, v.push(k);
        }
        const K = w.length;
        for (let ce = 0; ce < L; ce++) v.push(K + ce);
        b = w.length + L || 1;
      } else v = x.map((w, O) => O), b = T;
      const A = new Array(d.length);
      let C = 0, U = 0;
      return d.forEach((w, O) => {
        typeof w.bin_index == "number" ? A[O] = w.bin_index : w.is_congruent ? A[O] = U++ % T : A[O] = C++;
      }), {
        nRows: b,
        nPrimary: T,
        primaryRows: v,
        primaryIndices: A,
        expandedWidth: p
      };
    });
  }
  function qv(u) {
    const s = Math.min(...u.sub_encoders.map((c) => c.view_lower_bound ?? c.lower_bound)), r = Math.max(...u.sub_encoders.map((c) => c.view_upper_bound ?? c.upper_bound));
    return [
      isFinite(s) ? s : u.boundaries[0] ?? 0,
      isFinite(r) ? r : u.boundaries[u.boundaries.length - 1] ?? 1
    ];
  }
  function Gv(u) {
    const r = u.map((h) => h.nRows * 1), c = r.reduce((h, p) => h + p, 0) || 1, d = [];
    let m = c;
    for (const h of r) m -= h, d.push(m);
    return {
      yBases: d,
      encHeights: r,
      totalHeight: c
    };
  }
  const Yv = Cm, Xv = Rm, Ts = "#185fa5", As = "#1e1e1e", Qv = "#d8d6cd";
  function Vv(u, s, r, c, d, m) {
    let h = false;
    for (const p of u) if (p.bin_index === s && (h = true, m >= p.lower && m <= p.upper)) return true;
    return h ? false : c > 0 ? ((m - r) % c + c) % c < d : false;
  }
  function Zv(u, s, r) {
    const c = (u.bins ?? []).filter((m) => m.bin_index === s).map((m) => m.lower).sort((m, h) => m - h);
    let d = 1 / 0;
    for (let m = 1; m < c.length; m++) {
      const h = c[m] - c[m - 1];
      h > 1e-9 && h < d && (d = h);
    }
    return Number.isFinite(d) ? d : typeof u.period == "number" && u.period > 0 ? u.period : typeof u.bin_width == "number" && u.bin_width > 0 ? u.bin_width : r > 0 ? r / 0.4 : 0;
  }
  function tm(u, s, r) {
    var _a;
    const c = [];
    for (const d of u.sub_encoders ?? []) {
      const m = d.type ?? "", h = m.startsWith("periodic") || !m && (typeof d.period == "number" || (d.bins ?? []).some((A) => A.is_congruent)), p = sa(d.encoder_idx), x = ((_a = d.bit_range) == null ? void 0 : _a[0]) ?? 0, T = d.primary_bins && d.primary_bins.length ? d.primary_bins : (d.bins ?? []).filter((A) => !A.is_congruent);
      if (!h) {
        T.forEach((A, C) => {
          const U = A.upper - A.lower, w = s >= A.lower && s <= A.upper;
          c.push({
            value: [
              0,
              0
            ],
            kind: "interval",
            label: String(x + (A.bin_index ?? C)),
            fire: w,
            encColor: p,
            cursorFrac: w && U > 0 ? Math.max(0, Math.min(1, (s - A.lower) / U)) : null
          });
        });
        continue;
      }
      const v = T.map((A, C) => {
        const U = A.upper - A.lower, w = Zv(d, A.bin_index ?? C, U), O = A.bin_index ?? C;
        return {
          p: A,
          k: C,
          l: U,
          T: w,
          binIdx: O,
          fire: Vv(d.bins ?? [], O, A.lower, w, U, s)
        };
      }), b = Math.max(1e-9, ...v.map((A) => A.T));
      for (const A of v) {
        const C = A.T > 0 ? Math.max(0, Math.min(360, A.l / A.T * 360)) : 0, U = A.T > 0 ? ((s - A.p.lower) % A.T + A.T) % A.T / A.T * 360 : null;
        c.push({
          value: [
            0,
            0
          ],
          kind: "dial",
          label: String(x + A.binIdx),
          fire: A.fire,
          encColor: p,
          rFrac: Math.max(0.35, A.T / b),
          spanDeg: C,
          handDeg: U
        });
      }
    }
    return c;
  }
  function Kv(u) {
    const s = (c, d, m, h) => {
      const p = h * Math.PI / 180;
      return [
        c + m * Math.sin(p),
        d - m * Math.cos(p)
      ];
    }, r = (c, d, m, h, p) => {
      const x = Math.max(2, Math.ceil(Math.abs(p - h) / 6)), T = [];
      for (let v = 0; v <= x; v++) T.push(s(c, d, m, h + (p - h) * v / x));
      return T;
    };
    return (c, d) => {
      const m = u(), h = m[c.dataIndex];
      if (!h) return {
        type: "group",
        children: []
      };
      const p = m.length, x = d.coord([
        0,
        1
      ]), T = d.coord([
        1,
        0
      ]), v = x[0], b = x[1], A = T[0] - x[0], C = T[1] - x[1];
      if (A <= 0 || C <= 0) return {
        type: "group",
        children: []
      };
      let U = 1, w = 0;
      for (let re = 1; re <= p; re++) {
        const ye = Math.ceil(p / re), D = Math.min(A / re, C / ye);
        D > w && (w = D, U = re);
      }
      const O = Math.ceil(p / U), L = A / U, G = C / O, K = Math.floor(c.dataIndex / U), ce = c.dataIndex % U, W = K === O - 1 ? p - (O - 1) * U : U, oe = (U - W) * L / 2, k = Math.max(2, Math.min(L, G) * 0.92), se = v + oe + ce * L + (L - k) / 2, Ne = b + K * G + (G - k) / 2, tt = k >= 10, lt = "#000000", He = h.fire ? Yv : Xv, Re = [
        {
          type: "rect",
          shape: {
            x: se,
            y: Ne,
            width: k,
            height: k,
            r: Math.max(1, k * 0.07)
          },
          style: {
            fill: "transparent",
            stroke: h.fire ? h.encColor : Qv,
            lineWidth: h.fire ? 1.4 : 0.8
          }
        }
      ];
      if (h.kind === "interval") {
        tt && Re.push({
          type: "text",
          style: {
            x: se + k / 2,
            y: Ne + k * 0.36,
            text: h.label,
            textAlign: "center",
            textVerticalAlign: "middle",
            fontSize: Math.max(8, Math.round(k * 0.46)),
            fontWeight: "bold",
            fill: lt
          }
        });
        const re = k * 0.1, ye = se + re, D = se + k - re, Y = D - ye, H = Ne + k * 0.74, X = Math.max(2, k * 0.11);
        Re.push({
          type: "rect",
          shape: {
            x: ye,
            y: H,
            width: Y,
            height: X,
            r: Math.max(1, X * 0.3)
          },
          style: {
            fill: h.encColor,
            opacity: He,
            stroke: h.encColor,
            lineWidth: 1.2
          }
        });
        for (const V of [
          ye,
          D
        ]) Re.push({
          type: "line",
          shape: {
            x1: V,
            y1: H - X * 0.4,
            x2: V,
            y2: H + X * 1.4
          },
          style: {
            stroke: As,
            lineWidth: 1
          }
        });
        if (h.fire && h.cursorFrac != null) {
          const V = ye + h.cursorFrac * Y;
          Re.push({
            type: "line",
            shape: {
              x1: V,
              y1: H - X,
              x2: V,
              y2: H + X * 2
            },
            style: {
              stroke: Ts,
              lineWidth: 2,
              lineCap: "round"
            }
          }, {
            type: "circle",
            shape: {
              cx: V,
              cy: H - X,
              r: Math.max(1.6, k * 0.05)
            },
            style: {
              fill: Ts
            }
          });
        }
      } else {
        tt && Re.push({
          type: "text",
          style: {
            x: se + k * 0.07,
            y: Ne + k * 0.05,
            text: h.label,
            textAlign: "left",
            textVerticalAlign: "top",
            fontSize: Math.max(6, Math.round(k * 0.15)),
            fontWeight: "bold",
            fill: lt
          }
        });
        const re = se + k / 2, ye = Ne + k * (tt ? 0.55 : 0.5), D = Math.max(4, k * 0.4) * (h.rFrac ?? 1);
        Re.push({
          type: "circle",
          shape: {
            cx: re,
            cy: ye,
            r: D
          },
          style: {
            fill: "#ffffff",
            stroke: "#bdbbb1",
            lineWidth: 1.2
          }
        });
        const Y = h.spanDeg ?? 0;
        if (Y > 0.5) {
          const ee = r(re, ye, D, 0, Y);
          Re.push({
            type: "polygon",
            shape: {
              points: [
                [
                  re,
                  ye
                ],
                ...ee
              ]
            },
            style: {
              fill: h.encColor,
              opacity: He,
              stroke: h.encColor,
              lineWidth: 1.2
            }
          });
        }
        const [H, X] = s(re, ye, D, 0), [V, be] = s(re, ye, D + Math.max(2, k * 0.07), 0);
        if (Re.push({
          type: "line",
          shape: {
            x1: H,
            y1: X,
            x2: V,
            y2: be
          },
          style: {
            stroke: As,
            lineWidth: 1.5,
            lineCap: "round"
          }
        }), h.handDeg != null) {
          const [ee, I] = s(re, ye, D * 0.9, h.handDeg), ne = Ts;
          Re.push({
            type: "line",
            shape: {
              x1: re,
              y1: ye,
              x2: ee,
              y2: I
            },
            style: {
              stroke: ne,
              lineWidth: h.fire ? 2.2 : 1.8,
              lineCap: "round"
            }
          }, {
            type: "circle",
            shape: {
              cx: ee,
              cy: I,
              r: Math.max(1.4, k * 0.045)
            },
            style: {
              fill: ne
            }
          }, {
            type: "circle",
            shape: {
              cx: re,
              cy: ye,
              r: Math.max(1.2, k * 0.035)
            },
            style: {
              fill: As
            }
          });
        }
      }
      return {
        type: "group",
        children: Re,
        emphasis: {
          disabled: true
        }
      };
    };
  }
  const lm = (u) => {
    let s;
    const r = /* @__PURE__ */ new Set(), c = (T, v) => {
      const b = typeof T == "function" ? T(s) : T;
      if (!Object.is(b, s)) {
        const A = s;
        s = v ?? (typeof b != "object" || b === null) ? b : Object.assign({}, s, b), r.forEach((C) => C(s, A));
      }
    }, d = () => s, p = {
      setState: c,
      getState: d,
      getInitialState: () => x,
      subscribe: (T) => (r.add(T), () => r.delete(T))
    }, x = s = u(c, d, p);
    return p;
  }, kv = ((u) => u ? lm(u) : lm), Jv = (u) => u;
  function $v(u, s = Jv) {
    const r = Uu.useSyncExternalStore(u.subscribe, Uu.useCallback(() => s(u.getState()), [
      u,
      s
    ]), Uu.useCallback(() => s(u.getInitialState()), [
      u,
      s
    ]));
    return Uu.useDebugValue(r), r;
  }
  let nm, Um, am, yi, Yu, Fv, Wv, Iv, Pv, e1, Es, t1, l1, n1, a1, im, i1;
  nm = (u) => {
    const s = kv(u), r = (c) => $v(s, c);
    return Object.assign(r, s), r;
  };
  Um = ((u) => u ? nm(u) : nm);
  am = {
    BASE_URL: "./",
    DEV: false,
    MODE: "production",
    PROD: true,
    SSR: false
  };
  yi = /* @__PURE__ */ new Map();
  Yu = (u) => {
    const s = yi.get(u);
    return s ? Object.fromEntries(Object.entries(s.stores).map(([r, c]) => [
      r,
      c.getState()
    ])) : {};
  };
  Fv = (u, s, r) => {
    if (u === void 0) return {
      type: "untracked",
      connection: s.connect(r)
    };
    const c = yi.get(r.name);
    if (c) return {
      type: "tracked",
      store: u,
      ...c
    };
    const d = {
      connection: s.connect(r),
      stores: {}
    };
    return yi.set(r.name, d), {
      type: "tracked",
      store: u,
      ...d
    };
  };
  Wv = (u, s) => {
    if (s === void 0) return;
    const r = yi.get(u);
    r && (delete r.stores[s], Object.keys(r.stores).length === 0 && yi.delete(u));
  };
  Iv = (u) => {
    var s, r;
    if (!u) return;
    const c = u.split(`
`), d = c.findIndex((h) => h.includes("api.setState"));
    if (d < 0) return;
    const m = ((s = c[d + 1]) == null ? void 0 : s.trim()) || "";
    return (r = /.+ (.+) .+/.exec(m)) == null ? void 0 : r[1];
  };
  Pv = (u, s = {}) => (r, c, d) => {
    const { enabled: m, anonymousActionType: h, store: p, ...x } = s;
    let T;
    try {
      T = (m ?? (am ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
    } catch {
    }
    if (!T) return u(r, c, d);
    const { connection: v, ...b } = Fv(p, T, x);
    let A = true;
    d.setState = ((w, O, L) => {
      const G = r(w, O);
      if (!A) return G;
      const K = L === void 0 ? {
        type: h || Iv(new Error().stack) || "anonymous"
      } : typeof L == "string" ? {
        type: L
      } : L;
      return p === void 0 ? (v == null ? void 0 : v.send(K, c()), G) : (v == null ? void 0 : v.send({
        ...K,
        type: `${p}/${K.type}`
      }, {
        ...Yu(x.name),
        [p]: d.getState()
      }), G);
    }), d.devtools = {
      cleanup: () => {
        v && typeof v.unsubscribe == "function" && v.unsubscribe(), Wv(x.name, p);
      }
    };
    const C = (...w) => {
      const O = A;
      A = false, r(...w), A = O;
    }, U = u(d.setState, c, d);
    if (b.type === "untracked" ? v == null ? void 0 : v.init(U) : (b.stores[b.store] = d, v == null ? void 0 : v.init(Object.fromEntries(Object.entries(b.stores).map(([w, O]) => [
      w,
      w === b.store ? U : O.getState()
    ])))), d.dispatchFromDevtools && typeof d.dispatch == "function") {
      let w = false;
      const O = d.dispatch;
      d.dispatch = (...L) => {
        (am ? "production" : void 0) !== "production" && L[0].type === "__setState" && !w && (console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'), w = true), O(...L);
      };
    }
    return v.subscribe((w) => {
      var O;
      switch (w.type) {
        case "ACTION":
          if (typeof w.payload != "string") {
            console.error("[zustand devtools middleware] Unsupported action format");
            return;
          }
          return Es(w.payload, (L) => {
            if (L.type === "__setState") {
              if (p === void 0) {
                C(L.state);
                return;
              }
              Object.keys(L.state).length !== 1 && console.error(`
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);
              const G = L.state[p];
              if (G == null) return;
              JSON.stringify(d.getState()) !== JSON.stringify(G) && C(G);
              return;
            }
            d.dispatchFromDevtools && typeof d.dispatch == "function" && d.dispatch(L);
          });
        case "DISPATCH":
          switch (w.payload.type) {
            case "RESET":
              return C(U), p === void 0 ? v == null ? void 0 : v.init(d.getState()) : v == null ? void 0 : v.init(Yu(x.name));
            case "COMMIT":
              if (p === void 0) {
                v == null ? void 0 : v.init(d.getState());
                return;
              }
              return v == null ? void 0 : v.init(Yu(x.name));
            case "ROLLBACK":
              return Es(w.state, (L) => {
                if (p === void 0) {
                  C(L), v == null ? void 0 : v.init(d.getState());
                  return;
                }
                C(L[p]), v == null ? void 0 : v.init(Yu(x.name));
              });
            case "JUMP_TO_STATE":
            case "JUMP_TO_ACTION":
              return Es(w.state, (L) => {
                if (p === void 0) {
                  C(L);
                  return;
                }
                JSON.stringify(d.getState()) !== JSON.stringify(L[p]) && C(L[p]);
              });
            case "IMPORT_STATE": {
              const { nextLiftedState: L } = w.payload, G = (O = L.computedStates.slice(-1)[0]) == null ? void 0 : O.state;
              if (!G) return;
              C(p === void 0 ? G : G[p]), v == null ? void 0 : v.send(null, L);
              return;
            }
            case "PAUSE_RECORDING":
              return A = !A;
          }
          return;
      }
    }), U;
  };
  e1 = Pv;
  Es = (u, s) => {
    let r;
    try {
      r = JSON.parse(u);
    } catch (c) {
      console.error("[zustand devtools middleware] Could not parse the received json", c);
    }
    r !== void 0 && s(r);
  };
  t1 = [
    {
      type: "interval-fixed",
      n: 13,
      w: 1,
      lower_bound: 0,
      upper_bound: 1
    }
  ];
  l1 = {
    encoders: t1,
    viewBounds: [
      ...Sv
    ],
    subplots: [
      "bins",
      "per-bin"
    ],
    stackedOrder: [
      ...$u
    ],
    stackedActive: [
      ...$u
    ],
    subplotParams: {},
    refPoints: [],
    scalarCursor: 0.5,
    lastData: null,
    analyzing: false,
    analysisError: null
  };
  te = Um()(e1((u, s) => ({
    ...l1,
    setEncoders: (r) => u({
      encoders: r
    }),
    addEncoder: (r) => u((c) => c.encoders.length >= Nm ? c : {
      encoders: [
        ...c.encoders,
        r
      ]
    }),
    removeEncoder: (r) => u((c) => c.encoders.length <= 1 ? c : {
      encoders: c.encoders.filter((d, m) => m !== r)
    }),
    updateEncoder: (r, c) => u((d) => ({
      encoders: d.encoders.map((m, h) => h === r ? {
        ...m,
        ...c
      } : m)
    })),
    setViewBounds: (r) => u((c) => c.viewBounds[0] === r[0] && c.viewBounds[1] === r[1] ? {} : {
      viewBounds: r
    }),
    setSubplots: (r) => u({
      subplots: r
    }),
    toggleSubplot: (r) => u((c) => ({
      subplots: c.subplots.includes(r) ? c.subplots.filter((d) => d !== r) : [
        ...c.subplots,
        r
      ]
    })),
    setStackedActive: (r) => u({
      stackedActive: r
    }),
    toggleStackedSubplot: (r) => u((c) => ({
      stackedActive: c.stackedActive.includes(r) ? c.stackedActive.filter((d) => d !== r) : [
        ...c.stackedActive,
        r
      ]
    })),
    setStackedOrder: (r) => u({
      stackedOrder: r
    }),
    setSubplotParam: (r, c) => u((d) => ({
      subplotParams: {
        ...d.subplotParams,
        [r]: {
          ...d.subplotParams[r],
          ...c
        }
      }
    })),
    setRefPoints: (r) => u({
      refPoints: r.slice(0, mi)
    }),
    addRefPoint: (r) => u((c) => c.refPoints.length >= mi ? c : {
      refPoints: [
        ...c.refPoints,
        r
      ]
    }),
    updateRefPoint: (r, c) => u((d) => ({
      refPoints: d.refPoints.map((m, h) => h === r ? c : m)
    })),
    removeRefPoint: (r) => u((c) => ({
      refPoints: c.refPoints.filter((d, m) => m !== r)
    })),
    setScalarCursor: (r) => u({
      scalarCursor: r
    }),
    applyPreset: (r) => {
      if (r.empty || r.encoders.length === 0) {
        u({
          encoders: [],
          lastData: null
        });
        return;
      }
      const [c, d] = r.viewBounds.split(",").map((h) => parseFloat(h.trim())), m = Number.isFinite(c) && Number.isFinite(d) ? [
        c,
        d
      ] : s().viewBounds;
      u({
        encoders: r.encoders.map((h) => ({
          ...h
        })),
        viewBounds: m
      });
    },
    setData: (r) => u({
      lastData: r
    }),
    setAnalyzing: (r) => u({
      analyzing: r
    }),
    setAnalysisError: (r) => u({
      analysisError: r
    })
  }), {
    name: "EncoderStudioStore"
  }));
  n1 = "modulepreload";
  a1 = function(u, s) {
    return new URL(u, s).href;
  };
  im = {};
  i1 = function(s, r, c) {
    let d = Promise.resolve();
    if (r && r.length > 0) {
      let T = function(v) {
        return Promise.all(v.map((b) => Promise.resolve(b).then((A) => ({
          status: "fulfilled",
          value: A
        }), (A) => ({
          status: "rejected",
          reason: A
        }))));
      };
      const h = document.getElementsByTagName("link"), p = document.querySelector("meta[property=csp-nonce]"), x = (p == null ? void 0 : p.nonce) || (p == null ? void 0 : p.getAttribute("nonce"));
      d = T(r.map((v) => {
        if (v = a1(v, c), v in im) return;
        im[v] = true;
        const b = v.endsWith(".css"), A = b ? '[rel="stylesheet"]' : "";
        if (c) for (let U = h.length - 1; U >= 0; U--) {
          const w = h[U];
          if (w.href === v && (!b || w.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${v}"]${A}`)) return;
        const C = document.createElement("link");
        if (C.rel = b ? "stylesheet" : n1, b || (C.as = "script"), C.crossOrigin = "", C.href = v, x && C.setAttribute("nonce", x), document.head.appendChild(C), b) return new Promise((U, w) => {
          C.addEventListener("load", U), C.addEventListener("error", () => w(new Error(`Unable to preload CSS for ${v}`)));
        });
      }));
    }
    function m(h) {
      const p = new Event("vite:preloadError", {
        cancelable: true
      });
      if (p.payload = h, window.dispatchEvent(p), !p.defaultPrevented) throw h;
    }
    return d.then((h) => {
      for (const p of h || []) p.status === "rejected" && m(p.reason);
      return s().catch(m);
    });
  };
  class u1 extends Error {
    constructor() {
      super("analysis superseded"), this.name = "StaleAnalysisError";
    }
  }
  function c1(u) {
    return u instanceof Error && u.name === "StaleAnalysisError";
  }
  const o1 = 64, hn = /* @__PURE__ */ new Map();
  function Hm(u) {
    const s = hn.get(u);
    return s !== void 0 && (hn.delete(u), hn.set(u, s)), s;
  }
  function Lm(u, s) {
    if (hn.set(u, s), hn.size > o1) {
      const r = hn.keys().next().value;
      r !== void 0 && hn.delete(r);
    }
  }
  let bl = null, s1 = 0, mn = null, ua = null, yn = false, fi = null;
  const qm = 3e4;
  function Ds() {
    fi !== null && (clearTimeout(fi), fi = null);
  }
  function r1() {
    const u = mn;
    mn = null, yn = false, fi = null, bl && (bl.terminate(), bl = null), u == null ? void 0 : u.reject(new Error(`Encoder analysis timed out after ${qm / 1e3}s \u2014 the configuration is too expensive to analyze over the current range. Use a coarser encoder (larger period/width) or a narrower plot range.`)), oa();
  }
  function Gm() {
    return bl || (typeof Worker > "u" ? null : (bl = new Worker(new URL("" + new URL("analysisWorker-C1jm1Hms.js", import.meta.url).href, import.meta.url), {
      type: "module"
    }), bl.onmessage = (u) => {
      Ds();
      const s = u.data, r = mn;
      mn = null, yn = false, r && (s.ok && s.data ? (Lm(r.key, s.data), r.resolve(s.data)) : r.reject(new Error(s.error ?? "analysis failed"))), oa();
    }, bl.onerror = (u) => {
      Ds();
      const s = mn;
      mn = null, yn = false, s == null ? void 0 : s.reject(new Error(u.message || "analysis worker error")), oa();
    }, bl));
  }
  function f1() {
    Gm();
  }
  function oa() {
    if (yn || !ua) return;
    const u = ua;
    ua = null;
    const s = Hm(u.key);
    if (s) {
      u.resolve(s), oa();
      return;
    }
    const r = Gm();
    if (!r) {
      yn = true, i1(() => import("./wasm-api-CQJ80EP0.js").then(async (m) => {
        await m.__tla;
        return m;
      }), __vite__mapDeps([0,1,2,3,4,5]), import.meta.url).then((c) => {
        try {
          const d = c.runAnalysis(u.params);
          Lm(u.key, d), u.resolve(d);
        } catch (d) {
          u.reject(d instanceof Error ? d : new Error(String(d)));
        }
      }).finally(() => {
        yn = false, oa();
      });
      return;
    }
    yn = true, mn = u, Ds(), fi = setTimeout(r1, qm), r.postMessage({
      seq: ++s1,
      params: u.params
    });
  }
  function d1(u, s) {
    const r = Hm(u);
    return r ? Promise.resolve(r) : new Promise((c, d) => {
      ua && ua.reject(new u1()), ua = {
        key: u,
        params: s,
        resolve: c,
        reject: d
      }, oa();
    });
  }
  const h1 = 10;
  S_ = function() {
    const u = te((m) => m.encoders), s = te((m) => m.viewBounds), r = te((m) => m.setData), c = te((m) => m.setAnalyzing), d = te((m) => m.setAnalysisError);
    q.useEffect(() => {
      f1();
    }, []), q.useEffect(() => {
      if (!u || u.length === 0) {
        r(null), d(null), c(false);
        return;
      }
      let m = false;
      c(true);
      const h = setTimeout(() => {
        const p = {
          encoders: u,
          viewBounds: s
        }, x = JSON.stringify(p);
        d1(x, p).then((T) => {
          m || (r(T), d(null));
        }).catch((T) => {
          m || c1(T) || (r(null), d(T instanceof Error ? T.message : String(T)));
        }).finally(() => {
          m || c(false);
        });
      }, h1);
      return () => {
        m = true, clearTimeout(h);
      };
    }, [
      u,
      s,
      r,
      c,
      d
    ]);
  };
  function Vt(u, s) {
    return typeof document > "u" ? s : getComputedStyle(document.documentElement).getPropertyValue(u).trim() || s;
  }
  function bn() {
    return {
      axisLine: Vt("--viz-plot-axis-line", "#333333"),
      axisLabel: Vt("--viz-plot-axis-label", "#111111"),
      axisTitle: Vt("--viz-plot-axis-title", "#333333"),
      grid: Vt("--viz-plot-grid", "rgba(0,0,0,0.12)"),
      gridStrong: Vt("--viz-plot-grid-strong", "#888888"),
      tooltipBg: Vt("--viz-tooltip-bg", "rgba(20,30,60,0.9)"),
      tooltipText: Vt("--viz-tooltip-text", "#e8eaff"),
      cellActive: Vt("--viz-bitfield-cell-active", "#111111"),
      cellInactive: Vt("--viz-bitfield-cell-inactive", "#ffffff"),
      outline: Vt("--viz-plot-outline", "#000000"),
      label: Vt("--viz-plot-label", "#000000")
    };
  }
  function Xu(u, s, { folded: r, lo: c, hi: d, w: m = 1, colors: h }) {
    const p = u.sub_encoders, x = Lv(p, r, m), { yBases: T, totalHeight: v } = Gv(x), b = [];
    p.forEach((w, O) => {
      const L = T[O], G = T[O] + x[O].nRows;
      b.push({
        value: [
          w.lower_bound,
          L,
          G
        ]
      }), b.push({
        value: [
          w.upper_bound,
          L,
          G
        ]
      });
    });
    const A = 0.05, C = 1, U = [];
    return p.forEach((w, O) => {
      var _a;
      const L = w.bins ?? [], G = (h == null ? void 0 : h[O]) ?? sa(O), K = T[O], { primaryRows: ce, primaryIndices: W, expandedWidth: oe } = x[O], k = ((_a = w.bit_range) == null ? void 0 : _a[0]) ?? 0;
      L.forEach((se, Ne) => {
        const tt = Math.max(se.lower, c), lt = Math.min(typeof se.upper == "number" ? se.upper : se.lower + oe, d);
        if (tt >= lt) return;
        const He = ce[W[Ne]], Re = se.is_congruent ?? false, re = k + W[Ne];
        let ye;
        if (s !== null) {
          const H = re < s.length && s[re] === 1;
          ye = Re ? H ? Ov : Nv : H ? Cm : Rm;
        } else ye = Re ? Cv : Dv;
        const D = K + He * C + A, Y = K + (He + 1) * C - A;
        U.push({
          value: [
            tt,
            D,
            lt,
            Y
          ],
          color: G,
          opacity: ye,
          label: String(re),
          bitIdx: re,
          isCongruent: Re
        });
      });
    }), {
      bins: U,
      boundLines: b,
      totalHeight: v
    };
  }
  function um(u) {
    const c = (Math.max(u, 5) - u) / 2;
    return {
      min: -c,
      max: u + c
    };
  }
  function m1(u) {
    const s = bn();
    return (r, c) => {
      const d = u()[r.dataIndex];
      if (!d) return {
        type: "group",
        children: []
      };
      const [m, h, p, x] = d.value, T = c.coord([
        m,
        x
      ]), v = c.coord([
        p,
        h
      ]), b = T[0], A = T[1], C = v[0] - b, U = v[1] - A;
      if (C <= 0 || U <= 0) return {
        type: "group",
        children: []
      };
      const w = [
        {
          type: "rect",
          shape: {
            x: b,
            y: A,
            width: C,
            height: U
          },
          style: {
            fill: d.color,
            opacity: d.opacity,
            stroke: s.outline,
            lineWidth: 1.5
          }
        }
      ];
      if (C >= em && U >= em) {
        const O = Math.max(5, Math.min(Math.floor(0.9 * U), Math.floor(0.6 * C)));
        w.push({
          type: "text",
          style: {
            x: b + C / 2,
            y: A + U / 2,
            text: d.label,
            textAlign: "center",
            textVerticalAlign: "middle",
            fontSize: O,
            fill: s.label,
            opacity: d.isCongruent ? 0.1 : 1,
            width: C - 2,
            overflow: "truncate",
            ellipsis: ""
          }
        });
      }
      return {
        type: "group",
        children: w
      };
    };
  }
  function y1(u) {
    const s = bn();
    return (r, c) => {
      const d = u()[r.dataIndex];
      if (!d) return {
        type: "group",
        children: []
      };
      const [m, h, p] = d.value, [x, T] = c.coord([
        m,
        h
      ]), [, v] = c.coord([
        m,
        p
      ]);
      return {
        type: "line",
        shape: {
          x1: x,
          y1: T,
          x2: x,
          y2: v
        },
        style: {
          stroke: s.outline,
          lineWidth: 4,
          opacity: 1
        },
        silent: true
      };
    };
  }
  function zs(u, s) {
    if (!isFinite(s) || u.codes.length === 0) return null;
    const r = pn(u.boundaries, s);
    return r >= 0 ? u.codes[r] ?? null : null;
  }
  function cm(u, s) {
    if (!isFinite(s) || u.codes.length === 0) return [];
    const { boundaries: r, codes: c } = u, d = pn(r, s), m = jm(c, c[d]), h = [];
    for (let p = 0; p < r.length - 1; p++) {
      const x = (r[p] + r[p + 1]) / 2;
      h.push([
        r[p],
        m[p]
      ], [
        x,
        m[p]
      ]);
    }
    return h.push([
      r[r.length - 1],
      m[m.length - 1]
    ]), h;
  }
  function p1(u, s, r) {
    if (s.length === 0 || u.codes.length === 0) return [];
    const { boundaries: c, codes: d } = u;
    return s.map((m, h) => {
      const p = pn(c, m), x = jm(d, d[p]), T = [];
      for (let v = 0; v < c.length - 1; v++) {
        const b = (c[v] + c[v + 1]) / 2;
        T.push([
          c[v],
          x[v]
        ], [
          b,
          x[v]
        ]);
      }
      return T.push([
        c[c.length - 1],
        x[x.length - 1]
      ]), {
        points: T,
        color: r[h] ?? sa(h + 4)
      };
    });
  }
  function b1(u) {
    let s = 1;
    for (let r = 0; r < u.codes.length; r++) {
      const c = u.codes[r];
      let d = 0;
      for (let m = 0; m < c.length; m++) d += c[m];
      d > s && (s = d);
    }
    return s + 1;
  }
  function g1(u) {
    const s = u.length, r = u.reduce((h, p) => h + p, 0) || 1, c = 1 - Ph - Mv - Ih * (s - 1);
    let d = Ph;
    const m = [];
    for (let h = 0; h < s; h++) {
      const p = u[h] / r * c;
      m.push({
        topPct: d,
        heightPct: p
      }), d += p + Ih;
    }
    return m;
  }
  v1 = {
    bins: 2,
    "per-bin": 2,
    similarity: 1,
    "bits-by-data": 2,
    "projected-similarity": 2,
    decomposition: 1,
    "similarity-heatmap": 1,
    features: 1
  };
  function _1(u, s) {
    return s && s.length === 2 ? s : qv(u);
  }
  function S1(u) {
    const { boundaries: s } = u;
    if (s.length < 2) return [];
    const r = s[0], d = s[s.length - 1] - r;
    return s.slice(0, -1).map((m, h) => {
      const p = s[h + 1], x = Math.round(d / (p - m));
      return {
        value: [
          m,
          0,
          p,
          1
        ],
        label: x > 1 ? `1/${x}` : "1"
      };
    });
  }
  function x1(u) {
    const s = bn();
    return (r, c) => {
      const d = u()[r.dataIndex];
      if (!d) return {
        type: "group",
        children: []
      };
      const [m, h, p, x] = d.value, T = c.coord([
        m,
        x
      ]), v = c.coord([
        p,
        h
      ]), b = T[0], A = T[1], C = v[0] - b, U = v[1] - A;
      if (C <= 0 || U <= 0) return {
        type: "group",
        children: []
      };
      const w = [
        {
          type: "rect",
          shape: {
            x: b,
            y: A,
            width: C,
            height: U
          },
          style: {
            fill: Bv,
            stroke: s.outline,
            lineWidth: 1
          }
        }
      ];
      if (C >= 8 && U >= 8) {
        const O = b + C / 2, L = A + U / 2, G = d.label.indexOf("/");
        if (G >= 0) {
          const K = d.label.slice(0, G), ce = d.label.slice(G + 1), W = Math.max(K.length, ce.length), oe = Math.max(4, Math.min(Math.floor(0.36 * U), Math.floor(1.5 * C / W))), k = oe * 0.62, se = Math.min(C - 3, oe * W * 0.62 + 2), Ne = {
            textAlign: "center",
            textVerticalAlign: "middle",
            fontSize: oe,
            fill: s.label,
            fontWeight: "bold"
          };
          w.push({
            type: "text",
            style: {
              x: O,
              y: L - k,
              text: K,
              ...Ne
            }
          }, {
            type: "line",
            shape: {
              x1: O - se / 2,
              y1: L,
              x2: O + se / 2,
              y2: L
            },
            style: {
              stroke: s.label,
              lineWidth: Math.max(1, Math.round(oe * 0.09))
            }
          }, {
            type: "text",
            style: {
              x: O,
              y: L + k,
              text: ce,
              ...Ne
            }
          });
        } else {
          const K = Math.max(5, Math.min(Math.floor(0.5 * U), Math.floor(0.7 * C)));
          w.push({
            type: "text",
            style: {
              x: O,
              y: L,
              text: d.label,
              textAlign: "center",
              textVerticalAlign: "middle",
              fontSize: K,
              fill: s.label,
              fontWeight: "bold"
            }
          });
        }
      }
      return {
        type: "group",
        children: w
      };
    };
  }
  function w1(u) {
    const { boundaries: s, deltas: r } = u, c = s.slice(1, -1), d = [];
    return c.forEach((m, h) => {
      const p = r[h] ?? 0;
      for (let x = 0; x < p; x++) d.push([
        m,
        x - (p - 1) / 2
      ]);
    }), d;
  }
  function T1(u) {
    let s = 1;
    for (let r = 0; r < u.deltas.length; r++) u.deltas[r] > s && (s = u.deltas[r]);
    return (s - 1) / 2;
  }
  function om(u, s) {
    var _a;
    const { boundaries: r, similarity: c } = u;
    if (r.length - 1 === 0) return [];
    const m = Math.max(0, pn(r, s)), h = c[m] ?? [];
    let p = 0;
    for (let x = 0; x < c.length; x++) {
      const T = ((_a = c[x]) == null ? void 0 : _a[x]) ?? 0;
      T > p && (p = T);
    }
    return r.slice(0, -1).map((x, T) => ({
      value: [
        x,
        0,
        r[T + 1],
        1
      ],
      color: Om(p > 0 ? (h[T] ?? 0) / p : 0)
    }));
  }
  function A1(u) {
    return E1(u);
  }
  function E1(u) {
    const s = bn();
    return (r, c) => {
      const d = u()[r.dataIndex];
      if (!d) return {
        type: "group",
        children: []
      };
      const [m, h, p, x] = d.value, T = c.coord([
        m,
        x
      ]), v = c.coord([
        p,
        h
      ]), b = T[0], A = T[1], C = v[0] - b, U = v[1] - A;
      if (C <= 0 || U <= 0) return {
        type: "group",
        children: []
      };
      const w = [
        {
          type: "rect",
          shape: {
            x: b,
            y: A,
            width: C,
            height: U
          },
          style: {
            fill: d.color,
            stroke: s.grid,
            lineWidth: 0.5
          }
        }
      ];
      if (d.label && C >= 6 && U >= 6) {
        const O = Math.max(4, Math.min(Math.floor(0.65 * U), Math.floor(0.55 * C)));
        w.push({
          type: "text",
          style: {
            x: b + C / 2,
            y: A + U / 2,
            text: d.label,
            textAlign: "center",
            textVerticalAlign: "middle",
            fontSize: O,
            fill: d.labelColor ?? s.axisLabel
          }
        });
      }
      return {
        type: "group",
        children: w,
        emphasis: {
          disabled: true
        }
      };
    };
  }
  function Ym() {
    const u = q.useRef(null), [s, r] = q.useState({
      w: 0,
      h: 0
    });
    return q.useEffect(() => {
      const c = u.current;
      if (!c) return;
      const d = new ResizeObserver((m) => {
        const h = m[0].contentRect;
        r({
          w: Math.round(h.width),
          h: Math.round(h.height)
        });
      });
      return d.observe(c), () => d.disconnect();
    }, []), [
      u,
      s
    ];
  }
  const Cs = Um((u) => ({
    helpKey: null,
    open: (s) => u({
      helpKey: s
    }),
    close: () => u({
      helpKey: null
    })
  })), It = q.memo(function({ helpKey: s }) {
    const r = Bs[s], c = Cs((x) => x.open), d = q.useRef(null), [m, h] = q.useState(null);
    if (!r) return null;
    const p = () => {
      var _a;
      const x = (_a = d.current) == null ? void 0 : _a.getBoundingClientRect();
      x && h({
        x: x.left,
        y: x.bottom + 4
      });
    };
    return g.jsxs("button", {
      ref: d,
      type: "button",
      className: "help-icon nodrag",
      "aria-label": `Help: ${r.title}`,
      onMouseEnter: p,
      onMouseLeave: () => h(null),
      onMouseDown: (x) => x.stopPropagation(),
      onClick: (x) => {
        x.stopPropagation(), h(null), c(s);
      },
      children: [
        "\u24D8",
        m && Iu.createPortal(g.jsxs("div", {
          className: "help-popover",
          style: {
            left: m.x,
            top: m.y
          },
          children: [
            g.jsx("div", {
              className: "help-popover-title",
              children: r.title
            }),
            g.jsx("div", {
              className: "help-popover-short",
              children: r.short
            }),
            g.jsx("div", {
              className: "help-popover-more",
              children: "Click for details \u2192"
            })
          ]
        }), document.body)
      ]
    });
  }), z1 = q.memo(function({ index: s }) {
    const r = te((v) => v.lastData), c = te((v) => v.scalarCursor);
    if (!r || r.codes.length === 0) return null;
    const d = r.sub_encoders[s];
    if (!d) return null;
    const m = r.codes[pn(r.boundaries, c)] ?? [], [h, p] = d.bit_range, x = m.slice(h, p);
    if (x.length === 0) return null;
    const T = sa(s);
    return g.jsx("div", {
      className: "enc-mini-bits",
      children: x.map((v, b) => g.jsx("span", {
        className: "enc-mini-bit",
        style: {
          background: v === 1 ? T : "var(--viz-bits-off)",
          opacity: v === 1 ? 1 : 0.5
        }
      }, b))
    });
  }), M1 = {
    "interval-fixed": "Interval: Fixed Weight",
    "interval-tapering": "Interval: Tapering Weight",
    "interval-random-cell": "Interval: Random Cells",
    "periodic-fixed": "Periodic: Fixed Weight",
    "periodic-cell": "Periodic: Multi-Scale Cells",
    "periodic-random-cell": "Periodic: Random Cells"
  }, O1 = [
    "interval-fixed",
    "interval-tapering",
    "interval-random-cell",
    "periodic-fixed",
    "periodic-cell",
    "periodic-random-cell"
  ];
  function Xm(u) {
    switch (u) {
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
          min_period: $h,
          max_period: Fh,
          l_frac: Wh
        };
      case "periodic-random-cell":
        return {
          w: 1,
          min_period: $h,
          max_period: Fh,
          l_frac: Wh,
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
  function N1(u, s = 13) {
    return {
      type: u,
      n: s,
      w: 1,
      lower_bound: 0,
      upper_bound: 1,
      ...Xm(u)
    };
  }
  const D1 = {
    "interval-fixed": true,
    "interval-tapering": true,
    "interval-random-cell": true,
    "periodic-fixed": true,
    "periodic-cell": false,
    "periodic-random-cell": false
  }, C1 = {
    "interval-fixed": false,
    "interval-tapering": false,
    "interval-random-cell": false,
    "periodic-fixed": true,
    "periodic-cell": false,
    "periodic-random-cell": false
  }, R1 = {
    "interval-fixed": false,
    "interval-tapering": false,
    "interval-random-cell": false,
    "periodic-fixed": false,
    "periodic-cell": true,
    "periodic-random-cell": true
  }, B1 = {
    "interval-fixed": false,
    "interval-tapering": false,
    "interval-random-cell": true,
    "periodic-fixed": false,
    "periodic-cell": false,
    "periodic-random-cell": true
  };
  function Wt({ label: u, value: s, min: r, max: c, step: d, integer: m, help: h, onChange: p }) {
    return g.jsxs("div", {
      className: "enc-field nodrag",
      children: [
        g.jsxs("label", {
          children: [
            u,
            h && g.jsx(It, {
              helpKey: h
            })
          ]
        }),
        g.jsx("input", {
          type: "range",
          min: r,
          max: c,
          step: d,
          value: s,
          onChange: (x) => p(m ? parseInt(x.target.value, 10) : parseFloat(x.target.value))
        }),
        g.jsx("input", {
          type: "number",
          min: r,
          max: c,
          step: d,
          value: s,
          onChange: (x) => {
            const T = m ? parseInt(x.target.value, 10) : parseFloat(x.target.value);
            Number.isFinite(T) && p(T);
          }
        })
      ]
    });
  }
  const j1 = q.memo(function({ index: s, encoder: r, onChange: c, onRemove: d, canRemove: m }) {
    const h = sa(s), p = Math.max(1, Math.floor(r.n / 2)), x = (v) => c({
      type: v,
      ...Xm(v)
    }), T = (v) => {
      const b = Math.min(r.w ?? 1, Math.max(1, Math.floor(v / 2)));
      c({
        n: v,
        w: b
      });
    };
    return g.jsxs("div", {
      className: "enc-card",
      style: {
        borderLeft: `4px solid ${h}`
      },
      children: [
        g.jsxs("div", {
          className: "enc-card-header",
          children: [
            g.jsx("span", {
              className: "enc-card-swatch",
              style: {
                background: h
              }
            }),
            g.jsx("select", {
              className: "enc-card-type nodrag",
              value: r.type,
              onChange: (v) => x(v.target.value),
              children: O1.map((v) => g.jsx("option", {
                value: v,
                children: M1[v]
              }, v))
            }),
            g.jsx(It, {
              helpKey: `encoderType.${r.type}`
            }),
            g.jsx("button", {
              className: "enc-card-remove nodrag",
              onClick: d,
              disabled: !m,
              "data-tooltip": "Remove encoder",
              children: "\xD7"
            })
          ]
        }),
        g.jsx(Wt, {
          label: "n",
          value: r.n,
          min: vv,
          max: _v,
          step: 1,
          integer: true,
          help: "param.n",
          onChange: T
        }),
        D1[r.type] && g.jsx(Wt, {
          label: "w",
          value: r.w ?? 1,
          min: 1,
          max: p,
          step: 1,
          integer: true,
          help: "param.w",
          onChange: (v) => c({
            w: v
          })
        }),
        g.jsx(Wt, {
          label: "lo",
          value: r.lower_bound,
          min: -5,
          max: 6,
          step: kl,
          help: "param.offset",
          onChange: (v) => c({
            lower_bound: v
          })
        }),
        g.jsx(Wt, {
          label: "hi",
          value: r.upper_bound,
          min: -5,
          max: 6,
          step: kl,
          help: "param.range",
          onChange: (v) => c({
            upper_bound: v
          })
        }),
        C1[r.type] && g.jsx(Wt, {
          label: "period",
          value: r.period ?? 1,
          min: _s,
          max: Ss,
          step: xs,
          help: "param.period",
          onChange: (v) => c({
            period: v
          })
        }),
        R1[r.type] && g.jsxs(g.Fragment, {
          children: [
            g.jsx(Wt, {
              label: "minP",
              value: r.min_period ?? 0.2,
              min: _s,
              max: Ss,
              step: xs,
              help: "param.min_period",
              onChange: (v) => c({
                min_period: v
              })
            }),
            g.jsx(Wt, {
              label: "maxP",
              value: r.max_period ?? 0.6,
              min: _s,
              max: Ss,
              step: xs,
              help: "param.max_period",
              onChange: (v) => c({
                max_period: v
              })
            }),
            g.jsx(Wt, {
              label: "lFrac",
              value: r.l_frac ?? 0.4,
              min: xv,
              max: wv,
              step: Tv,
              help: "param.l_frac",
              onChange: (v) => c({
                l_frac: v
              })
            })
          ]
        }),
        B1[r.type] && g.jsxs(g.Fragment, {
          children: [
            g.jsx(Wt, {
              label: "seed",
              value: r.seed ?? 0,
              min: 0,
              max: 9999,
              step: 1,
              integer: true,
              help: "param.seed",
              onChange: (v) => c({
                seed: v
              })
            }),
            r.type === "periodic-random-cell" && g.jsxs(g.Fragment, {
              children: [
                g.jsxs("label", {
                  className: "enc-field-check nodrag",
                  children: [
                    g.jsx("input", {
                      type: "checkbox",
                      checked: !!r.randomize_origins,
                      onChange: (v) => c({
                        randomize_origins: v.target.checked
                      })
                    }),
                    "randomize origins"
                  ]
                }),
                g.jsxs("label", {
                  className: "enc-field-check nodrag",
                  children: [
                    g.jsx("input", {
                      type: "checkbox",
                      checked: !!r.randomize_periods,
                      onChange: (v) => c({
                        randomize_periods: v.target.checked
                      })
                    }),
                    "randomize periods"
                  ]
                }),
                g.jsxs("label", {
                  className: "enc-field-check nodrag",
                  children: [
                    g.jsx("input", {
                      type: "checkbox",
                      checked: !!r.randomize_l_frac,
                      onChange: (v) => c({
                        randomize_l_frac: v.target.checked
                      })
                    }),
                    "randomize duty"
                  ]
                })
              ]
            }),
            r.type === "interval-random-cell" && g.jsxs(g.Fragment, {
              children: [
                g.jsx(Wt, {
                  label: "l (bin size)",
                  value: r.const_l ?? 0.1,
                  min: 0.01,
                  max: Math.max(0.02, r.upper_bound - r.lower_bound),
                  step: 0.01,
                  help: "param.l",
                  onChange: (v) => c({
                    const_l: v,
                    max_l: v
                  })
                }),
                g.jsxs("label", {
                  className: "enc-field-check nodrag",
                  children: [
                    g.jsx("input", {
                      type: "checkbox",
                      checked: !!r.randomize_l,
                      onChange: (v) => c({
                        randomize_l: v.target.checked
                      })
                    }),
                    "randomize length"
                  ]
                })
              ]
            })
          ]
        }),
        g.jsx(z1, {
          index: s
        })
      ]
    });
  }), U1 = q.memo(function() {
    const s = te((m) => m.encoders), r = te((m) => m.addEncoder), c = te((m) => m.removeEncoder), d = te((m) => m.updateEncoder);
    return g.jsxs("div", {
      className: "enc-panel",
      style: {
        width: 280
      },
      children: [
        g.jsx("div", {
          className: "enc-panel-title",
          children: "Encoders"
        }),
        g.jsxs("div", {
          className: "enc-controls-row",
          children: [
            g.jsx("button", {
              className: "enc-add-btn nodrag",
              disabled: s.length >= Nm,
              onClick: () => r(N1("interval-fixed")),
              children: "+ Add"
            }),
            g.jsx(It, {
              helpKey: "control.add"
            })
          ]
        }),
        s.length === 0 && g.jsx("div", {
          className: "enc-empty",
          children: "Add an encoder or pick a preset."
        }),
        s.map((m, h) => g.jsx(j1, {
          index: h,
          encoder: m,
          onChange: (p) => d(h, p),
          onRemove: () => c(h),
          canRemove: s.length > 1
        }, h))
      ]
    });
  }), H1 = Ku - ri, Ms = (u) => (u - ri) / H1 * 100, L1 = q.memo(function() {
    const s = te((G) => G.viewBounds), r = te((G) => G.setViewBounds), [c, d] = q.useState(s[0]), [m, h] = q.useState(s[1]), [p, x] = q.useState(s[0].toFixed(1)), [T, v] = q.useState(s[1].toFixed(1));
    q.useEffect(() => {
      d(s[0]), h(s[1]), x(s[0].toFixed(1)), v(s[1].toFixed(1));
    }, [
      s
    ]);
    const b = q.useRef(null), A = q.useRef(null), C = (G) => {
      A.current = G, b.current == null && (b.current = requestAnimationFrame(() => {
        b.current = null, A.current && r(A.current);
      }));
    };
    q.useEffect(() => () => {
      b.current != null && cancelAnimationFrame(b.current);
    }, []);
    const U = (G) => {
      const K = Math.min(G, m - kl);
      d(K), x(K.toFixed(1)), C([
        K,
        m
      ]);
    }, w = (G) => {
      const K = Math.max(G, c + kl);
      h(K), v(K.toFixed(1)), C([
        c,
        K
      ]);
    }, O = () => {
      const G = parseFloat(p);
      if (Number.isFinite(G)) {
        const K = Math.max(ri, Math.min(G, m - kl));
        d(K), x(K.toFixed(1)), r([
          K,
          m
        ]);
      } else x(c.toFixed(1));
    }, L = () => {
      const G = parseFloat(T);
      if (Number.isFinite(G)) {
        const K = Math.min(Ku, Math.max(G, c + kl));
        h(K), v(K.toFixed(1)), r([
          c,
          K
        ]);
      } else v(m.toFixed(1));
    };
    return g.jsxs("div", {
      className: "enc-panel",
      style: {
        width: 600
      },
      children: [
        g.jsxs("div", {
          className: "enc-panel-title",
          children: [
            "Plot X-Range ",
            g.jsx(It, {
              helpKey: "control.viewBounds"
            })
          ]
        }),
        g.jsx("div", {
          className: "enc-controls-row",
          children: g.jsxs("div", {
            className: "dual-range nodrag",
            children: [
              g.jsx("input", {
                type: "text",
                inputMode: "decimal",
                className: "dual-range-val",
                value: p,
                "aria-label": "Plot x-range minimum",
                onChange: (G) => x(G.target.value),
                onBlur: O,
                onKeyDown: (G) => {
                  G.key === "Enter" && O();
                }
              }),
              g.jsxs("div", {
                className: "dual-range-track",
                children: [
                  g.jsx("div", {
                    className: "dual-range-fill",
                    style: {
                      left: `${Ms(c)}%`,
                      width: `${Math.max(0, Ms(m) - Ms(c))}%`
                    }
                  }),
                  g.jsx("input", {
                    type: "range",
                    min: ri,
                    max: Ku,
                    step: kl,
                    value: c,
                    "aria-label": "Plot x-range minimum slider",
                    onChange: (G) => U(parseFloat(G.target.value))
                  }),
                  g.jsx("input", {
                    type: "range",
                    min: ri,
                    max: Ku,
                    step: kl,
                    value: m,
                    "aria-label": "Plot x-range maximum slider",
                    onChange: (G) => w(parseFloat(G.target.value))
                  })
                ]
              }),
              g.jsx("input", {
                type: "text",
                inputMode: "decimal",
                className: "dual-range-val",
                value: T,
                "aria-label": "Plot x-range maximum",
                onChange: (G) => v(G.target.value),
                onBlur: L,
                onKeyDown: (G) => {
                  G.key === "Enter" && L();
                }
              })
            ]
          })
        })
      ]
    });
  }), q1 = q.memo(function({ bare: s = false }) {
    const [r, c] = te((O) => O.viewBounds), d = te((O) => O.scalarCursor), m = te((O) => O.setScalarCursor), h = q.useRef(null), p = q.useRef(null), x = q.useCallback((O) => {
      p.current = O, h.current == null && (h.current = requestAnimationFrame(() => {
        h.current = null, p.current != null && m(p.current);
      }));
    }, [
      m
    ]);
    q.useEffect(() => () => {
      h.current != null && cancelAnimationFrame(h.current);
    }, []);
    const [T, v] = q.useState(d.toFixed(3));
    q.useEffect(() => v(d.toFixed(3)), [
      d
    ]);
    const b = () => {
      const O = parseFloat(T);
      if (Number.isFinite(O)) {
        const L = Math.min(c, Math.max(r, O));
        m(L), v(L.toFixed(3));
      } else v(d.toFixed(3));
    }, A = (c - r) / 500 || 0.01, C = Math.min(c, Math.max(r, d)), w = {
      "--enc-fill": `${c > r ? (C - r) / (c - r) * 100 : 0}%`
    };
    return s ? g.jsx("input", {
      type: "range",
      className: "nodrag enc-range",
      style: w,
      min: r,
      max: c,
      step: A,
      value: C,
      onChange: (O) => x(parseFloat(O.target.value))
    }) : g.jsxs("div", {
      className: "enc-panel",
      style: {
        width: 600
      },
      children: [
        g.jsxs("div", {
          className: "enc-panel-title",
          children: [
            "Scalar Cursor ",
            g.jsx(It, {
              helpKey: "control.scalarSlider"
            })
          ]
        }),
        g.jsxs("div", {
          className: "enc-cursor",
          children: [
            g.jsx("input", {
              type: "text",
              inputMode: "decimal",
              className: "nodrag enc-cursor-val",
              value: T,
              "aria-label": "Scalar cursor value",
              onChange: (O) => v(O.target.value),
              onBlur: b,
              onKeyDown: (O) => {
                O.key === "Enter" && b();
              }
            }),
            g.jsxs("div", {
              className: "enc-slider-cell",
              children: [
                g.jsx("input", {
                  type: "range",
                  className: "nodrag enc-range",
                  style: w,
                  min: r,
                  max: c,
                  step: A,
                  value: C,
                  onChange: (O) => x(parseFloat(O.target.value))
                }),
                g.jsxs("div", {
                  className: "enc-bounds",
                  "aria-hidden": "true",
                  children: [
                    g.jsx("span", {
                      children: r
                    }),
                    g.jsx("span", {
                      children: c
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }), G1 = "var(--viz-bits-cursor)", Y1 = 512;
  function X1(u) {
    const s = new Array(u.n_bits).fill("var(--viz-bits-on)");
    return u.sub_encoders.forEach((r, c) => {
      const [d, m] = r.bit_range ?? [
        0,
        0
      ], h = sa(c);
      for (let p = d; p < m; p++) s[p] = h;
    }), s;
  }
  function sm({ code: u, label: s, dotColor: r, colorMap: c, flags: d }) {
    let m = u.slice(0, Y1).map((h, p) => p);
    return d.showIndex && (d.sortByActive && (m = m.slice().sort((h, p) => (u[p] ?? 0) - (u[h] ?? 0))), d.hideZeros && (m = m.filter((h) => (u[h] ?? 0) === 1))), g.jsxs("div", {
      children: [
        g.jsxs("div", {
          className: "enc-bits-row-label",
          children: [
            g.jsx("span", {
              className: "enc-bits-dot",
              style: {
                background: r
              }
            }),
            g.jsx("span", {
              children: s
            })
          ]
        }),
        g.jsx("div", {
          className: "enc-bits-squares",
          children: m.map((h) => {
            const p = u[h] ?? 0, x = p === 1 ? d.colorCoded ? c[h] ?? "var(--viz-bits-on)" : "var(--viz-bits-on)" : "var(--viz-bits-off)";
            return g.jsx("span", {
              className: "enc-bit-square",
              "data-tooltip": `bit ${h}: ${p}`,
              style: {
                background: x,
                color: p === 1 ? "var(--viz-bits-on-text)" : "var(--viz-bits-off-text)"
              },
              children: d.showIndex ? h : p
            }, h);
          })
        })
      ]
    });
  }
  function Qu({ active: u, disabled: s, onToggle: r, children: c }) {
    return g.jsx("button", {
      type: "button",
      className: `enc-bits-ctl-btn${u ? " active" : ""}`,
      disabled: s,
      onClick: r,
      children: c
    });
  }
  const Q1 = q.memo(function() {
    const s = te((O) => O.lastData), r = te((O) => O.scalarCursor), c = te((O) => O.refPoints), [d, m] = q.useState(false), [h, p] = q.useState(false), [x, T] = q.useState(false), [v, b] = q.useState(false), A = q.useMemo(() => s ? X1(s) : [], [
      s
    ]);
    if (!s || s.codes.length === 0) return g.jsxs("div", {
      className: "enc-panel",
      style: {
        width: 280
      },
      children: [
        g.jsxs("div", {
          className: "enc-panel-title",
          children: [
            "Bit Codes ",
            g.jsx(It, {
              helpKey: "control.bitsPanel"
            })
          ]
        }),
        g.jsx("div", {
          className: "enc-empty",
          children: "Add encoders to see bit codes."
        })
      ]
    });
    const C = {
      colorCoded: d,
      showIndex: h,
      sortByActive: x,
      hideZeros: v
    }, U = s.codes[pn(s.boundaries, r)] ?? [], w = (O) => ca[O % ca.length];
    return g.jsxs("div", {
      className: "enc-panel",
      style: {
        width: 280
      },
      children: [
        g.jsxs("div", {
          className: "enc-bits-header",
          children: [
            g.jsxs("div", {
              className: "enc-panel-title",
              children: [
                "Bit Codes ",
                g.jsx(It, {
                  helpKey: "control.bitsPanel"
                })
              ]
            }),
            g.jsxs("div", {
              className: "enc-bits-ctl nodrag",
              children: [
                g.jsx(Qu, {
                  active: d,
                  onToggle: () => m((O) => !O),
                  children: "Color-Coded"
                }),
                g.jsx(Qu, {
                  active: h,
                  onToggle: () => p((O) => !O),
                  children: "Show Index"
                }),
                h && g.jsxs(g.Fragment, {
                  children: [
                    g.jsx(Qu, {
                      active: x,
                      onToggle: () => T((O) => !O),
                      children: "Sort by Active"
                    }),
                    g.jsx(Qu, {
                      active: v,
                      onToggle: () => b((O) => !O),
                      children: "Hide 0s"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        g.jsxs("div", {
          className: "enc-bits-rows",
          style: {
            marginTop: 6
          },
          children: [
            g.jsx(sm, {
              code: U,
              label: `cursor: ${r.toFixed(3)}`,
              dotColor: G1,
              colorMap: A,
              flags: C
            }),
            c.map((O, L) => {
              const G = s.codes[pn(s.boundaries, O)] ?? [];
              return g.jsx(sm, {
                code: G,
                label: O.toFixed(3),
                dotColor: w(L),
                colorMap: A,
                flags: C
              }, L);
            })
          ]
        })
      ]
    });
  }), Qm = {
    bins: [
      {
        glyph: "\u229F",
        title: "Fold into one period",
        param: "folded",
        kind: "bool"
      }
    ],
    "bits-by-data": [
      {
        glyph: "\u2261",
        title: "Region boundaries",
        param: "gap",
        kind: "gap"
      }
    ],
    "projected-similarity": [
      {
        glyph: "\u2261",
        title: "Region boundaries",
        param: "gap",
        kind: "gap"
      },
      {
        glyph: "#",
        title: "Show values",
        param: "showText",
        kind: "bool"
      }
    ]
  };
  function rm(u) {
    var _a;
    return (((_a = Qm[u]) == null ? void 0 : _a.length) ?? 0) > 0;
  }
  const V1 = q.memo(function({ type: s }) {
    const r = te((m) => m.subplotParams[s]), c = te((m) => m.setSubplotParam), d = Qm[s];
    return d ? g.jsx("span", {
      className: "subplot-param-ctls nodrag",
      children: d.map((m) => {
        const h = m.kind === "gap" ? ((r == null ? void 0 : r.gap) ?? 0) === 1 : !!(r == null ? void 0 : r[m.param]);
        return g.jsx("button", {
          className: `subplot-param-btn${h ? " active" : ""}`,
          "data-tooltip": m.title,
          onClick: () => c(s, {
            [m.param]: m.kind === "gap" ? h ? 0 : 1 : !h
          }),
          children: m.glyph
        }, m.param);
      })
    }) : null;
  });
  function Z1(u) {
    var _a;
    return ((_a = js[u]) == null ? void 0 : _a.titleColor) ?? bn().axisTitle;
  }
  const K1 = 24;
  function ku(u, s) {
    var _a, _b2, _c;
    try {
      const c = (_c = (_b2 = (_a = u.getModel().getComponent("grid", s)) == null ? void 0 : _a.coordinateSystem) == null ? void 0 : _b2.getRect) == null ? void 0 : _c.call(_b2);
      return c ? {
        x: c.x,
        y: c.y,
        width: c.width,
        height: c.height
      } : null;
    } catch {
      return null;
    }
  }
  function fm(u, s) {
    return () => {
      const r = u(), c = s();
      return !r || !c ? {
        type: "group",
        children: []
      } : {
        type: "image",
        style: {
          image: r,
          x: c.x,
          y: c.y,
          width: c.width,
          height: c.height
        },
        silent: true
      };
    };
  }
  function k1(u, s, r, c, d, m, h) {
    var _a;
    const { codes: p, boundaries: x, n_bits: T } = m;
    if (x.length < 2 || T === 0) return;
    const v = [];
    for (let b = 0; b < T; b++) {
      const A = s.convertToPixel({
        yAxisIndex: c
      }, b + 0.5) - d.y, C = s.convertToPixel({
        yAxisIndex: c
      }, b - 0.5) - d.y;
      v.push({
        top: A,
        h: Math.max(1, C - A)
      });
    }
    for (let b = 0; b < x.length - 1; b++) {
      const A = s.convertToPixel({
        xAxisIndex: r
      }, x[b]) - d.x, C = s.convertToPixel({
        xAxisIndex: r
      }, x[b + 1]) - d.x, U = Math.max(1, C - A);
      for (let w = 0; w < T; w++) u.fillStyle = ((_a = p[b]) == null ? void 0 : _a[w]) ?? 0 ? jv : Uv, u.fillRect(A, v[w].top, U, v[w].h);
    }
    if (h) {
      u.strokeStyle = Bm, u.lineWidth = 1;
      for (const b of x) {
        const A = s.convertToPixel({
          xAxisIndex: r
        }, b) - d.x;
        u.beginPath(), u.moveTo(A, 0), u.lineTo(A, d.height), u.stroke();
      }
    }
  }
  function J1(u, s, r, c, d, m, h, p) {
    var _a;
    const { similarity: x, boundaries: T } = m, v = T.length - 1;
    if (v === 0 || x.length === 0) return;
    const b = bn();
    let A = 1;
    for (let w = 0; w < x.length; w++) {
      const O = x[w];
      if (O) for (let L = 0; L < O.length; L++) O[L] > A && (A = O[L]);
    }
    const C = [];
    for (let w = 0; w < v; w++) {
      const O = s.convertToPixel({
        xAxisIndex: r
      }, T[w]) - d.x, L = s.convertToPixel({
        xAxisIndex: r
      }, T[w + 1]) - d.x;
      C.push({
        x0: O,
        w: Math.max(1, L - O)
      });
    }
    const U = [];
    for (let w = 0; w < v; w++) {
      const O = s.convertToPixel({
        yAxisIndex: c
      }, T[w + 1]) - d.y, L = s.convertToPixel({
        yAxisIndex: c
      }, T[w]) - d.y;
      U.push({
        top: O,
        h: Math.max(1, L - O)
      });
    }
    for (let w = 0; w < v; w++) for (let O = 0; O < v; O++) {
      const L = ((_a = x[w]) == null ? void 0 : _a[O]) ?? 0, G = A > 0 ? L / A : 0;
      if (u.fillStyle = Om(G), u.fillRect(C[w].x0, U[O].top, C[w].w, U[O].h), p && C[w].w >= 6 && U[O].h >= 6) {
        const K = Math.max(4, Math.min(Math.floor(0.65 * U[O].h), Math.floor(0.55 * C[w].w)));
        u.font = `${K}px sans-serif`, u.textAlign = "center", u.textBaseline = "middle", u.fillStyle = G > 0.55 ? b.cellInactive : b.cellActive, u.fillText(String(L), C[w].x0 + C[w].w / 2, U[O].top + U[O].h / 2);
      }
    }
    if (h) {
      u.strokeStyle = Bm, u.lineWidth = 1;
      for (const w of T) {
        const O = s.convertToPixel({
          xAxisIndex: r
        }, w) - d.x;
        u.beginPath(), u.moveTo(O, 0), u.lineTo(O, d.height), u.stroke();
      }
      for (const w of T) {
        const O = s.convertToPixel({
          yAxisIndex: c
        }, w) - d.y;
        u.beginPath(), u.moveTo(0, O), u.lineTo(d.width, O), u.stroke();
      }
    }
  }
  function dm(u, s, r, c = 0, d = -1) {
    const m = [
      "cursor-line-a",
      "cursor-line-b"
    ];
    if (c < 0) return [];
    let h = NaN;
    try {
      h = u.convertToPixel({
        xAxisIndex: c
      }, s);
    } catch {
      h = NaN;
    }
    const p = 2, x = Math.max(2, r - 2);
    let T = [];
    if (isFinite(h) && (T = [
      [
        p,
        x
      ]
    ], d >= 0)) {
      const A = ku(u, d);
      if (A) {
        const C = A.y, U = A.y + A.height, w = [];
        C - p > 1 && w.push([
          p,
          Math.min(C, x)
        ]), x - U > 1 && w.push([
          Math.max(U, p),
          x
        ]), T = w;
      }
    }
    const v = isFinite(h) ? h : 0, b = (A, C, U) => ({
      id: A,
      type: "line",
      shape: {
        x1: v,
        y1: C[0],
        x2: v,
        y2: C[1]
      },
      style: {
        stroke: Dm,
        lineWidth: 1.5,
        opacity: U ? 1 : 0
      },
      z: 100,
      silent: true
    });
    return m.map((A, C) => T[C] ? b(A, T[C], true) : b(A, [
      p,
      p
    ], false));
  }
  const hm = [];
  function ci(u, s, r) {
    return u + (s - u) * r;
  }
  function $1(u) {
    return u < 0.5 ? 2 * u * u : -1 + (4 - 2 * u) * u;
  }
  const Os = {
    bins: "Bins",
    "per-bin": "Per-Bin",
    similarity: "Similarity"
  }, Vm = q.memo(function({ specs: s, data: r, cursor: c, refPoints: d = hm, viewBounds: m, params: h, width: p = 360, height: x = 220, className: T, onPlotRect: v }) {
    var _a, _b2, _c, _d;
    const b = ((_a = h == null ? void 0 : h.bins) == null ? void 0 : _a.folded) ?? false, A = q.useMemo(() => s.includes("similarity") ? d : hm, [
      s,
      d
    ]), C = `${((_b2 = h == null ? void 0 : h["bits-by-data"]) == null ? void 0 : _b2.gap) ?? 0}|${((_c = h == null ? void 0 : h["projected-similarity"]) == null ? void 0 : _c.gap) ?? 0}|${((_d = h == null ? void 0 : h["projected-similarity"]) == null ? void 0 : _d.showText) ? 1 : 0}`, U = q.useRef(null), w = q.useRef(null), O = q.useRef([]), L = q.useRef([]), G = q.useRef([]), K = q.useRef([]), ce = q.useRef([]), W = q.useRef(s), oe = q.useRef(c);
    oe.current = c;
    const k = q.useRef({
      raf: null,
      prev: b
    }), se = q.useRef(false), Ne = q.useRef(/* @__PURE__ */ new Map()), tt = q.useRef(/* @__PURE__ */ new Map()), lt = q.useRef([]), [He, Re] = q.useState([]), re = q.useRef({
      data: null,
      hasBins: false,
      hasSimilarity: false,
      simHeatGi: -1,
      perBinGi: -1,
      firstInputGi: 0,
      binsParams: {
        folded: b,
        lo: 0,
        hi: 1
      }
    }), ye = () => {
      const H = w.current;
      if (!H) {
        Re([]);
        return;
      }
      const X = [];
      W.current.forEach((V, be) => {
        if (!rm(V)) return;
        const ee = ku(H, be);
        ee && X.push({
          type: V,
          y: ee.y,
          height: ee.height
        });
      }), Re(X);
    }, D = () => {
      const H = w.current;
      if (!H || !v) return;
      const X = ku(H, 0);
      X && v({
        left: X.x,
        right: X.x + X.width,
        width: X.width
      });
    }, Y = () => {
      const H = w.current, X = re.current.data;
      if (!H || !X) return;
      const V = window.devicePixelRatio || 1, be = [];
      W.current.forEach((ee, I) => {
        var _a2, _b3, _c2;
        if (ee !== "bits-by-data" && ee !== "projected-similarity") return;
        const ne = ku(H, I);
        if (!ne || ne.width <= 0 || ne.height <= 0) return;
        const Le = document.createElement("canvas");
        Le.width = Math.max(1, Math.round(ne.width * V)), Le.height = Math.max(1, Math.round(ne.height * V));
        const qe = Le.getContext("2d");
        if (!qe) return;
        qe.scale(V, V);
        const Ze = lt.current[I] ?? I;
        ee === "bits-by-data" ? k1(qe, H, I, Ze, ne, X, (((_a2 = h == null ? void 0 : h["bits-by-data"]) == null ? void 0 : _a2.gap) ?? 0) > 0) : J1(qe, H, I, Ze, ne, X, (((_b3 = h == null ? void 0 : h["projected-similarity"]) == null ? void 0 : _b3.gap) ?? 0) > 0, !!((_c2 = h == null ? void 0 : h["projected-similarity"]) == null ? void 0 : _c2.showText)), Ne.current.set(I, Le), tt.current.set(I, ne), be.push({
          id: `static-${I}`,
          data: [
            [
              Math.random()
            ]
          ]
        });
      }), be.length > 0 && H.setOption({
        series: be
      });
    };
    return q.useEffect(() => {
      if (!U.current) return;
      const H = gm(U.current) ?? vm(U.current, void 0, {
        renderer: "canvas"
      });
      return w.current = H, () => {
        H.dispose(), w.current = null;
      };
    }, []), q.useEffect(() => {
      var _a2;
      (_a2 = w.current) == null ? void 0 : _a2.resize({
        width: p,
        height: x
      }), requestAnimationFrame(() => {
        ye(), Y(), D();
      });
    }, [
      p,
      x
    ]), q.useEffect(() => {
      const H = w.current;
      if (!H) return;
      if (W.current = s, !r || s.length === 0) {
        H.clear(), Re([]);
        return;
      }
      const [X, V] = _1(r, m), be = s.some((ae) => rm(ae)) ? K1 : 0, ee = d.map((ae, $) => ca[$ % ca.length]), I = s.map((ae) => v1[ae] ?? 1), ne = g1(I), Le = zs(r, c), qe = [], Ze = [], Ke = [], De = [], ge = [];
      let Te = 0;
      const Ge = bn(), Zt = {
        show: true,
        precision: 4,
        backgroundColor: Ge.tooltipBg,
        color: Ge.tooltipText,
        fontSize: ws
      };
      s.forEach((ae, $) => {
        const { topPct: st, heightPct: Lt } = ne[$], Ce = $ === 0, zt = $ === s.length - 1, _l = s.length === 1, gn = Ce && !_l ? "top" : "bottom", vn = Ce || zt;
        qe.push({
          left: Ev + be,
          right: zv,
          top: `${(st * 100).toFixed(1)}%`,
          height: `${(Lt * 100).toFixed(1)}%`
        }), Ze.push({
          type: "value",
          gridIndex: $,
          min: X,
          max: V,
          position: gn,
          axisLine: {
            show: true,
            onZero: false,
            lineStyle: {
              color: Ge.axisLine,
              width: 1
            }
          },
          axisTick: {
            show: zt
          },
          axisLabel: {
            show: zt,
            fontSize: ws,
            color: Ge.axisLabel
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: Ge.gridStrong,
              opacity: 0.4
            }
          },
          axisPointer: {
            show: true,
            label: {
              ...Zt,
              show: vn
            }
          }
        });
        const Me = {
          gridIndex: $,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        }, qt = {
          color: Z1(ae),
          fontWeight: "bold",
          fontSize: 11
        };
        if (ae === "bins") {
          const { bins: nt, boundLines: Kt, totalHeight: Gt } = Xu(r, Le, {
            folded: b,
            lo: X,
            hi: V
          });
          O.current = nt, L.current = Kt;
          const vi = um(Gt);
          ge.push(Te), Ke.push({
            ...Me,
            id: "bins-yaxis",
            type: "value",
            min: vi.min,
            max: vi.max,
            name: Os.bins,
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: qt
          }), Te++, De.push({
            id: "bins-series",
            type: "custom",
            renderItem: m1(() => O.current),
            data: O.current,
            encode: {
              x: [
                0,
                2
              ],
              y: [
                1,
                3
              ]
            },
            xAxisIndex: $,
            yAxisIndex: ge[$],
            zlevel: 10,
            emphasis: {
              disabled: true
            }
          }), De.push({
            id: "bins-bound-lines",
            type: "custom",
            renderItem: y1(() => L.current),
            data: L.current,
            encode: {
              x: 0,
              y: [
                1,
                2
              ]
            },
            xAxisIndex: $,
            yAxisIndex: ge[$],
            zlevel: 11,
            silent: true
          });
        } else if (ae === "per-bin") Ze[$] = {
          ...Ze[$],
          min: 0,
          max: 1,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisPointer: {
            show: false
          }
        }, ce.current = tm(r, c), ge.push(Te), Ke.push({
          ...Me,
          type: "value",
          min: 0,
          max: 1,
          name: Os["per-bin"],
          nameLocation: "middle",
          nameGap: 10,
          nameTextStyle: qt
        }), Te++, De.push({
          id: `per-bin-${$}`,
          type: "custom",
          renderItem: Kv(() => ce.current),
          data: ce.current,
          encode: {
            x: 0,
            y: 1
          },
          xAxisIndex: $,
          yAxisIndex: ge[$],
          zlevel: 12,
          emphasis: {
            disabled: true
          },
          silent: true
        });
        else if (ae === "similarity") {
          const nt = b1(r);
          ge.push(Te), Ke.push({
            ...Me,
            type: "value",
            position: "left",
            min: 0,
            max: nt,
            minInterval: 1,
            name: Os.similarity,
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: qt
          }), Te++, Ke.push({
            ...Me,
            type: "value",
            position: "right",
            min: 0,
            max: nt,
            minInterval: 1,
            axisLabel: {
              show: true,
              color: Ge.axisLabel,
              fontSize: ws
            }
          }), Te++, p1(r, d, ee).forEach(({ points: Kt, color: Gt }) => {
            De.push({
              type: "line",
              data: Kt,
              showSymbol: false,
              step: "end",
              lineStyle: {
                color: Gt,
                width: 2
              },
              areaStyle: {
                color: Hv(Gt, 0.3)
              },
              xAxisIndex: $,
              yAxisIndex: ge[$]
            });
          }), d.forEach((Kt, Gt) => {
            De.push({
              type: "line",
              data: [],
              markLine: {
                symbol: "none",
                lineStyle: {
                  type: "dashed",
                  color: ee[Gt],
                  width: 1
                },
                data: [
                  {
                    xAxis: Kt
                  }
                ],
                label: {
                  show: false
                }
              },
              xAxisIndex: $,
              yAxisIndex: ge[$]
            });
          }), De.push({
            id: "similarity-cursor",
            type: "line",
            data: cm(r, c),
            showSymbol: false,
            step: "end",
            lineStyle: {
              color: Dm,
              width: 2
            },
            areaStyle: {
              color: Av
            },
            xAxisIndex: $,
            yAxisIndex: ge[$],
            zlevel: 10
          });
        } else if (ae === "decomposition") G.current = S1(r), ge.push(Te), Ke.push({
          ...Me,
          type: "value",
          min: 0,
          max: 1,
          name: "Regions",
          nameLocation: "middle",
          nameGap: 10,
          nameTextStyle: qt
        }), Te++, De.push({
          type: "custom",
          renderItem: x1(() => G.current),
          data: G.current,
          encode: {
            x: [
              0,
              2
            ],
            y: [
              1,
              3
            ]
          },
          xAxisIndex: $,
          yAxisIndex: ge[$]
        });
        else if (ae === "similarity-heatmap") K.current = om(r, c), ge.push(Te), Ke.push({
          ...Me,
          type: "value",
          min: 0,
          max: 1,
          name: "Sim. Heat",
          nameLocation: "middle",
          nameGap: 10,
          nameTextStyle: qt
        }), Te++, De.push({
          id: `sim-heatmap-${$}`,
          type: "custom",
          renderItem: A1(() => K.current),
          data: K.current,
          encode: {
            x: [
              0,
              2
            ],
            y: [
              1,
              3
            ]
          },
          xAxisIndex: $,
          yAxisIndex: ge[$],
          zlevel: 12
        });
        else if (ae === "features") {
          const nt = T1(r);
          ge.push(Te), Ke.push({
            ...Me,
            type: "value",
            position: "left",
            min: -(nt + 1),
            max: nt + 1,
            minInterval: 1,
            name: "Crossings",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: qt
          }), Te++, Ke.push({
            ...Me,
            type: "value",
            position: "right",
            min: -(nt + 1),
            max: nt + 1,
            axisLabel: {
              show: false
            }
          }), Te++, De.push({
            type: "scatter",
            data: w1(r),
            symbolSize: 6,
            itemStyle: {
              color: Ge.axisLine
            },
            xAxisIndex: $,
            yAxisIndex: ge[$]
          });
        } else if (ae === "bits-by-data") {
          const nt = r.n_bits;
          ge.push(Te), Ke.push({
            ...Me,
            type: "value",
            min: -0.5,
            max: Math.max(0.5, nt - 0.5),
            minInterval: 1,
            name: "Bit Index",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: qt
          }), Te++, De.push({
            id: `static-${$}`,
            type: "custom",
            renderItem: fm(() => Ne.current.get($), () => tt.current.get($)),
            data: [
              [
                0
              ]
            ],
            xAxisIndex: $,
            yAxisIndex: ge[$],
            silent: true,
            zlevel: 0
          });
        } else if (ae === "projected-similarity") {
          const nt = r.boundaries[0] ?? X, Kt = r.boundaries[r.boundaries.length - 1] ?? V;
          ge.push(Te), Ke.push({
            ...Me,
            type: "value",
            min: nt,
            max: Kt,
            name: "Self-Sim",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: qt
          }), Te++, De.push({
            id: `static-${$}`,
            type: "custom",
            renderItem: fm(() => Ne.current.get($), () => tt.current.get($)),
            data: [
              [
                0
              ]
            ],
            xAxisIndex: $,
            yAxisIndex: ge[$],
            silent: true,
            zlevel: 0
          });
        }
      }), lt.current = ge;
      const le = s.findIndex((ae) => ae !== "per-bin");
      re.current = {
        data: r,
        hasBins: s.includes("bins"),
        hasSimilarity: s.includes("similarity"),
        simHeatGi: s.indexOf("similarity-heatmap"),
        perBinGi: s.indexOf("per-bin"),
        firstInputGi: le,
        binsParams: {
          folded: b,
          lo: X,
          hi: V
        }
      }, k.current.raf != null && cancelAnimationFrame(k.current.raf), k.current = {
        raf: null,
        prev: b
      }, se.current = false;
      for (const ae of De) ae.type === "custom" && (ae.progressive = 0);
      H.setOption({
        animation: false,
        backgroundColor: "transparent",
        grid: qe,
        xAxis: Ze,
        yAxis: Ke,
        series: De,
        axisPointer: {
          link: [
            {
              xAxisIndex: "all"
            }
          ],
          label: {
            show: true
          }
        }
      }, {
        notMerge: true
      }), H.setOption({
        graphic: dm(H, c, x, le, re.current.perBinGi)
      }), requestAnimationFrame(() => {
        ye(), Y(), D();
      });
    }, [
      r,
      s,
      A,
      C,
      m,
      p,
      x
    ]), q.useEffect(() => {
      const H = w.current, X = re.current;
      if (!H || !X.data) return;
      const V = [];
      if (X.hasBins && !se.current) {
        const be = zs(X.data, c), { bins: ee } = Xu(X.data, be, X.binsParams);
        O.current = ee, V.push({
          id: "bins-series",
          data: ee
        });
      }
      X.hasSimilarity && V.push({
        id: "similarity-cursor",
        data: cm(X.data, c)
      }), X.simHeatGi >= 0 && (K.current = om(X.data, c), V.push({
        id: `sim-heatmap-${X.simHeatGi}`,
        data: K.current
      })), X.perBinGi >= 0 && (ce.current = tm(X.data, c), V.push({
        id: `per-bin-${X.perBinGi}`,
        data: ce.current
      })), H.setOption({
        series: V,
        graphic: dm(H, c, x, X.firstInputGi, X.perBinGi)
      });
    }, [
      c,
      x
    ]), q.useEffect(() => {
      const H = w.current, X = re.current, V = k.current, be = V.prev;
      if (V.prev = b, !H || !X.data || !X.hasBins || be === b) return;
      V.raf != null && cancelAnimationFrame(V.raf);
      const ee = X.data, { lo: I, hi: ne } = X.binsParams, Le = zs(ee, oe.current), qe = Xu(ee, Le, {
        folded: be,
        lo: I,
        hi: ne
      }), Ze = Xu(ee, Le, {
        folded: b,
        lo: I,
        hi: ne
      });
      X.binsParams = {
        ...X.binsParams,
        folded: b
      }, se.current = true;
      const Ke = performance.now(), De = (ge) => {
        const Te = Math.min((ge - Ke) / Rv, 1), Ge = $1(Te), Zt = qe.bins.map((st, Lt) => {
          const Ce = Ze.bins[Lt] ?? st;
          return {
            ...Ce,
            value: [
              Ce.value[0],
              ci(st.value[1], Ce.value[1], Ge),
              Ce.value[2],
              ci(st.value[3], Ce.value[3], Ge)
            ]
          };
        }), le = qe.boundLines.map((st, Lt) => {
          const Ce = Ze.boundLines[Lt] ?? st;
          return {
            value: [
              Ce.value[0],
              ci(st.value[1], Ce.value[1], Ge),
              ci(st.value[2], Ce.value[2], Ge)
            ]
          };
        });
        O.current = Zt, L.current = le;
        const { min: ae, max: $ } = um(ci(qe.totalHeight, Ze.totalHeight, Ge));
        H.setOption({
          yAxis: [
            {
              id: "bins-yaxis",
              min: ae,
              max: $
            }
          ],
          series: [
            {
              id: "bins-series",
              data: Zt
            },
            {
              id: "bins-bound-lines",
              data: le
            }
          ]
        }), Te < 1 ? V.raf = requestAnimationFrame(De) : (V.raf = null, se.current = false, O.current = Ze.bins, L.current = Ze.boundLines);
      };
      return V.raf = requestAnimationFrame(De), () => {
        V.raf != null && cancelAnimationFrame(V.raf), V.raf = null, se.current = false;
      };
    }, [
      b
    ]), g.jsxs("div", {
      className: T,
      style: {
        width: `${p}px`,
        height: `${x}px`,
        position: "relative"
      },
      children: [
        g.jsx("div", {
          ref: U,
          style: {
            width: "100%",
            height: "100%"
          }
        }),
        g.jsx("div", {
          style: {
            position: "absolute",
            inset: 0,
            pointerEvents: "none"
          },
          children: He.map((H, X) => g.jsx("div", {
            className: "nodrag",
            style: {
              position: "absolute",
              left: 2,
              top: H.y + H.height / 2,
              transform: "translateY(-50%)",
              pointerEvents: "auto"
            },
            children: g.jsx(V1, {
              type: H.type
            })
          }, `${H.type}-${X}`))
        })
      ]
    });
  }), F1 = [
    "bins",
    "per-bin",
    "similarity",
    "bits-by-data",
    "projected-similarity",
    "decomposition",
    "similarity-heatmap",
    "features"
  ], W1 = q.memo(function() {
    const s = te((c) => c.subplots), r = te((c) => c.toggleSubplot);
    return g.jsxs("div", {
      className: "enc-panel",
      style: {
        width: 200
      },
      children: [
        g.jsx("div", {
          className: "enc-panel-title",
          children: "Subplot Nodes"
        }),
        g.jsx("div", {
          style: {
            display: "flex",
            flexWrap: "wrap",
            gap: 4
          },
          children: F1.map((c) => {
            const d = s.includes(c), m = js[c];
            return g.jsxs("span", {
              style: {
                display: "inline-flex",
                alignItems: "center"
              },
              children: [
                g.jsx("button", {
                  className: "nodrag",
                  onClick: () => r(c),
                  style: {
                    fontSize: 11,
                    padding: "2px 6px",
                    borderRadius: 4,
                    cursor: "pointer",
                    border: `2px solid ${(m == null ? void 0 : m.border) ?? "var(--text-tertiary)"}`,
                    background: d ? (m == null ? void 0 : m.bg) ?? "var(--accent-blue)" : "var(--bg-tertiary)",
                    color: "var(--text-primary)",
                    opacity: d ? 1 : 0.55
                  },
                  children: Fu[c] ?? c
                }),
                g.jsx(It, {
                  helpKey: `subplot.${c}`
                })
              ]
            }, c);
          })
        })
      ]
    });
  });
  function I1({ type: u, on: s, dragging: r, isOver: c, onToggle: d, onDragStart: m, onDragEnd: h, onDragOver: p, onDrop: x }) {
    const T = Bs[`subplot.${u}`], v = js[u], b = q.useRef(null), [A, C] = q.useState(null), U = () => {
      var _a;
      if (r) return;
      const w = (_a = b.current) == null ? void 0 : _a.getBoundingClientRect();
      w && C({
        x: w.left,
        y: w.bottom + 4
      });
    };
    return g.jsxs("button", {
      ref: b,
      type: "button",
      className: `nodrag enc-stacked-chip${c ? " enc-stacked-chip--over" : ""}`,
      draggable: true,
      "aria-label": Fu[u] ?? u,
      onClick: d,
      onMouseEnter: U,
      onMouseLeave: () => C(null),
      onDragStart: (w) => {
        w.stopPropagation(), C(null), w.dataTransfer.effectAllowed = "move", w.dataTransfer.setData("text/plain", u), m();
      },
      onDragEnd: (w) => {
        w.stopPropagation(), h();
      },
      onDragOver: (w) => {
        w.preventDefault(), w.dataTransfer.dropEffect = "move", p();
      },
      onDrop: (w) => {
        w.preventDefault(), w.stopPropagation(), x();
      },
      style: {
        border: `2px solid ${(v == null ? void 0 : v.border) ?? "var(--viz-chip-border)"}`,
        background: s ? (v == null ? void 0 : v.bg) ?? "var(--viz-chip-bg)" : "var(--viz-chip-off)",
        color: "var(--viz-chip-text)",
        opacity: r ? 0.4 : s ? 1 : 0.5
      },
      children: [
        g.jsx("span", {
          className: "enc-stacked-chip-label",
          children: Fu[u] ?? u
        }),
        A && T && Iu.createPortal(g.jsxs("div", {
          className: "help-popover",
          style: {
            left: A.x,
            top: A.y
          },
          children: [
            g.jsx("div", {
              className: "help-popover-title",
              children: T.title
            }),
            g.jsx("div", {
              className: "help-popover-short",
              children: T.short
            })
          ]
        }), document.body)
      ]
    });
  }
  const P1 = q.memo(function() {
    const s = te((b) => b.stackedOrder), r = te((b) => b.stackedActive), c = te((b) => b.toggleStackedSubplot), d = te((b) => b.setStackedOrder), m = q.useRef(null), [h, p] = q.useState(null), [x, T] = q.useState(-1), v = (b) => {
      const A = m.current;
      if (m.current = null, p(null), T(-1), !A) return;
      const C = s.indexOf(A);
      if (C < 0 || C === b) return;
      const U = s.filter((O) => O !== A);
      let w = U.indexOf(s[b]);
      w < 0 ? w = U.length : C < b && (w += 1), U.splice(w, 0, A), d(U);
    };
    return g.jsxs("div", {
      className: "enc-panel enc-stacked-panel",
      style: {
        width: 210
      },
      children: [
        g.jsx("div", {
          className: "enc-panel-title",
          children: "Stacked Subplots"
        }),
        g.jsx("div", {
          className: "enc-stacked-list",
          children: s.map((b, A) => g.jsx(I1, {
            type: b,
            on: r.includes(b),
            dragging: h === b,
            isOver: x === A && h !== null && h !== b,
            onToggle: () => c(b),
            onDragStart: () => {
              m.current = b, p(b);
            },
            onDragEnd: () => {
              m.current = null, p(null), T(-1);
            },
            onDragOver: () => T(A),
            onDrop: () => v(A)
          }, b))
        })
      ]
    });
  }), e_ = q.memo(function() {
    const s = te((d) => d.applyPreset), [r, c] = q.useState(0);
    return g.jsxs("div", {
      className: "enc-panel",
      style: {
        width: 260
      },
      children: [
        g.jsxs("div", {
          className: "enc-panel-title",
          children: [
            "Demos ",
            g.jsx(It, {
              helpKey: "control.presets"
            })
          ]
        }),
        g.jsx("select", {
          className: "nodrag enc-select",
          value: r,
          onChange: (d) => {
            const m = parseInt(d.target.value, 10);
            c(m), vs[m] && s(vs[m]);
          },
          style: {
            width: "100%",
            boxSizing: "border-box"
          },
          children: vs.map((d, m) => g.jsx("option", {
            value: m,
            children: d.label
          }, m))
        })
      ]
    });
  }), t_ = q.memo(function() {
    const s = te((W) => W.refPoints), [r, c] = te((W) => W.viewBounds), d = te((W) => W.scalarCursor), m = te((W) => W.addRefPoint), h = te((W) => W.updateRefPoint), p = te((W) => W.removeRefPoint), x = q.useRef(null), [T, v] = q.useState(null), b = (W) => ca[W % ca.length], A = (c - r) / 500 || 0.01, C = q.useRef(null), U = q.useRef(null), w = (W, oe) => {
      U.current = oe, C.current == null && (C.current = requestAnimationFrame(() => {
        C.current = null, U.current != null && h(W, U.current);
      }));
    };
    q.useEffect(() => () => {
      C.current != null && cancelAnimationFrame(C.current);
    }, []);
    const O = () => {
      var _a;
      if (s.length >= mi) return;
      const W = s.length, oe = Math.min(c, Math.max(r, d));
      m(oe);
      const k = (_a = x.current) == null ? void 0 : _a.getBoundingClientRect();
      v({
        index: W,
        addedNew: true,
        original: oe,
        x: (k == null ? void 0 : k.left) ?? 100,
        y: ((k == null ? void 0 : k.bottom) ?? 100) + 4
      });
    }, L = (W, oe) => {
      const k = oe.getBoundingClientRect();
      v({
        index: W,
        addedNew: false,
        original: s[W],
        x: k.left,
        y: k.bottom + 4
      });
    }, G = () => v(null), K = () => {
      T && (T.addedNew ? p(T.index) : h(T.index, T.original), v(null));
    }, ce = T ? s[T.index] ?? T.original : 0;
    return g.jsxs("div", {
      className: "enc-panel",
      style: {
        width: 240
      },
      children: [
        g.jsxs("div", {
          className: "enc-panel-title",
          children: [
            "Reference Points ",
            g.jsx(It, {
              helpKey: "control.bitsPanel"
            })
          ]
        }),
        g.jsxs("div", {
          className: "enc-ref-controls nodrag",
          children: [
            s.map((W, oe) => g.jsxs("span", {
              className: "enc-ref-chip",
              style: {
                borderColor: b(oe),
                cursor: "pointer"
              },
              onClick: (k) => L(oe, k.currentTarget),
              "data-tooltip": "Edit reference value",
              children: [
                g.jsx("span", {
                  className: "enc-bits-dot",
                  style: {
                    background: b(oe)
                  }
                }),
                W.toFixed(2),
                g.jsx("button", {
                  onClick: (k) => {
                    k.stopPropagation(), p(oe);
                  },
                  "data-tooltip": "Remove",
                  children: "\xD7"
                })
              ]
            }, oe)),
            s.length < mi && g.jsx("button", {
              ref: x,
              className: "enc-add-btn",
              onClick: O,
              children: "+ Add Value"
            }),
            s.length === 0 && g.jsx("span", {
              className: "enc-empty",
              style: {
                padding: 0
              },
              children: "none"
            })
          ]
        }),
        T && Iu.createPortal(g.jsx("div", {
          className: "enc-ref-popup-backdrop",
          onClick: G,
          children: g.jsxs("div", {
            className: "enc-ref-popup",
            style: {
              left: T.x,
              top: T.y
            },
            onClick: (W) => W.stopPropagation(),
            children: [
              g.jsxs("div", {
                className: "enc-ref-popup-row",
                children: [
                  g.jsx("input", {
                    type: "range",
                    min: r,
                    max: c,
                    step: A,
                    value: Math.min(c, Math.max(r, ce)),
                    onChange: (W) => w(T.index, parseFloat(W.target.value)),
                    style: {
                      width: 160
                    }
                  }),
                  g.jsx("span", {
                    className: "enc-cursor-val",
                    children: ce.toFixed(3)
                  })
                ]
              }),
              g.jsxs("div", {
                className: "enc-ref-popup-actions",
                children: [
                  g.jsx("button", {
                    className: "enc-add-btn",
                    onClick: G,
                    children: T.addedNew ? "Add" : "OK"
                  }),
                  g.jsx("button", {
                    className: "enc-ref-cancel",
                    onClick: K,
                    children: "Cancel"
                  })
                ]
              })
            ]
          })
        }), document.body)
      ]
    });
  }), ra = g.jsx(ym, {
    type: "target",
    position: pm.Left,
    style: {
      background: "var(--btn-primary-bg)"
    }
  }), vl = g.jsx(ym, {
    type: "source",
    position: pm.Right,
    style: {
      background: "var(--btn-primary-bg)"
    }
  }), Zm = {
    borderColor: "transparent",
    borderWidth: 4
  }, Km = {
    width: 14,
    height: 14,
    background: "transparent",
    border: "none"
  };
  function l_() {
    return g.jsxs(g.Fragment, {
      children: [
        g.jsx(e_, {}),
        vl
      ]
    });
  }
  function n_() {
    return g.jsxs(g.Fragment, {
      children: [
        ra,
        g.jsx(U1, {}),
        vl
      ]
    });
  }
  function a_() {
    return g.jsxs(g.Fragment, {
      children: [
        ra,
        g.jsx(L1, {}),
        vl
      ]
    });
  }
  function i_() {
    return g.jsxs(g.Fragment, {
      children: [
        g.jsx(q1, {}),
        vl
      ]
    });
  }
  function u_() {
    return g.jsxs(g.Fragment, {
      children: [
        g.jsx(W1, {}),
        vl
      ]
    });
  }
  function c_() {
    return g.jsxs(g.Fragment, {
      children: [
        g.jsx(P1, {}),
        vl
      ]
    });
  }
  function o_() {
    const u = te((b) => b.stackedOrder), s = te((b) => b.stackedActive), r = te((b) => b.lastData), c = te((b) => b.scalarCursor), d = te((b) => b.refPoints), m = te((b) => b.viewBounds), h = te((b) => b.subplotParams), p = q.useMemo(() => u.filter((b) => s.includes(b)), [
      u,
      s
    ]), [x, { w: T, h: v }] = Ym();
    return g.jsxs("div", {
      className: "studio-subplot studio-subplot--fill",
      children: [
        g.jsx(bm, {
          minWidth: 260,
          minHeight: 160,
          lineStyle: Zm,
          handleStyle: Km
        }),
        ra,
        g.jsxs("div", {
          className: "studio-node-title",
          children: [
            "Stacked Chart (",
            p.length,
            ")"
          ]
        }),
        g.jsx("div", {
          ref: x,
          className: "studio-subplot-chart",
          children: p.length === 0 ? g.jsx("div", {
            className: "enc-empty",
            children: "Enable a subplot in the Stacked Subplots panel."
          }) : T > 0 && v > 0 && g.jsx(Vm, {
            specs: p,
            data: r,
            cursor: c,
            refPoints: d,
            viewBounds: m,
            params: h,
            width: T,
            height: v
          })
        }),
        vl
      ]
    });
  }
  function s_() {
    return g.jsxs(g.Fragment, {
      children: [
        ra,
        g.jsx(Q1, {})
      ]
    });
  }
  function r_() {
    return g.jsxs(g.Fragment, {
      children: [
        ra,
        g.jsx(t_, {}),
        vl
      ]
    });
  }
  function f_({ data: u }) {
    const s = u.specs ?? [
      "bins"
    ], r = te((b) => b.lastData), c = te((b) => b.scalarCursor), d = te((b) => b.refPoints), m = te((b) => b.viewBounds), h = te((b) => b.subplotParams), [p, { w: x, h: T }] = Ym(), v = s.map((b) => Fu[b] ?? b).join(" + ");
    return g.jsxs("div", {
      className: "studio-subplot studio-subplot--fill",
      children: [
        g.jsx(bm, {
          minWidth: 240,
          minHeight: 140,
          lineStyle: Zm,
          handleStyle: Km
        }),
        ra,
        g.jsx("div", {
          className: "studio-node-title",
          children: v
        }),
        g.jsx("div", {
          ref: p,
          className: "studio-subplot-chart",
          children: x > 0 && T > 0 && g.jsx(Vm, {
            specs: s,
            data: r,
            cursor: c,
            refPoints: d,
            viewBounds: m,
            params: h,
            width: x,
            height: T
          })
        }),
        vl
      ]
    });
  }
  let d_;
  x_ = {
    demos: l_,
    controls: n_,
    plotrange: a_,
    cursor: i_,
    bits: s_,
    refpoints: r_,
    subplot: f_,
    stacked: o_,
    stackedPanel: c_,
    picker: u_
  };
  d_ = {
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
  w_ = function(u) {
    return {
      ...d_,
      ...u ?? {}
    };
  };
  T_ = function(u) {
    const s = {};
    u.encoders && (s.encoders = u.encoders.map((r) => ({
      ...r
    }))), u.viewBounds && (s.viewBounds = [
      ...u.viewBounds
    ]), typeof u.scalarCursor == "number" && (s.scalarCursor = u.scalarCursor), u.refPoints && (s.refPoints = u.refPoints.slice(0, mi)), u.subplots && (s.subplots = [
      ...u.subplots
    ]), u.subplotParams && (s.subplotParams = {
      ...u.subplotParams
    }), u.stacked && (s.stackedOrder = u.stacked.order ?? [
      ...$u
    ], s.stackedActive = u.stacked.active ?? u.stacked.order ?? [
      ...$u
    ]), te.setState(s);
  };
  function Wu(u) {
    if (!u) return null;
    try {
      return JSON.parse(decodeURIComponent(u));
    } catch {
      try {
        return JSON.parse(u);
      } catch {
        return null;
      }
    }
  }
  A_ = function() {
    if (window.__ENCODER_STUDIO_CONFIG__) return window.__ENCODER_STUDIO_CONFIG__;
    const u = new URLSearchParams(window.location.search).get("config");
    return Wu(u) ?? Wu(window.location.hash ? window.location.hash.slice(1) : null);
  };
  function h_() {
    var _a, _b2;
    const u = (_b2 = (_a = document.querySelector('meta[name="encoder-studio-config"]')) == null ? void 0 : _a.getAttribute("content")) == null ? void 0 : _b2.trim();
    if (!u) return null;
    try {
      return new URL(u, document.baseURI).href;
    } catch {
      return u;
    }
  }
  function m_(u) {
    return /^(https?:\/\/|\.?\/)/.test(u) || u.toLowerCase().endsWith(".json");
  }
  async function mm(u) {
    try {
      const s = await fetch(u, {
        cache: "no-cache"
      });
      return s.ok ? await s.json() : null;
    } catch {
      return null;
    }
  }
  E_ = async function() {
    if (window.__ENCODER_STUDIO_CONFIG__) return window.__ENCODER_STUDIO_CONFIG__;
    const u = new URLSearchParams(window.location.search).get("config");
    if (u) {
      if (m_(u)) {
        const d = await mm(u);
        if (d) return d;
      }
      const c = Wu(u);
      if (c) return c;
    }
    const s = Wu(window.location.hash ? window.location.hash.slice(1) : null);
    if (s) return s;
    const r = h_();
    if (r) {
      const c = await mm(r);
      if (c) return c;
    }
    return {};
  };
  function y_(u) {
    var _a, _b2, _c, _d;
    const s = typeof ((_a = u.style) == null ? void 0 : _a.width) == "number" ? u.style.width : void 0, r = typeof ((_b2 = u.style) == null ? void 0 : _b2.height) == "number" ? u.style.height : void 0;
    return {
      w: ((_c = u.measured) == null ? void 0 : _c.width) ?? s,
      h: ((_d = u.measured) == null ? void 0 : _d.height) ?? r
    };
  }
  z_ = function(u, s) {
    const r = te.getState(), c = u.map((h) => {
      var _a;
      const p = h.type ?? "subplot", x = {
        id: h.id,
        type: p,
        position: {
          x: Math.round(h.position.x),
          y: Math.round(h.position.y)
        }
      };
      if (p === "subplot" || p === "stacked") {
        const { w: v, h: b } = y_(h);
        v && (x.width = Math.round(v)), b && (x.height = Math.round(b));
      }
      const T = (_a = h.data) == null ? void 0 : _a.specs;
      return T && (x.specs = T), x;
    }), d = s.map((h) => ({
      id: h.id,
      source: h.source,
      target: h.target,
      animated: !!h.animated
    })), m = c.filter((h) => h.type === "subplot").flatMap((h) => h.specs ?? []);
    return {
      encoders: r.encoders.map((h) => ({
        ...h
      })),
      viewBounds: [
        ...r.viewBounds
      ],
      scalarCursor: r.scalarCursor,
      refPoints: [
        ...r.refPoints
      ],
      subplots: m,
      stacked: {
        order: [
          ...r.stackedOrder
        ],
        active: [
          ...r.stackedActive
        ]
      },
      subplotParams: {
        ...r.subplotParams
      },
      nodes: c,
      edges: d,
      interactive: false,
      background: false
    };
  };
  M_ = function(u) {
    const s = encodeURIComponent(JSON.stringify(u)), { origin: r, pathname: c } = window.location;
    return `${r}${c}#${s}`;
  };
  O_ = function() {
    const u = Cs((c) => c.helpKey), s = Cs((c) => c.close);
    if (q.useEffect(() => {
      if (!u) return;
      const c = (d) => {
        d.key === "Escape" && s();
      };
      return window.addEventListener("keydown", c), () => window.removeEventListener("keydown", c);
    }, [
      u,
      s
    ]), !u) return null;
    const r = Bs[u];
    return r ? Iu.createPortal(g.jsx("div", {
      className: "help-backdrop",
      onClick: s,
      children: g.jsxs("div", {
        className: "help-drawer",
        onClick: (c) => c.stopPropagation(),
        children: [
          g.jsxs("div", {
            className: "help-drawer-head",
            children: [
              g.jsx("span", {
                className: "help-drawer-title",
                children: r.title
              }),
              g.jsx("button", {
                className: "help-drawer-close",
                onClick: s,
                "aria-label": "Close help",
                children: "\xD7"
              })
            ]
          }),
          g.jsxs("div", {
            className: "help-drawer-body",
            children: [
              g.jsxs("p", {
                className: "help-ai-disclaimer",
                role: "note",
                children: [
                  g.jsx("strong", {
                    children: "NOTE:"
                  }),
                  " This text is partially generated with AI from hand-written documentation and research notes."
                ]
              }),
              g.jsx("p", {
                className: "help-short",
                children: r.short
              }),
              g.jsx("div", {
                dangerouslySetInnerHTML: {
                  __html: dv(r.body)
                }
              })
            ]
          })
        ]
      })
    }), document.body) : null;
  };
})();
export {
  O_ as H,
  v1 as S,
  __tla,
  te as a,
  z_ as b,
  x_ as c,
  T_ as d,
  v_ as e,
  w_ as f,
  E_ as g,
  __ as h,
  xm as i,
  A_ as r,
  M_ as s,
  S_ as u
};
