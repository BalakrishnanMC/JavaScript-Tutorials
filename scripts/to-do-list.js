const arr = [];

function displayTodo(){
  let todolistHTML = ``;
  for(let i=0;i<arr.length;i++){
    todolistHTML+= `<p>${arr[i]}</p>`;
  }
  document.querySelector('.js-display-todo').innerHTML = todolistHTML;
}

function addTodo(){
  const inputElement = document.querySelector('.js-input');
  arr.push(inputElement.value);
  inputElement.value = ``;
  displayTodo();
}

function checkEnter(event){
  if(event.key === 'Enter'){
    addTodo();
  }
}