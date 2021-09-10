import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/navbar/Sidebar";
import {
  BrowserRouter as Router, //kolekcija navigacionih komponenti
  Switch, //ukljucuje ili iskljucuje stanje jednog podesavanja
  Route, //za rute
  Redirect,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Car from "./components/pages/Car";

function App() {
  const [car, setCar] = useState({});

  const getCar = (auto) => {
    console.log("A car is clicked:", auto);
    setCar(auto);
  };

  return (
    <div className="App">
      <Router>
        <Sidebar clickCar={getCar} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route
            exact
            path="/car"
            render={(props) => <Car carToShow={car} />}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
