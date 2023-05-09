// Todo.jsx
import './Todo.css';
import { useState } from "react";

import { toggleTodo, updateTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";

import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo?.data);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    setEditing((prevState) => !prevState);

    dispatch(updateTodo(todo._id, text));
  };

  return (
    <div className='my-todo-list'
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        color: todo?.done ? "green" : "red"
      }}
      data-testid="todo-test"
    >
      <div style={{ display: editing ? "none" : "" }}>{todo?.data}</div>

      <form
        style={{ display: editing ? "inline" : "none" }}
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <div className='my-icons-container'>
      <span
        className="material-symbols-sharp my-icons"
        onClick={() => setEditing((prevState) => !prevState)}
      >
        edit_note
      </span>

      <span
        className="material-symbols-sharp my-icons"
        onClick={() => dispatch(deleteTodo(todo._id))}
      >
        delete
      </span>

      
      </div>
      
    </div>
  );
};

export default Todo;
