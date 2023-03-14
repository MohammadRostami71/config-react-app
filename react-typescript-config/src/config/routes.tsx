import Layout from "../layout";
import { HomePage, LoginPage } from "../pages";

type elementCreatorPropsTypes = {
  Component: any;
  showHeader: boolean | undefined;
  showNavbar: boolean | undefined;
};

interface routesType {
  route: string;
  Element: any;
}

const ElementCreator = () => {
  return <div>ggffg</div>;
};

export const routes: routesType[] = [
  {
    route: "/",
    Element: HomePage,
  },
  {
    route: "/login",
    Element: LoginPage,
  },
];

const allwaysShowRoutes: string[] = [];
const beforeAuthRoutes: string[] = ["/login"];

export const filterRoutesByAuthStep = (isAuth: boolean) => {
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
