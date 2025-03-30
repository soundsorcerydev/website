import { c as createComponent, m as maybeRenderHead, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_DYImtIa4.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$Layout } from '../chunks/Layout_Y-JeE220.mjs';
export { renderers } from '../renderers.mjs';

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form name="{formName}" method="POST" data-netlify="true" class="bg-green p-4 md:p-8 rounded-lg shadow-md w-full mx-auto"> <input type="hidden" name="form-name" value="{formName}"> <div class="mb-4 flex flex-col md:flex-row md:items-center"> <label for="name" class="w-full md:w-1/12 text-light-pink text-sm font-bold md:text-right pr-0 md:pr-4 uppercase mb-1 md:mb-0">
Name
</label> <input type="text" id="name" name="name" required class="w-full md:w-11/12 bg-mint-green rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink"> </div> <div class="mb-4 flex flex-col md:flex-row md:items-center"> <label for="email" class="w-full md:w-1/12 text-light-pink text-sm font-bold md:text-right pr-0 md:pr-4 uppercase mb-1 md:mb-0">
Email
</label> <input type="email" id="email" name="email" required class="w-full md:w-11/12 bg-mint-green rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink"> </div> <div class="mb-4 flex flex-col md:flex-row md:items-center"> <label for="type" class="w-full md:w-1/12 text-light-pink text-sm font-bold md:text-right pr-0 md:pr-4 uppercase mb-1 md:mb-0">
Type
</label> <select id="type" name="type" required class="w-full md:w-11/12 bg-mint-green rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink"> <option value="general enquiry">General Enquiry</option> <option value="sponsor enquiry">Sponsor Enquiry</option> </select> </div> <div class="mb-6 flex flex-col md:flex-row"> <label for="message" class="w-full md:w-1/12 text-light-pink text-sm font-bold md:text-right pr-0 md:pr-4 uppercase mb-1 md:mb-0 md:pt-2">
Message
</label> <textarea id="message" name="message" rows="4" required class="w-full md:w-11/12 bg-mint-green rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink min-h-48"></textarea> </div> <div class="flex justify-center"> <button type="submit" class="bg-dark-green text-offwhite px-6 py-2 rounded-lg hover:bg-mint-green hover:text-dark-green uppercase">
Submit
</button> </div> </form>`;
}, "/Users/ash/codeProjects/SoundSorcery/website/src/components/ContactForm.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-max-screen h-full flex flex-col items-center gap-2"> <h2 class="text-4xl p-4 uppercase">Get in Touch</h2> <div class="w-3/4 pb-10"> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> </div> ` })}`;
}, "/Users/ash/codeProjects/SoundSorcery/website/src/pages/contact.astro", void 0);

const $$file = "/Users/ash/codeProjects/SoundSorcery/website/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
