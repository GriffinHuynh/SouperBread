import './App.css';
import Nav from './Nav.jsx';
import Home from './components/home/home.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Nav />
        <Routes>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
