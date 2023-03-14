import Layout from "../layout";

import { HomePage, LoginPage } from "../pages";

const ElementCreator = ({ componentProps, ...layoutProps }) => {
  return <Layout {...layoutProps} componentProps={componentProps} />;
};

export const routes = [
  {
    route: "/",
    Element: ElementCreator({
      Component: HomePage,
      showHeader: true,
      showNavbar: true,
    }),
  },
  {
    route: "/login",
    Element: ElementCreator({
      Component: LoginPage,
    }),
  },
];

const allwaysShowRoutes = [];
const beforeAuthRoutes = ["/login"];

export const filterRoutesByAuthStep = (isAuth) => {
  // eslint-disable-next-line array-callback-return
  return routes.filter((item) => {
    if (!isAuth) {
      if (
        beforeAuthRoutes.includes(item.route) ||
        allwaysShowRoutes.includes(item.route)
      ) {
        return item;
      }
    } else if (
      !beforeAuthRoutes.includes(item.route) ||
      allwaysShowRoutes.includes(item.route)
    ) {
      return item;
    }
  });
};
