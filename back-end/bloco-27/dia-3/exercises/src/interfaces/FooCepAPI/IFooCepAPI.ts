export interface IFooCepAPI {
  getAddressByCEP(cep: string, number: number): Promise<string>;
  getCepByAddress(adress: string, number: number): Promise<string>;
};