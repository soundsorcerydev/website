import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_DYImtIa4.mjs';
import 'kleur/colors';
import { $ as $$Image, a as $$Layout } from '../../chunks/Layout_Y-JeE220.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$CollabFrame = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CollabFrame;
  const { src, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center"> <div class="rounded-full overflow-hidden w-32 h-32 sm:h-52 sm:w-52 lg:w-80 lg:h-80 filter"> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "width": 300, "height": 300, "class": "w-full h-full object-cover grayscale hover:filter-none", "loading": "lazy" })} </div> </div>`;
}, "/Users/ash/codeProjects/SoundSorcery/website/src/components/CollabFrame.astro", void 0);

const $$Collaborators = createComponent(($$result, $$props, $$slots) => {
  const sections = [
    {
      title: "Featured Artists",
      items: [
        { name: "Alice Tery", photo: "/src/assets/images/collaborators/featArtists/AliceTery.webp", alt: "Alice Tery" },
        { name: "Bernice Teresa Fun", photo: "/src/assets/images/collaborators/featArtists/BerniceTeresaFun.webp", alt: "Bernice Teresa Fun" },
        { name: "Courtney Severini", photo: "/src/assets/images/collaborators/featArtists/CourtneySeverini.webp", alt: "Courtney Severini" },
        { name: "Fran Liddle", photo: "/src/assets/images/collaborators/featArtists/FranLiddle.webp", alt: "Fran Liddle" },
        { name: "Harri Harding", photo: "/src/assets/images/collaborators/featArtists/HarriHarding.webp", alt: "Harri Harding" },
        { name: "Hilary Geddes", photo: "/src/assets/images/collaborators/featArtists/HilaryGeddes.webp", alt: "Hilary Geddes" },
        { name: "Jade Kenji", photo: "/src/assets/images/collaborators/featArtists/JadeKenji.webp", alt: "Jade Kenji" },
        { name: "Malaika Mfalme", photo: "/src/assets/images/collaborators/featArtists/MalaikaMfalme.webp", alt: "Malaika Mfalme" },
        { name: "Mary Heart", photo: "/src/assets/images/collaborators/featArtists/MaryHeart.webp", alt: "Mary Heart" },
        { name: "Mary Rapp", photo: "/src/assets/images/collaborators/featArtists/MaryRapp.webp", alt: "Mary Rapp" },
        { name: "Meklit", photo: "/src/assets/images/collaborators/featArtists/Meklit.webp", alt: "Meklit" },
        { name: "Monstress", photo: "/src/assets/images/collaborators/featArtists/Monstress.webp", alt: "Monstress" },
        { name: "Ms G", photo: "/src/assets/images/collaborators/featArtists/MsG.webp", alt: "Ms G" },
        { name: "NANA", photo: "/src/assets/images/collaborators/featArtists/NANA.webp", alt: "NANA" },
        { name: "Parvyn", photo: "/src/assets/images/collaborators/featArtists/Parvyn.webp", alt: "Parvyn" },
        { name: "Sherene", photo: "/src/assets/images/collaborators/featArtists/Sherene.webp", alt: "Sherene" },
        { name: "Stella Anning", photo: "/src/assets/images/collaborators/featArtists/StellaAnning.webp", alt: "Stella Anning" },
        { name: "Tiana Young", photo: "/src/assets/images/collaborators/featArtists/TianaYoung.webp", alt: "Tiana Young" }
      ]
    },
    {
      title: "House Band Musicians",
      items: [
        { name: "Amanda Jenkins", photo: "/src/assets/images/collaborators/houseBand/AmandaJenkins.webp", alt: "Amanda Jenkins" },
        { name: "Catherine Golden", photo: "/src/assets/images/collaborators/houseBand/CatherineGolden.webp", alt: "Catherine Golden" },
        { name: "Elle Rodriguez", photo: "/src/assets/images/collaborators/houseBand/ElleRodriguez.webp", alt: "Elle Rodriguez" },
        { name: "Emily Rose", photo: "/src/assets/images/collaborators/houseBand/EmilyRose.webp", alt: "Emily Rose" },
        { name: "Freyja Garbett", photo: "/src/assets/images/collaborators/houseBand/FreyjaGarbett.webp", alt: "Freyja Garbett" },
        { name: "Hayley Chan", photo: "/src/assets/images/collaborators/houseBand/HayleyChan.webp", alt: "Hayley Chan" },
        { name: "Hazel Alexander", photo: "/src/assets/images/collaborators/houseBand/HazelAlexander.webp", alt: "Hazel Alexander" },
        { name: "Hilary Geddes", photo: "/src/assets/images/collaborators/houseBand/HilaryGeddes.webp", alt: "Hilary Geddes" },
        { name: "Holly Connor", photo: "/src/assets/images/collaborators/houseBand/HollyConnor.webp", alt: "Holly Connor" },
        { name: "Jenna Lewis", photo: "/src/assets/images/collaborators/houseBand/JennaLewis.webp", alt: "Jenna Lewis" },
        { name: "Jess Green", photo: "/src/assets/images/collaborators/houseBand/JessGreen.webp", alt: "Jess Green" },
        { name: "Jodie Michael", photo: "/src/assets/images/collaborators/houseBand/JodieMichael.webp", alt: "Jodie Michael" },
        { name: "Kali Gillen", photo: "/src/assets/images/collaborators/houseBand/KaliGillen.webp", alt: "Kali Gillen" },
        { name: "Lexi Green", photo: "/src/assets/images/collaborators/houseBand/LexiGreen.webp", alt: "Lexi Green" },
        { name: "Melissa Mony", photo: "/src/assets/images/collaborators/houseBand/MelissaMony.webp", alt: "Melissa Mony" },
        { name: "Olivia Diamant", photo: "/src/assets/images/collaborators/houseBand/OliviaDiamant.webp", alt: "Olivia Diamant" },
        { name: "Rosie Marks-Smith", photo: "/src/assets/images/collaborators/houseBand/RosieMarksSmith.webp", alt: "Rosie Marks-Smith" },
        { name: "Sabine Tapia", photo: "/src/assets/images/collaborators/houseBand/SabineTapia.webp", alt: "Sabine Tapia" },
        { name: "Sarah Homeh", photo: "/src/assets/images/collaborators/houseBand/SarahHomeh.webp", alt: "Sarah Homeh" },
        { name: "Sarah Purdon", photo: "/src/assets/images/collaborators/houseBand/SarahPurdon.webp", alt: "Sarah Purdon" },
        { name: "Zsa Zsa Gyulay", photo: "/src/assets/images/collaborators/houseBand/ZsaZsaGyulay.webp", alt: "Zsa Zsa Gyulay" }
      ]
    },
    {
      title: "Visual Collaborators",
      items: [
        { name: "Alia Ardon", photo: "/src/assets/images/collaborators/visualCollabs/AliaArdon.webp", alt: "Alia Ardon" },
        { name: "Julia Sarantis", photo: "/src/assets/images/collaborators/visualCollabs/JuliaSarantis.webp", alt: "Julia Sarantis" },
        { name: "Megan Holloway", photo: "/src/assets/images/collaborators/visualCollabs/MeganHolloway.webp", alt: "Megan Holloway" },
        { name: "Merinah Funnell", photo: "/src/assets/images/collaborators/visualCollabs/MerinahFunnell.webp", alt: "Merinah Funnell" },
        { name: "Soulish", photo: "/src/assets/images/collaborators/visualCollabs/Soulish.webp", alt: "Soulish" },
        { name: "Syl Marie", photo: "/src/assets/images/collaborators/visualCollabs/SylMarie.webp", alt: "Syl Marie" },
        { name: "Vanessa Lam", photo: "/src/assets/images/collaborators/visualCollabs/VanessaLam.webp", alt: "Vanessa Lam" }
      ]
    },
    {
      title: "Art Workers",
      items: [
        { name: "Ada Flynn", photo: "/src/assets/images/collaborators/artWorkers/AdaFlynn.webp", alt: "Ada Flynn" },
        { name: "Annika Unsen", photo: "/src/assets/images/collaborators/artWorkers/AnnikaUnsen.webp", alt: "Annika Unsen" },
        { name: "Damia O Loughlin", photo: "/src/assets/images/collaborators/artWorkers/DamiaOLoughlin.webp", alt: "Damia O Loughlin" },
        { name: "Dom Parker", photo: "/src/assets/images/collaborators/artWorkers/DomParker.webp", alt: "Dom Parker" },
        { name: "Elena Acquaviva", photo: "/src/assets/images/collaborators/artWorkers/ElenaAcquaviva.webp", alt: "Elena Acquaviva" },
        { name: "Michelle Barry", photo: "/src/assets/images/collaborators/artWorkers/MichelleBarry.webp", alt: "Michelle Barry" },
        { name: "Noah Jovignot", photo: "/src/assets/images/collaborators/artWorkers/NoahJovignot.webp", alt: "Noah Jovignot" },
        { name: "Romy Dobbie", photo: "/src/assets/images/collaborators/artWorkers/RomyDobbie.webp", alt: "Romy Dobbie" },
        { name: "Sally Hackett", photo: "/src/assets/images/collaborators/artWorkers/SallyHackett.webp", alt: "Sally Hackett" },
        { name: "Uma Volgmer", photo: "/src/assets/images/collaborators/artWorkers/UmaVolgmer.webp", alt: "Uma Volgmer" }
      ]
    },
    {
      title: "Venue",
      items: [
        {
          name: "The Bearded Tit",
          photo: "/src/assets/images/collaborators/venue/beardedTit.webp",
          alt: "The Bearded Tit"
        },
        {
          name: "Brand X - City of Sydney Creative studios",
          photo: "/src/assets/images/collaborators/venue/brandX.webp",
          alt: "Brand X - City of Sydney Creative studios"
        }
      ]
    },
    {
      title: "Catering",
      items: [
        {
          name: "Auntie Wombat",
          photo: "/src/assets/images/collaborators/catering/auntieWombat.webp",
          alt: "Auntie Wombat"
        }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-screen h-full flex flex-col items-center justify-around"> ${sections.map((section) => renderTemplate`<h2 class="text-4xl p-4 uppercase">${section.title}</h2>
                    <div class="flex flex-row flex-wrap justify-around"> ${section.items.map((member) => renderTemplate`<div class="flex flex-col m-10"> ${renderComponent($$result2, "CollabFrame", $$CollabFrame, { "src": member.photo, "alt": member.alt })} <p class="flex justify-center font-semibold">${member.name}</p> </div>`)} </div>`)} </div> ` })}`;
}, "/Users/ash/codeProjects/SoundSorcery/website/src/pages/about/collaborators.astro", void 0);

const $$file = "/Users/ash/codeProjects/SoundSorcery/website/src/pages/about/collaborators.astro";
const $$url = "/about/collaborators";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Collaborators,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
