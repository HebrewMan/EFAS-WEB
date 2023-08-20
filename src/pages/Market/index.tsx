// import Thanks from '@/components/Thanks';
import '@/pages/Market/index.scss'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import downImg from '@/assets/icons/down2.png';
import gunImg from '@/assets/icons/qiang1.png';
import squaresImg from '@/assets/icons/Squares.png';
import trianglesImg from '@/assets/icons/Triangles.png';
import chevImg from '@/assets/icons/chev.png';
import { Button, Statistic } from 'antd';
import styles from '@/styles/index.module.scss';
import { StockOutlined } from '@ant-design/icons'
import usdtSVG from '@/assets/svg/USDT.svg';
import ethVG from '@/assets/svg/ETH.svg';
export default function Market() {

    const ETHSVG = () => <img src={ethVG} width={16} alt="" />
    const USDTSVG = () => <img src={usdtSVG} width={16} alt="" />

    const nav = useNavigate();

    const tabs = ['GOLD', 'WEAPONS', 'ARMORS', 'TROOPS', 'SHIPS'];
    const [tab, setTab] = useState('GOLD');

    const boxStyle = {
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid #304755',
        borderRadius: '15px',
    }

    const borderStyle = {
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
    }

    const btnStyle = {
        margin: '0',
        background: 'none',
        border: '1px solid #8192C7',
        borderRadius: '5px',
    }

    const statisticStyle = {
        color: '#A7BAFC',
        fontSize: '16px'
    }

    const changePath = (id: string) => {
        console.log(id, 88888)
        nav(`/item/${id}`)
    }

    const list = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <>
            <div className='wh-full flex-center'>
                <div className="main w-900px ">

                    <div style={boxStyle} className='overflow-hidden mb-10px' >
                        <div className="title h-50px flex-center  color-white relative" style={{ background: 'rgba(5, 19, 29, 0.6)' }}>
                            <img src={squaresImg} width={10} alt="" className='absolute top-11px left-15px' />
                            <span className='text-18px'>OVERALL STATS</span>
                            <img src={trianglesImg} onClick={() => nav(-1)} width={14} alt="" className='cursor-pointer absolute top-11px right-15px' />
                        </div>

                        <div className='flex-between-center pl-26px pr-30px mb-13px mt-13px color-#ffffff text-16px' >
                            <div className='w-190px h-70px flex-col-center' style={{ background: 'rgba(5, 19, 29, 0.6)', borderRadius: '5px' }}>
                                <Statistic title="TOTAL SALES" className={styles.antd} value={703423}
                                    style={statisticStyle} valueStyle={{ color: '#AA41FD', fontSize: '18px' }} suffix={<StockOutlined />} />
                            </div>
                            <img src={chevImg} alt="" />
                            <div className='w-190px h-70px flex-col-center' style={{ background: 'rgba(5, 19, 29, 0.6)', borderRadius: '5px' }}>
                                <Statistic title="ETHER VOLUME" className={styles.antd} value={5032323}
                                    style={statisticStyle} valueStyle={{ color: '#FFFC00', fontSize: '18px' }} suffix={<ETHSVG />} />
                            </div>
                            <img src={chevImg} alt="" />
                            <div className='w-190px h-70px flex-col-center' style={{ background: 'rgba(5, 19, 29, 0.6)', borderRadius: '5px' }}>
                                <Statistic title="USDT VOLUME" className={styles.antd} value={872323}
                                    style={statisticStyle} valueStyle={{ color: '#07E520', fontSize: '18px' }} suffix={<USDTSVG />} />
                            </div>
                        </div>
                    </div>


                    <div className={`w-900px ${window.innerHeight < 850 ? 'h-430px' : 'h-470px'} overflow-hidden `} style={boxStyle}>
                        <div className="cursor-pointer tab h-50px color-#8691B6 text-16px" style={{ background: 'rgba(5, 19, 29, 0.6)' }}>
                            {tabs.map(item =>
                                <span key={item} className={`w-100px h-51px inline-block text-center line-height-51px mr-30px ${item == tab ? 'tab-cur' : ''}`}
                                    onClick={() => setTab(item)} >{item}</span>)}
                        </div>

                        <div className="box-border text-white text-16px pl-28px pr-30px  titles flex-between-center h-44px" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                            <p className='flex-between-center  w-430px h-27px pr-22px'>
                                <span>Rarity (Drop-down with level, nb)</span>
                                <img src={downImg} width={15} alt="" />
                            </p>
                            <p className='flex-between-center w-215px box-border pl-22px pr-22px h-27px' style={borderStyle}>
                                <span>Listing Time</span>
                                <img src={downImg} width={15} alt="" />
                            </p>
                            <p className='flex-between-center w-320px h-27px pl-15px'>
                                <span>Price</span>
                                <img src={downImg} width={15} alt="" />
                            </p>
                        </div>

                        <div className={`datas ${window.innerHeight < 850 ? 'h-340px' : 'h-380px'}  scrollbar-none`} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', overflowX: 'hidden', overflowY: 'auto' }}>
                            {list.map(item =>
                                <div key={item} className="cursor-pointer list w-850px flex-between-center pb-10px"
                                    style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', margin: '0 auto', marginTop: '10px' }}
                                    onClick={() => changePath(item.toString())}>
                                    <div className='flex-between-center w-430px pr-22px'>
                                        <img src={gunImg} width={75} height={75} alt="" className='' />
                                        <div className='w-310px'>
                                            <p className='text-18px pl-10px color-#AA41FD'>FAMAS ASSAULT RIFLE  &nbsp;&nbsp;Lv. 27</p>
                                            <p className='text-14px pl-10px color-#ffffff mt-8px'>CERTIFICATE</p>
                                            <p className='mt-5px pl-10px flex-y-center text-14px  color-#AA41FD'>
                                                <i className='w-10px h-10px bg-#AA41FD block mr-5px '></i>EPIC
                                            </p>
                                        </div>
                                    </div>
                                    <span className='w-215px text-white pl-22px pr-22px'>06 - 07 - 2023</span>
                                    <p className='flex-between-center w-320px text-white pl-15px'>
                                        <span>$120</span>
                                        <Button type="primary" style={btnStyle} className='btn w-110px h-32px color-text'>{item == 3 ? 'CANCEL' : 'PURCHASE'}</Button>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* <Thanks /> */}
            </div>
        </>
    );
}
