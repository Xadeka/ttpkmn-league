import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import PairingsDefault from "./pages/pairings-default";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="pairings-default" element={<PairingsDefault />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
