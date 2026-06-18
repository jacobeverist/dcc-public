const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./wasm-api-BL9csqJ5.js","./reactflow-DDaPvTHK.js","./elkjs-rLLxZdMu.js","./reactflow-BZV40eAE.css","./echarts-CxWuOr5q.js","./markdown-BhQy4Yqe.js","./markdown-dIRGbAJA.css"])))=>i.map(i=>d[i]);
import { w as rb, x as fb, r as Z, j as Y, y as qc, a as wm } from "./reactflow-DDaPvTHK.js";
import { g as Sm, i as xm } from "./echarts-CxWuOr5q.js";
import { g as db, k as _b } from "./markdown-BhQy4Yqe.js";
let Rp, Qp, dv, qm, jm, ov, Hp, jp, qp, Um, im, am, wv, Op, nm, Tv, mv, Sv, Lp, zp, Q1, xv, Ap, Mp, vs, Ep, Bv, Cp, uv, Dp, Np, Up, Bp, Em, I1, F1, P_, Hm, tv, Lv, jv, qv, V1, Y1, S1, Cs, h1, pn, _p, J1, Rv, Tp, lv, ev, P1, I_, Pc, cv, iv, lm, rv, fv, av, W1, nv, Gm, e1, $_, Om, Eb, k1, Z1, K1, Uv, de, Hv, sv, yv, bv, eu, fa, hv, Gp, _v, vv, pv, gv, $1, Nv, Av, zv, Mv, Dv, Ov, Cv, Ev, Kp, Lm, Yp, om, Xp;
let __tla = (async () => {
  (function() {
    const u = document.createElement("link").relList;
    if (u && u.supports && u.supports("modulepreload")) return;
    for (const f of document.querySelectorAll('link[rel="modulepreload"]')) o(f);
    new MutationObserver((f) => {
      for (const _ of f) if (_.type === "childList") for (const m of _.addedNodes) m.tagName === "LINK" && m.rel === "modulepreload" && o(m);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function r(f) {
      const _ = {};
      return f.integrity && (_.integrity = f.integrity), f.referrerPolicy && (_.referrerPolicy = f.referrerPolicy), f.crossOrigin === "use-credentials" ? _.credentials = "include" : f.crossOrigin === "anonymous" ? _.credentials = "omit" : _.credentials = "same-origin", _;
    }
    function o(f) {
      if (f.ep) return;
      f.ep = true;
      const _ = r(f);
      fetch(f.href, _);
    }
  })();
  var hs = {
    exports: {}
  }, ci = {}, bs = {
    exports: {}
  }, ys = {};
  var B_;
  function mb() {
    return B_ || (B_ = 1, (function(c) {
      function u(C, q) {
        var j = C.length;
        C.push(q);
        t: for (; 0 < j; ) {
          var G = j - 1 >>> 1, K = C[G];
          if (0 < f(K, q)) C[G] = q, C[j] = K, j = G;
          else break t;
        }
      }
      function r(C) {
        return C.length === 0 ? null : C[0];
      }
      function o(C) {
        if (C.length === 0) return null;
        var q = C[0], j = C.pop();
        if (j !== q) {
          C[0] = j;
          t: for (var G = 0, K = C.length, _t = K >>> 1; G < _t; ) {
            var et = 2 * (G + 1) - 1, I = C[et], ot = et + 1, Yt = C[ot];
            if (0 > f(I, j)) ot < K && 0 > f(Yt, I) ? (C[G] = Yt, C[ot] = j, G = ot) : (C[G] = I, C[et] = j, G = et);
            else if (ot < K && 0 > f(Yt, j)) C[G] = Yt, C[ot] = j, G = ot;
            else break t;
          }
        }
        return q;
      }
      function f(C, q) {
        var j = C.sortIndex - q.sortIndex;
        return j !== 0 ? j : C.id - q.id;
      }
      if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var _ = performance;
        c.unstable_now = function() {
          return _.now();
        };
      } else {
        var m = Date, h = m.now();
        c.unstable_now = function() {
          return m.now() - h;
        };
      }
      var p = [], S = [], w = 1, b = null, T = 3, A = false, R = false, E = false, B = false, L = typeof setTimeout == "function" ? setTimeout : null, $ = typeof clearTimeout == "function" ? clearTimeout : null, nt = typeof setImmediate < "u" ? setImmediate : null;
      function st(C) {
        for (var q = r(S); q !== null; ) {
          if (q.callback === null) o(S);
          else if (q.startTime <= C) o(S), q.sortIndex = q.expirationTime, u(p, q);
          else break;
          q = r(S);
        }
      }
      function Ut(C) {
        if (E = false, st(C), !R) if (r(p) !== null) R = true, Nt || (Nt = true, St());
        else {
          var q = r(S);
          q !== null && xt(Ut, q.startTime - C);
        }
      }
      var Nt = false, P = -1, rt = 5, Ht = -1;
      function ae() {
        return B ? true : !(c.unstable_now() - Ht < rt);
      }
      function ie() {
        if (B = false, Nt) {
          var C = c.unstable_now();
          Ht = C;
          var q = true;
          try {
            t: {
              R = false, E && (E = false, $(P), P = -1), A = true;
              var j = T;
              try {
                e: {
                  for (st(C), b = r(p); b !== null && !(b.expirationTime > C && ae()); ) {
                    var G = b.callback;
                    if (typeof G == "function") {
                      b.callback = null, T = b.priorityLevel;
                      var K = G(b.expirationTime <= C);
                      if (C = c.unstable_now(), typeof K == "function") {
                        b.callback = K, st(C), q = true;
                        break e;
                      }
                      b === r(p) && o(p), st(C);
                    } else o(p);
                    b = r(p);
                  }
                  if (b !== null) q = true;
                  else {
                    var _t = r(S);
                    _t !== null && xt(Ut, _t.startTime - C), q = false;
                  }
                }
                break t;
              } finally {
                b = null, T = j, A = false;
              }
              q = void 0;
            }
          } finally {
            q ? St() : Nt = false;
          }
        }
      }
      var St;
      if (typeof nt == "function") St = function() {
        nt(ie);
      };
      else if (typeof MessageChannel < "u") {
        var gt = new MessageChannel(), bt = gt.port2;
        gt.port1.onmessage = ie, St = function() {
          bt.postMessage(null);
        };
      } else St = function() {
        L(ie, 0);
      };
      function xt(C, q) {
        P = L(function() {
          C(c.unstable_now());
        }, q);
      }
      c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(C) {
        C.callback = null;
      }, c.unstable_forceFrameRate = function(C) {
        0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : rt = 0 < C ? Math.floor(1e3 / C) : 5;
      }, c.unstable_getCurrentPriorityLevel = function() {
        return T;
      }, c.unstable_next = function(C) {
        switch (T) {
          case 1:
          case 2:
          case 3:
            var q = 3;
            break;
          default:
            q = T;
        }
        var j = T;
        T = q;
        try {
          return C();
        } finally {
          T = j;
        }
      }, c.unstable_requestPaint = function() {
        B = true;
      }, c.unstable_runWithPriority = function(C, q) {
        switch (C) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            C = 3;
        }
        var j = T;
        T = C;
        try {
          return q();
        } finally {
          T = j;
        }
      }, c.unstable_scheduleCallback = function(C, q, j) {
        var G = c.unstable_now();
        switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? G + j : G) : j = G, C) {
          case 1:
            var K = -1;
            break;
          case 2:
            K = 250;
            break;
          case 5:
            K = 1073741823;
            break;
          case 4:
            K = 1e4;
            break;
          default:
            K = 5e3;
        }
        return K = j + K, C = {
          id: w++,
          callback: q,
          priorityLevel: C,
          startTime: j,
          expirationTime: K,
          sortIndex: -1
        }, j > G ? (C.sortIndex = j, u(S, C), r(p) === null && C === r(S) && (E ? ($(P), P = -1) : E = true, xt(Ut, j - G))) : (C.sortIndex = K, u(p, C), R || A || (R = true, Nt || (Nt = true, St()))), C;
      }, c.unstable_shouldYield = ae, c.unstable_wrapCallback = function(C) {
        var q = T;
        return function() {
          var j = T;
          T = q;
          try {
            return C.apply(this, arguments);
          } finally {
            T = j;
          }
        };
      };
    })(ys)), ys;
  }
  var U_;
  function hb() {
    return U_ || (U_ = 1, bs.exports = mb()), bs.exports;
  }
  var H_;
  function bb() {
    if (H_) return ci;
    H_ = 1;
    var c = hb(), u = rb(), r = fb();
    function o(t) {
      var e = "https://react.dev/errors/" + t;
      if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var l = 2; l < arguments.length; l++) e += "&args[]=" + encodeURIComponent(arguments[l]);
      }
      return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function f(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function _(t) {
      var e = t, l = t;
      if (t.alternate) for (; e.return; ) e = e.return;
      else {
        t = e;
        do
          e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
        while (t);
      }
      return e.tag === 3 ? l : null;
    }
    function m(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function h(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function p(t) {
      if (_(t) !== t) throw Error(o(188));
    }
    function S(t) {
      var e = t.alternate;
      if (!e) {
        if (e = _(t), e === null) throw Error(o(188));
        return e !== t ? null : t;
      }
      for (var l = t, n = e; ; ) {
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
            if (i === l) return p(a), t;
            if (i === n) return p(a), e;
            i = i.sibling;
          }
          throw Error(o(188));
        }
        if (l.return !== n.return) l = a, n = i;
        else {
          for (var s = false, d = a.child; d; ) {
            if (d === l) {
              s = true, l = a, n = i;
              break;
            }
            if (d === n) {
              s = true, n = a, l = i;
              break;
            }
            d = d.sibling;
          }
          if (!s) {
            for (d = i.child; d; ) {
              if (d === l) {
                s = true, l = i, n = a;
                break;
              }
              if (d === n) {
                s = true, n = i, l = a;
                break;
              }
              d = d.sibling;
            }
            if (!s) throw Error(o(189));
          }
        }
        if (l.alternate !== n) throw Error(o(190));
      }
      if (l.tag !== 3) throw Error(o(188));
      return l.stateNode.current === l ? t : e;
    }
    function w(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (e = w(t), e !== null) return e;
        t = t.sibling;
      }
      return null;
    }
    var b = Object.assign, T = Symbol.for("react.element"), A = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), $ = Symbol.for("react.consumer"), nt = Symbol.for("react.context"), st = Symbol.for("react.forward_ref"), Ut = Symbol.for("react.suspense"), Nt = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), rt = Symbol.for("react.lazy"), Ht = Symbol.for("react.activity"), ae = Symbol.for("react.memo_cache_sentinel"), ie = Symbol.iterator;
    function St(t) {
      return t === null || typeof t != "object" ? null : (t = ie && t[ie] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var gt = Symbol.for("react.client.reference");
    function bt(t) {
      if (t == null) return null;
      if (typeof t == "function") return t.$$typeof === gt ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case E:
          return "Fragment";
        case L:
          return "Profiler";
        case B:
          return "StrictMode";
        case Ut:
          return "Suspense";
        case Nt:
          return "SuspenseList";
        case Ht:
          return "Activity";
      }
      if (typeof t == "object") switch (t.$$typeof) {
        case R:
          return "Portal";
        case nt:
          return t.displayName || "Context";
        case $:
          return (t._context.displayName || "Context") + ".Consumer";
        case st:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case P:
          return e = t.displayName || null, e !== null ? e : bt(t.type) || "Memo";
        case rt:
          e = t._payload, t = t._init;
          try {
            return bt(t(e));
          } catch {
          }
      }
      return null;
    }
    var xt = Array.isArray, C = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, G = [], K = -1;
    function _t(t) {
      return {
        current: t
      };
    }
    function et(t) {
      0 > K || (t.current = G[K], G[K] = null, K--);
    }
    function I(t, e) {
      K++, G[K] = t.current, t.current = e;
    }
    var ot = _t(null), Yt = _t(null), Qt = _t(null), $t = _t(null);
    function Wt(t, e) {
      switch (I(Qt, e), I(Yt, t), I(ot, null), e.nodeType) {
        case 9:
        case 11:
          t = (t = e.documentElement) && (t = t.namespaceURI) ? n_(t) : 0;
          break;
        default:
          if (t = e.tagName, e = e.namespaceURI) e = n_(e), t = a_(e, t);
          else switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
      }
      et(ot), I(ot, t);
    }
    function Lt() {
      et(ot), et(Yt), et(Qt);
    }
    function pt(t) {
      t.memoizedState !== null && I($t, t);
      var e = ot.current, l = a_(e, t.type);
      e !== l && (I(Yt, t), I(ot, l));
    }
    function Mt(t) {
      Yt.current === t && (et(ot), et(Yt)), $t.current === t && (et($t), li._currentValue = j);
    }
    var Zt, We;
    function lt(t) {
      if (Zt === void 0) try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        Zt = e && e[1] || "", We = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + Zt + t + We;
    }
    var at = false;
    function W(t, e) {
      if (!t || at) return "";
      at = true;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var n = {
          DetermineComponentFrameRoot: function() {
            try {
              if (e) {
                var H = function() {
                  throw Error();
                };
                if (Object.defineProperty(H.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(H, []);
                  } catch (D) {
                    var O = D;
                  }
                  Reflect.construct(t, [], H);
                } else {
                  try {
                    H.call();
                  } catch (D) {
                    O = D;
                  }
                  t.call(H.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (D) {
                  O = D;
                }
                (H = t()) && typeof H.catch == "function" && H.catch(function() {
                });
              }
            } catch (D) {
              if (D && O && typeof D.stack == "string") return [
                D.stack,
                O.stack
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
        var i = n.DetermineComponentFrameRoot(), s = i[0], d = i[1];
        if (s && d) {
          var g = s.split(`
`), M = d.split(`
`);
          for (a = n = 0; n < g.length && !g[n].includes("DetermineComponentFrameRoot"); ) n++;
          for (; a < M.length && !M[a].includes("DetermineComponentFrameRoot"); ) a++;
          if (n === g.length || a === M.length) for (n = g.length - 1, a = M.length - 1; 1 <= n && 0 <= a && g[n] !== M[a]; ) a--;
          for (; 1 <= n && 0 <= a; n--, a--) if (g[n] !== M[a]) {
            if (n !== 1 || a !== 1) do
              if (n--, a--, 0 > a || g[n] !== M[a]) {
                var N = `
` + g[n].replace(" at new ", " at ");
                return t.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", t.displayName)), N;
              }
            while (1 <= n && 0 <= a);
            break;
          }
        }
      } finally {
        at = false, Error.prepareStackTrace = l;
      }
      return (l = t ? t.displayName || t.name : "") ? lt(l) : "";
    }
    function _e(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return lt(t.type);
        case 16:
          return lt("Lazy");
        case 13:
          return t.child !== e && e !== null ? lt("Suspense Fallback") : lt("Suspense");
        case 19:
          return lt("SuspenseList");
        case 0:
        case 15:
          return W(t.type, false);
        case 11:
          return W(t.type.render, false);
        case 1:
          return W(t.type, true);
        case 31:
          return lt("Activity");
        default:
          return "";
      }
    }
    function Ye(t) {
      try {
        var e = "", l = null;
        do
          e += _e(t, l), l = t, t = t.return;
        while (t);
        return e;
      } catch (n) {
        return `
Error generating stack: ` + n.message + `
` + n.stack;
      }
    }
    var jt = Object.prototype.hasOwnProperty, Ce = c.unstable_scheduleCallback, xl = c.unstable_cancelCallback, wn = c.unstable_shouldYield, Sn = c.unstable_requestPaint, Rt = c.unstable_now, Qe = c.unstable_getCurrentPriorityLevel, ce = c.unstable_ImmediatePriority, Fe = c.unstable_UserBlockingPriority, Ze = c.unstable_NormalPriority, Si = c.unstable_LowPriority, Hs = c.unstable_IdlePriority, km = c.log, Km = c.unstable_setDisableYieldValue, ma = null, Se = null;
    function Tl(t) {
      if (typeof km == "function" && Km(t), Se && typeof Se.setStrictMode == "function") try {
        Se.setStrictMode(ma, t);
      } catch {
      }
    }
    var xe = Math.clz32 ? Math.clz32 : Wm, Jm = Math.log, $m = Math.LN2;
    function Wm(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (Jm(t) / $m | 0) | 0;
    }
    var xi = 256, Ti = 262144, Ai = 4194304;
    function Wl(t) {
      var e = t & 42;
      if (e !== 0) return e;
      switch (t & -t) {
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
          return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return t & 62914560;
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
          return t;
      }
    }
    function Ei(t, e, l) {
      var n = t.pendingLanes;
      if (n === 0) return 0;
      var a = 0, i = t.suspendedLanes, s = t.pingedLanes;
      t = t.warmLanes;
      var d = n & 134217727;
      return d !== 0 ? (n = d & ~i, n !== 0 ? a = Wl(n) : (s &= d, s !== 0 ? a = Wl(s) : l || (l = d & ~t, l !== 0 && (a = Wl(l))))) : (d = n & ~i, d !== 0 ? a = Wl(d) : s !== 0 ? a = Wl(s) : l || (l = n & ~t, l !== 0 && (a = Wl(l)))), a === 0 ? 0 : e !== 0 && e !== a && (e & i) === 0 && (i = a & -a, l = e & -e, i >= l || i === 32 && (l & 4194048) !== 0) ? e : a;
    }
    function ha(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function Fm(t, e) {
      switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return e + 250;
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
          return e + 5e3;
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
    function Ls() {
      var t = Ai;
      return Ai <<= 1, (Ai & 62914560) === 0 && (Ai = 4194304), t;
    }
    function lu(t) {
      for (var e = [], l = 0; 31 > l; l++) e.push(t);
      return e;
    }
    function ba(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function Im(t, e, l, n, a, i) {
      var s = t.pendingLanes;
      t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
      var d = t.entanglements, g = t.expirationTimes, M = t.hiddenUpdates;
      for (l = s & ~l; 0 < l; ) {
        var N = 31 - xe(l), H = 1 << N;
        d[N] = 0, g[N] = -1;
        var O = M[N];
        if (O !== null) for (M[N] = null, N = 0; N < O.length; N++) {
          var D = O[N];
          D !== null && (D.lane &= -536870913);
        }
        l &= ~H;
      }
      n !== 0 && js(t, n, 0), i !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(s & ~e));
    }
    function js(t, e, l) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var n = 31 - xe(e);
      t.entangledLanes |= e, t.entanglements[n] = t.entanglements[n] | 1073741824 | l & 261930;
    }
    function qs(t, e) {
      var l = t.entangledLanes |= e;
      for (t = t.entanglements; l; ) {
        var n = 31 - xe(l), a = 1 << n;
        a & e | t[n] & e && (t[n] |= e), l &= ~a;
      }
    }
    function Gs(t, e) {
      var l = e & -e;
      return l = (l & 42) !== 0 ? 1 : nu(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
    }
    function nu(t) {
      switch (t) {
        case 2:
          t = 1;
          break;
        case 8:
          t = 4;
          break;
        case 32:
          t = 16;
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
          t = 128;
          break;
        case 268435456:
          t = 134217728;
          break;
        default:
          t = 0;
      }
      return t;
    }
    function au(t) {
      return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function Xs() {
      var t = q.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : z_(t.type));
    }
    function Ys(t, e) {
      var l = q.p;
      try {
        return q.p = t, e();
      } finally {
        q.p = l;
      }
    }
    var Al = Math.random().toString(36).slice(2), ue = "__reactFiber$" + Al, he = "__reactProps$" + Al, xn = "__reactContainer$" + Al, iu = "__reactEvents$" + Al, Pm = "__reactListeners$" + Al, th = "__reactHandles$" + Al, Qs = "__reactResources$" + Al, ya = "__reactMarker$" + Al;
    function cu(t) {
      delete t[ue], delete t[he], delete t[iu], delete t[Pm], delete t[th];
    }
    function Tn(t) {
      var e = t[ue];
      if (e) return e;
      for (var l = t.parentNode; l; ) {
        if (e = l[xn] || l[ue]) {
          if (l = e.alternate, e.child !== null || l !== null && l.child !== null) for (t = f_(t); t !== null; ) {
            if (l = t[ue]) return l;
            t = f_(t);
          }
          return e;
        }
        t = l, l = t.parentNode;
      }
      return null;
    }
    function An(t) {
      if (t = t[ue] || t[xn]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
      }
      return null;
    }
    function ga(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
      throw Error(o(33));
    }
    function En(t) {
      var e = t[Qs];
      return e || (e = t[Qs] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), e;
    }
    function le(t) {
      t[ya] = true;
    }
    var Zs = /* @__PURE__ */ new Set(), Vs = {};
    function Fl(t, e) {
      zn(t, e), zn(t + "Capture", e);
    }
    function zn(t, e) {
      for (Vs[t] = e, t = 0; t < e.length; t++) Zs.add(e[t]);
    }
    var eh = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), ks = {}, Ks = {};
    function lh(t) {
      return jt.call(Ks, t) ? true : jt.call(ks, t) ? false : eh.test(t) ? Ks[t] = true : (ks[t] = true, false);
    }
    function zi(t, e, l) {
      if (lh(e)) if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var n = e.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
    }
    function Mi(t, e, l) {
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(e);
            return;
        }
        t.setAttribute(e, "" + l);
      }
    }
    function ll(t, e, l, n) {
      if (n === null) t.removeAttribute(l);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(l);
            return;
        }
        t.setAttributeNS(e, l, "" + n);
      }
    }
    function Ne(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return t;
        default:
          return "";
      }
    }
    function Js(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function nh(t, e, l) {
      var n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
      if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var a = n.get, i = n.set;
        return Object.defineProperty(t, e, {
          configurable: true,
          get: function() {
            return a.call(this);
          },
          set: function(s) {
            l = "" + s, i.call(this, s);
          }
        }), Object.defineProperty(t, e, {
          enumerable: n.enumerable
        }), {
          getValue: function() {
            return l;
          },
          setValue: function(s) {
            l = "" + s;
          },
          stopTracking: function() {
            t._valueTracker = null, delete t[e];
          }
        };
      }
    }
    function uu(t) {
      if (!t._valueTracker) {
        var e = Js(t) ? "checked" : "value";
        t._valueTracker = nh(t, e, "" + t[e]);
      }
    }
    function $s(t) {
      if (!t) return false;
      var e = t._valueTracker;
      if (!e) return true;
      var l = e.getValue(), n = "";
      return t && (n = Js(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== l ? (e.setValue(t), true) : false;
    }
    function Oi(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    var ah = /[\n"\\]/g;
    function Re(t) {
      return t.replace(ah, function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      });
    }
    function ou(t, e, l, n, a, i, s, d) {
      t.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.type = s : t.removeAttribute("type"), e != null ? s === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ne(e)) : t.value !== "" + Ne(e) && (t.value = "" + Ne(e)) : s !== "submit" && s !== "reset" || t.removeAttribute("value"), e != null ? su(t, s, Ne(e)) : l != null ? su(t, s, Ne(l)) : n != null && t.removeAttribute("value"), a == null && i != null && (t.defaultChecked = !!i), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? t.name = "" + Ne(d) : t.removeAttribute("name");
    }
    function Ws(t, e, l, n, a, i, s, d) {
      if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || l != null) {
        if (!(i !== "submit" && i !== "reset" || e != null)) {
          uu(t);
          return;
        }
        l = l != null ? "" + Ne(l) : "", e = e != null ? "" + Ne(e) : l, d || e === t.value || (t.value = e), t.defaultValue = e;
      }
      n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = d ? t.checked : !!n, t.defaultChecked = !!n, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.name = s), uu(t);
    }
    function su(t, e, l) {
      e === "number" && Oi(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
    }
    function Mn(t, e, l, n) {
      if (t = t.options, e) {
        e = {};
        for (var a = 0; a < l.length; a++) e["$" + l[a]] = true;
        for (l = 0; l < t.length; l++) a = e.hasOwnProperty("$" + t[l].value), t[l].selected !== a && (t[l].selected = a), a && n && (t[l].defaultSelected = true);
      } else {
        for (l = "" + Ne(l), e = null, a = 0; a < t.length; a++) {
          if (t[a].value === l) {
            t[a].selected = true, n && (t[a].defaultSelected = true);
            return;
          }
          e !== null || t[a].disabled || (e = t[a]);
        }
        e !== null && (e.selected = true);
      }
    }
    function Fs(t, e, l) {
      if (e != null && (e = "" + Ne(e), e !== t.value && (t.value = e), l == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = l != null ? "" + Ne(l) : "";
    }
    function Is(t, e, l, n) {
      if (e == null) {
        if (n != null) {
          if (l != null) throw Error(o(92));
          if (xt(n)) {
            if (1 < n.length) throw Error(o(93));
            n = n[0];
          }
          l = n;
        }
        l == null && (l = ""), e = l;
      }
      l = Ne(e), t.defaultValue = l, n = t.textContent, n === l && n !== "" && n !== null && (t.value = n), uu(t);
    }
    function On(t, e) {
      if (e) {
        var l = t.firstChild;
        if (l && l === t.lastChild && l.nodeType === 3) {
          l.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    var ih = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Ps(t, e, l) {
      var n = e.indexOf("--") === 0;
      l == null || typeof l == "boolean" || l === "" ? n ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : n ? t.setProperty(e, l) : typeof l != "number" || l === 0 || ih.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
    }
    function tr(t, e, l) {
      if (e != null && typeof e != "object") throw Error(o(62));
      if (t = t.style, l != null) {
        for (var n in l) !l.hasOwnProperty(n) || e != null && e.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "");
        for (var a in e) n = e[a], e.hasOwnProperty(a) && l[a] !== n && Ps(t, a, n);
      } else for (var i in e) e.hasOwnProperty(i) && Ps(t, i, e[i]);
    }
    function ru(t) {
      if (t.indexOf("-") === -1) return false;
      switch (t) {
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
    var ch = /* @__PURE__ */ new Map([
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
    ]), uh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Di(t) {
      return uh.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function nl() {
    }
    var fu = null;
    function du(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    var Dn = null, Cn = null;
    function er(t) {
      var e = An(t);
      if (e && (t = e.stateNode)) {
        var l = t[he] || null;
        t: switch (t = e.stateNode, e.type) {
          case "input":
            if (ou(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), e = l.name, l.type === "radio" && e != null) {
              for (l = t; l.parentNode; ) l = l.parentNode;
              for (l = l.querySelectorAll('input[name="' + Re("" + e) + '"][type="radio"]'), e = 0; e < l.length; e++) {
                var n = l[e];
                if (n !== t && n.form === t.form) {
                  var a = n[he] || null;
                  if (!a) throw Error(o(90));
                  ou(n, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                }
              }
              for (e = 0; e < l.length; e++) n = l[e], n.form === t.form && $s(n);
            }
            break t;
          case "textarea":
            Fs(t, l.value, l.defaultValue);
            break t;
          case "select":
            e = l.value, e != null && Mn(t, !!l.multiple, e, false);
        }
      }
    }
    var _u = false;
    function lr(t, e, l) {
      if (_u) return t(e, l);
      _u = true;
      try {
        var n = t(e);
        return n;
      } finally {
        if (_u = false, (Dn !== null || Cn !== null) && (yc(), Dn && (e = Dn, t = Cn, Cn = Dn = null, er(e), t))) for (e = 0; e < t.length; e++) er(t[e]);
      }
    }
    function pa(t, e) {
      var l = t.stateNode;
      if (l === null) return null;
      var n = l[he] || null;
      if (n === null) return null;
      l = n[e];
      t: switch (e) {
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
          (n = !n.disabled) || (t = t.type, n = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !n;
          break t;
        default:
          t = false;
      }
      if (t) return null;
      if (l && typeof l != "function") throw Error(o(231, e, typeof l));
      return l;
    }
    var al = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), mu = false;
    if (al) try {
      var va = {};
      Object.defineProperty(va, "passive", {
        get: function() {
          mu = true;
        }
      }), window.addEventListener("test", va, va), window.removeEventListener("test", va, va);
    } catch {
      mu = false;
    }
    var El = null, hu = null, Ci = null;
    function nr() {
      if (Ci) return Ci;
      var t, e = hu, l = e.length, n, a = "value" in El ? El.value : El.textContent, i = a.length;
      for (t = 0; t < l && e[t] === a[t]; t++) ;
      var s = l - t;
      for (n = 1; n <= s && e[l - n] === a[i - n]; n++) ;
      return Ci = a.slice(t, 1 < n ? 1 - n : void 0);
    }
    function Ni(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function Ri() {
      return true;
    }
    function ar() {
      return false;
    }
    function be(t) {
      function e(l, n, a, i, s) {
        this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = s, this.currentTarget = null;
        for (var d in t) t.hasOwnProperty(d) && (l = t[d], this[d] = l ? l(i) : i[d]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? Ri : ar, this.isPropagationStopped = ar, this;
      }
      return b(e.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var l = this.nativeEvent;
          l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = false), this.isDefaultPrevented = Ri);
        },
        stopPropagation: function() {
          var l = this.nativeEvent;
          l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = true), this.isPropagationStopped = Ri);
        },
        persist: function() {
        },
        isPersistent: Ri
      }), e;
    }
    var Il = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Bi = be(Il), wa = b({}, Il, {
      view: 0,
      detail: 0
    }), oh = be(wa), bu, yu, Sa, Ui = b({}, wa, {
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
      getModifierState: pu,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== Sa && (Sa && t.type === "mousemove" ? (bu = t.screenX - Sa.screenX, yu = t.screenY - Sa.screenY) : yu = bu = 0, Sa = t), bu);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : yu;
      }
    }), ir = be(Ui), sh = b({}, Ui, {
      dataTransfer: 0
    }), rh = be(sh), fh = b({}, wa, {
      relatedTarget: 0
    }), gu = be(fh), dh = b({}, Il, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), _h = be(dh), mh = b({}, Il, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), hh = be(mh), bh = b({}, Il, {
      data: 0
    }), cr = be(bh), yh = {
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
    }, gh = {
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
    }, ph = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function vh(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = ph[t]) ? !!e[t] : false;
    }
    function pu() {
      return vh;
    }
    var wh = b({}, wa, {
      key: function(t) {
        if (t.key) {
          var e = yh[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? (t = Ni(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? gh[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: pu,
      charCode: function(t) {
        return t.type === "keypress" ? Ni(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? Ni(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), Sh = be(wh), xh = b({}, Ui, {
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
    }), ur = be(xh), Th = b({}, wa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: pu
    }), Ah = be(Th), Eh = b({}, Il, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), zh = be(Eh), Mh = b({}, Ui, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Oh = be(Mh), Dh = b({}, Il, {
      newState: 0,
      oldState: 0
    }), Ch = be(Dh), Nh = [
      9,
      13,
      27,
      32
    ], vu = al && "CompositionEvent" in window, xa = null;
    al && "documentMode" in document && (xa = document.documentMode);
    var Rh = al && "TextEvent" in window && !xa, or = al && (!vu || xa && 8 < xa && 11 >= xa), sr = " ", rr = false;
    function fr(t, e) {
      switch (t) {
        case "keyup":
          return Nh.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function dr(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    var Nn = false;
    function Bh(t, e) {
      switch (t) {
        case "compositionend":
          return dr(e);
        case "keypress":
          return e.which !== 32 ? null : (rr = true, sr);
        case "textInput":
          return t = e.data, t === sr && rr ? null : t;
        default:
          return null;
      }
    }
    function Uh(t, e) {
      if (Nn) return t === "compositionend" || !vu && fr(t, e) ? (t = nr(), Ci = hu = El = null, Nn = false, t) : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length) return e.char;
            if (e.which) return String.fromCharCode(e.which);
          }
          return null;
        case "compositionend":
          return or && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    var Hh = {
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
    function _r(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!Hh[t.type] : e === "textarea";
    }
    function mr(t, e, l, n) {
      Dn ? Cn ? Cn.push(n) : Cn = [
        n
      ] : Dn = n, e = Tc(e, "onChange"), 0 < e.length && (l = new Bi("onChange", "change", null, l, n), t.push({
        event: l,
        listeners: e
      }));
    }
    var Ta = null, Aa = null;
    function Lh(t) {
      Fd(t, 0);
    }
    function Hi(t) {
      var e = ga(t);
      if ($s(e)) return t;
    }
    function hr(t, e) {
      if (t === "change") return e;
    }
    var br = false;
    if (al) {
      var wu;
      if (al) {
        var Su = "oninput" in document;
        if (!Su) {
          var yr = document.createElement("div");
          yr.setAttribute("oninput", "return;"), Su = typeof yr.oninput == "function";
        }
        wu = Su;
      } else wu = false;
      br = wu && (!document.documentMode || 9 < document.documentMode);
    }
    function gr() {
      Ta && (Ta.detachEvent("onpropertychange", pr), Aa = Ta = null);
    }
    function pr(t) {
      if (t.propertyName === "value" && Hi(Aa)) {
        var e = [];
        mr(e, Aa, t, du(t)), lr(Lh, e);
      }
    }
    function jh(t, e, l) {
      t === "focusin" ? (gr(), Ta = e, Aa = l, Ta.attachEvent("onpropertychange", pr)) : t === "focusout" && gr();
    }
    function qh(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown") return Hi(Aa);
    }
    function Gh(t, e) {
      if (t === "click") return Hi(e);
    }
    function Xh(t, e) {
      if (t === "input" || t === "change") return Hi(e);
    }
    function Yh(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    var Te = typeof Object.is == "function" ? Object.is : Yh;
    function Ea(t, e) {
      if (Te(t, e)) return true;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
      var l = Object.keys(t), n = Object.keys(e);
      if (l.length !== n.length) return false;
      for (n = 0; n < l.length; n++) {
        var a = l[n];
        if (!jt.call(e, a) || !Te(t[a], e[a])) return false;
      }
      return true;
    }
    function vr(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function wr(t, e) {
      var l = vr(t);
      t = 0;
      for (var n; l; ) {
        if (l.nodeType === 3) {
          if (n = t + l.textContent.length, t <= e && n >= e) return {
            node: l,
            offset: e - t
          };
          t = n;
        }
        t: {
          for (; l; ) {
            if (l.nextSibling) {
              l = l.nextSibling;
              break t;
            }
            l = l.parentNode;
          }
          l = void 0;
        }
        l = vr(l);
      }
    }
    function Sr(t, e) {
      return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? Sr(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
    }
    function xr(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = Oi(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var l = typeof e.contentWindow.location.href == "string";
        } catch {
          l = false;
        }
        if (l) t = e.contentWindow;
        else break;
        e = Oi(t.document);
      }
      return e;
    }
    function xu(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    var Qh = al && "documentMode" in document && 11 >= document.documentMode, Rn = null, Tu = null, za = null, Au = false;
    function Tr(t, e, l) {
      var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
      Au || Rn == null || Rn !== Oi(n) || (n = Rn, "selectionStart" in n && xu(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
      } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
      }), za && Ea(za, n) || (za = n, n = Tc(Tu, "onSelect"), 0 < n.length && (e = new Bi("onSelect", "select", null, e, l), t.push({
        event: e,
        listeners: n
      }), e.target = Rn)));
    }
    function Pl(t, e) {
      var l = {};
      return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
    }
    var Bn = {
      animationend: Pl("Animation", "AnimationEnd"),
      animationiteration: Pl("Animation", "AnimationIteration"),
      animationstart: Pl("Animation", "AnimationStart"),
      transitionrun: Pl("Transition", "TransitionRun"),
      transitionstart: Pl("Transition", "TransitionStart"),
      transitioncancel: Pl("Transition", "TransitionCancel"),
      transitionend: Pl("Transition", "TransitionEnd")
    }, Eu = {}, Ar = {};
    al && (Ar = document.createElement("div").style, "AnimationEvent" in window || (delete Bn.animationend.animation, delete Bn.animationiteration.animation, delete Bn.animationstart.animation), "TransitionEvent" in window || delete Bn.transitionend.transition);
    function tn(t) {
      if (Eu[t]) return Eu[t];
      if (!Bn[t]) return t;
      var e = Bn[t], l;
      for (l in e) if (e.hasOwnProperty(l) && l in Ar) return Eu[t] = e[l];
      return t;
    }
    var Er = tn("animationend"), zr = tn("animationiteration"), Mr = tn("animationstart"), Zh = tn("transitionrun"), Vh = tn("transitionstart"), kh = tn("transitioncancel"), Or = tn("transitionend"), Dr = /* @__PURE__ */ new Map(), zu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    zu.push("scrollEnd");
    function Ve(t, e) {
      Dr.set(t, e), Fl(e, [
        t
      ]);
    }
    var Li = typeof reportError == "function" ? reportError : function(t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var e = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
          error: t
        });
        if (!window.dispatchEvent(e)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return;
      }
      console.error(t);
    }, Be = [], Un = 0, Mu = 0;
    function ji() {
      for (var t = Un, e = Mu = Un = 0; e < t; ) {
        var l = Be[e];
        Be[e++] = null;
        var n = Be[e];
        Be[e++] = null;
        var a = Be[e];
        Be[e++] = null;
        var i = Be[e];
        if (Be[e++] = null, n !== null && a !== null) {
          var s = n.pending;
          s === null ? a.next = a : (a.next = s.next, s.next = a), n.pending = a;
        }
        i !== 0 && Cr(l, a, i);
      }
    }
    function qi(t, e, l, n) {
      Be[Un++] = t, Be[Un++] = e, Be[Un++] = l, Be[Un++] = n, Mu |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
    }
    function Ou(t, e, l, n) {
      return qi(t, e, l, n), Gi(t);
    }
    function en(t, e) {
      return qi(t, null, null, e), Gi(t);
    }
    function Cr(t, e, l) {
      t.lanes |= l;
      var n = t.alternate;
      n !== null && (n.lanes |= l);
      for (var a = false, i = t.return; i !== null; ) i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (a = true)), t = i, i = i.return;
      return t.tag === 3 ? (i = t.stateNode, a && e !== null && (a = 31 - xe(l), t = i.hiddenUpdates, n = t[a], n === null ? t[a] = [
        e
      ] : n.push(e), e.lane = l | 536870912), i) : null;
    }
    function Gi(t) {
      if (50 < $a) throw $a = 0, qo = null, Error(o(185));
      for (var e = t.return; e !== null; ) t = e, e = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    var Hn = {};
    function Kh(t, e, l, n) {
      this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Ae(t, e, l, n) {
      return new Kh(t, e, l, n);
    }
    function Du(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function il(t, e) {
      var l = t.alternate;
      return l === null ? (l = Ae(t.tag, e, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
      }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
    }
    function Nr(t, e) {
      t.flags &= 65011714;
      var l = t.alternate;
      return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
      }), t;
    }
    function Xi(t, e, l, n, a, i) {
      var s = 0;
      if (n = t, typeof t == "function") Du(t) && (s = 1);
      else if (typeof t == "string") s = I0(t, l, ot.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else t: switch (t) {
        case Ht:
          return t = Ae(31, l, e, a), t.elementType = Ht, t.lanes = i, t;
        case E:
          return ln(l.children, a, i, e);
        case B:
          s = 8, a |= 24;
          break;
        case L:
          return t = Ae(12, l, e, a | 2), t.elementType = L, t.lanes = i, t;
        case Ut:
          return t = Ae(13, l, e, a), t.elementType = Ut, t.lanes = i, t;
        case Nt:
          return t = Ae(19, l, e, a), t.elementType = Nt, t.lanes = i, t;
        default:
          if (typeof t == "object" && t !== null) switch (t.$$typeof) {
            case nt:
              s = 10;
              break t;
            case $:
              s = 9;
              break t;
            case st:
              s = 11;
              break t;
            case P:
              s = 14;
              break t;
            case rt:
              s = 16, n = null;
              break t;
          }
          s = 29, l = Error(o(130, t === null ? "null" : typeof t, "")), n = null;
      }
      return e = Ae(s, l, e, a), e.elementType = t, e.type = n, e.lanes = i, e;
    }
    function ln(t, e, l, n) {
      return t = Ae(7, t, n, e), t.lanes = l, t;
    }
    function Cu(t, e, l) {
      return t = Ae(6, t, null, e), t.lanes = l, t;
    }
    function Rr(t) {
      var e = Ae(18, null, null, 0);
      return e.stateNode = t, e;
    }
    function Nu(t, e, l) {
      return e = Ae(4, t.children !== null ? t.children : [], t.key, e), e.lanes = l, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, e;
    }
    var Br = /* @__PURE__ */ new WeakMap();
    function Ue(t, e) {
      if (typeof t == "object" && t !== null) {
        var l = Br.get(t);
        return l !== void 0 ? l : (e = {
          value: t,
          source: e,
          stack: Ye(e)
        }, Br.set(t, e), e);
      }
      return {
        value: t,
        source: e,
        stack: Ye(e)
      };
    }
    var Ln = [], jn = 0, Yi = null, Ma = 0, He = [], Le = 0, zl = null, Ie = 1, Pe = "";
    function cl(t, e) {
      Ln[jn++] = Ma, Ln[jn++] = Yi, Yi = t, Ma = e;
    }
    function Ur(t, e, l) {
      He[Le++] = Ie, He[Le++] = Pe, He[Le++] = zl, zl = t;
      var n = Ie;
      t = Pe;
      var a = 32 - xe(n) - 1;
      n &= ~(1 << a), l += 1;
      var i = 32 - xe(e) + a;
      if (30 < i) {
        var s = a - a % 5;
        i = (n & (1 << s) - 1).toString(32), n >>= s, a -= s, Ie = 1 << 32 - xe(e) + a | l << a | n, Pe = i + t;
      } else Ie = 1 << i | l << a | n, Pe = t;
    }
    function Ru(t) {
      t.return !== null && (cl(t, 1), Ur(t, 1, 0));
    }
    function Bu(t) {
      for (; t === Yi; ) Yi = Ln[--jn], Ln[jn] = null, Ma = Ln[--jn], Ln[jn] = null;
      for (; t === zl; ) zl = He[--Le], He[Le] = null, Pe = He[--Le], He[Le] = null, Ie = He[--Le], He[Le] = null;
    }
    function Hr(t, e) {
      He[Le++] = Ie, He[Le++] = Pe, He[Le++] = zl, Ie = e.id, Pe = e.overflow, zl = t;
    }
    var oe = null, qt = null, yt = false, Ml = null, je = false, Uu = Error(o(519));
    function Ol(t) {
      var e = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw Oa(Ue(e, t)), Uu;
    }
    function Lr(t) {
      var e = t.stateNode, l = t.type, n = t.memoizedProps;
      switch (e[ue] = t, e[he] = n, l) {
        case "dialog":
          dt("cancel", e), dt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          dt("load", e);
          break;
        case "video":
        case "audio":
          for (l = 0; l < Fa.length; l++) dt(Fa[l], e);
          break;
        case "source":
          dt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          dt("error", e), dt("load", e);
          break;
        case "details":
          dt("toggle", e);
          break;
        case "input":
          dt("invalid", e), Ws(e, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, true);
          break;
        case "select":
          dt("invalid", e);
          break;
        case "textarea":
          dt("invalid", e), Is(e, n.value, n.defaultValue, n.children);
      }
      l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || n.suppressHydrationWarning === true || e_(e.textContent, l) ? (n.popover != null && (dt("beforetoggle", e), dt("toggle", e)), n.onScroll != null && dt("scroll", e), n.onScrollEnd != null && dt("scrollend", e), n.onClick != null && (e.onclick = nl), e = true) : e = false, e || Ol(t, true);
    }
    function jr(t) {
      for (oe = t.return; oe; ) switch (oe.tag) {
        case 5:
        case 31:
        case 13:
          je = false;
          return;
        case 27:
        case 3:
          je = true;
          return;
        default:
          oe = oe.return;
      }
    }
    function qn(t) {
      if (t !== oe) return false;
      if (!yt) return jr(t), yt = true, false;
      var e = t.tag, l;
      if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || ts(t.type, t.memoizedProps)), l = !l), l && qt && Ol(t), jr(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
        qt = r_(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
        qt = r_(t);
      } else e === 27 ? (e = qt, Ql(t.type) ? (t = is, is = null, qt = t) : qt = e) : qt = oe ? Ge(t.stateNode.nextSibling) : null;
      return true;
    }
    function nn() {
      qt = oe = null, yt = false;
    }
    function Hu() {
      var t = Ml;
      return t !== null && (ve === null ? ve = t : ve.push.apply(ve, t), Ml = null), t;
    }
    function Oa(t) {
      Ml === null ? Ml = [
        t
      ] : Ml.push(t);
    }
    var Lu = _t(null), an = null, ul = null;
    function Dl(t, e, l) {
      I(Lu, e._currentValue), e._currentValue = l;
    }
    function ol(t) {
      t._currentValue = Lu.current, et(Lu);
    }
    function ju(t, e, l) {
      for (; t !== null; ) {
        var n = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t === l) break;
        t = t.return;
      }
    }
    function qu(t, e, l, n) {
      var a = t.child;
      for (a !== null && (a.return = t); a !== null; ) {
        var i = a.dependencies;
        if (i !== null) {
          var s = a.child;
          i = i.firstContext;
          t: for (; i !== null; ) {
            var d = i;
            i = a;
            for (var g = 0; g < e.length; g++) if (d.context === e[g]) {
              i.lanes |= l, d = i.alternate, d !== null && (d.lanes |= l), ju(i.return, l, t), n || (s = null);
              break t;
            }
            i = d.next;
          }
        } else if (a.tag === 18) {
          if (s = a.return, s === null) throw Error(o(341));
          s.lanes |= l, i = s.alternate, i !== null && (i.lanes |= l), ju(s, l, t), s = null;
        } else s = a.child;
        if (s !== null) s.return = a;
        else for (s = a; s !== null; ) {
          if (s === t) {
            s = null;
            break;
          }
          if (a = s.sibling, a !== null) {
            a.return = s.return, s = a;
            break;
          }
          s = s.return;
        }
        a = s;
      }
    }
    function Gn(t, e, l, n) {
      t = null;
      for (var a = e, i = false; a !== null; ) {
        if (!i) {
          if ((a.flags & 524288) !== 0) i = true;
          else if ((a.flags & 262144) !== 0) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(o(387));
          if (s = s.memoizedProps, s !== null) {
            var d = a.type;
            Te(a.pendingProps.value, s.value) || (t !== null ? t.push(d) : t = [
              d
            ]);
          }
        } else if (a === $t.current) {
          if (s = a.alternate, s === null) throw Error(o(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(li) : t = [
            li
          ]);
        }
        a = a.return;
      }
      t !== null && qu(e, t, l, n), e.flags |= 262144;
    }
    function Qi(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!Te(t.context._currentValue, t.memoizedValue)) return true;
        t = t.next;
      }
      return false;
    }
    function cn(t) {
      an = t, ul = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function se(t) {
      return qr(an, t);
    }
    function Zi(t, e) {
      return an === null && cn(t), qr(t, e);
    }
    function qr(t, e) {
      var l = e._currentValue;
      if (e = {
        context: e,
        memoizedValue: l,
        next: null
      }, ul === null) {
        if (t === null) throw Error(o(308));
        ul = e, t.dependencies = {
          lanes: 0,
          firstContext: e
        }, t.flags |= 524288;
      } else ul = ul.next = e;
      return l;
    }
    var Jh = typeof AbortController < "u" ? AbortController : function() {
      var t = [], e = this.signal = {
        aborted: false,
        addEventListener: function(l, n) {
          t.push(n);
        }
      };
      this.abort = function() {
        e.aborted = true, t.forEach(function(l) {
          return l();
        });
      };
    }, $h = c.unstable_scheduleCallback, Wh = c.unstable_NormalPriority, Ft = {
      $$typeof: nt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function Gu() {
      return {
        controller: new Jh(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Da(t) {
      t.refCount--, t.refCount === 0 && $h(Wh, function() {
        t.controller.abort();
      });
    }
    var Ca = null, Xu = 0, Xn = 0, Yn = null;
    function Fh(t, e) {
      if (Ca === null) {
        var l = Ca = [];
        Xu = 0, Xn = Vo(), Yn = {
          status: "pending",
          value: void 0,
          then: function(n) {
            l.push(n);
          }
        };
      }
      return Xu++, e.then(Gr, Gr), e;
    }
    function Gr() {
      if (--Xu === 0 && Ca !== null) {
        Yn !== null && (Yn.status = "fulfilled");
        var t = Ca;
        Ca = null, Xn = 0, Yn = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function Ih(t, e) {
      var l = [], n = {
        status: "pending",
        value: null,
        reason: null,
        then: function(a) {
          l.push(a);
        }
      };
      return t.then(function() {
        n.status = "fulfilled", n.value = e;
        for (var a = 0; a < l.length; a++) (0, l[a])(e);
      }, function(a) {
        for (n.status = "rejected", n.reason = a, a = 0; a < l.length; a++) (0, l[a])(void 0);
      }), n;
    }
    var Xr = C.S;
    C.S = function(t, e) {
      Ad = Rt(), typeof e == "object" && e !== null && typeof e.then == "function" && Fh(t, e), Xr !== null && Xr(t, e);
    };
    var un = _t(null);
    function Yu() {
      var t = un.current;
      return t !== null ? t : Bt.pooledCache;
    }
    function Vi(t, e) {
      e === null ? I(un, un.current) : I(un, e.pool);
    }
    function Yr() {
      var t = Yu();
      return t === null ? null : {
        parent: Ft._currentValue,
        pool: t
      };
    }
    var Qn = Error(o(460)), Qu = Error(o(474)), ki = Error(o(542)), Ki = {
      then: function() {
      }
    };
    function Qr(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function Zr(t, e, l) {
      switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(nl, nl), e = l), e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, kr(t), t;
        default:
          if (typeof e.status == "string") e.then(nl, nl);
          else {
            if (t = Bt, t !== null && 100 < t.shellSuspendCounter) throw Error(o(482));
            t = e, t.status = "pending", t.then(function(n) {
              if (e.status === "pending") {
                var a = e;
                a.status = "fulfilled", a.value = n;
              }
            }, function(n) {
              if (e.status === "pending") {
                var a = e;
                a.status = "rejected", a.reason = n;
              }
            });
          }
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw t = e.reason, kr(t), t;
          }
          throw sn = e, Qn;
      }
    }
    function on(t) {
      try {
        var e = t._init;
        return e(t._payload);
      } catch (l) {
        throw l !== null && typeof l == "object" && typeof l.then == "function" ? (sn = l, Qn) : l;
      }
    }
    var sn = null;
    function Vr() {
      if (sn === null) throw Error(o(459));
      var t = sn;
      return sn = null, t;
    }
    function kr(t) {
      if (t === Qn || t === ki) throw Error(o(483));
    }
    var Zn = null, Na = 0;
    function Ji(t) {
      var e = Na;
      return Na += 1, Zn === null && (Zn = []), Zr(Zn, t, e);
    }
    function Ra(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function $i(t, e) {
      throw e.$$typeof === T ? Error(o(525)) : (t = Object.prototype.toString.call(e), Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
    }
    function Kr(t) {
      function e(x, v) {
        if (t) {
          var z = x.deletions;
          z === null ? (x.deletions = [
            v
          ], x.flags |= 16) : z.push(v);
        }
      }
      function l(x, v) {
        if (!t) return null;
        for (; v !== null; ) e(x, v), v = v.sibling;
        return null;
      }
      function n(x) {
        for (var v = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? v.set(x.key, x) : v.set(x.index, x), x = x.sibling;
        return v;
      }
      function a(x, v) {
        return x = il(x, v), x.index = 0, x.sibling = null, x;
      }
      function i(x, v, z) {
        return x.index = z, t ? (z = x.alternate, z !== null ? (z = z.index, z < v ? (x.flags |= 67108866, v) : z) : (x.flags |= 67108866, v)) : (x.flags |= 1048576, v);
      }
      function s(x) {
        return t && x.alternate === null && (x.flags |= 67108866), x;
      }
      function d(x, v, z, U) {
        return v === null || v.tag !== 6 ? (v = Cu(z, x.mode, U), v.return = x, v) : (v = a(v, z), v.return = x, v);
      }
      function g(x, v, z, U) {
        var F = z.type;
        return F === E ? N(x, v, z.props.children, U, z.key) : v !== null && (v.elementType === F || typeof F == "object" && F !== null && F.$$typeof === rt && on(F) === v.type) ? (v = a(v, z.props), Ra(v, z), v.return = x, v) : (v = Xi(z.type, z.key, z.props, null, x.mode, U), Ra(v, z), v.return = x, v);
      }
      function M(x, v, z, U) {
        return v === null || v.tag !== 4 || v.stateNode.containerInfo !== z.containerInfo || v.stateNode.implementation !== z.implementation ? (v = Nu(z, x.mode, U), v.return = x, v) : (v = a(v, z.children || []), v.return = x, v);
      }
      function N(x, v, z, U, F) {
        return v === null || v.tag !== 7 ? (v = ln(z, x.mode, U, F), v.return = x, v) : (v = a(v, z), v.return = x, v);
      }
      function H(x, v, z) {
        if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return v = Cu("" + v, x.mode, z), v.return = x, v;
        if (typeof v == "object" && v !== null) {
          switch (v.$$typeof) {
            case A:
              return z = Xi(v.type, v.key, v.props, null, x.mode, z), Ra(z, v), z.return = x, z;
            case R:
              return v = Nu(v, x.mode, z), v.return = x, v;
            case rt:
              return v = on(v), H(x, v, z);
          }
          if (xt(v) || St(v)) return v = ln(v, x.mode, z, null), v.return = x, v;
          if (typeof v.then == "function") return H(x, Ji(v), z);
          if (v.$$typeof === nt) return H(x, Zi(x, v), z);
          $i(x, v);
        }
        return null;
      }
      function O(x, v, z, U) {
        var F = v !== null ? v.key : null;
        if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint") return F !== null ? null : d(x, v, "" + z, U);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case A:
              return z.key === F ? g(x, v, z, U) : null;
            case R:
              return z.key === F ? M(x, v, z, U) : null;
            case rt:
              return z = on(z), O(x, v, z, U);
          }
          if (xt(z) || St(z)) return F !== null ? null : N(x, v, z, U, null);
          if (typeof z.then == "function") return O(x, v, Ji(z), U);
          if (z.$$typeof === nt) return O(x, v, Zi(x, z), U);
          $i(x, z);
        }
        return null;
      }
      function D(x, v, z, U, F) {
        if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint") return x = x.get(z) || null, d(v, x, "" + U, F);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case A:
              return x = x.get(U.key === null ? z : U.key) || null, g(v, x, U, F);
            case R:
              return x = x.get(U.key === null ? z : U.key) || null, M(v, x, U, F);
            case rt:
              return U = on(U), D(x, v, z, U, F);
          }
          if (xt(U) || St(U)) return x = x.get(z) || null, N(v, x, U, F, null);
          if (typeof U.then == "function") return D(x, v, z, Ji(U), F);
          if (U.$$typeof === nt) return D(x, v, z, Zi(v, U), F);
          $i(v, U);
        }
        return null;
      }
      function V(x, v, z, U) {
        for (var F = null, vt = null, k = v, ut = v = 0, ht = null; k !== null && ut < z.length; ut++) {
          k.index > ut ? (ht = k, k = null) : ht = k.sibling;
          var wt = O(x, k, z[ut], U);
          if (wt === null) {
            k === null && (k = ht);
            break;
          }
          t && k && wt.alternate === null && e(x, k), v = i(wt, v, ut), vt === null ? F = wt : vt.sibling = wt, vt = wt, k = ht;
        }
        if (ut === z.length) return l(x, k), yt && cl(x, ut), F;
        if (k === null) {
          for (; ut < z.length; ut++) k = H(x, z[ut], U), k !== null && (v = i(k, v, ut), vt === null ? F = k : vt.sibling = k, vt = k);
          return yt && cl(x, ut), F;
        }
        for (k = n(k); ut < z.length; ut++) ht = D(k, x, ut, z[ut], U), ht !== null && (t && ht.alternate !== null && k.delete(ht.key === null ? ut : ht.key), v = i(ht, v, ut), vt === null ? F = ht : vt.sibling = ht, vt = ht);
        return t && k.forEach(function(Jl) {
          return e(x, Jl);
        }), yt && cl(x, ut), F;
      }
      function tt(x, v, z, U) {
        if (z == null) throw Error(o(151));
        for (var F = null, vt = null, k = v, ut = v = 0, ht = null, wt = z.next(); k !== null && !wt.done; ut++, wt = z.next()) {
          k.index > ut ? (ht = k, k = null) : ht = k.sibling;
          var Jl = O(x, k, wt.value, U);
          if (Jl === null) {
            k === null && (k = ht);
            break;
          }
          t && k && Jl.alternate === null && e(x, k), v = i(Jl, v, ut), vt === null ? F = Jl : vt.sibling = Jl, vt = Jl, k = ht;
        }
        if (wt.done) return l(x, k), yt && cl(x, ut), F;
        if (k === null) {
          for (; !wt.done; ut++, wt = z.next()) wt = H(x, wt.value, U), wt !== null && (v = i(wt, v, ut), vt === null ? F = wt : vt.sibling = wt, vt = wt);
          return yt && cl(x, ut), F;
        }
        for (k = n(k); !wt.done; ut++, wt = z.next()) wt = D(k, x, ut, wt.value, U), wt !== null && (t && wt.alternate !== null && k.delete(wt.key === null ? ut : wt.key), v = i(wt, v, ut), vt === null ? F = wt : vt.sibling = wt, vt = wt);
        return t && k.forEach(function(sb) {
          return e(x, sb);
        }), yt && cl(x, ut), F;
      }
      function Ct(x, v, z, U) {
        if (typeof z == "object" && z !== null && z.type === E && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case A:
              t: {
                for (var F = z.key; v !== null; ) {
                  if (v.key === F) {
                    if (F = z.type, F === E) {
                      if (v.tag === 7) {
                        l(x, v.sibling), U = a(v, z.props.children), U.return = x, x = U;
                        break t;
                      }
                    } else if (v.elementType === F || typeof F == "object" && F !== null && F.$$typeof === rt && on(F) === v.type) {
                      l(x, v.sibling), U = a(v, z.props), Ra(U, z), U.return = x, x = U;
                      break t;
                    }
                    l(x, v);
                    break;
                  } else e(x, v);
                  v = v.sibling;
                }
                z.type === E ? (U = ln(z.props.children, x.mode, U, z.key), U.return = x, x = U) : (U = Xi(z.type, z.key, z.props, null, x.mode, U), Ra(U, z), U.return = x, x = U);
              }
              return s(x);
            case R:
              t: {
                for (F = z.key; v !== null; ) {
                  if (v.key === F) if (v.tag === 4 && v.stateNode.containerInfo === z.containerInfo && v.stateNode.implementation === z.implementation) {
                    l(x, v.sibling), U = a(v, z.children || []), U.return = x, x = U;
                    break t;
                  } else {
                    l(x, v);
                    break;
                  }
                  else e(x, v);
                  v = v.sibling;
                }
                U = Nu(z, x.mode, U), U.return = x, x = U;
              }
              return s(x);
            case rt:
              return z = on(z), Ct(x, v, z, U);
          }
          if (xt(z)) return V(x, v, z, U);
          if (St(z)) {
            if (F = St(z), typeof F != "function") throw Error(o(150));
            return z = F.call(z), tt(x, v, z, U);
          }
          if (typeof z.then == "function") return Ct(x, v, Ji(z), U);
          if (z.$$typeof === nt) return Ct(x, v, Zi(x, z), U);
          $i(x, z);
        }
        return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z, v !== null && v.tag === 6 ? (l(x, v.sibling), U = a(v, z), U.return = x, x = U) : (l(x, v), U = Cu(z, x.mode, U), U.return = x, x = U), s(x)) : l(x, v);
      }
      return function(x, v, z, U) {
        try {
          Na = 0;
          var F = Ct(x, v, z, U);
          return Zn = null, F;
        } catch (k) {
          if (k === Qn || k === ki) throw k;
          var vt = Ae(29, k, null, x.mode);
          return vt.lanes = U, vt.return = x, vt;
        } finally {
        }
      };
    }
    var rn = Kr(true), Jr = Kr(false), Cl = false;
    function Zu(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
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
    function Vu(t, e) {
      t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      });
    }
    function Nl(t) {
      return {
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Rl(t, e, l) {
      var n = t.updateQueue;
      if (n === null) return null;
      if (n = n.shared, (Tt & 2) !== 0) {
        var a = n.pending;
        return a === null ? e.next = e : (e.next = a.next, a.next = e), n.pending = e, e = Gi(t), Cr(t, null, l), e;
      }
      return qi(t, n, e, l), Gi(t);
    }
    function Ba(t, e, l) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
        var n = e.lanes;
        n &= t.pendingLanes, l |= n, e.lanes = l, qs(t, l);
      }
    }
    function ku(t, e) {
      var l = t.updateQueue, n = t.alternate;
      if (n !== null && (n = n.updateQueue, l === n)) {
        var a = null, i = null;
        if (l = l.firstBaseUpdate, l !== null) {
          do {
            var s = {
              lane: l.lane,
              tag: l.tag,
              payload: l.payload,
              callback: null,
              next: null
            };
            i === null ? a = i = s : i = i.next = s, l = l.next;
          } while (l !== null);
          i === null ? a = i = e : i = i.next = e;
        } else a = i = e;
        l = {
          baseState: n.baseState,
          firstBaseUpdate: a,
          lastBaseUpdate: i,
          shared: n.shared,
          callbacks: n.callbacks
        }, t.updateQueue = l;
        return;
      }
      t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
    }
    var Ku = false;
    function Ua() {
      if (Ku) {
        var t = Yn;
        if (t !== null) throw t;
      }
    }
    function Ha(t, e, l, n) {
      Ku = false;
      var a = t.updateQueue;
      Cl = false;
      var i = a.firstBaseUpdate, s = a.lastBaseUpdate, d = a.shared.pending;
      if (d !== null) {
        a.shared.pending = null;
        var g = d, M = g.next;
        g.next = null, s === null ? i = M : s.next = M, s = g;
        var N = t.alternate;
        N !== null && (N = N.updateQueue, d = N.lastBaseUpdate, d !== s && (d === null ? N.firstBaseUpdate = M : d.next = M, N.lastBaseUpdate = g));
      }
      if (i !== null) {
        var H = a.baseState;
        s = 0, N = M = g = null, d = i;
        do {
          var O = d.lane & -536870913, D = O !== d.lane;
          if (D ? (mt & O) === O : (n & O) === O) {
            O !== 0 && O === Xn && (Ku = true), N !== null && (N = N.next = {
              lane: 0,
              tag: d.tag,
              payload: d.payload,
              callback: null,
              next: null
            });
            t: {
              var V = t, tt = d;
              O = e;
              var Ct = l;
              switch (tt.tag) {
                case 1:
                  if (V = tt.payload, typeof V == "function") {
                    H = V.call(Ct, H, O);
                    break t;
                  }
                  H = V;
                  break t;
                case 3:
                  V.flags = V.flags & -65537 | 128;
                case 0:
                  if (V = tt.payload, O = typeof V == "function" ? V.call(Ct, H, O) : V, O == null) break t;
                  H = b({}, H, O);
                  break t;
                case 2:
                  Cl = true;
              }
            }
            O = d.callback, O !== null && (t.flags |= 64, D && (t.flags |= 8192), D = a.callbacks, D === null ? a.callbacks = [
              O
            ] : D.push(O));
          } else D = {
            lane: O,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          }, N === null ? (M = N = D, g = H) : N = N.next = D, s |= O;
          if (d = d.next, d === null) {
            if (d = a.shared.pending, d === null) break;
            D = d, d = D.next, D.next = null, a.lastBaseUpdate = D, a.shared.pending = null;
          }
        } while (true);
        N === null && (g = H), a.baseState = g, a.firstBaseUpdate = M, a.lastBaseUpdate = N, i === null && (a.shared.lanes = 0), jl |= s, t.lanes = s, t.memoizedState = H;
      }
    }
    function $r(t, e) {
      if (typeof t != "function") throw Error(o(191, t));
      t.call(e);
    }
    function Wr(t, e) {
      var l = t.callbacks;
      if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) $r(l[t], e);
    }
    var Vn = _t(null), Wi = _t(0);
    function Fr(t, e) {
      t = yl, I(Wi, t), I(Vn, e), yl = t | e.baseLanes;
    }
    function Ju() {
      I(Wi, yl), I(Vn, Vn.current);
    }
    function $u() {
      yl = Wi.current, et(Vn), et(Wi);
    }
    var Ee = _t(null), qe = null;
    function Bl(t) {
      var e = t.alternate;
      I(Kt, Kt.current & 1), I(Ee, t), qe === null && (e === null || Vn.current !== null || e.memoizedState !== null) && (qe = t);
    }
    function Wu(t) {
      I(Kt, Kt.current), I(Ee, t), qe === null && (qe = t);
    }
    function Ir(t) {
      t.tag === 22 ? (I(Kt, Kt.current), I(Ee, t), qe === null && (qe = t)) : Ul();
    }
    function Ul() {
      I(Kt, Kt.current), I(Ee, Ee.current);
    }
    function ze(t) {
      et(Ee), qe === t && (qe = null), et(Kt);
    }
    var Kt = _t(0);
    function Fi(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var l = e.memoizedState;
          if (l !== null && (l = l.dehydrated, l === null || ns(l) || as(l))) return e;
        } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
          if ((e.flags & 128) !== 0) return e;
        } else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return null;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      return null;
    }
    var sl = 0, ct = null, Ot = null, It = null, Ii = false, kn = false, fn = false, Pi = 0, La = 0, Kn = null, Ph = 0;
    function Vt() {
      throw Error(o(321));
    }
    function Fu(t, e) {
      if (e === null) return false;
      for (var l = 0; l < e.length && l < t.length; l++) if (!Te(t[l], e[l])) return false;
      return true;
    }
    function Iu(t, e, l, n, a, i) {
      return sl = i, ct = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, C.H = t === null || t.memoizedState === null ? Hf : mo, fn = false, i = l(n, a), fn = false, kn && (i = tf(e, l, n, a)), Pr(t), i;
    }
    function Pr(t) {
      C.H = Ga;
      var e = Ot !== null && Ot.next !== null;
      if (sl = 0, It = Ot = ct = null, Ii = false, La = 0, Kn = null, e) throw Error(o(300));
      t === null || Pt || (t = t.dependencies, t !== null && Qi(t) && (Pt = true));
    }
    function tf(t, e, l, n) {
      ct = t;
      var a = 0;
      do {
        if (kn && (Kn = null), La = 0, kn = false, 25 <= a) throw Error(o(301));
        if (a += 1, It = Ot = null, t.updateQueue != null) {
          var i = t.updateQueue;
          i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
        }
        C.H = Lf, i = e(l, n);
      } while (kn);
      return i;
    }
    function t0() {
      var t = C.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? ja(e) : e, t = t.useState()[0], (Ot !== null ? Ot.memoizedState : null) !== t && (ct.flags |= 1024), e;
    }
    function Pu() {
      var t = Pi !== 0;
      return Pi = 0, t;
    }
    function to(t, e, l) {
      e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
    }
    function eo(t) {
      if (Ii) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        Ii = false;
      }
      sl = 0, It = Ot = ct = null, kn = false, La = Pi = 0, Kn = null;
    }
    function me() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return It === null ? ct.memoizedState = It = t : It = It.next = t, It;
    }
    function Jt() {
      if (Ot === null) {
        var t = ct.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = Ot.next;
      var e = It === null ? ct.memoizedState : It.next;
      if (e !== null) It = e, Ot = t;
      else {
        if (t === null) throw ct.alternate === null ? Error(o(467)) : Error(o(310));
        Ot = t, t = {
          memoizedState: Ot.memoizedState,
          baseState: Ot.baseState,
          baseQueue: Ot.baseQueue,
          queue: Ot.queue,
          next: null
        }, It === null ? ct.memoizedState = It = t : It = It.next = t;
      }
      return It;
    }
    function tc() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function ja(t) {
      var e = La;
      return La += 1, Kn === null && (Kn = []), t = Zr(Kn, t, e), e = ct, (It === null ? e.memoizedState : It.next) === null && (e = e.alternate, C.H = e === null || e.memoizedState === null ? Hf : mo), t;
    }
    function ec(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return ja(t);
        if (t.$$typeof === nt) return se(t);
      }
      throw Error(o(438, String(t)));
    }
    function lo(t) {
      var e = null, l = ct.updateQueue;
      if (l !== null && (e = l.memoCache), e == null) {
        var n = ct.alternate;
        n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (e = {
          data: n.data.map(function(a) {
            return a.slice();
          }),
          index: 0
        })));
      }
      if (e == null && (e = {
        data: [],
        index: 0
      }), l === null && (l = tc(), ct.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0) for (l = e.data[e.index] = Array(t), n = 0; n < t; n++) l[n] = ae;
      return e.index++, l;
    }
    function rl(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function lc(t) {
      var e = Jt();
      return no(e, Ot, t);
    }
    function no(t, e, l) {
      var n = t.queue;
      if (n === null) throw Error(o(311));
      n.lastRenderedReducer = l;
      var a = t.baseQueue, i = n.pending;
      if (i !== null) {
        if (a !== null) {
          var s = a.next;
          a.next = i.next, i.next = s;
        }
        e.baseQueue = a = i, n.pending = null;
      }
      if (i = t.baseState, a === null) t.memoizedState = i;
      else {
        e = a.next;
        var d = s = null, g = null, M = e, N = false;
        do {
          var H = M.lane & -536870913;
          if (H !== M.lane ? (mt & H) === H : (sl & H) === H) {
            var O = M.revertLane;
            if (O === 0) g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }), H === Xn && (N = true);
            else if ((sl & O) === O) {
              M = M.next, O === Xn && (N = true);
              continue;
            } else H = {
              lane: 0,
              revertLane: M.revertLane,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }, g === null ? (d = g = H, s = i) : g = g.next = H, ct.lanes |= O, jl |= O;
            H = M.action, fn && l(i, H), i = M.hasEagerState ? M.eagerState : l(i, H);
          } else O = {
            lane: H,
            revertLane: M.revertLane,
            gesture: M.gesture,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          }, g === null ? (d = g = O, s = i) : g = g.next = O, ct.lanes |= H, jl |= H;
          M = M.next;
        } while (M !== null && M !== e);
        if (g === null ? s = i : g.next = d, !Te(i, t.memoizedState) && (Pt = true, N && (l = Yn, l !== null))) throw l;
        t.memoizedState = i, t.baseState = s, t.baseQueue = g, n.lastRenderedState = i;
      }
      return a === null && (n.lanes = 0), [
        t.memoizedState,
        n.dispatch
      ];
    }
    function ao(t) {
      var e = Jt(), l = e.queue;
      if (l === null) throw Error(o(311));
      l.lastRenderedReducer = t;
      var n = l.dispatch, a = l.pending, i = e.memoizedState;
      if (a !== null) {
        l.pending = null;
        var s = a = a.next;
        do
          i = t(i, s.action), s = s.next;
        while (s !== a);
        Te(i, e.memoizedState) || (Pt = true), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), l.lastRenderedState = i;
      }
      return [
        i,
        n
      ];
    }
    function ef(t, e, l) {
      var n = ct, a = Jt(), i = yt;
      if (i) {
        if (l === void 0) throw Error(o(407));
        l = l();
      } else l = e();
      var s = !Te((Ot || a).memoizedState, l);
      if (s && (a.memoizedState = l, Pt = true), a = a.queue, uo(af.bind(null, n, a, t), [
        t
      ]), a.getSnapshot !== e || s || It !== null && It.memoizedState.tag & 1) {
        if (n.flags |= 2048, Jn(9, {
          destroy: void 0
        }, nf.bind(null, n, a, l, e), null), Bt === null) throw Error(o(349));
        i || (sl & 127) !== 0 || lf(n, e, l);
      }
      return l;
    }
    function lf(t, e, l) {
      t.flags |= 16384, t = {
        getSnapshot: e,
        value: l
      }, e = ct.updateQueue, e === null ? (e = tc(), ct.updateQueue = e, e.stores = [
        t
      ]) : (l = e.stores, l === null ? e.stores = [
        t
      ] : l.push(t));
    }
    function nf(t, e, l, n) {
      e.value = l, e.getSnapshot = n, cf(e) && uf(t);
    }
    function af(t, e, l) {
      return l(function() {
        cf(e) && uf(t);
      });
    }
    function cf(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var l = e();
        return !Te(t, l);
      } catch {
        return true;
      }
    }
    function uf(t) {
      var e = en(t, 2);
      e !== null && we(e, t, 2);
    }
    function io(t) {
      var e = me();
      if (typeof t == "function") {
        var l = t;
        if (t = l(), fn) {
          Tl(true);
          try {
            l();
          } finally {
            Tl(false);
          }
        }
      }
      return e.memoizedState = e.baseState = t, e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rl,
        lastRenderedState: t
      }, e;
    }
    function of(t, e, l, n) {
      return t.baseState = l, no(t, Ot, typeof n == "function" ? n : rl);
    }
    function e0(t, e, l, n, a) {
      if (ic(t)) throw Error(o(485));
      if (t = e.action, t !== null) {
        var i = {
          payload: a,
          action: t,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(s) {
            i.listeners.push(s);
          }
        };
        C.T !== null ? l(true) : i.isTransition = false, n(i), l = e.pending, l === null ? (i.next = e.pending = i, sf(e, i)) : (i.next = l.next, e.pending = l.next = i);
      }
    }
    function sf(t, e) {
      var l = e.action, n = e.payload, a = t.state;
      if (e.isTransition) {
        var i = C.T, s = {};
        C.T = s;
        try {
          var d = l(a, n), g = C.S;
          g !== null && g(s, d), rf(t, e, d);
        } catch (M) {
          co(t, e, M);
        } finally {
          i !== null && s.types !== null && (i.types = s.types), C.T = i;
        }
      } else try {
        i = l(a, n), rf(t, e, i);
      } catch (M) {
        co(t, e, M);
      }
    }
    function rf(t, e, l) {
      l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(n) {
        ff(t, e, n);
      }, function(n) {
        return co(t, e, n);
      }) : ff(t, e, l);
    }
    function ff(t, e, l) {
      e.status = "fulfilled", e.value = l, df(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, sf(t, l)));
    }
    function co(t, e, l) {
      var n = t.pending;
      if (t.pending = null, n !== null) {
        n = n.next;
        do
          e.status = "rejected", e.reason = l, df(e), e = e.next;
        while (e !== n);
      }
      t.action = null;
    }
    function df(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function _f(t, e) {
      return e;
    }
    function mf(t, e) {
      if (yt) {
        var l = Bt.formState;
        if (l !== null) {
          t: {
            var n = ct;
            if (yt) {
              if (qt) {
                e: {
                  for (var a = qt, i = je; a.nodeType !== 8; ) {
                    if (!i) {
                      a = null;
                      break e;
                    }
                    if (a = Ge(a.nextSibling), a === null) {
                      a = null;
                      break e;
                    }
                  }
                  i = a.data, a = i === "F!" || i === "F" ? a : null;
                }
                if (a) {
                  qt = Ge(a.nextSibling), n = a.data === "F!";
                  break t;
                }
              }
              Ol(n);
            }
            n = false;
          }
          n && (e = l[0]);
        }
      }
      return l = me(), l.memoizedState = l.baseState = e, n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _f,
        lastRenderedState: e
      }, l.queue = n, l = Rf.bind(null, ct, n), n.dispatch = l, n = io(false), i = _o.bind(null, ct, false, n.queue), n = me(), a = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
      }, n.queue = a, l = e0.bind(null, ct, a, i, l), a.dispatch = l, n.memoizedState = t, [
        e,
        l,
        false
      ];
    }
    function hf(t) {
      var e = Jt();
      return bf(e, Ot, t);
    }
    function bf(t, e, l) {
      if (e = no(t, e, _f)[0], t = lc(rl)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
        var n = ja(e);
      } catch (s) {
        throw s === Qn ? ki : s;
      }
      else n = e;
      e = Jt();
      var a = e.queue, i = a.dispatch;
      return l !== e.memoizedState && (ct.flags |= 2048, Jn(9, {
        destroy: void 0
      }, l0.bind(null, a, l), null)), [
        n,
        i,
        t
      ];
    }
    function l0(t, e) {
      t.action = e;
    }
    function yf(t) {
      var e = Jt(), l = Ot;
      if (l !== null) return bf(e, l, t);
      Jt(), e = e.memoizedState, l = Jt();
      var n = l.queue.dispatch;
      return l.memoizedState = t, [
        e,
        n,
        false
      ];
    }
    function Jn(t, e, l, n) {
      return t = {
        tag: t,
        create: l,
        deps: n,
        inst: e,
        next: null
      }, e = ct.updateQueue, e === null && (e = tc(), ct.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (n = l.next, l.next = t, t.next = n, e.lastEffect = t), t;
    }
    function gf() {
      return Jt().memoizedState;
    }
    function nc(t, e, l, n) {
      var a = me();
      ct.flags |= t, a.memoizedState = Jn(1 | e, {
        destroy: void 0
      }, l, n === void 0 ? null : n);
    }
    function ac(t, e, l, n) {
      var a = Jt();
      n = n === void 0 ? null : n;
      var i = a.memoizedState.inst;
      Ot !== null && n !== null && Fu(n, Ot.memoizedState.deps) ? a.memoizedState = Jn(e, i, l, n) : (ct.flags |= t, a.memoizedState = Jn(1 | e, i, l, n));
    }
    function pf(t, e) {
      nc(8390656, 8, t, e);
    }
    function uo(t, e) {
      ac(2048, 8, t, e);
    }
    function n0(t) {
      ct.flags |= 4;
      var e = ct.updateQueue;
      if (e === null) e = tc(), ct.updateQueue = e, e.events = [
        t
      ];
      else {
        var l = e.events;
        l === null ? e.events = [
          t
        ] : l.push(t);
      }
    }
    function vf(t) {
      var e = Jt().memoizedState;
      return n0({
        ref: e,
        nextImpl: t
      }), function() {
        if ((Tt & 2) !== 0) throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      };
    }
    function wf(t, e) {
      return ac(4, 2, t, e);
    }
    function Sf(t, e) {
      return ac(4, 4, t, e);
    }
    function xf(t, e) {
      if (typeof e == "function") {
        t = t();
        var l = e(t);
        return function() {
          typeof l == "function" ? l() : e(null);
        };
      }
      if (e != null) return t = t(), e.current = t, function() {
        e.current = null;
      };
    }
    function Tf(t, e, l) {
      l = l != null ? l.concat([
        t
      ]) : null, ac(4, 4, xf.bind(null, e, t), l);
    }
    function oo() {
    }
    function Af(t, e) {
      var l = Jt();
      e = e === void 0 ? null : e;
      var n = l.memoizedState;
      return e !== null && Fu(e, n[1]) ? n[0] : (l.memoizedState = [
        t,
        e
      ], t);
    }
    function Ef(t, e) {
      var l = Jt();
      e = e === void 0 ? null : e;
      var n = l.memoizedState;
      if (e !== null && Fu(e, n[1])) return n[0];
      if (n = t(), fn) {
        Tl(true);
        try {
          t();
        } finally {
          Tl(false);
        }
      }
      return l.memoizedState = [
        n,
        e
      ], n;
    }
    function so(t, e, l) {
      return l === void 0 || (sl & 1073741824) !== 0 && (mt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = zd(), ct.lanes |= t, jl |= t, l);
    }
    function zf(t, e, l, n) {
      return Te(l, e) ? l : Vn.current !== null ? (t = so(t, l, n), Te(t, e) || (Pt = true), t) : (sl & 42) === 0 || (sl & 1073741824) !== 0 && (mt & 261930) === 0 ? (Pt = true, t.memoizedState = l) : (t = zd(), ct.lanes |= t, jl |= t, e);
    }
    function Mf(t, e, l, n, a) {
      var i = q.p;
      q.p = i !== 0 && 8 > i ? i : 8;
      var s = C.T, d = {};
      C.T = d, _o(t, false, e, l);
      try {
        var g = a(), M = C.S;
        if (M !== null && M(d, g), g !== null && typeof g == "object" && typeof g.then == "function") {
          var N = Ih(g, n);
          qa(t, e, N, De(t));
        } else qa(t, e, n, De(t));
      } catch (H) {
        qa(t, e, {
          then: function() {
          },
          status: "rejected",
          reason: H
        }, De());
      } finally {
        q.p = i, s !== null && d.types !== null && (s.types = d.types), C.T = s;
      }
    }
    function a0() {
    }
    function ro(t, e, l, n) {
      if (t.tag !== 5) throw Error(o(476));
      var a = Of(t).queue;
      Mf(t, a, e, j, l === null ? a0 : function() {
        return Df(t), l(n);
      });
    }
    function Of(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: j,
        baseState: j,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: rl,
          lastRenderedState: j
        },
        next: null
      };
      var l = {};
      return e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: rl,
          lastRenderedState: l
        },
        next: null
      }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function Df(t) {
      var e = Of(t);
      e.next === null && (e = t.alternate.memoizedState), qa(t, e.next.queue, {}, De());
    }
    function fo() {
      return se(li);
    }
    function Cf() {
      return Jt().memoizedState;
    }
    function Nf() {
      return Jt().memoizedState;
    }
    function i0(t) {
      for (var e = t.return; e !== null; ) {
        switch (e.tag) {
          case 24:
          case 3:
            var l = De();
            t = Nl(l);
            var n = Rl(e, t, l);
            n !== null && (we(n, e, l), Ba(n, e, l)), e = {
              cache: Gu()
            }, t.payload = e;
            return;
        }
        e = e.return;
      }
    }
    function c0(t, e, l) {
      var n = De();
      l = {
        lane: n,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, ic(t) ? Bf(e, l) : (l = Ou(t, e, l, n), l !== null && (we(l, t, n), Uf(l, e, n)));
    }
    function Rf(t, e, l) {
      var n = De();
      qa(t, e, l, n);
    }
    function qa(t, e, l, n) {
      var a = {
        lane: n,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (ic(t)) Bf(e, a);
      else {
        var i = t.alternate;
        if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null)) try {
          var s = e.lastRenderedState, d = i(s, l);
          if (a.hasEagerState = true, a.eagerState = d, Te(d, s)) return qi(t, e, a, 0), Bt === null && ji(), false;
        } catch {
        } finally {
        }
        if (l = Ou(t, e, a, n), l !== null) return we(l, t, n), Uf(l, e, n), true;
      }
      return false;
    }
    function _o(t, e, l, n) {
      if (n = {
        lane: 2,
        revertLane: Vo(),
        gesture: null,
        action: n,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, ic(t)) {
        if (e) throw Error(o(479));
      } else e = Ou(t, l, n, 2), e !== null && we(e, t, 2);
    }
    function ic(t) {
      var e = t.alternate;
      return t === ct || e !== null && e === ct;
    }
    function Bf(t, e) {
      kn = Ii = true;
      var l = t.pending;
      l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
    }
    function Uf(t, e, l) {
      if ((l & 4194048) !== 0) {
        var n = e.lanes;
        n &= t.pendingLanes, l |= n, e.lanes = l, qs(t, l);
      }
    }
    var Ga = {
      readContext: se,
      use: ec,
      useCallback: Vt,
      useContext: Vt,
      useEffect: Vt,
      useImperativeHandle: Vt,
      useLayoutEffect: Vt,
      useInsertionEffect: Vt,
      useMemo: Vt,
      useReducer: Vt,
      useRef: Vt,
      useState: Vt,
      useDebugValue: Vt,
      useDeferredValue: Vt,
      useTransition: Vt,
      useSyncExternalStore: Vt,
      useId: Vt,
      useHostTransitionStatus: Vt,
      useFormState: Vt,
      useActionState: Vt,
      useOptimistic: Vt,
      useMemoCache: Vt,
      useCacheRefresh: Vt
    };
    Ga.useEffectEvent = Vt;
    var Hf = {
      readContext: se,
      use: ec,
      useCallback: function(t, e) {
        return me().memoizedState = [
          t,
          e === void 0 ? null : e
        ], t;
      },
      useContext: se,
      useEffect: pf,
      useImperativeHandle: function(t, e, l) {
        l = l != null ? l.concat([
          t
        ]) : null, nc(4194308, 4, xf.bind(null, e, t), l);
      },
      useLayoutEffect: function(t, e) {
        return nc(4194308, 4, t, e);
      },
      useInsertionEffect: function(t, e) {
        nc(4, 2, t, e);
      },
      useMemo: function(t, e) {
        var l = me();
        e = e === void 0 ? null : e;
        var n = t();
        if (fn) {
          Tl(true);
          try {
            t();
          } finally {
            Tl(false);
          }
        }
        return l.memoizedState = [
          n,
          e
        ], n;
      },
      useReducer: function(t, e, l) {
        var n = me();
        if (l !== void 0) {
          var a = l(e);
          if (fn) {
            Tl(true);
            try {
              l(e);
            } finally {
              Tl(false);
            }
          }
        } else a = e;
        return n.memoizedState = n.baseState = a, t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: a
        }, n.queue = t, t = t.dispatch = c0.bind(null, ct, t), [
          n.memoizedState,
          t
        ];
      },
      useRef: function(t) {
        var e = me();
        return t = {
          current: t
        }, e.memoizedState = t;
      },
      useState: function(t) {
        t = io(t);
        var e = t.queue, l = Rf.bind(null, ct, e);
        return e.dispatch = l, [
          t.memoizedState,
          l
        ];
      },
      useDebugValue: oo,
      useDeferredValue: function(t, e) {
        var l = me();
        return so(l, t, e);
      },
      useTransition: function() {
        var t = io(false);
        return t = Mf.bind(null, ct, t.queue, true, false), me().memoizedState = t, [
          false,
          t
        ];
      },
      useSyncExternalStore: function(t, e, l) {
        var n = ct, a = me();
        if (yt) {
          if (l === void 0) throw Error(o(407));
          l = l();
        } else {
          if (l = e(), Bt === null) throw Error(o(349));
          (mt & 127) !== 0 || lf(n, e, l);
        }
        a.memoizedState = l;
        var i = {
          value: l,
          getSnapshot: e
        };
        return a.queue = i, pf(af.bind(null, n, i, t), [
          t
        ]), n.flags |= 2048, Jn(9, {
          destroy: void 0
        }, nf.bind(null, n, i, l, e), null), l;
      },
      useId: function() {
        var t = me(), e = Bt.identifierPrefix;
        if (yt) {
          var l = Pe, n = Ie;
          l = (n & ~(1 << 32 - xe(n) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Pi++, 0 < l && (e += "H" + l.toString(32)), e += "_";
        } else l = Ph++, e = "_" + e + "r_" + l.toString(32) + "_";
        return t.memoizedState = e;
      },
      useHostTransitionStatus: fo,
      useFormState: mf,
      useActionState: mf,
      useOptimistic: function(t) {
        var e = me();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return e.queue = l, e = _o.bind(null, ct, true, l), l.dispatch = e, [
          t,
          e
        ];
      },
      useMemoCache: lo,
      useCacheRefresh: function() {
        return me().memoizedState = i0.bind(null, ct);
      },
      useEffectEvent: function(t) {
        var e = me(), l = {
          impl: t
        };
        return e.memoizedState = l, function() {
          if ((Tt & 2) !== 0) throw Error(o(440));
          return l.impl.apply(void 0, arguments);
        };
      }
    }, mo = {
      readContext: se,
      use: ec,
      useCallback: Af,
      useContext: se,
      useEffect: uo,
      useImperativeHandle: Tf,
      useInsertionEffect: wf,
      useLayoutEffect: Sf,
      useMemo: Ef,
      useReducer: lc,
      useRef: gf,
      useState: function() {
        return lc(rl);
      },
      useDebugValue: oo,
      useDeferredValue: function(t, e) {
        var l = Jt();
        return zf(l, Ot.memoizedState, t, e);
      },
      useTransition: function() {
        var t = lc(rl)[0], e = Jt().memoizedState;
        return [
          typeof t == "boolean" ? t : ja(t),
          e
        ];
      },
      useSyncExternalStore: ef,
      useId: Cf,
      useHostTransitionStatus: fo,
      useFormState: hf,
      useActionState: hf,
      useOptimistic: function(t, e) {
        var l = Jt();
        return of(l, Ot, t, e);
      },
      useMemoCache: lo,
      useCacheRefresh: Nf
    };
    mo.useEffectEvent = vf;
    var Lf = {
      readContext: se,
      use: ec,
      useCallback: Af,
      useContext: se,
      useEffect: uo,
      useImperativeHandle: Tf,
      useInsertionEffect: wf,
      useLayoutEffect: Sf,
      useMemo: Ef,
      useReducer: ao,
      useRef: gf,
      useState: function() {
        return ao(rl);
      },
      useDebugValue: oo,
      useDeferredValue: function(t, e) {
        var l = Jt();
        return Ot === null ? so(l, t, e) : zf(l, Ot.memoizedState, t, e);
      },
      useTransition: function() {
        var t = ao(rl)[0], e = Jt().memoizedState;
        return [
          typeof t == "boolean" ? t : ja(t),
          e
        ];
      },
      useSyncExternalStore: ef,
      useId: Cf,
      useHostTransitionStatus: fo,
      useFormState: yf,
      useActionState: yf,
      useOptimistic: function(t, e) {
        var l = Jt();
        return Ot !== null ? of(l, Ot, t, e) : (l.baseState = t, [
          t,
          l.queue.dispatch
        ]);
      },
      useMemoCache: lo,
      useCacheRefresh: Nf
    };
    Lf.useEffectEvent = vf;
    function ho(t, e, l, n) {
      e = t.memoizedState, l = l(n, e), l = l == null ? e : b({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
    }
    var bo = {
      enqueueSetState: function(t, e, l) {
        t = t._reactInternals;
        var n = De(), a = Nl(n);
        a.payload = e, l != null && (a.callback = l), e = Rl(t, a, n), e !== null && (we(e, t, n), Ba(e, t, n));
      },
      enqueueReplaceState: function(t, e, l) {
        t = t._reactInternals;
        var n = De(), a = Nl(n);
        a.tag = 1, a.payload = e, l != null && (a.callback = l), e = Rl(t, a, n), e !== null && (we(e, t, n), Ba(e, t, n));
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var l = De(), n = Nl(l);
        n.tag = 2, e != null && (n.callback = e), e = Rl(t, n, l), e !== null && (we(e, t, l), Ba(e, t, l));
      }
    };
    function jf(t, e, l, n, a, i, s) {
      return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, i, s) : e.prototype && e.prototype.isPureReactComponent ? !Ea(l, n) || !Ea(a, i) : true;
    }
    function qf(t, e, l, n) {
      t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, n), e.state !== t && bo.enqueueReplaceState(e, e.state, null);
    }
    function dn(t, e) {
      var l = e;
      if ("ref" in e) {
        l = {};
        for (var n in e) n !== "ref" && (l[n] = e[n]);
      }
      if (t = t.defaultProps) {
        l === e && (l = b({}, l));
        for (var a in t) l[a] === void 0 && (l[a] = t[a]);
      }
      return l;
    }
    function Gf(t) {
      Li(t);
    }
    function Xf(t) {
      console.error(t);
    }
    function Yf(t) {
      Li(t);
    }
    function cc(t, e) {
      try {
        var l = t.onUncaughtError;
        l(e.value, {
          componentStack: e.stack
        });
      } catch (n) {
        setTimeout(function() {
          throw n;
        });
      }
    }
    function Qf(t, e, l) {
      try {
        var n = t.onCaughtError;
        n(l.value, {
          componentStack: l.stack,
          errorBoundary: e.tag === 1 ? e.stateNode : null
        });
      } catch (a) {
        setTimeout(function() {
          throw a;
        });
      }
    }
    function yo(t, e, l) {
      return l = Nl(l), l.tag = 3, l.payload = {
        element: null
      }, l.callback = function() {
        cc(t, e);
      }, l;
    }
    function Zf(t) {
      return t = Nl(t), t.tag = 3, t;
    }
    function Vf(t, e, l, n) {
      var a = l.type.getDerivedStateFromError;
      if (typeof a == "function") {
        var i = n.value;
        t.payload = function() {
          return a(i);
        }, t.callback = function() {
          Qf(e, l, n);
        };
      }
      var s = l.stateNode;
      s !== null && typeof s.componentDidCatch == "function" && (t.callback = function() {
        Qf(e, l, n), typeof a != "function" && (ql === null ? ql = /* @__PURE__ */ new Set([
          this
        ]) : ql.add(this));
        var d = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: d !== null ? d : ""
        });
      });
    }
    function u0(t, e, l, n, a) {
      if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
        if (e = l.alternate, e !== null && Gn(e, l, a, true), l = Ee.current, l !== null) {
          switch (l.tag) {
            case 31:
            case 13:
              return qe === null ? gc() : l.alternate === null && kt === 0 && (kt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Ki ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([
                n
              ]) : e.add(n), Yo(t, n, a)), false;
            case 22:
              return l.flags |= 65536, n === Ki ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  n
                ])
              }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([
                n
              ]) : l.add(n)), Yo(t, n, a)), false;
          }
          throw Error(o(435, l.tag));
        }
        return Yo(t, n, a), gc(), false;
      }
      if (yt) return e = Ee.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = a, n !== Uu && (t = Error(o(422), {
        cause: n
      }), Oa(Ue(t, l)))) : (n !== Uu && (e = Error(o(423), {
        cause: n
      }), Oa(Ue(e, l))), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, n = Ue(n, l), a = yo(t.stateNode, n, a), ku(t, a), kt !== 4 && (kt = 2)), false;
      var i = Error(o(520), {
        cause: n
      });
      if (i = Ue(i, l), Ja === null ? Ja = [
        i
      ] : Ja.push(i), kt !== 4 && (kt = 2), e === null) return true;
      n = Ue(n, l), l = e;
      do {
        switch (l.tag) {
          case 3:
            return l.flags |= 65536, t = a & -a, l.lanes |= t, t = yo(l.stateNode, n, t), ku(l, t), false;
          case 1:
            if (e = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (ql === null || !ql.has(i)))) return l.flags |= 65536, a &= -a, l.lanes |= a, a = Zf(a), Vf(a, t, l, n), ku(l, a), false;
        }
        l = l.return;
      } while (l !== null);
      return false;
    }
    var go = Error(o(461)), Pt = false;
    function re(t, e, l, n) {
      e.child = t === null ? Jr(e, null, l, n) : rn(e, t.child, l, n);
    }
    function kf(t, e, l, n, a) {
      l = l.render;
      var i = e.ref;
      if ("ref" in n) {
        var s = {};
        for (var d in n) d !== "ref" && (s[d] = n[d]);
      } else s = n;
      return cn(e), n = Iu(t, e, l, s, i, a), d = Pu(), t !== null && !Pt ? (to(t, e, a), fl(t, e, a)) : (yt && d && Ru(e), e.flags |= 1, re(t, e, n, a), e.child);
    }
    function Kf(t, e, l, n, a) {
      if (t === null) {
        var i = l.type;
        return typeof i == "function" && !Du(i) && i.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = i, Jf(t, e, i, n, a)) : (t = Xi(l.type, null, n, e, e.mode, a), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (i = t.child, !Eo(t, a)) {
        var s = i.memoizedProps;
        if (l = l.compare, l = l !== null ? l : Ea, l(s, n) && t.ref === e.ref) return fl(t, e, a);
      }
      return e.flags |= 1, t = il(i, n), t.ref = e.ref, t.return = e, e.child = t;
    }
    function Jf(t, e, l, n, a) {
      if (t !== null) {
        var i = t.memoizedProps;
        if (Ea(i, n) && t.ref === e.ref) if (Pt = false, e.pendingProps = n = i, Eo(t, a)) (t.flags & 131072) !== 0 && (Pt = true);
        else return e.lanes = t.lanes, fl(t, e, a);
      }
      return po(t, e, l, n, a);
    }
    function $f(t, e, l, n) {
      var a = n.children, i = t !== null ? t.memoizedState : null;
      if (t === null && e.stateNode === null && (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), n.mode === "hidden") {
        if ((e.flags & 128) !== 0) {
          if (i = i !== null ? i.baseLanes | l : l, t !== null) {
            for (n = e.child = t.child, a = 0; n !== null; ) a = a | n.lanes | n.childLanes, n = n.sibling;
            n = a & ~i;
          } else n = 0, e.child = null;
          return Wf(t, e, i, l, n);
        }
        if ((l & 536870912) !== 0) e.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, t !== null && Vi(e, i !== null ? i.cachePool : null), i !== null ? Fr(e, i) : Ju(), Ir(e);
        else return n = e.lanes = 536870912, Wf(t, e, i !== null ? i.baseLanes | l : l, l, n);
      } else i !== null ? (Vi(e, i.cachePool), Fr(e, i), Ul(), e.memoizedState = null) : (t !== null && Vi(e, null), Ju(), Ul());
      return re(t, e, a, l), e.child;
    }
    function Xa(t, e) {
      return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), e.sibling;
    }
    function Wf(t, e, l, n, a) {
      var i = Yu();
      return i = i === null ? null : {
        parent: Ft._currentValue,
        pool: i
      }, e.memoizedState = {
        baseLanes: l,
        cachePool: i
      }, t !== null && Vi(e, null), Ju(), Ir(e), t !== null && Gn(t, e, n, true), e.childLanes = a, null;
    }
    function uc(t, e) {
      return e = sc({
        mode: e.mode,
        children: e.children
      }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function Ff(t, e, l) {
      return rn(e, t.child, null, l), t = uc(e, e.pendingProps), t.flags |= 2, ze(e), e.memoizedState = null, t;
    }
    function o0(t, e, l) {
      var n = e.pendingProps, a = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (yt) {
          if (n.mode === "hidden") return t = uc(e, n), e.lanes = 536870912, Xa(null, t);
          if (Wu(e), (t = qt) ? (t = s_(t, je), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: zl !== null ? {
              id: Ie,
              overflow: Pe
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Rr(t), l.return = e, e.child = l, oe = e, qt = null)) : t = null, t === null) throw Ol(e);
          return e.lanes = 536870912, null;
        }
        return uc(e, n);
      }
      var i = t.memoizedState;
      if (i !== null) {
        var s = i.dehydrated;
        if (Wu(e), a) if (e.flags & 256) e.flags &= -257, e = Ff(t, e, l);
        else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
        else throw Error(o(558));
        else if (Pt || Gn(t, e, l, false), a = (l & t.childLanes) !== 0, Pt || a) {
          if (n = Bt, n !== null && (s = Gs(n, l), s !== 0 && s !== i.retryLane)) throw i.retryLane = s, en(t, s), we(n, t, s), go;
          gc(), e = Ff(t, e, l);
        } else t = i.treeContext, qt = Ge(s.nextSibling), oe = e, yt = true, Ml = null, je = false, t !== null && Hr(e, t), e = uc(e, n), e.flags |= 4096;
        return e;
      }
      return t = il(t.child, {
        mode: n.mode,
        children: n.children
      }), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function oc(t, e) {
      var l = e.ref;
      if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof l != "function" && typeof l != "object") throw Error(o(284));
        (t === null || t.ref !== l) && (e.flags |= 4194816);
      }
    }
    function po(t, e, l, n, a) {
      return cn(e), l = Iu(t, e, l, n, void 0, a), n = Pu(), t !== null && !Pt ? (to(t, e, a), fl(t, e, a)) : (yt && n && Ru(e), e.flags |= 1, re(t, e, l, a), e.child);
    }
    function If(t, e, l, n, a, i) {
      return cn(e), e.updateQueue = null, l = tf(e, n, l, a), Pr(t), n = Pu(), t !== null && !Pt ? (to(t, e, i), fl(t, e, i)) : (yt && n && Ru(e), e.flags |= 1, re(t, e, l, i), e.child);
    }
    function Pf(t, e, l, n, a) {
      if (cn(e), e.stateNode === null) {
        var i = Hn, s = l.contextType;
        typeof s == "object" && s !== null && (i = se(s)), i = new l(n, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = bo, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = n, i.state = e.memoizedState, i.refs = {}, Zu(e), s = l.contextType, i.context = typeof s == "object" && s !== null ? se(s) : Hn, i.state = e.memoizedState, s = l.getDerivedStateFromProps, typeof s == "function" && (ho(e, l, s, n), i.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (s = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), s !== i.state && bo.enqueueReplaceState(i, i.state, null), Ha(e, n, i, a), Ua(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), n = true;
      } else if (t === null) {
        i = e.stateNode;
        var d = e.memoizedProps, g = dn(l, d);
        i.props = g;
        var M = i.context, N = l.contextType;
        s = Hn, typeof N == "object" && N !== null && (s = se(N));
        var H = l.getDerivedStateFromProps;
        N = typeof H == "function" || typeof i.getSnapshotBeforeUpdate == "function", d = e.pendingProps !== d, N || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d || M !== s) && qf(e, i, n, s), Cl = false;
        var O = e.memoizedState;
        i.state = O, Ha(e, n, i, a), Ua(), M = e.memoizedState, d || O !== M || Cl ? (typeof H == "function" && (ho(e, l, H, n), M = e.memoizedState), (g = Cl || jf(e, l, g, n, O, M, s)) ? (N || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = M), i.props = n, i.state = M, i.context = s, n = g) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), n = false);
      } else {
        i = e.stateNode, Vu(t, e), s = e.memoizedProps, N = dn(l, s), i.props = N, H = e.pendingProps, O = i.context, M = l.contextType, g = Hn, typeof M == "object" && M !== null && (g = se(M)), d = l.getDerivedStateFromProps, (M = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== H || O !== g) && qf(e, i, n, g), Cl = false, O = e.memoizedState, i.state = O, Ha(e, n, i, a), Ua();
        var D = e.memoizedState;
        s !== H || O !== D || Cl || t !== null && t.dependencies !== null && Qi(t.dependencies) ? (typeof d == "function" && (ho(e, l, d, n), D = e.memoizedState), (N = Cl || jf(e, l, N, n, O, D, g) || t !== null && t.dependencies !== null && Qi(t.dependencies)) ? (M || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, D, g), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(n, D, g)), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === t.memoizedProps && O === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && O === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = D), i.props = n, i.state = D, i.context = g, n = N) : (typeof i.componentDidUpdate != "function" || s === t.memoizedProps && O === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && O === t.memoizedState || (e.flags |= 1024), n = false);
      }
      return i = n, oc(t, e), n = (e.flags & 128) !== 0, i || n ? (i = e.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && n ? (e.child = rn(e, t.child, null, a), e.child = rn(e, null, l, a)) : re(t, e, l, a), e.memoizedState = i.state, t = e.child) : t = fl(t, e, a), t;
    }
    function td(t, e, l, n) {
      return nn(), e.flags |= 256, re(t, e, l, n), e.child;
    }
    var vo = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function wo(t) {
      return {
        baseLanes: t,
        cachePool: Yr()
      };
    }
    function So(t, e, l) {
      return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Oe), t;
    }
    function ed(t, e, l) {
      var n = e.pendingProps, a = false, i = (e.flags & 128) !== 0, s;
      if ((s = i) || (s = t !== null && t.memoizedState === null ? false : (Kt.current & 2) !== 0), s && (a = true, e.flags &= -129), s = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (yt) {
          if (a ? Bl(e) : Ul(), (t = qt) ? (t = s_(t, je), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: zl !== null ? {
              id: Ie,
              overflow: Pe
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Rr(t), l.return = e, e.child = l, oe = e, qt = null)) : t = null, t === null) throw Ol(e);
          return as(t) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var d = n.children;
        return n = n.fallback, a ? (Ul(), a = e.mode, d = sc({
          mode: "hidden",
          children: d
        }, a), n = ln(n, a, l, null), d.return = e, n.return = e, d.sibling = n, e.child = d, n = e.child, n.memoizedState = wo(l), n.childLanes = So(t, s, l), e.memoizedState = vo, Xa(null, n)) : (Bl(e), xo(e, d));
      }
      var g = t.memoizedState;
      if (g !== null && (d = g.dehydrated, d !== null)) {
        if (i) e.flags & 256 ? (Bl(e), e.flags &= -257, e = To(t, e, l)) : e.memoizedState !== null ? (Ul(), e.child = t.child, e.flags |= 128, e = null) : (Ul(), d = n.fallback, a = e.mode, n = sc({
          mode: "visible",
          children: n.children
        }, a), d = ln(d, a, l, null), d.flags |= 2, n.return = e, d.return = e, n.sibling = d, e.child = n, rn(e, t.child, null, l), n = e.child, n.memoizedState = wo(l), n.childLanes = So(t, s, l), e.memoizedState = vo, e = Xa(null, n));
        else if (Bl(e), as(d)) {
          if (s = d.nextSibling && d.nextSibling.dataset, s) var M = s.dgst;
          s = M, n = Error(o(419)), n.stack = "", n.digest = s, Oa({
            value: n,
            source: null,
            stack: null
          }), e = To(t, e, l);
        } else if (Pt || Gn(t, e, l, false), s = (l & t.childLanes) !== 0, Pt || s) {
          if (s = Bt, s !== null && (n = Gs(s, l), n !== 0 && n !== g.retryLane)) throw g.retryLane = n, en(t, n), we(s, t, n), go;
          ns(d) || gc(), e = To(t, e, l);
        } else ns(d) ? (e.flags |= 192, e.child = t.child, e = null) : (t = g.treeContext, qt = Ge(d.nextSibling), oe = e, yt = true, Ml = null, je = false, t !== null && Hr(e, t), e = xo(e, n.children), e.flags |= 4096);
        return e;
      }
      return a ? (Ul(), d = n.fallback, a = e.mode, g = t.child, M = g.sibling, n = il(g, {
        mode: "hidden",
        children: n.children
      }), n.subtreeFlags = g.subtreeFlags & 65011712, M !== null ? d = il(M, d) : (d = ln(d, a, l, null), d.flags |= 2), d.return = e, n.return = e, n.sibling = d, e.child = n, Xa(null, n), n = e.child, d = t.child.memoizedState, d === null ? d = wo(l) : (a = d.cachePool, a !== null ? (g = Ft._currentValue, a = a.parent !== g ? {
        parent: g,
        pool: g
      } : a) : a = Yr(), d = {
        baseLanes: d.baseLanes | l,
        cachePool: a
      }), n.memoizedState = d, n.childLanes = So(t, s, l), e.memoizedState = vo, Xa(t.child, n)) : (Bl(e), l = t.child, t = l.sibling, l = il(l, {
        mode: "visible",
        children: n.children
      }), l.return = e, l.sibling = null, t !== null && (s = e.deletions, s === null ? (e.deletions = [
        t
      ], e.flags |= 16) : s.push(t)), e.child = l, e.memoizedState = null, l);
    }
    function xo(t, e) {
      return e = sc({
        mode: "visible",
        children: e
      }, t.mode), e.return = t, t.child = e;
    }
    function sc(t, e) {
      return t = Ae(22, t, null, e), t.lanes = 0, t;
    }
    function To(t, e, l) {
      return rn(e, t.child, null, l), t = xo(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
    }
    function ld(t, e, l) {
      t.lanes |= e;
      var n = t.alternate;
      n !== null && (n.lanes |= e), ju(t.return, e, l);
    }
    function Ao(t, e, l, n, a, i) {
      var s = t.memoizedState;
      s === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: l,
        tailMode: a,
        treeForkCount: i
      } : (s.isBackwards = e, s.rendering = null, s.renderingStartTime = 0, s.last = n, s.tail = l, s.tailMode = a, s.treeForkCount = i);
    }
    function nd(t, e, l) {
      var n = e.pendingProps, a = n.revealOrder, i = n.tail;
      n = n.children;
      var s = Kt.current, d = (s & 2) !== 0;
      if (d ? (s = s & 1 | 2, e.flags |= 128) : s &= 1, I(Kt, s), re(t, e, n, l), n = yt ? Ma : 0, !d && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && ld(t, l, e);
        else if (t.tag === 19) ld(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      switch (a) {
        case "forwards":
          for (l = e.child, a = null; l !== null; ) t = l.alternate, t !== null && Fi(t) === null && (a = l), l = l.sibling;
          l = a, l === null ? (a = e.child, e.child = null) : (a = l.sibling, l.sibling = null), Ao(e, false, a, l, i, n);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (l = null, a = e.child, e.child = null; a !== null; ) {
            if (t = a.alternate, t !== null && Fi(t) === null) {
              e.child = a;
              break;
            }
            t = a.sibling, a.sibling = l, l = a, a = t;
          }
          Ao(e, true, l, null, i, n);
          break;
        case "together":
          Ao(e, false, null, null, void 0, n);
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function fl(t, e, l) {
      if (t !== null && (e.dependencies = t.dependencies), jl |= e.lanes, (l & e.childLanes) === 0) if (t !== null) {
        if (Gn(t, e, l, false), (l & e.childLanes) === 0) return null;
      } else return null;
      if (t !== null && e.child !== t.child) throw Error(o(153));
      if (e.child !== null) {
        for (t = e.child, l = il(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; ) t = t.sibling, l = l.sibling = il(t, t.pendingProps), l.return = e;
        l.sibling = null;
      }
      return e.child;
    }
    function Eo(t, e) {
      return (t.lanes & e) !== 0 ? true : (t = t.dependencies, !!(t !== null && Qi(t)));
    }
    function s0(t, e, l) {
      switch (e.tag) {
        case 3:
          Wt(e, e.stateNode.containerInfo), Dl(e, Ft, t.memoizedState.cache), nn();
          break;
        case 27:
        case 5:
          pt(e);
          break;
        case 4:
          Wt(e, e.stateNode.containerInfo);
          break;
        case 10:
          Dl(e, e.type, e.memoizedProps.value);
          break;
        case 31:
          if (e.memoizedState !== null) return e.flags |= 128, Wu(e), null;
          break;
        case 13:
          var n = e.memoizedState;
          if (n !== null) return n.dehydrated !== null ? (Bl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? ed(t, e, l) : (Bl(e), t = fl(t, e, l), t !== null ? t.sibling : null);
          Bl(e);
          break;
        case 19:
          var a = (t.flags & 128) !== 0;
          if (n = (l & e.childLanes) !== 0, n || (Gn(t, e, l, false), n = (l & e.childLanes) !== 0), a) {
            if (n) return nd(t, e, l);
            e.flags |= 128;
          }
          if (a = e.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), I(Kt, Kt.current), n) break;
          return null;
        case 22:
          return e.lanes = 0, $f(t, e, l, e.pendingProps);
        case 24:
          Dl(e, Ft, t.memoizedState.cache);
      }
      return fl(t, e, l);
    }
    function ad(t, e, l) {
      if (t !== null) if (t.memoizedProps !== e.pendingProps) Pt = true;
      else {
        if (!Eo(t, l) && (e.flags & 128) === 0) return Pt = false, s0(t, e, l);
        Pt = (t.flags & 131072) !== 0;
      }
      else Pt = false, yt && (e.flags & 1048576) !== 0 && Ur(e, Ma, e.index);
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: {
            var n = e.pendingProps;
            if (t = on(e.elementType), e.type = t, typeof t == "function") Du(t) ? (n = dn(t, n), e.tag = 1, e = Pf(null, e, t, n, l)) : (e.tag = 0, e = po(null, e, t, n, l));
            else {
              if (t != null) {
                var a = t.$$typeof;
                if (a === st) {
                  e.tag = 11, e = kf(null, e, t, n, l);
                  break t;
                } else if (a === P) {
                  e.tag = 14, e = Kf(null, e, t, n, l);
                  break t;
                }
              }
              throw e = bt(t) || t, Error(o(306, e, ""));
            }
          }
          return e;
        case 0:
          return po(t, e, e.type, e.pendingProps, l);
        case 1:
          return n = e.type, a = dn(n, e.pendingProps), Pf(t, e, n, a, l);
        case 3:
          t: {
            if (Wt(e, e.stateNode.containerInfo), t === null) throw Error(o(387));
            n = e.pendingProps;
            var i = e.memoizedState;
            a = i.element, Vu(t, e), Ha(e, n, null, l);
            var s = e.memoizedState;
            if (n = s.cache, Dl(e, Ft, n), n !== i.cache && qu(e, [
              Ft
            ], l, true), Ua(), n = s.element, i.isDehydrated) if (i = {
              element: n,
              isDehydrated: false,
              cache: s.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = td(t, e, n, l);
              break t;
            } else if (n !== a) {
              a = Ue(Error(o(424)), e), Oa(a), e = td(t, e, n, l);
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (qt = Ge(t.firstChild), oe = e, yt = true, Ml = null, je = true, l = Jr(e, null, n, l), e.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
            else {
              if (nn(), n === a) {
                e = fl(t, e, l);
                break t;
              }
              re(t, e, n, l);
            }
            e = e.child;
          }
          return e;
        case 26:
          return oc(t, e), t === null ? (l = h_(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : yt || (l = e.type, t = e.pendingProps, n = Ac(Qt.current).createElement(l), n[ue] = e, n[he] = t, fe(n, l, t), le(n), e.stateNode = n) : e.memoizedState = h_(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
        case 27:
          return pt(e), t === null && yt && (n = e.stateNode = d_(e.type, e.pendingProps, Qt.current), oe = e, je = true, a = qt, Ql(e.type) ? (is = a, qt = Ge(n.firstChild)) : qt = a), re(t, e, e.pendingProps.children, l), oc(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && yt && ((a = n = qt) && (n = q0(n, e.type, e.pendingProps, je), n !== null ? (e.stateNode = n, oe = e, qt = Ge(n.firstChild), je = false, a = true) : a = false), a || Ol(e)), pt(e), a = e.type, i = e.pendingProps, s = t !== null ? t.memoizedProps : null, n = i.children, ts(a, i) ? n = null : s !== null && ts(a, s) && (e.flags |= 32), e.memoizedState !== null && (a = Iu(t, e, t0, null, null, l), li._currentValue = a), oc(t, e), re(t, e, n, l), e.child;
        case 6:
          return t === null && yt && ((t = l = qt) && (l = G0(l, e.pendingProps, je), l !== null ? (e.stateNode = l, oe = e, qt = null, t = true) : t = false), t || Ol(e)), null;
        case 13:
          return ed(t, e, l);
        case 4:
          return Wt(e, e.stateNode.containerInfo), n = e.pendingProps, t === null ? e.child = rn(e, null, n, l) : re(t, e, n, l), e.child;
        case 11:
          return kf(t, e, e.type, e.pendingProps, l);
        case 7:
          return re(t, e, e.pendingProps, l), e.child;
        case 8:
          return re(t, e, e.pendingProps.children, l), e.child;
        case 12:
          return re(t, e, e.pendingProps.children, l), e.child;
        case 10:
          return n = e.pendingProps, Dl(e, e.type, n.value), re(t, e, n.children, l), e.child;
        case 9:
          return a = e.type._context, n = e.pendingProps.children, cn(e), a = se(a), n = n(a), e.flags |= 1, re(t, e, n, l), e.child;
        case 14:
          return Kf(t, e, e.type, e.pendingProps, l);
        case 15:
          return Jf(t, e, e.type, e.pendingProps, l);
        case 19:
          return nd(t, e, l);
        case 31:
          return o0(t, e, l);
        case 22:
          return $f(t, e, l, e.pendingProps);
        case 24:
          return cn(e), n = se(Ft), t === null ? (a = Yu(), a === null && (a = Bt, i = Gu(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), e.memoizedState = {
            parent: n,
            cache: a
          }, Zu(e), Dl(e, Ft, a)) : ((t.lanes & l) !== 0 && (Vu(t, e), Ha(e, null, null, l), Ua()), a = t.memoizedState, i = e.memoizedState, a.parent !== n ? (a = {
            parent: n,
            cache: n
          }, e.memoizedState = a, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a), Dl(e, Ft, n)) : (n = i.cache, Dl(e, Ft, n), n !== a.cache && qu(e, [
            Ft
          ], l, true))), re(t, e, e.pendingProps.children, l), e.child;
        case 29:
          throw e.pendingProps;
      }
      throw Error(o(156, e.tag));
    }
    function dl(t) {
      t.flags |= 4;
    }
    function zo(t, e, l, n, a) {
      if ((e = (t.mode & 32) !== 0) && (e = false), e) {
        if (t.flags |= 16777216, (a & 335544128) === a) if (t.stateNode.complete) t.flags |= 8192;
        else if (Cd()) t.flags |= 8192;
        else throw sn = Ki, Qu;
      } else t.flags &= -16777217;
    }
    function id(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
      else if (t.flags |= 16777216, !v_(e)) if (Cd()) t.flags |= 8192;
      else throw sn = Ki, Qu;
    }
    function rc(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Ls() : 536870912, t.lanes |= e, In |= e);
    }
    function Ya(t, e) {
      if (!yt) switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; ) e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var n = null; l !== null; ) l.alternate !== null && (n = l), l = l.sibling;
          n === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : n.sibling = null;
      }
    }
    function Gt(t) {
      var e = t.alternate !== null && t.alternate.child === t.child, l = 0, n = 0;
      if (e) for (var a = t.child; a !== null; ) l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = t, a = a.sibling;
      else for (a = t.child; a !== null; ) l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = t, a = a.sibling;
      return t.subtreeFlags |= n, t.childLanes = l, e;
    }
    function r0(t, e, l) {
      var n = e.pendingProps;
      switch (Bu(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Gt(e), null;
        case 1:
          return Gt(e), null;
        case 3:
          return l = e.stateNode, n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), ol(Ft), Lt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (qn(e) ? dl(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Hu())), Gt(e), null;
        case 26:
          var a = e.type, i = e.memoizedState;
          return t === null ? (dl(e), i !== null ? (Gt(e), id(e, i)) : (Gt(e), zo(e, a, null, n, l))) : i ? i !== t.memoizedState ? (dl(e), Gt(e), id(e, i)) : (Gt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== n && dl(e), Gt(e), zo(e, a, t, n, l)), null;
        case 27:
          if (Mt(e), l = Qt.current, a = e.type, t !== null && e.stateNode != null) t.memoizedProps !== n && dl(e);
          else {
            if (!n) {
              if (e.stateNode === null) throw Error(o(166));
              return Gt(e), null;
            }
            t = ot.current, qn(e) ? Lr(e) : (t = d_(a, n, l), e.stateNode = t, dl(e));
          }
          return Gt(e), null;
        case 5:
          if (Mt(e), a = e.type, t !== null && e.stateNode != null) t.memoizedProps !== n && dl(e);
          else {
            if (!n) {
              if (e.stateNode === null) throw Error(o(166));
              return Gt(e), null;
            }
            if (i = ot.current, qn(e)) Lr(e);
            else {
              var s = Ac(Qt.current);
              switch (i) {
                case 1:
                  i = s.createElementNS("http://www.w3.org/2000/svg", a);
                  break;
                case 2:
                  i = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                  break;
                default:
                  switch (a) {
                    case "svg":
                      i = s.createElementNS("http://www.w3.org/2000/svg", a);
                      break;
                    case "math":
                      i = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                      break;
                    case "script":
                      i = s.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(i.firstChild);
                      break;
                    case "select":
                      i = typeof n.is == "string" ? s.createElement("select", {
                        is: n.is
                      }) : s.createElement("select"), n.multiple ? i.multiple = true : n.size && (i.size = n.size);
                      break;
                    default:
                      i = typeof n.is == "string" ? s.createElement(a, {
                        is: n.is
                      }) : s.createElement(a);
                  }
              }
              i[ue] = e, i[he] = n;
              t: for (s = e.child; s !== null; ) {
                if (s.tag === 5 || s.tag === 6) i.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  s.child.return = s, s = s.child;
                  continue;
                }
                if (s === e) break t;
                for (; s.sibling === null; ) {
                  if (s.return === null || s.return === e) break t;
                  s = s.return;
                }
                s.sibling.return = s.return, s = s.sibling;
              }
              e.stateNode = i;
              t: switch (fe(i, a, n), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  n = !!n.autoFocus;
                  break t;
                case "img":
                  n = true;
                  break t;
                default:
                  n = false;
              }
              n && dl(e);
            }
          }
          return Gt(e), zo(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l), null;
        case 6:
          if (t && e.stateNode != null) t.memoizedProps !== n && dl(e);
          else {
            if (typeof n != "string" && e.stateNode === null) throw Error(o(166));
            if (t = Qt.current, qn(e)) {
              if (t = e.stateNode, l = e.memoizedProps, n = null, a = oe, a !== null) switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
              t[ue] = e, t = !!(t.nodeValue === l || n !== null && n.suppressHydrationWarning === true || e_(t.nodeValue, l)), t || Ol(e, true);
            } else t = Ac(t).createTextNode(n), t[ue] = e, e.stateNode = t;
          }
          return Gt(e), null;
        case 31:
          if (l = e.memoizedState, t === null || t.memoizedState !== null) {
            if (n = qn(e), l !== null) {
              if (t === null) {
                if (!n) throw Error(o(318));
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(557));
                t[ue] = e;
              } else nn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              Gt(e), t = false;
            } else l = Hu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = true;
            if (!t) return e.flags & 256 ? (ze(e), e) : (ze(e), null);
            if ((e.flags & 128) !== 0) throw Error(o(558));
          }
          return Gt(e), null;
        case 13:
          if (n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (a = qn(e), n !== null && n.dehydrated !== null) {
              if (t === null) {
                if (!a) throw Error(o(318));
                if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(o(317));
                a[ue] = e;
              } else nn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              Gt(e), a = false;
            } else a = Hu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = true;
            if (!a) return e.flags & 256 ? (ze(e), e) : (ze(e), null);
          }
          return ze(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = n !== null, t = t !== null && t.memoizedState !== null, l && (n = e.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), rc(e, e.updateQueue), Gt(e), null);
        case 4:
          return Lt(), t === null && $o(e.stateNode.containerInfo), Gt(e), null;
        case 10:
          return ol(e.type), Gt(e), null;
        case 19:
          if (et(Kt), n = e.memoizedState, n === null) return Gt(e), null;
          if (a = (e.flags & 128) !== 0, i = n.rendering, i === null) if (a) Ya(n, false);
          else {
            if (kt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
              if (i = Fi(t), i !== null) {
                for (e.flags |= 128, Ya(n, false), t = i.updateQueue, e.updateQueue = t, rc(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; ) Nr(l, t), l = l.sibling;
                return I(Kt, Kt.current & 1 | 2), yt && cl(e, n.treeForkCount), e.child;
              }
              t = t.sibling;
            }
            n.tail !== null && Rt() > hc && (e.flags |= 128, a = true, Ya(n, false), e.lanes = 4194304);
          }
          else {
            if (!a) if (t = Fi(i), t !== null) {
              if (e.flags |= 128, a = true, t = t.updateQueue, e.updateQueue = t, rc(e, t), Ya(n, true), n.tail === null && n.tailMode === "hidden" && !i.alternate && !yt) return Gt(e), null;
            } else 2 * Rt() - n.renderingStartTime > hc && l !== 536870912 && (e.flags |= 128, a = true, Ya(n, false), e.lanes = 4194304);
            n.isBackwards ? (i.sibling = e.child, e.child = i) : (t = n.last, t !== null ? t.sibling = i : e.child = i, n.last = i);
          }
          return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = Rt(), t.sibling = null, l = Kt.current, I(Kt, a ? l & 1 | 2 : l & 1), yt && cl(e, n.treeForkCount), t) : (Gt(e), null);
        case 22:
        case 23:
          return ze(e), $u(), n = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (e.flags |= 8192) : n && (e.flags |= 8192), n ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Gt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Gt(e), l = e.updateQueue, l !== null && rc(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== l && (e.flags |= 2048), t !== null && et(un), null;
        case 24:
          return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), ol(Ft), Gt(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(o(156, e.tag));
    }
    function f0(t, e) {
      switch (Bu(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3:
          return ol(Ft), Lt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return Mt(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (ze(e), e.alternate === null) throw Error(o(340));
            nn();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 13:
          if (ze(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null) throw Error(o(340));
            nn();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19:
          return et(Kt), null;
        case 4:
          return Lt(), null;
        case 10:
          return ol(e.type), null;
        case 22:
        case 23:
          return ze(e), $u(), t !== null && et(un), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 24:
          return ol(Ft), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function cd(t, e) {
      switch (Bu(e), e.tag) {
        case 3:
          ol(Ft), Lt();
          break;
        case 26:
        case 27:
        case 5:
          Mt(e);
          break;
        case 4:
          Lt();
          break;
        case 31:
          e.memoizedState !== null && ze(e);
          break;
        case 13:
          ze(e);
          break;
        case 19:
          et(Kt);
          break;
        case 10:
          ol(e.type);
          break;
        case 22:
        case 23:
          ze(e), $u(), t !== null && et(un);
          break;
        case 24:
          ol(Ft);
      }
    }
    function Qa(t, e) {
      try {
        var l = e.updateQueue, n = l !== null ? l.lastEffect : null;
        if (n !== null) {
          var a = n.next;
          l = a;
          do {
            if ((l.tag & t) === t) {
              n = void 0;
              var i = l.create, s = l.inst;
              n = i(), s.destroy = n;
            }
            l = l.next;
          } while (l !== a);
        }
      } catch (d) {
        zt(e, e.return, d);
      }
    }
    function Hl(t, e, l) {
      try {
        var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
        if (a !== null) {
          var i = a.next;
          n = i;
          do {
            if ((n.tag & t) === t) {
              var s = n.inst, d = s.destroy;
              if (d !== void 0) {
                s.destroy = void 0, a = e;
                var g = l, M = d;
                try {
                  M();
                } catch (N) {
                  zt(a, g, N);
                }
              }
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (N) {
        zt(e, e.return, N);
      }
    }
    function ud(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var l = t.stateNode;
        try {
          Wr(e, l);
        } catch (n) {
          zt(t, t.return, n);
        }
      }
    }
    function od(t, e, l) {
      l.props = dn(t.type, t.memoizedProps), l.state = t.memoizedState;
      try {
        l.componentWillUnmount();
      } catch (n) {
        zt(t, e, n);
      }
    }
    function Za(t, e) {
      try {
        var l = t.ref;
        if (l !== null) {
          switch (t.tag) {
            case 26:
            case 27:
            case 5:
              var n = t.stateNode;
              break;
            case 30:
              n = t.stateNode;
              break;
            default:
              n = t.stateNode;
          }
          typeof l == "function" ? t.refCleanup = l(n) : l.current = n;
        }
      } catch (a) {
        zt(t, e, a);
      }
    }
    function tl(t, e) {
      var l = t.ref, n = t.refCleanup;
      if (l !== null) if (typeof n == "function") try {
        n();
      } catch (a) {
        zt(t, e, a);
      } finally {
        t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
      }
      else if (typeof l == "function") try {
        l(null);
      } catch (a) {
        zt(t, e, a);
      }
      else l.current = null;
    }
    function sd(t) {
      var e = t.type, l = t.memoizedProps, n = t.stateNode;
      try {
        t: switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            l.autoFocus && n.focus();
            break t;
          case "img":
            l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet);
        }
      } catch (a) {
        zt(t, t.return, a);
      }
    }
    function Mo(t, e, l) {
      try {
        var n = t.stateNode;
        R0(n, t.type, l, e), n[he] = e;
      } catch (a) {
        zt(t, t.return, a);
      }
    }
    function rd(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ql(t.type) || t.tag === 4;
    }
    function Oo(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || rd(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && Ql(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function Do(t, e, l) {
      var n = t.tag;
      if (n === 5 || n === 6) t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = nl));
      else if (n !== 4 && (n === 27 && Ql(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null)) for (Do(t, e, l), t = t.sibling; t !== null; ) Do(t, e, l), t = t.sibling;
    }
    function fc(t, e, l) {
      var n = t.tag;
      if (n === 5 || n === 6) t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
      else if (n !== 4 && (n === 27 && Ql(t.type) && (l = t.stateNode), t = t.child, t !== null)) for (fc(t, e, l), t = t.sibling; t !== null; ) fc(t, e, l), t = t.sibling;
    }
    function fd(t) {
      var e = t.stateNode, l = t.memoizedProps;
      try {
        for (var n = t.type, a = e.attributes; a.length; ) e.removeAttributeNode(a[0]);
        fe(e, n, l), e[ue] = t, e[he] = l;
      } catch (i) {
        zt(t, t.return, i);
      }
    }
    var _l = false, te = false, Co = false, dd = typeof WeakSet == "function" ? WeakSet : Set, ne = null;
    function d0(t, e) {
      if (t = t.containerInfo, Io = Nc, t = xr(t), xu(t)) {
        if ("selectionStart" in t) var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
        else t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var a = n.anchorOffset, i = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break t;
            }
            var s = 0, d = -1, g = -1, M = 0, N = 0, H = t, O = null;
            e: for (; ; ) {
              for (var D; H !== l || a !== 0 && H.nodeType !== 3 || (d = s + a), H !== i || n !== 0 && H.nodeType !== 3 || (g = s + n), H.nodeType === 3 && (s += H.nodeValue.length), (D = H.firstChild) !== null; ) O = H, H = D;
              for (; ; ) {
                if (H === t) break e;
                if (O === l && ++M === a && (d = s), O === i && ++N === n && (g = s), (D = H.nextSibling) !== null) break;
                H = O, O = H.parentNode;
              }
              H = D;
            }
            l = d === -1 || g === -1 ? null : {
              start: d,
              end: g
            };
          } else l = null;
        }
        l = l || {
          start: 0,
          end: 0
        };
      } else l = null;
      for (Po = {
        focusedElem: t,
        selectionRange: l
      }, Nc = false, ne = e; ne !== null; ) if (e = ne, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, ne = t;
      else for (; ne !== null; ) {
        switch (e = ne, i = e.alternate, t = e.flags, e.tag) {
          case 0:
            if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null)) for (l = 0; l < t.length; l++) a = t[l], a.ref.impl = a.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((t & 1024) !== 0 && i !== null) {
              t = void 0, l = e, a = i.memoizedProps, i = i.memoizedState, n = l.stateNode;
              try {
                var V = dn(l.type, a);
                t = n.getSnapshotBeforeUpdate(V, i), n.__reactInternalSnapshotBeforeUpdate = t;
              } catch (tt) {
                zt(l, l.return, tt);
              }
            }
            break;
          case 3:
            if ((t & 1024) !== 0) {
              if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9) ls(t);
              else if (l === 1) switch (t.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  ls(t);
                  break;
                default:
                  t.textContent = "";
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
            if ((t & 1024) !== 0) throw Error(o(163));
        }
        if (t = e.sibling, t !== null) {
          t.return = e.return, ne = t;
          break;
        }
        ne = e.return;
      }
    }
    function _d(t, e, l) {
      var n = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          hl(t, l), n & 4 && Qa(5, l);
          break;
        case 1:
          if (hl(t, l), n & 4) if (t = l.stateNode, e === null) try {
            t.componentDidMount();
          } catch (s) {
            zt(l, l.return, s);
          }
          else {
            var a = dn(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(a, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (s) {
              zt(l, l.return, s);
            }
          }
          n & 64 && ud(l), n & 512 && Za(l, l.return);
          break;
        case 3:
          if (hl(t, l), n & 64 && (t = l.updateQueue, t !== null)) {
            if (e = null, l.child !== null) switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
            try {
              Wr(t, e);
            } catch (s) {
              zt(l, l.return, s);
            }
          }
          break;
        case 27:
          e === null && n & 4 && fd(l);
        case 26:
        case 5:
          hl(t, l), e === null && n & 4 && sd(l), n & 512 && Za(l, l.return);
          break;
        case 12:
          hl(t, l);
          break;
        case 31:
          hl(t, l), n & 4 && bd(t, l);
          break;
        case 13:
          hl(t, l), n & 4 && yd(t, l), n & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = w0.bind(null, l), X0(t, l))));
          break;
        case 22:
          if (n = l.memoizedState !== null || _l, !n) {
            e = e !== null && e.memoizedState !== null || te, a = _l;
            var i = te;
            _l = n, (te = e) && !i ? bl(t, l, (l.subtreeFlags & 8772) !== 0) : hl(t, l), _l = a, te = i;
          }
          break;
        case 30:
          break;
        default:
          hl(t, l);
      }
    }
    function md(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, md(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && cu(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    var Xt = null, ye = false;
    function ml(t, e, l) {
      for (l = l.child; l !== null; ) hd(t, e, l), l = l.sibling;
    }
    function hd(t, e, l) {
      if (Se && typeof Se.onCommitFiberUnmount == "function") try {
        Se.onCommitFiberUnmount(ma, l);
      } catch {
      }
      switch (l.tag) {
        case 26:
          te || tl(l, e), ml(t, e, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
          break;
        case 27:
          te || tl(l, e);
          var n = Xt, a = ye;
          Ql(l.type) && (Xt = l.stateNode, ye = false), ml(t, e, l), Pa(l.stateNode), Xt = n, ye = a;
          break;
        case 5:
          te || tl(l, e);
        case 6:
          if (n = Xt, a = ye, Xt = null, ml(t, e, l), Xt = n, ye = a, Xt !== null) if (ye) try {
            (Xt.nodeType === 9 ? Xt.body : Xt.nodeName === "HTML" ? Xt.ownerDocument.body : Xt).removeChild(l.stateNode);
          } catch (i) {
            zt(l, e, i);
          }
          else try {
            Xt.removeChild(l.stateNode);
          } catch (i) {
            zt(l, e, i);
          }
          break;
        case 18:
          Xt !== null && (ye ? (t = Xt, u_(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), ca(t)) : u_(Xt, l.stateNode));
          break;
        case 4:
          n = Xt, a = ye, Xt = l.stateNode.containerInfo, ye = true, ml(t, e, l), Xt = n, ye = a;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Hl(2, l, e), te || Hl(4, l, e), ml(t, e, l);
          break;
        case 1:
          te || (tl(l, e), n = l.stateNode, typeof n.componentWillUnmount == "function" && od(l, e, n)), ml(t, e, l);
          break;
        case 21:
          ml(t, e, l);
          break;
        case 22:
          te = (n = te) || l.memoizedState !== null, ml(t, e, l), te = n;
          break;
        default:
          ml(t, e, l);
      }
    }
    function bd(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          ca(t);
        } catch (l) {
          zt(e, e.return, l);
        }
      }
    }
    function yd(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
        ca(t);
      } catch (l) {
        zt(e, e.return, l);
      }
    }
    function _0(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new dd()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new dd()), e;
        default:
          throw Error(o(435, t.tag));
      }
    }
    function dc(t, e) {
      var l = _0(t);
      e.forEach(function(n) {
        if (!l.has(n)) {
          l.add(n);
          var a = S0.bind(null, t, n);
          n.then(a, a);
        }
      });
    }
    function ge(t, e) {
      var l = e.deletions;
      if (l !== null) for (var n = 0; n < l.length; n++) {
        var a = l[n], i = t, s = e, d = s;
        t: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (Ql(d.type)) {
                Xt = d.stateNode, ye = false;
                break t;
              }
              break;
            case 5:
              Xt = d.stateNode, ye = false;
              break t;
            case 3:
            case 4:
              Xt = d.stateNode.containerInfo, ye = true;
              break t;
          }
          d = d.return;
        }
        if (Xt === null) throw Error(o(160));
        hd(i, s, a), Xt = null, ye = false, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
      if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) gd(e, t), e = e.sibling;
    }
    var ke = null;
    function gd(t, e) {
      var l = t.alternate, n = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ge(e, t), pe(t), n & 4 && (Hl(3, t, t.return), Qa(3, t), Hl(5, t, t.return));
          break;
        case 1:
          ge(e, t), pe(t), n & 512 && (te || l === null || tl(l, l.return)), n & 64 && _l && (t = t.updateQueue, t !== null && (n = t.callbacks, n !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
          break;
        case 26:
          var a = ke;
          if (ge(e, t), pe(t), n & 512 && (te || l === null || tl(l, l.return)), n & 4) {
            var i = l !== null ? l.memoizedState : null;
            if (n = t.memoizedState, l === null) if (n === null) if (t.stateNode === null) {
              t: {
                n = t.type, l = t.memoizedProps, a = a.ownerDocument || a;
                e: switch (n) {
                  case "title":
                    i = a.getElementsByTagName("title")[0], (!i || i[ya] || i[ue] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(i, a.querySelector("head > title"))), fe(i, n, l), i[ue] = t, le(i), n = i;
                    break t;
                  case "link":
                    var s = g_("link", "href", a).get(n + (l.href || ""));
                    if (s) {
                      for (var d = 0; d < s.length; d++) if (i = s[d], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                        s.splice(d, 1);
                        break e;
                      }
                    }
                    i = a.createElement(n), fe(i, n, l), a.head.appendChild(i);
                    break;
                  case "meta":
                    if (s = g_("meta", "content", a).get(n + (l.content || ""))) {
                      for (d = 0; d < s.length; d++) if (i = s[d], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                        s.splice(d, 1);
                        break e;
                      }
                    }
                    i = a.createElement(n), fe(i, n, l), a.head.appendChild(i);
                    break;
                  default:
                    throw Error(o(468, n));
                }
                i[ue] = t, le(i), n = i;
              }
              t.stateNode = n;
            } else p_(a, t.type, t.stateNode);
            else t.stateNode = y_(a, n, t.memoizedProps);
            else i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? p_(a, t.type, t.stateNode) : y_(a, n, t.memoizedProps)) : n === null && t.stateNode !== null && Mo(t, t.memoizedProps, l.memoizedProps);
          }
          break;
        case 27:
          ge(e, t), pe(t), n & 512 && (te || l === null || tl(l, l.return)), l !== null && n & 4 && Mo(t, t.memoizedProps, l.memoizedProps);
          break;
        case 5:
          if (ge(e, t), pe(t), n & 512 && (te || l === null || tl(l, l.return)), t.flags & 32) {
            a = t.stateNode;
            try {
              On(a, "");
            } catch (V) {
              zt(t, t.return, V);
            }
          }
          n & 4 && t.stateNode != null && (a = t.memoizedProps, Mo(t, a, l !== null ? l.memoizedProps : a)), n & 1024 && (Co = true);
          break;
        case 6:
          if (ge(e, t), pe(t), n & 4) {
            if (t.stateNode === null) throw Error(o(162));
            n = t.memoizedProps, l = t.stateNode;
            try {
              l.nodeValue = n;
            } catch (V) {
              zt(t, t.return, V);
            }
          }
          break;
        case 3:
          if (Mc = null, a = ke, ke = Ec(e.containerInfo), ge(e, t), ke = a, pe(t), n & 4 && l !== null && l.memoizedState.isDehydrated) try {
            ca(e.containerInfo);
          } catch (V) {
            zt(t, t.return, V);
          }
          Co && (Co = false, pd(t));
          break;
        case 4:
          n = ke, ke = Ec(t.stateNode.containerInfo), ge(e, t), pe(t), ke = n;
          break;
        case 12:
          ge(e, t), pe(t);
          break;
        case 31:
          ge(e, t), pe(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, dc(t, n)));
          break;
        case 13:
          ge(e, t), pe(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (mc = Rt()), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, dc(t, n)));
          break;
        case 22:
          a = t.memoizedState !== null;
          var g = l !== null && l.memoizedState !== null, M = _l, N = te;
          if (_l = M || a, te = N || g, ge(e, t), te = N, _l = M, pe(t), n & 8192) t: for (e = t.stateNode, e._visibility = a ? e._visibility & -2 : e._visibility | 1, a && (l === null || g || _l || te || _n(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                g = l = e;
                try {
                  if (i = g.stateNode, a) s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                  else {
                    d = g.stateNode;
                    var H = g.memoizedProps.style, O = H != null && H.hasOwnProperty("display") ? H.display : null;
                    d.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (V) {
                  zt(g, g.return, V);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                g = e;
                try {
                  g.stateNode.nodeValue = a ? "" : g.memoizedProps;
                } catch (V) {
                  zt(g, g.return, V);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                g = e;
                try {
                  var D = g.stateNode;
                  a ? o_(D, true) : o_(g.stateNode, false);
                } catch (V) {
                  zt(g, g.return, V);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
          n & 4 && (n = t.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, dc(t, l))));
          break;
        case 19:
          ge(e, t), pe(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, dc(t, n)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          ge(e, t), pe(t);
      }
    }
    function pe(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          for (var l, n = t.return; n !== null; ) {
            if (rd(n)) {
              l = n;
              break;
            }
            n = n.return;
          }
          if (l == null) throw Error(o(160));
          switch (l.tag) {
            case 27:
              var a = l.stateNode, i = Oo(t);
              fc(t, i, a);
              break;
            case 5:
              var s = l.stateNode;
              l.flags & 32 && (On(s, ""), l.flags &= -33);
              var d = Oo(t);
              fc(t, d, s);
              break;
            case 3:
            case 4:
              var g = l.stateNode.containerInfo, M = Oo(t);
              Do(t, M, g);
              break;
            default:
              throw Error(o(161));
          }
        } catch (N) {
          zt(t, t.return, N);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function pd(t) {
      if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
        var e = t;
        pd(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
    }
    function hl(t, e) {
      if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) _d(t, e.alternate, e), e = e.sibling;
    }
    function _n(t) {
      for (t = t.child; t !== null; ) {
        var e = t;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Hl(4, e, e.return), _n(e);
            break;
          case 1:
            tl(e, e.return);
            var l = e.stateNode;
            typeof l.componentWillUnmount == "function" && od(e, e.return, l), _n(e);
            break;
          case 27:
            Pa(e.stateNode);
          case 26:
          case 5:
            tl(e, e.return), _n(e);
            break;
          case 22:
            e.memoizedState === null && _n(e);
            break;
          case 30:
            _n(e);
            break;
          default:
            _n(e);
        }
        t = t.sibling;
      }
    }
    function bl(t, e, l) {
      for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
        var n = e.alternate, a = t, i = e, s = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            bl(a, i, l), Qa(4, i);
            break;
          case 1:
            if (bl(a, i, l), n = i, a = n.stateNode, typeof a.componentDidMount == "function") try {
              a.componentDidMount();
            } catch (M) {
              zt(n, n.return, M);
            }
            if (n = i, a = n.updateQueue, a !== null) {
              var d = n.stateNode;
              try {
                var g = a.shared.hiddenCallbacks;
                if (g !== null) for (a.shared.hiddenCallbacks = null, a = 0; a < g.length; a++) $r(g[a], d);
              } catch (M) {
                zt(n, n.return, M);
              }
            }
            l && s & 64 && ud(i), Za(i, i.return);
            break;
          case 27:
            fd(i);
          case 26:
          case 5:
            bl(a, i, l), l && n === null && s & 4 && sd(i), Za(i, i.return);
            break;
          case 12:
            bl(a, i, l);
            break;
          case 31:
            bl(a, i, l), l && s & 4 && bd(a, i);
            break;
          case 13:
            bl(a, i, l), l && s & 4 && yd(a, i);
            break;
          case 22:
            i.memoizedState === null && bl(a, i, l), Za(i, i.return);
            break;
          case 30:
            break;
          default:
            bl(a, i, l);
        }
        e = e.sibling;
      }
    }
    function No(t, e) {
      var l = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Da(l));
    }
    function Ro(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Da(t));
    }
    function Ke(t, e, l, n) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) vd(t, e, l, n), e = e.sibling;
    }
    function vd(t, e, l, n) {
      var a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Ke(t, e, l, n), a & 2048 && Qa(9, e);
          break;
        case 1:
          Ke(t, e, l, n);
          break;
        case 3:
          Ke(t, e, l, n), a & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Da(t)));
          break;
        case 12:
          if (a & 2048) {
            Ke(t, e, l, n), t = e.stateNode;
            try {
              var i = e.memoizedProps, s = i.id, d = i.onPostCommit;
              typeof d == "function" && d(s, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
            } catch (g) {
              zt(e, e.return, g);
            }
          } else Ke(t, e, l, n);
          break;
        case 31:
          Ke(t, e, l, n);
          break;
        case 13:
          Ke(t, e, l, n);
          break;
        case 23:
          break;
        case 22:
          i = e.stateNode, s = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? Ke(t, e, l, n) : Va(t, e) : i._visibility & 2 ? Ke(t, e, l, n) : (i._visibility |= 2, $n(t, e, l, n, (e.subtreeFlags & 10256) !== 0 || false)), a & 2048 && No(s, e);
          break;
        case 24:
          Ke(t, e, l, n), a & 2048 && Ro(e.alternate, e);
          break;
        default:
          Ke(t, e, l, n);
      }
    }
    function $n(t, e, l, n, a) {
      for (a = a && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
        var i = t, s = e, d = l, g = n, M = s.flags;
        switch (s.tag) {
          case 0:
          case 11:
          case 15:
            $n(i, s, d, g, a), Qa(8, s);
            break;
          case 23:
            break;
          case 22:
            var N = s.stateNode;
            s.memoizedState !== null ? N._visibility & 2 ? $n(i, s, d, g, a) : Va(i, s) : (N._visibility |= 2, $n(i, s, d, g, a)), a && M & 2048 && No(s.alternate, s);
            break;
          case 24:
            $n(i, s, d, g, a), a && M & 2048 && Ro(s.alternate, s);
            break;
          default:
            $n(i, s, d, g, a);
        }
        e = e.sibling;
      }
    }
    function Va(t, e) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
        var l = t, n = e, a = n.flags;
        switch (n.tag) {
          case 22:
            Va(l, n), a & 2048 && No(n.alternate, n);
            break;
          case 24:
            Va(l, n), a & 2048 && Ro(n.alternate, n);
            break;
          default:
            Va(l, n);
        }
        e = e.sibling;
      }
    }
    var ka = 8192;
    function Wn(t, e, l) {
      if (t.subtreeFlags & ka) for (t = t.child; t !== null; ) wd(t, e, l), t = t.sibling;
    }
    function wd(t, e, l) {
      switch (t.tag) {
        case 26:
          Wn(t, e, l), t.flags & ka && t.memoizedState !== null && P0(l, ke, t.memoizedState, t.memoizedProps);
          break;
        case 5:
          Wn(t, e, l);
          break;
        case 3:
        case 4:
          var n = ke;
          ke = Ec(t.stateNode.containerInfo), Wn(t, e, l), ke = n;
          break;
        case 22:
          t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = ka, ka = 16777216, Wn(t, e, l), ka = n) : Wn(t, e, l));
          break;
        default:
          Wn(t, e, l);
      }
    }
    function Sd(t) {
      var e = t.alternate;
      if (e !== null && (t = e.child, t !== null)) {
        e.child = null;
        do
          e = t.sibling, t.sibling = null, t = e;
        while (t !== null);
      }
    }
    function Ka(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null) for (var l = 0; l < e.length; l++) {
          var n = e[l];
          ne = n, Td(n, t);
        }
        Sd(t);
      }
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) xd(t), t = t.sibling;
    }
    function xd(t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ka(t), t.flags & 2048 && Hl(9, t, t.return);
          break;
        case 3:
          Ka(t);
          break;
        case 12:
          Ka(t);
          break;
        case 22:
          var e = t.stateNode;
          t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, _c(t)) : Ka(t);
          break;
        default:
          Ka(t);
      }
    }
    function _c(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null) for (var l = 0; l < e.length; l++) {
          var n = e[l];
          ne = n, Td(n, t);
        }
        Sd(t);
      }
      for (t = t.child; t !== null; ) {
        switch (e = t, e.tag) {
          case 0:
          case 11:
          case 15:
            Hl(8, e, e.return), _c(e);
            break;
          case 22:
            l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, _c(e));
            break;
          default:
            _c(e);
        }
        t = t.sibling;
      }
    }
    function Td(t, e) {
      for (; ne !== null; ) {
        var l = ne;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            Hl(8, l, e);
            break;
          case 23:
          case 22:
            if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
              var n = l.memoizedState.cachePool.pool;
              n != null && n.refCount++;
            }
            break;
          case 24:
            Da(l.memoizedState.cache);
        }
        if (n = l.child, n !== null) n.return = l, ne = n;
        else t: for (l = t; ne !== null; ) {
          n = ne;
          var a = n.sibling, i = n.return;
          if (md(n), n === l) {
            ne = null;
            break t;
          }
          if (a !== null) {
            a.return = i, ne = a;
            break t;
          }
          ne = i;
        }
      }
    }
    var m0 = {
      getCacheForType: function(t) {
        var e = se(Ft), l = e.data.get(t);
        return l === void 0 && (l = t(), e.data.set(t, l)), l;
      },
      cacheSignal: function() {
        return se(Ft).controller.signal;
      }
    }, h0 = typeof WeakMap == "function" ? WeakMap : Map, Tt = 0, Bt = null, ft = null, mt = 0, Et = 0, Me = null, Ll = false, Fn = false, Bo = false, yl = 0, kt = 0, jl = 0, mn = 0, Uo = 0, Oe = 0, In = 0, Ja = null, ve = null, Ho = false, mc = 0, Ad = 0, hc = 1 / 0, bc = null, ql = null, ee = 0, Gl = null, Pn = null, gl = 0, Lo = 0, jo = null, Ed = null, $a = 0, qo = null;
    function De() {
      return (Tt & 2) !== 0 && mt !== 0 ? mt & -mt : C.T !== null ? Vo() : Xs();
    }
    function zd() {
      if (Oe === 0) if ((mt & 536870912) === 0 || yt) {
        var t = Ti;
        Ti <<= 1, (Ti & 3932160) === 0 && (Ti = 262144), Oe = t;
      } else Oe = 536870912;
      return t = Ee.current, t !== null && (t.flags |= 32), Oe;
    }
    function we(t, e, l) {
      (t === Bt && (Et === 2 || Et === 9) || t.cancelPendingCommit !== null) && (ta(t, 0), Xl(t, mt, Oe, false)), ba(t, l), ((Tt & 2) === 0 || t !== Bt) && (t === Bt && ((Tt & 2) === 0 && (mn |= l), kt === 4 && Xl(t, mt, Oe, false)), el(t));
    }
    function Md(t, e, l) {
      if ((Tt & 6) !== 0) throw Error(o(327));
      var n = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || ha(t, e), a = n ? g0(t, e) : Xo(t, e, true), i = n;
      do {
        if (a === 0) {
          Fn && !n && Xl(t, e, 0, false);
          break;
        } else {
          if (l = t.current.alternate, i && !b0(l)) {
            a = Xo(t, e, false), i = false;
            continue;
          }
          if (a === 2) {
            if (i = e, t.errorRecoveryDisabledLanes & i) var s = 0;
            else s = t.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
            if (s !== 0) {
              e = s;
              t: {
                var d = t;
                a = Ja;
                var g = d.current.memoizedState.isDehydrated;
                if (g && (ta(d, s).flags |= 256), s = Xo(d, s, false), s !== 2) {
                  if (Bo && !g) {
                    d.errorRecoveryDisabledLanes |= i, mn |= i, a = 4;
                    break t;
                  }
                  i = ve, ve = a, i !== null && (ve === null ? ve = i : ve.push.apply(ve, i));
                }
                a = s;
              }
              if (i = false, a !== 2) continue;
            }
          }
          if (a === 1) {
            ta(t, 0), Xl(t, e, 0, true);
            break;
          }
          t: {
            switch (n = t, i = a, i) {
              case 0:
              case 1:
                throw Error(o(345));
              case 4:
                if ((e & 4194048) !== e) break;
              case 6:
                Xl(n, e, Oe, !Ll);
                break t;
              case 2:
                ve = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(o(329));
            }
            if ((e & 62914560) === e && (a = mc + 300 - Rt(), 10 < a)) {
              if (Xl(n, e, Oe, !Ll), Ei(n, 0, true) !== 0) break t;
              gl = e, n.timeoutHandle = i_(Od.bind(null, n, l, ve, bc, Ho, e, Oe, mn, In, Ll, i, "Throttled", -0, 0), a);
              break t;
            }
            Od(n, l, ve, bc, Ho, e, Oe, mn, In, Ll, i, null, -0, 0);
          }
        }
        break;
      } while (true);
      el(t);
    }
    function Od(t, e, l, n, a, i, s, d, g, M, N, H, O, D) {
      if (t.timeoutHandle = -1, H = e.subtreeFlags, H & 8192 || (H & 16785408) === 16785408) {
        H = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: nl
        }, wd(e, i, H);
        var V = (i & 62914560) === i ? mc - Rt() : (i & 4194048) === i ? Ad - Rt() : 0;
        if (V = tb(H, V), V !== null) {
          gl = i, t.cancelPendingCommit = V(Ld.bind(null, t, e, i, l, n, a, s, d, g, N, H, null, O, D)), Xl(t, i, s, !M);
          return;
        }
      }
      Ld(t, e, i, l, n, a, s, d, g);
    }
    function b0(t) {
      for (var e = t; ; ) {
        var l = e.tag;
        if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null))) for (var n = 0; n < l.length; n++) {
          var a = l[n], i = a.getSnapshot;
          a = a.value;
          try {
            if (!Te(i(), a)) return false;
          } catch {
            return false;
          }
        }
        if (l = e.child, e.subtreeFlags & 16384 && l !== null) l.return = e, e = l;
        else {
          if (e === t) break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return true;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      }
      return true;
    }
    function Xl(t, e, l, n) {
      e &= ~Uo, e &= ~mn, t.suspendedLanes |= e, t.pingedLanes &= ~e, n && (t.warmLanes |= e), n = t.expirationTimes;
      for (var a = e; 0 < a; ) {
        var i = 31 - xe(a), s = 1 << i;
        n[i] = -1, a &= ~s;
      }
      l !== 0 && js(t, l, e);
    }
    function yc() {
      return (Tt & 6) === 0 ? (Wa(0), false) : true;
    }
    function Go() {
      if (ft !== null) {
        if (Et === 0) var t = ft.return;
        else t = ft, ul = an = null, eo(t), Zn = null, Na = 0, t = ft;
        for (; t !== null; ) cd(t.alternate, t), t = t.return;
        ft = null;
      }
    }
    function ta(t, e) {
      var l = t.timeoutHandle;
      l !== -1 && (t.timeoutHandle = -1, H0(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), gl = 0, Go(), Bt = t, ft = l = il(t.current, null), mt = e, Et = 0, Me = null, Ll = false, Fn = ha(t, e), Bo = false, In = Oe = Uo = mn = jl = kt = 0, ve = Ja = null, Ho = false, (e & 8) !== 0 && (e |= e & 32);
      var n = t.entangledLanes;
      if (n !== 0) for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - xe(n), i = 1 << a;
        e |= t[a], n &= ~i;
      }
      return yl = e, ji(), l;
    }
    function Dd(t, e) {
      ct = null, C.H = Ga, e === Qn || e === ki ? (e = Vr(), Et = 3) : e === Qu ? (e = Vr(), Et = 4) : Et = e === go ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Me = e, ft === null && (kt = 1, cc(t, Ue(e, t.current)));
    }
    function Cd() {
      var t = Ee.current;
      return t === null ? true : (mt & 4194048) === mt ? qe === null : (mt & 62914560) === mt || (mt & 536870912) !== 0 ? t === qe : false;
    }
    function Nd() {
      var t = C.H;
      return C.H = Ga, t === null ? Ga : t;
    }
    function Rd() {
      var t = C.A;
      return C.A = m0, t;
    }
    function gc() {
      kt = 4, Ll || (mt & 4194048) !== mt && Ee.current !== null || (Fn = true), (jl & 134217727) === 0 && (mn & 134217727) === 0 || Bt === null || Xl(Bt, mt, Oe, false);
    }
    function Xo(t, e, l) {
      var n = Tt;
      Tt |= 2;
      var a = Nd(), i = Rd();
      (Bt !== t || mt !== e) && (bc = null, ta(t, e)), e = false;
      var s = kt;
      t: do
        try {
          if (Et !== 0 && ft !== null) {
            var d = ft, g = Me;
            switch (Et) {
              case 8:
                Go(), s = 6;
                break t;
              case 3:
              case 2:
              case 9:
              case 6:
                Ee.current === null && (e = true);
                var M = Et;
                if (Et = 0, Me = null, ea(t, d, g, M), l && Fn) {
                  s = 0;
                  break t;
                }
                break;
              default:
                M = Et, Et = 0, Me = null, ea(t, d, g, M);
            }
          }
          y0(), s = kt;
          break;
        } catch (N) {
          Dd(t, N);
        }
      while (true);
      return e && t.shellSuspendCounter++, ul = an = null, Tt = n, C.H = a, C.A = i, ft === null && (Bt = null, mt = 0, ji()), s;
    }
    function y0() {
      for (; ft !== null; ) Bd(ft);
    }
    function g0(t, e) {
      var l = Tt;
      Tt |= 2;
      var n = Nd(), a = Rd();
      Bt !== t || mt !== e ? (bc = null, hc = Rt() + 500, ta(t, e)) : Fn = ha(t, e);
      t: do
        try {
          if (Et !== 0 && ft !== null) {
            e = ft;
            var i = Me;
            e: switch (Et) {
              case 1:
                Et = 0, Me = null, ea(t, e, i, 1);
                break;
              case 2:
              case 9:
                if (Qr(i)) {
                  Et = 0, Me = null, Ud(e);
                  break;
                }
                e = function() {
                  Et !== 2 && Et !== 9 || Bt !== t || (Et = 7), el(t);
                }, i.then(e, e);
                break t;
              case 3:
                Et = 7;
                break t;
              case 4:
                Et = 5;
                break t;
              case 7:
                Qr(i) ? (Et = 0, Me = null, Ud(e)) : (Et = 0, Me = null, ea(t, e, i, 7));
                break;
              case 5:
                var s = null;
                switch (ft.tag) {
                  case 26:
                    s = ft.memoizedState;
                  case 5:
                  case 27:
                    var d = ft;
                    if (s ? v_(s) : d.stateNode.complete) {
                      Et = 0, Me = null;
                      var g = d.sibling;
                      if (g !== null) ft = g;
                      else {
                        var M = d.return;
                        M !== null ? (ft = M, pc(M)) : ft = null;
                      }
                      break e;
                    }
                }
                Et = 0, Me = null, ea(t, e, i, 5);
                break;
              case 6:
                Et = 0, Me = null, ea(t, e, i, 6);
                break;
              case 8:
                Go(), kt = 6;
                break t;
              default:
                throw Error(o(462));
            }
          }
          p0();
          break;
        } catch (N) {
          Dd(t, N);
        }
      while (true);
      return ul = an = null, C.H = n, C.A = a, Tt = l, ft !== null ? 0 : (Bt = null, mt = 0, ji(), kt);
    }
    function p0() {
      for (; ft !== null && !wn(); ) Bd(ft);
    }
    function Bd(t) {
      var e = ad(t.alternate, t, yl);
      t.memoizedProps = t.pendingProps, e === null ? pc(t) : ft = e;
    }
    function Ud(t) {
      var e = t, l = e.alternate;
      switch (e.tag) {
        case 15:
        case 0:
          e = If(l, e, e.pendingProps, e.type, void 0, mt);
          break;
        case 11:
          e = If(l, e, e.pendingProps, e.type.render, e.ref, mt);
          break;
        case 5:
          eo(e);
        default:
          cd(l, e), e = ft = Nr(e, yl), e = ad(l, e, yl);
      }
      t.memoizedProps = t.pendingProps, e === null ? pc(t) : ft = e;
    }
    function ea(t, e, l, n) {
      ul = an = null, eo(e), Zn = null, Na = 0;
      var a = e.return;
      try {
        if (u0(t, a, e, l, mt)) {
          kt = 1, cc(t, Ue(l, t.current)), ft = null;
          return;
        }
      } catch (i) {
        if (a !== null) throw ft = a, i;
        kt = 1, cc(t, Ue(l, t.current)), ft = null;
        return;
      }
      e.flags & 32768 ? (yt || n === 1 ? t = true : Fn || (mt & 536870912) !== 0 ? t = false : (Ll = t = true, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Ee.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Hd(e, t)) : pc(e);
    }
    function pc(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          Hd(e, Ll);
          return;
        }
        t = e.return;
        var l = r0(e.alternate, e, yl);
        if (l !== null) {
          ft = l;
          return;
        }
        if (e = e.sibling, e !== null) {
          ft = e;
          return;
        }
        ft = e = t;
      } while (e !== null);
      kt === 0 && (kt = 5);
    }
    function Hd(t, e) {
      do {
        var l = f0(t.alternate, t);
        if (l !== null) {
          l.flags &= 32767, ft = l;
          return;
        }
        if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
          ft = t;
          return;
        }
        ft = t = l;
      } while (t !== null);
      kt = 6, ft = null;
    }
    function Ld(t, e, l, n, a, i, s, d, g) {
      t.cancelPendingCommit = null;
      do
        vc();
      while (ee !== 0);
      if ((Tt & 6) !== 0) throw Error(o(327));
      if (e !== null) {
        if (e === t.current) throw Error(o(177));
        if (i = e.lanes | e.childLanes, i |= Mu, Im(t, l, i, s, d, g), t === Bt && (ft = Bt = null, mt = 0), Pn = e, Gl = t, gl = l, Lo = i, jo = a, Ed = n, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, x0(Ze, function() {
          return Yd(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), n = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || n) {
          n = C.T, C.T = null, a = q.p, q.p = 2, s = Tt, Tt |= 4;
          try {
            d0(t, e, l);
          } finally {
            Tt = s, q.p = a, C.T = n;
          }
        }
        ee = 1, jd(), qd(), Gd();
      }
    }
    function jd() {
      if (ee === 1) {
        ee = 0;
        var t = Gl, e = Pn, l = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || l) {
          l = C.T, C.T = null;
          var n = q.p;
          q.p = 2;
          var a = Tt;
          Tt |= 4;
          try {
            gd(e, t);
            var i = Po, s = xr(t.containerInfo), d = i.focusedElem, g = i.selectionRange;
            if (s !== d && d && d.ownerDocument && Sr(d.ownerDocument.documentElement, d)) {
              if (g !== null && xu(d)) {
                var M = g.start, N = g.end;
                if (N === void 0 && (N = M), "selectionStart" in d) d.selectionStart = M, d.selectionEnd = Math.min(N, d.value.length);
                else {
                  var H = d.ownerDocument || document, O = H && H.defaultView || window;
                  if (O.getSelection) {
                    var D = O.getSelection(), V = d.textContent.length, tt = Math.min(g.start, V), Ct = g.end === void 0 ? tt : Math.min(g.end, V);
                    !D.extend && tt > Ct && (s = Ct, Ct = tt, tt = s);
                    var x = wr(d, tt), v = wr(d, Ct);
                    if (x && v && (D.rangeCount !== 1 || D.anchorNode !== x.node || D.anchorOffset !== x.offset || D.focusNode !== v.node || D.focusOffset !== v.offset)) {
                      var z = H.createRange();
                      z.setStart(x.node, x.offset), D.removeAllRanges(), tt > Ct ? (D.addRange(z), D.extend(v.node, v.offset)) : (z.setEnd(v.node, v.offset), D.addRange(z));
                    }
                  }
                }
              }
              for (H = [], D = d; D = D.parentNode; ) D.nodeType === 1 && H.push({
                element: D,
                left: D.scrollLeft,
                top: D.scrollTop
              });
              for (typeof d.focus == "function" && d.focus(), d = 0; d < H.length; d++) {
                var U = H[d];
                U.element.scrollLeft = U.left, U.element.scrollTop = U.top;
              }
            }
            Nc = !!Io, Po = Io = null;
          } finally {
            Tt = a, q.p = n, C.T = l;
          }
        }
        t.current = e, ee = 2;
      }
    }
    function qd() {
      if (ee === 2) {
        ee = 0;
        var t = Gl, e = Pn, l = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || l) {
          l = C.T, C.T = null;
          var n = q.p;
          q.p = 2;
          var a = Tt;
          Tt |= 4;
          try {
            _d(t, e.alternate, e);
          } finally {
            Tt = a, q.p = n, C.T = l;
          }
        }
        ee = 3;
      }
    }
    function Gd() {
      if (ee === 4 || ee === 3) {
        ee = 0, Sn();
        var t = Gl, e = Pn, l = gl, n = Ed;
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? ee = 5 : (ee = 0, Pn = Gl = null, Xd(t, t.pendingLanes));
        var a = t.pendingLanes;
        if (a === 0 && (ql = null), au(l), e = e.stateNode, Se && typeof Se.onCommitFiberRoot == "function") try {
          Se.onCommitFiberRoot(ma, e, void 0, (e.current.flags & 128) === 128);
        } catch {
        }
        if (n !== null) {
          e = C.T, a = q.p, q.p = 2, C.T = null;
          try {
            for (var i = t.onRecoverableError, s = 0; s < n.length; s++) {
              var d = n[s];
              i(d.value, {
                componentStack: d.stack
              });
            }
          } finally {
            C.T = e, q.p = a;
          }
        }
        (gl & 3) !== 0 && vc(), el(t), a = t.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? t === qo ? $a++ : ($a = 0, qo = t) : $a = 0, Wa(0);
      }
    }
    function Xd(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Da(e)));
    }
    function vc() {
      return jd(), qd(), Gd(), Yd();
    }
    function Yd() {
      if (ee !== 5) return false;
      var t = Gl, e = Lo;
      Lo = 0;
      var l = au(gl), n = C.T, a = q.p;
      try {
        q.p = 32 > l ? 32 : l, C.T = null, l = jo, jo = null;
        var i = Gl, s = gl;
        if (ee = 0, Pn = Gl = null, gl = 0, (Tt & 6) !== 0) throw Error(o(331));
        var d = Tt;
        if (Tt |= 4, xd(i.current), vd(i, i.current, s, l), Tt = d, Wa(0, false), Se && typeof Se.onPostCommitFiberRoot == "function") try {
          Se.onPostCommitFiberRoot(ma, i);
        } catch {
        }
        return true;
      } finally {
        q.p = a, C.T = n, Xd(t, e);
      }
    }
    function Qd(t, e, l) {
      e = Ue(l, e), e = yo(t.stateNode, e, 2), t = Rl(t, e, 2), t !== null && (ba(t, 2), el(t));
    }
    function zt(t, e, l) {
      if (t.tag === 3) Qd(t, t, l);
      else for (; e !== null; ) {
        if (e.tag === 3) {
          Qd(e, t, l);
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (ql === null || !ql.has(n))) {
            t = Ue(l, t), l = Zf(2), n = Rl(e, l, 2), n !== null && (Vf(l, n, e, t), ba(n, 2), el(n));
            break;
          }
        }
        e = e.return;
      }
    }
    function Yo(t, e, l) {
      var n = t.pingCache;
      if (n === null) {
        n = t.pingCache = new h0();
        var a = /* @__PURE__ */ new Set();
        n.set(e, a);
      } else a = n.get(e), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(e, a));
      a.has(l) || (Bo = true, a.add(l), t = v0.bind(null, t, e, l), e.then(t, t));
    }
    function v0(t, e, l) {
      var n = t.pingCache;
      n !== null && n.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Bt === t && (mt & l) === l && (kt === 4 || kt === 3 && (mt & 62914560) === mt && 300 > Rt() - mc ? (Tt & 2) === 0 && ta(t, 0) : Uo |= l, In === mt && (In = 0)), el(t);
    }
    function Zd(t, e) {
      e === 0 && (e = Ls()), t = en(t, e), t !== null && (ba(t, e), el(t));
    }
    function w0(t) {
      var e = t.memoizedState, l = 0;
      e !== null && (l = e.retryLane), Zd(t, l);
    }
    function S0(t, e) {
      var l = 0;
      switch (t.tag) {
        case 31:
        case 13:
          var n = t.stateNode, a = t.memoizedState;
          a !== null && (l = a.retryLane);
          break;
        case 19:
          n = t.stateNode;
          break;
        case 22:
          n = t.stateNode._retryCache;
          break;
        default:
          throw Error(o(314));
      }
      n !== null && n.delete(e), Zd(t, l);
    }
    function x0(t, e) {
      return Ce(t, e);
    }
    var wc = null, la = null, Qo = false, Sc = false, Zo = false, Yl = 0;
    function el(t) {
      t !== la && t.next === null && (la === null ? wc = la = t : la = la.next = t), Sc = true, Qo || (Qo = true, A0());
    }
    function Wa(t, e) {
      if (!Zo && Sc) {
        Zo = true;
        do
          for (var l = false, n = wc; n !== null; ) {
            if (t !== 0) {
              var a = n.pendingLanes;
              if (a === 0) var i = 0;
              else {
                var s = n.suspendedLanes, d = n.pingedLanes;
                i = (1 << 31 - xe(42 | t) + 1) - 1, i &= a & ~(s & ~d), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
              }
              i !== 0 && (l = true, Jd(n, i));
            } else i = mt, i = Ei(n, n === Bt ? i : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (i & 3) === 0 || ha(n, i) || (l = true, Jd(n, i));
            n = n.next;
          }
        while (l);
        Zo = false;
      }
    }
    function T0() {
      Vd();
    }
    function Vd() {
      Sc = Qo = false;
      var t = 0;
      Yl !== 0 && U0() && (t = Yl);
      for (var e = Rt(), l = null, n = wc; n !== null; ) {
        var a = n.next, i = kd(n, e);
        i === 0 ? (n.next = null, l === null ? wc = a : l.next = a, a === null && (la = l)) : (l = n, (t !== 0 || (i & 3) !== 0) && (Sc = true)), n = a;
      }
      ee !== 0 && ee !== 5 || Wa(t), Yl !== 0 && (Yl = 0);
    }
    function kd(t, e) {
      for (var l = t.suspendedLanes, n = t.pingedLanes, a = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
        var s = 31 - xe(i), d = 1 << s, g = a[s];
        g === -1 ? ((d & l) === 0 || (d & n) !== 0) && (a[s] = Fm(d, e)) : g <= e && (t.expiredLanes |= d), i &= ~d;
      }
      if (e = Bt, l = mt, l = Ei(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), n = t.callbackNode, l === 0 || t === e && (Et === 2 || Et === 9) || t.cancelPendingCommit !== null) return n !== null && n !== null && xl(n), t.callbackNode = null, t.callbackPriority = 0;
      if ((l & 3) === 0 || ha(t, l)) {
        if (e = l & -l, e === t.callbackPriority) return e;
        switch (n !== null && xl(n), au(l)) {
          case 2:
          case 8:
            l = Fe;
            break;
          case 32:
            l = Ze;
            break;
          case 268435456:
            l = Hs;
            break;
          default:
            l = Ze;
        }
        return n = Kd.bind(null, t), l = Ce(l, n), t.callbackPriority = e, t.callbackNode = l, e;
      }
      return n !== null && n !== null && xl(n), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function Kd(t, e) {
      if (ee !== 0 && ee !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
      var l = t.callbackNode;
      if (vc() && t.callbackNode !== l) return null;
      var n = mt;
      return n = Ei(t, t === Bt ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), n === 0 ? null : (Md(t, n, e), kd(t, Rt()), t.callbackNode != null && t.callbackNode === l ? Kd.bind(null, t) : null);
    }
    function Jd(t, e) {
      if (vc()) return null;
      Md(t, e, true);
    }
    function A0() {
      L0(function() {
        (Tt & 6) !== 0 ? Ce(ce, T0) : Vd();
      });
    }
    function Vo() {
      if (Yl === 0) {
        var t = Xn;
        t === 0 && (t = xi, xi <<= 1, (xi & 261888) === 0 && (xi = 256)), Yl = t;
      }
      return Yl;
    }
    function $d(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Di("" + t);
    }
    function Wd(t, e) {
      var l = e.ownerDocument.createElement("input");
      return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
    }
    function E0(t, e, l, n, a) {
      if (e === "submit" && l && l.stateNode === a) {
        var i = $d((a[he] || null).action), s = n.submitter;
        s && (e = (e = s[he] || null) ? $d(e.formAction) : s.getAttribute("formAction"), e !== null && (i = e, s = null));
        var d = new Bi("action", "action", null, n, a);
        t.push({
          event: d,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (n.defaultPrevented) {
                  if (Yl !== 0) {
                    var g = s ? Wd(a, s) : new FormData(a);
                    ro(l, {
                      pending: true,
                      data: g,
                      method: a.method,
                      action: i
                    }, null, g);
                  }
                } else typeof i == "function" && (d.preventDefault(), g = s ? Wd(a, s) : new FormData(a), ro(l, {
                  pending: true,
                  data: g,
                  method: a.method,
                  action: i
                }, i, g));
              },
              currentTarget: a
            }
          ]
        });
      }
    }
    for (var ko = 0; ko < zu.length; ko++) {
      var Ko = zu[ko], z0 = Ko.toLowerCase(), M0 = Ko[0].toUpperCase() + Ko.slice(1);
      Ve(z0, "on" + M0);
    }
    Ve(Er, "onAnimationEnd"), Ve(zr, "onAnimationIteration"), Ve(Mr, "onAnimationStart"), Ve("dblclick", "onDoubleClick"), Ve("focusin", "onFocus"), Ve("focusout", "onBlur"), Ve(Zh, "onTransitionRun"), Ve(Vh, "onTransitionStart"), Ve(kh, "onTransitionCancel"), Ve(Or, "onTransitionEnd"), zn("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), zn("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), zn("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), zn("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), Fl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Fl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Fl("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Fl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Fl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Fl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Fa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), O0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fa));
    function Fd(t, e) {
      e = (e & 4) !== 0;
      for (var l = 0; l < t.length; l++) {
        var n = t[l], a = n.event;
        n = n.listeners;
        t: {
          var i = void 0;
          if (e) for (var s = n.length - 1; 0 <= s; s--) {
            var d = n[s], g = d.instance, M = d.currentTarget;
            if (d = d.listener, g !== i && a.isPropagationStopped()) break t;
            i = d, a.currentTarget = M;
            try {
              i(a);
            } catch (N) {
              Li(N);
            }
            a.currentTarget = null, i = g;
          }
          else for (s = 0; s < n.length; s++) {
            if (d = n[s], g = d.instance, M = d.currentTarget, d = d.listener, g !== i && a.isPropagationStopped()) break t;
            i = d, a.currentTarget = M;
            try {
              i(a);
            } catch (N) {
              Li(N);
            }
            a.currentTarget = null, i = g;
          }
        }
      }
    }
    function dt(t, e) {
      var l = e[iu];
      l === void 0 && (l = e[iu] = /* @__PURE__ */ new Set());
      var n = t + "__bubble";
      l.has(n) || (Id(e, t, 2, false), l.add(n));
    }
    function Jo(t, e, l) {
      var n = 0;
      e && (n |= 4), Id(l, t, n, e);
    }
    var xc = "_reactListening" + Math.random().toString(36).slice(2);
    function $o(t) {
      if (!t[xc]) {
        t[xc] = true, Zs.forEach(function(l) {
          l !== "selectionchange" && (O0.has(l) || Jo(l, false, t), Jo(l, true, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[xc] || (e[xc] = true, Jo("selectionchange", false, e));
      }
    }
    function Id(t, e, l, n) {
      switch (z_(e)) {
        case 2:
          var a = nb;
          break;
        case 8:
          a = ab;
          break;
        default:
          a = rs;
      }
      l = a.bind(null, e, l, t), a = void 0, !mu || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (a = true), n ? a !== void 0 ? t.addEventListener(e, l, {
        capture: true,
        passive: a
      }) : t.addEventListener(e, l, true) : a !== void 0 ? t.addEventListener(e, l, {
        passive: a
      }) : t.addEventListener(e, l, false);
    }
    function Wo(t, e, l, n, a) {
      var i = n;
      if ((e & 1) === 0 && (e & 2) === 0 && n !== null) t: for (; ; ) {
        if (n === null) return;
        var s = n.tag;
        if (s === 3 || s === 4) {
          var d = n.stateNode.containerInfo;
          if (d === a) break;
          if (s === 4) for (s = n.return; s !== null; ) {
            var g = s.tag;
            if ((g === 3 || g === 4) && s.stateNode.containerInfo === a) return;
            s = s.return;
          }
          for (; d !== null; ) {
            if (s = Tn(d), s === null) return;
            if (g = s.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              n = i = s;
              continue t;
            }
            d = d.parentNode;
          }
        }
        n = n.return;
      }
      lr(function() {
        var M = i, N = du(l), H = [];
        t: {
          var O = Dr.get(t);
          if (O !== void 0) {
            var D = Bi, V = t;
            switch (t) {
              case "keypress":
                if (Ni(l) === 0) break t;
              case "keydown":
              case "keyup":
                D = Sh;
                break;
              case "focusin":
                V = "focus", D = gu;
                break;
              case "focusout":
                V = "blur", D = gu;
                break;
              case "beforeblur":
              case "afterblur":
                D = gu;
                break;
              case "click":
                if (l.button === 2) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                D = ir;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                D = rh;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                D = Ah;
                break;
              case Er:
              case zr:
              case Mr:
                D = _h;
                break;
              case Or:
                D = zh;
                break;
              case "scroll":
              case "scrollend":
                D = oh;
                break;
              case "wheel":
                D = Oh;
                break;
              case "copy":
              case "cut":
              case "paste":
                D = hh;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                D = ur;
                break;
              case "toggle":
              case "beforetoggle":
                D = Ch;
            }
            var tt = (e & 4) !== 0, Ct = !tt && (t === "scroll" || t === "scrollend"), x = tt ? O !== null ? O + "Capture" : null : O;
            tt = [];
            for (var v = M, z; v !== null; ) {
              var U = v;
              if (z = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || z === null || x === null || (U = pa(v, x), U != null && tt.push(Ia(v, U, z))), Ct) break;
              v = v.return;
            }
            0 < tt.length && (O = new D(O, V, null, l, N), H.push({
              event: O,
              listeners: tt
            }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (O = t === "mouseover" || t === "pointerover", D = t === "mouseout" || t === "pointerout", O && l !== fu && (V = l.relatedTarget || l.fromElement) && (Tn(V) || V[xn])) break t;
            if ((D || O) && (O = N.window === N ? N : (O = N.ownerDocument) ? O.defaultView || O.parentWindow : window, D ? (V = l.relatedTarget || l.toElement, D = M, V = V ? Tn(V) : null, V !== null && (Ct = _(V), tt = V.tag, V !== Ct || tt !== 5 && tt !== 27 && tt !== 6) && (V = null)) : (D = null, V = M), D !== V)) {
              if (tt = ir, U = "onMouseLeave", x = "onMouseEnter", v = "mouse", (t === "pointerout" || t === "pointerover") && (tt = ur, U = "onPointerLeave", x = "onPointerEnter", v = "pointer"), Ct = D == null ? O : ga(D), z = V == null ? O : ga(V), O = new tt(U, v + "leave", D, l, N), O.target = Ct, O.relatedTarget = z, U = null, Tn(N) === M && (tt = new tt(x, v + "enter", V, l, N), tt.target = z, tt.relatedTarget = Ct, U = tt), Ct = U, D && V) e: {
                for (tt = D0, x = D, v = V, z = 0, U = x; U; U = tt(U)) z++;
                U = 0;
                for (var F = v; F; F = tt(F)) U++;
                for (; 0 < z - U; ) x = tt(x), z--;
                for (; 0 < U - z; ) v = tt(v), U--;
                for (; z--; ) {
                  if (x === v || v !== null && x === v.alternate) {
                    tt = x;
                    break e;
                  }
                  x = tt(x), v = tt(v);
                }
                tt = null;
              }
              else tt = null;
              D !== null && Pd(H, O, D, tt, false), V !== null && Ct !== null && Pd(H, Ct, V, tt, true);
            }
          }
          t: {
            if (O = M ? ga(M) : window, D = O.nodeName && O.nodeName.toLowerCase(), D === "select" || D === "input" && O.type === "file") var vt = hr;
            else if (_r(O)) if (br) vt = Xh;
            else {
              vt = qh;
              var k = jh;
            }
            else D = O.nodeName, !D || D.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? M && ru(M.elementType) && (vt = hr) : vt = Gh;
            if (vt && (vt = vt(t, M))) {
              mr(H, vt, l, N);
              break t;
            }
            k && k(t, O, M), t === "focusout" && M && O.type === "number" && M.memoizedProps.value != null && su(O, "number", O.value);
          }
          switch (k = M ? ga(M) : window, t) {
            case "focusin":
              (_r(k) || k.contentEditable === "true") && (Rn = k, Tu = M, za = null);
              break;
            case "focusout":
              za = Tu = Rn = null;
              break;
            case "mousedown":
              Au = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Au = false, Tr(H, l, N);
              break;
            case "selectionchange":
              if (Qh) break;
            case "keydown":
            case "keyup":
              Tr(H, l, N);
          }
          var ut;
          if (vu) t: {
            switch (t) {
              case "compositionstart":
                var ht = "onCompositionStart";
                break t;
              case "compositionend":
                ht = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ht = "onCompositionUpdate";
                break t;
            }
            ht = void 0;
          }
          else Nn ? fr(t, l) && (ht = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (ht = "onCompositionStart");
          ht && (or && l.locale !== "ko" && (Nn || ht !== "onCompositionStart" ? ht === "onCompositionEnd" && Nn && (ut = nr()) : (El = N, hu = "value" in El ? El.value : El.textContent, Nn = true)), k = Tc(M, ht), 0 < k.length && (ht = new cr(ht, t, null, l, N), H.push({
            event: ht,
            listeners: k
          }), ut ? ht.data = ut : (ut = dr(l), ut !== null && (ht.data = ut)))), (ut = Rh ? Bh(t, l) : Uh(t, l)) && (ht = Tc(M, "onBeforeInput"), 0 < ht.length && (k = new cr("onBeforeInput", "beforeinput", null, l, N), H.push({
            event: k,
            listeners: ht
          }), k.data = ut)), E0(H, t, M, l, N);
        }
        Fd(H, e);
      });
    }
    function Ia(t, e, l) {
      return {
        instance: t,
        listener: e,
        currentTarget: l
      };
    }
    function Tc(t, e) {
      for (var l = e + "Capture", n = []; t !== null; ) {
        var a = t, i = a.stateNode;
        if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = pa(t, l), a != null && n.unshift(Ia(t, a, i)), a = pa(t, e), a != null && n.push(Ia(t, a, i))), t.tag === 3) return n;
        t = t.return;
      }
      return [];
    }
    function D0(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function Pd(t, e, l, n, a) {
      for (var i = e._reactName, s = []; l !== null && l !== n; ) {
        var d = l, g = d.alternate, M = d.stateNode;
        if (d = d.tag, g !== null && g === n) break;
        d !== 5 && d !== 26 && d !== 27 || M === null || (g = M, a ? (M = pa(l, i), M != null && s.unshift(Ia(l, M, g))) : a || (M = pa(l, i), M != null && s.push(Ia(l, M, g)))), l = l.return;
      }
      s.length !== 0 && t.push({
        event: e,
        listeners: s
      });
    }
    var C0 = /\r\n?/g, N0 = /\u0000|\uFFFD/g;
    function t_(t) {
      return (typeof t == "string" ? t : "" + t).replace(C0, `
`).replace(N0, "");
    }
    function e_(t, e) {
      return e = t_(e), t_(t) === e;
    }
    function Dt(t, e, l, n, a, i) {
      switch (l) {
        case "children":
          typeof n == "string" ? e === "body" || e === "textarea" && n === "" || On(t, n) : (typeof n == "number" || typeof n == "bigint") && e !== "body" && On(t, "" + n);
          break;
        case "className":
          Mi(t, "class", n);
          break;
        case "tabIndex":
          Mi(t, "tabindex", n);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Mi(t, l, n);
          break;
        case "style":
          tr(t, n, i);
          break;
        case "data":
          if (e !== "object") {
            Mi(t, "data", n);
            break;
          }
        case "src":
        case "href":
          if (n === "" && (e !== "a" || l !== "href")) {
            t.removeAttribute(l);
            break;
          }
          if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
            t.removeAttribute(l);
            break;
          }
          n = Di("" + n), t.setAttribute(l, n);
          break;
        case "action":
        case "formAction":
          if (typeof n == "function") {
            t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof i == "function" && (l === "formAction" ? (e !== "input" && Dt(t, e, "name", a.name, a, null), Dt(t, e, "formEncType", a.formEncType, a, null), Dt(t, e, "formMethod", a.formMethod, a, null), Dt(t, e, "formTarget", a.formTarget, a, null)) : (Dt(t, e, "encType", a.encType, a, null), Dt(t, e, "method", a.method, a, null), Dt(t, e, "target", a.target, a, null)));
          if (n == null || typeof n == "symbol" || typeof n == "boolean") {
            t.removeAttribute(l);
            break;
          }
          n = Di("" + n), t.setAttribute(l, n);
          break;
        case "onClick":
          n != null && (t.onclick = nl);
          break;
        case "onScroll":
          n != null && dt("scroll", t);
          break;
        case "onScrollEnd":
          n != null && dt("scrollend", t);
          break;
        case "dangerouslySetInnerHTML":
          if (n != null) {
            if (typeof n != "object" || !("__html" in n)) throw Error(o(61));
            if (l = n.__html, l != null) {
              if (a.children != null) throw Error(o(60));
              t.innerHTML = l;
            }
          }
          break;
        case "multiple":
          t.multiple = n && typeof n != "function" && typeof n != "symbol";
          break;
        case "muted":
          t.muted = n && typeof n != "function" && typeof n != "symbol";
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
            t.removeAttribute("xlink:href");
            break;
          }
          l = Di("" + n), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, "" + n) : t.removeAttribute(l);
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
          n && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
          break;
        case "capture":
        case "download":
          n === true ? t.setAttribute(l, "") : n !== false && n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, n) : t.removeAttribute(l);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? t.setAttribute(l, n) : t.removeAttribute(l);
          break;
        case "rowSpan":
        case "start":
          n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? t.removeAttribute(l) : t.setAttribute(l, n);
          break;
        case "popover":
          dt("beforetoggle", t), dt("toggle", t), zi(t, "popover", n);
          break;
        case "xlinkActuate":
          ll(t, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
          break;
        case "xlinkArcrole":
          ll(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
          break;
        case "xlinkRole":
          ll(t, "http://www.w3.org/1999/xlink", "xlink:role", n);
          break;
        case "xlinkShow":
          ll(t, "http://www.w3.org/1999/xlink", "xlink:show", n);
          break;
        case "xlinkTitle":
          ll(t, "http://www.w3.org/1999/xlink", "xlink:title", n);
          break;
        case "xlinkType":
          ll(t, "http://www.w3.org/1999/xlink", "xlink:type", n);
          break;
        case "xmlBase":
          ll(t, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
          break;
        case "xmlLang":
          ll(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
          break;
        case "xmlSpace":
          ll(t, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
          break;
        case "is":
          zi(t, "is", n);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = ch.get(l) || l, zi(t, l, n));
      }
    }
    function Fo(t, e, l, n, a, i) {
      switch (l) {
        case "style":
          tr(t, n, i);
          break;
        case "dangerouslySetInnerHTML":
          if (n != null) {
            if (typeof n != "object" || !("__html" in n)) throw Error(o(61));
            if (l = n.__html, l != null) {
              if (a.children != null) throw Error(o(60));
              t.innerHTML = l;
            }
          }
          break;
        case "children":
          typeof n == "string" ? On(t, n) : (typeof n == "number" || typeof n == "bigint") && On(t, "" + n);
          break;
        case "onScroll":
          n != null && dt("scroll", t);
          break;
        case "onScrollEnd":
          n != null && dt("scrollend", t);
          break;
        case "onClick":
          n != null && (t.onclick = nl);
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
          if (!Vs.hasOwnProperty(l)) t: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), e = l.slice(2, a ? l.length - 7 : void 0), i = t[he] || null, i = i != null ? i[l] : null, typeof i == "function" && t.removeEventListener(e, i, a), typeof n == "function")) {
              typeof i != "function" && i !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, n, a);
              break t;
            }
            l in t ? t[l] = n : n === true ? t.setAttribute(l, "") : zi(t, l, n);
          }
      }
    }
    function fe(t, e, l) {
      switch (e) {
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
          dt("error", t), dt("load", t);
          var n = false, a = false, i;
          for (i in l) if (l.hasOwnProperty(i)) {
            var s = l[i];
            if (s != null) switch (i) {
              case "src":
                n = true;
                break;
              case "srcSet":
                a = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                Dt(t, e, i, s, l, null);
            }
          }
          a && Dt(t, e, "srcSet", l.srcSet, l, null), n && Dt(t, e, "src", l.src, l, null);
          return;
        case "input":
          dt("invalid", t);
          var d = i = s = a = null, g = null, M = null;
          for (n in l) if (l.hasOwnProperty(n)) {
            var N = l[n];
            if (N != null) switch (n) {
              case "name":
                a = N;
                break;
              case "type":
                s = N;
                break;
              case "checked":
                g = N;
                break;
              case "defaultChecked":
                M = N;
                break;
              case "value":
                i = N;
                break;
              case "defaultValue":
                d = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(o(137, e));
                break;
              default:
                Dt(t, e, n, N, l, null);
            }
          }
          Ws(t, i, d, g, M, s, a, false);
          return;
        case "select":
          dt("invalid", t), n = s = i = null;
          for (a in l) if (l.hasOwnProperty(a) && (d = l[a], d != null)) switch (a) {
            case "value":
              i = d;
              break;
            case "defaultValue":
              s = d;
              break;
            case "multiple":
              n = d;
            default:
              Dt(t, e, a, d, l, null);
          }
          e = i, l = s, t.multiple = !!n, e != null ? Mn(t, !!n, e, false) : l != null && Mn(t, !!n, l, true);
          return;
        case "textarea":
          dt("invalid", t), i = a = n = null;
          for (s in l) if (l.hasOwnProperty(s) && (d = l[s], d != null)) switch (s) {
            case "value":
              n = d;
              break;
            case "defaultValue":
              a = d;
              break;
            case "children":
              i = d;
              break;
            case "dangerouslySetInnerHTML":
              if (d != null) throw Error(o(91));
              break;
            default:
              Dt(t, e, s, d, l, null);
          }
          Is(t, n, a, i);
          return;
        case "option":
          for (g in l) if (l.hasOwnProperty(g) && (n = l[g], n != null)) switch (g) {
            case "selected":
              t.selected = n && typeof n != "function" && typeof n != "symbol";
              break;
            default:
              Dt(t, e, g, n, l, null);
          }
          return;
        case "dialog":
          dt("beforetoggle", t), dt("toggle", t), dt("cancel", t), dt("close", t);
          break;
        case "iframe":
        case "object":
          dt("load", t);
          break;
        case "video":
        case "audio":
          for (n = 0; n < Fa.length; n++) dt(Fa[n], t);
          break;
        case "image":
          dt("error", t), dt("load", t);
          break;
        case "details":
          dt("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          dt("error", t), dt("load", t);
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
          for (M in l) if (l.hasOwnProperty(M) && (n = l[M], n != null)) switch (M) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(o(137, e));
            default:
              Dt(t, e, M, n, l, null);
          }
          return;
        default:
          if (ru(e)) {
            for (N in l) l.hasOwnProperty(N) && (n = l[N], n !== void 0 && Fo(t, e, N, n, l, void 0));
            return;
          }
      }
      for (d in l) l.hasOwnProperty(d) && (n = l[d], n != null && Dt(t, e, d, n, l, null));
    }
    function R0(t, e, l, n) {
      switch (e) {
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
          var a = null, i = null, s = null, d = null, g = null, M = null, N = null;
          for (D in l) {
            var H = l[D];
            if (l.hasOwnProperty(D) && H != null) switch (D) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = H;
              default:
                n.hasOwnProperty(D) || Dt(t, e, D, null, n, H);
            }
          }
          for (var O in n) {
            var D = n[O];
            if (H = l[O], n.hasOwnProperty(O) && (D != null || H != null)) switch (O) {
              case "type":
                i = D;
                break;
              case "name":
                a = D;
                break;
              case "checked":
                M = D;
                break;
              case "defaultChecked":
                N = D;
                break;
              case "value":
                s = D;
                break;
              case "defaultValue":
                d = D;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(o(137, e));
                break;
              default:
                D !== H && Dt(t, e, O, D, n, H);
            }
          }
          ou(t, s, d, g, M, N, i, a);
          return;
        case "select":
          D = s = d = O = null;
          for (i in l) if (g = l[i], l.hasOwnProperty(i) && g != null) switch (i) {
            case "value":
              break;
            case "multiple":
              D = g;
            default:
              n.hasOwnProperty(i) || Dt(t, e, i, null, n, g);
          }
          for (a in n) if (i = n[a], g = l[a], n.hasOwnProperty(a) && (i != null || g != null)) switch (a) {
            case "value":
              O = i;
              break;
            case "defaultValue":
              d = i;
              break;
            case "multiple":
              s = i;
            default:
              i !== g && Dt(t, e, a, i, n, g);
          }
          e = d, l = s, n = D, O != null ? Mn(t, !!l, O, false) : !!n != !!l && (e != null ? Mn(t, !!l, e, true) : Mn(t, !!l, l ? [] : "", false));
          return;
        case "textarea":
          D = O = null;
          for (d in l) if (a = l[d], l.hasOwnProperty(d) && a != null && !n.hasOwnProperty(d)) switch (d) {
            case "value":
              break;
            case "children":
              break;
            default:
              Dt(t, e, d, null, n, a);
          }
          for (s in n) if (a = n[s], i = l[s], n.hasOwnProperty(s) && (a != null || i != null)) switch (s) {
            case "value":
              O = a;
              break;
            case "defaultValue":
              D = a;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (a != null) throw Error(o(91));
              break;
            default:
              a !== i && Dt(t, e, s, a, n, i);
          }
          Fs(t, O, D);
          return;
        case "option":
          for (var V in l) if (O = l[V], l.hasOwnProperty(V) && O != null && !n.hasOwnProperty(V)) switch (V) {
            case "selected":
              t.selected = false;
              break;
            default:
              Dt(t, e, V, null, n, O);
          }
          for (g in n) if (O = n[g], D = l[g], n.hasOwnProperty(g) && O !== D && (O != null || D != null)) switch (g) {
            case "selected":
              t.selected = O && typeof O != "function" && typeof O != "symbol";
              break;
            default:
              Dt(t, e, g, O, n, D);
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
          for (var tt in l) O = l[tt], l.hasOwnProperty(tt) && O != null && !n.hasOwnProperty(tt) && Dt(t, e, tt, null, n, O);
          for (M in n) if (O = n[M], D = l[M], n.hasOwnProperty(M) && O !== D && (O != null || D != null)) switch (M) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (O != null) throw Error(o(137, e));
              break;
            default:
              Dt(t, e, M, O, n, D);
          }
          return;
        default:
          if (ru(e)) {
            for (var Ct in l) O = l[Ct], l.hasOwnProperty(Ct) && O !== void 0 && !n.hasOwnProperty(Ct) && Fo(t, e, Ct, void 0, n, O);
            for (N in n) O = n[N], D = l[N], !n.hasOwnProperty(N) || O === D || O === void 0 && D === void 0 || Fo(t, e, N, O, n, D);
            return;
          }
      }
      for (var x in l) O = l[x], l.hasOwnProperty(x) && O != null && !n.hasOwnProperty(x) && Dt(t, e, x, null, n, O);
      for (H in n) O = n[H], D = l[H], !n.hasOwnProperty(H) || O === D || O == null && D == null || Dt(t, e, H, O, n, D);
    }
    function l_(t) {
      switch (t) {
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
    function B0() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
          var a = l[n], i = a.transferSize, s = a.initiatorType, d = a.duration;
          if (i && d && l_(s)) {
            for (s = 0, d = a.responseEnd, n += 1; n < l.length; n++) {
              var g = l[n], M = g.startTime;
              if (M > d) break;
              var N = g.transferSize, H = g.initiatorType;
              N && l_(H) && (g = g.responseEnd, s += N * (g < d ? 1 : (d - M) / (g - M)));
            }
            if (--n, e += 8 * (i + s) / (a.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    var Io = null, Po = null;
    function Ac(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function n_(t) {
      switch (t) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function a_(t, e) {
      if (t === 0) switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return t === 1 && e === "foreignObject" ? 0 : t;
    }
    function ts(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    var es = null;
    function U0() {
      var t = window.event;
      return t && t.type === "popstate" ? t === es ? false : (es = t, true) : (es = null, false);
    }
    var i_ = typeof setTimeout == "function" ? setTimeout : void 0, H0 = typeof clearTimeout == "function" ? clearTimeout : void 0, c_ = typeof Promise == "function" ? Promise : void 0, L0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof c_ < "u" ? function(t) {
      return c_.resolve(null).then(t).catch(j0);
    } : i_;
    function j0(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function Ql(t) {
      return t === "head";
    }
    function u_(t, e) {
      var l = e, n = 0;
      do {
        var a = l.nextSibling;
        if (t.removeChild(l), a && a.nodeType === 8) if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            t.removeChild(a), ca(e);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") n++;
        else if (l === "html") Pa(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, Pa(l);
          for (var i = l.firstChild; i; ) {
            var s = i.nextSibling, d = i.nodeName;
            i[ya] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = s;
          }
        } else l === "body" && Pa(t.ownerDocument.body);
        l = a;
      } while (l);
      ca(e);
    }
    function o_(t, e) {
      var l = t;
      t = 0;
      do {
        var n = l.nextSibling;
        if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), n && n.nodeType === 8) if (l = n.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
        l = n;
      } while (l);
    }
    function ls(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var l = e;
        switch (e = e.nextSibling, l.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            ls(l), cu(l);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (l.rel.toLowerCase() === "stylesheet") continue;
        }
        t.removeChild(l);
      }
    }
    function q0(t, e, l, n) {
      for (; t.nodeType === 1; ) {
        var a = l;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
        } else if (n) {
          if (!t[ya]) switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (i = t.getAttribute("rel"), i === "stylesheet" && t.hasAttribute("data-precedence")) break;
              if (i !== a.rel || t.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || t.getAttribute("title") !== (a.title == null ? null : a.title)) break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (i = t.getAttribute("src"), (i !== (a.src == null ? null : a.src) || t.getAttribute("type") !== (a.type == null ? null : a.type) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && i && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
              return t;
            default:
              return t;
          }
        } else if (e === "input" && t.type === "hidden") {
          var i = a.name == null ? null : "" + a.name;
          if (a.type === "hidden" && t.getAttribute("name") === i) return t;
        } else return t;
        if (t = Ge(t.nextSibling), t === null) break;
      }
      return null;
    }
    function G0(t, e, l) {
      if (e === "") return null;
      for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ge(t.nextSibling), t === null)) return null;
      return t;
    }
    function s_(t, e) {
      for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ge(t.nextSibling), t === null)) return null;
      return t;
    }
    function ns(t) {
      return t.data === "$?" || t.data === "$~";
    }
    function as(t) {
      return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
    }
    function X0(t, e) {
      var l = t.ownerDocument;
      if (t.data === "$~") t._reactRetry = e;
      else if (t.data !== "$?" || l.readyState !== "loading") e();
      else {
        var n = function() {
          e(), l.removeEventListener("DOMContentLoaded", n);
        };
        l.addEventListener("DOMContentLoaded", n), t._reactRetry = n;
      }
    }
    function Ge(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
          if (e === "/$" || e === "/&") return null;
        }
      }
      return t;
    }
    var is = null;
    function r_(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var l = t.data;
          if (l === "/$" || l === "/&") {
            if (e === 0) return Ge(t.nextSibling);
            e--;
          } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function f_(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var l = t.data;
          if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
            if (e === 0) return t;
            e--;
          } else l !== "/$" && l !== "/&" || e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function d_(t, e, l) {
      switch (e = Ac(l), t) {
        case "html":
          if (t = e.documentElement, !t) throw Error(o(452));
          return t;
        case "head":
          if (t = e.head, !t) throw Error(o(453));
          return t;
        case "body":
          if (t = e.body, !t) throw Error(o(454));
          return t;
        default:
          throw Error(o(451));
      }
    }
    function Pa(t) {
      for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      cu(t);
    }
    var Xe = /* @__PURE__ */ new Map(), __ = /* @__PURE__ */ new Set();
    function Ec(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    var pl = q.d;
    q.d = {
      f: Y0,
      r: Q0,
      D: Z0,
      C: V0,
      L: k0,
      m: K0,
      X: $0,
      S: J0,
      M: W0
    };
    function Y0() {
      var t = pl.f(), e = yc();
      return t || e;
    }
    function Q0(t) {
      var e = An(t);
      e !== null && e.tag === 5 && e.type === "form" ? Df(e) : pl.r(t);
    }
    var na = typeof document > "u" ? null : document;
    function m_(t, e, l) {
      var n = na;
      if (n && typeof e == "string" && e) {
        var a = Re(e);
        a = 'link[rel="' + t + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), __.has(a) || (__.add(a), t = {
          rel: t,
          crossOrigin: l,
          href: e
        }, n.querySelector(a) === null && (e = n.createElement("link"), fe(e, "link", t), le(e), n.head.appendChild(e)));
      }
    }
    function Z0(t) {
      pl.D(t), m_("dns-prefetch", t, null);
    }
    function V0(t, e) {
      pl.C(t, e), m_("preconnect", t, e);
    }
    function k0(t, e, l) {
      pl.L(t, e, l);
      var n = na;
      if (n && t && e) {
        var a = 'link[rel="preload"][as="' + Re(e) + '"]';
        e === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Re(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Re(l.imageSizes) + '"]')) : a += '[href="' + Re(t) + '"]';
        var i = a;
        switch (e) {
          case "style":
            i = aa(t);
            break;
          case "script":
            i = ia(t);
        }
        Xe.has(i) || (t = b({
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        }, l), Xe.set(i, t), n.querySelector(a) !== null || e === "style" && n.querySelector(ti(i)) || e === "script" && n.querySelector(ei(i)) || (e = n.createElement("link"), fe(e, "link", t), le(e), n.head.appendChild(e)));
      }
    }
    function K0(t, e) {
      pl.m(t, e);
      var l = na;
      if (l && t) {
        var n = e && typeof e.as == "string" ? e.as : "script", a = 'link[rel="modulepreload"][as="' + Re(n) + '"][href="' + Re(t) + '"]', i = a;
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            i = ia(t);
        }
        if (!Xe.has(i) && (t = b({
          rel: "modulepreload",
          href: t
        }, e), Xe.set(i, t), l.querySelector(a) === null)) {
          switch (n) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (l.querySelector(ei(i))) return;
          }
          n = l.createElement("link"), fe(n, "link", t), le(n), l.head.appendChild(n);
        }
      }
    }
    function J0(t, e, l) {
      pl.S(t, e, l);
      var n = na;
      if (n && t) {
        var a = En(n).hoistableStyles, i = aa(t);
        e = e || "default";
        var s = a.get(i);
        if (!s) {
          var d = {
            loading: 0,
            preload: null
          };
          if (s = n.querySelector(ti(i))) d.loading = 5;
          else {
            t = b({
              rel: "stylesheet",
              href: t,
              "data-precedence": e
            }, l), (l = Xe.get(i)) && cs(t, l);
            var g = s = n.createElement("link");
            le(g), fe(g, "link", t), g._p = new Promise(function(M, N) {
              g.onload = M, g.onerror = N;
            }), g.addEventListener("load", function() {
              d.loading |= 1;
            }), g.addEventListener("error", function() {
              d.loading |= 2;
            }), d.loading |= 4, zc(s, e, n);
          }
          s = {
            type: "stylesheet",
            instance: s,
            count: 1,
            state: d
          }, a.set(i, s);
        }
      }
    }
    function $0(t, e) {
      pl.X(t, e);
      var l = na;
      if (l && t) {
        var n = En(l).hoistableScripts, a = ia(t), i = n.get(a);
        i || (i = l.querySelector(ei(a)), i || (t = b({
          src: t,
          async: true
        }, e), (e = Xe.get(a)) && us(t, e), i = l.createElement("script"), le(i), fe(i, "link", t), l.head.appendChild(i)), i = {
          type: "script",
          instance: i,
          count: 1,
          state: null
        }, n.set(a, i));
      }
    }
    function W0(t, e) {
      pl.M(t, e);
      var l = na;
      if (l && t) {
        var n = En(l).hoistableScripts, a = ia(t), i = n.get(a);
        i || (i = l.querySelector(ei(a)), i || (t = b({
          src: t,
          async: true,
          type: "module"
        }, e), (e = Xe.get(a)) && us(t, e), i = l.createElement("script"), le(i), fe(i, "link", t), l.head.appendChild(i)), i = {
          type: "script",
          instance: i,
          count: 1,
          state: null
        }, n.set(a, i));
      }
    }
    function h_(t, e, l, n) {
      var a = (a = Qt.current) ? Ec(a) : null;
      if (!a) throw Error(o(446));
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof l.precedence == "string" && typeof l.href == "string" ? (e = aa(l.href), l = En(a).hoistableStyles, n = l.get(e), n || (n = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, l.set(e, n)), n) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
            t = aa(l.href);
            var i = En(a).hoistableStyles, s = i.get(t);
            if (s || (a = a.ownerDocument || a, s = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, i.set(t, s), (i = a.querySelector(ti(t))) && !i._p && (s.instance = i, s.state.loading = 5), Xe.has(t) || (l = {
              rel: "preload",
              as: "style",
              href: l.href,
              crossOrigin: l.crossOrigin,
              integrity: l.integrity,
              media: l.media,
              hrefLang: l.hrefLang,
              referrerPolicy: l.referrerPolicy
            }, Xe.set(t, l), i || F0(a, t, l, s.state))), e && n === null) throw Error(o(528, ""));
            return s;
          }
          if (e && n !== null) throw Error(o(529, ""));
          return null;
        case "script":
          return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ia(l), l = En(a).hoistableScripts, n = l.get(e), n || (n = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, l.set(e, n)), n) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(o(444, t));
      }
    }
    function aa(t) {
      return 'href="' + Re(t) + '"';
    }
    function ti(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function b_(t) {
      return b({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function F0(t, e, l, n) {
      t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? n.loading = 1 : (e = t.createElement("link"), n.preload = e, e.addEventListener("load", function() {
        return n.loading |= 1;
      }), e.addEventListener("error", function() {
        return n.loading |= 2;
      }), fe(e, "link", l), le(e), t.head.appendChild(e));
    }
    function ia(t) {
      return '[src="' + Re(t) + '"]';
    }
    function ei(t) {
      return "script[async]" + t;
    }
    function y_(t, e, l) {
      if (e.count++, e.instance === null) switch (e.type) {
        case "style":
          var n = t.querySelector('style[data-href~="' + Re(l.href) + '"]');
          if (n) return e.instance = n, le(n), n;
          var a = b({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (t.ownerDocument || t).createElement("style"), le(n), fe(n, "style", a), zc(n, l.precedence, t), e.instance = n;
        case "stylesheet":
          a = aa(l.href);
          var i = t.querySelector(ti(a));
          if (i) return e.state.loading |= 4, e.instance = i, le(i), i;
          n = b_(l), (a = Xe.get(a)) && cs(n, a), i = (t.ownerDocument || t).createElement("link"), le(i);
          var s = i;
          return s._p = new Promise(function(d, g) {
            s.onload = d, s.onerror = g;
          }), fe(i, "link", n), e.state.loading |= 4, zc(i, l.precedence, t), e.instance = i;
        case "script":
          return i = ia(l.src), (a = t.querySelector(ei(i))) ? (e.instance = a, le(a), a) : (n = l, (a = Xe.get(i)) && (n = b({}, l), us(n, a)), t = t.ownerDocument || t, a = t.createElement("script"), le(a), fe(a, "link", n), t.head.appendChild(a), e.instance = a);
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
      else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (n = e.instance, e.state.loading |= 4, zc(n, l.precedence, t));
      return e.instance;
    }
    function zc(t, e, l) {
      for (var n = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = n.length ? n[n.length - 1] : null, i = a, s = 0; s < n.length; s++) {
        var d = n[s];
        if (d.dataset.precedence === e) i = d;
        else if (i !== a) break;
      }
      i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
    }
    function cs(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function us(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    var Mc = null;
    function g_(t, e, l) {
      if (Mc === null) {
        var n = /* @__PURE__ */ new Map(), a = Mc = /* @__PURE__ */ new Map();
        a.set(l, n);
      } else a = Mc, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
      if (n.has(t)) return n;
      for (n.set(t, null), l = l.getElementsByTagName(t), a = 0; a < l.length; a++) {
        var i = l[a];
        if (!(i[ya] || i[ue] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
          var s = i.getAttribute(e) || "";
          s = t + s;
          var d = n.get(s);
          d ? d.push(i) : n.set(s, [
            i
          ]);
        }
      }
      return n;
    }
    function p_(t, e, l) {
      t = t.ownerDocument || t, t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null);
    }
    function I0(t, e, l) {
      if (l === 1 || e.itemProp != null) return false;
      switch (t) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
          return true;
        case "link":
          if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
          switch (e.rel) {
            case "stylesheet":
              return t = e.disabled, typeof e.precedence == "string" && t == null;
            default:
              return true;
          }
        case "script":
          if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return true;
      }
      return false;
    }
    function v_(t) {
      return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
    }
    function P0(t, e, l, n) {
      if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== false) && (l.state.loading & 4) === 0) {
        if (l.instance === null) {
          var a = aa(n.href), i = e.querySelector(ti(a));
          if (i) {
            e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Oc.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = i, le(i);
            return;
          }
          i = e.ownerDocument || e, n = b_(n), (a = Xe.get(a)) && cs(n, a), i = i.createElement("link"), le(i);
          var s = i;
          s._p = new Promise(function(d, g) {
            s.onload = d, s.onerror = g;
          }), fe(i, "link", n), l.instance = i;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = Oc.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
      }
    }
    var os = 0;
    function tb(t, e) {
      return t.stylesheets && t.count === 0 && Cc(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
        var n = setTimeout(function() {
          if (t.stylesheets && Cc(t, t.stylesheets), t.unsuspend) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        }, 6e4 + e);
        0 < t.imgBytes && os === 0 && (os = 62500 * B0());
        var a = setTimeout(function() {
          if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && Cc(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        }, (t.imgBytes > os ? 50 : 800) + e);
        return t.unsuspend = l, function() {
          t.unsuspend = null, clearTimeout(n), clearTimeout(a);
        };
      } : null;
    }
    function Oc() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) Cc(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    var Dc = null;
    function Cc(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, Dc = /* @__PURE__ */ new Map(), e.forEach(eb, t), Dc = null, Oc.call(t));
    }
    function eb(t, e) {
      if (!(e.state.loading & 4)) {
        var l = Dc.get(t);
        if (l) var n = l.get(null);
        else {
          l = /* @__PURE__ */ new Map(), Dc.set(t, l);
          for (var a = t.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < a.length; i++) {
            var s = a[i];
            (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (l.set(s.dataset.precedence, s), n = s);
          }
          n && l.set(null, n);
        }
        a = e.instance, s = a.getAttribute("data-precedence"), i = l.get(s) || n, i === n && l.set(null, a), l.set(s, a), this.count++, n = Oc.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), e.state.loading |= 4;
      }
    }
    var li = {
      $$typeof: nt,
      Provider: null,
      Consumer: null,
      _currentValue: j,
      _currentValue2: j,
      _threadCount: 0
    };
    function lb(t, e, l, n, a, i, s, d, g) {
      this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = lu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lu(0), this.hiddenUpdates = lu(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function w_(t, e, l, n, a, i, s, d, g, M, N, H) {
      return t = new lb(t, e, l, s, g, M, N, H, d), e = 1, i === true && (e |= 24), i = Ae(3, null, null, e), t.current = i, i.stateNode = t, e = Gu(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = {
        element: n,
        isDehydrated: l,
        cache: e
      }, Zu(i), t;
    }
    function S_(t) {
      return t ? (t = Hn, t) : Hn;
    }
    function x_(t, e, l, n, a, i) {
      a = S_(a), n.context === null ? n.context = a : n.pendingContext = a, n = Nl(e), n.payload = {
        element: l
      }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = Rl(t, n, e), l !== null && (we(l, t, e), Ba(l, t, e));
    }
    function T_(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var l = t.retryLane;
        t.retryLane = l !== 0 && l < e ? l : e;
      }
    }
    function ss(t, e) {
      T_(t, e), (t = t.alternate) && T_(t, e);
    }
    function A_(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = en(t, 67108864);
        e !== null && we(e, t, 67108864), ss(t, 67108864);
      }
    }
    function E_(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = De();
        e = nu(e);
        var l = en(t, e);
        l !== null && we(l, t, e), ss(t, e);
      }
    }
    var Nc = true;
    function nb(t, e, l, n) {
      var a = C.T;
      C.T = null;
      var i = q.p;
      try {
        q.p = 2, rs(t, e, l, n);
      } finally {
        q.p = i, C.T = a;
      }
    }
    function ab(t, e, l, n) {
      var a = C.T;
      C.T = null;
      var i = q.p;
      try {
        q.p = 8, rs(t, e, l, n);
      } finally {
        q.p = i, C.T = a;
      }
    }
    function rs(t, e, l, n) {
      if (Nc) {
        var a = fs(n);
        if (a === null) Wo(t, e, n, Rc, l), M_(t, n);
        else if (cb(a, t, e, l, n)) n.stopPropagation();
        else if (M_(t, n), e & 4 && -1 < ib.indexOf(t)) {
          for (; a !== null; ) {
            var i = An(a);
            if (i !== null) switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var s = Wl(i.pendingLanes);
                  if (s !== 0) {
                    var d = i;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; s; ) {
                      var g = 1 << 31 - xe(s);
                      d.entanglements[1] |= g, s &= ~g;
                    }
                    el(i), (Tt & 6) === 0 && (hc = Rt() + 500, Wa(0));
                  }
                }
                break;
              case 31:
              case 13:
                d = en(i, 2), d !== null && we(d, i, 2), yc(), ss(i, 2);
            }
            if (i = fs(n), i === null && Wo(t, e, n, Rc, l), i === a) break;
            a = i;
          }
          a !== null && n.stopPropagation();
        } else Wo(t, e, n, null, l);
      }
    }
    function fs(t) {
      return t = du(t), ds(t);
    }
    var Rc = null;
    function ds(t) {
      if (Rc = null, t = Tn(t), t !== null) {
        var e = _(t);
        if (e === null) t = null;
        else {
          var l = e.tag;
          if (l === 13) {
            if (t = m(e), t !== null) return t;
            t = null;
          } else if (l === 31) {
            if (t = h(e), t !== null) return t;
            t = null;
          } else if (l === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return Rc = t, null;
    }
    function z_(t) {
      switch (t) {
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
          switch (Qe()) {
            case ce:
              return 2;
            case Fe:
              return 8;
            case Ze:
            case Si:
              return 32;
            case Hs:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var _s = false, Zl = null, Vl = null, kl = null, ni = /* @__PURE__ */ new Map(), ai = /* @__PURE__ */ new Map(), Kl = [], ib = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function M_(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          Zl = null;
          break;
        case "dragenter":
        case "dragleave":
          Vl = null;
          break;
        case "mouseover":
        case "mouseout":
          kl = null;
          break;
        case "pointerover":
        case "pointerout":
          ni.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          ai.delete(e.pointerId);
      }
    }
    function ii(t, e, l, n, a, i) {
      return t === null || t.nativeEvent !== i ? (t = {
        blockedOn: e,
        domEventName: l,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [
          a
        ]
      }, e !== null && (e = An(e), e !== null && A_(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, a !== null && e.indexOf(a) === -1 && e.push(a), t);
    }
    function cb(t, e, l, n, a) {
      switch (e) {
        case "focusin":
          return Zl = ii(Zl, t, e, l, n, a), true;
        case "dragenter":
          return Vl = ii(Vl, t, e, l, n, a), true;
        case "mouseover":
          return kl = ii(kl, t, e, l, n, a), true;
        case "pointerover":
          var i = a.pointerId;
          return ni.set(i, ii(ni.get(i) || null, t, e, l, n, a)), true;
        case "gotpointercapture":
          return i = a.pointerId, ai.set(i, ii(ai.get(i) || null, t, e, l, n, a)), true;
      }
      return false;
    }
    function O_(t) {
      var e = Tn(t.target);
      if (e !== null) {
        var l = _(e);
        if (l !== null) {
          if (e = l.tag, e === 13) {
            if (e = m(l), e !== null) {
              t.blockedOn = e, Ys(t.priority, function() {
                E_(l);
              });
              return;
            }
          } else if (e === 31) {
            if (e = h(l), e !== null) {
              t.blockedOn = e, Ys(t.priority, function() {
                E_(l);
              });
              return;
            }
          } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
            t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function Bc(t) {
      if (t.blockedOn !== null) return false;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var l = fs(t.nativeEvent);
        if (l === null) {
          l = t.nativeEvent;
          var n = new l.constructor(l.type, l);
          fu = n, l.target.dispatchEvent(n), fu = null;
        } else return e = An(l), e !== null && A_(e), t.blockedOn = l, false;
        e.shift();
      }
      return true;
    }
    function D_(t, e, l) {
      Bc(t) && l.delete(e);
    }
    function ub() {
      _s = false, Zl !== null && Bc(Zl) && (Zl = null), Vl !== null && Bc(Vl) && (Vl = null), kl !== null && Bc(kl) && (kl = null), ni.forEach(D_), ai.forEach(D_);
    }
    function Uc(t, e) {
      t.blockedOn === e && (t.blockedOn = null, _s || (_s = true, c.unstable_scheduleCallback(c.unstable_NormalPriority, ub)));
    }
    var Hc = null;
    function C_(t) {
      Hc !== t && (Hc = t, c.unstable_scheduleCallback(c.unstable_NormalPriority, function() {
        Hc === t && (Hc = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], n = t[e + 1], a = t[e + 2];
          if (typeof n != "function") {
            if (ds(n || l) === null) continue;
            break;
          }
          var i = An(l);
          i !== null && (t.splice(e, 3), e -= 3, ro(i, {
            pending: true,
            data: a,
            method: l.method,
            action: n
          }, n, a));
        }
      }));
    }
    function ca(t) {
      function e(g) {
        return Uc(g, t);
      }
      Zl !== null && Uc(Zl, t), Vl !== null && Uc(Vl, t), kl !== null && Uc(kl, t), ni.forEach(e), ai.forEach(e);
      for (var l = 0; l < Kl.length; l++) {
        var n = Kl[l];
        n.blockedOn === t && (n.blockedOn = null);
      }
      for (; 0 < Kl.length && (l = Kl[0], l.blockedOn === null); ) O_(l), l.blockedOn === null && Kl.shift();
      if (l = (t.ownerDocument || t).$$reactFormReplay, l != null) for (n = 0; n < l.length; n += 3) {
        var a = l[n], i = l[n + 1], s = a[he] || null;
        if (typeof i == "function") s || C_(l);
        else if (s) {
          var d = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, s = i[he] || null) d = s.formAction;
            else if (ds(a) !== null) continue;
          } else d = s.action;
          typeof d == "function" ? l[n + 1] = d : (l.splice(n, 3), n -= 3), C_(l);
        }
      }
    }
    function N_() {
      function t(i) {
        i.canIntercept && i.info === "react-transition" && i.intercept({
          handler: function() {
            return new Promise(function(s) {
              return a = s;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function e() {
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
        return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
          n = true, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), a !== null && (a(), a = null);
        };
      }
    }
    function ms(t) {
      this._internalRoot = t;
    }
    Lc.prototype.render = ms.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null) throw Error(o(409));
      var l = e.current, n = De();
      x_(l, n, t, e, null, null);
    }, Lc.prototype.unmount = ms.prototype.unmount = function() {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        x_(t.current, 2, null, t, null, null), yc(), e[xn] = null;
      }
    };
    function Lc(t) {
      this._internalRoot = t;
    }
    Lc.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = Xs();
        t = {
          blockedOn: null,
          target: t,
          priority: e
        };
        for (var l = 0; l < Kl.length && e !== 0 && e < Kl[l].priority; l++) ;
        Kl.splice(l, 0, t), l === 0 && O_(t);
      }
    };
    var R_ = u.version;
    if (R_ !== "19.2.0") throw Error(o(527, R_, "19.2.0"));
    q.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0) throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
      return t = S(e), t = t !== null ? w(t) : null, t = t === null ? null : t.stateNode, t;
    };
    var ob = {
      bundleType: 0,
      version: "19.2.0",
      rendererPackageName: "react-dom",
      currentDispatcherRef: C,
      reconcilerVersion: "19.2.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var jc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!jc.isDisabled && jc.supportsFiber) try {
        ma = jc.inject(ob), Se = jc;
      } catch {
      }
    }
    return ci.createRoot = function(t, e) {
      if (!f(t)) throw Error(o(299));
      var l = false, n = "", a = Gf, i = Xf, s = Yf;
      return e != null && (e.unstable_strictMode === true && (l = true), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (s = e.onRecoverableError)), e = w_(t, 1, false, null, null, l, n, null, a, i, s, N_), t[xn] = e.current, $o(t), new ms(e);
    }, ci.hydrateRoot = function(t, e, l) {
      if (!f(t)) throw Error(o(299));
      var n = false, a = "", i = Gf, s = Xf, d = Yf, g = null;
      return l != null && (l.unstable_strictMode === true && (n = true), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (s = l.onCaughtError), l.onRecoverableError !== void 0 && (d = l.onRecoverableError), l.formState !== void 0 && (g = l.formState)), e = w_(t, 1, true, e, l ?? null, n, a, g, i, s, d, N_), e.context = S_(null), l = e.current, n = De(), n = nu(n), a = Nl(n), a.callback = null, Rl(l, a, n), l = n, e.current.lanes = l, ba(e, l), el(e), t[xn] = e.current, $o(t), new Lc(e);
    }, ci.version = "19.2.0", ci;
  }
  var L_;
  function yb() {
    if (L_) return hs.exports;
    L_ = 1;
    function c() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (u) {
        console.error(u);
      }
    }
    return c(), hs.exports = bb(), hs.exports;
  }
  Y1 = yb();
  const Gc = 8, Xc = 4, j_ = 400;
  let q_ = false, wl = null, Wc, hi = null;
  function gb(c) {
    var _a2;
    const u = (_a2 = c.getAttribute) == null ? void 0 : _a2.call(c, "data-tooltip-delay");
    if (u) {
      const f = parseFloat(u);
      if (Number.isFinite(f)) return f;
    }
    const r = getComputedStyle(document.documentElement).getPropertyValue("--tooltip-show-delay").trim();
    if (!r) return j_;
    const o = r.endsWith("ms") ? parseFloat(r) : r.endsWith("s") ? parseFloat(r) * 1e3 : parseFloat(r);
    return Number.isFinite(o) ? o : j_;
  }
  function pb() {
    return wl || (wl = document.createElement("div"), wl.className = "ui-tooltip", wl.setAttribute("role", "tooltip")), wl;
  }
  function Tm() {
    Wc !== void 0 && (clearTimeout(Wc), Wc = void 0);
  }
  function oa() {
    Tm(), hi = null, wl && wl.parentNode && wl.parentNode.removeChild(wl);
  }
  function vb(c) {
    const u = c.getAttribute("data-tooltip");
    if (!u) return;
    const r = c.getAttribute("data-tooltip-placement") || "top", o = pb();
    o.textContent = u, o.parentNode && o.parentNode.removeChild(o), o.style.left = "0", o.style.top = "0", o.style.visibility = "hidden", document.body.appendChild(o);
    const f = c.getBoundingClientRect(), _ = o.offsetWidth, m = o.offsetHeight, h = f.left + f.width / 2, p = f.top + f.height / 2;
    let S, w;
    switch (r) {
      case "bottom":
        S = h - _ / 2, w = f.bottom + Gc;
        break;
      case "left":
        S = f.left - Gc - _, w = p - m / 2;
        break;
      case "right":
        S = f.right + Gc, w = p - m / 2;
        break;
      case "top":
      default:
        S = h - _ / 2, w = f.top - Gc - m;
        break;
    }
    const b = document.documentElement.clientWidth, T = document.documentElement.clientHeight;
    S = Math.max(Xc, Math.min(S, b - _ - Xc)), w = Math.max(Xc, Math.min(w, T - m - Xc)), o.style.left = `${Math.round(S)}px`, o.style.top = `${Math.round(w)}px`, o.style.visibility = "visible";
  }
  function tu(c) {
    const u = c.target;
    return u && typeof u.closest == "function" ? u.closest("[data-tooltip]") : null;
  }
  function Am(c) {
    c !== hi && (hi = c, Tm(), Wc = setTimeout(() => vb(c), gb(c)));
  }
  function wb(c) {
    const u = tu(c);
    u && Am(u);
  }
  function Sb(c) {
    const u = tu(c);
    if (!u || u !== hi) return;
    const r = c.relatedTarget;
    r && u.contains(r) || oa();
  }
  function xb(c) {
    const u = tu(c);
    u && Am(u);
  }
  function Tb(c) {
    const u = tu(c);
    u && u === hi && oa();
  }
  function Ab(c) {
    c.key === "Escape" && oa();
  }
  Em = function() {
    q_ || typeof document > "u" || (q_ = true, document.addEventListener("pointerover", wb, true), document.addEventListener("pointerout", Sb, true), document.addEventListener("pointerdown", oa, true), document.addEventListener("focusin", xb, true), document.addEventListener("focusout", Tb, true), document.addEventListener("keydown", Ab, true), document.addEventListener("scroll", oa, true), window.addEventListener("blur", oa));
  };
  Em();
  Em();
  Q1 = function({ label: c, placement: u = "top", delay: r, children: o }) {
    if (!c || !Z.isValidElement(o)) return Y.jsx(Y.Fragment, {
      children: o
    });
    const f = {
      "data-tooltip": c,
      "data-tooltip-placement": u,
      ...r !== void 0 ? {
        "data-tooltip-delay": r
      } : {}
    };
    return Z.cloneElement(o, f);
  };
  function zm(c) {
    var u, r, o = "";
    if (typeof c == "string" || typeof c == "number") o += c;
    else if (typeof c == "object") if (Array.isArray(c)) {
      var f = c.length;
      for (u = 0; u < f; u++) c[u] && (r = zm(c[u])) && (o && (o += " "), o += r);
    } else for (r in c) c[r] && (o && (o += " "), o += r);
    return o;
  }
  Eb = function() {
    for (var c, u, r = 0, o = "", f = arguments.length; r < f; r++) (c = arguments[r]) && (u = zm(c)) && (o && (o += " "), o += u);
    return o;
  };
  const zb = 4096, Mb = 16, G_ = 5, Ob = 64, Db = 0.14, Cb = 0.14, Nb = 0.1, Rb = 3, Bb = 3, X_ = (c) => Math.max(1, Math.round(c * Db)), Y_ = (c) => Math.max(2, Math.round(c * Cb)), Ub = 32, Hb = {
    1: 22,
    2: 19,
    3: 14
  }, Lb = 10, Q_ = "#111111", jb = "#ffffff", qb = "#ffffff", Gb = "#333333";
  function Xb(c) {
    return c ? Array.isArray(c) ? c : Array.from(c) : [];
  }
  function Yb(c, u) {
    const r = Hb[c.length] ?? Lb;
    return Math.max(6, Math.round(r * (u / Ub)));
  }
  function Yc({ active: c, disabled: u, onToggle: r, children: o }) {
    return Y.jsx("button", {
      type: "button",
      className: Eb("node-bit-ctl-btn", {
        active: c
      }),
      disabled: u,
      onMouseDown: (f) => f.stopPropagation(),
      onClick: (f) => {
        f.stopPropagation(), r();
      },
      children: o
    });
  }
  let Mm, zs;
  Mm = Z.memo(function({ bitField: u = [], color: r, colorMap: o, maxBits: f = zb, squarePx: _, interactive: m = true, labelMode: h = "value", colorCoded: p = false, borderPx: S, gapPx: w = Rb, paddingPx: b = Bb, showChrome: T = true, colorMapTintsInactive: A = false, colorMapColorGaps: R = false, gapColorPx: E }) {
    const [B, L] = Z.useState(p), [$, nt] = Z.useState(h === "index"), [st, Ut] = Z.useState(false), [Nt, P] = Z.useState(false), rt = m ? B : p, Ht = m ? $ ? "index" : "value" : h, ae = m ? st : false, ie = m ? Nt : false, St = Z.useRef(null), [gt, bt] = Z.useState(_ ?? Mb), [xt, C] = Z.useState(0), q = Xb(u);
    if (q.length === 0) return null;
    const j = q.length, G = j > f ? q.slice(0, f) : q, K = j > f;
    let _t = 0;
    for (const lt of q) lt === 1 && _t++;
    const et = G.length;
    Z.useLayoutEffect(() => {
      if (_ != null) return;
      const lt = St.current;
      if (!lt) return;
      const at = () => {
        const _e = lt.clientWidth, Ye = lt.clientHeight;
        if (!(_e <= 0 || Ye <= 0 || et <= 0)) {
          C(_e);
          for (let jt = Ob; jt >= G_; jt--) {
            const Ce = X_(jt), xl = Y_(jt), wn = _e - 2 * xl, Sn = Ye - 2 * xl;
            if (wn < jt || Sn < jt) continue;
            const Rt = Math.floor((wn + Ce) / (jt + Ce));
            if (Rt < 1) continue;
            if (Math.ceil(et / Rt) * (jt + Ce) - Ce <= Sn) {
              bt(jt);
              return;
            }
          }
          bt(G_);
        }
      };
      at();
      const W = new ResizeObserver(at);
      return W.observe(lt), () => W.disconnect();
    }, [
      _,
      et
    ]);
    const I = _ == null, ot = _ ?? gt, Yt = I ? X_(ot) : w, Qt = I ? Y_(ot) : b, $t = (lt, at) => {
      if (lt === 1) return rt ? (o == null ? void 0 : o[at]) ?? r ?? Q_ : Q_;
      if (rt && A) {
        const W = o == null ? void 0 : o[at];
        if (W) return `color-mix(in srgb, ${W} 20%, transparent)`;
      }
      return jb;
    }, Wt = !I && E != null ? E : Yt / 2, Lt = (lt) => {
      if (!rt || !R) return;
      const at = o == null ? void 0 : o[lt];
      return at ? `0 0 0 ${Wt}px ${at}` : void 0;
    };
    let pt = G.map((lt, at) => at);
    Ht === "index" && (ae && (pt = pt.slice().sort((lt, at) => (G[at] ?? 0) - (G[lt] ?? 0))), ie && (pt = pt.filter((lt) => (G[lt] ?? 0) === 1)));
    const Mt = S ?? (I ? Math.max(1, Math.round(ot * Nb)) : ot >= 20 ? 3 : 2), Zt = I && xt > 0 ? Math.max(9, Math.min(18, Math.round(xt * 0.045))) : void 0, We = !$;
    return Y.jsxs("div", {
      className: "node-bit-panel",
      children: [
        T && Y.jsxs("div", {
          className: "node-bit-panel-title",
          style: Zt ? {
            fontSize: Zt
          } : void 0,
          children: [
            "Internal State ",
            K && `(showing ${f} of ${j})`
          ]
        }),
        m && Y.jsxs("div", {
          className: "node-bit-panel-controls chip-controls nodrag",
          style: Zt ? {
            fontSize: Zt
          } : void 0,
          children: [
            Y.jsx(Yc, {
              active: B,
              onToggle: () => L((lt) => !lt),
              children: "Color-Coded"
            }),
            Y.jsx(Yc, {
              active: $,
              onToggle: () => nt((lt) => !lt),
              children: "Show Index"
            }),
            Y.jsx(Yc, {
              active: st,
              disabled: We,
              onToggle: () => Ut((lt) => !lt),
              children: "Sort by Active"
            }),
            Y.jsx(Yc, {
              active: Nt,
              disabled: We,
              onToggle: () => P((lt) => !lt),
              children: "Hide 0s"
            })
          ]
        }),
        Y.jsx("div", {
          className: "node-bit-squares",
          ref: St,
          style: {
            gap: Yt,
            padding: Qt
          },
          children: pt.map((lt) => {
            const at = G[lt] ?? 0, W = Ht === "none" ? "" : String(Ht === "index" ? lt : at);
            return Y.jsx("div", {
              className: "node-bit-square",
              "data-tooltip": `bit ${lt}: ${at}`,
              style: {
                width: ot,
                height: ot,
                background: $t(at, lt),
                color: at === 1 ? qb : Gb,
                border: `${Mt}px solid #000`,
                ...Lt(lt) ? {
                  boxShadow: Lt(lt)
                } : {},
                fontSize: W ? Yb(W, ot) : 0
              },
              children: W
            }, lt);
          })
        }),
        T && Y.jsx("div", {
          className: "node-bit-panel-footer",
          children: Y.jsxs("span", {
            children: [
              _t,
              " / ",
              j,
              " active bits"
            ]
          })
        })
      ]
    });
  });
  Z1 = Z.memo(function({ bitfield: u = [], maxBits: r = 4096, bitFieldParams: o = {}, color: f, colorMap: _, interactive: m, labelMode: h, colorCoded: p, borderPx: S, gapPx: w, paddingPx: b, showChrome: T, squarePx: A, colorMapTintsInactive: R, colorMapColorGaps: E, gapColorPx: B }) {
    return !u || u.length === 0 ? null : Y.jsx(Mm, {
      bitField: u,
      maxBits: r,
      numDepth: (o == null ? void 0 : o.num_dps) ?? 1,
      blockType: o == null ? void 0 : o.type,
      color: f,
      colorMap: _,
      interactive: m,
      labelMode: h,
      colorCoded: p,
      borderPx: S,
      gapPx: w,
      paddingPx: b,
      showChrome: T,
      squarePx: A,
      colorMapTintsInactive: R,
      colorMapColorGaps: E,
      gapColorPx: B
    });
  });
  V1 = Z.memo(function({ bitfield: u = [], maxBits: r = 4096, bitFieldParams: o = {}, color: f, colorMap: _, interactive: m, labelMode: h, colorCoded: p, borderPx: S, gapPx: w, paddingPx: b, showChrome: T, squarePx: A, colorMapTintsInactive: R }) {
    return !u || u.length === 0 ? null : Y.jsx(Mm, {
      bitField: u,
      maxBits: r,
      numDepth: (o == null ? void 0 : o.num_dps) ?? 1,
      blockType: o == null ? void 0 : o.type,
      color: f,
      colorMap: _,
      interactive: m,
      labelMode: h,
      colorCoded: p,
      borderPx: S,
      gapPx: w,
      paddingPx: b,
      showChrome: T,
      squarePx: A,
      colorMapTintsInactive: R
    });
  });
  zs = [
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
  Om = function(c) {
    return zs[c % zs.length];
  };
  const Qb = [
    "#a7423b",
    "#006e70",
    "#97833d",
    "#dbafc8"
  ], Z_ = [
    "#3366cc",
    "#ff9900",
    "#dc3912",
    "#109618",
    "#990099",
    "#0099c6",
    "#dd4477",
    "#66aa00",
    "#b82e2e",
    "#316395",
    "#994499",
    "#22aa99",
    "#aaaa11",
    "#6633cc",
    "#e67300",
    "#651067"
  ];
  k1 = function(c) {
    return Z_[c % Z_.length];
  };
  const Zb = "#eeeeee", V_ = "#000000", Vb = "#111111", kb = "#888888", Kb = 8, Jb = 4, $b = 26, Wb = 6, Fb = 6, Ib = 16, Dm = {
    fontSize: Kb,
    axisWidth: 1,
    tickLen: 4,
    gridLeft: $b,
    gridRight: Wb,
    gridTop: Fb,
    gridBottom: Ib
  };
  function Pb(c, u) {
    if (c <= 0 || u <= 0) return Dm;
    const r = Math.min(c, u), o = Math.max(8, Math.min(22, Math.round(r * 0.075)));
    return {
      fontSize: o,
      axisWidth: o >= 15 ? 2 : 1,
      tickLen: Math.max(3, Math.round(o * 0.55)),
      gridLeft: Math.round(o * 2.4 + 10),
      gridRight: Math.max(6, Math.round(o * 0.7)),
      gridTop: Math.max(6, Math.round(o * 0.7)),
      gridBottom: Math.round(o * 1.7 + 6)
    };
  }
  function ty(c, u) {
    if (!c) return;
    if (!c.includes("var(")) return c;
    if (!u) return;
    const r = u.style.color;
    u.style.color = c;
    const o = getComputedStyle(u).color;
    return u.style.color = r, o || void 0;
  }
  function ey(c, u, r, o, f, _, m, h = Dm) {
    const p = Array.isArray(c[0].value) || ArrayBuffer.isView(c[0].value), S = {
      type: "value",
      axisLine: {
        lineStyle: {
          color: V_,
          width: h.axisWidth
        }
      },
      axisTick: {
        show: true,
        length: h.tickLen,
        lineStyle: {
          color: V_,
          width: h.axisWidth
        }
      },
      axisLabel: {
        fontSize: h.fontSize,
        color: Vb,
        hideOverlap: true,
        margin: Math.round(h.fontSize * 0.55)
      }
    };
    let w;
    if (p) {
      const A = c[0].value.length;
      w = Array.from({
        length: A
      }, (R, E) => {
        const B = (m == null ? void 0 : m[E]) ?? Om(E);
        return {
          type: "line",
          showSymbol: false,
          smooth: false,
          step: f ?? false,
          ..._ ? {
            stack: "cls"
          } : {},
          data: c.map((L) => {
            const $ = L.value;
            return [
              L.step,
              $[E] ?? 0
            ];
          }),
          lineStyle: {
            width: _ ? 1 : 1.5,
            color: B
          },
          itemStyle: {
            color: B
          },
          areaStyle: {
            color: B,
            opacity: _ ? 0.85 : 0.12
          }
        };
      });
    } else w = [
      {
        type: "line",
        showSymbol: false,
        smooth: false,
        step: f ?? false,
        data: c.map((A) => [
          A.step,
          A.value
        ]),
        lineStyle: {
          width: 2,
          color: u
        },
        itemStyle: {
          color: u
        },
        areaStyle: {
          color: u,
          opacity: 0.12
        }
      }
    ];
    const b = r != null && o != null, T = {
      ...S,
      scale: !b && !_,
      splitLine: {
        show: true,
        lineStyle: {
          color: kb,
          opacity: 0.4
        }
      },
      ...b ? {
        min: r,
        max: o,
        interval: (o - r) / 2,
        axisLabel: {
          ...S.axisLabel,
          showMinLabel: true,
          showMaxLabel: true
        }
      } : {}
    };
    return {
      animation: false,
      backgroundColor: "transparent",
      grid: {
        left: h.gridLeft,
        right: h.gridRight,
        top: h.gridTop,
        bottom: h.gridBottom,
        containLabel: false
      },
      xAxis: {
        ...S,
        splitLine: {
          show: false
        },
        min: "dataMin",
        max: "dataMax"
      },
      yAxis: T,
      series: w
    };
  }
  let ly, ny;
  K1 = Z.memo(function({ data: u = [], color: r, height: o, width: f, yMin: _, yMax: m, step: h, stacked: p, seriesColors: S }) {
    const w = Z.useRef(null), b = Z.useRef(null), T = Z.useRef(null), [A, R] = Z.useState({
      w: 0,
      h: 0
    });
    Z.useEffect(() => {
      if (!w.current) return;
      const L = Sm(w.current) ?? xm(w.current, void 0, {
        renderer: "canvas"
      });
      return b.current = L, () => {
        L.dispose(), b.current = null;
      };
    }, []), Z.useEffect(() => {
      const L = b.current;
      if (!L) return;
      if (f != null && o != null) {
        L.resize({
          width: f,
          height: o
        }), R({
          w: f,
          h: o
        });
        return;
      }
      const $ = w.current;
      if (!$) return;
      const nt = () => {
        L.resize(), R({
          w: $.clientWidth,
          h: $.clientHeight
        });
      }, st = new ResizeObserver(nt);
      return st.observe($), nt(), () => st.disconnect();
    }, [
      f,
      o
    ]), Z.useEffect(() => {
      const L = b.current;
      if (!L) return;
      if (!u || u.length === 0) {
        L.clear();
        return;
      }
      const $ = ty(r, w.current) ?? Om(0), nt = Pb(A.w, A.h);
      L.setOption(ey(u, $, _, m, h, p, S, nt), {
        notMerge: true
      });
    }, [
      u,
      r,
      _,
      m,
      h,
      p,
      S,
      A
    ]);
    const E = {
      background: Zb,
      border: "2px solid #333333",
      borderRadius: "6px",
      padding: `${Jb}px`,
      boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.40), inset 0 1px 0 rgba(255, 255, 255, 0.55)",
      pointerEvents: "none",
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      overflow: "hidden",
      flex: "1 1 auto",
      minWidth: 0,
      minHeight: 0
    }, B = f != null && o != null ? {
      width: `${f}px`,
      height: `${o}px`
    } : {
      width: "100%",
      height: "100%"
    };
    return u.length === 0 ? Y.jsx("div", {
      ref: T,
      className: "node-plot-empty",
      style: {
        ...E,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "11px",
        color: "#555"
      },
      children: "No data available"
    }) : Y.jsx("div", {
      ref: T,
      className: "node-echarts-plot",
      style: E,
      children: Y.jsx("div", {
        ref: w,
        style: B
      })
    });
  });
  ly = "" + new URL("dcc_bundle_bg-D8vw1f42.wasm", import.meta.url).href;
  ny = async (c = {}, u) => {
    let r;
    if (u.startsWith("data:")) {
      const o = u.replace(/^data:.*?base64,/, "");
      let f;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") f = Buffer.from(o, "base64");
      else if (typeof atob == "function") {
        const _ = atob(o);
        f = new Uint8Array(_.length);
        for (let m = 0; m < _.length; m++) f[m] = _.charCodeAt(m);
      } else throw new Error("Cannot decode base64-encoded data URL");
      r = await WebAssembly.instantiate(f, c);
    } else {
      const o = await fetch(u), f = o.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && f.startsWith("application/wasm")) r = await WebAssembly.instantiateStreaming(o, c);
      else {
        const _ = await o.arrayBuffer();
        r = await WebAssembly.instantiate(_, c);
      }
    }
    return r.instance.exports;
  };
  let y;
  function ay(c) {
    y = c;
  }
  function _a(c) {
    const u = y.__externref_table_alloc();
    return y.__wbindgen_export_2.set(u, c), u;
  }
  function vi(c, u) {
    try {
      return c.apply(this, u);
    } catch (r) {
      const o = _a(r);
      y.__wbindgen_exn_store(o);
    }
  }
  let Qc = null;
  function di() {
    return (Qc === null || Qc.byteLength === 0) && (Qc = new Uint8Array(y.memory.buffer)), Qc;
  }
  let Fc = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  Fc.decode();
  const iy = 2146435072;
  let gs = 0;
  function cy(c, u) {
    return gs += u, gs >= iy && (Fc = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), Fc.decode(), gs = u), Fc.decode(di().subarray(c, c + u));
  }
  function At(c, u) {
    return c = c >>> 0, cy(c, u);
  }
  function Ns(c, u) {
    return c = c >>> 0, di().subarray(c / 1, c / 1 + u);
  }
  let Q = 0;
  const _i = new TextEncoder();
  "encodeInto" in _i || (_i.encodeInto = function(c, u) {
    const r = _i.encode(c);
    return u.set(r), {
      read: c.length,
      written: r.length
    };
  });
  function J(c, u, r) {
    if (r === void 0) {
      const h = _i.encode(c), p = u(h.length, 1) >>> 0;
      return di().subarray(p, p + h.length).set(h), Q = h.length, p;
    }
    let o = c.length, f = u(o, 1) >>> 0;
    const _ = di();
    let m = 0;
    for (; m < o; m++) {
      const h = c.charCodeAt(m);
      if (h > 127) break;
      _[f + m] = h;
    }
    if (m !== o) {
      m !== 0 && (c = c.slice(m)), f = r(f, o, o = m + c.length * 3, 1) >>> 0;
      const h = di().subarray(f + m, f + o), p = _i.encodeInto(c, h);
      m += p.written, f = r(f, o, m, 1) >>> 0;
    }
    return Q = m, f;
  }
  let ua = null;
  function bi() {
    return (ua === null || ua.buffer.detached === true || ua.buffer.detached === void 0 && ua.buffer !== y.memory.buffer) && (ua = new DataView(y.memory.buffer)), ua;
  }
  function wi(c) {
    return c == null;
  }
  function it(c) {
    const u = y.__wbindgen_export_2.get(c);
    return y.__externref_table_dealloc(c), u;
  }
  let Zc = null;
  function Cm() {
    return (Zc === null || Zc.byteLength === 0) && (Zc = new Float64Array(y.memory.buffer)), Zc;
  }
  function uy(c, u) {
    return c = c >>> 0, Cm().subarray(c / 8, c / 8 + u);
  }
  function ui(c, u) {
    const r = u(c.length * 4, 4) >>> 0;
    for (let o = 0; o < c.length; o++) {
      const f = _a(c[o]);
      bi().setUint32(r + 4 * o, f, true);
    }
    return Q = c.length, r;
  }
  function k_(c, u) {
    const r = u(c.length * 8, 8) >>> 0;
    return Cm().set(c, r / 8), Q = c.length, r;
  }
  let Vc = null;
  function oy() {
    return (Vc === null || Vc.byteLength === 0) && (Vc = new Uint32Array(y.memory.buffer)), Vc;
  }
  function K_(c, u) {
    const r = u(c.length * 4, 4) >>> 0;
    return oy().set(c, r / 4), Q = c.length, r;
  }
  J1 = function(c) {
    const u = J(c, y.__wbindgen_malloc, y.__wbindgen_realloc), r = Q, o = y.analyze_mixed_encoder_configs(u, r);
    if (o[2]) throw it(o[1]);
    return it(o[0]);
  };
  const J_ = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((c) => y.__wbg_wasmnetwork_free(c >>> 0, 1));
  $_ = class {
    __destroy_into_raw() {
      const u = this.__wbg_ptr;
      return this.__wbg_ptr = 0, J_.unregister(this), u;
    }
    free() {
      const u = this.__destroy_into_raw();
      y.__wbg_wasmnetwork_free(u, 0);
    }
    init_block(u) {
      const r = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), o = Q, f = y.wasmnetwork_init_block(this.__wbg_ptr, r, o);
      if (f[1]) throw it(f[0]);
    }
    num_blocks() {
      return y.wasmnetwork_num_blocks(this.__wbg_ptr) >>> 0;
    }
    get_anomaly(u) {
      const r = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), o = Q, f = y.wasmnetwork_get_anomaly(this.__wbg_ptr, r, o);
      if (f[2]) throw it(f[1]);
      return f[0];
    }
    is_recording() {
      return y.wasmnetwork_is_recording(this.__wbg_ptr) !== 0;
    }
    remove_block(u) {
      const r = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), o = Q, f = y.wasmnetwork_remove_block(this.__wbg_ptr, r, o);
      if (f[1]) throw it(f[0]);
    }
    encode_scalar(u, r) {
      const o = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), f = Q, _ = y.wasmnetwork_encode_scalar(this.__wbg_ptr, o, f, r);
      if (_[1]) throw it(_[0]);
    }
    export_config() {
      let u, r;
      try {
        const _ = y.wasmnetwork_export_config(this.__wbg_ptr);
        var o = _[0], f = _[1];
        if (_[3]) throw o = 0, f = 0, it(_[2]);
        return u = o, r = f, At(o, f);
      } finally {
        y.__wbindgen_free(u, r, 1);
      }
    }
    import_config(u) {
      const r = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), o = Q, f = y.wasmnetwork_import_config(this.__wbg_ptr, r, o);
      if (f[1]) throw it(f[0]);
    }
    get_block_name(u) {
      let r, o;
      try {
        const m = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), h = Q, p = y.wasmnetwork_get_block_name(this.__wbg_ptr, m, h);
        var f = p[0], _ = p[1];
        if (p[3]) throw f = 0, _ = 0, it(p[2]);
        return r = f, o = _, At(f, _);
      } finally {
        y.__wbindgen_free(r, o, 1);
      }
    }
    get_state_json() {
      const u = y.wasmnetwork_get_state_json(this.__wbg_ptr);
      let r;
      return u[0] !== 0 && (r = At(u[0], u[1]).slice(), y.__wbindgen_free(u[0], u[1] * 1, 1)), r;
    }
    get_trace_json() {
      const u = y.wasmnetwork_get_trace_json(this.__wbg_ptr);
      let r;
      return u[0] !== 0 && (r = At(u[0], u[1]).slice(), y.__wbindgen_free(u[0], u[1] * 1, 1)), r;
    }
    get_block_state(u) {
      const r = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), o = Q, f = y.wasmnetwork_get_block_state(this.__wbg_ptr, r, o);
      if (f[3]) throw it(f[2]);
      var _ = Ns(f[0], f[1]).slice();
      return y.__wbindgen_free(f[0], f[1] * 1, 1), _;
    }
    get_blocks_info() {
      let u, r;
      try {
        const _ = y.wasmnetwork_get_blocks_info(this.__wbg_ptr);
        var o = _[0], f = _[1];
        if (_[3]) throw o = 0, f = 0, it(_[2]);
        return u = o, r = f, At(o, f);
      } finally {
        y.__wbindgen_free(u, r, 1);
      }
    }
    start_recording() {
      y.wasmnetwork_start_recording(this.__wbg_ptr);
    }
    connect_to_input(u, r) {
      const o = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), f = Q, _ = J(r, y.__wbindgen_malloc, y.__wbindgen_realloc), m = Q, h = y.wasmnetwork_connect_to_input(this.__wbg_ptr, o, f, _, m);
      if (h[1]) throw it(h[0]);
    }
    get_scalar_value(u) {
      const r = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), o = Q, f = y.wasmnetwork_get_scalar_value(this.__wbg_ptr, r, o);
      if (f[2]) throw it(f[1]);
      return f[0];
    }
    set_scalar_value(u, r) {
      const o = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), f = Q, _ = y.wasmnetwork_set_scalar_value(this.__wbg_ptr, o, f, r);
      if (_[1]) throw it(_[0]);
    }
    get_probabilities(u) {
      const r = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), o = Q, f = y.wasmnetwork_get_probabilities(this.__wbg_ptr, r, o);
      if (f[3]) throw it(f[2]);
      var _ = uy(f[0], f[1]).slice();
      return y.__wbindgen_free(f[0], f[1] * 8, 8), _;
    }
    remove_connection(u, r, o) {
      const f = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), _ = Q, m = J(r, y.__wbindgen_malloc, y.__wbindgen_realloc), h = Q, p = J(o, y.__wbindgen_malloc, y.__wbindgen_realloc), S = Q, w = y.wasmnetwork_remove_connection(this.__wbg_ptr, f, _, m, h, p, S);
      if (w[1]) throw it(w[0]);
    }
    add_pattern_pooler(u, r, o, f, _, m, h, p, S, w, b, T) {
      let A, R;
      try {
        const E = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), B = Q, L = y.wasmnetwork_add_pattern_pooler(this.__wbg_ptr, E, B, r, o, f, _, m, h, p, S, w, b, T);
        return A = L[0], R = L[1], At(L[0], L[1]);
      } finally {
        y.__wbindgen_free(A, R, 1);
      }
    }
    connect_to_context(u, r) {
      const o = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), f = Q, _ = J(r, y.__wbindgen_malloc, y.__wbindgen_realloc), m = Q, h = y.wasmnetwork_connect_to_context(this.__wbg_ptr, o, f, _, m);
      if (h[1]) throw it(h[0]);
    }
    set_discrete_value(u, r) {
      const o = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), f = Q, _ = y.wasmnetwork_set_discrete_value(this.__wbg_ptr, o, f, r);
      if (_[1]) throw it(_[0]);
    }
    add_context_learner(u, r, o, f, _, m, h, p, S, w, b, T) {
      let A, R;
      try {
        const E = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), B = Q, L = y.wasmnetwork_add_context_learner(this.__wbg_ptr, E, B, r, o, f, _, m, h, p, S, w, b, T);
        return A = L[0], R = L[1], At(L[0], L[1]);
      } finally {
        y.__wbindgen_free(A, R, 1);
      }
    }
    add_sine_datasource(u, r, o, f, _, m) {
      let h, p;
      try {
        const b = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), T = Q, A = y.wasmnetwork_add_sine_datasource(this.__wbg_ptr, b, T, r, o, f, _, m);
        var S = A[0], w = A[1];
        if (A[3]) throw S = 0, w = 0, it(A[2]);
        return h = S, p = w, At(S, w);
      } finally {
        y.__wbindgen_free(h, p, 1);
      }
    }
    get_state_canonical() {
      const u = y.wasmnetwork_get_state_canonical(this.__wbg_ptr);
      let r;
      return u[0] !== 0 && (r = At(u[0], u[1]).slice(), y.__wbindgen_free(u[0], u[1] * 1, 1)), r;
    }
    place_cell_add_cell(u, r, o) {
      const f = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), _ = Q, m = y.wasmnetwork_place_cell_add_cell(this.__wbg_ptr, f, _, r, o);
      if (m[1]) throw it(m[0]);
    }
    place_cell_num_bins(u) {
      const r = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), o = Q, f = y.wasmnetwork_place_cell_num_bins(this.__wbg_ptr, r, o);
      if (f[2]) throw it(f[1]);
      return f[0] >>> 0;
    }
    add_sequence_learner(u, r, o, f, _, m, h, p, S, w, b, T) {
      let A, R;
      try {
        const E = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), B = Q, L = y.wasmnetwork_add_sequence_learner(this.__wbg_ptr, E, B, r, o, f, _, m, h, p, S, w, b, T);
        return A = L[0], R = L[1], At(L[0], L[1]);
      } finally {
        y.__wbindgen_free(A, R, 1);
      }
    }
    connect_label_source(u, r) {
      const o = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), f = Q, _ = J(r, y.__wbindgen_malloc, y.__wbindgen_realloc), m = Q, h = y.wasmnetwork_connect_label_source(this.__wbg_ptr, o, f, _, m);
      if (h[1]) throw it(h[0]);
    }
    encode_scalars_batch(u, r) {
      const o = ui(u, y.__wbindgen_malloc), f = Q, _ = k_(r, y.__wbindgen_malloc), m = Q, h = y.wasmnetwork_encode_scalars_batch(this.__wbg_ptr, o, f, _, m);
      if (h[1]) throw it(h[0]);
    }
    set_classifier_label(u, r) {
      const o = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), f = Q, _ = y.wasmnetwork_set_classifier_label(this.__wbg_ptr, o, f, r);
      if (_[1]) throw it(_[0]);
    }
    add_square_datasource(u, r, o, f, _, m) {
      let h, p;
      try {
        const b = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), T = Q, A = y.wasmnetwork_add_square_datasource(this.__wbg_ptr, b, T, r, o, f, _, m);
        var S = A[0], w = A[1];
        if (A[3]) throw S = 0, w = 0, it(A[2]);
        return h = S, p = w, At(S, w);
      } finally {
        y.__wbindgen_free(h, p, 1);
      }
    }
    connect_scalar_source(u, r) {
      const o = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), f = Q, _ = J(r, y.__wbindgen_malloc, y.__wbindgen_realloc), m = Q, h = y.wasmnetwork_connect_scalar_source(this.__wbg_ptr, o, f, _, m);
      if (h[1]) throw it(h[0]);
    }
    get_all_block_outputs(u) {
      let r, o;
      try {
        const m = ui(u, y.__wbindgen_malloc), h = Q, p = y.wasmnetwork_get_all_block_outputs(this.__wbg_ptr, m, h);
        var f = p[0], _ = p[1];
        if (p[3]) throw f = 0, _ = 0, it(p[2]);
        return r = f, o = _, At(f, _);
      } finally {
        y.__wbindgen_free(r, o, 1);
      }
    }
    add_pattern_classifier(u, r, o, f, _, m, h, p, S, w, b, T) {
      let A, R;
      try {
        const E = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), B = Q, L = y.wasmnetwork_add_pattern_classifier(this.__wbg_ptr, E, B, r, o, f, _, m, h, p, S, w, b, T);
        return A = L[0], R = L[1], At(L[0], L[1]);
      } finally {
        y.__wbindgen_free(A, R, 1);
      }
    }
    add_scalar_transformer(u, r, o, f, _, m, h) {
      let p, S;
      try {
        const w = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), b = Q, T = y.wasmnetwork_add_scalar_transformer(this.__wbg_ptr, w, b, r, o, f, _, m, h);
        return p = T[0], S = T[1], At(T[0], T[1]);
      } finally {
        y.__wbindgen_free(p, S, 1);
      }
    }
    place_cell_remove_cell(u) {
      const r = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), o = Q, f = y.wasmnetwork_place_cell_remove_cell(this.__wbg_ptr, r, o);
      if (f[2]) throw it(f[1]);
      return f[0] !== 0;
    }
    add_constant_datasource(u, r, o, f) {
      let _, m;
      try {
        const S = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), w = Q, b = y.wasmnetwork_add_constant_datasource(this.__wbg_ptr, S, w, r, o, f);
        var h = b[0], p = b[1];
        if (b[3]) throw h = 0, p = 0, it(b[2]);
        return _ = h, m = p, At(h, p);
      } finally {
        y.__wbindgen_free(_, m, 1);
      }
    }
    connect_discrete_source(u, r) {
      const o = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), f = Q, _ = J(r, y.__wbindgen_malloc, y.__wbindgen_realloc), m = Q, h = y.wasmnetwork_connect_discrete_source(this.__wbg_ptr, o, f, _, m);
      if (h[1]) throw it(h[0]);
    }
    export_config_canonical() {
      let u, r;
      try {
        const _ = y.wasmnetwork_export_config_canonical(this.__wbg_ptr);
        var o = _[0], f = _[1];
        if (_[3]) throw o = 0, f = 0, it(_[2]);
        return u = o, r = f, At(o, f);
      } finally {
        y.__wbindgen_free(u, r, 1);
      }
    }
    import_config_canonical(u) {
      const r = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), o = Q, f = y.wasmnetwork_import_config_canonical(this.__wbg_ptr, r, o);
      if (f[1]) throw it(f[0]);
    }
    add_discrete_transformer(u, r, o, f, _) {
      let m, h;
      try {
        const p = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), S = Q, w = y.wasmnetwork_add_discrete_transformer(this.__wbg_ptr, p, S, r, o, f, _);
        return m = w[0], h = w[1], At(w[0], w[1]);
      } finally {
        y.__wbindgen_free(m, h, 1);
      }
    }
    add_datasource_from_config(u, r) {
      let o, f;
      try {
        const h = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), p = Q, S = J(r, y.__wbindgen_malloc, y.__wbindgen_realloc), w = Q, b = y.wasmnetwork_add_datasource_from_config(this.__wbg_ptr, h, p, S, w);
        var _ = b[0], m = b[1];
        if (b[3]) throw _ = 0, m = 0, it(b[2]);
        return o = _, f = m, At(_, m);
      } finally {
        y.__wbindgen_free(o, f, 1);
      }
    }
    add_multi_layer_datasource(u, r, o, f, _, m, h, p) {
      let S, w;
      try {
        const A = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), R = Q, E = y.wasmnetwork_add_multi_layer_datasource(this.__wbg_ptr, A, R, r, o, f, _, m, h, p);
        var b = E[0], T = E[1];
        if (E[3]) throw b = 0, T = 0, it(E[2]);
        return S = b, w = T, At(b, T);
      } finally {
        y.__wbindgen_free(S, w, 1);
      }
    }
    add_place_cell_transformer(u, r, o, f, _) {
      let m, h;
      try {
        const p = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), S = Q, w = y.wasmnetwork_add_place_cell_transformer(this.__wbg_ptr, p, S, r, o, f, _);
        return m = w[0], h = w[1], At(w[0], w[1]);
      } finally {
        y.__wbindgen_free(m, h, 1);
      }
    }
    set_multiple_scalar_values(u, r) {
      const o = ui(u, y.__wbindgen_malloc), f = Q, _ = k_(r, y.__wbindgen_malloc), m = Q, h = y.wasmnetwork_set_multiple_scalar_values(this.__wbg_ptr, o, f, _, m);
      if (h[1]) throw it(h[0]);
    }
    add_persistence_transformer(u, r, o, f, _, m, h, p) {
      let S, w;
      try {
        const b = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), T = Q, A = y.wasmnetwork_add_persistence_transformer(this.__wbg_ptr, b, T, r, o, f, _, m, h, p);
        return S = A[0], w = A[1], At(A[0], A[1]);
      } finally {
        y.__wbindgen_free(S, w, 1);
      }
    }
    add_fixed_weight_transformer(u, r, o, f, _, m, h) {
      let p, S;
      try {
        const w = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), b = Q, T = y.wasmnetwork_add_fixed_weight_transformer(this.__wbg_ptr, w, b, r, o, f, _, m, h);
        return p = T[0], S = T[1], At(T[0], T[1]);
      } finally {
        y.__wbindgen_free(p, S, 1);
      }
    }
    connect_to_input_with_offset(u, r, o) {
      const f = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), _ = Q, m = J(r, y.__wbindgen_malloc, y.__wbindgen_realloc), h = Q, p = y.wasmnetwork_connect_to_input_with_offset(this.__wbg_ptr, f, _, m, h, o);
      if (p[1]) throw it(p[0]);
    }
    set_multiple_discrete_values(u, r) {
      const o = ui(u, y.__wbindgen_malloc), f = Q, _ = K_(r, y.__wbindgen_malloc), m = Q, h = y.wasmnetwork_set_multiple_discrete_values(this.__wbg_ptr, o, f, _, m);
      if (h[1]) throw it(h[0]);
    }
    add_periodic_cell_transformer(u, r, o, f, _, m, h, p, S) {
      let w, b;
      try {
        const T = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), A = Q, R = y.wasmnetwork_add_periodic_cell_transformer(this.__wbg_ptr, T, A, r, o, f, _, m, h, p, S);
        return w = R[0], b = R[1], At(R[0], R[1]);
      } finally {
        y.__wbindgen_free(w, b, 1);
      }
    }
    connect_to_context_with_offset(u, r, o) {
      const f = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), _ = Q, m = J(r, y.__wbindgen_malloc, y.__wbindgen_realloc), h = Q, p = y.wasmnetwork_connect_to_context_with_offset(this.__wbg_ptr, f, _, m, h, o);
      if (p[1]) throw it(p[0]);
    }
    set_multiple_classifier_labels(u, r) {
      const o = ui(u, y.__wbindgen_malloc), f = Q, _ = K_(r, y.__wbindgen_malloc), m = Q, h = y.wasmnetwork_set_multiple_classifier_labels(this.__wbg_ptr, o, f, _, m);
      if (h[1]) throw it(h[0]);
    }
    add_periodic_scalar_transformer(u, r, o, f, _, m, h, p) {
      let S, w;
      try {
        const b = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), T = Q, A = y.wasmnetwork_add_periodic_scalar_transformer(this.__wbg_ptr, b, T, r, o, f, _, m, h, p);
        return S = A[0], w = A[1], At(A[0], A[1]);
      } finally {
        y.__wbindgen_free(S, w, 1);
      }
    }
    add_tapering_weight_transformer(u, r, o, f, _, m, h) {
      let p, S;
      try {
        const w = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), b = Q, T = y.wasmnetwork_add_tapering_weight_transformer(this.__wbg_ptr, w, b, r, o, f, _, m, h);
        return p = T[0], S = T[1], At(T[0], T[1]);
      } finally {
        y.__wbindgen_free(p, S, 1);
      }
    }
    add_discrete_datasource_from_config(u, r) {
      let o, f;
      try {
        const h = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), p = Q, S = J(r, y.__wbindgen_malloc, y.__wbindgen_realloc), w = Q, b = y.wasmnetwork_add_discrete_datasource_from_config(this.__wbg_ptr, h, p, S, w);
        var _ = b[0], m = b[1];
        if (b[3]) throw _ = 0, m = 0, it(b[2]);
        return o = _, f = m, At(_, m);
      } finally {
        y.__wbindgen_free(o, f, 1);
      }
    }
    add_randomized_place_cell_transformer(u, r, o, f, _, m, h) {
      let p, S;
      try {
        const w = J(u, y.__wbindgen_malloc, y.__wbindgen_realloc), b = Q, T = y.wasmnetwork_add_randomized_place_cell_transformer(this.__wbg_ptr, w, b, r, o, f, _, m, h);
        return p = T[0], S = T[1], At(T[0], T[1]);
      } finally {
        y.__wbindgen_free(p, S, 1);
      }
    }
    constructor() {
      const u = y.wasmnetwork_new();
      return this.__wbg_ptr = u >>> 0, J_.register(this, this.__wbg_ptr, this), this;
    }
    build() {
      const u = y.wasmnetwork_build(this.__wbg_ptr);
      if (u[1]) throw it(u[0]);
    }
    execute(u) {
      const r = y.wasmnetwork_execute(this.__wbg_ptr, u);
      if (r[1]) throw it(r[0]);
    }
    rebuild() {
      const u = y.wasmnetwork_rebuild(this.__wbg_ptr);
      if (u[1]) throw it(u[0]);
    }
  };
  Symbol.dispose && ($_.prototype[Symbol.dispose] = $_.prototype.free);
  function sy() {
    return vi(function(c, u) {
      return c.call(u);
    }, arguments);
  }
  function ry() {
    return vi(function(c, u, r) {
      return c.call(u, r);
    }, arguments);
  }
  function fy(c) {
    return c.crypto;
  }
  function dy(c, u) {
    let r, o;
    try {
      r = c, o = u, console.error(At(c, u));
    } finally {
      y.__wbindgen_free(r, o, 1);
    }
  }
  function _y() {
    return vi(function(c, u) {
      c.getRandomValues(u);
    }, arguments);
  }
  function my(c) {
    return c.length;
  }
  function hy(c) {
    return c.msCrypto;
  }
  function by() {
    return new Error();
  }
  function yy(c, u) {
    return new Function(At(c, u));
  }
  function gy(c) {
    return new Uint8Array(c >>> 0);
  }
  function py(c) {
    return c.node;
  }
  function vy(c) {
    return c.process;
  }
  function wy(c, u, r) {
    Uint8Array.prototype.set.call(Ns(c, u), r);
  }
  function Sy() {
    return vi(function(c, u) {
      c.randomFillSync(u);
    }, arguments);
  }
  function xy() {
    return vi(function() {
      return module.require;
    }, arguments);
  }
  function Ty(c, u) {
    const r = u.stack, o = J(r, y.__wbindgen_malloc, y.__wbindgen_realloc), f = Q;
    bi().setInt32(c + 4, f, true), bi().setInt32(c + 0, o, true);
  }
  function Ay() {
    const c = typeof global > "u" ? null : global;
    return wi(c) ? 0 : _a(c);
  }
  function Ey() {
    const c = typeof globalThis > "u" ? null : globalThis;
    return wi(c) ? 0 : _a(c);
  }
  function zy() {
    const c = typeof self > "u" ? null : self;
    return wi(c) ? 0 : _a(c);
  }
  function My() {
    const c = typeof window > "u" ? null : window;
    return wi(c) ? 0 : _a(c);
  }
  function Oy(c, u, r) {
    return c.subarray(u >>> 0, r >>> 0);
  }
  function Dy(c) {
    return c.versions;
  }
  function Cy(c) {
    return typeof c == "function";
  }
  function Ny(c) {
    const u = c;
    return typeof u == "object" && u !== null;
  }
  function Ry(c) {
    return typeof c == "string";
  }
  function By(c) {
    return c === void 0;
  }
  function Uy(c, u) {
    const r = u, o = typeof r == "string" ? r : void 0;
    var f = wi(o) ? 0 : J(o, y.__wbindgen_malloc, y.__wbindgen_realloc), _ = Q;
    bi().setInt32(c + 4, _, true), bi().setInt32(c + 0, f, true);
  }
  function Hy(c, u) {
    throw new Error(At(c, u));
  }
  function Ly(c, u) {
    return At(c, u);
  }
  function jy(c, u) {
    return Ns(c, u);
  }
  function qy() {
    const c = y.__wbindgen_export_2, u = c.grow(4);
    c.set(0, void 0), c.set(u + 0, void 0), c.set(u + 1, null), c.set(u + 2, true), c.set(u + 3, false);
  }
  URL = globalThis.URL;
  const X = await ny({
    "./dcc_bundle_bg.js": {
      __wbg_new_8a6f238a6ece86ea: by,
      __wbg_stack_0ed75d68575b0f3c: Ty,
      __wbg_error_7534b8e9a36f1ab4: dy,
      __wbg_crypto_574e78ad8b13b65f: fy,
      __wbg_process_dc0fbacc7c1c06f7: vy,
      __wbg_versions_c01dfd4722a88165: Dy,
      __wbg_node_905d3e251edff8a2: py,
      __wbg_msCrypto_a61aeb35a24c1329: hy,
      __wbg_require_60cc747a6bc5215a: xy,
      __wbg_randomFillSync_ac0988aba3254290: Sy,
      __wbg_getRandomValues_b8f5dbd5f3995a9e: _y,
      __wbg_newnoargs_254190557c45b4ec: yy,
      __wbg_length_6bb7e81f9d7713e4: my,
      __wbg_prototypesetcall_3d4a26c1ed734349: wy,
      __wbg_newwithlength_a167dcc7aaa3ba77: gy,
      __wbg_subarray_70fd07feefe14294: Oy,
      __wbg_static_accessor_GLOBAL_THIS_f0a4409105898184: Ey,
      __wbg_call_13410aac570ffff7: sy,
      __wbg_static_accessor_SELF_995b214ae681ff99: zy,
      __wbg_static_accessor_GLOBAL_8921f820c2ce3f12: Ay,
      __wbg_static_accessor_WINDOW_cde3890479c675ea: My,
      __wbg_call_a5400b25a865cfd8: ry,
      __wbg_wbindgenstringget_0f16a6ddddef376f: Uy,
      __wbg_wbindgenthrow_451ec1a8469d7eb6: Hy,
      __wbg_wbindgenisobject_307a53c6bd97fbf8: Ny,
      __wbg_wbindgenisstring_d4fa939789f003b0: Ry,
      __wbg_wbindgenisfunction_8cee7dce3725ae74: Cy,
      __wbg_wbindgenisundefined_c4b71d073b92f3c5: By,
      __wbindgen_init_externref_table: qy,
      __wbindgen_cast_cb9088102bce6b30: jy,
      __wbindgen_cast_2241b6af4c4b2941: Ly
    }
  }, ly), Gy = X.memory, Xy = X.__wbg_wasmnetwork_free, Yy = X.analyze_mixed_encoder_configs, Qy = X.analyze_multi_encoder, Zy = X.analyze_multi_encoder_configs, Vy = X.analyze_periodic_encoder_configs, ky = X.analyze_periodic_scalar_multi_encoder, Ky = X.analyze_tapering_encoder, Jy = X.analyze_tapering_encoder_configs, $y = X.encode_scalar_fixed, Wy = X.encode_scalar_periodic, Fy = X.wasmnetwork_add_constant_datasource, Iy = X.wasmnetwork_add_context_learner, Py = X.wasmnetwork_add_datasource_from_config, tg = X.wasmnetwork_add_discrete_datasource_from_config, eg = X.wasmnetwork_add_discrete_transformer, lg = X.wasmnetwork_add_fixed_weight_transformer, ng = X.wasmnetwork_add_multi_layer_datasource, ag = X.wasmnetwork_add_pattern_classifier, ig = X.wasmnetwork_add_pattern_pooler, cg = X.wasmnetwork_add_periodic_cell_transformer, ug = X.wasmnetwork_add_periodic_scalar_transformer, og = X.wasmnetwork_add_persistence_transformer, sg = X.wasmnetwork_add_place_cell_transformer, rg = X.wasmnetwork_add_randomized_place_cell_transformer, fg = X.wasmnetwork_add_scalar_transformer, dg = X.wasmnetwork_add_sequence_learner, _g = X.wasmnetwork_add_sine_datasource, mg = X.wasmnetwork_add_square_datasource, hg = X.wasmnetwork_add_tapering_weight_transformer, bg = X.wasmnetwork_build, yg = X.wasmnetwork_connect_discrete_source, gg = X.wasmnetwork_connect_label_source, pg = X.wasmnetwork_connect_scalar_source, vg = X.wasmnetwork_connect_to_context, wg = X.wasmnetwork_connect_to_context_with_offset, Sg = X.wasmnetwork_connect_to_input, xg = X.wasmnetwork_connect_to_input_with_offset, Tg = X.wasmnetwork_encode_scalar, Ag = X.wasmnetwork_encode_scalars_batch, Eg = X.wasmnetwork_execute, zg = X.wasmnetwork_export_config, Mg = X.wasmnetwork_export_config_canonical, Og = X.wasmnetwork_get_all_block_outputs, Dg = X.wasmnetwork_get_anomaly, Cg = X.wasmnetwork_get_block_name, Ng = X.wasmnetwork_get_block_state, Rg = X.wasmnetwork_get_blocks_info, Bg = X.wasmnetwork_get_probabilities, Ug = X.wasmnetwork_get_scalar_value, Hg = X.wasmnetwork_get_state_canonical, Lg = X.wasmnetwork_get_state_json, jg = X.wasmnetwork_get_trace_json, qg = X.wasmnetwork_import_config, Gg = X.wasmnetwork_import_config_canonical, Xg = X.wasmnetwork_init_block, Yg = X.wasmnetwork_is_recording, Qg = X.wasmnetwork_new, Zg = X.wasmnetwork_num_blocks, Vg = X.wasmnetwork_place_cell_add_cell, kg = X.wasmnetwork_place_cell_num_bins, Kg = X.wasmnetwork_place_cell_remove_cell, Jg = X.wasmnetwork_remove_block, $g = X.wasmnetwork_remove_connection, Wg = X.wasmnetwork_set_classifier_label, Fg = X.wasmnetwork_set_discrete_value, Ig = X.wasmnetwork_set_multiple_classifier_labels, Pg = X.wasmnetwork_set_multiple_discrete_values, tp = X.wasmnetwork_set_multiple_scalar_values, ep = X.wasmnetwork_set_scalar_value, lp = X.wasmnetwork_start_recording, np = X.set_panic_hook, ap = X.wasmnetwork_rebuild, ip = X.__wbindgen_exn_store, cp = X.__externref_table_alloc, up = X.__wbindgen_export_2, op = X.__wbindgen_free, sp = X.__wbindgen_malloc, rp = X.__wbindgen_realloc, fp = X.__externref_table_dealloc, Nm = X.__wbindgen_start, dp = Object.freeze(Object.defineProperty({
    __proto__: null,
    __externref_table_alloc: cp,
    __externref_table_dealloc: fp,
    __wbg_wasmnetwork_free: Xy,
    __wbindgen_exn_store: ip,
    __wbindgen_export_2: up,
    __wbindgen_free: op,
    __wbindgen_malloc: sp,
    __wbindgen_realloc: rp,
    __wbindgen_start: Nm,
    analyze_mixed_encoder_configs: Yy,
    analyze_multi_encoder: Qy,
    analyze_multi_encoder_configs: Zy,
    analyze_periodic_encoder_configs: Vy,
    analyze_periodic_scalar_multi_encoder: ky,
    analyze_tapering_encoder: Ky,
    analyze_tapering_encoder_configs: Jy,
    encode_scalar_fixed: $y,
    encode_scalar_periodic: Wy,
    memory: Gy,
    set_panic_hook: np,
    wasmnetwork_add_constant_datasource: Fy,
    wasmnetwork_add_context_learner: Iy,
    wasmnetwork_add_datasource_from_config: Py,
    wasmnetwork_add_discrete_datasource_from_config: tg,
    wasmnetwork_add_discrete_transformer: eg,
    wasmnetwork_add_fixed_weight_transformer: lg,
    wasmnetwork_add_multi_layer_datasource: ng,
    wasmnetwork_add_pattern_classifier: ag,
    wasmnetwork_add_pattern_pooler: ig,
    wasmnetwork_add_periodic_cell_transformer: cg,
    wasmnetwork_add_periodic_scalar_transformer: ug,
    wasmnetwork_add_persistence_transformer: og,
    wasmnetwork_add_place_cell_transformer: sg,
    wasmnetwork_add_randomized_place_cell_transformer: rg,
    wasmnetwork_add_scalar_transformer: fg,
    wasmnetwork_add_sequence_learner: dg,
    wasmnetwork_add_sine_datasource: _g,
    wasmnetwork_add_square_datasource: mg,
    wasmnetwork_add_tapering_weight_transformer: hg,
    wasmnetwork_build: bg,
    wasmnetwork_connect_discrete_source: yg,
    wasmnetwork_connect_label_source: gg,
    wasmnetwork_connect_scalar_source: pg,
    wasmnetwork_connect_to_context: vg,
    wasmnetwork_connect_to_context_with_offset: wg,
    wasmnetwork_connect_to_input: Sg,
    wasmnetwork_connect_to_input_with_offset: xg,
    wasmnetwork_encode_scalar: Tg,
    wasmnetwork_encode_scalars_batch: Ag,
    wasmnetwork_execute: Eg,
    wasmnetwork_export_config: zg,
    wasmnetwork_export_config_canonical: Mg,
    wasmnetwork_get_all_block_outputs: Og,
    wasmnetwork_get_anomaly: Dg,
    wasmnetwork_get_block_name: Cg,
    wasmnetwork_get_block_state: Ng,
    wasmnetwork_get_blocks_info: Rg,
    wasmnetwork_get_probabilities: Bg,
    wasmnetwork_get_scalar_value: Ug,
    wasmnetwork_get_state_canonical: Hg,
    wasmnetwork_get_state_json: Lg,
    wasmnetwork_get_trace_json: jg,
    wasmnetwork_import_config: qg,
    wasmnetwork_import_config_canonical: Gg,
    wasmnetwork_init_block: Xg,
    wasmnetwork_is_recording: Yg,
    wasmnetwork_new: Qg,
    wasmnetwork_num_blocks: Zg,
    wasmnetwork_place_cell_add_cell: Vg,
    wasmnetwork_place_cell_num_bins: kg,
    wasmnetwork_place_cell_remove_cell: Kg,
    wasmnetwork_rebuild: ap,
    wasmnetwork_remove_block: Jg,
    wasmnetwork_remove_connection: $g,
    wasmnetwork_set_classifier_label: Wg,
    wasmnetwork_set_discrete_value: Fg,
    wasmnetwork_set_multiple_classifier_labels: Ig,
    wasmnetwork_set_multiple_discrete_values: Pg,
    wasmnetwork_set_multiple_scalar_values: tp,
    wasmnetwork_set_scalar_value: ep,
    wasmnetwork_start_recording: lp
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  ay(dp);
  Nm();
  pn = {
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
  _p = function(c) {
    const u = [], r = (_, m) => {
      const h = u.length;
      return u.push({
        expr: _,
        display: m
      }), `@@MATH${h}@@`;
    };
    let o = c.replace(/\$\$([\s\S]+?)\$\$/g, (_, m) => r(m, true));
    o = o.replace(/\$([^$\n]+?)\$/g, (_, m) => r(m, false));
    let f = db.parse(o, {
      async: false
    });
    return f = f.replace(/@@MATH(\d+)@@/g, (_, m) => {
      const h = u[Number(m)];
      if (!h) return "";
      try {
        return _b.renderToString(h.expr, {
          throwOnError: false,
          displayMode: h.display
        });
      } catch {
        return h.expr;
      }
    }), f;
  };
  let gn = null;
  function mp() {
    if (gn) return gn;
    const c = document.createElement("div");
    return c.className = "help-popover", c.style.display = "none", document.body.appendChild(c), gn = c, c;
  }
  function Ms() {
    gn && (gn.style.display = "none");
  }
  function W_(c, u) {
    const r = pn[u];
    if (!r) return;
    const o = mp();
    o.replaceChildren();
    const f = document.createElement("div");
    f.className = "help-popover-title", f.textContent = r.title;
    const _ = document.createElement("div");
    _.className = "help-popover-short", _.textContent = r.short;
    const m = document.createElement("button");
    m.type = "button", m.className = "help-popover-more", m.textContent = "Learn more \u2192", m.addEventListener("click", (w) => {
      w.preventDefault(), Ms(), Us(u);
    }), o.append(f, _, m), o.style.display = "block";
    const h = c.getBoundingClientRect(), p = o.offsetWidth || 260;
    let S = h.left;
    S + p > window.innerWidth - 8 && (S = window.innerWidth - p - 8), S < 8 && (S = 8), o.style.left = `${S}px`, o.style.top = `${h.bottom + 6}px`;
  }
  $1 = function(c) {
    if (!pn[c]) {
      const _ = document.createElement("span");
      return _.style.display = "none", _;
    }
    const u = document.createElement("button");
    u.type = "button", u.className = "info-icon", u.textContent = "\u24D8", u.tabIndex = 0, u.setAttribute("aria-label", `Help: ${pn[c].title}`), u.dataset.helpKey = c;
    let r = null;
    const o = () => {
      r && (clearTimeout(r), r = null);
    }, f = () => {
      o(), r = setTimeout(Ms, 120);
    };
    return u.addEventListener("pointerenter", () => {
      o(), W_(u, c);
    }), u.addEventListener("focus", () => {
      o(), W_(u, c);
    }), u.addEventListener("pointerleave", f), u.addEventListener("blur", f), u.addEventListener("click", (_) => {
      _.preventDefault(), _.stopPropagation(), Ms(), Us(c);
    }), u;
  };
  let Sl = null, $e = null, yi = null, gi = false, Rs = null, sa = null;
  function hp(c) {
    const u = Rs;
    if (!u) return true;
    if (c.startsWith("encoderType.") || c.startsWith("param.")) return u.encoderPanel && u.encoderCards && u.encoderControls;
    if (c.startsWith("subplot.")) {
      if (u.plotControls) return true;
      if (!u.plotPanel) return false;
      const r = c.slice(8);
      return sa ? sa.has(r) : true;
    }
    switch (c) {
      case "control.presets":
        return u.demoSelector;
      case "control.viewBounds":
        return u.viewportRange;
      case "control.scalarSlider":
        return u.cursorSlider;
      case "control.bitsPanel":
        return u.bitPanels;
      case "control.add":
      case "control.reset":
        return u.addRemoveEncoders && u.encoderPanel;
      default:
        return true;
    }
  }
  function Rm() {
    gi && (document.removeEventListener("keydown", Bs), Sl == null ? void 0 : Sl.remove(), $e == null ? void 0 : $e.remove(), Sl = $e = yi = null, gi = false);
  }
  W1 = function(c) {
    Rs = c, Rm();
  };
  F1 = function(c) {
    const u = [
      ...c
    ].sort().join(","), r = sa ? [
      ...sa
    ].sort().join(",") : null;
    u !== r && (sa = new Set(c), Rm());
  };
  const bp = [
    {
      heading: "Encoder types",
      prefix: "encoderType."
    },
    {
      heading: "Parameters",
      prefix: "param."
    },
    {
      heading: "Subplots",
      prefix: "subplot."
    },
    {
      heading: "Controls",
      prefix: "control."
    }
  ], Bm = (c) => `help-sec-${c.replace(/\./g, "-")}`;
  function yp() {
    if (gi) return;
    const c = document.createElement("div");
    c.className = "help-backdrop", c.style.display = "none", c.addEventListener("click", Os);
    const u = document.createElement("div");
    u.className = "help-drawer", u.style.display = "none", u.setAttribute("role", "dialog"), u.setAttribute("aria-label", "Help");
    const r = document.createElement("div");
    r.className = "help-drawer-header";
    const o = document.createElement("span");
    o.textContent = "Help & Reference";
    const f = document.createElement("button");
    f.type = "button", f.className = "help-drawer-close", f.setAttribute("aria-label", "Close help"), f.textContent = "\u2715", f.addEventListener("click", Os), r.append(o, f);
    const _ = document.createElement("div");
    _.className = "help-drawer-body";
    const m = document.createElement("p");
    m.className = "help-ai-disclaimer", m.setAttribute("role", "note"), m.innerHTML = "<strong>NOTE:</strong> This text is partially generated with AI from hand-written documentation and research notes.", _.appendChild(m);
    for (const h of bp) {
      const p = Object.keys(pn).filter((w) => w.startsWith(h.prefix) && hp(w));
      if (p.length === 0) continue;
      const S = document.createElement("h2");
      S.className = "help-group-heading", S.textContent = h.heading, _.appendChild(S);
      for (const w of p) {
        const b = pn[w], T = document.createElement("section");
        T.className = "help-section", T.id = Bm(w);
        const A = document.createElement("h3");
        A.textContent = b.title;
        const R = document.createElement("div");
        R.className = "help-section-body", R.innerHTML = _p(b.body), T.append(A, R), _.appendChild(T);
      }
    }
    u.append(r, _), document.body.append(c, u), Sl = c, $e = u, yi = _, gi = true, document.addEventListener("keydown", Bs);
  }
  function Bs(c) {
    c.key === "Escape" && $e && $e.style.display !== "none" && Os();
  }
  function Us(c) {
    if (yp(), !(!$e || !Sl || !yi)) if (Sl.style.display = "block", $e.style.display = "flex", c) {
      const u = document.getElementById(Bm(c));
      u && (u.scrollIntoView({
        block: "start"
      }), u.classList.remove("help-flash"), u.offsetWidth, u.classList.add("help-flash"));
    } else yi.scrollTop = 0;
  }
  function Os() {
    Sl && (Sl.style.display = "none"), $e && ($e.style.display = "none");
  }
  I1 = function() {
    const c = document.createElement("button");
    return c.type = "button", c.id = "help-open-btn", c.className = "help-open-btn", c.textContent = "Help", c.setAttribute("aria-label", "Open help and reference"), c.addEventListener("click", () => Us()), c;
  };
  P1 = function() {
    document.removeEventListener("keydown", Bs), gn == null ? void 0 : gn.remove(), Sl == null ? void 0 : Sl.remove(), $e == null ? void 0 : $e.remove(), gn = Sl = $e = yi = null, gi = false, Rs = null, sa = null;
  };
  const gp = zs, pp = Qb, F_ = gp, ps = [
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
  Um = function(c) {
    const u = ps.length - 1, r = Math.max(0, Math.min(1, c)) * u, o = Math.floor(r), f = Math.min(o + 1, u), _ = r - o, [m, h, p] = ps[o], [S, w, b] = ps[f], T = Math.round(m + (S - m) * _), A = Math.round(h + (w - h) * _), R = Math.round(p + (b - p) * _);
    return `rgb(${T},${A},${R})`;
  };
  let vp, wp, Sp;
  I_ = [
    "bins",
    "per-bin",
    "similarity",
    "bits-by-data",
    "projected-similarity",
    "decomposition",
    "similarity-heatmap",
    "features"
  ];
  P_ = {
    bins: "Bins",
    "per-bin": "Per-Bin View",
    similarity: "Input Similarity",
    "bits-by-data": "Codes",
    "projected-similarity": "Self-Similarity",
    decomposition: "Regions",
    "similarity-heatmap": "Similarity Heatmap",
    features: "Crossings"
  };
  tv = {
    bins: "\u25A4",
    "per-bin": "\u25F4",
    similarity: "\u223F",
    "bits-by-data": "\u283F",
    "projected-similarity": "\u25A6",
    decomposition: "\u25A3",
    "similarity-heatmap": "\u25A8",
    features: "\u2573"
  };
  vp = "#cccccc";
  wp = 0;
  Sp = 0.3;
  function tm(c) {
    const u = parseInt(c.slice(1), 16);
    return [
      u >> 16 & 255,
      u >> 8 & 255,
      u & 255
    ];
  }
  function em(c, u, r) {
    const [o, f, _] = tm(c), [m, h, p] = tm(u), S = (A) => Math.max(0, Math.min(255, Math.round(A))), w = S(o + (m - o) * r), b = S(f + (h - f) * r), T = S(_ + (p - _) * r);
    return `#${w.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}${T.toString(16).padStart(2, "0")}`;
  }
  function $l(c, u) {
    return {
      bg: c,
      border: u,
      mutedBg: em(vp, c, wp),
      titleColor: em(c, "#000000", Sp)
    };
  }
  let oi, si, ri, xp;
  Hm = {
    bins: $l("#a8c8e8", "#6898c0"),
    "per-bin": $l("#a8e0d0", "#4faf95"),
    similarity: $l("#a8d8b4", "#5a9e72"),
    "bits-by-data": $l("#c8b8e8", "#8868c0"),
    "projected-similarity": $l("#e8d0a8", "#b89060"),
    decomposition: $l("#e8a8a8", "#c06060"),
    "similarity-heatmap": $l("#f0c070", "#c08030"),
    features: $l("#d4e8a8", "#7aaa40")
  };
  ev = 0;
  oi = (c, u) => ({
    type: "interval-fixed",
    n: c,
    w: u,
    lower_bound: 0,
    upper_bound: 1
  });
  si = (c, u) => ({
    type: "interval-tapering",
    n: c,
    w: u,
    lower_bound: 0,
    upper_bound: 1
  });
  ri = (c, u, r = 1) => ({
    type: "periodic-fixed",
    n: c,
    w: u,
    lower_bound: 0,
    upper_bound: 1,
    period: r
  });
  xp = (c, u, r, o = 0.4) => ({
    type: "periodic-cell",
    n: c,
    w: 1,
    lower_bound: 0,
    upper_bound: 1,
    min_period: u,
    max_period: r,
    l_frac: o
  });
  lv = [
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
      ].map((c) => oi(c, 1)),
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
      ].map((c) => oi(c, 2)),
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
      ].map((c) => oi(c, 1)),
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
      ].map((c) => oi(c, 2)),
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
      ].map((c) => si(c, 2)),
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
      ].map((c) => si(c, 3)),
      viewBounds: "-1.0,2.0",
      view: "bins-only"
    },
    {
      label: "TaperingWeight: w=2, powers of 2",
      encoders: [
        4,
        8,
        16
      ].map((c) => si(c, 2)),
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
      ].map((c) => si(c, 3)),
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
      ].map((c) => ri(c, 1)),
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
      ].map((c) => ri(c, 2)),
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
      ].map((c) => ri(c, 1)),
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
      ].map((c) => ri(c, 2)),
      viewBounds: "-1.0,2.0",
      view: "bins-only"
    },
    {
      label: "Mixed: interval-fixed + tapering + periodic",
      encoders: [
        oi(7, 2),
        si(11, 3),
        ri(13, 2, 1)
      ],
      viewBounds: "-1.0,2.0",
      view: "bins-only"
    },
    {
      label: "PeriodicCell: n=8, period 0.2-0.6",
      encoders: [
        xp(8, 0.2, 0.6, 0.4)
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
  ];
  lm = 2;
  Tp = 10;
  nv = 0;
  av = 0;
  iv = 12;
  cv = 4;
  uv = 2;
  ov = 20;
  sv = [
    "2",
    "20"
  ];
  rv = -5;
  fv = 6;
  Ap = [
    -1,
    2
  ];
  dv = 0.01;
  _v = 0.01;
  mv = 11;
  hv = 0.01;
  bv = 0.2;
  yv = 0.6;
  gv = 0.01;
  pv = 1;
  vv = 0.01;
  wv = 0.4;
  Lm = "#0064a3";
  Ep = "rgba(0,100,163,0.25)";
  zp = 30;
  Mp = 30;
  Sv = 22;
  xv = 10;
  Tv = 8;
  nm = 0.025;
  am = 0.02;
  Op = 0.06;
  Dp = 0.95;
  Cp = 0.5;
  Np = 0.3;
  Rp = 0.12;
  Bp = 0.8;
  Up = 0.25;
  im = 8;
  vs = 11;
  Hp = 280;
  Lp = "#5a9de0";
  jm = "rgba(80,80,80,0.7)";
  jp = "#111111";
  qp = "#dddddd";
  Av = 32;
  Ev = 14;
  zv = {
    1: 22,
    2: 19,
    3: 14
  };
  Mv = 10;
  Ov = "#fff";
  Dv = "#fff";
  Cv = "#333";
  Nv = "#4a90d9";
  Rv = [
    -1,
    2
  ];
  Bv = {
    "bits-by-data": [
      -0.5,
      9.5
    ]
  };
  eu = function(c) {
    return F_[c % F_.length];
  };
  Pc = pp;
  Gp = function(c, u) {
    const r = parseInt(c.slice(1, 3), 16), o = parseInt(c.slice(3, 5), 16), f = parseInt(c.slice(5, 7), 16);
    return `rgba(${r},${o},${f},${u})`;
  };
  qm = function(c, u) {
    return c.map((r) => r.reduce((o, f, _) => o + f * u[_], 0));
  };
  fa = function(c, u) {
    for (let r = 0; r < c.length - 1; r++) if (u >= c[r] && u < c[r + 1]) return r;
    return c.length - 2;
  };
  Xp = function(c, u, r) {
    return c.map((o) => {
      const f = o.bins ?? [], _ = o.bin_width ?? (o.n_bits > 0 ? (o.upper_bound - o.lower_bound) / o.n_bits : 0), m = typeof o.w == "number" ? o.w : r, h = m * _, p = f.filter((E) => !E.is_congruent), S = p.length || 1;
      let w, b;
      if (u) {
        const E = [];
        w = [];
        const L = f.some((st) => st.is_congruent) && S % m !== 0 ? S % m : 0, $ = S - L;
        for (let st = 0; st < $; st++) {
          const Ut = p[st], Nt = typeof Ut.upper == "number" ? Ut.upper : Ut.lower + h;
          let P = 0;
          for (; P < E.length && E[P] > Ut.lower + 1e-9; ) P++;
          P >= E.length && E.push(-1 / 0), E[P] = Nt, w.push(P);
        }
        const nt = E.length;
        for (let st = 0; st < L; st++) w.push(nt + st);
        b = E.length + L || 1;
      } else w = p.map((E, B) => B), b = S;
      const T = new Array(f.length);
      let A = 0, R = 0;
      return f.forEach((E, B) => {
        typeof E.bin_index == "number" ? T[B] = E.bin_index : E.is_congruent ? T[B] = R++ % S : T[B] = A++;
      }), {
        nRows: b,
        nPrimary: S,
        primaryRows: w,
        primaryIndices: T,
        expandedWidth: h
      };
    });
  };
  Yp = function(c) {
    const u = Math.min(...c.sub_encoders.map((o) => o.view_lower_bound ?? o.lower_bound)), r = Math.max(...c.sub_encoders.map((o) => o.view_upper_bound ?? o.upper_bound));
    return [
      isFinite(u) ? u : c.boundaries[0] ?? 0,
      isFinite(r) ? r : c.boundaries[c.boundaries.length - 1] ?? 1
    ];
  };
  Qp = function(c) {
    const r = c.map((m) => m.nRows * 1), o = r.reduce((m, h) => m + h, 0) || 1, f = [];
    let _ = o;
    for (const m of r) _ -= m, f.push(_);
    return {
      yBases: f,
      encHeights: r,
      totalHeight: o
    };
  };
  const ws = "#1d9e75", kc = "#0f6e56", cm = "#e3f2ec", um = "#9bc9b8", Ss = "#185fa5", xs = "#1e1e1e", Zp = "#d8d6cd";
  function Vp(c, u, r, o, f, _) {
    let m = false;
    for (const h of c) if (h.bin_index === u && (m = true, _ >= h.lower && _ <= h.upper)) return true;
    return m ? false : o > 0 ? ((_ - r) % o + o) % o < f : false;
  }
  function kp(c, u, r) {
    const o = (c.bins ?? []).filter((_) => _.bin_index === u).map((_) => _.lower).sort((_, m) => _ - m);
    let f = 1 / 0;
    for (let _ = 1; _ < o.length; _++) {
      const m = o[_] - o[_ - 1];
      m > 1e-9 && m < f && (f = m);
    }
    return Number.isFinite(f) ? f : typeof c.period == "number" && c.period > 0 ? c.period : typeof c.bin_width == "number" && c.bin_width > 0 ? c.bin_width : r > 0 ? r / 0.4 : 0;
  }
  om = function(c, u, r) {
    const o = [];
    for (const f of c.sub_encoders ?? []) {
      const _ = f.type ?? "", m = _.startsWith("periodic") || !_ && (typeof f.period == "number" || (f.bins ?? []).some((b) => b.is_congruent)), h = (r == null ? void 0 : r[f.encoder_idx]) ?? eu(f.encoder_idx), p = f.primary_bins && f.primary_bins.length ? f.primary_bins : (f.bins ?? []).filter((b) => !b.is_congruent);
      if (!m) {
        p.forEach((b, T) => {
          const A = b.upper - b.lower, R = u >= b.lower && u <= b.upper;
          o.push({
            value: [
              0,
              0
            ],
            kind: "interval",
            label: String((b.bin_index ?? T) + 1),
            fire: R,
            encColor: h,
            cursorFrac: R && A > 0 ? Math.max(0, Math.min(1, (u - b.lower) / A)) : null
          });
        });
        continue;
      }
      const S = p.map((b, T) => {
        const A = b.upper - b.lower, R = kp(f, b.bin_index ?? T, A), E = b.bin_index ?? T;
        return {
          p: b,
          k: T,
          l: A,
          T: R,
          binIdx: E,
          fire: Vp(f.bins ?? [], E, b.lower, R, A, u)
        };
      }), w = Math.max(1e-9, ...S.map((b) => b.T));
      for (const b of S) {
        const T = b.T > 0 ? Math.max(0, Math.min(360, b.l / b.T * 360)) : 0, A = b.T > 0 ? ((u - b.p.lower) % b.T + b.T) % b.T / b.T * 360 : null;
        o.push({
          value: [
            0,
            0
          ],
          kind: "dial",
          label: String(b.binIdx + 1),
          fire: b.fire,
          encColor: h,
          rFrac: Math.max(0.35, b.T / w),
          spanDeg: T,
          handDeg: A
        });
      }
    }
    return o;
  };
  Kp = function(c) {
    const u = (o, f, _, m) => {
      const h = m * Math.PI / 180;
      return [
        o + _ * Math.sin(h),
        f - _ * Math.cos(h)
      ];
    }, r = (o, f, _, m, h) => {
      const p = Math.max(2, Math.ceil(Math.abs(h - m) / 6)), S = [];
      for (let w = 0; w <= p; w++) S.push(u(o, f, _, m + (h - m) * w / p));
      return S;
    };
    return (o, f) => {
      const _ = c(), m = _[o.dataIndex];
      if (!m) return {
        type: "group",
        children: []
      };
      const h = _.length, p = f.coord([
        0,
        1
      ]), S = f.coord([
        1,
        0
      ]), w = p[0], b = p[1], T = S[0] - p[0], A = S[1] - p[1];
      if (T <= 0 || A <= 0) return {
        type: "group",
        children: []
      };
      let R = 1, E = 0;
      for (let gt = 1; gt <= h; gt++) {
        const bt = Math.ceil(h / gt), xt = Math.min(T / gt, A / bt);
        xt > E && (E = xt, R = gt);
      }
      const B = Math.ceil(h / R), L = T / R, $ = A / B, nt = Math.floor(o.dataIndex / R), st = o.dataIndex % R, Ut = nt === B - 1 ? h - (B - 1) * R : R, Nt = (R - Ut) * L / 2, P = Math.max(2, Math.min(L, $) * 0.92), rt = w + Nt + st * L + (L - P) / 2, Ht = b + nt * $ + ($ - P) / 2, ae = P >= 10, ie = m.fire ? kc : m.encColor, St = [
        {
          type: "rect",
          shape: {
            x: rt,
            y: Ht,
            width: P,
            height: P,
            r: Math.max(1, P * 0.07)
          },
          style: {
            fill: "transparent",
            stroke: m.fire ? ws : Zp,
            lineWidth: m.fire ? 1.4 : 0.8
          }
        }
      ];
      if (m.kind === "interval") {
        ae && St.push({
          type: "text",
          style: {
            x: rt + P / 2,
            y: Ht + P * 0.36,
            text: m.label,
            textAlign: "center",
            textVerticalAlign: "middle",
            fontSize: Math.max(8, Math.round(P * 0.46)),
            fontWeight: "bold",
            fill: ie
          }
        });
        const gt = P * 0.1, bt = rt + gt, xt = rt + P - gt, C = xt - bt, q = Ht + P * 0.74, j = Math.max(2, P * 0.11);
        St.push({
          type: "rect",
          shape: {
            x: bt,
            y: q,
            width: C,
            height: j,
            r: Math.max(1, j * 0.3)
          },
          style: {
            fill: m.fire ? ws : cm,
            opacity: m.fire ? 0.9 : 1,
            stroke: m.fire ? kc : um,
            lineWidth: 1.2
          }
        });
        for (const G of [
          bt,
          xt
        ]) St.push({
          type: "line",
          shape: {
            x1: G,
            y1: q - j * 0.4,
            x2: G,
            y2: q + j * 1.4
          },
          style: {
            stroke: xs,
            lineWidth: 1
          }
        });
        if (m.fire && m.cursorFrac != null) {
          const G = bt + m.cursorFrac * C;
          St.push({
            type: "line",
            shape: {
              x1: G,
              y1: q - j,
              x2: G,
              y2: q + j * 2
            },
            style: {
              stroke: Ss,
              lineWidth: 2,
              lineCap: "round"
            }
          }, {
            type: "circle",
            shape: {
              cx: G,
              cy: q - j,
              r: Math.max(1.6, P * 0.05)
            },
            style: {
              fill: Ss
            }
          });
        }
      } else {
        ae && St.push({
          type: "text",
          style: {
            x: rt + P * 0.07,
            y: Ht + P * 0.05,
            text: m.label,
            textAlign: "left",
            textVerticalAlign: "top",
            fontSize: Math.max(6, Math.round(P * 0.15)),
            fontWeight: "bold",
            fill: ie
          }
        });
        const gt = rt + P / 2, bt = Ht + P * (ae ? 0.55 : 0.5), xt = Math.max(4, P * 0.4) * (m.rFrac ?? 1);
        St.push({
          type: "circle",
          shape: {
            cx: gt,
            cy: bt,
            r: xt
          },
          style: {
            fill: "#ffffff",
            stroke: "#bdbbb1",
            lineWidth: 1.2
          }
        });
        const C = m.spanDeg ?? 0;
        if (C > 0.5) {
          const _t = r(gt, bt, xt, 0, C);
          St.push({
            type: "polygon",
            shape: {
              points: [
                [
                  gt,
                  bt
                ],
                ..._t
              ]
            },
            style: {
              fill: m.fire ? ws : cm,
              opacity: m.fire ? 0.85 : 1,
              stroke: m.fire ? kc : um,
              lineWidth: 1.2
            }
          });
        }
        const [q, j] = u(gt, bt, xt, 0), [G, K] = u(gt, bt, xt + Math.max(2, P * 0.07), 0);
        if (St.push({
          type: "line",
          shape: {
            x1: q,
            y1: j,
            x2: G,
            y2: K
          },
          style: {
            stroke: xs,
            lineWidth: 1.5,
            lineCap: "round"
          }
        }), m.handDeg != null) {
          const [_t, et] = u(gt, bt, xt * 0.9, m.handDeg), I = m.fire ? kc : Ss;
          St.push({
            type: "line",
            shape: {
              x1: gt,
              y1: bt,
              x2: _t,
              y2: et
            },
            style: {
              stroke: I,
              lineWidth: m.fire ? 2.2 : 1.8,
              lineCap: "round"
            }
          }, {
            type: "circle",
            shape: {
              cx: _t,
              cy: et,
              r: Math.max(1.4, P * 0.045)
            },
            style: {
              fill: I
            }
          }, {
            type: "circle",
            shape: {
              cx: gt,
              cy: bt,
              r: Math.max(1.2, P * 0.035)
            },
            style: {
              fill: xs
            }
          });
        }
      }
      return {
        type: "group",
        children: St,
        emphasis: {
          disabled: true
        }
      };
    };
  };
  const sm = (c) => {
    let u;
    const r = /* @__PURE__ */ new Set(), o = (S, w) => {
      const b = typeof S == "function" ? S(u) : S;
      if (!Object.is(b, u)) {
        const T = u;
        u = w ?? (typeof b != "object" || b === null) ? b : Object.assign({}, u, b), r.forEach((A) => A(u, T));
      }
    }, f = () => u, h = {
      setState: o,
      getState: f,
      getInitialState: () => p,
      subscribe: (S) => (r.add(S), () => r.delete(S))
    }, p = u = c(o, f, h);
    return h;
  }, Jp = ((c) => c ? sm(c) : sm), $p = (c) => c;
  function Wp(c, u = $p) {
    const r = qc.useSyncExternalStore(c.subscribe, qc.useCallback(() => u(c.getState()), [
      c,
      u
    ]), qc.useCallback(() => u(c.getInitialState()), [
      c,
      u
    ]));
    return qc.useDebugValue(r), r;
  }
  let rm, fm, pi, Kc, Fp, Ip, Pp, t1, Ts, l1, n1, a1, i1, dm, c1;
  rm = (c) => {
    const u = Jp(c), r = (o) => Wp(u, o);
    return Object.assign(r, u), r;
  };
  Gm = ((c) => c ? rm(c) : rm);
  fm = {
    BASE_URL: "./",
    DEV: false,
    MODE: "production",
    PROD: true,
    SSR: false
  };
  pi = /* @__PURE__ */ new Map();
  Kc = (c) => {
    const u = pi.get(c);
    return u ? Object.fromEntries(Object.entries(u.stores).map(([r, o]) => [
      r,
      o.getState()
    ])) : {};
  };
  Fp = (c, u, r) => {
    if (c === void 0) return {
      type: "untracked",
      connection: u.connect(r)
    };
    const o = pi.get(r.name);
    if (o) return {
      type: "tracked",
      store: c,
      ...o
    };
    const f = {
      connection: u.connect(r),
      stores: {}
    };
    return pi.set(r.name, f), {
      type: "tracked",
      store: c,
      ...f
    };
  };
  Ip = (c, u) => {
    if (u === void 0) return;
    const r = pi.get(c);
    r && (delete r.stores[u], Object.keys(r.stores).length === 0 && pi.delete(c));
  };
  Pp = (c) => {
    var u, r;
    if (!c) return;
    const o = c.split(`
`), f = o.findIndex((m) => m.includes("api.setState"));
    if (f < 0) return;
    const _ = ((u = o[f + 1]) == null ? void 0 : u.trim()) || "";
    return (r = /.+ (.+) .+/.exec(_)) == null ? void 0 : r[1];
  };
  t1 = (c, u = {}) => (r, o, f) => {
    const { enabled: _, anonymousActionType: m, store: h, ...p } = u;
    let S;
    try {
      S = (_ ?? (fm ? "production" : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
    } catch {
    }
    if (!S) return c(r, o, f);
    const { connection: w, ...b } = Fp(h, S, p);
    let T = true;
    f.setState = ((E, B, L) => {
      const $ = r(E, B);
      if (!T) return $;
      const nt = L === void 0 ? {
        type: m || Pp(new Error().stack) || "anonymous"
      } : typeof L == "string" ? {
        type: L
      } : L;
      return h === void 0 ? (w == null ? void 0 : w.send(nt, o()), $) : (w == null ? void 0 : w.send({
        ...nt,
        type: `${h}/${nt.type}`
      }, {
        ...Kc(p.name),
        [h]: f.getState()
      }), $);
    }), f.devtools = {
      cleanup: () => {
        w && typeof w.unsubscribe == "function" && w.unsubscribe(), Ip(p.name, h);
      }
    };
    const A = (...E) => {
      const B = T;
      T = false, r(...E), T = B;
    }, R = c(f.setState, o, f);
    if (b.type === "untracked" ? w == null ? void 0 : w.init(R) : (b.stores[b.store] = f, w == null ? void 0 : w.init(Object.fromEntries(Object.entries(b.stores).map(([E, B]) => [
      E,
      E === b.store ? R : B.getState()
    ])))), f.dispatchFromDevtools && typeof f.dispatch == "function") {
      let E = false;
      const B = f.dispatch;
      f.dispatch = (...L) => {
        (fm ? "production" : void 0) !== "production" && L[0].type === "__setState" && !E && (console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'), E = true), B(...L);
      };
    }
    return w.subscribe((E) => {
      var B;
      switch (E.type) {
        case "ACTION":
          if (typeof E.payload != "string") {
            console.error("[zustand devtools middleware] Unsupported action format");
            return;
          }
          return Ts(E.payload, (L) => {
            if (L.type === "__setState") {
              if (h === void 0) {
                A(L.state);
                return;
              }
              Object.keys(L.state).length !== 1 && console.error(`
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);
              const $ = L.state[h];
              if ($ == null) return;
              JSON.stringify(f.getState()) !== JSON.stringify($) && A($);
              return;
            }
            f.dispatchFromDevtools && typeof f.dispatch == "function" && f.dispatch(L);
          });
        case "DISPATCH":
          switch (E.payload.type) {
            case "RESET":
              return A(R), h === void 0 ? w == null ? void 0 : w.init(f.getState()) : w == null ? void 0 : w.init(Kc(p.name));
            case "COMMIT":
              if (h === void 0) {
                w == null ? void 0 : w.init(f.getState());
                return;
              }
              return w == null ? void 0 : w.init(Kc(p.name));
            case "ROLLBACK":
              return Ts(E.state, (L) => {
                if (h === void 0) {
                  A(L), w == null ? void 0 : w.init(f.getState());
                  return;
                }
                A(L[h]), w == null ? void 0 : w.init(Kc(p.name));
              });
            case "JUMP_TO_STATE":
            case "JUMP_TO_ACTION":
              return Ts(E.state, (L) => {
                if (h === void 0) {
                  A(L);
                  return;
                }
                JSON.stringify(f.getState()) !== JSON.stringify(L[h]) && A(L[h]);
              });
            case "IMPORT_STATE": {
              const { nextLiftedState: L } = E.payload, $ = (B = L.computedStates.slice(-1)[0]) == null ? void 0 : B.state;
              if (!$) return;
              A(h === void 0 ? $ : $[h]), w == null ? void 0 : w.send(null, L);
              return;
            }
            case "PAUSE_RECORDING":
              return T = !T;
          }
          return;
      }
    }), R;
  };
  e1 = t1;
  Ts = (c, u) => {
    let r;
    try {
      r = JSON.parse(c);
    } catch (o) {
      console.error("[zustand devtools middleware] Could not parse the received json", o);
    }
    r !== void 0 && u(r);
  };
  l1 = [
    {
      type: "interval-fixed",
      n: 13,
      w: 1,
      lower_bound: 0,
      upper_bound: 1
    }
  ];
  n1 = {
    encoders: l1,
    viewBounds: [
      ...Ap
    ],
    subplots: [
      "bins",
      "per-bin"
    ],
    stackedOrder: [
      ...I_
    ],
    stackedActive: [
      ...I_
    ],
    subplotParams: {},
    refPoints: [],
    scalarCursor: 0.5,
    lastData: null,
    analyzing: false,
    analysisError: null
  };
  de = Gm()(e1((c, u) => ({
    ...n1,
    setEncoders: (r) => c({
      encoders: r
    }),
    addEncoder: (r) => c((o) => o.encoders.length >= Tp ? o : {
      encoders: [
        ...o.encoders,
        r
      ]
    }),
    removeEncoder: (r) => c((o) => o.encoders.length <= 1 ? o : {
      encoders: o.encoders.filter((f, _) => _ !== r)
    }),
    updateEncoder: (r, o) => c((f) => ({
      encoders: f.encoders.map((_, m) => m === r ? {
        ..._,
        ...o
      } : _)
    })),
    setViewBounds: (r) => c((o) => o.viewBounds[0] === r[0] && o.viewBounds[1] === r[1] ? {} : {
      viewBounds: r
    }),
    setSubplots: (r) => c({
      subplots: r
    }),
    toggleSubplot: (r) => c((o) => ({
      subplots: o.subplots.includes(r) ? o.subplots.filter((f) => f !== r) : [
        ...o.subplots,
        r
      ]
    })),
    setStackedActive: (r) => c({
      stackedActive: r
    }),
    toggleStackedSubplot: (r) => c((o) => ({
      stackedActive: o.stackedActive.includes(r) ? o.stackedActive.filter((f) => f !== r) : [
        ...o.stackedActive,
        r
      ]
    })),
    setStackedOrder: (r) => c({
      stackedOrder: r
    }),
    setSubplotParam: (r, o) => c((f) => ({
      subplotParams: {
        ...f.subplotParams,
        [r]: {
          ...f.subplotParams[r],
          ...o
        }
      }
    })),
    setRefPoints: (r) => c({
      refPoints: r.slice(0, lm)
    }),
    addRefPoint: (r) => c((o) => o.refPoints.length >= lm ? o : {
      refPoints: [
        ...o.refPoints,
        r
      ]
    }),
    updateRefPoint: (r, o) => c((f) => ({
      refPoints: f.refPoints.map((_, m) => m === r ? o : _)
    })),
    removeRefPoint: (r) => c((o) => ({
      refPoints: o.refPoints.filter((f, _) => _ !== r)
    })),
    setScalarCursor: (r) => c({
      scalarCursor: r
    }),
    applyPreset: (r) => {
      if (r.empty || r.encoders.length === 0) {
        c({
          encoders: [],
          lastData: null
        });
        return;
      }
      const [o, f] = r.viewBounds.split(",").map((m) => parseFloat(m.trim())), _ = Number.isFinite(o) && Number.isFinite(f) ? [
        o,
        f
      ] : u().viewBounds;
      c({
        encoders: r.encoders.map((m) => ({
          ...m
        })),
        viewBounds: _
      });
    },
    setData: (r) => c({
      lastData: r
    }),
    setAnalyzing: (r) => c({
      analyzing: r
    }),
    setAnalysisError: (r) => c({
      analysisError: r
    })
  }), {
    name: "EncoderStudioStore"
  }));
  a1 = "modulepreload";
  i1 = function(c, u) {
    return new URL(c, u).href;
  };
  dm = {};
  c1 = function(u, r, o) {
    let f = Promise.resolve();
    if (r && r.length > 0) {
      let S = function(w) {
        return Promise.all(w.map((b) => Promise.resolve(b).then((T) => ({
          status: "fulfilled",
          value: T
        }), (T) => ({
          status: "rejected",
          reason: T
        }))));
      };
      const m = document.getElementsByTagName("link"), h = document.querySelector("meta[property=csp-nonce]"), p = (h == null ? void 0 : h.nonce) || (h == null ? void 0 : h.getAttribute("nonce"));
      f = S(r.map((w) => {
        if (w = i1(w, o), w in dm) return;
        dm[w] = true;
        const b = w.endsWith(".css"), T = b ? '[rel="stylesheet"]' : "";
        if (o) for (let R = m.length - 1; R >= 0; R--) {
          const E = m[R];
          if (E.href === w && (!b || E.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${w}"]${T}`)) return;
        const A = document.createElement("link");
        if (A.rel = b ? "stylesheet" : a1, b || (A.as = "script"), A.crossOrigin = "", A.href = w, p && A.setAttribute("nonce", p), document.head.appendChild(A), b) return new Promise((R, E) => {
          A.addEventListener("load", R), A.addEventListener("error", () => E(new Error(`Unable to preload CSS for ${w}`)));
        });
      }));
    }
    function _(m) {
      const h = new Event("vite:preloadError", {
        cancelable: true
      });
      if (h.payload = m, window.dispatchEvent(h), !h.defaultPrevented) throw m;
    }
    return f.then((m) => {
      for (const h of m || []) h.status === "rejected" && _(h.reason);
      return u().catch(_);
    });
  };
  class u1 extends Error {
    constructor() {
      super("analysis superseded"), this.name = "StaleAnalysisError";
    }
  }
  function o1(c) {
    return c instanceof Error && c.name === "StaleAnalysisError";
  }
  const s1 = 64, hn = /* @__PURE__ */ new Map();
  function Xm(c) {
    const u = hn.get(c);
    return u !== void 0 && (hn.delete(c), hn.set(c, u)), u;
  }
  function Ym(c, u) {
    if (hn.set(c, u), hn.size > s1) {
      const r = hn.keys().next().value;
      r !== void 0 && hn.delete(r);
    }
  }
  let vl = null, r1 = 0, bn = null, ra = null, yn = false, mi = null;
  const Qm = 3e4;
  function Ds() {
    mi !== null && (clearTimeout(mi), mi = null);
  }
  function f1() {
    const c = bn;
    bn = null, yn = false, mi = null, vl && (vl.terminate(), vl = null), c == null ? void 0 : c.reject(new Error(`Encoder analysis timed out after ${Qm / 1e3}s \u2014 the configuration is too expensive to analyze over the current range. Use a coarser encoder (larger period/width) or a narrower plot range.`)), da();
  }
  function Zm() {
    return vl || (typeof Worker > "u" ? null : (vl = new Worker(new URL("" + new URL("analysisWorker-C1jm1Hms.js", import.meta.url).href, import.meta.url), {
      type: "module"
    }), vl.onmessage = (c) => {
      Ds();
      const u = c.data, r = bn;
      bn = null, yn = false, r && (u.ok && u.data ? (Ym(r.key, u.data), r.resolve(u.data)) : r.reject(new Error(u.error ?? "analysis failed"))), da();
    }, vl.onerror = (c) => {
      Ds();
      const u = bn;
      bn = null, yn = false, u == null ? void 0 : u.reject(new Error(c.message || "analysis worker error")), da();
    }, vl));
  }
  function d1() {
    Zm();
  }
  function da() {
    if (yn || !ra) return;
    const c = ra;
    ra = null;
    const u = Xm(c.key);
    if (u) {
      c.resolve(u), da();
      return;
    }
    const r = Zm();
    if (!r) {
      yn = true, c1(() => import("./wasm-api-BL9csqJ5.js").then(async (m) => {
        await m.__tla;
        return m;
      }), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url).then((o) => {
        try {
          const f = o.runAnalysis(c.params);
          Ym(c.key, f), c.resolve(f);
        } catch (f) {
          c.reject(f instanceof Error ? f : new Error(String(f)));
        }
      }).finally(() => {
        yn = false, da();
      });
      return;
    }
    yn = true, bn = c, Ds(), mi = setTimeout(f1, Qm), r.postMessage({
      seq: ++r1,
      params: c.params
    });
  }
  function _1(c, u) {
    const r = Xm(c);
    return r ? Promise.resolve(r) : new Promise((o, f) => {
      ra && ra.reject(new u1()), ra = {
        key: c,
        params: u,
        resolve: o,
        reject: f
      }, da();
    });
  }
  const m1 = 10;
  Uv = function() {
    const c = de((_) => _.encoders), u = de((_) => _.viewBounds), r = de((_) => _.setData), o = de((_) => _.setAnalyzing), f = de((_) => _.setAnalysisError);
    Z.useEffect(() => {
      d1();
    }, []), Z.useEffect(() => {
      if (!c || c.length === 0) {
        r(null), f(null), o(false);
        return;
      }
      let _ = false;
      o(true);
      const m = setTimeout(() => {
        const h = {
          encoders: c,
          viewBounds: u
        }, p = JSON.stringify(h);
        _1(p, h).then((S) => {
          _ || (r(S), f(null));
        }).catch((S) => {
          _ || o1(S) || (r(null), f(S instanceof Error ? S.message : String(S)));
        }).finally(() => {
          _ || o(false);
        });
      }, m1);
      return () => {
        _ = true, clearTimeout(m);
      };
    }, [
      c,
      u,
      r,
      o,
      f
    ]);
  };
  let Vm;
  h1 = Gm((c) => ({
    helpKey: null,
    open: (u) => c({
      helpKey: u
    }),
    close: () => c({
      helpKey: null
    })
  }));
  Cs = Z.memo(function({ helpKey: u }) {
    const r = pn[u], o = h1((p) => p.open), f = Z.useRef(null), [_, m] = Z.useState(null);
    if (!r) return null;
    const h = () => {
      var _a2;
      const p = (_a2 = f.current) == null ? void 0 : _a2.getBoundingClientRect();
      p && m({
        x: p.left,
        y: p.bottom + 4
      });
    };
    return Y.jsxs("button", {
      ref: f,
      type: "button",
      className: "help-icon nodrag",
      "aria-label": `Help: ${r.title}`,
      onMouseEnter: h,
      onMouseLeave: () => m(null),
      onMouseDown: (p) => p.stopPropagation(),
      onClick: (p) => {
        p.stopPropagation(), m(null), o(u);
      },
      children: [
        "\u24D8",
        _ && wm.createPortal(Y.jsxs("div", {
          className: "help-popover",
          style: {
            left: _.x,
            top: _.y
          },
          children: [
            Y.jsx("div", {
              className: "help-popover-title",
              children: r.title
            }),
            Y.jsx("div", {
              className: "help-popover-short",
              children: r.short
            }),
            Y.jsx("div", {
              className: "help-popover-more",
              children: "Click for details \u2192"
            })
          ]
        }), document.body)
      ]
    });
  });
  Hv = Z.memo(function({ bare: u = false }) {
    const [r, o] = de((A) => A.viewBounds), f = de((A) => A.scalarCursor), _ = de((A) => A.setScalarCursor), m = Z.useRef(null), h = Z.useRef(null), p = Z.useCallback((A) => {
      h.current = A, m.current == null && (m.current = requestAnimationFrame(() => {
        m.current = null, h.current != null && _(h.current);
      }));
    }, [
      _
    ]);
    Z.useEffect(() => () => {
      m.current != null && cancelAnimationFrame(m.current);
    }, []);
    const S = (o - r) / 500 || 0.01, w = Math.min(o, Math.max(r, f)), T = {
      "--enc-fill": `${o > r ? (w - r) / (o - r) * 100 : 0}%`
    };
    return u ? Y.jsx("input", {
      type: "range",
      className: "nodrag enc-range",
      style: T,
      min: r,
      max: o,
      step: S,
      value: w,
      onChange: (A) => p(parseFloat(A.target.value))
    }) : Y.jsxs("div", {
      className: "enc-panel",
      style: {
        width: 280
      },
      children: [
        Y.jsxs("div", {
          className: "enc-panel-title",
          children: [
            "Scalar Cursor ",
            Y.jsx(Cs, {
              helpKey: "control.scalarSlider"
            })
          ]
        }),
        Y.jsxs("div", {
          className: "enc-cursor",
          children: [
            Y.jsx("input", {
              type: "range",
              className: "nodrag enc-range",
              style: T,
              min: r,
              max: o,
              step: S,
              value: w,
              onChange: (A) => p(parseFloat(A.target.value))
            }),
            Y.jsx("span", {
              className: "enc-cursor-val",
              children: f.toFixed(3)
            })
          ]
        })
      ]
    });
  });
  Vm = {
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
  function _m(c) {
    var _a2;
    return (((_a2 = Vm[c]) == null ? void 0 : _a2.length) ?? 0) > 0;
  }
  const b1 = Z.memo(function({ type: u }) {
    const r = de((_) => _.subplotParams[u]), o = de((_) => _.setSubplotParam), f = Vm[u];
    return f ? Y.jsx("span", {
      className: "subplot-param-ctls nodrag",
      children: f.map((_) => {
        const m = _.kind === "gap" ? ((r == null ? void 0 : r.gap) ?? 0) === 1 : !!(r == null ? void 0 : r[_.param]);
        return Y.jsx("button", {
          className: `subplot-param-btn${m ? " active" : ""}`,
          "data-tooltip": _.title,
          onClick: () => o(u, {
            [_.param]: _.kind === "gap" ? m ? 0 : 1 : !m
          }),
          children: _.glyph
        }, _.param);
      })
    }) : null;
  });
  function Je(c, u) {
    return typeof document > "u" ? u : getComputedStyle(document.documentElement).getPropertyValue(c).trim() || u;
  }
  function vn() {
    return {
      axisLine: Je("--viz-plot-axis-line", "#333333"),
      axisLabel: Je("--viz-plot-axis-label", "#111111"),
      axisTitle: Je("--viz-plot-axis-title", "#333333"),
      grid: Je("--viz-plot-grid", "rgba(0,0,0,0.12)"),
      gridStrong: Je("--viz-plot-grid-strong", "#888888"),
      tooltipBg: Je("--viz-tooltip-bg", "rgba(20,30,60,0.9)"),
      tooltipText: Je("--viz-tooltip-text", "#e8eaff"),
      cellActive: Je("--viz-bitfield-cell-active", "#111111"),
      cellInactive: Je("--viz-bitfield-cell-inactive", "#ffffff"),
      outline: Je("--viz-plot-outline", "#000000"),
      label: Je("--viz-plot-label", "#000000")
    };
  }
  function Jc(c, u, { folded: r, lo: o, hi: f, w: _ = 1, colors: m }) {
    const h = c.sub_encoders, p = Xp(h, r, _), { yBases: S, totalHeight: w } = Qp(p), b = [];
    h.forEach((E, B) => {
      const L = S[B], $ = S[B] + p[B].nRows;
      b.push({
        value: [
          E.lower_bound,
          L,
          $
        ]
      }), b.push({
        value: [
          E.upper_bound,
          L,
          $
        ]
      });
    });
    const T = 0.05, A = 1, R = [];
    return h.forEach((E, B) => {
      var _a2;
      const L = E.bins ?? [], $ = (m == null ? void 0 : m[B]) ?? eu(B), nt = S[B], { primaryRows: st, primaryIndices: Ut, expandedWidth: Nt } = p[B], P = ((_a2 = E.bit_range) == null ? void 0 : _a2[0]) ?? 0;
      L.forEach((rt, Ht) => {
        const ae = Math.max(rt.lower, o), ie = Math.min(typeof rt.upper == "number" ? rt.upper : rt.lower + Nt, f);
        if (ae >= ie) return;
        const St = st[Ut[Ht]], gt = rt.is_congruent ?? false, bt = P + Ut[Ht];
        let xt;
        if (u !== null) {
          const j = bt < u.length && u[bt] === 1;
          xt = gt ? j ? Cp : Rp : j ? Dp : Np;
        } else xt = gt ? Up : Bp;
        const C = nt + St * A + T, q = nt + (St + 1) * A - T;
        R.push({
          value: [
            ae,
            C,
            ie,
            q
          ],
          color: $,
          opacity: xt,
          label: String(bt),
          bitIdx: bt,
          isCongruent: gt
        });
      });
    }), {
      bins: R,
      boundLines: b,
      totalHeight: w
    };
  }
  function mm(c) {
    const o = (Math.max(c, 5) - c) / 2;
    return {
      min: -o,
      max: c + o
    };
  }
  function y1(c) {
    const u = vn();
    return (r, o) => {
      const f = c()[r.dataIndex];
      if (!f) return {
        type: "group",
        children: []
      };
      const [_, m, h, p] = f.value, S = o.coord([
        _,
        p
      ]), w = o.coord([
        h,
        m
      ]), b = S[0], T = S[1], A = w[0] - b, R = w[1] - T;
      if (A <= 0 || R <= 0) return {
        type: "group",
        children: []
      };
      const E = [
        {
          type: "rect",
          shape: {
            x: b,
            y: T,
            width: A,
            height: R
          },
          style: {
            fill: f.color,
            opacity: f.opacity,
            stroke: u.outline,
            lineWidth: 1.5
          }
        }
      ];
      if (A >= im && R >= im) {
        const B = Math.max(5, Math.min(Math.floor(0.9 * R), Math.floor(0.6 * A)));
        E.push({
          type: "text",
          style: {
            x: b + A / 2,
            y: T + R / 2,
            text: f.label,
            textAlign: "center",
            textVerticalAlign: "middle",
            fontSize: B,
            fill: u.label,
            opacity: f.isCongruent ? 0.1 : 1,
            width: A - 2,
            overflow: "truncate",
            ellipsis: ""
          }
        });
      }
      return {
        type: "group",
        children: E
      };
    };
  }
  function g1(c) {
    const u = vn();
    return (r, o) => {
      const f = c()[r.dataIndex];
      if (!f) return {
        type: "group",
        children: []
      };
      const [_, m, h] = f.value, [p, S] = o.coord([
        _,
        m
      ]), [, w] = o.coord([
        _,
        h
      ]);
      return {
        type: "line",
        shape: {
          x1: p,
          y1: S,
          x2: p,
          y2: w
        },
        style: {
          stroke: u.outline,
          lineWidth: 4,
          opacity: 1
        },
        silent: true
      };
    };
  }
  function As(c, u) {
    if (!isFinite(u) || c.codes.length === 0) return null;
    const r = fa(c.boundaries, u);
    return r >= 0 ? c.codes[r] ?? null : null;
  }
  function hm(c, u) {
    if (!isFinite(u) || c.codes.length === 0) return [];
    const { boundaries: r, codes: o } = c, f = fa(r, u), _ = qm(o, o[f]), m = [];
    for (let h = 0; h < r.length - 1; h++) {
      const p = (r[h] + r[h + 1]) / 2;
      m.push([
        r[h],
        _[h]
      ], [
        p,
        _[h]
      ]);
    }
    return m.push([
      r[r.length - 1],
      _[_.length - 1]
    ]), m;
  }
  function p1(c, u, r) {
    if (u.length === 0 || c.codes.length === 0) return [];
    const { boundaries: o, codes: f } = c;
    return u.map((_, m) => {
      const h = fa(o, _), p = qm(f, f[h]), S = [];
      for (let w = 0; w < o.length - 1; w++) {
        const b = (o[w] + o[w + 1]) / 2;
        S.push([
          o[w],
          p[w]
        ], [
          b,
          p[w]
        ]);
      }
      return S.push([
        o[o.length - 1],
        p[p.length - 1]
      ]), {
        points: S,
        color: r[m] ?? eu(m + 4)
      };
    });
  }
  function v1(c) {
    let u = 1;
    for (let r = 0; r < c.codes.length; r++) {
      const o = c.codes[r];
      let f = 0;
      for (let _ = 0; _ < o.length; _++) f += o[_];
      f > u && (u = f);
    }
    return u + 1;
  }
  function w1(c) {
    const u = c.length, r = c.reduce((m, h) => m + h, 0) || 1, o = 1 - am - Op - nm * (u - 1);
    let f = am;
    const _ = [];
    for (let m = 0; m < u; m++) {
      const h = c[m] / r * o;
      _.push({
        topPct: f,
        heightPct: h
      }), f += h + nm;
    }
    return _;
  }
  S1 = {
    bins: 2,
    "per-bin": 2,
    similarity: 1,
    "bits-by-data": 2,
    "projected-similarity": 2,
    decomposition: 1,
    "similarity-heatmap": 1,
    features: 1
  };
  function x1(c, u) {
    return u && u.length === 2 ? u : Yp(c);
  }
  function T1(c) {
    const { boundaries: u } = c;
    if (u.length < 2) return [];
    const r = u[0], f = u[u.length - 1] - r;
    return u.slice(0, -1).map((_, m) => {
      const h = u[m + 1], p = Math.round(f / (h - _));
      return {
        value: [
          _,
          0,
          h,
          1
        ],
        label: p > 1 ? `1/${p}` : "1"
      };
    });
  }
  function A1(c) {
    const u = vn();
    return (r, o) => {
      const f = c()[r.dataIndex];
      if (!f) return {
        type: "group",
        children: []
      };
      const [_, m, h, p] = f.value, S = o.coord([
        _,
        p
      ]), w = o.coord([
        h,
        m
      ]), b = S[0], T = S[1], A = w[0] - b, R = w[1] - T;
      if (A <= 0 || R <= 0) return {
        type: "group",
        children: []
      };
      const E = [
        {
          type: "rect",
          shape: {
            x: b,
            y: T,
            width: A,
            height: R
          },
          style: {
            fill: Lp,
            stroke: u.outline,
            lineWidth: 1
          }
        }
      ];
      if (A >= 8 && R >= 8) {
        const B = b + A / 2, L = T + R / 2, $ = f.label.indexOf("/");
        if ($ >= 0) {
          const nt = f.label.slice(0, $), st = f.label.slice($ + 1), Ut = Math.max(nt.length, st.length), Nt = Math.max(4, Math.min(Math.floor(0.36 * R), Math.floor(1.5 * A / Ut))), P = Nt * 0.62, rt = Math.min(A - 3, Nt * Ut * 0.62 + 2), Ht = {
            textAlign: "center",
            textVerticalAlign: "middle",
            fontSize: Nt,
            fill: u.label,
            fontWeight: "bold"
          };
          E.push({
            type: "text",
            style: {
              x: B,
              y: L - P,
              text: nt,
              ...Ht
            }
          }, {
            type: "line",
            shape: {
              x1: B - rt / 2,
              y1: L,
              x2: B + rt / 2,
              y2: L
            },
            style: {
              stroke: u.label,
              lineWidth: Math.max(1, Math.round(Nt * 0.09))
            }
          }, {
            type: "text",
            style: {
              x: B,
              y: L + P,
              text: st,
              ...Ht
            }
          });
        } else {
          const nt = Math.max(5, Math.min(Math.floor(0.5 * R), Math.floor(0.7 * A)));
          E.push({
            type: "text",
            style: {
              x: B,
              y: L,
              text: f.label,
              textAlign: "center",
              textVerticalAlign: "middle",
              fontSize: nt,
              fill: u.label,
              fontWeight: "bold"
            }
          });
        }
      }
      return {
        type: "group",
        children: E
      };
    };
  }
  function E1(c) {
    const { boundaries: u, deltas: r } = c, o = u.slice(1, -1), f = [];
    return o.forEach((_, m) => {
      const h = r[m] ?? 0;
      for (let p = 0; p < h; p++) f.push([
        _,
        p - (h - 1) / 2
      ]);
    }), f;
  }
  function z1(c) {
    let u = 1;
    for (let r = 0; r < c.deltas.length; r++) c.deltas[r] > u && (u = c.deltas[r]);
    return (u - 1) / 2;
  }
  function bm(c, u) {
    var _a2;
    const { boundaries: r, similarity: o } = c;
    if (r.length - 1 === 0) return [];
    const _ = Math.max(0, fa(r, u)), m = o[_] ?? [];
    let h = 0;
    for (let p = 0; p < o.length; p++) {
      const S = ((_a2 = o[p]) == null ? void 0 : _a2[p]) ?? 0;
      S > h && (h = S);
    }
    return r.slice(0, -1).map((p, S) => ({
      value: [
        p,
        0,
        r[S + 1],
        1
      ],
      color: Um(h > 0 ? (m[S] ?? 0) / h : 0)
    }));
  }
  function M1(c) {
    return O1(c);
  }
  function O1(c) {
    const u = vn();
    return (r, o) => {
      const f = c()[r.dataIndex];
      if (!f) return {
        type: "group",
        children: []
      };
      const [_, m, h, p] = f.value, S = o.coord([
        _,
        p
      ]), w = o.coord([
        h,
        m
      ]), b = S[0], T = S[1], A = w[0] - b, R = w[1] - T;
      if (A <= 0 || R <= 0) return {
        type: "group",
        children: []
      };
      const E = [
        {
          type: "rect",
          shape: {
            x: b,
            y: T,
            width: A,
            height: R
          },
          style: {
            fill: f.color,
            stroke: u.grid,
            lineWidth: 0.5
          }
        }
      ];
      if (f.label && A >= 6 && R >= 6) {
        const B = Math.max(4, Math.min(Math.floor(0.65 * R), Math.floor(0.55 * A)));
        E.push({
          type: "text",
          style: {
            x: b + A / 2,
            y: T + R / 2,
            text: f.label,
            textAlign: "center",
            textVerticalAlign: "middle",
            fontSize: B,
            fill: f.labelColor ?? u.axisLabel
          }
        });
      }
      return {
        type: "group",
        children: E,
        emphasis: {
          disabled: true
        }
      };
    };
  }
  function D1(c) {
    var _a2;
    return ((_a2 = Hm[c]) == null ? void 0 : _a2.titleColor) ?? vn().axisTitle;
  }
  const C1 = 24;
  function Ic(c, u) {
    var _a2, _b2, _c;
    try {
      const o = (_c = (_b2 = (_a2 = c.getModel().getComponent("grid", u)) == null ? void 0 : _a2.coordinateSystem) == null ? void 0 : _b2.getRect) == null ? void 0 : _c.call(_b2);
      return o ? {
        x: o.x,
        y: o.y,
        width: o.width,
        height: o.height
      } : null;
    } catch {
      return null;
    }
  }
  function ym(c, u) {
    return () => {
      const r = c(), o = u();
      return !r || !o ? {
        type: "group",
        children: []
      } : {
        type: "image",
        style: {
          image: r,
          x: o.x,
          y: o.y,
          width: o.width,
          height: o.height
        },
        silent: true
      };
    };
  }
  function N1(c, u, r, o, f, _, m) {
    var _a2;
    const { codes: h, boundaries: p, n_bits: S } = _;
    if (p.length < 2 || S === 0) return;
    const w = [];
    for (let b = 0; b < S; b++) {
      const T = u.convertToPixel({
        yAxisIndex: o
      }, b + 0.5) - f.y, A = u.convertToPixel({
        yAxisIndex: o
      }, b - 0.5) - f.y;
      w.push({
        top: T,
        h: Math.max(1, A - T)
      });
    }
    for (let b = 0; b < p.length - 1; b++) {
      const T = u.convertToPixel({
        xAxisIndex: r
      }, p[b]) - f.x, A = u.convertToPixel({
        xAxisIndex: r
      }, p[b + 1]) - f.x, R = Math.max(1, A - T);
      for (let E = 0; E < S; E++) c.fillStyle = ((_a2 = h[b]) == null ? void 0 : _a2[E]) ?? 0 ? jp : qp, c.fillRect(T, w[E].top, R, w[E].h);
    }
    if (m) {
      c.strokeStyle = jm, c.lineWidth = 1;
      for (const b of p) {
        const T = u.convertToPixel({
          xAxisIndex: r
        }, b) - f.x;
        c.beginPath(), c.moveTo(T, 0), c.lineTo(T, f.height), c.stroke();
      }
    }
  }
  function R1(c, u, r, o, f, _, m, h) {
    var _a2;
    const { similarity: p, boundaries: S } = _, w = S.length - 1;
    if (w === 0 || p.length === 0) return;
    const b = vn();
    let T = 1;
    for (let E = 0; E < p.length; E++) {
      const B = p[E];
      if (B) for (let L = 0; L < B.length; L++) B[L] > T && (T = B[L]);
    }
    const A = [];
    for (let E = 0; E < w; E++) {
      const B = u.convertToPixel({
        xAxisIndex: r
      }, S[E]) - f.x, L = u.convertToPixel({
        xAxisIndex: r
      }, S[E + 1]) - f.x;
      A.push({
        x0: B,
        w: Math.max(1, L - B)
      });
    }
    const R = [];
    for (let E = 0; E < w; E++) {
      const B = u.convertToPixel({
        yAxisIndex: o
      }, S[E + 1]) - f.y, L = u.convertToPixel({
        yAxisIndex: o
      }, S[E]) - f.y;
      R.push({
        top: B,
        h: Math.max(1, L - B)
      });
    }
    for (let E = 0; E < w; E++) for (let B = 0; B < w; B++) {
      const L = ((_a2 = p[E]) == null ? void 0 : _a2[B]) ?? 0, $ = T > 0 ? L / T : 0;
      if (c.fillStyle = Um($), c.fillRect(A[E].x0, R[B].top, A[E].w, R[B].h), h && A[E].w >= 6 && R[B].h >= 6) {
        const nt = Math.max(4, Math.min(Math.floor(0.65 * R[B].h), Math.floor(0.55 * A[E].w)));
        c.font = `${nt}px sans-serif`, c.textAlign = "center", c.textBaseline = "middle", c.fillStyle = $ > 0.55 ? b.cellInactive : b.cellActive, c.fillText(String(L), A[E].x0 + A[E].w / 2, R[B].top + R[B].h / 2);
      }
    }
    if (m) {
      c.strokeStyle = jm, c.lineWidth = 1;
      for (const E of S) {
        const B = u.convertToPixel({
          xAxisIndex: r
        }, E) - f.x;
        c.beginPath(), c.moveTo(B, 0), c.lineTo(B, f.height), c.stroke();
      }
      for (const E of S) {
        const B = u.convertToPixel({
          yAxisIndex: o
        }, E) - f.y;
        c.beginPath(), c.moveTo(0, B), c.lineTo(f.width, B), c.stroke();
      }
    }
  }
  function gm(c, u, r, o = 0, f = -1) {
    const _ = [
      "cursor-line-a",
      "cursor-line-b"
    ];
    if (o < 0) return [];
    let m = NaN;
    try {
      m = c.convertToPixel({
        xAxisIndex: o
      }, u);
    } catch {
      m = NaN;
    }
    const h = 2, p = Math.max(2, r - 2);
    let S = [];
    if (isFinite(m) && (S = [
      [
        h,
        p
      ]
    ], f >= 0)) {
      const T = Ic(c, f);
      if (T) {
        const A = T.y, R = T.y + T.height, E = [];
        A - h > 1 && E.push([
          h,
          Math.min(A, p)
        ]), p - R > 1 && E.push([
          Math.max(R, h),
          p
        ]), S = E;
      }
    }
    const w = isFinite(m) ? m : 0, b = (T, A, R) => ({
      id: T,
      type: "line",
      shape: {
        x1: w,
        y1: A[0],
        x2: w,
        y2: A[1]
      },
      style: {
        stroke: Lm,
        lineWidth: 1.5,
        opacity: R ? 1 : 0
      },
      z: 100,
      silent: true
    });
    return _.map((T, A) => S[A] ? b(T, S[A], true) : b(T, [
      h,
      h
    ], false));
  }
  const pm = [];
  function fi(c, u, r) {
    return c + (u - c) * r;
  }
  function B1(c) {
    return c < 0.5 ? 2 * c * c : -1 + (4 - 2 * c) * c;
  }
  let Es, U1, H1;
  Es = {
    bins: "Bins",
    "per-bin": "Per-Bin",
    similarity: "Similarity"
  };
  Lv = Z.memo(function({ specs: u, data: r, cursor: o, refPoints: f = pm, viewBounds: _, params: m, width: h = 360, height: p = 220, className: S, onPlotRect: w }) {
    var _a2, _b2, _c, _d;
    const b = ((_a2 = m == null ? void 0 : m.bins) == null ? void 0 : _a2.folded) ?? false, T = Z.useMemo(() => u.includes("similarity") ? f : pm, [
      u,
      f
    ]), A = `${((_b2 = m == null ? void 0 : m["bits-by-data"]) == null ? void 0 : _b2.gap) ?? 0}|${((_c = m == null ? void 0 : m["projected-similarity"]) == null ? void 0 : _c.gap) ?? 0}|${((_d = m == null ? void 0 : m["projected-similarity"]) == null ? void 0 : _d.showText) ? 1 : 0}`, R = Z.useRef(null), E = Z.useRef(null), B = Z.useRef([]), L = Z.useRef([]), $ = Z.useRef([]), nt = Z.useRef([]), st = Z.useRef([]), Ut = Z.useRef(u), Nt = Z.useRef(o);
    Nt.current = o;
    const P = Z.useRef({
      raf: null,
      prev: b
    }), rt = Z.useRef(false), Ht = Z.useRef(/* @__PURE__ */ new Map()), ae = Z.useRef(/* @__PURE__ */ new Map()), ie = Z.useRef([]), [St, gt] = Z.useState([]), bt = Z.useRef({
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
    }), xt = () => {
      const j = E.current;
      if (!j) {
        gt([]);
        return;
      }
      const G = [];
      Ut.current.forEach((K, _t) => {
        if (!_m(K)) return;
        const et = Ic(j, _t);
        et && G.push({
          type: K,
          y: et.y,
          height: et.height
        });
      }), gt(G);
    }, C = () => {
      const j = E.current;
      if (!j || !w) return;
      const G = Ic(j, 0);
      G && w({
        left: G.x,
        right: G.x + G.width,
        width: G.width
      });
    }, q = () => {
      const j = E.current, G = bt.current.data;
      if (!j || !G) return;
      const K = window.devicePixelRatio || 1, _t = [];
      Ut.current.forEach((et, I) => {
        var _a3, _b3, _c2;
        if (et !== "bits-by-data" && et !== "projected-similarity") return;
        const ot = Ic(j, I);
        if (!ot || ot.width <= 0 || ot.height <= 0) return;
        const Yt = document.createElement("canvas");
        Yt.width = Math.max(1, Math.round(ot.width * K)), Yt.height = Math.max(1, Math.round(ot.height * K));
        const Qt = Yt.getContext("2d");
        if (!Qt) return;
        Qt.scale(K, K);
        const $t = ie.current[I] ?? I;
        et === "bits-by-data" ? N1(Qt, j, I, $t, ot, G, (((_a3 = m == null ? void 0 : m["bits-by-data"]) == null ? void 0 : _a3.gap) ?? 0) > 0) : R1(Qt, j, I, $t, ot, G, (((_b3 = m == null ? void 0 : m["projected-similarity"]) == null ? void 0 : _b3.gap) ?? 0) > 0, !!((_c2 = m == null ? void 0 : m["projected-similarity"]) == null ? void 0 : _c2.showText)), Ht.current.set(I, Yt), ae.current.set(I, ot), _t.push({
          id: `static-${I}`,
          data: [
            [
              Math.random()
            ]
          ]
        });
      }), _t.length > 0 && j.setOption({
        series: _t
      });
    };
    return Z.useEffect(() => {
      if (!R.current) return;
      const j = Sm(R.current) ?? xm(R.current, void 0, {
        renderer: "canvas"
      });
      return E.current = j, () => {
        j.dispose(), E.current = null;
      };
    }, []), Z.useEffect(() => {
      var _a3;
      (_a3 = E.current) == null ? void 0 : _a3.resize({
        width: h,
        height: p
      }), requestAnimationFrame(() => {
        xt(), q(), C();
      });
    }, [
      h,
      p
    ]), Z.useEffect(() => {
      const j = E.current;
      if (!j) return;
      if (Ut.current = u, !r || u.length === 0) {
        j.clear(), gt([]);
        return;
      }
      const [G, K] = x1(r, _), _t = u.some((at) => _m(at)) ? C1 : 0, et = f.map((at, W) => Pc[W % Pc.length]), I = u.map((at) => S1[at] ?? 1), ot = w1(I), Yt = As(r, o), Qt = [], $t = [], Wt = [], Lt = [], pt = [];
      let Mt = 0;
      const Zt = vn(), We = {
        show: true,
        precision: 4,
        backgroundColor: Zt.tooltipBg,
        color: Zt.tooltipText,
        fontSize: vs
      };
      u.forEach((at, W) => {
        const { topPct: _e, heightPct: Ye } = ot[W], jt = W === 0, Ce = W === u.length - 1, xl = u.length === 1, wn = jt && !xl ? "top" : "bottom", Sn = jt || Ce;
        Qt.push({
          left: zp + _t,
          right: Mp,
          top: `${(_e * 100).toFixed(1)}%`,
          height: `${(Ye * 100).toFixed(1)}%`
        }), $t.push({
          type: "value",
          gridIndex: W,
          min: G,
          max: K,
          position: wn,
          axisLine: {
            show: true,
            onZero: false,
            lineStyle: {
              color: Zt.axisLine,
              width: 1
            }
          },
          axisTick: {
            show: Ce
          },
          axisLabel: {
            show: Ce,
            fontSize: vs,
            color: Zt.axisLabel
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: Zt.gridStrong,
              opacity: 0.4
            }
          },
          axisPointer: {
            show: true,
            label: {
              ...We,
              show: Sn
            }
          }
        });
        const Rt = {
          gridIndex: W,
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
        }, Qe = {
          color: D1(at),
          fontWeight: "bold",
          fontSize: 11
        };
        if (at === "bins") {
          const { bins: ce, boundLines: Fe, totalHeight: Ze } = Jc(r, Yt, {
            folded: b,
            lo: G,
            hi: K
          });
          B.current = ce, L.current = Fe;
          const Si = mm(Ze);
          pt.push(Mt), Wt.push({
            ...Rt,
            id: "bins-yaxis",
            type: "value",
            min: Si.min,
            max: Si.max,
            name: Es.bins,
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: Qe
          }), Mt++, Lt.push({
            id: "bins-series",
            type: "custom",
            renderItem: y1(() => B.current),
            data: B.current,
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
            xAxisIndex: W,
            yAxisIndex: pt[W],
            zlevel: 10,
            emphasis: {
              disabled: true
            }
          }), Lt.push({
            id: "bins-bound-lines",
            type: "custom",
            renderItem: g1(() => L.current),
            data: L.current,
            encode: {
              x: 0,
              y: [
                1,
                2
              ]
            },
            xAxisIndex: W,
            yAxisIndex: pt[W],
            zlevel: 11,
            silent: true
          });
        } else if (at === "per-bin") $t[W] = {
          ...$t[W],
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
        }, st.current = om(r, o), pt.push(Mt), Wt.push({
          ...Rt,
          type: "value",
          min: 0,
          max: 1,
          name: Es["per-bin"],
          nameLocation: "middle",
          nameGap: 10,
          nameTextStyle: Qe
        }), Mt++, Lt.push({
          id: `per-bin-${W}`,
          type: "custom",
          renderItem: Kp(() => st.current),
          data: st.current,
          encode: {
            x: 0,
            y: 1
          },
          xAxisIndex: W,
          yAxisIndex: pt[W],
          zlevel: 12,
          emphasis: {
            disabled: true
          },
          silent: true
        });
        else if (at === "similarity") {
          const ce = v1(r);
          pt.push(Mt), Wt.push({
            ...Rt,
            type: "value",
            position: "left",
            min: 0,
            max: ce,
            minInterval: 1,
            name: Es.similarity,
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: Qe
          }), Mt++, Wt.push({
            ...Rt,
            type: "value",
            position: "right",
            min: 0,
            max: ce,
            minInterval: 1,
            axisLabel: {
              show: true,
              color: Zt.axisLabel,
              fontSize: vs
            }
          }), Mt++, p1(r, f, et).forEach(({ points: Fe, color: Ze }) => {
            Lt.push({
              type: "line",
              data: Fe,
              showSymbol: false,
              step: "end",
              lineStyle: {
                color: Ze,
                width: 2
              },
              areaStyle: {
                color: Gp(Ze, 0.3)
              },
              xAxisIndex: W,
              yAxisIndex: pt[W]
            });
          }), f.forEach((Fe, Ze) => {
            Lt.push({
              type: "line",
              data: [],
              markLine: {
                symbol: "none",
                lineStyle: {
                  type: "dashed",
                  color: et[Ze],
                  width: 1
                },
                data: [
                  {
                    xAxis: Fe
                  }
                ],
                label: {
                  show: false
                }
              },
              xAxisIndex: W,
              yAxisIndex: pt[W]
            });
          }), Lt.push({
            id: "similarity-cursor",
            type: "line",
            data: hm(r, o),
            showSymbol: false,
            step: "end",
            lineStyle: {
              color: Lm,
              width: 2
            },
            areaStyle: {
              color: Ep
            },
            xAxisIndex: W,
            yAxisIndex: pt[W],
            zlevel: 10
          });
        } else if (at === "decomposition") $.current = T1(r), pt.push(Mt), Wt.push({
          ...Rt,
          type: "value",
          min: 0,
          max: 1,
          name: "Regions",
          nameLocation: "middle",
          nameGap: 10,
          nameTextStyle: Qe
        }), Mt++, Lt.push({
          type: "custom",
          renderItem: A1(() => $.current),
          data: $.current,
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
          xAxisIndex: W,
          yAxisIndex: pt[W]
        });
        else if (at === "similarity-heatmap") nt.current = bm(r, o), pt.push(Mt), Wt.push({
          ...Rt,
          type: "value",
          min: 0,
          max: 1,
          name: "Sim. Heat",
          nameLocation: "middle",
          nameGap: 10,
          nameTextStyle: Qe
        }), Mt++, Lt.push({
          id: `sim-heatmap-${W}`,
          type: "custom",
          renderItem: M1(() => nt.current),
          data: nt.current,
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
          xAxisIndex: W,
          yAxisIndex: pt[W],
          zlevel: 12
        });
        else if (at === "features") {
          const ce = z1(r);
          pt.push(Mt), Wt.push({
            ...Rt,
            type: "value",
            position: "left",
            min: -(ce + 1),
            max: ce + 1,
            minInterval: 1,
            name: "Crossings",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: Qe
          }), Mt++, Wt.push({
            ...Rt,
            type: "value",
            position: "right",
            min: -(ce + 1),
            max: ce + 1,
            axisLabel: {
              show: false
            }
          }), Mt++, Lt.push({
            type: "scatter",
            data: E1(r),
            symbolSize: 6,
            itemStyle: {
              color: Zt.axisLine
            },
            xAxisIndex: W,
            yAxisIndex: pt[W]
          });
        } else if (at === "bits-by-data") {
          const ce = r.n_bits;
          pt.push(Mt), Wt.push({
            ...Rt,
            type: "value",
            min: -0.5,
            max: Math.max(0.5, ce - 0.5),
            minInterval: 1,
            name: "Bit Index",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: Qe
          }), Mt++, Lt.push({
            id: `static-${W}`,
            type: "custom",
            renderItem: ym(() => Ht.current.get(W), () => ae.current.get(W)),
            data: [
              [
                0
              ]
            ],
            xAxisIndex: W,
            yAxisIndex: pt[W],
            silent: true,
            zlevel: 0
          });
        } else if (at === "projected-similarity") {
          const ce = r.boundaries[0] ?? G, Fe = r.boundaries[r.boundaries.length - 1] ?? K;
          pt.push(Mt), Wt.push({
            ...Rt,
            type: "value",
            min: ce,
            max: Fe,
            name: "Self-Sim",
            nameLocation: "middle",
            nameGap: 10,
            nameTextStyle: Qe
          }), Mt++, Lt.push({
            id: `static-${W}`,
            type: "custom",
            renderItem: ym(() => Ht.current.get(W), () => ae.current.get(W)),
            data: [
              [
                0
              ]
            ],
            xAxisIndex: W,
            yAxisIndex: pt[W],
            silent: true,
            zlevel: 0
          });
        }
      }), ie.current = pt;
      const lt = u.findIndex((at) => at !== "per-bin");
      bt.current = {
        data: r,
        hasBins: u.includes("bins"),
        hasSimilarity: u.includes("similarity"),
        simHeatGi: u.indexOf("similarity-heatmap"),
        perBinGi: u.indexOf("per-bin"),
        firstInputGi: lt,
        binsParams: {
          folded: b,
          lo: G,
          hi: K
        }
      }, P.current.raf != null && cancelAnimationFrame(P.current.raf), P.current = {
        raf: null,
        prev: b
      }, rt.current = false;
      for (const at of Lt) at.type === "custom" && (at.progressive = 0);
      j.setOption({
        animation: false,
        backgroundColor: "transparent",
        grid: Qt,
        xAxis: $t,
        yAxis: Wt,
        series: Lt,
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
      }), j.setOption({
        graphic: gm(j, o, p, lt, bt.current.perBinGi)
      }), requestAnimationFrame(() => {
        xt(), q(), C();
      });
    }, [
      r,
      u,
      T,
      A,
      _,
      h,
      p
    ]), Z.useEffect(() => {
      const j = E.current, G = bt.current;
      if (!j || !G.data) return;
      const K = [];
      if (G.hasBins && !rt.current) {
        const _t = As(G.data, o), { bins: et } = Jc(G.data, _t, G.binsParams);
        B.current = et, K.push({
          id: "bins-series",
          data: et
        });
      }
      G.hasSimilarity && K.push({
        id: "similarity-cursor",
        data: hm(G.data, o)
      }), G.simHeatGi >= 0 && (nt.current = bm(G.data, o), K.push({
        id: `sim-heatmap-${G.simHeatGi}`,
        data: nt.current
      })), G.perBinGi >= 0 && (st.current = om(G.data, o), K.push({
        id: `per-bin-${G.perBinGi}`,
        data: st.current
      })), j.setOption({
        series: K,
        graphic: gm(j, o, p, G.firstInputGi, G.perBinGi)
      });
    }, [
      o,
      p
    ]), Z.useEffect(() => {
      const j = E.current, G = bt.current, K = P.current, _t = K.prev;
      if (K.prev = b, !j || !G.data || !G.hasBins || _t === b) return;
      K.raf != null && cancelAnimationFrame(K.raf);
      const et = G.data, { lo: I, hi: ot } = G.binsParams, Yt = As(et, Nt.current), Qt = Jc(et, Yt, {
        folded: _t,
        lo: I,
        hi: ot
      }), $t = Jc(et, Yt, {
        folded: b,
        lo: I,
        hi: ot
      });
      G.binsParams = {
        ...G.binsParams,
        folded: b
      }, rt.current = true;
      const Wt = performance.now(), Lt = (pt) => {
        const Mt = Math.min((pt - Wt) / Hp, 1), Zt = B1(Mt), We = Qt.bins.map((_e, Ye) => {
          const jt = $t.bins[Ye] ?? _e;
          return {
            ...jt,
            value: [
              jt.value[0],
              fi(_e.value[1], jt.value[1], Zt),
              jt.value[2],
              fi(_e.value[3], jt.value[3], Zt)
            ]
          };
        }), lt = Qt.boundLines.map((_e, Ye) => {
          const jt = $t.boundLines[Ye] ?? _e;
          return {
            value: [
              jt.value[0],
              fi(_e.value[1], jt.value[1], Zt),
              fi(_e.value[2], jt.value[2], Zt)
            ]
          };
        });
        B.current = We, L.current = lt;
        const { min: at, max: W } = mm(fi(Qt.totalHeight, $t.totalHeight, Zt));
        j.setOption({
          yAxis: [
            {
              id: "bins-yaxis",
              min: at,
              max: W
            }
          ],
          series: [
            {
              id: "bins-series",
              data: We
            },
            {
              id: "bins-bound-lines",
              data: lt
            }
          ]
        }), Mt < 1 ? K.raf = requestAnimationFrame(Lt) : (K.raf = null, rt.current = false, B.current = $t.bins, L.current = $t.boundLines);
      };
      return K.raf = requestAnimationFrame(Lt), () => {
        K.raf != null && cancelAnimationFrame(K.raf), K.raf = null, rt.current = false;
      };
    }, [
      b
    ]), Y.jsxs("div", {
      className: S,
      style: {
        width: `${h}px`,
        height: `${p}px`,
        position: "relative"
      },
      children: [
        Y.jsx("div", {
          ref: R,
          style: {
            width: "100%",
            height: "100%"
          }
        }),
        Y.jsx("div", {
          style: {
            position: "absolute",
            inset: 0,
            pointerEvents: "none"
          },
          children: St.map((j, G) => Y.jsx("div", {
            className: "nodrag",
            style: {
              position: "absolute",
              left: 2,
              top: j.y + j.height / 2,
              transform: "translateY(-50%)",
              pointerEvents: "auto"
            },
            children: Y.jsx(b1, {
              type: j.type
            })
          }, `${j.type}-${G}`))
        })
      ]
    });
  });
  U1 = "var(--viz-bits-cursor)";
  H1 = 512;
  function L1(c) {
    const u = new Array(c.n_bits).fill("var(--viz-bits-on)");
    return c.sub_encoders.forEach((r, o) => {
      const [f, _] = r.bit_range ?? [
        0,
        0
      ], m = eu(o);
      for (let h = f; h < _; h++) u[h] = m;
    }), u;
  }
  function vm({ code: c, label: u, dotColor: r, colorMap: o, flags: f }) {
    let _ = c.slice(0, H1).map((m, h) => h);
    return f.showIndex && (f.sortByActive && (_ = _.slice().sort((m, h) => (c[h] ?? 0) - (c[m] ?? 0))), f.hideZeros && (_ = _.filter((m) => (c[m] ?? 0) === 1))), Y.jsxs("div", {
      children: [
        Y.jsxs("div", {
          className: "enc-bits-row-label",
          children: [
            Y.jsx("span", {
              className: "enc-bits-dot",
              style: {
                background: r
              }
            }),
            Y.jsx("span", {
              children: u
            })
          ]
        }),
        Y.jsx("div", {
          className: "enc-bits-squares",
          children: _.map((m) => {
            const h = c[m] ?? 0, p = h === 1 ? f.colorCoded ? o[m] ?? "var(--viz-bits-on)" : "var(--viz-bits-on)" : "var(--viz-bits-off)";
            return Y.jsx("span", {
              className: "enc-bit-square",
              "data-tooltip": `bit ${m}: ${h}`,
              style: {
                background: p,
                color: h === 1 ? "var(--viz-bits-on-text)" : "var(--viz-bits-off-text)"
              },
              children: f.showIndex ? m : h
            }, m);
          })
        })
      ]
    });
  }
  function $c({ active: c, disabled: u, onToggle: r, children: o }) {
    return Y.jsx("button", {
      type: "button",
      className: `enc-bits-ctl-btn${c ? " active" : ""}`,
      disabled: u,
      onClick: r,
      children: o
    });
  }
  jv = Z.memo(function() {
    const u = de((B) => B.lastData), r = de((B) => B.scalarCursor), o = de((B) => B.refPoints), [f, _] = Z.useState(false), [m, h] = Z.useState(false), [p, S] = Z.useState(false), [w, b] = Z.useState(false), T = Z.useMemo(() => u ? L1(u) : [], [
      u
    ]);
    if (!u || u.codes.length === 0) return Y.jsxs("div", {
      className: "enc-panel",
      style: {
        width: 280
      },
      children: [
        Y.jsxs("div", {
          className: "enc-panel-title",
          children: [
            "Bit Codes ",
            Y.jsx(Cs, {
              helpKey: "control.bitsPanel"
            })
          ]
        }),
        Y.jsx("div", {
          className: "enc-empty",
          children: "Add encoders to see bit codes."
        })
      ]
    });
    const A = {
      colorCoded: f,
      showIndex: m,
      sortByActive: p,
      hideZeros: w
    }, R = u.codes[fa(u.boundaries, r)] ?? [], E = (B) => Pc[B % Pc.length];
    return Y.jsxs("div", {
      className: "enc-panel",
      style: {
        width: 280
      },
      children: [
        Y.jsxs("div", {
          className: "enc-bits-header",
          children: [
            Y.jsxs("div", {
              className: "enc-panel-title",
              children: [
                "Bit Codes ",
                Y.jsx(Cs, {
                  helpKey: "control.bitsPanel"
                })
              ]
            }),
            Y.jsxs("div", {
              className: "enc-bits-ctl nodrag",
              children: [
                Y.jsx($c, {
                  active: f,
                  onToggle: () => _((B) => !B),
                  children: "Color-Coded"
                }),
                Y.jsx($c, {
                  active: m,
                  onToggle: () => h((B) => !B),
                  children: "Show Index"
                }),
                m && Y.jsxs(Y.Fragment, {
                  children: [
                    Y.jsx($c, {
                      active: p,
                      onToggle: () => S((B) => !B),
                      children: "Sort by Active"
                    }),
                    Y.jsx($c, {
                      active: w,
                      onToggle: () => b((B) => !B),
                      children: "Hide 0s"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        Y.jsxs("div", {
          className: "enc-bits-rows",
          style: {
            marginTop: 6
          },
          children: [
            Y.jsx(vm, {
              code: R,
              label: `cursor: ${r.toFixed(3)}`,
              dotColor: U1,
              colorMap: T,
              flags: A
            }),
            o.map((B, L) => {
              const $ = u.codes[fa(u.boundaries, B)] ?? [];
              return Y.jsx(vm, {
                code: $,
                label: B.toFixed(3),
                dotColor: E(L),
                colorMap: T,
                flags: A
              }, L);
            })
          ]
        })
      ]
    });
  });
  function j1({ type: c, on: u, dragging: r, isOver: o, onToggle: f, onDragStart: _, onDragEnd: m, onDragOver: h, onDrop: p }) {
    const S = pn[`subplot.${c}`], w = Hm[c], b = Z.useRef(null), [T, A] = Z.useState(null), R = () => {
      var _a2;
      if (r) return;
      const E = (_a2 = b.current) == null ? void 0 : _a2.getBoundingClientRect();
      E && A({
        x: E.left,
        y: E.bottom + 4
      });
    };
    return Y.jsxs("button", {
      ref: b,
      type: "button",
      className: `nodrag enc-stacked-chip${o ? " enc-stacked-chip--over" : ""}`,
      draggable: true,
      "aria-label": P_[c] ?? c,
      onClick: f,
      onMouseEnter: R,
      onMouseLeave: () => A(null),
      onDragStart: (E) => {
        E.stopPropagation(), A(null), E.dataTransfer.effectAllowed = "move", E.dataTransfer.setData("text/plain", c), _();
      },
      onDragEnd: (E) => {
        E.stopPropagation(), m();
      },
      onDragOver: (E) => {
        E.preventDefault(), E.dataTransfer.dropEffect = "move", h();
      },
      onDrop: (E) => {
        E.preventDefault(), E.stopPropagation(), p();
      },
      style: {
        border: `2px solid ${(w == null ? void 0 : w.border) ?? "var(--viz-chip-border)"}`,
        background: u ? (w == null ? void 0 : w.bg) ?? "var(--viz-chip-bg)" : "var(--viz-chip-off)",
        color: "var(--viz-chip-text)",
        opacity: r ? 0.4 : u ? 1 : 0.5
      },
      children: [
        Y.jsx("span", {
          className: "enc-stacked-chip-label",
          children: P_[c] ?? c
        }),
        T && S && wm.createPortal(Y.jsxs("div", {
          className: "help-popover",
          style: {
            left: T.x,
            top: T.y
          },
          children: [
            Y.jsx("div", {
              className: "help-popover-title",
              children: S.title
            }),
            Y.jsx("div", {
              className: "help-popover-short",
              children: S.short
            })
          ]
        }), document.body)
      ]
    });
  }
  qv = Z.memo(function() {
    const u = de((b) => b.stackedOrder), r = de((b) => b.stackedActive), o = de((b) => b.toggleStackedSubplot), f = de((b) => b.setStackedOrder), _ = Z.useRef(null), [m, h] = Z.useState(null), [p, S] = Z.useState(-1), w = (b) => {
      const T = _.current;
      if (_.current = null, h(null), S(-1), !T) return;
      const A = u.indexOf(T);
      if (A < 0 || A === b) return;
      const R = u.filter((B) => B !== T);
      let E = R.indexOf(u[b]);
      E < 0 ? E = R.length : A < b && (E += 1), R.splice(E, 0, T), f(R);
    };
    return Y.jsxs("div", {
      className: "enc-panel enc-stacked-panel",
      style: {
        width: 210
      },
      children: [
        Y.jsx("div", {
          className: "enc-panel-title",
          children: "Stacked Subplots"
        }),
        Y.jsx("div", {
          className: "enc-stacked-list",
          children: u.map((b, T) => Y.jsx(j1, {
            type: b,
            on: r.includes(b),
            dragging: m === b,
            isOver: p === T && m !== null && m !== b,
            onToggle: () => o(b),
            onDragStart: () => {
              _.current = b, h(b);
            },
            onDragEnd: () => {
              _.current = null, h(null), S(-1);
            },
            onDragOver: () => S(T),
            onDrop: () => w(T)
          }, b))
        })
      ]
    });
  });
})();
export {
  Rp as $,
  Qp as A,
  dv as B,
  qm as C,
  jm as D,
  ov as E,
  Hp as F,
  jp as G,
  qp as H,
  Um as I,
  im as J,
  am as K,
  wv as L,
  Op as M,
  nm as N,
  Tv as O,
  mv as P,
  Sv as Q,
  Lp as R,
  zp as S,
  Q1 as T,
  xv as U,
  Ap as V,
  Mp as W,
  vs as X,
  Ep as Y,
  Bv as Z,
  Cp as _,
  __tla,
  uv as a,
  Dp as a0,
  Np as a1,
  Up as a2,
  Bp as a3,
  Em as a4,
  I1 as a5,
  F1 as a6,
  P_ as a7,
  Hm as a8,
  tv as a9,
  Lv as aA,
  jv as aB,
  qv as aC,
  V1 as aD,
  Y1 as aE,
  S1 as aF,
  Cs as aG,
  h1 as aH,
  pn as aI,
  _p as aJ,
  J1 as aK,
  Rv as aa,
  Tp as ab,
  lv as ac,
  ev as ad,
  P1 as ae,
  I_ as af,
  Pc as ag,
  cv as ah,
  iv as ai,
  lm as aj,
  rv as ak,
  fv as al,
  av as am,
  W1 as an,
  nv as ao,
  Gm as ap,
  e1 as aq,
  $_ as ar,
  Om as as,
  Eb as at,
  k1 as au,
  Z1 as av,
  K1 as aw,
  Uv as ax,
  de as ay,
  Hv as az,
  sv as b,
  yv as c,
  bv as d,
  eu as e,
  fa as f,
  hv as g,
  Gp as h,
  _v as i,
  vv as j,
  pv as k,
  gv as l,
  $1 as m,
  Nv as n,
  Av as o,
  zv as p,
  Mv as q,
  Dv as r,
  Ov as s,
  Cv as t,
  Ev as u,
  Kp as v,
  Lm as w,
  Yp as x,
  om as y,
  Xp as z
};
