import React from "react";
import { Signup } from "./components/Signup/signup";
import { Login } from "./components/Login/login";
import { Home } from "./hoc/home";
import { DetailPage } from "./components/detail-Page/detailPage";
import ProtectedRoute from "./hoc/protectedRoute";
import RootContext from "./Context/rootContext";
import Header from "./components/Header/header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
} from "react-router-dom";

function App() {
  return (
    <RootContext>
      <Router>
        <div className="App">
          <Switch>
            <ProtectedRoute path="/home">
              <Home />
            </ProtectedRoute>
            <ProtectedRoute path="/detail:id">
              <Header>
                <DetailPage />
              </Header>
            </ProtectedRoute>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </RootContext>
  );
}

export default App;
