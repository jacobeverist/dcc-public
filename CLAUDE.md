# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

A **distribution/deployment hub** for published assets about Discrete Cortical Circuits (DCC) — interactive web apps, encoder visualizers, and static infographics. It is served as static files via **GitHub Pages** at `https://jacobeverist.github.io/dcc-public/`.

**This repo contains built artifacts only — no source code.** All JavaScript is minified/hash-named Vite output, WASM is compiled Rust, CSS is compiled. There is nothing to `npm install`, build, lint, or test here. The source lives in a separate (private) repository. To change app *behavior*, you must rebuild from source there and copy the new artifacts in. The only files meaningfully hand-editable in this repo are the HTML entry points and the `*.config.json` files (see below).

## Layout

Each top-level directory is an **independent, self-contained static app** (its own `assets/`, HTML entry points, and WASM). Versions are frozen side-by-side (`_v1`, `_v2`, `_v3`) rather than replaced, so old embed URLs keep working — never delete or overwrite an old version to "upgrade" it; add a new one.

Two app families plus one static gallery:

**DCC network simulators** — Rust→WASM neural-network engine with React + React Flow visualization:
- `embedded_dcc_viewer_v1/` — basic single-demo embed viewer
- `embedded_dcc_viewer_v2/` — full dashboard (`index.html`) + embed mode (`embed.html`)
- `standalone_pooling_demo_v1/` — **the flagship app** the README fronts: a single-network pooling demo (`index.html` only, no `embed.html`). It ships no demo manifest and no demo picker — the network is compiled into the bundle, so there is no URL parameter that can load a different one. It also ships `libavoid.wasm` at the directory root in addition to the copy under `assets/`.

**Encoder visualizers** — tools to configure scalar encoders and inspect their encodings:
- `encoder_analysis_v1/`, `v2/`, `v3/` — successive versions; `v3` adds `embed.html`, `embed-builder.html` (generates embed code), `embed-example.html`, and `playground.html`
- `encoder_studio_v1/` — latest encoder studio with configurable embeddable layout

**Static assets:**
- `encoder_infographics_v1/` — a pure-HTML gallery (`index.html`) of encoder diagrams; each diagram is a paired `*.svg` + `*.json` (the JSON is the diagram spec, the SVG the rendered output). No JS app, no WASM.
- `assets/` (repo root) — screenshots referenced by README files.

## WASM runtime

The simulation engine is compiled Rust shipped as a WASM bundle, duplicated per app:
- Older simulators (`embedded_dcc_viewer_v1`/`v2`) use `dcc_wasm_bg-*.wasm`.
- Newer apps (`standalone_pooling_demo_v1`, `encoder_studio_v1`, `encoder_analysis_*`) use `dcc_bundle_bg-*.wasm`.

Hashes differ per build, so each app pins its own copy — they are not interchangeable by filename. Newer apps also bundle KaTeX (math fonts), ECharts, React Flow, elkjs (graph layout), and a markdown renderer.

## How embedding works

**Simulators** select a demo via a URL query param on `embed.html`:
```
.../embedded_dcc_viewer_v2/embed.html?demo=encoderComparison
```
Known demo names seen in docs: `simpleEncoder`, `sequence`, `encoderComparison`. iframes need `allow="wasm-eval"`.

**Encoder Studio embed** is config-driven, not demo-driven. `encoder_studio_v1/embed.html` reads a `StudioEmbedConfig` JSON. Resolution order (later overrides earlier): the `<meta name="encoder-studio-config">` URL in the HTML → a `window` global → `?config=<url>.json` → a `#hash` config. The default baseline layout lives in `encoder_studio_v1/encoder-studio.config.json`; edit that file to change the embed's default layout *without rebuilding*. (The schema is `StudioEmbedConfig` in `src/studio/embedConfig.ts` in the source repo.)

## Critical constraint: relative asset paths

Because these are served from a GitHub Pages subpath (`/dcc-public/<app>/`), **all asset references in the HTML entry points must be relative** (`./assets/...`), not absolute (`/assets/...`). A large fraction of this repo's git history is fixing this exact issue after rebuilds. When copying in fresh Vite output, verify (or configure Vite's `base`) that the generated `<script>`/`<link>` paths are relative before committing.

## Working in this repo

- Deploying = committing built artifacts and pushing to `main` (GitHub Pages serves `main`).
- The root `README.md` is dedicated to the flagship pooling demo; the catalog of every other published URL, plus the embedding and Discourse instructions, lives in `APPS.md`. Update `APPS.md` when adding or renaming a published app.
- When adding a new app version, copy the whole self-contained directory; keep `index.html` (standalone/dashboard) and `embed.html` (iframe) as the entry-point convention.
- DCC stands for **Discrete Cortical Circuits**. In this vocabulary a *network* is the whole graph of nodes and connections, and a *circuit* is a named, presentation-only grouping of nodes within one — the two are not interchangeable. The graph vocabulary is **node** / **connection** / **network**; "block" and "module" are not part of it.
