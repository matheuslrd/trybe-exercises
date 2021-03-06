function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

function createDezDays() {
    const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dezDaysList = document.querySelector('#days');

    //Percorre o array de dias
    for(let key of dezDays) {
        //Atribui cada elemento percorrido a days
        let days = key;

        //Cria o elemento li, adiciona a classe day 
        //Adiciona o texto days que são os dias que devem ser adicionados
        let dayListItem = document.createElement('li');
        dayListItem.className = 'day';

        //Faz a validação dos dias que são feriados e adiciona uma classe somente a eles
        if (days === 24 || days === 25 || days === 31) {
            dayListItem.classList.add('holiday');
        };

        if (days === 4 || days === 11 || days === 18 || days === 25) {
            dayListItem.classList.add('friday');
        }

        //Adiciona há variavel dayListItem o texto days, contendo todos os dias do array
        dayListItem.innerHTML = days;

        //Adiciona o item formatado há ul do HTML
        dezDaysList.appendChild(dayListItem);
    }
}
createDezDays();

function createButtonHolidays(string) {
    let buttonsContainer = document.querySelector('.buttons-container');

    if (string === 'Feriados') {
        let createButton = document.createElement('button');
        createButton.innerHTML = string;
        createButton.setAttribute('id', 'btn-holiday');

        buttonsContainer.appendChild(createButton);

        //Adiciona evento de click ao botão
        createButton.addEventListener('click', function () {
            let listHolidays = document.querySelectorAll('.holiday');
            
            for (let index of listHolidays) {
                let holidays = index;
        
                //Verificando se a cor já é azul, se sim, voltar para a anterior
                holidays.style.transition = 'all .2s ease-out';
                if( holidays.style.color ===  'blue' ) {
                    holidays.style.color = '#666';
                } else {
                    holidays.style.color = 'blue';
                };
            };
        });
    }

}
createButtonHolidays('Feriados');

function createButtonFriday(string) {
    let buttonsContainer = document.querySelector('.buttons-container');

    let createButton = document.createElement('button');
    createButton.innerHTML = string;
    createButton.setAttribute('id', 'btn-friday');

    buttonsContainer.appendChild(createButton);
}

createButtonFriday('Sexta-Feira');




