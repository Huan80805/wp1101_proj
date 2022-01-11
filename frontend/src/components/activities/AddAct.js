import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import { Button, Form, Input } from 'antd';

import { useMutation } from '@apollo/client';
import { CREATE_EVENT_MUTATION } from '../../graphql';

const AddAct = ({userName, club, backToLoby})=>{

    const [createEvent]=useMutation(CREATE_EVENT_MUTATION)

    const [eventName, setEventName] = useState('')
    const [eventTime, setEventTime] = useState('')
    const [eventLoc, setEventLoc] = useState('')
    const [eventInro, setEventIntro] = useState('')
    const [eventActive, setEventActive] = useState(false)
    
    const createEventSubmit = ()=>{
        createEvent({
            variables: {
                clubName:club,
                name:eventName,
                time:eventTime,
                location:eventLoc,
                introduction:eventInro,
                host:userName,
                active:true
            }
          });
          // go back
          backToLoby()
    }

    return(
        <div className='App'>
            <div className='App-title'>
                    <h1 >Create Act</h1>
            </div>
            <Form>
                <Form.Item label="Event's Name:">
                <Input  onChange={(e)=>setEventName(()=>e.target.value)}/>
                </Form.Item>

                <Form.Item label="Event's Time:">
                <Input onChange={(e)=>setEventTime(()=>e.target.value)}/>
                </Form.Item>

                <Form.Item label="Location:">
                <Input onChange={(e)=>setEventLoc(()=>e.target.value)}/>
                </Form.Item>

                <Form.Item label="Introduction:">
                <Input onChange={(e)=>setEventIntro(()=>e.target.value)}/>
                </Form.Item>

                <Form.Item label="active:">
                <Input onChange={(e)=>setEventActive(()=>e.target.value)}/>
                </Form.Item>

                <Form.Item label="">
                <Button type="primary" htmlType="submit" onClick={createEventSubmit}>
                    create event
                </Button>

                <Button onClick={backToLoby}>backToLoby</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddAct;