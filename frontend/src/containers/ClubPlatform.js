import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import { Button } from 'antd';
import ClubLoby from './ClubLoby';
import ChooseClub from '../components/club/ChooseClub';
import styled from 'styled-components';

const ClubPlatform = ({logOut, userName, data}) =>{
    const [club, setClub] = useState('')
    const reChooseClub = ()=>{
        setClub(()=>'')
    }

    return(
        <>
            {(club !== '')
                ? <ClubLoby reChooseClub={reChooseClub} userName={userName} club={club}/>
                : <ChooseClub setClub={setClub} userName={userName} data={data}/>
            }
            <div >
                <Button onClick={logOut}>log out</Button>
            </div>
        </>
        
    )
}

export default ClubPlatform;   