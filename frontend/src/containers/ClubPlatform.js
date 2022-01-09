import React, { useState} from 'react';
import 'antd/dist/antd.css';
import ClubLoby from './ClubLoby';
import ChooseClub from '../components/club/ChooseClub';
const ClubPlatform = ({logOut}) =>{
    const [chooseClub, setChooseClub] = useState(false)

    const chooseClubOnClick = ()=>{
        setChooseClub(()=> true)
    }
    const reChooseClub = ()=>{
        setChooseClub(()=> false)
    }

    return(
        <>
            {chooseClub
                ? <ClubLoby reChooseClub={reChooseClub}/>
                : <ChooseClub chooseClubOnClick={chooseClubOnClick}/>
            }
            <button onClick={logOut}>log out</button>
        </>
        
    )
}

export default ClubPlatform;   