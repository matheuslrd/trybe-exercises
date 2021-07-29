let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal  nos quadrinhos do pato Donald'
};

info.recorrente = 'Sim';

let infoPerson = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim' 
};

for (let key in info) {
    if( key === 'recorrente' && info.recorrente === 'Sim' && infoPerson.recorrente === 'Sim') {
        console.log('Ambas recorrentes');
    } else {
        console.log(info[key] + ' e ' + infoPerson[key]);
    }   
};

