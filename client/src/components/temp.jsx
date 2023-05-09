// 
import { useState } from "react";
import { toggleTodo, updateTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.name);
  const dispatch = useDispatch();

  const onFormSubmit = (e)=>{
    e.preventDefault();

    setEditing(prevstate=> !prevstate);
    dispatch(updateTodo(todo._id,text));
  }

  return (
    <div
      className="todo-list"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{ color: todo.done ? "red" : "green" }}
    >
      <span style={{ display: editing ? "none" : "" }}>{todo.data}</span>
      <form style={{ display: editing ? "inline" : "none" }} onSubmit={onFormSubmit}>
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <div className="icons-container">
        <span className="material-symbols-sharp icons icons-1" onClick={()=> dispatch(deleteTodo())}>delete</span>
        <span
          className="material-symbols-sharp icons icons-2"
          onClick={() => setEditing((prevstate) => !prevstate)}
        >
          edit_note
        </span>
      </div>
    </div>
  );
};

export default Todo;
