import React from "react";
import Button from "./Button";
import DadosPessoais from "./DadosPessoais";
import UltimoEmprego from "./UltimoEmprego";

class Form extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createElement = (element, className, text) => {
    element = document.createElement(element);
    element.classList.add(className);
    element.innerText = text;
    return element;
  };

  printToScreen = (input, form) => {
    if (input.value !== "") {
      const section = document.createElement("section");
      const p = this.createElement("p", "text-input", input.value);
      let h3;
      if (input.type === "radio") {
        h3 = this.createElement(
          "h3",
          "label-input",
          input.parentNode.previousElementSibling.previousElementSibling
            .innerText
        );
      } else {
        h3 = this.createElement(
          "h3",
          "label-input",
          input.parentNode.innerText
        );
      }
      section.appendChild(h3);
      section.appendChild(p);
      form.appendChild(section);
    }
  };

  handleSubmit(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll(".input-form");
    const form = document.querySelector(".container-form");
    const inputRadioChecked = document.querySelector(
      'input[name="complement"]:checked'
    );
    if (inputRadioChecked === null) {
      return alert("Favor, selecione o complemento!");
    }
    const textAreaList = document.querySelectorAll("textarea");
    const inputsAndTextAreas = [...inputs, inputRadioChecked, ...textAreaList];
    form.innerHTML = "";
    inputsAndTextAreas.forEach((input) => this.printToScreen(input, form));
  }

  clearInputs = () => {
    //Limpar os inputs
  };

  render() {
    return (
      <div className="container-form">
        <form className="">
          <fieldset className="fieldset">
            <legend>Dados pessoais</legend>
            <DadosPessoais />
          </fieldset>

          <fieldset className="fieldset">
            <legend>Ultimo Emprego</legend>
            <UltimoEmprego />
          </fieldset>

          <section className="submit-container">
            <Button
              type="submit"
              description="ENVIAR"
              className="btn-submit"
              onClick={this.handleSubmit}
            />
            <Button
              type="button"
              description="LIMPAR"
              className="btn-clear"
              onClick={this.clearInputs}
            />
          </section>
        </form>
      </div>
    );
  }
}

export default Form;
