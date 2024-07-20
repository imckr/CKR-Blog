import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import BlogPage from "./pages/BlogPage";
import "./App.css";
import PreLoader from "./components/PreLoader/PreLoader";

const App: React.FC = () => {
  const [active, setActive] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 5000);
  });

  return (
    <>
      {active ? (
        <PreLoader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Blogs} />
            <Route path="/about" Component={About} />
            <Route path="/blogPage" Component={BlogPage} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
