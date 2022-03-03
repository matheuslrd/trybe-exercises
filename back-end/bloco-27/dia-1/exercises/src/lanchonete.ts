class Cliente {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
};

class Pedido { 
  cliente: object;
  itemsConsumidos: object[];
  formaPagamento:  string;
  descontoPedido: number;

  constructor(cliente: object, itemsConsumidos: object[], formaPagamento: string, descontoPedido: number) {
    this.cliente = cliente;
    this.itemsConsumidos = itemsConsumidos;
    this.formaPagamento = formaPagamento;
    this.descontoPedido = descontoPedido;
  }

  totalPedido() {
    
  }
}

class ItemPedido {
  nome: string;
  preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
}

const cliente1 = new Cliente('Matheus');
