
import squaresImg from '@/assets/icons/Squares.png';
import trianglesImg from '@/assets/icons/Triangles.png';
import { Col, Row, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import weaponImg from '@/assets/icons/qiang2.png';
import tokenLogo from '@/assets/icons/EFAS_LOGO_White.png';
export default function Claim() {
    const nav = useNavigate();
    const boxStyle = {
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid #304755',
        borderRadius: '15px'
    }
    const nfts = [
        { name: 'FAMAS ASSAULT RIFLE', level: 27, img: weaponImg },
        { name: 'FAMAS ASSAULT RIFLE', level: 27, img: weaponImg },
        { name: 'FAMAS ASSAULT RIFLE', level: 27, img: weaponImg },
        { name: 'FAMAS ASSAULT RIFLE', level: 27, img: weaponImg },
        { name: 'FAMAS ASSAULT RIFLE', level: 27, img: weaponImg },
        { name: 'FAMAS ASSAULT RIFLE', level: 27, img: weaponImg },
        { name: 'FAMAS ASSAULT RIFLE', level: 27, img: weaponImg },
        { name: 'FAMAS ASSAULT RIFLE', level: 27, img: weaponImg },
    ];

    const btnStyle = {
        margin: '0 auto',
        background: 'none',
        border: '1px solid #8192C7',
        borderRadius: '5px'
    }

    return (
        <>
            <div className="w-991px overflow-hidden " style={boxStyle}>
                <div className="title h-60px flex-y-center  color-white relative mb-18px" style={{ background: 'rgba(5, 19, 29, 0.6)' }}>
                    <img src={squaresImg} width={10} alt="" className='absolute top-11px left-15px' />
                    <span className='ml-38px text-26px'>CLAIM</span>
                    <img src={trianglesImg} width={14} alt="" onClick={() => nav(-1)} className='absolute top-11px right-15px' />
                </div>
                <div className="main ml-10px mr-10px pb-17px h-493px box " style={{ overflowX: 'hidden', overflowY: 'auto' }}>
                    <Row gutter={[17, 20]}>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <div className='h-218px relative text-center color-#AA41FD font-500 box-border pt-15px' style={{ borderRadius: '10px', background: 'rgba(5, 19, 29, 0.6)' }}>
                                <p className='text-20px color-#ffffff mt-16px'>Claim $EFAS Tokens</p>
                                <p className='flex-x-center mt-45px mb-45px text-30px color-#FFFC00'>25 X <img src={tokenLogo} width={40} height={40} alt="" className='ml-8px' /></p>
                                <p style={{ textAlign: 'center' }} className='pb-13px mt-19px'>
                                    <Button type="primary" style={btnStyle} className='btn w-110px h-32px color-text'>CLAIM</Button>
                                </p>
                            </div>
                        </Col>
                        {nfts.map((item, index) =>
                            <Col key={index} xs={12} sm={12} md={8} lg={8} xl={8} >
                                <div className='h-218px relative color-#AA41FD font-500 box-border pt-15px' style={{ borderRadius: '10px', background: 'rgba(5, 19, 29, 0.6)' }}>
                                    <span className='absolute top-18px left-14px w-2px h-49px bg-#AA41FD block'></span>
                                    <p className='w-full flex justify-between pl-28px pr-10px text-20px '>
                                        <span>FAMAS ASSAULT RIFLE</span><span>LV. 27</span>
                                    </p>
                                    <p className='mt-3px pl-28px flex-y-center text-16px mb-15px'><i className='w-10px h-10px bg-#AA41FD block mr-5px '></i>EPIC</p>
                                    <img src={weaponImg} width={182} height={82} alt="" style={{ margin: '0 auto' }} />
                                    <p style={{ textAlign: 'center' }} className='pb-13px mt-19px'>
                                        <Button type="primary" style={btnStyle} className='btn w-110px h-32px color-text'>CLAIM</Button>
                                    </p>
                                </div>
                            </Col>)}
                    </Row>
                </div>
            </div>
        </>
    );
}

