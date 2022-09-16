import React, { useState, useEffect } from "react";

import "./App.css";
import Setting from "./components/Setting";
import Form from "./components/Form";
import Lists from "./components/Lists";

function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const getTodoData = () => {
    // localStorage.removeItem("todoData");
    let data = JSON.parse(localStorage.getItem("todoData"));
    if (data) {
      setTodoData(data);
    }
  };

  const getColor = () => {
    let color = JSON.parse(localStorage.getItem("color"));
    if (color) {
      document.body.classList.add(color);
    }
  };

  const saveLocal = (newTodoData) => {
    setTodoData(newTodoData);
    localStorage.setItem("todoData", JSON.stringify(newTodoData));
  };

  const onHandleChange = (e) => {
    setValue(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (value.length) {
      let newData = {
        id: Date.now(),
        title: value,
        completed: false,
      };

      let newTodoData = [...todoData, newData];
      saveLocal(newTodoData);

      setValue("");
    } else {
      alert("해야 할 일을 입력해주세요");
    }
  };

  useEffect(() => {
    getTodoData();
    getColor();
  }, []);

  const onChangeCheckBox = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    saveLocal(newTodoData);
  };

  const onClickDelete = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    saveLocal(newTodoData);
  };

  const onUpdateData = (id, value) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.title = value;
      }
      return data;
    });
    saveLocal(newTodoData);
  };

  return (
    <div className="App">
      <div className="todoBlock">
        <div className="title">
          <h1>TO DO LIST 📝</h1>
          <Lists
            todoData={todoData}
            onChangeCheckBox={onChangeCheckBox}
            onClickDelete={onClickDelete}
            onUpdateData={onUpdateData}
          />
          <Form
            onHandleChange={onHandleChange}
            onHandleSubmit={onHandleSubmit}
            value={value}
          />
        </div>
      </div>
      <Setting />
    </div>
  );
}

export default App;
