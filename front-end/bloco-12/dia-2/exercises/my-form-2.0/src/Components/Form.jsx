import React from "react";
import DadosPessoais from "./DadosPessoais";

class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <fieldset className="fieldset">
          <legend>Dados pessoais</legend>
          <DadosPessoais />
        </fieldset>
      </form>
    );
  }
}

export default Form;
