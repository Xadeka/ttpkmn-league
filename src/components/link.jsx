import { Link as ReactRouterLink } from "react-router";

function Link(props) {
  const { children, hidden, ...rest } = props;

  if (hidden) {
    return null;
  }

  return <ReactRouterLink {...rest}>{children}</ReactRouterLink>;
}

export default Link;
