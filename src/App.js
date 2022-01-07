import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

//componentes
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchPage} />
          <Route path="*" component={Error404} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
