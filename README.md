# DCC Published Assets

This repository is for the purpose of hosting published assets on Discrete Cortical Networks (DCC) research including:

- Web-Based Apps
  - Simulations
  - Interactive Visualizations
- Visuals
  - Plots
  - Animations
  - Illustrations
  - Infographics

# DCC Simulations

This repository hosts interactive web-based visualizations and simulations of DCC neural network demonstrations. All viewers are built with WebAssembly for high-performance simulation and can be embedded in websites, documentation, and forums.

## Features

- **WebAssembly-powered**: High-performance DCC network simulation
- **Interactive Controls**: Play, pause, step-through, speed adjustment, and learning toggles
- **Real-time Visualization**: Network state, time-series data, and bit field representations
- **Embeddable**: Designed for iframe embedding in documentation and forums
- **Multiple Demos**: Various pre-configured network demonstrations

## Technologies

- **ReactJS**: UI framework
- **ReactFlow**: Graph visualization library
- **Rust**: Core DCC simulation engine
- **WebAssembly**: Compiled from Rust to run simulation in the browser

## Repository Structure

- `embedded_dcc_viewer_v1/` - Version 1 viewer
- `embedded_dcc_viewer_v2/` - Version 2 viewer with full dashboard with many demos

Each viewer is self-contained with all necessary assets (HTML, JavaScript bundles, CSS, and WASM binaries).

## Versions

### Version 2 (Latest) - DCC Dashboard

- [DCC Dashboard](https://jacobeverist.github.io/dcc-public/embedded_dcc_viewer_v2) - Full dashboard to load and run many different demos

- [Encoder Comparison (Embed)](https://jacobeverist.github.io/dcc-public/embedded_dcc_viewer_v2/embed.html?demo=encoderComparison) - Single demo of encoder comparisons

### Version 1 - DCC Dashboard

- [Simple Scalar Encoder (Embed)](https://jacobeverist.github.io/dcc-public/embedded_dcc_viewer_v1/embed.html?demo=simpleEncoder) - Single demo of a basic encoder

## Embedding

You can embed these viewers in your own websites or platforms using iframes:

```html
<iframe
    src="https://jacobeverist.github.io/dcc-public/embedded_dcc_viewer_v2/embed.html?demo=encoderComparison"
    title="DCC Network Viewer"
    allow="wasm-eval"
    width="850"
    height="600">
</iframe>
```

## Discourse Integration

To embed in Discourse forums:
1. Add `https://jacobeverist.github.io/dcc-public/` to your allowed iframes list
2. Navigate to: Admin Settings → Site Settings → "allowed iframes"
3. Paste the iframe code into your post

