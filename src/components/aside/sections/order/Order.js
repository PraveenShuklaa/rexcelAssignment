import React, { useState, useEffect } from 'react';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './order.css';

const Card = () => {
    return (
        <div className='orderCard'>
            <div>
                <p>Roy Hufseteler</p>
                <p>
                    <b>1538284</b>
                    <LocationOnOutlinedIcon />
                    <span>US</span>
                </p>
            </div>
            <div>
                <p>12/29/2021 12:44PM</p>
                <button>Maghma Holding</button>
            </div>
        </div>
    )
}

function Order() {
    const [cardNum, setCardNum] = useState(0)
    useEffect(() => {
        let arr = [];
        for (let i = 0; i < 20; i++) {
            arr.push(i)
        }
        setCardNum([...arr])
    }, [])
    return (
        <div className='asideCol'>
            <div className='orderheading'>
                <div>
                    <ForwardToInboxOutlinedIcon />
                    <span>80 Orders</span>
                </div>
                <div>
                    <FilterAltOutlinedIcon />
                    <RestartAltIcon />
                </div>
            </div>
            <div className='orderSearch'>
                <input type='text' className='form-control' placeholder='Search Orders...' />
            </div>
            <div className='orderBody'>
                {cardNum.length ?
                    cardNum.map(ele => <Card />)
                    : ''
                }
            </div>
        </div>
    )
}

export default Order
