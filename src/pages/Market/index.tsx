// import Thanks from '@/components/Thanks';
import '@/pages/Market/index.scss'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Statistic } from 'antd';
import { StockOutlined } from '@ant-design/icons'
import { getMarketList } from '@/http/api';
import styles from '@/styles/index.module.scss';
import downImg from '@/assets/icons/down2.png';
import squaresImg from '@/assets/icons/Squares.png';
import trianglesImg from '@/assets/icons/Triangles.png';
import chevImg from '@/assets/icons/chev.png';
import usdtSVG from '@/assets/svg/USDT.svg';
import ethVG from '@/assets/svg/ETH.svg';
import { useContractWrite, useAccount } from 'wagmi'
import { abi as usdtAbi } from '@/contract/abis/USDT.json';
import Items from '@/pages/Item/items'
export default function Market() {

    const { address } = useAccount();

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

    const [items, setItems] = useState([]);


    const { data, isLoading, isSuccess, writeAsync } = useContractWrite({
        address: import.meta.env.VITE_USDT,
        abi: usdtAbi,
        functionName: 'mint',
    });

    useEffect(() => {
        getMarketList().then((res: any) => {
            if (res.data.data.items && res.data.data.items.length > 0) setItems(res.data.data.items);
        });
    })

    return (
        <>
            <div className='main h-full flex-center' style={{ margin: '0 auto' }}>
                <div className="w-100%">
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
                                <Statistic title="ETH VOLUME" className={styles.antd} value={5032323}
                                    style={statisticStyle} valueStyle={{ color: '#FFFC00', fontSize: '18px' }} suffix={<ETHSVG />} />
                            </div>
                            <img src={chevImg} alt="" />
                            <div className='w-190px h-70px flex-col-center' style={{ background: 'rgba(5, 19, 29, 0.6)', borderRadius: '5px' }}>
                                <Statistic title="USDT VOLUME" className={styles.antd} value={872323}
                                    style={statisticStyle} valueStyle={{ color: '#07E520', fontSize: '18px' }} suffix={<USDTSVG />} />
                            </div>
                        </div>
                    </div>


                    <div className={`list-box overflow-hidden `} style={boxStyle}>
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
                        <div className={`datas scrollbar-none`} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', overflowX: 'hidden', overflowY: 'auto' }}>
                            <Items items={items} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
