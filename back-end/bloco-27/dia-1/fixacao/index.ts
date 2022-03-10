class Tv {
  brand: string;
  size: number;
  resolutions: number;
  connections: string[];
  connectedTo: string;

  constructor(b: string, s: number, r: number, c: string) {
    this.brand: b;
    this.size: s;
    this.resolutions: r;
    this.connections: c;
  }
};
