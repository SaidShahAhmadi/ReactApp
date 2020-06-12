import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./componets/movies";
import MovieForm from "./componets/moviesForm";
import Customers from "./componets/customers";
import Rentals from "./componets/rentals";
import NotFound from "./componets/not-found";
import NavBar from "./componets/navbar";
import RegisterForm from "./componets/registerForm";
import LoginForm from "./componets/loginForm";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        {/* <Movies /> */}
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          {/* //it should be down */}
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
