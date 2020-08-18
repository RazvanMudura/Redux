import "./data/store";
import { store } from "./data/store";
import { addTodo, markComplete } from "./data/actions";

document.getElementById("addTodo").addEventListener("click", () => {
  store.dispatch(addTodo(document.getElementById("todoInput").value));
  document.getElementById("todoInput").value = "";
});

const render = () => {
  const { todos } = store.getState();

  const todosHTML = todos.map((todo) => `<div>${todo.name}<div>`).join("");

  document.getElementById("root").innerHTML = todosHTML;
};

store.subscribe(render);

store.dispatch(addTodo("todo 1"));
store.dispatch(addTodo("todo 2"));
store.dispatch(markComplete(0));
