import axios from "axios";

class CarService {
  constructor() {
    const instance = axios.create({
      baseURL: "http://localhost:8000/api",
    });

    this.apiClient = instance;
  }

  async getAllCars() {
    try {
      const { data } = await this.apiClient.get("/cars");
      return data;
    } catch (error) {
      console.log("Greska", error);
    }
  }

  async create(newCar) {
    try {
      const { data } = await this.apiClient.post("/cars", newCar);
      return data;
    } catch (error) {
      console.log("Greska", error);
    }
  }
}

export default new CarService();
