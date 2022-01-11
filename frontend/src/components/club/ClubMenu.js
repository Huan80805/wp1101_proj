import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import { Tag, Button } from 'antd';

const ClubMenu = ({estaClubOnClick, joinClubOnClick,
     data, setClub})=>{
    
    const chooseThisClub = (name) =>{
        setClub(()=>name)

    }

    return(
        <div className='App'>
            <div className='App-title'>
                <h1 >Club Menu</h1>
            </div>
            {data.user.userData.clubs.length === 0? (
                <p style={{ color: '#ccc' }}>
                    No Clubs
                </p>
            ):(
                data.user.userData.clubs.map((clubs, i)=>(
                    <p key={i}>
                        <Button danger  onClick={e=>(chooseThisClub(e.target.innerHTML))}>{clubs}</Button>
                    </p>
                ))
            )
            }
                <div>
                    <Button onClick={estaClubOnClick}>estaClubOnClick</Button>
                    <Button onClick={joinClubOnClick}>joinClubOnClick</Button>
                </div>
            </div>
    )
}

export default ClubMenu;   