import { cn } from "../utils";

export function Heading1(props) {
  return (
    <h1 className="text-accent m-0 mb-4 text-center text-3xl font-bold">
      {props.children}
    </h1>
  );
}

export function Heading2(props) {
  return <h2 className="m-0 mb-3 text-xl font-bold">{props.children}</h2>;
}

export function Paragraph(props) {
  const { className, children, ...restProps } = props;
  return (
    <p className={cn("mb-2 last:mb-0", className)} {...restProps}>
      {children}
    </p>
  );
}
