import Link from "../components/link";
import { Heading1, Heading2, Paragraph } from "../components/typography";
import Card from "../components/card";
import ChampionshipPointsTable from "../components/championship-points-table";
import { Discord, Twitter } from "../components/icons";
import { eventTypeToName } from "../utils";

function Home() {
  return (
    <div className="m-auto max-w-150">
      <Heading1>Time Travelers Pokemon League</Heading1>
      <Card>
        <Heading2>Quick Links</Heading2>
        <ul className="space-y-1">
          <li hidden>
            <Link to="https://forms.gle/LnbFK8dgU6KtwSYK8" target="_blank">
              🃏 Decklist Submission
            </Link>
          </li>
          <li hidden>
            <Link to="pairings.html" target="_blank">
              🔗 Pairings
            </Link>
          </li>
          <li>
            <Link to="pairings-default">🔗 Pairings</Link>
          </li>
          <li hidden>
            <Link to="standings.html" target="_blank">
              📊 Standings
            </Link>
          </li>
          <li hidden>
            <Link to="https://forms.gle/mbcM8xtzFN6HCDUk6" target="_blank">
              ✍️ Post Event Survey
            </Link>
          </li>
          <li>
            <Link to="https://discord.gg/bQNVEmvh4u" target="_blank">
              <Discord /> Time Travelers Discord
            </Link>
          </li>
          <li>
            <Link to="https://x.com/TTPKMN" target="_blank">
              <Twitter /> League Twitter
            </Link>
          </li>
          <li>
            <Link to="event_results.html" target="_blank">
              🏆 Past Event Results
            </Link>
          </li>
        </ul>
      </Card>

      <Card>
        <Heading2>Wi-Fi Info</Heading2>
        <Paragraph>
          <span className="font-bold">Network:</span> Time Travelers_Guest
        </Paragraph>
        <Paragraph>
          <span className="font-bold">Password:</span> TT_Guest
        </Paragraph>
      </Card>

      <Card>
        <Heading2>Upcoming Events</Heading2>
        <ScheduledEventText datetime="2026-10-03 11:30" type="league" />
        <Paragraph>
          <span className="font-bold">No League October 10</span>
        </Paragraph>
        <ScheduledEventText datetime="2026-10-17 12:00" type="challenge" />
        <ScheduledEventText
          datetime="2026-10-24 12:00"
          type="Delta Reign Prerelease"
        />
        <ScheduledEventText
          datetime="2026-10-25 12:30"
          type="Delta Reign Prerelease"
        />
        <ScheduledEventText
          datetime="2026-10-31 11:30"
          type="League (Pokeween!)"
        />
        <ScheduledEventText
          datetime="2026-11-01 12:30"
          type="Delta Reign Prerelease"
        />
      </Card>

      <Card>
        <Heading2>October League Challenge</Heading2>
        <Paragraph>
          <span className="font-bold">Location:</span> 3116 12 Mile Road,
          Berkley, MI 48072
        </Paragraph>
        <Paragraph>
          <span className="font-bold">Date:</span> October 17, 2026
        </Paragraph>
        <Paragraph>
          <span className="font-bold">Time:</span> Round 1 starts at 12:05 PM.
          Store opens at 11:00 AM. If you do not have your decklist submitted by
          noon, you will receive a loss for round 1.
        </Paragraph>
        <Paragraph>
          <span className="font-bold">Rounds:</span> X Swiss rounds&mdash;best
          of one&mdash;30 minutes + 3 turns
        </Paragraph>
        <Paragraph>
          <span className="font-bold">Staff:</span> Conor Devins
        </Paragraph>
      </Card>

      <Card>
        <ChampionshipPointsCardContent type="challenge" />
      </Card>
    </div>
  );
}

function ScheduledEventText(props) {
  const datetime = new Date(props.datetime);
  const monthDay = datetime.toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const time = datetime.toLocaleString("default", {
    timeStyle: "short",
  });
  return (
    <Paragraph>
      <span className="font-bold">{monthDay}:</span>{" "}
      {eventTypeToName(props.type)} {time}
    </Paragraph>
  );
}

function ChampionshipPointsCardContent(props) {
  const eventName = eventTypeToName(props.type);
  return (
    <>
      <Heading2>Championship Points Table ({eventName})</Heading2>
      <ChampionshipPointsTable type={props.type} />
      <hr />
      <Link
        className="text-sm"
        to="https://championships.pokemon.com/en-us/about/league-challenges-and-league-cup"
        target="_blank"
      >
        Source
      </Link>
    </>
  );
}

export default Home;
