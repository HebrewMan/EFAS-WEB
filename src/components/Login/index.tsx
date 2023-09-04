import React from 'react';
import { Col, Row, Button, Checkbox, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login, getUserInfo, } from '@/http/api';
import "./login.scss";
import { setCookie } from '@/enum/common';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { ExportOutlined } from '@ant-design/icons';
import styles from '@/styles/index.module.scss';

export default function Register() {
    const [messageApi, contextHolder] = message.useMessage();

    const nav = useNavigate();
    const [checked, setChecked] = useState(false);
    const handleCheck = (e: CheckboxChangeEvent) => setChecked(e.target.checked);

    const [isDisabled, setIsDisabled] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name == 'email') setIsDisabled(false);
        setFormData(prevData => ({ ...prevData, [name]: value }));
    }

    const handleLogin = async () => {
        if (!checked) {
            messageApi.open({
                type: 'warning',
                content: 'Please check the efas agreement',
            });
            return;
        }

        const res: any = await login({
            emailOrAccount: formData.email,
            password: formData.password
        });

        if (res.data.statusCode == 200) {
            setCookie('token', res.headers['access-token'], 3);
            setCookie('rtoken', res.headers['x-access-token'], 3);
            setCookie('account', formData.email, 3);
            messageApi.open({
                type: 'success',
                content: 'Successful Login!',
            });
            const res2: any = await getUserInfo(encodeURIComponent(formData.email));
            res2?.data?.data.preRegisterInfoDto?.firstName ? nav('/') : nav('/register');
        } else {
            messageApi.open({
                type: 'error',
                content: 'Login failed',
            });
        }
    }

    return (
        <>
            {contextHolder}
            <div className="login overflow-hidden h-full flex-center" style={{ margin: '0 auto' }}>

                <div className="w-100% ml-38px pb-20px" >
                    <p className='text-center font-blod text-25px color-#ffffff'>LOG IN &nbsp;EFAS -- BETA</p>
                    <p className='font-blod text-center text-15px color-#ffffff mt-20px mb-5px line-height-24px'>Log in to the game to experience the free public beta test at the end of 2023.</p>
                    <p className='color-#ffffff text-center mb-10px'>bring your friends and play to earn!</p>

                    <Row className='mr-10px pr-20px' gutter={10}>
                        <Col span={24} className={styles.antd + ' mb-10px'}>
                            <p className='color-text text-14px mt-15px mb-15px'>Email *</p>
                            <Input name='email' disabled={isDisabled} value={formData.email} onChange={handleChange} />
                        </Col>

                        <Col span={24} className={styles.antd}>
                            <p className='color-text text-14px mt-7px mb-15px'>Password *</p>
                            <Input.Password name='password' disabled={isDisabled} value={isDisabled ? '********' : formData.password} onChange={handleChange} />
                        </Col>
                    </Row>

                    <div className='text-center mt-20px'>
                        <Checkbox checked={checked} disabled={isDisabled} onChange={handleCheck} className='color-white'>Agree to receive occasional emails such as news, offers, and surveys.</Checkbox>
                        <p className='text-12px color-#fff flex-center'>Don't have an account ?
                            <Button type="link" className='flex-center' style={{ padding: 0 }} onClick={() => nav('/register')} >
                                &nbsp;Register Now<ExportOutlined />
                            </Button>
                        </p>
                    </div>

                    <Row className='mt-10px'>
                        <Button type="primary" className='btn w-50% h-45px text-14px' onClick={handleLogin}>CONFIRM </Button>
                    </Row>

                </div>
            </div>
        </>
    );
}
