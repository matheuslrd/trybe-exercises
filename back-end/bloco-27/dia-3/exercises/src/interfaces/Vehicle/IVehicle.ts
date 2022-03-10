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

export interface IFuturisticVehicle extends IVehicle {
  fly(): void;
  drive(): void;
}