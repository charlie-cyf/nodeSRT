var SRTlib = require('SRT-util');
(function () {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function r(e, n, t) {
        SRTlib.send(`{ "anonymous": false, "function": "r", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    function o(i, f) {
            SRTlib.send(`{ "anonymous": false, "function": "o", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) {
                        SRTlib.send("]},");

            return c(i, !0);
          }
          if (u) {
                        SRTlib.send("]},");

            return u(i, !0);
          }
          var a = new Error("Cannot find module '" + i + "'");
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw (a.code = "MODULE_NOT_FOUND", a);
        }
        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
                    SRTlib.send(`{ "anonymous": true, "function": "e.i.call", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var n = e[i][1][r];
                    SRTlib.send("]},");

          return o(n || r);
                    SRTlib.send("]},");

        }, p, p.exports, r, e, n, t);
      }
            SRTlib.send("]},");

      return n[i].exports;
            SRTlib.send("]},");

    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        SRTlib.send("]},");

    return o;
        SRTlib.send("]},");

  }
    SRTlib.send("]},");

  return r;
    SRTlib.send("]},");

})()({
  1: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    'use strict';
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    revLookup[('-').charCodeAt(0)] = 62;
    revLookup[('_').charCodeAt(0)] = 63;
    function getLens(b64) {
            SRTlib.send(`{ "anonymous": false, "function": "getLens", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var len = b64.length;
      if (len % 4 > 0) {
                SRTlib.send("]},");

                SRTlib.send("]},");

        throw new Error('Invalid string. Length must be a multiple of 4');
      }
      var validLen = b64.indexOf('=');
      if (validLen === -1) validLen = len;
      var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
            SRTlib.send("]},");

      return [validLen, placeHoldersLen];
            SRTlib.send("]},");

    }
    function byteLength(b64) {
            SRTlib.send(`{ "anonymous": false, "function": "byteLength", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
            SRTlib.send("]},");

      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
            SRTlib.send("]},");

    }
    function _byteLength(b64, validLen, placeHoldersLen) {
            SRTlib.send(`{ "anonymous": false, "function": "_byteLength", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

            SRTlib.send("]},");

      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
            SRTlib.send("]},");

    }
    function toByteArray(b64) {
            SRTlib.send(`{ "anonymous": false, "function": "toByteArray", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i;
      for (i = 0; i < len; i += 4) {
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
      }
            SRTlib.send("]},");

      return arr;
            SRTlib.send("]},");

    }
    function tripletToBase64(num) {
            SRTlib.send(`{ "anonymous": false, "function": "tripletToBase64", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
            SRTlib.send("]},");

    }
    function encodeChunk(uint8, start, end) {
            SRTlib.send(`{ "anonymous": false, "function": "encodeChunk", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      var tmp;
      var output = [];
      for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
      }
            SRTlib.send("]},");

      return output.join('');
            SRTlib.send("]},");

    }
    function fromByteArray(uint8) {
            SRTlib.send(`{ "anonymous": false, "function": "fromByteArray", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var tmp;
      var len = uint8.length;
      var extraBytes = len % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
      } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
      }
            SRTlib.send("]},");

      return parts.join('');
            SRTlib.send("]},");

    }
        SRTlib.send("]},");

  }, {}],
  2: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    (function (Buffer) {
            SRTlib.send(`{ "anonymous": true, "function": "call", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      'use strict';
      var base64 = require('base64-js');
      var ieee754 = require('ieee754');
      exports.Buffer = Buffer;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      var K_MAX_LENGTH = 0x7fffffff;
      exports.kMaxLength = K_MAX_LENGTH;
      Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
      if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
      }
      function typedArraySupport() {
                SRTlib.send(`{ "anonymous": false, "function": "typedArraySupport", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        try {
          var arr = new Uint8Array(1);
          arr.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "arr.__proto__.foo", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return 42;
                            SRTlib.send("]},");

            }
          };
                    SRTlib.send("]},");

          return arr.foo() === 42;
        } catch (e) {
                    SRTlib.send("]},");

          return false;
        }
                SRTlib.send("]},");

      }
      Object.defineProperty(Buffer.prototype, 'parent', {
        enumerable: true,
        get: function () {
                    SRTlib.send(`{ "anonymous": true, "function": "call.get", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          if (!Buffer.isBuffer(this)) {
                        SRTlib.send("]},");

            return undefined;
          }
                    SRTlib.send("]},");

          return this.buffer;
                    SRTlib.send("]},");

        }
      });
      Object.defineProperty(Buffer.prototype, 'offset', {
        enumerable: true,
        get: function () {
                    SRTlib.send(`{ "anonymous": true, "function": "call.get2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          if (!Buffer.isBuffer(this)) {
                        SRTlib.send("]},");

            return undefined;
          }
                    SRTlib.send("]},");

          return this.byteOffset;
                    SRTlib.send("]},");

        }
      });
      function createBuffer(length) {
                SRTlib.send(`{ "anonymous": false, "function": "createBuffer", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (length > K_MAX_LENGTH) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('The value "' + length + '" is invalid for option "size"');
        }
        var buf = new Uint8Array(length);
        buf.__proto__ = Buffer.prototype;
                SRTlib.send("]},");

        return buf;
                SRTlib.send("]},");

      }
      function Buffer(arg, encodingOrOffset, length) {
                SRTlib.send(`{ "anonymous": false, "function": "Buffer", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        if (typeof arg === 'number') {
          if (typeof encodingOrOffset === 'string') {
                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

            throw new TypeError('The "string" argument must be of type string. Received type number');
          }
                    SRTlib.send("]},");

          return allocUnsafe(arg);
        }
                SRTlib.send("]},");

        return from(arg, encodingOrOffset, length);
                SRTlib.send("]},");

      }
      if (typeof Symbol !== 'undefined' && Symbol.species != null && Buffer[Symbol.species] === Buffer) {
        Object.defineProperty(Buffer, Symbol.species, {
          value: null,
          configurable: true,
          enumerable: false,
          writable: false
        });
      }
      Buffer.poolSize = 8192;
      function from(value, encodingOrOffset, length) {
                SRTlib.send(`{ "anonymous": false, "function": "from", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        if (typeof value === 'string') {
                    SRTlib.send("]},");

          return fromString(value, encodingOrOffset);
        }
        if (ArrayBuffer.isView(value)) {
                    SRTlib.send("]},");

          return fromArrayLike(value);
        }
        if (value == null) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
        }
        if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
                    SRTlib.send("]},");

          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof value === 'number') {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new TypeError('The "value" argument must not be of type number. Received type number');
        }
        var valueOf = value.valueOf && value.valueOf();
        if (valueOf != null && valueOf !== value) {
                    SRTlib.send("]},");

          return Buffer.from(valueOf, encodingOrOffset, length);
        }
        var b = fromObject(value);
        if (b) {
                    SRTlib.send("]},");

          return b;
        }
        if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') {
                    SRTlib.send("]},");

          return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
        }
        throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
                SRTlib.send("]},");

                SRTlib.send("]},");

                SRTlib.send("]},");

                SRTlib.send("]},");

      }
      Buffer.from = function (value, encodingOrOffset, length) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.from", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                SRTlib.send("]},");

        return from(value, encodingOrOffset, length);
                SRTlib.send("]},");

      };
      Buffer.prototype.__proto__ = Uint8Array.prototype;
      Buffer.__proto__ = Uint8Array;
      function assertSize(size) {
                SRTlib.send(`{ "anonymous": false, "function": "assertSize", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (typeof size !== 'number') {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new TypeError('"size" argument must be of type number');
        } else if (size < 0) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('The value "' + size + '" is invalid for option "size"');
        }
                SRTlib.send("]},");

      }
      function alloc(size, fill, encoding) {
                SRTlib.send(`{ "anonymous": false, "function": "alloc", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        assertSize(size);
        if (size <= 0) {
                    SRTlib.send("]},");

          return createBuffer(size);
        }
        if (fill !== undefined) {
                    SRTlib.send("]},");

          return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
        }
                SRTlib.send("]},");

        return createBuffer(size);
                SRTlib.send("]},");

      }
      Buffer.alloc = function (size, fill, encoding) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.alloc", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                SRTlib.send("]},");

        return alloc(size, fill, encoding);
                SRTlib.send("]},");

      };
      function allocUnsafe(size) {
                SRTlib.send(`{ "anonymous": false, "function": "allocUnsafe", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        assertSize(size);
                SRTlib.send("]},");

        return createBuffer(size < 0 ? 0 : checked(size) | 0);
                SRTlib.send("]},");

      }
      Buffer.allocUnsafe = function (size) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.allocUnsafe", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return allocUnsafe(size);
                SRTlib.send("]},");

      };
      Buffer.allocUnsafeSlow = function (size) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.allocUnsafeSlow", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return allocUnsafe(size);
                SRTlib.send("]},");

      };
      function fromString(string, encoding) {
                SRTlib.send(`{ "anonymous": false, "function": "fromString", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        if (typeof encoding !== 'string' || encoding === '') {
          encoding = 'utf8';
        }
        if (!Buffer.isEncoding(encoding)) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new TypeError('Unknown encoding: ' + encoding);
        }
        var length = byteLength(string, encoding) | 0;
        var buf = createBuffer(length);
        var actual = buf.write(string, encoding);
        if (actual !== length) {
          buf = buf.slice(0, actual);
        }
                SRTlib.send("]},");

        return buf;
                SRTlib.send("]},");

      }
      function fromArrayLike(array) {
                SRTlib.send(`{ "anonymous": false, "function": "fromArrayLike", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var length = array.length < 0 ? 0 : checked(array.length) | 0;
        var buf = createBuffer(length);
        for (var i = 0; i < length; i += 1) {
          buf[i] = array[i] & 255;
        }
                SRTlib.send("]},");

        return buf;
                SRTlib.send("]},");

      }
      function fromArrayBuffer(array, byteOffset, length) {
                SRTlib.send(`{ "anonymous": false, "function": "fromArrayBuffer", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        if (byteOffset < 0 || array.byteLength < byteOffset) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('"offset" is outside of buffer bounds');
        }
        if (array.byteLength < byteOffset + (length || 0)) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('"length" is outside of buffer bounds');
        }
        var buf;
        if (byteOffset === undefined && length === undefined) {
          buf = new Uint8Array(array);
        } else if (length === undefined) {
          buf = new Uint8Array(array, byteOffset);
        } else {
          buf = new Uint8Array(array, byteOffset, length);
        }
        buf.__proto__ = Buffer.prototype;
                SRTlib.send("]},");

        return buf;
                SRTlib.send("]},");

      }
      function fromObject(obj) {
                SRTlib.send(`{ "anonymous": false, "function": "fromObject", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (Buffer.isBuffer(obj)) {
          var len = checked(obj.length) | 0;
          var buf = createBuffer(len);
          if (buf.length === 0) {
                        SRTlib.send("]},");

            return buf;
          }
          obj.copy(buf, 0, 0, len);
                    SRTlib.send("]},");

          return buf;
        }
        if (obj.length !== undefined) {
          if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
                        SRTlib.send("]},");

            return createBuffer(0);
          }
                    SRTlib.send("]},");

          return fromArrayLike(obj);
        }
        if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
                    SRTlib.send("]},");

          return fromArrayLike(obj.data);
        }
                SRTlib.send("]},");

      }
      function checked(length) {
                SRTlib.send(`{ "anonymous": false, "function": "checked", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (length >= K_MAX_LENGTH) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
        }
                SRTlib.send("]},");

        return length | 0;
                SRTlib.send("]},");

      }
      function SlowBuffer(length) {
                SRTlib.send(`{ "anonymous": false, "function": "SlowBuffer", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (+length != length) {
          length = 0;
        }
                SRTlib.send("]},");

        return Buffer.alloc(+length);
                SRTlib.send("]},");

      }
      Buffer.isBuffer = function isBuffer(b) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.isBuffer.isBuffer", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return b != null && b._isBuffer === true && b !== Buffer.prototype;
                SRTlib.send("]},");

      };
      Buffer.compare = function compare(a, b) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.compare.compare", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
        if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
        if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        }
        if (a === b) {
                    SRTlib.send("]},");

          return 0;
        }
        var x = a.length;
        var y = b.length;
        for (var i = 0, len = Math.min(x, y); i < len; ++i) {
          if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
          }
        }
        if (x < y) {
                    SRTlib.send("]},");

          return -1;
        }
        if (y < x) {
                    SRTlib.send("]},");

          return 1;
        }
                SRTlib.send("]},");

        return 0;
                SRTlib.send("]},");

      };
      Buffer.isEncoding = function isEncoding(encoding) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.isEncoding.isEncoding", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        switch (String(encoding).toLowerCase()) {
          case 'hex':
          case 'utf8':
          case 'utf-8':
          case 'ascii':
          case 'latin1':
          case 'binary':
          case 'base64':
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

            return true;
          default:
                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

            return false;
        }
                SRTlib.send("]},");

      };
      Buffer.concat = function concat(list, length) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.concat.concat", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        if (!Array.isArray(list)) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        if (list.length === 0) {
                    SRTlib.send("]},");

          return Buffer.alloc(0);
        }
        var i;
        if (length === undefined) {
          length = 0;
          for (i = 0; i < list.length; ++i) {
            length += list[i].length;
          }
        }
        var buffer = Buffer.allocUnsafe(length);
        var pos = 0;
        for (i = 0; i < list.length; ++i) {
          var buf = list[i];
          if (isInstance(buf, Uint8Array)) {
            buf = Buffer.from(buf);
          }
          if (!Buffer.isBuffer(buf)) {
                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

            throw new TypeError('"list" argument must be an Array of Buffers');
          }
          buf.copy(buffer, pos);
          pos += buf.length;
        }
                SRTlib.send("]},");

        return buffer;
                SRTlib.send("]},");

      };
      function byteLength(string, encoding) {
                SRTlib.send(`{ "anonymous": false, "function": "byteLength", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        if (Buffer.isBuffer(string)) {
                    SRTlib.send("]},");

          return string.length;
        }
        if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
                    SRTlib.send("]},");

          return string.byteLength;
        }
        if (typeof string !== 'string') {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + 'Received type ' + typeof string);
        }
        var len = string.length;
        var mustMatch = arguments.length > 2 && arguments[2] === true;
        if (!mustMatch && len === 0) {
                    SRTlib.send("]},");

          return 0;
        }
        var loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case 'ascii':
            case 'latin1':
            case 'binary':
                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

              return len;
            case 'utf8':
            case 'utf-8':
                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

              return utf8ToBytes(string).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

              return len * 2;
            case 'hex':
                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

              return len >>> 1;
            case 'base64':
                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

              return base64ToBytes(string).length;
            default:
              if (loweredCase) {
                                SRTlib.send("]},");

                return mustMatch ? -1 : utf8ToBytes(string).length;
              }
              encoding = ('' + encoding).toLowerCase();
              loweredCase = true;
          }
        }
                SRTlib.send("]},");

      }
      Buffer.byteLength = byteLength;
      function slowToString(encoding, start, end) {
                SRTlib.send(`{ "anonymous": false, "function": "slowToString", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var loweredCase = false;
        if (start === undefined || start < 0) {
          start = 0;
        }
        if (start > this.length) {
                    SRTlib.send("]},");

          return '';
        }
        if (end === undefined || end > this.length) {
          end = this.length;
        }
        if (end <= 0) {
                    SRTlib.send("]},");

          return '';
        }
        end >>>= 0;
        start >>>= 0;
        if (end <= start) {
                    SRTlib.send("]},");

          return '';
        }
        if (!encoding) encoding = 'utf8';
        while (true) {
          switch (encoding) {
            case 'hex':
                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

              return hexSlice(this, start, end);
            case 'utf8':
            case 'utf-8':
                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

              return utf8Slice(this, start, end);
            case 'ascii':
                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

              return asciiSlice(this, start, end);
            case 'latin1':
            case 'binary':
                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

              return latin1Slice(this, start, end);
            case 'base64':
                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

              return base64Slice(this, start, end);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

              return utf16leSlice(this, start, end);
            default:
              if (loweredCase) {
                                SRTlib.send("]},");

                                SRTlib.send("]},");

                                SRTlib.send("]},");

                throw new TypeError('Unknown encoding: ' + encoding);
              }
              encoding = (encoding + '').toLowerCase();
              loweredCase = true;
          }
        }
                SRTlib.send("]},");

      }
      Buffer.prototype._isBuffer = true;
      function swap(b, n, m) {
                SRTlib.send(`{ "anonymous": false, "function": "swap", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var i = b[n];
        b[n] = b[m];
        b[m] = i;
                SRTlib.send("]},");

      }
      Buffer.prototype.swap16 = function swap16() {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.swap16.swap16", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var len = this.length;
        if (len % 2 !== 0) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('Buffer size must be a multiple of 16-bits');
        }
        for (var i = 0; i < len; i += 2) {
          swap(this, i, i + 1);
        }
                SRTlib.send("]},");

        return this;
                SRTlib.send("]},");

      };
      Buffer.prototype.swap32 = function swap32() {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.swap32.swap32", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var len = this.length;
        if (len % 4 !== 0) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('Buffer size must be a multiple of 32-bits');
        }
        for (var i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
                SRTlib.send("]},");

        return this;
                SRTlib.send("]},");

      };
      Buffer.prototype.swap64 = function swap64() {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.swap64.swap64", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var len = this.length;
        if (len % 8 !== 0) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('Buffer size must be a multiple of 64-bits');
        }
        for (var i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
                SRTlib.send("]},");

        return this;
                SRTlib.send("]},");

      };
      Buffer.prototype.toString = function toString() {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.toString.toString", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var length = this.length;
        if (length === 0) {
                    SRTlib.send("]},");

          return '';
        }
        if (arguments.length === 0) {
                    SRTlib.send("]},");

          return utf8Slice(this, 0, length);
        }
                SRTlib.send("]},");

        return slowToString.apply(this, arguments);
                SRTlib.send("]},");

      };
      Buffer.prototype.toLocaleString = Buffer.prototype.toString;
      Buffer.prototype.equals = function equals(b) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.equals.equals", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (!Buffer.isBuffer(b)) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new TypeError('Argument must be a Buffer');
        }
        if (this === b) {
                    SRTlib.send("]},");

          return true;
        }
                SRTlib.send("]},");

        return Buffer.compare(this, b) === 0;
                SRTlib.send("]},");

      };
      Buffer.prototype.inspect = function inspect() {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.inspect.inspect", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var str = '';
        var max = exports.INSPECT_MAX_BYTES;
        str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
        if (this.length > max) str += ' ... ';
                SRTlib.send("]},");

        return '<Buffer ' + str + '>';
                SRTlib.send("]},");

      };
      Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.compare.compare", "fileName": "${__filename}", "paramsNumber": 5, "calls" : [`);

        if (isInstance(target, Uint8Array)) {
          target = Buffer.from(target, target.offset, target.byteLength);
        }
        if (!Buffer.isBuffer(target)) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + 'Received type ' + typeof target);
        }
        if (start === undefined) {
          start = 0;
        }
        if (end === undefined) {
          end = target ? target.length : 0;
        }
        if (thisStart === undefined) {
          thisStart = 0;
        }
        if (thisEnd === undefined) {
          thisEnd = this.length;
        }
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('out of range index');
        }
        if (thisStart >= thisEnd && start >= end) {
                    SRTlib.send("]},");

          return 0;
        }
        if (thisStart >= thisEnd) {
                    SRTlib.send("]},");

          return -1;
        }
        if (start >= end) {
                    SRTlib.send("]},");

          return 1;
        }
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target) {
                    SRTlib.send("]},");

          return 0;
        }
        var x = thisEnd - thisStart;
        var y = end - start;
        var len = Math.min(x, y);
        var thisCopy = this.slice(thisStart, thisEnd);
        var targetCopy = target.slice(start, end);
        for (var i = 0; i < len; ++i) {
          if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
          }
        }
        if (x < y) {
                    SRTlib.send("]},");

          return -1;
        }
        if (y < x) {
                    SRTlib.send("]},");

          return 1;
        }
                SRTlib.send("]},");

        return 0;
                SRTlib.send("]},");

      };
      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                SRTlib.send(`{ "anonymous": false, "function": "bidirectionalIndexOf", "fileName": "${__filename}", "paramsNumber": 5, "calls" : [`);

        if (buffer.length === 0) {
                    SRTlib.send("]},");

          return -1;
        }
        if (typeof byteOffset === 'string') {
          encoding = byteOffset;
          byteOffset = 0;
        } else if (byteOffset > 0x7fffffff) {
          byteOffset = 0x7fffffff;
        } else if (byteOffset < -0x80000000) {
          byteOffset = -0x80000000;
        }
        byteOffset = +byteOffset;
        if (numberIsNaN(byteOffset)) {
          byteOffset = dir ? 0 : buffer.length - 1;
        }
        if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
        if (byteOffset >= buffer.length) {
          if (dir) return -1; else {
                        SRTlib.send("]},");

            return -1;
          }
        } else if (byteOffset < 0) {
          if (dir) byteOffset = 0; else {
                        SRTlib.send("]},");

            return -1;
          }
        }
        if (typeof val === 'string') {
          val = Buffer.from(val, encoding);
        }
        if (Buffer.isBuffer(val)) {
          if (val.length === 0) {
                        SRTlib.send("]},");

            return -1;
          }
                    SRTlib.send("]},");

          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        } else if (typeof val === 'number') {
          val = val & 0xFF;
          if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) {
                            SRTlib.send("]},");

              return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
                            SRTlib.send("]},");

              return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
          }
                    SRTlib.send("]},");

          return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
        }
        throw new TypeError('val must be string, number or Buffer');
                SRTlib.send("]},");

                SRTlib.send("]},");

                SRTlib.send("]},");

                SRTlib.send("]},");

      }
      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                SRTlib.send(`{ "anonymous": false, "function": "arrayIndexOf", "fileName": "${__filename}", "paramsNumber": 5, "calls" : [`);

        var indexSize = 1;
        var arrLength = arr.length;
        var valLength = val.length;
        if (encoding !== undefined) {
          encoding = String(encoding).toLowerCase();
          if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) {
                            SRTlib.send("]},");

              return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }
        function read(buf, i) {
                    SRTlib.send(`{ "anonymous": false, "function": "read", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (indexSize === 1) {
                        SRTlib.send("]},");

            return buf[i];
          } else {
                        SRTlib.send("]},");

            return buf.readUInt16BE(i * indexSize);
          }
                    SRTlib.send("]},");

        }
        var i;
        if (dir) {
          var foundIndex = -1;
          for (i = byteOffset; i < arrLength; i++) {
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
              if (foundIndex === -1) foundIndex = i;
              if (i - foundIndex + 1 === valLength) {
                                SRTlib.send("]},");

                return foundIndex * indexSize;
              }
            } else {
              if (foundIndex !== -1) i -= i - foundIndex;
              foundIndex = -1;
            }
          }
        } else {
          if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
          for (i = byteOffset; i >= 0; i--) {
            var found = true;
            for (var j = 0; j < valLength; j++) {
              if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
              }
            }
            if (found) {
                            SRTlib.send("]},");

              return i;
            }
          }
        }
                SRTlib.send("]},");

        return -1;
                SRTlib.send("]},");

      }
      Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.includes.includes", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                SRTlib.send("]},");

        return this.indexOf(val, byteOffset, encoding) !== -1;
                SRTlib.send("]},");

      };
      Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.indexOf.indexOf", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                SRTlib.send("]},");

        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
                SRTlib.send("]},");

      };
      Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.lastIndexOf.lastIndexOf", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                SRTlib.send("]},");

        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
                SRTlib.send("]},");

      };
      function hexWrite(buf, string, offset, length) {
                SRTlib.send(`{ "anonymous": false, "function": "hexWrite", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

        offset = Number(offset) || 0;
        var remaining = buf.length - offset;
        if (!length) {
          length = remaining;
        } else {
          length = Number(length);
          if (length > remaining) {
            length = remaining;
          }
        }
        var strLen = string.length;
        if (length > strLen / 2) {
          length = strLen / 2;
        }
        for (var i = 0; i < length; ++i) {
          var parsed = parseInt(string.substr(i * 2, 2), 16);
          if (numberIsNaN(parsed)) {
                        SRTlib.send("]},");

            return i;
          }
          buf[offset + i] = parsed;
        }
                SRTlib.send("]},");

        return i;
                SRTlib.send("]},");

      }
      function utf8Write(buf, string, offset, length) {
                SRTlib.send(`{ "anonymous": false, "function": "utf8Write", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

                SRTlib.send("]},");

        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
                SRTlib.send("]},");

      }
      function asciiWrite(buf, string, offset, length) {
                SRTlib.send(`{ "anonymous": false, "function": "asciiWrite", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

                SRTlib.send("]},");

        return blitBuffer(asciiToBytes(string), buf, offset, length);
                SRTlib.send("]},");

      }
      function latin1Write(buf, string, offset, length) {
                SRTlib.send(`{ "anonymous": false, "function": "latin1Write", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

                SRTlib.send("]},");

        return asciiWrite(buf, string, offset, length);
                SRTlib.send("]},");

      }
      function base64Write(buf, string, offset, length) {
                SRTlib.send(`{ "anonymous": false, "function": "base64Write", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

                SRTlib.send("]},");

        return blitBuffer(base64ToBytes(string), buf, offset, length);
                SRTlib.send("]},");

      }
      function ucs2Write(buf, string, offset, length) {
                SRTlib.send(`{ "anonymous": false, "function": "ucs2Write", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

                SRTlib.send("]},");

        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
                SRTlib.send("]},");

      }
      Buffer.prototype.write = function write(string, offset, length, encoding) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.write.write", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

        if (offset === undefined) {
          encoding = 'utf8';
          length = this.length;
          offset = 0;
        } else if (length === undefined && typeof offset === 'string') {
          encoding = offset;
          length = this.length;
          offset = 0;
        } else if (isFinite(offset)) {
          offset = offset >>> 0;
          if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
          } else {
            encoding = length;
            length = undefined;
          }
        } else {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
        }
        var remaining = this.length - offset;
        if (length === undefined || length > remaining) length = remaining;
        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('Attempt to write outside buffer bounds');
        }
        if (!encoding) encoding = 'utf8';
        var loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case 'hex':
                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

              return hexWrite(this, string, offset, length);
            case 'utf8':
            case 'utf-8':
                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

              return utf8Write(this, string, offset, length);
            case 'ascii':
                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

              return asciiWrite(this, string, offset, length);
            case 'latin1':
            case 'binary':
                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

              return latin1Write(this, string, offset, length);
            case 'base64':
                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

              return base64Write(this, string, offset, length);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

              return ucs2Write(this, string, offset, length);
            default:
              if (loweredCase) {
                                SRTlib.send("]},");

                                SRTlib.send("]},");

                                SRTlib.send("]},");

                throw new TypeError('Unknown encoding: ' + encoding);
              }
              encoding = ('' + encoding).toLowerCase();
              loweredCase = true;
          }
        }
                SRTlib.send("]},");

      };
      Buffer.prototype.toJSON = function toJSON() {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.toJSON.toJSON", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

        return {
          type: 'Buffer',
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
                SRTlib.send("]},");

      };
      function base64Slice(buf, start, end) {
                SRTlib.send(`{ "anonymous": false, "function": "base64Slice", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        if (start === 0 && end === buf.length) {
                    SRTlib.send("]},");

          return base64.fromByteArray(buf);
        } else {
                    SRTlib.send("]},");

          return base64.fromByteArray(buf.slice(start, end));
        }
                SRTlib.send("]},");

      }
      function utf8Slice(buf, start, end) {
                SRTlib.send(`{ "anonymous": false, "function": "utf8Slice", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        end = Math.min(buf.length, end);
        var res = [];
        var i = start;
        while (i < end) {
          var firstByte = buf[i];
          var codePoint = null;
          var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
          if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
              case 1:
                if (firstByte < 0x80) {
                  codePoint = firstByte;
                }
                break;
              case 2:
                secondByte = buf[i + 1];
                if ((secondByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                  if (tempCodePoint > 0x7F) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 3:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                  if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 4:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                fourthByte = buf[i + 3];
                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                  if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                    codePoint = tempCodePoint;
                  }
                }
            }
          }
          if (codePoint === null) {
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
          } else if (codePoint > 0xFFFF) {
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
          }
          res.push(codePoint);
          i += bytesPerSequence;
        }
                SRTlib.send("]},");

        return decodeCodePointsArray(res);
                SRTlib.send("]},");

      }
      var MAX_ARGUMENTS_LENGTH = 0x1000;
      function decodeCodePointsArray(codePoints) {
                SRTlib.send(`{ "anonymous": false, "function": "decodeCodePointsArray", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) {
                    SRTlib.send("]},");

          return String.fromCharCode.apply(String, codePoints);
        }
        var res = '';
        var i = 0;
        while (i < len) {
          res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
        }
                SRTlib.send("]},");

        return res;
                SRTlib.send("]},");

      }
      function asciiSlice(buf, start, end) {
                SRTlib.send(`{ "anonymous": false, "function": "asciiSlice", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var ret = '';
        end = Math.min(buf.length, end);
        for (var i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i] & 0x7F);
        }
                SRTlib.send("]},");

        return ret;
                SRTlib.send("]},");

      }
      function latin1Slice(buf, start, end) {
                SRTlib.send(`{ "anonymous": false, "function": "latin1Slice", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var ret = '';
        end = Math.min(buf.length, end);
        for (var i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i]);
        }
                SRTlib.send("]},");

        return ret;
                SRTlib.send("]},");

      }
      function hexSlice(buf, start, end) {
                SRTlib.send(`{ "anonymous": false, "function": "hexSlice", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var len = buf.length;
        if (!start || start < 0) start = 0;
        if (!end || end < 0 || end > len) end = len;
        var out = '';
        for (var i = start; i < end; ++i) {
          out += toHex(buf[i]);
        }
                SRTlib.send("]},");

        return out;
                SRTlib.send("]},");

      }
      function utf16leSlice(buf, start, end) {
                SRTlib.send(`{ "anonymous": false, "function": "utf16leSlice", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var bytes = buf.slice(start, end);
        var res = '';
        for (var i = 0; i < bytes.length; i += 2) {
          res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
        }
                SRTlib.send("]},");

        return res;
                SRTlib.send("]},");

      }
      Buffer.prototype.slice = function slice(start, end) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.slice.slice", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var len = this.length;
        start = ~~start;
        end = end === undefined ? len : ~~end;
        if (start < 0) {
          start += len;
          if (start < 0) start = 0;
        } else if (start > len) {
          start = len;
        }
        if (end < 0) {
          end += len;
          if (end < 0) end = 0;
        } else if (end > len) {
          end = len;
        }
        if (end < start) end = start;
        var newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer.prototype;
                SRTlib.send("]},");

        return newBuf;
                SRTlib.send("]},");

      };
      function checkOffset(offset, ext, length) {
                SRTlib.send(`{ "anonymous": false, "function": "checkOffset", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        if (offset % 1 !== 0 || offset < 0) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('offset is not uint');
        }
        if (offset + ext > length) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('Trying to access beyond buffer length');
        }
                SRTlib.send("]},");

      }
      Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.readUIntLE.readUIntLE", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 0x100)) {
          val += this[offset + i] * mul;
        }
                SRTlib.send("]},");

        return val;
                SRTlib.send("]},");

      };
      Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.readUIntBE.readUIntBE", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
          checkOffset(offset, byteLength, this.length);
        }
        var val = this[offset + --byteLength];
        var mul = 1;
        while (byteLength > 0 && (mul *= 0x100)) {
          val += this[offset + --byteLength] * mul;
        }
                SRTlib.send("]},");

        return val;
                SRTlib.send("]},");

      };
      Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.readUInt8.readUInt8", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
                SRTlib.send("]},");

        return this[offset];
                SRTlib.send("]},");

      };
      Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.readUInt16LE.readUInt16LE", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
                SRTlib.send("]},");

        return this[offset] | this[offset + 1] << 8;
                SRTlib.send("]},");

      };
      Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.readUInt16BE.readUInt16BE", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
                SRTlib.send("]},");

        return this[offset] << 8 | this[offset + 1];
                SRTlib.send("]},");

      };
      Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.readUInt32LE.readUInt32LE", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
                SRTlib.send("]},");

        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
                SRTlib.send("]},");

      };
      Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.readUInt32BE.readUInt32BE", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
                SRTlib.send("]},");

        return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
                SRTlib.send("]},");

      };
      Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.readIntLE.readIntLE", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 0x100)) {
          val += this[offset + i] * mul;
        }
        mul *= 0x80;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                SRTlib.send("]},");

        return val;
                SRTlib.send("]},");

      };
      Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.readIntBE.readIntBE", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        var i = byteLength;
        var mul = 1;
        var val = this[offset + --i];
        while (i > 0 && (mul *= 0x100)) {
          val += this[offset + --i] * mul;
        }
        mul *= 0x80;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                SRTlib.send("]},");

        return val;
                SRTlib.send("]},");

      };
      Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.readInt8.readInt8", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        if (!(this[offset] & 0x80)) {
                    SRTlib.send("]},");

          return this[offset];
        }
                SRTlib.send("]},");

        return (0xff - this[offset] + 1) * -1;
                SRTlib.send("]},");

      };
      Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.readInt16LE.readInt16LE", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        var val = this[offset] | this[offset + 1] << 8;
                SRTlib.send("]},");

        return val & 0x8000 ? val | 0xFFFF0000 : val;
                SRTlib.send("]},");

      };
      Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.readInt16BE.readInt16BE", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        var val = this[offset + 1] | this[offset] << 8;
                SRTlib.send("]},");

        return val & 0x8000 ? val | 0xFFFF0000 : val;
                SRTlib.send("]},");

      };
      Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.readInt32LE.readInt32LE", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
                SRTlib.send("]},");

        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
                SRTlib.send("]},");

      };
      Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.readInt32BE.readInt32BE", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
                SRTlib.send("]},");

        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
                SRTlib.send("]},");

      };
      Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.readFloatLE.readFloatLE", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
                SRTlib.send("]},");

        return ieee754.read(this, offset, true, 23, 4);
                SRTlib.send("]},");

      };
      Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.readFloatBE.readFloatBE", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
                SRTlib.send("]},");

        return ieee754.read(this, offset, false, 23, 4);
                SRTlib.send("]},");

      };
      Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.readDoubleLE.readDoubleLE", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
                SRTlib.send("]},");

        return ieee754.read(this, offset, true, 52, 8);
                SRTlib.send("]},");

      };
      Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.readDoubleBE.readDoubleBE", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
                SRTlib.send("]},");

        return ieee754.read(this, offset, false, 52, 8);
                SRTlib.send("]},");

      };
      function checkInt(buf, value, offset, ext, max, min) {
                SRTlib.send(`{ "anonymous": false, "function": "checkInt", "fileName": "${__filename}", "paramsNumber": 6, "calls" : [`);

        if (!Buffer.isBuffer(buf)) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new TypeError('"buffer" argument must be a Buffer instance');
        }
        if (value > max || value < min) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('"value" argument is out of bounds');
        }
        if (offset + ext > buf.length) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('Index out of range');
        }
                SRTlib.send("]},");

      }
      Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.writeUIntLE.writeUIntLE", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

        value = +value;
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        var mul = 1;
        var i = 0;
        this[offset] = value & 0xFF;
        while (++i < byteLength && (mul *= 0x100)) {
          this[offset + i] = value / mul & 0xFF;
        }
                SRTlib.send("]},");

        return offset + byteLength;
                SRTlib.send("]},");

      };
      Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.writeUIntBE.writeUIntBE", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

        value = +value;
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        var i = byteLength - 1;
        var mul = 1;
        this[offset + i] = value & 0xFF;
        while (--i >= 0 && (mul *= 0x100)) {
          this[offset + i] = value / mul & 0xFF;
        }
                SRTlib.send("]},");

        return offset + byteLength;
                SRTlib.send("]},");

      };
      Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.writeUInt8.writeUInt8", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
        this[offset] = value & 0xff;
                SRTlib.send("]},");

        return offset + 1;
                SRTlib.send("]},");

      };
      Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.writeUInt16LE.writeUInt16LE", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
                SRTlib.send("]},");

        return offset + 2;
                SRTlib.send("]},");

      };
      Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.writeUInt16BE.writeUInt16BE", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
                SRTlib.send("]},");

        return offset + 2;
                SRTlib.send("]},");

      };
      Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.writeUInt32LE.writeUInt32LE", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 0xff;
                SRTlib.send("]},");

        return offset + 4;
                SRTlib.send("]},");

      };
      Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.writeUInt32BE.writeUInt32BE", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
                SRTlib.send("]},");

        return offset + 4;
                SRTlib.send("]},");

      };
      Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.writeIntLE.writeIntLE", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        var i = 0;
        var mul = 1;
        var sub = 0;
        this[offset] = value & 0xFF;
        while (++i < byteLength && (mul *= 0x100)) {
          if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 0xFF;
        }
                SRTlib.send("]},");

        return offset + byteLength;
                SRTlib.send("]},");

      };
      Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.writeIntBE.writeIntBE", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        var i = byteLength - 1;
        var mul = 1;
        var sub = 0;
        this[offset + i] = value & 0xFF;
        while (--i >= 0 && (mul *= 0x100)) {
          if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 0xFF;
        }
                SRTlib.send("]},");

        return offset + byteLength;
                SRTlib.send("]},");

      };
      Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.writeInt8.writeInt8", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
        if (value < 0) value = 0xff + value + 1;
        this[offset] = value & 0xff;
                SRTlib.send("]},");

        return offset + 1;
                SRTlib.send("]},");

      };
      Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.writeInt16LE.writeInt16LE", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
                SRTlib.send("]},");

        return offset + 2;
                SRTlib.send("]},");

      };
      Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.writeInt16BE.writeInt16BE", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
                SRTlib.send("]},");

        return offset + 2;
                SRTlib.send("]},");

      };
      Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.writeInt32LE.writeInt32LE", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
                SRTlib.send("]},");

        return offset + 4;
                SRTlib.send("]},");

      };
      Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.writeInt32BE.writeInt32BE", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
        if (value < 0) value = 0xffffffff + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
                SRTlib.send("]},");

        return offset + 4;
                SRTlib.send("]},");

      };
      function checkIEEE754(buf, value, offset, ext, max, min) {
                SRTlib.send(`{ "anonymous": false, "function": "checkIEEE754", "fileName": "${__filename}", "paramsNumber": 6, "calls" : [`);

        if (offset + ext > buf.length) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('Index out of range');
        }
        if (offset < 0) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('Index out of range');
        }
                SRTlib.send("]},");

      }
      function writeFloat(buf, value, offset, littleEndian, noAssert) {
                SRTlib.send(`{ "anonymous": false, "function": "writeFloat", "fileName": "${__filename}", "paramsNumber": 5, "calls" : [`);

        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
        }
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
                SRTlib.send("]},");

        return offset + 4;
                SRTlib.send("]},");

      }
      Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.writeFloatLE.writeFloatLE", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                SRTlib.send("]},");

        return writeFloat(this, value, offset, true, noAssert);
                SRTlib.send("]},");

      };
      Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.writeFloatBE.writeFloatBE", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                SRTlib.send("]},");

        return writeFloat(this, value, offset, false, noAssert);
                SRTlib.send("]},");

      };
      function writeDouble(buf, value, offset, littleEndian, noAssert) {
                SRTlib.send(`{ "anonymous": false, "function": "writeDouble", "fileName": "${__filename}", "paramsNumber": 5, "calls" : [`);

        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
        }
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
                SRTlib.send("]},");

        return offset + 8;
                SRTlib.send("]},");

      }
      Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.writeDoubleLE.writeDoubleLE", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                SRTlib.send("]},");

        return writeDouble(this, value, offset, true, noAssert);
                SRTlib.send("]},");

      };
      Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.writeDoubleBE.writeDoubleBE", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                SRTlib.send("]},");

        return writeDouble(this, value, offset, false, noAssert);
                SRTlib.send("]},");

      };
      Buffer.prototype.copy = function copy(target, targetStart, start, end) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.copy.copy", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

        if (!Buffer.isBuffer(target)) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new TypeError('argument should be a Buffer');
        }
        if (!start) start = 0;
        if (!end && end !== 0) end = this.length;
        if (targetStart >= target.length) targetStart = target.length;
        if (!targetStart) targetStart = 0;
        if (end > 0 && end < start) end = start;
        if (end === start) {
                    SRTlib.send("]},");

          return 0;
        }
        if (target.length === 0 || this.length === 0) {
                    SRTlib.send("]},");

          return 0;
        }
        if (targetStart < 0) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('targetStart out of bounds');
        }
        if (start < 0 || start >= this.length) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('Index out of range');
        }
        if (end < 0) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('sourceEnd out of bounds');
        }
        if (end > this.length) end = this.length;
        if (target.length - targetStart < end - start) {
          end = target.length - targetStart + start;
        }
        var len = end - start;
        if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
          this.copyWithin(targetStart, start, end);
        } else if (this === target && start < targetStart && targetStart < end) {
          for (var i = len - 1; i >= 0; --i) {
            target[i + targetStart] = this[i + start];
          }
        } else {
          Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
        }
                SRTlib.send("]},");

        return len;
                SRTlib.send("]},");

      };
      Buffer.prototype.fill = function fill(val, start, end, encoding) {
                SRTlib.send(`{ "anonymous": true, "function": "call.Buffer.prototype.fill.fill", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

        if (typeof val === 'string') {
          if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
          } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
          }
          if (encoding !== undefined && typeof encoding !== 'string') {
                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

            throw new TypeError('encoding must be a string');
          }
          if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

            throw new TypeError('Unknown encoding: ' + encoding);
          }
          if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') {
              val = code;
            }
          }
        } else if (typeof val === 'number') {
          val = val & 255;
        }
        if (start < 0 || this.length < start || this.length < end) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('Out of range index');
        }
        if (end <= start) {
                    SRTlib.send("]},");

          return this;
        }
        start = start >>> 0;
        end = end === undefined ? this.length : end >>> 0;
        if (!val) val = 0;
        var i;
        if (typeof val === 'number') {
          for (i = start; i < end; ++i) {
            this[i] = val;
          }
        } else {
          var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
          var len = bytes.length;
          if (len === 0) {
                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
          }
          for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
          }
        }
                SRTlib.send("]},");

        return this;
                SRTlib.send("]},");

      };
      var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
      function base64clean(str) {
                SRTlib.send(`{ "anonymous": false, "function": "base64clean", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        str = str.split('=')[0];
        str = str.trim().replace(INVALID_BASE64_RE, '');
        if (str.length < 2) {
                    SRTlib.send("]},");

          return '';
        }
        while (str.length % 4 !== 0) {
          str = str + '=';
        }
                SRTlib.send("]},");

        return str;
                SRTlib.send("]},");

      }
      function toHex(n) {
                SRTlib.send(`{ "anonymous": false, "function": "toHex", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (n < 16) {
                    SRTlib.send("]},");

          return '0' + n.toString(16);
        }
                SRTlib.send("]},");

        return n.toString(16);
                SRTlib.send("]},");

      }
      function utf8ToBytes(string, units) {
                SRTlib.send(`{ "anonymous": false, "function": "utf8ToBytes", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        units = units || Infinity;
        var codePoint;
        var length = string.length;
        var leadSurrogate = null;
        var bytes = [];
        for (var i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i);
          if (codePoint > 0xD7FF && codePoint < 0xE000) {
            if (!leadSurrogate) {
              if (codePoint > 0xDBFF) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              } else if (i + 1 === length) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              }
              leadSurrogate = codePoint;
              continue;
            }
            if (codePoint < 0xDC00) {
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              leadSurrogate = codePoint;
              continue;
            }
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
          } else if (leadSurrogate) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          }
          leadSurrogate = null;
          if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
          } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
          } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
          } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
          } else {
                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

            throw new Error('Invalid code point');
          }
        }
                SRTlib.send("]},");

        return bytes;
                SRTlib.send("]},");

      }
      function asciiToBytes(str) {
                SRTlib.send(`{ "anonymous": false, "function": "asciiToBytes", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var byteArray = [];
        for (var i = 0; i < str.length; ++i) {
          byteArray.push(str.charCodeAt(i) & 0xFF);
        }
                SRTlib.send("]},");

        return byteArray;
                SRTlib.send("]},");

      }
      function utf16leToBytes(str, units) {
                SRTlib.send(`{ "anonymous": false, "function": "utf16leToBytes", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var c, hi, lo;
        var byteArray = [];
        for (var i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0) break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }
                SRTlib.send("]},");

        return byteArray;
                SRTlib.send("]},");

      }
      function base64ToBytes(str) {
                SRTlib.send(`{ "anonymous": false, "function": "base64ToBytes", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return base64.toByteArray(base64clean(str));
                SRTlib.send("]},");

      }
      function blitBuffer(src, dst, offset, length) {
                SRTlib.send(`{ "anonymous": false, "function": "blitBuffer", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

        for (var i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length) break;
          dst[i + offset] = src[i];
        }
                SRTlib.send("]},");

        return i;
                SRTlib.send("]},");

      }
      function isInstance(obj, type) {
                SRTlib.send(`{ "anonymous": false, "function": "isInstance", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                SRTlib.send("]},");

        return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
                SRTlib.send("]},");

      }
      function numberIsNaN(obj) {
                SRTlib.send(`{ "anonymous": false, "function": "numberIsNaN", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return obj !== obj;
                SRTlib.send("]},");

      }
            SRTlib.send("]},");

    }).call(this, require("buffer").Buffer);
        SRTlib.send("]},");

  }, {
    "base64-js": 1,
    "buffer": 2,
    "ieee754": 9
  }],
  3: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var fingerprint = require('./lib/fingerprint.js');
    var pad = require('./lib/pad.js');
    var getRandomValue = require('./lib/getRandomValue.js');
    var c = 0, blockSize = 4, base = 36, discreteValues = Math.pow(base, blockSize);
    function randomBlock() {
            SRTlib.send(`{ "anonymous": false, "function": "randomBlock", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

      return pad((getRandomValue() * discreteValues << 0).toString(base), blockSize);
            SRTlib.send("]},");

    }
    function safeCounter() {
            SRTlib.send(`{ "anonymous": false, "function": "safeCounter", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      c = c < discreteValues ? c : 0;
      c++;
            SRTlib.send("]},");

      return c - 1;
            SRTlib.send("]},");

    }
    function cuid() {
            SRTlib.send(`{ "anonymous": false, "function": "cuid", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var letter = 'c', timestamp = new Date().getTime().toString(base), counter = pad(safeCounter().toString(base), blockSize), print = fingerprint(), random = randomBlock() + randomBlock();
            SRTlib.send("]},");

      return letter + timestamp + counter + print + random;
            SRTlib.send("]},");

    }
    cuid.slug = function slug() {
            SRTlib.send(`{ "anonymous": true, "function": "cuid.slug.slug", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var date = new Date().getTime().toString(36), counter = safeCounter().toString(36).slice(-4), print = fingerprint().slice(0, 1) + fingerprint().slice(-1), random = randomBlock().slice(-2);
            SRTlib.send("]},");

      return date.slice(-2) + counter + print + random;
            SRTlib.send("]},");

    };
    cuid.isCuid = function isCuid(stringToCheck) {
            SRTlib.send(`{ "anonymous": true, "function": "cuid.isCuid.isCuid", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (typeof stringToCheck !== 'string') {
                SRTlib.send("]},");

        return false;
      }
      if (stringToCheck.startsWith('c')) {
                SRTlib.send("]},");

        return true;
      }
            SRTlib.send("]},");

      return false;
            SRTlib.send("]},");

    };
    cuid.isSlug = function isSlug(stringToCheck) {
            SRTlib.send(`{ "anonymous": true, "function": "cuid.isSlug.isSlug", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (typeof stringToCheck !== 'string') {
                SRTlib.send("]},");

        return false;
      }
      var stringLength = stringToCheck.length;
      if (stringLength >= 7 && stringLength <= 10) {
                SRTlib.send("]},");

        return true;
      }
            SRTlib.send("]},");

      return false;
            SRTlib.send("]},");

    };
    cuid.fingerprint = fingerprint;
    module.exports = cuid;
        SRTlib.send("]},");

  }, {
    "./lib/fingerprint.js": 4,
    "./lib/getRandomValue.js": 5,
    "./lib/pad.js": 6
  }],
  4: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var pad = require('./pad.js');
    var env = typeof window === 'object' ? window : self;
    var globalCount = Object.keys(env).length;
    var mimeTypesLength = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
    var clientId = pad((mimeTypesLength + navigator.userAgent.length).toString(36) + globalCount.toString(36), 4);
    module.exports = function fingerprint() {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.fingerprint", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

      return clientId;
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }, {
    "./pad.js": 6
  }],
  5: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var getRandomValue;
    var crypto = typeof window !== 'undefined' && (window.crypto || window.msCrypto) || typeof self !== 'undefined' && self.crypto;
    if (crypto) {
      var lim = Math.pow(2, 32) - 1;
      getRandomValue = function () {
                SRTlib.send(`{ "anonymous": true, "function": "getRandomValue", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

        return Math.abs(crypto.getRandomValues(new Uint32Array(1))[0] / lim);
                SRTlib.send("]},");

      };
    } else {
      getRandomValue = Math.random;
    }
    module.exports = getRandomValue;
        SRTlib.send("]},");

  }, {}],
  6: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function pad(num, size) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.pad", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var s = '000000000' + num;
            SRTlib.send("]},");

      return s.substr(s.length - size);
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }, {}],
  7: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    'use strict';
    module.exports = require('./').polyfill();
        SRTlib.send("]},");

  }, {
    "./": 8
  }],
  8: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    (function (process, global) {
            SRTlib.send(`{ "anonymous": true, "function": "call4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      (function (global, factory) {
                SRTlib.send(`{ "anonymous": true, "function": "call2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.ES6Promise = factory();
                SRTlib.send("]},");

      })(this, function () {
                SRTlib.send(`{ "anonymous": true, "function": "call3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        'use strict';
        function objectOrFunction(x) {
                    SRTlib.send(`{ "anonymous": false, "function": "objectOrFunction", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var type = typeof x;
                    SRTlib.send("]},");

          return x !== null && (type === 'object' || type === 'function');
                    SRTlib.send("]},");

        }
        function isFunction(x) {
                    SRTlib.send(`{ "anonymous": false, "function": "isFunction", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return typeof x === 'function';
                    SRTlib.send("]},");

        }
        var _isArray = void 0;
        if (Array.isArray) {
          _isArray = Array.isArray;
        } else {
          _isArray = function (x) {
                        SRTlib.send(`{ "anonymous": true, "function": "call._isArray", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return Object.prototype.toString.call(x) === '[object Array]';
                        SRTlib.send("]},");

          };
        }
        var isArray = _isArray;
        var len = 0;
        var vertxNext = void 0;
        var customSchedulerFn = void 0;
        var asap = function asap(callback, arg) {
                    SRTlib.send(`{ "anonymous": false, "function": "asap", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          queue[len] = callback;
          queue[len + 1] = arg;
          len += 2;
          if (len === 2) {
            if (customSchedulerFn) {
              customSchedulerFn(flush);
            } else {
              scheduleFlush();
            }
          }
                    SRTlib.send("]},");

        };
        function setScheduler(scheduleFn) {
                    SRTlib.send(`{ "anonymous": false, "function": "setScheduler", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          customSchedulerFn = scheduleFn;
                    SRTlib.send("]},");

        }
        function setAsap(asapFn) {
                    SRTlib.send(`{ "anonymous": false, "function": "setAsap", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          asap = asapFn;
                    SRTlib.send("]},");

        }
        var browserWindow = typeof window !== 'undefined' ? window : undefined;
        var browserGlobal = browserWindow || ({});
        var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
        var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';
        var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
        function useNextTick() {
                    SRTlib.send(`{ "anonymous": false, "function": "useNextTick", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

          return function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return process.nextTick(flush);
                        SRTlib.send("]},");

          };
                    SRTlib.send("]},");

        }
        function useVertxTimer() {
                    SRTlib.send(`{ "anonymous": false, "function": "useVertxTimer", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          if (typeof vertxNext !== 'undefined') {
                        SRTlib.send("]},");

            return function () {
                            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              vertxNext(flush);
                            SRTlib.send("]},");

            };
          }
                    SRTlib.send("]},");

          return useSetTimeout();
                    SRTlib.send("]},");

        }
        function useMutationObserver() {
                    SRTlib.send(`{ "anonymous": false, "function": "useMutationObserver", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var iterations = 0;
          var observer = new BrowserMutationObserver(flush);
          var node = document.createTextNode('');
          observer.observe(node, {
            characterData: true
          });
                    SRTlib.send("]},");

          return function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            node.data = iterations = ++iterations % 2;
                        SRTlib.send("]},");

          };
                    SRTlib.send("]},");

        }
        function useMessageChannel() {
                    SRTlib.send(`{ "anonymous": false, "function": "useMessageChannel", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var channel = new MessageChannel();
          channel.port1.onmessage = flush;
                    SRTlib.send("]},");

          return function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return channel.port2.postMessage(0);
                        SRTlib.send("]},");

          };
                    SRTlib.send("]},");

        }
        function useSetTimeout() {
                    SRTlib.send(`{ "anonymous": false, "function": "useSetTimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var globalSetTimeout = setTimeout;
                    SRTlib.send("]},");

          return function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return globalSetTimeout(flush, 1);
                        SRTlib.send("]},");

          };
                    SRTlib.send("]},");

        }
        var queue = new Array(1000);
        function flush() {
                    SRTlib.send(`{ "anonymous": false, "function": "flush", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          for (var i = 0; i < len; i += 2) {
            var callback = queue[i];
            var arg = queue[i + 1];
            callback(arg);
            queue[i] = undefined;
            queue[i + 1] = undefined;
          }
          len = 0;
                    SRTlib.send("]},");

        }
        function attemptVertx() {
                    SRTlib.send(`{ "anonymous": false, "function": "attemptVertx", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          try {
            var vertx = Function('return this')().require('vertx');
            vertxNext = vertx.runOnLoop || vertx.runOnContext;
                        SRTlib.send("]},");

            return useVertxTimer();
          } catch (e) {
                        SRTlib.send("]},");

            return useSetTimeout();
          }
                    SRTlib.send("]},");

        }
        var scheduleFlush = void 0;
        if (isNode) {
          scheduleFlush = useNextTick();
        } else if (BrowserMutationObserver) {
          scheduleFlush = useMutationObserver();
        } else if (isWorker) {
          scheduleFlush = useMessageChannel();
        } else if (browserWindow === undefined && typeof require === 'function') {
          scheduleFlush = attemptVertx();
        } else {
          scheduleFlush = useSetTimeout();
        }
        function then(onFulfillment, onRejection) {
                    SRTlib.send(`{ "anonymous": false, "function": "then", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          var parent = this;
          var child = new this.constructor(noop);
          if (child[PROMISE_ID] === undefined) {
            makePromise(child);
          }
          var _state = parent._state;
          if (_state) {
            var callback = arguments[_state - 1];
            asap(function () {
                            SRTlib.send(`{ "anonymous": true, "function": "asap", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return invokeCallback(_state, child, callback, parent._result);
                            SRTlib.send("]},");

            });
          } else {
            subscribe(parent, child, onFulfillment, onRejection);
          }
                    SRTlib.send("]},");

          return child;
                    SRTlib.send("]},");

        }
        function resolve$1(object) {
                    SRTlib.send(`{ "anonymous": false, "function": "resolve$1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var Constructor = this;
          if (object && typeof object === 'object' && object.constructor === Constructor) {
                        SRTlib.send("]},");

            return object;
          }
          var promise = new Constructor(noop);
          resolve(promise, object);
                    SRTlib.send("]},");

          return promise;
                    SRTlib.send("]},");

        }
        var PROMISE_ID = Math.random().toString(36).substring(2);
        function noop() {
                    SRTlib.send(`{ "anonymous": false, "function": "noop", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

        }
        var PENDING = void 0;
        var FULFILLED = 1;
        var REJECTED = 2;
        function selfFulfillment() {
                    SRTlib.send(`{ "anonymous": false, "function": "selfFulfillment", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

          return new TypeError("You cannot resolve a promise with itself");
                    SRTlib.send("]},");

        }
        function cannotReturnOwn() {
                    SRTlib.send(`{ "anonymous": false, "function": "cannotReturnOwn", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

          return new TypeError('A promises callback cannot return that same promise.');
                    SRTlib.send("]},");

        }
        function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
                    SRTlib.send(`{ "anonymous": false, "function": "tryThen", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

          try {
            then$$1.call(value, fulfillmentHandler, rejectionHandler);
          } catch (e) {
                        SRTlib.send("]},");

            return e;
          }
                    SRTlib.send("]},");

        }
        function handleForeignThenable(promise, thenable, then$$1) {
                    SRTlib.send(`{ "anonymous": false, "function": "handleForeignThenable", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          asap(function (promise) {
                        SRTlib.send(`{ "anonymous": true, "function": "asap2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            var sealed = false;
            var error = tryThen(then$$1, thenable, function (value) {
                            SRTlib.send(`{ "anonymous": true, "function": "asap.error.tryThen", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              if (sealed) {
                                SRTlib.send("]},");

                return;
              }
              sealed = true;
              if (thenable !== value) {
                resolve(promise, value);
              } else {
                fulfill(promise, value);
              }
                            SRTlib.send("]},");

            }, function (reason) {
                            SRTlib.send(`{ "anonymous": true, "function": "asap.error.tryThen2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              if (sealed) {
                                SRTlib.send("]},");

                return;
              }
              sealed = true;
              reject(promise, reason);
                            SRTlib.send("]},");

            }, 'Settle: ' + (promise._label || ' unknown promise'));
            if (!sealed && error) {
              sealed = true;
              reject(promise, error);
            }
                        SRTlib.send("]},");

          }, promise);
                    SRTlib.send("]},");

        }
        function handleOwnThenable(promise, thenable) {
                    SRTlib.send(`{ "anonymous": false, "function": "handleOwnThenable", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (thenable._state === FULFILLED) {
            fulfill(promise, thenable._result);
          } else if (thenable._state === REJECTED) {
            reject(promise, thenable._result);
          } else {
            subscribe(thenable, undefined, function (value) {
                            SRTlib.send(`{ "anonymous": true, "function": "subscribe", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send("]},");

              return resolve(promise, value);
                            SRTlib.send("]},");

            }, function (reason) {
                            SRTlib.send(`{ "anonymous": true, "function": "subscribe2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send("]},");

              return reject(promise, reason);
                            SRTlib.send("]},");

            });
          }
                    SRTlib.send("]},");

        }
        function handleMaybeThenable(promise, maybeThenable, then$$1) {
                    SRTlib.send(`{ "anonymous": false, "function": "handleMaybeThenable", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
            handleOwnThenable(promise, maybeThenable);
          } else {
            if (then$$1 === undefined) {
              fulfill(promise, maybeThenable);
            } else if (isFunction(then$$1)) {
              handleForeignThenable(promise, maybeThenable, then$$1);
            } else {
              fulfill(promise, maybeThenable);
            }
          }
                    SRTlib.send("]},");

        }
        function resolve(promise, value) {
                    SRTlib.send(`{ "anonymous": false, "function": "resolve", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (promise === value) {
            reject(promise, selfFulfillment());
          } else if (objectOrFunction(value)) {
            var then$$1 = void 0;
            try {
              then$$1 = value.then;
            } catch (error) {
              reject(promise, error);
                            SRTlib.send("]},");

              return;
            }
            handleMaybeThenable(promise, value, then$$1);
          } else {
            fulfill(promise, value);
          }
                    SRTlib.send("]},");

        }
        function publishRejection(promise) {
                    SRTlib.send(`{ "anonymous": false, "function": "publishRejection", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (promise._onerror) {
            promise._onerror(promise._result);
          }
          publish(promise);
                    SRTlib.send("]},");

        }
        function fulfill(promise, value) {
                    SRTlib.send(`{ "anonymous": false, "function": "fulfill", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (promise._state !== PENDING) {
                        SRTlib.send("]},");

            return;
          }
          promise._result = value;
          promise._state = FULFILLED;
          if (promise._subscribers.length !== 0) {
            asap(publish, promise);
          }
                    SRTlib.send("]},");

        }
        function reject(promise, reason) {
                    SRTlib.send(`{ "anonymous": false, "function": "reject", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (promise._state !== PENDING) {
                        SRTlib.send("]},");

            return;
          }
          promise._state = REJECTED;
          promise._result = reason;
          asap(publishRejection, promise);
                    SRTlib.send("]},");

        }
        function subscribe(parent, child, onFulfillment, onRejection) {
                    SRTlib.send(`{ "anonymous": false, "function": "subscribe", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

          var _subscribers = parent._subscribers;
          var length = _subscribers.length;
          parent._onerror = null;
          _subscribers[length] = child;
          _subscribers[length + FULFILLED] = onFulfillment;
          _subscribers[length + REJECTED] = onRejection;
          if (length === 0 && parent._state) {
            asap(publish, parent);
          }
                    SRTlib.send("]},");

        }
        function publish(promise) {
                    SRTlib.send(`{ "anonymous": false, "function": "publish", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var subscribers = promise._subscribers;
          var settled = promise._state;
          if (subscribers.length === 0) {
                        SRTlib.send("]},");

            return;
          }
          var child = void 0, callback = void 0, detail = promise._result;
          for (var i = 0; i < subscribers.length; i += 3) {
            child = subscribers[i];
            callback = subscribers[i + settled];
            if (child) {
              invokeCallback(settled, child, callback, detail);
            } else {
              callback(detail);
            }
          }
          promise._subscribers.length = 0;
                    SRTlib.send("]},");

        }
        function invokeCallback(settled, promise, callback, detail) {
                    SRTlib.send(`{ "anonymous": false, "function": "invokeCallback", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

          var hasCallback = isFunction(callback), value = void 0, error = void 0, succeeded = true;
          if (hasCallback) {
            try {
              value = callback(detail);
            } catch (e) {
              succeeded = false;
              error = e;
            }
            if (promise === value) {
              reject(promise, cannotReturnOwn());
                            SRTlib.send("]},");

              return;
            }
          } else {
            value = detail;
          }
          if (promise._state !== PENDING) {} else if (hasCallback && succeeded) {
            resolve(promise, value);
          } else if (succeeded === false) {
            reject(promise, error);
          } else if (settled === FULFILLED) {
            fulfill(promise, value);
          } else if (settled === REJECTED) {
            reject(promise, value);
          }
                    SRTlib.send("]},");

        }
        function initializePromise(promise, resolver) {
                    SRTlib.send(`{ "anonymous": false, "function": "initializePromise", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          try {
            resolver(function resolvePromise(value) {
                            SRTlib.send(`{ "anonymous": true, "function": "resolver.resolvePromise", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              resolve(promise, value);
                            SRTlib.send("]},");

            }, function rejectPromise(reason) {
                            SRTlib.send(`{ "anonymous": true, "function": "resolver.rejectPromise", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              reject(promise, reason);
                            SRTlib.send("]},");

            });
          } catch (e) {
            reject(promise, e);
          }
                    SRTlib.send("]},");

        }
        var id = 0;
        function nextId() {
                    SRTlib.send(`{ "anonymous": false, "function": "nextId", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

          return id++;
                    SRTlib.send("]},");

        }
        function makePromise(promise) {
                    SRTlib.send(`{ "anonymous": false, "function": "makePromise", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          promise[PROMISE_ID] = id++;
          promise._state = undefined;
          promise._result = undefined;
          promise._subscribers = [];
                    SRTlib.send("]},");

        }
        function validationError() {
                    SRTlib.send(`{ "anonymous": false, "function": "validationError", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

          return new Error('Array Methods must be provided an Array');
                    SRTlib.send("]},");

        }
        var Enumerator = (function () {
                    SRTlib.send(`{ "anonymous": true, "function": "call.Enumerator", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          function Enumerator(Constructor, input) {
                        SRTlib.send(`{ "anonymous": false, "function": "Enumerator", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            this._instanceConstructor = Constructor;
            this.promise = new Constructor(noop);
            if (!this.promise[PROMISE_ID]) {
              makePromise(this.promise);
            }
            if (isArray(input)) {
              this.length = input.length;
              this._remaining = input.length;
              this._result = new Array(this.length);
              if (this.length === 0) {
                fulfill(this.promise, this._result);
              } else {
                this.length = this.length || 0;
                this._enumerate(input);
                if (this._remaining === 0) {
                  fulfill(this.promise, this._result);
                }
              }
            } else {
              reject(this.promise, validationError());
            }
                        SRTlib.send("]},");

          }
          Enumerator.prototype._enumerate = function _enumerate(input) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.Enumerator.Enumerator.prototype._enumerate._enumerate", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            for (var i = 0; this._state === PENDING && i < input.length; i++) {
              this._eachEntry(input[i], i);
            }
                        SRTlib.send("]},");

          };
          Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.Enumerator.Enumerator.prototype._eachEntry._eachEntry", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            var c = this._instanceConstructor;
            var resolve$$1 = c.resolve;
            if (resolve$$1 === resolve$1) {
              var _then = void 0;
              var error = void 0;
              var didError = false;
              try {
                _then = entry.then;
              } catch (e) {
                didError = true;
                error = e;
              }
              if (_then === then && entry._state !== PENDING) {
                this._settledAt(entry._state, i, entry._result);
              } else if (typeof _then !== 'function') {
                this._remaining--;
                this._result[i] = entry;
              } else if (c === Promise$1) {
                var promise = new c(noop);
                if (didError) {
                  reject(promise, error);
                } else {
                  handleMaybeThenable(promise, entry, _then);
                }
                this._willSettleAt(promise, i);
              } else {
                this._willSettleAt(new c(function (resolve$$1) {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.Enumerator.Enumerator.prototype._eachEntry._eachEntry._willSettleAt", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                    SRTlib.send("]},");

                  return resolve$$1(entry);
                                    SRTlib.send("]},");

                }), i);
              }
            } else {
              this._willSettleAt(resolve$$1(entry), i);
            }
                        SRTlib.send("]},");

          };
          Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.Enumerator.Enumerator.prototype._settledAt._settledAt", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

            var promise = this.promise;
            if (promise._state === PENDING) {
              this._remaining--;
              if (state === REJECTED) {
                reject(promise, value);
              } else {
                this._result[i] = value;
              }
            }
            if (this._remaining === 0) {
              fulfill(promise, this._result);
            }
                        SRTlib.send("]},");

          };
          Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.Enumerator.Enumerator.prototype._willSettleAt._willSettleAt", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            var enumerator = this;
            subscribe(promise, undefined, function (value) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Enumerator.Enumerator.prototype._willSettleAt._willSettleAt.subscribe", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send("]},");

              return enumerator._settledAt(FULFILLED, i, value);
                            SRTlib.send("]},");

            }, function (reason) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Enumerator.Enumerator.prototype._willSettleAt._willSettleAt.subscribe2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send("]},");

              return enumerator._settledAt(REJECTED, i, reason);
                            SRTlib.send("]},");

            });
                        SRTlib.send("]},");

          };
                    SRTlib.send("]},");

          return Enumerator;
                    SRTlib.send("]},");

        })();
        function all(entries) {
                    SRTlib.send(`{ "anonymous": false, "function": "all", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return new Enumerator(this, entries).promise;
                    SRTlib.send("]},");

        }
        function race(entries) {
                    SRTlib.send(`{ "anonymous": false, "function": "race", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var Constructor = this;
          if (!isArray(entries)) {
                        SRTlib.send("]},");

            return new Constructor(function (_, reject) {
                            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                            SRTlib.send("]},");

              return reject(new TypeError('You must pass an array to race.'));
                            SRTlib.send("]},");

            });
          } else {
                        SRTlib.send("]},");

            return new Constructor(function (resolve, reject) {
                            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement7", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              var length = entries.length;
              for (var i = 0; i < length; i++) {
                Constructor.resolve(entries[i]).then(resolve, reject);
              }
                            SRTlib.send("]},");

            });
          }
                    SRTlib.send("]},");

        }
        function reject$1(reason) {
                    SRTlib.send(`{ "anonymous": false, "function": "reject$1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var Constructor = this;
          var promise = new Constructor(noop);
          reject(promise, reason);
                    SRTlib.send("]},");

          return promise;
                    SRTlib.send("]},");

        }
        function needsResolver() {
                    SRTlib.send(`{ "anonymous": false, "function": "needsResolver", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

        }
        function needsNew() {
                    SRTlib.send(`{ "anonymous": false, "function": "needsNew", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

        }
        var Promise$1 = (function () {
                    SRTlib.send(`{ "anonymous": true, "function": "call.Promise$1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          function Promise(resolver) {
                        SRTlib.send(`{ "anonymous": false, "function": "Promise", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            this[PROMISE_ID] = nextId();
            this._result = this._state = undefined;
            this._subscribers = [];
            if (noop !== resolver) {
              typeof resolver !== 'function' && needsResolver();
              this instanceof Promise ? initializePromise(this, resolver) : needsNew();
            }
                        SRTlib.send("]},");

          }
          Promise.prototype.catch = function _catch(onRejection) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.Promise$1.Promise.prototype.catch._catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return this.then(null, onRejection);
                        SRTlib.send("]},");

          };
          Promise.prototype.finally = function _finally(callback) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.Promise$1.Promise.prototype.finally._finally", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            var promise = this;
            var constructor = promise.constructor;
            if (isFunction(callback)) {
                            SRTlib.send("]},");

              return promise.then(function (value) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.Promise$1.Promise.prototype.finally._finally.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                SRTlib.send("]},");

                return constructor.resolve(callback()).then(function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.ReturnStatement.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                    SRTlib.send("]},");

                  return value;
                                    SRTlib.send("]},");

                });
                                SRTlib.send("]},");

              }, function (reason) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.Promise$1.Promise.prototype.finally._finally.ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                SRTlib.send("]},");

                return constructor.resolve(callback()).then(function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.ReturnStatement.then2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  throw reason;
                                    SRTlib.send("]},");

                                    SRTlib.send("]},");

                });
                                SRTlib.send("]},");

              });
            }
                        SRTlib.send("]},");

            return promise.then(callback, callback);
                        SRTlib.send("]},");

          };
                    SRTlib.send("]},");

          return Promise;
                    SRTlib.send("]},");

        })();
        Promise$1.prototype.then = then;
        Promise$1.all = all;
        Promise$1.race = race;
        Promise$1.resolve = resolve$1;
        Promise$1.reject = reject$1;
        Promise$1._setScheduler = setScheduler;
        Promise$1._setAsap = setAsap;
        Promise$1._asap = asap;
        function polyfill() {
                    SRTlib.send(`{ "anonymous": false, "function": "polyfill", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var local = void 0;
          if (typeof global !== 'undefined') {
            local = global;
          } else if (typeof self !== 'undefined') {
            local = self;
          } else {
            try {
              local = Function('return this')();
            } catch (e) {
                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

              throw new Error('polyfill failed because global object is unavailable in this environment');
            }
          }
          var P = local.Promise;
          if (P) {
            var promiseToString = null;
            try {
              promiseToString = Object.prototype.toString.call(P.resolve());
            } catch (e) {}
            if (promiseToString === '[object Promise]' && !P.cast) {
                            SRTlib.send("]},");

              return;
            }
          }
          local.Promise = Promise$1;
                    SRTlib.send("]},");

        }
        Promise$1.polyfill = polyfill;
        Promise$1.Promise = Promise$1;
                SRTlib.send("]},");

        return Promise$1;
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        SRTlib.send("]},");

  }, {
    "_process": 15
  }],
  9: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    exports.read = function (buffer, offset, isLE, mLen, nBytes) {
            SRTlib.send(`{ "anonymous": true, "function": "exports.read", "fileName": "${__filename}", "paramsNumber": 5, "calls" : [`);

      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; (e = e * 256 + buffer[offset + i], i += d, nBits -= 8)) {}
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; (m = m * 256 + buffer[offset + i], i += d, nBits -= 8)) {}
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
                SRTlib.send("]},");

        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
            SRTlib.send("]},");

      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
            SRTlib.send("]},");

    };
    exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
            SRTlib.send(`{ "anonymous": true, "function": "exports.write", "fileName": "${__filename}", "paramsNumber": 6, "calls" : [`);

      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; (buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8)) {}
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; (buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8)) {}
      buffer[offset + i - d] |= s * 128;
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }, {}],
  10: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    (function (global) {
            SRTlib.send(`{ "anonymous": true, "function": "call5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var FUNC_ERROR_TEXT = 'Expected a function';
      var NAN = 0 / 0;
      var symbolTag = '[object Symbol]';
      var reTrim = /^\s+|\s+$/g;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
      var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function('return this')();
      var objectProto = Object.prototype;
      var objectToString = objectProto.toString;
      var nativeMax = Math.max, nativeMin = Math.min;
      var now = function () {
                SRTlib.send(`{ "anonymous": false, "function": "now", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

        return root.Date.now();
                SRTlib.send("]},");

      };
      function debounce(func, wait, options) {
                SRTlib.send(`{ "anonymous": false, "function": "debounce", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != 'function') {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = ('maxWait' in options);
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = ('trailing' in options) ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
                    SRTlib.send(`{ "anonymous": false, "function": "invokeFunc", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = undefined;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
                    SRTlib.send("]},");

          return result;
                    SRTlib.send("]},");

        }
        function leadingEdge(time) {
                    SRTlib.send(`{ "anonymous": false, "function": "leadingEdge", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
                    SRTlib.send("]},");

          return leading ? invokeFunc(time) : result;
                    SRTlib.send("]},");

        }
        function remainingWait(time) {
                    SRTlib.send(`{ "anonymous": false, "function": "remainingWait", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
                    SRTlib.send("]},");

          return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
                    SRTlib.send("]},");

        }
        function shouldInvoke(time) {
                    SRTlib.send(`{ "anonymous": false, "function": "shouldInvoke", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
                    SRTlib.send("]},");

          return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
                    SRTlib.send("]},");

        }
        function timerExpired() {
                    SRTlib.send(`{ "anonymous": false, "function": "timerExpired", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var time = now();
          if (shouldInvoke(time)) {
                        SRTlib.send("]},");

            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
                    SRTlib.send("]},");

        }
        function trailingEdge(time) {
                    SRTlib.send(`{ "anonymous": false, "function": "trailingEdge", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          timerId = undefined;
          if (trailing && lastArgs) {
                        SRTlib.send("]},");

            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined;
                    SRTlib.send("]},");

          return result;
                    SRTlib.send("]},");

        }
        function cancel() {
                    SRTlib.send(`{ "anonymous": false, "function": "cancel", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          if (timerId !== undefined) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined;
                    SRTlib.send("]},");

        }
        function flush() {
                    SRTlib.send(`{ "anonymous": false, "function": "flush", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

          return timerId === undefined ? result : trailingEdge(now());
                    SRTlib.send("]},");

        }
        function debounced() {
                    SRTlib.send(`{ "anonymous": false, "function": "debounced", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === undefined) {
                            SRTlib.send("]},");

              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              timerId = setTimeout(timerExpired, wait);
                            SRTlib.send("]},");

              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
          }
                    SRTlib.send("]},");

          return result;
                    SRTlib.send("]},");

        }
        debounced.cancel = cancel;
        debounced.flush = flush;
                SRTlib.send("]},");

        return debounced;
                SRTlib.send("]},");

      }
      function throttle(func, wait, options) {
                SRTlib.send(`{ "anonymous": false, "function": "throttle", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var leading = true, trailing = true;
        if (typeof func != 'function') {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = ('leading' in options) ? !!options.leading : leading;
          trailing = ('trailing' in options) ? !!options.trailing : trailing;
        }
                SRTlib.send("]},");

        return debounce(func, wait, {
          'leading': leading,
          'maxWait': wait,
          'trailing': trailing
        });
                SRTlib.send("]},");

      }
      function isObject(value) {
                SRTlib.send(`{ "anonymous": false, "function": "isObject", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var type = typeof value;
                SRTlib.send("]},");

        return !!value && (type == 'object' || type == 'function');
                SRTlib.send("]},");

      }
      function isObjectLike(value) {
                SRTlib.send(`{ "anonymous": false, "function": "isObjectLike", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return !!value && typeof value == 'object';
                SRTlib.send("]},");

      }
      function isSymbol(value) {
                SRTlib.send(`{ "anonymous": false, "function": "isSymbol", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
                SRTlib.send("]},");

      }
      function toNumber(value) {
                SRTlib.send(`{ "anonymous": false, "function": "toNumber", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (typeof value == 'number') {
                    SRTlib.send("]},");

          return value;
        }
        if (isSymbol(value)) {
                    SRTlib.send("]},");

          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
          value = isObject(other) ? other + '' : other;
        }
        if (typeof value != 'string') {
                    SRTlib.send("]},");

          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, '');
        var isBinary = reIsBinary.test(value);
                SRTlib.send("]},");

        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
                SRTlib.send("]},");

      }
      module.exports = throttle;
            SRTlib.send("]},");

    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        SRTlib.send("]},");

  }, {}],
  11: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    'use strict';
    module.exports = Math.log2 || (function (x) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return Math.log(x) * Math.LOG2E;
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }, {}],
  12: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var wildcard = require('wildcard');
    var reMimePartSplit = /[\/\+\.]/;
    module.exports = function (target, pattern) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      function test(pattern) {
                SRTlib.send(`{ "anonymous": false, "function": "test", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var result = wildcard(pattern, target, reMimePartSplit);
                SRTlib.send("]},");

        return result && result.length >= 2;
                SRTlib.send("]},");

      }
            SRTlib.send("]},");

      return pattern ? test(pattern.split(';')[0]) : test;
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }, {
    "wildcard": 17
  }],
  13: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey14", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function createNamespaceEmitter() {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.createNamespaceEmitter", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var emitter = {};
      var _fns = emitter._fns = {};
      emitter.emit = function emit(event, arg1, arg2, arg3, arg4, arg5, arg6) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.createNamespaceEmitter.emitter.emit.emit", "fileName": "${__filename}", "paramsNumber": 7, "calls" : [`);

        var toEmit = getListeners(event);
        if (toEmit.length) {
          emitAll(event, toEmit, [arg1, arg2, arg3, arg4, arg5, arg6]);
        }
                SRTlib.send("]},");

      };
      emitter.on = function on(event, fn) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.createNamespaceEmitter.emitter.on.on", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        if (!_fns[event]) {
          _fns[event] = [];
        }
        _fns[event].push(fn);
                SRTlib.send("]},");

      };
      emitter.once = function once(event, fn) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.createNamespaceEmitter.emitter.once.once", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        function one() {
                    SRTlib.send(`{ "anonymous": false, "function": "one", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          fn.apply(this, arguments);
          emitter.off(event, one);
                    SRTlib.send("]},");

        }
        this.on(event, one);
                SRTlib.send("]},");

      };
      emitter.off = function off(event, fn) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.createNamespaceEmitter.emitter.off.off", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var keep = [];
        if (event && fn) {
          var fns = this._fns[event];
          var i = 0;
          var l = fns ? fns.length : 0;
          for (i; i < l; i++) {
            if (fns[i] !== fn) {
              keep.push(fns[i]);
            }
          }
        }
        keep.length ? this._fns[event] = keep : delete this._fns[event];
                SRTlib.send("]},");

      };
      function getListeners(e) {
                SRTlib.send(`{ "anonymous": false, "function": "getListeners", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var out = _fns[e] ? _fns[e] : [];
        var idx = e.indexOf(':');
        var args = idx === -1 ? [e] : [e.substring(0, idx), e.substring(idx + 1)];
        var keys = Object.keys(_fns);
        var i = 0;
        var l = keys.length;
        for (i; i < l; i++) {
          var key = keys[i];
          if (key === '*') {
            out = out.concat(_fns[key]);
          }
          if (args.length === 2 && args[0] === key) {
            out = out.concat(_fns[key]);
            break;
          }
        }
                SRTlib.send("]},");

        return out;
                SRTlib.send("]},");

      }
      function emitAll(e, fns, args) {
                SRTlib.send(`{ "anonymous": false, "function": "emitAll", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var i = 0;
        var l = fns.length;
        for (i; i < l; i++) {
          if (!fns[i]) break;
          fns[i].event = e;
          fns[i].apply(fns[i], args);
        }
                SRTlib.send("]},");

      }
            SRTlib.send("]},");

      return emitter;
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }, {}],
  14: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey16", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    !(function () {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey15", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      'use strict';
      function VNode() {
                SRTlib.send(`{ "anonymous": false, "function": "VNode", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

      }
      function h(nodeName, attributes) {
                SRTlib.send(`{ "anonymous": false, "function": "h", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var lastSimple, child, simple, i, children = EMPTY_CHILDREN;
        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
        if (attributes && null != attributes.children) {
          if (!stack.length) stack.push(attributes.children);
          delete attributes.children;
        }
        while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--; ) stack.push(child[i]); else {
          if ('boolean' == typeof child) child = null;
          if (simple = 'function' != typeof nodeName) if (null == child) child = ''; else if ('number' == typeof child) child = String(child); else if ('string' != typeof child) simple = !1;
          if (simple && lastSimple) children[children.length - 1] += child; else if (children === EMPTY_CHILDREN) children = [child]; else children.push(child);
          lastSimple = simple;
        }
        var p = new VNode();
        p.nodeName = nodeName;
        p.children = children;
        p.attributes = null == attributes ? void 0 : attributes;
        p.key = null == attributes ? void 0 : attributes.key;
        if (void 0 !== options.vnode) options.vnode(p);
                SRTlib.send("]},");

        return p;
                SRTlib.send("]},");

      }
      function extend(obj, props) {
                SRTlib.send(`{ "anonymous": false, "function": "extend", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        for (var i in props) obj[i] = props[i];
                SRTlib.send("]},");

        return obj;
                SRTlib.send("]},");

      }
      function cloneElement(vnode, props) {
                SRTlib.send(`{ "anonymous": false, "function": "cloneElement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                SRTlib.send("]},");

        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
                SRTlib.send("]},");

      }
      function enqueueRender(component) {
                SRTlib.send(`{ "anonymous": false, "function": "enqueueRender", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
                SRTlib.send("]},");

      }
      function rerender() {
                SRTlib.send(`{ "anonymous": false, "function": "rerender", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var p, list = items;
        items = [];
        while (p = list.pop()) if (p.__d) renderComponent(p);
                SRTlib.send("]},");

      }
      function isSameNodeType(node, vnode, hydrating) {
                SRTlib.send(`{ "anonymous": false, "function": "isSameNodeType", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        if ('string' == typeof vnode || 'number' == typeof vnode) {
                    SRTlib.send("]},");

          return void 0 !== node.splitText;
        }
        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else {
                    SRTlib.send("]},");

          return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
        }
                SRTlib.send("]},");

      }
      function isNamedNode(node, nodeName) {
                SRTlib.send(`{ "anonymous": false, "function": "isNamedNode", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                SRTlib.send("]},");

        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
                SRTlib.send("]},");

      }
      function getNodeProps(vnode) {
                SRTlib.send(`{ "anonymous": false, "function": "getNodeProps", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var props = extend({}, vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
                SRTlib.send("]},");

        return props;
                SRTlib.send("]},");

      }
      function createNode(nodeName, isSvg) {
                SRTlib.send(`{ "anonymous": false, "function": "createNode", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
        node.__n = nodeName;
                SRTlib.send("]},");

        return node;
                SRTlib.send("]},");

      }
      function removeNode(node) {
                SRTlib.send(`{ "anonymous": false, "function": "removeNode", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var parentNode = node.parentNode;
        if (parentNode) parentNode.removeChild(node);
                SRTlib.send("]},");

      }
      function setAccessor(node, name, old, value, isSvg) {
                SRTlib.send(`{ "anonymous": false, "function": "setAccessor", "fileName": "${__filename}", "paramsNumber": 5, "calls" : [`);

        if ('className' === name) name = 'class';
        if ('key' === name) ; else if ('ref' === name) {
          if (old) old(null);
          if (value) value(node);
        } else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
          if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
          if (value && 'object' == typeof value) {
            if ('string' != typeof old) for (var i in old) if (!((i in value))) node.style[i] = '';
            for (var i in value) node.style[i] = 'number' == typeof value[i] && !1 === IS_NON_DIMENSIONAL.test(i) ? value[i] + 'px' : value[i];
          }
        } else if ('dangerouslySetInnerHTML' === name) {
          if (value) node.innerHTML = value.__html || '';
        } else if ('o' == name[0] && 'n' == name[1]) {
          var useCapture = name !== (name = name.replace(/Capture$/, ''));
          name = name.toLowerCase().substring(2);
          if (value) {
            if (!old) node.addEventListener(name, eventProxy, useCapture);
          } else node.removeEventListener(name, eventProxy, useCapture);
          (node.__l || (node.__l = {}))[name] = value;
        } else if ('list' !== name && 'type' !== name && !isSvg && (name in node)) {
          setProperty(node, name, null == value ? '' : value);
          if (null == value || !1 === value) node.removeAttribute(name);
        } else {
          var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
          if (null == value || !1 === value) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.removeAttribute(name); else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.setAttribute(name, value);
        }
                SRTlib.send("]},");

      }
      function setProperty(node, name, value) {
                SRTlib.send(`{ "anonymous": false, "function": "setProperty", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        try {
          node[name] = value;
        } catch (e) {}
                SRTlib.send("]},");

      }
      function eventProxy(e) {
                SRTlib.send(`{ "anonymous": false, "function": "eventProxy", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return this.__l[e.type](options.event && options.event(e) || e);
                SRTlib.send("]},");

      }
      function flushMounts() {
                SRTlib.send(`{ "anonymous": false, "function": "flushMounts", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var c;
        while (c = mounts.pop()) {
          if (options.afterMount) options.afterMount(c);
          if (c.componentDidMount) c.componentDidMount();
        }
                SRTlib.send("]},");

      }
      function diff(dom, vnode, context, mountAll, parent, componentRoot) {
                SRTlib.send(`{ "anonymous": false, "function": "diff", "fileName": "${__filename}", "paramsNumber": 6, "calls" : [`);

        if (!diffLevel++) {
          isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
          hydrating = null != dom && !(('__preactattr_' in dom));
        }
        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (!--diffLevel) {
          hydrating = !1;
          if (!componentRoot) flushMounts();
        }
                SRTlib.send("]},");

        return ret;
                SRTlib.send("]},");

      }
      function idiff(dom, vnode, context, mountAll, componentRoot) {
                SRTlib.send(`{ "anonymous": false, "function": "idiff", "fileName": "${__filename}", "paramsNumber": 5, "calls" : [`);

        var out = dom, prevSvgMode = isSvgMode;
        if (null == vnode || 'boolean' == typeof vnode) vnode = '';
        if ('string' == typeof vnode || 'number' == typeof vnode) {
          if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || componentRoot)) {
            if (dom.nodeValue != vnode) dom.nodeValue = vnode;
          } else {
            out = document.createTextNode(vnode);
            if (dom) {
              if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
              recollectNodeTree(dom, !0);
            }
          }
          out.__preactattr_ = !0;
                    SRTlib.send("]},");

          return out;
        }
        var vnodeName = vnode.nodeName;
        if ('function' == typeof vnodeName) {
                    SRTlib.send("]},");

          return buildComponentFromVNode(dom, vnode, context, mountAll);
        }
        isSvgMode = 'svg' === vnodeName ? !0 : 'foreignObject' === vnodeName ? !1 : isSvgMode;
        vnodeName = String(vnodeName);
        if (!dom || !isNamedNode(dom, vnodeName)) {
          out = createNode(vnodeName, isSvgMode);
          if (dom) {
            while (dom.firstChild) out.appendChild(dom.firstChild);
            if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
            recollectNodeTree(dom, !0);
          }
        }
        var fc = out.firstChild, props = out.__preactattr_, vchildren = vnode.children;
        if (null == props) {
          props = out.__preactattr_ = {};
          for (var a = out.attributes, i = a.length; i--; ) props[a[i].name] = a[i].value;
        }
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
          if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);
        diffAttributes(out, vnode.attributes, props);
        isSvgMode = prevSvgMode;
                SRTlib.send("]},");

        return out;
                SRTlib.send("]},");

      }
      function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
                SRTlib.send(`{ "anonymous": false, "function": "innerDiffNode", "fileName": "${__filename}", "paramsNumber": 5, "calls" : [`);

        var j, c, f, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;
        if (0 !== len) for (var i = 0; i < len; i++) {
          var _child = originalChildren[i], props = _child.__preactattr_, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
          if (null != key) {
            keyedLen++;
            keyed[key] = _child;
          } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;
        }
        if (0 !== vlen) for (var i = 0; i < vlen; i++) {
          vchild = vchildren[i];
          child = null;
          var key = vchild.key;
          if (null != key) {
            if (keyedLen && void 0 !== keyed[key]) {
              child = keyed[key];
              keyed[key] = void 0;
              keyedLen--;
            }
          } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
            child = c;
            children[j] = void 0;
            if (j === childrenLen - 1) childrenLen--;
            if (j === min) min++;
            break;
          }
          child = idiff(child, vchild, context, mountAll);
          f = originalChildren[i];
          if (child && child !== dom && child !== f) if (null == f) dom.appendChild(child); else if (child === f.nextSibling) removeNode(f); else dom.insertBefore(child, f);
        }
        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
                SRTlib.send("]},");

      }
      function recollectNodeTree(node, unmountOnly) {
                SRTlib.send(`{ "anonymous": false, "function": "recollectNodeTree", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var component = node._component;
        if (component) unmountComponent(component); else {
          if (null != node.__preactattr_ && node.__preactattr_.ref) node.__preactattr_.ref(null);
          if (!1 === unmountOnly || null == node.__preactattr_) removeNode(node);
          removeChildren(node);
        }
                SRTlib.send("]},");

      }
      function removeChildren(node) {
                SRTlib.send(`{ "anonymous": false, "function": "removeChildren", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        node = node.lastChild;
        while (node) {
          var next = node.previousSibling;
          recollectNodeTree(node, !0);
          node = next;
        }
                SRTlib.send("]},");

      }
      function diffAttributes(dom, attrs, old) {
                SRTlib.send(`{ "anonymous": false, "function": "diffAttributes", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var name;
        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        for (name in attrs) if (!('children' === name || 'innerHTML' === name || (name in old) && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
                SRTlib.send("]},");

      }
      function collectComponent(component) {
                SRTlib.send(`{ "anonymous": false, "function": "collectComponent", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var name = component.constructor.name;
        (components[name] || (components[name] = [])).push(component);
                SRTlib.send("]},");

      }
      function createComponent(Ctor, props, context) {
                SRTlib.send(`{ "anonymous": false, "function": "createComponent", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var inst, list = components[Ctor.name];
        if (Ctor.prototype && Ctor.prototype.render) {
          inst = new Ctor(props, context);
          Component.call(inst, props, context);
        } else {
          inst = new Component(props, context);
          inst.constructor = Ctor;
          inst.render = doRender;
        }
        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
          inst.__b = list[i].__b;
          list.splice(i, 1);
          break;
        }
                SRTlib.send("]},");

        return inst;
                SRTlib.send("]},");

      }
      function doRender(props, state, context) {
                SRTlib.send(`{ "anonymous": false, "function": "doRender", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                SRTlib.send("]},");

        return this.constructor(props, context);
                SRTlib.send("]},");

      }
      function setComponentProps(component, props, opts, context, mountAll) {
                SRTlib.send(`{ "anonymous": false, "function": "setComponentProps", "fileName": "${__filename}", "paramsNumber": 5, "calls" : [`);

        if (!component.__x) {
          component.__x = !0;
          if (component.__r = props.ref) delete props.ref;
          if (component.__k = props.key) delete props.key;
          if (!component.base || mountAll) {
            if (component.componentWillMount) component.componentWillMount();
          } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
          if (context && context !== component.context) {
            if (!component.__c) component.__c = component.context;
            component.context = context;
          }
          if (!component.__p) component.__p = component.props;
          component.props = props;
          component.__x = !1;
          if (0 !== opts) if (1 === opts || !1 !== options.syncComponentUpdates || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
          if (component.__r) component.__r(component);
        }
                SRTlib.send("]},");

      }
      function renderComponent(component, opts, mountAll, isChild) {
                SRTlib.send(`{ "anonymous": false, "function": "renderComponent", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

        if (!component.__x) {
          var rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.__p || props, previousState = component.__s || state, previousContext = component.__c || context, isUpdate = component.base, nextBase = component.__b, initialBase = isUpdate || nextBase, initialChildComponent = component._component, skip = !1;
          if (isUpdate) {
            component.props = previousProps;
            component.state = previousState;
            component.context = previousContext;
            if (2 !== opts && component.shouldComponentUpdate && !1 === component.shouldComponentUpdate(props, state, context)) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
            component.props = props;
            component.state = state;
            component.context = context;
          }
          component.__p = component.__s = component.__c = component.__b = null;
          component.__d = !1;
          if (!skip) {
            rendered = component.render(props, state, context);
            if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());
            var toUnmount, base, childComponent = rendered && rendered.nodeName;
            if ('function' == typeof childComponent) {
              var childProps = getNodeProps(rendered);
              inst = initialChildComponent;
              if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1); else {
                toUnmount = inst;
                component._component = inst = createComponent(childComponent, childProps, context);
                inst.__b = inst.__b || nextBase;
                inst.__u = component;
                setComponentProps(inst, childProps, 0, context, !1);
                renderComponent(inst, 1, mountAll, !0);
              }
              base = inst.base;
            } else {
              cbase = initialBase;
              toUnmount = initialChildComponent;
              if (toUnmount) cbase = component._component = null;
              if (initialBase || 1 === opts) {
                if (cbase) cbase._component = null;
                base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
              }
            }
            if (initialBase && base !== initialBase && inst !== initialChildComponent) {
              var baseParent = initialBase.parentNode;
              if (baseParent && base !== baseParent) {
                baseParent.replaceChild(base, initialBase);
                if (!toUnmount) {
                  initialBase._component = null;
                  recollectNodeTree(initialBase, !1);
                }
              }
            }
            if (toUnmount) unmountComponent(toUnmount);
            component.base = base;
            if (base && !isChild) {
              var componentRef = component, t = component;
              while (t = t.__u) (componentRef = t).base = base;
              base._component = componentRef;
              base._componentConstructor = componentRef.constructor;
            }
          }
          if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
            if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
            if (options.afterUpdate) options.afterUpdate(component);
          }
          if (null != component.__h) while (component.__h.length) component.__h.pop().call(component);
          if (!diffLevel && !isChild) flushMounts();
        }
                SRTlib.send("]},");

      }
      function buildComponentFromVNode(dom, vnode, context, mountAll) {
                SRTlib.send(`{ "anonymous": false, "function": "buildComponentFromVNode", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;
        if (c && isOwner && (!mountAll || c._component)) {
          setComponentProps(c, props, 3, context, mountAll);
          dom = c.base;
        } else {
          if (originalComponent && !isDirectOwner) {
            unmountComponent(originalComponent);
            dom = oldDom = null;
          }
          c = createComponent(vnode.nodeName, props, context);
          if (dom && !c.__b) {
            c.__b = dom;
            oldDom = null;
          }
          setComponentProps(c, props, 1, context, mountAll);
          dom = c.base;
          if (oldDom && dom !== oldDom) {
            oldDom._component = null;
            recollectNodeTree(oldDom, !1);
          }
        }
                SRTlib.send("]},");

        return dom;
                SRTlib.send("]},");

      }
      function unmountComponent(component) {
                SRTlib.send(`{ "anonymous": false, "function": "unmountComponent", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (options.beforeUnmount) options.beforeUnmount(component);
        var base = component.base;
        component.__x = !0;
        if (component.componentWillUnmount) component.componentWillUnmount();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner); else if (base) {
          if (base.__preactattr_ && base.__preactattr_.ref) base.__preactattr_.ref(null);
          component.__b = base;
          removeNode(base);
          collectComponent(component);
          removeChildren(base);
        }
        if (component.__r) component.__r(null);
                SRTlib.send("]},");

      }
      function Component(props, context) {
                SRTlib.send(`{ "anonymous": false, "function": "Component", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        this.__d = !0;
        this.context = context;
        this.props = props;
        this.state = this.state || ({});
                SRTlib.send("]},");

      }
      function render(vnode, parent, merge) {
                SRTlib.send(`{ "anonymous": false, "function": "render", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                SRTlib.send("]},");

        return diff(merge, vnode, {}, !1, parent, !1);
                SRTlib.send("]},");

      }
      var options = {};
      var stack = [];
      var EMPTY_CHILDREN = [];
      var defer = 'function' == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
      var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
      var items = [];
      var mounts = [];
      var diffLevel = 0;
      var isSvgMode = !1;
      var hydrating = !1;
      var components = {};
      extend(Component.prototype, {
        setState: function (state, callback) {
                    SRTlib.send(`{ "anonymous": true, "function": "extend.setState", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          var s = this.state;
          if (!this.__s) this.__s = extend({}, s);
          extend(s, 'function' == typeof state ? state(s, this.props) : state);
          if (callback) (this.__h = this.__h || []).push(callback);
          enqueueRender(this);
                    SRTlib.send("]},");

        },
        forceUpdate: function (callback) {
                    SRTlib.send(`{ "anonymous": true, "function": "extend.forceUpdate", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (callback) (this.__h = this.__h || []).push(callback);
          renderComponent(this, 2);
                    SRTlib.send("]},");

        },
        render: function () {
                    SRTlib.send(`{ "anonymous": true, "function": "extend.render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

        }
      });
      var preact = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options
      };
      if ('undefined' != typeof module) module.exports = preact; else self.preact = preact;
            SRTlib.send("]},");

    })();
        SRTlib.send("]},");

  }, {}],
  15: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey18", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var process = module.exports = {};
    var cachedSetTimeout;
    var cachedClearTimeout;
    function defaultSetTimout() {
            SRTlib.send(`{ "anonymous": false, "function": "defaultSetTimout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      throw new Error('setTimeout has not been defined');
            SRTlib.send("]},");

            SRTlib.send("]},");

            SRTlib.send("]},");

    }
    function defaultClearTimeout() {
            SRTlib.send(`{ "anonymous": false, "function": "defaultClearTimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      throw new Error('clearTimeout has not been defined');
            SRTlib.send("]},");

            SRTlib.send("]},");

            SRTlib.send("]},");

    }
    (function () {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey17", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      try {
        if (typeof setTimeout === 'function') {
          cachedSetTimeout = setTimeout;
        } else {
          cachedSetTimeout = defaultSetTimout;
        }
      } catch (e) {
        cachedSetTimeout = defaultSetTimout;
      }
      try {
        if (typeof clearTimeout === 'function') {
          cachedClearTimeout = clearTimeout;
        } else {
          cachedClearTimeout = defaultClearTimeout;
        }
      } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
      }
            SRTlib.send("]},");

    })();
    function runTimeout(fun) {
            SRTlib.send(`{ "anonymous": false, "function": "runTimeout", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (cachedSetTimeout === setTimeout) {
                SRTlib.send("]},");

        return setTimeout(fun, 0);
      }
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
                SRTlib.send("]},");

        return setTimeout(fun, 0);
      }
      try {
                SRTlib.send("]},");

        return cachedSetTimeout(fun, 0);
      } catch (e) {
        try {
                    SRTlib.send("]},");

          return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
                    SRTlib.send("]},");

          return cachedSetTimeout.call(this, fun, 0);
        }
      }
            SRTlib.send("]},");

    }
    function runClearTimeout(marker) {
            SRTlib.send(`{ "anonymous": false, "function": "runClearTimeout", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (cachedClearTimeout === clearTimeout) {
                SRTlib.send("]},");

        return clearTimeout(marker);
      }
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
                SRTlib.send("]},");

        return clearTimeout(marker);
      }
      try {
                SRTlib.send("]},");

        return cachedClearTimeout(marker);
      } catch (e) {
        try {
                    SRTlib.send("]},");

          return cachedClearTimeout.call(null, marker);
        } catch (e) {
                    SRTlib.send("]},");

          return cachedClearTimeout.call(this, marker);
        }
      }
            SRTlib.send("]},");

    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    function cleanUpNextTick() {
            SRTlib.send(`{ "anonymous": false, "function": "cleanUpNextTick", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (!draining || !currentQueue) {
                SRTlib.send("]},");

        return;
      }
      draining = false;
      if (currentQueue.length) {
        queue = currentQueue.concat(queue);
      } else {
        queueIndex = -1;
      }
      if (queue.length) {
        drainQueue();
      }
            SRTlib.send("]},");

    }
    function drainQueue() {
            SRTlib.send(`{ "anonymous": false, "function": "drainQueue", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (draining) {
                SRTlib.send("]},");

        return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
      var len = queue.length;
      while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
          if (currentQueue) {
            currentQueue[queueIndex].run();
          }
        }
        queueIndex = -1;
        len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
            SRTlib.send("]},");

    }
    process.nextTick = function (fun) {
            SRTlib.send(`{ "anonymous": true, "function": "process.nextTick", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
          args[i - 1] = arguments[i];
        }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
      }
            SRTlib.send("]},");

    };
    function Item(fun, array) {
            SRTlib.send(`{ "anonymous": false, "function": "Item", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      this.fun = fun;
      this.array = array;
            SRTlib.send("]},");

    }
    Item.prototype.run = function () {
            SRTlib.send(`{ "anonymous": true, "function": "Item.prototype.run", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      this.fun.apply(null, this.array);
            SRTlib.send("]},");

    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = '';
    process.versions = {};
    function noop() {
            SRTlib.send(`{ "anonymous": false, "function": "noop", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

    }
    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;
    process.listeners = function (name) {
            SRTlib.send(`{ "anonymous": true, "function": "process.listeners", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return [];
            SRTlib.send("]},");

    };
    process.binding = function (name) {
            SRTlib.send(`{ "anonymous": true, "function": "process.binding", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      throw new Error('process.binding is not supported');
            SRTlib.send("]},");

            SRTlib.send("]},");

            SRTlib.send("]},");

    };
    process.cwd = function () {
            SRTlib.send(`{ "anonymous": true, "function": "process.cwd", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

      return '/';
            SRTlib.send("]},");

    };
    process.chdir = function (dir) {
            SRTlib.send(`{ "anonymous": true, "function": "process.chdir", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      throw new Error('process.chdir is not supported');
            SRTlib.send("]},");

            SRTlib.send("]},");

            SRTlib.send("]},");

    };
    process.umask = function () {
            SRTlib.send(`{ "anonymous": true, "function": "process.umask", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

      return 0;
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }, {}],
  16: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey23", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    (function (global, factory) {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey19", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.WHATWGFetch = {});
            SRTlib.send("]},");

    })(this, function (exports) {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey22", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      'use strict';
      var support = {
        searchParams: ('URLSearchParams' in self),
        iterable: ('Symbol' in self) && ('iterator' in Symbol),
        blob: ('FileReader' in self) && ('Blob' in self) && (function () {
                    SRTlib.send(`{ "anonymous": true, "function": "support.blob", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          try {
            new Blob();
                        SRTlib.send("]},");

            return true;
          } catch (e) {
                        SRTlib.send("]},");

            return false;
          }
                    SRTlib.send("]},");

        })(),
        formData: ('FormData' in self),
        arrayBuffer: ('ArrayBuffer' in self)
      };
      function isDataView(obj) {
                SRTlib.send(`{ "anonymous": false, "function": "isDataView", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return obj && DataView.prototype.isPrototypeOf(obj);
                SRTlib.send("]},");

      }
      if (support.arrayBuffer) {
        var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];
        var isArrayBufferView = ArrayBuffer.isView || (function (obj) {
                    SRTlib.send(`{ "anonymous": true, "function": "isArrayBufferView", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
                    SRTlib.send("]},");

        });
      }
      function normalizeName(name) {
                SRTlib.send(`{ "anonymous": false, "function": "normalizeName", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (typeof name !== 'string') {
          name = String(name);
        }
        if ((/[^a-z0-9\-#$%&'*+.^_`|~]/i).test(name)) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new TypeError('Invalid character in header field name');
        }
                SRTlib.send("]},");

        return name.toLowerCase();
                SRTlib.send("]},");

      }
      function normalizeValue(value) {
                SRTlib.send(`{ "anonymous": false, "function": "normalizeValue", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (typeof value !== 'string') {
          value = String(value);
        }
                SRTlib.send("]},");

        return value;
                SRTlib.send("]},");

      }
      function iteratorFor(items) {
                SRTlib.send(`{ "anonymous": false, "function": "iteratorFor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var iterator = {
          next: function () {
                        SRTlib.send(`{ "anonymous": true, "function": "iterator.next", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            var value = items.shift();
                        SRTlib.send("]},");

            return {
              done: value === undefined,
              value: value
            };
                        SRTlib.send("]},");

          }
        };
        if (support.iterable) {
          iterator[Symbol.iterator] = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "iterator", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return iterator;
                        SRTlib.send("]},");

          };
        }
                SRTlib.send("]},");

        return iterator;
                SRTlib.send("]},");

      }
      function Headers(headers) {
                SRTlib.send(`{ "anonymous": false, "function": "Headers", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.map = {};
        if (headers instanceof Headers) {
          headers.forEach(function (value, name) {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey20", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            this.append(name, value);
                        SRTlib.send("]},");

          }, this);
        } else if (Array.isArray(headers)) {
          headers.forEach(function (header) {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey21", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            this.append(header[0], header[1]);
                        SRTlib.send("]},");

          }, this);
        } else if (headers) {
          Object.getOwnPropertyNames(headers).forEach(function (name) {
                        SRTlib.send(`{ "anonymous": true, "function": "forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            this.append(name, headers[name]);
                        SRTlib.send("]},");

          }, this);
        }
                SRTlib.send("]},");

      }
      Headers.prototype.append = function (name, value) {
                SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.append", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ', ' + value : value;
                SRTlib.send("]},");

      };
      Headers.prototype['delete'] = function (name) {
                SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        delete this.map[normalizeName(name)];
                SRTlib.send("]},");

      };
      Headers.prototype.get = function (name) {
                SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.get", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        name = normalizeName(name);
                SRTlib.send("]},");

        return this.has(name) ? this.map[name] : null;
                SRTlib.send("]},");

      };
      Headers.prototype.has = function (name) {
                SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.has", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return this.map.hasOwnProperty(normalizeName(name));
                SRTlib.send("]},");

      };
      Headers.prototype.set = function (name, value) {
                SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.set", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        this.map[normalizeName(name)] = normalizeValue(value);
                SRTlib.send("]},");

      };
      Headers.prototype.forEach = function (callback, thisArg) {
                SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.forEach", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        for (var name in this.map) {
          if (this.map.hasOwnProperty(name)) {
            callback.call(thisArg, this.map[name], name, this);
          }
        }
                SRTlib.send("]},");

      };
      Headers.prototype.keys = function () {
                SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.keys", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var items = [];
        this.forEach(function (value, name) {
                    SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.keys.forEach", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          items.push(name);
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

        return iteratorFor(items);
                SRTlib.send("]},");

      };
      Headers.prototype.values = function () {
                SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.values", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var items = [];
        this.forEach(function (value) {
                    SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.values.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          items.push(value);
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

        return iteratorFor(items);
                SRTlib.send("]},");

      };
      Headers.prototype.entries = function () {
                SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.entries", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var items = [];
        this.forEach(function (value, name) {
                    SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.entries.forEach", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          items.push([name, value]);
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

        return iteratorFor(items);
                SRTlib.send("]},");

      };
      if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
      }
      function consumed(body) {
                SRTlib.send(`{ "anonymous": false, "function": "consumed", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (body.bodyUsed) {
                    SRTlib.send("]},");

          return Promise.reject(new TypeError('Already read'));
        }
        body.bodyUsed = true;
                SRTlib.send("]},");

      }
      function fileReaderReady(reader) {
                SRTlib.send(`{ "anonymous": false, "function": "fileReaderReady", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement8", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          reader.onload = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.reader.onload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            resolve(reader.result);
                        SRTlib.send("]},");

          };
          reader.onerror = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.reader.onerror", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            reject(reader.error);
                        SRTlib.send("]},");

          };
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      }
      function readBlobAsArrayBuffer(blob) {
                SRTlib.send(`{ "anonymous": false, "function": "readBlobAsArrayBuffer", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
                SRTlib.send("]},");

        return promise;
                SRTlib.send("]},");

      }
      function readBlobAsText(blob) {
                SRTlib.send(`{ "anonymous": false, "function": "readBlobAsText", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsText(blob);
                SRTlib.send("]},");

        return promise;
                SRTlib.send("]},");

      }
      function readArrayBufferAsText(buf) {
                SRTlib.send(`{ "anonymous": false, "function": "readArrayBufferAsText", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var view = new Uint8Array(buf);
        var chars = new Array(view.length);
        for (var i = 0; i < view.length; i++) {
          chars[i] = String.fromCharCode(view[i]);
        }
                SRTlib.send("]},");

        return chars.join('');
                SRTlib.send("]},");

      }
      function bufferClone(buf) {
                SRTlib.send(`{ "anonymous": false, "function": "bufferClone", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (buf.slice) {
                    SRTlib.send("]},");

          return buf.slice(0);
        } else {
          var view = new Uint8Array(buf.byteLength);
          view.set(new Uint8Array(buf));
                    SRTlib.send("]},");

          return view.buffer;
        }
                SRTlib.send("]},");

      }
      function Body() {
                SRTlib.send(`{ "anonymous": false, "function": "Body", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.bodyUsed = false;
        this._initBody = function (body) {
                    SRTlib.send(`{ "anonymous": true, "function": "_initBody", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          this._bodyInit = body;
          if (!body) {
            this._bodyText = '';
          } else if (typeof body === 'string') {
            this._bodyText = body;
          } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
            this._bodyBlob = body;
          } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
            this._bodyFormData = body;
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this._bodyText = body.toString();
          } else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer);
            this._bodyInit = new Blob([this._bodyArrayBuffer]);
          } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
            this._bodyArrayBuffer = bufferClone(body);
          } else {
            this._bodyText = body = Object.prototype.toString.call(body);
          }
          if (!this.headers.get('content-type')) {
            if (typeof body === 'string') {
              this.headers.set('content-type', 'text/plain;charset=UTF-8');
            } else if (this._bodyBlob && this._bodyBlob.type) {
              this.headers.set('content-type', this._bodyBlob.type);
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
          }
                    SRTlib.send("]},");

        };
        if (support.blob) {
          this.blob = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "blob", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            var rejected = consumed(this);
            if (rejected) {
                            SRTlib.send("]},");

              return rejected;
            }
            if (this._bodyBlob) {
                            SRTlib.send("]},");

              return Promise.resolve(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
                            SRTlib.send("]},");

              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            } else if (this._bodyFormData) {
                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

                            SRTlib.send("]},");

              throw new Error('could not read FormData body as blob');
            } else {
                            SRTlib.send("]},");

              return Promise.resolve(new Blob([this._bodyText]));
            }
                        SRTlib.send("]},");

          };
          this.arrayBuffer = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "arrayBuffer", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            if (this._bodyArrayBuffer) {
                            SRTlib.send("]},");

              return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
            } else {
                            SRTlib.send("]},");

              return this.blob().then(readBlobAsArrayBuffer);
            }
                        SRTlib.send("]},");

          };
        }
        this.text = function () {
                    SRTlib.send(`{ "anonymous": true, "function": "text", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var rejected = consumed(this);
          if (rejected) {
                        SRTlib.send("]},");

            return rejected;
          }
          if (this._bodyBlob) {
                        SRTlib.send("]},");

            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
                        SRTlib.send("]},");

            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
          } else if (this._bodyFormData) {
                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

            throw new Error('could not read FormData body as text');
          } else {
                        SRTlib.send("]},");

            return Promise.resolve(this._bodyText);
          }
                    SRTlib.send("]},");

        };
        if (support.formData) {
          this.formData = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "formData", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return this.text().then(decode);
                        SRTlib.send("]},");

          };
        }
        this.json = function () {
                    SRTlib.send(`{ "anonymous": true, "function": "json", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

          return this.text().then(JSON.parse);
                    SRTlib.send("]},");

        };
                SRTlib.send("]},");

        return this;
                SRTlib.send("]},");

      }
      var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
      function normalizeMethod(method) {
                SRTlib.send(`{ "anonymous": false, "function": "normalizeMethod", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var upcased = method.toUpperCase();
                SRTlib.send("]},");

        return methods.indexOf(upcased) > -1 ? upcased : method;
                SRTlib.send("]},");

      }
      function Request(input, options) {
                SRTlib.send(`{ "anonymous": false, "function": "Request", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        options = options || ({});
        var body = options.body;
        if (input instanceof Request) {
          if (input.bodyUsed) {
                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

            throw new TypeError('Already read');
          }
          this.url = input.url;
          this.credentials = input.credentials;
          if (!options.headers) {
            this.headers = new Headers(input.headers);
          }
          this.method = input.method;
          this.mode = input.mode;
          this.signal = input.signal;
          if (!body && input._bodyInit != null) {
            body = input._bodyInit;
            input.bodyUsed = true;
          }
        } else {
          this.url = String(input);
        }
        this.credentials = options.credentials || this.credentials || 'same-origin';
        if (options.headers || !this.headers) {
          this.headers = new Headers(options.headers);
        }
        this.method = normalizeMethod(options.method || this.method || 'GET');
        this.mode = options.mode || this.mode || null;
        this.signal = options.signal || this.signal;
        this.referrer = null;
        if ((this.method === 'GET' || this.method === 'HEAD') && body) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new TypeError('Body not allowed for GET or HEAD requests');
        }
        this._initBody(body);
                SRTlib.send("]},");

      }
      Request.prototype.clone = function () {
                SRTlib.send(`{ "anonymous": true, "function": "Request.prototype.clone", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

        return new Request(this, {
          body: this._bodyInit
        });
                SRTlib.send("]},");

      };
      function decode(body) {
                SRTlib.send(`{ "anonymous": false, "function": "decode", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var form = new FormData();
        body.trim().split('&').forEach(function (bytes) {
                    SRTlib.send(`{ "anonymous": true, "function": "split.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (bytes) {
            var split = bytes.split('=');
            var name = split.shift().replace(/\+/g, ' ');
            var value = split.join('=').replace(/\+/g, ' ');
            form.append(decodeURIComponent(name), decodeURIComponent(value));
          }
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

        return form;
                SRTlib.send("]},");

      }
      function parseHeaders(rawHeaders) {
                SRTlib.send(`{ "anonymous": false, "function": "parseHeaders", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var headers = new Headers();
        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
        preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
                    SRTlib.send(`{ "anonymous": true, "function": "forEach2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var parts = line.split(':');
          var key = parts.shift().trim();
          if (key) {
            var value = parts.join(':').trim();
            headers.append(key, value);
          }
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

        return headers;
                SRTlib.send("]},");

      }
      Body.call(Request.prototype);
      function Response(bodyInit, options) {
                SRTlib.send(`{ "anonymous": false, "function": "Response", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        if (!options) {
          options = {};
        }
        this.type = 'default';
        this.status = options.status === undefined ? 200 : options.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = ('statusText' in options) ? options.statusText : 'OK';
        this.headers = new Headers(options.headers);
        this.url = options.url || '';
        this._initBody(bodyInit);
                SRTlib.send("]},");

      }
      Body.call(Response.prototype);
      Response.prototype.clone = function () {
                SRTlib.send(`{ "anonymous": true, "function": "Response.prototype.clone", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

        return new Response(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Headers(this.headers),
          url: this.url
        });
                SRTlib.send("]},");

      };
      Response.error = function () {
                SRTlib.send(`{ "anonymous": true, "function": "Response.error", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var response = new Response(null, {
          status: 0,
          statusText: ''
        });
        response.type = 'error';
                SRTlib.send("]},");

        return response;
                SRTlib.send("]},");

      };
      var redirectStatuses = [301, 302, 303, 307, 308];
      Response.redirect = function (url, status) {
                SRTlib.send(`{ "anonymous": true, "function": "Response.redirect", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        if (redirectStatuses.indexOf(status) === -1) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RangeError('Invalid status code');
        }
                SRTlib.send("]},");

        return new Response(null, {
          status: status,
          headers: {
            location: url
          }
        });
                SRTlib.send("]},");

      };
      exports.DOMException = self.DOMException;
      try {
        new exports.DOMException();
      } catch (err) {
        exports.DOMException = function (message, name) {
                    SRTlib.send(`{ "anonymous": true, "function": "exports.DOMException", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          this.message = message;
          this.name = name;
          var error = Error(message);
          this.stack = error.stack;
                    SRTlib.send("]},");

        };
        exports.DOMException.prototype = Object.create(Error.prototype);
        exports.DOMException.prototype.constructor = exports.DOMException;
      }
      function fetch(input, init) {
                SRTlib.send(`{ "anonymous": false, "function": "fetch", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                SRTlib.send("]},");

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement9", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          var request = new Request(input, init);
          if (request.signal && request.signal.aborted) {
                        SRTlib.send("]},");

            return reject(new exports.DOMException('Aborted', 'AbortError'));
          }
          var xhr = new XMLHttpRequest();
          function abortXhr() {
                        SRTlib.send(`{ "anonymous": false, "function": "abortXhr", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            xhr.abort();
                        SRTlib.send("]},");

          }
          xhr.onload = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.xhr.onload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            var options = {
              status: xhr.status,
              statusText: xhr.statusText,
              headers: parseHeaders(xhr.getAllResponseHeaders() || '')
            };
            options.url = ('responseURL' in xhr) ? xhr.responseURL : options.headers.get('X-Request-URL');
            var body = ('response' in xhr) ? xhr.response : xhr.responseText;
            resolve(new Response(body, options));
                        SRTlib.send("]},");

          };
          xhr.onerror = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.xhr.onerror", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            reject(new TypeError('Network request failed'));
                        SRTlib.send("]},");

          };
          xhr.ontimeout = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.xhr.ontimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            reject(new TypeError('Network request failed'));
                        SRTlib.send("]},");

          };
          xhr.onabort = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.xhr.onabort", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            reject(new exports.DOMException('Aborted', 'AbortError'));
                        SRTlib.send("]},");

          };
          xhr.open(request.method, request.url, true);
          if (request.credentials === 'include') {
            xhr.withCredentials = true;
          } else if (request.credentials === 'omit') {
            xhr.withCredentials = false;
          }
          if (('responseType' in xhr) && support.blob) {
            xhr.responseType = 'blob';
          }
          request.headers.forEach(function (value, name) {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.request.headers.forEach", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            xhr.setRequestHeader(name, value);
                        SRTlib.send("]},");

          });
          if (request.signal) {
            request.signal.addEventListener('abort', abortXhr);
            xhr.onreadystatechange = function () {
                            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.xhr.onreadystatechange", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              if (xhr.readyState === 4) {
                request.signal.removeEventListener('abort', abortXhr);
              }
                            SRTlib.send("]},");

            };
          }
          xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      }
      fetch.polyfill = true;
      if (!self.fetch) {
        self.fetch = fetch;
        self.Headers = Headers;
        self.Request = Request;
        self.Response = Response;
      }
      exports.Headers = Headers;
      exports.Request = Request;
      exports.Response = Response;
      exports.fetch = fetch;
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }, {}],
  17: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey24", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    'use strict';
    function WildcardMatcher(text, separator) {
            SRTlib.send(`{ "anonymous": false, "function": "WildcardMatcher", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      this.text = text = text || '';
      this.hasWild = ~text.indexOf('*');
      this.separator = separator;
      this.parts = text.split(separator);
            SRTlib.send("]},");

    }
    WildcardMatcher.prototype.match = function (input) {
            SRTlib.send(`{ "anonymous": true, "function": "WildcardMatcher.prototype.match", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var matches = true;
      var parts = this.parts;
      var ii;
      var partsCount = parts.length;
      var testParts;
      if (typeof input == 'string' || input instanceof String) {
        if (!this.hasWild && this.text != input) {
          matches = false;
        } else {
          testParts = (input || '').split(this.separator);
          for (ii = 0; matches && ii < partsCount; ii++) {
            if (parts[ii] === '*') {
              continue;
            } else if (ii < testParts.length) {
              matches = parts[ii] === testParts[ii];
            } else {
              matches = false;
            }
          }
          matches = matches && testParts;
        }
      } else if (typeof input.splice == 'function') {
        matches = [];
        for (ii = input.length; ii--; ) {
          if (this.match(input[ii])) {
            matches[matches.length] = input[ii];
          }
        }
      } else if (typeof input == 'object') {
        matches = {};
        for (var key in input) {
          if (this.match(key)) {
            matches[key] = input[key];
          }
        }
      }
            SRTlib.send("]},");

      return matches;
            SRTlib.send("]},");

    };
    module.exports = function (text, test, separator) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports3", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      var matcher = new WildcardMatcher(text, separator || /[\/\.]/);
      if (typeof test != 'undefined') {
                SRTlib.send("]},");

        return matcher.match(test);
      }
            SRTlib.send("]},");

      return matcher;
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }, {}],
  18: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey25", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    function _extends() {
            SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send("]},");

        return target;
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

      return _extends.apply(this, arguments);
            SRTlib.send("]},");

    }
    var preact = require('preact');
    var findDOMElement = require('@uppy/utils/lib/findDOMElement');
    function debounce(fn) {
            SRTlib.send(`{ "anonymous": false, "function": "debounce", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var calling = null;
      var latestArgs = null;
            SRTlib.send("]},");

      return function () {
                SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement10", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        latestArgs = args;
        if (!calling) {
          calling = Promise.resolve().then(function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.calling.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            calling = null;
                        SRTlib.send("]},");

            return fn.apply(void 0, latestArgs);
                        SRTlib.send("]},");

          });
        }
                SRTlib.send("]},");

        return calling;
                SRTlib.send("]},");

      };
            SRTlib.send("]},");

    }
    module.exports = (function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      function Plugin(uppy, opts) {
                SRTlib.send(`{ "anonymous": false, "function": "Plugin", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        this.uppy = uppy;
        this.opts = opts || ({});
        this.update = this.update.bind(this);
        this.mount = this.mount.bind(this);
        this.install = this.install.bind(this);
        this.uninstall = this.uninstall.bind(this);
                SRTlib.send("]},");

      }
      var _proto = Plugin.prototype;
      _proto.getPluginState = function getPluginState() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getPluginState.getPluginState", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this$uppy$getState = this.uppy.getState(), plugins = _this$uppy$getState.plugins;
                SRTlib.send("]},");

        return plugins[this.id] || ({});
                SRTlib.send("]},");

      };
      _proto.setPluginState = function setPluginState(update) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.setPluginState.setPluginState", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _extends2;
        var _this$uppy$getState2 = this.uppy.getState(), plugins = _this$uppy$getState2.plugins;
        this.uppy.setState({
          plugins: _extends({}, plugins, (_extends2 = {}, _extends2[this.id] = _extends({}, plugins[this.id], {}, update), _extends2))
        });
                SRTlib.send("]},");

      };
      _proto.setOptions = function setOptions(newOpts) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.setOptions.setOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.opts = _extends({}, this.opts, {}, newOpts);
        this.setPluginState();
                SRTlib.send("]},");

      };
      _proto.update = function update(state) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.update.update", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (typeof this.el === 'undefined') {
                    SRTlib.send("]},");

          return;
        }
        if (this._updateUI) {
          this._updateUI(state);
        }
                SRTlib.send("]},");

      };
      _proto.afterUpdate = function afterUpdate() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.afterUpdate.afterUpdate", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

      };
      _proto.onMount = function onMount() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onMount.onMount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

      };
      _proto.mount = function mount(target, plugin) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.mount.mount", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _this = this;
        var callerPluginName = plugin.id;
        var targetElement = findDOMElement(target);
        if (targetElement) {
          this.isTargetDOMEl = true;
          this.rerender = function (state) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.mount.mount.rerender", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (!_this.uppy.getPlugin(_this.id)) {
                            SRTlib.send("]},");

              return;
            }
            _this.el = preact.render(_this.render(state), targetElement, _this.el);
            _this.afterUpdate();
                        SRTlib.send("]},");

          };
          this._updateUI = debounce(this.rerender);
          this.uppy.log("Installing " + callerPluginName + " to a DOM element '" + target + "'");
          if (this.opts.replaceTargetContent) {
            targetElement.innerHTML = '';
          }
          this.el = preact.render(this.render(this.uppy.getState()), targetElement);
          this.onMount();
                    SRTlib.send("]},");

          return this.el;
        }
        var targetPlugin;
        if (typeof target === 'object' && target instanceof Plugin) {
          targetPlugin = target;
        } else if (typeof target === 'function') {
          var Target = target;
          this.uppy.iteratePlugins(function (plugin) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.mount.mount.uppy.iteratePlugins", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (plugin instanceof Target) {
              targetPlugin = plugin;
                            SRTlib.send("]},");

              return false;
            }
                        SRTlib.send("]},");

          });
        }
        if (targetPlugin) {
          this.uppy.log("Installing " + callerPluginName + " to " + targetPlugin.id);
          this.parent = targetPlugin;
          this.el = targetPlugin.addTarget(plugin);
          this.onMount();
                    SRTlib.send("]},");

          return this.el;
        }
        this.uppy.log("Not installing " + callerPluginName);
        var message = "Invalid target option given to " + callerPluginName + ".";
        if (typeof target === 'function') {
          message += ' The given target is not a Plugin class. ' + 'Please check that you\'re not specifying a React Component instead of a plugin. ' + 'If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: ' + 'run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly.';
        } else {
          message += 'If you meant to target an HTML element, please make sure that the element exists. ' + 'Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. ' + '(see https://github.com/transloadit/uppy/issues/1042)\n\n' + 'If you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.';
        }
        throw new Error(message);
                SRTlib.send("]},");

                SRTlib.send("]},");

                SRTlib.send("]},");

                SRTlib.send("]},");

      };
      _proto.render = function render(state) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.render.render", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        throw new Error('Extend the render method to add your plugin to a DOM element');
                SRTlib.send("]},");

                SRTlib.send("]},");

                SRTlib.send("]},");

                SRTlib.send("]},");

      };
      _proto.addTarget = function addTarget(plugin) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.addTarget.addTarget", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        throw new Error('Extend the addTarget method to add your plugin to another plugin\'s target');
                SRTlib.send("]},");

                SRTlib.send("]},");

                SRTlib.send("]},");

                SRTlib.send("]},");

      };
      _proto.unmount = function unmount() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.unmount.unmount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        if (this.isTargetDOMEl && this.el && this.el.parentNode) {
          this.el.parentNode.removeChild(this.el);
        }
                SRTlib.send("]},");

      };
      _proto.install = function install() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

      };
      _proto.uninstall = function uninstall() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uninstall.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.unmount();
                SRTlib.send("]},");

      };
            SRTlib.send("]},");

      return Plugin;
            SRTlib.send("]},");

    })();
        SRTlib.send("]},");

  }, {
    "@uppy/utils/lib/findDOMElement": 33,
    "preact": 14
  }],
  19: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey26", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    function _extends() {
            SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_extends2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send("]},");

        return target;
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

      return _extends.apply(this, arguments);
            SRTlib.send("]},");

    }
    function _defineProperties(target, props) {
            SRTlib.send(`{ "anonymous": false, "function": "_defineProperties", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if (("value" in descriptor)) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
            SRTlib.send("]},");

    }
    function _createClass(Constructor, protoProps, staticProps) {
            SRTlib.send(`{ "anonymous": false, "function": "_createClass", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
            SRTlib.send("]},");

      return Constructor;
            SRTlib.send("]},");

    }
    function _inheritsLoose(subClass, superClass) {
            SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
            SRTlib.send("]},");

    }
    function _wrapNativeSuper(Class) {
            SRTlib.send(`{ "anonymous": false, "function": "_wrapNativeSuper", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var _cache = typeof Map === "function" ? new Map() : undefined;
      _wrapNativeSuper = function _wrapNativeSuper(Class) {
                SRTlib.send(`{ "anonymous": true, "function": "_wrapNativeSuper._wrapNativeSuper", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (Class === null || !_isNativeFunction(Class)) {
                    SRTlib.send("]},");

          return Class;
        }
        if (typeof Class !== "function") {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) {
                        SRTlib.send("]},");

            return _cache.get(Class);
          }
          _cache.set(Class, Wrapper);
        }
        function Wrapper() {
                    SRTlib.send(`{ "anonymous": false, "function": "Wrapper", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
                    SRTlib.send("]},");

        }
        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
                SRTlib.send("]},");

        return _setPrototypeOf(Wrapper, Class);
                SRTlib.send("]},");

      };
            SRTlib.send("]},");

      return _wrapNativeSuper(Class);
            SRTlib.send("]},");

    }
    function _construct(Parent, args, Class) {
            SRTlib.send(`{ "anonymous": false, "function": "_construct", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
                    SRTlib.send(`{ "anonymous": true, "function": "_construct._construct", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
                    SRTlib.send("]},");

          return instance;
                    SRTlib.send("]},");

        };
      }
            SRTlib.send("]},");

      return _construct.apply(null, arguments);
            SRTlib.send("]},");

    }
    function _isNativeReflectConstruct() {
            SRTlib.send(`{ "anonymous": false, "function": "_isNativeReflectConstruct", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (typeof Reflect === "undefined" || !Reflect.construct) {
                SRTlib.send("]},");

        return false;
      }
      if (Reflect.construct.sham) {
                SRTlib.send("]},");

        return false;
      }
      if (typeof Proxy === "function") {
                SRTlib.send("]},");

        return true;
      }
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                    SRTlib.send(`{ "anonymous": true, "function": "Date.prototype.toString.call", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

        }));
                SRTlib.send("]},");

        return true;
      } catch (e) {
                SRTlib.send("]},");

        return false;
      }
            SRTlib.send("]},");

    }
    function _isNativeFunction(fn) {
            SRTlib.send(`{ "anonymous": false, "function": "_isNativeFunction", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return Function.toString.call(fn).indexOf("[native code]") !== -1;
            SRTlib.send("]},");

    }
    function _setPrototypeOf(o, p) {
            SRTlib.send(`{ "anonymous": false, "function": "_setPrototypeOf", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      _setPrototypeOf = Object.setPrototypeOf || (function _setPrototypeOf(o, p) {
                SRTlib.send(`{ "anonymous": true, "function": "_setPrototypeOf._setPrototypeOf", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        o.__proto__ = p;
                SRTlib.send("]},");

        return o;
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

      return _setPrototypeOf(o, p);
            SRTlib.send("]},");

    }
    function _getPrototypeOf(o) {
            SRTlib.send(`{ "anonymous": false, "function": "_getPrototypeOf", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                SRTlib.send(`{ "anonymous": true, "function": "_getPrototypeOf._getPrototypeOf", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return o.__proto__ || Object.getPrototypeOf(o);
                SRTlib.send("]},");

      };
            SRTlib.send("]},");

      return _getPrototypeOf(o);
            SRTlib.send("]},");

    }
    var Translator = require('@uppy/utils/lib/Translator');
    var ee = require('namespace-emitter');
    var cuid = require('cuid');
    var throttle = require('lodash.throttle');
    var prettierBytes = require('@transloadit/prettier-bytes');
    var match = require('mime-match');
    var DefaultStore = require('@uppy/store-default');
    var getFileType = require('@uppy/utils/lib/getFileType');
    var getFileNameAndExtension = require('@uppy/utils/lib/getFileNameAndExtension');
    var generateFileID = require('@uppy/utils/lib/generateFileID');
    var supportsUploadProgress = require('./supportsUploadProgress');
    var _require = require('./loggers'), justErrorsLogger = _require.justErrorsLogger, debugLogger = _require.debugLogger;
    var Plugin = require('./Plugin');
    var RestrictionError = (function (_Error) {
            SRTlib.send(`{ "anonymous": true, "function": "RestrictionError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _inheritsLoose(RestrictionError, _Error);
      function RestrictionError() {
                SRTlib.send(`{ "anonymous": false, "function": "RestrictionError", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _Error.call.apply(_Error, [this].concat(args)) || this;
        _this.isRestriction = true;
                SRTlib.send("]},");

        return _this;
                SRTlib.send("]},");

      }
            SRTlib.send("]},");

      return RestrictionError;
            SRTlib.send("]},");

    })(_wrapNativeSuper(Error));
    var Uppy = (function () {
            SRTlib.send(`{ "anonymous": true, "function": "Uppy", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      function Uppy(opts) {
                SRTlib.send(`{ "anonymous": false, "function": "Uppy", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this2 = this;
        this.defaultLocale = {
          strings: {
            addBulkFilesFailed: {
              0: 'Failed to add %{smart_count} file due to an internal error',
              1: 'Failed to add %{smart_count} files due to internal errors'
            },
            youCanOnlyUploadX: {
              0: 'You can only upload %{smart_count} file',
              1: 'You can only upload %{smart_count} files'
            },
            youHaveToAtLeastSelectX: {
              0: 'You have to select at least %{smart_count} file',
              1: 'You have to select at least %{smart_count} files'
            },
            exceedsSize2: '%{backwardsCompat} %{size}',
            exceedsSize: 'This file exceeds maximum allowed size of',
            youCanOnlyUploadFileTypes: 'You can only upload: %{types}',
            noNewAlreadyUploading: 'Cannot add new files: already uploading',
            noDuplicates: 'Cannot add the duplicate file \'%{fileName}\', it already exists',
            companionError: 'Connection with Companion failed',
            companionUnauthorizeHint: 'To unauthorize to your %{provider} account, please go to %{url}',
            failedToUpload: 'Failed to upload %{file}',
            noInternetConnection: 'No Internet connection',
            connectedToInternet: 'Connected to the Internet',
            noFilesFound: 'You have no files or folders here',
            selectX: {
              0: 'Select %{smart_count}',
              1: 'Select %{smart_count}'
            },
            selectAllFilesFromFolderNamed: 'Select all files from folder %{name}',
            unselectAllFilesFromFolderNamed: 'Unselect all files from folder %{name}',
            selectFileNamed: 'Select file %{name}',
            unselectFileNamed: 'Unselect file %{name}',
            openFolderNamed: 'Open folder %{name}',
            cancel: 'Cancel',
            logOut: 'Log out',
            filter: 'Filter',
            resetFilter: 'Reset filter',
            loading: 'Loading...',
            authenticateWithTitle: 'Please authenticate with %{pluginName} to select files',
            authenticateWith: 'Connect to %{pluginName}',
            emptyFolderAdded: 'No files were added from empty folder',
            folderAdded: {
              0: 'Added %{smart_count} file from %{folder}',
              1: 'Added %{smart_count} files from %{folder}'
            }
          }
        };
        var defaultOptions = {
          id: 'uppy',
          autoProceed: false,
          allowMultipleUploads: true,
          debug: false,
          restrictions: {
            maxFileSize: null,
            maxNumberOfFiles: null,
            minNumberOfFiles: null,
            allowedFileTypes: null
          },
          meta: {},
          onBeforeFileAdded: function onBeforeFileAdded(currentFile, files) {
                        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onBeforeFileAdded.onBeforeFileAdded", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                        SRTlib.send("]},");

            return currentFile;
                        SRTlib.send("]},");

          },
          onBeforeUpload: function onBeforeUpload(files) {
                        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onBeforeUpload.onBeforeUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return files;
                        SRTlib.send("]},");

          },
          store: DefaultStore(),
          logger: justErrorsLogger
        };
        this.opts = _extends({}, defaultOptions, {}, opts, {
          restrictions: _extends({}, defaultOptions.restrictions, {}, opts && opts.restrictions)
        });
        if (opts && opts.logger && opts.debug) {
          this.log('You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.', 'warning');
        } else if (opts && opts.debug) {
          this.opts.logger = debugLogger;
        }
        this.log("Using Core v" + this.constructor.VERSION);
        if (this.opts.restrictions.allowedFileTypes && this.opts.restrictions.allowedFileTypes !== null && !Array.isArray(this.opts.restrictions.allowedFileTypes)) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new TypeError('`restrictions.allowedFileTypes` must be an array');
        }
        this.i18nInit();
        this.plugins = {};
        this.getState = this.getState.bind(this);
        this.getPlugin = this.getPlugin.bind(this);
        this.setFileMeta = this.setFileMeta.bind(this);
        this.setFileState = this.setFileState.bind(this);
        this.log = this.log.bind(this);
        this.info = this.info.bind(this);
        this.hideInfo = this.hideInfo.bind(this);
        this.addFile = this.addFile.bind(this);
        this.removeFile = this.removeFile.bind(this);
        this.pauseResume = this.pauseResume.bind(this);
        this._calculateProgress = throttle(this._calculateProgress.bind(this), 500, {
          leading: true,
          trailing: true
        });
        this.updateOnlineStatus = this.updateOnlineStatus.bind(this);
        this.resetProgress = this.resetProgress.bind(this);
        this.pauseAll = this.pauseAll.bind(this);
        this.resumeAll = this.resumeAll.bind(this);
        this.retryAll = this.retryAll.bind(this);
        this.cancelAll = this.cancelAll.bind(this);
        this.retryUpload = this.retryUpload.bind(this);
        this.upload = this.upload.bind(this);
        this.emitter = ee();
        this.on = this.on.bind(this);
        this.off = this.off.bind(this);
        this.once = this.emitter.once.bind(this.emitter);
        this.emit = this.emitter.emit.bind(this.emitter);
        this.preProcessors = [];
        this.uploaders = [];
        this.postProcessors = [];
        this.store = this.opts.store;
        this.setState({
          plugins: {},
          files: {},
          currentUploads: {},
          allowNewUpload: true,
          capabilities: {
            uploadProgress: supportsUploadProgress(),
            individualCancellation: true,
            resumableUploads: false
          },
          totalProgress: 0,
          meta: _extends({}, this.opts.meta),
          info: {
            isHidden: true,
            type: 'info',
            message: ''
          }
        });
        this._storeUnsubscribe = this.store.subscribe(function (prevState, nextState, patch) {
                    SRTlib.send(`{ "anonymous": true, "function": "_storeUnsubscribe.store.subscribe", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          _this2.emit('state-update', prevState, nextState, patch);
          _this2.updateAll(nextState);
                    SRTlib.send("]},");

        });
        if (this.opts.debug && typeof window !== 'undefined') {
          window[this.opts.id] = this;
        }
        this._addListeners();
                SRTlib.send("]},");

      }
      var _proto = Uppy.prototype;
      _proto.on = function on(event, callback) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.on.on", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        this.emitter.on(event, callback);
                SRTlib.send("]},");

        return this;
                SRTlib.send("]},");

      };
      _proto.off = function off(event, callback) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.off.off", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        this.emitter.off(event, callback);
                SRTlib.send("]},");

        return this;
                SRTlib.send("]},");

      };
      _proto.updateAll = function updateAll(state) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.updateAll.updateAll", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.iteratePlugins(function (plugin) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.updateAll.updateAll.iteratePlugins", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          plugin.update(state);
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      };
      _proto.setState = function setState(patch) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.setState.setState", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.store.setState(patch);
                SRTlib.send("]},");

      };
      _proto.getState = function getState() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.getState.getState", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

        return this.store.getState();
                SRTlib.send("]},");

      };
      _proto.setFileState = function setFileState(fileID, state) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.setFileState.setFileState", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _extends2;
        if (!this.getState().files[fileID]) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new Error("Can\u2019t set state for " + fileID + " (the file could have been removed)");
        }
        this.setState({
          files: _extends({}, this.getState().files, (_extends2 = {}, _extends2[fileID] = _extends({}, this.getState().files[fileID], state), _extends2))
        });
                SRTlib.send("]},");

      };
      _proto.i18nInit = function i18nInit() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.i18nInit.i18nInit", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.translator = new Translator([this.defaultLocale, this.opts.locale]);
        this.locale = this.translator.locale;
        this.i18n = this.translator.translate.bind(this.translator);
        this.i18nArray = this.translator.translateArray.bind(this.translator);
                SRTlib.send("]},");

      };
      _proto.setOptions = function setOptions(newOpts) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.setOptions.setOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.opts = _extends({}, this.opts, {}, newOpts, {
          restrictions: _extends({}, this.opts.restrictions, {}, newOpts && newOpts.restrictions)
        });
        if (newOpts.meta) {
          this.setMeta(newOpts.meta);
        }
        this.i18nInit();
        if (newOpts.locale) {
          this.iteratePlugins(function (plugin) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.setOptions.setOptions.iteratePlugins", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            plugin.setOptions();
                        SRTlib.send("]},");

          });
        }
        this.setState();
                SRTlib.send("]},");

      };
      _proto.resetProgress = function resetProgress() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.resetProgress.resetProgress", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var defaultProgress = {
          percentage: 0,
          bytesUploaded: 0,
          uploadComplete: false,
          uploadStarted: null
        };
        var files = _extends({}, this.getState().files);
        var updatedFiles = {};
        Object.keys(files).forEach(function (fileID) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.resetProgress.resetProgress.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var updatedFile = _extends({}, files[fileID]);
          updatedFile.progress = _extends({}, updatedFile.progress, defaultProgress);
          updatedFiles[fileID] = updatedFile;
                    SRTlib.send("]},");

        });
        this.setState({
          files: updatedFiles,
          totalProgress: 0
        });
        this.emit('reset-progress');
                SRTlib.send("]},");

      };
      _proto.addPreProcessor = function addPreProcessor(fn) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.addPreProcessor.addPreProcessor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.preProcessors.push(fn);
                SRTlib.send("]},");

      };
      _proto.removePreProcessor = function removePreProcessor(fn) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removePreProcessor.removePreProcessor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var i = this.preProcessors.indexOf(fn);
        if (i !== -1) {
          this.preProcessors.splice(i, 1);
        }
                SRTlib.send("]},");

      };
      _proto.addPostProcessor = function addPostProcessor(fn) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.addPostProcessor.addPostProcessor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.postProcessors.push(fn);
                SRTlib.send("]},");

      };
      _proto.removePostProcessor = function removePostProcessor(fn) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removePostProcessor.removePostProcessor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var i = this.postProcessors.indexOf(fn);
        if (i !== -1) {
          this.postProcessors.splice(i, 1);
        }
                SRTlib.send("]},");

      };
      _proto.addUploader = function addUploader(fn) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.addUploader.addUploader", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.uploaders.push(fn);
                SRTlib.send("]},");

      };
      _proto.removeUploader = function removeUploader(fn) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removeUploader.removeUploader", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var i = this.uploaders.indexOf(fn);
        if (i !== -1) {
          this.uploaders.splice(i, 1);
        }
                SRTlib.send("]},");

      };
      _proto.setMeta = function setMeta(data) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.setMeta.setMeta", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var updatedMeta = _extends({}, this.getState().meta, data);
        var updatedFiles = _extends({}, this.getState().files);
        Object.keys(updatedFiles).forEach(function (fileID) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.setMeta.setMeta.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          updatedFiles[fileID] = _extends({}, updatedFiles[fileID], {
            meta: _extends({}, updatedFiles[fileID].meta, data)
          });
                    SRTlib.send("]},");

        });
        this.log('Adding metadata:');
        this.log(data);
        this.setState({
          meta: updatedMeta,
          files: updatedFiles
        });
                SRTlib.send("]},");

      };
      _proto.setFileMeta = function setFileMeta(fileID, data) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.setFileMeta.setFileMeta", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var updatedFiles = _extends({}, this.getState().files);
        if (!updatedFiles[fileID]) {
          this.log('Was trying to set metadata for a file that has been removed: ', fileID);
                    SRTlib.send("]},");

          return;
        }
        var newMeta = _extends({}, updatedFiles[fileID].meta, data);
        updatedFiles[fileID] = _extends({}, updatedFiles[fileID], {
          meta: newMeta
        });
        this.setState({
          files: updatedFiles
        });
                SRTlib.send("]},");

      };
      _proto.getFile = function getFile(fileID) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.getFile.getFile", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return this.getState().files[fileID];
                SRTlib.send("]},");

      };
      _proto.getFiles = function getFiles() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.getFiles.getFiles", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this$getState = this.getState(), files = _this$getState.files;
                SRTlib.send("]},");

        return Object.keys(files).map(function (fileID) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.getFiles.getFiles.ReturnStatement.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return files[fileID];
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      };
      _proto._checkMinNumberOfFiles = function _checkMinNumberOfFiles(files) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._checkMinNumberOfFiles._checkMinNumberOfFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var minNumberOfFiles = this.opts.restrictions.minNumberOfFiles;
        if (Object.keys(files).length < minNumberOfFiles) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new RestrictionError("" + this.i18n('youHaveToAtLeastSelectX', {
            smart_count: minNumberOfFiles
          }));
        }
                SRTlib.send("]},");

      };
      _proto._checkRestrictions = function _checkRestrictions(files, file) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._checkRestrictions._checkRestrictions", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _this$opts$restrictio = this.opts.restrictions, maxFileSize = _this$opts$restrictio.maxFileSize, maxNumberOfFiles = _this$opts$restrictio.maxNumberOfFiles, allowedFileTypes = _this$opts$restrictio.allowedFileTypes;
        if (maxNumberOfFiles) {
          if (Object.keys(files).length + 1 > maxNumberOfFiles) {
                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

            throw new RestrictionError("" + this.i18n('youCanOnlyUploadX', {
              smart_count: maxNumberOfFiles
            }));
          }
        }
        if (allowedFileTypes) {
          var isCorrectFileType = allowedFileTypes.some(function (type) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._checkRestrictions._checkRestrictions.isCorrectFileType", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (type.indexOf('/') > -1) {
              if (!file.type) {
                                SRTlib.send("]},");

                return false;
              }
                            SRTlib.send("]},");

              return match(file.type.replace(/;.*?$/, ''), type);
            }
            if (type[0] === '.') {
                            SRTlib.send("]},");

              return file.extension.toLowerCase() === type.substr(1).toLowerCase();
            }
                        SRTlib.send("]},");

            return false;
                        SRTlib.send("]},");

          });
          if (!isCorrectFileType) {
            var allowedFileTypesString = allowedFileTypes.join(', ');
                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

            throw new RestrictionError(this.i18n('youCanOnlyUploadFileTypes', {
              types: allowedFileTypesString
            }));
          }
        }
        if (maxFileSize && file.data.size != null) {
          if (file.data.size > maxFileSize) {
                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

            throw new RestrictionError(this.i18n('exceedsSize2', {
              backwardsCompat: this.i18n('exceedsSize'),
              size: prettierBytes(maxFileSize)
            }));
          }
        }
                SRTlib.send("]},");

      };
      _proto._showOrLogErrorAndThrow = function _showOrLogErrorAndThrow(err, _temp) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._showOrLogErrorAndThrow._showOrLogErrorAndThrow", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _ref = _temp === void 0 ? {} : _temp, _ref$showInformer = _ref.showInformer, showInformer = _ref$showInformer === void 0 ? true : _ref$showInformer, _ref$file = _ref.file, file = _ref$file === void 0 ? null : _ref$file, _ref$throwErr = _ref.throwErr, throwErr = _ref$throwErr === void 0 ? true : _ref$throwErr;
        var message = typeof err === 'object' ? err.message : err;
        var details = typeof err === 'object' && err.details ? err.details : '';
        var logMessageWithDetails = message;
        if (details) {
          logMessageWithDetails += ' ' + details;
        }
        if (err.isRestriction) {
          this.log(logMessageWithDetails);
          this.emit('restriction-failed', file, err);
        } else {
          this.log(logMessageWithDetails, 'error');
        }
        if (showInformer) {
          this.info({
            message: message,
            details: details
          }, 'error', 5000);
        }
        if (throwErr) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw typeof err === 'object' ? err : new Error(err);
        }
                SRTlib.send("]},");

      };
      _proto._assertNewUploadAllowed = function _assertNewUploadAllowed(file) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._assertNewUploadAllowed._assertNewUploadAllowed", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this$getState2 = this.getState(), allowNewUpload = _this$getState2.allowNewUpload;
        if (allowNewUpload === false) {
          this._showOrLogErrorAndThrow(new RestrictionError(this.i18n('noNewAlreadyUploading')), {
            file: file
          });
        }
                SRTlib.send("]},");

      };
      _proto._checkAndCreateFileStateObject = function _checkAndCreateFileStateObject(files, file) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._checkAndCreateFileStateObject._checkAndCreateFileStateObject", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var fileType = getFileType(file);
        file.type = fileType;
        var onBeforeFileAddedResult = this.opts.onBeforeFileAdded(file, files);
        if (onBeforeFileAddedResult === false) {
          this._showOrLogErrorAndThrow(new RestrictionError('Cannot add the file because onBeforeFileAdded returned false.'), {
            showInformer: false,
            file: file
          });
        }
        if (typeof onBeforeFileAddedResult === 'object' && onBeforeFileAddedResult) {
          file = onBeforeFileAddedResult;
        }
        var fileName;
        if (file.name) {
          fileName = file.name;
        } else if (fileType.split('/')[0] === 'image') {
          fileName = fileType.split('/')[0] + '.' + fileType.split('/')[1];
        } else {
          fileName = 'noname';
        }
        var fileExtension = getFileNameAndExtension(fileName).extension;
        var isRemote = file.isRemote || false;
        var fileID = generateFileID(file);
        if (files[fileID]) {
          this._showOrLogErrorAndThrow(new RestrictionError(this.i18n('noDuplicates', {
            fileName: fileName
          })), {
            file: file
          });
        }
        var meta = file.meta || ({});
        meta.name = fileName;
        meta.type = fileType;
        var size = isFinite(file.data.size) ? file.data.size : null;
        var newFile = {
          source: file.source || '',
          id: fileID,
          name: fileName,
          extension: fileExtension || '',
          meta: _extends({}, this.getState().meta, {}, meta),
          type: fileType,
          data: file.data,
          progress: {
            percentage: 0,
            bytesUploaded: 0,
            bytesTotal: size,
            uploadComplete: false,
            uploadStarted: null
          },
          size: size,
          isRemote: isRemote,
          remote: file.remote || '',
          preview: file.preview
        };
        try {
          this._checkRestrictions(files, newFile);
        } catch (err) {
          this._showOrLogErrorAndThrow(err, {
            file: newFile
          });
        }
                SRTlib.send("]},");

        return newFile;
                SRTlib.send("]},");

      };
      _proto._startIfAutoProceed = function _startIfAutoProceed() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._startIfAutoProceed._startIfAutoProceed", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this3 = this;
        if (this.opts.autoProceed && !this.scheduledAutoProceed) {
          this.scheduledAutoProceed = setTimeout(function () {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._startIfAutoProceed._startIfAutoProceed.scheduledAutoProceed.setTimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            _this3.scheduledAutoProceed = null;
            _this3.upload().catch(function (err) {
                            SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._startIfAutoProceed._startIfAutoProceed.scheduledAutoProceed.setTimeout.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              if (!err.isRestriction) {
                _this3.log(err.stack || err.message || err);
              }
                            SRTlib.send("]},");

            });
                        SRTlib.send("]},");

          }, 4);
        }
                SRTlib.send("]},");

      };
      _proto.addFile = function addFile(file) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.addFile.addFile", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _extends3;
        this._assertNewUploadAllowed(file);
        var _this$getState3 = this.getState(), files = _this$getState3.files;
        var newFile = this._checkAndCreateFileStateObject(files, file);
        this.setState({
          files: _extends({}, files, (_extends3 = {}, _extends3[newFile.id] = newFile, _extends3))
        });
        this.emit('file-added', newFile);
        this.log("Added file: " + newFile.name + ", " + newFile.id + ", mime type: " + newFile.type);
        this._startIfAutoProceed();
                SRTlib.send("]},");

        return newFile.id;
                SRTlib.send("]},");

      };
      _proto.addFiles = function addFiles(fileDescriptors) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.addFiles.addFiles3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this4 = this;
        this._assertNewUploadAllowed();
        var files = _extends({}, this.getState().files);
        var newFiles = [];
        var errors = [];
        for (var i = 0; i < fileDescriptors.length; i++) {
          try {
            var newFile = this._checkAndCreateFileStateObject(files, fileDescriptors[i]);
            newFiles.push(newFile);
            files[newFile.id] = newFile;
          } catch (err) {
            if (!err.isRestriction) {
              errors.push(err);
            }
          }
        }
        this.setState({
          files: files
        });
        newFiles.forEach(function (newFile) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.addFiles.addFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this4.emit('file-added', newFile);
                    SRTlib.send("]},");

        });
        if (newFiles.length > 5) {
          this.log("Added batch of " + newFiles.length + " files");
        } else {
          Object.keys(newFiles).forEach(function (fileID) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.addFiles.addFiles.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            _this4.log("Added file: " + newFiles[fileID].name + "\n id: " + newFiles[fileID].id + "\n type: " + newFiles[fileID].type);
                        SRTlib.send("]},");

          });
        }
        if (newFiles.length > 0) {
          this._startIfAutoProceed();
        }
        if (errors.length > 0) {
          var message = 'Multiple errors occurred while adding files:\n';
          errors.forEach(function (subError) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.addFiles.addFiles2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            message += "\n * " + subError.message;
                        SRTlib.send("]},");

          });
          this.info({
            message: this.i18n('addBulkFilesFailed', {
              smart_count: errors.length
            }),
            details: message
          }, 'error', 5000);
          var err = new Error(message);
          err.errors = errors;
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw err;
        }
                SRTlib.send("]},");

      };
      _proto.removeFiles = function removeFiles(fileIDs) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removeFiles.removeFiles4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this5 = this;
        var _this$getState4 = this.getState(), files = _this$getState4.files, currentUploads = _this$getState4.currentUploads;
        var updatedFiles = _extends({}, files);
        var updatedUploads = _extends({}, currentUploads);
        var removedFiles = Object.create(null);
        fileIDs.forEach(function (fileID) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removeFiles.removeFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (files[fileID]) {
            removedFiles[fileID] = files[fileID];
            delete updatedFiles[fileID];
          }
                    SRTlib.send("]},");

        });
        function fileIsNotRemoved(uploadFileID) {
                    SRTlib.send(`{ "anonymous": false, "function": "fileIsNotRemoved", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return removedFiles[uploadFileID] === undefined;
                    SRTlib.send("]},");

        }
        var uploadsToRemove = [];
        Object.keys(updatedUploads).forEach(function (uploadID) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removeFiles.removeFiles.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var newFileIDs = currentUploads[uploadID].fileIDs.filter(fileIsNotRemoved);
          if (newFileIDs.length === 0) {
            uploadsToRemove.push(uploadID);
                        SRTlib.send("]},");

            return;
          }
          updatedUploads[uploadID] = _extends({}, currentUploads[uploadID], {
            fileIDs: newFileIDs
          });
                    SRTlib.send("]},");

        });
        uploadsToRemove.forEach(function (uploadID) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removeFiles.removeFiles2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          delete updatedUploads[uploadID];
                    SRTlib.send("]},");

        });
        var stateUpdate = {
          currentUploads: updatedUploads,
          files: updatedFiles
        };
        if (Object.keys(updatedFiles).length === 0) {
          stateUpdate.allowNewUpload = true;
          stateUpdate.error = null;
        }
        this.setState(stateUpdate);
        this._calculateTotalProgress();
        var removedFileIDs = Object.keys(removedFiles);
        removedFileIDs.forEach(function (fileID) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removeFiles.removeFiles3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this5.emit('file-removed', removedFiles[fileID]);
                    SRTlib.send("]},");

        });
        if (removedFileIDs.length > 5) {
          this.log("Removed " + removedFileIDs.length + " files");
        } else {
          this.log("Removed files: " + removedFileIDs.join(', '));
        }
                SRTlib.send("]},");

      };
      _proto.removeFile = function removeFile(fileID) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removeFile.removeFile", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.removeFiles([fileID]);
                SRTlib.send("]},");

      };
      _proto.pauseResume = function pauseResume(fileID) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.pauseResume.pauseResume", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (!this.getState().capabilities.resumableUploads || this.getFile(fileID).uploadComplete) {
                    SRTlib.send("]},");

          return;
        }
        var wasPaused = this.getFile(fileID).isPaused || false;
        var isPaused = !wasPaused;
        this.setFileState(fileID, {
          isPaused: isPaused
        });
        this.emit('upload-pause', fileID, isPaused);
                SRTlib.send("]},");

        return isPaused;
                SRTlib.send("]},");

      };
      _proto.pauseAll = function pauseAll() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.pauseAll.pauseAll2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var updatedFiles = _extends({}, this.getState().files);
        var inProgressUpdatedFiles = Object.keys(updatedFiles).filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.pauseAll.pauseAll.inProgressUpdatedFiles.filter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
                    SRTlib.send("]},");

        });
        inProgressUpdatedFiles.forEach(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.pauseAll.pauseAll", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var updatedFile = _extends({}, updatedFiles[file], {
            isPaused: true
          });
          updatedFiles[file] = updatedFile;
                    SRTlib.send("]},");

        });
        this.setState({
          files: updatedFiles
        });
        this.emit('pause-all');
                SRTlib.send("]},");

      };
      _proto.resumeAll = function resumeAll() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.resumeAll.resumeAll2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var updatedFiles = _extends({}, this.getState().files);
        var inProgressUpdatedFiles = Object.keys(updatedFiles).filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.resumeAll.resumeAll.inProgressUpdatedFiles.filter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
                    SRTlib.send("]},");

        });
        inProgressUpdatedFiles.forEach(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.resumeAll.resumeAll", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var updatedFile = _extends({}, updatedFiles[file], {
            isPaused: false,
            error: null
          });
          updatedFiles[file] = updatedFile;
                    SRTlib.send("]},");

        });
        this.setState({
          files: updatedFiles
        });
        this.emit('resume-all');
                SRTlib.send("]},");

      };
      _proto.retryAll = function retryAll() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.retryAll.retryAll2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var updatedFiles = _extends({}, this.getState().files);
        var filesToRetry = Object.keys(updatedFiles).filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.retryAll.retryAll.filesToRetry.filter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return updatedFiles[file].error;
                    SRTlib.send("]},");

        });
        filesToRetry.forEach(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.retryAll.retryAll", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var updatedFile = _extends({}, updatedFiles[file], {
            isPaused: false,
            error: null
          });
          updatedFiles[file] = updatedFile;
                    SRTlib.send("]},");

        });
        this.setState({
          files: updatedFiles,
          error: null
        });
        this.emit('retry-all', filesToRetry);
        var uploadID = this._createUpload(filesToRetry, {
          forceAllowNewUpload: true
        });
                SRTlib.send("]},");

        return this._runUpload(uploadID);
                SRTlib.send("]},");

      };
      _proto.cancelAll = function cancelAll() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.cancelAll.cancelAll", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.emit('cancel-all');
        var _this$getState5 = this.getState(), files = _this$getState5.files;
        var fileIDs = Object.keys(files);
        if (fileIDs.length) {
          this.removeFiles(fileIDs);
        }
        this.setState({
          totalProgress: 0,
          error: null
        });
                SRTlib.send("]},");

      };
      _proto.retryUpload = function retryUpload(fileID) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.retryUpload.retryUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.setFileState(fileID, {
          error: null,
          isPaused: false
        });
        this.emit('upload-retry', fileID);
        var uploadID = this._createUpload([fileID], {
          forceAllowNewUpload: true
        });
                SRTlib.send("]},");

        return this._runUpload(uploadID);
                SRTlib.send("]},");

      };
      _proto.reset = function reset() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.reset.reset", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.cancelAll();
                SRTlib.send("]},");

      };
      _proto._calculateProgress = function _calculateProgress(file, data) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._calculateProgress._calculateProgress", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        if (!this.getFile(file.id)) {
          this.log("Not setting progress for a file that has been removed: " + file.id);
                    SRTlib.send("]},");

          return;
        }
        var canHavePercentage = isFinite(data.bytesTotal) && data.bytesTotal > 0;
        this.setFileState(file.id, {
          progress: _extends({}, this.getFile(file.id).progress, {
            bytesUploaded: data.bytesUploaded,
            bytesTotal: data.bytesTotal,
            percentage: canHavePercentage ? Math.round(data.bytesUploaded / data.bytesTotal * 100) : 0
          })
        });
        this._calculateTotalProgress();
                SRTlib.send("]},");

      };
      _proto._calculateTotalProgress = function _calculateTotalProgress() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._calculateTotalProgress._calculateTotalProgress3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var files = this.getFiles();
        var inProgress = files.filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.inProgress", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return file.progress.uploadStarted || file.progress.preprocess || file.progress.postprocess;
                    SRTlib.send("]},");

        });
        if (inProgress.length === 0) {
          this.emit('progress', 0);
          this.setState({
            totalProgress: 0
          });
                    SRTlib.send("]},");

          return;
        }
        var sizedFiles = inProgress.filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.sizedFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return file.progress.bytesTotal != null;
                    SRTlib.send("]},");

        });
        var unsizedFiles = inProgress.filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.unsizedFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return file.progress.bytesTotal == null;
                    SRTlib.send("]},");

        });
        if (sizedFiles.length === 0) {
          var progressMax = inProgress.length * 100;
          var currentProgress = unsizedFiles.reduce(function (acc, file) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.currentProgress", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                        SRTlib.send("]},");

            return acc + file.progress.percentage;
                        SRTlib.send("]},");

          }, 0);
          var _totalProgress = Math.round(currentProgress / progressMax * 100);
          this.setState({
            totalProgress: _totalProgress
          });
                    SRTlib.send("]},");

          return;
        }
        var totalSize = sizedFiles.reduce(function (acc, file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.totalSize", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                    SRTlib.send("]},");

          return acc + file.progress.bytesTotal;
                    SRTlib.send("]},");

        }, 0);
        var averageSize = totalSize / sizedFiles.length;
        totalSize += averageSize * unsizedFiles.length;
        var uploadedSize = 0;
        sizedFiles.forEach(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._calculateTotalProgress._calculateTotalProgress", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          uploadedSize += file.progress.bytesUploaded;
                    SRTlib.send("]},");

        });
        unsizedFiles.forEach(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._calculateTotalProgress._calculateTotalProgress2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          uploadedSize += averageSize * (file.progress.percentage || 0) / 100;
                    SRTlib.send("]},");

        });
        var totalProgress = totalSize === 0 ? 0 : Math.round(uploadedSize / totalSize * 100);
        if (totalProgress > 100) {
          totalProgress = 100;
        }
        this.setState({
          totalProgress: totalProgress
        });
        this.emit('progress', totalProgress);
                SRTlib.send("]},");

      };
      _proto._addListeners = function _addListeners() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this6 = this;
        this.on('error', function (error) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var errorMsg = 'Unknown error';
          if (error.message) {
            errorMsg = error.message;
          }
          if (error.details) {
            errorMsg += ' ' + error.details;
          }
          _this6.setState({
            error: errorMsg
          });
                    SRTlib.send("]},");

        });
        this.on('upload-error', function (file, error, response) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          var errorMsg = 'Unknown error';
          if (error.message) {
            errorMsg = error.message;
          }
          if (error.details) {
            errorMsg += ' ' + error.details;
          }
          _this6.setFileState(file.id, {
            error: errorMsg,
            response: response
          });
          _this6.setState({
            error: error.message
          });
          if (typeof error === 'object' && error.message) {
            var newError = new Error(error.message);
            newError.details = error.message;
            if (error.details) {
              newError.details += ' ' + error.details;
            }
            newError.message = _this6.i18n('failedToUpload', {
              file: file.name
            });
            _this6._showOrLogErrorAndThrow(newError, {
              throwErr: false
            });
          } else {
            _this6._showOrLogErrorAndThrow(error, {
              throwErr: false
            });
          }
                    SRTlib.send("]},");

        });
        this.on('upload', function () {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          _this6.setState({
            error: null
          });
                    SRTlib.send("]},");

        });
        this.on('upload-started', function (file, upload) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (!_this6.getFile(file.id)) {
            _this6.log("Not setting progress for a file that has been removed: " + file.id);
                        SRTlib.send("]},");

            return;
          }
          _this6.setFileState(file.id, {
            progress: {
              uploadStarted: Date.now(),
              uploadComplete: false,
              percentage: 0,
              bytesUploaded: 0,
              bytesTotal: file.size
            }
          });
                    SRTlib.send("]},");

        });
        this.on('upload-progress', this._calculateProgress);
        this.on('upload-success', function (file, uploadResp) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (!_this6.getFile(file.id)) {
            _this6.log("Not setting progress for a file that has been removed: " + file.id);
                        SRTlib.send("]},");

            return;
          }
          var currentProgress = _this6.getFile(file.id).progress;
          _this6.setFileState(file.id, {
            progress: _extends({}, currentProgress, {
              uploadComplete: true,
              percentage: 100,
              bytesUploaded: currentProgress.bytesTotal
            }),
            response: uploadResp,
            uploadURL: uploadResp.uploadURL,
            isPaused: false
          });
          _this6._calculateTotalProgress();
                    SRTlib.send("]},");

        });
        this.on('preprocess-progress', function (file, progress) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (!_this6.getFile(file.id)) {
            _this6.log("Not setting progress for a file that has been removed: " + file.id);
                        SRTlib.send("]},");

            return;
          }
          _this6.setFileState(file.id, {
            progress: _extends({}, _this6.getFile(file.id).progress, {
              preprocess: progress
            })
          });
                    SRTlib.send("]},");

        });
        this.on('preprocess-complete', function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (!_this6.getFile(file.id)) {
            _this6.log("Not setting progress for a file that has been removed: " + file.id);
                        SRTlib.send("]},");

            return;
          }
          var files = _extends({}, _this6.getState().files);
          files[file.id] = _extends({}, files[file.id], {
            progress: _extends({}, files[file.id].progress)
          });
          delete files[file.id].progress.preprocess;
          _this6.setState({
            files: files
          });
                    SRTlib.send("]},");

        });
        this.on('postprocess-progress', function (file, progress) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on8", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (!_this6.getFile(file.id)) {
            _this6.log("Not setting progress for a file that has been removed: " + file.id);
                        SRTlib.send("]},");

            return;
          }
          _this6.setFileState(file.id, {
            progress: _extends({}, _this6.getState().files[file.id].progress, {
              postprocess: progress
            })
          });
                    SRTlib.send("]},");

        });
        this.on('postprocess-complete', function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (!_this6.getFile(file.id)) {
            _this6.log("Not setting progress for a file that has been removed: " + file.id);
                        SRTlib.send("]},");

            return;
          }
          var files = _extends({}, _this6.getState().files);
          files[file.id] = _extends({}, files[file.id], {
            progress: _extends({}, files[file.id].progress)
          });
          delete files[file.id].progress.postprocess;
          _this6.setState({
            files: files
          });
                    SRTlib.send("]},");

        });
        this.on('restored', function () {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on10", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          _this6._calculateTotalProgress();
                    SRTlib.send("]},");

        });
        if (typeof window !== 'undefined' && window.addEventListener) {
          window.addEventListener('online', function () {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return _this6.updateOnlineStatus();
                        SRTlib.send("]},");

          });
          window.addEventListener('offline', function () {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return _this6.updateOnlineStatus();
                        SRTlib.send("]},");

          });
          setTimeout(function () {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.setTimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return _this6.updateOnlineStatus();
                        SRTlib.send("]},");

          }, 3000);
        }
                SRTlib.send("]},");

      };
      _proto.updateOnlineStatus = function updateOnlineStatus() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.updateOnlineStatus.updateOnlineStatus", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var online = typeof window.navigator.onLine !== 'undefined' ? window.navigator.onLine : true;
        if (!online) {
          this.emit('is-offline');
          this.info(this.i18n('noInternetConnection'), 'error', 0);
          this.wasOffline = true;
        } else {
          this.emit('is-online');
          if (this.wasOffline) {
            this.emit('back-online');
            this.info(this.i18n('connectedToInternet'), 'success', 3000);
            this.wasOffline = false;
          }
        }
                SRTlib.send("]},");

      };
      _proto.getID = function getID() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.getID.getID", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

        return this.opts.id;
                SRTlib.send("]},");

      };
      _proto.use = function use(Plugin, opts) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.use.use", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        if (typeof Plugin !== 'function') {
          var msg = "Expected a plugin class, but got " + (Plugin === null ? 'null' : typeof Plugin) + "." + ' Please verify that the plugin was imported and spelled correctly.';
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new TypeError(msg);
        }
        var plugin = new Plugin(this, opts);
        var pluginId = plugin.id;
        this.plugins[plugin.type] = this.plugins[plugin.type] || [];
        if (!pluginId) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new Error('Your plugin must have an id');
        }
        if (!plugin.type) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new Error('Your plugin must have a type');
        }
        var existsPluginAlready = this.getPlugin(pluginId);
        if (existsPluginAlready) {
          var _msg = "Already found a plugin named '" + existsPluginAlready.id + "'. " + ("Tried to use: '" + pluginId + "'.\n") + 'Uppy plugins must have unique `id` options. See https://uppy.io/docs/plugins/#id.';
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new Error(_msg);
        }
        if (Plugin.VERSION) {
          this.log("Using " + pluginId + " v" + Plugin.VERSION);
        }
        this.plugins[plugin.type].push(plugin);
        plugin.install();
                SRTlib.send("]},");

        return this;
                SRTlib.send("]},");

      };
      _proto.getPlugin = function getPlugin(id) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.getPlugin.getPlugin", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var foundPlugin = null;
        this.iteratePlugins(function (plugin) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.getPlugin.getPlugin.iteratePlugins", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (plugin.id === id) {
            foundPlugin = plugin;
                        SRTlib.send("]},");

            return false;
          }
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

        return foundPlugin;
                SRTlib.send("]},");

      };
      _proto.iteratePlugins = function iteratePlugins(method) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.iteratePlugins.iteratePlugins", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this7 = this;
        Object.keys(this.plugins).forEach(function (pluginType) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.iteratePlugins.iteratePlugins.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this7.plugins[pluginType].forEach(method);
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      };
      _proto.removePlugin = function removePlugin(instance) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removePlugin.removePlugin", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.log("Removing plugin " + instance.id);
        this.emit('plugin-remove', instance);
        if (instance.uninstall) {
          instance.uninstall();
        }
        var list = this.plugins[instance.type].slice();
        var index = list.indexOf(instance);
        if (index !== -1) {
          list.splice(index, 1);
          this.plugins[instance.type] = list;
        }
        var updatedState = this.getState();
        delete updatedState.plugins[instance.id];
        this.setState(updatedState);
                SRTlib.send("]},");

      };
      _proto.close = function close() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.close.close", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this8 = this;
        this.log("Closing Uppy instance " + this.opts.id + ": removing all files and uninstalling plugins");
        this.reset();
        this._storeUnsubscribe();
        this.iteratePlugins(function (plugin) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.close.close.iteratePlugins", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this8.removePlugin(plugin);
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      };
      _proto.info = function info(message, type, duration) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.info.info", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        if (type === void 0) {
          type = 'info';
        }
        if (duration === void 0) {
          duration = 3000;
        }
        var isComplexMessage = typeof message === 'object';
        this.setState({
          info: {
            isHidden: false,
            type: type,
            message: isComplexMessage ? message.message : message,
            details: isComplexMessage ? message.details : null
          }
        });
        this.emit('info-visible');
        clearTimeout(this.infoTimeoutID);
        if (duration === 0) {
          this.infoTimeoutID = undefined;
                    SRTlib.send("]},");

          return;
        }
        this.infoTimeoutID = setTimeout(this.hideInfo, duration);
                SRTlib.send("]},");

      };
      _proto.hideInfo = function hideInfo() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.hideInfo.hideInfo", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var newInfo = _extends({}, this.getState().info, {
          isHidden: true
        });
        this.setState({
          info: newInfo
        });
        this.emit('info-hidden');
                SRTlib.send("]},");

      };
      _proto.log = function log(message, type) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.log.log", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var logger = this.opts.logger;
        switch (type) {
          case 'error':
            logger.error(message);
            break;
          case 'warning':
            logger.warn(message);
            break;
          default:
            logger.debug(message);
            break;
        }
                SRTlib.send("]},");

      };
      _proto.run = function run() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.run.run", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.log('Calling run() is no longer necessary.', 'warning');
                SRTlib.send("]},");

        return this;
                SRTlib.send("]},");

      };
      _proto.restore = function restore(uploadID) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.restore.restore", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.log("Core: attempting to restore upload \"" + uploadID + "\"");
        if (!this.getState().currentUploads[uploadID]) {
          this._removeUpload(uploadID);
                    SRTlib.send("]},");

          return Promise.reject(new Error('Nonexistent upload'));
        }
                SRTlib.send("]},");

        return this._runUpload(uploadID);
                SRTlib.send("]},");

      };
      _proto._createUpload = function _createUpload(fileIDs, opts) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._createUpload._createUpload", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _extends4;
        if (opts === void 0) {
          opts = {};
        }
        var _opts = opts, _opts$forceAllowNewUp = _opts.forceAllowNewUpload, forceAllowNewUpload = _opts$forceAllowNewUp === void 0 ? false : _opts$forceAllowNewUp;
        var _this$getState6 = this.getState(), allowNewUpload = _this$getState6.allowNewUpload, currentUploads = _this$getState6.currentUploads;
        if (!allowNewUpload && !forceAllowNewUpload) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new Error('Cannot create a new upload: already uploading.');
        }
        var uploadID = cuid();
        this.emit('upload', {
          id: uploadID,
          fileIDs: fileIDs
        });
        this.setState({
          allowNewUpload: this.opts.allowMultipleUploads !== false,
          currentUploads: _extends({}, currentUploads, (_extends4 = {}, _extends4[uploadID] = {
            fileIDs: fileIDs,
            step: 0,
            result: {}
          }, _extends4))
        });
                SRTlib.send("]},");

        return uploadID;
                SRTlib.send("]},");

      };
      _proto._getUpload = function _getUpload(uploadID) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._getUpload._getUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this$getState7 = this.getState(), currentUploads = _this$getState7.currentUploads;
                SRTlib.send("]},");

        return currentUploads[uploadID];
                SRTlib.send("]},");

      };
      _proto.addResultData = function addResultData(uploadID, data) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.addResultData.addResultData", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _extends5;
        if (!this._getUpload(uploadID)) {
          this.log("Not setting result for an upload that has been removed: " + uploadID);
                    SRTlib.send("]},");

          return;
        }
        var currentUploads = this.getState().currentUploads;
        var currentUpload = _extends({}, currentUploads[uploadID], {
          result: _extends({}, currentUploads[uploadID].result, data)
        });
        this.setState({
          currentUploads: _extends({}, currentUploads, (_extends5 = {}, _extends5[uploadID] = currentUpload, _extends5))
        });
                SRTlib.send("]},");

      };
      _proto._removeUpload = function _removeUpload(uploadID) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._removeUpload._removeUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var currentUploads = _extends({}, this.getState().currentUploads);
        delete currentUploads[uploadID];
        this.setState({
          currentUploads: currentUploads
        });
                SRTlib.send("]},");

      };
      _proto._runUpload = function _runUpload(uploadID) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this9 = this;
        var uploadData = this.getState().currentUploads[uploadID];
        var restoreStep = uploadData.step;
        var steps = [].concat(this.preProcessors, this.uploaders, this.postProcessors);
        var lastStep = Promise.resolve();
        steps.forEach(function (fn, step) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (step < restoreStep) {
                        SRTlib.send("]},");

            return;
          }
          lastStep = lastStep.then(function () {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload.lastStep.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            var _extends6;
            var _this9$getState = _this9.getState(), currentUploads = _this9$getState.currentUploads;
            var currentUpload = currentUploads[uploadID];
            if (!currentUpload) {
                            SRTlib.send("]},");

              return;
            }
            var updatedUpload = _extends({}, currentUpload, {
              step: step
            });
            _this9.setState({
              currentUploads: _extends({}, currentUploads, (_extends6 = {}, _extends6[uploadID] = updatedUpload, _extends6))
            });
                        SRTlib.send("]},");

            return fn(updatedUpload.fileIDs, uploadID);
                        SRTlib.send("]},");

          }).then(function (result) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload.lastStep.then2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return null;
                        SRTlib.send("]},");

          });
                    SRTlib.send("]},");

        });
        lastStep.catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this9.emit('error', err, uploadID);
          _this9._removeUpload(uploadID);
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

        return lastStep.then(function () {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var _this9$getState2 = _this9.getState(), currentUploads = _this9$getState2.currentUploads;
          var currentUpload = currentUploads[uploadID];
          if (!currentUpload) {
                        SRTlib.send("]},");

            return;
          }
          var files = currentUpload.fileIDs.map(function (fileID) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.files.currentUpload.fileIDs.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return _this9.getFile(fileID);
                        SRTlib.send("]},");

          });
          var successful = files.filter(function (file) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.successful", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return !file.error;
                        SRTlib.send("]},");

          });
          var failed = files.filter(function (file) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.failed", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return file.error;
                        SRTlib.send("]},");

          });
          _this9.addResultData(uploadID, {
            successful: successful,
            failed: failed,
            uploadID: uploadID
          });
                    SRTlib.send("]},");

        }).then(function () {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var _this9$getState3 = _this9.getState(), currentUploads = _this9$getState3.currentUploads;
          if (!currentUploads[uploadID]) {
                        SRTlib.send("]},");

            return;
          }
          var currentUpload = currentUploads[uploadID];
          var result = currentUpload.result;
          _this9.emit('complete', result);
          _this9._removeUpload(uploadID);
                    SRTlib.send("]},");

          return result;
                    SRTlib.send("]},");

        }).then(function (result) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (result == null) {
            _this9.log("Not setting result for an upload that has been removed: " + uploadID);
          }
                    SRTlib.send("]},");

          return result;
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      };
      _proto.upload = function upload() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.upload.upload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this10 = this;
        if (!this.plugins.uploader) {
          this.log('No uploader type plugins are used', 'warning');
        }
        var files = this.getState().files;
        var onBeforeUploadResult = this.opts.onBeforeUpload(files);
        if (onBeforeUploadResult === false) {
                    SRTlib.send("]},");

          return Promise.reject(new Error('Not starting the upload because onBeforeUpload returned false'));
        }
        if (onBeforeUploadResult && typeof onBeforeUploadResult === 'object') {
          files = onBeforeUploadResult;
          this.setState({
            files: files
          });
        }
                SRTlib.send("]},");

        return Promise.resolve().then(function () {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.then.catch.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

          return _this10._checkMinNumberOfFiles(files);
                    SRTlib.send("]},");

        }).catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this10._showOrLogErrorAndThrow(err);
                    SRTlib.send("]},");

        }).then(function () {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var _this10$getState = _this10.getState(), currentUploads = _this10$getState.currentUploads;
          var currentlyUploadingFiles = Object.keys(currentUploads).reduce(function (prev, curr) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.currentlyUploadingFiles.reduce", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                        SRTlib.send("]},");

            return prev.concat(currentUploads[curr].fileIDs);
                        SRTlib.send("]},");

          }, []);
          var waitingFileIDs = [];
          Object.keys(files).forEach(function (fileID) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            var file = _this10.getFile(fileID);
            if (!file.progress.uploadStarted && currentlyUploadingFiles.indexOf(fileID) === -1) {
              waitingFileIDs.push(file.id);
            }
                        SRTlib.send("]},");

          });
          var uploadID = _this10._createUpload(waitingFileIDs);
                    SRTlib.send("]},");

          return _this10._runUpload(uploadID);
                    SRTlib.send("]},");

        }).catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this10._showOrLogErrorAndThrow(err, {
            showInformer: false
          });
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      };
      _createClass(Uppy, [{
        key: "state",
        get: function get() {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._createClass.get.get", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

          return this.getState();
                    SRTlib.send("]},");

        }
      }]);
            SRTlib.send("]},");

      return Uppy;
            SRTlib.send("]},");

    })();
    Uppy.VERSION = require('../package.json').version;
    module.exports = function (opts) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return new Uppy(opts);
            SRTlib.send("]},");

    };
    module.exports.Uppy = Uppy;
    module.exports.Plugin = Plugin;
    module.exports.debugLogger = debugLogger;
        SRTlib.send("]},");

  }, {
    "../package.json": 23,
    "./Plugin": 18,
    "./loggers": 20,
    "./supportsUploadProgress": 21,
    "@transloadit/prettier-bytes": 22,
    "@uppy/store-default": 26,
    "@uppy/utils/lib/Translator": 31,
    "@uppy/utils/lib/generateFileID": 34,
    "@uppy/utils/lib/getFileNameAndExtension": 35,
    "@uppy/utils/lib/getFileType": 36,
    "cuid": 3,
    "lodash.throttle": 10,
    "mime-match": 12,
    "namespace-emitter": 13
  }],
  20: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey27", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var getTimeStamp = require('@uppy/utils/lib/getTimeStamp');
    var justErrorsLogger = {
      debug: function debug() {
                SRTlib.send(`{ "anonymous": true, "function": "justErrorsLogger.debug.debug", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

      },
      warn: function warn() {
                SRTlib.send(`{ "anonymous": true, "function": "justErrorsLogger.warn.warn", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

      },
      error: function error() {
                SRTlib.send(`{ "anonymous": true, "function": "justErrorsLogger.error.error", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _console;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
                SRTlib.send("]},");

        return (_console = console).error.apply(_console, ["[Uppy] [" + getTimeStamp() + "]"].concat(args));
                SRTlib.send("]},");

      }
    };
    var debugLogger = {
      debug: function debug() {
                SRTlib.send(`{ "anonymous": true, "function": "debugLogger.debug.debug", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var debug = console.debug || console.log;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        debug.call.apply(debug, [console, "[Uppy] [" + getTimeStamp() + "]"].concat(args));
                SRTlib.send("]},");

      },
      warn: function warn() {
                SRTlib.send(`{ "anonymous": true, "function": "debugLogger.warn.warn", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _console2;
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
                SRTlib.send("]},");

        return (_console2 = console).warn.apply(_console2, ["[Uppy] [" + getTimeStamp() + "]"].concat(args));
                SRTlib.send("]},");

      },
      error: function error() {
                SRTlib.send(`{ "anonymous": true, "function": "debugLogger.error.error", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _console3;
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
                SRTlib.send("]},");

        return (_console3 = console).error.apply(_console3, ["[Uppy] [" + getTimeStamp() + "]"].concat(args));
                SRTlib.send("]},");

      }
    };
    module.exports = {
      justErrorsLogger: justErrorsLogger,
      debugLogger: debugLogger
    };
        SRTlib.send("]},");

  }, {
    "@uppy/utils/lib/getTimeStamp": 37
  }],
  21: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey28", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function supportsUploadProgress(userAgent) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.supportsUploadProgress", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (userAgent == null) {
        userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : null;
      }
      if (!userAgent) {
                SRTlib.send("]},");

        return true;
      }
      var m = (/Edge\/(\d+\.\d+)/).exec(userAgent);
      if (!m) {
                SRTlib.send("]},");

        return true;
      }
      var edgeVersion = m[1];
      var _edgeVersion$split = edgeVersion.split('.'), major = _edgeVersion$split[0], minor = _edgeVersion$split[1];
      major = parseInt(major, 10);
      minor = parseInt(minor, 10);
      if (major < 15 || major === 15 && minor < 15063) {
                SRTlib.send("]},");

        return true;
      }
      if (major > 18 || major === 18 && minor >= 18218) {
                SRTlib.send("]},");

        return true;
      }
            SRTlib.send("]},");

      return false;
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }, {}],
  22: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey29", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function prettierBytes(num) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.prettierBytes", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (typeof num !== 'number' || isNaN(num)) {
                SRTlib.send("]},");

                SRTlib.send("]},");

        throw new TypeError('Expected a number, got ' + typeof num);
      }
      var neg = num < 0;
      var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      if (neg) {
        num = -num;
      }
      if (num < 1) {
                SRTlib.send("]},");

        return (neg ? '-' : '') + num + ' B';
      }
      var exponent = Math.min(Math.floor(Math.log(num) / Math.log(1024)), units.length - 1);
      num = Number(num / Math.pow(1024, exponent));
      var unit = units[exponent];
      if (num >= 10 || num % 1 === 0) {
                SRTlib.send("]},");

        return (neg ? '-' : '') + num.toFixed(0) + ' ' + unit;
      } else {
                SRTlib.send("]},");

        return (neg ? '-' : '') + num.toFixed(1) + ' ' + unit;
      }
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }, {}],
  23: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey30", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = {
      "name": "@uppy/core",
      "description": "Core module for the extensible JavaScript file upload widget with support for drag&drop, resumable uploads, previews, restrictions, file processing/encoding, remote providers like Instagram, Dropbox, Google Drive, S3 and more :dog:",
      "version": "1.10.5",
      "license": "MIT",
      "main": "lib/index.js",
      "style": "dist/style.min.css",
      "types": "types/index.d.ts",
      "keywords": ["file uploader", "uppy", "uppy-plugin"],
      "homepage": "https://uppy.io",
      "bugs": {
        "url": "https://github.com/transloadit/uppy/issues"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/transloadit/uppy.git"
      },
      "dependencies": {
        "@transloadit/prettier-bytes": "0.0.7",
        "@uppy/store-default": "file:../store-default",
        "@uppy/utils": "file:../utils",
        "cuid": "^2.1.1",
        "lodash.throttle": "^4.1.1",
        "mime-match": "^1.0.2",
        "namespace-emitter": "^2.0.1",
        "preact": "8.2.9"
      }
    };
        SRTlib.send("]},");

  }, {}],
  24: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey31", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var _class, _temp;
    function _extends() {
            SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_extends3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send("]},");

        return target;
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

      return _extends.apply(this, arguments);
            SRTlib.send("]},");

    }
    function _assertThisInitialized(self) {
            SRTlib.send(`{ "anonymous": false, "function": "_assertThisInitialized", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (self === void 0) {
                SRTlib.send("]},");

                SRTlib.send("]},");

        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
            SRTlib.send("]},");

      return self;
            SRTlib.send("]},");

    }
    function _inheritsLoose(subClass, superClass) {
            SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
            SRTlib.send("]},");

    }
    var _require = require('@uppy/core'), Plugin = _require.Plugin;
    var toArray = require('@uppy/utils/lib/toArray');
    var Translator = require('@uppy/utils/lib/Translator');
    var _require2 = require('preact'), h = _require2.h;
    module.exports = (_temp = _class = (function (_Plugin) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _inheritsLoose(FileInput, _Plugin);
      function FileInput(uppy, opts) {
                SRTlib.send(`{ "anonymous": false, "function": "FileInput", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _this;
        _this = _Plugin.call(this, uppy, opts) || this;
        _this.id = _this.opts.id || 'FileInput';
        _this.title = 'File Input';
        _this.type = 'acquirer';
        _this.defaultLocale = {
          strings: {
            chooseFiles: 'Choose files'
          }
        };
        var defaultOptions = {
          target: null,
          pretty: true,
          inputName: 'files[]'
        };
        _this.opts = _extends({}, defaultOptions, {}, opts);
        _this.i18nInit();
        _this.render = _this.render.bind(_assertThisInitialized(_this));
        _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
        _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
                SRTlib.send("]},");

        return _this;
                SRTlib.send("]},");

      }
      var _proto = FileInput.prototype;
      _proto.setOptions = function setOptions(newOpts) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.setOptions.setOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _Plugin.prototype.setOptions.call(this, newOpts);
        this.i18nInit();
                SRTlib.send("]},");

      };
      _proto.i18nInit = function i18nInit() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.i18nInit.i18nInit", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
        this.i18n = this.translator.translate.bind(this.translator);
        this.i18nArray = this.translator.translateArray.bind(this.translator);
        this.setPluginState();
                SRTlib.send("]},");

      };
      _proto.addFiles = function addFiles(files) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.addFiles.addFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this2 = this;
        var descriptors = files.map(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.addFiles.addFiles.descriptors", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return {
            source: _this2.id,
            name: file.name,
            type: file.type,
            data: file
          };
                    SRTlib.send("]},");

        });
        try {
          this.uppy.addFiles(descriptors);
        } catch (err) {
          this.uppy.log(err);
        }
                SRTlib.send("]},");

      };
      _proto.handleInputChange = function handleInputChange(event) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleInputChange.handleInputChange", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.uppy.log('[FileInput] Something selected through input...');
        var files = toArray(event.target.files);
        this.addFiles(files);
        event.target.value = null;
                SRTlib.send("]},");

      };
      _proto.handleClick = function handleClick(ev) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleClick.handleClick", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.input.click();
                SRTlib.send("]},");

      };
      _proto.render = function render(state) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.render.render", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this3 = this;
        var hiddenInputStyle = {
          width: '0.1px',
          height: '0.1px',
          opacity: 0,
          overflow: 'hidden',
          position: 'absolute',
          zIndex: -1
        };
        var restrictions = this.uppy.opts.restrictions;
        var accept = restrictions.allowedFileTypes ? restrictions.allowedFileTypes.join(',') : null;
                SRTlib.send("]},");

        return h("div", {
          class: "uppy-Root uppy-FileInput-container"
        }, h("input", {
          class: "uppy-FileInput-input",
          style: this.opts.pretty && hiddenInputStyle,
          type: "file",
          name: this.opts.inputName,
          onchange: this.handleInputChange,
          multiple: restrictions.maxNumberOfFiles !== 1,
          accept: accept,
          ref: function ref(input) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.render.render.ReturnStatement.h.h.ref.ref", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            _this3.input = input;
                        SRTlib.send("]},");

          }
        }), this.opts.pretty && h("button", {
          class: "uppy-FileInput-btn",
          type: "button",
          onclick: this.handleClick
        }, this.i18n('chooseFiles')));
                SRTlib.send("]},");

      };
      _proto.install = function install() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var target = this.opts.target;
        if (target) {
          this.mount(target, this);
        }
                SRTlib.send("]},");

      };
      _proto.uninstall = function uninstall() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uninstall.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.unmount();
                SRTlib.send("]},");

      };
            SRTlib.send("]},");

      return FileInput;
            SRTlib.send("]},");

    })(Plugin), _class.VERSION = require('../package.json').version, _temp);
        SRTlib.send("]},");

  }, {
    "../package.json": 25,
    "@uppy/core": 19,
    "@uppy/utils/lib/Translator": 31,
    "@uppy/utils/lib/toArray": 43,
    "preact": 14
  }],
  25: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey32", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = {
      "name": "@uppy/file-input",
      "description": "Simple UI of a file input button that works with Uppy right out of the box",
      "version": "1.4.12",
      "license": "MIT",
      "main": "lib/index.js",
      "style": "dist/style.min.css",
      "types": "types/index.d.ts",
      "keywords": ["file uploader", "upload", "uppy", "uppy-plugin", "file-input"],
      "homepage": "https://uppy.io",
      "bugs": {
        "url": "https://github.com/transloadit/uppy/issues"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/transloadit/uppy.git"
      },
      "dependencies": {
        "@uppy/utils": "file:../utils",
        "preact": "8.2.9"
      },
      "peerDependencies": {
        "@uppy/core": "^1.0.0"
      }
    };
        SRTlib.send("]},");

  }, {}],
  26: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey33", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    function _extends() {
            SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_extends4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send("]},");

        return target;
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

      return _extends.apply(this, arguments);
            SRTlib.send("]},");

    }
    var DefaultStore = (function () {
            SRTlib.send(`{ "anonymous": true, "function": "DefaultStore", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      function DefaultStore() {
                SRTlib.send(`{ "anonymous": false, "function": "DefaultStore", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.state = {};
        this.callbacks = [];
                SRTlib.send("]},");

      }
      var _proto = DefaultStore.prototype;
      _proto.getState = function getState() {
                SRTlib.send(`{ "anonymous": true, "function": "DefaultStore._proto.getState.getState", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

        return this.state;
                SRTlib.send("]},");

      };
      _proto.setState = function setState(patch) {
                SRTlib.send(`{ "anonymous": true, "function": "DefaultStore._proto.setState.setState", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var prevState = _extends({}, this.state);
        var nextState = _extends({}, this.state, patch);
        this.state = nextState;
        this._publish(prevState, nextState, patch);
                SRTlib.send("]},");

      };
      _proto.subscribe = function subscribe(listener) {
                SRTlib.send(`{ "anonymous": true, "function": "DefaultStore._proto.subscribe.subscribe", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this = this;
        this.callbacks.push(listener);
                SRTlib.send("]},");

        return function () {
                    SRTlib.send(`{ "anonymous": true, "function": "DefaultStore._proto.subscribe.subscribe.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          _this.callbacks.splice(_this.callbacks.indexOf(listener), 1);
                    SRTlib.send("]},");

        };
                SRTlib.send("]},");

      };
      _proto._publish = function _publish() {
                SRTlib.send(`{ "anonymous": true, "function": "DefaultStore._proto._publish._publish", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        this.callbacks.forEach(function (listener) {
                    SRTlib.send(`{ "anonymous": true, "function": "DefaultStore._proto._publish._publish.callbacks.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          listener.apply(void 0, args);
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      };
            SRTlib.send("]},");

      return DefaultStore;
            SRTlib.send("]},");

    })();
    DefaultStore.VERSION = require('../package.json').version;
    module.exports = function defaultStore() {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.defaultStore", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

      return new DefaultStore();
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }, {
    "../package.json": 27
  }],
  27: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey34", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = {
      "name": "@uppy/store-default",
      "description": "The default simple object-based store for Uppy.",
      "version": "1.2.1",
      "license": "MIT",
      "main": "lib/index.js",
      "types": "types/index.d.ts",
      "keywords": ["file uploader", "uppy", "uppy-store"],
      "homepage": "https://uppy.io",
      "bugs": {
        "url": "https://github.com/transloadit/uppy/issues"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/transloadit/uppy.git"
      }
    };
        SRTlib.send("]},");

  }, {}],
  28: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey35", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var _class, _temp;
    function _extends() {
            SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_extends5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send("]},");

        return target;
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

      return _extends.apply(this, arguments);
            SRTlib.send("]},");

    }
    function _inheritsLoose(subClass, superClass) {
            SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
            SRTlib.send("]},");

    }
    var _require = require('@uppy/core'), Plugin = _require.Plugin;
    var Translator = require('@uppy/utils/lib/Translator');
    var dataURItoBlob = require('@uppy/utils/lib/dataURItoBlob');
    var isObjectURL = require('@uppy/utils/lib/isObjectURL');
    var isPreviewSupported = require('@uppy/utils/lib/isPreviewSupported');
    var MathLog2 = require('math-log2');
    var exifr = require('exifr/dist/mini.legacy.umd.js');
    module.exports = (_temp = _class = (function (_Plugin) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _inheritsLoose(ThumbnailGenerator, _Plugin);
      function ThumbnailGenerator(uppy, opts) {
                SRTlib.send(`{ "anonymous": false, "function": "ThumbnailGenerator", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _this;
        _this = _Plugin.call(this, uppy, opts) || this;
        _this.onFileAdded = function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "_this.onFileAdded", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (!file.preview && isPreviewSupported(file.type) && !file.isRemote) {
            _this.addToQueue(file.id);
          }
                    SRTlib.send("]},");

        };
        _this.onCancelRequest = function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "_this.onCancelRequest", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var index = _this.queue.indexOf(file.id);
          if (index !== -1) {
            _this.queue.splice(index, 1);
          }
                    SRTlib.send("]},");

        };
        _this.onFileRemoved = function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "_this.onFileRemoved", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var index = _this.queue.indexOf(file.id);
          if (index !== -1) {
            _this.queue.splice(index, 1);
          }
          if (file.preview && isObjectURL(file.preview)) {
            URL.revokeObjectURL(file.preview);
          }
                    SRTlib.send("]},");

        };
        _this.onRestored = function () {
                    SRTlib.send(`{ "anonymous": true, "function": "_this.onRestored2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var _this$uppy$getState = _this.uppy.getState(), files = _this$uppy$getState.files;
          var fileIDs = Object.keys(files);
          fileIDs.forEach(function (fileID) {
                        SRTlib.send(`{ "anonymous": true, "function": "_this.onRestored", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            var file = _this.uppy.getFile(fileID);
            if (!file.isRestored) {
                            SRTlib.send("]},");

              return;
            }
            if (!file.preview || isObjectURL(file.preview)) {
              _this.addToQueue(file.id);
            }
                        SRTlib.send("]},");

          });
                    SRTlib.send("]},");

        };
        _this.waitUntilAllProcessed = function (fileIDs) {
                    SRTlib.send(`{ "anonymous": true, "function": "_this.waitUntilAllProcessed2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          fileIDs.forEach(function (fileID) {
                        SRTlib.send(`{ "anonymous": true, "function": "_this.waitUntilAllProcessed", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            var file = _this.uppy.getFile(fileID);
            _this.uppy.emit('preprocess-progress', file, {
              mode: 'indeterminate',
              message: _this.i18n('generatingThumbnails')
            });
                        SRTlib.send("]},");

          });
          var emitPreprocessCompleteForAll = function emitPreprocessCompleteForAll() {
                        SRTlib.send(`{ "anonymous": false, "function": "emitPreprocessCompleteForAll", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            fileIDs.forEach(function (fileID) {
                            SRTlib.send(`{ "anonymous": true, "function": "_this.waitUntilAllProcessed.emitPreprocessCompleteForAll.emitPreprocessCompleteForAll", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              var file = _this.uppy.getFile(fileID);
              _this.uppy.emit('preprocess-complete', file);
                            SRTlib.send("]},");

            });
                        SRTlib.send("]},");

          };
                    SRTlib.send("]},");

          return new Promise(function (resolve, reject) {
                        SRTlib.send(`{ "anonymous": true, "function": "_this.waitUntilAllProcessed.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            if (_this.queueProcessing) {
              _this.uppy.once('thumbnail:all-generated', function () {
                                SRTlib.send(`{ "anonymous": true, "function": "_this.waitUntilAllProcessed.ReturnStatement._this.uppy.once", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                emitPreprocessCompleteForAll();
                resolve();
                                SRTlib.send("]},");

              });
            } else {
              emitPreprocessCompleteForAll();
              resolve();
            }
                        SRTlib.send("]},");

          });
                    SRTlib.send("]},");

        };
        _this.type = 'modifier';
        _this.id = _this.opts.id || 'ThumbnailGenerator';
        _this.title = 'Thumbnail Generator';
        _this.queue = [];
        _this.queueProcessing = false;
        _this.defaultThumbnailDimension = 200;
        _this.defaultLocale = {
          strings: {
            generatingThumbnails: 'Generating thumbnails...'
          }
        };
        var defaultOptions = {
          thumbnailWidth: null,
          thumbnailHeight: null,
          waitForThumbnailsBeforeUpload: false,
          lazy: false
        };
        _this.opts = _extends({}, defaultOptions, {}, opts);
        if (_this.opts.lazy && _this.opts.waitForThumbnailsBeforeUpload) {
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

          throw new Error('ThumbnailGenerator: The `lazy` and `waitForThumbnailsBeforeUpload` options are mutually exclusive. Please ensure at most one of them is set to `true`.');
        }
        _this.i18nInit();
                SRTlib.send("]},");

        return _this;
                SRTlib.send("]},");

      }
      var _proto = ThumbnailGenerator.prototype;
      _proto.setOptions = function setOptions(newOpts) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.setOptions.setOptions2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _Plugin.prototype.setOptions.call(this, newOpts);
        this.i18nInit();
                SRTlib.send("]},");

      };
      _proto.i18nInit = function i18nInit() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.i18nInit.i18nInit2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
        this.i18n = this.translator.translate.bind(this.translator);
        this.setPluginState();
                SRTlib.send("]},");

      };
      _proto.createThumbnail = function createThumbnail(file, targetWidth, targetHeight) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.createThumbnail.createThumbnail", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var _this2 = this;
        var originalUrl = URL.createObjectURL(file.data);
        var onload = new Promise(function (resolve, reject) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.createThumbnail.createThumbnail.onload3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          var image = new Image();
          image.src = originalUrl;
          image.addEventListener('load', function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.createThumbnail.createThumbnail.onload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            URL.revokeObjectURL(originalUrl);
            resolve(image);
                        SRTlib.send("]},");

          });
          image.addEventListener('error', function (event) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.createThumbnail.createThumbnail.onload2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            URL.revokeObjectURL(originalUrl);
            reject(event.error || new Error('Could not create thumbnail'));
                        SRTlib.send("]},");

          });
                    SRTlib.send("]},");

        });
        var orientationPromise = exifr.rotation(file.data).catch(function (_err) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.createThumbnail.createThumbnail.orientationPromise.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return 1;
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

        return Promise.all([onload, orientationPromise]).then(function (_ref) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.createThumbnail.createThumbnail.ReturnStatement.then.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var image = _ref[0], orientation = _ref[1];
          var dimensions = _this2.getProportionalDimensions(image, targetWidth, targetHeight, orientation.deg);
          var rotatedImage = _this2.rotateImage(image, orientation);
          var resizedImage = _this2.resizeImage(rotatedImage, dimensions.width, dimensions.height);
                    SRTlib.send("]},");

          return _this2.canvasToBlob(resizedImage, 'image/jpeg', 80);
                    SRTlib.send("]},");

        }).then(function (blob) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.createThumbnail.createThumbnail.ReturnStatement.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return URL.createObjectURL(blob);
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      };
      _proto.getProportionalDimensions = function getProportionalDimensions(img, width, height, rotation) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.getProportionalDimensions.getProportionalDimensions", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

        var aspect = img.width / img.height;
        if (rotation === 90 || rotation === 270) {
          aspect = img.height / img.width;
        }
        if (width != null) {
                    SRTlib.send("]},");

          return {
            width: width,
            height: Math.round(width / aspect)
          };
        }
        if (height != null) {
                    SRTlib.send("]},");

          return {
            width: Math.round(height * aspect),
            height: height
          };
        }
                SRTlib.send("]},");

        return {
          width: this.defaultThumbnailDimension,
          height: Math.round(this.defaultThumbnailDimension / aspect)
        };
                SRTlib.send("]},");

      };
      _proto.protect = function protect(image) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.protect.protect", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var ratio = image.width / image.height;
        var maxSquare = 5000000;
        var maxSize = 4096;
        var maxW = Math.floor(Math.sqrt(maxSquare * ratio));
        var maxH = Math.floor(maxSquare / Math.sqrt(maxSquare * ratio));
        if (maxW > maxSize) {
          maxW = maxSize;
          maxH = Math.round(maxW / ratio);
        }
        if (maxH > maxSize) {
          maxH = maxSize;
          maxW = Math.round(ratio * maxH);
        }
        if (image.width > maxW) {
          var canvas = document.createElement('canvas');
          canvas.width = maxW;
          canvas.height = maxH;
          canvas.getContext('2d').drawImage(image, 0, 0, maxW, maxH);
          image = canvas;
        }
                SRTlib.send("]},");

        return image;
                SRTlib.send("]},");

      };
      _proto.resizeImage = function resizeImage(image, targetWidth, targetHeight) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.resizeImage.resizeImage", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        image = this.protect(image);
        var steps = Math.ceil(MathLog2(image.width / targetWidth));
        if (steps < 1) {
          steps = 1;
        }
        var sW = targetWidth * Math.pow(2, steps - 1);
        var sH = targetHeight * Math.pow(2, steps - 1);
        var x = 2;
        while (steps--) {
          var canvas = document.createElement('canvas');
          canvas.width = sW;
          canvas.height = sH;
          canvas.getContext('2d').drawImage(image, 0, 0, sW, sH);
          image = canvas;
          sW = Math.round(sW / x);
          sH = Math.round(sH / x);
        }
                SRTlib.send("]},");

        return image;
                SRTlib.send("]},");

      };
      _proto.rotateImage = function rotateImage(image, translate) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.rotateImage.rotateImage", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var w = image.width;
        var h = image.height;
        if (translate.deg === 90 || translate.deg === 270) {
          w = image.height;
          h = image.width;
        }
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        var context = canvas.getContext('2d');
        context.translate(w / 2, h / 2);
        if (translate.canvas) {
          context.rotate(translate.rad);
          context.scale(translate.scaleX, translate.scaleY);
        }
        context.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);
                SRTlib.send("]},");

        return canvas;
                SRTlib.send("]},");

      };
      _proto.canvasToBlob = function canvasToBlob(canvas, type, quality) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.canvasToBlob.canvasToBlob", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        try {
          canvas.getContext('2d').getImageData(0, 0, 1, 1);
        } catch (err) {
          if (err.code === 18) {
                        SRTlib.send("]},");

            return Promise.reject(new Error('cannot read image, probably an svg with external resources'));
          }
        }
        if (canvas.toBlob) {
                    SRTlib.send("]},");

          return new Promise(function (resolve) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.canvasToBlob.canvasToBlob.ReturnStatement.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            canvas.toBlob(resolve, type, quality);
                        SRTlib.send("]},");

          }).then(function (blob) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.canvasToBlob.canvasToBlob.ReturnStatement.then2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (blob === null) {
                            SRTlib.send("]},");

              throw new Error('cannot read image, probably an svg with external resources');
            }
                        SRTlib.send("]},");

            return blob;
                        SRTlib.send("]},");

          });
        }
                SRTlib.send("]},");

        return Promise.resolve().then(function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.canvasToBlob.canvasToBlob.ReturnStatement.then.then.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

          return dataURItoBlob(canvas.toDataURL(type, quality), {});
                    SRTlib.send("]},");

        }).then(function (blob) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.canvasToBlob.canvasToBlob.ReturnStatement.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (blob === null) {
                        SRTlib.send("]},");

            throw new Error('could not extract blob, probably an old browser');
          }
                    SRTlib.send("]},");

          return blob;
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      };
      _proto.setPreviewURL = function setPreviewURL(fileID, preview) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.setPreviewURL.setPreviewURL", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        this.uppy.setFileState(fileID, {
          preview: preview
        });
                SRTlib.send("]},");

      };
      _proto.addToQueue = function addToQueue(item) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.addToQueue.addToQueue", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.queue.push(item);
        if (this.queueProcessing === false) {
          this.processQueue();
        }
                SRTlib.send("]},");

      };
      _proto.processQueue = function processQueue() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.processQueue.processQueue", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this3 = this;
        this.queueProcessing = true;
        if (this.queue.length > 0) {
          var current = this.uppy.getFile(this.queue.shift());
          if (!current) {
            this.uppy.log('[ThumbnailGenerator] file was removed before a thumbnail could be generated, but not removed from the queue. This is probably a bug', 'error');
                        SRTlib.send("]},");

            return;
          }
                    SRTlib.send("]},");

          return this.requestThumbnail(current).catch(function (err) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.processQueue.processQueue.ReturnStatement.requestThumbnail.catch.then.requestThumbnail.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

          }).then(function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.processQueue.processQueue.ReturnStatement.requestThumbnail.catch.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return _this3.processQueue();
                        SRTlib.send("]},");

          });
        } else {
          this.queueProcessing = false;
          this.uppy.log('[ThumbnailGenerator] Emptied thumbnail queue');
          this.uppy.emit('thumbnail:all-generated');
        }
                SRTlib.send("]},");

      };
      _proto.requestThumbnail = function requestThumbnail(file) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.requestThumbnail.requestThumbnail", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this4 = this;
        if (isPreviewSupported(file.type) && !file.isRemote) {
                    SRTlib.send("]},");

          return this.createThumbnail(file, this.opts.thumbnailWidth, this.opts.thumbnailHeight).then(function (preview) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.requestThumbnail.requestThumbnail.ReturnStatement.createThumbnail.then.catch.createThumbnail.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            _this4.setPreviewURL(file.id, preview);
            _this4.uppy.log("[ThumbnailGenerator] Generated thumbnail for " + file.id);
            _this4.uppy.emit('thumbnail:generated', _this4.uppy.getFile(file.id), preview);
                        SRTlib.send("]},");

          }).catch(function (err) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.requestThumbnail.requestThumbnail.ReturnStatement.createThumbnail.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            _this4.uppy.log("[ThumbnailGenerator] Failed thumbnail for " + file.id + ":", 'warning');
            _this4.uppy.log(err, 'warning');
            _this4.uppy.emit('thumbnail:error', _this4.uppy.getFile(file.id), err);
                        SRTlib.send("]},");

          });
        }
                SRTlib.send("]},");

        return Promise.resolve();
                SRTlib.send("]},");

      };
      _proto.install = function install() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.install.install2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.uppy.on('file-removed', this.onFileRemoved);
        if (this.opts.lazy) {
          this.uppy.on('thumbnail:request', this.onFileAdded);
          this.uppy.on('thumbnail:cancel', this.onCancelRequest);
        } else {
          this.uppy.on('file-added', this.onFileAdded);
          this.uppy.on('restored', this.onRestored);
        }
        if (this.opts.waitForThumbnailsBeforeUpload) {
          this.uppy.addPreProcessor(this.waitUntilAllProcessed);
        }
                SRTlib.send("]},");

      };
      _proto.uninstall = function uninstall() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uninstall.uninstall2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.uppy.off('file-removed', this.onFileRemoved);
        if (this.opts.lazy) {
          this.uppy.off('thumbnail:request', this.onFileAdded);
          this.uppy.off('thumbnail:cancel', this.onCancelRequest);
        } else {
          this.uppy.off('file-added', this.onFileAdded);
          this.uppy.off('restored', this.onRestored);
        }
        if (this.opts.waitForThumbnailsBeforeUpload) {
          this.uppy.removePreProcessor(this.waitUntilAllProcessed);
        }
                SRTlib.send("]},");

      };
            SRTlib.send("]},");

      return ThumbnailGenerator;
            SRTlib.send("]},");

    })(Plugin), _class.VERSION = require('../package.json').version, _temp);
        SRTlib.send("]},");

  }, {
    "../package.json": 30,
    "@uppy/core": 19,
    "@uppy/utils/lib/Translator": 31,
    "@uppy/utils/lib/dataURItoBlob": 32,
    "@uppy/utils/lib/isObjectURL": 40,
    "@uppy/utils/lib/isPreviewSupported": 41,
    "exifr/dist/mini.legacy.umd.js": 29,
    "math-log2": 11
  }],
  29: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey36", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    (function (process, global, Buffer) {
            SRTlib.send(`{ "anonymous": true, "function": "call8", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      !(function (e, t) {
                SRTlib.send(`{ "anonymous": true, "function": "call6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define("exifr", ["exports"], t) : t((e = e || self).exifr = {});
                SRTlib.send("]},");

      })(this, function (e) {
                SRTlib.send(`{ "anonymous": true, "function": "call7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        "use strict";
        function t(e, t) {
                    SRTlib.send(`{ "anonymous": false, "function": "t", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (!(e instanceof t)) {
                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

            throw new TypeError("Cannot call a class as a function");
          }
                    SRTlib.send("]},");

        }
        function n(e, t) {
                    SRTlib.send(`{ "anonymous": false, "function": "n", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1, r.configurable = !0, ("value" in r) && (r.writable = !0), Object.defineProperty(e, r.key, r));
          }
                    SRTlib.send("]},");

        }
        function r(e, t, r) {
                    SRTlib.send(`{ "anonymous": false, "function": "r", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                    SRTlib.send("]},");

          return (t && n(e.prototype, t), r && n(e, r), e);
                    SRTlib.send("]},");

        }
        function i(e, t, n) {
                    SRTlib.send(`{ "anonymous": false, "function": "i", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                    SRTlib.send("]},");

          return ((t in e) ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e);
                    SRTlib.send("]},");

        }
        function s(e, t) {
                    SRTlib.send(`{ "anonymous": false, "function": "s", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if ("function" != typeof t && null !== t) {
                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

            throw new TypeError("Super expression must either be null or a function");
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          });
          var n = ["prototype", "__proto__", "caller", "arguments", "length", "name"];
          (Object.getOwnPropertyNames(t).forEach(function (r) {
                        SRTlib.send(`{ "anonymous": true, "function": "forEach3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            -1 === n.indexOf(r) && e[r] !== t[r] && (e[r] = t[r]);
                        SRTlib.send("]},");

          }), t && u(e, t));
                    SRTlib.send("]},");

        }
        function a(e) {
                    SRTlib.send(`{ "anonymous": false, "function": "a", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.a", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return e.__proto__ || Object.getPrototypeOf(e);
                        SRTlib.send("]},");

          })(e);
                    SRTlib.send("]},");

        }
        function u(e, t) {
                    SRTlib.send(`{ "anonymous": false, "function": "u", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                    SRTlib.send("]},");

          return (u = Object.setPrototypeOf || (function (e, t) {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.u", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                        SRTlib.send("]},");

            return (e.__proto__ = t, e);
                        SRTlib.send("]},");

          }))(e, t);
                    SRTlib.send("]},");

        }
        function o() {
                    SRTlib.send(`{ "anonymous": false, "function": "o", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          if ("undefined" == typeof Reflect || !Reflect.construct) {
                        SRTlib.send("]},");

            return !1;
          }
          if (Reflect.construct.sham) {
                        SRTlib.send("]},");

            return !1;
          }
          if ("function" == typeof Proxy) {
                        SRTlib.send("]},");

            return !0;
          }
          try {
                        SRTlib.send("]},");

            return (Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.Date.prototype.toString.call", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

            })), !0);
          } catch (e) {
                        SRTlib.send("]},");

            return !1;
          }
                    SRTlib.send("]},");

        }
        function f(e, t, n) {
                    SRTlib.send(`{ "anonymous": false, "function": "f", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                    SRTlib.send("]},");

          return (f = o() ? Reflect.construct : function (e, t, n) {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.apply.f", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

            var r = [null];
            r.push.apply(r, t);
            var i = new (Function.bind.apply(e, r))();
                        SRTlib.send("]},");

            return (n && u(i, n.prototype), i);
                        SRTlib.send("]},");

          }).apply(null, arguments);
                    SRTlib.send("]},");

        }
        function h(e) {
                    SRTlib.send(`{ "anonymous": false, "function": "h", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var t = "function" == typeof Map ? new Map() : void 0;
                    SRTlib.send("]},");

          return (h = function (e) {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.h", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) {
                            SRTlib.send("]},");

              return e;
            }
            var n;
            if ("function" != typeof e) {
                            SRTlib.send("]},");

              throw new TypeError("Super expression must either be null or a function");
            }
            if (void 0 !== t) {
              if (t.has(e)) {
                                SRTlib.send("]},");

                return t.get(e);
              }
              t.set(e, r);
            }
            function r() {
                            SRTlib.send(`{ "anonymous": false, "function": "r", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return f(e, arguments, a(this).constructor);
                            SRTlib.send("]},");

            }
                        SRTlib.send("]},");

            return (r.prototype = Object.create(e.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), u(r, e));
                        SRTlib.send("]},");

          })(e);
                    SRTlib.send("]},");

        }
        function c(e) {
                    SRTlib.send(`{ "anonymous": false, "function": "c", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (void 0 === e) {
                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
                    SRTlib.send("]},");

          return e;
                    SRTlib.send("]},");

        }
        function l(e, t) {
                    SRTlib.send(`{ "anonymous": false, "function": "l", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                    SRTlib.send("]},");

          return !t || "object" != typeof t && "function" != typeof t ? c(e) : t;
                    SRTlib.send("]},");

        }
        function d(e, t, n) {
                    SRTlib.send(`{ "anonymous": false, "function": "d", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                    SRTlib.send("]},");

          return (d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.d", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

            var r = (function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.d.r", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = a(e)); ) ;
                            SRTlib.send("]},");

              return e;
                            SRTlib.send("]},");

            })(e, t);
            if (r) {
              var i = Object.getOwnPropertyDescriptor(r, t);
                            SRTlib.send("]},");

              return i.get ? i.get.call(n) : i.value;
            }
                        SRTlib.send("]},");

          })(e, t, n || e);
                    SRTlib.send("]},");

        }
        var p = Object.values || (function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.p", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var t = [];
          for (var n in e) t.push(e[n]);
                    SRTlib.send("]},");

          return t;
                    SRTlib.send("]},");

        }), v = Object.entries || (function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.v", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var t = [];
          for (var n in e) t.push([n, e[n]]);
                    SRTlib.send("]},");

          return t;
                    SRTlib.send("]},");

        }), y = Object.assign || (function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.y", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    SRTlib.send("]},");

          return (n.forEach(function (t) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.y.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            for (var n in t) e[n] = t[n];
                        SRTlib.send("]},");

          }), e);
                    SRTlib.send("]},");

        }), g = Object.fromEntries || (function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.g", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var t = {};
                    SRTlib.send("]},");

          return (k(e).forEach(function (e) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.g.ReturnStatement.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            var n = e[0], r = e[1];
            t[n] = r;
                        SRTlib.send("]},");

          }), t);
                    SRTlib.send("]},");

        }), k = Array.from || (function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.k", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (e instanceof S) {
            var t = [];
                        SRTlib.send("]},");

            return (e.forEach(function (e, n) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.k.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                            SRTlib.send("]},");

              return t.push([n, e]);
                            SRTlib.send("]},");

            }), t);
          }
                    SRTlib.send("]},");

          return Array.prototype.slice.call(e);
                    SRTlib.send("]},");

        });
        function m(e) {
                    SRTlib.send(`{ "anonymous": false, "function": "m", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return -1 !== this.indexOf(e);
                    SRTlib.send("]},");

        }
        (Array.prototype.includes || (Array.prototype.includes = m), String.prototype.includes || (String.prototype.includes = m), String.prototype.startsWith || (String.prototype.startsWith = function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.String.prototype.startsWith", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    SRTlib.send("]},");

          return this.substring(t, t + e.length) === e;
                    SRTlib.send("]},");

        }), String.prototype.endsWith || (String.prototype.endsWith = function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.String.prototype.endsWith", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
                    SRTlib.send("]},");

          return this.substring(t - e.length, t) === e;
                    SRTlib.send("]},");

        }));
        var b = "undefined" != typeof self ? self : global, w = b.fetch || (function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.w", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    SRTlib.send("]},");

          return new Promise(function (n, r) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.w.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            var i = new XMLHttpRequest();
            if ((i.open("get", e, !0), i.responseType = "arraybuffer", i.onerror = r, t.headers)) for (var s in t.headers) i.setRequestHeader(s, t.headers[s]);
            (i.onload = function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.w.ReturnStatement.i.onload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              n({
                ok: i.status >= 200 && i.status < 300,
                status: i.status,
                arrayBuffer: function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.w.ReturnStatement.i.onload.n.arrayBuffer", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                    SRTlib.send("]},");

                  return Promise.resolve(i.response);
                                    SRTlib.send("]},");

                }
              });
                            SRTlib.send("]},");

            }, i.send(null));
                        SRTlib.send("]},");

          });
                    SRTlib.send("]},");

        }), A = function (e) {
                    SRTlib.send(`{ "anonymous": false, "function": "A", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var t = [];
          if ((Object.defineProperties(t, {
            size: {
              get: function () {
                                SRTlib.send(`{ "anonymous": true, "function": "call.A.size.get", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                SRTlib.send("]},");

                return this.length;
                                SRTlib.send("]},");

              }
            },
            has: {
              value: function (e) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.A.has.value", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                SRTlib.send("]},");

                return -1 !== this.indexOf(e);
                                SRTlib.send("]},");

              }
            },
            add: {
              value: function (e) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.A.add.value", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                this.has(e) || this.push(e);
                                SRTlib.send("]},");

              }
            },
            delete: {
              value: function (e) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.A.delete.value", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                if (this.has(e)) {
                  var t = this.indexOf(e);
                  this.splice(t, 1);
                }
                                SRTlib.send("]},");

              }
            }
          }), Array.isArray(e))) for (var n = 0; n < e.length; n++) t.add(e[n]);
                    SRTlib.send("]},");

          return t;
                    SRTlib.send("]},");

        }, O = function (e) {
                    SRTlib.send(`{ "anonymous": false, "function": "O", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return new S(e);
                    SRTlib.send("]},");

        }, S = void 0 !== b.Map && void 0 !== b.Map.prototype.keys ? b.Map : (function () {
                    SRTlib.send(`{ "anonymous": true, "function": "call.S", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          function e(n) {
                        SRTlib.send(`{ "anonymous": false, "function": "e", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if ((t(this, e), this.clear(), n)) for (var r = 0; r < n.length; r++) this.set(n[r][0], n[r][1]);
                        SRTlib.send("]},");

          }
                    SRTlib.send("]},");

          return (r(e, [{
            key: "clear",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.S.ReturnStatement.r.value", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              (this._map = {}, this._keys = []);
                            SRTlib.send("]},");

            }
          }, {
            key: "get",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.S.ReturnStatement.r.value2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send("]},");

              return this._map["map_" + e];
                            SRTlib.send("]},");

            }
          }, {
            key: "set",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.S.ReturnStatement.r.value3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                            SRTlib.send("]},");

              return (this._map["map_" + e] = t, this._keys.indexOf(e) < 0 && this._keys.push(e), this);
                            SRTlib.send("]},");

            }
          }, {
            key: "has",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.S.ReturnStatement.r.value4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send("]},");

              return this._keys.indexOf(e) >= 0;
                            SRTlib.send("]},");

            }
          }, {
            key: "delete",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.S.ReturnStatement.r.value5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              var t = this._keys.indexOf(e);
                            SRTlib.send("]},");

              return !(t < 0) && (delete this._map["map_" + e], this._keys.splice(t, 1), !0);
                            SRTlib.send("]},");

            }
          }, {
            key: "keys",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.S.ReturnStatement.r.value6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return this._keys.slice(0);
                            SRTlib.send("]},");

            }
          }, {
            key: "values",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.S.ReturnStatement.r.value7", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              var e = this;
                            SRTlib.send("]},");

              return this._keys.map(function (t) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.S.ReturnStatement.r.value.ReturnStatement._keys.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                SRTlib.send("]},");

                return e.get(t);
                                SRTlib.send("]},");

              });
                            SRTlib.send("]},");

            }
          }, {
            key: "entries",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.S.ReturnStatement.r.value8", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              var e = this;
                            SRTlib.send("]},");

              return this._keys.map(function (t) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.S.ReturnStatement.r.value.ReturnStatement._keys.map2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                SRTlib.send("]},");

                return [t, e.get(t)];
                                SRTlib.send("]},");

              });
                            SRTlib.send("]},");

            }
          }, {
            key: "forEach",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.S.ReturnStatement.r.value9", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              for (var n = 0; n < this._keys.length; n++) e.call(t, this._map["map_" + this._keys[n]], this._keys[n], this);
                            SRTlib.send("]},");

            }
          }, {
            key: "size",
            get: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.S.ReturnStatement.r.get", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return this._keys.length;
                            SRTlib.send("]},");

            }
          }]), e);
                    SRTlib.send("]},");

        })(), P = "undefined" != typeof self ? self : global, U = "undefined" != typeof navigator, x = U && "undefined" == typeof HTMLImageElement, C = !("undefined" == typeof global || "undefined" == typeof process || !process.versions || !process.versions.node), B = P.Buffer, j = P.BigInt, _ = !!B;
        var I = function (e) {
                    SRTlib.send(`{ "anonymous": false, "function": "I", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return void 0 !== e;
                    SRTlib.send("]},");

        };
        function V(e) {
                    SRTlib.send(`{ "anonymous": false, "function": "V", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return void 0 === e || (e instanceof S ? 0 === e.size : 0 === p(e).filter(I).length);
                    SRTlib.send("]},");

        }
        function T(e) {
                    SRTlib.send(`{ "anonymous": false, "function": "T", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var t = new Error(e);
                    SRTlib.send("]},");

          return (delete t.stack, t);
                    SRTlib.send("]},");

        }
        function L(e) {
                    SRTlib.send(`{ "anonymous": false, "function": "L", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var t = (function (e) {
                        SRTlib.send(`{ "anonymous": true, "function": "t", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            var t = 0;
                        SRTlib.send("]},");

            return (e.ifd0.enabled && (t += 1024), e.exif.enabled && (t += 2048), e.makerNote && (t += 2048), e.userComment && (t += 1024), e.gps.enabled && (t += 512), e.interop.enabled && (t += 100), e.ifd1.enabled && (t += 1024), t + 2048);
                        SRTlib.send("]},");

          })(e);
                    SRTlib.send("]},");

          return (e.jfif.enabled && (t += 50), e.xmp.enabled && (t += 2e4), e.iptc.enabled && (t += 14e3), e.icc.enabled && (t += 6e3), t);
                    SRTlib.send("]},");

        }
        var z = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8") : void 0;
        function F(e) {
                    SRTlib.send(`{ "anonymous": false, "function": "F", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return z ? z.decode(e) : _ ? Buffer.from(e).toString("utf8") : decodeURIComponent(escape(String.fromCharCode.apply(null, e)));
                    SRTlib.send("]},");

        }
        var E = (function () {
                    SRTlib.send(`{ "anonymous": true, "function": "call.E", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          function e(n) {
                        SRTlib.send(`{ "anonymous": false, "function": "e", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = arguments.length > 2 ? arguments[2] : void 0, s = arguments.length > 3 ? arguments[3] : void 0;
            if ((t(this, e), "boolean" == typeof s && (this.le = s), Array.isArray(n) && (n = new Uint8Array(n)), 0 === n)) (this.byteOffset = 0, this.byteLength = 0); else if (n instanceof ArrayBuffer) {
              void 0 === i && (i = n.byteLength - r);
              var a = new DataView(n, r, i);
              this._swapDataView(a);
            } else if (n instanceof Uint8Array || n instanceof DataView || n instanceof e) {
              if ((void 0 === i && (i = n.byteLength - r), (r += n.byteOffset) + i > n.byteOffset + n.byteLength)) {
                                SRTlib.send("]},");

                                SRTlib.send("]},");

                                SRTlib.send("]},");

                                SRTlib.send("]},");

                                SRTlib.send("]},");

                throw T("Creating view outside of available memory in ArrayBuffer");
              }
              var u = new DataView(n.buffer, r, i);
              this._swapDataView(u);
            } else {
              if ("number" != typeof n) {
                                SRTlib.send("]},");

                                SRTlib.send("]},");

                                SRTlib.send("]},");

                                SRTlib.send("]},");

                                SRTlib.send("]},");

                throw T("Invalid input argument for BufferView: " + n);
              }
              var o = new DataView(new ArrayBuffer(n));
              this._swapDataView(o);
            }
                        SRTlib.send("]},");

          }
                    SRTlib.send("]},");

          return (r(e, null, [{
            key: "from",
            value: function (t, n) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                            SRTlib.send("]},");

              return t instanceof this && t.le === n ? t : new e(t, void 0, void 0, n);
                            SRTlib.send("]},");

            }
          }]), r(e, [{
            key: "_swapArrayBuffer",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              this._swapDataView(new DataView(e));
                            SRTlib.send("]},");

            }
          }, {
            key: "_swapBuffer",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              this._swapDataView(new DataView(e.buffer, e.byteOffset, e.byteLength));
                            SRTlib.send("]},");

            }
          }, {
            key: "_swapDataView",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              (this.dataView = e, this.buffer = e.buffer, this.byteOffset = e.byteOffset, this.byteLength = e.byteLength);
                            SRTlib.send("]},");

            }
          }, {
            key: "_lengthToEnd",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send("]},");

              return this.byteLength - e;
                            SRTlib.send("]},");

            }
          }, {
            key: "set",
            value: function (t, n) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
              if ((t instanceof DataView || t instanceof e ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t instanceof ArrayBuffer && (t = new Uint8Array(t)), !(t instanceof Uint8Array))) {
                                SRTlib.send("]},");

                throw T("BufferView.set(): Invalid data argument.");
              }
              var i = this.toUint8();
                            SRTlib.send("]},");

              return (i.set(t, n), new r(this, n, t.byteLength));
                            SRTlib.send("]},");

            }
          }, {
            key: "subarray",
            value: function (t, n) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value7", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                            SRTlib.send("]},");

              return new e(this, t, n = n || this._lengthToEnd(t));
                            SRTlib.send("]},");

            }
          }, {
            key: "toUint8",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value8", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
                            SRTlib.send("]},");

            }
          }, {
            key: "getUint8Array",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value9", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                            SRTlib.send("]},");

              return new Uint8Array(this.buffer, this.byteOffset + e, t);
                            SRTlib.send("]},");

            }
          }, {
            key: "getString",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value10", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.byteLength, n = this.getUint8Array(e, t);
                            SRTlib.send("]},");

              return F(n);
                            SRTlib.send("]},");

            }
          }, {
            key: "getUnicodeString",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value11", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.byteLength, n = [], r = 0; r < t && e + r < this.byteLength; r += 2) n.push(this.getUint16(e + r));
                            SRTlib.send("]},");

              return n.map(function (e) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value.ReturnStatement.join", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                SRTlib.send("]},");

                return String.fromCharCode(e);
                                SRTlib.send("]},");

              }).join("");
                            SRTlib.send("]},");

            }
          }, {
            key: "getInt8",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send("]},");

              return this.dataView.getInt8(e);
                            SRTlib.send("]},");

            }
          }, {
            key: "getUint8",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value13", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send("]},");

              return this.dataView.getUint8(e);
                            SRTlib.send("]},");

            }
          }, {
            key: "getInt16",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value14", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.le;
                            SRTlib.send("]},");

              return this.dataView.getInt16(e, t);
                            SRTlib.send("]},");

            }
          }, {
            key: "getInt32",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value15", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.le;
                            SRTlib.send("]},");

              return this.dataView.getInt32(e, t);
                            SRTlib.send("]},");

            }
          }, {
            key: "getUint16",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value16", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.le;
                            SRTlib.send("]},");

              return this.dataView.getUint16(e, t);
                            SRTlib.send("]},");

            }
          }, {
            key: "getUint32",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value17", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.le;
                            SRTlib.send("]},");

              return this.dataView.getUint32(e, t);
                            SRTlib.send("]},");

            }
          }, {
            key: "getFloat32",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value18", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.le;
                            SRTlib.send("]},");

              return this.dataView.getFloat32(e, t);
                            SRTlib.send("]},");

            }
          }, {
            key: "getFloat64",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value19", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.le;
                            SRTlib.send("]},");

              return this.dataView.getFloat64(e, t);
                            SRTlib.send("]},");

            }
          }, {
            key: "getFloat",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value20", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.le;
                            SRTlib.send("]},");

              return this.dataView.getFloat32(e, t);
                            SRTlib.send("]},");

            }
          }, {
            key: "getDouble",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value21", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.le;
                            SRTlib.send("]},");

              return this.dataView.getFloat64(e, t);
                            SRTlib.send("]},");

            }
          }, {
            key: "getUint64",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value22", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              var t = this.getUint32(e), n = this.getUint32(e + 4);
              if (t < 1048575) {
                                SRTlib.send("]},");

                return t << 32 | n;
              }
              if (void 0 !== typeof j) {
                                SRTlib.send("]},");

                return (console.warn("Using BigInt because of type 64uint but JS can only handle 53b numbers."), j(t) << j(32) | j(n));
              }
              throw T("Trying to read 64b value but JS can only handle 53b numbers.");
                            SRTlib.send("]},");

                            SRTlib.send("]},");

            }
          }, {
            key: "getUintBytes",
            value: function (e, t, n) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value23", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

              switch (t) {
                case 1:
                                    SRTlib.send("]},");

                  return this.getUint8(e, n);
                case 2:
                                    SRTlib.send("]},");

                  return this.getUint16(e, n);
                case 4:
                                    SRTlib.send("]},");

                  return this.getUint32(e, n);
                case 8:
                                    SRTlib.send("]},");

                  return this.getUint64(e, n);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "getUint",
            value: function (e, t, n) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value24", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

              switch (t) {
                case 8:
                                    SRTlib.send("]},");

                  return this.getUint8(e, n);
                case 16:
                                    SRTlib.send("]},");

                  return this.getUint16(e, n);
                case 32:
                                    SRTlib.send("]},");

                  return this.getUint32(e, n);
                case 64:
                                    SRTlib.send("]},");

                  return this.getUint64(e, n);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "toString",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value25", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send("]},");

              return this.dataView.toString(e, this.constructor.name);
                            SRTlib.send("]},");

            }
          }, {
            key: "ensureChunk",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.E.ReturnStatement.r.value26", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

            }
          }]), e);
                    SRTlib.send("]},");

        })();
        function D(e, t) {
                    SRTlib.send(`{ "anonymous": false, "function": "D", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          throw T(("").concat(e, " '").concat(t, "' was not loaded, try using full build of exifr."));
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

        }
        var M = (function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.M", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          function n(e) {
                        SRTlib.send(`{ "anonymous": false, "function": "n", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            var r;
                        SRTlib.send("]},");

            return (t(this, n), (r = l(this, a(n).call(this))).kind = e, r);
                        SRTlib.send("]},");

          }
                    SRTlib.send("]},");

          return (s(n, e), r(n, [{
            key: "get",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.M.ReturnStatement.r.value", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                            SRTlib.send("]},");

              return (this.has(e) || D(this.kind, e), t && ((e in t) || (function (e, t) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.M.ReturnStatement.r.value.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                throw T(("Unknown ").concat(e, " '").concat(t, "'."));
                                SRTlib.send("]},");

                                SRTlib.send("]},");

              })(this.kind, e), t[e].enabled || D(this.kind, e)), d(a(n.prototype), "get", this).call(this, e));
                            SRTlib.send("]},");

            }
          }, {
            key: "keyList",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.M.ReturnStatement.r.value2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return k(this.keys());
                            SRTlib.send("]},");

            }
          }]), n);
                    SRTlib.send("]},");

        })(h(S)), N = new M("file parser"), R = new M("segment parser"), W = new M("file reader");
        function K(e) {
                    SRTlib.send(`{ "anonymous": false, "function": "K", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement11", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                            SRTlib.send("]},");

              return Promise.resolve(e.apply(this, t));
            } catch (e) {
                            SRTlib.send("]},");

              return Promise.reject(e);
            }
                        SRTlib.send("]},");

          };
                    SRTlib.send("]},");

        }
        function X(e, t, n) {
                    SRTlib.send(`{ "anonymous": false, "function": "X", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                    SRTlib.send("]},");

          return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
                    SRTlib.send("]},");

        }
        var H = K(function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.H.K", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return new Promise(function (t, n) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.H.K.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            var r = new FileReader();
            (r.onloadend = function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.H.K.ReturnStatement.r.onloadend", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return t(r.result || new ArrayBuffer());
                            SRTlib.send("]},");

            }, r.onerror = n, r.readAsArrayBuffer(e));
                        SRTlib.send("]},");

          });
                    SRTlib.send("]},");

        }), Y = K(function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.Y.K", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return w(e).then(function (e) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.Y.K.ReturnStatement.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return e.arrayBuffer();
                        SRTlib.send("]},");

          });
                    SRTlib.send("]},");

        }), G = K(function (e, t) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.G.K", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                    SRTlib.send("]},");

          return X(t(e), function (e) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.G.K.ReturnStatement.X", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return new E(e);
                        SRTlib.send("]},");

          });
                    SRTlib.send("]},");

        }), J = K(function (e, t, n) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.J.K", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          var r = new (W.get(n))(e, t);
                    SRTlib.send("]},");

          return X(r.read(), function () {
                        SRTlib.send(`{ "anonymous": true, "function": "call.J.K.ReturnStatement.X", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return r;
                        SRTlib.send("]},");

          });
                    SRTlib.send("]},");

        }), q = K(function (e, t, n, r) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.q.K", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

          if (W.has(n)) {
                        SRTlib.send("]},");

            return J(e, t, n);
          }
          if (r) {
                        SRTlib.send("]},");

            return G(e, r);
          }
          throw T(("Parser ").concat(n, " is not loaded"));
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

        });
        function Q(e, t) {
                    SRTlib.send(`{ "anonymous": false, "function": "Q", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if ((n = e).startsWith("data:") || n.length > 1e4) {
                        SRTlib.send("]},");

            return J(e, t, "base64");
          }
          if (U) {
                        SRTlib.send("]},");

            return q(e, t, "url", Y);
          }
          if (C) {
                        SRTlib.send("]},");

            return J(e, t, "fs");
          }
          throw T("Invalid input argument");
          var n;
                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

                    SRTlib.send("]},");

        }
        var Z = (function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.Z", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          function n() {
                        SRTlib.send(`{ "anonymous": false, "function": "n", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return (t(this, n), l(this, a(n).apply(this, arguments)));
                        SRTlib.send("]},");

          }
                    SRTlib.send("]},");

          return (s(n, e), r(n, [{
            key: "tagKeys",
            get: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Z.ReturnStatement.r.get", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return (this.allKeys || (this.allKeys = k(this.keys())), this.allKeys);
                            SRTlib.send("]},");

            }
          }, {
            key: "tagValues",
            get: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Z.ReturnStatement.r.get2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return (this.allValues || (this.allValues = k(this.values())), this.allValues);
                            SRTlib.send("]},");

            }
          }]), n);
                    SRTlib.send("]},");

        })(h(S));
        function $(e, t, n) {
                    SRTlib.send(`{ "anonymous": false, "function": "$", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          var r = new Z(), i = n;
          Array.isArray(i) || ("function" == typeof i.entries && (i = i.entries()), i = k(i));
          for (var s = 0; s < i.length; s++) {
            var a = i[s], u = a[0], o = a[1];
            r.set(u, o);
          }
          if (Array.isArray(t)) {
            var f = t;
            Array.isArray(f) || ("function" == typeof f.entries && (f = f.entries()), f = k(f));
            for (var h = 0; h < f.length; h++) {
              var c = f[h];
              e.set(c, r);
            }
          } else e.set(t, r);
                    SRTlib.send("]},");

          return r;
                    SRTlib.send("]},");

        }
        function ee(e, t, n) {
                    SRTlib.send(`{ "anonymous": false, "function": "ee", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          var r, i = e.get(t), s = n;
          Array.isArray(s) || ("function" == typeof s.entries && (s = s.entries()), s = k(s));
          for (var a = 0; a < s.length; a++) (r = s[a], i.set(r[0], r[1]));
                    SRTlib.send("]},");

        }
        var te = O(), ne = O(), re = O(), ie = ["chunked", "firstChunkSize", "firstChunkSizeNode", "firstChunkSizeBrowser", "chunkSize", "chunkLimit"], se = ["jfif", "xmp", "icc", "iptc"], ae = ["tiff"].concat(se), ue = ["ifd0", "ifd1", "exif", "gps", "interop"], oe = [].concat(ae, ue), fe = ["makerNote", "userComment"], he = ["translateKeys", "translateValues", "reviveValues", "multiSegment"], ce = [].concat(he, ["sanitize", "mergeOutput"]), le = (function () {
                    SRTlib.send(`{ "anonymous": true, "function": "call.le", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          function e() {
                        SRTlib.send(`{ "anonymous": false, "function": "e", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            t(this, e);
                        SRTlib.send("]},");

          }
                    SRTlib.send("]},");

          return (r(e, [{
            key: "translate",
            get: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.le.ReturnStatement.r.get", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return this.translateKeys || this.translateValues || this.reviveValues;
                            SRTlib.send("]},");

            }
          }]), e);
                    SRTlib.send("]},");

        })(), de = (function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.de", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          function n(e, r, s, u) {
                        SRTlib.send(`{ "anonymous": false, "function": "n", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

            var o;
            if ((t(this, n), i(c(o = l(this, a(n).call(this))), "enabled", !1), i(c(o), "skip", A()), i(c(o), "pick", A()), i(c(o), "deps", A()), i(c(o), "translateKeys", !1), i(c(o), "translateValues", !1), i(c(o), "reviveValues", !1), o.key = e, o.enabled = r, o.parse = o.enabled, o.applyInheritables(u), o.canBeFiltered = ue.includes(e), o.canBeFiltered && (o.dict = te.get(e)), void 0 !== s)) if (Array.isArray(s)) (o.parse = o.enabled = !0, o.canBeFiltered && s.length > 0 && o.translateTagSet(s, o.pick)); else if ("object" == typeof s) {
              if ((o.enabled = !0, o.parse = !1 !== s.parse, o.canBeFiltered)) {
                var f = s.pick, h = s.skip;
                (f && f.length > 0 && o.translateTagSet(f, o.pick), h && h.length > 0 && o.translateTagSet(h, o.skip));
              }
              o.applyInheritables(s);
            } else {
              if (!0 !== s && !1 !== s) {
                                SRTlib.send("]},");

                                SRTlib.send("]},");

                                SRTlib.send("]},");

                                SRTlib.send("]},");

                                SRTlib.send("]},");

                throw T(("Invalid options argument: ").concat(s));
              }
              o.parse = o.enabled = s;
            }
                        SRTlib.send("]},");

            return o;
                        SRTlib.send("]},");

          }
                    SRTlib.send("]},");

          return (s(n, e), r(n, [{
            key: "needed",
            get: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.de.ReturnStatement.r.get", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return this.enabled || this.deps.size > 0;
                            SRTlib.send("]},");

            }
          }]), r(n, [{
            key: "applyInheritables",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.de.ReturnStatement.r.value", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              var t, n, r = he;
              Array.isArray(r) || ("function" == typeof r.entries && (r = r.entries()), r = k(r));
              for (var i = 0; i < r.length; i++) void 0 !== (n = e[t = r[i]]) && (this[t] = n);
                            SRTlib.send("]},");

            }
          }, {
            key: "translateTagSet",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.de.ReturnStatement.r.value2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              if (this.dict) {
                var n, r, i = this.dict, s = i.tagKeys, a = i.tagValues, u = e;
                Array.isArray(u) || ("function" == typeof u.entries && (u = u.entries()), u = k(u));
                for (var o = 0; o < u.length; o++) "string" == typeof (n = u[o]) ? (-1 === (r = a.indexOf(n)) && (r = s.indexOf(Number(n))), -1 !== r && t.add(Number(s[r]))) : t.add(n);
              } else {
                var f = e;
                Array.isArray(f) || ("function" == typeof f.entries && (f = f.entries()), f = k(f));
                for (var h = 0; h < f.length; h++) {
                  var c = f[h];
                  t.add(c);
                }
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "finalizeFilters",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.de.ReturnStatement.r.value3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              !this.enabled && this.deps.size > 0 ? (this.enabled = !0, me(this.pick, this.deps)) : this.enabled && this.pick.size > 0 && me(this.pick, this.deps);
                            SRTlib.send("]},");

            }
          }]), n);
                    SRTlib.send("]},");

        })(le), pe = {
          jfif: !1,
          tiff: !0,
          xmp: !1,
          icc: !1,
          iptc: !1,
          ifd0: !0,
          ifd1: !1,
          exif: !0,
          gps: !0,
          interop: !1,
          makerNote: !1,
          userComment: !1,
          multiSegment: !1,
          skip: [],
          pick: [],
          translateKeys: !0,
          translateValues: !0,
          reviveValues: !0,
          sanitize: !0,
          mergeOutput: !0,
          silentErrors: !0,
          chunked: !0,
          firstChunkSize: void 0,
          firstChunkSizeNode: 512,
          firstChunkSizeBrowser: 65536,
          chunkSize: 65536,
          chunkLimit: 5
        }, ve = O(), ye = (function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.ye", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          function n(e) {
                        SRTlib.send(`{ "anonymous": false, "function": "n", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            var r;
            if ((t(this, n), r = l(this, a(n).call(this)), !0 === e)) r.setupFromTrue(); else if (void 0 === e) r.setupFromUndefined(); else if (Array.isArray(e)) r.setupFromArray(e); else {
              if ("object" != typeof e) {
                                SRTlib.send("]},");

                                SRTlib.send("]},");

                                SRTlib.send("]},");

                                SRTlib.send("]},");

                                SRTlib.send("]},");

                throw T(("Invalid options argument ").concat(e));
              }
              r.setupFromObject(e);
            }
                        SRTlib.send("]},");

            return (void 0 === r.firstChunkSize && (r.firstChunkSize = U ? r.firstChunkSizeBrowser : r.firstChunkSizeNode), r.mergeOutput && (r.ifd1.enabled = !1), r.filterNestedSegmentTags(), r.traverseTiffDependencyTree(), r.checkLoadedPlugins(), r);
                        SRTlib.send("]},");

          }
                    SRTlib.send("]},");

          return (s(n, e), r(n, null, [{
            key: "useCached",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ye.ReturnStatement.r.value", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              var t = ve.get(e);
                            SRTlib.send("]},");

              return void 0 !== t ? t : (t = new this(e), ve.set(e, t), t);
                            SRTlib.send("]},");

            }
          }]), r(n, [{
            key: "setupFromUndefined",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ye.ReturnStatement.r.value2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              var e, t = ie;
              Array.isArray(t) || ("function" == typeof t.entries && (t = t.entries()), t = k(t));
              for (var n = 0; n < t.length; n++) this[e = t[n]] = pe[e];
              var r = ce;
              Array.isArray(r) || ("function" == typeof r.entries && (r = r.entries()), r = k(r));
              for (var i = 0; i < r.length; i++) this[e = r[i]] = pe[e];
              var s = fe;
              Array.isArray(s) || ("function" == typeof s.entries && (s = s.entries()), s = k(s));
              for (var a = 0; a < s.length; a++) this[e = s[a]] = pe[e];
              var u = oe;
              Array.isArray(u) || ("function" == typeof u.entries && (u = u.entries()), u = k(u));
              for (var o = 0; o < u.length; o++) this[e = u[o]] = new de(e, pe[e], void 0, this);
                            SRTlib.send("]},");

            }
          }, {
            key: "setupFromTrue",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ye.ReturnStatement.r.value3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              var e, t = ie;
              Array.isArray(t) || ("function" == typeof t.entries && (t = t.entries()), t = k(t));
              for (var n = 0; n < t.length; n++) this[e = t[n]] = pe[e];
              var r = ce;
              Array.isArray(r) || ("function" == typeof r.entries && (r = r.entries()), r = k(r));
              for (var i = 0; i < r.length; i++) this[e = r[i]] = pe[e];
              var s = fe;
              Array.isArray(s) || ("function" == typeof s.entries && (s = s.entries()), s = k(s));
              for (var a = 0; a < s.length; a++) this[e = s[a]] = !0;
              var u = oe;
              Array.isArray(u) || ("function" == typeof u.entries && (u = u.entries()), u = k(u));
              for (var o = 0; o < u.length; o++) this[e = u[o]] = new de(e, !0, void 0, this);
                            SRTlib.send("]},");

            }
          }, {
            key: "setupFromArray",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ye.ReturnStatement.r.value4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              var t, n = ie;
              Array.isArray(n) || ("function" == typeof n.entries && (n = n.entries()), n = k(n));
              for (var r = 0; r < n.length; r++) this[t = n[r]] = pe[t];
              var i = ce;
              Array.isArray(i) || ("function" == typeof i.entries && (i = i.entries()), i = k(i));
              for (var s = 0; s < i.length; s++) this[t = i[s]] = pe[t];
              var a = fe;
              Array.isArray(a) || ("function" == typeof a.entries && (a = a.entries()), a = k(a));
              for (var u = 0; u < a.length; u++) this[t = a[u]] = pe[t];
              var o = oe;
              Array.isArray(o) || ("function" == typeof o.entries && (o = o.entries()), o = k(o));
              for (var f = 0; f < o.length; f++) this[t = o[f]] = new de(t, !1, void 0, this);
              this.setupGlobalFilters(e, void 0, ue);
                            SRTlib.send("]},");

            }
          }, {
            key: "setupFromObject",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ye.ReturnStatement.r.value5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              var t;
              (ue.ifd0 = ue.ifd0 || ue.image, ue.ifd1 = ue.ifd1 || ue.thumbnail, y(this, e));
              var n = ie;
              Array.isArray(n) || ("function" == typeof n.entries && (n = n.entries()), n = k(n));
              for (var r = 0; r < n.length; r++) this[t = n[r]] = ke(e[t], pe[t]);
              var i = ce;
              Array.isArray(i) || ("function" == typeof i.entries && (i = i.entries()), i = k(i));
              for (var s = 0; s < i.length; s++) this[t = i[s]] = ke(e[t], pe[t]);
              var a = fe;
              Array.isArray(a) || ("function" == typeof a.entries && (a = a.entries()), a = k(a));
              for (var u = 0; u < a.length; u++) this[t = a[u]] = ke(e[t], pe[t]);
              var o = ae;
              Array.isArray(o) || ("function" == typeof o.entries && (o = o.entries()), o = k(o));
              for (var f = 0; f < o.length; f++) this[t = o[f]] = new de(t, pe[t], e[t], this);
              var h = ue;
              Array.isArray(h) || ("function" == typeof h.entries && (h = h.entries()), h = k(h));
              for (var c = 0; c < h.length; c++) this[t = h[c]] = new de(t, pe[t], e[t], this.tiff);
              (this.setupGlobalFilters(e.pick, e.skip, ue, oe), !0 === e.tiff ? this.batchEnableWithBool(ue, !0) : !1 === e.tiff ? this.batchEnableWithUserValue(ue, e) : Array.isArray(e.tiff) ? this.setupGlobalFilters(e.tiff, void 0, ue) : "object" == typeof e.tiff && this.setupGlobalFilters(e.tiff.pick, e.tiff.skip, ue));
                            SRTlib.send("]},");

            }
          }, {
            key: "batchEnableWithBool",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ye.ReturnStatement.r.value6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              var n = e;
              Array.isArray(n) || ("function" == typeof n.entries && (n = n.entries()), n = k(n));
              for (var r = 0; r < n.length; r++) {
                this[n[r]].enabled = t;
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "batchEnableWithUserValue",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ye.ReturnStatement.r.value7", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              var n = e;
              Array.isArray(n) || ("function" == typeof n.entries && (n = n.entries()), n = k(n));
              for (var r = 0; r < n.length; r++) {
                var i = n[r], s = t[i];
                this[i].enabled = !1 !== s && void 0 !== s;
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "setupGlobalFilters",
            value: function (e, t, n) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ye.ReturnStatement.r.value8", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

              var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n;
              if (e && e.length) {
                var i = r;
                Array.isArray(i) || ("function" == typeof i.entries && (i = i.entries()), i = k(i));
                for (var s = 0; s < i.length; s++) {
                  var a = i[s];
                  this[a].enabled = !1;
                }
                var u = ge(e, n), o = u;
                Array.isArray(o) || ("function" == typeof o.entries && (o = o.entries()), o = k(o));
                for (var f = 0; f < o.length; f++) {
                  var h = o[f], c = h[0], l = h[1];
                  (me(this[c].pick, l), this[c].enabled = !0);
                }
              } else if (t && t.length) {
                var d = ge(t, n), p = d;
                Array.isArray(p) || ("function" == typeof p.entries && (p = p.entries()), p = k(p));
                for (var v = 0; v < p.length; v++) {
                  var y = p[v], g = y[0], m = y[1];
                  me(this[g].skip, m);
                }
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "filterNestedSegmentTags",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ye.ReturnStatement.r.value9", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              var e = this.ifd0, t = this.exif, n = this.xmp, r = this.iptc, i = this.icc;
              (this.makerNote ? t.deps.add(37500) : t.skip.add(37500), this.userComment ? t.deps.add(37510) : t.skip.add(37510), n.enabled || e.skip.add(700), r.enabled || e.skip.add(33723), i.enabled || e.skip.add(34675));
                            SRTlib.send("]},");

            }
          }, {
            key: "traverseTiffDependencyTree",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ye.ReturnStatement.r.value10", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              var e = this, t = this.ifd0, n = this.exif, r = this.gps;
              (this.interop.needed && (n.deps.add(40965), t.deps.add(40965)), n.needed && t.deps.add(34665), r.needed && t.deps.add(34853), this.tiff.enabled = ue.some(function (t) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.ye.ReturnStatement.r.value.tiff.enabled", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                SRTlib.send("]},");

                return !0 === e[t].enabled;
                                SRTlib.send("]},");

              }) || this.makerNote || this.userComment);
              var i = ue;
              Array.isArray(i) || ("function" == typeof i.entries && (i = i.entries()), i = k(i));
              for (var s = 0; s < i.length; s++) {
                this[i[s]].finalizeFilters();
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "checkLoadedPlugins",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ye.ReturnStatement.r.value11", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              var e = ae;
              Array.isArray(e) || ("function" == typeof e.entries && (e = e.entries()), e = k(e));
              for (var t = 0; t < e.length; t++) {
                var n = e[t];
                this[n].enabled && !R.has(n) && D("segment parser", n);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "onlyTiff",
            get: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ye.ReturnStatement.r.get", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              var e = this;
                            SRTlib.send("]},");

              return !se.map(function (t) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.ye.ReturnStatement.r.get.ReturnStatement.some", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                SRTlib.send("]},");

                return e[t].enabled;
                                SRTlib.send("]},");

              }).some(function (e) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.ye.ReturnStatement.r.get.ReturnStatement.some2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                SRTlib.send("]},");

                return !0 === e;
                                SRTlib.send("]},");

              }) && this.tiff.enabled;
                            SRTlib.send("]},");

            }
          }]), n);
                    SRTlib.send("]},");

        })(le);
        function ge(e, t) {
                    SRTlib.send(`{ "anonymous": false, "function": "ge", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          var n, r, i, s = [], a = t;
          Array.isArray(a) || ("function" == typeof a.entries && (a = a.entries()), a = k(a));
          for (var u = 0; u < a.length; u++) {
            (r = a[u], n = []);
            var o = te.get(r);
            Array.isArray(o) || ("function" == typeof o.entries && (o = o.entries()), o = k(o));
            for (var f = 0; f < o.length; f++) (i = o[f], (e.includes(i[0]) || e.includes(i[1])) && n.push(i[0]));
            n.length && s.push([r, n]);
          }
                    SRTlib.send("]},");

          return s;
                    SRTlib.send("]},");

        }
        function ke(e, t) {
                    SRTlib.send(`{ "anonymous": false, "function": "ke", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                    SRTlib.send("]},");

          return void 0 !== e ? e : void 0 !== t ? t : void 0;
                    SRTlib.send("]},");

        }
        function me(e, t) {
                    SRTlib.send(`{ "anonymous": false, "function": "me", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          var n = t;
          Array.isArray(n) || ("function" == typeof n.entries && (n = n.entries()), n = k(n));
          for (var r = 0; r < n.length; r++) {
            var i = n[r];
            e.add(i);
          }
                    SRTlib.send("]},");

        }
        i(ye, "default", pe);
        var be = {
          ifd0: !1,
          ifd1: !1,
          exif: !1,
          gps: !1,
          interop: !1,
          sanitize: !1,
          reviveValues: !0,
          translateKeys: !1,
          translateValues: !1,
          mergeOutput: !1
        }, we = y({}, be, {
          firstChunkSize: 4e4,
          gps: [1, 2, 3, 4]
        }), Ae = y({}, be, {
          firstChunkSize: 4e4,
          ifd0: [274]
        }), Oe = y({}, be, {
          tiff: !1,
          ifd1: !0,
          mergeOutput: !1
        });
        function Se(e, t, n) {
                    SRTlib.send(`{ "anonymous": false, "function": "Se", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                    SRTlib.send("]},");

          return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
                    SRTlib.send("]},");

        }
        function Pe(e, t) {
                    SRTlib.send(`{ "anonymous": false, "function": "Pe", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          var n = e();
                    SRTlib.send("]},");

          return n && n.then ? n.then(t) : t(n);
                    SRTlib.send("]},");

        }
        function Ue() {
                    SRTlib.send(`{ "anonymous": false, "function": "Ue", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

        }
        var xe = (function () {
                    SRTlib.send(`{ "anonymous": true, "function": "call.xe", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          function e(n) {
                        SRTlib.send(`{ "anonymous": false, "function": "e", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            (t(this, e), i(this, "parsers", {}), this.options = ye.useCached(n));
                        SRTlib.send("]},");

          }
                    SRTlib.send("]},");

          return (r(e, [{
            key: "setup",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              if (!this.fileParser) {
                var e, t = this.file.getUint16(0);
                if (18761 === t || 19789 === t) (this.file.isTiff = !0, e = N.get("tiff")); else if (65496 === t) (this.file.isJpeg = !0, e = N.get("jpeg")); else {
                  if (!(function (e) {
                                        SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    if (0 !== e.getUint16(0)) {
                                            SRTlib.send("]},");

                      return !1;
                    }
                    var t = e.getUint16(2);
                    if (t > 50) {
                                            SRTlib.send("]},");

                      return !1;
                    }
                    for (var n = 16, r = []; n < t; ) (r.push(e.getString(n, 4)), n += 4);
                                        SRTlib.send("]},");

                    return r.includes("heic");
                                        SRTlib.send("]},");

                  })(this.file)) {
                                        SRTlib.send("]},");

                    throw T("Unknown file format");
                  }
                  (this.file.isHeic = !0, e = N.get("heic"));
                }
                this.fileParser = new e(this.options, this.file, this.parsers);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "read",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              try {
                var t = this;
                                SRTlib.send("]},");

                return Se((function (e, t) {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Se", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                  if ("string" == typeof e) {
                                        SRTlib.send("]},");

                    return Q(e, t);
                  }
                  if (U && !x && e instanceof HTMLImageElement) {
                                        SRTlib.send("]},");

                    return Q(e.src, t);
                  }
                  if (e instanceof Uint8Array || e instanceof ArrayBuffer || e instanceof DataView) {
                                        SRTlib.send("]},");

                    return new E(e);
                  }
                  if (U && e instanceof Blob) {
                                        SRTlib.send("]},");

                    return q(e, t, "blob", H);
                  }
                  throw T("Invalid input argument");
                                    SRTlib.send("]},");

                                    SRTlib.send("]},");

                })(e, t.options), function (e) {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Se2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                  t.file = e;
                                    SRTlib.send("]},");

                });
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "parse",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              try {
                var e = this;
                                SRTlib.send("]},");

                return (e.setup(), Se(e.fileParser.parse(), function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Se3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  var t, n = {}, r = [], i = p(e.parsers).map((t = function (t) {
                                        SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Se.i.map.t", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    var i;
                                        SRTlib.send("]},");

                    return Pe(function () {
                                            SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Se.i.map.t.ReturnStatement.Pe", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                            SRTlib.send("]},");

                      return e.options.silentErrors ? (n = (function (e, t) {
                                                SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Se.i.map.t.ReturnStatement.Pe.ReturnStatement.n", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                        try {
                          var n = e();
                        } catch (e) {
                                                    SRTlib.send("]},");

                          return t(e);
                        }
                                                SRTlib.send("]},");

                        return n && n.then ? n.then(void 0, t) : n;
                                                SRTlib.send("]},");

                      })(function () {
                                                SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Se.i.map.t.ReturnStatement.Pe.ReturnStatement.n2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                                SRTlib.send("]},");

                        return Se(t.parse(), function (e) {
                                                    SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Se.i.map.t.ReturnStatement.Pe.ReturnStatement.n.ReturnStatement.Se", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                          i = e;
                                                    SRTlib.send("]},");

                        });
                                                SRTlib.send("]},");

                      }, function (e) {
                                                SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Se.i.map.t.ReturnStatement.Pe.ReturnStatement.n3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        r.push(e);
                                                SRTlib.send("]},");

                      }), s = function () {
                                                SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Se.i.map.t.ReturnStatement.Pe.ReturnStatement.s", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        t.errors.length && r.push.apply(r, t.errors);
                                                SRTlib.send("]},");

                      }, n && n.then ? n.then(s) : s(n)) : Se(t.parse(), function (e) {
                                                SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Se.i.map.t.ReturnStatement.Pe.ReturnStatement.Se", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        i = e;
                                                SRTlib.send("]},");

                      });
                      var n, s;
                                            SRTlib.send("]},");

                    }, function () {
                                            SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Se.i.map.t.ReturnStatement.Pe2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                      t.assignToOutput(n, i);
                                            SRTlib.send("]},");

                    });
                                        SRTlib.send("]},");

                  }, function () {
                                        SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Se.i.map", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    try {
                                            SRTlib.send("]},");

                      return Promise.resolve(t.apply(this, e));
                    } catch (e) {
                                            SRTlib.send("]},");

                      return Promise.reject(e);
                    }
                                        SRTlib.send("]},");

                  }));
                                    SRTlib.send("]},");

                  return Se(Promise.all(i), function () {
                                        SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Se.ReturnStatement.Se", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    var t;
                                        SRTlib.send("]},");

                    return (e.options.silentErrors && r.length > 0 && (n.errors = r), n = V(t = n) ? void 0 : t, e.file.close && e.file.close(), n);
                                        SRTlib.send("]},");

                  });
                                    SRTlib.send("]},");

                }));
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "extractThumbnail",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              try {
                var e = this;
                e.setup();
                var t, n = R.get("tiff", e.options);
                                SRTlib.send("]},");

                return Pe(function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Pe", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  if (!e.file.isTiff) {
                                        SRTlib.send("]},");

                    return (function (e) {
                                            SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Pe.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                      var t = e();
                      if (t && t.then) {
                                                SRTlib.send("]},");

                        return t.then(Ue);
                      }
                                            SRTlib.send("]},");

                    })(function () {
                                            SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Pe.ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                      if (e.file.isJpeg) {
                                                SRTlib.send("]},");

                        return Se(e.fileParser.getOrFindSegment("tiff"), function (e) {
                                                    SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Pe.ReturnStatement.ReturnStatement.Se", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                          t = e;
                                                    SRTlib.send("]},");

                        });
                      }
                                            SRTlib.send("]},");

                    });
                  }
                  t = {
                    start: 0,
                    type: "tiff"
                  };
                                    SRTlib.send("]},");

                }, function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Pe2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  if (void 0 !== t) {
                                        SRTlib.send("]},");

                    return Se(e.fileParser.ensureSegmentChunk(t), function (t) {
                                            SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Pe.ReturnStatement.Se", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                            SRTlib.send("]},");

                      return Se((e.parsers.tiff = new n(t, e.options, e.file)).extractThumbnail(), function (t) {
                                                SRTlib.send(`{ "anonymous": true, "function": "call.xe.ReturnStatement.r.value.ReturnStatement.Pe.ReturnStatement.Se.ReturnStatement.Se", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                                SRTlib.send("]},");

                        return (e.file.close && e.file.close(), t);
                                                SRTlib.send("]},");

                      });
                                            SRTlib.send("]},");

                    });
                  }
                                    SRTlib.send("]},");

                });
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }]), e);
                    SRTlib.send("]},");

        })();
        function Ce(e, t, n) {
                    SRTlib.send(`{ "anonymous": false, "function": "Ce", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                    SRTlib.send("]},");

          return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
                    SRTlib.send("]},");

        }
        function Be(e) {
                    SRTlib.send(`{ "anonymous": false, "function": "Be", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement12", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                            SRTlib.send("]},");

              return Promise.resolve(e.apply(this, t));
            } catch (e) {
                            SRTlib.send("]},");

              return Promise.reject(e);
            }
                        SRTlib.send("]},");

          };
                    SRTlib.send("]},");

        }
        var je = function (t) {
                    SRTlib.send(`{ "anonymous": false, "function": "je", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return Ce(_e(t), function (t) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.je.ReturnStatement.Ce", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return y({
              canvas: e.rotateCanvas,
              css: e.rotateCss
            }, ze[t]);
                        SRTlib.send("]},");

          });
                    SRTlib.send("]},");

        }, _e = Be(function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call._e.Be", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var t = new xe(Ae);
                    SRTlib.send("]},");

          return Ce(t.read(e), function () {
                        SRTlib.send(`{ "anonymous": true, "function": "call._e.Be.ReturnStatement.Ce", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return Ce(t.parse(), function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call._e.Be.ReturnStatement.Ce.ReturnStatement.Ce", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              if (e && e.ifd0) {
                                SRTlib.send("]},");

                return e.ifd0[274];
              }
                            SRTlib.send("]},");

            });
                        SRTlib.send("]},");

          });
                    SRTlib.send("]},");

        }), Ie = Be(function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.Ie.Be", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var t = new xe(we);
                    SRTlib.send("]},");

          return Ce(t.read(e), function () {
                        SRTlib.send(`{ "anonymous": true, "function": "call.Ie.Be.ReturnStatement.Ce", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return Ce(t.parse(), function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Ie.Be.ReturnStatement.Ce.ReturnStatement.Ce", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              if (e && e.gps) {
                var t = e.gps;
                                SRTlib.send("]},");

                return {
                  latitude: t.latitude,
                  longitude: t.longitude
                };
              }
                            SRTlib.send("]},");

            });
                        SRTlib.send("]},");

          });
                    SRTlib.send("]},");

        }), Ve = Be(function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.Ve.Be", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return Ce(this.thumbnail(e), function (e) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.Ve.Be.ReturnStatement.Ce", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (void 0 !== e) {
              var t = new Blob([e]);
                            SRTlib.send("]},");

              return URL.createObjectURL(t);
            }
                        SRTlib.send("]},");

          });
                    SRTlib.send("]},");

        }), Te = Be(function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.Te.Be", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var t = new xe(Oe);
                    SRTlib.send("]},");

          return Ce(t.read(e), function () {
                        SRTlib.send(`{ "anonymous": true, "function": "call.Te.Be.ReturnStatement.Ce", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return Ce(t.extractThumbnail(), function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Te.Be.ReturnStatement.Ce.ReturnStatement.Ce", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send("]},");

              return e && _ ? B.from(e) : e;
                            SRTlib.send("]},");

            });
                        SRTlib.send("]},");

          });
                    SRTlib.send("]},");

        }), Le = Be(function (e, t) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.Le.Be", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          var n = new xe(t);
                    SRTlib.send("]},");

          return Ce(n.read(e), function () {
                        SRTlib.send(`{ "anonymous": true, "function": "call.Le.Be.ReturnStatement.Ce", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return n.parse();
                        SRTlib.send("]},");

          });
                    SRTlib.send("]},");

        }), ze = {
          1: {
            dimensionSwapped: !1,
            scaleX: 1,
            scaleY: 1,
            deg: 0,
            rad: 0
          },
          2: {
            dimensionSwapped: !1,
            scaleX: -1,
            scaleY: 1,
            deg: 0,
            rad: 0
          },
          3: {
            dimensionSwapped: !1,
            scaleX: 1,
            scaleY: 1,
            deg: 180,
            rad: 180 * Math.PI / 180
          },
          4: {
            dimensionSwapped: !1,
            scaleX: -1,
            scaleY: 1,
            deg: 180,
            rad: 180 * Math.PI / 180
          },
          5: {
            dimensionSwapped: !0,
            scaleX: 1,
            scaleY: -1,
            deg: 90,
            rad: 90 * Math.PI / 180
          },
          6: {
            dimensionSwapped: !0,
            scaleX: 1,
            scaleY: 1,
            deg: 90,
            rad: 90 * Math.PI / 180
          },
          7: {
            dimensionSwapped: !0,
            scaleX: 1,
            scaleY: -1,
            deg: 270,
            rad: 270 * Math.PI / 180
          },
          8: {
            dimensionSwapped: !0,
            scaleX: 1,
            scaleY: 1,
            deg: 270,
            rad: 270 * Math.PI / 180
          }
        };
        if ((e.rotateCanvas = !0, e.rotateCss = !0, "object" == typeof navigator)) {
          var Fe = navigator.userAgent;
          if (Fe.includes("iPad") || Fe.includes("iPhone")) {
            var Ee = Fe.match(/OS (\d+)_(\d+)/), De = (Ee[0], Ee[1]), Me = Ee[2], Ne = Number(De) + .1 * Number(Me);
            (e.rotateCanvas = Ne < 13.4, e.rotateCss = !1);
          }
        }
        var Re = Object.freeze({
          __proto__: null,
          rotation: je,
          orientation: _e,
          gps: Ie,
          thumbnailUrl: Ve,
          thumbnail: Te,
          parse: Le,
          rotations: ze,
          get rotateCanvas() {
                        SRTlib.send(`{ "anonymous": true, "function": "call.Re.rotateCanvas", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return e.rotateCanvas;
                        SRTlib.send("]},");

          },
          get rotateCss() {
                        SRTlib.send(`{ "anonymous": true, "function": "call.Re.rotateCss", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return e.rotateCss;
                        SRTlib.send("]},");

          },
          Exifr: xe,
          fileParsers: N,
          segmentParsers: R,
          fileReaders: W,
          tagKeys: te,
          tagValues: ne,
          tagRevivers: re,
          createDictionary: $,
          extendDictionary: ee,
          fetchUrlAsArrayBuffer: Y,
          readBlobAsArrayBuffer: H,
          chunkedProps: ie,
          otherSegments: se,
          segments: ae,
          tiffBlocks: ue,
          segmentsAndBlocks: oe,
          tiffExtractables: fe,
          inheritables: he,
          allFormatters: ce,
          Options: ye,
          disableAllOptions: be,
          gpsOnlyOptions: we,
          orientationOnlyOptions: Ae,
          thumbnailOnlyOptions: Oe
        });
        function We() {
                    SRTlib.send(`{ "anonymous": false, "function": "We", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

        }
        var Ke = (function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.Ke", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          function n() {
                        SRTlib.send(`{ "anonymous": false, "function": "n", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            var e, r;
            t(this, n);
            for (var s = arguments.length, u = new Array(s), o = 0; o < s; o++) u[o] = arguments[o];
                        SRTlib.send("]},");

            return (i(c(r = l(this, (e = a(n)).call.apply(e, [this].concat(u)))), "ranges", new Xe()), 0 !== r.byteLength && r.ranges.add(0, r.byteLength), r);
                        SRTlib.send("]},");

          }
                    SRTlib.send("]},");

          return (s(n, e), r(n, [{
            key: "_tryExtend",
            value: function (e, t, n) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Ke.ReturnStatement.r.value", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

              if (0 === e && 0 === this.byteLength && n) {
                var r = new DataView(n.buffer || n, n.byteOffset, n.byteLength);
                this._swapDataView(r);
              } else {
                var i = e + t;
                if (i > this.byteLength) {
                  var s = this._extend(i).dataView;
                  this._swapDataView(s);
                }
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "_extend",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Ke.ReturnStatement.r.value2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              var t;
              t = _ ? B.allocUnsafe(e) : new Uint8Array(e);
              var n = new DataView(t.buffer, t.byteOffset, t.byteLength);
                            SRTlib.send("]},");

              return (t.set(new Uint8Array(this.buffer, this.byteOffset, this.byteLength), 0), {
                uintView: t,
                dataView: n
              });
                            SRTlib.send("]},");

            }
          }, {
            key: "subarray",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Ke.ReturnStatement.r.value3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            SRTlib.send("]},");

              return (t = t || this._lengthToEnd(e), r && this._tryExtend(e, t), this.ranges.add(e, t), d(a(n.prototype), "subarray", this).call(this, e, t));
                            SRTlib.send("]},");

            }
          }, {
            key: "set",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Ke.ReturnStatement.r.value4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              r && this._tryExtend(t, e.byteLength, e);
              var i = d(a(n.prototype), "set", this).call(this, e, t);
                            SRTlib.send("]},");

              return (this.ranges.add(t, i.byteLength), i);
                            SRTlib.send("]},");

            }
          }, {
            key: "ensureChunk",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Ke.ReturnStatement.r.value5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              try {
                if (!this.chunked) {
                                    SRTlib.send("]},");

                  return;
                }
                if (this.ranges.available(e, t)) {
                                    SRTlib.send("]},");

                  return;
                }
                                SRTlib.send("]},");

                return (function (e, t) {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.Ke.ReturnStatement.r.value.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                  if (!t) {
                                        SRTlib.send("]},");

                    return e && e.then ? e.then(We) : Promise.resolve();
                  }
                                    SRTlib.send("]},");

                })(this.readChunk(e, t));
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "available",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Ke.ReturnStatement.r.value6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                            SRTlib.send("]},");

              return this.ranges.available(e, t);
                            SRTlib.send("]},");

            }
          }]), n);
                    SRTlib.send("]},");

        })(E), Xe = (function () {
                    SRTlib.send(`{ "anonymous": true, "function": "call.Xe", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          function e() {
                        SRTlib.send(`{ "anonymous": false, "function": "e", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            (t(this, e), i(this, "list", []));
                        SRTlib.send("]},");

          }
                    SRTlib.send("]},");

          return (r(e, [{
            key: "add",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Xe.ReturnStatement.r.value", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              var n = e + t, r = this.list.filter(function (t) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.Xe.ReturnStatement.r.value.r.list.filter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                SRTlib.send("]},");

                return He(e, t.offset, n) || He(e, t.end, n);
                                SRTlib.send("]},");

              });
              if (r.length > 0) {
                (e = Math.min.apply(Math, [e].concat(r.map(function (e) {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.Xe.ReturnStatement.r.value.e.Math.min.apply.concat", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                    SRTlib.send("]},");

                  return e.offset;
                                    SRTlib.send("]},");

                }))), t = (n = Math.max.apply(Math, [n].concat(r.map(function (e) {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.Xe.ReturnStatement.r.value.t.n.Math.max.apply.concat", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                    SRTlib.send("]},");

                  return e.end;
                                    SRTlib.send("]},");

                })))) - e);
                var i = r.shift();
                (i.offset = e, i.length = t, i.end = n, this.list = this.list.filter(function (e) {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.Xe.ReturnStatement.r.value.list.list.filter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                    SRTlib.send("]},");

                  return !r.includes(e);
                                    SRTlib.send("]},");

                }));
              } else this.list.push({
                offset: e,
                length: t,
                end: n
              });
                            SRTlib.send("]},");

            }
          }, {
            key: "available",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Xe.ReturnStatement.r.value2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              var n = e + t;
                            SRTlib.send("]},");

              return this.list.some(function (t) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.Xe.ReturnStatement.r.value.ReturnStatement.list.some", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                SRTlib.send("]},");

                return t.offset <= e && n <= t.end;
                                SRTlib.send("]},");

              });
                            SRTlib.send("]},");

            }
          }, {
            key: "length",
            get: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Xe.ReturnStatement.r.get", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return this.list.length;
                            SRTlib.send("]},");

            }
          }]), e);
                    SRTlib.send("]},");

        })();
        function He(e, t, n) {
                    SRTlib.send(`{ "anonymous": false, "function": "He", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                    SRTlib.send("]},");

          return e <= t && t <= n;
                    SRTlib.send("]},");

        }
        function Ye() {
                    SRTlib.send(`{ "anonymous": false, "function": "Ye", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

        }
        function Ge(e, t) {
                    SRTlib.send(`{ "anonymous": false, "function": "Ge", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (!t) {
                        SRTlib.send("]},");

            return e && e.then ? e.then(Ye) : Promise.resolve();
          }
                    SRTlib.send("]},");

        }
        function Je(e, t, n) {
                    SRTlib.send(`{ "anonymous": false, "function": "Je", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                    SRTlib.send("]},");

          return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
                    SRTlib.send("]},");

        }
        var qe = (function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.qe", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          function n() {
                        SRTlib.send(`{ "anonymous": false, "function": "n", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return (t(this, n), l(this, a(n).apply(this, arguments)));
                        SRTlib.send("]},");

          }
                    SRTlib.send("]},");

          return (s(n, e), r(n, [{
            key: "readWhole",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.qe.ReturnStatement.r.value", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              try {
                var e = this;
                                SRTlib.send("]},");

                return (e.chunked = !1, Je(H(e.input), function (t) {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.qe.ReturnStatement.r.value.ReturnStatement.Je", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                  e._swapArrayBuffer(t);
                                    SRTlib.send("]},");

                }));
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "readChunked",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.qe.ReturnStatement.r.value2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return (this.chunked = !0, this.size = this.input.size, d(a(n.prototype), "readChunked", this).call(this));
                            SRTlib.send("]},");

            }
          }, {
            key: "_readChunk",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.qe.ReturnStatement.r.value3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              try {
                var n = this, r = t ? e + t : void 0, i = n.input.slice(e, r);
                                SRTlib.send("]},");

                return Je(H(i), function (t) {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.qe.ReturnStatement.r.value.ReturnStatement.Je2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                    SRTlib.send("]},");

                  return n.set(t, e, !0);
                                    SRTlib.send("]},");

                });
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }]), n);
                    SRTlib.send("]},");

        })((function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.qe2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          function n(e, r) {
                        SRTlib.send(`{ "anonymous": false, "function": "n", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            var s;
                        SRTlib.send("]},");

            return (t(this, n), i(c(s = l(this, a(n).call(this, 0))), "chunksRead", 0), s.input = e, s.options = r, s);
                        SRTlib.send("]},");

          }
                    SRTlib.send("]},");

          return (s(n, e), r(n, [{
            key: "readWhole",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.qe.ReturnStatement.r.value4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              try {
                                SRTlib.send("]},");

                return (this.chunked = !1, Ge(this.readChunk(this.nextChunkOffset)));
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "readChunked",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.qe.ReturnStatement.r.value5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              try {
                                SRTlib.send("]},");

                return (this.chunked = !0, Ge(this.readChunk(0, this.options.firstChunkSize)));
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "readNextChunk",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.qe.ReturnStatement.r.value6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              try {
                if ((void 0 === e && (e = this.nextChunkOffset), this.fullyRead)) {
                                    SRTlib.send("]},");

                  return (this.chunksRead++, !1);
                }
                var t = this.options.chunkSize;
                                SRTlib.send("]},");

                return (n = this.readChunk(e, t), r = function (e) {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.qe.ReturnStatement.r.value.ReturnStatement.r", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                    SRTlib.send("]},");

                  return !!e && e.byteLength === t;
                                    SRTlib.send("]},");

                }, i ? r ? r(n) : n : (n && n.then || (n = Promise.resolve(n)), r ? n.then(r) : n));
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
              var n, r, i;
                            SRTlib.send("]},");

            }
          }, {
            key: "readChunk",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.qe.ReturnStatement.r.value7", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              try {
                if ((this.chunksRead++, 0 === (t = this.safeWrapAddress(e, t)))) {
                                    SRTlib.send("]},");

                  return;
                }
                                SRTlib.send("]},");

                return this._readChunk(e, t);
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "safeWrapAddress",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.qe.ReturnStatement.r.value8", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                            SRTlib.send("]},");

              return void 0 !== this.size && e + t > this.size ? Math.max(0, this.size - e) : t;
                            SRTlib.send("]},");

            }
          }, {
            key: "read",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.qe.ReturnStatement.r.value9", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return this.options.chunked ? this.readChunked() : this.readWhole();
                            SRTlib.send("]},");

            }
          }, {
            key: "close",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.qe.ReturnStatement.r.value10", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

            }
          }, {
            key: "nextChunkOffset",
            get: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.qe.ReturnStatement.r.get", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              if (0 !== this.ranges.list.length) {
                                SRTlib.send("]},");

                return this.ranges.list[0].length;
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "canReadNextChunk",
            get: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.qe.ReturnStatement.r.get2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return this.chunksRead < this.options.chunkLimit;
                            SRTlib.send("]},");

            }
          }, {
            key: "fullyRead",
            get: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.qe.ReturnStatement.r.get3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return void 0 !== this.size && this.nextChunkOffset === this.size;
                            SRTlib.send("]},");

            }
          }]), n);
                    SRTlib.send("]},");

        })(Ke));
        W.set("blob", qe);
        var Qe = (function () {
                    SRTlib.send(`{ "anonymous": true, "function": "call.Qe", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          function e(n, r, s) {
                        SRTlib.send(`{ "anonymous": false, "function": "e", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

            var a, u = this;
            (t(this, e), i(this, "ensureSegmentChunk", (a = function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "i.a", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              var t, n, r, i = e.start, s = e.size || 65536;
                            SRTlib.send("]},");

              return (t = function () {
                                SRTlib.send(`{ "anonymous": true, "function": "i.a.ReturnStatement.t", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                if (u.file.chunked) {
                                    SRTlib.send("]},");

                  return (function () {
                                        SRTlib.send(`{ "anonymous": true, "function": "i.a.ReturnStatement.t.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    if (!u.file.available(i, s)) {
                                            SRTlib.send("]},");

                      return (function (e, t) {
                                                SRTlib.send(`{ "anonymous": true, "function": "i.a.ReturnStatement.t.ReturnStatement.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                        try {
                          var n = e();
                        } catch (e) {
                                                    SRTlib.send("]},");

                          return t(e);
                        }
                                                SRTlib.send("]},");

                        return n && n.then ? n.then(void 0, t) : n;
                                                SRTlib.send("]},");

                      })(function () {
                                                SRTlib.send(`{ "anonymous": true, "function": "i.a.ReturnStatement.t.ReturnStatement.ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                                SRTlib.send("]},");

                        return (t = u.file.readChunk(i, s), n = function (t) {
                                                    SRTlib.send(`{ "anonymous": true, "function": "i.a.ReturnStatement.t.ReturnStatement.ReturnStatement.ReturnStatement.n", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                          e.chunk = t;
                                                    SRTlib.send("]},");

                        }, r ? n ? n(t) : t : (t && t.then || (t = Promise.resolve(t)), n ? t.then(n) : t));
                        var t, n, r;
                                                SRTlib.send("]},");

                      }, function (t) {
                                                SRTlib.send(`{ "anonymous": true, "function": "i.a.ReturnStatement.t.ReturnStatement.ReturnStatement3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        throw T(("Couldn't read segment: ").concat(JSON.stringify(e), ". ").concat(t.message));
                                                SRTlib.send("]},");

                                                SRTlib.send("]},");

                      });
                    }
                    e.chunk = u.file.subarray(i, s);
                                        SRTlib.send("]},");

                  })();
                }
                if (u.file.byteLength > i + s) e.chunk = u.file.subarray(i, s); else {
                  if (void 0 !== e.size) {
                                        SRTlib.send("]},");

                    throw T("Segment unreachable: " + JSON.stringify(e));
                  }
                  e.chunk = u.file.subarray(i);
                }
                                SRTlib.send("]},");

              }, n = function (t) {
                                SRTlib.send(`{ "anonymous": true, "function": "i.a.ReturnStatement.n", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                SRTlib.send("]},");

                return e.chunk;
                                SRTlib.send("]},");

              }, (r = t()) && r.then ? r.then(n) : n(r));
                            SRTlib.send("]},");

            }, function () {
                            SRTlib.send(`{ "anonymous": true, "function": "i", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
              try {
                                SRTlib.send("]},");

                return Promise.resolve(a.apply(this, e));
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            })), this.extendOptions && this.extendOptions(n), this.options = n, this.file = r, this.parsers = s);
                        SRTlib.send("]},");

          }
                    SRTlib.send("]},");

          return (r(e, [{
            key: "createParser",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Qe.ReturnStatement.r.value", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              var n = new (R.get(e))(t, this.options, this.file);
                            SRTlib.send("]},");

              return this.parsers[e] = n;
                            SRTlib.send("]},");

            }
          }]), e);
                    SRTlib.send("]},");

        })(), Ze = (function () {
                    SRTlib.send(`{ "anonymous": true, "function": "call.Ze", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          function e(n) {
                        SRTlib.send(`{ "anonymous": false, "function": "e", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            var r = this, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = arguments.length > 2 ? arguments[2] : void 0;
            (t(this, e), i(this, "errors", []), i(this, "raw", O()), i(this, "handleError", function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "i2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              if (!r.options.silentErrors) {
                                SRTlib.send("]},");

                                SRTlib.send("]},");

                                SRTlib.send("]},");

                                SRTlib.send("]},");

                                SRTlib.send("]},");

                                SRTlib.send("]},");

                throw e;
              }
              r.errors.push(e.message);
                            SRTlib.send("]},");

            }), this.chunk = this.normalizeInput(n), this.file = a, this.type = this.constructor.type, this.globalOptions = this.options = s, this.localOptions = s[this.type], this.canTranslate = this.localOptions && this.localOptions.translate);
                        SRTlib.send("]},");

          }
                    SRTlib.send("]},");

          return (r(e, [{
            key: "normalizeInput",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Ze.ReturnStatement.r.value", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send("]},");

              return e instanceof E ? e : new E(e);
                            SRTlib.send("]},");

            }
          }], [{
            key: "findPosition",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Ze.ReturnStatement.r.value2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              var n = e.getUint16(t + 2) + 2, r = "function" == typeof this.headerLength ? this.headerLength(e, t, n) : this.headerLength, i = t + r, s = n - r;
                            SRTlib.send("]},");

              return {
                offset: t,
                length: n,
                headerLength: r,
                start: i,
                size: s,
                end: i + s
              };
                            SRTlib.send("]},");

            }
          }, {
            key: "parse",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Ze.ReturnStatement.r.value3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = new ye(i({}, this.type, t)), r = new this(e, n);
                            SRTlib.send("]},");

              return r.parse();
                            SRTlib.send("]},");

            }
          }]), r(e, [{
            key: "translate",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Ze.ReturnStatement.r.value4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              this.canTranslate && (this.translated = this.translateBlock(this.raw, this.type));
                            SRTlib.send("]},");

            }
          }, {
            key: "translateBlock",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Ze.ReturnStatement.r.value5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              var n = re.get(t), r = ne.get(t), i = te.get(t), s = this.options[t], a = s.reviveValues && !!n, u = s.translateValues && !!r, o = s.translateKeys && !!i, f = {}, h = e;
              Array.isArray(h) || ("function" == typeof h.entries && (h = h.entries()), h = k(h));
              for (var c = 0; c < h.length; c++) {
                var l = h[c], d = l[0], p = l[1];
                (a && n.has(d) ? p = n.get(d)(p) : u && r.has(d) && (p = this.translateValue(p, r.get(d))), o && i.has(d) && (d = i.get(d) || d), f[d] = p);
              }
                            SRTlib.send("]},");

              return f;
                            SRTlib.send("]},");

            }
          }, {
            key: "translateValue",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Ze.ReturnStatement.r.value6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                            SRTlib.send("]},");

              return t[e] || e;
                            SRTlib.send("]},");

            }
          }, {
            key: "assignToOutput",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Ze.ReturnStatement.r.value7", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              this.assignObjectToOutput(e, this.constructor.type, t);
                            SRTlib.send("]},");

            }
          }, {
            key: "assignObjectToOutput",
            value: function (e, t, n) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Ze.ReturnStatement.r.value8", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

              if (this.globalOptions.mergeOutput) {
                                SRTlib.send("]},");

                return y(e, n);
              }
              e[t] ? y(e[t], n) : e[t] = n;
                            SRTlib.send("]},");

            }
          }, {
            key: "output",
            get: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Ze.ReturnStatement.r.get", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return this.translated ? this.translated : this.raw ? g(this.raw) : void 0;
                            SRTlib.send("]},");

            }
          }]), e);
                    SRTlib.send("]},");

        })();
        function $e(e, t, n) {
                    SRTlib.send(`{ "anonymous": false, "function": "$e", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                    SRTlib.send("]},");

          return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e);
                    SRTlib.send("]},");

        }
        (i(Ze, "headerLength", 4), i(Ze, "type", void 0), i(Ze, "multiSegment", !1), i(Ze, "canHandle", function () {
                    SRTlib.send(`{ "anonymous": true, "function": "call.i", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

          return !1;
                    SRTlib.send("]},");

        }));
        function et() {
                    SRTlib.send(`{ "anonymous": false, "function": "et", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

        }
        function tt(e, t) {
                    SRTlib.send(`{ "anonymous": false, "function": "tt", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (!t) {
                        SRTlib.send("]},");

            return e && e.then ? e.then(et) : Promise.resolve();
          }
                    SRTlib.send("]},");

        }
        function nt(e) {
                    SRTlib.send(`{ "anonymous": false, "function": "nt", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var t = e();
          if (t && t.then) {
                        SRTlib.send("]},");

            return t.then(et);
          }
                    SRTlib.send("]},");

        }
        function rt(e, t) {
                    SRTlib.send(`{ "anonymous": false, "function": "rt", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          var n = e();
                    SRTlib.send("]},");

          return n && n.then ? n.then(t) : t(n);
                    SRTlib.send("]},");

        }
        function it(e, t, n) {
                    SRTlib.send(`{ "anonymous": false, "function": "it", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          if (!e.s) {
            if (n instanceof st) {
              if (!n.s) {
                                SRTlib.send("]},");

                return void (n.o = it.bind(null, e, t));
              }
              (1 & t && (t = n.s), n = n.v);
            }
            if (n && n.then) {
                            SRTlib.send("]},");

              return void n.then(it.bind(null, e, t), it.bind(null, e, 2));
            }
            (e.s = t, e.v = n);
            var r = e.o;
            r && r(e);
          }
                    SRTlib.send("]},");

        }
        var st = (function () {
                    SRTlib.send(`{ "anonymous": true, "function": "call.st", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          function e() {
                        SRTlib.send(`{ "anonymous": false, "function": "e", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

          }
                    SRTlib.send("]},");

          return (e.prototype.then = function (t, n) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.st.ReturnStatement.e.prototype.then", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            var r = new e(), i = this.s;
            if (i) {
              var s = 1 & i ? t : n;
              if (s) {
                try {
                  it(r, 1, s(this.v));
                } catch (e) {
                  it(r, 2, e);
                }
                                SRTlib.send("]},");

                return r;
              }
                            SRTlib.send("]},");

              return this;
            }
                        SRTlib.send("]},");

            return (this.o = function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.st.ReturnStatement.e.prototype.then.ReturnStatement.o", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              try {
                var i = e.v;
                1 & e.s ? it(r, 1, t ? t(i) : i) : n ? it(r, 1, n(i)) : it(r, 2, i);
              } catch (e) {
                it(r, 2, e);
              }
                            SRTlib.send("]},");

            }, r);
                        SRTlib.send("]},");

          }, e);
                    SRTlib.send("]},");

        })();
        function at(e) {
                    SRTlib.send(`{ "anonymous": false, "function": "at", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return e instanceof st && 1 & e.s;
                    SRTlib.send("]},");

        }
        function ut(e, t, n) {
                    SRTlib.send(`{ "anonymous": false, "function": "ut", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          for (var r; ; ) {
            var i = e();
            if ((at(i) && (i = i.v), !i)) {
                            SRTlib.send("]},");

              return s;
            }
            if (i.then) {
              r = 0;
              break;
            }
            var s = n();
            if (s && s.then) {
              if (!at(s)) {
                r = 1;
                break;
              }
              s = s.s;
            }
            if (t) {
              var a = t();
              if (a && a.then && !at(a)) {
                r = 2;
                break;
              }
            }
          }
          var u = new st(), o = it.bind(null, u, 2);
                    SRTlib.send("]},");

          return ((0 === r ? i.then(h) : 1 === r ? s.then(f) : a.then(c)).then(void 0, o), u);
          function f(r) {
                        SRTlib.send(`{ "anonymous": false, "function": "f", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            s = r;
            do {
              if (t && (a = t()) && a.then && !at(a)) {
                                SRTlib.send("]},");

                return void a.then(c).then(void 0, o);
              }
              if (!(i = e()) || at(i) && !i.v) {
                                SRTlib.send("]},");

                return void it(u, 1, s);
              }
              if (i.then) {
                                SRTlib.send("]},");

                return void i.then(h).then(void 0, o);
              }
              at(s = n()) && (s = s.v);
            } while (!s || !s.then);
            s.then(f).then(void 0, o);
                        SRTlib.send("]},");

          }
          function h(e) {
                        SRTlib.send(`{ "anonymous": false, "function": "h", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            e ? (s = n()) && s.then ? s.then(f).then(void 0, o) : f(s) : it(u, 1, s);
                        SRTlib.send("]},");

          }
          function c() {
                        SRTlib.send(`{ "anonymous": false, "function": "c", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            (i = e()) ? i.then ? i.then(h).then(void 0, o) : h(i) : it(u, 1, s);
                        SRTlib.send("]},");

          }
                    SRTlib.send("]},");

        }
        function ot(e) {
                    SRTlib.send(`{ "anonymous": false, "function": "ot", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return 192 === e || 194 === e || 196 === e || 219 === e || 221 === e || 218 === e || 254 === e;
                    SRTlib.send("]},");

        }
        function ft(e) {
                    SRTlib.send(`{ "anonymous": false, "function": "ft", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return e >= 224 && e <= 239;
                    SRTlib.send("]},");

        }
        function ht(e, t) {
                    SRTlib.send(`{ "anonymous": false, "function": "ht", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          var n = R;
          Array.isArray(n) || ("function" == typeof n.entries && (n = n.entries()), n = k(n));
          for (var r = 0; r < n.length; r++) {
            var i = n[r], s = i[0];
            if (i[1].canHandle(e, t)) {
                            SRTlib.send("]},");

              return s;
            }
          }
                    SRTlib.send("]},");

        }
        var ct = (function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.ct", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          function n() {
                        SRTlib.send(`{ "anonymous": false, "function": "n", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            var e, r;
            t(this, n);
            for (var s = arguments.length, u = new Array(s), o = 0; o < s; o++) u[o] = arguments[o];
                        SRTlib.send("]},");

            return (i(c(r = l(this, (e = a(n)).call.apply(e, [this].concat(u)))), "appSegments", []), i(c(r), "jpegSegments", []), i(c(r), "unknownSegments", []), r);
                        SRTlib.send("]},");

          }
                    SRTlib.send("]},");

          return (s(n, e), r(n, [{
            key: "parse",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              try {
                var e = this;
                                SRTlib.send("]},");

                return $e(e.findAppSegments(), function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.ReturnStatement.$e", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                    SRTlib.send("]},");

                  return $e(e.readSegments(), function () {
                                        SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.ReturnStatement.$e.ReturnStatement.$e", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    (e.mergeMultiSegments(), e.createParsers());
                                        SRTlib.send("]},");

                  });
                                    SRTlib.send("]},");

                });
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "readSegments",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              try {
                var e = this.appSegments.map(this.ensureSegmentChunk);
                                SRTlib.send("]},");

                return tt(Promise.all(e));
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "setupSegmentFinderArgs",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              var t = this;
              (!0 === e ? (this.findAll = !0, this.wanted = A(R.keyList())) : (e = void 0 === e ? R.keyList().filter(function (e) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.e.filter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                SRTlib.send("]},");

                return t.options[e].enabled;
                                SRTlib.send("]},");

              }) : e.filter(function (e) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.e", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                SRTlib.send("]},");

                return t.options[e].enabled && R.has(e);
                                SRTlib.send("]},");

              }), this.findAll = !1, this.remaining = A(e), this.wanted = A(e)), this.unfinishedMultiSegment = !1);
                            SRTlib.send("]},");

            }
          }, {
            key: "findAppSegments",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
              try {
                var n = this;
                n.setupSegmentFinderArgs(t);
                var r = n.file, i = n.findAll, s = n.wanted, a = n.remaining;
                                SRTlib.send("]},");

                return rt(function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.ReturnStatement.rt", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  if (!i && n.file.chunked) {
                                        SRTlib.send("]},");

                    return (i = k(s).some(function (e) {
                                            SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.ReturnStatement.rt.ReturnStatement.i.some", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                      var t = R.get(e), r = n.options[e];
                                            SRTlib.send("]},");

                      return t.multiSegment && r.multiSegment;
                                            SRTlib.send("]},");

                    }), nt(function () {
                                            SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.ReturnStatement.rt.ReturnStatement.nt", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                      if (i) {
                                                SRTlib.send("]},");

                        return tt(n.file.readWhole());
                      }
                                            SRTlib.send("]},");

                    }));
                  }
                                    SRTlib.send("]},");

                }, function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.ReturnStatement.rt2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  var t = !1;
                  if ((e = n._findAppSegments(e, r.byteLength, i, s, a), !n.options.onlyTiff)) {
                                        SRTlib.send("]},");

                    return (function () {
                                            SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.ReturnStatement.rt.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                      if (r.chunked) {
                        var i = !1;
                                                SRTlib.send("]},");

                        return ut(function () {
                                                    SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.ReturnStatement.rt.ReturnStatement.ReturnStatement.ut", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                                    SRTlib.send("]},");

                          return !t && a.size > 0 && !i && (!!r.canReadNextChunk || !!n.unfinishedMultiSegment);
                                                    SRTlib.send("]},");

                        }, void 0, function () {
                                                    SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.ReturnStatement.rt.ReturnStatement.ReturnStatement.ut2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                          var s = r.nextChunkOffset, a = n.appSegments.some(function (e) {
                                                        SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.ReturnStatement.rt.ReturnStatement.ReturnStatement.ut.a.n.appSegments.some", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                                        SRTlib.send("]},");

                            return !n.file.available(e.offset || e.start, e.length || e.size);
                                                        SRTlib.send("]},");

                          });
                                                    SRTlib.send("]},");

                          return rt(function () {
                                                        SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.ReturnStatement.rt.ReturnStatement.ReturnStatement.ut.ReturnStatement.rt", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                                        SRTlib.send("]},");

                            return e > s && !a ? $e(r.readNextChunk(e), function (e) {
                                                            SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.ReturnStatement.rt.ReturnStatement.ReturnStatement.ut.ReturnStatement.rt.ReturnStatement.$e", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                              i = !e;
                                                            SRTlib.send("]},");

                            }) : $e(r.readNextChunk(s), function (e) {
                                                            SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.ReturnStatement.rt.ReturnStatement.ReturnStatement.ut.ReturnStatement.rt.ReturnStatement.$e2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                              i = !e;
                                                            SRTlib.send("]},");

                            });
                                                        SRTlib.send("]},");

                          }, function () {
                                                        SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.ReturnStatement.rt.ReturnStatement.ReturnStatement.ut.ReturnStatement.rt2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            void 0 === (e = n._findAppSegments(e, r.byteLength)) && (t = !0);
                                                        SRTlib.send("]},");

                          });
                                                    SRTlib.send("]},");

                        });
                      }
                                            SRTlib.send("]},");

                    })();
                  }
                                    SRTlib.send("]},");

                });
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "_findAppSegments",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              for (var n, r, i, s, a, u, o = this.file, f = this.findAll, h = this.wanted, c = this.remaining, l = this.options; e < t; e++) if (255 === o.getUint8(e)) if (ft(n = o.getUint8(e + 1))) {
                if ((r = o.getUint16(e + 2), (i = ht(o, e)) && h.has(i) && (a = (s = R.get(i)).findPosition(o, e), u = l[i], a.type = i, this.appSegments.push(a), !f && (s.multiSegment && u.multiSegment ? (this.unfinishedMultiSegment = a.chunkNumber < a.chunkCount, this.unfinishedMultiSegment || c.delete(i)) : c.delete(i), 0 === c.size)))) break;
                (l.recordUnknownSegments && ((a = Ze.findPosition(o, e)).marker = n, this.unknownSegments.push(a)), e += r + 1);
              } else if (ot(n)) {
                if ((r = o.getUint16(e + 2), 218 === n && !1 !== l.stopAfterSos)) {
                                    SRTlib.send("]},");

                  return;
                }
                (l.recordJpegSegments && this.jpegSegments.push({
                  offset: e,
                  length: r,
                  marker: n
                }), e += r + 1);
              }
                            SRTlib.send("]},");

              return e;
                            SRTlib.send("]},");

            }
          }, {
            key: "mergeMultiSegments",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              var e = this;
              if (this.appSegments.some(function (e) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.appSegments.some", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                SRTlib.send("]},");

                return e.multiSegment;
                                SRTlib.send("]},");

              })) {
                var t = (function (e, t) {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.t", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                  for (var n, r, i, s = O(), a = 0; a < e.length; a++) (n = e[a], r = n[t], s.has(r) ? i = s.get(r) : s.set(r, i = []), i.push(n));
                                    SRTlib.send("]},");

                  return k(s);
                                    SRTlib.send("]},");

                })(this.appSegments, "type");
                this.mergedAppSegments = t.map(function (t) {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.mergedAppSegments", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                  var n = t[0], r = t[1], i = R.get(n, e.options);
                                    SRTlib.send("]},");

                  return i.handleMultiSegments ? {
                    type: n,
                    chunk: i.handleMultiSegments(r)
                  } : r[0];
                                    SRTlib.send("]},");

                });
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "createParsers",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value7", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              try {
                var e = this.mergedAppSegments || this.appSegments;
                Array.isArray(e) || ("function" == typeof e.entries && (e = e.entries()), e = k(e));
                for (var t = 0; t < e.length; t++) {
                  var n = e[t], r = n.type, i = n.chunk;
                  if (this.options[r].enabled) {
                    var s = this.parsers[r];
                    if (s && s.append) ; else if (!s) {
                      var a = new (R.get(r, this.options))(i, this.options, this.file);
                      this.parsers[r] = a;
                    }
                  }
                }
                                SRTlib.send("]},");

                return $e();
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "getSegment",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send("]},");

              return this.appSegments.find(function (t) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.ReturnStatement.appSegments.find", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                SRTlib.send("]},");

                return t.type === e;
                                SRTlib.send("]},");

              });
                            SRTlib.send("]},");

            }
          }, {
            key: "getOrFindSegment",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              try {
                var t = this, n = t.getSegment(e);
                                SRTlib.send("]},");

                return rt(function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.ReturnStatement.rt3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  if (void 0 === n) {
                                        SRTlib.send("]},");

                    return $e(t.findAppSegments(0, [e]), function () {
                                            SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.ReturnStatement.rt.ReturnStatement.$e", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                      n = t.getSegment(e);
                                            SRTlib.send("]},");

                    });
                  }
                                    SRTlib.send("]},");

                }, function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.ct.ReturnStatement.r.value.ReturnStatement.rt4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                    SRTlib.send("]},");

                  return n;
                                    SRTlib.send("]},");

                });
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }]), n);
                    SRTlib.send("]},");

        })(Qe);
        function lt() {
                    SRTlib.send(`{ "anonymous": false, "function": "lt", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

        }
        N.set("jpeg", ct);
        function dt(e, t) {
                    SRTlib.send(`{ "anonymous": false, "function": "dt", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (!t) {
                        SRTlib.send("]},");

            return e && e.then ? e.then(lt) : Promise.resolve();
          }
                    SRTlib.send("]},");

        }
        function pt(e, t) {
                    SRTlib.send(`{ "anonymous": false, "function": "pt", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          var n = e();
                    SRTlib.send("]},");

          return n && n.then ? n.then(t) : t(n);
                    SRTlib.send("]},");

        }
        var vt = [void 0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, 4];
        var yt = (function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.yt", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          function n() {
                        SRTlib.send(`{ "anonymous": false, "function": "n", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return (t(this, n), l(this, a(n).apply(this, arguments)));
                        SRTlib.send("]},");

          }
                    SRTlib.send("]},");

          return (s(n, e), r(n, [{
            key: "parse",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              try {
                var e = this;
                                SRTlib.send("]},");

                return (e.parseHeader(), pt(function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  if (e.options.ifd0.enabled) {
                                        SRTlib.send("]},");

                    return dt(e.parseIfd0Block());
                  }
                                    SRTlib.send("]},");

                }, function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                    SRTlib.send("]},");

                  return pt(function () {
                                        SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt.ReturnStatement.pt", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    if (e.options.exif.enabled) {
                                            SRTlib.send("]},");

                      return dt(e.saveParseBlock("parseExifBlock"));
                    }
                                        SRTlib.send("]},");

                  }, function () {
                                        SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt.ReturnStatement.pt2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                        SRTlib.send("]},");

                    return pt(function () {
                                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt.ReturnStatement.pt.ReturnStatement.pt", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                      if (e.options.gps.enabled) {
                                                SRTlib.send("]},");

                        return dt(e.saveParseBlock("parseGpsBlock"));
                      }
                                            SRTlib.send("]},");

                    }, function () {
                                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt.ReturnStatement.pt.ReturnStatement.pt2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                            SRTlib.send("]},");

                      return pt(function () {
                                                SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt.ReturnStatement.pt.ReturnStatement.pt.ReturnStatement.pt", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        if (e.options.interop.enabled) {
                                                    SRTlib.send("]},");

                          return dt(e.saveParseBlock("parseInteropBlock"));
                        }
                                                SRTlib.send("]},");

                      }, function () {
                                                SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt.ReturnStatement.pt.ReturnStatement.pt.ReturnStatement.pt2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                                SRTlib.send("]},");

                        return pt(function () {
                                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt.ReturnStatement.pt.ReturnStatement.pt.ReturnStatement.pt.ReturnStatement.pt", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                          if (e.options.ifd1.enabled) {
                                                        SRTlib.send("]},");

                            return dt(e.saveParseBlock("parseThumbnailBlock"));
                          }
                                                    SRTlib.send("]},");

                        }, function () {
                                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt.ReturnStatement.pt.ReturnStatement.pt.ReturnStatement.pt.ReturnStatement.pt2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                                    SRTlib.send("]},");

                          return e.createOutput();
                                                    SRTlib.send("]},");

                        });
                                                SRTlib.send("]},");

                      });
                                            SRTlib.send("]},");

                    });
                                        SRTlib.send("]},");

                  });
                                    SRTlib.send("]},");

                }));
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "saveParseBlock",
            value: function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              try {
                var t = this;
                                SRTlib.send("]},");

                return (function (e, t) {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                  try {
                    var n = e();
                  } catch (e) {
                                        SRTlib.send("]},");

                    return t(e);
                  }
                                    SRTlib.send("]},");

                  return n && n.then ? n.then(void 0, t) : n;
                                    SRTlib.send("]},");

                })(function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                    SRTlib.send("]},");

                  return (n = t[e](), i ? r ? r(n) : n : (n && n.then || (n = Promise.resolve(n)), r ? n.then(r) : n));
                  var n, r, i;
                                    SRTlib.send("]},");

                }, function (e) {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                  t.handleError(e);
                                    SRTlib.send("]},");

                });
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "findIfd0Offset",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              void 0 === this.ifd0Offset && (this.ifd0Offset = this.chunk.getUint32(4));
                            SRTlib.send("]},");

            }
          }, {
            key: "findIfd1Offset",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              if (void 0 === this.ifd1Offset) {
                this.findIfd0Offset();
                var e = this.chunk.getUint16(this.ifd0Offset), t = this.ifd0Offset + 2 + 12 * e;
                this.ifd1Offset = this.chunk.getUint32(t);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "parseBlock",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              var n = O();
                            SRTlib.send("]},");

              return (this[t] = n, this.parseTags(e, t, n), n);
                            SRTlib.send("]},");

            }
          }, {
            key: "parseIfd0Block",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              try {
                var e = this;
                if (e.ifd0) {
                                    SRTlib.send("]},");

                  return;
                }
                if ((e.findIfd0Offset(), e.ifd0Offset < 8)) {
                                    SRTlib.send("]},");

                  throw T("Invalid EXIF data: IFD0 offset should be less than 8");
                }
                if (!e.file.chunked && e.ifd0Offset > e.file.byteLength) {
                                    SRTlib.send("]},");

                  throw T(("IFD0 offset points to outside of file.\nthis.ifd0Offset: ").concat(e.ifd0Offset, ", file.byteLength: ").concat(e.file.byteLength));
                }
                                SRTlib.send("]},");

                return pt(function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  if (e.file.isTiff) {
                                        SRTlib.send("]},");

                    return dt(e.file.ensureChunk(e.ifd0Offset, L(e.options)));
                  }
                                    SRTlib.send("]},");

                }, function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  var t = e.parseBlock(e.ifd0Offset, "ifd0");
                  if (0 !== t.size) {
                                        SRTlib.send("]},");

                    return (e.exifOffset = t.get(34665), e.interopOffset = t.get(40965), e.gpsOffset = t.get(34853), e.xmp = t.get(700), e.iptc = t.get(33723), e.icc = t.get(34675), e.options.sanitize && (t.delete(34665), t.delete(40965), t.delete(34853), t.delete(700), t.delete(33723), t.delete(34675)), t);
                  }
                                    SRTlib.send("]},");

                });
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "ensureBlockChunk",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value7", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              try {
                var n = this;
                                SRTlib.send("]},");

                return pt(function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  if (n.file.isTiff) {
                                        SRTlib.send("]},");

                    return dt(n.file.ensureChunk(e, t));
                  }
                                    SRTlib.send("]},");

                }, function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  e > n.chunk.byteLength && (n.chunk = E.from(n.file, n.le));
                                    SRTlib.send("]},");

                });
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "parseExifBlock",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value8", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              try {
                var e = this;
                if (e.exif) {
                                    SRTlib.send("]},");

                  return;
                }
                                SRTlib.send("]},");

                return pt(function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt7", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  if (!e.ifd0) {
                                        SRTlib.send("]},");

                    return dt(e.parseIfd0Block());
                  }
                                    SRTlib.send("]},");

                }, function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt8", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  if (void 0 !== e.exifOffset) {
                                        SRTlib.send("]},");

                    return pt(function () {
                                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt.ReturnStatement.pt3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                      if (e.file.isTiff) {
                                                SRTlib.send("]},");

                        return dt(e.file.ensureChunk(e.exifOffset, L(e.options)));
                      }
                                            SRTlib.send("]},");

                    }, function () {
                                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt.ReturnStatement.pt4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                      var t = e.parseBlock(e.exifOffset, "exif");
                                            SRTlib.send("]},");

                      return (e.interopOffset || (e.interopOffset = t.get(40965)), e.makerNote = t.get(37500), e.userComment = t.get(37510), e.options.sanitize && (t.delete(40965), t.delete(37500), t.delete(37510)), e.unpack(t, 41728), e.unpack(t, 41729), t);
                                            SRTlib.send("]},");

                    });
                  }
                                    SRTlib.send("]},");

                });
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "unpack",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value9", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              var n = e.get(t);
              n && 1 === n.length && e.set(t, n[0]);
                            SRTlib.send("]},");

            }
          }, {
            key: "parseGpsBlock",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value10", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              try {
                var e = this;
                if (e.gps) {
                                    SRTlib.send("]},");

                  return;
                }
                                SRTlib.send("]},");

                return pt(function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt9", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  if (!e.ifd0) {
                                        SRTlib.send("]},");

                    return dt(e.parseIfd0Block());
                  }
                                    SRTlib.send("]},");

                }, function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt10", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  if (void 0 !== e.gpsOffset) {
                    var t = e.parseBlock(e.gpsOffset, "gps");
                                        SRTlib.send("]},");

                    return (t && t.has(2) && t.has(4) && (t.set("latitude", gt.apply(void 0, t.get(2).concat([t.get(1)]))), t.set("longitude", gt.apply(void 0, t.get(4).concat([t.get(3)])))), t);
                  }
                                    SRTlib.send("]},");

                });
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "parseInteropBlock",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value11", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              try {
                var e = this;
                if (e.interop) {
                                    SRTlib.send("]},");

                  return;
                }
                                SRTlib.send("]},");

                return pt(function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt11", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  if (!e.ifd0) {
                                        SRTlib.send("]},");

                    return dt(e.parseIfd0Block());
                  }
                                    SRTlib.send("]},");

                }, function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt12", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                    SRTlib.send("]},");

                  return pt(function () {
                                        SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt.ReturnStatement.pt5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    if (void 0 === e.interopOffset && !e.exif) {
                                            SRTlib.send("]},");

                      return dt(e.parseExifBlock());
                    }
                                        SRTlib.send("]},");

                  }, function () {
                                        SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt.ReturnStatement.pt6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    if (void 0 !== e.interopOffset) {
                                            SRTlib.send("]},");

                      return e.parseBlock(e.interopOffset, "interop");
                    }
                                        SRTlib.send("]},");

                  });
                                    SRTlib.send("]},");

                });
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "parseThumbnailBlock",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value12", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              try {
                var t = this;
                if (t.ifd1 || t.ifd1Parsed) {
                                    SRTlib.send("]},");

                  return;
                }
                if (t.options.mergeOutput && !e) {
                                    SRTlib.send("]},");

                  return;
                }
                                SRTlib.send("]},");

                return (t.findIfd1Offset(), t.ifd1Offset > 0 && (t.parseBlock(t.ifd1Offset, "ifd1"), t.ifd1Parsed = !0), t.ifd1);
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "extractThumbnail",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value13", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              try {
                var e = this;
                                SRTlib.send("]},");

                return (e.headerParsed || e.parseHeader(), pt(function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt13", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  if (!e.ifd1Parsed) {
                                        SRTlib.send("]},");

                    return dt(e.parseThumbnailBlock(!0));
                  }
                                    SRTlib.send("]},");

                }, function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.pt14", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  if (void 0 !== e.ifd1) {
                    var t = e.ifd1.get(513), n = e.ifd1.get(514);
                                        SRTlib.send("]},");

                    return e.chunk.getUint8Array(t, n);
                  }
                                    SRTlib.send("]},");

                }));
              } catch (e) {
                                SRTlib.send("]},");

                return Promise.reject(e);
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "createOutput",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value14", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              var e, t, n, r = {}, i = ue;
              Array.isArray(i) || ("function" == typeof i.entries && (i = i.entries()), i = k(i));
              for (var s = 0; s < i.length; s++) if (!V(e = this[t = i[s]])) if ((n = this.canTranslate ? this.translateBlock(e, t) : g(e), this.options.mergeOutput)) {
                if ("ifd1" === t) continue;
                y(r, n);
              } else r[t] = n;
                            SRTlib.send("]},");

              return (this.makerNote && (r.makerNote = this.makerNote), this.userComment && (r.userComment = this.userComment), r);
                            SRTlib.send("]},");

            }
          }, {
            key: "assignToOutput",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value15", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              if (this.globalOptions.mergeOutput) y(e, t); else {
                var n = v(t);
                Array.isArray(n) || ("function" == typeof n.entries && (n = n.entries()), n = k(n));
                for (var r = 0; r < n.length; r++) {
                  var i = n[r], s = i[0], a = i[1];
                  this.assignObjectToOutput(e, s, a);
                }
              }
                            SRTlib.send("]},");

            }
          }, {
            key: "image",
            get: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.get", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return this.ifd0;
                            SRTlib.send("]},");

            }
          }, {
            key: "thumbnail",
            get: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.get2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

              return this.ifd1;
                            SRTlib.send("]},");

            }
          }], [{
            key: "canHandle",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value16", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                            SRTlib.send("]},");

              return 225 === e.getUint8(t + 1) && 1165519206 === e.getUint32(t + 4) && 0 === e.getUint16(t + 8);
                            SRTlib.send("]},");

            }
          }]), n);
                    SRTlib.send("]},");

        })((function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.yt2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          function n() {
                        SRTlib.send(`{ "anonymous": false, "function": "n", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return (t(this, n), l(this, a(n).apply(this, arguments)));
                        SRTlib.send("]},");

          }
                    SRTlib.send("]},");

          return (s(n, e), r(n, [{
            key: "parseHeader",
            value: function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value17", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              var e = this.chunk.getUint16();
              if (18761 === e) this.le = !0; else {
                if (19789 !== e) {
                                    SRTlib.send("]},");

                  throw T("Invalid EXIF data: expected byte order marker (0x4949 or 0x4D4D).");
                }
                this.le = !1;
              }
              if ((this.chunk.le = this.le, 42 !== this.chunk.getUint16(2))) {
                                SRTlib.send("]},");

                throw T("Invalid EXIF data: expected 0x002A.");
              }
              this.headerParsed = !0;
                            SRTlib.send("]},");

            }
          }, {
            key: "parseTags",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value18", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O(), r = this.options[t], i = r.pick, s = r.skip, a = (i = A(i)).size > 0, u = 0 === s.size, o = this.chunk.getUint16(e);
              e += 2;
              for (var f = 0; f < o; f++) {
                var h = this.chunk.getUint16(e);
                if (a) {
                  if (i.has(h) && (n.set(h, this.parseTag(e, h, t)), i.delete(h), 0 === i.size)) break;
                } else !u && s.has(h) || n.set(h, this.parseTag(e, h, t));
                e += 12;
              }
                            SRTlib.send("]},");

              return n;
                            SRTlib.send("]},");

            }
          }, {
            key: "parseTag",
            value: function (e, t, n) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value19", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

              var r, i = this.chunk.getUint16(e + 2), s = this.chunk.getUint32(e + 4), a = vt[i];
              if ((a * s <= 4 ? e += 8 : e = this.chunk.getUint32(e + 8), i < 1 || i > 13)) {
                                SRTlib.send("]},");

                throw T(("Invalid TIFF value type. block: ").concat(n.toUpperCase(), ", tag: ").concat(t.toString(16), ", type: ").concat(i, ", offset ").concat(e));
              }
              if (e > this.chunk.byteLength) {
                                SRTlib.send("]},");

                throw T(("Invalid TIFF value offset. block: ").concat(n.toUpperCase(), ", tag: ").concat(t.toString(16), ", type: ").concat(i, ", offset ").concat(e, " is outside of chunk size ").concat(this.chunk.byteLength));
              }
              if (1 === i) {
                                SRTlib.send("]},");

                return this.chunk.getUint8Array(e, s);
              }
              if (2 === i) {
                                SRTlib.send("]},");

                return "" === (r = (function (e) {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.ReturnStatement.r.trim", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                  for (; e.endsWith("\0"); ) e = e.slice(0, -1);
                                    SRTlib.send("]},");

                  return e;
                                    SRTlib.send("]},");

                })(r = this.chunk.getString(e, s)).trim()) ? void 0 : r;
              }
              if (7 === i) {
                                SRTlib.send("]},");

                return this.chunk.getUint8Array(e, s);
              }
              if (1 === s) {
                                SRTlib.send("]},");

                return this.parseTagValue(i, e);
              }
              for (var u = new ((function (e) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value.u", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                switch (e) {
                  case 1:
                                        SRTlib.send("]},");

                                        SRTlib.send("]},");

                    return Uint8Array;
                  case 3:
                                        SRTlib.send("]},");

                                        SRTlib.send("]},");

                    return Uint16Array;
                  case 4:
                                        SRTlib.send("]},");

                                        SRTlib.send("]},");

                    return Uint32Array;
                  case 5:
                                        SRTlib.send("]},");

                                        SRTlib.send("]},");

                    return Array;
                  case 6:
                                        SRTlib.send("]},");

                                        SRTlib.send("]},");

                    return Int8Array;
                  case 8:
                                        SRTlib.send("]},");

                                        SRTlib.send("]},");

                    return Int16Array;
                  case 9:
                                        SRTlib.send("]},");

                                        SRTlib.send("]},");

                    return Int32Array;
                  case 10:
                                        SRTlib.send("]},");

                                        SRTlib.send("]},");

                    return Array;
                  case 11:
                                        SRTlib.send("]},");

                                        SRTlib.send("]},");

                    return Float32Array;
                  case 12:
                                        SRTlib.send("]},");

                                        SRTlib.send("]},");

                    return Float64Array;
                  default:
                                        SRTlib.send("]},");

                                        SRTlib.send("]},");

                    return Array;
                }
                                SRTlib.send("]},");

              })(i))(s), o = a, f = 0; f < s; f++) (u[f] = this.parseTagValue(i, e), e += o);
                            SRTlib.send("]},");

              return u;
                            SRTlib.send("]},");

            }
          }, {
            key: "parseTagValue",
            value: function (e, t) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.yt.ReturnStatement.r.value20", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              switch (e) {
                case 1:
                                    SRTlib.send("]},");

                  return this.chunk.getUint8(t);
                case 3:
                                    SRTlib.send("]},");

                  return this.chunk.getUint16(t);
                case 4:
                                    SRTlib.send("]},");

                  return this.chunk.getUint32(t);
                case 5:
                                    SRTlib.send("]},");

                  return this.chunk.getUint32(t) / this.chunk.getUint32(t + 4);
                case 6:
                                    SRTlib.send("]},");

                  return this.chunk.getInt8(t);
                case 8:
                                    SRTlib.send("]},");

                  return this.chunk.getInt16(t);
                case 9:
                                    SRTlib.send("]},");

                  return this.chunk.getInt32(t);
                case 10:
                                    SRTlib.send("]},");

                  return this.chunk.getInt32(t) / this.chunk.getInt32(t + 4);
                case 11:
                                    SRTlib.send("]},");

                  return this.chunk.getFloat(t);
                case 12:
                                    SRTlib.send("]},");

                  return this.chunk.getDouble(t);
                case 13:
                                    SRTlib.send("]},");

                  return this.chunk.getUint32(t);
                default:
                                    SRTlib.send("]},");

                  throw T(("Invalid tiff type ").concat(e));
              }
                            SRTlib.send("]},");

            }
          }]), n);
                    SRTlib.send("]},");

        })(Ze));
        function gt(e, t, n, r) {
                    SRTlib.send(`{ "anonymous": false, "function": "gt", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

          var i = e + t / 60 + n / 3600;
                    SRTlib.send("]},");

          return ("S" !== r && "W" !== r || (i *= -1), i);
                    SRTlib.send("]},");

        }
        (i(yt, "type", "tiff"), i(yt, "headerLength", 10), R.set("tiff", yt), e.Exifr = xe, e.Options = ye, e.allFormatters = ce, e.chunkedProps = ie, e.createDictionary = $, e.default = Re, e.disableAllOptions = be, e.extendDictionary = ee, e.fetchUrlAsArrayBuffer = Y, e.fileParsers = N, e.fileReaders = W, e.gps = Ie, e.gpsOnlyOptions = we, e.inheritables = he, e.orientation = _e, e.orientationOnlyOptions = Ae, e.otherSegments = se, e.parse = Le, e.readBlobAsArrayBuffer = H, e.rotation = je, e.rotations = ze, e.segmentParsers = R, e.segments = ae, e.segmentsAndBlocks = oe, e.tagKeys = te, e.tagRevivers = re, e.tagValues = ne, e.thumbnail = Te, e.thumbnailOnlyOptions = Oe, e.thumbnailUrl = Ve, e.tiffBlocks = ue, e.tiffExtractables = fe, Object.defineProperty(e, "__esModule", {
          value: !0
        }));
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer);
        SRTlib.send("]},");

  }, {
    "_process": 15,
    "buffer": 2
  }],
  30: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey37", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = {
      "name": "@uppy/thumbnail-generator",
      "description": "Uppy plugin that generates small previews of images to show on your upload UI.",
      "version": "1.6.0",
      "license": "MIT",
      "main": "lib/index.js",
      "types": "types/index.d.ts",
      "keywords": ["file uploader", "uppy", "uppy-plugin", "thumbnail", "preview", "resize"],
      "homepage": "https://uppy.io",
      "bugs": {
        "url": "https://github.com/transloadit/uppy/issues"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/transloadit/uppy.git"
      },
      "dependencies": {
        "@uppy/utils": "file:../utils",
        "exifr": "^5.0.1",
        "math-log2": "^1.0.1"
      },
      "peerDependencies": {
        "@uppy/core": "^1.0.0"
      }
    };
        SRTlib.send("]},");

  }, {}],
  31: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey40", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    function _extends() {
            SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_extends6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send("]},");

        return target;
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

      return _extends.apply(this, arguments);
            SRTlib.send("]},");

    }
    var has = require('./hasProperty');
    module.exports = (function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      function Translator(locales) {
                SRTlib.send(`{ "anonymous": false, "function": "Translator", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this = this;
        this.locale = {
          strings: {},
          pluralize: function pluralize(n) {
                        SRTlib.send(`{ "anonymous": true, "function": "locale.pluralize.pluralize", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (n === 1) {
                            SRTlib.send("]},");

              return 0;
            }
                        SRTlib.send("]},");

            return 1;
                        SRTlib.send("]},");

          }
        };
        if (Array.isArray(locales)) {
          locales.forEach(function (locale) {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey38", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return _this._apply(locale);
                        SRTlib.send("]},");

          });
        } else {
          this._apply(locales);
        }
                SRTlib.send("]},");

      }
      var _proto = Translator.prototype;
      _proto._apply = function _apply(locale) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._apply._apply", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (!locale || !locale.strings) {
                    SRTlib.send("]},");

          return;
        }
        var prevLocale = this.locale;
        this.locale = _extends({}, prevLocale, {
          strings: _extends({}, prevLocale.strings, locale.strings)
        });
        this.locale.pluralize = locale.pluralize || prevLocale.pluralize;
                SRTlib.send("]},");

      };
      _proto.interpolate = function interpolate(phrase, options) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.interpolate.interpolate", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _String$prototype = String.prototype, split = _String$prototype.split, replace = _String$prototype.replace;
        var dollarRegex = /\$/g;
        var dollarBillsYall = '$$$$';
        var interpolated = [phrase];
        for (var arg in options) {
          if (arg !== '_' && has(options, arg)) {
            var replacement = options[arg];
            if (typeof replacement === 'string') {
              replacement = replace.call(options[arg], dollarRegex, dollarBillsYall);
            }
            interpolated = insertReplacement(interpolated, new RegExp('%\\{' + arg + '\\}', 'g'), replacement);
          }
        }
                SRTlib.send("]},");

        return interpolated;
        function insertReplacement(source, rx, replacement) {
                    SRTlib.send(`{ "anonymous": false, "function": "insertReplacement", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          var newParts = [];
          source.forEach(function (chunk) {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey39", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (typeof chunk !== 'string') {
                            SRTlib.send("]},");

              return newParts.push(chunk);
            }
            split.call(chunk, rx).forEach(function (raw, i, list) {
                            SRTlib.send(`{ "anonymous": true, "function": "forEach4", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

              if (raw !== '') {
                newParts.push(raw);
              }
              if (i < list.length - 1) {
                newParts.push(replacement);
              }
                            SRTlib.send("]},");

            });
                        SRTlib.send("]},");

          });
                    SRTlib.send("]},");

          return newParts;
                    SRTlib.send("]},");

        }
                SRTlib.send("]},");

      };
      _proto.translate = function translate(key, options) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.translate.translate", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                SRTlib.send("]},");

        return this.translateArray(key, options).join('');
                SRTlib.send("]},");

      };
      _proto.translateArray = function translateArray(key, options) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.translateArray.translateArray", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var string = this.locale.strings[key];
        var hasPluralForms = typeof string === 'object';
        if (hasPluralForms) {
          if (options && typeof options.smart_count !== 'undefined') {
            var plural = this.locale.pluralize(options.smart_count);
                        SRTlib.send("]},");

            return this.interpolate(string[plural], options);
          } else {
                        SRTlib.send("]},");

                        SRTlib.send("]},");

                        SRTlib.send("]},");

            throw new Error('Attempted to use a string with plural forms, but no value was given for %{smart_count}');
          }
        }
                SRTlib.send("]},");

        return this.interpolate(string, options);
                SRTlib.send("]},");

      };
            SRTlib.send("]},");

      return Translator;
            SRTlib.send("]},");

    })();
        SRTlib.send("]},");

  }, {
    "./hasProperty": 38
  }],
  32: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey41", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function dataURItoBlob(dataURI, opts, toFile) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.dataURItoBlob", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      var data = dataURI.split(',')[1];
      var mimeType = opts.mimeType || dataURI.split(',')[0].split(':')[1].split(';')[0];
      if (mimeType == null) {
        mimeType = 'plain/text';
      }
      var binary = atob(data);
      var array = [];
      for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }
      var bytes;
      try {
        bytes = new Uint8Array(array);
      } catch (err) {
                SRTlib.send("]},");

        return null;
      }
      if (toFile) {
                SRTlib.send("]},");

        return new File([bytes], opts.name || '', {
          type: mimeType
        });
      }
            SRTlib.send("]},");

      return new Blob([bytes], {
        type: mimeType
      });
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }, {}],
  33: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey42", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var isDOMElement = require('./isDOMElement');
    module.exports = function findDOMElement(element, context) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.findDOMElement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (context === void 0) {
        context = document;
      }
      if (typeof element === 'string') {
                SRTlib.send("]},");

        return context.querySelector(element);
      }
      if (isDOMElement(element)) {
                SRTlib.send("]},");

        return element;
      }
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }, {
    "./isDOMElement": 39
  }],
  34: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey43", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function generateFileID(file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.generateFileID", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var id = 'uppy';
      if (typeof file.name === 'string') {
        id += '-' + encodeFilename(file.name.toLowerCase());
      }
      if (file.type !== undefined) {
        id += '-' + file.type;
      }
      if (file.meta && typeof file.meta.relativePath === 'string') {
        id += '-' + encodeFilename(file.meta.relativePath.toLowerCase());
      }
      if (file.data.size !== undefined) {
        id += '-' + file.data.size;
      }
      if (file.data.lastModified !== undefined) {
        id += '-' + file.data.lastModified;
      }
            SRTlib.send("]},");

      return id;
            SRTlib.send("]},");

    };
    function encodeFilename(name) {
            SRTlib.send(`{ "anonymous": false, "function": "encodeFilename", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var suffix = '';
            SRTlib.send("]},");

      return name.replace(/[^A-Z0-9]/ig, function (character) {
                SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement13", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        suffix += '-' + encodeCharacter(character);
                SRTlib.send("]},");

        return '/';
                SRTlib.send("]},");

      }) + suffix;
            SRTlib.send("]},");

    }
    function encodeCharacter(character) {
            SRTlib.send(`{ "anonymous": false, "function": "encodeCharacter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return character.charCodeAt(0).toString(32);
            SRTlib.send("]},");

    }
        SRTlib.send("]},");

  }, {}],
  35: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey44", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function getFileNameAndExtension(fullFileName) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.getFileNameAndExtension", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var lastDot = fullFileName.lastIndexOf('.');
      if (lastDot === -1 || lastDot === fullFileName.length - 1) {
                SRTlib.send("]},");

        return {
          name: fullFileName,
          extension: undefined
        };
      } else {
                SRTlib.send("]},");

        return {
          name: fullFileName.slice(0, lastDot),
          extension: fullFileName.slice(lastDot + 1)
        };
      }
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }, {}],
  36: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey45", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var getFileNameAndExtension = require('./getFileNameAndExtension');
    var mimeTypes = require('./mimeTypes');
    module.exports = function getFileType(file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.getFileType", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var fileExtension = file.name ? getFileNameAndExtension(file.name).extension : null;
      fileExtension = fileExtension ? fileExtension.toLowerCase() : null;
      if (file.type) {
                SRTlib.send("]},");

        return file.type;
      } else if (fileExtension && mimeTypes[fileExtension]) {
                SRTlib.send("]},");

        return mimeTypes[fileExtension];
      } else {
                SRTlib.send("]},");

        return 'application/octet-stream';
      }
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }, {
    "./getFileNameAndExtension": 35,
    "./mimeTypes": 42
  }],
  37: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey46", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function getTimeStamp() {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.getTimeStamp", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var date = new Date();
      var hours = pad(date.getHours().toString());
      var minutes = pad(date.getMinutes().toString());
      var seconds = pad(date.getSeconds().toString());
            SRTlib.send("]},");

      return hours + ':' + minutes + ':' + seconds;
            SRTlib.send("]},");

    };
    function pad(str) {
            SRTlib.send(`{ "anonymous": false, "function": "pad", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return str.length !== 2 ? 0 + str : str;
            SRTlib.send("]},");

    }
        SRTlib.send("]},");

  }, {}],
  38: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey47", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function has(object, key) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.has", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            SRTlib.send("]},");

      return Object.prototype.hasOwnProperty.call(object, key);
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }, {}],
  39: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey48", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function isDOMElement(obj) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.isDOMElement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return obj && typeof obj === 'object' && obj.nodeType === Node.ELEMENT_NODE;
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }, {}],
  40: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey49", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function isObjectURL(url) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.isObjectURL", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return url.indexOf('blob:') === 0;
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }, {}],
  41: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey50", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function isPreviewSupported(fileType) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.isPreviewSupported", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!fileType) {
                SRTlib.send("]},");

        return false;
      }
      var fileTypeSpecific = fileType.split('/')[1];
      if ((/^(jpe?g|gif|png|svg|svg\+xml|bmp|webp)$/).test(fileTypeSpecific)) {
                SRTlib.send("]},");

        return true;
      }
            SRTlib.send("]},");

      return false;
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }, {}],
  42: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey51", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = {
      md: 'text/markdown',
      markdown: 'text/markdown',
      mp4: 'video/mp4',
      mp3: 'audio/mp3',
      svg: 'image/svg+xml',
      jpg: 'image/jpeg',
      png: 'image/png',
      gif: 'image/gif',
      heic: 'image/heic',
      heif: 'image/heif',
      yaml: 'text/yaml',
      yml: 'text/yaml',
      csv: 'text/csv',
      tsv: 'text/tab-separated-values',
      tab: 'text/tab-separated-values',
      avi: 'video/x-msvideo',
      mks: 'video/x-matroska',
      mkv: 'video/x-matroska',
      mov: 'video/quicktime',
      doc: 'application/msword',
      docm: 'application/vnd.ms-word.document.macroenabled.12',
      docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      dot: 'application/msword',
      dotm: 'application/vnd.ms-word.template.macroenabled.12',
      dotx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
      xla: 'application/vnd.ms-excel',
      xlam: 'application/vnd.ms-excel.addin.macroenabled.12',
      xlc: 'application/vnd.ms-excel',
      xlf: 'application/x-xliff+xml',
      xlm: 'application/vnd.ms-excel',
      xls: 'application/vnd.ms-excel',
      xlsb: 'application/vnd.ms-excel.sheet.binary.macroenabled.12',
      xlsm: 'application/vnd.ms-excel.sheet.macroenabled.12',
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      xlt: 'application/vnd.ms-excel',
      xltm: 'application/vnd.ms-excel.template.macroenabled.12',
      xltx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
      xlw: 'application/vnd.ms-excel',
      txt: 'text/plain',
      text: 'text/plain',
      conf: 'text/plain',
      log: 'text/plain',
      pdf: 'application/pdf'
    };
        SRTlib.send("]},");

  }, {}],
  43: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey52", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function toArray(list) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.toArray", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return Array.prototype.slice.call(list || [], 0);
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }, {}],
  44: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey56", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    require('es6-promise/auto');
    require('whatwg-fetch');
    var Uppy = require('@uppy/core');
    var ThumbnailGenerator = require('@uppy/thumbnail-generator');
    var FileInput = require('@uppy/file-input');
    var uppyThumbnails = Uppy({
      id: 'uppyThumbnails',
      autoProceed: false,
      debug: true
    });
    uppyThumbnails.use(ThumbnailGenerator, {});
    uppyThumbnails.use(FileInput, {
      target: '#uppyThumbnails',
      pretty: false
    });
    uppyThumbnails.on('file-added', function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey53", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var el = document.createElement('p');
      el.className = 'file-name';
      el.textContent = file.name;
      document.body.appendChild(el);
            SRTlib.send("]},");

    });
    uppyThumbnails.on('thumbnail:error', function (file, err) {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey54", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var el = document.createElement('pre');
      el.style = 'font: 14pt monospace; background: red; color: white';
      el.textContent = "Error: " + err.stack;
      document.body.appendChild(el);
            SRTlib.send("]},");

    });
    uppyThumbnails.on('thumbnail:generated', function (file, preview) {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey55", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var img = new Image();
      img.src = file.preview;
      img.className = 'file-preview';
      img.style.display = 'block';
      document.body.appendChild(img);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }, {
    "@uppy/core": 19,
    "@uppy/file-input": 24,
    "@uppy/thumbnail-generator": 28,
    "es6-promise/auto": 7,
    "whatwg-fetch": 16
  }]
}, {}, [44]);
