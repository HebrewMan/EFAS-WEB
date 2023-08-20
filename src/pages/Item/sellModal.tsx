import { Select, Modal, Input } from 'antd';
import style from '@/styles/index.module.scss';
export default function SellModal(props: any) {

    const tokens = [
        { value: 'USDT', label: 'USDT', },
        { value: 'Ether', label: 'Ether' },
        { value: 'EFAS', label: 'EFAS', disable: 'true' },
    ]
    return (
        <>
            <Modal
                width={320}
                maskStyle={{ background: 'rgba(0,0,0,0.8)' }}
                bodyStyle={{ background: '#24262a' }}
                className={style.antd}
                title="SELL INFOMETION"
                centered
                open={props.showSellModal}
                onOk={() => props.onClose()}
                onCancel={() => props.onClose()}
            >


                <p className='bg-#24262a'>PRICE *</p>
                <p className='mt-10px mb-10px bg-#24262a'>
                    <Input style={{ width: '100%' }} />
                </p>
                <Select defaultValue="USDT" style={{ width: 120 }} options={tokens} />
            </Modal>
        </>
    );
}
