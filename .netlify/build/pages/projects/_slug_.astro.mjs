import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, F as Fragment, m as maybeRenderHead, f as addAttribute } from '../../chunks/astro/server_DYImtIa4.mjs';
import 'kleur/colors';
import { a as $$Layout, g as getCollection } from '../../chunks/Layout_Y-JeE220.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const events = await getCollection("events", {
    schema: ({ slug }) => ({ slug })
  });
  return events.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title }, { "images": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "images" }, { "default": ($$result3) => renderTemplate`${entry.data.images.map((image) => renderTemplate`${maybeRenderHead()}<div class="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"> <img${addAttribute(image.image, "src")}${addAttribute(`Image from ${entry.data.title}`, "alt")} class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"> </div>`)}` })}`, "title": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result3) => renderTemplate`${entry.data.title}` })}` })}`;
}, "/Users/ash/codeProjects/SoundSorcery/website/src/pages/projects/[slug].astro", void 0);

const $$file = "/Users/ash/codeProjects/SoundSorcery/website/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
