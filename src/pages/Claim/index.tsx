
import squaresImg from '@/assets/icons/Squares.png';
import trianglesImg from '@/assets/icons/Triangles.png';
import { Col, Row, Button, Empty, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import tokenLogo from '@/assets/icons/EFAS_LOGO_White.png';
import { useContractWrite, useAccount } from 'wagmi'
import { getWeb2Assets, getWeb3Assets } from '@/http/api';
import { CustomWalletBtn } from '@/components/WalletConnect/customWalletBtn';
import { abi as nftAbi } from '@/contract/abis/NFT1155.json';
import { getCookie } from '@/enum';

export default function Claim() {
    const nav = useNavigate();

    // console.log(signer)
    const [messageApi, contextHolder] = message.useMessage();


    const account = getCookie('account');
    const boxStyle = {
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid #304755',
        borderRadius: '15px'
    }
    const btnStyle = {
        margin: '0 auto',
        background: 'none',
        border: '1px solid #8192C7',
        borderRadius: '5px'
    }

    const [assetsType, setAssetsType] = useState('WEB2');
    const [isLoading, setIsLoading] = useState(false);

    const { address } = useAccount();

    const [web2Items, setWeb2Items] = useState([]);
    const [web3Items, setWeb3Items] = useState([]);
    const [items, setItems] = useState([]);

    const navHandle = (nav: string) => {
        setAssetsType(nav);
        setItems(nav == 'WEB3' ? web3Items : web2Items)
        console.log(items)
    }

    function getStatusLabel(status: number) {
        switch (status) {
            case 0:
                return 'MINT';
            case 1:
                return 'SELL';
            case 2:
                return 'CANCEL';
            default:
                return '';  // 可以返回默认文案或者为空
        }
    }

    const { data, isLoading: mintLoading, isSuccess, write } = useContractWrite({
        address: import.meta.env.VITE_NFT,
        abi: nftAbi,
        functionName: 'mint',
        onError(e) {
            console.log('fail', e)
        },
        onSuccess(tx) {
            console.log('success', tx.hash)
        },
    });

    const mint = async (itemId: number) => {
        console.log(isLoading, isSuccess)
        setIsLoading(true);

        const tx = write({ args: [address, itemId, 1], });

        console.log(tx)
    }

    useEffect(() => {
        messageApi.open({
            type: isSuccess ? 'success' : 'error',
            content: isSuccess ? 'Success Mint' : 'Fail Mint',
        });
    }, []);


    useEffect(() => {
        getWeb2Assets().then((res: any) => {
            if (res.data.data.items && res.data.data.items.length > 0) {
                setWeb2Items(res.data.data.items);
                setItems(res.data.data.items);
            };
        });
    }, [])

    useEffect(() => {

        if (address) {
            getWeb3Assets({ address }).then((res: any) => {
                if (res.data.data.items && res.data.data.items.length > 0) setWeb3Items(res.data.data.items);
            });
        }

    }, [address])


    return (
        <>
            <div className='claim-box w-70% max-w-1200px min-w-600px wh-full flex-center' style={{ margin: '0 auto' }}>

                <div className="w-1200px overflow-hidden ">
                    <div className="nav cursor-pointer h-40px text-18px mb-15px color-#8691B6">
                        <span className={`text-center hover line-height-40px ${assetsType == 'WEB2' ? 'btn' : ''} w-108px h-40px inline-block`} onClick={() => navHandle('WEB2')}>WEB 2</span>
                        <span className={`text-center hover line-height-40px ${assetsType == 'WEB3' ? 'btn' : ''} w-108px h-40px inline-block`} onClick={() => navHandle('WEB3')}>WEB 3</span>
                    </div>
                    <div style={boxStyle}>

                        <div className="title h-50px flex-y-center  color-white relative mb-13px" style={{ background: 'rgba(5, 19, 29, 0.6)' }}>
                            <img src={squaresImg} width={10} alt="" className='absolute top-11px left-15px' />
                            <span className='ml-38px text-20px'>CLAIM</span>
                            <img src={trianglesImg} width={14} alt="" onClick={() => nav(-1)} className='absolute top-11px right-15px' />
                        </div>

                        <div className="datas ml-10px mr-10px pb-17px h-530px box " style={{ overflowX: 'hidden', overflowY: 'auto' }}>
                            {
                                items.length > 0 ?
                                    <Row gutter={[10, 11]}>
                                        <Col lg={8} xl={6}>
                                            <div className='h-180px relative text-center color-#AA41FD font-500 box-border pt-1px' style={{ borderRadius: '10px', background: 'rgba(5, 19, 29, 0.6)' }}>
                                                <p className='text-15px color-#ffffff mt-16px'>Claim $EFAS Tokens</p>
                                                <p className='flex-x-center mt-45px mb-33px text-22px color-#FFFC00'>25 X <img src={tokenLogo} width={40} height={40} alt="" className='ml-8px' /></p>
                                                <p style={{ textAlign: 'center' }} className=''>
                                                    <Button type="primary" disabled={true} style={btnStyle} className='btn text-12px w-100px h-32px color-text'>CLAIM</Button>
                                                </p>
                                            </div>
                                        </Col>
                                        {items.map((item: any, index) =>
                                            <Col key={index} lg={8} xl={6} >
                                                <div className='h-180px relative color-#AA41FD font-500 box-border pt-15px' style={{ borderRadius: '10px', background: 'rgba(5, 19, 29, 0.6)' }}>
                                                    <span className='absolute top-18px left-14px w-2px h-28px bg-#AA41FD block'></span>
                                                    <p className='w-full flex justify-between pl-28px pr-10px text-14px '>
                                                        {item.metadata.name}
                                                    </p>
                                                    <p className='mt-3px pl-28px flex-y-center text-13px mb-10px'>
                                                        <i className='w-10px h-10px bg-#AA41FD block mr-5px '></i>EPIC
                                                        <span className='flex-end'>&nbsp;&nbsp;#{item.id}</span>
                                                    </p>
                                                    <p className='w-75px h-75px' style={{ margin: '0 auto' }}>
                                                        <img src={item.metadata.image} width={75} alt="" />
                                                    </p>

                                                    <div className='w-130px h-35px flex-center' style={{ margin: '0 auto', marginTop: '5px' }} >
                                                        {
                                                            (address) ?
                                                                <Button type="primary" loading={isLoading || mintLoading} style={btnStyle} onClick={() => mint(item.id)} className='btn text-12px w-100px h-30px color-text'>{getStatusLabel(item.status)}</Button>
                                                                : <CustomWalletBtn walletText="Connncet" />
                                                        }
                                                    </div>
                                                </div>
                                            </Col>)}
                                    </Row> :
                                    <div className='wh-full flex-center'>
                                        <Empty
                                            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                                            imageStyle={{ height: 60 }}
                                            description={
                                                <span className='color-#fff'> No Data </span>
                                            }
                                        >

                                            {!account && <Button type="primary" onClick={() => nav('/login')}>Log In</Button>}

                                        </Empty>

                                    </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}