import React, {useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import BlogPage from "./pages/BlogPage";
import "./App.css";
// import PreLoader from "./components/PreLoader/PreLoader";

const App: React.FC = () => {
  const [active, setActive] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 5000);
  });

  return (
    <>
        <Router>
          <Routes>
            <Route path="/" Component={Blogs} />
            <Route path="/about" Component={About} />
            <Route path="/blogPage" Component={BlogPage} />
          </Routes>
        </Router>
    </>
  );
};

export default App;
