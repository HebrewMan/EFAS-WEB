import { CaretDownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Dropdown } from 'antd';
import { ReactElement } from 'react';

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
    label: 'Home',
    key: 'Home',
    href: '',
  },
  {
    label: 'Trade',
    key: 'Trade',
    children: [
      {
        label: <div className="color-white">Trade</div>,
        key: 'Trade',
        href: '',
      },
    ],
  },
  {
    label: 'Earn',
    key: 'Earn',
    children: [
      {
        label: <div className="color-white">Earn</div>,
        key: 'Earn',
        href: '',
      },
    ],
  },
  {
    label: 'NFT',
    key: 'NFT',
    href: '',
  },
];

export default function index() {
  const handleMenuClick = (item: any) => {
    console.log(item);
  };

  return (
    <div className="flex items-center text-14px color-text h-40px">
      {items.map((item: ItemsProps | any) => {
        if (Reflect.has(item, 'children')) {
          return (
            <Dropdown
              key={item.key}
              menu={{ items: item.children, onClick: handleMenuClick }}
              className="mx-20px h-40px"
              placement="bottom"
            >
              <div className="cursor-pointer flex items-center text-14px color-text">
                <span className="mr-5px">{item.label}</span>
                <CaretDownOutlined className="color-#697384 mt-4px" />
              </div>
            </Dropdown>
          );
        } else {
          return (
            <Link key={item.key} className="mx-20px" to={item.path}>
              {item.label}
            </Link>
          );
        }
      })}
    </div>
  );
}
