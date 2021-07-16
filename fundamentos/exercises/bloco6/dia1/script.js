const formStates = document.querySelector("#states");
const btnSubmit = document.querySelector("#btn-submit");
const formConsolitated = document.querySelector("#form-consolitated");
const valuesInputs = document.querySelectorAll(".input-format");
const labels = document.querySelectorAll("label");

function createStates() {
  const statesBrazil = [
    "Acre (AC)",
    "Alagoas (AL)",
    "Amapá (AP)",
    "Amazonas (AM)",
    "Bahia (BA)",
    "Ceará (CE)",
    "Distrito Federal (DF)",
    "Espírito Santo (ES)",
    "Goiás (GO)",
    "Maranhão (MA)",
    "Mato Grosso (MT)",
    "Mato Grosso do Sul (MS)",
    "Minas Gerais (MG)",
    "Pará (PA)",
    "Paraíba (PB)",
    "Paraná (PR)",
    "Pernambuco (PE)",
    "Piauí (PI)",
    "Rio de Janeiro (RJ)",
    "Rio Grande do Norte (RN)",
    "Rio Grande do Sul (RS)",
    "Rondônia (RO)",
    "Roraima (RR)",
    "Santa Catarina (SC)",
    "São Paulo (SP)",
    "Sergipe (SE)",
    "Tocantins (TO)",
  ];

  for (let index = 0; index < statesBrazil.length; index += 1) {
    const createOption = document.createElement("option");
    createOption.innerHTML = statesBrazil[index];

    formStates.appendChild(createOption);
  }
}
createStates();

function submitFormValidation(event) {
  event.preventDefault();
  formConsolitated.innerHTML = "";

  for (let index = 0; index < valuesInputs.length; index += 1) {
    let valueInput = valuesInputs[index];
    let label = labels[index];

    if (valueInput.value.length !== 0) {
      const createTittle = document.createElement("h3");
      createTittle.innerHTML = label.innerText;

      const createPar = document.createElement("p");
      createPar.innerHTML = valueInput.value;

      formConsolitated.appendChild(createTittle);
      formConsolitated.appendChild(createPar);
    }
  }

}
btnSubmit.addEventListener("click", submitFormValidation);
