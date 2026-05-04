var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var require_stdin = __commonJS({
  "<stdin>"(exports, module) {
    (async () => {
      (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s);
        new MutationObserver((s) => {
          for (const a of s) if (a.type === "childList") for (const i of a.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && o(i);
        }).observe(document, {
          childList: true,
          subtree: true
        });
        function n(s) {
          const a = {};
          return s.integrity && (a.integrity = s.integrity), s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? a.credentials = "include" : s.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
        }
        function o(s) {
          if (s.ep) return;
          s.ep = true;
          const a = n(s);
          fetch(s.href, a);
        }
      })();
      const Nt = "/encoder_analysis/assets/dcc_bundle_bg-XCii5kzL.wasm", Ft = async (e = {}, t) => {
        let n;
        if (t.startsWith("data:")) {
          const o = t.replace(/^data:.*?base64,/, "");
          let s;
          if (typeof Buffer == "function" && typeof Buffer.from == "function") s = Buffer.from(o, "base64");
          else if (typeof atob == "function") {
            const a = atob(o);
            s = new Uint8Array(a.length);
            for (let i = 0; i < a.length; i++) s[i] = a.charCodeAt(i);
          } else throw new Error("Cannot decode base64-encoded data URL");
          n = await WebAssembly.instantiate(s, e);
        } else {
          const o = await fetch(t), s = o.headers.get("Content-Type") || "";
          if ("instantiateStreaming" in WebAssembly && s.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(o, e);
          else {
            const a = await o.arrayBuffer();
            n = await WebAssembly.instantiate(a, e);
          }
        }
        return n.instance.exports;
      };
      let w;
      function Mt(e) {
        w = e;
      }
      function le(e) {
        const t = w.__externref_table_alloc();
        return w.__wbindgen_export_2.set(t, e), t;
      }
      function de(e, t) {
        try {
          return e.apply(this, t);
        } catch (n) {
          const o = le(n);
          w.__wbindgen_exn_store(o);
        }
      }
      let we = null;
      function re() {
        return (we === null || we.byteLength === 0) && (we = new Uint8Array(w.memory.buffer)), we;
      }
      let Ee = new TextDecoder("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      Ee.decode();
      const Ot = 2146435072;
      let Ve = 0;
      function $t(e, t) {
        return Ve += t, Ve >= Ot && (Ee = new TextDecoder("utf-8", {
          ignoreBOM: true,
          fatal: true
        }), Ee.decode(), Ve = t), Ee.decode(re().subarray(e, e + t));
      }
      function Le(e, t) {
        return e = e >>> 0, $t(e, t);
      }
      function vt(e, t) {
        return e = e >>> 0, re().subarray(e / 1, e / 1 + t);
      }
      let z = 0;
      const ae = new TextEncoder();
      "encodeInto" in ae || (ae.encodeInto = function(e, t) {
        const n = ae.encode(e);
        return t.set(n), {
          read: e.length,
          written: n.length
        };
      });
      function ue(e, t, n) {
        if (n === void 0) {
          const l = ae.encode(e), c = t(l.length, 1) >>> 0;
          return re().subarray(c, c + l.length).set(l), z = l.length, c;
        }
        let o = e.length, s = t(o, 1) >>> 0;
        const a = re();
        let i = 0;
        for (; i < o; i++) {
          const l = e.charCodeAt(i);
          if (l > 127) break;
          a[s + i] = l;
        }
        if (i !== o) {
          i !== 0 && (e = e.slice(i)), s = n(s, o, o = i + e.length * 3, 1) >>> 0;
          const l = re().subarray(s + i, s + o), c = ae.encodeInto(e, l);
          i += c.written, s = n(s, o, i, 1) >>> 0;
        }
        return z = i, s;
      }
      let q = null;
      function Ie() {
        return (q === null || q.buffer.detached === true || q.buffer.detached === void 0 && q.buffer !== w.memory.buffer) && (q = new DataView(w.memory.buffer)), q;
      }
      function fe(e) {
        return e == null;
      }
      function J(e) {
        const t = w.__wbindgen_export_2.get(e);
        return w.__externref_table_dealloc(e), t;
      }
      function Wt(e) {
        const t = ue(e, w.__wbindgen_malloc, w.__wbindgen_realloc), n = z, o = w.analyze_multi_encoder_configs(t, n);
        if (o[2]) throw J(o[1]);
        return J(o[0]);
      }
      function zt(e) {
        const t = ue(e, w.__wbindgen_malloc, w.__wbindgen_realloc), n = z, o = w.analyze_periodic_encoder_configs(t, n);
        if (o[2]) throw J(o[1]);
        return J(o[0]);
      }
      function jt(e) {
        const t = ue(e, w.__wbindgen_malloc, w.__wbindgen_realloc), n = z, o = w.analyze_tapering_encoder_configs(t, n);
        if (o[2]) throw J(o[1]);
        return J(o[0]);
      }
      typeof FinalizationRegistry > "u" || new FinalizationRegistry((e) => w.__wbg_wasmnetwork_free(e >>> 0, 1));
      function Dt() {
        return de(function(e, t) {
          return e.call(t);
        }, arguments);
      }
      function Ht() {
        return de(function(e, t, n) {
          return e.call(t, n);
        }, arguments);
      }
      function Vt(e) {
        return e.crypto;
      }
      function qt(e, t) {
        let n, o;
        try {
          n = e, o = t, console.error(Le(e, t));
        } finally {
          w.__wbindgen_free(n, o, 1);
        }
      }
      function Ut() {
        return de(function(e, t) {
          e.getRandomValues(t);
        }, arguments);
      }
      function Xt(e) {
        return e.length;
      }
      function Gt(e) {
        return e.msCrypto;
      }
      function Yt() {
        return new Error();
      }
      function Jt(e, t) {
        return new Function(Le(e, t));
      }
      function Kt(e) {
        return new Uint8Array(e >>> 0);
      }
      function Qt(e) {
        return e.node;
      }
      function Zt(e) {
        return e.process;
      }
      function en(e, t, n) {
        Uint8Array.prototype.set.call(vt(e, t), n);
      }
      function tn() {
        return de(function(e, t) {
          e.randomFillSync(t);
        }, arguments);
      }
      function nn() {
        return de(function() {
          return module.require;
        }, arguments);
      }
      function on(e, t) {
        const n = t.stack, o = ue(n, w.__wbindgen_malloc, w.__wbindgen_realloc), s = z;
        Ie().setInt32(e + 4 * 1, s, true), Ie().setInt32(e + 4 * 0, o, true);
      }
      function sn() {
        const e = typeof global > "u" ? null : global;
        return fe(e) ? 0 : le(e);
      }
      function rn() {
        const e = typeof globalThis > "u" ? null : globalThis;
        return fe(e) ? 0 : le(e);
      }
      function an() {
        const e = typeof self > "u" ? null : self;
        return fe(e) ? 0 : le(e);
      }
      function cn() {
        const e = typeof window > "u" ? null : window;
        return fe(e) ? 0 : le(e);
      }
      function ln(e, t, n) {
        return e.subarray(t >>> 0, n >>> 0);
      }
      function dn(e) {
        return e.versions;
      }
      function un(e) {
        return typeof e == "function";
      }
      function fn(e) {
        const t = e;
        return typeof t == "object" && t !== null;
      }
      function pn(e) {
        return typeof e == "string";
      }
      function _n(e) {
        return e === void 0;
      }
      function mn(e, t) {
        const n = t, o = typeof n == "string" ? n : void 0;
        var s = fe(o) ? 0 : ue(o, w.__wbindgen_malloc, w.__wbindgen_realloc), a = z;
        Ie().setInt32(e + 4 * 1, a, true), Ie().setInt32(e + 4 * 0, s, true);
      }
      function gn(e, t) {
        throw new Error(Le(e, t));
      }
      function bn(e, t) {
        return Le(e, t);
      }
      function hn(e, t) {
        return vt(e, t);
      }
      function wn() {
        const e = w.__wbindgen_export_2, t = e.grow(4);
        e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
      }
      URL = globalThis.URL;
      const yn = await Ft({
        "./dcc_bundle_bg.js": {
          __wbg_new_8a6f238a6ece86ea: Yt,
          __wbg_stack_0ed75d68575b0f3c: on,
          __wbg_error_7534b8e9a36f1ab4: qt,
          __wbg_crypto_574e78ad8b13b65f: Vt,
          __wbg_process_dc0fbacc7c1c06f7: Zt,
          __wbg_versions_c01dfd4722a88165: dn,
          __wbg_node_905d3e251edff8a2: Qt,
          __wbg_msCrypto_a61aeb35a24c1329: Gt,
          __wbg_require_60cc747a6bc5215a: nn,
          __wbg_randomFillSync_ac0988aba3254290: tn,
          __wbg_getRandomValues_b8f5dbd5f3995a9e: Ut,
          __wbg_newnoargs_254190557c45b4ec: Jt,
          __wbg_length_6bb7e81f9d7713e4: Xt,
          __wbg_prototypesetcall_3d4a26c1ed734349: en,
          __wbg_newwithlength_a167dcc7aaa3ba77: Kt,
          __wbg_subarray_70fd07feefe14294: ln,
          __wbg_static_accessor_GLOBAL_THIS_f0a4409105898184: rn,
          __wbg_call_13410aac570ffff7: Dt,
          __wbg_static_accessor_SELF_995b214ae681ff99: an,
          __wbg_static_accessor_GLOBAL_8921f820c2ce3f12: sn,
          __wbg_static_accessor_WINDOW_cde3890479c675ea: cn,
          __wbg_call_a5400b25a865cfd8: Ht,
          __wbg_wbindgenstringget_0f16a6ddddef376f: mn,
          __wbg_wbindgenthrow_451ec1a8469d7eb6: gn,
          __wbg_wbindgenisobject_307a53c6bd97fbf8: fn,
          __wbg_wbindgenisstring_d4fa939789f003b0: pn,
          __wbg_wbindgenisfunction_8cee7dce3725ae74: un,
          __wbg_wbindgenisundefined_c4b71d073b92f3c5: _n,
          __wbindgen_init_externref_table: wn,
          __wbindgen_cast_cb9088102bce6b30: hn,
          __wbindgen_cast_2241b6af4c4b2941: bn
        }
      }, Nt), { memory: xn, __wbg_wasmnetwork_free: vn, analyze_multi_encoder: En, analyze_multi_encoder_configs: Sn, analyze_periodic_encoder_configs: kn, analyze_periodic_scalar_multi_encoder: Cn, analyze_tapering_encoder: Bn, analyze_tapering_encoder_configs: Pn, encode_scalar_fixed: Rn, encode_scalar_periodic: In, wasmnetwork_add_constant_datasource: An, wasmnetwork_add_context_learner: Ln, wasmnetwork_add_datasource_from_config: Tn, wasmnetwork_add_discrete_datasource_from_config: Nn, wasmnetwork_add_discrete_transformer: Fn, wasmnetwork_add_fixed_weight_transformer: Mn, wasmnetwork_add_multi_layer_datasource: On, wasmnetwork_add_pattern_classifier: $n, wasmnetwork_add_pattern_pooler: Wn, wasmnetwork_add_periodic_cell_transformer: zn, wasmnetwork_add_periodic_scalar_transformer: jn, wasmnetwork_add_persistence_transformer: Dn, wasmnetwork_add_place_cell_transformer: Hn, wasmnetwork_add_randomized_place_cell_transformer: Vn, wasmnetwork_add_scalar_transformer: qn, wasmnetwork_add_sequence_learner: Un, wasmnetwork_add_sine_datasource: Xn, wasmnetwork_add_square_datasource: Gn, wasmnetwork_add_tapering_weight_transformer: Yn, wasmnetwork_build: Jn, wasmnetwork_connect_discrete_source: Kn, wasmnetwork_connect_label_source: Qn, wasmnetwork_connect_scalar_source: Zn, wasmnetwork_connect_to_context: eo, wasmnetwork_connect_to_context_with_offset: to, wasmnetwork_connect_to_input: no, wasmnetwork_connect_to_input_with_offset: oo, wasmnetwork_encode_scalar: so, wasmnetwork_encode_scalars_batch: ro, wasmnetwork_execute: ao, wasmnetwork_export_config: co, wasmnetwork_export_config_canonical: io, wasmnetwork_get_all_block_outputs: lo, wasmnetwork_get_anomaly: uo, wasmnetwork_get_block_name: fo, wasmnetwork_get_block_state: po, wasmnetwork_get_blocks_info: _o, wasmnetwork_get_probabilities: mo, wasmnetwork_get_scalar_value: go, wasmnetwork_get_state_canonical: bo, wasmnetwork_get_state_json: ho, wasmnetwork_get_trace_json: wo, wasmnetwork_import_config: yo, wasmnetwork_import_config_canonical: xo, wasmnetwork_init_block: vo, wasmnetwork_is_recording: Eo, wasmnetwork_new: So, wasmnetwork_num_blocks: ko, wasmnetwork_place_cell_add_cell: Co, wasmnetwork_place_cell_num_bins: Bo, wasmnetwork_place_cell_remove_cell: Po, wasmnetwork_remove_block: Ro, wasmnetwork_remove_connection: Io, wasmnetwork_set_classifier_label: Ao, wasmnetwork_set_discrete_value: Lo, wasmnetwork_set_multiple_classifier_labels: To, wasmnetwork_set_multiple_discrete_values: No, wasmnetwork_set_multiple_scalar_values: Fo, wasmnetwork_set_scalar_value: Mo, wasmnetwork_start_recording: Oo, set_panic_hook: $o, wasmnetwork_rebuild: Wo, __wbindgen_exn_store: zo, __externref_table_alloc: jo, __wbindgen_export_2: Do, __wbindgen_free: Ho, __wbindgen_malloc: Vo, __wbindgen_realloc: qo, __externref_table_dealloc: Uo, __wbindgen_start: Et } = yn, Xo = Object.freeze(Object.defineProperty({
        __proto__: null,
        __externref_table_alloc: jo,
        __externref_table_dealloc: Uo,
        __wbg_wasmnetwork_free: vn,
        __wbindgen_exn_store: zo,
        __wbindgen_export_2: Do,
        __wbindgen_free: Ho,
        __wbindgen_malloc: Vo,
        __wbindgen_realloc: qo,
        __wbindgen_start: Et,
        analyze_multi_encoder: En,
        analyze_multi_encoder_configs: Sn,
        analyze_periodic_encoder_configs: kn,
        analyze_periodic_scalar_multi_encoder: Cn,
        analyze_tapering_encoder: Bn,
        analyze_tapering_encoder_configs: Pn,
        encode_scalar_fixed: Rn,
        encode_scalar_periodic: In,
        memory: xn,
        set_panic_hook: $o,
        wasmnetwork_add_constant_datasource: An,
        wasmnetwork_add_context_learner: Ln,
        wasmnetwork_add_datasource_from_config: Tn,
        wasmnetwork_add_discrete_datasource_from_config: Nn,
        wasmnetwork_add_discrete_transformer: Fn,
        wasmnetwork_add_fixed_weight_transformer: Mn,
        wasmnetwork_add_multi_layer_datasource: On,
        wasmnetwork_add_pattern_classifier: $n,
        wasmnetwork_add_pattern_pooler: Wn,
        wasmnetwork_add_periodic_cell_transformer: zn,
        wasmnetwork_add_periodic_scalar_transformer: jn,
        wasmnetwork_add_persistence_transformer: Dn,
        wasmnetwork_add_place_cell_transformer: Hn,
        wasmnetwork_add_randomized_place_cell_transformer: Vn,
        wasmnetwork_add_scalar_transformer: qn,
        wasmnetwork_add_sequence_learner: Un,
        wasmnetwork_add_sine_datasource: Xn,
        wasmnetwork_add_square_datasource: Gn,
        wasmnetwork_add_tapering_weight_transformer: Yn,
        wasmnetwork_build: Jn,
        wasmnetwork_connect_discrete_source: Kn,
        wasmnetwork_connect_label_source: Qn,
        wasmnetwork_connect_scalar_source: Zn,
        wasmnetwork_connect_to_context: eo,
        wasmnetwork_connect_to_context_with_offset: to,
        wasmnetwork_connect_to_input: no,
        wasmnetwork_connect_to_input_with_offset: oo,
        wasmnetwork_encode_scalar: so,
        wasmnetwork_encode_scalars_batch: ro,
        wasmnetwork_execute: ao,
        wasmnetwork_export_config: co,
        wasmnetwork_export_config_canonical: io,
        wasmnetwork_get_all_block_outputs: lo,
        wasmnetwork_get_anomaly: uo,
        wasmnetwork_get_block_name: fo,
        wasmnetwork_get_block_state: po,
        wasmnetwork_get_blocks_info: _o,
        wasmnetwork_get_probabilities: mo,
        wasmnetwork_get_scalar_value: go,
        wasmnetwork_get_state_canonical: bo,
        wasmnetwork_get_state_json: ho,
        wasmnetwork_get_trace_json: wo,
        wasmnetwork_import_config: yo,
        wasmnetwork_import_config_canonical: xo,
        wasmnetwork_init_block: vo,
        wasmnetwork_is_recording: Eo,
        wasmnetwork_new: So,
        wasmnetwork_num_blocks: ko,
        wasmnetwork_place_cell_add_cell: Co,
        wasmnetwork_place_cell_num_bins: Bo,
        wasmnetwork_place_cell_remove_cell: Po,
        wasmnetwork_rebuild: Wo,
        wasmnetwork_remove_block: Ro,
        wasmnetwork_remove_connection: Io,
        wasmnetwork_set_classifier_label: Ao,
        wasmnetwork_set_discrete_value: Lo,
        wasmnetwork_set_multiple_classifier_labels: To,
        wasmnetwork_set_multiple_discrete_values: No,
        wasmnetwork_set_multiple_scalar_values: Fo,
        wasmnetwork_set_scalar_value: Mo,
        wasmnetwork_start_recording: Oo
      }, Symbol.toStringTag, {
        value: "Module"
      }));
      Mt(Xo);
      Et();
      function Go(e) {
        const { encoderType: t, configs: n } = e;
        if (t === "periodic") {
          const i = e.period, l = e.bounds;
          if (!i || i <= 0) throw "Invalid period";
          if (!l) throw "Invalid bounds";
          const [c, r] = l, u = n.map(({ n: d, w: f }) => ({
            n: d,
            w: f,
            period: i,
            lower_bound: c,
            upper_bound: r
          }));
          return JSON.parse(zt(JSON.stringify(u)));
        }
        const o = e.viewBounds;
        if (!o) throw "Invalid view bounds";
        const [s, a] = o;
        return JSON.parse(t === "tapering" ? jt(JSON.stringify(n.map((i) => ({
          ...i,
          view_lo: s,
          view_hi: a
        })))) : Wt(JSON.stringify(n.map((i) => ({
          ...i,
          view_lo: s,
          view_hi: a
        })))));
      }
      const ft = [
        "#d60000",
        "#8c3bff",
        "#018700",
        "#00acc6",
        "#e6a500",
        "#ff7ed1",
        "#6b004f",
        "#573b00",
        "#005659",
        "#15e18c",
        "#0000dd",
        "#a17569",
        "#bcb6ff",
        "#bf03b8",
        "#645472",
        "#790000",
        "#0774d8",
        "#729a7c",
        "#ff7752",
        "#004b00",
        "#8e7b01",
        "#f2007b",
        "#8eba00",
        "#a57bb8",
        "#5901a3",
        "#e2afaf",
        "#a03a52",
        "#a1c8c8",
        "#9e4b00",
        "#546744",
        "#bac389",
        "#5e7b87",
        "#60383b",
        "#8287ff",
        "#380000",
        "#e252ff",
        "#2f5282",
        "#7ecaff",
        "#c4668e",
        "#008069",
        "#919eb6",
        "#cc7407",
        "#7e2a8e",
        "#00bda3",
        "#2db152",
        "#4d33ff",
        "#00e400",
        "#ff00cd",
        "#c85748",
        "#e49cff",
        "#1ca1ff",
        "#6e70aa",
        "#c89a69",
        "#77563b",
        "#03dae6",
        "#c1a3c3",
        "#ff6989",
        "#ba00fd",
        "#915280",
        "#9e0174",
        "#93a14f",
        "#364424",
        "#af6dff",
        "#596d00",
        "#ff3146",
        "#828056",
        "#006d2d",
        "#8956af",
        "#5949a3",
        "#773416",
        "#85c39a",
        "#5e1123",
        "#d48580",
        "#a32818",
        "#0087b1",
        "#ca0044",
        "#ffa056",
        "#eb4d00",
        "#6b9700",
        "#528549",
        "#755900",
        "#c8c33f",
        "#91d370",
        "#4b9793",
        "#4d230c",
        "#60345b",
        "#8300cf",
        "#8a0031",
        "#9e6e31",
        "#ac8399",
        "#c63189",
        "#015438",
        "#086b83",
        "#87a8eb",
        "#6466ef",
        "#c35dba",
        "#019e70",
        "#805059",
        "#826e8c",
        "#b3bfda",
        "#b89028",
        "#ff97b1",
        "#a793e1",
        "#698cbd",
        "#4b4f01",
        "#4801cc",
        "#60006e",
        "#446966",
        "#9c5642",
        "#7bacb5",
        "#cd83bc",
        "#0054c1",
        "#7b2f4f",
        "#fb7c00",
        "#34bf00",
        "#ff9c87",
        "#e1b669",
        "#526077",
        "#5b3a7c",
        "#eda5da",
        "#ef52a3",
        "#5d7e69",
        "#c3774f",
        "#d14867",
        "#6e00eb",
        "#1f3400",
        "#c14103",
        "#6dd4c1",
        "#46709e",
        "#a101c3",
        "#0a8289",
        "#afa501",
        "#a55b6b",
        "#fd77ff",
        "#8a85ae",
        "#c67ee8",
        "#9aaa85",
        "#876bd8",
        "#01baf6",
        "#af5dd1",
        "#59502a",
        "#b5005e",
        "#7cb569",
        "#4985ff",
        "#00c182",
        "#d195aa",
        "#a34ba8",
        "#e205e2",
        "#16a300",
        "#382d00",
        "#832f33",
        "#5d95aa",
        "#590f00",
        "#7b4600",
        "#6e6e31",
        "#335726",
        "#4d60b5",
        "#a19564",
        "#623f28",
        "#44d457",
        "#70aacf",
        "#2d6b4d",
        "#72af9e",
        "#fd1500",
        "#d8b391",
        "#79893b",
        "#7cc6d8",
        "#db9036",
        "#eb605d",
        "#eb5ed4",
        "#e47ba7",
        "#a56b97",
        "#009744",
        "#ba5e21",
        "#bcac52",
        "#87d82f",
        "#873472",
        "#aea8d1",
        "#e28c62",
        "#d1b1eb",
        "#36429e",
        "#3abdc1",
        "#669c4d",
        "#9e0399",
        "#4d4d79",
        "#7b4b85",
        "#c33431",
        "#8c6677",
        "#aa002d",
        "#7e0175",
        "#01824d",
        "#724967",
        "#727790",
        "#6e0099",
        "#a0ba52",
        "#e16e31",
        "#c46970",
        "#6d5b95",
        "#a33b74",
        "#316200",
        "#87004f",
        "#335769",
        "#ba8c7c",
        "#1859ff",
        "#909101",
        "#2b8ad4",
        "#1626ff",
        "#21d3ff",
        "#a390af",
        "#8a6d4f",
        "#5d213d",
        "#db03b3",
        "#6e56ca",
        "#642821",
        "#ac7700",
        "#a3bff6",
        "#b58346",
        "#9738db",
        "#b15093",
        "#7242a3",
        "#878ed1",
        "#8970b1",
        "#6baf36",
        "#5979c8",
        "#c69eff",
        "#56831a",
        "#00d6a7",
        "#824638",
        "#11421c",
        "#59aa75",
        "#905b01",
        "#f64470",
        "#ff9703",
        "#e14231",
        "#ba91cf",
        "#34574d",
        "#f7807c",
        "#903400",
        "#b3cd00",
        "#2d9ed3",
        "#798a9e",
        "#50807c",
        "#c136d6",
        "#eb0552",
        "#b8ac7e",
        "#487031",
        "#839564",
        "#d89c89",
        "#0064a3",
        "#4b9077",
        "#8e6097",
        "#ff5238",
        "#a7423b",
        "#006e70",
        "#97833d",
        "#dbafc8"
      ];
      function ie(e) {
        return ft[e % ft.length];
      }
      const Ue = [
        "#a7423b",
        "#006e70",
        "#97833d",
        "#dbafc8"
      ];
      function Xe(e, t) {
        const n = parseInt(e.slice(1, 3), 16), o = parseInt(e.slice(3, 5), 16), s = parseInt(e.slice(5, 7), 16);
        return `rgba(${n},${o},${s},${t})`;
      }
      const Yo = "#eeeeee", Jo = "#eeeeee", P = "#111111", Ko = "#888888";
      function A(e, t) {
        return {
          title: {
            text: e,
            font: {
              color: P
            }
          },
          color: P,
          gridcolor: Ko,
          tickfont: {
            color: P
          },
          ...t ? {
            range: t
          } : {}
        };
      }
      function Qo(e) {
        return {
          paper_bgcolor: Jo,
          plot_bgcolor: Yo,
          autosize: true,
          margin: {
            t: 20,
            b: 50,
            l: 60,
            r: 20
          },
          font: {
            color: P
          },
          showlegend: true,
          legend: {
            bgcolor: "rgba(0,0,0,0)",
            font: {
              color: P
            }
          },
          ...e
        };
      }
      function St(e, t) {
        return e.map((n) => n.reduce((o, s, a) => o + s * t[a], 0));
      }
      function K(e, t) {
        for (let n = 0; n < e.length - 1; n++) if (t >= e[n] && t < e[n + 1]) return n;
        return e.length - 2;
      }
      function Zo(e, t, n = 0, o = false, s) {
        const a = e[0], i = e[e.length - 1], l = s ?? Math.max(...t.flat()), c = {
          type: "heatmap",
          x: e,
          y: e,
          z: t,
          colorscale: "Oranges",
          zmin: 0,
          zmax: l,
          showscale: false
        };
        o && (c.text = t, c.texttemplate = "%{z}", c.textfont = {
          color: "black",
          size: 8
        });
        const r = e.slice(1, -1), u = n > 0 ? [
          ...r.map((d) => ({
            type: "line",
            x0: d,
            x1: d,
            y0: a,
            y1: i,
            xref: "x",
            yref: "y",
            line: {
              color: "#333333",
              width: 0.5
            }
          })),
          ...r.map((d) => ({
            type: "line",
            x0: a,
            x1: i,
            y0: d,
            y1: d,
            xref: "x",
            yref: "y",
            line: {
              color: "#333333",
              width: 0.5
            }
          }))
        ] : [];
        return {
          traces: [
            c
          ],
          layoutPatch: {
            xaxis: A("Scalar Value", [
              a,
              i
            ]),
            yaxis: A("Scalar Value", [
              a,
              i
            ]),
            shapes: u
          }
        };
      }
      function es(e, t, n, o = 0) {
        const s = t[0], a = t[t.length - 1], i = Array.from({
          length: n
        }, (c, r) => e.map((u) => u[r])), l = o > 0 ? t.slice(1, -1).map((c) => ({
          type: "line",
          x0: c,
          x1: c,
          y0: -0.5,
          y1: n - 0.5,
          xref: "x",
          yref: "y",
          line: {
            color: "#333333",
            width: 1
          }
        })) : [];
        return {
          traces: [
            {
              type: "heatmap",
              x: t,
              y: Array.from({
                length: n
              }, (c, r) => r),
              z: i,
              colorscale: [
                [
                  0,
                  "#dddddd"
                ],
                [
                  1,
                  "#111111"
                ]
              ],
              showscale: false,
              zmin: 0,
              zmax: 1
            }
          ],
          layoutPatch: {
            xaxis: A("Scalar Value", [
              s,
              a
            ]),
            yaxis: A("Bit Index", [
              -0.5,
              n - 0.5
            ]),
            shapes: l
          }
        };
      }
      function ts(e, t, n, o) {
        const s = e[0], a = e[e.length - 1], i = Math.max(1e3, e.length * 20), l = Array.from({
          length: i
        }, (p, _) => s + (a - s) * _ / (i - 1));
        let c = 0;
        const r = n.map((p, _) => {
          const m = K(e, p), b = t[m], h = St(t, b);
          c = Math.max(c, ...h);
          const y = (o == null ? void 0 : o[_]) ?? ie(_ + 4), x = l.map((g) => h[K(e, g)]);
          return {
            type: "scatter",
            mode: "lines",
            name: `ref=${p.toFixed(2)}`,
            x: l,
            y: x,
            line: {
              color: y,
              width: 2
            },
            fill: "tozeroy",
            fillcolor: Xe(y, 0.3),
            hoverinfo: "name+y"
          };
        }), u = n.map((p, _) => {
          const m = (o == null ? void 0 : o[_]) ?? ie(_ + 4);
          return {
            type: "line",
            x0: p,
            x1: p,
            y0: 0,
            y1: 1,
            xref: "x",
            yref: "paper",
            line: {
              dash: "dash",
              color: m,
              width: 1
            }
          };
        }), d = t.length > 0 ? Math.max(...t.map((p) => p.reduce((_, m) => _ + m, 0))) : c, f = Math.max(d, c) + 1;
        return {
          traces: r,
          layoutPatch: {
            xaxis: A("Similar Bits"),
            yaxis: A("Similarity", [
              0,
              f
            ]),
            shapes: u
          }
        };
      }
      function ns(e, t) {
        const n = e[0], o = e[e.length - 1], s = e.slice(1, -1), a = Math.max(...t, 1);
        return {
          traces: [
            {
              type: "bar",
              name: "Delta",
              x: s,
              y: t,
              marker: {
                color: "#555555"
              }
            },
            {
              type: "scatter",
              mode: "markers",
              name: "Count",
              x: s,
              y: t,
              marker: {
                color: "#111",
                size: 6
              }
            }
          ],
          layoutPatch: {
            xaxis: A("Boundary Position", [
              n,
              o
            ]),
            yaxis: A("Crossing Count", [
              0,
              a + 1
            ])
          }
        };
      }
      function os(e, t, n) {
        return e.map((o) => {
          const s = o.bins ?? [], a = o.bin_width ?? (o.n_bits > 0 ? (o.upper_bound - o.lower_bound) / o.n_bits : 0), i = typeof o.w == "number" ? o.w : n, l = i * a, c = s.filter((m) => !m.is_congruent), r = c.length || 1;
          let u, d;
          if (t) {
            const m = [];
            u = [];
            const h = s.some((g) => g.is_congruent) && r % i !== 0 ? r % i : 0, y = r - h;
            for (let g = 0; g < y; g++) {
              const k = c[g], L = typeof k.upper == "number" ? k.upper : k.lower + l;
              let R = 0;
              for (; R < m.length && m[R] > k.lower + 1e-9; ) R++;
              R >= m.length && m.push(-1 / 0), m[R] = L, u.push(R);
            }
            const x = m.length;
            for (let g = 0; g < h; g++) u.push(x + g);
            d = m.length + h || 1;
          } else u = c.map((m, b) => b), d = r;
          const f = new Array(s.length);
          let p = 0;
          s.forEach((m, b) => {
            m.is_congruent || (f[b] = p++);
          });
          let _ = 0;
          return s.forEach((m, b) => {
            m.is_congruent && (f[b] = _++ % r);
          }), {
            nRows: d,
            nPrimary: r,
            primaryRows: u,
            primaryIndices: f,
            expandedWidth: l
          };
        });
      }
      function ss(e) {
        const n = e.map((i) => i.nRows * 1), o = n.reduce((i, l) => i + l, 0) || 1, s = [];
        let a = o;
        for (const i of n) a -= i, s.push(a);
        return {
          yBases: s,
          encHeights: n,
          totalHeight: o
        };
      }
      function Se(e, t, n, o = false, s = 1, a = null) {
        const c = [], r = [], u = os(e, o, s), { yBases: d, totalHeight: f } = ss(u), p = 500, _ = (n - t) / (p - 1), m = Array.from({
          length: p
        }, (y, x) => t + x * _), b = new Array(p).fill(f / 2), h = [
          {
            type: "scatter",
            mode: "lines",
            x: m,
            y: b,
            opacity: 0,
            showlegend: false,
            hoverinfo: "x",
            name: ""
          }
        ];
        return e.forEach((y, x) => {
          var _a;
          const g = y.bins ?? [], k = ie(x), L = d[x], { primaryRows: R, primaryIndices: D, expandedWidth: te } = u[x], be = ((_a = y.bit_range) == null ? void 0 : _a[0]) ?? 0, he = n - t, ze = he > 0 ? te / he * 700 : 0, je = f > 0 ? (1 - 2 * 0.05) / f * 400 : 0, $ = Math.min(ze, je), De = Math.max(5, Math.floor($ / 2)), He = $ >= 9;
          g.forEach((v, I) => {
            const N = Math.max(v.lower, t), F = Math.min(typeof v.upper == "number" ? v.upper : v.lower + te, n);
            if (N >= F) return;
            const ne = R[D[I]], oe = v.is_congruent ?? false;
            let H;
            if (a !== null) {
              const V = be + D[I], ut = V < a.length && a[V] === 1;
              H = oe ? ut ? 0.5 : 0.12 : ut ? 0.95 : 0.3;
            } else H = oe ? 0.25 : 0.8;
            c.push({
              type: "rect",
              x0: N,
              x1: F,
              y0: L + ne * 1 + 0.05,
              y1: L + (ne + 1) * 1 - 0.05,
              fillcolor: k,
              line: {
                width: 1.5,
                color: "#000000"
              },
              opacity: H
            }), He && r.push({
              x: (N + F) / 2,
              y: L + ne * 1 + 1 * 0.5,
              xanchor: "center",
              yanchor: "middle",
              text: String(be + D[I]),
              showarrow: false,
              font: {
                size: De,
                color: oe ? "rgba(0,0,0,0.4)" : "#000000"
              },
              cliponaxis: true
            });
          }), x < e.length - 1 && c.push({
            type: "line",
            x0: t,
            x1: n,
            y0: L,
            y1: L,
            line: {
              color: "#333333",
              width: 1.5
            }
          });
        }), {
          traces: h,
          layoutPatch: {
            xaxis: A("Scalar Bin Intervals", [
              t,
              n
            ]),
            yaxis: {
              ...A("Encoder"),
              showticklabels: false,
              range: [
                0,
                f
              ]
            },
            shapes: c,
            annotations: r
          }
        };
      }
      function rs(e) {
        const t = e[0], n = e[e.length - 1], o = n - t, s = [], a = [], i = [];
        for (let l = 0; l < e.length - 1; l++) {
          const c = (e[l] + e[l + 1]) / 2, r = e[l + 1] - e[l];
          s.push(c), a.push(r);
          const u = Math.round(o / r);
          i.push(u > 1 ? `1/${u}` : "1");
        }
        return {
          traces: [
            {
              type: "bar",
              x: s,
              y: a,
              text: i,
              textposition: "inside",
              marker: {
                color: "#4a90d9",
                line: {
                  color: "#000",
                  width: 1
                }
              },
              width: a
            }
          ],
          layoutPatch: {
            xaxis: A("Scalar Value", [
              t,
              n
            ]),
            yaxis: A("Interval Width"),
            bargap: 0
          }
        };
      }
      function kt(e, t = 1) {
        const n = Math.max(2, Math.min(20, e)), o = Math.max(1, Math.floor(n / 2)), s = document.createElement("div");
        s.className = "enc-row";
        const a = document.createElement("div");
        a.className = "n-slider-col";
        const i = document.createElement("div");
        i.className = "n-slider-row";
        const l = document.createElement("span");
        l.className = "enc-slider-label", l.textContent = "n";
        const c = document.createElement("input");
        c.type = "range", c.className = "enc-n", c.min = "2", c.max = "20", c.step = "1", c.value = String(n);
        const r = document.createElement("span");
        r.className = "enc-n-val", r.textContent = String(n);
        const u = document.createElement("button");
        u.className = "enc-remove", u.textContent = "\xD7", u.title = "Remove this encoder", i.append(l, c, r, u);
        const d = document.createElement("div");
        d.className = "n-tick-row", [
          "2",
          "8",
          "14",
          "20"
        ].forEach((g) => {
          const k = document.createElement("span");
          k.textContent = g, d.appendChild(k);
        });
        const f = document.createElement("div");
        f.className = "enc-w-divider";
        const p = document.createElement("div");
        p.className = "n-slider-row";
        const _ = document.createElement("span");
        _.className = "enc-slider-label", _.textContent = "w";
        const m = document.createElement("input");
        m.type = "range", m.className = "enc-w", m.min = "1", m.max = String(o), m.step = "1";
        const b = Math.max(1, Math.min(o, t));
        m.value = String(b);
        const h = document.createElement("span");
        h.className = "enc-n-val", h.textContent = String(b), m.addEventListener("input", () => {
          h.textContent = m.value;
        }), p.append(_, m, h);
        const y = document.createElement("div");
        y.className = "n-tick-row";
        function x(g) {
          y.innerHTML = Array.from({
            length: g
          }, (k, L) => `<span>${L + 1}</span>`).join("");
        }
        return x(o), c.addEventListener("input", () => {
          r.textContent = c.value;
          const g = Math.max(1, Math.floor(parseInt(c.value, 10) / 2));
          m.max = String(g), h.textContent = m.value, x(g);
        }), a.append(i, d, f, p, y), s.appendChild(a), s;
      }
      function et(e, t) {
        e.innerHTML = "", (t.length > 0 ? t : [
          {
            n: 5
          }
        ]).forEach((n) => e.appendChild(kt(n.n, n.w ?? 1))), tt(e);
      }
      function tt(e) {
        const t = e.querySelectorAll(".enc-row");
        t.forEach((n, o) => {
          const s = n.querySelector(".enc-remove");
          s.style.visibility = t.length > 1 ? "visible" : "hidden";
          const a = ie(o);
          n.style.background = Xe(a, 1), n.style.borderColor = Xe("#000", 1);
        });
      }
      function Te(e) {
        try {
          const t = e.querySelectorAll(".enc-row"), n = Array.from(t).map((o) => {
            var _a, _b;
            return {
              n: parseInt(((_a = o.querySelector(".enc-n")) == null ? void 0 : _a.value) ?? "0", 10),
              w: parseInt(((_b = o.querySelector(".enc-w")) == null ? void 0 : _b.value) ?? "1", 10)
            };
          });
          return n.length === 0 || n.some((o) => isNaN(o.n) || o.n < 1) ? null : n;
        } catch {
          return null;
        }
      }
      let ce = [], Ge = [];
      function as(e, t) {
        t.innerHTML = "", ce = [], Ge = [];
        const n = new Array(e.n_bits).fill("#4a90d9");
        e.sub_encoders.forEach((o, s) => {
          var _a;
          const a = ((_a = o.bit_range) == null ? void 0 : _a[0]) ?? 0, i = o.n_bits ?? 0, l = ie(s);
          for (let c = 0; c < i; c++) n[a + c] = l;
        });
        for (let o = 0; o < e.n_bits; o++) {
          const s = String(o).length;
          let a = 10;
          switch (s) {
            case 1:
              a = 22;
              break;
            case 2:
              a = 19;
              break;
            case 3:
              a = 14;
              break;
            default:
              a = 10;
              break;
          }
          const i = document.createElement("div");
          i.style.cssText = [
            "width:32px",
            "height:32px",
            "background:#ccc",
            "border:3px solid #000",
            "display:flex",
            "align-items:center",
            "justify-content:center",
            `font-size:${a}px`,
            "font-family:monospace",
            "font-weight:bold",
            "color:#333",
            "flex-shrink:0",
            "box-sizing:border-box"
          ].join(";"), i.textContent = String(o), i.title = `bit ${o}`, t.appendChild(i), ce.push(i), Ge.push(n[o]);
        }
        t.style.display = "flex";
      }
      function Ct(e, t) {
        if (ce.length === 0 || !isFinite(t)) return;
        const n = K(e.boundaries, t), o = e.codes[n];
        !o || o.length !== ce.length || o.forEach((s, a) => {
          const i = ce[a];
          s === 1 ? (i.style.background = Ge[a], i.style.color = "#fff") : (i.style.background = "#fff", i.style.color = "#333");
        });
      }
      const ke = "rgba(0,0,0,0.75)";
      function cs(e, t) {
        const n = {
          type: "scatter",
          mode: "lines",
          line: {
            color: ke,
            width: 1.5,
            dash: "dot"
          },
          fill: "tozeroy",
          fillcolor: "rgba(0,0,0,0.18)",
          hoverinfo: "name+y"
        };
        if (!isFinite(t)) return {
          ...n,
          x: [],
          y: [],
          name: ""
        };
        const { boundaries: o, codes: s } = e, a = o[0], i = o[o.length - 1], l = Math.max(500, o.length * 10), c = Array.from({
          length: l
        }, (p, _) => a + (i - a) * _ / (l - 1)), r = K(o, t), u = s[r], d = St(s, u), f = c.map((p) => d[K(o, p)]);
        return {
          ...n,
          name: `x=${t.toFixed(3)}`,
          x: c,
          y: f
        };
      }
      const Ce = /* @__PURE__ */ new Map();
      function Z(e, t, n) {
        Ce.set(e, {
          renderStatic: t,
          renderDynamic: n ?? (() => ({
            traces: []
          }))
        });
      }
      const Ye = (e) => ({
        lo: Math.min(...e.sub_encoders.map((t) => t.view_lower_bound ?? t.lower_bound ?? e.boundaries[0])),
        hi: Math.max(...e.sub_encoders.map((t) => t.view_upper_bound ?? t.upper_bound ?? e.boundaries[e.boundaries.length - 1]))
      });
      Z("bins", (e, t) => {
        const n = t.params ?? {}, { lo: o, hi: s } = Ye(e), a = n.lo ?? o, i = n.hi ?? s;
        return Se(e.sub_encoders, a, i, n.folded ?? false, n.w ?? 1);
      });
      Z("similarity", (e, t) => {
        const n = t.params ?? {};
        return ts(e.boundaries, e.codes, n.refPoints ?? [], n.colors ?? Ue);
      }, (e, t, n) => ({
        traces: [
          cs(e, n)
        ]
      }));
      Z("bits-by-data", (e, t) => {
        const n = t.params ?? {};
        return es(e.codes, e.boundaries, e.n_bits, n.gap ?? 0);
      });
      Z("projected-similarity", (e, t) => {
        const n = t.params ?? {};
        return Zo(e.boundaries, e.similarity, n.gap ?? 0, n.showText ?? false);
      });
      Z("decomposition", (e) => rs(e.boundaries));
      Z("delta-count", (e) => ns(e.boundaries, e.deltas));
      function Bt(e, t, n = {}) {
        const o = n.folded ?? false, s = n.w ?? 1, a = n.xWindow, i = Math.min(...t.sub_encoders.map((r) => r.view_lower_bound ?? r.lower_bound ?? t.boundaries[0])), l = Math.max(...t.sub_encoders.map((r) => r.view_upper_bound ?? r.upper_bound ?? t.boundaries[t.boundaries.length - 1])), c = (r) => ({
          xaxis: {
            title: {
              text: r,
              font: {
                color: P
              }
            },
            range: a ?? [
              i,
              l
            ]
          }
        });
        switch (e) {
          case "bins-only":
            return {
              specs: [
                {
                  id: "bins",
                  type: "bins",
                  heightFrac: 0.6,
                  xAxis: "shared",
                  params: {
                    folded: o,
                    w: s,
                    lo: i,
                    hi: l
                  }
                },
                {
                  id: "similarity",
                  type: "similarity",
                  heightFrac: 0.4,
                  xAxis: "shared",
                  params: {
                    refPoints: n.refPoints ?? []
                  }
                }
              ],
              overrides: c("Encoded Scalar Input Value")
            };
          default:
            return Bt("bins-only", t, n);
        }
      }
      function is(e, t = false, n = 0.04) {
        const o = e.length, s = e.reduce((c, r) => c + r, 0), a = {
          ...Qo(),
          margin: {
            t: 20,
            b: 70,
            l: 55,
            r: 55
          },
          grid: {
            rows: o,
            columns: 1,
            pattern: t ? "coupled" : "independent",
            roworder: "top to bottom",
            rowheights: e.map((c) => c / s),
            ygap: n
          }
        };
        for (let c = 0; c < o; c++) {
          const r = c === 0 ? "" : String(c + 1);
          a[`yaxis${r}`] = {
            color: P,
            gridcolor: "#2a3a6e",
            showticklabels: false,
            ticks: ""
          };
        }
        const i = [];
        for (let c = 0; c < o; c++) {
          const r = c === 0 ? "y" : `y${c + 1}`, u = o + 1 + c;
          a[`yaxis${u}`] = {
            overlaying: r,
            side: "right",
            color: P,
            tickfont: {
              color: P
            },
            showticklabels: true,
            showgrid: false,
            zeroline: false,
            showline: false,
            automargin: true,
            tickformat: ".2~f"
          };
          const d = t || c === 0 ? "" : String(c + 1);
          i.push({
            type: "scatter",
            x: [
              null
            ],
            y: [
              null
            ],
            xaxis: `x${d}`,
            yaxis: `y${u}`,
            mode: "markers",
            marker: {
              size: 0
            },
            hoverinfo: "none",
            showlegend: false
          });
        }
        if (t) return a.hovermode = "x", a.hoversubplots = "axis", a.spikedistance = -1, a.xaxis = {
          color: P,
          gridcolor: "#2a3a6e",
          tickfont: {
            color: P
          },
          showticklabels: true,
          showline: false,
          showgrid: true,
          showspikes: true,
          spikemode: "across",
          spikesnap: "cursor",
          spikecolor: "#8899bb",
          spikethickness: 1,
          spikedash: "dot"
        }, {
          layout: a,
          baseTraces: i,
          bottomAxis: "xaxis"
        };
        const l = o <= 1 ? "xaxis" : `xaxis${o}`;
        for (let c = 0; c < o; c++) {
          const r = c === 0 ? "" : String(c + 1);
          a[`xaxis${r}`] = {
            color: P,
            gridcolor: "#2a3a6e",
            tickfont: {
              color: P
            }
          };
        }
        return {
          layout: a,
          baseTraces: i,
          bottomAxis: l
        };
      }
      function pt(e, t, n = false) {
        const o = n || t === 0 ? "" : String(t + 1), s = t === 0 ? "" : String(t + 1);
        return e.map((a) => ({
          ...a,
          xaxis: `x${o}`,
          yaxis: `y${s}`
        }));
      }
      function ls(e, t, n, o = false) {
        if (!t) return;
        const s = o || n === 0 ? "" : String(n + 1), a = n === 0 ? "" : String(n + 1), i = `x${s}`, l = `y${a}`;
        if (t.xaxis && Object.assign(e[`xaxis${s}`], t.xaxis), t.yaxis && Object.assign(e[`yaxis${a}`], t.yaxis), t.shapes) {
          const c = t.shapes.map((r) => ({
            ...r,
            xref: r.xref === "paper" ? "paper" : i,
            yref: r.yref === "paper" ? "paper" : l
          }));
          e.shapes = [
            ...e.shapes ?? [],
            ...c
          ];
        }
        if (t.annotations) {
          const c = t.annotations.map((r) => ({
            ...r,
            xref: r.xref === "paper" ? "paper" : i,
            yref: r.yref === "paper" ? "paper" : l
          }));
          e.annotations = [
            ...e.annotations ?? [],
            ...c
          ];
        }
        t.bargap !== void 0 && (e.bargap = t.bargap);
      }
      class ds {
        constructor(t) {
          __publicField(this, "containerId");
          __publicField(this, "specs", []);
          __publicField(this, "data", null);
          __publicField(this, "sharedX", false);
          __publicField(this, "dynamicGroups", []);
          __publicField(this, "staticShapes", []);
          __publicField(this, "xAxisRange", null);
          __publicField(this, "shapeRanges", []);
          __publicField(this, "lastScalar", NaN);
          __publicField(this, "animating", false);
          this.containerId = t;
        }
        getXAxisRange() {
          return this.xAxisRange;
        }
        compose(t, n, o) {
          var _a;
          this.specs = t, this.data = n, this.dynamicGroups = [], this.sharedX = t.length > 0 && t.every((c) => c.xAxis === "shared");
          const { layout: s, baseTraces: a } = is(t.map((c) => c.heightFrac), this.sharedX), i = [
            ...a
          ];
          if (this.shapeRanges = [], t.forEach((c, r) => {
            var _a2, _b, _c;
            const u = ((_a2 = s.shapes) == null ? void 0 : _a2.length) ?? 0, d = Ce.get(c.type);
            if (!d) {
              console.warn(`No renderer for subplot type: ${c.type}`), this.shapeRanges.push({
                start: u,
                count: 0
              });
              return;
            }
            const f = d.renderStatic(n, c);
            i.push(...pt(f.traces, r, this.sharedX)), ls(s, f.layoutPatch, r, this.sharedX), this.shapeRanges.push({
              start: u,
              count: (((_b = s.shapes) == null ? void 0 : _b.length) ?? 0) - u
            });
            {
              const p = r === 0 ? "" : String(r + 1), _ = s[`yaxis${p}`], m = `yaxis${t.length + 1 + r}`, b = s[m];
              if (b && _) if (_.range) b.range = [
                ..._.range
              ], b.autorange = false;
              else {
                let h = 1 / 0, y = -1 / 0;
                f.traces.forEach((x) => {
                  (x.y ?? []).forEach((g) => {
                    typeof g == "number" && isFinite(g) && (g < h && (h = g), g > y && (y = g));
                  });
                }), isFinite(h) && isFinite(y) && (b.range = [
                  h,
                  y
                ], b.autorange = false);
              }
            }
            if (c.color) {
              const p = r === 0 ? "" : String(r + 1), _ = s[`yaxis${p}`];
              ((_c = _ == null ? void 0 : _.title) == null ? void 0 : _c.font) ? (_.title.font.color = c.color, _.title.font.size = 12, _.title.font.textcase = "upper", _.title.font.weight = 1e3, _.automargin = true) : (_ == null ? void 0 : _.title) && (_.title.font = {
                color: c.color
              });
            }
          }), t.forEach((c, r) => {
            const u = Ce.get(c.type);
            if (!u) return;
            const d = u.renderDynamic(n, c, NaN), f = pt(d.traces, r, this.sharedX);
            if (f.length > 0) {
              const p = i.length;
              this.dynamicGroups.push({
                specIdx: r,
                rowIdx: r,
                traceIndices: f.map((_, m) => p + m)
              }), i.push(...f);
            }
          }), o) for (const [c, r] of Object.entries(o)) Array.isArray(r) ? s[c] = Array.isArray(s[c]) ? [
            ...s[c],
            ...r
          ] : r : r != null && typeof r == "object" && s[c] && typeof s[c] == "object" ? Object.assign(s[c], r) : s[c] = r;
          this.staticShapes = [
            ...s.shapes ?? []
          ];
          const l = (_a = s.xaxis) == null ? void 0 : _a.range;
          return this.xAxisRange = Array.isArray(l) && l.length === 2 ? [
            l[0],
            l[1]
          ] : null, this.sharedX && (s.shapes = [
            ...this.staticShapes,
            {
              type: "line",
              x0: null,
              x1: null,
              y0: 0,
              y1: 1,
              xref: "x",
              yref: "paper",
              line: {
                color: ke,
                width: 1.5,
                dash: "dot"
              }
            }
          ]), s.showlegend = false, Plotly.react(this.containerId, i, s, {
            responsive: true
          }), this;
        }
        updateScalar(t) {
          if (this.lastScalar = t, !!this.data) {
            if (this.dynamicGroups.length > 0) {
              const n = [], o = [], s = [];
              this.dynamicGroups.forEach((a) => {
                const i = this.specs[a.specIdx], l = Ce.get(i.type);
                if (!l) return;
                l.renderDynamic(this.data, i, t).traces.forEach((r, u) => {
                  const d = a.traceIndices[u];
                  d !== void 0 && (n.push(r.x ?? []), o.push(r.y ?? []), s.push(d));
                });
              }), s.length > 0 && Plotly.restyle(this.containerId, {
                x: n,
                y: o
              }, s);
            }
            if (this.sharedX && isFinite(t) && !this.animating) {
              const n = [
                ...this.staticShapes
              ];
              this.specs.forEach((o, s) => {
                var _a;
                if (o.type !== "bins") return;
                const a = this.shapeRanges[s];
                if (!a || a.count === 0) return;
                const i = o.params ?? {}, { lo: l, hi: c } = Ye(this.data), r = i.lo ?? l, u = i.hi ?? c, d = K(this.data.boundaries, t), f = this.data.codes[d] ?? null, _ = ((_a = Se(this.data.sub_encoders, r, u, i.folded ?? false, i.w ?? 1, f).layoutPatch) == null ? void 0 : _a.shapes) ?? [], m = this.sharedX || s === 0 ? "" : String(s + 1), b = s === 0 ? "" : String(s + 1), h = `x${m}`, y = `y${b}`, x = _.map((g) => ({
                  ...g,
                  xref: g.xref === "paper" ? "paper" : h,
                  yref: g.yref === "paper" ? "paper" : y
                }));
                n.splice(a.start, a.count, ...x);
              }), Plotly.relayout(this.containerId, {
                shapes: [
                  ...n,
                  {
                    type: "line",
                    x0: t,
                    x1: t,
                    y0: 0,
                    y1: 1,
                    xref: "x",
                    yref: "paper",
                    line: {
                      color: ke,
                      width: 1.5,
                      dash: "dot"
                    }
                  }
                ]
              });
            }
          }
        }
        async animateBinsFold(t, n = 280) {
          var _a, _b, _c, _d, _e2, _f, _g, _h;
          const o = this.specs.findIndex((v) => v.type === "bins");
          if (o === -1 || !this.data || this.animating) return;
          const a = this.specs[o].params ?? {}, i = a.folded ?? false;
          if (i === t) return;
          const { lo: l, hi: c } = Ye(this.data), r = a.lo ?? l, u = a.hi ?? c, d = a.w ?? 1, f = Se(this.data.sub_encoders, r, u, i, d), p = Se(this.data.sub_encoders, r, u, t, d), _ = ((_a = f.layoutPatch) == null ? void 0 : _a.shapes) ?? [], m = ((_b = p.layoutPatch) == null ? void 0 : _b.shapes) ?? [], b = this.shapeRanges[o] ?? {
            start: 0,
            count: _.length
          };
          if (_.length !== m.length || b.count !== _.length) return;
          const h = this.sharedX || o === 0 ? "" : String(o + 1), y = o === 0 ? "" : String(o + 1), x = `x${h}`, g = `y${y}`, k = (v) => v.map((I) => ({
            ...I,
            xref: I.xref === "paper" ? "paper" : x,
            yref: I.yref === "paper" ? "paper" : g
          })), L = k(_), R = k(m), D = ((_e2 = (_d = (_c = f.layoutPatch) == null ? void 0 : _c.yaxis) == null ? void 0 : _d.range) == null ? void 0 : _e2[1]) ?? 1, te = ((_h = (_g = (_f = p.layoutPatch) == null ? void 0 : _f.yaxis) == null ? void 0 : _g.range) == null ? void 0 : _h[1]) ?? 1, be = this.staticShapes.slice(0, b.start), he = this.staticShapes.slice(b.start + b.count), ze = `yaxis${y}.range`, je = `yaxis${this.specs.length + 1 + o}.range`, $ = (v, I, N) => v + (I - v) * N, De = (v) => v < 0.5 ? 2 * v * v : -1 + (4 - 2 * v) * v;
          this.animating = true;
          const He = performance.now();
          return new Promise((v) => {
            const I = () => {
              const N = Math.min(1, (performance.now() - He) / n), F = De(N), ne = L.map((H, V) => ({
                ...R[V],
                y0: $(H.y0, R[V].y0, F),
                y1: $(H.y1, R[V].y1, F)
              })), oe = this.sharedX && isFinite(this.lastScalar) ? [
                {
                  type: "line",
                  x0: this.lastScalar,
                  x1: this.lastScalar,
                  y0: 0,
                  y1: 1,
                  xref: "x",
                  yref: "paper",
                  line: {
                    color: ke,
                    width: 1.5,
                    dash: "dot"
                  }
                }
              ] : [];
              Plotly.relayout(this.containerId, {
                [ze]: [
                  0,
                  $(D, te, F)
                ],
                [je]: [
                  0,
                  $(D, te, F)
                ],
                annotations: [],
                shapes: [
                  ...be,
                  ...ne,
                  ...he,
                  ...oe
                ]
              }), N < 1 ? requestAnimationFrame(I) : (this.animating = false, v());
            };
            requestAnimationFrame(I);
          });
        }
      }
      const ee = document.getElementById("encoder-type"), O = document.getElementById("view-select"), B = document.getElementById("encoder-list"), us = document.getElementById("enc-add"), _t = document.getElementById("w-slider"), fs = document.getElementById("w-val"), pe = document.getElementById("period-input"), _e = document.getElementById("bounds-input"), nt = document.getElementById("ref-points"), Y = document.getElementById("ref-point-popup"), W = document.getElementById("ref-point-popup-slider"), ps = document.getElementById("ref-point-popup-lo"), _s = document.getElementById("ref-point-popup-hi"), Pt = document.getElementById("ref-point-popup-valtext"), ms = document.getElementById("ref-point-popup-add"), gs = document.getElementById("ref-point-popup-cancel"), bs = document.getElementById("periodic-controls"), hs = document.getElementById("weight-control"), ws = document.getElementById("fixed-controls"), me = document.getElementById("view-bounds-input"), X = document.getElementById("show-regions"), G = document.getElementById("show-counts"), ys = document.getElementById("metrics"), Je = document.getElementById("error-banner"), ye = document.getElementById("loading"), M = document.getElementById("folded-bins"), Ne = document.getElementById("x-window"), Be = document.getElementById("scalar-row"), C = document.getElementById("scalar-slider"), mt = document.getElementById("scalar-slider-wrap"), ot = document.getElementById("scalar-val"), xs = document.getElementById("scalar-val-gutter"), vs = document.getElementById("scalar-right-pad"), Ke = document.getElementById("scalar-bits-panel"), qe = document.getElementById("subplot-panel"), xe = document.getElementById("subplot-chips");
      function Rt() {
        try {
          const e = _e.value.split(",").map((t) => parseFloat(t.trim()));
          return e.length !== 2 || e.some(isNaN) || e[0] >= e[1] ? null : [
            e[0],
            e[1]
          ];
        } catch {
          return null;
        }
      }
      function Es() {
        try {
          const e = me.value.split(",").map((t) => parseFloat(t.trim()));
          if (e.length === 2 && !e.some(isNaN) && e[0] < e[1]) return [
            e[0],
            e[1]
          ];
        } catch {
        }
        return [
          -1,
          2
        ];
      }
      function Ss() {
        try {
          const e = Ne.value.trim();
          if (!e) return;
          const t = e.split(",").map((n) => parseFloat(n.trim()));
          return t.length !== 2 || t.some(isNaN) || t[0] >= t[1] ? void 0 : [
            t[0],
            t[1]
          ];
        } catch {
          return;
        }
      }
      function Q() {
        try {
          return nt.value.split(",").map((e) => parseFloat(e.trim())).filter((e) => !isNaN(e));
        } catch {
          return [];
        }
      }
      function Fe(e) {
        nt.value = e.join(","), ge();
      }
      function gt(e) {
        Je.textContent = e, Je.style.display = "block";
      }
      function ks() {
        Je.style.display = "none";
      }
      const Me = /* @__PURE__ */ new Set([
        "bins-only"
      ]);
      let T = null, j = null, E = [], Qe = {}, bt = "", Pe = [
        "bins",
        "similarity",
        "bits-by-data",
        "projected-similarity",
        "decomposition",
        "delta-count"
      ];
      function st() {
        const e = new Map(E.map((t) => [
          t.type,
          t
        ]));
        E = Pe.filter((t) => e.has(t)).map((t) => e.get(t));
      }
      let se = null;
      function Cs(e) {
        let t, n;
        ee.value === "periodic" ? [t, n] = Rt() ?? [
          e.boundaries[0],
          e.boundaries[e.boundaries.length - 1]
        ] : (t = e.boundaries[0], n = e.boundaries[e.boundaries.length - 1]);
        const o = (n - t) / 1e3;
        C.min = String(t), C.max = String(n), C.step = String(o);
        const s = parseFloat(C.value);
        (isNaN(s) || s < t || s > n) && (C.value = String((t + n) / 2)), ot.textContent = parseFloat(C.value).toFixed(3);
      }
      function Bs() {
        const e = parseFloat(C.value);
        ot.textContent = e.toFixed(3), T && T.updateScalar(e), j && Ct(j, e);
      }
      let rt = 0, at = 1;
      function ct() {
        var _a;
        if (Be.style.display === "none") return;
        const e = T == null ? void 0 : T.getXAxisRange();
        if (!e) return;
        const t = document.getElementById("plot-container"), n = (_a = t._fullLayout) == null ? void 0 : _a.xaxis;
        if ((n == null ? void 0 : n._offset) == null || !(n == null ? void 0 : n._length)) return;
        const o = t.getBoundingClientRect(), s = Be.getBoundingClientRect(), i = o.left - s.left + n._offset, l = n._length, [c, r] = e, u = r - c;
        if (u <= 0 || l <= 0) return;
        const d = i + (rt - c) / u * l, f = i + (at - c) / u * l, p = 12;
        xs.style.width = `${d}px`, mt.style.flex = "none", mt.style.width = `${f - d + 2 * p}px`, vs.style.width = `${Be.clientWidth - f - p}px`;
      }
      let ht = false;
      function It() {
        var _a, _b;
        if (ht) return;
        (_b = (_a = document.getElementById("plot-container")).on) == null ? void 0 : _b.call(_a, "plotly_afterplot", () => {
          Me.has(O.value) && ct();
        }), ht = true;
      }
      const Ps = {
        bins: "Bins",
        similarity: "Input Sim.",
        "bits-by-data": "Codes",
        "projected-similarity": "Self-Sim.",
        decomposition: "Regions",
        "delta-count": "\u0394Count"
      }, Rs = {
        bins: "\u25A4",
        similarity: "\u25E7",
        "bits-by-data": "\u25A6",
        "projected-similarity": "\u25EB",
        decomposition: "\u25A3",
        "delta-count": "\u25B3"
      }, Is = "#cccccc", As = 0, Ls = 0.3;
      function wt(e) {
        const t = parseInt(e.slice(1), 16);
        return [
          t >> 16 & 255,
          t >> 8 & 255,
          t & 255
        ];
      }
      function yt(e, t, n) {
        const [o, s, a] = wt(e), [i, l, c] = wt(t), r = (p) => Math.max(0, Math.min(255, Math.round(p))), u = r(o + (i - o) * n), d = r(s + (l - s) * n), f = r(a + (c - a) * n);
        return `#${u.toString(16).padStart(2, "0")}${d.toString(16).padStart(2, "0")}${f.toString(16).padStart(2, "0")}`;
      }
      function U(e, t) {
        return {
          bg: e,
          border: t,
          mutedBg: yt(Is, e, As),
          titleColor: yt(e, "#000000", Ls)
        };
      }
      const it = {
        bins: U("#a8c8e8", "#6898c0"),
        similarity: U("#a8d8b4", "#5a9e72"),
        "bits-by-data": U("#c8b8e8", "#8868c0"),
        "projected-similarity": U("#e8d0a8", "#b89060"),
        decomposition: U("#e8a8a8", "#c06060"),
        "delta-count": U("#a8e0e8", "#50a0b0")
      };
      function Ts(e) {
        return Ps[e] ?? e;
      }
      function lt(e, t) {
        var _a, _b;
        const n = Math.min(...t.sub_encoders.map((r) => r.view_lower_bound ?? r.lower_bound ?? t.boundaries[0])), o = Math.max(...t.sub_encoders.map((r) => r.view_upper_bound ?? r.upper_bound ?? t.boundaries[t.boundaries.length - 1])), s = Q(), a = (M == null ? void 0 : M.checked) ?? false, i = ((_b = (_a = Te(B)) == null ? void 0 : _a[0]) == null ? void 0 : _b.w) ?? 1, l = X.checked ? 1 : 0, c = G.checked;
        switch (e) {
          case "bins":
            return {
              folded: a,
              w: i,
              lo: n,
              hi: o
            };
          case "similarity":
            return {
              refPoints: s
            };
          case "bits-by-data":
            return {
              gap: l
            };
          case "projected-similarity":
            return {
              gap: l,
              showText: c
            };
          default:
            return {};
        }
      }
      function ge() {
        if (qe) {
          if (E.length === 0) {
            qe.style.display = "none";
            return;
          }
          qe.style.display = "flex", xe.innerHTML = "", Pe.forEach((e, t) => {
            const n = E.some((r) => r.type === e), o = n && E.length === 1, s = document.createElement("div");
            s.className = "subplot-chip" + (n ? "" : " chip-disabled"), s.draggable = true;
            const a = it[e];
            a && (s.style.background = n ? a.bg : a.mutedBg), s.addEventListener("click", (r) => {
              r.target.closest("button") || (n ? o || xt(e, "off") : xt(e, "on"));
            }), s.addEventListener("dragstart", (r) => {
              se = t, s.style.opacity = "0.45", r.dataTransfer.effectAllowed = "move", r.dataTransfer.setData("text/plain", String(t));
            }), s.addEventListener("dragend", () => {
              s.style.opacity = "1", xe.querySelectorAll(".subplot-chip").forEach((r) => r.classList.remove("drag-over"));
            }), s.addEventListener("dragover", (r) => {
              r.preventDefault(), r.dataTransfer.dropEffect = "move", s.classList.add("drag-over");
            }), s.addEventListener("dragleave", (r) => {
              s.contains(r.relatedTarget) || s.classList.remove("drag-over");
            }), s.addEventListener("drop", (r) => {
              if (r.preventDefault(), s.classList.remove("drag-over"), se === null || se === t) return;
              const u = [
                ...Pe
              ], [d] = u.splice(se, 1);
              u.splice(t, 0, d), Pe = u, se = null, st(), ge(), Ae();
            });
            const i = document.createElement("div");
            i.className = "chip-top-row";
            const l = document.createElement("span");
            l.className = "subplot-chip-icon", l.textContent = Rs[e] ?? "";
            const c = document.createElement("span");
            if (c.className = "subplot-chip-label", c.textContent = Ts(e), i.append(l, c), s.appendChild(i), !n) {
              xe.appendChild(s);
              return;
            }
            if (e === "bins") {
              const r = document.createElement("div");
              r.className = "chip-controls", r.addEventListener("dragstart", (f) => f.stopPropagation());
              const u = (M == null ? void 0 : M.checked) ?? false, d = document.createElement("button");
              d.className = "chip-toggle-btn" + (u ? " active" : ""), d.textContent = u ? "\u229E Collapse" : "\u22A1 Collapse", d.title = "Toggle folded bin layout", d.onclick = async (f) => {
                f.stopPropagation();
                const p = !((M == null ? void 0 : M.checked) ?? false);
                M && (M.checked = p), d.className = "chip-toggle-btn" + (p ? " active" : ""), d.textContent = p ? "\u229E Collapse" : "\u22A1 Collapse", T && await T.animateBinsFold(p), Ae();
              }, r.appendChild(d), s.appendChild(r);
            }
            if (e === "projected-similarity" || e === "bits-by-data") {
              const r = document.createElement("div");
              r.className = "chip-controls", r.addEventListener("dragstart", (f) => f.stopPropagation());
              const u = (X == null ? void 0 : X.checked) ?? false, d = document.createElement("button");
              if (d.className = "chip-toggle-btn" + (u ? " active" : ""), d.textContent = "\u2261 Gaps", d.title = "Show region gap separators", d.onclick = (f) => {
                f.stopPropagation(), X && (X.checked = !X.checked), S();
              }, r.appendChild(d), e === "projected-similarity") {
                const f = (G == null ? void 0 : G.checked) ?? false, p = document.createElement("button");
                p.className = "chip-toggle-btn" + (f ? " active" : ""), p.textContent = "# Counts", p.title = "Show count labels", p.onclick = (_) => {
                  _.stopPropagation(), G && (G.checked = !G.checked), S();
                }, r.appendChild(p);
              }
              s.appendChild(r);
            }
            if (e === "similarity") {
              const r = document.createElement("div");
              r.className = "chip-controls chip-ref-controls", r.addEventListener("dragstart", (d) => d.stopPropagation());
              const u = Q();
              if (u.forEach((d, f) => {
                const p = Ue[f % Ue.length], _ = document.createElement("div");
                _.className = "ref-point-chip", _.style.borderColor = p;
                const m = document.createElement("span");
                m.className = "ref-point-swatch", m.style.background = p;
                const b = document.createElement("span");
                b.className = "ref-point-chip-label", b.textContent = String(d);
                const h = document.createElement("button");
                h.className = "ref-point-chip-remove", h.textContent = "\xD7", h.title = "Remove", h.onclick = (y) => {
                  y.stopPropagation();
                  const x = Q().filter((g, k) => k !== f);
                  Fe(x), S();
                }, _.append(m, b, h), r.appendChild(_);
              }), u.length < 4) {
                const d = document.createElement("button");
                d.className = "ref-point-open-btn", d.textContent = "+ Add Value", d.onclick = (f) => {
                  f.stopPropagation(), Y.style.display === "none" ? zs(d) : We();
                }, r.appendChild(d);
              }
              s.appendChild(r);
            }
            xe.appendChild(s);
          });
        }
      }
      function xt(e, t) {
        if (t === "on") Ns(e);
        else {
          if (E.length <= 1) return;
          E = E.filter((n) => n.type !== e), ge(), Ae();
        }
      }
      function Ns(e) {
        if (!j) return;
        const t = {
          id: `${e}-${Date.now()}`,
          type: e,
          heightFrac: 0.33,
          xAxis: "shared",
          params: lt(e, j)
        };
        E = [
          ...E,
          t
        ], st(), ge(), Ae();
      }
      function Ae() {
        if (!j || !T) return;
        const e = j;
        if (E = E.map((t) => {
          var _a;
          return {
            ...t,
            params: lt(t.type, e),
            color: (_a = it[t.type]) == null ? void 0 : _a.titleColor
          };
        }), T.compose(E, e, Qe), It(), Me.has(O.value)) {
          ct();
          const t = parseFloat(C.value);
          T.updateScalar(t);
        }
      }
      function Fs() {
        try {
          const e = Te(B), t = {
            encoderType: ee.value,
            ns: (e == null ? void 0 : e.map((n) => n.n).join(",")) ?? "",
            ws: (e == null ? void 0 : e.map((n) => n.w).join(",")) ?? "",
            period: pe.value,
            bounds: _e.value,
            viewBounds: me.value,
            refPoints: nt.value,
            view: O.value,
            xWindow: Ne.value,
            folded: M.checked,
            scalarCursor: C.value
          };
          window.location.hash = encodeURIComponent(JSON.stringify(t));
        } catch {
        }
      }
      function Ms() {
        try {
          if (!window.location.hash) return;
          const e = JSON.parse(decodeURIComponent(window.location.hash.slice(1)));
          if (e.encoderType && (ee.value = e.encoderType), e.ns) {
            const t = e.ns.split(",").map((o) => parseInt(o.trim(), 10)).filter((o) => !isNaN(o) && o >= 1), n = e.ws ? e.ws.split(",").map((o) => parseInt(o.trim(), 10)) : [];
            t.length > 0 && et(B, t.map((o, s) => ({
              n: o,
              w: n[s] ?? 1
            })));
          }
          e.period && (pe.value = e.period), e.bounds && (_e.value = e.bounds), e.refPoints && Fe(e.refPoints.split(",").map(Number).filter((t) => !isNaN(t))), e.view && (O.value = e.view), e.xWindow && (Ne.value = e.xWindow), e.folded !== void 0 && (M.checked = e.folded), e.scalarCursor && (C.value = e.scalarCursor, ot.textContent = parseFloat(e.scalarCursor).toFixed(3)), e.viewBounds && (me.value = e.viewBounds), $e();
        } catch {
        }
      }
      function Os() {
        const e = Te(B);
        if (!e) return gt("Invalid encoder configuration"), null;
        ks();
        try {
          const t = ee.value;
          return Go({
            encoderType: t,
            configs: e,
            period: parseFloat(pe.value),
            bounds: Rt() ?? void 0,
            viewBounds: Es()
          });
        } catch (t) {
          return gt(`WASM error: ${t}`), null;
        }
      }
      const At = "plot-container";
      function $s(e, t, n) {
        var _a;
        X.checked, G.checked;
        const o = (M == null ? void 0 : M.checked) ?? false, s = Ss(), a = Te(B), i = ((_a = a == null ? void 0 : a[0]) == null ? void 0 : _a.w) ?? 1, { specs: l, overrides: c } = Bt(t, e, {
          refPoints: n,
          folded: o,
          xWindow: s,
          w: i
        });
        Qe = c;
        const r = t !== bt || E.length === 0;
        bt = t, r ? (E = l, st()) : E = E.map((f) => ({
          ...f,
          params: lt(f.type, e)
        }));
        const u = Me.has(t);
        Be.style.display = u ? "flex" : "none", u ? Ke.style.display = "flex" : Ke.style.display = "none", ge(), E = E.map((f) => {
          var _a2;
          return {
            ...f,
            color: (_a2 = it[f.type]) == null ? void 0 : _a2.titleColor
          };
        });
        const d = new ds(At).compose(E, e, Qe);
        return It(), ys.textContent = `Bits: ${e.n_bits}  |  Regions: ${e.n_regions}  |  n: [${a == null ? void 0 : a.map((f) => f.n).join(", ")}]  |  w: [${a == null ? void 0 : a.map((f) => f.w).join(", ")}]`, d;
      }
      async function S() {
        ye && (ye.style.display = "flex"), await new Promise((t) => requestAnimationFrame(() => t()));
        const e = Os();
        if (ye && (ye.style.display = "none"), !!e) {
          if (j = e, T = $s(e, O.value, Q()), Me.has(O.value)) {
            Cs(e), rt = parseFloat(C.min), at = parseFloat(C.max), ct(), as(e, Ke);
            const t = parseFloat(C.value);
            T.updateScalar(t), Ct(e, t);
          }
          Fs();
        }
      }
      const Re = [
        {
          label: "FixedWeight: w=1, primes",
          encoderType: "fixed",
          ns: "2,3,5,7",
          w: 1,
          viewBounds: "-1.0,2.0",
          view: "bins-only"
        },
        {
          label: "FixedWeight: w=2, primes",
          encoderType: "fixed",
          ns: "5,7,11,13",
          w: 2,
          viewBounds: "-1.0,2.0",
          view: "bins-only"
        },
        {
          label: "FixedWeight: w=1, powers of 2",
          encoderType: "fixed",
          ns: "2,4,8,16",
          w: 1,
          viewBounds: "-1.0,2.0",
          view: "bins-only"
        },
        {
          label: "FixedWeight: w=2, powers of 2",
          encoderType: "fixed",
          ns: "2,4,8,16",
          w: 2,
          viewBounds: "-1.0,2.0",
          view: "bins-only"
        },
        {
          label: "TaperingWeight: w=2, primes",
          encoderType: "tapering",
          ns: "7,11,13,17",
          w: 2,
          viewBounds: "-1.0,2.0",
          view: "bins-only"
        },
        {
          label: "TaperingWeight: w=3, primes",
          encoderType: "tapering",
          ns: "7,11,13,17",
          w: 3,
          viewBounds: "-1.0,2.0",
          view: "bins-only"
        },
        {
          label: "TaperingWeight: w=2, powers of 2",
          encoderType: "tapering",
          ns: "4,8,16",
          w: 2,
          viewBounds: "-1.0,2.0",
          view: "bins-only"
        },
        {
          label: "TaperingWeight: w=3, powers of 2",
          encoderType: "tapering",
          ns: "7,11,13,17",
          w: 3,
          viewBounds: "-1.0,2.0",
          view: "bins-only"
        },
        {
          label: "Periodic: w=1, primes",
          encoderType: "periodic",
          ns: "5,7,11,13",
          w: 1,
          period: "1.0",
          bounds: "-1.0,2.0",
          view: "bins-only"
        },
        {
          label: "Periodic: w=2, primes",
          encoderType: "periodic",
          ns: "5,7,11,13",
          w: 2,
          period: "1.0",
          bounds: "-1.0,2.0",
          view: "bins-only"
        },
        {
          label: "Periodic: w=1, powers of 2",
          encoderType: "periodic",
          ns: "2,4,8,16",
          w: 1,
          period: "1.0",
          bounds: "-1.0,2.0",
          view: "bins-only"
        },
        {
          label: "Periodic: w=2, powers of 2",
          encoderType: "periodic",
          ns: "2,4,8,16",
          w: 2,
          period: "1.0",
          bounds: "-1.0,2.0",
          view: "bins-only"
        }
      ];
      function Lt(e) {
        ee.value = e.encoderType;
        const t = e.ns.split(",").map((n) => parseInt(n.trim(), 10)).filter((n) => !isNaN(n) && n >= 1);
        return et(B, t.map((n) => ({
          n,
          w: e.w
        }))), e.period && (pe.value = e.period), e.bounds && (_e.value = e.bounds), e.viewBounds && (me.value = e.viewBounds), O.value = e.view, $e(), S();
      }
      function Oe(e, t) {
        let n;
        return (...o) => {
          clearTimeout(n), n = setTimeout(() => e(...o), t);
        };
      }
      function $e() {
        bs.style.display = "none", ws.style.display = "none", hs.style.display = "none";
      }
      ee.addEventListener("change", () => {
        $e(), S();
      });
      _t.addEventListener("input", () => {
        fs.textContent = _t.value, S();
      });
      const Ws = Oe(S, 20);
      B.addEventListener("input", () => {
        Ws();
      });
      B.addEventListener("click", (e) => {
        const t = e.target.closest(".enc-remove");
        if (!t) return;
        const n = t.closest(".enc-row");
        n && B.querySelectorAll(".enc-row").length > 1 && (n.remove(), tt(B), S());
      });
      us.addEventListener("click", () => {
        var _a, _b;
        const e = B.querySelectorAll(".enc-row"), t = e[e.length - 1], n = t ? parseInt(((_a = t.querySelector(".enc-n")) == null ? void 0 : _a.value) ?? "13", 10) : 13, o = t ? parseInt(((_b = t.querySelector(".enc-w")) == null ? void 0 : _b.value) ?? "1", 10) : 1;
        B.appendChild(kt(n, o)), tt(B), S();
      });
      pe.addEventListener("input", Oe(S, 300));
      _e.addEventListener("input", Oe(S, 300));
      me.addEventListener("input", Oe(S, 300));
      let dt = null;
      function zs(e) {
        dt = e;
        const t = T == null ? void 0 : T.getXAxisRange(), n = t ? t[0] : rt, o = t ? t[1] : at, s = parseFloat(((n + o) / 2).toFixed(4)), a = parseFloat(((o - n) / 500).toPrecision(2));
        W.min = String(n), W.max = String(o), W.step = String(a), W.value = String(s), ps.textContent = n.toFixed(3), _s.textContent = o.toFixed(3), Pt.textContent = s.toFixed(4);
        const i = e.getBoundingClientRect(), l = Math.min(i.right + 8, window.innerWidth - 215), c = Math.max(0, Math.min(i.top, window.innerHeight - 180));
        Y.style.left = `${l}px`, Y.style.top = `${c}px`, Y.style.display = "block", setTimeout(() => document.addEventListener("click", Tt), 0);
      }
      function We() {
        Y.style.display = "none", dt = null, document.removeEventListener("click", Tt);
      }
      function Tt(e) {
        !Y.contains(e.target) && e.target !== dt && We();
      }
      W.addEventListener("input", () => {
        Pt.textContent = parseFloat(W.value).toFixed(4);
      });
      ms.addEventListener("click", () => {
        const e = parseFloat(W.value);
        if (!isNaN(e)) {
          const t = [
            ...Q(),
            e
          ].slice(-4);
          Fe(t), S();
        }
        We();
      });
      gs.addEventListener("click", () => We());
      O.addEventListener("change", S);
      Ne == null ? void 0 : Ne.addEventListener("input", S);
      C == null ? void 0 : C.addEventListener("input", Bs);
      const ve = document.getElementById("preset-select");
      ve && (Re.forEach((e, t) => {
        const n = document.createElement("option");
        n.value = String(t), n.textContent = e.label, ve.appendChild(n);
      }), ve.addEventListener("change", () => {
        const e = parseInt(ve.value, 10);
        !isNaN(e) && Re[e] && Lt(Re[e]);
      }));
      function js() {
        const e = document.getElementById(At);
        !e || typeof e.on != "function" || e.on("plotly_click", (t) => {
          var _a;
          const n = (_a = t == null ? void 0 : t.points) == null ? void 0 : _a[0];
          if (n == null) return;
          const o = typeof n.x == "number" ? n.x : parseFloat(String(n.x));
          if (isNaN(o)) return;
          const s = Q(), a = parseFloat(o.toFixed(3)), i = [
            ...s,
            a
          ].slice(-4);
          Fe(i), S();
        });
      }
      let Ze;
      window.location.hash ? (et(B, [
        {
          n: 13
        }
      ]), Ms(), $e(), Ze = S()) : Ze = Lt(Re[0]);
      Ze.then(() => {
        js();
      });
    })();
  }
});
export default require_stdin();
