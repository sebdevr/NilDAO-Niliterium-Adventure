import Heart from "../images/heart.svg"
import BonusEffect from "../images/bonus-effect.svg";
import FlippingIcon from "../images/flipping-icon.svg";
import ControllerIcon from "../images/controller-icon.svg";
import NavigateIcon from "../images/navigate-button.svg";
import BackArrow from "../images/back-arrow.svg";
import './Lb.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Lb({client}) {
    const [leaderboard, setLeaderboard] = useState([]);

 useEffect(() => {
        client.get('/record').then(data => data.data).then(data => {
          setLeaderboard([...data])
        })
    }, [])  
  return (
    <div className="flex flex-col h-screen" >
        <div className="Header flex bg-black items-center justify-between px-3 py-3">
            <div className="flex flex-col">
                <div className="flex">
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                </div>
                <div className="flex pt-2">
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                    <span className="px-1"><img src={Heart} alt="heart" width="18px"/></span>
                </div>
            </div>
            <div className="flex" style={{marginRight: "10%"}}>
                <span className="mt-2 mx-3">
                    <img src={FlippingIcon} alt="flipping-icon" width="30px"/>
                    <p className="Header-text">Flipping</p>
                </span>
                <p className="Nilistador mx-8">Nilistador</p>
                <span  className="mt-2 mx-3">
                    <img src={ControllerIcon} alt="flipping-icon" width="30px"/>
                    <p className="Header-text">Battle</p>
                </span>
            </div>
            <div className="flex mr-4">
                <span className="mr-4">
                    <img src={BonusEffect} alt="bonus effect" width="18px"/>
                </span>
                <div className="flex mr-4">
                    <p className="text-white">x </p>
                    <p className="text-white"> -</p>
                </div>
            </div>
        </div>
        <div className="Body">
        <div className="table">
        <table>
                     <tr>
                         <th style={{borderRadius: "6px", background: "rgba(0, 0, 0, 0.6)"}}>#</th>
                         <th style={{borderRadius: "6px", background: "rgba(0, 0, 0, 0.6)"}}>Username</th>
                         <th style={{borderRadius: "6px", background: "rgba(0, 0, 0, 0.6)"}}>Score</th>
                     </tr>
                     {leaderboard.filter(x => x.score).sort((a, b) => a.score + b.score).map((l, key) => <tr>
                     <td style={{borderRadius: "6px", background: "rgba(0, 0, 0, 0.6)"}}>{l.id}</td>
                     <td style={{borderRadius: "6px", background: "rgba(0, 0, 0, 0.6)"}}>{l.userName}</td>
                     <td className={'xpScore'} style={{borderRadius: "6px", background: "rgba(0, 0, 0, 0.6)"}}>{l.score} XP</td>

                 </tr>)}
                 </table>
        </div>
            {/* table row  */}
            {/* <div className="flex flex-col w-full mb-1" >
                    <div className="flex w-full px-2 py-1" style={{background: "#66645D"}}>
                        <div className="flex w-2/12 px-2 py-2" style={{borderRadius: "6px", background: "rgba(0, 0, 0, 0.6)"}}>
                            <div className="flex w-full px-3 py-1 items-center justify-center" style={{border: "1px solid rgba(226, 222, 211, 0.2)", borderRadius: "4px"}}>
                                <p className="Tr-font"> {l.id}</p>
                            </div>
                        </div>
                        <div className="flex w-5/12 px-2 py-2 mx-1" style={{borderRadius: "6px", background: "rgba(0, 0, 0, 0.6)"}}>
                            <div className="flex w-full px-8 py-1 items-center justify-center" style={{border: "1px solid rgba(226, 222, 211, 0.2)", borderRadius: "4px"}}>
                                <p className="Tr-font">{l.userName}</p>
                            </div>
                        </div>
                        <div className="flex w-5/12 px-2 py-2 mx-1" style={{borderRadius: "6px", background: "rgba(0, 0, 0, 0.6)"}}>
                            <div className="flex w-full items-center justify-center px-8 py-1" style={{border: "1px solid rgba(226, 222, 211, 0.2)", borderRadius: "4px"}}>
                                <p className="Tr-font">{l.score} XP</p>
                            </div>
                        </div>
                    </div>
                </div> */}
     
            {/* table row ends */}
            
        </div>
        <div className="fixed bottom-0 w-full bg-black flex items-center justify-end pr-11 px-3 py-5 z-10 footer">
            <Link to="/"><div className="flex mr-8 cursor-pointer">
               <p className="Footer-text mr-3">Back</p>
               <img src={BackArrow} alt="back-arrow" width="25px"/>
           </div>
           </Link>
           <div className="flex ml-4">
               <p className="Footer-text mr-3">Navigate</p>
               <img src={NavigateIcon} alt="back-arrow" width="25px"/>
           </div>
        </div>
    </div>      
  );
}
