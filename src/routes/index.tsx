import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Newspaper,
  Phone,
  PlayCircle,
  Quote,
  Star,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";
import libroCover from "@/assets/libro-cover.jpg";
import cardEuropa from "@/assets/card-europa.jpg";
import cardEnergia from "@/assets/card-energia.jpg";
import cardTerritorio from "@/assets/card-territorio.jpg";
import cardBruxelles from "@/assets/card-bruxelles.jpg";
import cardIncontro from "@/assets/card-incontro.jpg";
import cardTavolo from "@/assets/card-tavolo.jpg";
import patternNavy from "@/assets/pattern-navy.jpg";
import videoPoster from "@/assets/video-poster.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La mia esperienza in Europa | Sito Istituzionale" },
      {
        name: "description",
        content:
          "Sito ufficiale: il libro «La mia esperienza in Europa», attività istituzionale, attività sul territorio, articoli recenti e video.",
      },
      { property: "og:title", content: "La mia esperienza in Europa | Sito Istituzionale" },
      {
        property: "og:description",
        content:
          "Sito ufficiale: il libro «La mia esperienza in Europa», attività istituzionale, attività sul territorio, articoli recenti e video.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Chi sono", href: "/biografia" },
  { label: "Attività istituzionale", href: "/comunicati" },
  { label: "Articoli", href: "/articoli" },
  { label: "Il libro", href: "/libro" },
  { label: "Contatti", href: "/contatti" },
];

const social = [
  { label: "Facebook", icon: Facebook },
  { label: "Instagram", icon: Instagram },
  { label: "YouTube", icon: Youtube },
];

const attivitaIstituzionale = [
  {
    image: cardEuropa,
    date: "7 settembre 2026",
    tags: ["Comunicati stampa", "Europa"],
    title: "Nuovo rapporto sulle politiche industriali comuni",
    description:
      "Presentate a Strasburgo le linee guida per rafforzare la competitività europea nei settori strategici.",
  },
  {
    image: cardEnergia,
    date: "3 settembre 2026",
    tags: ["Energia", "Istituzionale"],
    title: "Audizione sulla transizione energetica",
    description:
      "Intervento in commissione Ambiente su obiettivi 2030, investimenti e costi per famiglie e imprese.",
  },
  {
    image: cardBruxelles,
    date: "26 agosto 2026",
    tags: ["Trasparenza", "Lobby"],
    title: "Interrogazione sulla trasparenza dei registri lobbistici",
    description:
      "Chiesto alla Commissione di pubblicare integralmente gli incontri con i portatori di interessi.",
  },
];

const attivitaTerritorio = [
  {
    image: cardTerritorio,
    date: "28 agosto 2026",
    tags: ["Territorio"],
    title: "Incontro con i sindaci del Sud Italia",
    description: "Fondi strutturali e coesione territoriale al centro del confronto con gli amministratori.",
  },
  {
    image: cardIncontro,
    date: "12 agosto 2026",
    tags: ["Eventi"],
    title: "Presentazione del libro in piazza",
    description: "Una serata pubblica dedicata al racconto di dodici anni dentro le istituzioni europee.",
  },
  {
    image: cardTavolo,
    date: "30 luglio 2026",
    tags: ["Imprese"],
    title: "Tavolo con le imprese locali sui bandi europei",
    description: "Come accedere concretamente ai finanziamenti comunitari senza perdersi nella burocrazia.",
  },
];

const numeri = [
  { value: "12", label: "anni di attività istituzionale" },
  { value: "340+", label: "atti e interventi depositati" },
  { value: "27", label: "Paesi coinvolti nei progetti" },
];

