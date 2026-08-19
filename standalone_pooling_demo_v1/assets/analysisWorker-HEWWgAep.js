(async ()=>{
    const n = self;
    let a = null;
    const t = [];
    function o(s) {
        if (!a) {
            t.push(s);
            return;
        }
        try {
            const e = a(s.params);
            n.postMessage({
                seq: s.seq,
                ok: !0,
                data: e
            });
        } catch (e) {
            n.postMessage({
                seq: s.seq,
                ok: !1,
                error: e instanceof Error ? e.message : String(e)
            });
        }
    }
    n.onmessage = (s)=>o(s.data);
    import("./wasm-api-DHFCMh2l.js").then(async (m)=>{
        await m.__tla;
        return m;
    }).then((s)=>{
        a = s.runAnalysis;
        for (const e of t.splice(0))o(e);
    }).catch((s)=>{
        n.postMessage({
            seq: -1,
            ok: !1,
            error: "analysis worker WASM init failed: " + (s instanceof Error ? s.message : String(s))
        });
    });
})();
