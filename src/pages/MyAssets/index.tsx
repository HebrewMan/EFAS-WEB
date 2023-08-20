// import Thanks from '@/components/Thanks';
import '@/pages/Market/index.scss'
import { useState } from 'react';
import downImg from '@/assets/icons/down2.png';
import gunImg from '@/assets/icons/qiang1.png';
import { Button, Segmented } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Market() {
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

    const [assetsType, setAssetsType] = useState('WEB3');

    const list = [1, 2, 3, 4, 5, 6, 7, 8];//web3 上架或者下架 web2 mint 

    const changePath = (id: string) => nav(`/item/${id}`)

    return (
        <>
            <div className='wh-full flex-center'>
                <div className="main w-900px">
                    <div className="nav cursor-pointer h-40px text-18px mb-22px color-#8691B6">
                        <span className={`text-center hover line-height-40px ${assetsType == 'WEB3' ? 'btn' : ''} w-108px h-40px inline-block`} onClick={() => setAssetsType('WEB3')}>WEB 3</span>
                        <span className={`text-center hover line-height-40px ${assetsType == 'WEB2' ? 'btn' : ''} w-108px h-40px inline-block`} onClick={() => setAssetsType('WEB2')}>WEB 2</span>
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
                                        <Button type="primary" style={btnStyle} className='btn w-110px h-32px color-text'>{assetsType == 'WEB3' ? 'SELL' : 'MINT'}</Button>
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
