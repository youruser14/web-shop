import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import PagesError from "../pages/PagesError";
import Basket from "../pages/Basket";
import Favorites from "../pages/Favorites";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/basket" element={<Basket />} />
        <Route path="/favourite" element={<Favorites />} />

        <Route path="/*" element={<PagesError />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
