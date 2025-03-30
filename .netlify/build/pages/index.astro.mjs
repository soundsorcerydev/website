import { c as createComponent, r as renderComponent, e as renderScript, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DYImtIa4.mjs';
import 'kleur/colors';
import { a as $$Layout, b as $$Logo } from '../chunks/Layout_Y-JeE220.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "bgColor": "bg-green" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-sm:min-h-screen h-full flex items-center justify-center p-4"> <div class="flex flex-col md:flex-row items-center gap-6"> ${renderComponent($$result2, "Logo", $$Logo, { "width": 540, "height": 540 })} <div class="flex flex-col"> <h1 class="text-6xl md:text-9xl leading-none text-offwhite">
Sound
</h1> <h1 class="text-6xl md:text-9xl leading-none text-offwhite ml-8 md:ml-20">
Sorcery
</h1> </div> </div> </div> ` })} ${renderScript($$result, "/Users/ash/codeProjects/SoundSorcery/website/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/ash/codeProjects/SoundSorcery/website/src/pages/index.astro", void 0);

const $$file = "/Users/ash/codeProjects/SoundSorcery/website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
