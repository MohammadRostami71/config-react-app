const Layout = ({
  showHeader = false,
  showNavbar = false,
  Component,
  componentProps,
}) => {
  return (
    <div>
      {showHeader && "header"}

      <Component {...componentProps} />

      {showNavbar && "navbar"}
    </div>
  );
};

export default Layout;
