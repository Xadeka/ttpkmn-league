import { Link as ReactRouterLink } from "react-router";

function Link(props) {
  const { children, ...rest } = props;

  return (
    <ReactRouterLink className="text-link hover:text-link-hover" {...rest}>
      {children}
    </ReactRouterLink>
  );
}

export default Link;
