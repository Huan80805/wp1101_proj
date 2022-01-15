import { Tag } from 'antd';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  width: 75%;
  height: 70%;
  background: #eeeeee52;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  overflow: auto;
`;

const Message = ({ messages }) => {
  console.log(messages)
  return (
    <MessageWrapper>
      {messages.length === 0 ? (
          <p style={{ color: '#ccc' }}>
            No messages...
          </p>
        ) : (
          messages.map(({sender, body}, i) => (
            <p className="App-message" key={i}>
              <Tag color="blue">{sender.nickname}</Tag>{body}
            </p>
          ))
        )
      }
    </MessageWrapper>
  )
};

export default Message;