(() => {
  var t = {
      312: (t, e, n) => {
        var i;
        /**
         * [js-sha256]{@link https://github.com/emn178/js-sha256}
         *
         * @version 0.11.0
         * @author Chen, Yi-Cyuan [emn178@gmail.com]
         * @copyright Chen, Yi-Cyuan 2014-2024
         * @license MIT
         */ !(function () {
          "use strict";
          var e = "input is invalid type",
            r = "object" == typeof window,
            a = r ? window : {};
          a.JS_SHA256_NO_WINDOW && (r = !1);
          var o = !r && "object" == typeof self,
            s =
              !a.JS_SHA256_NO_NODE_JS &&
              "object" == typeof process &&
              process.versions &&
              process.versions.node;
          s ? (a = n.g) : o && (a = self);
          var l = !a.JS_SHA256_NO_COMMON_JS && t.exports,
            c = n.amdO,
            h =
              !a.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
            d = "0123456789abcdef".split(""),
            u = [-2147483648, 8388608, 32768, 128],
            f = [24, 16, 8, 0],
            m = [
              1116352408, 1899447441, 3049323471, 3921009573, 961987163,
              1508970993, 2453635748, 2870763221, 3624381080, 310598401,
              607225278, 1426881987, 1925078388, 2162078206, 2614888103,
              3248222580, 3835390401, 4022224774, 264347078, 604807628,
              770255983, 1249150122, 1555081692, 1996064986, 2554220882,
              2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
              113926993, 338241895, 666307205, 773529912, 1294757372,
              1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
              2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
              3600352804, 4094571909, 275423344, 430227734, 506948616,
              659060556, 883997877, 958139571, 1322822218, 1537002063,
              1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
              2428436474, 2756734187, 3204031479, 3329325298,
            ],
            p = ["hex", "array", "digest", "arrayBuffer"],
            g = [];
          (!a.JS_SHA256_NO_NODE_JS && Array.isArray) ||
            (Array.isArray = function (t) {
              return "[object Array]" === Object.prototype.toString.call(t);
            }),
            !h ||
              (!a.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
              (ArrayBuffer.isView = function (t) {
                return (
                  "object" == typeof t &&
                  t.buffer &&
                  t.buffer.constructor === ArrayBuffer
                );
              });
          var _ = function (t, e) {
              return function (n) {
                return new S(e, !0).update(n)[t]();
              };
            },
            v = function (t) {
              var e = _("hex", t);
              s && (e = y(e, t)),
                (e.create = function () {
                  return new S(t);
                }),
                (e.update = function (t) {
                  return e.create().update(t);
                });
              for (var n = 0; n < p.length; ++n) {
                var i = p[n];
                e[i] = _(i, t);
              }
              return e;
            },
            y = function (t, i) {
              var r,
                o = n(394),
                s = n(903).Buffer,
                l = i ? "sha224" : "sha256";
              r =
                s.from && !a.JS_SHA256_NO_BUFFER_FROM
                  ? s.from
                  : function (t) {
                      return new s(t);
                    };
              return function (n) {
                if ("string" == typeof n)
                  return o.createHash(l).update(n, "utf8").digest("hex");
                if (null == n) throw new Error(e);
                return (
                  n.constructor === ArrayBuffer && (n = new Uint8Array(n)),
                  Array.isArray(n) ||
                  ArrayBuffer.isView(n) ||
                  n.constructor === s
                    ? o.createHash(l).update(r(n)).digest("hex")
                    : t(n)
                );
              };
            },
            x = function (t, e) {
              return function (n, i) {
                return new b(n, e, !0).update(i)[t]();
              };
            },
            w = function (t) {
              var e = x("hex", t);
              (e.create = function (e) {
                return new b(e, t);
              }),
                (e.update = function (t, n) {
                  return e.create(t).update(n);
                });
              for (var n = 0; n < p.length; ++n) {
                var i = p[n];
                e[i] = x(i, t);
              }
              return e;
            };
          function S(t, e) {
            e
              ? ((g[0] =
                  g[16] =
                  g[1] =
                  g[2] =
                  g[3] =
                  g[4] =
                  g[5] =
                  g[6] =
                  g[7] =
                  g[8] =
                  g[9] =
                  g[10] =
                  g[11] =
                  g[12] =
                  g[13] =
                  g[14] =
                  g[15] =
                    0),
                (this.blocks = g))
              : (this.blocks = [
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ]),
              t
                ? ((this.h0 = 3238371032),
                  (this.h1 = 914150663),
                  (this.h2 = 812702999),
                  (this.h3 = 4144912697),
                  (this.h4 = 4290775857),
                  (this.h5 = 1750603025),
                  (this.h6 = 1694076839),
                  (this.h7 = 3204075428))
                : ((this.h0 = 1779033703),
                  (this.h1 = 3144134277),
                  (this.h2 = 1013904242),
                  (this.h3 = 2773480762),
                  (this.h4 = 1359893119),
                  (this.h5 = 2600822924),
                  (this.h6 = 528734635),
                  (this.h7 = 1541459225)),
              (this.block = this.start = this.bytes = this.hBytes = 0),
              (this.finalized = this.hashed = !1),
              (this.first = !0),
              (this.is224 = t);
          }
          function b(t, n, i) {
            var r,
              a = typeof t;
            if ("string" === a) {
              var o,
                s = [],
                l = t.length,
                c = 0;
              for (r = 0; r < l; ++r)
                (o = t.charCodeAt(r)) < 128
                  ? (s[c++] = o)
                  : o < 2048
                  ? ((s[c++] = 192 | (o >>> 6)), (s[c++] = 128 | (63 & o)))
                  : o < 55296 || o >= 57344
                  ? ((s[c++] = 224 | (o >>> 12)),
                    (s[c++] = 128 | ((o >>> 6) & 63)),
                    (s[c++] = 128 | (63 & o)))
                  : ((o =
                      65536 +
                      (((1023 & o) << 10) | (1023 & t.charCodeAt(++r)))),
                    (s[c++] = 240 | (o >>> 18)),
                    (s[c++] = 128 | ((o >>> 12) & 63)),
                    (s[c++] = 128 | ((o >>> 6) & 63)),
                    (s[c++] = 128 | (63 & o)));
              t = s;
            } else {
              if ("object" !== a) throw new Error(e);
              if (null === t) throw new Error(e);
              if (h && t.constructor === ArrayBuffer) t = new Uint8Array(t);
              else if (!(Array.isArray(t) || (h && ArrayBuffer.isView(t))))
                throw new Error(e);
            }
            t.length > 64 && (t = new S(n, !0).update(t).array());
            var d = [],
              u = [];
            for (r = 0; r < 64; ++r) {
              var f = t[r] || 0;
              (d[r] = 92 ^ f), (u[r] = 54 ^ f);
            }
            S.call(this, n, i),
              this.update(u),
              (this.oKeyPad = d),
              (this.inner = !0),
              (this.sharedMemory = i);
          }
          (S.prototype.update = function (t) {
            if (!this.finalized) {
              var n,
                i = typeof t;
              if ("string" !== i) {
                if ("object" !== i) throw new Error(e);
                if (null === t) throw new Error(e);
                if (h && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                else if (!(Array.isArray(t) || (h && ArrayBuffer.isView(t))))
                  throw new Error(e);
                n = !0;
              }
              for (var r, a, o = 0, s = t.length, l = this.blocks; o < s; ) {
                if (
                  (this.hashed &&
                    ((this.hashed = !1),
                    (l[0] = this.block),
                    (this.block =
                      l[16] =
                      l[1] =
                      l[2] =
                      l[3] =
                      l[4] =
                      l[5] =
                      l[6] =
                      l[7] =
                      l[8] =
                      l[9] =
                      l[10] =
                      l[11] =
                      l[12] =
                      l[13] =
                      l[14] =
                      l[15] =
                        0)),
                  n)
                )
                  for (a = this.start; o < s && a < 64; ++o)
                    l[a >>> 2] |= t[o] << f[3 & a++];
                else
                  for (a = this.start; o < s && a < 64; ++o)
                    (r = t.charCodeAt(o)) < 128
                      ? (l[a >>> 2] |= r << f[3 & a++])
                      : r < 2048
                      ? ((l[a >>> 2] |= (192 | (r >>> 6)) << f[3 & a++]),
                        (l[a >>> 2] |= (128 | (63 & r)) << f[3 & a++]))
                      : r < 55296 || r >= 57344
                      ? ((l[a >>> 2] |= (224 | (r >>> 12)) << f[3 & a++]),
                        (l[a >>> 2] |= (128 | ((r >>> 6) & 63)) << f[3 & a++]),
                        (l[a >>> 2] |= (128 | (63 & r)) << f[3 & a++]))
                      : ((r =
                          65536 +
                          (((1023 & r) << 10) | (1023 & t.charCodeAt(++o)))),
                        (l[a >>> 2] |= (240 | (r >>> 18)) << f[3 & a++]),
                        (l[a >>> 2] |= (128 | ((r >>> 12) & 63)) << f[3 & a++]),
                        (l[a >>> 2] |= (128 | ((r >>> 6) & 63)) << f[3 & a++]),
                        (l[a >>> 2] |= (128 | (63 & r)) << f[3 & a++]));
                (this.lastByteIndex = a),
                  (this.bytes += a - this.start),
                  a >= 64
                    ? ((this.block = l[16]),
                      (this.start = a - 64),
                      this.hash(),
                      (this.hashed = !0))
                    : (this.start = a);
              }
              return (
                this.bytes > 4294967295 &&
                  ((this.hBytes += (this.bytes / 4294967296) | 0),
                  (this.bytes = this.bytes % 4294967296)),
                this
              );
            }
          }),
            (S.prototype.finalize = function () {
              if (!this.finalized) {
                this.finalized = !0;
                var t = this.blocks,
                  e = this.lastByteIndex;
                (t[16] = this.block),
                  (t[e >>> 2] |= u[3 & e]),
                  (this.block = t[16]),
                  e >= 56 &&
                    (this.hashed || this.hash(),
                    (t[0] = this.block),
                    (t[16] =
                      t[1] =
                      t[2] =
                      t[3] =
                      t[4] =
                      t[5] =
                      t[6] =
                      t[7] =
                      t[8] =
                      t[9] =
                      t[10] =
                      t[11] =
                      t[12] =
                      t[13] =
                      t[14] =
                      t[15] =
                        0)),
                  (t[14] = (this.hBytes << 3) | (this.bytes >>> 29)),
                  (t[15] = this.bytes << 3),
                  this.hash();
              }
            }),
            (S.prototype.hash = function () {
              var t,
                e,
                n,
                i,
                r,
                a,
                o,
                s,
                l,
                c = this.h0,
                h = this.h1,
                d = this.h2,
                u = this.h3,
                f = this.h4,
                p = this.h5,
                g = this.h6,
                _ = this.h7,
                v = this.blocks;
              for (t = 16; t < 64; ++t)
                (e =
                  (((r = v[t - 15]) >>> 7) | (r << 25)) ^
                  ((r >>> 18) | (r << 14)) ^
                  (r >>> 3)),
                  (n =
                    (((r = v[t - 2]) >>> 17) | (r << 15)) ^
                    ((r >>> 19) | (r << 13)) ^
                    (r >>> 10)),
                  (v[t] = (v[t - 16] + e + v[t - 7] + n) | 0);
              for (l = h & d, t = 0; t < 64; t += 4)
                this.first
                  ? (this.is224
                      ? ((a = 300032),
                        (_ = ((r = v[0] - 1413257819) - 150054599) | 0),
                        (u = (r + 24177077) | 0))
                      : ((a = 704751109),
                        (_ = ((r = v[0] - 210244248) - 1521486534) | 0),
                        (u = (r + 143694565) | 0)),
                    (this.first = !1))
                  : ((e =
                      ((c >>> 2) | (c << 30)) ^
                      ((c >>> 13) | (c << 19)) ^
                      ((c >>> 22) | (c << 10))),
                    (i = (a = c & h) ^ (c & d) ^ l),
                    (_ =
                      (u +
                        (r =
                          _ +
                          (n =
                            ((f >>> 6) | (f << 26)) ^
                            ((f >>> 11) | (f << 21)) ^
                            ((f >>> 25) | (f << 7))) +
                          ((f & p) ^ (~f & g)) +
                          m[t] +
                          v[t])) |
                      0),
                    (u = (r + (e + i)) | 0)),
                  (e =
                    ((u >>> 2) | (u << 30)) ^
                    ((u >>> 13) | (u << 19)) ^
                    ((u >>> 22) | (u << 10))),
                  (i = (o = u & c) ^ (u & h) ^ a),
                  (g =
                    (d +
                      (r =
                        g +
                        (n =
                          ((_ >>> 6) | (_ << 26)) ^
                          ((_ >>> 11) | (_ << 21)) ^
                          ((_ >>> 25) | (_ << 7))) +
                        ((_ & f) ^ (~_ & p)) +
                        m[t + 1] +
                        v[t + 1])) |
                    0),
                  (e =
                    (((d = (r + (e + i)) | 0) >>> 2) | (d << 30)) ^
                    ((d >>> 13) | (d << 19)) ^
                    ((d >>> 22) | (d << 10))),
                  (i = (s = d & u) ^ (d & c) ^ o),
                  (p =
                    (h +
                      (r =
                        p +
                        (n =
                          ((g >>> 6) | (g << 26)) ^
                          ((g >>> 11) | (g << 21)) ^
                          ((g >>> 25) | (g << 7))) +
                        ((g & _) ^ (~g & f)) +
                        m[t + 2] +
                        v[t + 2])) |
                    0),
                  (e =
                    (((h = (r + (e + i)) | 0) >>> 2) | (h << 30)) ^
                    ((h >>> 13) | (h << 19)) ^
                    ((h >>> 22) | (h << 10))),
                  (i = (l = h & d) ^ (h & u) ^ s),
                  (f =
                    (c +
                      (r =
                        f +
                        (n =
                          ((p >>> 6) | (p << 26)) ^
                          ((p >>> 11) | (p << 21)) ^
                          ((p >>> 25) | (p << 7))) +
                        ((p & g) ^ (~p & _)) +
                        m[t + 3] +
                        v[t + 3])) |
                    0),
                  (c = (r + (e + i)) | 0),
                  (this.chromeBugWorkAround = !0);
              (this.h0 = (this.h0 + c) | 0),
                (this.h1 = (this.h1 + h) | 0),
                (this.h2 = (this.h2 + d) | 0),
                (this.h3 = (this.h3 + u) | 0),
                (this.h4 = (this.h4 + f) | 0),
                (this.h5 = (this.h5 + p) | 0),
                (this.h6 = (this.h6 + g) | 0),
                (this.h7 = (this.h7 + _) | 0);
            }),
            (S.prototype.hex = function () {
              this.finalize();
              var t = this.h0,
                e = this.h1,
                n = this.h2,
                i = this.h3,
                r = this.h4,
                a = this.h5,
                o = this.h6,
                s = this.h7,
                l =
                  d[(t >>> 28) & 15] +
                  d[(t >>> 24) & 15] +
                  d[(t >>> 20) & 15] +
                  d[(t >>> 16) & 15] +
                  d[(t >>> 12) & 15] +
                  d[(t >>> 8) & 15] +
                  d[(t >>> 4) & 15] +
                  d[15 & t] +
                  d[(e >>> 28) & 15] +
                  d[(e >>> 24) & 15] +
                  d[(e >>> 20) & 15] +
                  d[(e >>> 16) & 15] +
                  d[(e >>> 12) & 15] +
                  d[(e >>> 8) & 15] +
                  d[(e >>> 4) & 15] +
                  d[15 & e] +
                  d[(n >>> 28) & 15] +
                  d[(n >>> 24) & 15] +
                  d[(n >>> 20) & 15] +
                  d[(n >>> 16) & 15] +
                  d[(n >>> 12) & 15] +
                  d[(n >>> 8) & 15] +
                  d[(n >>> 4) & 15] +
                  d[15 & n] +
                  d[(i >>> 28) & 15] +
                  d[(i >>> 24) & 15] +
                  d[(i >>> 20) & 15] +
                  d[(i >>> 16) & 15] +
                  d[(i >>> 12) & 15] +
                  d[(i >>> 8) & 15] +
                  d[(i >>> 4) & 15] +
                  d[15 & i] +
                  d[(r >>> 28) & 15] +
                  d[(r >>> 24) & 15] +
                  d[(r >>> 20) & 15] +
                  d[(r >>> 16) & 15] +
                  d[(r >>> 12) & 15] +
                  d[(r >>> 8) & 15] +
                  d[(r >>> 4) & 15] +
                  d[15 & r] +
                  d[(a >>> 28) & 15] +
                  d[(a >>> 24) & 15] +
                  d[(a >>> 20) & 15] +
                  d[(a >>> 16) & 15] +
                  d[(a >>> 12) & 15] +
                  d[(a >>> 8) & 15] +
                  d[(a >>> 4) & 15] +
                  d[15 & a] +
                  d[(o >>> 28) & 15] +
                  d[(o >>> 24) & 15] +
                  d[(o >>> 20) & 15] +
                  d[(o >>> 16) & 15] +
                  d[(o >>> 12) & 15] +
                  d[(o >>> 8) & 15] +
                  d[(o >>> 4) & 15] +
                  d[15 & o];
              return (
                this.is224 ||
                  (l +=
                    d[(s >>> 28) & 15] +
                    d[(s >>> 24) & 15] +
                    d[(s >>> 20) & 15] +
                    d[(s >>> 16) & 15] +
                    d[(s >>> 12) & 15] +
                    d[(s >>> 8) & 15] +
                    d[(s >>> 4) & 15] +
                    d[15 & s]),
                l
              );
            }),
            (S.prototype.toString = S.prototype.hex),
            (S.prototype.digest = function () {
              this.finalize();
              var t = this.h0,
                e = this.h1,
                n = this.h2,
                i = this.h3,
                r = this.h4,
                a = this.h5,
                o = this.h6,
                s = this.h7,
                l = [
                  (t >>> 24) & 255,
                  (t >>> 16) & 255,
                  (t >>> 8) & 255,
                  255 & t,
                  (e >>> 24) & 255,
                  (e >>> 16) & 255,
                  (e >>> 8) & 255,
                  255 & e,
                  (n >>> 24) & 255,
                  (n >>> 16) & 255,
                  (n >>> 8) & 255,
                  255 & n,
                  (i >>> 24) & 255,
                  (i >>> 16) & 255,
                  (i >>> 8) & 255,
                  255 & i,
                  (r >>> 24) & 255,
                  (r >>> 16) & 255,
                  (r >>> 8) & 255,
                  255 & r,
                  (a >>> 24) & 255,
                  (a >>> 16) & 255,
                  (a >>> 8) & 255,
                  255 & a,
                  (o >>> 24) & 255,
                  (o >>> 16) & 255,
                  (o >>> 8) & 255,
                  255 & o,
                ];
              return (
                this.is224 ||
                  l.push(
                    (s >>> 24) & 255,
                    (s >>> 16) & 255,
                    (s >>> 8) & 255,
                    255 & s
                  ),
                l
              );
            }),
            (S.prototype.array = S.prototype.digest),
            (S.prototype.arrayBuffer = function () {
              this.finalize();
              var t = new ArrayBuffer(this.is224 ? 28 : 32),
                e = new DataView(t);
              return (
                e.setUint32(0, this.h0),
                e.setUint32(4, this.h1),
                e.setUint32(8, this.h2),
                e.setUint32(12, this.h3),
                e.setUint32(16, this.h4),
                e.setUint32(20, this.h5),
                e.setUint32(24, this.h6),
                this.is224 || e.setUint32(28, this.h7),
                t
              );
            }),
            (b.prototype = new S()),
            (b.prototype.finalize = function () {
              if ((S.prototype.finalize.call(this), this.inner)) {
                this.inner = !1;
                var t = this.array();
                S.call(this, this.is224, this.sharedMemory),
                  this.update(this.oKeyPad),
                  this.update(t),
                  S.prototype.finalize.call(this);
              }
            });
          var M = v();
          (M.sha256 = M),
            (M.sha224 = v(!0)),
            (M.sha256.hmac = w()),
            (M.sha224.hmac = w(!0)),
            l
              ? (t.exports = M)
              : ((a.sha256 = M.sha256),
                (a.sha224 = M.sha224),
                c &&
                  (void 0 ===
                    (i = function () {
                      return M;
                    }.call(M, n, M, t)) ||
                    (t.exports = i)));
        })();
      },
      903: () => {},
      394: () => {},
    },
    e = {};
  function n(i) {
    var r = e[i];
    if (void 0 !== r) return r.exports;
    var a = (e[i] = { exports: {} });
    return t[i](a, a.exports, n), a.exports;
  }
  (n.amdO = {}),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (() => {
      "use strict";
      /**
       * @license
       * Copyright 2010-2024 Three.js Authors
       * SPDX-License-Identifier: MIT
       */
      const t = "166",
        e = 0,
        i = 1,
        r = 100,
        a = 0,
        o = 1e3,
        s = 1001,
        l = 1002,
        c = 1009,
        h = 1015,
        d = 1023,
        u = 1028,
        f = 2300,
        m = 2301,
        p = 2302,
        g = 2400,
        _ = 2401,
        v = 2402,
        y = "",
        x = "srgb",
        w = "srgb-linear",
        S = "display-p3",
        b = "display-p3-linear",
        M = "linear",
        A = "srgb",
        T = "rec709",
        E = "p3",
        C = 7680,
        P = 35044,
        k = 2e3,
        I = 2001;
      class D {
        addEventListener(t, e) {
          void 0 === this._listeners && (this._listeners = {});
          const n = this._listeners;
          void 0 === n[t] && (n[t] = []),
            -1 === n[t].indexOf(e) && n[t].push(e);
        }
        hasEventListener(t, e) {
          if (void 0 === this._listeners) return !1;
          const n = this._listeners;
          return void 0 !== n[t] && -1 !== n[t].indexOf(e);
        }
        removeEventListener(t, e) {
          if (void 0 === this._listeners) return;
          const n = this._listeners[t];
          if (void 0 !== n) {
            const t = n.indexOf(e);
            -1 !== t && n.splice(t, 1);
          }
        }
        dispatchEvent(t) {
          if (void 0 === this._listeners) return;
          const e = this._listeners[t.type];
          if (void 0 !== e) {
            t.target = this;
            const n = e.slice(0);
            for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
            t.target = null;
          }
        }
      }
      const N = [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "0a",
        "0b",
        "0c",
        "0d",
        "0e",
        "0f",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "1a",
        "1b",
        "1c",
        "1d",
        "1e",
        "1f",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "2a",
        "2b",
        "2c",
        "2d",
        "2e",
        "2f",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "3a",
        "3b",
        "3c",
        "3d",
        "3e",
        "3f",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "4a",
        "4b",
        "4c",
        "4d",
        "4e",
        "4f",
        "50",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
        "5a",
        "5b",
        "5c",
        "5d",
        "5e",
        "5f",
        "60",
        "61",
        "62",
        "63",
        "64",
        "65",
        "66",
        "67",
        "68",
        "69",
        "6a",
        "6b",
        "6c",
        "6d",
        "6e",
        "6f",
        "70",
        "71",
        "72",
        "73",
        "74",
        "75",
        "76",
        "77",
        "78",
        "79",
        "7a",
        "7b",
        "7c",
        "7d",
        "7e",
        "7f",
        "80",
        "81",
        "82",
        "83",
        "84",
        "85",
        "86",
        "87",
        "88",
        "89",
        "8a",
        "8b",
        "8c",
        "8d",
        "8e",
        "8f",
        "90",
        "91",
        "92",
        "93",
        "94",
        "95",
        "96",
        "97",
        "98",
        "99",
        "9a",
        "9b",
        "9c",
        "9d",
        "9e",
        "9f",
        "a0",
        "a1",
        "a2",
        "a3",
        "a4",
        "a5",
        "a6",
        "a7",
        "a8",
        "a9",
        "aa",
        "ab",
        "ac",
        "ad",
        "ae",
        "af",
        "b0",
        "b1",
        "b2",
        "b3",
        "b4",
        "b5",
        "b6",
        "b7",
        "b8",
        "b9",
        "ba",
        "bb",
        "bc",
        "bd",
        "be",
        "bf",
        "c0",
        "c1",
        "c2",
        "c3",
        "c4",
        "c5",
        "c6",
        "c7",
        "c8",
        "c9",
        "ca",
        "cb",
        "cc",
        "cd",
        "ce",
        "cf",
        "d0",
        "d1",
        "d2",
        "d3",
        "d4",
        "d5",
        "d6",
        "d7",
        "d8",
        "d9",
        "da",
        "db",
        "dc",
        "dd",
        "de",
        "df",
        "e0",
        "e1",
        "e2",
        "e3",
        "e4",
        "e5",
        "e6",
        "e7",
        "e8",
        "e9",
        "ea",
        "eb",
        "ec",
        "ed",
        "ee",
        "ef",
        "f0",
        "f1",
        "f2",
        "f3",
        "f4",
        "f5",
        "f6",
        "f7",
        "f8",
        "f9",
        "fa",
        "fb",
        "fc",
        "fd",
        "fe",
        "ff",
      ];
      Math.PI, Math.PI;
      function R() {
        const t = (4294967295 * Math.random()) | 0,
          e = (4294967295 * Math.random()) | 0,
          n = (4294967295 * Math.random()) | 0,
          i = (4294967295 * Math.random()) | 0;
        return (
          N[255 & t] +
          N[(t >> 8) & 255] +
          N[(t >> 16) & 255] +
          N[(t >> 24) & 255] +
          "-" +
          N[255 & e] +
          N[(e >> 8) & 255] +
          "-" +
          N[((e >> 16) & 15) | 64] +
          N[(e >> 24) & 255] +
          "-" +
          N[(63 & n) | 128] +
          N[(n >> 8) & 255] +
          "-" +
          N[(n >> 16) & 255] +
          N[(n >> 24) & 255] +
          N[255 & i] +
          N[(i >> 8) & 255] +
          N[(i >> 16) & 255] +
          N[(i >> 24) & 255]
        ).toLowerCase();
      }
      function L(t, e, n) {
        return Math.max(e, Math.min(n, t));
      }
      function z(t, e) {
        return ((t % e) + e) % e;
      }
      function U(t, e, n) {
        return (1 - n) * t + n * e;
      }
      function B(t, e) {
        switch (e.constructor) {
          case Float32Array:
            return t;
          case Uint32Array:
            return t / 4294967295;
          case Uint16Array:
            return t / 65535;
          case Uint8Array:
            return t / 255;
          case Int32Array:
            return Math.max(t / 2147483647, -1);
          case Int16Array:
            return Math.max(t / 32767, -1);
          case Int8Array:
            return Math.max(t / 127, -1);
          default:
            throw new Error("Invalid component type.");
        }
      }
      function O(t, e) {
        switch (e.constructor) {
          case Float32Array:
            return t;
          case Uint32Array:
            return Math.round(4294967295 * t);
          case Uint16Array:
            return Math.round(65535 * t);
          case Uint8Array:
            return Math.round(255 * t);
          case Int32Array:
            return Math.round(2147483647 * t);
          case Int16Array:
            return Math.round(32767 * t);
          case Int8Array:
            return Math.round(127 * t);
          default:
            throw new Error("Invalid component type.");
        }
      }
      class V {
        constructor(t = 0, e = 0) {
          (V.prototype.isVector2 = !0), (this.x = t), (this.y = e);
        }
        get width() {
          return this.x;
        }
        set width(t) {
          this.x = t;
        }
        get height() {
          return this.y;
        }
        set height(t) {
          this.y = t;
        }
        set(t, e) {
          return (this.x = t), (this.y = e), this;
        }
        setScalar(t) {
          return (this.x = t), (this.y = t), this;
        }
        setX(t) {
          return (this.x = t), this;
        }
        setY(t) {
          return (this.y = t), this;
        }
        setComponent(t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            default:
              throw new Error("index is out of range: " + t);
          }
          return this;
        }
        getComponent(t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            default:
              throw new Error("index is out of range: " + t);
          }
        }
        clone() {
          return new this.constructor(this.x, this.y);
        }
        copy(t) {
          return (this.x = t.x), (this.y = t.y), this;
        }
        add(t) {
          return (this.x += t.x), (this.y += t.y), this;
        }
        addScalar(t) {
          return (this.x += t), (this.y += t), this;
        }
        addVectors(t, e) {
          return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
        }
        addScaledVector(t, e) {
          return (this.x += t.x * e), (this.y += t.y * e), this;
        }
        sub(t) {
          return (this.x -= t.x), (this.y -= t.y), this;
        }
        subScalar(t) {
          return (this.x -= t), (this.y -= t), this;
        }
        subVectors(t, e) {
          return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
        }
        multiply(t) {
          return (this.x *= t.x), (this.y *= t.y), this;
        }
        multiplyScalar(t) {
          return (this.x *= t), (this.y *= t), this;
        }
        divide(t) {
          return (this.x /= t.x), (this.y /= t.y), this;
        }
        divideScalar(t) {
          return this.multiplyScalar(1 / t);
        }
        applyMatrix3(t) {
          const e = this.x,
            n = this.y,
            i = t.elements;
          return (
            (this.x = i[0] * e + i[3] * n + i[6]),
            (this.y = i[1] * e + i[4] * n + i[7]),
            this
          );
        }
        min(t) {
          return (
            (this.x = Math.min(this.x, t.x)),
            (this.y = Math.min(this.y, t.y)),
            this
          );
        }
        max(t) {
          return (
            (this.x = Math.max(this.x, t.x)),
            (this.y = Math.max(this.y, t.y)),
            this
          );
        }
        clamp(t, e) {
          return (
            (this.x = Math.max(t.x, Math.min(e.x, this.x))),
            (this.y = Math.max(t.y, Math.min(e.y, this.y))),
            this
          );
        }
        clampScalar(t, e) {
          return (
            (this.x = Math.max(t, Math.min(e, this.x))),
            (this.y = Math.max(t, Math.min(e, this.y))),
            this
          );
        }
        clampLength(t, e) {
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(
            Math.max(t, Math.min(e, n))
          );
        }
        floor() {
          return (
            (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
          );
        }
        ceil() {
          return (
            (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this
          );
        }
        round() {
          return (
            (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
          );
        }
        roundToZero() {
          return (
            (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this
          );
        }
        negate() {
          return (this.x = -this.x), (this.y = -this.y), this;
        }
        dot(t) {
          return this.x * t.x + this.y * t.y;
        }
        cross(t) {
          return this.x * t.y - this.y * t.x;
        }
        lengthSq() {
          return this.x * this.x + this.y * this.y;
        }
        length() {
          return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        manhattanLength() {
          return Math.abs(this.x) + Math.abs(this.y);
        }
        normalize() {
          return this.divideScalar(this.length() || 1);
        }
        angle() {
          return Math.atan2(-this.y, -this.x) + Math.PI;
        }
        angleTo(t) {
          const e = Math.sqrt(this.lengthSq() * t.lengthSq());
          if (0 === e) return Math.PI / 2;
          const n = this.dot(t) / e;
          return Math.acos(L(n, -1, 1));
        }
        distanceTo(t) {
          return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
          const e = this.x - t.x,
            n = this.y - t.y;
          return e * e + n * n;
        }
        manhattanDistanceTo(t) {
          return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
        }
        setLength(t) {
          return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
          return (
            (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this
          );
        }
        lerpVectors(t, e, n) {
          return (
            (this.x = t.x + (e.x - t.x) * n),
            (this.y = t.y + (e.y - t.y) * n),
            this
          );
        }
        equals(t) {
          return t.x === this.x && t.y === this.y;
        }
        fromArray(t, e = 0) {
          return (this.x = t[e]), (this.y = t[e + 1]), this;
        }
        toArray(t = [], e = 0) {
          return (t[e] = this.x), (t[e + 1] = this.y), t;
        }
        fromBufferAttribute(t, e) {
          return (this.x = t.getX(e)), (this.y = t.getY(e)), this;
        }
        rotateAround(t, e) {
          const n = Math.cos(e),
            i = Math.sin(e),
            r = this.x - t.x,
            a = this.y - t.y;
          return (
            (this.x = r * n - a * i + t.x), (this.y = r * i + a * n + t.y), this
          );
        }
        random() {
          return (this.x = Math.random()), (this.y = Math.random()), this;
        }
        *[Symbol.iterator]() {
          yield this.x, yield this.y;
        }
      }
      class F {
        constructor(t, e, n, i, r, a, o, s, l) {
          (F.prototype.isMatrix3 = !0),
            (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
            void 0 !== t && this.set(t, e, n, i, r, a, o, s, l);
        }
        set(t, e, n, i, r, a, o, s, l) {
          const c = this.elements;
          return (
            (c[0] = t),
            (c[1] = i),
            (c[2] = o),
            (c[3] = e),
            (c[4] = r),
            (c[5] = s),
            (c[6] = n),
            (c[7] = a),
            (c[8] = l),
            this
          );
        }
        identity() {
          return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
        }
        copy(t) {
          const e = this.elements,
            n = t.elements;
          return (
            (e[0] = n[0]),
            (e[1] = n[1]),
            (e[2] = n[2]),
            (e[3] = n[3]),
            (e[4] = n[4]),
            (e[5] = n[5]),
            (e[6] = n[6]),
            (e[7] = n[7]),
            (e[8] = n[8]),
            this
          );
        }
        extractBasis(t, e, n) {
          return (
            t.setFromMatrix3Column(this, 0),
            e.setFromMatrix3Column(this, 1),
            n.setFromMatrix3Column(this, 2),
            this
          );
        }
        setFromMatrix4(t) {
          const e = t.elements;
          return (
            this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
            this
          );
        }
        multiply(t) {
          return this.multiplyMatrices(this, t);
        }
        premultiply(t) {
          return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
          const n = t.elements,
            i = e.elements,
            r = this.elements,
            a = n[0],
            o = n[3],
            s = n[6],
            l = n[1],
            c = n[4],
            h = n[7],
            d = n[2],
            u = n[5],
            f = n[8],
            m = i[0],
            p = i[3],
            g = i[6],
            _ = i[1],
            v = i[4],
            y = i[7],
            x = i[2],
            w = i[5],
            S = i[8];
          return (
            (r[0] = a * m + o * _ + s * x),
            (r[3] = a * p + o * v + s * w),
            (r[6] = a * g + o * y + s * S),
            (r[1] = l * m + c * _ + h * x),
            (r[4] = l * p + c * v + h * w),
            (r[7] = l * g + c * y + h * S),
            (r[2] = d * m + u * _ + f * x),
            (r[5] = d * p + u * v + f * w),
            (r[8] = d * g + u * y + f * S),
            this
          );
        }
        multiplyScalar(t) {
          const e = this.elements;
          return (
            (e[0] *= t),
            (e[3] *= t),
            (e[6] *= t),
            (e[1] *= t),
            (e[4] *= t),
            (e[7] *= t),
            (e[2] *= t),
            (e[5] *= t),
            (e[8] *= t),
            this
          );
        }
        determinant() {
          const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            a = t[4],
            o = t[5],
            s = t[6],
            l = t[7],
            c = t[8];
          return (
            e * a * c -
            e * o * l -
            n * r * c +
            n * o * s +
            i * r * l -
            i * a * s
          );
        }
        invert() {
          const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            a = t[4],
            o = t[5],
            s = t[6],
            l = t[7],
            c = t[8],
            h = c * a - o * l,
            d = o * s - c * r,
            u = l * r - a * s,
            f = e * h + n * d + i * u;
          if (0 === f) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
          const m = 1 / f;
          return (
            (t[0] = h * m),
            (t[1] = (i * l - c * n) * m),
            (t[2] = (o * n - i * a) * m),
            (t[3] = d * m),
            (t[4] = (c * e - i * s) * m),
            (t[5] = (i * r - o * e) * m),
            (t[6] = u * m),
            (t[7] = (n * s - l * e) * m),
            (t[8] = (a * e - n * r) * m),
            this
          );
        }
        transpose() {
          let t;
          const e = this.elements;
          return (
            (t = e[1]),
            (e[1] = e[3]),
            (e[3] = t),
            (t = e[2]),
            (e[2] = e[6]),
            (e[6] = t),
            (t = e[5]),
            (e[5] = e[7]),
            (e[7] = t),
            this
          );
        }
        getNormalMatrix(t) {
          return this.setFromMatrix4(t).invert().transpose();
        }
        transposeIntoArray(t) {
          const e = this.elements;
          return (
            (t[0] = e[0]),
            (t[1] = e[3]),
            (t[2] = e[6]),
            (t[3] = e[1]),
            (t[4] = e[4]),
            (t[5] = e[7]),
            (t[6] = e[2]),
            (t[7] = e[5]),
            (t[8] = e[8]),
            this
          );
        }
        setUvTransform(t, e, n, i, r, a, o) {
          const s = Math.cos(r),
            l = Math.sin(r);
          return (
            this.set(
              n * s,
              n * l,
              -n * (s * a + l * o) + a + t,
              -i * l,
              i * s,
              -i * (-l * a + s * o) + o + e,
              0,
              0,
              1
            ),
            this
          );
        }
        scale(t, e) {
          return this.premultiply(H.makeScale(t, e)), this;
        }
        rotate(t) {
          return this.premultiply(H.makeRotation(-t)), this;
        }
        translate(t, e) {
          return this.premultiply(H.makeTranslation(t, e)), this;
        }
        makeTranslation(t, e) {
          return (
            t.isVector2
              ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1)
              : this.set(1, 0, t, 0, 1, e, 0, 0, 1),
            this
          );
        }
        makeRotation(t) {
          const e = Math.cos(t),
            n = Math.sin(t);
          return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
        }
        makeScale(t, e) {
          return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
        }
        equals(t) {
          const e = this.elements,
            n = t.elements;
          for (let t = 0; t < 9; t++) if (e[t] !== n[t]) return !1;
          return !0;
        }
        fromArray(t, e = 0) {
          for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
          return this;
        }
        toArray(t = [], e = 0) {
          const n = this.elements;
          return (
            (t[e] = n[0]),
            (t[e + 1] = n[1]),
            (t[e + 2] = n[2]),
            (t[e + 3] = n[3]),
            (t[e + 4] = n[4]),
            (t[e + 5] = n[5]),
            (t[e + 6] = n[6]),
            (t[e + 7] = n[7]),
            (t[e + 8] = n[8]),
            t
          );
        }
        clone() {
          return new this.constructor().fromArray(this.elements);
        }
      }
      const H = new F();
      function W(t) {
        for (let e = t.length - 1; e >= 0; --e) if (t[e] >= 65535) return !0;
        return !1;
      }
      Int8Array,
        Uint8Array,
        Uint8ClampedArray,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array;
      function G(t) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", t);
      }
      const q = {};
      function j(t) {
        t in q || ((q[t] = !0), console.warn(t));
      }
      const Z = new F().set(
          0.8224621,
          0.177538,
          0,
          0.0331941,
          0.9668058,
          0,
          0.0170827,
          0.0723974,
          0.9105199
        ),
        Y = new F().set(
          1.2249401,
          -0.2249404,
          0,
          -0.0420569,
          1.0420571,
          0,
          -0.0196376,
          -0.0786361,
          1.0982735
        ),
        X = {
          [w]: {
            transfer: M,
            primaries: T,
            toReference: (t) => t,
            fromReference: (t) => t,
          },
          [x]: {
            transfer: A,
            primaries: T,
            toReference: (t) => t.convertSRGBToLinear(),
            fromReference: (t) => t.convertLinearToSRGB(),
          },
          [b]: {
            transfer: M,
            primaries: E,
            toReference: (t) => t.applyMatrix3(Y),
            fromReference: (t) => t.applyMatrix3(Z),
          },
          [S]: {
            transfer: A,
            primaries: E,
            toReference: (t) => t.convertSRGBToLinear().applyMatrix3(Y),
            fromReference: (t) => t.applyMatrix3(Z).convertLinearToSRGB(),
          },
        },
        J = new Set([w, b]),
        Q = {
          enabled: !0,
          _workingColorSpace: w,
          get workingColorSpace() {
            return this._workingColorSpace;
          },
          set workingColorSpace(t) {
            if (!J.has(t))
              throw new Error(`Unsupported working color space, "${t}".`);
            this._workingColorSpace = t;
          },
          convert: function (t, e, n) {
            if (!1 === this.enabled || e === n || !e || !n) return t;
            const i = X[e].toReference;
            return (0, X[n].fromReference)(i(t));
          },
          fromWorkingColorSpace: function (t, e) {
            return this.convert(t, this._workingColorSpace, e);
          },
          toWorkingColorSpace: function (t, e) {
            return this.convert(t, e, this._workingColorSpace);
          },
          getPrimaries: function (t) {
            return X[t].primaries;
          },
          getTransfer: function (t) {
            return t === y ? M : X[t].transfer;
          },
        };
      function K(t) {
        return t < 0.04045
          ? 0.0773993808 * t
          : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
      }
      function $(t) {
        return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
      }
      let tt;
      class et {
        static getDataURL(t) {
          if (/^data:/i.test(t.src)) return t.src;
          if ("undefined" == typeof HTMLCanvasElement) return t.src;
          let e;
          if (t instanceof HTMLCanvasElement) e = t;
          else {
            void 0 === tt && (tt = G("canvas")),
              (tt.width = t.width),
              (tt.height = t.height);
            const n = tt.getContext("2d");
            t instanceof ImageData
              ? n.putImageData(t, 0, 0)
              : n.drawImage(t, 0, 0, t.width, t.height),
              (e = tt);
          }
          return e.width > 2048 || e.height > 2048
            ? (console.warn(
                "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
                t
              ),
              e.toDataURL("image/jpeg", 0.6))
            : e.toDataURL("image/png");
        }
        static sRGBToLinear(t) {
          if (
            ("undefined" != typeof HTMLImageElement &&
              t instanceof HTMLImageElement) ||
            ("undefined" != typeof HTMLCanvasElement &&
              t instanceof HTMLCanvasElement) ||
            ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
          ) {
            const e = G("canvas");
            (e.width = t.width), (e.height = t.height);
            const n = e.getContext("2d");
            n.drawImage(t, 0, 0, t.width, t.height);
            const i = n.getImageData(0, 0, t.width, t.height),
              r = i.data;
            for (let t = 0; t < r.length; t++) r[t] = 255 * K(r[t] / 255);
            return n.putImageData(i, 0, 0), e;
          }
          if (t.data) {
            const e = t.data.slice(0);
            for (let t = 0; t < e.length; t++)
              e instanceof Uint8Array || e instanceof Uint8ClampedArray
                ? (e[t] = Math.floor(255 * K(e[t] / 255)))
                : (e[t] = K(e[t]));
            return { data: e, width: t.width, height: t.height };
          }
          return (
            console.warn(
              "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
            ),
            t
          );
        }
      }
      let nt = 0;
      class it {
        constructor(t = null) {
          (this.isSource = !0),
            Object.defineProperty(this, "id", { value: nt++ }),
            (this.uuid = R()),
            (this.data = t),
            (this.dataReady = !0),
            (this.version = 0);
        }
        set needsUpdate(t) {
          !0 === t && this.version++;
        }
        toJSON(t) {
          const e = void 0 === t || "string" == typeof t;
          if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
          const n = { uuid: this.uuid, url: "" },
            i = this.data;
          if (null !== i) {
            let t;
            if (Array.isArray(i)) {
              t = [];
              for (let e = 0, n = i.length; e < n; e++)
                i[e].isDataTexture ? t.push(rt(i[e].image)) : t.push(rt(i[e]));
            } else t = rt(i);
            n.url = t;
          }
          return e || (t.images[this.uuid] = n), n;
        }
      }
      function rt(t) {
        return ("undefined" != typeof HTMLImageElement &&
          t instanceof HTMLImageElement) ||
          ("undefined" != typeof HTMLCanvasElement &&
            t instanceof HTMLCanvasElement) ||
          ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
          ? et.getDataURL(t)
          : t.data
          ? {
              data: Array.from(t.data),
              width: t.width,
              height: t.height,
              type: t.data.constructor.name,
            }
          : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
      }
      let at = 0;
      class ot extends D {
        constructor(
          t = ot.DEFAULT_IMAGE,
          e = ot.DEFAULT_MAPPING,
          n = 1001,
          i = 1001,
          r = 1006,
          a = 1008,
          o = d,
          s = c,
          l = ot.DEFAULT_ANISOTROPY,
          h = ""
        ) {
          super(),
            (this.isTexture = !0),
            Object.defineProperty(this, "id", { value: at++ }),
            (this.uuid = R()),
            (this.name = ""),
            (this.source = new it(t)),
            (this.mipmaps = []),
            (this.mapping = e),
            (this.channel = 0),
            (this.wrapS = n),
            (this.wrapT = i),
            (this.magFilter = r),
            (this.minFilter = a),
            (this.anisotropy = l),
            (this.format = o),
            (this.internalFormat = null),
            (this.type = s),
            (this.offset = new V(0, 0)),
            (this.repeat = new V(1, 1)),
            (this.center = new V(0, 0)),
            (this.rotation = 0),
            (this.matrixAutoUpdate = !0),
            (this.matrix = new F()),
            (this.generateMipmaps = !0),
            (this.premultiplyAlpha = !1),
            (this.flipY = !0),
            (this.unpackAlignment = 4),
            (this.colorSpace = h),
            (this.userData = {}),
            (this.version = 0),
            (this.onUpdate = null),
            (this.isRenderTargetTexture = !1),
            (this.pmremVersion = 0);
        }
        get image() {
          return this.source.data;
        }
        set image(t = null) {
          this.source.data = t;
        }
        updateMatrix() {
          this.matrix.setUvTransform(
            this.offset.x,
            this.offset.y,
            this.repeat.x,
            this.repeat.y,
            this.rotation,
            this.center.x,
            this.center.y
          );
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          return (
            (this.name = t.name),
            (this.source = t.source),
            (this.mipmaps = t.mipmaps.slice(0)),
            (this.mapping = t.mapping),
            (this.channel = t.channel),
            (this.wrapS = t.wrapS),
            (this.wrapT = t.wrapT),
            (this.magFilter = t.magFilter),
            (this.minFilter = t.minFilter),
            (this.anisotropy = t.anisotropy),
            (this.format = t.format),
            (this.internalFormat = t.internalFormat),
            (this.type = t.type),
            this.offset.copy(t.offset),
            this.repeat.copy(t.repeat),
            this.center.copy(t.center),
            (this.rotation = t.rotation),
            (this.matrixAutoUpdate = t.matrixAutoUpdate),
            this.matrix.copy(t.matrix),
            (this.generateMipmaps = t.generateMipmaps),
            (this.premultiplyAlpha = t.premultiplyAlpha),
            (this.flipY = t.flipY),
            (this.unpackAlignment = t.unpackAlignment),
            (this.colorSpace = t.colorSpace),
            (this.userData = JSON.parse(JSON.stringify(t.userData))),
            (this.needsUpdate = !0),
            this
          );
        }
        toJSON(t) {
          const e = void 0 === t || "string" == typeof t;
          if (!e && void 0 !== t.textures[this.uuid])
            return t.textures[this.uuid];
          const n = {
            metadata: {
              version: 4.6,
              type: "Texture",
              generator: "Texture.toJSON",
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(t).uuid,
            mapping: this.mapping,
            channel: this.channel,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            internalFormat: this.internalFormat,
            type: this.type,
            colorSpace: this.colorSpace,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            generateMipmaps: this.generateMipmaps,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment,
          };
          return (
            Object.keys(this.userData).length > 0 &&
              (n.userData = this.userData),
            e || (t.textures[this.uuid] = n),
            n
          );
        }
        dispose() {
          this.dispatchEvent({ type: "dispose" });
        }
        transformUv(t) {
          if (300 !== this.mapping) return t;
          if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
            switch (this.wrapS) {
              case o:
                t.x = t.x - Math.floor(t.x);
                break;
              case s:
                t.x = t.x < 0 ? 0 : 1;
                break;
              case l:
                1 === Math.abs(Math.floor(t.x) % 2)
                  ? (t.x = Math.ceil(t.x) - t.x)
                  : (t.x = t.x - Math.floor(t.x));
            }
          if (t.y < 0 || t.y > 1)
            switch (this.wrapT) {
              case o:
                t.y = t.y - Math.floor(t.y);
                break;
              case s:
                t.y = t.y < 0 ? 0 : 1;
                break;
              case l:
                1 === Math.abs(Math.floor(t.y) % 2)
                  ? (t.y = Math.ceil(t.y) - t.y)
                  : (t.y = t.y - Math.floor(t.y));
            }
          return this.flipY && (t.y = 1 - t.y), t;
        }
        set needsUpdate(t) {
          !0 === t && (this.version++, (this.source.needsUpdate = !0));
        }
        set needsPMREMUpdate(t) {
          !0 === t && this.pmremVersion++;
        }
      }
      (ot.DEFAULT_IMAGE = null),
        (ot.DEFAULT_MAPPING = 300),
        (ot.DEFAULT_ANISOTROPY = 1);
      class st {
        constructor(t = 0, e = 0, n = 0, i = 1) {
          (st.prototype.isVector4 = !0),
            (this.x = t),
            (this.y = e),
            (this.z = n),
            (this.w = i);
        }
        get width() {
          return this.z;
        }
        set width(t) {
          this.z = t;
        }
        get height() {
          return this.w;
        }
        set height(t) {
          this.w = t;
        }
        set(t, e, n, i) {
          return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this;
        }
        setScalar(t) {
          return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
        }
        setX(t) {
          return (this.x = t), this;
        }
        setY(t) {
          return (this.y = t), this;
        }
        setZ(t) {
          return (this.z = t), this;
        }
        setW(t) {
          return (this.w = t), this;
        }
        setComponent(t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            case 2:
              this.z = e;
              break;
            case 3:
              this.w = e;
              break;
            default:
              throw new Error("index is out of range: " + t);
          }
          return this;
        }
        getComponent(t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            case 3:
              return this.w;
            default:
              throw new Error("index is out of range: " + t);
          }
        }
        clone() {
          return new this.constructor(this.x, this.y, this.z, this.w);
        }
        copy(t) {
          return (
            (this.x = t.x),
            (this.y = t.y),
            (this.z = t.z),
            (this.w = void 0 !== t.w ? t.w : 1),
            this
          );
        }
        add(t) {
          return (
            (this.x += t.x),
            (this.y += t.y),
            (this.z += t.z),
            (this.w += t.w),
            this
          );
        }
        addScalar(t) {
          return (
            (this.x += t), (this.y += t), (this.z += t), (this.w += t), this
          );
        }
        addVectors(t, e) {
          return (
            (this.x = t.x + e.x),
            (this.y = t.y + e.y),
            (this.z = t.z + e.z),
            (this.w = t.w + e.w),
            this
          );
        }
        addScaledVector(t, e) {
          return (
            (this.x += t.x * e),
            (this.y += t.y * e),
            (this.z += t.z * e),
            (this.w += t.w * e),
            this
          );
        }
        sub(t) {
          return (
            (this.x -= t.x),
            (this.y -= t.y),
            (this.z -= t.z),
            (this.w -= t.w),
            this
          );
        }
        subScalar(t) {
          return (
            (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this
          );
        }
        subVectors(t, e) {
          return (
            (this.x = t.x - e.x),
            (this.y = t.y - e.y),
            (this.z = t.z - e.z),
            (this.w = t.w - e.w),
            this
          );
        }
        multiply(t) {
          return (
            (this.x *= t.x),
            (this.y *= t.y),
            (this.z *= t.z),
            (this.w *= t.w),
            this
          );
        }
        multiplyScalar(t) {
          return (
            (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
          );
        }
        applyMatrix4(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = this.w,
            a = t.elements;
          return (
            (this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r),
            (this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r),
            (this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r),
            (this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r),
            this
          );
        }
        divideScalar(t) {
          return this.multiplyScalar(1 / t);
        }
        setAxisAngleFromQuaternion(t) {
          this.w = 2 * Math.acos(t.w);
          const e = Math.sqrt(1 - t.w * t.w);
          return (
            e < 1e-4
              ? ((this.x = 1), (this.y = 0), (this.z = 0))
              : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
            this
          );
        }
        setAxisAngleFromRotationMatrix(t) {
          let e, n, i, r;
          const a = 0.01,
            o = 0.1,
            s = t.elements,
            l = s[0],
            c = s[4],
            h = s[8],
            d = s[1],
            u = s[5],
            f = s[9],
            m = s[2],
            p = s[6],
            g = s[10];
          if (
            Math.abs(c - d) < a &&
            Math.abs(h - m) < a &&
            Math.abs(f - p) < a
          ) {
            if (
              Math.abs(c + d) < o &&
              Math.abs(h + m) < o &&
              Math.abs(f + p) < o &&
              Math.abs(l + u + g - 3) < o
            )
              return this.set(1, 0, 0, 0), this;
            e = Math.PI;
            const t = (l + 1) / 2,
              s = (u + 1) / 2,
              _ = (g + 1) / 2,
              v = (c + d) / 4,
              y = (h + m) / 4,
              x = (f + p) / 4;
            return (
              t > s && t > _
                ? t < a
                  ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
                  : ((n = Math.sqrt(t)), (i = v / n), (r = y / n))
                : s > _
                ? s < a
                  ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
                  : ((i = Math.sqrt(s)), (n = v / i), (r = x / i))
                : _ < a
                ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
                : ((r = Math.sqrt(_)), (n = y / r), (i = x / r)),
              this.set(n, i, r, e),
              this
            );
          }
          let _ = Math.sqrt(
            (p - f) * (p - f) + (h - m) * (h - m) + (d - c) * (d - c)
          );
          return (
            Math.abs(_) < 0.001 && (_ = 1),
            (this.x = (p - f) / _),
            (this.y = (h - m) / _),
            (this.z = (d - c) / _),
            (this.w = Math.acos((l + u + g - 1) / 2)),
            this
          );
        }
        setFromMatrixPosition(t) {
          const e = t.elements;
          return (
            (this.x = e[12]),
            (this.y = e[13]),
            (this.z = e[14]),
            (this.w = e[15]),
            this
          );
        }
        min(t) {
          return (
            (this.x = Math.min(this.x, t.x)),
            (this.y = Math.min(this.y, t.y)),
            (this.z = Math.min(this.z, t.z)),
            (this.w = Math.min(this.w, t.w)),
            this
          );
        }
        max(t) {
          return (
            (this.x = Math.max(this.x, t.x)),
            (this.y = Math.max(this.y, t.y)),
            (this.z = Math.max(this.z, t.z)),
            (this.w = Math.max(this.w, t.w)),
            this
          );
        }
        clamp(t, e) {
          return (
            (this.x = Math.max(t.x, Math.min(e.x, this.x))),
            (this.y = Math.max(t.y, Math.min(e.y, this.y))),
            (this.z = Math.max(t.z, Math.min(e.z, this.z))),
            (this.w = Math.max(t.w, Math.min(e.w, this.w))),
            this
          );
        }
        clampScalar(t, e) {
          return (
            (this.x = Math.max(t, Math.min(e, this.x))),
            (this.y = Math.max(t, Math.min(e, this.y))),
            (this.z = Math.max(t, Math.min(e, this.z))),
            (this.w = Math.max(t, Math.min(e, this.w))),
            this
          );
        }
        clampLength(t, e) {
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(
            Math.max(t, Math.min(e, n))
          );
        }
        floor() {
          return (
            (this.x = Math.floor(this.x)),
            (this.y = Math.floor(this.y)),
            (this.z = Math.floor(this.z)),
            (this.w = Math.floor(this.w)),
            this
          );
        }
        ceil() {
          return (
            (this.x = Math.ceil(this.x)),
            (this.y = Math.ceil(this.y)),
            (this.z = Math.ceil(this.z)),
            (this.w = Math.ceil(this.w)),
            this
          );
        }
        round() {
          return (
            (this.x = Math.round(this.x)),
            (this.y = Math.round(this.y)),
            (this.z = Math.round(this.z)),
            (this.w = Math.round(this.w)),
            this
          );
        }
        roundToZero() {
          return (
            (this.x = Math.trunc(this.x)),
            (this.y = Math.trunc(this.y)),
            (this.z = Math.trunc(this.z)),
            (this.w = Math.trunc(this.w)),
            this
          );
        }
        negate() {
          return (
            (this.x = -this.x),
            (this.y = -this.y),
            (this.z = -this.z),
            (this.w = -this.w),
            this
          );
        }
        dot(t) {
          return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
        }
        lengthSq() {
          return (
            this.x * this.x +
            this.y * this.y +
            this.z * this.z +
            this.w * this.w
          );
        }
        length() {
          return Math.sqrt(
            this.x * this.x +
              this.y * this.y +
              this.z * this.z +
              this.w * this.w
          );
        }
        manhattanLength() {
          return (
            Math.abs(this.x) +
            Math.abs(this.y) +
            Math.abs(this.z) +
            Math.abs(this.w)
          );
        }
        normalize() {
          return this.divideScalar(this.length() || 1);
        }
        setLength(t) {
          return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
          return (
            (this.x += (t.x - this.x) * e),
            (this.y += (t.y - this.y) * e),
            (this.z += (t.z - this.z) * e),
            (this.w += (t.w - this.w) * e),
            this
          );
        }
        lerpVectors(t, e, n) {
          return (
            (this.x = t.x + (e.x - t.x) * n),
            (this.y = t.y + (e.y - t.y) * n),
            (this.z = t.z + (e.z - t.z) * n),
            (this.w = t.w + (e.w - t.w) * n),
            this
          );
        }
        equals(t) {
          return (
            t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
          );
        }
        fromArray(t, e = 0) {
          return (
            (this.x = t[e]),
            (this.y = t[e + 1]),
            (this.z = t[e + 2]),
            (this.w = t[e + 3]),
            this
          );
        }
        toArray(t = [], e = 0) {
          return (
            (t[e] = this.x),
            (t[e + 1] = this.y),
            (t[e + 2] = this.z),
            (t[e + 3] = this.w),
            t
          );
        }
        fromBufferAttribute(t, e) {
          return (
            (this.x = t.getX(e)),
            (this.y = t.getY(e)),
            (this.z = t.getZ(e)),
            (this.w = t.getW(e)),
            this
          );
        }
        random() {
          return (
            (this.x = Math.random()),
            (this.y = Math.random()),
            (this.z = Math.random()),
            (this.w = Math.random()),
            this
          );
        }
        *[Symbol.iterator]() {
          yield this.x, yield this.y, yield this.z, yield this.w;
        }
      }
      class lt {
        constructor(t = 0, e = 0, n = 0, i = 1) {
          (this.isQuaternion = !0),
            (this._x = t),
            (this._y = e),
            (this._z = n),
            (this._w = i);
        }
        static slerpFlat(t, e, n, i, r, a, o) {
          let s = n[i + 0],
            l = n[i + 1],
            c = n[i + 2],
            h = n[i + 3];
          const d = r[a + 0],
            u = r[a + 1],
            f = r[a + 2],
            m = r[a + 3];
          if (0 === o)
            return (
              (t[e + 0] = s),
              (t[e + 1] = l),
              (t[e + 2] = c),
              void (t[e + 3] = h)
            );
          if (1 === o)
            return (
              (t[e + 0] = d),
              (t[e + 1] = u),
              (t[e + 2] = f),
              void (t[e + 3] = m)
            );
          if (h !== m || s !== d || l !== u || c !== f) {
            let t = 1 - o;
            const e = s * d + l * u + c * f + h * m,
              n = e >= 0 ? 1 : -1,
              i = 1 - e * e;
            if (i > Number.EPSILON) {
              const r = Math.sqrt(i),
                a = Math.atan2(r, e * n);
              (t = Math.sin(t * a) / r), (o = Math.sin(o * a) / r);
            }
            const r = o * n;
            if (
              ((s = s * t + d * r),
              (l = l * t + u * r),
              (c = c * t + f * r),
              (h = h * t + m * r),
              t === 1 - o)
            ) {
              const t = 1 / Math.sqrt(s * s + l * l + c * c + h * h);
              (s *= t), (l *= t), (c *= t), (h *= t);
            }
          }
          (t[e] = s), (t[e + 1] = l), (t[e + 2] = c), (t[e + 3] = h);
        }
        static multiplyQuaternionsFlat(t, e, n, i, r, a) {
          const o = n[i],
            s = n[i + 1],
            l = n[i + 2],
            c = n[i + 3],
            h = r[a],
            d = r[a + 1],
            u = r[a + 2],
            f = r[a + 3];
          return (
            (t[e] = o * f + c * h + s * u - l * d),
            (t[e + 1] = s * f + c * d + l * h - o * u),
            (t[e + 2] = l * f + c * u + o * d - s * h),
            (t[e + 3] = c * f - o * h - s * d - l * u),
            t
          );
        }
        get x() {
          return this._x;
        }
        set x(t) {
          (this._x = t), this._onChangeCallback();
        }
        get y() {
          return this._y;
        }
        set y(t) {
          (this._y = t), this._onChangeCallback();
        }
        get z() {
          return this._z;
        }
        set z(t) {
          (this._z = t), this._onChangeCallback();
        }
        get w() {
          return this._w;
        }
        set w(t) {
          (this._w = t), this._onChangeCallback();
        }
        set(t, e, n, i) {
          return (
            (this._x = t),
            (this._y = e),
            (this._z = n),
            (this._w = i),
            this._onChangeCallback(),
            this
          );
        }
        clone() {
          return new this.constructor(this._x, this._y, this._z, this._w);
        }
        copy(t) {
          return (
            (this._x = t.x),
            (this._y = t.y),
            (this._z = t.z),
            (this._w = t.w),
            this._onChangeCallback(),
            this
          );
        }
        setFromEuler(t, e = !0) {
          const n = t._x,
            i = t._y,
            r = t._z,
            a = t._order,
            o = Math.cos,
            s = Math.sin,
            l = o(n / 2),
            c = o(i / 2),
            h = o(r / 2),
            d = s(n / 2),
            u = s(i / 2),
            f = s(r / 2);
          switch (a) {
            case "XYZ":
              (this._x = d * c * h + l * u * f),
                (this._y = l * u * h - d * c * f),
                (this._z = l * c * f + d * u * h),
                (this._w = l * c * h - d * u * f);
              break;
            case "YXZ":
              (this._x = d * c * h + l * u * f),
                (this._y = l * u * h - d * c * f),
                (this._z = l * c * f - d * u * h),
                (this._w = l * c * h + d * u * f);
              break;
            case "ZXY":
              (this._x = d * c * h - l * u * f),
                (this._y = l * u * h + d * c * f),
                (this._z = l * c * f + d * u * h),
                (this._w = l * c * h - d * u * f);
              break;
            case "ZYX":
              (this._x = d * c * h - l * u * f),
                (this._y = l * u * h + d * c * f),
                (this._z = l * c * f - d * u * h),
                (this._w = l * c * h + d * u * f);
              break;
            case "YZX":
              (this._x = d * c * h + l * u * f),
                (this._y = l * u * h + d * c * f),
                (this._z = l * c * f - d * u * h),
                (this._w = l * c * h - d * u * f);
              break;
            case "XZY":
              (this._x = d * c * h - l * u * f),
                (this._y = l * u * h - d * c * f),
                (this._z = l * c * f + d * u * h),
                (this._w = l * c * h + d * u * f);
              break;
            default:
              console.warn(
                "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
                  a
              );
          }
          return !0 === e && this._onChangeCallback(), this;
        }
        setFromAxisAngle(t, e) {
          const n = e / 2,
            i = Math.sin(n);
          return (
            (this._x = t.x * i),
            (this._y = t.y * i),
            (this._z = t.z * i),
            (this._w = Math.cos(n)),
            this._onChangeCallback(),
            this
          );
        }
        setFromRotationMatrix(t) {
          const e = t.elements,
            n = e[0],
            i = e[4],
            r = e[8],
            a = e[1],
            o = e[5],
            s = e[9],
            l = e[2],
            c = e[6],
            h = e[10],
            d = n + o + h;
          if (d > 0) {
            const t = 0.5 / Math.sqrt(d + 1);
            (this._w = 0.25 / t),
              (this._x = (c - s) * t),
              (this._y = (r - l) * t),
              (this._z = (a - i) * t);
          } else if (n > o && n > h) {
            const t = 2 * Math.sqrt(1 + n - o - h);
            (this._w = (c - s) / t),
              (this._x = 0.25 * t),
              (this._y = (i + a) / t),
              (this._z = (r + l) / t);
          } else if (o > h) {
            const t = 2 * Math.sqrt(1 + o - n - h);
            (this._w = (r - l) / t),
              (this._x = (i + a) / t),
              (this._y = 0.25 * t),
              (this._z = (s + c) / t);
          } else {
            const t = 2 * Math.sqrt(1 + h - n - o);
            (this._w = (a - i) / t),
              (this._x = (r + l) / t),
              (this._y = (s + c) / t),
              (this._z = 0.25 * t);
          }
          return this._onChangeCallback(), this;
        }
        setFromUnitVectors(t, e) {
          let n = t.dot(e) + 1;
          return (
            n < Number.EPSILON
              ? ((n = 0),
                Math.abs(t.x) > Math.abs(t.z)
                  ? ((this._x = -t.y),
                    (this._y = t.x),
                    (this._z = 0),
                    (this._w = n))
                  : ((this._x = 0),
                    (this._y = -t.z),
                    (this._z = t.y),
                    (this._w = n)))
              : ((this._x = t.y * e.z - t.z * e.y),
                (this._y = t.z * e.x - t.x * e.z),
                (this._z = t.x * e.y - t.y * e.x),
                (this._w = n)),
            this.normalize()
          );
        }
        angleTo(t) {
          return 2 * Math.acos(Math.abs(L(this.dot(t), -1, 1)));
        }
        rotateTowards(t, e) {
          const n = this.angleTo(t);
          if (0 === n) return this;
          const i = Math.min(1, e / n);
          return this.slerp(t, i), this;
        }
        identity() {
          return this.set(0, 0, 0, 1);
        }
        invert() {
          return this.conjugate();
        }
        conjugate() {
          return (
            (this._x *= -1),
            (this._y *= -1),
            (this._z *= -1),
            this._onChangeCallback(),
            this
          );
        }
        dot(t) {
          return (
            this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
          );
        }
        lengthSq() {
          return (
            this._x * this._x +
            this._y * this._y +
            this._z * this._z +
            this._w * this._w
          );
        }
        length() {
          return Math.sqrt(
            this._x * this._x +
              this._y * this._y +
              this._z * this._z +
              this._w * this._w
          );
        }
        normalize() {
          let t = this.length();
          return (
            0 === t
              ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
              : ((t = 1 / t),
                (this._x = this._x * t),
                (this._y = this._y * t),
                (this._z = this._z * t),
                (this._w = this._w * t)),
            this._onChangeCallback(),
            this
          );
        }
        multiply(t) {
          return this.multiplyQuaternions(this, t);
        }
        premultiply(t) {
          return this.multiplyQuaternions(t, this);
        }
        multiplyQuaternions(t, e) {
          const n = t._x,
            i = t._y,
            r = t._z,
            a = t._w,
            o = e._x,
            s = e._y,
            l = e._z,
            c = e._w;
          return (
            (this._x = n * c + a * o + i * l - r * s),
            (this._y = i * c + a * s + r * o - n * l),
            (this._z = r * c + a * l + n * s - i * o),
            (this._w = a * c - n * o - i * s - r * l),
            this._onChangeCallback(),
            this
          );
        }
        slerp(t, e) {
          if (0 === e) return this;
          if (1 === e) return this.copy(t);
          const n = this._x,
            i = this._y,
            r = this._z,
            a = this._w;
          let o = a * t._w + n * t._x + i * t._y + r * t._z;
          if (
            (o < 0
              ? ((this._w = -t._w),
                (this._x = -t._x),
                (this._y = -t._y),
                (this._z = -t._z),
                (o = -o))
              : this.copy(t),
            o >= 1)
          )
            return (
              (this._w = a), (this._x = n), (this._y = i), (this._z = r), this
            );
          const s = 1 - o * o;
          if (s <= Number.EPSILON) {
            const t = 1 - e;
            return (
              (this._w = t * a + e * this._w),
              (this._x = t * n + e * this._x),
              (this._y = t * i + e * this._y),
              (this._z = t * r + e * this._z),
              this.normalize(),
              this
            );
          }
          const l = Math.sqrt(s),
            c = Math.atan2(l, o),
            h = Math.sin((1 - e) * c) / l,
            d = Math.sin(e * c) / l;
          return (
            (this._w = a * h + this._w * d),
            (this._x = n * h + this._x * d),
            (this._y = i * h + this._y * d),
            (this._z = r * h + this._z * d),
            this._onChangeCallback(),
            this
          );
        }
        slerpQuaternions(t, e, n) {
          return this.copy(t).slerp(e, n);
        }
        random() {
          const t = 2 * Math.PI * Math.random(),
            e = 2 * Math.PI * Math.random(),
            n = Math.random(),
            i = Math.sqrt(1 - n),
            r = Math.sqrt(n);
          return this.set(
            i * Math.sin(t),
            i * Math.cos(t),
            r * Math.sin(e),
            r * Math.cos(e)
          );
        }
        equals(t) {
          return (
            t._x === this._x &&
            t._y === this._y &&
            t._z === this._z &&
            t._w === this._w
          );
        }
        fromArray(t, e = 0) {
          return (
            (this._x = t[e]),
            (this._y = t[e + 1]),
            (this._z = t[e + 2]),
            (this._w = t[e + 3]),
            this._onChangeCallback(),
            this
          );
        }
        toArray(t = [], e = 0) {
          return (
            (t[e] = this._x),
            (t[e + 1] = this._y),
            (t[e + 2] = this._z),
            (t[e + 3] = this._w),
            t
          );
        }
        fromBufferAttribute(t, e) {
          return (
            (this._x = t.getX(e)),
            (this._y = t.getY(e)),
            (this._z = t.getZ(e)),
            (this._w = t.getW(e)),
            this._onChangeCallback(),
            this
          );
        }
        toJSON() {
          return this.toArray();
        }
        _onChange(t) {
          return (this._onChangeCallback = t), this;
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
          yield this._x, yield this._y, yield this._z, yield this._w;
        }
      }
      class ct {
        constructor(t = 0, e = 0, n = 0) {
          (ct.prototype.isVector3 = !0),
            (this.x = t),
            (this.y = e),
            (this.z = n);
        }
        set(t, e, n) {
          return (
            void 0 === n && (n = this.z),
            (this.x = t),
            (this.y = e),
            (this.z = n),
            this
          );
        }
        setScalar(t) {
          return (this.x = t), (this.y = t), (this.z = t), this;
        }
        setX(t) {
          return (this.x = t), this;
        }
        setY(t) {
          return (this.y = t), this;
        }
        setZ(t) {
          return (this.z = t), this;
        }
        setComponent(t, e) {
          switch (t) {
            case 0:
              this.x = e;
              break;
            case 1:
              this.y = e;
              break;
            case 2:
              this.z = e;
              break;
            default:
              throw new Error("index is out of range: " + t);
          }
          return this;
        }
        getComponent(t) {
          switch (t) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            default:
              throw new Error("index is out of range: " + t);
          }
        }
        clone() {
          return new this.constructor(this.x, this.y, this.z);
        }
        copy(t) {
          return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
        }
        add(t) {
          return (this.x += t.x), (this.y += t.y), (this.z += t.z), this;
        }
        addScalar(t) {
          return (this.x += t), (this.y += t), (this.z += t), this;
        }
        addVectors(t, e) {
          return (
            (this.x = t.x + e.x),
            (this.y = t.y + e.y),
            (this.z = t.z + e.z),
            this
          );
        }
        addScaledVector(t, e) {
          return (
            (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this
          );
        }
        sub(t) {
          return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this;
        }
        subScalar(t) {
          return (this.x -= t), (this.y -= t), (this.z -= t), this;
        }
        subVectors(t, e) {
          return (
            (this.x = t.x - e.x),
            (this.y = t.y - e.y),
            (this.z = t.z - e.z),
            this
          );
        }
        multiply(t) {
          return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this;
        }
        multiplyScalar(t) {
          return (this.x *= t), (this.y *= t), (this.z *= t), this;
        }
        multiplyVectors(t, e) {
          return (
            (this.x = t.x * e.x),
            (this.y = t.y * e.y),
            (this.z = t.z * e.z),
            this
          );
        }
        applyEuler(t) {
          return this.applyQuaternion(dt.setFromEuler(t));
        }
        applyAxisAngle(t, e) {
          return this.applyQuaternion(dt.setFromAxisAngle(t, e));
        }
        applyMatrix3(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements;
          return (
            (this.x = r[0] * e + r[3] * n + r[6] * i),
            (this.y = r[1] * e + r[4] * n + r[7] * i),
            (this.z = r[2] * e + r[5] * n + r[8] * i),
            this
          );
        }
        applyNormalMatrix(t) {
          return this.applyMatrix3(t).normalize();
        }
        applyMatrix4(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements,
            a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
          return (
            (this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a),
            (this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a),
            (this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a),
            this
          );
        }
        applyQuaternion(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = t.x,
            a = t.y,
            o = t.z,
            s = t.w,
            l = 2 * (a * i - o * n),
            c = 2 * (o * e - r * i),
            h = 2 * (r * n - a * e);
          return (
            (this.x = e + s * l + a * h - o * c),
            (this.y = n + s * c + o * l - r * h),
            (this.z = i + s * h + r * c - a * l),
            this
          );
        }
        project(t) {
          return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
            t.projectionMatrix
          );
        }
        unproject(t) {
          return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
            t.matrixWorld
          );
        }
        transformDirection(t) {
          const e = this.x,
            n = this.y,
            i = this.z,
            r = t.elements;
          return (
            (this.x = r[0] * e + r[4] * n + r[8] * i),
            (this.y = r[1] * e + r[5] * n + r[9] * i),
            (this.z = r[2] * e + r[6] * n + r[10] * i),
            this.normalize()
          );
        }
        divide(t) {
          return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
        }
        divideScalar(t) {
          return this.multiplyScalar(1 / t);
        }
        min(t) {
          return (
            (this.x = Math.min(this.x, t.x)),
            (this.y = Math.min(this.y, t.y)),
            (this.z = Math.min(this.z, t.z)),
            this
          );
        }
        max(t) {
          return (
            (this.x = Math.max(this.x, t.x)),
            (this.y = Math.max(this.y, t.y)),
            (this.z = Math.max(this.z, t.z)),
            this
          );
        }
        clamp(t, e) {
          return (
            (this.x = Math.max(t.x, Math.min(e.x, this.x))),
            (this.y = Math.max(t.y, Math.min(e.y, this.y))),
            (this.z = Math.max(t.z, Math.min(e.z, this.z))),
            this
          );
        }
        clampScalar(t, e) {
          return (
            (this.x = Math.max(t, Math.min(e, this.x))),
            (this.y = Math.max(t, Math.min(e, this.y))),
            (this.z = Math.max(t, Math.min(e, this.z))),
            this
          );
        }
        clampLength(t, e) {
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(
            Math.max(t, Math.min(e, n))
          );
        }
        floor() {
          return (
            (this.x = Math.floor(this.x)),
            (this.y = Math.floor(this.y)),
            (this.z = Math.floor(this.z)),
            this
          );
        }
        ceil() {
          return (
            (this.x = Math.ceil(this.x)),
            (this.y = Math.ceil(this.y)),
            (this.z = Math.ceil(this.z)),
            this
          );
        }
        round() {
          return (
            (this.x = Math.round(this.x)),
            (this.y = Math.round(this.y)),
            (this.z = Math.round(this.z)),
            this
          );
        }
        roundToZero() {
          return (
            (this.x = Math.trunc(this.x)),
            (this.y = Math.trunc(this.y)),
            (this.z = Math.trunc(this.z)),
            this
          );
        }
        negate() {
          return (
            (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this
          );
        }
        dot(t) {
          return this.x * t.x + this.y * t.y + this.z * t.z;
        }
        lengthSq() {
          return this.x * this.x + this.y * this.y + this.z * this.z;
        }
        length() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
        manhattanLength() {
          return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
        }
        normalize() {
          return this.divideScalar(this.length() || 1);
        }
        setLength(t) {
          return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
          return (
            (this.x += (t.x - this.x) * e),
            (this.y += (t.y - this.y) * e),
            (this.z += (t.z - this.z) * e),
            this
          );
        }
        lerpVectors(t, e, n) {
          return (
            (this.x = t.x + (e.x - t.x) * n),
            (this.y = t.y + (e.y - t.y) * n),
            (this.z = t.z + (e.z - t.z) * n),
            this
          );
        }
        cross(t) {
          return this.crossVectors(this, t);
        }
        crossVectors(t, e) {
          const n = t.x,
            i = t.y,
            r = t.z,
            a = e.x,
            o = e.y,
            s = e.z;
          return (
            (this.x = i * s - r * o),
            (this.y = r * a - n * s),
            (this.z = n * o - i * a),
            this
          );
        }
        projectOnVector(t) {
          const e = t.lengthSq();
          if (0 === e) return this.set(0, 0, 0);
          const n = t.dot(this) / e;
          return this.copy(t).multiplyScalar(n);
        }
        projectOnPlane(t) {
          return ht.copy(this).projectOnVector(t), this.sub(ht);
        }
        reflect(t) {
          return this.sub(ht.copy(t).multiplyScalar(2 * this.dot(t)));
        }
        angleTo(t) {
          const e = Math.sqrt(this.lengthSq() * t.lengthSq());
          if (0 === e) return Math.PI / 2;
          const n = this.dot(t) / e;
          return Math.acos(L(n, -1, 1));
        }
        distanceTo(t) {
          return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
          const e = this.x - t.x,
            n = this.y - t.y,
            i = this.z - t.z;
          return e * e + n * n + i * i;
        }
        manhattanDistanceTo(t) {
          return (
            Math.abs(this.x - t.x) +
            Math.abs(this.y - t.y) +
            Math.abs(this.z - t.z)
          );
        }
        setFromSpherical(t) {
          return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
        }
        setFromSphericalCoords(t, e, n) {
          const i = Math.sin(e) * t;
          return (
            (this.x = i * Math.sin(n)),
            (this.y = Math.cos(e) * t),
            (this.z = i * Math.cos(n)),
            this
          );
        }
        setFromCylindrical(t) {
          return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
        }
        setFromCylindricalCoords(t, e, n) {
          return (
            (this.x = t * Math.sin(e)),
            (this.y = n),
            (this.z = t * Math.cos(e)),
            this
          );
        }
        setFromMatrixPosition(t) {
          const e = t.elements;
          return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
        }
        setFromMatrixScale(t) {
          const e = this.setFromMatrixColumn(t, 0).length(),
            n = this.setFromMatrixColumn(t, 1).length(),
            i = this.setFromMatrixColumn(t, 2).length();
          return (this.x = e), (this.y = n), (this.z = i), this;
        }
        setFromMatrixColumn(t, e) {
          return this.fromArray(t.elements, 4 * e);
        }
        setFromMatrix3Column(t, e) {
          return this.fromArray(t.elements, 3 * e);
        }
        setFromEuler(t) {
          return (this.x = t._x), (this.y = t._y), (this.z = t._z), this;
        }
        setFromColor(t) {
          return (this.x = t.r), (this.y = t.g), (this.z = t.b), this;
        }
        equals(t) {
          return t.x === this.x && t.y === this.y && t.z === this.z;
        }
        fromArray(t, e = 0) {
          return (
            (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this
          );
        }
        toArray(t = [], e = 0) {
          return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t;
        }
        fromBufferAttribute(t, e) {
          return (
            (this.x = t.getX(e)),
            (this.y = t.getY(e)),
            (this.z = t.getZ(e)),
            this
          );
        }
        random() {
          return (
            (this.x = Math.random()),
            (this.y = Math.random()),
            (this.z = Math.random()),
            this
          );
        }
        randomDirection() {
          const t = Math.random() * Math.PI * 2,
            e = 2 * Math.random() - 1,
            n = Math.sqrt(1 - e * e);
          return (
            (this.x = n * Math.cos(t)),
            (this.y = e),
            (this.z = n * Math.sin(t)),
            this
          );
        }
        *[Symbol.iterator]() {
          yield this.x, yield this.y, yield this.z;
        }
      }
      const ht = new ct(),
        dt = new lt();
      class ut {
        constructor(
          t = new ct(1 / 0, 1 / 0, 1 / 0),
          e = new ct(-1 / 0, -1 / 0, -1 / 0)
        ) {
          (this.isBox3 = !0), (this.min = t), (this.max = e);
        }
        set(t, e) {
          return this.min.copy(t), this.max.copy(e), this;
        }
        setFromArray(t) {
          this.makeEmpty();
          for (let e = 0, n = t.length; e < n; e += 3)
            this.expandByPoint(mt.fromArray(t, e));
          return this;
        }
        setFromBufferAttribute(t) {
          this.makeEmpty();
          for (let e = 0, n = t.count; e < n; e++)
            this.expandByPoint(mt.fromBufferAttribute(t, e));
          return this;
        }
        setFromPoints(t) {
          this.makeEmpty();
          for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
          return this;
        }
        setFromCenterAndSize(t, e) {
          const n = mt.copy(e).multiplyScalar(0.5);
          return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
        }
        setFromObject(t, e = !1) {
          return this.makeEmpty(), this.expandByObject(t, e);
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          return this.min.copy(t.min), this.max.copy(t.max), this;
        }
        makeEmpty() {
          return (
            (this.min.x = this.min.y = this.min.z = 1 / 0),
            (this.max.x = this.max.y = this.max.z = -1 / 0),
            this
          );
        }
        isEmpty() {
          return (
            this.max.x < this.min.x ||
            this.max.y < this.min.y ||
            this.max.z < this.min.z
          );
        }
        getCenter(t) {
          return this.isEmpty()
            ? t.set(0, 0, 0)
            : t.addVectors(this.min, this.max).multiplyScalar(0.5);
        }
        getSize(t) {
          return this.isEmpty()
            ? t.set(0, 0, 0)
            : t.subVectors(this.max, this.min);
        }
        expandByPoint(t) {
          return this.min.min(t), this.max.max(t), this;
        }
        expandByVector(t) {
          return this.min.sub(t), this.max.add(t), this;
        }
        expandByScalar(t) {
          return this.min.addScalar(-t), this.max.addScalar(t), this;
        }
        expandByObject(t, e = !1) {
          t.updateWorldMatrix(!1, !1);
          const n = t.geometry;
          if (void 0 !== n) {
            const i = n.getAttribute("position");
            if (!0 === e && void 0 !== i && !0 !== t.isInstancedMesh)
              for (let e = 0, n = i.count; e < n; e++)
                !0 === t.isMesh
                  ? t.getVertexPosition(e, mt)
                  : mt.fromBufferAttribute(i, e),
                  mt.applyMatrix4(t.matrixWorld),
                  this.expandByPoint(mt);
            else
              void 0 !== t.boundingBox
                ? (null === t.boundingBox && t.computeBoundingBox(),
                  pt.copy(t.boundingBox))
                : (null === n.boundingBox && n.computeBoundingBox(),
                  pt.copy(n.boundingBox)),
                pt.applyMatrix4(t.matrixWorld),
                this.union(pt);
          }
          const i = t.children;
          for (let t = 0, n = i.length; t < n; t++)
            this.expandByObject(i[t], e);
          return this;
        }
        containsPoint(t) {
          return !(
            t.x < this.min.x ||
            t.x > this.max.x ||
            t.y < this.min.y ||
            t.y > this.max.y ||
            t.z < this.min.z ||
            t.z > this.max.z
          );
        }
        containsBox(t) {
          return (
            this.min.x <= t.min.x &&
            t.max.x <= this.max.x &&
            this.min.y <= t.min.y &&
            t.max.y <= this.max.y &&
            this.min.z <= t.min.z &&
            t.max.z <= this.max.z
          );
        }
        getParameter(t, e) {
          return e.set(
            (t.x - this.min.x) / (this.max.x - this.min.x),
            (t.y - this.min.y) / (this.max.y - this.min.y),
            (t.z - this.min.z) / (this.max.z - this.min.z)
          );
        }
        intersectsBox(t) {
          return !(
            t.max.x < this.min.x ||
            t.min.x > this.max.x ||
            t.max.y < this.min.y ||
            t.min.y > this.max.y ||
            t.max.z < this.min.z ||
            t.min.z > this.max.z
          );
        }
        intersectsSphere(t) {
          return (
            this.clampPoint(t.center, mt),
            mt.distanceToSquared(t.center) <= t.radius * t.radius
          );
        }
        intersectsPlane(t) {
          let e, n;
          return (
            t.normal.x > 0
              ? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
              : ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
            t.normal.y > 0
              ? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
              : ((e += t.normal.y * this.max.y),
                (n += t.normal.y * this.min.y)),
            t.normal.z > 0
              ? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
              : ((e += t.normal.z * this.max.z),
                (n += t.normal.z * this.min.z)),
            e <= -t.constant && n >= -t.constant
          );
        }
        intersectsTriangle(t) {
          if (this.isEmpty()) return !1;
          this.getCenter(St),
            bt.subVectors(this.max, St),
            gt.subVectors(t.a, St),
            _t.subVectors(t.b, St),
            vt.subVectors(t.c, St),
            yt.subVectors(_t, gt),
            xt.subVectors(vt, _t),
            wt.subVectors(gt, vt);
          let e = [
            0,
            -yt.z,
            yt.y,
            0,
            -xt.z,
            xt.y,
            0,
            -wt.z,
            wt.y,
            yt.z,
            0,
            -yt.x,
            xt.z,
            0,
            -xt.x,
            wt.z,
            0,
            -wt.x,
            -yt.y,
            yt.x,
            0,
            -xt.y,
            xt.x,
            0,
            -wt.y,
            wt.x,
            0,
          ];
          return (
            !!Tt(e, gt, _t, vt, bt) &&
            ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
            !!Tt(e, gt, _t, vt, bt) &&
              (Mt.crossVectors(yt, xt),
              (e = [Mt.x, Mt.y, Mt.z]),
              Tt(e, gt, _t, vt, bt)))
          );
        }
        clampPoint(t, e) {
          return e.copy(t).clamp(this.min, this.max);
        }
        distanceToPoint(t) {
          return this.clampPoint(t, mt).distanceTo(t);
        }
        getBoundingSphere(t) {
          return (
            this.isEmpty()
              ? t.makeEmpty()
              : (this.getCenter(t.center),
                (t.radius = 0.5 * this.getSize(mt).length())),
            t
          );
        }
        intersect(t) {
          return (
            this.min.max(t.min),
            this.max.min(t.max),
            this.isEmpty() && this.makeEmpty(),
            this
          );
        }
        union(t) {
          return this.min.min(t.min), this.max.max(t.max), this;
        }
        applyMatrix4(t) {
          return (
            this.isEmpty() ||
              (ft[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
              ft[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
              ft[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
              ft[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
              ft[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
              ft[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
              ft[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
              ft[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
              this.setFromPoints(ft)),
            this
          );
        }
        translate(t) {
          return this.min.add(t), this.max.add(t), this;
        }
        equals(t) {
          return t.min.equals(this.min) && t.max.equals(this.max);
        }
      }
      const ft = [
          new ct(),
          new ct(),
          new ct(),
          new ct(),
          new ct(),
          new ct(),
          new ct(),
          new ct(),
        ],
        mt = new ct(),
        pt = new ut(),
        gt = new ct(),
        _t = new ct(),
        vt = new ct(),
        yt = new ct(),
        xt = new ct(),
        wt = new ct(),
        St = new ct(),
        bt = new ct(),
        Mt = new ct(),
        At = new ct();
      function Tt(t, e, n, i, r) {
        for (let a = 0, o = t.length - 3; a <= o; a += 3) {
          At.fromArray(t, a);
          const o =
              r.x * Math.abs(At.x) +
              r.y * Math.abs(At.y) +
              r.z * Math.abs(At.z),
            s = e.dot(At),
            l = n.dot(At),
            c = i.dot(At);
          if (Math.max(-Math.max(s, l, c), Math.min(s, l, c)) > o) return !1;
        }
        return !0;
      }
      const Et = new ut(),
        Ct = new ct(),
        Pt = new ct();
      class kt {
        constructor(t = new ct(), e = -1) {
          (this.isSphere = !0), (this.center = t), (this.radius = e);
        }
        set(t, e) {
          return this.center.copy(t), (this.radius = e), this;
        }
        setFromPoints(t, e) {
          const n = this.center;
          void 0 !== e ? n.copy(e) : Et.setFromPoints(t).getCenter(n);
          let i = 0;
          for (let e = 0, r = t.length; e < r; e++)
            i = Math.max(i, n.distanceToSquared(t[e]));
          return (this.radius = Math.sqrt(i)), this;
        }
        copy(t) {
          return this.center.copy(t.center), (this.radius = t.radius), this;
        }
        isEmpty() {
          return this.radius < 0;
        }
        makeEmpty() {
          return this.center.set(0, 0, 0), (this.radius = -1), this;
        }
        containsPoint(t) {
          return t.distanceToSquared(this.center) <= this.radius * this.radius;
        }
        distanceToPoint(t) {
          return t.distanceTo(this.center) - this.radius;
        }
        intersectsSphere(t) {
          const e = this.radius + t.radius;
          return t.center.distanceToSquared(this.center) <= e * e;
        }
        intersectsBox(t) {
          return t.intersectsSphere(this);
        }
        intersectsPlane(t) {
          return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
        }
        clampPoint(t, e) {
          const n = this.center.distanceToSquared(t);
          return (
            e.copy(t),
            n > this.radius * this.radius &&
              (e.sub(this.center).normalize(),
              e.multiplyScalar(this.radius).add(this.center)),
            e
          );
        }
        getBoundingBox(t) {
          return this.isEmpty()
            ? (t.makeEmpty(), t)
            : (t.set(this.center, this.center),
              t.expandByScalar(this.radius),
              t);
        }
        applyMatrix4(t) {
          return (
            this.center.applyMatrix4(t),
            (this.radius = this.radius * t.getMaxScaleOnAxis()),
            this
          );
        }
        translate(t) {
          return this.center.add(t), this;
        }
        expandByPoint(t) {
          if (this.isEmpty())
            return this.center.copy(t), (this.radius = 0), this;
          Ct.subVectors(t, this.center);
          const e = Ct.lengthSq();
          if (e > this.radius * this.radius) {
            const t = Math.sqrt(e),
              n = 0.5 * (t - this.radius);
            this.center.addScaledVector(Ct, n / t), (this.radius += n);
          }
          return this;
        }
        union(t) {
          return t.isEmpty()
            ? this
            : this.isEmpty()
            ? (this.copy(t), this)
            : (!0 === this.center.equals(t.center)
                ? (this.radius = Math.max(this.radius, t.radius))
                : (Pt.subVectors(t.center, this.center).setLength(t.radius),
                  this.expandByPoint(Ct.copy(t.center).add(Pt)),
                  this.expandByPoint(Ct.copy(t.center).sub(Pt))),
              this);
        }
        equals(t) {
          return t.center.equals(this.center) && t.radius === this.radius;
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      const It = new ct(),
        Dt = new ct(),
        Nt = new ct(),
        Rt = new ct(),
        Lt = new ct(),
        zt = new ct(),
        Ut = new ct();
      class Bt {
        constructor(t = new ct(), e = new ct(0, 0, -1)) {
          (this.origin = t), (this.direction = e);
        }
        set(t, e) {
          return this.origin.copy(t), this.direction.copy(e), this;
        }
        copy(t) {
          return (
            this.origin.copy(t.origin), this.direction.copy(t.direction), this
          );
        }
        at(t, e) {
          return e.copy(this.origin).addScaledVector(this.direction, t);
        }
        lookAt(t) {
          return this.direction.copy(t).sub(this.origin).normalize(), this;
        }
        recast(t) {
          return this.origin.copy(this.at(t, It)), this;
        }
        closestPointToPoint(t, e) {
          e.subVectors(t, this.origin);
          const n = e.dot(this.direction);
          return n < 0
            ? e.copy(this.origin)
            : e.copy(this.origin).addScaledVector(this.direction, n);
        }
        distanceToPoint(t) {
          return Math.sqrt(this.distanceSqToPoint(t));
        }
        distanceSqToPoint(t) {
          const e = It.subVectors(t, this.origin).dot(this.direction);
          return e < 0
            ? this.origin.distanceToSquared(t)
            : (It.copy(this.origin).addScaledVector(this.direction, e),
              It.distanceToSquared(t));
        }
        distanceSqToSegment(t, e, n, i) {
          Dt.copy(t).add(e).multiplyScalar(0.5),
            Nt.copy(e).sub(t).normalize(),
            Rt.copy(this.origin).sub(Dt);
          const r = 0.5 * t.distanceTo(e),
            a = -this.direction.dot(Nt),
            o = Rt.dot(this.direction),
            s = -Rt.dot(Nt),
            l = Rt.lengthSq(),
            c = Math.abs(1 - a * a);
          let h, d, u, f;
          if (c > 0)
            if (((h = a * s - o), (d = a * o - s), (f = r * c), h >= 0))
              if (d >= -f)
                if (d <= f) {
                  const t = 1 / c;
                  (h *= t),
                    (d *= t),
                    (u = h * (h + a * d + 2 * o) + d * (a * h + d + 2 * s) + l);
                } else
                  (d = r),
                    (h = Math.max(0, -(a * d + o))),
                    (u = -h * h + d * (d + 2 * s) + l);
              else
                (d = -r),
                  (h = Math.max(0, -(a * d + o))),
                  (u = -h * h + d * (d + 2 * s) + l);
            else
              d <= -f
                ? ((h = Math.max(0, -(-a * r + o))),
                  (d = h > 0 ? -r : Math.min(Math.max(-r, -s), r)),
                  (u = -h * h + d * (d + 2 * s) + l))
                : d <= f
                ? ((h = 0),
                  (d = Math.min(Math.max(-r, -s), r)),
                  (u = d * (d + 2 * s) + l))
                : ((h = Math.max(0, -(a * r + o))),
                  (d = h > 0 ? r : Math.min(Math.max(-r, -s), r)),
                  (u = -h * h + d * (d + 2 * s) + l));
          else
            (d = a > 0 ? -r : r),
              (h = Math.max(0, -(a * d + o))),
              (u = -h * h + d * (d + 2 * s) + l);
          return (
            n && n.copy(this.origin).addScaledVector(this.direction, h),
            i && i.copy(Dt).addScaledVector(Nt, d),
            u
          );
        }
        intersectSphere(t, e) {
          It.subVectors(t.center, this.origin);
          const n = It.dot(this.direction),
            i = It.dot(It) - n * n,
            r = t.radius * t.radius;
          if (i > r) return null;
          const a = Math.sqrt(r - i),
            o = n - a,
            s = n + a;
          return s < 0 ? null : o < 0 ? this.at(s, e) : this.at(o, e);
        }
        intersectsSphere(t) {
          return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
        }
        distanceToPlane(t) {
          const e = t.normal.dot(this.direction);
          if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
          const n = -(this.origin.dot(t.normal) + t.constant) / e;
          return n >= 0 ? n : null;
        }
        intersectPlane(t, e) {
          const n = this.distanceToPlane(t);
          return null === n ? null : this.at(n, e);
        }
        intersectsPlane(t) {
          const e = t.distanceToPoint(this.origin);
          if (0 === e) return !0;
          return t.normal.dot(this.direction) * e < 0;
        }
        intersectBox(t, e) {
          let n, i, r, a, o, s;
          const l = 1 / this.direction.x,
            c = 1 / this.direction.y,
            h = 1 / this.direction.z,
            d = this.origin;
          return (
            l >= 0
              ? ((n = (t.min.x - d.x) * l), (i = (t.max.x - d.x) * l))
              : ((n = (t.max.x - d.x) * l), (i = (t.min.x - d.x) * l)),
            c >= 0
              ? ((r = (t.min.y - d.y) * c), (a = (t.max.y - d.y) * c))
              : ((r = (t.max.y - d.y) * c), (a = (t.min.y - d.y) * c)),
            n > a || r > i
              ? null
              : ((r > n || isNaN(n)) && (n = r),
                (a < i || isNaN(i)) && (i = a),
                h >= 0
                  ? ((o = (t.min.z - d.z) * h), (s = (t.max.z - d.z) * h))
                  : ((o = (t.max.z - d.z) * h), (s = (t.min.z - d.z) * h)),
                n > s || o > i
                  ? null
                  : ((o > n || n != n) && (n = o),
                    (s < i || i != i) && (i = s),
                    i < 0 ? null : this.at(n >= 0 ? n : i, e)))
          );
        }
        intersectsBox(t) {
          return null !== this.intersectBox(t, It);
        }
        intersectTriangle(t, e, n, i, r) {
          Lt.subVectors(e, t), zt.subVectors(n, t), Ut.crossVectors(Lt, zt);
          let a,
            o = this.direction.dot(Ut);
          if (o > 0) {
            if (i) return null;
            a = 1;
          } else {
            if (!(o < 0)) return null;
            (a = -1), (o = -o);
          }
          Rt.subVectors(this.origin, t);
          const s = a * this.direction.dot(zt.crossVectors(Rt, zt));
          if (s < 0) return null;
          const l = a * this.direction.dot(Lt.cross(Rt));
          if (l < 0) return null;
          if (s + l > o) return null;
          const c = -a * Rt.dot(Ut);
          return c < 0 ? null : this.at(c / o, r);
        }
        applyMatrix4(t) {
          return (
            this.origin.applyMatrix4(t),
            this.direction.transformDirection(t),
            this
          );
        }
        equals(t) {
          return (
            t.origin.equals(this.origin) && t.direction.equals(this.direction)
          );
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      class Ot {
        constructor(t, e, n, i, r, a, o, s, l, c, h, d, u, f, m, p) {
          (Ot.prototype.isMatrix4 = !0),
            (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
            void 0 !== t &&
              this.set(t, e, n, i, r, a, o, s, l, c, h, d, u, f, m, p);
        }
        set(t, e, n, i, r, a, o, s, l, c, h, d, u, f, m, p) {
          const g = this.elements;
          return (
            (g[0] = t),
            (g[4] = e),
            (g[8] = n),
            (g[12] = i),
            (g[1] = r),
            (g[5] = a),
            (g[9] = o),
            (g[13] = s),
            (g[2] = l),
            (g[6] = c),
            (g[10] = h),
            (g[14] = d),
            (g[3] = u),
            (g[7] = f),
            (g[11] = m),
            (g[15] = p),
            this
          );
        }
        identity() {
          return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        clone() {
          return new Ot().fromArray(this.elements);
        }
        copy(t) {
          const e = this.elements,
            n = t.elements;
          return (
            (e[0] = n[0]),
            (e[1] = n[1]),
            (e[2] = n[2]),
            (e[3] = n[3]),
            (e[4] = n[4]),
            (e[5] = n[5]),
            (e[6] = n[6]),
            (e[7] = n[7]),
            (e[8] = n[8]),
            (e[9] = n[9]),
            (e[10] = n[10]),
            (e[11] = n[11]),
            (e[12] = n[12]),
            (e[13] = n[13]),
            (e[14] = n[14]),
            (e[15] = n[15]),
            this
          );
        }
        copyPosition(t) {
          const e = this.elements,
            n = t.elements;
          return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this;
        }
        setFromMatrix3(t) {
          const e = t.elements;
          return (
            this.set(
              e[0],
              e[3],
              e[6],
              0,
              e[1],
              e[4],
              e[7],
              0,
              e[2],
              e[5],
              e[8],
              0,
              0,
              0,
              0,
              1
            ),
            this
          );
        }
        extractBasis(t, e, n) {
          return (
            t.setFromMatrixColumn(this, 0),
            e.setFromMatrixColumn(this, 1),
            n.setFromMatrixColumn(this, 2),
            this
          );
        }
        makeBasis(t, e, n) {
          return (
            this.set(
              t.x,
              e.x,
              n.x,
              0,
              t.y,
              e.y,
              n.y,
              0,
              t.z,
              e.z,
              n.z,
              0,
              0,
              0,
              0,
              1
            ),
            this
          );
        }
        extractRotation(t) {
          const e = this.elements,
            n = t.elements,
            i = 1 / Vt.setFromMatrixColumn(t, 0).length(),
            r = 1 / Vt.setFromMatrixColumn(t, 1).length(),
            a = 1 / Vt.setFromMatrixColumn(t, 2).length();
          return (
            (e[0] = n[0] * i),
            (e[1] = n[1] * i),
            (e[2] = n[2] * i),
            (e[3] = 0),
            (e[4] = n[4] * r),
            (e[5] = n[5] * r),
            (e[6] = n[6] * r),
            (e[7] = 0),
            (e[8] = n[8] * a),
            (e[9] = n[9] * a),
            (e[10] = n[10] * a),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            this
          );
        }
        makeRotationFromEuler(t) {
          const e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z,
            a = Math.cos(n),
            o = Math.sin(n),
            s = Math.cos(i),
            l = Math.sin(i),
            c = Math.cos(r),
            h = Math.sin(r);
          if ("XYZ" === t.order) {
            const t = a * c,
              n = a * h,
              i = o * c,
              r = o * h;
            (e[0] = s * c),
              (e[4] = -s * h),
              (e[8] = l),
              (e[1] = n + i * l),
              (e[5] = t - r * l),
              (e[9] = -o * s),
              (e[2] = r - t * l),
              (e[6] = i + n * l),
              (e[10] = a * s);
          } else if ("YXZ" === t.order) {
            const t = s * c,
              n = s * h,
              i = l * c,
              r = l * h;
            (e[0] = t + r * o),
              (e[4] = i * o - n),
              (e[8] = a * l),
              (e[1] = a * h),
              (e[5] = a * c),
              (e[9] = -o),
              (e[2] = n * o - i),
              (e[6] = r + t * o),
              (e[10] = a * s);
          } else if ("ZXY" === t.order) {
            const t = s * c,
              n = s * h,
              i = l * c,
              r = l * h;
            (e[0] = t - r * o),
              (e[4] = -a * h),
              (e[8] = i + n * o),
              (e[1] = n + i * o),
              (e[5] = a * c),
              (e[9] = r - t * o),
              (e[2] = -a * l),
              (e[6] = o),
              (e[10] = a * s);
          } else if ("ZYX" === t.order) {
            const t = a * c,
              n = a * h,
              i = o * c,
              r = o * h;
            (e[0] = s * c),
              (e[4] = i * l - n),
              (e[8] = t * l + r),
              (e[1] = s * h),
              (e[5] = r * l + t),
              (e[9] = n * l - i),
              (e[2] = -l),
              (e[6] = o * s),
              (e[10] = a * s);
          } else if ("YZX" === t.order) {
            const t = a * s,
              n = a * l,
              i = o * s,
              r = o * l;
            (e[0] = s * c),
              (e[4] = r - t * h),
              (e[8] = i * h + n),
              (e[1] = h),
              (e[5] = a * c),
              (e[9] = -o * c),
              (e[2] = -l * c),
              (e[6] = n * h + i),
              (e[10] = t - r * h);
          } else if ("XZY" === t.order) {
            const t = a * s,
              n = a * l,
              i = o * s,
              r = o * l;
            (e[0] = s * c),
              (e[4] = -h),
              (e[8] = l * c),
              (e[1] = t * h + r),
              (e[5] = a * c),
              (e[9] = n * h - i),
              (e[2] = i * h - n),
              (e[6] = o * c),
              (e[10] = r * h + t);
          }
          return (
            (e[3] = 0),
            (e[7] = 0),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            this
          );
        }
        makeRotationFromQuaternion(t) {
          return this.compose(Ht, t, Wt);
        }
        lookAt(t, e, n) {
          const i = this.elements;
          return (
            jt.subVectors(t, e),
            0 === jt.lengthSq() && (jt.z = 1),
            jt.normalize(),
            Gt.crossVectors(n, jt),
            0 === Gt.lengthSq() &&
              (1 === Math.abs(n.z) ? (jt.x += 1e-4) : (jt.z += 1e-4),
              jt.normalize(),
              Gt.crossVectors(n, jt)),
            Gt.normalize(),
            qt.crossVectors(jt, Gt),
            (i[0] = Gt.x),
            (i[4] = qt.x),
            (i[8] = jt.x),
            (i[1] = Gt.y),
            (i[5] = qt.y),
            (i[9] = jt.y),
            (i[2] = Gt.z),
            (i[6] = qt.z),
            (i[10] = jt.z),
            this
          );
        }
        multiply(t) {
          return this.multiplyMatrices(this, t);
        }
        premultiply(t) {
          return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
          const n = t.elements,
            i = e.elements,
            r = this.elements,
            a = n[0],
            o = n[4],
            s = n[8],
            l = n[12],
            c = n[1],
            h = n[5],
            d = n[9],
            u = n[13],
            f = n[2],
            m = n[6],
            p = n[10],
            g = n[14],
            _ = n[3],
            v = n[7],
            y = n[11],
            x = n[15],
            w = i[0],
            S = i[4],
            b = i[8],
            M = i[12],
            A = i[1],
            T = i[5],
            E = i[9],
            C = i[13],
            P = i[2],
            k = i[6],
            I = i[10],
            D = i[14],
            N = i[3],
            R = i[7],
            L = i[11],
            z = i[15];
          return (
            (r[0] = a * w + o * A + s * P + l * N),
            (r[4] = a * S + o * T + s * k + l * R),
            (r[8] = a * b + o * E + s * I + l * L),
            (r[12] = a * M + o * C + s * D + l * z),
            (r[1] = c * w + h * A + d * P + u * N),
            (r[5] = c * S + h * T + d * k + u * R),
            (r[9] = c * b + h * E + d * I + u * L),
            (r[13] = c * M + h * C + d * D + u * z),
            (r[2] = f * w + m * A + p * P + g * N),
            (r[6] = f * S + m * T + p * k + g * R),
            (r[10] = f * b + m * E + p * I + g * L),
            (r[14] = f * M + m * C + p * D + g * z),
            (r[3] = _ * w + v * A + y * P + x * N),
            (r[7] = _ * S + v * T + y * k + x * R),
            (r[11] = _ * b + v * E + y * I + x * L),
            (r[15] = _ * M + v * C + y * D + x * z),
            this
          );
        }
        multiplyScalar(t) {
          const e = this.elements;
          return (
            (e[0] *= t),
            (e[4] *= t),
            (e[8] *= t),
            (e[12] *= t),
            (e[1] *= t),
            (e[5] *= t),
            (e[9] *= t),
            (e[13] *= t),
            (e[2] *= t),
            (e[6] *= t),
            (e[10] *= t),
            (e[14] *= t),
            (e[3] *= t),
            (e[7] *= t),
            (e[11] *= t),
            (e[15] *= t),
            this
          );
        }
        determinant() {
          const t = this.elements,
            e = t[0],
            n = t[4],
            i = t[8],
            r = t[12],
            a = t[1],
            o = t[5],
            s = t[9],
            l = t[13],
            c = t[2],
            h = t[6],
            d = t[10],
            u = t[14];
          return (
            t[3] *
              (+r * s * h -
                i * l * h -
                r * o * d +
                n * l * d +
                i * o * u -
                n * s * u) +
            t[7] *
              (+e * s * u -
                e * l * d +
                r * a * d -
                i * a * u +
                i * l * c -
                r * s * c) +
            t[11] *
              (+e * l * h -
                e * o * u -
                r * a * h +
                n * a * u +
                r * o * c -
                n * l * c) +
            t[15] *
              (-i * o * c -
                e * s * h +
                e * o * d +
                i * a * h -
                n * a * d +
                n * s * c)
          );
        }
        transpose() {
          const t = this.elements;
          let e;
          return (
            (e = t[1]),
            (t[1] = t[4]),
            (t[4] = e),
            (e = t[2]),
            (t[2] = t[8]),
            (t[8] = e),
            (e = t[6]),
            (t[6] = t[9]),
            (t[9] = e),
            (e = t[3]),
            (t[3] = t[12]),
            (t[12] = e),
            (e = t[7]),
            (t[7] = t[13]),
            (t[13] = e),
            (e = t[11]),
            (t[11] = t[14]),
            (t[14] = e),
            this
          );
        }
        setPosition(t, e, n) {
          const i = this.elements;
          return (
            t.isVector3
              ? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z))
              : ((i[12] = t), (i[13] = e), (i[14] = n)),
            this
          );
        }
        invert() {
          const t = this.elements,
            e = t[0],
            n = t[1],
            i = t[2],
            r = t[3],
            a = t[4],
            o = t[5],
            s = t[6],
            l = t[7],
            c = t[8],
            h = t[9],
            d = t[10],
            u = t[11],
            f = t[12],
            m = t[13],
            p = t[14],
            g = t[15],
            _ =
              h * p * l -
              m * d * l +
              m * s * u -
              o * p * u -
              h * s * g +
              o * d * g,
            v =
              f * d * l -
              c * p * l -
              f * s * u +
              a * p * u +
              c * s * g -
              a * d * g,
            y =
              c * m * l -
              f * h * l +
              f * o * u -
              a * m * u -
              c * o * g +
              a * h * g,
            x =
              f * h * s -
              c * m * s -
              f * o * d +
              a * m * d +
              c * o * p -
              a * h * p,
            w = e * _ + n * v + i * y + r * x;
          if (0 === w)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          const S = 1 / w;
          return (
            (t[0] = _ * S),
            (t[1] =
              (m * d * r -
                h * p * r -
                m * i * u +
                n * p * u +
                h * i * g -
                n * d * g) *
              S),
            (t[2] =
              (o * p * r -
                m * s * r +
                m * i * l -
                n * p * l -
                o * i * g +
                n * s * g) *
              S),
            (t[3] =
              (h * s * r -
                o * d * r -
                h * i * l +
                n * d * l +
                o * i * u -
                n * s * u) *
              S),
            (t[4] = v * S),
            (t[5] =
              (c * p * r -
                f * d * r +
                f * i * u -
                e * p * u -
                c * i * g +
                e * d * g) *
              S),
            (t[6] =
              (f * s * r -
                a * p * r -
                f * i * l +
                e * p * l +
                a * i * g -
                e * s * g) *
              S),
            (t[7] =
              (a * d * r -
                c * s * r +
                c * i * l -
                e * d * l -
                a * i * u +
                e * s * u) *
              S),
            (t[8] = y * S),
            (t[9] =
              (f * h * r -
                c * m * r -
                f * n * u +
                e * m * u +
                c * n * g -
                e * h * g) *
              S),
            (t[10] =
              (a * m * r -
                f * o * r +
                f * n * l -
                e * m * l -
                a * n * g +
                e * o * g) *
              S),
            (t[11] =
              (c * o * r -
                a * h * r -
                c * n * l +
                e * h * l +
                a * n * u -
                e * o * u) *
              S),
            (t[12] = x * S),
            (t[13] =
              (c * m * i -
                f * h * i +
                f * n * d -
                e * m * d -
                c * n * p +
                e * h * p) *
              S),
            (t[14] =
              (f * o * i -
                a * m * i -
                f * n * s +
                e * m * s +
                a * n * p -
                e * o * p) *
              S),
            (t[15] =
              (a * h * i -
                c * o * i +
                c * n * s -
                e * h * s -
                a * n * d +
                e * o * d) *
              S),
            this
          );
        }
        scale(t) {
          const e = this.elements,
            n = t.x,
            i = t.y,
            r = t.z;
          return (
            (e[0] *= n),
            (e[4] *= i),
            (e[8] *= r),
            (e[1] *= n),
            (e[5] *= i),
            (e[9] *= r),
            (e[2] *= n),
            (e[6] *= i),
            (e[10] *= r),
            (e[3] *= n),
            (e[7] *= i),
            (e[11] *= r),
            this
          );
        }
        getMaxScaleOnAxis() {
          const t = this.elements,
            e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
            n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
            i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
          return Math.sqrt(Math.max(e, n, i));
        }
        makeTranslation(t, e, n) {
          return (
            t.isVector3
              ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1)
              : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
            this
          );
        }
        makeRotationX(t) {
          const e = Math.cos(t),
            n = Math.sin(t);
          return (
            this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
          );
        }
        makeRotationY(t) {
          const e = Math.cos(t),
            n = Math.sin(t);
          return (
            this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
          );
        }
        makeRotationZ(t) {
          const e = Math.cos(t),
            n = Math.sin(t);
          return (
            this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
          );
        }
        makeRotationAxis(t, e) {
          const n = Math.cos(e),
            i = Math.sin(e),
            r = 1 - n,
            a = t.x,
            o = t.y,
            s = t.z,
            l = r * a,
            c = r * o;
          return (
            this.set(
              l * a + n,
              l * o - i * s,
              l * s + i * o,
              0,
              l * o + i * s,
              c * o + n,
              c * s - i * a,
              0,
              l * s - i * o,
              c * s + i * a,
              r * s * s + n,
              0,
              0,
              0,
              0,
              1
            ),
            this
          );
        }
        makeScale(t, e, n) {
          return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
        }
        makeShear(t, e, n, i, r, a) {
          return this.set(1, n, r, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this;
        }
        compose(t, e, n) {
          const i = this.elements,
            r = e._x,
            a = e._y,
            o = e._z,
            s = e._w,
            l = r + r,
            c = a + a,
            h = o + o,
            d = r * l,
            u = r * c,
            f = r * h,
            m = a * c,
            p = a * h,
            g = o * h,
            _ = s * l,
            v = s * c,
            y = s * h,
            x = n.x,
            w = n.y,
            S = n.z;
          return (
            (i[0] = (1 - (m + g)) * x),
            (i[1] = (u + y) * x),
            (i[2] = (f - v) * x),
            (i[3] = 0),
            (i[4] = (u - y) * w),
            (i[5] = (1 - (d + g)) * w),
            (i[6] = (p + _) * w),
            (i[7] = 0),
            (i[8] = (f + v) * S),
            (i[9] = (p - _) * S),
            (i[10] = (1 - (d + m)) * S),
            (i[11] = 0),
            (i[12] = t.x),
            (i[13] = t.y),
            (i[14] = t.z),
            (i[15] = 1),
            this
          );
        }
        decompose(t, e, n) {
          const i = this.elements;
          let r = Vt.set(i[0], i[1], i[2]).length();
          const a = Vt.set(i[4], i[5], i[6]).length(),
            o = Vt.set(i[8], i[9], i[10]).length();
          this.determinant() < 0 && (r = -r),
            (t.x = i[12]),
            (t.y = i[13]),
            (t.z = i[14]),
            Ft.copy(this);
          const s = 1 / r,
            l = 1 / a,
            c = 1 / o;
          return (
            (Ft.elements[0] *= s),
            (Ft.elements[1] *= s),
            (Ft.elements[2] *= s),
            (Ft.elements[4] *= l),
            (Ft.elements[5] *= l),
            (Ft.elements[6] *= l),
            (Ft.elements[8] *= c),
            (Ft.elements[9] *= c),
            (Ft.elements[10] *= c),
            e.setFromRotationMatrix(Ft),
            (n.x = r),
            (n.y = a),
            (n.z = o),
            this
          );
        }
        makePerspective(t, e, n, i, r, a, o = 2e3) {
          const s = this.elements,
            l = (2 * r) / (e - t),
            c = (2 * r) / (n - i),
            h = (e + t) / (e - t),
            d = (n + i) / (n - i);
          let u, f;
          if (o === k) (u = -(a + r) / (a - r)), (f = (-2 * a * r) / (a - r));
          else {
            if (o !== I)
              throw new Error(
                "THREE.Matrix4.makePerspective(): Invalid coordinate system: " +
                  o
              );
            (u = -a / (a - r)), (f = (-a * r) / (a - r));
          }
          return (
            (s[0] = l),
            (s[4] = 0),
            (s[8] = h),
            (s[12] = 0),
            (s[1] = 0),
            (s[5] = c),
            (s[9] = d),
            (s[13] = 0),
            (s[2] = 0),
            (s[6] = 0),
            (s[10] = u),
            (s[14] = f),
            (s[3] = 0),
            (s[7] = 0),
            (s[11] = -1),
            (s[15] = 0),
            this
          );
        }
        makeOrthographic(t, e, n, i, r, a, o = 2e3) {
          const s = this.elements,
            l = 1 / (e - t),
            c = 1 / (n - i),
            h = 1 / (a - r),
            d = (e + t) * l,
            u = (n + i) * c;
          let f, m;
          if (o === k) (f = (a + r) * h), (m = -2 * h);
          else {
            if (o !== I)
              throw new Error(
                "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " +
                  o
              );
            (f = r * h), (m = -1 * h);
          }
          return (
            (s[0] = 2 * l),
            (s[4] = 0),
            (s[8] = 0),
            (s[12] = -d),
            (s[1] = 0),
            (s[5] = 2 * c),
            (s[9] = 0),
            (s[13] = -u),
            (s[2] = 0),
            (s[6] = 0),
            (s[10] = m),
            (s[14] = -f),
            (s[3] = 0),
            (s[7] = 0),
            (s[11] = 0),
            (s[15] = 1),
            this
          );
        }
        equals(t) {
          const e = this.elements,
            n = t.elements;
          for (let t = 0; t < 16; t++) if (e[t] !== n[t]) return !1;
          return !0;
        }
        fromArray(t, e = 0) {
          for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
          return this;
        }
        toArray(t = [], e = 0) {
          const n = this.elements;
          return (
            (t[e] = n[0]),
            (t[e + 1] = n[1]),
            (t[e + 2] = n[2]),
            (t[e + 3] = n[3]),
            (t[e + 4] = n[4]),
            (t[e + 5] = n[5]),
            (t[e + 6] = n[6]),
            (t[e + 7] = n[7]),
            (t[e + 8] = n[8]),
            (t[e + 9] = n[9]),
            (t[e + 10] = n[10]),
            (t[e + 11] = n[11]),
            (t[e + 12] = n[12]),
            (t[e + 13] = n[13]),
            (t[e + 14] = n[14]),
            (t[e + 15] = n[15]),
            t
          );
        }
      }
      const Vt = new ct(),
        Ft = new Ot(),
        Ht = new ct(0, 0, 0),
        Wt = new ct(1, 1, 1),
        Gt = new ct(),
        qt = new ct(),
        jt = new ct(),
        Zt = new Ot(),
        Yt = new lt();
      class Xt {
        constructor(t = 0, e = 0, n = 0, i = Xt.DEFAULT_ORDER) {
          (this.isEuler = !0),
            (this._x = t),
            (this._y = e),
            (this._z = n),
            (this._order = i);
        }
        get x() {
          return this._x;
        }
        set x(t) {
          (this._x = t), this._onChangeCallback();
        }
        get y() {
          return this._y;
        }
        set y(t) {
          (this._y = t), this._onChangeCallback();
        }
        get z() {
          return this._z;
        }
        set z(t) {
          (this._z = t), this._onChangeCallback();
        }
        get order() {
          return this._order;
        }
        set order(t) {
          (this._order = t), this._onChangeCallback();
        }
        set(t, e, n, i = this._order) {
          return (
            (this._x = t),
            (this._y = e),
            (this._z = n),
            (this._order = i),
            this._onChangeCallback(),
            this
          );
        }
        clone() {
          return new this.constructor(this._x, this._y, this._z, this._order);
        }
        copy(t) {
          return (
            (this._x = t._x),
            (this._y = t._y),
            (this._z = t._z),
            (this._order = t._order),
            this._onChangeCallback(),
            this
          );
        }
        setFromRotationMatrix(t, e = this._order, n = !0) {
          const i = t.elements,
            r = i[0],
            a = i[4],
            o = i[8],
            s = i[1],
            l = i[5],
            c = i[9],
            h = i[2],
            d = i[6],
            u = i[10];
          switch (e) {
            case "XYZ":
              (this._y = Math.asin(L(o, -1, 1))),
                Math.abs(o) < 0.9999999
                  ? ((this._x = Math.atan2(-c, u)),
                    (this._z = Math.atan2(-a, r)))
                  : ((this._x = Math.atan2(d, l)), (this._z = 0));
              break;
            case "YXZ":
              (this._x = Math.asin(-L(c, -1, 1))),
                Math.abs(c) < 0.9999999
                  ? ((this._y = Math.atan2(o, u)), (this._z = Math.atan2(s, l)))
                  : ((this._y = Math.atan2(-h, r)), (this._z = 0));
              break;
            case "ZXY":
              (this._x = Math.asin(L(d, -1, 1))),
                Math.abs(d) < 0.9999999
                  ? ((this._y = Math.atan2(-h, u)),
                    (this._z = Math.atan2(-a, l)))
                  : ((this._y = 0), (this._z = Math.atan2(s, r)));
              break;
            case "ZYX":
              (this._y = Math.asin(-L(h, -1, 1))),
                Math.abs(h) < 0.9999999
                  ? ((this._x = Math.atan2(d, u)), (this._z = Math.atan2(s, r)))
                  : ((this._x = 0), (this._z = Math.atan2(-a, l)));
              break;
            case "YZX":
              (this._z = Math.asin(L(s, -1, 1))),
                Math.abs(s) < 0.9999999
                  ? ((this._x = Math.atan2(-c, l)),
                    (this._y = Math.atan2(-h, r)))
                  : ((this._x = 0), (this._y = Math.atan2(o, u)));
              break;
            case "XZY":
              (this._z = Math.asin(-L(a, -1, 1))),
                Math.abs(a) < 0.9999999
                  ? ((this._x = Math.atan2(d, l)), (this._y = Math.atan2(o, r)))
                  : ((this._x = Math.atan2(-c, u)), (this._y = 0));
              break;
            default:
              console.warn(
                "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
                  e
              );
          }
          return (this._order = e), !0 === n && this._onChangeCallback(), this;
        }
        setFromQuaternion(t, e, n) {
          return (
            Zt.makeRotationFromQuaternion(t),
            this.setFromRotationMatrix(Zt, e, n)
          );
        }
        setFromVector3(t, e = this._order) {
          return this.set(t.x, t.y, t.z, e);
        }
        reorder(t) {
          return Yt.setFromEuler(this), this.setFromQuaternion(Yt, t);
        }
        equals(t) {
          return (
            t._x === this._x &&
            t._y === this._y &&
            t._z === this._z &&
            t._order === this._order
          );
        }
        fromArray(t) {
          return (
            (this._x = t[0]),
            (this._y = t[1]),
            (this._z = t[2]),
            void 0 !== t[3] && (this._order = t[3]),
            this._onChangeCallback(),
            this
          );
        }
        toArray(t = [], e = 0) {
          return (
            (t[e] = this._x),
            (t[e + 1] = this._y),
            (t[e + 2] = this._z),
            (t[e + 3] = this._order),
            t
          );
        }
        _onChange(t) {
          return (this._onChangeCallback = t), this;
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
          yield this._x, yield this._y, yield this._z, yield this._order;
        }
      }
      Xt.DEFAULT_ORDER = "XYZ";
      class Jt {
        constructor() {
          this.mask = 1;
        }
        set(t) {
          this.mask = (1 << t) >>> 0;
        }
        enable(t) {
          this.mask |= 1 << t;
        }
        enableAll() {
          this.mask = -1;
        }
        toggle(t) {
          this.mask ^= 1 << t;
        }
        disable(t) {
          this.mask &= ~(1 << t);
        }
        disableAll() {
          this.mask = 0;
        }
        test(t) {
          return !!(this.mask & t.mask);
        }
        isEnabled(t) {
          return !!(this.mask & (1 << t));
        }
      }
      let Qt = 0;
      const Kt = new ct(),
        $t = new lt(),
        te = new Ot(),
        ee = new ct(),
        ne = new ct(),
        ie = new ct(),
        re = new lt(),
        ae = new ct(1, 0, 0),
        oe = new ct(0, 1, 0),
        se = new ct(0, 0, 1),
        le = { type: "added" },
        ce = { type: "removed" },
        he = { type: "childadded", child: null },
        de = { type: "childremoved", child: null };
      class ue extends D {
        constructor() {
          super(),
            (this.isObject3D = !0),
            Object.defineProperty(this, "id", { value: Qt++ }),
            (this.uuid = R()),
            (this.name = ""),
            (this.type = "Object3D"),
            (this.parent = null),
            (this.children = []),
            (this.up = ue.DEFAULT_UP.clone());
          const t = new ct(),
            e = new Xt(),
            n = new lt(),
            i = new ct(1, 1, 1);
          e._onChange(function () {
            n.setFromEuler(e, !1);
          }),
            n._onChange(function () {
              e.setFromQuaternion(n, void 0, !1);
            }),
            Object.defineProperties(this, {
              position: { configurable: !0, enumerable: !0, value: t },
              rotation: { configurable: !0, enumerable: !0, value: e },
              quaternion: { configurable: !0, enumerable: !0, value: n },
              scale: { configurable: !0, enumerable: !0, value: i },
              modelViewMatrix: { value: new Ot() },
              normalMatrix: { value: new F() },
            }),
            (this.matrix = new Ot()),
            (this.matrixWorld = new Ot()),
            (this.matrixAutoUpdate = ue.DEFAULT_MATRIX_AUTO_UPDATE),
            (this.matrixWorldAutoUpdate = ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
            (this.matrixWorldNeedsUpdate = !1),
            (this.layers = new Jt()),
            (this.visible = !0),
            (this.castShadow = !1),
            (this.receiveShadow = !1),
            (this.frustumCulled = !0),
            (this.renderOrder = 0),
            (this.animations = []),
            (this.userData = {});
        }
        onBeforeShadow() {}
        onAfterShadow() {}
        onBeforeRender() {}
        onAfterRender() {}
        applyMatrix4(t) {
          this.matrixAutoUpdate && this.updateMatrix(),
            this.matrix.premultiply(t),
            this.matrix.decompose(this.position, this.quaternion, this.scale);
        }
        applyQuaternion(t) {
          return this.quaternion.premultiply(t), this;
        }
        setRotationFromAxisAngle(t, e) {
          this.quaternion.setFromAxisAngle(t, e);
        }
        setRotationFromEuler(t) {
          this.quaternion.setFromEuler(t, !0);
        }
        setRotationFromMatrix(t) {
          this.quaternion.setFromRotationMatrix(t);
        }
        setRotationFromQuaternion(t) {
          this.quaternion.copy(t);
        }
        rotateOnAxis(t, e) {
          return $t.setFromAxisAngle(t, e), this.quaternion.multiply($t), this;
        }
        rotateOnWorldAxis(t, e) {
          return (
            $t.setFromAxisAngle(t, e), this.quaternion.premultiply($t), this
          );
        }
        rotateX(t) {
          return this.rotateOnAxis(ae, t);
        }
        rotateY(t) {
          return this.rotateOnAxis(oe, t);
        }
        rotateZ(t) {
          return this.rotateOnAxis(se, t);
        }
        translateOnAxis(t, e) {
          return (
            Kt.copy(t).applyQuaternion(this.quaternion),
            this.position.add(Kt.multiplyScalar(e)),
            this
          );
        }
        translateX(t) {
          return this.translateOnAxis(ae, t);
        }
        translateY(t) {
          return this.translateOnAxis(oe, t);
        }
        translateZ(t) {
          return this.translateOnAxis(se, t);
        }
        localToWorld(t) {
          return (
            this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld)
          );
        }
        worldToLocal(t) {
          return (
            this.updateWorldMatrix(!0, !1),
            t.applyMatrix4(te.copy(this.matrixWorld).invert())
          );
        }
        lookAt(t, e, n) {
          t.isVector3 ? ee.copy(t) : ee.set(t, e, n);
          const i = this.parent;
          this.updateWorldMatrix(!0, !1),
            ne.setFromMatrixPosition(this.matrixWorld),
            this.isCamera || this.isLight
              ? te.lookAt(ne, ee, this.up)
              : te.lookAt(ee, ne, this.up),
            this.quaternion.setFromRotationMatrix(te),
            i &&
              (te.extractRotation(i.matrixWorld),
              $t.setFromRotationMatrix(te),
              this.quaternion.premultiply($t.invert()));
        }
        add(t) {
          if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
            return this;
          }
          return t === this
            ? (console.error(
                "THREE.Object3D.add: object can't be added as a child of itself.",
                t
              ),
              this)
            : (t && t.isObject3D
                ? (t.removeFromParent(),
                  (t.parent = this),
                  this.children.push(t),
                  t.dispatchEvent(le),
                  (he.child = t),
                  this.dispatchEvent(he),
                  (he.child = null))
                : console.error(
                    "THREE.Object3D.add: object not an instance of THREE.Object3D.",
                    t
                  ),
              this);
        }
        remove(t) {
          if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++)
              this.remove(arguments[t]);
            return this;
          }
          const e = this.children.indexOf(t);
          return (
            -1 !== e &&
              ((t.parent = null),
              this.children.splice(e, 1),
              t.dispatchEvent(ce),
              (de.child = t),
              this.dispatchEvent(de),
              (de.child = null)),
            this
          );
        }
        removeFromParent() {
          const t = this.parent;
          return null !== t && t.remove(this), this;
        }
        clear() {
          return this.remove(...this.children);
        }
        attach(t) {
          return (
            this.updateWorldMatrix(!0, !1),
            te.copy(this.matrixWorld).invert(),
            null !== t.parent &&
              (t.parent.updateWorldMatrix(!0, !1),
              te.multiply(t.parent.matrixWorld)),
            t.applyMatrix4(te),
            t.removeFromParent(),
            (t.parent = this),
            this.children.push(t),
            t.updateWorldMatrix(!1, !0),
            t.dispatchEvent(le),
            (he.child = t),
            this.dispatchEvent(he),
            (he.child = null),
            this
          );
        }
        getObjectById(t) {
          return this.getObjectByProperty("id", t);
        }
        getObjectByName(t) {
          return this.getObjectByProperty("name", t);
        }
        getObjectByProperty(t, e) {
          if (this[t] === e) return this;
          for (let n = 0, i = this.children.length; n < i; n++) {
            const i = this.children[n].getObjectByProperty(t, e);
            if (void 0 !== i) return i;
          }
        }
        getObjectsByProperty(t, e, n = []) {
          this[t] === e && n.push(this);
          const i = this.children;
          for (let r = 0, a = i.length; r < a; r++)
            i[r].getObjectsByProperty(t, e, n);
          return n;
        }
        getWorldPosition(t) {
          return (
            this.updateWorldMatrix(!0, !1),
            t.setFromMatrixPosition(this.matrixWorld)
          );
        }
        getWorldQuaternion(t) {
          return (
            this.updateWorldMatrix(!0, !1),
            this.matrixWorld.decompose(ne, t, ie),
            t
          );
        }
        getWorldScale(t) {
          return (
            this.updateWorldMatrix(!0, !1),
            this.matrixWorld.decompose(ne, re, t),
            t
          );
        }
        getWorldDirection(t) {
          this.updateWorldMatrix(!0, !1);
          const e = this.matrixWorld.elements;
          return t.set(e[8], e[9], e[10]).normalize();
        }
        raycast() {}
        traverse(t) {
          t(this);
          const e = this.children;
          for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
        }
        traverseVisible(t) {
          if (!1 === this.visible) return;
          t(this);
          const e = this.children;
          for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
        }
        traverseAncestors(t) {
          const e = this.parent;
          null !== e && (t(e), e.traverseAncestors(t));
        }
        updateMatrix() {
          this.matrix.compose(this.position, this.quaternion, this.scale),
            (this.matrixWorldNeedsUpdate = !0);
        }
        updateMatrixWorld(t) {
          this.matrixAutoUpdate && this.updateMatrix(),
            (this.matrixWorldNeedsUpdate || t) &&
              (!0 === this.matrixWorldAutoUpdate &&
                (null === this.parent
                  ? this.matrixWorld.copy(this.matrix)
                  : this.matrixWorld.multiplyMatrices(
                      this.parent.matrixWorld,
                      this.matrix
                    )),
              (this.matrixWorldNeedsUpdate = !1),
              (t = !0));
          const e = this.children;
          for (let n = 0, i = e.length; n < i; n++) {
            e[n].updateMatrixWorld(t);
          }
        }
        updateWorldMatrix(t, e) {
          const n = this.parent;
          if (
            (!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
            this.matrixAutoUpdate && this.updateMatrix(),
            !0 === this.matrixWorldAutoUpdate &&
              (null === this.parent
                ? this.matrixWorld.copy(this.matrix)
                : this.matrixWorld.multiplyMatrices(
                    this.parent.matrixWorld,
                    this.matrix
                  )),
            !0 === e)
          ) {
            const t = this.children;
            for (let e = 0, n = t.length; e < n; e++) {
              t[e].updateWorldMatrix(!1, !0);
            }
          }
        }
        toJSON(t) {
          const e = void 0 === t || "string" == typeof t,
            n = {};
          e &&
            ((t = {
              geometries: {},
              materials: {},
              textures: {},
              images: {},
              shapes: {},
              skeletons: {},
              animations: {},
              nodes: {},
            }),
            (n.metadata = {
              version: 4.6,
              type: "Object",
              generator: "Object3D.toJSON",
            }));
          const i = {};
          function r(e, n) {
            return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
          }
          if (
            ((i.uuid = this.uuid),
            (i.type = this.type),
            "" !== this.name && (i.name = this.name),
            !0 === this.castShadow && (i.castShadow = !0),
            !0 === this.receiveShadow && (i.receiveShadow = !0),
            !1 === this.visible && (i.visible = !1),
            !1 === this.frustumCulled && (i.frustumCulled = !1),
            0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
            Object.keys(this.userData).length > 0 &&
              (i.userData = this.userData),
            (i.layers = this.layers.mask),
            (i.matrix = this.matrix.toArray()),
            (i.up = this.up.toArray()),
            !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
            this.isInstancedMesh &&
              ((i.type = "InstancedMesh"),
              (i.count = this.count),
              (i.instanceMatrix = this.instanceMatrix.toJSON()),
              null !== this.instanceColor &&
                (i.instanceColor = this.instanceColor.toJSON())),
            this.isBatchedMesh &&
              ((i.type = "BatchedMesh"),
              (i.perObjectFrustumCulled = this.perObjectFrustumCulled),
              (i.sortObjects = this.sortObjects),
              (i.drawRanges = this._drawRanges),
              (i.reservedRanges = this._reservedRanges),
              (i.visibility = this._visibility),
              (i.active = this._active),
              (i.bounds = this._bounds.map((t) => ({
                boxInitialized: t.boxInitialized,
                boxMin: t.box.min.toArray(),
                boxMax: t.box.max.toArray(),
                sphereInitialized: t.sphereInitialized,
                sphereRadius: t.sphere.radius,
                sphereCenter: t.sphere.center.toArray(),
              }))),
              (i.maxInstanceCount = this._maxInstanceCount),
              (i.maxVertexCount = this._maxVertexCount),
              (i.maxIndexCount = this._maxIndexCount),
              (i.geometryInitialized = this._geometryInitialized),
              (i.geometryCount = this._geometryCount),
              (i.matricesTexture = this._matricesTexture.toJSON(t)),
              null !== this._colorsTexture &&
                (i.colorsTexture = this._colorsTexture.toJSON(t)),
              null !== this.boundingSphere &&
                (i.boundingSphere = {
                  center: i.boundingSphere.center.toArray(),
                  radius: i.boundingSphere.radius,
                }),
              null !== this.boundingBox &&
                (i.boundingBox = {
                  min: i.boundingBox.min.toArray(),
                  max: i.boundingBox.max.toArray(),
                })),
            this.isScene)
          )
            this.background &&
              (this.background.isColor
                ? (i.background = this.background.toJSON())
                : this.background.isTexture &&
                  (i.background = this.background.toJSON(t).uuid)),
              this.environment &&
                this.environment.isTexture &&
                !0 !== this.environment.isRenderTargetTexture &&
                (i.environment = this.environment.toJSON(t).uuid);
          else if (this.isMesh || this.isLine || this.isPoints) {
            i.geometry = r(t.geometries, this.geometry);
            const e = this.geometry.parameters;
            if (void 0 !== e && void 0 !== e.shapes) {
              const n = e.shapes;
              if (Array.isArray(n))
                for (let e = 0, i = n.length; e < i; e++) {
                  const i = n[e];
                  r(t.shapes, i);
                }
              else r(t.shapes, n);
            }
          }
          if (
            (this.isSkinnedMesh &&
              ((i.bindMode = this.bindMode),
              (i.bindMatrix = this.bindMatrix.toArray()),
              void 0 !== this.skeleton &&
                (r(t.skeletons, this.skeleton),
                (i.skeleton = this.skeleton.uuid))),
            void 0 !== this.material)
          )
            if (Array.isArray(this.material)) {
              const e = [];
              for (let n = 0, i = this.material.length; n < i; n++)
                e.push(r(t.materials, this.material[n]));
              i.material = e;
            } else i.material = r(t.materials, this.material);
          if (this.children.length > 0) {
            i.children = [];
            for (let e = 0; e < this.children.length; e++)
              i.children.push(this.children[e].toJSON(t).object);
          }
          if (this.animations.length > 0) {
            i.animations = [];
            for (let e = 0; e < this.animations.length; e++) {
              const n = this.animations[e];
              i.animations.push(r(t.animations, n));
            }
          }
          if (e) {
            const e = a(t.geometries),
              i = a(t.materials),
              r = a(t.textures),
              o = a(t.images),
              s = a(t.shapes),
              l = a(t.skeletons),
              c = a(t.animations),
              h = a(t.nodes);
            e.length > 0 && (n.geometries = e),
              i.length > 0 && (n.materials = i),
              r.length > 0 && (n.textures = r),
              o.length > 0 && (n.images = o),
              s.length > 0 && (n.shapes = s),
              l.length > 0 && (n.skeletons = l),
              c.length > 0 && (n.animations = c),
              h.length > 0 && (n.nodes = h);
          }
          return (n.object = i), n;
          function a(t) {
            const e = [];
            for (const n in t) {
              const i = t[n];
              delete i.metadata, e.push(i);
            }
            return e;
          }
        }
        clone(t) {
          return new this.constructor().copy(this, t);
        }
        copy(t, e = !0) {
          if (
            ((this.name = t.name),
            this.up.copy(t.up),
            this.position.copy(t.position),
            (this.rotation.order = t.rotation.order),
            this.quaternion.copy(t.quaternion),
            this.scale.copy(t.scale),
            this.matrix.copy(t.matrix),
            this.matrixWorld.copy(t.matrixWorld),
            (this.matrixAutoUpdate = t.matrixAutoUpdate),
            (this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate),
            (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
            (this.layers.mask = t.layers.mask),
            (this.visible = t.visible),
            (this.castShadow = t.castShadow),
            (this.receiveShadow = t.receiveShadow),
            (this.frustumCulled = t.frustumCulled),
            (this.renderOrder = t.renderOrder),
            (this.animations = t.animations.slice()),
            (this.userData = JSON.parse(JSON.stringify(t.userData))),
            !0 === e)
          )
            for (let e = 0; e < t.children.length; e++) {
              const n = t.children[e];
              this.add(n.clone());
            }
          return this;
        }
      }
      (ue.DEFAULT_UP = new ct(0, 1, 0)),
        (ue.DEFAULT_MATRIX_AUTO_UPDATE = !0),
        (ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0);
      const fe = new ct(),
        me = new ct(),
        pe = new ct(),
        ge = new ct(),
        _e = new ct(),
        ve = new ct(),
        ye = new ct(),
        xe = new ct(),
        we = new ct(),
        Se = new ct();
      class be {
        constructor(t = new ct(), e = new ct(), n = new ct()) {
          (this.a = t), (this.b = e), (this.c = n);
        }
        static getNormal(t, e, n, i) {
          i.subVectors(n, e), fe.subVectors(t, e), i.cross(fe);
          const r = i.lengthSq();
          return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
        }
        static getBarycoord(t, e, n, i, r) {
          fe.subVectors(i, e), me.subVectors(n, e), pe.subVectors(t, e);
          const a = fe.dot(fe),
            o = fe.dot(me),
            s = fe.dot(pe),
            l = me.dot(me),
            c = me.dot(pe),
            h = a * l - o * o;
          if (0 === h) return r.set(0, 0, 0), null;
          const d = 1 / h,
            u = (l * s - o * c) * d,
            f = (a * c - o * s) * d;
          return r.set(1 - u - f, f, u);
        }
        static containsPoint(t, e, n, i) {
          return (
            null !== this.getBarycoord(t, e, n, i, ge) &&
            ge.x >= 0 &&
            ge.y >= 0 &&
            ge.x + ge.y <= 1
          );
        }
        static getInterpolation(t, e, n, i, r, a, o, s) {
          return null === this.getBarycoord(t, e, n, i, ge)
            ? ((s.x = 0),
              (s.y = 0),
              "z" in s && (s.z = 0),
              "w" in s && (s.w = 0),
              null)
            : (s.setScalar(0),
              s.addScaledVector(r, ge.x),
              s.addScaledVector(a, ge.y),
              s.addScaledVector(o, ge.z),
              s);
        }
        static isFrontFacing(t, e, n, i) {
          return (
            fe.subVectors(n, e), me.subVectors(t, e), fe.cross(me).dot(i) < 0
          );
        }
        set(t, e, n) {
          return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
        }
        setFromPointsAndIndices(t, e, n, i) {
          return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
        }
        setFromAttributeAndIndices(t, e, n, i) {
          return (
            this.a.fromBufferAttribute(t, e),
            this.b.fromBufferAttribute(t, n),
            this.c.fromBufferAttribute(t, i),
            this
          );
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
        }
        getArea() {
          return (
            fe.subVectors(this.c, this.b),
            me.subVectors(this.a, this.b),
            0.5 * fe.cross(me).length()
          );
        }
        getMidpoint(t) {
          return t
            .addVectors(this.a, this.b)
            .add(this.c)
            .multiplyScalar(1 / 3);
        }
        getNormal(t) {
          return be.getNormal(this.a, this.b, this.c, t);
        }
        getPlane(t) {
          return t.setFromCoplanarPoints(this.a, this.b, this.c);
        }
        getBarycoord(t, e) {
          return be.getBarycoord(t, this.a, this.b, this.c, e);
        }
        getInterpolation(t, e, n, i, r) {
          return be.getInterpolation(t, this.a, this.b, this.c, e, n, i, r);
        }
        containsPoint(t) {
          return be.containsPoint(t, this.a, this.b, this.c);
        }
        isFrontFacing(t) {
          return be.isFrontFacing(this.a, this.b, this.c, t);
        }
        intersectsBox(t) {
          return t.intersectsTriangle(this);
        }
        closestPointToPoint(t, e) {
          const n = this.a,
            i = this.b,
            r = this.c;
          let a, o;
          _e.subVectors(i, n), ve.subVectors(r, n), xe.subVectors(t, n);
          const s = _e.dot(xe),
            l = ve.dot(xe);
          if (s <= 0 && l <= 0) return e.copy(n);
          we.subVectors(t, i);
          const c = _e.dot(we),
            h = ve.dot(we);
          if (c >= 0 && h <= c) return e.copy(i);
          const d = s * h - c * l;
          if (d <= 0 && s >= 0 && c <= 0)
            return (a = s / (s - c)), e.copy(n).addScaledVector(_e, a);
          Se.subVectors(t, r);
          const u = _e.dot(Se),
            f = ve.dot(Se);
          if (f >= 0 && u <= f) return e.copy(r);
          const m = u * l - s * f;
          if (m <= 0 && l >= 0 && f <= 0)
            return (o = l / (l - f)), e.copy(n).addScaledVector(ve, o);
          const p = c * f - u * h;
          if (p <= 0 && h - c >= 0 && u - f >= 0)
            return (
              ye.subVectors(r, i),
              (o = (h - c) / (h - c + (u - f))),
              e.copy(i).addScaledVector(ye, o)
            );
          const g = 1 / (p + m + d);
          return (
            (a = m * g),
            (o = d * g),
            e.copy(n).addScaledVector(_e, a).addScaledVector(ve, o)
          );
        }
        equals(t) {
          return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
        }
      }
      const Me = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        },
        Ae = { h: 0, s: 0, l: 0 },
        Te = { h: 0, s: 0, l: 0 };
      function Ee(t, e, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? t + 6 * (e - t) * n
            : n < 0.5
            ? e
            : n < 2 / 3
            ? t + 6 * (e - t) * (2 / 3 - n)
            : t
        );
      }
      class Ce {
        constructor(t, e, n) {
          return (
            (this.isColor = !0),
            (this.r = 1),
            (this.g = 1),
            (this.b = 1),
            this.set(t, e, n)
          );
        }
        set(t, e, n) {
          if (void 0 === e && void 0 === n) {
            const e = t;
            e && e.isColor
              ? this.copy(e)
              : "number" == typeof e
              ? this.setHex(e)
              : "string" == typeof e && this.setStyle(e);
          } else this.setRGB(t, e, n);
          return this;
        }
        setScalar(t) {
          return (this.r = t), (this.g = t), (this.b = t), this;
        }
        setHex(t, e = x) {
          return (
            (t = Math.floor(t)),
            (this.r = ((t >> 16) & 255) / 255),
            (this.g = ((t >> 8) & 255) / 255),
            (this.b = (255 & t) / 255),
            Q.toWorkingColorSpace(this, e),
            this
          );
        }
        setRGB(t, e, n, i = Q.workingColorSpace) {
          return (
            (this.r = t),
            (this.g = e),
            (this.b = n),
            Q.toWorkingColorSpace(this, i),
            this
          );
        }
        setHSL(t, e, n, i = Q.workingColorSpace) {
          if (((t = z(t, 1)), (e = L(e, 0, 1)), (n = L(n, 0, 1)), 0 === e))
            this.r = this.g = this.b = n;
          else {
            const i = n <= 0.5 ? n * (1 + e) : n + e - n * e,
              r = 2 * n - i;
            (this.r = Ee(r, i, t + 1 / 3)),
              (this.g = Ee(r, i, t)),
              (this.b = Ee(r, i, t - 1 / 3));
          }
          return Q.toWorkingColorSpace(this, i), this;
        }
        setStyle(t, e = x) {
          function n(e) {
            void 0 !== e &&
              parseFloat(e) < 1 &&
              console.warn(
                "THREE.Color: Alpha component of " + t + " will be ignored."
              );
          }
          let i;
          if ((i = /^(\w+)\(([^\)]*)\)/.exec(t))) {
            let r;
            const a = i[1],
              o = i[2];
            switch (a) {
              case "rgb":
              case "rgba":
                if (
                  (r =
                    /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                      o
                    ))
                )
                  return (
                    n(r[4]),
                    this.setRGB(
                      Math.min(255, parseInt(r[1], 10)) / 255,
                      Math.min(255, parseInt(r[2], 10)) / 255,
                      Math.min(255, parseInt(r[3], 10)) / 255,
                      e
                    )
                  );
                if (
                  (r =
                    /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                      o
                    ))
                )
                  return (
                    n(r[4]),
                    this.setRGB(
                      Math.min(100, parseInt(r[1], 10)) / 100,
                      Math.min(100, parseInt(r[2], 10)) / 100,
                      Math.min(100, parseInt(r[3], 10)) / 100,
                      e
                    )
                  );
                break;
              case "hsl":
              case "hsla":
                if (
                  (r =
                    /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                      o
                    ))
                )
                  return (
                    n(r[4]),
                    this.setHSL(
                      parseFloat(r[1]) / 360,
                      parseFloat(r[2]) / 100,
                      parseFloat(r[3]) / 100,
                      e
                    )
                  );
                break;
              default:
                console.warn("THREE.Color: Unknown color model " + t);
            }
          } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(t))) {
            const n = i[1],
              r = n.length;
            if (3 === r)
              return this.setRGB(
                parseInt(n.charAt(0), 16) / 15,
                parseInt(n.charAt(1), 16) / 15,
                parseInt(n.charAt(2), 16) / 15,
                e
              );
            if (6 === r) return this.setHex(parseInt(n, 16), e);
            console.warn("THREE.Color: Invalid hex color " + t);
          } else if (t && t.length > 0) return this.setColorName(t, e);
          return this;
        }
        setColorName(t, e = x) {
          const n = Me[t.toLowerCase()];
          return (
            void 0 !== n
              ? this.setHex(n, e)
              : console.warn("THREE.Color: Unknown color " + t),
            this
          );
        }
        clone() {
          return new this.constructor(this.r, this.g, this.b);
        }
        copy(t) {
          return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
        }
        copySRGBToLinear(t) {
          return (this.r = K(t.r)), (this.g = K(t.g)), (this.b = K(t.b)), this;
        }
        copyLinearToSRGB(t) {
          return (this.r = $(t.r)), (this.g = $(t.g)), (this.b = $(t.b)), this;
        }
        convertSRGBToLinear() {
          return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
          return this.copyLinearToSRGB(this), this;
        }
        getHex(t = x) {
          return (
            Q.fromWorkingColorSpace(Pe.copy(this), t),
            65536 * Math.round(L(255 * Pe.r, 0, 255)) +
              256 * Math.round(L(255 * Pe.g, 0, 255)) +
              Math.round(L(255 * Pe.b, 0, 255))
          );
        }
        getHexString(t = x) {
          return ("000000" + this.getHex(t).toString(16)).slice(-6);
        }
        getHSL(t, e = Q.workingColorSpace) {
          Q.fromWorkingColorSpace(Pe.copy(this), e);
          const n = Pe.r,
            i = Pe.g,
            r = Pe.b,
            a = Math.max(n, i, r),
            o = Math.min(n, i, r);
          let s, l;
          const c = (o + a) / 2;
          if (o === a) (s = 0), (l = 0);
          else {
            const t = a - o;
            switch (((l = c <= 0.5 ? t / (a + o) : t / (2 - a - o)), a)) {
              case n:
                s = (i - r) / t + (i < r ? 6 : 0);
                break;
              case i:
                s = (r - n) / t + 2;
                break;
              case r:
                s = (n - i) / t + 4;
            }
            s /= 6;
          }
          return (t.h = s), (t.s = l), (t.l = c), t;
        }
        getRGB(t, e = Q.workingColorSpace) {
          return (
            Q.fromWorkingColorSpace(Pe.copy(this), e),
            (t.r = Pe.r),
            (t.g = Pe.g),
            (t.b = Pe.b),
            t
          );
        }
        getStyle(t = x) {
          Q.fromWorkingColorSpace(Pe.copy(this), t);
          const e = Pe.r,
            n = Pe.g,
            i = Pe.b;
          return t !== x
            ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
            : `rgb(${Math.round(255 * e)},${Math.round(255 * n)},${Math.round(
                255 * i
              )})`;
        }
        offsetHSL(t, e, n) {
          return this.getHSL(Ae), this.setHSL(Ae.h + t, Ae.s + e, Ae.l + n);
        }
        add(t) {
          return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
        }
        addColors(t, e) {
          return (
            (this.r = t.r + e.r),
            (this.g = t.g + e.g),
            (this.b = t.b + e.b),
            this
          );
        }
        addScalar(t) {
          return (this.r += t), (this.g += t), (this.b += t), this;
        }
        sub(t) {
          return (
            (this.r = Math.max(0, this.r - t.r)),
            (this.g = Math.max(0, this.g - t.g)),
            (this.b = Math.max(0, this.b - t.b)),
            this
          );
        }
        multiply(t) {
          return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
        }
        multiplyScalar(t) {
          return (this.r *= t), (this.g *= t), (this.b *= t), this;
        }
        lerp(t, e) {
          return (
            (this.r += (t.r - this.r) * e),
            (this.g += (t.g - this.g) * e),
            (this.b += (t.b - this.b) * e),
            this
          );
        }
        lerpColors(t, e, n) {
          return (
            (this.r = t.r + (e.r - t.r) * n),
            (this.g = t.g + (e.g - t.g) * n),
            (this.b = t.b + (e.b - t.b) * n),
            this
          );
        }
        lerpHSL(t, e) {
          this.getHSL(Ae), t.getHSL(Te);
          const n = U(Ae.h, Te.h, e),
            i = U(Ae.s, Te.s, e),
            r = U(Ae.l, Te.l, e);
          return this.setHSL(n, i, r), this;
        }
        setFromVector3(t) {
          return (this.r = t.x), (this.g = t.y), (this.b = t.z), this;
        }
        applyMatrix3(t) {
          const e = this.r,
            n = this.g,
            i = this.b,
            r = t.elements;
          return (
            (this.r = r[0] * e + r[3] * n + r[6] * i),
            (this.g = r[1] * e + r[4] * n + r[7] * i),
            (this.b = r[2] * e + r[5] * n + r[8] * i),
            this
          );
        }
        equals(t) {
          return t.r === this.r && t.g === this.g && t.b === this.b;
        }
        fromArray(t, e = 0) {
          return (
            (this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this
          );
        }
        toArray(t = [], e = 0) {
          return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t;
        }
        fromBufferAttribute(t, e) {
          return (
            (this.r = t.getX(e)),
            (this.g = t.getY(e)),
            (this.b = t.getZ(e)),
            this
          );
        }
        toJSON() {
          return this.getHex();
        }
        *[Symbol.iterator]() {
          yield this.r, yield this.g, yield this.b;
        }
      }
      const Pe = new Ce();
      Ce.NAMES = Me;
      let ke = 0;
      class Ie extends D {
        constructor() {
          super(),
            (this.isMaterial = !0),
            Object.defineProperty(this, "id", { value: ke++ }),
            (this.uuid = R()),
            (this.name = ""),
            (this.type = "Material"),
            (this.blending = 1),
            (this.side = e),
            (this.vertexColors = !1),
            (this.opacity = 1),
            (this.transparent = !1),
            (this.alphaHash = !1),
            (this.blendSrc = 204),
            (this.blendDst = 205),
            (this.blendEquation = r),
            (this.blendSrcAlpha = null),
            (this.blendDstAlpha = null),
            (this.blendEquationAlpha = null),
            (this.blendColor = new Ce(0, 0, 0)),
            (this.blendAlpha = 0),
            (this.depthFunc = 3),
            (this.depthTest = !0),
            (this.depthWrite = !0),
            (this.stencilWriteMask = 255),
            (this.stencilFunc = 519),
            (this.stencilRef = 0),
            (this.stencilFuncMask = 255),
            (this.stencilFail = C),
            (this.stencilZFail = C),
            (this.stencilZPass = C),
            (this.stencilWrite = !1),
            (this.clippingPlanes = null),
            (this.clipIntersection = !1),
            (this.clipShadows = !1),
            (this.shadowSide = null),
            (this.colorWrite = !0),
            (this.precision = null),
            (this.polygonOffset = !1),
            (this.polygonOffsetFactor = 0),
            (this.polygonOffsetUnits = 0),
            (this.dithering = !1),
            (this.alphaToCoverage = !1),
            (this.premultipliedAlpha = !1),
            (this.forceSinglePass = !1),
            (this.visible = !0),
            (this.toneMapped = !0),
            (this.userData = {}),
            (this.version = 0),
            (this._alphaTest = 0);
        }
        get alphaTest() {
          return this._alphaTest;
        }
        set alphaTest(t) {
          this._alphaTest > 0 != t > 0 && this.version++, (this._alphaTest = t);
        }
        onBeforeCompile() {}
        customProgramCacheKey() {
          return this.onBeforeCompile.toString();
        }
        setValues(t) {
          if (void 0 !== t)
            for (const e in t) {
              const n = t[e];
              if (void 0 === n) {
                console.warn(
                  `THREE.Material: parameter '${e}' has value of undefined.`
                );
                continue;
              }
              const i = this[e];
              void 0 !== i
                ? i && i.isColor
                  ? i.set(n)
                  : i && i.isVector3 && n && n.isVector3
                  ? i.copy(n)
                  : (this[e] = n)
                : console.warn(
                    `THREE.Material: '${e}' is not a property of THREE.${this.type}.`
                  );
            }
        }
        toJSON(t) {
          const n = void 0 === t || "string" == typeof t;
          n && (t = { textures: {}, images: {} });
          const i = {
            metadata: {
              version: 4.6,
              type: "Material",
              generator: "Material.toJSON",
            },
          };
          function a(t) {
            const e = [];
            for (const n in t) {
              const i = t[n];
              delete i.metadata, e.push(i);
            }
            return e;
          }
          if (
            ((i.uuid = this.uuid),
            (i.type = this.type),
            "" !== this.name && (i.name = this.name),
            this.color && this.color.isColor && (i.color = this.color.getHex()),
            void 0 !== this.roughness && (i.roughness = this.roughness),
            void 0 !== this.metalness && (i.metalness = this.metalness),
            void 0 !== this.sheen && (i.sheen = this.sheen),
            this.sheenColor &&
              this.sheenColor.isColor &&
              (i.sheenColor = this.sheenColor.getHex()),
            void 0 !== this.sheenRoughness &&
              (i.sheenRoughness = this.sheenRoughness),
            this.emissive &&
              this.emissive.isColor &&
              (i.emissive = this.emissive.getHex()),
            void 0 !== this.emissiveIntensity &&
              1 !== this.emissiveIntensity &&
              (i.emissiveIntensity = this.emissiveIntensity),
            this.specular &&
              this.specular.isColor &&
              (i.specular = this.specular.getHex()),
            void 0 !== this.specularIntensity &&
              (i.specularIntensity = this.specularIntensity),
            this.specularColor &&
              this.specularColor.isColor &&
              (i.specularColor = this.specularColor.getHex()),
            void 0 !== this.shininess && (i.shininess = this.shininess),
            void 0 !== this.clearcoat && (i.clearcoat = this.clearcoat),
            void 0 !== this.clearcoatRoughness &&
              (i.clearcoatRoughness = this.clearcoatRoughness),
            this.clearcoatMap &&
              this.clearcoatMap.isTexture &&
              (i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
            this.clearcoatRoughnessMap &&
              this.clearcoatRoughnessMap.isTexture &&
              (i.clearcoatRoughnessMap =
                this.clearcoatRoughnessMap.toJSON(t).uuid),
            this.clearcoatNormalMap &&
              this.clearcoatNormalMap.isTexture &&
              ((i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
              (i.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
            void 0 !== this.dispersion && (i.dispersion = this.dispersion),
            void 0 !== this.iridescence && (i.iridescence = this.iridescence),
            void 0 !== this.iridescenceIOR &&
              (i.iridescenceIOR = this.iridescenceIOR),
            void 0 !== this.iridescenceThicknessRange &&
              (i.iridescenceThicknessRange = this.iridescenceThicknessRange),
            this.iridescenceMap &&
              this.iridescenceMap.isTexture &&
              (i.iridescenceMap = this.iridescenceMap.toJSON(t).uuid),
            this.iridescenceThicknessMap &&
              this.iridescenceThicknessMap.isTexture &&
              (i.iridescenceThicknessMap =
                this.iridescenceThicknessMap.toJSON(t).uuid),
            void 0 !== this.anisotropy && (i.anisotropy = this.anisotropy),
            void 0 !== this.anisotropyRotation &&
              (i.anisotropyRotation = this.anisotropyRotation),
            this.anisotropyMap &&
              this.anisotropyMap.isTexture &&
              (i.anisotropyMap = this.anisotropyMap.toJSON(t).uuid),
            this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid),
            this.matcap &&
              this.matcap.isTexture &&
              (i.matcap = this.matcap.toJSON(t).uuid),
            this.alphaMap &&
              this.alphaMap.isTexture &&
              (i.alphaMap = this.alphaMap.toJSON(t).uuid),
            this.lightMap &&
              this.lightMap.isTexture &&
              ((i.lightMap = this.lightMap.toJSON(t).uuid),
              (i.lightMapIntensity = this.lightMapIntensity)),
            this.aoMap &&
              this.aoMap.isTexture &&
              ((i.aoMap = this.aoMap.toJSON(t).uuid),
              (i.aoMapIntensity = this.aoMapIntensity)),
            this.bumpMap &&
              this.bumpMap.isTexture &&
              ((i.bumpMap = this.bumpMap.toJSON(t).uuid),
              (i.bumpScale = this.bumpScale)),
            this.normalMap &&
              this.normalMap.isTexture &&
              ((i.normalMap = this.normalMap.toJSON(t).uuid),
              (i.normalMapType = this.normalMapType),
              (i.normalScale = this.normalScale.toArray())),
            this.displacementMap &&
              this.displacementMap.isTexture &&
              ((i.displacementMap = this.displacementMap.toJSON(t).uuid),
              (i.displacementScale = this.displacementScale),
              (i.displacementBias = this.displacementBias)),
            this.roughnessMap &&
              this.roughnessMap.isTexture &&
              (i.roughnessMap = this.roughnessMap.toJSON(t).uuid),
            this.metalnessMap &&
              this.metalnessMap.isTexture &&
              (i.metalnessMap = this.metalnessMap.toJSON(t).uuid),
            this.emissiveMap &&
              this.emissiveMap.isTexture &&
              (i.emissiveMap = this.emissiveMap.toJSON(t).uuid),
            this.specularMap &&
              this.specularMap.isTexture &&
              (i.specularMap = this.specularMap.toJSON(t).uuid),
            this.specularIntensityMap &&
              this.specularIntensityMap.isTexture &&
              (i.specularIntensityMap =
                this.specularIntensityMap.toJSON(t).uuid),
            this.specularColorMap &&
              this.specularColorMap.isTexture &&
              (i.specularColorMap = this.specularColorMap.toJSON(t).uuid),
            this.envMap &&
              this.envMap.isTexture &&
              ((i.envMap = this.envMap.toJSON(t).uuid),
              void 0 !== this.combine && (i.combine = this.combine)),
            void 0 !== this.envMapRotation &&
              (i.envMapRotation = this.envMapRotation.toArray()),
            void 0 !== this.envMapIntensity &&
              (i.envMapIntensity = this.envMapIntensity),
            void 0 !== this.reflectivity &&
              (i.reflectivity = this.reflectivity),
            void 0 !== this.refractionRatio &&
              (i.refractionRatio = this.refractionRatio),
            this.gradientMap &&
              this.gradientMap.isTexture &&
              (i.gradientMap = this.gradientMap.toJSON(t).uuid),
            void 0 !== this.transmission &&
              (i.transmission = this.transmission),
            this.transmissionMap &&
              this.transmissionMap.isTexture &&
              (i.transmissionMap = this.transmissionMap.toJSON(t).uuid),
            void 0 !== this.thickness && (i.thickness = this.thickness),
            this.thicknessMap &&
              this.thicknessMap.isTexture &&
              (i.thicknessMap = this.thicknessMap.toJSON(t).uuid),
            void 0 !== this.attenuationDistance &&
              this.attenuationDistance !== 1 / 0 &&
              (i.attenuationDistance = this.attenuationDistance),
            void 0 !== this.attenuationColor &&
              (i.attenuationColor = this.attenuationColor.getHex()),
            void 0 !== this.size && (i.size = this.size),
            null !== this.shadowSide && (i.shadowSide = this.shadowSide),
            void 0 !== this.sizeAttenuation &&
              (i.sizeAttenuation = this.sizeAttenuation),
            1 !== this.blending && (i.blending = this.blending),
            this.side !== e && (i.side = this.side),
            !0 === this.vertexColors && (i.vertexColors = !0),
            this.opacity < 1 && (i.opacity = this.opacity),
            !0 === this.transparent && (i.transparent = !0),
            204 !== this.blendSrc && (i.blendSrc = this.blendSrc),
            205 !== this.blendDst && (i.blendDst = this.blendDst),
            this.blendEquation !== r && (i.blendEquation = this.blendEquation),
            null !== this.blendSrcAlpha &&
              (i.blendSrcAlpha = this.blendSrcAlpha),
            null !== this.blendDstAlpha &&
              (i.blendDstAlpha = this.blendDstAlpha),
            null !== this.blendEquationAlpha &&
              (i.blendEquationAlpha = this.blendEquationAlpha),
            this.blendColor &&
              this.blendColor.isColor &&
              (i.blendColor = this.blendColor.getHex()),
            0 !== this.blendAlpha && (i.blendAlpha = this.blendAlpha),
            3 !== this.depthFunc && (i.depthFunc = this.depthFunc),
            !1 === this.depthTest && (i.depthTest = this.depthTest),
            !1 === this.depthWrite && (i.depthWrite = this.depthWrite),
            !1 === this.colorWrite && (i.colorWrite = this.colorWrite),
            255 !== this.stencilWriteMask &&
              (i.stencilWriteMask = this.stencilWriteMask),
            519 !== this.stencilFunc && (i.stencilFunc = this.stencilFunc),
            0 !== this.stencilRef && (i.stencilRef = this.stencilRef),
            255 !== this.stencilFuncMask &&
              (i.stencilFuncMask = this.stencilFuncMask),
            this.stencilFail !== C && (i.stencilFail = this.stencilFail),
            this.stencilZFail !== C && (i.stencilZFail = this.stencilZFail),
            this.stencilZPass !== C && (i.stencilZPass = this.stencilZPass),
            !0 === this.stencilWrite && (i.stencilWrite = this.stencilWrite),
            void 0 !== this.rotation &&
              0 !== this.rotation &&
              (i.rotation = this.rotation),
            !0 === this.polygonOffset && (i.polygonOffset = !0),
            0 !== this.polygonOffsetFactor &&
              (i.polygonOffsetFactor = this.polygonOffsetFactor),
            0 !== this.polygonOffsetUnits &&
              (i.polygonOffsetUnits = this.polygonOffsetUnits),
            void 0 !== this.linewidth &&
              1 !== this.linewidth &&
              (i.linewidth = this.linewidth),
            void 0 !== this.dashSize && (i.dashSize = this.dashSize),
            void 0 !== this.gapSize && (i.gapSize = this.gapSize),
            void 0 !== this.scale && (i.scale = this.scale),
            !0 === this.dithering && (i.dithering = !0),
            this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
            !0 === this.alphaHash && (i.alphaHash = !0),
            !0 === this.alphaToCoverage && (i.alphaToCoverage = !0),
            !0 === this.premultipliedAlpha && (i.premultipliedAlpha = !0),
            !0 === this.forceSinglePass && (i.forceSinglePass = !0),
            !0 === this.wireframe && (i.wireframe = !0),
            this.wireframeLinewidth > 1 &&
              (i.wireframeLinewidth = this.wireframeLinewidth),
            "round" !== this.wireframeLinecap &&
              (i.wireframeLinecap = this.wireframeLinecap),
            "round" !== this.wireframeLinejoin &&
              (i.wireframeLinejoin = this.wireframeLinejoin),
            !0 === this.flatShading && (i.flatShading = !0),
            !1 === this.visible && (i.visible = !1),
            !1 === this.toneMapped && (i.toneMapped = !1),
            !1 === this.fog && (i.fog = !1),
            Object.keys(this.userData).length > 0 &&
              (i.userData = this.userData),
            n)
          ) {
            const e = a(t.textures),
              n = a(t.images);
            e.length > 0 && (i.textures = e), n.length > 0 && (i.images = n);
          }
          return i;
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          (this.name = t.name),
            (this.blending = t.blending),
            (this.side = t.side),
            (this.vertexColors = t.vertexColors),
            (this.opacity = t.opacity),
            (this.transparent = t.transparent),
            (this.blendSrc = t.blendSrc),
            (this.blendDst = t.blendDst),
            (this.blendEquation = t.blendEquation),
            (this.blendSrcAlpha = t.blendSrcAlpha),
            (this.blendDstAlpha = t.blendDstAlpha),
            (this.blendEquationAlpha = t.blendEquationAlpha),
            this.blendColor.copy(t.blendColor),
            (this.blendAlpha = t.blendAlpha),
            (this.depthFunc = t.depthFunc),
            (this.depthTest = t.depthTest),
            (this.depthWrite = t.depthWrite),
            (this.stencilWriteMask = t.stencilWriteMask),
            (this.stencilFunc = t.stencilFunc),
            (this.stencilRef = t.stencilRef),
            (this.stencilFuncMask = t.stencilFuncMask),
            (this.stencilFail = t.stencilFail),
            (this.stencilZFail = t.stencilZFail),
            (this.stencilZPass = t.stencilZPass),
            (this.stencilWrite = t.stencilWrite);
          const e = t.clippingPlanes;
          let n = null;
          if (null !== e) {
            const t = e.length;
            n = new Array(t);
            for (let i = 0; i !== t; ++i) n[i] = e[i].clone();
          }
          return (
            (this.clippingPlanes = n),
            (this.clipIntersection = t.clipIntersection),
            (this.clipShadows = t.clipShadows),
            (this.shadowSide = t.shadowSide),
            (this.colorWrite = t.colorWrite),
            (this.precision = t.precision),
            (this.polygonOffset = t.polygonOffset),
            (this.polygonOffsetFactor = t.polygonOffsetFactor),
            (this.polygonOffsetUnits = t.polygonOffsetUnits),
            (this.dithering = t.dithering),
            (this.alphaTest = t.alphaTest),
            (this.alphaHash = t.alphaHash),
            (this.alphaToCoverage = t.alphaToCoverage),
            (this.premultipliedAlpha = t.premultipliedAlpha),
            (this.forceSinglePass = t.forceSinglePass),
            (this.visible = t.visible),
            (this.toneMapped = t.toneMapped),
            (this.userData = JSON.parse(JSON.stringify(t.userData))),
            this
          );
        }
        dispose() {
          this.dispatchEvent({ type: "dispose" });
        }
        set needsUpdate(t) {
          !0 === t && this.version++;
        }
        onBuild() {
          console.warn("Material: onBuild() has been removed.");
        }
        onBeforeRender() {
          console.warn("Material: onBeforeRender() has been removed.");
        }
      }
      class De extends Ie {
        constructor(t) {
          super(),
            (this.isMeshBasicMaterial = !0),
            (this.type = "MeshBasicMaterial"),
            (this.color = new Ce(16777215)),
            (this.map = null),
            (this.lightMap = null),
            (this.lightMapIntensity = 1),
            (this.aoMap = null),
            (this.aoMapIntensity = 1),
            (this.specularMap = null),
            (this.alphaMap = null),
            (this.envMap = null),
            (this.envMapRotation = new Xt()),
            (this.combine = a),
            (this.reflectivity = 1),
            (this.refractionRatio = 0.98),
            (this.wireframe = !1),
            (this.wireframeLinewidth = 1),
            (this.wireframeLinecap = "round"),
            (this.wireframeLinejoin = "round"),
            (this.fog = !0),
            this.setValues(t);
        }
        copy(t) {
          return (
            super.copy(t),
            this.color.copy(t.color),
            (this.map = t.map),
            (this.lightMap = t.lightMap),
            (this.lightMapIntensity = t.lightMapIntensity),
            (this.aoMap = t.aoMap),
            (this.aoMapIntensity = t.aoMapIntensity),
            (this.specularMap = t.specularMap),
            (this.alphaMap = t.alphaMap),
            (this.envMap = t.envMap),
            this.envMapRotation.copy(t.envMapRotation),
            (this.combine = t.combine),
            (this.reflectivity = t.reflectivity),
            (this.refractionRatio = t.refractionRatio),
            (this.wireframe = t.wireframe),
            (this.wireframeLinewidth = t.wireframeLinewidth),
            (this.wireframeLinecap = t.wireframeLinecap),
            (this.wireframeLinejoin = t.wireframeLinejoin),
            (this.fog = t.fog),
            this
          );
        }
      }
      const Ne = new ct(),
        Re = new V();
      class Le {
        constructor(t, e, n = !1) {
          if (Array.isArray(t))
            throw new TypeError(
              "THREE.BufferAttribute: array should be a Typed Array."
            );
          (this.isBufferAttribute = !0),
            (this.name = ""),
            (this.array = t),
            (this.itemSize = e),
            (this.count = void 0 !== t ? t.length / e : 0),
            (this.normalized = n),
            (this.usage = P),
            (this._updateRange = { offset: 0, count: -1 }),
            (this.updateRanges = []),
            (this.gpuType = h),
            (this.version = 0);
        }
        onUploadCallback() {}
        set needsUpdate(t) {
          !0 === t && this.version++;
        }
        get updateRange() {
          return (
            j(
              "THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."
            ),
            this._updateRange
          );
        }
        setUsage(t) {
          return (this.usage = t), this;
        }
        addUpdateRange(t, e) {
          this.updateRanges.push({ start: t, count: e });
        }
        clearUpdateRanges() {
          this.updateRanges.length = 0;
        }
        copy(t) {
          return (
            (this.name = t.name),
            (this.array = new t.array.constructor(t.array)),
            (this.itemSize = t.itemSize),
            (this.count = t.count),
            (this.normalized = t.normalized),
            (this.usage = t.usage),
            (this.gpuType = t.gpuType),
            this
          );
        }
        copyAt(t, e, n) {
          (t *= this.itemSize), (n *= e.itemSize);
          for (let i = 0, r = this.itemSize; i < r; i++)
            this.array[t + i] = e.array[n + i];
          return this;
        }
        copyArray(t) {
          return this.array.set(t), this;
        }
        applyMatrix3(t) {
          if (2 === this.itemSize)
            for (let e = 0, n = this.count; e < n; e++)
              Re.fromBufferAttribute(this, e),
                Re.applyMatrix3(t),
                this.setXY(e, Re.x, Re.y);
          else if (3 === this.itemSize)
            for (let e = 0, n = this.count; e < n; e++)
              Ne.fromBufferAttribute(this, e),
                Ne.applyMatrix3(t),
                this.setXYZ(e, Ne.x, Ne.y, Ne.z);
          return this;
        }
        applyMatrix4(t) {
          for (let e = 0, n = this.count; e < n; e++)
            Ne.fromBufferAttribute(this, e),
              Ne.applyMatrix4(t),
              this.setXYZ(e, Ne.x, Ne.y, Ne.z);
          return this;
        }
        applyNormalMatrix(t) {
          for (let e = 0, n = this.count; e < n; e++)
            Ne.fromBufferAttribute(this, e),
              Ne.applyNormalMatrix(t),
              this.setXYZ(e, Ne.x, Ne.y, Ne.z);
          return this;
        }
        transformDirection(t) {
          for (let e = 0, n = this.count; e < n; e++)
            Ne.fromBufferAttribute(this, e),
              Ne.transformDirection(t),
              this.setXYZ(e, Ne.x, Ne.y, Ne.z);
          return this;
        }
        set(t, e = 0) {
          return this.array.set(t, e), this;
        }
        getComponent(t, e) {
          let n = this.array[t * this.itemSize + e];
          return this.normalized && (n = B(n, this.array)), n;
        }
        setComponent(t, e, n) {
          return (
            this.normalized && (n = O(n, this.array)),
            (this.array[t * this.itemSize + e] = n),
            this
          );
        }
        getX(t) {
          let e = this.array[t * this.itemSize];
          return this.normalized && (e = B(e, this.array)), e;
        }
        setX(t, e) {
          return (
            this.normalized && (e = O(e, this.array)),
            (this.array[t * this.itemSize] = e),
            this
          );
        }
        getY(t) {
          let e = this.array[t * this.itemSize + 1];
          return this.normalized && (e = B(e, this.array)), e;
        }
        setY(t, e) {
          return (
            this.normalized && (e = O(e, this.array)),
            (this.array[t * this.itemSize + 1] = e),
            this
          );
        }
        getZ(t) {
          let e = this.array[t * this.itemSize + 2];
          return this.normalized && (e = B(e, this.array)), e;
        }
        setZ(t, e) {
          return (
            this.normalized && (e = O(e, this.array)),
            (this.array[t * this.itemSize + 2] = e),
            this
          );
        }
        getW(t) {
          let e = this.array[t * this.itemSize + 3];
          return this.normalized && (e = B(e, this.array)), e;
        }
        setW(t, e) {
          return (
            this.normalized && (e = O(e, this.array)),
            (this.array[t * this.itemSize + 3] = e),
            this
          );
        }
        setXY(t, e, n) {
          return (
            (t *= this.itemSize),
            this.normalized && ((e = O(e, this.array)), (n = O(n, this.array))),
            (this.array[t + 0] = e),
            (this.array[t + 1] = n),
            this
          );
        }
        setXYZ(t, e, n, i) {
          return (
            (t *= this.itemSize),
            this.normalized &&
              ((e = O(e, this.array)),
              (n = O(n, this.array)),
              (i = O(i, this.array))),
            (this.array[t + 0] = e),
            (this.array[t + 1] = n),
            (this.array[t + 2] = i),
            this
          );
        }
        setXYZW(t, e, n, i, r) {
          return (
            (t *= this.itemSize),
            this.normalized &&
              ((e = O(e, this.array)),
              (n = O(n, this.array)),
              (i = O(i, this.array)),
              (r = O(r, this.array))),
            (this.array[t + 0] = e),
            (this.array[t + 1] = n),
            (this.array[t + 2] = i),
            (this.array[t + 3] = r),
            this
          );
        }
        onUpload(t) {
          return (this.onUploadCallback = t), this;
        }
        clone() {
          return new this.constructor(this.array, this.itemSize).copy(this);
        }
        toJSON() {
          const t = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.from(this.array),
            normalized: this.normalized,
          };
          return (
            "" !== this.name && (t.name = this.name),
            this.usage !== P && (t.usage = this.usage),
            t
          );
        }
      }
      class ze extends Le {
        constructor(t, e, n) {
          super(new Uint16Array(t), e, n);
        }
      }
      class Ue extends Le {
        constructor(t, e, n) {
          super(new Uint32Array(t), e, n);
        }
      }
      class Be extends Le {
        constructor(t, e, n) {
          super(new Float32Array(t), e, n);
        }
      }
      let Oe = 0;
      const Ve = new Ot(),
        Fe = new ue(),
        He = new ct(),
        We = new ut(),
        Ge = new ut(),
        qe = new ct();
      class je extends D {
        constructor() {
          super(),
            (this.isBufferGeometry = !0),
            Object.defineProperty(this, "id", { value: Oe++ }),
            (this.uuid = R()),
            (this.name = ""),
            (this.type = "BufferGeometry"),
            (this.index = null),
            (this.attributes = {}),
            (this.morphAttributes = {}),
            (this.morphTargetsRelative = !1),
            (this.groups = []),
            (this.boundingBox = null),
            (this.boundingSphere = null),
            (this.drawRange = { start: 0, count: 1 / 0 }),
            (this.userData = {});
        }
        getIndex() {
          return this.index;
        }
        setIndex(t) {
          return (
            Array.isArray(t)
              ? (this.index = new (W(t) ? Ue : ze)(t, 1))
              : (this.index = t),
            this
          );
        }
        getAttribute(t) {
          return this.attributes[t];
        }
        setAttribute(t, e) {
          return (this.attributes[t] = e), this;
        }
        deleteAttribute(t) {
          return delete this.attributes[t], this;
        }
        hasAttribute(t) {
          return void 0 !== this.attributes[t];
        }
        addGroup(t, e, n = 0) {
          this.groups.push({ start: t, count: e, materialIndex: n });
        }
        clearGroups() {
          this.groups = [];
        }
        setDrawRange(t, e) {
          (this.drawRange.start = t), (this.drawRange.count = e);
        }
        applyMatrix4(t) {
          const e = this.attributes.position;
          void 0 !== e && (e.applyMatrix4(t), (e.needsUpdate = !0));
          const n = this.attributes.normal;
          if (void 0 !== n) {
            const e = new F().getNormalMatrix(t);
            n.applyNormalMatrix(e), (n.needsUpdate = !0);
          }
          const i = this.attributes.tangent;
          return (
            void 0 !== i && (i.transformDirection(t), (i.needsUpdate = !0)),
            null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this
          );
        }
        applyQuaternion(t) {
          return Ve.makeRotationFromQuaternion(t), this.applyMatrix4(Ve), this;
        }
        rotateX(t) {
          return Ve.makeRotationX(t), this.applyMatrix4(Ve), this;
        }
        rotateY(t) {
          return Ve.makeRotationY(t), this.applyMatrix4(Ve), this;
        }
        rotateZ(t) {
          return Ve.makeRotationZ(t), this.applyMatrix4(Ve), this;
        }
        translate(t, e, n) {
          return Ve.makeTranslation(t, e, n), this.applyMatrix4(Ve), this;
        }
        scale(t, e, n) {
          return Ve.makeScale(t, e, n), this.applyMatrix4(Ve), this;
        }
        lookAt(t) {
          return (
            Fe.lookAt(t), Fe.updateMatrix(), this.applyMatrix4(Fe.matrix), this
          );
        }
        center() {
          return (
            this.computeBoundingBox(),
            this.boundingBox.getCenter(He).negate(),
            this.translate(He.x, He.y, He.z),
            this
          );
        }
        setFromPoints(t) {
          const e = [];
          for (let n = 0, i = t.length; n < i; n++) {
            const i = t[n];
            e.push(i.x, i.y, i.z || 0);
          }
          return this.setAttribute("position", new Be(e, 3)), this;
        }
        computeBoundingBox() {
          null === this.boundingBox && (this.boundingBox = new ut());
          const t = this.attributes.position,
            e = this.morphAttributes.position;
          if (t && t.isGLBufferAttribute)
            return (
              console.error(
                "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
                this
              ),
              void this.boundingBox.set(
                new ct(-1 / 0, -1 / 0, -1 / 0),
                new ct(1 / 0, 1 / 0, 1 / 0)
              )
            );
          if (void 0 !== t) {
            if ((this.boundingBox.setFromBufferAttribute(t), e))
              for (let t = 0, n = e.length; t < n; t++) {
                const n = e[t];
                We.setFromBufferAttribute(n),
                  this.morphTargetsRelative
                    ? (qe.addVectors(this.boundingBox.min, We.min),
                      this.boundingBox.expandByPoint(qe),
                      qe.addVectors(this.boundingBox.max, We.max),
                      this.boundingBox.expandByPoint(qe))
                    : (this.boundingBox.expandByPoint(We.min),
                      this.boundingBox.expandByPoint(We.max));
              }
          } else this.boundingBox.makeEmpty();
          (isNaN(this.boundingBox.min.x) ||
            isNaN(this.boundingBox.min.y) ||
            isNaN(this.boundingBox.min.z)) &&
            console.error(
              'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
              this
            );
        }
        computeBoundingSphere() {
          null === this.boundingSphere && (this.boundingSphere = new kt());
          const t = this.attributes.position,
            e = this.morphAttributes.position;
          if (t && t.isGLBufferAttribute)
            return (
              console.error(
                "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
                this
              ),
              void this.boundingSphere.set(new ct(), 1 / 0)
            );
          if (t) {
            const n = this.boundingSphere.center;
            if ((We.setFromBufferAttribute(t), e))
              for (let t = 0, n = e.length; t < n; t++) {
                const n = e[t];
                Ge.setFromBufferAttribute(n),
                  this.morphTargetsRelative
                    ? (qe.addVectors(We.min, Ge.min),
                      We.expandByPoint(qe),
                      qe.addVectors(We.max, Ge.max),
                      We.expandByPoint(qe))
                    : (We.expandByPoint(Ge.min), We.expandByPoint(Ge.max));
              }
            We.getCenter(n);
            let i = 0;
            for (let e = 0, r = t.count; e < r; e++)
              qe.fromBufferAttribute(t, e),
                (i = Math.max(i, n.distanceToSquared(qe)));
            if (e)
              for (let r = 0, a = e.length; r < a; r++) {
                const a = e[r],
                  o = this.morphTargetsRelative;
                for (let e = 0, r = a.count; e < r; e++)
                  qe.fromBufferAttribute(a, e),
                    o && (He.fromBufferAttribute(t, e), qe.add(He)),
                    (i = Math.max(i, n.distanceToSquared(qe)));
              }
            (this.boundingSphere.radius = Math.sqrt(i)),
              isNaN(this.boundingSphere.radius) &&
                console.error(
                  'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
                  this
                );
          }
        }
        computeTangents() {
          const t = this.index,
            e = this.attributes;
          if (
            null === t ||
            void 0 === e.position ||
            void 0 === e.normal ||
            void 0 === e.uv
          )
            return void console.error(
              "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
            );
          const n = e.position,
            i = e.normal,
            r = e.uv;
          !1 === this.hasAttribute("tangent") &&
            this.setAttribute(
              "tangent",
              new Le(new Float32Array(4 * n.count), 4)
            );
          const a = this.getAttribute("tangent"),
            o = [],
            s = [];
          for (let t = 0; t < n.count; t++)
            (o[t] = new ct()), (s[t] = new ct());
          const l = new ct(),
            c = new ct(),
            h = new ct(),
            d = new V(),
            u = new V(),
            f = new V(),
            m = new ct(),
            p = new ct();
          function g(t, e, i) {
            l.fromBufferAttribute(n, t),
              c.fromBufferAttribute(n, e),
              h.fromBufferAttribute(n, i),
              d.fromBufferAttribute(r, t),
              u.fromBufferAttribute(r, e),
              f.fromBufferAttribute(r, i),
              c.sub(l),
              h.sub(l),
              u.sub(d),
              f.sub(d);
            const a = 1 / (u.x * f.y - f.x * u.y);
            isFinite(a) &&
              (m
                .copy(c)
                .multiplyScalar(f.y)
                .addScaledVector(h, -u.y)
                .multiplyScalar(a),
              p
                .copy(h)
                .multiplyScalar(u.x)
                .addScaledVector(c, -f.x)
                .multiplyScalar(a),
              o[t].add(m),
              o[e].add(m),
              o[i].add(m),
              s[t].add(p),
              s[e].add(p),
              s[i].add(p));
          }
          let _ = this.groups;
          0 === _.length && (_ = [{ start: 0, count: t.count }]);
          for (let e = 0, n = _.length; e < n; ++e) {
            const n = _[e],
              i = n.start;
            for (let e = i, r = i + n.count; e < r; e += 3)
              g(t.getX(e + 0), t.getX(e + 1), t.getX(e + 2));
          }
          const v = new ct(),
            y = new ct(),
            x = new ct(),
            w = new ct();
          function S(t) {
            x.fromBufferAttribute(i, t), w.copy(x);
            const e = o[t];
            v.copy(e),
              v.sub(x.multiplyScalar(x.dot(e))).normalize(),
              y.crossVectors(w, e);
            const n = y.dot(s[t]) < 0 ? -1 : 1;
            a.setXYZW(t, v.x, v.y, v.z, n);
          }
          for (let e = 0, n = _.length; e < n; ++e) {
            const n = _[e],
              i = n.start;
            for (let e = i, r = i + n.count; e < r; e += 3)
              S(t.getX(e + 0)), S(t.getX(e + 1)), S(t.getX(e + 2));
          }
        }
        computeVertexNormals() {
          const t = this.index,
            e = this.getAttribute("position");
          if (void 0 !== e) {
            let n = this.getAttribute("normal");
            if (void 0 === n)
              (n = new Le(new Float32Array(3 * e.count), 3)),
                this.setAttribute("normal", n);
            else for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
            const i = new ct(),
              r = new ct(),
              a = new ct(),
              o = new ct(),
              s = new ct(),
              l = new ct(),
              c = new ct(),
              h = new ct();
            if (t)
              for (let d = 0, u = t.count; d < u; d += 3) {
                const u = t.getX(d + 0),
                  f = t.getX(d + 1),
                  m = t.getX(d + 2);
                i.fromBufferAttribute(e, u),
                  r.fromBufferAttribute(e, f),
                  a.fromBufferAttribute(e, m),
                  c.subVectors(a, r),
                  h.subVectors(i, r),
                  c.cross(h),
                  o.fromBufferAttribute(n, u),
                  s.fromBufferAttribute(n, f),
                  l.fromBufferAttribute(n, m),
                  o.add(c),
                  s.add(c),
                  l.add(c),
                  n.setXYZ(u, o.x, o.y, o.z),
                  n.setXYZ(f, s.x, s.y, s.z),
                  n.setXYZ(m, l.x, l.y, l.z);
              }
            else
              for (let t = 0, o = e.count; t < o; t += 3)
                i.fromBufferAttribute(e, t + 0),
                  r.fromBufferAttribute(e, t + 1),
                  a.fromBufferAttribute(e, t + 2),
                  c.subVectors(a, r),
                  h.subVectors(i, r),
                  c.cross(h),
                  n.setXYZ(t + 0, c.x, c.y, c.z),
                  n.setXYZ(t + 1, c.x, c.y, c.z),
                  n.setXYZ(t + 2, c.x, c.y, c.z);
            this.normalizeNormals(), (n.needsUpdate = !0);
          }
        }
        normalizeNormals() {
          const t = this.attributes.normal;
          for (let e = 0, n = t.count; e < n; e++)
            qe.fromBufferAttribute(t, e),
              qe.normalize(),
              t.setXYZ(e, qe.x, qe.y, qe.z);
        }
        toNonIndexed() {
          function t(t, e) {
            const n = t.array,
              i = t.itemSize,
              r = t.normalized,
              a = new n.constructor(e.length * i);
            let o = 0,
              s = 0;
            for (let r = 0, l = e.length; r < l; r++) {
              o = t.isInterleavedBufferAttribute
                ? e[r] * t.data.stride + t.offset
                : e[r] * i;
              for (let t = 0; t < i; t++) a[s++] = n[o++];
            }
            return new Le(a, i, r);
          }
          if (null === this.index)
            return (
              console.warn(
                "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
              ),
              this
            );
          const e = new je(),
            n = this.index.array,
            i = this.attributes;
          for (const r in i) {
            const a = t(i[r], n);
            e.setAttribute(r, a);
          }
          const r = this.morphAttributes;
          for (const i in r) {
            const a = [],
              o = r[i];
            for (let e = 0, i = o.length; e < i; e++) {
              const i = t(o[e], n);
              a.push(i);
            }
            e.morphAttributes[i] = a;
          }
          e.morphTargetsRelative = this.morphTargetsRelative;
          const a = this.groups;
          for (let t = 0, n = a.length; t < n; t++) {
            const n = a[t];
            e.addGroup(n.start, n.count, n.materialIndex);
          }
          return e;
        }
        toJSON() {
          const t = {
            metadata: {
              version: 4.6,
              type: "BufferGeometry",
              generator: "BufferGeometry.toJSON",
            },
          };
          if (
            ((t.uuid = this.uuid),
            (t.type = this.type),
            "" !== this.name && (t.name = this.name),
            Object.keys(this.userData).length > 0 &&
              (t.userData = this.userData),
            void 0 !== this.parameters)
          ) {
            const e = this.parameters;
            for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
            return t;
          }
          t.data = { attributes: {} };
          const e = this.index;
          null !== e &&
            (t.data.index = {
              type: e.array.constructor.name,
              array: Array.prototype.slice.call(e.array),
            });
          const n = this.attributes;
          for (const e in n) {
            const i = n[e];
            t.data.attributes[e] = i.toJSON(t.data);
          }
          const i = {};
          let r = !1;
          for (const e in this.morphAttributes) {
            const n = this.morphAttributes[e],
              a = [];
            for (let e = 0, i = n.length; e < i; e++) {
              const i = n[e];
              a.push(i.toJSON(t.data));
            }
            a.length > 0 && ((i[e] = a), (r = !0));
          }
          r &&
            ((t.data.morphAttributes = i),
            (t.data.morphTargetsRelative = this.morphTargetsRelative));
          const a = this.groups;
          a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
          const o = this.boundingSphere;
          return (
            null !== o &&
              (t.data.boundingSphere = {
                center: o.center.toArray(),
                radius: o.radius,
              }),
            t
          );
        }
        clone() {
          return new this.constructor().copy(this);
        }
        copy(t) {
          (this.index = null),
            (this.attributes = {}),
            (this.morphAttributes = {}),
            (this.groups = []),
            (this.boundingBox = null),
            (this.boundingSphere = null);
          const e = {};
          this.name = t.name;
          const n = t.index;
          null !== n && this.setIndex(n.clone(e));
          const i = t.attributes;
          for (const t in i) {
            const n = i[t];
            this.setAttribute(t, n.clone(e));
          }
          const r = t.morphAttributes;
          for (const t in r) {
            const n = [],
              i = r[t];
            for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
            this.morphAttributes[t] = n;
          }
          this.morphTargetsRelative = t.morphTargetsRelative;
          const a = t.groups;
          for (let t = 0, e = a.length; t < e; t++) {
            const e = a[t];
            this.addGroup(e.start, e.count, e.materialIndex);
          }
          const o = t.boundingBox;
          null !== o && (this.boundingBox = o.clone());
          const s = t.boundingSphere;
          return (
            null !== s && (this.boundingSphere = s.clone()),
            (this.drawRange.start = t.drawRange.start),
            (this.drawRange.count = t.drawRange.count),
            (this.userData = t.userData),
            this
          );
        }
        dispose() {
          this.dispatchEvent({ type: "dispose" });
        }
      }
      const Ze = new Ot(),
        Ye = new Bt(),
        Xe = new kt(),
        Je = new ct(),
        Qe = new ct(),
        Ke = new ct(),
        $e = new ct(),
        tn = new ct(),
        en = new ct(),
        nn = new V(),
        rn = new V(),
        an = new V(),
        on = new ct(),
        sn = new ct(),
        ln = new ct(),
        cn = new ct(),
        hn = new ct();
      class dn extends ue {
        constructor(t = new je(), e = new De()) {
          super(),
            (this.isMesh = !0),
            (this.type = "Mesh"),
            (this.geometry = t),
            (this.material = e),
            this.updateMorphTargets();
        }
        copy(t, e) {
          return (
            super.copy(t, e),
            void 0 !== t.morphTargetInfluences &&
              (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
            void 0 !== t.morphTargetDictionary &&
              (this.morphTargetDictionary = Object.assign(
                {},
                t.morphTargetDictionary
              )),
            (this.material = Array.isArray(t.material)
              ? t.material.slice()
              : t.material),
            (this.geometry = t.geometry),
            this
          );
        }
        updateMorphTargets() {
          const t = this.geometry.morphAttributes,
            e = Object.keys(t);
          if (e.length > 0) {
            const n = t[e[0]];
            if (void 0 !== n) {
              (this.morphTargetInfluences = []),
                (this.morphTargetDictionary = {});
              for (let t = 0, e = n.length; t < e; t++) {
                const e = n[t].name || String(t);
                this.morphTargetInfluences.push(0),
                  (this.morphTargetDictionary[e] = t);
              }
            }
          }
        }
        getVertexPosition(t, e) {
          const n = this.geometry,
            i = n.attributes.position,
            r = n.morphAttributes.position,
            a = n.morphTargetsRelative;
          e.fromBufferAttribute(i, t);
          const o = this.morphTargetInfluences;
          if (r && o) {
            en.set(0, 0, 0);
            for (let n = 0, i = r.length; n < i; n++) {
              const i = o[n],
                s = r[n];
              0 !== i &&
                (tn.fromBufferAttribute(s, t),
                a
                  ? en.addScaledVector(tn, i)
                  : en.addScaledVector(tn.sub(e), i));
            }
            e.add(en);
          }
          return e;
        }
        raycast(t, e) {
          const n = this.geometry,
            i = this.material,
            r = this.matrixWorld;
          if (void 0 !== i) {
            if (
              (null === n.boundingSphere && n.computeBoundingSphere(),
              Xe.copy(n.boundingSphere),
              Xe.applyMatrix4(r),
              Ye.copy(t.ray).recast(t.near),
              !1 === Xe.containsPoint(Ye.origin))
            ) {
              if (null === Ye.intersectSphere(Xe, Je)) return;
              if (Ye.origin.distanceToSquared(Je) > (t.far - t.near) ** 2)
                return;
            }
            Ze.copy(r).invert(),
              Ye.copy(t.ray).applyMatrix4(Ze),
              (null !== n.boundingBox &&
                !1 === Ye.intersectsBox(n.boundingBox)) ||
                this._computeIntersections(t, e, Ye);
          }
        }
        _computeIntersections(t, e, n) {
          let i;
          const r = this.geometry,
            a = this.material,
            o = r.index,
            s = r.attributes.position,
            l = r.attributes.uv,
            c = r.attributes.uv1,
            h = r.attributes.normal,
            d = r.groups,
            u = r.drawRange;
          if (null !== o)
            if (Array.isArray(a))
              for (let r = 0, s = d.length; r < s; r++) {
                const s = d[r],
                  f = a[s.materialIndex];
                for (
                  let r = Math.max(s.start, u.start),
                    a = Math.min(
                      o.count,
                      Math.min(s.start + s.count, u.start + u.count)
                    );
                  r < a;
                  r += 3
                ) {
                  (i = un(
                    this,
                    f,
                    t,
                    n,
                    l,
                    c,
                    h,
                    o.getX(r),
                    o.getX(r + 1),
                    o.getX(r + 2)
                  )),
                    i &&
                      ((i.faceIndex = Math.floor(r / 3)),
                      (i.face.materialIndex = s.materialIndex),
                      e.push(i));
                }
              }
            else {
              for (
                let r = Math.max(0, u.start),
                  s = Math.min(o.count, u.start + u.count);
                r < s;
                r += 3
              ) {
                (i = un(
                  this,
                  a,
                  t,
                  n,
                  l,
                  c,
                  h,
                  o.getX(r),
                  o.getX(r + 1),
                  o.getX(r + 2)
                )),
                  i && ((i.faceIndex = Math.floor(r / 3)), e.push(i));
              }
            }
          else if (void 0 !== s)
            if (Array.isArray(a))
              for (let r = 0, o = d.length; r < o; r++) {
                const o = d[r],
                  f = a[o.materialIndex];
                for (
                  let r = Math.max(o.start, u.start),
                    a = Math.min(
                      s.count,
                      Math.min(o.start + o.count, u.start + u.count)
                    );
                  r < a;
                  r += 3
                ) {
                  (i = un(this, f, t, n, l, c, h, r, r + 1, r + 2)),
                    i &&
                      ((i.faceIndex = Math.floor(r / 3)),
                      (i.face.materialIndex = o.materialIndex),
                      e.push(i));
                }
              }
            else {
              for (
                let r = Math.max(0, u.start),
                  o = Math.min(s.count, u.start + u.count);
                r < o;
                r += 3
              ) {
                (i = un(this, a, t, n, l, c, h, r, r + 1, r + 2)),
                  i && ((i.faceIndex = Math.floor(r / 3)), e.push(i));
              }
            }
        }
      }
      function un(t, n, r, a, o, s, l, c, h, d) {
        t.getVertexPosition(c, Qe),
          t.getVertexPosition(h, Ke),
          t.getVertexPosition(d, $e);
        const u = (function (t, n, r, a, o, s, l, c) {
          let h;
          if (
            ((h =
              n.side === i
                ? a.intersectTriangle(l, s, o, !0, c)
                : a.intersectTriangle(o, s, l, n.side === e, c)),
            null === h)
          )
            return null;
          hn.copy(c), hn.applyMatrix4(t.matrixWorld);
          const d = r.ray.origin.distanceTo(hn);
          return d < r.near || d > r.far
            ? null
            : { distance: d, point: hn.clone(), object: t };
        })(t, n, r, a, Qe, Ke, $e, cn);
        if (u) {
          o &&
            (nn.fromBufferAttribute(o, c),
            rn.fromBufferAttribute(o, h),
            an.fromBufferAttribute(o, d),
            (u.uv = be.getInterpolation(cn, Qe, Ke, $e, nn, rn, an, new V()))),
            s &&
              (nn.fromBufferAttribute(s, c),
              rn.fromBufferAttribute(s, h),
              an.fromBufferAttribute(s, d),
              (u.uv1 = be.getInterpolation(
                cn,
                Qe,
                Ke,
                $e,
                nn,
                rn,
                an,
                new V()
              ))),
            l &&
              (on.fromBufferAttribute(l, c),
              sn.fromBufferAttribute(l, h),
              ln.fromBufferAttribute(l, d),
              (u.normal = be.getInterpolation(
                cn,
                Qe,
                Ke,
                $e,
                on,
                sn,
                ln,
                new ct()
              )),
              u.normal.dot(a.direction) > 0 && u.normal.multiplyScalar(-1));
          const t = { a: c, b: h, c: d, normal: new ct(), materialIndex: 0 };
          be.getNormal(Qe, Ke, $e, t.normal), (u.face = t);
        }
        return u;
      }
      function fn(t) {
        const e = {};
        for (const n in t) {
          e[n] = {};
          for (const i in t[n]) {
            const r = t[n][i];
            r &&
            (r.isColor ||
              r.isMatrix3 ||
              r.isMatrix4 ||
              r.isVector2 ||
              r.isVector3 ||
              r.isVector4 ||
              r.isTexture ||
              r.isQuaternion)
              ? r.isRenderTargetTexture
                ? (console.warn(
                    "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
                  ),
                  (e[n][i] = null))
                : (e[n][i] = r.clone())
              : Array.isArray(r)
              ? (e[n][i] = r.slice())
              : (e[n][i] = r);
          }
        }
        return e;
      }
      function mn(t) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
          const i = fn(t[n]);
          for (const t in i) e[t] = i[t];
        }
        return e;
      }
      const pn = new ct(),
        gn = new ct(),
        _n = new F();
      class vn {
        constructor(t = new ct(1, 0, 0), e = 0) {
          (this.isPlane = !0), (this.normal = t), (this.constant = e);
        }
        set(t, e) {
          return this.normal.copy(t), (this.constant = e), this;
        }
        setComponents(t, e, n, i) {
          return this.normal.set(t, e, n), (this.constant = i), this;
        }
        setFromNormalAndCoplanarPoint(t, e) {
          return (
            this.normal.copy(t), (this.constant = -e.dot(this.normal)), this
          );
        }
        setFromCoplanarPoints(t, e, n) {
          const i = pn.subVectors(n, e).cross(gn.subVectors(t, e)).normalize();
          return this.setFromNormalAndCoplanarPoint(i, t), this;
        }
        copy(t) {
          return this.normal.copy(t.normal), (this.constant = t.constant), this;
        }
        normalize() {
          const t = 1 / this.normal.length();
          return this.normal.multiplyScalar(t), (this.constant *= t), this;
        }
        negate() {
          return (this.constant *= -1), this.normal.negate(), this;
        }
        distanceToPoint(t) {
          return this.normal.dot(t) + this.constant;
        }
        distanceToSphere(t) {
          return this.distanceToPoint(t.center) - t.radius;
        }
        projectPoint(t, e) {
          return e
            .copy(t)
            .addScaledVector(this.normal, -this.distanceToPoint(t));
        }
        intersectLine(t, e) {
          const n = t.delta(pn),
            i = this.normal.dot(n);
          if (0 === i)
            return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
          const r = -(t.start.dot(this.normal) + this.constant) / i;
          return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r);
        }
        intersectsLine(t) {
          const e = this.distanceToPoint(t.start),
            n = this.distanceToPoint(t.end);
          return (e < 0 && n > 0) || (n < 0 && e > 0);
        }
        intersectsBox(t) {
          return t.intersectsPlane(this);
        }
        intersectsSphere(t) {
          return t.intersectsPlane(this);
        }
        coplanarPoint(t) {
          return t.copy(this.normal).multiplyScalar(-this.constant);
        }
        applyMatrix4(t, e) {
          const n = e || _n.getNormalMatrix(t),
            i = this.coplanarPoint(pn).applyMatrix4(t),
            r = this.normal.applyMatrix3(n).normalize();
          return (this.constant = -i.dot(r)), this;
        }
        translate(t) {
          return (this.constant -= t.dot(this.normal)), this;
        }
        equals(t) {
          return t.normal.equals(this.normal) && t.constant === this.constant;
        }
        clone() {
          return new this.constructor().copy(this);
        }
      }
      const yn = {
          alphahash_fragment:
            "#ifdef USE_ALPHAHASH\n\tif ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
          alphahash_pars_fragment:
            "#ifdef USE_ALPHAHASH\n\tconst float ALPHA_HASH_SCALE = 0.05;\n\tfloat hash2D( vec2 value ) {\n\t\treturn fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n\t}\n\tfloat hash3D( vec3 value ) {\n\t\treturn hash2D( vec2( hash2D( value.xy ), value.z ) );\n\t}\n\tfloat getAlphaHashThreshold( vec3 position ) {\n\t\tfloat maxDeriv = max(\n\t\t\tlength( dFdx( position.xyz ) ),\n\t\t\tlength( dFdy( position.xyz ) )\n\t\t);\n\t\tfloat pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n\t\tvec2 pixScales = vec2(\n\t\t\texp2( floor( log2( pixScale ) ) ),\n\t\t\texp2( ceil( log2( pixScale ) ) )\n\t\t);\n\t\tvec2 alpha = vec2(\n\t\t\thash3D( floor( pixScales.x * position.xyz ) ),\n\t\t\thash3D( floor( pixScales.y * position.xyz ) )\n\t\t);\n\t\tfloat lerpFactor = fract( log2( pixScale ) );\n\t\tfloat x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n\t\tfloat a = min( lerpFactor, 1.0 - lerpFactor );\n\t\tvec3 cases = vec3(\n\t\t\tx * x / ( 2.0 * a * ( 1.0 - a ) ),\n\t\t\t( x - 0.5 * a ) / ( 1.0 - a ),\n\t\t\t1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n\t\t);\n\t\tfloat threshold = ( x < ( 1.0 - a ) )\n\t\t\t? ( ( x < a ) ? cases.x : cases.y )\n\t\t\t: cases.z;\n\t\treturn clamp( threshold , 1.0e-6, 1.0 );\n\t}\n#endif",
          alphamap_fragment:
            "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
          alphamap_pars_fragment:
            "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
          alphatest_fragment:
            "#ifdef USE_ALPHATEST\n\t#ifdef ALPHA_TO_COVERAGE\n\tdiffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\tif ( diffuseColor.a < alphaTest ) discard;\n\t#endif\n#endif",
          alphatest_pars_fragment:
            "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
          aomap_fragment:
            "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_CLEARCOAT ) \n\t\tclearcoatSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_SHEEN ) \n\t\tsheenSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
          aomap_pars_fragment:
            "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
          batching_pars_vertex:
            "#ifdef USE_BATCHING\n\t#if ! defined( GL_ANGLE_multi_draw )\n\t#define gl_DrawID _gl_DrawID\n\tuniform int _gl_DrawID;\n\t#endif\n\tuniform highp sampler2D batchingTexture;\n\tuniform highp usampler2D batchingIdTexture;\n\tmat4 getBatchingMatrix( const in float i ) {\n\t\tint size = textureSize( batchingTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n\tfloat getIndirectIndex( const in int i ) {\n\t\tint size = textureSize( batchingIdTexture, 0 ).x;\n\t\tint x = i % size;\n\t\tint y = i / size;\n\t\treturn float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n\t}\n#endif\n#ifdef USE_BATCHING_COLOR\n\tuniform sampler2D batchingColorTexture;\n\tvec3 getBatchingColor( const in float i ) {\n\t\tint size = textureSize( batchingColorTexture, 0 ).x;\n\t\tint j = int( i );\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\treturn texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n\t}\n#endif",
          batching_vertex:
            "#ifdef USE_BATCHING\n\tmat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
          begin_vertex:
            "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n\tvPosition = vec3( position );\n#endif",
          beginnormal_vertex:
            "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
          bsdfs:
            "float G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n} // validated",
          iridescence_fragment:
            "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\treturn vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",
          bumpmap_pars_fragment:
            "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vBumpMapUv );\n\t\tvec2 dSTdy = dFdy( vBumpMapUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n\t\tvec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
          clipping_planes_fragment:
            "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#ifdef ALPHA_TO_COVERAGE\n\t\tfloat distanceToPlane, distanceGradient;\n\t\tfloat clipOpacity = 1.0;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\tclipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\tif ( clipOpacity == 0.0 ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tfloat unionClipOpacity = 1.0;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\t\tunionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tclipOpacity *= 1.0 - unionClipOpacity;\n\t\t#endif\n\t\tdiffuseColor.a *= clipOpacity;\n\t\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tbool clipped = true;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tif ( clipped ) discard;\n\t\t#endif\n\t#endif\n#endif",
          clipping_planes_pars_fragment:
            "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
          clipping_planes_pars_vertex:
            "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
          clipping_planes_vertex:
            "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
          color_fragment:
            "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
          color_pars_fragment:
            "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
          color_pars_vertex:
            "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\tvarying vec3 vColor;\n#endif",
          color_vertex:
            "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n\tvec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n\tvColor.xyz *= batchingColor.xyz;\n#endif",
          common:
            "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n\tvarying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
          cube_uv_reflection_fragment:
            "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
          defaultnormal_vertex:
            "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n\tmat3 bm = mat3( batchingMatrix );\n\ttransformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n\ttransformedNormal = bm * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = bm * transformedTangent;\n\t#endif\n#endif\n#ifdef USE_INSTANCING\n\tmat3 im = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n\ttransformedNormal = im * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = im * transformedTangent;\n\t#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\ttransformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
          displacementmap_pars_vertex:
            "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
          displacementmap_vertex:
            "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
          emissivemap_fragment:
            "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
          emissivemap_pars_fragment:
            "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
          colorspace_fragment:
            "gl_FragColor = linearToOutputTexel( gl_FragColor );",
          colorspace_pars_fragment:
            "\nconst mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(\n\tvec3( 0.8224621, 0.177538, 0.0 ),\n\tvec3( 0.0331941, 0.9668058, 0.0 ),\n\tvec3( 0.0170827, 0.0723974, 0.9105199 )\n);\nconst mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.2249401, - 0.2249404, 0.0 ),\n\tvec3( - 0.0420569, 1.0420571, 0.0 ),\n\tvec3( - 0.0196376, - 0.0786361, 1.0982735 )\n);\nvec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );\n}\nvec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {\n\treturn vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );\n}\nvec4 LinearTransferOETF( in vec4 value ) {\n\treturn value;\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn sRGBTransferOETF( value );\n}",
          envmap_fragment:
            "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
          envmap_common_pars_fragment:
            "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform mat3 envMapRotation;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
          envmap_pars_fragment:
            "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
          envmap_pars_vertex:
            "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
          envmap_physical_pars_fragment:
            "#ifdef USE_ENVMAP\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\t#ifdef USE_ANISOTROPY\n\t\tvec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n\t\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\t\tvec3 bentNormal = cross( bitangent, viewDir );\n\t\t\t\tbentNormal = normalize( cross( bentNormal, bitangent ) );\n\t\t\t\tbentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n\t\t\t\treturn getIBLRadiance( viewDir, bentNormal, roughness );\n\t\t\t#else\n\t\t\t\treturn vec3( 0.0 );\n\t\t\t#endif\n\t\t}\n\t#endif\n#endif",
          envmap_vertex:
            "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
          fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
          fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
          fog_fragment:
            "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
          fog_pars_fragment:
            "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
          gradientmap_pars_fragment:
            "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",
          lightmap_pars_fragment:
            "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
          lights_lambert_fragment:
            "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
          lights_lambert_pars_fragment:
            "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert",
          lights_pars_begin:
            "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n\tuniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif ( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
          lights_toon_fragment:
            "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
          lights_toon_pars_fragment:
            "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon",
          lights_phong_fragment:
            "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
          lights_phong_pars_fragment:
            "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong",
          lights_physical_fragment:
            "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef USE_SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULAR_COLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n\t\t#endif\n\t\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n\tmaterial.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\t#ifdef USE_ANISOTROPYMAP\n\t\tmat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n\t\tvec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n\t\tvec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n\t#else\n\t\tvec2 anisotropyV = anisotropyVector;\n\t#endif\n\tmaterial.anisotropy = length( anisotropyV );\n\tif( material.anisotropy == 0.0 ) {\n\t\tanisotropyV = vec2( 1.0, 0.0 );\n\t} else {\n\t\tanisotropyV /= material.anisotropy;\n\t\tmaterial.anisotropy = saturate( material.anisotropy );\n\t}\n\tmaterial.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n\tmaterial.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n\tmaterial.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
          lights_physical_pars_fragment:
            "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\tfloat dispersion;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat anisotropy;\n\t\tfloat alphaT;\n\t\tvec3 anisotropyT;\n\t\tvec3 anisotropyB;\n\t#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n\tfloat V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n\t\tfloat gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n\t\tfloat gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n\t\tfloat v = 0.5 / ( gv + gl );\n\t\treturn saturate(v);\n\t}\n\tfloat D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n\t\tfloat a2 = alphaT * alphaB;\n\t\thighp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n\t\thighp float v2 = dot( v, v );\n\t\tfloat w2 = a2 / v2;\n\t\treturn RECIPROCAL_PI * a2 * pow2 ( w2 );\n\t}\n#endif\n#ifdef USE_CLEARCOAT\n\tvec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n\t\tvec3 f0 = material.clearcoatF0;\n\t\tfloat f90 = material.clearcoatF90;\n\t\tfloat roughness = material.clearcoatRoughness;\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n\tvec3 f0 = material.specularColor;\n\tfloat f90 = material.specularF90;\n\tfloat roughness = material.roughness;\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t#ifdef USE_IRIDESCENCE\n\t\tF = mix( F, material.iridescenceFresnel, material.iridescence );\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat dotTL = dot( material.anisotropyT, lightDir );\n\t\tfloat dotTV = dot( material.anisotropyT, viewDir );\n\t\tfloat dotTH = dot( material.anisotropyT, halfDir );\n\t\tfloat dotBL = dot( material.anisotropyB, lightDir );\n\t\tfloat dotBV = dot( material.anisotropyB, viewDir );\n\t\tfloat dotBH = dot( material.anisotropyB, halfDir );\n\t\tfloat V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n\t\tfloat D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n\t#else\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t#endif\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometryNormal;\n\t\tvec3 viewDir = geometryViewDir;\n\t\tvec3 position = geometryPosition;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
          lights_fragment_begin:
            "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n\tgeometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometryViewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometryPosition, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometryPosition, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if defined( USE_LIGHT_PROBES )\n\t\tirradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
          lights_fragment_maps:
            "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometryNormal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\t#ifdef USE_ANISOTROPY\n\t\tradiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n\t#else\n\t\tradiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
          lights_fragment_end:
            "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
          logdepthbuf_fragment:
            "#if defined( USE_LOGDEPTHBUF )\n\tgl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
          logdepthbuf_pars_fragment:
            "#if defined( USE_LOGDEPTHBUF )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
          logdepthbuf_pars_vertex:
            "#ifdef USE_LOGDEPTHBUF\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
          logdepthbuf_vertex:
            "#ifdef USE_LOGDEPTHBUF\n\tvFragDepth = 1.0 + gl_Position.w;\n\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
          map_fragment:
            "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vMapUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
          map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
          map_particle_fragment:
            "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t#if defined( USE_POINTS_UV )\n\t\tvec2 uv = vUv;\n\t#else\n\t\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
          map_particle_pars_fragment:
            "#if defined( USE_POINTS_UV )\n\tvarying vec2 vUv;\n#else\n\t#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t\tuniform mat3 uvTransform;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
          metalnessmap_fragment:
            "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
          metalnessmap_pars_fragment:
            "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
          morphinstance_vertex:
            "#ifdef USE_INSTANCING_MORPH\n\tfloat morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\tfloat morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tmorphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n\t}\n#endif",
          morphcolor_vertex:
            "#if defined( USE_MORPHCOLORS )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
          morphnormal_vertex:
            "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t}\n#endif",
          morphtarget_pars_vertex:
            "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_INSTANCING_MORPH\n\t\tuniform float morphTargetBaseInfluence;\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t#endif\n\tuniform sampler2DArray morphTargetsTexture;\n\tuniform ivec2 morphTargetsTextureSize;\n\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t}\n#endif",
          morphtarget_vertex:
            "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t}\n#endif",
          normal_fragment_begin:
            "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal *= faceDirection;\n\t#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn = getTangentFrame( - vViewPosition, normal,\n\t\t#if defined( USE_NORMALMAP )\n\t\t\tvNormalMapUv\n\t\t#elif defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tvClearcoatNormalMapUv\n\t\t#else\n\t\t\tvUv\n\t\t#endif\n\t\t);\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn[0] *= faceDirection;\n\t\ttbn[1] *= faceDirection;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn2[0] *= faceDirection;\n\t\ttbn2[1] *= faceDirection;\n\t#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
          normal_fragment_maps:
            "#ifdef USE_NORMALMAP_OBJECTSPACE\n\tnormal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n\tvec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\tnormal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
          normal_pars_fragment:
            "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
          normal_pars_vertex:
            "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
          normal_vertex:
            "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
          normalmap_pars_fragment:
            "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n\tmat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( uv.st );\n\t\tvec2 st1 = dFdy( uv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n\t\treturn mat3( T * scale, B * scale, N );\n\t}\n#endif",
          clearcoat_normal_fragment_begin:
            "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
          clearcoat_normal_fragment_maps:
            "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\tclearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
          clearcoat_pars_fragment:
            "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif",
          iridescence_pars_fragment:
            "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",
          opaque_fragment:
            "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
          packing:
            "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * depth - far );\n}",
          premultiplied_alpha_fragment:
            "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
          project_vertex:
            "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n\tmvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
          dithering_fragment:
            "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
          dithering_pars_fragment:
            "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
          roughnessmap_fragment:
            "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
          roughnessmap_pars_fragment:
            "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
          shadowmap_pars_fragment:
            "#if NUM_SPOT_LIGHT_COORDS > 0\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn mix( 1.0, shadow, shadowIntensity );\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tfloat shadow = 1.0;\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\t\n\t\tfloat lightToPositionLength = length( lightToPosition );\n\t\tif ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n\t\t\tfloat dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\t\tdp += shadowBias;\n\t\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\t\tshadow = (\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t\t) * ( 1.0 / 9.0 );\n\t\t\t#else\n\t\t\t\tshadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t\t#endif\n\t\t}\n\t\treturn mix( 1.0, shadow, shadowIntensity );\n\t}\n#endif",
          shadowmap_pars_vertex:
            "#if NUM_SPOT_LIGHT_COORDS > 0\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
          shadowmap_vertex:
            "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n#endif",
          shadowmask_pars_fragment:
            "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
          skinbase_vertex:
            "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
          skinning_pars_vertex:
            "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tint size = textureSize( boneTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n#endif",
          skinning_vertex:
            "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
          skinnormal_vertex:
            "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
          specularmap_fragment:
            "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
          specularmap_pars_fragment:
            "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
          tonemapping_fragment:
            "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
          tonemapping_pars_fragment:
            "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.6605, - 0.1246, - 0.0182 ),\n\tvec3( - 0.5876, 1.1329, - 0.1006 ),\n\tvec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n\tvec3( 0.6274, 0.0691, 0.0164 ),\n\tvec3( 0.3293, 0.9195, 0.0880 ),\n\tvec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n\tvec3 x2 = x * x;\n\tvec3 x4 = x2 * x2;\n\treturn + 15.5 * x4 * x2\n\t\t- 40.14 * x4 * x\n\t\t+ 31.96 * x4\n\t\t- 6.868 * x2 * x\n\t\t+ 0.4298 * x2\n\t\t+ 0.1191 * x\n\t\t- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n\tconst mat3 AgXInsetMatrix = mat3(\n\t\tvec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n\t\tvec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n\t\tvec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n\t);\n\tconst mat3 AgXOutsetMatrix = mat3(\n\t\tvec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n\t\tvec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n\t\tvec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n\t);\n\tconst float AgxMinEv = - 12.47393;\tconst float AgxMaxEv = 4.026069;\n\tcolor *= toneMappingExposure;\n\tcolor = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n\tcolor = AgXInsetMatrix * color;\n\tcolor = max( color, 1e-10 );\tcolor = log2( color );\n\tcolor = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n\tcolor = clamp( color, 0.0, 1.0 );\n\tcolor = agxDefaultContrastApprox( color );\n\tcolor = AgXOutsetMatrix * color;\n\tcolor = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n\tcolor = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n\tcolor = clamp( color, 0.0, 1.0 );\n\treturn color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n\tconst float StartCompression = 0.8 - 0.04;\n\tconst float Desaturation = 0.15;\n\tcolor *= toneMappingExposure;\n\tfloat x = min( color.r, min( color.g, color.b ) );\n\tfloat offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n\tcolor -= offset;\n\tfloat peak = max( color.r, max( color.g, color.b ) );\n\tif ( peak < StartCompression ) return color;\n\tfloat d = 1. - StartCompression;\n\tfloat newPeak = 1. - d * d / ( peak + d - StartCompression );\n\tcolor *= newPeak / peak;\n\tfloat g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n\treturn mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
          transmission_fragment:
            "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmitted = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
          transmission_pars_fragment:
            "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tfloat w0( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\t}\n\tfloat w1( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\t}\n\tfloat w2( float a ){\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\t}\n\tfloat w3( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * a * a );\n\t}\n\tfloat g0( float a ) {\n\t\treturn w0( a ) + w1( a );\n\t}\n\tfloat g1( float a ) {\n\t\treturn w2( a ) + w3( a );\n\t}\n\tfloat h0( float a ) {\n\t\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\t}\n\tfloat h1( float a ) {\n\t\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\t}\n\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n\t\tuv = uv * texelSize.zw + 0.5;\n\t\tvec2 iuv = floor( uv );\n\t\tvec2 fuv = fract( uv );\n\t\tfloat g0x = g0( fuv.x );\n\t\tfloat g1x = g1( fuv.x );\n\t\tfloat h0x = h0( fuv.x );\n\t\tfloat h1x = h1( fuv.x );\n\t\tfloat h0y = h0( fuv.y );\n\t\tfloat h1y = h1( fuv.y );\n\t\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n\t\t\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\t}\n\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\t\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n\t\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n\t\tvec2 fLodSizeInv = 1.0 / fLodSize;\n\t\tvec2 cLodSizeInv = 1.0 / cLodSize;\n\t\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n\t\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n\t\treturn mix( fSample, cSample, fract( lod ) );\n\t}\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\t}\n\tvec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn vec3( 1.0 );\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec4 transmittedLight;\n\t\tvec3 transmittance;\n\t\t#ifdef USE_DISPERSION\n\t\t\tfloat halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n\t\t\tvec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n\t\t\tfor ( int i = 0; i < 3; i ++ ) {\n\t\t\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n\t\t\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\t\n\t\t\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\t\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\t\t\trefractionCoords += 1.0;\n\t\t\t\trefractionCoords /= 2.0;\n\t\t\n\t\t\t\tvec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n\t\t\t\ttransmittedLight[ i ] = transmissionSample[ i ];\n\t\t\t\ttransmittedLight.a += transmissionSample.a;\n\t\t\t\ttransmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n\t\t\t}\n\t\t\ttransmittedLight.a /= 3.0;\n\t\t\n\t\t#else\n\t\t\n\t\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\t\trefractionCoords += 1.0;\n\t\t\trefractionCoords /= 2.0;\n\t\t\ttransmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\t\ttransmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\t\n\t\t#endif\n\t\tvec3 attenuatedColor = transmittance * transmittedLight.rgb;\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\tfloat transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n\t}\n#endif",
          uv_pars_fragment:
            "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
          uv_pars_vertex:
            "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tuniform mat3 mapTransform;\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform mat3 alphaMapTransform;\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tuniform mat3 lightMapTransform;\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tuniform mat3 aoMapTransform;\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tuniform mat3 bumpMapTransform;\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tuniform mat3 normalMapTransform;\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tuniform mat3 displacementMapTransform;\n\tvarying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tuniform mat3 emissiveMapTransform;\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tuniform mat3 metalnessMapTransform;\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tuniform mat3 roughnessMapTransform;\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tuniform mat3 anisotropyMapTransform;\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tuniform mat3 clearcoatMapTransform;\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform mat3 clearcoatNormalMapTransform;\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform mat3 clearcoatRoughnessMapTransform;\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tuniform mat3 sheenColorMapTransform;\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tuniform mat3 sheenRoughnessMapTransform;\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tuniform mat3 iridescenceMapTransform;\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform mat3 iridescenceThicknessMapTransform;\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tuniform mat3 specularMapTransform;\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tuniform mat3 specularColorMapTransform;\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tuniform mat3 specularIntensityMapTransform;\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
          uv_vertex:
            "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n\tvMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n\tvAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n\tvLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n\tvAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n\tvBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n\tvNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tvDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n\tvMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n\tvSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tvTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n\tvThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
          worldpos_vertex:
            "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_BATCHING\n\t\tworldPosition = batchingMatrix * worldPosition;\n\t#endif\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
          background_vert:
            "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
          background_frag:
            "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\ttexColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
          backgroundCube_vert:
            "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
          backgroundCube_frag:
            "#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
          cube_vert:
            "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
          cube_frag:
            "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
          depth_vert:
            "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
          depth_frag:
            "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
          distanceRGBA_vert:
            "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
          distanceRGBA_frag:
            "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
          equirect_vert:
            "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
          equirect_frag:
            "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
          linedashed_vert:
            "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
          linedashed_frag:
            "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
          meshbasic_vert:
            "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
          meshbasic_frag:
            "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshlambert_vert:
            "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          meshlambert_frag:
            "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshmatcap_vert:
            "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
          meshmatcap_frag:
            "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshnormal_vert:
            "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
          meshnormal_frag:
            "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
          meshphong_vert:
            "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          meshphong_frag:
            "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshphysical_vert:
            "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
          meshphysical_frag:
            "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef USE_SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULAR_COLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n\tuniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\tuniform vec2 anisotropyVector;\n\t#ifdef USE_ANISOTROPYMAP\n\t\tuniform sampler2D anisotropyMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n\t#endif\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshtoon_vert:
            "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          meshtoon_frag:
            "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          points_vert:
            "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\nvoid main() {\n\t#ifdef USE_POINTS_UV\n\t\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\t#endif\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
          points_frag:
            "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
          shadow_vert:
            "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          shadow_frag:
            "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}",
          sprite_vert:
            "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
          sprite_frag:
            "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}",
        },
        xn = {
          common: {
            diffuse: { value: new Ce(16777215) },
            opacity: { value: 1 },
            map: { value: null },
            mapTransform: { value: new F() },
            alphaMap: { value: null },
            alphaMapTransform: { value: new F() },
            alphaTest: { value: 0 },
          },
          specularmap: {
            specularMap: { value: null },
            specularMapTransform: { value: new F() },
          },
          envmap: {
            envMap: { value: null },
            envMapRotation: { value: new F() },
            flipEnvMap: { value: -1 },
            reflectivity: { value: 1 },
            ior: { value: 1.5 },
            refractionRatio: { value: 0.98 },
          },
          aomap: {
            aoMap: { value: null },
            aoMapIntensity: { value: 1 },
            aoMapTransform: { value: new F() },
          },
          lightmap: {
            lightMap: { value: null },
            lightMapIntensity: { value: 1 },
            lightMapTransform: { value: new F() },
          },
          bumpmap: {
            bumpMap: { value: null },
            bumpMapTransform: { value: new F() },
            bumpScale: { value: 1 },
          },
          normalmap: {
            normalMap: { value: null },
            normalMapTransform: { value: new F() },
            normalScale: { value: new V(1, 1) },
          },
          displacementmap: {
            displacementMap: { value: null },
            displacementMapTransform: { value: new F() },
            displacementScale: { value: 1 },
            displacementBias: { value: 0 },
          },
          emissivemap: {
            emissiveMap: { value: null },
            emissiveMapTransform: { value: new F() },
          },
          metalnessmap: {
            metalnessMap: { value: null },
            metalnessMapTransform: { value: new F() },
          },
          roughnessmap: {
            roughnessMap: { value: null },
            roughnessMapTransform: { value: new F() },
          },
          gradientmap: { gradientMap: { value: null } },
          fog: {
            fogDensity: { value: 25e-5 },
            fogNear: { value: 1 },
            fogFar: { value: 2e3 },
            fogColor: { value: new Ce(16777215) },
          },
          lights: {
            ambientLightColor: { value: [] },
            lightProbe: { value: [] },
            directionalLights: {
              value: [],
              properties: { direction: {}, color: {} },
            },
            directionalLightShadows: {
              value: [],
              properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
              },
            },
            directionalShadowMap: { value: [] },
            directionalShadowMatrix: { value: [] },
            spotLights: {
              value: [],
              properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {},
              },
            },
            spotLightShadows: {
              value: [],
              properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
              },
            },
            spotLightMap: { value: [] },
            spotShadowMap: { value: [] },
            spotLightMatrix: { value: [] },
            pointLights: {
              value: [],
              properties: { color: {}, position: {}, decay: {}, distance: {} },
            },
            pointLightShadows: {
              value: [],
              properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {},
              },
            },
            pointShadowMap: { value: [] },
            pointShadowMatrix: { value: [] },
            hemisphereLights: {
              value: [],
              properties: { direction: {}, skyColor: {}, groundColor: {} },
            },
            rectAreaLights: {
              value: [],
              properties: { color: {}, position: {}, width: {}, height: {} },
            },
            ltc_1: { value: null },
            ltc_2: { value: null },
          },
          points: {
            diffuse: { value: new Ce(16777215) },
            opacity: { value: 1 },
            size: { value: 1 },
            scale: { value: 1 },
            map: { value: null },
            alphaMap: { value: null },
            alphaMapTransform: { value: new F() },
            alphaTest: { value: 0 },
            uvTransform: { value: new F() },
          },
          sprite: {
            diffuse: { value: new Ce(16777215) },
            opacity: { value: 1 },
            center: { value: new V(0.5, 0.5) },
            rotation: { value: 0 },
            map: { value: null },
            mapTransform: { value: new F() },
            alphaMap: { value: null },
            alphaMapTransform: { value: new F() },
            alphaTest: { value: 0 },
          },
        },
        wn = {
          basic: {
            uniforms: mn([
              xn.common,
              xn.specularmap,
              xn.envmap,
              xn.aomap,
              xn.lightmap,
              xn.fog,
            ]),
            vertexShader: yn.meshbasic_vert,
            fragmentShader: yn.meshbasic_frag,
          },
          lambert: {
            uniforms: mn([
              xn.common,
              xn.specularmap,
              xn.envmap,
              xn.aomap,
              xn.lightmap,
              xn.emissivemap,
              xn.bumpmap,
              xn.normalmap,
              xn.displacementmap,
              xn.fog,
              xn.lights,
              { emissive: { value: new Ce(0) } },
            ]),
            vertexShader: yn.meshlambert_vert,
            fragmentShader: yn.meshlambert_frag,
          },
          phong: {
            uniforms: mn([
              xn.common,
              xn.specularmap,
              xn.envmap,
              xn.aomap,
              xn.lightmap,
              xn.emissivemap,
              xn.bumpmap,
              xn.normalmap,
              xn.displacementmap,
              xn.fog,
              xn.lights,
              {
                emissive: { value: new Ce(0) },
                specular: { value: new Ce(1118481) },
                shininess: { value: 30 },
              },
            ]),
            vertexShader: yn.meshphong_vert,
            fragmentShader: yn.meshphong_frag,
          },
          standard: {
            uniforms: mn([
              xn.common,
              xn.envmap,
              xn.aomap,
              xn.lightmap,
              xn.emissivemap,
              xn.bumpmap,
              xn.normalmap,
              xn.displacementmap,
              xn.roughnessmap,
              xn.metalnessmap,
              xn.fog,
              xn.lights,
              {
                emissive: { value: new Ce(0) },
                roughness: { value: 1 },
                metalness: { value: 0 },
                envMapIntensity: { value: 1 },
              },
            ]),
            vertexShader: yn.meshphysical_vert,
            fragmentShader: yn.meshphysical_frag,
          },
          toon: {
            uniforms: mn([
              xn.common,
              xn.aomap,
              xn.lightmap,
              xn.emissivemap,
              xn.bumpmap,
              xn.normalmap,
              xn.displacementmap,
              xn.gradientmap,
              xn.fog,
              xn.lights,
              { emissive: { value: new Ce(0) } },
            ]),
            vertexShader: yn.meshtoon_vert,
            fragmentShader: yn.meshtoon_frag,
          },
          matcap: {
            uniforms: mn([
              xn.common,
              xn.bumpmap,
              xn.normalmap,
              xn.displacementmap,
              xn.fog,
              { matcap: { value: null } },
            ]),
            vertexShader: yn.meshmatcap_vert,
            fragmentShader: yn.meshmatcap_frag,
          },
          points: {
            uniforms: mn([xn.points, xn.fog]),
            vertexShader: yn.points_vert,
            fragmentShader: yn.points_frag,
          },
          dashed: {
            uniforms: mn([
              xn.common,
              xn.fog,
              {
                scale: { value: 1 },
                dashSize: { value: 1 },
                totalSize: { value: 2 },
              },
            ]),
            vertexShader: yn.linedashed_vert,
            fragmentShader: yn.linedashed_frag,
          },
          depth: {
            uniforms: mn([xn.common, xn.displacementmap]),
            vertexShader: yn.depth_vert,
            fragmentShader: yn.depth_frag,
          },
          normal: {
            uniforms: mn([
              xn.common,
              xn.bumpmap,
              xn.normalmap,
              xn.displacementmap,
              { opacity: { value: 1 } },
            ]),
            vertexShader: yn.meshnormal_vert,
            fragmentShader: yn.meshnormal_frag,
          },
          sprite: {
            uniforms: mn([xn.sprite, xn.fog]),
            vertexShader: yn.sprite_vert,
            fragmentShader: yn.sprite_frag,
          },
          background: {
            uniforms: {
              uvTransform: { value: new F() },
              t2D: { value: null },
              backgroundIntensity: { value: 1 },
            },
            vertexShader: yn.background_vert,
            fragmentShader: yn.background_frag,
          },
          backgroundCube: {
            uniforms: {
              envMap: { value: null },
              flipEnvMap: { value: -1 },
              backgroundBlurriness: { value: 0 },
              backgroundIntensity: { value: 1 },
              backgroundRotation: { value: new F() },
            },
            vertexShader: yn.backgroundCube_vert,
            fragmentShader: yn.backgroundCube_frag,
          },
          cube: {
            uniforms: {
              tCube: { value: null },
              tFlip: { value: -1 },
              opacity: { value: 1 },
            },
            vertexShader: yn.cube_vert,
            fragmentShader: yn.cube_frag,
          },
          equirect: {
            uniforms: { tEquirect: { value: null } },
            vertexShader: yn.equirect_vert,
            fragmentShader: yn.equirect_frag,
          },
          distanceRGBA: {
            uniforms: mn([
              xn.common,
              xn.displacementmap,
              {
                referencePosition: { value: new ct() },
                nearDistance: { value: 1 },
                farDistance: { value: 1e3 },
              },
            ]),
            vertexShader: yn.distanceRGBA_vert,
            fragmentShader: yn.distanceRGBA_frag,
          },
          shadow: {
            uniforms: mn([
              xn.lights,
              xn.fog,
              { color: { value: new Ce(0) }, opacity: { value: 1 } },
            ]),
            vertexShader: yn.shadow_vert,
            fragmentShader: yn.shadow_frag,
          },
        };
      wn.physical = {
        uniforms: mn([
          wn.standard.uniforms,
          {
            clearcoat: { value: 0 },
            clearcoatMap: { value: null },
            clearcoatMapTransform: { value: new F() },
            clearcoatNormalMap: { value: null },
            clearcoatNormalMapTransform: { value: new F() },
            clearcoatNormalScale: { value: new V(1, 1) },
            clearcoatRoughness: { value: 0 },
            clearcoatRoughnessMap: { value: null },
            clearcoatRoughnessMapTransform: { value: new F() },
            dispersion: { value: 0 },
            iridescence: { value: 0 },
            iridescenceMap: { value: null },
            iridescenceMapTransform: { value: new F() },
            iridescenceIOR: { value: 1.3 },
            iridescenceThicknessMinimum: { value: 100 },
            iridescenceThicknessMaximum: { value: 400 },
            iridescenceThicknessMap: { value: null },
            iridescenceThicknessMapTransform: { value: new F() },
            sheen: { value: 0 },
            sheenColor: { value: new Ce(0) },
            sheenColorMap: { value: null },
            sheenColorMapTransform: { value: new F() },
            sheenRoughness: { value: 1 },
            sheenRoughnessMap: { value: null },
            sheenRoughnessMapTransform: { value: new F() },
            transmission: { value: 0 },
            transmissionMap: { value: null },
            transmissionMapTransform: { value: new F() },
            transmissionSamplerSize: { value: new V() },
            transmissionSamplerMap: { value: null },
            thickness: { value: 0 },
            thicknessMap: { value: null },
            thicknessMapTransform: { value: new F() },
            attenuationDistance: { value: 0 },
            attenuationColor: { value: new Ce(0) },
            specularColor: { value: new Ce(1, 1, 1) },
            specularColorMap: { value: null },
            specularColorMapTransform: { value: new F() },
            specularIntensity: { value: 1 },
            specularIntensityMap: { value: null },
            specularIntensityMapTransform: { value: new F() },
            anisotropyVector: { value: new V() },
            anisotropyMap: { value: null },
            anisotropyMapTransform: { value: new F() },
          },
        ]),
        vertexShader: yn.meshphysical_vert,
        fragmentShader: yn.meshphysical_frag,
      };
      Math.sqrt(5);
      new Float32Array(16), new Float32Array(9), new Float32Array(4);
      new Map();
      class Sn extends ot {
        constructor(
          t = null,
          e = 1,
          n = 1,
          i,
          r,
          a,
          o,
          s,
          l = 1003,
          c = 1003,
          h,
          d
        ) {
          super(null, a, o, s, l, c, i, r, h, d),
            (this.isDataTexture = !0),
            (this.image = { data: t, width: e, height: n }),
            (this.generateMipmaps = !1),
            (this.flipY = !1),
            (this.unpackAlignment = 1);
        }
      }
      class bn extends Le {
        constructor(t, e, n, i = 1) {
          super(t, e, n),
            (this.isInstancedBufferAttribute = !0),
            (this.meshPerAttribute = i);
        }
        copy(t) {
          return (
            super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this
          );
        }
        toJSON() {
          const t = super.toJSON();
          return (
            (t.meshPerAttribute = this.meshPerAttribute),
            (t.isInstancedBufferAttribute = !0),
            t
          );
        }
      }
      const Mn = new Ot(),
        An = new Ot(),
        Tn = [],
        En = new ut(),
        Cn = new Ot(),
        Pn = new dn(),
        kn = new kt();
      class In extends dn {
        constructor(t, e, n) {
          super(t, e),
            (this.isInstancedMesh = !0),
            (this.instanceMatrix = new bn(new Float32Array(16 * n), 16)),
            (this.instanceColor = null),
            (this.morphTexture = null),
            (this.count = n),
            (this.boundingBox = null),
            (this.boundingSphere = null);
          for (let t = 0; t < n; t++) this.setMatrixAt(t, Cn);
        }
        computeBoundingBox() {
          const t = this.geometry,
            e = this.count;
          null === this.boundingBox && (this.boundingBox = new ut()),
            null === t.boundingBox && t.computeBoundingBox(),
            this.boundingBox.makeEmpty();
          for (let n = 0; n < e; n++)
            this.getMatrixAt(n, Mn),
              En.copy(t.boundingBox).applyMatrix4(Mn),
              this.boundingBox.union(En);
        }
        computeBoundingSphere() {
          const t = this.geometry,
            e = this.count;
          null === this.boundingSphere && (this.boundingSphere = new kt()),
            null === t.boundingSphere && t.computeBoundingSphere(),
            this.boundingSphere.makeEmpty();
          for (let n = 0; n < e; n++)
            this.getMatrixAt(n, Mn),
              kn.copy(t.boundingSphere).applyMatrix4(Mn),
              this.boundingSphere.union(kn);
        }
        copy(t, e) {
          return (
            super.copy(t, e),
            this.instanceMatrix.copy(t.instanceMatrix),
            null !== t.morphTexture &&
              (this.morphTexture = t.morphTexture.clone()),
            null !== t.instanceColor &&
              (this.instanceColor = t.instanceColor.clone()),
            (this.count = t.count),
            null !== t.boundingBox &&
              (this.boundingBox = t.boundingBox.clone()),
            null !== t.boundingSphere &&
              (this.boundingSphere = t.boundingSphere.clone()),
            this
          );
        }
        getColorAt(t, e) {
          e.fromArray(this.instanceColor.array, 3 * t);
        }
        getMatrixAt(t, e) {
          e.fromArray(this.instanceMatrix.array, 16 * t);
        }
        getMorphAt(t, e) {
          const n = e.morphTargetInfluences,
            i = this.morphTexture.source.data.data,
            r = t * (n.length + 1) + 1;
          for (let t = 0; t < n.length; t++) n[t] = i[r + t];
        }
        raycast(t, e) {
          const n = this.matrixWorld,
            i = this.count;
          if (
            ((Pn.geometry = this.geometry),
            (Pn.material = this.material),
            void 0 !== Pn.material &&
              (null === this.boundingSphere && this.computeBoundingSphere(),
              kn.copy(this.boundingSphere),
              kn.applyMatrix4(n),
              !1 !== t.ray.intersectsSphere(kn)))
          )
            for (let r = 0; r < i; r++) {
              this.getMatrixAt(r, Mn),
                An.multiplyMatrices(n, Mn),
                (Pn.matrixWorld = An),
                Pn.raycast(t, Tn);
              for (let t = 0, n = Tn.length; t < n; t++) {
                const n = Tn[t];
                (n.instanceId = r), (n.object = this), e.push(n);
              }
              Tn.length = 0;
            }
        }
        setColorAt(t, e) {
          null === this.instanceColor &&
            (this.instanceColor = new bn(
              new Float32Array(3 * this.instanceMatrix.count),
              3
            )),
            e.toArray(this.instanceColor.array, 3 * t);
        }
        setMatrixAt(t, e) {
          e.toArray(this.instanceMatrix.array, 16 * t);
        }
        setMorphAt(t, e) {
          const n = e.morphTargetInfluences,
            i = n.length + 1;
          null === this.morphTexture &&
            (this.morphTexture = new Sn(
              new Float32Array(i * this.count),
              i,
              this.count,
              u,
              h
            ));
          const r = this.morphTexture.source.data.data;
          let a = 0;
          for (let t = 0; t < n.length; t++) a += n[t];
          const o = this.geometry.morphTargetsRelative ? 1 : 1 - a,
            s = i * t;
          (r[s] = o), r.set(n, s + 1);
        }
        updateMorphTargets() {}
        dispose() {
          return (
            this.dispatchEvent({ type: "dispose" }),
            null !== this.morphTexture &&
              (this.morphTexture.dispose(), (this.morphTexture = null)),
            this
          );
        }
      }
      function Dn(t, e, n) {
        return !t || (!n && t.constructor === e)
          ? t
          : "number" == typeof e.BYTES_PER_ELEMENT
          ? new e(t)
          : Array.prototype.slice.call(t);
      }
      function Nn(t) {
        return ArrayBuffer.isView(t) && !(t instanceof DataView);
      }
      class Rn {
        constructor(t, e, n, i) {
          (this.parameterPositions = t),
            (this._cachedIndex = 0),
            (this.resultBuffer = void 0 !== i ? i : new e.constructor(n)),
            (this.sampleValues = e),
            (this.valueSize = n),
            (this.settings = null),
            (this.DefaultSettings_ = {});
        }
        evaluate(t) {
          const e = this.parameterPositions;
          let n = this._cachedIndex,
            i = e[n],
            r = e[n - 1];
          t: {
            e: {
              let a;
              n: {
                i: if (!(t < i)) {
                  for (let a = n + 2; ; ) {
                    if (void 0 === i) {
                      if (t < r) break i;
                      return (
                        (n = e.length),
                        (this._cachedIndex = n),
                        this.copySampleValue_(n - 1)
                      );
                    }
                    if (n === a) break;
                    if (((r = i), (i = e[++n]), t < i)) break e;
                  }
                  a = e.length;
                  break n;
                }
                if (t >= r) break t;
                {
                  const o = e[1];
                  t < o && ((n = 2), (r = o));
                  for (let a = n - 2; ; ) {
                    if (void 0 === r)
                      return (this._cachedIndex = 0), this.copySampleValue_(0);
                    if (n === a) break;
                    if (((i = r), (r = e[--n - 1]), t >= r)) break e;
                  }
                  (a = n), (n = 0);
                }
              }
              for (; n < a; ) {
                const i = (n + a) >>> 1;
                t < e[i] ? (a = i) : (n = i + 1);
              }
              if (((i = e[n]), (r = e[n - 1]), void 0 === r))
                return (this._cachedIndex = 0), this.copySampleValue_(0);
              if (void 0 === i)
                return (
                  (n = e.length),
                  (this._cachedIndex = n),
                  this.copySampleValue_(n - 1)
                );
            }
            (this._cachedIndex = n), this.intervalChanged_(n, r, i);
          }
          return this.interpolate_(n, r, t, i);
        }
        getSettings_() {
          return this.settings || this.DefaultSettings_;
        }
        copySampleValue_(t) {
          const e = this.resultBuffer,
            n = this.sampleValues,
            i = this.valueSize,
            r = t * i;
          for (let t = 0; t !== i; ++t) e[t] = n[r + t];
          return e;
        }
        interpolate_() {
          throw new Error("call to abstract method");
        }
        intervalChanged_() {}
      }
      class Ln extends Rn {
        constructor(t, e, n, i) {
          super(t, e, n, i),
            (this._weightPrev = -0),
            (this._offsetPrev = -0),
            (this._weightNext = -0),
            (this._offsetNext = -0),
            (this.DefaultSettings_ = { endingStart: g, endingEnd: g });
        }
        intervalChanged_(t, e, n) {
          const i = this.parameterPositions;
          let r = t - 2,
            a = t + 1,
            o = i[r],
            s = i[a];
          if (void 0 === o)
            switch (this.getSettings_().endingStart) {
              case _:
                (r = t), (o = 2 * e - n);
                break;
              case v:
                (r = i.length - 2), (o = e + i[r] - i[r + 1]);
                break;
              default:
                (r = t), (o = n);
            }
          if (void 0 === s)
            switch (this.getSettings_().endingEnd) {
              case _:
                (a = t), (s = 2 * n - e);
                break;
              case v:
                (a = 1), (s = n + i[1] - i[0]);
                break;
              default:
                (a = t - 1), (s = e);
            }
          const l = 0.5 * (n - e),
            c = this.valueSize;
          (this._weightPrev = l / (e - o)),
            (this._weightNext = l / (s - n)),
            (this._offsetPrev = r * c),
            (this._offsetNext = a * c);
        }
        interpolate_(t, e, n, i) {
          const r = this.resultBuffer,
            a = this.sampleValues,
            o = this.valueSize,
            s = t * o,
            l = s - o,
            c = this._offsetPrev,
            h = this._offsetNext,
            d = this._weightPrev,
            u = this._weightNext,
            f = (n - e) / (i - e),
            m = f * f,
            p = m * f,
            g = -d * p + 2 * d * m - d * f,
            _ = (1 + d) * p + (-1.5 - 2 * d) * m + (-0.5 + d) * f + 1,
            v = (-1 - u) * p + (1.5 + u) * m + 0.5 * f,
            y = u * p - u * m;
          for (let t = 0; t !== o; ++t)
            r[t] = g * a[c + t] + _ * a[l + t] + v * a[s + t] + y * a[h + t];
          return r;
        }
      }
      class zn extends Rn {
        constructor(t, e, n, i) {
          super(t, e, n, i);
        }
        interpolate_(t, e, n, i) {
          const r = this.resultBuffer,
            a = this.sampleValues,
            o = this.valueSize,
            s = t * o,
            l = s - o,
            c = (n - e) / (i - e),
            h = 1 - c;
          for (let t = 0; t !== o; ++t) r[t] = a[l + t] * h + a[s + t] * c;
          return r;
        }
      }
      class Un extends Rn {
        constructor(t, e, n, i) {
          super(t, e, n, i);
        }
        interpolate_(t) {
          return this.copySampleValue_(t - 1);
        }
      }
      class Bn {
        constructor(t, e, n, i) {
          if (void 0 === t)
            throw new Error("THREE.KeyframeTrack: track name is undefined");
          if (void 0 === e || 0 === e.length)
            throw new Error(
              "THREE.KeyframeTrack: no keyframes in track named " + t
            );
          (this.name = t),
            (this.times = Dn(e, this.TimeBufferType)),
            (this.values = Dn(n, this.ValueBufferType)),
            this.setInterpolation(i || this.DefaultInterpolation);
        }
        static toJSON(t) {
          const e = t.constructor;
          let n;
          if (e.toJSON !== this.toJSON) n = e.toJSON(t);
          else {
            n = {
              name: t.name,
              times: Dn(t.times, Array),
              values: Dn(t.values, Array),
            };
            const e = t.getInterpolation();
            e !== t.DefaultInterpolation && (n.interpolation = e);
          }
          return (n.type = t.ValueTypeName), n;
        }
        InterpolantFactoryMethodDiscrete(t) {
          return new Un(this.times, this.values, this.getValueSize(), t);
        }
        InterpolantFactoryMethodLinear(t) {
          return new zn(this.times, this.values, this.getValueSize(), t);
        }
        InterpolantFactoryMethodSmooth(t) {
          return new Ln(this.times, this.values, this.getValueSize(), t);
        }
        setInterpolation(t) {
          let e;
          switch (t) {
            case f:
              e = this.InterpolantFactoryMethodDiscrete;
              break;
            case m:
              e = this.InterpolantFactoryMethodLinear;
              break;
            case p:
              e = this.InterpolantFactoryMethodSmooth;
          }
          if (void 0 === e) {
            const e =
              "unsupported interpolation for " +
              this.ValueTypeName +
              " keyframe track named " +
              this.name;
            if (void 0 === this.createInterpolant) {
              if (t === this.DefaultInterpolation) throw new Error(e);
              this.setInterpolation(this.DefaultInterpolation);
            }
            return console.warn("THREE.KeyframeTrack:", e), this;
          }
          return (this.createInterpolant = e), this;
        }
        getInterpolation() {
          switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
              return f;
            case this.InterpolantFactoryMethodLinear:
              return m;
            case this.InterpolantFactoryMethodSmooth:
              return p;
          }
        }
        getValueSize() {
          return this.values.length / this.times.length;
        }
        shift(t) {
          if (0 !== t) {
            const e = this.times;
            for (let n = 0, i = e.length; n !== i; ++n) e[n] += t;
          }
          return this;
        }
        scale(t) {
          if (1 !== t) {
            const e = this.times;
            for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t;
          }
          return this;
        }
        trim(t, e) {
          const n = this.times,
            i = n.length;
          let r = 0,
            a = i - 1;
          for (; r !== i && n[r] < t; ) ++r;
          for (; -1 !== a && n[a] > e; ) --a;
          if ((++a, 0 !== r || a !== i)) {
            r >= a && ((a = Math.max(a, 1)), (r = a - 1));
            const t = this.getValueSize();
            (this.times = n.slice(r, a)),
              (this.values = this.values.slice(r * t, a * t));
          }
          return this;
        }
        validate() {
          let t = !0;
          const e = this.getValueSize();
          e - Math.floor(e) != 0 &&
            (console.error(
              "THREE.KeyframeTrack: Invalid value size in track.",
              this
            ),
            (t = !1));
          const n = this.times,
            i = this.values,
            r = n.length;
          0 === r &&
            (console.error("THREE.KeyframeTrack: Track is empty.", this),
            (t = !1));
          let a = null;
          for (let e = 0; e !== r; e++) {
            const i = n[e];
            if ("number" == typeof i && isNaN(i)) {
              console.error(
                "THREE.KeyframeTrack: Time is not a valid number.",
                this,
                e,
                i
              ),
                (t = !1);
              break;
            }
            if (null !== a && a > i) {
              console.error(
                "THREE.KeyframeTrack: Out of order keys.",
                this,
                e,
                i,
                a
              ),
                (t = !1);
              break;
            }
            a = i;
          }
          if (void 0 !== i && Nn(i))
            for (let e = 0, n = i.length; e !== n; ++e) {
              const n = i[e];
              if (isNaN(n)) {
                console.error(
                  "THREE.KeyframeTrack: Value is not a valid number.",
                  this,
                  e,
                  n
                ),
                  (t = !1);
                break;
              }
            }
          return t;
        }
        optimize() {
          const t = this.times.slice(),
            e = this.values.slice(),
            n = this.getValueSize(),
            i = this.getInterpolation() === p,
            r = t.length - 1;
          let a = 1;
          for (let o = 1; o < r; ++o) {
            let r = !1;
            const s = t[o];
            if (s !== t[o + 1] && (1 !== o || s !== t[0]))
              if (i) r = !0;
              else {
                const t = o * n,
                  i = t - n,
                  a = t + n;
                for (let o = 0; o !== n; ++o) {
                  const n = e[t + o];
                  if (n !== e[i + o] || n !== e[a + o]) {
                    r = !0;
                    break;
                  }
                }
              }
            if (r) {
              if (o !== a) {
                t[a] = t[o];
                const i = o * n,
                  r = a * n;
                for (let t = 0; t !== n; ++t) e[r + t] = e[i + t];
              }
              ++a;
            }
          }
          if (r > 0) {
            t[a] = t[r];
            for (let t = r * n, i = a * n, o = 0; o !== n; ++o)
              e[i + o] = e[t + o];
            ++a;
          }
          return (
            a !== t.length
              ? ((this.times = t.slice(0, a)),
                (this.values = e.slice(0, a * n)))
              : ((this.times = t), (this.values = e)),
            this
          );
        }
        clone() {
          const t = this.times.slice(),
            e = this.values.slice(),
            n = new (0, this.constructor)(this.name, t, e);
          return (n.createInterpolant = this.createInterpolant), n;
        }
      }
      (Bn.prototype.TimeBufferType = Float32Array),
        (Bn.prototype.ValueBufferType = Float32Array),
        (Bn.prototype.DefaultInterpolation = m);
      class On extends Bn {
        constructor(t, e, n) {
          super(t, e, n);
        }
      }
      (On.prototype.ValueTypeName = "bool"),
        (On.prototype.ValueBufferType = Array),
        (On.prototype.DefaultInterpolation = f),
        (On.prototype.InterpolantFactoryMethodLinear = void 0),
        (On.prototype.InterpolantFactoryMethodSmooth = void 0);
      class Vn extends Bn {}
      Vn.prototype.ValueTypeName = "color";
      class Fn extends Bn {}
      Fn.prototype.ValueTypeName = "number";
      class Hn extends Rn {
        constructor(t, e, n, i) {
          super(t, e, n, i);
        }
        interpolate_(t, e, n, i) {
          const r = this.resultBuffer,
            a = this.sampleValues,
            o = this.valueSize,
            s = (n - e) / (i - e);
          let l = t * o;
          for (let t = l + o; l !== t; l += 4)
            lt.slerpFlat(r, 0, a, l - o, a, l, s);
          return r;
        }
      }
      class Wn extends Bn {
        InterpolantFactoryMethodLinear(t) {
          return new Hn(this.times, this.values, this.getValueSize(), t);
        }
      }
      (Wn.prototype.ValueTypeName = "quaternion"),
        (Wn.prototype.InterpolantFactoryMethodSmooth = void 0);
      class Gn extends Bn {
        constructor(t, e, n) {
          super(t, e, n);
        }
      }
      (Gn.prototype.ValueTypeName = "string"),
        (Gn.prototype.ValueBufferType = Array),
        (Gn.prototype.DefaultInterpolation = f),
        (Gn.prototype.InterpolantFactoryMethodLinear = void 0),
        (Gn.prototype.InterpolantFactoryMethodSmooth = void 0);
      class qn extends Bn {}
      qn.prototype.ValueTypeName = "vector";
      class jn {
        constructor(t, e, n) {
          const i = this;
          let r,
            a = !1,
            o = 0,
            s = 0;
          const l = [];
          (this.onStart = void 0),
            (this.onLoad = t),
            (this.onProgress = e),
            (this.onError = n),
            (this.itemStart = function (t) {
              s++,
                !1 === a && void 0 !== i.onStart && i.onStart(t, o, s),
                (a = !0);
            }),
            (this.itemEnd = function (t) {
              o++,
                void 0 !== i.onProgress && i.onProgress(t, o, s),
                o === s && ((a = !1), void 0 !== i.onLoad && i.onLoad());
            }),
            (this.itemError = function (t) {
              void 0 !== i.onError && i.onError(t);
            }),
            (this.resolveURL = function (t) {
              return r ? r(t) : t;
            }),
            (this.setURLModifier = function (t) {
              return (r = t), this;
            }),
            (this.addHandler = function (t, e) {
              return l.push(t, e), this;
            }),
            (this.removeHandler = function (t) {
              const e = l.indexOf(t);
              return -1 !== e && l.splice(e, 2), this;
            }),
            (this.getHandler = function (t) {
              for (let e = 0, n = l.length; e < n; e += 2) {
                const n = l[e],
                  i = l[e + 1];
                if ((n.global && (n.lastIndex = 0), n.test(t))) return i;
              }
              return null;
            });
        }
      }
      const Zn = new jn();
      class Yn {
        constructor(t) {
          (this.manager = void 0 !== t ? t : Zn),
            (this.crossOrigin = "anonymous"),
            (this.withCredentials = !1),
            (this.path = ""),
            (this.resourcePath = ""),
            (this.requestHeader = {});
        }
        load() {}
        loadAsync(t, e) {
          const n = this;
          return new Promise(function (i, r) {
            n.load(t, i, e, r);
          });
        }
        parse() {}
        setCrossOrigin(t) {
          return (this.crossOrigin = t), this;
        }
        setWithCredentials(t) {
          return (this.withCredentials = t), this;
        }
        setPath(t) {
          return (this.path = t), this;
        }
        setResourcePath(t) {
          return (this.resourcePath = t), this;
        }
        setRequestHeader(t) {
          return (this.requestHeader = t), this;
        }
      }
      Yn.DEFAULT_MATERIAL_NAME = "__DEFAULT";
      Error;
      const Xn = "\\[\\]\\.:\\/",
        Jn = new RegExp("[" + Xn + "]", "g"),
        Qn = "[^" + Xn + "]",
        Kn = "[^" + Xn.replace("\\.", "") + "]",
        $n = new RegExp(
          "^" +
            /((?:WC+[\/:])*)/.source.replace("WC", Qn) +
            /(WCOD+)?/.source.replace("WCOD", Kn) +
            /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Qn) +
            /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Qn) +
            "$"
        ),
        ti = ["material", "materials", "bones", "map"];
      class ei {
        constructor(t, e, n) {
          (this.path = e),
            (this.parsedPath = n || ei.parseTrackName(e)),
            (this.node = ei.findNode(t, this.parsedPath.nodeName)),
            (this.rootNode = t),
            (this.getValue = this._getValue_unbound),
            (this.setValue = this._setValue_unbound);
        }
        static create(t, e, n) {
          return t && t.isAnimationObjectGroup
            ? new ei.Composite(t, e, n)
            : new ei(t, e, n);
        }
        static sanitizeNodeName(t) {
          return t.replace(/\s/g, "_").replace(Jn, "");
        }
        static parseTrackName(t) {
          const e = $n.exec(t);
          if (null === e)
            throw new Error("PropertyBinding: Cannot parse trackName: " + t);
          const n = {
              nodeName: e[2],
              objectName: e[3],
              objectIndex: e[4],
              propertyName: e[5],
              propertyIndex: e[6],
            },
            i = n.nodeName && n.nodeName.lastIndexOf(".");
          if (void 0 !== i && -1 !== i) {
            const t = n.nodeName.substring(i + 1);
            -1 !== ti.indexOf(t) &&
              ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = t));
          }
          if (null === n.propertyName || 0 === n.propertyName.length)
            throw new Error(
              "PropertyBinding: can not parse propertyName from trackName: " + t
            );
          return n;
        }
        static findNode(t, e) {
          if (
            void 0 === e ||
            "" === e ||
            "." === e ||
            -1 === e ||
            e === t.name ||
            e === t.uuid
          )
            return t;
          if (t.skeleton) {
            const n = t.skeleton.getBoneByName(e);
            if (void 0 !== n) return n;
          }
          if (t.children) {
            const n = function (t) {
                for (let i = 0; i < t.length; i++) {
                  const r = t[i];
                  if (r.name === e || r.uuid === e) return r;
                  const a = n(r.children);
                  if (a) return a;
                }
                return null;
              },
              i = n(t.children);
            if (i) return i;
          }
          return null;
        }
        _getValue_unavailable() {}
        _setValue_unavailable() {}
        _getValue_direct(t, e) {
          t[e] = this.targetObject[this.propertyName];
        }
        _getValue_array(t, e) {
          const n = this.resolvedProperty;
          for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i];
        }
        _getValue_arrayElement(t, e) {
          t[e] = this.resolvedProperty[this.propertyIndex];
        }
        _getValue_toArray(t, e) {
          this.resolvedProperty.toArray(t, e);
        }
        _setValue_direct(t, e) {
          this.targetObject[this.propertyName] = t[e];
        }
        _setValue_direct_setNeedsUpdate(t, e) {
          (this.targetObject[this.propertyName] = t[e]),
            (this.targetObject.needsUpdate = !0);
        }
        _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
          (this.targetObject[this.propertyName] = t[e]),
            (this.targetObject.matrixWorldNeedsUpdate = !0);
        }
        _setValue_array(t, e) {
          const n = this.resolvedProperty;
          for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
        }
        _setValue_array_setNeedsUpdate(t, e) {
          const n = this.resolvedProperty;
          for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
          this.targetObject.needsUpdate = !0;
        }
        _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
          const n = this.resolvedProperty;
          for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
          this.targetObject.matrixWorldNeedsUpdate = !0;
        }
        _setValue_arrayElement(t, e) {
          this.resolvedProperty[this.propertyIndex] = t[e];
        }
        _setValue_arrayElement_setNeedsUpdate(t, e) {
          (this.resolvedProperty[this.propertyIndex] = t[e]),
            (this.targetObject.needsUpdate = !0);
        }
        _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
          (this.resolvedProperty[this.propertyIndex] = t[e]),
            (this.targetObject.matrixWorldNeedsUpdate = !0);
        }
        _setValue_fromArray(t, e) {
          this.resolvedProperty.fromArray(t, e);
        }
        _setValue_fromArray_setNeedsUpdate(t, e) {
          this.resolvedProperty.fromArray(t, e),
            (this.targetObject.needsUpdate = !0);
        }
        _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
          this.resolvedProperty.fromArray(t, e),
            (this.targetObject.matrixWorldNeedsUpdate = !0);
        }
        _getValue_unbound(t, e) {
          this.bind(), this.getValue(t, e);
        }
        _setValue_unbound(t, e) {
          this.bind(), this.setValue(t, e);
        }
        bind() {
          let t = this.node;
          const e = this.parsedPath,
            n = e.objectName,
            i = e.propertyName;
          let r = e.propertyIndex;
          if (
            (t ||
              ((t = ei.findNode(this.rootNode, e.nodeName)), (this.node = t)),
            (this.getValue = this._getValue_unavailable),
            (this.setValue = this._setValue_unavailable),
            !t)
          )
            return void console.warn(
              "THREE.PropertyBinding: No target node found for track: " +
                this.path +
                "."
            );
          if (n) {
            let i = e.objectIndex;
            switch (n) {
              case "materials":
                if (!t.material)
                  return void console.error(
                    "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
                    this
                  );
                if (!t.material.materials)
                  return void console.error(
                    "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
                    this
                  );
                t = t.material.materials;
                break;
              case "bones":
                if (!t.skeleton)
                  return void console.error(
                    "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
                    this
                  );
                t = t.skeleton.bones;
                for (let e = 0; e < t.length; e++)
                  if (t[e].name === i) {
                    i = e;
                    break;
                  }
                break;
              case "map":
                if ("map" in t) {
                  t = t.map;
                  break;
                }
                if (!t.material)
                  return void console.error(
                    "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
                    this
                  );
                if (!t.material.map)
                  return void console.error(
                    "THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",
                    this
                  );
                t = t.material.map;
                break;
              default:
                if (void 0 === t[n])
                  return void console.error(
                    "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
                    this
                  );
                t = t[n];
            }
            if (void 0 !== i) {
              if (void 0 === t[i])
                return void console.error(
                  "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
                  this,
                  t
                );
              t = t[i];
            }
          }
          const a = t[i];
          if (void 0 === a) {
            const n = e.nodeName;
            return void console.error(
              "THREE.PropertyBinding: Trying to update property for track: " +
                n +
                "." +
                i +
                " but it wasn't found.",
              t
            );
          }
          let o = this.Versioning.None;
          (this.targetObject = t),
            void 0 !== t.needsUpdate
              ? (o = this.Versioning.NeedsUpdate)
              : void 0 !== t.matrixWorldNeedsUpdate &&
                (o = this.Versioning.MatrixWorldNeedsUpdate);
          let s = this.BindingType.Direct;
          if (void 0 !== r) {
            if ("morphTargetInfluences" === i) {
              if (!t.geometry)
                return void console.error(
                  "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
                  this
                );
              if (!t.geometry.morphAttributes)
                return void console.error(
                  "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
                  this
                );
              void 0 !== t.morphTargetDictionary[r] &&
                (r = t.morphTargetDictionary[r]);
            }
            (s = this.BindingType.ArrayElement),
              (this.resolvedProperty = a),
              (this.propertyIndex = r);
          } else
            void 0 !== a.fromArray && void 0 !== a.toArray
              ? ((s = this.BindingType.HasFromToArray),
                (this.resolvedProperty = a))
              : Array.isArray(a)
              ? ((s = this.BindingType.EntireArray),
                (this.resolvedProperty = a))
              : (this.propertyName = i);
          (this.getValue = this.GetterByBindingType[s]),
            (this.setValue = this.SetterByBindingTypeAndVersioning[s][o]);
        }
        unbind() {
          (this.node = null),
            (this.getValue = this._getValue_unbound),
            (this.setValue = this._setValue_unbound);
        }
      }
      (ei.Composite = class {
        constructor(t, e, n) {
          const i = n || ei.parseTrackName(e);
          (this._targetGroup = t), (this._bindings = t.subscribe_(e, i));
        }
        getValue(t, e) {
          this.bind();
          const n = this._targetGroup.nCachedObjects_,
            i = this._bindings[n];
          void 0 !== i && i.getValue(t, e);
        }
        setValue(t, e) {
          const n = this._bindings;
          for (
            let i = this._targetGroup.nCachedObjects_, r = n.length;
            i !== r;
            ++i
          )
            n[i].setValue(t, e);
        }
        bind() {
          const t = this._bindings;
          for (
            let e = this._targetGroup.nCachedObjects_, n = t.length;
            e !== n;
            ++e
          )
            t[e].bind();
        }
        unbind() {
          const t = this._bindings;
          for (
            let e = this._targetGroup.nCachedObjects_, n = t.length;
            e !== n;
            ++e
          )
            t[e].unbind();
        }
      }),
        (ei.prototype.BindingType = {
          Direct: 0,
          EntireArray: 1,
          ArrayElement: 2,
          HasFromToArray: 3,
        }),
        (ei.prototype.Versioning = {
          None: 0,
          NeedsUpdate: 1,
          MatrixWorldNeedsUpdate: 2,
        }),
        (ei.prototype.GetterByBindingType = [
          ei.prototype._getValue_direct,
          ei.prototype._getValue_array,
          ei.prototype._getValue_arrayElement,
          ei.prototype._getValue_toArray,
        ]),
        (ei.prototype.SetterByBindingTypeAndVersioning = [
          [
            ei.prototype._setValue_direct,
            ei.prototype._setValue_direct_setNeedsUpdate,
            ei.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
          ],
          [
            ei.prototype._setValue_array,
            ei.prototype._setValue_array_setNeedsUpdate,
            ei.prototype._setValue_array_setMatrixWorldNeedsUpdate,
          ],
          [
            ei.prototype._setValue_arrayElement,
            ei.prototype._setValue_arrayElement_setNeedsUpdate,
            ei.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
          ],
          [
            ei.prototype._setValue_fromArray,
            ei.prototype._setValue_fromArray_setNeedsUpdate,
            ei.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
          ],
        ]);
      new Float32Array(1);
      "undefined" != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("register", { detail: { revision: t } })
        ),
        "undefined" != typeof window &&
          (window.__THREE__
            ? console.warn(
                "WARNING: Multiple instances of Three.js being imported."
              )
            : (window.__THREE__ = t));
      function ni(t) {
        let e = t.length;
        for (; --e >= 0; ) t[e] = 0;
      }
      const ii = 256,
        ri = 286,
        ai = 30,
        oi = 15,
        si = new Uint8Array([
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0,
        ]),
        li = new Uint8Array([
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13,
        ]),
        ci = new Uint8Array([
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
        ]),
        hi = new Uint8Array([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]),
        di = new Array(576);
      ni(di);
      const ui = new Array(60);
      ni(ui);
      const fi = new Array(512);
      ni(fi);
      const mi = new Array(256);
      ni(mi);
      const pi = new Array(29);
      ni(pi);
      const gi = new Array(ai);
      function _i(t, e, n, i, r) {
        (this.static_tree = t),
          (this.extra_bits = e),
          (this.extra_base = n),
          (this.elems = i),
          (this.max_length = r),
          (this.has_stree = t && t.length);
      }
      let vi, yi, xi;
      function wi(t, e) {
        (this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e);
      }
      ni(gi);
      const Si = (t) => (t < 256 ? fi[t] : fi[256 + (t >>> 7)]),
        bi = (t, e) => {
          (t.pending_buf[t.pending++] = 255 & e),
            (t.pending_buf[t.pending++] = (e >>> 8) & 255);
        },
        Mi = (t, e, n) => {
          t.bi_valid > 16 - n
            ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
              bi(t, t.bi_buf),
              (t.bi_buf = e >> (16 - t.bi_valid)),
              (t.bi_valid += n - 16))
            : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += n));
        },
        Ai = (t, e, n) => {
          Mi(t, n[2 * e], n[2 * e + 1]);
        },
        Ti = (t, e) => {
          let n = 0;
          do {
            (n |= 1 & t), (t >>>= 1), (n <<= 1);
          } while (--e > 0);
          return n >>> 1;
        },
        Ei = (t, e, n) => {
          const i = new Array(16);
          let r,
            a,
            o = 0;
          for (r = 1; r <= oi; r++) (o = (o + n[r - 1]) << 1), (i[r] = o);
          for (a = 0; a <= e; a++) {
            let e = t[2 * a + 1];
            0 !== e && (t[2 * a] = Ti(i[e]++, e));
          }
        },
        Ci = (t) => {
          let e;
          for (e = 0; e < ri; e++) t.dyn_ltree[2 * e] = 0;
          for (e = 0; e < ai; e++) t.dyn_dtree[2 * e] = 0;
          for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
          (t.dyn_ltree[512] = 1),
            (t.opt_len = t.static_len = 0),
            (t.sym_next = t.matches = 0);
        },
        Pi = (t) => {
          t.bi_valid > 8
            ? bi(t, t.bi_buf)
            : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf),
            (t.bi_buf = 0),
            (t.bi_valid = 0);
        },
        ki = (t, e, n, i) => {
          const r = 2 * e,
            a = 2 * n;
          return t[r] < t[a] || (t[r] === t[a] && i[e] <= i[n]);
        },
        Ii = (t, e, n) => {
          const i = t.heap[n];
          let r = n << 1;
          for (
            ;
            r <= t.heap_len &&
            (r < t.heap_len && ki(e, t.heap[r + 1], t.heap[r], t.depth) && r++,
            !ki(e, i, t.heap[r], t.depth));

          )
            (t.heap[n] = t.heap[r]), (n = r), (r <<= 1);
          t.heap[n] = i;
        },
        Di = (t, e, n) => {
          let i,
            r,
            a,
            o,
            s = 0;
          if (0 !== t.sym_next)
            do {
              (i = 255 & t.pending_buf[t.sym_buf + s++]),
                (i += (255 & t.pending_buf[t.sym_buf + s++]) << 8),
                (r = t.pending_buf[t.sym_buf + s++]),
                0 === i
                  ? Ai(t, r, e)
                  : ((a = mi[r]),
                    Ai(t, a + ii + 1, e),
                    (o = si[a]),
                    0 !== o && ((r -= pi[a]), Mi(t, r, o)),
                    i--,
                    (a = Si(i)),
                    Ai(t, a, n),
                    (o = li[a]),
                    0 !== o && ((i -= gi[a]), Mi(t, i, o)));
            } while (s < t.sym_next);
          Ai(t, 256, e);
        },
        Ni = (t, e) => {
          const n = e.dyn_tree,
            i = e.stat_desc.static_tree,
            r = e.stat_desc.has_stree,
            a = e.stat_desc.elems;
          let o,
            s,
            l,
            c = -1;
          for (t.heap_len = 0, t.heap_max = 573, o = 0; o < a; o++)
            0 !== n[2 * o]
              ? ((t.heap[++t.heap_len] = c = o), (t.depth[o] = 0))
              : (n[2 * o + 1] = 0);
          for (; t.heap_len < 2; )
            (l = t.heap[++t.heap_len] = c < 2 ? ++c : 0),
              (n[2 * l] = 1),
              (t.depth[l] = 0),
              t.opt_len--,
              r && (t.static_len -= i[2 * l + 1]);
          for (e.max_code = c, o = t.heap_len >> 1; o >= 1; o--) Ii(t, n, o);
          l = a;
          do {
            (o = t.heap[1]),
              (t.heap[1] = t.heap[t.heap_len--]),
              Ii(t, n, 1),
              (s = t.heap[1]),
              (t.heap[--t.heap_max] = o),
              (t.heap[--t.heap_max] = s),
              (n[2 * l] = n[2 * o] + n[2 * s]),
              (t.depth[l] =
                (t.depth[o] >= t.depth[s] ? t.depth[o] : t.depth[s]) + 1),
              (n[2 * o + 1] = n[2 * s + 1] = l),
              (t.heap[1] = l++),
              Ii(t, n, 1);
          } while (t.heap_len >= 2);
          (t.heap[--t.heap_max] = t.heap[1]),
            ((t, e) => {
              const n = e.dyn_tree,
                i = e.max_code,
                r = e.stat_desc.static_tree,
                a = e.stat_desc.has_stree,
                o = e.stat_desc.extra_bits,
                s = e.stat_desc.extra_base,
                l = e.stat_desc.max_length;
              let c,
                h,
                d,
                u,
                f,
                m,
                p = 0;
              for (u = 0; u <= oi; u++) t.bl_count[u] = 0;
              for (
                n[2 * t.heap[t.heap_max] + 1] = 0, c = t.heap_max + 1;
                c < 573;
                c++
              )
                (h = t.heap[c]),
                  (u = n[2 * n[2 * h + 1] + 1] + 1),
                  u > l && ((u = l), p++),
                  (n[2 * h + 1] = u),
                  h > i ||
                    (t.bl_count[u]++,
                    (f = 0),
                    h >= s && (f = o[h - s]),
                    (m = n[2 * h]),
                    (t.opt_len += m * (u + f)),
                    a && (t.static_len += m * (r[2 * h + 1] + f)));
              if (0 !== p) {
                do {
                  for (u = l - 1; 0 === t.bl_count[u]; ) u--;
                  t.bl_count[u]--,
                    (t.bl_count[u + 1] += 2),
                    t.bl_count[l]--,
                    (p -= 2);
                } while (p > 0);
                for (u = l; 0 !== u; u--)
                  for (h = t.bl_count[u]; 0 !== h; )
                    (d = t.heap[--c]),
                      d > i ||
                        (n[2 * d + 1] !== u &&
                          ((t.opt_len += (u - n[2 * d + 1]) * n[2 * d]),
                          (n[2 * d + 1] = u)),
                        h--);
              }
            })(t, e),
            Ei(n, c, t.bl_count);
        },
        Ri = (t, e, n) => {
          let i,
            r,
            a = -1,
            o = e[1],
            s = 0,
            l = 7,
            c = 4;
          for (
            0 === o && ((l = 138), (c = 3)), e[2 * (n + 1) + 1] = 65535, i = 0;
            i <= n;
            i++
          )
            (r = o),
              (o = e[2 * (i + 1) + 1]),
              (++s < l && r === o) ||
                (s < c
                  ? (t.bl_tree[2 * r] += s)
                  : 0 !== r
                  ? (r !== a && t.bl_tree[2 * r]++, t.bl_tree[32]++)
                  : s <= 10
                  ? t.bl_tree[34]++
                  : t.bl_tree[36]++,
                (s = 0),
                (a = r),
                0 === o
                  ? ((l = 138), (c = 3))
                  : r === o
                  ? ((l = 6), (c = 3))
                  : ((l = 7), (c = 4)));
        },
        Li = (t, e, n) => {
          let i,
            r,
            a = -1,
            o = e[1],
            s = 0,
            l = 7,
            c = 4;
          for (0 === o && ((l = 138), (c = 3)), i = 0; i <= n; i++)
            if (((r = o), (o = e[2 * (i + 1) + 1]), !(++s < l && r === o))) {
              if (s < c)
                do {
                  Ai(t, r, t.bl_tree);
                } while (0 != --s);
              else
                0 !== r
                  ? (r !== a && (Ai(t, r, t.bl_tree), s--),
                    Ai(t, 16, t.bl_tree),
                    Mi(t, s - 3, 2))
                  : s <= 10
                  ? (Ai(t, 17, t.bl_tree), Mi(t, s - 3, 3))
                  : (Ai(t, 18, t.bl_tree), Mi(t, s - 11, 7));
              (s = 0),
                (a = r),
                0 === o
                  ? ((l = 138), (c = 3))
                  : r === o
                  ? ((l = 6), (c = 3))
                  : ((l = 7), (c = 4));
            }
        };
      let zi = !1;
      const Ui = (t, e, n, i) => {
        Mi(t, 0 + (i ? 1 : 0), 3),
          Pi(t),
          bi(t, n),
          bi(t, ~n),
          n && t.pending_buf.set(t.window.subarray(e, e + n), t.pending),
          (t.pending += n);
      };
      var Bi = (t, e, n, i) => {
          let r,
            a,
            o = 0;
          t.level > 0
            ? (2 === t.strm.data_type &&
                (t.strm.data_type = ((t) => {
                  let e,
                    n = 4093624447;
                  for (e = 0; e <= 31; e++, n >>>= 1)
                    if (1 & n && 0 !== t.dyn_ltree[2 * e]) return 0;
                  if (
                    0 !== t.dyn_ltree[18] ||
                    0 !== t.dyn_ltree[20] ||
                    0 !== t.dyn_ltree[26]
                  )
                    return 1;
                  for (e = 32; e < ii; e++)
                    if (0 !== t.dyn_ltree[2 * e]) return 1;
                  return 0;
                })(t)),
              Ni(t, t.l_desc),
              Ni(t, t.d_desc),
              (o = ((t) => {
                let e;
                for (
                  Ri(t, t.dyn_ltree, t.l_desc.max_code),
                    Ri(t, t.dyn_dtree, t.d_desc.max_code),
                    Ni(t, t.bl_desc),
                    e = 18;
                  e >= 3 && 0 === t.bl_tree[2 * hi[e] + 1];
                  e--
                );
                return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
              })(t)),
              (r = (t.opt_len + 3 + 7) >>> 3),
              (a = (t.static_len + 3 + 7) >>> 3),
              a <= r && (r = a))
            : (r = a = n + 5),
            n + 4 <= r && -1 !== e
              ? Ui(t, e, n, i)
              : 4 === t.strategy || a === r
              ? (Mi(t, 2 + (i ? 1 : 0), 3), Di(t, di, ui))
              : (Mi(t, 4 + (i ? 1 : 0), 3),
                ((t, e, n, i) => {
                  let r;
                  for (
                    Mi(t, e - 257, 5), Mi(t, n - 1, 5), Mi(t, i - 4, 4), r = 0;
                    r < i;
                    r++
                  )
                    Mi(t, t.bl_tree[2 * hi[r] + 1], 3);
                  Li(t, t.dyn_ltree, e - 1), Li(t, t.dyn_dtree, n - 1);
                })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, o + 1),
                Di(t, t.dyn_ltree, t.dyn_dtree)),
            Ci(t),
            i && Pi(t);
        },
        Oi = {
          _tr_init: (t) => {
            zi ||
              ((() => {
                let t, e, n, i, r;
                const a = new Array(16);
                for (n = 0, i = 0; i < 28; i++)
                  for (pi[i] = n, t = 0; t < 1 << si[i]; t++) mi[n++] = i;
                for (mi[n - 1] = i, r = 0, i = 0; i < 16; i++)
                  for (gi[i] = r, t = 0; t < 1 << li[i]; t++) fi[r++] = i;
                for (r >>= 7; i < ai; i++)
                  for (gi[i] = r << 7, t = 0; t < 1 << (li[i] - 7); t++)
                    fi[256 + r++] = i;
                for (e = 0; e <= oi; e++) a[e] = 0;
                for (t = 0; t <= 143; ) (di[2 * t + 1] = 8), t++, a[8]++;
                for (; t <= 255; ) (di[2 * t + 1] = 9), t++, a[9]++;
                for (; t <= 279; ) (di[2 * t + 1] = 7), t++, a[7]++;
                for (; t <= 287; ) (di[2 * t + 1] = 8), t++, a[8]++;
                for (Ei(di, 287, a), t = 0; t < ai; t++)
                  (ui[2 * t + 1] = 5), (ui[2 * t] = Ti(t, 5));
                (vi = new _i(di, si, 257, ri, oi)),
                  (yi = new _i(ui, li, 0, ai, oi)),
                  (xi = new _i(new Array(0), ci, 0, 19, 7));
              })(),
              (zi = !0)),
              (t.l_desc = new wi(t.dyn_ltree, vi)),
              (t.d_desc = new wi(t.dyn_dtree, yi)),
              (t.bl_desc = new wi(t.bl_tree, xi)),
              (t.bi_buf = 0),
              (t.bi_valid = 0),
              Ci(t);
          },
          _tr_stored_block: Ui,
          _tr_flush_block: Bi,
          _tr_tally: (t, e, n) => (
            (t.pending_buf[t.sym_buf + t.sym_next++] = e),
            (t.pending_buf[t.sym_buf + t.sym_next++] = e >> 8),
            (t.pending_buf[t.sym_buf + t.sym_next++] = n),
            0 === e
              ? t.dyn_ltree[2 * n]++
              : (t.matches++,
                e--,
                t.dyn_ltree[2 * (mi[n] + ii + 1)]++,
                t.dyn_dtree[2 * Si(e)]++),
            t.sym_next === t.sym_end
          ),
          _tr_align: (t) => {
            Mi(t, 2, 3),
              Ai(t, 256, di),
              ((t) => {
                16 === t.bi_valid
                  ? (bi(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
                  : t.bi_valid >= 8 &&
                    ((t.pending_buf[t.pending++] = 255 & t.bi_buf),
                    (t.bi_buf >>= 8),
                    (t.bi_valid -= 8));
              })(t);
          },
        };
      var Vi = (t, e, n, i) => {
        let r = 65535 & t,
          a = (t >>> 16) & 65535,
          o = 0;
        for (; 0 !== n; ) {
          (o = n > 2e3 ? 2e3 : n), (n -= o);
          do {
            (r = (r + e[i++]) | 0), (a = (a + r) | 0);
          } while (--o);
          (r %= 65521), (a %= 65521);
        }
        return r | (a << 16);
      };
      const Fi = new Uint32Array(
        (() => {
          let t,
            e = [];
          for (var n = 0; n < 256; n++) {
            t = n;
            for (var i = 0; i < 8; i++)
              t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
            e[n] = t;
          }
          return e;
        })()
      );
      var Hi = (t, e, n, i) => {
          const r = Fi,
            a = i + n;
          t ^= -1;
          for (let n = i; n < a; n++) t = (t >>> 8) ^ r[255 & (t ^ e[n])];
          return ~t;
        },
        Wi = {
          2: "need dictionary",
          1: "stream end",
          0: "",
          "-1": "file error",
          "-2": "stream error",
          "-3": "data error",
          "-4": "insufficient memory",
          "-5": "buffer error",
          "-6": "incompatible version",
        },
        Gi = {
          Z_NO_FLUSH: 0,
          Z_PARTIAL_FLUSH: 1,
          Z_SYNC_FLUSH: 2,
          Z_FULL_FLUSH: 3,
          Z_FINISH: 4,
          Z_BLOCK: 5,
          Z_TREES: 6,
          Z_OK: 0,
          Z_STREAM_END: 1,
          Z_NEED_DICT: 2,
          Z_ERRNO: -1,
          Z_STREAM_ERROR: -2,
          Z_DATA_ERROR: -3,
          Z_MEM_ERROR: -4,
          Z_BUF_ERROR: -5,
          Z_NO_COMPRESSION: 0,
          Z_BEST_SPEED: 1,
          Z_BEST_COMPRESSION: 9,
          Z_DEFAULT_COMPRESSION: -1,
          Z_FILTERED: 1,
          Z_HUFFMAN_ONLY: 2,
          Z_RLE: 3,
          Z_FIXED: 4,
          Z_DEFAULT_STRATEGY: 0,
          Z_BINARY: 0,
          Z_TEXT: 1,
          Z_UNKNOWN: 2,
          Z_DEFLATED: 8,
        };
      const {
          _tr_init: qi,
          _tr_stored_block: ji,
          _tr_flush_block: Zi,
          _tr_tally: Yi,
          _tr_align: Xi,
        } = Oi,
        {
          Z_NO_FLUSH: Ji,
          Z_PARTIAL_FLUSH: Qi,
          Z_FULL_FLUSH: Ki,
          Z_FINISH: $i,
          Z_BLOCK: tr,
          Z_OK: er,
          Z_STREAM_END: nr,
          Z_STREAM_ERROR: ir,
          Z_DATA_ERROR: rr,
          Z_BUF_ERROR: ar,
          Z_DEFAULT_COMPRESSION: or,
          Z_FILTERED: sr,
          Z_HUFFMAN_ONLY: lr,
          Z_RLE: cr,
          Z_FIXED: hr,
          Z_DEFAULT_STRATEGY: dr,
          Z_UNKNOWN: ur,
          Z_DEFLATED: fr,
        } = Gi,
        mr = 258,
        pr = 262,
        gr = 42,
        _r = 113,
        vr = 666,
        yr = (t, e) => ((t.msg = Wi[e]), e),
        xr = (t) => 2 * t - (t > 4 ? 9 : 0),
        wr = (t) => {
          let e = t.length;
          for (; --e >= 0; ) t[e] = 0;
        },
        Sr = (t) => {
          let e,
            n,
            i,
            r = t.w_size;
          (e = t.hash_size), (i = e);
          do {
            (n = t.head[--i]), (t.head[i] = n >= r ? n - r : 0);
          } while (--e);
          (e = r), (i = e);
          do {
            (n = t.prev[--i]), (t.prev[i] = n >= r ? n - r : 0);
          } while (--e);
        };
      let br = (t, e, n) => ((e << t.hash_shift) ^ n) & t.hash_mask;
      const Mr = (t) => {
          const e = t.state;
          let n = e.pending;
          n > t.avail_out && (n = t.avail_out),
            0 !== n &&
              (t.output.set(
                e.pending_buf.subarray(e.pending_out, e.pending_out + n),
                t.next_out
              ),
              (t.next_out += n),
              (e.pending_out += n),
              (t.total_out += n),
              (t.avail_out -= n),
              (e.pending -= n),
              0 === e.pending && (e.pending_out = 0));
        },
        Ar = (t, e) => {
          Zi(
            t,
            t.block_start >= 0 ? t.block_start : -1,
            t.strstart - t.block_start,
            e
          ),
            (t.block_start = t.strstart),
            Mr(t.strm);
        },
        Tr = (t, e) => {
          t.pending_buf[t.pending++] = e;
        },
        Er = (t, e) => {
          (t.pending_buf[t.pending++] = (e >>> 8) & 255),
            (t.pending_buf[t.pending++] = 255 & e);
        },
        Cr = (t, e, n, i) => {
          let r = t.avail_in;
          return (
            r > i && (r = i),
            0 === r
              ? 0
              : ((t.avail_in -= r),
                e.set(t.input.subarray(t.next_in, t.next_in + r), n),
                1 === t.state.wrap
                  ? (t.adler = Vi(t.adler, e, r, n))
                  : 2 === t.state.wrap && (t.adler = Hi(t.adler, e, r, n)),
                (t.next_in += r),
                (t.total_in += r),
                r)
          );
        },
        Pr = (t, e) => {
          let n,
            i,
            r = t.max_chain_length,
            a = t.strstart,
            o = t.prev_length,
            s = t.nice_match;
          const l =
              t.strstart > t.w_size - pr ? t.strstart - (t.w_size - pr) : 0,
            c = t.window,
            h = t.w_mask,
            d = t.prev,
            u = t.strstart + mr;
          let f = c[a + o - 1],
            m = c[a + o];
          t.prev_length >= t.good_match && (r >>= 2),
            s > t.lookahead && (s = t.lookahead);
          do {
            if (
              ((n = e),
              c[n + o] === m &&
                c[n + o - 1] === f &&
                c[n] === c[a] &&
                c[++n] === c[a + 1])
            ) {
              (a += 2), n++;
              do {} while (
                c[++a] === c[++n] &&
                c[++a] === c[++n] &&
                c[++a] === c[++n] &&
                c[++a] === c[++n] &&
                c[++a] === c[++n] &&
                c[++a] === c[++n] &&
                c[++a] === c[++n] &&
                c[++a] === c[++n] &&
                a < u
              );
              if (((i = mr - (u - a)), (a = u - mr), i > o)) {
                if (((t.match_start = e), (o = i), i >= s)) break;
                (f = c[a + o - 1]), (m = c[a + o]);
              }
            }
          } while ((e = d[e & h]) > l && 0 != --r);
          return o <= t.lookahead ? o : t.lookahead;
        },
        kr = (t) => {
          const e = t.w_size;
          let n, i, r;
          do {
            if (
              ((i = t.window_size - t.lookahead - t.strstart),
              t.strstart >= e + (e - pr) &&
                (t.window.set(t.window.subarray(e, e + e - i), 0),
                (t.match_start -= e),
                (t.strstart -= e),
                (t.block_start -= e),
                t.insert > t.strstart && (t.insert = t.strstart),
                Sr(t),
                (i += e)),
              0 === t.strm.avail_in)
            )
              break;
            if (
              ((n = Cr(t.strm, t.window, t.strstart + t.lookahead, i)),
              (t.lookahead += n),
              t.lookahead + t.insert >= 3)
            )
              for (
                r = t.strstart - t.insert,
                  t.ins_h = t.window[r],
                  t.ins_h = br(t, t.ins_h, t.window[r + 1]);
                t.insert &&
                ((t.ins_h = br(t, t.ins_h, t.window[r + 3 - 1])),
                (t.prev[r & t.w_mask] = t.head[t.ins_h]),
                (t.head[t.ins_h] = r),
                r++,
                t.insert--,
                !(t.lookahead + t.insert < 3));

              );
          } while (t.lookahead < pr && 0 !== t.strm.avail_in);
        },
        Ir = (t, e) => {
          let n,
            i,
            r,
            a =
              t.pending_buf_size - 5 > t.w_size
                ? t.w_size
                : t.pending_buf_size - 5,
            o = 0,
            s = t.strm.avail_in;
          do {
            if (
              ((n = 65535), (r = (t.bi_valid + 42) >> 3), t.strm.avail_out < r)
            )
              break;
            if (
              ((r = t.strm.avail_out - r),
              (i = t.strstart - t.block_start),
              n > i + t.strm.avail_in && (n = i + t.strm.avail_in),
              n > r && (n = r),
              n < a &&
                ((0 === n && e !== $i) ||
                  e === Ji ||
                  n !== i + t.strm.avail_in))
            )
              break;
            (o = e === $i && n === i + t.strm.avail_in ? 1 : 0),
              ji(t, 0, 0, o),
              (t.pending_buf[t.pending - 4] = n),
              (t.pending_buf[t.pending - 3] = n >> 8),
              (t.pending_buf[t.pending - 2] = ~n),
              (t.pending_buf[t.pending - 1] = ~n >> 8),
              Mr(t.strm),
              i &&
                (i > n && (i = n),
                t.strm.output.set(
                  t.window.subarray(t.block_start, t.block_start + i),
                  t.strm.next_out
                ),
                (t.strm.next_out += i),
                (t.strm.avail_out -= i),
                (t.strm.total_out += i),
                (t.block_start += i),
                (n -= i)),
              n &&
                (Cr(t.strm, t.strm.output, t.strm.next_out, n),
                (t.strm.next_out += n),
                (t.strm.avail_out -= n),
                (t.strm.total_out += n));
          } while (0 === o);
          return (
            (s -= t.strm.avail_in),
            s &&
              (s >= t.w_size
                ? ((t.matches = 2),
                  t.window.set(
                    t.strm.input.subarray(
                      t.strm.next_in - t.w_size,
                      t.strm.next_in
                    ),
                    0
                  ),
                  (t.strstart = t.w_size),
                  (t.insert = t.strstart))
                : (t.window_size - t.strstart <= s &&
                    ((t.strstart -= t.w_size),
                    t.window.set(
                      t.window.subarray(t.w_size, t.w_size + t.strstart),
                      0
                    ),
                    t.matches < 2 && t.matches++,
                    t.insert > t.strstart && (t.insert = t.strstart)),
                  t.window.set(
                    t.strm.input.subarray(t.strm.next_in - s, t.strm.next_in),
                    t.strstart
                  ),
                  (t.strstart += s),
                  (t.insert +=
                    s > t.w_size - t.insert ? t.w_size - t.insert : s)),
              (t.block_start = t.strstart)),
            t.high_water < t.strstart && (t.high_water = t.strstart),
            o
              ? 4
              : e !== Ji &&
                e !== $i &&
                0 === t.strm.avail_in &&
                t.strstart === t.block_start
              ? 2
              : ((r = t.window_size - t.strstart),
                t.strm.avail_in > r &&
                  t.block_start >= t.w_size &&
                  ((t.block_start -= t.w_size),
                  (t.strstart -= t.w_size),
                  t.window.set(
                    t.window.subarray(t.w_size, t.w_size + t.strstart),
                    0
                  ),
                  t.matches < 2 && t.matches++,
                  (r += t.w_size),
                  t.insert > t.strstart && (t.insert = t.strstart)),
                r > t.strm.avail_in && (r = t.strm.avail_in),
                r &&
                  (Cr(t.strm, t.window, t.strstart, r),
                  (t.strstart += r),
                  (t.insert +=
                    r > t.w_size - t.insert ? t.w_size - t.insert : r)),
                t.high_water < t.strstart && (t.high_water = t.strstart),
                (r = (t.bi_valid + 42) >> 3),
                (r =
                  t.pending_buf_size - r > 65535
                    ? 65535
                    : t.pending_buf_size - r),
                (a = r > t.w_size ? t.w_size : r),
                (i = t.strstart - t.block_start),
                (i >= a ||
                  ((i || e === $i) &&
                    e !== Ji &&
                    0 === t.strm.avail_in &&
                    i <= r)) &&
                  ((n = i > r ? r : i),
                  (o = e === $i && 0 === t.strm.avail_in && n === i ? 1 : 0),
                  ji(t, t.block_start, n, o),
                  (t.block_start += n),
                  Mr(t.strm)),
                o ? 3 : 1)
          );
        },
        Dr = (t, e) => {
          let n, i;
          for (;;) {
            if (t.lookahead < pr) {
              if ((kr(t), t.lookahead < pr && e === Ji)) return 1;
              if (0 === t.lookahead) break;
            }
            if (
              ((n = 0),
              t.lookahead >= 3 &&
                ((t.ins_h = br(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                (t.head[t.ins_h] = t.strstart)),
              0 !== n &&
                t.strstart - n <= t.w_size - pr &&
                (t.match_length = Pr(t, n)),
              t.match_length >= 3)
            )
              if (
                ((i = Yi(t, t.strstart - t.match_start, t.match_length - 3)),
                (t.lookahead -= t.match_length),
                t.match_length <= t.max_lazy_match && t.lookahead >= 3)
              ) {
                t.match_length--;
                do {
                  t.strstart++,
                    (t.ins_h = br(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                    (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                    (t.head[t.ins_h] = t.strstart);
                } while (0 != --t.match_length);
                t.strstart++;
              } else
                (t.strstart += t.match_length),
                  (t.match_length = 0),
                  (t.ins_h = t.window[t.strstart]),
                  (t.ins_h = br(t, t.ins_h, t.window[t.strstart + 1]));
            else
              (i = Yi(t, 0, t.window[t.strstart])), t.lookahead--, t.strstart++;
            if (i && (Ar(t, !1), 0 === t.strm.avail_out)) return 1;
          }
          return (
            (t.insert = t.strstart < 2 ? t.strstart : 2),
            e === $i
              ? (Ar(t, !0), 0 === t.strm.avail_out ? 3 : 4)
              : t.sym_next && (Ar(t, !1), 0 === t.strm.avail_out)
              ? 1
              : 2
          );
        },
        Nr = (t, e) => {
          let n, i, r;
          for (;;) {
            if (t.lookahead < pr) {
              if ((kr(t), t.lookahead < pr && e === Ji)) return 1;
              if (0 === t.lookahead) break;
            }
            if (
              ((n = 0),
              t.lookahead >= 3 &&
                ((t.ins_h = br(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                (t.head[t.ins_h] = t.strstart)),
              (t.prev_length = t.match_length),
              (t.prev_match = t.match_start),
              (t.match_length = 2),
              0 !== n &&
                t.prev_length < t.max_lazy_match &&
                t.strstart - n <= t.w_size - pr &&
                ((t.match_length = Pr(t, n)),
                t.match_length <= 5 &&
                  (t.strategy === sr ||
                    (3 === t.match_length &&
                      t.strstart - t.match_start > 4096)) &&
                  (t.match_length = 2)),
              t.prev_length >= 3 && t.match_length <= t.prev_length)
            ) {
              (r = t.strstart + t.lookahead - 3),
                (i = Yi(t, t.strstart - 1 - t.prev_match, t.prev_length - 3)),
                (t.lookahead -= t.prev_length - 1),
                (t.prev_length -= 2);
              do {
                ++t.strstart <= r &&
                  ((t.ins_h = br(t, t.ins_h, t.window[t.strstart + 3 - 1])),
                  (n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                  (t.head[t.ins_h] = t.strstart));
              } while (0 != --t.prev_length);
              if (
                ((t.match_available = 0),
                (t.match_length = 2),
                t.strstart++,
                i && (Ar(t, !1), 0 === t.strm.avail_out))
              )
                return 1;
            } else if (t.match_available) {
              if (
                ((i = Yi(t, 0, t.window[t.strstart - 1])),
                i && Ar(t, !1),
                t.strstart++,
                t.lookahead--,
                0 === t.strm.avail_out)
              )
                return 1;
            } else (t.match_available = 1), t.strstart++, t.lookahead--;
          }
          return (
            t.match_available &&
              ((i = Yi(t, 0, t.window[t.strstart - 1])),
              (t.match_available = 0)),
            (t.insert = t.strstart < 2 ? t.strstart : 2),
            e === $i
              ? (Ar(t, !0), 0 === t.strm.avail_out ? 3 : 4)
              : t.sym_next && (Ar(t, !1), 0 === t.strm.avail_out)
              ? 1
              : 2
          );
        };
      function Rr(t, e, n, i, r) {
        (this.good_length = t),
          (this.max_lazy = e),
          (this.nice_length = n),
          (this.max_chain = i),
          (this.func = r);
      }
      const Lr = [
        new Rr(0, 0, 0, 0, Ir),
        new Rr(4, 4, 8, 4, Dr),
        new Rr(4, 5, 16, 8, Dr),
        new Rr(4, 6, 32, 32, Dr),
        new Rr(4, 4, 16, 16, Nr),
        new Rr(8, 16, 32, 32, Nr),
        new Rr(8, 16, 128, 128, Nr),
        new Rr(8, 32, 128, 256, Nr),
        new Rr(32, 128, 258, 1024, Nr),
        new Rr(32, 258, 258, 4096, Nr),
      ];
      function zr() {
        (this.strm = null),
          (this.status = 0),
          (this.pending_buf = null),
          (this.pending_buf_size = 0),
          (this.pending_out = 0),
          (this.pending = 0),
          (this.wrap = 0),
          (this.gzhead = null),
          (this.gzindex = 0),
          (this.method = fr),
          (this.last_flush = -1),
          (this.w_size = 0),
          (this.w_bits = 0),
          (this.w_mask = 0),
          (this.window = null),
          (this.window_size = 0),
          (this.prev = null),
          (this.head = null),
          (this.ins_h = 0),
          (this.hash_size = 0),
          (this.hash_bits = 0),
          (this.hash_mask = 0),
          (this.hash_shift = 0),
          (this.block_start = 0),
          (this.match_length = 0),
          (this.prev_match = 0),
          (this.match_available = 0),
          (this.strstart = 0),
          (this.match_start = 0),
          (this.lookahead = 0),
          (this.prev_length = 0),
          (this.max_chain_length = 0),
          (this.max_lazy_match = 0),
          (this.level = 0),
          (this.strategy = 0),
          (this.good_match = 0),
          (this.nice_match = 0),
          (this.dyn_ltree = new Uint16Array(1146)),
          (this.dyn_dtree = new Uint16Array(122)),
          (this.bl_tree = new Uint16Array(78)),
          wr(this.dyn_ltree),
          wr(this.dyn_dtree),
          wr(this.bl_tree),
          (this.l_desc = null),
          (this.d_desc = null),
          (this.bl_desc = null),
          (this.bl_count = new Uint16Array(16)),
          (this.heap = new Uint16Array(573)),
          wr(this.heap),
          (this.heap_len = 0),
          (this.heap_max = 0),
          (this.depth = new Uint16Array(573)),
          wr(this.depth),
          (this.sym_buf = 0),
          (this.lit_bufsize = 0),
          (this.sym_next = 0),
          (this.sym_end = 0),
          (this.opt_len = 0),
          (this.static_len = 0),
          (this.matches = 0),
          (this.insert = 0),
          (this.bi_buf = 0),
          (this.bi_valid = 0);
      }
      const Ur = (t) => {
          if (!t) return 1;
          const e = t.state;
          return !e ||
            e.strm !== t ||
            (e.status !== gr &&
              57 !== e.status &&
              69 !== e.status &&
              73 !== e.status &&
              91 !== e.status &&
              103 !== e.status &&
              e.status !== _r &&
              e.status !== vr)
            ? 1
            : 0;
        },
        Br = (t) => {
          if (Ur(t)) return yr(t, ir);
          (t.total_in = t.total_out = 0), (t.data_type = ur);
          const e = t.state;
          return (
            (e.pending = 0),
            (e.pending_out = 0),
            e.wrap < 0 && (e.wrap = -e.wrap),
            (e.status = 2 === e.wrap ? 57 : e.wrap ? gr : _r),
            (t.adler = 2 === e.wrap ? 0 : 1),
            (e.last_flush = -2),
            qi(e),
            er
          );
        },
        Or = (t) => {
          const e = Br(t);
          var n;
          return (
            e === er &&
              (((n = t.state).window_size = 2 * n.w_size),
              wr(n.head),
              (n.max_lazy_match = Lr[n.level].max_lazy),
              (n.good_match = Lr[n.level].good_length),
              (n.nice_match = Lr[n.level].nice_length),
              (n.max_chain_length = Lr[n.level].max_chain),
              (n.strstart = 0),
              (n.block_start = 0),
              (n.lookahead = 0),
              (n.insert = 0),
              (n.match_length = n.prev_length = 2),
              (n.match_available = 0),
              (n.ins_h = 0)),
            e
          );
        },
        Vr = (t, e, n, i, r, a) => {
          if (!t) return ir;
          let o = 1;
          if (
            (e === or && (e = 6),
            i < 0 ? ((o = 0), (i = -i)) : i > 15 && ((o = 2), (i -= 16)),
            r < 1 ||
              r > 9 ||
              n !== fr ||
              i < 8 ||
              i > 15 ||
              e < 0 ||
              e > 9 ||
              a < 0 ||
              a > hr ||
              (8 === i && 1 !== o))
          )
            return yr(t, ir);
          8 === i && (i = 9);
          const s = new zr();
          return (
            (t.state = s),
            (s.strm = t),
            (s.status = gr),
            (s.wrap = o),
            (s.gzhead = null),
            (s.w_bits = i),
            (s.w_size = 1 << s.w_bits),
            (s.w_mask = s.w_size - 1),
            (s.hash_bits = r + 7),
            (s.hash_size = 1 << s.hash_bits),
            (s.hash_mask = s.hash_size - 1),
            (s.hash_shift = ~~((s.hash_bits + 3 - 1) / 3)),
            (s.window = new Uint8Array(2 * s.w_size)),
            (s.head = new Uint16Array(s.hash_size)),
            (s.prev = new Uint16Array(s.w_size)),
            (s.lit_bufsize = 1 << (r + 6)),
            (s.pending_buf_size = 4 * s.lit_bufsize),
            (s.pending_buf = new Uint8Array(s.pending_buf_size)),
            (s.sym_buf = s.lit_bufsize),
            (s.sym_end = 3 * (s.lit_bufsize - 1)),
            (s.level = e),
            (s.strategy = a),
            (s.method = n),
            Or(t)
          );
        };
      var Fr = {
        deflateInit: (t, e) => Vr(t, e, fr, 15, 8, dr),
        deflateInit2: Vr,
        deflateReset: Or,
        deflateResetKeep: Br,
        deflateSetHeader: (t, e) =>
          Ur(t) || 2 !== t.state.wrap ? ir : ((t.state.gzhead = e), er),
        deflate: (t, e) => {
          if (Ur(t) || e > tr || e < 0) return t ? yr(t, ir) : ir;
          const n = t.state;
          if (
            !t.output ||
            (0 !== t.avail_in && !t.input) ||
            (n.status === vr && e !== $i)
          )
            return yr(t, 0 === t.avail_out ? ar : ir);
          const i = n.last_flush;
          if (((n.last_flush = e), 0 !== n.pending)) {
            if ((Mr(t), 0 === t.avail_out)) return (n.last_flush = -1), er;
          } else if (0 === t.avail_in && xr(e) <= xr(i) && e !== $i)
            return yr(t, ar);
          if (n.status === vr && 0 !== t.avail_in) return yr(t, ar);
          if (
            (n.status === gr && 0 === n.wrap && (n.status = _r),
            n.status === gr)
          ) {
            let e = (fr + ((n.w_bits - 8) << 4)) << 8,
              i = -1;
            if (
              ((i =
                n.strategy >= lr || n.level < 2
                  ? 0
                  : n.level < 6
                  ? 1
                  : 6 === n.level
                  ? 2
                  : 3),
              (e |= i << 6),
              0 !== n.strstart && (e |= 32),
              (e += 31 - (e % 31)),
              Er(n, e),
              0 !== n.strstart &&
                (Er(n, t.adler >>> 16), Er(n, 65535 & t.adler)),
              (t.adler = 1),
              (n.status = _r),
              Mr(t),
              0 !== n.pending)
            )
              return (n.last_flush = -1), er;
          }
          if (57 === n.status)
            if (((t.adler = 0), Tr(n, 31), Tr(n, 139), Tr(n, 8), n.gzhead))
              Tr(
                n,
                (n.gzhead.text ? 1 : 0) +
                  (n.gzhead.hcrc ? 2 : 0) +
                  (n.gzhead.extra ? 4 : 0) +
                  (n.gzhead.name ? 8 : 0) +
                  (n.gzhead.comment ? 16 : 0)
              ),
                Tr(n, 255 & n.gzhead.time),
                Tr(n, (n.gzhead.time >> 8) & 255),
                Tr(n, (n.gzhead.time >> 16) & 255),
                Tr(n, (n.gzhead.time >> 24) & 255),
                Tr(
                  n,
                  9 === n.level ? 2 : n.strategy >= lr || n.level < 2 ? 4 : 0
                ),
                Tr(n, 255 & n.gzhead.os),
                n.gzhead.extra &&
                  n.gzhead.extra.length &&
                  (Tr(n, 255 & n.gzhead.extra.length),
                  Tr(n, (n.gzhead.extra.length >> 8) & 255)),
                n.gzhead.hcrc &&
                  (t.adler = Hi(t.adler, n.pending_buf, n.pending, 0)),
                (n.gzindex = 0),
                (n.status = 69);
            else if (
              (Tr(n, 0),
              Tr(n, 0),
              Tr(n, 0),
              Tr(n, 0),
              Tr(n, 0),
              Tr(
                n,
                9 === n.level ? 2 : n.strategy >= lr || n.level < 2 ? 4 : 0
              ),
              Tr(n, 3),
              (n.status = _r),
              Mr(t),
              0 !== n.pending)
            )
              return (n.last_flush = -1), er;
          if (69 === n.status) {
            if (n.gzhead.extra) {
              let e = n.pending,
                i = (65535 & n.gzhead.extra.length) - n.gzindex;
              for (; n.pending + i > n.pending_buf_size; ) {
                let r = n.pending_buf_size - n.pending;
                if (
                  (n.pending_buf.set(
                    n.gzhead.extra.subarray(n.gzindex, n.gzindex + r),
                    n.pending
                  ),
                  (n.pending = n.pending_buf_size),
                  n.gzhead.hcrc &&
                    n.pending > e &&
                    (t.adler = Hi(t.adler, n.pending_buf, n.pending - e, e)),
                  (n.gzindex += r),
                  Mr(t),
                  0 !== n.pending)
                )
                  return (n.last_flush = -1), er;
                (e = 0), (i -= r);
              }
              let r = new Uint8Array(n.gzhead.extra);
              n.pending_buf.set(
                r.subarray(n.gzindex, n.gzindex + i),
                n.pending
              ),
                (n.pending += i),
                n.gzhead.hcrc &&
                  n.pending > e &&
                  (t.adler = Hi(t.adler, n.pending_buf, n.pending - e, e)),
                (n.gzindex = 0);
            }
            n.status = 73;
          }
          if (73 === n.status) {
            if (n.gzhead.name) {
              let e,
                i = n.pending;
              do {
                if (n.pending === n.pending_buf_size) {
                  if (
                    (n.gzhead.hcrc &&
                      n.pending > i &&
                      (t.adler = Hi(t.adler, n.pending_buf, n.pending - i, i)),
                    Mr(t),
                    0 !== n.pending)
                  )
                    return (n.last_flush = -1), er;
                  i = 0;
                }
                (e =
                  n.gzindex < n.gzhead.name.length
                    ? 255 & n.gzhead.name.charCodeAt(n.gzindex++)
                    : 0),
                  Tr(n, e);
              } while (0 !== e);
              n.gzhead.hcrc &&
                n.pending > i &&
                (t.adler = Hi(t.adler, n.pending_buf, n.pending - i, i)),
                (n.gzindex = 0);
            }
            n.status = 91;
          }
          if (91 === n.status) {
            if (n.gzhead.comment) {
              let e,
                i = n.pending;
              do {
                if (n.pending === n.pending_buf_size) {
                  if (
                    (n.gzhead.hcrc &&
                      n.pending > i &&
                      (t.adler = Hi(t.adler, n.pending_buf, n.pending - i, i)),
                    Mr(t),
                    0 !== n.pending)
                  )
                    return (n.last_flush = -1), er;
                  i = 0;
                }
                (e =
                  n.gzindex < n.gzhead.comment.length
                    ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++)
                    : 0),
                  Tr(n, e);
              } while (0 !== e);
              n.gzhead.hcrc &&
                n.pending > i &&
                (t.adler = Hi(t.adler, n.pending_buf, n.pending - i, i));
            }
            n.status = 103;
          }
          if (103 === n.status) {
            if (n.gzhead.hcrc) {
              if (
                n.pending + 2 > n.pending_buf_size &&
                (Mr(t), 0 !== n.pending)
              )
                return (n.last_flush = -1), er;
              Tr(n, 255 & t.adler), Tr(n, (t.adler >> 8) & 255), (t.adler = 0);
            }
            if (((n.status = _r), Mr(t), 0 !== n.pending))
              return (n.last_flush = -1), er;
          }
          if (
            0 !== t.avail_in ||
            0 !== n.lookahead ||
            (e !== Ji && n.status !== vr)
          ) {
            let i =
              0 === n.level
                ? Ir(n, e)
                : n.strategy === lr
                ? ((t, e) => {
                    let n;
                    for (;;) {
                      if (0 === t.lookahead && (kr(t), 0 === t.lookahead)) {
                        if (e === Ji) return 1;
                        break;
                      }
                      if (
                        ((t.match_length = 0),
                        (n = Yi(t, 0, t.window[t.strstart])),
                        t.lookahead--,
                        t.strstart++,
                        n && (Ar(t, !1), 0 === t.strm.avail_out))
                      )
                        return 1;
                    }
                    return (
                      (t.insert = 0),
                      e === $i
                        ? (Ar(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                        : t.sym_next && (Ar(t, !1), 0 === t.strm.avail_out)
                        ? 1
                        : 2
                    );
                  })(n, e)
                : n.strategy === cr
                ? ((t, e) => {
                    let n, i, r, a;
                    const o = t.window;
                    for (;;) {
                      if (t.lookahead <= mr) {
                        if ((kr(t), t.lookahead <= mr && e === Ji)) return 1;
                        if (0 === t.lookahead) break;
                      }
                      if (
                        ((t.match_length = 0),
                        t.lookahead >= 3 &&
                          t.strstart > 0 &&
                          ((r = t.strstart - 1),
                          (i = o[r]),
                          i === o[++r] && i === o[++r] && i === o[++r]))
                      ) {
                        a = t.strstart + mr;
                        do {} while (
                          i === o[++r] &&
                          i === o[++r] &&
                          i === o[++r] &&
                          i === o[++r] &&
                          i === o[++r] &&
                          i === o[++r] &&
                          i === o[++r] &&
                          i === o[++r] &&
                          r < a
                        );
                        (t.match_length = mr - (a - r)),
                          t.match_length > t.lookahead &&
                            (t.match_length = t.lookahead);
                      }
                      if (
                        (t.match_length >= 3
                          ? ((n = Yi(t, 1, t.match_length - 3)),
                            (t.lookahead -= t.match_length),
                            (t.strstart += t.match_length),
                            (t.match_length = 0))
                          : ((n = Yi(t, 0, t.window[t.strstart])),
                            t.lookahead--,
                            t.strstart++),
                        n && (Ar(t, !1), 0 === t.strm.avail_out))
                      )
                        return 1;
                    }
                    return (
                      (t.insert = 0),
                      e === $i
                        ? (Ar(t, !0), 0 === t.strm.avail_out ? 3 : 4)
                        : t.sym_next && (Ar(t, !1), 0 === t.strm.avail_out)
                        ? 1
                        : 2
                    );
                  })(n, e)
                : Lr[n.level].func(n, e);
            if (((3 !== i && 4 !== i) || (n.status = vr), 1 === i || 3 === i))
              return 0 === t.avail_out && (n.last_flush = -1), er;
            if (
              2 === i &&
              (e === Qi
                ? Xi(n)
                : e !== tr &&
                  (ji(n, 0, 0, !1),
                  e === Ki &&
                    (wr(n.head),
                    0 === n.lookahead &&
                      ((n.strstart = 0), (n.block_start = 0), (n.insert = 0)))),
              Mr(t),
              0 === t.avail_out)
            )
              return (n.last_flush = -1), er;
          }
          return e !== $i
            ? er
            : n.wrap <= 0
            ? nr
            : (2 === n.wrap
                ? (Tr(n, 255 & t.adler),
                  Tr(n, (t.adler >> 8) & 255),
                  Tr(n, (t.adler >> 16) & 255),
                  Tr(n, (t.adler >> 24) & 255),
                  Tr(n, 255 & t.total_in),
                  Tr(n, (t.total_in >> 8) & 255),
                  Tr(n, (t.total_in >> 16) & 255),
                  Tr(n, (t.total_in >> 24) & 255))
                : (Er(n, t.adler >>> 16), Er(n, 65535 & t.adler)),
              Mr(t),
              n.wrap > 0 && (n.wrap = -n.wrap),
              0 !== n.pending ? er : nr);
        },
        deflateEnd: (t) => {
          if (Ur(t)) return ir;
          const e = t.state.status;
          return (t.state = null), e === _r ? yr(t, rr) : er;
        },
        deflateSetDictionary: (t, e) => {
          let n = e.length;
          if (Ur(t)) return ir;
          const i = t.state,
            r = i.wrap;
          if (2 === r || (1 === r && i.status !== gr) || i.lookahead) return ir;
          if (
            (1 === r && (t.adler = Vi(t.adler, e, n, 0)),
            (i.wrap = 0),
            n >= i.w_size)
          ) {
            0 === r &&
              (wr(i.head),
              (i.strstart = 0),
              (i.block_start = 0),
              (i.insert = 0));
            let t = new Uint8Array(i.w_size);
            t.set(e.subarray(n - i.w_size, n), 0), (e = t), (n = i.w_size);
          }
          const a = t.avail_in,
            o = t.next_in,
            s = t.input;
          for (
            t.avail_in = n, t.next_in = 0, t.input = e, kr(i);
            i.lookahead >= 3;

          ) {
            let t = i.strstart,
              e = i.lookahead - 2;
            do {
              (i.ins_h = br(i, i.ins_h, i.window[t + 3 - 1])),
                (i.prev[t & i.w_mask] = i.head[i.ins_h]),
                (i.head[i.ins_h] = t),
                t++;
            } while (--e);
            (i.strstart = t), (i.lookahead = 2), kr(i);
          }
          return (
            (i.strstart += i.lookahead),
            (i.block_start = i.strstart),
            (i.insert = i.lookahead),
            (i.lookahead = 0),
            (i.match_length = i.prev_length = 2),
            (i.match_available = 0),
            (t.next_in = o),
            (t.input = s),
            (t.avail_in = a),
            (i.wrap = r),
            er
          );
        },
        deflateInfo: "pako deflate (from Nodeca project)",
      };
      const Hr = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
      var Wr = {
        assign: function (t) {
          const e = Array.prototype.slice.call(arguments, 1);
          for (; e.length; ) {
            const n = e.shift();
            if (n) {
              if ("object" != typeof n)
                throw new TypeError(n + "must be non-object");
              for (const e in n) Hr(n, e) && (t[e] = n[e]);
            }
          }
          return t;
        },
        flattenChunks: (t) => {
          let e = 0;
          for (let n = 0, i = t.length; n < i; n++) e += t[n].length;
          const n = new Uint8Array(e);
          for (let e = 0, i = 0, r = t.length; e < r; e++) {
            let r = t[e];
            n.set(r, i), (i += r.length);
          }
          return n;
        },
      };
      let Gr = !0;
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (t) {
        Gr = !1;
      }
      const qr = new Uint8Array(256);
      for (let t = 0; t < 256; t++)
        qr[t] =
          t >= 252
            ? 6
            : t >= 248
            ? 5
            : t >= 240
            ? 4
            : t >= 224
            ? 3
            : t >= 192
            ? 2
            : 1;
      qr[254] = qr[254] = 1;
      var jr = {
        string2buf: (t) => {
          if ("function" == typeof TextEncoder && TextEncoder.prototype.encode)
            return new TextEncoder().encode(t);
          let e,
            n,
            i,
            r,
            a,
            o = t.length,
            s = 0;
          for (r = 0; r < o; r++)
            (n = t.charCodeAt(r)),
              55296 == (64512 & n) &&
                r + 1 < o &&
                ((i = t.charCodeAt(r + 1)),
                56320 == (64512 & i) &&
                  ((n = 65536 + ((n - 55296) << 10) + (i - 56320)), r++)),
              (s += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
          for (e = new Uint8Array(s), a = 0, r = 0; a < s; r++)
            (n = t.charCodeAt(r)),
              55296 == (64512 & n) &&
                r + 1 < o &&
                ((i = t.charCodeAt(r + 1)),
                56320 == (64512 & i) &&
                  ((n = 65536 + ((n - 55296) << 10) + (i - 56320)), r++)),
              n < 128
                ? (e[a++] = n)
                : n < 2048
                ? ((e[a++] = 192 | (n >>> 6)), (e[a++] = 128 | (63 & n)))
                : n < 65536
                ? ((e[a++] = 224 | (n >>> 12)),
                  (e[a++] = 128 | ((n >>> 6) & 63)),
                  (e[a++] = 128 | (63 & n)))
                : ((e[a++] = 240 | (n >>> 18)),
                  (e[a++] = 128 | ((n >>> 12) & 63)),
                  (e[a++] = 128 | ((n >>> 6) & 63)),
                  (e[a++] = 128 | (63 & n)));
          return e;
        },
        buf2string: (t, e) => {
          const n = e || t.length;
          if ("function" == typeof TextDecoder && TextDecoder.prototype.decode)
            return new TextDecoder().decode(t.subarray(0, e));
          let i, r;
          const a = new Array(2 * n);
          for (r = 0, i = 0; i < n; ) {
            let e = t[i++];
            if (e < 128) {
              a[r++] = e;
              continue;
            }
            let o = qr[e];
            if (o > 4) (a[r++] = 65533), (i += o - 1);
            else {
              for (e &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && i < n; )
                (e = (e << 6) | (63 & t[i++])), o--;
              o > 1
                ? (a[r++] = 65533)
                : e < 65536
                ? (a[r++] = e)
                : ((e -= 65536),
                  (a[r++] = 55296 | ((e >> 10) & 1023)),
                  (a[r++] = 56320 | (1023 & e)));
            }
          }
          return ((t, e) => {
            if (e < 65534 && t.subarray && Gr)
              return String.fromCharCode.apply(
                null,
                t.length === e ? t : t.subarray(0, e)
              );
            let n = "";
            for (let i = 0; i < e; i++) n += String.fromCharCode(t[i]);
            return n;
          })(a, r);
        },
        utf8border: (t, e) => {
          (e = e || t.length) > t.length && (e = t.length);
          let n = e - 1;
          for (; n >= 0 && 128 == (192 & t[n]); ) n--;
          return n < 0 || 0 === n ? e : n + qr[t[n]] > e ? n : e;
        },
      };
      var Zr = function () {
        (this.input = null),
          (this.next_in = 0),
          (this.avail_in = 0),
          (this.total_in = 0),
          (this.output = null),
          (this.next_out = 0),
          (this.avail_out = 0),
          (this.total_out = 0),
          (this.msg = ""),
          (this.state = null),
          (this.data_type = 2),
          (this.adler = 0);
      };
      const Yr = Object.prototype.toString,
        {
          Z_NO_FLUSH: Xr,
          Z_SYNC_FLUSH: Jr,
          Z_FULL_FLUSH: Qr,
          Z_FINISH: Kr,
          Z_OK: $r,
          Z_STREAM_END: ta,
          Z_DEFAULT_COMPRESSION: ea,
          Z_DEFAULT_STRATEGY: na,
          Z_DEFLATED: ia,
        } = Gi;
      function ra(t) {
        this.options = Wr.assign(
          {
            level: ea,
            method: ia,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: na,
          },
          t || {}
        );
        let e = this.options;
        e.raw && e.windowBits > 0
          ? (e.windowBits = -e.windowBits)
          : e.gzip &&
            e.windowBits > 0 &&
            e.windowBits < 16 &&
            (e.windowBits += 16),
          (this.err = 0),
          (this.msg = ""),
          (this.ended = !1),
          (this.chunks = []),
          (this.strm = new Zr()),
          (this.strm.avail_out = 0);
        let n = Fr.deflateInit2(
          this.strm,
          e.level,
          e.method,
          e.windowBits,
          e.memLevel,
          e.strategy
        );
        if (n !== $r) throw new Error(Wi[n]);
        if (
          (e.header && Fr.deflateSetHeader(this.strm, e.header), e.dictionary)
        ) {
          let t;
          if (
            ((t =
              "string" == typeof e.dictionary
                ? jr.string2buf(e.dictionary)
                : "[object ArrayBuffer]" === Yr.call(e.dictionary)
                ? new Uint8Array(e.dictionary)
                : e.dictionary),
            (n = Fr.deflateSetDictionary(this.strm, t)),
            n !== $r)
          )
            throw new Error(Wi[n]);
          this._dict_set = !0;
        }
      }
      function aa(t, e) {
        const n = new ra(e);
        if ((n.push(t, !0), n.err)) throw n.msg || Wi[n.err];
        return n.result;
      }
      (ra.prototype.push = function (t, e) {
        const n = this.strm,
          i = this.options.chunkSize;
        let r, a;
        if (this.ended) return !1;
        for (
          a = e === ~~e ? e : !0 === e ? Kr : Xr,
            "string" == typeof t
              ? (n.input = jr.string2buf(t))
              : "[object ArrayBuffer]" === Yr.call(t)
              ? (n.input = new Uint8Array(t))
              : (n.input = t),
            n.next_in = 0,
            n.avail_in = n.input.length;
          ;

        )
          if (
            (0 === n.avail_out &&
              ((n.output = new Uint8Array(i)),
              (n.next_out = 0),
              (n.avail_out = i)),
            (a === Jr || a === Qr) && n.avail_out <= 6)
          )
            this.onData(n.output.subarray(0, n.next_out)), (n.avail_out = 0);
          else {
            if (((r = Fr.deflate(n, a)), r === ta))
              return (
                n.next_out > 0 && this.onData(n.output.subarray(0, n.next_out)),
                (r = Fr.deflateEnd(this.strm)),
                this.onEnd(r),
                (this.ended = !0),
                r === $r
              );
            if (0 !== n.avail_out) {
              if (a > 0 && n.next_out > 0)
                this.onData(n.output.subarray(0, n.next_out)),
                  (n.avail_out = 0);
              else if (0 === n.avail_in) break;
            } else this.onData(n.output);
          }
        return !0;
      }),
        (ra.prototype.onData = function (t) {
          this.chunks.push(t);
        }),
        (ra.prototype.onEnd = function (t) {
          t === $r && (this.result = Wr.flattenChunks(this.chunks)),
            (this.chunks = []),
            (this.err = t),
            (this.msg = this.strm.msg);
        });
      var oa = {
        Deflate: ra,
        deflate: aa,
        deflateRaw: function (t, e) {
          return ((e = e || {}).raw = !0), aa(t, e);
        },
        gzip: function (t, e) {
          return ((e = e || {}).gzip = !0), aa(t, e);
        },
        constants: Gi,
      };
      const sa = 16209;
      var la = function (t, e) {
        let n,
          i,
          r,
          a,
          o,
          s,
          l,
          c,
          h,
          d,
          u,
          f,
          m,
          p,
          g,
          _,
          v,
          y,
          x,
          w,
          S,
          b,
          M,
          A;
        const T = t.state;
        (n = t.next_in),
          (M = t.input),
          (i = n + (t.avail_in - 5)),
          (r = t.next_out),
          (A = t.output),
          (a = r - (e - t.avail_out)),
          (o = r + (t.avail_out - 257)),
          (s = T.dmax),
          (l = T.wsize),
          (c = T.whave),
          (h = T.wnext),
          (d = T.window),
          (u = T.hold),
          (f = T.bits),
          (m = T.lencode),
          (p = T.distcode),
          (g = (1 << T.lenbits) - 1),
          (_ = (1 << T.distbits) - 1);
        t: do {
          f < 15 &&
            ((u += M[n++] << f), (f += 8), (u += M[n++] << f), (f += 8)),
            (v = m[u & g]);
          e: for (;;) {
            if (
              ((y = v >>> 24),
              (u >>>= y),
              (f -= y),
              (y = (v >>> 16) & 255),
              0 === y)
            )
              A[r++] = 65535 & v;
            else {
              if (!(16 & y)) {
                if (64 & y) {
                  if (32 & y) {
                    T.mode = 16191;
                    break t;
                  }
                  (t.msg = "invalid literal/length code"), (T.mode = sa);
                  break t;
                }
                v = m[(65535 & v) + (u & ((1 << y) - 1))];
                continue e;
              }
              for (
                x = 65535 & v,
                  y &= 15,
                  y &&
                    (f < y && ((u += M[n++] << f), (f += 8)),
                    (x += u & ((1 << y) - 1)),
                    (u >>>= y),
                    (f -= y)),
                  f < 15 &&
                    ((u += M[n++] << f),
                    (f += 8),
                    (u += M[n++] << f),
                    (f += 8)),
                  v = p[u & _];
                ;

              ) {
                if (
                  ((y = v >>> 24),
                  (u >>>= y),
                  (f -= y),
                  (y = (v >>> 16) & 255),
                  16 & y)
                ) {
                  if (
                    ((w = 65535 & v),
                    (y &= 15),
                    f < y &&
                      ((u += M[n++] << f),
                      (f += 8),
                      f < y && ((u += M[n++] << f), (f += 8))),
                    (w += u & ((1 << y) - 1)),
                    w > s)
                  ) {
                    (t.msg = "invalid distance too far back"), (T.mode = sa);
                    break t;
                  }
                  if (((u >>>= y), (f -= y), (y = r - a), w > y)) {
                    if (((y = w - y), y > c && T.sane)) {
                      (t.msg = "invalid distance too far back"), (T.mode = sa);
                      break t;
                    }
                    if (((S = 0), (b = d), 0 === h)) {
                      if (((S += l - y), y < x)) {
                        x -= y;
                        do {
                          A[r++] = d[S++];
                        } while (--y);
                        (S = r - w), (b = A);
                      }
                    } else if (h < y) {
                      if (((S += l + h - y), (y -= h), y < x)) {
                        x -= y;
                        do {
                          A[r++] = d[S++];
                        } while (--y);
                        if (((S = 0), h < x)) {
                          (y = h), (x -= y);
                          do {
                            A[r++] = d[S++];
                          } while (--y);
                          (S = r - w), (b = A);
                        }
                      }
                    } else if (((S += h - y), y < x)) {
                      x -= y;
                      do {
                        A[r++] = d[S++];
                      } while (--y);
                      (S = r - w), (b = A);
                    }
                    for (; x > 2; )
                      (A[r++] = b[S++]),
                        (A[r++] = b[S++]),
                        (A[r++] = b[S++]),
                        (x -= 3);
                    x && ((A[r++] = b[S++]), x > 1 && (A[r++] = b[S++]));
                  } else {
                    S = r - w;
                    do {
                      (A[r++] = A[S++]),
                        (A[r++] = A[S++]),
                        (A[r++] = A[S++]),
                        (x -= 3);
                    } while (x > 2);
                    x && ((A[r++] = A[S++]), x > 1 && (A[r++] = A[S++]));
                  }
                  break;
                }
                if (64 & y) {
                  (t.msg = "invalid distance code"), (T.mode = sa);
                  break t;
                }
                v = p[(65535 & v) + (u & ((1 << y) - 1))];
              }
            }
            break;
          }
        } while (n < i && r < o);
        (x = f >> 3),
          (n -= x),
          (f -= x << 3),
          (u &= (1 << f) - 1),
          (t.next_in = n),
          (t.next_out = r),
          (t.avail_in = n < i ? i - n + 5 : 5 - (n - i)),
          (t.avail_out = r < o ? o - r + 257 : 257 - (r - o)),
          (T.hold = u),
          (T.bits = f);
      };
      const ca = 15,
        ha = new Uint16Array([
          3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51,
          59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
        ]),
        da = new Uint8Array([
          16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19,
          19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
        ]),
        ua = new Uint16Array([
          1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
          513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
          24577, 0, 0,
        ]),
        fa = new Uint8Array([
          16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23,
          23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
        ]);
      var ma = (t, e, n, i, r, a, o, s) => {
        const l = s.bits;
        let c,
          h,
          d,
          u,
          f,
          m,
          p = 0,
          g = 0,
          _ = 0,
          v = 0,
          y = 0,
          x = 0,
          w = 0,
          S = 0,
          b = 0,
          M = 0,
          A = null;
        const T = new Uint16Array(16),
          E = new Uint16Array(16);
        let C,
          P,
          k,
          I = null;
        for (p = 0; p <= ca; p++) T[p] = 0;
        for (g = 0; g < i; g++) T[e[n + g]]++;
        for (y = l, v = ca; v >= 1 && 0 === T[v]; v--);
        if ((y > v && (y = v), 0 === v))
          return (r[a++] = 20971520), (r[a++] = 20971520), (s.bits = 1), 0;
        for (_ = 1; _ < v && 0 === T[_]; _++);
        for (y < _ && (y = _), S = 1, p = 1; p <= ca; p++)
          if (((S <<= 1), (S -= T[p]), S < 0)) return -1;
        if (S > 0 && (0 === t || 1 !== v)) return -1;
        for (E[1] = 0, p = 1; p < ca; p++) E[p + 1] = E[p] + T[p];
        for (g = 0; g < i; g++) 0 !== e[n + g] && (o[E[e[n + g]]++] = g);
        if (
          (0 === t
            ? ((A = I = o), (m = 20))
            : 1 === t
            ? ((A = ha), (I = da), (m = 257))
            : ((A = ua), (I = fa), (m = 0)),
          (M = 0),
          (g = 0),
          (p = _),
          (f = a),
          (x = y),
          (w = 0),
          (d = -1),
          (b = 1 << y),
          (u = b - 1),
          (1 === t && b > 852) || (2 === t && b > 592))
        )
          return 1;
        for (;;) {
          (C = p - w),
            o[g] + 1 < m
              ? ((P = 0), (k = o[g]))
              : o[g] >= m
              ? ((P = I[o[g] - m]), (k = A[o[g] - m]))
              : ((P = 96), (k = 0)),
            (c = 1 << (p - w)),
            (h = 1 << x),
            (_ = h);
          do {
            (h -= c), (r[f + (M >> w) + h] = (C << 24) | (P << 16) | k);
          } while (0 !== h);
          for (c = 1 << (p - 1); M & c; ) c >>= 1;
          if (
            (0 !== c ? ((M &= c - 1), (M += c)) : (M = 0), g++, 0 == --T[p])
          ) {
            if (p === v) break;
            p = e[n + o[g]];
          }
          if (p > y && (M & u) !== d) {
            for (
              0 === w && (w = y), f += _, x = p - w, S = 1 << x;
              x + w < v && ((S -= T[x + w]), !(S <= 0));

            )
              x++, (S <<= 1);
            if (((b += 1 << x), (1 === t && b > 852) || (2 === t && b > 592)))
              return 1;
            (d = M & u), (r[d] = (y << 24) | (x << 16) | (f - a));
          }
        }
        return (
          0 !== M && (r[f + M] = ((p - w) << 24) | (64 << 16)), (s.bits = y), 0
        );
      };
      const {
          Z_FINISH: pa,
          Z_BLOCK: ga,
          Z_TREES: _a,
          Z_OK: va,
          Z_STREAM_END: ya,
          Z_NEED_DICT: xa,
          Z_STREAM_ERROR: wa,
          Z_DATA_ERROR: Sa,
          Z_MEM_ERROR: ba,
          Z_BUF_ERROR: Ma,
          Z_DEFLATED: Aa,
        } = Gi,
        Ta = 16180,
        Ea = 16190,
        Ca = 16191,
        Pa = 16192,
        ka = 16194,
        Ia = 16199,
        Da = 16200,
        Na = 16206,
        Ra = 16209,
        La = (t) =>
          ((t >>> 24) & 255) +
          ((t >>> 8) & 65280) +
          ((65280 & t) << 8) +
          ((255 & t) << 24);
      function za() {
        (this.strm = null),
          (this.mode = 0),
          (this.last = !1),
          (this.wrap = 0),
          (this.havedict = !1),
          (this.flags = 0),
          (this.dmax = 0),
          (this.check = 0),
          (this.total = 0),
          (this.head = null),
          (this.wbits = 0),
          (this.wsize = 0),
          (this.whave = 0),
          (this.wnext = 0),
          (this.window = null),
          (this.hold = 0),
          (this.bits = 0),
          (this.length = 0),
          (this.offset = 0),
          (this.extra = 0),
          (this.lencode = null),
          (this.distcode = null),
          (this.lenbits = 0),
          (this.distbits = 0),
          (this.ncode = 0),
          (this.nlen = 0),
          (this.ndist = 0),
          (this.have = 0),
          (this.next = null),
          (this.lens = new Uint16Array(320)),
          (this.work = new Uint16Array(288)),
          (this.lendyn = null),
          (this.distdyn = null),
          (this.sane = 0),
          (this.back = 0),
          (this.was = 0);
      }
      const Ua = (t) => {
          if (!t) return 1;
          const e = t.state;
          return !e || e.strm !== t || e.mode < Ta || e.mode > 16211 ? 1 : 0;
        },
        Ba = (t) => {
          if (Ua(t)) return wa;
          const e = t.state;
          return (
            (t.total_in = t.total_out = e.total = 0),
            (t.msg = ""),
            e.wrap && (t.adler = 1 & e.wrap),
            (e.mode = Ta),
            (e.last = 0),
            (e.havedict = 0),
            (e.flags = -1),
            (e.dmax = 32768),
            (e.head = null),
            (e.hold = 0),
            (e.bits = 0),
            (e.lencode = e.lendyn = new Int32Array(852)),
            (e.distcode = e.distdyn = new Int32Array(592)),
            (e.sane = 1),
            (e.back = -1),
            va
          );
        },
        Oa = (t) => {
          if (Ua(t)) return wa;
          const e = t.state;
          return (e.wsize = 0), (e.whave = 0), (e.wnext = 0), Ba(t);
        },
        Va = (t, e) => {
          let n;
          if (Ua(t)) return wa;
          const i = t.state;
          return (
            e < 0
              ? ((n = 0), (e = -e))
              : ((n = 5 + (e >> 4)), e < 48 && (e &= 15)),
            e && (e < 8 || e > 15)
              ? wa
              : (null !== i.window && i.wbits !== e && (i.window = null),
                (i.wrap = n),
                (i.wbits = e),
                Oa(t))
          );
        },
        Fa = (t, e) => {
          if (!t) return wa;
          const n = new za();
          (t.state = n), (n.strm = t), (n.window = null), (n.mode = Ta);
          const i = Va(t, e);
          return i !== va && (t.state = null), i;
        };
      let Ha,
        Wa,
        Ga = !0;
      const qa = (t) => {
          if (Ga) {
            (Ha = new Int32Array(512)), (Wa = new Int32Array(32));
            let e = 0;
            for (; e < 144; ) t.lens[e++] = 8;
            for (; e < 256; ) t.lens[e++] = 9;
            for (; e < 280; ) t.lens[e++] = 7;
            for (; e < 288; ) t.lens[e++] = 8;
            for (
              ma(1, t.lens, 0, 288, Ha, 0, t.work, { bits: 9 }), e = 0;
              e < 32;

            )
              t.lens[e++] = 5;
            ma(2, t.lens, 0, 32, Wa, 0, t.work, { bits: 5 }), (Ga = !1);
          }
          (t.lencode = Ha),
            (t.lenbits = 9),
            (t.distcode = Wa),
            (t.distbits = 5);
        },
        ja = (t, e, n, i) => {
          let r;
          const a = t.state;
          return (
            null === a.window &&
              ((a.wsize = 1 << a.wbits),
              (a.wnext = 0),
              (a.whave = 0),
              (a.window = new Uint8Array(a.wsize))),
            i >= a.wsize
              ? (a.window.set(e.subarray(n - a.wsize, n), 0),
                (a.wnext = 0),
                (a.whave = a.wsize))
              : ((r = a.wsize - a.wnext),
                r > i && (r = i),
                a.window.set(e.subarray(n - i, n - i + r), a.wnext),
                (i -= r)
                  ? (a.window.set(e.subarray(n - i, n), 0),
                    (a.wnext = i),
                    (a.whave = a.wsize))
                  : ((a.wnext += r),
                    a.wnext === a.wsize && (a.wnext = 0),
                    a.whave < a.wsize && (a.whave += r))),
            0
          );
        };
      var Za = {
        inflateReset: Oa,
        inflateReset2: Va,
        inflateResetKeep: Ba,
        inflateInit: (t) => Fa(t, 15),
        inflateInit2: Fa,
        inflate: (t, e) => {
          let n,
            i,
            r,
            a,
            o,
            s,
            l,
            c,
            h,
            d,
            u,
            f,
            m,
            p,
            g,
            _,
            v,
            y,
            x,
            w,
            S,
            b,
            M = 0;
          const A = new Uint8Array(4);
          let T, E;
          const C = new Uint8Array([
            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
          ]);
          if (Ua(t) || !t.output || (!t.input && 0 !== t.avail_in)) return wa;
          (n = t.state),
            n.mode === Ca && (n.mode = Pa),
            (o = t.next_out),
            (r = t.output),
            (l = t.avail_out),
            (a = t.next_in),
            (i = t.input),
            (s = t.avail_in),
            (c = n.hold),
            (h = n.bits),
            (d = s),
            (u = l),
            (b = va);
          t: for (;;)
            switch (n.mode) {
              case Ta:
                if (0 === n.wrap) {
                  n.mode = Pa;
                  break;
                }
                for (; h < 16; ) {
                  if (0 === s) break t;
                  s--, (c += i[a++] << h), (h += 8);
                }
                if (2 & n.wrap && 35615 === c) {
                  0 === n.wbits && (n.wbits = 15),
                    (n.check = 0),
                    (A[0] = 255 & c),
                    (A[1] = (c >>> 8) & 255),
                    (n.check = Hi(n.check, A, 2, 0)),
                    (c = 0),
                    (h = 0),
                    (n.mode = 16181);
                  break;
                }
                if (
                  (n.head && (n.head.done = !1),
                  !(1 & n.wrap) || (((255 & c) << 8) + (c >> 8)) % 31)
                ) {
                  (t.msg = "incorrect header check"), (n.mode = Ra);
                  break;
                }
                if ((15 & c) !== Aa) {
                  (t.msg = "unknown compression method"), (n.mode = Ra);
                  break;
                }
                if (
                  ((c >>>= 4),
                  (h -= 4),
                  (S = 8 + (15 & c)),
                  0 === n.wbits && (n.wbits = S),
                  S > 15 || S > n.wbits)
                ) {
                  (t.msg = "invalid window size"), (n.mode = Ra);
                  break;
                }
                (n.dmax = 1 << n.wbits),
                  (n.flags = 0),
                  (t.adler = n.check = 1),
                  (n.mode = 512 & c ? 16189 : Ca),
                  (c = 0),
                  (h = 0);
                break;
              case 16181:
                for (; h < 16; ) {
                  if (0 === s) break t;
                  s--, (c += i[a++] << h), (h += 8);
                }
                if (((n.flags = c), (255 & n.flags) !== Aa)) {
                  (t.msg = "unknown compression method"), (n.mode = Ra);
                  break;
                }
                if (57344 & n.flags) {
                  (t.msg = "unknown header flags set"), (n.mode = Ra);
                  break;
                }
                n.head && (n.head.text = (c >> 8) & 1),
                  512 & n.flags &&
                    4 & n.wrap &&
                    ((A[0] = 255 & c),
                    (A[1] = (c >>> 8) & 255),
                    (n.check = Hi(n.check, A, 2, 0))),
                  (c = 0),
                  (h = 0),
                  (n.mode = 16182);
              case 16182:
                for (; h < 32; ) {
                  if (0 === s) break t;
                  s--, (c += i[a++] << h), (h += 8);
                }
                n.head && (n.head.time = c),
                  512 & n.flags &&
                    4 & n.wrap &&
                    ((A[0] = 255 & c),
                    (A[1] = (c >>> 8) & 255),
                    (A[2] = (c >>> 16) & 255),
                    (A[3] = (c >>> 24) & 255),
                    (n.check = Hi(n.check, A, 4, 0))),
                  (c = 0),
                  (h = 0),
                  (n.mode = 16183);
              case 16183:
                for (; h < 16; ) {
                  if (0 === s) break t;
                  s--, (c += i[a++] << h), (h += 8);
                }
                n.head && ((n.head.xflags = 255 & c), (n.head.os = c >> 8)),
                  512 & n.flags &&
                    4 & n.wrap &&
                    ((A[0] = 255 & c),
                    (A[1] = (c >>> 8) & 255),
                    (n.check = Hi(n.check, A, 2, 0))),
                  (c = 0),
                  (h = 0),
                  (n.mode = 16184);
              case 16184:
                if (1024 & n.flags) {
                  for (; h < 16; ) {
                    if (0 === s) break t;
                    s--, (c += i[a++] << h), (h += 8);
                  }
                  (n.length = c),
                    n.head && (n.head.extra_len = c),
                    512 & n.flags &&
                      4 & n.wrap &&
                      ((A[0] = 255 & c),
                      (A[1] = (c >>> 8) & 255),
                      (n.check = Hi(n.check, A, 2, 0))),
                    (c = 0),
                    (h = 0);
                } else n.head && (n.head.extra = null);
                n.mode = 16185;
              case 16185:
                if (
                  1024 & n.flags &&
                  ((f = n.length),
                  f > s && (f = s),
                  f &&
                    (n.head &&
                      ((S = n.head.extra_len - n.length),
                      n.head.extra ||
                        (n.head.extra = new Uint8Array(n.head.extra_len)),
                      n.head.extra.set(i.subarray(a, a + f), S)),
                    512 & n.flags &&
                      4 & n.wrap &&
                      (n.check = Hi(n.check, i, f, a)),
                    (s -= f),
                    (a += f),
                    (n.length -= f)),
                  n.length)
                )
                  break t;
                (n.length = 0), (n.mode = 16186);
              case 16186:
                if (2048 & n.flags) {
                  if (0 === s) break t;
                  f = 0;
                  do {
                    (S = i[a + f++]),
                      n.head &&
                        S &&
                        n.length < 65536 &&
                        (n.head.name += String.fromCharCode(S));
                  } while (S && f < s);
                  if (
                    (512 & n.flags &&
                      4 & n.wrap &&
                      (n.check = Hi(n.check, i, f, a)),
                    (s -= f),
                    (a += f),
                    S)
                  )
                    break t;
                } else n.head && (n.head.name = null);
                (n.length = 0), (n.mode = 16187);
              case 16187:
                if (4096 & n.flags) {
                  if (0 === s) break t;
                  f = 0;
                  do {
                    (S = i[a + f++]),
                      n.head &&
                        S &&
                        n.length < 65536 &&
                        (n.head.comment += String.fromCharCode(S));
                  } while (S && f < s);
                  if (
                    (512 & n.flags &&
                      4 & n.wrap &&
                      (n.check = Hi(n.check, i, f, a)),
                    (s -= f),
                    (a += f),
                    S)
                  )
                    break t;
                } else n.head && (n.head.comment = null);
                n.mode = 16188;
              case 16188:
                if (512 & n.flags) {
                  for (; h < 16; ) {
                    if (0 === s) break t;
                    s--, (c += i[a++] << h), (h += 8);
                  }
                  if (4 & n.wrap && c !== (65535 & n.check)) {
                    (t.msg = "header crc mismatch"), (n.mode = Ra);
                    break;
                  }
                  (c = 0), (h = 0);
                }
                n.head &&
                  ((n.head.hcrc = (n.flags >> 9) & 1), (n.head.done = !0)),
                  (t.adler = n.check = 0),
                  (n.mode = Ca);
                break;
              case 16189:
                for (; h < 32; ) {
                  if (0 === s) break t;
                  s--, (c += i[a++] << h), (h += 8);
                }
                (t.adler = n.check = La(c)), (c = 0), (h = 0), (n.mode = Ea);
              case Ea:
                if (0 === n.havedict)
                  return (
                    (t.next_out = o),
                    (t.avail_out = l),
                    (t.next_in = a),
                    (t.avail_in = s),
                    (n.hold = c),
                    (n.bits = h),
                    xa
                  );
                (t.adler = n.check = 1), (n.mode = Ca);
              case Ca:
                if (e === ga || e === _a) break t;
              case Pa:
                if (n.last) {
                  (c >>>= 7 & h), (h -= 7 & h), (n.mode = Na);
                  break;
                }
                for (; h < 3; ) {
                  if (0 === s) break t;
                  s--, (c += i[a++] << h), (h += 8);
                }
                switch (((n.last = 1 & c), (c >>>= 1), (h -= 1), 3 & c)) {
                  case 0:
                    n.mode = 16193;
                    break;
                  case 1:
                    if ((qa(n), (n.mode = Ia), e === _a)) {
                      (c >>>= 2), (h -= 2);
                      break t;
                    }
                    break;
                  case 2:
                    n.mode = 16196;
                    break;
                  case 3:
                    (t.msg = "invalid block type"), (n.mode = Ra);
                }
                (c >>>= 2), (h -= 2);
                break;
              case 16193:
                for (c >>>= 7 & h, h -= 7 & h; h < 32; ) {
                  if (0 === s) break t;
                  s--, (c += i[a++] << h), (h += 8);
                }
                if ((65535 & c) != ((c >>> 16) ^ 65535)) {
                  (t.msg = "invalid stored block lengths"), (n.mode = Ra);
                  break;
                }
                if (
                  ((n.length = 65535 & c),
                  (c = 0),
                  (h = 0),
                  (n.mode = ka),
                  e === _a)
                )
                  break t;
              case ka:
                n.mode = 16195;
              case 16195:
                if (((f = n.length), f)) {
                  if ((f > s && (f = s), f > l && (f = l), 0 === f)) break t;
                  r.set(i.subarray(a, a + f), o),
                    (s -= f),
                    (a += f),
                    (l -= f),
                    (o += f),
                    (n.length -= f);
                  break;
                }
                n.mode = Ca;
                break;
              case 16196:
                for (; h < 14; ) {
                  if (0 === s) break t;
                  s--, (c += i[a++] << h), (h += 8);
                }
                if (
                  ((n.nlen = 257 + (31 & c)),
                  (c >>>= 5),
                  (h -= 5),
                  (n.ndist = 1 + (31 & c)),
                  (c >>>= 5),
                  (h -= 5),
                  (n.ncode = 4 + (15 & c)),
                  (c >>>= 4),
                  (h -= 4),
                  n.nlen > 286 || n.ndist > 30)
                ) {
                  (t.msg = "too many length or distance symbols"),
                    (n.mode = Ra);
                  break;
                }
                (n.have = 0), (n.mode = 16197);
              case 16197:
                for (; n.have < n.ncode; ) {
                  for (; h < 3; ) {
                    if (0 === s) break t;
                    s--, (c += i[a++] << h), (h += 8);
                  }
                  (n.lens[C[n.have++]] = 7 & c), (c >>>= 3), (h -= 3);
                }
                for (; n.have < 19; ) n.lens[C[n.have++]] = 0;
                if (
                  ((n.lencode = n.lendyn),
                  (n.lenbits = 7),
                  (T = { bits: n.lenbits }),
                  (b = ma(0, n.lens, 0, 19, n.lencode, 0, n.work, T)),
                  (n.lenbits = T.bits),
                  b)
                ) {
                  (t.msg = "invalid code lengths set"), (n.mode = Ra);
                  break;
                }
                (n.have = 0), (n.mode = 16198);
              case 16198:
                for (; n.have < n.nlen + n.ndist; ) {
                  for (
                    ;
                    (M = n.lencode[c & ((1 << n.lenbits) - 1)]),
                      (g = M >>> 24),
                      (_ = (M >>> 16) & 255),
                      (v = 65535 & M),
                      !(g <= h);

                  ) {
                    if (0 === s) break t;
                    s--, (c += i[a++] << h), (h += 8);
                  }
                  if (v < 16) (c >>>= g), (h -= g), (n.lens[n.have++] = v);
                  else {
                    if (16 === v) {
                      for (E = g + 2; h < E; ) {
                        if (0 === s) break t;
                        s--, (c += i[a++] << h), (h += 8);
                      }
                      if (((c >>>= g), (h -= g), 0 === n.have)) {
                        (t.msg = "invalid bit length repeat"), (n.mode = Ra);
                        break;
                      }
                      (S = n.lens[n.have - 1]),
                        (f = 3 + (3 & c)),
                        (c >>>= 2),
                        (h -= 2);
                    } else if (17 === v) {
                      for (E = g + 3; h < E; ) {
                        if (0 === s) break t;
                        s--, (c += i[a++] << h), (h += 8);
                      }
                      (c >>>= g),
                        (h -= g),
                        (S = 0),
                        (f = 3 + (7 & c)),
                        (c >>>= 3),
                        (h -= 3);
                    } else {
                      for (E = g + 7; h < E; ) {
                        if (0 === s) break t;
                        s--, (c += i[a++] << h), (h += 8);
                      }
                      (c >>>= g),
                        (h -= g),
                        (S = 0),
                        (f = 11 + (127 & c)),
                        (c >>>= 7),
                        (h -= 7);
                    }
                    if (n.have + f > n.nlen + n.ndist) {
                      (t.msg = "invalid bit length repeat"), (n.mode = Ra);
                      break;
                    }
                    for (; f--; ) n.lens[n.have++] = S;
                  }
                }
                if (n.mode === Ra) break;
                if (0 === n.lens[256]) {
                  (t.msg = "invalid code -- missing end-of-block"),
                    (n.mode = Ra);
                  break;
                }
                if (
                  ((n.lenbits = 9),
                  (T = { bits: n.lenbits }),
                  (b = ma(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, T)),
                  (n.lenbits = T.bits),
                  b)
                ) {
                  (t.msg = "invalid literal/lengths set"), (n.mode = Ra);
                  break;
                }
                if (
                  ((n.distbits = 6),
                  (n.distcode = n.distdyn),
                  (T = { bits: n.distbits }),
                  (b = ma(
                    2,
                    n.lens,
                    n.nlen,
                    n.ndist,
                    n.distcode,
                    0,
                    n.work,
                    T
                  )),
                  (n.distbits = T.bits),
                  b)
                ) {
                  (t.msg = "invalid distances set"), (n.mode = Ra);
                  break;
                }
                if (((n.mode = Ia), e === _a)) break t;
              case Ia:
                n.mode = Da;
              case Da:
                if (s >= 6 && l >= 258) {
                  (t.next_out = o),
                    (t.avail_out = l),
                    (t.next_in = a),
                    (t.avail_in = s),
                    (n.hold = c),
                    (n.bits = h),
                    la(t, u),
                    (o = t.next_out),
                    (r = t.output),
                    (l = t.avail_out),
                    (a = t.next_in),
                    (i = t.input),
                    (s = t.avail_in),
                    (c = n.hold),
                    (h = n.bits),
                    n.mode === Ca && (n.back = -1);
                  break;
                }
                for (
                  n.back = 0;
                  (M = n.lencode[c & ((1 << n.lenbits) - 1)]),
                    (g = M >>> 24),
                    (_ = (M >>> 16) & 255),
                    (v = 65535 & M),
                    !(g <= h);

                ) {
                  if (0 === s) break t;
                  s--, (c += i[a++] << h), (h += 8);
                }
                if (_ && !(240 & _)) {
                  for (
                    y = g, x = _, w = v;
                    (M = n.lencode[w + ((c & ((1 << (y + x)) - 1)) >> y)]),
                      (g = M >>> 24),
                      (_ = (M >>> 16) & 255),
                      (v = 65535 & M),
                      !(y + g <= h);

                  ) {
                    if (0 === s) break t;
                    s--, (c += i[a++] << h), (h += 8);
                  }
                  (c >>>= y), (h -= y), (n.back += y);
                }
                if (
                  ((c >>>= g), (h -= g), (n.back += g), (n.length = v), 0 === _)
                ) {
                  n.mode = 16205;
                  break;
                }
                if (32 & _) {
                  (n.back = -1), (n.mode = Ca);
                  break;
                }
                if (64 & _) {
                  (t.msg = "invalid literal/length code"), (n.mode = Ra);
                  break;
                }
                (n.extra = 15 & _), (n.mode = 16201);
              case 16201:
                if (n.extra) {
                  for (E = n.extra; h < E; ) {
                    if (0 === s) break t;
                    s--, (c += i[a++] << h), (h += 8);
                  }
                  (n.length += c & ((1 << n.extra) - 1)),
                    (c >>>= n.extra),
                    (h -= n.extra),
                    (n.back += n.extra);
                }
                (n.was = n.length), (n.mode = 16202);
              case 16202:
                for (
                  ;
                  (M = n.distcode[c & ((1 << n.distbits) - 1)]),
                    (g = M >>> 24),
                    (_ = (M >>> 16) & 255),
                    (v = 65535 & M),
                    !(g <= h);

                ) {
                  if (0 === s) break t;
                  s--, (c += i[a++] << h), (h += 8);
                }
                if (!(240 & _)) {
                  for (
                    y = g, x = _, w = v;
                    (M = n.distcode[w + ((c & ((1 << (y + x)) - 1)) >> y)]),
                      (g = M >>> 24),
                      (_ = (M >>> 16) & 255),
                      (v = 65535 & M),
                      !(y + g <= h);

                  ) {
                    if (0 === s) break t;
                    s--, (c += i[a++] << h), (h += 8);
                  }
                  (c >>>= y), (h -= y), (n.back += y);
                }
                if (((c >>>= g), (h -= g), (n.back += g), 64 & _)) {
                  (t.msg = "invalid distance code"), (n.mode = Ra);
                  break;
                }
                (n.offset = v), (n.extra = 15 & _), (n.mode = 16203);
              case 16203:
                if (n.extra) {
                  for (E = n.extra; h < E; ) {
                    if (0 === s) break t;
                    s--, (c += i[a++] << h), (h += 8);
                  }
                  (n.offset += c & ((1 << n.extra) - 1)),
                    (c >>>= n.extra),
                    (h -= n.extra),
                    (n.back += n.extra);
                }
                if (n.offset > n.dmax) {
                  (t.msg = "invalid distance too far back"), (n.mode = Ra);
                  break;
                }
                n.mode = 16204;
              case 16204:
                if (0 === l) break t;
                if (((f = u - l), n.offset > f)) {
                  if (((f = n.offset - f), f > n.whave && n.sane)) {
                    (t.msg = "invalid distance too far back"), (n.mode = Ra);
                    break;
                  }
                  f > n.wnext
                    ? ((f -= n.wnext), (m = n.wsize - f))
                    : (m = n.wnext - f),
                    f > n.length && (f = n.length),
                    (p = n.window);
                } else (p = r), (m = o - n.offset), (f = n.length);
                f > l && (f = l), (l -= f), (n.length -= f);
                do {
                  r[o++] = p[m++];
                } while (--f);
                0 === n.length && (n.mode = Da);
                break;
              case 16205:
                if (0 === l) break t;
                (r[o++] = n.length), l--, (n.mode = Da);
                break;
              case Na:
                if (n.wrap) {
                  for (; h < 32; ) {
                    if (0 === s) break t;
                    s--, (c |= i[a++] << h), (h += 8);
                  }
                  if (
                    ((u -= l),
                    (t.total_out += u),
                    (n.total += u),
                    4 & n.wrap &&
                      u &&
                      (t.adler = n.check =
                        n.flags
                          ? Hi(n.check, r, u, o - u)
                          : Vi(n.check, r, u, o - u)),
                    (u = l),
                    4 & n.wrap && (n.flags ? c : La(c)) !== n.check)
                  ) {
                    (t.msg = "incorrect data check"), (n.mode = Ra);
                    break;
                  }
                  (c = 0), (h = 0);
                }
                n.mode = 16207;
              case 16207:
                if (n.wrap && n.flags) {
                  for (; h < 32; ) {
                    if (0 === s) break t;
                    s--, (c += i[a++] << h), (h += 8);
                  }
                  if (4 & n.wrap && c !== (4294967295 & n.total)) {
                    (t.msg = "incorrect length check"), (n.mode = Ra);
                    break;
                  }
                  (c = 0), (h = 0);
                }
                n.mode = 16208;
              case 16208:
                b = ya;
                break t;
              case Ra:
                b = Sa;
                break t;
              case 16210:
                return ba;
              default:
                return wa;
            }
          return (
            (t.next_out = o),
            (t.avail_out = l),
            (t.next_in = a),
            (t.avail_in = s),
            (n.hold = c),
            (n.bits = h),
            (n.wsize ||
              (u !== t.avail_out &&
                n.mode < Ra &&
                (n.mode < Na || e !== pa))) &&
              ja(t, t.output, t.next_out, u - t.avail_out),
            (d -= t.avail_in),
            (u -= t.avail_out),
            (t.total_in += d),
            (t.total_out += u),
            (n.total += u),
            4 & n.wrap &&
              u &&
              (t.adler = n.check =
                n.flags
                  ? Hi(n.check, r, u, t.next_out - u)
                  : Vi(n.check, r, u, t.next_out - u)),
            (t.data_type =
              n.bits +
              (n.last ? 64 : 0) +
              (n.mode === Ca ? 128 : 0) +
              (n.mode === Ia || n.mode === ka ? 256 : 0)),
            ((0 === d && 0 === u) || e === pa) && b === va && (b = Ma),
            b
          );
        },
        inflateEnd: (t) => {
          if (Ua(t)) return wa;
          let e = t.state;
          return e.window && (e.window = null), (t.state = null), va;
        },
        inflateGetHeader: (t, e) => {
          if (Ua(t)) return wa;
          const n = t.state;
          return 2 & n.wrap ? ((n.head = e), (e.done = !1), va) : wa;
        },
        inflateSetDictionary: (t, e) => {
          const n = e.length;
          let i, r, a;
          return Ua(t)
            ? wa
            : ((i = t.state),
              0 !== i.wrap && i.mode !== Ea
                ? wa
                : i.mode === Ea &&
                  ((r = 1), (r = Vi(r, e, n, 0)), r !== i.check)
                ? Sa
                : ((a = ja(t, e, n, n)),
                  a ? ((i.mode = 16210), ba) : ((i.havedict = 1), va)));
        },
        inflateInfo: "pako inflate (from Nodeca project)",
      };
      var Ya = function () {
        (this.text = 0),
          (this.time = 0),
          (this.xflags = 0),
          (this.os = 0),
          (this.extra = null),
          (this.extra_len = 0),
          (this.name = ""),
          (this.comment = ""),
          (this.hcrc = 0),
          (this.done = !1);
      };
      const Xa = Object.prototype.toString,
        {
          Z_NO_FLUSH: Ja,
          Z_FINISH: Qa,
          Z_OK: Ka,
          Z_STREAM_END: $a,
          Z_NEED_DICT: to,
          Z_STREAM_ERROR: eo,
          Z_DATA_ERROR: no,
          Z_MEM_ERROR: io,
        } = Gi;
      function ro(t) {
        this.options = Wr.assign(
          { chunkSize: 65536, windowBits: 15, to: "" },
          t || {}
        );
        const e = this.options;
        e.raw &&
          e.windowBits >= 0 &&
          e.windowBits < 16 &&
          ((e.windowBits = -e.windowBits),
          0 === e.windowBits && (e.windowBits = -15)),
          !(e.windowBits >= 0 && e.windowBits < 16) ||
            (t && t.windowBits) ||
            (e.windowBits += 32),
          e.windowBits > 15 &&
            e.windowBits < 48 &&
            (15 & e.windowBits || (e.windowBits |= 15)),
          (this.err = 0),
          (this.msg = ""),
          (this.ended = !1),
          (this.chunks = []),
          (this.strm = new Zr()),
          (this.strm.avail_out = 0);
        let n = Za.inflateInit2(this.strm, e.windowBits);
        if (n !== Ka) throw new Error(Wi[n]);
        if (
          ((this.header = new Ya()),
          Za.inflateGetHeader(this.strm, this.header),
          e.dictionary &&
            ("string" == typeof e.dictionary
              ? (e.dictionary = jr.string2buf(e.dictionary))
              : "[object ArrayBuffer]" === Xa.call(e.dictionary) &&
                (e.dictionary = new Uint8Array(e.dictionary)),
            e.raw &&
              ((n = Za.inflateSetDictionary(this.strm, e.dictionary)),
              n !== Ka)))
        )
          throw new Error(Wi[n]);
      }
      function ao(t, e) {
        const n = new ro(e);
        if ((n.push(t), n.err)) throw n.msg || Wi[n.err];
        return n.result;
      }
      (ro.prototype.push = function (t, e) {
        const n = this.strm,
          i = this.options.chunkSize,
          r = this.options.dictionary;
        let a, o, s;
        if (this.ended) return !1;
        for (
          o = e === ~~e ? e : !0 === e ? Qa : Ja,
            "[object ArrayBuffer]" === Xa.call(t)
              ? (n.input = new Uint8Array(t))
              : (n.input = t),
            n.next_in = 0,
            n.avail_in = n.input.length;
          ;

        ) {
          for (
            0 === n.avail_out &&
              ((n.output = new Uint8Array(i)),
              (n.next_out = 0),
              (n.avail_out = i)),
              a = Za.inflate(n, o),
              a === to &&
                r &&
                ((a = Za.inflateSetDictionary(n, r)),
                a === Ka ? (a = Za.inflate(n, o)) : a === no && (a = to));
            n.avail_in > 0 &&
            a === $a &&
            n.state.wrap > 0 &&
            0 !== t[n.next_in];

          )
            Za.inflateReset(n), (a = Za.inflate(n, o));
          switch (a) {
            case eo:
            case no:
            case to:
            case io:
              return this.onEnd(a), (this.ended = !0), !1;
          }
          if (
            ((s = n.avail_out), n.next_out && (0 === n.avail_out || a === $a))
          )
            if ("string" === this.options.to) {
              let t = jr.utf8border(n.output, n.next_out),
                e = n.next_out - t,
                r = jr.buf2string(n.output, t);
              (n.next_out = e),
                (n.avail_out = i - e),
                e && n.output.set(n.output.subarray(t, t + e), 0),
                this.onData(r);
            } else
              this.onData(
                n.output.length === n.next_out
                  ? n.output
                  : n.output.subarray(0, n.next_out)
              );
          if (a !== Ka || 0 !== s) {
            if (a === $a)
              return (
                (a = Za.inflateEnd(this.strm)),
                this.onEnd(a),
                (this.ended = !0),
                !0
              );
            if (0 === n.avail_in) break;
          }
        }
        return !0;
      }),
        (ro.prototype.onData = function (t) {
          this.chunks.push(t);
        }),
        (ro.prototype.onEnd = function (t) {
          t === Ka &&
            ("string" === this.options.to
              ? (this.result = this.chunks.join(""))
              : (this.result = Wr.flattenChunks(this.chunks))),
            (this.chunks = []),
            (this.err = t),
            (this.msg = this.strm.msg);
        });
      var oo = {
        Inflate: ro,
        inflate: ao,
        inflateRaw: function (t, e) {
          return ((e = e || {}).raw = !0), ao(t, e);
        },
        ungzip: ao,
        constants: Gi,
      };
      const { Deflate: so, deflate: lo, deflateRaw: co, gzip: ho } = oa,
        { Inflate: uo, inflate: fo, inflateRaw: mo, ungzip: po } = oo;
      var go = {
        Deflate: so,
        deflate: lo,
        deflateRaw: co,
        gzip: ho,
        Inflate: uo,
        inflate: fo,
        inflateRaw: mo,
        ungzip: po,
        constants: Gi,
      };
      function _o(t) {
        let e;
        t = (t = t.replace(/-/g, "+")).replace(/_/g, "/");
        try {
          e = atob(t);
        } catch (t) {
          return null;
        }
        const n = new Uint8Array(e.length);
        for (let t = 0; t < e.length; ++t) {
          const i = e.charCodeAt(t);
          if (i > 255) return null;
          n[t] = i;
        }
        return n;
      }
      var vo,
        yo = function (t, e, n, i, r) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof e ? t !== e || !r : !e.has(t))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? r.call(t, n) : r ? (r.value = n) : e.set(t, n), n;
        },
        xo = function (t, e, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof e ? t !== e || !i : !e.has(t))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t);
        };
      class wo {
        constructor(t) {
          vo.set(this, []), null != t && yo(this, vo, t, "f");
        }
        recordFrame(t, e) {
          if (xo(this, vo, "f").length > 0) {
            const t = xo(this, vo, "f")[xo(this, vo, "f").length - 1];
            if (
              t.controls.up == e.up &&
              t.controls.right == e.right &&
              t.controls.down == e.down &&
              t.controls.left == e.left
            )
              return;
          }
          xo(this, vo, "f").push({ frame: t, controls: e });
        }
        getFrame(t) {
          for (let e = 0; e < xo(this, vo, "f").length; ++e) {
            const n = xo(this, vo, "f")[e];
            if (n.frame == t)
              return [
                n.controls.up,
                n.controls.right,
                n.controls.down,
                n.controls.left,
              ];
            if (n.frame > t && e > 0) {
              const t = xo(this, vo, "f")[e - 1];
              return [
                t.controls.up,
                t.controls.right,
                t.controls.down,
                t.controls.left,
              ];
            }
          }
          if (xo(this, vo, "f").length > 0) {
            const t = xo(this, vo, "f")[xo(this, vo, "f").length - 1];
            return [
              t.controls.up,
              t.controls.right,
              t.controls.down,
              t.controls.left,
            ];
          }
          return [!1, !1, !1, !1];
        }
        getRecording() {
          return xo(this, vo, "f");
        }
        serialize() {
          const t = new Uint8Array(Math.ceil(3.5 * xo(this, vo, "f").length));
          for (let e = 0; e < xo(this, vo, "f").length; ++e) {
            const n = xo(this, vo, "f")[e];
            (t[3 * e] = 255 & n.frame),
              (t[3 * e + 1] = (n.frame >>> 8) & 255),
              (t[3 * e + 2] = (n.frame >>> 16) & 255);
          }
          for (let e = 0; e < xo(this, vo, "f").length; e += 2) {
            const n = xo(this, vo, "f")[e];
            let i = 0;
            if (
              ((i |= n.controls.up ? 1 : 0),
              (i |= (n.controls.right ? 1 : 0) << 1),
              (i |= (n.controls.down ? 1 : 0) << 2),
              (i |= (n.controls.left ? 1 : 0) << 3),
              e + 1 < xo(this, vo, "f").length)
            ) {
              const t = xo(this, vo, "f")[e + 1];
              (i |= (t.controls.up ? 1 : 0) << 4),
                (i |= (t.controls.right ? 1 : 0) << 5),
                (i |= (t.controls.down ? 1 : 0) << 6),
                (i |= (t.controls.left ? 1 : 0) << 7);
            }
            t[3 * xo(this, vo, "f").length + Math.floor(e / 2)] = i;
          }
          const e = new go.Deflate({ level: 9 });
          return (
            e.push(new Uint8Array(t), !0),
            (function (t) {
              let e = "";
              t.forEach((t) => {
                e += String.fromCharCode(t);
              });
              let n = btoa(e);
              return (
                (n = n.replace(/\+/g, "-")),
                (n = n.replace(/\//g, "_")),
                (n = n.replace(/=/g, "")),
                n
              );
            })(e.result)
          );
        }
        static deserialize(t) {
          const e = _o(t);
          if (null == e) return null;
          const n = new go.Inflate();
          if ((n.push(e, !0), n.err)) return null;
          const i = n.result,
            r = [],
            a = Math.round(i.length / 3.5);
          for (let t = 0; t < a; ++t) {
            const e = i[3 * t + 0] | (i[3 * t + 1] << 8) | (i[3 * t + 2] << 16);
            let n;
            const o = i[3 * a + Math.floor(t / 2)];
            (n =
              t % 2 == 0
                ? {
                    up: !(1 & ~o),
                    right: 1 == ((o >>> 1) & 1),
                    down: 1 == ((o >>> 2) & 1),
                    left: 1 == ((o >>> 3) & 1),
                  }
                : {
                    up: 1 == ((o >>> 4) & 1),
                    right: 1 == ((o >>> 5) & 1),
                    down: 1 == ((o >>> 6) & 1),
                    left: 1 == ((o >>> 7) & 1),
                  }),
              r.push({ frame: e, controls: n });
          }
          return new wo(r);
        }
      }
      vo = new WeakMap();
      const So = wo;
      var bo,
        Mo,
        Ao,
        To,
        Eo,
        Co,
        Po,
        ko,
        Io,
        Do,
        No,
        Ro,
        Lo,
        zo,
        Uo,
        Bo,
        Oo,
        Vo,
        Fo,
        Ho,
        Wo = function (t, e, n, i, r) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof e ? t !== e || !r : !e.has(t))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? r.call(t, n) : r ? (r.value = n) : e.set(t, n), n;
        },
        Go = function (t, e, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof e ? t !== e || !i : !e.has(t))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t);
        };
      class qo {
        constructor() {
          bo.add(this),
            Ao.set(this, void 0),
            To.set(this, void 0),
            Eo.set(this, void 0),
            Co.set(this, void 0),
            Po.set(this, void 0),
            ko.set(this, void 0),
            Io.set(this, []),
            Do.set(this, []),
            No.set(this, new Map()),
            Lo.set(this, []),
            zo.set(this, null),
            Uo.set(this, null),
            Bo.set(this, 0),
            Oo.set(this, 1e3),
            Vo.set(this, []),
            Fo.set(this, []),
            Wo(this, Ao, new Ammo.btDefaultCollisionConfiguration(), "f"),
            Wo(
              this,
              To,
              new Ammo.btCollisionDispatcher(Go(this, Ao, "f")),
              "f"
            ),
            Wo(this, Eo, new Ammo.btDbvtBroadphase(), "f"),
            Wo(this, Co, new Ammo.btSequentialImpulseConstraintSolver(), "f"),
            Wo(
              this,
              Po,
              new Ammo.btDiscreteDynamicsWorld(
                Go(this, To, "f"),
                Go(this, Eo, "f"),
                Go(this, Co, "f"),
                Go(this, Ao, "f")
              ),
              "f"
            ),
            Wo(this, ko, new Ammo.btGhostPairCallback(), "f"),
            Go(this, Po, "f")
              .getPairCache()
              .setInternalGhostPairCallback(Go(this, ko, "f"));
          const t = new Ammo.btVector3(0, -9.82, 0);
          Go(this, Po, "f").setGravity(t), Ammo.destroy(t);
        }
        dispose() {
          Go(this, Io, "f").forEach((t) => {
            Go(this, Po, "f").removeRigidBody(t),
              Ammo.destroy(t.getMotionState()),
              Ammo.destroy(t);
          }),
            (Go(this, Io, "f").length = 0),
            Go(this, Lo, "f").forEach(({ body: t }) => {
              Go(this, Po, "f").removeRigidBody(t);
            }),
            (Go(this, Lo, "f").length = 0),
            Go(this, Do, "f").forEach(({ body: t }) => {
              Ammo.destroy(t.getMotionState()), Ammo.destroy(t);
            }),
            (Go(this, Do, "f").length = 0),
            Go(this, No, "f").clear(),
            null != Go(this, zo, "f") && Ammo.destroy(Go(this, zo, "f")),
            null != Go(this, Uo, "f") &&
              (Ammo.destroy(Go(this, Uo, "f").shape),
              Ammo.destroy(Go(this, Uo, "f").triangleMesh)),
            Ammo.destroy(Go(this, Po, "f")),
            Ammo.destroy(Go(this, ko, "f")),
            Ammo.destroy(Go(this, Co, "f")),
            Ammo.destroy(Go(this, Eo, "f")),
            Ammo.destroy(Go(this, To, "f")),
            Ammo.destroy(Go(this, Ao, "f"));
        }
        createGroundPlane() {
          if (null != Go(this, zo, "f")) throw "Ground is already initialized";
          const t = new Ammo.btVector3(0, 1, 0),
            e = new Ammo.btStaticPlaneShape(t, 0);
          Ammo.destroy(t);
          const n = new Ammo.btTransform();
          n.setIdentity();
          const i = new Ammo.btDefaultMotionState(n);
          Ammo.destroy(n);
          const r = new Ammo.btVector3();
          e.calculateLocalInertia(0, r);
          const a = new Ammo.btRigidBodyConstructionInfo(0, i, e, r),
            o = new Ammo.btRigidBody(a);
          Ammo.destroy(r),
            Ammo.destroy(a),
            Go(this, bo, "m", Ho).call(this, o),
            Wo(this, zo, e, "f");
        }
        createMountains(t, e) {
          if (t.length % 9 != 0)
            throw "Number of mountain vertices is not dividable by 9";
          if (t.length > 0) {
            if (null != Go(this, Uo, "f"))
              throw "Mountains are already initialized";
            const n = new Ammo.btTriangleMesh();
            for (let e = 0; e < t.length; e += 9) {
              const i = t[e + 0],
                r = t[e + 1],
                a = t[e + 2],
                o = t[e + 3],
                s = t[e + 4],
                l = t[e + 5],
                c = t[e + 6],
                h = t[e + 7],
                d = t[e + 8],
                u = new Ammo.btVector3(i, r, a),
                f = new Ammo.btVector3(o, s, l),
                m = new Ammo.btVector3(c, h, d);
              n.addTriangle(u, f, m),
                Ammo.destroy(u),
                Ammo.destroy(f),
                Ammo.destroy(m);
            }
            const i = new Ammo.btBvhTriangleMeshShape(n),
              r = new Ammo.btVector3(e.x, e.y, e.z),
              a = new Ammo.btTransform();
            a.setIdentity(), a.setOrigin(r), Ammo.destroy(r);
            const o = new Ammo.btVector3();
            i.calculateLocalInertia(0, o);
            const s = new Ammo.btDefaultMotionState(a);
            Ammo.destroy(a);
            const l = new Ammo.btRigidBodyConstructionInfo(0, s, i, o),
              c = new Ammo.btRigidBody(l);
            Ammo.destroy(o),
              Ammo.destroy(l),
              Go(this, bo, "m", Ho).call(this, c),
              Wo(this, Uo, { shape: i, triangleMesh: n }, "f");
          }
        }
        addStaticBody(t) {
          const e = { active: !1, body: t };
          Go(this, Do, "f").push(e);
          const n = new Ammo.btVector3(),
            i = new Ammo.btVector3();
          t.getAabb(n, i);
          const r = Go(Mo, Mo, "f", Ro);
          for (
            let t = Math.floor((n.x() - 3) / r);
            t <= Math.ceil((i.x() + 3) / r);
            ++t
          )
            for (
              let a = Math.floor((n.y() - 3) / r);
              a <= Math.ceil((i.y() + 3) / r);
              ++a
            )
              for (
                let o = Math.floor((n.z() - 3) / r);
                o <= Math.ceil((i.z() + 3) / r);
                ++o
              ) {
                const n = t + "|" + a + "|" + o,
                  i = Go(this, No, "f").get(n);
                null != i ? i.push(e) : Go(this, No, "f").set(n, [e]);
              }
          Ammo.destroy(n), Ammo.destroy(i);
        }
        activePhysicsAt(t) {
          const e = new Ammo.btVector3(),
            n = new Ammo.btVector3();
          Wo(
            this,
            Lo,
            Go(this, Lo, "f").filter((i) => {
              i.body.getAabb(e, n);
              const r = t.x < e.x() - 3 || t.x > n.x() + 3,
                a = t.y < e.y() - 3 || t.y > n.y() + 3,
                o = t.z < e.z() - 3 || t.z > n.z() + 3;
              return (
                !(!(r && a && o) && i.active) ||
                (Go(this, Po, "f").removeRigidBody(i.body), (i.active = !1), !1)
              );
            }),
            "f"
          );
          const i = t.clone().divideScalar(Go(Mo, Mo, "f", Ro)).floor(),
            r = i.x + "|" + i.y + "|" + i.z,
            a = Go(this, No, "f").get(r);
          null != a &&
            a.forEach((i) => {
              i.body.getAabb(e, n);
              const r = t.x >= e.x() - 3 && t.x <= n.x() + 3,
                a = t.y >= e.y() - 3 && t.y <= n.y() + 3,
                o = t.z >= e.z() - 3 && t.z <= n.z() + 3;
              r &&
                a &&
                o &&
                (i.active ||
                  (Go(this, Po, "f").addRigidBody(i.body),
                  (i.active = !0),
                  Go(this, Lo, "f").push(i)));
            }),
            Ammo.destroy(e),
            Ammo.destroy(n);
        }
        addPreStepEventListener(t) {
          Go(this, Vo, "f").push(t);
        }
        addPostStepEventListener(t) {
          Go(this, Fo, "f").push(t);
        }
        removePreStepEventListener(t) {
          Wo(
            this,
            Vo,
            Go(this, Vo, "f").filter((e) => e != t),
            "f"
          );
        }
        removePostStepEventListener(t) {
          Wo(
            this,
            Fo,
            Go(this, Fo, "f").filter((e) => e != t),
            "f"
          );
        }
        step() {
          var t;
          for (let t = 0; t < Go(this, Vo, "f").length; ++t)
            Go(this, Vo, "f")[t](1 / Go(this, Oo, "f"));
          Go(this, Po, "f").stepSimulation(
            1 / Go(this, Oo, "f"),
            0,
            1 / Go(this, Oo, "f")
          ),
            Wo(this, Bo, ((t = Go(this, Bo, "f")), ++t), "f");
          for (let t = 0; t < Go(this, Fo, "f").length; ++t)
            Go(this, Fo, "f")[t](1 / Go(this, Oo, "f"));
        }
        get world() {
          return Go(this, Po, "f");
        }
        get dispatcher() {
          return Go(this, To, "f");
        }
        get currentFrame() {
          return Go(this, Bo, "f");
        }
      }
      (Mo = qo),
        (Ao = new WeakMap()),
        (To = new WeakMap()),
        (Eo = new WeakMap()),
        (Co = new WeakMap()),
        (Po = new WeakMap()),
        (ko = new WeakMap()),
        (Io = new WeakMap()),
        (Do = new WeakMap()),
        (No = new WeakMap()),
        (Lo = new WeakMap()),
        (zo = new WeakMap()),
        (Uo = new WeakMap()),
        (Bo = new WeakMap()),
        (Oo = new WeakMap()),
        (Vo = new WeakMap()),
        (Fo = new WeakMap()),
        (bo = new WeakSet()),
        (Ho = function (t) {
          Go(this, Po, "f").addRigidBody(t), Go(this, Io, "f").push(t);
        }),
        (Ro = { value: 40 });
      const jo = qo;
      var Zo,
        Yo = function (t, e, n, i, r) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof e ? t !== e || !r : !e.has(t))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? r.call(t, n) : r ? (r.value = n) : e.set(t, n), n;
        },
        Xo = function (t, e, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof e ? t !== e || !i : !e.has(t))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t);
        };
      class Jo {
        constructor(t) {
          if ((Zo.set(this, 0), null != t)) {
            if (!Number.isSafeInteger(t)) throw "Frames is not a safe integer";
            Yo(this, Zo, t, "f");
          }
        }
        get numberOfFrames() {
          return Xo(this, Zo, "f");
        }
        get time() {
          return Xo(this, Zo, "f") / 1e3;
        }
        increment() {
          var t;
          Yo(this, Zo, ((t = Xo(this, Zo, "f")), ++t), "f");
        }
        difference(t) {
          return new Jo(Xo(this, Zo, "f") - Xo(t, Zo, "f"));
        }
        lessThan(t) {
          return Xo(this, Zo, "f") < Xo(t, Zo, "f");
        }
        greaterThan(t) {
          return Xo(this, Zo, "f") > Xo(t, Zo, "f");
        }
        lessOrEqual(t) {
          return Xo(this, Zo, "f") <= Xo(t, Zo, "f");
        }
        greaterOrEqual(t) {
          return Xo(this, Zo, "f") >= Xo(t, Zo, "f");
        }
        equals(t) {
          return Xo(this, Zo, "f") == Xo(t, Zo, "f");
        }
        isNegative() {
          return Xo(this, Zo, "f") < 0;
        }
        clone() {
          const t = new Jo();
          return Yo(t, Zo, Xo(this, Zo, "f"), "f"), t;
        }
      }
      Zo = new WeakMap();
      const Qo = Jo;
      var Ko;
      !(function (t) {
        (t[(t.Checkpoint = 0)] = "Checkpoint"), (t[(t.Finish = 1)] = "Finish");
      })(Ko || (Ko = {}));
      const $o = Ko;
      var ts,
        es,
        ns,
        is,
        rs,
        as = function (t, e, n, i, r) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof e ? t !== e || !r : !e.has(t))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? r.call(t, n) : r ? (r.value = n) : e.set(t, n), n;
        },
        os = function (t, e, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof e ? t !== e || !i : !e.has(t))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t);
        };
      class ss {
        constructor(t, e, n) {
          ts.add(this),
            ns.set(this, void 0),
            is.set(this, new Map()),
            as(this, ns, e, "f"),
            n.forEachPart((n, i, r, a, o, s) => {
              os(this, ts, "m", rs).call(this, n, i, r, o, a, t, e);
              const l = os(this, is, "f").get(a);
              null == l
                ? os(this, is, "f").set(a, [
                    {
                      x: n,
                      y: i,
                      z: r,
                      rotation: o,
                      type: a,
                      checkpointOrder: s,
                    },
                  ])
                : l.push({
                    x: n,
                    y: i,
                    z: r,
                    rotation: o,
                    type: a,
                    checkpointOrder: s,
                  });
            });
        }
        checkCheckpoint(t, e) {
          return this.checkFinishOrCheckpoint(t, e);
        }
        checkFinish(t) {
          return this.checkFinishOrCheckpoint(t);
        }
        checkFinishOrCheckpoint(t, e) {
          let n = [],
            i = null;
          if (null == e) {
            os(this, ns, "f")
              .getPartTypesWithDetector($o.Finish)
              .forEach((t) => {
                const e = os(this, ns, "f").getDetector(t);
                if (null == e) throw "Part detector is missing";
                const i = os(this, is, "f").get(t);
                null != i &&
                  (n = n.concat(
                    i.map(
                      ({
                        x: t,
                        y: n,
                        z: i,
                        rotation: r,
                        checkpointOrder: a,
                      }) => ({
                        x: t,
                        y: n,
                        z: i,
                        rotation: r,
                        checkpointOrder: a,
                        detector: e,
                      })
                    )
                  ));
              });
          } else {
            os(this, ns, "f")
              .getPartTypesWithDetector($o.Checkpoint)
              .forEach((t) => {
                const e = os(this, ns, "f").getDetector(t);
                if (null == e) throw "Part detector is missing";
                const i = os(this, is, "f").get(t);
                null != i &&
                  (n = n.concat(
                    i.map(
                      ({
                        x: t,
                        y: n,
                        z: i,
                        rotation: r,
                        checkpointOrder: a,
                      }) => ({
                        x: t,
                        y: n,
                        z: i,
                        rotation: r,
                        checkpointOrder: a,
                        detector: e,
                      })
                    )
                  ));
              });
            const t = n
              .map((t) => {
                if (null == t.checkpointOrder)
                  throw "Checkpoint has no checkpoint order";
                return t.checkpointOrder;
              })
              .filter((t, e, n) => n.indexOf(t) == e)
              .sort((t, e) => t - e);
            e < t.length && (i = t[e]);
          }
          return n.some(
            ({
              x: e,
              y: n,
              z: r,
              rotation: a,
              checkpointOrder: o,
              detector: s,
            }) => {
              if (o == i) {
                const i = new ct(...s.center),
                  o = new ct(...s.size);
                let l, c;
                if (0 == a)
                  (l = new ct(i.x, i.y, i.z)), (c = new ct(o.x, o.y, o.z));
                else if (1 == a)
                  (l = new ct(i.z, i.y, -i.x)), (c = new ct(o.z, o.y, o.x));
                else if (2 == a)
                  (l = new ct(-i.x, i.y, -i.z)), (c = new ct(o.x, o.y, o.z));
                else {
                  if (3 != a) throw "Invalid rotation";
                  (l = new ct(i.z, i.y, i.x)), (c = new ct(o.z, o.y, o.x));
                }
                l.add(
                  new ct(e * es.partWidth, n * es.partHeight, r * es.partLength)
                );
                const h = new ut().setFromCenterAndSize(l, c);
                return t.some((t) => h.intersectsTriangle(t));
              }
              return !1;
            }
          );
        }
        getTotalNumberOfCheckpointIndices() {
          let t = [];
          if (
            (os(this, ns, "f")
              .getPartTypesWithDetector($o.Checkpoint)
              .forEach((e) => {
                const n = os(this, ns, "f").getDetector(e);
                if (null == n) throw "Part detector is missing";
                const i = os(this, is, "f").get(e);
                null != i &&
                  (t = t.concat(
                    i.map(
                      ({
                        x: t,
                        y: e,
                        z: i,
                        rotation: r,
                        checkpointOrder: a,
                      }) => ({
                        x: t,
                        y: e,
                        z: i,
                        rotation: r,
                        checkpointOrder: a,
                        detector: n,
                      })
                    )
                  ));
              }),
            null == t)
          )
            return 0;
          return t
            .map((t) => t.checkpointOrder)
            .filter((t, e, n) => n.indexOf(t) == e).length;
        }
      }
      (es = ss),
        (ns = new WeakMap()),
        (is = new WeakMap()),
        (ts = new WeakSet()),
        (rs = function (t, e, n, i, r, a, o) {
          const s = new Ammo.btTransform(),
            l = new Ammo.btVector3(
              t * es.partWidth,
              e * es.partHeight,
              n * es.partLength
            );
          s.setOrigin(l), Ammo.destroy(l);
          const c = new Ammo.btQuaternion();
          c.setEulerZYX(0, (i * Math.PI) / 2, 0),
            s.setRotation(c),
            Ammo.destroy(c);
          const h = new Ammo.btDefaultMotionState(s);
          Ammo.destroy(s);
          const d = o.getPhysicsShape(r),
            u = new Ammo.btVector3();
          d.calculateLocalInertia(0, u);
          const f = new Ammo.btRigidBodyConstructionInfo(0, h, d, u),
            m = new Ammo.btRigidBody(f);
          Ammo.destroy(u), Ammo.destroy(f), a.addStaticBody(m);
        }),
        (ss.partWidth = 20),
        (ss.partHeight = 5),
        (ss.partLength = 20);
      const ls = ss;
      var cs,
        hs,
        ds,
        us,
        fs,
        ms,
        ps,
        gs,
        _s,
        vs,
        ys,
        xs,
        ws,
        Ss,
        bs,
        Ms,
        As,
        Ts,
        Es,
        Cs,
        Ps,
        ks,
        Is,
        Ds,
        Ns = function (t, e, n, i, r) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof e ? t !== e || !r : !e.has(t))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? r.call(t, n) : r ? (r.value = n) : e.set(t, n), n;
        },
        Rs = function (t, e, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof e ? t !== e || !i : !e.has(t))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t);
        };
      (hs = new WeakMap()),
        (ds = new WeakMap()),
        (us = new WeakMap()),
        (fs = new WeakMap()),
        (ms = new WeakMap()),
        (ps = new WeakMap()),
        (gs = new WeakMap()),
        (_s = new WeakMap()),
        (vs = new WeakMap()),
        (ys = new WeakMap()),
        (xs = new WeakMap()),
        (ws = new WeakMap()),
        (Ss = new WeakMap()),
        (bs = new WeakMap()),
        (Ms = new WeakMap()),
        (As = new WeakMap()),
        (Ts = new WeakMap()),
        (cs = new WeakSet()),
        (Es = function (t) {
          if (t.length % 3 != 0)
            throw "Car collision shape number of vertices is not dividable by 3";
          const e = new Ammo.btConvexHullShape();
          for (let n = 0; n < t.length; n += 3) {
            const i = t[n + 0],
              r = t[n + 1],
              a = t[n + 2],
              o = new Ammo.btVector3(i, r, a);
            e.addPoint(o, !0), Ammo.destroy(o);
          }
          const n = new Ammo.btCompoundShape(),
            i = new Ammo.btTransform();
          i.setIdentity();
          const r = new Ammo.btVector3(0, Rs(this, ps, "f"), 0);
          return (
            i.setOrigin(r),
            Ammo.destroy(r),
            n.addChildShape(i, e),
            Ammo.destroy(i),
            n
          );
        }),
        (Cs = function () {
          return new ct(0, 0, 1).applyQuaternion(this.getQuaternion());
        }),
        (Ps = function () {
          return new ct(0, -1, 0).applyQuaternion(this.getQuaternion());
        }),
        (ks = function () {
          if (null == Rs(this, fs, "f")) return new ct();
          {
            const t = Rs(this, fs, "f").getLinearVelocity();
            return new ct(t.x(), t.y(), t.z());
          }
        }),
        (Is = function () {
          const t = Rs(this, cs, "m", Cs)
              .call(this)
              .dot(Rs(this, cs, "m", ks).call(this)),
            e = Rs(this, cs, "m", Ps).call(this),
            n = 0.05,
            i = new Ammo.btVector3(e.x * t * n, e.y * t * n, e.z * t * n);
          Rs(this, fs, "f").applyCentralImpulse(i), Ammo.destroy(i);
        }),
        (Ds = function (t, e) {
          var n;
          Ns(this, Ms, !1, "f");
          let i = !1,
            r = !1,
            a = !1,
            o = !1;
          if (
            (Rs(this, xs, "f") &&
              (Rs(this, ys, "f") ||
                (({
                  up: i,
                  right: r,
                  down: a,
                  left: o,
                } = null !==
                  (n =
                    null == e
                      ? void 0
                      : e.getControls(Rs(this, ds, "f").currentFrame)) &&
                void 0 !== n
                  ? n
                  : { up: !1, right: !1, down: !1, left: !1 }),
                Rs(this, vs, "f").recordFrame(Rs(this, ds, "f").currentFrame, {
                  up: i,
                  right: r,
                  down: a,
                  left: o,
                }),
                Rs(this, ws, "f").increment()),
              Rs(this, Ss, "f").increment()),
            i && !Rs(this, ys, "f") && Rs(this, xs, "f"))
          ) {
            const t = 4e3;
            Rs(this, us, "f").applyEngineForce(t, 2),
              Rs(this, us, "f").applyEngineForce(t, 3);
          } else
            Rs(this, us, "f").applyEngineForce(0, 2),
              Rs(this, us, "f").applyEngineForce(0, 3);
          if (a && !Rs(this, ys, "f") && Rs(this, xs, "f"))
            if (this.getSpeedKmh() > 1) {
              const t = 10;
              Rs(this, us, "f").setBrake(t, 0),
                Rs(this, us, "f").setBrake(t, 1),
                Rs(this, us, "f").setBrake(t, 2),
                Rs(this, us, "f").setBrake(t, 3),
                Ns(this, Ms, !0, "f");
            } else {
              const t = -1e3;
              Rs(this, us, "f").applyEngineForce(t, 2),
                Rs(this, us, "f").applyEngineForce(t, 3),
                Rs(this, us, "f").setBrake(0, 0),
                Rs(this, us, "f").setBrake(0, 1),
                Rs(this, us, "f").setBrake(0, 2),
                Rs(this, us, "f").setBrake(0, 3);
            }
          else
            Rs(this, us, "f").setBrake(0, 0),
              Rs(this, us, "f").setBrake(0, 1),
              Rs(this, us, "f").setBrake(0, 2),
              Rs(this, us, "f").setBrake(0, 3);
          const s = Rs(this, cs, "m", ks)
              .call(this)
              .applyQuaternion(this.getQuaternion().invert()),
            l = -new V(s.x, s.z).normalize().angle() + Math.PI / 2;
          let c = Math.max(0, Math.min(1, this.getSpeedKmh() / 30));
          this.getWheelInContact(0) || this.getWheelInContact(1) || (c = 0);
          const h = 144 / Math.pow(46, 1.55),
            d = Math.max(-h, Math.min(h, l * c)),
            u =
              144 / Math.pow(Math.max(46, Math.abs(this.getSpeedKmh())), 1.55);
          Rs(this, xs, "f") &&
            (o && !Rs(this, ys, "f")
              ? Ns(this, _s, Math.min(Rs(this, _s, "f") + 10 * t, 1), "f")
              : r && !Rs(this, ys, "f")
              ? Ns(this, _s, Math.max(Rs(this, _s, "f") - 10 * t, -1), "f")
              : Rs(this, _s, "f") > 0
              ? Ns(this, _s, Math.max(Rs(this, _s, "f") - 10 * t, 0), "f")
              : Rs(this, _s, "f") < 0 &&
                Ns(this, _s, Math.min(Rs(this, _s, "f") + 10 * t, 0), "f"));
          const f = Rs(this, _s, "f") * u;
          let m;
          (m =
            d < 0 && f < 0
              ? Math.min(d, f)
              : d > 0 && f > 0
              ? Math.max(d, f)
              : d + f),
            Rs(this, us, "f").setSteeringValue(m, 0),
            Rs(this, us, "f").setSteeringValue(m, 1);
        });
      const Ls = class {
        constructor(t, e, n, i, r, a, o, s) {
          cs.add(this),
            hs.set(this, void 0),
            ds.set(this, void 0),
            us.set(this, void 0),
            fs.set(this, void 0),
            ms.set(this, void 0),
            ps.set(this, void 0),
            gs.set(this, void 0),
            _s.set(this, 0),
            vs.set(this, new So()),
            ys.set(this, !1),
            xs.set(this, !1),
            ws.set(this, new Qo()),
            Ss.set(this, new Qo()),
            bs.set(this, 0),
            Ms.set(this, !1),
            As.set(this, void 0),
            Ts.set(this, void 0),
            Ns(this, gs, o, "f"),
            Ns(this, ps, a, "f"),
            Ns(this, ds, new jo(), "f"),
            Rs(this, ds, "f").createGroundPlane(),
            Rs(this, ds, "f").createMountains(t, e),
            Ns(this, hs, new ls(Rs(this, ds, "f"), n, i), "f"),
            Rs(this, ds, "f").addPreStepEventListener(
              Ns(
                this,
                As,
                (t) => {
                  null != Rs(this, us, "f") &&
                    (Rs(this, ds, "f").activePhysicsAt(this.getPosition()),
                    Rs(this, cs, "m", Is).call(this),
                    Rs(this, cs, "m", Ds).call(this, t, o));
                },
                "f"
              )
            ),
            Rs(this, ds, "f").addPostStepEventListener(
              Ns(
                this,
                Ts,
                () => {
                  var t;
                  if (null != Rs(this, us, "f") && !Rs(this, ys, "f")) {
                    const e = this.getMatrix4(),
                      n = 0.16,
                      i = [
                        new be(
                          new ct(0, n, -1.65436).applyMatrix4(e),
                          new ct(0.701253, n, -0.458486).applyMatrix4(e),
                          new ct(-0.701253, n, -0.458486).applyMatrix4(e)
                        ),
                        new be(
                          new ct(0, n, 1.94498).applyMatrix4(e),
                          new ct(0.701253, n, -0.458486).applyMatrix4(e),
                          new ct(-0.701253, n, -0.458486).applyMatrix4(e)
                        ),
                      ],
                      r = Rs(this, hs, "f").getTotalNumberOfCheckpointIndices();
                    Rs(this, bs, "f") == r
                      ? Rs(this, hs, "f").checkFinish(i) &&
                        Ns(this, ys, !0, "f")
                      : Rs(this, hs, "f").checkCheckpoint(
                          i,
                          Rs(this, bs, "f")
                        ) && Ns(this, bs, ((t = Rs(this, bs, "f")), ++t), "f");
                  }
                },
                "f"
              )
            );
          const l = new Ammo.btTransform();
          l.setIdentity();
          const c = new Ammo.btDefaultMotionState(l);
          Ammo.destroy(l);
          const h = new Ammo.btVector3(0, 0, 0);
          Ns(this, ms, Rs(this, cs, "m", Es).call(this, r), "f"),
            Rs(this, ms, "f").calculateLocalInertia(400, h);
          const d = new Ammo.btRigidBodyConstructionInfo(
              400,
              c,
              Rs(this, ms, "f"),
              h
            ),
            u = new Ammo.btRigidBody(d);
          Ammo.destroy(d),
            Ammo.destroy(h),
            u.setDamping(0.1, 0.1),
            u.setActivationState(4),
            Rs(this, ds, "f").world.addRigidBody(u, 1, 2),
            Ns(this, fs, u, "f");
          const f = new Ammo.btVehicleTuning(),
            m = new Ammo.btDefaultVehicleRaycaster(Rs(this, ds, "f").world),
            p = new Ammo.btRaycastVehicle(f, u, m);
          p.setCoordinateSystem(0, 1, 2),
            Rs(this, ds, "f").world.addAction(p),
            Ns(this, us, p, "f");
          const g = new Ammo.btVector3(0, -1, 0),
            _ = new Ammo.btVector3(-1, 0, 0);
          ["WheelFL", "WheelFR", "WheelBL", "WheelBR"].forEach((t) => {
            let e;
            if ("WheelFL" == t) e = new Ammo.btVector3(0.627909, 0.27, 1.3478);
            else if ("WheelFR" == t)
              e = new Ammo.btVector3(-0.627909, 0.27, 1.3478);
            else if ("WheelBL" == t)
              e = new Ammo.btVector3(0.720832, 0.27, -1.52686);
            else {
              if ("WheelBR" != t) throw "Unidentified wheel";
              e = new Ammo.btVector3(-0.720832, 0.27, -1.52686);
            }
            const n = "WheelFL" == t || "WheelFR" == t,
              i = p.addWheel(e, g, _, 0.12, 0.331, f, n);
            Ammo.destroy(e),
              i.set_m_maxSuspensionTravelCm(1e3),
              i.set_m_maxSuspensionForce(1e6),
              i.set_m_suspensionStiffness(50),
              i.set_m_wheelsDampingRelaxation(5),
              i.set_m_wheelsDampingCompression(200),
              i.set_m_frictionSlip(3),
              i.set_m_rollInfluence(0.75);
          }),
            Ammo.destroy(g),
            Ammo.destroy(_);
          const v = new Ammo.btTransform();
          v.setIdentity();
          const y = new Ammo.btVector3(
            s.position.x,
            s.position.y,
            s.position.z
          );
          v.setOrigin(y), Ammo.destroy(y);
          const x = new Ammo.btQuaternion(
            s.quaternion.x,
            s.quaternion.y,
            s.quaternion.z,
            s.quaternion.w
          );
          v.setRotation(x),
            Ammo.destroy(x),
            Rs(this, fs, "f").setWorldTransform(v),
            Rs(this, fs, "f").getMotionState().setWorldTransform(v),
            Ammo.destroy(v),
            Rs(this, us, "f").resetSuspension(),
            Rs(this, us, "f").setSteeringValue(0, 0),
            Rs(this, us, "f").setSteeringValue(0, 1);
          const w = Rs(this, us, "f").getNumWheels();
          for (let t = 0; t < w; t++)
            Rs(this, us, "f").updateWheelTransform(t, !0);
        }
        dispose() {
          Rs(this, ds, "f").world.removeRigidBody(Rs(this, fs, "f")),
            Ammo.destroy(Rs(this, fs, "f").getMotionState()),
            Ammo.destroy(Rs(this, fs, "f"));
          for (let t = 0; t < Rs(this, ms, "f").getNumChildShapes(); t++)
            Ammo.destroy(Rs(this, ms, "f").getChildShape(t));
          Ammo.destroy(Rs(this, ms, "f")),
            Rs(this, ds, "f").world.removeAction(Rs(this, us, "f")),
            Ammo.destroy(Rs(this, us, "f")),
            Rs(this, ds, "f").removePreStepEventListener(Rs(this, As, "f")),
            Rs(this, ds, "f").removePostStepEventListener(Rs(this, Ts, "f")),
            Rs(this, ds, "f").dispose();
        }
        get physics() {
          return Rs(this, ds, "f");
        }
        get controls() {
          return Rs(this, gs, "f");
        }
        getSpeedKmh() {
          return null != Rs(this, us, "f") && this.hasStarted()
            ? Rs(this, us, "f").getCurrentSpeedKmHour()
            : 0;
        }
        start() {
          Ns(this, xs, !0, "f");
        }
        hasStarted() {
          return Rs(this, xs, "f");
        }
        hasFinished() {
          return Rs(this, ys, "f");
        }
        getRecording() {
          return Rs(this, vs, "f");
        }
        getTime() {
          return Rs(this, ws, "f").clone();
        }
        getTotalTime() {
          return Rs(this, Ss, "f").clone() / 2;
        }
        getNextCheckpointIndex() {
          return Rs(this, bs, "f");
        }
        isBrakeLightEnabled() {
          return Rs(this, Ms, "f");
        }
        getPosition() {
          if (null == Rs(this, fs, "f")) return new ct();
          {
            const t = new Ammo.btTransform();
            Rs(this, fs, "f").getMotionState().getWorldTransform(t);
            const e = t.getOrigin(),
              n = new ct(e.x(), e.y(), e.z());
            return Ammo.destroy(t), n;
          }
        }
        getQuaternion() {
          if (null == Rs(this, fs, "f")) return new lt();
          {
            const t = new Ammo.btTransform();
            Rs(this, fs, "f").getMotionState().getWorldTransform(t);
            const e = t.getRotation(),
              n = new lt(e.x(), e.y(), e.z(), e.w());
            return Ammo.destroy(t), n;
          }
        }
        getMatrix4() {
          return new Ot().compose(
            this.getPosition(),
            this.getQuaternion(),
            new ct(1, 1, 1)
          );
        }
        getWheelPosition(t) {
          const e = Rs(this, us, "f").getWheelTransformWS(t).getOrigin();
          return new ct(e.x(), e.y(), e.z());
        }
        getWheelQuaternion(t) {
          const e = Rs(this, us, "f").getWheelTransformWS(t).getRotation();
          return new lt(e.x(), e.y(), e.z(), e.w());
        }
        getWheelInContact(t) {
          return Rs(this, us, "f").getWheelInfo(t).m_raycastInfo.m_isInContact;
        }
        getWheelSuspensionVelocity(t) {
          return Rs(this, us, "f").getWheelInfo(t).m_suspensionRelativeVelocity;
        }
        getWheelSuspensionLength(t) {
          return Rs(this, us, "f").getWheelInfo(t).m_raycastInfo
            .m_suspensionLength;
        }
        getWheelRotation(t) {
          return Rs(this, us, "f").getWheelInfo(t).m_rotation;
        }
        getWheelDeltaRotation(t) {
          return Rs(this, us, "f").getWheelInfo(t).m_deltaRotation;
        }
        getWheelSkidInfo(t) {
          return Rs(this, us, "f").getWheelInfo(t).m_skidInfo;
        }
        getCollisionImpulses() {
          const t = [],
            e = Rs(this, ds, "f").dispatcher.getNumManifolds();
          for (let n = 0; n < e; ++n) {
            const e = Rs(this, ds, "f").dispatcher.getManifoldByIndexInternal(
                n
              ),
              i = e.getBody0(),
              r = e.getBody1();
            if (i.H == Rs(this, fs, "f").H || r.H == Rs(this, fs, "f").H) {
              const n = e.getNumContacts();
              for (let i = 0; i < n; ++i) {
                const n = e.getContactPoint(i);
                t.push(n.getAppliedImpulse());
              }
            }
          }
          return t;
        }
        step() {
          null != Rs(this, us, "f") &&
            this.hasStarted() &&
            Rs(this, ds, "f").step();
        }
      };
      var zs,
        Us,
        Bs,
        Os = function (t, e, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof e ? t !== e || !i : !e.has(t))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t);
        };
      (Us = new WeakMap()),
        (zs = new WeakSet()),
        (Bs = function (t) {
          if (t.length % 9 != 0)
            throw "Physics shape vertices length is not dividable by 9";
          const e = new Ammo.btTriangleMesh();
          for (let n = 0; n < t.length; n += 9) {
            const i = t[n + 0],
              r = t[n + 1],
              a = t[n + 2],
              o = t[n + 3],
              s = t[n + 4],
              l = t[n + 5],
              c = t[n + 6],
              h = t[n + 7],
              d = t[n + 8],
              u = new Ammo.btVector3(i, r, a),
              f = new Ammo.btVector3(o, s, l),
              m = new Ammo.btVector3(c, h, d);
            e.addTriangle(u, f, m),
              Ammo.destroy(u),
              Ammo.destroy(f),
              Ammo.destroy(m);
          }
          return { shape: new Ammo.btBvhTriangleMeshShape(e), triangleMesh: e };
        });
      const Vs = class {
        constructor(t) {
          zs.add(this),
            Us.set(this, new Map()),
            t.forEach(({ type: t, vertices: e, detector: n }) => {
              const { shape: i, triangleMesh: r } = Os(this, zs, "m", Bs).call(
                this,
                e
              );
              Os(this, Us, "f").set(t, {
                shape: i,
                triangleMesh: r,
                detector: n,
              });
            });
        }
        dispose() {
          Os(this, Us, "f").forEach(({ shape: t, triangleMesh: e }) => {
            Ammo.destroy(t), Ammo.destroy(e);
          }),
            Os(this, Us, "f").clear();
        }
        getPhysicsShape(t) {
          var e;
          const n =
            null === (e = Os(this, Us, "f").get(t)) || void 0 === e
              ? void 0
              : e.shape;
          if (null == n)
            throw 'Track part with the id "' + t + '" has no physics model';
          return n;
        }
        getPartTypesWithDetector(t) {
          const e = [];
          return (
            Os(this, Us, "f").forEach((n, i) => {
              null != n.detector && n.detector.type == t && e.push(i);
            }),
            e
          );
        }
        getDetector(t) {
          const e = Os(this, Us, "f").get(t);
          if (null == e)
            throw 'Track part with the id "' + t + '" does not exist';
          return e.detector;
        }
      };
      var Fs;
      !(function (t) {
        (t[(t.Init = 0)] = "Init"),
          (t[(t.Verify = 1)] = "Verify"),
          (t[(t.TestDeterminism = 2)] = "TestDeterminism"),
          (t[(t.CreateCar = 3)] = "CreateCar"),
          (t[(t.DeleteCar = 4)] = "DeleteCar"),
          (t[(t.StartCar = 5)] = "StartCar"),
          (t[(t.ControlCar = 6)] = "ControlCar"),
          (t[(t.PauseCar = 7)] = "PauseCar"),
          (t[(t.VerifyResult = 8)] = "VerifyResult"),
          (t[(t.DeterminismResult = 9)] = "DeterminismResult"),
          (t[(t.UpdateResult = 10)] = "UpdateResult");
      })(Fs || (Fs = {}));
      const Hs = Fs;
      var Ws,
        Gs = function (t, e, n, i, r) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof e ? t !== e || !r : !e.has(t))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? r.call(t, n) : r ? (r.value = n) : e.set(t, n), n;
        },
        qs = function (t, e, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof e ? t !== e || !i : !e.has(t))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t);
        };
      Ws = new WeakMap();
      const js = class {
        constructor(t) {
          Ws.set(this, void 0), Gs(this, Ws, t, "f");
        }
        dispose() {}
        getControls(t) {
          const [e, n, i, r] = qs(this, Ws, "f").getFrame(t);
          return { up: e, right: n, down: i, left: r };
        }
      };
      var Zs = n(312);
      const Ys = [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
        ],
        Xs = [
          -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
          -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
          -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 52, 53, 54,
          55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4,
          5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
          24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34,
          35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
        ],
        Js = 30;
      function Qs(t) {
        let e = 0,
          n = "";
        for (; e < 8 * t.length; ) {
          const i = $s(t, e);
          let r;
          (i & Js) == Js ? ((r = 31 & i), (e += 5)) : ((r = i), (e += 6)),
            (n += Ys[r]);
        }
        return n;
      }
      function Ks(t) {
        let e = 0;
        const n = [],
          i = t.length;
        for (let r = 0; r < i; r++) {
          const a = t.charCodeAt(r);
          if (a >= Xs.length) return null;
          const o = Xs[a];
          if (-1 == o) return null;
          (o & Js) == Js
            ? (tl(n, e, 5, o, r == i - 1), (e += 5))
            : (tl(n, e, 6, o, r == i - 1), (e += 6));
        }
        return new Uint8Array(n);
      }
      function $s(t, e) {
        if (e >= 8 * t.length) throw "Out of range";
        const n = Math.floor(e / 8),
          i = t[n],
          r = e - 8 * n;
        if (r <= 2 || n >= t.length - 1) return (i & (63 << r)) >>> r;
        return (
          ((i & (63 << r)) >>> r) | ((t[n + 1] & (63 >>> (8 - r))) << (8 - r))
        );
      }
      function tl(t, e, n, i, r) {
        const a = Math.floor(e / 8);
        for (; a >= t.length; ) t.push(0);
        const o = e - 8 * a;
        if (((t[a] |= (i << o) & 255), o > 8 - n && !r)) {
          const e = a + 1;
          e >= t.length && t.push(0), (t[e] |= i >> (8 - o));
        }
      }
      var el;
      !(function (t) {
        (t[(t.Straight = 0)] = "Straight"),
          (t[(t.TurnSharp = 1)] = "TurnSharp"),
          (t[(t.SlopeUp = 2)] = "SlopeUp"),
          (t[(t.SlopeDown = 3)] = "SlopeDown"),
          (t[(t.Slope = 4)] = "Slope"),
          (t[(t.Start = 5)] = "Start"),
          (t[(t.Finish = 6)] = "Finish"),
          (t[(t.ToWideMiddle = 7)] = "ToWideMiddle"),
          (t[(t.ToWideLeft = 8)] = "ToWideLeft"),
          (t[(t.ToWideRight = 9)] = "ToWideRight"),
          (t[(t.StraightWide = 10)] = "StraightWide"),
          (t[(t.InnerCornerWide = 11)] = "InnerCornerWide"),
          (t[(t.OuterCornerWide = 12)] = "OuterCornerWide"),
          (t[(t.SlopeUpLeftWide = 13)] = "SlopeUpLeftWide"),
          (t[(t.SlopeUpRightWide = 14)] = "SlopeUpRightWide"),
          (t[(t.SlopeDownLeftWide = 15)] = "SlopeDownLeftWide"),
          (t[(t.SlopeDownRightWide = 16)] = "SlopeDownRightWide"),
          (t[(t.SlopeLeftWide = 17)] = "SlopeLeftWide"),
          (t[(t.SlopeRightWide = 18)] = "SlopeRightWide"),
          (t[(t.PillarTop = 19)] = "PillarTop"),
          (t[(t.PillarMiddle = 20)] = "PillarMiddle"),
          (t[(t.PillarBottom = 21)] = "PillarBottom"),
          (t[(t.PillarShort = 22)] = "PillarShort"),
          (t[(t.PlanePillarBottom = 23)] = "PlanePillarBottom"),
          (t[(t.PlanePillarShort = 24)] = "PlanePillarShort"),
          (t[(t.Plane = 25)] = "Plane"),
          (t[(t.PlaneWall = 26)] = "PlaneWall"),
          (t[(t.PlaneWallCorner = 27)] = "PlaneWallCorner"),
          (t[(t.PlaneWallInnerCorner = 28)] = "PlaneWallInnerCorner"),
          (t[(t.Block = 29)] = "Block"),
          (t[(t.WallTrackTop = 30)] = "WallTrackTop"),
          (t[(t.WallTrackMiddle = 31)] = "WallTrackMiddle"),
          (t[(t.WallTrackBottom = 32)] = "WallTrackBottom"),
          (t[(t.PlaneSlopeUp = 33)] = "PlaneSlopeUp"),
          (t[(t.PlaneSlopeDown = 34)] = "PlaneSlopeDown"),
          (t[(t.PlaneSlope = 35)] = "PlaneSlope"),
          (t[(t.TurnShort = 36)] = "TurnShort"),
          (t[(t.TurnLong = 37)] = "TurnLong"),
          (t[(t.SlopeUpLong = 38)] = "SlopeUpLong"),
          (t[(t.SlopeDownLong = 39)] = "SlopeDownLong"),
          (t[(t.SlopePillar = 40)] = "SlopePillar"),
          (t[(t.TurnSLeft = 41)] = "TurnSLeft"),
          (t[(t.TurnSRight = 42)] = "TurnSRight"),
          (t[(t.IntersectionT = 43)] = "IntersectionT"),
          (t[(t.IntersectionCross = 44)] = "IntersectionCross"),
          (t[(t.PillarBranch1 = 45)] = "PillarBranch1"),
          (t[(t.PillarBranch2 = 46)] = "PillarBranch2"),
          (t[(t.PillarBranch3 = 47)] = "PillarBranch3"),
          (t[(t.PillarBranch4 = 48)] = "PillarBranch4"),
          (t[(t.WallTrackBottomCorner = 49)] = "WallTrackBottomCorner"),
          (t[(t.WallTrackMiddleCorner = 50)] = "WallTrackMiddleCorner"),
          (t[(t.WallTrackTopCorner = 51)] = "WallTrackTopCorner"),
          (t[(t.Checkpoint = 52)] = "Checkpoint"),
          (t[(t.HalfBlock = 53)] = "HalfBlock"),
          (t[(t.QuarterBlock = 54)] = "QuarterBlock"),
          (t[(t.HalfPlane = 55)] = "HalfPlane"),
          (t[(t.QuarterPlane = 56)] = "QuarterPlane"),
          (t[(t.PlaneBridge = 57)] = "PlaneBridge"),
          (t[(t.SignArrowLeft = 58)] = "SignArrowLeft"),
          (t[(t.SignArrowRight = 59)] = "SignArrowRight"),
          (t[(t.SignArrowUp = 61)] = "SignArrowUp"),
          (t[(t.SignArrowDown = 62)] = "SignArrowDown"),
          (t[(t.SignWarning = 63)] = "SignWarning"),
          (t[(t.SignWrongWay = 64)] = "SignWrongWay"),
          (t[(t.CheckpointWide = 65)] = "CheckpointWide"),
          (t[(t.WallTrackCeiling = 66)] = "WallTrackCeiling"),
          (t[(t.WallTrackFloor = 67)] = "WallTrackFloor"),
          (t[(t.BlockSlopedDown = 68)] = "BlockSlopedDown"),
          (t[(t.BlockSlopedDownInnerCorner = 69)] =
            "BlockSlopedDownInnerCorner"),
          (t[(t.BlockSlopedDownOuterCorner = 70)] =
            "BlockSlopedDownOuterCorner"),
          (t[(t.BlockSlopedUp = 71)] = "BlockSlopedUp"),
          (t[(t.BlockSlopedUpInnerCorner = 72)] = "BlockSlopedUpInnerCorner"),
          (t[(t.BlockSlopedUpOuterCorner = 73)] = "BlockSlopedUpOuterCorner"),
          (t[(t.FinishWide = 74)] = "FinishWide"),
          (t[(t.PlaneCheckpoint = 75)] = "PlaneCheckpoint"),
          (t[(t.PlaneFinish = 76)] = "PlaneFinish"),
          (t[(t.PlaneCheckpointWide = 77)] = "PlaneCheckpointWide"),
          (t[(t.PlaneFinishWide = 78)] = "PlaneFinishWide"),
          (t[(t.WallTrackBottomInnerCorner = 79)] =
            "WallTrackBottomInnerCorner"),
          (t[(t.WallTrackInnerCorner = 80)] = "WallTrackInnerCorner"),
          (t[(t.WallTrackTopInnerCorner = 81)] = "WallTrackTopInnerCorner"),
          (t[(t.TurnLong2 = 82)] = "TurnLong2"),
          (t[(t.TurnLong3 = 83)] = "TurnLong3"),
          (t[(t.SlopePillarShort = 84)] = "SlopePillarShort"),
          (t[(t.BlockSlopeUp = 85)] = "BlockSlopeUp"),
          (t[(t.BlockSlopeDown = 86)] = "BlockSlopeDown"),
          (t[(t.SlopeBlock = 87)] = "SlopeBlock"),
          (t[(t.SlopeUpBlock = 88)] = "SlopeUpBlock"),
          (t[(t.SlopeDownBlock = 89)] = "SlopeDownBlock"),
          (t[(t.SlopeUpLeftWideBlock = 90)] = "SlopeUpLeftWideBlock"),
          (t[(t.SlopeUpRightWideBlock = 91)] = "SlopeUpRightWideBlock"),
          (t[(t.SlopeDownLeftWideBlock = 92)] = "SlopeDownLeftWideBlock"),
          (t[(t.SlopeDownRightWideBlock = 93)] = "SlopeDownRightWideBlock"),
          (t[(t.SlopeLeftWideBlock = 94)] = "SlopeLeftWideBlock"),
          (t[(t.SlopeRightWideBlock = 95)] = "SlopeRightWideBlock"),
          (t[(t.PlaneSlopeUpBlock = 96)] = "PlaneSlopeUpBlock"),
          (t[(t.PlaneSlopeDownBlock = 97)] = "PlaneSlopeDownBlock"),
          (t[(t.PlaneSlopeBlock = 98)] = "PlaneSlopeBlock"),
          (t[(t.PlaneSlopePillar = 99)] = "PlaneSlopePillar"),
          (t[(t.PlaneSlopePillarShort = 100)] = "PlaneSlopePillarShort"),
          (t[(t.PillarBranch1Top = 101)] = "PillarBranch1Top"),
          (t[(t.PillarBranch1Bottom = 102)] = "PillarBranch1Bottom"),
          (t[(t.PillarBranch1Middle = 103)] = "PillarBranch1Middle"),
          (t[(t.PillarBranch2Top = 104)] = "PillarBranch2Top"),
          (t[(t.PillarBranch2Middle = 105)] = "PillarBranch2Middle"),
          (t[(t.PillarBranch2Bottom = 106)] = "PillarBranch2Bottom"),
          (t[(t.PillarBranch3Top = 107)] = "PillarBranch3Top"),
          (t[(t.PillarBranch3Middle = 108)] = "PillarBranch3Middle"),
          (t[(t.PillarBranch3Bottom = 109)] = "PillarBranch3Bottom"),
          (t[(t.PillarBranch4Top = 110)] = "PillarBranch4Top"),
          (t[(t.PillarBranch4Middle = 111)] = "PillarBranch4Middle"),
          (t[(t.PillarBranch4Bottom = 112)] = "PillarBranch4Bottom"),
          (t[(t.PillarBranch5 = 113)] = "PillarBranch5"),
          (t[(t.PillarBranch5Top = 114)] = "PillarBranch5Top"),
          (t[(t.PillarBranch5Middle = 115)] = "PillarBranch5Middle"),
          (t[(t.PillarBranch5Bottom = 116)] = "PillarBranch5Bottom"),
          (t[(t.ToWideDouble = 117)] = "ToWideDouble"),
          (t[(t.ToWideDiagonal = 118)] = "ToWideDiagonal"),
          (t[(t.StraightPillarBottom = 119)] = "StraightPillarBottom"),
          (t[(t.StraightPillarShort = 120)] = "StraightPillarShort"),
          (t[(t.TurnSharpPillarBottom = 121)] = "TurnSharpPillarBottom"),
          (t[(t.TurnSharpPillarShort = 122)] = "TurnSharpPillarShort"),
          (t[(t.IntersectionTPillarBottom = 123)] =
            "IntersectionTPillarBottom"),
          (t[(t.IntersectionTPillarShort = 124)] = "IntersectionTPillarShort"),
          (t[(t.IntersectionCrossPillarBottom = 125)] =
            "IntersectionCrossPillarBottom"),
          (t[(t.IntersectionCrossPillarShort = 126)] =
            "IntersectionCrossPillarShort"),
          (t[(t.PlaneBridgeCorner = 127)] = "PlaneBridgeCorner"),
          (t[(t.PlaneBridgeIntersectionT = 128)] = "PlaneBridgeIntersectionT"),
          (t[(t.PlaneBridgeIntersectionCross = 129)] =
            "PlaneBridgeIntersectionCross"),
          (t[(t.BlockBridge = 130)] = "BlockBridge"),
          (t[(t.BlockBridgeCorner = 131)] = "BlockBridgeCorner"),
          (t[(t.BlockBridgeIntersectionT = 132)] = "BlockBridgeIntersectionT"),
          (t[(t.BlockBridgeIntersectionCross = 133)] =
            "BlockBridgeIntersectionCross"),
          (t[(t.RedBlock = 134)] = "RedBlock"),
          (t[(t.RedHalfBlock = 135)] = "RedHalfBlock"),
          (t[(t.RedQuarterBlock = 136)] = "RedQuarterBlock"),
          (t[(t.RedBlockSlopedDown = 137)] = "RedBlockSlopedDown"),
          (t[(t.RedBlockSlopedDownInnerCorner = 138)] =
            "RedBlockSlopedDownInnerCorner"),
          (t[(t.RedBlockSlopedDownOuterCorner = 139)] =
            "RedBlockSlopedDownOuterCorner"),
          (t[(t.RedBlockSlopedUp = 140)] = "RedBlockSlopedUp"),
          (t[(t.RedBlockSlopedUpInnerCorner = 141)] =
            "RedBlockSlopedUpInnerCorner"),
          (t[(t.RedBlockSlopedUpOuterCorner = 142)] =
            "RedBlockSlopedUpOuterCorner"),
          (t[(t.RedBlockSlopeDown = 143)] = "RedBlockSlopeDown"),
          (t[(t.RedBlockSlopeUp = 144)] = "RedBlockSlopeUp"),
          (t[(t.RedBlockBridge = 145)] = "RedBlockBridge"),
          (t[(t.RedBlockBridgeCorner = 146)] = "RedBlockBridgeCorner"),
          (t[(t.RedBlockBridgeIntersectionT = 147)] =
            "RedBlockBridgeIntersectionT"),
          (t[(t.RedBlockBridgeIntersectionCross = 148)] =
            "RedBlockBridgeIntersectionCross"),
          (t[(t.BlueBlock = 149)] = "BlueBlock"),
          (t[(t.BlueHalfBlock = 150)] = "BlueHalfBlock"),
          (t[(t.BlueQuarterBlock = 151)] = "BlueQuarterBlock"),
          (t[(t.BlueBlockSlopedDown = 152)] = "BlueBlockSlopedDown"),
          (t[(t.BlueBlockSlopedDownInnerCorner = 153)] =
            "BlueBlockSlopedDownInnerCorner"),
          (t[(t.BlueBlockSlopedDownOuterCorner = 154)] =
            "BlueBlockSlopedDownOuterCorner"),
          (t[(t.BlueBlockSlopedUp = 155)] = "BlueBlockSlopedUp"),
          (t[(t.BlueBlockSlopedUpInnerCorner = 156)] =
            "BlueBlockSlopedUpInnerCorner"),
          (t[(t.BlueBlockSlopedUpOuterCorner = 157)] =
            "BlueBlockSlopedUpOuterCorner"),
          (t[(t.BlueBlockSlopeDown = 158)] = "BlueBlockSlopeDown"),
          (t[(t.BlueBlockSlopeUp = 159)] = "BlueBlockSlopeUp"),
          (t[(t.BlueBlockBridge = 160)] = "BlueBlockBridge"),
          (t[(t.BlueBlockBridgeCorner = 161)] = "BlueBlockBridgeCorner"),
          (t[(t.BlueBlockBridgeIntersectionT = 162)] =
            "BlueBlockBridgeIntersectionT"),
          (t[(t.BlueBlockBridgeIntersectionCross = 163)] =
            "BlueBlockBridgeIntersectionCross"),
          (t[(t.BlackBlock = 164)] = "BlackBlock"),
          (t[(t.BlackHalfBlock = 165)] = "BlackHalfBlock"),
          (t[(t.BlackQuarterBlock = 166)] = "BlackQuarterBlock"),
          (t[(t.BlackBlockSlopedDown = 167)] = "BlackBlockSlopedDown"),
          (t[(t.BlackBlockSlopedDownInnerCorner = 168)] =
            "BlackBlockSlopedDownInnerCorner"),
          (t[(t.BlackBlockSlopedDownOuterCorner = 169)] =
            "BlackBlockSlopedDownOuterCorner"),
          (t[(t.BlackBlockSlopedUp = 170)] = "BlackBlockSlopedUp"),
          (t[(t.BlackBlockSlopedUpInnerCorner = 171)] =
            "BlackBlockSlopedUpInnerCorner"),
          (t[(t.BlackBlockSlopedUpOuterCorner = 172)] =
            "BlackBlockSlopedUpOuterCorner"),
          (t[(t.BlackBlockSlopeDown = 173)] = "BlackBlockSlopeDown"),
          (t[(t.BlackBlockSlopeUp = 174)] = "BlackBlockSlopeUp"),
          (t[(t.BlackBlockBridge = 175)] = "BlackBlockBridge"),
          (t[(t.BlackBlockBridgeCorner = 176)] = "BlackBlockBridgeCorner"),
          (t[(t.BlackBlockBridgeIntersectionT = 177)] =
            "BlackBlockBridgeIntersectionT"),
          (t[(t.BlackBlockBridgeIntersectionCross = 178)] =
            "BlackBlockBridgeIntersectionCross");
      })(el || (el = {}));
      const nl = el;
      function il(t, e) {
        const n = t.parts;
        if ("object" != typeof n && null !== n && !Array.isArray(n))
          return null;
        const i = e.getPartTypesWithDetector($o.Checkpoint),
          r = new Rl(),
          a = Object.keys(n);
        for (let t = 0; t < a.length; ++t) {
          const e = parseInt(a[t], 10);
          if (!(e in nl)) return null;
          {
            const t = n[e];
            if (!Array.isArray(t)) return null;
            if (t.length % 4 != 0) return null;
            for (let n = 0; n < t.length; n += 4) {
              const a = parseInt(t[n + 0], 10),
                o = parseInt(t[n + 1], 10),
                s = parseInt(t[n + 2], 10),
                l = parseInt(t[n + 3], 10);
              if (isNaN(a) || isNaN(o) || isNaN(s) || isNaN(l)) return null;
              if (
                !(
                  l >= 0 &&
                  l <= 3 &&
                  Math.abs(a) <= 1e9 &&
                  o >= 0 &&
                  o <= 1e9 &&
                  Math.abs(s) <= 1e9
                )
              )
                return null;
              if (i.includes(e)) return null;
              r.addPart(a, o, s, e, l, null);
            }
          }
        }
        return r;
      }
      function rl(t, e) {
        const n = _o(t);
        if (null == n) return null;
        const i = e.getPartTypesWithDetector($o.Checkpoint),
          r = new Rl();
        let a = 0;
        for (; a < n.length; ) {
          if (n.length - a < 2) return null;
          const t = n[a + 0] | (n[a + 1] << 8);
          if (((a += 2), !(t in nl))) return null;
          if (n.length - a < 4) return null;
          const e =
            n[a + 0] | (n[a + 1] << 8) | (n[a + 2] << 16) | (n[a + 3] << 24);
          a += 4;
          for (let o = 0; o < e; ++o) {
            if (n.length - a < 3) return null;
            const e =
              (n[a + 0] | (n[a + 1] << 8) | (n[a + 2] << 16)) - Math.pow(2, 23);
            if (((a += 3), n.length - a < 3)) return null;
            const o = n[a + 0] | (n[a + 1] << 8) | (n[a + 2] << 16);
            if (((a += 3), n.length - a < 3)) return null;
            const s =
              (n[a + 0] | (n[a + 1] << 8) | (n[a + 2] << 16)) - Math.pow(2, 23);
            if (((a += 3), n.length - a < 1)) return null;
            const l = 3 & n[a + 0];
            if (((a += 1), i.includes(t))) return null;
            r.addPart(e, o, s, t, l, null);
          }
        }
        return r;
      }
      function al(t, e) {
        const n = Ks(t);
        if (null == n) return null;
        const i = new go.Inflate();
        if ((i.push(n, !0), i.err)) return null;
        const r = i.result,
          a = e.getPartTypesWithDetector($o.Checkpoint),
          o = new Rl();
        let s = 0;
        for (; s < r.length; ) {
          if (r.length - s < 2) return null;
          const t = r[s + 0] | (r[s + 1] << 8);
          if (((s += 2), !(t in nl))) return null;
          if (r.length - s < 4) return null;
          const e =
            r[s + 0] | (r[s + 1] << 8) | (r[s + 2] << 16) | (r[s + 3] << 24);
          s += 4;
          for (let n = 0; n < e; ++n) {
            if (r.length - s < 3) return null;
            const e =
              (r[s + 0] | (r[s + 1] << 8) | (r[s + 2] << 16)) - Math.pow(2, 23);
            if (((s += 3), r.length - s < 3)) return null;
            const n = r[s + 0] | (r[s + 1] << 8) | (r[s + 2] << 16);
            if (((s += 3), r.length - s < 3)) return null;
            const i =
              (r[s + 0] | (r[s + 1] << 8) | (r[s + 2] << 16)) - Math.pow(2, 23);
            if (((s += 3), r.length - s < 1)) return null;
            const l = 3 & r[s + 0];
            s += 1;
            let c = null;
            a.includes(t) && ((c = r[s + 0] | (r[s + 1] << 8)), (s += 2)),
              o.addPart(e, n, i, t, l, c);
          }
        }
        return o;
      }
      function ol(t, e) {
        const n = Ks(t);
        if (null == n) return null;
        const i = new go.Inflate();
        if ((i.push(n, !0), i.err)) return null;
        const r = i.result,
          a = e.getPartTypesWithDetector($o.Checkpoint),
          o = new Rl();
        let s = 0;
        for (; s < r.length; ) {
          if (r.length - s < 2) return null;
          const t = r[s + 0] | (r[s + 1] << 8);
          if (((s += 2), !(t in nl))) return null;
          if (r.length - s < 4) return null;
          const e =
            r[s + 0] | (r[s + 1] << 8) | (r[s + 2] << 16) | (r[s + 3] << 24);
          s += 4;
          for (let n = 0; n < e; ++n) {
            if (r.length - s < 3) return null;
            const e =
              (r[s + 0] | (r[s + 1] << 8) | (r[s + 2] << 16)) - Math.pow(2, 23);
            if (((s += 3), r.length - s < 3)) return null;
            const n = r[s + 0] | (r[s + 1] << 8) | (r[s + 2] << 16);
            if (((s += 3), r.length - s < 3)) return null;
            const i =
              (r[s + 0] | (r[s + 1] << 8) | (r[s + 2] << 16)) - Math.pow(2, 23);
            if (((s += 3), r.length - s < 1)) return null;
            const l = 3 & r[s + 0];
            s += 1;
            let c = null;
            a.includes(t) && ((c = r[s + 0] | (r[s + 1] << 8)), (s += 2)),
              o.addPart(e, n, i, t, l, c);
          }
        }
        return o;
      }
      class sl extends In {
        constructor(t, e) {
          const n = new De({ color: e, depthWrite: !1 });
          super(t.geometry, n, t.count);
          for (let e = 0; e < t.count; ++e) {
            const n = new Ot();
            t.getMatrixAt(e, n), this.setMatrixAt(e, n);
          }
          (this.meshMatrix = t.matrixWorld),
            (this.frustumCulled = !1),
            (this.matrixAutoUpdate = !1),
            (this.renderOrder = -1);
        }
        update(t, e) {
          var n = new Ot(),
            i =
              t.normal.x * e.x +
              t.normal.y * e.y +
              t.normal.z * e.z +
              -t.constant * e.w,
            r = n.elements;
          (r[0] = i - e.x * t.normal.x),
            (r[4] = -e.x * t.normal.y),
            (r[8] = -e.x * t.normal.z),
            (r[12] = -e.x * -t.constant),
            (r[1] = -e.y * t.normal.x),
            (r[5] = i - e.y * t.normal.y),
            (r[9] = -e.y * t.normal.z),
            (r[13] = -e.y * -t.constant),
            (r[2] = -e.z * t.normal.x),
            (r[6] = -e.z * t.normal.y),
            (r[10] = i - e.z * t.normal.z),
            (r[14] = -e.z * -t.constant),
            (r[3] = -e.w * t.normal.x),
            (r[7] = -e.w * t.normal.y),
            (r[11] = -e.w * t.normal.z),
            (r[15] = i - e.w * -t.constant),
            this.matrix.multiplyMatrices(n, this.meshMatrix);
        }
      }
      var ll;
      !(function (t) {
        (t[(t.ImperialUnitsEnabled = 0)] = "ImperialUnitsEnabled"),
          (t[(t.ResetHintEnabled = 1)] = "ResetHintEnabled"),
          (t[(t.GhostCarEnabled = 2)] = "GhostCarEnabled"),
          (t[(t.CockpitCameraToggle = 3)] = "CockpitCameraToggle"),
          (t[(t.CheckpointsPosition = 4)] = "CheckpointsPosition"),
          (t[(t.TimerPosition = 5)] = "TimerPosition"),
          (t[(t.SpeedometerPosition = 6)] = "SpeedometerPosition"),
          (t[(t.Language = 7)] = "Language"),
          (t[(t.CarShadowQuality = 8)] = "CarShadowQuality"),
          (t[(t.TrackShadowEnabled = 9)] = "TrackShadowEnabled"),
          (t[(t.CloudsEnabled = 10)] = "CloudsEnabled"),
          (t[(t.ParticlesEnabled = 11)] = "ParticlesEnabled"),
          (t[(t.SkidmarksEnabled = 12)] = "SkidmarksEnabled"),
          (t[(t.RenderScale = 13)] = "RenderScale"),
          (t[(t.Antialiasing = 14)] = "Antialiasing"),
          (t[(t.SoundEffectVolume = 15)] = "SoundEffectVolume"),
          (t[(t.MusicVolume = 16)] = "MusicVolume"),
          (t[(t.CheckpointVolume = 17)] = "CheckpointVolume");
      })(ll || (ll = {}));
      const cl = ll;
      var hl,
        dl,
        ul,
        fl,
        ml,
        pl,
        gl,
        _l,
        vl,
        yl,
        xl,
        wl,
        Sl,
        bl,
        Ml = function (t, e, n, i, r) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof e ? t !== e || !r : !e.has(t))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? r.call(t, n) : r ? (r.value = n) : e.set(t, n), n;
        },
        Al = function (t, e, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof e ? t !== e || !i : !e.has(t))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t);
        };
      class Tl {
        constructor(t, e, n, i, r, a, o) {
          if (
            ((this.checkpointOrder = null),
            (this.x = t),
            (this.y = e),
            (this.z = n),
            (this.rotation = i),
            (this.type = r),
            (this.matrix = a),
            (this.checkpointOrder = o),
            null != r.detector && r.detector.type == $o.Checkpoint)
          ) {
            if (null == o) throw "Checkpoint has no checkpoint order";
          } else if (null != o) throw "Non-checkpoint has checkpoint order";
        }
      }
      class El {
        constructor(t, e, n) {
          hl.add(this),
            dl.set(this, void 0),
            ul.set(this, void 0),
            fl.set(this, void 0),
            ml.set(this, []),
            pl.set(this, new Map()),
            gl.set(this, new Map()),
            _l.set(this, { min: new V(0, 0), max: new V(0, 0) }),
            vl.set(this, null),
            yl.set(this, []),
            Ml(this, dl, t, "f"),
            Ml(this, ul, e, "f"),
            Ml(this, fl, n, "f");
        }
        getID() {
          return Al(this, vl, "f");
        }
        clear() {
          Ml(this, vl, null, "f"),
            (Al(this, ml, "f").length = 0),
            Al(this, pl, "f").clear(),
            Al(this, gl, "f").clear(),
            Al(this, hl, "m", xl).call(this);
        }
        hasPartAt(t, e, n) {
          return Al(this, pl, "f").has(t + "|" + e + "|" + n);
        }
        getPartAt(t, e, n) {
          const i = Al(this, pl, "f").get(t + "|" + e + "|" + n);
          return null == i ? null : { id: i.type.id, rotation: i.rotation };
        }
        setPart(t, e, n, i, r, a) {
          const o = Al(this, fl, "f").getPart(i),
            s = new Tl(
              t,
              e,
              n,
              r,
              o,
              new Ot()
                .makeRotationY((r * Math.PI) / 2)
                .setPosition(
                  t * El.partWidth,
                  e * El.partHeight,
                  n * El.partLength
                ),
              a
            );
          Al(this, ml, "f").push(s);
          o.tiles.rotated(r).forEach((i, r, a) => {
            const o = t + i + "|" + (e + r) + "|" + (n + a);
            if (this.hasPartAt(t + i, e + r, n + a))
              throw "Track part collision";
            Al(this, pl, "f").set(o, s);
          });
          const l = Al(this, gl, "f").get(i);
          null == l ? Al(this, gl, "f").set(i, [s]) : l.push(s);
        }
        deletePart(t, e, n) {
          const i = Al(this, pl, "f").get(t + "|" + e + "|" + n);
          if (null == i) throw "Track part missing from parts by position map";
          for (let t = 0; t < Al(this, ml, "f").length; ++t) {
            if (Al(this, ml, "f")[t] == i) {
              Al(this, ml, "f").splice(t, 1);
              break;
            }
            if (t == Al(this, ml, "f").length - 1)
              throw "Track part missing from parts list";
          }
          i.type.tiles.rotated(i.rotation).forEach((t, e, n) => {
            const r = i.x + t + "|" + (i.y + e) + "|" + (i.z + n);
            if (!Al(this, pl, "f").has(r)) throw "Track part section missing";
            Al(this, pl, "f").delete(r);
          });
          const r = Al(this, gl, "f").get(i.type.id);
          if (null == r)
            throw "Track part type is missing from parts by type map";
          for (let t = 0; t < r.length; ++t) {
            if (r[t] == i) {
              r.splice(t, 1);
              break;
            }
            if (t == r.length - 1)
              throw "Track part is missing from parts by type map";
          }
        }
        getBounds() {
          return Al(this, _l, "f");
        }
        shortRaycast(t) {
          const e = new ct(
              Math.floor(t.ray.origin.x / El.partWidth),
              Math.floor(t.ray.origin.y / El.partHeight),
              Math.floor(t.ray.origin.z / El.partLength)
            ),
            n = new Set();
          for (let t = -1; t <= 1; t++)
            for (let i = -1; i <= 1; i++)
              for (let r = -1; r <= 1; r++) {
                const a = Al(this, hl, "m", wl).call(
                  this,
                  e.x + t,
                  e.y + i,
                  e.z + r
                );
                null != a && n.add(a);
              }
          let i = null;
          return (
            n.forEach((e) => {
              if (null == e.type.mesh) throw "Track part is not loaded yet";
              if (null == i) {
                e.type.mesh.matrixWorld.copy(e.matrix);
                const n = t.intersectObject(e.type.mesh, !0);
                n.length > 0 && (i = n[0]);
              }
            }),
            i
          );
        }
        generateMeshes() {
          Al(this, hl, "m", xl).call(this);
          const t = Al(this, dl, "f").getShadowDirection(),
            e = new st(t.x, t.y, t.z, 0);
          Al(this, fl, "f")
            .getAllParts()
            .forEach((t) => {
              const n = [];
              for (let e = 0; e < Al(this, ml, "f").length; ++e)
                Al(this, ml, "f")[e].type == t && n.push(Al(this, ml, "f")[e]);
              if (n.length > 0) {
                if (null == t.mesh) throw "Mesh is not loaded";
                const i = new In(t.mesh.geometry, t.mesh.material, n.length);
                (i.frustumCulled = !1), (i.receiveShadow = !0);
                for (let t = 0; t < n.length; ++t)
                  i.setMatrixAt(t, n[t].matrix);
                if (
                  (Al(this, dl, "f").scene.add(i),
                  Al(this, yl, "f").push(i),
                  Al(this, ul, "f").getSettingBoolean(cl.TrackShadowEnabled))
                ) {
                  const t = new sl(i, 1192238);
                  t.update(new vn(new ct(0, 1, 0), 0), e),
                    Al(this, dl, "f").scene.add(t),
                    Al(this, yl, "f").push(t);
                }
              }
            }),
            Al(this, hl, "m", Sl).call(this);
        }
        getCheckpoints() {
          let t = [];
          return (
            Al(this, fl, "f")
              .getPartTypesWithDetector($o.Checkpoint)
              .forEach((e) => {
                const n = Al(this, gl, "f").get(e);
                null != n && (t = t.concat(n));
              }),
            t.map((t) => {
              if (null == t.checkpointOrder)
                throw "Checkpoint has no checkpoint order";
              if (null == t.type.detector) throw "Checkpoint has no detector";
              return {
                x: t.x,
                y: t.y,
                z: t.z,
                rotation: t.rotation,
                checkpointOrder: t.checkpointOrder,
                detector: t.type.detector,
              };
            })
          );
        }
        getCheckpointOrders() {
          let t = [];
          return (
            Al(this, fl, "f")
              .getPartTypesWithDetector($o.Checkpoint)
              .forEach((e) => {
                const n = Al(this, gl, "f").get(e);
                null != n && (t = t.concat(n));
              }),
            t.map((t) => {
              if (null == t.checkpointOrder)
                throw "Checkpoint has no checkpoint order";
              if (null == t.type.detector) throw "Checkpoint has no detector";
              return t.checkpointOrder;
            })
          );
        }
        getTotalNumberOfCheckpointIndices() {
          let t = [];
          if (
            (Al(this, fl, "f")
              .getPartTypesWithDetector($o.Checkpoint)
              .forEach((e) => {
                const n = Al(this, gl, "f").get(e);
                null != n && (t = t.concat(n));
              }),
            null == t)
          )
            return 0;
          return t
            .map((t) => t.checkpointOrder)
            .filter((t, e, n) => n.indexOf(t) == e).length;
        }
        getStartTransform() {
          const t = Al(this, hl, "m", bl).call(this);
          if (null != t) {
            const e = new lt().setFromEuler(
                new Xt(0, Math.PI + (t.rotation * Math.PI) / 2, 0)
              ),
              n = new ct(0, 0.385, 1.35);
            return (
              n.applyQuaternion(e),
              {
                position: new ct(
                  t.x * El.partWidth + n.x,
                  t.y * El.partHeight + n.y,
                  t.z * El.partLength + n.z
                ),
                quaternion: e,
              }
            );
          }
          return null;
        }
        getTrackData() {
          const t = new Rl();
          return (
            Al(this, ml, "f").forEach((e) => {
              t.addPart(
                e.x,
                e.y,
                e.z,
                e.type.id,
                e.rotation,
                e.checkpointOrder
              );
            }),
            t
          );
        }
        loadTrackData(t, e = !0) {
          return (
            this.clear(),
            Ml(this, vl, e ? t.getId(Al(this, fl, "f")) : null, "f"),
            t.forEachPart((t, e, n, i, r, a) => {
              this.setPart(t, e, n, i, r, a);
            }),
            !0
          );
        }
      }
      (dl = new WeakMap()),
        (ul = new WeakMap()),
        (fl = new WeakMap()),
        (ml = new WeakMap()),
        (pl = new WeakMap()),
        (gl = new WeakMap()),
        (_l = new WeakMap()),
        (vl = new WeakMap()),
        (yl = new WeakMap()),
        (hl = new WeakSet()),
        (xl = function () {
          for (let t = 0; t < Al(this, yl, "f").length; ++t) {
            const e = Al(this, yl, "f")[t];
            Al(this, dl, "f").scene.remove(e);
          }
          Al(this, yl, "f").length = 0;
        }),
        (wl = function (t, e, n) {
          return Al(this, pl, "f").get(t + "|" + e + "|" + n);
        }),
        (Sl = function () {
          let t = 1 / 0,
            e = 1 / 0,
            n = -1 / 0,
            i = -1 / 0;
          Al(this, ml, "f").forEach((r) => {
            (t = Math.min(r.x, t)),
              (e = Math.min(r.z, e)),
              (n = Math.max(r.x, n)),
              (i = Math.max(r.z, i));
          }),
            Number.isFinite(t) &&
            Number.isFinite(e) &&
            Number.isFinite(n) &&
            Number.isFinite(i)
              ? Ml(this, _l, { min: new V(t, e), max: new V(n, i) }, "f")
              : Ml(this, _l, { min: new V(), max: new V() }, "f");
        }),
        (bl = function () {
          const t = Al(this, gl, "f").get(nl.Start);
          return null != t && t.length > 0 ? t[t.length - 1] : null;
        }),
        (El.partWidth = 20),
        (El.partHeight = 5),
        (El.partLength = 20);
      const Cl = El;
      var Pl,
        kl,
        Il,
        Dl,
        Nl = function (t, e, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof e ? t !== e || !i : !e.has(t))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t);
        };
      (kl = new WeakMap()),
        (Pl = new WeakSet()),
        (Il = function () {
          const t = Nl(this, kl, "f").get(nl.Start);
          return null != t && t.length > 0 ? t[t.length - 1] : null;
        }),
        (Dl = function (t) {
          const e = t.getPartTypesWithDetector($o.Checkpoint),
            n = [];
          return (
            Nl(this, kl, "f").forEach((t, i) => {
              if (i < 0 || i > 65535) throw "Type id is out of range";
              const r = t.length;
              n.push(
                255 & i,
                (i >>> 8) & 255,
                255 & r,
                (r >>> 8) & 255,
                (r >>> 16) & 255,
                (r >>> 24) & 255
              ),
                t.forEach((t) => {
                  const r = t.x + Math.pow(2, 23),
                    a = t.y,
                    o = t.z + Math.pow(2, 23);
                  if (
                    (n.push(
                      255 & r,
                      (r >>> 8) & 255,
                      (r >>> 16) & 255,
                      255 & a,
                      (a >>> 8) & 255,
                      (a >>> 16) & 255,
                      255 & o,
                      (o >>> 8) & 255,
                      (o >>> 16) & 255,
                      3 & t.rotation
                    ),
                    e.includes(i))
                  ) {
                    if (null == t.checkpointOrder)
                      throw "Checkpoint has no checkpoint order";
                    n.push(
                      255 & t.checkpointOrder,
                      (t.checkpointOrder >>> 8) & 255
                    );
                  }
                });
            }),
            new Uint8Array(n)
          );
        });
      const Rl = class {
        constructor() {
          Pl.add(this), kl.set(this, new Map());
        }
        addPart(t, e, n, i, r, a) {
          const o = Nl(this, kl, "f").get(i);
          null != o
            ? o.push({ x: t, y: e, z: n, rotation: r, checkpointOrder: a })
            : Nl(this, kl, "f").set(i, [
                { x: t, y: e, z: n, rotation: r, checkpointOrder: a },
              ]);
        }
        forEachPart(t) {
          Nl(this, kl, "f").forEach((e, n) => {
            e.forEach((e) => {
              t(e.x, e.y, e.z, n, e.rotation, e.checkpointOrder);
            });
          });
        }
        getId(t) {
          return (0, Zs.sha256)(Nl(this, Pl, "m", Dl).call(this, t));
        }
        getBounds() {
          let t = 1 / 0,
            e = 1 / 0,
            n = -1 / 0,
            i = -1 / 0;
          return (
            this.forEachPart((r, a, o) => {
              (t = Math.min(r, t)),
                (e = Math.min(o, e)),
                (n = Math.max(r, n)),
                (i = Math.max(o, i));
            }),
            Number.isFinite(t) &&
            Number.isFinite(e) &&
            Number.isFinite(n) &&
            Number.isFinite(i)
              ? { min: new V(t, e), max: new V(n, i) }
              : { min: new V(), max: new V() }
          );
        }
        hasStartingPoint() {
          return Nl(this, kl, "f").has(nl.Start);
        }
        getStartTransform() {
          const t = Nl(this, Pl, "m", Il).call(this);
          if (null != t) {
            const e = new lt().setFromEuler(
                new Xt(0, Math.PI + (t.rotation * Math.PI) / 2, 0)
              ),
              n = new ct(0, 0.385, 1.35);
            return (
              n.applyQuaternion(e),
              {
                position: new ct(
                  t.x * Cl.partWidth + n.x,
                  t.y * Cl.partHeight + n.y,
                  t.z * Cl.partLength + n.z
                ),
                quaternion: e,
              }
            );
          }
          return null;
        }
        toSaveString(t) {
          const e = Nl(this, Pl, "m", Dl).call(this, t),
            n = new go.Deflate({ level: 9 });
          return n.push(e, !0), Qs(n.result);
        }
        toExportString(t, e) {
          const n = Qs(new TextEncoder().encode(t)),
            i = new Uint8Array(1);
          i[0] = n.length;
          let r = Qs(i);
          return (
            1 == r.length && (r += "A"), "v3" + r + n + this.toSaveString(e)
          );
        }
        static fromSaveString(t, e) {
          const n = ol(t, e);
          if (null != n) return n;
          const i = al(t, e);
          if (null != i) return i;
          const r = rl(t, e);
          if (null != r) return r;
          const a = il(t, e);
          return null != a ? a : null;
        }
        static fromExportString(t, e) {
          const n = t.replace(/\s+/g, ""),
            i = (function (t, e) {
              if (!t.startsWith("v3")) return null;
              const n = Ks(t.substring(2, 4));
              if (null == n) return null;
              if (1 != n.length) return null;
              const i = n[0],
                r = Ks(t.substring(4, 4 + i));
              if (null == r) return null;
              let a;
              try {
                a = new TextDecoder("utf-8").decode(r);
              } catch (t) {
                return null;
              }
              const o = ol(t.substring(4 + i), e);
              return null == o ? null : { trackName: a, trackData: o };
            })(n, e);
          if (null != i) return i;
          const r = (function (t, e) {
            if (!t.startsWith("v2")) return null;
            const n = Ks(t.substring(2, 4));
            if (null == n) return null;
            if (1 != n.length) return null;
            const i = n[0],
              r = Math.ceil((i / 3) * 4),
              a = Ks(t.substring(4, 4 + r));
            if (null == a) return null;
            let o;
            try {
              o = new TextDecoder("utf-8").decode(a);
            } catch (t) {
              return null;
            }
            const s = al(t.substring(4 + r), e);
            return null == s ? null : { trackName: o, trackData: s };
          })(n, e);
          if (null != r) return r;
          const a = (function (t, e) {
            if (!t.startsWith("v1n")) return null;
            const n = _o(t.substring(3, 5));
            if (null == n) return null;
            if (1 != n.length) return null;
            const i = n[0],
              r = t.substring(5, 5 + i);
            let a;
            try {
              a = decodeURIComponent(r);
            } catch (t) {
              return console.error(t), null;
            }
            const o = rl(t.substring(5 + i), e);
            return null == o ? null : { trackName: a, trackData: o };
          })(n, e);
          if (null != a) return a;
          const o = (function (t, e) {
            if ("string" != typeof t.name) return null;
            if ("string" != typeof t.track) return null;
            let n;
            try {
              n = JSON.parse(t.track);
            } catch (t) {
              return console.error(t), null;
            }
            const i = il(n, e);
            return null == i ? null : { trackName: t.name, trackData: i };
          })(t, e);
          return null != o ? o : null;
        }
        createThumbnail(t) {
          const e = document.createElement("canvas");
          let n = 0,
            i = 0,
            r = 0,
            a = 0;
          this.forEachPart((t, e, o) => {
            (n = Math.min(n, t)),
              (i = Math.min(i, o)),
              (r = Math.max(r, t)),
              (a = Math.max(a, o));
          });
          const o = 10,
            s = r - n + 1;
          s <= o &&
            ((r += Math.ceil((o - s) / 2)), (n -= Math.ceil((o - s) / 2)));
          const l = a - i + 1;
          l <= o &&
            ((a += Math.ceil((o - l) / 2)), (i -= Math.ceil((o - l) / 2))),
            (e.width = Math.min(1024, r - n + 1)),
            (e.height = Math.min(1024, a - i + 1));
          const c = e.getContext("2d");
          c.fillStyle = "#fff";
          const h = [],
            d = [],
            u = [];
          return (
            this.forEachPart((e, r, a, o, s) => {
              const l = t.getPart(o);
              l.tiles.rotated(s).forEach((t, r, s) => {
                c.fillRect(e + t - n, a + s - i, 1, 1),
                  o == nl.Start
                    ? d.push([e + t - n, a + s - i])
                    : null != l.detector && l.detector.type == $o.Checkpoint
                    ? h.push([e + t - n, a + s - i])
                    : null != l.detector &&
                      l.detector.type == $o.Finish &&
                      u.push([e + t - n, a + s - i]);
              });
            }),
            (c.fillStyle = "#e2c026"),
            h.forEach(([t, e]) => {
              c.fillRect(t, e, 1, 1);
            }),
            (c.fillStyle = "#338ce0"),
            d.forEach(([t, e]) => {
              c.fillRect(t, e, 1, 1);
            }),
            (c.fillStyle = "#d12929"),
            u.forEach(([t, e]) => {
              c.fillRect(t, e, 1, 1);
            }),
            e
          );
        }
      };
      const Ll = class {
        constructor() {
          (this.up = !1), (this.right = !1), (this.down = !1), (this.left = !1);
        }
        dispose() {}
        getControls() {
          return {
            up: this.up,
            right: this.right,
            down: this.down,
            left: this.left,
          };
        }
      };
      importScripts("lib/ammo.wasm.js");
      const zl = [];
      (onmessage = (t) => {
        zl.push(t);
      }),
        Ammo().then(function (t) {
          let e = new Vs([]);
          const n = [];
          function i(t) {
            switch (t.data.messageType) {
              case Hs.Init:
                e = new Vs(t.data.trackParts);
                break;
              case Hs.Verify:
                !(function (t) {
                  const n = Rl.fromSaveString(t.data.trackData, e);
                  if (null == n) throw "Failed to load track";
                  const i = So.deserialize(t.data.carRecording);
                  if (null == i) throw "Failed to deserialize recording";
                  const r = t.data.carId,
                    a = new Ls(
                      t.data.mountainVertices,
                      new ct(
                        t.data.mountainOffset.x,
                        t.data.mountainOffset.y,
                        t.data.mountainOffset.z
                      ),
                      e,
                      n,
                      t.data.carCollisionShapeVertices,
                      t.data.carMassOffset,
                      new js(i),
                      {
                        position: new ct(
                          t.data.carPosition.x,
                          t.data.carPosition.y,
                          t.data.carPosition.z
                        ),
                        quaternion: new lt(
                          t.data.carQuaternion.x,
                          t.data.carQuaternion.y,
                          t.data.carQuaternion.z,
                          t.data.carQuaternion.w
                        ),
                      }
                    );
                  a.start();
                  const o = new Qo(t.data.targetFrames);
                  for (; !a.hasFinished() && a.getTime().lessOrEqual(o); )
                    a.step();
                  const s = a.hasFinished() && a.getTime().equals(o);
                  postMessage({
                    messageType: Hs.VerifyResult,
                    carId: r,
                    result: s,
                  }),
                    a.dispose();
                })(t);
                break;
              case Hs.TestDeterminism:
                postMessage({
                  messageType: Hs.DeterminismResult,
                  isDeterminstic: r(),
                });
                break;
              case Hs.CreateCar:
                !(function (t) {
                  const i = Rl.fromSaveString(t.data.trackData, e);
                  if (null == i) throw "Failed to load track";
                  let r,
                    a = null;
                  const o = t.data.carRecording;
                  if (null == o) r = a = new Ll();
                  else {
                    const t = So.deserialize(o);
                    if (null == t) throw "Failed to deserialize recording";
                    r = new js(t);
                  }
                  const s = t.data.carId,
                    l = new Ls(
                      t.data.mountainVertices,
                      new ct(
                        t.data.mountainOffset.x,
                        t.data.mountainOffset.y,
                        t.data.mountainOffset.z
                      ),
                      e,
                      i,
                      t.data.carCollisionShapeVertices,
                      t.data.carMassOffset,
                      r,
                      {
                        position: new ct(
                          t.data.carPosition.x,
                          t.data.carPosition.y,
                          t.data.carPosition.z
                        ),
                        quaternion: new lt(
                          t.data.carQuaternion.x,
                          t.data.carQuaternion.y,
                          t.data.carQuaternion.z,
                          t.data.carQuaternion.w
                        ),
                      }
                    );
                  n.push({
                    id: s,
                    model: l,
                    controls: a,
                    targetSimulationTime: null,
                    isPaused: !1,
                  });
                })(t);
                break;
              case Hs.DeleteCar:
                !(function (t) {
                  var e;
                  const i = t.data.carId;
                  for (let t = 0; t < n.length; t++) {
                    const r = n[t];
                    if (r.id == i) {
                      null === (e = r.controls) || void 0 === e || e.dispose(),
                        r.model.dispose(),
                        n.splice(t, 1);
                      break;
                    }
                  }
                })(t);
                break;
              case Hs.StartCar:
                !(function (t) {
                  const e = t.data.carId;
                  for (let i = 0; i < n.length; i++) {
                    const r = n[i];
                    if (r.id == e) {
                      r.model.start();
                      const e = t.data.targetSimulationTimeFrames;
                      r.targetSimulationTime = null != e ? new Qo(e) : null;
                      break;
                    }
                  }
                })(t);
                break;
              case Hs.ControlCar:
                !(function (t) {
                  const e = t.data.carId;
                  for (let i = 0; i < n.length; i++) {
                    const r = n[i];
                    if (r.id == e) {
                      if (null == r.controls)
                        throw "Tried to control uncontrollable car";
                      (r.controls.up = t.data.up),
                        (r.controls.right = t.data.right),
                        (r.controls.down = t.data.down),
                        (r.controls.left = t.data.left);
                      break;
                    }
                  }
                })(t);
                break;
              case Hs.PauseCar:
                !(function (t) {
                  const e = t.data.carId;
                  for (let i = 0; i < n.length; i++) {
                    const r = n[i];
                    if (r.id == e) {
                      r.isPaused = t.data.isPaused;
                      break;
                    }
                  }
                })(t);
            }
          }
          function r() {
            if (3.141592653589793 != Math.PI)
              return console.error("Determinism check failed: Math.PI"), !1;
            if (1.4142135623730951 != Math.SQRT2)
              return console.error("Determinism check failed: Math.SQRT2"), !1;
            if (0.8325374724941544 != Math.cos(0.587123751237))
              return console.error("Determinism check failed: Math.cos"), !1;
            if (0.5308738369903678 != Math.sin(2.581961285))
              return console.error("Determinism check failed: Math.sin"), !1;
            if (3678159.3874182813 != Math.pow(123, Math.PI))
              return console.error("Determinism check failed: Math.pow"), !1;
            if (123 * Math.PI != 386.41589639154455)
              return console.error("Determinism check failed: Multiply"), !1;
            if (123 / Math.PI != 39.152116000606256)
              return console.error("Determinism check failed: Division"), !1;
            const e = new ct(
                -0.24555909633636475,
                0.10719257593154907,
                8.278287887573242
              ),
              n = new lt(
                0.995263934135437,
                -0.003373440820723772,
                -0.08959680795669556,
                -0.03756022825837135
              ),
              i = new jo();
            i.createGroundPlane();
            const r = new t.btTransform();
            r.setIdentity();
            const a = new t.btDefaultMotionState(r);
            t.destroy(r);
            const o = new t.btVector3(0, 0, 0),
              s = new t.btVector3(0.1, 0.1, 0.1),
              l = new t.btBoxShape(s);
            l.calculateLocalInertia(400, o), t.destroy(s);
            const c = new t.btRigidBodyConstructionInfo(400, a, l, o),
              h = new t.btRigidBody(c);
            t.destroy(o),
              t.destroy(c),
              h.setActivationState(4),
              i.world.addRigidBody(h);
            const d = new t.btVehicleTuning(),
              u = new t.btDefaultVehicleRaycaster(i.world),
              f = new t.btRaycastVehicle(d, h, u);
            f.setCoordinateSystem(0, 1, 2), i.world.addAction(f);
            const m = new t.btVector3(0, -1, 0),
              p = new t.btVector3(-1, 0, 0);
            ["WheelFL", "WheelFR", "WheelBL", "WheelBR"].forEach((e) => {
              let n;
              if ("WheelFL" == e) n = new t.btVector3(0.627909, 0.27, 1.3478);
              else if ("WheelFR" == e)
                n = new t.btVector3(-0.627909, 0.27, 1.3478);
              else if ("WheelBL" == e)
                n = new t.btVector3(0.720832, 0.27, -1.52686);
              else {
                if ("WheelBR" != e) throw "Unidentified wheel";
                n = new t.btVector3(-0.720832, 0.27, -1.52686);
              }
              const i = "WheelFL" == e || "WheelFR" == e;
              f.addWheel(n, m, p, 0.12, 0.331, d, i), t.destroy(n);
            }),
              t.destroy(m),
              t.destroy(p);
            const g = new t.btTransform();
            g.setIdentity(),
              h.setWorldTransform(g),
              h.getMotionState().setWorldTransform(g),
              t.destroy(g),
              f.resetSuspension(),
              f.setSteeringValue(0, 0),
              f.setSteeringValue(0, 1);
            const _ = new t.btTransform();
            _.setIdentity();
            const v = new t.btDefaultMotionState(_);
            t.destroy(_);
            const y = new t.btVector3(0, 0, 0),
              x = new t.btVector3(0.1, 0.1, 0.1),
              w = new t.btBoxShape(x);
            w.calculateLocalInertia(100, y), t.destroy(x);
            const S = new t.btRigidBodyConstructionInfo(100, v, w, y),
              b = new t.btRigidBody(S);
            t.destroy(y),
              t.destroy(S),
              b.setActivationState(4),
              i.world.addRigidBody(b);
            const M = 1e5;
            f.applyEngineForce(M, 2), f.applyEngineForce(M, 3);
            for (let t = 0; t < 999; t++) i.step();
            const A = new t.btTransform();
            h.getMotionState().getWorldTransform(A);
            const T = A.getOrigin(),
              E = A.getRotation();
            t.destroy(A);
            const C = e.equals(new ct(T.x(), T.y(), T.z())),
              P = n.equals(new lt(E.x(), E.y(), E.z(), E.w()));
            i.dispose(),
              t.destroy(l),
              t.destroy(h),
              t.destroy(f),
              t.destroy(w),
              t.destroy(b);
            const k = C || P;
            return (
              k || console.error("Determinism check failed: Simulation"), k
            );
          }
          zl.forEach((t) => {
            i(t);
          }),
            (zl.length = 0),
            (onmessage = i);
          let a = performance.now(),
            o = 0;
          setInterval(() => {
            const t = performance.now();
            for (
              o += Math.max(0, Math.min(0.1, (t - a) / 1e3)), a = t;
              o > 0.001;

            ) {
              o -= 0.001;
              const e = [];
              n.forEach((n) => {
                const i = n.id,
                  r = n.model,
                  a = n.isPaused;
                if (
                  n.model.hasStarted() &&
                  (null == n.targetSimulationTime ||
                    n.model.getTotalTime().lessThan(n.targetSimulationTime)) &&
                  !a
                )
                  do {
                    const t = r.controls.getControls(
                      r.getTime().numberOfFrames
                    );
                    r.step();
                    const n = r.getPosition(),
                      a = r.getQuaternion(),
                      o = r.getWheelPosition(0),
                      s = r.getWheelPosition(1),
                      l = r.getWheelPosition(2),
                      c = r.getWheelPosition(3),
                      h = r.getWheelQuaternion(0),
                      d = r.getWheelQuaternion(1),
                      u = r.getWheelQuaternion(2),
                      f = r.getWheelQuaternion(3),
                      m = {
                        id: i,
                        frames: r.getTime().numberOfFrames,
                        totalFrames: r.getTotalTime().numberOfFrames,
                        speedKmh: r.getSpeedKmh(),
                        hasStarted: r.hasStarted(),
                        hasFinished: r.hasFinished(),
                        nextCheckpointIndex: r.getNextCheckpointIndex(),
                        position: { x: n.x, y: n.y, z: n.z },
                        quaternion: { x: a.x, y: a.y, z: a.z, w: a.w },
                        collisionImpulses: r.getCollisionImpulses(),
                        wheelInContact: [
                          r.getWheelInContact(0),
                          r.getWheelInContact(1),
                          r.getWheelInContact(2),
                          r.getWheelInContact(3),
                        ],
                        wheelSuspensionLength: [
                          r.getWheelSuspensionLength(0),
                          r.getWheelSuspensionLength(1),
                          r.getWheelSuspensionLength(2),
                          r.getWheelSuspensionLength(3),
                        ],
                        wheelSuspensionVelocity: [
                          r.getWheelSuspensionVelocity(0),
                          r.getWheelSuspensionVelocity(1),
                          r.getWheelSuspensionVelocity(2),
                          r.getWheelSuspensionVelocity(3),
                        ],
                        wheelRotation: [
                          r.getWheelRotation(0),
                          r.getWheelRotation(1),
                          r.getWheelRotation(2),
                          r.getWheelRotation(3),
                        ],
                        wheelDeltaRotation: [
                          r.getWheelDeltaRotation(0),
                          r.getWheelDeltaRotation(1),
                          r.getWheelDeltaRotation(2),
                          r.getWheelDeltaRotation(3),
                        ],
                        wheelSkidInfo: [
                          r.getWheelSkidInfo(0),
                          r.getWheelSkidInfo(1),
                          r.getWheelSkidInfo(2),
                          r.getWheelSkidInfo(3),
                        ],
                        wheelPosition: [
                          { x: o.x, y: o.y, z: o.z },
                          { x: s.x, y: s.y, z: s.z },
                          { x: l.x, y: l.y, z: l.z },
                          { x: c.x, y: c.y, z: c.z },
                        ],
                        wheelQuaternion: [
                          { x: h.x, y: h.y, z: h.z, w: h.w },
                          { x: d.x, y: d.y, z: d.z, w: d.w },
                          { x: u.x, y: u.y, z: u.z, w: u.w },
                          { x: f.x, y: f.y, z: f.z, w: f.w },
                        ],
                        brakeLightEnabled: r.isBrakeLightEnabled(),
                        controls: t,
                      };
                    e.push(m);
                  } while (
                    null != n.targetSimulationTime &&
                    n.model.getTotalTime().lessThan(n.targetSimulationTime) &&
                    Math.max(0, performance.now() - t) / 1e3 < 0.01
                  );
              }),
                postMessage({ messageType: Hs.UpdateResult, carStates: e });
            }
          });
        });
    })();
})();
