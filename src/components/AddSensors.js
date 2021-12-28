import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';


const AddSensors= () => {
    return (
        <>
        <Navbar/>
        <div className="container-sm pt-4">
            <Link to="/sensors">
                <button type="button" className="btn btn-outline-danger btn-lg">Cancel</button>
            </Link>

            <div className="row">
                <div className="col-lg-10 col-xl-9 mx-auto">
                    <div className="card card-style flex-row my-5 bg-light text-white">
                        <div className="card-body">
                            <h5 className="card-title text-center">New Sensors</h5>

                            <div className="form-label-group">
                                <input type="text" id="inputTitle"
                                    className="form-control" placeholder="Give title to your post..." />
                                <label htmlFor="inputTitle">Name of your sensors</label>
                            </div>

                            <div className="form-label-group">
                                <select class="custom-select" id="inputGroupType">
                                    <option selected>-</option>
                                    <option value="1">AC</option>
                                    <option value="2">Lamp</option>
                                 </select>
                            </div>

                            <div className="form-label-group">
                                <input type="text" id="inputDesc"
                                    className="form-control" placeholder="Add Type" />
                                <label htmlFor="inputTag">Description</label>
                            </div>

            

                            <div className="d-flex justify-content-center">
                                <div className="d-flex flex-column">
                                    <div className="text-warning"><small></small></div>
                                    <button className="btn btn-primary">Add Item</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default AddSensors; 