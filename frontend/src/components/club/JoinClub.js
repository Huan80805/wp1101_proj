import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import { Button, Input } from 'antd';
import { CLUBS_QUERY, JOIN_CLUB_MUTATION } from '../../graphql';
import { useQuery, useMutation } from '@apollo/client';
import { UserOutlined } from '@ant-design/icons';
import Loading from '../Loading';
import { notification} from 'antd';

const Notification = ({type,message}) => {
  notification[type]({
    message: message,
    description:
      "",
    duration:3
  });
};
const JoinClub = ({backToChooseClub, setClub, userName, userData})=>{

    let {data, loading, error} = useQuery(CLUBS_QUERY)
    const [joinCLubMutate] = useMutation(JOIN_CLUB_MUTATION)
    const [showInvitInput, setShowInput] = useState(false)
    const [invitInput, setInvitInput] = useState('')
    const [clubInput, setClubInput] = useState('')

    const sendInvitCode = async ()=>{
        // modify authentication
        let {data, loading, error} = await joinCLubMutate({
            variables: {
                name:clubInput,
                userName:userName,
                invitation:invitInput
            }
          })
        // go into this club
        if(data.joinClub.status === 'SUCCESS'){
            Notification({type:'success',message:'Directing to Club Lobby'})
            setClub(()=>clubInput)
        }
        else Notification({type:"error", message:data.joinClub.status})
        setShowInput(()=>false)
    }
    const chooseThis = (e)=>{
        setClubInput(()=>(e.target.innerHTML))
        setShowInput(()=>true)
    }

    if(loading) return <Loading/>
    if(error) return <pre>{error.message}</pre>

    return(
        <div className='App'>
            <div className='App-title'>
                <h1 >JoinClub</h1>
            </div>
            <div className='App-menu'>
                {data.clubs.length === 0? (
                <p style={{ color: '#ccc' }}>
                    No Clubs...
                </p>
                ):(
                    data.clubs.map((clubs, i)=>(
                        (!userData.user.userData.clubs.some(club=>club === clubs.name)) &&
                        <p key={i}>
                            <Button danger  onClick={e=>(chooseThis(e))}>{clubs.name}</Button>
                        </p>
                    ))
                )
            }
            </div>
            <div className='App-joinClub'>
                {showInvitInput &&
                <div>
                    <Input
                    placeholder="Plz enter your invit code:"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    onChange={(e)=>{setInvitInput(()=>e.target.value)}}
                    />
                    <Button onClick={sendInvitCode}>Join {clubInput}!</Button>
                </div>
                
                }
            </div>
            
            <div className='App-options'>
                <Button onClick={backToChooseClub}>backToChooseClub</Button>
            </div>
        </div>
    )
}

export default JoinClub;