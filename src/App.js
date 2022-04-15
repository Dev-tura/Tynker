import React from "react";
import Whycode from "./Components/Whycode/Whycode";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Play from "./Components/Play/Play";
import FAQ from "./Components/FAQ/FAQ";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="whycode" element={<Whycode />} />
        <Route path="play" element={<Play />} />
        <Route path="faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
