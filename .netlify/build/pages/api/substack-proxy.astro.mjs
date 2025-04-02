import { c as createComponent, b as renderTemplate } from '../../chunks/astro/server_Cse2tekc.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const prerender = false;
async function GET() {
  try {
    const response = await fetch(
      "https://substackapi.com/api"
    );
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
const $$SubstackProxy = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/ash/codeProjects/SoundSorcery/website/src/pages/api/substack-proxy.astro", void 0);

const $$file = "/Users/ash/codeProjects/SoundSorcery/website/src/pages/api/substack-proxy.astro";
const $$url = "/api/substack-proxy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    default: $$SubstackProxy,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
