import React, { useState} from 'react';
import 'antd/dist/antd.css';

const ClubMenu = ({estaClubOnClick, joinClubOnClick})=>{
    
    return(
        <>
            <p>ClubMenu</p>
            <button onClick={estaClubOnClick}>estaClubOnClick</button>
            <button onClick={joinClubOnClick}>joinClubOnClick</button>
        </>
    )
}

export default ClubMenu;   