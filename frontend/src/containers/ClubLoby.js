import React, { useState} from 'react';
import 'antd/dist/antd.css';
import AddAct from '../components/activities/AddAct';
import Act from '../components/activities/Act';
import ClubLobyContent from '../components/club/ClubLobyContent';

const ClubLoby = ({reChooseClub})=>{

    const [actMode, setActInfoMode] = useState(false)
    const [addActMode, setAddActMode] = useState(false)

    const addNewAct = ()=>{
            setAddActMode(()=>true)
    }

    return(
        <>
            { (!actMode && !addActMode)&&
                <ClubLobyContent addNewAct={addNewAct} reChooseClub = {reChooseClub}/>
            }
            {actMode &&
                <Act/>
            }
            {addActMode &&
                <AddAct/>
            }
        </>
    )
}

export default ClubLoby;