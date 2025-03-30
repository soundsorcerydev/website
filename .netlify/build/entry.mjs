import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BIvUos-C.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/about/collaborators.astro.mjs');
const _page1 = () => import('./pages/about/coreteam.astro.mjs');
const _page2 = () => import('./pages/about/whoweare.astro.mjs');
const _page3 = () => import('./pages/admin.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/donate.astro.mjs');
const _page7 = () => import('./pages/photoarchive.astro.mjs');
const _page8 = () => import('./pages/projects/_slug_.astro.mjs');
const _page9 = () => import('./pages/sponsors.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/about/collaborators.astro", _page0],
    ["src/pages/about/coreteam.astro", _page1],
    ["src/pages/about/whoweare.astro", _page2],
    ["src/pages/admin.astro", _page3],
    ["src/pages/blog.astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/donate.astro", _page6],
    ["src/pages/photoArchive.astro", _page7],
    ["src/pages/projects/[slug].astro", _page8],
    ["src/pages/sponsors.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "296141c1-e655-4b56-8a13-9f3f790021b5"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
