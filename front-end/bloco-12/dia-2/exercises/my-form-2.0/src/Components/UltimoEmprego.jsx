import { Component } from 'react';
import TextArea from './TextArea';

class UltimoEmprego extends Component {
  render() {
    return(
      <>
        <TextArea
          className="input-form text-area"
          id="abstract"
          description="Resumo do Curriculo: "
          maxLength="1000"
          row="5"
          cols="20"
        />

        <TextArea 
          className="input-form text-area-cargo"
          id="office"
          description="Cargo: "
          maxLength="40"
        />

        <TextArea 
          className="input-form text-area"
          id="office-description"
          description="Descrição do Cargo: "
          maxLength="500"
        />
      </>
    );
  }
}

export default UltimoEmprego;