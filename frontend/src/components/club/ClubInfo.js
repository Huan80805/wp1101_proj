import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import { Button, Descriptions, Tag } from 'antd';

const ClubInfo = ({clubData})=>{


    return(
        <div className='App'>
            <Descriptions title="ClubInfo" bordered>
                <Descriptions.Item label="name">{clubData.club.name}</Descriptions.Item>
                <Descriptions.Item label="host">{clubData.club.host}</Descriptions.Item>
                <Descriptions.Item label="introduction">{clubData.club.introduction}</Descriptions.Item>
                <Descriptions.Item label="time">{clubData.club.time}</Descriptions.Item>
                <Descriptions.Item label="members">
                {clubData.club.members.length === 0?
                    (<p>No menbers now...</p>)
                    :(clubData.club.members.map((menber)=>(
                        <Tag >{menber.user.userName}</Tag>
                    )))
                }</Descriptions.Item>
                {/* 只有管理員可以看到invitation code */}
                <Descriptions.Item label="invitation">{clubData.club.invitation}</Descriptions.Item>
            </Descriptions>
        </div>
    )
}

export default ClubInfo;