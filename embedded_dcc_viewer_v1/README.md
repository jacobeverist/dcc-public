
# Embedded DCC Simulation Viewer

## Direct Link

[Embedded DCC Simulation Viewer](https://jacobeverist.github.io/dcc-public/embedded_dcc_viewer_v1/embed.html?demo=simpleEncoder)


## Embedded Viewer

Can embed this simulation viewer within an iframe on some other site.

```html
<div class="iframe-wrapper">
    <iframe
        src="https://jacobeverist.github.io/dcc-public/embedded_dcc_viewer_v1/embed.html?demo=simpleEncoder"
        title="DCC Network Viewer"
        allow="wasm-eval"
        width="850"
        height="600">
    </iframe>
</div>
```

### Setup

First the domain of this repo site needs to be whitelisted to whatever site you want to embed it on.

Whitelist the following domain:
https://jacobeverist.github.io/dcc-public/

### Discourse

1) Visit the admin settings and find "allowed iframes" in Site Settings:
https://discourse.corticalcircuits.com/admin/site_settings/category/all_results?filter=allowed%20iframes

2) Add the above URL to the "allowed iframes" list of items.

3) Now we can post the embedded iframe snippet above to a Discourse post.

