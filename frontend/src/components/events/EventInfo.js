import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import { Button, Descriptions } from 'antd';
import { EVENT_QUERY } from '../../graphql/queries';
import { useQuery } from '@apollo/client';

const EventInfo = ({userName, club, actName})=>{

    const {loading, error, data} = useQuery(EVENT_QUERY, 
        {
        variables:{
            clubName:club,
            name:actName
        }
    })
    if(loading) return "Loading...";
    if(error) return <pre>{error.message}</pre>
    
    return(
        <div className='App-eventInfo'>
            <Descriptions bordered>
                <Descriptions.Item label="Intro">{data.event.introduction}</Descriptions.Item>
                <Descriptions.Item label="Time">{data.event.time}</Descriptions.Item>
                <Descriptions.Item label="Location">{data.event.location}</Descriptions.Item>
                <Descriptions.Item label="Host">{data.event.host}</Descriptions.Item>
                {data.event.members.lengh === 0?
                    <Descriptions.Item label="Menbers">No People Now...</Descriptions.Item>
                    :<Descriptions.Item label="Menbers">{data.event.members.map(menbers=>{<p>{menbers.name}</p>})}</Descriptions.Item>
                }    
            </Descriptions>
        </div>
    )
}

export default EventInfo;