const articoli = [
  {
    source: "Il Sole 24 Ore",
    date: "5 settembre 2026",
    title: "Serve un bilancio europeo all’altezza delle nostre ambizioni",
    excerpt: "Senza una capacità fiscale comune, ogni strategia industriale resta una dichiarazione d’intenti.",
  },
  {
    source: "Corriere della Sera",
    date: "22 agosto 2026",
    title: "Coesione non è assistenza: è politica di crescita",
    excerpt: "I fondi europei funzionano quando incontrano progetti locali solidi e amministrazioni capaci.",
  },
  {
    source: "Politico Europe",
    date: "9 agosto 2026",
    title: "Il prossimo allargamento metterà alla prova le istituzioni",
    excerpt: "Allargarsi senza riformare i processi decisionali significa condannarsi alla paralisi.",
  },
  {
    source: "Domani",
    date: "30 luglio 2026",
    title: "Energia: il prezzo della frammentazione",
    excerpt: "Ventisette mercati elettrici separati costano alle famiglie molto più di quanto immaginiamo.",
  },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="hidden border-b border-primary-foreground/10 bg-primary text-primary-foreground md:block">
        <div className="container-politico flex h-9 items-center justify-between text-[0.7rem] uppercase tracking-wider">
          <span className="text-primary-foreground/65">Sito ufficiale</span>
          <span className="text-primary-foreground/65">Analista politica · Giurista · Scrittrice</span>
        </div>
      </div>
      <div className="container-politico">
        <nav className="flex h-20 items-center justify-between border-b border-border/70">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-primary bg-primary">
              <span className="text-sm font-bold text-primary-foreground">FD</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Francesca Donato</span>
          </Link>

          <div className="hidden items-center gap-7 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden xl:block">
            <Button asChild>
              <Link to="/libro" className="gap-2">
                <BookOpen className="size-4" />
                Acquista il libro
              </Link>
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Menu">
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="mt-1.5 block h-0.5 w-5 bg-foreground" />
          </Button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-y-0 left-0 w-1 bg-accent" />

      <div className="container-politico relative">
        <div className="flex flex-col-reverse items-center gap-12 py-14 lg:flex-row lg:gap-16 lg:py-20">
          <div className="flex flex-1 flex-col items-start text-center lg:text-left">
            <span className="border-l-2 border-accent pl-3 text-xs font-semibold uppercase tracking-wider text-accent">
              Esperienza nelle istituzioni europee
            </span>
            <h1 className="mt-6 text-balance text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
              Analista politica, giurista, scrittrice.
              <span className="block text-accent">Già membro del Parlamento Europeo.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/75">
              Dodici anni al servizio delle istituzioni europee, tra negoziati, commissioni e territori.
              Qui trovi la mia attività, i miei articoli e il racconto di com’è davvero l’Europa vista
              da dentro.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/libro" className="gap-2">
                  Scopri il libro
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/biografia">Scopri di più</Link>
              </Button>
            </div>

            <div className="mt-9 flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
                Seguimi su
              </span>
              <div className="flex gap-2">
                {social.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <s.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex flex-1 justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 bg-accent" />
              <img
                src={heroPortrait}
                alt="Ritratto istituzionale"
                width={1024}
                height={1280}
                className="relative object-cover shadow-xl"
              />
            </div>
          </div>
        </div>

        <dl className="relative grid grid-cols-3 gap-6 border-t border-primary-foreground/20 py-8">
          {numeri.map((n) => (
            <div key={n.label}>
              <dt className="text-2xl font-bold text-accent sm:text-3xl">{n.value}</dt>
              <dd className="mt-1 text-xs leading-snug text-primary-foreground/60">{n.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container-politico">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Video</span>
          <h2 className="mt-3 text-3xl font-bold italic tracking-tight text-foreground sm:text-4xl">
            La mia esperienza in Parlamento Europeo
          </h2>
        </div>

        <div className="relative mx-auto mt-10 max-w-4xl overflow-hidden border border-border shadow-lg">
          <img
            src={videoPoster}
            alt="Intervento in aula al Parlamento Europeo"
            width={1600}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40" />
          <button
            type="button"
            className="group absolute inset-0 flex items-center justify-center"
            aria-label="Riproduci il video"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary/90 text-primary-foreground shadow-lg transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              <PlayCircle className="size-10" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function Libro() {
  return (
    <section id="libro" className="relative overflow-hidden border-y border-primary-foreground/10 bg-primary py-20 text-primary-foreground lg:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${patternNavy})` }}
      />
      <div className="container-politico relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Cosa succede davvero a Bruxelles?
          </h2>
          <p className="mt-3 text-xl italic text-accent">Lo racconto nel mio nuovo libro</p>
        </div>

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-3xl" />
            <img
              src={libroCover}
              alt="Copertina del libro «La mia esperienza in Europa»"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative mx-auto w-full max-w-sm object-contain drop-shadow-2xl"
            />
          </div>

          <div>
            <p className="text-lg leading-relaxed text-primary-foreground/85">
              Il problema del potere delle lobby, e non solo. In «La mia esperienza in Europa»
              racconto dodici anni dentro il Parlamento europeo: corridoi ovattati, decisioni
              invisibili e poteri che agiscono lontano dai riflettori.
            </p>
            <p className="mt-4 leading-relaxed text-primary-foreground/70">
              Un viaggio diretto nelle dinamiche dell’Unione, tra ideali proclamati e realtà vissute:
              burocrazia, compromessi e silenzi strategici. Un libro per chi vuole guardare oltre la
              superficie.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "288 pagine, con prefazione istituzionale inedita",
                "I retroscena dei principali dossier europei",
                "Disponibile in cartaceo, ebook e audiolibro",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-primary-foreground/90">
                  <Check className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-3xl font-bold">€ 19,90</p>
                <p className="text-xs text-primary-foreground/60">Spedizione gratuita in Italia</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <Link to="/libro">
                    Acquista ora
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link to="/libro">Leggi un estratto</Link>
                </Button>
              </div>
            </div>

            <div className="mt-10 flex items-start gap-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-5">
              <Quote className="size-5 shrink-0 text-accent" />
              <div>
                <p className="text-sm italic leading-relaxed text-primary-foreground/90">
                  «Un racconto lucido e necessario del funzionamento reale delle istituzioni europee.»
                </p>
                <p className="mt-2 flex items-center gap-2 text-xs text-primary-foreground/60">
                  <span className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3 fill-current" />
                    ))}
                  </span>
                  Recensione editoriale
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Post = {
  image: string;
  date: string;
  tags: string[];
  title: string;
  description: string;
};

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to="/comunicati"
      className="group relative flex min-h-[24rem] flex-col justify-end overflow-hidden border border-primary/15 bg-primary shadow-md"
    >
      <img
        src={post.image}
        alt={post.title}
        width={1280}
        height={800}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/10" />
      <div className="relative flex flex-col p-6 text-primary-foreground">
        <div className="mb-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="border-l-2 border-accent pl-2 text-[0.7rem] font-semibold uppercase tracking-wider text-accent">
              {tag}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs text-primary-foreground/65">
          <Calendar className="size-3.5" />
          {post.date}
        </span>
        <h3 className="mt-3 text-lg font-semibold leading-snug transition-colors group-hover:text-accent">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{post.description}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
          Leggi tutto
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

function PostSection({
  eyebrow,
  title,
  description,
  posts,
  tinted,
}: {
  eyebrow: string;
  title: string;
  description: string;
  posts: Post[];
  tinted?: boolean;
}) {
  return (
    <section className={tinted ? "bg-secondary/40 py-16 lg:py-24" : "py-16 lg:py-24"}>
      <div className="container-politico">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/comunicati" className="gap-2">
              Vedi altro
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Articoli() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground lg:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${patternNavy})` }}
      />
      <div className="container-politico relative">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Sulla stampa</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Articoli recenti</h2>
            <p className="mt-4 text-lg text-primary-foreground/75">
              Editoriali e interventi pubblicati sulle testate italiane ed europee.
            </p>
          </div>
          <Button
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <Link to="/articoli" className="gap-2">
              Mostra altri articoli
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-px overflow-hidden border border-primary-foreground/15 bg-primary-foreground/15 md:grid-cols-2">
          {articoli.map((item) => (
            <Link
              key={item.title}
              to="/articoli"
              className="group flex flex-col bg-primary p-6 transition-colors hover:bg-primary-foreground/5"
            >
              <div className="flex items-center gap-3 text-xs text-primary-foreground/60">
                <span className="inline-flex items-center gap-1.5 font-semibold text-accent">
                  <Newspaper className="size-3.5" />
                  {item.source}
                </span>
                <span className="h-1 w-1 rounded-full bg-primary-foreground/30" />
                <span>{item.date}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug transition-colors group-hover:text-accent">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const risorse = [
    { label: "Attività istituzionale", href: "/comunicati" },
    { label: "Attività sul territorio", href: "/comunicati" },
    { label: "Articoli recenti", href: "/articoli" },
    { label: "Il libro", href: "/libro" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="border-b border-primary-foreground/10 bg-primary-foreground/5">
        <div className="container-politico py-6 text-center text-xs leading-relaxed text-primary-foreground/60">
          Deputato al Parlamento europeo. La responsabilità esclusiva per i pareri espressi spetta
          all’autore. Questi pareri non riflettono necessariamente la posizione ufficiale del
          Parlamento europeo.
        </div>
      </div>

      <div className="container-politico py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-accent bg-accent">
                <span className="text-sm font-bold text-accent-foreground">FD</span>
              </div>
              <span className="text-lg font-semibold">Francesca Donato</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Sito ufficiale dedicato all’attività politica e istituzionale, alla divulgazione delle
              politiche europee e al lavoro sui territori.
            </p>
            <div className="mt-6 flex gap-2">
              {social.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Navigazione</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Risorse</h3>
            <ul className="mt-5 space-y-3">
              {risorse.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contatti</h3>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>Rue Wiertz 60, 1047 Bruxelles</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>+32 2 000 0000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>ufficio.stampa@esempio.eu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ufficio istituzionale. Tutti i diritti riservati.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/cookie" className="transition-colors hover:text-accent">
              Cookie
            </Link>
            <Link to="/contatti" className="transition-colors hover:text-accent">
              Trasparenza
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <Libro />
        <PostSection
          eyebrow="Il mandato"
          title="Attività istituzionale"
          description="Comunicati stampa, interrogazioni e interventi nelle commissioni europee."
          posts={attivitaIstituzionale}
        />
        <PostSection
          eyebrow="Sul campo"
          title="Attività sul territorio"
          description="Incontri, presentazioni e tavoli di lavoro con cittadini, imprese e amministrazioni."
          posts={attivitaTerritorio}
          tinted
        />
        <Articoli />
      </main>
      <Footer />
    </div>
  );
}
