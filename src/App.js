import './App.css';
import Home from './Home';
import WhyUs from './WhyUs';
import Trainers from './Trainers.js';
import ContactUs from './ContactUs';
import Error from './Error.js';
import {Route,Routes,Link} from 'react-router-dom';
import { useState } from 'react';
import * as Icons from "react-bootstrap-icons";
function App() {
  let[showorHide,setshoworHide] = useState({list:"0px",whyus:"100px"});
  let[border,setborder]=useState({home:"",whyUs:"",trainers:"",contact:""});
  function HorSList() {
    if (showorHide.list ==="0px") {
        setshoworHide({ list: "220px", whyus:"305px"});
    } else {
        setshoworHide({ list: "0px", whyus:"105px"});
    }
  }
  return (
    <>
      <nav>
        <div className='content'>
          <div className='logo'>Neogym</div>
          <div className='links'>
            <Link to='/'onClick={()=>{setborder({home:"rgb(181, 16, 33) 5px solid",whyUs:"",trainers:"",contact:""})}}>
              <div style={{borderBottom:border.home}} >HOME</div>
            </Link>
            <Link to='/whyUs' onClick={()=>{setborder({home:"",whyUs:"rgb(181, 16, 33) 5px solid",trainers:"",contact:""})}}>
              <div style={{borderBottom:border.whyUs}}>WhyUs</div>
            </Link>
            <Link to='/trainers'onClick={()=>{setborder({home:"",whyUs:"",trainers:"rgb(181, 16, 33) 5px solid",contact:""})}}>
              <div style={{borderBottom:border.trainers}}>Trainers</div>
            </Link>
            <Link to='/contactUs' onClick={()=>{setborder({home:"",whyUs:"",trainers:"",contact:"rgb(181, 16, 33) 5px solid"})}}>
              <div style={{borderBottom:border.contact}}>ContactUs</div>
            </Link>
            <Icons.Search/>
          </div>
          <div onClick={HorSList} className='btn'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className='linksHidden' style={{height:showorHide.list}}>
          <Link to='/'onClick={()=>{setborder({home:"rgb(181, 16, 33) 5px solid",whyUs:"",trainers:"",contact:""})}}>
            <div style={{borderBottom:border.home}} >HOME</div>
          </Link>
          <Link to='/whyUs' onClick={()=>{setborder({home:"",whyUs:"rgb(181, 16, 33) 5px solid",trainers:"",contact:""})}}>
            <div style={{borderBottom:border.whyUs}}>WhyUs</div>
          </Link>
          <Link to='/trainers'onClick={()=>{setborder({home:"",whyUs:"",trainers:"rgb(181, 16, 33) 5px solid",contact:""})}}>
            <div style={{borderBottom:border.trainers}}>Trainers</div>
          </Link>
          <Link to='/contactUs' onClick={()=>{setborder({home:"",whyUs:"",trainers:"",contact:"rgb(181, 16, 33) 5px solid"})}}>
            <div style={{borderBottom:border.contact}}>ContactUs</div>
          </Link>
          <Icons.Search className='position-absolute left-50 start-50 translate-middle m-t-2' style={{marginTop:"10px"}}/>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home head={showorHide.whyus}/>}/>
        <Route path="/whyus" element={<WhyUs whyus={showorHide.whyus}/>}/>
        <Route path="/trainers" element={<Trainers trainers={showorHide.whyus}/>}/>
        <Route path="/contactUs" element={<ContactUs contactUs={showorHide.whyus}/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  );
}
export default App;