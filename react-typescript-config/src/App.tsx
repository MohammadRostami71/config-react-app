import { Navigate, Route, Routes } from "react-router-dom";
import { filterRoutesByAuthStep } from "./config/routes";

function App() {
  const routes = filterRoutesByAuthStep(false);

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
