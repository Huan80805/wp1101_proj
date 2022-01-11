import React from 'react';
import 'antd/dist/antd.min.css'
import '../../App.css'

import { Button, Form, Input, Checkbox } from 'antd';

const LoginPage = ({loginCheck, setUserName, setPassword,
    registerOnClick, forgetOnClick}) =>{

    return(
        <div className='App'>
            <div className='App-title'>
                <h1 >Login</h1>
            </div>
            <div className='App-input'>
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
                    offset: 8,
                    span: 16,
                    }}
                >   
                <div className='login-option'>
                     <Button type="primary" htmlType="submit" onClick={loginCheck}>
                    Login
                    </Button>
                    <Button onClick={registerOnClick}>Register</Button>
                    <Button onClick={forgetOnClick}>Forget</Button>
                </div>
                    
                </Form.Item>
            </Form>
            </div>
            
        </div>
        
    )
}

export default LoginPage;   