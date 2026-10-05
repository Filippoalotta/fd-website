import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/comunicati")({
  head: () => ({
    meta: [
      { title: "Comunicati Stampa | Sito Istituzionale" },
      { name: "description", content: "Comunicati stampa, interventi e aggiornamenti istituzionali." },
      { property: "og:title", content: "Comunicati Stampa | Sito Istituzionale" },
      { property: "og:description", content: "Comunicati stampa, interventi e aggiornamenti istituzionali." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ComunicatiPage,
});

function ComunicatiPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border">
        <div className="container-politico flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
              <span className="text-lg font-bold text-primary-foreground">E</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Europa<span className="text-accent">.</span>
            </span>
          </Link>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Comunicati Stampa</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Archivio completo dei comunicati stampa e degli interventi pubblici.
          </p>
          <Button className="mt-8 gap-2" asChild>
            <Link to="/">
              <ArrowLeft className="size-4" />
              Torna alla homepage
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
