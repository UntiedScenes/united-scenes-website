import Link from "next/link";
import ArrowCircle from "@/components/ArrowCircle";

export default function DisruptCta() {
  return (
    <Link
      href="/contact"
      className="group button-1 light fixed bottom-10 right-14 z-30 hidden w-fit lg:flex"
    >
      wanna disrupt?
      <ArrowCircle />
    </Link>
  );
}
