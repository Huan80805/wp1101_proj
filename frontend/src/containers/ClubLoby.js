import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import ClubChatRoom from '../components/Chat/room/ClubChatRoom';
import CreateEvent from '../components/events/CreateEvent'
import EventInfo from '../components/events/EventInfo'
import ClubInfo from '../components/club/ClubInfo'
import { useQuery } from '@apollo/client';
import { CLUB_QUERY } from '../graphql';
import { Button, Menu} from 'antd';
import Loading from '../components/Loading';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import EventChatRoom from '../components/Chat/room/EventChatRoom';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
`;

const { SubMenu } = Menu;


const ClubLoby = ({reChooseClub, club, userName})=>{

    const [eventName, setEventName] = useState('')
    const [createEvent, setCreateEvent] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const {loading, data} = useQuery(CLUB_QUERY, 
        {
        variables:{
            name:club
        }
        })
    if(loading) return <Loading/>
    const openClubChat = ()=>{
        // close create event
        setCreateEvent(()=>false)
        // close event chatroom
        setEventName(()=>'')
        // close club info
        setShowInfo(()=>false)
    }
    const addNewAct = ()=>{
        // close event chatroom
        setEventName(()=>'')
        // close club info
        setShowInfo(()=>false)
        // open create event
        setCreateEvent(()=>true)
    }
    const chooseThisEvent = (e)=>{
        // close club info
        setShowInfo(()=>false)
        // close create event
        setCreateEvent(()=>false)
        // open event chat room
        console.log(e)
        setEventName(()=>e.key)
    }
    const showClubInfo = ()=>{
        // close create event
        setCreateEvent(()=>false)
        // close event chatroom
        setEventName(()=>'')
        // open club info
        setShowInfo(()=>true)
    }
    const backToLoby = ()=>{
        // return to original
        setCreateEvent(()=>false)
        setEventName(()=>'')
        setShowInfo(()=>true)
    }

    return(
        <Wrapper>
            <div className='App-functionMenu' style={{width: '20%', height:'100%'}}>
                <h2>Meeting Corner</h2>
                <Menu mode="inline" style={{height:'100%',bottom:"0%"}} >
                    <Menu.Item key="1" onClick={openClubChat}>Club Chat room</Menu.Item>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Events">
                        {
                            data.club.events.length === 0?
                            <p>No event now...</p>
                            :(data.club.events.map((event, i)=>(
                                <Menu.Item key={event.name.split('_')[1]} onClick={e=>(chooseThisEvent(e))}>{event.name.split('_')[1]}</Menu.Item>
                            )))
                        }
                    </SubMenu>
                        <Menu.Item key="Create_Event" onClick={addNewAct}>Create Event</Menu.Item>
                        <Menu.Item key="ClubInfo" onClick={showClubInfo}>Club Info</Menu.Item>
                        <Menu.Item key="Go_back_club" onClick={reChooseClub}>back to Menu</Menu.Item>
                </Menu>
            </div >
            <div className='App-lobyContend' style={{width:"80%", height:'100%'}}>
                {(eventName ==='' && !createEvent && !showInfo) &&
                    <ClubChatRoom className='App-chatRoom' userName = {userName} clubName={club} messages={data.club.chatRoom}/>
                }
                
                {(eventName !== '') &&
                    //<EventInfo userName={userName} club={club} actName ={actName} backToLoby={backToLoby} />
                    <EventChatRoom userName = {userName} messages = {data.club.events.filter(( {name} ) => name.split('_')[1] === eventName)[0].chatRoom} clubName={club} eventName = {eventName}/>
                }
                {createEvent &&
                    <CreateEvent userName={userName} club={club} backToLoby={backToLoby} />
                }
                {showInfo &&
                    <ClubInfo userName={userName} clubData={data}/>
                }
            </div>
            
        </Wrapper>
    )
}

export default ClubLoby;