import React from "react";

interface layoutPropsType {
  showHeader?: boolean;
  showNavbar?: boolean;
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<layoutPropsType> = ({
  showHeader = false,
  showNavbar = false,
  children,
}) => {
  return (
    <div>
      {showHeader && "header"}

      {children}

      {showNavbar && "navbar"}
    </div>
  );
};

export default Layout;
