import './App.css';
import { BrowserRouter, Routes, Route, NavLink, Redirect} from "react-router-dom";
import Home from './Home';
import Lb from './components/Lb';
import Discord from './components/Discord';
import axios from 'axios';
import React from 'react';
import About from './components/About';


function App() {
  const client = axios.create({
    baseURL: 'http://localhost:5000'
  })


  return (
      <Routes>
        <Route exact path={"/"} element={<Home client={client}/>} />
        <Route path={"/leaderboard"} element={<Lb client={client}/>} />
        <Route path={"/Discord"} element={<Discord client={client}/>} />
        <Route path={"/About"} element={<About client={client}/>} />
      </Routes>
  );
}

export default App;
