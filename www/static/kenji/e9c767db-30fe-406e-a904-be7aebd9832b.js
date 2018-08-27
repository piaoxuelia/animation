;
(function(window, document, undefined) {
    var aa = aa || {},
        ba = this;
    ba.Mb = true;

    function ca(a) { return a.call.apply(a.z, arguments) }

    function da(a, b) { if (!a) throw new Error; if (arguments.length > 2) { var c = Array.prototype.slice.call(arguments, 2); return function() { var d = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(d, c); return a.apply(b, d) } } else return function() { return a.apply(b, arguments) } }

    function C() { C = Function.prototype.z && Function.prototype.z.toString().indexOf("native code") != -1 ? ca : da; return C.apply(null, arguments) }
    var ea = aa.Tb && Date.now || function() { return +new Date };

    function F(a) { a.call(ba) };
    mti = {};
    mti.z = function(a, b) { var c = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : []; return function() { c.push.apply(c, arguments); return b.apply(a, c) } };
    var fa = {};

    function G(a, b) { this.ka = a;
        this.xb = b || a;
        this.m = this.xb.document;
        this.pa = undefined }
    F(function() {
        G.prototype.createElement = function(a, b, c) { a = this.m.createElement(a); if (b)
                for (var d in b)
                    if (b.hasOwnProperty(d)) d == "style" ? this.Ka(a, b[d]) : a.setAttribute(d, b[d]);
            c && a.appendChild(this.m.createTextNode(c)); return a };
        G.prototype.r = function(a, b) { a = this.m.getElementsByTagName(a)[0]; if (!a) a = document.documentElement; if (a && a.lastChild) { a.insertBefore(b, a.lastChild); return true } return false };
        G.prototype.Na = function(a) { var b = this;

            function c() { b.m.body ? a() : setTimeout(c, 0) } c() };
        G.prototype.Ja = function(a) {
            if (a.parentNode) {
                a.parentNode.removeChild(a);
                return true
            }
            return false
        };
        G.prototype.w = function(a, b) { for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
                if (c[d] == b) return;
            c.push(b);
            a.className = c.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "") };
        G.prototype.M = function(a, b) { for (var c = a.className.split(/\s+/), d = [], e = 0, f = c.length; e < f; e++) c[e] != b && d.push(c[e]);
            a.className = d.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "") };
        G.prototype.ya = function(a, b) {
            a = a.className.split(/\s+/);
            for (var c = 0, d = a.length; c < d; c++)
                if (a[c] == b) return true;
            return false
        };
        G.prototype.Ka = function(a, b) { if (this.kb()) a.setAttribute("style", b);
            else a.style.cssText = b };
        G.prototype.kb = function() { if (this.pa === undefined) { var a = this.m.createElement("p");
                a.innerHTML = '<a style="top:1px;">w</a>';
                this.pa = /top/.test(a.getElementsByTagName("a")[0].getAttribute("style")) } return this.pa };
        G.prototype.getComputedStyle = function(a) {
            if (typeof a != "undefined")
                if (a != null) {
                    var b = {};
                    if (typeof a.currentStyle != "undefined") {
                        b.fontFamily = a.currentStyle.fontFamily;
                        b.fontWeight = a.currentStyle.fontWeight;
                        b.fontStyle = a.currentStyle.fontStyle;
                        return b
                    } else if (a = this.m.defaultView.getComputedStyle(a, null)) { b.fontFamily = a.getPropertyValue("font-family");
                        b.fontWeight = a.getPropertyValue("font-weight");
                        b.fontStyle = a.getPropertyValue("font-style"); return b } else return ""
                }
            return ""
        };
        G.prototype.B = function(a) {
            if (typeof a != "undefined")
                if (a != null)
                    if (typeof a.currentStyle != "undefined") return a.currentStyle.fontFamily;
                    else return (a = this.m.defaultView.getComputedStyle(a, null)) ? a.getPropertyValue("font-family") : "";
            return ""
        };
        G.prototype.ha = function(a) { if (typeof a != "undefined")
                if (a != null)
                    if (typeof a.currentStyle != "undefined") return a.currentStyle.fontWeight;
                    else if (a = this.m.defaultView.getComputedStyle(a, null)) { var b = a.getPropertyValue("font-weight"); return b.toLowerCase() == "bold" ? 700 : b.toLowerCase() == "normal" ? 400 : a.getPropertyValue("font-weight") } else return ""; return "" };
        G.prototype.ga = function(a) {
            if (typeof a != "undefined")
                if (a != null)
                    if (typeof a.currentStyle != "undefined") return a.currentStyle.fontStyle;
                    else return (a =
                        this.m.defaultView.getComputedStyle(a, null)) ? a.getPropertyValue("font-style") : "";
            return ""
        };
        G.prototype.$ = function(a) {
            var b = "";
            if (a.tagName == "INPUT") b += a.value;
            a = a.childNodes || a;
            for (var c = "img,script,noscript,iframe,object,style,param,embed,link,meta,head,title,br,hr,svg,path".split(","), d = 0; d < a.length; d++)
                if (a[d].nodeType != 8)
                    if (this.indexOf(c, a[d].tagName ? a[d].tagName.toLowerCase() : "") < 0)
                        if (this.fb(a[d].parentNode) != "none") {
                            var e = a[d].nodeType != 1 ? a[d].nodeValue.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,
                                "").replace(/\s+/g, " ") : this.$(a[d].childNodes);
                            b += e.toLowerCase() + e.toUpperCase()
                        } else b += a[d].nodeType != 1 ? a[d].nodeValue.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " ") : this.$(a[d].childNodes);
            return b
        };
        G.prototype.getElementById = function(a) { return this.m.getElementById(a) };
        G.prototype.V = function(a, b, c, d, e) {
            var f = [],
                j = this.B(a).split(","),
                g = "",
                i = "";
            if (c instanceof Array)
                for (g = 0; g < j.length; g++)
                    if (this.ba(j[g]) != b)
                        if (this.ba(j[g]).indexOf(b) > -1)
                            for (i = 0; i < c.length; i++) {
                                if (c[i] != "")
                                    if (d)
                                        if (e) {
                                            var l =
                                                this.ga(a),
                                                h = this.ha(a),
                                                t = b + "_" + l.charAt(0) + h / 100;
                                            f.push(t)
                                        } else f.push(c[i]);
                                else f.push(c[i])
                            } else f.push(j[g]);
                        else if (c instanceof Array)
                for (i = 0; i < c.length; i++) { if (c[i] != "")
                        if (d)
                            if (e) { l = this.ga(a);
                                h = this.ha(a);
                                t = b + "_" + l.charAt(0) + h / 100;
                                f.push(t) } else f.push(c[i]);
                    else f.push(c[i]) } else f.push(c);
            else if (d)
                if (e) { l = this.ga(a);
                    h = this.ha(a);
                    t = b + "_" + l.charAt(0) + h / 100;
                    this.ba(c);
                    c = t.length;
                    c = t.slice(c - 2, c);
                    g = c.charAt(1) * 100;
                    i = c.charAt(0);
                    l == i && h == g && f.push(t) } else f.push(c);
            else f.push(c);
            for (l = 0; l <
                j.length; l++) j[l] != "" && f.push(j[l]);
            f = this.jb(f);
            if (f.length > 1 && f[0] != b) { a.style.fontFamily = "" + f;
                a.setAttribute("data-mtiFont", b); if (d) { a.style.fontWeight = "";
                    a.style.fontStyle = "" } return a.style.fontFamily } else return null
        };
        G.prototype.nb = function(a, b) { for (b = b.parentNode; b != null;) { if (b == a) return true;
                b = b.parentNode } return false };
        G.prototype.Ma = function(a, b) { b(a); for (a = a.firstChild; a;) { this.Ma(a, b);
                a = a.nextSibling } };
        G.prototype.fb = function(a) {
            if (a)
                if (typeof a.currentStyle != "undefined") return a.currentStyle.textTransform;
                else return (a = this.m.defaultView.getComputedStyle(a, null)) ? a.getPropertyValue("text-transform") : ""
        };
        G.prototype.indexOf = function(a, b) { if (a.indexOf) return a.indexOf(b);
            else { for (var c = 0; c < a.length; c++)
                    if (a[c] == b) return c; return -1 } };
        G.prototype.ba = function(a) { return a.replace(/^\s|\s$/g, "").replace(/'|"/g, "").replace(/,\s*/g, "|") };
        G.prototype.jb = function(a) { for (var b = {}, c = [], d = 0, e = a.length; d < e; ++d)
                if (!b.hasOwnProperty(a[d])) { c.push(a[d]);
                    b[a[d]] = 1 }
            return c };
        G.prototype.ba = function(a) {
            return a.replace(/^\s|\s$/g,
                "").replace(/'|"/g, "").replace(/,\s*/g, "|")
        }
    });

    function I(a, b, c) { this.Kb = a;
        this.Jb = b;
        this.fc = c } F(function() {});

    function J(a, b, c, d) { this.f = a != null ? a : null;
        this.s = b != null ? b : null;
        this.Ga = c != null ? c : null;
        this.h = d != null ? d : null }
    var ga, K;
    F(function() { ga = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
        J.prototype.ja = function() { return this.f !== null };
        J.prototype.toString = function() { return [this.f, this.s || "", this.Ga || "", this.h || ""].join("") };
        K = function(a) { a = ga.exec(a); var b = null,
                c = null,
                d = null,
                e = null; if (a) { if (a[1] !== null && a[1]) b = parseInt(a[1], 10); if (a[2] !== null && a[2]) c = parseInt(a[2], 10); if (a[3] !== null && a[3]) d = parseInt(a[3], 10); if (a[4] !== null && a[4]) e = /^[0-9]+$/.test(a[4]) ? parseInt(a[4], 10) : a[4] } return new J(b, c, d, e) } });

    function L(a, b, c, d, e, f, j, g, i, l, h) { this.t = a;
        this.dc = b;
        this.u = c;
        this.bb = d;
        this.Wb = e;
        this.Q = f;
        this.Ha = j;
        this.ac = g;
        this.$b = i;
        this.Vb = l;
        this.G = h } F(function() { L.prototype.getName = function() { return this.t } });

    function M(a, b) { this.b = a;
        this.p = b }
    var ha = new L("Unknown", new J, "Unknown", "Unknown", new J, "Unknown", "Unknown", new J, "Unknown", undefined, new I(false, false, false));
    F(function() {
        M.prototype.parse = function() { return this.qb() ? this.Cb() : this.tb() ? this.Db() : this.ub() ? this.Fa() : this.vb() ? this.Fa() : this.pb() ? this.Bb() : ha };
        M.prototype.C = function() { var a = this.e(this.b, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1); if (a != "") { if (/BB\d{2}/.test(a)) a = "BlackBerry"; return a } a = this.e(this.b, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1); if (a != "") { if (a == "Mac_PowerPC") a = "Macintosh"; return a } return "Unknown" };
        M.prototype.Z = function() {
            var a = this.e(this.b, /(OS X|Windows NT|Android) ([^;)]+)/,
                2);
            if (a) return a;
            if (a = this.e(this.b, /Windows Phone( OS)? ([^;)]+)/, 2)) return a;
            if (a = this.e(this.b, /(iPhone )?OS ([\d_]+)/, 2)) return a;
            if (a = this.e(this.b, /(?:Linux|CrOS) ([^;)]+)/, 1)) { a = a.split(/\s/); for (var b = 0; b < a.length; b += 1)
                    if (/^[\d\._]+$/.test(a[b])) return a[b] }
            if (a = this.e(this.b, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) return a;
            return "Unknown"
        };
        M.prototype.qb = function() { return this.b.indexOf("MSIE") != -1 };
        M.prototype.Cb = function() {
            var a = this.C(),
                b = this.Z(),
                c = K(b),
                d = this.e(this.b, /MSIE ([\d\w\.]+)/,
                    1),
                e = K(d),
                f = a == "Windows" && e.f >= 6 || a == "Windows Phone" && c.f >= 8;
            return new L("MSIE", e, d, "MSIE", e, d, a, c, b, this.Y(this.p), new I(f, false, false))
        };
        M.prototype.tb = function() { return this.b.indexOf("Opera") != -1 };
        M.prototype.ub = function() { return /OPR\/[\d.]+/.test(this.b) };
        M.prototype.Db = function() {
            var a = "Unknown",
                b = this.e(this.b, /Presto\/([\d\w\.]+)/, 1),
                c = K(b),
                d = this.Z(),
                e = K(d),
                f = this.Y(this.p);
            if (c.ja()) a = "Presto";
            else { if (this.b.indexOf("Gecko") != -1) a = "Gecko";
                b = this.e(this.b, /rv:([^\)]+)/, 1);
                c = K(b) }
            if (this.b.indexOf("Opera Mini/") !=
                -1) { var j = this.e(this.b, /Opera Mini\/([\d\.]+)/, 1),
                    g = K(j); return new L("OperaMini", g, j, a, c, b, this.C(), e, d, f, new I(false, false, false)) }
            if (this.b.indexOf("Version/") != -1) { j = this.e(this.b, /Version\/([\d\.]+)/, 1);
                g = K(j); if (g.ja()) return new L("Opera", g, j, a, c, b, this.C(), e, d, f, new I(g.f >= 10, false, false)) } j = this.e(this.b, /Opera[\/ ]([\d\.]+)/, 1);
            g = K(j);
            if (g.ja()) return new L("Opera", g, j, a, c, b, this.C(), e, d, f, new I(g.f >= 10, false, false));
            return new L("Opera", new J, "Unknown", a, c, b, this.C(), e, d, f, new I(false,
                false, false))
        };
        M.prototype.vb = function() { return /AppleWeb(K|k)it/.test(this.b) };
        M.prototype.Fa = function() {
            var a = this.C(),
                b = this.Z(),
                c = K(b),
                d = this.e(this.b, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1),
                e = K(d),
                f = "Unknown",
                j = new J,
                g = "Unknown",
                i = false;
            if (/OPR\/[\d.]+/.test(this.b)) f = "Opera";
            else if (this.b.indexOf("Chrome") != -1 || this.b.indexOf("CrMo") != -1 || this.b.indexOf("CriOS") != -1) f = "Chrome";
            else if (/Silk\/\d/.test(this.b)) f = "Silk";
            else if (a == "BlackBerry" || a == "Android") f = "BuiltinBrowser";
            else if (this.b.indexOf("PhantomJS") !=
                -1) f = "PhantomJS";
            else if (this.b.indexOf("Safari") != -1) f = "Safari";
            else if (this.b.indexOf("AdobeAIR") != -1) f = "AdobeAIR";
            if (f == "BuiltinBrowser") g = "Unknown";
            else if (f == "Silk") g = this.e(this.b, /Silk\/([\d\._]+)/, 1);
            else if (f == "Chrome") g = this.e(this.b, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2);
            else if (this.b.indexOf("Version/") != -1) g = this.e(this.b, /Version\/([\d\.\w]+)/, 1);
            else if (f == "AdobeAIR") g = this.e(this.b, /AdobeAIR\/([\d\.]+)/, 1);
            else if (f == "Opera") g = this.e(this.b, /OPR\/([\d.]+)/, 1);
            else if (f == "PhantomJS") g =
                this.e(this.b, /PhantomJS\/([\d.]+)/, 1);
            j = K(g);
            i = f == "AdobeAIR" ? j.f > 2 || j.f == 2 && j.s >= 5 : a == "BlackBerry" ? c.f >= 10 : a == "Android" ? c.f > 2 || c.f == 2 && c.s > 1 : e.f >= 526 || e.f >= 525 && e.s >= 13;
            var l = e.f < 536 || e.f == 536 && e.s < 11,
                h = a == "iPhone" || a == "iPad" || a == "iPod" || a == "Macintosh";
            return new L(f, j, g, "AppleWebKit", e, d, a, c, b, this.Y(this.p), new I(i, l, h))
        };
        M.prototype.pb = function() { return this.b.indexOf("Gecko") != -1 };
        M.prototype.Bb = function() {
            var a = "Unknown",
                b = new J,
                c = "Unknown",
                d = this.Z(),
                e = K(d),
                f = false;
            if (this.b.indexOf("Firefox") !=
                -1) { a = "Firefox";
                c = this.e(this.b, /Firefox\/([\d\w\.]+)/, 1);
                b = K(c);
                f = b.f >= 3 && b.s >= 5 } else if (this.b.indexOf("Mozilla") != -1) a = "Mozilla";
            var j = this.e(this.b, /rv:([^\)]+)/, 1),
                g = K(j);
            f || (f = g.f > 1 || g.f == 1 && g.s > 9 || g.f == 1 && g.s == 9 && g.Ga >= 2 || j.match(/1\.9\.1b[123]/) != null || j.match(/1\.9\.1\.[\d\.]+/) != null);
            return new L(a, b, c, "Gecko", g, j, this.C(), e, d, this.Y(this.p), new I(f, false, false))
        };
        M.prototype.e = function(a, b, c) { if ((a = a.match(b)) && a[c]) return a[c]; return "" };
        M.prototype.Y = function(a) { if (a.documentMode) return a.documentMode }
    });

    function N(a) { this.wb = a || ia }
    var ia = "-";
    F(function() { N.prototype.Fb = function(a) { return a.replace(/[\W_]+/g, "").toLowerCase() };
        N.prototype.h = function() { for (var a = [], b = 0; b < arguments.length; b++) a.push(this.Fb(arguments[b])); return a.join(this.wb) } });

    function O(a, b, c, d) { this.a = a;
        this.j = b;
        this.da = c;
        this.k = d || ja;
        this.i = new N("-") }
    var ja = "mti";
    F(function() {
        O.prototype.wa = function() { this.a.w(this.j, this.i.h(this.k, "loading"));
            this.I("loading") };
        O.prototype.ab = function(a) { this.a.w(this.j, this.i.h(this.k, a.getName(), a.o().toString(), "loading"));
            this.I("fontloading", a) };
        O.prototype.Za = function(a) { this.a.M(this.j, this.i.h(this.k, a.getName(), a.o().toString(), "loading"));
            this.a.M(this.j, this.i.h(this.k, a.getName(), a.o().toString(), "inactive"));
            this.a.w(this.j, this.i.h(this.k, a.getName(), a.o().toString(), "active"));
            this.I("fontactive", a) };
        O.prototype.$a =
            function(a) { this.a.M(this.j, this.i.h(this.k, a.getName(), a.o().toString(), "loading"));
                this.a.ya(this.j, this.i.h(this.k, a.getName(), a.o().toString(), "active")) || this.a.w(this.j, this.i.h(this.k, a.getName(), a.o().toString(), "inactive"));
                this.I("fontinactive", a) };
        O.prototype.X = function() { this.a.M(this.j, this.i.h(this.k, "loading"));
            this.a.ya(this.j, this.i.h(this.k, "active")) || this.a.w(this.j, this.i.h(this.k, "inactive"));
            this.I("inactive") };
        O.prototype.Ya = function() {
            this.a.M(this.j, this.i.h(this.k, "loading"));
            this.a.M(this.j, this.i.h(this.k, "inactive"));
            this.a.w(this.j, this.i.h(this.k, "active"));
            this.I("active")
        };
        O.prototype.I = function(a, b) { if (this.da[a]) b ? this.da[a](b.getName(), b.o()) : this.da[a]() }
    });

    function ka() { this.Da = {} } F(function() { ka.prototype.Va = function(a, b) { this.Da[a] = b };
        ka.prototype.ib = function(a, b) { var c = []; for (var d in a)
                if (a.hasOwnProperty(d)) { var e = this.Da[d];
                    e && c.push(e(a[d], b)) }
            return c } });

    function P(a, b) { this.t = a;
        this.O = 4;
        this.F = "n"; if (a = (b || "n4").match(/^([nio])([1-9])$/i)) { this.F = a[1];
            this.O = parseInt(a[2], 10) } }
    F(function() { P.prototype.getName = function() { return this.t };
        P.prototype.gb = function() { return this.Ia(this.t) };
        P.prototype.Ia = function(a) { var b = [];
            a = a.split(/,\s*/); for (var c = 0; c < a.length; c++) { var d = a[c].replace(/['"]/g, "");
                d.indexOf(" ") == -1 ? b.push(d) : b.push("'" + d + "'") } return b.join(",") };
        P.prototype.o = function() { return this.F + this.O };
        P.prototype.hb = function() { var a = "normal",
                b = this.O + "00"; if (this.F === "o") a = "oblique";
            else if (this.F === "i") a = "italic"; return "font-style:" + a + ";font-weight:" + b + ";" } });

    function Q(a, b) { this.a = a;
        this.T = b;
        this.J = this.a.createElement("span", { "aria-hidden": "true" }, this.T) } F(function() { Q.prototype.oa = function(a) { this.a.Ka(this.J, this.Xa(a)) };
        Q.prototype.ia = function() { this.a.r("body", this.J) };
        Q.prototype.Xa = function(a) { return "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + a.gb() + ";" + a.hb() };
        Q.prototype.remove = function() { this.a.Ja(this.J) } });

    function R(a, b, c, d, e, f, j, g) { this.sa = a;
        this.mb = b;
        this.a = c;
        this.A = d;
        this.T = g || la;
        this.G = e;
        this.Aa = {};
        this.qa = f || 5E4;
        this.Ca = j || null;
        this.S = this.R = null;
        this.Gb() }
    var S = { Sb: "serif", Rb: "sans-serif", Pb: "monospace" },
        la = "BESb\uc5d0swy";
    F(function() {
        R.prototype.Gb = function() { var a = new Q(this.a, this.T);
            a.ia(); for (var b in S)
                if (S.hasOwnProperty(b)) { a.oa(new P(S[b], this.A.o()));
                    this.Aa[S[b]] = a.J.offsetWidth }
            a.remove() };
        R.prototype.start = function() { this.R = new Q(this.a, this.T);
            this.R.ia();
            this.S = new Q(this.a, this.T);
            this.S.ia();
            this.Hb = ea();
            this.R.oa(new P(this.A.getName() + ",serif", this.A.o()));
            this.S.oa(new P(this.A.getName() + ",sans-serif", this.A.o()));
            this.ta() };
        R.prototype.ca = function(a, b) { return a === this.Aa[b] };
        R.prototype.Lb = function(a,
            b) { for (var c in S)
                if (S.hasOwnProperty(c))
                    if (this.ca(a, S[c]) && this.ca(b, S[c])) return true; return false };
        R.prototype.lb = function() { return ea() - this.Hb >= this.qa };
        R.prototype.ob = function(a, b) { return this.ca(a, "serif") && this.ca(b, "sans-serif") };
        R.prototype.za = function(a, b) { return this.G.Jb && this.Lb(a, b) };
        R.prototype.rb = function() { return this.Ca === null || this.Ca.hasOwnProperty(this.A.getName()) };
        R.prototype.ta = function() {
            var a = this.R.J.offsetWidth,
                b = this.S.J.offsetWidth;
            if (this.ob(a, b) || this.za(a, b))
                if (this.lb()) this.za(a,
                    b) && this.rb() ? this.fa(this.sa) : this.fa(this.mb);
                else this.Wa();
            else this.fa(this.sa)
        };
        R.prototype.Wa = function() { setTimeout(C(function() { this.ta() }, this), 25) };
        R.prototype.fa = function(a) { this.R.remove();
            this.S.remove();
            a(this.A) }
    });

    function V(a, b, c, d) { this.a = b;
        this.K = c;
        this.ua = 0;
        this.La = this.Ba = false;
        this.qa = d;
        this.G = a.G }
    F(function() { V.prototype.W = function(a, b, c, d) { if (a.length === 0 && d) this.K.X();
            else { this.ua += a.length; if (d) this.Ba = d; for (d = 0; d < a.length; d++) { var e = a[d],
                        f = b[e.getName()];
                    this.K.ab(e);
                    (new R(C(this.cb, this), C(this.db, this), this.a, e, this.G, this.qa, c, f)).start() } } };
        V.prototype.cb = function(a) { this.K.Za(a);
            this.La = true;
            this.va() };
        V.prototype.db = function(a) { this.K.$a(a);
            this.va() };
        V.prototype.va = function() { if (--this.ua == 0 && this.Ba) this.La ? this.K.Ya() : this.K.X() } });
    mti.Nb = function() { this.Ia = '"' };
    mti.P = function() { this.bc = mti.P.Ra;
        this.Ib = mti.P.Ta };
    mti.P.Ra = ["font-style", "font-weight"];
    mti.P.Ta = { "font-style": [
            ["n", "normal"]
        ], "font-weight": [
            ["4", "normal"]
        ] };
    mti.P.Ob = function(a, b, c) { this.Xb = a;
        this.cc = b;
        this.Ib = c };

    function W(a, b, c) { this.ka = a;
        this.xa = b;
        this.b = c;
        this.la = this.ma = 0 }
    F(function() {
        W.prototype.Ua = function(a, b) { this.xa.Va(a, b) };
        W.prototype.load = function(a) { var b = a.context || this.ka;
            this.a = new G(this.ka, b);
            b = new O(this.a, b.document.documentElement, a);
            this.b.G.Kb ? this.yb(b, a) : b.X() };
        W.prototype.sb = function(a, b, c, d) { var e = this; if (d) a.load(function(f, j, g) { e.Ab(b, c, f, j, g) });
            else { a = --this.ma == 0;
                this.la--; if (a) this.la == 0 ? b.X() : b.wa();
                c.W([], {}, null, a) } };
        W.prototype.Ab = function(a, b, c, d, e) { var f = --this.ma == 0;
            f && a.wa();
            setTimeout(function() { b.W(c, d || {}, e || null, f) }, 0) };
        W.prototype.yb =
            function(a, b) { var c = this.xa.ib(b, this.a);
                b = b.timeout;
                this.la = this.ma = c.length;
                b = new V(this.b, this.a, a, b); for (var d = 0, e = c.length; d < e; d++) { var f = c[d];
                    ma(f, this.b, C(this.sb, this, f, a, b)) } }
    });
    var na = window.MonoTypeWebFonts = function() { var a = (new M(navigator.userAgent, document)).parse(); return new W(window, new ka, a) }();
    window.MonoTypeWebFonts.load = na.load;
    var X = window.MTIConfig || { isAsync: false, EnableCustomFOUTHandler: false, RemoveMTIClass: false };
    mti.v = function(a, b, c) { this.N = a;
        this.a = b;
        this.Eb = c;
        this.U = {};
        this.q = [];
        this.g = [] };
    mti.v.prototype.indexOf = function(a, b) { if (a.indexOf) return a.indexOf(b);
        else { for (var c = 0; c < a.length; c++)
                if (a[c] == b) return c; return -1 } };

    function Y(a, b, c) {
        var d = a.Eb,
            e = a.a.getComputedStyle(b),
            f = e.fontFamily,
            j = "",
            g = e.fontStyle,
            i = 0,
            l = 0,
            h = "";
        f = (f || "").replace(/^\s|\s$/g, "").replace(/'|"/g, "").replace(/,\s*/g, "|");
        if (f != "") {
            var t = f.split("|"),
                v = "";
            for (i = 0; i < t.length; i++) {
                var y = new RegExp("^(" + t[i] + ")$", "ig");
                for (l = 0; l < d.length; l++) {
                    var m = d[l];
                    v = m.fontfamily;
                    var s, p, o = v;
                    if (m.fontWeight != undefined && m.fontStyle != undefined) { s = m.fontWeight;
                        p = m.fontStyle;
                        h = p.charAt(0) + s / 100;
                        j = e.fontWeight == "normal" ? 400 : e.fontWeight == "bold" ? 700 : e.fontWeight } else {
                        var k =
                            "h1,h2,h3,h4,h5,h6,strong,b".split(",");
                        if (b.nodeType == 1) j = a.indexOf(k, b.tagName.toLowerCase()) >= 0 ? 400 : e.fontWeight == "normal" ? 400 : e.fontWeight == "bold" ? 700 : 400
                    }
                    if (s != undefined || p != undefined) o += "_" + h;
                    k = v.replace(/^\s|\s$/g, "");
                    var r = o.replace(/^\s|\s$/g, ""),
                        H = y.test(k);
                    r = y.test(r);
                    if (H || r) {
                        if (s != undefined || p != undefined)
                            if (j == s && g == p) a.g.push(new P(k, h));
                            else o == f && a.g.push(new P(k, h));
                        else { h = g.charAt(0) + j / 100;
                            a.g.push(new P(k)) }
                        if (X.EnableCustomFOUTHandler == true) a.a.w(b, c ? "mti_font_element" + c : "mti_font_element");
                        a.q.push(b);
                        v = v;
                        o = b.getAttribute("style");
                        o = o != null ? typeof o == "string" ? o : "cssText" in o ? o.cssText : "" : "";
                        v += o && o.indexOf("font-weight") > -1 && o.indexOf("font-style") > -1 ? "_" + g.charAt(0) + j / 100 : h.length > 1 ? "_" + h : "";
                        if (m.enableSubsetting || X.EnableDSForAllFonts)
                            if (a.U[v.replace(/^\s|\s$/g, "")]) a.U[v.replace(/^\s|\s$/g, "")] += a.a.$(b);
                            else a.U[v.replace(/^\s|\s$/g, "")] = a.a.$(b)
                    }
                }
            }
        }
    }

    function oa(a, b, c) {
        b = "img,script,noscript,iframe,object,style,param,embed,link,meta,head,title,br,hr,svg,path".split(",");
        var d = a.N,
            e = null;
        do
            if (d) {
                e = d.firstChild;
                if (e == null) { if (d.nodeType == 1)
                        if (a.indexOf(b, d.tagName.toLowerCase()) < 0) c ? Y(a, d, c) : Y(a, d);
                    e = d.nextSibling }
                if (e == null) {
                    d = d;
                    do {
                        e = d.parentNode;
                        if (e == a.N) { if (e.tagName.toLowerCase() != "body")
                                if (a.indexOf(b, e.tagName.toLowerCase()) < 0) c ? Y(a, e, c) : Y(a, e); break }
                        if (e != null) {
                            if (e.nodeType == 1)
                                if (a.indexOf(b, e.tagName.toLowerCase()) < 0) c ? Y(a, e, c) : Y(a, e);
                            d = e;
                            e = e.nextSibling
                        }
                    } while (e == null)
                }
                d = e
            }
        while (d != a.N);
        c = false;
        for (var f in a.U) { c = true; break }
        if (c) return a.U;
        return null
    }
    mti.v.prototype.D = function() { var a = this.g,
            b = a == null ? 0 : a.length,
            c = {},
            d, e = []; for (d = 0; d < b; d += 1) { var f = a[d].t + "||" + a[d].O + "||" + a[d].F;
            c[f] = f } for (d in c) { b = c[d].split("||");
            a = b[0];
            (b = b[2] + b[1]) ? e.push(new P(a, b)): e.push(new P(a)) } return this.g = e };
    mti.v.prototype.V = function(a, b, c) { var d = "img,script,noscript,iframe,object,style,param,embed,link,meta,head,title,br,hr,svg,path".split(","),
            e = this.N,
            f = null;
        do { f = e.firstChild; if (f == null) { e.nodeType == 1 && this.indexOf(d, e.tagName.toLowerCase()) < 0 && Y(this, e);
                f = e.nextSibling } if (f == null) { e = e;
                do { f = e.parentNode; if (f == this.N) break;
                    f.nodeType == 1 && this.indexOf(d, f.tagName.toLowerCase()) < 0 && this.a.B(f).indexOf(a) > -1 && this.a.V(f, a, b, c);
                    e = f;
                    f = f.nextSibling } while (f == null) } e = f } while (e != this.N); return null };
    mti.Oa = 4E4;
    mti.d = function(a, b, c, d, e) { this.L = a;
        this.b = b;
        this.a = c;
        this.c = d;
        this.eb = {};
        this.l = e;
        this.g = [];
        this.ea = false };
    mti.d.Qa = "monotype";

    function ma(a, b, c) {
        b = a.c.projectId;
        var d;
        if (b) {
            a.L.mti_element_cache = [];
            pa(a);
            var e = a.b.getName();
            e = e.toLowerCase();
            var f = e == "opera" ? true : false,
                j = a.b.u,
                g = e == "msie" && j <= 8 ? true : false,
                i = function() {
                    if (X.UseHybrid) { window.MonoTypeWebFonts.addEvent("active", function() { qa(a, a.aa, d) });
                        window.MonoTypeWebFonts.addEvent("inactive", function() { qa(a, a.aa, d) }) }

                    function x() {
                        w = new mti.v(document.body, a.a, a.c.pfL);
                        D = oa(w);
                        f && ra(a);
                        a.L.mti_element_cache = w.q;
                        d = w.D();
                        Z(a, d, D);
                        var u = w.q;
                        a.l != null && mti.z(a.l, a.l.load, u)();
                        for (var A = 0; A < u.length; A++)
                            for (var q in a.n) a.a.B(u[A]).indexOf(q) > -1 && a.a.V(u[A], q, a.n[q], g, a.ea)
                    }
                    var B = a.c.reqSub || X.EnableDSForAllFonts,
                        w = null,
                        D = null;
                    if (f && B) { sa(a);
                        va(a, function() { x() }) } else if (!f && B) x();
                    else { w = new mti.v(document.body, a.a, a.c.pfL);
                        D = oa(w);
                        Z(a, w.D);
                        d = w.D();
                        a.L.mti_element_cache = w.q;
                        a.l != null && mti.z(a.l, a.l.load, w.q)() } c(true)
                };
            if (X.isAsync === true) X.onReady = i;
            else {
                setTimeout(function() { document.documentElement.style.visibility = "" }, 750);
                if (a.c.reqSub || X.EnableDSForAllFonts)
                    if (X.CheckFontWatcher &&
                        X.UseHybrid) {
                        var l = {},
                            h = 0,
                            t = a.c.pfL.length;
                        b = a.c.projectId;
                        e = a.c.ec;
                        j = a.c.fcURL;
                        for (var v = a.c.ck, y = 0; y < a.c.pfL.length; y++) {
                            var m = a.c.pfL[y],
                                s = m.fontfamily,
                                p = m.contentIds,
                                o = m.enableOtf;
                            if (m.enableSubsetting || X.EnableDSForAllFonts) {
                                getCookieFlag = false;
                                var k = wa(a, p),
                                    r, H;
                                if (m.fontWeight != undefined && m.fontStyle != undefined) { r = m.fontWeight;
                                    H = m.fontStyle } fontURL = $(a, p, b, false, e, j, "", v, s, r, H, null, k, o);
                                m = k != null && k.toUpperCase() == "EOT" || k.toUpperCase() == "MTX";
                                _cssText = '@font-face{\nfont-family:"' + s + '_fw";';
                                _cssText += '\nsrc:url("' + fontURL + '")';
                                p = { TTF: "truetype", WOFF: "woff", SVG: "svg", MTX: "truetype", OTF: "opentype" };
                                m || (_cssText += ' format("' + p[k.toUpperCase()] + '")');
                                _cssText += ";}\n";
                                k = document.getElementById("mti_stylesheet_cache" + a.c.projectId);
                                var E;
                                if (k == null) E = a.a.createElement("style", { type: "text/css", id: "mti_stylesheet_cache" + a.c.projectId });
                                if (_cssText != "") { k == null && a.a.r("head", E); if (E.styleSheet) E.styleSheet.cssText += _cssText;
                                    else E.innerHTML += _cssText } xa(a, s + "_fw", function(x, B) {
                                    l[x] = B;
                                    h++;
                                    if (h ==
                                        t) { for (B = x = 0; B < a.c.pfL.length; B++)
                                            if (l[a.c.pfL[B].fontfamily + "_fw"] == true) { a.c.pfL[B].enableSubsetting = false;
                                                x++ }
                                        if (x == h) Z(a, a.c.pfL);
                                        else { x = document.getElementById("mti_stylesheet_cache" + a.c.projectId);
                                            x.parentNode.removeChild(x);
                                            ya(a, i) } }
                                })
                            } else t--
                        }
                    } else ya(a, i);
                else a.Na(function() { var x = new mti.v(document.body, a.a, a.c.pfL);
                    oa(x);
                    d = x.D();
                    Z(a, d);
                    a.L.mti_element_cache = x.q;
                    a.l != null && mti.z(a.l, a.l.load, x.q)();
                    c(true) });
                if (X.EnableCustomFOUTHandler == true) document.documentElement.style.visibility =
                    "hidden"
            }
            var n = [];
            if (d) n = d;
            if (a.c.reqSub && (d == null ? 0 : d.length) == 0 || f)
                for (r = 0; r < a.c.pfL.length; r++) n.push(new P(a.c.pfL[r].fontfamily));
            a.L["__mti_fntLst" + b] = function() { for (var x = [], B = {}, w = [], D = 0; D < n.length; D++)
                    if (!B.hasOwnProperty(n[D])) { x.push({ fontfamily: n[D].t });
                        w.push(n[D]);
                        B[n[D]] = 1 }
                return x }
        } else c(true)
    }

    function za(a, b) { if (document.getElementsByClassName) return document.getElementsByClassName(b);
        else { var c = [];
            a.a.Ma(document.body, function(d) { var e;
                e = d.className; var f; if (e) { e = e.split(" "); for (f = 0; f < e.length; f++)
                        if (e[f] === b) { c.push(d); break } } }); return c } }

    function sa(a, b) {
        var c = document.createElement("STYLE");
        c.setAttribute("type", "text/css");
        c.id = "monotype_fake_fontface_" + a.c.projectId;
        var d = "";
        a = a.c.pfL;
        if (a != null) {
            d += "@font-face{font-family:opera_testfont;src:url(data:font/opentype;base64,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)}";
            for (var e =
                    0; e < a.length; e++) d += "@font-face{font-family:'" + a[e].fontfamily + (b ? b : "") + "';src:url(data:font/opentype;base64,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);}"
        }
        c.textContent =
            d;
        b = document.getElementsByTagName("HEAD");
        b.length > 0 && b[0].appendChild(c)
    }

    function ra(a) {
        (a = document.getElementById("monotype_fake_fontface_" + a.c.projectId)) && a.parentNode.removeChild(a) }

    function va(a, b) { var c = document.createElement("SPAN");
        c.innerHTML = "MMMWWW";
        c.style.position = "absolute";
        c.style.left = "-32768px";
        c.style.fontFamily = "opera_testfont";
        document.documentElement.appendChild(c); var d = 0,
            e = (new Date).getTime();
        d = window.setInterval(function() { if (a.a.B(c) === "opera_testfont" || (new Date).getTime() - e > 200) { try { document.documentElement.removeChild(c) } catch (f) {} b();
                window.clearInterval(d) } }, 60) }

    function wa(a, b) { var c = a.c.ffArray,
            d = a.b.getName();
        d = d.toLowerCase(); var e = a.b.u; if (d == "firefox") d = "mozilla"; if (/ipad|ipod|iphone/.test(a.b.Ha.toLowerCase())) d = "msafari"; if (d.toLowerCase() == "mozilla" && e == "Unknown") { e = a.b.Q;
            d = "msie" } a = c[d];
        c = ""; for (var f in a)
            if (parseFloat(e) >= parseFloat(f))
                if (b[a[f].toUpperCase()]) c = a[f]; return c }

    function Aa(a, b, c, d, e) { a = "";
        c = c;
        c += d != undefined && e != undefined ? "_" + e.charAt(0) + d / 100 : "_n4"; if (b && b[c]) a = b[c]; return a.length > 0 ? a : null } mti.d.prototype.n = {};

    function Z(a, b, c, d) {
        var e = "TTF",
            f = a.c.projectId,
            j = a.c.ec,
            g = a.c.fcURL,
            i = a.c.dfcURL,
            l = a.a.createElement("style", { type: "text/css", id: "mti_fontface_" + (d ? "Aj_" : "") + a.c.projectId }),
            h = "",
            t = false,
            v = {},
            y = {};
        a.n = {};
        var m = { TTF: "truetype", WOFF: "woff", SVG: "svg", MTX: "truetype", OTF: "opentype" },
            s = a.b.getName();
        s = s.toLowerCase();
        var p = a.b.u;
        if (s.toLowerCase() == "mozilla" && p == "Unknown") { p = a.b.Q;
            s = "msie" }
        var o = s == "msie" && p < 8 ? true : false;
        p = s == "msie" && p <= 8 ? true : false;
        s = s == "opera" ? true : false;
        var k = null,
            r = null;
        b || (b = []);
        for (var H = 0; H < a.c.pfL.length; H++) {
            var E = a.c.pfL[H],
                n = E.fontfamily,
                x = E.contentIds,
                B = E.enableOtf,
                w = E.enableSubsetting,
                D = null;
            if (E.fontWeight != undefined && E.fontStyle != undefined) { k = E.fontWeight;
                r = E.fontStyle;
                D = r.charAt(0) + k / 100;
                a.ea = true } e = wa(a, x);
            var u = true,
                A = "";
            if (b.length > 0 || s || !w) {
                u = s || !w ? true : false;
                for (w = 0; w < b.length; w++) {
                    A = k != undefined || r != undefined ? n + "_" + r.charAt(0) + k / 100 : n + "_n4";
                    if (b[w].t == n && (k ? b[w].O == k / 100 : true) && (r ? b[w].F == r.charAt(0) : true)) {
                        D == null ? a.g.push(new P(n)) : a.g.push(new P(n, D));
                        u = true;
                        break
                    }
                }
                if (s) D == null ? a.g.push(new P(n)) : a.g.push(new P(n, D));
                if (u) {
                    D = e != null && e.toUpperCase() == "EOT" || e.toUpperCase() == "MTX";
                    E = X.EnableDSForAllFonts == true ? true : E.enableSubsetting;
                    u = i;
                    var q = a.c.ck;
                    w = n;
                    y = k;
                    var z = r,
                        T = e,
                        U = x[T.toUpperCase()];
                    u = (window.location.protocol == "https:" ? "https://" : "http://") + u.replace("http://", "").replace("https://", "");
                    u = u + "?";
                    if (j) u += q + "&";
                    u += "fctypeId=" + a.c.fctypeArray[T] + "&fcId=" + x.TTF + "&origId=" + U;
                    u += "&projectId=" + f;
                    u += "&content=";
                    q = "";
                    a.b.getName().toLowerCase();
                    if (c) { Ba(a, Aa(a, c, w, y, z));
                        q += "" + la + "Mm" } w = u + q;
                    z = a.c.bsmcArray;
                    q = a.b.getName();
                    q = q.toLowerCase();
                    if (q == "firefox") q = "mozilla";
                    if (/ipad|ipod|iphone/.test(a.b.Ha.toLowerCase())) q = "msafari";
                    y = a.b.u;
                    if (q.toLowerCase() == "mozilla" && y == "Unknown") { y = a.b.Q;
                        q = "msie" } z = z[q];
                    q = "";
                    for (var ta in z)
                        if (parseFloat(y) >= parseFloat(ta)) q = z[ta];
                    y = q;
                    if (w.length > y) { u = y - u.length;
                        u = { Ea: Math.ceil(w.length / u), Zb: u } } else u = { Ea: 1 };
                    w = u.Ea;
                    y = false;
                    if (o && w > 1) { w = 1;
                        y = true;
                        E = false } u = "";
                    if (w > 1 || d) {
                        if (c !== null) {
                            t = true;
                            v[A] || (v[A] = []);
                            if (c) var ua = c[A];
                            if (ua) {
                                y = [];
                                z = "";
                                q = z = (d ? n.length > 25 ? n.substring(0, 20) : n : n) + (d ? d : "");
                                q += p && r != undefined && k != undefined ? "_" + r.charAt(0) + k / 100 : r != undefined && k != undefined ? "_" + r.charAt(0) + k / 100 : "_n4";
                                v[A].push(q);
                                c[q] = ua;
                                u = w > 1 ? $(a, x, f, false, j, g, i, a.c.ck, z, k, r, c, e, B) : $(a, x, f, E, j, g, i, a.c.ck, z, k, r, c, e, B);
                                if (u != "") {
                                    h += '@font-face{\nfont-family:"' + (p && r != undefined && k != undefined ? q : z) + '";';
                                    if (p == false && k != undefined && r != undefined) { h += "\nfont-style:" + r + ";";
                                        h += "\nfont-weight:" + k + ";" } h += '\nsrc:url("' + u + '")';
                                    D || (h +=
                                        ' format("' + m[e.toUpperCase()] + '")');
                                    h += ";}\n";
                                    y.push("'" + z + "'")
                                }
                                a.n[n] = y
                            } else if (p && !E) { if (p && k != undefined && r != undefined) n += "_" + r.charAt(0) + k / 100;
                                u = $(a, x, f, E, j, g, i, a.c.ck, n + (d ? d : ""), k, r, y ? null : c, e, B); if (u != "") { h += '@font-face{\nfont-family:"' + n + (d ? d : "") + '";'; if (p == false && k != undefined && r != undefined) { h += "\nfont-style:" + r + ";";
                                        h += "\nfont-weight:" + k + ";" } h += '\nsrc:url("' + u + '")'; if (!D) { n = x[e.toUpperCase()];
                                        e = m[e.toUpperCase()];
                                        n || (e = m.TTF);
                                        h += " format('" + e + "')" } h += ";}\n" } }
                        }
                    } else {
                        u = $(a, x, f, E, j, g, i, a.c.ck,
                            n + (d ? d : ""), k, r, y ? null : c, e, B);
                        if (u != "") { B = ""; if (p && k != undefined && r != undefined) { B = "_" + r.charAt(0) + k / 100;
                                a.n[n] = n + B } h += '@font-face{\nfont-family:"' + n + (d ? d : "") + B + '";'; if (p == false && k != undefined && r != undefined) { h += "\nfont-style:" + r + ";";
                                h += "\nfont-weight:" + k + ";" } h += '\nsrc:url("' + u + '")'; if (!D) { n = x[e.toUpperCase()];
                                e = m[e.toUpperCase()];
                                n || (e = m.TTF);
                                h += " format('" + e + "')" } h += ";}\n" }
                    }
                }
            }
        }
        if (t === true || d) { a.a.Ja(a.a.getElementById("mti_stylesheet_" + (d ? "Aj_" : "") + a.c.projectId) || {});
            d ? pa(a, v, d) : pa(a, v) } h != "" && a.a.r("head",
            l);
        if (l.styleSheet) l.styleSheet.cssText = h;
        else { a = document.createTextNode(h);
            l.appendChild(a) }
    }

    function pa(a, b, c) {
        var d = new N("-"),
            e = a.a.createElement("style", { type: "text/css", id: "mti_stylesheet_" + (c ? "Aj_" : "") + a.c.projectId }),
            f = "",
            j = "";
        j = X.UseTextIndent == true ? "text-align:left;text-indent:-9999px;font-size:0px" : "visibility:hidden;";
        if (X.EnableCustomFOUTHandler == true) {
            var g = a.c.pfL;
            f += "." + ja + "-loading .mti_font_element" + (c ? "_Aj" : "") + "{" + j + "}\n";
            for (var i = 0; i < g.length; i++) {
                var l = g[i].fontfamily,
                    h = "4",
                    t = "n";
                if (g[i].fontWeight != undefined && g[i].fontStyle != undefined) { h = g[i].fontWeight / 100;
                    t = g[i].fontStyle.charAt(0) }
                if (c) l +=
                    c;
                if (l) f += "." + d.h(ja, l, t + h, "loading") + " .mti_font_element" + (c ? c : "") + "{" + j + "}\n"
            }
        }
        d = (new M(navigator.userAgent, document)).parse().getName();
        d = d.toLowerCase();
        h = a.b.u;
        if (d.toLowerCase() == "mozilla" && h == "Unknown") { h = a.b.Q;
            d = "msie" } d = d == "msie" && h <= 8 ? true : false;
        for (i in a.c.selectorFontMap) {
            g = a.c.selectorFontMap[i];
            l = g.familyName;
            t = g.fontStyle;
            h = g.fontWeight;
            l = l;
            if (b && b[l] && b[l].length > 0) l = b[l].join("','");
            if (!c) {
                if (d && t != undefined && h != undefined) l += "_" + t.charAt(0) + h / 100;
                f += i + "{font-family:'" + l + "';";
                if (d ==
                    false && t != undefined && h != undefined) { f += "\n font-style:" + t + ";";
                    f += "\n font-weight:" + h + ";" }
                if (a.l != null) { h = g.otf;
                    t = g.vrnt; if (h && h != null && h != "") f += a.l.Ub(h, t) } f += "}\n"
            }
            if (X.EnableCustomFOUTHandler == true) { f += "/*fout specific code:*/\n";
                h = i.split(","); for (var v in h) f += "." + ja + "-loading " + h[v] + "{" + j + "}\n" }
        }
        f != "" && a.a.r("head", e);
        if (e.styleSheet) e.styleSheet.cssText = f;
        else { a = document.createTextNode(f);
            e.appendChild(a) }
    }

    function Ba(a, b) { var c = a.c.specialChar,
            d = c.length.toString().length; if (b && typeof b == "string") { b = b.replace(/\s/g, "").replace(/\n/g, "").replace(/\r/g, ""); for (var e = "", f = b.length, j = null, g = "", i = [], l = 0; l < f; l++) { j = b.charAt(l); if (mti.d.indexOf(c, escape(j)) > -1) { if (mti.d.indexOf(i, j) == -1) { i.push(j);
                        g += Ca(a, mti.d.indexOf(c, escape(j)), d) } } else if (e.indexOf(j) == -1) e += j } return e + "::" + g } return "" }

    function Ca(a, b, c) { if (b.toString().length < c) { a = (new Array(1 + c)).join("0"); return (a + b).slice(-a.length) } else return b }

    function $(a, b, c, d, e, f, j, g, i, l, h, t, v, y, m) {
        var s = b[v.toUpperCase()],
            p = "http://",
            o = "";
        if (X.UseHybrid) { o = i + "_f"; if (l != undefined && h != undefined) { fontVariation = h.charAt(0) + l / 100;
                o = (i.length > 25 ? i.substring(0, 20) : i) + "_" + fontVariation + "_f" } if (d == true && Da(a, o) && !m) return $(a, b, c, false, e, f, j, g, i, l, h, t, v, y, true) } m = a.c.fontdataversion;
        var k = a.c.env;
        if (window.location.protocol == "https:") p = "https://";
        f = f.replace("http://", "").replace("https://", "");
        j = j.replace("http://", "").replace("https://", "");
        f = p + f + (y ? "ot/" :
            "");
        j = p + j;
        if (d) { o = j + "?"; if (e) o += g + "&";
            o += "fctypeId=" + a.c.fctypeArray[v] + "&fcId=" + b.TTF + "&origId=" + s; if (m == "v2") { o += "&fontdataversion=v2"; if (k != "undefined" && k != "") o += "&env=" + k } } else if (e)
            if (s) { if (m == "v2") f += v.toUpperCase() == "EOT" ? "2/" : v.toUpperCase() == "WOFF" ? "3/" : v.toUpperCase() == "SVG" ? "11/" : v.toUpperCase() == "OTF" ? "13/" : "1/";
                o = f + s + "." + v.toLowerCase() + "?" + g } else o = f + "1/" + b.TTF + ".ttf?" + g;
        else o = f + "?fctypeId=" + a.c.fctypeArray[v] + "&fcId=" + s;
        o += "&projectId=" + c;
        a.b.getName().toLowerCase();
        b = null;
        if (t)
            if (d ||
                X.EnableDSForAllFonts) { d = "";
                i = Aa(a, t, i, l, h);
                fontCharMapArray = Ba(a, i).split("::");
                i = fontCharMapArray[0];
                d = fontCharMapArray[1]; if (i) b = i.replace('"', "").replace("?", "").replace(";", "").replace("#", "").replace("&", ""); if (b && b.length > 0 || d && d.length > 0) { o += "&content=" + (b || "") + la + "Mm"; if (d != "") o += d } else o = "" }
        if (v != null && v.toUpperCase() == "SVG") o += "#" + s;
        return o
    }
    mti.d.indexOf = function(a, b) { if (Array.prototype.indexOf) return a.indexOf(b);
        else { var c = a.length >>> 0,
                d = Number(b) || 0;
            d = d < 0 ? Math.ceil(d) : Math.floor(d); if (d < 0) d += c; for (; d < c; d++)
                if (d in a && a[d] === b) return d; return -1 } };

    function Ea(a, b) {
        var c = false;
        c = document.getElementById(b) === null ? false : true;
        if (!c) return false;
        var d = true;
        a.g = [];
        var e = a.c.projectId,
            f = a.c.ec,
            j = a.c.fcURL,
            g = a.c.ck;
        c = "";
        var i, l;
        d = a.b.u;
        var h = a.b.getName().toLowerCase(),
            t = h == "msie" && d <= 8 ? true : false,
            v = h == "opera" ? true : false,
            y = { TTF: "truetype", WOFF: "woff", SVG: "svg", MTX: "truetype", OTF: "opentype" };
        d = true;
        if (X.UseHybrid) {
            d = false;
            var m = document.getElementById(b);
            h = a.a.getElementById("mti_fontface_" + e);
            if (h == null) {
                h = a.a.createElement("style", {
                    type: "text/css",
                    id: "mti_fontface_" + e
                });
                a.a.r("head", h)
            }
            var s = m.getAttribute("data-mtiFont"),
                p = a.a.getComputedStyle(m);
            if (s == null) s = p.fontFamily.replace(/^\s|\s$/g, "").replace(/'|"/g, "");
            for (var o = [], k = 0; k < a.c.pfL.length; k++) o.push(a.c.pfL[k].fontfamily);
            if (m.hasChildNodes && mti.d.indexOf(o, s) < 0) { k = m.childNodes; for (m = 0; m < k.length; m++)
                    if (k[m].nodeType == 1) { s = a.a.B(k[m]).replace(/^\s|\s$/g, "").replace(/'|"/g, ""); if (mti.d.indexOf(o, s) > -1) break } } o = p.fontWeight;
            p = p.fontStyle;
            k = p.charAt(0) + o / 100;
            var r = s.split(",");
            for (m =
                0; m < r.length; m++) {
                d = r[m] + "_f";
                var H, E = false;
                for (k = 0; k < a.c.pfL.length; k++) { H = a.c.pfL[k]; var n = H.fontfamily; if (r[m] == n && H.enableSubsetting)
                        if (H.fontWeight != undefined && H.fontStyle != undefined) { i = H.fontWeight;
                            l = H.fontStyle; if (p == H.fontStyle && o == H.fontWeight) { E = true;
                                k = l.charAt(0) + i / 100;
                                d = (n.length > 25 ? n.substring(0, 20) : n) + "_" + k + "_f";
                                a.g.push(new P(n, k)); break } } else { a.g.push(new P(n));
                            E = true; break } }
                if (Da(a, d) && E) {
                    d = false;
                    contentIdArray = H.contentIds;
                    enableOtf = H.enableOtf;
                    fFormat = wa(a, contentIdArray);
                    H = n;
                    if (t &&
                        l != undefined && i != undefined) H += "_" + l.charAt(0) + i / 100;
                    fontURL = $(a, contentIdArray, e, false, f, j, "", g, H, i, l, null, fFormat, enableOtf);
                    if (fontURL != "") { c += '@font-face{\nfont-family:"' + n + '";'; if (t == false && i != undefined && l != undefined) { c += "\nfont-style:" + l + ";";
                            c += "\nfont-weight:" + i + ";" } c += '\nsrc:url("' + fontURL + '")'; if (!(fFormat != null && fFormat.toUpperCase() == "EOT" || fFormat.toUpperCase() == "MTX")) { i = contentIdArray[fFormat.toUpperCase()];
                            l = y[fFormat.toUpperCase()];
                            i || (l = y.TTF);
                            c += " format('" + l + "')" } c += ";}\n" }
                    if (h.styleSheet) {
                        i =
                            h.styleSheet.cssText;
                        i = i.replace(n, "xxx");
                        h.styleSheet.cssText = i;
                        h.styleSheet.cssText += c
                    } else h.innerHTML += c;
                    document.getElementById(b).style.fontFamily = "" + s;
                    document.getElementById(b).removeAttribute("data-mtiFont");
                    n = "";
                    if (document.getElementById(b).hasChildNodes()) { n = document.getElementById(b).childNodes; for (c = 0; c < n.length; c++)
                            if (n[c].nodeType == 1 && n[c].getAttribute("data-mtiFont")) { n[c].style.fontFamily = n[c].getAttribute("data-mtiFont");
                                n[c].removeAttribute("data-mtiFont") } }
                    break
                } else d = true
            }
        }
        if (d) {
            var x =
                Fa(a),
                B = null,
                w = null,
                D = [],
                u = function() {
                    B = new mti.v(document.getElementById(b).parentElement, a.a, a.c.pfL);
                    w = oa(B, {}, x);
                    v && ra(a);
                    var A = [];
                    if (w != undefined)
                        for (var q in w) { q += x;
                            A.push(new P(z)) } a.L.mti_element_cache = B.q;
                    Z(a, B.D(), w, x);
                    A = B.q;
                    a.l != null && mti.z(a.l, a.l.Yb, A)();
                    for (q = 0; q < A.length; q++)
                        for (var z in a.n)
                            if (a.a.B(A[q]).indexOf(z) > -1)
                                if (A[q].getAttribute("id") == b) a.a.V(A[q], z, a.n[z], t);
                                else a.a.nb(a.a.getElementById(b), A[q]) && a.a.B(A[q]).replace(/'|"/g, "").indexOf(z) > -1 && a.a.V(A[q], z, a.n[z], t);
                    A = a.n[z] == null ? 0 : a.n[z].length;
                    for (q = 0; q < A; q++) D.push(new P(a.n[z][q]))
                };
            if (v) { sa(a, x);
                va(a, function() { u() }) } else u();
            X.RemoveMTIClass == true && setTimeout(function() {
                var A = "mti_font_element" + x,
                    q = (new M(navigator.userAgent, document)).parse(),
                    z = za(a, A),
                    T = q.getName();
                T = T.toLowerCase();
                q = q.u;
                T = T == "msie" && q < 8 ? true : false;
                for (q = new RegExp(A, "ig"); z.length > 0;) {
                    for (var U = 0; U < z.length; U++)
                        if (z[U].className.split(" ").length == 1 && !T) z[U].removeAttribute("class");
                        else z[U].className = z[U].className.replace(q, " ").replace(/^\s+|\s+$/g,
                            "");
                    z = za(a, A)
                }
            }, fa.Oa);
            n = {};
            if (X.UseHybrid) { n.fontactive = function() { qa(a, a.aa, D) };
                n.fontinactive = function() { qa(a, a.aa, D) } }(new V(a.b, a.a, new O(a.a, document.documentElement, n), 6E5)).W(D, {}, {}, false)
        }
    }
    mti.d.prototype.load = function(a) { a(this.D(), this.eb) };
    mti.Pa = function(a) { this.p = a };
    mti.Pa.prototype.protocol = function() { var a = ["http:", "https:"],
            b = a[0]; if (this.p && this.p.location && this.p.location.protocol) { var c = 0; for (c = 0; c < a.length; c++)
                if (this.p.location.protocol == a[c]) return this.p.location.protocol } return b };
    mti.ra = function(a, b) { this.a = a;
        this.c = b };
    mti.ra.prototype.appendBannerScript = function() { var a;
        a = new RegExp(escape("WFS_MTI_SS") + "=([^;]+)"); if (a.test(document.cookie + ";")) { a.exec(document.cookie + ";");
            a = unescape(RegExp.$1) } else a = false; var b = this.c.bannerHandlerURL; if (b) { b += "?projectId=" + this.c.projectId; if (a !== false) b += "&WFS_MTI_SS=" + a;
            b += "&" + escape((new Date).getTime());
            this.a.r("head", this.a.createElement("Script", { type: "text/javascript", src: b })) } };
    mti.Sa = function(a) { this.zb = a };
    MonoTypeWebFonts.Ua(mti.d.Qa, function(a) { var b = (new M(navigator.userAgent, document)).parse(),
            c = new G(window),
            d = null; if (a.enableOtf) d = new mti.Qb(c, b, a);
        window.MonoTypeWebFonts.BannerHandler = new mti.ra(c, a);
        a = new mti.d(window, b, c, a, d); var e = new mti.Sa(a);
        window.MonoTypeWebFonts.renderPartial = function(f) { Ea(e.zb, f) }; return a });

    function Fa() { for (var a = "", b = 0; b < 5; b++) a += "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 26)); return a } mti.d.prototype.D = function() { return this.g };
    mti.d.H = false;

    function ya(a, b) {
        if (mti.d.H === true) b();
        else {
            var c = a.a.m;
            if (a.b.getName() == "MSIE") { var d = false,
                    e = function() { if (!d) { d = true;
                            b();
                            mti.d.H = true } };
                (function() { try { c.documentElement.doScroll("left"); if (c.readyState != "complete") { setTimeout(arguments.callee, 50); return } } catch (f) { setTimeout(arguments.callee, 50); return } e() })();
                c.onreadystatechange = function() { if (c.readyState == "complete") { c.onreadystatechange = null;
                        e() } } } else if (a.b.bb == "AppleWebKit" && a.b.Q < 525)(function() {
                if (["loaded", "complete"].indexOf(c.readyState) >
                    -1) { b();
                    mti.d.H = true } else setTimeout(arguments.callee, 50)
            })();
            else if (c.addEventListener)
                if (c.readyState == "loading") c.addEventListener("DOMContentLoaded", function() { b();
                    mti.d.H = true }, false);
                else window.onload = function() { b();
                    mti.d.H = true };
            else window.onload = function() { b();
                mti.d.H = true }
        }
    }
    mti.d.prototype.Na = function(a) {
        function b() { document.body ? a() : setTimeout(b, 0) } b() };
    mti.d.prototype.aa = function(a, b) {
        var c = this;
        if (!(a != null && a.length < 1)) {
            var d = c.c.projectId,
                e = c.c.ec,
                f = c.c.fcURL,
                j = c.c.ck;
            a = "";
            var g, i, l = c.b.u,
                h = c.b.getName();
            h = h.toLowerCase();
            var t = h == "msie" && l <= 8 ? true : false;
            h = false;
            var v = { TTF: "truetype", WOFF: "woff", SVG: "svg", MTX: "truetype", OTF: "opentype" };
            l = [];
            for (var y = 0; y < c.c.pfL.length; y++) {
                for (var m = c.c.pfL[y], s = false, p = m.fontfamily, o = 0; o < c.g.length; o++)
                    if (c.g[o].t == p && (m.enableSubsetting || X.EnableDSForAllFonts)) {
                        var k = p + "_f";
                        s = true;
                        if (c.ea) {
                            s = false;
                            if (c.g[o].O ==
                                m.fontWeight / 100 && c.g[o].F == m.fontStyle.charAt(0)) { s = true;
                                g = m.fontWeight;
                                i = m.fontStyle;
                                fontVariation = i.charAt(0) + g / 100;
                                k = (p.length > 25 ? p.substring(0, 20) : p) + "_" + fontVariation + "_f" }
                        }
                        break
                    }
                if (s) {
                    k = p + "_f";
                    if (m.enableSubsetting || X.EnableDSForAllFonts) {
                        if (m.fontWeight != undefined && m.fontStyle != undefined) { g = m.fontWeight;
                            i = m.fontStyle;
                            fontVariation = i.charAt(0) + g / 100;
                            k = (p.length > 25 ? p.substring(0, 20) : p) + "_" + fontVariation + "_f" } l.push(k);
                        contentIdArray = m.contentIds;
                        enableOtf = m.enableOtf;
                        if (!Da(c, k)) {
                            h = true;
                            fFormat =
                                wa(c, contentIdArray);
                            fontURL = $(c, contentIdArray, d, false, e, f, "", j, p, g, i, null, fFormat, enableOtf);
                            if (fontURL != "") {
                                if (t && i != undefined && g != undefined) p += "_" + i.charAt(0) + g / 100;
                                a += '@font-face{\nfont-family:"' + k + '";';
                                if (t == false && g != undefined && i != undefined) { a += "\nfont-style:" + i + ";";
                                    a += "\nfont-weight:" + g + ";" } a += '\nsrc:url("' + fontURL + '")';
                                if (!(fFormat != null && fFormat.toUpperCase() == "EOT" || fFormat.toUpperCase() == "MTX")) {
                                    m = contentIdArray[fFormat.toUpperCase()];
                                    s = v[fFormat.toUpperCase()];
                                    m || (s = v.TTF);
                                    a += " format('" +
                                        s + "')"
                                }
                                a += ";}\n"
                            }
                        }
                    }
                }
            }
            g = c.a.getElementById("mti_fontface_" + d);
            if (g == null) { g = c.a.createElement("style", { type: "text/css", id: "mti_fontface_" + (b ? "Aj_" : "") + c.c.projectId });
                a != "" && c.a.r("head", g) }
            if (g.styleSheet)
                if (g.styleSheet.cssText != "") { g = c.a.getElementById("mti_fontface_" + (b ? "hybridAjaxIE_" : "hybridIE_") + c.c.projectId); if (g == null) { g = c.a.createElement("style", { type: "text/css", id: "mti_fontface_" + (b ? "hybridAjaxIE_" : "hybridIE_") + c.c.projectId });
                        a != "" && c.a.r("head", g) } g.styleSheet.cssText = a } else g.styleSheet.cssText =
                    a;
            else g.innerHTML += a;
            if (h) { b = []; for (a = 0; a < l.length; a++) b.push(new P(l[a]));
                a = {};
                a.fontactive = function(r) { r.substr(r.length - 2) == "_f" && !Da(c, r) && Ga(c, r) };
                (new V(this.b, this.a, new O(c.a, document.documentElement, a), 6E5)).W(b, {}, {}, false) }
        }
    };

    function qa(a, b, c) { document.readyState == "complete" ? setTimeout(function() { b.apply(a, c) }, 500) : document.addEventListener("readystatechange", function() { document.readyState == "complete" && setTimeout(function() { b.apply(a, c) }, 500) }); if (document.addEventListener) document.addEventListener("keydown", function(d) { a.na.apply(a, [d]) });
        else window.attachEvent ? window.attachEvent("onkeydown", function(d) { a.na.apply(a, [d]) }) : document.addEventListener("keydown", function(d) { a.na.apply(a, [d]) }) }
    mti.d.prototype.na = function(a) { if ((a.ctrlKey || a.metaKey) && a.keyCode == 116) { a.preventDefault();
            a = document.cookie.split(";"); for (var b = "", c = 1; c <= a.length; c++) { var d = a[c - 1].split("="),
                    e = d[0].substr(d[0].length - 2); if (d[1] == "1" && e == "_f") { b += a[c - 1];
                    document.cookie = d[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT" } } document.location.reload(true) } };

    function xa(a, b, c) { var d = {};
        d.fontactive = function() { c(b, true) };
        d.fontinactive = function() { c(b, false) }; var e = X.timeout == null ? 100 : X.timeout;
        a = new V(a.b, a.a, new O(a.a, document.documentElement, d), e);
        d = [];
        d.push(new P(b));
        a.W(d, {}, {}, false) }

    function Ga(a, b) { a = new Date;
        a.setDate(a.getDate() + 1);
        document.cookie = b + "=" + ("1; expires=" + a.toUTCString()) }

    function Da(a, b) { a = document.cookie.split(b + "=");
        b = null; if (a.length == 2) b = a.pop().split(";").shift(); return b == 1 ? true : false };
})(this, document);
if (window.addEventListener) { window.addEventListener('load', function() { MonoTypeWebFonts.cleanup(); }, false); } else if (window.attachEvent) { window.attachEvent('onload', function() { MonoTypeWebFonts.cleanup(); }); } MonoTypeWebFonts.cleanupExecuted = false;
MonoTypeWebFonts.cleanup = function() { if (MonoTypeWebFonts.cleanupExecuted === true) { return; } MonoTypeWebFonts.cleanupExecuted = (window['mti_element_cache'].length > 0); var className = document.documentElement.className; var MTIConfig = window['MTIConfig'] || { 'RemoveMTIClass': false }; if (MTIConfig['RemoveMTIClass'] == true) {
        function walkTheDOM(node, func) { func(node);
            node = node.firstChild; while (node) { walkTheDOM(node, func);
                node = node.nextSibling; } }

        function getElementsByClassName(className) { if (document.getElementsByClassName) { return document.getElementsByClassName(className); } else { var results = [];
                walkTheDOM(document.body, function(node) { var a, c = node.className,
                        i; if (c) { a = c.split(' '); for (i = 0; i < a.length; i++) { if (a[i] === className) { results.push(node); break; } } } }); return results; } } setTimeout(function() { var mti_elements = getElementsByClassName('mti_font_element'); var u = navigator.userAgent; var ua = u.toLowerCase(),
                is = function(t) { return ua.indexOf(t) > -1 },
                b = (!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)),
                c = false; if ((RegExp.$1 == 6) || (RegExp.$1 == 7)) { c = true; } while (mti_elements.length > 0) { for (var i = 0; i < mti_elements.length; i++) { var classList = mti_elements[i].className.split(' '); if (classList.length == 1 && !c) { mti_elements[i].removeAttribute('class'); } else { mti_elements[i].className = mti_elements[i].className.replace(/mti_font_element/ig, ' ').replace(/^\s+|\s+$/g, ''); } } mti_elements = getElementsByClassName('mti_font_element'); } }, 40000); } className = className; if (!document.getElementById('MonoTypeFontApiFontTracker')) { var fontTrackingUrl = "http://fast.fonts.net/t/1.css"; if (window.location.protocol == 'https:') { fontTrackingUrl = fontTrackingUrl.replace(/http:/, 'https:'); } var head = document.getElementsByTagName('HEAD')[0]; var cssEle = document.createElement('LINK'); if (cssEle) { cssEle.setAttribute('id', 'MonoTypeFontApiFontTracker');
            cssEle.setAttribute('type', 'text/css');
            cssEle.setAttribute('rel', 'stylesheet');
            cssEle.setAttribute('href', fontTrackingUrl + "?apiType=js&projectid=e9c767db-30fe-406e-a904-be7aebd9832b");
            head.appendChild(cssEle); } } window['mti_element_cache'] = []; };
MonoTypeWebFonts._fontActiveEventList = [];
MonoTypeWebFonts._fontLoadingEventList = [];
MonoTypeWebFonts._activeEventList = [];
MonoTypeWebFonts._inActiveEventList = [];
MonoTypeWebFonts.addEvent = function(eventName, callbackFunction) { if (eventName.toLowerCase() == 'fontactive') { MonoTypeWebFonts._fontActiveEventList.push(callbackFunction); } else if (eventName.toLowerCase() == 'fontloading') { MonoTypeWebFonts._fontLoadingEventList.push(callbackFunction); } else if (eventName.toLowerCase() == 'inactive') { MonoTypeWebFonts._inActiveEventList.push(callbackFunction); } else if (eventName.toLowerCase() == 'active') { MonoTypeWebFonts._activeEventList.push(callbackFunction); } };
MonoTypeWebFonts.loadFonts = function() { MonoTypeWebFonts.load({ monotype: { reqSub: false, enableOtf: false, otfJsParentUrl: '//fast.fonts.net/jsapi/otjs/', pfL: [{ 'fontfamily': "Trade Gothic W01", 'fontWeight': "700", 'fontStyle': "normal", contentIds: { EOT: '2e9af08f-0faf-45e3-9767-78a700434af3', WOFF: 'f51d24dd-8256-43c6-ba1a-6aeae9d3f262', TTF: '955ee494-66b2-4eb2-8f19-bc3a088df16d', SVG: 'd5153ad4-7c93-4757-9147-640e69ec4801' }, enableSubsetting: false, enableOtf: false }, { 'fontfamily': "Trade Gothic W01", 'fontWeight': "800", 'fontStyle': "normal", contentIds: { EOT: 'bb3aa0a7-2585-4e89-ad82-658fd561751a', WOFF: '1454a71d-cdbb-429c-8092-122f4493e0c7', TTF: 'd5ea405c-2180-4ff0-bd51-3e19fb280be4', SVG: '70ac6679-cf48-4a0e-a909-d1e3bb4a1aa9' }, enableSubsetting: false, enableOtf: false }, { 'fontfamily': "Trade Gothic W01", 'fontWeight': "400", 'fontStyle': "normal", contentIds: { EOT: '413d9688-00d4-47c4-bb55-656a0cd396e9', WOFF: 'c4aef0d4-bfcf-4790-acf5-909881f411e8', TTF: 'e741f29c-bc18-4343-bff3-db2465a0be3e', SVG: '853e2a9b-4057-42a5-ad7e-0762cda0b13c' }, enableSubsetting: false, enableOtf: false }], selectorFontMap: {}, ck: 'd44f19a684109620e484147ea290e8184a4bd6a4639cd96e56b0a31e20416275ddaf67d13a1461cef544385b84db626a949ef3216c76137f182b8bdba6f91a9b8d0f5d7c0fc5c99d61ab24', ec: 'true', fcURL: 'http://fast.fonts.net/dv2/', dfcURL: 'http://api2.fonts.com/FontSubsetter.ashx', pURL: 'http://api2.fonts.com/FontSubsetter.ashx', fontdataversion: 'v2', sO: 'True', ffArray: { safari: { '3.1': 'ttf', '5.1': 'woff' }, msafari: { '1': 'svg', '4.2': 'ttf' }, chrome: { '3': 'svg', '4': 'ttf', '5': 'woff' }, opera: { '10': 'ttf', '11.10': 'woff' }, msie: { '4': 'eot', '9': 'woff', '10': 'otf' }, mozilla: { '3.5': 'ttf', '3.6': 'woff' } }, bsmcArray: { safari: { '3.1': '2000', '5.0': '1650', '5.1': '8190' }, msafari: { '1': '8190' }, chrome: { '3': '8190' }, opera: { '10': '8190' }, msie: { '4': '1000', '9': '2067' }, mozilla: { '3.5': '8190' } }, fctypeArray: { 'ttf': '1', 'eot': '2', 'woff': '3', 'svg': '11', 'otf': '13' }, projectId: 'e9c767db-30fe-406e-a904-be7aebd9832b', specialChar: ['%u201C', '%u201D', '%u2200', '%u2202', '%u2203', '%u2205', '%u2207', '%u2208', '%u2209', '%u220B', '%u220F', '%u2211', '%u2018', '%u2019', '%B0', '%u2026', '%u2122', '%A9', '%AE', '%u2014', '%u2013', '%A7', '%B1', '%B7', '%u2032', '%u2033', '%u20AC', '%u2248', '%u2260', '%u2264', '%u2265', '%u221A', '%u221D', '%u2220', '%u2225', '%u2227', '%u2228', '%u2229', '%u222A', '%u222B', '%u222E', '%u2234', '%u2235', '%u2236', '%u2237', '%u223D', '%u224C', '%u2261', '%u226E', '%u226F', '%u2299', '%u22A5', '%u0391', '%u0392', '%u0393', '%u0394', '%u0395', '%u0396', '%u0397', '%u0398', '%u0399', '%u039A', '%u039B', '%u039C', '%u039D', '%u039E', '%u039F', '%u03A0', '%u03A1', '%u03A3', '%u03A4', '%u03A5', '%u03A6', '%u03A7', '%u03A8', '%u03A9', '%u221E', '%u2190', '%u2191', '%u2192', '%u2193', '%u2640', '%u2642', '+', '%22', '%5C', '%23', '%26', '%3F', '%B7', '%3B', '%3A'], EOD: null }, fontloading: function(fontFamily, fontDescription) { for (var i = 0; i < MonoTypeWebFonts._fontLoadingEventList.length; i++) { MonoTypeWebFonts._fontLoadingEventList[i].call(MonoTypeWebFonts, fontFamily, fontDescription); } }, fontactive: function(fontFamily, fontDescription) { for (var i = 0; i < MonoTypeWebFonts._fontActiveEventList.length; i++) { MonoTypeWebFonts._fontActiveEventList[i].call(MonoTypeWebFonts, fontFamily, fontDescription); } }, inactive: function() { MonoTypeWebFonts.cleanup(); for (var i = 0; i < MonoTypeWebFonts._inActiveEventList.length; i++) { MonoTypeWebFonts._inActiveEventList[i].call(MonoTypeWebFonts); } }, active: function() { MonoTypeWebFonts.cleanup(); for (var i = 0; i < MonoTypeWebFonts._activeEventList.length; i++) { MonoTypeWebFonts._activeEventList[i].call(MonoTypeWebFonts); } } }); };
MonoTypeWebFonts.loadFonts();
MonoTypeWebFonts.RefreshFonts = function() { MonoTypeWebFonts.cleanupExecuted = false; if (document.getElementById('mti_stylesheet_e9c767db-30fe-406e-a904-be7aebd9832b') != null) { var nodeToRemove1 = document.getElementById('mti_stylesheet_e9c767db-30fe-406e-a904-be7aebd9832b'); var parentNode1 = nodeToRemove1.parentNode;
        parentNode1.removeChild(nodeToRemove1); } if (document.getElementById('mti_fontface_e9c767db-30fe-406e-a904-be7aebd9832b') != null) { var nodeToRemove2 = document.getElementById('mti_fontface_e9c767db-30fe-406e-a904-be7aebd9832b'); var parentNode2 = nodeToRemove2.parentNode;
        parentNode2.removeChild(nodeToRemove2); } MonoTypeWebFonts.loadFonts(); };
MonoTypeWebFonts.loadColo = function() {};
setTimeout(function() { MonoTypeWebFonts.cleanup(); }, 40000);