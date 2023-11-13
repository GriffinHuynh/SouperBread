import "./App.css";
import Nav from "./Nav.jsx";
import Home from "./components/home/home.js";
import Footer from "./Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes></Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
