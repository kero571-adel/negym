import './trainers.css';
import * as Icons from "react-bootstrap-icons";
export default function Trainers({trainers,hide}){
    return(
        <> 
            <div className='trainers text-center'>
                <div className='title'style={{marginTop:trainers}}>Our Gym Trainers</div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg- row-cols-xl-4 g-4 text-center m-4 justify-content-center">
                    <div className="col m-4">
                        <div className="card bg-transparent text-white">
                            <div className="card-body">
                                <h4 className="card-title">Smirth Jon</h4>
                            </div>
                            <div className='picture1'>
                                <div className='justify-content-center alien-item-center bg-white icon'style={{color:"red"}}>
                                    <Icons.Facebook/>
                                    <Icons.Twitter/>
                                    <Icons.Instagram/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col m-4">
                        <div className="card bg-transparent text-white">
                            <div className="card-body">
                                <h4 className="card-title">Jean Doe</h4>
                            </div>
                            <div className='picture2'>
                                <div className='justify-content-center alien-item-center bg-white icon'style={{color:"red"}}>
                                    <Icons.Facebook/>
                                    <Icons.Twitter/>
                                    <Icons.Instagram/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col m-4">
                        <div className="card bg-transparent text-white">
                            <div className="card-body">
                                <h4 className="card-title">Alex Den</h4>
                            </div>
                            <div className='picture3'>
                                <div className='justify-content-center alien-item-center bg-white icon'style={{color:"red"}}>
                                    <Icons.Facebook/>
                                    <Icons.Twitter/>
                                    <Icons.Instagram/>
                                </div>
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