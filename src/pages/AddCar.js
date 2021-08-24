import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import AppCars from "./AppCars";
import axios from "axios";
import carService from "../services/CarService";

function AddCar() {
  const history = useHistory();

  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: 1990,
    maxSpeed: 0,
    isAutomatic: false,
    engine: "",
    numberOfDoors: 1,
  });

  const handleBrandChange = (e) => {
    setNewCar({
      ...newCar,
      brand: e.target.value,
    });
  };
  const handleModelChange = (e) => {
    setNewCar({
      ...newCar,
      model: e.target.value,
    });
  };
  const handleYearChange = (e) => {
    setNewCar({
      ...newCar,
      year: e.target.value,
    });
  };
  const handleSpeedChange = (e) => {
    setNewCar({
      ...newCar,
      maxSpeed: e.target.value,
    });
  };
  const handleIsAutomaticChange = (e) => {
    setNewCar({
      ...newCar,
      isAutomatic: e.target.value,
    });
  };

  const handleEngineChange = (e) => {
    setNewCar({
      ...newCar,
      engine: e.target.value,
    });
  };
  const handleDoorsChange = (e) => {
    setNewCar({
      ...newCar,
      numberOfDoors: e.target.value,
    });
  };

  const redirect = () => {
    history.push("/cars");
  };

  const addNewCar = (e) => {
    e.preventDefault();

    carService.create(newCar);

    setNewCar({
      brand: "",
      model: "",
      year: 1999,
      maxSpeed: 0,
      isAutomatic: true,
      engine: "",
      numberOfDoors: 0,
    });
    redirect();
  };

  const reset = () => {
    setNewCar({
      brand: "",
      model: "",
      year: 1999,
      maxSpeed: 0,
      isAutomatic: true,
      engine: "",
      numberOfDoors: 0,
    });
  };

  const preview = () => {
    alert(
      `brand: ${newCar.brand} \n model: ${newCar.model} \n year: ${newCar.year} \n maxSpeed: ${newCar.maxSpeed} \n isAutomatic ${newCar.isAutomatic} \n engine: ${newCar.engine} \n Number of door ${newCar.numberOfDoors}`
    );
  };

  return (
    <div>
      <form onSubmit={addNewCar}>
        <label>Brand</label>
        <input
          require
          placeholder="brand"
          name="brand"
          type="text"
          value={newCar.brand}
          onChange={handleBrandChange}
        ></input>

        <label>Model</label>
        <input
          require
          placeholder="model"
          name="model"
          type="text"
          value={newCar.model}
          onChange={handleModelChange}
        ></input>

        <label>Max Speed</label>
        <input
          type="number"
          value={newCar.maxSpeed}
          onChange={handleSpeedChange}
          placeholder="max 300"
          name="maxSpeed"
          min="1"
          max="300"
        ></input>

        <label>Number of Doors</label>
        <input
          require
          type="number"
          value={newCar.numberOfDoors}
          onChange={handleDoorsChange}
          placeholder="max 7"
          name="numberOfDoors"
          min="1"
          max="7"
        ></input>

        <label>Year of car: </label>

        <select
          require
          value={newCar.year}
          onChange={handleYearChange}
          name="year"
        >
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
          <option value="2004">2004</option>
          <option value="2003">2003</option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
          <option value="1999">1999</option>
          <option value="1998">1998</option>
          <option value="1997">1997</option>
          <option value="1996">1996</option>
          <option value="1995">1995</option>
          <option value="1994">1994</option>
          <option value="1993">1993</option>
          <option value="1992">1992</option>
          <option value="1991">1991</option>
          <option value="1990">1990</option>
        </select>

        <div>
          <input
            require
            value={newCar.isAutomatic}
            onChange={handleIsAutomaticChange}
            type="checkbox"
          ></input>
          <label> Is this car automatic?</label>
        </div>

        <div>
          <p>Engine of your car?</p>

          <input
            value="disel"
            onChange={handleEngineChange}
            type="radio"
          ></input>
          <label>diesel </label>
          <input
            value="petrol"
            onChange={handleEngineChange}
            type="radio"
          ></input>
          <label>petrol </label>
          <input
            value="electric"
            onChange={handleEngineChange}
            type="radio"
          ></input>
          <label>electric </label>
          <input
            value="hybrid"
            onChange={handleEngineChange}
            type="radio"
          ></input>
          <label>hybrid </label>
        </div>

        <button>Submit</button>
        <button onClick={reset}>Reset form</button>
      </form>
      <button className="btn-preview" onClick={preview}>
        Preview form
      </button>
    </div>
  );
}

export default AddCar;
