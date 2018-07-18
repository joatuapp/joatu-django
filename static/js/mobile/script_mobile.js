if (function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function i(t) {
        var e = t.length,
            i = oe.type(t);
        return "function" === i || oe.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function n(t, e, i) {
        if (oe.isFunction(e)) return oe.grep(t, function (t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return oe.grep(t, function (t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (de.test(e)) return oe.filter(e, t, i);
            e = oe.filter(e, t)
        }
        return oe.grep(t, function (t) {
            return oe.inArray(t, e) >= 0 !== i
        })
    }

    function o(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function r(t) {
        var e = _e[t] = {};
        return oe.each(t.match(be) || [], function (t, i) {
            e[i] = !0
        }), e
    }

    function s() {
        fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (fe.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
        (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (s(), oe.ready())
    }

    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(Ce, "-$1").toLowerCase();
            if (i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : De.test(i) ? oe.parseJSON(i) : i
                } catch (o) {}
                oe.data(t, e, i)
            } else i = void 0
        }
        return i
    }

    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e || !oe.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function c(t, e, i, n) {
        if (oe.acceptData(t)) {
            var o, r, s = oe.expando,
                a = t.nodeType,
                l = a ? oe.cache : t,
                u = a ? t[s] : t[s] && s;
            if (u && l[u] && (n || l[u].data) || void 0 !== i || "string" != typeof e) return u || (u = a ? t[s] = X.pop() || oe.guid++ : s), l[u] || (l[u] = a ? {} : {
                toJSON: oe.noop
            }), ("object" == typeof e || "function" == typeof e) && (n ? l[u] = oe.extend(l[u], e) : l[u].data = oe.extend(l[u].data, e)), r = l[u], n || (r.data || (r.data = {}), r = r.data), void 0 !== i && (r[oe.camelCase(e)] = i), "string" == typeof e ? (o = r[e], null == o && (o = r[oe.camelCase(e)])) : o = r, o
        }
    }

    function h(t, e, i) {
        if (oe.acceptData(t)) {
            var n, o, r = t.nodeType,
                s = r ? oe.cache : t,
                a = r ? t[oe.expando] : oe.expando;
            if (s[a]) {
                if (e && (n = i ? s[a] : s[a].data)) {
                    oe.isArray(e) ? e = e.concat(oe.map(e, oe.camelCase)) : e in n ? e = [e] : (e = oe.camelCase(e), e = e in n ? [e] : e.split(" ")), o = e.length;
                    for (; o--;) delete n[e[o]];
                    if (i ? !u(n) : !oe.isEmptyObject(n)) return
                }(i || (delete s[a].data, u(s[a]))) && (r ? oe.cleanData([t], !0) : ie.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }

    function d() {
        return !0
    }

    function p() {
        return !1
    }

    function f() {
        try {
            return fe.activeElement
        } catch (t) {}
    }

    function m(t) {
        var e = He.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length;) i.createElement(e.pop());
        return i
    }

    function g(t, e) {
        var i, n, o = 0,
            r = typeof t.getElementsByTagName !== xe ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== xe ? t.querySelectorAll(e || "*") : void 0;
        if (!r)
            for (r = [], i = t.childNodes || t; null != (n = i[o]); o++) !e || oe.nodeName(n, e) ? r.push(n) : oe.merge(r, g(n, e));
        return void 0 === e || e && oe.nodeName(t, e) ? oe.merge([t], r) : r
    }

    function v(t) {
        Oe.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e) {
        return oe.nodeName(t, "table") && oe.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function b(t) {
        return t.type = (null !== oe.find.attr(t, "type")) + "/" + t.type, t
    }

    function _(t) {
        var e = Ge.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function w(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) oe._data(i, "globalEval", !e || oe._data(e[n], "globalEval"))
    }

    function k(t, e) {
        if (1 === e.nodeType && oe.hasData(t)) {
            var i, n, o, r = oe._data(t),
                s = oe._data(e, r),
                a = r.events;
            if (a) {
                delete s.handle, s.events = {};
                for (i in a)
                    for (n = 0, o = a[i].length; o > n; n++) oe.event.add(e, i, a[i][n])
            }
            s.data && (s.data = oe.extend({}, s.data))
        }
    }

    function x(t, e) {
        var i, n, o;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[oe.expando]) {
                o = oe._data(e);
                for (n in o.events) oe.removeEvent(e, n, o.handle);
                e.removeAttribute(oe.expando)
            }
            "script" === i && e.text !== t.text ? (b(e).text = t.text, _(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !oe.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Oe.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }

    function D(e, i) {
        var n, o = oe(i.createElement(e)).appendTo(i.body),
            r = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(o[0])) ? n.display : oe.css(o[0], "display");
        return o.detach(), r
    }

    function C(t) {
        var e = fe,
            i = Ze[t];
        return i || (i = D(t, e), "none" !== i && i || (Je = (Je || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Je[0].contentWindow || Je[0].contentDocument).document, e.write(), e.close(), i = D(t, e), Je.detach()), Ze[t] = i), i
    }

    function T(t, e) {
        return {
            get: function () {
                var i = t();
                if (null != i) return i ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function S(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, o = di.length; o--;)
            if (e = di[o] + i, e in t) return e;
        return n
    }

    function E(t, e) {
        for (var i, n, o, r = [], s = 0, a = t.length; a > s; s++) n = t[s], n.style && (r[s] = oe._data(n, "olddisplay"), i = n.style.display, e ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ee(n) && (r[s] = oe._data(n, "olddisplay", C(n.nodeName)))) : (o = Ee(n), (i && "none" !== i || !o) && oe._data(n, "olddisplay", o ? i : oe.css(n, "display"))));
        for (s = 0; a > s; s++) n = t[s], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[s] || "" : "none"));
        return t
    }

    function M(t, e, i) {
        var n = li.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function O(t, e, i, n, o) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === i && (s += oe.css(t, i + Se[r], !0, o)), n ? ("content" === i && (s -= oe.css(t, "padding" + Se[r], !0, o)), "margin" !== i && (s -= oe.css(t, "border" + Se[r] + "Width", !0, o))) : (s += oe.css(t, "padding" + Se[r], !0, o), "padding" !== i && (s += oe.css(t, "border" + Se[r] + "Width", !0, o)));
        return s
    }

    function P(t, e, i) {
        var n = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = ti(t),
            s = ie.boxSizing && "border-box" === oe.css(t, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = ei(t, e, r), (0 > o || null == o) && (o = t.style[e]), ni.test(o)) return o;
            n = s && (ie.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + O(t, e, i || (s ? "border" : "content"), n, r) + "px"
    }

    function N(t, e, i, n, o) {
        return new N.prototype.init(t, e, i, n, o)
    }

    function I() {
        return setTimeout(function () {
            pi = void 0
        }), pi = oe.now()
    }

    function A(t, e) {
        var i, n = {
                height: t
            },
            o = 0;
        for (e = e ? 1 : 0; 4 > o; o += 2 - e) i = Se[o], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function j(t, e, i) {
        for (var n, o = (bi[e] || []).concat(bi["*"]), r = 0, s = o.length; s > r; r++)
            if (n = o[r].call(i, e, t)) return n
    }

    function H(t, e, i) {
        var n, o, r, s, a, l, u, c, h = this,
            d = {},
            p = t.style,
            f = t.nodeType && Ee(t),
            m = oe._data(t, "fxshow");
        i.queue || (a = oe._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, h.always(function () {
            h.always(function () {
                a.unqueued--, oe.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], u = oe.css(t, "display"), c = "none" === u ? oe._data(t, "olddisplay") || C(t.nodeName) : u, "inline" === c && "none" === oe.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== C(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ie.shrinkWrapBlocks() || h.always(function () {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (o = e[n], mi.exec(o)) {
                if (delete e[n], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[n]) continue;
                    f = !0
                }
                d[n] = m && m[n] || oe.style(t, n)
            } else u = void 0;
        if (oe.isEmptyObject(d)) "inline" === ("none" === u ? C(t.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden" in m && (f = m.hidden) : m = oe._data(t, "fxshow", {}), r && (m.hidden = !f), f ? oe(t).show() : h.done(function () {
                oe(t).hide()
            }), h.done(function () {
                var e;
                oe._removeData(t, "fxshow");
                for (e in d) oe.style(t, e, d[e])
            });
            for (n in d) s = j(f ? m[n] : 0, n, h), n in m || (m[n] = s.start, f && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function $(t, e) {
        var i, n, o, r, s;
        for (i in t)
            if (n = oe.camelCase(i), o = e[n], r = t[i], oe.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), s = oe.cssHooks[n], s && "expand" in s) {
                r = s.expand(r), delete t[n];
                for (i in r) i in t || (t[i] = r[i], e[i] = o)
            } else e[n] = o
    }

    function L(t, e, i) {
        var n, o, r = 0,
            s = yi.length,
            a = oe.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (o) return !1;
                for (var e = pi || I(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, r = 1 - n, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(r);
                return a.notifyWith(t, [u, r, i]), 1 > r && l ? i : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: oe.extend({}, e),
                opts: oe.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: pi || I(),
                duration: i.duration,
                tweens: [],
                createTween: function (e, i) {
                    var n = oe.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function (e) {
                    var i = 0,
                        n = e ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n > i; i++) u.tweens[i].run(1);
                    return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for ($(c, u.opts.specialEasing); s > r; r++)
            if (n = yi[r].call(u, t, c, u.opts)) return n;
        return oe.map(c, j, u), oe.isFunction(u.opts.start) && u.opts.start.call(t, u), oe.fx.timer(oe.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function z(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, o = 0,
                r = e.toLowerCase().match(be) || [];
            if (oe.isFunction(i))
                for (; n = r[o++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function F(t, e, i, n) {
        function o(a) {
            var l;
            return r[a] = !0, oe.each(t[a] || [], function (t, a) {
                var u = a(e, i, n);
                return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
            }), l
        }
        var r = {},
            s = t === Yi;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function W(t, e) {
        var i, n, o = oe.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && oe.extend(!0, t, i), t
    }

    function R(t, e, i) {
        for (var n, o, r, s, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
        if (o)
            for (s in a)
                if (a[s] && a[s].test(o)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in i) r = l[0];
        else {
            for (s in i) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    r = s;
                    break
                }
                n || (n = s)
            }
            r = r || n
        }
        return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
    }

    function Y(t, e, i, n) {
        var o, r, s, a, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
        for (r = c.shift(); r;)
            if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (s = u[l + " " + r] || u["* " + r], !s)
                for (o in u)
                    if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: s ? h : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function B(t, e, i, n) {
        var o;
        if (oe.isArray(e)) oe.each(e, function (e, o) {
            i || Gi.test(t) ? n(t, o) : B(t + "[" + ("object" == typeof o ? e : "") + "]", o, i, n)
        });
        else if (i || "object" !== oe.type(e)) n(t, e);
        else
            for (o in e) B(t + "[" + o + "]", e[o], i, n)
    }

    function q() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function U() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function G(t) {
        return oe.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var X = [],
        K = X.slice,
        V = X.concat,
        Q = X.push,
        J = X.indexOf,
        Z = {},
        te = Z.toString,
        ee = Z.hasOwnProperty,
        ie = {},
        ne = "1.11.2",
        oe = function (t, e) {
            return new oe.fn.init(t, e)
        },
        re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        se = /^-ms-/,
        ae = /-([\da-z])/gi,
        le = function (t, e) {
            return e.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: ne,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function () {
            return K.call(this)
        },
        get: function (t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : K.call(this)
        },
        pushStack: function (t) {
            var e = oe.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function (t, e) {
            return oe.each(this, t, e)
        },
        map: function (t) {
            return this.pushStack(oe.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function () {
            return this.pushStack(K.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: Q,
        sort: X.sort,
        splice: X.splice
    }, oe.extend = oe.fn.extend = function () {
        var t, e, i, n, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (o = arguments[a]))
                for (n in o) t = s[n], i = o[n], s !== i && (u && i && (oe.isPlainObject(i) || (e = oe.isArray(i))) ? (e ? (e = !1, r = t && oe.isArray(t) ? t : []) : r = t && oe.isPlainObject(t) ? t : {}, s[n] = oe.extend(u, r, i)) : void 0 !== i && (s[n] = i));
        return s
    }, oe.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isFunction: function (t) {
            return "function" === oe.type(t)
        },
        isArray: Array.isArray || function (t) {
            return "array" === oe.type(t)
        },
        isWindow: function (t) {
            return null != t && t == t.window
        },
        isNumeric: function (t) {
            return !oe.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function (t) {
            var e;
            if (!t || "object" !== oe.type(t) || t.nodeType || oe.isWindow(t)) return !1;
            try {
                if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            if (ie.ownLast)
                for (e in t) return ee.call(t, e);
            for (e in t);
            return void 0 === e || ee.call(t, e)
        },
        type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[te.call(t)] || "object" : typeof t
        },
        globalEval: function (e) {
            e && oe.trim(e) && (t.execScript || function (e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function (t) {
            return t.replace(se, "ms-").replace(ae, le)
        },
        nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function (t, e, n) {
            var o, r = 0,
                s = t.length,
                a = i(t);
            if (n) {
                if (a)
                    for (; s > r && (o = e.apply(t[r], n), o !== !1); r++);
                else
                    for (r in t)
                        if (o = e.apply(t[r], n), o === !1) break
            } else if (a)
                for (; s > r && (o = e.call(t[r], r, t[r]), o !== !1); r++);
            else
                for (r in t)
                    if (o = e.call(t[r], r, t[r]), o === !1) break;
            return t
        },
        trim: function (t) {
            return null == t ? "" : (t + "").replace(re, "")
        },
        makeArray: function (t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? oe.merge(n, "string" == typeof t ? [t] : t) : Q.call(n, t)), n
        },
        inArray: function (t, e, i) {
            var n;
            if (e) {
                if (J) return J.call(e, t, i);
                for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                    if (i in e && e[i] === t) return i
            }
            return -1
        },
        merge: function (t, e) {
            for (var i = +e.length, n = 0, o = t.length; i > n;) t[o++] = e[n++];
            if (i !== i)
                for (; void 0 !== e[n];) t[o++] = e[n++];
            return t.length = o, t
        },
        grep: function (t, e, i) {
            for (var n, o = [], r = 0, s = t.length, a = !i; s > r; r++) n = !e(t[r], r), n !== a && o.push(t[r]);
            return o
        },
        map: function (t, e, n) {
            var o, r = 0,
                s = t.length,
                a = i(t),
                l = [];
            if (a)
                for (; s > r; r++) o = e(t[r], r, n), null != o && l.push(o);
            else
                for (r in t) o = e(t[r], r, n), null != o && l.push(o);
            return V.apply([], l)
        },
        guid: 1,
        proxy: function (t, e) {
            var i, n, o;
            return "string" == typeof e && (o = t[e], e = t, t = o), oe.isFunction(t) ? (i = K.call(arguments, 2), n = function () {
                return t.apply(e || this, i.concat(K.call(arguments)))
            }, n.guid = t.guid = t.guid || oe.guid++, n) : void 0
        },
        now: function () {
            return +new Date
        },
        support: ie
    }), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var ue = function (t) {
        function e(t, e, i, n) {
            var o, r, s, a, l, u, h, p, f, m;
            if ((e ? e.ownerDocument || e : F) !== N && P(e), e = e || N, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
            if (!n && A) {
                if (11 !== a && (o = ye.exec(t)))
                    if (s = o[1]) {
                        if (9 === a) {
                            if (r = e.getElementById(s), !r || !r.parentNode) return i;
                            if (r.id === s) return i.push(r), i
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && L(e, r) && r.id === s) return i.push(r), i
                    } else {
                        if (o[2]) return J.apply(i, e.getElementsByTagName(t)), i;
                        if ((s = o[3]) && w.getElementsByClassName) return J.apply(i, e.getElementsByClassName(s)), i
                    }
                if (w.qsa && (!j || !j.test(t))) {
                    if (p = h = z, f = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (u = C(t), (h = e.getAttribute("id")) ? p = h.replace(_e, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + d(u[l]);
                        f = be.test(t) && c(e.parentNode) || e, m = u.join(",")
                    }
                    if (m) try {
                        return J.apply(i, f.querySelectorAll(m)), i
                    } catch (g) {} finally {
                        h || e.removeAttribute("id")
                    }
                }
            }
            return S(t.replace(le, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > k.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[z] = !0, t
        }

        function o(t) {
            var e = N.createElement("div");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function r(t, e) {
            for (var i = t.split("|"), n = t.length; n--;) k.attrHandle[i[n]] = e
        }

        function s(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function u(t) {
            return n(function (e) {
                return e = +e, n(function (i, n) {
                    for (var o, r = t([], i.length, e), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }

        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function h() {}

        function d(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n
        }

        function p(t, e, i) {
            var n = e.dir,
                o = i && "parentNode" === n,
                r = R++;
            return e.first ? function (e, i, r) {
                for (; e = e[n];)
                    if (1 === e.nodeType || o) return t(e, i, r)
            } : function (e, i, s) {
                var a, l, u = [W, r];
                if (s) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || o) && t(e, i, s)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || o) {
                            if (l = e[z] || (e[z] = {}), (a = l[n]) && a[0] === W && a[1] === r) return u[2] = a[2];
                            if (l[n] = u, u[2] = t(e, i, s)) return !0
                        }
            }
        }

        function f(t) {
            return t.length > 1 ? function (e, i, n) {
                for (var o = t.length; o--;)
                    if (!t[o](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function m(t, i, n) {
            for (var o = 0, r = i.length; r > o; o++) e(t, i[o], n);
            return n
        }

        function g(t, e, i, n, o) {
            for (var r, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(r = t[a]) && (!i || i(r, n, o)) && (s.push(r), u && e.push(a));
            return s
        }

        function v(t, e, i, o, r, s) {
            return o && !o[z] && (o = v(o)), r && !r[z] && (r = v(r, s)), n(function (n, s, a, l) {
                var u, c, h, d = [],
                    p = [],
                    f = s.length,
                    v = n || m(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !n && e ? v : g(v, d, t, a, l),
                    b = i ? r || (n ? t : f || o) ? [] : s : y;
                if (i && i(y, b, a, l), o)
                    for (u = g(b, p), o(u, [], a, l), c = u.length; c--;)(h = u[c]) && (b[p[c]] = !(y[p[c]] = h));
                if (n) {
                    if (r || t) {
                        if (r) {
                            for (u = [], c = b.length; c--;)(h = b[c]) && u.push(y[c] = h);
                            r(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(h = b[c]) && (u = r ? te(n, h) : d[c]) > -1 && (n[u] = !(s[u] = h))
                    }
                } else b = g(b === s ? b.splice(f, b.length) : b), r ? r(null, s, b, l) : J.apply(s, b)
            })
        }

        function y(t) {
            for (var e, i, n, o = t.length, r = k.relative[t[0].type], s = r || k.relative[" "], a = r ? 1 : 0, l = p(function (t) {
                    return t === e
                }, s, !0), u = p(function (t) {
                    return te(e, t) > -1
                }, s, !0), c = [function (t, i, n) {
                    var o = !r && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
                    return e = null, o
                }]; o > a; a++)
                if (i = k.relative[t[a].type]) c = [p(f(c), i)];
                else {
                    if (i = k.filter[t[a].type].apply(null, t[a].matches), i[z]) {
                        for (n = ++a; o > n && !k.relative[t[n].type]; n++);
                        return v(a > 1 && f(c), a > 1 && d(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(le, "$1"), i, n > a && y(t.slice(a, n)), o > n && y(t = t.slice(n)), o > n && d(t))
                    }
                    c.push(i)
                }
            return f(c)
        }

        function b(t, i) {
            var o = i.length > 0,
                r = t.length > 0,
                s = function (n, s, a, l, u) {
                    var c, h, d, p = 0,
                        f = "0",
                        m = n && [],
                        v = [],
                        y = E,
                        b = n || r && k.find.TAG("*", u),
                        _ = W += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (E = s !== N && s); f !== w && null != (c = b[f]); f++) {
                        if (r && c) {
                            for (h = 0; d = t[h++];)
                                if (d(c, s, a)) {
                                    l.push(c);
                                    break
                                }
                            u && (W = _)
                        }
                        o && ((c = !d && c) && p--, n && m.push(c))
                    }
                    if (p += f, o && f !== p) {
                        for (h = 0; d = i[h++];) d(m, v, s, a);
                        if (n) {
                            if (p > 0)
                                for (; f--;) m[f] || v[f] || (v[f] = V.call(l));
                            v = g(v)
                        }
                        J.apply(l, v), u && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return u && (W = _, E = y), m
                };
            return o ? n(s) : s
        }
        var _, w, k, x, D, C, T, S, E, M, O, P, N, I, A, j, H, $, L, z = "sizzle" + 1 * new Date,
            F = t.document,
            W = 0,
            R = 0,
            Y = i(),
            B = i(),
            q = i(),
            U = function (t, e) {
                return t === e && (O = !0), 0
            },
            G = 1 << 31,
            X = {}.hasOwnProperty,
            K = [],
            V = K.pop,
            Q = K.push,
            J = K.push,
            Z = K.slice,
            te = function (t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            },
            ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = ne.replace("w", "w#"),
            re = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]",
            se = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            ae = new RegExp(ie + "+", "g"),
            le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            ue = new RegExp("^" + ie + "*," + ie + "*"),
            ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            he = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            de = new RegExp(se),
            pe = new RegExp("^" + oe + "$"),
            fe = {
                ID: new RegExp("^#(" + ne + ")"),
                CLASS: new RegExp("^\\.(" + ne + ")"),
                TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ee + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            _e = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            ke = function (t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            xe = function () {
                P()
            };
        try {
            J.apply(K = Z.call(F.childNodes), F.childNodes), K[F.childNodes.length].nodeType
        } catch (De) {
            J = {
                apply: K.length ? function (t, e) {
                    Q.apply(t, Z.call(e))
                } : function (t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        w = e.support = {}, D = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, P = e.setDocument = function (t) {
            var e, i, n = t ? t.ownerDocument || t : F;
            return n !== N && 9 === n.nodeType && n.documentElement ? (N = n, I = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", xe, !1) : i.attachEvent && i.attachEvent("onunload", xe)), A = !D(n), w.attributes = o(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = o(function (t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(n.getElementsByClassName), w.getById = o(function (t) {
                return I.appendChild(t).id = z, !n.getElementsByName || !n.getElementsByName(z).length
            }), w.getById ? (k.find.ID = function (t, e) {
                if ("undefined" != typeof e.getElementById && A) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }, k.filter.ID = function (t) {
                var e = t.replace(we, ke);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete k.find.ID, k.filter.ID = function (t) {
                var e = t.replace(we, ke);
                return function (t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), k.find.TAG = w.getElementsByTagName ? function (t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var i, n = [],
                    o = 0,
                    r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return r
            }, k.find.CLASS = w.getElementsByClassName && function (t, e) {
                return A ? e.getElementsByClassName(t) : void 0
            }, H = [], j = [], (w.qsa = ve.test(n.querySelectorAll)) && (o(function (t) {
                I.appendChild(t).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || j.push("\\[" + ie + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + z + "-]").length || j.push("~="), t.querySelectorAll(":checked").length || j.push(":checked"), t.querySelectorAll("a#" + z + "+*").length || j.push(".#.+[+~]")
            }), o(function (t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && j.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), j.push(",.*:")
            })), (w.matchesSelector = ve.test($ = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && o(function (t) {
                w.disconnectedMatch = $.call(t, "div"), $.call(t, "[s!='']:x"), H.push("!=", se)
            }), j = j.length && new RegExp(j.join("|")), H = H.length && new RegExp(H.join("|")), e = ve.test(I.compareDocumentPosition), L = e || ve.test(I.contains) ? function (t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function (t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, U = e ? function (t, e) {
                if (t === e) return O = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === F && L(F, t) ? -1 : e === n || e.ownerDocument === F && L(F, e) ? 1 : M ? te(M, t) - te(M, e) : 0 : 4 & i ? -1 : 1)
            } : function (t, e) {
                if (t === e) return O = !0, 0;
                var i, o = 0,
                    r = t.parentNode,
                    a = e.parentNode,
                    l = [t],
                    u = [e];
                if (!r || !a) return t === n ? -1 : e === n ? 1 : r ? -1 : a ? 1 : M ? te(M, t) - te(M, e) : 0;
                if (r === a) return s(t, e);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (i = e; i = i.parentNode;) u.unshift(i);
                for (; l[o] === u[o];) o++;
                return o ? s(l[o], u[o]) : l[o] === F ? -1 : u[o] === F ? 1 : 0
            }, n) : N
        }, e.matches = function (t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function (t, i) {
            if ((t.ownerDocument || t) !== N && P(t), i = i.replace(he, "='$1']"), !(!w.matchesSelector || !A || H && H.test(i) || j && j.test(i))) try {
                var n = $.call(t, i);
                if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (o) {}
            return e(i, N, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== N && P(t), L(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== N && P(t);
            var i = k.attrHandle[e.toLowerCase()],
                n = i && X.call(k.attrHandle, e.toLowerCase()) ? i(t, e, !A) : void 0;
            return void 0 !== n ? n : w.attributes || !A ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, i = [],
                n = 0,
                o = 0;
            if (O = !w.detectDuplicates, M = !w.sortStable && t.slice(0), t.sort(U), O) {
                for (; e = t[o++];) e === t[o] && (n = i.push(o));
                for (; n--;) t.splice(i[n], 1)
            }
            return M = null, t
        }, x = e.getText = function (t) {
            var e, i = "",
                n = 0,
                o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += x(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else
                for (; e = t[n++];) i += x(e);
            return i
        }, k = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(we, ke), t[3] = (t[3] || t[4] || t[5] || "").replace(we, ke), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function (t) {
                    var e, i = !t[6] && t[2];
                    return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && de.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(we, ke).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function (t) {
                    var e = Y[t + " "];
                    return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && Y(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function (t, i, n) {
                    return function (o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === i : i ? (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(ae, " ") + " ").indexOf(n) > -1 : "|=" === i ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function (t, e, i, n, o) {
                    var r = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === n && 0 === o ? function (t) {
                        return !!t.parentNode
                    } : function (e, i, l) {
                        var u, c, h, d, p, f, m = r !== s ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (h = e; h = h[m];)
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? g.firstChild : g.lastChild], s && y) {
                                for (c = g[z] || (g[z] = {}), u = c[t] || [], p = u[0] === W && u[1], d = u[0] === W && u[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (d = p = 0) || f.pop();)
                                    if (1 === h.nodeType && ++d && h === e) {
                                        c[t] = [W, p, d];
                                        break
                                    }
                            } else if (y && (u = (e[z] || (e[z] = {}))[t]) && u[0] === W) d = u[1];
                            else
                                for (;
                                    (h = ++p && h && h[m] || (d = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || (y && ((h[z] || (h[z] = {}))[t] = [W, d]), h !== e)););
                            return d -= o, d === n || d % n === 0 && d / n >= 0
                        }
                    }
                },
                PSEUDO: function (t, i) {
                    var o, r = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[z] ? r(i) : r.length > 1 ? (o = [t, t, "", i], k.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                        for (var n, o = r(t, i), s = o.length; s--;) n = te(t, o[s]), t[n] = !(e[n] = o[s])
                    }) : function (t) {
                        return r(t, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: n(function (t) {
                    var e = [],
                        i = [],
                        o = T(t.replace(le, "$1"));
                    return o[z] ? n(function (t, e, i, n) {
                        for (var r, s = o(t, null, n, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                    }) : function (t, n, r) {
                        return e[0] = t, o(e, null, r, i), e[0] = null, !i.pop()
                    }
                }),
                has: n(function (t) {
                    return function (i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function (t) {
                    return t = t.replace(we, ke),
                        function (e) {
                            return (e.textContent || e.innerText || x(e)).indexOf(t) > -1
                        }
                }),
                lang: n(function (t) {
                    return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, ke).toLowerCase(),
                        function (e) {
                            var i;
                            do
                                if (i = A ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function (e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function (t) {
                    return t === I
                },
                focus: function (t) {
                    return t === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function (t) {
                    return t.disabled === !1
                },
                disabled: function (t) {
                    return t.disabled === !0
                },
                checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function (t) {
                    return !k.pseudos.empty(t)
                },
                header: function (t) {
                    return ge.test(t.nodeName)
                },
                input: function (t) {
                    return me.test(t.nodeName)
                },
                button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function () {
                    return [0]
                }),
                last: u(function (t, e) {
                    return [e - 1]
                }),
                eq: u(function (t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: u(function (t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: u(function (t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: u(function (t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: u(function (t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (_ in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[_] = a(_);
        for (_ in {
                submit: !0,
                reset: !0
            }) k.pseudos[_] = l(_);
        return h.prototype = k.filters = k.pseudos, k.setFilters = new h, C = e.tokenize = function (t, i) {
            var n, o, r, s, a, l, u, c = B[t + " "];
            if (c) return i ? 0 : c.slice(0);
            for (a = t, l = [], u = k.preFilter; a;) {
                (!n || (o = ue.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = ce.exec(a)) && (n = o.shift(), r.push({
                    value: n,
                    type: o[0].replace(le, " ")
                }), a = a.slice(n.length));
                for (s in k.filter) !(o = fe[s].exec(a)) || u[s] && !(o = u[s](o)) || (n = o.shift(), r.push({
                    value: n,
                    type: s,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? e.error(t) : B(t, l).slice(0)
        }, T = e.compile = function (t, e) {
            var i, n = [],
                o = [],
                r = q[t + " "];
            if (!r) {
                for (e || (e = C(t)), i = e.length; i--;) r = y(e[i]), r[z] ? n.push(r) : o.push(r);
                r = q(t, b(o, n)), r.selector = t
            }
            return r
        }, S = e.select = function (t, e, i, n) {
            var o, r, s, a, l, u = "function" == typeof t && t,
                h = !n && C(t = u.selector || t);
            if (i = i || [], 1 === h.length) {
                if (r = h[0] = h[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === e.nodeType && A && k.relative[r[1].type]) {
                    if (e = (k.find.ID(s.matches[0].replace(we, ke), e) || [])[0], !e) return i;
                    u && (e = e.parentNode), t = t.slice(r.shift().value.length)
                }
                for (o = fe.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !k.relative[a = s.type]);)
                    if ((l = k.find[a]) && (n = l(s.matches[0].replace(we, ke), be.test(r[0].type) && c(e.parentNode) || e))) {
                        if (r.splice(o, 1), t = n.length && d(r), !t) return J.apply(i, n), i;
                        break
                    }
            }
            return (u || T(t, h))(n, e, !A, i, be.test(t) && c(e.parentNode) || e), i
        }, w.sortStable = z.split("").sort(U).join("") === z, w.detectDuplicates = !!O, P(), w.sortDetached = o(function (t) {
            return 1 & t.compareDocumentPosition(N.createElement("div"))
        }), o(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function (t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && o(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || r("value", function (t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), o(function (t) {
            return null == t.getAttribute("disabled")
        }) || r(ee, function (t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    oe.find = ue, oe.expr = ue.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = ue.uniqueSort, oe.text = ue.getText, oe.isXMLDoc = ue.isXML, oe.contains = ue.contains;
    var ce = oe.expr.match.needsContext,
        he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        de = /^.[^:#\[\.,]*$/;
    oe.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? oe.find.matchesSelector(n, t) ? [n] : [] : oe.find.matches(t, oe.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, oe.fn.extend({
        find: function (t) {
            var e, i = [],
                n = this,
                o = n.length;
            if ("string" != typeof t) return this.pushStack(oe(t).filter(function () {
                for (e = 0; o > e; e++)
                    if (oe.contains(n[e], this)) return !0
            }));
            for (e = 0; o > e; e++) oe.find(t, n[e], i);
            return i = this.pushStack(o > 1 ? oe.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function (t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function (t) {
            return !!n(this, "string" == typeof t && ce.test(t) ? oe(t) : t || [], !1).length
        }
    });
    var pe, fe = t.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ge = oe.fn.init = function (t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof oe ? e[0] : e, oe.merge(this, oe.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : fe, !0)), he.test(i[1]) && oe.isPlainObject(e))
                        for (i in e) oe.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                if (n = fe.getElementById(i[2]), n && n.parentNode) {
                    if (n.id !== i[2]) return pe.find(t);
                    this.length = 1, this[0] = n
                }
                return this.context = fe, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : oe.isFunction(t) ? "undefined" != typeof pe.ready ? pe.ready(t) : t(oe) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), oe.makeArray(t, this))
        };
    ge.prototype = oe.fn, pe = oe(fe);
    var ve = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.extend({
        dir: function (t, e, i) {
            for (var n = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === i || 1 !== o.nodeType || !oe(o).is(i));) 1 === o.nodeType && n.push(o), o = o[e];
            return n
        },
        sibling: function (t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }), oe.fn.extend({
        has: function (t) {
            var e, i = oe(t, this),
                n = i.length;
            return this.filter(function () {
                for (e = 0; n > e; e++)
                    if (oe.contains(this, i[e])) return !0
            })
        },
        closest: function (t, e) {
            for (var i, n = 0, o = this.length, r = [], s = ce.test(t) || "string" != typeof t ? oe(t, e || this.context) : 0; o > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && oe.find.matchesSelector(i, t))) {
                        r.push(i);
                        break
                    }
            return this.pushStack(r.length > 1 ? oe.unique(r) : r)
        },
        index: function (t) {
            return t ? "string" == typeof t ? oe.inArray(this[0], oe(t)) : oe.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(oe.unique(oe.merge(this.get(), oe(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), oe.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return oe.dir(t, "parentNode")
        },
        parentsUntil: function (t, e, i) {
            return oe.dir(t, "parentNode", i)
        },
        next: function (t) {
            return o(t, "nextSibling")
        },
        prev: function (t) {
            return o(t, "previousSibling")
        },
        nextAll: function (t) {
            return oe.dir(t, "nextSibling")
        },
        prevAll: function (t) {
            return oe.dir(t, "previousSibling")
        },
        nextUntil: function (t, e, i) {
            return oe.dir(t, "nextSibling", i)
        },
        prevUntil: function (t, e, i) {
            return oe.dir(t, "previousSibling", i)
        },
        siblings: function (t) {
            return oe.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return oe.sibling(t.firstChild)
        },
        contents: function (t) {
            return oe.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : oe.merge([], t.childNodes)
        }
    }, function (t, e) {
        oe.fn[t] = function (i, n) {
            var o = oe.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = oe.filter(n, o)), this.length > 1 && (ye[t] || (o = oe.unique(o)), ve.test(t) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var be = /\S+/g,
        _e = {};
    oe.Callbacks = function (t) {
        t = "string" == typeof t ? _e[t] || r(t) : oe.extend({}, t);
        var e, i, n, o, s, a, l = [],
            u = !t.once && [],
            c = function (r) {
                for (i = t.memory && r, n = !0, s = a || 0, a = 0, o = l.length, e = !0; l && o > s; s++)
                    if (l[s].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                        i = !1;
                        break
                    }
                e = !1, l && (u ? u.length && c(u.shift()) : i ? l = [] : h.disable())
            },
            h = {
                add: function () {
                    if (l) {
                        var n = l.length;
                        ! function r(e) {
                            oe.each(e, function (e, i) {
                                var n = oe.type(i);
                                "function" === n ? t.unique && h.has(i) || l.push(i) : i && i.length && "string" !== n && r(i)
                            })
                        }(arguments), e ? o = l.length : i && (a = n, c(i))
                    }
                    return this
                },
                remove: function () {
                    return l && oe.each(arguments, function (t, i) {
                        for (var n;
                            (n = oe.inArray(i, l, n)) > -1;) l.splice(n, 1), e && (o >= n && o--, s >= n && s--)
                    }), this
                },
                has: function (t) {
                    return t ? oe.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], o = 0, this
                },
                disable: function () {
                    return l = u = i = void 0, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return u = void 0, i || h.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (t, i) {
                    return !l || n && !u || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? u.push(i) : c(i)), this
                },
                fire: function () {
                    return h.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!n
                }
            };
        return h
    }, oe.extend({
        Deferred: function (t) {
            var e = [
                    ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", oe.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var t = arguments;
                        return oe.Deferred(function (i) {
                            oe.each(e, function (e, r) {
                                var s = oe.isFunction(t[e]) && t[e];
                                o[r[1]](function () {
                                    var t = s && s.apply(this, arguments);
                                    t && oe.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? oe.extend(t, n) : n
                    }
                },
                o = {};
            return n.pipe = n.then, oe.each(e, function (t, r) {
                var s = r[2],
                    a = r[3];
                n[r[1]] = s.add, a && s.add(function () {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function () {
                    return o[r[0] + "With"](this === o ? n : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), n.promise(o), t && t.call(o, o), o
        },
        when: function (t) {
            var e, i, n, o = 0,
                r = K.call(arguments),
                s = r.length,
                a = 1 !== s || t && oe.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : oe.Deferred(),
                u = function (t, i, n) {
                    return function (o) {
                        i[t] = this, n[t] = arguments.length > 1 ? K.call(arguments) : o, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (s > 1)
                for (e = new Array(s), i = new Array(s), n = new Array(s); s > o; o++) r[o] && oe.isFunction(r[o].promise) ? r[o].promise().done(u(o, n, r)).fail(l.reject).progress(u(o, i, e)) : --a;
            return a || l.resolveWith(n, r), l.promise()
        }
    });
    var we;
    oe.fn.ready = function (t) {
        return oe.ready.promise().done(t), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
            t ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function (t) {
            if (t === !0 ? !--oe.readyWait : !oe.isReady) {
                if (!fe.body) return setTimeout(oe.ready);
                oe.isReady = !0, t !== !0 && --oe.readyWait > 0 || (we.resolveWith(fe, [oe]), oe.fn.triggerHandler && (oe(fe).triggerHandler("ready"), oe(fe).off("ready")))
            }
        }
    }), oe.ready.promise = function (e) {
        if (!we)
            if (we = oe.Deferred(), "complete" === fe.readyState) setTimeout(oe.ready);
            else if (fe.addEventListener) fe.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
        else {
            fe.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var i = !1;
            try {
                i = null == t.frameElement && fe.documentElement
            } catch (n) {}
            i && i.doScroll && ! function o() {
                if (!oe.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (t) {
                        return setTimeout(o, 50)
                    }
                    s(), oe.ready()
                }
            }()
        }
        return we.promise(e)
    };
    var ke, xe = "undefined";
    for (ke in oe(ie)) break;
    ie.ownLast = "0" !== ke, ie.inlineBlockNeedsLayout = !1, oe(function () {
            var t, e, i, n;
            i = fe.getElementsByTagName("body")[0], i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== xe && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
        }),
        function () {
            var t = fe.createElement("div");
            if (null == ie.deleteExpando) {
                ie.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    ie.deleteExpando = !1
                }
            }
            t = null
        }(), oe.acceptData = function (t) {
            var e = oe.noData[(t.nodeName + " ").toLowerCase()],
                i = +t.nodeType || 1;
            return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        };
    var De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ce = /([A-Z])/g;
    oe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (t) {
            return t = t.nodeType ? oe.cache[t[oe.expando]] : t[oe.expando], !!t && !u(t)
        },
        data: function (t, e, i) {
            return c(t, e, i)
        },
        removeData: function (t, e) {
            return h(t, e)
        },
        _data: function (t, e, i) {
            return c(t, e, i, !0)
        },
        _removeData: function (t, e) {
            return h(t, e, !0)
        }
    }), oe.fn.extend({
        data: function (t, e) {
            var i, n, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = oe.data(r), 1 === r.nodeType && !oe._data(r, "parsedAttrs"))) {
                    for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = oe.camelCase(n.slice(5)), l(r, n, o[n])));
                    oe._data(r, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function () {
                oe.data(this, t)
            }) : arguments.length > 1 ? this.each(function () {
                oe.data(this, t, e)
            }) : r ? l(r, t, oe.data(r, t)) : void 0
        },
        removeData: function (t) {
            return this.each(function () {
                oe.removeData(this, t)
            })
        }
    }), oe.extend({
        queue: function (t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = oe._data(t, e), i && (!n || oe.isArray(i) ? n = oe._data(t, e, oe.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var i = oe.queue(t, e),
                n = i.length,
                o = i.shift(),
                r = oe._queueHooks(t, e),
                s = function () {
                    oe.dequeue(t, e)
                };
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !n && r && r.empty.fire()
        },
        _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return oe._data(t, i) || oe._data(t, i, {
                empty: oe.Callbacks("once memory").add(function () {
                    oe._removeData(t, e + "queue"), oe._removeData(t, i)
                })
            })
        }
    }), oe.fn.extend({
        queue: function (t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? oe.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var i = oe.queue(this, t, e);
                oe._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && oe.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                oe.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var i, n = 1,
                o = oe.Deferred(),
                r = this,
                s = this.length,
                a = function () {
                    --n || o.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) i = oe._data(r[s], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Se = ["Top", "Right", "Bottom", "Left"],
        Ee = function (t, e) {
            return t = e || t, "none" === oe.css(t, "display") || !oe.contains(t.ownerDocument, t)
        },
        Me = oe.access = function (t, e, i, n, o, r, s) {
            var a = 0,
                l = t.length,
                u = null == i;
            if ("object" === oe.type(i)) {
                o = !0;
                for (a in i) oe.access(t, e, a, i[a], !0, r, s)
            } else if (void 0 !== n && (o = !0, oe.isFunction(n) || (s = !0), u && (s ? (e.call(t, n), e = null) : (u = e, e = function (t, e, i) {
                    return u.call(oe(t), i)
                })), e))
                for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
            return o ? t : u ? e.call(t) : l ? e(t[0], i) : r
        },
        Oe = /^(?:checkbox|radio)$/i;
    ! function () {
        var t = fe.createElement("input"),
            e = fe.createElement("div"),
            i = fe.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !!e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), ie.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
                ie.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete e.test
            } catch (n) {
                ie.deleteExpando = !1
            }
        }
    }(),
    function () {
        var e, i, n = fe.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + e, (ie[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), ie[e + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    }();
    var Pe = /^(?:input|select|textarea)$/i,
        Ne = /^key/,
        Ie = /^(?:mouse|pointer|contextmenu)|click/,
        Ae = /^(?:focusinfocus|focusoutblur)$/,
        je = /^([^.]*)(?:\.(.+)|)$/;
    oe.event = {
        global: {},
        add: function (t, e, i, n, o) {
            var r, s, a, l, u, c, h, d, p, f, m, g = oe._data(t);
            if (g) {
                for (i.handler && (l = i, i = l.handler, o = l.selector), i.guid || (i.guid = oe.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || (c = g.handle = function (t) {
                        return typeof oe === xe || t && oe.event.triggered === t.type ? void 0 : oe.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = t), e = (e || "").match(be) || [""], a = e.length; a--;) r = je.exec(e[a]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p && (u = oe.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = oe.event.special[p] || {}, h = oe.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && oe.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, l), (d = s[p]) || (d = s[p] = [], d.delegateCount = 0, u.setup && u.setup.call(t, n, f, c) !== !1 || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), o ? d.splice(d.delegateCount++, 0, h) : d.push(h), oe.event.global[p] = !0);
                t = null
            }
        },
        remove: function (t, e, i, n, o) {
            var r, s, a, l, u, c, h, d, p, f, m, g = oe.hasData(t) && oe._data(t);
            if (g && (c = g.events)) {
                for (e = (e || "").match(be) || [""], u = e.length; u--;)
                    if (a = je.exec(e[u]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (h = oe.event.special[p] || {}, p = (n ? h.delegateType : h.bindType) || p, d = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = d.length; r--;) s = d[r], !o && m !== s.origType || i && i.guid !== s.guid || a && !a.test(s.namespace) || n && n !== s.selector && ("**" !== n || !s.selector) || (d.splice(r, 1), s.selector && d.delegateCount--, h.remove && h.remove.call(t, s));
                        l && !d.length && (h.teardown && h.teardown.call(t, f, g.handle) !== !1 || oe.removeEvent(t, p, g.handle), delete c[p])
                    } else
                        for (p in c) oe.event.remove(t, p + e[u], i, n, !0);
                oe.isEmptyObject(c) && (delete g.handle, oe._removeData(t, "events"))
            }
        },
        trigger: function (e, i, n, o) {
            var r, s, a, l, u, c, h, d = [n || fe],
                p = ee.call(e, "type") ? e.type : e,
                f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = n = n || fe, 3 !== n.nodeType && 8 !== n.nodeType && !Ae.test(p + oe.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), s = p.indexOf(":") < 0 && "on" + p, e = e[oe.expando] ? e : new oe.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : oe.makeArray(i, [e]), u = oe.event.special[p] || {}, o || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                if (!o && !u.noBubble && !oe.isWindow(n)) {
                    for (l = u.delegateType || p, Ae.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), c = a;
                    c === (n.ownerDocument || fe) && d.push(c.defaultView || c.parentWindow || t)
                }
                for (h = 0;
                    (a = d[h++]) && !e.isPropagationStopped();) e.type = h > 1 ? l : u.bindType || p, r = (oe._data(a, "events") || {})[e.type] && oe._data(a, "handle"), r && r.apply(a, i), r = s && a[s], r && r.apply && oe.acceptData(a) && (e.result = r.apply(a, i), e.result === !1 && e.preventDefault());
                if (e.type = p, !o && !e.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), i) === !1) && oe.acceptData(n) && s && n[p] && !oe.isWindow(n)) {
                    c = n[s], c && (n[s] = null), oe.event.triggered = p;
                    try {
                        n[p]()
                    } catch (m) {}
                    oe.event.triggered = void 0, c && (n[s] = c)
                }
                return e.result
            }
        },
        dispatch: function (t) {
            t = oe.event.fix(t);
            var e, i, n, o, r, s = [],
                a = K.call(arguments),
                l = (oe._data(this, "events") || {})[t.type] || [],
                u = oe.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (s = oe.event.handlers.call(this, t, l), e = 0;
                    (o = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = o.elem, r = 0;
                        (n = o.handlers[r++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((oe.event.special[n.origType] || {}).handle || n.handler).apply(o.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var i, n, o, r, s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (o = [], r = 0; a > r; r++) n = e[r], i = n.selector + " ", void 0 === o[i] && (o[i] = n.needsContext ? oe(i, this).index(l) >= 0 : oe.find(i, this, null, [l]).length), o[i] && o.push(n);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        fix: function (t) {
            if (t[oe.expando]) return t;
            var e, i, n, o = t.type,
                r = t,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Ie.test(o) ? this.mouseHooks : Ne.test(o) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new oe.Event(r), e = n.length; e--;) i = n[e], t[i] = r[i];
            return t.target || (t.target = r.srcElement || fe), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var i, n, o, r = e.button,
                    s = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || fe, o = n.documentElement, i = n.body, t.pageX = e.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (t) {
                    return oe.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, i, n) {
            var o = oe.extend(new oe.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? oe.event.trigger(o, null, e) : oe.event.dispatch.call(e, o), o.isDefaultPrevented() && i.preventDefault()
        }
    }, oe.removeEvent = fe.removeEventListener ? function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    } : function (t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === xe && (t[n] = null), t.detachEvent(n, i))
    }, oe.Event = function (t, e) {
        return this instanceof oe.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : p) : this.type = t, e && oe.extend(this, e), this.timeStamp = t && t.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(t, e)
    }, oe.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        oe.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var i, n = this,
                    o = t.relatedTarget,
                    r = t.handleObj;
                return (!o || o !== n && !oe.contains(n, o)) && (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), ie.submitBubbles || (oe.event.special.submit = {
        setup: function () {
            return oe.nodeName(this, "form") ? !1 : void oe.event.add(this, "click._submit keypress._submit", function (t) {
                var e = t.target,
                    i = oe.nodeName(e, "input") || oe.nodeName(e, "button") ? e.form : void 0;
                i && !oe._data(i, "submitBubbles") && (oe.event.add(i, "submit._submit", function (t) {
                    t._submit_bubble = !0
                }), oe._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function (t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && oe.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function () {
            return oe.nodeName(this, "form") ? !1 : void oe.event.remove(this, "._submit")
        }
    }), ie.changeBubbles || (oe.event.special.change = {
        setup: function () {
            return Pe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function (t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), oe.event.add(this, "click._change", function (t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, t, !0)
            })), !1) : void oe.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                Pe.test(e.nodeName) && !oe._data(e, "changeBubbles") && (oe.event.add(e, "change._change", function (t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || oe.event.simulate("change", this.parentNode, t, !0)
                }), oe._data(e, "changeBubbles", !0))
            })
        },
        handle: function (t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return oe.event.remove(this, "._change"), !Pe.test(this.nodeName)
        }
    }), ie.focusinBubbles || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var i = function (t) {
            oe.event.simulate(e, t.target, oe.event.fix(t), !0)
        };
        oe.event.special[e] = {
            setup: function () {
                var n = this.ownerDocument || this,
                    o = oe._data(n, e);
                o || n.addEventListener(t, i, !0), oe._data(n, e, (o || 0) + 1)
            },
            teardown: function () {
                var n = this.ownerDocument || this,
                    o = oe._data(n, e) - 1;
                o ? oe._data(n, e, o) : (n.removeEventListener(t, i, !0), oe._removeData(n, e))
            }
        }
    }), oe.fn.extend({
        on: function (t, e, i, n, o) {
            var r, s;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (r in t) this.on(r, e, i, t[r], o);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = p;
            else if (!n) return this;
            return 1 === o && (s = n, n = function (t) {
                return oe().off(t), s.apply(this, arguments)
            }, n.guid = s.guid || (s.guid = oe.guid++)), this.each(function () {
                oe.event.add(this, t, n, i, e)
            })
        },
        one: function (t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function (t, e, i) {
            var n, o;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, oe(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = p), this.each(function () {
                oe.event.remove(this, t, i, e)
            })
        },
        trigger: function (t, e) {
            return this.each(function () {
                oe.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var i = this[0];
            return i ? oe.event.trigger(t, e, i, !0) : void 0
        }
    });
    var He = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        $e = / jQuery\d+="(?:null|\d+)"/g,
        Le = new RegExp("<(?:" + He + ")[\\s/>]", "i"),
        ze = /^\s+/,
        Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        We = /<([\w:]+)/,
        Re = /<tbody/i,
        Ye = /<|&#?\w+;/,
        Be = /<(?:script|style|link)/i,
        qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ue = /^$|\/(?:java|ecma)script/i,
        Ge = /^true\/(.*)/,
        Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ke = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ve = m(fe),
        Qe = Ve.appendChild(fe.createElement("div"));
    Ke.optgroup = Ke.option, Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead, Ke.th = Ke.td, oe.extend({
        clone: function (t, e, i) {
            var n, o, r, s, a, l = oe.contains(t.ownerDocument, t);
            if (ie.html5Clone || oe.isXMLDoc(t) || !Le.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (Qe.innerHTML = t.outerHTML, Qe.removeChild(r = Qe.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || oe.isXMLDoc(t)))
                for (n = g(r), a = g(t), s = 0; null != (o = a[s]); ++s) n[s] && x(o, n[s]);
            if (e)
                if (i)
                    for (a = a || g(t), n = n || g(r), s = 0; null != (o = a[s]); s++) k(o, n[s]);
                else k(t, r);
            return n = g(r, "script"), n.length > 0 && w(n, !l && g(t, "script")), n = a = o = null, r
        },
        buildFragment: function (t, e, i, n) {
            for (var o, r, s, a, l, u, c, h = t.length, d = m(e), p = [], f = 0; h > f; f++)
                if (r = t[f], r || 0 === r)
                    if ("object" === oe.type(r)) oe.merge(p, r.nodeType ? [r] : r);
                    else if (Ye.test(r)) {
                for (a = a || d.appendChild(e.createElement("div")), l = (We.exec(r) || ["", ""])[1].toLowerCase(), c = Ke[l] || Ke._default, a.innerHTML = c[1] + r.replace(Fe, "<$1></$2>") + c[2], o = c[0]; o--;) a = a.lastChild;
                if (!ie.leadingWhitespace && ze.test(r) && p.push(e.createTextNode(ze.exec(r)[0])), !ie.tbody)
                    for (r = "table" !== l || Re.test(r) ? "<table>" !== c[1] || Re.test(r) ? 0 : a : a.firstChild, o = r && r.childNodes.length; o--;) oe.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
                for (oe.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = d.lastChild
            } else p.push(e.createTextNode(r));
            for (a && d.removeChild(a), ie.appendChecked || oe.grep(g(p, "input"), v), f = 0; r = p[f++];)
                if ((!n || -1 === oe.inArray(r, n)) && (s = oe.contains(r.ownerDocument, r), a = g(d.appendChild(r), "script"), s && w(a), i))
                    for (o = 0; r = a[o++];) Ue.test(r.type || "") && i.push(r);
            return a = null, d
        },
        cleanData: function (t, e) {
            for (var i, n, o, r, s = 0, a = oe.expando, l = oe.cache, u = ie.deleteExpando, c = oe.event.special; null != (i = t[s]); s++)
                if ((e || oe.acceptData(i)) && (o = i[a], r = o && l[o])) {
                    if (r.events)
                        for (n in r.events) c[n] ? oe.event.remove(i, n) : oe.removeEvent(i, n, r.handle);
                    l[o] && (delete l[o], u ? delete i[a] : typeof i.removeAttribute !== xe ? i.removeAttribute(a) : i[a] = null, X.push(o))
                }
        }
    }), oe.fn.extend({
        text: function (t) {
            return Me(this, function (t) {
                return void 0 === t ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function (t, e) {
            for (var i, n = t ? oe.filter(t, this) : this, o = 0; null != (i = n[o]); o++) e || 1 !== i.nodeType || oe.cleanData(g(i)), i.parentNode && (e && oe.contains(i.ownerDocument, i) && w(g(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && oe.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && oe.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return oe.clone(this, t, e)
            })
        },
        html: function (t) {
            return Me(this, function (t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace($e, "") : void 0;
                if (!("string" != typeof t || Be.test(t) || !ie.htmlSerialize && Le.test(t) || !ie.leadingWhitespace && ze.test(t) || Ke[(We.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(Fe, "<$1></$2>");
                    try {
                        for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (oe.cleanData(g(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (o) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var t = arguments[0];
            return this.domManip(arguments, function (e) {
                t = this.parentNode, oe.cleanData(g(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function (t) {
            return this.remove(t, !0)
        },
        domManip: function (t, e) {
            t = V.apply([], t);
            var i, n, o, r, s, a, l = 0,
                u = this.length,
                c = this,
                h = u - 1,
                d = t[0],
                p = oe.isFunction(d);
            if (p || u > 1 && "string" == typeof d && !ie.checkClone && qe.test(d)) return this.each(function (i) {
                var n = c.eq(i);
                p && (t[0] = d.call(this, i, n.html())), n.domManip(t, e)
            });
            if (u && (a = oe.buildFragment(t, this[0].ownerDocument, !1, this), i = a.firstChild, 1 === a.childNodes.length && (a = i), i)) {
                for (r = oe.map(g(a, "script"), b), o = r.length; u > l; l++) n = a, l !== h && (n = oe.clone(n, !0, !0), o && oe.merge(r, g(n, "script"))), e.call(this[l], n, l);
                if (o)
                    for (s = r[r.length - 1].ownerDocument, oe.map(r, _), l = 0; o > l; l++) n = r[l], Ue.test(n.type || "") && !oe._data(n, "globalEval") && oe.contains(s, n) && (n.src ? oe._evalUrl && oe._evalUrl(n.src) : oe.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Xe, "")));
                a = i = null
            }
            return this
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        oe.fn[t] = function (t) {
            for (var i, n = 0, o = [], r = oe(t), s = r.length - 1; s >= n; n++) i = n === s ? this : this.clone(!0), oe(r[n])[e](i), Q.apply(o, i.get());
            return this.pushStack(o)
        }
    });
    var Je, Ze = {};
    ! function () {
        var t;
        ie.shrinkWrapBlocks = function () {
            if (null != t) return t;
            t = !1;
            var e, i, n;
            return i = fe.getElementsByTagName("body")[0], i && i.style ? (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== xe && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(fe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
        }
    }();
    var ti, ei, ii = /^margin/,
        ni = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"),
        oi = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (ti = function (e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        }, ei = function (t, e, i) {
            var n, o, r, s, a = t.style;
            return i = i || ti(t), s = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== s || oe.contains(t.ownerDocument, t) || (s = oe.style(t, e)), ni.test(s) && ii.test(e) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r)), void 0 === s ? s : s + ""
        }) : fe.documentElement.currentStyle && (ti = function (t) {
            return t.currentStyle
        }, ei = function (t, e, i) {
            var n, o, r, s, a = t.style;
            return i = i || ti(t), s = i ? i[e] : void 0, null == s && a && a[e] && (s = a[e]), ni.test(s) && !oi.test(e) && (n = a.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = n, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
        }),
        function () {
            function e() {
                var e, i, n, o;
                i = fe.getElementsByTagName("body")[0], i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = s = !1, l = !0, t.getComputedStyle && (r = "1%" !== (t.getComputedStyle(e, null) || {}).top, s = "4px" === (t.getComputedStyle(e, null) || {
                    width: "4px"
                }).width, o = e.appendChild(fe.createElement("div")), o.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight), e.removeChild(o)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = e.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === o[0].offsetHeight, a && (o[0].style.display = "", o[1].style.display = "none", a = 0 === o[0].offsetHeight), i.removeChild(n))
            }
            var i, n, o, r, s, a, l;
            i = fe.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = i.getElementsByTagName("a")[0], n = o && o.style, n && (n.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === n.opacity, ie.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === i.style.backgroundClip, ie.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, oe.extend(ie, {
                reliableHiddenOffsets: function () {
                    return null == a && e(), a
                },
                boxSizingReliable: function () {
                    return null == s && e(), s
                },
                pixelPosition: function () {
                    return null == r && e(), r
                },
                reliableMarginRight: function () {
                    return null == l && e(), l
                }
            }))
        }(), oe.swap = function (t, e, i, n) {
            var o, r, s = {};
            for (r in e) s[r] = t.style[r], t.style[r] = e[r];
            o = i.apply(t, n || []);
            for (r in e) t.style[r] = s[r];
            return o
        };
    var ri = /alpha\([^)]*\)/i,
        si = /opacity\s*=\s*([^)]*)/,
        ai = /^(none|table(?!-c[ea]).+)/,
        li = new RegExp("^(" + Te + ")(.*)$", "i"),
        ui = new RegExp("^([+-])=(" + Te + ")", "i"),
        ci = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        hi = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        di = ["Webkit", "O", "Moz", "ms"];
    oe.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = ei(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ie.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = oe.camelCase(e),
                    l = t.style;
                if (e = oe.cssProps[a] || (oe.cssProps[a] = S(l, a)), s = oe.cssHooks[e] || oe.cssHooks[a], void 0 === i) return s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e];
                if (r = typeof i, "string" === r && (o = ui.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(oe.css(t, e)), r = "number"), null != i && i === i && ("number" !== r || oe.cssNumber[a] || (i += "px"), ie.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (i = s.set(t, i, n))))) try {
                    l[e] = i
                } catch (u) {}
            }
        },
        css: function (t, e, i, n) {
            var o, r, s, a = oe.camelCase(e);
            return e = oe.cssProps[a] || (oe.cssProps[a] = S(t.style, a)), s = oe.cssHooks[e] || oe.cssHooks[a], s && "get" in s && (r = s.get(t, !0, i)), void 0 === r && (r = ei(t, e, n)), "normal" === r && e in hi && (r = hi[e]), "" === i || i ? (o = parseFloat(r), i === !0 || oe.isNumeric(o) ? o || 0 : r) : r
        }
    }), oe.each(["height", "width"], function (t, e) {
        oe.cssHooks[e] = {
            get: function (t, i, n) {
                return i ? ai.test(oe.css(t, "display")) && 0 === t.offsetWidth ? oe.swap(t, ci, function () {
                    return P(t, e, n)
                }) : P(t, e, n) : void 0
            },
            set: function (t, i, n) {
                var o = n && ti(t);
                return M(t, i, n ? O(t, e, n, ie.boxSizing && "border-box" === oe.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }), ie.opacity || (oe.cssHooks.opacity = {
        get: function (t, e) {
            return si.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function (t, e) {
            var i = t.style,
                n = t.currentStyle,
                o = oe.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                r = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === oe.trim(r.replace(ri, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = ri.test(r) ? r.replace(ri, o) : r + " " + o)
        }
    }), oe.cssHooks.marginRight = T(ie.reliableMarginRight, function (t, e) {
        return e ? oe.swap(t, {
            display: "inline-block"
        }, ei, [t, "marginRight"]) : void 0
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        oe.cssHooks[t + e] = {
            expand: function (i) {
                for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[t + Se[n] + e] = r[n] || r[n - 2] || r[0];
                return o
            }
        }, ii.test(t) || (oe.cssHooks[t + e].set = M)
    }), oe.fn.extend({
        css: function (t, e) {
            return Me(this, function (t, e, i) {
                var n, o, r = {},
                    s = 0;
                if (oe.isArray(e)) {
                    for (n = ti(t), o = e.length; o > s; s++) r[e[s]] = oe.css(t, e[s], !1, n);
                    return r
                }
                return void 0 !== i ? oe.style(t, e, i) : oe.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function () {
            return E(this, !0)
        },
        hide: function () {
            return E(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Ee(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = N, N.prototype = {
        constructor: N,
        init: function (t, e, i, n, o, r) {
            this.elem = t, this.prop = i, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (oe.cssNumber[i] ? "" : "px")
        },
        cur: function () {
            var t = N.propHooks[this.prop];
            return t && t.get ? t.get(this) : N.propHooks._default.get(this)
        },
        run: function (t) {
            var e, i = N.propHooks[this.prop];
            return this.pos = e = this.options.duration ? oe.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : N.propHooks._default.set(this), this
        }
    }, N.prototype.init.prototype = N.prototype, N.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = oe.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function (t) {
                oe.fx.step[t.prop] ? oe.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[oe.cssProps[t.prop]] || oe.cssHooks[t.prop]) ? oe.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, oe.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, oe.fx = N.prototype.init, oe.fx.step = {};
    var pi, fi, mi = /^(?:toggle|show|hide)$/,
        gi = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"),
        vi = /queueHooks$/,
        yi = [H],
        bi = {
            "*": [function (t, e) {
                var i = this.createTween(t, e),
                    n = i.cur(),
                    o = gi.exec(e),
                    r = o && o[3] || (oe.cssNumber[t] ? "" : "px"),
                    s = (oe.cssNumber[t] || "px" !== r && +n) && gi.exec(oe.css(i.elem, t)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== r) {
                    r = r || s[3], o = o || [], s = +n || 1;
                    do a = a || ".5", s /= a, oe.style(i.elem, t, s + r); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                }
                return o && (s = i.start = +s || +n || 0, i.unit = r, i.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), i
            }]
        };
    oe.Animation = oe.extend(L, {
            tweener: function (t, e) {
                oe.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, n = 0, o = t.length; o > n; n++) i = t[n], bi[i] = bi[i] || [], bi[i].unshift(e)
            },
            prefilter: function (t, e) {
                e ? yi.unshift(t) : yi.push(t)
            }
        }), oe.speed = function (t, e, i) {
            var n = t && "object" == typeof t ? oe.extend({}, t) : {
                complete: i || !i && e || oe.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !oe.isFunction(e) && e
            };
            return n.duration = oe.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in oe.fx.speeds ? oe.fx.speeds[n.duration] : oe.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                oe.isFunction(n.old) && n.old.call(this), n.queue && oe.dequeue(this, n.queue)
            }, n
        }, oe.fn.extend({
            fadeTo: function (t, e, i, n) {
                return this.filter(Ee).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function (t, e, i, n) {
                var o = oe.isEmptyObject(t),
                    r = oe.speed(e, i, n),
                    s = function () {
                        var e = L(this, oe.extend({}, t), r);
                        (o || oe._data(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function (t, e, i) {
                var n = function (t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0,
                        o = null != t && t + "queueHooks",
                        r = oe.timers,
                        s = oe._data(this);
                    if (o) s[o] && s[o].stop && n(s[o]);
                    else
                        for (o in s) s[o] && s[o].stop && vi.test(o) && n(s[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(i), e = !1, r.splice(o, 1));
                    (e || !i) && oe.dequeue(this, t)
                })
            },
            finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, i = oe._data(this),
                        n = i[t + "queue"],
                        o = i[t + "queueHooks"],
                        r = oe.timers,
                        s = n ? n.length : 0;
                    for (i.finish = !0, oe.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function (t, e) {
            var i = oe.fn[e];
            oe.fn[e] = function (t, n, o) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(A(e, !0), t, n, o)
            }
        }), oe.each({
            slideDown: A("show"),
            slideUp: A("hide"),
            slideToggle: A("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (t, e) {
            oe.fn[t] = function (t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), oe.timers = [], oe.fx.tick = function () {
            var t, e = oe.timers,
                i = 0;
            for (pi = oe.now(); i < e.length; i++) t = e[i], t() || e[i] !== t || e.splice(i--, 1);
            e.length || oe.fx.stop(), pi = void 0
        }, oe.fx.timer = function (t) {
            oe.timers.push(t), t() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function () {
            fi || (fi = setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function () {
            clearInterval(fi), fi = null
        }, oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oe.fn.delay = function (t, e) {
            return t = oe.fx ? oe.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, i) {
                var n = setTimeout(e, t);
                i.stop = function () {
                    clearTimeout(n)
                }
            })
        },
        function () {
            var t, e, i, n, o;
            e = fe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], i = fe.createElement("select"), o = i.appendChild(fe.createElement("option")), t = e.getElementsByTagName("input")[0], n.style.cssText = "top:1px", ie.getSetAttribute = "t" !== e.className, ie.style = /top/.test(n.getAttribute("style")), ie.hrefNormalized = "/a" === n.getAttribute("href"), ie.checkOn = !!t.value, ie.optSelected = o.selected, ie.enctype = !!fe.createElement("form").enctype, i.disabled = !0, ie.optDisabled = !o.disabled, t = fe.createElement("input"), t.setAttribute("value", ""), ie.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ie.radioValue = "t" === t.value
        }();
    var _i = /\r/g;
    oe.fn.extend({
        val: function (t) {
            var e, i, n, o = this[0]; {
                if (arguments.length) return n = oe.isFunction(t), this.each(function (i) {
                    var o;
                    1 === this.nodeType && (o = n ? t.call(this, i, oe(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function (t) {
                        return null == t ? "" : t + ""
                    })), e = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                });
                if (o) return e = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(_i, "") : null == i ? "" : i)
            }
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = oe.find.attr(t, "value");
                    return null != e ? e : oe.trim(oe.text(t))
                }
            },
            select: {
                get: function (t) {
                    for (var e, i, n = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : n.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (i = n[l], !(!i.selected && l !== o || (ie.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && oe.nodeName(i.parentNode, "optgroup"))) {
                            if (e = oe(i).val(), r) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function (t, e) {
                    for (var i, n, o = t.options, r = oe.makeArray(e), s = o.length; s--;)
                        if (n = o[s], oe.inArray(oe.valHooks.option.get(n), r) >= 0) try {
                            n.selected = i = !0
                        } catch (a) {
                            n.scrollHeight
                        } else n.selected = !1;
                    return i || (t.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function () {
        oe.valHooks[this] = {
            set: function (t, e) {
                return oe.isArray(e) ? t.checked = oe.inArray(oe(t).val(), e) >= 0 : void 0
            }
        }, ie.checkOn || (oe.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var wi, ki, xi = oe.expr.attrHandle,
        Di = /^(?:checked|selected)$/i,
        Ci = ie.getSetAttribute,
        Ti = ie.input;
    oe.fn.extend({
        attr: function (t, e) {
            return Me(this, oe.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                oe.removeAttr(this, t)
            })
        }
    }), oe.extend({
        attr: function (t, e, i) {
            var n, o, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === xe ? oe.prop(t, e, i) : (1 === r && oe.isXMLDoc(t) || (e = e.toLowerCase(), n = oe.attrHooks[e] || (oe.expr.match.bool.test(e) ? ki : wi)), void 0 === i ? n && "get" in n && null !== (o = n.get(t, e)) ? o : (o = oe.find.attr(t, e), null == o ? void 0 : o) : null !== i ? n && "set" in n && void 0 !== (o = n.set(t, i, e)) ? o : (t.setAttribute(e, i + ""), i) : void oe.removeAttr(t, e))
        },
        removeAttr: function (t, e) {
            var i, n, o = 0,
                r = e && e.match(be);
            if (r && 1 === t.nodeType)
                for (; i = r[o++];) n = oe.propFix[i] || i, oe.expr.match.bool.test(i) ? Ti && Ci || !Di.test(i) ? t[n] = !1 : t[oe.camelCase("default-" + i)] = t[n] = !1 : oe.attr(t, i, ""), t.removeAttribute(Ci ? i : n)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!ie.radioValue && "radio" === e && oe.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }
    }), ki = {
        set: function (t, e, i) {
            return e === !1 ? oe.removeAttr(t, i) : Ti && Ci || !Di.test(i) ? t.setAttribute(!Ci && oe.propFix[i] || i, i) : t[oe.camelCase("default-" + i)] = t[i] = !0, i
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = xi[e] || oe.find.attr;
        xi[e] = Ti && Ci || !Di.test(e) ? function (t, e, n) {
            var o, r;
            return n || (r = xi[e], xi[e] = o, o = null != i(t, e, n) ? e.toLowerCase() : null, xi[e] = r), o
        } : function (t, e, i) {
            return i ? void 0 : t[oe.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Ti && Ci || (oe.attrHooks.value = {
        set: function (t, e, i) {
            return oe.nodeName(t, "input") ? void(t.defaultValue = e) : wi && wi.set(t, e, i)
        }
    }), Ci || (wi = {
        set: function (t, e, i) {
            var n = t.getAttributeNode(i);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
        }
    }, xi.id = xi.name = xi.coords = function (t, e, i) {
        var n;
        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
    }, oe.valHooks.button = {
        get: function (t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value : void 0
        },
        set: wi.set
    }, oe.attrHooks.contenteditable = {
        set: function (t, e, i) {
            wi.set(t, "" === e ? !1 : e, i)
        }
    }, oe.each(["width", "height"], function (t, e) {
        oe.attrHooks[e] = {
            set: function (t, i) {
                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
            }
        }
    })), ie.style || (oe.attrHooks.style = {
        get: function (t) {
            return t.style.cssText || void 0
        },
        set: function (t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Si = /^(?:input|select|textarea|button|object)$/i,
        Ei = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function (t, e) {
            return Me(this, oe.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return t = oe.propFix[t] || t, this.each(function () {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), oe.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (t, e, i) {
            var n, o, r, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return r = 1 !== s || !oe.isXMLDoc(t), r && (e = oe.propFix[e] || e, o = oe.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = oe.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Si.test(t.nodeName) || Ei.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), ie.hrefNormalized || oe.each(["href", "src"], function (t, e) {
        oe.propHooks[e] = {
            get: function (t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ie.optSelected || (oe.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        oe.propFix[this.toLowerCase()] = this
    }), ie.enctype || (oe.propFix.enctype = "encoding");
    var Mi = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function (t) {
            var e, i, n, o, r, s, a = 0,
                l = this.length,
                u = "string" == typeof t && t;
            if (oe.isFunction(t)) return this.each(function (e) {
                oe(this).addClass(t.call(this, e, this.className))
            });
            if (u)
                for (e = (t || "").match(be) || []; l > a; a++)
                    if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Mi, " ") : " ")) {
                        for (r = 0; o = e[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        s = oe.trim(n), i.className !== s && (i.className = s)
                    }
            return this
        },
        removeClass: function (t) {
            var e, i, n, o, r, s, a = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof t && t;
            if (oe.isFunction(t)) return this.each(function (e) {
                oe(this).removeClass(t.call(this, e, this.className))
            });
            if (u)
                for (e = (t || "").match(be) || []; l > a; a++)
                    if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Mi, " ") : "")) {
                        for (r = 0; o = e[r++];)
                            for (; n.indexOf(" " + o + " ") >= 0;) n = n.replace(" " + o + " ", " ");
                        s = t ? oe.trim(n) : "", i.className !== s && (i.className = s)
                    }
            return this
        },
        toggleClass: function (t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(oe.isFunction(t) ? function (i) {
                oe(this).toggleClass(t.call(this, i, this.className, e), e)
            } : function () {
                if ("string" === i)
                    for (var e, n = 0, o = oe(this), r = t.match(be) || []; e = r[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else(i === xe || "boolean" === i) && (this.className && oe._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : oe._data(this, "__className__") || "")
            })
        },
        hasClass: function (t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Mi, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        oe.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), oe.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var Oi = oe.now(),
        Pi = /\?/,
        Ni = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    oe.parseJSON = function (e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var i, n = null,
            o = oe.trim(e + "");
        return o && !oe.trim(o.replace(Ni, function (t, e, o, r) {
            return i && e && (n = 0), 0 === n ? t : (i = o || e, n += !r - !o, "")
        })) ? Function("return " + o)() : oe.error("Invalid JSON: " + e)
    }, oe.parseXML = function (e) {
        var i, n;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
        } catch (o) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + e), i
    };
    var Ii, Ai, ji = /#.*$/,
        Hi = /([?&])_=[^&]*/,
        $i = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Li = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        zi = /^(?:GET|HEAD)$/,
        Fi = /^\/\//,
        Wi = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ri = {},
        Yi = {},
        Bi = "*/".concat("*");
    try {
        Ai = location.href
    } catch (qi) {
        Ai = fe.createElement("a"), Ai.href = "", Ai = Ai.href
    }
    Ii = Wi.exec(Ai.toLowerCase()) || [], oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ai,
            type: "GET",
            isLocal: Li.test(Ii[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bi,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? W(W(t, oe.ajaxSettings), e) : W(oe.ajaxSettings, t)
        },
        ajaxPrefilter: z(Ri),
        ajaxTransport: z(Yi),
        ajax: function (t, e) {
            function i(t, e, i, n) {
                var o, c, v, y, _, k = e;
                2 !== b && (b = 2, a && clearTimeout(a), u = void 0, s = n || "", w.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, i && (y = R(h, w, i)), y = Y(h, y, w, o), o ? (h.ifModified && (_ = w.getResponseHeader("Last-Modified"), _ && (oe.lastModified[r] = _), _ = w.getResponseHeader("etag"), _ && (oe.etag[r] = _)), 204 === t || "HEAD" === h.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = y.state, c = y.data, v = y.error, o = !v)) : (v = k, (t || !k) && (k = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || k) + "", o ? f.resolveWith(d, [c, k, w]) : f.rejectWith(d, [w, k, v]), w.statusCode(g), g = void 0, l && p.trigger(o ? "ajaxSuccess" : "ajaxError", [w, h, o ? c : v]), m.fireWith(d, [w, k]), l && (p.trigger("ajaxComplete", [w, h]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, o, r, s, a, l, u, c, h = oe.ajaxSetup({}, e),
                d = h.context || h,
                p = h.context && (d.nodeType || d.jquery) ? oe(d) : oe.event,
                f = oe.Deferred(),
                m = oe.Callbacks("once memory"),
                g = h.statusCode || {},
                v = {},
                y = {},
                b = 0,
                _ = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; e = $i.exec(s);) c[e[1].toLowerCase()] = e[2];
                            e = c[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function (t, e) {
                        var i = t.toLowerCase();
                        return b || (t = y[i] = y[i] || t, v[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return b || (h.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) g[e] = [g[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || _;
                        return u && u.abort(e), i(0, e), this
                    }
                };
            if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, h.url = ((t || h.url || Ai) + "").replace(ji, "").replace(Fi, Ii[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = oe.trim(h.dataType || "*").toLowerCase().match(be) || [""], null == h.crossDomain && (n = Wi.exec(h.url.toLowerCase()), h.crossDomain = !(!n || n[1] === Ii[1] && n[2] === Ii[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Ii[3] || ("http:" === Ii[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = oe.param(h.data, h.traditional)), F(Ri, h, e, w), 2 === b) return w;
            l = oe.event && h.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !zi.test(h.type), r = h.url, h.hasContent || (h.data && (r = h.url += (Pi.test(r) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Hi.test(r) ? r.replace(Hi, "$1_=" + Oi++) : r + (Pi.test(r) ? "&" : "?") + "_=" + Oi++)), h.ifModified && (oe.lastModified[r] && w.setRequestHeader("If-Modified-Since", oe.lastModified[r]), oe.etag[r] && w.setRequestHeader("If-None-Match", oe.etag[r])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bi + "; q=0.01" : "") : h.accepts["*"]);
            for (o in h.headers) w.setRequestHeader(o, h.headers[o]);
            if (h.beforeSend && (h.beforeSend.call(d, w, h) === !1 || 2 === b)) return w.abort();
            _ = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[o](h[o]);
            if (u = F(Yi, h, e, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, h]), h.async && h.timeout > 0 && (a = setTimeout(function () {
                    w.abort("timeout")
                }, h.timeout));
                try {
                    b = 1, u.send(v, i)
                } catch (k) {
                    if (!(2 > b)) throw k;
                    i(-1, k)
                }
            } else i(-1, "No Transport");
            return w
        },
        getJSON: function (t, e, i) {
            return oe.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return oe.get(t, void 0, e, "script")
        }
    }), oe.each(["get", "post"], function (t, e) {
        oe[e] = function (t, i, n, o) {
            return oe.isFunction(i) && (o = o || n, n = i, i = void 0), oe.ajax({
                url: t,
                type: e,
                dataType: o,
                data: i,
                success: n
            })
        }
    }), oe._evalUrl = function (t) {
        return oe.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, oe.fn.extend({
        wrapAll: function (t) {
            if (oe.isFunction(t)) return this.each(function (e) {
                oe(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = oe(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function (t) {
            return this.each(oe.isFunction(t) ? function (e) {
                oe(this).wrapInner(t.call(this, e))
            } : function () {
                var e = oe(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = oe.isFunction(t);
            return this.each(function (i) {
                oe(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || oe.css(t, "display"))
    }, oe.expr.filters.visible = function (t) {
        return !oe.expr.filters.hidden(t)
    };
    var Ui = /%20/g,
        Gi = /\[\]$/,
        Xi = /\r?\n/g,
        Ki = /^(?:submit|button|image|reset|file)$/i,
        Vi = /^(?:input|select|textarea|keygen)/i;
    oe.param = function (t, e) {
        var i, n = [],
            o = function (t, e) {
                e = oe.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(t) || t.jquery && !oe.isPlainObject(t)) oe.each(t, function () {
            o(this.name, this.value)
        });
        else
            for (i in t) B(i, t[i], e, o);
        return n.join("&").replace(Ui, "+")
    }, oe.fn.extend({
        serialize: function () {
            return oe.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = oe.prop(this, "elements");
                return t ? oe.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !oe(this).is(":disabled") && Vi.test(this.nodeName) && !Ki.test(t) && (this.checked || !Oe.test(t))
            }).map(function (t, e) {
                var i = oe(this).val();
                return null == i ? null : oe.isArray(i) ? oe.map(i, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(Xi, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Xi, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && q() || U()
    } : q;
    var Qi = 0,
        Ji = {},
        Zi = oe.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function () {
        for (var t in Ji) Ji[t](void 0, !0)
    }), ie.cors = !!Zi && "withCredentials" in Zi, Zi = ie.ajax = !!Zi, Zi && oe.ajaxTransport(function (t) {
        if (!t.crossDomain || ie.cors) {
            var e;
            return {
                send: function (i, n) {
                    var o, r = t.xhr(),
                        s = ++Qi;
                    if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) r[o] = t.xhrFields[o];
                    t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (o in i) void 0 !== i[o] && r.setRequestHeader(o, i[o] + "");
                    r.send(t.hasContent && t.data || null), e = function (i, o) {
                        var a, l, u;
                        if (e && (o || 4 === r.readyState))
                            if (delete Ji[s], e = void 0, r.onreadystatechange = oe.noop, o) 4 !== r.readyState && r.abort();
                            else {
                                u = {}, a = r.status, "string" == typeof r.responseText && (u.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (c) {
                                    l = ""
                                }
                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                            }
                        u && n(a, l, u, r.getAllResponseHeaders())
                    }, t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = Ji[s] = e : e()
                },
                abort: function () {
                    e && e(void 0, !0)
                }
            }
        }
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (t) {
                return oe.globalEval(t), t
            }
        }
    }), oe.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), oe.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, i = fe.head || oe("head")[0] || fe.documentElement;
            return {
                send: function (n, o) {
                    e = fe.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, i) {
                        (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || o(200, "success"))
                    }, i.insertBefore(e, i.firstChild)
                },
                abort: function () {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var tn = [],
        en = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = tn.pop() || oe.expando + "_" + Oi++;
            return this[t] = !0, t
        }
    }), oe.ajaxPrefilter("json jsonp", function (e, i, n) {
        var o, r, s, a = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = oe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + o) : e.jsonp !== !1 && (e.url += (Pi.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
            return s || oe.error(o + " was not called"), s[0]
        }, e.dataTypes[0] = "json", r = t[o], t[o] = function () {
            s = arguments
        }, n.always(function () {
            t[o] = r, e[o] && (e.jsonpCallback = i.jsonpCallback, tn.push(o)), s && oe.isFunction(r) && r(s[0]), s = r = void 0
        }), "script") : void 0
    }), oe.parseHTML = function (t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || fe;
        var n = he.exec(t),
            o = !i && [];
        return n ? [e.createElement(n[1])] : (n = oe.buildFragment([t], e, o), o && o.length && oe(o).remove(), oe.merge([], n.childNodes))
    };
    var nn = oe.fn.load;
    oe.fn.load = function (t, e, i) {
        if ("string" != typeof t && nn) return nn.apply(this, arguments);
        var n, o, r, s = this,
            a = t.indexOf(" ");
        return a >= 0 && (n = oe.trim(t.slice(a, t.length)), t = t.slice(0, a)), oe.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && oe.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, s.html(n ? oe("<div>").append(oe.parseHTML(t)).find(n) : t)
        }).complete(i && function (t, e) {
            s.each(i, o || [t.responseText, e, t])
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        oe.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), oe.expr.filters.animated = function (t) {
        return oe.grep(oe.timers, function (e) {
            return t === e.elem
        }).length
    };
    var on = t.document.documentElement;
    oe.offset = {
        setOffset: function (t, e, i) {
            var n, o, r, s, a, l, u, c = oe.css(t, "position"),
                h = oe(t),
                d = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), r = oe.css(t, "top"), l = oe.css(t, "left"), u = ("absolute" === c || "fixed" === c) && oe.inArray("auto", [r, l]) > -1, u ? (n = h.position(), s = n.top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), oe.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : h.css(d)
        }
    }, oe.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                oe.offset.setOffset(this, t, e)
            });
            var e, i, n = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                r = o && o.ownerDocument;
            if (r) return e = r.documentElement, oe.contains(e, o) ? (typeof o.getBoundingClientRect !== xe && (n = o.getBoundingClientRect()), i = G(r), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n
        },
        position: function () {
            if (this[0]) {
                var t, e, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === oe.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), oe.nodeName(t[0], "html") || (i = t.offset()), i.top += oe.css(t[0], "borderTopWidth", !0), i.left += oe.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - oe.css(n, "marginTop", !0),
                    left: e.left - i.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || on; t && !oe.nodeName(t, "html") && "static" === oe.css(t, "position");) t = t.offsetParent;
                return t || on
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, e) {
        var i = /Y/.test(e);
        oe.fn[t] = function (n) {
            return Me(this, function (t, n, o) {
                var r = G(t);
                return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[n] : t[n] : void(r ? r.scrollTo(i ? oe(r).scrollLeft() : o, i ? o : oe(r).scrollTop()) : t[n] = o)
            }, t, n, arguments.length, null)
        }
    }), oe.each(["top", "left"], function (t, e) {
        oe.cssHooks[e] = T(ie.pixelPosition, function (t, i) {
            return i ? (i = ei(t, e), ni.test(i) ? oe(t).position()[e] + "px" : i) : void 0
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function (t, e) {
        oe.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function (i, n) {
            oe.fn[n] = function (n, o) {
                var r = arguments.length && (i || "boolean" != typeof n),
                    s = i || (n === !0 || o === !0 ? "margin" : "border");
                return Me(this, function (e, i, n) {
                    var o;
                    return oe.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? oe.css(e, i, s) : oe.style(e, i, n, s)
                }, e, r ? n : void 0, r, null)
            }
        })
    }), oe.fn.size = function () {
        return this.length
    }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return oe
    });
    var rn = t.jQuery,
        sn = t.$;
    return oe.noConflict = function (e) {
        return t.$ === oe && (t.$ = sn), e && t.jQuery === oe && (t.jQuery = rn), oe
    }, typeof e === xe && (t.jQuery = t.$ = oe), oe
}), function (t, e, i) {
    function n(t) {
        return t
    }

    function o(t) {
        return r(decodeURIComponent(t.replace(a, " ")))
    }

    function r(t) {
        return 0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), t
    }

    function s(t) {
        return l.json ? JSON.parse(t) : t
    }
    var a = /\+/g,
        l = t.cookie = function (r, a, u) {
            if (a !== i) {
                if (u = t.extend({}, l.defaults, u), null === a && (u.expires = -1), "number" == typeof u.expires) {
                    var c = u.expires,
                        h = u.expires = new Date;
                    h.setDate(h.getDate() + c)
                }
                return a = l.json ? JSON.stringify(a) : String(a), e.cookie = [encodeURIComponent(r), "=", l.raw ? a : encodeURIComponent(a), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join("")
            }
            for (var d = l.raw ? n : o, p = e.cookie.split("; "), f = r ? null : {}, m = 0, g = p.length; g > m; m++) {
                var v = p[m].split("="),
                    y = d(v.shift()),
                    b = d(v.join("="));
                if (r && r === y) {
                    f = s(b);
                    break
                }
                r || (f[y] = s(b))
            }
            return f
        };
    l.defaults = {}, t.removeCookie = function (e, i) {
        return null !== t.cookie(e) ? (t.cookie(e, null, i), !0) : !1
    }
}(jQuery, document), function () {
    var t, e, i, n, o, r, s, a, l, u, c, h, d, p, f, m, g, v, y, b, _, w, k, x, D, C, T, S, E, M, O, P, N, I, A, j, H, $, L, z, F, W, R, Y, B, q, U, G, X, K, V, Q, J, Z, te, ee, ie = [].indexOf || function (t) {
            for (var e = 0, i = this.length; i > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        },
        ne = {}.hasOwnProperty,
        oe = function (t, e) {
            function i() {
                this.constructor = t
            }
            for (var n in e) ne.call(e, n) && (t[n] = e[n]);
            return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
        },
        re = [].slice,
        se = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        };
    I = {}, d = 10, V = !1, L = null, y = null, P = null, F = null, te = null, n = {
        BEFORE_CHANGE: "page:before-change",
        FETCH: "page:fetch",
        RECEIVE: "page:receive",
        CHANGE: "page:change",
        UPDATE: "page:update",
        LOAD: "page:load",
        RESTORE: "page:restore",
        BEFORE_UNLOAD: "page:before-unload",
        EXPIRE: "page:expire"
    }, x = function (t) {
        var e;
        return t = new i(t), q(), h(), null != L && L.start(), V && (e = Q(t.absolute)) ? (D(e), C(t, null, !1)) : C(t, X)
    }, Q = function (t) {
        var e;
        return e = I[t], e && !e.transitionCacheDisabled ? e : void 0
    }, _ = function (t) {
        return null == t && (t = !0), V = t
    }, b = function (t) {
        return null == t && (t = !0), u ? t ? null != L ? L : L = new r("html") : (null != L && L.uninstall(), L = null) : void 0
    }, C = function (t, e, i) {
        return null == i && (i = !0), J(n.FETCH, {
            url: t.absolute
        }), null != te && te.abort(), te = new XMLHttpRequest, te.open("GET", t.withoutHashForIE10compatibility(), !0), te.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"), te.setRequestHeader("X-XHR-Referer", F), te.onload = function () {
            var i;
            return J(n.RECEIVE, {
                url: t.absolute
            }), (i = $()) ? (W(t), R(), p.apply(null, k(i)), N(), "function" == typeof e && e(), J(n.LOAD)) : document.location.href = v() || t.absolute
        }, L && i && (te.onprogress = function () {
            return function (t) {
                var e;
                return e = t.lengthComputable ? t.loaded / t.total * 100 : L.value + (100 - L.value) / 10, L.advanceTo(e)
            }
        }(this)), te.onloadend = function () {
            return te = null
        }, te.onerror = function () {
            return document.location.href = t.absolute
        }, te.send()
    }, D = function (t) {
        return null != te && te.abort(), p(t.title, t.body), z(t), J(n.RESTORE)
    }, h = function () {
        var t;
        return t = new i(y.url), I[t.absolute] = {
            url: t.relative,
            body: document.body,
            title: document.title,
            positionY: window.pageYOffset,
            positionX: window.pageXOffset,
            cachedAt: (new Date).getTime(),
            transitionCacheDisabled: null != document.querySelector("[data-no-transition-cache]")
        }, m(d)
    }, j = function (t) {
        return null == t && (t = d), /^[\d]+$/.test(t) ? d = parseInt(t) : void 0
    }, m = function (t) {
        var e, i, o, r, s, a;
        for (o = Object.keys(I), e = o.map(function (t) {
                return I[t].cachedAt
            }).sort(function (t, e) {
                return e - t
            }), a = [], r = 0, s = o.length; s > r; r++) i = o[r], I[i].cachedAt <= e[t] && (J(n.EXPIRE, I[i]), a.push(delete I[i]));
        return a
    }, p = function (e, i, o, r) {
        return J(n.BEFORE_UNLOAD), document.title = e, document.documentElement.replaceChild(i, document.body), null != o && t.update(o), K(), r && w(), y = window.history.state, null != L && L.done(), J(n.CHANGE), J(n.UPDATE)
    }, w = function () {
        var t, e, i, n, o, r, s, a, l, u, c, h;
        for (r = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')), s = 0, l = r.length; l > s; s++)
            if (o = r[s], "" === (c = o.type) || "text/javascript" === c) {
                for (e = document.createElement("script"), h = o.attributes, a = 0, u = h.length; u > a; a++) t = h[a], e.setAttribute(t.name, t.value);
                o.hasAttribute("async") || (e.async = !1), e.appendChild(document.createTextNode(o.innerHTML)), n = o.parentNode, i = o.nextSibling, n.removeChild(o), n.insertBefore(e, i)
            }
    }, U = function (t) {
        return t.innerHTML = t.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi, ""), t
    }, K = function () {
        var t, e;
        return t = (e = document.querySelectorAll("input[autofocus], textarea[autofocus]"))[e.length - 1], t && document.activeElement !== t ? t.focus() : void 0
    }, W = function (t) {
        return (t = new i(t)).absolute !== F ? window.history.pushState({
            turbolinks: !0,
            url: t.absolute
        }, "", t.absolute) : void 0
    }, R = function () {
        var t, e;
        return (t = te.getResponseHeader("X-XHR-Redirected-To")) ? (t = new i(t), e = t.hasNoHash() ? document.location.hash : "", window.history.replaceState(window.history.state, "", t.href + e)) : void 0
    }, v = function () {
        var t;
        return null != (t = te.getResponseHeader("Location")) && new i(t).crossOrigin() ? t : void 0
    }, q = function () {
        return F = document.location.href
    }, B = function () {
        return window.history.replaceState({
            turbolinks: !0,
            url: document.location.href
        }, "", document.location.href)
    }, Y = function () {
        return y = window.history.state
    }, N = function () {
        var t;
        return navigator.userAgent.match(/Firefox/) && !(t = new i).hasNoHash() ? (window.history.replaceState(y, "", t.withoutHash()), document.location.hash = t.hash) : void 0
    }, z = function (t) {
        return window.scrollTo(t.positionX, t.positionY)
    }, X = function () {
        return document.location.hash ? document.location.href = document.location.href : window.scrollTo(0, 0)
    }, f = function (t) {
        var e, i, n;
        if (null == t || "object" != typeof t) return t;
        e = new t.constructor;
        for (i in t) n = t[i], e[i] = f(n);
        return e
    }, H = function (t) {
        var e, i;
        return e = (null != (i = document.cookie.match(new RegExp(t + "=(\\w+)"))) ? i[1].toUpperCase() : void 0) || "", document.cookie = t + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/", e
    }, J = function (t, e) {
        var i;
        return "undefined" != typeof Prototype && Event.fire(document, t, e, !0), i = document.createEvent("Events"), e && (i.data = e), i.initEvent(t, !0, !0), document.dispatchEvent(i)
    }, A = function (t) {
        return !J(n.BEFORE_CHANGE, {
            url: t
        })
    }, $ = function () {
        var t, e, i, n, o, r;
        return e = function () {
            var t;
            return 400 <= (t = te.status) && 600 > t
        }, r = function () {
            var t;
            return null != (t = te.getResponseHeader("Content-Type")) && t.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)
        }, n = function (t) {
            var e, i, n, o, r;
            for (o = t.querySelector("head").childNodes, r = [], i = 0, n = o.length; n > i; i++) e = o[i], null != ("function" == typeof e.getAttribute ? e.getAttribute("data-turbolinks-track") : void 0) && r.push(e.getAttribute("src") || e.getAttribute("href"));
            return r
        }, t = function (t) {
            var e;
            return P || (P = n(document)), e = n(t), e.length !== P.length || o(e, P).length !== P.length
        }, o = function (t, e) {
            var i, n, o, r, s;
            for (t.length > e.length && (r = [e, t], t = r[0], e = r[1]), s = [], n = 0, o = t.length; o > n; n++) i = t[n], ie.call(e, i) >= 0 && s.push(i);
            return s
        }, !e() && r() && (i = g(te.responseText), i && !t(i)) ? i : void 0
    }, k = function (e) {
        var i;
        return i = e.querySelector("title"), [null != i ? i.textContent : void 0, U(e.querySelector("body")), t.get(e).token, "runScripts"]
    }, t = {
        get: function (t) {
            var e;
            return null == t && (t = document), {
                node: e = t.querySelector('meta[name="csrf-token"]'),
                token: null != e && "function" == typeof e.getAttribute ? e.getAttribute("content") : void 0
            }
        },
        update: function (t) {
            var e;
            return e = this.get(), null != e.token && null != t && e.token !== t ? e.node.setAttribute("content", t) : void 0
        }
    }, g = function (t) {
        var e;
        return e = document.documentElement.cloneNode(), e.innerHTML = t, e.head = e.querySelector("head"), e.body = e.querySelector("body"), e
    }, i = function () {
        function t(e) {
            return this.original = null != e ? e : document.location.href, this.original.constructor === t ? this.original : void this._parse()
        }
        return t.prototype.withoutHash = function () {
            return this.href.replace(this.hash, "").replace("#", "")
        }, t.prototype.withoutHashForIE10compatibility = function () {
            return this.withoutHash()
        }, t.prototype.hasNoHash = function () {
            return 0 === this.hash.length
        }, t.prototype.crossOrigin = function () {
            return this.origin !== (new t).origin
        }, t.prototype._parse = function () {
            var t;
            return (null != this.link ? this.link : this.link = document.createElement("a")).href = this.original, t = this.link, this.href = t.href, this.protocol = t.protocol, this.host = t.host, this.hostname = t.hostname, this.port = t.port, this.pathname = t.pathname, this.search = t.search, this.hash = t.hash, this.origin = [this.protocol, "//", this.hostname].join(""), 0 !== this.port.length && (this.origin += ":" + this.port), this.relative = [this.pathname, this.search, this.hash].join(""), this.absolute = this.href
        }, t
    }(), o = function (t) {
        function e(t) {
            return this.link = t, this.link.constructor === e ? this.link : (this.original = this.link.href, this.originalElement = this.link, this.link = this.link.cloneNode(!1), void e.__super__.constructor.apply(this, arguments))
        }
        return oe(e, t), e.HTML_EXTENSIONS = ["html"], e.allowExtensions = function () {
            var t, i, n, o;
            for (i = 1 <= arguments.length ? re.call(arguments, 0) : [], n = 0, o = i.length; o > n; n++) t = i[n], e.HTML_EXTENSIONS.push(t);
            return e.HTML_EXTENSIONS
        }, e.prototype.shouldIgnore = function () {
            return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target()
        }, e.prototype._anchored = function () {
            return (this.hash.length > 0 || "#" === this.href.charAt(this.href.length - 1)) && this.withoutHash() === (new i).withoutHash()
        }, e.prototype._nonHtml = function () {
            return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + e.HTML_EXTENSIONS.join("|") + ")?$", "g"))
        }, e.prototype._optOut = function () {
            var t, e;
            for (e = this.originalElement; !t && e !== document;) t = null != e.getAttribute("data-no-turbolink"), e = e.parentNode;
            return t
        }, e.prototype._target = function () {
            return 0 !== this.link.target.length
        }, e
    }(i), e = function () {
        function t(t) {
            this.event = t, this.event.defaultPrevented || (this._extractLink(), this._validForTurbolinks() && (A(this.link.absolute) || Z(this.link.href), this.event.preventDefault()))
        }
        return t.installHandlerLast = function (e) {
            return e.defaultPrevented ? void 0 : (document.removeEventListener("click", t.handle, !1), document.addEventListener("click", t.handle, !1))
        }, t.handle = function (e) {
            return new t(e)
        }, t.prototype._extractLink = function () {
            var t;
            for (t = this.event.target; t.parentNode && "A" !== t.nodeName;) t = t.parentNode;
            return "A" === t.nodeName && 0 !== t.href.length ? this.link = new o(t) : void 0
        }, t.prototype._validForTurbolinks = function () {
            return null != this.link && !(this.link.shouldIgnore() || this._nonStandardClick())
        }, t.prototype._nonStandardClick = function () {
            return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey
        }, t
    }(), r = function () {
        function t(t) {
            this.elementSelector = t, this._trickle = se(this._trickle, this), this.value = 0, this.content = "", this.speed = 300, this.opacity = .99, this.install()
        }
        var e;
        return e = "turbolinks-progress-bar", t.prototype.install = function () {
            return this.element = document.querySelector(this.elementSelector), this.element.classList.add(e), this.styleElement = document.createElement("style"), document.head.appendChild(this.styleElement), this._updateStyle()
        }, t.prototype.uninstall = function () {
            return this.element.classList.remove(e), document.head.removeChild(this.styleElement)
        }, t.prototype.start = function () {
            return this.advanceTo(5)
        }, t.prototype.advanceTo = function (t) {
            var e;
            if (t > (e = this.value) && 100 >= e) {
                if (this.value = t, this._updateStyle(), 100 === this.value) return this._stopTrickle();
                if (this.value > 0) return this._startTrickle()
            }
        }, t.prototype.done = function () {
            return this.value > 0 ? (this.advanceTo(100), this._reset()) : void 0
        }, t.prototype._reset = function () {
            var t;
            return t = this.opacity, setTimeout(function (t) {
                return function () {
                    return t.opacity = 0, t._updateStyle()
                }
            }(this), this.speed / 2), setTimeout(function (e) {
                return function () {
                    return e.value = 0, e.opacity = t, e._withSpeed(0, function () {
                        return e._updateStyle(!0)
                    })
                }
            }(this), this.speed)
        }, t.prototype._startTrickle = function () {
            return this.trickling ? void 0 : (this.trickling = !0, setTimeout(this._trickle, this.speed))
        }, t.prototype._stopTrickle = function () {
            return delete this.trickling
        }, t.prototype._trickle = function () {
            return this.trickling ? (this.advanceTo(this.value + Math.random() / 2), setTimeout(this._trickle, this.speed)) : void 0
        }, t.prototype._withSpeed = function (t, e) {
            var i, n;
            return i = this.speed, this.speed = t, n = e(), this.speed = i, n
        }, t.prototype._updateStyle = function (t) {
            return null == t && (t = !1), t && this._changeContentToForceRepaint(), this.styleElement.textContent = this._createCSSRule()
        }, t.prototype._changeContentToForceRepaint = function () {
            return this.content = "" === this.content ? " " : ""
        }, t.prototype._createCSSRule = function () {
            return "" + this.elementSelector + "." + e + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + this.speed / 2 + "ms ease-in;\n  transform: translate3d(0,0,0);\n}"
        }, t
    }(), c = function (t) {
        return setTimeout(t, 500)
    }, E = function () {
        return document.addEventListener("DOMContentLoaded", function () {
            return J(n.CHANGE), J(n.UPDATE)
        }, !0)
    }, O = function () {
        return "undefined" != typeof jQuery ? jQuery(document).on("ajaxSuccess", function (t, e) {
            return jQuery.trim(e.responseText) ? J(n.UPDATE) : void 0
        }) : void 0
    }, M = function (t) {
        var e, n;
        return (null != (n = t.state) ? n.turbolinks : void 0) ? (e = I[new i(t.state.url).absolute]) ? (h(), D(e)) : Z(t.target.location.href) : void 0
    }, S = function () {
        return B(), Y(), document.addEventListener("click", e.installHandlerLast, !0), window.addEventListener("hashchange", function () {
            return B(), Y()
        }, !1), c(function () {
            return window.addEventListener("popstate", M, !1)
        })
    }, T = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/2[6|7]/), l = window.history && window.history.pushState && window.history.replaceState && T, s = !navigator.userAgent.match(/CriOS\//), G = "GET" === (ee = H("request_method")) || "" === ee, u = l && s && G, a = document.addEventListener && document.createEvent, a && (E(), O()), u ? (Z = x, S()) : Z = function (t) {
        return document.location.href = t
    }, this.Turbolinks = {
        visit: Z,
        pagesCached: j,
        enableTransitionCache: _,
        enableProgressBar: b,
        allowLinkExtensions: o.allowExtensions,
        supported: u,
        EVENTS: f(n)
    }
}.call(this), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
"use strict";
var e = t.fn.jquery.split(" ")[0].split(".");
if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function (t) {
"use strict";

function e() {
    var t = document.createElement("bootstrap"),
        e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
    for (var i in e)
        if (void 0 !== t.style[i]) return {
            end: e[i]
        };
    return !1
}
t.fn.emulateTransitionEnd = function (e) {
    var i = !1,
        n = this;
    t(this).one("bsTransitionEnd", function () {
        i = !0
    });
    var o = function () {
        i || t(n).trigger(t.support.transition.end)
    };
    return setTimeout(o, e), this
}, t(function () {
    t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
        bindType: t.support.transition.end,
        delegateType: t.support.transition.end,
        handle: function (e) {
            return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
        }
    })
})
}(jQuery), + function (t) {
"use strict";

function e(e) {
    return this.each(function () {
        var i = t(this),
            o = i.data("bs.alert");
        o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
    })
}
var i = '[data-dismiss="alert"]',
    n = function (e) {
        t(e).on("click", i, this.close)
    };
n.VERSION = "3.3.2", n.TRANSITION_DURATION = 150, n.prototype.close = function (e) {
    function i() {
        s.detach().trigger("closed.bs.alert").remove()
    }
    var o = t(this),
        r = o.attr("data-target");
    r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
    var s = t(r);
    e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
};
var o = t.fn.alert;
t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
    return t.fn.alert = o, this
}, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery), + function (t) {
"use strict";

function e(e) {
    return this.each(function () {
        var n = t(this),
            o = n.data("bs.button"),
            r = "object" == typeof e && e;
        o || n.data("bs.button", o = new i(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
    })
}
var i = function (e, n) {
    this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
};
i.VERSION = "3.3.2", i.DEFAULTS = {
    loadingText: "loading..."
}, i.prototype.setState = function (e) {
    var i = "disabled",
        n = this.$element,
        o = n.is("input") ? "val" : "html",
        r = n.data();
    e += "Text", null == r.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy(function () {
        n[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
    }, this), 0)
}, i.prototype.toggle = function () {
    var t = !0,
        e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
        var i = this.$element.find("input");
        "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
    t && this.$element.toggleClass("active")
};
var n = t.fn.button;
t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
    return t.fn.button = n, this
}, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
    var n = t(i.target);
    n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), i.preventDefault()
}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
})
}(jQuery), + function (t) {
"use strict";

function e(e) {
    return this.each(function () {
        var n = t(this),
            o = n.data("bs.carousel"),
            r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
            s = "string" == typeof e ? e : r.slide;
        o || n.data("bs.carousel", o = new i(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
    })
}
var i = function (e, i) {
    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
};
i.VERSION = "3.3.2", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
}, i.prototype.keydown = function (t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        t.preventDefault()
    }
}, i.prototype.cycle = function (e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
}, i.prototype.getItemIndex = function (t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
}, i.prototype.getItemForDirection = function (t, e) {
    var i = this.getItemIndex(e),
        n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
    if (n && !this.options.wrap) return e;
    var o = "prev" == t ? -1 : 1,
        r = (i + o) % this.$items.length;
    return this.$items.eq(r)
}, i.prototype.to = function (t) {
    var e = this,
        i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
        e.to(t)
    }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
}, i.prototype.pause = function (e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
}, i.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next")
}, i.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev")
}, i.prototype.slide = function (e, n) {
    var o = this.$element.find(".item.active"),
        r = n || this.getItemForDirection(e, o),
        s = this.interval,
        a = "next" == e ? "left" : "right",
        l = this;
    if (r.hasClass("active")) return this.sliding = !1;
    var u = r[0],
        c = t.Event("slide.bs.carousel", {
            relatedTarget: u,
            direction: a
        });
    if (this.$element.trigger(c), !c.isDefaultPrevented()) {
        if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var h = t(this.$indicators.children()[this.getItemIndex(r)]);
            h && h.addClass("active")
        }
        var d = t.Event("slid.bs.carousel", {
            relatedTarget: u,
            direction: a
        });
        return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function () {
            r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                l.$element.trigger(d)
            }, 0)
        }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(d)), s && this.cycle(), this
    }
};
var n = t.fn.carousel;
t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
    return t.fn.carousel = n, this
};
var o = function (i) {
    var n, o = t(this),
        r = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
    if (r.hasClass("carousel")) {
        var s = t.extend({}, r.data(), o.data()),
            a = o.attr("data-slide-to");
        a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), i.preventDefault()
    }
};
t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function () {
    t('[data-ride="carousel"]').each(function () {
        var i = t(this);
        e.call(i, i.data())
    })
})
}(jQuery), + function (t) {
"use strict";

function e(e) {
    var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
    return t(n)
}

function i(e) {
    return this.each(function () {
        var i = t(this),
            o = i.data("bs.collapse"),
            r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
        !o && r.toggle && "show" == e && (r.toggle = !1), o || i.data("bs.collapse", o = new n(this, r)), "string" == typeof e && o[e]()
    })
}
var n = function (e, i) {
    this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t(this.options.trigger).filter('[href="#' + e.id + '"], [data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
};
n.VERSION = "3.3.2", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
    toggle: !0,
    trigger: '[data-toggle="collapse"]'
}, n.prototype.dimension = function () {
    var t = this.$element.hasClass("width");
    return t ? "width" : "height"
}, n.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
        var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
        if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
            var r = t.Event("show.bs.collapse");
            if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                var s = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                var a = function () {
                    this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition) return a.call(this);
                var l = t.camelCase(["scroll", s].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[s](this.$element[0][l])
            }
        }
    }
}, n.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
        var e = t.Event("hide.bs.collapse");
        if (this.$element.trigger(e), !e.isDefaultPrevented()) {
            var i = this.dimension();
            this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
            var o = function () {
                this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
            };
            return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : o.call(this)
        }
    }
}, n.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
}, n.prototype.getParent = function () {
    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, n) {
        var o = t(n);
        this.addAriaAndCollapsedClass(e(o), o)
    }, this)).end()
}, n.prototype.addAriaAndCollapsedClass = function (t, e) {
    var i = t.hasClass("in");
    t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
};
var o = t.fn.collapse;
t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function () {
    return t.fn.collapse = o, this
}, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (n) {
    var o = t(this);
    o.attr("data-target") || n.preventDefault();
    var r = e(o),
        s = r.data("bs.collapse"),
        a = s ? "toggle" : t.extend({}, o.data(), {
            trigger: this
        });
    i.call(r, a)
})
}(jQuery), + function (t) {
"use strict";

function e(e) {
    e && 3 === e.which || (t(o).remove(), t(r).each(function () {
        var n = t(this),
            o = i(n),
            r = {
                relatedTarget: this
            };
        o.hasClass("open") && (o.trigger(e = t.Event("hide.bs.dropdown", r)), e.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", r)))
    }))
}

function i(e) {
    var i = e.attr("data-target");
    i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
    var n = i && t(i);
    return n && n.length ? n : e.parent()
}

function n(e) {
    return this.each(function () {
        var i = t(this),
            n = i.data("bs.dropdown");
        n || i.data("bs.dropdown", n = new s(this)), "string" == typeof e && n[e].call(i)
    })
}
var o = ".dropdown-backdrop",
    r = '[data-toggle="dropdown"]',
    s = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
s.VERSION = "3.3.2", s.prototype.toggle = function (n) {
    var o = t(this);
    if (!o.is(".disabled, :disabled")) {
        var r = i(o),
            s = r.hasClass("open");
        if (e(), !s) {
            "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
            var a = {
                relatedTarget: this
            };
            if (r.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
            o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger("shown.bs.dropdown", a)
        }
        return !1
    }
}, s.prototype.keydown = function (e) {
    if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
        var n = t(this);
        if (e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled")) {
            var o = i(n),
                s = o.hasClass("open");
            if (!s && 27 != e.which || s && 27 == e.which) return 27 == e.which && o.find(r).trigger("focus"), n.trigger("click");
            var a = " li:not(.divider):visible a",
                l = o.find('[role="menu"]' + a + ', [role="listbox"]' + a);
            if (l.length) {
                var u = l.index(e.target);
                38 == e.which && u > 0 && u--, 40 == e.which && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
            }
        }
    }
};
var a = t.fn.dropdown;
t.fn.dropdown = n, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {
    return t.fn.dropdown = a, this
}, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
    t.stopPropagation()
}).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', s.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', s.prototype.keydown)
}(jQuery), + function (t) {
"use strict";

function e(e, n) {
    return this.each(function () {
        var o = t(this),
            r = o.data("bs.modal"),
            s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
        r || o.data("bs.modal", r = new i(this, s)), "string" == typeof e ? r[e](n) : s.show && r.show(n)
    })
}
var i = function (e, i) {
    this.options = i, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
        this.$element.trigger("loaded.bs.modal")
    }, this))
};
i.VERSION = "3.3.2", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
}, i.prototype.toggle = function (t) {
    return this.isShown ? this.hide() : this.show(t)
}, i.prototype.show = function (e) {
    var n = this,
        o = t.Event("show.bs.modal", {
            relatedTarget: e
        });
    this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function () {
        var o = t.support.transition && n.$element.hasClass("fade");
        n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.options.backdrop && n.adjustBackdrop(), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
        var r = t.Event("shown.bs.modal", {
            relatedTarget: e
        });
        o ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
            n.$element.trigger("focus").trigger(r)
        }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(r)
    }))
}, i.prototype.hide = function (e) {
    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
}, i.prototype.enforceFocus = function () {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
        this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
    }, this))
}, i.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
        27 == t.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
}, i.prototype.resize = function () {
    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
}, i.prototype.hideModal = function () {
    var t = this;
    this.$element.hide(), this.backdrop(function () {
        t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
    })
}, i.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
}, i.prototype.backdrop = function (e) {
    var n = this,
        o = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
        var r = t.support.transition && o;
        if (this.$backdrop = t('<div class="modal-backdrop ' + o + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", t.proxy(function (t) {
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
        r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
    } else if (!this.isShown && this.$backdrop) {
        this.$backdrop.removeClass("in");
        var s = function () {
            n.removeBackdrop(), e && e()
        };
        t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : s()
    } else e && e()
}, i.prototype.handleUpdate = function () {
    this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
}, i.prototype.adjustBackdrop = function () {
    this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
}, i.prototype.adjustDialog = function () {
    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
        paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
        paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
    })
}, i.prototype.resetAdjustments = function () {
    this.$element.css({
        paddingLeft: "",
        paddingRight: ""
    })
}, i.prototype.checkScrollbar = function () {
    this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
}, i.prototype.setScrollbar = function () {
    var t = parseInt(this.$body.css("padding-right") || 0, 10);
    this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
}, i.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", "")
}, i.prototype.measureScrollbar = function () {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e
};
var n = t.fn.modal;
t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
    return t.fn.modal = n, this
}, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
    var n = t(this),
        o = n.attr("href"),
        r = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
        s = r.data("bs.modal") ? "toggle" : t.extend({
            remote: !/#/.test(o) && o
        }, r.data(), n.data());
    n.is("a") && i.preventDefault(), r.one("show.bs.modal", function (t) {
        t.isDefaultPrevented() || r.one("hidden.bs.modal", function () {
            n.is(":visible") && n.trigger("focus")
        })
    }), e.call(r, s, this)
})
}(jQuery), + function (t) {
"use strict";

function e(e) {
    return this.each(function () {
        var n = t(this),
            o = n.data("bs.tooltip"),
            r = "object" == typeof e && e;
        (o || "destroy" != e) && (o || n.data("bs.tooltip", o = new i(this, r)), "string" == typeof e && o[e]())
    })
}
var i = function (t, e) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
};
i.VERSION = "3.3.2", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
        selector: "body",
        padding: 0
    }
}, i.prototype.init = function (e, i, n) {
    this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
    for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
        var s = o[r];
        if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
        else if ("manual" != s) {
            var a = "hover" == s ? "mouseenter" : "focusin",
                l = "hover" == s ? "mouseleave" : "focusout";
            this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
        }
    }
    this.options.selector ? this._options = t.extend({}, this.options, {
        trigger: "manual",
        selector: ""
    }) : this.fixTitle()
}, i.prototype.getDefaults = function () {
    return i.DEFAULTS
}, i.prototype.getOptions = function (e) {
    return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
        show: e.delay,
        hide: e.delay
    }), e
}, i.prototype.getDelegateOptions = function () {
    var e = {},
        i = this.getDefaults();
    return this._options && t.each(this._options, function (t, n) {
        i[t] != n && (e[t] = n)
    }), e
}, i.prototype.enter = function (e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return i && i.$tip && i.$tip.is(":visible") ? void(i.hoverState = "in") : (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
        "in" == i.hoverState && i.show()
    }, i.options.delay.show)) : i.show())
}, i.prototype.leave = function (e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
        "out" == i.hoverState && i.hide()
    }, i.options.delay.hide)) : i.hide()
}, i.prototype.show = function () {
    var e = t.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
        this.$element.trigger(e);
        var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
        if (e.isDefaultPrevented() || !n) return;
        var o = this,
            r = this.tip(),
            s = this.getUID(this.type);
        this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
        var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
            l = /\s?auto?\s?/i,
            u = l.test(a);
        u && (a = a.replace(l, "") || "top"), r.detach().css({
            top: 0,
            left: 0,
            display: "block"
        }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
        var c = this.getPosition(),
            h = r[0].offsetWidth,
            d = r[0].offsetHeight;
        if (u) {
            var p = a,
                f = this.options.container ? t(this.options.container) : this.$element.parent(),
                m = this.getPosition(f);
            a = "bottom" == a && c.bottom + d > m.bottom ? "top" : "top" == a && c.top - d < m.top ? "bottom" : "right" == a && c.right + h > m.width ? "left" : "left" == a && c.left - h < m.left ? "right" : a, r.removeClass(p).addClass(a)
        }
        var g = this.getCalculatedOffset(a, c, h, d);
        this.applyPlacement(g, a);
        var v = function () {
            var t = o.hoverState;
            o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
        };
        t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v()
    }
}, i.prototype.applyPlacement = function (e, i) {
    var n = this.tip(),
        o = n[0].offsetWidth,
        r = n[0].offsetHeight,
        s = parseInt(n.css("margin-top"), 10),
        a = parseInt(n.css("margin-left"), 10);
    isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top = e.top + s, e.left = e.left + a, t.offset.setOffset(n[0], t.extend({
        using: function (t) {
            n.css({
                top: Math.round(t.top),
                left: Math.round(t.left)
            })
        }
    }, e), 0), n.addClass("in");
    var l = n[0].offsetWidth,
        u = n[0].offsetHeight;
    "top" == i && u != r && (e.top = e.top + r - u);
    var c = this.getViewportAdjustedDelta(i, e, l, u);
    c.left ? e.left += c.left : e.top += c.top;
    var h = /top|bottom/.test(i),
        d = h ? 2 * c.left - o + l : 2 * c.top - r + u,
        p = h ? "offsetWidth" : "offsetHeight";
    n.offset(e), this.replaceArrow(d, n[0][p], h)
}, i.prototype.replaceArrow = function (t, e, i) {
    this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
}, i.prototype.setContent = function () {
    var t = this.tip(),
        e = this.getTitle();
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
}, i.prototype.hide = function (e) {
    function n() {
        "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
    }
    var o = this,
        r = this.tip(),
        s = t.Event("hide.bs." + this.type);
    return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
}, i.prototype.fixTitle = function () {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
}, i.prototype.hasContent = function () {
    return this.getTitle()
}, i.prototype.getPosition = function (e) {
    e = e || this.$element;
    var i = e[0],
        n = "BODY" == i.tagName,
        o = i.getBoundingClientRect();
    null == o.width && (o = t.extend({}, o, {
        width: o.right - o.left,
        height: o.bottom - o.top
    }));
    var r = n ? {
            top: 0,
            left: 0
        } : e.offset(),
        s = {
            scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        },
        a = n ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
    return t.extend({}, o, s, a, r)
}, i.prototype.getCalculatedOffset = function (t, e, i, n) {
    return "bottom" == t ? {
        top: e.top + e.height,
        left: e.left + e.width / 2 - i / 2
    } : "top" == t ? {
        top: e.top - n,
        left: e.left + e.width / 2 - i / 2
    } : "left" == t ? {
        top: e.top + e.height / 2 - n / 2,
        left: e.left - i
    } : {
        top: e.top + e.height / 2 - n / 2,
        left: e.left + e.width
    }
}, i.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
    var o = {
        top: 0,
        left: 0
    };
    if (!this.$viewport) return o;
    var r = this.options.viewport && this.options.viewport.padding || 0,
        s = this.getPosition(this.$viewport);
    if (/right|left/.test(t)) {
        var a = e.top - r - s.scroll,
            l = e.top + r - s.scroll + n;
        a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
    } else {
        var u = e.left - r,
            c = e.left + r + i;
        u < s.left ? o.left = s.left - u : c > s.width && (o.left = s.left + s.width - c)
    }
    return o
}, i.prototype.getTitle = function () {
    var t, e = this.$element,
        i = this.options;
    return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
}, i.prototype.getUID = function (t) {
    do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
    return t
}, i.prototype.tip = function () {
    return this.$tip = this.$tip || t(this.options.template)
}, i.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
}, i.prototype.enable = function () {
    this.enabled = !0
}, i.prototype.disable = function () {
    this.enabled = !1
}, i.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
}, i.prototype.toggle = function (e) {
    var i = this;
    e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
}, i.prototype.destroy = function () {
    var t = this;
    clearTimeout(this.timeout), this.hide(function () {
        t.$element.off("." + t.type).removeData("bs." + t.type)
    })
};
var n = t.fn.tooltip;
t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
    return t.fn.tooltip = n, this
}
}(jQuery), + function (t) {
"use strict";

function e(e) {
    return this.each(function () {
        var n = t(this),
            o = n.data("bs.popover"),
            r = "object" == typeof e && e;
        (o || "destroy" != e) && (o || n.data("bs.popover", o = new i(this, r)), "string" == typeof e && o[e]())
    })
}
var i = function (t, e) {
    this.init("popover", t, e)
};
if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
i.VERSION = "3.3.2", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
}), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
    return i.DEFAULTS
}, i.prototype.setContent = function () {
    var t = this.tip(),
        e = this.getTitle(),
        i = this.getContent();
    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
}, i.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
}, i.prototype.getContent = function () {
    var t = this.$element,
        e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
}, i.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
}, i.prototype.tip = function () {
    return this.$tip || (this.$tip = t(this.options.template)), this.$tip
};
var n = t.fn.popover;
t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
    return t.fn.popover = n, this
}
}(jQuery), + function (t) {
"use strict";

function e(i, n) {
    var o = t.proxy(this.process, this);
    this.$body = t("body"), this.$scrollElement = t(t(i).is("body") ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", o), this.refresh(), this.process()
}

function i(i) {
    return this.each(function () {
        var n = t(this),
            o = n.data("bs.scrollspy"),
            r = "object" == typeof i && i;
        o || n.data("bs.scrollspy", o = new e(this, r)), "string" == typeof i && o[i]()
    })
}
e.VERSION = "3.3.2", e.DEFAULTS = {
    offset: 10
}, e.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
}, e.prototype.refresh = function () {
    var e = "offset",
        i = 0;
    t.isWindow(this.$scrollElement[0]) || (e = "position", i = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
    var n = this;
    this.$body.find(this.selector).map(function () {
        var n = t(this),
            o = n.data("target") || n.attr("href"),
            r = /^#./.test(o) && t(o);
        return r && r.length && r.is(":visible") && [
            [r[e]().top + i, o]
        ] || null
    }).sort(function (t, e) {
        return t[0] - e[0]
    }).each(function () {
        n.offsets.push(this[0]), n.targets.push(this[1])
    })
}, e.prototype.process = function () {
    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
        i = this.getScrollHeight(),
        n = this.options.offset + i - this.$scrollElement.height(),
        o = this.offsets,
        r = this.targets,
        s = this.activeTarget;
    if (this.scrollHeight != i && this.refresh(), e >= n) return s != (t = r[r.length - 1]) && this.activate(t);
    if (s && e < o[0]) return this.activeTarget = null, this.clear();
    for (t = o.length; t--;) s != r[t] && e >= o[t] && (!o[t + 1] || e <= o[t + 1]) && this.activate(r[t])
}, e.prototype.activate = function (e) {
    this.activeTarget = e, this.clear();
    var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
        n = t(i).parents("li").addClass("active");
    n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
}, e.prototype.clear = function () {
    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
};
var n = t.fn.scrollspy;
t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
    return t.fn.scrollspy = n, this
}, t(window).on("load.bs.scrollspy.data-api", function () {
    t('[data-spy="scroll"]').each(function () {
        var e = t(this);
        i.call(e, e.data())
    })
})
}(jQuery), + function (t) {
"use strict";

function e(e) {
    return this.each(function () {
        var n = t(this),
            o = n.data("bs.tab");
        o || n.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]()
    })
}
var i = function (e) {
    this.element = t(e)
};
i.VERSION = "3.3.2", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
    var e = this.element,
        i = e.closest("ul:not(.dropdown-menu)"),
        n = e.data("target");
    if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
        var o = i.find(".active:last a"),
            r = t.Event("hide.bs.tab", {
                relatedTarget: e[0]
            }),
            s = t.Event("show.bs.tab", {
                relatedTarget: o[0]
            });
        if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
            var a = t(n);
            this.activate(e.closest("li"), i), this.activate(a, a.parent(), function () {
                o.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: e[0]
                }), e.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: o[0]
                })
            })
        }
    }
}, i.prototype.activate = function (e, n, o) {
    function r() {
        s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
    }
    var s = n.find("> .active"),
        a = o && t.support.transition && (s.length && s.hasClass("fade") || !!n.find("> .fade").length);
    s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(i.TRANSITION_DURATION) : r(), s.removeClass("in")
};
var n = t.fn.tab;
t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
    return t.fn.tab = n, this
};
var o = function (i) {
    i.preventDefault(), e.call(t(this), "show")
};
t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), + function (t) {
"use strict";

function e(e) {
    return this.each(function () {
        var n = t(this),
            o = n.data("bs.affix"),
            r = "object" == typeof e && e;
        o || n.data("bs.affix", o = new i(this, r)), "string" == typeof e && o[e]()
    })
}
var i = function (e, n) {
    this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
};
i.VERSION = "3.3.2", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
    offset: 0,
    target: window
}, i.prototype.getState = function (t, e, i, n) {
    var o = this.$target.scrollTop(),
        r = this.$element.offset(),
        s = this.$target.height();
    if (null != i && "top" == this.affixed) return i > o ? "top" : !1;
    if ("bottom" == this.affixed) return null != i ? o + this.unpin <= r.top ? !1 : "bottom" : t - n >= o + s ? !1 : "bottom";
    var a = null == this.affixed,
        l = a ? o : r.top,
        u = a ? s : e;
    return null != i && i >= o ? "top" : null != n && l + u >= t - n ? "bottom" : !1
}, i.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(i.RESET).addClass("affix");
    var t = this.$target.scrollTop(),
        e = this.$element.offset();
    return this.pinnedOffset = e.top - t
}, i.prototype.checkPositionWithEventLoop = function () {
    setTimeout(t.proxy(this.checkPosition, this), 1)
}, i.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
        var e = this.$element.height(),
            n = this.options.offset,
            o = n.top,
            r = n.bottom,
            s = t("body").height();
        "object" != typeof n && (r = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof r && (r = n.bottom(this.$element));
        var a = this.getState(s, e, o, r);
        if (this.affixed != a) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (a ? "-" + a : ""),
                u = t.Event(l + ".bs.affix");
            if (this.$element.trigger(u), u.isDefaultPrevented()) return;
            this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
        }
        "bottom" == a && this.$element.offset({
            top: s - e - r
        })
    }
};
var n = t.fn.affix;
t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
    return t.fn.affix = n, this
}, t(window).on("load", function () {
    t('[data-spy="affix"]').each(function () {
        var i = t(this),
            n = i.data();
        n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
    })
})
}(jQuery),
function () {
this.Gmaps = {
    build: function (t, e) {
        var i;
        return null == e && (e = {}), new(i = _.isFunction(e.handler) ? e.handler : Gmaps.Objects.Handler)(t, e)
    },
    Builders: {},
    Objects: {},
    Google: {
        Objects: {},
        Builders: {}
    }
}
}.call(this),
function () {
    var t, e = [].indexOf || function (t) {
        for (var e = 0, i = this.length; i > e; e++)
            if (e in this && this[e] === t) return e;
        return -1
    };
    t = ["extended", "included"], this.Gmaps.Base = function () {
        function i() {}
        return i.extend = function (i) {
            var n, o, r;
            for (n in i) o = i[n], e.call(t, n) < 0 && (this[n] = o);
            return null != (r = i.extended) && r.apply(this), this
        }, i.include = function (i) {
            var n, o, r;
            for (n in i) o = i[n], e.call(t, n) < 0 && (this.prototype[n] = o);
            return null != (r = i.included) && r.apply(this), this
        }, i
    }()
}.call(this),
function () {
    this.Gmaps.Objects.BaseBuilder = function () {
        function t() {}
        return t.prototype.build = function () {
            return new(this.model_class())(this.serviceObject)
        }, t.prototype.before_init = function () {}, t.prototype.after_init = function () {}, t.prototype.addListener = function (t, e) {
            return this.primitives().addListener(this.getServiceObject(), t, e)
        }, t.prototype.getServiceObject = function () {
            return this.serviceObject
        }, t.prototype.primitives = function () {
            return this.constructor.PRIMITIVES
        }, t.prototype.model_class = function () {
            return this.constructor.OBJECT
        }, t
    }()
}.call(this),
function () {
    this.Gmaps.Objects.Builders = function (t, e, i) {
        return {
            build: function (n, o, r) {
                var s;
                return e.PRIMITIVES = i, t.OBJECT = e, t.PRIMITIVES = i, s = new t(n, o, r), s.build()
            }
        }
    }
}.call(this),
function () {
    this.Gmaps.Objects.Handler = function () {
        function t(t, e) {
            this.type = t, null == e && (e = {}), this.setPrimitives(e), this.setOptions(e), this._cacheAllBuilders(), this.resetBounds()
        }
        return t.prototype.buildMap = function (t, e) {
            return null == e && (e = function () {}), this.map = this._builder("Map").build(t, function (t) {
                return function () {
                    return t._createClusterer(), e()
                }
            }(this))
        }, t.prototype.addMarkers = function (t, e) {
            return _.map(t, function (t) {
                return function (i) {
                    return t.addMarker(i, e)
                }
            }(this))
        }, t.prototype.addMarker = function (t, e) {
            var i;
            return i = this._builder("Marker").build(t, e, this.marker_options), i.setMap(this.getMap()), this.clusterer.addMarker(i), i
        }, t.prototype.addCircles = function (t, e) {
            return _.map(t, function (t) {
                return function (i) {
                    return t.addCircle(i, e)
                }
            }(this))
        }, t.prototype.addCircle = function (t, e) {
            return this._addResource("circle", t, e)
        }, t.prototype.addPolylines = function (t, e) {
            return _.map(t, function (t) {
                return function (i) {
                    return t.addPolyline(i, e)
                }
            }(this))
        }, t.prototype.addPolyline = function (t, e) {
            return this._addResource("polyline", t, e)
        }, t.prototype.addPolygons = function (t, e) {
            return _.map(t, function (t) {
                return function (i) {
                    return t.addPolygon(i, e)
                }
            }(this))
        }, t.prototype.addPolygon = function (t, e) {
            return this._addResource("polygon", t, e)
        }, t.prototype.addKmls = function (t, e) {
            return _.map(t, function (t) {
                return function (i) {
                    return t.addKml(i, e)
                }
            }(this))
        }, t.prototype.addKml = function (t, e) {
            return this._addResource("kml", t, e)
        }, t.prototype.removeMarkers = function (t) {
            return _.map(t, function (t) {
                return function (e) {
                    return t.removeMarker(e)
                }
            }(this))
        }, t.prototype.removeMarker = function (t) {
            return t.clear(), this.clusterer.removeMarker(t)
        }, t.prototype.fitMapToBounds = function () {
            return this.map.fitToBounds(this.bounds.getServiceObject())
        }, t.prototype.getMap = function () {
            return this.map.getServiceObject()
        }, t.prototype.setOptions = function (t) {
            return this.marker_options = _.extend(this._default_marker_options(), t.markers), this.builders = _.extend(this._default_builders(), t.builders), this.models = _.extend(this._default_models(), t.models)
        }, t.prototype.resetBounds = function () {
            return this.bounds = this._builder("Bound").build()
        }, t.prototype.setPrimitives = function (t) {
            return this.primitives = void 0 === t.primitives ? this._rootModule().Primitives() : _.isFunction(t.primitives) ? t.primitives() : t.primitives
        }, t.prototype.currentInfowindow = function () {
            return this.builders.Marker.CURRENT_INFOWINDOW
        }, t.prototype._addResource = function (t, e, i) {
            var n;
            return n = this._builder(t).build(e, i), n.setMap(this.getMap()), n
        }, t.prototype._cacheAllBuilders = function () {
            var t;
            return t = this, _.each(["Bound", "Circle", "Clusterer", "Kml", "Map", "Marker", "Polygon", "Polyline"], function (e) {
                return t._builder(e)
            })
        }, t.prototype._clusterize = function () {
            return _.isObject(this.marker_options.clusterer)
        }, t.prototype._createClusterer = function () {
            return this.clusterer = this._builder("Clusterer").build({
                map: this.getMap()
            }, this.marker_options.clusterer)
        }, t.prototype._default_marker_options = function () {
            return _.clone({
                singleInfowindow: !0,
                maxRandomDistance: 0,
                clusterer: {
                    maxZoom: 5,
                    gridSize: 50
                }
            })
        }, t.prototype._builder = function (t) {
            var e;
            return t = this._capitalize(t), null == this[e = "__builder" + t] && (this[e] = Gmaps.Objects.Builders(this.builders[t], this.models[t], this.primitives)), this["__builder" + t]
        }, t.prototype._default_models = function () {
            var t;
            return t = _.clone(this._rootModule().Objects), this._clusterize() ? t : (t.Clusterer = Gmaps.Objects.NullClusterer, t)
        }, t.prototype._capitalize = function (t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }, t.prototype._default_builders = function () {
            return _.clone(this._rootModule().Builders)
        }, t.prototype._rootModule = function () {
            return null == this.__rootModule && (this.__rootModule = Gmaps[this.type]), this.__rootModule
        }, t
    }()
}.call(this),
function () {
    this.Gmaps.Objects.NullClusterer = function () {
        function t() {}
        return t.prototype.addMarkers = function () {}, t.prototype.addMarker = function () {}, t.prototype.clear = function () {}, t.prototype.removeMarker = function () {}, t
    }()
}.call(this),
function () {
    this.Gmaps.Google.Objects.Common = {
        getServiceObject: function () {
            return this.serviceObject
        },
        setMap: function (t) {
            return this.getServiceObject().setMap(t)
        },
        clear: function () {
            return this.getServiceObject().setMap(null)
        },
        show: function () {
            return this.getServiceObject().setVisible(!0)
        },
        hide: function () {
            return this.getServiceObject().setVisible(!1)
        },
        isVisible: function () {
            return this.getServiceObject().getVisible()
        },
        primitives: function () {
            return this.constructor.PRIMITIVES
        }
    }
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, i) {
            function n() {
                this.constructor = e
            }
            for (var o in i) t.call(i, o) && (e[o] = i[o]);
            return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
        };
    this.Gmaps.Google.Builders.Bound = function (t) {
        function i() {
            this.before_init(), this.serviceObject = new(this.primitives().latLngBounds), this.after_init()
        }
        return e(i, t), i
    }(Gmaps.Objects.BaseBuilder)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, i) {
            function n() {
                this.constructor = e
            }
            for (var o in i) t.call(i, o) && (e[o] = i[o]);
            return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
        };
    this.Gmaps.Google.Builders.Circle = function (t) {
        function i(t, e) {
            this.args = t, this.provider_options = null != e ? e : {}, this.before_init(), this.serviceObject = this.create_circle(), this.after_init()
        }
        return e(i, t), i.prototype.create_circle = function () {
            return new(this.primitives().circle)(this.circle_options())
        }, i.prototype.circle_options = function () {
            var t;
            return t = {
                center: new(this.primitives().latLng)(this.args.lat, this.args.lng),
                radius: this.args.radius
            }, _.defaults(t, this.provider_options)
        }, i
    }(Gmaps.Objects.BaseBuilder)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, i) {
            function n() {
                this.constructor = e
            }
            for (var o in i) t.call(i, o) && (e[o] = i[o]);
            return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
        };
    this.Gmaps.Google.Builders.Clusterer = function (t) {
        function i(t, e) {
            this.args = t, this.options = e, this.before_init(), this.serviceObject = new(this.primitives().clusterer)(this.args.map, [], this.options), this.after_init()
        }
        return e(i, t), i
    }(Gmaps.Objects.BaseBuilder)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, i) {
            function n() {
                this.constructor = e
            }
            for (var o in i) t.call(i, o) && (e[o] = i[o]);
            return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
        };
    this.Gmaps.Google.Builders.Kml = function (t) {
        function i(t, e) {
            this.args = t, this.provider_options = null != e ? e : {}, this.before_init(), this.serviceObject = this.create_kml(), this.after_init()
        }
        return e(i, t), i.prototype.create_kml = function () {
            return new(this.primitives().kml)(this.args.url, this.kml_options())
        }, i.prototype.kml_options = function () {
            var t;
            return t = {}, _.defaults(t, this.provider_options)
        }, i
    }(Gmaps.Objects.BaseBuilder)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, i) {
            function n() {
                this.constructor = e
            }
            for (var o in i) t.call(i, o) && (e[o] = i[o]);
            return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
        };
    this.Gmaps.Google.Builders.Map = function (t) {
        function i(t, e) {
            var i;
            this.before_init(), i = _.extend(this.default_options(), t.provider), this.internal_options = t.internal, this.serviceObject = new(this.primitives().map)(document.getElementById(this.internal_options.id), i), this.on_map_load(e), this.after_init()
        }
        return e(i, t), i.prototype.build = function () {
            return new(this.model_class())(this.serviceObject, this.primitives())
        }, i.prototype.on_map_load = function (t) {
            return this.primitives().addListenerOnce(this.serviceObject, "idle", t)
        }, i.prototype.default_options = function () {
            return {
                mapTypeId: this.primitives().mapTypes("ROADMAP"),
                center: new(this.primitives().latLng)(0, 0),
                zoom: 8
            }
        }, i
    }(Gmaps.Objects.BaseBuilder)
}.call(this),
function () {
    var t = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        },
        e = {}.hasOwnProperty,
        i = function (t, i) {
            function n() {
                this.constructor = t
            }
            for (var o in i) e.call(i, o) && (t[o] = i[o]);
            return n.prototype = i.prototype, t.prototype = new n, t.__super__ = i.prototype, t
        };
    this.Gmaps.Google.Builders.Marker = function (e) {
        function n(e, i, n) {
            this.args = e, this.provider_options = null != i ? i : {}, this.internal_options = null != n ? n : {}, this.infowindow_binding = t(this.infowindow_binding, this), this.before_init(), this.create_marker(), this.create_infowindow_on_click(), this.after_init()
        }
        return i(n, e), n.CURRENT_INFOWINDOW = void 0, n.CACHE_STORE = {}, n.prototype.build = function () {
            return this.marker = new(this.model_class())(this.serviceObject)
        }, n.prototype.create_marker = function () {
            return this.serviceObject = new(this.primitives().marker)(this.marker_options())
        }, n.prototype.create_infowindow = function () {
            return _.isString(this.args.infowindow) ? new(this.primitives().infowindow)({
                content: this.args.infowindow
            }) : null
        }, n.prototype.marker_options = function () {
            var t, e;
            return e = this._randomized_coordinates(), t = {
                title: this.args.marker_title,
                position: new(this.primitives().latLng)(e[0], e[1]),
                icon: this._get_picture("picture"),
                shadow: this._get_picture("shadow")
            }, _.extend(this.provider_options, t)
        }, n.prototype.create_infowindow_on_click = function () {
            return this.addListener("click", this.infowindow_binding)
        }, n.prototype.infowindow_binding = function () {
            var t;
            return this._should_close_infowindow() && this.constructor.CURRENT_INFOWINDOW.close(), this.marker.panTo(), null == this.infowindow && (this.infowindow = this.create_infowindow()), null != this.infowindow ? (this.infowindow.open(this.getServiceObject().getMap(), this.getServiceObject()), null == (t = this.marker).infowindow && (t.infowindow = this.infowindow), this.constructor.CURRENT_INFOWINDOW = this.infowindow) : void 0
        }, n.prototype._get_picture = function (t) {
            return _.isObject(this.args[t]) && _.isString(this.args[t].url) ? this._create_or_retrieve_image(this._picture_args(t)) : null
        }, n.prototype._create_or_retrieve_image = function (t) {
            return void 0 === this.constructor.CACHE_STORE[t.url] && (this.constructor.CACHE_STORE[t.url] = new(this.primitives().markerImage)(t.url, t.size, t.origin, t.anchor, t.scaledSize)), this.constructor.CACHE_STORE[t.url]
        }, n.prototype._picture_args = function (t) {
            return {
                url: this.args[t].url,
                anchor: this._createImageAnchorPosition(this.args[t].anchor),
                size: new(this.primitives().size)(this.args[t].width, this.args[t].height),
                scaledSize: null,
                origin: null
            }
        }, n.prototype._createImageAnchorPosition = function (t) {
            return _.isArray(t) ? new(this.primitives().point)(t[0], t[1]) : null
        }, n.prototype._should_close_infowindow = function () {
            return this.internal_options.singleInfowindow && null != this.constructor.CURRENT_INFOWINDOW
        }, n.prototype._randomized_coordinates = function () {
            var t, e, i, n, o;
            return _.isNumber(this.internal_options.maxRandomDistance) ? (o = function () {
                return 2 * Math.random() - 1
            }, i = this.internal_options.maxRandomDistance * o(), n = this.internal_options.maxRandomDistance * o(), t = parseFloat(this.args.lat) + 180 / Math.PI * (n / 6378137), e = parseFloat(this.args.lng) + 90 / Math.PI * (i / 6378137) / Math.cos(this.args.lat), [t, e]) : [this.args.lat, this.args.lng]
        }, n
    }(Gmaps.Objects.BaseBuilder)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, i) {
            function n() {
                this.constructor = e
            }
            for (var o in i) t.call(i, o) && (e[o] = i[o]);
            return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
        };
    this.Gmaps.Google.Builders.Polygon = function (t) {
        function i(t, e) {
            this.args = t, this.provider_options = null != e ? e : {}, this.before_init(), this.serviceObject = this.create_polygon(), this.after_init()
        }
        return e(i, t), i.prototype.create_polygon = function () {
            return new(this.primitives().polygon)(this.polygon_options())
        }, i.prototype.polygon_options = function () {
            var t;
            return t = {
                path: this._build_path()
            }, _.defaults(t, this.provider_options)
        }, i.prototype._build_path = function () {
            return _.map(this.args, function (t) {
                return function (e) {
                    return new(t.primitives().latLng)(e.lat, e.lng)
                }
            }(this))
        }, i
    }(Gmaps.Objects.BaseBuilder)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, i) {
            function n() {
                this.constructor = e
            }
            for (var o in i) t.call(i, o) && (e[o] = i[o]);
            return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
        };
    this.Gmaps.Google.Builders.Polyline = function (t) {
        function i(t, e) {
            this.args = t, this.provider_options = null != e ? e : {}, this.before_init(), this.serviceObject = this.create_polyline(), this.after_init()
        }
        return e(i, t), i.prototype.create_polyline = function () {
            return new(this.primitives().polyline)(this.polyline_options())
        }, i.prototype.polyline_options = function () {
            var t;
            return t = {
                path: this._build_path()
            }, _.defaults(t, this.provider_options)
        }, i.prototype._build_path = function () {
            return _.map(this.args, function (t) {
                return function (e) {
                    return new(t.primitives().latLng)(e.lat, e.lng)
                }
            }(this))
        }, i
    }(Gmaps.Objects.BaseBuilder)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, i) {
            function n() {
                this.constructor = e
            }
            for (var o in i) t.call(i, o) && (e[o] = i[o]);
            return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
        };
    this.Gmaps.Google.Objects.Bound = function (t) {
        function i(t) {
            this.serviceObject = t
        }
        return e(i, t), i.include(Gmaps.Google.Objects.Common), i.prototype.extendWith = function (t) {
            var e;
            return e = _.isArray(t) ? t : [t], _.each(e, function (t) {
                return function (e) {
                    return e.updateBounds(t)
                }
            }(this))
        }, i.prototype.extend = function (t) {
            return this.getServiceObject().extend(this.primitives().latLngFromPosition(t))
        }, i
    }(Gmaps.Base)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, i) {
            function n() {
                this.constructor = e
            }
            for (var o in i) t.call(i, o) && (e[o] = i[o]);
            return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
        };
    this.Gmaps.Google.Objects.Circle = function (t) {
        function i(t) {
            this.serviceObject = t
        }
        return e(i, t), i.include(Gmaps.Google.Objects.Common), i.prototype.updateBounds = function (t) {
            return t.extend(this.getServiceObject().getBounds().getNorthEast()), t.extend(this.getServiceObject().getBounds().getSouthWest())
        }, i
    }(Gmaps.Base)
}.call(this),
function () {
    this.Gmaps.Google.Objects.Clusterer = function () {
        function t(t) {
            this.serviceObject = t
        }
        return t.prototype.addMarkers = function (t) {
            return _.each(t, function (t) {
                return function (e) {
                    return t.addMarker(e)
                }
            }(this))
        }, t.prototype.addMarker = function (t) {
            return this.getServiceObject().addMarker(t.getServiceObject())
        }, t.prototype.clear = function () {
            return this.getServiceObject().clearMarkers()
        }, t.prototype.removeMarker = function (t) {
            return this.getServiceObject().removeMarker(t.getServiceObject())
        }, t.prototype.getServiceObject = function () {
            return this.serviceObject
        }, t
    }()
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, i) {
            function n() {
                this.constructor = e
            }
            for (var o in i) t.call(i, o) && (e[o] = i[o]);
            return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
        };
    this.Gmaps.Google.Objects.Kml = function (t) {
        function i(t) {
            this.serviceObject = t
        }
        return e(i, t), i.prototype.updateBounds = function () {}, i.prototype.setMap = function (t) {
            return this.getServiceObject().setMap(t)
        }, i.prototype.getServiceObject = function () {
            return this.serviceObject
        }, i.prototype.primitives = function () {
            return this.constructor.PRIMITIVES
        }, i
    }(Gmaps.Base)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, i) {
            function n() {
                this.constructor = e
            }
            for (var o in i) t.call(i, o) && (e[o] = i[o]);
            return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
        };
    this.Gmaps.Google.Objects.Map = function (t) {
        function i(t) {
            this.serviceObject = t
        }
        return e(i, t), i.prototype.getServiceObject = function () {
            return this.serviceObject
        }, i.prototype.centerOn = function (t) {
            return this.getServiceObject().setCenter(this.primitives().latLngFromPosition(t))
        }, i.prototype.fitToBounds = function (t) {
            return t.isEmpty() ? void 0 : this.getServiceObject().fitBounds(t)
        }, i.prototype.primitives = function () {
            return this.constructor.PRIMITIVES
        }, i
    }(Gmaps.Base)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, i) {
            function n() {
                this.constructor = e
            }
            for (var o in i) t.call(i, o) && (e[o] = i[o]);
            return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
        };
    this.Gmaps.Google.Objects.Marker = function (t) {
        function i(t) {
            this.serviceObject = t
        }
        return e(i, t), i.include(Gmaps.Google.Objects.Common), i.prototype.updateBounds = function (t) {
            return t.extend(this.getServiceObject().position)
        }, i.prototype.panTo = function () {
            return this.getServiceObject().getMap().panTo(this.getServiceObject().getPosition())
        }, i
    }(Gmaps.Base)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, i) {
            function n() {
                this.constructor = e
            }
            for (var o in i) t.call(i, o) && (e[o] = i[o]);
            return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
        };
    this.Gmaps.Google.Objects.Polygon = function (t) {
        function i(t) {
            this.serviceObject = t
        }
        return e(i, t), i.include(Gmaps.Google.Objects.Common), i.prototype.updateBounds = function (t) {
            var e, i, n, o, r;
            for (o = this.serviceObject.getPath().getArray(), r = [], i = 0, n = o.length; n > i; i++) e = o[i], r.push(t.extend(e));
            return r
        }, i
    }(Gmaps.Base)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, i) {
            function n() {
                this.constructor = e
            }
            for (var o in i) t.call(i, o) && (e[o] = i[o]);
            return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
        };
    this.Gmaps.Google.Objects.Polyline = function (t) {
        function i(t) {
            this.serviceObject = t
        }
        return e(i, t), i.include(Gmaps.Google.Objects.Common), i.prototype.updateBounds = function (t) {
            var e, i, n, o, r;
            for (o = this.serviceObject.getPath().getArray(), r = [], i = 0, n = o.length; n > i; i++) e = o[i], r.push(t.extend(e));
            return r
        }, i
    }(Gmaps.Base)
}.call(this),
function () {
    this.Gmaps.Google.Primitives = function () {
        var t;
        return t = {
            point: google.maps.Point,
            size: google.maps.Size,
            circle: google.maps.Circle,
            latLng: google.maps.LatLng,
            latLngBounds: google.maps.LatLngBounds,
            map: google.maps.Map,
            mapTypez: google.maps.MapTypeId,
            markerImage: google.maps.MarkerImage,
            marker: google.maps.Marker,
            infowindow: google.maps.InfoWindow,
            listener: google.maps.event.addListener,
            clusterer: MarkerClusterer,
            listenerOnce: google.maps.event.addListenerOnce,
            polyline: google.maps.Polyline,
            polygon: google.maps.Polygon,
            kml: google.maps.KmlLayer,
            addListener: function (e, i, n) {
                return t.listener(e, i, n)
            },
            addListenerOnce: function (e, i, n) {
                return t.listenerOnce(e, i, n)
            },
            mapTypes: function (e) {
                return t.mapTypez[e]
            },
            latLngFromPosition: function (e) {
                return _.isArray(e) ? new t.latLng(e[0], e[1]) : _.isNumber(e.lat) && _.isNumber(e.lng) ? new t.latLng(e.lat, e.lng) : _.isFunction(e.getServiceObject) ? e.getServiceObject().getPosition() : e
            }
        }
    }
}.call(this),
function () {}.call(this),
function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}(this, function () {
    "use strict";

    function t() {
        return Sn.apply(null, arguments)
    }

    function e(t) {
        Sn = t
    }

    function i() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function n(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }

    function o(t) {
        return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
    }

    function r(t, e) {
        var i, n = [];
        for (i = 0; i < t.length; ++i) n.push(e(t[i], i));
        return n
    }

    function s(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function a(t, e) {
        for (var i in e) s(e, i) && (t[i] = e[i]);
        return s(e, "toString") && (t.toString = e.toString), s(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function l(t, e, i, n) {
        return De(t, e, i, n, !0).utc()
    }

    function u(t) {
        return null == t._isValid && (t._isValid = !isNaN(t._d.getTime()) && t._pf.overflow < 0 && !t._pf.empty && !t._pf.invalidMonth && !t._pf.nullInput && !t._pf.invalidFormat && !t._pf.userInvalidated, t._strict && (t._isValid = t._isValid && 0 === t._pf.charsLeftOver && 0 === t._pf.unusedTokens.length && void 0 === t._pf.bigHour)), t._isValid
    }

    function c(t) {
        var e = l(0 / 0);
        return null != t ? a(e._pf, t) : e._pf.userInvalidated = !0, e
    }

    function h(t, e) {
        var i, n, o;
        if ("undefined" != typeof e._isAMomentObject && (t._isAMomentObject = e._isAMomentObject), "undefined" != typeof e._i && (t._i = e._i), "undefined" != typeof e._f && (t._f = e._f), "undefined" != typeof e._l && (t._l = e._l), "undefined" != typeof e._strict && (t._strict = e._strict), "undefined" != typeof e._tzm && (t._tzm = e._tzm), "undefined" != typeof e._isUTC && (t._isUTC = e._isUTC), "undefined" != typeof e._offset && (t._offset = e._offset), "undefined" != typeof e._pf && (t._pf = e._pf), "undefined" != typeof e._locale && (t._locale = e._locale), Mn.length > 0)
            for (i in Mn) n = Mn[i], o = e[n], "undefined" != typeof o && (t[n] = o);
        return t
    }

    function d(e) {
        h(this, e), this._d = new Date(+e._d), On === !1 && (On = !0, t.updateOffset(this), On = !1)
    }

    function p(t) {
        return t instanceof d || null != t && s(t, "_isAMomentObject")
    }

    function f(t) {
        var e = +t,
            i = 0;
        return 0 !== e && isFinite(e) && (i = e >= 0 ? Math.floor(e) : Math.ceil(e)), i
    }

    function m(t, e, i) {
        var n, o = Math.min(t.length, e.length),
            r = Math.abs(t.length - e.length),
            s = 0;
        for (n = 0; o > n; n++)(i && t[n] !== e[n] || !i && f(t[n]) !== f(e[n])) && s++;
        return s + r
    }

    function g() {}

    function v(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }

    function y(t) {
        for (var e, i, n, o, r = 0; r < t.length;) {
            for (o = v(t[r]).split("-"), e = o.length, i = v(t[r + 1]), i = i ? i.split("-") : null; e > 0;) {
                if (n = b(o.slice(0, e).join("-"))) return n;
                if (i && i.length >= e && m(o, i, !0) >= e - 1) break;
                e--
            }
            r++
        }
        return null
    }

    function b(t) {
        var e = null;
        if (!Pn[t] && "undefined" != typeof module && module && module.exports) try {
            e = En._abbr, require("./locale/" + t), _(e)
        } catch (i) {}
        return Pn[t]
    }

    function _(t, e) {
        var i;
        return t && (i = "undefined" == typeof e ? k(t) : w(t, e), i && (En = i)), En._abbr
    }

    function w(t, e) {
        return null !== e ? (e.abbr = t, Pn[t] || (Pn[t] = new g), Pn[t].set(e), _(t), Pn[t]) : (delete Pn[t], null)
    }

    function k(t) {
        var e;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return En;
        if (!n(t)) {
            if (e = b(t)) return e;
            t = [t]
        }
        return y(t)
    }

    function x(t, e) {
        var i = t.toLowerCase();
        Nn[i] = Nn[i + "s"] = Nn[e] = t
    }

    function D(t) {
        return "string" == typeof t ? Nn[t] || Nn[t.toLowerCase()] : void 0
    }

    function C(t) {
        var e, i, n = {};
        for (i in t) s(t, i) && (e = D(i), e && (n[e] = t[i]));
        return n
    }

    function T(e, i) {
        return function (n) {
            return null != n ? (E(this, e, n), t.updateOffset(this, i), this) : S(this, e)
        }
    }

    function S(t, e) {
        return t._d["get" + (t._isUTC ? "UTC" : "") + e]()
    }

    function E(t, e, i) {
        return t._d["set" + (t._isUTC ? "UTC" : "") + e](i)
    }

    function M(t, e) {
        var i;
        if ("object" == typeof t)
            for (i in t) this.set(i, t[i]);
        else if (t = D(t), "function" == typeof this[t]) return this[t](e);
        return this
    }

    function O(t, e, i) {
        for (var n = "" + Math.abs(t), o = t >= 0; n.length < e;) n = "0" + n;
        return (o ? i ? "+" : "" : "-") + n
    }

    function P(t, e, i, n) {
        var o = n;
        "string" == typeof n && (o = function () {
            return this[n]()
        }), t && (Hn[t] = o), e && (Hn[e[0]] = function () {
            return O(o.apply(this, arguments), e[1], e[2])
        }), i && (Hn[i] = function () {
            return this.localeData().ordinal(o.apply(this, arguments), t)
        })
    }

    function N(t) {
        return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }

    function I(t) {
        var e, i, n = t.match(In);
        for (e = 0, i = n.length; i > e; e++) n[e] = Hn[n[e]] ? Hn[n[e]] : N(n[e]);
        return function (o) {
            var r = "";
            for (e = 0; i > e; e++) r += n[e] instanceof Function ? n[e].call(o, t) : n[e];
            return r
        }
    }

    function A(t, e) {
        return t.isValid() ? (e = j(e, t.localeData()), jn[e] || (jn[e] = I(e)), jn[e](t)) : t.localeData().invalidDate()
    }

    function j(t, e) {
        function i(t) {
            return e.longDateFormat(t) || t
        }
        var n = 5;
        for (An.lastIndex = 0; n >= 0 && An.test(t);) t = t.replace(An, i), An.lastIndex = 0, n -= 1;
        return t
    }

    function H(t, e, i) {
        Qn[t] = "function" == typeof e ? e : function (t) {
            return t && i ? i : e
        }
    }

    function $(t, e) {
        return s(Qn, t) ? Qn[t](e._strict, e._locale) : new RegExp(L(t))
    }

    function L(t) {
        return t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, i, n, o) {
            return e || i || n || o
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function z(t, e) {
        var i, n = e;
        for ("string" == typeof t && (t = [t]), "number" == typeof e && (n = function (t, i) {
                i[e] = f(t)
            }), i = 0; i < t.length; i++) Jn[t[i]] = n
    }

    function F(t, e) {
        z(t, function (t, i, n, o) {
            n._w = n._w || {}, e(t, n._w, n, o)
        })
    }

    function W(t, e, i) {
        null != e && s(Jn, t) && Jn[t](e, i._a, i, t)
    }

    function R(t, e) {
        return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
    }

    function Y(t) {
        return this._months[t.month()]
    }

    function B(t) {
        return this._monthsShort[t.month()]
    }

    function q(t, e, i) {
        var n, o, r;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; 12 > n; n++) {
            if (o = l([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(o, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (r = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n;
            if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;
            if (!i && this._monthsParse[n].test(t)) return n
        }
    }

    function U(t, e) {
        var i;
        return "string" == typeof e && (e = t.localeData().monthsParse(e), "number" != typeof e) ? t : (i = Math.min(t.date(), R(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t)
    }

    function G(e) {
        return null != e ? (U(this, e), t.updateOffset(this, !0), this) : S(this, "Month")
    }

    function X() {
        return R(this.year(), this.month())
    }

    function K(t) {
        var e, i = t._a;
        return i && -2 === t._pf.overflow && (e = i[to] < 0 || i[to] > 11 ? to : i[eo] < 1 || i[eo] > R(i[Zn], i[to]) ? eo : i[io] < 0 || i[io] > 24 || 24 === i[io] && (0 !== i[no] || 0 !== i[oo] || 0 !== i[ro]) ? io : i[no] < 0 || i[no] > 59 ? no : i[oo] < 0 || i[oo] > 59 ? oo : i[ro] < 0 || i[ro] > 999 ? ro : -1, t._pf._overflowDayOfYear && (Zn > e || e > eo) && (e = eo), t._pf.overflow = e), t
    }

    function V(e) {
        t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function Q(t, e) {
        var i = !0;
        return a(function () {
            return i && (V(t), i = !1), e.apply(this, arguments)
        }, e)
    }

    function J(t, e) {
        lo[t] || (V(e), lo[t] = !0)
    }

    function Z(t) {
        var e, i, n = t._i,
            o = uo.exec(n);
        if (o) {
            for (t._pf.iso = !0, e = 0, i = co.length; i > e; e++)
                if (co[e][1].exec(n)) {
                    t._f = co[e][0] + (o[6] || " ");
                    break
                }
            for (e = 0, i = ho.length; i > e; e++)
                if (ho[e][1].exec(n)) {
                    t._f += ho[e][0];
                    break
                }
            n.match(Xn) && (t._f += "Z"), ye(t)
        } else t._isValid = !1
    }

    function te(e) {
        var i = po.exec(e._i);
        return null !== i ? void(e._d = new Date(+i[1])) : (Z(e), void(e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e))))
    }

    function ee(t, e, i, n, o, r, s) {
        var a = new Date(t, e, i, n, o, r, s);
        return 1970 > t && a.setFullYear(t), a
    }

    function ie(t) {
        var e = new Date(Date.UTC.apply(null, arguments));
        return 1970 > t && e.setUTCFullYear(t), e
    }

    function ne(t) {
        return oe(t) ? 366 : 365
    }

    function oe(t) {
        return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
    }

    function re() {
        return oe(this.year())
    }

    function se(t, e, i) {
        var n, o = i - e,
            r = i - t.day();
        return r > o && (r -= 7), o - 7 > r && (r += 7), n = Ce(t).add(r, "d"), {
            week: Math.ceil(n.dayOfYear() / 7),
            year: n.year()
        }
    }

    function ae(t) {
        return se(t, this._week.dow, this._week.doy).week
    }

    function le() {
        return this._week.dow
    }

    function ue() {
        return this._week.doy
    }

    function ce(t) {
        var e = this.localeData().week(this);
        return null == t ? e : this.add(7 * (t - e), "d")
    }

    function he(t) {
        var e = se(this, 1, 4).week;
        return null == t ? e : this.add(7 * (t - e), "d")
    }

    function de(t, e, i, n, o) {
        var r, s, a = ie(t, 0, 1).getUTCDay();
        return a = 0 === a ? 7 : a, i = null != i ? i : o, r = o - a + (a > n ? 7 : 0) - (o > a ? 7 : 0), s = 7 * (e - 1) + (i - o) + r + 1, {
            year: s > 0 ? t : t - 1,
            dayOfYear: s > 0 ? s : ne(t - 1) + s
        }
    }

    function pe(t) {
        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == t ? e : this.add(t - e, "d")
    }

    function fe(t, e, i) {
        return null != t ? t : null != e ? e : i
    }

    function me(t) {
        var e = new Date;
        return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
    }

    function ge(t) {
        var e, i, n, o, r = [];
        if (!t._d) {
            for (n = me(t), t._w && null == t._a[eo] && null == t._a[to] && ve(t), t._dayOfYear && (o = fe(t._a[Zn], n[Zn]), t._dayOfYear > ne(o) && (t._pf._overflowDayOfYear = !0), i = ie(o, 0, t._dayOfYear), t._a[to] = i.getUTCMonth(), t._a[eo] = i.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e) t._a[e] = r[e] = n[e];
            for (; 7 > e; e++) t._a[e] = r[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            24 === t._a[io] && 0 === t._a[no] && 0 === t._a[oo] && 0 === t._a[ro] && (t._nextDay = !0, t._a[io] = 0), t._d = (t._useUTC ? ie : ee).apply(null, r), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[io] = 24)
        }
    }

    function ve(t) {
        var e, i, n, o, r, s, a;
        e = t._w, null != e.GG || null != e.W || null != e.E ? (r = 1, s = 4, i = fe(e.GG, t._a[Zn], se(Ce(), 1, 4).year), n = fe(e.W, 1), o = fe(e.E, 1)) : (r = t._locale._week.dow, s = t._locale._week.doy, i = fe(e.gg, t._a[Zn], se(Ce(), r, s).year), n = fe(e.w, 1), null != e.d ? (o = e.d, r > o && ++n) : o = null != e.e ? e.e + r : r), a = de(i, n, o, s, r), t._a[Zn] = a.year, t._dayOfYear = a.dayOfYear
    }

    function ye(e) {
        if (e._f === t.ISO_8601) return void Z(e);
        e._a = [], e._pf.empty = !0;
        var i, n, o, r, s, a = "" + e._i,
            l = a.length,
            u = 0;
        for (o = j(e._f, e._locale).match(In) || [], i = 0; i < o.length; i++) r = o[i], n = (a.match($(r, e)) || [])[0], n && (s = a.substr(0, a.indexOf(n)), s.length > 0 && e._pf.unusedInput.push(s), a = a.slice(a.indexOf(n) + n.length), u += n.length), Hn[r] ? (n ? e._pf.empty = !1 : e._pf.unusedTokens.push(r), W(r, n, e)) : e._strict && !n && e._pf.unusedTokens.push(r);
        e._pf.charsLeftOver = l - u, a.length > 0 && e._pf.unusedInput.push(a), e._pf.bigHour === !0 && e._a[io] <= 12 && (e._pf.bigHour = void 0), e._a[io] = be(e._locale, e._a[io], e._meridiem), ge(e), K(e)
    }

    function be(t, e, i) {
        var n;
        return null == i ? e : null != t.meridiemHour ? t.meridiemHour(e, i) : null != t.isPM ? (n = t.isPM(i), n && 12 > e && (e += 12), n || 12 !== e || (e = 0), e) : e
    }

    function _e(t) {
        var e, n, o, r, s;
        if (0 === t._f.length) return t._pf.invalidFormat = !0, void(t._d = new Date(0 / 0));
        for (r = 0; r < t._f.length; r++) s = 0, e = h({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._pf = i(), e._f = t._f[r], ye(e), u(e) && (s += e._pf.charsLeftOver, s += 10 * e._pf.unusedTokens.length, e._pf.score = s, (null == o || o > s) && (o = s, n = e));
        a(t, n || e)
    }

    function we(t) {
        if (!t._d) {
            var e = C(t._i);
            t._a = [e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], ge(t)
        }
    }

    function ke(t) {
        var e, i = t._i,
            o = t._f;
        return t._locale = t._locale || k(t._l), null === i || void 0 === o && "" === i ? c({
            nullInput: !0
        }) : ("string" == typeof i && (t._i = i = t._locale.preparse(i)), p(i) ? new d(K(i)) : (n(o) ? _e(t) : o ? ye(t) : xe(t), e = new d(K(t)), e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e))
    }

    function xe(e) {
        var i = e._i;
        void 0 === i ? e._d = new Date : o(i) ? e._d = new Date(+i) : "string" == typeof i ? te(e) : n(i) ? (e._a = r(i.slice(0), function (t) {
            return parseInt(t, 10)
        }), ge(e)) : "object" == typeof i ? we(e) : "number" == typeof i ? e._d = new Date(i) : t.createFromInputFallback(e)
    }

    function De(t, e, n, o, r) {
        var s = {};
        return "boolean" == typeof n && (o = n, n = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = r, s._l = n, s._i = t, s._f = e, s._strict = o, s._pf = i(), ke(s)
    }

    function Ce(t, e, i, n) {
        return De(t, e, i, n, !1)
    }

    function Te(t, e) {
        var i, o;
        if (1 === e.length && n(e[0]) && (e = e[0]), !e.length) return Ce();
        for (i = e[0], o = 1; o < e.length; ++o) e[o][t](i) && (i = e[o]);
        return i
    }

    function Se() {
        var t = [].slice.call(arguments, 0);
        return Te("isBefore", t)
    }

    function Ee() {
        var t = [].slice.call(arguments, 0);
        return Te("isAfter", t)
    }

    function Me(t) {
        var e = C(t),
            i = e.year || 0,
            n = e.quarter || 0,
            o = e.month || 0,
            r = e.week || 0,
            s = e.day || 0,
            a = e.hour || 0,
            l = e.minute || 0,
            u = e.second || 0,
            c = e.millisecond || 0;
        this._milliseconds = +c + 1e3 * u + 6e4 * l + 36e5 * a, this._days = +s + 7 * r, this._months = +o + 3 * n + 12 * i, this._data = {}, this._locale = k(), this._bubble()
    }

    function Oe(t) {
        return t instanceof Me
    }

    function Pe(t, e) {
        P(t, 0, 0, function () {
            var t = this.utcOffset(),
                i = "+";
            return 0 > t && (t = -t, i = "-"), i + O(~~(t / 60), 2) + e + O(~~t % 60, 2)
        })
    }

    function Ne(t) {
        var e = (t || "").match(Xn) || [],
            i = e[e.length - 1] || [],
            n = (i + "").match(yo) || ["-", 0, 0],
            o = +(60 * n[1]) + f(n[2]);
        return "+" === n[0] ? o : -o
    }

    function Ie(e, i) {
        var n, r;
        return i._isUTC ? (n = i.clone(), r = (p(e) || o(e) ? +e : +Ce(e)) - +n, n._d.setTime(+n._d + r), t.updateOffset(n, !1), n) : Ce(e).local()
    }

    function Ae(t) {
        return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
    }

    function je(e, i) {
        var n, o = this._offset || 0;
        return null != e ? ("string" == typeof e && (e = Ne(e)), Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && i && (n = Ae(this)), this._offset = e, this._isUTC = !0, null != n && this.add(n, "m"), o !== e && (!i || this._changeInProgress ? Qe(this, Ue(e - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? o : Ae(this)
    }

    function He(t, e) {
        return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
    }

    function $e(t) {
        return this.utcOffset(0, t)
    }

    function Le(t) {
        return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ae(this), "m")), this
    }

    function ze() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ne(this._i)), this
    }

    function Fe(t) {
        return t = t ? Ce(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0
    }

    function We() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Re() {
        if (this._a) {
            var t = this._isUTC ? l(this._a) : Ce(this._a);
            return this.isValid() && m(this._a, t.toArray()) > 0
        }
        return !1
    }

    function Ye() {
        return !this._isUTC
    }

    function Be() {
        return this._isUTC
    }

    function qe() {
        return this._isUTC && 0 === this._offset
    }

    function Ue(t, e) {
        var i, n, o, r = t,
            a = null;
        return Oe(t) ? r = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : "number" == typeof t ? (r = {}, e ? r[e] = t : r.milliseconds = t) : (a = bo.exec(t)) ? (i = "-" === a[1] ? -1 : 1, r = {
            y: 0,
            d: f(a[eo]) * i,
            h: f(a[io]) * i,
            m: f(a[no]) * i,
            s: f(a[oo]) * i,
            ms: f(a[ro]) * i
        }) : (a = _o.exec(t)) ? (i = "-" === a[1] ? -1 : 1, r = {
            y: Ge(a[2], i),
            M: Ge(a[3], i),
            d: Ge(a[4], i),
            h: Ge(a[5], i),
            m: Ge(a[6], i),
            s: Ge(a[7], i),
            w: Ge(a[8], i)
        }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (o = Ke(Ce(r.from), Ce(r.to)), r = {}, r.ms = o.milliseconds, r.M = o.months), n = new Me(r), Oe(t) && s(t, "_locale") && (n._locale = t._locale), n
    }

    function Ge(t, e) {
        var i = t && parseFloat(t.replace(",", "."));
        return (isNaN(i) ? 0 : i) * e
    }

    function Xe(t, e) {
        var i = {
            milliseconds: 0,
            months: 0
        };
        return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = +e - +t.clone().add(i.months, "M"), i
    }

    function Ke(t, e) {
        var i;
        return e = Ie(e, t), t.isBefore(e) ? i = Xe(t, e) : (i = Xe(e, t), i.milliseconds = -i.milliseconds, i.months = -i.months), i
    }

    function Ve(t, e) {
        return function (i, n) {
            var o, r;
            return null === n || isNaN(+n) || (J(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."), r = i, i = n, n = r), i = "string" == typeof i ? +i : i, o = Ue(i, n), Qe(this, o, t), this
        }
    }

    function Qe(e, i, n, o) {
        var r = i._milliseconds,
            s = i._days,
            a = i._months;
        o = null == o ? !0 : o, r && e._d.setTime(+e._d + r * n), s && E(e, "Date", S(e, "Date") + s * n), a && U(e, S(e, "Month") + a * n), o && t.updateOffset(e, s || a)
    }

    function Je(t) {
        var e = t || Ce(),
            i = Ie(e, this).startOf("day"),
            n = this.diff(i, "days", !0),
            o = -6 > n ? "sameElse" : -1 > n ? "lastWeek" : 0 > n ? "lastDay" : 1 > n ? "sameDay" : 2 > n ? "nextDay" : 7 > n ? "nextWeek" : "sameElse";
        return this.format(this.localeData().calendar(o, this, Ce(e)))
    }

    function Ze() {
        return new d(this)
    }

    function ti(t, e) {
        var i;
        return e = D("undefined" != typeof e ? e : "millisecond"), "millisecond" === e ? (t = p(t) ? t : Ce(t), +this > +t) : (i = p(t) ? +t : +Ce(t), i < +this.clone().startOf(e))
    }

    function ei(t, e) {
        var i;
        return e = D("undefined" != typeof e ? e : "millisecond"), "millisecond" === e ? (t = p(t) ? t : Ce(t), +t > +this) : (i = p(t) ? +t : +Ce(t), +this.clone().endOf(e) < i)
    }

    function ii(t, e, i) {
        return this.isAfter(t, i) && this.isBefore(e, i)
    }

    function ni(t, e) {
        var i;
        return e = D(e || "millisecond"), "millisecond" === e ? (t = p(t) ? t : Ce(t), +this === +t) : (i = +Ce(t), +this.clone().startOf(e) <= i && i <= +this.clone().endOf(e))
    }

    function oi(t) {
        return 0 > t ? Math.ceil(t) : Math.floor(t)
    }

    function ri(t, e, i) {
        var n, o, r = Ie(t, this),
            s = 6e4 * (r.utcOffset() - this.utcOffset());
        return e = D(e), "year" === e || "month" === e || "quarter" === e ? (o = si(this, r), "quarter" === e ? o /= 3 : "year" === e && (o /= 12)) : (n = this - r, o = "second" === e ? n / 1e3 : "minute" === e ? n / 6e4 : "hour" === e ? n / 36e5 : "day" === e ? (n - s) / 864e5 : "week" === e ? (n - s) / 6048e5 : n), i ? o : oi(o)
    }

    function si(t, e) {
        var i, n, o = 12 * (e.year() - t.year()) + (e.month() - t.month()),
            r = t.clone().add(o, "months");
        return 0 > e - r ? (i = t.clone().add(o - 1, "months"), n = (e - r) / (r - i)) : (i = t.clone().add(o + 1, "months"), n = (e - r) / (i - r)), -(o + n)
    }

    function ai() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function li() {
        var t = this.clone().utc();
        return 0 < t.year() && t.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : A(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : A(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function ui(e) {
        var i = A(this, e || t.defaultFormat);
        return this.localeData().postformat(i)
    }

    function ci(t, e) {
        return Ue({
            to: this,
            from: t
        }).locale(this.locale()).humanize(!e)
    }

    function hi(t) {
        return this.from(Ce(), t)
    }

    function di(t) {
        var e;
        return void 0 === t ? this._locale._abbr : (e = k(t), null != e && (this._locale = e), this)
    }

    function pi() {
        return this._locale
    }

    function fi(t) {
        switch (t = D(t)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function mi(t) {
        return t = D(t), void 0 === t || "millisecond" === t ? this : this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")
    }

    function gi() {
        return +this._d - 6e4 * (this._offset || 0)
    }

    function vi() {
        return Math.floor(+this / 1e3)
    }

    function yi() {
        return this._offset ? new Date(+this) : this._d
    }

    function bi() {
        var t = this;
        return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
    }

    function _i() {
        return u(this)
    }

    function wi() {
        return a({}, this._pf)
    }

    function ki() {
        return this._pf.overflow
    }

    function xi(t, e) {
        P(0, [t, t.length], 0, e)
    }

    function Di(t, e, i) {
        return se(Ce([t, 11, 31 + e - i]), e, i).week
    }

    function Ci(t) {
        var e = se(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return null == t ? e : this.add(t - e, "y")
    }

    function Ti(t) {
        var e = se(this, 1, 4).year;
        return null == t ? e : this.add(t - e, "y")
    }

    function Si() {
        return Di(this.year(), 1, 4)
    }

    function Ei() {
        var t = this.localeData()._week;
        return Di(this.year(), t.dow, t.doy)
    }

    function Mi(t) {
        return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
    }

    function Oi(t, e) {
        if ("string" == typeof t)
            if (isNaN(t)) {
                if (t = e.weekdaysParse(t), "number" != typeof t) return null
            } else t = parseInt(t, 10);
        return t
    }

    function Pi(t) {
        return this._weekdays[t.day()]
    }

    function Ni(t) {
        return this._weekdaysShort[t.day()]
    }

    function Ii(t) {
        return this._weekdaysMin[t.day()]
    }

    function Ai(t) {
        var e, i, n;
        for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++)
            if (this._weekdaysParse[e] || (i = Ce([2e3, 1]).day(e), n = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[e] = new RegExp(n.replace(".", ""), "i")), this._weekdaysParse[e].test(t)) return e
    }

    function ji(t) {
        var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != t ? (t = Oi(t, this.localeData()), this.add(t - e, "d")) : e
    }

    function Hi(t) {
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d")
    }

    function $i(t) {
        return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
    }

    function Li(t, e) {
        P(t, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), e)
        })
    }

    function zi(t, e) {
        return e._meridiemParse
    }

    function Fi(t) {
        return "p" === (t + "").toLowerCase().charAt(0)
    }

    function Wi(t, e, i) {
        return t > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
    }

    function Ri(t) {
        P(0, [t, 3], 0, "millisecond")
    }

    function Yi() {
        return this._isUTC ? "UTC" : ""
    }

    function Bi() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function qi(t) {
        return Ce(1e3 * t)
    }

    function Ui() {
        return Ce.apply(null, arguments).parseZone()
    }

    function Gi(t, e, i) {
        var n = this._calendar[t];
        return "function" == typeof n ? n.call(e, i) : n
    }

    function Xi(t) {
        var e = this._longDateFormat[t];
        return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (t) {
            return t.slice(1)
        }), this._longDateFormat[t] = e), e
    }

    function Ki() {
        return this._invalidDate
    }

    function Vi(t) {
        return this._ordinal.replace("%d", t)
    }

    function Qi(t) {
        return t
    }

    function Ji(t, e, i, n) {
        var o = this._relativeTime[i];
        return "function" == typeof o ? o(t, e, i, n) : o.replace(/%d/i, t)
    }

    function Zi(t, e) {
        var i = this._relativeTime[t > 0 ? "future" : "past"];
        return "function" == typeof i ? i(e) : i.replace(/%s/i, e)
    }

    function tn(t) {
        var e, i;
        for (i in t) e = t[i], "function" == typeof e ? this[i] = e : this["_" + i] = e;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function en(t, e, i, n) {
        var o = k(),
            r = l().set(n, e);
        return o[i](r, t)
    }

    function nn(t, e, i, n, o) {
        if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e) return en(t, e, i, o);
        var r, s = [];
        for (r = 0; n > r; r++) s[r] = en(t, r, i, o);
        return s
    }

    function on(t, e) {
        return nn(t, e, "months", 12, "month")
    }

    function rn(t, e) {
        return nn(t, e, "monthsShort", 12, "month")
    }

    function sn(t, e) {
        return nn(t, e, "weekdays", 7, "day")
    }

    function an(t, e) {
        return nn(t, e, "weekdaysShort", 7, "day")
    }

    function ln(t, e) {
        return nn(t, e, "weekdaysMin", 7, "day")
    }

    function un() {
        var t = this._data;
        return this._milliseconds = Ro(this._milliseconds), this._days = Ro(this._days), this._months = Ro(this._months), t.milliseconds = Ro(t.milliseconds), t.seconds = Ro(t.seconds), t.minutes = Ro(t.minutes), t.hours = Ro(t.hours), t.months = Ro(t.months), t.years = Ro(t.years), this
    }

    function cn(t, e, i, n) {
        var o = Ue(e, i);
        return t._milliseconds += n * o._milliseconds, t._days += n * o._days, t._months += n * o._months, t._bubble()
    }

    function hn(t, e) {
        return cn(this, t, e, 1)
    }

    function dn(t, e) {
        return cn(this, t, e, -1)
    }

    function pn() {
        var t, e, i, n = this._milliseconds,
            o = this._days,
            r = this._months,
            s = this._data,
            a = 0;
        return s.milliseconds = n % 1e3, t = oi(n / 1e3), s.seconds = t % 60, e = oi(t / 60), s.minutes = e % 60, i = oi(e / 60), s.hours = i % 24, o += oi(i / 24), a = oi(fn(o)), o -= oi(mn(a)), r += oi(o / 30), o %= 30, a += oi(r / 12), r %= 12, s.days = o, s.months = r, s.years = a, this
    }

    function fn(t) {
        return 400 * t / 146097
    }

    function mn(t) {
        return 146097 * t / 400
    }

    function gn(t) {
        var e, i, n = this._milliseconds;
        if (t = D(t), "month" === t || "year" === t) return e = this._days + n / 864e5, i = this._months + 12 * fn(e), "month" === t ? i : i / 12;
        switch (e = this._days + Math.round(mn(this._months / 12)), t) {
            case "week":
                return e / 7 + n / 6048e5;
            case "day":
                return e + n / 864e5;
            case "hour":
                return 24 * e + n / 36e5;
            case "minute":
                return 24 * e * 60 + n / 6e4;
            case "second":
                return 24 * e * 60 * 60 + n / 1e3;
            case "millisecond":
                return Math.floor(24 * e * 60 * 60 * 1e3) + n;
            default:
                throw new Error("Unknown unit " + t)
        }
    }

    function vn() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * f(this._months / 12)
    }

    function yn(t) {
        return function () {
            return this.as(t)
        }
    }

    function bn(t) {
        return t = D(t), this[t + "s"]()
    }

    function _n(t) {
        return function () {
            return this._data[t]
        }
    }

    function wn() {
        return oi(this.days() / 7)
    }

    function kn(t, e, i, n, o) {
        return o.relativeTime(e || 1, !!i, t, n)
    }

    function xn(t, e, i) {
        var n = Ue(t).abs(),
            o = or(n.as("s")),
            r = or(n.as("m")),
            s = or(n.as("h")),
            a = or(n.as("d")),
            l = or(n.as("M")),
            u = or(n.as("y")),
            c = o < rr.s && ["s", o] || 1 === r && ["m"] || r < rr.m && ["mm", r] || 1 === s && ["h"] || s < rr.h && ["hh", s] || 1 === a && ["d"] || a < rr.d && ["dd", a] || 1 === l && ["M"] || l < rr.M && ["MM", l] || 1 === u && ["y"] || ["yy", u];
        return c[2] = e, c[3] = +t > 0, c[4] = i, kn.apply(null, c)
    }

    function Dn(t, e) {
        return void 0 === rr[t] ? !1 : void 0 === e ? rr[t] : (rr[t] = e, !0)
    }

    function Cn(t) {
        var e = this.localeData(),
            i = xn(this, !t, e);
        return t && (i = e.pastFuture(+this, i)), e.postformat(i)
    }

    function Tn() {
        var t = sr(this.years()),
            e = sr(this.months()),
            i = sr(this.days()),
            n = sr(this.hours()),
            o = sr(this.minutes()),
            r = sr(this.seconds() + this.milliseconds() / 1e3),
            s = this.asSeconds();
        return s ? (0 > s ? "-" : "") + "P" + (t ? t + "Y" : "") + (e ? e + "M" : "") + (i ? i + "D" : "") + (n || o || r ? "T" : "") + (n ? n + "H" : "") + (o ? o + "M" : "") + (r ? r + "S" : "") : "P0D"
    }
    var Sn, En, Mn = t.momentProperties = [],
        On = !1,
        Pn = {},
        Nn = {},
        In = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
        An = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        jn = {},
        Hn = {},
        $n = /\d/,
        Ln = /\d\d/,
        zn = /\d{3}/,
        Fn = /\d{4}/,
        Wn = /[+-]?\d{6}/,
        Rn = /\d\d?/,
        Yn = /\d{1,3}/,
        Bn = /\d{1,4}/,
        qn = /[+-]?\d{1,6}/,
        Un = /\d+/,
        Gn = /[+-]?\d+/,
        Xn = /Z|[+-]\d\d:?\d\d/gi,
        Kn = /[+-]?\d+(\.\d{1,3})?/,
        Vn = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        Qn = {},
        Jn = {},
        Zn = 0,
        to = 1,
        eo = 2,
        io = 3,
        no = 4,
        oo = 5,
        ro = 6;
    P("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    }), P("MMM", 0, 0, function (t) {
        return this.localeData().monthsShort(this, t)
    }), P("MMMM", 0, 0, function (t) {
        return this.localeData().months(this, t)
    }), x("month", "M"), H("M", Rn), H("MM", Rn, Ln), H("MMM", Vn), H("MMMM", Vn), z(["M", "MM"], function (t, e) {
        e[to] = f(t) - 1
    }), z(["MMM", "MMMM"], function (t, e, i, n) {
        var o = i._locale.monthsParse(t, n, i._strict);
        null != o ? e[to] = o : i._pf.invalidMonth = t
    });
    var so = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ao = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        lo = {};
    t.suppressDeprecationWarnings = !1;
    var uo = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        co = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
            ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
            ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d{2}/],
            ["YYYY-DDD", /\d{4}-\d{3}/]
        ],
        ho = [
            ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ],
        po = /^\/?Date\((\-?\d+)/i;
    t.createFromInputFallback = Q("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }), P(0, ["YY", 2], 0, function () {
        return this.year() % 100
    }), P(0, ["YYYY", 4], 0, "year"), P(0, ["YYYYY", 5], 0, "year"), P(0, ["YYYYYY", 6, !0], 0, "year"), x("year", "y"), H("Y", Gn), H("YY", Rn, Ln), H("YYYY", Bn, Fn), H("YYYYY", qn, Wn), H("YYYYYY", qn, Wn), z(["YYYY", "YYYYY", "YYYYYY"], Zn), z("YY", function (e, i) {
        i[Zn] = t.parseTwoDigitYear(e)
    }), t.parseTwoDigitYear = function (t) {
        return f(t) + (f(t) > 68 ? 1900 : 2e3)
    };
    var fo = T("FullYear", !1);
    P("w", ["ww", 2], "wo", "week"), P("W", ["WW", 2], "Wo", "isoWeek"), x("week", "w"), x("isoWeek", "W"), H("w", Rn), H("ww", Rn, Ln), H("W", Rn), H("WW", Rn, Ln), F(["w", "ww", "W", "WW"], function (t, e, i, n) {
        e[n.substr(0, 1)] = f(t)
    });
    var mo = {
        dow: 0,
        doy: 6
    };
    P("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), x("dayOfYear", "DDD"), H("DDD", Yn), H("DDDD", zn), z(["DDD", "DDDD"], function (t, e, i) {
        i._dayOfYear = f(t)
    }), t.ISO_8601 = function () {};
    var go = Q("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
            var t = Ce.apply(null, arguments);
            return this > t ? this : t
        }),
        vo = Q("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
            var t = Ce.apply(null, arguments);
            return t > this ? this : t
        });
    Pe("Z", ":"), Pe("ZZ", ""), H("Z", Xn), H("ZZ", Xn), z(["Z", "ZZ"], function (t, e, i) {
        i._useUTC = !0, i._tzm = Ne(t)
    });
    var yo = /([\+\-]|\d\d)/gi;
    t.updateOffset = function () {};
    var bo = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
        _o = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Ue.fn = Me.prototype;
    var wo = Ve(1, "add"),
        ko = Ve(-1, "subtract");
    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var xo = Q("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
        return void 0 === t ? this.localeData() : this.locale(t)
    });
    P(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    }), P(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    }), xi("gggg", "weekYear"), xi("ggggg", "weekYear"), xi("GGGG", "isoWeekYear"), xi("GGGGG", "isoWeekYear"), x("weekYear", "gg"), x("isoWeekYear", "GG"), H("G", Gn), H("g", Gn), H("GG", Rn, Ln), H("gg", Rn, Ln), H("GGGG", Bn, Fn), H("gggg", Bn, Fn), H("GGGGG", qn, Wn), H("ggggg", qn, Wn), F(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, i, n) {
        e[n.substr(0, 2)] = f(t)
    }), F(["gg", "GG"], function (e, i, n, o) {
        i[o] = t.parseTwoDigitYear(e)
    }), P("Q", 0, 0, "quarter"), x("quarter", "Q"), H("Q", $n), z("Q", function (t, e) {
        e[to] = 3 * (f(t) - 1)
    }), P("D", ["DD", 2], "Do", "date"), x("date", "D"), H("D", Rn), H("DD", Rn, Ln), H("Do", function (t, e) {
        return t ? e._ordinalParse : e._ordinalParseLenient
    }), z(["D", "DD"], eo), z("Do", function (t, e) {
        e[eo] = f(t.match(Rn)[0], 10)
    });
    var Do = T("Date", !0);
    P("d", 0, "do", "day"), P("dd", 0, 0, function (t) {
        return this.localeData().weekdaysMin(this, t)
    }), P("ddd", 0, 0, function (t) {
        return this.localeData().weekdaysShort(this, t)
    }), P("dddd", 0, 0, function (t) {
        return this.localeData().weekdays(this, t)
    }), P("e", 0, 0, "weekday"), P("E", 0, 0, "isoWeekday"), x("day", "d"), x("weekday", "e"), x("isoWeekday", "E"), H("d", Rn), H("e", Rn), H("E", Rn), H("dd", Vn), H("ddd", Vn), H("dddd", Vn), F(["dd", "ddd", "dddd"], function (t, e, i) {
        var n = i._locale.weekdaysParse(t);
        null != n ? e.d = n : i._pf.invalidWeekday = t
    }), F(["d", "e", "E"], function (t, e, i, n) {
        e[n] = f(t)
    });
    var Co = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        To = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        So = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    P("H", ["HH", 2], 0, "hour"), P("h", ["hh", 2], 0, function () {
        return this.hours() % 12 || 12
    }), Li("a", !0), Li("A", !1), x("hour", "h"), H("a", zi), H("A", zi), H("H", Rn), H("h", Rn), H("HH", Rn, Ln), H("hh", Rn, Ln), z(["H", "HH"], io), z(["a", "A"], function (t, e, i) {
        i._isPm = i._locale.isPM(t), i._meridiem = t
    }), z(["h", "hh"], function (t, e, i) {
        e[io] = f(t), i._pf.bigHour = !0
    });
    var Eo = /[ap]\.?m?\.?/i,
        Mo = T("Hours", !0);
    P("m", ["mm", 2], 0, "minute"), x("minute", "m"), H("m", Rn), H("mm", Rn, Ln), z(["m", "mm"], no);
    var Oo = T("Minutes", !1);
    P("s", ["ss", 2], 0, "second"), x("second", "s"), H("s", Rn), H("ss", Rn, Ln), z(["s", "ss"], oo);
    var Po = T("Seconds", !1);
    P("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), P(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), Ri("SSS"), Ri("SSSS"), x("millisecond", "ms"), H("S", Yn, $n), H("SS", Yn, Ln), H("SSS", Yn, zn), H("SSSS", Un), z(["S", "SS", "SSS", "SSSS"], function (t, e) {
        e[ro] = f(1e3 * ("0." + t))
    });
    var No = T("Milliseconds", !1);
    P("z", 0, 0, "zoneAbbr"), P("zz", 0, 0, "zoneName");
    var Io = d.prototype;
    Io.add = wo, Io.calendar = Je, Io.clone = Ze, Io.diff = ri, Io.endOf = mi, Io.format = ui, Io.from = ci, Io.fromNow = hi, Io.get = M, Io.invalidAt = ki, Io.isAfter = ti, Io.isBefore = ei, Io.isBetween = ii, Io.isSame = ni, Io.isValid = _i, Io.lang = xo, Io.locale = di, Io.localeData = pi, Io.max = vo, Io.min = go, Io.parsingFlags = wi, Io.set = M, Io.startOf = fi, Io.subtract = ko, Io.toArray = bi, Io.toDate = yi, Io.toISOString = li, Io.toJSON = li, Io.toString = ai, Io.unix = vi, Io.valueOf = gi, Io.year = fo, Io.isLeapYear = re, Io.weekYear = Ci, Io.isoWeekYear = Ti, Io.quarter = Io.quarters = Mi, Io.month = G, Io.daysInMonth = X, Io.week = Io.weeks = ce, Io.isoWeek = Io.isoWeeks = he, Io.weeksInYear = Ei, Io.isoWeeksInYear = Si, Io.date = Do, Io.day = Io.days = ji, Io.weekday = Hi, Io.isoWeekday = $i, Io.dayOfYear = pe, Io.hour = Io.hours = Mo, Io.minute = Io.minutes = Oo, Io.second = Io.seconds = Po, Io.millisecond = Io.milliseconds = No, Io.utcOffset = je, Io.utc = $e, Io.local = Le, Io.parseZone = ze, Io.hasAlignedHourOffset = Fe, Io.isDST = We, Io.isDSTShifted = Re, Io.isLocal = Ye, Io.isUtcOffset = Be, Io.isUtc = qe, Io.isUTC = qe, Io.zoneAbbr = Yi, Io.zoneName = Bi, Io.dates = Q("dates accessor is deprecated. Use date instead.", Do), Io.months = Q("months accessor is deprecated. Use month instead", G), Io.years = Q("years accessor is deprecated. Use year instead", fo), Io.zone = Q("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", He);
    var Ao = Io,
        jo = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        Ho = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY LT",
            LLLL: "dddd, MMMM D, YYYY LT"
        },
        $o = "Invalid date",
        Lo = "%d",
        zo = /\d{1,2}/,
        Fo = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        Wo = g.prototype;
    Wo._calendar = jo, Wo.calendar = Gi, Wo._longDateFormat = Ho, Wo.longDateFormat = Xi, Wo._invalidDate = $o, Wo.invalidDate = Ki, Wo._ordinal = Lo, Wo.ordinal = Vi, Wo._ordinalParse = zo, Wo.preparse = Qi, Wo.postformat = Qi, Wo._relativeTime = Fo, Wo.relativeTime = Ji, Wo.pastFuture = Zi, Wo.set = tn, Wo.months = Y, Wo._months = so, Wo.monthsShort = B, Wo._monthsShort = ao, Wo.monthsParse = q, Wo.week = ae, Wo._week = mo, Wo.firstDayOfYear = ue, Wo.firstDayOfWeek = le, Wo.weekdays = Pi, Wo._weekdays = Co, Wo.weekdaysMin = Ii, Wo._weekdaysMin = So, Wo.weekdaysShort = Ni, Wo._weekdaysShort = To, Wo.weekdaysParse = Ai, Wo.isPM = Fi, Wo._meridiemParse = Eo, Wo.meridiem = Wi, _("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (t) {
            var e = t % 10,
                i = 1 === f(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
            return t + i
        }
    }), t.lang = Q("moment.lang is deprecated. Use moment.locale instead.", _), t.langData = Q("moment.langData is deprecated. Use moment.localeData instead.", k);
    var Ro = Math.abs,
        Yo = yn("ms"),
        Bo = yn("s"),
        qo = yn("m"),
        Uo = yn("h"),
        Go = yn("d"),
        Xo = yn("w"),
        Ko = yn("M"),
        Vo = yn("y"),
        Qo = _n("milliseconds"),
        Jo = _n("seconds"),
        Zo = _n("minutes"),
        tr = _n("hours"),
        er = _n("days"),
        ir = _n("months"),
        nr = _n("years"),
        or = Math.round,
        rr = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        sr = Math.abs,
        ar = Me.prototype;
    ar.abs = un, ar.add = hn, ar.subtract = dn, ar.as = gn, ar.asMilliseconds = Yo, ar.asSeconds = Bo, ar.asMinutes = qo, ar.asHours = Uo, ar.asDays = Go, ar.asWeeks = Xo, ar.asMonths = Ko, ar.asYears = Vo, ar.valueOf = vn, ar._bubble = pn, ar.get = bn, ar.milliseconds = Qo, ar.seconds = Jo, ar.minutes = Zo, ar.hours = tr, ar.days = er, ar.weeks = wn, ar.months = ir, ar.years = nr, ar.humanize = Cn, ar.toISOString = Tn, ar.toString = Tn, ar.toJSON = Tn, ar.locale = di, ar.localeData = pi, ar.toIsoString = Q("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Tn), ar.lang = xo, P("X", 0, 0, "unix"), P("x", 0, 0, "valueOf"), H("x", Gn), H("X", Kn), z("X", function (t, e, i) {
        i._d = new Date(1e3 * parseFloat(t, 10))
    }), z("x", function (t, e, i) {
        i._d = new Date(f(t))
    }), t.version = "2.10.2", e(Ce), t.fn = Ao, t.min = Se, t.max = Ee, t.utc = l, t.unix = qi, t.months = on, t.isDate = o, t.locale = _, t.invalid = c, t.duration = Ue, t.isMoment = p, t.weekdays = sn, t.parseZone = Ui, t.localeData = k, t.isDuration = Oe, t.monthsShort = rn, t.weekdaysMin = ln, t.defineLocale = w, t.weekdaysShort = an, t.normalizeUnits = D, t.relativeTimeThreshold = Dn;
    var lr = t;
    return lr
}),
function (t) {
    "use strict";
    if ("function" == typeof define && define.amd) define(["jquery", "moment"], t);
    else if ("object" == typeof exports) t(require("jquery"), require("moment"));
    else {
        if ("undefined" == typeof jQuery) throw "bootstrap-datetimepicker requires jQuery to be loaded first";
        if ("undefined" == typeof moment) throw "bootstrap-datetimepicker requires Moment.js to be loaded first";
        t(jQuery, moment)
    }
}(function (t, e) {
    "use strict";
    if (!e) throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");
    var i = function (i, n) {
        var o, r, s, a, l, u = {},
            c = e().startOf("d"),
            h = c.clone(),
            d = !0,
            p = !1,
            f = !1,
            m = 0,
            g = [{
                clsName: "days",
                navFnc: "M",
                navStep: 1
            }, {
                clsName: "months",
                navFnc: "y",
                navStep: 1
            }, {
                clsName: "years",
                navFnc: "y",
                navStep: 10
            }],
            v = ["days", "months", "years"],
            y = ["top", "bottom", "auto"],
            b = ["left", "right", "auto"],
            _ = ["default", "top", "bottom"],
            w = {
                up: 38,
                38: "up",
                down: 40,
                40: "down",
                left: 37,
                37: "left",
                right: 39,
                39: "right",
                tab: 9,
                9: "tab",
                escape: 27,
                27: "escape",
                enter: 13,
                13: "enter",
                pageUp: 33,
                33: "pageUp",
                pageDown: 34,
                34: "pageDown",
                shift: 16,
                16: "shift",
                control: 17,
                17: "control",
                space: 32,
                32: "space",
                t: 84,
                84: "t",
                "delete": 46,
                46: "delete"
            },
            k = {},
            x = function (t) {
                if ("string" != typeof t || t.length > 1) throw new TypeError("isEnabled expects a single character string parameter");
                switch (t) {
                    case "y":
                        return -1 !== s.indexOf("Y");
                    case "M":
                        return -1 !== s.indexOf("M");
                    case "d":
                        return -1 !== s.toLowerCase().indexOf("d");
                    case "h":
                    case "H":
                        return -1 !== s.toLowerCase().indexOf("h");
                    case "m":
                        return -1 !== s.indexOf("m");
                    case "s":
                        return -1 !== s.indexOf("s");
                    default:
                        return !1
                }
            },
            D = function () {
                return x("h") || x("m") || x("s")
            },
            C = function () {
                return x("y") || x("M") || x("d")
            },
            T = function () {
                var e = t("<thead>").append(t("<tr>").append(t("<th>").addClass("prev").attr("data-action", "previous").append(t("<span>").addClass(n.icons.previous))).append(t("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", n.calendarWeeks ? "6" : "5")).append(t("<th>").addClass("next").attr("data-action", "next").append(t("<span>").addClass(n.icons.next)))),
                    i = t("<tbody>").append(t("<tr>").append(t("<td>").attr("colspan", n.calendarWeeks ? "8" : "7")));
                return [t("<div>").addClass("datepicker-days").append(t("<table>").addClass("table-condensed").append(e).append(t("<tbody>"))), t("<div>").addClass("datepicker-months").append(t("<table>").addClass("table-condensed").append(e.clone()).append(i.clone())), t("<div>").addClass("datepicker-years").append(t("<table>").addClass("table-condensed").append(e.clone()).append(i.clone()))]
            },
            S = function () {
                var e = t("<tr>"),
                    i = t("<tr>"),
                    o = t("<tr>");
                return x("h") && (e.append(t("<td>").append(t("<a>").attr({
                    href: "#",
                    tabindex: "-1"
                }).addClass("btn").attr("data-action", "incrementHours").append(t("<span>").addClass(n.icons.up)))), i.append(t("<td>").append(t("<span>").addClass("timepicker-hour").attr("data-time-component", "hours").attr("data-action", "showHours"))), o.append(t("<td>").append(t("<a>").attr({
                    href: "#",
                    tabindex: "-1"
                }).addClass("btn").attr("data-action", "decrementHours").append(t("<span>").addClass(n.icons.down))))), x("m") && (x("h") && (e.append(t("<td>").addClass("separator")), i.append(t("<td>").addClass("separator").html(":")), o.append(t("<td>").addClass("separator"))), e.append(t("<td>").append(t("<a>").attr({
                    href: "#",
                    tabindex: "-1"
                }).addClass("btn").attr("data-action", "incrementMinutes").append(t("<span>").addClass(n.icons.up)))), i.append(t("<td>").append(t("<span>").addClass("timepicker-minute").attr("data-time-component", "minutes").attr("data-action", "showMinutes"))), o.append(t("<td>").append(t("<a>").attr({
                    href: "#",
                    tabindex: "-1"
                }).addClass("btn").attr("data-action", "decrementMinutes").append(t("<span>").addClass(n.icons.down))))), x("s") && (x("m") && (e.append(t("<td>").addClass("separator")), i.append(t("<td>").addClass("separator").html(":")), o.append(t("<td>").addClass("separator"))), e.append(t("<td>").append(t("<a>").attr({
                    href: "#",
                    tabindex: "-1"
                }).addClass("btn").attr("data-action", "incrementSeconds").append(t("<span>").addClass(n.icons.up)))), i.append(t("<td>").append(t("<span>").addClass("timepicker-second").attr("data-time-component", "seconds").attr("data-action", "showSeconds"))), o.append(t("<td>").append(t("<a>").attr({
                    href: "#",
                    tabindex: "-1"
                }).addClass("btn").attr("data-action", "decrementSeconds").append(t("<span>").addClass(n.icons.down))))), r || (e.append(t("<td>").addClass("separator")), i.append(t("<td>").append(t("<button>").addClass("btn btn-primary").attr("data-action", "togglePeriod"))), o.append(t("<td>").addClass("separator"))), t("<div>").addClass("timepicker-picker").append(t("<table>").addClass("table-condensed").append([e, i, o]))
            },
            E = function () {
                var e = t("<div>").addClass("timepicker-hours").append(t("<table>").addClass("table-condensed")),
                    i = t("<div>").addClass("timepicker-minutes").append(t("<table>").addClass("table-condensed")),
                    n = t("<div>").addClass("timepicker-seconds").append(t("<table>").addClass("table-condensed")),
                    o = [S()];
                return x("h") && o.push(e), x("m") && o.push(i), x("s") && o.push(n), o
            },
            M = function () {
                var e = [];
                return n.showTodayButton && e.push(t("<td>").append(t("<a>").attr("data-action", "today").append(t("<span>").addClass(n.icons.today)))), !n.sideBySide && C() && D() && e.push(t("<td>").append(t("<a>").attr("data-action", "togglePicker").append(t("<span>").addClass(n.icons.time)))), n.showClear && e.push(t("<td>").append(t("<a>").attr("data-action", "clear").append(t("<span>").addClass(n.icons.clear)))), n.showClose && e.push(t("<td>").append(t("<a>").attr("data-action", "close").append(t("<span>").addClass(n.icons.close)))), t("<table>").addClass("table-condensed").append(t("<tbody>").append(t("<tr>").append(e)))
            },
            O = function () {
                var e = t("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),
                    i = t("<div>").addClass("datepicker").append(T()),
                    o = t("<div>").addClass("timepicker").append(E()),
                    s = t("<ul>").addClass("list-unstyled"),
                    a = t("<li>").addClass("picker-switch" + (n.collapse ? " accordion-toggle" : "")).append(M());
                return n.inline && e.removeClass("dropdown-menu"), r && e.addClass("usetwentyfour"), n.sideBySide && C() && D() ? (e.addClass("timepicker-sbs"), e.append(t("<div>").addClass("row").append(i.addClass("col-sm-6")).append(o.addClass("col-sm-6"))), e.append(a), e) : ("top" === n.toolbarPlacement && s.append(a), C() && s.append(t("<li>").addClass(n.collapse && D() ? "collapse in" : "").append(i)), "default" === n.toolbarPlacement && s.append(a), D() && s.append(t("<li>").addClass(n.collapse && C() ? "collapse" : "").append(o)), "bottom" === n.toolbarPlacement && s.append(a), e.append(s))
            },
            P = function () {
                var e, o = {};
                return e = i.is("input") || n.inline ? i.data() : i.find("input").data(), e.dateOptions && e.dateOptions instanceof Object && (o = t.extend(!0, o, e.dateOptions)), t.each(n, function (t) {
                    var i = "date" + t.charAt(0).toUpperCase() + t.slice(1);
                    void 0 !== e[i] && (o[t] = e[i])
                }), o
            },
            N = function () {
                var e, o = (p || i).position(),
                    r = (p || i).offset(),
                    s = n.widgetPositioning.vertical,
                    a = n.widgetPositioning.horizontal;
                if (n.widgetParent) e = n.widgetParent.append(f);
                else if (i.is("input")) e = i.parent().append(f);
                else {
                    if (n.inline) return void(e = i.append(f));
                    e = i, i.children().first().after(f)
                }
                if ("auto" === s && (s = r.top + 1.5 * f.height() >= t(window).height() + t(window).scrollTop() && f.height() + i.outerHeight() < r.top ? "top" : "bottom"), "auto" === a && (a = e.width() < r.left + f.outerWidth() / 2 && r.left + f.outerWidth() > t(window).width() ? "right" : "left"), "top" === s ? f.addClass("top").removeClass("bottom") : f.addClass("bottom").removeClass("top"), "right" === a ? f.addClass("pull-right") : f.removeClass("pull-right"), "relative" !== e.css("position") && (e = e.parents().filter(function () {
                        return "relative" === t(this).css("position")
                    }).first()), 0 === e.length) throw new Error("datetimepicker component should be placed within a relative positioned container");
                f.css({
                    top: "top" === s ? "auto" : o.top + i.outerHeight(),
                    bottom: "top" === s ? o.top + i.outerHeight() : "auto",
                    left: "left" === a ? e.css("padding-left") : "auto",
                    right: "left" === a ? "auto" : e.width() - i.outerWidth()
                })
            },
            I = function (t) {
                "dp.change" === t.type && (t.date && t.date.isSame(t.oldDate) || !t.date && !t.oldDate) || i.trigger(t)
            },
            A = function (t) {
                f && (t && (l = Math.max(m, Math.min(2, l + t))), f.find(".datepicker > div").hide().filter(".datepicker-" + g[l].clsName).show())
            },
            j = function () {
                var e = t("<tr>"),
                    i = h.clone().startOf("w");
                for (n.calendarWeeks === !0 && e.append(t("<th>").addClass("cw").text("#")); i.isBefore(h.clone().endOf("w"));) e.append(t("<th>").addClass("dow").text(i.format("dd"))), i.add(1, "d");
                f.find(".datepicker-days thead").append(e)
            },
            H = function (t) {
                return n.disabledDates[t.format("YYYY-MM-DD")] === !0
            },
            $ = function (t) {
                return n.enabledDates[t.format("YYYY-MM-DD")] === !0
            },
            L = function (t, e) {
                return t.isValid() ? n.disabledDates && H(t) && "M" !== e ? !1 : n.enabledDates && !$(t) && "M" !== e ? !1 : n.minDate && t.isBefore(n.minDate, e) ? !1 : n.maxDate && t.isAfter(n.maxDate, e) ? !1 : "d" === e && -1 !== n.daysOfWeekDisabled.indexOf(t.day()) ? !1 : !0 : !1
            },
            z = function () {
                for (var e = [], i = h.clone().startOf("y").hour(12); i.isSame(h, "y");) e.push(t("<span>").attr("data-action", "selectMonth").addClass("month").text(i.format("MMM"))), i.add(1, "M");
                f.find(".datepicker-months td").empty().append(e)
            },
            F = function () {
                var e = f.find(".datepicker-months"),
                    i = e.find("th"),
                    n = e.find("tbody").find("span");
                e.find(".disabled").removeClass("disabled"), L(h.clone().subtract(1, "y"), "y") || i.eq(0).addClass("disabled"), i.eq(1).text(h.year()), L(h.clone().add(1, "y"), "y") || i.eq(2).addClass("disabled"), n.removeClass("active"), c.isSame(h, "y") && n.eq(c.month()).addClass("active"), n.each(function (e) {
                    L(h.clone().month(e), "M") || t(this).addClass("disabled")
                })
            },
            W = function () {
                var t = f.find(".datepicker-years"),
                    e = t.find("th"),
                    i = h.clone().subtract(5, "y"),
                    o = h.clone().add(6, "y"),
                    r = "";
                for (t.find(".disabled").removeClass("disabled"), n.minDate && n.minDate.isAfter(i, "y") && e.eq(0).addClass("disabled"), e.eq(1).text(i.year() + "-" + o.year()), n.maxDate && n.maxDate.isBefore(o, "y") && e.eq(2).addClass("disabled"); !i.isAfter(o, "y");) r += '<span data-action="selectYear" class="year' + (i.isSame(c, "y") ? " active" : "") + (L(i, "y") ? "" : " disabled") + '">' + i.year() + "</span>", i.add(1, "y");
                t.find("td").html(r)
            },
            R = function () {
                var i, o, r, s, a = f.find(".datepicker-days"),
                    l = a.find("th"),
                    u = [];
                if (C()) {
                    for (a.find(".disabled").removeClass("disabled"), l.eq(1).text(h.format(n.dayViewHeaderFormat)), L(h.clone().subtract(1, "M"), "M") || l.eq(0).addClass("disabled"), L(h.clone().add(1, "M"), "M") || l.eq(2).addClass("disabled"), i = h.clone().startOf("M").startOf("week"), s = 0; 42 > s; s++) 0 === i.weekday() && (o = t("<tr>"), n.calendarWeeks && o.append('<td class="cw">' + i.week() + "</td>"), u.push(o)), r = "", i.isBefore(h, "M") && (r += " old"), i.isAfter(h, "M") && (r += " new"), i.isSame(c, "d") && !d && (r += " active"), L(i, "d") || (r += " disabled"), i.isSame(e(), "d") && (r += " today"), (0 === i.day() || 6 === i.day()) && (r += " weekend"), o.append('<td data-action="selectDay" data-day="' + i.format("L") + '" class="day' + r + '">' + i.date() + "</td>"), i.add(1, "d");
                    a.find("tbody").empty().append(u), F(), W()
                }
            },
            Y = function () {
                var e = f.find(".timepicker-hours table"),
                    i = h.clone().startOf("d"),
                    n = [],
                    o = t("<tr>");
                for (h.hour() > 11 && !r && i.hour(12); i.isSame(h, "d") && (r || h.hour() < 12 && i.hour() < 12 || h.hour() > 11);) i.hour() % 4 === 0 && (o = t("<tr>"), n.push(o)), o.append('<td data-action="selectHour" class="hour' + (L(i, "h") ? "" : " disabled") + '">' + i.format(r ? "HH" : "hh") + "</td>"), i.add(1, "h");
                e.empty().append(n)
            },
            B = function () {
                for (var e = f.find(".timepicker-minutes table"), i = h.clone().startOf("h"), o = [], r = t("<tr>"), s = 1 === n.stepping ? 5 : n.stepping; h.isSame(i, "h");) i.minute() % (4 * s) === 0 && (r = t("<tr>"), o.push(r)), r.append('<td data-action="selectMinute" class="minute' + (L(i, "m") ? "" : " disabled") + '">' + i.format("mm") + "</td>"), i.add(s, "m");
                e.empty().append(o)
            },
            q = function () {
                for (var e = f.find(".timepicker-seconds table"), i = h.clone().startOf("m"), n = [], o = t("<tr>"); h.isSame(i, "m");) i.second() % 20 === 0 && (o = t("<tr>"), n.push(o)), o.append('<td data-action="selectSecond" class="second' + (L(i, "s") ? "" : " disabled") + '">' + i.format("ss") + "</td>"), i.add(5, "s");
                e.empty().append(n)
            },
            U = function () {
                var t = f.find(".timepicker span[data-time-component]");
                r || f.find(".timepicker [data-action=togglePeriod]").text(c.format("A")), t.filter("[data-time-component=hours]").text(c.format(r ? "HH" : "hh")), t.filter("[data-time-component=minutes]").text(c.format("mm")), t.filter("[data-time-component=seconds]").text(c.format("ss")), Y(), B(), q()
            },
            G = function () {
                f && (R(), U())
            },
            X = function (t) {
                var e = d ? null : c;
                return t ? (t = t.clone().locale(n.locale), 1 !== n.stepping && t.minutes(Math.round(t.minutes() / n.stepping) * n.stepping % 60).seconds(0), void(L(t) ? (c = t, h = c.clone(), o.val(c.format(s)), i.data("date", c.format(s)), G(), d = !1, I({
                    type: "dp.change",
                    date: c.clone(),
                    oldDate: e
                })) : (n.keepInvalid || o.val(d ? "" : c.format(s)), I({
                    type: "dp.error",
                    date: t
                })))) : (d = !0, o.val(""), i.data("date", ""), I({
                    type: "dp.change",
                    date: null,
                    oldDate: e
                }), void G())
            },
            K = function () {
                var e = !1;
                return f ? (f.find(".collapse").each(function () {
                    var i = t(this).data("collapse");
                    return i && i.transitioning ? (e = !0, !1) : !0
                }), e ? u : (p && p.hasClass("btn") && p.toggleClass("active"), f.hide(), t(window).off("resize", N), f.off("click", "[data-action]"), f.off("mousedown", !1), f.remove(), f = !1, I({
                    type: "dp.hide",
                    date: c.clone()
                }), u)) : u
            },
            V = function () {
                X(null)
            },
            Q = {
                next: function () {
                    h.add(g[l].navStep, g[l].navFnc), R()
                },
                previous: function () {
                    h.subtract(g[l].navStep, g[l].navFnc), R()
                },
                pickerSwitch: function () {
                    A(1)
                },
                selectMonth: function (e) {
                    var i = t(e.target).closest("tbody").find("span").index(t(e.target));
                    h.month(i), l === m ? (X(c.clone().year(h.year()).month(h.month())), n.inline || K()) : (A(-1), R())
                },
                selectYear: function (e) {
                    var i = parseInt(t(e.target).text(), 10) || 0;
                    h.year(i), l === m ? (X(c.clone().year(h.year())), n.inline || K()) : (A(-1), R())
                },
                selectDay: function (e) {
                    var i = h.clone();
                    t(e.target).is(".old") && i.subtract(1, "M"), t(e.target).is(".new") && i.add(1, "M"), X(i.date(parseInt(t(e.target).text(), 10))), D() || n.keepOpen || n.inline || K()
                },
                incrementHours: function () {
                    X(c.clone().add(1, "h"))
                },
                incrementMinutes: function () {
                    X(c.clone().add(n.stepping, "m"))
                },
                incrementSeconds: function () {
                    X(c.clone().add(1, "s"))
                },
                decrementHours: function () {
                    X(c.clone().subtract(1, "h"))
                },
                decrementMinutes: function () {
                    X(c.clone().subtract(n.stepping, "m"))
                },
                decrementSeconds: function () {
                    X(c.clone().subtract(1, "s"))
                },
                togglePeriod: function () {
                    X(c.clone().add(c.hours() >= 12 ? -12 : 12, "h"))
                },
                togglePicker: function (e) {
                    var i, o = t(e.target),
                        r = o.closest("ul"),
                        s = r.find(".in"),
                        a = r.find(".collapse:not(.in)");
                    if (s && s.length) {
                        if (i = s.data("collapse"), i && i.transitioning) return;
                        s.collapse ? (s.collapse("hide"), a.collapse("show")) : (s.removeClass("in"), a.addClass("in")), o.is("span") ? o.toggleClass(n.icons.time + " " + n.icons.date) : o.find("span").toggleClass(n.icons.time + " " + n.icons.date)
                    }
                },
                showPicker: function () {
                    f.find(".timepicker > div:not(.timepicker-picker)").hide(), f.find(".timepicker .timepicker-picker").show()
                },
                showHours: function () {
                    f.find(".timepicker .timepicker-picker").hide(), f.find(".timepicker .timepicker-hours").show()
                },
                showMinutes: function () {
                    f.find(".timepicker .timepicker-picker").hide(), f.find(".timepicker .timepicker-minutes").show()
                },
                showSeconds: function () {
                    f.find(".timepicker .timepicker-picker").hide(), f.find(".timepicker .timepicker-seconds").show()
                },
                selectHour: function (e) {
                    var i = parseInt(t(e.target).text(), 10);
                    r || (c.hours() >= 12 ? 12 !== i && (i += 12) : 12 === i && (i = 0)), X(c.clone().hours(i)), Q.showPicker.call(u)
                },
                selectMinute: function (e) {
                    X(c.clone().minutes(parseInt(t(e.target).text(), 10))), Q.showPicker.call(u)
                },
                selectSecond: function (e) {
                    X(c.clone().seconds(parseInt(t(e.target).text(), 10))), Q.showPicker.call(u)
                },
                clear: V,
                today: function () {
                    X(e())
                },
                close: K
            },
            J = function (e) {
                return t(e.currentTarget).is(".disabled") ? !1 : (Q[t(e.currentTarget).data("action")].apply(u, arguments), !1)
            },
            Z = function () {
                var i, r = {
                    year: function (t) {
                        return t.month(0).date(1).hours(0).seconds(0).minutes(0)
                    },
                    month: function (t) {
                        return t.date(1).hours(0).seconds(0).minutes(0)
                    },
                    day: function (t) {
                        return t.hours(0).seconds(0).minutes(0)
                    },
                    hour: function (t) {
                        return t.seconds(0).minutes(0)
                    },
                    minute: function (t) {
                        return t.seconds(0)
                    }
                };
                return o.prop("disabled") || !n.ignoreReadonly && o.prop("readonly") || f ? u : (n.useCurrent && d && (o.is("input") && 0 === o.val().trim().length || n.inline) && (i = e(), "string" == typeof n.useCurrent && (i = r[n.useCurrent](i)), X(i)), f = O(), j(), z(), f.find(".timepicker-hours").hide(), f.find(".timepicker-minutes").hide(), f.find(".timepicker-seconds").hide(), G(), A(), t(window).on("resize", N), f.on("click", "[data-action]", J), f.on("mousedown", !1), p && p.hasClass("btn") && p.toggleClass("active"), f.show(), N(), o.is(":focus") || o.focus(), I({
                    type: "dp.show"
                }), u)
            },
            te = function () {
                return f ? K() : Z()
            },
            ee = function (t) {
                return t = e.isMoment(t) || t instanceof Date ? e(t) : e(t, a, n.useStrict), t.locale(n.locale), t
            },
            ie = function (t) {
                var e, i, o, r, s = null,
                    a = [],
                    l = {},
                    c = t.which,
                    h = "p";
                k[c] = h;
                for (e in k) k.hasOwnProperty(e) && k[e] === h && (a.push(e), parseInt(e, 10) !== c && (l[e] = !0));
                for (e in n.keyBinds)
                    if (n.keyBinds.hasOwnProperty(e) && "function" == typeof n.keyBinds[e] && (o = e.split(" "), o.length === a.length && w[c] === o[o.length - 1])) {
                        for (r = !0, i = o.length - 2; i >= 0; i--)
                            if (!(w[o[i]] in l)) {
                                r = !1;
                                break
                            }
                        if (r) {
                            s = n.keyBinds[e];
                            break
                        }
                    }
                s && (s.call(u, f), t.stopPropagation(), t.preventDefault())
            },
            ne = function (t) {
                k[t.which] = "r", t.stopPropagation(), t.preventDefault()
            },
            oe = function (e) {
                var i = t(e.target).val().trim(),
                    n = i ? ee(i) : null;
                return X(n), e.stopImmediatePropagation(), !1
            },
            re = function () {
                o.on({
                    change: oe,
                    blur: n.debug ? "" : K,
                    keydown: ie,
                    keyup: ne
                }), i.is("input") ? o.on({
                    focus: Z
                }) : p && (p.on("click", te), p.on("mousedown", !1))
            },
            se = function () {
                o.off({
                    change: oe,
                    blur: K,
                    keydown: ie,
                    keyup: ne
                }), i.is("input") ? o.off({
                    focus: Z
                }) : p && (p.off("click", te), p.off("mousedown", !1))
            },
            ae = function (e) {
                var i = {};
                return t.each(e, function () {
                    var t = ee(this);
                    t.isValid() && (i[t.format("YYYY-MM-DD")] = !0)
                }), Object.keys(i).length ? i : !1
            },
            le = function () {
                var t = n.format || "L LT";
                s = t.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (t) {
                    var e = c.localeData().longDateFormat(t) || t;
                    return e.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (t) {
                        return c.localeData().longDateFormat(t) || t
                    })
                }), a = n.extraFormats ? n.extraFormats.slice() : [], a.indexOf(t) < 0 && a.indexOf(s) < 0 && a.push(s), r = s.toLowerCase().indexOf("a") < 1 && s.indexOf("h") < 1, x("y") && (m = 2), x("M") && (m = 1), x("d") && (m = 0), l = Math.max(m, l), d || X(c)
            };
        if (u.destroy = function () {
                K(), se(), i.removeData("DateTimePicker"), i.removeData("date")
            }, u.toggle = te, u.show = Z, u.hide = K, u.disable = function () {
                return K(), p && p.hasClass("btn") && p.addClass("disabled"), o.prop("disabled", !0), u
            }, u.enable = function () {
                return p && p.hasClass("btn") && p.removeClass("disabled"), o.prop("disabled", !1), u
            }, u.ignoreReadonly = function (t) {
                if (0 === arguments.length) return n.ignoreReadonly;
                if ("boolean" != typeof t) throw new TypeError("ignoreReadonly () expects a boolean parameter");
                return n.ignoreReadonly = t, u
            }, u.options = function (e) {
                if (0 === arguments.length) return t.extend(!0, {}, n);
                if (!(e instanceof Object)) throw new TypeError("options() options parameter should be an object");
                return t.extend(!0, n, e), t.each(n, function (t, e) {
                    if (void 0 === u[t]) throw new TypeError("option " + t + " is not recognized!");
                    u[t](e)
                }), u
            }, u.date = function (t) {
                if (0 === arguments.length) return d ? null : c.clone();
                if (!(null === t || "string" == typeof t || e.isMoment(t) || t instanceof Date)) throw new TypeError("date() parameter must be one of [null, string, moment or Date]");
                return X(null === t ? null : ee(t)), u
            }, u.format = function (t) {
                if (0 === arguments.length) return n.format;
                if ("string" != typeof t && ("boolean" != typeof t || t !== !1)) throw new TypeError("format() expects a sting or boolean:false parameter " + t);
                return n.format = t, s && le(), u
            }, u.dayViewHeaderFormat = function (t) {
                if (0 === arguments.length) return n.dayViewHeaderFormat;
                if ("string" != typeof t) throw new TypeError("dayViewHeaderFormat() expects a string parameter");
                return n.dayViewHeaderFormat = t, u
            }, u.extraFormats = function (t) {
                if (0 === arguments.length) return n.extraFormats;
                if (t !== !1 && !(t instanceof Array)) throw new TypeError("extraFormats() expects an array or false parameter");
                return n.extraFormats = t, a && le(), u
            }, u.disabledDates = function (e) {
                if (0 === arguments.length) return n.disabledDates ? t.extend({}, n.disabledDates) : n.disabledDates;
                if (!e) return n.disabledDates = !1, G(), u;
                if (!(e instanceof Array)) throw new TypeError("disabledDates() expects an array parameter");
                return n.disabledDates = ae(e), n.enabledDates = !1, G(), u
            }, u.enabledDates = function (e) {
                if (0 === arguments.length) return n.enabledDates ? t.extend({}, n.enabledDates) : n.enabledDates;
                if (!e) return n.enabledDates = !1, G(), u;
                if (!(e instanceof Array)) throw new TypeError("enabledDates() expects an array parameter");
                return n.enabledDates = ae(e), n.disabledDates = !1, G(), u
            }, u.daysOfWeekDisabled = function (t) {
                if (0 === arguments.length) return n.daysOfWeekDisabled.splice(0);
                if (!(t instanceof Array)) throw new TypeError("daysOfWeekDisabled() expects an array parameter");
                return n.daysOfWeekDisabled = t.reduce(function (t, e) {
                    return e = parseInt(e, 10), e > 6 || 0 > e || isNaN(e) ? t : (-1 === t.indexOf(e) && t.push(e), t)
                }, []).sort(), G(), u
            }, u.maxDate = function (t) {
                if (0 === arguments.length) return n.maxDate ? n.maxDate.clone() : n.maxDate;
                if ("boolean" == typeof t && t === !1) return n.maxDate = !1, G(), u;
                "string" == typeof t && ("now" === t || "moment" === t) && (t = e());
                var i = ee(t);
                if (!i.isValid()) throw new TypeError("maxDate() Could not parse date parameter: " + t);
                if (n.minDate && i.isBefore(n.minDate)) throw new TypeError("maxDate() date parameter is before options.minDate: " + i.format(s));
                return n.maxDate = i, n.maxDate.isBefore(t) && X(n.maxDate), h.isAfter(i) && (h = i.clone()), G(), u
            }, u.minDate = function (t) {
                if (0 === arguments.length) return n.minDate ? n.minDate.clone() : n.minDate;
                if ("boolean" == typeof t && t === !1) return n.minDate = !1, G(), u;
                "string" == typeof t && ("now" === t || "moment" === t) && (t = e());
                var i = ee(t);
                if (!i.isValid()) throw new TypeError("minDate() Could not parse date parameter: " + t);
                if (n.maxDate && i.isAfter(n.maxDate)) throw new TypeError("minDate() date parameter is after options.maxDate: " + i.format(s));
                return n.minDate = i, n.minDate.isAfter(t) && X(n.minDate), h.isBefore(i) && (h = i.clone()), G(), u
            }, u.defaultDate = function (t) {
                if (0 === arguments.length) return n.defaultDate ? n.defaultDate.clone() : n.defaultDate;
                if (!t) return n.defaultDate = !1, u;
                "string" == typeof t && ("now" === t || "moment" === t) && (t = e());
                var i = ee(t);
                if (!i.isValid()) throw new TypeError("defaultDate() Could not parse date parameter: " + t);
                if (!L(i)) throw new TypeError("defaultDate() date passed is invalid according to component setup validations");
                return n.defaultDate = i, n.defaultDate && "" === o.val().trim() && void 0 === o.attr("placeholder") && X(n.defaultDate), u
            }, u.locale = function (t) {
                if (0 === arguments.length) return n.locale;
                if (!e.localeData(t)) throw new TypeError("locale() locale " + t + " is not loaded from moment locales!");
                return n.locale = t, c.locale(n.locale), h.locale(n.locale), s && le(), f && (K(), Z()), u
            }, u.stepping = function (t) {
                return 0 === arguments.length ? n.stepping : (t = parseInt(t, 10), (isNaN(t) || 1 > t) && (t = 1), n.stepping = t, u)
            }, u.useCurrent = function (t) {
                var e = ["year", "month", "day", "hour", "minute"];
                if (0 === arguments.length) return n.useCurrent;
                if ("boolean" != typeof t && "string" != typeof t) throw new TypeError("useCurrent() expects a boolean or string parameter");
                if ("string" == typeof t && -1 === e.indexOf(t.toLowerCase())) throw new TypeError("useCurrent() expects a string parameter of " + e.join(", "));
                return n.useCurrent = t, u
            }, u.collapse = function (t) {
                if (0 === arguments.length) return n.collapse;
                if ("boolean" != typeof t) throw new TypeError("collapse() expects a boolean parameter");
                return n.collapse === t ? u : (n.collapse = t, f && (K(), Z()), u)
            }, u.icons = function (e) {
                if (0 === arguments.length) return t.extend({}, n.icons);
                if (!(e instanceof Object)) throw new TypeError("icons() expects parameter to be an Object");
                return t.extend(n.icons, e), f && (K(), Z()), u
            }, u.useStrict = function (t) {
                if (0 === arguments.length) return n.useStrict;
                if ("boolean" != typeof t) throw new TypeError("useStrict() expects a boolean parameter");
                return n.useStrict = t, u
            }, u.sideBySide = function (t) {
                if (0 === arguments.length) return n.sideBySide;
                if ("boolean" != typeof t) throw new TypeError("sideBySide() expects a boolean parameter");
                return n.sideBySide = t, f && (K(), Z()), u
            }, u.viewMode = function (t) {
                if (0 === arguments.length) return n.viewMode;
                if ("string" != typeof t) throw new TypeError("viewMode() expects a string parameter");
                if (-1 === v.indexOf(t)) throw new TypeError("viewMode() parameter must be one of (" + v.join(", ") + ") value");
                return n.viewMode = t, l = Math.max(v.indexOf(t), m), A(), u
            }, u.toolbarPlacement = function (t) {
                if (0 === arguments.length) return n.toolbarPlacement;
                if ("string" != typeof t) throw new TypeError("toolbarPlacement() expects a string parameter");
                if (-1 === _.indexOf(t)) throw new TypeError("toolbarPlacement() parameter must be one of (" + _.join(", ") + ") value");
                return n.toolbarPlacement = t, f && (K(), Z()), u
            }, u.widgetPositioning = function (e) {
                if (0 === arguments.length) return t.extend({}, n.widgetPositioning);
                if ("[object Object]" !== {}.toString.call(e)) throw new TypeError("widgetPositioning() expects an object variable");
                if (e.horizontal) {
                    if ("string" != typeof e.horizontal) throw new TypeError("widgetPositioning() horizontal variable must be a string");
                    if (e.horizontal = e.horizontal.toLowerCase(), -1 === b.indexOf(e.horizontal)) throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + b.join(", ") + ")");
                    n.widgetPositioning.horizontal = e.horizontal
                }
                if (e.vertical) {
                    if ("string" != typeof e.vertical) throw new TypeError("widgetPositioning() vertical variable must be a string");
                    if (e.vertical = e.vertical.toLowerCase(), -1 === y.indexOf(e.vertical)) throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + y.join(", ") + ")");
                    n.widgetPositioning.vertical = e.vertical
                }
                return G(), u
            }, u.calendarWeeks = function (t) {
                if (0 === arguments.length) return n.calendarWeeks;
                if ("boolean" != typeof t) throw new TypeError("calendarWeeks() expects parameter to be a boolean value");
                return n.calendarWeeks = t, G(), u
            }, u.showTodayButton = function (t) {
                if (0 === arguments.length) return n.showTodayButton;
                if ("boolean" != typeof t) throw new TypeError("showTodayButton() expects a boolean parameter");
                return n.showTodayButton = t, f && (K(), Z()), u
            }, u.showClear = function (t) {
                if (0 === arguments.length) return n.showClear;
                if ("boolean" != typeof t) throw new TypeError("showClear() expects a boolean parameter");
                return n.showClear = t, f && (K(), Z()), u
            }, u.widgetParent = function (e) {
                if (0 === arguments.length) return n.widgetParent;
                if ("string" == typeof e && (e = t(e)), null !== e && "string" != typeof e && !(e instanceof t)) throw new TypeError("widgetParent() expects a string or a jQuery object parameter");
                return n.widgetParent = e, f && (K(), Z()), u
            }, u.keepOpen = function (t) {
                if (0 === arguments.length) return n.keepOpen;
                if ("boolean" != typeof t) throw new TypeError("keepOpen() expects a boolean parameter");
                return n.keepOpen = t, u
            }, u.inline = function (t) {
                if (0 === arguments.length) return n.inline;
                if ("boolean" != typeof t) throw new TypeError("inline() expects a boolean parameter");
                return n.inline = t, u
            }, u.clear = function () {
                return V(), u
            }, u.keyBinds = function (t) {
                return n.keyBinds = t, u
            }, u.debug = function (t) {
                if ("boolean" != typeof t) throw new TypeError("debug() expects a boolean parameter");
                return n.debug = t, u
            }, u.showClose = function (t) {
                if (0 === arguments.length) return n.showClose;
                if ("boolean" != typeof t) throw new TypeError("showClose() expects a boolean parameter");
                return n.showClose = t, u
            }, u.keepInvalid = function (t) {
                if (0 === arguments.length) return n.keepInvalid;
                if ("boolean" != typeof t) throw new TypeError("keepInvalid() expects a boolean parameter");
                return n.keepInvalid = t, u
            }, u.datepickerInput = function (t) {
                if (0 === arguments.length) return n.datepickerInput;
                if ("string" != typeof t) throw new TypeError("datepickerInput() expects a string parameter");
                return n.datepickerInput = t, u
            }, i.is("input")) o = i;
        else if (o = i.find(n.datepickerInput), 0 === o.size()) o = i.find("input");
        else if (!o.is("input")) throw new Error('CSS class "' + n.datepickerInput + '" cannot be applied to non input element');
        if (i.hasClass("input-group") && (p = i.find(0 === i.find(".datepickerbutton").size() ? '[class^="input-group-"]' : ".datepickerbutton")), !n.inline && !o.is("input")) throw new Error("Could not initialize DateTimePicker without an input element");
        return t.extend(!0, n, P()), u.options(n), le(), re(), o.prop("disabled") && u.disable(), o.is("input") && 0 !== o.val().trim().length ? X(ee(o.val().trim())) : n.defaultDate && void 0 === o.attr("placeholder") && X(n.defaultDate), n.inline && Z(), u
    };
    t.fn.datetimepicker = function (e) {
        return this.each(function () {
            var n = t(this);
            n.data("DateTimePicker") || (e = t.extend(!0, {}, t.fn.datetimepicker.defaults, e), n.data("DateTimePicker", i(n, e)))
        })
    }, t.fn.datetimepicker.defaults = {
        format: !1,
        dayViewHeaderFormat: "MMMM YYYY",
        extraFormats: !1,
        stepping: 1,
        minDate: !1,
        maxDate: !1,
        useCurrent: !0,
        collapse: !0,
        locale: e.locale(),
        defaultDate: !1,
        disabledDates: !1,
        enabledDates: !1,
        icons: {
            time: "glyphicon glyphicon-time",
            date: "glyphicon glyphicon-calendar",
            up: "glyphicon glyphicon-chevron-up",
            down: "glyphicon glyphicon-chevron-down",
            previous: "glyphicon glyphicon-chevron-left",
            next: "glyphicon glyphicon-chevron-right",
            today: "glyphicon glyphicon-screenshot",
            clear: "glyphicon glyphicon-trash",
            close: "glyphicon glyphicon-remove"
        },
        useStrict: !1,
        sideBySide: !1,
        daysOfWeekDisabled: [],
        calendarWeeks: !1,
        viewMode: "days",
        toolbarPlacement: "default",
        showTodayButton: !1,
        showClear: !1,
        showClose: !1,
        widgetPositioning: {
            horizontal: "auto",
            vertical: "auto"
        },
        widgetParent: null,
        ignoreReadonly: !1,
        keepOpen: !1,
        inline: !1,
        keepInvalid: !1,
        datepickerInput: ".datepickerinput",
        keyBinds: {
            up: function (t) {
                if (t) {
                    var i = this.date() || e();
                    this.date(t.find(".datepicker").is(":visible") ? i.clone().subtract(7, "d") : i.clone().add(1, "m"))
                }
            },
            down: function (t) {
                if (!t) return void this.show();
                var i = this.date() || e();
                this.date(t.find(".datepicker").is(":visible") ? i.clone().add(7, "d") : i.clone().subtract(1, "m"))
            },
            "control up": function (t) {
                if (t) {
                    var i = this.date() || e();
                    this.date(t.find(".datepicker").is(":visible") ? i.clone().subtract(1, "y") : i.clone().add(1, "h"))
                }
            },
            "control down": function (t) {
                if (t) {
                    var i = this.date() || e();
                    this.date(t.find(".datepicker").is(":visible") ? i.clone().add(1, "y") : i.clone().subtract(1, "h"))
                }
            },
            left: function (t) {
                if (t) {
                    var i = this.date() || e();
                    t.find(".datepicker").is(":visible") && this.date(i.clone().subtract(1, "d"))
                }
            },
            right: function (t) {
                if (t) {
                    var i = this.date() || e();
                    t.find(".datepicker").is(":visible") && this.date(i.clone().add(1, "d"))
                }
            },
            pageUp: function (t) {
                if (t) {
                    var i = this.date() || e();
                    t.find(".datepicker").is(":visible") && this.date(i.clone().subtract(1, "M"))
                }
            },
            pageDown: function (t) {
                if (t) {
                    var i = this.date() || e();
                    t.find(".datepicker").is(":visible") && this.date(i.clone().add(1, "M"))
                }
            },
            enter: function () {
                this.hide()
            },
            escape: function () {
                this.hide()
            },
            "control space": function (t) {
                t.find(".timepicker").is(":visible") && t.find('.btn[data-action="togglePeriod"]').click()
            },
            t: function () {
                this.date(e())
            },
            "delete": function () {
                this.clear()
            }
        },
        debug: !1
    }
}),
function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(require("../moment")) : "function" == typeof define && define.amd ? define(["moment"], e) : e(t.moment)
}(this, function (t) {
    "use strict";
    var e = t.defineLocale("fr", {
        months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
        monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "LT:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
        },
        calendar: {
            sameDay: "[Aujourd'hui \xe0] LT",
            nextDay: "[Demain \xe0] LT",
            nextWeek: "dddd [\xe0] LT",
            lastDay: "[Hier \xe0] LT",
            lastWeek: "dddd [dernier \xe0] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        ordinalParse: /\d{1,2}(er|)/,
        ordinal: function (t) {
            return t + (1 === t ? "er" : "")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    return e
}), $(document).on("ready page:change", function () {
    $(".datetimepicker").datetimepicker({}), $(".datetimerange").each(function () {
        var t = $(this),
            e = $(t.find(".input-group")[0]),
            i = $(t.find(".input-group")[1]);
        null != e.data("DateTimePicker").date() && i.data("DateTimePicker").minDate(e.data("DateTimePicker").date()), null != i.data("DateTimePicker").date() && e.data("DateTimePicker").maxDate(i.data("DateTimePicker").date()), e.on("dp.change", function (t) {
            i.data("DateTimePicker").minDate(t.date ? t.date : !1)
        }), i.on("dp.change", function (t) {
            e.data("DateTimePicker").maxDate(t.date ? t.date : !1)
        })
    })
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    function e(e, n) {
        var o, r, s, a = e.nodeName.toLowerCase();
        return "area" === a ? (o = e.parentNode, r = o.name, e.href && r && "map" === o.nodeName.toLowerCase() ? (s = t("img[usemap='#" + r + "']")[0], !!s && i(s)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || n : n) && i(e)
    }

    function i(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function () {
            return "hidden" === t.css(this, "visibility")
        }).length
    }
    t.ui = t.ui || {}, t.extend(t.ui, {
        version: "1.11.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        scrollParent: function (e) {
            var i = this.css("position"),
                n = "absolute" === i,
                o = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                r = this.parents().filter(function () {
                    var e = t(this);
                    return n && "static" === e.css("position") ? !1 : o.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && r.length ? r : t(this[0].ownerDocument || document)
        },
        uniqueId: function () {
            var t = 0;
            return function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++t)
                })
            }
        }(),
        removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
            return function (i) {
                return !!t.data(i, e)
            }
        }) : function (e, i, n) {
            return !!t.data(e, n[3])
        },
        focusable: function (i) {
            return e(i, !isNaN(t.attr(i, "tabindex")))
        },
        tabbable: function (i) {
            var n = t.attr(i, "tabindex"),
                o = isNaN(n);
            return (o || n >= 0) && e(i, !o)
        }
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (e, i) {
        function n(e, i, n, r) {
            return t.each(o, function () {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), r && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), i
        }
        var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            r = i.toLowerCase(),
            s = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight
            };
        t.fn["inner" + i] = function (e) {
            return void 0 === e ? s["inner" + i].call(this) : this.each(function () {
                t(this).css(r, n(this, e) + "px")
            })
        }, t.fn["outer" + i] = function (e, o) {
            return "number" != typeof e ? s["outer" + i].call(this, e) : this.each(function () {
                t(this).css(r, n(this, e, !0, o) + "px")
            })
        }
    }), t.fn.addBack || (t.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function (e) {
        return function (i) {
            return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
        }
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
        focus: function (e) {
            return function (i, n) {
                return "number" == typeof i ? this.each(function () {
                    var e = this;
                    setTimeout(function () {
                        t(e).focus(), n && n.call(e)
                    }, i)
                }) : e.apply(this, arguments)
            }
        }(t.fn.focus),
        disableSelection: function () {
            var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function () {
                return this.bind(t + ".ui-disableSelection", function (t) {
                    t.preventDefault()
                })
            }
        }(),
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function (e) {
            if (void 0 !== e) return this.css("zIndex", e);
            if (this.length)
                for (var i, n, o = t(this[0]); o.length && o[0] !== document;) {
                    if (i = o.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (n = parseInt(o.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                    o = o.parent()
                }
            return 0
        }
    }), t.ui.plugin = {
        add: function (e, i, n) {
            var o, r = t.ui[e].prototype;
            for (o in n) r.plugins[o] = r.plugins[o] || [], r.plugins[o].push([i, n[o]])
        },
        call: function (t, e, i, n) {
            var o, r = t.plugins[e];
            if (r && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (o = 0; o < r.length; o++) t.options[r[o][0]] && r[o][1].apply(t.element, i)
        }
    }
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "./core"], t) : t(jQuery)
}(function (t) {
    function e(t) {
        for (var e, i; t.length && t[0] !== document;) {
            if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            t = t.parent()
        }
        return 0
    }

    function i() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function n(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(i, "mouseout", function () {
            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", o)
    }

    function o() {
        t.datepicker._isDisabledDatepicker(s.inline ? s.dpDiv.parent()[0] : s.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
    }

    function r(e, i) {
        t.extend(e, i);
        for (var n in i) null == i[n] && (e[n] = i[n]);
        return e
    }
    t.extend(t.ui, {
        datepicker: {
            version: "1.11.2"
        }
    });
    var s;
    return t.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (t) {
            return r(this._defaults, t || {}), this
        },
        _attachDatepicker: function (e, i) {
            var n, o, r;
            n = e.nodeName.toLowerCase(), o = "div" === n || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), r = this._newInst(t(e), o), r.settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, r) : o && this._inlineDatepicker(e, r)
        },
        _newInst: function (e, i) {
            var o = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: o,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (e, i) {
            var n = t(e);
            i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function (e, i) {
            var n, o, r, s = this._get(i, "appendText"),
                a = this._get(i, "isRTL");
            i.append && i.append.remove(), s && (i.append = t("<span class='" + this._appendClass + "'>" + s + "</span>"), e[a ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), ("focus" === n || "both" === n) && e.focus(this._showDatepicker), ("button" === n || "both" === n) && (o = this._get(i, "buttonText"), r = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: r,
                alt: o,
                title: o
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(r ? t("<img/>").attr({
                src: r,
                alt: o,
                title: o
            }) : o)), e[a ? "before" : "after"](i.trigger), i.trigger.click(function () {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
            }))
        },
        _autoSize: function (t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, n, o, r = new Date(2009, 11, 20),
                    s = this._get(t, "dateFormat");
                s.match(/[DM]/) && (e = function (t) {
                    for (i = 0, n = 0, o = 0; o < t.length; o++) t[o].length > i && (i = t[o].length, n = o);
                    return n
                }, r.setMonth(e(this._get(t, s.match(/MM/) ? "monthNames" : "monthNamesShort"))), r.setDate(e(this._get(t, s.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - r.getDay())), t.input.attr("size", this._formatDate(t, r).length)
            }
        },
        _inlineDatepicker: function (e, i) {
            var n = t(e);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (e, i, n, o, s) {
            var a, l, u, c, h, d = this._dialogInst;
            return d || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), r(d.settings, o || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, this._pos || (l = document.documentElement.clientWidth, u = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, u / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
        },
        _destroyDatepicker: function (e) {
            var i, n = t(e),
                o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (o.append.remove(), o.trigger.remove(), n.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function (e) {
            var i, n, o = t(e),
                r = t.data(e, "datepicker");
            o.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, r.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (n = o.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function (e) {
            var i, n, o = t(e),
                r = t.data(e, "datepicker");
            o.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, r.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (n = o.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                return t === e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function (t) {
            if (!t) return !1;
            for (var e = 0; e < this._disabledInputs.length; e++)
                if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function (e) {
            try {
                return t.data(e, "datepicker")
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (e, i, n) {
            var o, s, a, l, u = this._getInst(e);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : u ? "all" === i ? t.extend({}, u.settings) : this._get(u, i) : null : (o = i || {}, "string" == typeof i && (o = {}, o[i] = n), void(u && (this._curInst === u && this._hideDatepicker(), s = this._getDateDatepicker(e, !0), a = this._getMinMaxDate(u, "min"), l = this._getMinMaxDate(u, "max"), r(u.settings, o), null !== a && void 0 !== o.dateFormat && void 0 === o.minDate && (u.settings.minDate = this._formatDate(u, a)), null !== l && void 0 !== o.dateFormat && void 0 === o.maxDate && (u.settings.maxDate = this._formatDate(u, l)), "disabled" in o && (o.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), u), this._autoSize(u), this._setDate(u, s), this._updateAlternate(u), this._updateDatepicker(u))))
        },
        _changeDatepicker: function (t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function (t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function (e) {
            var i, n, o, r = t.datepicker._getInst(e.target),
                s = !0,
                a = r.dpDiv.is(".ui-datepicker-rtl");
            if (r._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), s = !1;
                    break;
                case 13:
                    return o = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", r.dpDiv), o[0] && t.datepicker._selectDay(e.target, r.selectedMonth, r.selectedYear, o[0]), i = t.datepicker._get(r, "onSelect"), i ? (n = t.datepicker._formatDate(r), i.apply(r.input ? r.input[0] : null, [n, r])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(r, "stepBigMonths") : -t.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(r, "stepBigMonths") : +t.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), s = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), s = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), s = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(r, "stepBigMonths") : -t.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), s = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), s = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(r, "stepBigMonths") : +t.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), s = e.ctrlKey || e.metaKey;
                    break;
                default:
                    s = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : s = !1;
            s && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function (e) {
            var i, n, o = t.datepicker._getInst(e.target);
            return t.datepicker._get(o, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(o, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0
        },
        _doKeyUp: function (e) {
            var i, n = t.datepicker._getInst(e.target);
            if (n.input.val() !== n.lastVal) try {
                i = t.datepicker.parseDate(t.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, t.datepicker._getFormatConfig(n)), i && (t.datepicker._setDateFromField(n), t.datepicker._updateAlternate(n), t.datepicker._updateDatepicker(n))
            } catch (o) {}
            return !0
        },
        _showDatepicker: function (i) {
            if (i = i.target || i, "input" !== i.nodeName.toLowerCase() && (i = t("input", i.parentNode)[0]), !t.datepicker._isDisabledDatepicker(i) && t.datepicker._lastInput !== i) {
                var n, o, s, a, l, u, c;
                n = t.datepicker._getInst(i), t.datepicker._curInst && t.datepicker._curInst !== n && (t.datepicker._curInst.dpDiv.stop(!0, !0), n && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), o = t.datepicker._get(n, "beforeShow"), s = o ? o.apply(i, [i, n]) : {}, s !== !1 && (r(n.settings, s), n.lastVal = null, t.datepicker._lastInput = i, t.datepicker._setDateFromField(n), t.datepicker._inDialog && (i.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(i), t.datepicker._pos[1] += i.offsetHeight), a = !1, t(i).parents().each(function () {
                    return a |= "fixed" === t(this).css("position"), !a
                }), l = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                }, t.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), t.datepicker._updateDatepicker(n), l = t.datepicker._checkOffset(n, l, a), n.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : a ? "fixed" : "absolute",
                    display: "none",
                    left: l.left + "px",
                    top: l.top + "px"
                }), n.inline || (u = t.datepicker._get(n, "showAnim"), c = t.datepicker._get(n, "duration"), n.dpDiv.css("z-index", e(t(i)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[u] ? n.dpDiv.show(u, t.datepicker._get(n, "showOptions"), c) : n.dpDiv[u || "show"](u ? c : null), t.datepicker._shouldFocusInput(n) && n.input.focus(), t.datepicker._curInst = n))
            }
        },
        _updateDatepicker: function (e) {
            this.maxRows = 4, s = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var i, n = this._getNumberOfMonths(e),
                r = n[1],
                a = 17,
                l = e.dpDiv.find("." + this._dayOverClass + " a");
            l.length > 0 && o.apply(l.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), r > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + r).css("width", a * r + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function (t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function (e, i, n) {
            var o = e.dpDiv.outerWidth(),
                r = e.dpDiv.outerHeight(),
                s = e.input ? e.input.outerWidth() : 0,
                a = e.input ? e.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
                u = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? o - s : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + o > l && l > o ? Math.abs(i.left + o - l) : 0), i.top -= Math.min(i.top, i.top + r > u && u > r ? Math.abs(r + a) : 0), i
        },
        _findPos: function (e) {
            for (var i, n = this._getInst(e), o = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[o ? "previousSibling" : "nextSibling"];
            return i = t(e).offset(), [i.left, i.top]
        },
        _hideDatepicker: function (e) {
            var i, n, o, r, s = this._curInst;
            !s || e && s !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(s, "showAnim"), n = this._get(s, "duration"), o = function () {
                t.datepicker._tidyDialog(s)
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? s.dpDiv.hide(i, t.datepicker._get(s, "showOptions"), n, o) : s.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, o), i || o(), this._datepickerShowing = !1, r = this._get(s, "onClose"), r && r.apply(s.input ? s.input[0] : null, [s.input ? s.input.val() : "", s]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function (t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (e) {
            if (t.datepicker._curInst) {
                var i = t(e.target),
                    n = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (e, i, n) {
            var o = t(e),
                r = this._getInst(o[0]);
            this._isDisabledDatepicker(o[0]) || (this._adjustInstDate(r, i + ("M" === n ? this._get(r, "showCurrentAtPos") : 0), n), this._updateDatepicker(r))
        },
        _gotoToday: function (e) {
            var i, n = t(e),
                o = this._getInst(n[0]);
            this._get(o, "gotoCurrent") && o.currentDay ? (o.selectedDay = o.currentDay, o.drawMonth = o.selectedMonth = o.currentMonth, o.drawYear = o.selectedYear = o.currentYear) : (i = new Date, o.selectedDay = i.getDate(), o.drawMonth = o.selectedMonth = i.getMonth(), o.drawYear = o.selectedYear = i.getFullYear()), this._notifyChange(o), this._adjustDate(n)
        },
        _selectMonthYear: function (e, i, n) {
            var o = t(e),
                r = this._getInst(o[0]);
            r["selected" + ("M" === n ? "Month" : "Year")] = r["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(r), this._adjustDate(o)
        },
        _selectDay: function (e, i, n, o) {
            var r, s = t(e);
            t(o).hasClass(this._unselectableClass) || this._isDisabledDatepicker(s[0]) || (r = this._getInst(s[0]), r.selectedDay = r.currentDay = t("a", o).html(), r.selectedMonth = r.currentMonth = i, r.selectedYear = r.currentYear = n, this._selectDate(e, this._formatDate(r, r.currentDay, r.currentMonth, r.currentYear)))
        },
        _clearDate: function (e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function (e, i) {
            var n, o = t(e),
                r = this._getInst(o[0]);
            i = null != i ? i : this._formatDate(r), r.input && r.input.val(i), this._updateAlternate(r), n = this._get(r, "onSelect"), n ? n.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change"), r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], "object" != typeof r.input[0] && r.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (e) {
            var i, n, o, r = this._get(e, "altField");
            r && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), o = this.formatDate(i, n, this._getFormatConfig(e)), t(r).each(function () {
                t(this).val(o)
            }))
        },
        noWeekends: function (t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""]
        },
        iso8601Week: function (t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function (e, i, n) {
            if (null == e || null == i) throw "Invalid arguments";
            if (i = "object" == typeof i ? i.toString() : i + "", "" === i) return null;
            var o, r, s, a, l = 0,
                u = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                c = "string" != typeof u ? u : (new Date).getFullYear() % 100 + parseInt(u, 10),
                h = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                d = (n ? n.dayNames : null) || this._defaults.dayNames,
                p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (n ? n.monthNames : null) || this._defaults.monthNames,
                m = -1,
                g = -1,
                v = -1,
                y = -1,
                b = !1,
                _ = function (t) {
                    var i = o + 1 < e.length && e.charAt(o + 1) === t;
                    return i && o++, i
                },
                w = function (t) {
                    var e = _(t),
                        n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        o = "y" === t ? n : 1,
                        r = new RegExp("^\\d{" + o + "," + n + "}"),
                        s = i.substring(l).match(r);
                    if (!s) throw "Missing number at position " + l;
                    return l += s[0].length, parseInt(s[0], 10)
                },
                k = function (e, n, o) {
                    var r = -1,
                        s = t.map(_(e) ? o : n, function (t, e) {
                            return [
                                [e, t]
                            ]
                        }).sort(function (t, e) {
                            return -(t[1].length - e[1].length)
                        });
                    if (t.each(s, function (t, e) {
                            var n = e[1];
                            return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (r = e[0], l += n.length, !1) : void 0
                        }), -1 !== r) return r + 1;
                    throw "Unknown name at position " + l
                },
                x = function () {
                    if (i.charAt(l) !== e.charAt(o)) throw "Unexpected literal at position " + l;
                    l++
                };
            for (o = 0; o < e.length; o++)
                if (b) "'" !== e.charAt(o) || _("'") ? x() : b = !1;
                else switch (e.charAt(o)) {
                    case "d":
                        v = w("d");
                        break;
                    case "D":
                        k("D", h, d);
                        break;
                    case "o":
                        y = w("o");
                        break;
                    case "m":
                        g = w("m");
                        break;
                    case "M":
                        g = k("M", p, f);
                        break;
                    case "y":
                        m = w("y");
                        break;
                    case "@":
                        a = new Date(w("@")), m = a.getFullYear(), g = a.getMonth() + 1, v = a.getDate();
                        break;
                    case "!":
                        a = new Date((w("!") - this._ticksTo1970) / 1e4), m = a.getFullYear(), g = a.getMonth() + 1, v = a.getDate();
                        break;
                    case "'":
                        _("'") ? x() : b = !0;
                        break;
                    default:
                        x()
                }
            if (l < i.length && (s = i.substr(l), !/^\s+/.test(s))) throw "Extra/unparsed characters found in date: " + s;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= m ? 0 : -100)), y > -1)
                for (g = 1, v = y;;) {
                    if (r = this._getDaysInMonth(m, g - 1), r >= v) break;
                    g++, v -= r
                }
            if (a = this._daylightSavingAdjust(new Date(m, g - 1, v)), a.getFullYear() !== m || a.getMonth() + 1 !== g || a.getDate() !== v) throw "Invalid date";
            return a
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function (t, e, i) {
            if (!e) return "";
            var n, o = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                r = (i ? i.dayNames : null) || this._defaults.dayNames,
                s = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                a = (i ? i.monthNames : null) || this._defaults.monthNames,
                l = function (e) {
                    var i = n + 1 < t.length && t.charAt(n + 1) === e;
                    return i && n++, i
                },
                u = function (t, e, i) {
                    var n = "" + e;
                    if (l(t))
                        for (; n.length < i;) n = "0" + n;
                    return n
                },
                c = function (t, e, i, n) {
                    return l(t) ? n[e] : i[e]
                },
                h = "",
                d = !1;
            if (e)
                for (n = 0; n < t.length; n++)
                    if (d) "'" !== t.charAt(n) || l("'") ? h += t.charAt(n) : d = !1;
                    else switch (t.charAt(n)) {
                        case "d":
                            h += u("d", e.getDate(), 2);
                            break;
                        case "D":
                            h += c("D", e.getDay(), o, r);
                            break;
                        case "o":
                            h += u("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            h += u("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            h += c("M", e.getMonth(), s, a);
                            break;
                        case "y":
                            h += l("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                            break;
                        case "@":
                            h += e.getTime();
                            break;
                        case "!":
                            h += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? h += "'" : d = !0;
                            break;
                        default:
                            h += t.charAt(n)
                    }
            return h
        },
        _possibleChars: function (t) {
            var e, i = "",
                n = !1,
                o = function (i) {
                    var n = e + 1 < t.length && t.charAt(e + 1) === i;
                    return n && e++, n
                };
            for (e = 0; e < t.length; e++)
                if (n) "'" !== t.charAt(e) || o("'") ? i += t.charAt(e) : n = !1;
                else switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        o("'") ? i += "'" : n = !0;
                        break;
                    default:
                        i += t.charAt(e)
                }
            return i
        },
        _get: function (t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
        },
        _setDateFromField: function (t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"),
                    n = t.lastVal = t.input ? t.input.val() : null,
                    o = this._getDefaultDate(t),
                    r = o,
                    s = this._getFormatConfig(t);
                try {
                    r = this.parseDate(i, n, s) || o
                } catch (a) {
                    n = e ? "" : n
                }
                t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), t.currentDay = n ? r.getDate() : 0, t.currentMonth = n ? r.getMonth() : 0, t.currentYear = n ? r.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function (t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function (e, i, n) {
            var o = function (t) {
                    var e = new Date;
                    return e.setDate(e.getDate() + t), e
                },
                r = function (i) {
                    try {
                        return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                    } catch (n) {}
                    for (var o = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, r = o.getFullYear(), s = o.getMonth(), a = o.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = l.exec(i); u;) {
                        switch (u[2] || "d") {
                            case "d":
                            case "D":
                                a += parseInt(u[1], 10);
                                break;
                            case "w":
                            case "W":
                                a += 7 * parseInt(u[1], 10);
                                break;
                            case "m":
                            case "M":
                                s += parseInt(u[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(r, s));
                                break;
                            case "y":
                            case "Y":
                                r += parseInt(u[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(r, s))
                        }
                        u = l.exec(i)
                    }
                    return new Date(r, s, a)
                },
                s = null == i || "" === i ? n : "string" == typeof i ? r(i) : "number" == typeof i ? isNaN(i) ? n : o(i) : new Date(i.getTime());
            return s = s && "Invalid Date" === s.toString() ? n : s, s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
        },
        _daylightSavingAdjust: function (t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function (t, e, i) {
            var n = !e,
                o = t.selectedMonth,
                r = t.selectedYear,
                s = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = s.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = s.getMonth(), t.drawYear = t.selectedYear = t.currentYear = s.getFullYear(), o === t.selectedMonth && r === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
        },
        _getDate: function (t) {
            var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return e
        },
        _attachHandlers: function (e) {
            var i = this._get(e, "stepMonths"),
                n = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function () {
                var e = {
                    prev: function () {
                        t.datepicker._adjustDate(n, -i, "M")
                    },
                    next: function () {
                        t.datepicker._adjustDate(n, +i, "M")
                    },
                    hide: function () {
                        t.datepicker._hideDatepicker()
                    },
                    today: function () {
                        t.datepicker._gotoToday(n)
                    },
                    selectDay: function () {
                        return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function () {
                        return t.datepicker._selectMonthYear(n, this, "M"), !1
                    },
                    selectYear: function () {
                        return t.datepicker._selectMonthYear(n, this, "Y"), !1
                    }
                };
                t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (t) {
            var e, i, n, o, r, s, a, l, u, c, h, d, p, f, m, g, v, y, b, _, w, k, x, D, C, T, S, E, M, O, P, N, I, A, j, H, $, L, z, F = new Date,
                W = this._daylightSavingAdjust(new Date(F.getFullYear(), F.getMonth(), F.getDate())),
                R = this._get(t, "isRTL"),
                Y = this._get(t, "showButtonPanel"),
                B = this._get(t, "hideIfNoPrevNext"),
                q = this._get(t, "navigationAsDateFormat"),
                U = this._getNumberOfMonths(t),
                G = this._get(t, "showCurrentAtPos"),
                X = this._get(t, "stepMonths"),
                K = 1 !== U[0] || 1 !== U[1],
                V = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                Q = this._getMinMaxDate(t, "min"),
                J = this._getMinMaxDate(t, "max"),
                Z = t.drawMonth - G,
                te = t.drawYear;
            if (0 > Z && (Z += 12, te--), J)
                for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, te--);
            for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = q ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - X, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "e" : "w") + "'>" + i + "</span></a>", o = this._get(t, "nextText"), o = q ? this.formatDate(o, this._daylightSavingAdjust(new Date(te, Z + X, 1)), this._getFormatConfig(t)) : o, r = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + o + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "w" : "e") + "'>" + o + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + o + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "w" : "e") + "'>" + o + "</span></a>", s = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? V : W, s = q ? this.formatDate(s, a, this._getFormatConfig(t)) : s, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", u = Y ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (R ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + s + "</button>" : "") + (R ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, h = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), y = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), _ = "", k = 0; k < U[0]; k++) {
                for (x = "", this.maxRows = 4, D = 0; D < U[1]; D++) {
                    if (C = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), T = " ui-corner-all", S = "", K) {
                        if (S += "<div class='ui-datepicker-group", U[1] > 1) switch (D) {
                            case 0:
                                S += " ui-datepicker-group-first", T = " ui-corner-" + (R ? "right" : "left");
                                break;
                            case U[1] - 1:
                                S += " ui-datepicker-group-last", T = " ui-corner-" + (R ? "left" : "right");
                                break;
                            default:
                                S += " ui-datepicker-group-middle", T = ""
                        }
                        S += "'>"
                    }
                    for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === k ? R ? r : n : "") + (/all|right/.test(T) && 0 === k ? R ? n : r : "") + this._generateMonthYearHeader(t, Z, te, Q, J, k > 0 || D > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", E = h ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) M = (w + c) % 7, E += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[M] + "'>" + p[M] + "</span></th>";
                    for (S += E + "</tr></thead><tbody>", O = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, O)), P = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, N = Math.ceil((P + O) / 7), I = K && this.maxRows > N ? this.maxRows : N, this.maxRows = I, A = this._daylightSavingAdjust(new Date(te, Z, 1 - P)), j = 0; I > j; j++) {
                        for (S += "<tr>", H = h ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "", w = 0; 7 > w; w++) $ = g ? g.apply(t.input ? t.input[0] : null, [A]) : [!0, ""], L = A.getMonth() !== Z, z = L && !y || !$[0] || Q && Q > A || J && A > J, H += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (L ? " ui-datepicker-other-month" : "") + (A.getTime() === C.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === A.getTime() && b.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (z ? " " + this._unselectableClass + " ui-state-disabled" : "") + (L && !v ? "" : " " + $[1] + (A.getTime() === V.getTime() ? " " + this._currentClass : "") + (A.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (L && !v || !$[2] ? "" : " title='" + $[2].replace(/'/g, "&#39;") + "'") + (z ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (L && !v ? "&#xa0;" : z ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === W.getTime() ? " ui-state-highlight" : "") + (A.getTime() === V.getTime() ? " ui-state-active" : "") + (L ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>", A.setDate(A.getDate() + 1), A = this._daylightSavingAdjust(A);
                        S += H + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, te++), S += "</tbody></table>" + (K ? "</div>" + (U[0] > 0 && D === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += S
                }
                _ += x
            }
            return _ += u, t._keyEvent = !1, _
        },
        _generateMonthYearHeader: function (t, e, i, n, o, r, s, a) {
            var l, u, c, h, d, p, f, m, g = this._get(t, "changeMonth"),
                v = this._get(t, "changeYear"),
                y = this._get(t, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                _ = "";
            if (r || !g) _ += "<span class='ui-datepicker-month'>" + s[e] + "</span>";
            else {
                for (l = n && n.getFullYear() === i, u = o && o.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= n.getMonth()) && (!u || c <= o.getMonth()) && (_ += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + a[c] + "</option>");
                _ += "</select>"
            }
            if (y || (b += _ + (!r && g && v ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", r || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (h = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (t) {
                            var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                            return isNaN(e) ? d : e
                        }, f = p(h[0]), m = Math.max(f, p(h[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, m = o ? Math.min(m, o.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                }
            return b += this._get(t, "yearSuffix"), y && (b += (!r && g && v ? "" : "&#xa0;") + _), b += "</div>"
        },
        _adjustInstDate: function (t, e, i) {
            var n = t.drawYear + ("Y" === i ? e : 0),
                o = t.drawMonth + ("M" === i ? e : 0),
                r = Math.min(t.selectedDay, this._getDaysInMonth(n, o)) + ("D" === i ? e : 0),
                s = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, o, r)));
            t.selectedDay = s.getDate(), t.drawMonth = t.selectedMonth = s.getMonth(), t.drawYear = t.selectedYear = s.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function (t, e) {
            var i = this._getMinMaxDate(t, "min"),
                n = this._getMinMaxDate(t, "max"),
                o = i && i > e ? i : e;
            return n && o > n ? n : o
        },
        _notifyChange: function (t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function (t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function (t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function (t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function (t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function (t, e, i, n) {
            var o = this._getNumberOfMonths(t),
                r = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : o[0] * o[1]), 1));
            return 0 > e && r.setDate(this._getDaysInMonth(r.getFullYear(), r.getMonth())), this._isInRange(t, r)
        },
        _isInRange: function (t, e) {
            var i, n, o = this._getMinMaxDate(t, "min"),
                r = this._getMinMaxDate(t, "max"),
                s = null,
                a = null,
                l = this._get(t, "yearRange");
            return l && (i = l.split(":"), n = (new Date).getFullYear(), s = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (s += n), i[1].match(/[+\-].*/) && (a += n)), (!o || e.getTime() >= o.getTime()) && (!r || e.getTime() <= r.getTime()) && (!s || e.getFullYear() >= s) && (!a || e.getFullYear() <= a)
        },
        _getFormatConfig: function (t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function (t, e, i, n) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var o = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), o, this._getFormatConfig(t))
        }
    }), t.fn.datepicker = function (e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.11.2", t.datepicker
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    var e = 0,
        i = Array.prototype.slice;
    return t.cleanData = function (e) {
        return function (i) {
            var n, o, r;
            for (r = 0; null != (o = i[r]); r++) try {
                n = t._data(o, "events"), n && n.remove && t(o).triggerHandler("remove")
            } catch (s) {}
            e(i)
        }
    }(t.cleanData), t.widget = function (e, i, n) {
        var o, r, s, a, l = {},
            u = e.split(".")[0];
        return e = e.split(".")[1], o = u + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][o.toLowerCase()] = function (e) {
            return !!t.data(e, o)
        }, t[u] = t[u] || {}, r = t[u][e], s = t[u][e] = function (t, e) {
            return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new s(t, e)
        }, t.extend(s, r, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }), a = new i, a.options = t.widget.extend({}, a.options), t.each(n, function (e, n) {
            return t.isFunction(n) ? void(l[e] = function () {
                var t = function () {
                        return i.prototype[e].apply(this, arguments)
                    },
                    o = function (t) {
                        return i.prototype[e].apply(this, t)
                    };
                return function () {
                    var e, i = this._super,
                        r = this._superApply;
                    return this._super = t, this._superApply = o, e = n.apply(this, arguments), this._super = i, this._superApply = r, e
                }
            }()) : void(l[e] = n)
        }), s.prototype = t.widget.extend(a, {
            widgetEventPrefix: r ? a.widgetEventPrefix || e : e
        }, l, {
            constructor: s,
            namespace: u,
            widgetName: e,
            widgetFullName: o
        }), r ? (t.each(r._childConstructors, function (e, i) {
            var n = i.prototype;
            t.widget(n.namespace + "." + n.widgetName, s, i._proto)
        }), delete r._childConstructors) : i._childConstructors.push(s), t.widget.bridge(e, s), s
    }, t.widget.extend = function (e) {
        for (var n, o, r = i.call(arguments, 1), s = 0, a = r.length; a > s; s++)
            for (n in r[s]) o = r[s][n], r[s].hasOwnProperty(n) && void 0 !== o && (e[n] = t.isPlainObject(o) ? t.isPlainObject(e[n]) ? t.widget.extend({}, e[n], o) : t.widget.extend({}, o) : o);
        return e
    }, t.widget.bridge = function (e, n) {
        var o = n.prototype.widgetFullName || e;
        t.fn[e] = function (r) {
            var s = "string" == typeof r,
                a = i.call(arguments, 1),
                l = this;
            return r = !s && a.length ? t.widget.extend.apply(null, [r].concat(a)) : r, this.each(s ? function () {
                var i, n = t.data(this, o);
                return "instance" === r ? (l = n, !1) : n ? t.isFunction(n[r]) && "_" !== r.charAt(0) ? (i = n[r].apply(n, a), i !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + r + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + r + "'")
            } : function () {
                var e = t.data(this, o);
                e ? (e.option(r || {}), e._init && e._init()) : t.data(this, o, new n(r, this))
            }), l
        }
    }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function (i, n) {
            n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (t) {
                    t.target === n && this.destroy()
                }
            }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function () {
            return this.element
        },
        option: function (e, i) {
            var n, o, r, s = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (s = {}, n = e.split("."), e = n.shift(), n.length) {
                    for (o = s[e] = t.widget.extend({}, this.options[e]), r = 0; r < n.length - 1; r++) o[n[r]] = o[n[r]] || {}, o = o[n[r]];
                    if (e = n.pop(), 1 === arguments.length) return void 0 === o[e] ? null : o[e];
                    o[e] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                    s[e] = i
                }
            return this._setOptions(s), this
        },
        _setOptions: function (t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function (t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function () {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function () {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function (e, i, n) {
            var o, r = this;
            "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = o = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, o = this.widget()), t.each(n, function (n, s) {
                function a() {
                    return e || r.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof s ? r[s] : s).apply(r, arguments) : void 0
                }
                "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || t.guid++);
                var l = n.match(/^([\w:-]*)\s*(.*)$/),
                    u = l[1] + r.eventNamespace,
                    c = l[2];
                c ? o.delegate(c, u, a) : i.bind(u, a)
            })
        },
        _off: function (e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function (t, e) {
            function i() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments)
            }
            var n = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function (e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function (e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function (e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function (e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function (e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (e, i, n) {
            var o, r, s = this.options[e];
            if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], r = i.originalEvent)
                for (o in r) o in i || (i[o] = r[o]);
            return this.element.trigger(i, n), !(t.isFunction(s) && s.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (e, i) {
        t.Widget.prototype["_" + e] = function (n, o, r) {
            "string" == typeof o && (o = {
                effect: o
            });
            var s, a = o ? o === !0 || "number" == typeof o ? i : o.effect || i : e;
            o = o || {}, "number" == typeof o && (o = {
                duration: o
            }), s = !t.isEmptyObject(o), o.complete = r, o.delay && n.delay(o.delay), s && t.effects && t.effects.effect[a] ? n[e](o) : a !== e && n[a] ? n[a](o.duration, o.easing, r) : n.queue(function (i) {
                t(this)[e](), r && r.call(n[0]), i()
            })
        }
    }), t.widget
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], t) : t(jQuery)
}(function (t) {
    var e, i = "ui-button ui-widget ui-state-default ui-corner-all",
        n = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        o = function () {
            var e = t(this);
            setTimeout(function () {
                e.find(":ui-button").button("refresh")
            }, 1)
        },
        r = function (e) {
            var i = e.name,
                n = e.form,
                o = t([]);
            return i && (i = i.replace(/'/g, "\\'"), o = n ? t(n).find("[name='" + i + "'][type=radio]") : t("[name='" + i + "'][type=radio]", e.ownerDocument).filter(function () {
                return !this.form
            })), o
        };
    return t.widget("ui.button", {
        version: "1.11.2",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, o), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var n = this,
                s = this.options,
                a = "checkbox" === this.type || "radio" === this.type,
                l = a ? "" : "ui-state-active";
            null === s.label && (s.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                s.disabled || this === e && t(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function () {
                s.disabled || t(this).removeClass(l)
            }).bind("click" + this.eventNamespace, function (t) {
                s.disabled && (t.preventDefault(), t.stopImmediatePropagation())
            }), this._on({
                focus: function () {
                    this.buttonElement.addClass("ui-state-focus")
                },
                blur: function () {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            }), a && this.element.bind("change" + this.eventNamespace, function () {
                n.refresh()
            }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                return s.disabled ? !1 : void 0
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (s.disabled) return !1;
                t(this).addClass("ui-state-active"), n.buttonElement.attr("aria-pressed", "true");
                var e = n.element[0];
                r(e).not(e).map(function () {
                    return t(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                return s.disabled ? !1 : (t(this).addClass("ui-state-active"), e = this, void n.document.one("mouseup", function () {
                    e = null
                }))
            }).bind("mouseup" + this.eventNamespace, function () {
                return s.disabled ? !1 : void t(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function (e) {
                return s.disabled ? !1 : void((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"))
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
                t(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (e) {
                e.keyCode === t.ui.keyCode.SPACE && t(this).click()
            })), this._setOption("disabled", s.disabled), this._resetButton()
        },
        _determineButtonType: function () {
            var t, e, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(i + " ui-state-active " + n).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function (t, e) {
            return this._super(t, e), "disabled" === t ? (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), void(e && this.buttonElement.removeClass("checkbox" === this.type || "radio" === this.type ? "ui-state-focus" : "ui-state-focus ui-state-active"))) : void this._resetButton()
        },
        refresh: function () {
            var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? r(this.element[0]).each(function () {
                t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
            var e = this.buttonElement.removeClass(n),
                i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                o = this.options.icons,
                r = o.primary && o.secondary,
                s = [];
            o.primary || o.secondary ? (this.options.text && s.push("ui-button-text-icon" + (r ? "s" : o.primary ? "-primary" : "-secondary")), o.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + o.primary + "'></span>"), o.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + o.secondary + "'></span>"), this.options.text || (s.push(r ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : s.push("ui-button-text-only"), e.addClass(s.join(" "))
        }
    }), t.widget("ui.buttonset", {
        version: "1.11.2",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (t, e) {
            "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
        },
        refresh: function () {
            var e = "rtl" === this.element.css("direction"),
                i = this.element.find(this.options.items),
                n = i.filter(":ui-button");
            i.not(":ui-button").button(), n.button("refresh"), this.buttons = i.map(function () {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function () {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    }), t.ui.button
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "./widget"], t) : t(jQuery)
}(function (t) {
    var e = !1;
    return t(document).mouseup(function () {
        e = !1
    }), t.widget("ui.mouse", {
        version: "1.11.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function (t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function (i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (i) {
            if (!e) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var n = this,
                    o = 1 === i.which,
                    r = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                return o && !r && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    n.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                    return n._mouseMove(t)
                }, this._mouseUpDelegate = function (t) {
                    return n._mouseUp(t)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
            }
        },
        _mouseMove: function (e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                if (!e.which) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function (i) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, i.target === this._mouseDownEvent.target && t.data(i.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(i)), e = !1, !1
        },
        _mouseDistanceMet: function (t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0
        }
    })
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], t) : t(jQuery)
}(function (t) {
    return t.widget("ui.draggable", t.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function (t, e) {
            this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function () {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
        },
        _mouseCapture: function (e) {
            var i = this.options;
            return this._blurActiveElement(e), this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
        },
        _blockFrames: function (e) {
            this.iframeBlocks = this.document.find(e).map(function () {
                var e = t(this);
                return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function (e) {
            var i = this.document[0];
            if (this.handleElement.is(e.target)) try {
                i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && t(i.activeElement).blur()
            } catch (n) {}
        },
        _mouseStart: function (e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
                return "fixed" === t(this).css("position")
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._normalizeRightBottom(), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _refreshOffsets: function (t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {
                left: t.pageX - this.offset.left,
                top: t.pageY - this.offset.top
            }
        },
        _mouseDrag: function (e, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var n = this._uiHash();
                if (this._trigger("drag", e, n) === !1) return this._mouseUp({}), !1;
                this.position = n.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function (e) {
            var i = this,
                n = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                i._trigger("stop", e) !== !1 && i._clear()
            }) : this._trigger("stop", e) !== !1 && this._clear(), !1
        },
        _mouseUp: function (e) {
            return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.focus(), t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (e) {
            return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function () {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function () {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function (e) {
            var i = this.options,
                n = t.isFunction(i.helper),
                o = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return o.parents("body").length || o.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && o[0] === this.element[0] && this._setPositionRelative(), o[0] === this.element[0] || /(fixed|absolute)/.test(o.css("position")) || o.css("position", "absolute"), o
        },
        _setPositionRelative: function () {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _isRootNode: function (t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0]
        },
        _getParentOffset: function () {
            var e = this.offsetParent.offset(),
                i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var t = this.element.position(),
                e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var e, i, n, o = this.options,
                r = this.document[0];
            return this.relativeContainer = null, o.containment ? "window" === o.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || r.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === o.containment ? void(this.containment = [0, 0, t(r).width() - this.helperProportions.width - this.margins.left, (t(r).height() || r.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : o.containment.constructor === Array ? void(this.containment = o.containment) : ("parent" === o.containment && (o.containment = this.helper[0].parentNode), i = t(o.containment), n = i[0], void(n && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
        },
        _convertPositionTo: function (t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1,
                n = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function (t, e) {
            var i, n, o, r, s = this.options,
                a = this._isRootNode(this.scrollParent[0]),
                l = t.pageX,
                u = t.pageY;
            return a && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (u = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (u = i[3] + this.offset.click.top)), s.grid && (o = s.grid[1] ? this.originalPageY + Math.round((u - this.originalPageY) / s.grid[1]) * s.grid[1] : this.originalPageY, u = i ? o - this.offset.click.top >= i[1] || o - this.offset.click.top > i[3] ? o : o - this.offset.click.top >= i[1] ? o - s.grid[1] : o + s.grid[1] : o, r = s.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / s.grid[0]) * s.grid[0] : this.originalPageX, l = i ? r - this.offset.click.left >= i[0] || r - this.offset.click.left > i[2] ? r : r - this.offset.click.left >= i[0] ? r - s.grid[0] : r + s.grid[0] : r), "y" === s.axis && (l = this.originalPageX), "x" === s.axis && (u = this.originalPageY)), {
                top: u - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _normalizeRightBottom: function () {
            "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
        },
        _trigger: function (e, i, n) {
            return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, n)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function (e, i, n) {
            var o = t.extend({}, i, {
                item: n.element
            });
            n.sortables = [], t(n.options.connectToSortable).each(function () {
                var i = t(this).sortable("instance");
                i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, o))
            })
        },
        stop: function (e, i, n) {
            var o = t.extend({}, i, {
                item: n.element
            });
            n.cancelHelperRemoval = !1, t.each(n.sortables, function () {
                var t = this;
                t.isOver ? (t.isOver = 0, n.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, o))
            })
        },
        drag: function (e, i, n) {
            t.each(n.sortables, function () {
                var o = !1,
                    r = this;
                r.positionAbs = n.positionAbs, r.helperProportions = n.helperProportions, r.offset.click = n.offset.click, r._intersectsWith(r.containerCache) && (o = !0, t.each(n.sortables, function () {
                    return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== r && this._intersectsWith(this.containerCache) && t.contains(r.element[0], this.element[0]) && (o = !1), o
                })), o ? (r.isOver || (r.isOver = 1, r.currentItem = i.helper.appendTo(r.element).data("ui-sortable-item", !0), r.options._helper = r.options.helper, r.options.helper = function () {
                    return i.helper[0]
                }, e.target = r.currentItem[0], r._mouseCapture(e, !0), r._mouseStart(e, !0, !0), r.offset.click.top = n.offset.click.top, r.offset.click.left = n.offset.click.left, r.offset.parent.left -= n.offset.parent.left - r.offset.parent.left, r.offset.parent.top -= n.offset.parent.top - r.offset.parent.top, n._trigger("toSortable", e), n.dropped = r.element, t.each(n.sortables, function () {
                    this.refreshPositions()
                }), n.currentItem = n.element, r.fromOutside = n), r.currentItem && (r._mouseDrag(e), i.position = r.position)) : r.isOver && (r.isOver = 0, r.cancelHelperRemoval = !0, r.options._revert = r.options.revert, r.options.revert = !1, r._trigger("out", e, r._uiHash(r)), r._mouseStop(e, !0), r.options.revert = r.options._revert, r.options.helper = r.options._helper, r.placeholder && r.placeholder.remove(), n._refreshOffsets(e), i.position = n._generatePosition(e, !0), n._trigger("fromSortable", e), n.dropped = !1, t.each(n.sortables, function () {
                    this.refreshPositions()
                }))
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function (e, i, n) {
            var o = t("body"),
                r = n.options;
            o.css("cursor") && (r._cursor = o.css("cursor")), o.css("cursor", r.cursor)
        },
        stop: function (e, i, n) {
            var o = n.options;
            o._cursor && t("body").css("cursor", o._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function (e, i, n) {
            var o = t(i.helper),
                r = n.options;
            o.css("opacity") && (r._opacity = o.css("opacity")), o.css("opacity", r.opacity)
        },
        stop: function (e, i, n) {
            var o = n.options;
            o._opacity && t(i.helper).css("opacity", o._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function (t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function (e, i, n) {
            var o = n.options,
                r = !1,
                s = n.scrollParentNotHidden[0],
                a = n.document[0];
            s !== a && "HTML" !== s.tagName ? (o.axis && "x" === o.axis || (n.overflowOffset.top + s.offsetHeight - e.pageY < o.scrollSensitivity ? s.scrollTop = r = s.scrollTop + o.scrollSpeed : e.pageY - n.overflowOffset.top < o.scrollSensitivity && (s.scrollTop = r = s.scrollTop - o.scrollSpeed)), o.axis && "y" === o.axis || (n.overflowOffset.left + s.offsetWidth - e.pageX < o.scrollSensitivity ? s.scrollLeft = r = s.scrollLeft + o.scrollSpeed : e.pageX - n.overflowOffset.left < o.scrollSensitivity && (s.scrollLeft = r = s.scrollLeft - o.scrollSpeed))) : (o.axis && "x" === o.axis || (e.pageY - t(a).scrollTop() < o.scrollSensitivity ? r = t(a).scrollTop(t(a).scrollTop() - o.scrollSpeed) : t(window).height() - (e.pageY - t(a).scrollTop()) < o.scrollSensitivity && (r = t(a).scrollTop(t(a).scrollTop() + o.scrollSpeed))), o.axis && "y" === o.axis || (e.pageX - t(a).scrollLeft() < o.scrollSensitivity ? r = t(a).scrollLeft(t(a).scrollLeft() - o.scrollSpeed) : t(window).width() - (e.pageX - t(a).scrollLeft()) < o.scrollSensitivity && (r = t(a).scrollLeft(t(a).scrollLeft() + o.scrollSpeed)))), r !== !1 && t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function (e, i, n) {
            var o = n.options;
            n.snapElements = [], t(o.snap.constructor !== String ? o.snap.items || ":data(ui-draggable)" : o.snap).each(function () {
                var e = t(this),
                    i = e.offset();
                this !== n.element[0] && n.snapElements.push({
                    item: this,
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function (e, i, n) {
            var o, r, s, a, l, u, c, h, d, p, f = n.options,
                m = f.snapTolerance,
                g = i.offset.left,
                v = g + n.helperProportions.width,
                y = i.offset.top,
                b = y + n.helperProportions.height;
            for (d = n.snapElements.length - 1; d >= 0; d--) l = n.snapElements[d].left - n.margins.left, u = l + n.snapElements[d].width, c = n.snapElements[d].top - n.margins.top, h = c + n.snapElements[d].height, l - m > v || g > u + m || c - m > b || y > h + m || !t.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {
                snapItem: n.snapElements[d].item
            })), n.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (o = Math.abs(c - b) <= m, r = Math.abs(h - y) <= m, s = Math.abs(l - v) <= m, a = Math.abs(u - g) <= m, o && (i.position.top = n._convertPositionTo("relative", {
                top: c - n.helperProportions.height,
                left: 0
            }).top), r && (i.position.top = n._convertPositionTo("relative", {
                top: h,
                left: 0
            }).top), s && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: l - n.helperProportions.width
            }).left), a && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: u
            }).left)), p = o || r || s || a, "outer" !== f.snapMode && (o = Math.abs(c - y) <= m, r = Math.abs(h - b) <= m, s = Math.abs(l - g) <= m, a = Math.abs(u - v) <= m, o && (i.position.top = n._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top), r && (i.position.top = n._convertPositionTo("relative", {
                top: h - n.helperProportions.height,
                left: 0
            }).top), s && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left), a && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: u - n.helperProportions.width
            }).left)), !n.snapElements[d].snapping && (o || r || s || a || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {
                snapItem: n.snapElements[d].item
            })), n.snapElements[d].snapping = o || r || s || a || p)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function (e, i, n) {
            var o, r = n.options,
                s = t.makeArray(t(r.stack)).sort(function (e, i) {
                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                });
            s.length && (o = parseInt(t(s[0]).css("zIndex"), 10) || 0, t(s).each(function (e) {
                t(this).css("zIndex", o + e)
            }), this.css("zIndex", o + s.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function (e, i, n) {
            var o = t(i.helper),
                r = n.options;
            o.css("zIndex") && (r._zIndex = o.css("zIndex")), o.css("zIndex", r.zIndex)
        },
        stop: function (e, i, n) {
            var o = n.options;
            o._zIndex && t(i.helper).css("zIndex", o._zIndex)
        }
    }), t.ui.draggable
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    return function () {
        function e(t, e, i) {
            return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
        }

        function i(e, i) {
            return parseInt(t.css(e, i), 10) || 0
        }

        function n(e) {
            var i = e[0];
            return 9 === i.nodeType ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : t.isWindow(i) ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                }
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            } : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset()
            }
        }
        t.ui = t.ui || {};
        var o, r, s = Math.max,
            a = Math.abs,
            l = Math.round,
            u = /left|center|right/,
            c = /top|center|bottom/,
            h = /[\+\-]\d+(\.[\d]+)?%?/,
            d = /^\w+/,
            p = /%$/,
            f = t.fn.position;
        t.position = {
                scrollbarWidth: function () {
                    if (void 0 !== o) return o;
                    var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        r = n.children()[0];
                    return t("body").append(n), e = r.offsetWidth, n.css("overflow", "scroll"), i = r.offsetWidth, e === i && (i = n[0].clientWidth), n.remove(), o = e - i
                },
                getScrollInfo: function (e) {
                    var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                        n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                        o = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                        r = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
                    return {
                        width: r ? t.position.scrollbarWidth() : 0,
                        height: o ? t.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function (e) {
                    var i = t(e || window),
                        n = t.isWindow(i[0]),
                        o = !!i[0] && 9 === i[0].nodeType;
                    return {
                        element: i,
                        isWindow: n,
                        isDocument: o,
                        offset: i.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: n || o ? i.width() : i.outerWidth(),
                        height: n || o ? i.height() : i.outerHeight()
                    }
                }
            }, t.fn.position = function (o) {
                if (!o || !o.of) return f.apply(this, arguments);
                o = t.extend({}, o);
                var p, m, g, v, y, b, _ = t(o.of),
                    w = t.position.getWithinInfo(o.within),
                    k = t.position.getScrollInfo(w),
                    x = (o.collision || "flip").split(" "),
                    D = {};
                return b = n(_), _[0].preventDefault && (o.at = "left top"), m = b.width, g = b.height, v = b.offset, y = t.extend({}, v), t.each(["my", "at"], function () {
                    var t, e, i = (o[this] || "").split(" ");
                    1 === i.length && (i = u.test(i[0]) ? i.concat(["center"]) : c.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = u.test(i[0]) ? i[0] : "center", i[1] = c.test(i[1]) ? i[1] : "center", t = h.exec(i[0]), e = h.exec(i[1]), D[this] = [t ? t[0] : 0, e ? e[0] : 0], o[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
                }), 1 === x.length && (x[1] = x[0]), "right" === o.at[0] ? y.left += m : "center" === o.at[0] && (y.left += m / 2), "bottom" === o.at[1] ? y.top += g : "center" === o.at[1] && (y.top += g / 2), p = e(D.at, m, g), y.left += p[0], y.top += p[1], this.each(function () {
                    var n, u, c = t(this),
                        h = c.outerWidth(),
                        d = c.outerHeight(),
                        f = i(this, "marginLeft"),
                        b = i(this, "marginTop"),
                        C = h + f + i(this, "marginRight") + k.width,
                        T = d + b + i(this, "marginBottom") + k.height,
                        S = t.extend({}, y),
                        E = e(D.my, c.outerWidth(), c.outerHeight());
                    "right" === o.my[0] ? S.left -= h : "center" === o.my[0] && (S.left -= h / 2), "bottom" === o.my[1] ? S.top -= d : "center" === o.my[1] && (S.top -= d / 2), S.left += E[0], S.top += E[1], r || (S.left = l(S.left), S.top = l(S.top)), n = {
                        marginLeft: f,
                        marginTop: b
                    }, t.each(["left", "top"], function (e, i) {
                        t.ui.position[x[e]] && t.ui.position[x[e]][i](S, {
                            targetWidth: m,
                            targetHeight: g,
                            elemWidth: h,
                            elemHeight: d,
                            collisionPosition: n,
                            collisionWidth: C,
                            collisionHeight: T,
                            offset: [p[0] + E[0], p[1] + E[1]],
                            my: o.my,
                            at: o.at,
                            within: w,
                            elem: c
                        })
                    }), o.using && (u = function (t) {
                        var e = v.left - S.left,
                            i = e + m - h,
                            n = v.top - S.top,
                            r = n + g - d,
                            l = {
                                target: {
                                    element: _,
                                    left: v.left,
                                    top: v.top,
                                    width: m,
                                    height: g
                                },
                                element: {
                                    element: c,
                                    left: S.left,
                                    top: S.top,
                                    width: h,
                                    height: d
                                },
                                horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                                vertical: 0 > r ? "top" : n > 0 ? "bottom" : "middle"
                            };
                        h > m && a(e + i) < m && (l.horizontal = "center"), d > g && a(n + r) < g && (l.vertical = "middle"), l.important = s(a(e), a(i)) > s(a(n), a(r)) ? "horizontal" : "vertical", o.using.call(this, t, l)
                    }), c.offset(t.extend(S, {
                        using: u
                    }))
                })
            }, t.ui.position = {
                fit: {
                    left: function (t, e) {
                        var i, n = e.within,
                            o = n.isWindow ? n.scrollLeft : n.offset.left,
                            r = n.width,
                            a = t.left - e.collisionPosition.marginLeft,
                            l = o - a,
                            u = a + e.collisionWidth - r - o;
                        e.collisionWidth > r ? l > 0 && 0 >= u ? (i = t.left + l + e.collisionWidth - r - o, t.left += l - i) : t.left = u > 0 && 0 >= l ? o : l > u ? o + r - e.collisionWidth : o : l > 0 ? t.left += l : u > 0 ? t.left -= u : t.left = s(t.left - a, t.left)
                    },
                    top: function (t, e) {
                        var i, n = e.within,
                            o = n.isWindow ? n.scrollTop : n.offset.top,
                            r = e.within.height,
                            a = t.top - e.collisionPosition.marginTop,
                            l = o - a,
                            u = a + e.collisionHeight - r - o;
                        e.collisionHeight > r ? l > 0 && 0 >= u ? (i = t.top + l + e.collisionHeight - r - o, t.top += l - i) : t.top = u > 0 && 0 >= l ? o : l > u ? o + r - e.collisionHeight : o : l > 0 ? t.top += l : u > 0 ? t.top -= u : t.top = s(t.top - a, t.top)
                    }
                },
                flip: {
                    left: function (t, e) {
                        var i, n, o = e.within,
                            r = o.offset.left + o.scrollLeft,
                            s = o.width,
                            l = o.isWindow ? o.scrollLeft : o.offset.left,
                            u = t.left - e.collisionPosition.marginLeft,
                            c = u - l,
                            h = u + e.collisionWidth - s - l,
                            d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            f = -2 * e.offset[0];
                        0 > c ? (i = t.left + d + p + f + e.collisionWidth - s - r, (0 > i || i < a(c)) && (t.left += d + p + f)) : h > 0 && (n = t.left - e.collisionPosition.marginLeft + d + p + f - l, (n > 0 || a(n) < h) && (t.left += d + p + f))
                    },
                    top: function (t, e) {
                        var i, n, o = e.within,
                            r = o.offset.top + o.scrollTop,
                            s = o.height,
                            l = o.isWindow ? o.scrollTop : o.offset.top,
                            u = t.top - e.collisionPosition.marginTop,
                            c = u - l,
                            h = u + e.collisionHeight - s - l,
                            d = "top" === e.my[1],
                            p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            m = -2 * e.offset[1];
                        0 > c ? (n = t.top + p + f + m + e.collisionHeight - s - r, t.top + p + f + m > c && (0 > n || n < a(c)) && (t.top += p + f + m)) : h > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - l, t.top + p + f + m > h && (i > 0 || a(i) < h) && (t.top += p + f + m))
                    }
                },
                flipfit: {
                    left: function () {
                        t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function () {
                        t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function () {
                var e, i, n, o, s, a = document.getElementsByTagName("body")[0],
                    l = document.createElement("div");
                e = document.createElement(a ? "div" : "body"), n = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                }, a && t.extend(n, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
                for (s in n) e.style[s] = n[s];
                e.appendChild(l), i = a || document.documentElement, i.insertBefore(e, i.firstChild), l.style.cssText = "position: absolute; left: 10.7432222px;", o = t(l).offset().left, r = o > 10 && 11 > o, e.innerHTML = "", i.removeChild(e)
            }()
    }(), t.ui.position
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], t) : t(jQuery)
}(function (t) {
    return t.widget("ui.resizable", t.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function (t) {
            return parseInt(t, 10) || 0
        },
        _isNumber: function (t) {
            return !isNaN(parseInt(t, 10))
        },
        _hasScroll: function (e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                o = !1;
            return e[n] > 0 ? !0 : (e[n] = 1, o = e[n] > 0, e[n] = 0, o)
        },
        _create: function () {
            var e, i, n, o, r, s = this,
                a = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {
                    _aspectRatio: !!a.aspectRatio,
                    aspectRatio: a.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; i < e.length; i++) n = t.trim(e[i]), r = "ui-resizable-" + n, o = t("<div class='ui-resizable-handle " + r + "'></div>"), o.css({
                    zIndex: a.zIndex
                }), "se" === n && o.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[n] = ".ui-resizable-" + n, this.element.append(o);
            this._renderAxis = function (e) {
                var i, n, o, r;
                e = e || this.element;
                for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = this.element.children(this.handles[i]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (n = t(this.handles[i], this.element), r = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), o = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(o, r), this._proportionallyResize()), t(this.handles[i]).length
            }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                s.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), s.axis = o && o[1] ? o[1] : "se")
            }), a.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                a.disabled || (t(this).removeClass("ui-resizable-autohide"), s._handles.show())
            }).mouseleave(function () {
                a.disabled || s.resizing || (t(this).addClass("ui-resizable-autohide"), s._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var e, i = function (e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function (e) {
            var i, n, o = !1;
            for (i in this.handles) n = t(this.handles[i])[0], (n === e.target || t.contains(n, e.target)) && (o = !0);
            return !this.options.disabled && o
        },
        _mouseStart: function (e) {
            var i, n, o, r = this.options,
                s = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), r.containment && (i += t(r.containment).scrollLeft() || 0, n += t(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: i,
                top: n
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: s.width(),
                height: s.height()
            }, this.originalSize = this._helper ? {
                width: s.outerWidth(),
                height: s.outerHeight()
            } : {
                width: s.width(),
                height: s.height()
            }, this.sizeDiff = {
                width: s.outerWidth() - s.width(),
                height: s.outerHeight() - s.height()
            }, this.originalPosition = {
                left: i,
                top: n
            }, this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            }, this.aspectRatio = "number" == typeof r.aspectRatio ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === o ? this.axis + "-resize" : o), s.addClass("ui-resizable-resizing"), this._propagate("start", e), !0
        },
        _mouseDrag: function (e) {
            var i, n, o = this.originalMousePosition,
                r = this.axis,
                s = e.pageX - o.left || 0,
                a = e.pageY - o.top || 0,
                l = this._change[r];
            return this._updatePrevProperties(), l ? (i = l.apply(this, [e, s, a]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1
        },
        _mouseStop: function (e) {
            this.resizing = !1;
            var i, n, o, r, s, a, l, u = this.options,
                c = this;
            return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), o = n && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, r = n ? 0 : c.sizeDiff.width, s = {
                width: c.helper.width() - r,
                height: c.helper.height() - o
            }, a = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, l = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, u.animate || this.element.css(t.extend(s, {
                top: l,
                left: a
            })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !u.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function () {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function () {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
        },
        _updateVirtualBoundaries: function (t) {
            var e, i, n, o, r, s = this.options;
            r = {
                minWidth: this._isNumber(s.minWidth) ? s.minWidth : 0,
                maxWidth: this._isNumber(s.maxWidth) ? s.maxWidth : 1 / 0,
                minHeight: this._isNumber(s.minHeight) ? s.minHeight : 0,
                maxHeight: this._isNumber(s.maxHeight) ? s.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = r.minHeight * this.aspectRatio, n = r.minWidth / this.aspectRatio, i = r.maxHeight * this.aspectRatio, o = r.maxWidth / this.aspectRatio, e > r.minWidth && (r.minWidth = e), n > r.minHeight && (r.minHeight = n), i < r.maxWidth && (r.maxWidth = i), o < r.maxHeight && (r.maxHeight = o)), this._vBoundaries = r
        },
        _updateCache: function (t) {
            this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function (t) {
            var e = this.position,
                i = this.size,
                n = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function (t) {
            var e = this._vBoundaries,
                i = this.axis,
                n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                o = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                r = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                s = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                a = this.originalPosition.left + this.originalSize.width,
                l = this.position.top + this.size.height,
                u = /sw|nw|w/.test(i),
                c = /nw|ne|n/.test(i);
            return r && (t.width = e.minWidth), s && (t.height = e.minHeight), n && (t.width = e.maxWidth), o && (t.height = e.maxHeight), r && u && (t.left = a - e.minWidth), n && u && (t.left = a - e.maxWidth), s && c && (t.top = l - e.minHeight), o && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _getPaddingPlusBorderDimensions: function (t) {
            for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], o = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseInt(n[e], 10) || 0, i[e] += parseInt(o[e], 10) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length)
                for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                    height: i.height() - this.outerDimensions.height || 0,
                    width: i.width() - this.outerDimensions.width || 0
                })
        },
        _renderProxy: function () {
            var e = this.element,
                i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function (t, e) {
                var i = this.originalSize,
                    n = this.originalPosition;
                return {
                    left: n.left + e,
                    width: i.width - e
                }
            },
            n: function (t, e, i) {
                var n = this.originalSize,
                    o = this.originalPosition;
                return {
                    top: o.top + i,
                    height: n.height - i
                }
            },
            s: function (t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function (e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
            },
            sw: function (e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
            },
            ne: function (e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
            },
            nw: function (e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
            }
        },
        _propagate: function (e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function (e) {
            var i = t(this).resizable("instance"),
                n = i.options,
                o = i._proportionallyResizeElements,
                r = o.length && /textarea/i.test(o[0].nodeName),
                s = r && i._hasScroll(o[0], "left") ? 0 : i.sizeDiff.height,
                a = r ? 0 : i.sizeDiff.width,
                l = {
                    width: i.size.width - a,
                    height: i.size.height - s
                },
                u = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, c && u ? {
                top: c,
                left: u
            } : {}), {
                duration: n.animateDuration,
                easing: n.animateEasing,
                step: function () {
                    var n = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    o && o.length && t(o[0]).css({
                        width: n.width,
                        height: n.height
                    }), i._updateCache(n), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function () {
            var e, i, n, o, r, s, a, l = t(this).resizable("instance"),
                u = l.options,
                c = l.element,
                h = u.containment,
                d = h instanceof t ? h.get(0) : /parent/.test(h) ? c.parent().get(0) : h;
            d && (l.containerElement = t(d), /document/.test(h) || h === document ? (l.containerOffset = {
                left: 0,
                top: 0
            }, l.containerPosition = {
                left: 0,
                top: 0
            }, l.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
                i[t] = l._num(e.css("padding" + n))
            }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                height: e.innerHeight() - i[3],
                width: e.innerWidth() - i[1]
            }, n = l.containerOffset, o = l.containerSize.height, r = l.containerSize.width, s = l._hasScroll(d, "left") ? d.scrollWidth : r, a = l._hasScroll(d) ? d.scrollHeight : o, l.parentData = {
                element: d,
                left: n.left,
                top: n.top,
                width: s,
                height: a
            }))
        },
        resize: function (e) {
            var i, n, o, r, s = t(this).resizable("instance"),
                a = s.options,
                l = s.containerOffset,
                u = s.position,
                c = s._aspectRatio || e.shiftKey,
                h = {
                    top: 0,
                    left: 0
                },
                d = s.containerElement,
                p = !0;
            d[0] !== document && /static/.test(d.css("position")) && (h = l), u.left < (s._helper ? l.left : 0) && (s.size.width = s.size.width + (s._helper ? s.position.left - l.left : s.position.left - h.left), c && (s.size.height = s.size.width / s.aspectRatio, p = !1), s.position.left = a.helper ? l.left : 0), u.top < (s._helper ? l.top : 0) && (s.size.height = s.size.height + (s._helper ? s.position.top - l.top : s.position.top), c && (s.size.width = s.size.height * s.aspectRatio, p = !1), s.position.top = s._helper ? l.top : 0), o = s.containerElement.get(0) === s.element.parent().get(0), r = /relative|absolute/.test(s.containerElement.css("position")), o && r ? (s.offset.left = s.parentData.left + s.position.left, s.offset.top = s.parentData.top + s.position.top) : (s.offset.left = s.element.offset().left, s.offset.top = s.element.offset().top), i = Math.abs(s.sizeDiff.width + (s._helper ? s.offset.left - h.left : s.offset.left - l.left)), n = Math.abs(s.sizeDiff.height + (s._helper ? s.offset.top - h.top : s.offset.top - l.top)), i + s.size.width >= s.parentData.width && (s.size.width = s.parentData.width - i, c && (s.size.height = s.size.width / s.aspectRatio, p = !1)), n + s.size.height >= s.parentData.height && (s.size.height = s.parentData.height - n, c && (s.size.width = s.size.height * s.aspectRatio, p = !1)), p || (s.position.left = s.prevPosition.left, s.position.top = s.prevPosition.top, s.size.width = s.prevSize.width, s.size.height = s.prevSize.height)
        },
        stop: function () {
            var e = t(this).resizable("instance"),
                i = e.options,
                n = e.containerOffset,
                o = e.containerPosition,
                r = e.containerElement,
                s = t(e.helper),
                a = s.offset(),
                l = s.outerWidth() - e.sizeDiff.width,
                u = s.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(r.css("position")) && t(this).css({
                left: a.left - o.left - n.left,
                width: l,
                height: u
            }), e._helper && !i.animate && /static/.test(r.css("position")) && t(this).css({
                left: a.left - o.left - n.left,
                width: l,
                height: u
            })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var e = t(this).resizable("instance"),
                i = e.options,
                n = function (e) {
                    t(e).each(function () {
                        var e = t(this);
                        e.data("ui-resizable-alsoresize", {
                            width: parseInt(e.width(), 10),
                            height: parseInt(e.height(), 10),
                            left: parseInt(e.css("left"), 10),
                            top: parseInt(e.css("top"), 10)
                        })
                    })
                };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? n(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], n(i.alsoResize)) : t.each(i.alsoResize, function (t) {
                n(t)
            })
        },
        resize: function (e, i) {
            var n = t(this).resizable("instance"),
                o = n.options,
                r = n.originalSize,
                s = n.originalPosition,
                a = {
                    height: n.size.height - r.height || 0,
                    width: n.size.width - r.width || 0,
                    top: n.position.top - s.top || 0,
                    left: n.position.left - s.left || 0
                },
                l = function (e, n) {
                    t(e).each(function () {
                        var e = t(this),
                            o = t(this).data("ui-resizable-alsoresize"),
                            r = {},
                            s = n && n.length ? n : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        t.each(s, function (t, e) {
                            var i = (o[e] || 0) + (a[e] || 0);
                            i && i >= 0 && (r[e] = i || null)
                        }), e.css(r)
                    })
                };
            "object" != typeof o.alsoResize || o.alsoResize.nodeType ? l(o.alsoResize) : t.each(o.alsoResize, function (t, e) {
                l(t, e)
            })
        },
        stop: function () {
            t(this).removeData("resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var e = t(this).resizable("instance"),
                i = e.options,
                n = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: n.height,
                width: n.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
        },
        resize: function () {
            var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function () {
            var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var e, i = t(this).resizable("instance"),
                n = i.options,
                o = i.size,
                r = i.originalSize,
                s = i.originalPosition,
                a = i.axis,
                l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                u = l[0] || 1,
                c = l[1] || 1,
                h = Math.round((o.width - r.width) / u) * u,
                d = Math.round((o.height - r.height) / c) * c,
                p = r.width + h,
                f = r.height + d,
                m = n.maxWidth && n.maxWidth < p,
                g = n.maxHeight && n.maxHeight < f,
                v = n.minWidth && n.minWidth > p,
                y = n.minHeight && n.minHeight > f;
            n.grid = l, v && (p += u), y && (f += c), m && (p -= u), g && (f -= c), /^(se|s|e)$/.test(a) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.top = s.top - d) : /^(sw)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.left = s.left - h) : ((0 >= f - c || 0 >= p - u) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = s.top - d) : (f = c - e.height, i.size.height = f, i.position.top = s.top + r.height - f), p - u > 0 ? (i.size.width = p, i.position.left = s.left - h) : (p = c - e.height, i.size.width = p, i.position.left = s.left + r.width - p))
        }
    }), t.ui.resizable
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./button", "./draggable", "./mouse", "./position", "./resizable"], t) : t(jQuery)
}(function (t) {
    return t.widget("ui.dialog", {
        version: "1.11.2",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "Close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function (e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function () {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _appendTo: function () {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
        },
        _destroy: function () {
            var t, e = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        disable: t.noop,
        enable: t.noop,
        close: function (e) {
            var i, n = this;
            if (this._isOpen && this._trigger("beforeClose", e) !== !1) {
                if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                    i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && t(i).blur()
                } catch (o) {}
                this._hide(this.uiDialog, this.options.hide, function () {
                    n._trigger("close", e)
                })
            }
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function () {
            this._moveToTop()
        },
        _moveToTop: function (e, i) {
            var n = !1,
                o = this.uiDialog.siblings(".ui-front:visible").map(function () {
                    return +t(this).css("z-index")
                }).get(),
                r = Math.max.apply(null, o);
            return r >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", r + 1), n = !0), n && !i && this._trigger("focus", e), n
        },
        open: function () {
            var e = this;
            return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
                e._focusTabbable(), e._trigger("focus")
            }), this._makeFocusTarget(), void this._trigger("open"))
        },
        _focusTabbable: function () {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
        },
        _keepFocus: function (e) {
            function i() {
                var e = this.document[0].activeElement,
                    i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                i || this._focusTabbable()
            }
            e.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function () {
            this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function (e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"),
                            n = i.filter(":first"),
                            o = i.filter(":last");
                        e.target !== o[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function () {
                            o.focus()
                        }), e.preventDefault()) : (this._delay(function () {
                            n.focus()
                        }), e.preventDefault())
                    }
                },
                mousedown: function (t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function () {
            var e;
            this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function (e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function (t) {
                    t.preventDefault(), this.close(t)
                }
            }), e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(e), this.uiDialog.attr({
                "aria-labelledby": e.attr("id")
            })
        },
        _title: function (t) {
            this.options.title || t.html("&#160;"), t.text(this.options.title)
        },
        _createButtonPane: function () {
            this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function () {
            var e = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (t.each(i, function (i, n) {
                var o, r;
                n = t.isFunction(n) ? {
                    click: n,
                    text: i
                } : n, n = t.extend({
                    type: "button"
                }, n), o = n.click, n.click = function () {
                    o.apply(e.element[0], arguments)
                }, r = {
                    icons: n.icons,
                    text: n.showText
                }, delete n.icons, delete n.showText, t("<button></button>", n).button(r).appendTo(e.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function () {
            function e(t) {
                return {
                    position: t.position,
                    offset: t.offset
                }
            }
            var i = this,
                n = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (n, o) {
                    t(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(o))
                },
                drag: function (t, n) {
                    i._trigger("drag", t, e(n))
                },
                stop: function (o, r) {
                    var s = r.offset.left - i.document.scrollLeft(),
                        a = r.offset.top - i.document.scrollTop();
                    n.position = {
                        my: "left top",
                        at: "left" + (s >= 0 ? "+" : "") + s + " top" + (a >= 0 ? "+" : "") + a,
                        of: i.window
                    }, t(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", o, e(r))
                }
            })
        },
        _makeResizable: function () {
            function e(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }
            var i = this,
                n = this.options,
                o = n.resizable,
                r = this.uiDialog.css("position"),
                s = "string" == typeof o ? o : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: n.maxWidth,
                maxHeight: n.maxHeight,
                minWidth: n.minWidth,
                minHeight: this._minHeight(),
                handles: s,
                start: function (n, o) {
                    t(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(o))
                },
                resize: function (t, n) {
                    i._trigger("resize", t, e(n))
                },
                stop: function (o, r) {
                    var s = i.uiDialog.offset(),
                        a = s.left - i.document.scrollLeft(),
                        l = s.top - i.document.scrollTop();
                    n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = {
                        my: "left top",
                        at: "left" + (a >= 0 ? "+" : "") + a + " top" + (l >= 0 ? "+" : "") + l,
                        of: i.window
                    }, t(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", o, e(r))
                }
            }).css("position", r)
        },
        _trackFocus: function () {
            this._on(this.widget(), {
                focusin: function (e) {
                    this._makeFocusTarget(), this._focusedElement = t(e.target)
                }
            })
        },
        _makeFocusTarget: function () {
            this._untrackInstance(), this._trackingInstances().unshift(this)
        },
        _untrackInstance: function () {
            var e = this._trackingInstances(),
                i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
        },
        _trackingInstances: function () {
            var t = this.document.data("ui-dialog-instances");
            return t || (t = [], this.document.data("ui-dialog-instances", t)), t
        },
        _minHeight: function () {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function () {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function (e) {
            var i = this,
                n = !1,
                o = {};
            t.each(e, function (t, e) {
                i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (o[t] = e)
            }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", o)
        },
        _setOption: function (t, e) {
            var i, n, o = this.uiDialog;
            "dialogClass" === t && o.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                label: "" + e
            }), "draggable" === t && (i = o.is(":data(ui-draggable)"), i && !e && o.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (n = o.is(":data(ui-resizable)"), n && !e && o.resizable("destroy"), n && "string" == typeof e && o.resizable("option", "handles", e), n || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function () {
            var t, e, i, n = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function (e) {
            return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
        },
        _createOverlay: function () {
            if (this.options.modal) {
                var e = !0;
                this._delay(function () {
                    e = !1
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function (t) {
                        e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                }), this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function () {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
            }
        }
    })
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], t) : t(jQuery)
}(function (t) {
    return t.widget("ui.sortable", t.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function (t, e, i) {
            return t >= e && e + i > t
        },
        _isFloating: function (t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        },
        _create: function () {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || this._isFloating(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
        },
        _setOption: function (t, e) {
            this._super(t, e), "handle" === t && this._setHandleClassName()
        },
        _setHandleClassName: function () {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), t.each(this.items, function () {
                (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
            })
        },
        _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function (e, i) {
            var n = null,
                o = !1,
                r = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
                return t.data(this, r.widgetName + "-item") === r ? (n = t(this), !1) : void 0
            }), t.data(e.target, r.widgetName + "-item") === r && (n = t(e.target)), n && (!this.options.handle || i || (t(this.options.handle, n).find("*").addBack().each(function () {
                this === e.target && (o = !0)
            }), o)) ? (this.currentItem = n, this._removeCurrentsFromItems(), !0) : !1)
        },
        _mouseStart: function (e, i, n) {
            var o, r, s = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && "auto" !== s.cursor && (r = this.document.find("body"), this.storedCursor = r.css("cursor"), r.css("cursor", s.cursor), this.storedStylesheet = t("<style>*{ cursor: " + s.cursor + " !important; }</style>").appendTo(r)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                for (o = this.containers.length - 1; o >= 0; o--) this.containers[o]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function (e) {
            var i, n, o, r, s = this.options,
                a = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - this.overflowOffset.top < s.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - s.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - this.overflowOffset.left < s.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - s.scrollSpeed)) : (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? a = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (a = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed)), e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? a = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (a = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed))), a !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (n = this.items[i], o = n.item[0], r = this._intersectsWithPointer(n), r && n.instance === this.currentContainer && o !== this.currentItem[0] && this.placeholder[1 === r ? "next" : "prev"]()[0] !== o && !t.contains(this.placeholder[0], o) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], o) : !0)) {
                    if (this.direction = 1 === r ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                    this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var n = this,
                        o = this.placeholder.offset(),
                        r = this.options.axis,
                        s = {};
                    r && "x" !== r || (s.left = o.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), r && "y" !== r || (s.top = o.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(s, parseInt(this.options.revert, 10) || 500, function () {
                        n._clear(e)
                    })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, t(i).each(function () {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !n.length && e.key && n.push(e.key + "="), n.join("&")
        },
        toArray: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, i.each(function () {
                n.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), n
        },
        _intersectsWith: function (t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                n = this.positionAbs.top,
                o = n + this.helperProportions.height,
                r = t.left,
                s = r + t.width,
                a = t.top,
                l = a + t.height,
                u = this.offset.click.top,
                c = this.offset.click.left,
                h = "x" === this.options.axis || n + u > a && l > n + u,
                d = "y" === this.options.axis || e + c > r && s > e + c,
                p = h && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : r < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < s && a < n + this.helperProportions.height / 2 && o - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function (t) {
            var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                n = e && i,
                o = this._getDragVerticalDirection(),
                r = this._getDragHorizontalDirection();
            return n ? this.floating ? r && "right" === r || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
        },
        _intersectsWithSides: function (t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                n = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && i || "left" === o && !i : n && ("down" === n && e || "up" === n && !e)
        },
        _getDragVerticalDirection: function () {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function (t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function () {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function (e) {
            function i() {
                a.push(this)
            }
            var n, o, r, s, a = [],
                l = [],
                u = this._connectWith();
            if (u && e)
                for (n = u.length - 1; n >= 0; n--)
                    for (r = t(u[n]), o = r.length - 1; o >= 0; o--) s = t.data(r[o], this.widgetFullName), s && s !== this && !s.options.disabled && l.push([t.isFunction(s.options.items) ? s.options.items.call(s.element) : t(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s]);
            for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
            return t(a)
        },
        _removeCurrentsFromItems: function () {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function (t) {
                for (var i = 0; i < e.length; i++)
                    if (e[i] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function (e) {
            this.items = [], this.containers = [this];
            var i, n, o, r, s, a, l, u, c = this.items,
                h = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]
                ],
                d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (o = t(d[i]), n = o.length - 1; n >= 0; n--) r = t.data(o[n], this.widgetFullName), r && r !== this && !r.options.disabled && (h.push([t.isFunction(r.options.items) ? r.options.items.call(r.element[0], e, {
                        item: this.currentItem
                    }) : t(r.options.items, r.element), r]), this.containers.push(r));
            for (i = h.length - 1; i >= 0; i--)
                for (s = h[i][1], a = h[i][0], n = 0, u = a.length; u > n; n++) l = t(a[n]), l.data(this.widgetName + "-item", s), c.push({
                    item: l,
                    instance: s,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function (e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, n, o, r;
            for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (o = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = o.outerWidth(), n.height = o.outerHeight()), r = o.offset(), n.left = r.left, n.top = r.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) r = this.containers[i].element.offset(), this.containers[i].containerCache.left = r.left, this.containers[i].containerCache.top = r.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function (e) {
            e = e || this;
            var i, n = e.options;
            n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                element: function () {
                    var n = e.currentItem[0].nodeName.toLowerCase(),
                        o = t("<" + n + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === n ? e.currentItem.children().each(function () {
                        t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(o)
                    }) : "img" === n && o.attr("src", e.currentItem.attr("src")), i || o.css("visibility", "hidden"), o
                },
                update: function (t, o) {
                    (!i || n.forcePlaceholderSize) && (o.height() || o.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), o.width() || o.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function (e) {
            var i, n, o, r, s, a, l, u, c, h, d = null,
                p = null;
            for (i = this.containers.length - 1; i >= 0; i--)
                if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                    if (this._intersectsWith(this.containers[i].containerCache)) {
                        if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                        d = this.containers[i], p = i
                    } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (d)
                if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                else {
                    for (o = 1e4, r = null, c = d.floating || this._isFloating(this.currentItem), s = c ? "left" : "top", a = c ? "width" : "height", h = c ? "clientX" : "clientY", n = this.items.length - 1; n >= 0; n--) t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[s], u = !1, e[h] - l > this.items[n][a] / 2 && (u = !0), Math.abs(e[h] - l) < o && (o = Math.abs(e[h] - l), r = this.items[n], this.direction = u ? "up" : "down"));
                    if (!r && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                    r ? this._rearrange(e, r, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                }
        },
        _createHelper: function (e) {
            var i = this.options,
                n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var e, i, n, o = this.options;
            "parent" === o.containment && (o.containment = this.helper[0].parentNode), ("document" === o.containment || "window" === o.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === o.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === o.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(o.containment) || (e = t(o.containment)[0], i = t(o.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function (e, i) {
            i || (i = this.position);
            var n = "absolute" === e ? 1 : -1,
                o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                r = /(html|body)/i.test(o[0].tagName);
            return {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : o.scrollTop()) * n,
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : o.scrollLeft()) * n
            }
        },
        _generatePosition: function (e) {
            var i, n, o = this.options,
                r = e.pageX,
                s = e.pageY,
                a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (r = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (r = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)), o.grid && (i = this.originalPageY + Math.round((s - this.originalPageY) / o.grid[1]) * o.grid[1], s = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - o.grid[1] : i + o.grid[1] : i, n = this.originalPageX + Math.round((r - this.originalPageX) / o.grid[0]) * o.grid[0], r = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - o.grid[0] : n + o.grid[0] : n)), {
                top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
            }
        },
        _rearrange: function (t, e, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var o = this.counter;
            this._delay(function () {
                o === this.counter && this.refreshPositions(!n)
            })
        },
        _clear: function (t, e) {
            function i(t, e, i) {
                return function (n) {
                    i._trigger(t, n, e._uiHash(e))
                }
            }
            this.reverting = !1;
            var n, o = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && o.push(function (t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || o.push(function (t) {
                    this._trigger("update", t, this._uiHash())
                }), this !== this.currentContainer && (e || (o.push(function (t) {
                    this._trigger("remove", t, this._uiHash())
                }), o.push(function (t) {
                    return function (e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), o.push(function (t) {
                    return function (e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || o.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (o.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                for (n = 0; n < o.length; n++) o[n].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function () {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    })
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], t) : t(jQuery)
}(function (t) {
    return t.widget("ui.tabs", {
        version: "1.11.2",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function () {
            var t = /#.*$/;
            return function (e) {
                var i, n;
                e = e.cloneNode(!1), i = e.href.replace(t, ""), n = location.href.replace(t, "");
                try {
                    i = decodeURIComponent(i)
                } catch (o) {}
                try {
                    n = decodeURIComponent(n)
                } catch (o) {}
                return e.hash.length > 1 && i === n
            }
        }(),
        _create: function () {
            var e = this,
                i = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                return e.tabs.index(t)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function () {
            var e = this.options.active,
                i = this.options.collapsible,
                n = location.hash.substring(1);
            return null === e && (n && this.tabs.each(function (i, o) {
                return t(o).attr("aria-controls") === n ? (e = i, !1) : void 0
            }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e
        },
        _getCreateEventData: function () {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            }
        },
        _tabKeydown: function (e) {
            var i = t(this.document[0].activeElement).closest("li"),
                n = this.tabs.index(i),
                o = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        n++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        o = !1, n--;
                        break;
                    case t.ui.keyCode.END:
                        n = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        n = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(n === this.options.active ? !1 : n);
                    default:
                        return
                }
                e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, o), e.ctrlKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", n)
                }, this.delay))
            }
        },
        _panelKeydown: function (e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
        },
        _handlePageNav: function (e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function (e, i) {
            function n() {
                return e > o && (e = 0), 0 > e && (e = o), e
            }
            for (var o = this.tabs.length - 1; - 1 !== t.inArray(n(), this.options.disabled);) e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function (t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
        },
        _setOption: function (t, e) {
            return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
        },
        _sanitizeSelector: function (t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function () {
            var e = this.options,
                i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
                return i.index(t)
            }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function () {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function () {
            var e = this,
                i = this.tabs,
                n = this.anchors,
                o = this.panels;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function (e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function () {
                return t("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = t(), this.anchors.each(function (i, n) {
                var o, r, s, a = t(n).uniqueId().attr("id"),
                    l = t(n).closest("li"),
                    u = l.attr("aria-controls");
                e._isLocal(n) ? (o = n.hash, s = o.substring(1), r = e.element.find(e._sanitizeSelector(o))) : (s = l.attr("aria-controls") || t({}).uniqueId()[0].id, o = "#" + s, r = e.element.find(o), r.length || (r = e._createPanel(s), r.insertAfter(e.panels[i - 1] || e.tablist)), r.attr("aria-live", "polite")), r.length && (e.panels = e.panels.add(r)), u && l.data("ui-tabs-aria-controls", u), l.attr({
                    "aria-controls": s,
                    "aria-labelledby": a
                }), r.attr("aria-labelledby", a)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(o.not(this.panels)))
        },
        _getList: function () {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function (e) {
            return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function (e) {
            t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
            for (var i, n = 0; i = this.tabs[n]; n++) e === !0 || -1 !== t.inArray(n, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = e
        },
        _setupEvents: function (e) {
            var i = {};
            e && t.each(e.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function (t) {
                    t.preventDefault()
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function (e) {
            var i, n = this.element.parent();
            "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                var e = t(this),
                    n = e.css("position");
                "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function () {
                i -= t(this).outerHeight(!0)
            }), this.panels.each(function () {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function (e) {
            var i = this.options,
                n = this.active,
                o = t(e.currentTarget),
                r = o.closest("li"),
                s = r[0] === n[0],
                a = s && i.collapsible,
                l = a ? t() : this._getPanelForTab(r),
                u = n.length ? this._getPanelForTab(n) : t(),
                c = {
                    oldTab: n,
                    oldPanel: u,
                    newTab: a ? t() : r,
                    newPanel: l
                };
            e.preventDefault(), r.hasClass("ui-state-disabled") || r.hasClass("ui-tabs-loading") || this.running || s && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = a ? !1 : this.tabs.index(r), this.active = s ? t() : r, this.xhr && this.xhr.abort(), u.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(r), e), this._toggle(e, c))
        },
        _toggle: function (e, i) {
            function n() {
                r.running = !1, r._trigger("activate", e, i)
            }

            function o() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), s.length && r.options.show ? r._show(s, r.options.show, n) : (s.show(), n())
            }
            var r = this,
                s = i.newPanel,
                a = i.oldPanel;
            this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function () {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), o()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a.hide(), o()), a.attr("aria-hidden", "true"), i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), s.length && a.length ? i.oldTab.attr("tabIndex", -1) : s.length && this.tabs.filter(function () {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), s.attr("aria-hidden", "false"), i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function (e) {
            var i, n = this._findActive(e);
            n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function (e) {
            return e === !1 ? t() : this.tabs.eq(e)
        },
        _getIndex: function (t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
        },
        _destroy: function () {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function () {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function () {
                var e = t(this),
                    i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function (e) {
            var i = this.options.disabled;
            i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function (t) {
                return t !== e ? t : null
            }) : t.map(this.tabs, function (t, i) {
                return i !== e ? i : null
            })), this._setupDisabled(i))
        },
        disable: function (e) {
            var i = this.options.disabled;
            if (i !== !0) {
                if (void 0 === e) i = !0;
                else {
                    if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                    i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                }
                this._setupDisabled(i)
            }
        },
        load: function (e, i) {
            e = this._getIndex(e);
            var n = this,
                o = this.tabs.eq(e),
                r = o.find(".ui-tabs-anchor"),
                s = this._getPanelForTab(o),
                a = {
                    tab: o,
                    panel: s
                };
            this._isLocal(r[0]) || (this.xhr = t.ajax(this._ajaxSettings(r, i, a)), this.xhr && "canceled" !== this.xhr.statusText && (o.addClass("ui-tabs-loading"), s.attr("aria-busy", "true"), this.xhr.success(function (t) {
                setTimeout(function () {
                    s.html(t), n._trigger("load", i, a)
                }, 1)
            }).complete(function (t, e) {
                setTimeout(function () {
                    "abort" === e && n.panels.stop(!1, !0), o.removeClass("ui-tabs-loading"), s.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function (e, i, n) {
            var o = this;
            return {
                url: e.attr("href"),
                beforeSend: function (e, r) {
                    return o._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: r
                    }, n))
                }
            }
        },
        _getPanelForTab: function (e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    })
}),
function (t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var i, n = t(document);
    t.rails = i = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        CSRFProtection: function (e) {
            var i = t('meta[name="csrf-token"]').attr("content");
            i && e.setRequestHeader("X-CSRF-Token", i)
        },
        refreshCSRFTokens: function () {
            var e = t("meta[name=csrf-token]").attr("content"),
                i = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + i + '"]').val(e)
        },
        fire: function (e, i, n) {
            var o = t.Event(i);
            return e.trigger(o, n), o.result !== !1
        },
        confirm: function (t) {
            return confirm(t)
        },
        ajax: function (e) {
            return t.ajax(e)
        },
        href: function (t) {
            return t.attr("href")
        },
        handleRemote: function (n) {
            var o, r, s, a, l, u, c, h;
            if (i.fire(n, "ajax:before")) {
                if (a = n.data("cross-domain"), l = a === e ? null : a, u = n.data("with-credentials") || null, c = n.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, n.is("form")) {
                    o = n.attr("method"), r = n.attr("action"), s = n.serializeArray();
                    var d = n.data("ujs:submit-button");
                    d && (s.push(d), n.data("ujs:submit-button", null))
                } else n.is(i.inputChangeSelector) ? (o = n.data("method"), r = n.data("url"), s = n.serialize(), n.data("params") && (s = s + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (o = n.data("method") || "get", r = n.data("url"), s = n.serialize(), n.data("params") && (s = s + "&" + n.data("params"))) : (o = n.data("method"), r = i.href(n), s = n.data("params") || null);
                return h = {
                    type: o || "GET",
                    data: s,
                    dataType: c,
                    beforeSend: function (t, o) {
                        return o.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), i.fire(n, "ajax:beforeSend", [t, o]) ? void n.trigger("ajax:send", t) : !1
                    },
                    success: function (t, e, i) {
                        n.trigger("ajax:success", [t, e, i])
                    },
                    complete: function (t, e) {
                        n.trigger("ajax:complete", [t, e])
                    },
                    error: function (t, e, i) {
                        n.trigger("ajax:error", [t, e, i])
                    },
                    crossDomain: l
                }, u && (h.xhrFields = {
                    withCredentials: u
                }), r && (h.url = r), i.ajax(h)
            }
            return !1
        },
        handleMethod: function (n) {
            var o = i.href(n),
                r = n.data("method"),
                s = n.attr("target"),
                a = t("meta[name=csrf-token]").attr("content"),
                l = t("meta[name=csrf-param]").attr("content"),
                u = t('<form method="post" action="' + o + '"></form>'),
                c = '<input name="_method" value="' + r + '" type="hidden" />';
            l !== e && a !== e && (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), s && u.attr("target", s), u.hide().append(c).appendTo("body"), u.submit()
        },
        formElements: function (e, i) {
            return e.is("form") ? t(e[0].elements).filter(i) : e.find(i)
        },
        disableFormElements: function (e) {
            i.formElements(e, i.disableSelector).each(function () {
                i.disableFormElement(t(this))
            })
        },
        disableFormElement: function (t) {
            var i, n;
            i = t.is("button") ? "html" : "val", n = t.data("disable-with"), t.data("ujs:enable-with", t[i]()), n !== e && t[i](n), t.prop("disabled", !0)
        },
        enableFormElements: function (e) {
            i.formElements(e, i.enableSelector).each(function () {
                i.enableFormElement(t(this))
            })
        },
        enableFormElement: function (t) {
            var e = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
        },
        allowAction: function (t) {
            var e, n = t.data("confirm"),
                o = !1;
            return n ? (i.fire(t, "confirm") && (o = i.confirm(n), e = i.fire(t, "confirm:complete", [o])), o && e) : !0
        },
        blankInputs: function (e, i, n) {
            var o, r, s = t(),
                a = i || "input,textarea",
                l = e.find(a);
            return l.each(function () {
                if (o = t(this), r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : o.val(), !r == !n) {
                    if (o.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + o.attr("name") + '"]').length) return !0;
                    s = s.add(o)
                }
            }), s.length ? s : !1
        },
        nonBlankInputs: function (t, e) {
            return i.blankInputs(t, e, !0)
        },
        stopEverything: function (e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function (t) {
            var n = t.data("disable-with");
            t.data("ujs:enable-with", t.html()), n !== e && t.html(n), t.bind("click.railsDisable", function (t) {
                return i.stopEverything(t)
            })
        },
        enableElement: function (t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
        }
    }, i.fire(n, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, n) {
        t.crossDomain || i.CSRFProtection(n)
    }), t(window).on("pageshow.rails", function () {
        t(t.rails.enableSelector).each(function () {
            var e = t(this);
            e.data("ujs:enable-with") && t.rails.enableFormElement(e)
        }), t(t.rails.linkDisableSelector).each(function () {
            var e = t(this);
            e.data("ujs:enable-with") && t.rails.enableElement(e)
        })
    }), n.delegate(i.linkDisableSelector, "ajax:complete", function () {
        i.enableElement(t(this))
    }), n.delegate(i.buttonDisableSelector, "ajax:complete", function () {
        i.enableFormElement(t(this))
    }), n.delegate(i.linkClickSelector, "click.rails", function (n) {
        var o = t(this),
            r = o.data("method"),
            s = o.data("params"),
            a = n.metaKey || n.ctrlKey;
        if (!i.allowAction(o)) return i.stopEverything(n);
        if (!a && o.is(i.linkDisableSelector) && i.disableElement(o), o.data("remote") !== e) {
            if (a && (!r || "GET" === r) && !s) return !0;
            var l = i.handleRemote(o);
            return l === !1 ? i.enableElement(o) : l.fail(function () {
                i.enableElement(o)
            }), !1
        }
        return r ? (i.handleMethod(o), !1) : void 0
    }), n.delegate(i.buttonClickSelector, "click.rails", function (e) {
        var n = t(this);
        if (!i.allowAction(n)) return i.stopEverything(e);
        n.is(i.buttonDisableSelector) && i.disableFormElement(n);
        var o = i.handleRemote(n);
        return o === !1 ? i.enableFormElement(n) : o.fail(function () {
            i.enableFormElement(n)
        }), !1
    }), n.delegate(i.inputChangeSelector, "change.rails", function (e) {
        var n = t(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
    }), n.delegate(i.formSubmitSelector, "submit.rails", function (n) {
        var o, r, s = t(this),
            a = s.data("remote") !== e;
        if (!i.allowAction(s)) return i.stopEverything(n);
        if (s.attr("novalidate") == e && (o = i.blankInputs(s, i.requiredInputSelector), o && i.fire(s, "ajax:aborted:required", [o]))) return i.stopEverything(n);
        if (a) {
            if (r = i.nonBlankInputs(s, i.fileInputSelector)) {
                setTimeout(function () {
                    i.disableFormElements(s)
                }, 13);
                var l = i.fire(s, "ajax:aborted:file", [r]);
                return l || setTimeout(function () {
                    i.enableFormElements(s)
                }, 13), l
            }
            return i.handleRemote(s), !1
        }
        setTimeout(function () {
            i.disableFormElements(s)
        }, 13)
    }), n.delegate(i.formInputClickSelector, "click.rails", function (e) {
        var n = t(this);
        if (!i.allowAction(n)) return i.stopEverything(e);
        var o = n.attr("name"),
            r = o ? {
                name: o,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", r)
    }), n.delegate(i.formSubmitSelector, "ajax:send.rails", function (e) {
        this == e.target && i.disableFormElements(t(this))
    }), n.delegate(i.formSubmitSelector, "ajax:complete.rails", function (e) {
        this == e.target && i.enableFormElements(t(this))
    }), t(function () {
        i.refreshCSRFTokens()
    }))
}(jQuery),
function () {
    window.ActiveAdmin = {}
}.call(this),
function () {
    $(document).on("ready page:load", function () {
        return $(".batch_actions_selector li a").click(function (t) {
            var e;
            return t.stopPropagation(), t.preventDefault(), (e = $(this).data("confirm")) ? ActiveAdmin.modal_dialog(e, $(this).data("inputs"), function (t) {
                return function (e) {
                    return $(t).trigger("confirm:complete", e)
                }
            }(this)) : $(this).trigger("confirm:complete")
        }), $(".batch_actions_selector li a").on("confirm:complete", function (t, e) {
            var i;
            return (i = JSON.stringify(e)) ? $("#batch_action_inputs").val(i) : $("#batch_action_inputs").attr("disabled", "disabled"), $("#batch_action").val($(this).data("action")), $("#collection_selection").submit()
        }), $(".batch_actions_selector").length && $(":checkbox.toggle_all").length ? ($(".paginated_collection table.index_table").length ? $(".paginated_collection table.index_table").tableCheckboxToggler() : $(".paginated_collection").checkboxToggler(), $(document).on("change", ".paginated_collection :checkbox", function () {
            return $(".batch_actions_selector").each($(".paginated_collection :checkbox:checked").length ? function () {
                return $(this).aaDropdownMenu("enable")
            } : function () {
                return $(this).aaDropdownMenu("disable")
            })
        })) : void 0
    })
}.call(this),
function () {
    ActiveAdmin.CheckboxToggler = function () {
        function t(t, e) {
            var i;
            this.options = t, this.container = e, i = {}, this.options = $.extend(i, t), this._init(), this._bind()
        }
        return t.prototype._init = function () {
            if (!this.container) throw new Error("Container element not found");
            if (this.$container = $(this.container), !this.$container.find(".toggle_all").length) throw new Error('"toggle all" checkbox not found');
            return this.toggle_all_checkbox = this.$container.find(".toggle_all"), this.checkboxes = this.$container.find(":checkbox").not(this.toggle_all_checkbox)
        }, t.prototype._bind = function () {
            return this.checkboxes.change(function (t) {
                return function (e) {
                    return t._didChangeCheckbox(e.target)
                }
            }(this)), this.toggle_all_checkbox.change(function (t) {
                return function () {
                    return t._didChangeToggleAllCheckbox()
                }
            }(this))
        }, t.prototype._didChangeCheckbox = function () {
            switch (this.checkboxes.filter(":checked").length) {
                case this.checkboxes.length - 1:
                    return this.toggle_all_checkbox.prop({
                        checked: null
                    });
                case this.checkboxes.length:
                    return this.toggle_all_checkbox.prop({
                        checked: !0
                    })
            }
        }, t.prototype._didChangeToggleAllCheckbox = function () {
            var t;
            return t = this.toggle_all_checkbox.prop("checked") ? !0 : null, this.checkboxes.each(function (e) {
                return function (i, n) {
                    return $(n).prop({
                        checked: t
                    }), e._didChangeCheckbox(n)
                }
            }(this))
        }, t
    }(), $.widget.bridge("checkboxToggler", ActiveAdmin.CheckboxToggler)
}.call(this),
function () {
    ActiveAdmin.DropdownMenu = function () {
        function t(t, e) {
            var i;
            this.options = t, this.element = e, this.$element = $(this.element), i = {
                fadeInDuration: 20,
                fadeOutDuration: 100,
                onClickActionItemCallback: null
            }, this.options = $.extend(i, t), this.isOpen = !1, this.$menuButton = this.$element.find(".dropdown_menu_button"), this.$menuList = this.$element.find(".dropdown_menu_list_wrapper"), this._buildMenuList(), this._bind()
        }
        return t.prototype.open = function () {
            return this.isOpen = !0, this.$menuList.fadeIn(this.options.fadeInDuration), this._position(), this
        }, t.prototype.close = function () {
            return this.isOpen = !1, this.$menuList.fadeOut(this.options.fadeOutDuration), this
        }, t.prototype.destroy = function () {
            return this.$element.unbind(), this.$element = null, this
        }, t.prototype.isDisabled = function () {
            return this.$menuButton.hasClass("disabled")
        }, t.prototype.disable = function () {
            return this.$menuButton.addClass("disabled")
        }, t.prototype.enable = function () {
            return this.$menuButton.removeClass("disabled")
        }, t.prototype.option = function (t, e) {
            return $.isPlainObject(t) ? this.options = $.extend(!0, this.options, t) : null != t ? this.options[t] : this.options[t] = e
        }, t.prototype._buildMenuList = function () {
            return this.$nipple = $('<div class="dropdown_menu_nipple"></div>'), this.$menuList.prepend(this.$nipple), this.$menuList.hide()
        }, t.prototype._bind = function () {
            return $("body").click(function (t) {
                return function () {
                    return t.isOpen ? t.close() : void 0
                }
            }(this)), this.$menuButton.click(function (t) {
                return function () {
                    return t.isDisabled() || (t.isOpen ? t.close() : t.open()), !1
                }
            }(this))
        }, t.prototype._position = function () {
            var t, e, i, n, o, r, s, a;
            return this.$menuList.css("top", this.$menuButton.position().top + this.$menuButton.outerHeight() + 10), e = this.$menuButton.position().left, t = this.$menuButton.outerWidth() / 2, i = e + 2 * t, r = this.$menuList.outerWidth() / 2, s = this.$nipple.outerWidth() / 2, a = $(window).width(), n = e + t - r, o = e + t + r, 0 > n ? (this.$menuList.css("left", e), this.$nipple.css("left", t - s)) : o > a ? (this.$menuList.css("right", a - i), this.$nipple.css("right", t - s)) : (this.$menuList.css("left", n), this.$nipple.css("left", r - s))
        }, t
    }(), $.widget.bridge("aaDropdownMenu", ActiveAdmin.DropdownMenu), $(document).on("ready page:load", function () {
        return $(".dropdown_menu").aaDropdownMenu()
    })
}.call(this),
function () {
    var t;
    ActiveAdmin.flash = t = function () {
        function t(t, e, i) {
            this.message = t, this.type = null != e ? e : "notice", this.reference = jQuery("<div>").addClass("flash flash_" + e).text(t), jQuery(".flashes").append(this.reference), null != i && this.close_after(i)
        }
        return t.error = function (t, e) {
            return new this(t, "error", e)
        }, t.notice = function (t, e) {
            return new this(t, "notice", e)
        }, t.prototype.reference = function () {
            return this.reference
        }, t.prototype.close_after = function (t) {
            return setTimeout(function (t) {
                return function () {
                    return t.close()
                }
            }(this), 1e3 * t)
        }, t.prototype.close = function () {
            return this.reference.remove()
        }, t
    }()
}.call(this),
function () {
    var t, e;
    $(function () {
        return $(document).on("click", "a.button.has_many_remove", function (t) {
            var i, n;
            return t.preventDefault(), i = $(this).closest(".has_many_container"), n = $(this).closest("fieldset"), e(i), i.trigger("has_many_remove:before", [n, i]), n.remove(), i.trigger("has_many_remove:after", [n, i])
        }), $(document).on("click", "a.button.has_many_add", function (t) {
            var i, n, o, r, s, a;
            return t.preventDefault(), s = $(this).closest(".has_many_container"), s.trigger(i = $.Event("has_many_add:before"), [s]), i.isDefaultPrevented() ? void 0 : (r = s.data("has_many_index") || s.children("fieldset").length - 1, s.data({
                has_many_index: ++r
            }), a = new RegExp($(this).data("placeholder"), "g"), o = $(this).data("html").replace(a, r), n = $(o).insertBefore(this), e(s), s.trigger("has_many_add:after", [n, s]))
        }), $(document).on("change", '.has_many_container[data-sortable] :input[name$="[_destroy]"]', function () {
            return e($(this).closest(".has_many"))
        }), t(), $(document).on("has_many_add:after", ".has_many_container", t)
    }), t = function () {
        var t;
        return t = $(".has_many_container[data-sortable]:not(.ui-sortable)"), t.sortable({
            items: "> fieldset",
            handle: "> ol > .handle",
            stop: e
        }), t.each(e)
    }, e = function (t) {
        var e, i;
        return t = t instanceof jQuery ? t : $(this), e = t.data("sortable"), i = parseInt(t.data("sortable-start") || 0, 10), t.children("fieldset").each(function () {
            var t, n;
            return t = $(this).find("> ol > .input > :input[name$='[_destroy]']"), n = $(this).find("> ol > .input > :input[name$='[" + e + "]']"), n.length ? n.val(t.is(":checked") ? "" : i++) : void 0
        })
    }
}.call(this),
function () {
    ActiveAdmin.modal_dialog = function (t, e, i) {
        var n, o, r, s, a, l, u, c, h, d;
        o = '<form id="dialog_confirm" title="' + t + '"><ul>';
        for (s in e) {
            if (l = e[s], /^(datepicker|checkbox|text)$/.test(l)) c = "input";
            else if ("textarea" === l) c = "textarea";
            else {
                if (!$.isArray(l)) throw new Error("Unsupported input type: {" + s + ": " + l + "}");
                h = ["select", "option", l, ""], c = h[0], n = h[1], a = h[2], l = h[3]
            }
            r = "datepicker" === l ? l : "", o += "<li>\n<label>" + (s.charAt(0).toUpperCase() + s.slice(1)) + "</label>\n<" + c + ' name="' + s + '" class="' + r + '" type="' + l + '">' + (a ? function () {
                var t, e, i;
                for (i = [], t = 0, e = a.length; e > t; t++) u = a[t], i.push($.isArray(u) ? "<" + n + " value=" + u[1] + ">" + u[0] + "</" + n + ">" : "<" + n + ">" + u + "</" + n + ">");
                return i
            }().join("") : "") + ("</" + c + ">") + "</li>", d = [], c = d[0], n = d[1], a = d[2], l = d[3], r = d[4]
        }
        return o += "</ul></form>", $(o).appendTo("body").dialog({
            modal: !0,
            dialogClass: "active_admin_dialog",
            buttons: {
                OK: function () {
                    return i($(this).serializeObject()), $(this).dialog("close")
                },
                Cancel: function () {
                    return $(this).dialog("close").remove()
                }
            }
        })
    }
}.call(this),
function () {
    ActiveAdmin.PerPage = function () {
        function t(t, e) {
            this.options = t, this.element = e, this.$element = $(this.element), this._init(), this._bind()
        }
        return t.prototype._init = function () {
            return this.$params = this._queryParams()
        }, t.prototype._bind = function () {
            return this.$element.change(function (t) {
                return function () {
                    return t.$params.per_page = t.$element.val(), delete t.$params.page, location.search = $.param(t.$params)
                }
            }(this))
        }, t.prototype._queryParams = function () {
            var t, e, i, n;
            for (i = window.location.search.substring(1), e = {}, n = /([^&=]+)=([^&]*)/g; t = n.exec(i);) e[decodeURIComponent(t[1])] = decodeURIComponent(t[2]);
            return e
        }, t
    }(), $.widget.bridge("perPage", ActiveAdmin.PerPage), $(function () {
        return $(".pagination_per_page select").perPage()
    })
}.call(this),
function () {
    ActiveAdmin.Popover = function () {
        function t(t, e) {
            var i;
            this.options = t, this.element = e, this.$element = $(this.element), i = {
                fadeInDuration: 20,
                fadeOutDuration: 100,
                autoOpen: !0,
                pageWrapperElement: "#wrapper",
                onClickActionItemCallback: null
            }, this.options = $.extend(i, t), this.isOpen = !1, (this.$popover = $(this.$element.attr("href"))).length || (this.$popover = this.$element.next(".popover")), this._buildPopover(), this._bind()
        }
        return t.prototype.open = function () {
            return this.isOpen = !0, this.$popover.fadeIn(this.options.fadeInDuration), this._positionPopover(), this._positionNipple(), this
        }, t.prototype.close = function () {
            return this.isOpen = !1, this.$popover.fadeOut(this.options.fadeOutDuration), this
        }, t.prototype.destroy = function () {
            return this.$element.removeData("popover"), this.$element.unbind(), this.$element = null, this
        }, t.prototype._buildPopover = function () {
            return this.$nipple = $('<div class="popover_nipple"></div>'), this.$popover.prepend(this.$nipple), this.$popover.hide(), this.$popover.addClass("popover")
        }, t.prototype._bind = function () {
            return $(this.options.pageWrapperElement).click(function (t) {
                return function () {
                    return t.isOpen ? t.close() : void 0
                }
            }(this)), this.options.autoOpen ? this.$element.click(function (t) {
                return function (e) {
                    return e.stopPropagation(), t.isOpen ? t.close() : t.open()
                }
            }(this)) : void 0
        }, t.prototype._positionPopover = function () {
            var t, e;
            return t = this.$element.offset().left + this.$element.outerWidth() / 2, e = this.$popover.outerWidth() / 2, this.$popover.css("left", t - e)
        }, t.prototype._positionNipple = function () {
            return this.$popover.css("top", this.$element.offset().top + this.$element.outerHeight() + 10), this.$nipple.css("left", this.$popover.outerWidth() / 2 - this.$nipple.outerWidth() / 2)
        }, t
    }(), $.widget.bridge("popover", ActiveAdmin.Popover)
}.call(this),
function () {
    var t = {}.hasOwnProperty,
        e = function (e, i) {
            function n() {
                this.constructor = e
            }
            for (var o in i) t.call(i, o) && (e[o] = i[o]);
            return n.prototype = i.prototype, e.prototype = new n, e.__super__ = i.prototype, e
        };
    ActiveAdmin.TableCheckboxToggler = function (t) {
        function i() {
            return i.__super__.constructor.apply(this, arguments)
        }
        return e(i, t), i.prototype._init = function () {
            return i.__super__._init.apply(this, arguments)
        }, i.prototype._bind = function () {
            return i.__super__._bind.apply(this, arguments), this.$container.find("tbody td").click(function (t) {
                return function (e) {
                    return "checkbox" !== e.target.type ? t._didClickCell(e.target) : void 0
                }
            }(this))
        }, i.prototype._didChangeCheckbox = function (t) {
            var e;
            return i.__super__._didChangeCheckbox.apply(this, arguments), e = $(t).parents("tr"), t.checked ? e.addClass("selected") : e.removeClass("selected")
        }, i.prototype._didClickCell = function (t) {
            return $(t).parent("tr").find(":checkbox").click()
        }, i
    }(ActiveAdmin.CheckboxToggler), $.widget.bridge("tableCheckboxToggler", ActiveAdmin.TableCheckboxToggler)
}.call(this),
function () {
    $.ui.dialog.prototype._focusTabbable = function () {
        return this.uiDialog.focus()
    }
}.call(this),
function () {
    $.fn.serializeObject = function () {
        var t, e, i, n, o;
        for (e = {}, o = this.serializeArray(), i = 0, n = o.length; n > i; i++) t = o[i], e[t.name] = t.value;
        return e
    }
}.call(this),
function () {
    $(document).on("ready page:load", function () {
        var t;
        return $(document).on("focus", ".datepicker:not(.hasDatepicker)", function () {
            var t, e;
            return t = {
                dateFormat: "yy-mm-dd"
            }, e = $(this).data("datepicker-options"), $(this).datepicker($.extend(t, e))
        }), $(".clear_filters_btn").click(function () {
            var t, e, i;
            return e = window.location.search.split("&"), i = /^(q\[|q%5B|q%5b|page|commit)/, window.location.search = function () {
                var n, o, r;
                for (r = [], n = 0, o = e.length; o > n; n++) t = e[n], t.match(i) || r.push(t);
                return r
            }().join("&")
        }), $(".dropdown_button").popover(), $(".filter_form").submit(function () {
            return $(this).find(":input").filter(function () {
                return "" === this.value
            }).prop("disabled", !0)
        }), $(".filter_form_field.select_and_search select").change(function () {
            return $(this).siblings("input").prop({
                name: "q[" + this.value + "]"
            })
        }), $("#active_admin_content .tabs").tabs(), (t = $(".table_tools .batch_actions_selector")).length ? t.next().css({
            width: "calc(100% - 10px - " + t.outerWidth() + "px)",
            "float": "right"
        }) : void 0
    })
}.call(this),
function () {
    var t = this,
        e = t._,
        i = Array.prototype,
        n = Object.prototype,
        o = Function.prototype,
        r = i.push,
        s = i.slice,
        a = i.concat,
        l = n.toString,
        u = n.hasOwnProperty,
        c = Array.isArray,
        h = Object.keys,
        d = o.bind,
        p = function (t) {
            return t instanceof p ? t : this instanceof p ? void(this._wrapped = t) : new p(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = p), exports._ = p) : t._ = p, p.VERSION = "1.7.0";
    var f = function (t, e, i) {
        if (void 0 === e) return t;
        switch (null == i ? 3 : i) {
            case 1:
                return function (i) {
                    return t.call(e, i)
                };
            case 2:
                return function (i, n) {
                    return t.call(e, i, n)
                };
            case 3:
                return function (i, n, o) {
                    return t.call(e, i, n, o)
                };
            case 4:
                return function (i, n, o, r) {
                    return t.call(e, i, n, o, r)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    };
    p.iteratee = function (t, e, i) {
        return null == t ? p.identity : p.isFunction(t) ? f(t, e, i) : p.isObject(t) ? p.matches(t) : p.property(t)
    }, p.each = p.forEach = function (t, e, i) {
        if (null == t) return t;
        e = f(e, i);
        var n, o = t.length;
        if (o === +o)
            for (n = 0; o > n; n++) e(t[n], n, t);
        else {
            var r = p.keys(t);
            for (n = 0, o = r.length; o > n; n++) e(t[r[n]], r[n], t)
        }
        return t
    }, p.map = p.collect = function (t, e, i) {
        if (null == t) return [];
        e = p.iteratee(e, i);
        for (var n, o = t.length !== +t.length && p.keys(t), r = (o || t).length, s = Array(r), a = 0; r > a; a++) n = o ? o[a] : a, s[a] = e(t[n], n, t);
        return s
    };
    var m = "Reduce of empty array with no initial value";
    p.reduce = p.foldl = p.inject = function (t, e, i, n) {
        null == t && (t = []), e = f(e, n, 4);
        var o, r = t.length !== +t.length && p.keys(t),
            s = (r || t).length,
            a = 0;
        if (arguments.length < 3) {
            if (!s) throw new TypeError(m);
            i = t[r ? r[a++] : a++]
        }
        for (; s > a; a++) o = r ? r[a] : a, i = e(i, t[o], o, t);
        return i
    }, p.reduceRight = p.foldr = function (t, e, i, n) {
        null == t && (t = []), e = f(e, n, 4);
        var o, r = t.length !== +t.length && p.keys(t),
            s = (r || t).length;
        if (arguments.length < 3) {
            if (!s) throw new TypeError(m);
            i = t[r ? r[--s] : --s]
        }
        for (; s--;) o = r ? r[s] : s, i = e(i, t[o], o, t);
        return i
    }, p.find = p.detect = function (t, e, i) {
        var n;
        return e = p.iteratee(e, i), p.some(t, function (t, i, o) {
            return e(t, i, o) ? (n = t, !0) : void 0
        }), n
    }, p.filter = p.select = function (t, e, i) {
        var n = [];
        return null == t ? n : (e = p.iteratee(e, i), p.each(t, function (t, i, o) {
            e(t, i, o) && n.push(t)
        }), n)
    }, p.reject = function (t, e, i) {
        return p.filter(t, p.negate(p.iteratee(e)), i)
    }, p.every = p.all = function (t, e, i) {
        if (null == t) return !0;
        e = p.iteratee(e, i);
        var n, o, r = t.length !== +t.length && p.keys(t),
            s = (r || t).length;
        for (n = 0; s > n; n++)
            if (o = r ? r[n] : n, !e(t[o], o, t)) return !1;
        return !0
    }, p.some = p.any = function (t, e, i) {
        if (null == t) return !1;
        e = p.iteratee(e, i);
        var n, o, r = t.length !== +t.length && p.keys(t),
            s = (r || t).length;
        for (n = 0; s > n; n++)
            if (o = r ? r[n] : n, e(t[o], o, t)) return !0;
        return !1
    }, p.contains = p.include = function (t, e) {
        return null == t ? !1 : (t.length !== +t.length && (t = p.values(t)), p.indexOf(t, e) >= 0)
    }, p.invoke = function (t, e) {
        var i = s.call(arguments, 2),
            n = p.isFunction(e);
        return p.map(t, function (t) {
            return (n ? e : t[e]).apply(t, i)
        })
    }, p.pluck = function (t, e) {
        return p.map(t, p.property(e))
    }, p.where = function (t, e) {
        return p.filter(t, p.matches(e))
    }, p.findWhere = function (t, e) {
        return p.find(t, p.matches(e))
    }, p.max = function (t, e, i) {
        var n, o, r = -1 / 0,
            s = -1 / 0;
        if (null == e && null != t) {
            t = t.length === +t.length ? t : p.values(t);
            for (var a = 0, l = t.length; l > a; a++) n = t[a], n > r && (r = n)
        } else e = p.iteratee(e, i), p.each(t, function (t, i, n) {
            o = e(t, i, n), (o > s || o === -1 / 0 && r === -1 / 0) && (r = t, s = o)
        });
        return r
    }, p.min = function (t, e, i) {
        var n, o, r = 1 / 0,
            s = 1 / 0;
        if (null == e && null != t) {
            t = t.length === +t.length ? t : p.values(t);
            for (var a = 0, l = t.length; l > a; a++) n = t[a], r > n && (r = n)
        } else e = p.iteratee(e, i), p.each(t, function (t, i, n) {
            o = e(t, i, n), (s > o || 1 / 0 === o && 1 / 0 === r) && (r = t, s = o)
        });
        return r
    }, p.shuffle = function (t) {
        for (var e, i = t && t.length === +t.length ? t : p.values(t), n = i.length, o = Array(n), r = 0; n > r; r++) e = p.random(0, r), e !== r && (o[r] = o[e]), o[e] = i[r];
        return o
    }, p.sample = function (t, e, i) {
        return null == e || i ? (t.length !== +t.length && (t = p.values(t)), t[p.random(t.length - 1)]) : p.shuffle(t).slice(0, Math.max(0, e))
    }, p.sortBy = function (t, e, i) {
        return e = p.iteratee(e, i), p.pluck(p.map(t, function (t, i, n) {
            return {
                value: t,
                index: i,
                criteria: e(t, i, n)
            }
        }).sort(function (t, e) {
            var i = t.criteria,
                n = e.criteria;
            if (i !== n) {
                if (i > n || void 0 === i) return 1;
                if (n > i || void 0 === n) return -1
            }
            return t.index - e.index
        }), "value")
    };
    var g = function (t) {
        return function (e, i, n) {
            var o = {};
            return i = p.iteratee(i, n), p.each(e, function (n, r) {
                var s = i(n, r, e);
                t(o, n, s)
            }), o
        }
    };
    p.groupBy = g(function (t, e, i) {
        p.has(t, i) ? t[i].push(e) : t[i] = [e]
    }), p.indexBy = g(function (t, e, i) {
        t[i] = e
    }), p.countBy = g(function (t, e, i) {
        p.has(t, i) ? t[i]++ : t[i] = 1
    }), p.sortedIndex = function (t, e, i, n) {
        i = p.iteratee(i, n, 1);
        for (var o = i(e), r = 0, s = t.length; s > r;) {
            var a = r + s >>> 1;
            i(t[a]) < o ? r = a + 1 : s = a
        }
        return r
    }, p.toArray = function (t) {
        return t ? p.isArray(t) ? s.call(t) : t.length === +t.length ? p.map(t, p.identity) : p.values(t) : []
    }, p.size = function (t) {
        return null == t ? 0 : t.length === +t.length ? t.length : p.keys(t).length
    }, p.partition = function (t, e, i) {
        e = p.iteratee(e, i);
        var n = [],
            o = [];
        return p.each(t, function (t, i, r) {
            (e(t, i, r) ? n : o).push(t)
        }), [n, o]
    }, p.first = p.head = p.take = function (t, e, i) {
        return null == t ? void 0 : null == e || i ? t[0] : 0 > e ? [] : s.call(t, 0, e)
    }, p.initial = function (t, e, i) {
        return s.call(t, 0, Math.max(0, t.length - (null == e || i ? 1 : e)))
    }, p.last = function (t, e, i) {
        return null == t ? void 0 : null == e || i ? t[t.length - 1] : s.call(t, Math.max(t.length - e, 0))
    }, p.rest = p.tail = p.drop = function (t, e, i) {
        return s.call(t, null == e || i ? 1 : e)
    }, p.compact = function (t) {
        return p.filter(t, p.identity)
    };
    var v = function (t, e, i, n) {
        if (e && p.every(t, p.isArray)) return a.apply(n, t);
        for (var o = 0, s = t.length; s > o; o++) {
            var l = t[o];
            p.isArray(l) || p.isArguments(l) ? e ? r.apply(n, l) : v(l, e, i, n) : i || n.push(l)
        }
        return n
    };
    p.flatten = function (t, e) {
        return v(t, e, !1, [])
    }, p.without = function (t) {
        return p.difference(t, s.call(arguments, 1))
    }, p.uniq = p.unique = function (t, e, i, n) {
        if (null == t) return [];
        p.isBoolean(e) || (n = i, i = e, e = !1), null != i && (i = p.iteratee(i, n));
        for (var o = [], r = [], s = 0, a = t.length; a > s; s++) {
            var l = t[s];
            if (e) s && r === l || o.push(l), r = l;
            else if (i) {
                var u = i(l, s, t);
                p.indexOf(r, u) < 0 && (r.push(u), o.push(l))
            } else p.indexOf(o, l) < 0 && o.push(l)
        }
        return o
    }, p.union = function () {
        return p.uniq(v(arguments, !0, !0, []))
    }, p.intersection = function (t) {
        if (null == t) return [];
        for (var e = [], i = arguments.length, n = 0, o = t.length; o > n; n++) {
            var r = t[n];
            if (!p.contains(e, r)) {
                for (var s = 1; i > s && p.contains(arguments[s], r); s++);
                s === i && e.push(r)
            }
        }
        return e
    }, p.difference = function (t) {
        var e = v(s.call(arguments, 1), !0, !0, []);
        return p.filter(t, function (t) {
            return !p.contains(e, t)
        })
    }, p.zip = function (t) {
        if (null == t) return [];
        for (var e = p.max(arguments, "length").length, i = Array(e), n = 0; e > n; n++) i[n] = p.pluck(arguments, n);
        return i
    }, p.object = function (t, e) {
        if (null == t) return {};
        for (var i = {}, n = 0, o = t.length; o > n; n++) e ? i[t[n]] = e[n] : i[t[n][0]] = t[n][1];
        return i
    }, p.indexOf = function (t, e, i) {
        if (null == t) return -1;
        var n = 0,
            o = t.length;
        if (i) {
            if ("number" != typeof i) return n = p.sortedIndex(t, e), t[n] === e ? n : -1;
            n = 0 > i ? Math.max(0, o + i) : i
        }
        for (; o > n; n++)
            if (t[n] === e) return n;
        return -1
    }, p.lastIndexOf = function (t, e, i) {
        if (null == t) return -1;
        var n = t.length;
        for ("number" == typeof i && (n = 0 > i ? n + i + 1 : Math.min(n, i + 1)); --n >= 0;)
            if (t[n] === e) return n;
        return -1
    }, p.range = function (t, e, i) {
        arguments.length <= 1 && (e = t || 0, t = 0), i = i || 1;
        for (var n = Math.max(Math.ceil((e - t) / i), 0), o = Array(n), r = 0; n > r; r++, t += i) o[r] = t;
        return o
    };
    var y = function () {};
    p.bind = function (t, e) {
        var i, n;
        if (d && t.bind === d) return d.apply(t, s.call(arguments, 1));
        if (!p.isFunction(t)) throw new TypeError("Bind must be called on a function");
        return i = s.call(arguments, 2), n = function () {
            if (!(this instanceof n)) return t.apply(e, i.concat(s.call(arguments)));
            y.prototype = t.prototype;
            var o = new y;
            y.prototype = null;
            var r = t.apply(o, i.concat(s.call(arguments)));
            return p.isObject(r) ? r : o
        }
    }, p.partial = function (t) {
        var e = s.call(arguments, 1);
        return function () {
            for (var i = 0, n = e.slice(), o = 0, r = n.length; r > o; o++) n[o] === p && (n[o] = arguments[i++]);
            for (; i < arguments.length;) n.push(arguments[i++]);
            return t.apply(this, n)
        }
    }, p.bindAll = function (t) {
        var e, i, n = arguments.length;
        if (1 >= n) throw new Error("bindAll must be passed function names");
        for (e = 1; n > e; e++) i = arguments[e], t[i] = p.bind(t[i], t);
        return t
    }, p.memoize = function (t, e) {
        var i = function (n) {
            var o = i.cache,
                r = e ? e.apply(this, arguments) : n;
            return p.has(o, r) || (o[r] = t.apply(this, arguments)), o[r]
        };
        return i.cache = {}, i
    }, p.delay = function (t, e) {
        var i = s.call(arguments, 2);
        return setTimeout(function () {
            return t.apply(null, i)
        }, e)
    }, p.defer = function (t) {
        return p.delay.apply(p, [t, 1].concat(s.call(arguments, 1)))
    }, p.throttle = function (t, e, i) {
        var n, o, r, s = null,
            a = 0;
        i || (i = {});
        var l = function () {
            a = i.leading === !1 ? 0 : p.now(), s = null, r = t.apply(n, o), s || (n = o = null)
        };
        return function () {
            var u = p.now();
            a || i.leading !== !1 || (a = u);
            var c = e - (u - a);
            return n = this, o = arguments, 0 >= c || c > e ? (clearTimeout(s), s = null, a = u, r = t.apply(n, o), s || (n = o = null)) : s || i.trailing === !1 || (s = setTimeout(l, c)), r
        }
    }, p.debounce = function (t, e, i) {
        var n, o, r, s, a, l = function () {
            var u = p.now() - s;
            e > u && u > 0 ? n = setTimeout(l, e - u) : (n = null, i || (a = t.apply(r, o), n || (r = o = null)))
        };
        return function () {
            r = this, o = arguments, s = p.now();
            var u = i && !n;
            return n || (n = setTimeout(l, e)), u && (a = t.apply(r, o), r = o = null), a
        }
    }, p.wrap = function (t, e) {
        return p.partial(e, t)
    }, p.negate = function (t) {
        return function () {
            return !t.apply(this, arguments)
        }
    }, p.compose = function () {
        var t = arguments,
            e = t.length - 1;
        return function () {
            for (var i = e, n = t[e].apply(this, arguments); i--;) n = t[i].call(this, n);
            return n
        }
    }, p.after = function (t, e) {
        return function () {
            return --t < 1 ? e.apply(this, arguments) : void 0
        }
    }, p.before = function (t, e) {
        var i;
        return function () {
            return --t > 0 ? i = e.apply(this, arguments) : e = null, i
        }
    }, p.once = p.partial(p.before, 2), p.keys = function (t) {
        if (!p.isObject(t)) return [];
        if (h) return h(t);
        var e = [];
        for (var i in t) p.has(t, i) && e.push(i);
        return e
    }, p.values = function (t) {
        for (var e = p.keys(t), i = e.length, n = Array(i), o = 0; i > o; o++) n[o] = t[e[o]];
        return n
    }, p.pairs = function (t) {
        for (var e = p.keys(t), i = e.length, n = Array(i), o = 0; i > o; o++) n[o] = [e[o], t[e[o]]];
        return n
    }, p.invert = function (t) {
        for (var e = {}, i = p.keys(t), n = 0, o = i.length; o > n; n++) e[t[i[n]]] = i[n];
        return e
    }, p.functions = p.methods = function (t) {
        var e = [];
        for (var i in t) p.isFunction(t[i]) && e.push(i);
        return e.sort()
    }, p.extend = function (t) {
        if (!p.isObject(t)) return t;
        for (var e, i, n = 1, o = arguments.length; o > n; n++) {
            e = arguments[n];
            for (i in e) u.call(e, i) && (t[i] = e[i])
        }
        return t
    }, p.pick = function (t, e, i) {
        var n, o = {};
        if (null == t) return o;
        if (p.isFunction(e)) {
            e = f(e, i);
            for (n in t) {
                var r = t[n];
                e(r, n, t) && (o[n] = r)
            }
        } else {
            var l = a.apply([], s.call(arguments, 1));
            t = new Object(t);
            for (var u = 0, c = l.length; c > u; u++) n = l[u], n in t && (o[n] = t[n])
        }
        return o
    }, p.omit = function (t, e, i) {
        if (p.isFunction(e)) e = p.negate(e);
        else {
            var n = p.map(a.apply([], s.call(arguments, 1)), String);
            e = function (t, e) {
                return !p.contains(n, e)
            }
        }
        return p.pick(t, e, i)
    }, p.defaults = function (t) {
        if (!p.isObject(t)) return t;
        for (var e = 1, i = arguments.length; i > e; e++) {
            var n = arguments[e];
            for (var o in n) void 0 === t[o] && (t[o] = n[o])
        }
        return t
    }, p.clone = function (t) {
        return p.isObject(t) ? p.isArray(t) ? t.slice() : p.extend({}, t) : t
    }, p.tap = function (t, e) {
        return e(t), t
    };
    var b = function (t, e, i, n) {
        if (t === e) return 0 !== t || 1 / t === 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof p && (t = t._wrapped), e instanceof p && (e = e._wrapped);
        var o = l.call(t);
        if (o !== l.call(e)) return !1;
        switch (o) {
            case "[object RegExp]":
            case "[object String]":
                return "" + t == "" + e;
            case "[object Number]":
                return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t === +e
        }
        if ("object" != typeof t || "object" != typeof e) return !1;
        for (var r = i.length; r--;)
            if (i[r] === t) return n[r] === e;
        var s = t.constructor,
            a = e.constructor;
        if (s !== a && "constructor" in t && "constructor" in e && !(p.isFunction(s) && s instanceof s && p.isFunction(a) && a instanceof a)) return !1;
        i.push(t), n.push(e);
        var u, c;
        if ("[object Array]" === o) {
            if (u = t.length, c = u === e.length)
                for (; u-- && (c = b(t[u], e[u], i, n)););
        } else {
            var h, d = p.keys(t);
            if (u = d.length, c = p.keys(e).length === u)
                for (; u-- && (h = d[u], c = p.has(e, h) && b(t[h], e[h], i, n)););
        }
        return i.pop(), n.pop(), c
    };
    p.isEqual = function (t, e) {
        return b(t, e, [], [])
    }, p.isEmpty = function (t) {
        if (null == t) return !0;
        if (p.isArray(t) || p.isString(t) || p.isArguments(t)) return 0 === t.length;
        for (var e in t)
            if (p.has(t, e)) return !1;
        return !0
    }, p.isElement = function (t) {
        return !(!t || 1 !== t.nodeType)
    }, p.isArray = c || function (t) {
        return "[object Array]" === l.call(t)
    }, p.isObject = function (t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    }, p.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t) {
        p["is" + t] = function (e) {
            return l.call(e) === "[object " + t + "]"
        }
    }), p.isArguments(arguments) || (p.isArguments = function (t) {
        return p.has(t, "callee")
    }), "function" != typeof /./ && (p.isFunction = function (t) {
        return "function" == typeof t || !1
    }), p.isFinite = function (t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, p.isNaN = function (t) {
        return p.isNumber(t) && t !== +t
    }, p.isBoolean = function (t) {
        return t === !0 || t === !1 || "[object Boolean]" === l.call(t)
    }, p.isNull = function (t) {
        return null === t
    }, p.isUndefined = function (t) {
        return void 0 === t
    }, p.has = function (t, e) {
        return null != t && u.call(t, e)
    }, p.noConflict = function () {
        return t._ = e, this
    }, p.identity = function (t) {
        return t
    }, p.constant = function (t) {
        return function () {
            return t
        }
    }, p.noop = function () {}, p.property = function (t) {
        return function (e) {
            return e[t]
        }
    }, p.matches = function (t) {
        var e = p.pairs(t),
            i = e.length;
        return function (t) {
            if (null == t) return !i;
            t = new Object(t);
            for (var n = 0; i > n; n++) {
                var o = e[n],
                    r = o[0];
                if (o[1] !== t[r] || !(r in t)) return !1
            }
            return !0
        }
    }, p.times = function (t, e, i) {
        var n = Array(Math.max(0, t));
        e = f(e, i, 1);
        for (var o = 0; t > o; o++) n[o] = e(o);
        return n
    }, p.random = function (t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    }, p.now = Date.now || function () {
        return (new Date).getTime()
    };
    var _ = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        w = p.invert(_),
        k = function (t) {
            var e = function (e) {
                    return t[e]
                },
                i = "(?:" + p.keys(t).join("|") + ")",
                n = RegExp(i),
                o = RegExp(i, "g");
            return function (t) {
                return t = null == t ? "" : "" + t, n.test(t) ? t.replace(o, e) : t
            }
        };
    p.escape = k(_), p.unescape = k(w), p.result = function (t, e) {
        if (null == t) return void 0;
        var i = t[e];
        return p.isFunction(i) ? t[e]() : i
    };
    var x = 0;
    p.uniqueId = function (t) {
        var e = ++x + "";
        return t ? t + e : e
    }, p.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var D = /(.)^/,
        C = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        T = /\\|'|\r|\n|\u2028|\u2029/g,
        S = function (t) {
            return "\\" + C[t]
        };
    p.template = function (t, e, i) {
        !e && i && (e = i), e = p.defaults({}, e, p.templateSettings);
        var n = RegExp([(e.escape || D).source, (e.interpolate || D).source, (e.evaluate || D).source].join("|") + "|$", "g"),
            o = 0,
            r = "__p+='";
        t.replace(n, function (e, i, n, s, a) {
            return r += t.slice(o, a).replace(T, S), o = a + e.length, i ? r += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : n ? r += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : s && (r += "';\n" + s + "\n__p+='"), e
        }), r += "';\n", e.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
        try {
            var s = new Function(e.variable || "obj", "_", r)
        } catch (a) {
            throw a.source = r, a
        }
        var l = function (t) {
                return s.call(this, t, p)
            },
            u = e.variable || "obj";
        return l.source = "function(" + u + "){\n" + r + "}", l
    }, p.chain = function (t) {
        var e = p(t);
        return e._chain = !0, e
    };
    var E = function (t) {
        return this._chain ? p(t).chain() : t
    };
    p.mixin = function (t) {
        p.each(p.functions(t), function (e) {
            var i = p[e] = t[e];
            p.prototype[e] = function () {
                var t = [this._wrapped];
                return r.apply(t, arguments), E.call(this, i.apply(p, t))
            }
        })
    }, p.mixin(p), p.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
        var e = i[t];
        p.prototype[t] = function () {
            var i = this._wrapped;
            return e.apply(i, arguments), "shift" !== t && "splice" !== t || 0 !== i.length || delete i[0], E.call(this, i)
        }
    }), p.each(["concat", "join", "slice"], function (t) {
        var e = i[t];
        p.prototype[t] = function () {
            return E.call(this, e.apply(this._wrapped, arguments))
        }
    }), p.prototype.value = function () {
        return this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function () {
        return p
    })
}.call(this),
function () {
    var t, e;
    e = function () {
        return $("[data-map-area]").each(function () {
            var t, e, i, n, o, r, s;
            return s = null, e = this, t = $(e).data("geojson"), o = function (t) {
                var i;
                return s || (s = new google.maps.Polygon, s.setMap(n.map.serviceObject), s.setEditable(!0), google.maps.event.addListener(s, "mouseup", function () {
                    return function () {
                        return r({
                            overlay: s
                        })
                    }
                }(this))), i = [], _.each(t.getGeometry().getArray(), function (t) {
                    return i.push(t.getArray())
                }), s.setPaths(i), t.toGeoJson(function (t) {
                    return $(e).find(".map-area-coords-input").val(JSON.stringify(t))
                })
            }, r = function (t) {
                return s && t.overlay !== s && (s.setMap(null), s.unbindAll()), s = t.overlay, s.setEditable(!0), google.maps.event.addListener(s, "mouseup", function () {
                    return function () {
                        return r({
                            overlay: s
                        })
                    }
                }(this)), i(s).toGeoJson(function (t) {
                    return $(e).find(".map-area-coords-input").val(JSON.stringify(t))
                })
            }, i = function (t) {
                var e, i, n;
                return n = [], t.getPaths().forEach(function (t) {
                    return n.push(new google.maps.Data.LinearRing(t.getArray()))
                }), i = new google.maps.Data.Polygon(n), e = new google.maps.Data.Feature, e.setGeometry(i), e
            }, n = Gmaps.build("Google"), n.buildMap({
                provider: {},
                internal: {
                    id: $(this).find(".map-container").attr("id")
                }
            }, function () {
                return function () {
                    var e, i;
                    return t && (i = n.map.serviceObject.data.addGeoJson(t)[0], o(i), n.map.serviceObject.data.remove(i)), e = new google.maps.drawing.DrawingManager({
                        drawingMode: google.maps.drawing.OverlayType.POLYGON,
                        drawingControl: !0,
                        drawingControlOptions: {
                            position: google.maps.ControlPosition.TOP_CENTER,
                            drawingModes: [google.maps.drawing.OverlayType.POLYGON, google.maps.drawing.OverlayType.RECTANGLE]
                        },
                        circle_options: {
                            editable: !0
                        },
                        polygon_options: {
                            editable: !0
                        },
                        rectangle_options: {
                            editable: !0
                        }
                    }), e.setMap(n.map.serviceObject), google.maps.event.addListener(e, "overlaycomplete", r)
                }
            }(this))
        })
    }, t = function () {
        return $("input.hasDatetimePicker").datetimepicker({
            dateFormat: "dd/mm/yyyy",
            beforeShow: function () {
                return setTimeout(function () {
                    return $("#ui-datepicker-div").css("z-index", 3e3)
                })
            }
        })
    }, $(document).on("page:change", function () {
        return e(), t()
    }), $(document).on("ready", function () {
        return e(), t()
    })
}.call(this),
function () {}.call(this),
function () {
    $(document).on("page:change", function () {
        return null != window._gaq ? _gaq.push(["_trackPageview"]) : null != window.pageTracker ? pageTracker._trackPageview() : void 0
    })
}.call(this),
function () {}.call(this),
function () {
    $(document).on("page:change", function () {
        var t;
        return t = $.cookie("csrftoken"), $("<meta>").attr("name", "csrf-param").attr("content", "authenticity_token").appendTo("head"), $("<meta>").attr("name", "csrf-token").attr("content", t).appendTo("head"), $('input[name="authenticity_token"]').val(t)
    })
}.call(this),
function () {}.call(this),
function () {
    var t;
    t = function () {
        return $("[data-map]").each(function () {
            var t, e, i, n;
            return e = $(this), i = e.data("geojson"), t = e.data("bounds"), n = Gmaps.build("Google"), n.buildMap({
                provider: {
                    disableDefaultUI: !0
                },
                internal: {
                    id: e.find(".map-container").attr("id")
                }
            }, function () {
                var e, o, r;
                return i && n.map.serviceObject.data.addGeoJson(i), t ? (r = new google.maps.LatLng(t[0][0], t[0][1]), o = new google.maps.LatLng(t[1][0], t[1][1]), e = new google.maps.LatLngBounds(r, o), n.map.serviceObject.fitBounds(e)) : void 0
            })
        })
    }, $(document).on("page:change", function () {
        return t()
    }), $(document).on("ready", function () {
        return t()
    })
}.call(this),
function () {}.call(this),
function () {
    var t;
    t = "undefined" != typeof exports && null !== exports ? exports : window, t.populate_modal = function (t, e) {
        return null == e && (e = null), $("#joatu_modal .modal-header").children(':not([aria-label="close"])').remove(), e && $("#joatu_modal .modal-header").append(e), $("#joatu_modal .modal-body").html(t)
    }
}.call(this),
function () {
    $(document).on("page:change", function () {
        return $('[data-ride="scroll"]').click(function (t) {
            return t.preventDefault(), $("html,body").animate({
                scrollTop: $(t.target.hash).offset().top
            }, "slow")
        })
    })
}.call(this),
function () {}.call(this),
function () {}.call(this),
function () {}.call(this),
function () {
    $(document).on("click", "#new_reference_link", function () {
        return $("#reference_modal").modal("show")
    })
}.call(this),
function () {}.call(this),
function () {}.call(this),
function () {
    $(document).on("click", ".ga-preregister-button", function () {
        return ga("send", "event", "form", "submit", "preregister_list_signup")
    })
}.call(this),
function () {}.call(this);