import React, { useState, useEffect } from 'react';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import './accounts.css';

const Card = () => {
    return (
        <div className='accountCard '>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-3 ps-0'>
                        <div>5</div>
                        <p>of 7</p>
                    </div>
                    <div className='col-9 pe-0'>
                        <p>Lorem ipsum dolor consectetur adipisicing.</p>
                        <span><i>$ 8.00</i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Accounts() {
    const [cardNum, setCardNum] = useState(0)
    useEffect(() => {
        let arr = [];
        for (let i = 0; i < 15; i++) {
            arr.push(i)
        }
        setCardNum([...arr])
    }, [])
    return (
        <div className='asideCol'>
            <div className='accountHead'>
                <div className='accountHeadName'>
                    <div>
                        <span>USPS</span>
                        <p>Priority (1-3 Days)</p>
                    </div>
                    <div>
                        <LocationCityOutlinedIcon />
                    </div>
                </div>
                <div className='accountHeadName1'>
                    <span>Faded Flat</span>
                    <p>Rate Envelope</p>
                </div>
                <p>Adult Signature Required</p>
                <div className='accountHeadRate'>
                    <p>
                        <span>Base Rate</span>
                        <span>$ 8.00</span>
                    </p>
                    <p>
                        <span>Adult Signature</span>
                        <span>$ 8.00</span>
                    </p>
                </div>
            </div>
            <div className='accountCardHead'>
                <span>15 Items</span>
                <button>Packaging Slip</button>
            </div>
            <div className='accountCardBody'>
                {cardNum.length ?
                    cardNum.map(ele => <Card />)
                    : ''
                }
            </div>
        </div>
    )
}

export default Accounts
