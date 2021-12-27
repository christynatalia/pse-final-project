import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import './SensorsGalery.css';

const SensorsGalery = () => {
    return (
        <>
        <Navbar/>
        <div className="container-fluid">
        <div className="title-header">
            <h2 className="text-start header ml-3 p-2">Sensors:</h2>
            </div>
            <div className="row">
                <div className='col-md-4'>
                    <div className="card ml-3 p-2">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sensors Name</h5>
                            <p className="card-text text-center">Sensors Description</p>
                            <div className="container-button text-center">
                                <a href="#" className="btn btn-primary turn-button">Turn on</a>
                                <a href="#" className="btn btn-primary turn-button">Turn off</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-button-add">
                    <div className ="text-center m-4 p-2">
                        <a className ="btn btn-primary" href="#" role="button">
                            Add Sensors
                        </a>
                    </div>
                </div>

            </div>
            
        </div>
        </>
    )

}

export default SensorsGalery; 
