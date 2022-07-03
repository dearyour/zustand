import React, { useState } from "react";
import { useStore } from "./Todo/TodoStore";

const TodoListCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useStore((state) => [
    state.todoListState,
    state.setTodoListState,
  ]);
  const addItem = () => {
    setTodoList([
      ...todoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoListCreator;

let id = 0;
function getId() {
  return id++;
}
