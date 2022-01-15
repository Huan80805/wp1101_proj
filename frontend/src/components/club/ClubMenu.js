import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import { Tag, Button } from 'antd';
import {ReadOutlined, UsergroupAddOutlined, UserAddOutlined} from '@ant-design/icons'


const ClubMenu = ({estaClubOnClick, userName, joinClubOnClick,
     data, setClub})=>{
    
    const chooseThisClub = (name) =>{
        setClub(()=>name)

    }

    return(
        <div>
            <div>
                <h1 > {userName}'s Club Menu <ReadOutlined /></h1>
                <div className='App-clubMenu'>
                    {data.user.userData.clubs.length === 0? (
                    <p style={{ color: '#ccc' }}>
                        No Clubs
                    </p>
                    ):(
                        data.user.userData.clubs.map((clubs, i)=>(
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
        </div>
    )
}

export default ClubMenu;   