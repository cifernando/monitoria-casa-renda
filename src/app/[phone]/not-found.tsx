import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen lace-pattern">
      <div className="text-center space-y-4 px-8">
        <h1 className="font-serif text-3xl text-bordo font-bold">
          Página não encontrada
        </h1>
        <p className="text-text-muted">
          Esse link não corresponde a nenhum resultado.
        </p>
        <Link href="/" className="text-turquesa underline text-sm">
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
