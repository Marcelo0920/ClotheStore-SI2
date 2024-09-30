import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./styles/reset.css";
import "./styles/nice-select.css";
import "./styles/niceselect.css";
import "./styles/bootstrap.css";
import "./styles/responsive.css";
import "./styles/style.css";
import "./styles/themify-icons.css";
import "./styles/font-awesome.css";
import "./styles/animate.css";
import "./styles/jquery-ui.css";
import "./styles/jquery.fancybox.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
