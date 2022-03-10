import { IFooCepAPI } from '../interfaces/FooCepAPI/IFooCepAPI';

class MockFooCepAPI implements IFooCepAPI {
  addressByCEP: string;
  cepByAddress: string;

  constructor() {
    this.addressByCEP = `O endereço para o "CEP:xx.xxx-xx, n°:10" é "endereço foo"`;
    this.cepByAddress = `O CEP para: "street foo, between bar and baz, n°: 10" é "CEP baz"`;
  }

  async getAddressByCEP(_cep: string, _number: number): Promise<string> {
    return this.addressByCEP;
  }

  async getCepByAddress(_address: string, _number: number): Promise<string> {
    return this.cepByAddress;
  }
}

export default MockFooCepAPI;
