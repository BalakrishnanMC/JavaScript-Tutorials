const arr = [];

const todolistHTML = ``;
for(let i=0;i<arr.length;i++){
  todolistHTML+= `<p>${arr[i]}</p>`;
}
console.log(todolistHTML);
function addTodo(){
  const inputElement = document.querySelector('.js-input');
  arr.push(inputElement.value);
  console.log(arr);
  inputElement.value = ``;
}

function checkEnter(event){
  if(event.key === 'Enter'){
    addTodo();
  }
}