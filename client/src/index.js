import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { render } from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import theme from "./theme";
import { Provider } from "./helpers/useContext";

const queryClient = new QueryClient();

const AppComponent = () => {
  const [context, setContext] = useState({});

  const updateContext = (newStateItem) => {
    const newContext = { ...context, ...newStateItem };
    setContext(newContext);
  };

  return (
    <Provider value={{ ...context, updateContext }}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            {Object.keys(routes).map((routeKey) => {
              const route = routes[routeKey];
              const Component = route.component;
              const { path } = route;
              return (
                <Route exact path={path} key={routeKey}>
                  <Component />
                </Route>
              );
            })}
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

render(
  <QueryClientProvider client={queryClient}>
    <AppComponent />
  </QueryClientProvider>,
  document.getElementById("root")
);
