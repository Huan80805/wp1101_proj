import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import ClubMenu from './ClubMenu';
import EstablishClub from './EstablishClub';
import JoinClub from './JoinClub';


const ChooseClub = ( {userName, data, setClub})=>{

    const [establishClub, setEstaClub] = useState(false);
    const [joinClub, setJoinClub] = useState(false);
        
    const estaClubOnClick = ()=>{
        setEstaClub(()=>true)
    }
    const joinClubOnClick = ()=>{
        setJoinClub(()=>true)
    }

    const backToChooseClub = ()=>{
        setEstaClub(()=>false)
        setJoinClub(()=>false)
    }

    return(
        <>
            {(!establishClub && !joinClub)&&
                <ClubMenu estaClubOnClick={estaClubOnClick} 
                joinClubOnClick={joinClubOnClick} 
                data={data} setClub={setClub}/>
            }
            {establishClub &&
                <EstablishClub backToChooseClub={backToChooseClub} 
                 userName={userName} setClub={setClub}/>
            }
            {joinClub &&
                <JoinClub userName ={userName} backToChooseClub={backToChooseClub}
                setClub={setClub} 
                />
            }
        </>
    )
}

export default ChooseClub;   