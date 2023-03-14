import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { filterRoutesByAuthStep } from "./config/routes";
import { isAuthSelector } from "./store/user/auth.selectors";

function App() {
  const isAuth = useSelector(isAuthSelector);
  const routes = filterRoutesByAuthStep(isAuth);

  return (
    <Routes>
      {routes.map((item) => {
        return (
          <Route path={item.route} element={item.Element} key={item.route} />
        );
      })}
      <Route path="*" element={<Navigate replace to={routes[0].route} />} />
    </Routes>
  );
}

export default App;
