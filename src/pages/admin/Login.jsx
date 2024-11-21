import React from 'react';
import { Button, Checkbox, Form, Input, Layout } from 'antd';
import { useDispatch } from 'react-redux';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispath = useDispatch();
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
        dispath(login(values)).then((ress) => {
            navigate("/admin");
        }).catch(err => console.log("Đăng nhập thất bài"));
        // kieemr tra neeu thanh cong thi chuyen sang admin 

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Layout>
                <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}

                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{

                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="userName"
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


                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </Layout>
        </>
    );
}
export default Login;