import './home.css';
import WhyUs from './WhyUs';
import Trainers from './Trainers.js';
import ContactUs from './ContactUs.js';
import { Link } from 'react-router';
export default function Home({head}){
    let hide = "none";
    return(
        <div className='containeree'>
            {/*head*/}
            <div className='head'>
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel"style={{color:"white",textAlign:"center",marginTop:head}}>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <div className='content'>
                                <div>Fitines</div>
                                <div>Training</div>
                                <div>Neogym</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .</p>
                                <Link to="/contactUs">  
                                    <button type="button" className="btn btn-outline-light">Contact Us</button>
                                    
                                </Link>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className='content'>
                                <div>Fitines</div>
                                <div>Training</div>
                                <div>Neogym</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .</p>
                                <Link to="/contactUs">  
                                    <button type="button" className="btn btn-outline-light">Contact Us</button>
                                </Link>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className='content'>
                                <div>Fitines</div>
                                <div>Training</div>
                                <div>Neogym</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .</p>
                                <Link to="/contactUs">  
                                    <button type="button" className="btn btn-outline-light">Contact Us</button>
                                </Link>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className='content'>
                                <div>Fitines</div>
                                <div>Training</div>
                                <div>Neogym</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .</p>
                                <Link to="/contactUs">  
                                    <button type="button" className="btn btn-outline-light">Contact Us</button>
                                </Link>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className='content'>
                                <div>Fitines</div>
                                <div>Training</div>
                                <div>Neogym</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .</p>
                                <Link to="/contactUs">  
                                    <button type="button" className="btn btn-outline-light">Contact Us</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-indicators" style={{transform: "translateY(100px)"}}>
                        <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                </div>
            </div>
            <WhyUs hide={hide}/>
            <div className='HEALTHY_MIND'>
                <h2>HEALTHY MIND, HEALTHY BODY</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
                <button type="button" className="btn btn-outline-light">READ MORE</button>
            </div>
            <Trainers hide={hide}/>
            <ContactUs/>
        </div>
    )
}