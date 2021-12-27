import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';


const ItemsGalery = () => {
    return (
        <>
         <Navbar/>
        <div className="container-fluid">
            <div className="title-header">
            <h2 className="text-start header ml-3 p-2">Rooms:</h2>
            </div>
            <div className="row">
                <div className='col-md-4'>
                    <div className="card ml-3 p-2">
                        <div className="card-body">
                            <h5 className="card-title">Room Name</h5>
                            <p className="card-text">Room Description</p>
                            <a href="/sensors" class="btn btn-primary">Details</a>
                        </div>
                    </div>
                </div>
                

                <div className="container-button">
                    <div className ="text-center m-5 p-2">
                        <a className ="btn btn-primary center" href="/addRoom" role="button">
                            Add Room
                        </a>
                    </div>
                </div>

            </div>
        </div>
        </>
        )
    }

export default ItemsGalery;
