import { IVehicle } from "../interfaces/Vehicle/IVehicle";

class AirPlane implements IVehicle {
  drive(): void {
    throw new Error("I don't drive");
  }

  fly(): void {
    console.log('Flying a AirPlane');
  }
}

export default AirPlane;