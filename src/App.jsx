import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardDetails from "./CardDetails";
import Navbar from "./Navbar";

const App = () => {
  return (
    <BrowserRouter>
    <div className='w-full bg-blue flex items-center p-4 flex-col h-full'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetails/:id" element={<CardDetails/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
