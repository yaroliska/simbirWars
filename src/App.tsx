import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MenuPage from "./components/pages/MenuPage/MenuPage";
import LevelPage from "./components/pages/LevelPage/LevelPage";

function App() {
  return (
      <Router>
          <Routes>
            <Route path="/" element={<LevelPage/>} />
            <Route path="menu" element={<MenuPage/>}/>
          </Routes>
      </Router>
  );
}

export default App;
