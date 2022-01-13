import React from 'react';
import 'antd/dist/antd.min.css'
import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { CREATE_USER_MUTATION } from '../../graphql';
import { useMutation } from '@apollo/client';

const RegistPage = ({closeRegistPage}) =>{

    const [createUser, {data, loading, error}] = useMutation(CREATE_USER_MUTATION);
    const [userName, setUserName] = useState('');
    const [nickname, setNickName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    
    const submitOnClick = (e)=>{
        e.preventDefault();
        
         createUser({
            variables: {
                userName:userName,
                password:password,
                nickname:nickname,
                email: email
            }
          });
        alert(data.createUser.status)
        closeRegistPage();
        
    }
    if(loading) return "Loading...";
    if(error) return <pre>{error.message}</pre>

    return (
        <div className='App'>
            <div className='App-title'>
                    <h1 >Register Acount</h1>
            </div>
            <Form>
                <Form.Item label="Username">
                <Input  onChange={(e)=>setUserName(()=>e.target.value)}/>
                </Form.Item>

                <Form.Item label="Nickname">
                <Input onChange={(e)=>setNickName(()=>e.target.value)}/>
                </Form.Item>

                <Form.Item label="Email Adress">
                <Input onChange={(e)=>setEmail(()=>e.target.value)}/>
                </Form.Item>

                <Form.Item label="PassWord">
                <Input onChange={(e)=>setPassword(()=>e.target.value)}/>
                </Form.Item>

                <Form.Item label="">
                <Button type="primary" htmlType="submit" onClick={submitOnClick}>
                    Submit
                </Button>
                <Button  htmlType="submit" onClick={closeRegistPage}>
                    back
                </Button>
                </Form.Item>
            </Form>
            
        </div>
    )

}

export default RegistPage;   