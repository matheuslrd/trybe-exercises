import React from "react";
import GenericInput from "./GenericInput";
import GenericSelect from "./GenericSelect";
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

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <GenericInput
          className="input-form"
          onChange={this.handleInput}
          name="name"
          description="Nome:"
          type="text"
          maxLength="40"
          value={this.state.name}
        />

        <GenericInput
          className="input-form"
          onChange={this.handleInput}
          name="email"
          description="E-mail:"
          type="email"
          maxLength="50"
          value={this.state.email}
        />

        <GenericInput
          className="input-form"
          onChange={this.handleInput}
          name="cpf"
          description="CPF: "
          type="text"
          maxLength="11"
          value={this.state.cpf}
        />

        <GenericInput
          className="input-form"
          onChange={this.handleInput}
          name="adress"
          type="text"
          description="Endereço: "
          maxLength="200"
          value={this.state.adress}
        />

        <GenericInput
          className="input-form"
          onChange={this.handleInput}
          name="city"
          type="text"
          description="Cidade: "
          maxLength="28"
          value={this.state.city}
        />

        <GenericSelect
          className="input-form"
          name="country"
          description="Estado: "
          listCountry={country.map((country) => (
            <option> {country} </option>
          ))}
          onChange={this.handleInput}
        />

        <section className="input-format">
          <GenericInput
            className="input-format"
            onChange={this.handleInput}
            name="house"
            type="radio"
            description="Complemento: "
            value={this.state.complement}
          />{" "}
          Casa
          <GenericInput
            className="input-format"
            onChange={this.handleInput}
            name="house"
            type="radio"
            value={this.state.complement}
          />{" "}
          Apartamento
        </section>
      </>
    );
  }
}

export default DadosPessoais;
