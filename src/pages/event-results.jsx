import Link from "../components/link";
import { Heading2, Paragraph } from "../components/typography";
import Card from "../components/card";

function EventResults() {
  return (
    <>
      <div className="mb-4 flex">
        <Link
          className="hover:bg-link-hover hover:text-bg hover:outline-link-hover rounded-md px-3 py-1 outline transition-colors duration-150"
          to="/"
        >
          ← Back
        </Link>
      </div>
      <div className="m-auto max-w-2xl">
        <Heading2 className="text-center">Past Tournament Results</Heading2>
        <ResultCard name="League Challenge" datetime="2026-09-26 00:00" />
        <ResultCard name="League Challenge" datetime="2026-09-26 00:00" />
        <ResultCard name="League Challenge" datetime="2026-09-26 00:00" />
        <ResultCard name="League Challenge" datetime="2026-09-26 00:00" />
      </div>
    </>
  );
}

function ResultCard(props) {
  const date = new Date(props.datetime).toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <Card className="mb-3 flex w-full items-center justify-between">
      <Paragraph className="mb-0 font-bold">
        {props.name} – {date}
      </Paragraph>
      <div className="flex gap-2">
        <Link className="hover:bg-link-hover hover:text-bg hover:outline-link-hover rounded-md px-3 py-1 outline transition-colors duration-150">
          Results
        </Link>
        <Link className="hover:bg-link-hover hover:text-bg hover:outline-link-hover rounded-md px-3 py-1 outline transition-colors duration-150">
          Decklists
        </Link>
      </div>
    </Card>
  );
}

export default EventResults;
