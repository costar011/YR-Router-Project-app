import React from "react";
import "./styles/styles.css";
import { Route } from "react-router-dom";
import Navigation from "./Layouts/Navigation";
import Main from "./Screens/Main";
import Main1 from "./Screens/Main1";
import Main2 from "./Screens/Main2";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <Route path="/" component={Navigation} />
        </div>

        <div className="app__main">
          <Route exact path="/main" component={Main} />
          <Route exact path="/main1" component={Main1} />
          <Route exact path="/main2" component={Main2} />
        </div>
      </div>
    );
  }
}
export default App;
