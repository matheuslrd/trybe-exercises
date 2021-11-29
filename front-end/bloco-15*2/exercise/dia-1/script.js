const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const nextColor = 'NEXT_COLOR';
const prevColor = 'PREVIOUS_COLOR';

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case nextColor:
      return ({ ...state, index: state.index + 1 });
      break;
    case prevColor:
      return ({ ...state, index: state.index - 1 });
      break;
    default:
      return state;
      break;
  }
};

const store = Redux.createStore(reducer);

document.getElementById('next').addEventListener('click', () => {
  store.dispatch({ type: nextColor });
});

document.getElementById('previous').addEventListener('click', () => {
  store.dispatch({ type: prevColor });
});

const innerHTMLValue = document.getElementById('value');

const handleIndex = (index, colors) => {
  if (index < 0) {
    console.log(index + ' add');
    return (colors.length - 1);
  } else if(index > colors.length - 1) {
    console.log(index + ' add');
    return 0;
  }

  return index;
}

store.subscribe(() => {
  let index = store.getState().index;
  const colors = ESTADO_INICIAL.colors;
  index = handleIndex(index, colors);
  console.log(index);
  innerHTMLValue.innerHTML = colors[index];
});
