import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import { Button, Form, Input, DatePicker, Switch} from 'antd';

import { useMutation } from '@apollo/client';
import { CREATE_EVENT_MUTATION } from '../../graphql';

const CreateEvent = ({userName, club, backToLoby})=>{

    const [createEvent, {data, loading, error}]=useMutation(CREATE_EVENT_MUTATION)

    const [eventName, setEventName] = useState('')
    const [eventTime, setEventTime] = useState('')
    const [eventLoc, setEventLoc] = useState('')
    const [eventInro, setEventIntro] = useState('')
    const [eventActive, setEventActive] = useState(false)
    
    const createEventSubmit = (e)=>{
        e.preventDefault();
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
          alert(data.createEvent.status)
          // go back
          backToLoby()
    }

    const handelTime = (datetime)=>{
        console.log(String(datetime))
        
        console.log(String(datetime).split('2022')[0])        
    }

    if(loading) return "Loading...";
    if(error) return <pre>{error.message}</pre>

    return(
        <div>
            <h1 >Create Act</h1>
            <Form>
                <Form.Item label="Event's Name:">
                <Input  onChange={(e)=>setEventName(()=>e.target.value)}/>
                </Form.Item>

                <Form.Item label="Event's Time:">
                <DatePicker onChange={(e)=>handelTime(String(e._d).split('2022')[0])}/>
                </Form.Item>

                <Form.Item label="Location:">
                <Input onChange={(e)=>setEventLoc(()=>e.target.value)}/>
                </Form.Item>

                <Form.Item label="Introduction:">
                <Input onChange={(e)=>setEventIntro(()=>e.target.value)}/>
                </Form.Item>

                <Form.Item label="active:">
                <Switch defaultChecked onChange={(e)=>setEventActive(()=>e.checked)}/>
                </Form.Item>

                <Form.Item label="">
                <Button type="primary" htmlType="submit" onClick={createEventSubmit}>
                    create event
                </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default CreateEvent;