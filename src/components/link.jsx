function Link(props) {
  const { href, children, hidden, ...rest } = props;

  if (hidden) {
    return null;
  }

  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}

export default Link;
