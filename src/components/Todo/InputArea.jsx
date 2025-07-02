import React from "react";

function InputArea(items) {
  return (
    <div>
      {" "}
      <input
        type="text"
        onChange={(text) => {
          items.setNewitem(text);
        }}
      />
      <button
        onClick={() => {
          items.addToList();
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
export default InputArea;
