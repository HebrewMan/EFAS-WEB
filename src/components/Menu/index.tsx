import { CaretDownOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

// import Language from '../Language';
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
const items: Array<ItemsProps> = [

  {
    label: 'MARKETPLACE',
    key: 'MarketPlace',
    href: '',
    path: 'market',
  },
  {
    label: 'CLAIM',
    key: 'Claim',
    href: '',
    path: 'claim',
  },
  {
    label: 'BRIDGE',
    key: 'Bridge',
    href: '',
    path: 'bridge',
  },

  {
    label: 'MY ASSETS',
    key: 'Assets',
    href: '',
    path: 'my-assets',

  },
  // {
  //   label: 'Trade',
  //   key: 'Trade',
  //   children: [
  //     {
  //       label: <div className="color-white">Trade</div>,
  //       key: 'Trade',
  //       href: '',
  //     },
  //   ],
  // },

];

export default function index() {

  const [navTitle, setNavTitle] = useState('');

  const location = useLocation();

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
      {items.map((item: ItemsProps | any) =>
        <Link key={item.key} className={` flex-center h-60px hover ${navTitle == item.path ? 'nav-cur' : ''}`}
          style={(navTitle == item.path) ? navStyle : { padding: '0 20px' }}
          to={item.path} onClick={() => handleMenuClick(item.path)}>
          <span className='relative'>{item.label}</span>
        </Link>
      )}
    </div>
  );
}
