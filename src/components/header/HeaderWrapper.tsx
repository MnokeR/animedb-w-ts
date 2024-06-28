interface HeaderWrapperProps {
  children: React.ReactElement;
}

function HeaderWrapper({ children }: HeaderWrapperProps) {
  return <div>{children}</div>;
}

export default HeaderWrapper;
