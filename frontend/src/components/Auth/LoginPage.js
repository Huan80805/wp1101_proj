import React from 'react';
import 'antd/dist/antd.css';
import { Button, Layout, Form, Input, Checkbox } from 'antd';
import { Header, Content, Footer } from 'antd/lib/layout/layout';

const LoginPage = ({loginCheck, registerOnClick, forgetOnClick}) =>{

    const onFinish = (values) => {
        console.log('Success:', values);
    };
      
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return(
        <>
            <Layout>
                <h1>Login</h1>
                <Content>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                            offset: 8,
                            span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                            offset: 8,
                            span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" onClick={loginCheck}>
                            Login
                            </Button>
                            <Button onClick={registerOnClick}>Register</Button>
                            <Button onClick={forgetOnClick}>Forget</Button>
                        </Form.Item>
                    </Form>
                    );
                </Content>
                <Footer>
                    
                </Footer>
            </Layout>
        </>
        
    )
}

export default LoginPage;   