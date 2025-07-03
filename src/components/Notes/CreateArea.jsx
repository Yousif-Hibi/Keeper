import React from "react";

function CreateArea(items) {
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={items.title}
          onChange={(title) => {
            items.details(title);
          }}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={items.content}
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
