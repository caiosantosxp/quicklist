// Variáveis
const button = document.getElementById('new-button');
const input = document.getElementById('new-input');
const container = document.querySelector('section');
const dangerContainer = document.querySelector('.danger');
const dangerClose = document.querySelector('.close');

// Função para adicionar novo item
function addNewItem(){
  const newItem = document.createElement('div');
  newItem.classList.add('container-item');

  const newInput = document.createElement('input');
  newInput.type = 'checkbox';

  const newButtonDelete = document.createElement('img');
  newButtonDelete.src = './assets/delete.svg';

  newButtonDelete.onclick = function() {
    deleteItem(event);
  };

  const newValue = document.createElement('p');
  newValue.innerText = input.value;

  newItem.appendChild(newInput);
  newItem.appendChild(newValue);
  newItem.appendChild(newButtonDelete);
  
  container.appendChild(newItem);

  input.value = '';
}

// Função para deletar item
function deleteItem(event){
  const evento = event.target;
  evento.parentElement.remove();

  dangerContainer.classList.remove('hidden');
}


// Função para fechar o container de alerta
function closeDanger(){
  dangerContainer.classList.add('hidden');
}

// Eventos
dangerClose.addEventListener('click', closeDanger);
button.addEventListener('click', addNewItem);

