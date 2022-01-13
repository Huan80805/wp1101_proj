import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import { Button, Descriptions, Tag } from 'antd';

const ClubInfo = ({clubData, userName})=>{


    return(
        <div className='App'>
            <Descriptions title="ClubInfo" bordered>
                <Descriptions.Item label="name">{clubData.club.name}</Descriptions.Item>
                <Descriptions.Item label="host">{clubData.club.host}</Descriptions.Item>
                <Descriptions.Item label="introduction">{clubData.club.introduction}</Descriptions.Item>
                <Descriptions.Item label="time">{clubData.club.time}</Descriptions.Item>
                <Descriptions.Item label="Admins">
                    {
                        clubData.club.members.filter(({ identity }) => identity === true).map((menber)=>(
                            <Tag >Admin: {menber.user.userName}</Tag>))
                    }
                </Descriptions.Item>
                <Descriptions.Item label="members">
                {clubData.club.members.length === 1?
                    (<p>None...</p>)
                    :(clubData.club.members.filter(({ identity }) => identity === false).map((menber)=>(
                        <Tag >Menber: {menber.user.userName}</Tag>))  
                    )
                }</Descriptions.Item>
                {/* 只有管理員可以看到invitation code */}
                {(clubData.club.members.filter(({ identity }) => identity === true)
                    .some(menber=>menber.user.userName === userName)) &&
                    <Descriptions.Item label="invitation">{clubData.club.invitation}</Descriptions.Item>
                }
            </Descriptions>
        </div>
    )
}

export default ClubInfo;