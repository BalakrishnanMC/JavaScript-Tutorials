const arr = [];

function displayTodo(){
  let todolistHTML = ``;
  for(let i=0;i<arr.length;i++){
    todolistHTML+= `
      <div>${arr[i].name}</div>
      <div>${arr[i].date}</div> 
      <button onclick="arr.splice(${i},1); displayTodo()" class="delete-button">Delete</button>`;
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