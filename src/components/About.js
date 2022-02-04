import './About.css';
import { Link } from "react-router-dom";
import BackArrow from "../images/back-arrow.svg";
import AButton from "../images/a-button.svg";
import { useState } from 'react';
import Logo from '../images/about-logo.png';


export default function About() {
    return (
        <div className="h-screen">
<div className="top-background relative w-full h-1/4">
    <p className=" header-about-text absolute bottom-0 pl-16">About</p>
</div>

<div className="pl-16  about-text pt-6">
<p className="about-text w-3/5 pt-3">Welcome to the Niliterium ⚔️ <br/>
A sovereign empire looking to offer a HQ to the metaverse enjoyors.<br/><br/>

As a Scout, you actively take place in Niliterium Campaigns to gain experience and elevate yourself. 
With greater rank comes recognition, prosperity and responsabilities.<br/><br/> 

Missions can be accomplished in our discord.<br/> XP is precious. You will never have enough.<br/><br/></p>
</div>
<div className="fixed bottom-0 w-full bg-black flex md:px-16 md:py-10 px-8 py-8">

       <a href="http://discord.gg/nildao"><div className="flex">
               <p className="Footer-text mr-2">Join Discord</p>
               <img src={AButton} alt="back-arrow" width="32px"/>
           </div></a>
            <Link to="/">
       <div className="flex cursor-pointer pl-14">
               <p className="Footer-text mr-2">Back</p>
               <img src={BackArrow} alt="back-arrow" width="26px"/>
           </div>
           </Link>
        </div>
        <div className="w-2/6 invisible lg:visible fixed bottom-10  right-16 pr-12 px-5 py-12 z-10">
        <img src={Logo} alt='logo'/></div>
</div>
    );
  }