import { IVehicleDrive } from "../interfaces/Vehicle/IVehicle";

class Car implements IVehicleDrive {
  public pilot: string;

  constructor(pilot: string) {
    this.pilot = pilot;
  }

  howToPilot(): void {
    console.log(`Olá, eu ${this.pilot} sou a `);
  }

  drive(): void {
    console.log('O carro está andando');
  }
}

export default Car;