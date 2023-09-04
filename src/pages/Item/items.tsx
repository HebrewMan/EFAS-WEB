// import Thanks from '@/components/Thanks';
import '@/pages/Market/index.scss'
import { useState } from 'react';
import { Button, Empty } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getWeb2Assets } from '@/http/api';
import { useContractWrite, useAccount } from 'wagmi'
import { abi as usdtAbi } from '@/contract/abis/USDT.json';
// import { CustomWalletBtn } from '@/components/WalletConnect/customWalletBtn';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Items({ items }: any) {
    const nav = useNavigate();

    const { address } = useAccount()

    // const [items, setItems] = useState([]);

    const btnStyle = {
        margin: '0',
        background: 'none',
        border: '1px solid #8192C7',
        borderRadius: '5px',
    }


    const changePath = (id: string) => nav(`/item/${id}`)

    return (
        <>
            {items.length > 0 ?
                <div>

                    {
                        items.map((item: any, index) =>
                            <div key={index} className="cursor-pointer list pl-28px pr-30px flex-between-center pb-10px"
                                style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', margin: '0 auto', marginTop: '10px' }}
                                onClick={() => changePath(index.toString())}>
                                <div className='flex-between-center w-410px pr-22px'>
                                    <img src={item?.metadata?.image} width={65} alt="" className='' />
                                    <div className='w-310px'>
                                        <p className='text-15px pl-10px color-#AA41FD'>FAMAS ASSAULT RIFLE  &nbsp;&nbsp;Lv. {index + 1}</p>
                                        <p className='text-13px pl-10px color-#ffffff mt-8px'>CERTIFICATE</p>
                                        <p className='mt-5px pl-10px flex-y-center text-13px  color-#AA41FD'>
                                            <i className='w-10px h-10px bg-#AA41FD block mr-5px '></i>EPIC
                                        </p>
                                    </div>
                                </div>
                                <span className='w-215px text-15px text-white pl-22px pr-22px'>06 - 07 - 2023</span>
                                <div className='flex-between-center text-15px w-300px text-white pl-15px'>
                                    <span>$120</span>

                                    {
                                        (address) ?
                                            <Button type="primary" style={btnStyle} className='btn w-100px h-32px color-text'>{assetsType == 'WEB3' ? 'SELL' : 'MINT'}</Button>
                                            : <ConnectButton />
                                    }
                                </div>
                            </div>
                        )
                    }

                </div>
                :
                <div className='flex-center h-full'>
                    <Empty
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        imageStyle={{ height: 60 }}
                        description={
                            <span className='color-#fff'>
                                No Data
                            </span>
                        }
                    >
                        <Button type="primary">Create Now</Button>
                    </Empty>
                </div>

            }
        </>
    );
}