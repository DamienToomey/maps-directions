var R = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function wt(e) {
  if (e.__esModule)
    return e;
  var r = e.default;
  if (typeof r == "function") {
    var n = function t() {
      if (this instanceof t) {
        var o = [null];
        o.push.apply(o, arguments);
        var i = Function.bind.apply(r, o);
        return new i();
      }
      return r.apply(this, arguments);
    };
    n.prototype = r.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
    var o = Object.getOwnPropertyDescriptor(e, t);
    Object.defineProperty(n, t, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[t];
      }
    });
  }), n;
}
var gt = {}, Ie = {}, De = {};
function kr(e, r) {
  return function() {
    return e.apply(r, arguments);
  };
}
const { toString: Gn } = Object.prototype, { getPrototypeOf: At } = Object, ve = ((e) => (r) => {
  const n = Gn.call(r);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), k = (e) => (e = e.toLowerCase(), (r) => ve(r) === e), be = (e) => (r) => typeof r === e, { isArray: ne } = Array, ae = be("undefined");
function Xn(e) {
  return e !== null && !ae(e) && e.constructor !== null && !ae(e.constructor) && z(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const xr = k("ArrayBuffer");
function Vn(e) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && xr(e.buffer), r;
}
const Jn = be("string"), z = be("function"), Hr = be("number"), Ee = (e) => e !== null && typeof e == "object", Kn = (e) => e === !0 || e === !1, ce = (e) => {
  if (ve(e) !== "object")
    return !1;
  const r = At(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Qn = k("Date"), Yn = k("File"), Zn = k("Blob"), ei = k("FileList"), ti = (e) => Ee(e) && z(e.pipe), ri = (e) => {
  let r;
  return e && (typeof FormData == "function" && e instanceof FormData || z(e.append) && ((r = ve(e)) === "formdata" || // detect form-data instance
  r === "object" && z(e.toString) && e.toString() === "[object FormData]"));
}, ni = k("URLSearchParams"), ii = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function se(e, r, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let t, o;
  if (typeof e != "object" && (e = [e]), ne(e))
    for (t = 0, o = e.length; t < o; t++)
      r.call(null, e[t], t, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let c;
    for (t = 0; t < a; t++)
      c = i[t], r.call(null, e[c], c, e);
  }
}
function Wr(e, r) {
  r = r.toLowerCase();
  const n = Object.keys(e);
  let t = n.length, o;
  for (; t-- > 0; )
    if (o = n[t], r === o.toLowerCase())
      return o;
  return null;
}
const Gr = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Xr = (e) => !ae(e) && e !== Gr;
function vt() {
  const { caseless: e } = Xr(this) && this || {}, r = {}, n = (t, o) => {
    const i = e && Wr(r, o) || o;
    ce(r[i]) && ce(t) ? r[i] = vt(r[i], t) : ce(t) ? r[i] = vt({}, t) : ne(t) ? r[i] = t.slice() : r[i] = t;
  };
  for (let t = 0, o = arguments.length; t < o; t++)
    arguments[t] && se(arguments[t], n);
  return r;
}
const oi = (e, r, n, { allOwnKeys: t } = {}) => (se(r, (o, i) => {
  n && z(o) ? e[i] = kr(o, n) : e[i] = o;
}, { allOwnKeys: t }), e), ai = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), si = (e, r, n, t) => {
  e.prototype = Object.create(r.prototype, t), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: r.prototype
  }), n && Object.assign(e.prototype, n);
}, ui = (e, r, n, t) => {
  let o, i, a;
  const c = {};
  if (r = r || {}, e == null)
    return r;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!t || t(a, e, r)) && !c[a] && (r[a] = e[a], c[a] = !0);
    e = n !== !1 && At(e);
  } while (e && (!n || n(e, r)) && e !== Object.prototype);
  return r;
}, ci = (e, r, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= r.length;
  const t = e.indexOf(r, n);
  return t !== -1 && t === n;
}, li = (e) => {
  if (!e)
    return null;
  if (ne(e))
    return e;
  let r = e.length;
  if (!Hr(r))
    return null;
  const n = new Array(r);
  for (; r-- > 0; )
    n[r] = e[r];
  return n;
}, fi = ((e) => (r) => e && r instanceof e)(typeof Uint8Array < "u" && At(Uint8Array)), di = (e, r) => {
  const t = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = t.next()) && !o.done; ) {
    const i = o.value;
    r.call(e, i[0], i[1]);
  }
}, hi = (e, r) => {
  let n;
  const t = [];
  for (; (n = e.exec(r)) !== null; )
    t.push(n);
  return t;
}, mi = k("HTMLFormElement"), pi = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, t, o) {
    return t.toUpperCase() + o;
  }
), qt = (({ hasOwnProperty: e }) => (r, n) => e.call(r, n))(Object.prototype), _i = k("RegExp"), Vr = (e, r) => {
  const n = Object.getOwnPropertyDescriptors(e), t = {};
  se(n, (o, i) => {
    r(o, i, e) !== !1 && (t[i] = o);
  }), Object.defineProperties(e, t);
}, yi = (e) => {
  Vr(e, (r, n) => {
    if (z(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const t = e[n];
    if (z(t)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, gi = (e, r) => {
  const n = {}, t = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return ne(e) ? t(e) : t(String(e).split(r)), n;
}, vi = () => {
}, bi = (e, r) => (e = +e, Number.isFinite(e) ? e : r), Fe = "abcdefghijklmnopqrstuvwxyz", Mt = "0123456789", Jr = {
  DIGIT: Mt,
  ALPHA: Fe,
  ALPHA_DIGIT: Fe + Fe.toUpperCase() + Mt
}, Ei = (e = 16, r = Jr.ALPHA_DIGIT) => {
  let n = "";
  const { length: t } = r;
  for (; e--; )
    n += r[Math.random() * t | 0];
  return n;
};
function Oi(e) {
  return !!(e && z(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Si = (e) => {
  const r = new Array(10), n = (t, o) => {
    if (Ee(t)) {
      if (r.indexOf(t) >= 0)
        return;
      if (!("toJSON" in t)) {
        r[o] = t;
        const i = ne(t) ? [] : {};
        return se(t, (a, c) => {
          const s = n(a, o + 1);
          !ae(s) && (i[c] = s);
        }), r[o] = void 0, i;
      }
    }
    return t;
  };
  return n(e, 0);
}, Ri = k("AsyncFunction"), wi = (e) => e && (Ee(e) || z(e)) && z(e.then) && z(e.catch), y = {
  isArray: ne,
  isArrayBuffer: xr,
  isBuffer: Xn,
  isFormData: ri,
  isArrayBufferView: Vn,
  isString: Jn,
  isNumber: Hr,
  isBoolean: Kn,
  isObject: Ee,
  isPlainObject: ce,
  isUndefined: ae,
  isDate: Qn,
  isFile: Yn,
  isBlob: Zn,
  isRegExp: _i,
  isFunction: z,
  isStream: ti,
  isURLSearchParams: ni,
  isTypedArray: fi,
  isFileList: ei,
  forEach: se,
  merge: vt,
  extend: oi,
  trim: ii,
  stripBOM: ai,
  inherits: si,
  toFlatObject: ui,
  kindOf: ve,
  kindOfTest: k,
  endsWith: ci,
  toArray: li,
  forEachEntry: di,
  matchAll: hi,
  isHTMLForm: mi,
  hasOwnProperty: qt,
  hasOwnProp: qt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Vr,
  freezeMethods: yi,
  toObjectSet: gi,
  toCamelCase: pi,
  noop: vi,
  toFiniteNumber: bi,
  findKey: Wr,
  global: Gr,
  isContextDefined: Xr,
  ALPHABET: Jr,
  generateString: Ei,
  isSpecCompliantForm: Oi,
  toJSONObject: Si,
  isAsyncFn: Ri,
  isThenable: wi
};
function C(e, r, n, t, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", r && (this.code = r), n && (this.config = n), t && (this.request = t), o && (this.response = o);
}
y.inherits(C, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: y.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Kr = C.prototype, Qr = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Qr[e] = { value: e };
});
Object.defineProperties(C, Qr);
Object.defineProperty(Kr, "isAxiosError", { value: !0 });
C.from = (e, r, n, t, o, i) => {
  const a = Object.create(Kr);
  return y.toFlatObject(e, a, function(s) {
    return s !== Error.prototype;
  }, (c) => c !== "isAxiosError"), C.call(a, e.message, r, n, t, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const Ai = null;
function bt(e) {
  return y.isPlainObject(e) || y.isArray(e);
}
function Yr(e) {
  return y.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function kt(e, r, n) {
  return e ? e.concat(r).map(function(o, i) {
    return o = Yr(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : r;
}
function Ni(e) {
  return y.isArray(e) && !e.some(bt);
}
const Ci = y.toFlatObject(y, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Oe(e, r, n) {
  if (!y.isObject(e))
    throw new TypeError("target must be an object");
  r = r || new FormData(), n = y.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(O, w) {
    return !y.isUndefined(w[O]);
  });
  const t = n.metaTokens, o = n.visitor || f, i = n.dots, a = n.indexes, s = (n.Blob || typeof Blob < "u" && Blob) && y.isSpecCompliantForm(r);
  if (!y.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(b) {
    if (b === null)
      return "";
    if (y.isDate(b))
      return b.toISOString();
    if (!s && y.isBlob(b))
      throw new C("Blob is not supported. Use a Buffer instead.");
    return y.isArrayBuffer(b) || y.isTypedArray(b) ? s && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b;
  }
  function f(b, O, w) {
    let A = b;
    if (b && !w && typeof b == "object") {
      if (y.endsWith(O, "{}"))
        O = t ? O : O.slice(0, -2), b = JSON.stringify(b);
      else if (y.isArray(b) && Ni(b) || (y.isFileList(b) || y.endsWith(O, "[]")) && (A = y.toArray(b)))
        return O = Yr(O), A.forEach(function(d, _) {
          !(y.isUndefined(d) || d === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? kt([O], _, i) : a === null ? O : O + "[]",
            u(d)
          );
        }), !1;
    }
    return bt(b) ? !0 : (r.append(kt(w, O, i), u(b)), !1);
  }
  const h = [], p = Object.assign(Ci, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: bt
  });
  function E(b, O) {
    if (!y.isUndefined(b)) {
      if (h.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + O.join("."));
      h.push(b), y.forEach(b, function(A, l) {
        (!(y.isUndefined(A) || A === null) && o.call(
          r,
          A,
          y.isString(l) ? l.trim() : l,
          O,
          p
        )) === !0 && E(A, O ? O.concat(l) : [l]);
      }), h.pop();
    }
  }
  if (!y.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), r;
}
function xt(e) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(t) {
    return r[t];
  });
}
function Nt(e, r) {
  this._pairs = [], e && Oe(e, this, r);
}
const Zr = Nt.prototype;
Zr.append = function(r, n) {
  this._pairs.push([r, n]);
};
Zr.toString = function(r) {
  const n = r ? function(t) {
    return r.call(this, t, xt);
  } : xt;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function ji(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function en(e, r, n) {
  if (!r)
    return e;
  const t = n && n.encode || ji, o = n && n.serialize;
  let i;
  if (o ? i = o(r, n) : i = y.isURLSearchParams(r) ? r.toString() : new Nt(r, n).toString(t), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
let Ui = class {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(r, n, t) {
    return this.handlers.push({
      fulfilled: r,
      rejected: n,
      synchronous: t ? t.synchronous : !1,
      runWhen: t ? t.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(r) {
    y.forEach(this.handlers, function(t) {
      t !== null && r(t);
    });
  }
};
const Ht = Ui, tn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ti = typeof URLSearchParams < "u" ? URLSearchParams : Nt, Pi = typeof FormData < "u" ? FormData : null, Ii = typeof Blob < "u" ? Blob : null, Di = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), Fi = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), M = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ti,
    FormData: Pi,
    Blob: Ii
  },
  isStandardBrowserEnv: Di,
  isStandardBrowserWebWorkerEnv: Fi,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function Bi(e, r) {
  return Oe(e, new M.classes.URLSearchParams(), Object.assign({
    visitor: function(n, t, o, i) {
      return M.isNode && y.isBuffer(n) ? (this.append(t, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, r));
}
function Li(e) {
  return y.matchAll(/\w+|\[(\w*)]/g, e).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function zi(e) {
  const r = {}, n = Object.keys(e);
  let t;
  const o = n.length;
  let i;
  for (t = 0; t < o; t++)
    i = n[t], r[i] = e[i];
  return r;
}
function rn(e) {
  function r(n, t, o, i) {
    let a = n[i++];
    const c = Number.isFinite(+a), s = i >= n.length;
    return a = !a && y.isArray(o) ? o.length : a, s ? (y.hasOwnProp(o, a) ? o[a] = [o[a], t] : o[a] = t, !c) : ((!o[a] || !y.isObject(o[a])) && (o[a] = []), r(n, t, o[a], i) && y.isArray(o[a]) && (o[a] = zi(o[a])), !c);
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const n = {};
    return y.forEachEntry(e, (t, o) => {
      r(Li(t), o, n, 0);
    }), n;
  }
  return null;
}
const $i = {
  "Content-Type": void 0
};
function qi(e, r, n) {
  if (y.isString(e))
    try {
      return (r || JSON.parse)(e), y.trim(e);
    } catch (t) {
      if (t.name !== "SyntaxError")
        throw t;
    }
  return (n || JSON.stringify)(e);
}
const Se = {
  transitional: tn,
  adapter: ["xhr", "http"],
  transformRequest: [function(r, n) {
    const t = n.getContentType() || "", o = t.indexOf("application/json") > -1, i = y.isObject(r);
    if (i && y.isHTMLForm(r) && (r = new FormData(r)), y.isFormData(r))
      return o && o ? JSON.stringify(rn(r)) : r;
    if (y.isArrayBuffer(r) || y.isBuffer(r) || y.isStream(r) || y.isFile(r) || y.isBlob(r))
      return r;
    if (y.isArrayBufferView(r))
      return r.buffer;
    if (y.isURLSearchParams(r))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let c;
    if (i) {
      if (t.indexOf("application/x-www-form-urlencoded") > -1)
        return Bi(r, this.formSerializer).toString();
      if ((c = y.isFileList(r)) || t.indexOf("multipart/form-data") > -1) {
        const s = this.env && this.env.FormData;
        return Oe(
          c ? { "files[]": r } : r,
          s && new s(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), qi(r)) : r;
  }],
  transformResponse: [function(r) {
    const n = this.transitional || Se.transitional, t = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (r && y.isString(r) && (t && !this.responseType || o)) {
      const a = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(r);
      } catch (c) {
        if (a)
          throw c.name === "SyntaxError" ? C.from(c, C.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return r;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: M.classes.FormData,
    Blob: M.classes.Blob
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
y.forEach(["delete", "get", "head"], function(r) {
  Se.headers[r] = {};
});
y.forEach(["post", "put", "patch"], function(r) {
  Se.headers[r] = y.merge($i);
});
const Ct = Se, Mi = y.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), ki = (e) => {
  const r = {};
  let n, t, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), n = a.substring(0, o).trim().toLowerCase(), t = a.substring(o + 1).trim(), !(!n || r[n] && Mi[n]) && (n === "set-cookie" ? r[n] ? r[n].push(t) : r[n] = [t] : r[n] = r[n] ? r[n] + ", " + t : t);
  }), r;
}, Wt = Symbol("internals");
function oe(e) {
  return e && String(e).trim().toLowerCase();
}
function le(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(le) : String(e);
}
function xi(e) {
  const r = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let t;
  for (; t = n.exec(e); )
    r[t[1]] = t[2];
  return r;
}
const Hi = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Be(e, r, n, t, o) {
  if (y.isFunction(t))
    return t.call(this, r, n);
  if (o && (r = n), !!y.isString(r)) {
    if (y.isString(t))
      return r.indexOf(t) !== -1;
    if (y.isRegExp(t))
      return t.test(r);
  }
}
function Wi(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, n, t) => n.toUpperCase() + t);
}
function Gi(e, r) {
  const n = y.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((t) => {
    Object.defineProperty(e, t + n, {
      value: function(o, i, a) {
        return this[t].call(this, r, o, i, a);
      },
      configurable: !0
    });
  });
}
class Re {
  constructor(r) {
    r && this.set(r);
  }
  set(r, n, t) {
    const o = this;
    function i(c, s, u) {
      const f = oe(s);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const h = y.findKey(o, f);
      (!h || o[h] === void 0 || u === !0 || u === void 0 && o[h] !== !1) && (o[h || s] = le(c));
    }
    const a = (c, s) => y.forEach(c, (u, f) => i(u, f, s));
    return y.isPlainObject(r) || r instanceof this.constructor ? a(r, n) : y.isString(r) && (r = r.trim()) && !Hi(r) ? a(ki(r), n) : r != null && i(n, r, t), this;
  }
  get(r, n) {
    if (r = oe(r), r) {
      const t = y.findKey(this, r);
      if (t) {
        const o = this[t];
        if (!n)
          return o;
        if (n === !0)
          return xi(o);
        if (y.isFunction(n))
          return n.call(this, o, t);
        if (y.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, n) {
    if (r = oe(r), r) {
      const t = y.findKey(this, r);
      return !!(t && this[t] !== void 0 && (!n || Be(this, this[t], t, n)));
    }
    return !1;
  }
  delete(r, n) {
    const t = this;
    let o = !1;
    function i(a) {
      if (a = oe(a), a) {
        const c = y.findKey(t, a);
        c && (!n || Be(t, t[c], c, n)) && (delete t[c], o = !0);
      }
    }
    return y.isArray(r) ? r.forEach(i) : i(r), o;
  }
  clear(r) {
    const n = Object.keys(this);
    let t = n.length, o = !1;
    for (; t--; ) {
      const i = n[t];
      (!r || Be(this, this[i], i, r, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(r) {
    const n = this, t = {};
    return y.forEach(this, (o, i) => {
      const a = y.findKey(t, i);
      if (a) {
        n[a] = le(o), delete n[i];
        return;
      }
      const c = r ? Wi(i) : String(i).trim();
      c !== i && delete n[i], n[c] = le(o), t[c] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const n = /* @__PURE__ */ Object.create(null);
    return y.forEach(this, (t, o) => {
      t != null && t !== !1 && (n[o] = r && y.isArray(t) ? t.join(", ") : t);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, n]) => r + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...n) {
    const t = new this(r);
    return n.forEach((o) => t.set(o)), t;
  }
  static accessor(r) {
    const t = (this[Wt] = this[Wt] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const c = oe(a);
      t[c] || (Gi(o, a), t[c] = !0);
    }
    return y.isArray(r) ? r.forEach(i) : i(r), this;
  }
}
Re.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
y.freezeMethods(Re.prototype);
y.freezeMethods(Re);
const x = Re;
function Le(e, r) {
  const n = this || Ct, t = r || n, o = x.from(t.headers);
  let i = t.data;
  return y.forEach(e, function(c) {
    i = c.call(n, i, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), i;
}
function nn(e) {
  return !!(e && e.__CANCEL__);
}
function ue(e, r, n) {
  C.call(this, e ?? "canceled", C.ERR_CANCELED, r, n), this.name = "CanceledError";
}
y.inherits(ue, C, {
  __CANCEL__: !0
});
function Xi(e, r, n) {
  const t = n.config.validateStatus;
  !n.status || !t || t(n.status) ? e(n) : r(new C(
    "Request failed with status code " + n.status,
    [C.ERR_BAD_REQUEST, C.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Vi = M.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, t, o, i, a, c) {
        const s = [];
        s.push(n + "=" + encodeURIComponent(t)), y.isNumber(o) && s.push("expires=" + new Date(o).toGMTString()), y.isString(i) && s.push("path=" + i), y.isString(a) && s.push("domain=" + a), c === !0 && s.push("secure"), document.cookie = s.join("; ");
      },
      read: function(n) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function Ji(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ki(e, r) {
  return r ? e.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : e;
}
function on(e, r) {
  return e && !Ji(r) ? Ki(e, r) : r;
}
const Qi = M.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const r = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let t;
    function o(i) {
      let a = i;
      return r && (n.setAttribute("href", a), a = n.href), n.setAttribute("href", a), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return t = o(window.location.href), function(a) {
      const c = y.isString(a) ? o(a) : a;
      return c.protocol === t.protocol && c.host === t.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Yi(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return r && r[1] || "";
}
function Zi(e, r) {
  e = e || 10;
  const n = new Array(e), t = new Array(e);
  let o = 0, i = 0, a;
  return r = r !== void 0 ? r : 1e3, function(s) {
    const u = Date.now(), f = t[i];
    a || (a = u), n[o] = s, t[o] = u;
    let h = i, p = 0;
    for (; h !== o; )
      p += n[h++], h = h % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), u - a < r)
      return;
    const E = f && u - f;
    return E ? Math.round(p * 1e3 / E) : void 0;
  };
}
function Gt(e, r) {
  let n = 0;
  const t = Zi(50, 250);
  return (o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, c = i - n, s = t(c), u = i <= a;
    n = i;
    const f = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: c,
      rate: s || void 0,
      estimated: s && a && u ? (a - i) / s : void 0,
      event: o
    };
    f[r ? "download" : "upload"] = !0, e(f);
  };
}
const eo = typeof XMLHttpRequest < "u", to = eo && function(e) {
  return new Promise(function(n, t) {
    let o = e.data;
    const i = x.from(e.headers).normalize(), a = e.responseType;
    let c;
    function s() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    y.isFormData(o) && (M.isStandardBrowserEnv || M.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
    let u = new XMLHttpRequest();
    if (e.auth) {
      const E = e.auth.username || "", b = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(E + ":" + b));
    }
    const f = on(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), en(f, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function h() {
      if (!u)
        return;
      const E = x.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), O = {
        data: !a || a === "text" || a === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: E,
        config: e,
        request: u
      };
      Xi(function(A) {
        n(A), s();
      }, function(A) {
        t(A), s();
      }, O), u = null;
    }
    if ("onloadend" in u ? u.onloadend = h : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, u.onabort = function() {
      u && (t(new C("Request aborted", C.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      t(new C("Network Error", C.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let b = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const O = e.transitional || tn;
      e.timeoutErrorMessage && (b = e.timeoutErrorMessage), t(new C(
        b,
        O.clarifyTimeoutError ? C.ETIMEDOUT : C.ECONNABORTED,
        e,
        u
      )), u = null;
    }, M.isStandardBrowserEnv) {
      const E = (e.withCredentials || Qi(f)) && e.xsrfCookieName && Vi.read(e.xsrfCookieName);
      E && i.set(e.xsrfHeaderName, E);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in u && y.forEach(i.toJSON(), function(b, O) {
      u.setRequestHeader(O, b);
    }), y.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), a && a !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Gt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Gt(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (E) => {
      u && (t(!E || E.type ? new ue(null, e, u) : E), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const p = Yi(f);
    if (p && M.protocols.indexOf(p) === -1) {
      t(new C("Unsupported protocol " + p + ":", C.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
}, fe = {
  http: Ai,
  xhr: to
};
y.forEach(fe, (e, r) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: r });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: r });
  }
});
const ro = {
  getAdapter: (e) => {
    e = y.isArray(e) ? e : [e];
    const { length: r } = e;
    let n, t;
    for (let o = 0; o < r && (n = e[o], !(t = y.isString(n) ? fe[n.toLowerCase()] : n)); o++)
      ;
    if (!t)
      throw t === !1 ? new C(
        `Adapter ${n} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      ) : new Error(
        y.hasOwnProp(fe, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
      );
    if (!y.isFunction(t))
      throw new TypeError("adapter is not a function");
    return t;
  },
  adapters: fe
};
function ze(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ue(null, e);
}
function Xt(e) {
  return ze(e), e.headers = x.from(e.headers), e.data = Le.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ro.getAdapter(e.adapter || Ct.adapter)(e).then(function(t) {
    return ze(e), t.data = Le.call(
      e,
      e.transformResponse,
      t
    ), t.headers = x.from(t.headers), t;
  }, function(t) {
    return nn(t) || (ze(e), t && t.response && (t.response.data = Le.call(
      e,
      e.transformResponse,
      t.response
    ), t.response.headers = x.from(t.response.headers))), Promise.reject(t);
  });
}
const Vt = (e) => e instanceof x ? e.toJSON() : e;
function Y(e, r) {
  r = r || {};
  const n = {};
  function t(u, f, h) {
    return y.isPlainObject(u) && y.isPlainObject(f) ? y.merge.call({ caseless: h }, u, f) : y.isPlainObject(f) ? y.merge({}, f) : y.isArray(f) ? f.slice() : f;
  }
  function o(u, f, h) {
    if (y.isUndefined(f)) {
      if (!y.isUndefined(u))
        return t(void 0, u, h);
    } else
      return t(u, f, h);
  }
  function i(u, f) {
    if (!y.isUndefined(f))
      return t(void 0, f);
  }
  function a(u, f) {
    if (y.isUndefined(f)) {
      if (!y.isUndefined(u))
        return t(void 0, u);
    } else
      return t(void 0, f);
  }
  function c(u, f, h) {
    if (h in r)
      return t(u, f);
    if (h in e)
      return t(void 0, u);
  }
  const s = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: c,
    headers: (u, f) => o(Vt(u), Vt(f), !0)
  };
  return y.forEach(Object.keys(Object.assign({}, e, r)), function(f) {
    const h = s[f] || o, p = h(e[f], r[f], f);
    y.isUndefined(p) && h !== c || (n[f] = p);
  }), n;
}
const an = "1.4.0", jt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, r) => {
  jt[e] = function(t) {
    return typeof t === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
const Jt = {};
jt.transitional = function(r, n, t) {
  function o(i, a) {
    return "[Axios v" + an + "] Transitional option '" + i + "'" + a + (t ? ". " + t : "");
  }
  return (i, a, c) => {
    if (r === !1)
      throw new C(
        o(a, " has been removed" + (n ? " in " + n : "")),
        C.ERR_DEPRECATED
      );
    return n && !Jt[a] && (Jt[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), r ? r(i, a, c) : !0;
  };
};
function no(e, r, n) {
  if (typeof e != "object")
    throw new C("options must be an object", C.ERR_BAD_OPTION_VALUE);
  const t = Object.keys(e);
  let o = t.length;
  for (; o-- > 0; ) {
    const i = t[o], a = r[i];
    if (a) {
      const c = e[i], s = c === void 0 || a(c, i, e);
      if (s !== !0)
        throw new C("option " + i + " must be " + s, C.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new C("Unknown option " + i, C.ERR_BAD_OPTION);
  }
}
const Et = {
  assertOptions: no,
  validators: jt
}, H = Et.validators;
let pe = class {
  constructor(r) {
    this.defaults = r, this.interceptors = {
      request: new Ht(),
      response: new Ht()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(r, n) {
    typeof r == "string" ? (n = n || {}, n.url = r) : n = r || {}, n = Y(this.defaults, n);
    const { transitional: t, paramsSerializer: o, headers: i } = n;
    t !== void 0 && Et.assertOptions(t, {
      silentJSONParsing: H.transitional(H.boolean),
      forcedJSONParsing: H.transitional(H.boolean),
      clarifyTimeoutError: H.transitional(H.boolean)
    }, !1), o != null && (y.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Et.assertOptions(o, {
      encode: H.function,
      serialize: H.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = i && y.merge(
      i.common,
      i[n.method]
    ), a && y.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (b) => {
        delete i[b];
      }
    ), n.headers = x.concat(a, i);
    const c = [];
    let s = !0;
    this.interceptors.request.forEach(function(O) {
      typeof O.runWhen == "function" && O.runWhen(n) === !1 || (s = s && O.synchronous, c.unshift(O.fulfilled, O.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(O) {
      u.push(O.fulfilled, O.rejected);
    });
    let f, h = 0, p;
    if (!s) {
      const b = [Xt.bind(this), void 0];
      for (b.unshift.apply(b, c), b.push.apply(b, u), p = b.length, f = Promise.resolve(n); h < p; )
        f = f.then(b[h++], b[h++]);
      return f;
    }
    p = c.length;
    let E = n;
    for (h = 0; h < p; ) {
      const b = c[h++], O = c[h++];
      try {
        E = b(E);
      } catch (w) {
        O.call(this, w);
        break;
      }
    }
    try {
      f = Xt.call(this, E);
    } catch (b) {
      return Promise.reject(b);
    }
    for (h = 0, p = u.length; h < p; )
      f = f.then(u[h++], u[h++]);
    return f;
  }
  getUri(r) {
    r = Y(this.defaults, r);
    const n = on(r.baseURL, r.url);
    return en(n, r.params, r.paramsSerializer);
  }
};
y.forEach(["delete", "get", "head", "options"], function(r) {
  pe.prototype[r] = function(n, t) {
    return this.request(Y(t || {}, {
      method: r,
      url: n,
      data: (t || {}).data
    }));
  };
});
y.forEach(["post", "put", "patch"], function(r) {
  function n(t) {
    return function(i, a, c) {
      return this.request(Y(c || {}, {
        method: r,
        headers: t ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  pe.prototype[r] = n(), pe.prototype[r + "Form"] = n(!0);
});
const de = pe;
class Ut {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const t = this;
    this.promise.then((o) => {
      if (!t._listeners)
        return;
      let i = t._listeners.length;
      for (; i-- > 0; )
        t._listeners[i](o);
      t._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const a = new Promise((c) => {
        t.subscribe(c), i = c;
      }).then(o);
      return a.cancel = function() {
        t.unsubscribe(i);
      }, a;
    }, r(function(i, a, c) {
      t.reason || (t.reason = new ue(i, a, c), n(t.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : this._listeners = [r];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(r) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(r);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let r;
    return {
      token: new Ut(function(o) {
        r = o;
      }),
      cancel: r
    };
  }
}
const io = Ut;
function oo(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function ao(e) {
  return y.isObject(e) && e.isAxiosError === !0;
}
const Ot = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Ot).forEach(([e, r]) => {
  Ot[r] = e;
});
const so = Ot;
function sn(e) {
  const r = new de(e), n = kr(de.prototype.request, r);
  return y.extend(n, de.prototype, r, { allOwnKeys: !0 }), y.extend(n, r, null, { allOwnKeys: !0 }), n.create = function(o) {
    return sn(Y(e, o));
  }, n;
}
const U = sn(Ct);
U.Axios = de;
U.CanceledError = ue;
U.CancelToken = io;
U.isCancel = nn;
U.VERSION = an;
U.toFormData = Oe;
U.AxiosError = C;
U.Cancel = U.CanceledError;
U.all = function(r) {
  return Promise.all(r);
};
U.spread = oo;
U.isAxiosError = ao;
U.mergeConfig = Y;
U.AxiosHeaders = x;
U.formToJSON = (e) => rn(y.isHTMLForm(e) ? new FormData(e) : e);
U.HttpStatusCode = so;
U.default = U;
const _e = U;
function uo(e) {
  return (e = e || _e).interceptors.response.use(lo, fo);
}
function co(e, r) {
  (r = r || _e).interceptors.response.eject(e);
}
function lo(e) {
  return e;
}
function Kt(e) {
  var r = [];
  if (e)
    return Array.isArray(e) ? e : (typeof e == "object" && Object.keys(e).forEach(function(n) {
      typeof n == "number" && (r[n] = e[n]);
    }), r);
}
function fo(e) {
  if (_e.isCancel(e))
    return Promise.reject(e);
  var r = cn(e) || {};
  if (r.currentRetryAttempt = r.currentRetryAttempt || 0, r.retry = typeof r.retry == "number" ? r.retry : 3, r.retryDelay = typeof r.retryDelay == "number" ? r.retryDelay : 100, r.instance = r.instance || _e, r.backoffType = r.backoffType || "exponential", r.httpMethodsToRetry = Kt(r.httpMethodsToRetry) || ["GET", "HEAD", "PUT", "OPTIONS", "DELETE"], r.noResponseRetries = typeof r.noResponseRetries == "number" ? r.noResponseRetries : 2, r.checkRetryAfter = typeof r.checkRetryAfter != "boolean" || r.checkRetryAfter, r.maxRetryAfter = typeof r.maxRetryAfter == "number" ? r.maxRetryAfter : 3e5, r.statusCodesToRetry = Kt(r.statusCodesToRetry) || [[100, 199], [429, 429], [500, 599]], e.config = e.config || {}, e.config.raxConfig = Object.assign({}, r), !(r.shouldRetry || un)(e))
    return Promise.reject(e);
  var n = new Promise(function(o, i) {
    var a = 0;
    if (r.checkRetryAfter && e.response && e.response.headers["retry-after"]) {
      var c = function(u) {
        var f = Number(u);
        if (!Number.isNaN(f))
          return 1e3 * f;
        var h = Date.parse(u);
        return Number.isNaN(h) ? void 0 : h - Date.now();
      }(e.response.headers["retry-after"]);
      if (!(c && c > 0 && c <= r.maxRetryAfter))
        return i(e);
      a = c;
    }
    e.config.raxConfig.currentRetryAttempt += 1;
    var s = e.config.raxConfig.currentRetryAttempt;
    a === 0 && (a = r.backoffType === "linear" ? 1e3 * s : r.backoffType === "static" ? r.retryDelay : (Math.pow(2, s) - 1) / 2 * 1e3, typeof r.maxRetryDelay == "number" && (a = Math.min(a, r.maxRetryDelay))), setTimeout(o, a);
  }), t = r.onRetryAttempt ? Promise.resolve(r.onRetryAttempt(e)) : Promise.resolve();
  return Promise.resolve().then(function() {
    return n;
  }).then(function() {
    return t;
  }).then(function() {
    return r.instance.request(e.config);
  });
}
function un(e) {
  var r = e.config.raxConfig;
  if (!r || r.retry === 0 || !e.response && (r.currentRetryAttempt || 0) >= r.noResponseRetries || !e.config.method || r.httpMethodsToRetry.indexOf(e.config.method.toUpperCase()) < 0)
    return !1;
  if (e.response && e.response.status) {
    for (var n = !1, t = 0, o = r.statusCodesToRetry; t < o.length; t += 1) {
      var i = o[t], a = e.response.status;
      if (a >= i[0] && a <= i[1]) {
        n = !0;
        break;
      }
    }
    if (!n)
      return !1;
  }
  return r.currentRetryAttempt = r.currentRetryAttempt || 0, !(r.currentRetryAttempt >= r.retry);
}
function cn(e) {
  if (e && e.config)
    return e.config.raxConfig;
}
const ho = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attach: uo,
  detach: co,
  getConfig: cn,
  shouldRetryRequest: un
}, Symbol.toStringTag, { value: "Module" })), mo = /* @__PURE__ */ wt(ho);
var $e = {}, j = {}, Z = {};
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.decodePath = Z.encodePath = void 0;
function po(e) {
  var r = [], n = [0, 0], t, o = function(i) {
    for (i = i < 0 ? ~(i << 1) : i << 1; i >= 32; )
      r.push(String.fromCharCode((32 | i & 31) + 63)), i >>= 5;
    r.push(String.fromCharCode(i + 63));
  };
  for (let i = 0, a = e.length || 0; i < a; ++i)
    t = [Math.round(e[i].lat * 1e5), Math.round(e[i].lng * 1e5)], o(t[0] - n[0]), o(t[1] - n[1]), n = t;
  return r.join("");
}
Z.encodePath = po;
function _o(e) {
  let r = e.length || 0, n = new Array(Math.floor(e.length / 2)), t = 0, o = 0, i = 0, a;
  for (a = 0; t < r; ++a) {
    let c = 1, s = 0, u;
    do
      u = e.charCodeAt(t++) - 63 - 1, c += u << s, s += 5;
    while (u >= 31);
    o += c & 1 ? ~(c >> 1) : c >> 1, c = 1, s = 0;
    do
      u = e.charCodeAt(t++) - 63 - 1, c += u << s, s += 5;
    while (u >= 31);
    i += c & 1 ? ~(c >> 1) : c >> 1, n[a] = { lat: o * 1e-5, lng: i * 1e-5 };
  }
  return n.length = a, n;
}
Z.decodePath = _o;
var ln = { exports: {} };
function yo(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var qe = { exports: {} };
const go = {}, vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: go
}, Symbol.toStringTag, { value: "Module" })), bo = /* @__PURE__ */ wt(vo);
var Qt;
function we() {
  return Qt || (Qt = 1, function(e, r) {
    (function(n, t) {
      e.exports = t();
    })(R, function() {
      var n = n || function(t, o) {
        var i;
        if (typeof window < "u" && window.crypto && (i = window.crypto), typeof self < "u" && self.crypto && (i = self.crypto), typeof globalThis < "u" && globalThis.crypto && (i = globalThis.crypto), !i && typeof window < "u" && window.msCrypto && (i = window.msCrypto), !i && typeof R < "u" && R.crypto && (i = R.crypto), !i && typeof yo == "function")
          try {
            i = bo;
          } catch {
          }
        var a = function() {
          if (i) {
            if (typeof i.getRandomValues == "function")
              try {
                return i.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof i.randomBytes == "function")
              try {
                return i.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, c = Object.create || function() {
          function l() {
          }
          return function(d) {
            var _;
            return l.prototype = d, _ = new l(), l.prototype = null, _;
          };
        }(), s = {}, u = s.lib = {}, f = u.Base = function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(l) {
              var d = c(this);
              return l && d.mixIn(l), (!d.hasOwnProperty("init") || this.init === d.init) && (d.init = function() {
                d.$super.init.apply(this, arguments);
              }), d.init.prototype = d, d.$super = this, d;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var l = this.extend();
              return l.init.apply(l, arguments), l;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(l) {
              for (var d in l)
                l.hasOwnProperty(d) && (this[d] = l[d]);
              l.hasOwnProperty("toString") && (this.toString = l.toString);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }(), h = u.WordArray = f.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(l, d) {
            l = this.words = l || [], d != o ? this.sigBytes = d : this.sigBytes = l.length * 4;
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(l) {
            return (l || E).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(l) {
            var d = this.words, _ = l.words, m = this.sigBytes, v = l.sigBytes;
            if (this.clamp(), m % 4)
              for (var S = 0; S < v; S++) {
                var g = _[S >>> 2] >>> 24 - S % 4 * 8 & 255;
                d[m + S >>> 2] |= g << 24 - (m + S) % 4 * 8;
              }
            else
              for (var N = 0; N < v; N += 4)
                d[m + N >>> 2] = _[N >>> 2];
            return this.sigBytes += v, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var l = this.words, d = this.sigBytes;
            l[d >>> 2] &= 4294967295 << 32 - d % 4 * 8, l.length = t.ceil(d / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var l = f.clone.call(this);
            return l.words = this.words.slice(0), l;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(l) {
            for (var d = [], _ = 0; _ < l; _ += 4)
              d.push(a());
            return new h.init(d, l);
          }
        }), p = s.enc = {}, E = p.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(l) {
            for (var d = l.words, _ = l.sigBytes, m = [], v = 0; v < _; v++) {
              var S = d[v >>> 2] >>> 24 - v % 4 * 8 & 255;
              m.push((S >>> 4).toString(16)), m.push((S & 15).toString(16));
            }
            return m.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(l) {
            for (var d = l.length, _ = [], m = 0; m < d; m += 2)
              _[m >>> 3] |= parseInt(l.substr(m, 2), 16) << 24 - m % 8 * 4;
            return new h.init(_, d / 2);
          }
        }, b = p.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(l) {
            for (var d = l.words, _ = l.sigBytes, m = [], v = 0; v < _; v++) {
              var S = d[v >>> 2] >>> 24 - v % 4 * 8 & 255;
              m.push(String.fromCharCode(S));
            }
            return m.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(l) {
            for (var d = l.length, _ = [], m = 0; m < d; m++)
              _[m >>> 2] |= (l.charCodeAt(m) & 255) << 24 - m % 4 * 8;
            return new h.init(_, d);
          }
        }, O = p.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(l) {
            try {
              return decodeURIComponent(escape(b.stringify(l)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(l) {
            return b.parse(unescape(encodeURIComponent(l)));
          }
        }, w = u.BufferedBlockAlgorithm = f.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new h.init(), this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(l) {
            typeof l == "string" && (l = O.parse(l)), this._data.concat(l), this._nDataBytes += l.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(l) {
            var d, _ = this._data, m = _.words, v = _.sigBytes, S = this.blockSize, g = S * 4, N = v / g;
            l ? N = t.ceil(N) : N = t.max((N | 0) - this._minBufferSize, 0);
            var L = N * S, V = t.min(L * 4, v);
            if (L) {
              for (var D = 0; D < L; D += S)
                this._doProcessBlock(m, D);
              d = m.splice(0, L), _.sigBytes -= V;
            }
            return new h.init(d, V);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var l = f.clone.call(this);
            return l._data = this._data.clone(), l;
          },
          _minBufferSize: 0
        });
        u.Hasher = w.extend({
          /**
           * Configuration options.
           */
          cfg: f.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(l) {
            this.cfg = this.cfg.extend(l), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            w.reset.call(this), this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(l) {
            return this._append(l), this._process(), this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(l) {
            l && this._append(l);
            var d = this._doFinalize();
            return d;
          },
          blockSize: 16,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(l) {
            return function(d, _) {
              return new l.init(_).finalize(d);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(l) {
            return function(d, _) {
              return new A.HMAC.init(l, _).finalize(d);
            };
          }
        });
        var A = s.algo = {};
        return s;
      }(Math);
      return n;
    });
  }(qe)), qe.exports;
}
(function(e, r) {
  (function(n, t) {
    e.exports = t(we());
  })(R, function(n) {
    return function() {
      var t = n, o = t.lib, i = o.WordArray, a = t.enc;
      a.Base64 = {
        /**
         * Converts a word array to a Base64 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Base64 string.
         *
         * @static
         *
         * @example
         *
         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
         */
        stringify: function(s) {
          var u = s.words, f = s.sigBytes, h = this._map;
          s.clamp();
          for (var p = [], E = 0; E < f; E += 3)
            for (var b = u[E >>> 2] >>> 24 - E % 4 * 8 & 255, O = u[E + 1 >>> 2] >>> 24 - (E + 1) % 4 * 8 & 255, w = u[E + 2 >>> 2] >>> 24 - (E + 2) % 4 * 8 & 255, A = b << 16 | O << 8 | w, l = 0; l < 4 && E + l * 0.75 < f; l++)
              p.push(h.charAt(A >>> 6 * (3 - l) & 63));
          var d = h.charAt(64);
          if (d)
            for (; p.length % 4; )
              p.push(d);
          return p.join("");
        },
        /**
         * Converts a Base64 string to a word array.
         *
         * @param {string} base64Str The Base64 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
         */
        parse: function(s) {
          var u = s.length, f = this._map, h = this._reverseMap;
          if (!h) {
            h = this._reverseMap = [];
            for (var p = 0; p < f.length; p++)
              h[f.charCodeAt(p)] = p;
          }
          var E = f.charAt(64);
          if (E) {
            var b = s.indexOf(E);
            b !== -1 && (u = b);
          }
          return c(s, u, h);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
      function c(s, u, f) {
        for (var h = [], p = 0, E = 0; E < u; E++)
          if (E % 4) {
            var b = f[s.charCodeAt(E - 1)] << E % 4 * 2, O = f[s.charCodeAt(E)] >>> 6 - E % 4 * 2, w = b | O;
            h[p >>> 2] |= w << 24 - p % 4 * 8, p++;
          }
        return i.create(h, p);
      }
    }(), n.enc.Base64;
  });
})(ln);
var Eo = ln.exports;
const fn = /* @__PURE__ */ Mr(Eo);
var dn = { exports: {} }, Me = { exports: {} }, Yt;
function Oo() {
  return Yt || (Yt = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(we());
    })(R, function(n) {
      return function() {
        var t = n, o = t.lib, i = o.WordArray, a = o.Hasher, c = t.algo, s = [], u = c.SHA1 = a.extend({
          _doReset: function() {
            this._hash = new i.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(f, h) {
            for (var p = this._hash.words, E = p[0], b = p[1], O = p[2], w = p[3], A = p[4], l = 0; l < 80; l++) {
              if (l < 16)
                s[l] = f[h + l] | 0;
              else {
                var d = s[l - 3] ^ s[l - 8] ^ s[l - 14] ^ s[l - 16];
                s[l] = d << 1 | d >>> 31;
              }
              var _ = (E << 5 | E >>> 27) + A + s[l];
              l < 20 ? _ += (b & O | ~b & w) + 1518500249 : l < 40 ? _ += (b ^ O ^ w) + 1859775393 : l < 60 ? _ += (b & O | b & w | O & w) - 1894007588 : _ += (b ^ O ^ w) - 899497514, A = w, w = O, O = b << 30 | b >>> 2, b = E, E = _;
            }
            p[0] = p[0] + E | 0, p[1] = p[1] + b | 0, p[2] = p[2] + O | 0, p[3] = p[3] + w | 0, p[4] = p[4] + A | 0;
          },
          _doFinalize: function() {
            var f = this._data, h = f.words, p = this._nDataBytes * 8, E = f.sigBytes * 8;
            return h[E >>> 5] |= 128 << 24 - E % 32, h[(E + 64 >>> 9 << 4) + 14] = Math.floor(p / 4294967296), h[(E + 64 >>> 9 << 4) + 15] = p, f.sigBytes = h.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var f = a.clone.call(this);
            return f._hash = this._hash.clone(), f;
          }
        });
        t.SHA1 = a._createHelper(u), t.HmacSHA1 = a._createHmacHelper(u);
      }(), n.SHA1;
    });
  }(Me)), Me.exports;
}
var ke = { exports: {} }, Zt;
function So() {
  return Zt || (Zt = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(we());
    })(R, function(n) {
      (function() {
        var t = n, o = t.lib, i = o.Base, a = t.enc, c = a.Utf8, s = t.algo;
        s.HMAC = i.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function(u, f) {
            u = this._hasher = new u.init(), typeof f == "string" && (f = c.parse(f));
            var h = u.blockSize, p = h * 4;
            f.sigBytes > p && (f = u.finalize(f)), f.clamp();
            for (var E = this._oKey = f.clone(), b = this._iKey = f.clone(), O = E.words, w = b.words, A = 0; A < h; A++)
              O[A] ^= 1549556828, w[A] ^= 909522486;
            E.sigBytes = b.sigBytes = p, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var u = this._hasher;
            u.reset(), u.update(this._iKey);
          },
          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function(u) {
            return this._hasher.update(u), this;
          },
          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function(u) {
            var f = this._hasher, h = f.finalize(u);
            f.reset();
            var p = f.finalize(this._oKey.clone().concat(h));
            return p;
          }
        });
      })();
    });
  }(ke)), ke.exports;
}
(function(e, r) {
  (function(n, t, o) {
    e.exports = t(we(), Oo(), So());
  })(R, function(n) {
    return n.HmacSHA1;
  });
})(dn);
var Ro = dn.exports;
const wo = /* @__PURE__ */ Mr(Ro);
function hn(e, r) {
  var n = No(r), t = wo(e, n).toString(fn);
  return t.replace(/\+/g, "-").replace(/\//g, "_");
}
function mn(e, r) {
  typeof e == "string" && (e = new URL(e));
  var n = "".concat(e.pathname).concat(e.search);
  return hn(n, r);
}
function Ao(e, r) {
  return typeof e == "string" && (e = new URL(e)), new URL(e.toString() + "&signature=" + mn(e, r));
}
function No(e) {
  var r = e.replace(/-/g, "+").replace(/_/g, "/");
  return fn.parse(r);
}
const Co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createSignature: mn,
  createSignatureForPathAndQuery: hn,
  signUrl: Ao
}, Symbol.toStringTag, { value: "Module" })), jo = /* @__PURE__ */ wt(Co);
var pn = {}, Uo = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (r) => `%${r.charCodeAt(0).toString(16).toUpperCase()}`), _n = "%[a-f0-9]{2}", er = new RegExp("(" + _n + ")|([^%]+?)", "gi"), tr = new RegExp("(" + _n + ")+", "gi");
function St(e, r) {
  try {
    return [decodeURIComponent(e.join(""))];
  } catch {
  }
  if (e.length === 1)
    return e;
  r = r || 1;
  var n = e.slice(0, r), t = e.slice(r);
  return Array.prototype.concat.call([], St(n), St(t));
}
function To(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var r = e.match(er) || [], n = 1; n < r.length; n++)
      e = St(r, n).join(""), r = e.match(er) || [];
    return e;
  }
}
function Po(e) {
  for (var r = {
    "%FE%FF": "��",
    "%FF%FE": "��"
  }, n = tr.exec(e); n; ) {
    try {
      r[n[0]] = decodeURIComponent(n[0]);
    } catch {
      var t = To(n[0]);
      t !== n[0] && (r[n[0]] = t);
    }
    n = tr.exec(e);
  }
  r["%C2"] = "�";
  for (var o = Object.keys(r), i = 0; i < o.length; i++) {
    var a = o[i];
    e = e.replace(new RegExp(a, "g"), r[a]);
  }
  return e;
}
var Io = function(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return Po(e);
  }
}, Do = (e, r) => {
  if (!(typeof e == "string" && typeof r == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (r === "")
    return [e];
  const n = e.indexOf(r);
  return n === -1 ? [e] : [
    e.slice(0, n),
    e.slice(n + r.length)
  ];
}, Fo = function(e, r) {
  for (var n = {}, t = Object.keys(e), o = Array.isArray(r), i = 0; i < t.length; i++) {
    var a = t[i], c = e[a];
    (o ? r.indexOf(a) !== -1 : r(a, c, e)) && (n[a] = c);
  }
  return n;
};
(function(e) {
  const r = Uo, n = Io, t = Do, o = Fo, i = (l) => l == null, a = Symbol("encodeFragmentIdentifier");
  function c(l) {
    switch (l.arrayFormat) {
      case "index":
        return (d) => (_, m) => {
          const v = _.length;
          return m === void 0 || l.skipNull && m === null || l.skipEmptyString && m === "" ? _ : m === null ? [..._, [f(d, l), "[", v, "]"].join("")] : [
            ..._,
            [f(d, l), "[", f(v, l), "]=", f(m, l)].join("")
          ];
        };
      case "bracket":
        return (d) => (_, m) => m === void 0 || l.skipNull && m === null || l.skipEmptyString && m === "" ? _ : m === null ? [..._, [f(d, l), "[]"].join("")] : [..._, [f(d, l), "[]=", f(m, l)].join("")];
      case "colon-list-separator":
        return (d) => (_, m) => m === void 0 || l.skipNull && m === null || l.skipEmptyString && m === "" ? _ : m === null ? [..._, [f(d, l), ":list="].join("")] : [..._, [f(d, l), ":list=", f(m, l)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const d = l.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (_) => (m, v) => v === void 0 || l.skipNull && v === null || l.skipEmptyString && v === "" ? m : (v = v === null ? "" : v, m.length === 0 ? [[f(_, l), d, f(v, l)].join("")] : [[m, f(v, l)].join(l.arrayFormatSeparator)]);
      }
      default:
        return (d) => (_, m) => m === void 0 || l.skipNull && m === null || l.skipEmptyString && m === "" ? _ : m === null ? [..._, f(d, l)] : [..._, [f(d, l), "=", f(m, l)].join("")];
    }
  }
  function s(l) {
    let d;
    switch (l.arrayFormat) {
      case "index":
        return (_, m, v) => {
          if (d = /\[(\d*)\]$/.exec(_), _ = _.replace(/\[\d*\]$/, ""), !d) {
            v[_] = m;
            return;
          }
          v[_] === void 0 && (v[_] = {}), v[_][d[1]] = m;
        };
      case "bracket":
        return (_, m, v) => {
          if (d = /(\[\])$/.exec(_), _ = _.replace(/\[\]$/, ""), !d) {
            v[_] = m;
            return;
          }
          if (v[_] === void 0) {
            v[_] = [m];
            return;
          }
          v[_] = [].concat(v[_], m);
        };
      case "colon-list-separator":
        return (_, m, v) => {
          if (d = /(:list)$/.exec(_), _ = _.replace(/:list$/, ""), !d) {
            v[_] = m;
            return;
          }
          if (v[_] === void 0) {
            v[_] = [m];
            return;
          }
          v[_] = [].concat(v[_], m);
        };
      case "comma":
      case "separator":
        return (_, m, v) => {
          const S = typeof m == "string" && m.includes(l.arrayFormatSeparator), g = typeof m == "string" && !S && h(m, l).includes(l.arrayFormatSeparator);
          m = g ? h(m, l) : m;
          const N = S || g ? m.split(l.arrayFormatSeparator).map((L) => h(L, l)) : m === null ? m : h(m, l);
          v[_] = N;
        };
      case "bracket-separator":
        return (_, m, v) => {
          const S = /(\[\])$/.test(_);
          if (_ = _.replace(/\[\]$/, ""), !S) {
            v[_] = m && h(m, l);
            return;
          }
          const g = m === null ? [] : m.split(l.arrayFormatSeparator).map((N) => h(N, l));
          if (v[_] === void 0) {
            v[_] = g;
            return;
          }
          v[_] = [].concat(v[_], g);
        };
      default:
        return (_, m, v) => {
          if (v[_] === void 0) {
            v[_] = m;
            return;
          }
          v[_] = [].concat(v[_], m);
        };
    }
  }
  function u(l) {
    if (typeof l != "string" || l.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function f(l, d) {
    return d.encode ? d.strict ? r(l) : encodeURIComponent(l) : l;
  }
  function h(l, d) {
    return d.decode ? n(l) : l;
  }
  function p(l) {
    return Array.isArray(l) ? l.sort() : typeof l == "object" ? p(Object.keys(l)).sort((d, _) => Number(d) - Number(_)).map((d) => l[d]) : l;
  }
  function E(l) {
    const d = l.indexOf("#");
    return d !== -1 && (l = l.slice(0, d)), l;
  }
  function b(l) {
    let d = "";
    const _ = l.indexOf("#");
    return _ !== -1 && (d = l.slice(_)), d;
  }
  function O(l) {
    l = E(l);
    const d = l.indexOf("?");
    return d === -1 ? "" : l.slice(d + 1);
  }
  function w(l, d) {
    return d.parseNumbers && !Number.isNaN(Number(l)) && typeof l == "string" && l.trim() !== "" ? l = Number(l) : d.parseBooleans && l !== null && (l.toLowerCase() === "true" || l.toLowerCase() === "false") && (l = l.toLowerCase() === "true"), l;
  }
  function A(l, d) {
    d = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, d), u(d.arrayFormatSeparator);
    const _ = s(d), m = /* @__PURE__ */ Object.create(null);
    if (typeof l != "string" || (l = l.trim().replace(/^[?#&]/, ""), !l))
      return m;
    for (const v of l.split("&")) {
      if (v === "")
        continue;
      let [S, g] = t(d.decode ? v.replace(/\+/g, " ") : v, "=");
      g = g === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(d.arrayFormat) ? g : h(g, d), _(h(S, d), g, m);
    }
    for (const v of Object.keys(m)) {
      const S = m[v];
      if (typeof S == "object" && S !== null)
        for (const g of Object.keys(S))
          S[g] = w(S[g], d);
      else
        m[v] = w(S, d);
    }
    return d.sort === !1 ? m : (d.sort === !0 ? Object.keys(m).sort() : Object.keys(m).sort(d.sort)).reduce((v, S) => {
      const g = m[S];
      return g && typeof g == "object" && !Array.isArray(g) ? v[S] = p(g) : v[S] = g, v;
    }, /* @__PURE__ */ Object.create(null));
  }
  e.extract = O, e.parse = A, e.stringify = (l, d) => {
    if (!l)
      return "";
    d = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, d), u(d.arrayFormatSeparator);
    const _ = (g) => d.skipNull && i(l[g]) || d.skipEmptyString && l[g] === "", m = c(d), v = {};
    for (const g of Object.keys(l))
      _(g) || (v[g] = l[g]);
    const S = Object.keys(v);
    return d.sort !== !1 && S.sort(d.sort), S.map((g) => {
      const N = l[g];
      return N === void 0 ? "" : N === null ? f(g, d) : Array.isArray(N) ? N.length === 0 && d.arrayFormat === "bracket-separator" ? f(g, d) + "[]" : N.reduce(m(g), []).join("&") : f(g, d) + "=" + f(N, d);
    }).filter((g) => g.length > 0).join("&");
  }, e.parseUrl = (l, d) => {
    d = Object.assign({
      decode: !0
    }, d);
    const [_, m] = t(l, "#");
    return Object.assign(
      {
        url: _.split("?")[0] || "",
        query: A(O(l), d)
      },
      d && d.parseFragmentIdentifier && m ? { fragmentIdentifier: h(m, d) } : {}
    );
  }, e.stringifyUrl = (l, d) => {
    d = Object.assign({
      encode: !0,
      strict: !0,
      [a]: !0
    }, d);
    const _ = E(l.url).split("?")[0] || "", m = e.extract(l.url), v = e.parse(m, { sort: !1 }), S = Object.assign(v, l.query);
    let g = e.stringify(S, d);
    g && (g = `?${g}`);
    let N = b(l.url);
    return l.fragmentIdentifier && (N = `#${d[a] ? f(l.fragmentIdentifier, d) : l.fragmentIdentifier}`), `${_}${g}${N}`;
  }, e.pick = (l, d, _) => {
    _ = Object.assign({
      parseFragmentIdentifier: !0,
      [a]: !1
    }, _);
    const { url: m, query: v, fragmentIdentifier: S } = e.parseUrl(l, _);
    return e.stringifyUrl({
      url: m,
      query: o(v, d),
      fragmentIdentifier: S
    }, _);
  }, e.exclude = (l, d, _) => {
    const m = Array.isArray(d) ? (v) => !d.includes(v) : (v, S) => !d(v, S);
    return e.pick(l, m, _);
  };
})(pn);
Object.defineProperty(j, "__esModule", { value: !0 });
j.createPremiumPlanQueryString = j.toTimestamp = j.serializer = j.latLngArrayToStringMaybeEncoded = j.toLatLngLiteral = j.latLngBoundsToString = j.objectToString = j.latLngToString = void 0;
const Bo = Z, Lo = jo, yn = pn, Ae = "|";
function ye(e) {
  if (typeof e == "string")
    return e;
  if (!(Array.isArray(e) && e.length === 2))
    if ("lat" in e && "lng" in e)
      e = [e.lat, e.lng];
    else if ("latitude" in e && "longitude" in e)
      e = [e.latitude, e.longitude];
    else
      throw new TypeError();
  return e.map((r) => r.toString()).join(",");
}
j.latLngToString = ye;
function zo(e) {
  if (typeof e == "string")
    return e;
  {
    let r = Object.keys(e);
    return r.sort(), r.map((n) => n + ":" + e[n]).join(Ae);
  }
}
j.objectToString = zo;
function $o(e) {
  return typeof e == "string" ? e : ye(e.southwest) + Ae + ye(e.northeast);
}
j.latLngBoundsToString = $o;
function gn(e) {
  if (typeof e == "string") {
    const r = e.split(",").map(Number);
    return { lat: r[0], lng: r[1] };
  } else if (Array.isArray(e) && e.length === 2) {
    const r = e.map(Number);
    return { lat: r[0], lng: r[1] };
  } else {
    if ("lat" in e && "lng" in e)
      return e;
    if ("latitude" in e && "longitude" in e)
      return { lat: e.latitude, lng: e.longitude };
    throw new TypeError();
  }
}
j.toLatLngLiteral = gn;
function qo(e) {
  if (typeof e == "string")
    return e;
  const r = e.map(ye).join(Ae), n = `enc:${(0, Bo.encodePath)(e.map(gn))}`;
  return n.length < r.length ? n : r;
}
j.latLngArrayToStringMaybeEncoded = qo;
function Mo(e, r, n = {
  arrayFormat: "separator",
  arrayFormatSeparator: Ae
}) {
  return (t) => {
    const o = Object.assign({}, t);
    return Object.keys(e).forEach((i) => {
      i in o && (o[i] = e[i](o[i]));
    }), "client_id" in o && "client_secret" in o ? vn(o, n, r) : (0, yn.stringify)(o, n);
  };
}
j.serializer = Mo;
function ko(e) {
  return e === "now" ? e : e instanceof Date ? Math.round(Number(e) / 1e3) : e;
}
j.toTimestamp = ko;
function vn(e, r, n) {
  e.client = e.client_id;
  const t = e.client_secret;
  delete e.client_id, delete e.client_secret;
  const o = (0, yn.stringify)(e, r), i = `${n}?${o}`, a = (0, Lo.createSignature)(i, t);
  return `${o}&signature=${a}`;
}
j.createPremiumPlanQueryString = vn;
var rr;
function xo() {
  return rr || (rr = 1, function(e) {
    var r = R && R.__rest || function(i, a) {
      var c = {};
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && a.indexOf(s) < 0 && (c[s] = i[s]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var u = 0, s = Object.getOwnPropertySymbols(i); u < s.length; u++)
          a.indexOf(s[u]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[u]) && (c[s[u]] = i[s[u]]);
      return c;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.directions = e.defaultParamsSerializer = e.defaultUrl = void 0;
    const n = j, t = I();
    e.defaultUrl = "https://maps.googleapis.com/maps/api/directions/json", e.defaultParamsSerializer = (0, n.serializer)({
      origin: n.latLngToString,
      destination: n.latLngToString,
      waypoints: (i) => i.map(n.latLngToString),
      arrival_time: n.toTimestamp,
      departure_time: n.toTimestamp
    }, e.defaultUrl);
    function o(i, a) {
      var { params: c, method: s = "get", url: u = e.defaultUrl, paramsSerializer: f = e.defaultParamsSerializer } = i, h = r(i, ["params", "method", "url", "paramsSerializer"]);
      a === void 0 && (a = t.defaultAxiosInstance);
      const { optimize: p } = c;
      return p && (c.waypoints = ["optimize:true", ...c.waypoints]), delete c.optimize, a(Object.assign({
        params: c,
        method: s,
        url: u,
        paramsSerializer: f
      }, h));
    }
    e.directions = o;
  }($e)), $e;
}
var xe = {}, nr;
function Ho() {
  return nr || (nr = 1, function(e) {
    var r = R && R.__rest || function(i, a) {
      var c = {};
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && a.indexOf(s) < 0 && (c[s] = i[s]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var u = 0, s = Object.getOwnPropertySymbols(i); u < s.length; u++)
          a.indexOf(s[u]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[u]) && (c[s[u]] = i[s[u]]);
      return c;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.distancematrix = e.defaultParamsSerializer = e.defaultUrl = void 0;
    const n = j, t = I();
    e.defaultUrl = "https://maps.googleapis.com/maps/api/distancematrix/json", e.defaultParamsSerializer = (0, n.serializer)({
      origins: (i) => i.map(n.latLngToString),
      destinations: (i) => i.map(n.latLngToString),
      arrival_time: n.toTimestamp,
      departure_time: n.toTimestamp
    }, e.defaultUrl);
    function o(i, a) {
      var { params: c, method: s = "get", url: u = e.defaultUrl, paramsSerializer: f = e.defaultParamsSerializer } = i, h = r(i, ["params", "method", "url", "paramsSerializer"]);
      return a === void 0 && (a = t.defaultAxiosInstance), a(Object.assign({
        params: c,
        method: s,
        url: u,
        paramsSerializer: f
      }, h));
    }
    e.distancematrix = o;
  }(xe)), xe;
}
var He = {}, ir;
function Wo() {
  return ir || (ir = 1, function(e) {
    var r = R && R.__rest || function(i, a) {
      var c = {};
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && a.indexOf(s) < 0 && (c[s] = i[s]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var u = 0, s = Object.getOwnPropertySymbols(i); u < s.length; u++)
          a.indexOf(s[u]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[u]) && (c[s[u]] = i[s[u]]);
      return c;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.elevation = e.defaultParamsSerializer = e.defaultUrl = void 0;
    const n = I(), t = j;
    e.defaultUrl = "https://maps.googleapis.com/maps/api/elevation/json", e.defaultParamsSerializer = (0, t.serializer)({
      locations: (i) => i.map(t.latLngToString),
      path: (i) => i.map(t.latLngToString)
    }, e.defaultUrl);
    function o(i, a) {
      var { params: c, method: s = "get", url: u = e.defaultUrl, paramsSerializer: f = e.defaultParamsSerializer } = i, h = r(i, ["params", "method", "url", "paramsSerializer"]);
      return a === void 0 && (a = n.defaultAxiosInstance), a(Object.assign({
        params: c,
        method: s,
        url: u,
        paramsSerializer: f
      }, h));
    }
    e.elevation = o;
  }(He)), He;
}
var We = {}, or;
function Go() {
  return or || (or = 1, function(e) {
    var r = R && R.__rest || function(i, a) {
      var c = {};
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && a.indexOf(s) < 0 && (c[s] = i[s]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var u = 0, s = Object.getOwnPropertySymbols(i); u < s.length; u++)
          a.indexOf(s[u]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[u]) && (c[s[u]] = i[s[u]]);
      return c;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.findPlaceFromText = e.defaultParamsSerializer = e.defaultUrl = void 0;
    const n = I(), t = j;
    e.defaultUrl = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json", e.defaultParamsSerializer = (0, t.serializer)({}, e.defaultUrl, { arrayFormat: "comma" });
    function o(i, a) {
      var { params: c, method: s = "get", url: u = e.defaultUrl, paramsSerializer: f = e.defaultParamsSerializer } = i, h = r(i, ["params", "method", "url", "paramsSerializer"]);
      return a === void 0 && (a = n.defaultAxiosInstance), a(Object.assign({
        params: c,
        method: s,
        url: u,
        paramsSerializer: f
      }, h));
    }
    e.findPlaceFromText = o;
  }(We)), We;
}
var Ge = {}, ar;
function Xo() {
  return ar || (ar = 1, function(e) {
    var r = R && R.__rest || function(i, a) {
      var c = {};
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && a.indexOf(s) < 0 && (c[s] = i[s]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var u = 0, s = Object.getOwnPropertySymbols(i); u < s.length; u++)
          a.indexOf(s[u]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[u]) && (c[s[u]] = i[s[u]]);
      return c;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.geocode = e.defaultParamsSerializer = e.defaultUrl = void 0;
    const n = I(), t = j;
    e.defaultUrl = "https://maps.googleapis.com/maps/api/geocode/json", e.defaultParamsSerializer = (0, t.serializer)({
      bounds: t.latLngBoundsToString,
      components: t.objectToString
    }, e.defaultUrl);
    function o(i, a) {
      var { params: c, method: s = "get", url: u = e.defaultUrl, paramsSerializer: f = e.defaultParamsSerializer } = i, h = r(i, ["params", "method", "url", "paramsSerializer"]);
      return a === void 0 && (a = n.defaultAxiosInstance), a(Object.assign({
        params: c,
        method: s,
        url: u,
        paramsSerializer: f
      }, h));
    }
    e.geocode = o;
  }(Ge)), Ge;
}
var Xe = {}, sr;
function Vo() {
  return sr || (sr = 1, function(e) {
    var r = R && R.__rest || function(i, a) {
      var c = {};
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && a.indexOf(s) < 0 && (c[s] = i[s]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var u = 0, s = Object.getOwnPropertySymbols(i); u < s.length; u++)
          a.indexOf(s[u]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[u]) && (c[s[u]] = i[s[u]]);
      return c;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.nearestRoads = e.defaultParamsSerializer = e.defaultUrl = void 0;
    const n = I(), t = j;
    e.defaultUrl = "https://roads.googleapis.com/v1/nearestRoads", e.defaultParamsSerializer = (0, t.serializer)({
      points: (i) => i.map((a) => (0, t.latLngToString)(a))
    }, e.defaultUrl);
    function o(i, a) {
      var { params: c, method: s = "get", url: u = e.defaultUrl, paramsSerializer: f = e.defaultParamsSerializer } = i, h = r(i, ["params", "method", "url", "paramsSerializer"]);
      return a === void 0 && (a = n.defaultAxiosInstance), a(Object.assign({
        params: c,
        method: s,
        url: u,
        paramsSerializer: f
      }, h));
    }
    e.nearestRoads = o;
  }(Xe)), Xe;
}
var Ve = {}, ur;
function bn() {
  return ur || (ur = 1, function(e) {
    var r = R && R.__rest || function(i, a) {
      var c = {};
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && a.indexOf(s) < 0 && (c[s] = i[s]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var u = 0, s = Object.getOwnPropertySymbols(i); u < s.length; u++)
          a.indexOf(s[u]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[u]) && (c[s[u]] = i[s[u]]);
      return c;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.placeAutocomplete = e.defaultParamsSerializer = e.defaultUrl = e.PlaceAutocompleteType = void 0;
    const n = j, t = I();
    (function(i) {
      i.geocode = "geocode", i.address = "address", i.establishment = "establishment", i.regions = "(regions)", i.cities = "(cities)";
    })(e.PlaceAutocompleteType || (e.PlaceAutocompleteType = {})), e.defaultUrl = "https://maps.googleapis.com/maps/api/place/autocomplete/json", e.defaultParamsSerializer = (0, n.serializer)({
      location: n.latLngToString,
      origin: n.latLngToString
    }, e.defaultUrl);
    function o(i, a) {
      var { params: c, method: s = "get", url: u = e.defaultUrl, paramsSerializer: f = e.defaultParamsSerializer } = i, h = r(i, ["params", "method", "url", "paramsSerializer"]);
      return a === void 0 && (a = t.defaultAxiosInstance), a(Object.assign({
        params: c,
        method: s,
        url: u,
        paramsSerializer: f
      }, h));
    }
    e.placeAutocomplete = o;
  }(Ve)), Ve;
}
var Je = {}, cr;
function Jo() {
  return cr || (cr = 1, function(e) {
    var r = R && R.__rest || function(i, a) {
      var c = {};
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && a.indexOf(s) < 0 && (c[s] = i[s]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var u = 0, s = Object.getOwnPropertySymbols(i); u < s.length; u++)
          a.indexOf(s[u]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[u]) && (c[s[u]] = i[s[u]]);
      return c;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.placeDetails = e.defaultParamsSerializer = e.defaultUrl = void 0;
    const n = I(), t = j;
    e.defaultUrl = "https://maps.googleapis.com/maps/api/place/details/json", e.defaultParamsSerializer = (0, t.serializer)({}, e.defaultUrl, { arrayFormat: "comma" });
    function o(i, a) {
      var { params: c, method: s = "get", url: u = e.defaultUrl, paramsSerializer: f = e.defaultParamsSerializer } = i, h = r(i, ["params", "method", "url", "paramsSerializer"]);
      return a === void 0 && (a = n.defaultAxiosInstance), a(Object.assign({
        params: c,
        method: s,
        url: u,
        paramsSerializer: f
      }, h));
    }
    e.placeDetails = o;
  }(Je)), Je;
}
var Ke = {}, lr;
function Ko() {
  return lr || (lr = 1, function(e) {
    var r = R && R.__rest || function(o, i) {
      var a = {};
      for (var c in o)
        Object.prototype.hasOwnProperty.call(o, c) && i.indexOf(c) < 0 && (a[c] = o[c]);
      if (o != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, c = Object.getOwnPropertySymbols(o); s < c.length; s++)
          i.indexOf(c[s]) < 0 && Object.prototype.propertyIsEnumerable.call(o, c[s]) && (a[c[s]] = o[c[s]]);
      return a;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.placePhoto = e.defaultUrl = void 0;
    const n = I();
    e.defaultUrl = "https://maps.googleapis.com/maps/api/place/photo";
    function t(o, i) {
      var { params: a, method: c = "get", url: s = e.defaultUrl, responseType: u } = o, f = r(o, ["params", "method", "url", "responseType"]);
      return i === void 0 && (i = n.defaultAxiosInstance), u || (u = "arraybuffer"), i(Object.assign({
        params: a,
        method: c,
        url: s,
        responseType: u
      }, f));
    }
    e.placePhoto = t;
  }(Ke)), Ke;
}
var Qe = {}, fr;
function Qo() {
  return fr || (fr = 1, function(e) {
    var r = R && R.__rest || function(i, a) {
      var c = {};
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && a.indexOf(s) < 0 && (c[s] = i[s]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var u = 0, s = Object.getOwnPropertySymbols(i); u < s.length; u++)
          a.indexOf(s[u]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[u]) && (c[s[u]] = i[s[u]]);
      return c;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.placeQueryAutocomplete = e.defaultParamsSerializer = e.defaultUrl = void 0;
    const n = I(), t = j;
    e.defaultUrl = "https://maps.googleapis.com/maps/api/place/queryautocomplete/json", e.defaultParamsSerializer = (0, t.serializer)({ location: t.latLngToString }, e.defaultUrl);
    function o(i, a) {
      var { params: c, method: s = "get", url: u = e.defaultUrl, paramsSerializer: f = e.defaultParamsSerializer } = i, h = r(i, ["params", "method", "url", "paramsSerializer"]);
      return a === void 0 && (a = n.defaultAxiosInstance), a(Object.assign({
        params: c,
        method: s,
        url: u,
        paramsSerializer: f
      }, h));
    }
    e.placeQueryAutocomplete = o;
  }(Qe)), Qe;
}
var Ye = {}, dr;
function En() {
  return dr || (dr = 1, function(e) {
    var r = R && R.__rest || function(i, a) {
      var c = {};
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && a.indexOf(s) < 0 && (c[s] = i[s]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var u = 0, s = Object.getOwnPropertySymbols(i); u < s.length; u++)
          a.indexOf(s[u]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[u]) && (c[s[u]] = i[s[u]]);
      return c;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.placesNearby = e.defaultParamsSerializer = e.defaultUrl = e.PlacesNearbyRanking = void 0;
    const n = j, t = I();
    (function(i) {
      i.prominence = "prominence", i.distance = "distance";
    })(e.PlacesNearbyRanking || (e.PlacesNearbyRanking = {})), e.defaultUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json", e.defaultParamsSerializer = (0, n.serializer)({ location: n.latLngToString }, e.defaultUrl);
    function o(i, a) {
      var { params: c, method: s = "get", url: u = e.defaultUrl, paramsSerializer: f = e.defaultParamsSerializer } = i, h = r(i, ["params", "method", "url", "paramsSerializer"]);
      return a === void 0 && (a = t.defaultAxiosInstance), a(Object.assign({
        params: c,
        method: s,
        url: u,
        paramsSerializer: f
      }, h));
    }
    e.placesNearby = o;
  }(Ye)), Ye;
}
var Ze = {}, hr;
function On() {
  return hr || (hr = 1, function(e) {
    var r = R && R.__rest || function(i, a) {
      var c = {};
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && a.indexOf(s) < 0 && (c[s] = i[s]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var u = 0, s = Object.getOwnPropertySymbols(i); u < s.length; u++)
          a.indexOf(s[u]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[u]) && (c[s[u]] = i[s[u]]);
      return c;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.reverseGeocode = e.defaultParamsSerializer = e.defaultUrl = e.ReverseGeocodingLocationType = void 0;
    const n = j, t = I();
    (function(i) {
      i.ROOFTOP = "ROOFTOP", i.RANGE_INTERPOLATED = "RANGE_INTERPOLATED", i.GEOMETRIC_CENTER = "GEOMETRIC_CENTER", i.APPROXIMATE = "APPROXIMATE";
    })(e.ReverseGeocodingLocationType || (e.ReverseGeocodingLocationType = {})), e.defaultUrl = "https://maps.googleapis.com/maps/api/geocode/json", e.defaultParamsSerializer = (0, n.serializer)({
      latlng: n.latLngToString
    }, e.defaultUrl);
    function o(i, a) {
      var { params: c, method: s = "get", url: u = e.defaultUrl, paramsSerializer: f = e.defaultParamsSerializer } = i, h = r(i, ["params", "method", "url", "paramsSerializer"]);
      return a === void 0 && (a = t.defaultAxiosInstance), a(Object.assign({
        params: c,
        method: s,
        url: u,
        paramsSerializer: f
      }, h));
    }
    e.reverseGeocode = o;
  }(Ze)), Ze;
}
var et = {}, mr;
function Yo() {
  return mr || (mr = 1, function(e) {
    var r = R && R.__rest || function(i, a) {
      var c = {};
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && a.indexOf(s) < 0 && (c[s] = i[s]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var u = 0, s = Object.getOwnPropertySymbols(i); u < s.length; u++)
          a.indexOf(s[u]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[u]) && (c[s[u]] = i[s[u]]);
      return c;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.snapToRoads = e.defaultParamsSerializer = e.defaultUrl = void 0;
    const n = I(), t = j;
    e.defaultUrl = "https://roads.googleapis.com/v1/snapToRoads", e.defaultParamsSerializer = (0, t.serializer)({
      path: (i) => i.map(t.latLngToString)
    }, e.defaultUrl);
    function o(i, a) {
      var { params: c, method: s = "get", url: u = e.defaultUrl, paramsSerializer: f = e.defaultParamsSerializer } = i, h = r(i, ["params", "method", "url", "paramsSerializer"]);
      return a === void 0 && (a = n.defaultAxiosInstance), a(Object.assign({
        params: c,
        method: s,
        url: u,
        paramsSerializer: f
      }, h));
    }
    e.snapToRoads = o;
  }(et)), et;
}
var tt = {}, pr;
function Zo() {
  return pr || (pr = 1, function(e) {
    var r = R && R.__rest || function(i, a) {
      var c = {};
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && a.indexOf(s) < 0 && (c[s] = i[s]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var u = 0, s = Object.getOwnPropertySymbols(i); u < s.length; u++)
          a.indexOf(s[u]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[u]) && (c[s[u]] = i[s[u]]);
      return c;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.textSearch = e.defaultParamsSerializer = e.defaultUrl = void 0;
    const n = I(), t = j;
    e.defaultUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json", e.defaultParamsSerializer = (0, t.serializer)({ location: t.latLngToString }, e.defaultUrl);
    function o(i, a) {
      var { params: c, method: s = "get", url: u = e.defaultUrl, paramsSerializer: f = e.defaultParamsSerializer } = i, h = r(i, ["params", "method", "url", "paramsSerializer"]);
      return a === void 0 && (a = n.defaultAxiosInstance), a(Object.assign({
        params: c,
        method: s,
        url: u,
        paramsSerializer: f
      }, h));
    }
    e.textSearch = o;
  }(tt)), tt;
}
var rt = {}, _r;
function ea() {
  return _r || (_r = 1, function(e) {
    var r = R && R.__rest || function(i, a) {
      var c = {};
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && a.indexOf(s) < 0 && (c[s] = i[s]);
      if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var u = 0, s = Object.getOwnPropertySymbols(i); u < s.length; u++)
          a.indexOf(s[u]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[u]) && (c[s[u]] = i[s[u]]);
      return c;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.timezone = e.defaultParamsSerializer = e.defaultUrl = void 0;
    const n = j, t = I();
    e.defaultUrl = "https://maps.googleapis.com/maps/api/timezone/json", e.defaultParamsSerializer = (0, n.serializer)({
      timestamp: n.toTimestamp,
      location: n.latLngToString
    }, e.defaultUrl);
    function o(i, a) {
      var { params: c, method: s = "get", url: u = e.defaultUrl, paramsSerializer: f = e.defaultParamsSerializer } = i, h = r(i, ["params", "method", "url", "paramsSerializer"]);
      return a === void 0 && (a = t.defaultAxiosInstance), a(Object.assign({
        params: c,
        method: s,
        url: u,
        paramsSerializer: f
      }, h));
    }
    e.timezone = o;
  }(rt)), rt;
}
var Tt = { exports: {} }, Sn = function(r, n) {
  return function() {
    for (var o = new Array(arguments.length), i = 0; i < o.length; i++)
      o[i] = arguments[i];
    return r.apply(n, o);
  };
}, ta = Sn, Pt = Object.prototype.toString, It = function(e) {
  return function(r) {
    var n = Pt.call(r);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function X(e) {
  return e = e.toLowerCase(), function(n) {
    return It(n) === e;
  };
}
function Dt(e) {
  return Array.isArray(e);
}
function ge(e) {
  return typeof e > "u";
}
function ra(e) {
  return e !== null && !ge(e) && e.constructor !== null && !ge(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Rn = X("ArrayBuffer");
function na(e) {
  var r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && Rn(e.buffer), r;
}
function ia(e) {
  return typeof e == "string";
}
function oa(e) {
  return typeof e == "number";
}
function wn(e) {
  return e !== null && typeof e == "object";
}
function he(e) {
  if (It(e) !== "object")
    return !1;
  var r = Object.getPrototypeOf(e);
  return r === null || r === Object.prototype;
}
var aa = X("Date"), sa = X("File"), ua = X("Blob"), ca = X("FileList");
function Ft(e) {
  return Pt.call(e) === "[object Function]";
}
function la(e) {
  return wn(e) && Ft(e.pipe);
}
function fa(e) {
  var r = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Pt.call(e) === r || Ft(e.toString) && e.toString() === r);
}
var da = X("URLSearchParams");
function ha(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function ma() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Bt(e, r) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Dt(e))
      for (var n = 0, t = e.length; n < t; n++)
        r.call(null, e[n], n, e);
    else
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && r.call(null, e[o], o, e);
}
function Rt() {
  var e = {};
  function r(o, i) {
    he(e[i]) && he(o) ? e[i] = Rt(e[i], o) : he(o) ? e[i] = Rt({}, o) : Dt(o) ? e[i] = o.slice() : e[i] = o;
  }
  for (var n = 0, t = arguments.length; n < t; n++)
    Bt(arguments[n], r);
  return e;
}
function pa(e, r, n) {
  return Bt(r, function(o, i) {
    n && typeof o == "function" ? e[i] = ta(o, n) : e[i] = o;
  }), e;
}
function _a(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function ya(e, r, n, t) {
  e.prototype = Object.create(r.prototype, t), e.prototype.constructor = e, n && Object.assign(e.prototype, n);
}
function ga(e, r, n) {
  var t, o, i, a = {};
  r = r || {};
  do {
    for (t = Object.getOwnPropertyNames(e), o = t.length; o-- > 0; )
      i = t[o], a[i] || (r[i] = e[i], a[i] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!n || n(e, r)) && e !== Object.prototype);
  return r;
}
function va(e, r, n) {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= r.length;
  var t = e.indexOf(r, n);
  return t !== -1 && t === n;
}
function ba(e) {
  if (!e)
    return null;
  var r = e.length;
  if (ge(r))
    return null;
  for (var n = new Array(r); r-- > 0; )
    n[r] = e[r];
  return n;
}
var Ea = function(e) {
  return function(r) {
    return e && r instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), P = {
  isArray: Dt,
  isArrayBuffer: Rn,
  isBuffer: ra,
  isFormData: fa,
  isArrayBufferView: na,
  isString: ia,
  isNumber: oa,
  isObject: wn,
  isPlainObject: he,
  isUndefined: ge,
  isDate: aa,
  isFile: sa,
  isBlob: ua,
  isFunction: Ft,
  isStream: la,
  isURLSearchParams: da,
  isStandardBrowserEnv: ma,
  forEach: Bt,
  merge: Rt,
  extend: pa,
  trim: ha,
  stripBOM: _a,
  inherits: ya,
  toFlatObject: ga,
  kindOf: It,
  kindOfTest: X,
  endsWith: va,
  toArray: ba,
  isTypedArray: Ea,
  isFileList: ca
}, K = P;
function yr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var An = function(r, n, t) {
  if (!n)
    return r;
  var o;
  if (t)
    o = t(n);
  else if (K.isURLSearchParams(n))
    o = n.toString();
  else {
    var i = [];
    K.forEach(n, function(s, u) {
      s === null || typeof s > "u" || (K.isArray(s) ? u = u + "[]" : s = [s], K.forEach(s, function(h) {
        K.isDate(h) ? h = h.toISOString() : K.isObject(h) && (h = JSON.stringify(h)), i.push(yr(u) + "=" + yr(h));
      }));
    }), o = i.join("&");
  }
  if (o) {
    var a = r.indexOf("#");
    a !== -1 && (r = r.slice(0, a)), r += (r.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return r;
}, Oa = P;
function Ne() {
  this.handlers = [];
}
Ne.prototype.use = function(r, n, t) {
  return this.handlers.push({
    fulfilled: r,
    rejected: n,
    synchronous: t ? t.synchronous : !1,
    runWhen: t ? t.runWhen : null
  }), this.handlers.length - 1;
};
Ne.prototype.eject = function(r) {
  this.handlers[r] && (this.handlers[r] = null);
};
Ne.prototype.forEach = function(r) {
  Oa.forEach(this.handlers, function(t) {
    t !== null && r(t);
  });
};
var Sa = Ne, Ra = P, wa = function(r, n) {
  Ra.forEach(r, function(o, i) {
    i !== n && i.toUpperCase() === n.toUpperCase() && (r[n] = o, delete r[i]);
  });
}, Nn = P;
function ee(e, r, n, t, o) {
  Error.call(this), this.message = e, this.name = "AxiosError", r && (this.code = r), n && (this.config = n), t && (this.request = t), o && (this.response = o);
}
Nn.inherits(ee, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var Cn = ee.prototype, jn = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
  // eslint-disable-next-line func-names
].forEach(function(e) {
  jn[e] = { value: e };
});
Object.defineProperties(ee, jn);
Object.defineProperty(Cn, "isAxiosError", { value: !0 });
ee.from = function(e, r, n, t, o, i) {
  var a = Object.create(Cn);
  return Nn.toFlatObject(e, a, function(s) {
    return s !== Error.prototype;
  }), ee.call(a, e.message, r, n, t, o), a.name = e.name, i && Object.assign(a, i), a;
};
var ie = ee, Un = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, $ = P;
function Aa(e, r) {
  r = r || new FormData();
  var n = [];
  function t(i) {
    return i === null ? "" : $.isDate(i) ? i.toISOString() : $.isArrayBuffer(i) || $.isTypedArray(i) ? typeof Blob == "function" ? new Blob([i]) : Buffer.from(i) : i;
  }
  function o(i, a) {
    if ($.isPlainObject(i) || $.isArray(i)) {
      if (n.indexOf(i) !== -1)
        throw Error("Circular reference detected in " + a);
      n.push(i), $.forEach(i, function(s, u) {
        if (!$.isUndefined(s)) {
          var f = a ? a + "." + u : u, h;
          if (s && !a && typeof s == "object") {
            if ($.endsWith(u, "{}"))
              s = JSON.stringify(s);
            else if ($.endsWith(u, "[]") && (h = $.toArray(s))) {
              h.forEach(function(p) {
                !$.isUndefined(p) && r.append(f, t(p));
              });
              return;
            }
          }
          o(s, f);
        }
      }), n.pop();
    } else
      r.append(a, t(i));
  }
  return o(e), r;
}
var Tn = Aa, nt = ie, Pn = function(r, n, t) {
  var o = t.config.validateStatus;
  !t.status || !o || o(t.status) ? r(t) : n(new nt(
    "Request failed with status code " + t.status,
    [nt.ERR_BAD_REQUEST, nt.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}, it, gr;
function Na() {
  if (gr)
    return it;
  gr = 1;
  var e = P;
  return it = e.isStandardBrowserEnv() ? (
    // Standard browser envs support document.cookie
    function() {
      return {
        write: function(t, o, i, a, c, s) {
          var u = [];
          u.push(t + "=" + encodeURIComponent(o)), e.isNumber(i) && u.push("expires=" + new Date(i).toGMTString()), e.isString(a) && u.push("path=" + a), e.isString(c) && u.push("domain=" + c), s === !0 && u.push("secure"), document.cookie = u.join("; ");
        },
        read: function(t) {
          var o = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
          return o ? decodeURIComponent(o[3]) : null;
        },
        remove: function(t) {
          this.write(t, "", Date.now() - 864e5);
        }
      };
    }()
  ) : (
    // Non standard browser env (web workers, react-native) lack needed support.
    function() {
      return {
        write: function() {
        },
        read: function() {
          return null;
        },
        remove: function() {
        }
      };
    }()
  ), it;
}
var Ca = function(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}, ja = function(r, n) {
  return n ? r.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : r;
}, Ua = Ca, Ta = ja, In = function(r, n) {
  return r && !Ua(n) ? Ta(r, n) : n;
}, ot, vr;
function Pa() {
  if (vr)
    return ot;
  vr = 1;
  var e = P, r = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return ot = function(t) {
    var o = {}, i, a, c;
    return t && e.forEach(t.split(`
`), function(u) {
      if (c = u.indexOf(":"), i = e.trim(u.substr(0, c)).toLowerCase(), a = e.trim(u.substr(c + 1)), i) {
        if (o[i] && r.indexOf(i) >= 0)
          return;
        i === "set-cookie" ? o[i] = (o[i] ? o[i] : []).concat([a]) : o[i] = o[i] ? o[i] + ", " + a : a;
      }
    }), o;
  }, ot;
}
var at, br;
function Ia() {
  if (br)
    return at;
  br = 1;
  var e = P;
  return at = e.isStandardBrowserEnv() ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function() {
      var n = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a"), o;
      function i(a) {
        var c = a;
        return n && (t.setAttribute("href", c), c = t.href), t.setAttribute("href", c), {
          href: t.href,
          protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
          host: t.host,
          search: t.search ? t.search.replace(/^\?/, "") : "",
          hash: t.hash ? t.hash.replace(/^#/, "") : "",
          hostname: t.hostname,
          port: t.port,
          pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
        };
      }
      return o = i(window.location.href), function(c) {
        var s = e.isString(c) ? i(c) : c;
        return s.protocol === o.protocol && s.host === o.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    function() {
      return function() {
        return !0;
      };
    }()
  ), at;
}
var st, Er;
function Ce() {
  if (Er)
    return st;
  Er = 1;
  var e = ie, r = P;
  function n(t) {
    e.call(this, t ?? "canceled", e.ERR_CANCELED), this.name = "CanceledError";
  }
  return r.inherits(n, e, {
    __CANCEL__: !0
  }), st = n, st;
}
var ut, Or;
function Da() {
  return Or || (Or = 1, ut = function(r) {
    var n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
    return n && n[1] || "";
  }), ut;
}
var ct, Sr;
function Rr() {
  if (Sr)
    return ct;
  Sr = 1;
  var e = P, r = Pn, n = Na(), t = An, o = In, i = Pa(), a = Ia(), c = Un, s = ie, u = Ce(), f = Da();
  return ct = function(p) {
    return new Promise(function(b, O) {
      var w = p.data, A = p.headers, l = p.responseType, d;
      function _() {
        p.cancelToken && p.cancelToken.unsubscribe(d), p.signal && p.signal.removeEventListener("abort", d);
      }
      e.isFormData(w) && e.isStandardBrowserEnv() && delete A["Content-Type"];
      var m = new XMLHttpRequest();
      if (p.auth) {
        var v = p.auth.username || "", S = p.auth.password ? unescape(encodeURIComponent(p.auth.password)) : "";
        A.Authorization = "Basic " + btoa(v + ":" + S);
      }
      var g = o(p.baseURL, p.url);
      m.open(p.method.toUpperCase(), t(g, p.params, p.paramsSerializer), !0), m.timeout = p.timeout;
      function N() {
        if (m) {
          var D = "getAllResponseHeaders" in m ? i(m.getAllResponseHeaders()) : null, J = !l || l === "text" || l === "json" ? m.responseText : m.response, G = {
            data: J,
            status: m.status,
            statusText: m.statusText,
            headers: D,
            config: p,
            request: m
          };
          r(function(Pe) {
            b(Pe), _();
          }, function(Pe) {
            O(Pe), _();
          }, G), m = null;
        }
      }
      if ("onloadend" in m ? m.onloadend = N : m.onreadystatechange = function() {
        !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(N);
      }, m.onabort = function() {
        m && (O(new s("Request aborted", s.ECONNABORTED, p, m)), m = null);
      }, m.onerror = function() {
        O(new s("Network Error", s.ERR_NETWORK, p, m, m)), m = null;
      }, m.ontimeout = function() {
        var J = p.timeout ? "timeout of " + p.timeout + "ms exceeded" : "timeout exceeded", G = p.transitional || c;
        p.timeoutErrorMessage && (J = p.timeoutErrorMessage), O(new s(
          J,
          G.clarifyTimeoutError ? s.ETIMEDOUT : s.ECONNABORTED,
          p,
          m
        )), m = null;
      }, e.isStandardBrowserEnv()) {
        var L = (p.withCredentials || a(g)) && p.xsrfCookieName ? n.read(p.xsrfCookieName) : void 0;
        L && (A[p.xsrfHeaderName] = L);
      }
      "setRequestHeader" in m && e.forEach(A, function(J, G) {
        typeof w > "u" && G.toLowerCase() === "content-type" ? delete A[G] : m.setRequestHeader(G, J);
      }), e.isUndefined(p.withCredentials) || (m.withCredentials = !!p.withCredentials), l && l !== "json" && (m.responseType = p.responseType), typeof p.onDownloadProgress == "function" && m.addEventListener("progress", p.onDownloadProgress), typeof p.onUploadProgress == "function" && m.upload && m.upload.addEventListener("progress", p.onUploadProgress), (p.cancelToken || p.signal) && (d = function(D) {
        m && (O(!D || D && D.type ? new u() : D), m.abort(), m = null);
      }, p.cancelToken && p.cancelToken.subscribe(d), p.signal && (p.signal.aborted ? d() : p.signal.addEventListener("abort", d))), w || (w = null);
      var V = f(g);
      if (V && ["http", "https", "file"].indexOf(V) === -1) {
        O(new s("Unsupported protocol " + V + ":", s.ERR_BAD_REQUEST, p));
        return;
      }
      m.send(w);
    });
  }, ct;
}
var lt, wr;
function Fa() {
  return wr || (wr = 1, lt = null), lt;
}
var T = P, Ar = wa, Nr = ie, Ba = Un, La = Tn, za = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Cr(e, r) {
  !T.isUndefined(e) && T.isUndefined(e["Content-Type"]) && (e["Content-Type"] = r);
}
function $a() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Rr()), e;
}
function qa(e, r, n) {
  if (T.isString(e))
    try {
      return (r || JSON.parse)(e), T.trim(e);
    } catch (t) {
      if (t.name !== "SyntaxError")
        throw t;
    }
  return (n || JSON.stringify)(e);
}
var je = {
  transitional: Ba,
  adapter: $a(),
  transformRequest: [function(r, n) {
    if (Ar(n, "Accept"), Ar(n, "Content-Type"), T.isFormData(r) || T.isArrayBuffer(r) || T.isBuffer(r) || T.isStream(r) || T.isFile(r) || T.isBlob(r))
      return r;
    if (T.isArrayBufferView(r))
      return r.buffer;
    if (T.isURLSearchParams(r))
      return Cr(n, "application/x-www-form-urlencoded;charset=utf-8"), r.toString();
    var t = T.isObject(r), o = n && n["Content-Type"], i;
    if ((i = T.isFileList(r)) || t && o === "multipart/form-data") {
      var a = this.env && this.env.FormData;
      return La(i ? { "files[]": r } : r, a && new a());
    } else if (t || o === "application/json")
      return Cr(n, "application/json"), qa(r);
    return r;
  }],
  transformResponse: [function(r) {
    var n = this.transitional || je.transitional, t = n && n.silentJSONParsing, o = n && n.forcedJSONParsing, i = !t && this.responseType === "json";
    if (i || o && T.isString(r) && r.length)
      try {
        return JSON.parse(r);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? Nr.from(a, Nr.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    return r;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Fa()
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
T.forEach(["delete", "get", "head"], function(r) {
  je.headers[r] = {};
});
T.forEach(["post", "put", "patch"], function(r) {
  je.headers[r] = T.merge(za);
});
var Ue = je, Ma = P, ka = Ue, Dn = function(r, n, t) {
  var o = this || ka;
  return Ma.forEach(t, function(a) {
    r = a.call(o, r, n);
  }), r;
}, ft, jr;
function Fn() {
  return jr || (jr = 1, ft = function(r) {
    return !!(r && r.__CANCEL__);
  }), ft;
}
var Ur = P, dt = Dn, xa = Fn(), Ha = Ue, Wa = Ce();
function ht(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Wa();
}
var Ga = function(r) {
  ht(r), r.headers = r.headers || {}, r.data = dt.call(
    r,
    r.data,
    r.headers,
    r.transformRequest
  ), r.headers = Ur.merge(
    r.headers.common || {},
    r.headers[r.method] || {},
    r.headers
  ), Ur.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(o) {
      delete r.headers[o];
    }
  );
  var n = r.adapter || Ha.adapter;
  return n(r).then(function(o) {
    return ht(r), o.data = dt.call(
      r,
      o.data,
      o.headers,
      r.transformResponse
    ), o;
  }, function(o) {
    return xa(o) || (ht(r), o && o.response && (o.response.data = dt.call(
      r,
      o.response.data,
      o.response.headers,
      r.transformResponse
    ))), Promise.reject(o);
  });
}, B = P, Bn = function(r, n) {
  n = n || {};
  var t = {};
  function o(f, h) {
    return B.isPlainObject(f) && B.isPlainObject(h) ? B.merge(f, h) : B.isPlainObject(h) ? B.merge({}, h) : B.isArray(h) ? h.slice() : h;
  }
  function i(f) {
    if (B.isUndefined(n[f])) {
      if (!B.isUndefined(r[f]))
        return o(void 0, r[f]);
    } else
      return o(r[f], n[f]);
  }
  function a(f) {
    if (!B.isUndefined(n[f]))
      return o(void 0, n[f]);
  }
  function c(f) {
    if (B.isUndefined(n[f])) {
      if (!B.isUndefined(r[f]))
        return o(void 0, r[f]);
    } else
      return o(void 0, n[f]);
  }
  function s(f) {
    if (f in n)
      return o(r[f], n[f]);
    if (f in r)
      return o(void 0, r[f]);
  }
  var u = {
    url: a,
    method: a,
    data: a,
    baseURL: c,
    transformRequest: c,
    transformResponse: c,
    paramsSerializer: c,
    timeout: c,
    timeoutMessage: c,
    withCredentials: c,
    adapter: c,
    responseType: c,
    xsrfCookieName: c,
    xsrfHeaderName: c,
    onUploadProgress: c,
    onDownloadProgress: c,
    decompress: c,
    maxContentLength: c,
    maxBodyLength: c,
    beforeRedirect: c,
    transport: c,
    httpAgent: c,
    httpsAgent: c,
    cancelToken: c,
    socketPath: c,
    responseEncoding: c,
    validateStatus: s
  };
  return B.forEach(Object.keys(r).concat(Object.keys(n)), function(h) {
    var p = u[h] || i, E = p(h);
    B.isUndefined(E) && p !== s || (t[h] = E);
  }), t;
}, mt, Tr;
function Ln() {
  return Tr || (Tr = 1, mt = {
    version: "0.27.2"
  }), mt;
}
var Xa = Ln().version, W = ie, Lt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, r) {
  Lt[e] = function(t) {
    return typeof t === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
var Pr = {};
Lt.transitional = function(r, n, t) {
  function o(i, a) {
    return "[Axios v" + Xa + "] Transitional option '" + i + "'" + a + (t ? ". " + t : "");
  }
  return function(i, a, c) {
    if (r === !1)
      throw new W(
        o(a, " has been removed" + (n ? " in " + n : "")),
        W.ERR_DEPRECATED
      );
    return n && !Pr[a] && (Pr[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), r ? r(i, a, c) : !0;
  };
};
function Va(e, r, n) {
  if (typeof e != "object")
    throw new W("options must be an object", W.ERR_BAD_OPTION_VALUE);
  for (var t = Object.keys(e), o = t.length; o-- > 0; ) {
    var i = t[o], a = r[i];
    if (a) {
      var c = e[i], s = c === void 0 || a(c, i, e);
      if (s !== !0)
        throw new W("option " + i + " must be " + s, W.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new W("Unknown option " + i, W.ERR_BAD_OPTION);
  }
}
var Ja = {
  assertOptions: Va,
  validators: Lt
}, zn = P, Ka = An, Ir = Sa, Dr = Ga, Te = Bn, Qa = In, $n = Ja, Q = $n.validators;
function te(e) {
  this.defaults = e, this.interceptors = {
    request: new Ir(),
    response: new Ir()
  };
}
te.prototype.request = function(r, n) {
  typeof r == "string" ? (n = n || {}, n.url = r) : n = r || {}, n = Te(this.defaults, n), n.method ? n.method = n.method.toLowerCase() : this.defaults.method ? n.method = this.defaults.method.toLowerCase() : n.method = "get";
  var t = n.transitional;
  t !== void 0 && $n.assertOptions(t, {
    silentJSONParsing: Q.transitional(Q.boolean),
    forcedJSONParsing: Q.transitional(Q.boolean),
    clarifyTimeoutError: Q.transitional(Q.boolean)
  }, !1);
  var o = [], i = !0;
  this.interceptors.request.forEach(function(E) {
    typeof E.runWhen == "function" && E.runWhen(n) === !1 || (i = i && E.synchronous, o.unshift(E.fulfilled, E.rejected));
  });
  var a = [];
  this.interceptors.response.forEach(function(E) {
    a.push(E.fulfilled, E.rejected);
  });
  var c;
  if (!i) {
    var s = [Dr, void 0];
    for (Array.prototype.unshift.apply(s, o), s = s.concat(a), c = Promise.resolve(n); s.length; )
      c = c.then(s.shift(), s.shift());
    return c;
  }
  for (var u = n; o.length; ) {
    var f = o.shift(), h = o.shift();
    try {
      u = f(u);
    } catch (p) {
      h(p);
      break;
    }
  }
  try {
    c = Dr(u);
  } catch (p) {
    return Promise.reject(p);
  }
  for (; a.length; )
    c = c.then(a.shift(), a.shift());
  return c;
};
te.prototype.getUri = function(r) {
  r = Te(this.defaults, r);
  var n = Qa(r.baseURL, r.url);
  return Ka(n, r.params, r.paramsSerializer);
};
zn.forEach(["delete", "get", "head", "options"], function(r) {
  te.prototype[r] = function(n, t) {
    return this.request(Te(t || {}, {
      method: r,
      url: n,
      data: (t || {}).data
    }));
  };
});
zn.forEach(["post", "put", "patch"], function(r) {
  function n(t) {
    return function(i, a, c) {
      return this.request(Te(c || {}, {
        method: r,
        headers: t ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  te.prototype[r] = n(), te.prototype[r + "Form"] = n(!0);
});
var Ya = te, pt, Fr;
function Za() {
  if (Fr)
    return pt;
  Fr = 1;
  var e = Ce();
  function r(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    var t;
    this.promise = new Promise(function(a) {
      t = a;
    });
    var o = this;
    this.promise.then(function(i) {
      if (o._listeners) {
        var a, c = o._listeners.length;
        for (a = 0; a < c; a++)
          o._listeners[a](i);
        o._listeners = null;
      }
    }), this.promise.then = function(i) {
      var a, c = new Promise(function(s) {
        o.subscribe(s), a = s;
      }).then(i);
      return c.cancel = function() {
        o.unsubscribe(a);
      }, c;
    }, n(function(a) {
      o.reason || (o.reason = new e(a), t(o.reason));
    });
  }
  return r.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, r.prototype.subscribe = function(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }, r.prototype.unsubscribe = function(t) {
    if (this._listeners) {
      var o = this._listeners.indexOf(t);
      o !== -1 && this._listeners.splice(o, 1);
    }
  }, r.source = function() {
    var t, o = new r(function(a) {
      t = a;
    });
    return {
      token: o,
      cancel: t
    };
  }, pt = r, pt;
}
var _t, Br;
function es() {
  return Br || (Br = 1, _t = function(r) {
    return function(t) {
      return r.apply(null, t);
    };
  }), _t;
}
var yt, Lr;
function ts() {
  if (Lr)
    return yt;
  Lr = 1;
  var e = P;
  return yt = function(n) {
    return e.isObject(n) && n.isAxiosError === !0;
  }, yt;
}
var zr = P, rs = Sn, me = Ya, ns = Bn, is = Ue;
function qn(e) {
  var r = new me(e), n = rs(me.prototype.request, r);
  return zr.extend(n, me.prototype, r), zr.extend(n, r), n.create = function(o) {
    return qn(ns(e, o));
  }, n;
}
var F = qn(is);
F.Axios = me;
F.CanceledError = Ce();
F.CancelToken = Za();
F.isCancel = Fn();
F.VERSION = Ln().version;
F.toFormData = Tn;
F.AxiosError = ie;
F.Cancel = F.CanceledError;
F.all = function(r) {
  return Promise.all(r);
};
F.spread = es();
F.isAxiosError = ts();
Tt.exports = F;
Tt.exports.default = F;
var os = Tt.exports, as = os, zt = { exports: {} };
zt.exports = Mn;
zt.exports.HttpsAgent = Mn;
function Mn() {
}
var ss = zt.exports, re = {}, $t = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.RadioType = e.LocationType = e.GeocodingAddressComponentType = e.VehicleType = e.Maneuver = e.AddressType = e.GeocodedWaypointStatus = e.DirectionsReponseStatus = e.DirectionsResponseStatus = e.TransitRoutingPreference = e.TransitMode = e.TrafficModel = e.UnitSystem = e.TravelRestriction = e.TravelMode = e.Language = e.AspectRatingType = e.PlaceType2 = e.PlaceType1 = e.PlaceInputType = e.PlaceIdScope = e.Status = void 0, function(t) {
    t.OK = "OK", t.INVALID_REQUEST = "INVALID_REQUEST", t.MAX_WAYPOINTS_EXCEEDED = "MAX_WAYPOINTS_EXCEEDED", t.MAX_ROUTE_LENGTH_EXCEEDED = "MAX_ROUTE_LENGTH_EXCEEDED", t.OVER_DAILY_LIMIT = "OVER_DAILY_LIMIT", t.OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT", t.REQUEST_DENIED = "REQUEST_DENIED", t.UNKNOWN_ERROR = "UNKNOWN_ERROR", t.ZERO_RESULTS = "ZERO_RESULTS", t.NOT_FOUND = "NOT_FOUND";
  }(e.Status || (e.Status = {})), function(t) {
    t.APP = "APP", t.GOOGLE = "GOOGLE";
  }(e.PlaceIdScope || (e.PlaceIdScope = {})), function(t) {
    t.textQuery = "textquery", t.phoneNumber = "phonenumber";
  }(e.PlaceInputType || (e.PlaceInputType = {}));
  var r;
  (function(t) {
    t.accounting = "accounting", t.airport = "airport", t.amusement_park = "amusement_park", t.aquarium = "aquarium", t.art_gallery = "art_gallery", t.atm = "atm", t.bakery = "bakery", t.bank = "bank", t.bar = "bar", t.beauty_salon = "beauty_salon", t.bicycle_store = "bicycle_store", t.book_store = "book_store", t.bowling_alley = "bowling_alley", t.bus_station = "bus_station", t.cafe = "cafe", t.campground = "campground", t.car_dealer = "car_dealer", t.car_rental = "car_rental", t.car_repair = "car_repair", t.car_wash = "car_wash", t.casino = "casino", t.cemetery = "cemetery", t.church = "church", t.city_hall = "city_hall", t.clothing_store = "clothing_store", t.convenience_store = "convenience_store", t.courthouse = "courthouse", t.dentist = "dentist", t.department_store = "department_store", t.doctor = "doctor", t.drugstore = "drugstore", t.electrician = "electrician", t.electronics_store = "electronics_store", t.embassy = "embassy", t.fire_station = "fire_station", t.florist = "florist", t.funeral_home = "funeral_home", t.furniture_store = "furniture_store", t.gas_station = "gas_station", t.gym = "gym", t.hair_care = "hair_care", t.hardware_store = "hardware_store", t.hindu_temple = "hindu_temple", t.home_goods_store = "home_goods_store", t.hospital = "hospital", t.insurance_agency = "insurance_agency", t.jewelry_store = "jewelry_store", t.laundry = "laundry", t.lawyer = "lawyer", t.library = "library", t.light_rail_station = "light_rail_station", t.liquor_store = "liquor_store", t.local_government_office = "local_government_office", t.locksmith = "locksmith", t.lodging = "lodging", t.meal_delivery = "meal_delivery", t.meal_takeaway = "meal_takeaway", t.mosque = "mosque", t.movie_rental = "movie_rental", t.movie_theater = "movie_theater", t.moving_company = "moving_company", t.museum = "museum", t.night_club = "night_club", t.painter = "painter", t.park = "park", t.parking = "parking", t.pet_store = "pet_store", t.pharmacy = "pharmacy", t.physiotherapist = "physiotherapist", t.plumber = "plumber", t.police = "police", t.post_office = "post_office", t.real_estate_agency = "real_estate_agency", t.restaurant = "restaurant", t.roofing_contractor = "roofing_contractor", t.rv_park = "rv_park", t.school = "school", t.secondary_school = "secondary_school", t.shoe_store = "shoe_store", t.shopping_mall = "shopping_mall", t.spa = "spa", t.stadium = "stadium", t.storage = "storage", t.store = "store", t.subway_station = "subway_station", t.supermarket = "supermarket", t.synagogue = "synagogue", t.taxi_stand = "taxi_stand", t.tourist_attraction = "tourist_attraction", t.train_station = "train_station", t.transit_station = "transit_station", t.travel_agency = "travel_agency", t.university = "university", t.veterinary_care = "veterinary_care", t.zoo = "zoo";
  })(r = e.PlaceType1 || (e.PlaceType1 = {}));
  var n;
  (function(t) {
    t.administrative_area_level_1 = "administrative_area_level_1", t.administrative_area_level_2 = "administrative_area_level_2", t.administrative_area_level_3 = "administrative_area_level_3", t.administrative_area_level_4 = "administrative_area_level_4", t.administrative_area_level_5 = "administrative_area_level_5", t.archipelago = "archipelago", t.colloquial_area = "colloquial_area", t.continent = "continent", t.country = "country", t.establishment = "establishment", t.finance = "finance", t.floor = "floor", t.food = "food", t.general_contractor = "general_contractor", t.geocode = "geocode", t.health = "health", t.intersection = "intersection", t.landmark = "landmark", t.locality = "locality", t.natural_feature = "natural_feature", t.neighborhood = "neighborhood", t.place_of_worship = "place_of_worship", t.plus_code = "plus_code", t.point_of_interest = "point_of_interest", t.political = "political", t.post_box = "post_box", t.postal_code = "postal_code", t.postal_code_prefix = "postal_code_prefix", t.postal_code_suffix = "postal_code_suffix", t.postal_town = "postal_town", t.premise = "premise", t.room = "room", t.route = "route", t.street_address = "street_address", t.street_number = "street_number", t.sublocality = "sublocality", t.sublocality_level_1 = "sublocality_level_1", t.sublocality_level_2 = "sublocality_level_2", t.sublocality_level_3 = "sublocality_level_3", t.sublocality_level_4 = "sublocality_level_4", t.sublocality_level_5 = "sublocality_level_5", t.subpremise = "subpremise", t.town_square = "town_square";
  })(n = e.PlaceType2 || (e.PlaceType2 = {})), function(t) {
    t.appeal = "appeal", t.atmosphere = "atmosphere", t.decor = "decor", t.facilities = "facilities", t.food = "food", t.overall = "overall", t.quality = "quality", t.service = "service";
  }(e.AspectRatingType || (e.AspectRatingType = {})), function(t) {
    t.ar = "ar", t.be = "be", t.bg = "bg", t.bn = "bn", t.ca = "ca", t.cs = "cs", t.da = "da", t.de = "de", t.el = "el", t.en = "en", t.en_Au = "en-Au", t.en_GB = "en-GB", t.es = "es", t.eu = "eu", t.fa = "fa", t.fi = "fi", t.fil = "fil", t.fr = "fr", t.gl = "gl", t.gu = "gu", t.hi = "hi", t.hr = "hr", t.hu = "hu", t.id = "id", t.it = "it", t.iw = "iw", t.ja = "ja", t.kk = "kk", t.kn = "kn", t.ko = "ko", t.ky = "ky", t.lt = "lt", t.lv = "lv", t.mk = "mk", t.ml = "ml", t.mr = "mr", t.my = "my", t.nl = "nl", t.no = "no", t.pa = "pa", t.pl = "pl", t.pt = "pt", t.pt_BR = "pt-BR", t.pt_PT = "pt-PT", t.ro = "ro", t.ru = "ru", t.sk = "sk", t.sl = "sl", t.sq = "sq", t.sr = "sr", t.sv = "sv", t.ta = "ta", t.te = "te", t.th = "th", t.tl = "tl", t.tr = "tr", t.uk = "uk", t.uz = "uz", t.vi = "vi", t.zh_CN = "zh-CN", t.zh_TW = "zh-TW";
  }(e.Language || (e.Language = {})), function(t) {
    t.driving = "driving", t.walking = "walking", t.bicycling = "bicycling", t.transit = "transit";
  }(e.TravelMode || (e.TravelMode = {})), function(t) {
    t.tolls = "tolls", t.highways = "highways", t.ferries = "ferries", t.indoor = "indoor";
  }(e.TravelRestriction || (e.TravelRestriction = {})), function(t) {
    t.metric = "metric", t.imperial = "imperial";
  }(e.UnitSystem || (e.UnitSystem = {})), function(t) {
    t.best_guess = "best_guess", t.pessimistic = "pessimistic", t.optimistic = "optimistic";
  }(e.TrafficModel || (e.TrafficModel = {})), function(t) {
    t.bus = "bus", t.subway = "subway", t.train = "train", t.tram = "tram", t.rail = "rail";
  }(e.TransitMode || (e.TransitMode = {})), function(t) {
    t.less_walking = "less_walking", t.fewer_transfers = "fewer_transfers";
  }(e.TransitRoutingPreference || (e.TransitRoutingPreference = {})), function(t) {
    t.OK = "OK", t.NOT_FOUND = "NOT_FOUND", t.ZERO_RESULTS = "ZERO_RESULTS", t.MAX_WAYPOINTS_EXCEEDED = "MAX_WAYPOINTS_EXCEEDED", t.MAX_ROUTE_LENGTH_EXCEEDED = "MAX_ROUTE_LENGTH_EXCEEDED", t.INVALID_REQUEST = "INVALID_REQUEST", t.OVER_DAILY_LIMIT = "OVER_DAILY_LIMIT", t.OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT", t.REQUEST_DENIED = "REQUEST_DENIED", t.UNKNOWN_ERROR = "UNKNOWN_ERROR";
  }(e.DirectionsResponseStatus || (e.DirectionsResponseStatus = {})), function(t) {
    t.OK = "OK", t.NOT_FOUND = "NOT_FOUND", t.ZERO_RESULTS = "ZERO_RESULTS", t.MAX_WAYPOINTS_EXCEEDED = "MAX_WAYPOINTS_EXCEEDED", t.MAX_ROUTE_LENGTH_EXCEEDED = "MAX_ROUTE_LENGTH_EXCEEDED", t.INVALID_REQUEST = "INVALID_REQUEST", t.OVER_DAILY_LIMIT = "OVER_DAILY_LIMIT", t.OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT", t.REQUEST_DENIED = "REQUEST_DENIED", t.UNKNOWN_ERROR = "UNKNOWN_ERROR";
  }(e.DirectionsReponseStatus || (e.DirectionsReponseStatus = {})), function(t) {
    t.OK = "OK", t.ZERO_RESULTS = "ZERO_RESULTS";
  }(e.GeocodedWaypointStatus || (e.GeocodedWaypointStatus = {})), e.AddressType = Object.assign({}, r, n), function(t) {
    t.turn_slight_left = "turn-slight-left", t.turn_sharp_left = "turn-sharp-left", t.uturn_left = "uturn-left", t.turn_left = "turn-left", t.turn_slight_right = "turn-slight-right", t.turn_sharp_right = "turn-sharp-right", t.uturn_right = "uturn-right", t.turn_right = "turn-right", t.straight = "straight", t.ramp_left = "ramp-left", t.ramp_right = "ramp-right", t.merge = "merge", t.fork_left = "fork-left", t.fork_right = "fork-right", t.ferry = "ferry", t.ferry_train = "ferry-train", t.roundabout_left = "roundabout-left", t.roundabout_right = "roundabout-right";
  }(e.Maneuver || (e.Maneuver = {})), function(t) {
    t.RAIL = "RAIL", t.METRO_RAIL = "METRO_RAIL", t.SUBWAY = "SUBWAY", t.TRAM = "TRAM", t.MONORAIL = "MONORAIL", t.HEAVY_RAIL = "HEAVY_RAIL", t.COMMUTER_TRAIN = "COMMUTER_TRAIN", t.HIGH_SPEED_TRAIN = "HIGH_SPEED_TRAIN", t.BUS = "BUS", t.INTERCITY_BUS = "INTERCITY_BUS", t.TROLLEYBUS = "TROLLEYBUS", t.SHARE_TAXI = "SHARE_TAXI", t.FERRY = "FERRY", t.CABLE_CAR = "CABLE_CAR", t.GONDOLA_LIFT = "GONDOLA_LIFT", t.FUNICULAR = "FUNICULAR", t.OTHER = "OTHER";
  }(e.VehicleType || (e.VehicleType = {})), function(t) {
    t.floor = "floor", t.establishment = "establishment", t.point_of_interest = "point_of_interest", t.parking = "parking", t.post_box = "post_box", t.postal_town = "postal_town", t.room = "room", t.street_number = "street_number", t.bus_station = "bus_station", t.train_station = "train_station", t.transit_station = "transit_station";
  }(e.GeocodingAddressComponentType || (e.GeocodingAddressComponentType = {})), function(t) {
    t.ROOFTOP = "ROOFTOP", t.RANGE_INTERPOLATED = "RANGE_INTERPOLATED", t.GEOMETRIC_CENTER = "GEOMETRIC_CENTER", t.APPROXIMATE = "APPROXIMATE";
  }(e.LocationType || (e.LocationType = {})), function(t) {
    t.lte = "lte", t.gsm = "gsm", t.cdma = "cdma", t.wcdma = "wcdma";
  }(e.RadioType || (e.RadioType = {}));
})($t);
Object.defineProperty(re, "__esModule", { value: !0 });
re.customAdapter = re.statusToCode = void 0;
const us = Pn, cs = Ue, ls = Dn, q = $t;
function kn(e) {
  switch (e) {
    case q.Status.OK:
    case q.Status.ZERO_RESULTS:
      return 200;
    case q.Status.INVALID_REQUEST:
    case q.Status.MAX_ROUTE_LENGTH_EXCEEDED:
    case q.Status.MAX_WAYPOINTS_EXCEEDED:
      return 400;
    case q.Status.REQUEST_DENIED:
      return 403;
    case q.Status.NOT_FOUND:
      return 404;
    case q.Status.OVER_DAILY_LIMIT:
    case q.Status.OVER_QUERY_LIMIT:
      return 429;
    case q.Status.UNKNOWN_ERROR:
      return 500;
    default:
      return 200;
  }
}
re.statusToCode = kn;
const fs = (e) => new Promise((r, n) => {
  cs.adapter(e).then((t) => {
    t.data = ls(t.data, t.headers, e.transformResponse), t.status === 200 && t.data.status && (t.status = kn(t.data.status)), us(r, n, t);
  }).catch(n);
});
re.customAdapter = fs;
const ds = "@googlemaps/google-maps-services-js", hs = "3.3.32", ms = "Node.js client library for Google Maps API Web Services", ps = [
  "google",
  "maps",
  "googlemaps",
  "geo",
  "geocode",
  "timezone",
  "api",
  "client",
  "roads",
  "directions",
  "navigation"
], _s = "https://github.com/googlemaps/google-maps-services-js", ys = {
  url: "https://github.com/googlemaps/google-maps-services-js/issues"
}, gs = {
  type: "git",
  url: "https://github.com/googlemaps/google-maps-services-js.git"
}, vs = "Apache-2.0", bs = "Google Inc.", Es = [
  {
    name: "Justin Poehnelt",
    email: "jpoehnelt@google.com"
  }
], Os = "./dist/index.js", Ss = [
  "dist",
  "src"
], Rs = {
  docs: "rm -rf docs/ && typedoc src/index.ts",
  prepare: "tsc",
  test: "jest src",
  "test:e2e": "jest e2e",
  "test:all": "jest"
}, ws = {
  "@googlemaps/url-signature": "^1.0.4",
  agentkeepalive: "^4.1.0",
  axios: "^0.27.2",
  "query-string": "^7.1.3",
  "retry-axios": "^2.6.0"
}, As = {
  "@types/jest": "^27.0.0",
  "@types/node": "^20.1.1",
  jest: "^27.0.0",
  nock: "^13.0.4",
  prettier: "^2.0.5",
  "ts-jest": "^27.0.5",
  typedoc: "^0.24.1",
  typescript: "^4.0.0"
}, Ns = {
  registry: "https://wombat-dressing-room.appspot.com",
  access: "public"
}, Cs = {
  name: ds,
  version: hs,
  description: ms,
  keywords: ps,
  homepage: _s,
  bugs: ys,
  repository: gs,
  license: vs,
  author: bs,
  contributors: Es,
  main: Os,
  files: Ss,
  scripts: Rs,
  dependencies: ws,
  devDependencies: As,
  publishConfig: Ns
};
var $r;
function I() {
  return $r || ($r = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Client = e.defaultAxiosInstance = e.X_GOOG_MAPS_EXPERIENCE_ID = e.acceptEncoding = e.userAgent = e.defaultTimeout = e.defaultHttpsAgent = e.version = void 0;
    const r = mo, n = xo(), t = Ho(), o = Wo(), i = Go(), a = Xo(), c = xn(), s = Vo(), u = bn(), f = Jo(), h = Ko(), p = Qo(), E = En(), b = On(), O = Yo(), w = Zo(), A = ea(), l = as, d = ss, _ = re;
    e.version = Cs.version, e.defaultHttpsAgent = new d.HttpsAgent({ keepAlive: !0 }), e.defaultTimeout = 1e4, e.userAgent = `google-maps-services-node-${e.version}`, e.acceptEncoding = "gzip", e.X_GOOG_MAPS_EXPERIENCE_ID = "X-GOOG-MAPS-EXPERIENCE-ID";
    const m = {
      timeout: e.defaultTimeout,
      httpsAgent: e.defaultHttpsAgent,
      adapter: _.customAdapter,
      headers: {
        "User-Agent": e.userAgent,
        "Accept-Encoding": e.acceptEncoding
      }
    };
    e.defaultAxiosInstance = l.default.create(m), r.attach(e.defaultAxiosInstance);
    class v {
      constructor({ axiosInstance: g, config: N, experienceId: L } = {}) {
        if (g && N)
          throw new Error("Provide one of axiosInstance or config.");
        g ? (this.axiosInstance = g, this.axiosInstance.defaults.headers = Object.assign(Object.assign({}, m.headers), this.axiosInstance.defaults.headers)) : N ? (N = Object.assign(Object.assign({}, m), N), N.headers = Object.assign(Object.assign({}, m.headers), N.headers || {}), this.axiosInstance = l.default.create(N), r.attach(this.axiosInstance)) : this.axiosInstance = e.defaultAxiosInstance, L && this.setExperienceId(...L);
      }
      setExperienceId(...g) {
        this.experienceId = g, this.axiosInstance.defaults.headers[e.X_GOOG_MAPS_EXPERIENCE_ID] = g.join(",");
      }
      clearExperienceId() {
        this.experienceId = null, this.clearExperienceIdHeader();
      }
      clearExperienceIdHeader() {
        delete this.axiosInstance.defaults.headers[e.X_GOOG_MAPS_EXPERIENCE_ID];
      }
      getExperienceId() {
        return this.experienceId;
      }
      directions(g) {
        return (0, n.directions)(g, this.axiosInstance);
      }
      distancematrix(g) {
        return (0, t.distancematrix)(g, this.axiosInstance);
      }
      elevation(g) {
        return (0, o.elevation)(g, this.axiosInstance);
      }
      timezone(g) {
        return (0, A.timezone)(g, this.axiosInstance);
      }
      geolocate(g) {
        return (0, c.geolocate)(g, this.axiosInstance);
      }
      /**
       * An example use of this function.
       *
       * ```javascript
       * import { Client } from '@googlemaps/google-maps-services-js';
       *
       * const args = {
       *   params: {
       *     key: '<your-api-key>',
       *     address: 'Perth 4WD & Commercial Centre',
       *   }
       * };
       * const client = new Client();
       * client.geocode(args).then(gcResponse => {
       *   const str = JSON.stringify(gcResponse.data.results[0]);
       *   console.log(`First result is: ${str}`);
       * });
       * ```
       */
      geocode(g) {
        return (0, a.geocode)(g, this.axiosInstance);
      }
      reverseGeocode(g) {
        return (0, b.reverseGeocode)(g, this.axiosInstance);
      }
      placeAutocomplete(g) {
        return (0, u.placeAutocomplete)(g, this.axiosInstance);
      }
      placeDetails(g) {
        return (0, f.placeDetails)(g, this.axiosInstance);
      }
      findPlaceFromText(g) {
        return (0, i.findPlaceFromText)(g, this.axiosInstance);
      }
      placePhoto(g) {
        return (0, h.placePhoto)(g, this.axiosInstance);
      }
      placesNearby(g) {
        return (0, E.placesNearby)(g, this.axiosInstance);
      }
      placeQueryAutocomplete(g) {
        return (0, p.placeQueryAutocomplete)(g, this.axiosInstance);
      }
      textSearch(g) {
        return (0, w.textSearch)(g, this.axiosInstance);
      }
      nearestRoads(g) {
        return (0, s.nearestRoads)(g, this.axiosInstance);
      }
      snapToRoads(g) {
        return (0, O.snapToRoads)(g, this.axiosInstance);
      }
    }
    e.Client = v;
  }(De)), De;
}
var qr;
function xn() {
  return qr || (qr = 1, function(e) {
    var r = R && R.__rest || function(o, i) {
      var a = {};
      for (var c in o)
        Object.prototype.hasOwnProperty.call(o, c) && i.indexOf(c) < 0 && (a[c] = o[c]);
      if (o != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, c = Object.getOwnPropertySymbols(o); s < c.length; s++)
          i.indexOf(c[s]) < 0 && Object.prototype.propertyIsEnumerable.call(o, c[s]) && (a[c[s]] = o[c[s]]);
      return a;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.geolocate = e.defaultUrl = e.GeolocateErrorReason = void 0;
    const n = I();
    (function(o) {
      o.dailyLimitExceeded = "dailyLimitExceeded", o.keyInvalid = "keyInvalid", o.userRateLimitExceeded = "userRateLimitExceeded", o.notFound = "notFound", o.parseError = "parseError";
    })(e.GeolocateErrorReason || (e.GeolocateErrorReason = {})), e.defaultUrl = "https://www.googleapis.com/geolocation/v1/geolocate";
    function t(o, i) {
      var { params: a, method: c = "post", url: s = e.defaultUrl } = o, u = r(o, ["params", "method", "url"]);
      return i === void 0 && (i = n.defaultAxiosInstance), i(Object.assign({
        params: a,
        method: c,
        url: s
      }, u));
    }
    e.geolocate = t;
  }(Ie)), Ie;
}
(function(e) {
  var r = R && R.__createBinding || (Object.create ? function(c, s, u, f) {
    f === void 0 && (f = u);
    var h = Object.getOwnPropertyDescriptor(s, u);
    (!h || ("get" in h ? !s.__esModule : h.writable || h.configurable)) && (h = { enumerable: !0, get: function() {
      return s[u];
    } }), Object.defineProperty(c, f, h);
  } : function(c, s, u, f) {
    f === void 0 && (f = u), c[f] = s[u];
  }), n = R && R.__exportStar || function(c, s) {
    for (var u in c)
      u !== "default" && !Object.prototype.hasOwnProperty.call(s, u) && r(s, c, u);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ReverseGeocodingLocationType = e.PlacesNearbyRanking = e.PlaceAutocompleteType = e.GeolocateErrorReason = void 0;
  var t = xn();
  Object.defineProperty(e, "GeolocateErrorReason", { enumerable: !0, get: function() {
    return t.GeolocateErrorReason;
  } });
  var o = bn();
  Object.defineProperty(e, "PlaceAutocompleteType", { enumerable: !0, get: function() {
    return o.PlaceAutocompleteType;
  } });
  var i = En();
  Object.defineProperty(e, "PlacesNearbyRanking", { enumerable: !0, get: function() {
    return i.PlacesNearbyRanking;
  } });
  var a = On();
  Object.defineProperty(e, "ReverseGeocodingLocationType", { enumerable: !0, get: function() {
    return a.ReverseGeocodingLocationType;
  } }), n($t, e), n(I(), e);
})(gt);
var js = function(e, r) {
  r === void 0 && (r = 5);
  for (var n = Math.pow(10, r), t = e.length, o = new Array(Math.floor(e.length / 2)), i = 0, a = 0, c = 0, s = 0; i < t; ++s) {
    var u = 1, f = 0, h = void 0;
    do
      h = e.charCodeAt(i++) - 63 - 1, u += h << f, f += 5;
    while (h >= 31);
    a += u & 1 ? ~(u >> 1) : u >> 1, u = 1, f = 0;
    do
      h = e.charCodeAt(i++) - 63 - 1, u += h << f, f += 5;
    while (h >= 31);
    c += u & 1 ? ~(u >> 1) : u >> 1, o[s] = [a / n, c / n];
  }
  return o.length = s, o;
};
class Us {
  getCoordinates(r) {
    const n = r.routes[0].overview_polyline, t = this.getPoints(n);
    return this.getCoordinatesAlongPolyline(t);
  }
  async getTowns(r) {
    const n = r.map(async (i) => await this.getTown(i)), o = (await Promise.all(n)).filter(
      (i) => i != null
    );
    return this.removeDuplicates(o);
  }
  toLagLngTuple(r) {
    if (typeof r.lat != "number" || typeof r.lng != "number")
      throw Error("latLng.lat or latLng.lng is not of type number");
    return [r.lat, r.lng];
  }
  metersToKm(r) {
    return r / 1e3;
  }
  addDistanceAttribute(r) {
    let n = 0;
    return { towns: r.map((o, i) => {
      const a = r[i + 1];
      if (a == null)
        return o;
      const c = this.metersToKm(
        this.getHaversineDistance(
          this.toLagLngTuple(o.latLng),
          this.toLagLngTuple(a.latLng)
        )
      );
      return n += c, {
        ...o,
        distance: `${c.toFixed(2)}km`
      };
    }), totalDistance: `${n.toFixed(2)}km` };
  }
  // TOFIX: fix how distances are computed (it should not be how the crow flies)
  async getOutput(r) {
    const n = await this.getTowns(r);
    return this.addDistanceAttribute(n);
  }
  getPoints(r) {
    let n = "";
    return typeof r == "string" ? n = r : n = r.points, n;
  }
  rad(r) {
    return r * Math.PI / 180;
  }
  // https://cloud.google.com/blog/products/maps-platform/how-calculate-distances-map-maps-javascript-api
  getHaversineDistance(r, n) {
    const [t, o] = r, [i, a] = n, c = 63710072e-1, s = this.rad(t), u = this.rad(i), f = u - s, h = this.rad(a - o);
    return 2 * c * Math.asin(
      Math.sqrt(
        Math.sin(f / 2) * Math.sin(f / 2) + Math.cos(s) * Math.cos(u) * Math.sin(h / 2) * Math.sin(h / 2)
      )
    );
  }
  async getTown(r) {
    try {
      const n = await this.getGeocorderResults(r);
      if (n.length === 0)
        throw Error();
      const o = n[0].address_components.filter(
        (i) => i.types.some(
          (a) => gt.AddressType.locality === a || gt.AddressType.postal_code === a
        )
      );
      return o.length === 0 ? null : {
        latLng: r,
        name: o.map(({ long_name: i }) => i).join(", ")
      };
    } catch (n) {
      throw Error(`Error getting town name:" ${n}`);
    }
  }
  // Warning: this could lead to mistakes if 2 towns have the same name but correspond to
  // 2 different places (less of chance with the postal code but if the postal code does not exist, then
  // we could have a bug)
  removeDuplicates(r) {
    return r.filter(({ name: n }, t) => n !== r[t + 1]?.name);
  }
  getCoordinatesAlongPolyline(r) {
    const n = js(r, 5), t = [], o = 1e3;
    let i, a = 0;
    for (const c of n)
      i && (a += this.getHaversineDistance(i, c), a >= o && (t.push({ lat: i[0], lng: i[1] }), a = 0)), i = c;
    return t;
  }
}
class Hn extends Us {
  async getGeocorderResults(r) {
    return (await new google.maps.Geocoder().geocode({ location: r })).results;
  }
  async findRoute(r, n) {
    const t = new google.maps.DirectionsService(), o = {
      origin: r[0],
      destination: r[r.length - 1],
      travelMode: n,
      waypoints: r.slice(1, r.length - 1).map((i) => ({ location: i })),
      avoidHighways: !0,
      avoidTolls: !0
    };
    return await t.route(o);
  }
  async main(r, n) {
    try {
      const t = await this.findRoute(r, n), o = t.status, i = new Hn(), a = i.getCoordinates(t), { towns: c } = await i.getOutput(a), u = t.routes[0].legs.map((f) => (f.distance?.value ?? 0) / 1e3).reduce((f, h) => f + h, 0);
      return {
        towns: c,
        // TOFIX: use totalDistance from getOutput when fixed
        totalDistance: `${u} km`,
        status: o
      };
    } catch (t) {
      throw Error(`Error finding route:" ${t}`);
    }
  }
}
export {
  Hn as FrontMapsDirections
};
