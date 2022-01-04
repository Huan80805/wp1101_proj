import React from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input } from 'antd';

const RegistPage = ({closeRegistPage}) =>{


    return (
        <div>
            <p>register page</p>
            <Form>
                <Form.Item label="Username">
                <Input />
                </Form.Item>

                <Form.Item label="Department">
                <Input />
                </Form.Item>

                <Form.Item label="Email Adress">
                <Input />
                </Form.Item>

                <Form.Item label="PassWord">
                <Input />
                </Form.Item>

                <Form.Item label="">
                <Button type="primary" htmlType="submit" onClick={closeRegistPage}>
                    Submit
                </Button>
                <button onClick={closeRegistPage}>back</button>
                </Form.Item>
            </Form>
            
        </div>
    )

}

export default RegistPage;   