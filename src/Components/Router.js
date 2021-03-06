import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Coins from "../Screens/Coins/";
import Exchanges from "../Screens/Exchanges/";
import Prices from "../Screens/Prices/";

const Routers = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Prices} />
      <Route path="/exchanges" component={Exchanges} />
      <Route path="/coins" exact component={Coins} />
    </Router>
  );
};

export default Routers