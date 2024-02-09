import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

function Layout() {
  const [theme, setTheme] = useState("light");
  return (
    // add class "body" to toggle to dark mode
    <div id="inner-body" className={theme === "light" ? "" : "body"}>
      <Header setTheme={setTheme} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
