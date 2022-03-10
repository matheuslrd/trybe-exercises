import { IVehicle } from "../interfaces/Vehicle/IVehicle";

// ./FuturisticCar.ts
export default class FuturisticCar implements IVehicle {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}