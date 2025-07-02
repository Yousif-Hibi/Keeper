import React from "react";

function CreateArea(items) {
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={(title) => {
            items.details(title);
          }}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={(content) => {
            items.details(content);
          }}
        />
        <button onClick={items.Create}>➕</button>
      </form>
    </div>
  );
}

export default CreateArea;
