import AppCars from "./pages/AppCars";
import AddCar from "./pages/AddCar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <h2 className="logo">OldTimer</h2>
          <ul className="navbar">
            <li>
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/cars">
                Cars
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/add">
                Add
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/cars">
            <AppCars />
          </Route>
          <Route path="/add">
            <AddCar />
          </Route>
          <Route path="/edit/:id">
            <AddCar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
