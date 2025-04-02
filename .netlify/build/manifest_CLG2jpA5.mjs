import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { w as NOOP_MIDDLEWARE_HEADER, x as decodeKey } from './chunks/astro/server_Cse2tekc.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/ash/codeProjects/SoundSorcery/website/","cacheDir":"file:///Users/ash/codeProjects/SoundSorcery/website/node_modules/.astro/","outDir":"file:///Users/ash/codeProjects/SoundSorcery/website/dist/","srcDir":"file:///Users/ash/codeProjects/SoundSorcery/website/src/","publicDir":"file:///Users/ash/codeProjects/SoundSorcery/website/public/","buildClientDir":"file:///Users/ash/codeProjects/SoundSorcery/website/dist/","buildServerDir":"file:///Users/ash/codeProjects/SoundSorcery/website/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/collaborators/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about/collaborators","isIndex":false,"type":"page","pattern":"^\\/about\\/collaborators\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}],[{"content":"collaborators","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/collaborators.astro","pathname":"/about/collaborators","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"about/coreteam/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about/coreteam","isIndex":false,"type":"page","pattern":"^\\/about\\/coreteam\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}],[{"content":"coreteam","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/coreteam.astro","pathname":"/about/coreteam","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"about/whoweare/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about/whoweare","isIndex":false,"type":"page","pattern":"^\\/about\\/whoweare\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}],[{"content":"whoweare","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/whoweare.astro","pathname":"/about/whoweare","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"admin/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin","isIndex":false,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin.astro","pathname":"/admin","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"donate/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/donate","isIndex":false,"type":"page","pattern":"^\\/donate\\/?$","segments":[[{"content":"donate","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/donate.astro","pathname":"/donate","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"sponsors/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sponsors","isIndex":false,"type":"page","pattern":"^\\/sponsors\\/?$","segments":[[{"content":"sponsors","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sponsors.astro","pathname":"/sponsors","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/substack-proxy","isIndex":false,"type":"page","pattern":"^\\/api\\/substack-proxy\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"substack-proxy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/substack-proxy.astro","pathname":"/api/substack-proxy","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/ash/codeProjects/SoundSorcery/website/src/pages/admin.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/ash/codeProjects/SoundSorcery/website/src/components/Navbar.astro",{"propagation":"in-tree","containsHead":false}],["/Users/ash/codeProjects/SoundSorcery/website/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["/Users/ash/codeProjects/SoundSorcery/website/src/pages/about/collaborators.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about/collaborators@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/ash/codeProjects/SoundSorcery/website/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/ash/codeProjects/SoundSorcery/website/src/pages/contact.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/contact@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/ash/codeProjects/SoundSorcery/website/src/pages/donate.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/donate@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/ash/codeProjects/SoundSorcery/website/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/ash/codeProjects/SoundSorcery/website/src/pages/projects/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/ash/codeProjects/SoundSorcery/website/src/pages/sponsors.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/sponsors@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about/collaborators@_@astro":"pages/about/collaborators.astro.mjs","\u0000@astro-page:src/pages/about/coreteam@_@astro":"pages/about/coreteam.astro.mjs","\u0000@astro-page:src/pages/about/whoweare@_@astro":"pages/about/whoweare.astro.mjs","\u0000@astro-page:src/pages/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/api/substack-proxy@_@astro":"pages/api/substack-proxy.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/donate@_@astro":"pages/donate.astro.mjs","\u0000@astro-page:src/pages/projects/[slug]@_@astro":"pages/projects/_slug_.astro.mjs","\u0000@astro-page:src/pages/sponsors@_@astro":"pages/sponsors.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CLG2jpA5.mjs","/Users/ash/codeProjects/SoundSorcery/website/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DCeqmi9y.mjs","/Users/ash/codeProjects/SoundSorcery/website/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/ash/codeProjects/SoundSorcery/website/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_n6JYWqxc.mjs","/Users/ash/codeProjects/SoundSorcery/website/src/pages/admin.astro?astro&type=script&index=0&lang.ts":"_astro/admin.astro_astro_type_script_index_0_lang.DuzC3YGv.js","/Users/ash/codeProjects/SoundSorcery/website/src/pages/admin.astro?astro&type=script&index=1&lang.ts":"_astro/admin.astro_astro_type_script_index_1_lang.DDCNxuYb.js","/Users/ash/codeProjects/SoundSorcery/website/src/components/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.D54rPzGZ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/ash/codeProjects/SoundSorcery/website/src/components/Navbar.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.getElementById(\"mobile-toggle\"),i=document.getElementById(\"mobile-menu\"),t=document.getElementById(\"mobile-header\"),s=window.location.pathname===\"/\";e?.addEventListener(\"click\",()=>{i?.classList.toggle(\"hidden\")??!1?(t?.classList.remove(\"bg-dark-pink\"),t?.classList.add(s?\"bg-green\":\"bg-light-pink\"),e.classList.remove(\"text-offwhite\"),e.classList.add(s?\"text-offwhite\":\"text-pink\")):(t?.classList.remove(s?\"bg-green\":\"bg-light-pink\"),t?.classList.add(\"bg-dark-pink\"),e.classList.remove(s?\"text-offwhite\":\"text-pink\"),e.classList.add(\"text-offwhite\"))})});"]],"assets":["/_astro/cityOfSyd.C2vHGxuG.webp","/_astro/creativeAus.ByUZJng_.webp","/_astro/BT.BULgUiTf.webp","/_astro/HN.CaLAazlI.webp","/_astro/soundsorcery.BRrC_lNX.webp","/_astro/donate.BSA1Gd4g.webp","/_astro/CourtneySeverini.L2QUx8J8.webp","/_astro/AliceTery.BciHKwsW.webp","/_astro/FranLiddle.D68A54Fg.webp","/_astro/HilaryGeddes.Cws5P14p.webp","/_astro/BerniceTeresaFun.B4JDbU08.webp","/_astro/MaryHeart.CIpm6yvD.webp","/_astro/Meklit.D1G_wEXC.webp","/_astro/MalaikaMfalme.BL-O2Rbc.webp","/_astro/MaryRapp.DizG4iDT.webp","/_astro/MsG.iQEvnd4K.webp","/_astro/JadeKenji.BsOn0T17.webp","/_astro/TianaYoung.DIuBh6Hq.webp","/_astro/NANA.DkRtfvq4.webp","/_astro/Parvyn.DKBjDiuT.webp","/_astro/HarriHarding.D0-4qGxN.webp","/_astro/Monstress.EPbwrKwr.webp","/_astro/StellaAnning.xIL_yDsS.webp","/_astro/Sherene.DlU7wNAy.webp","/_astro/AmandaJenkins.BOkRkXlA.webp","/_astro/CatherineGolden.BPk-qM_I.webp","/_astro/FreyjaGarbett.BuYRgFq5.webp","/_astro/ElleRodriguez.QLkCSjCY.webp","/_astro/HayleyChan.6XRBqhft.webp","/_astro/HazelAlexander.DY29-87c.webp","/_astro/HilaryGeddes.CZsJkLPy.webp","/_astro/JennaLewis.CgG1BbjL.webp","/_astro/HollyConnor.DkOj7yy5.webp","/_astro/JodieMichael.QtBcVv3X.webp","/_astro/JessGreen.DHgsvrek.webp","/_astro/KaliGillen.DGov5NzW.webp","/_astro/LexiGreen.vFxBfvaR.webp","/_astro/OliviaDiamant.5mN9CtdF.webp","/_astro/MelissaMony.B-Js75_s.webp","/_astro/RosieMarksSmith.BMdJkGB9.webp","/_astro/SabineTapia.CeqxwTSL.webp","/_astro/SarahHomeh.DCvXmaOn.webp","/_astro/SarahPurdon.Bt_kk4SL.webp","/_astro/ZsaZsaGyulay.B0kIZe_w.webp","/_astro/JuliaSarantis.C-jfUxY1.webp","/_astro/MerinahFunnell.BhzuQb2G.webp","/_astro/Soulish.D7E65DhL.webp","/_astro/SylMarie.BfwBQZ1W.webp","/_astro/VanessaLam.mNPCdJXV.webp","/_astro/AdaFlynn.c1c5cAR3.webp","/_astro/DamiaOLoughlin.COoO2a4u.webp","/_astro/RomyDobbie.CaOlQTtk.webp","/_astro/MeganHolloway.BWUWCmkX.webp","/_astro/UmaVolgmer.BZOq-Uy0.webp","/_astro/MichelleBarry.Bdiw7PM0.webp","/_astro/AliaArdon.DM2i3G-7.webp","/_astro/brandX.DBI1mins.webp","/_astro/beardedTit.Cu25OnWd.webp","/_astro/DomParker.DaA7JnLZ.webp","/_astro/EmilyRose.CRPUm70k.webp","/_astro/NoahJovignot.CwAXak4S.webp","/_astro/ElenaAcquaviva.DhSO30To.webp","/_astro/auntieWombat.B1muSQTC.webp","/_astro/AnnikaUnsen.CGhldM0G.webp","/_astro/SallyHackett.Dvm8YB9x.webp","/_astro/collaborators.Cgy_DDDD.css","/favicon.svg","/robots.txt","/_astro/admin.astro_astro_type_script_index_0_lang.DuzC3YGv.js","/_astro/admin.astro_astro_type_script_index_1_lang.DDCNxuYb.js","/admin/config.yml","/icons/facebook.svg","/icons/instagram.svg","/icons/spotify.svg","/icons/substack.svg","/icons/youtube.svg","/about/collaborators/index.html","/about/coreteam/index.html","/about/whoweare/index.html","/admin/index.html","/blog/index.html","/contact/index.html","/donate/index.html","/sponsors/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"w1Nq2O2KQAVHgSlia1Z0VfXsWzqqAgCxref6o3Q0Z0Q="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
