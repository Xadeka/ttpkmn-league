import "./home.css";

function Home() {
  return (
    <div className="container">
      <h1>Time Travelers Pokemon League</h1>
      <section className="link-list">
        <h2>Quick Links</h2>
        <span hidden>
          <a
            href="https://timetravelersonline.com/pages/pokemon-tcg-pitch-black-pre-release"
            target="_blank"
            rel="noopener"
          >
            📝 Pitch Black Prerelease Registration
          </a>
        </span>
        <span hidden>
          <a href="https://forms.gle/KdDwpGgSWXMvN45R8" target="_blank">
            🃏 Decklist Submission
          </a>
        </span>
        <span hidden>
          <a href="pairings.html" target="_blank" rel="noopener">
            🔗 Pairings
          </a>
        </span>
        <span>
          <a href="pairings_default.html" rel="noopener">
            🔗 Pairings
          </a>
        </span>
        <span hidden>
          <a href="standings.html" target="_blank" rel="noopener">
            📊 Standings
          </a>
        </span>
        <span hidden>
          <a
            href="https://forms.gle/mbcM8xtzFN6HCDUk6"
            target="_blank"
            rel="noopener"
            hidden
          >
            ✍️ Post Event Survey
          </a>
        </span>
        <a href="https://discord.gg/bQNVEmvh4u" target="_blank" rel="noopener">
          <img
            src="discord.png"
            style={{ width: 18, height: 18, verticalAlign: "text-bottom" }}
          />{" "}
          Time Travelers Discord
        </a>
        <a href="https://x.com/TTPKMN" target="_blank" rel="noopener">
          <img
            src="twitter.png"
            style={{ width: 18, height: 18, verticalAlign: "text-bottom" }}
          />{" "}
          League Twitter
        </a>
        <a href="event_results.html" target="_blank" rel="noopener">
          🏆 Past Event Results
        </a>
      </section>

      <section>
        <h2>Wi-Fi Info</h2>
        <p>
          <strong>Network:</strong> Time Travelers_Guest
        </p>
        <p>
          <strong>Password:</strong> TT_Guest
        </p>
      </section>

      <section>
        <h2>Upcoming Events</h2>
        <p>
          <strong>September 5:</strong> League 11:30 AM
        </p>
        <p>
          <strong>September 12:</strong> League 11:30 AM
        </p>
        <p>
          <strong>September 12:</strong> Gym Leader Challenge 2:00 PM
        </p>
        <p>
          <strong>September 19:</strong> League 11:30 AM
        </p>
        <p>
          <strong>September 26:</strong> League Challenge 12:00 PM
        </p>
      </section>

      <section>
        <h2>September League Challenge</h2>
        <p>
          <strong>Location:</strong> 3116 12 Mile Road, Berkley, MI 48072
        </p>
        <p>
          <strong>Date:</strong> September 26, 2026
        </p>
        <p>
          <strong>Time:</strong> Round 1 starts at 12:05 PM. Store opens at
          11:00 AM. If you do not have your decklist submitted by noon, you will
          receive a loss for round 1.
        </p>
        <p>
          <strong>Rounds:</strong> X Swiss rounds&mdash;best of one&mdash;30
          minutes + 3 turns
        </p>
        <p>
          <strong>Staff:</strong> Hunter Potter
        </p>
      </section>

      <section>
        <h2>Championship Points Table (League Challenge)</h2>
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
          <a
            href="https://championships.pokemon.com/en-us/about/league-challenges-and-league-cup"
            target="_blank"
          >
            Source
          </a>
        </small>
      </section>
    </div>
  );
}

export default Home;
