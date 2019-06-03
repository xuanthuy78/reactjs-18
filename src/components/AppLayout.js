import React, {Component} from "react";
import auth from "./Auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Kenh from "./Kenh";
import ProtectedRoute from "./ProtectedRoute";

export class AppLayout extends Component {
  constructor() {
    super();
  }
   onClick = () => {
    auth.logout(
      this.props.history.push("/")
    );
  }
  render() {
    return (
      <Router>
        <div>
          <h1>App Layout vào duoc roi do</h1>
          <button
            onClick={ this.onClick}
          >
            Logout
          </button>
          <Switch>
              <Route exact path="/kenh" component={Kenh} />
              <ProtectedRoute exact path="/kenh" component={Kenh} />
          </Switch>
        </div>
      </Router>
    );
  }
};

export default AppLayout;
