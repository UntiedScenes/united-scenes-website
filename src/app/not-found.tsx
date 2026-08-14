import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className="wrap py-24 md:py-36">
        <p className="eyebrow">404</p>
        <h1 className="heading mt-3 text-4xl md:text-6xl">
          Deze scène bestaat niet.
        </h1>
        <p className="mt-4 max-w-md text-lg text-muted">
          De pagina die je zoekt is verplaatst of nooit gedraaid.
        </p>
        <div className="mt-8 flex flex-wrap gap-6">
          <Link href="/" className="btn btn-accent">
            Naar de homepage
          </Link>
          <Link href="/cases" className="link-arrow">
            bekijk ons werk
          </Link>
        </div>
      </div>
    </section>
  );
}
