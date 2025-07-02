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
    console.log(item);
  }
  function addToList() {
    setList([...list, item]);
  }
  function isClicked(id) {
    setList(list.filter((item, index) => index !== id));
  }
  return (
    <div>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <InputArea setNewitem={setNewitem} addToList={addToList} />
        </div>
        <div>
          <ul>
            {list.map((Element, index) => (
              <CreatItem
                key={index}
                id={index}
                text={Element}
                isClicked={isClicked}
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
