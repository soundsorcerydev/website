import { c as createComponent, d as renderHead, e as renderScript, b as renderTemplate } from '../chunks/astro/server_DYImtIa4.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Admin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="noindex"><link href="/admin/config.yml" type="text/yaml" rel="cms-config-url"><title>Sound Sorcery Photo Archive</title>${renderHead()}</head> <body> ${renderScript($$result, "/Users/ash/codeProjects/SoundSorcery/website/src/pages/admin.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/ash/codeProjects/SoundSorcery/website/src/pages/admin.astro", void 0);

const $$file = "/Users/ash/codeProjects/SoundSorcery/website/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Admin,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
