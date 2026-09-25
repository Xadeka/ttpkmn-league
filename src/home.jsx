import Link from "./components/link";
import { Heading1, Heading2, Paragraph } from "./components/typography";
import "./home.css";

function Home() {
  return (
    <div className="container">
      <Heading1>Time Travelers Pokemon League</Heading1>
      <section className="link-list">
        <Heading2>Quick Links</Heading2>
        <span hidden>
          <Link
            href="https://timetravelersonline.com/pages/pokemon-tcg-pitch-black-pre-release"
            target="_blank"
          >
            📝 Pitch Black Prerelease Registration
          </Link>
        </span>
        <span hidden>
          <Link href="https://forms.gle/KdDwpGgSWXMvN45R8" target="_blank">
            🃏 Decklist Submission
          </Link>
        </span>
        <span hidden>
          <Link href="pairings.html" target="_blank">
            🔗 Pairings
          </Link>
        </span>
        <span>
          <Link href="pairings_default.html" rel="noopener">
            🔗 Pairings
          </Link>
        </span>
        <span hidden>
          <Link href="standings.html" target="_blank">
            📊 Standings
          </Link>
        </span>
        <span hidden>
          <Link
            href="https://forms.gle/mbcM8xtzFN6HCDUk6"
            target="_blank"
            hidden
          >
            ✍️ Post Event Survey
          </Link>
        </span>
        <Link href="https://discord.gg/bQNVEmvh4u" target="_blank">
          <img
            src="discord.png"
            style={{ width: 18, height: 18, verticalAlign: "text-bottom" }}
          />{" "}
          Time Travelers Discord
        </Link>
        <Link href="https://x.com/TTPKMN" target="_blank">
          <img
            src="twitter.png"
            style={{ width: 18, height: 18, verticalAlign: "text-bottom" }}
          />{" "}
          League Twitter
        </Link>
        <Link href="event_results.html" target="_blank">
          🏆 Past Event Results
        </Link>
      </section>

      <section>
        <Heading2>Wi-Fi Info</Heading2>
        <Paragraph>
          <strong>Network:</strong> Time Travelers_Guest
        </Paragraph>
        <Paragraph>
          <strong>Password:</strong> TT_Guest
        </Paragraph>
      </section>

      <section>
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
      </section>

      <section>
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
      </section>

      <section>
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
            href="https://championships.pokemon.com/en-us/about/league-challenges-and-league-cup"
            target="_blank"
          >
            Source
          </Link>
        </small>
      </section>
    </div>
  );
}

export default Home;
