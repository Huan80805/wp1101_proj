import ClubInputBar from '../ClubInputBar';
import Message from '../Message';
import Title from '../Title';
import { useState } from 'react';
import { CREATE_CLUB_MESSAGE_MUTATION } from '../../../graphql';
import { useMutation } from '@apollo/client';

const ClubChatRoom = ({ 
                    userName, 
                    messages,
                    clubName
                    //body, // useState + useMut
                    //setBody, 
                    //displayStatus, // useMut
                    //sendMessage, // useMut
                 }) => {
    const [sendClubMessage, {data, loading, error}]=useMutation(CREATE_CLUB_MESSAGE_MUTATION)
    const [body, setBody] = useState('')
    
  return (
    <>
      <Title RoomName={clubName}></Title>
      <Message messages={messages}></Message>
      <ClubInputBar
        body={body}
        setBody={setBody}
        username={userName}
        clubName={clubName}
        //displayStatus={displayStatus}
        sendMessage={sendClubMessage}
      ></ClubInputBar>
    </>
  )
};

export default ClubChatRoom;