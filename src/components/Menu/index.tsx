import { Link, useLocation } from 'react-router-dom';
import { getCookie } from '@/enum';
import { useAccount, useNetwork } from 'wagmi';
import { getUserInfo } from '@/http/api';
import { MyContext } from '@/store/context';

import { ReactElement, useState, useEffect } from 'react';
import navBtcSelectedImage from '@/assets/bgs/tab-bg.png'
interface ItemsProps {
  label: string | ReactElement;
  key: string;
  icon?: any;
  path?: string;
  href?: string;
  children?: Array<ItemsProps>;
}

export default function index() {
  const { address } = useAccount();
  const { chain } = useNetwork();

  const [navTitle, setNavTitle] = useState('');

  const { setUserInfo } = useContext(MyContext);

  const location = useLocation();

  const account = getCookie('account');

  const [menuItems, setMenuItems] = useState<ItemsProps[]>([]);

  const items: ItemsProps[] = [
    {
      label: 'MARKETPLACE',
      key: 'MarketPlace',
      href: '',
      path: 'market',
    },
    {
      label: 'BRIDGE',
      key: 'Bridge',
      href: '',
      path: 'bridge',
    },
  ];

  useEffect(() => {

    if (account) {
      getUserInfo(encodeURIComponent(account)).then((res: any) => {
        setUserInfo({
          account: account,
          wallet: res.data.data.web3AccountBindDto.web3Account,
          firstName: res?.data?.data?.preRegisterInfoDto.firstName,
          lastName: res?.data?.data?.preRegisterInfoDto.lastName,
          region: res?.data?.data?.preRegisterInfoDto.region,
        });
        if (!res?.data?.data?.preRegisterInfoDto.firstName) {
          items.push({ label: 'Pre-REGISTER', key: 'register', href: '', path: 'register' }
          );
        }
      });
    }

    if ((address && chain) || account) {
      items.push(
        { label: 'CLAIM', key: 'Claim', href: '', path: 'claim' },
        { label: 'MY ASSETS', key: 'Assets', href: '', path: 'my-assets' }
      );
    }

    setMenuItems(items);

  }, [account]);

  const navStyle = {
    backgroundImage: `url(${navBtcSelectedImage})`,
    backgroundSize: 'cover',
    color: '#ffffff',
    padding: '0 20px'
  }

  const handleMenuClick = (item: string) => setNavTitle(item);

  useEffect(() => {
    const path = location.pathname.replace(/^\//, "");
    if (path) setNavTitle(path);
  })

  return (
    <div className="flex-center text-14px color-text h-63px mr-20px" style={{ justifyContent: 'end' }}>
      {/* <Language /> */}
      {menuItems.map((item: ItemsProps | any) =>
        <Link key={item.key} className={` flex-center h-50px hover ${navTitle == item.path ? 'nav-cur' : ''}`}
          style={(navTitle == item.path) ? navStyle : { padding: '0 20px' }}
          to={item.path} onClick={() => handleMenuClick(item.path)}>
          <span className='relative'>{item.label}</span>
        </Link>
      )}
    </div>
  );
}
