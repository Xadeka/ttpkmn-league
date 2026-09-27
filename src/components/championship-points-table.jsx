const EVENT_CHAMPIONSHIP_POINTS_DATA = {
  challenge: [
    { placement: "1", kicker: 0, points: 15 },
    { placement: "2", kicker: 4, points: 12 },
    { placement: "3–4", kicker: 8, points: 10 },
    { placement: "5–8", kicker: 14, points: 8 },
    { placement: "9–16", kicker: 25, points: 6 },
    { placement: "17–32", kicker: 48, points: 4 },
  ],
  cup: [
    { placement: "1", kicker: 0, points: 50 },
    { placement: "2", kicker: 4, points: 40 },
    { placement: "3–4", kicker: 8, points: 32 },
    { placement: "5–8", kicker: 17, points: 25 },
    { placement: "9–16", kicker: 48, points: 20 },
    { placement: "17–32", kicker: 80, points: 16 },
    { placement: "33–64", kicker: 128, points: 13 },
  ],
};

function ChampionshipPointsTable(props) {
  const data = EVENT_CHAMPIONSHIP_POINTS_DATA[props.type];
  return (
    <table className="w-full">
      <thead className="[&_th]:p-1 [&_th]:text-start [&_th]:font-bold">
        <tr>
          <th>Placement</th>
          <th>Kicker (# of players)</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody className="[&_td]:p-1">
        {data.map((row) => {
          return (
            <tr key={row.placement}>
              <td>{row.placement}</td>
              <td>{row.kicker}</td>
              <td>{row.points}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ChampionshipPointsTable;
