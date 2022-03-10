import { IFuturisticVehicle, IVehicle } from "../interfaces/Vehicle/IVehicle";

export default class FuturisticCar implements IFuturisticVehicle {
  public pilot: string;

  constructor(pilot: string) {
    this.pilot = pilot;
  }

  howToPilot(): void {
    console.log(`Olá, sou ${this.pilot} e vou dirigir este veiculo!`)
  }

  drive(): void {
    console.log('Driving a futuristic car');
  }

  fly(): void {
    console.log('Flying a futuristic car');
  }
}