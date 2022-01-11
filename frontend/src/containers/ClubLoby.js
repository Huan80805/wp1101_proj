import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import AddAct from '../components/activities/AddAct';
import Act from '../components/activities/Act';
import ClubLobyContent from '../components/club/ClubLobyContent';

const ClubLoby = ({reChooseClub, club, userName})=>{

    const [actName, setActName] = useState('')
    const [addActMode, setAddActMode] = useState(false)

    const addNewAct = ()=>{
        setAddActMode(()=>true)
    }

    const backToLoby = ()=>{
         console.log("q")
         setAddActMode(()=>false)
            setActName(()=>'')
        
    }

    return(
        <>
            { ((actName == '') && !addActMode)&&
                <ClubLobyContent userName = {userName} club ={club} addNewAct={addNewAct} 
                reChooseClub = {reChooseClub} setActName={setActName}/>
            }
            {(actName != '') &&
                <Act userName={userName} club={club} actName ={actName} backToLoby={backToLoby} />
            }
            {addActMode &&
                <AddAct userName={userName} club={club} backToLoby={backToLoby} />
            }
        </>
    )
}

export default ClubLoby;