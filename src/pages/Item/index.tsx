// import Thanks from '@/components/Thanks';
import squaresImg from '@/assets/icons/Squares.png';
import trianglesImg from '@/assets/icons/Triangles.png';
import gunImg from '@/assets/icons/qiang2.png';
import { Row, Col, Button } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useContractWrite, useAccount, useNetwork } from 'wagmi'
import { abi as usdtAbi } from '@/contract/abis/USDT.json';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import SellModal from '@/pages/Item/sellModal';

export default function Item() {

    const { address, connector } = useAccount();
    const { chain } = useNetwork();

    const btnStyle = {
        margin: '0',
        background: 'none',
        border: '1px solid #8192C7',
        borderRadius: '5px',
    }

    const nav = useNavigate();

    const location = useLocation();

    const [showSellModal, setShowSellModal] = useState(false);

    const openSellModal = () => setShowSellModal(true);

    const closeSellModal = () => setShowSellModal(false);


    const [btnText, setBtnText] = useState('PURCHASE');

    useEffect(() => {
        //status 0 待mint 1 待上架 2待取消
        if (location.pathname == '/item/2') {
            setBtnText('CANCEL');
        } else if (location.pathname == '/item/3') {
            setBtnText('PURCHASE');
        } else {
            setBtnText('MINT');
        }

    })

    return (
        <>
            <div className='main h-full flex-center' style={{ margin: '0 auto' }}>
                <div className="relative overflow-hidden " style={{ border: '1px solid #304755', background: 'rgba(255,255,255,0.05)', borderRadius: '5px' }}>
                    {showSellModal && <SellModal showSellModal={showSellModal} onClose={closeSellModal} />}
                    {/* <SellModal onClose={handleSellModal(false)} /> */}
                    <div className='flex-between-center pl-9px pr-14px mt-10px'>
                        <img src={squaresImg} width={10} height={10} alt="" />
                        <img src={trianglesImg} width={14} height={8} alt="" onClick={() => nav(-1)} className="cursor-pointer" />
                    </div>
                    <span className='absolute top-44px left-35px w-2px h-77px bg-#AA41FD block'></span>
                    <Row gutter={40} className='m-auto pl-60px pr-26px mt-20px'>
                        <Col xs={{ order: 1, span: 24 }} sm={{ order: 2, span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                            <p className='text-22px color-#AA41FD flex-between-center '>
                                <span>FAMAS ASSAULT RIFLE</span><span>Lv.27</span>
                            </p>
                            <p className='flex-between-center mt-14px color-#ffffff'>
                                <span className='text-16px'>CERTIFICATE</span><span className='text-14px'><mark className='color-#A7BAFC' style={{ background: 'none' }}>DURABILITY :</mark>  3500/3500</span>
                            </p>
                            <p className='mt-8px flex-y-center text-16px color-#AA41FD'>
                                <i className='w-13px h-13px bg-#AA41FD block mr-5px '></i>EPIC
                            </p>
                            <p className='text-14px color-#ffffff mt-20px'>
                                Hitting enemies with firearms increases the "firearms" proficiency. Each level increases the accuracy of the firearms
                            </p>
                        </Col>
                        <Col className='flex-center' xs={{ order: 1, span: 24 }} sm={{ order: 2, span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                            <img src={gunImg} width={320} alt="" className='float-right' />
                        </Col>
                    </Row>


                    <Row gutter={40} className='m-auto pl-60px pr-26px mt-15px color-#A7BAFC text-14px'>
                        <Col xs={{ order: 1, span: 24 }} sm={{ order: 2, span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                            <p className='mb-20px text-20px color-#ffffff'>SPECS</p>
                            <p className='h-40px flex-between-center' style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <span>Damage</span><span className='color-#ffffff'>160</span>
                            </p>
                            <p className='h-40px flex-between-center' style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <span>Magazine Capacity</span><span className='color-#ffffff'>160</span>
                            </p>
                            <p className='h-40px flex-between-center' style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <span>Fire Rate</span><span className='color-#ffffff'>160</span>
                            </p>
                            <p className='h-40px flex-between-center' style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <span>Range</span><span className='color-#ffffff'>160</span>
                            </p>
                            <p className='h-40px flex-between-center' style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <span>Accuracy</span><span className='color-#ffffff'>160</span>
                            </p>
                            <p className='h-40px flex-between-center' style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <span>Additinal Critical Hits</span><span className='color-#ffffff'>160</span>
                            </p>
                        </Col>

                        <Col xs={{ order: 1, span: 24 }} sm={{ order: 2, span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} className='color-#07E520 text-14px'>
                            <p className='mb-20px text-20px color-#ffffff'>BONUS</p>
                            <p className='h-40px flex-between-center' style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <span >Critical Damage</span><span >+3%</span>
                            </p>
                            <p className='h-40px flex-between-center ' style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <span >Maximum Health</span><span>+40%</span>
                            </p>
                            <p className='h-40px flex-between-center ' style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <span className='color-#3A91F8'>Reduce incoming explosion damage by</span><span>+35%</span>
                            </p>
                            <p className='pt-5px pb-5px line-height-20px  color-#3A91F8' style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                Killing an enemy with a melle ability will fully reloaded
                                your current weapon, this has a cooldown of ability will fully reloaded <mark style={{ background: 'none', color: '#07E520' }}> 50 </mark> secounds
                            </p>
                            <p className='pt-5px pb-5px line-height-20px color-#EF9F3D' style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                When damage that would be lethal is dealt to you, the
                                EDS will instead render you invincible for <mark style={{ background: 'none', color: '#07E520' }}> 5s,5min</mark> right time
                            </p>
                        </Col>
                    </Row>

                    <div className='flex-between-center mt-20px pl-60px pr-26px pt-15px pb-15px' style={{ background: 'rgba(5,7,14,0.32)' }}>
                        <p></p>
                        {
                            (address && chain) ?
                                <Button type="primary" style={btnStyle} className='w-110px text-14px h-32px color-text' onClick={() => openSellModal()}>{btnText}</Button>
                                : <ConnectButton />
                        }

                    </div>

                </div>
            </div>
        </>
    );
}