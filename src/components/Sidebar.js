import { Link } from "react-router-dom";
import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa' 
import {GiFocusedLightning} from 'react-icons/gi'

const Sidebar = ({text, children}) => {
  return (
    <div className="sidebar">
        <GiFocusedLightning /><h2>Questionnaire</h2>      

      <div className='nav'>
        <Link  to='/' className="Button">Dashboard</Link>
        <Link to='/create' className="Button">Create</Link>  
        <Link to='/questionnaire' className="Button">Questionnaire</Link>

      </div>
      <div className="icons">

        <FaLinkedin />
        <FaGithub  />
        <FaFacebook />
      </div>
      <div className="menu-container" style={{ marginLeft: '300px', color: 'black', justifyContent: "center" }}>
        <h1>{text}</h1>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Sidebar;


