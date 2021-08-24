import { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import CarService from "../services/CarService";

function AppCars() {
  const history = useHistory();
  let match = useRouteMatch();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const data = await CarService.getAllCars();
      setCars(data);
    };

    fetchCars();
  }, []);

  const editPage = () => {
    history.push("/edit/:id");
  };

  return (
    <Switch>
      <Route exact path={match.path}>
        <div>
          <h2>All cars in our DataBase</h2>
          <ul>
            {cars.map((car) => (
              <li key={car.id}>
                {car.brand}
                <button onClick={editPage}>edit</button>
              </li>
            ))}
          </ul>
        </div>
      </Route>
    </Switch>
  );
}

export default AppCars;
