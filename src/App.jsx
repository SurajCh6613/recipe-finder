import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainNavigation />}>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
