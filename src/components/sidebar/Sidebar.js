import React from 'react';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import './sidebar.css';

function Sidebar() {
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <div className='sidebaritem'>
                        <span className='icon'>
                            <DashboardRoundedIcon />
                        </span>
                        <span className='sidebarName'>Dashboard</span>
                    </div>
                </li>
                <li>
                    <div className='sidebaritem active'>
                        <span className='icon'>
                            <ForwardToInboxOutlinedIcon />
                        </span>
                        <span className='sidebarName'>Ship</span>
                    </div>
                </li>
                <li>
                    <div className='sidebaritem'>
                        <span className='icon'>
                            <CalendarTodayRoundedIcon />
                        </span>
                        <span className='sidebarName'>Booking</span>
                    </div>
                </li>
                <li>
                    <div className='sidebaritem'>
                        <span className='icon'>
                            <AccessAlarmOutlinedIcon />
                        </span>
                        <span className='sidebarName'>History</span>
                    </div>
                </li>
                <li>
                    <div className='sidebaritem'>
                        <span className='icon'>
                            <SettingsIcon />
                        </span>
                        <span className='sidebarName'>Setting</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
