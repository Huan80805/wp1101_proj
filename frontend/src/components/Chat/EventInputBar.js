import { Input } from 'antd';

const EventInputBar = ({ body, 
                    setBody,
                    username,
                    clubName,
                    sendMessage,
                    eventName
                }) => {

  return (
    <Input.Search
      className='App-inputBar'
      value={body}
      onChange={(e) => setBody(e.target.value)}
      enterButton="Send"
      placeholder="Type a message here..."
      onSearch={(msg) => {
        sendMessage({variables:{ clubName:clubName, name:eventName, sender: username, body: msg } });
        setBody('');
      }}
    ></Input.Search>
  )
};

export default EventInputBar;