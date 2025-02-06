import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "./components/ui/provider";
import AuthContextProvider from "./contextapi/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <Provider>
        <Router>
          <App />
        </Router>
      </Provider>
    </AuthContextProvider>
  </StrictMode>
);
