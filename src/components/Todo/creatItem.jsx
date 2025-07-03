import React, { useState } from "react";
function CreatItem({ id, text, completed, handleClick }) {
  return (
    <li
      onClick={handleClick}
      onContextMenu={handleClick}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
    </li>
  );
}
export default CreatItem;
