import Link from "../components/link";
import { Paragraph } from "../components/typography";

function PairingsDefault() {
  return (
    <div className="flex min-h-48 flex-col items-start justify-between">
      <Link
        className="hover:bg-link-hover hover:text-bg hover:outline-link-hover rounded-md px-3 py-1 outline transition-colors duration-150"
        to="/"
      >
        ← Back
      </Link>
      <Paragraph className="mb-2 self-center text-lg">
        Pairings will be available here when round 1 begins.
      </Paragraph>
    </div>
  );
}

export default PairingsDefault;
