import React from "react";

export default function ErrorMessage({ message = "Something went wrong!" }) {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <h2>Oops!</h2>
      <p>{message}</p>
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
  );
}
