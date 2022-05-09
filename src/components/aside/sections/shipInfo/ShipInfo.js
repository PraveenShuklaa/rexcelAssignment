import React from 'react';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import './shipinfo.css';

function ShipInfo() {
    return (
        <div className='asideCol'>
            <div className='shipInfoHead'>
                <div className='shipInfoHeadLeft'>
                    <p>
                        <label>LOCATEINV</label>
                        <span>5549475</span>
                        <RestartAltIcon />
                    </p>
                </div>
                <div className='shipInfoHeadRight'>
                    <div>
                        <p>SHIP DATE</p>
                        <span>7/20/2021</span>
                    </div>
                    <div>
                        <p>REFERENCE</p>
                        <span>176123</span>
                    </div>
                </div>
            </div>
            <div className='shipInfoBody'>
                <div className='tabPanel'>
                    <div className='tab'>
                        Select Service
                    </div>
                    <div className='tab'>
                        Package
                    </div>
                    <div className='tab active'>
                        Details
                    </div>
                </div>
                <div className='tabBody'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-3 ps-0'>
                                <label className='form-label' htmlFor='units'>Units</label>
                                <select className='form-select' id='units'>
                                    <option>in/lb/oz</option>
                                </select>
                            </div>
                            <div className='col-4 px-0'>
                                <label className='form-label' htmlFor='scale'>Scale</label>
                                <select className='form-select' id='scale'>
                                    <option>Station1</option>
                                </select>
                            </div>
                            <div className='col-5 pe-0'>
                                <label className='form-label' htmlFor='scaler'>Scale Reading</label>
                                <input type='text' className='form-control' placeholder='---' id='scaler' />
                            </div>
                            <div className='col-4 ps-0'>
                                <label className='form-label' htmlFor='Length'>Length</label>
                                <div>
                                    <input type='text' className='form-control' placeholder='0' id='Length' />
                                    <span>in</span>
                                </div>
                            </div>
                            <div className='col-4 px-0'>
                                <label className='form-label' htmlFor='Width'>Width</label>
                                <div>
                                    <input type='text' className='form-control' placeholder='0' id='Width' />
                                    <span>in</span>
                                </div>
                            </div>
                            <div className='col-4 pe-0'>
                                <label className='form-label' htmlFor='Height'>Height</label>
                                <div>
                                    <input type='text' className='form-control' placeholder='0' id='Height' />
                                    <span>in</span>
                                </div>
                            </div>
                            <div className='col-6 ps-0'>
                                <input type='checkbox' className='form-check-input' id='check1' value='dg Goods' />
                                <label class="form-check-label" htmlFor="check1">
                                    Dangerous Goods
                                </label>
                            </div>
                            <div className='col-6 pe-0'>
                                <input type='checkbox' className='form-check-input' id='check2' value='live Bees' />
                                <label class="form-check-label" htmlFor="check2">
                                    Contains Live Bees
                                </label>
                            </div>
                            <div className='col-12 ps-0'>
                                <input type='checkbox' className='form-check-input' id='check3' value='notify email' />
                                <label class="form-check-label" htmlFor="check3">
                                    Send Notification Email
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='save'>Save Shipment Form</button>
            </div>
        </div>
    )
}

export default ShipInfo
