import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";
import { SortingAlgortihmProvider } from "./context/Visualizer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SortingAlgortihmProvider>
      <App />
    </SortingAlgortihmProvider>
  </StrictMode>
);
