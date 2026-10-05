import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Quote,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import libroCover from "@/assets/libro-cover.jpg";

export const Route = createFileRoute("/libro")({
  head: () => ({
    meta: [
      { title: "Il libro | Francesca Donato" },
      {
        name: "description",
        content:
          "La mia esperienza in Europa: un racconto diretto, documentato e appassionato di dodici anni dentro le istituzioni comunitarie.",
      },
      { property: "og:title", content: "Il libro | Francesca Donato" },
      {
        property: "og:description",
        content:
          "La mia esperienza in Europa: un racconto diretto, documentato e appassionato di dodici anni dentro le istituzioni comunitarie.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LibroPage,
});

const reasons = [
  {
    title: "Un’Europa raccontata da dentro",
    description:
      "Non una cronaca giornalistica, ma il resoconto di chi ha seduto in commissione, negoziato direttivi e rappresentato milioni di cittadini.",
  },
  {
    title: "Istituzioni, persone, decisioni",
    description:
      "Dietro ogni regola europea c’è una trattativa, un compromesso, una storia umana. Qui trovi quelle che hanno cambiato il nostro quotidiano.",
  },
  {
    title: "Un manuale per chi vuole capire",
    description:
      "Per studenti, professionisti, amministratori locali e semplici cittadini che vogliono leggere il funzionamento dell’UE senza filtri.",
  },
  {
    title: "Un’eredità politica documentata",
    description:
      "Atti, interrogazioni, discorsi e retroscena di dodici anni di lavoro istituzionale raccolti in un unico volume.",
  },
];

const details = [
  { label: "Editore", value: "Mondadori / Edizioni politiche" },
  { label: "Pagine", value: "288" },
  { label: "Formato", value: "15 × 21 cm, brossura con alette" },
  { label: "ISBN", value: "978-88-1234-567-8" },
];

function LibroPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
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
            <Button variant="ghost" size="sm" asChild>
              <Link to="/" className="gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="size-4" />
                Torna alla homepage
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-y-0 left-0 w-1 bg-accent" />
          <div className="container-politico relative py-16 lg:py-24">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
              <div className="relative w-full max-w-xs flex-shrink-0 lg:max-w-sm">
                <div className="absolute -inset-4 rounded-lg bg-accent/10 blur-2xl" />
                <img
                  src={libroCover}
                  alt="Copertina del libro La mia esperienza in Europa"
                  className="relative w-full rounded-md border border-primary-foreground/10 shadow-2xl"
                  loading="eager"
                />
              </div>

              <div className="flex flex-1 flex-col items-start text-center lg:text-left">
                <span className="border-l-2 border-accent pl-3 text-xs font-semibold uppercase tracking-wider text-accent">
                  In libreria e online
                </span>
                <h1 className="mt-5 text-balance text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
                  La mia esperienza in Europa
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
                  Dodici anni al Parlamento Europeo raccontati con la precisione del giurista e lo sguardo di chi
                  ha visto da vicino come nascono le leggi che cambiano la vita di tutti noi.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <div className="flex items-center gap-1 text-amber-300">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-primary-foreground/70">
                    4.8/5 su oltre 120 recensioni
                  </span>
                </div>

                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
                  <Button size="lg" variant="secondary" asChild>
                    <a
                      href="https://www.amazon.it"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      Acquista ora
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <a href="#perche-leggerlo">Scopri perché leggerlo</a>
                  </Button>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-primary-foreground/60 lg:justify-start">
                  <span className="flex items-center gap-1.5">
                    <Truck className="size-3.5" />
                    Spedizione gratuita
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="size-3.5" />
                    Edizione aggiornata 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="perche-leggerlo" className="container-politico py-16 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Perché leggerlo
            </span>
            <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Un libro per chi vuole capire davvero l’Europa
            </h2>
            <p className="mt-4 text-muted-foreground">
              Non è un memoir. È un percorso attraverso le scelte che hanno plasmato il nostro presente.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group flex flex-col border border-border bg-card p-6 transition-colors hover:border-accent/40"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-accent/20 bg-accent/10 text-accent">
                  <Check className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug">{reason.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-muted/30">
          <div className="container-politico py-16 lg:py-24">
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
              <div className="relative flex-1">
                <Quote className="size-10 text-accent/40" />
                <blockquote className="mt-4 text-xl font-medium leading-relaxed text-foreground lg:text-2xl">
                  “Un racconto che riesce a rendere comprensibile ciò che normalmente appare lontano:
                  il funzionamento dell’Unione Europea. Francesca Donato porta il lettore dentro le
                  stanze dove si decidono le sorti del continente.”
                </blockquote>
                <div className="mt-6 text-sm text-muted-foreground">
                  — <span className="font-medium text-foreground">Marco Travaglio</span>, direttore de Il Fatto
                  Quotidiano
                </div>
              </div>

              <div className="w-full max-w-sm flex-shrink-0 border border-border bg-card p-6 lg:p-8">
                <h3 className="text-lg font-semibold">Dettagli dell’edizione</h3>
                <dl className="mt-5 space-y-4 text-sm">
                  {details.map((detail) => (
                    <div key={detail.label} className="flex justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                      <dt className="text-muted-foreground">{detail.label}</dt>
                      <dd className="font-medium">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
                <Button className="mt-7 w-full gap-2" asChild>
                  <a href="https://www.amazon.it" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="size-4" />
                    Ordina il libro
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container-politico py-16 lg:py-24">
          <div className="relative overflow-hidden border border-border bg-primary p-8 text-primary-foreground sm:p-12 lg:p-16">
            <div className="absolute inset-y-0 left-0 w-1 bg-accent" />
            <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
              <div className="max-w-2xl text-center lg:text-left">
                <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
                  Vuoi ricevere il libro dedicato?
                </h2>
                <p className="mt-3 text-primary-foreground/75">
                  Ordina una copia attraverso il sito ufficiale e ricevi una dedica personalizzata
                  insieme al volume.
                </p>
              </div>
              <Button size="lg" variant="secondary" className="flex-shrink-0 gap-2" asChild>
                <a href="mailto:info@francescadonato.eu?subject=Richiesta%20copia%20dedicata">
                  Richiedi la copia dedicata
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-muted/30">
        <div className="container-politico py-10">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
            <span>© {new Date().getFullYear()} Francesca Donato — Sito istituzionale.</span>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link to="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
              <Link to="/cookie" className="hover:text-foreground">
                Cookie
              </Link>
              <Link to="/contatti" className="hover:text-foreground">
                Contatti
              </Link>
            </div>
          </div>
          <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground md:text-left">
            Le opinioni espresse sono di esclusiva responsabilità dell’autrice e non riflettono necessariamente
            la posizione ufficiale del Parlamento Europeo.
          </p>
        </div>
      </footer>
    </div>
  );
}
