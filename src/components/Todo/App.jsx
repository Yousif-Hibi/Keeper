import React, { useState, useEffect } from "react";
import CreatItem from "./creatItem";
import InputArea from "./InputArea";
import Header from "../Header";
import Footer from "../Footer";
import "./todo.css";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  // Load notes from localStorage when component mounts
  useEffect(() => {
    const saveditems = JSON.parse(localStorage.getItem("keeper-Todo")) || [];
    setList(saveditems);
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("keeper-Todo", JSON.stringify(list));
  }, [list]);

  function setNewitem(event) {
    const { value } = event.target;
    setItem(value);
  }

  function addToList() {
    if (item.trim() === "") return;
    setList([...list, { text: item, completed: false }]);
    setItem("");
  }

  function toggleComplete(id) {
    setList(
      list.map((item, index) =>
        index === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function deleteIfCompleted(id) {
    setList(list.filter((item, index) => index !== id || !item.completed));
  }

  function handleItemClick(id, event) {
    if (event.type === "click") {
      // Left click - toggle strike through
      toggleComplete(id);
    } else if (event.type === "contextmenu") {
      // Right click - delete only if completed
      event.preventDefault();
      deleteIfCompleted(id);
    }
  }

  return (
    <div>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <InputArea
            setNewitem={setNewitem}
            addToList={addToList}
            value={item}
          />
        </div>
        <div>
          <ul>
            {list.map((Element, index) => (
              <CreatItem
                key={index}
                id={index}
                text={Element.text}
                completed={Element.completed}
                handleClick={(e) => handleItemClick(index, e)}
              />
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
