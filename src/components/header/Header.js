import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import FlagIcon from '@mui/icons-material/Flag';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import Button from '@mui/material/Button';
import './header.css';

function Header() {
    return (
        <header>
            <div className='container-fluid'>
                <div className='brand_menu'>
                    <div className='brand'>
                        <h2>Axiom</h2>
                        <p>SHIP MANAGER</p>
                    </div>
                    <div className='menu'>
                        <MenuIcon />
                    </div>
                </div>
                <div className='country_note'>
                    <div className='country'>
                        <div>
                            <CallOutlinedIcon />
                        </div>
                        <div>
                            <PersonOutlineIcon />
                        </div>
                        <div>
                            <FlagIcon />
                        </div>
                    </div>
                    {/* <Button variant='contained'>Quick Note</Button> */}
                </div>
            </div>
        </header>
    )
}

export default Header
