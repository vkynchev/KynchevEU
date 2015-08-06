$(document).ready(function() {
    $(".artop").hide(), $(window).width() >= 920 && $(window).height() >= 620 && ($(".page-title").velocity({
        translateY: "-200px",
        opacity: 0
    }, 1), $(".page-title").velocity({
        translateY: "0px",
        opacity: 1
    }, 1e3), $(".img-logo").velocity({
        translateX: "-200px",
        opacity: 0
    }, 1), $(".about-text").velocity({
        translateX: "500px",
        opacity: 0
    }, 1), $(".html").velocity({
        rotateX: "90deg",
        opacity: 0
    }, 1), $(".css").velocity({
        rotateX: "90deg",
        opacity: 0
    }, 1), $(".javascript").velocity({
        rotateX: "90deg",
        opacity: 0
    }, 1), $(".first-skill-txt").velocity({
        translateX: "400px",
        opacity: 0
    }, 1), $(".second-skill-txt").velocity({
        translateX: "-400px",
        opacity: 0
    }, 1), $(".photo").velocity({
        translateX: "-200px",
        opacity: 0,
        scale: .5
    }, 1), $(".illustrator").velocity({
        translateX: "200px",
        opacity: 0,
        scale: .5
    }, 1), $(".second-skills").velocity({
        translateY: "-100px",
        opacity: 0
    }, 1), $(".projects>.project:nth-of-type(1)").velocity({
        translateX: "-100px",
        opacity: 0
    }, 1), $(".projects>.project:nth-of-type(2)").velocity({
        translateX: "-100px",
        opacity: 0
    }, 1), $(".projects>.project:nth-of-type(3)").velocity({
        translateX: "-100px",
        opacity: 0
    }, 1), $(".projects>.project:nth-of-type(4)").velocity({
        translateX: "-100px",
        opacity: 0
    }, 1), $(".projects>.project:nth-of-type(5)").velocity({
        translateX: "-100px",
        opacity: 0
    }, 1), $(".projects>.project:nth-of-type(6)").velocity({
        translateX: "-100px",
        opacity: 0
    }, 1), $(".dw-image").velocity({
        translateX: "-100px",
        opacity: 0
    }, 1), $(".download-icon").velocity({
        translateX: "100px",
        opacity: 0
    }, 1), $(".download-info").velocity({
        translateY: "100px",
        opacity: 0
    }, 1));
}), $(window).load(function() {
    function t() {
        $("#preloader").remove();
    }
    window.setTimeout(t, 1600);
}), $(window).scroll(function() {
    if ($(this).width() >= 920 && $(this).height() >= 620) {
        if ($(this).scrollTop() > 200 && ($(".img-logo").velocity({
            translateX: "0px",
            opacity: 1
        }, 1e3), $(".about-text").velocity({
            translateX: "0px",
            opacity: 1
        }, 1e3)), $(this).scrollTop() > 460 && (setTimeout(function() {
            $(".html").velocity({
                rotateX: "0deg",
                opacity: 1
            }, 1e3);
        }, 0), setTimeout(function() {
            $(".css").velocity({
                rotateX: "0deg",
                opacity: 1
            }, 1e3);
        }, 600), setTimeout(function() {
            $(".javascript").velocity({
                rotateX: "0deg",
                opacity: 1
            }, 1e3);
        }, 1200), setTimeout(function() {
            $(".first-skill-txt").velocity({
                translateX: "0px",
                opacity: 1
            }, 1e3);
        }, 1800), setTimeout(function() {
            $(".second-skill-txt").velocity({
                translateX: "0px",
                opacity: 1
            }, 1e3);
        }, 2800)), $(this).scrollTop() > 890 && (setTimeout(function() {
            $(".photo").velocity({
                translateX: "0px",
                opacity: 1
            }, 1e3), $(".illustrator").velocity({
                translateX: "0px",
                opacity: 1
            }, 1e3);
        }, 0), setTimeout(function() {
            $(".second-skills").velocity({
                translateY: "0px",
                opacity: 1
            }, 1e3);
        }, 1e3)), $(this).scrollTop() > 1570) {
            var t = [ 1, 2, 3, 4, 5, 6 ];
            !function e(t, o) {
                t++ >= o || setTimeout(function() {
                    console.log(t), $(".projects>.project:nth-of-type(" + t + ")").velocity({
                        translateX: "0px",
                        opacity: 1
                    }, 800), e(t, o);
                }, 500);
            }(0, t.length);
        }
        $(this).scrollTop() > 3e3 && (setTimeout(function() {
            $(".download-info").velocity({
                translateY: "0px",
                opacity: 1
            }, 1e3);
        }, 600), setTimeout(function() {
            $(".download-icon").velocity({
                translateX: "0px",
                opacity: 1
            }, 600), $(".dw-image").velocity({
                translateX: "0px",
                opacity: 1
            }, 600);
        }, 1200)), $(this).scrollTop() > 1e3;
    }
});

var navtop = $(".nav").offset().top, scroll = $(window).scrollTop();

