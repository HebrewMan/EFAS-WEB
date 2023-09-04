// import Thanks from '@/components/Thanks';
import '@/pages/Market/index.scss'
import { useState } from 'react';
import downImg from '@/assets/icons/down2.png';
import { getWeb2Assets, getWeb3Assets } from '@/http/api';
import { useContractWrite, useAccount } from 'wagmi'
import { abi as usdtAbi } from '@/contract/abis/USDT.json';
// import { CustomWalletBtn } from '@/components/WalletConnect/customWalletBtn';
import Items from './items'
export default function Market() {
    const { address } = useAccount();

    const tabs = ['GOLD', 'WEAPONS', 'ARMORS', 'TROOPS', 'SHIPS'];
    const [tab, setTab] = useState('GOLD');


    const [web2Items, setWeb2Items] = useState([]);
    const [web3Items, setWeb3Items] = useState([]);

    const [items, setItems] = useState([]);

    const boxStyle = {
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid #304755',
        borderRadius: '15px',
    }

    const borderStyle = {
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
    }

    const [assetsType, setAssetsType] = useState('WEB3');

    const navHandle = (nav: string) => {
        setAssetsType(nav);
        setItems(nav == 'WEB3' ? web3Items : web2Items)
        console.log(items)
    }

    useEffect(() => {
        getWeb2Assets().then((res: any) => {
            if (res.data.data.items && res.data.data.items.length > 0) setWeb2Items(res.data.data.items);
            console.log(web2Items)
        });
    }, [])

    useEffect(() => {
        if (address) {
            getWeb3Assets(address).then((res: any) => {
                if (res.data.data.items && res.data.data.items.length > 0) setWeb3Items(res.data.data.items);
                console.log(web3Items)
            });
        }

    }, [address])
    return (
        <>
            <div className='main h-full flex-center' style={{ margin: '0 auto' }}>
                <div className="w-100%">
                    <div className="nav cursor-pointer h-40px text-18px mb-15px color-#8691B6">
                        <span className={`text-center hover line-height-40px ${assetsType == 'WEB3' ? 'btn' : ''} w-108px h-40px inline-block`} onClick={() => navHandle('WEB3')}>WEB 3</span>
                        <span className={`text-center hover line-height-40px ${assetsType == 'WEB2' ? 'btn' : ''} w-108px h-40px inline-block`} onClick={() => navHandle('WEB2')}>WEB 2</span>
                    </div>
                    <div className={`list-box overflow-hidden `} style={boxStyle}>
                        <div className="cursor-pointer tab h-50px color-#8691B6 text-16px" style={{ background: 'rgba(5, 19, 29, 0.6)' }}>
                            {tabs.map(item =>
                                <span key={item} className={`w-100px h-51px inline-block text-center line-height-51px mr-30px ${item == tab ? 'tab-cur' : ''}`}
                                    onClick={() => setTab(item)} >{item}</span>)}
                        </div>

                        <div className="box-border text-white text-16px pl-28px pr-30px  titles flex-between-center h-44px" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                            <p className='flex-between-center  w-410px h-27px pr-22px'>
                                <span>Rarity (Drop-down with level, nb)</span>
                                <img src={downImg} width={15} alt="" />
                            </p>
                            <p className='flex-between-center w-215px box-border pl-22px pr-22px h-27px' style={borderStyle}>
                                <span>Item Id</span>
                                <img src={downImg} width={15} alt="" />
                            </p>
                            <p className='flex-between-center w-300px h-27px pl-15px'>
                                <span>Amount</span>
                                <img src={downImg} width={15} alt="" />
                            </p>
                        </div>

                        <div className={`datas scrollbar-none`} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', overflowX: 'hidden', overflowY: 'auto' }}>
                            <Items items={items} assetsType={assetsType} />
                        </div>
                    </div>


                </div>
                {/* <Thanks /> */}
            </div>
        </>
    );
}
