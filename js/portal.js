var b, c = b || (b = {});
c.sovrnPortalReady = "sovrnPortalReady";
c.sovrnPortalResponse = "sovrnPortalResponse";
c.sovrnPortalCookieCheck = "sovrnPortalCookieCheck";
function f() {
    this.window = window
}
f.prototype.start = function() {
    var d = this;
    this.window.parent.postMessage({
        messageType: b.sovrnPortalReady
    }, "*");
    this.window.addEventListener("message", function(a) {
        a = a.data || {};
        if (a.messageType === b.sovrnPortalCookieCheck) {
            try {
                var g = d.window.localStorage.getItem("__connect_beacon_" + a.name);
                var e = g ? JSON.parse(g).expiresAt > Date.now() : !1
            } catch (h) {
                e = !1
            }
            d.window.parent.postMessage({
                messageType: b.sovrnPortalResponse,
                cookiePresent: e,
                name: a.name
            }, "*");
            e || d.window.localStorage.setItem("__connect_beacon_" + a.name, JSON.stringify({
                expiresAt: Date.now() + 864E5 * a.frequency
            }))
        }
    })
}
;
(new f).start();
