import React from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input } from 'antd';


const Verification = ({sendOnClick, verifyOnClick, sendClose, isSend}) =>{
    
    
    return(
        <Form>
                <Form.Item label="Username">
                <Input />
                </Form.Item>

                <Form.Item label="Email Adress">
                <Input />
                </Form.Item>
                {isSend &&
                    <Form.Item label="Input verification code">
                        <Input />
                    </Form.Item>
                }
                <Form.Item label="">
                <Button type="primary" htmlType="submit" onClick={sendOnClick}>
                    send verification code
                </Button>
                {isSend &&
                    <Button htmlType="submit" onClick={verifyOnClick}>
                    input verification code
                    </Button>
                }
                </Form.Item>
    </Form>
    )
    

}
export default Verification;   