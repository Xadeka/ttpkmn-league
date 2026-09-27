import { Link as ReactRouterLink } from "react-router";

function Link(props) {
  const { children, ...rest } = props;

  return <ReactRouterLink {...rest}>{children}</ReactRouterLink>;
}

export default Link;
