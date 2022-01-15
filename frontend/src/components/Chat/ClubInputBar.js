import { Input } from 'antd';

const ClubInputBar = ({ body, 
                    setBody,
                    username,
                    clubName,
                    sendMessage
                }) => {
  return (
    <Input.Search
      value={body}
      onChange={(e) => setBody(e.target.value)}
      enterButton="Send"
      placeholder="Type a message here..."
      onSearch={(msg) => {
        sendMessage({variables:{ clubName:clubName, sender: username, body: msg } });
        setBody('');
      }}
    ></Input.Search>
  )
};

export default ClubInputBar;