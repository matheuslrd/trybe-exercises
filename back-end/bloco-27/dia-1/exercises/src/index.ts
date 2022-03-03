class Estudante {
  matricula:string;
  nome:string;
  notasDeProva: number[];
  notasDeTrabalho: number[];

  constructor(matricula: string, nome: string, notasDeProva: number[], notasDeTrabalho: number[]) {
      this.matricula = matricula;
      this.nome = nome;
      this.notasDeProva = notasDeProva;
      this.notasDeTrabalho = notasDeTrabalho;
  }

  somaDasNotas():number {
      const { notasDeProva, notasDeTrabalho } = this;
      const somaNotasProva = notasDeProva.reduce((prev, curr) => prev + curr, 0);
      const somaNotasTrabalho = notasDeTrabalho.reduce((prev, curr) => prev + curr, 0);
      return somaNotasProva + somaNotasTrabalho;
  }

  mediaDasNotas():number {
      const { notasDeProva, notasDeTrabalho } = this;
      const quantidadeDeNotas = notasDeProva.length + notasDeTrabalho.length;
      return this.somaDasNotas() / quantidadeDeNotas;
  }
}

const e1 = new Estudante('sdhdsfhjdfs', 'José', [1, 5], [4,8]);
const e2 = new Estudante('ksokdoskokdsokdso', 'Matheus', [7, 12], [2,9]);

console.log(e2.mediaDasNotas());
