export interface IVehicle {
  pilot: string;
  howToPilot(): void;
}

export interface IVehicleFly extends IVehicle {
  fly(): void;
}

export interface IVehicleDrive extends IVehicle {
  drive(): void;
}