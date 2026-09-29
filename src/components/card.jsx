import { cn } from "../utils";

function Card(props) {
  return (
    <section
      className={cn(
        "bg-card text-text shadow-shadow border-border mb-4 rounded-lg border p-4 shadow-md",
        props.className,
      )}
    >
      {props.children}
    </section>
  );
}

export default Card;
