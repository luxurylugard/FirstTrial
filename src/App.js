import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import GoToTopButton from "./GoToTopButton";
import About from "./About";
import View1 from "./View1";
import View2 from "./View2";
import View3 from "./View3";
import "./Stylings/Header.css";
import "./Stylings/Hero.css";
import "./Stylings/Details.css";
import "./Stylings/Achievements.css";
import "./Stylings/Services.css";
import "./Stylings/LastElegance.css";
import "./Stylings/Footer.css";
import MainPage from "./MainPage";

const App = () => {
  const [isGoToTop, setGoToTop] = useState(false);
  const [isNavbarActive, setNavbarActive] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Add a scroll event listener when the component mounts
    const handleScroll = () => {
      window.scrollY >= 10 ? setNavbarActive(true) : setNavbarActive(false);
      window.scrollY >= 400 ? setGoToTop(true) : setGoToTop(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainPage isNavbarActive={isNavbarActive} />}
        />
        <Route path="/aboutpage" element={<About />} />
        <Route path="/view1" element={<View1 />} />
        <Route path="/view2" element={<View2 />} />
        <Route path="/view3" element={<View3 />} />
      </Routes>
      {isGoToTop && <GoToTopButton scrollToTop={scrollToTop} />}
    </Router>
  );
};

export default App;
