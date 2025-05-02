const arr = [];

function displayTodo(){
  let todolistHTML = ``;
  for(let i=0;i<arr.length;i++){
    todolistHTML+= `<p>${arr[i].name} ${arr[i].date} <button 
      onclick="arr.splice(${i},1); displayTodo()"
    >delete</button></p>`;
  }
  document.querySelector('.js-display-todo').innerHTML = todolistHTML;
}

function addTodo(){
  const inputElement = document.querySelector('.js-input');
  const dateInputElement = document.querySelector('.js-date-input');
  arr.push({name:inputElement.value , date:dateInputElement.value});
  inputElement.value = ``;
  displayTodo();
}

function checkEnter(event){
  if(event.key === 'Enter'){
    addTodo();
  }
}