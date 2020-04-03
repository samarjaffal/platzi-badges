import React from "react";
import {
  HashRouter,
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Layout from "./Layout";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route
            exact
            path="/badges/:badgeId"
            component={BadgeDetailsContainer}
          />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default App;

export const routes = {
  home: "/",
  404: "/404",
  badges: {
    create: "/badges/new"
  }
};
