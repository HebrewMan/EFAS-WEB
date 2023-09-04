import React from 'react';
import { Modal, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ExportOutlined, MailOutlined } from '@ant-design/icons';
import { CustomWalletBtn } from '@/components/WalletConnect/customWalletBtn';
import heroImg from '@/assets/icons/hero.png';
import styles from '@/styles/index.module.scss';
import "./login.scss";

interface ChildProps {
    modalOpen: boolean;
    onClose: () => void;
}

const LoginWay: React.FC<ChildProps> = ({ modalOpen, onClose }) => {
    const nav = useNavigate();
    const handleNav = (path: string) => {
        onClose();
        setTimeout(() => nav(path), 200);
    }
    return (
        <Modal
            title="WELCOME BACK EFAS !"
            centered
            width={'25%'}
            open={modalOpen}
            onOk={onClose}
            onCancel={onClose}
            footer={null}
            className={styles.login}
            maskStyle={{ background: 'rgba(0,0,0,0.8)' }}
        >
            <img src={heroImg} width={250} alt="" style={{ margin: '0px auto', marginTop: '25px', marginBottom: '15px' }} />
            <div className='w-75% h-45px' style={{ margin: '0 auto' }}>
                <CustomWalletBtn />
            </div>

            <Button type="primary" style={{ marginTop: '12px' }} onClick={() => handleNav('/login')} icon={<MailOutlined />} className='btn w-75% h-45px text-14px '>Log in with email </Button>

            <p className='text-12px mt-15px color-#fff flex-center'>Don't have an account ?
                <Button type="link" className='flex-center' style={{ padding: 0 }} onClick={() => handleNav('/register')} >
                    &nbsp;Register Now<ExportOutlined />
                </Button>
            </p>
        </Modal>
    );
}

export default LoginWay;
