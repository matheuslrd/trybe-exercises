const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const address = 'address';
  const orderName = order.name;
  const phoneNumber = order.phoneNumber;
  const street = order[address].street;
  const num = order[address].number;
  const apartment = order[address].apartment;
  const deliveryPerson = order.order.delivery.deliveryPerson;

  /* return console.log(`Olá ${deliveryPerson}, entrega para ${orderName}, Telefone: ${phoneNumber}, R. ${street}, N ${num}, AP: ${apartment}`); */
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  const name = order.name;

  const listOrderPizzas = Object.keys(order.order.pizza);
  const marguerita = listOrderPizzas[0];
  const peperoni = listOrderPizzas[1];

  const listOrderDrinks = Object.values(order.order.drinks.coke);
  const cocaCola = listOrderDrinks[0];
  
  order.payment = 'R$ 50.00';
  const total = order.payment;
  
  return console.log( `Olá ${name}, o total do seu pedido de ${marguerita}, ${peperoni} e ${cocaCola} é de ${total}`);
}

orderModifier(order);