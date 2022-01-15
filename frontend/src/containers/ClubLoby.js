import React, { useState} from 'react';
import 'antd/dist/antd.min.css'
import ClubChatRoom from '../components/Chat/room/ClubChatRoom';
import CreateEvent from '../components/events/CreateEvent'
import EventInfo from '../components/events/EventInfo'
import ClubInfo from '../components/club/ClubInfo'
import { useQuery } from '@apollo/client';
import { CLUB_QUERY } from '../graphql';
import { Button, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import EventChatRoom from '../components/Chat/room/EventChatRoom';
const { SubMenu } = Menu;


const ClubLoby = ({reChooseClub, club, userName})=>{

    const [eventName, setEventName] = useState('')
    const [createEvent, setCreateEvent] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const {loading, error, data} = useQuery(CLUB_QUERY, 
        {
        variables:{
            name:club
        }
        })
    if(loading) return "Loading...";
    if(error) return <pre>{error.message}</pre>

    if(!data.club) return "error"
    
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
        <div>
            <div className='App-functionMenu'>
                <h2>Meeting Corner</h2>
                <Menu mode="inline" >
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
            <div className='App-lobyContend'>
                {(eventName=='' && !createEvent && !showInfo) &&
                    <ClubChatRoom userName = {userName} clubName={club} messages={data.club.chatRoom}/>
                }
                {(eventName != '') &&
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
            
        </div>
    )
}

export default ClubLoby;