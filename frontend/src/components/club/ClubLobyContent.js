import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import ClubInfo from './ClubInfo';
import { useQuery } from '@apollo/client';
import { CLUB_QUERY } from '../../graphql/queries';
import { Button } from 'antd';

const ClubLobyContent= ({userName, club, reChooseClub, addNewAct, setActName})=>{
    
    const [showInfo, setShowInfo] = useState(false)

    // try
    const {loading, error, data} = useQuery(CLUB_QUERY, 
        {
        variables:{
            name:club
        }
    })
    if(loading) return "Loading...";
    if(error) return <pre>{error.message}</pre>

    const showClubInfo = ()=>{
        setShowInfo(()=>true)
    }
    const closeClubInfo = ()=>{
        setShowInfo(()=>false)
    } 
    const chooseThisEvent = (eventName)=>{
        setActName(()=>eventName)
    }

    return(
        <div className='App'>
            <div className='App-title'>
                <h1 >{club} Loby</h1>
            </div>
            {
                data.club.events.map((events, i)=>(
                    <Button danger onClick={chooseThisEvent}>{events.name}</Button>
                ))
            }
            
            {showInfo 
                ?<>
                    <ClubInfo/>
                    <button onClick={closeClubInfo}>close club info</button>
                </>
                :<button onClick={showClubInfo}>club info</button>
            }
            <div>
                <button onClick={addNewAct}>add new act</button>
                <button onClick={reChooseClub}>re-choose club </button>
            </div>
            
        </div>
    )
}

export default ClubLobyContent;