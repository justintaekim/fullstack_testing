import React, { useState, ChangeEvent } from "react";

const TodoList: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const addItem = () => {
    if (input) {
      setItems([...items, input]);
      setInput("");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Add a new item"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
