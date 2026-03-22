import './contactus.css';
import * as Icons from "react-bootstrap-icons";
export default function ContactUs({contactUs}){
    return(
        <div className="contactUs">
            <div className='content row  row-cols-md-1 row-cols-lg-2 g-4'style={{marginTop:contactUs}}>
                <div className='picture'></div>
                <form>
                    <div className='title'>Contact Us</div>
                    <input type='text' placeholder='Name'/>
                    <input type='email' placeholder='email'/>
                    <input type='number' placeholder='phone number'/>
                    <textarea placeholder='Message'></textarea>
                    <button>submit</button>
                    
                </form>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 text-center m-4"id='detail'>
                <div className='col'>
                    <div className="card bg-transparent text-white">
                        <Icons.Lock style={{margin:"auto",width:"80px",height:"80px"}}/>
                        <div className="card-body">
                            <h3 className="card-title">Location</h3>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card bg-transparent text-white">
                        <Icons.Lock style={{margin:"auto",width:"80px",height:"80px"}}/>
                        <div className="card-body">
                            <h3 className="card-title">+02 1234567890</h3>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card bg-transparent text-white">
                        <Icons.EmojiAngryFill style={{margin:"auto",width:"80px",height:"80px"}}/>
                        <div className="card-body">
                            <h3 className="card-title">demo@gmail.com</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='floate'>
                <div>© 2020 All Rights Reserved. Design by Free Html Templates</div>
            </div>
        </div>
    )
}