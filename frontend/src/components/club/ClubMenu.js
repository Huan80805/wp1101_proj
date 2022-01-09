import React, { useState} from 'react';
import 'antd/dist/antd.css';
import db from '../../db';
import { Tag } from 'antd';

const ClubMenu = ({chooseClubOnClick, estaClubOnClick, joinClubOnClick})=>{
    // temp
    const clubs = db.club;

    
    return(
        <div className='App'>
            <div className='App-title'>
                <h1 >Club Menu</h1>
            </div>
            {clubs.length === 0 ? (
                <p style={{ color: '#ccc' }}>
                No messages...
                </p>
            ):(
                clubs.map(({name, meetingTime}, i)=>(
                    <p key = {i}>
                        <Tag color='blue'  onClick={chooseClubOnClick}>{name}</Tag>{meetingTime}
                    </p>
                ))
            )

            }
            <button onClick={estaClubOnClick}>estaClubOnClick</button>
            <button onClick={joinClubOnClick}>joinClubOnClick</button>
        </div>
    )
}

export default ClubMenu;   