import React, { useState} from 'react';
import 'antd/dist/antd.css';
import ClubInfo from './ClubInfo';

const ClubLobyContent= ({addNewAct, reChooseClub})=>{
    const [showInfo, setShowInfo] = useState(false)

    const showClubInfo = ()=>{
        setShowInfo(()=>true)
    }
    const closeClubInfo = ()=>{
        setShowInfo(()=>false)
    } 

    return(
        <div className='App'>
            <div className='App-title'>
                <h1 >Club Loby</h1>
            </div>
            {showInfo 
                ?<>
                    <ClubInfo/>
                    <button onClick={closeClubInfo}>close club info</button>
                </>
                :<button onClick={showClubInfo}>club info</button>
            }
            <button onClick={addNewAct}>add new act</button>
            <button onClick={reChooseClub}>re-choose club </button>
        </div>
    )
}

export default ClubLobyContent;