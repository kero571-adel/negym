import './whyus.css';
import * as Icons from "react-bootstrap-icons";
export default function WhyUs({whyus,hide}){
    return(
        <> 
            <div className='whyus text-center'>
                <div className='title'style={{marginTop:whyus}}>Why Choose Us</div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 text-center m-4 justify-content-center">
                <div className="col">
                    <div className="card bg-transparent text-white">
                    <Icons.PiggyBankFill style={{margin:"auto",color:"red",width:"80px",height:"80px"}}/>
                    <div className="card-body">
                        <h3 className="card-title">QUALITY EQUIPMENT</h3>
                        <p className="card-text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-transparent text-white">
                    <Icons.PiggyBankFill style={{margin:"auto",color:"red",width:"80px",height:"80px"}}/>
                    <div className="card-body">
                        <h3 className="card-title">NUTRITION</h3>
                        <p className="card-text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-transparent text-white">
                    <Icons.PiggyBankFill style={{margin:"auto",color:"red",width:"80px",height:"80px"}}/>
                    <div className="card-body">
                        <h3 className="card-title">HEALTHY DIET PLAN</h3>
                        <p className="card-text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-transparent text-white">
                    <Icons.PiggyBankFill style={{margin:"auto",color:"red",width:"80px",height:"80px"}}/>
                    <div className="card-body">
                        <h3 className="card-title">SPORT TRAINING</h3>
                        <p className="card-text">ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 text-center m-4"id='detail'style={{display:hide?hide:"flex"}}>
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
            </div>
            <div className='floate'style={{display:hide?hide:"flex"}}>
                <div>© 2020 All Rights Reserved. Design by Free Html Templates</div>
            </div>
        </>
    )
}