import EventInputBar from '../EventInputBar'
import Message from '../Message';
import Title from '../Title';

import { useState } from 'react';
import { CREATE_EVENT_MESSAGE_MUTATION } from '../../../graphql';
import { useMutation } from '@apollo/client';

const EventChatRoom = ({ 
                    userName, 
                    messages,
                    clubName,
                    eventName
                    //body, // useState + useMut
                    //setBody, 
                    //displayStatus, // useMut
                    //sendMessage, // useMut
                 }) => {
    const [sendEventMessage, {data, loading, error}]=useMutation(CREATE_EVENT_MESSAGE_MUTATION)
    const [body, setBody] = useState('')

  return (
    <>
      <Title RoomName={eventName}></Title>
      <Message messages={messages}></Message>
      <EventInputBar
        body={body}
        setBody={setBody}
        username={userName}
        clubName={clubName}
        eventName = {eventName}
        //displayStatus={displayStatus}
        sendMessage={sendEventMessage}
      ></EventInputBar>
    </>
  )
};

export default EventChatRoom;