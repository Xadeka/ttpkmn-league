import { Link as ReactRouterLink } from "react-router";
import { cn } from "../utils";

function Link(props) {
  const { className, children, ...rest } = props;

  return (
    <ReactRouterLink
      className={cn("text-link hover:text-link-hover", className)}
      {...rest}
    >
      {children}
    </ReactRouterLink>
  );
}

export default Link;
