import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cream lace-pattern">

      {/* Accent bar */}
      <div className="w-full h-1 bg-bordo" />

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center py-band px-6 text-center">

        {/* Logos */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <Image
            src="/logo-casa-renda.png"
            alt="Casa Rendá"
            width={72}
            height={90}
            priority
          />
          <div className="w-px h-14 bg-bordo/20" />
          <Image
            src="/logo-clara.png"
            alt="Clara Guimarães"
            width={110}
            height={72}
            priority
            unoptimized
          />
        </div>

        {/* Label */}
        <p className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-turquesa mb-4">
          Processo Seletivo 2026
        </p>

        {/* Main heading */}
        <h1 className="font-serif font-bold text-bordo leading-tight mb-6"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}>
          Monitoria<br />Casa Rendá
        </h1>

        {/* Divider */}
        <div className="dot-divider mb-8 justify-center">
          <span className="bg-bordo" />
          <span className="bg-turquesa" />
          <span className="bg-laranja" />
        </div>

        {/* Subtitle */}
        <p className="font-sans text-text-muted text-lg max-w-sm leading-relaxed">
          Resultado do processo seletivo com a professora{" "}
          <span className="text-bordo font-semibold">Clara Guimarães</span>.
        </p>

      </main>

      {/* Footer strip */}
      <footer className="w-full py-6 px-6 border-t border-bordo/10 text-center">
        <p className="text-text-muted text-sm font-sans">
          Casa Rendá &middot; Forró &middot; 2026
        </p>
      </footer>

    </div>
  );
}
