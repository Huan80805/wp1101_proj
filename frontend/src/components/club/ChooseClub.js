import React, { useState} from 'react';
import 'antd/dist/antd.css';
import ClubMenu from './ClubMenu';
import EstablishClub from './EstablishClub';
import JoinClub from './JoinClub';

const ChooseClub = ({chooseClubOnClick})=>{
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
                <ClubMenu estaClubOnClick={estaClubOnClick} joinClubOnClick={joinClubOnClick} chooseClubOnClick={chooseClubOnClick}/>
            }
            {establishClub &&
                <EstablishClub backToChooseClub={backToChooseClub} chooseClubOnClick={chooseClubOnClick}/>
            }
            {joinClub &&
                <JoinClub backToChooseClub={backToChooseClub} chooseClubOnClick={chooseClubOnClick}/>
            }
        </>
    )
}

export default ChooseClub;   