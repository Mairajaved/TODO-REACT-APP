import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  const isEditMode = !!props.edit;

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder={isEditMode ? "Update your item" : "Add a todo"}
        value={input}
        onChange={handleChange}
        name="text"
        className={`todo-input ${isEditMode ? "edit" : ""}`}
        ref={inputRef}
      />
      <button
        type="submit"
        className={`todo-button ${isEditMode ? "edit" : ""}`}
      >
        {isEditMode ? "Update" : "Add todo"}
      </button>
    </form>
  );
}

TodoForm.propTypes = {
  edit: PropTypes.shape({
    value: PropTypes.string.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default TodoForm;
