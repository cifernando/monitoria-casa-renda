import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { students, getStudentByPhone } from "@/data/students";
import { StoryButton } from "./story-button";

type Props = { params: Promise<{ phone: string }> };

export async function generateStaticParams() {
  return students.map((s) => ({ phone: s.phone }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { phone } = await params;
  const student = getStudentByPhone(phone);
  if (!student) return { title: "Não encontrado" };
  return {
    title: `Parabéns, ${student.name}! — Monitoria Casa Rendá`,
    description: `${student.name} foi aprovado(a) na Monitoria Casa Rendá com Clara Guimarães.`,
  };
}

export default async function StudentPage({ params }: Props) {
  const { phone } = await params;
  const student = getStudentByPhone(phone);

  if (!student) notFound();

  const firstName = student.name.split(" ")[0];

  return (
    <div className="flex flex-col min-h-screen bg-cream lace-pattern">

      {/* Accent bar */}
      <div className="w-full h-1 bg-bordo" />

      <main className="flex-1 flex flex-col items-center w-full">

        {/* Hero section */}
        <section className="w-full flex flex-col items-center text-center py-band px-6">

          {/* Logos */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <Image
              src="/logo-casa-renda.png"
              alt="Casa Rendá"
              width={64}
              height={80}
              priority
            />
            <div className="w-px h-12 bg-bordo/20" />
            <Image
              src="/logo-clara.png"
              alt="Clara Guimarães"
              width={100}
              height={64}
              priority
              unoptimized
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-bordo text-cream text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-laranja" />
            Aprovado(a)
          </div>

          {/* Main heading */}
          <h1
            className="font-serif font-bold text-bordo leading-tight mb-4"
            style={{ fontSize: "clamp(2.75rem, 10vw, 6rem)" }}
          >
            Parabéns,<br />{firstName}!
          </h1>

          {/* Dot divider */}
          <div className="dot-divider justify-center mb-6">
            <span className="bg-bordo" />
            <span className="bg-turquesa" />
            <span className="bg-laranja" />
          </div>

          <p className="text-text-muted text-lg font-light max-w-xs leading-relaxed">
            Você foi selecionado(a) para a{" "}
            <span className="text-bordo font-semibold">Monitoria Casa Rendá 2026</span>.
          </p>
        </section>

        {/* Clara's quote */}
        <section className="w-full max-w-lg px-6 pb-12">
          <div className="bg-cream-dark rounded-2xl px-8 py-8 relative">
            <div className="absolute -top-4 left-8 text-bordo/20 font-serif text-7xl leading-none select-none">
              &ldquo;
            </div>
            <p className="text-text-dark italic text-base leading-relaxed text-center pt-4">
              A dança é feita de encontros, e que alegria ter encontrado você nesse
              caminho. Vem dançar com a gente!
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-bordo/30" />
              <p className="text-bordo font-serif text-sm">Clara Guimarães</p>
              <div className="h-px w-8 bg-bordo/30" />
            </div>
          </div>
        </section>

        {/* Full-width divider */}
        <div className="w-full flex items-center gap-4 px-6 max-w-lg">
          <div className="flex-1 h-px bg-bordo/10" />
          <div className="dot-divider">
            <span className="bg-turquesa/50 w-2 h-2" />
            <span className="bg-bordo/50 w-2 h-2" />
            <span className="bg-laranja/50 w-2 h-2" />
          </div>
          <div className="flex-1 h-px bg-bordo/10" />
        </div>

        {/* Feedback card */}
        <section className="w-full max-w-lg px-6 py-10">
          <div className="w-full bg-white rounded-2xl shadow-sm border border-bordo/10 overflow-hidden">
            <div className="bg-bordo px-6 py-4 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-laranja" />
              <h2 className="text-cream text-xs font-bold uppercase tracking-[0.2em]">
                Seu Feedback
              </h2>
            </div>
            <div className="px-6 py-8">
              <p className="text-text-dark text-base leading-loose font-light">
                {student.feedback}
              </p>
            </div>
          </div>
        </section>

        {/* Story CTA */}
        <section className="w-full max-w-lg px-6 pb-band flex flex-col items-center gap-4 text-center">
          <p className="text-text-muted text-sm font-sans">
            Compartilhe sua conquista!
          </p>
          <StoryButton studentName={student.name} feedback={student.feedback} />
        </section>

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
