import React from "react";
import { Routes, Route } from "react-router-dom";
import RenderModel from "./pages/RenderModel";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/rendermodel/:id" element={<RenderModel />}></Route>
      </Routes>
    </>
  );
}

export default App;
