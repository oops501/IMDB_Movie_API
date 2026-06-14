import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StarRating from "./StarRating";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      color="red"
      size={42}
      messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} color="blue" size={42} />
    <StarRating maxRating={10} color="maroon" size={42} defaultRating={3} /> */}
  </StrictMode>,
);
