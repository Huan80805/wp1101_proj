import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import { Button, Form, Input } from 'antd';
import {CREATE_CLUB_MUTATION} from '../../graphql';
import { useMutation } from '@apollo/client';

const EstablishClub = ({backToChooseClub, setClub, userName})=>{

    const [createClub] = useMutation(CREATE_CLUB_MUTATION)
    const [clubName, setClubName] = useState('')
    const [time, setTime] = useState('')
    const [intro, setInro] = useState('')
    const [invit, setInvit] = useState('')

    const createClubSubmit = ()=>{
        // error handel
        createClub({
            variables: {
                name:clubName,
                host:userName,
                invitation:invit,
                introduction:intro,
                time:time
            }
          });
        // go into club loby
        setClub(()=>clubName)
    }

    return(
        <div className='App'>
            <div className='App-title'>
                    <h1 >Establish Club</h1>
            </div>
            <Form>
                <Form.Item label="Club's Name:">
                <Input  onChange={(e)=>setClubName(()=>e.target.value)}/>
                </Form.Item>

                <Form.Item label="Meet Time:">
                <Input onChange={(e)=>setTime(()=>e.target.value)}/>
                </Form.Item>

                <Form.Item label="Introduction:">
                <Input onChange={(e)=>setInro(()=>e.target.value)}/>
                </Form.Item>

                <Form.Item label="Invitation Code:">
                <Input onChange={(e)=>setInvit(()=>e.target.value)}/>
                </Form.Item>

                <Form.Item label="">
                <Button type="primary" htmlType="submit" onClick={createClubSubmit}>
                    create club
                </Button>
                <Button  htmlType="submit" onClick={backToChooseClub}>
                    back
                </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default EstablishClub;