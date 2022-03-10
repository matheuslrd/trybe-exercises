import { IVehicle } from "../interfaces/Vehicle/IVehicle";

class Car implements IVehicle {
  drive(): void {
    console.log('O carro está andando');
  }

  fly(): void {
    throw new Error("I don't fly");
  }
}

export default Car;