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
        <ul>
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
          <strong>Network:</strong> Time Travelers_Guest
        </Paragraph>
        <Paragraph>
          <strong>Password:</strong> TT_Guest
        </Paragraph>
      </Card>

      <Card>
        <Heading2>Upcoming Events</Heading2>
        <Paragraph>
          <strong>September 5:</strong> League 11:30 AM
        </Paragraph>
        <Paragraph>
          <strong>September 12:</strong> League 11:30 AM
        </Paragraph>
        <Paragraph>
          <strong>September 12:</strong> Gym Leader Challenge 2:00 PM
        </Paragraph>
        <Paragraph>
          <strong>September 19:</strong> League 11:30 AM
        </Paragraph>
        <Paragraph>
          <strong>September 26:</strong> League Challenge 12:00 PM
        </Paragraph>
      </Card>

      <Card>
        <Heading2>September League Challenge</Heading2>
        <Paragraph>
          <strong>Location:</strong> 3116 12 Mile Road, Berkley, MI 48072
        </Paragraph>
        <Paragraph>
          <strong>Date:</strong> September 26, 2026
        </Paragraph>
        <Paragraph>
          <strong>Time:</strong> Round 1 starts at 12:05 PM. Store opens at
          11:00 AM. If you do not have your decklist submitted by noon, you will
          receive a loss for round 1.
        </Paragraph>
        <Paragraph>
          <strong>Rounds:</strong> X Swiss rounds&mdash;best of one&mdash;30
          minutes + 3 turns
        </Paragraph>
        <Paragraph>
          <strong>Staff:</strong> Hunter Potter
        </Paragraph>
      </Card>

      <Card>
        <Heading2>Championship Points Table (League Challenge)</Heading2>
        <table
          style={{ "border-collapse": "collapse", width: "100%", border: 0 }}
        >
          <colgroup>
            <col style={{ width: "33.3328%" }} />
            <col style={{ width: "33.3328%" }} />
            <col style={{ width: "33.3328%" }} />
          </colgroup>
          <thead>
            <tr>
              <th>
                <strong>Placement</strong>
              </th>
              <th>
                <strong>Kicker (# of players)</strong>
              </th>
              <th>
                <strong>Points</strong>
              </th>
            </tr>
          </thead>
          <tbody>
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
        <small>
          <Link
            to="https://championships.pokemon.com/en-us/about/league-challenges-and-league-cup"
            target="_blank"
          >
            Source
          </Link>
        </small>
      </Card>
    </div>
  );
}

export default Home;
