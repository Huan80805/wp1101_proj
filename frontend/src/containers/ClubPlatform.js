import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import ClubLoby from './ClubLoby';
import ChooseClub from '../components/club/ChooseClub';
const ClubPlatform = ({logOut, userName, data}) =>{
    const [club, setClub] = useState('')

    const reChooseClub = ()=>{
        setClub(()=>'')
    }

    return(
        <>
            {(club != '')
                ? <ClubLoby reChooseClub={reChooseClub} userName={userName} club={club}/>
                : <ChooseClub setClub={setClub} userName={userName} data={data}/>
            }
            <button onClick={logOut}>log out</button>
        </>
        
    )
}

export default ClubPlatform;   