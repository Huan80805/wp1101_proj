import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import { Button, Descriptions, Tag } from 'antd';
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
    console.log(data.event.members)
    return(
        <div className='App-eventInfo'>
            <Descriptions bordered layout="vertical">
                <Descriptions.Item label="Intro">{data.event.introduction}</Descriptions.Item>
                <Descriptions.Item label="Time">{data.event.time}</Descriptions.Item>
                <Descriptions.Item label="Location">{data.event.location}</Descriptions.Item>
                <Descriptions.Item label="Host">{data.event.host}</Descriptions.Item>
                <Descriptions.Item label="Members">
                    {data.event.members.map(member=>{<Tag>{member.user.userName}</Tag>})}
                </Descriptions.Item>
                  
            </Descriptions>
        </div>
    )
}

export default EventInfo;