import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import PairingsDefault from "./pages/pairings-default";
import EventResults from "./pages/event-results";
import LayoutWithBackButton from "./layout-with-back-button";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<LayoutWithBackButton />}>
          <Route path="pairings-default" element={<PairingsDefault />} />
          <Route path="event-results" element={<EventResults />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
