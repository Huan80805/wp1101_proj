import { Tag } from 'antd';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  width: 75%;
  height: 350px;
  background: #eeeeee52;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  overflow: auto;
  vertical-align: middle;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
`;
const myMsg = styled.div`
  float: right;
`
const Message = ({ messages, userName }) => {
  return (
    <div className='App-ChatBox'>
      <MessageWrapper >
      {messages.length === 0 ? (
          <p style={{ color: '#ccc' }}>
            No messages...
          </p>
        ) : (
          // todo
          messages.map(({sender, body}, i) => (
            (sender.userName === userName)?
              
                <p  key={i} style={{textAlign:"right"}}>
                  {body+" "}
                  <Tag color="red">{sender.nickname}</Tag>
                </p>
              :
                (<p  key={i}>
                  <Tag color="blue">{sender.nickname}</Tag>{body}
                </p>)
            
          ))
        )
      }
    </MessageWrapper>
    </div>
    
  )
};

export default Message;