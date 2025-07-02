// Header.jsx
import React from "react";

function Header({ showBackButton, onBack }) {
  return (
    <header>
      {showBackButton && (
        <button className="back-button" onClick={onBack}>
          ⬅ Back
        </button>
      )}
      <h1>Keeper</h1>
    </header>
  );
}

export default Header;
