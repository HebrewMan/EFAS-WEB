import type { SelectProps } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Button, Checkbox, Input, Select, message, Result } from 'antd';
import { sendVerificationCode, preRegister, buildWallet, getUserInfo } from '@/http/api';
import { setCookie } from '@/enum/common';
import { CaretDownFilled } from '@ant-design/icons';
import { CustomWalletBtn } from '@/components/WalletConnect/customWalletBtn';
import { useAccount, useNetwork, useSignMessage } from 'wagmi';
import { MyContext, } from '@/store/context';
import "./login.scss";
import styles from '@/styles/index.module.scss';
export default function Register() {
    const nav = useNavigate();

    const { address } = useAccount();
    const { chain } = useNetwork();
    const [msg] = useState('Welcome to the EFAS');

    const [messageApi, contextHolder] = message.useMessage();

    const { userInfo, setUserInfo } = useContext(MyContext);


    // const { setUser } = useContext(MyContext);
    const [checked, setChecked] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [IsRegistered, setIsRegistered] = useState(false);

    const handleCheck = (e: CheckboxChangeEvent) => setChecked(e.target.checked);

    const [formData, setFormData] = useState({
        email: localStorage.account ? localStorage.account : '',
        verificationCode: '',
        firstName: '',
        lastName: '',
        region: '',
        password: '',
        password2: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name == 'email') {
            setIsFinished(false);
            setIsRegistered(false);
        }
        setFormData(prevData => ({ ...prevData, [name]: value }));
    }

    const options: SelectProps['options'] = [
        { value: 'asia-northeast', label: 'asia-northeast' },
        { value: 'asia-southeast', label: 'asia-southeast' },
        { value: 'china', label: 'china' },
        { value: 'eu-east', label: 'eu-east' },
        { value: 'eu-west', label: 'eu-west' },
        { value: 'oceania', label: 'oceania' },
        { value: 'south-america', label: 'south-america' },
        { value: 'us-east', label: 'us-east' },
        { value: 'us-west', label: 'us-west' },
        { value: 'other', label: 'other' },
    ]

    const handleRegion = (value: string) => {
        const data = { ...formData };
        data.region = value;
        setFormData(data);
        console.log(data);
    };


    const sendCode = async () => {

        const res: any = await getUserInfo(encodeURIComponent(formData.email));

        if (res.data.data.exist) setIsRegistered(true);

        if (res?.data?.data.preRegisterInfoDto?.firstName) {
            setIsFinished(true);
            setFormData(prevData => ({
                ...prevData,
                firstName: res.data.data.preRegisterInfoDto.firstName,
                lastName: res.data.data.preRegisterInfoDto.lastName,
                region: res.data.data.preRegisterInfoDto.region,
            }));
        } else {
            await sendVerificationCode({ type: 0, email: formData.email });
        }
    }

    const handleRegister = async () => {

        if (!formData.email) {
            messageApi.open({
                type: 'error',
                content: 'Please fill in the email field',
            });
            return;
        }

        if (!formData.verificationCode) {
            messageApi.open({
                type: 'error',
                content: 'Please fill in the verification code field.',
            });
            return;
        }

        if (!formData.firstName) {
            messageApi.open({
                type: 'error',
                content: 'Please fill in the first name field.',
            });
            return;
        }

        if (!formData.lastName) {
            messageApi.open({
                type: 'error',
                content: 'Please fill in the last name field.',
            });
            return;
        }

        if (!formData.region) {
            messageApi.open({
                type: 'error',
                content: 'Please fill in the region field.',
            });
            return;
        }


        if (!checked) {
            messageApi.open({
                type: 'error',
                content: 'Please check the box below.',
            });
            return;
        }
        if (formData.password != formData.password2) {
            messageApi.open({
                type: 'error',
                content: 'The two entered passwords do not match',
            });
            return;
        }
        // Send POST request with data here.
        const res: any = await preRegister(formData);
        if (res.data.statusCode == 200) {
            messageApi.open({
                type: 'success',
                content: 'Congratulations on your successful register',
            });
            setCookie('token', res.headers['access-token'], 3);
            setCookie('rtoken', res.headers['x-access-token'], 3);
            setCookie('account', formData.email, 1);
            setUserInfo({
                account: formData.email,
                firstName: res.data.data.preRegisterInfoDto.firstName,
                lastName: res.data.data.preRegisterInfoDto.lastName,
                region: res.data.data.preRegisterInfoDto.region,
            })
            setIsFinished(true);
        } else {
            messageApi.open({
                type: 'error',
                content: 'Register failed',
            });
        }
    }

    const { signMessage } = useSignMessage({
        message: msg,
        onSuccess(sign) {
            // console.log('Success', data)
            const data = {
                account: address,
                message: msg,
                sign
            }
            buildWallet(data).then((res: any) => {
                if (res.data.statusCode == 200) {
                    messageApi.open({
                        type: 'success',
                        content: 'Congratulations on your successful binding',
                    });
                    setTimeout(() => nav('/'), 1000);
                } else {
                    messageApi.open({
                        type: 'error',
                        content: 'Binding failed',
                    });
                }
            }).catch(e => {
                messageApi.open({
                    type: 'error',
                    content: 'Binding failed',
                });
                console.log(e);
            })
        },
    })

    const handleBuild = async () => userInfo.wallet ? nav(-1) : signMessage();

    return (
        <>
            {contextHolder}
            <div className="login overflow-hidden h-full flex-center" style={{ margin: '0 auto' }}>
                {
                    isFinished ? <Result
                        className={styles.antd}
                        status="success"
                        title="BETA Pre-Registration Complete!"
                        subTitle={[
                            <span key="text1">Thank you for signing up.</span>,
                            <br key="break" />,
                            <span key="text2">You will receive further information about the Open Beta by email, so keep an eye on your mailbox.</span>
                        ]}
                        extra={[
                            <p key="console" className='mb-15px color-text line-height-20px'>If you have a Metamask wallet, we strongly recommend that you bind it to your account to receive news about potential future airdrops and mints. You will also get a whitelist for our next mint.</p>,
                            <div key="2" className='w-180px ' style={{ margin: '0 auto' }}>
                                {
                                    (address && chain) ? <Button type="primary" className='btn h-40px w-180px text-14px p-0' onClick={handleBuild}>{localStorage.wallet ? "NEXT" : "Build Wallet"} </Button>
                                        : <CustomWalletBtn />
                                }

                            </div>
                        ]}
                    /> :

                        <div className="main ml-38px pb-20px" >
                            <p className='text-center font-blod text-25px color-#ffffff'>BETA Pre-Registration</p>
                            <p className='font-blod text-center text-15px color-#ffffff mt-15px mb-5px line-height-24px'>Pre-Register now to request access to the 2023 end-of-year FREE Open-Beta test. </p>
                            <p className='color-#ffffff text-center mb-10px'>The number of invites is limited, and this pre-registration is on a first-come, first-served basis.</p>

                            <Row className='mr-10px pr-20px' gutter={10}>
                                <Col span={24} className={styles.antd + ' mb-15px'}>
                                    <p className='color-text text-14px mt-7px mb-7px'>Email *</p>
                                    <Input name='email' disabled={isFinished} value={formData.email} onChange={handleChange} />
                                </Col>

                                <Col span={24} className=''>
                                    <p className='color-text text-14px mb-15px'>Validation Code *</p>
                                </Col>

                                <Col span={18} className={styles.antd}>
                                    <Input name='verificationCode' disabled={isFinished} value={isFinished ? '******' : formData.verificationCode} onChange={handleChange} />
                                </Col>
                                <Col flex="auto">
                                    <Button type="primary" disabled={isFinished} className='btn wh-full text-14px p-0' onClick={sendCode}>SEND CODE</Button>
                                </Col>

                                <Col span={8} className={styles.antd}>
                                    <p className='color-text text-14px mt-15px mb-15px'>Frist Name *</p>
                                    <Input name='firstName' disabled={isFinished} value={formData.firstName} onChange={handleChange} />
                                </Col>
                                <Col span={8} className={styles.antd}>
                                    <p className='color-text text-14px mt-15px mb-15px'>Last Name *</p>
                                    {/* <input disabled={isDisabled} name='lastName' value={formData.lastName} className='title-bk text-16px color-white h-45px' onChange={handleChange} type="text" /> */}
                                    <Input name='lastName' disabled={isFinished} value={formData.lastName} onChange={handleChange} />
                                </Col>
                                <Col span={8} className=''>
                                    <p className='color-text text-14px mt-15px mb-15px'>Region *</p>
                                    <Select
                                        disabled={isFinished}
                                        placeholder="select one country"
                                        className={styles.antd}
                                        value={formData.region}
                                        onChange={handleRegion}
                                        style={{ width: '100%' }}
                                        options={options}
                                        suffixIcon={<CaretDownFilled />}
                                    />
                                </Col>
                                <Col span={12} className={styles.antd}>
                                    <p className='color-text text-14px mt-15px mb-15px'>Password *</p>
                                    <Input.Password name='password' disabled={IsRegistered} value={IsRegistered ? '********' : formData.password} onChange={handleChange} />
                                </Col>
                                <Col span={12} className={styles.antd}>
                                    <p className='color-text text-14px mt-15px mb-15px'>Confirm Password *</p>

                                    <Input.Password name='password2' disabled={IsRegistered} value={IsRegistered ? '********' : formData.password2} onChange={handleChange} />
                                </Col>
                            </Row>

                            <div className='text-center mt-10px'>
                                <Checkbox checked={checked} disabled={isFinished} onChange={handleCheck} className='color-white'>
                                    {isFinished ? 'You have already pre-registered, thank you!' : 'Agree to receive occasional emails such as news, offers, and surveys.'}</Checkbox>
                            </div>

                            <Row className='mt-15px'>
                                <Button type="primary" className='btn w-50% h-45px text-14px' onClick={handleRegister}>CONFIRM</Button>
                            </Row>
                        </div>
                }
            </div>


        </>
    );
}
