import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import { Button, Input } from 'antd';
import { CLUBS_QUERY, JOIN_CLUB_MUTATION } from '../../graphql';
import { useQuery, useMutation } from '@apollo/client';
import { UserOutlined } from '@ant-design/icons';


const JoinClub = ({backToChooseClub, setClub, userName})=>{

    const {data, loading, error} = useQuery(CLUBS_QUERY)
    const [joinCLubMutate, {mutateData}] = useMutation(JOIN_CLUB_MUTATION)
    const [showInvitInput, setShowInput] = useState(false)
    const [invitInput, setInvitInput] = useState('')
    const [clubInput, setClubInput] = useState('')

    const chooseThis = ()=>{
        // modify authentication
        joinCLubMutate({
            variables: {
                name:clubInput,
                userName:userName,
                invitation:invitInput
            }
          })
        // go into this club
        setClub(()=>clubInput)
    }
    if(loading) return "Loading...";
    if(error) return <pre>{error.message}</pre>
    

    return(
        <div className='App'>
            <div className='App-title'>
                <h1 >JoinClub</h1>
            </div>
            {showInvitInput &&
                <div>
                    <Input
                    placeholder="Plz enter your invit code:"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    onChange={(e)=>{setInvitInput(()=>e.target.value)}}
                    />
                    <Button onClick={chooseThis}>Join!</Button>
                </div>
                
            }
            {data.clubs.length === 0? (
                <p style={{ color: '#ccc' }}>
                    No Clubs...
                </p>
            ):(
                data.clubs.map((clubs, i)=>(
                    <p key={i}>
                        <Button danger  onClick={e=>(setClubInput(()=>(e.target.innerHTML)))}>{clubs.name}</Button>
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