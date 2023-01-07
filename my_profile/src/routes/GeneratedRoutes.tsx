import { ReactNode } from "react";
import { Route } from "react-router-dom";
import PageWrapper from "../components/layouts/PageWrapper";
import AppRoutes from "./AppRoutes";
import { RouteType0 } from "./config";

const generateRoute = (routes: RouteType0[]): ReactNode => {
  return routes.map((route, index) => (
    route.index ? (
      <Route
        index
        path={route.path}
        element={<PageWrapper state={route.state}>
          {route.element}
        </PageWrapper>}
        key={index}
      />
    ) : (
      <Route
        path={route.path}
        element={
          <PageWrapper state={route.child ? undefined : route.state}>
            {route.element}
          </PageWrapper>
        }
        key={index}
      >
        {route.child && (
          generateRoute(route.child)
        )}
      </Route>
    )
  ));
};

export const GeneratedRoutes: ReactNode = generateRoute(AppRoutes);