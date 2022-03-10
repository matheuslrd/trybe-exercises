import { IFooCepAPI } from "./interfaces/FooCepAPI/IFooCepAPI";

class CepService {
  private readonly cepApi: IFooCepAPI;

  constructor(cepApi: IFooCepAPI) {
    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAdress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;