import { IVehicleFly } from "../interfaces/Vehicle/IVehicle";

export default class FuturisticCar implements IVehicleFly {
  public pilot: string;

  constructor(pilot: string) {
    this.pilot = pilot;
  }

  howToPilot(): void {
    console.log(`Olá, sou ${this.pilot} e vou dirigir este veiculo!`)
  }

  fly(): void { console.log('Flying a futuristic car'); }
}