var todoList = document.getElementById("todos").getElementsByClassName("task");
var onGoing = document.getElementById("onGoing").getElementsByClassName("task");
var complete = document.getElementById("complete").getElementsByClassName("task");;
var inpTask = document.getElementById("todo-input");
var formTask = document.getElementById("form");
var todos = document.getElementById("todos");
formTask.addEventListener("submit",function(e){
  e.preventDefault();

  var todo = inpTask.value;
  if(todo){
    var todoEl = document.createElement("div");
    todoEl.classList.add("task");
    todoEl.innerText = todo;
    todos.appendChild(todoEl);
    inpTask.value = "";
    refresh();
  }
});
function refresh(){
  for(e of todoList){
    console.log(e.innerText)
  }
}

const fs = require('fs')
fs.readFile('/assets/db/db.json', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})


