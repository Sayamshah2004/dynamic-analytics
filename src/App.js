import { useEffect, useState } from "react";
import "./App.css";
import { currentUser } from "./auth/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LoginPage from "./components/Login";
import SignUp from "./components/Signup";
import Dashboard from "./components/Dashboard";
function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [login, setLogin] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <Router>
        <Navbar
          openSideBar={openSideBar}
          openbar={() => setOpenSideBar(true)}
        ></Navbar>
        {openSideBar && (
          <Sidebar
            setOpenSideBar={setOpenSideBar}
            login={() => setLogin(true)}
            signIn={() => setSignIn(true)}
            setTheme={setTheme}
            theme={theme}
          ></Sidebar>
        )}
        {login && (
          <LoginPage
            signIn={() => {
              setSignIn(true);
              setLogin(false);
            }}
            closeLogin={() => setLogin(false)}
          ></LoginPage>
        )}
        {signIn && (
          <SignUp
            login={() => {
              setLogin(true);
              setSignIn(false);
            }}
            closeSignIn={() => setSignIn(false)}
          ></SignUp>
        )}
      </Router>
      {currentUser() ? (
        <div className="container-fluid px-3 px-md-4 mt-2">
          <Dashboard products={products} setProducts={setProducts} />
        </div>
      ) : (
        <h4 className="d-flex align-items-center justify-content-center position-relative vh-100 w-100  start-0 top-0">
          Login to see charts
        </h4>
      )}
    </div>
  );
}

export default App;
