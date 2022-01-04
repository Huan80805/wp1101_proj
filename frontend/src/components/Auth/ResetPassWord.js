import React from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input } from 'antd';


const ResetPassWord = ({verifyDone}) =>{



    return(
        <>
        <p>Reset</p>
        <Form>
                <Form.Item label="input new password">
                <Input />
                </Form.Item>

                <Form.Item label="">
                <Button type="primary" htmlType="submit" onClick={verifyDone} >
                    save new password
                </Button>
                {/* 
                    return some message here
                 */}
                </Form.Item>
        </Form>
        </>
        
    )
}

export default ResetPassWord;   