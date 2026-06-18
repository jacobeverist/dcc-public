let A, q_;
let __tla = (async ()=>{
    var I = "" + new URL("dcc_bundle_bg-D8vw1f42.wasm", import.meta.url).href, S = async (e = {}, n)=>{
        let t;
        if (n.startsWith("data:")) {
            const r = n.replace(/^data:.*?base64,/, "");
            let o;
            if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(r, "base64");
            else if (typeof atob == "function") {
                const c = atob(r);
                o = new Uint8Array(c.length);
                for(let a = 0; a < c.length; a++)o[a] = c.charCodeAt(a);
            } else throw new Error("Cannot decode base64-encoded data URL");
            t = await WebAssembly.instantiate(o, e);
        } else {
            const r = await fetch(n), o = r.headers.get("Content-Type") || "";
            if ("instantiateStreaming" in WebAssembly && o.startsWith("application/wasm")) t = await WebAssembly.instantiateStreaming(r, e);
            else {
                const c = await r.arrayBuffer();
                t = await WebAssembly.instantiate(c, e);
            }
        }
        return t.instance.exports;
    };
    let s;
    function F(e) {
        s = e;
    }
    function u(e) {
        const n = s.__externref_table_alloc();
        return s.__wbindgen_export_2.set(n, e), n;
    }
    function b(e, n) {
        try {
            return e.apply(this, n);
        } catch (t) {
            const r = u(t);
            s.__wbindgen_exn_store(r);
        }
    }
    let k = null;
    function l() {
        return (k === null || k.byteLength === 0) && (k = new Uint8Array(s.memory.buffer)), k;
    }
    let p = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    p.decode();
    const L = 2146435072;
    let x = 0;
    function W(e, n) {
        return x += n, x >= L && (p = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), p.decode(), x = n), p.decode(l().subarray(e, e + n));
    }
    function h(e, n) {
        return e = e >>> 0, W(e, n);
    }
    function E(e, n) {
        return e = e >>> 0, l().subarray(e / 1, e / 1 + n);
    }
    let f = 0;
    const m = new TextEncoder;
    "encodeInto" in m || (m.encodeInto = function(e, n) {
        const t = m.encode(e);
        return n.set(t), {
            read: e.length,
            written: t.length
        };
    });
    function v(e, n, t) {
        if (t === void 0) {
            const w = m.encode(e), d = n(w.length, 1) >>> 0;
            return l().subarray(d, d + w.length).set(w), f = w.length, d;
        }
        let r = e.length, o = n(r, 1) >>> 0;
        const c = l();
        let a = 0;
        for(; a < r; a++){
            const w = e.charCodeAt(a);
            if (w > 127) break;
            c[o + a] = w;
        }
        if (a !== r) {
            a !== 0 && (e = e.slice(a)), o = t(o, r, r = a + e.length * 3, 1) >>> 0;
            const w = l().subarray(o + a, o + r), d = m.encodeInto(e, w);
            a += d.written, o = t(o, r, a, 1) >>> 0;
        }
        return f = a, o;
    }
    let i = null;
    function y() {
        return (i === null || i.buffer.detached === !0 || i.buffer.detached === void 0 && i.buffer !== s.memory.buffer) && (i = new DataView(s.memory.buffer)), i;
    }
    function g(e) {
        return e == null;
    }
    function z(e) {
        const n = s.__wbindgen_export_2.get(e);
        return s.__externref_table_dealloc(e), n;
    }
    function O(e) {
        const n = v(e, s.__wbindgen_malloc, s.__wbindgen_realloc), t = f, r = s.analyze_mixed_encoder_configs(n, t);
        if (r[2]) throw z(r[1]);
        return z(r[0]);
    }
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((e)=>s.__wbg_wasmnetwork_free(e >>> 0, 1));
    function B() {
        return b(function(e, n) {
            return e.call(n);
        }, arguments);
    }
    function D() {
        return b(function(e, n, t) {
            return e.call(n, t);
        }, arguments);
    }
    function R(e) {
        return e.crypto;
    }
    function j(e, n) {
        let t, r;
        try {
            t = e, r = n, console.error(h(e, n));
        } finally{
            s.__wbindgen_free(t, r, 1);
        }
    }
    function U() {
        return b(function(e, n) {
            e.getRandomValues(n);
        }, arguments);
    }
    function q(e) {
        return e.length;
    }
    function M(e) {
        return e.msCrypto;
    }
    function N() {
        return new Error;
    }
    function C(e, n) {
        return new Function(h(e, n));
    }
    function V(e) {
        return new Uint8Array(e >>> 0);
    }
    function $(e) {
        return e.node;
    }
    function G(e) {
        return e.process;
    }
    function H(e, n, t) {
        Uint8Array.prototype.set.call(E(e, n), t);
    }
    function J() {
        return b(function(e, n) {
            e.randomFillSync(n);
        }, arguments);
    }
    function X() {
        return b(function() {
            return module.require;
        }, arguments);
    }
    function P(e, n) {
        const t = n.stack, r = v(t, s.__wbindgen_malloc, s.__wbindgen_realloc), o = f;
        y().setInt32(e + 4, o, !0), y().setInt32(e + 0, r, !0);
    }
    function Y() {
        const e = typeof global > "u" ? null : global;
        return g(e) ? 0 : u(e);
    }
    function K() {
        const e = typeof globalThis > "u" ? null : globalThis;
        return g(e) ? 0 : u(e);
    }
    function Q() {
        const e = typeof self > "u" ? null : self;
        return g(e) ? 0 : u(e);
    }
    function Z() {
        const e = typeof window > "u" ? null : window;
        return g(e) ? 0 : u(e);
    }
    function ee(e, n, t) {
        return e.subarray(n >>> 0, t >>> 0);
    }
    function _e(e) {
        return e.versions;
    }
    function ne(e) {
        return typeof e == "function";
    }
    function te(e) {
        const n = e;
        return typeof n == "object" && n !== null;
    }
    function re(e) {
        return typeof e == "string";
    }
    function oe(e) {
        return e === void 0;
    }
    function ae(e, n) {
        const t = n, r = typeof t == "string" ? t : void 0;
        var o = g(r) ? 0 : v(r, s.__wbindgen_malloc, s.__wbindgen_realloc), c = f;
        y().setInt32(e + 4, c, !0), y().setInt32(e + 0, o, !0);
    }
    function se(e, n) {
        throw new Error(h(e, n));
    }
    function ce(e, n) {
        return h(e, n);
    }
    function we(e, n) {
        return E(e, n);
    }
    function ie() {
        const e = s.__wbindgen_export_2, n = e.grow(4);
        e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, !0), e.set(n + 3, !1);
    }
    URL = globalThis.URL;
    const _ = await S({
        "./dcc_bundle_bg.js": {
            __wbg_new_8a6f238a6ece86ea: N,
            __wbg_stack_0ed75d68575b0f3c: P,
            __wbg_error_7534b8e9a36f1ab4: j,
            __wbg_crypto_574e78ad8b13b65f: R,
            __wbg_process_dc0fbacc7c1c06f7: G,
            __wbg_versions_c01dfd4722a88165: _e,
            __wbg_node_905d3e251edff8a2: $,
            __wbg_msCrypto_a61aeb35a24c1329: M,
            __wbg_require_60cc747a6bc5215a: X,
            __wbg_randomFillSync_ac0988aba3254290: J,
            __wbg_getRandomValues_b8f5dbd5f3995a9e: U,
            __wbg_newnoargs_254190557c45b4ec: C,
            __wbg_length_6bb7e81f9d7713e4: q,
            __wbg_prototypesetcall_3d4a26c1ed734349: H,
            __wbg_newwithlength_a167dcc7aaa3ba77: V,
            __wbg_subarray_70fd07feefe14294: ee,
            __wbg_static_accessor_GLOBAL_THIS_f0a4409105898184: K,
            __wbg_call_13410aac570ffff7: B,
            __wbg_static_accessor_SELF_995b214ae681ff99: Q,
            __wbg_static_accessor_GLOBAL_8921f820c2ce3f12: Y,
            __wbg_static_accessor_WINDOW_cde3890479c675ea: Z,
            __wbg_call_a5400b25a865cfd8: D,
            __wbg_wbindgenstringget_0f16a6ddddef376f: ae,
            __wbg_wbindgenthrow_451ec1a8469d7eb6: se,
            __wbg_wbindgenisobject_307a53c6bd97fbf8: te,
            __wbg_wbindgenisstring_d4fa939789f003b0: re,
            __wbg_wbindgenisfunction_8cee7dce3725ae74: ne,
            __wbg_wbindgenisundefined_c4b71d073b92f3c5: oe,
            __wbindgen_init_externref_table: ie,
            __wbindgen_cast_cb9088102bce6b30: we,
            __wbindgen_cast_2241b6af4c4b2941: ce
        }
    }, I), de = _.memory, le = _.__wbg_wasmnetwork_free, me = _.analyze_mixed_encoder_configs, fe = _.analyze_multi_encoder, ue = _.analyze_multi_encoder_configs, be = _.analyze_periodic_encoder_configs, ge = _.analyze_periodic_scalar_multi_encoder, ke = _.analyze_tapering_encoder, pe = _.analyze_tapering_encoder_configs, ye = _.encode_scalar_fixed, he = _.encode_scalar_periodic, xe = _.wasmnetwork_add_constant_datasource, ve = _.wasmnetwork_add_context_learner, ze = _.wasmnetwork_add_datasource_from_config, Ae = _.wasmnetwork_add_discrete_datasource_from_config, Ee = _.wasmnetwork_add_discrete_transformer, Te = _.wasmnetwork_add_fixed_weight_transformer, Ie = _.wasmnetwork_add_multi_layer_datasource, Se = _.wasmnetwork_add_pattern_classifier, Fe = _.wasmnetwork_add_pattern_pooler, Le = _.wasmnetwork_add_periodic_cell_transformer, We = _.wasmnetwork_add_periodic_scalar_transformer, Oe = _.wasmnetwork_add_persistence_transformer, Be = _.wasmnetwork_add_place_cell_transformer, De = _.wasmnetwork_add_randomized_place_cell_transformer, Re = _.wasmnetwork_add_scalar_transformer, je = _.wasmnetwork_add_sequence_learner, Ue = _.wasmnetwork_add_sine_datasource, qe = _.wasmnetwork_add_square_datasource, Me = _.wasmnetwork_add_tapering_weight_transformer, Ne = _.wasmnetwork_build, Ce = _.wasmnetwork_connect_discrete_source, Ve = _.wasmnetwork_connect_label_source, $e = _.wasmnetwork_connect_scalar_source, Ge = _.wasmnetwork_connect_to_context, He = _.wasmnetwork_connect_to_context_with_offset, Je = _.wasmnetwork_connect_to_input, Xe = _.wasmnetwork_connect_to_input_with_offset, Pe = _.wasmnetwork_encode_scalar, Ye = _.wasmnetwork_encode_scalars_batch, Ke = _.wasmnetwork_execute, Qe = _.wasmnetwork_export_config, Ze = _.wasmnetwork_export_config_canonical, e_ = _.wasmnetwork_get_all_block_outputs, __ = _.wasmnetwork_get_anomaly, n_ = _.wasmnetwork_get_block_name, t_ = _.wasmnetwork_get_block_state, r_ = _.wasmnetwork_get_blocks_info, o_ = _.wasmnetwork_get_probabilities, a_ = _.wasmnetwork_get_scalar_value, s_ = _.wasmnetwork_get_state_canonical, c_ = _.wasmnetwork_get_state_json, w_ = _.wasmnetwork_get_trace_json, i_ = _.wasmnetwork_import_config, d_ = _.wasmnetwork_import_config_canonical, l_ = _.wasmnetwork_init_block, m_ = _.wasmnetwork_is_recording, f_ = _.wasmnetwork_new, u_ = _.wasmnetwork_num_blocks, b_ = _.wasmnetwork_place_cell_add_cell, g_ = _.wasmnetwork_place_cell_num_bins, k_ = _.wasmnetwork_place_cell_remove_cell, p_ = _.wasmnetwork_remove_block, y_ = _.wasmnetwork_remove_connection, h_ = _.wasmnetwork_set_classifier_label, x_ = _.wasmnetwork_set_discrete_value, v_ = _.wasmnetwork_set_multiple_classifier_labels, z_ = _.wasmnetwork_set_multiple_discrete_values, A_ = _.wasmnetwork_set_multiple_scalar_values, E_ = _.wasmnetwork_set_scalar_value, T_ = _.wasmnetwork_start_recording, I_ = _.set_panic_hook, S_ = _.wasmnetwork_rebuild, F_ = _.__wbindgen_exn_store, L_ = _.__externref_table_alloc, W_ = _.__wbindgen_export_2, O_ = _.__wbindgen_free, B_ = _.__wbindgen_malloc, D_ = _.__wbindgen_realloc, R_ = _.__externref_table_dealloc, T = _.__wbindgen_start;
    var j_ = Object.freeze({
        __proto__: null,
        __externref_table_alloc: L_,
        __externref_table_dealloc: R_,
        __wbg_wasmnetwork_free: le,
        __wbindgen_exn_store: F_,
        __wbindgen_export_2: W_,
        __wbindgen_free: O_,
        __wbindgen_malloc: B_,
        __wbindgen_realloc: D_,
        __wbindgen_start: T,
        analyze_mixed_encoder_configs: me,
        analyze_multi_encoder: fe,
        analyze_multi_encoder_configs: ue,
        analyze_periodic_encoder_configs: be,
        analyze_periodic_scalar_multi_encoder: ge,
        analyze_tapering_encoder: ke,
        analyze_tapering_encoder_configs: pe,
        encode_scalar_fixed: ye,
        encode_scalar_periodic: he,
        memory: de,
        set_panic_hook: I_,
        wasmnetwork_add_constant_datasource: xe,
        wasmnetwork_add_context_learner: ve,
        wasmnetwork_add_datasource_from_config: ze,
        wasmnetwork_add_discrete_datasource_from_config: Ae,
        wasmnetwork_add_discrete_transformer: Ee,
        wasmnetwork_add_fixed_weight_transformer: Te,
        wasmnetwork_add_multi_layer_datasource: Ie,
        wasmnetwork_add_pattern_classifier: Se,
        wasmnetwork_add_pattern_pooler: Fe,
        wasmnetwork_add_periodic_cell_transformer: Le,
        wasmnetwork_add_periodic_scalar_transformer: We,
        wasmnetwork_add_persistence_transformer: Oe,
        wasmnetwork_add_place_cell_transformer: Be,
        wasmnetwork_add_randomized_place_cell_transformer: De,
        wasmnetwork_add_scalar_transformer: Re,
        wasmnetwork_add_sequence_learner: je,
        wasmnetwork_add_sine_datasource: Ue,
        wasmnetwork_add_square_datasource: qe,
        wasmnetwork_add_tapering_weight_transformer: Me,
        wasmnetwork_build: Ne,
        wasmnetwork_connect_discrete_source: Ce,
        wasmnetwork_connect_label_source: Ve,
        wasmnetwork_connect_scalar_source: $e,
        wasmnetwork_connect_to_context: Ge,
        wasmnetwork_connect_to_context_with_offset: He,
        wasmnetwork_connect_to_input: Je,
        wasmnetwork_connect_to_input_with_offset: Xe,
        wasmnetwork_encode_scalar: Pe,
        wasmnetwork_encode_scalars_batch: Ye,
        wasmnetwork_execute: Ke,
        wasmnetwork_export_config: Qe,
        wasmnetwork_export_config_canonical: Ze,
        wasmnetwork_get_all_block_outputs: e_,
        wasmnetwork_get_anomaly: __,
        wasmnetwork_get_block_name: n_,
        wasmnetwork_get_block_state: t_,
        wasmnetwork_get_blocks_info: r_,
        wasmnetwork_get_probabilities: o_,
        wasmnetwork_get_scalar_value: a_,
        wasmnetwork_get_state_canonical: s_,
        wasmnetwork_get_state_json: c_,
        wasmnetwork_get_trace_json: w_,
        wasmnetwork_import_config: i_,
        wasmnetwork_import_config_canonical: d_,
        wasmnetwork_init_block: l_,
        wasmnetwork_is_recording: m_,
        wasmnetwork_new: f_,
        wasmnetwork_num_blocks: u_,
        wasmnetwork_place_cell_add_cell: b_,
        wasmnetwork_place_cell_num_bins: g_,
        wasmnetwork_place_cell_remove_cell: k_,
        wasmnetwork_rebuild: S_,
        wasmnetwork_remove_block: p_,
        wasmnetwork_remove_connection: y_,
        wasmnetwork_set_classifier_label: h_,
        wasmnetwork_set_discrete_value: x_,
        wasmnetwork_set_multiple_classifier_labels: v_,
        wasmnetwork_set_multiple_discrete_values: z_,
        wasmnetwork_set_multiple_scalar_values: A_,
        wasmnetwork_set_scalar_value: E_,
        wasmnetwork_start_recording: T_
    });
    F(j_);
    T();
    A = 600;
    let U_ = O;
    q_ = function(e) {
        if (!e.encoders || e.encoders.length === 0) throw new Error("At least one encoder is required");
        const [n, t] = e.viewBounds;
        if (!Number.isFinite(n) || !Number.isFinite(t) || n >= t) throw new Error("Invalid view bounds: require finite view_lo < view_hi");
        const r = t - n;
        for (const c of e.encoders){
            const a = Number.isFinite(c.min_period) && c.min_period > 0 ? c.min_period : Number.isFinite(c.period) && c.period > 0 ? c.period : null;
            if (a !== null) {
                const w = r / a;
                if (w > A) throw new Error(`Encoder too fine to analyze over this range: ~${Math.round(w)} periods (finest period ${a} across a range of ${r}). Increase the period or narrow the plot range so periods-in-view stays under ${A}.`);
            }
        }
        const o = JSON.stringify({
            view_lo: n,
            view_hi: t,
            encoders: e.encoders
        });
        return JSON.parse(U_(o));
    };
})();
export { A as MAX_PERIODS_IN_VIEW, q_ as runAnalysis, __tla };
