import './App.css';
import title from "./images/title.png";
import pointer from "./images/active-icon.svg";
import Blankpointer from "./images/inactive-icon.svg";
import { useState } from 'react';
import { Link } from "react-router-dom";


export default function Home() {

    const [active, setActive] = useState("")
    const [clickActive, setClickActive] = useState("")

    const handleactive = (value) => {
        if(!! clickActive ){
            setActive(value);
        }
        else {
            setActive(value);
            setClickActive("");
        }
    }

    const handleClickActive = (value) => {
        setClickActive(value);
    }
  return (
    <div className="flex flex-col h-screen" 
          style={{
            backgroundImage: `url("./background.png")`, 
            backgroundRepeat: "no-repeat", 
            backgroundSize: "cover",
            backgroundPosition: "right"
          }}>
      {/* content div starts*/}
      <div className="fixed origin-top-right absolute right-16 mt-2">
          <img src={title} alt="title"/>
      </div>
      <div className="fixed bottom-10 absolute right-16 flex flex-col">
        <div className="Menus flex-col">
          <div className="flex cursor-pointer" onMouseOver={() => handleactive("leaderboard")} onMouseLeave={() => handleactive("")} onClick={() => handleClickActive("leaderboard")}>
              {
                clickActive == "leaderboard" ?
                (
                    <div className="flex">
                        <img src={pointer} alt="pointer" width="20"/>
                        <Link to="/Leaderboard"><p className="ml-6" style={{color: "#E2DED3"}}>Leaderboard</p></Link>
                    </div> 
                )
                :
                active == "leaderboard" ? 
                (
                    <div className="flex">
                        <img src={pointer} alt="pointer" width="20"/>
                        <Link to="/Leaderboard"><p className="ml-6" style={{color: "#E2DED3"}}>Leaderboard</p></Link>
                    </div>
                )
                :
                (
                    <div className="flex">
                        <img src={Blankpointer} alt="pointer" width="20"/>
                        <Link to="/Leaderboard"><p className="ml-6" style={{color: "#AAAFAB"}}>Leaderboard</p></Link>
                    </div>
                    
                )
              }
          </div>
          <div className="flex mt-4">
            <p style={{color: "#828282"}}>Load campaign</p>
          </div>
          <div className="flex mt-4">
            <p style={{color: "#828282"}}>Missions</p>
          </div>
          <div className="flex mt-4">
            <p style={{color: "#828282"}}>Profile</p>
          </div>
          <div className="flex mt-4 cursor-pointer" onMouseOver={() => handleactive("about")} onMouseLeave={() => handleactive("")}  onClick={() => handleClickActive("about")}>
            {
                clickActive == "about" ?
                (
                    <div className="flex">
                        <img src={pointer} alt="pointer" width="20"/>
                        <Link to="/about"><p className="ml-6" style={{color: "#E2DED3"}}>About</p></Link>
                    </div>
               )
                :
                active == "about" ? 
                (
                    <div className="flex">
                        <img src={pointer} alt="pointer" width="20"/>
                        <Link to="/About"><p className="ml-6" style={{color: "#E2DED3"}}>About</p></Link>
                    </div>
               )
               :
               (
                <div className="flex">
                    <img src={Blankpointer} alt="pointer" width="20"/>
                    <Link to="/About"><p className="ml-6" style={{color: "#AAAFAB"}}>About</p></Link>
                </div>
                
            )
              }
          </div>
          <div className="flex mt-4 cursor-pointer" onMouseOver={() => handleactive("joinlegion")} onMouseLeave={() => handleactive("")}  onClick={() => handleClickActive("joinlegion")}>
            {
                clickActive == "joinlegion" ?
                (
                    <div className="flex">
                        <img src={pointer} alt="pointer" width="20"/>
                        <a href="https://forms.gle/TpinEj8JV2mxJx837"><p className="ml-6" style={{color: "#E2DED3"}}>Join Legion</p></a>
                    </div>
               )
                :
                active == "joinlegion" ? 
                (
                    <div className="flex">
                        <img src={pointer} alt="pointer" width="20"/>
                        <a href='https://forms.gle/TpinEj8JV2mxJx837'><p className="ml-6" style={{color: "#E2DED3"}}>Join Legion</p></a>
                    </div>
               )
               :
               (
                <div className="flex">
                    <img src={Blankpointer} alt="pointer" width="20"/>
                    <a href="https://forms.gle/TpinEj8JV2mxJx837"><p className="ml-6" style={{color: "#AAAFAB"}}>Join Legion</p></a>
                </div>
                
            )
              }
          </div>
        </div>
        {/* footer menus */}
        <div className="Footer-Menus flex-col">
          <div className="flex ">
            <p>Ver. 1.0.0</p>
          </div>
          <div className="flex mt-3">
            <p>DLC Ver.1.0</p>
          </div>
          <div className="flex mt-3">
            <p>Design by HunterParamore</p>
          </div>
        </div>
      </div>
      {/* content div ends */}
    </div>
      
  );
}
