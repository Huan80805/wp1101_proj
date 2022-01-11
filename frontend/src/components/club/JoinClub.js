import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import { Button } from 'antd';
import { CLUBS_QUERY } from '../../graphql/queries';
import { useQuery } from '@apollo/client';

const JoinClub = ({backToChooseClub, setClub})=>{

    const {data, loading, error} = useQuery(CLUBS_QUERY)

    const chooseThis = (clubName)=>{
        // modify latter
        setClub(()=>clubName)
        // close
        backToChooseClub()
    }
    if(loading) return "Loading...";
    if(error) return <pre>{error.message}</pre>

    return(
        <div className='App'>
            <div className='App-title'>
                <h1 >JoinClub</h1>
            </div>
            {data.clubs.length === 0? (
                <p style={{ color: '#ccc' }}>
                    No Clubs...
                </p>
            ):(
                data.clubs.map((clubs, i)=>(
                    <p key={i}>
                        <Button danger  onClick={e=>(chooseThis(e.target.innerHTML))}>{clubs.name}</Button>
                    </p>
                ))
            )
            }
            <button onClick={backToChooseClub}>backToChooseClub</button>
            <button onClick={chooseThis}>Choose this club</button>
        </div>
    )
}

export default JoinClub;