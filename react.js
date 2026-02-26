// q1 :-Counter with Increment / Decrement
import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

// Q2) Todo list:-
import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };
  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  return (
    <div className="App">
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              onClick={() => toggleTodo(index)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


import "./styles.css";
import React, { useState } from "react";
import { createFalse } from "typescript";
export default function App() {
  const names = ["Samreen", "Simran", "Rahul", "Rohit"];
  const [search, setSearch] = useState("");
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h2>Search/Filter List</h2>
      <input
        type="text"
        placeholder="please search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

// Q4. Fetch & Display Data

import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error..{error}</h3>;
  return (
    <div className="App">
      <h1>User list</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>-{user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

import React, { useState } from "react";

const data = {
  India: ["Maharashtra", "Karnataka", "Delhi"],
  USA: ["California", "Texas", "Florida"],
  UK: ["London", "Manchester", "Birmingham"]
};

export default function DependentDropdown() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setState(""); // reset state dropdown
  };

  return (
    <div style={{ width: "300px", margin: "40px auto" }}>
      <h3>Dependent Dropdown</h3>

      {/* Country Dropdown */}
      <select value={country} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {Object.keys(data).map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <br />
      <br />

      {/* State Dropdown */}
      <select
        value={state}
        onChange={(e) => setState(e.target.value)}
        disabled={!country}
      >
        <option value="">Select State</option>
        {country &&
          data[country].map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
      </select>
    </div>
  );
}