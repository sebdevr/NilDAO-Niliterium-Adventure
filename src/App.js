import './App.css';
import { BrowserRouter, Routes, Route, NavLink, Redirect} from "react-router-dom";
import Home from './Home';
import Lb from './components/Lb';
import Discord from './components/DiscordConnectPage';
import axios from 'axios';
import React from 'react';
import About from './components/About';


function App() {
  const client = axios.create({
    baseURL: ''
  })


  return (
      <Routes>
        <Route exact path={"/"} element={<Home client={client}/>} />
        <Route path={"/leaderboard"} element={<Lb client={client}/>} />
        <Route path={"/connectdiscord"} element={<Discord client={client}/>} />
        <Route path={"/about"} element={<About client={client}/>} />
      </Routes>
  );
}

export default App;
