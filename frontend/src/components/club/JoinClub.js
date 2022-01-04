import React, { useState} from 'react';
import 'antd/dist/antd.css';

const JoinClub = ({backToChooseClub, chooseClubOnClick})=>{


    return(
        <>
            <p>JoinClub</p>
            <button onClick={backToChooseClub}>backToChooseClub</button>
            <button onClick={chooseClubOnClick}>Choose this club</button>
        </>
    )
}

export default JoinClub;