import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandle = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandle = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
    setInputText("");
  };

  return (
    <form>
      <input value={inputText} onChange={inputTextHandle} type="text" className="todo-input" />
      <button onClick={submitTodoHandle} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      {/* <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div> */}
    </form>
  );
};

export default Form;
