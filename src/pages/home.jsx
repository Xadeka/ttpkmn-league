import Link from "../components/link";
import { Heading1, Heading2, Paragraph } from "../components/typography";
import Card from "../components/card";
import { Discord, Twitter } from "../components/icons";
import "./home.css";

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
        <Paragraph>
          <span className="font-bold">September 5:</span> League 11:30 AM
        </Paragraph>
        <Paragraph>
          <span className="font-bold">September 12:</span> League 11:30 AM
        </Paragraph>
        <Paragraph>
          <span className="font-bold">September 12:</span> Gym Leader Challenge
          2:00 PM
        </Paragraph>
        <Paragraph>
          <span className="font-bold">September 19:</span> League 11:30 AM
        </Paragraph>
        <Paragraph>
          <span className="font-bold">September 26:</span> League Challenge
          12:00 PM
        </Paragraph>
      </Card>

      <Card>
        <Heading2>September League Challenge</Heading2>
        <Paragraph>
          <span className="font-bold">Location:</span> 3116 12 Mile Road,
          Berkley, MI 48072
        </Paragraph>
        <Paragraph>
          <span className="font-bold">Date:</span> September 26, 2026
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
          <span className="font-bold">Staff:</span> Hunter Potter
        </Paragraph>
      </Card>

      <Card>
        <Heading2>Championship Points Table (League Challenge)</Heading2>
        <table className="w-full">
          <thead className="[&_th]:p-2.5 [&_th]:text-start [&_th]:font-bold">
            <tr>
              <th>Placement</th>
              <th>Kicker (# of players)</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody className="[&_td]:p-2.5">
            <tr>
              <td>1</td>
              <td>0</td>
              <td>15</td>
            </tr>
            <tr>
              <td>2</td>
              <td>4</td>
              <td>12</td>
            </tr>
            <tr>
              <td>3–4</td>
              <td>8</td>
              <td>10</td>
            </tr>
            <tr>
              <td>5–8</td>
              <td>14</td>
              <td>8</td>
            </tr>
            <tr>
              <td>9–16</td>
              <td>25</td>
              <td>6</td>
            </tr>
            <tr>
              <td>17–32</td>
              <td>48</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <Link
          className="text-sm"
          to="https://championships.pokemon.com/en-us/about/league-challenges-and-league-cup"
          target="_blank"
        >
          Source
        </Link>
      </Card>
    </div>
  );
}

export default Home;
