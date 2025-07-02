import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Note from "./Notes";
import CreateArea from "./CreateArea";
import "./notes.css";
function App() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [List, setList] = useState([]);

  // Load notes from localStorage when component mounts
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("keeper-notes")) || [];
    setList(savedNotes);
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("keeper-notes", JSON.stringify(List));
  }, [List]);

  function setNotedetails(event) {
    const { value, name } = event.target;
    setNote((preData) => ({
      ...preData,
      [name]: value,
    }));
    console.log(note);
  }
  function CreateNote(event) {
    event.preventDefault();
    setList([...List, note]);
  }
  function deleteNote(id) {
    setList(List.filter((item, index) => index !== id));
  }

  return (
    <div>
      <CreateArea details={setNotedetails} Create={CreateNote} />
      {List.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          delete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
