import React from "react";

interface layoutPropsType {
  showHeader: boolean;
  showNavbar: boolean;
  children: JSX.Element | JSX.Element[];
}

const Layout = ({
  showHeader = false,
  showNavbar = false,
  children,
}: layoutPropsType) => {
  return (
    <div>
      {showHeader && "header"}

      {children}

      {showNavbar && "navbar"}
    </div>
  );
};

export default Layout;
