// function Pf(e, t) {
//   for (var n = 0; n < t.length; n++) {
//     const r = t[n];
//     if (typeof r != "string" && !Array.isArray(r)) {
//       for (const i in r)
//         if (i !== "default" && !(i in e)) {
//           const o = Object.getOwnPropertyDescriptor(r, i);
//           o &&
//             Object.defineProperty(
//               e,
//               i,
//               o.get ? o : { enumerable: !0, get: () => r[i] }
//             );
//         }
//     }
//   }
//   return Object.freeze(
//     Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
//   );
// }
// (function () {
//   const t = document.createElement("link").relList;
//   if (t && t.supports && t.supports("modulepreload")) return;
//   for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
//   new MutationObserver((i) => {
//     for (const o of i)
//       if (o.type === "childList")
//         for (const l of o.addedNodes)
//           l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
//   }).observe(document, { childList: !0, subtree: !0 });
//   function n(i) {
//     const o = {};
//     return (
//       i.integrity && (o.integrity = i.integrity),
//       i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
//       i.crossOrigin === "use-credentials"
//         ? (o.credentials = "include")
//         : i.crossOrigin === "anonymous"
//         ? (o.credentials = "omit")
//         : (o.credentials = "same-origin"),
//       o
//     );
//   }
//   function r(i) {
//     if (i.ep) return;
//     i.ep = !0;
//     const o = n(i);
//     fetch(i.href, o);
//   }
// })();
// var Lf =
//   typeof globalThis < "u"
//     ? globalThis
//     : typeof window < "u"
//     ? window
//     : typeof global < "u"
//     ? global
//     : typeof self < "u"
//     ? self
//     : {};
// function Au(e) {
//   return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
//     ? e.default
//     : e;
// }
// var Tr = {},
//   Rf = {
//     get exports() {
//       return Tr;
//     },
//     set exports(e) {
//       Tr = e;
//     },
//   },
//   io = {},
//   D = {},
//   Tf = {
//     get exports() {
//       return D;
//     },
//     set exports(e) {
//       D = e;
//     },
//   },
//   Q = {};
// /**
//  * @license React
//  * react.production.min.js
//  *
//  * Copyright (c) Facebook, Inc. and its affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  */ var Gr = Symbol.for("react.element"),
//   Nf = Symbol.for("react.portal"),
//   Mf = Symbol.for("react.fragment"),
//   Df = Symbol.for("react.strict_mode"),
//   Of = Symbol.for("react.profiler"),
//   zf = Symbol.for("react.provider"),
//   jf = Symbol.for("react.context"),
//   If = Symbol.for("react.forward_ref"),
//   Ff = Symbol.for("react.suspense"),
//   Uf = Symbol.for("react.memo"),
//   Af = Symbol.for("react.lazy"),
//   da = Symbol.iterator;
// function Bf(e) {
//   return e === null || typeof e != "object"
//     ? null
//     : ((e = (da && e[da]) || e["@@iterator"]),
//       typeof e == "function" ? e : null);
// }
// var Bu = {
//     isMounted: function () {
//       return !1;
//     },
//     enqueueForceUpdate: function () {},
//     enqueueReplaceState: function () {},
//     enqueueSetState: function () {},
//   },
//   $u = Object.assign,
//   Wu = {};
// function Zn(e, t, n) {
//   (this.props = e),
//     (this.context = t),
//     (this.refs = Wu),
//     (this.updater = n || Bu);
// }
// Zn.prototype.isReactComponent = {};
// Zn.prototype.setState = function (e, t) {
//   if (typeof e != "object" && typeof e != "function" && e != null)
//     throw Error(
//       "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
//     );
//   this.updater.enqueueSetState(this, e, t, "setState");
// };
// Zn.prototype.forceUpdate = function (e) {
//   this.updater.enqueueForceUpdate(this, e, "forceUpdate");
// };
// function Hu() {}
// Hu.prototype = Zn.prototype;
// function ss(e, t, n) {
//   (this.props = e),
//     (this.context = t),
//     (this.refs = Wu),
//     (this.updater = n || Bu);
// }
// var as = (ss.prototype = new Hu());
// as.constructor = ss;
// $u(as, Zn.prototype);
// as.isPureReactComponent = !0;
// var fa = Array.isArray,
//   Vu = Object.prototype.hasOwnProperty,
//   us = { current: null },
//   Qu = { key: !0, ref: !0, __self: !0, __source: !0 };
// function Ku(e, t, n) {
//   var r,
//     i = {},
//     o = null,
//     l = null;
//   if (t != null)
//     for (r in (t.ref !== void 0 && (l = t.ref),
//     t.key !== void 0 && (o = "" + t.key),
//     t))
//       Vu.call(t, r) && !Qu.hasOwnProperty(r) && (i[r] = t[r]);
//   var a = arguments.length - 2;
//   if (a === 1) i.children = n;
//   else if (1 < a) {
//     for (var s = Array(a), c = 0; c < a; c++) s[c] = arguments[c + 2];
//     i.children = s;
//   }
//   if (e && e.defaultProps)
//     for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
//   return {
//     $$typeof: Gr,
//     type: e,
//     key: o,
//     ref: l,
//     props: i,
//     _owner: us.current,
//   };
// }
// function $f(e, t) {
//   return {
//     $$typeof: Gr,
//     type: e.type,
//     key: t,
//     ref: e.ref,
//     props: e.props,
//     _owner: e._owner,
//   };
// }
// function cs(e) {
//   return typeof e == "object" && e !== null && e.$$typeof === Gr;
// }
// function Wf(e) {
//   var t = { "=": "=0", ":": "=2" };
//   return (
//     "$" +
//     e.replace(/[=:]/g, function (n) {
//       return t[n];
//     })
//   );
// }
// var ha = /\/+/g;
// function Do(e, t) {
//   return typeof e == "object" && e !== null && e.key != null
//     ? Wf("" + e.key)
//     : t.toString(36);
// }
// function _i(e, t, n, r, i) {
//   var o = typeof e;
//   (o === "undefined" || o === "boolean") && (e = null);
//   var l = !1;
//   if (e === null) l = !0;
//   else
//     switch (o) {
//       case "string":
//       case "number":
//         l = !0;
//         break;
//       case "object":
//         switch (e.$$typeof) {
//           case Gr:
//           case Nf:
//             l = !0;
//         }
//     }
//   if (l)
//     return (
//       (l = e),
//       (i = i(l)),
//       (e = r === "" ? "." + Do(l, 0) : r),
//       fa(i)
//         ? ((n = ""),
//           e != null && (n = e.replace(ha, "$&/") + "/"),
//           _i(i, t, n, "", function (c) {
//             return c;
//           }))
//         : i != null &&
//           (cs(i) &&
//             (i = $f(
//               i,
//               n +
//                 (!i.key || (l && l.key === i.key)
//                   ? ""
//                   : ("" + i.key).replace(ha, "$&/") + "/") +
//                 e
//             )),
//           t.push(i)),
//       1
//     );
//   if (((l = 0), (r = r === "" ? "." : r + ":"), fa(e)))
//     for (var a = 0; a < e.length; a++) {
//       o = e[a];
//       var s = r + Do(o, a);
//       l += _i(o, t, n, s, i);
//     }
//   else if (((s = Bf(e)), typeof s == "function"))
//     for (e = s.call(e), a = 0; !(o = e.next()).done; )
//       (o = o.value), (s = r + Do(o, a++)), (l += _i(o, t, n, s, i));
//   else if (o === "object")
//     throw (
//       ((t = String(e)),
//       Error(
//         "Objects are not valid as a React child (found: " +
//           (t === "[object Object]"
//             ? "object with keys {" + Object.keys(e).join(", ") + "}"
//             : t) +
//           "). If you meant to render a collection of children, use an array instead."
//       ))
//     );
//   return l;
// }
// function ii(e, t, n) {
//   if (e == null) return e;
//   var r = [],
//     i = 0;
//   return (
//     _i(e, r, "", "", function (o) {
//       return t.call(n, o, i++);
//     }),
//     r
//   );
// }
// function Hf(e) {
//   if (e._status === -1) {
//     var t = e._result;
//     (t = t()),
//       t.then(
//         function (n) {
//           (e._status === 0 || e._status === -1) &&
//             ((e._status = 1), (e._result = n));
//         },
//         function (n) {
//           (e._status === 0 || e._status === -1) &&
//             ((e._status = 2), (e._result = n));
//         }
//       ),
//       e._status === -1 && ((e._status = 0), (e._result = t));
//   }
//   if (e._status === 1) return e._result.default;
//   throw e._result;
// }
// var Oe = { current: null },
//   ki = { transition: null },
//   Vf = {
//     ReactCurrentDispatcher: Oe,
//     ReactCurrentBatchConfig: ki,
//     ReactCurrentOwner: us,
//   };
// Q.Children = {
//   map: ii,
//   forEach: function (e, t, n) {
//     ii(
//       e,
//       function () {
//         t.apply(this, arguments);
//       },
//       n
//     );
//   },
//   count: function (e) {
//     var t = 0;
//     return (
//       ii(e, function () {
//         t++;
//       }),
//       t
//     );
//   },
//   toArray: function (e) {
//     return (
//       ii(e, function (t) {
//         return t;
//       }) || []
//     );
//   },
//   only: function (e) {
//     if (!cs(e))
//       throw Error(
//         "React.Children.only expected to receive a single React element child."
//       );
//     return e;
//   },
// };
// Q.Component = Zn;
// Q.Fragment = Mf;
// Q.Profiler = Of;
// Q.PureComponent = ss;
// Q.StrictMode = Df;
// Q.Suspense = Ff;
// Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vf;
// Q.cloneElement = function (e, t, n) {
//   if (e == null)
//     throw Error(
//       "React.cloneElement(...): The argument must be a React element, but you passed " +
//         e +
//         "."
//     );
//   var r = $u({}, e.props),
//     i = e.key,
//     o = e.ref,
//     l = e._owner;
//   if (t != null) {
//     if (
//       (t.ref !== void 0 && ((o = t.ref), (l = us.current)),
//       t.key !== void 0 && (i = "" + t.key),
//       e.type && e.type.defaultProps)
//     )
//       var a = e.type.defaultProps;
//     for (s in t)
//       Vu.call(t, s) &&
//         !Qu.hasOwnProperty(s) &&
//         (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
//   }
//   var s = arguments.length - 2;
//   if (s === 1) r.children = n;
//   else if (1 < s) {
//     a = Array(s);
//     for (var c = 0; c < s; c++) a[c] = arguments[c + 2];
//     r.children = a;
//   }
//   return { $$typeof: Gr, type: e.type, key: i, ref: o, props: r, _owner: l };
// };
// Q.createContext = function (e) {
//   return (
//     (e = {
//       $$typeof: jf,
//       _currentValue: e,
//       _currentValue2: e,
//       _threadCount: 0,
//       Provider: null,
//       Consumer: null,
//       _defaultValue: null,
//       _globalName: null,
//     }),
//     (e.Provider = { $$typeof: zf, _context: e }),
//     (e.Consumer = e)
//   );
// };
// Q.createElement = Ku;
// Q.createFactory = function (e) {
//   var t = Ku.bind(null, e);
//   return (t.type = e), t;
// };
// Q.createRef = function () {
//   return { current: null };
// };
// Q.forwardRef = function (e) {
//   return { $$typeof: If, render: e };
// };
// Q.isValidElement = cs;
// Q.lazy = function (e) {
//   return { $$typeof: Af, _payload: { _status: -1, _result: e }, _init: Hf };
// };
// Q.memo = function (e, t) {
//   return { $$typeof: Uf, type: e, compare: t === void 0 ? null : t };
// };
// Q.startTransition = function (e) {
//   var t = ki.transition;
//   ki.transition = {};
//   try {
//     e();
//   } finally {
//     ki.transition = t;
//   }
// };
// Q.unstable_act = function () {
//   throw Error("act(...) is not supported in production builds of React.");
// };
// Q.useCallback = function (e, t) {
//   return Oe.current.useCallback(e, t);
// };
// Q.useContext = function (e) {
//   return Oe.current.useContext(e);
// };
// Q.useDebugValue = function () {};
// Q.useDeferredValue = function (e) {
//   return Oe.current.useDeferredValue(e);
// };
// Q.useEffect = function (e, t) {
//   return Oe.current.useEffect(e, t);
// };
// Q.useId = function () {
//   return Oe.current.useId();
// };
// Q.useImperativeHandle = function (e, t, n) {
//   return Oe.current.useImperativeHandle(e, t, n);
// };
// Q.useInsertionEffect = function (e, t) {
//   return Oe.current.useInsertionEffect(e, t);
// };
// Q.useLayoutEffect = function (e, t) {
//   return Oe.current.useLayoutEffect(e, t);
// };
// Q.useMemo = function (e, t) {
//   return Oe.current.useMemo(e, t);
// };
// Q.useReducer = function (e, t, n) {
//   return Oe.current.useReducer(e, t, n);
// };
// Q.useRef = function (e) {
//   return Oe.current.useRef(e);
// };
// Q.useState = function (e) {
//   return Oe.current.useState(e);
// };
// Q.useSyncExternalStore = function (e, t, n) {
//   return Oe.current.useSyncExternalStore(e, t, n);
// };
// Q.useTransition = function () {
//   return Oe.current.useTransition();
// };
// Q.version = "18.2.0";
// (function (e) {
//   e.exports = Q;
// })(Tf);
// const Yu = Au(D),
//   sl = Pf({ __proto__: null, default: Yu }, [D]);
// /**
//  * @license React
//  * react-jsx-runtime.production.min.js
//  *
//  * Copyright (c) Facebook, Inc. and its affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  */ var Qf = D,
//   Kf = Symbol.for("react.element"),
//   Yf = Symbol.for("react.fragment"),
//   Gf = Object.prototype.hasOwnProperty,
//   Xf = Qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
//   Zf = { key: !0, ref: !0, __self: !0, __source: !0 };
// function Gu(e, t, n) {
//   var r,
//     i = {},
//     o = null,
//     l = null;
//   n !== void 0 && (o = "" + n),
//     t.key !== void 0 && (o = "" + t.key),
//     t.ref !== void 0 && (l = t.ref);
//   for (r in t) Gf.call(t, r) && !Zf.hasOwnProperty(r) && (i[r] = t[r]);
//   if (e && e.defaultProps)
//     for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
//   return {
//     $$typeof: Kf,
//     type: e,
//     key: o,
//     ref: l,
//     props: i,
//     _owner: Xf.current,
//   };
// }
// io.Fragment = Yf;
// io.jsx = Gu;
// io.jsxs = Gu;
// (function (e) {
//   e.exports = io;
// })(Rf);
// const pa = Tr.Fragment,
//   M = Tr.jsx,
//   ne = Tr.jsxs;
// var al = {},
//   ul = {},
//   Jf = {
//     get exports() {
//       return ul;
//     },
//     set exports(e) {
//       ul = e;
//     },
//   },
//   Ve = {},
//   cl = {},
//   qf = {
//     get exports() {
//       return cl;
//     },
//     set exports(e) {
//       cl = e;
//     },
//   },
//   Xu = {};
// /**
//  * @license React
//  * scheduler.production.min.js
//  *
//  * Copyright (c) Facebook, Inc. and its affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  */ (function (e) {
//   function t(O, W) {
//     var F = O.length;
//     O.push(W);
//     e: for (; 0 < F; ) {
//       var Z = (F - 1) >>> 1,
//         ue = O[Z];
//       if (0 < i(ue, W)) (O[Z] = W), (O[F] = ue), (F = Z);
//       else break e;
//     }
//   }
//   function n(O) {
//     return O.length === 0 ? null : O[0];
//   }
//   function r(O) {
//     if (O.length === 0) return null;
//     var W = O[0],
//       F = O.pop();
//     if (F !== W) {
//       O[0] = F;
//       e: for (var Z = 0, ue = O.length, yn = ue >>> 1; Z < yn; ) {
//         var Ce = 2 * (Z + 1) - 1,
//           bn = O[Ce],
//           mt = Ce + 1,
//           qt = O[mt];
//         if (0 > i(bn, F))
//           mt < ue && 0 > i(qt, bn)
//             ? ((O[Z] = qt), (O[mt] = F), (Z = mt))
//             : ((O[Z] = bn), (O[Ce] = F), (Z = Ce));
//         else if (mt < ue && 0 > i(qt, F)) (O[Z] = qt), (O[mt] = F), (Z = mt);
//         else break e;
//       }
//     }
//     return W;
//   }
//   function i(O, W) {
//     var F = O.sortIndex - W.sortIndex;
//     return F !== 0 ? F : O.id - W.id;
//   }
//   if (typeof performance == "object" && typeof performance.now == "function") {
//     var o = performance;
//     e.unstable_now = function () {
//       return o.now();
//     };
//   } else {
//     var l = Date,
//       a = l.now();
//     e.unstable_now = function () {
//       return l.now() - a;
//     };
//   }
//   var s = [],
//     c = [],
//     d = 1,
//     u = null,
//     f = 3,
//     p = !1,
//     g = !1,
//     S = !1,
//     y = typeof setTimeout == "function" ? setTimeout : null,
//     v = typeof clearTimeout == "function" ? clearTimeout : null,
//     h = typeof setImmediate < "u" ? setImmediate : null;
//   typeof navigator < "u" &&
//     navigator.scheduling !== void 0 &&
//     navigator.scheduling.isInputPending !== void 0 &&
//     navigator.scheduling.isInputPending.bind(navigator.scheduling);
//   function m(O) {
//     for (var W = n(c); W !== null; ) {
//       if (W.callback === null) r(c);
//       else if (W.startTime <= O)
//         r(c), (W.sortIndex = W.expirationTime), t(s, W);
//       else break;
//       W = n(c);
//     }
//   }
//   function _(O) {
//     if (((S = !1), m(O), !g))
//       if (n(s) !== null) (g = !0), Ke(x);
//       else {
//         var W = n(c);
//         W !== null && vt(_, W.startTime - O);
//       }
//   }
//   function x(O, W) {
//     (g = !1), S && ((S = !1), v(E), (E = -1)), (p = !0);
//     var F = f;
//     try {
//       for (
//         m(W), u = n(s);
//         u !== null && (!(u.expirationTime > W) || (O && !A()));

//       ) {
//         var Z = u.callback;
//         if (typeof Z == "function") {
//           (u.callback = null), (f = u.priorityLevel);
//           var ue = Z(u.expirationTime <= W);
//           (W = e.unstable_now()),
//             typeof ue == "function" ? (u.callback = ue) : u === n(s) && r(s),
//             m(W);
//         } else r(s);
//         u = n(s);
//       }
//       if (u !== null) var yn = !0;
//       else {
//         var Ce = n(c);
//         Ce !== null && vt(_, Ce.startTime - W), (yn = !1);
//       }
//       return yn;
//     } finally {
//       (u = null), (f = F), (p = !1);
//     }
//   }
//   var T = !1,
//     R = null,
//     E = -1,
//     N = 5,
//     L = -1;
//   function A() {
//     return !(e.unstable_now() - L < N);
//   }
//   function xe() {
//     if (R !== null) {
//       var O = e.unstable_now();
//       L = O;
//       var W = !0;
//       try {
//         W = R(!0, O);
//       } finally {
//         W ? ie() : ((T = !1), (R = null));
//       }
//     } else T = !1;
//   }
//   var ie;
//   if (typeof h == "function")
//     ie = function () {
//       h(xe);
//     };
//   else if (typeof MessageChannel < "u") {
//     var b = new MessageChannel(),
//       he = b.port2;
//     (b.port1.onmessage = xe),
//       (ie = function () {
//         he.postMessage(null);
//       });
//   } else
//     ie = function () {
//       y(xe, 0);
//     };
//   function Ke(O) {
//     (R = O), T || ((T = !0), ie());
//   }
//   function vt(O, W) {
//     E = y(function () {
//       O(e.unstable_now());
//     }, W);
//   }
//   (e.unstable_IdlePriority = 5),
//     (e.unstable_ImmediatePriority = 1),
//     (e.unstable_LowPriority = 4),
//     (e.unstable_NormalPriority = 3),
//     (e.unstable_Profiling = null),
//     (e.unstable_UserBlockingPriority = 2),
//     (e.unstable_cancelCallback = function (O) {
//       O.callback = null;
//     }),
//     (e.unstable_continueExecution = function () {
//       g || p || ((g = !0), Ke(x));
//     }),
//     (e.unstable_forceFrameRate = function (O) {
//       0 > O || 125 < O
//         ? console.error(
//             "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
//           )
//         : (N = 0 < O ? Math.floor(1e3 / O) : 5);
//     }),
//     (e.unstable_getCurrentPriorityLevel = function () {
//       return f;
//     }),
//     (e.unstable_getFirstCallbackNode = function () {
//       return n(s);
//     }),
//     (e.unstable_next = function (O) {
//       switch (f) {
//         case 1:
//         case 2:
//         case 3:
//           var W = 3;
//           break;
//         default:
//           W = f;
//       }
//       var F = f;
//       f = W;
//       try {
//         return O();
//       } finally {
//         f = F;
//       }
//     }),
//     (e.unstable_pauseExecution = function () {}),
//     (e.unstable_requestPaint = function () {}),
//     (e.unstable_runWithPriority = function (O, W) {
//       switch (O) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//           break;
//         default:
//           O = 3;
//       }
//       var F = f;
//       f = O;
//       try {
//         return W();
//       } finally {
//         f = F;
//       }
//     }),
//     (e.unstable_scheduleCallback = function (O, W, F) {
//       var Z = e.unstable_now();
//       switch (
//         (typeof F == "object" && F !== null
//           ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? Z + F : Z))
//           : (F = Z),
//         O)
//       ) {
//         case 1:
//           var ue = -1;
//           break;
//         case 2:
//           ue = 250;
//           break;
//         case 5:
//           ue = 1073741823;
//           break;
//         case 4:
//           ue = 1e4;
//           break;
//         default:
//           ue = 5e3;
//       }
//       return (
//         (ue = F + ue),
//         (O = {
//           id: d++,
//           callback: W,
//           priorityLevel: O,
//           startTime: F,
//           expirationTime: ue,
//           sortIndex: -1,
//         }),
//         F > Z
//           ? ((O.sortIndex = F),
//             t(c, O),
//             n(s) === null &&
//               O === n(c) &&
//               (S ? (v(E), (E = -1)) : (S = !0), vt(_, F - Z)))
//           : ((O.sortIndex = ue), t(s, O), g || p || ((g = !0), Ke(x))),
//         O
//       );
//     }),
//     (e.unstable_shouldYield = A),
//     (e.unstable_wrapCallback = function (O) {
//       var W = f;
//       return function () {
//         var F = f;
//         f = W;
//         try {
//           return O.apply(this, arguments);
//         } finally {
//           f = F;
//         }
//       };
//     });
// })(Xu);
// (function (e) {
//   e.exports = Xu;
// })(qf);
// /**
//  * @license React
//  * react-dom.production.min.js
//  *
//  * Copyright (c) Facebook, Inc. and its affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  */ var Zu = D,
//   He = cl;
// function P(e) {
//   for (
//     var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
//     n < arguments.length;
//     n++
//   )
//     t += "&args[]=" + encodeURIComponent(arguments[n]);
//   return (
//     "Minified React error #" +
//     e +
//     "; visit " +
//     t +
//     " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
//   );
// }
// var Ju = new Set(),
//   Nr = {};
// function pn(e, t) {
//   $n(e, t), $n(e + "Capture", t);
// }
// function $n(e, t) {
//   for (Nr[e] = t, e = 0; e < t.length; e++) Ju.add(t[e]);
// }
// var Ct = !(
//     typeof window > "u" ||
//     typeof window.document > "u" ||
//     typeof window.document.createElement > "u"
//   ),
//   dl = Object.prototype.hasOwnProperty,
//   bf =
//     /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
//   va = {},
//   ma = {};
// function eh(e) {
//   return dl.call(ma, e)
//     ? !0
//     : dl.call(va, e)
//     ? !1
//     : bf.test(e)
//     ? (ma[e] = !0)
//     : ((va[e] = !0), !1);
// }
// function th(e, t, n, r) {
//   if (n !== null && n.type === 0) return !1;
//   switch (typeof t) {
//     case "function":
//     case "symbol":
//       return !0;
//     case "boolean":
//       return r
//         ? !1
//         : n !== null
//         ? !n.acceptsBooleans
//         : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
//     default:
//       return !1;
//   }
// }
// function nh(e, t, n, r) {
//   if (t === null || typeof t > "u" || th(e, t, n, r)) return !0;
//   if (r) return !1;
//   if (n !== null)
//     switch (n.type) {
//       case 3:
//         return !t;
//       case 4:
//         return t === !1;
//       case 5:
//         return isNaN(t);
//       case 6:
//         return isNaN(t) || 1 > t;
//     }
//   return !1;
// }
// function ze(e, t, n, r, i, o, l) {
//   (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
//     (this.attributeName = r),
//     (this.attributeNamespace = i),
//     (this.mustUseProperty = n),
//     (this.propertyName = e),
//     (this.type = t),
//     (this.sanitizeURL = o),
//     (this.removeEmptyString = l);
// }
// var Ee = {};
// "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
//   .split(" ")
//   .forEach(function (e) {
//     Ee[e] = new ze(e, 0, !1, e, null, !1, !1);
//   });
// [
//   ["acceptCharset", "accept-charset"],
//   ["className", "class"],
//   ["htmlFor", "for"],
//   ["httpEquiv", "http-equiv"],
// ].forEach(function (e) {
//   var t = e[0];
//   Ee[t] = new ze(t, 1, !1, e[1], null, !1, !1);
// });
// ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
//   Ee[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
// });
// [
//   "autoReverse",
//   "externalResourcesRequired",
//   "focusable",
//   "preserveAlpha",
// ].forEach(function (e) {
//   Ee[e] = new ze(e, 2, !1, e, null, !1, !1);
// });
// "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
//   .split(" ")
//   .forEach(function (e) {
//     Ee[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
//   });
// ["checked", "multiple", "muted", "selected"].forEach(function (e) {
//   Ee[e] = new ze(e, 3, !0, e, null, !1, !1);
// });
// ["capture", "download"].forEach(function (e) {
//   Ee[e] = new ze(e, 4, !1, e, null, !1, !1);
// });
// ["cols", "rows", "size", "span"].forEach(function (e) {
//   Ee[e] = new ze(e, 6, !1, e, null, !1, !1);
// });
// ["rowSpan", "start"].forEach(function (e) {
//   Ee[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
// });
// var ds = /[\-:]([a-z])/g;
// function fs(e) {
//   return e[1].toUpperCase();
// }
// "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
//   .split(" ")
//   .forEach(function (e) {
//     var t = e.replace(ds, fs);
//     Ee[t] = new ze(t, 1, !1, e, null, !1, !1);
//   });
// "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
//   .split(" ")
//   .forEach(function (e) {
//     var t = e.replace(ds, fs);
//     Ee[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
//   });
// ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
//   var t = e.replace(ds, fs);
//   Ee[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
// });
// ["tabIndex", "crossOrigin"].forEach(function (e) {
//   Ee[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
// });
// Ee.xlinkHref = new ze(
//   "xlinkHref",
//   1,
//   !1,
//   "xlink:href",
//   "http://www.w3.org/1999/xlink",
//   !0,
//   !1
// );
// ["src", "href", "action", "formAction"].forEach(function (e) {
//   Ee[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
// });
// function hs(e, t, n, r) {
//   var i = Ee.hasOwnProperty(t) ? Ee[t] : null;
//   (i !== null
//     ? i.type !== 0
//     : r ||
//       !(2 < t.length) ||
//       (t[0] !== "o" && t[0] !== "O") ||
//       (t[1] !== "n" && t[1] !== "N")) &&
//     (nh(t, n, i, r) && (n = null),
//     r || i === null
//       ? eh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
//       : i.mustUseProperty
//       ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
//       : ((t = i.attributeName),
//         (r = i.attributeNamespace),
//         n === null
//           ? e.removeAttribute(t)
//           : ((i = i.type),
//             (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
//             r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
// }
// var Nt = Zu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
//   oi = Symbol.for("react.element"),
//   Sn = Symbol.for("react.portal"),
//   _n = Symbol.for("react.fragment"),
//   ps = Symbol.for("react.strict_mode"),
//   fl = Symbol.for("react.profiler"),
//   qu = Symbol.for("react.provider"),
//   bu = Symbol.for("react.context"),
//   vs = Symbol.for("react.forward_ref"),
//   hl = Symbol.for("react.suspense"),
//   pl = Symbol.for("react.suspense_list"),
//   ms = Symbol.for("react.memo"),
//   Ot = Symbol.for("react.lazy"),
//   ec = Symbol.for("react.offscreen"),
//   ya = Symbol.iterator;
// function or(e) {
//   return e === null || typeof e != "object"
//     ? null
//     : ((e = (ya && e[ya]) || e["@@iterator"]),
//       typeof e == "function" ? e : null);
// }
// var se = Object.assign,
//   Oo;
// function vr(e) {
//   if (Oo === void 0)
//     try {
//       throw Error();
//     } catch (n) {
//       var t = n.stack.trim().match(/\n( *(at )?)/);
//       Oo = (t && t[1]) || "";
//     }
//   return (
//     `
// ` +
//     Oo +
//     e
//   );
// }
// var zo = !1;
// function jo(e, t) {
//   if (!e || zo) return "";
//   zo = !0;
//   var n = Error.prepareStackTrace;
//   Error.prepareStackTrace = void 0;
//   try {
//     if (t)
//       if (
//         ((t = function () {
//           throw Error();
//         }),
//         Object.defineProperty(t.prototype, "props", {
//           set: function () {
//             throw Error();
//           },
//         }),
//         typeof Reflect == "object" && Reflect.construct)
//       ) {
//         try {
//           Reflect.construct(t, []);
//         } catch (c) {
//           var r = c;
//         }
//         Reflect.construct(e, [], t);
//       } else {
//         try {
//           t.call();
//         } catch (c) {
//           r = c;
//         }
//         e.call(t.prototype);
//       }
//     else {
//       try {
//         throw Error();
//       } catch (c) {
//         r = c;
//       }
//       e();
//     }
//   } catch (c) {
//     if (c && r && typeof c.stack == "string") {
//       for (
//         var i = c.stack.split(`
// `),
//           o = r.stack.split(`
// `),
//           l = i.length - 1,
//           a = o.length - 1;
//         1 <= l && 0 <= a && i[l] !== o[a];

//       )
//         a--;
//       for (; 1 <= l && 0 <= a; l--, a--)
//         if (i[l] !== o[a]) {
//           if (l !== 1 || a !== 1)
//             do
//               if ((l--, a--, 0 > a || i[l] !== o[a])) {
//                 var s =
//                   `
// ` + i[l].replace(" at new ", " at ");
//                 return (
//                   e.displayName &&
//                     s.includes("<anonymous>") &&
//                     (s = s.replace("<anonymous>", e.displayName)),
//                   s
//                 );
//               }
//             while (1 <= l && 0 <= a);
//           break;
//         }
//     }
//   } finally {
//     (zo = !1), (Error.prepareStackTrace = n);
//   }
//   return (e = e ? e.displayName || e.name : "") ? vr(e) : "";
// }
// function rh(e) {
//   switch (e.tag) {
//     case 5:
//       return vr(e.type);
//     case 16:
//       return vr("Lazy");
//     case 13:
//       return vr("Suspense");
//     case 19:
//       return vr("SuspenseList");
//     case 0:
//     case 2:
//     case 15:
//       return (e = jo(e.type, !1)), e;
//     case 11:
//       return (e = jo(e.type.render, !1)), e;
//     case 1:
//       return (e = jo(e.type, !0)), e;
//     default:
//       return "";
//   }
// }
// function vl(e) {
//   if (e == null) return null;
//   if (typeof e == "function") return e.displayName || e.name || null;
//   if (typeof e == "string") return e;
//   switch (e) {
//     case _n:
//       return "Fragment";
//     case Sn:
//       return "Portal";
//     case fl:
//       return "Profiler";
//     case ps:
//       return "StrictMode";
//     case hl:
//       return "Suspense";
//     case pl:
//       return "SuspenseList";
//   }
//   if (typeof e == "object")
//     switch (e.$$typeof) {
//       case bu:
//         return (e.displayName || "Context") + ".Consumer";
//       case qu:
//         return (e._context.displayName || "Context") + ".Provider";
//       case vs:
//         var t = e.render;
//         return (
//           (e = e.displayName),
//           e ||
//             ((e = t.displayName || t.name || ""),
//             (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
//           e
//         );
//       case ms:
//         return (
//           (t = e.displayName || null), t !== null ? t : vl(e.type) || "Memo"
//         );
//       case Ot:
//         (t = e._payload), (e = e._init);
//         try {
//           return vl(e(t));
//         } catch {}
//     }
//   return null;
// }
// function ih(e) {
//   var t = e.type;
//   switch (e.tag) {
//     case 24:
//       return "Cache";
//     case 9:
//       return (t.displayName || "Context") + ".Consumer";
//     case 10:
//       return (t._context.displayName || "Context") + ".Provider";
//     case 18:
//       return "DehydratedFragment";
//     case 11:
//       return (
//         (e = t.render),
//         (e = e.displayName || e.name || ""),
//         t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
//       );
//     case 7:
//       return "Fragment";
//     case 5:
//       return t;
//     case 4:
//       return "Portal";
//     case 3:
//       return "Root";
//     case 6:
//       return "Text";
//     case 16:
//       return vl(t);
//     case 8:
//       return t === ps ? "StrictMode" : "Mode";
//     case 22:
//       return "Offscreen";
//     case 12:
//       return "Profiler";
//     case 21:
//       return "Scope";
//     case 13:
//       return "Suspense";
//     case 19:
//       return "SuspenseList";
//     case 25:
//       return "TracingMarker";
//     case 1:
//     case 0:
//     case 17:
//     case 2:
//     case 14:
//     case 15:
//       if (typeof t == "function") return t.displayName || t.name || null;
//       if (typeof t == "string") return t;
//   }
//   return null;
// }
// function Yt(e) {
//   switch (typeof e) {
//     case "boolean":
//     case "number":
//     case "string":
//     case "undefined":
//       return e;
//     case "object":
//       return e;
//     default:
//       return "";
//   }
// }
// function tc(e) {
//   var t = e.type;
//   return (
//     (e = e.nodeName) &&
//     e.toLowerCase() === "input" &&
//     (t === "checkbox" || t === "radio")
//   );
// }
// function oh(e) {
//   var t = tc(e) ? "checked" : "value",
//     n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
//     r = "" + e[t];
//   if (
//     !e.hasOwnProperty(t) &&
//     typeof n < "u" &&
//     typeof n.get == "function" &&
//     typeof n.set == "function"
//   ) {
//     var i = n.get,
//       o = n.set;
//     return (
//       Object.defineProperty(e, t, {
//         configurable: !0,
//         get: function () {
//           return i.call(this);
//         },
//         set: function (l) {
//           (r = "" + l), o.call(this, l);
//         },
//       }),
//       Object.defineProperty(e, t, { enumerable: n.enumerable }),
//       {
//         getValue: function () {
//           return r;
//         },
//         setValue: function (l) {
//           r = "" + l;
//         },
//         stopTracking: function () {
//           (e._valueTracker = null), delete e[t];
//         },
//       }
//     );
//   }
// }
// function li(e) {
//   e._valueTracker || (e._valueTracker = oh(e));
// }
// function nc(e) {
//   if (!e) return !1;
//   var t = e._valueTracker;
//   if (!t) return !0;
//   var n = t.getValue(),
//     r = "";
//   return (
//     e && (r = tc(e) ? (e.checked ? "true" : "false") : e.value),
//     (e = r),
//     e !== n ? (t.setValue(e), !0) : !1
//   );
// }
// function Oi(e) {
//   if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
//     return null;
//   try {
//     return e.activeElement || e.body;
//   } catch {
//     return e.body;
//   }
// }
// function ml(e, t) {
//   var n = t.checked;
//   return se({}, t, {
//     defaultChecked: void 0,
//     defaultValue: void 0,
//     value: void 0,
//     checked: n ?? e._wrapperState.initialChecked,
//   });
// }
// function ga(e, t) {
//   var n = t.defaultValue == null ? "" : t.defaultValue,
//     r = t.checked != null ? t.checked : t.defaultChecked;
//   (n = Yt(t.value != null ? t.value : n)),
//     (e._wrapperState = {
//       initialChecked: r,
//       initialValue: n,
//       controlled:
//         t.type === "checkbox" || t.type === "radio"
//           ? t.checked != null
//           : t.value != null,
//     });
// }
// function rc(e, t) {
//   (t = t.checked), t != null && hs(e, "checked", t, !1);
// }
// function yl(e, t) {
//   rc(e, t);
//   var n = Yt(t.value),
//     r = t.type;
//   if (n != null)
//     r === "number"
//       ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
//       : e.value !== "" + n && (e.value = "" + n);
//   else if (r === "submit" || r === "reset") {
//     e.removeAttribute("value");
//     return;
//   }
//   t.hasOwnProperty("value")
//     ? gl(e, t.type, n)
//     : t.hasOwnProperty("defaultValue") && gl(e, t.type, Yt(t.defaultValue)),
//     t.checked == null &&
//       t.defaultChecked != null &&
//       (e.defaultChecked = !!t.defaultChecked);
// }
// function wa(e, t, n) {
//   if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
//     var r = t.type;
//     if (
//       !(
//         (r !== "submit" && r !== "reset") ||
//         (t.value !== void 0 && t.value !== null)
//       )
//     )
//       return;
//     (t = "" + e._wrapperState.initialValue),
//       n || t === e.value || (e.value = t),
//       (e.defaultValue = t);
//   }
//   (n = e.name),
//     n !== "" && (e.name = ""),
//     (e.defaultChecked = !!e._wrapperState.initialChecked),
//     n !== "" && (e.name = n);
// }
// function gl(e, t, n) {
//   (t !== "number" || Oi(e.ownerDocument) !== e) &&
//     (n == null
//       ? (e.defaultValue = "" + e._wrapperState.initialValue)
//       : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
// }
// var mr = Array.isArray;
// function zn(e, t, n, r) {
//   if (((e = e.options), t)) {
//     t = {};
//     for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
//     for (n = 0; n < e.length; n++)
//       (i = t.hasOwnProperty("$" + e[n].value)),
//         e[n].selected !== i && (e[n].selected = i),
//         i && r && (e[n].defaultSelected = !0);
//   } else {
//     for (n = "" + Yt(n), t = null, i = 0; i < e.length; i++) {
//       if (e[i].value === n) {
//         (e[i].selected = !0), r && (e[i].defaultSelected = !0);
//         return;
//       }
//       t !== null || e[i].disabled || (t = e[i]);
//     }
//     t !== null && (t.selected = !0);
//   }
// }
// function wl(e, t) {
//   if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
//   return se({}, t, {
//     value: void 0,
//     defaultValue: void 0,
//     children: "" + e._wrapperState.initialValue,
//   });
// }
// function Sa(e, t) {
//   var n = t.value;
//   if (n == null) {
//     if (((n = t.children), (t = t.defaultValue), n != null)) {
//       if (t != null) throw Error(P(92));
//       if (mr(n)) {
//         if (1 < n.length) throw Error(P(93));
//         n = n[0];
//       }
//       t = n;
//     }
//     t == null && (t = ""), (n = t);
//   }
//   e._wrapperState = { initialValue: Yt(n) };
// }
// function ic(e, t) {
//   var n = Yt(t.value),
//     r = Yt(t.defaultValue);
//   n != null &&
//     ((n = "" + n),
//     n !== e.value && (e.value = n),
//     t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
//     r != null && (e.defaultValue = "" + r);
// }
// function _a(e) {
//   var t = e.textContent;
//   t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
// }
// function oc(e) {
//   switch (e) {
//     case "svg":
//       return "http://www.w3.org/2000/svg";
//     case "math":
//       return "http://www.w3.org/1998/Math/MathML";
//     default:
//       return "http://www.w3.org/1999/xhtml";
//   }
// }
// function Sl(e, t) {
//   return e == null || e === "http://www.w3.org/1999/xhtml"
//     ? oc(t)
//     : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
//     ? "http://www.w3.org/1999/xhtml"
//     : e;
// }
// var si,
//   lc = (function (e) {
//     return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
//       ? function (t, n, r, i) {
//           MSApp.execUnsafeLocalFunction(function () {
//             return e(t, n, r, i);
//           });
//         }
//       : e;
//   })(function (e, t) {
//     if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
//       e.innerHTML = t;
//     else {
//       for (
//         si = si || document.createElement("div"),
//           si.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
//           t = si.firstChild;
//         e.firstChild;

//       )
//         e.removeChild(e.firstChild);
//       for (; t.firstChild; ) e.appendChild(t.firstChild);
//     }
//   });
// function Mr(e, t) {
//   if (t) {
//     var n = e.firstChild;
//     if (n && n === e.lastChild && n.nodeType === 3) {
//       n.nodeValue = t;
//       return;
//     }
//   }
//   e.textContent = t;
// }
// var wr = {
//     animationIterationCount: !0,
//     aspectRatio: !0,
//     borderImageOutset: !0,
//     borderImageSlice: !0,
//     borderImageWidth: !0,
//     boxFlex: !0,
//     boxFlexGroup: !0,
//     boxOrdinalGroup: !0,
//     columnCount: !0,
//     columns: !0,
//     flex: !0,
//     flexGrow: !0,
//     flexPositive: !0,
//     flexShrink: !0,
//     flexNegative: !0,
//     flexOrder: !0,
//     gridArea: !0,
//     gridRow: !0,
//     gridRowEnd: !0,
//     gridRowSpan: !0,
//     gridRowStart: !0,
//     gridColumn: !0,
//     gridColumnEnd: !0,
//     gridColumnSpan: !0,
//     gridColumnStart: !0,
//     fontWeight: !0,
//     lineClamp: !0,
//     lineHeight: !0,
//     opacity: !0,
//     order: !0,
//     orphans: !0,
//     tabSize: !0,
//     widows: !0,
//     zIndex: !0,
//     zoom: !0,
//     fillOpacity: !0,
//     floodOpacity: !0,
//     stopOpacity: !0,
//     strokeDasharray: !0,
//     strokeDashoffset: !0,
//     strokeMiterlimit: !0,
//     strokeOpacity: !0,
//     strokeWidth: !0,
//   },
//   lh = ["Webkit", "ms", "Moz", "O"];
// Object.keys(wr).forEach(function (e) {
//   lh.forEach(function (t) {
//     (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wr[t] = wr[e]);
//   });
// });
// function sc(e, t, n) {
//   return t == null || typeof t == "boolean" || t === ""
//     ? ""
//     : n || typeof t != "number" || t === 0 || (wr.hasOwnProperty(e) && wr[e])
//     ? ("" + t).trim()
//     : t + "px";
// }
// function ac(e, t) {
//   e = e.style;
//   for (var n in t)
//     if (t.hasOwnProperty(n)) {
//       var r = n.indexOf("--") === 0,
//         i = sc(n, t[n], r);
//       n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
//     }
// }
// var sh = se(
//   { menuitem: !0 },
//   {
//     area: !0,
//     base: !0,
//     br: !0,
//     col: !0,
//     embed: !0,
//     hr: !0,
//     img: !0,
//     input: !0,
//     keygen: !0,
//     link: !0,
//     meta: !0,
//     param: !0,
//     source: !0,
//     track: !0,
//     wbr: !0,
//   }
// );
// function _l(e, t) {
//   if (t) {
//     if (sh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
//       throw Error(P(137, e));
//     if (t.dangerouslySetInnerHTML != null) {
//       if (t.children != null) throw Error(P(60));
//       if (
//         typeof t.dangerouslySetInnerHTML != "object" ||
//         !("__html" in t.dangerouslySetInnerHTML)
//       )
//         throw Error(P(61));
//     }
//     if (t.style != null && typeof t.style != "object") throw Error(P(62));
//   }
// }
// function kl(e, t) {
//   if (e.indexOf("-") === -1) return typeof t.is == "string";
//   switch (e) {
//     case "annotation-xml":
//     case "color-profile":
//     case "font-face":
//     case "font-face-src":
//     case "font-face-uri":
//     case "font-face-format":
//     case "font-face-name":
//     case "missing-glyph":
//       return !1;
//     default:
//       return !0;
//   }
// }
// var El = null;
// function ys(e) {
//   return (
//     (e = e.target || e.srcElement || window),
//     e.correspondingUseElement && (e = e.correspondingUseElement),
//     e.nodeType === 3 ? e.parentNode : e
//   );
// }
// var xl = null,
//   jn = null,
//   In = null;
// function ka(e) {
//   if ((e = Jr(e))) {
//     if (typeof xl != "function") throw Error(P(280));
//     var t = e.stateNode;
//     t && ((t = uo(t)), xl(e.stateNode, e.type, t));
//   }
// }
// function uc(e) {
//   jn ? (In ? In.push(e) : (In = [e])) : (jn = e);
// }
// function cc() {
//   if (jn) {
//     var e = jn,
//       t = In;
//     if (((In = jn = null), ka(e), t)) for (e = 0; e < t.length; e++) ka(t[e]);
//   }
// }
// function dc(e, t) {
//   return e(t);
// }
// function fc() {}
// var Io = !1;
// function hc(e, t, n) {
//   if (Io) return e(t, n);
//   Io = !0;
//   try {
//     return dc(e, t, n);
//   } finally {
//     (Io = !1), (jn !== null || In !== null) && (fc(), cc());
//   }
// }
// function Dr(e, t) {
//   var n = e.stateNode;
//   if (n === null) return null;
//   var r = uo(n);
//   if (r === null) return null;
//   n = r[t];
//   e: switch (t) {
//     case "onClick":
//     case "onClickCapture":
//     case "onDoubleClick":
//     case "onDoubleClickCapture":
//     case "onMouseDown":
//     case "onMouseDownCapture":
//     case "onMouseMove":
//     case "onMouseMoveCapture":
//     case "onMouseUp":
//     case "onMouseUpCapture":
//     case "onMouseEnter":
//       (r = !r.disabled) ||
//         ((e = e.type),
//         (r = !(
//           e === "button" ||
//           e === "input" ||
//           e === "select" ||
//           e === "textarea"
//         ))),
//         (e = !r);
//       break e;
//     default:
//       e = !1;
//   }
//   if (e) return null;
//   if (n && typeof n != "function") throw Error(P(231, t, typeof n));
//   return n;
// }
// var Cl = !1;
// if (Ct)
//   try {
//     var lr = {};
//     Object.defineProperty(lr, "passive", {
//       get: function () {
//         Cl = !0;
//       },
//     }),
//       window.addEventListener("test", lr, lr),
//       window.removeEventListener("test", lr, lr);
//   } catch {
//     Cl = !1;
//   }
// function ah(e, t, n, r, i, o, l, a, s) {
//   var c = Array.prototype.slice.call(arguments, 3);
//   try {
//     t.apply(n, c);
//   } catch (d) {
//     this.onError(d);
//   }
// }
// var Sr = !1,
//   zi = null,
//   ji = !1,
//   Pl = null,
//   uh = {
//     onError: function (e) {
//       (Sr = !0), (zi = e);
//     },
//   };
// function ch(e, t, n, r, i, o, l, a, s) {
//   (Sr = !1), (zi = null), ah.apply(uh, arguments);
// }
// function dh(e, t, n, r, i, o, l, a, s) {
//   if ((ch.apply(this, arguments), Sr)) {
//     if (Sr) {
//       var c = zi;
//       (Sr = !1), (zi = null);
//     } else throw Error(P(198));
//     ji || ((ji = !0), (Pl = c));
//   }
// }
// function vn(e) {
//   var t = e,
//     n = e;
//   if (e.alternate) for (; t.return; ) t = t.return;
//   else {
//     e = t;
//     do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
//     while (e);
//   }
//   return t.tag === 3 ? n : null;
// }
// function pc(e) {
//   if (e.tag === 13) {
//     var t = e.memoizedState;
//     if (
//       (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
//       t !== null)
//     )
//       return t.dehydrated;
//   }
//   return null;
// }
// function Ea(e) {
//   if (vn(e) !== e) throw Error(P(188));
// }
// function fh(e) {
//   var t = e.alternate;
//   if (!t) {
//     if (((t = vn(e)), t === null)) throw Error(P(188));
//     return t !== e ? null : e;
//   }
//   for (var n = e, r = t; ; ) {
//     var i = n.return;
//     if (i === null) break;
//     var o = i.alternate;
//     if (o === null) {
//       if (((r = i.return), r !== null)) {
//         n = r;
//         continue;
//       }
//       break;
//     }
//     if (i.child === o.child) {
//       for (o = i.child; o; ) {
//         if (o === n) return Ea(i), e;
//         if (o === r) return Ea(i), t;
//         o = o.sibling;
//       }
//       throw Error(P(188));
//     }
//     if (n.return !== r.return) (n = i), (r = o);
//     else {
//       for (var l = !1, a = i.child; a; ) {
//         if (a === n) {
//           (l = !0), (n = i), (r = o);
//           break;
//         }
//         if (a === r) {
//           (l = !0), (r = i), (n = o);
//           break;
//         }
//         a = a.sibling;
//       }
//       if (!l) {
//         for (a = o.child; a; ) {
//           if (a === n) {
//             (l = !0), (n = o), (r = i);
//             break;
//           }
//           if (a === r) {
//             (l = !0), (r = o), (n = i);
//             break;
//           }
//           a = a.sibling;
//         }
//         if (!l) throw Error(P(189));
//       }
//     }
//     if (n.alternate !== r) throw Error(P(190));
//   }
//   if (n.tag !== 3) throw Error(P(188));
//   return n.stateNode.current === n ? e : t;
// }
// function vc(e) {
//   return (e = fh(e)), e !== null ? mc(e) : null;
// }
// function mc(e) {
//   if (e.tag === 5 || e.tag === 6) return e;
//   for (e = e.child; e !== null; ) {
//     var t = mc(e);
//     if (t !== null) return t;
//     e = e.sibling;
//   }
//   return null;
// }
// var yc = He.unstable_scheduleCallback,
//   xa = He.unstable_cancelCallback,
//   hh = He.unstable_shouldYield,
//   ph = He.unstable_requestPaint,
//   ce = He.unstable_now,
//   vh = He.unstable_getCurrentPriorityLevel,
//   gs = He.unstable_ImmediatePriority,
//   gc = He.unstable_UserBlockingPriority,
//   Ii = He.unstable_NormalPriority,
//   mh = He.unstable_LowPriority,
//   wc = He.unstable_IdlePriority,
//   oo = null,
//   ht = null;
// function yh(e) {
//   if (ht && typeof ht.onCommitFiberRoot == "function")
//     try {
//       ht.onCommitFiberRoot(oo, e, void 0, (e.current.flags & 128) === 128);
//     } catch {}
// }
// var lt = Math.clz32 ? Math.clz32 : Sh,
//   gh = Math.log,
//   wh = Math.LN2;
// function Sh(e) {
//   return (e >>>= 0), e === 0 ? 32 : (31 - ((gh(e) / wh) | 0)) | 0;
// }
// var ai = 64,
//   ui = 4194304;
// function yr(e) {
//   switch (e & -e) {
//     case 1:
//       return 1;
//     case 2:
//       return 2;
//     case 4:
//       return 4;
//     case 8:
//       return 8;
//     case 16:
//       return 16;
//     case 32:
//       return 32;
//     case 64:
//     case 128:
//     case 256:
//     case 512:
//     case 1024:
//     case 2048:
//     case 4096:
//     case 8192:
//     case 16384:
//     case 32768:
//     case 65536:
//     case 131072:
//     case 262144:
//     case 524288:
//     case 1048576:
//     case 2097152:
//       return e & 4194240;
//     case 4194304:
//     case 8388608:
//     case 16777216:
//     case 33554432:
//     case 67108864:
//       return e & 130023424;
//     case 134217728:
//       return 134217728;
//     case 268435456:
//       return 268435456;
//     case 536870912:
//       return 536870912;
//     case 1073741824:
//       return 1073741824;
//     default:
//       return e;
//   }
// }
// function Fi(e, t) {
//   var n = e.pendingLanes;
//   if (n === 0) return 0;
//   var r = 0,
//     i = e.suspendedLanes,
//     o = e.pingedLanes,
//     l = n & 268435455;
//   if (l !== 0) {
//     var a = l & ~i;
//     a !== 0 ? (r = yr(a)) : ((o &= l), o !== 0 && (r = yr(o)));
//   } else (l = n & ~i), l !== 0 ? (r = yr(l)) : o !== 0 && (r = yr(o));
//   if (r === 0) return 0;
//   if (
//     t !== 0 &&
//     t !== r &&
//     !(t & i) &&
//     ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
//   )
//     return t;
//   if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
//     for (e = e.entanglements, t &= r; 0 < t; )
//       (n = 31 - lt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
//   return r;
// }
// function _h(e, t) {
//   switch (e) {
//     case 1:
//     case 2:
//     case 4:
//       return t + 250;
//     case 8:
//     case 16:
//     case 32:
//     case 64:
//     case 128:
//     case 256:
//     case 512:
//     case 1024:
//     case 2048:
//     case 4096:
//     case 8192:
//     case 16384:
//     case 32768:
//     case 65536:
//     case 131072:
//     case 262144:
//     case 524288:
//     case 1048576:
//     case 2097152:
//       return t + 5e3;
//     case 4194304:
//     case 8388608:
//     case 16777216:
//     case 33554432:
//     case 67108864:
//       return -1;
//     case 134217728:
//     case 268435456:
//     case 536870912:
//     case 1073741824:
//       return -1;
//     default:
//       return -1;
//   }
// }
// function kh(e, t) {
//   for (
//     var n = e.suspendedLanes,
//       r = e.pingedLanes,
//       i = e.expirationTimes,
//       o = e.pendingLanes;
//     0 < o;

//   ) {
//     var l = 31 - lt(o),
//       a = 1 << l,
//       s = i[l];
//     s === -1
//       ? (!(a & n) || a & r) && (i[l] = _h(a, t))
//       : s <= t && (e.expiredLanes |= a),
//       (o &= ~a);
//   }
// }
// function Ll(e) {
//   return (
//     (e = e.pendingLanes & -1073741825),
//     e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
//   );
// }
// function Sc() {
//   var e = ai;
//   return (ai <<= 1), !(ai & 4194240) && (ai = 64), e;
// }
// function Fo(e) {
//   for (var t = [], n = 0; 31 > n; n++) t.push(e);
//   return t;
// }
// function Xr(e, t, n) {
//   (e.pendingLanes |= t),
//     t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
//     (e = e.eventTimes),
//     (t = 31 - lt(t)),
//     (e[t] = n);
// }
// function Eh(e, t) {
//   var n = e.pendingLanes & ~t;
//   (e.pendingLanes = t),
//     (e.suspendedLanes = 0),
//     (e.pingedLanes = 0),
//     (e.expiredLanes &= t),
//     (e.mutableReadLanes &= t),
//     (e.entangledLanes &= t),
//     (t = e.entanglements);
//   var r = e.eventTimes;
//   for (e = e.expirationTimes; 0 < n; ) {
//     var i = 31 - lt(n),
//       o = 1 << i;
//     (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
//   }
// }
// function ws(e, t) {
//   var n = (e.entangledLanes |= t);
//   for (e = e.entanglements; n; ) {
//     var r = 31 - lt(n),
//       i = 1 << r;
//     (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
//   }
// }
// var X = 0;
// function _c(e) {
//   return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
// }
// var kc,
//   Ss,
//   Ec,
//   xc,
//   Cc,
//   Rl = !1,
//   ci = [],
//   At = null,
//   Bt = null,
//   $t = null,
//   Or = new Map(),
//   zr = new Map(),
//   jt = [],
//   xh =
//     "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
//       " "
//     );
// function Ca(e, t) {
//   switch (e) {
//     case "focusin":
//     case "focusout":
//       At = null;
//       break;
//     case "dragenter":
//     case "dragleave":
//       Bt = null;
//       break;
//     case "mouseover":
//     case "mouseout":
//       $t = null;
//       break;
//     case "pointerover":
//     case "pointerout":
//       Or.delete(t.pointerId);
//       break;
//     case "gotpointercapture":
//     case "lostpointercapture":
//       zr.delete(t.pointerId);
//   }
// }
// function sr(e, t, n, r, i, o) {
//   return e === null || e.nativeEvent !== o
//     ? ((e = {
//         blockedOn: t,
//         domEventName: n,
//         eventSystemFlags: r,
//         nativeEvent: o,
//         targetContainers: [i],
//       }),
//       t !== null && ((t = Jr(t)), t !== null && Ss(t)),
//       e)
//     : ((e.eventSystemFlags |= r),
//       (t = e.targetContainers),
//       i !== null && t.indexOf(i) === -1 && t.push(i),
//       e);
// }
// function Ch(e, t, n, r, i) {
//   switch (t) {
//     case "focusin":
//       return (At = sr(At, e, t, n, r, i)), !0;
//     case "dragenter":
//       return (Bt = sr(Bt, e, t, n, r, i)), !0;
//     case "mouseover":
//       return ($t = sr($t, e, t, n, r, i)), !0;
//     case "pointerover":
//       var o = i.pointerId;
//       return Or.set(o, sr(Or.get(o) || null, e, t, n, r, i)), !0;
//     case "gotpointercapture":
//       return (
//         (o = i.pointerId), zr.set(o, sr(zr.get(o) || null, e, t, n, r, i)), !0
//       );
//   }
//   return !1;
// }
// function Pc(e) {
//   var t = nn(e.target);
//   if (t !== null) {
//     var n = vn(t);
//     if (n !== null) {
//       if (((t = n.tag), t === 13)) {
//         if (((t = pc(n)), t !== null)) {
//           (e.blockedOn = t),
//             Cc(e.priority, function () {
//               Ec(n);
//             });
//           return;
//         }
//       } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
//         e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
//         return;
//       }
//     }
//   }
//   e.blockedOn = null;
// }
// function Ei(e) {
//   if (e.blockedOn !== null) return !1;
//   for (var t = e.targetContainers; 0 < t.length; ) {
//     var n = Tl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
//     if (n === null) {
//       n = e.nativeEvent;
//       var r = new n.constructor(n.type, n);
//       (El = r), n.target.dispatchEvent(r), (El = null);
//     } else return (t = Jr(n)), t !== null && Ss(t), (e.blockedOn = n), !1;
//     t.shift();
//   }
//   return !0;
// }
// function Pa(e, t, n) {
//   Ei(e) && n.delete(t);
// }
// function Ph() {
//   (Rl = !1),
//     At !== null && Ei(At) && (At = null),
//     Bt !== null && Ei(Bt) && (Bt = null),
//     $t !== null && Ei($t) && ($t = null),
//     Or.forEach(Pa),
//     zr.forEach(Pa);
// }
// function ar(e, t) {
//   e.blockedOn === t &&
//     ((e.blockedOn = null),
//     Rl ||
//       ((Rl = !0),
//       He.unstable_scheduleCallback(He.unstable_NormalPriority, Ph)));
// }
// function jr(e) {
//   function t(i) {
//     return ar(i, e);
//   }
//   if (0 < ci.length) {
//     ar(ci[0], e);
//     for (var n = 1; n < ci.length; n++) {
//       var r = ci[n];
//       r.blockedOn === e && (r.blockedOn = null);
//     }
//   }
//   for (
//     At !== null && ar(At, e),
//       Bt !== null && ar(Bt, e),
//       $t !== null && ar($t, e),
//       Or.forEach(t),
//       zr.forEach(t),
//       n = 0;
//     n < jt.length;
//     n++
//   )
//     (r = jt[n]), r.blockedOn === e && (r.blockedOn = null);
//   for (; 0 < jt.length && ((n = jt[0]), n.blockedOn === null); )
//     Pc(n), n.blockedOn === null && jt.shift();
// }
// var Fn = Nt.ReactCurrentBatchConfig,
//   Ui = !0;
// function Lh(e, t, n, r) {
//   var i = X,
//     o = Fn.transition;
//   Fn.transition = null;
//   try {
//     (X = 1), _s(e, t, n, r);
//   } finally {
//     (X = i), (Fn.transition = o);
//   }
// }
// function Rh(e, t, n, r) {
//   var i = X,
//     o = Fn.transition;
//   Fn.transition = null;
//   try {
//     (X = 4), _s(e, t, n, r);
//   } finally {
//     (X = i), (Fn.transition = o);
//   }
// }
// function _s(e, t, n, r) {
//   if (Ui) {
//     var i = Tl(e, t, n, r);
//     if (i === null) Yo(e, t, r, Ai, n), Ca(e, r);
//     else if (Ch(i, e, t, n, r)) r.stopPropagation();
//     else if ((Ca(e, r), t & 4 && -1 < xh.indexOf(e))) {
//       for (; i !== null; ) {
//         var o = Jr(i);
//         if (
//           (o !== null && kc(o),
//           (o = Tl(e, t, n, r)),
//           o === null && Yo(e, t, r, Ai, n),
//           o === i)
//         )
//           break;
//         i = o;
//       }
//       i !== null && r.stopPropagation();
//     } else Yo(e, t, r, null, n);
//   }
// }
// var Ai = null;
// function Tl(e, t, n, r) {
//   if (((Ai = null), (e = ys(r)), (e = nn(e)), e !== null))
//     if (((t = vn(e)), t === null)) e = null;
//     else if (((n = t.tag), n === 13)) {
//       if (((e = pc(t)), e !== null)) return e;
//       e = null;
//     } else if (n === 3) {
//       if (t.stateNode.current.memoizedState.isDehydrated)
//         return t.tag === 3 ? t.stateNode.containerInfo : null;
//       e = null;
//     } else t !== e && (e = null);
//   return (Ai = e), null;
// }
// function Lc(e) {
//   switch (e) {
//     case "cancel":
//     case "click":
//     case "close":
//     case "contextmenu":
//     case "copy":
//     case "cut":
//     case "auxclick":
//     case "dblclick":
//     case "dragend":
//     case "dragstart":
//     case "drop":
//     case "focusin":
//     case "focusout":
//     case "input":
//     case "invalid":
//     case "keydown":
//     case "keypress":
//     case "keyup":
//     case "mousedown":
//     case "mouseup":
//     case "paste":
//     case "pause":
//     case "play":
//     case "pointercancel":
//     case "pointerdown":
//     case "pointerup":
//     case "ratechange":
//     case "reset":
//     case "resize":
//     case "seeked":
//     case "submit":
//     case "touchcancel":
//     case "touchend":
//     case "touchstart":
//     case "volumechange":
//     case "change":
//     case "selectionchange":
//     case "textInput":
//     case "compositionstart":
//     case "compositionend":
//     case "compositionupdate":
//     case "beforeblur":
//     case "afterblur":
//     case "beforeinput":
//     case "blur":
//     case "fullscreenchange":
//     case "focus":
//     case "hashchange":
//     case "popstate":
//     case "select":
//     case "selectstart":
//       return 1;
//     case "drag":
//     case "dragenter":
//     case "dragexit":
//     case "dragleave":
//     case "dragover":
//     case "mousemove":
//     case "mouseout":
//     case "mouseover":
//     case "pointermove":
//     case "pointerout":
//     case "pointerover":
//     case "scroll":
//     case "toggle":
//     case "touchmove":
//     case "wheel":
//     case "mouseenter":
//     case "mouseleave":
//     case "pointerenter":
//     case "pointerleave":
//       return 4;
//     case "message":
//       switch (vh()) {
//         case gs:
//           return 1;
//         case gc:
//           return 4;
//         case Ii:
//         case mh:
//           return 16;
//         case wc:
//           return 536870912;
//         default:
//           return 16;
//       }
//     default:
//       return 16;
//   }
// }
// var Ft = null,
//   ks = null,
//   xi = null;
// function Rc() {
//   if (xi) return xi;
//   var e,
//     t = ks,
//     n = t.length,
//     r,
//     i = "value" in Ft ? Ft.value : Ft.textContent,
//     o = i.length;
//   for (e = 0; e < n && t[e] === i[e]; e++);
//   var l = n - e;
//   for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
//   return (xi = i.slice(e, 1 < r ? 1 - r : void 0));
// }
// function Ci(e) {
//   var t = e.keyCode;
//   return (
//     "charCode" in e
//       ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
//       : (e = t),
//     e === 10 && (e = 13),
//     32 <= e || e === 13 ? e : 0
//   );
// }
// function di() {
//   return !0;
// }
// function La() {
//   return !1;
// }
// function Qe(e) {
//   function t(n, r, i, o, l) {
//     (this._reactName = n),
//       (this._targetInst = i),
//       (this.type = r),
//       (this.nativeEvent = o),
//       (this.target = l),
//       (this.currentTarget = null);
//     for (var a in e)
//       e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
//     return (
//       (this.isDefaultPrevented = (
//         o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
//       )
//         ? di
//         : La),
//       (this.isPropagationStopped = La),
//       this
//     );
//   }
//   return (
//     se(t.prototype, {
//       preventDefault: function () {
//         this.defaultPrevented = !0;
//         var n = this.nativeEvent;
//         n &&
//           (n.preventDefault
//             ? n.preventDefault()
//             : typeof n.returnValue != "unknown" && (n.returnValue = !1),
//           (this.isDefaultPrevented = di));
//       },
//       stopPropagation: function () {
//         var n = this.nativeEvent;
//         n &&
//           (n.stopPropagation
//             ? n.stopPropagation()
//             : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
//           (this.isPropagationStopped = di));
//       },
//       persist: function () {},
//       isPersistent: di,
//     }),
//     t
//   );
// }
// var Jn = {
//     eventPhase: 0,
//     bubbles: 0,
//     cancelable: 0,
//     timeStamp: function (e) {
//       return e.timeStamp || Date.now();
//     },
//     defaultPrevented: 0,
//     isTrusted: 0,
//   },
//   Es = Qe(Jn),
//   Zr = se({}, Jn, { view: 0, detail: 0 }),
//   Th = Qe(Zr),
//   Uo,
//   Ao,
//   ur,
//   lo = se({}, Zr, {
//     screenX: 0,
//     screenY: 0,
//     clientX: 0,
//     clientY: 0,
//     pageX: 0,
//     pageY: 0,
//     ctrlKey: 0,
//     shiftKey: 0,
//     altKey: 0,
//     metaKey: 0,
//     getModifierState: xs,
//     button: 0,
//     buttons: 0,
//     relatedTarget: function (e) {
//       return e.relatedTarget === void 0
//         ? e.fromElement === e.srcElement
//           ? e.toElement
//           : e.fromElement
//         : e.relatedTarget;
//     },
//     movementX: function (e) {
//       return "movementX" in e
//         ? e.movementX
//         : (e !== ur &&
//             (ur && e.type === "mousemove"
//               ? ((Uo = e.screenX - ur.screenX), (Ao = e.screenY - ur.screenY))
//               : (Ao = Uo = 0),
//             (ur = e)),
//           Uo);
//     },
//     movementY: function (e) {
//       return "movementY" in e ? e.movementY : Ao;
//     },
//   }),
//   Ra = Qe(lo),
//   Nh = se({}, lo, { dataTransfer: 0 }),
//   Mh = Qe(Nh),
//   Dh = se({}, Zr, { relatedTarget: 0 }),
//   Bo = Qe(Dh),
//   Oh = se({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
//   zh = Qe(Oh),
//   jh = se({}, Jn, {
//     clipboardData: function (e) {
//       return "clipboardData" in e ? e.clipboardData : window.clipboardData;
//     },
//   }),
//   Ih = Qe(jh),
//   Fh = se({}, Jn, { data: 0 }),
//   Ta = Qe(Fh),
//   Uh = {
//     Esc: "Escape",
//     Spacebar: " ",
//     Left: "ArrowLeft",
//     Up: "ArrowUp",
//     Right: "ArrowRight",
//     Down: "ArrowDown",
//     Del: "Delete",
//     Win: "OS",
//     Menu: "ContextMenu",
//     Apps: "ContextMenu",
//     Scroll: "ScrollLock",
//     MozPrintableKey: "Unidentified",
//   },
//   Ah = {
//     8: "Backspace",
//     9: "Tab",
//     12: "Clear",
//     13: "Enter",
//     16: "Shift",
//     17: "Control",
//     18: "Alt",
//     19: "Pause",
//     20: "CapsLock",
//     27: "Escape",
//     32: " ",
//     33: "PageUp",
//     34: "PageDown",
//     35: "End",
//     36: "Home",
//     37: "ArrowLeft",
//     38: "ArrowUp",
//     39: "ArrowRight",
//     40: "ArrowDown",
//     45: "Insert",
//     46: "Delete",
//     112: "F1",
//     113: "F2",
//     114: "F3",
//     115: "F4",
//     116: "F5",
//     117: "F6",
//     118: "F7",
//     119: "F8",
//     120: "F9",
//     121: "F10",
//     122: "F11",
//     123: "F12",
//     144: "NumLock",
//     145: "ScrollLock",
//     224: "Meta",
//   },
//   Bh = {
//     Alt: "altKey",
//     Control: "ctrlKey",
//     Meta: "metaKey",
//     Shift: "shiftKey",
//   };
// function $h(e) {
//   var t = this.nativeEvent;
//   return t.getModifierState ? t.getModifierState(e) : (e = Bh[e]) ? !!t[e] : !1;
// }
// function xs() {
//   return $h;
// }
// var Wh = se({}, Zr, {
//     key: function (e) {
//       if (e.key) {
//         var t = Uh[e.key] || e.key;
//         if (t !== "Unidentified") return t;
//       }
//       return e.type === "keypress"
//         ? ((e = Ci(e)), e === 13 ? "Enter" : String.fromCharCode(e))
//         : e.type === "keydown" || e.type === "keyup"
//         ? Ah[e.keyCode] || "Unidentified"
//         : "";
//     },
//     code: 0,
//     location: 0,
//     ctrlKey: 0,
//     shiftKey: 0,
//     altKey: 0,
//     metaKey: 0,
//     repeat: 0,
//     locale: 0,
//     getModifierState: xs,
//     charCode: function (e) {
//       return e.type === "keypress" ? Ci(e) : 0;
//     },
//     keyCode: function (e) {
//       return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
//     },
//     which: function (e) {
//       return e.type === "keypress"
//         ? Ci(e)
//         : e.type === "keydown" || e.type === "keyup"
//         ? e.keyCode
//         : 0;
//     },
//   }),
//   Hh = Qe(Wh),
//   Vh = se({}, lo, {
//     pointerId: 0,
//     width: 0,
//     height: 0,
//     pressure: 0,
//     tangentialPressure: 0,
//     tiltX: 0,
//     tiltY: 0,
//     twist: 0,
//     pointerType: 0,
//     isPrimary: 0,
//   }),
//   Na = Qe(Vh),
//   Qh = se({}, Zr, {
//     touches: 0,
//     targetTouches: 0,
//     changedTouches: 0,
//     altKey: 0,
//     metaKey: 0,
//     ctrlKey: 0,
//     shiftKey: 0,
//     getModifierState: xs,
//   }),
//   Kh = Qe(Qh),
//   Yh = se({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
//   Gh = Qe(Yh),
//   Xh = se({}, lo, {
//     deltaX: function (e) {
//       return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
//     },
//     deltaY: function (e) {
//       return "deltaY" in e
//         ? e.deltaY
//         : "wheelDeltaY" in e
//         ? -e.wheelDeltaY
//         : "wheelDelta" in e
//         ? -e.wheelDelta
//         : 0;
//     },
//     deltaZ: 0,
//     deltaMode: 0,
//   }),
//   Zh = Qe(Xh),
//   Jh = [9, 13, 27, 32],
//   Cs = Ct && "CompositionEvent" in window,
//   _r = null;
// Ct && "documentMode" in document && (_r = document.documentMode);
// var qh = Ct && "TextEvent" in window && !_r,
//   Tc = Ct && (!Cs || (_r && 8 < _r && 11 >= _r)),
//   Ma = String.fromCharCode(32),
//   Da = !1;
// function Nc(e, t) {
//   switch (e) {
//     case "keyup":
//       return Jh.indexOf(t.keyCode) !== -1;
//     case "keydown":
//       return t.keyCode !== 229;
//     case "keypress":
//     case "mousedown":
//     case "focusout":
//       return !0;
//     default:
//       return !1;
//   }
// }
// function Mc(e) {
//   return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
// }
// var kn = !1;
// function bh(e, t) {
//   switch (e) {
//     case "compositionend":
//       return Mc(t);
//     case "keypress":
//       return t.which !== 32 ? null : ((Da = !0), Ma);
//     case "textInput":
//       return (e = t.data), e === Ma && Da ? null : e;
//     default:
//       return null;
//   }
// }
// function ep(e, t) {
//   if (kn)
//     return e === "compositionend" || (!Cs && Nc(e, t))
//       ? ((e = Rc()), (xi = ks = Ft = null), (kn = !1), e)
//       : null;
//   switch (e) {
//     case "paste":
//       return null;
//     case "keypress":
//       if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
//         if (t.char && 1 < t.char.length) return t.char;
//         if (t.which) return String.fromCharCode(t.which);
//       }
//       return null;
//     case "compositionend":
//       return Tc && t.locale !== "ko" ? null : t.data;
//     default:
//       return null;
//   }
// }
// var tp = {
//   color: !0,
//   date: !0,
//   datetime: !0,
//   "datetime-local": !0,
//   email: !0,
//   month: !0,
//   number: !0,
//   password: !0,
//   range: !0,
//   search: !0,
//   tel: !0,
//   text: !0,
//   time: !0,
//   url: !0,
//   week: !0,
// };
// function Oa(e) {
//   var t = e && e.nodeName && e.nodeName.toLowerCase();
//   return t === "input" ? !!tp[e.type] : t === "textarea";
// }
// function Dc(e, t, n, r) {
//   uc(r),
//     (t = Bi(t, "onChange")),
//     0 < t.length &&
//       ((n = new Es("onChange", "change", null, n, r)),
//       e.push({ event: n, listeners: t }));
// }
// var kr = null,
//   Ir = null;
// function np(e) {
//   Hc(e, 0);
// }
// function so(e) {
//   var t = Cn(e);
//   if (nc(t)) return e;
// }
// function rp(e, t) {
//   if (e === "change") return t;
// }
// var Oc = !1;
// if (Ct) {
//   var $o;
//   if (Ct) {
//     var Wo = "oninput" in document;
//     if (!Wo) {
//       var za = document.createElement("div");
//       za.setAttribute("oninput", "return;"),
//         (Wo = typeof za.oninput == "function");
//     }
//     $o = Wo;
//   } else $o = !1;
//   Oc = $o && (!document.documentMode || 9 < document.documentMode);
// }
// function ja() {
//   kr && (kr.detachEvent("onpropertychange", zc), (Ir = kr = null));
// }
// function zc(e) {
//   if (e.propertyName === "value" && so(Ir)) {
//     var t = [];
//     Dc(t, Ir, e, ys(e)), hc(np, t);
//   }
// }
// function ip(e, t, n) {
//   e === "focusin"
//     ? (ja(), (kr = t), (Ir = n), kr.attachEvent("onpropertychange", zc))
//     : e === "focusout" && ja();
// }
// function op(e) {
//   if (e === "selectionchange" || e === "keyup" || e === "keydown")
//     return so(Ir);
// }
// function lp(e, t) {
//   if (e === "click") return so(t);
// }
// function sp(e, t) {
//   if (e === "input" || e === "change") return so(t);
// }
// function ap(e, t) {
//   return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
// }
// var at = typeof Object.is == "function" ? Object.is : ap;
// function Fr(e, t) {
//   if (at(e, t)) return !0;
//   if (typeof e != "object" || e === null || typeof t != "object" || t === null)
//     return !1;
//   var n = Object.keys(e),
//     r = Object.keys(t);
//   if (n.length !== r.length) return !1;
//   for (r = 0; r < n.length; r++) {
//     var i = n[r];
//     if (!dl.call(t, i) || !at(e[i], t[i])) return !1;
//   }
//   return !0;
// }
// function Ia(e) {
//   for (; e && e.firstChild; ) e = e.firstChild;
//   return e;
// }
// function Fa(e, t) {
//   var n = Ia(e);
//   e = 0;
//   for (var r; n; ) {
//     if (n.nodeType === 3) {
//       if (((r = e + n.textContent.length), e <= t && r >= t))
//         return { node: n, offset: t - e };
//       e = r;
//     }
//     e: {
//       for (; n; ) {
//         if (n.nextSibling) {
//           n = n.nextSibling;
//           break e;
//         }
//         n = n.parentNode;
//       }
//       n = void 0;
//     }
//     n = Ia(n);
//   }
// }
// function jc(e, t) {
//   return e && t
//     ? e === t
//       ? !0
//       : e && e.nodeType === 3
//       ? !1
//       : t && t.nodeType === 3
//       ? jc(e, t.parentNode)
//       : "contains" in e
//       ? e.contains(t)
//       : e.compareDocumentPosition
//       ? !!(e.compareDocumentPosition(t) & 16)
//       : !1
//     : !1;
// }
// function Ic() {
//   for (var e = window, t = Oi(); t instanceof e.HTMLIFrameElement; ) {
//     try {
//       var n = typeof t.contentWindow.location.href == "string";
//     } catch {
//       n = !1;
//     }
//     if (n) e = t.contentWindow;
//     else break;
//     t = Oi(e.document);
//   }
//   return t;
// }
// function Ps(e) {
//   var t = e && e.nodeName && e.nodeName.toLowerCase();
//   return (
//     t &&
//     ((t === "input" &&
//       (e.type === "text" ||
//         e.type === "search" ||
//         e.type === "tel" ||
//         e.type === "url" ||
//         e.type === "password")) ||
//       t === "textarea" ||
//       e.contentEditable === "true")
//   );
// }
// function up(e) {
//   var t = Ic(),
//     n = e.focusedElem,
//     r = e.selectionRange;
//   if (
//     t !== n &&
//     n &&
//     n.ownerDocument &&
//     jc(n.ownerDocument.documentElement, n)
//   ) {
//     if (r !== null && Ps(n)) {
//       if (
//         ((t = r.start),
//         (e = r.end),
//         e === void 0 && (e = t),
//         "selectionStart" in n)
//       )
//         (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
//       else if (
//         ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
//         e.getSelection)
//       ) {
//         e = e.getSelection();
//         var i = n.textContent.length,
//           o = Math.min(r.start, i);
//         (r = r.end === void 0 ? o : Math.min(r.end, i)),
//           !e.extend && o > r && ((i = r), (r = o), (o = i)),
//           (i = Fa(n, o));
//         var l = Fa(n, r);
//         i &&
//           l &&
//           (e.rangeCount !== 1 ||
//             e.anchorNode !== i.node ||
//             e.anchorOffset !== i.offset ||
//             e.focusNode !== l.node ||
//             e.focusOffset !== l.offset) &&
//           ((t = t.createRange()),
//           t.setStart(i.node, i.offset),
//           e.removeAllRanges(),
//           o > r
//             ? (e.addRange(t), e.extend(l.node, l.offset))
//             : (t.setEnd(l.node, l.offset), e.addRange(t)));
//       }
//     }
//     for (t = [], e = n; (e = e.parentNode); )
//       e.nodeType === 1 &&
//         t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
//     for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
//       (e = t[n]),
//         (e.element.scrollLeft = e.left),
//         (e.element.scrollTop = e.top);
//   }
// }
// var cp = Ct && "documentMode" in document && 11 >= document.documentMode,
//   En = null,
//   Nl = null,
//   Er = null,
//   Ml = !1;
// function Ua(e, t, n) {
//   var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
//   Ml ||
//     En == null ||
//     En !== Oi(r) ||
//     ((r = En),
//     "selectionStart" in r && Ps(r)
//       ? (r = { start: r.selectionStart, end: r.selectionEnd })
//       : ((r = (
//           (r.ownerDocument && r.ownerDocument.defaultView) ||
//           window
//         ).getSelection()),
//         (r = {
//           anchorNode: r.anchorNode,
//           anchorOffset: r.anchorOffset,
//           focusNode: r.focusNode,
//           focusOffset: r.focusOffset,
//         })),
//     (Er && Fr(Er, r)) ||
//       ((Er = r),
//       (r = Bi(Nl, "onSelect")),
//       0 < r.length &&
//         ((t = new Es("onSelect", "select", null, t, n)),
//         e.push({ event: t, listeners: r }),
//         (t.target = En))));
// }
// function fi(e, t) {
//   var n = {};
//   return (
//     (n[e.toLowerCase()] = t.toLowerCase()),
//     (n["Webkit" + e] = "webkit" + t),
//     (n["Moz" + e] = "moz" + t),
//     n
//   );
// }
// var xn = {
//     animationend: fi("Animation", "AnimationEnd"),
//     animationiteration: fi("Animation", "AnimationIteration"),
//     animationstart: fi("Animation", "AnimationStart"),
//     transitionend: fi("Transition", "TransitionEnd"),
//   },
//   Ho = {},
//   Fc = {};
// Ct &&
//   ((Fc = document.createElement("div").style),
//   "AnimationEvent" in window ||
//     (delete xn.animationend.animation,
//     delete xn.animationiteration.animation,
//     delete xn.animationstart.animation),
//   "TransitionEvent" in window || delete xn.transitionend.transition);
// function ao(e) {
//   if (Ho[e]) return Ho[e];
//   if (!xn[e]) return e;
//   var t = xn[e],
//     n;
//   for (n in t) if (t.hasOwnProperty(n) && n in Fc) return (Ho[e] = t[n]);
//   return e;
// }
// var Uc = ao("animationend"),
//   Ac = ao("animationiteration"),
//   Bc = ao("animationstart"),
//   $c = ao("transitionend"),
//   Wc = new Map(),
//   Aa =
//     "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
//       " "
//     );
// function Xt(e, t) {
//   Wc.set(e, t), pn(t, [e]);
// }
// for (var Vo = 0; Vo < Aa.length; Vo++) {
//   var Qo = Aa[Vo],
//     dp = Qo.toLowerCase(),
//     fp = Qo[0].toUpperCase() + Qo.slice(1);
//   Xt(dp, "on" + fp);
// }
// Xt(Uc, "onAnimationEnd");
// Xt(Ac, "onAnimationIteration");
// Xt(Bc, "onAnimationStart");
// Xt("dblclick", "onDoubleClick");
// Xt("focusin", "onFocus");
// Xt("focusout", "onBlur");
// Xt($c, "onTransitionEnd");
// $n("onMouseEnter", ["mouseout", "mouseover"]);
// $n("onMouseLeave", ["mouseout", "mouseover"]);
// $n("onPointerEnter", ["pointerout", "pointerover"]);
// $n("onPointerLeave", ["pointerout", "pointerover"]);
// pn(
//   "onChange",
//   "change click focusin focusout input keydown keyup selectionchange".split(" ")
// );
// pn(
//   "onSelect",
//   "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
//     " "
//   )
// );
// pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
// pn(
//   "onCompositionEnd",
//   "compositionend focusout keydown keypress keyup mousedown".split(" ")
// );
// pn(
//   "onCompositionStart",
//   "compositionstart focusout keydown keypress keyup mousedown".split(" ")
// );
// pn(
//   "onCompositionUpdate",
//   "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
// );
// var gr =
//     "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
//       " "
//     ),
//   hp = new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));
// function Ba(e, t, n) {
//   var r = e.type || "unknown-event";
//   (e.currentTarget = n), dh(r, t, void 0, e), (e.currentTarget = null);
// }
// function Hc(e, t) {
//   t = (t & 4) !== 0;
//   for (var n = 0; n < e.length; n++) {
//     var r = e[n],
//       i = r.event;
//     r = r.listeners;
//     e: {
//       var o = void 0;
//       if (t)
//         for (var l = r.length - 1; 0 <= l; l--) {
//           var a = r[l],
//             s = a.instance,
//             c = a.currentTarget;
//           if (((a = a.listener), s !== o && i.isPropagationStopped())) break e;
//           Ba(i, a, c), (o = s);
//         }
//       else
//         for (l = 0; l < r.length; l++) {
//           if (
//             ((a = r[l]),
//             (s = a.instance),
//             (c = a.currentTarget),
//             (a = a.listener),
//             s !== o && i.isPropagationStopped())
//           )
//             break e;
//           Ba(i, a, c), (o = s);
//         }
//     }
//   }
//   if (ji) throw ((e = Pl), (ji = !1), (Pl = null), e);
// }
// function ee(e, t) {
//   var n = t[Il];
//   n === void 0 && (n = t[Il] = new Set());
//   var r = e + "__bubble";
//   n.has(r) || (Vc(t, e, 2, !1), n.add(r));
// }
// function Ko(e, t, n) {
//   var r = 0;
//   t && (r |= 4), Vc(n, e, r, t);
// }
// var hi = "_reactListening" + Math.random().toString(36).slice(2);
// function Ur(e) {
//   if (!e[hi]) {
//     (e[hi] = !0),
//       Ju.forEach(function (n) {
//         n !== "selectionchange" && (hp.has(n) || Ko(n, !1, e), Ko(n, !0, e));
//       });
//     var t = e.nodeType === 9 ? e : e.ownerDocument;
//     t === null || t[hi] || ((t[hi] = !0), Ko("selectionchange", !1, t));
//   }
// }
// function Vc(e, t, n, r) {
//   switch (Lc(t)) {
//     case 1:
//       var i = Lh;
//       break;
//     case 4:
//       i = Rh;
//       break;
//     default:
//       i = _s;
//   }
//   (n = i.bind(null, t, n, e)),
//     (i = void 0),
//     !Cl ||
//       (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
//       (i = !0),
//     r
//       ? i !== void 0
//         ? e.addEventListener(t, n, { capture: !0, passive: i })
//         : e.addEventListener(t, n, !0)
//       : i !== void 0
//       ? e.addEventListener(t, n, { passive: i })
//       : e.addEventListener(t, n, !1);
// }
// function Yo(e, t, n, r, i) {
//   var o = r;
//   if (!(t & 1) && !(t & 2) && r !== null)
//     e: for (;;) {
//       if (r === null) return;
//       var l = r.tag;
//       if (l === 3 || l === 4) {
//         var a = r.stateNode.containerInfo;
//         if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
//         if (l === 4)
//           for (l = r.return; l !== null; ) {
//             var s = l.tag;
//             if (
//               (s === 3 || s === 4) &&
//               ((s = l.stateNode.containerInfo),
//               s === i || (s.nodeType === 8 && s.parentNode === i))
//             )
//               return;
//             l = l.return;
//           }
//         for (; a !== null; ) {
//           if (((l = nn(a)), l === null)) return;
//           if (((s = l.tag), s === 5 || s === 6)) {
//             r = o = l;
//             continue e;
//           }
//           a = a.parentNode;
//         }
//       }
//       r = r.return;
//     }
//   hc(function () {
//     var c = o,
//       d = ys(n),
//       u = [];
//     e: {
//       var f = Wc.get(e);
//       if (f !== void 0) {
//         var p = Es,
//           g = e;
//         switch (e) {
//           case "keypress":
//             if (Ci(n) === 0) break e;
//           case "keydown":
//           case "keyup":
//             p = Hh;
//             break;
//           case "focusin":
//             (g = "focus"), (p = Bo);
//             break;
//           case "focusout":
//             (g = "blur"), (p = Bo);
//             break;
//           case "beforeblur":
//           case "afterblur":
//             p = Bo;
//             break;
//           case "click":
//             if (n.button === 2) break e;
//           case "auxclick":
//           case "dblclick":
//           case "mousedown":
//           case "mousemove":
//           case "mouseup":
//           case "mouseout":
//           case "mouseover":
//           case "contextmenu":
//             p = Ra;
//             break;
//           case "drag":
//           case "dragend":
//           case "dragenter":
//           case "dragexit":
//           case "dragleave":
//           case "dragover":
//           case "dragstart":
//           case "drop":
//             p = Mh;
//             break;
//           case "touchcancel":
//           case "touchend":
//           case "touchmove":
//           case "touchstart":
//             p = Kh;
//             break;
//           case Uc:
//           case Ac:
//           case Bc:
//             p = zh;
//             break;
//           case $c:
//             p = Gh;
//             break;
//           case "scroll":
//             p = Th;
//             break;
//           case "wheel":
//             p = Zh;
//             break;
//           case "copy":
//           case "cut":
//           case "paste":
//             p = Ih;
//             break;
//           case "gotpointercapture":
//           case "lostpointercapture":
//           case "pointercancel":
//           case "pointerdown":
//           case "pointermove":
//           case "pointerout":
//           case "pointerover":
//           case "pointerup":
//             p = Na;
//         }
//         var S = (t & 4) !== 0,
//           y = !S && e === "scroll",
//           v = S ? (f !== null ? f + "Capture" : null) : f;
//         S = [];
//         for (var h = c, m; h !== null; ) {
//           m = h;
//           var _ = m.stateNode;
//           if (
//             (m.tag === 5 &&
//               _ !== null &&
//               ((m = _),
//               v !== null && ((_ = Dr(h, v)), _ != null && S.push(Ar(h, _, m)))),
//             y)
//           )
//             break;
//           h = h.return;
//         }
//         0 < S.length &&
//           ((f = new p(f, g, null, n, d)), u.push({ event: f, listeners: S }));
//       }
//     }
//     if (!(t & 7)) {
//       e: {
//         if (
//           ((f = e === "mouseover" || e === "pointerover"),
//           (p = e === "mouseout" || e === "pointerout"),
//           f &&
//             n !== El &&
//             (g = n.relatedTarget || n.fromElement) &&
//             (nn(g) || g[Pt]))
//         )
//           break e;
//         if (
//           (p || f) &&
//           ((f =
//             d.window === d
//               ? d
//               : (f = d.ownerDocument)
//               ? f.defaultView || f.parentWindow
//               : window),
//           p
//             ? ((g = n.relatedTarget || n.toElement),
//               (p = c),
//               (g = g ? nn(g) : null),
//               g !== null &&
//                 ((y = vn(g)), g !== y || (g.tag !== 5 && g.tag !== 6)) &&
//                 (g = null))
//             : ((p = null), (g = c)),
//           p !== g)
//         ) {
//           if (
//             ((S = Ra),
//             (_ = "onMouseLeave"),
//             (v = "onMouseEnter"),
//             (h = "mouse"),
//             (e === "pointerout" || e === "pointerover") &&
//               ((S = Na),
//               (_ = "onPointerLeave"),
//               (v = "onPointerEnter"),
//               (h = "pointer")),
//             (y = p == null ? f : Cn(p)),
//             (m = g == null ? f : Cn(g)),
//             (f = new S(_, h + "leave", p, n, d)),
//             (f.target = y),
//             (f.relatedTarget = m),
//             (_ = null),
//             nn(d) === c &&
//               ((S = new S(v, h + "enter", g, n, d)),
//               (S.target = m),
//               (S.relatedTarget = y),
//               (_ = S)),
//             (y = _),
//             p && g)
//           )
//             t: {
//               for (S = p, v = g, h = 0, m = S; m; m = wn(m)) h++;
//               for (m = 0, _ = v; _; _ = wn(_)) m++;
//               for (; 0 < h - m; ) (S = wn(S)), h--;
//               for (; 0 < m - h; ) (v = wn(v)), m--;
//               for (; h--; ) {
//                 if (S === v || (v !== null && S === v.alternate)) break t;
//                 (S = wn(S)), (v = wn(v));
//               }
//               S = null;
//             }
//           else S = null;
//           p !== null && $a(u, f, p, S, !1),
//             g !== null && y !== null && $a(u, y, g, S, !0);
//         }
//       }
//       e: {
//         if (
//           ((f = c ? Cn(c) : window),
//           (p = f.nodeName && f.nodeName.toLowerCase()),
//           p === "select" || (p === "input" && f.type === "file"))
//         )
//           var x = rp;
//         else if (Oa(f))
//           if (Oc) x = sp;
//           else {
//             x = op;
//             var T = ip;
//           }
//         else
//           (p = f.nodeName) &&
//             p.toLowerCase() === "input" &&
//             (f.type === "checkbox" || f.type === "radio") &&
//             (x = lp);
//         if (x && (x = x(e, c))) {
//           Dc(u, x, n, d);
//           break e;
//         }
//         T && T(e, f, c),
//           e === "focusout" &&
//             (T = f._wrapperState) &&
//             T.controlled &&
//             f.type === "number" &&
//             gl(f, "number", f.value);
//       }
//       switch (((T = c ? Cn(c) : window), e)) {
//         case "focusin":
//           (Oa(T) || T.contentEditable === "true") &&
//             ((En = T), (Nl = c), (Er = null));
//           break;
//         case "focusout":
//           Er = Nl = En = null;
//           break;
//         case "mousedown":
//           Ml = !0;
//           break;
//         case "contextmenu":
//         case "mouseup":
//         case "dragend":
//           (Ml = !1), Ua(u, n, d);
//           break;
//         case "selectionchange":
//           if (cp) break;
//         case "keydown":
//         case "keyup":
//           Ua(u, n, d);
//       }
//       var R;
//       if (Cs)
//         e: {
//           switch (e) {
//             case "compositionstart":
//               var E = "onCompositionStart";
//               break e;
//             case "compositionend":
//               E = "onCompositionEnd";
//               break e;
//             case "compositionupdate":
//               E = "onCompositionUpdate";
//               break e;
//           }
//           E = void 0;
//         }
//       else
//         kn
//           ? Nc(e, n) && (E = "onCompositionEnd")
//           : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
//       E &&
//         (Tc &&
//           n.locale !== "ko" &&
//           (kn || E !== "onCompositionStart"
//             ? E === "onCompositionEnd" && kn && (R = Rc())
//             : ((Ft = d),
//               (ks = "value" in Ft ? Ft.value : Ft.textContent),
//               (kn = !0))),
//         (T = Bi(c, E)),
//         0 < T.length &&
//           ((E = new Ta(E, e, null, n, d)),
//           u.push({ event: E, listeners: T }),
//           R ? (E.data = R) : ((R = Mc(n)), R !== null && (E.data = R)))),
//         (R = qh ? bh(e, n) : ep(e, n)) &&
//           ((c = Bi(c, "onBeforeInput")),
//           0 < c.length &&
//             ((d = new Ta("onBeforeInput", "beforeinput", null, n, d)),
//             u.push({ event: d, listeners: c }),
//             (d.data = R)));
//     }
//     Hc(u, t);
//   });
// }
// function Ar(e, t, n) {
//   return { instance: e, listener: t, currentTarget: n };
// }
// function Bi(e, t) {
//   for (var n = t + "Capture", r = []; e !== null; ) {
//     var i = e,
//       o = i.stateNode;
//     i.tag === 5 &&
//       o !== null &&
//       ((i = o),
//       (o = Dr(e, n)),
//       o != null && r.unshift(Ar(e, o, i)),
//       (o = Dr(e, t)),
//       o != null && r.push(Ar(e, o, i))),
//       (e = e.return);
//   }
//   return r;
// }
// function wn(e) {
//   if (e === null) return null;
//   do e = e.return;
//   while (e && e.tag !== 5);
//   return e || null;
// }
// function $a(e, t, n, r, i) {
//   for (var o = t._reactName, l = []; n !== null && n !== r; ) {
//     var a = n,
//       s = a.alternate,
//       c = a.stateNode;
//     if (s !== null && s === r) break;
//     a.tag === 5 &&
//       c !== null &&
//       ((a = c),
//       i
//         ? ((s = Dr(n, o)), s != null && l.unshift(Ar(n, s, a)))
//         : i || ((s = Dr(n, o)), s != null && l.push(Ar(n, s, a)))),
//       (n = n.return);
//   }
//   l.length !== 0 && e.push({ event: t, listeners: l });
// }
// var pp = /\r\n?/g,
//   vp = /\u0000|\uFFFD/g;
// function Wa(e) {
//   return (typeof e == "string" ? e : "" + e)
//     .replace(
//       pp,
//       `
// `
//     )
//     .replace(vp, "");
// }
// function pi(e, t, n) {
//   if (((t = Wa(t)), Wa(e) !== t && n)) throw Error(P(425));
// }
// function $i() {}
// var Dl = null,
//   Ol = null;
// function zl(e, t) {
//   return (
//     e === "textarea" ||
//     e === "noscript" ||
//     typeof t.children == "string" ||
//     typeof t.children == "number" ||
//     (typeof t.dangerouslySetInnerHTML == "object" &&
//       t.dangerouslySetInnerHTML !== null &&
//       t.dangerouslySetInnerHTML.__html != null)
//   );
// }
// var jl = typeof setTimeout == "function" ? setTimeout : void 0,
//   mp = typeof clearTimeout == "function" ? clearTimeout : void 0,
//   Ha = typeof Promise == "function" ? Promise : void 0,
//   yp =
//     typeof queueMicrotask == "function"
//       ? queueMicrotask
//       : typeof Ha < "u"
//       ? function (e) {
//           return Ha.resolve(null).then(e).catch(gp);
//         }
//       : jl;
// function gp(e) {
//   setTimeout(function () {
//     throw e;
//   });
// }
// function Go(e, t) {
//   var n = t,
//     r = 0;
//   do {
//     var i = n.nextSibling;
//     if ((e.removeChild(n), i && i.nodeType === 8))
//       if (((n = i.data), n === "/$")) {
//         if (r === 0) {
//           e.removeChild(i), jr(t);
//           return;
//         }
//         r--;
//       } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
//     n = i;
//   } while (n);
//   jr(t);
// }
// function Wt(e) {
//   for (; e != null; e = e.nextSibling) {
//     var t = e.nodeType;
//     if (t === 1 || t === 3) break;
//     if (t === 8) {
//       if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
//       if (t === "/$") return null;
//     }
//   }
//   return e;
// }
// function Va(e) {
//   e = e.previousSibling;
//   for (var t = 0; e; ) {
//     if (e.nodeType === 8) {
//       var n = e.data;
//       if (n === "$" || n === "$!" || n === "$?") {
//         if (t === 0) return e;
//         t--;
//       } else n === "/$" && t++;
//     }
//     e = e.previousSibling;
//   }
//   return null;
// }
// var qn = Math.random().toString(36).slice(2),
//   ft = "__reactFiber$" + qn,
//   Br = "__reactProps$" + qn,
//   Pt = "__reactContainer$" + qn,
//   Il = "__reactEvents$" + qn,
//   wp = "__reactListeners$" + qn,
//   Sp = "__reactHandles$" + qn;
// function nn(e) {
//   var t = e[ft];
//   if (t) return t;
//   for (var n = e.parentNode; n; ) {
//     if ((t = n[Pt] || n[ft])) {
//       if (
//         ((n = t.alternate),
//         t.child !== null || (n !== null && n.child !== null))
//       )
//         for (e = Va(e); e !== null; ) {
//           if ((n = e[ft])) return n;
//           e = Va(e);
//         }
//       return t;
//     }
//     (e = n), (n = e.parentNode);
//   }
//   return null;
// }
// function Jr(e) {
//   return (
//     (e = e[ft] || e[Pt]),
//     !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
//   );
// }
// function Cn(e) {
//   if (e.tag === 5 || e.tag === 6) return e.stateNode;
//   throw Error(P(33));
// }
// function uo(e) {
//   return e[Br] || null;
// }
// var Fl = [],
//   Pn = -1;
// function Zt(e) {
//   return { current: e };
// }
// function te(e) {
//   0 > Pn || ((e.current = Fl[Pn]), (Fl[Pn] = null), Pn--);
// }
// function q(e, t) {
//   Pn++, (Fl[Pn] = e.current), (e.current = t);
// }
// var Gt = {},
//   Ne = Zt(Gt),
//   Fe = Zt(!1),
//   un = Gt;
// function Wn(e, t) {
//   var n = e.type.contextTypes;
//   if (!n) return Gt;
//   var r = e.stateNode;
//   if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
//     return r.__reactInternalMemoizedMaskedChildContext;
//   var i = {},
//     o;
//   for (o in n) i[o] = t[o];
//   return (
//     r &&
//       ((e = e.stateNode),
//       (e.__reactInternalMemoizedUnmaskedChildContext = t),
//       (e.__reactInternalMemoizedMaskedChildContext = i)),
//     i
//   );
// }
// function Ue(e) {
//   return (e = e.childContextTypes), e != null;
// }
// function Wi() {
//   te(Fe), te(Ne);
// }
// function Qa(e, t, n) {
//   if (Ne.current !== Gt) throw Error(P(168));
//   q(Ne, t), q(Fe, n);
// }
// function Qc(e, t, n) {
//   var r = e.stateNode;
//   if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
//     return n;
//   r = r.getChildContext();
//   for (var i in r) if (!(i in t)) throw Error(P(108, ih(e) || "Unknown", i));
//   return se({}, n, r);
// }
// function Hi(e) {
//   return (
//     (e =
//       ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Gt),
//     (un = Ne.current),
//     q(Ne, e),
//     q(Fe, Fe.current),
//     !0
//   );
// }
// function Ka(e, t, n) {
//   var r = e.stateNode;
//   if (!r) throw Error(P(169));
//   n
//     ? ((e = Qc(e, t, un)),
//       (r.__reactInternalMemoizedMergedChildContext = e),
//       te(Fe),
//       te(Ne),
//       q(Ne, e))
//     : te(Fe),
//     q(Fe, n);
// }
// var St = null,
//   co = !1,
//   Xo = !1;
// function Kc(e) {
//   St === null ? (St = [e]) : St.push(e);
// }
// function _p(e) {
//   (co = !0), Kc(e);
// }
// function Jt() {
//   if (!Xo && St !== null) {
//     Xo = !0;
//     var e = 0,
//       t = X;
//     try {
//       var n = St;
//       for (X = 1; e < n.length; e++) {
//         var r = n[e];
//         do r = r(!0);
//         while (r !== null);
//       }
//       (St = null), (co = !1);
//     } catch (i) {
//       throw (St !== null && (St = St.slice(e + 1)), yc(gs, Jt), i);
//     } finally {
//       (X = t), (Xo = !1);
//     }
//   }
//   return null;
// }
// var Ln = [],
//   Rn = 0,
//   Vi = null,
//   Qi = 0,
//   Ye = [],
//   Ge = 0,
//   cn = null,
//   _t = 1,
//   kt = "";
// function en(e, t) {
//   (Ln[Rn++] = Qi), (Ln[Rn++] = Vi), (Vi = e), (Qi = t);
// }
// function Yc(e, t, n) {
//   (Ye[Ge++] = _t), (Ye[Ge++] = kt), (Ye[Ge++] = cn), (cn = e);
//   var r = _t;
//   e = kt;
//   var i = 32 - lt(r) - 1;
//   (r &= ~(1 << i)), (n += 1);
//   var o = 32 - lt(t) + i;
//   if (30 < o) {
//     var l = i - (i % 5);
//     (o = (r & ((1 << l) - 1)).toString(32)),
//       (r >>= l),
//       (i -= l),
//       (_t = (1 << (32 - lt(t) + i)) | (n << i) | r),
//       (kt = o + e);
//   } else (_t = (1 << o) | (n << i) | r), (kt = e);
// }
// function Ls(e) {
//   e.return !== null && (en(e, 1), Yc(e, 1, 0));
// }
// function Rs(e) {
//   for (; e === Vi; )
//     (Vi = Ln[--Rn]), (Ln[Rn] = null), (Qi = Ln[--Rn]), (Ln[Rn] = null);
//   for (; e === cn; )
//     (cn = Ye[--Ge]),
//       (Ye[Ge] = null),
//       (kt = Ye[--Ge]),
//       (Ye[Ge] = null),
//       (_t = Ye[--Ge]),
//       (Ye[Ge] = null);
// }
// var We = null,
//   $e = null,
//   re = !1,
//   ot = null;
// function Gc(e, t) {
//   var n = Xe(5, null, null, 0);
//   (n.elementType = "DELETED"),
//     (n.stateNode = t),
//     (n.return = e),
//     (t = e.deletions),
//     t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
// }
// function Ya(e, t) {
//   switch (e.tag) {
//     case 5:
//       var n = e.type;
//       return (
//         (t =
//           t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
//             ? null
//             : t),
//         t !== null
//           ? ((e.stateNode = t), (We = e), ($e = Wt(t.firstChild)), !0)
//           : !1
//       );
//     case 6:
//       return (
//         (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
//         t !== null ? ((e.stateNode = t), (We = e), ($e = null), !0) : !1
//       );
//     case 13:
//       return (
//         (t = t.nodeType !== 8 ? null : t),
//         t !== null
//           ? ((n = cn !== null ? { id: _t, overflow: kt } : null),
//             (e.memoizedState = {
//               dehydrated: t,
//               treeContext: n,
//               retryLane: 1073741824,
//             }),
//             (n = Xe(18, null, null, 0)),
//             (n.stateNode = t),
//             (n.return = e),
//             (e.child = n),
//             (We = e),
//             ($e = null),
//             !0)
//           : !1
//       );
//     default:
//       return !1;
//   }
// }
// function Ul(e) {
//   return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
// }
// function Al(e) {
//   if (re) {
//     var t = $e;
//     if (t) {
//       var n = t;
//       if (!Ya(e, t)) {
//         if (Ul(e)) throw Error(P(418));
//         t = Wt(n.nextSibling);
//         var r = We;
//         t && Ya(e, t)
//           ? Gc(r, n)
//           : ((e.flags = (e.flags & -4097) | 2), (re = !1), (We = e));
//       }
//     } else {
//       if (Ul(e)) throw Error(P(418));
//       (e.flags = (e.flags & -4097) | 2), (re = !1), (We = e);
//     }
//   }
// }
// function Ga(e) {
//   for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
//     e = e.return;
//   We = e;
// }
// function vi(e) {
//   if (e !== We) return !1;
//   if (!re) return Ga(e), (re = !0), !1;
//   var t;
//   if (
//     ((t = e.tag !== 3) &&
//       !(t = e.tag !== 5) &&
//       ((t = e.type),
//       (t = t !== "head" && t !== "body" && !zl(e.type, e.memoizedProps))),
//     t && (t = $e))
//   ) {
//     if (Ul(e)) throw (Xc(), Error(P(418)));
//     for (; t; ) Gc(e, t), (t = Wt(t.nextSibling));
//   }
//   if ((Ga(e), e.tag === 13)) {
//     if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
//       throw Error(P(317));
//     e: {
//       for (e = e.nextSibling, t = 0; e; ) {
//         if (e.nodeType === 8) {
//           var n = e.data;
//           if (n === "/$") {
//             if (t === 0) {
//               $e = Wt(e.nextSibling);
//               break e;
//             }
//             t--;
//           } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
//         }
//         e = e.nextSibling;
//       }
//       $e = null;
//     }
//   } else $e = We ? Wt(e.stateNode.nextSibling) : null;
//   return !0;
// }
// function Xc() {
//   for (var e = $e; e; ) e = Wt(e.nextSibling);
// }
// function Hn() {
//   ($e = We = null), (re = !1);
// }
// function Ts(e) {
//   ot === null ? (ot = [e]) : ot.push(e);
// }
// var kp = Nt.ReactCurrentBatchConfig;
// function rt(e, t) {
//   if (e && e.defaultProps) {
//     (t = se({}, t)), (e = e.defaultProps);
//     for (var n in e) t[n] === void 0 && (t[n] = e[n]);
//     return t;
//   }
//   return t;
// }
// var Ki = Zt(null),
//   Yi = null,
//   Tn = null,
//   Ns = null;
// function Ms() {
//   Ns = Tn = Yi = null;
// }
// function Ds(e) {
//   var t = Ki.current;
//   te(Ki), (e._currentValue = t);
// }
// function Bl(e, t, n) {
//   for (; e !== null; ) {
//     var r = e.alternate;
//     if (
//       ((e.childLanes & t) !== t
//         ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
//         : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
//       e === n)
//     )
//       break;
//     e = e.return;
//   }
// }
// function Un(e, t) {
//   (Yi = e),
//     (Ns = Tn = null),
//     (e = e.dependencies),
//     e !== null &&
//       e.firstContext !== null &&
//       (e.lanes & t && (Ie = !0), (e.firstContext = null));
// }
// function Je(e) {
//   var t = e._currentValue;
//   if (Ns !== e)
//     if (((e = { context: e, memoizedValue: t, next: null }), Tn === null)) {
//       if (Yi === null) throw Error(P(308));
//       (Tn = e), (Yi.dependencies = { lanes: 0, firstContext: e });
//     } else Tn = Tn.next = e;
//   return t;
// }
// var rn = null;
// function Os(e) {
//   rn === null ? (rn = [e]) : rn.push(e);
// }
// function Zc(e, t, n, r) {
//   var i = t.interleaved;
//   return (
//     i === null ? ((n.next = n), Os(t)) : ((n.next = i.next), (i.next = n)),
//     (t.interleaved = n),
//     Lt(e, r)
//   );
// }
// function Lt(e, t) {
//   e.lanes |= t;
//   var n = e.alternate;
//   for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
//     (e.childLanes |= t),
//       (n = e.alternate),
//       n !== null && (n.childLanes |= t),
//       (n = e),
//       (e = e.return);
//   return n.tag === 3 ? n.stateNode : null;
// }
// var zt = !1;
// function zs(e) {
//   e.updateQueue = {
//     baseState: e.memoizedState,
//     firstBaseUpdate: null,
//     lastBaseUpdate: null,
//     shared: { pending: null, interleaved: null, lanes: 0 },
//     effects: null,
//   };
// }
// function Jc(e, t) {
//   (e = e.updateQueue),
//     t.updateQueue === e &&
//       (t.updateQueue = {
//         baseState: e.baseState,
//         firstBaseUpdate: e.firstBaseUpdate,
//         lastBaseUpdate: e.lastBaseUpdate,
//         shared: e.shared,
//         effects: e.effects,
//       });
// }
// function Et(e, t) {
//   return {
//     eventTime: e,
//     lane: t,
//     tag: 0,
//     payload: null,
//     callback: null,
//     next: null,
//   };
// }
// function Ht(e, t, n) {
//   var r = e.updateQueue;
//   if (r === null) return null;
//   if (((r = r.shared), Y & 2)) {
//     var i = r.pending;
//     return (
//       i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
//       (r.pending = t),
//       Lt(e, n)
//     );
//   }
//   return (
//     (i = r.interleaved),
//     i === null ? ((t.next = t), Os(r)) : ((t.next = i.next), (i.next = t)),
//     (r.interleaved = t),
//     Lt(e, n)
//   );
// }
// function Pi(e, t, n) {
//   if (
//     ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
//   ) {
//     var r = t.lanes;
//     (r &= e.pendingLanes), (n |= r), (t.lanes = n), ws(e, n);
//   }
// }
// function Xa(e, t) {
//   var n = e.updateQueue,
//     r = e.alternate;
//   if (r !== null && ((r = r.updateQueue), n === r)) {
//     var i = null,
//       o = null;
//     if (((n = n.firstBaseUpdate), n !== null)) {
//       do {
//         var l = {
//           eventTime: n.eventTime,
//           lane: n.lane,
//           tag: n.tag,
//           payload: n.payload,
//           callback: n.callback,
//           next: null,
//         };
//         o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
//       } while (n !== null);
//       o === null ? (i = o = t) : (o = o.next = t);
//     } else i = o = t;
//     (n = {
//       baseState: r.baseState,
//       firstBaseUpdate: i,
//       lastBaseUpdate: o,
//       shared: r.shared,
//       effects: r.effects,
//     }),
//       (e.updateQueue = n);
//     return;
//   }
//   (e = n.lastBaseUpdate),
//     e === null ? (n.firstBaseUpdate = t) : (e.next = t),
//     (n.lastBaseUpdate = t);
// }
// function Gi(e, t, n, r) {
//   var i = e.updateQueue;
//   zt = !1;
//   var o = i.firstBaseUpdate,
//     l = i.lastBaseUpdate,
//     a = i.shared.pending;
//   if (a !== null) {
//     i.shared.pending = null;
//     var s = a,
//       c = s.next;
//     (s.next = null), l === null ? (o = c) : (l.next = c), (l = s);
//     var d = e.alternate;
//     d !== null &&
//       ((d = d.updateQueue),
//       (a = d.lastBaseUpdate),
//       a !== l &&
//         (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
//         (d.lastBaseUpdate = s)));
//   }
//   if (o !== null) {
//     var u = i.baseState;
//     (l = 0), (d = c = s = null), (a = o);
//     do {
//       var f = a.lane,
//         p = a.eventTime;
//       if ((r & f) === f) {
//         d !== null &&
//           (d = d.next =
//             {
//               eventTime: p,
//               lane: 0,
//               tag: a.tag,
//               payload: a.payload,
//               callback: a.callback,
//               next: null,
//             });
//         e: {
//           var g = e,
//             S = a;
//           switch (((f = t), (p = n), S.tag)) {
//             case 1:
//               if (((g = S.payload), typeof g == "function")) {
//                 u = g.call(p, u, f);
//                 break e;
//               }
//               u = g;
//               break e;
//             case 3:
//               g.flags = (g.flags & -65537) | 128;
//             case 0:
//               if (
//                 ((g = S.payload),
//                 (f = typeof g == "function" ? g.call(p, u, f) : g),
//                 f == null)
//               )
//                 break e;
//               u = se({}, u, f);
//               break e;
//             case 2:
//               zt = !0;
//           }
//         }
//         a.callback !== null &&
//           a.lane !== 0 &&
//           ((e.flags |= 64),
//           (f = i.effects),
//           f === null ? (i.effects = [a]) : f.push(a));
//       } else
//         (p = {
//           eventTime: p,
//           lane: f,
//           tag: a.tag,
//           payload: a.payload,
//           callback: a.callback,
//           next: null,
//         }),
//           d === null ? ((c = d = p), (s = u)) : (d = d.next = p),
//           (l |= f);
//       if (((a = a.next), a === null)) {
//         if (((a = i.shared.pending), a === null)) break;
//         (f = a),
//           (a = f.next),
//           (f.next = null),
//           (i.lastBaseUpdate = f),
//           (i.shared.pending = null);
//       }
//     } while (1);
//     if (
//       (d === null && (s = u),
//       (i.baseState = s),
//       (i.firstBaseUpdate = c),
//       (i.lastBaseUpdate = d),
//       (t = i.shared.interleaved),
//       t !== null)
//     ) {
//       i = t;
//       do (l |= i.lane), (i = i.next);
//       while (i !== t);
//     } else o === null && (i.shared.lanes = 0);
//     (fn |= l), (e.lanes = l), (e.memoizedState = u);
//   }
// }
// function Za(e, t, n) {
//   if (((e = t.effects), (t.effects = null), e !== null))
//     for (t = 0; t < e.length; t++) {
//       var r = e[t],
//         i = r.callback;
//       if (i !== null) {
//         if (((r.callback = null), (r = n), typeof i != "function"))
//           throw Error(P(191, i));
//         i.call(r);
//       }
//     }
// }
// var qc = new Zu.Component().refs;
// function $l(e, t, n, r) {
//   (t = e.memoizedState),
//     (n = n(r, t)),
//     (n = n == null ? t : se({}, t, n)),
//     (e.memoizedState = n),
//     e.lanes === 0 && (e.updateQueue.baseState = n);
// }
// var fo = {
//   isMounted: function (e) {
//     return (e = e._reactInternals) ? vn(e) === e : !1;
//   },
//   enqueueSetState: function (e, t, n) {
//     e = e._reactInternals;
//     var r = De(),
//       i = Qt(e),
//       o = Et(r, i);
//     (o.payload = t),
//       n != null && (o.callback = n),
//       (t = Ht(e, o, i)),
//       t !== null && (st(t, e, i, r), Pi(t, e, i));
//   },
//   enqueueReplaceState: function (e, t, n) {
//     e = e._reactInternals;
//     var r = De(),
//       i = Qt(e),
//       o = Et(r, i);
//     (o.tag = 1),
//       (o.payload = t),
//       n != null && (o.callback = n),
//       (t = Ht(e, o, i)),
//       t !== null && (st(t, e, i, r), Pi(t, e, i));
//   },
//   enqueueForceUpdate: function (e, t) {
//     e = e._reactInternals;
//     var n = De(),
//       r = Qt(e),
//       i = Et(n, r);
//     (i.tag = 2),
//       t != null && (i.callback = t),
//       (t = Ht(e, i, r)),
//       t !== null && (st(t, e, r, n), Pi(t, e, r));
//   },
// };
// function Ja(e, t, n, r, i, o, l) {
//   return (
//     (e = e.stateNode),
//     typeof e.shouldComponentUpdate == "function"
//       ? e.shouldComponentUpdate(r, o, l)
//       : t.prototype && t.prototype.isPureReactComponent
//       ? !Fr(n, r) || !Fr(i, o)
//       : !0
//   );
// }
// function bc(e, t, n) {
//   var r = !1,
//     i = Gt,
//     o = t.contextType;
//   return (
//     typeof o == "object" && o !== null
//       ? (o = Je(o))
//       : ((i = Ue(t) ? un : Ne.current),
//         (r = t.contextTypes),
//         (o = (r = r != null) ? Wn(e, i) : Gt)),
//     (t = new t(n, o)),
//     (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
//     (t.updater = fo),
//     (e.stateNode = t),
//     (t._reactInternals = e),
//     r &&
//       ((e = e.stateNode),
//       (e.__reactInternalMemoizedUnmaskedChildContext = i),
//       (e.__reactInternalMemoizedMaskedChildContext = o)),
//     t
//   );
// }
// function qa(e, t, n, r) {
//   (e = t.state),
//     typeof t.componentWillReceiveProps == "function" &&
//       t.componentWillReceiveProps(n, r),
//     typeof t.UNSAFE_componentWillReceiveProps == "function" &&
//       t.UNSAFE_componentWillReceiveProps(n, r),
//     t.state !== e && fo.enqueueReplaceState(t, t.state, null);
// }
// function Wl(e, t, n, r) {
//   var i = e.stateNode;
//   (i.props = n), (i.state = e.memoizedState), (i.refs = qc), zs(e);
//   var o = t.contextType;
//   typeof o == "object" && o !== null
//     ? (i.context = Je(o))
//     : ((o = Ue(t) ? un : Ne.current), (i.context = Wn(e, o))),
//     (i.state = e.memoizedState),
//     (o = t.getDerivedStateFromProps),
//     typeof o == "function" && ($l(e, t, o, n), (i.state = e.memoizedState)),
//     typeof t.getDerivedStateFromProps == "function" ||
//       typeof i.getSnapshotBeforeUpdate == "function" ||
//       (typeof i.UNSAFE_componentWillMount != "function" &&
//         typeof i.componentWillMount != "function") ||
//       ((t = i.state),
//       typeof i.componentWillMount == "function" && i.componentWillMount(),
//       typeof i.UNSAFE_componentWillMount == "function" &&
//         i.UNSAFE_componentWillMount(),
//       t !== i.state && fo.enqueueReplaceState(i, i.state, null),
//       Gi(e, n, i, r),
//       (i.state = e.memoizedState)),
//     typeof i.componentDidMount == "function" && (e.flags |= 4194308);
// }
// function cr(e, t, n) {
//   if (
//     ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
//   ) {
//     if (n._owner) {
//       if (((n = n._owner), n)) {
//         if (n.tag !== 1) throw Error(P(309));
//         var r = n.stateNode;
//       }
//       if (!r) throw Error(P(147, e));
//       var i = r,
//         o = "" + e;
//       return t !== null &&
//         t.ref !== null &&
//         typeof t.ref == "function" &&
//         t.ref._stringRef === o
//         ? t.ref
//         : ((t = function (l) {
//             var a = i.refs;
//             a === qc && (a = i.refs = {}),
//               l === null ? delete a[o] : (a[o] = l);
//           }),
//           (t._stringRef = o),
//           t);
//     }
//     if (typeof e != "string") throw Error(P(284));
//     if (!n._owner) throw Error(P(290, e));
//   }
//   return e;
// }
// function mi(e, t) {
//   throw (
//     ((e = Object.prototype.toString.call(t)),
//     Error(
//       P(
//         31,
//         e === "[object Object]"
//           ? "object with keys {" + Object.keys(t).join(", ") + "}"
//           : e
//       )
//     ))
//   );
// }
// function ba(e) {
//   var t = e._init;
//   return t(e._payload);
// }
// function ed(e) {
//   function t(v, h) {
//     if (e) {
//       var m = v.deletions;
//       m === null ? ((v.deletions = [h]), (v.flags |= 16)) : m.push(h);
//     }
//   }
//   function n(v, h) {
//     if (!e) return null;
//     for (; h !== null; ) t(v, h), (h = h.sibling);
//     return null;
//   }
//   function r(v, h) {
//     for (v = new Map(); h !== null; )
//       h.key !== null ? v.set(h.key, h) : v.set(h.index, h), (h = h.sibling);
//     return v;
//   }
//   function i(v, h) {
//     return (v = Kt(v, h)), (v.index = 0), (v.sibling = null), v;
//   }
//   function o(v, h, m) {
//     return (
//       (v.index = m),
//       e
//         ? ((m = v.alternate),
//           m !== null
//             ? ((m = m.index), m < h ? ((v.flags |= 2), h) : m)
//             : ((v.flags |= 2), h))
//         : ((v.flags |= 1048576), h)
//     );
//   }
//   function l(v) {
//     return e && v.alternate === null && (v.flags |= 2), v;
//   }
//   function a(v, h, m, _) {
//     return h === null || h.tag !== 6
//       ? ((h = nl(m, v.mode, _)), (h.return = v), h)
//       : ((h = i(h, m)), (h.return = v), h);
//   }
//   function s(v, h, m, _) {
//     var x = m.type;
//     return x === _n
//       ? d(v, h, m.props.children, _, m.key)
//       : h !== null &&
//         (h.elementType === x ||
//           (typeof x == "object" &&
//             x !== null &&
//             x.$$typeof === Ot &&
//             ba(x) === h.type))
//       ? ((_ = i(h, m.props)), (_.ref = cr(v, h, m)), (_.return = v), _)
//       : ((_ = Di(m.type, m.key, m.props, null, v.mode, _)),
//         (_.ref = cr(v, h, m)),
//         (_.return = v),
//         _);
//   }
//   function c(v, h, m, _) {
//     return h === null ||
//       h.tag !== 4 ||
//       h.stateNode.containerInfo !== m.containerInfo ||
//       h.stateNode.implementation !== m.implementation
//       ? ((h = rl(m, v.mode, _)), (h.return = v), h)
//       : ((h = i(h, m.children || [])), (h.return = v), h);
//   }
//   function d(v, h, m, _, x) {
//     return h === null || h.tag !== 7
//       ? ((h = an(m, v.mode, _, x)), (h.return = v), h)
//       : ((h = i(h, m)), (h.return = v), h);
//   }
//   function u(v, h, m) {
//     if ((typeof h == "string" && h !== "") || typeof h == "number")
//       return (h = nl("" + h, v.mode, m)), (h.return = v), h;
//     if (typeof h == "object" && h !== null) {
//       switch (h.$$typeof) {
//         case oi:
//           return (
//             (m = Di(h.type, h.key, h.props, null, v.mode, m)),
//             (m.ref = cr(v, null, h)),
//             (m.return = v),
//             m
//           );
//         case Sn:
//           return (h = rl(h, v.mode, m)), (h.return = v), h;
//         case Ot:
//           var _ = h._init;
//           return u(v, _(h._payload), m);
//       }
//       if (mr(h) || or(h))
//         return (h = an(h, v.mode, m, null)), (h.return = v), h;
//       mi(v, h);
//     }
//     return null;
//   }
//   function f(v, h, m, _) {
//     var x = h !== null ? h.key : null;
//     if ((typeof m == "string" && m !== "") || typeof m == "number")
//       return x !== null ? null : a(v, h, "" + m, _);
//     if (typeof m == "object" && m !== null) {
//       switch (m.$$typeof) {
//         case oi:
//           return m.key === x ? s(v, h, m, _) : null;
//         case Sn:
//           return m.key === x ? c(v, h, m, _) : null;
//         case Ot:
//           return (x = m._init), f(v, h, x(m._payload), _);
//       }
//       if (mr(m) || or(m)) return x !== null ? null : d(v, h, m, _, null);
//       mi(v, m);
//     }
//     return null;
//   }
//   function p(v, h, m, _, x) {
//     if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
//       return (v = v.get(m) || null), a(h, v, "" + _, x);
//     if (typeof _ == "object" && _ !== null) {
//       switch (_.$$typeof) {
//         case oi:
//           return (v = v.get(_.key === null ? m : _.key) || null), s(h, v, _, x);
//         case Sn:
//           return (v = v.get(_.key === null ? m : _.key) || null), c(h, v, _, x);
//         case Ot:
//           var T = _._init;
//           return p(v, h, m, T(_._payload), x);
//       }
//       if (mr(_) || or(_)) return (v = v.get(m) || null), d(h, v, _, x, null);
//       mi(h, _);
//     }
//     return null;
//   }
//   function g(v, h, m, _) {
//     for (
//       var x = null, T = null, R = h, E = (h = 0), N = null;
//       R !== null && E < m.length;
//       E++
//     ) {
//       R.index > E ? ((N = R), (R = null)) : (N = R.sibling);
//       var L = f(v, R, m[E], _);
//       if (L === null) {
//         R === null && (R = N);
//         break;
//       }
//       e && R && L.alternate === null && t(v, R),
//         (h = o(L, h, E)),
//         T === null ? (x = L) : (T.sibling = L),
//         (T = L),
//         (R = N);
//     }
//     if (E === m.length) return n(v, R), re && en(v, E), x;
//     if (R === null) {
//       for (; E < m.length; E++)
//         (R = u(v, m[E], _)),
//           R !== null &&
//             ((h = o(R, h, E)), T === null ? (x = R) : (T.sibling = R), (T = R));
//       return re && en(v, E), x;
//     }
//     for (R = r(v, R); E < m.length; E++)
//       (N = p(R, v, E, m[E], _)),
//         N !== null &&
//           (e && N.alternate !== null && R.delete(N.key === null ? E : N.key),
//           (h = o(N, h, E)),
//           T === null ? (x = N) : (T.sibling = N),
//           (T = N));
//     return (
//       e &&
//         R.forEach(function (A) {
//           return t(v, A);
//         }),
//       re && en(v, E),
//       x
//     );
//   }
//   function S(v, h, m, _) {
//     var x = or(m);
//     if (typeof x != "function") throw Error(P(150));
//     if (((m = x.call(m)), m == null)) throw Error(P(151));
//     for (
//       var T = (x = null), R = h, E = (h = 0), N = null, L = m.next();
//       R !== null && !L.done;
//       E++, L = m.next()
//     ) {
//       R.index > E ? ((N = R), (R = null)) : (N = R.sibling);
//       var A = f(v, R, L.value, _);
//       if (A === null) {
//         R === null && (R = N);
//         break;
//       }
//       e && R && A.alternate === null && t(v, R),
//         (h = o(A, h, E)),
//         T === null ? (x = A) : (T.sibling = A),
//         (T = A),
//         (R = N);
//     }
//     if (L.done) return n(v, R), re && en(v, E), x;
//     if (R === null) {
//       for (; !L.done; E++, L = m.next())
//         (L = u(v, L.value, _)),
//           L !== null &&
//             ((h = o(L, h, E)), T === null ? (x = L) : (T.sibling = L), (T = L));
//       return re && en(v, E), x;
//     }
//     for (R = r(v, R); !L.done; E++, L = m.next())
//       (L = p(R, v, E, L.value, _)),
//         L !== null &&
//           (e && L.alternate !== null && R.delete(L.key === null ? E : L.key),
//           (h = o(L, h, E)),
//           T === null ? (x = L) : (T.sibling = L),
//           (T = L));
//     return (
//       e &&
//         R.forEach(function (xe) {
//           return t(v, xe);
//         }),
//       re && en(v, E),
//       x
//     );
//   }
//   function y(v, h, m, _) {
//     if (
//       (typeof m == "object" &&
//         m !== null &&
//         m.type === _n &&
//         m.key === null &&
//         (m = m.props.children),
//       typeof m == "object" && m !== null)
//     ) {
//       switch (m.$$typeof) {
//         case oi:
//           e: {
//             for (var x = m.key, T = h; T !== null; ) {
//               if (T.key === x) {
//                 if (((x = m.type), x === _n)) {
//                   if (T.tag === 7) {
//                     n(v, T.sibling),
//                       (h = i(T, m.props.children)),
//                       (h.return = v),
//                       (v = h);
//                     break e;
//                   }
//                 } else if (
//                   T.elementType === x ||
//                   (typeof x == "object" &&
//                     x !== null &&
//                     x.$$typeof === Ot &&
//                     ba(x) === T.type)
//                 ) {
//                   n(v, T.sibling),
//                     (h = i(T, m.props)),
//                     (h.ref = cr(v, T, m)),
//                     (h.return = v),
//                     (v = h);
//                   break e;
//                 }
//                 n(v, T);
//                 break;
//               } else t(v, T);
//               T = T.sibling;
//             }
//             m.type === _n
//               ? ((h = an(m.props.children, v.mode, _, m.key)),
//                 (h.return = v),
//                 (v = h))
//               : ((_ = Di(m.type, m.key, m.props, null, v.mode, _)),
//                 (_.ref = cr(v, h, m)),
//                 (_.return = v),
//                 (v = _));
//           }
//           return l(v);
//         case Sn:
//           e: {
//             for (T = m.key; h !== null; ) {
//               if (h.key === T)
//                 if (
//                   h.tag === 4 &&
//                   h.stateNode.containerInfo === m.containerInfo &&
//                   h.stateNode.implementation === m.implementation
//                 ) {
//                   n(v, h.sibling),
//                     (h = i(h, m.children || [])),
//                     (h.return = v),
//                     (v = h);
//                   break e;
//                 } else {
//                   n(v, h);
//                   break;
//                 }
//               else t(v, h);
//               h = h.sibling;
//             }
//             (h = rl(m, v.mode, _)), (h.return = v), (v = h);
//           }
//           return l(v);
//         case Ot:
//           return (T = m._init), y(v, h, T(m._payload), _);
//       }
//       if (mr(m)) return g(v, h, m, _);
//       if (or(m)) return S(v, h, m, _);
//       mi(v, m);
//     }
//     return (typeof m == "string" && m !== "") || typeof m == "number"
//       ? ((m = "" + m),
//         h !== null && h.tag === 6
//           ? (n(v, h.sibling), (h = i(h, m)), (h.return = v), (v = h))
//           : (n(v, h), (h = nl(m, v.mode, _)), (h.return = v), (v = h)),
//         l(v))
//       : n(v, h);
//   }
//   return y;
// }
// var Vn = ed(!0),
//   td = ed(!1),
//   qr = {},
//   pt = Zt(qr),
//   $r = Zt(qr),
//   Wr = Zt(qr);
// function on(e) {
//   if (e === qr) throw Error(P(174));
//   return e;
// }
// function js(e, t) {
//   switch ((q(Wr, t), q($r, e), q(pt, qr), (e = t.nodeType), e)) {
//     case 9:
//     case 11:
//       t = (t = t.documentElement) ? t.namespaceURI : Sl(null, "");
//       break;
//     default:
//       (e = e === 8 ? t.parentNode : t),
//         (t = e.namespaceURI || null),
//         (e = e.tagName),
//         (t = Sl(t, e));
//   }
//   te(pt), q(pt, t);
// }
// function Qn() {
//   te(pt), te($r), te(Wr);
// }
// function nd(e) {
//   on(Wr.current);
//   var t = on(pt.current),
//     n = Sl(t, e.type);
//   t !== n && (q($r, e), q(pt, n));
// }
// function Is(e) {
//   $r.current === e && (te(pt), te($r));
// }
// var oe = Zt(0);
// function Xi(e) {
//   for (var t = e; t !== null; ) {
//     if (t.tag === 13) {
//       var n = t.memoizedState;
//       if (
//         n !== null &&
//         ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
//       )
//         return t;
//     } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
//       if (t.flags & 128) return t;
//     } else if (t.child !== null) {
//       (t.child.return = t), (t = t.child);
//       continue;
//     }
//     if (t === e) break;
//     for (; t.sibling === null; ) {
//       if (t.return === null || t.return === e) return null;
//       t = t.return;
//     }
//     (t.sibling.return = t.return), (t = t.sibling);
//   }
//   return null;
// }
// var Zo = [];
// function Fs() {
//   for (var e = 0; e < Zo.length; e++)
//     Zo[e]._workInProgressVersionPrimary = null;
//   Zo.length = 0;
// }
// var Li = Nt.ReactCurrentDispatcher,
//   Jo = Nt.ReactCurrentBatchConfig,
//   dn = 0,
//   le = null,
//   ve = null,
//   ge = null,
//   Zi = !1,
//   xr = !1,
//   Hr = 0,
//   Ep = 0;
// function Le() {
//   throw Error(P(321));
// }
// function Us(e, t) {
//   if (t === null) return !1;
//   for (var n = 0; n < t.length && n < e.length; n++)
//     if (!at(e[n], t[n])) return !1;
//   return !0;
// }
// function As(e, t, n, r, i, o) {
//   if (
//     ((dn = o),
//     (le = t),
//     (t.memoizedState = null),
//     (t.updateQueue = null),
//     (t.lanes = 0),
//     (Li.current = e === null || e.memoizedState === null ? Lp : Rp),
//     (e = n(r, i)),
//     xr)
//   ) {
//     o = 0;
//     do {
//       if (((xr = !1), (Hr = 0), 25 <= o)) throw Error(P(301));
//       (o += 1),
//         (ge = ve = null),
//         (t.updateQueue = null),
//         (Li.current = Tp),
//         (e = n(r, i));
//     } while (xr);
//   }
//   if (
//     ((Li.current = Ji),
//     (t = ve !== null && ve.next !== null),
//     (dn = 0),
//     (ge = ve = le = null),
//     (Zi = !1),
//     t)
//   )
//     throw Error(P(300));
//   return e;
// }
// function Bs() {
//   var e = Hr !== 0;
//   return (Hr = 0), e;
// }
// function ct() {
//   var e = {
//     memoizedState: null,
//     baseState: null,
//     baseQueue: null,
//     queue: null,
//     next: null,
//   };
//   return ge === null ? (le.memoizedState = ge = e) : (ge = ge.next = e), ge;
// }
// function qe() {
//   if (ve === null) {
//     var e = le.alternate;
//     e = e !== null ? e.memoizedState : null;
//   } else e = ve.next;
//   var t = ge === null ? le.memoizedState : ge.next;
//   if (t !== null) (ge = t), (ve = e);
//   else {
//     if (e === null) throw Error(P(310));
//     (ve = e),
//       (e = {
//         memoizedState: ve.memoizedState,
//         baseState: ve.baseState,
//         baseQueue: ve.baseQueue,
//         queue: ve.queue,
//         next: null,
//       }),
//       ge === null ? (le.memoizedState = ge = e) : (ge = ge.next = e);
//   }
//   return ge;
// }
// function Vr(e, t) {
//   return typeof t == "function" ? t(e) : t;
// }
// function qo(e) {
//   var t = qe(),
//     n = t.queue;
//   if (n === null) throw Error(P(311));
//   n.lastRenderedReducer = e;
//   var r = ve,
//     i = r.baseQueue,
//     o = n.pending;
//   if (o !== null) {
//     if (i !== null) {
//       var l = i.next;
//       (i.next = o.next), (o.next = l);
//     }
//     (r.baseQueue = i = o), (n.pending = null);
//   }
//   if (i !== null) {
//     (o = i.next), (r = r.baseState);
//     var a = (l = null),
//       s = null,
//       c = o;
//     do {
//       var d = c.lane;
//       if ((dn & d) === d)
//         s !== null &&
//           (s = s.next =
//             {
//               lane: 0,
//               action: c.action,
//               hasEagerState: c.hasEagerState,
//               eagerState: c.eagerState,
//               next: null,
//             }),
//           (r = c.hasEagerState ? c.eagerState : e(r, c.action));
//       else {
//         var u = {
//           lane: d,
//           action: c.action,
//           hasEagerState: c.hasEagerState,
//           eagerState: c.eagerState,
//           next: null,
//         };
//         s === null ? ((a = s = u), (l = r)) : (s = s.next = u),
//           (le.lanes |= d),
//           (fn |= d);
//       }
//       c = c.next;
//     } while (c !== null && c !== o);
//     s === null ? (l = r) : (s.next = a),
//       at(r, t.memoizedState) || (Ie = !0),
//       (t.memoizedState = r),
//       (t.baseState = l),
//       (t.baseQueue = s),
//       (n.lastRenderedState = r);
//   }
//   if (((e = n.interleaved), e !== null)) {
//     i = e;
//     do (o = i.lane), (le.lanes |= o), (fn |= o), (i = i.next);
//     while (i !== e);
//   } else i === null && (n.lanes = 0);
//   return [t.memoizedState, n.dispatch];
// }
// function bo(e) {
//   var t = qe(),
//     n = t.queue;
//   if (n === null) throw Error(P(311));
//   n.lastRenderedReducer = e;
//   var r = n.dispatch,
//     i = n.pending,
//     o = t.memoizedState;
//   if (i !== null) {
//     n.pending = null;
//     var l = (i = i.next);
//     do (o = e(o, l.action)), (l = l.next);
//     while (l !== i);
//     at(o, t.memoizedState) || (Ie = !0),
//       (t.memoizedState = o),
//       t.baseQueue === null && (t.baseState = o),
//       (n.lastRenderedState = o);
//   }
//   return [o, r];
// }
// function rd() {}
// function id(e, t) {
//   var n = le,
//     r = qe(),
//     i = t(),
//     o = !at(r.memoizedState, i);
//   if (
//     (o && ((r.memoizedState = i), (Ie = !0)),
//     (r = r.queue),
//     $s(sd.bind(null, n, r, e), [e]),
//     r.getSnapshot !== t || o || (ge !== null && ge.memoizedState.tag & 1))
//   ) {
//     if (
//       ((n.flags |= 2048),
//       Qr(9, ld.bind(null, n, r, i, t), void 0, null),
//       we === null)
//     )
//       throw Error(P(349));
//     dn & 30 || od(n, t, i);
//   }
//   return i;
// }
// function od(e, t, n) {
//   (e.flags |= 16384),
//     (e = { getSnapshot: t, value: n }),
//     (t = le.updateQueue),
//     t === null
//       ? ((t = { lastEffect: null, stores: null }),
//         (le.updateQueue = t),
//         (t.stores = [e]))
//       : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
// }
// function ld(e, t, n, r) {
//   (t.value = n), (t.getSnapshot = r), ad(t) && ud(e);
// }
// function sd(e, t, n) {
//   return n(function () {
//     ad(t) && ud(e);
//   });
// }
// function ad(e) {
//   var t = e.getSnapshot;
//   e = e.value;
//   try {
//     var n = t();
//     return !at(e, n);
//   } catch {
//     return !0;
//   }
// }
// function ud(e) {
//   var t = Lt(e, 1);
//   t !== null && st(t, e, 1, -1);
// }
// function eu(e) {
//   var t = ct();
//   return (
//     typeof e == "function" && (e = e()),
//     (t.memoizedState = t.baseState = e),
//     (e = {
//       pending: null,
//       interleaved: null,
//       lanes: 0,
//       dispatch: null,
//       lastRenderedReducer: Vr,
//       lastRenderedState: e,
//     }),
//     (t.queue = e),
//     (e = e.dispatch = Pp.bind(null, le, e)),
//     [t.memoizedState, e]
//   );
// }
// function Qr(e, t, n, r) {
//   return (
//     (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
//     (t = le.updateQueue),
//     t === null
//       ? ((t = { lastEffect: null, stores: null }),
//         (le.updateQueue = t),
//         (t.lastEffect = e.next = e))
//       : ((n = t.lastEffect),
//         n === null
//           ? (t.lastEffect = e.next = e)
//           : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
//     e
//   );
// }
// function cd() {
//   return qe().memoizedState;
// }
// function Ri(e, t, n, r) {
//   var i = ct();
//   (le.flags |= e),
//     (i.memoizedState = Qr(1 | t, n, void 0, r === void 0 ? null : r));
// }
// function ho(e, t, n, r) {
//   var i = qe();
//   r = r === void 0 ? null : r;
//   var o = void 0;
//   if (ve !== null) {
//     var l = ve.memoizedState;
//     if (((o = l.destroy), r !== null && Us(r, l.deps))) {
//       i.memoizedState = Qr(t, n, o, r);
//       return;
//     }
//   }
//   (le.flags |= e), (i.memoizedState = Qr(1 | t, n, o, r));
// }
// function tu(e, t) {
//   return Ri(8390656, 8, e, t);
// }
// function $s(e, t) {
//   return ho(2048, 8, e, t);
// }
// function dd(e, t) {
//   return ho(4, 2, e, t);
// }
// function fd(e, t) {
//   return ho(4, 4, e, t);
// }
// function hd(e, t) {
//   if (typeof t == "function")
//     return (
//       (e = e()),
//       t(e),
//       function () {
//         t(null);
//       }
//     );
//   if (t != null)
//     return (
//       (e = e()),
//       (t.current = e),
//       function () {
//         t.current = null;
//       }
//     );
// }
// function pd(e, t, n) {
//   return (
//     (n = n != null ? n.concat([e]) : null), ho(4, 4, hd.bind(null, t, e), n)
//   );
// }
// function Ws() {}
// function vd(e, t) {
//   var n = qe();
//   t = t === void 0 ? null : t;
//   var r = n.memoizedState;
//   return r !== null && t !== null && Us(t, r[1])
//     ? r[0]
//     : ((n.memoizedState = [e, t]), e);
// }
// function md(e, t) {
//   var n = qe();
//   t = t === void 0 ? null : t;
//   var r = n.memoizedState;
//   return r !== null && t !== null && Us(t, r[1])
//     ? r[0]
//     : ((e = e()), (n.memoizedState = [e, t]), e);
// }
// function yd(e, t, n) {
//   return dn & 21
//     ? (at(n, t) || ((n = Sc()), (le.lanes |= n), (fn |= n), (e.baseState = !0)),
//       t)
//     : (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n));
// }
// function xp(e, t) {
//   var n = X;
//   (X = n !== 0 && 4 > n ? n : 4), e(!0);
//   var r = Jo.transition;
//   Jo.transition = {};
//   try {
//     e(!1), t();
//   } finally {
//     (X = n), (Jo.transition = r);
//   }
// }
// function gd() {
//   return qe().memoizedState;
// }
// function Cp(e, t, n) {
//   var r = Qt(e);
//   if (
//     ((n = {
//       lane: r,
//       action: n,
//       hasEagerState: !1,
//       eagerState: null,
//       next: null,
//     }),
//     wd(e))
//   )
//     Sd(t, n);
//   else if (((n = Zc(e, t, n, r)), n !== null)) {
//     var i = De();
//     st(n, e, r, i), _d(n, t, r);
//   }
// }
// function Pp(e, t, n) {
//   var r = Qt(e),
//     i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
//   if (wd(e)) Sd(t, i);
//   else {
//     var o = e.alternate;
//     if (
//       e.lanes === 0 &&
//       (o === null || o.lanes === 0) &&
//       ((o = t.lastRenderedReducer), o !== null)
//     )
//       try {
//         var l = t.lastRenderedState,
//           a = o(l, n);
//         if (((i.hasEagerState = !0), (i.eagerState = a), at(a, l))) {
//           var s = t.interleaved;
//           s === null
//             ? ((i.next = i), Os(t))
//             : ((i.next = s.next), (s.next = i)),
//             (t.interleaved = i);
//           return;
//         }
//       } catch {
//       } finally {
//       }
//     (n = Zc(e, t, i, r)),
//       n !== null && ((i = De()), st(n, e, r, i), _d(n, t, r));
//   }
// }
// function wd(e) {
//   var t = e.alternate;
//   return e === le || (t !== null && t === le);
// }
// function Sd(e, t) {
//   xr = Zi = !0;
//   var n = e.pending;
//   n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
//     (e.pending = t);
// }
// function _d(e, t, n) {
//   if (n & 4194240) {
//     var r = t.lanes;
//     (r &= e.pendingLanes), (n |= r), (t.lanes = n), ws(e, n);
//   }
// }
// var Ji = {
//     readContext: Je,
//     useCallback: Le,
//     useContext: Le,
//     useEffect: Le,
//     useImperativeHandle: Le,
//     useInsertionEffect: Le,
//     useLayoutEffect: Le,
//     useMemo: Le,
//     useReducer: Le,
//     useRef: Le,
//     useState: Le,
//     useDebugValue: Le,
//     useDeferredValue: Le,
//     useTransition: Le,
//     useMutableSource: Le,
//     useSyncExternalStore: Le,
//     useId: Le,
//     unstable_isNewReconciler: !1,
//   },
//   Lp = {
//     readContext: Je,
//     useCallback: function (e, t) {
//       return (ct().memoizedState = [e, t === void 0 ? null : t]), e;
//     },
//     useContext: Je,
//     useEffect: tu,
//     useImperativeHandle: function (e, t, n) {
//       return (
//         (n = n != null ? n.concat([e]) : null),
//         Ri(4194308, 4, hd.bind(null, t, e), n)
//       );
//     },
//     useLayoutEffect: function (e, t) {
//       return Ri(4194308, 4, e, t);
//     },
//     useInsertionEffect: function (e, t) {
//       return Ri(4, 2, e, t);
//     },
//     useMemo: function (e, t) {
//       var n = ct();
//       return (
//         (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
//       );
//     },
//     useReducer: function (e, t, n) {
//       var r = ct();
//       return (
//         (t = n !== void 0 ? n(t) : t),
//         (r.memoizedState = r.baseState = t),
//         (e = {
//           pending: null,
//           interleaved: null,
//           lanes: 0,
//           dispatch: null,
//           lastRenderedReducer: e,
//           lastRenderedState: t,
//         }),
//         (r.queue = e),
//         (e = e.dispatch = Cp.bind(null, le, e)),
//         [r.memoizedState, e]
//       );
//     },
//     useRef: function (e) {
//       var t = ct();
//       return (e = { current: e }), (t.memoizedState = e);
//     },
//     useState: eu,
//     useDebugValue: Ws,
//     useDeferredValue: function (e) {
//       return (ct().memoizedState = e);
//     },
//     useTransition: function () {
//       var e = eu(!1),
//         t = e[0];
//       return (e = xp.bind(null, e[1])), (ct().memoizedState = e), [t, e];
//     },
//     useMutableSource: function () {},
//     useSyncExternalStore: function (e, t, n) {
//       var r = le,
//         i = ct();
//       if (re) {
//         if (n === void 0) throw Error(P(407));
//         n = n();
//       } else {
//         if (((n = t()), we === null)) throw Error(P(349));
//         dn & 30 || od(r, t, n);
//       }
//       i.memoizedState = n;
//       var o = { value: n, getSnapshot: t };
//       return (
//         (i.queue = o),
//         tu(sd.bind(null, r, o, e), [e]),
//         (r.flags |= 2048),
//         Qr(9, ld.bind(null, r, o, n, t), void 0, null),
//         n
//       );
//     },
//     useId: function () {
//       var e = ct(),
//         t = we.identifierPrefix;
//       if (re) {
//         var n = kt,
//           r = _t;
//         (n = (r & ~(1 << (32 - lt(r) - 1))).toString(32) + n),
//           (t = ":" + t + "R" + n),
//           (n = Hr++),
//           0 < n && (t += "H" + n.toString(32)),
//           (t += ":");
//       } else (n = Ep++), (t = ":" + t + "r" + n.toString(32) + ":");
//       return (e.memoizedState = t);
//     },
//     unstable_isNewReconciler: !1,
//   },
//   Rp = {
//     readContext: Je,
//     useCallback: vd,
//     useContext: Je,
//     useEffect: $s,
//     useImperativeHandle: pd,
//     useInsertionEffect: dd,
//     useLayoutEffect: fd,
//     useMemo: md,
//     useReducer: qo,
//     useRef: cd,
//     useState: function () {
//       return qo(Vr);
//     },
//     useDebugValue: Ws,
//     useDeferredValue: function (e) {
//       var t = qe();
//       return yd(t, ve.memoizedState, e);
//     },
//     useTransition: function () {
//       var e = qo(Vr)[0],
//         t = qe().memoizedState;
//       return [e, t];
//     },
//     useMutableSource: rd,
//     useSyncExternalStore: id,
//     useId: gd,
//     unstable_isNewReconciler: !1,
//   },
//   Tp = {
//     readContext: Je,
//     useCallback: vd,
//     useContext: Je,
//     useEffect: $s,
//     useImperativeHandle: pd,
//     useInsertionEffect: dd,
//     useLayoutEffect: fd,
//     useMemo: md,
//     useReducer: bo,
//     useRef: cd,
//     useState: function () {
//       return bo(Vr);
//     },
//     useDebugValue: Ws,
//     useDeferredValue: function (e) {
//       var t = qe();
//       return ve === null ? (t.memoizedState = e) : yd(t, ve.memoizedState, e);
//     },
//     useTransition: function () {
//       var e = bo(Vr)[0],
//         t = qe().memoizedState;
//       return [e, t];
//     },
//     useMutableSource: rd,
//     useSyncExternalStore: id,
//     useId: gd,
//     unstable_isNewReconciler: !1,
//   };
// function Kn(e, t) {
//   try {
//     var n = "",
//       r = t;
//     do (n += rh(r)), (r = r.return);
//     while (r);
//     var i = n;
//   } catch (o) {
//     i =
//       `
// Error generating stack: ` +
//       o.message +
//       `
// ` +
//       o.stack;
//   }
//   return { value: e, source: t, stack: i, digest: null };
// }
// function el(e, t, n) {
//   return { value: e, source: null, stack: n ?? null, digest: t ?? null };
// }
// function Hl(e, t) {
//   try {
//     console.error(t.value);
//   } catch (n) {
//     setTimeout(function () {
//       throw n;
//     });
//   }
// }
// var Np = typeof WeakMap == "function" ? WeakMap : Map;
// function kd(e, t, n) {
//   (n = Et(-1, n)), (n.tag = 3), (n.payload = { element: null });
//   var r = t.value;
//   return (
//     (n.callback = function () {
//       bi || ((bi = !0), (bl = r)), Hl(e, t);
//     }),
//     n
//   );
// }
// function Ed(e, t, n) {
//   (n = Et(-1, n)), (n.tag = 3);
//   var r = e.type.getDerivedStateFromError;
//   if (typeof r == "function") {
//     var i = t.value;
//     (n.payload = function () {
//       return r(i);
//     }),
//       (n.callback = function () {
//         Hl(e, t);
//       });
//   }
//   var o = e.stateNode;
//   return (
//     o !== null &&
//       typeof o.componentDidCatch == "function" &&
//       (n.callback = function () {
//         Hl(e, t),
//           typeof r != "function" &&
//             (Vt === null ? (Vt = new Set([this])) : Vt.add(this));
//         var l = t.stack;
//         this.componentDidCatch(t.value, {
//           componentStack: l !== null ? l : "",
//         });
//       }),
//     n
//   );
// }
// function nu(e, t, n) {
//   var r = e.pingCache;
//   if (r === null) {
//     r = e.pingCache = new Np();
//     var i = new Set();
//     r.set(t, i);
//   } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
//   i.has(n) || (i.add(n), (e = Vp.bind(null, e, t, n)), t.then(e, e));
// }
// function ru(e) {
//   do {
//     var t;
//     if (
//       ((t = e.tag === 13) &&
//         ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
//       t)
//     )
//       return e;
//     e = e.return;
//   } while (e !== null);
//   return null;
// }
// function iu(e, t, n, r, i) {
//   return e.mode & 1
//     ? ((e.flags |= 65536), (e.lanes = i), e)
//     : (e === t
//         ? (e.flags |= 65536)
//         : ((e.flags |= 128),
//           (n.flags |= 131072),
//           (n.flags &= -52805),
//           n.tag === 1 &&
//             (n.alternate === null
//               ? (n.tag = 17)
//               : ((t = Et(-1, 1)), (t.tag = 2), Ht(n, t, 1))),
//           (n.lanes |= 1)),
//       e);
// }
// var Mp = Nt.ReactCurrentOwner,
//   Ie = !1;
// function Me(e, t, n, r) {
//   t.child = e === null ? td(t, null, n, r) : Vn(t, e.child, n, r);
// }
// function ou(e, t, n, r, i) {
//   n = n.render;
//   var o = t.ref;
//   return (
//     Un(t, i),
//     (r = As(e, t, n, r, o, i)),
//     (n = Bs()),
//     e !== null && !Ie
//       ? ((t.updateQueue = e.updateQueue),
//         (t.flags &= -2053),
//         (e.lanes &= ~i),
//         Rt(e, t, i))
//       : (re && n && Ls(t), (t.flags |= 1), Me(e, t, r, i), t.child)
//   );
// }
// function lu(e, t, n, r, i) {
//   if (e === null) {
//     var o = n.type;
//     return typeof o == "function" &&
//       !Zs(o) &&
//       o.defaultProps === void 0 &&
//       n.compare === null &&
//       n.defaultProps === void 0
//       ? ((t.tag = 15), (t.type = o), xd(e, t, o, r, i))
//       : ((e = Di(n.type, null, r, t, t.mode, i)),
//         (e.ref = t.ref),
//         (e.return = t),
//         (t.child = e));
//   }
//   if (((o = e.child), !(e.lanes & i))) {
//     var l = o.memoizedProps;
//     if (
//       ((n = n.compare), (n = n !== null ? n : Fr), n(l, r) && e.ref === t.ref)
//     )
//       return Rt(e, t, i);
//   }
//   return (
//     (t.flags |= 1),
//     (e = Kt(o, r)),
//     (e.ref = t.ref),
//     (e.return = t),
//     (t.child = e)
//   );
// }
// function xd(e, t, n, r, i) {
//   if (e !== null) {
//     var o = e.memoizedProps;
//     if (Fr(o, r) && e.ref === t.ref)
//       if (((Ie = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
//         e.flags & 131072 && (Ie = !0);
//       else return (t.lanes = e.lanes), Rt(e, t, i);
//   }
//   return Vl(e, t, n, r, i);
// }
// function Cd(e, t, n) {
//   var r = t.pendingProps,
//     i = r.children,
//     o = e !== null ? e.memoizedState : null;
//   if (r.mode === "hidden")
//     if (!(t.mode & 1))
//       (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
//         q(Mn, Be),
//         (Be |= n);
//     else {
//       if (!(n & 1073741824))
//         return (
//           (e = o !== null ? o.baseLanes | n : n),
//           (t.lanes = t.childLanes = 1073741824),
//           (t.memoizedState = {
//             baseLanes: e,
//             cachePool: null,
//             transitions: null,
//           }),
//           (t.updateQueue = null),
//           q(Mn, Be),
//           (Be |= e),
//           null
//         );
//       (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
//         (r = o !== null ? o.baseLanes : n),
//         q(Mn, Be),
//         (Be |= r);
//     }
//   else
//     o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
//       q(Mn, Be),
//       (Be |= r);
//   return Me(e, t, i, n), t.child;
// }
// function Pd(e, t) {
//   var n = t.ref;
//   ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
//     ((t.flags |= 512), (t.flags |= 2097152));
// }
// function Vl(e, t, n, r, i) {
//   var o = Ue(n) ? un : Ne.current;
//   return (
//     (o = Wn(t, o)),
//     Un(t, i),
//     (n = As(e, t, n, r, o, i)),
//     (r = Bs()),
//     e !== null && !Ie
//       ? ((t.updateQueue = e.updateQueue),
//         (t.flags &= -2053),
//         (e.lanes &= ~i),
//         Rt(e, t, i))
//       : (re && r && Ls(t), (t.flags |= 1), Me(e, t, n, i), t.child)
//   );
// }
// function su(e, t, n, r, i) {
//   if (Ue(n)) {
//     var o = !0;
//     Hi(t);
//   } else o = !1;
//   if ((Un(t, i), t.stateNode === null))
//     Ti(e, t), bc(t, n, r), Wl(t, n, r, i), (r = !0);
//   else if (e === null) {
//     var l = t.stateNode,
//       a = t.memoizedProps;
//     l.props = a;
//     var s = l.context,
//       c = n.contextType;
//     typeof c == "object" && c !== null
//       ? (c = Je(c))
//       : ((c = Ue(n) ? un : Ne.current), (c = Wn(t, c)));
//     var d = n.getDerivedStateFromProps,
//       u =
//         typeof d == "function" ||
//         typeof l.getSnapshotBeforeUpdate == "function";
//     u ||
//       (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
//         typeof l.componentWillReceiveProps != "function") ||
//       ((a !== r || s !== c) && qa(t, l, r, c)),
//       (zt = !1);
//     var f = t.memoizedState;
//     (l.state = f),
//       Gi(t, r, l, i),
//       (s = t.memoizedState),
//       a !== r || f !== s || Fe.current || zt
//         ? (typeof d == "function" && ($l(t, n, d, r), (s = t.memoizedState)),
//           (a = zt || Ja(t, n, a, r, f, s, c))
//             ? (u ||
//                 (typeof l.UNSAFE_componentWillMount != "function" &&
//                   typeof l.componentWillMount != "function") ||
//                 (typeof l.componentWillMount == "function" &&
//                   l.componentWillMount(),
//                 typeof l.UNSAFE_componentWillMount == "function" &&
//                   l.UNSAFE_componentWillMount()),
//               typeof l.componentDidMount == "function" && (t.flags |= 4194308))
//             : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
//               (t.memoizedProps = r),
//               (t.memoizedState = s)),
//           (l.props = r),
//           (l.state = s),
//           (l.context = c),
//           (r = a))
//         : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
//           (r = !1));
//   } else {
//     (l = t.stateNode),
//       Jc(e, t),
//       (a = t.memoizedProps),
//       (c = t.type === t.elementType ? a : rt(t.type, a)),
//       (l.props = c),
//       (u = t.pendingProps),
//       (f = l.context),
//       (s = n.contextType),
//       typeof s == "object" && s !== null
//         ? (s = Je(s))
//         : ((s = Ue(n) ? un : Ne.current), (s = Wn(t, s)));
//     var p = n.getDerivedStateFromProps;
//     (d =
//       typeof p == "function" ||
//       typeof l.getSnapshotBeforeUpdate == "function") ||
//       (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
//         typeof l.componentWillReceiveProps != "function") ||
//       ((a !== u || f !== s) && qa(t, l, r, s)),
//       (zt = !1),
//       (f = t.memoizedState),
//       (l.state = f),
//       Gi(t, r, l, i);
//     var g = t.memoizedState;
//     a !== u || f !== g || Fe.current || zt
//       ? (typeof p == "function" && ($l(t, n, p, r), (g = t.memoizedState)),
//         (c = zt || Ja(t, n, c, r, f, g, s) || !1)
//           ? (d ||
//               (typeof l.UNSAFE_componentWillUpdate != "function" &&
//                 typeof l.componentWillUpdate != "function") ||
//               (typeof l.componentWillUpdate == "function" &&
//                 l.componentWillUpdate(r, g, s),
//               typeof l.UNSAFE_componentWillUpdate == "function" &&
//                 l.UNSAFE_componentWillUpdate(r, g, s)),
//             typeof l.componentDidUpdate == "function" && (t.flags |= 4),
//             typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
//           : (typeof l.componentDidUpdate != "function" ||
//               (a === e.memoizedProps && f === e.memoizedState) ||
//               (t.flags |= 4),
//             typeof l.getSnapshotBeforeUpdate != "function" ||
//               (a === e.memoizedProps && f === e.memoizedState) ||
//               (t.flags |= 1024),
//             (t.memoizedProps = r),
//             (t.memoizedState = g)),
//         (l.props = r),
//         (l.state = g),
//         (l.context = s),
//         (r = c))
//       : (typeof l.componentDidUpdate != "function" ||
//           (a === e.memoizedProps && f === e.memoizedState) ||
//           (t.flags |= 4),
//         typeof l.getSnapshotBeforeUpdate != "function" ||
//           (a === e.memoizedProps && f === e.memoizedState) ||
//           (t.flags |= 1024),
//         (r = !1));
//   }
//   return Ql(e, t, n, r, o, i);
// }
// function Ql(e, t, n, r, i, o) {
//   Pd(e, t);
//   var l = (t.flags & 128) !== 0;
//   if (!r && !l) return i && Ka(t, n, !1), Rt(e, t, o);
//   (r = t.stateNode), (Mp.current = t);
//   var a =
//     l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
//   return (
//     (t.flags |= 1),
//     e !== null && l
//       ? ((t.child = Vn(t, e.child, null, o)), (t.child = Vn(t, null, a, o)))
//       : Me(e, t, a, o),
//     (t.memoizedState = r.state),
//     i && Ka(t, n, !0),
//     t.child
//   );
// }
// function Ld(e) {
//   var t = e.stateNode;
//   t.pendingContext
//     ? Qa(e, t.pendingContext, t.pendingContext !== t.context)
//     : t.context && Qa(e, t.context, !1),
//     js(e, t.containerInfo);
// }
// function au(e, t, n, r, i) {
//   return Hn(), Ts(i), (t.flags |= 256), Me(e, t, n, r), t.child;
// }
// var Kl = { dehydrated: null, treeContext: null, retryLane: 0 };
// function Yl(e) {
//   return { baseLanes: e, cachePool: null, transitions: null };
// }
// function Rd(e, t, n) {
//   var r = t.pendingProps,
//     i = oe.current,
//     o = !1,
//     l = (t.flags & 128) !== 0,
//     a;
//   if (
//     ((a = l) ||
//       (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
//     a
//       ? ((o = !0), (t.flags &= -129))
//       : (e === null || e.memoizedState !== null) && (i |= 1),
//     q(oe, i & 1),
//     e === null)
//   )
//     return (
//       Al(t),
//       (e = t.memoizedState),
//       e !== null && ((e = e.dehydrated), e !== null)
//         ? (t.mode & 1
//             ? e.data === "$!"
//               ? (t.lanes = 8)
//               : (t.lanes = 1073741824)
//             : (t.lanes = 1),
//           null)
//         : ((l = r.children),
//           (e = r.fallback),
//           o
//             ? ((r = t.mode),
//               (o = t.child),
//               (l = { mode: "hidden", children: l }),
//               !(r & 1) && o !== null
//                 ? ((o.childLanes = 0), (o.pendingProps = l))
//                 : (o = mo(l, r, 0, null)),
//               (e = an(e, r, n, null)),
//               (o.return = t),
//               (e.return = t),
//               (o.sibling = e),
//               (t.child = o),
//               (t.child.memoizedState = Yl(n)),
//               (t.memoizedState = Kl),
//               e)
//             : Hs(t, l))
//     );
//   if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
//     return Dp(e, t, l, r, a, i, n);
//   if (o) {
//     (o = r.fallback), (l = t.mode), (i = e.child), (a = i.sibling);
//     var s = { mode: "hidden", children: r.children };
//     return (
//       !(l & 1) && t.child !== i
//         ? ((r = t.child),
//           (r.childLanes = 0),
//           (r.pendingProps = s),
//           (t.deletions = null))
//         : ((r = Kt(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
//       a !== null ? (o = Kt(a, o)) : ((o = an(o, l, n, null)), (o.flags |= 2)),
//       (o.return = t),
//       (r.return = t),
//       (r.sibling = o),
//       (t.child = r),
//       (r = o),
//       (o = t.child),
//       (l = e.child.memoizedState),
//       (l =
//         l === null
//           ? Yl(n)
//           : {
//               baseLanes: l.baseLanes | n,
//               cachePool: null,
//               transitions: l.transitions,
//             }),
//       (o.memoizedState = l),
//       (o.childLanes = e.childLanes & ~n),
//       (t.memoizedState = Kl),
//       r
//     );
//   }
//   return (
//     (o = e.child),
//     (e = o.sibling),
//     (r = Kt(o, { mode: "visible", children: r.children })),
//     !(t.mode & 1) && (r.lanes = n),
//     (r.return = t),
//     (r.sibling = null),
//     e !== null &&
//       ((n = t.deletions),
//       n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
//     (t.child = r),
//     (t.memoizedState = null),
//     r
//   );
// }
// function Hs(e, t) {
//   return (
//     (t = mo({ mode: "visible", children: t }, e.mode, 0, null)),
//     (t.return = e),
//     (e.child = t)
//   );
// }
// function yi(e, t, n, r) {
//   return (
//     r !== null && Ts(r),
//     Vn(t, e.child, null, n),
//     (e = Hs(t, t.pendingProps.children)),
//     (e.flags |= 2),
//     (t.memoizedState = null),
//     e
//   );
// }
// function Dp(e, t, n, r, i, o, l) {
//   if (n)
//     return t.flags & 256
//       ? ((t.flags &= -257), (r = el(Error(P(422)))), yi(e, t, l, r))
//       : t.memoizedState !== null
//       ? ((t.child = e.child), (t.flags |= 128), null)
//       : ((o = r.fallback),
//         (i = t.mode),
//         (r = mo({ mode: "visible", children: r.children }, i, 0, null)),
//         (o = an(o, i, l, null)),
//         (o.flags |= 2),
//         (r.return = t),
//         (o.return = t),
//         (r.sibling = o),
//         (t.child = r),
//         t.mode & 1 && Vn(t, e.child, null, l),
//         (t.child.memoizedState = Yl(l)),
//         (t.memoizedState = Kl),
//         o);
//   if (!(t.mode & 1)) return yi(e, t, l, null);
//   if (i.data === "$!") {
//     if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
//     return (r = a), (o = Error(P(419))), (r = el(o, r, void 0)), yi(e, t, l, r);
//   }
//   if (((a = (l & e.childLanes) !== 0), Ie || a)) {
//     if (((r = we), r !== null)) {
//       switch (l & -l) {
//         case 4:
//           i = 2;
//           break;
//         case 16:
//           i = 8;
//           break;
//         case 64:
//         case 128:
//         case 256:
//         case 512:
//         case 1024:
//         case 2048:
//         case 4096:
//         case 8192:
//         case 16384:
//         case 32768:
//         case 65536:
//         case 131072:
//         case 262144:
//         case 524288:
//         case 1048576:
//         case 2097152:
//         case 4194304:
//         case 8388608:
//         case 16777216:
//         case 33554432:
//         case 67108864:
//           i = 32;
//           break;
//         case 536870912:
//           i = 268435456;
//           break;
//         default:
//           i = 0;
//       }
//       (i = i & (r.suspendedLanes | l) ? 0 : i),
//         i !== 0 &&
//           i !== o.retryLane &&
//           ((o.retryLane = i), Lt(e, i), st(r, e, i, -1));
//     }
//     return Xs(), (r = el(Error(P(421)))), yi(e, t, l, r);
//   }
//   return i.data === "$?"
//     ? ((t.flags |= 128),
//       (t.child = e.child),
//       (t = Qp.bind(null, e)),
//       (i._reactRetry = t),
//       null)
//     : ((e = o.treeContext),
//       ($e = Wt(i.nextSibling)),
//       (We = t),
//       (re = !0),
//       (ot = null),
//       e !== null &&
//         ((Ye[Ge++] = _t),
//         (Ye[Ge++] = kt),
//         (Ye[Ge++] = cn),
//         (_t = e.id),
//         (kt = e.overflow),
//         (cn = t)),
//       (t = Hs(t, r.children)),
//       (t.flags |= 4096),
//       t);
// }
// function uu(e, t, n) {
//   e.lanes |= t;
//   var r = e.alternate;
//   r !== null && (r.lanes |= t), Bl(e.return, t, n);
// }
// function tl(e, t, n, r, i) {
//   var o = e.memoizedState;
//   o === null
//     ? (e.memoizedState = {
//         isBackwards: t,
//         rendering: null,
//         renderingStartTime: 0,
//         last: r,
//         tail: n,
//         tailMode: i,
//       })
//     : ((o.isBackwards = t),
//       (o.rendering = null),
//       (o.renderingStartTime = 0),
//       (o.last = r),
//       (o.tail = n),
//       (o.tailMode = i));
// }
// function Td(e, t, n) {
//   var r = t.pendingProps,
//     i = r.revealOrder,
//     o = r.tail;
//   if ((Me(e, t, r.children, n), (r = oe.current), r & 2))
//     (r = (r & 1) | 2), (t.flags |= 128);
//   else {
//     if (e !== null && e.flags & 128)
//       e: for (e = t.child; e !== null; ) {
//         if (e.tag === 13) e.memoizedState !== null && uu(e, n, t);
//         else if (e.tag === 19) uu(e, n, t);
//         else if (e.child !== null) {
//           (e.child.return = e), (e = e.child);
//           continue;
//         }
//         if (e === t) break e;
//         for (; e.sibling === null; ) {
//           if (e.return === null || e.return === t) break e;
//           e = e.return;
//         }
//         (e.sibling.return = e.return), (e = e.sibling);
//       }
//     r &= 1;
//   }
//   if ((q(oe, r), !(t.mode & 1))) t.memoizedState = null;
//   else
//     switch (i) {
//       case "forwards":
//         for (n = t.child, i = null; n !== null; )
//           (e = n.alternate),
//             e !== null && Xi(e) === null && (i = n),
//             (n = n.sibling);
//         (n = i),
//           n === null
//             ? ((i = t.child), (t.child = null))
//             : ((i = n.sibling), (n.sibling = null)),
//           tl(t, !1, i, n, o);
//         break;
//       case "backwards":
//         for (n = null, i = t.child, t.child = null; i !== null; ) {
//           if (((e = i.alternate), e !== null && Xi(e) === null)) {
//             t.child = i;
//             break;
//           }
//           (e = i.sibling), (i.sibling = n), (n = i), (i = e);
//         }
//         tl(t, !0, n, null, o);
//         break;
//       case "together":
//         tl(t, !1, null, null, void 0);
//         break;
//       default:
//         t.memoizedState = null;
//     }
//   return t.child;
// }
// function Ti(e, t) {
//   !(t.mode & 1) &&
//     e !== null &&
//     ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
// }
// function Rt(e, t, n) {
//   if (
//     (e !== null && (t.dependencies = e.dependencies),
//     (fn |= t.lanes),
//     !(n & t.childLanes))
//   )
//     return null;
//   if (e !== null && t.child !== e.child) throw Error(P(153));
//   if (t.child !== null) {
//     for (
//       e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t;
//       e.sibling !== null;

//     )
//       (e = e.sibling), (n = n.sibling = Kt(e, e.pendingProps)), (n.return = t);
//     n.sibling = null;
//   }
//   return t.child;
// }
// function Op(e, t, n) {
//   switch (t.tag) {
//     case 3:
//       Ld(t), Hn();
//       break;
//     case 5:
//       nd(t);
//       break;
//     case 1:
//       Ue(t.type) && Hi(t);
//       break;
//     case 4:
//       js(t, t.stateNode.containerInfo);
//       break;
//     case 10:
//       var r = t.type._context,
//         i = t.memoizedProps.value;
//       q(Ki, r._currentValue), (r._currentValue = i);
//       break;
//     case 13:
//       if (((r = t.memoizedState), r !== null))
//         return r.dehydrated !== null
//           ? (q(oe, oe.current & 1), (t.flags |= 128), null)
//           : n & t.child.childLanes
//           ? Rd(e, t, n)
//           : (q(oe, oe.current & 1),
//             (e = Rt(e, t, n)),
//             e !== null ? e.sibling : null);
//       q(oe, oe.current & 1);
//       break;
//     case 19:
//       if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
//         if (r) return Td(e, t, n);
//         t.flags |= 128;
//       }
//       if (
//         ((i = t.memoizedState),
//         i !== null &&
//           ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
//         q(oe, oe.current),
//         r)
//       )
//         break;
//       return null;
//     case 22:
//     case 23:
//       return (t.lanes = 0), Cd(e, t, n);
//   }
//   return Rt(e, t, n);
// }
// var Nd, Gl, Md, Dd;
// Nd = function (e, t) {
//   for (var n = t.child; n !== null; ) {
//     if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
//     else if (n.tag !== 4 && n.child !== null) {
//       (n.child.return = n), (n = n.child);
//       continue;
//     }
//     if (n === t) break;
//     for (; n.sibling === null; ) {
//       if (n.return === null || n.return === t) return;
//       n = n.return;
//     }
//     (n.sibling.return = n.return), (n = n.sibling);
//   }
// };
// Gl = function () {};
// Md = function (e, t, n, r) {
//   var i = e.memoizedProps;
//   if (i !== r) {
//     (e = t.stateNode), on(pt.current);
//     var o = null;
//     switch (n) {
//       case "input":
//         (i = ml(e, i)), (r = ml(e, r)), (o = []);
//         break;
//       case "select":
//         (i = se({}, i, { value: void 0 })),
//           (r = se({}, r, { value: void 0 })),
//           (o = []);
//         break;
//       case "textarea":
//         (i = wl(e, i)), (r = wl(e, r)), (o = []);
//         break;
//       default:
//         typeof i.onClick != "function" &&
//           typeof r.onClick == "function" &&
//           (e.onclick = $i);
//     }
//     _l(n, r);
//     var l;
//     n = null;
//     for (c in i)
//       if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
//         if (c === "style") {
//           var a = i[c];
//           for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
//         } else
//           c !== "dangerouslySetInnerHTML" &&
//             c !== "children" &&
//             c !== "suppressContentEditableWarning" &&
//             c !== "suppressHydrationWarning" &&
//             c !== "autoFocus" &&
//             (Nr.hasOwnProperty(c)
//               ? o || (o = [])
//               : (o = o || []).push(c, null));
//     for (c in r) {
//       var s = r[c];
//       if (
//         ((a = i != null ? i[c] : void 0),
//         r.hasOwnProperty(c) && s !== a && (s != null || a != null))
//       )
//         if (c === "style")
//           if (a) {
//             for (l in a)
//               !a.hasOwnProperty(l) ||
//                 (s && s.hasOwnProperty(l)) ||
//                 (n || (n = {}), (n[l] = ""));
//             for (l in s)
//               s.hasOwnProperty(l) &&
//                 a[l] !== s[l] &&
//                 (n || (n = {}), (n[l] = s[l]));
//           } else n || (o || (o = []), o.push(c, n)), (n = s);
//         else
//           c === "dangerouslySetInnerHTML"
//             ? ((s = s ? s.__html : void 0),
//               (a = a ? a.__html : void 0),
//               s != null && a !== s && (o = o || []).push(c, s))
//             : c === "children"
//             ? (typeof s != "string" && typeof s != "number") ||
//               (o = o || []).push(c, "" + s)
//             : c !== "suppressContentEditableWarning" &&
//               c !== "suppressHydrationWarning" &&
//               (Nr.hasOwnProperty(c)
//                 ? (s != null && c === "onScroll" && ee("scroll", e),
//                   o || a === s || (o = []))
//                 : (o = o || []).push(c, s));
//     }
//     n && (o = o || []).push("style", n);
//     var c = o;
//     (t.updateQueue = c) && (t.flags |= 4);
//   }
// };
// Dd = function (e, t, n, r) {
//   n !== r && (t.flags |= 4);
// };
// function dr(e, t) {
//   if (!re)
//     switch (e.tailMode) {
//       case "hidden":
//         t = e.tail;
//         for (var n = null; t !== null; )
//           t.alternate !== null && (n = t), (t = t.sibling);
//         n === null ? (e.tail = null) : (n.sibling = null);
//         break;
//       case "collapsed":
//         n = e.tail;
//         for (var r = null; n !== null; )
//           n.alternate !== null && (r = n), (n = n.sibling);
//         r === null
//           ? t || e.tail === null
//             ? (e.tail = null)
//             : (e.tail.sibling = null)
//           : (r.sibling = null);
//     }
// }
// function Re(e) {
//   var t = e.alternate !== null && e.alternate.child === e.child,
//     n = 0,
//     r = 0;
//   if (t)
//     for (var i = e.child; i !== null; )
//       (n |= i.lanes | i.childLanes),
//         (r |= i.subtreeFlags & 14680064),
//         (r |= i.flags & 14680064),
//         (i.return = e),
//         (i = i.sibling);
//   else
//     for (i = e.child; i !== null; )
//       (n |= i.lanes | i.childLanes),
//         (r |= i.subtreeFlags),
//         (r |= i.flags),
//         (i.return = e),
//         (i = i.sibling);
//   return (e.subtreeFlags |= r), (e.childLanes = n), t;
// }
// function zp(e, t, n) {
//   var r = t.pendingProps;
//   switch ((Rs(t), t.tag)) {
//     case 2:
//     case 16:
//     case 15:
//     case 0:
//     case 11:
//     case 7:
//     case 8:
//     case 12:
//     case 9:
//     case 14:
//       return Re(t), null;
//     case 1:
//       return Ue(t.type) && Wi(), Re(t), null;
//     case 3:
//       return (
//         (r = t.stateNode),
//         Qn(),
//         te(Fe),
//         te(Ne),
//         Fs(),
//         r.pendingContext &&
//           ((r.context = r.pendingContext), (r.pendingContext = null)),
//         (e === null || e.child === null) &&
//           (vi(t)
//             ? (t.flags |= 4)
//             : e === null ||
//               (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
//               ((t.flags |= 1024), ot !== null && (ns(ot), (ot = null)))),
//         Gl(e, t),
//         Re(t),
//         null
//       );
//     case 5:
//       Is(t);
//       var i = on(Wr.current);
//       if (((n = t.type), e !== null && t.stateNode != null))
//         Md(e, t, n, r, i),
//           e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
//       else {
//         if (!r) {
//           if (t.stateNode === null) throw Error(P(166));
//           return Re(t), null;
//         }
//         if (((e = on(pt.current)), vi(t))) {
//           (r = t.stateNode), (n = t.type);
//           var o = t.memoizedProps;
//           switch (((r[ft] = t), (r[Br] = o), (e = (t.mode & 1) !== 0), n)) {
//             case "dialog":
//               ee("cancel", r), ee("close", r);
//               break;
//             case "iframe":
//             case "object":
//             case "embed":
//               ee("load", r);
//               break;
//             case "video":
//             case "audio":
//               for (i = 0; i < gr.length; i++) ee(gr[i], r);
//               break;
//             case "source":
//               ee("error", r);
//               break;
//             case "img":
//             case "image":
//             case "link":
//               ee("error", r), ee("load", r);
//               break;
//             case "details":
//               ee("toggle", r);
//               break;
//             case "input":
//               ga(r, o), ee("invalid", r);
//               break;
//             case "select":
//               (r._wrapperState = { wasMultiple: !!o.multiple }),
//                 ee("invalid", r);
//               break;
//             case "textarea":
//               Sa(r, o), ee("invalid", r);
//           }
//           _l(n, o), (i = null);
//           for (var l in o)
//             if (o.hasOwnProperty(l)) {
//               var a = o[l];
//               l === "children"
//                 ? typeof a == "string"
//                   ? r.textContent !== a &&
//                     (o.suppressHydrationWarning !== !0 &&
//                       pi(r.textContent, a, e),
//                     (i = ["children", a]))
//                   : typeof a == "number" &&
//                     r.textContent !== "" + a &&
//                     (o.suppressHydrationWarning !== !0 &&
//                       pi(r.textContent, a, e),
//                     (i = ["children", "" + a]))
//                 : Nr.hasOwnProperty(l) &&
//                   a != null &&
//                   l === "onScroll" &&
//                   ee("scroll", r);
//             }
//           switch (n) {
//             case "input":
//               li(r), wa(r, o, !0);
//               break;
//             case "textarea":
//               li(r), _a(r);
//               break;
//             case "select":
//             case "option":
//               break;
//             default:
//               typeof o.onClick == "function" && (r.onclick = $i);
//           }
//           (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
//         } else {
//           (l = i.nodeType === 9 ? i : i.ownerDocument),
//             e === "http://www.w3.org/1999/xhtml" && (e = oc(n)),
//             e === "http://www.w3.org/1999/xhtml"
//               ? n === "script"
//                 ? ((e = l.createElement("div")),
//                   (e.innerHTML = "<script></script>"),
//                   (e = e.removeChild(e.firstChild)))
//                 : typeof r.is == "string"
//                 ? (e = l.createElement(n, { is: r.is }))
//                 : ((e = l.createElement(n)),
//                   n === "select" &&
//                     ((l = e),
//                     r.multiple
//                       ? (l.multiple = !0)
//                       : r.size && (l.size = r.size)))
//               : (e = l.createElementNS(e, n)),
//             (e[ft] = t),
//             (e[Br] = r),
//             Nd(e, t, !1, !1),
//             (t.stateNode = e);
//           e: {
//             switch (((l = kl(n, r)), n)) {
//               case "dialog":
//                 ee("cancel", e), ee("close", e), (i = r);
//                 break;
//               case "iframe":
//               case "object":
//               case "embed":
//                 ee("load", e), (i = r);
//                 break;
//               case "video":
//               case "audio":
//                 for (i = 0; i < gr.length; i++) ee(gr[i], e);
//                 i = r;
//                 break;
//               case "source":
//                 ee("error", e), (i = r);
//                 break;
//               case "img":
//               case "image":
//               case "link":
//                 ee("error", e), ee("load", e), (i = r);
//                 break;
//               case "details":
//                 ee("toggle", e), (i = r);
//                 break;
//               case "input":
//                 ga(e, r), (i = ml(e, r)), ee("invalid", e);
//                 break;
//               case "option":
//                 i = r;
//                 break;
//               case "select":
//                 (e._wrapperState = { wasMultiple: !!r.multiple }),
//                   (i = se({}, r, { value: void 0 })),
//                   ee("invalid", e);
//                 break;
//               case "textarea":
//                 Sa(e, r), (i = wl(e, r)), ee("invalid", e);
//                 break;
//               default:
//                 i = r;
//             }
//             _l(n, i), (a = i);
//             for (o in a)
//               if (a.hasOwnProperty(o)) {
//                 var s = a[o];
//                 o === "style"
//                   ? ac(e, s)
//                   : o === "dangerouslySetInnerHTML"
//                   ? ((s = s ? s.__html : void 0), s != null && lc(e, s))
//                   : o === "children"
//                   ? typeof s == "string"
//                     ? (n !== "textarea" || s !== "") && Mr(e, s)
//                     : typeof s == "number" && Mr(e, "" + s)
//                   : o !== "suppressContentEditableWarning" &&
//                     o !== "suppressHydrationWarning" &&
//                     o !== "autoFocus" &&
//                     (Nr.hasOwnProperty(o)
//                       ? s != null && o === "onScroll" && ee("scroll", e)
//                       : s != null && hs(e, o, s, l));
//               }
//             switch (n) {
//               case "input":
//                 li(e), wa(e, r, !1);
//                 break;
//               case "textarea":
//                 li(e), _a(e);
//                 break;
//               case "option":
//                 r.value != null && e.setAttribute("value", "" + Yt(r.value));
//                 break;
//               case "select":
//                 (e.multiple = !!r.multiple),
//                   (o = r.value),
//                   o != null
//                     ? zn(e, !!r.multiple, o, !1)
//                     : r.defaultValue != null &&
//                       zn(e, !!r.multiple, r.defaultValue, !0);
//                 break;
//               default:
//                 typeof i.onClick == "function" && (e.onclick = $i);
//             }
//             switch (n) {
//               case "button":
//               case "input":
//               case "select":
//               case "textarea":
//                 r = !!r.autoFocus;
//                 break e;
//               case "img":
//                 r = !0;
//                 break e;
//               default:
//                 r = !1;
//             }
//           }
//           r && (t.flags |= 4);
//         }
//         t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
//       }
//       return Re(t), null;
//     case 6:
//       if (e && t.stateNode != null) Dd(e, t, e.memoizedProps, r);
//       else {
//         if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
//         if (((n = on(Wr.current)), on(pt.current), vi(t))) {
//           if (
//             ((r = t.stateNode),
//             (n = t.memoizedProps),
//             (r[ft] = t),
//             (o = r.nodeValue !== n) && ((e = We), e !== null))
//           )
//             switch (e.tag) {
//               case 3:
//                 pi(r.nodeValue, n, (e.mode & 1) !== 0);
//                 break;
//               case 5:
//                 e.memoizedProps.suppressHydrationWarning !== !0 &&
//                   pi(r.nodeValue, n, (e.mode & 1) !== 0);
//             }
//           o && (t.flags |= 4);
//         } else
//           (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
//             (r[ft] = t),
//             (t.stateNode = r);
//       }
//       return Re(t), null;
//     case 13:
//       if (
//         (te(oe),
//         (r = t.memoizedState),
//         e === null ||
//           (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
//       ) {
//         if (re && $e !== null && t.mode & 1 && !(t.flags & 128))
//           Xc(), Hn(), (t.flags |= 98560), (o = !1);
//         else if (((o = vi(t)), r !== null && r.dehydrated !== null)) {
//           if (e === null) {
//             if (!o) throw Error(P(318));
//             if (
//               ((o = t.memoizedState),
//               (o = o !== null ? o.dehydrated : null),
//               !o)
//             )
//               throw Error(P(317));
//             o[ft] = t;
//           } else
//             Hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
//           Re(t), (o = !1);
//         } else ot !== null && (ns(ot), (ot = null)), (o = !0);
//         if (!o) return t.flags & 65536 ? t : null;
//       }
//       return t.flags & 128
//         ? ((t.lanes = n), t)
//         : ((r = r !== null),
//           r !== (e !== null && e.memoizedState !== null) &&
//             r &&
//             ((t.child.flags |= 8192),
//             t.mode & 1 &&
//               (e === null || oe.current & 1 ? me === 0 && (me = 3) : Xs())),
//           t.updateQueue !== null && (t.flags |= 4),
//           Re(t),
//           null);
//     case 4:
//       return (
//         Qn(), Gl(e, t), e === null && Ur(t.stateNode.containerInfo), Re(t), null
//       );
//     case 10:
//       return Ds(t.type._context), Re(t), null;
//     case 17:
//       return Ue(t.type) && Wi(), Re(t), null;
//     case 19:
//       if ((te(oe), (o = t.memoizedState), o === null)) return Re(t), null;
//       if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
//         if (r) dr(o, !1);
//         else {
//           if (me !== 0 || (e !== null && e.flags & 128))
//             for (e = t.child; e !== null; ) {
//               if (((l = Xi(e)), l !== null)) {
//                 for (
//                   t.flags |= 128,
//                     dr(o, !1),
//                     r = l.updateQueue,
//                     r !== null && ((t.updateQueue = r), (t.flags |= 4)),
//                     t.subtreeFlags = 0,
//                     r = n,
//                     n = t.child;
//                   n !== null;

//                 )
//                   (o = n),
//                     (e = r),
//                     (o.flags &= 14680066),
//                     (l = o.alternate),
//                     l === null
//                       ? ((o.childLanes = 0),
//                         (o.lanes = e),
//                         (o.child = null),
//                         (o.subtreeFlags = 0),
//                         (o.memoizedProps = null),
//                         (o.memoizedState = null),
//                         (o.updateQueue = null),
//                         (o.dependencies = null),
//                         (o.stateNode = null))
//                       : ((o.childLanes = l.childLanes),
//                         (o.lanes = l.lanes),
//                         (o.child = l.child),
//                         (o.subtreeFlags = 0),
//                         (o.deletions = null),
//                         (o.memoizedProps = l.memoizedProps),
//                         (o.memoizedState = l.memoizedState),
//                         (o.updateQueue = l.updateQueue),
//                         (o.type = l.type),
//                         (e = l.dependencies),
//                         (o.dependencies =
//                           e === null
//                             ? null
//                             : {
//                                 lanes: e.lanes,
//                                 firstContext: e.firstContext,
//                               })),
//                     (n = n.sibling);
//                 return q(oe, (oe.current & 1) | 2), t.child;
//               }
//               e = e.sibling;
//             }
//           o.tail !== null &&
//             ce() > Yn &&
//             ((t.flags |= 128), (r = !0), dr(o, !1), (t.lanes = 4194304));
//         }
//       else {
//         if (!r)
//           if (((e = Xi(l)), e !== null)) {
//             if (
//               ((t.flags |= 128),
//               (r = !0),
//               (n = e.updateQueue),
//               n !== null && ((t.updateQueue = n), (t.flags |= 4)),
//               dr(o, !0),
//               o.tail === null && o.tailMode === "hidden" && !l.alternate && !re)
//             )
//               return Re(t), null;
//           } else
//             2 * ce() - o.renderingStartTime > Yn &&
//               n !== 1073741824 &&
//               ((t.flags |= 128), (r = !0), dr(o, !1), (t.lanes = 4194304));
//         o.isBackwards
//           ? ((l.sibling = t.child), (t.child = l))
//           : ((n = o.last),
//             n !== null ? (n.sibling = l) : (t.child = l),
//             (o.last = l));
//       }
//       return o.tail !== null
//         ? ((t = o.tail),
//           (o.rendering = t),
//           (o.tail = t.sibling),
//           (o.renderingStartTime = ce()),
//           (t.sibling = null),
//           (n = oe.current),
//           q(oe, r ? (n & 1) | 2 : n & 1),
//           t)
//         : (Re(t), null);
//     case 22:
//     case 23:
//       return (
//         Gs(),
//         (r = t.memoizedState !== null),
//         e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
//         r && t.mode & 1
//           ? Be & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
//           : Re(t),
//         null
//       );
//     case 24:
//       return null;
//     case 25:
//       return null;
//   }
//   throw Error(P(156, t.tag));
// }
// function jp(e, t) {
//   switch ((Rs(t), t.tag)) {
//     case 1:
//       return (
//         Ue(t.type) && Wi(),
//         (e = t.flags),
//         e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
//       );
//     case 3:
//       return (
//         Qn(),
//         te(Fe),
//         te(Ne),
//         Fs(),
//         (e = t.flags),
//         e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
//       );
//     case 5:
//       return Is(t), null;
//     case 13:
//       if (
//         (te(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
//       ) {
//         if (t.alternate === null) throw Error(P(340));
//         Hn();
//       }
//       return (
//         (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
//       );
//     case 19:
//       return te(oe), null;
//     case 4:
//       return Qn(), null;
//     case 10:
//       return Ds(t.type._context), null;
//     case 22:
//     case 23:
//       return Gs(), null;
//     case 24:
//       return null;
//     default:
//       return null;
//   }
// }
// var gi = !1,
//   Te = !1,
//   Ip = typeof WeakSet == "function" ? WeakSet : Set,
//   z = null;
// function Nn(e, t) {
//   var n = e.ref;
//   if (n !== null)
//     if (typeof n == "function")
//       try {
//         n(null);
//       } catch (r) {
//         ae(e, t, r);
//       }
//     else n.current = null;
// }
// function Xl(e, t, n) {
//   try {
//     n();
//   } catch (r) {
//     ae(e, t, r);
//   }
// }
// var cu = !1;
// function Fp(e, t) {
//   if (((Dl = Ui), (e = Ic()), Ps(e))) {
//     if ("selectionStart" in e)
//       var n = { start: e.selectionStart, end: e.selectionEnd };
//     else
//       e: {
//         n = ((n = e.ownerDocument) && n.defaultView) || window;
//         var r = n.getSelection && n.getSelection();
//         if (r && r.rangeCount !== 0) {
//           n = r.anchorNode;
//           var i = r.anchorOffset,
//             o = r.focusNode;
//           r = r.focusOffset;
//           try {
//             n.nodeType, o.nodeType;
//           } catch {
//             n = null;
//             break e;
//           }
//           var l = 0,
//             a = -1,
//             s = -1,
//             c = 0,
//             d = 0,
//             u = e,
//             f = null;
//           t: for (;;) {
//             for (
//               var p;
//               u !== n || (i !== 0 && u.nodeType !== 3) || (a = l + i),
//                 u !== o || (r !== 0 && u.nodeType !== 3) || (s = l + r),
//                 u.nodeType === 3 && (l += u.nodeValue.length),
//                 (p = u.firstChild) !== null;

//             )
//               (f = u), (u = p);
//             for (;;) {
//               if (u === e) break t;
//               if (
//                 (f === n && ++c === i && (a = l),
//                 f === o && ++d === r && (s = l),
//                 (p = u.nextSibling) !== null)
//               )
//                 break;
//               (u = f), (f = u.parentNode);
//             }
//             u = p;
//           }
//           n = a === -1 || s === -1 ? null : { start: a, end: s };
//         } else n = null;
//       }
//     n = n || { start: 0, end: 0 };
//   } else n = null;
//   for (Ol = { focusedElem: e, selectionRange: n }, Ui = !1, z = t; z !== null; )
//     if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
//       (e.return = t), (z = e);
//     else
//       for (; z !== null; ) {
//         t = z;
//         try {
//           var g = t.alternate;
//           if (t.flags & 1024)
//             switch (t.tag) {
//               case 0:
//               case 11:
//               case 15:
//                 break;
//               case 1:
//                 if (g !== null) {
//                   var S = g.memoizedProps,
//                     y = g.memoizedState,
//                     v = t.stateNode,
//                     h = v.getSnapshotBeforeUpdate(
//                       t.elementType === t.type ? S : rt(t.type, S),
//                       y
//                     );
//                   v.__reactInternalSnapshotBeforeUpdate = h;
//                 }
//                 break;
//               case 3:
//                 var m = t.stateNode.containerInfo;
//                 m.nodeType === 1
//                   ? (m.textContent = "")
//                   : m.nodeType === 9 &&
//                     m.documentElement &&
//                     m.removeChild(m.documentElement);
//                 break;
//               case 5:
//               case 6:
//               case 4:
//               case 17:
//                 break;
//               default:
//                 throw Error(P(163));
//             }
//         } catch (_) {
//           ae(t, t.return, _);
//         }
//         if (((e = t.sibling), e !== null)) {
//           (e.return = t.return), (z = e);
//           break;
//         }
//         z = t.return;
//       }
//   return (g = cu), (cu = !1), g;
// }
// function Cr(e, t, n) {
//   var r = t.updateQueue;
//   if (((r = r !== null ? r.lastEffect : null), r !== null)) {
//     var i = (r = r.next);
//     do {
//       if ((i.tag & e) === e) {
//         var o = i.destroy;
//         (i.destroy = void 0), o !== void 0 && Xl(t, n, o);
//       }
//       i = i.next;
//     } while (i !== r);
//   }
// }
// function po(e, t) {
//   if (
//     ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
//   ) {
//     var n = (t = t.next);
//     do {
//       if ((n.tag & e) === e) {
//         var r = n.create;
//         n.destroy = r();
//       }
//       n = n.next;
//     } while (n !== t);
//   }
// }
// function Zl(e) {
//   var t = e.ref;
//   if (t !== null) {
//     var n = e.stateNode;
//     switch (e.tag) {
//       case 5:
//         e = n;
//         break;
//       default:
//         e = n;
//     }
//     typeof t == "function" ? t(e) : (t.current = e);
//   }
// }
// function Od(e) {
//   var t = e.alternate;
//   t !== null && ((e.alternate = null), Od(t)),
//     (e.child = null),
//     (e.deletions = null),
//     (e.sibling = null),
//     e.tag === 5 &&
//       ((t = e.stateNode),
//       t !== null &&
//         (delete t[ft], delete t[Br], delete t[Il], delete t[wp], delete t[Sp])),
//     (e.stateNode = null),
//     (e.return = null),
//     (e.dependencies = null),
//     (e.memoizedProps = null),
//     (e.memoizedState = null),
//     (e.pendingProps = null),
//     (e.stateNode = null),
//     (e.updateQueue = null);
// }
// function zd(e) {
//   return e.tag === 5 || e.tag === 3 || e.tag === 4;
// }
// function du(e) {
//   e: for (;;) {
//     for (; e.sibling === null; ) {
//       if (e.return === null || zd(e.return)) return null;
//       e = e.return;
//     }
//     for (
//       e.sibling.return = e.return, e = e.sibling;
//       e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

//     ) {
//       if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
//       (e.child.return = e), (e = e.child);
//     }
//     if (!(e.flags & 2)) return e.stateNode;
//   }
// }
// function Jl(e, t, n) {
//   var r = e.tag;
//   if (r === 5 || r === 6)
//     (e = e.stateNode),
//       t
//         ? n.nodeType === 8
//           ? n.parentNode.insertBefore(e, t)
//           : n.insertBefore(e, t)
//         : (n.nodeType === 8
//             ? ((t = n.parentNode), t.insertBefore(e, n))
//             : ((t = n), t.appendChild(e)),
//           (n = n._reactRootContainer),
//           n != null || t.onclick !== null || (t.onclick = $i));
//   else if (r !== 4 && ((e = e.child), e !== null))
//     for (Jl(e, t, n), e = e.sibling; e !== null; ) Jl(e, t, n), (e = e.sibling);
// }
// function ql(e, t, n) {
//   var r = e.tag;
//   if (r === 5 || r === 6)
//     (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
//   else if (r !== 4 && ((e = e.child), e !== null))
//     for (ql(e, t, n), e = e.sibling; e !== null; ) ql(e, t, n), (e = e.sibling);
// }
// var _e = null,
//   it = !1;
// function Dt(e, t, n) {
//   for (n = n.child; n !== null; ) jd(e, t, n), (n = n.sibling);
// }
// function jd(e, t, n) {
//   if (ht && typeof ht.onCommitFiberUnmount == "function")
//     try {
//       ht.onCommitFiberUnmount(oo, n);
//     } catch {}
//   switch (n.tag) {
//     case 5:
//       Te || Nn(n, t);
//     case 6:
//       var r = _e,
//         i = it;
//       (_e = null),
//         Dt(e, t, n),
//         (_e = r),
//         (it = i),
//         _e !== null &&
//           (it
//             ? ((e = _e),
//               (n = n.stateNode),
//               e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
//             : _e.removeChild(n.stateNode));
//       break;
//     case 18:
//       _e !== null &&
//         (it
//           ? ((e = _e),
//             (n = n.stateNode),
//             e.nodeType === 8
//               ? Go(e.parentNode, n)
//               : e.nodeType === 1 && Go(e, n),
//             jr(e))
//           : Go(_e, n.stateNode));
//       break;
//     case 4:
//       (r = _e),
//         (i = it),
//         (_e = n.stateNode.containerInfo),
//         (it = !0),
//         Dt(e, t, n),
//         (_e = r),
//         (it = i);
//       break;
//     case 0:
//     case 11:
//     case 14:
//     case 15:
//       if (
//         !Te &&
//         ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
//       ) {
//         i = r = r.next;
//         do {
//           var o = i,
//             l = o.destroy;
//           (o = o.tag),
//             l !== void 0 && (o & 2 || o & 4) && Xl(n, t, l),
//             (i = i.next);
//         } while (i !== r);
//       }
//       Dt(e, t, n);
//       break;
//     case 1:
//       if (
//         !Te &&
//         (Nn(n, t),
//         (r = n.stateNode),
//         typeof r.componentWillUnmount == "function")
//       )
//         try {
//           (r.props = n.memoizedProps),
//             (r.state = n.memoizedState),
//             r.componentWillUnmount();
//         } catch (a) {
//           ae(n, t, a);
//         }
//       Dt(e, t, n);
//       break;
//     case 21:
//       Dt(e, t, n);
//       break;
//     case 22:
//       n.mode & 1
//         ? ((Te = (r = Te) || n.memoizedState !== null), Dt(e, t, n), (Te = r))
//         : Dt(e, t, n);
//       break;
//     default:
//       Dt(e, t, n);
//   }
// }
// function fu(e) {
//   var t = e.updateQueue;
//   if (t !== null) {
//     e.updateQueue = null;
//     var n = e.stateNode;
//     n === null && (n = e.stateNode = new Ip()),
//       t.forEach(function (r) {
//         var i = Kp.bind(null, e, r);
//         n.has(r) || (n.add(r), r.then(i, i));
//       });
//   }
// }
// function nt(e, t) {
//   var n = t.deletions;
//   if (n !== null)
//     for (var r = 0; r < n.length; r++) {
//       var i = n[r];
//       try {
//         var o = e,
//           l = t,
//           a = l;
//         e: for (; a !== null; ) {
//           switch (a.tag) {
//             case 5:
//               (_e = a.stateNode), (it = !1);
//               break e;
//             case 3:
//               (_e = a.stateNode.containerInfo), (it = !0);
//               break e;
//             case 4:
//               (_e = a.stateNode.containerInfo), (it = !0);
//               break e;
//           }
//           a = a.return;
//         }
//         if (_e === null) throw Error(P(160));
//         jd(o, l, i), (_e = null), (it = !1);
//         var s = i.alternate;
//         s !== null && (s.return = null), (i.return = null);
//       } catch (c) {
//         ae(i, t, c);
//       }
//     }
//   if (t.subtreeFlags & 12854)
//     for (t = t.child; t !== null; ) Id(t, e), (t = t.sibling);
// }
// function Id(e, t) {
//   var n = e.alternate,
//     r = e.flags;
//   switch (e.tag) {
//     case 0:
//     case 11:
//     case 14:
//     case 15:
//       if ((nt(t, e), ut(e), r & 4)) {
//         try {
//           Cr(3, e, e.return), po(3, e);
//         } catch (S) {
//           ae(e, e.return, S);
//         }
//         try {
//           Cr(5, e, e.return);
//         } catch (S) {
//           ae(e, e.return, S);
//         }
//       }
//       break;
//     case 1:
//       nt(t, e), ut(e), r & 512 && n !== null && Nn(n, n.return);
//       break;
//     case 5:
//       if (
//         (nt(t, e),
//         ut(e),
//         r & 512 && n !== null && Nn(n, n.return),
//         e.flags & 32)
//       ) {
//         var i = e.stateNode;
//         try {
//           Mr(i, "");
//         } catch (S) {
//           ae(e, e.return, S);
//         }
//       }
//       if (r & 4 && ((i = e.stateNode), i != null)) {
//         var o = e.memoizedProps,
//           l = n !== null ? n.memoizedProps : o,
//           a = e.type,
//           s = e.updateQueue;
//         if (((e.updateQueue = null), s !== null))
//           try {
//             a === "input" && o.type === "radio" && o.name != null && rc(i, o),
//               kl(a, l);
//             var c = kl(a, o);
//             for (l = 0; l < s.length; l += 2) {
//               var d = s[l],
//                 u = s[l + 1];
//               d === "style"
//                 ? ac(i, u)
//                 : d === "dangerouslySetInnerHTML"
//                 ? lc(i, u)
//                 : d === "children"
//                 ? Mr(i, u)
//                 : hs(i, d, u, c);
//             }
//             switch (a) {
//               case "input":
//                 yl(i, o);
//                 break;
//               case "textarea":
//                 ic(i, o);
//                 break;
//               case "select":
//                 var f = i._wrapperState.wasMultiple;
//                 i._wrapperState.wasMultiple = !!o.multiple;
//                 var p = o.value;
//                 p != null
//                   ? zn(i, !!o.multiple, p, !1)
//                   : f !== !!o.multiple &&
//                     (o.defaultValue != null
//                       ? zn(i, !!o.multiple, o.defaultValue, !0)
//                       : zn(i, !!o.multiple, o.multiple ? [] : "", !1));
//             }
//             i[Br] = o;
//           } catch (S) {
//             ae(e, e.return, S);
//           }
//       }
//       break;
//     case 6:
//       if ((nt(t, e), ut(e), r & 4)) {
//         if (e.stateNode === null) throw Error(P(162));
//         (i = e.stateNode), (o = e.memoizedProps);
//         try {
//           i.nodeValue = o;
//         } catch (S) {
//           ae(e, e.return, S);
//         }
//       }
//       break;
//     case 3:
//       if (
//         (nt(t, e), ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
//       )
//         try {
//           jr(t.containerInfo);
//         } catch (S) {
//           ae(e, e.return, S);
//         }
//       break;
//     case 4:
//       nt(t, e), ut(e);
//       break;
//     case 13:
//       nt(t, e),
//         ut(e),
//         (i = e.child),
//         i.flags & 8192 &&
//           ((o = i.memoizedState !== null),
//           (i.stateNode.isHidden = o),
//           !o ||
//             (i.alternate !== null && i.alternate.memoizedState !== null) ||
//             (Ks = ce())),
//         r & 4 && fu(e);
//       break;
//     case 22:
//       if (
//         ((d = n !== null && n.memoizedState !== null),
//         e.mode & 1 ? ((Te = (c = Te) || d), nt(t, e), (Te = c)) : nt(t, e),
//         ut(e),
//         r & 8192)
//       ) {
//         if (
//           ((c = e.memoizedState !== null),
//           (e.stateNode.isHidden = c) && !d && e.mode & 1)
//         )
//           for (z = e, d = e.child; d !== null; ) {
//             for (u = z = d; z !== null; ) {
//               switch (((f = z), (p = f.child), f.tag)) {
//                 case 0:
//                 case 11:
//                 case 14:
//                 case 15:
//                   Cr(4, f, f.return);
//                   break;
//                 case 1:
//                   Nn(f, f.return);
//                   var g = f.stateNode;
//                   if (typeof g.componentWillUnmount == "function") {
//                     (r = f), (n = f.return);
//                     try {
//                       (t = r),
//                         (g.props = t.memoizedProps),
//                         (g.state = t.memoizedState),
//                         g.componentWillUnmount();
//                     } catch (S) {
//                       ae(r, n, S);
//                     }
//                   }
//                   break;
//                 case 5:
//                   Nn(f, f.return);
//                   break;
//                 case 22:
//                   if (f.memoizedState !== null) {
//                     pu(u);
//                     continue;
//                   }
//               }
//               p !== null ? ((p.return = f), (z = p)) : pu(u);
//             }
//             d = d.sibling;
//           }
//         e: for (d = null, u = e; ; ) {
//           if (u.tag === 5) {
//             if (d === null) {
//               d = u;
//               try {
//                 (i = u.stateNode),
//                   c
//                     ? ((o = i.style),
//                       typeof o.setProperty == "function"
//                         ? o.setProperty("display", "none", "important")
//                         : (o.display = "none"))
//                     : ((a = u.stateNode),
//                       (s = u.memoizedProps.style),
//                       (l =
//                         s != null && s.hasOwnProperty("display")
//                           ? s.display
//                           : null),
//                       (a.style.display = sc("display", l)));
//               } catch (S) {
//                 ae(e, e.return, S);
//               }
//             }
//           } else if (u.tag === 6) {
//             if (d === null)
//               try {
//                 u.stateNode.nodeValue = c ? "" : u.memoizedProps;
//               } catch (S) {
//                 ae(e, e.return, S);
//               }
//           } else if (
//             ((u.tag !== 22 && u.tag !== 23) ||
//               u.memoizedState === null ||
//               u === e) &&
//             u.child !== null
//           ) {
//             (u.child.return = u), (u = u.child);
//             continue;
//           }
//           if (u === e) break e;
//           for (; u.sibling === null; ) {
//             if (u.return === null || u.return === e) break e;
//             d === u && (d = null), (u = u.return);
//           }
//           d === u && (d = null), (u.sibling.return = u.return), (u = u.sibling);
//         }
//       }
//       break;
//     case 19:
//       nt(t, e), ut(e), r & 4 && fu(e);
//       break;
//     case 21:
//       break;
//     default:
//       nt(t, e), ut(e);
//   }
// }
// function ut(e) {
//   var t = e.flags;
//   if (t & 2) {
//     try {
//       e: {
//         for (var n = e.return; n !== null; ) {
//           if (zd(n)) {
//             var r = n;
//             break e;
//           }
//           n = n.return;
//         }
//         throw Error(P(160));
//       }
//       switch (r.tag) {
//         case 5:
//           var i = r.stateNode;
//           r.flags & 32 && (Mr(i, ""), (r.flags &= -33));
//           var o = du(e);
//           ql(e, o, i);
//           break;
//         case 3:
//         case 4:
//           var l = r.stateNode.containerInfo,
//             a = du(e);
//           Jl(e, a, l);
//           break;
//         default:
//           throw Error(P(161));
//       }
//     } catch (s) {
//       ae(e, e.return, s);
//     }
//     e.flags &= -3;
//   }
//   t & 4096 && (e.flags &= -4097);
// }
// function Up(e, t, n) {
//   (z = e), Fd(e);
// }
// function Fd(e, t, n) {
//   for (var r = (e.mode & 1) !== 0; z !== null; ) {
//     var i = z,
//       o = i.child;
//     if (i.tag === 22 && r) {
//       var l = i.memoizedState !== null || gi;
//       if (!l) {
//         var a = i.alternate,
//           s = (a !== null && a.memoizedState !== null) || Te;
//         a = gi;
//         var c = Te;
//         if (((gi = l), (Te = s) && !c))
//           for (z = i; z !== null; )
//             (l = z),
//               (s = l.child),
//               l.tag === 22 && l.memoizedState !== null
//                 ? vu(i)
//                 : s !== null
//                 ? ((s.return = l), (z = s))
//                 : vu(i);
//         for (; o !== null; ) (z = o), Fd(o), (o = o.sibling);
//         (z = i), (gi = a), (Te = c);
//       }
//       hu(e);
//     } else
//       i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (z = o)) : hu(e);
//   }
// }
// function hu(e) {
//   for (; z !== null; ) {
//     var t = z;
//     if (t.flags & 8772) {
//       var n = t.alternate;
//       try {
//         if (t.flags & 8772)
//           switch (t.tag) {
//             case 0:
//             case 11:
//             case 15:
//               Te || po(5, t);
//               break;
//             case 1:
//               var r = t.stateNode;
//               if (t.flags & 4 && !Te)
//                 if (n === null) r.componentDidMount();
//                 else {
//                   var i =
//                     t.elementType === t.type
//                       ? n.memoizedProps
//                       : rt(t.type, n.memoizedProps);
//                   r.componentDidUpdate(
//                     i,
//                     n.memoizedState,
//                     r.__reactInternalSnapshotBeforeUpdate
//                   );
//                 }
//               var o = t.updateQueue;
//               o !== null && Za(t, o, r);
//               break;
//             case 3:
//               var l = t.updateQueue;
//               if (l !== null) {
//                 if (((n = null), t.child !== null))
//                   switch (t.child.tag) {
//                     case 5:
//                       n = t.child.stateNode;
//                       break;
//                     case 1:
//                       n = t.child.stateNode;
//                   }
//                 Za(t, l, n);
//               }
//               break;
//             case 5:
//               var a = t.stateNode;
//               if (n === null && t.flags & 4) {
//                 n = a;
//                 var s = t.memoizedProps;
//                 switch (t.type) {
//                   case "button":
//                   case "input":
//                   case "select":
//                   case "textarea":
//                     s.autoFocus && n.focus();
//                     break;
//                   case "img":
//                     s.src && (n.src = s.src);
//                 }
//               }
//               break;
//             case 6:
//               break;
//             case 4:
//               break;
//             case 12:
//               break;
//             case 13:
//               if (t.memoizedState === null) {
//                 var c = t.alternate;
//                 if (c !== null) {
//                   var d = c.memoizedState;
//                   if (d !== null) {
//                     var u = d.dehydrated;
//                     u !== null && jr(u);
//                   }
//                 }
//               }
//               break;
//             case 19:
//             case 17:
//             case 21:
//             case 22:
//             case 23:
//             case 25:
//               break;
//             default:
//               throw Error(P(163));
//           }
//         Te || (t.flags & 512 && Zl(t));
//       } catch (f) {
//         ae(t, t.return, f);
//       }
//     }
//     if (t === e) {
//       z = null;
//       break;
//     }
//     if (((n = t.sibling), n !== null)) {
//       (n.return = t.return), (z = n);
//       break;
//     }
//     z = t.return;
//   }
// }
// function pu(e) {
//   for (; z !== null; ) {
//     var t = z;
//     if (t === e) {
//       z = null;
//       break;
//     }
//     var n = t.sibling;
//     if (n !== null) {
//       (n.return = t.return), (z = n);
//       break;
//     }
//     z = t.return;
//   }
// }
// function vu(e) {
//   for (; z !== null; ) {
//     var t = z;
//     try {
//       switch (t.tag) {
//         case 0:
//         case 11:
//         case 15:
//           var n = t.return;
//           try {
//             po(4, t);
//           } catch (s) {
//             ae(t, n, s);
//           }
//           break;
//         case 1:
//           var r = t.stateNode;
//           if (typeof r.componentDidMount == "function") {
//             var i = t.return;
//             try {
//               r.componentDidMount();
//             } catch (s) {
//               ae(t, i, s);
//             }
//           }
//           var o = t.return;
//           try {
//             Zl(t);
//           } catch (s) {
//             ae(t, o, s);
//           }
//           break;
//         case 5:
//           var l = t.return;
//           try {
//             Zl(t);
//           } catch (s) {
//             ae(t, l, s);
//           }
//       }
//     } catch (s) {
//       ae(t, t.return, s);
//     }
//     if (t === e) {
//       z = null;
//       break;
//     }
//     var a = t.sibling;
//     if (a !== null) {
//       (a.return = t.return), (z = a);
//       break;
//     }
//     z = t.return;
//   }
// }
// var Ap = Math.ceil,
//   qi = Nt.ReactCurrentDispatcher,
//   Vs = Nt.ReactCurrentOwner,
//   Ze = Nt.ReactCurrentBatchConfig,
//   Y = 0,
//   we = null,
//   fe = null,
//   ke = 0,
//   Be = 0,
//   Mn = Zt(0),
//   me = 0,
//   Kr = null,
//   fn = 0,
//   vo = 0,
//   Qs = 0,
//   Pr = null,
//   je = null,
//   Ks = 0,
//   Yn = 1 / 0,
//   gt = null,
//   bi = !1,
//   bl = null,
//   Vt = null,
//   wi = !1,
//   Ut = null,
//   eo = 0,
//   Lr = 0,
//   es = null,
//   Ni = -1,
//   Mi = 0;
// function De() {
//   return Y & 6 ? ce() : Ni !== -1 ? Ni : (Ni = ce());
// }
// function Qt(e) {
//   return e.mode & 1
//     ? Y & 2 && ke !== 0
//       ? ke & -ke
//       : kp.transition !== null
//       ? (Mi === 0 && (Mi = Sc()), Mi)
//       : ((e = X),
//         e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Lc(e.type))),
//         e)
//     : 1;
// }
// function st(e, t, n, r) {
//   if (50 < Lr) throw ((Lr = 0), (es = null), Error(P(185)));
//   Xr(e, n, r),
//     (!(Y & 2) || e !== we) &&
//       (e === we && (!(Y & 2) && (vo |= n), me === 4 && It(e, ke)),
//       Ae(e, r),
//       n === 1 && Y === 0 && !(t.mode & 1) && ((Yn = ce() + 500), co && Jt()));
// }
// function Ae(e, t) {
//   var n = e.callbackNode;
//   kh(e, t);
//   var r = Fi(e, e === we ? ke : 0);
//   if (r === 0)
//     n !== null && xa(n), (e.callbackNode = null), (e.callbackPriority = 0);
//   else if (((t = r & -r), e.callbackPriority !== t)) {
//     if ((n != null && xa(n), t === 1))
//       e.tag === 0 ? _p(mu.bind(null, e)) : Kc(mu.bind(null, e)),
//         yp(function () {
//           !(Y & 6) && Jt();
//         }),
//         (n = null);
//     else {
//       switch (_c(r)) {
//         case 1:
//           n = gs;
//           break;
//         case 4:
//           n = gc;
//           break;
//         case 16:
//           n = Ii;
//           break;
//         case 536870912:
//           n = wc;
//           break;
//         default:
//           n = Ii;
//       }
//       n = Qd(n, Ud.bind(null, e));
//     }
//     (e.callbackPriority = t), (e.callbackNode = n);
//   }
// }
// function Ud(e, t) {
//   if (((Ni = -1), (Mi = 0), Y & 6)) throw Error(P(327));
//   var n = e.callbackNode;
//   if (An() && e.callbackNode !== n) return null;
//   var r = Fi(e, e === we ? ke : 0);
//   if (r === 0) return null;
//   if (r & 30 || r & e.expiredLanes || t) t = to(e, r);
//   else {
//     t = r;
//     var i = Y;
//     Y |= 2;
//     var o = Bd();
//     (we !== e || ke !== t) && ((gt = null), (Yn = ce() + 500), sn(e, t));
//     do
//       try {
//         Wp();
//         break;
//       } catch (a) {
//         Ad(e, a);
//       }
//     while (1);
//     Ms(),
//       (qi.current = o),
//       (Y = i),
//       fe !== null ? (t = 0) : ((we = null), (ke = 0), (t = me));
//   }
//   if (t !== 0) {
//     if (
//       (t === 2 && ((i = Ll(e)), i !== 0 && ((r = i), (t = ts(e, i)))), t === 1)
//     )
//       throw ((n = Kr), sn(e, 0), It(e, r), Ae(e, ce()), n);
//     if (t === 6) It(e, r);
//     else {
//       if (
//         ((i = e.current.alternate),
//         !(r & 30) &&
//           !Bp(i) &&
//           ((t = to(e, r)),
//           t === 2 && ((o = Ll(e)), o !== 0 && ((r = o), (t = ts(e, o)))),
//           t === 1))
//       )
//         throw ((n = Kr), sn(e, 0), It(e, r), Ae(e, ce()), n);
//       switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
//         case 0:
//         case 1:
//           throw Error(P(345));
//         case 2:
//           tn(e, je, gt);
//           break;
//         case 3:
//           if (
//             (It(e, r), (r & 130023424) === r && ((t = Ks + 500 - ce()), 10 < t))
//           ) {
//             if (Fi(e, 0) !== 0) break;
//             if (((i = e.suspendedLanes), (i & r) !== r)) {
//               De(), (e.pingedLanes |= e.suspendedLanes & i);
//               break;
//             }
//             e.timeoutHandle = jl(tn.bind(null, e, je, gt), t);
//             break;
//           }
//           tn(e, je, gt);
//           break;
//         case 4:
//           if ((It(e, r), (r & 4194240) === r)) break;
//           for (t = e.eventTimes, i = -1; 0 < r; ) {
//             var l = 31 - lt(r);
//             (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
//           }
//           if (
//             ((r = i),
//             (r = ce() - r),
//             (r =
//               (120 > r
//                 ? 120
//                 : 480 > r
//                 ? 480
//                 : 1080 > r
//                 ? 1080
//                 : 1920 > r
//                 ? 1920
//                 : 3e3 > r
//                 ? 3e3
//                 : 4320 > r
//                 ? 4320
//                 : 1960 * Ap(r / 1960)) - r),
//             10 < r)
//           ) {
//             e.timeoutHandle = jl(tn.bind(null, e, je, gt), r);
//             break;
//           }
//           tn(e, je, gt);
//           break;
//         case 5:
//           tn(e, je, gt);
//           break;
//         default:
//           throw Error(P(329));
//       }
//     }
//   }
//   return Ae(e, ce()), e.callbackNode === n ? Ud.bind(null, e) : null;
// }
// function ts(e, t) {
//   var n = Pr;
//   return (
//     e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256),
//     (e = to(e, t)),
//     e !== 2 && ((t = je), (je = n), t !== null && ns(t)),
//     e
//   );
// }
// function ns(e) {
//   je === null ? (je = e) : je.push.apply(je, e);
// }
// function Bp(e) {
//   for (var t = e; ; ) {
//     if (t.flags & 16384) {
//       var n = t.updateQueue;
//       if (n !== null && ((n = n.stores), n !== null))
//         for (var r = 0; r < n.length; r++) {
//           var i = n[r],
//             o = i.getSnapshot;
//           i = i.value;
//           try {
//             if (!at(o(), i)) return !1;
//           } catch {
//             return !1;
//           }
//         }
//     }
//     if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
//       (n.return = t), (t = n);
//     else {
//       if (t === e) break;
//       for (; t.sibling === null; ) {
//         if (t.return === null || t.return === e) return !0;
//         t = t.return;
//       }
//       (t.sibling.return = t.return), (t = t.sibling);
//     }
//   }
//   return !0;
// }
// function It(e, t) {
//   for (
//     t &= ~Qs,
//       t &= ~vo,
//       e.suspendedLanes |= t,
//       e.pingedLanes &= ~t,
//       e = e.expirationTimes;
//     0 < t;

//   ) {
//     var n = 31 - lt(t),
//       r = 1 << n;
//     (e[n] = -1), (t &= ~r);
//   }
// }
// function mu(e) {
//   if (Y & 6) throw Error(P(327));
//   An();
//   var t = Fi(e, 0);
//   if (!(t & 1)) return Ae(e, ce()), null;
//   var n = to(e, t);
//   if (e.tag !== 0 && n === 2) {
//     var r = Ll(e);
//     r !== 0 && ((t = r), (n = ts(e, r)));
//   }
//   if (n === 1) throw ((n = Kr), sn(e, 0), It(e, t), Ae(e, ce()), n);
//   if (n === 6) throw Error(P(345));
//   return (
//     (e.finishedWork = e.current.alternate),
//     (e.finishedLanes = t),
//     tn(e, je, gt),
//     Ae(e, ce()),
//     null
//   );
// }
// function Ys(e, t) {
//   var n = Y;
//   Y |= 1;
//   try {
//     return e(t);
//   } finally {
//     (Y = n), Y === 0 && ((Yn = ce() + 500), co && Jt());
//   }
// }
// function hn(e) {
//   Ut !== null && Ut.tag === 0 && !(Y & 6) && An();
//   var t = Y;
//   Y |= 1;
//   var n = Ze.transition,
//     r = X;
//   try {
//     if (((Ze.transition = null), (X = 1), e)) return e();
//   } finally {
//     (X = r), (Ze.transition = n), (Y = t), !(Y & 6) && Jt();
//   }
// }
// function Gs() {
//   (Be = Mn.current), te(Mn);
// }
// function sn(e, t) {
//   (e.finishedWork = null), (e.finishedLanes = 0);
//   var n = e.timeoutHandle;
//   if ((n !== -1 && ((e.timeoutHandle = -1), mp(n)), fe !== null))
//     for (n = fe.return; n !== null; ) {
//       var r = n;
//       switch ((Rs(r), r.tag)) {
//         case 1:
//           (r = r.type.childContextTypes), r != null && Wi();
//           break;
//         case 3:
//           Qn(), te(Fe), te(Ne), Fs();
//           break;
//         case 5:
//           Is(r);
//           break;
//         case 4:
//           Qn();
//           break;
//         case 13:
//           te(oe);
//           break;
//         case 19:
//           te(oe);
//           break;
//         case 10:
//           Ds(r.type._context);
//           break;
//         case 22:
//         case 23:
//           Gs();
//       }
//       n = n.return;
//     }
//   if (
//     ((we = e),
//     (fe = e = Kt(e.current, null)),
//     (ke = Be = t),
//     (me = 0),
//     (Kr = null),
//     (Qs = vo = fn = 0),
//     (je = Pr = null),
//     rn !== null)
//   ) {
//     for (t = 0; t < rn.length; t++)
//       if (((n = rn[t]), (r = n.interleaved), r !== null)) {
//         n.interleaved = null;
//         var i = r.next,
//           o = n.pending;
//         if (o !== null) {
//           var l = o.next;
//           (o.next = i), (r.next = l);
//         }
//         n.pending = r;
//       }
//     rn = null;
//   }
//   return e;
// }
// function Ad(e, t) {
//   do {
//     var n = fe;
//     try {
//       if ((Ms(), (Li.current = Ji), Zi)) {
//         for (var r = le.memoizedState; r !== null; ) {
//           var i = r.queue;
//           i !== null && (i.pending = null), (r = r.next);
//         }
//         Zi = !1;
//       }
//       if (
//         ((dn = 0),
//         (ge = ve = le = null),
//         (xr = !1),
//         (Hr = 0),
//         (Vs.current = null),
//         n === null || n.return === null)
//       ) {
//         (me = 1), (Kr = t), (fe = null);
//         break;
//       }
//       e: {
//         var o = e,
//           l = n.return,
//           a = n,
//           s = t;
//         if (
//           ((t = ke),
//           (a.flags |= 32768),
//           s !== null && typeof s == "object" && typeof s.then == "function")
//         ) {
//           var c = s,
//             d = a,
//             u = d.tag;
//           if (!(d.mode & 1) && (u === 0 || u === 11 || u === 15)) {
//             var f = d.alternate;
//             f
//               ? ((d.updateQueue = f.updateQueue),
//                 (d.memoizedState = f.memoizedState),
//                 (d.lanes = f.lanes))
//               : ((d.updateQueue = null), (d.memoizedState = null));
//           }
//           var p = ru(l);
//           if (p !== null) {
//             (p.flags &= -257),
//               iu(p, l, a, o, t),
//               p.mode & 1 && nu(o, c, t),
//               (t = p),
//               (s = c);
//             var g = t.updateQueue;
//             if (g === null) {
//               var S = new Set();
//               S.add(s), (t.updateQueue = S);
//             } else g.add(s);
//             break e;
//           } else {
//             if (!(t & 1)) {
//               nu(o, c, t), Xs();
//               break e;
//             }
//             s = Error(P(426));
//           }
//         } else if (re && a.mode & 1) {
//           var y = ru(l);
//           if (y !== null) {
//             !(y.flags & 65536) && (y.flags |= 256),
//               iu(y, l, a, o, t),
//               Ts(Kn(s, a));
//             break e;
//           }
//         }
//         (o = s = Kn(s, a)),
//           me !== 4 && (me = 2),
//           Pr === null ? (Pr = [o]) : Pr.push(o),
//           (o = l);
//         do {
//           switch (o.tag) {
//             case 3:
//               (o.flags |= 65536), (t &= -t), (o.lanes |= t);
//               var v = kd(o, s, t);
//               Xa(o, v);
//               break e;
//             case 1:
//               a = s;
//               var h = o.type,
//                 m = o.stateNode;
//               if (
//                 !(o.flags & 128) &&
//                 (typeof h.getDerivedStateFromError == "function" ||
//                   (m !== null &&
//                     typeof m.componentDidCatch == "function" &&
//                     (Vt === null || !Vt.has(m))))
//               ) {
//                 (o.flags |= 65536), (t &= -t), (o.lanes |= t);
//                 var _ = Ed(o, a, t);
//                 Xa(o, _);
//                 break e;
//               }
//           }
//           o = o.return;
//         } while (o !== null);
//       }
//       Wd(n);
//     } catch (x) {
//       (t = x), fe === n && n !== null && (fe = n = n.return);
//       continue;
//     }
//     break;
//   } while (1);
// }
// function Bd() {
//   var e = qi.current;
//   return (qi.current = Ji), e === null ? Ji : e;
// }
// function Xs() {
//   (me === 0 || me === 3 || me === 2) && (me = 4),
//     we === null || (!(fn & 268435455) && !(vo & 268435455)) || It(we, ke);
// }
// function to(e, t) {
//   var n = Y;
//   Y |= 2;
//   var r = Bd();
//   (we !== e || ke !== t) && ((gt = null), sn(e, t));
//   do
//     try {
//       $p();
//       break;
//     } catch (i) {
//       Ad(e, i);
//     }
//   while (1);
//   if ((Ms(), (Y = n), (qi.current = r), fe !== null)) throw Error(P(261));
//   return (we = null), (ke = 0), me;
// }
// function $p() {
//   for (; fe !== null; ) $d(fe);
// }
// function Wp() {
//   for (; fe !== null && !hh(); ) $d(fe);
// }
// function $d(e) {
//   var t = Vd(e.alternate, e, Be);
//   (e.memoizedProps = e.pendingProps),
//     t === null ? Wd(e) : (fe = t),
//     (Vs.current = null);
// }
// function Wd(e) {
//   var t = e;
//   do {
//     var n = t.alternate;
//     if (((e = t.return), t.flags & 32768)) {
//       if (((n = jp(n, t)), n !== null)) {
//         (n.flags &= 32767), (fe = n);
//         return;
//       }
//       if (e !== null)
//         (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
//       else {
//         (me = 6), (fe = null);
//         return;
//       }
//     } else if (((n = zp(n, t, Be)), n !== null)) {
//       fe = n;
//       return;
//     }
//     if (((t = t.sibling), t !== null)) {
//       fe = t;
//       return;
//     }
//     fe = t = e;
//   } while (t !== null);
//   me === 0 && (me = 5);
// }
// function tn(e, t, n) {
//   var r = X,
//     i = Ze.transition;
//   try {
//     (Ze.transition = null), (X = 1), Hp(e, t, n, r);
//   } finally {
//     (Ze.transition = i), (X = r);
//   }
//   return null;
// }
// function Hp(e, t, n, r) {
//   do An();
//   while (Ut !== null);
//   if (Y & 6) throw Error(P(327));
//   n = e.finishedWork;
//   var i = e.finishedLanes;
//   if (n === null) return null;
//   if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
//     throw Error(P(177));
//   (e.callbackNode = null), (e.callbackPriority = 0);
//   var o = n.lanes | n.childLanes;
//   if (
//     (Eh(e, o),
//     e === we && ((fe = we = null), (ke = 0)),
//     (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
//       wi ||
//       ((wi = !0),
//       Qd(Ii, function () {
//         return An(), null;
//       })),
//     (o = (n.flags & 15990) !== 0),
//     n.subtreeFlags & 15990 || o)
//   ) {
//     (o = Ze.transition), (Ze.transition = null);
//     var l = X;
//     X = 1;
//     var a = Y;
//     (Y |= 4),
//       (Vs.current = null),
//       Fp(e, n),
//       Id(n, e),
//       up(Ol),
//       (Ui = !!Dl),
//       (Ol = Dl = null),
//       (e.current = n),
//       Up(n),
//       ph(),
//       (Y = a),
//       (X = l),
//       (Ze.transition = o);
//   } else e.current = n;
//   if (
//     (wi && ((wi = !1), (Ut = e), (eo = i)),
//     (o = e.pendingLanes),
//     o === 0 && (Vt = null),
//     yh(n.stateNode),
//     Ae(e, ce()),
//     t !== null)
//   )
//     for (r = e.onRecoverableError, n = 0; n < t.length; n++)
//       (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
//   if (bi) throw ((bi = !1), (e = bl), (bl = null), e);
//   return (
//     eo & 1 && e.tag !== 0 && An(),
//     (o = e.pendingLanes),
//     o & 1 ? (e === es ? Lr++ : ((Lr = 0), (es = e))) : (Lr = 0),
//     Jt(),
//     null
//   );
// }
// function An() {
//   if (Ut !== null) {
//     var e = _c(eo),
//       t = Ze.transition,
//       n = X;
//     try {
//       if (((Ze.transition = null), (X = 16 > e ? 16 : e), Ut === null))
//         var r = !1;
//       else {
//         if (((e = Ut), (Ut = null), (eo = 0), Y & 6)) throw Error(P(331));
//         var i = Y;
//         for (Y |= 4, z = e.current; z !== null; ) {
//           var o = z,
//             l = o.child;
//           if (z.flags & 16) {
//             var a = o.deletions;
//             if (a !== null) {
//               for (var s = 0; s < a.length; s++) {
//                 var c = a[s];
//                 for (z = c; z !== null; ) {
//                   var d = z;
//                   switch (d.tag) {
//                     case 0:
//                     case 11:
//                     case 15:
//                       Cr(8, d, o);
//                   }
//                   var u = d.child;
//                   if (u !== null) (u.return = d), (z = u);
//                   else
//                     for (; z !== null; ) {
//                       d = z;
//                       var f = d.sibling,
//                         p = d.return;
//                       if ((Od(d), d === c)) {
//                         z = null;
//                         break;
//                       }
//                       if (f !== null) {
//                         (f.return = p), (z = f);
//                         break;
//                       }
//                       z = p;
//                     }
//                 }
//               }
//               var g = o.alternate;
//               if (g !== null) {
//                 var S = g.child;
//                 if (S !== null) {
//                   g.child = null;
//                   do {
//                     var y = S.sibling;
//                     (S.sibling = null), (S = y);
//                   } while (S !== null);
//                 }
//               }
//               z = o;
//             }
//           }
//           if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (z = l);
//           else
//             e: for (; z !== null; ) {
//               if (((o = z), o.flags & 2048))
//                 switch (o.tag) {
//                   case 0:
//                   case 11:
//                   case 15:
//                     Cr(9, o, o.return);
//                 }
//               var v = o.sibling;
//               if (v !== null) {
//                 (v.return = o.return), (z = v);
//                 break e;
//               }
//               z = o.return;
//             }
//         }
//         var h = e.current;
//         for (z = h; z !== null; ) {
//           l = z;
//           var m = l.child;
//           if (l.subtreeFlags & 2064 && m !== null) (m.return = l), (z = m);
//           else
//             e: for (l = h; z !== null; ) {
//               if (((a = z), a.flags & 2048))
//                 try {
//                   switch (a.tag) {
//                     case 0:
//                     case 11:
//                     case 15:
//                       po(9, a);
//                   }
//                 } catch (x) {
//                   ae(a, a.return, x);
//                 }
//               if (a === l) {
//                 z = null;
//                 break e;
//               }
//               var _ = a.sibling;
//               if (_ !== null) {
//                 (_.return = a.return), (z = _);
//                 break e;
//               }
//               z = a.return;
//             }
//         }
//         if (
//           ((Y = i), Jt(), ht && typeof ht.onPostCommitFiberRoot == "function")
//         )
//           try {
//             ht.onPostCommitFiberRoot(oo, e);
//           } catch {}
//         r = !0;
//       }
//       return r;
//     } finally {
//       (X = n), (Ze.transition = t);
//     }
//   }
//   return !1;
// }
// function yu(e, t, n) {
//   (t = Kn(n, t)),
//     (t = kd(e, t, 1)),
//     (e = Ht(e, t, 1)),
//     (t = De()),
//     e !== null && (Xr(e, 1, t), Ae(e, t));
// }
// function ae(e, t, n) {
//   if (e.tag === 3) yu(e, e, n);
//   else
//     for (; t !== null; ) {
//       if (t.tag === 3) {
//         yu(t, e, n);
//         break;
//       } else if (t.tag === 1) {
//         var r = t.stateNode;
//         if (
//           typeof t.type.getDerivedStateFromError == "function" ||
//           (typeof r.componentDidCatch == "function" &&
//             (Vt === null || !Vt.has(r)))
//         ) {
//           (e = Kn(n, e)),
//             (e = Ed(t, e, 1)),
//             (t = Ht(t, e, 1)),
//             (e = De()),
//             t !== null && (Xr(t, 1, e), Ae(t, e));
//           break;
//         }
//       }
//       t = t.return;
//     }
// }
// function Vp(e, t, n) {
//   var r = e.pingCache;
//   r !== null && r.delete(t),
//     (t = De()),
//     (e.pingedLanes |= e.suspendedLanes & n),
//     we === e &&
//       (ke & n) === n &&
//       (me === 4 || (me === 3 && (ke & 130023424) === ke && 500 > ce() - Ks)
//         ? sn(e, 0)
//         : (Qs |= n)),
//     Ae(e, t);
// }
// function Hd(e, t) {
//   t === 0 &&
//     (e.mode & 1
//       ? ((t = ui), (ui <<= 1), !(ui & 130023424) && (ui = 4194304))
//       : (t = 1));
//   var n = De();
//   (e = Lt(e, t)), e !== null && (Xr(e, t, n), Ae(e, n));
// }
// function Qp(e) {
//   var t = e.memoizedState,
//     n = 0;
//   t !== null && (n = t.retryLane), Hd(e, n);
// }
// function Kp(e, t) {
//   var n = 0;
//   switch (e.tag) {
//     case 13:
//       var r = e.stateNode,
//         i = e.memoizedState;
//       i !== null && (n = i.retryLane);
//       break;
//     case 19:
//       r = e.stateNode;
//       break;
//     default:
//       throw Error(P(314));
//   }
//   r !== null && r.delete(t), Hd(e, n);
// }
// var Vd;
// Vd = function (e, t, n) {
//   if (e !== null)
//     if (e.memoizedProps !== t.pendingProps || Fe.current) Ie = !0;
//     else {
//       if (!(e.lanes & n) && !(t.flags & 128)) return (Ie = !1), Op(e, t, n);
//       Ie = !!(e.flags & 131072);
//     }
//   else (Ie = !1), re && t.flags & 1048576 && Yc(t, Qi, t.index);
//   switch (((t.lanes = 0), t.tag)) {
//     case 2:
//       var r = t.type;
//       Ti(e, t), (e = t.pendingProps);
//       var i = Wn(t, Ne.current);
//       Un(t, n), (i = As(null, t, r, e, i, n));
//       var o = Bs();
//       return (
//         (t.flags |= 1),
//         typeof i == "object" &&
//         i !== null &&
//         typeof i.render == "function" &&
//         i.$$typeof === void 0
//           ? ((t.tag = 1),
//             (t.memoizedState = null),
//             (t.updateQueue = null),
//             Ue(r) ? ((o = !0), Hi(t)) : (o = !1),
//             (t.memoizedState =
//               i.state !== null && i.state !== void 0 ? i.state : null),
//             zs(t),
//             (i.updater = fo),
//             (t.stateNode = i),
//             (i._reactInternals = t),
//             Wl(t, r, e, n),
//             (t = Ql(null, t, r, !0, o, n)))
//           : ((t.tag = 0), re && o && Ls(t), Me(null, t, i, n), (t = t.child)),
//         t
//       );
//     case 16:
//       r = t.elementType;
//       e: {
//         switch (
//           (Ti(e, t),
//           (e = t.pendingProps),
//           (i = r._init),
//           (r = i(r._payload)),
//           (t.type = r),
//           (i = t.tag = Gp(r)),
//           (e = rt(r, e)),
//           i)
//         ) {
//           case 0:
//             t = Vl(null, t, r, e, n);
//             break e;
//           case 1:
//             t = su(null, t, r, e, n);
//             break e;
//           case 11:
//             t = ou(null, t, r, e, n);
//             break e;
//           case 14:
//             t = lu(null, t, r, rt(r.type, e), n);
//             break e;
//         }
//         throw Error(P(306, r, ""));
//       }
//       return t;
//     case 0:
//       return (
//         (r = t.type),
//         (i = t.pendingProps),
//         (i = t.elementType === r ? i : rt(r, i)),
//         Vl(e, t, r, i, n)
//       );
//     case 1:
//       return (
//         (r = t.type),
//         (i = t.pendingProps),
//         (i = t.elementType === r ? i : rt(r, i)),
//         su(e, t, r, i, n)
//       );
//     case 3:
//       e: {
//         if ((Ld(t), e === null)) throw Error(P(387));
//         (r = t.pendingProps),
//           (o = t.memoizedState),
//           (i = o.element),
//           Jc(e, t),
//           Gi(t, r, null, n);
//         var l = t.memoizedState;
//         if (((r = l.element), o.isDehydrated))
//           if (
//             ((o = {
//               element: r,
//               isDehydrated: !1,
//               cache: l.cache,
//               pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
//               transitions: l.transitions,
//             }),
//             (t.updateQueue.baseState = o),
//             (t.memoizedState = o),
//             t.flags & 256)
//           ) {
//             (i = Kn(Error(P(423)), t)), (t = au(e, t, r, n, i));
//             break e;
//           } else if (r !== i) {
//             (i = Kn(Error(P(424)), t)), (t = au(e, t, r, n, i));
//             break e;
//           } else
//             for (
//               $e = Wt(t.stateNode.containerInfo.firstChild),
//                 We = t,
//                 re = !0,
//                 ot = null,
//                 n = td(t, null, r, n),
//                 t.child = n;
//               n;

//             )
//               (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
//         else {
//           if ((Hn(), r === i)) {
//             t = Rt(e, t, n);
//             break e;
//           }
//           Me(e, t, r, n);
//         }
//         t = t.child;
//       }
//       return t;
//     case 5:
//       return (
//         nd(t),
//         e === null && Al(t),
//         (r = t.type),
//         (i = t.pendingProps),
//         (o = e !== null ? e.memoizedProps : null),
//         (l = i.children),
//         zl(r, i) ? (l = null) : o !== null && zl(r, o) && (t.flags |= 32),
//         Pd(e, t),
//         Me(e, t, l, n),
//         t.child
//       );
//     case 6:
//       return e === null && Al(t), null;
//     case 13:
//       return Rd(e, t, n);
//     case 4:
//       return (
//         js(t, t.stateNode.containerInfo),
//         (r = t.pendingProps),
//         e === null ? (t.child = Vn(t, null, r, n)) : Me(e, t, r, n),
//         t.child
//       );
//     case 11:
//       return (
//         (r = t.type),
//         (i = t.pendingProps),
//         (i = t.elementType === r ? i : rt(r, i)),
//         ou(e, t, r, i, n)
//       );
//     case 7:
//       return Me(e, t, t.pendingProps, n), t.child;
//     case 8:
//       return Me(e, t, t.pendingProps.children, n), t.child;
//     case 12:
//       return Me(e, t, t.pendingProps.children, n), t.child;
//     case 10:
//       e: {
//         if (
//           ((r = t.type._context),
//           (i = t.pendingProps),
//           (o = t.memoizedProps),
//           (l = i.value),
//           q(Ki, r._currentValue),
//           (r._currentValue = l),
//           o !== null)
//         )
//           if (at(o.value, l)) {
//             if (o.children === i.children && !Fe.current) {
//               t = Rt(e, t, n);
//               break e;
//             }
//           } else
//             for (o = t.child, o !== null && (o.return = t); o !== null; ) {
//               var a = o.dependencies;
//               if (a !== null) {
//                 l = o.child;
//                 for (var s = a.firstContext; s !== null; ) {
//                   if (s.context === r) {
//                     if (o.tag === 1) {
//                       (s = Et(-1, n & -n)), (s.tag = 2);
//                       var c = o.updateQueue;
//                       if (c !== null) {
//                         c = c.shared;
//                         var d = c.pending;
//                         d === null
//                           ? (s.next = s)
//                           : ((s.next = d.next), (d.next = s)),
//                           (c.pending = s);
//                       }
//                     }
//                     (o.lanes |= n),
//                       (s = o.alternate),
//                       s !== null && (s.lanes |= n),
//                       Bl(o.return, n, t),
//                       (a.lanes |= n);
//                     break;
//                   }
//                   s = s.next;
//                 }
//               } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
//               else if (o.tag === 18) {
//                 if (((l = o.return), l === null)) throw Error(P(341));
//                 (l.lanes |= n),
//                   (a = l.alternate),
//                   a !== null && (a.lanes |= n),
//                   Bl(l, n, t),
//                   (l = o.sibling);
//               } else l = o.child;
//               if (l !== null) l.return = o;
//               else
//                 for (l = o; l !== null; ) {
//                   if (l === t) {
//                     l = null;
//                     break;
//                   }
//                   if (((o = l.sibling), o !== null)) {
//                     (o.return = l.return), (l = o);
//                     break;
//                   }
//                   l = l.return;
//                 }
//               o = l;
//             }
//         Me(e, t, i.children, n), (t = t.child);
//       }
//       return t;
//     case 9:
//       return (
//         (i = t.type),
//         (r = t.pendingProps.children),
//         Un(t, n),
//         (i = Je(i)),
//         (r = r(i)),
//         (t.flags |= 1),
//         Me(e, t, r, n),
//         t.child
//       );
//     case 14:
//       return (
//         (r = t.type),
//         (i = rt(r, t.pendingProps)),
//         (i = rt(r.type, i)),
//         lu(e, t, r, i, n)
//       );
//     case 15:
//       return xd(e, t, t.type, t.pendingProps, n);
//     case 17:
//       return (
//         (r = t.type),
//         (i = t.pendingProps),
//         (i = t.elementType === r ? i : rt(r, i)),
//         Ti(e, t),
//         (t.tag = 1),
//         Ue(r) ? ((e = !0), Hi(t)) : (e = !1),
//         Un(t, n),
//         bc(t, r, i),
//         Wl(t, r, i, n),
//         Ql(null, t, r, !0, e, n)
//       );
//     case 19:
//       return Td(e, t, n);
//     case 22:
//       return Cd(e, t, n);
//   }
//   throw Error(P(156, t.tag));
// };
// function Qd(e, t) {
//   return yc(e, t);
// }
// function Yp(e, t, n, r) {
//   (this.tag = e),
//     (this.key = n),
//     (this.sibling =
//       this.child =
//       this.return =
//       this.stateNode =
//       this.type =
//       this.elementType =
//         null),
//     (this.index = 0),
//     (this.ref = null),
//     (this.pendingProps = t),
//     (this.dependencies =
//       this.memoizedState =
//       this.updateQueue =
//       this.memoizedProps =
//         null),
//     (this.mode = r),
//     (this.subtreeFlags = this.flags = 0),
//     (this.deletions = null),
//     (this.childLanes = this.lanes = 0),
//     (this.alternate = null);
// }
// function Xe(e, t, n, r) {
//   return new Yp(e, t, n, r);
// }
// function Zs(e) {
//   return (e = e.prototype), !(!e || !e.isReactComponent);
// }
// function Gp(e) {
//   if (typeof e == "function") return Zs(e) ? 1 : 0;
//   if (e != null) {
//     if (((e = e.$$typeof), e === vs)) return 11;
//     if (e === ms) return 14;
//   }
//   return 2;
// }
// function Kt(e, t) {
//   var n = e.alternate;
//   return (
//     n === null
//       ? ((n = Xe(e.tag, t, e.key, e.mode)),
//         (n.elementType = e.elementType),
//         (n.type = e.type),
//         (n.stateNode = e.stateNode),
//         (n.alternate = e),
//         (e.alternate = n))
//       : ((n.pendingProps = t),
//         (n.type = e.type),
//         (n.flags = 0),
//         (n.subtreeFlags = 0),
//         (n.deletions = null)),
//     (n.flags = e.flags & 14680064),
//     (n.childLanes = e.childLanes),
//     (n.lanes = e.lanes),
//     (n.child = e.child),
//     (n.memoizedProps = e.memoizedProps),
//     (n.memoizedState = e.memoizedState),
//     (n.updateQueue = e.updateQueue),
//     (t = e.dependencies),
//     (n.dependencies =
//       t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
//     (n.sibling = e.sibling),
//     (n.index = e.index),
//     (n.ref = e.ref),
//     n
//   );
// }
// function Di(e, t, n, r, i, o) {
//   var l = 2;
//   if (((r = e), typeof e == "function")) Zs(e) && (l = 1);
//   else if (typeof e == "string") l = 5;
//   else
//     e: switch (e) {
//       case _n:
//         return an(n.children, i, o, t);
//       case ps:
//         (l = 8), (i |= 8);
//         break;
//       case fl:
//         return (
//           (e = Xe(12, n, t, i | 2)), (e.elementType = fl), (e.lanes = o), e
//         );
//       case hl:
//         return (e = Xe(13, n, t, i)), (e.elementType = hl), (e.lanes = o), e;
//       case pl:
//         return (e = Xe(19, n, t, i)), (e.elementType = pl), (e.lanes = o), e;
//       case ec:
//         return mo(n, i, o, t);
//       default:
//         if (typeof e == "object" && e !== null)
//           switch (e.$$typeof) {
//             case qu:
//               l = 10;
//               break e;
//             case bu:
//               l = 9;
//               break e;
//             case vs:
//               l = 11;
//               break e;
//             case ms:
//               l = 14;
//               break e;
//             case Ot:
//               (l = 16), (r = null);
//               break e;
//           }
//         throw Error(P(130, e == null ? e : typeof e, ""));
//     }
//   return (
//     (t = Xe(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
//   );
// }
// function an(e, t, n, r) {
//   return (e = Xe(7, e, r, t)), (e.lanes = n), e;
// }
// function mo(e, t, n, r) {
//   return (
//     (e = Xe(22, e, r, t)),
//     (e.elementType = ec),
//     (e.lanes = n),
//     (e.stateNode = { isHidden: !1 }),
//     e
//   );
// }
// function nl(e, t, n) {
//   return (e = Xe(6, e, null, t)), (e.lanes = n), e;
// }
// function rl(e, t, n) {
//   return (
//     (t = Xe(4, e.children !== null ? e.children : [], e.key, t)),
//     (t.lanes = n),
//     (t.stateNode = {
//       containerInfo: e.containerInfo,
//       pendingChildren: null,
//       implementation: e.implementation,
//     }),
//     t
//   );
// }
// function Xp(e, t, n, r, i) {
//   (this.tag = t),
//     (this.containerInfo = e),
//     (this.finishedWork =
//       this.pingCache =
//       this.current =
//       this.pendingChildren =
//         null),
//     (this.timeoutHandle = -1),
//     (this.callbackNode = this.pendingContext = this.context = null),
//     (this.callbackPriority = 0),
//     (this.eventTimes = Fo(0)),
//     (this.expirationTimes = Fo(-1)),
//     (this.entangledLanes =
//       this.finishedLanes =
//       this.mutableReadLanes =
//       this.expiredLanes =
//       this.pingedLanes =
//       this.suspendedLanes =
//       this.pendingLanes =
//         0),
//     (this.entanglements = Fo(0)),
//     (this.identifierPrefix = r),
//     (this.onRecoverableError = i),
//     (this.mutableSourceEagerHydrationData = null);
// }
// function Js(e, t, n, r, i, o, l, a, s) {
//   return (
//     (e = new Xp(e, t, n, a, s)),
//     t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
//     (o = Xe(3, null, null, t)),
//     (e.current = o),
//     (o.stateNode = e),
//     (o.memoizedState = {
//       element: r,
//       isDehydrated: n,
//       cache: null,
//       transitions: null,
//       pendingSuspenseBoundaries: null,
//     }),
//     zs(o),
//     e
//   );
// }
// function Zp(e, t, n) {
//   var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
//   return {
//     $$typeof: Sn,
//     key: r == null ? null : "" + r,
//     children: e,
//     containerInfo: t,
//     implementation: n,
//   };
// }
// function Kd(e) {
//   if (!e) return Gt;
//   e = e._reactInternals;
//   e: {
//     if (vn(e) !== e || e.tag !== 1) throw Error(P(170));
//     var t = e;
//     do {
//       switch (t.tag) {
//         case 3:
//           t = t.stateNode.context;
//           break e;
//         case 1:
//           if (Ue(t.type)) {
//             t = t.stateNode.__reactInternalMemoizedMergedChildContext;
//             break e;
//           }
//       }
//       t = t.return;
//     } while (t !== null);
//     throw Error(P(171));
//   }
//   if (e.tag === 1) {
//     var n = e.type;
//     if (Ue(n)) return Qc(e, n, t);
//   }
//   return t;
// }
// function Yd(e, t, n, r, i, o, l, a, s) {
//   return (
//     (e = Js(n, r, !0, e, i, o, l, a, s)),
//     (e.context = Kd(null)),
//     (n = e.current),
//     (r = De()),
//     (i = Qt(n)),
//     (o = Et(r, i)),
//     (o.callback = t ?? null),
//     Ht(n, o, i),
//     (e.current.lanes = i),
//     Xr(e, i, r),
//     Ae(e, r),
//     e
//   );
// }
// function yo(e, t, n, r) {
//   var i = t.current,
//     o = De(),
//     l = Qt(i);
//   return (
//     (n = Kd(n)),
//     t.context === null ? (t.context = n) : (t.pendingContext = n),
//     (t = Et(o, l)),
//     (t.payload = { element: e }),
//     (r = r === void 0 ? null : r),
//     r !== null && (t.callback = r),
//     (e = Ht(i, t, l)),
//     e !== null && (st(e, i, l, o), Pi(e, i, l)),
//     l
//   );
// }
// function no(e) {
//   if (((e = e.current), !e.child)) return null;
//   switch (e.child.tag) {
//     case 5:
//       return e.child.stateNode;
//     default:
//       return e.child.stateNode;
//   }
// }
// function gu(e, t) {
//   if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
//     var n = e.retryLane;
//     e.retryLane = n !== 0 && n < t ? n : t;
//   }
// }
// function qs(e, t) {
//   gu(e, t), (e = e.alternate) && gu(e, t);
// }
// function Jp() {
//   return null;
// }
// var Gd =
//   typeof reportError == "function"
//     ? reportError
//     : function (e) {
//         console.error(e);
//       };
// function bs(e) {
//   this._internalRoot = e;
// }
// go.prototype.render = bs.prototype.render = function (e) {
//   var t = this._internalRoot;
//   if (t === null) throw Error(P(409));
//   yo(e, t, null, null);
// };
// go.prototype.unmount = bs.prototype.unmount = function () {
//   var e = this._internalRoot;
//   if (e !== null) {
//     this._internalRoot = null;
//     var t = e.containerInfo;
//     hn(function () {
//       yo(null, e, null, null);
//     }),
//       (t[Pt] = null);
//   }
// };
// function go(e) {
//   this._internalRoot = e;
// }
// go.prototype.unstable_scheduleHydration = function (e) {
//   if (e) {
//     var t = xc();
//     e = { blockedOn: null, target: e, priority: t };
//     for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++);
//     jt.splice(n, 0, e), n === 0 && Pc(e);
//   }
// };
// function ea(e) {
//   return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
// }
// function wo(e) {
//   return !(
//     !e ||
//     (e.nodeType !== 1 &&
//       e.nodeType !== 9 &&
//       e.nodeType !== 11 &&
//       (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
//   );
// }
// function wu() {}
// function qp(e, t, n, r, i) {
//   if (i) {
//     if (typeof r == "function") {
//       var o = r;
//       r = function () {
//         var c = no(l);
//         o.call(c);
//       };
//     }
//     var l = Yd(t, r, e, 0, null, !1, !1, "", wu);
//     return (
//       (e._reactRootContainer = l),
//       (e[Pt] = l.current),
//       Ur(e.nodeType === 8 ? e.parentNode : e),
//       hn(),
//       l
//     );
//   }
//   for (; (i = e.lastChild); ) e.removeChild(i);
//   if (typeof r == "function") {
//     var a = r;
//     r = function () {
//       var c = no(s);
//       a.call(c);
//     };
//   }
//   var s = Js(e, 0, !1, null, null, !1, !1, "", wu);
//   return (
//     (e._reactRootContainer = s),
//     (e[Pt] = s.current),
//     Ur(e.nodeType === 8 ? e.parentNode : e),
//     hn(function () {
//       yo(t, s, n, r);
//     }),
//     s
//   );
// }
// function So(e, t, n, r, i) {
//   var o = n._reactRootContainer;
//   if (o) {
//     var l = o;
//     if (typeof i == "function") {
//       var a = i;
//       i = function () {
//         var s = no(l);
//         a.call(s);
//       };
//     }
//     yo(t, l, e, i);
//   } else l = qp(n, t, e, i, r);
//   return no(l);
// }
// kc = function (e) {
//   switch (e.tag) {
//     case 3:
//       var t = e.stateNode;
//       if (t.current.memoizedState.isDehydrated) {
//         var n = yr(t.pendingLanes);
//         n !== 0 &&
//           (ws(t, n | 1), Ae(t, ce()), !(Y & 6) && ((Yn = ce() + 500), Jt()));
//       }
//       break;
//     case 13:
//       hn(function () {
//         var r = Lt(e, 1);
//         if (r !== null) {
//           var i = De();
//           st(r, e, 1, i);
//         }
//       }),
//         qs(e, 1);
//   }
// };
// Ss = function (e) {
//   if (e.tag === 13) {
//     var t = Lt(e, 134217728);
//     if (t !== null) {
//       var n = De();
//       st(t, e, 134217728, n);
//     }
//     qs(e, 134217728);
//   }
// };
// Ec = function (e) {
//   if (e.tag === 13) {
//     var t = Qt(e),
//       n = Lt(e, t);
//     if (n !== null) {
//       var r = De();
//       st(n, e, t, r);
//     }
//     qs(e, t);
//   }
// };
// xc = function () {
//   return X;
// };
// Cc = function (e, t) {
//   var n = X;
//   try {
//     return (X = e), t();
//   } finally {
//     X = n;
//   }
// };
// xl = function (e, t, n) {
//   switch (t) {
//     case "input":
//       if ((yl(e, n), (t = n.name), n.type === "radio" && t != null)) {
//         for (n = e; n.parentNode; ) n = n.parentNode;
//         for (
//           n = n.querySelectorAll(
//             "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
//           ),
//             t = 0;
//           t < n.length;
//           t++
//         ) {
//           var r = n[t];
//           if (r !== e && r.form === e.form) {
//             var i = uo(r);
//             if (!i) throw Error(P(90));
//             nc(r), yl(r, i);
//           }
//         }
//       }
//       break;
//     case "textarea":
//       ic(e, n);
//       break;
//     case "select":
//       (t = n.value), t != null && zn(e, !!n.multiple, t, !1);
//   }
// };
// dc = Ys;
// fc = hn;
// var bp = { usingClientEntryPoint: !1, Events: [Jr, Cn, uo, uc, cc, Ys] },
//   fr = {
//     findFiberByHostInstance: nn,
//     bundleType: 0,
//     version: "18.2.0",
//     rendererPackageName: "react-dom",
//   },
//   ev = {
//     bundleType: fr.bundleType,
//     version: fr.version,
//     rendererPackageName: fr.rendererPackageName,
//     rendererConfig: fr.rendererConfig,
//     overrideHookState: null,
//     overrideHookStateDeletePath: null,
//     overrideHookStateRenamePath: null,
//     overrideProps: null,
//     overridePropsDeletePath: null,
//     overridePropsRenamePath: null,
//     setErrorHandler: null,
//     setSuspenseHandler: null,
//     scheduleUpdate: null,
//     currentDispatcherRef: Nt.ReactCurrentDispatcher,
//     findHostInstanceByFiber: function (e) {
//       return (e = vc(e)), e === null ? null : e.stateNode;
//     },
//     findFiberByHostInstance: fr.findFiberByHostInstance || Jp,
//     findHostInstancesForRefresh: null,
//     scheduleRefresh: null,
//     scheduleRoot: null,
//     setRefreshHandler: null,
//     getCurrentFiber: null,
//     reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
//   };
// if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
//   var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
//   if (!Si.isDisabled && Si.supportsFiber)
//     try {
//       (oo = Si.inject(ev)), (ht = Si);
//     } catch {}
// }
// Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bp;
// Ve.createPortal = function (e, t) {
//   var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
//   if (!ea(t)) throw Error(P(200));
//   return Zp(e, t, null, n);
// };
// Ve.createRoot = function (e, t) {
//   if (!ea(e)) throw Error(P(299));
//   var n = !1,
//     r = "",
//     i = Gd;
//   return (
//     t != null &&
//       (t.unstable_strictMode === !0 && (n = !0),
//       t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
//       t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
//     (t = Js(e, 1, !1, null, null, n, !1, r, i)),
//     (e[Pt] = t.current),
//     Ur(e.nodeType === 8 ? e.parentNode : e),
//     new bs(t)
//   );
// };
// Ve.findDOMNode = function (e) {
//   if (e == null) return null;
//   if (e.nodeType === 1) return e;
//   var t = e._reactInternals;
//   if (t === void 0)
//     throw typeof e.render == "function"
//       ? Error(P(188))
//       : ((e = Object.keys(e).join(",")), Error(P(268, e)));
//   return (e = vc(t)), (e = e === null ? null : e.stateNode), e;
// };
// Ve.flushSync = function (e) {
//   return hn(e);
// };
// Ve.hydrate = function (e, t, n) {
//   if (!wo(t)) throw Error(P(200));
//   return So(null, e, t, !0, n);
// };
// Ve.hydrateRoot = function (e, t, n) {
//   if (!ea(e)) throw Error(P(405));
//   var r = (n != null && n.hydratedSources) || null,
//     i = !1,
//     o = "",
//     l = Gd;
//   if (
//     (n != null &&
//       (n.unstable_strictMode === !0 && (i = !0),
//       n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
//       n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
//     (t = Yd(t, null, e, 1, n ?? null, i, !1, o, l)),
//     (e[Pt] = t.current),
//     Ur(e),
//     r)
//   )
//     for (e = 0; e < r.length; e++)
//       (n = r[e]),
//         (i = n._getVersion),
//         (i = i(n._source)),
//         t.mutableSourceEagerHydrationData == null
//           ? (t.mutableSourceEagerHydrationData = [n, i])
//           : t.mutableSourceEagerHydrationData.push(n, i);
//   return new go(t);
// };
// Ve.render = function (e, t, n) {
//   if (!wo(t)) throw Error(P(200));
//   return So(null, e, t, !1, n);
// };
// Ve.unmountComponentAtNode = function (e) {
//   if (!wo(e)) throw Error(P(40));
//   return e._reactRootContainer
//     ? (hn(function () {
//         So(null, null, e, !1, function () {
//           (e._reactRootContainer = null), (e[Pt] = null);
//         });
//       }),
//       !0)
//     : !1;
// };
// Ve.unstable_batchedUpdates = Ys;
// Ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
//   if (!wo(n)) throw Error(P(200));
//   if (e == null || e._reactInternals === void 0) throw Error(P(38));
//   return So(e, t, n, !1, r);
// };
// Ve.version = "18.2.0-next-9e3b772b8-20220608";
// (function (e) {
//   function t() {
//     if (
//       !(
//         typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
//         typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
//       )
//     )
//       try {
//         __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
//       } catch (n) {
//         console.error(n);
//       }
//   }
//   t(), (e.exports = Ve);
// })(Jf);
// var Su = ul;
// (al.createRoot = Su.createRoot), (al.hydrateRoot = Su.hydrateRoot);
// /**
//  * @remix-run/router v1.5.0
//  *
//  * Copyright (c) Remix Software Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE.md file in the root directory of this source tree.
//  *
//  * @license MIT
//  */ function K() {
//   return (
//     (K = Object.assign
//       ? Object.assign.bind()
//       : function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var n = arguments[t];
//             for (var r in n)
//               Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
//           }
//           return e;
//         }),
//     K.apply(this, arguments)
//   );
// }
// var de;
// (function (e) {
//   (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
// })(de || (de = {}));
// const _u = "popstate";
// function tv(e) {
//   e === void 0 && (e = {});
//   function t(r, i) {
//     let { pathname: o, search: l, hash: a } = r.location;
//     return Yr(
//       "",
//       { pathname: o, search: l, hash: a },
//       (i.state && i.state.usr) || null,
//       (i.state && i.state.key) || "default"
//     );
//   }
//   function n(r, i) {
//     return typeof i == "string" ? i : Tt(i);
//   }
//   return rv(t, n, null, e);
// }
// function V(e, t) {
//   if (e === !1 || e === null || typeof e > "u") throw new Error(t);
// }
// function Gn(e, t) {
//   if (!e) {
//     typeof console < "u" && console.warn(t);
//     try {
//       throw new Error(t);
//     } catch {}
//   }
// }
// function nv() {
//   return Math.random().toString(36).substr(2, 8);
// }
// function ku(e, t) {
//   return { usr: e.state, key: e.key, idx: t };
// }
// function Yr(e, t, n, r) {
//   return (
//     n === void 0 && (n = null),
//     K(
//       { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
//       typeof t == "string" ? Mt(t) : t,
//       { state: n, key: (t && t.key) || r || nv() }
//     )
//   );
// }
// function Tt(e) {
//   let { pathname: t = "/", search: n = "", hash: r = "" } = e;
//   return (
//     n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
//     r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
//     t
//   );
// }
// function Mt(e) {
//   let t = {};
//   if (e) {
//     let n = e.indexOf("#");
//     n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
//     let r = e.indexOf("?");
//     r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
//       e && (t.pathname = e);
//   }
//   return t;
// }
// function rv(e, t, n, r) {
//   r === void 0 && (r = {});
//   let { window: i = document.defaultView, v5Compat: o = !1 } = r,
//     l = i.history,
//     a = de.Pop,
//     s = null,
//     c = d();
//   c == null && ((c = 0), l.replaceState(K({}, l.state, { idx: c }), ""));
//   function d() {
//     return (l.state || { idx: null }).idx;
//   }
//   function u() {
//     a = de.Pop;
//     let y = d(),
//       v = y == null ? null : y - c;
//     (c = y), s && s({ action: a, location: S.location, delta: v });
//   }
//   function f(y, v) {
//     a = de.Push;
//     let h = Yr(S.location, y, v);
//     n && n(h, y), (c = d() + 1);
//     let m = ku(h, c),
//       _ = S.createHref(h);
//     try {
//       l.pushState(m, "", _);
//     } catch {
//       i.location.assign(_);
//     }
//     o && s && s({ action: a, location: S.location, delta: 1 });
//   }
//   function p(y, v) {
//     a = de.Replace;
//     let h = Yr(S.location, y, v);
//     n && n(h, y), (c = d());
//     let m = ku(h, c),
//       _ = S.createHref(h);
//     l.replaceState(m, "", _),
//       o && s && s({ action: a, location: S.location, delta: 0 });
//   }
//   function g(y) {
//     let v = i.location.origin !== "null" ? i.location.origin : i.location.href,
//       h = typeof y == "string" ? y : Tt(y);
//     return (
//       V(
//         v,
//         "No window.location.(origin|href) available to create URL for href: " +
//           h
//       ),
//       new URL(h, v)
//     );
//   }
//   let S = {
//     get action() {
//       return a;
//     },
//     get location() {
//       return e(i, l);
//     },
//     listen(y) {
//       if (s) throw new Error("A history only accepts one active listener");
//       return (
//         i.addEventListener(_u, u),
//         (s = y),
//         () => {
//           i.removeEventListener(_u, u), (s = null);
//         }
//       );
//     },
//     createHref(y) {
//       return t(i, y);
//     },
//     createURL: g,
//     encodeLocation(y) {
//       let v = g(y);
//       return { pathname: v.pathname, search: v.search, hash: v.hash };
//     },
//     push: f,
//     replace: p,
//     go(y) {
//       return l.go(y);
//     },
//   };
//   return S;
// }
// var pe;
// (function (e) {
//   (e.data = "data"),
//     (e.deferred = "deferred"),
//     (e.redirect = "redirect"),
//     (e.error = "error");
// })(pe || (pe = {}));
// const iv = new Set([
//   "lazy",
//   "caseSensitive",
//   "path",
//   "id",
//   "index",
//   "children",
// ]);
// function ov(e) {
//   return e.index === !0;
// }
// function Xd(e, t, n, r) {
//   return (
//     n === void 0 && (n = []),
//     r === void 0 && (r = {}),
//     e.map((i, o) => {
//       let l = [...n, o],
//         a = typeof i.id == "string" ? i.id : l.join("-");
//       if (
//         (V(
//           i.index !== !0 || !i.children,
//           "Cannot specify children on an index route"
//         ),
//         V(
//           !r[a],
//           'Found a route id collision on id "' +
//             a +
//             `".  Route id's must be globally unique within Data Router usages`
//         ),
//         ov(i))
//       ) {
//         let s = K({}, i, { hasErrorBoundary: t(i), id: a });
//         return (r[a] = s), s;
//       } else {
//         let s = K({}, i, { id: a, hasErrorBoundary: t(i), children: void 0 });
//         return (
//           (r[a] = s), i.children && (s.children = Xd(i.children, t, l, r)), s
//         );
//       }
//     })
//   );
// }
// function Dn(e, t, n) {
//   n === void 0 && (n = "/");
//   let r = typeof t == "string" ? Mt(t) : t,
//     i = br(r.pathname || "/", n);
//   if (i == null) return null;
//   let o = Zd(e);
//   lv(o);
//   let l = null;
//   for (let a = 0; l == null && a < o.length; ++a) l = vv(o[a], gv(i));
//   return l;
// }
// function Zd(e, t, n, r) {
//   t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
//   let i = (o, l, a) => {
//     let s = {
//       relativePath: a === void 0 ? o.path || "" : a,
//       caseSensitive: o.caseSensitive === !0,
//       childrenIndex: l,
//       route: o,
//     };
//     s.relativePath.startsWith("/") &&
//       (V(
//         s.relativePath.startsWith(r),
//         'Absolute route path "' +
//           s.relativePath +
//           '" nested under path ' +
//           ('"' + r + '" is not valid. An absolute child route path ') +
//           "must start with the combined path of all its parent routes."
//       ),
//       (s.relativePath = s.relativePath.slice(r.length)));
//     let c = xt([r, s.relativePath]),
//       d = n.concat(s);
//     o.children &&
//       o.children.length > 0 &&
//       (V(
//         o.index !== !0,
//         "Index routes must not have child routes. Please remove " +
//           ('all child routes from route path "' + c + '".')
//       ),
//       Zd(o.children, t, d, c)),
//       !(o.path == null && !o.index) &&
//         t.push({ path: c, score: hv(c, o.index), routesMeta: d });
//   };
//   return (
//     e.forEach((o, l) => {
//       var a;
//       if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, l);
//       else for (let s of Jd(o.path)) i(o, l, s);
//     }),
//     t
//   );
// }
// function Jd(e) {
//   let t = e.split("/");
//   if (t.length === 0) return [];
//   let [n, ...r] = t,
//     i = n.endsWith("?"),
//     o = n.replace(/\?$/, "");
//   if (r.length === 0) return i ? [o, ""] : [o];
//   let l = Jd(r.join("/")),
//     a = [];
//   return (
//     a.push(...l.map((s) => (s === "" ? o : [o, s].join("/")))),
//     i && a.push(...l),
//     a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
//   );
// }
// function lv(e) {
//   e.sort((t, n) =>
//     t.score !== n.score
//       ? n.score - t.score
//       : pv(
//           t.routesMeta.map((r) => r.childrenIndex),
//           n.routesMeta.map((r) => r.childrenIndex)
//         )
//   );
// }
// const sv = /^:\w+$/,
//   av = 3,
//   uv = 2,
//   cv = 1,
//   dv = 10,
//   fv = -2,
//   Eu = (e) => e === "*";
// function hv(e, t) {
//   let n = e.split("/"),
//     r = n.length;
//   return (
//     n.some(Eu) && (r += fv),
//     t && (r += uv),
//     n
//       .filter((i) => !Eu(i))
//       .reduce((i, o) => i + (sv.test(o) ? av : o === "" ? cv : dv), r)
//   );
// }
// function pv(e, t) {
//   return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
//     ? e[e.length - 1] - t[t.length - 1]
//     : 0;
// }
// function vv(e, t) {
//   let { routesMeta: n } = e,
//     r = {},
//     i = "/",
//     o = [];
//   for (let l = 0; l < n.length; ++l) {
//     let a = n[l],
//       s = l === n.length - 1,
//       c = i === "/" ? t : t.slice(i.length) || "/",
//       d = mv(
//         { path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
//         c
//       );
//     if (!d) return null;
//     Object.assign(r, d.params);
//     let u = a.route;
//     o.push({
//       params: r,
//       pathname: xt([i, d.pathname]),
//       pathnameBase: kv(xt([i, d.pathnameBase])),
//       route: u,
//     }),
//       d.pathnameBase !== "/" && (i = xt([i, d.pathnameBase]));
//   }
//   return o;
// }
// function mv(e, t) {
//   typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
//   let [n, r] = yv(e.path, e.caseSensitive, e.end),
//     i = t.match(n);
//   if (!i) return null;
//   let o = i[0],
//     l = o.replace(/(.)\/+$/, "$1"),
//     a = i.slice(1);
//   return {
//     params: r.reduce((c, d, u) => {
//       if (d === "*") {
//         let f = a[u] || "";
//         l = o.slice(0, o.length - f.length).replace(/(.)\/+$/, "$1");
//       }
//       return (c[d] = wv(a[u] || "", d)), c;
//     }, {}),
//     pathname: o,
//     pathnameBase: l,
//     pattern: e,
//   };
// }
// function yv(e, t, n) {
//   t === void 0 && (t = !1),
//     n === void 0 && (n = !0),
//     Gn(
//       e === "*" || !e.endsWith("*") || e.endsWith("/*"),
//       'Route path "' +
//         e +
//         '" will be treated as if it were ' +
//         ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
//         "always follow a `/` in the pattern. To get rid of this warning, " +
//         ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
//     );
//   let r = [],
//     i =
//       "^" +
//       e
//         .replace(/\/*\*?$/, "")
//         .replace(/^\/*/, "/")
//         .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
//         .replace(/\/:(\w+)/g, (l, a) => (r.push(a), "/([^\\/]+)"));
//   return (
//     e.endsWith("*")
//       ? (r.push("*"),
//         (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
//       : n
//       ? (i += "\\/*$")
//       : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
//     [new RegExp(i, t ? void 0 : "i"), r]
//   );
// }
// function gv(e) {
//   try {
//     return decodeURI(e);
//   } catch (t) {
//     return (
//       Gn(
//         !1,
//         'The URL path "' +
//           e +
//           '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
//           ("encoding (" + t + ").")
//       ),
//       e
//     );
//   }
// }
// function wv(e, t) {
//   try {
//     return decodeURIComponent(e);
//   } catch (n) {
//     return (
//       Gn(
//         !1,
//         'The value for the URL param "' +
//           t +
//           '" will not be decoded because' +
//           (' the string "' +
//             e +
//             '" is a malformed URL segment. This is probably') +
//           (" due to a bad percent encoding (" + n + ").")
//       ),
//       e
//     );
//   }
// }
// function br(e, t) {
//   if (t === "/") return e;
//   if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
//   let n = t.endsWith("/") ? t.length - 1 : t.length,
//     r = e.charAt(n);
//   return r && r !== "/" ? null : e.slice(n) || "/";
// }
// function Sv(e, t) {
//   t === void 0 && (t = "/");
//   let {
//     pathname: n,
//     search: r = "",
//     hash: i = "",
//   } = typeof e == "string" ? Mt(e) : e;
//   return {
//     pathname: n ? (n.startsWith("/") ? n : _v(n, t)) : t,
//     search: Ev(r),
//     hash: xv(i),
//   };
// }
// function _v(e, t) {
//   let n = t.replace(/\/+$/, "").split("/");
//   return (
//     e.split("/").forEach((i) => {
//       i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
//     }),
//     n.length > 1 ? n.join("/") : "/"
//   );
// }
// function il(e, t, n, r) {
//   return (
//     "Cannot include a '" +
//     e +
//     "' character in a manually specified " +
//     ("`to." +
//       t +
//       "` field [" +
//       JSON.stringify(r) +
//       "].  Please separate it out to the ") +
//     ("`to." + n + "` field. Alternatively you may provide the full path as ") +
//     'a string in <Link to="..."> and the router will parse it for you.'
//   );
// }
// function _o(e) {
//   return e.filter(
//     (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
//   );
// }
// function ta(e, t, n, r) {
//   r === void 0 && (r = !1);
//   let i;
//   typeof e == "string"
//     ? (i = Mt(e))
//     : ((i = K({}, e)),
//       V(
//         !i.pathname || !i.pathname.includes("?"),
//         il("?", "pathname", "search", i)
//       ),
//       V(
//         !i.pathname || !i.pathname.includes("#"),
//         il("#", "pathname", "hash", i)
//       ),
//       V(!i.search || !i.search.includes("#"), il("#", "search", "hash", i)));
//   let o = e === "" || i.pathname === "",
//     l = o ? "/" : i.pathname,
//     a;
//   if (r || l == null) a = n;
//   else {
//     let u = t.length - 1;
//     if (l.startsWith("..")) {
//       let f = l.split("/");
//       for (; f[0] === ".."; ) f.shift(), (u -= 1);
//       i.pathname = f.join("/");
//     }
//     a = u >= 0 ? t[u] : "/";
//   }
//   let s = Sv(i, a),
//     c = l && l !== "/" && l.endsWith("/"),
//     d = (o || l === ".") && n.endsWith("/");
//   return !s.pathname.endsWith("/") && (c || d) && (s.pathname += "/"), s;
// }
// const xt = (e) => e.join("/").replace(/\/\/+/g, "/"),
//   kv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
//   Ev = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
//   xv = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
// class na {
//   constructor(t, n, r, i) {
//     i === void 0 && (i = !1),
//       (this.status = t),
//       (this.statusText = n || ""),
//       (this.internal = i),
//       r instanceof Error
//         ? ((this.data = r.toString()), (this.error = r))
//         : (this.data = r);
//   }
// }
// function qd(e) {
//   return (
//     e != null &&
//     typeof e.status == "number" &&
//     typeof e.statusText == "string" &&
//     typeof e.internal == "boolean" &&
//     "data" in e
//   );
// }
// const bd = ["post", "put", "patch", "delete"],
//   Cv = new Set(bd),
//   Pv = ["get", ...bd],
//   Lv = new Set(Pv),
//   Rv = new Set([301, 302, 303, 307, 308]),
//   Tv = new Set([307, 308]),
//   ol = {
//     state: "idle",
//     location: void 0,
//     formMethod: void 0,
//     formAction: void 0,
//     formEncType: void 0,
//     formData: void 0,
//   },
//   Nv = {
//     state: "idle",
//     data: void 0,
//     formMethod: void 0,
//     formAction: void 0,
//     formEncType: void 0,
//     formData: void 0,
//   },
//   xu = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
//   ef = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
//   tf =
//     typeof window < "u" &&
//     typeof window.document < "u" &&
//     typeof window.document.createElement < "u",
//   Mv = !tf,
//   Dv = (e) => !!e.hasErrorBoundary;
// function Ov(e) {
//   V(
//     e.routes.length > 0,
//     "You must provide a non-empty routes array to createRouter"
//   );
//   let t = e.detectErrorBoundary || Dv,
//     n = {},
//     r = Xd(e.routes, t, void 0, n),
//     i,
//     o = K({ v7_normalizeFormMethod: !1 }, e.future),
//     l = null,
//     a = new Set(),
//     s = null,
//     c = null,
//     d = null,
//     u = e.hydrationData != null,
//     f = Dn(r, e.history.location, e.basename),
//     p = null;
//   if (f == null) {
//     let w = dt(404, { pathname: e.history.location.pathname }),
//       { matches: k, route: C } = Mu(r);
//     (f = k), (p = { [C.id]: w });
//   }
//   let g =
//       !f.some((w) => w.route.lazy) &&
//       (!f.some((w) => w.route.loader) || e.hydrationData != null),
//     S,
//     y = {
//       historyAction: e.history.action,
//       location: e.history.location,
//       matches: f,
//       initialized: g,
//       navigation: ol,
//       restoreScrollPosition: e.hydrationData != null ? !1 : null,
//       preventScrollReset: !1,
//       revalidation: "idle",
//       loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
//       actionData: (e.hydrationData && e.hydrationData.actionData) || null,
//       errors: (e.hydrationData && e.hydrationData.errors) || p,
//       fetchers: new Map(),
//       blockers: new Map(),
//     },
//     v = de.Pop,
//     h = !1,
//     m,
//     _ = !1,
//     x = !1,
//     T = [],
//     R = [],
//     E = new Map(),
//     N = 0,
//     L = -1,
//     A = new Map(),
//     xe = new Set(),
//     ie = new Map(),
//     b = new Map(),
//     he = new Map(),
//     Ke = !1;
//   function vt() {
//     return (
//       (l = e.history.listen((w) => {
//         let { action: k, location: C, delta: j } = w;
//         if (Ke) {
//           Ke = !1;
//           return;
//         }
//         Gn(
//           he.size === 0 || j != null,
//           "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
//         );
//         let I = aa({
//           currentLocation: y.location,
//           nextLocation: C,
//           historyAction: k,
//         });
//         if (I && j != null) {
//           (Ke = !0),
//             e.history.go(j * -1),
//             ri(I, {
//               state: "blocked",
//               location: C,
//               proceed() {
//                 ri(I, {
//                   state: "proceeding",
//                   proceed: void 0,
//                   reset: void 0,
//                   location: C,
//                 }),
//                   e.history.go(j);
//               },
//               reset() {
//                 tr(I), F({ blockers: new Map(S.state.blockers) });
//               },
//             });
//           return;
//         }
//         return Ce(k, C);
//       })),
//       y.initialized || Ce(de.Pop, y.location),
//       S
//     );
//   }
//   function O() {
//     l && l(),
//       a.clear(),
//       m && m.abort(),
//       y.fetchers.forEach((w, k) => Po(k)),
//       y.blockers.forEach((w, k) => tr(k));
//   }
//   function W(w) {
//     return a.add(w), () => a.delete(w);
//   }
//   function F(w) {
//     (y = K({}, y, w)), a.forEach((k) => k(y));
//   }
//   function Z(w, k) {
//     var C, j;
//     let I =
//         y.actionData != null &&
//         y.navigation.formMethod != null &&
//         wt(y.navigation.formMethod) &&
//         y.navigation.state === "loading" &&
//         ((C = w.state) == null ? void 0 : C._isRedirect) !== !0,
//       B;
//     k.actionData
//       ? Object.keys(k.actionData).length > 0
//         ? (B = k.actionData)
//         : (B = null)
//       : I
//       ? (B = y.actionData)
//       : (B = null);
//     let $ = k.loaderData
//       ? Nu(y.loaderData, k.loaderData, k.matches || [], k.errors)
//       : y.loaderData;
//     for (let [U] of he) tr(U);
//     let H =
//       h === !0 ||
//       (y.navigation.formMethod != null &&
//         wt(y.navigation.formMethod) &&
//         ((j = w.state) == null ? void 0 : j._isRedirect) !== !0);
//     i && ((r = i), (i = void 0)),
//       F(
//         K({}, k, {
//           actionData: B,
//           loaderData: $,
//           historyAction: v,
//           location: w,
//           initialized: !0,
//           navigation: ol,
//           revalidation: "idle",
//           restoreScrollPosition: ua(w, k.matches || y.matches),
//           preventScrollReset: H,
//           blockers: new Map(y.blockers),
//         })
//       ),
//       _ ||
//         v === de.Pop ||
//         (v === de.Push
//           ? e.history.push(w, w.state)
//           : v === de.Replace && e.history.replace(w, w.state)),
//       (v = de.Pop),
//       (h = !1),
//       (_ = !1),
//       (x = !1),
//       (T = []),
//       (R = []);
//   }
//   async function ue(w, k) {
//     if (typeof w == "number") {
//       e.history.go(w);
//       return;
//     }
//     let { path: C, submission: j, error: I } = Cu(w, o, k),
//       B = y.location,
//       $ = Yr(y.location, C, k && k.state);
//     $ = K({}, $, e.history.encodeLocation($));
//     let H = k && k.replace != null ? k.replace : void 0,
//       U = de.Push;
//     H === !0
//       ? (U = de.Replace)
//       : H === !1 ||
//         (j != null &&
//           wt(j.formMethod) &&
//           j.formAction === y.location.pathname + y.location.search &&
//           (U = de.Replace));
//     let J =
//         k && "preventScrollReset" in k ? k.preventScrollReset === !0 : void 0,
//       G = aa({ currentLocation: B, nextLocation: $, historyAction: U });
//     if (G) {
//       ri(G, {
//         state: "blocked",
//         location: $,
//         proceed() {
//           ri(G, {
//             state: "proceeding",
//             proceed: void 0,
//             reset: void 0,
//             location: $,
//           }),
//             ue(w, k);
//         },
//         reset() {
//           tr(G), F({ blockers: new Map(y.blockers) });
//         },
//       });
//       return;
//     }
//     return await Ce(U, $, {
//       submission: j,
//       pendingError: I,
//       preventScrollReset: J,
//       replace: k && k.replace,
//     });
//   }
//   function yn() {
//     if (
//       (xo(),
//       F({ revalidation: "loading" }),
//       y.navigation.state !== "submitting")
//     ) {
//       if (y.navigation.state === "idle") {
//         Ce(y.historyAction, y.location, { startUninterruptedRevalidation: !0 });
//         return;
//       }
//       Ce(v || y.historyAction, y.navigation.location, {
//         overrideNavigation: y.navigation,
//       });
//     }
//   }
//   async function Ce(w, k, C) {
//     m && m.abort(),
//       (m = null),
//       (v = w),
//       (_ = (C && C.startUninterruptedRevalidation) === !0),
//       _f(y.location, y.matches),
//       (h = (C && C.preventScrollReset) === !0);
//     let j = i || r,
//       I = C && C.overrideNavigation,
//       B = Dn(j, k, e.basename);
//     if (!B) {
//       let ye = dt(404, { pathname: k.pathname }),
//         { matches: Se, route: et } = Mu(j);
//       Lo(), Z(k, { matches: Se, loaderData: {}, errors: { [et.id]: ye } });
//       return;
//     }
//     if (
//       Uv(y.location, k) &&
//       !(C && C.submission && wt(C.submission.formMethod))
//     ) {
//       Z(k, { matches: B });
//       return;
//     }
//     m = new AbortController();
//     let $ = pr(e.history, k, m.signal, C && C.submission),
//       H,
//       U;
//     if (C && C.pendingError) U = { [On(B).route.id]: C.pendingError };
//     else if (C && C.submission && wt(C.submission.formMethod)) {
//       let ye = await bn($, k, C.submission, B, { replace: C.replace });
//       if (ye.shortCircuited) return;
//       (H = ye.pendingActionData),
//         (U = ye.pendingActionError),
//         (I = K({ state: "loading", location: k }, C.submission)),
//         ($ = new Request($.url, { signal: $.signal }));
//     }
//     let {
//       shortCircuited: J,
//       loaderData: G,
//       errors: be,
//     } = await mt(
//       $,
//       k,
//       B,
//       I,
//       C && C.submission,
//       C && C.fetcherSubmission,
//       C && C.replace,
//       H,
//       U
//     );
//     J ||
//       ((m = null),
//       Z(
//         k,
//         K({ matches: B }, H ? { actionData: H } : {}, {
//           loaderData: G,
//           errors: be,
//         })
//       ));
//   }
//   async function bn(w, k, C, j, I) {
//     xo();
//     let B = K({ state: "submitting", location: k }, C);
//     F({ navigation: B });
//     let $,
//       H = rs(j, k);
//     if (!H.route.action && !H.route.lazy)
//       $ = {
//         type: pe.error,
//         error: dt(405, {
//           method: w.method,
//           pathname: k.pathname,
//           routeId: H.route.id,
//         }),
//       };
//     else if (
//       (($ = await hr("action", w, H, j, n, t, S.basename)), w.signal.aborted)
//     )
//       return { shortCircuited: !0 };
//     if (Bn($)) {
//       let U;
//       return (
//         I && I.replace != null
//           ? (U = I.replace)
//           : (U = $.location === y.location.pathname + y.location.search),
//         await er(y, $, { submission: C, replace: U }),
//         { shortCircuited: !0 }
//       );
//     }
//     if (Rr($)) {
//       let U = On(j, H.route.id);
//       return (
//         (I && I.replace) !== !0 && (v = de.Push),
//         { pendingActionData: {}, pendingActionError: { [U.route.id]: $.error } }
//       );
//     }
//     if (ln($)) throw dt(400, { type: "defer-action" });
//     return { pendingActionData: { [H.route.id]: $.data } };
//   }
//   async function mt(w, k, C, j, I, B, $, H, U) {
//     let J = j;
//     J ||
//       (J = K(
//         {
//           state: "loading",
//           location: k,
//           formMethod: void 0,
//           formAction: void 0,
//           formEncType: void 0,
//           formData: void 0,
//         },
//         I
//       ));
//     let G =
//         I || B
//           ? I || B
//           : J.formMethod && J.formAction && J.formData && J.formEncType
//           ? {
//               formMethod: J.formMethod,
//               formAction: J.formAction,
//               formData: J.formData,
//               formEncType: J.formEncType,
//             }
//           : void 0,
//       be = i || r,
//       [ye, Se] = Pu(e.history, y, C, G, k, x, T, R, ie, be, e.basename, H, U);
//     if (
//       (Lo(
//         (Pe) =>
//           !(C && C.some((tt) => tt.route.id === Pe)) ||
//           (ye && ye.some((tt) => tt.route.id === Pe))
//       ),
//       ye.length === 0 && Se.length === 0)
//     )
//       return (
//         Z(
//           k,
//           K(
//             { matches: C, loaderData: {}, errors: U || null },
//             H ? { actionData: H } : {}
//           )
//         ),
//         { shortCircuited: !0 }
//       );
//     if (!_) {
//       Se.forEach((tt) => {
//         let bt = y.fetchers.get(tt.key),
//           ir = {
//             state: "loading",
//             data: bt && bt.data,
//             formMethod: void 0,
//             formAction: void 0,
//             formEncType: void 0,
//             formData: void 0,
//             " _hasFetcherDoneAnything ": !0,
//           };
//         y.fetchers.set(tt.key, ir);
//       });
//       let Pe = H || y.actionData;
//       F(
//         K(
//           { navigation: J },
//           Pe
//             ? Object.keys(Pe).length === 0
//               ? { actionData: null }
//               : { actionData: Pe }
//             : {},
//           Se.length > 0 ? { fetchers: new Map(y.fetchers) } : {}
//         )
//       );
//     }
//     (L = ++N), Se.forEach((Pe) => E.set(Pe.key, m));
//     let {
//       results: et,
//       loaderResults: nr,
//       fetcherResults: Ro,
//     } = await oa(y.matches, C, ye, Se, w);
//     if (w.signal.aborted) return { shortCircuited: !0 };
//     Se.forEach((Pe) => E.delete(Pe.key));
//     let rr = Du(et);
//     if (rr) return await er(y, rr, { replace: $ }), { shortCircuited: !0 };
//     let { loaderData: gn, errors: To } = Tu(y, C, ye, nr, U, Se, Ro, b);
//     b.forEach((Pe, tt) => {
//       Pe.subscribe((bt) => {
//         (bt || Pe.done) && b.delete(tt);
//       });
//     }),
//       gf();
//     let No = sa(L);
//     return K(
//       { loaderData: gn, errors: To },
//       No || Se.length > 0 ? { fetchers: new Map(y.fetchers) } : {}
//     );
//   }
//   function qt(w) {
//     return y.fetchers.get(w) || Nv;
//   }
//   function vf(w, k, C, j) {
//     if (Mv)
//       throw new Error(
//         "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
//       );
//     E.has(w) && ni(w);
//     let B = Dn(i || r, C, e.basename);
//     if (!B) {
//       Co(w, k, dt(404, { pathname: C }));
//       return;
//     }
//     let { path: $, submission: H } = Cu(C, o, j, !0),
//       U = rs(B, $);
//     if (((h = (j && j.preventScrollReset) === !0), H && wt(H.formMethod))) {
//       mf(w, k, $, U, B, H);
//       return;
//     }
//     ie.set(w, { routeId: k, path: $ }), yf(w, k, $, U, B, H);
//   }
//   async function mf(w, k, C, j, I, B) {
//     if ((xo(), ie.delete(w), !j.route.action && !j.route.lazy)) {
//       let yt = dt(405, { method: B.formMethod, pathname: C, routeId: k });
//       Co(w, k, yt);
//       return;
//     }
//     let $ = y.fetchers.get(w),
//       H = K({ state: "submitting" }, B, {
//         data: $ && $.data,
//         " _hasFetcherDoneAnything ": !0,
//       });
//     y.fetchers.set(w, H), F({ fetchers: new Map(y.fetchers) });
//     let U = new AbortController(),
//       J = pr(e.history, C, U.signal, B);
//     E.set(w, U);
//     let G = await hr("action", J, j, I, n, t, S.basename);
//     if (J.signal.aborted) {
//       E.get(w) === U && E.delete(w);
//       return;
//     }
//     if (Bn(G)) {
//       E.delete(w), xe.add(w);
//       let yt = K({ state: "loading" }, B, {
//         data: void 0,
//         " _hasFetcherDoneAnything ": !0,
//       });
//       return (
//         y.fetchers.set(w, yt),
//         F({ fetchers: new Map(y.fetchers) }),
//         er(y, G, { submission: B, isFetchActionRedirect: !0 })
//       );
//     }
//     if (Rr(G)) {
//       Co(w, k, G.error);
//       return;
//     }
//     if (ln(G)) throw dt(400, { type: "defer-action" });
//     let be = y.navigation.location || y.location,
//       ye = pr(e.history, be, U.signal),
//       Se = i || r,
//       et =
//         y.navigation.state !== "idle"
//           ? Dn(Se, y.navigation.location, e.basename)
//           : y.matches;
//     V(et, "Didn't find any matches after fetcher action");
//     let nr = ++N;
//     A.set(w, nr);
//     let Ro = K({ state: "loading", data: G.data }, B, {
//       " _hasFetcherDoneAnything ": !0,
//     });
//     y.fetchers.set(w, Ro);
//     let [rr, gn] = Pu(
//       e.history,
//       y,
//       et,
//       B,
//       be,
//       x,
//       T,
//       R,
//       ie,
//       Se,
//       e.basename,
//       { [j.route.id]: G.data },
//       void 0
//     );
//     gn
//       .filter((yt) => yt.key !== w)
//       .forEach((yt) => {
//         let Mo = yt.key,
//           ca = y.fetchers.get(Mo),
//           Cf = {
//             state: "loading",
//             data: ca && ca.data,
//             formMethod: void 0,
//             formAction: void 0,
//             formEncType: void 0,
//             formData: void 0,
//             " _hasFetcherDoneAnything ": !0,
//           };
//         y.fetchers.set(Mo, Cf), E.set(Mo, U);
//       }),
//       F({ fetchers: new Map(y.fetchers) });
//     let {
//       results: To,
//       loaderResults: No,
//       fetcherResults: Pe,
//     } = await oa(y.matches, et, rr, gn, ye);
//     if (U.signal.aborted) return;
//     A.delete(w), E.delete(w), gn.forEach((yt) => E.delete(yt.key));
//     let tt = Du(To);
//     if (tt) return er(y, tt);
//     let { loaderData: bt, errors: ir } = Tu(
//         y,
//         y.matches,
//         rr,
//         No,
//         void 0,
//         gn,
//         Pe,
//         b
//       ),
//       Ef = {
//         state: "idle",
//         data: G.data,
//         formMethod: void 0,
//         formAction: void 0,
//         formEncType: void 0,
//         formData: void 0,
//         " _hasFetcherDoneAnything ": !0,
//       };
//     y.fetchers.set(w, Ef);
//     let xf = sa(nr);
//     y.navigation.state === "loading" && nr > L
//       ? (V(v, "Expected pending action"),
//         m && m.abort(),
//         Z(y.navigation.location, {
//           matches: et,
//           loaderData: bt,
//           errors: ir,
//           fetchers: new Map(y.fetchers),
//         }))
//       : (F(
//           K(
//             { errors: ir, loaderData: Nu(y.loaderData, bt, et, ir) },
//             xf ? { fetchers: new Map(y.fetchers) } : {}
//           )
//         ),
//         (x = !1));
//   }
//   async function yf(w, k, C, j, I, B) {
//     let $ = y.fetchers.get(w),
//       H = K(
//         {
//           state: "loading",
//           formMethod: void 0,
//           formAction: void 0,
//           formEncType: void 0,
//           formData: void 0,
//         },
//         B,
//         { data: $ && $.data, " _hasFetcherDoneAnything ": !0 }
//       );
//     y.fetchers.set(w, H), F({ fetchers: new Map(y.fetchers) });
//     let U = new AbortController(),
//       J = pr(e.history, C, U.signal);
//     E.set(w, U);
//     let G = await hr("loader", J, j, I, n, t, S.basename);
//     if (
//       (ln(G) && (G = (await lf(G, J.signal, !0)) || G),
//       E.get(w) === U && E.delete(w),
//       J.signal.aborted)
//     )
//       return;
//     if (Bn(G)) {
//       await er(y, G);
//       return;
//     }
//     if (Rr(G)) {
//       let ye = On(y.matches, k);
//       y.fetchers.delete(w),
//         F({
//           fetchers: new Map(y.fetchers),
//           errors: { [ye.route.id]: G.error },
//         });
//       return;
//     }
//     V(!ln(G), "Unhandled fetcher deferred data");
//     let be = {
//       state: "idle",
//       data: G.data,
//       formMethod: void 0,
//       formAction: void 0,
//       formEncType: void 0,
//       formData: void 0,
//       " _hasFetcherDoneAnything ": !0,
//     };
//     y.fetchers.set(w, be), F({ fetchers: new Map(y.fetchers) });
//   }
//   async function er(w, k, C) {
//     var j;
//     let {
//       submission: I,
//       replace: B,
//       isFetchActionRedirect: $,
//     } = C === void 0 ? {} : C;
//     k.revalidate && (x = !0);
//     let H = Yr(
//       w.location,
//       k.location,
//       K({ _isRedirect: !0 }, $ ? { _isFetchActionRedirect: !0 } : {})
//     );
//     if (
//       (V(H, "Expected a location on the redirect navigation"),
//       ef.test(k.location) &&
//         tf &&
//         typeof ((j = window) == null ? void 0 : j.location) < "u")
//     ) {
//       let Se = e.history.createURL(k.location),
//         et = br(Se.pathname, e.basename || "/") == null;
//       if (window.location.origin !== Se.origin || et) {
//         B
//           ? window.location.replace(k.location)
//           : window.location.assign(k.location);
//         return;
//       }
//     }
//     m = null;
//     let U = B === !0 ? de.Replace : de.Push,
//       {
//         formMethod: J,
//         formAction: G,
//         formEncType: be,
//         formData: ye,
//       } = w.navigation;
//     !I &&
//       J &&
//       G &&
//       ye &&
//       be &&
//       (I = { formMethod: J, formAction: G, formEncType: be, formData: ye }),
//       Tv.has(k.status) && I && wt(I.formMethod)
//         ? await Ce(U, H, {
//             submission: K({}, I, { formAction: k.location }),
//             preventScrollReset: h,
//           })
//         : $
//         ? await Ce(U, H, {
//             overrideNavigation: {
//               state: "loading",
//               location: H,
//               formMethod: void 0,
//               formAction: void 0,
//               formEncType: void 0,
//               formData: void 0,
//             },
//             fetcherSubmission: I,
//             preventScrollReset: h,
//           })
//         : await Ce(U, H, {
//             overrideNavigation: {
//               state: "loading",
//               location: H,
//               formMethod: I ? I.formMethod : void 0,
//               formAction: I ? I.formAction : void 0,
//               formEncType: I ? I.formEncType : void 0,
//               formData: I ? I.formData : void 0,
//             },
//             preventScrollReset: h,
//           });
//   }
//   async function oa(w, k, C, j, I) {
//     let B = await Promise.all([
//         ...C.map((U) => hr("loader", I, U, k, n, t, S.basename)),
//         ...j.map((U) =>
//           U.matches && U.match
//             ? hr(
//                 "loader",
//                 pr(e.history, U.path, I.signal),
//                 U.match,
//                 U.matches,
//                 n,
//                 t,
//                 S.basename
//               )
//             : { type: pe.error, error: dt(404, { pathname: U.path }) }
//         ),
//       ]),
//       $ = B.slice(0, C.length),
//       H = B.slice(C.length);
//     return (
//       await Promise.all([
//         Ou(w, C, $, I.signal, !1, y.loaderData),
//         Ou(
//           w,
//           j.map((U) => U.match),
//           H,
//           I.signal,
//           !0
//         ),
//       ]),
//       { results: B, loaderResults: $, fetcherResults: H }
//     );
//   }
//   function xo() {
//     (x = !0),
//       T.push(...Lo()),
//       ie.forEach((w, k) => {
//         E.has(k) && (R.push(k), ni(k));
//       });
//   }
//   function Co(w, k, C) {
//     let j = On(y.matches, k);
//     Po(w), F({ errors: { [j.route.id]: C }, fetchers: new Map(y.fetchers) });
//   }
//   function Po(w) {
//     E.has(w) && ni(w),
//       ie.delete(w),
//       A.delete(w),
//       xe.delete(w),
//       y.fetchers.delete(w);
//   }
//   function ni(w) {
//     let k = E.get(w);
//     V(k, "Expected fetch controller: " + w), k.abort(), E.delete(w);
//   }
//   function la(w) {
//     for (let k of w) {
//       let j = {
//         state: "idle",
//         data: qt(k).data,
//         formMethod: void 0,
//         formAction: void 0,
//         formEncType: void 0,
//         formData: void 0,
//         " _hasFetcherDoneAnything ": !0,
//       };
//       y.fetchers.set(k, j);
//     }
//   }
//   function gf() {
//     let w = [];
//     for (let k of xe) {
//       let C = y.fetchers.get(k);
//       V(C, "Expected fetcher: " + k),
//         C.state === "loading" && (xe.delete(k), w.push(k));
//     }
//     la(w);
//   }
//   function sa(w) {
//     let k = [];
//     for (let [C, j] of A)
//       if (j < w) {
//         let I = y.fetchers.get(C);
//         V(I, "Expected fetcher: " + C),
//           I.state === "loading" && (ni(C), A.delete(C), k.push(C));
//       }
//     return la(k), k.length > 0;
//   }
//   function wf(w, k) {
//     let C = y.blockers.get(w) || xu;
//     return he.get(w) !== k && he.set(w, k), C;
//   }
//   function tr(w) {
//     y.blockers.delete(w), he.delete(w);
//   }
//   function ri(w, k) {
//     let C = y.blockers.get(w) || xu;
//     V(
//       (C.state === "unblocked" && k.state === "blocked") ||
//         (C.state === "blocked" && k.state === "blocked") ||
//         (C.state === "blocked" && k.state === "proceeding") ||
//         (C.state === "blocked" && k.state === "unblocked") ||
//         (C.state === "proceeding" && k.state === "unblocked"),
//       "Invalid blocker state transition: " + C.state + " -> " + k.state
//     ),
//       y.blockers.set(w, k),
//       F({ blockers: new Map(y.blockers) });
//   }
//   function aa(w) {
//     let { currentLocation: k, nextLocation: C, historyAction: j } = w;
//     if (he.size === 0) return;
//     he.size > 1 && Gn(!1, "A router only supports one blocker at a time");
//     let I = Array.from(he.entries()),
//       [B, $] = I[I.length - 1],
//       H = y.blockers.get(B);
//     if (
//       !(H && H.state === "proceeding") &&
//       $({ currentLocation: k, nextLocation: C, historyAction: j })
//     )
//       return B;
//   }
//   function Lo(w) {
//     let k = [];
//     return (
//       b.forEach((C, j) => {
//         (!w || w(j)) && (C.cancel(), k.push(j), b.delete(j));
//       }),
//       k
//     );
//   }
//   function Sf(w, k, C) {
//     if (
//       ((s = w), (d = k), (c = C || ((j) => j.key)), !u && y.navigation === ol)
//     ) {
//       u = !0;
//       let j = ua(y.location, y.matches);
//       j != null && F({ restoreScrollPosition: j });
//     }
//     return () => {
//       (s = null), (d = null), (c = null);
//     };
//   }
//   function _f(w, k) {
//     if (s && c && d) {
//       let C = k.map((I) => zu(I, y.loaderData)),
//         j = c(w, C) || w.key;
//       s[j] = d();
//     }
//   }
//   function ua(w, k) {
//     if (s && c && d) {
//       let C = k.map((B) => zu(B, y.loaderData)),
//         j = c(w, C) || w.key,
//         I = s[j];
//       if (typeof I == "number") return I;
//     }
//     return null;
//   }
//   function kf(w) {
//     i = w;
//   }
//   return (
//     (S = {
//       get basename() {
//         return e.basename;
//       },
//       get state() {
//         return y;
//       },
//       get routes() {
//         return r;
//       },
//       initialize: vt,
//       subscribe: W,
//       enableScrollRestoration: Sf,
//       navigate: ue,
//       fetch: vf,
//       revalidate: yn,
//       createHref: (w) => e.history.createHref(w),
//       encodeLocation: (w) => e.history.encodeLocation(w),
//       getFetcher: qt,
//       deleteFetcher: Po,
//       dispose: O,
//       getBlocker: wf,
//       deleteBlocker: tr,
//       _internalFetchControllers: E,
//       _internalActiveDeferreds: b,
//       _internalSetRoutes: kf,
//     }),
//     S
//   );
// }
// function zv(e) {
//   return e != null && "formData" in e;
// }
// function Cu(e, t, n, r) {
//   r === void 0 && (r = !1);
//   let i = typeof e == "string" ? e : Tt(e);
//   if (!n || !zv(n)) return { path: i };
//   if (n.formMethod && !$v(n.formMethod))
//     return { path: i, error: dt(405, { method: n.formMethod }) };
//   let o;
//   if (n.formData) {
//     let s = n.formMethod || "get";
//     if (
//       ((o = {
//         formMethod: t.v7_normalizeFormMethod
//           ? s.toUpperCase()
//           : s.toLowerCase(),
//         formAction: of(i),
//         formEncType:
//           (n && n.formEncType) || "application/x-www-form-urlencoded",
//         formData: n.formData,
//       }),
//       wt(o.formMethod))
//     )
//       return { path: i, submission: o };
//   }
//   let l = Mt(i),
//     a = rf(n.formData);
//   return (
//     r && l.search && sf(l.search) && a.append("index", ""),
//     (l.search = "?" + a),
//     { path: Tt(l), submission: o }
//   );
// }
// function jv(e, t) {
//   let n = e;
//   if (t) {
//     let r = e.findIndex((i) => i.route.id === t);
//     r >= 0 && (n = e.slice(0, r));
//   }
//   return n;
// }
// function Pu(e, t, n, r, i, o, l, a, s, c, d, u, f) {
//   let p = f ? Object.values(f)[0] : u ? Object.values(u)[0] : void 0,
//     g = e.createURL(t.location),
//     S = e.createURL(i),
//     y = o || g.toString() === S.toString() || g.search !== S.search,
//     v = f ? Object.keys(f)[0] : void 0,
//     m = jv(n, v).filter((x, T) => {
//       if (x.route.lazy) return !0;
//       if (x.route.loader == null) return !1;
//       if (Iv(t.loaderData, t.matches[T], x) || l.some((N) => N === x.route.id))
//         return !0;
//       let R = t.matches[T],
//         E = x;
//       return Lu(
//         x,
//         K(
//           {
//             currentUrl: g,
//             currentParams: R.params,
//             nextUrl: S,
//             nextParams: E.params,
//           },
//           r,
//           { actionResult: p, defaultShouldRevalidate: y || nf(R, E) }
//         )
//       );
//     }),
//     _ = [];
//   return (
//     s.forEach((x, T) => {
//       if (!n.some((L) => L.route.id === x.routeId)) return;
//       let R = Dn(c, x.path, d);
//       if (!R) {
//         _.push(K({ key: T }, x, { matches: null, match: null }));
//         return;
//       }
//       let E = rs(R, x.path);
//       if (a.includes(T)) {
//         _.push(K({ key: T, matches: R, match: E }, x));
//         return;
//       }
//       Lu(
//         E,
//         K(
//           {
//             currentUrl: g,
//             currentParams: t.matches[t.matches.length - 1].params,
//             nextUrl: S,
//             nextParams: n[n.length - 1].params,
//           },
//           r,
//           { actionResult: p, defaultShouldRevalidate: y }
//         )
//       ) && _.push(K({ key: T, matches: R, match: E }, x));
//     }),
//     [m, _]
//   );
// }
// function Iv(e, t, n) {
//   let r = !t || n.route.id !== t.route.id,
//     i = e[n.route.id] === void 0;
//   return r || i;
// }
// function nf(e, t) {
//   let n = e.route.path;
//   return (
//     e.pathname !== t.pathname ||
//     (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
//   );
// }
// function Lu(e, t) {
//   if (e.route.shouldRevalidate) {
//     let n = e.route.shouldRevalidate(t);
//     if (typeof n == "boolean") return n;
//   }
//   return t.defaultShouldRevalidate;
// }
// async function Ru(e, t, n) {
//   if (!e.lazy) return;
//   let r = await e.lazy();
//   if (!e.lazy) return;
//   let i = n[e.id];
//   V(i, "No route found in manifest");
//   let o = {};
//   for (let l in r) {
//     let s = i[l] !== void 0 && l !== "hasErrorBoundary";
//     Gn(
//       !s,
//       'Route "' +
//         i.id +
//         '" has a static property "' +
//         l +
//         '" defined but its lazy function is also returning a value for this property. ' +
//         ('The lazy route property "' + l + '" will be ignored.')
//     ),
//       !s && !iv.has(l) && (o[l] = r[l]);
//   }
//   Object.assign(i, o),
//     Object.assign(i, { hasErrorBoundary: t(K({}, i)), lazy: void 0 });
// }
// async function hr(e, t, n, r, i, o, l, a, s, c) {
//   l === void 0 && (l = "/"), a === void 0 && (a = !1), s === void 0 && (s = !1);
//   let d,
//     u,
//     f,
//     p = (y) => {
//       let v,
//         h = new Promise((m, _) => (v = _));
//       return (
//         (f = () => v()),
//         t.signal.addEventListener("abort", f),
//         Promise.race([y({ request: t, params: n.params, context: c }), h])
//       );
//     };
//   try {
//     let y = n.route[e];
//     if (n.route.lazy)
//       if (y) u = (await Promise.all([p(y), Ru(n.route, o, i)]))[0];
//       else if ((await Ru(n.route, o, i), (y = n.route[e]), y)) u = await p(y);
//       else {
//         if (e === "action")
//           throw dt(405, {
//             method: t.method,
//             pathname: new URL(t.url).pathname,
//             routeId: n.route.id,
//           });
//         return { type: pe.data, data: void 0 };
//       }
//     else
//       V(
//         y,
//         "Could not find the " + e + ' to run on the "' + n.route.id + '" route'
//       ),
//         (u = await p(y));
//     V(
//       u !== void 0,
//       "You defined " +
//         (e === "action" ? "an action" : "a loader") +
//         " for route " +
//         ('"' +
//           n.route.id +
//           "\" but didn't return anything from your `" +
//           e +
//           "` ") +
//         "function. Please return a value or `null`."
//     );
//   } catch (y) {
//     (d = pe.error), (u = y);
//   } finally {
//     f && t.signal.removeEventListener("abort", f);
//   }
//   if (Bv(u)) {
//     let y = u.status;
//     if (Rv.has(y)) {
//       let m = u.headers.get("Location");
//       if (
//         (V(
//           m,
//           "Redirects returned/thrown from loaders/actions must have a Location header"
//         ),
//         ef.test(m))
//       ) {
//         if (!a) {
//           let _ = new URL(t.url),
//             x = m.startsWith("//") ? new URL(_.protocol + m) : new URL(m),
//             T = br(x.pathname, l) != null;
//           x.origin === _.origin && T && (m = x.pathname + x.search + x.hash);
//         }
//       } else {
//         let _ = r.slice(0, r.indexOf(n) + 1),
//           x = _o(_).map((R) => R.pathnameBase),
//           T = ta(m, x, new URL(t.url).pathname);
//         if ((V(Tt(T), "Unable to resolve redirect location: " + m), l)) {
//           let R = T.pathname;
//           T.pathname = R === "/" ? l : xt([l, R]);
//         }
//         m = Tt(T);
//       }
//       if (a) throw (u.headers.set("Location", m), u);
//       return {
//         type: pe.redirect,
//         status: y,
//         location: m,
//         revalidate: u.headers.get("X-Remix-Revalidate") !== null,
//       };
//     }
//     if (s) throw { type: d || pe.data, response: u };
//     let v,
//       h = u.headers.get("Content-Type");
//     return (
//       h && /\bapplication\/json\b/.test(h)
//         ? (v = await u.json())
//         : (v = await u.text()),
//       d === pe.error
//         ? { type: d, error: new na(y, u.statusText, v), headers: u.headers }
//         : { type: pe.data, data: v, statusCode: u.status, headers: u.headers }
//     );
//   }
//   if (d === pe.error) return { type: d, error: u };
//   if (Av(u)) {
//     var g, S;
//     return {
//       type: pe.deferred,
//       deferredData: u,
//       statusCode: (g = u.init) == null ? void 0 : g.status,
//       headers:
//         ((S = u.init) == null ? void 0 : S.headers) &&
//         new Headers(u.init.headers),
//     };
//   }
//   return { type: pe.data, data: u };
// }
// function pr(e, t, n, r) {
//   let i = e.createURL(of(t)).toString(),
//     o = { signal: n };
//   if (r && wt(r.formMethod)) {
//     let { formMethod: l, formEncType: a, formData: s } = r;
//     (o.method = l.toUpperCase()),
//       (o.body = a === "application/x-www-form-urlencoded" ? rf(s) : s);
//   }
//   return new Request(i, o);
// }
// function rf(e) {
//   let t = new URLSearchParams();
//   for (let [n, r] of e.entries()) t.append(n, r instanceof File ? r.name : r);
//   return t;
// }
// function Fv(e, t, n, r, i) {
//   let o = {},
//     l = null,
//     a,
//     s = !1,
//     c = {};
//   return (
//     n.forEach((d, u) => {
//       let f = t[u].route.id;
//       if (
//         (V(!Bn(d), "Cannot handle redirect results in processLoaderData"),
//         Rr(d))
//       ) {
//         let p = On(e, f),
//           g = d.error;
//         r && ((g = Object.values(r)[0]), (r = void 0)),
//           (l = l || {}),
//           l[p.route.id] == null && (l[p.route.id] = g),
//           (o[f] = void 0),
//           s || ((s = !0), (a = qd(d.error) ? d.error.status : 500)),
//           d.headers && (c[f] = d.headers);
//       } else
//         ln(d)
//           ? (i.set(f, d.deferredData), (o[f] = d.deferredData.data))
//           : (o[f] = d.data),
//           d.statusCode != null &&
//             d.statusCode !== 200 &&
//             !s &&
//             (a = d.statusCode),
//           d.headers && (c[f] = d.headers);
//     }),
//     r && ((l = r), (o[Object.keys(r)[0]] = void 0)),
//     { loaderData: o, errors: l, statusCode: a || 200, loaderHeaders: c }
//   );
// }
// function Tu(e, t, n, r, i, o, l, a) {
//   let { loaderData: s, errors: c } = Fv(t, n, r, i, a);
//   for (let d = 0; d < o.length; d++) {
//     let { key: u, match: f } = o[d];
//     V(
//       l !== void 0 && l[d] !== void 0,
//       "Did not find corresponding fetcher result"
//     );
//     let p = l[d];
//     if (Rr(p)) {
//       let g = On(e.matches, f == null ? void 0 : f.route.id);
//       (c && c[g.route.id]) || (c = K({}, c, { [g.route.id]: p.error })),
//         e.fetchers.delete(u);
//     } else if (Bn(p)) V(!1, "Unhandled fetcher revalidation redirect");
//     else if (ln(p)) V(!1, "Unhandled fetcher deferred data");
//     else {
//       let g = {
//         state: "idle",
//         data: p.data,
//         formMethod: void 0,
//         formAction: void 0,
//         formEncType: void 0,
//         formData: void 0,
//         " _hasFetcherDoneAnything ": !0,
//       };
//       e.fetchers.set(u, g);
//     }
//   }
//   return { loaderData: s, errors: c };
// }
// function Nu(e, t, n, r) {
//   let i = K({}, t);
//   for (let o of n) {
//     let l = o.route.id;
//     if (
//       (t.hasOwnProperty(l)
//         ? t[l] !== void 0 && (i[l] = t[l])
//         : e[l] !== void 0 && o.route.loader && (i[l] = e[l]),
//       r && r.hasOwnProperty(l))
//     )
//       break;
//   }
//   return i;
// }
// function On(e, t) {
//   return (
//     (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
//       .reverse()
//       .find((r) => r.route.hasErrorBoundary === !0) || e[0]
//   );
// }
// function Mu(e) {
//   let t = e.find((n) => n.index || !n.path || n.path === "/") || {
//     id: "__shim-error-route__",
//   };
//   return {
//     matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
//     route: t,
//   };
// }
// function dt(e, t) {
//   let { pathname: n, routeId: r, method: i, type: o } = t === void 0 ? {} : t,
//     l = "Unknown Server Error",
//     a = "Unknown @remix-run/router error";
//   return (
//     e === 400
//       ? ((l = "Bad Request"),
//         i && n && r
//           ? (a =
//               "You made a " +
//               i +
//               ' request to "' +
//               n +
//               '" but ' +
//               ('did not provide a `loader` for route "' + r + '", ') +
//               "so there is no way to handle the request.")
//           : o === "defer-action" && (a = "defer() is not supported in actions"))
//       : e === 403
//       ? ((l = "Forbidden"),
//         (a = 'Route "' + r + '" does not match URL "' + n + '"'))
//       : e === 404
//       ? ((l = "Not Found"), (a = 'No route matches URL "' + n + '"'))
//       : e === 405 &&
//         ((l = "Method Not Allowed"),
//         i && n && r
//           ? (a =
//               "You made a " +
//               i.toUpperCase() +
//               ' request to "' +
//               n +
//               '" but ' +
//               ('did not provide an `action` for route "' + r + '", ') +
//               "so there is no way to handle the request.")
//           : i && (a = 'Invalid request method "' + i.toUpperCase() + '"')),
//     new na(e || 500, l, new Error(a), !0)
//   );
// }
// function Du(e) {
//   for (let t = e.length - 1; t >= 0; t--) {
//     let n = e[t];
//     if (Bn(n)) return n;
//   }
// }
// function of(e) {
//   let t = typeof e == "string" ? Mt(e) : e;
//   return Tt(K({}, t, { hash: "" }));
// }
// function Uv(e, t) {
//   return (
//     e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
//   );
// }
// function ln(e) {
//   return e.type === pe.deferred;
// }
// function Rr(e) {
//   return e.type === pe.error;
// }
// function Bn(e) {
//   return (e && e.type) === pe.redirect;
// }
// function Av(e) {
//   let t = e;
//   return (
//     t &&
//     typeof t == "object" &&
//     typeof t.data == "object" &&
//     typeof t.subscribe == "function" &&
//     typeof t.cancel == "function" &&
//     typeof t.resolveData == "function"
//   );
// }
// function Bv(e) {
//   return (
//     e != null &&
//     typeof e.status == "number" &&
//     typeof e.statusText == "string" &&
//     typeof e.headers == "object" &&
//     typeof e.body < "u"
//   );
// }
// function $v(e) {
//   return Lv.has(e.toLowerCase());
// }
// function wt(e) {
//   return Cv.has(e.toLowerCase());
// }
// async function Ou(e, t, n, r, i, o) {
//   for (let l = 0; l < n.length; l++) {
//     let a = n[l],
//       s = t[l];
//     if (!s) continue;
//     let c = e.find((u) => u.route.id === s.route.id),
//       d = c != null && !nf(c, s) && (o && o[s.route.id]) !== void 0;
//     ln(a) &&
//       (i || d) &&
//       (await lf(a, r, i).then((u) => {
//         u && (n[l] = u || n[l]);
//       }));
//   }
// }
// async function lf(e, t, n) {
//   if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
//     if (n)
//       try {
//         return { type: pe.data, data: e.deferredData.unwrappedData };
//       } catch (i) {
//         return { type: pe.error, error: i };
//       }
//     return { type: pe.data, data: e.deferredData.data };
//   }
// }
// function sf(e) {
//   return new URLSearchParams(e).getAll("index").some((t) => t === "");
// }
// function zu(e, t) {
//   let { route: n, pathname: r, params: i } = e;
//   return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
// }
// function rs(e, t) {
//   let n = typeof t == "string" ? Mt(t).search : t.search;
//   if (e[e.length - 1].route.index && sf(n || "")) return e[e.length - 1];
//   let r = _o(e);
//   return r[r.length - 1];
// }
// /**
//  * React Router v6.10.0
//  *
//  * Copyright (c) Remix Software Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE.md file in the root directory of this source tree.
//  *
//  * @license MIT
//  */ function Wv(e, t) {
//   return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
// }
// const Hv = typeof Object.is == "function" ? Object.is : Wv,
//   { useState: Vv, useEffect: Qv, useLayoutEffect: Kv, useDebugValue: Yv } = sl;
// function Gv(e, t, n) {
//   const r = t(),
//     [{ inst: i }, o] = Vv({ inst: { value: r, getSnapshot: t } });
//   return (
//     Kv(() => {
//       (i.value = r), (i.getSnapshot = t), ll(i) && o({ inst: i });
//     }, [e, r, t]),
//     Qv(
//       () => (
//         ll(i) && o({ inst: i }),
//         e(() => {
//           ll(i) && o({ inst: i });
//         })
//       ),
//       [e]
//     ),
//     Yv(r),
//     r
//   );
// }
// function ll(e) {
//   const t = e.getSnapshot,
//     n = e.value;
//   try {
//     const r = t();
//     return !Hv(n, r);
//   } catch {
//     return !0;
//   }
// }
// function Xv(e, t, n) {
//   return t();
// }
// const Zv =
//     typeof window < "u" &&
//     typeof window.document < "u" &&
//     typeof window.document.createElement < "u",
//   Jv = !Zv,
//   qv = Jv ? Xv : Gv,
//   bv = "useSyncExternalStore" in sl ? ((e) => e.useSyncExternalStore)(sl) : qv,
//   ra = D.createContext(null),
//   ia = D.createContext(null),
//   ei = D.createContext(null),
//   ko = D.createContext(null),
//   mn = D.createContext({ outlet: null, matches: [] }),
//   af = D.createContext(null);
// function is() {
//   return (
//     (is = Object.assign
//       ? Object.assign.bind()
//       : function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var n = arguments[t];
//             for (var r in n)
//               Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
//           }
//           return e;
//         }),
//     is.apply(this, arguments)
//   );
// }
// function em(e, t) {
//   let { relative: n } = t === void 0 ? {} : t;
//   ti() || V(!1);
//   let { basename: r, navigator: i } = D.useContext(ei),
//     { hash: o, pathname: l, search: a } = uf(e, { relative: n }),
//     s = l;
//   return (
//     r !== "/" && (s = l === "/" ? r : xt([r, l])),
//     i.createHref({ pathname: s, search: a, hash: o })
//   );
// }
// function ti() {
//   return D.useContext(ko) != null;
// }
// function Eo() {
//   return ti() || V(!1), D.useContext(ko).location;
// }
// function tm() {
//   ti() || V(!1);
//   let { basename: e, navigator: t } = D.useContext(ei),
//     { matches: n } = D.useContext(mn),
//     { pathname: r } = Eo(),
//     i = JSON.stringify(_o(n).map((a) => a.pathnameBase)),
//     o = D.useRef(!1);
//   return (
//     D.useEffect(() => {
//       o.current = !0;
//     }),
//     D.useCallback(
//       function (a, s) {
//         if ((s === void 0 && (s = {}), !o.current)) return;
//         if (typeof a == "number") {
//           t.go(a);
//           return;
//         }
//         let c = ta(a, JSON.parse(i), r, s.relative === "path");
//         e !== "/" &&
//           (c.pathname = c.pathname === "/" ? e : xt([e, c.pathname])),
//           (s.replace ? t.replace : t.push)(c, s.state, s);
//       },
//       [e, t, i, r]
//     )
//   );
// }
// const nm = D.createContext(null);
// function rm(e) {
//   let t = D.useContext(mn).outlet;
//   return t && D.createElement(nm.Provider, { value: e }, t);
// }
// function uf(e, t) {
//   let { relative: n } = t === void 0 ? {} : t,
//     { matches: r } = D.useContext(mn),
//     { pathname: i } = Eo(),
//     o = JSON.stringify(_o(r).map((l) => l.pathnameBase));
//   return D.useMemo(() => ta(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
// }
// function im(e, t) {
//   ti() || V(!1);
//   let { navigator: n } = D.useContext(ei),
//     r = D.useContext(ia),
//     { matches: i } = D.useContext(mn),
//     o = i[i.length - 1],
//     l = o ? o.params : {};
//   o && o.pathname;
//   let a = o ? o.pathnameBase : "/";
//   o && o.route;
//   let s = Eo(),
//     c;
//   if (t) {
//     var d;
//     let S = typeof t == "string" ? Mt(t) : t;
//     a === "/" || ((d = S.pathname) != null && d.startsWith(a)) || V(!1),
//       (c = S);
//   } else c = s;
//   let u = c.pathname || "/",
//     f = a === "/" ? u : u.slice(a.length) || "/",
//     p = Dn(e, { pathname: f }),
//     g = am(
//       p &&
//         p.map((S) =>
//           Object.assign({}, S, {
//             params: Object.assign({}, l, S.params),
//             pathname: xt([
//               a,
//               n.encodeLocation
//                 ? n.encodeLocation(S.pathname).pathname
//                 : S.pathname,
//             ]),
//             pathnameBase:
//               S.pathnameBase === "/"
//                 ? a
//                 : xt([
//                     a,
//                     n.encodeLocation
//                       ? n.encodeLocation(S.pathnameBase).pathname
//                       : S.pathnameBase,
//                   ]),
//           })
//         ),
//       i,
//       r || void 0
//     );
//   return t && g
//     ? D.createElement(
//         ko.Provider,
//         {
//           value: {
//             location: is(
//               {
//                 pathname: "/",
//                 search: "",
//                 hash: "",
//                 state: null,
//                 key: "default",
//               },
//               c
//             ),
//             navigationType: de.Pop,
//           },
//         },
//         g
//       )
//     : g;
// }
// function om() {
//   let e = hf(),
//     t = qd(e)
//       ? e.status + " " + e.statusText
//       : e instanceof Error
//       ? e.message
//       : JSON.stringify(e),
//     n = e instanceof Error ? e.stack : null,
//     i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
//     o = null;
//   return D.createElement(
//     D.Fragment,
//     null,
//     D.createElement("h2", null, "Unexpected Application Error!"),
//     D.createElement("h3", { style: { fontStyle: "italic" } }, t),
//     n ? D.createElement("pre", { style: i }, n) : null,
//     o
//   );
// }
// class lm extends D.Component {
//   constructor(t) {
//     super(t), (this.state = { location: t.location, error: t.error });
//   }
//   static getDerivedStateFromError(t) {
//     return { error: t };
//   }
//   static getDerivedStateFromProps(t, n) {
//     return n.location !== t.location
//       ? { error: t.error, location: t.location }
//       : { error: t.error || n.error, location: n.location };
//   }
//   componentDidCatch(t, n) {
//     console.error(
//       "React Router caught the following error during render",
//       t,
//       n
//     );
//   }
//   render() {
//     return this.state.error
//       ? D.createElement(
//           mn.Provider,
//           { value: this.props.routeContext },
//           D.createElement(af.Provider, {
//             value: this.state.error,
//             children: this.props.component,
//           })
//         )
//       : this.props.children;
//   }
// }
// function sm(e) {
//   let { routeContext: t, match: n, children: r } = e,
//     i = D.useContext(ra);
//   return (
//     i &&
//       i.static &&
//       i.staticContext &&
//       (n.route.errorElement || n.route.ErrorBoundary) &&
//       (i.staticContext._deepestRenderedBoundaryId = n.route.id),
//     D.createElement(mn.Provider, { value: t }, r)
//   );
// }
// function am(e, t, n) {
//   if ((t === void 0 && (t = []), e == null))
//     if (n != null && n.errors) e = n.matches;
//     else return null;
//   let r = e,
//     i = n == null ? void 0 : n.errors;
//   if (i != null) {
//     let o = r.findIndex(
//       (l) => l.route.id && (i == null ? void 0 : i[l.route.id])
//     );
//     o >= 0 || V(!1), (r = r.slice(0, Math.min(r.length, o + 1)));
//   }
//   return r.reduceRight((o, l, a) => {
//     let s = l.route.id ? (i == null ? void 0 : i[l.route.id]) : null,
//       c = null;
//     n &&
//       (l.route.ErrorBoundary
//         ? (c = D.createElement(l.route.ErrorBoundary, null))
//         : l.route.errorElement
//         ? (c = l.route.errorElement)
//         : (c = D.createElement(om, null)));
//     let d = t.concat(r.slice(0, a + 1)),
//       u = () => {
//         let f = o;
//         return (
//           s
//             ? (f = c)
//             : l.route.Component
//             ? (f = D.createElement(l.route.Component, null))
//             : l.route.element && (f = l.route.element),
//           D.createElement(sm, {
//             match: l,
//             routeContext: { outlet: o, matches: d },
//             children: f,
//           })
//         );
//       };
//     return n && (l.route.ErrorBoundary || l.route.errorElement || a === 0)
//       ? D.createElement(lm, {
//           location: n.location,
//           component: c,
//           error: s,
//           children: u(),
//           routeContext: { outlet: null, matches: d },
//         })
//       : u();
//   }, null);
// }
// var ju;
// (function (e) {
//   (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
// })(ju || (ju = {}));
// var Xn;
// (function (e) {
//   (e.UseBlocker = "useBlocker"),
//     (e.UseLoaderData = "useLoaderData"),
//     (e.UseActionData = "useActionData"),
//     (e.UseRouteError = "useRouteError"),
//     (e.UseNavigation = "useNavigation"),
//     (e.UseRouteLoaderData = "useRouteLoaderData"),
//     (e.UseMatches = "useMatches"),
//     (e.UseRevalidator = "useRevalidator");
// })(Xn || (Xn = {}));
// function cf(e) {
//   let t = D.useContext(ia);
//   return t || V(!1), t;
// }
// function um(e) {
//   let t = D.useContext(mn);
//   return t || V(!1), t;
// }
// function df(e) {
//   let t = um(),
//     n = t.matches[t.matches.length - 1];
//   return n.route.id || V(!1), n.route.id;
// }
// function ff() {
//   let e = cf(Xn.UseLoaderData),
//     t = df(Xn.UseLoaderData);
//   if (e.errors && e.errors[t] != null) {
//     console.error(
//       "You cannot `useLoaderData` in an errorElement (routeId: " + t + ")"
//     );
//     return;
//   }
//   return e.loaderData[t];
// }
// function hf() {
//   var e;
//   let t = D.useContext(af),
//     n = cf(Xn.UseRouteError),
//     r = df(Xn.UseRouteError);
//   return t || ((e = n.errors) == null ? void 0 : e[r]);
// }
// function cm(e) {
//   let { fallbackElement: t, router: n } = e,
//     r = D.useCallback(() => n.state, [n]),
//     i = bv(n.subscribe, r, r),
//     o = D.useMemo(
//       () => ({
//         createHref: n.createHref,
//         encodeLocation: n.encodeLocation,
//         go: (s) => n.navigate(s),
//         push: (s, c, d) =>
//           n.navigate(s, {
//             state: c,
//             preventScrollReset: d == null ? void 0 : d.preventScrollReset,
//           }),
//         replace: (s, c, d) =>
//           n.navigate(s, {
//             replace: !0,
//             state: c,
//             preventScrollReset: d == null ? void 0 : d.preventScrollReset,
//           }),
//       }),
//       [n]
//     ),
//     l = n.basename || "/",
//     a = D.useMemo(
//       () => ({ router: n, navigator: o, static: !1, basename: l }),
//       [n, o, l]
//     );
//   return D.createElement(
//     D.Fragment,
//     null,
//     D.createElement(
//       ra.Provider,
//       { value: a },
//       D.createElement(
//         ia.Provider,
//         { value: i },
//         D.createElement(
//           hm,
//           {
//             basename: n.basename,
//             location: n.state.location,
//             navigationType: n.state.historyAction,
//             navigator: o,
//           },
//           n.state.initialized ? D.createElement(pm, null) : t
//         )
//       )
//     ),
//     null
//   );
// }
// function dm(e) {
//   return rm(e.context);
// }
// function fm(e) {
//   V(!1);
// }
// function hm(e) {
//   let {
//     basename: t = "/",
//     children: n = null,
//     location: r,
//     navigationType: i = de.Pop,
//     navigator: o,
//     static: l = !1,
//   } = e;
//   ti() && V(!1);
//   let a = t.replace(/^\/*/, "/"),
//     s = D.useMemo(() => ({ basename: a, navigator: o, static: l }), [a, o, l]);
//   typeof r == "string" && (r = Mt(r));
//   let {
//       pathname: c = "/",
//       search: d = "",
//       hash: u = "",
//       state: f = null,
//       key: p = "default",
//     } = r,
//     g = D.useMemo(() => {
//       let S = br(c, a);
//       return S == null
//         ? null
//         : {
//             location: { pathname: S, search: d, hash: u, state: f, key: p },
//             navigationType: i,
//           };
//     }, [a, c, d, u, f, p, i]);
//   return g == null
//     ? null
//     : D.createElement(
//         ei.Provider,
//         { value: s },
//         D.createElement(ko.Provider, { children: n, value: g })
//       );
// }
// function pm(e) {
//   let { children: t, location: n } = e,
//     r = D.useContext(ra),
//     i = r && !t ? r.router.routes : os(t);
//   return im(i, n);
// }
// var Iu;
// (function (e) {
//   (e[(e.pending = 0)] = "pending"),
//     (e[(e.success = 1)] = "success"),
//     (e[(e.error = 2)] = "error");
// })(Iu || (Iu = {}));
// new Promise(() => {});
// function os(e, t) {
//   t === void 0 && (t = []);
//   let n = [];
//   return (
//     D.Children.forEach(e, (r, i) => {
//       if (!D.isValidElement(r)) return;
//       let o = [...t, i];
//       if (r.type === D.Fragment) {
//         n.push.apply(n, os(r.props.children, o));
//         return;
//       }
//       r.type !== fm && V(!1), !r.props.index || !r.props.children || V(!1);
//       let l = {
//         id: r.props.id || o.join("-"),
//         caseSensitive: r.props.caseSensitive,
//         element: r.props.element,
//         Component: r.props.Component,
//         index: r.props.index,
//         path: r.props.path,
//         loader: r.props.loader,
//         action: r.props.action,
//         errorElement: r.props.errorElement,
//         ErrorBoundary: r.props.ErrorBoundary,
//         hasErrorBoundary:
//           r.props.ErrorBoundary != null || r.props.errorElement != null,
//         shouldRevalidate: r.props.shouldRevalidate,
//         handle: r.props.handle,
//         lazy: r.props.lazy,
//       };
//       r.props.children && (l.children = os(r.props.children, o)), n.push(l);
//     }),
//     n
//   );
// }
// function vm(e) {
//   return !!e.ErrorBoundary || !!e.errorElement;
// }
// /**
//  * React Router DOM v6.10.0
//  *
//  * Copyright (c) Remix Software Inc.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE.md file in the root directory of this source tree.
//  *
//  * @license MIT
//  */ function ro() {
//   return (
//     (ro = Object.assign
//       ? Object.assign.bind()
//       : function (e) {
//           for (var t = 1; t < arguments.length; t++) {
//             var n = arguments[t];
//             for (var r in n)
//               Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
//           }
//           return e;
//         }),
//     ro.apply(this, arguments)
//   );
// }
// function mm(e, t) {
//   if (e == null) return {};
//   var n = {},
//     r = Object.keys(e),
//     i,
//     o;
//   for (o = 0; o < r.length; o++)
//     (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
//   return n;
// }
// function ym(e) {
//   return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
// }
// function gm(e, t) {
//   return e.button === 0 && (!t || t === "_self") && !ym(e);
// }
// const wm = [
//   "onClick",
//   "relative",
//   "reloadDocument",
//   "replace",
//   "state",
//   "target",
//   "to",
//   "preventScrollReset",
// ];
// function Sm(e, t) {
//   return Ov({
//     basename: t == null ? void 0 : t.basename,
//     future: t == null ? void 0 : t.future,
//     history: tv({ window: t == null ? void 0 : t.window }),
//     hydrationData: (t == null ? void 0 : t.hydrationData) || _m(),
//     routes: e,
//     detectErrorBoundary: vm,
//   }).initialize();
// }
// function _m() {
//   var e;
//   let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
//   return t && t.errors && (t = ro({}, t, { errors: km(t.errors) })), t;
// }
// function km(e) {
//   if (!e) return null;
//   let t = Object.entries(e),
//     n = {};
//   for (let [r, i] of t)
//     if (i && i.__type === "RouteErrorResponse")
//       n[r] = new na(i.status, i.statusText, i.data, i.internal === !0);
//     else if (i && i.__type === "Error") {
//       let o = new Error(i.message);
//       (o.stack = ""), (n[r] = o);
//     } else n[r] = i;
//   return n;
// }
// const Em =
//     typeof window < "u" &&
//     typeof window.document < "u" &&
//     typeof window.document.createElement < "u",
//   xm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
//   Cm = D.forwardRef(function (t, n) {
//     let {
//         onClick: r,
//         relative: i,
//         reloadDocument: o,
//         replace: l,
//         state: a,
//         target: s,
//         to: c,
//         preventScrollReset: d,
//       } = t,
//       u = mm(t, wm),
//       { basename: f } = D.useContext(ei),
//       p,
//       g = !1;
//     if (typeof c == "string" && xm.test(c) && ((p = c), Em)) {
//       let h = new URL(window.location.href),
//         m = c.startsWith("//") ? new URL(h.protocol + c) : new URL(c),
//         _ = br(m.pathname, f);
//       m.origin === h.origin && _ != null
//         ? (c = _ + m.search + m.hash)
//         : (g = !0);
//     }
//     let S = em(c, { relative: i }),
//       y = Pm(c, {
//         replace: l,
//         state: a,
//         target: s,
//         preventScrollReset: d,
//         relative: i,
//       });
//     function v(h) {
//       r && r(h), h.defaultPrevented || y(h);
//     }
//     return D.createElement(
//       "a",
//       ro({}, u, { href: p || S, onClick: g || o ? r : v, ref: n, target: s })
//     );
//   });
// var Fu;
// (function (e) {
//   (e.UseScrollRestoration = "useScrollRestoration"),
//     (e.UseSubmitImpl = "useSubmitImpl"),
//     (e.UseFetcher = "useFetcher");
// })(Fu || (Fu = {}));
// var Uu;
// (function (e) {
//   (e.UseFetchers = "useFetchers"),
//     (e.UseScrollRestoration = "useScrollRestoration");
// })(Uu || (Uu = {}));
// function Pm(e, t) {
//   let {
//       target: n,
//       replace: r,
//       state: i,
//       preventScrollReset: o,
//       relative: l,
//     } = t === void 0 ? {} : t,
//     a = tm(),
//     s = Eo(),
//     c = uf(e, { relative: l });
//   return D.useCallback(
//     (d) => {
//       if (gm(d, n)) {
//         d.preventDefault();
//         let u = r !== void 0 ? r : Tt(s) === Tt(c);
//         a(e, { replace: u, state: i, preventScrollReset: o, relative: l });
//       }
//     },
//     [s, a, c, r, i, n, e, o, l]
//   );
// }
// const Lm = () =>
//     M("footer", {
//       className: "footer py-6",
//       children: M("div", {
//         className: "content has-text-centered",
//         children: ne("p", {
//           children: [
//             M("strong", { children: "Inventory" }),
//             " by",
//             " ",
//             M("a", {
//               href: "#",
//               title:
//                 "Google Developers Student Club Addis Ababa Science and Technology University",
//               children: "GDSC AASTU",
//             }),
//             ". The website content is licensed",
//             " ",
//             M("a", {
//               href: "http://creativecommons.org/licenses/by-nc-sa/4.0/",
//               children: "CC BY NC SA 4.0",
//             }),
//             ".",
//           ],
//         }),
//       }),
//     }),
//   Rm = () =>
//     M("header", {
//       className: "has-background-white",
//       children: ne("nav", {
//         className: "container level is-mobile p-4",
//         children: [
//           M("div", {
//             className: "level-left",
//             children: M("a", {
//               href: "/",
//               className: "level-item is-size-3",
//               children: "Inventory",
//             }),
//           }),
//           M("div", {
//             className: "level-right",
//             children: M("button", {
//               className: "button",
//               children: "Create Account",
//             }),
//           }),
//         ],
//       }),
//     }),
//   Tm = ({ children: e }) =>
//     ne("div", {
//       style: { display: "flex", flexDirection: "column", minHeight: "100vh" },
//       children: [
//         ne("div", {
//           style: { flex: 1 },
//           children: [M(Rm, {}), M("main", { children: e })],
//         }),
//         M(Lm, {}),
//       ],
//     }),
//   Nm = () => M(Tm, { children: M(dm, {}) });
// const Mm = () =>
//     ne("nav", {
//       className: "pagination",
//       role: "navigation",
//       "aria-label": "pagination",
//       children: [
//         M("a", {
//           className: "pagination-previous is-disabled",
//           title: "This is the first page",
//           children: "Previous",
//         }),
//         M("a", { className: "pagination-next", children: "Next page" }),
//         ne("ul", {
//           className: "pagination-list",
//           children: [
//             M("li", {
//               children: M("a", {
//                 className: "pagination-link is-current",
//                 "aria-label": "Page 1",
//                 "aria-current": "page",
//                 children: "1",
//               }),
//             }),
//             M("li", {
//               children: M("a", {
//                 className: "pagination-link",
//                 "aria-label": "Goto page 2",
//                 children: "2",
//               }),
//             }),
//             M("li", {
//               children: M("a", {
//                 className: "pagination-link",
//                 "aria-label": "Goto page 3",
//                 children: "3",
//               }),
//             }),
//           ],
//         }),
//       ],
//     }),
//   pf = {}.VITE_API;
// async function Dm() {
//   return { products: await (await fetch(`${pf}/products`)).json() };
// }
// const Om = () => {
//     const { products: e } = ff(),
//       t = e.reduce((n, r) => n + r.unitPrice * r.stock, 0);
//     return ne(pa, {
//       children: [
//         M("section", {
//           className: "hero is-info is-light",
//           children: M("div", {
//             className: "hero-body",
//             children: ne("div", {
//               className: "level container is-mobile",
//               children: [
//                 M("div", {
//                   className: "level-left is-flex-grow-1",
//                   children: M("p", {
//                     className: "title is-1",
//                     children: "Products",
//                   }),
//                 }),
//                 ne("div", {
//                   className: "level-right",
//                   children: [
//                     M("div", {
//                       className: "level-item mr-6",
//                       children: ne("div", {
//                         children: [
//                           M("h3", {
//                             className: "heading is-size-4 m-0",
//                             children: "ITEMS",
//                           }),
//                           M("h1", {
//                             className: "title is-1",
//                             children: e.length,
//                           }),
//                         ],
//                       }),
//                     }),
//                     M("div", {
//                       className: "level-item",
//                       children: ne("div", {
//                         children: [
//                           M("h3", {
//                             className: "heading is-size-4 m-0",
//                             children: "Total Price",
//                           }),
//                           M("h1", { className: "title is-1", children: t }),
//                         ],
//                       }),
//                     }),
//                   ],
//                 }),
//               ],
//             }),
//           }),
//         }),
//         M("div", {
//           className: "container p-6",
//           children:
//             e.length === 0
//               ? M("p", {
//                   children: "No products added. Be the first one to add",
//                 })
//               : ne(pa, {
//                   children: [
//                     ne("table", {
//                       className: "table is-fullwidth is-hoverable is-striped",
//                       children: [
//                         M("thead", {
//                           children: ne("tr", {
//                             children: [
//                               M("th", {}),
//                               M("th", { children: "Name" }),
//                               M("th", {
//                                 className: "has-text-right",
//                                 children: "Unit Price(USD)",
//                               }),
//                               M("th", {
//                                 className: "has-text-right",
//                                 children: "In Stock",
//                               }),
//                               M("th", { children: "Category" }),
//                             ],
//                           }),
//                         }),
//                         M("tbody", {
//                           children: e.map((n, r) =>
//                             ne(
//                               "tr",
//                               {
//                                 children: [
//                                   M("td", {
//                                     className: "has-text-right",
//                                     children: r + 1,
//                                   }),
//                                   M("td", {
//                                     children: M(Cm, {
//                                       to: `/${n.id}`,
//                                       children: n.name,
//                                     }),
//                                   }),
//                                   ne("td", {
//                                     className: "has-text-right",
//                                     children: ["$", n.unitPrice],
//                                   }),
//                                   M("td", {
//                                     className: "has-text-right",
//                                     children: n.stock,
//                                   }),
//                                   M("td", { children: n.category }),
//                                 ],
//                               },
//                               n.id
//                             )
//                           ),
//                         }),
//                       ],
//                     }),
//                     M(Mm, {}),
//                   ],
//                 }),
//         }),
//       ],
//     });
//   },
//   zm = () => M(Om, {}),
//   jm = () => {
//     const e = hf();
//     return (
//       console.log(e),
//       M("div", {
//         className: "hero  is-fullheight",
//         children: M("div", {
//           className: "hero-body content is-align-self-center has-text-centered",
//           children: ne("div", {
//             children: [
//               M("h1", { children: "Oops! " }),
//               M("p", { children: "Sorry, an unexpected error has occurred." }),
//               ne("h2", {
//                 className: "has-text-weight-light mt-0",
//                 children: [
//                   e.status,
//                   " | ",
//                   M("i", { children: e.statusText || e.message }),
//                 ],
//               }),
//             ],
//           }),
//         }),
//       })
//     );
//   };
// var ls = {},
//   Im = {
//     get exports() {
//       return ls;
//     },
//     set exports(e) {
//       ls = e;
//     },
//   };
// (function (e, t) {
//   (function (n, r) {
//     e.exports = r();
//   })(typeof self < "u" ? self : Lf, function () {
//     return (function (n) {
//       var r = {};
//       function i(o) {
//         if (r[o]) return r[o].exports;
//         var l = (r[o] = { i: o, l: !1, exports: {} });
//         return n[o].call(l.exports, l, l.exports, i), (l.l = !0), l.exports;
//       }
//       return (
//         (i.m = n),
//         (i.c = r),
//         (i.d = function (o, l, a) {
//           i.o(o, l) ||
//             Object.defineProperty(o, l, {
//               configurable: !1,
//               enumerable: !0,
//               get: a,
//             });
//         }),
//         (i.n = function (o) {
//           var l =
//             o && o.__esModule
//               ? function () {
//                   return o.default;
//                 }
//               : function () {
//                   return o;
//                 };
//           return i.d(l, "a", l), l;
//         }),
//         (i.o = function (o, l) {
//           return Object.prototype.hasOwnProperty.call(o, l);
//         }),
//         (i.p = ""),
//         i((i.s = 5))
//       );
//     })([
//       function (n, r, i) {
//         i.d(r, "d", function () {
//           return l;
//         }),
//           i.d(r, "e", function () {
//             return a;
//           }),
//           i.d(r, "b", function () {
//             return s;
//           }),
//           i.d(r, "c", function () {
//             return c;
//           }),
//           i.d(r, "a", function () {
//             return d;
//           });
//         var o = i(2),
//           l = function (u, f) {
//             (f = Array.isArray(f) ? f : f.split(" ")).forEach(function (p) {
//               u.classList.remove(p);
//             });
//           },
//           a = function (u) {
//             return u.getBoundingClientRect().width || u.offsetWidth;
//           },
//           s = function (u) {
//             return u.getBoundingClientRect().height || u.offsetHeight;
//           },
//           c = function (u) {
//             var f =
//                 1 < arguments.length && arguments[1] !== void 0 && arguments[1],
//               p = u.offsetHeight;
//             if (f) {
//               var g = window.getComputedStyle(u);
//               p += parseInt(g.marginTop) + parseInt(g.marginBottom);
//             }
//             return p;
//           },
//           d = function (u, f) {
//             if (!f) return window.getComputedStyle(u);
//             if (Object(o.b)(f)) {
//               var p = "";
//               Object.keys(f).forEach(function (g) {
//                 p += g + ": " + f[g] + ";";
//               }),
//                 (u.style.cssText += p);
//             }
//           };
//       },
//       function (n, r, i) {
//         r.a = function () {
//           var o = !1;
//           try {
//             var l = Object.defineProperty({}, "passive", {
//               get: function () {
//                 o = !0;
//               },
//             });
//             window.addEventListener("testPassive", null, l),
//               window.removeEventListener("testPassive", null, l);
//           } catch {}
//           return o;
//         };
//       },
//       function (n, r, i) {
//         i.d(r, "a", function () {
//           return l;
//         }),
//           i.d(r, "c", function () {
//             return a;
//           }),
//           i.d(r, "b", function () {
//             return s;
//           });
//         var o =
//             typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
//               ? function (c) {
//                   return typeof c;
//                 }
//               : function (c) {
//                   return c &&
//                     typeof Symbol == "function" &&
//                     c.constructor === Symbol &&
//                     c !== Symbol.prototype
//                     ? "symbol"
//                     : typeof c;
//                 },
//           l = function (c) {
//             return typeof c == "function";
//           },
//           a = function (c) {
//             return (
//               typeof c == "string" ||
//               (!!c &&
//                 (c === void 0 ? "undefined" : o(c)) === "object" &&
//                 Object.prototype.toString.call(c) === "[object String]")
//             );
//           },
//           s = function (c) {
//             return (
//               (typeof c == "function" ||
//                 ((c === void 0 ? "undefined" : o(c)) === "object" && !!c)) &&
//               !Array.isArray(c)
//             );
//           };
//       },
//       function (n, r, i) {
//         var o = (function () {
//             function a(s, c) {
//               for (var d = 0; d < c.length; d++) {
//                 var u = c[d];
//                 (u.enumerable = u.enumerable || !1),
//                   (u.configurable = !0),
//                   "value" in u && (u.writable = !0),
//                   Object.defineProperty(s, u.key, u);
//               }
//             }
//             return function (s, c, d) {
//               return c && a(s.prototype, c), d && a(s, d), s;
//             };
//           })(),
//           l = (function () {
//             function a() {
//               var s =
//                 0 < arguments.length && arguments[0] !== void 0
//                   ? arguments[0]
//                   : [];
//               (function (c, d) {
//                 if (!(c instanceof d))
//                   throw new TypeError("Cannot call a class as a function");
//               })(this, a),
//                 (this.events = new Map(s));
//             }
//             return (
//               o(a, [
//                 {
//                   key: "on",
//                   value: function (s, c) {
//                     var d = this;
//                     return (
//                       this.events.set(
//                         s,
//                         [].concat(
//                           (function (u) {
//                             if (Array.isArray(u)) {
//                               for (
//                                 var f = 0, p = Array(u.length);
//                                 f < u.length;
//                                 f++
//                               )
//                                 p[f] = u[f];
//                               return p;
//                             }
//                             return Array.from(u);
//                           })(this.events.has(s) ? this.events.get(s) : []),
//                           [c]
//                         )
//                       ),
//                       function () {
//                         return d.events.set(
//                           s,
//                           d.events.get(s).filter(function (u) {
//                             return u !== c;
//                           })
//                         );
//                       }
//                     );
//                   },
//                 },
//                 {
//                   key: "emit",
//                   value: function (s) {
//                     for (
//                       var c = arguments.length,
//                         d = Array(1 < c ? c - 1 : 0),
//                         u = 1;
//                       u < c;
//                       u++
//                     )
//                       d[u - 1] = arguments[u];
//                     return (
//                       this.events.has(s) &&
//                       this.events.get(s).map(function (f) {
//                         return f.apply(void 0, d);
//                       })
//                     );
//                   },
//                 },
//               ]),
//               a
//             );
//           })();
//         r.a = l;
//       },
//       function (n, r, i) {
//         var o = (function () {
//             function a(s, c) {
//               for (var d = 0; d < c.length; d++) {
//                 var u = c[d];
//                 (u.enumerable = u.enumerable || !1),
//                   (u.configurable = !0),
//                   "value" in u && (u.writable = !0),
//                   Object.defineProperty(s, u.key, u);
//               }
//             }
//             return function (s, c, d) {
//               return c && a(s.prototype, c), d && a(s, d), s;
//             };
//           })(),
//           l = (function () {
//             function a() {
//               var s =
//                   0 < arguments.length && arguments[0] !== void 0
//                     ? arguments[0]
//                     : 0,
//                 c =
//                   1 < arguments.length && arguments[1] !== void 0
//                     ? arguments[1]
//                     : 0;
//               (function (d, u) {
//                 if (!(d instanceof u))
//                   throw new TypeError("Cannot call a class as a function");
//               })(this, a),
//                 (this._x = s),
//                 (this._y = c);
//             }
//             return (
//               o(a, [
//                 {
//                   key: "add",
//                   value: function (s) {
//                     return new a(this._x + s._x, this._y + s._y);
//                   },
//                 },
//                 {
//                   key: "sub",
//                   value: function (s) {
//                     return new a(this._x - s._x, this._y - s._y);
//                   },
//                 },
//                 {
//                   key: "distance",
//                   value: function (s) {
//                     var c = this._x - s._x,
//                       d = this._y - s._y;
//                     return Math.sqrt(Math.pow(c, 2) + Math.pow(d, 2));
//                   },
//                 },
//                 {
//                   key: "max",
//                   value: function (s) {
//                     return new a(
//                       Math.max(this._x, s._x),
//                       Math.max(this._y, s._y)
//                     );
//                   },
//                 },
//                 {
//                   key: "equals",
//                   value: function (s) {
//                     return (
//                       this == s ||
//                       (!(!s || s == null) && this._x == s._x && this._y == s._y)
//                     );
//                   },
//                 },
//                 {
//                   key: "inside",
//                   value: function (s, c) {
//                     return (
//                       this._x >= s._x &&
//                       this._x <= c._x &&
//                       this._y >= s._y &&
//                       this._y <= c._y
//                     );
//                   },
//                 },
//                 {
//                   key: "constrain",
//                   value: function (s, c) {
//                     if (s._x > c._x || s._y > c._y) return this;
//                     var d = this._x,
//                       u = this._y;
//                     return (
//                       s._x !== null && (d = Math.max(d, s._x)),
//                       c._x !== null && (d = Math.min(d, c._x)),
//                       s._y !== null && (u = Math.max(u, s._y)),
//                       c._y !== null && (u = Math.min(u, c._y)),
//                       new a(d, u)
//                     );
//                   },
//                 },
//                 {
//                   key: "reposition",
//                   value: function (s) {
//                     (s.style.top = this._y + "px"),
//                       (s.style.left = this._x + "px");
//                   },
//                 },
//                 {
//                   key: "toString",
//                   value: function () {
//                     return "(" + this._x + "," + this._y + ")";
//                   },
//                 },
//                 {
//                   key: "x",
//                   get: function () {
//                     return this._x;
//                   },
//                   set: function () {
//                     var s =
//                       0 < arguments.length && arguments[0] !== void 0
//                         ? arguments[0]
//                         : 0;
//                     return (this._x = s), this;
//                   },
//                 },
//                 {
//                   key: "y",
//                   get: function () {
//                     return this._y;
//                   },
//                   set: function () {
//                     var s =
//                       0 < arguments.length && arguments[0] !== void 0
//                         ? arguments[0]
//                         : 0;
//                     return (this._y = s), this;
//                   },
//                 },
//               ]),
//               a
//             );
//           })();
//         r.a = l;
//       },
//       function (n, r, i) {
//         Object.defineProperty(r, "__esModule", { value: !0 });
//         var o = i(6),
//           l = i(0),
//           a = i(2),
//           s = i(3),
//           c = i(7),
//           d = i(9),
//           u = i(10),
//           f = i(11),
//           p = i(13),
//           g = i(15),
//           S = i(18),
//           y = i(19),
//           v = i(22),
//           h = i(23),
//           m = i(24),
//           _ =
//             Object.assign ||
//             function (R) {
//               for (var E = 1; E < arguments.length; E++) {
//                 var N = arguments[E];
//                 for (var L in N)
//                   Object.prototype.hasOwnProperty.call(N, L) && (R[L] = N[L]);
//               }
//               return R;
//             },
//           x = (function () {
//             function R(E, N) {
//               for (var L = 0; L < N.length; L++) {
//                 var A = N[L];
//                 (A.enumerable = A.enumerable || !1),
//                   (A.configurable = !0),
//                   "value" in A && (A.writable = !0),
//                   Object.defineProperty(E, A.key, A);
//               }
//             }
//             return function (E, N, L) {
//               return N && R(E.prototype, N), L && R(E, L), E;
//             };
//           })(),
//           T = (function (R) {
//             function E(N) {
//               var L =
//                 1 < arguments.length && arguments[1] !== void 0
//                   ? arguments[1]
//                   : {};
//               (function (ie, b) {
//                 if (!(ie instanceof b))
//                   throw new TypeError("Cannot call a class as a function");
//               })(this, E);
//               var A = (function (ie, b) {
//                 if (!ie)
//                   throw new ReferenceError(
//                     "this hasn't been initialised - super() hasn't been called"
//                   );
//                 return !b || (typeof b != "object" && typeof b != "function")
//                   ? ie
//                   : b;
//               })(this, (E.__proto__ || Object.getPrototypeOf(E)).call(this));
//               if (
//                 ((A.element = Object(a.c)(N) ? document.querySelector(N) : N),
//                 !A.element)
//               )
//                 throw new Error(
//                   "An invalid selector or non-DOM node has been provided."
//                 );
//               A._clickEvents = ["click", "touch"];
//               var xe = A.element.dataset
//                 ? Object.keys(A.element.dataset)
//                     .filter(function (ie) {
//                       return Object.keys(v.a).includes(ie);
//                     })
//                     .reduce(function (ie, b) {
//                       return _(
//                         {},
//                         ie,
//                         ((he = {}),
//                         (Ke = b),
//                         (vt = A.element.dataset[b]),
//                         Ke in he
//                           ? Object.defineProperty(he, Ke, {
//                               value: vt,
//                               enumerable: !0,
//                               configurable: !0,
//                               writable: !0,
//                             })
//                           : (he[Ke] = vt),
//                         he)
//                       );
//                       var he, Ke, vt;
//                     }, {})
//                 : {};
//               return (
//                 (A.options = _({}, v.a, L, xe)),
//                 (A._id = Object(o.a)("slider")),
//                 (A.onShow = A.onShow.bind(A)),
//                 A._init(),
//                 A
//               );
//             }
//             return (
//               (function (N, L) {
//                 if (typeof L != "function" && L !== null)
//                   throw new TypeError(
//                     "Super expression must either be null or a function, not " +
//                       typeof L
//                   );
//                 (N.prototype = Object.create(L && L.prototype, {
//                   constructor: {
//                     value: N,
//                     enumerable: !1,
//                     writable: !0,
//                     configurable: !0,
//                   },
//                 })),
//                   L &&
//                     (Object.setPrototypeOf
//                       ? Object.setPrototypeOf(N, L)
//                       : (N.__proto__ = L));
//               })(E, s.a),
//               x(
//                 E,
//                 [
//                   {
//                     key: "_init",
//                     value: function () {
//                       return (
//                         (this._items = Array.from(this.element.children)),
//                         (this._breakpoint = new d.a(this)),
//                         (this._autoplay = new c.a(this)),
//                         (this._navigation = new p.a(this)),
//                         (this._pagination = new g.a(this)),
//                         (this._infinite = new u.a(this)),
//                         (this._loop = new f.a(this)),
//                         (this._swipe = new S.a(this)),
//                         this._build(),
//                         Object(a.a)(this.options.onReady) &&
//                           this.options.onReady(this),
//                         this
//                       );
//                     },
//                   },
//                   {
//                     key: "_build",
//                     value: function () {
//                       var N = this;
//                       (this.node = document
//                         .createRange()
//                         .createContextualFragment(Object(h.a)(this.id))),
//                         (this._ui = {
//                           wrapper: this.node.firstChild,
//                           container:
//                             this.node.querySelector(".slider-container"),
//                         }),
//                         this.element.appendChild(this.node),
//                         this._ui.wrapper.classList.add("is-loading"),
//                         (this._ui.container.style.opacity = 0),
//                         (this._transitioner = new y.a(this)),
//                         (this._slides = this._items.map(function (L, A) {
//                           return N._createSlide(L, A);
//                         })),
//                         this.reset(),
//                         this._bindEvents(),
//                         (this._ui.container.style.opacity = 1),
//                         this._ui.wrapper.classList.remove("is-loading");
//                     },
//                   },
//                   {
//                     key: "_bindEvents",
//                     value: function () {
//                       this.on("show", this.onShow);
//                     },
//                   },
//                   {
//                     key: "_unbindEvents",
//                     value: function () {
//                       this.off("show", this.onShow);
//                     },
//                   },
//                   {
//                     key: "_createSlide",
//                     value: function (N, L) {
//                       var A = document
//                         .createRange()
//                         .createContextualFragment(Object(m.a)()).firstChild;
//                       return (A.dataset.sliderIndex = L), A.appendChild(N), A;
//                     },
//                   },
//                   {
//                     key: "_setDimensions",
//                     value: function () {
//                       var N = this;
//                       this.options.vertical
//                         ? ((this._ui.wrapper.style.height =
//                             Object(l.c)(this._slides[0]) * this.slidesToShow),
//                           this.options.centerMode &&
//                             (this._ui.wrapper.style.padding =
//                               this.options.centerPadding + " 0px"))
//                         : this.options.centerMode &&
//                           (this._ui.wrapper.style.padding =
//                             "0px " + this.options.centerPadding),
//                         (this._wrapperWidth = Object(l.e)(this._ui.wrapper)),
//                         (this._wrapperHeight = Object(l.c)(this._ui.wrapper)),
//                         this.options.vertical
//                           ? ((this._slideWidth = Math.ceil(this._wrapperWidth)),
//                             (this._containerHeight = Math.ceil(
//                               Object(l.c)(this._slides[0]) * this._slides.length
//                             )),
//                             (this._ui.container.style.height =
//                               this._containerHeight + "px"))
//                           : ((this._slideWidth = Math.ceil(
//                               this._wrapperWidth / this.slidesToShow
//                             )),
//                             (this._containerWidth = Math.ceil(
//                               this._slideWidth * this._slides.length
//                             )),
//                             (this._ui.container.style.width =
//                               this._containerWidth + "px")),
//                         this._slides.forEach(function (L) {
//                           L.style.width = N._slideWidth + "px";
//                         });
//                     },
//                   },
//                   {
//                     key: "_setHeight",
//                     value: function () {
//                       this.options.effect !== "translate" &&
//                         (this._ui.container.style.height =
//                           Object(l.c)(this._slides[this.state.index]) + "px");
//                     },
//                   },
//                   {
//                     key: "_setClasses",
//                     value: function () {
//                       var N = this;
//                       this._slides.forEach(function (L) {
//                         Object(l.d)(
//                           L,
//                           "is-active is-current is-slide-previous is-slide-next"
//                         ),
//                           Math.abs((N.state.index - 1) % N.state.length) ===
//                             parseInt(L.dataset.sliderIndex, 10) &&
//                             L.classList.add("is-slide-previous"),
//                           Math.abs(N.state.index % N.state.length) ===
//                             parseInt(L.dataset.sliderIndex, 10) &&
//                             L.classList.add("is-current"),
//                           Math.abs((N.state.index + 1) % N.state.length) ===
//                             parseInt(L.dataset.sliderIndex, 10) &&
//                             L.classList.add("is-slide-next");
//                       });
//                     },
//                   },
//                   {
//                     key: "onShow",
//                     value: function (N) {
//                       this._navigation.refresh(),
//                         this._pagination.refresh(),
//                         this._setClasses();
//                     },
//                   },
//                   {
//                     key: "next",
//                     value: function () {
//                       !this.options.loop &&
//                       !this.options.infinite &&
//                       this.state.index + this.slidesToScroll >
//                         this.state.length - this.slidesToShow &&
//                       !this.options.centerMode
//                         ? (this.state.next = this.state.index)
//                         : (this.state.next =
//                             this.state.index + this.slidesToScroll),
//                         this.show();
//                     },
//                   },
//                   {
//                     key: "previous",
//                     value: function () {
//                       this.options.loop ||
//                       this.options.infinite ||
//                       this.state.index !== 0
//                         ? (this.state.next =
//                             this.state.index - this.slidesToScroll)
//                         : (this.state.next = this.state.index),
//                         this.show();
//                     },
//                   },
//                   {
//                     key: "start",
//                     value: function () {
//                       this._autoplay.start();
//                     },
//                   },
//                   {
//                     key: "pause",
//                     value: function () {
//                       this._autoplay.pause();
//                     },
//                   },
//                   {
//                     key: "stop",
//                     value: function () {
//                       this._autoplay.stop();
//                     },
//                   },
//                   {
//                     key: "show",
//                     value: function (N) {
//                       var L =
//                         1 < arguments.length &&
//                         arguments[1] !== void 0 &&
//                         arguments[1];
//                       !this.state.length ||
//                         this.state.length <= this.slidesToShow ||
//                         (typeof N == "Number" && (this.state.next = N),
//                         this.options.loop && this._loop.apply(),
//                         this.options.infinite && this._infinite.apply(),
//                         this.state.index !== this.state.next &&
//                           (this.emit("before:show", this.state),
//                           this._transitioner.apply(
//                             L,
//                             this._setHeight.bind(this)
//                           ),
//                           this.emit("after:show", this.state),
//                           this.emit("show", this)));
//                     },
//                   },
//                   {
//                     key: "reset",
//                     value: function () {
//                       var N = this;
//                       (this.state = {
//                         length: this._items.length,
//                         index: Math.abs(this.options.initialSlide),
//                         next: Math.abs(this.options.initialSlide),
//                         prev: void 0,
//                       }),
//                         this.options.loop &&
//                           this.options.infinite &&
//                           (this.options.loop = !1),
//                         this.options.slidesToScroll >
//                           this.options.slidesToShow &&
//                           (this.options.slidesToScroll = this.slidesToShow),
//                         this._breakpoint.init(),
//                         this.state.index >= this.state.length &&
//                           this.state.index !== 0 &&
//                           (this.state.index =
//                             this.state.index - this.slidesToScroll),
//                         this.state.length <= this.slidesToShow &&
//                           (this.state.index = 0),
//                         this._ui.wrapper.appendChild(
//                           this._navigation.init().render()
//                         ),
//                         this._ui.wrapper.appendChild(
//                           this._pagination.init().render()
//                         ),
//                         this.options.navigationSwipe
//                           ? this._swipe.bindEvents()
//                           : this._swipe._bindEvents(),
//                         this._breakpoint.apply(),
//                         this._slides.forEach(function (L) {
//                           return N._ui.container.appendChild(L);
//                         }),
//                         this._transitioner
//                           .init()
//                           .apply(!0, this._setHeight.bind(this)),
//                         this.options.autoplay && this._autoplay.init().start();
//                     },
//                   },
//                   {
//                     key: "destroy",
//                     value: function () {
//                       var N = this;
//                       this._unbindEvents(),
//                         this._items.forEach(function (L) {
//                           N.element.appendChild(L);
//                         }),
//                         this.node.remove();
//                     },
//                   },
//                   {
//                     key: "id",
//                     get: function () {
//                       return this._id;
//                     },
//                   },
//                   {
//                     key: "index",
//                     set: function (N) {
//                       this._index = N;
//                     },
//                     get: function () {
//                       return this._index;
//                     },
//                   },
//                   {
//                     key: "length",
//                     set: function (N) {
//                       this._length = N;
//                     },
//                     get: function () {
//                       return this._length;
//                     },
//                   },
//                   {
//                     key: "slides",
//                     get: function () {
//                       return this._slides;
//                     },
//                     set: function (N) {
//                       this._slides = N;
//                     },
//                   },
//                   {
//                     key: "slidesToScroll",
//                     get: function () {
//                       return this.options.effect === "translate"
//                         ? this._breakpoint.getSlidesToScroll()
//                         : 1;
//                     },
//                   },
//                   {
//                     key: "slidesToShow",
//                     get: function () {
//                       return this.options.effect === "translate"
//                         ? this._breakpoint.getSlidesToShow()
//                         : 1;
//                     },
//                   },
//                   {
//                     key: "direction",
//                     get: function () {
//                       return this.element.dir.toLowerCase() === "rtl" ||
//                         this.element.style.direction === "rtl"
//                         ? "rtl"
//                         : "ltr";
//                     },
//                   },
//                   {
//                     key: "wrapper",
//                     get: function () {
//                       return this._ui.wrapper;
//                     },
//                   },
//                   {
//                     key: "wrapperWidth",
//                     get: function () {
//                       return this._wrapperWidth || 0;
//                     },
//                   },
//                   {
//                     key: "container",
//                     get: function () {
//                       return this._ui.container;
//                     },
//                   },
//                   {
//                     key: "containerWidth",
//                     get: function () {
//                       return this._containerWidth || 0;
//                     },
//                   },
//                   {
//                     key: "slideWidth",
//                     get: function () {
//                       return this._slideWidth || 0;
//                     },
//                   },
//                   {
//                     key: "transitioner",
//                     get: function () {
//                       return this._transitioner;
//                     },
//                   },
//                 ],
//                 [
//                   {
//                     key: "attach",
//                     value: function () {
//                       var N = this,
//                         L =
//                           0 < arguments.length && arguments[0] !== void 0
//                             ? arguments[0]
//                             : ".slider",
//                         A =
//                           1 < arguments.length && arguments[1] !== void 0
//                             ? arguments[1]
//                             : {},
//                         xe = new Array(),
//                         ie = Object(a.c)(L)
//                           ? document.querySelectorAll(L)
//                           : Array.isArray(L)
//                           ? L
//                           : [L];
//                       return (
//                         [].forEach.call(ie, function (b) {
//                           if (b[N.constructor.name] === void 0) {
//                             var he = new E(b, A);
//                             (b[N.constructor.name] = he), xe.push(he);
//                           } else xe.push(b[N.constructor.name]);
//                         }),
//                         xe
//                       );
//                     },
//                   },
//                 ]
//               ),
//               E
//             );
//           })();
//         r.default = T;
//       },
//       function (n, r, i) {
//         i.d(r, "a", function () {
//           return o;
//         });
//         var o = function () {
//           return (
//             (0 < arguments.length && arguments[0] !== void 0
//               ? arguments[0]
//               : "") +
//             ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
//               /[018]/g,
//               function (l) {
//                 return (
//                   l ^
//                   (crypto.getRandomValues(new Uint8Array(1))[0] &
//                     (15 >> (l / 4)))
//                 ).toString(16);
//               }
//             )
//           );
//         };
//       },
//       function (n, r, i) {
//         var o = i(3),
//           l = i(8),
//           a = (function () {
//             function c(d, u) {
//               for (var f = 0; f < u.length; f++) {
//                 var p = u[f];
//                 (p.enumerable = p.enumerable || !1),
//                   (p.configurable = !0),
//                   "value" in p && (p.writable = !0),
//                   Object.defineProperty(d, p.key, p);
//               }
//             }
//             return function (d, u, f) {
//               return u && c(d.prototype, u), f && c(d, f), d;
//             };
//           })(),
//           s = (function (c) {
//             function d(u) {
//               (function (p, g) {
//                 if (!(p instanceof g))
//                   throw new TypeError("Cannot call a class as a function");
//               })(this, d);
//               var f = (function (p, g) {
//                 if (!p)
//                   throw new ReferenceError(
//                     "this hasn't been initialised - super() hasn't been called"
//                   );
//                 return !g || (typeof g != "object" && typeof g != "function")
//                   ? p
//                   : g;
//               })(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this));
//               return (
//                 (f.slider = u),
//                 (f.onVisibilityChange = f.onVisibilityChange.bind(f)),
//                 (f.onMouseEnter = f.onMouseEnter.bind(f)),
//                 (f.onMouseLeave = f.onMouseLeave.bind(f)),
//                 f
//               );
//             }
//             return (
//               (function (u, f) {
//                 if (typeof f != "function" && f !== null)
//                   throw new TypeError(
//                     "Super expression must either be null or a function, not " +
//                       typeof f
//                   );
//                 (u.prototype = Object.create(f && f.prototype, {
//                   constructor: {
//                     value: u,
//                     enumerable: !1,
//                     writable: !0,
//                     configurable: !0,
//                   },
//                 })),
//                   f &&
//                     (Object.setPrototypeOf
//                       ? Object.setPrototypeOf(u, f)
//                       : (u.__proto__ = f));
//               })(d, o.a),
//               a(d, [
//                 {
//                   key: "init",
//                   value: function () {
//                     return this._bindEvents(), this;
//                   },
//                 },
//                 {
//                   key: "_bindEvents",
//                   value: function () {
//                     document.addEventListener(
//                       "visibilitychange",
//                       this.onVisibilityChange
//                     ),
//                       this.slider.options.pauseOnHover &&
//                         (this.slider.container.addEventListener(
//                           l.a,
//                           this.onMouseEnter
//                         ),
//                         this.slider.container.addEventListener(
//                           l.b,
//                           this.onMouseLeave
//                         ));
//                   },
//                 },
//                 {
//                   key: "_unbindEvents",
//                   value: function () {
//                     document.removeEventListener(
//                       "visibilitychange",
//                       this.onVisibilityChange
//                     ),
//                       this.slider.container.removeEventListener(
//                         l.a,
//                         this.onMouseEnter
//                       ),
//                       this.slider.container.removeEventListener(
//                         l.b,
//                         this.onMouseLeave
//                       );
//                   },
//                 },
//                 {
//                   key: "start",
//                   value: function () {
//                     var u = this;
//                     this.stop(),
//                       this.slider.options.autoplay &&
//                         (this.emit("start", this),
//                         (this._interval = setInterval(function () {
//                           (u._hovering && u.slider.options.pauseOnHover) ||
//                             (!u.slider.options.centerMode &&
//                             u.slider.state.next >=
//                               u.slider.state.length - u.slider.slidesToShow &&
//                             !u.slider.options.loop &&
//                             !u.slider.options.infinite
//                               ? u.stop()
//                               : u.slider.next());
//                         }, this.slider.options.autoplaySpeed)));
//                   },
//                 },
//                 {
//                   key: "stop",
//                   value: function () {
//                     (this._interval = clearInterval(this._interval)),
//                       this.emit("stop", this);
//                   },
//                 },
//                 {
//                   key: "pause",
//                   value: function () {
//                     var u = this,
//                       f =
//                         0 < arguments.length && arguments[0] !== void 0
//                           ? arguments[0]
//                           : 0;
//                     this.paused ||
//                       (this.timer && this.stop(),
//                       (this.paused = !0),
//                       f === 0
//                         ? ((this.paused = !1), this.start())
//                         : this.slider.on("transition:end", function () {
//                             u &&
//                               ((u.paused = !1), u.run ? u.start() : u.stop());
//                           }));
//                   },
//                 },
//                 {
//                   key: "onVisibilityChange",
//                   value: function (u) {
//                     document.hidden ? this.stop() : this.start();
//                   },
//                 },
//                 {
//                   key: "onMouseEnter",
//                   value: function (u) {
//                     (this._hovering = !0),
//                       this.slider.options.pauseOnHover && this.pause();
//                   },
//                 },
//                 {
//                   key: "onMouseLeave",
//                   value: function (u) {
//                     (this._hovering = !1),
//                       this.slider.options.pauseOnHover && this.pause();
//                   },
//                 },
//               ]),
//               d
//             );
//           })();
//         r.a = s;
//       },
//       function (n, r, i) {
//         i.d(r, "a", function () {
//           return s;
//         }),
//           i.d(r, "b", function () {
//             return c;
//           }),
//           navigator.userAgent.match(/(Android);?[\s\/]+([\d.]+)?/),
//           navigator.userAgent.match(/(iPad).*OS\s([\d_]+)/),
//           navigator.userAgent.match(/(iPod)(.*OS\s([\d_]+))?/),
//           !navigator.userAgent.match(/(iPad).*OS\s([\d_]+)/) &&
//             navigator.userAgent.match(/(iPhone\sOS)\s([\d_]+)/),
//           0 <= navigator.userAgent.toLowerCase().indexOf("safari") &&
//             navigator.userAgent.toLowerCase().indexOf("chrome") < 0 &&
//             navigator.userAgent.toLowerCase().indexOf("android");
//         var o = "ontouchstart" in window,
//           l = "PointerEvent" in window,
//           a =
//             o ||
//             (window.DocumentTouch && document instanceof DocumentTouch) ||
//             navigator.maxTouchPoints,
//           s = a && l ? "pointerenter" : "mouseenter",
//           c = a && l ? "pointerleave" : "mouseleave";
//       },
//       function (n, r, i) {
//         var o = (function () {
//             function s(c, d) {
//               for (var u = 0; u < d.length; u++) {
//                 var f = d[u];
//                 (f.enumerable = f.enumerable || !1),
//                   (f.configurable = !0),
//                   "value" in f && (f.writable = !0),
//                   Object.defineProperty(c, f.key, f);
//               }
//             }
//             return function (c, d, u) {
//               return d && s(c.prototype, d), u && s(c, u), c;
//             };
//           })(),
//           l = Symbol("onResize"),
//           a = (function () {
//             function s(c) {
//               (function (d, u) {
//                 if (!(d instanceof u))
//                   throw new TypeError("Cannot call a class as a function");
//               })(this, s),
//                 (this.slider = c),
//                 (this.options = c.options),
//                 (this[l] = this[l].bind(this)),
//                 this._bindEvents();
//             }
//             return (
//               o(s, [
//                 {
//                   key: "init",
//                   value: function () {
//                     return (
//                       (this._defaultBreakpoint = {
//                         slidesToShow: this.options.slidesToShow,
//                         slidesToScroll: this.options.slidesToScroll,
//                       }),
//                       this.options.breakpoints.sort(function (c, d) {
//                         return (
//                           parseInt(c.changePoint, 10) >
//                           parseInt(d.changePoint, 10)
//                         );
//                       }),
//                       (this._currentBreakpoint = this._getActiveBreakpoint()),
//                       this
//                     );
//                   },
//                 },
//                 {
//                   key: "destroy",
//                   value: function () {
//                     this._unbindEvents();
//                   },
//                 },
//                 {
//                   key: "_bindEvents",
//                   value: function () {
//                     window.addEventListener("resize", this[l]),
//                       window.addEventListener("orientationchange", this[l]);
//                   },
//                 },
//                 {
//                   key: "_unbindEvents",
//                   value: function () {
//                     window.removeEventListener("resize", this[l]),
//                       window.removeEventListener("orientationchange", this[l]);
//                   },
//                 },
//                 {
//                   key: "_getActiveBreakpoint",
//                   value: function () {
//                     var c = !0,
//                       d = !1,
//                       u = void 0;
//                     try {
//                       for (
//                         var f, p = this.options.breakpoints[Symbol.iterator]();
//                         !(c = (f = p.next()).done);
//                         c = !0
//                       ) {
//                         var g = f.value;
//                         if (g.changePoint >= window.innerWidth) return g;
//                       }
//                     } catch (S) {
//                       (d = !0), (u = S);
//                     } finally {
//                       try {
//                         !c && p.return && p.return();
//                       } finally {
//                         if (d) throw u;
//                       }
//                     }
//                     return this._defaultBreakpoint;
//                   },
//                 },
//                 {
//                   key: "getSlidesToShow",
//                   value: function () {
//                     return this._currentBreakpoint
//                       ? this._currentBreakpoint.slidesToShow
//                       : this._defaultBreakpoint.slidesToShow;
//                   },
//                 },
//                 {
//                   key: "getSlidesToScroll",
//                   value: function () {
//                     return this._currentBreakpoint
//                       ? this._currentBreakpoint.slidesToScroll
//                       : this._defaultBreakpoint.slidesToScroll;
//                   },
//                 },
//                 {
//                   key: "apply",
//                   value: function () {
//                     this.slider.state.index >= this.slider.state.length &&
//                       this.slider.state.index !== 0 &&
//                       (this.slider.state.index =
//                         this.slider.state.index -
//                         this._currentBreakpoint.slidesToScroll),
//                       this.slider.state.length <=
//                         this._currentBreakpoint.slidesToShow &&
//                         (this.slider.state.index = 0),
//                       this.options.loop && this.slider._loop.init().apply(),
//                       this.options.infinite &&
//                         this.slider._infinite.init().apply(),
//                       this.slider._setDimensions(),
//                       this.slider._transitioner
//                         .init()
//                         .apply(!0, this.slider._setHeight.bind(this.slider)),
//                       this.slider._setClasses(),
//                       this.slider._navigation.refresh(),
//                       this.slider._pagination.refresh();
//                   },
//                 },
//                 {
//                   key: l,
//                   value: function (c) {
//                     var d = this._getActiveBreakpoint();
//                     d.slidesToShow !== this._currentBreakpoint.slidesToShow &&
//                       ((this._currentBreakpoint = d), this.apply());
//                   },
//                 },
//               ]),
//               s
//             );
//           })();
//         r.a = a;
//       },
//       function (n, r, i) {
//         var o = (function () {
//             function a(s, c) {
//               for (var d = 0; d < c.length; d++) {
//                 var u = c[d];
//                 (u.enumerable = u.enumerable || !1),
//                   (u.configurable = !0),
//                   "value" in u && (u.writable = !0),
//                   Object.defineProperty(s, u.key, u);
//               }
//             }
//             return function (s, c, d) {
//               return c && a(s.prototype, c), d && a(s, d), s;
//             };
//           })(),
//           l = (function () {
//             function a(s) {
//               (function (c, d) {
//                 if (!(c instanceof d))
//                   throw new TypeError("Cannot call a class as a function");
//               })(this, a),
//                 (this.slider = s);
//             }
//             return (
//               o(a, [
//                 {
//                   key: "init",
//                   value: function () {
//                     if (
//                       this.slider.options.infinite &&
//                       this.slider.options.effect === "translate"
//                     ) {
//                       this.slider.options.centerMode
//                         ? (this._infiniteCount = Math.ceil(
//                             this.slider.slidesToShow +
//                               this.slider.slidesToShow / 2
//                           ))
//                         : (this._infiniteCount = this.slider.slidesToShow);
//                       for (
//                         var s = [], c = 0, d = this.slider.state.length;
//                         d > this.slider.state.length - 1 - this._infiniteCount;
//                         d -= 1
//                       )
//                         (c = d - 1),
//                           s.unshift(
//                             this._cloneSlide(
//                               this.slider.slides[c],
//                               c - this.slider.state.length
//                             )
//                           );
//                       for (
//                         var u = [], f = 0;
//                         f < this._infiniteCount + this.slider.state.length;
//                         f += 1
//                       )
//                         u.push(
//                           this._cloneSlide(
//                             this.slider.slides[f % this.slider.state.length],
//                             f + this.slider.state.length
//                           )
//                         );
//                       this.slider.slides = [].concat(
//                         s,
//                         (function (p) {
//                           if (Array.isArray(p)) {
//                             for (
//                               var g = 0, S = Array(p.length);
//                               g < p.length;
//                               g++
//                             )
//                               S[g] = p[g];
//                             return S;
//                           }
//                           return Array.from(p);
//                         })(this.slider.slides),
//                         u
//                       );
//                     }
//                     return this;
//                   },
//                 },
//                 { key: "apply", value: function () {} },
//                 {
//                   key: "onTransitionEnd",
//                   value: function (s) {
//                     this.slider.options.infinite &&
//                       (this.slider.state.next >= this.slider.state.length
//                         ? ((this.slider.state.index = this.slider.state.next =
//                             this.slider.state.next - this.slider.state.length),
//                           this.slider.transitioner.apply(!0))
//                         : this.slider.state.next < 0 &&
//                           ((this.slider.state.index = this.slider.state.next =
//                             this.slider.state.length + this.slider.state.next),
//                           this.slider.transitioner.apply(!0)));
//                   },
//                 },
//                 {
//                   key: "_cloneSlide",
//                   value: function (s, c) {
//                     var d = s.cloneNode(!0);
//                     return (
//                       (d.dataset.sliderIndex = c),
//                       (d.dataset.cloned = !0),
//                       (d.querySelectorAll("[id]") || []).forEach(function (u) {
//                         u.setAttribute("id", "");
//                       }),
//                       d
//                     );
//                   },
//                 },
//               ]),
//               a
//             );
//           })();
//         r.a = l;
//       },
//       function (n, r, i) {
//         var o = i(12),
//           l = (function () {
//             function s(c, d) {
//               for (var u = 0; u < d.length; u++) {
//                 var f = d[u];
//                 (f.enumerable = f.enumerable || !1),
//                   (f.configurable = !0),
//                   "value" in f && (f.writable = !0),
//                   Object.defineProperty(c, f.key, f);
//               }
//             }
//             return function (c, d, u) {
//               return d && s(c.prototype, d), u && s(c, u), c;
//             };
//           })(),
//           a = (function () {
//             function s(c) {
//               (function (d, u) {
//                 if (!(d instanceof u))
//                   throw new TypeError("Cannot call a class as a function");
//               })(this, s),
//                 (this.slider = c);
//             }
//             return (
//               l(s, [
//                 {
//                   key: "init",
//                   value: function () {
//                     return this;
//                   },
//                 },
//                 {
//                   key: "apply",
//                   value: function () {
//                     this.slider.options.loop &&
//                       (0 < this.slider.state.next
//                         ? this.slider.state.next < this.slider.state.length
//                           ? this.slider.state.next >
//                               this.slider.state.length -
//                                 this.slider.slidesToShow &&
//                             Object(o.a)(
//                               this.slider._slides[this.slider.state.length - 1],
//                               this.slider.wrapper
//                             )
//                             ? (this.slider.state.next = 0)
//                             : (this.slider.state.next = Math.min(
//                                 Math.max(this.slider.state.next, 0),
//                                 this.slider.state.length -
//                                   this.slider.slidesToShow
//                               ))
//                           : (this.slider.state.next = 0)
//                         : this.slider.state.next <=
//                           0 - this.slider.slidesToScroll
//                         ? (this.slider.state.next =
//                             this.slider.state.length - this.slider.slidesToShow)
//                         : (this.slider.state.next = 0));
//                   },
//                 },
//               ]),
//               s
//             );
//           })();
//         r.a = a;
//       },
//       function (n, r, i) {
//         i.d(r, "a", function () {
//           return o;
//         });
//         var o = function (l, a) {
//           var s = l.getBoundingClientRect();
//           return (
//             (a = a || document.documentElement),
//             0 <= s.top &&
//               0 <= s.left &&
//               s.bottom <= (window.innerHeight || a.clientHeight) &&
//               s.right <= (window.innerWidth || a.clientWidth)
//           );
//         };
//       },
//       function (n, r, i) {
//         var o = i(14),
//           l = i(1),
//           a = (function () {
//             function c(d, u) {
//               for (var f = 0; f < u.length; f++) {
//                 var p = u[f];
//                 (p.enumerable = p.enumerable || !1),
//                   (p.configurable = !0),
//                   "value" in p && (p.writable = !0),
//                   Object.defineProperty(d, p.key, p);
//               }
//             }
//             return function (d, u, f) {
//               return u && c(d.prototype, u), f && c(d, f), d;
//             };
//           })(),
//           s = (function () {
//             function c(d) {
//               (function (u, f) {
//                 if (!(u instanceof f))
//                   throw new TypeError("Cannot call a class as a function");
//               })(this, c),
//                 (this.slider = d),
//                 (this._clickEvents = ["click", "touch"]),
//                 (this._supportsPassive = Object(l.a)()),
//                 (this.onPreviousClick = this.onPreviousClick.bind(this)),
//                 (this.onNextClick = this.onNextClick.bind(this)),
//                 (this.onKeyUp = this.onKeyUp.bind(this));
//             }
//             return (
//               a(c, [
//                 {
//                   key: "init",
//                   value: function () {
//                     return (
//                       (this.node = document
//                         .createRange()
//                         .createContextualFragment(
//                           Object(o.a)(this.slider.options.icons)
//                         )),
//                       (this._ui = {
//                         previous: this.node.querySelector(
//                           ".slider-navigation-previous"
//                         ),
//                         next: this.node.querySelector(
//                           ".slider-navigation-next"
//                         ),
//                       }),
//                       this._unbindEvents(),
//                       this._bindEvents(),
//                       this.refresh(),
//                       this
//                     );
//                   },
//                 },
//                 {
//                   key: "destroy",
//                   value: function () {
//                     this._unbindEvents();
//                   },
//                 },
//                 {
//                   key: "_bindEvents",
//                   value: function () {
//                     var d = this;
//                     this.slider.wrapper.addEventListener("keyup", this.onKeyUp),
//                       this._clickEvents.forEach(function (u) {
//                         d._ui.previous.addEventListener(u, d.onPreviousClick),
//                           d._ui.next.addEventListener(u, d.onNextClick);
//                       });
//                   },
//                 },
//                 {
//                   key: "_unbindEvents",
//                   value: function () {
//                     var d = this;
//                     this.slider.wrapper.removeEventListener(
//                       "keyup",
//                       this.onKeyUp
//                     ),
//                       this._clickEvents.forEach(function (u) {
//                         d._ui.previous.removeEventListener(
//                           u,
//                           d.onPreviousClick
//                         ),
//                           d._ui.next.removeEventListener(u, d.onNextClick);
//                       });
//                   },
//                 },
//                 {
//                   key: "onNextClick",
//                   value: function (d) {
//                     this._supportsPassive || d.preventDefault(),
//                       this.slider.options.navigation && this.slider.next();
//                   },
//                 },
//                 {
//                   key: "onPreviousClick",
//                   value: function (d) {
//                     this._supportsPassive || d.preventDefault(),
//                       this.slider.options.navigation && this.slider.previous();
//                   },
//                 },
//                 {
//                   key: "onKeyUp",
//                   value: function (d) {
//                     this.slider.options.keyNavigation &&
//                       (d.key === "ArrowRight" || d.key === "Right"
//                         ? this.slider.next()
//                         : (d.key !== "ArrowLeft" && d.key !== "Left") ||
//                           this.slider.previous());
//                   },
//                 },
//                 {
//                   key: "refresh",
//                   value: function () {
//                     this.slider.options.loop ||
//                       this.slider.options.infinite ||
//                       (this.slider.options.navigation &&
//                       this.slider.state.length > this.slider.slidesToShow
//                         ? (this._ui.previous.classList.remove("is-hidden"),
//                           this._ui.next.classList.remove("is-hidden"),
//                           this.slider.state.next === 0
//                             ? (this._ui.previous.classList.add("is-hidden"),
//                               this._ui.next.classList.remove("is-hidden"))
//                             : this.slider.state.next >=
//                                 this.slider.state.length -
//                                   this.slider.slidesToShow &&
//                               !this.slider.options.centerMode
//                             ? (this._ui.previous.classList.remove("is-hidden"),
//                               this._ui.next.classList.add("is-hidden"))
//                             : this.slider.state.next >=
//                                 this.slider.state.length - 1 &&
//                               this.slider.options.centerMode &&
//                               (this._ui.previous.classList.remove("is-hidden"),
//                               this._ui.next.classList.add("is-hidden")))
//                         : (this._ui.previous.classList.add("is-hidden"),
//                           this._ui.next.classList.add("is-hidden")));
//                   },
//                 },
//                 {
//                   key: "render",
//                   value: function () {
//                     return this.node;
//                   },
//                 },
//               ]),
//               c
//             );
//           })();
//         r.a = s;
//       },
//       function (n, r, i) {
//         r.a = function (o) {
//           return (
//             '<div class="slider-navigation-previous">' +
//             o.previous +
//             `</div>
// <div class="slider-navigation-next">` +
//             o.next +
//             "</div>"
//           );
//         };
//       },
//       function (n, r, i) {
//         var o = i(16),
//           l = i(17),
//           a = i(1),
//           s = (function () {
//             function d(u, f) {
//               for (var p = 0; p < f.length; p++) {
//                 var g = f[p];
//                 (g.enumerable = g.enumerable || !1),
//                   (g.configurable = !0),
//                   "value" in g && (g.writable = !0),
//                   Object.defineProperty(u, g.key, g);
//               }
//             }
//             return function (u, f, p) {
//               return f && d(u.prototype, f), p && d(u, p), u;
//             };
//           })(),
//           c = (function () {
//             function d(u) {
//               (function (f, p) {
//                 if (!(f instanceof p))
//                   throw new TypeError("Cannot call a class as a function");
//               })(this, d),
//                 (this.slider = u),
//                 (this._clickEvents = ["click", "touch"]),
//                 (this._supportsPassive = Object(a.a)()),
//                 (this.onPageClick = this.onPageClick.bind(this)),
//                 (this.onResize = this.onResize.bind(this));
//             }
//             return (
//               s(d, [
//                 {
//                   key: "init",
//                   value: function () {
//                     return (
//                       (this._pages = []),
//                       (this.node = document
//                         .createRange()
//                         .createContextualFragment(Object(o.a)())),
//                       (this._ui = { container: this.node.firstChild }),
//                       (this._count = Math.ceil(
//                         (this.slider.state.length - this.slider.slidesToShow) /
//                           this.slider.slidesToScroll
//                       )),
//                       this._draw(),
//                       this.refresh(),
//                       this
//                     );
//                   },
//                 },
//                 {
//                   key: "destroy",
//                   value: function () {
//                     this._unbindEvents();
//                   },
//                 },
//                 {
//                   key: "_bindEvents",
//                   value: function () {
//                     var u = this;
//                     window.addEventListener("resize", this.onResize),
//                       window.addEventListener(
//                         "orientationchange",
//                         this.onResize
//                       ),
//                       this._clickEvents.forEach(function (f) {
//                         u._pages.forEach(function (p) {
//                           return p.addEventListener(f, u.onPageClick);
//                         });
//                       });
//                   },
//                 },
//                 {
//                   key: "_unbindEvents",
//                   value: function () {
//                     var u = this;
//                     window.removeEventListener("resize", this.onResize),
//                       window.removeEventListener(
//                         "orientationchange",
//                         this.onResize
//                       ),
//                       this._clickEvents.forEach(function (f) {
//                         u._pages.forEach(function (p) {
//                           return p.removeEventListener(f, u.onPageClick);
//                         });
//                       });
//                   },
//                 },
//                 {
//                   key: "_draw",
//                   value: function () {
//                     if (
//                       ((this._ui.container.innerHTML = ""),
//                       this.slider.options.pagination &&
//                         this.slider.state.length > this.slider.slidesToShow)
//                     ) {
//                       for (var u = 0; u <= this._count; u++) {
//                         var f = document
//                           .createRange()
//                           .createContextualFragment(Object(l.a)()).firstChild;
//                         (f.dataset.index = u * this.slider.slidesToScroll),
//                           this._pages.push(f),
//                           this._ui.container.appendChild(f);
//                       }
//                       this._bindEvents();
//                     }
//                   },
//                 },
//                 {
//                   key: "onPageClick",
//                   value: function (u) {
//                     this._supportsPassive || u.preventDefault(),
//                       (this.slider.state.next = u.currentTarget.dataset.index),
//                       this.slider.show();
//                   },
//                 },
//                 {
//                   key: "onResize",
//                   value: function () {
//                     this._draw();
//                   },
//                 },
//                 {
//                   key: "refresh",
//                   value: function () {
//                     var u = this,
//                       f = void 0;
//                     (f = this.slider.options.infinite
//                       ? Math.ceil(
//                           this.slider.state.length -
//                             1 / this.slider.slidesToScroll
//                         )
//                       : Math.ceil(
//                           (this.slider.state.length -
//                             this.slider.slidesToShow) /
//                             this.slider.slidesToScroll
//                         )) !== this._count && ((this._count = f), this._draw()),
//                       this._pages.forEach(function (p) {
//                         p.classList.remove("is-active"),
//                           parseInt(p.dataset.index, 10) ===
//                             u.slider.state.next % u.slider.state.length &&
//                             p.classList.add("is-active");
//                       });
//                   },
//                 },
//                 {
//                   key: "render",
//                   value: function () {
//                     return this.node;
//                   },
//                 },
//               ]),
//               d
//             );
//           })();
//         r.a = c;
//       },
//       function (n, r, i) {
//         r.a = function () {
//           return '<div class="slider-pagination"></div>';
//         };
//       },
//       function (n, r, i) {
//         r.a = function () {
//           return '<div class="slider-page"></div>';
//         };
//       },
//       function (n, r, i) {
//         var o = i(4),
//           l = i(1),
//           a = (function () {
//             function c(d, u) {
//               for (var f = 0; f < u.length; f++) {
//                 var p = u[f];
//                 (p.enumerable = p.enumerable || !1),
//                   (p.configurable = !0),
//                   "value" in p && (p.writable = !0),
//                   Object.defineProperty(d, p.key, p);
//               }
//             }
//             return function (d, u, f) {
//               return u && c(d.prototype, u), f && c(d, f), d;
//             };
//           })(),
//           s = (function () {
//             function c(d) {
//               (function (u, f) {
//                 if (!(u instanceof f))
//                   throw new TypeError("Cannot call a class as a function");
//               })(this, c),
//                 (this.slider = d),
//                 (this._supportsPassive = Object(l.a)()),
//                 (this.onStartDrag = this.onStartDrag.bind(this)),
//                 (this.onMoveDrag = this.onMoveDrag.bind(this)),
//                 (this.onStopDrag = this.onStopDrag.bind(this)),
//                 this._init();
//             }
//             return (
//               a(c, [
//                 { key: "_init", value: function () {} },
//                 {
//                   key: "bindEvents",
//                   value: function () {
//                     var d = this;
//                     this.slider.container.addEventListener(
//                       "dragstart",
//                       function (u) {
//                         d._supportsPassive || u.preventDefault();
//                       }
//                     ),
//                       this.slider.container.addEventListener(
//                         "mousedown",
//                         this.onStartDrag
//                       ),
//                       this.slider.container.addEventListener(
//                         "touchstart",
//                         this.onStartDrag
//                       ),
//                       window.addEventListener("mousemove", this.onMoveDrag),
//                       window.addEventListener("touchmove", this.onMoveDrag),
//                       window.addEventListener("mouseup", this.onStopDrag),
//                       window.addEventListener("touchend", this.onStopDrag),
//                       window.addEventListener("touchcancel", this.onStopDrag);
//                   },
//                 },
//                 {
//                   key: "unbindEvents",
//                   value: function () {
//                     var d = this;
//                     this.slider.container.removeEventListener(
//                       "dragstart",
//                       function (u) {
//                         d._supportsPassive || u.preventDefault();
//                       }
//                     ),
//                       this.slider.container.removeEventListener(
//                         "mousedown",
//                         this.onStartDrag
//                       ),
//                       this.slider.container.removeEventListener(
//                         "touchstart",
//                         this.onStartDrag
//                       ),
//                       window.removeEventListener("mousemove", this.onMoveDrag),
//                       window.removeEventListener("touchmove", this.onMoveDrag),
//                       window.removeEventListener("mouseup", this.onStopDrag),
//                       window.removeEventListener("mouseup", this.onStopDrag),
//                       window.removeEventListener(
//                         "touchcancel",
//                         this.onStopDrag
//                       );
//                   },
//                 },
//                 {
//                   key: "onStartDrag",
//                   value: function (d) {
//                     if (d.touches) {
//                       if (1 < d.touches.length) return;
//                       d = d.touches[0];
//                     }
//                     (this._origin = new o.a(d.screenX, d.screenY)),
//                       (this.width = this.slider.wrapperWidth),
//                       this.slider.transitioner.disable();
//                   },
//                 },
//                 {
//                   key: "onMoveDrag",
//                   value: function (d) {
//                     if (this._origin) {
//                       var u = d.touches ? d.touches[0] : d;
//                       (this._lastTranslate = new o.a(
//                         u.screenX - this._origin.x,
//                         u.screenY - this._origin.y
//                       )),
//                         d.touches &&
//                           Math.abs(this._lastTranslate.x) >
//                             Math.abs(this._lastTranslate.y) &&
//                           (this._supportsPassive || d.preventDefault(),
//                           d.stopPropagation());
//                     }
//                   },
//                 },
//                 {
//                   key: "onStopDrag",
//                   value: function (d) {
//                     this._origin &&
//                       this._lastTranslate &&
//                       (Math.abs(this._lastTranslate.x) > 0.2 * this.width
//                         ? this._lastTranslate.x < 0
//                           ? this.slider.next()
//                           : this.slider.previous()
//                         : this.slider.show(!0)),
//                       (this._origin = null),
//                       (this._lastTranslate = null);
//                   },
//                 },
//               ]),
//               c
//             );
//           })();
//         r.a = s;
//       },
//       function (n, r, i) {
//         var o = i(20),
//           l = i(21),
//           a = (function () {
//             function c(d, u) {
//               for (var f = 0; f < u.length; f++) {
//                 var p = u[f];
//                 (p.enumerable = p.enumerable || !1),
//                   (p.configurable = !0),
//                   "value" in p && (p.writable = !0),
//                   Object.defineProperty(d, p.key, p);
//               }
//             }
//             return function (d, u, f) {
//               return u && c(d.prototype, u), f && c(d, f), d;
//             };
//           })(),
//           s = (function () {
//             function c(d) {
//               (function (u, f) {
//                 if (!(u instanceof f))
//                   throw new TypeError("Cannot call a class as a function");
//               })(this, c),
//                 (this.slider = d),
//                 (this.options = d.options),
//                 (this._animating = !1),
//                 (this._animation = void 0),
//                 (this._translate = new l.a(this, d, d.options)),
//                 (this._fade = new o.a(this, d, d.options));
//             }
//             return (
//               a(c, [
//                 {
//                   key: "init",
//                   value: function () {
//                     return this._fade.init(), this._translate.init(), this;
//                   },
//                 },
//                 {
//                   key: "isAnimating",
//                   value: function () {
//                     return this._animating;
//                   },
//                 },
//                 {
//                   key: "enable",
//                   value: function () {
//                     this._animation && this._animation.enable();
//                   },
//                 },
//                 {
//                   key: "disable",
//                   value: function () {
//                     this._animation && this._animation.disable();
//                   },
//                 },
//                 {
//                   key: "apply",
//                   value: function (d, u) {
//                     if (!this._animating || d) {
//                       switch (this.options.effect) {
//                         case "fade":
//                           this._animation = this._fade;
//                           break;
//                         case "translate":
//                         default:
//                           this._animation = this._translate;
//                       }
//                       (this._animationCallback = u),
//                         d
//                           ? this._animation && this._animation.disable()
//                           : (this._animation && this._animation.enable(),
//                             (this._animating = !0)),
//                         this._animation && this._animation.apply(),
//                         d && this.end();
//                     }
//                   },
//                 },
//                 {
//                   key: "end",
//                   value: function () {
//                     (this._animating = !1),
//                       (this._animation = void 0),
//                       (this.slider.state.index = this.slider.state.next),
//                       this._animationCallback && this._animationCallback();
//                   },
//                 },
//               ]),
//               c
//             );
//           })();
//         r.a = s;
//       },
//       function (n, r, i) {
//         var o = i(0),
//           l =
//             Object.assign ||
//             function (c) {
//               for (var d = 1; d < arguments.length; d++) {
//                 var u = arguments[d];
//                 for (var f in u)
//                   Object.prototype.hasOwnProperty.call(u, f) && (c[f] = u[f]);
//               }
//               return c;
//             },
//           a = (function () {
//             function c(d, u) {
//               for (var f = 0; f < u.length; f++) {
//                 var p = u[f];
//                 (p.enumerable = p.enumerable || !1),
//                   (p.configurable = !0),
//                   "value" in p && (p.writable = !0),
//                   Object.defineProperty(d, p.key, p);
//               }
//             }
//             return function (d, u, f) {
//               return u && c(d.prototype, u), f && c(d, f), d;
//             };
//           })(),
//           s = (function () {
//             function c(d, u) {
//               var f =
//                 2 < arguments.length && arguments[2] !== void 0
//                   ? arguments[2]
//                   : {};
//               (function (p, g) {
//                 if (!(p instanceof g))
//                   throw new TypeError("Cannot call a class as a function");
//               })(this, c),
//                 (this.transitioner = d),
//                 (this.slider = u),
//                 (this.options = l({}, f));
//             }
//             return (
//               a(c, [
//                 {
//                   key: "init",
//                   value: function () {
//                     var d = this;
//                     return (
//                       this.options.effect === "fade" &&
//                         this.slider.slides.forEach(function (u, f) {
//                           Object(o.a)(u, {
//                             position: "absolute",
//                             left: 0,
//                             top: 0,
//                             bottom: 0,
//                             "z-index":
//                               u.dataset.sliderIndex == d.slider.state.index
//                                 ? 0
//                                 : -2,
//                             opacity:
//                               u.dataset.sliderIndex == d.slider.state.index
//                                 ? 1
//                                 : 0,
//                           });
//                         }),
//                       this
//                     );
//                   },
//                 },
//                 {
//                   key: "enable",
//                   value: function () {
//                     var d = this;
//                     (this._oldSlide = this.slider.slides.filter(function (u) {
//                       return u.dataset.sliderIndex == d.slider.state.index;
//                     })[0]),
//                       (this._newSlide = this.slider.slides.filter(function (u) {
//                         return u.dataset.sliderIndex == d.slider.state.next;
//                       })[0]),
//                       this._newSlide &&
//                         (this._newSlide.addEventListener(
//                           "transitionend",
//                           this.onTransitionEnd.bind(this)
//                         ),
//                         (this._newSlide.style.transition =
//                           this.options.duration + "ms " + this.options.timing),
//                         this._oldSlide &&
//                           (this._oldSlide.addEventListener(
//                             "transitionend",
//                             this.onTransitionEnd.bind(this)
//                           ),
//                           (this._oldSlide.style.transition =
//                             this.options.duration +
//                             "ms " +
//                             this.options.timing)));
//                   },
//                 },
//                 {
//                   key: "disable",
//                   value: function () {
//                     var d = this;
//                     (this._oldSlide = this.slider.slides.filter(function (u) {
//                       return u.dataset.sliderIndex == d.slider.state.index;
//                     })[0]),
//                       (this._newSlide = this.slider.slides.filter(function (u) {
//                         return u.dataset.sliderIndex == d.slider.state.next;
//                       })[0]),
//                       this._newSlide &&
//                         (this._newSlide.removeEventListener(
//                           "transitionend",
//                           this.onTransitionEnd.bind(this)
//                         ),
//                         (this._newSlide.style.transition = "none"),
//                         this._oldSlide &&
//                           (this._oldSlide.removeEventListener(
//                             "transitionend",
//                             this.onTransitionEnd.bind(this)
//                           ),
//                           (this._oldSlide.style.transition = "none")));
//                   },
//                 },
//                 {
//                   key: "apply",
//                   value: function (d) {
//                     var u = this;
//                     (this._oldSlide = this.slider.slides.filter(function (f) {
//                       return f.dataset.sliderIndex == u.slider.state.index;
//                     })[0]),
//                       (this._newSlide = this.slider.slides.filter(function (f) {
//                         return f.dataset.sliderIndex == u.slider.state.next;
//                       })[0]),
//                       this._oldSlide &&
//                         this._newSlide &&
//                         (Object(o.a)(this._oldSlide, { opacity: 0 }),
//                         Object(o.a)(this._newSlide, {
//                           opacity: 1,
//                           "z-index": d ? 0 : -1,
//                         }));
//                   },
//                 },
//                 {
//                   key: "onTransitionEnd",
//                   value: function (d) {
//                     this.options.effect === "fade" &&
//                       (this.transitioner.isAnimating() &&
//                         d.target == this._newSlide &&
//                         (this._newSlide &&
//                           (Object(o.a)(this._newSlide, { "z-index": 0 }),
//                           this._newSlide.removeEventListener(
//                             "transitionend",
//                             this.onTransitionEnd.bind(this)
//                           )),
//                         this._oldSlide &&
//                           (Object(o.a)(this._oldSlide, { "z-index": -2 }),
//                           this._oldSlide.removeEventListener(
//                             "transitionend",
//                             this.onTransitionEnd.bind(this)
//                           ))),
//                       this.transitioner.end());
//                   },
//                 },
//               ]),
//               c
//             );
//           })();
//         r.a = s;
//       },
//       function (n, r, i) {
//         var o = i(4),
//           l = i(0),
//           a =
//             Object.assign ||
//             function (d) {
//               for (var u = 1; u < arguments.length; u++) {
//                 var f = arguments[u];
//                 for (var p in f)
//                   Object.prototype.hasOwnProperty.call(f, p) && (d[p] = f[p]);
//               }
//               return d;
//             },
//           s = (function () {
//             function d(u, f) {
//               for (var p = 0; p < f.length; p++) {
//                 var g = f[p];
//                 (g.enumerable = g.enumerable || !1),
//                   (g.configurable = !0),
//                   "value" in g && (g.writable = !0),
//                   Object.defineProperty(u, g.key, g);
//               }
//             }
//             return function (u, f, p) {
//               return f && d(u.prototype, f), p && d(u, p), u;
//             };
//           })(),
//           c = (function () {
//             function d(u, f) {
//               var p =
//                 2 < arguments.length && arguments[2] !== void 0
//                   ? arguments[2]
//                   : {};
//               (function (g, S) {
//                 if (!(g instanceof S))
//                   throw new TypeError("Cannot call a class as a function");
//               })(this, d),
//                 (this.transitioner = u),
//                 (this.slider = f),
//                 (this.options = a({}, p)),
//                 (this.onTransitionEnd = this.onTransitionEnd.bind(this));
//             }
//             return (
//               s(d, [
//                 {
//                   key: "init",
//                   value: function () {
//                     return (
//                       (this._position = new o.a(
//                         this.slider.container.offsetLeft,
//                         this.slider.container.offsetTop
//                       )),
//                       this._bindEvents(),
//                       this
//                     );
//                   },
//                 },
//                 {
//                   key: "destroy",
//                   value: function () {
//                     this._unbindEvents();
//                   },
//                 },
//                 {
//                   key: "_bindEvents",
//                   value: function () {
//                     this.slider.container.addEventListener(
//                       "transitionend",
//                       this.onTransitionEnd
//                     );
//                   },
//                 },
//                 {
//                   key: "_unbindEvents",
//                   value: function () {
//                     this.slider.container.removeEventListener(
//                       "transitionend",
//                       this.onTransitionEnd
//                     );
//                   },
//                 },
//                 {
//                   key: "enable",
//                   value: function () {
//                     this.slider.container.style.transition =
//                       this.options.duration + "ms " + this.options.timing;
//                   },
//                 },
//                 {
//                   key: "disable",
//                   value: function () {
//                     this.slider.container.style.transition = "none";
//                   },
//                 },
//                 {
//                   key: "apply",
//                   value: function () {
//                     var u = this,
//                       f = void 0;
//                     if (this.options.effect === "translate") {
//                       var p = this.slider.slides.filter(function (y) {
//                           return y.dataset.sliderIndex == u.slider.state.next;
//                         })[0],
//                         g = new o.a(p.offsetLeft, p.offsetTop);
//                       f = this.options.centerMode
//                         ? new o.a(
//                             Math.round(Object(l.e)(this.slider.container)),
//                             Math.round(Object(l.b)(this.slider.container))
//                           )
//                         : new o.a(
//                             Math.round(
//                               Object(l.e)(this.slider.container) -
//                                 Object(l.e)(this.slider.wrapper)
//                             ),
//                             Math.round(
//                               Object(l.b)(this.slider.container) -
//                                 Object(l.b)(this.slider.wrapper)
//                             )
//                           );
//                       var S = new o.a(
//                         Math.min(Math.max(-1 * g.x, -1 * f.x), 0),
//                         Math.min(Math.max(-1 * g.y, -1 * f.y), 0)
//                       );
//                       this.options.loop &&
//                         (!this.options.vertical &&
//                         Math.abs(this._position.x) > f.x
//                           ? ((S.x = 0), (this.slider.state.next = 0))
//                           : this.options.vertical &&
//                             Math.abs(this._position.y) > f.y &&
//                             ((S.y = 0), (this.slider.state.next = 0))),
//                         (this._position.x = S.x),
//                         (this._position.y = S.y),
//                         this.options.centerMode &&
//                           (this._position.x =
//                             this._position.x +
//                             this.slider.wrapperWidth / 2 -
//                             Object(l.e)(p) / 2),
//                         this.slider.direction === "rtl" &&
//                           ((this._position.x = -this._position.x),
//                           (this._position.y = -this._position.y)),
//                         (this.slider.container.style.transform =
//                           "translate3d(" +
//                           this._position.x +
//                           "px, " +
//                           this._position.y +
//                           "px, 0)"),
//                         g.x > f.x && this.slider.transitioner.end();
//                     }
//                   },
//                 },
//                 {
//                   key: "onTransitionEnd",
//                   value: function (u) {
//                     this.options.effect === "translate" &&
//                       (this.transitioner.isAnimating() &&
//                         u.target == this.slider.container &&
//                         this.options.infinite &&
//                         this.slider._infinite.onTransitionEnd(u),
//                       this.transitioner.end());
//                   },
//                 },
//               ]),
//               d
//             );
//           })();
//         r.a = c;
//       },
//       function (n, r, i) {
//         r.a = {
//           initialSlide: 0,
//           slidesToScroll: 1,
//           slidesToShow: 1,
//           navigation: !0,
//           navigationKeys: !0,
//           navigationSwipe: !0,
//           pagination: !0,
//           loop: !1,
//           infinite: !1,
//           effect: "translate",
//           duration: 300,
//           timing: "ease",
//           autoplay: !1,
//           autoplaySpeed: 3e3,
//           pauseOnHover: !0,
//           breakpoints: [
//             { changePoint: 480, slidesToShow: 1, slidesToScroll: 1 },
//             { changePoint: 640, slidesToShow: 2, slidesToScroll: 2 },
//             { changePoint: 768, slidesToShow: 3, slidesToScroll: 3 },
//           ],
//           onReady: null,
//           icons: {
//             previous: `<svg viewBox="0 0 50 80" xml:space="preserve">
//       <polyline fill="currentColor" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
//     </svg>`,
//             next: `<svg viewBox="0 0 50 80" xml:space="preserve">
//       <polyline fill="currentColor" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
//     </svg>`,
//           },
//         };
//       },
//       function (n, r, i) {
//         r.a = function (o) {
//           return (
//             '<div id="' +
//             o +
//             `" class="slider" tabindex="0">
//     <div class="slider-container"></div>
//   </div>`
//           );
//         };
//       },
//       function (n, r, i) {
//         r.a = function () {
//           return '<div class="slider-item"></div>';
//         };
//       },
//     ]).default;
//   });
// })(Im);
// const Fm = Au(ls);
// async function Um({ params: e }) {
//   return { product: await (await fetch(`${pf}/products/${e.id}`)).json() };
// }
// const Am = () => {
//     const {
//       product: {
//         name: e,
//         unitPrice: t,
//         stock: n,
//         images: r,
//         category: i,
//         description: o,
//       },
//     } = ff();
//     return (
//       D.useEffect(() => {
//         Fm.attach("#carousel-demo", {
//           loop: !0,
//           autoplay: !0,
//           navigationKeys: !1,
//         });
//       }, []),
//       ne("div", {
//         className: "container section content",
//         children: [
//           ne("div", {
//             className: "level mb-2",
//             children: [
//               M("div", {
//                 className: "level-left flex-3",
//                 children: ne("div", {
//                   children: [
//                     M("p", { className: "heading", children: i }),
//                     M("p", { className: "title is-1", children: e }),
//                   ],
//                 }),
//               }),
//               M("div", {
//                 className: "level-right ml-4 flex-1",
//                 children: ne("div", {
//                   children: [
//                     ne("h3", {
//                       className: "title is-2 has-text-weight-light",
//                       children: ["$", t],
//                     }),
//                     ne("h6", {
//                       className: "subtitle is-4 mb-2 has-text-weight-light",
//                       children: [M("b", { children: n }), " in stock"],
//                     }),
//                   ],
//                 }),
//               }),
//             ],
//           }),
//           M("p", { children: o }),
//           M("section", {
//             className: "has-carousel",
//             children: M("div", {
//               id: "carousel-demo",
//               className: "hero-carousel",
//               children: r.map((l, a) =>
//                 M(
//                   "figure",
//                   {
//                     className: "image is-16by9",
//                     children: M("img", { src: l, alt: e + " " + a + 1 }),
//                   },
//                   a
//                 )
//               ),
//             }),
//           }),
//         ],
//       })
//     );
//   },
//   Bm = Sm([
//     {
//       path: "/",
//       element: M(Nm, {}),
//       errorElement: M(jm, {}),
//       children: [
//         { path: "/", element: M(zm, {}), loader: Dm },
//         { path: "/:id", element: M(Am, {}), loader: Um },
//       ],
//     },
//   ]);
// al.createRoot(document.getElementById("root")).render(
//   M(Yu.StrictMode, { children: M(cm, { router: Bm }) })
// );