$(document).scroll(function() {
    console.log("Scroll value from top of the website:" + scroll + "px"), $(document).scrollTop() >= navtop + 5 ? $(".artop").show() : $(".artop").hide();
}), $(function() {
    $("a[href*=#]:not([href=#])").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = $(this.hash);
            if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html,body").animate({
                scrollTop: t.offset().top
            }, 800), !1;
        }
    });
}), function() {
    function t() {
        k.keyboardSupport && d("keydown", n);
    }
    function e() {
        if (!Y && document.body) {
            Y = !0;
            var e = document.body, o = document.documentElement, a = window.innerHeight, n = e.scrollHeight;
            if (H = document.compatMode.indexOf("CSS") >= 0 ? o : e, x = e, t(), top != self) M = !0; else if (n > a && (e.offsetHeight <= a || o.offsetHeight <= a)) {
                var i = document.createElement("div");
                i.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + H.scrollHeight + "px", 
                document.body.appendChild(i);
                var l, r = function() {
                    l || (l = setTimeout(function() {
                        D || (i.style.height = "0", i.style.height = H.scrollHeight + "px", l = null);
                    }, 500));
                };
                setTimeout(r, 10);
                var c = {
                    attributes: !0,
                    childList: !0,
                    characterData: !1
                };
                if (b = new R(r), b.observe(e, c), H.offsetHeight <= a) {
                    var s = document.createElement("div");
                    s.style.clear = "both", e.appendChild(s);
                }
            }
            k.fixedBackground || D || (e.style.backgroundAttachment = "scroll", o.style.backgroundAttachment = "scroll");
        }
    }
    function o(t, e, o) {
        if (h(e, o), 1 != k.accelerationMax) {
            var a = Date.now(), n = a - A;
            if (n < k.accelerationDelta) {
                var i = (1 + 50 / n) / 2;
                i > 1 && (i = Math.min(i, k.accelerationMax), e *= i, o *= i);
            }
            A = Date.now();
        }
        if (B.push({
            x: e,
            y: o,
            lastX: 0 > e ? .99 : -.99,
            lastY: 0 > o ? .99 : -.99,
            start: Date.now()
        }), !L) {
            var l = t === document.body, r = function(a) {
                for (var n = Date.now(), i = 0, c = 0, s = 0; s < B.length; s++) {
                    var u = B[s], p = n - u.start, d = p >= k.animationTime, f = d ? 1 : p / k.animationTime;
                    k.pulseAlgorithm && (f = $(f));
                    var h = u.x * f - u.lastX >> 0, y = u.y * f - u.lastY >> 0;
                    i += h, c += y, u.lastX += h, u.lastY += y, d && (B.splice(s, 1), s--);
                }
                l ? window.scrollBy(i, c) : (i && (t.scrollLeft += i), c && (t.scrollTop += c)), 
                e || o || (B = []), B.length ? O(r, t, 1e3 / k.frameRate + 1) : L = !1;
            };
            O(r, t, 0), L = !0;
        }
    }
    function a(t) {
        Y || e();
        var a = t.target, n = c(a);
        if (!n || t.defaultPrevented || t.ctrlKey) return !0;
        if (f(x, "embed") || f(a, "embed") && /\.pdf/i.test(a.src) || f(x, "object")) return !0;
        var i = -t.wheelDeltaX || t.deltaX || 0, r = -t.wheelDeltaY || t.deltaY || 0;
        return E && (t.wheelDeltaX && m(t.wheelDeltaX, 120) && (i = -120 * (t.wheelDeltaX / Math.abs(t.wheelDeltaX))), 
        t.wheelDeltaY && m(t.wheelDeltaY, 120) && (r = -120 * (t.wheelDeltaY / Math.abs(t.wheelDeltaY)))), 
        i || r || (r = -t.wheelDelta || 0), 1 === t.deltaMode && (i *= 40, r *= 40), !k.touchpadSupport && y(r) ? !0 : (Math.abs(i) > 1.2 && (i *= k.stepSize / 120), 
        Math.abs(r) > 1.2 && (r *= k.stepSize / 120), o(n, i, r), t.preventDefault(), void l());
    }
    function n(t) {
        var e = t.target, a = t.ctrlKey || t.altKey || t.metaKey || t.shiftKey && t.keyCode !== z.spacebar;
        document.contains(x) || (x = document.activeElement);
        var n = /^(textarea|select|embed|object)$/i, i = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (n.test(e.nodeName) || f(e, "input") && !i.test(e.type) || f(x, "video") || w(t) || e.isContentEditable || t.defaultPrevented || a) return !0;
        if ((f(e, "button") || f(e, "input") && i.test(e.type)) && t.keyCode === z.spacebar) return !0;
        var r, s = 0, u = 0, p = c(x), d = p.clientHeight;
        switch (p == document.body && (d = window.innerHeight), t.keyCode) {
          case z.up:
            u = -k.arrowScroll;
            break;

          case z.down:
            u = k.arrowScroll;
            break;

          case z.spacebar:
            r = t.shiftKey ? 1 : -1, u = -r * d * .9;
            break;

          case z.pageup:
            u = .9 * -d;
            break;

          case z.pagedown:
            u = .9 * d;
            break;

          case z.home:
            u = -p.scrollTop;
            break;

          case z.end:
            var h = p.scrollHeight - p.scrollTop - d;
            u = h > 0 ? h + 10 : 0;
            break;

          case z.left:
            s = -k.arrowScroll;
            break;

          case z.right:
            s = k.arrowScroll;
            break;

          default:
            return !0;
        }
        o(p, s, u), t.preventDefault(), l();
    }
    function i(t) {
        x = t.target;
    }
    function l() {
        clearTimeout(X), X = setInterval(function() {
            N = {};
        }, 1e3);
    }
    function r(t, e) {
        for (var o = t.length; o--; ) N[K(t[o])] = e;
        return e;
    }
    function c(t) {
        var e = [], o = document.body, a = H.scrollHeight;
        do {
            var n = N[K(t)];
            if (n) return r(e, n);
            if (e.push(t), a === t.scrollHeight) {
                var i = u(H) && u(o), l = i || p(H);
                if (M && s(H) || !M && l) return r(e, P());
            } else if (s(t) && p(t)) return r(e, t);
        } while (t = t.parentElement);
    }
    function s(t) {
        return t.clientHeight + 10 < t.scrollHeight;
    }
    function u(t) {
        var e = getComputedStyle(t, "").getPropertyValue("overflow-y");
        return "hidden" !== e;
    }
    function p(t) {
        var e = getComputedStyle(t, "").getPropertyValue("overflow-y");
        return "scroll" === e || "auto" === e;
    }
    function d(t, e) {
        window.addEventListener(t, e, !1);
    }
    function f(t, e) {
        return (t.nodeName || "").toLowerCase() === e.toLowerCase();
    }
    function h(t, e) {
        t = t > 0 ? 1 : -1, e = e > 0 ? 1 : -1, (j.x !== t || j.y !== e) && (j.x = t, j.y = e, 
        B = [], A = 0);
    }
    function y(t) {
        return t ? (C.length || (C = [ t, t, t ]), t = Math.abs(t), C.push(t), C.shift(), 
        clearTimeout(T), T = setTimeout(function() {
            window.localStorage && (localStorage.SS_deltaBuffer = C.join(","));
        }, 1e3), !v(120) && !v(100)) : void 0;
    }
    function m(t, e) {
        return Math.floor(t / e) == t / e;
    }
    function v(t) {
        return m(C[0], t) && m(C[1], t) && m(C[2], t);
    }
    function w(t) {
        var e = t.target, o = !1;
        if (-1 != document.URL.indexOf("www.youtube.com/watch")) do if (o = e.classList && e.classList.contains("html5-video-controls")) break; while (e = e.parentNode);
        return o;
    }
    function g(t) {
        var e, o, a;
        return t *= k.pulseScale, 1 > t ? e = t - (1 - Math.exp(-t)) : (o = Math.exp(-1), 
        t -= 1, a = 1 - Math.exp(-t), e = o + a * (1 - o)), e * k.pulseNormalize;
    }
    function $(t) {
        return t >= 1 ? 1 : 0 >= t ? 0 : (1 == k.pulseNormalize && (k.pulseNormalize /= g(1)), 
        g(t));
    }
    var x, b, X, T, S = {
        frameRate: 150,
        animationTime: 400,
        stepSize: 120,
        pulseAlgorithm: !0,
        pulseScale: 4,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: !0,
        arrowScroll: 50,
        touchpadSupport: !0,
        fixedBackground: !0,
        excluded: ""
    }, k = S, D = !1, M = !1, j = {
        x: 0,
        y: 0
    }, Y = !1, H = document.documentElement, C = [], E = /^Mac/.test(navigator.platform), z = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
    }, k = S, B = [], L = !1, A = Date.now(), K = function() {
        var t = 0;
        return function(e) {
            return e.uniqueID || (e.uniqueID = t++);
        };
    }(), N = {};
    window.localStorage && localStorage.SS_deltaBuffer && (C = localStorage.SS_deltaBuffer.split(","));
    var q, O = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t, e, o) {
            window.setTimeout(t, o || 1e3 / 60);
        };
    }(), R = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, P = function() {
        var t;
        return function() {
            if (!t) {
                var e = document.createElement("div");
                e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e);
                var o = document.body.scrollTop;
                document.documentElement.scrollTop;
                window.scrollBy(0, 1), t = document.body.scrollTop != o ? document.body : document.documentElement, 
                window.scrollBy(0, -1), document.body.removeChild(e);
            }
            return t;
        };
    }();
    "onwheel" in document.createElement("div") ? q = "wheel" : "onmousewheel" in document.createElement("div") && (q = "mousewheel"), 
    q && (d(q, a), d("mousedown", i), d("load", e));
}();
