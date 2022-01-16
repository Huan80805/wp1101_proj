import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import { Tag, Button } from 'antd';
import {HomeOutlined, UsergroupAddOutlined, UserAddOutlined} from '@ant-design/icons'


const ClubMenu = ({estaClubOnClick, userName, joinClubOnClick,
     data, setClub})=>{
    
    const chooseThisClub = (name) =>{
        setClub(()=>name)

    }

    return(
        <div className='App'>
            <div className='App-title'>
                <h1 > {userName}'s Club Menu <HomeOutlined /></h1>
            </div>
            <div className='App-clubMenu'>
                {data.updateUser.clubs.length === 0? (
                <p style={{ color: '#ccc' }}>
                    No Clubs
                </p>
                ):(
                    data.updateUser.clubs.map((clubs, i)=>(
                        <p key={i}>
                            <Button danger onClick={e=>(chooseThisClub(e.target.innerText))}>{clubs}</Button>
                        </p>
                    ))
                )
                }
            </div>
            
            <div className='App-options'>
                <Button onClick={estaClubOnClick}>Create Club <UsergroupAddOutlined /></Button>
                <Button onClick={joinClubOnClick}>Join Club <UserAddOutlined /></Button>
            </div>
        </div>
    )
}

export default ClubMenu;   