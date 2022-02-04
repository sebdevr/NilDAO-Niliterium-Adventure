import './DiscordConnectPage.css';
import { Link } from "react-router-dom";


export default function DiscordConnect() {
  return (
<div className="header-Container">
<div className="Discord-Header-text">
          <p>Welcome to the<br/> Niliterium Conquest</p>
      </div>
      <div className="Sub-text">
          <p>pledge to keep going</p>
      </div>  
    <div className='btns'>
    <Link to="#">
        <div className="Yellow-Border">
          <p className="Button-Text">Connect Discord</p>
        </div>
        </Link>
        <Link to="#">
        <div className="Border">
          <p className="Button-Text">Quit</p>
        </div>
        </Link></div> 
</div>
  );
}
