let I, lt;
let __tla = (async ()=>{
    var S = "" + new URL("dcc_bundle_bg-BIRIWMI-.wasm", import.meta.url).href, F = async (e = {}, t)=>{
        let n;
        if (t.startsWith("data:")) {
            const o = t.replace(/^data:.*?base64,/, "");
            let r;
            if (typeof Buffer == "function" && typeof Buffer.from == "function") r = Buffer.from(o, "base64");
            else if (typeof atob == "function") {
                const c = atob(o);
                r = new Uint8Array(c.length);
                for(let s = 0; s < c.length; s++)r[s] = c.charCodeAt(s);
            } else throw new Error("Cannot decode base64-encoded data URL");
            n = await WebAssembly.instantiate(r, e);
        } else {
            const o = await fetch(t), r = o.headers.get("Content-Type") || "";
            if ("instantiateStreaming" in WebAssembly && r.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(o, e);
            else {
                const c = await o.arrayBuffer();
                n = await WebAssembly.instantiate(c, e);
            }
        }
        return n.instance.exports;
    };
    let a;
    function L(e) {
        a = e;
    }
    function k(e) {
        const t = a.__externref_table_alloc();
        return a.__wbindgen_export_2.set(t, e), t;
    }
    function m(e, t) {
        try {
            return e.apply(this, t);
        } catch (n) {
            const o = k(n);
            a.__wbindgen_exn_store(o);
        }
    }
    let b = null;
    function l() {
        return (b === null || b.byteLength === 0) && (b = new Uint8Array(a.memory.buffer)), b;
    }
    let p = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    p.decode();
    const R = 2146435072;
    let v = 0;
    function W(e, t) {
        return v += t, v >= R && (p = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), p.decode(), v = t), p.decode(l().subarray(e, e + t));
    }
    function h(e, t) {
        return e = e >>> 0, W(e, t);
    }
    function x(e, t) {
        return e = e >>> 0, l().subarray(e / 1, e / 1 + t);
    }
    let u = 0;
    const f = new TextEncoder;
    "encodeInto" in f || (f.encodeInto = function(e, t) {
        const n = f.encode(e);
        return t.set(n), {
            read: e.length,
            written: n.length
        };
    });
    function A(e, t, n) {
        if (n === void 0) {
            const w = f.encode(e), d = t(w.length, 1) >>> 0;
            return l().subarray(d, d + w.length).set(w), u = w.length, d;
        }
        let o = e.length, r = t(o, 1) >>> 0;
        const c = l();
        let s = 0;
        for(; s < o; s++){
            const w = e.charCodeAt(s);
            if (w > 127) break;
            c[r + s] = w;
        }
        if (s !== o) {
            s !== 0 && (e = e.slice(s)), r = n(r, o, o = s + e.length * 3, 1) >>> 0;
            const w = l().subarray(r + s, r + o), d = f.encodeInto(e, w);
            s += d.written, r = n(r, o, s, 1) >>> 0;
        }
        return u = s, r;
    }
    let i = null;
    function y() {
        return (i === null || i.buffer.detached === !0 || i.buffer.detached === void 0 && i.buffer !== a.memory.buffer) && (i = new DataView(a.memory.buffer)), i;
    }
    function g(e) {
        return e == null;
    }
    function E(e) {
        const t = a.__wbindgen_export_2.get(e);
        return a.__externref_table_dealloc(e), t;
    }
    function z(e) {
        const t = A(e, a.__wbindgen_malloc, a.__wbindgen_realloc), n = u, o = a.analyze_mixed_encoder_configs(t, n);
        if (o[2]) throw E(o[1]);
        return E(o[0]);
    }
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((e)=>a.__wbg_wasmnetwork_free(e >>> 0, 1));
    function B() {
        return m(function(e, t) {
            return e.call(t);
        }, arguments);
    }
    function O() {
        return m(function(e, t, n) {
            return e.call(t, n);
        }, arguments);
    }
    function j(e) {
        return e.crypto;
    }
    function D(e, t) {
        let n, o;
        try {
            n = e, o = t, console.error(h(e, t));
        } finally{
            a.__wbindgen_free(n, o, 1);
        }
    }
    function M() {
        return m(function(e, t) {
            globalThis.crypto.getRandomValues(x(e, t));
        }, arguments);
    }
    function U() {
        return m(function(e, t) {
            e.getRandomValues(t);
        }, arguments);
    }
    function V(e) {
        return e.length;
    }
    function N(e) {
        return e.msCrypto;
    }
    function C() {
        return new Error;
    }
    function q(e, t) {
        return new Function(h(e, t));
    }
    function $(e) {
        return new Uint8Array(e >>> 0);
    }
    function G(e) {
        return e.node;
    }
    function H(e) {
        return e.process;
    }
    function J(e, t, n) {
        Uint8Array.prototype.set.call(x(e, t), n);
    }
    function X() {
        return m(function(e, t) {
            e.randomFillSync(t);
        }, arguments);
    }
    function P() {
        return m(function() {
            return module.require;
        }, arguments);
    }
    function Y(e, t) {
        const n = t.stack, o = A(n, a.__wbindgen_malloc, a.__wbindgen_realloc), r = u;
        y().setInt32(e + 4, r, !0), y().setInt32(e + 0, o, !0);
    }
    function K() {
        const e = typeof global > "u" ? null : global;
        return g(e) ? 0 : k(e);
    }
    function Q() {
        const e = typeof globalThis > "u" ? null : globalThis;
        return g(e) ? 0 : k(e);
    }
    function Z() {
        const e = typeof self > "u" ? null : self;
        return g(e) ? 0 : k(e);
    }
    function ee() {
        const e = typeof window > "u" ? null : window;
        return g(e) ? 0 : k(e);
    }
    function _e(e, t, n) {
        return e.subarray(t >>> 0, n >>> 0);
    }
    function te(e) {
        return e.versions;
    }
    function ne(e) {
        return typeof e == "function";
    }
    function oe(e) {
        const t = e;
        return typeof t == "object" && t !== null;
    }
    function re(e) {
        return typeof e == "string";
    }
    function se(e) {
        return e === void 0;
    }
    function ae(e, t) {
        const n = t, o = typeof n == "string" ? n : void 0;
        var r = g(o) ? 0 : A(o, a.__wbindgen_malloc, a.__wbindgen_realloc), c = u;
        y().setInt32(e + 4, c, !0), y().setInt32(e + 0, r, !0);
    }
    function ce(e, t) {
        throw new Error(h(e, t));
    }
    function we(e, t) {
        return h(e, t);
    }
    function ie(e, t) {
        return x(e, t);
    }
    function me() {
        const e = a.__wbindgen_export_2, t = e.grow(4);
        e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1);
    }
    URL = globalThis.URL;
    const _ = await F({
        "./dcc_bundle_bg.js": {
            __wbg_crypto_574e78ad8b13b65f: j,
            __wbg_process_dc0fbacc7c1c06f7: H,
            __wbg_versions_c01dfd4722a88165: te,
            __wbg_node_905d3e251edff8a2: G,
            __wbg_msCrypto_a61aeb35a24c1329: N,
            __wbg_require_60cc747a6bc5215a: P,
            __wbg_randomFillSync_ac0988aba3254290: X,
            __wbg_getRandomValues_b8f5dbd5f3995a9e: U,
            __wbg_new_8a6f238a6ece86ea: C,
            __wbg_stack_0ed75d68575b0f3c: Y,
            __wbg_error_7534b8e9a36f1ab4: D,
            __wbg_newnoargs_254190557c45b4ec: q,
            __wbg_length_6bb7e81f9d7713e4: V,
            __wbg_prototypesetcall_3d4a26c1ed734349: J,
            __wbg_newwithlength_a167dcc7aaa3ba77: $,
            __wbg_subarray_70fd07feefe14294: _e,
            __wbg_static_accessor_GLOBAL_THIS_f0a4409105898184: Q,
            __wbg_call_13410aac570ffff7: B,
            __wbg_static_accessor_SELF_995b214ae681ff99: Z,
            __wbg_static_accessor_GLOBAL_8921f820c2ce3f12: K,
            __wbg_static_accessor_WINDOW_cde3890479c675ea: ee,
            __wbg_call_a5400b25a865cfd8: O,
            __wbg_getRandomValues_1c61fac11405ffdc: M,
            __wbg_wbindgenstringget_0f16a6ddddef376f: ae,
            __wbg_wbindgenthrow_451ec1a8469d7eb6: ce,
            __wbg_wbindgenisobject_307a53c6bd97fbf8: oe,
            __wbg_wbindgenisstring_d4fa939789f003b0: re,
            __wbg_wbindgenisfunction_8cee7dce3725ae74: ne,
            __wbg_wbindgenisundefined_c4b71d073b92f3c5: se,
            __wbindgen_init_externref_table: me,
            __wbindgen_cast_2241b6af4c4b2941: we,
            __wbindgen_cast_cb9088102bce6b30: ie
        }
    }, S), de = _.memory, le = _.__wbg_wasmnetwork_free, fe = _.analyze_hypergrid_2d, ue = _.analyze_mixed_encoder_configs, ke = _.analyze_multi_encoder, ge = _.wasmnetwork_add_constant_datasource, be = _.wasmnetwork_add_datasource_from_config, pe = _.wasmnetwork_add_discrete_datasource_from_config, ye = _.wasmnetwork_add_gym_env, he = _.wasmnetwork_add_multi_layer_datasource, ve = _.wasmnetwork_add_sine_datasource, xe = _.wasmnetwork_add_spec, Ae = _.wasmnetwork_add_square_datasource, Ee = _.wasmnetwork_advance_driver, Ie = _.wasmnetwork_build, Te = _.wasmnetwork_clear_actor_state, Se = _.wasmnetwork_clear_hierarchy_state, Fe = _.wasmnetwork_connect_action, Le = _.wasmnetwork_connect_discrete_source, Re = _.wasmnetwork_connect_done_source, We = _.wasmnetwork_connect_label_source, ze = _.wasmnetwork_connect_reward_source, Be = _.wasmnetwork_connect_scalar_source, Oe = _.wasmnetwork_connect_scalar_source_dim_to_dim_with_offset, je = _.wasmnetwork_connect_scalar_source_from_dim, De = _.wasmnetwork_connect_scalar_source_from_dim_with_offset, Me = _.wasmnetwork_connect_scalar_source_to_dim, Ue = _.wasmnetwork_connect_scalar_source_with_offset, Ve = _.wasmnetwork_connect_to_context, Ne = _.wasmnetwork_connect_to_context_with_offset, Ce = _.wasmnetwork_connect_to_credit, qe = _.wasmnetwork_connect_to_credit_with_offset, $e = _.wasmnetwork_connect_to_input, Ge = _.wasmnetwork_connect_to_input_with_offset, He = _.wasmnetwork_encode_scalar, Je = _.wasmnetwork_encode_scalars_batch, Xe = _.wasmnetwork_execute, Pe = _.wasmnetwork_export_config, Ye = _.wasmnetwork_export_config_canonical, Ke = _.wasmnetwork_export_state_binary, Qe = _.wasmnetwork_get_active_bits_batch, Ze = _.wasmnetwork_get_actor_action, e_ = _.wasmnetwork_get_all_node_outputs, __ = _.wasmnetwork_get_anomaly, t_ = _.wasmnetwork_get_cell_dendrites, n_ = _.wasmnetwork_get_gym_spec, o_ = _.wasmnetwork_get_gym_state, r_ = _.wasmnetwork_get_hierarchy_action, s_ = _.wasmnetwork_get_htm_classifier_probabilities, a_ = _.wasmnetwork_get_learner_wiring, c_ = _.wasmnetwork_get_node_active_bits, w_ = _.wasmnetwork_get_node_name, i_ = _.wasmnetwork_get_node_state, m_ = _.wasmnetwork_get_nodes_info, d_ = _.wasmnetwork_get_policy_action, l_ = _.wasmnetwork_get_policy_baseline, f_ = _.wasmnetwork_get_policy_probabilities, u_ = _.wasmnetwork_get_prediction_error, k_ = _.wasmnetwork_get_probabilities, g_ = _.wasmnetwork_get_scalar_value, b_ = _.wasmnetwork_get_state_canonical, p_ = _.wasmnetwork_get_state_json, y_ = _.wasmnetwork_get_tm_anomaly, h_ = _.wasmnetwork_get_trace_json, v_ = _.wasmnetwork_gym_links, x_ = _.wasmnetwork_host_advanced_nodes, A_ = _.wasmnetwork_import_config, E_ = _.wasmnetwork_import_config_canonical, I_ = _.wasmnetwork_import_state_binary, T_ = _.wasmnetwork_init_node, S_ = _.wasmnetwork_input_response, F_ = _.wasmnetwork_is_node_fresh, L_ = _.wasmnetwork_is_recording, R_ = _.wasmnetwork_new, W_ = _.wasmnetwork_num_nodes, z_ = _.wasmnetwork_place_cell_add_cell, B_ = _.wasmnetwork_place_cell_num_bins, O_ = _.wasmnetwork_place_cell_remove_cell, j_ = _.wasmnetwork_preview_datasource_config, D_ = _.wasmnetwork_remove_connection, M_ = _.wasmnetwork_remove_node, U_ = _.wasmnetwork_reset_gym_env, V_ = _.wasmnetwork_set_actor_reward, N_ = _.wasmnetwork_set_advance_mode, C_ = _.wasmnetwork_set_classifier_label, q_ = _.wasmnetwork_set_discrete_value, $_ = _.wasmnetwork_set_hierarchy_reward, G_ = _.wasmnetwork_set_htm_classifier_label, H_ = _.wasmnetwork_set_htm_encoder_value, J_ = _.wasmnetwork_set_hypergrid_dim_value, X_ = _.wasmnetwork_set_input_response, P_ = _.wasmnetwork_set_multiple_classifier_labels, Y_ = _.wasmnetwork_set_multiple_discrete_values, K_ = _.wasmnetwork_set_multiple_scalar_values, Q_ = _.wasmnetwork_set_node_value, Z_ = _.wasmnetwork_set_scalar_value, et = _.wasmnetwork_set_simhash_document, _t = _.wasmnetwork_start_recording, tt = _.wasmnetwork_step_gym_env, nt = _.set_panic_hook, ot = _.__wbindgen_exn_store, rt = _.__externref_table_alloc, st = _.__wbindgen_export_2, at = _.__wbindgen_free, ct = _.__wbindgen_malloc, wt = _.__wbindgen_realloc, it = _.__externref_table_dealloc, T = _.__wbindgen_start;
    var mt = Object.freeze({
        __proto__: null,
        __externref_table_alloc: rt,
        __externref_table_dealloc: it,
        __wbg_wasmnetwork_free: le,
        __wbindgen_exn_store: ot,
        __wbindgen_export_2: st,
        __wbindgen_free: at,
        __wbindgen_malloc: ct,
        __wbindgen_realloc: wt,
        __wbindgen_start: T,
        analyze_hypergrid_2d: fe,
        analyze_mixed_encoder_configs: ue,
        analyze_multi_encoder: ke,
        memory: de,
        set_panic_hook: nt,
        wasmnetwork_add_constant_datasource: ge,
        wasmnetwork_add_datasource_from_config: be,
        wasmnetwork_add_discrete_datasource_from_config: pe,
        wasmnetwork_add_gym_env: ye,
        wasmnetwork_add_multi_layer_datasource: he,
        wasmnetwork_add_sine_datasource: ve,
        wasmnetwork_add_spec: xe,
        wasmnetwork_add_square_datasource: Ae,
        wasmnetwork_advance_driver: Ee,
        wasmnetwork_build: Ie,
        wasmnetwork_clear_actor_state: Te,
        wasmnetwork_clear_hierarchy_state: Se,
        wasmnetwork_connect_action: Fe,
        wasmnetwork_connect_discrete_source: Le,
        wasmnetwork_connect_done_source: Re,
        wasmnetwork_connect_label_source: We,
        wasmnetwork_connect_reward_source: ze,
        wasmnetwork_connect_scalar_source: Be,
        wasmnetwork_connect_scalar_source_dim_to_dim_with_offset: Oe,
        wasmnetwork_connect_scalar_source_from_dim: je,
        wasmnetwork_connect_scalar_source_from_dim_with_offset: De,
        wasmnetwork_connect_scalar_source_to_dim: Me,
        wasmnetwork_connect_scalar_source_with_offset: Ue,
        wasmnetwork_connect_to_context: Ve,
        wasmnetwork_connect_to_context_with_offset: Ne,
        wasmnetwork_connect_to_credit: Ce,
        wasmnetwork_connect_to_credit_with_offset: qe,
        wasmnetwork_connect_to_input: $e,
        wasmnetwork_connect_to_input_with_offset: Ge,
        wasmnetwork_encode_scalar: He,
        wasmnetwork_encode_scalars_batch: Je,
        wasmnetwork_execute: Xe,
        wasmnetwork_export_config: Pe,
        wasmnetwork_export_config_canonical: Ye,
        wasmnetwork_export_state_binary: Ke,
        wasmnetwork_get_active_bits_batch: Qe,
        wasmnetwork_get_actor_action: Ze,
        wasmnetwork_get_all_node_outputs: e_,
        wasmnetwork_get_anomaly: __,
        wasmnetwork_get_cell_dendrites: t_,
        wasmnetwork_get_gym_spec: n_,
        wasmnetwork_get_gym_state: o_,
        wasmnetwork_get_hierarchy_action: r_,
        wasmnetwork_get_htm_classifier_probabilities: s_,
        wasmnetwork_get_learner_wiring: a_,
        wasmnetwork_get_node_active_bits: c_,
        wasmnetwork_get_node_name: w_,
        wasmnetwork_get_node_state: i_,
        wasmnetwork_get_nodes_info: m_,
        wasmnetwork_get_policy_action: d_,
        wasmnetwork_get_policy_baseline: l_,
        wasmnetwork_get_policy_probabilities: f_,
        wasmnetwork_get_prediction_error: u_,
        wasmnetwork_get_probabilities: k_,
        wasmnetwork_get_scalar_value: g_,
        wasmnetwork_get_state_canonical: b_,
        wasmnetwork_get_state_json: p_,
        wasmnetwork_get_tm_anomaly: y_,
        wasmnetwork_get_trace_json: h_,
        wasmnetwork_gym_links: v_,
        wasmnetwork_host_advanced_nodes: x_,
        wasmnetwork_import_config: A_,
        wasmnetwork_import_config_canonical: E_,
        wasmnetwork_import_state_binary: I_,
        wasmnetwork_init_node: T_,
        wasmnetwork_input_response: S_,
        wasmnetwork_is_node_fresh: F_,
        wasmnetwork_is_recording: L_,
        wasmnetwork_new: R_,
        wasmnetwork_num_nodes: W_,
        wasmnetwork_place_cell_add_cell: z_,
        wasmnetwork_place_cell_num_bins: B_,
        wasmnetwork_place_cell_remove_cell: O_,
        wasmnetwork_preview_datasource_config: j_,
        wasmnetwork_remove_connection: D_,
        wasmnetwork_remove_node: M_,
        wasmnetwork_reset_gym_env: U_,
        wasmnetwork_set_actor_reward: V_,
        wasmnetwork_set_advance_mode: N_,
        wasmnetwork_set_classifier_label: C_,
        wasmnetwork_set_discrete_value: q_,
        wasmnetwork_set_hierarchy_reward: $_,
        wasmnetwork_set_htm_classifier_label: G_,
        wasmnetwork_set_htm_encoder_value: H_,
        wasmnetwork_set_hypergrid_dim_value: J_,
        wasmnetwork_set_input_response: X_,
        wasmnetwork_set_multiple_classifier_labels: P_,
        wasmnetwork_set_multiple_discrete_values: Y_,
        wasmnetwork_set_multiple_scalar_values: K_,
        wasmnetwork_set_node_value: Q_,
        wasmnetwork_set_scalar_value: Z_,
        wasmnetwork_set_simhash_document: et,
        wasmnetwork_start_recording: _t,
        wasmnetwork_step_gym_env: tt
    });
    L(mt);
    T();
    I = 600;
    let dt = z;
    lt = function(e) {
        if (!e.encoders || e.encoders.length === 0) throw new Error("At least one encoder is required");
        const [t, n] = e.viewBounds;
        if (!Number.isFinite(t) || !Number.isFinite(n) || t >= n) throw new Error("Invalid view bounds: require finite view_lo < view_hi");
        const o = n - t;
        for (const c of e.encoders){
            const s = Number.isFinite(c.min_modulus) && c.min_modulus > 0 ? c.min_modulus : Number.isFinite(c.modulus) && c.modulus > 0 ? c.modulus : null;
            if (s !== null) {
                const w = o / s;
                if (w > I) throw new Error(`Encoder too fine to analyze over this range: ~${Math.round(w)} periods (finest modulus ${s} across a range of ${o}). Increase the modulus or narrow the plot range so periods-in-view stays under ${I}.`);
            }
        }
        const r = JSON.stringify({
            view_lo: t,
            view_hi: n,
            encoders: e.encoders
        });
        return JSON.parse(dt(r));
    };
})();
export { I as MAX_PERIODS_IN_VIEW, lt as runAnalysis, __tla };
