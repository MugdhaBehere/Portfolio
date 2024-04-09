import React, { useEffect, useState } from "react";
import FirstPage from "../pages/FirstPage/FirstPage";
import Logo from "../pages/Logo/Logo";
import Homepage from "../components/Homepage/Homepage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("FirstPage");

  useEffect(() => {
    const firstPageTimer = setTimeout(() => {
      setCurrentPage("Logo");
    }, 20000);

    const logoPageTimer = setTimeout(() => {
      setCurrentPage("Homepage");
    }, 40000);

    // Clear timers to avoid memory leaks
    return () => {
      clearTimeout(firstPageTimer);
      clearTimeout(logoPageTimer);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Render the current page based on the state
  return (
    <div>
      {currentPage === "FirstPage" && <FirstPage />}
      {currentPage === "Logo" && <Logo />}
      {currentPage === "Homepage" && <Homepage />}
    </div>
  );
};

export default App;
