import React, { useState} from 'react';
import 'antd/dist/antd.css';
import ClubLoby from '../components/club/ClubLoby';
import ChooseClub from '../components/club/ChooseClub';
const ClubPlatform = ({logOut}) =>{
    const [chooseClub, setChooseClub] = useState(false)

    const chooseClubOnClick = ()=>{
        setChooseClub(()=> true)
    }

    return(
        <>
            <p>lobby</p>
            {chooseClub
                ? <ClubLoby/>
                : <ChooseClub chooseClubOnClick={chooseClubOnClick}/>
            }
            <button onClick={logOut}>log out</button>
        </>
        
    )
}

export default ClubPlatform;   