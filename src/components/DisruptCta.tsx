import Link from "next/link";
import ArrowCircle from "@/components/ArrowCircle";

export default function DisruptCta() {
  return (
    <Link
      href="/contact"
      className="group fixed bottom-10 right-14 z-50 hidden items-center gap-3 rounded-full bg-accent py-4 pl-6 pr-2 font-text text-base leading-none text-ink shadow-lg lg:flex"
    >
      wanna disrupt?
      <ArrowCircle className="h-11 w-11" />
    </Link>
  );
}
