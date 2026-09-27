function Card(props) {
  return (
    <section className="bg-card text-text shadow-shadow border-border mb-4 rounded-lg border p-4 shadow-md">
      {props.children}
    </section>
  );
}

export default Card;
