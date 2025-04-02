import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CLG2jpA5.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about/collaborators.astro.mjs');
const _page2 = () => import('./pages/about/coreteam.astro.mjs');
const _page3 = () => import('./pages/about/whoweare.astro.mjs');
const _page4 = () => import('./pages/admin.astro.mjs');
const _page5 = () => import('./pages/api/substack-proxy.astro.mjs');
const _page6 = () => import('./pages/blog.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/donate.astro.mjs');
const _page9 = () => import('./pages/projects/_slug_.astro.mjs');
const _page10 = () => import('./pages/sponsors.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about/collaborators.astro", _page1],
    ["src/pages/about/coreteam.astro", _page2],
    ["src/pages/about/whoweare.astro", _page3],
    ["src/pages/admin.astro", _page4],
    ["src/pages/api/substack-proxy.astro", _page5],
    ["src/pages/blog.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/donate.astro", _page8],
    ["src/pages/projects/[slug].astro", _page9],
    ["src/pages/sponsors.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ff9b4953-e755-4121-8bca-bf346a38dfdc"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
