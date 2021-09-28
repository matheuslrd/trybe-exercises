import React from "react";
import Input from "./Input";
import Select from "./Select";
import country from "../country";

class DadosPessoais extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);

    this.state = {
      name: "",
      email: "",
      cpf: "",
      adress: "",
      city: "",
      country: "",
      complement: "",
    };
  }

  handleAdress = (value) => {
    //Validação do campo endereço
  };

  handleCity = () => {};

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <Input
          className="input-form"
          onChange={this.handleInput}
          name="name"
          description="Nome:"
          type="text"
          maxLength="40"
          value={this.state.name}
        />

        <Input
          className="input-form"
          onChange={this.handleInput}
          name="email"
          description="E-mail:"
          type="email"
          maxLength="50"
          value={this.state.email}
        />

        <Input
          className="input-form"
          onChange={this.handleInput}
          name="cpf"
          description="CPF: "
          type="text"
          maxLength="11"
          value={this.state.cpf}
        />

        <Input
          className="input-form"
          onChange={this.handleInput}
          name="adress"
          type="text"
          description="Endereço: "
          maxLength="200"
          value={this.state.adress}
        />

        <Input
          className="input-form"
          onChange={this.handleInput}
          name="city"
          type="text"
          description="Cidade: "
          maxLength="28"
          value={this.state.city}
        />

        <Select
          className="select-form"
          name="country"
          description="Estado: "
          listCountry={country.map((country, index) => (
            <option key={country + index}> {country} </option>
          ))}
          onChange={this.handleInput}
        />

        <section className="input-radio-format">
          <label htmlFor="complement">Complemento: </label> <br />
          <Input
            onChange={this.handleInput}
            name="complement"
            type="radio"
            description="Casa"
            id="casa"
            value="Casa"
          />
          <Input
            onChange={this.handleInput}
            name="complement"
            type="radio"
            id="apartamento"
            description="Apartamento"
            value="Apartamento"
          />
        </section>
      </>
    );
  }
}

export default DadosPessoais;
