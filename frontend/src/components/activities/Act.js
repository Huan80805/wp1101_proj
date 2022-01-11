import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import { Button, Descriptions } from 'antd';
import { EVENT_QUERY } from '../../graphql/queries';
import { useQuery } from '@apollo/client';

const Act = ({userName, club, actName, backToLoby})=>{

    const {loading, error, data} = useQuery(EVENT_QUERY, 
        {
        variables:{
            clubName:club,
            name:actName
        }
    })
    if(loading) return "Loading...";
    if(error) return <pre>{error.message}</pre>

    // const joinEvent = ()=>{

    // }
    
    return(
        <div className='App'>
            <div className='App-title'>
                <h1 >{actName}</h1>
            </div>
            <Descriptions title={actName} bordered>
                <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>

                {/* <Descriptions.Item label="Intro">{data.event.introduction}</Descriptions.Item> */}
                {/* <Descriptions.Item label="Time">{data.event.time}</Descriptions.Item>
                <Descriptions.Item label="Location">{data.event.location}</Descriptions.Item>
                <Descriptions.Item label="Host">{data.event.host}</Descriptions.Item>
                {data.event.menbers.lengh === 0?
                    <Descriptions.Item label="Menbers">No People Now...</Descriptions.Item>
                    :<Descriptions.Item label="Menbers">{data.event.menbers.map(menbers=>{<p>{menbers.name}</p>})}</Descriptions.Item>
                }    
                <Descriptions.Item label="State">Cloud Database</Descriptions.Item> */}
                
                
            </Descriptions>
            <div>
                <Button>Join(not yet)</Button>
                <Button onClick={backToLoby}>back To Loby</Button>
            </div>
        </div>
    )
}

export default Act;