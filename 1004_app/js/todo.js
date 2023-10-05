const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  //  newTodo를 변경한다면 toDoInput.value의 값을 바뀌는 것이 아니라 복사된 newTodo 값만 변경됨
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);
