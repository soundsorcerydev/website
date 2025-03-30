import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_DYImtIa4.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_Y-JeE220.mjs';
import CMS from 'decap-cms-app';
export { renderers } from '../renderers.mjs';

const $$PhotoArchive = createComponent(($$result, $$props, $$slots) => {
  CMS.init();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {})}`;
}, "/Users/ash/codeProjects/SoundSorcery/website/src/pages/photoArchive.astro", void 0);

const $$file = "/Users/ash/codeProjects/SoundSorcery/website/src/pages/photoArchive.astro";
const $$url = "/photoArchive";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PhotoArchive,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
