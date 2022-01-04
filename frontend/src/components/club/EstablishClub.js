import React, { useState} from 'react';
import 'antd/dist/antd.css';

const EstablishClub = ({backToChooseClub, chooseClubOnClick})=>{


    return(
        <>
            <p>EstablishClub</p>
            <button onClick={backToChooseClub}>backToChooseClub</button>
            <button onClick={chooseClubOnClick}>Choose this club</button>
        </>
    )
}

export default EstablishClub;