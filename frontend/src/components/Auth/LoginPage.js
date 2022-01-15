import React from 'react';
import 'antd/dist/antd.min.css'
import '../../App.css'
import { Button, Form, Input, Checkbox} from 'antd';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginPage = ({loginCheck, setUserName, setPassword,
    registerOnClick, forgetOnClick}) =>{

    return(
        <div className='App'>
            <div className='App-title'>
                <h1 >Login</h1>
            </div>
            <div className='App-loginInput'>
                <Form name="basic">
                <Form.Item
                    label="Username"
                    name="username"
                >
                    <Input onChange={e=>(setUserName(()=>e.target.value))}/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                >
                    <Input.Password onChange={e=>(setPassword(()=>e.target.value))}/>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                    offset: 6,
                    span: 16,
                    }}
                >   
                <Wrapper className='App-options'>
                    <Button type="primary" htmlType="submit" onClick={loginCheck}>
                    Login
                    </Button>
                    <Button onClick={registerOnClick}>Register</Button>
                    <Button onClick={forgetOnClick}>Forget</Button>
                </Wrapper>
                    
                </Form.Item>
                </Form>
            </div>
        </div>
        
    )
}

export default LoginPage;   