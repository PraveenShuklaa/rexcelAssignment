import React from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import './aside.css';
import Order from './sections/order/Order';
import ShipInfo from './sections/shipInfo/ShipInfo';
import Accounts from './sections/accounts/Accounts';

function Aside() {
    return (
        <div className='aside'>
            <div className='asideHeader'>
                <div className='asideHeading'>Ship</div>
                <div className='asideHeadingRight'>
                    <div className='addShip'>
                        CREATE NEW SHIPMENT <span><AddRoundedIcon /></span>
                    </div>
                    <div className='printer'>
                        <label>Printer : </label>
                        <select className='form-select'>
                            <option>(Print via Browser)</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='asideBody'>
                <div className='container-fluid'>
                    <div className='row asideRow'>
                        <div className='col-lg-4 col-md-6 col-12 order-lg-1 order-md-1 order-1 mb-lg-0 mb-3'>
                            <Order />
                        </div>
                        <div className='col-lg-5 col-12 order-lg-2 order-md-3 order-2 mb-lg-0 mb-3'>
                            <ShipInfo />
                        </div>
                        <div className='col-lg-3 col-md-6 col-12 order-lg-3 order-md-2 order-3 mb-lg-0 mb-3'>
                            <Accounts />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aside
