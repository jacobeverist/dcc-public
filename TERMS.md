# Terms of Use

**Discrete Cortical Circuits (DCC)** — published web apps and assets
Copyright © 2025–2026 Jacob Everist. All rights reserved.

*Last updated: 2026-08-25*

---

## What this covers

Everything served from `https://jacobeverist.github.io/dcc-public/` — the DCC Studio demos, the encoder visualizers and studio, the infographics, and the compiled WebAssembly they run on.

These are **built artifacts**. The source lives in a separate, private repository, and nothing here is an open-source release of it.

## Using the apps

**You may use these apps freely for research, teaching, evaluation, and personal projects**, in your browser, without an account, at no cost.

**You may embed them.** The viewers are designed for it and several ship an `embed.html` for the purpose. Link to them or iframe them, in a paper, a course page, a blog post, or documentation. Attribution is appreciated and a link back is enough.

**Commercial use requires a separate licence.** The underlying software is licensed [PolyForm Noncommercial 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0/), which permits any noncommercial purpose and no commercial one. If you want to use DCC in or for a commercial product or service, get in touch — that is a licence that exists to be granted, not a door that is closed.

**Please do not** rehost the compiled artifacts as your own, redistribute the WebAssembly bundles separately from these pages, or remove attribution or notices.

## Your work is yours

**Network configurations, parameters, and any results you produce with these apps are your property.** Nothing here claims any interest in them.

The apps run **entirely in your browser**. Networks are simulated locally in WebAssembly; nothing you build or run is transmitted to a server, because there is no server — this is a static site. Configurations shared via URL are encoded in the link itself and travel only where you send it.

The file formats those configurations use are separately licensed under Apache-2.0 and may be used freely, including commercially, by tools unrelated to this project.

## No warranty

This is **research software**, published to demonstrate and explain an approach, not to be depended upon.

It is provided **"as is", without warranty of any kind**, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and noninfringement. In no event shall the copyright holder be liable for any claim, damages, or other liability arising from the software or its use.

**Do not use it in safety-critical systems** — anything where a defect can injure someone. It is not built, tested, or licensed for that.

## Availability

These pages are served from GitHub Pages as a convenience and may change, move, or disappear without notice. Older app versions are kept side-by-side (`_v1`, `_v2`, `_v3`) so existing embed URLs keep working, but nothing here is a hosting commitment or an uptime promise.

## Third-party components

These apps bundle open-source components — React, React Flow, ECharts, KaTeX, elkjs, libavoid and others — under their own licences. **Their notices, and the licence texts, are in [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md) in this repository.**

Most are MIT or Apache-2.0. **Two are not**, and are called out at the top of that file with links to their unmodified upstream source: `elkjs` is Eclipse Public License 2.0, and `libavoid-js` is LGPL-2.1-or-later and ships as a separate, replaceable `.wasm` file.

**The apps contain no third-party neural-network implementation.** The HTM, Sparse Predictive Hierarchies and Sparsey ports are not part of the product and are not built into anything published here.

## Changes

These terms apply to the version of the apps you are using. Later versions may carry different terms; **that does not withdraw rights already granted for a version you have already used.**

## Contact

Jacob Everist — <jacob.everist@gmail.com> · [corticalcircuits.com](https://corticalcircuits.com)
