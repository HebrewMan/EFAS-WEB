import squaresImg from '@/assets/icons/Squares.png';
import trianglesImg from '@/assets/icons/Triangles.png';
import React, { useRef, useEffect } from 'react';
import { Col, Row, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { sendVerificationCode, preRegister, login, buildWallet, hasPreRegister, getWeb2Assets } from '@/http/api';
import "./login.scss";
import { useSignMessage } from 'wagmi'
import { MintNFT } from '@/enum/contract';
import { setCookie } from '@/enum/common';
import { useAccount, useNetwork } from 'wagmi';
type InputRefsType = {
    [key: string]: HTMLInputElement | null;
};

export default function Login() {
    const nav = useNavigate();
    const [message, setMessage] = React.useState('Welcome to the EFAS');
    const { address, connector } = useAccount();
    const { signMessage } = useSignMessage({
        message,
        onSuccess(sign) {
            // console.log('Success', data)
            const data = {
                account: address,
                message,
                sign
            }

            console.log('Success', data)

            buildWallet(data).then(res => {
                console.log(res);
            }).catch(e => {
                console.log("Error", e);
            })

        },
    })

    const [title, setTitle] = useState('Pre-Register');

    const inputRefs = useRef<InputRefsType>({});
    const verificationCodeRef = useRef<HTMLInputElement | null>(null);

    const boxStyle = {
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid #304755',
        borderRadius: '15px'
    }

    const fields = [
        { name: "email", label: "Email *", type: "text", span: 24, },
        { name: "password", label: "PassWord *", type: "password", span: 24, },
        { name: "repassword", label: "Re-enter Password *", type: "password", span: 24, },
        { name: "firstName", label: "FirstName *", type: "text", span: 9, },
        { name: "lastName", label: "LastName *", type: "text", span: 9, },
        { name: "region", label: "Region *", type: "text", span: 6, },
    ];

    const sendCode = async () => {
        // const res = await sendVerificationCode({ type: 1, email: '957713659@qq.com' });
        const res2: any = await hasPreRegister('957713659@qq.com');
        console.log(res2?.data);

    }

    const getFormData = () => {
        const formData = fields.reduce((acc: { [key: string]: string }, field) => {
            const input = inputRefs.current[field.name];
            if (input) {
                acc[field.name] = input.value;
            }
            return acc;
        }, {});

        // 检查 verificationCodeRef 是否存在，然后添加它的值到 formData 中
        if (verificationCodeRef.current) {
            formData.verificationCode = verificationCodeRef.current.value;
        }

        const password1 = inputRefs.current["password"]?.value;
        const password2 = inputRefs.current["repassword"]?.value;
        if (password1 && password2) {
            if (password1 !== password2) {
                alert("两次密码输入不一致！");
                return {};
            } else {
                delete formData["repassword"];
            }
        }
        return formData;
    }

    const handleRegister = async () => {
        // const data = getFormData();
        // Send POST request with data here.

        signMessage();

        // const res = await preRegister(data);
        //setCookie('token', response.data.token, 1);

    }

    const handleLogin = async () => {
        const data = {
            emailOrAccount: getFormData().email,
            password: getFormData().password
        }
        const res: any = await login(data);
        console.log('login', res)
        setCookie('token', res.headers['access-token'], 1);
    }

    const handleBuild = async () => {
        console.log(connector)
        //signature
        handleLogin();

        // signMessage();

    }

    const MintNFT = async () => {
        const tx = await MintNFT();
        console.log(tx);
    }

    useEffect(() => {
        getWeb2Assets().then(res => {
            console.log(res)
        })
    }, [])

    return (
        <>
            <div className="w-50% max-w-800px overflow-hidden" style={boxStyle}>
                <div className="title h-55px flex-y-center  color-white relative mb-7px" style={{ background: 'rgba(5, 19, 29, 0.6)' }}>
                    <img src={squaresImg} width={10} alt="" className='absolute top-11px left-15px' />
                    <span className='ml-38px text-20px'>{title}</span>
                    <img src={trianglesImg} width={14} alt="" onClick={() => nav(-1)} className='cursor-pointer absolute top-11px right-15px' />
                </div>
                <div className="main ml-38px pb-20px">

                    <Row justify="space-between" className='mr-10px mb-10px box-border pr-20px' gutter={10}>
                        {fields.map((field, index) => (
                            <Col span={field.span} key={index}>
                                <p className='color-text text-14px mt-7px mb-7px'>{field.label}</p>
                                <input
                                    ref={el => inputRefs.current[field.name] = el}
                                    className='title-bk text-16px color-white h-45px'
                                    type={field.type}
                                />
                            </Col>
                        ))}
                    </Row>

                    <p className='color-text text-14px mb-7px'>Validation Code *</p>

                    <Row className='mr-10px pr-20px' gutter={10}>
                        <Col span={18} className=''>
                            <input className='title-bk text-16px color-white h-45px' type="text" ref={verificationCodeRef} />
                        </Col>

                        <Col flex="auto">
                            <Button type="primary" className='btn wh-full text-14px p-0' onClick={sendCode}>SEND CODE</Button>
                        </Col>
                    </Row>

                    <Row className='mt-15px'>
                        <Button type="primary" className='btn w-50% h-45px text-14px' onClick={handleBuild}>CONFIREM</Button>
                    </Row>
                </div>
            </div>
        </>
    );
}
