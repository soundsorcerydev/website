import { c as createComponent, b as renderTemplate, e as renderScript, m as maybeRenderHead, r as renderComponent } from '../chunks/astro/server_DYImtIa4.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_Y-JeE220.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Substack = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div id="substack-feed-embed"></div> ', ' <script src="https://substackapi.com/embeds/feed.js" async><\/script>'])), maybeRenderHead(), renderScript($$result, "/Users/ash/codeProjects/SoundSorcery/website/src/components/Substack.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/ash/codeProjects/SoundSorcery/website/src/components/Substack.astro", void 0);

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-max-screen h-full flex flex-col items-center gap-2"> <div class="w-3/4"> ${renderComponent($$result2, "Substack", $$Substack, {})} </div> </div> ` })}`;
}, "/Users/ash/codeProjects/SoundSorcery/website/src/pages/blog.astro", void 0);

const $$file = "/Users/ash/codeProjects/SoundSorcery/website/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Blog,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
