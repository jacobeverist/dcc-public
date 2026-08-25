# Published Apps

The full catalog of published DCC apps and visuals. For the current flagship application, see the [README](README.md).

Each entry below is a self-contained, independently hosted static app with its own HTML, JavaScript, CSS, and — where applicable — a Rust-compiled WebAssembly engine. Versions are kept side-by-side (`_v1`, `_v2`, `_v3`) so existing embed links keep working; the latest of each is the recommended entry point.

## DCC Simulations

Interactive simulations of DCC network demos, powered by a Rust→WebAssembly engine with a React + React Flow visualization. Embeddable in websites, documentation, and forums.

<img src="assets/dcc_simulator_screenshot.png" width="1600" alt="dcc simulator screenshot">

- [DCC Dashboard (v2)](https://jacobeverist.github.io/dcc-public/embedded_dcc_viewer_v2) — full dashboard to load and run many demos
- [Encoder Comparison (v2 embed)](https://jacobeverist.github.io/dcc-public/embedded_dcc_viewer_v2/embed.html?demo=encoderComparison) — single demo, embeddable
- [Simple Scalar Encoder (v1 embed)](https://jacobeverist.github.io/dcc-public/embedded_dcc_viewer_v1/embed.html?demo=simpleEncoder) — original basic encoder demo

**Features:** WebAssembly-powered simulation, interactive controls (play, pause, step, speed, learning toggle), real-time visualization of network state / time-series / bit fields, and iframe embedding.

## Encoder Visualizers

Tools to configure scalar encoders and interactively inspect their encodings.

<img src="assets/encoder_studio_screenshot.png" width="1600" alt="encoder studio screenshot">

- [Encoder Studio](https://jacobeverist.github.io/dcc-public/encoder_studio_v1) — latest studio with a configurable, embeddable layout
- [Encoder Analysis v3](https://jacobeverist.github.io/dcc-public/encoder_analysis_v3) — adds an [embed builder](https://jacobeverist.github.io/dcc-public/encoder_analysis_v3/embed-builder.html) and [playground](https://jacobeverist.github.io/dcc-public/encoder_analysis_v3/playground.html)
- [Encoder Analysis v2](https://jacobeverist.github.io/dcc-public/encoder_analysis_v2) — previous version
- [Encoder Analysis v1](https://jacobeverist.github.io/dcc-public/encoder_analysis_v1) — original version

## Infographics

<img src="assets/interval-random-3bin-example.svg" width="600" alt="interval diagram">

- [Encoder Diagram Gallery](https://jacobeverist.github.io/dcc-public/encoder_infographics_v1) — static gallery of encoder diagrams (paired SVG + JSON spec per diagram)

## Embedding

Embed any of the viewers above with an iframe. Simulator demos are selected with a `?demo=` query parameter:

```html
<iframe
    src="https://jacobeverist.github.io/dcc-public/embedded_dcc_viewer_v2/embed.html?demo=encoderComparison"
    title="DCC Network Viewer"
    allow="wasm-eval"
    width="850"
    height="600">
</iframe>
```

`allow="wasm-eval"` is required for WebAssembly execution. Encoder Studio supports a configurable embed layout; the easiest way to generate embed code for the encoder tools is the [Encoder Analysis v3 embed builder](https://jacobeverist.github.io/dcc-public/encoder_analysis_v3/embed-builder.html).

### Discourse Integration

To embed in Discourse forums:
1. Navigate to: Admin Settings → Site Settings → "allowed iframes"
2. Add `https://jacobeverist.github.io/dcc-public/` to the allowed iframes list
3. Paste the iframe code into your post

---

## Terms

Embedding these apps is expressly permitted — that is what the `embed.html` entry points are for — for research, teaching, evaluation and personal projects. Commercial use needs a separate licence. See **[TERMS.md](TERMS.md)**.
