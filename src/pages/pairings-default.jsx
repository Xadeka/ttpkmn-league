import Link from "../components/link";
import { Paragraph } from "../components/typography";
import "./pairings-default.css";

function PairingsDefault() {
  return (
    <div className="pairings-default">
      <Paragraph>
        Pairings will be available here when round 1 begins.
      </Paragraph>
      <Link to="/">← Back</Link>
    </div>
  );
}

export default PairingsDefault;
