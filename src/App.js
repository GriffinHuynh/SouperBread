import "./css/App.css";
import Nav from "./Nav.jsx";
import Home from "./components/home/home.jsx";
import Footer from "./Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
