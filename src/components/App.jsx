import React, { useState } from "react";
import NotesApp from "./Notes/App";
import TodoApp from "./Todo/App";
import Header from "./Header";
import Footer from "./Footer";
import "./index.css";
function App() {
  const [selectedApp, setSelectedApp] = useState(null);

  const goHome = () => setSelectedApp(null);

  return (
    <>
      <Header showBackButton={selectedApp !== null} onBack={goHome} />

      {selectedApp === "notes" ? (
        <NotesApp />
      ) : selectedApp === "todo" ? (
        <TodoApp />
      ) : (
        <div className="main-page">
          <h1>Welcome</h1>
          <button onClick={() => setSelectedApp("notes")}>Notes App</button>
          <button onClick={() => setSelectedApp("todo")}>Todo App</button>
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;
