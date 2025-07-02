import React, { useState } from "react";
function CreatItem(items) {
  return (
    <div
      onClick={() => {
        items.isClicked(items.id);
      }}
    >
      <li> {items.text} </li>
    </div>
  );
}
export default CreatItem;
