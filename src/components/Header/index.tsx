import logo from '@/assets/icons/EFAS_LOGO_White.png';
import { Link } from 'react-router-dom';
import { getCookie } from '@/enum';
import { CustomWalletBtn } from '@/components/WalletConnect/customWalletBtn';
import { useAccount, useNetwork } from 'wagmi';
import { Button, Modal } from 'antd';
import { LoginOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import { MyContext } from '@/store/context';

import Menu from '../Menu';
import './index.scss'
import LoginWay from '@/components/Login/loginWay';

export default function Header() {
  const { address, connector } = useAccount();
  const { chain } = useNetwork();

  const nav = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const { userInfo } = useContext(MyContext);

  const token = getCookie('token');
  const account = getCookie('account');


  const login = () => {
    if (!token) {
      if ((window as any).ethereum) {
        setModalOpen(true)
      } else {
        nav(`/login`)
      }
    }
  };

  useEffect(() => {
    if (address && !chain) {
      console.log('address && !chain', address, chain);
      return;
    }
    if (!address && !chain) {
      // 都为空，则登录失败
    } else if (address && chain) {
      setModalOpen(false);
      // 都不为空，则登录成功
    }
  }, [address, connector, chain]);

  return (
    <header className="h-52px w-full flex items-center justify-between px-32px " style={{ background: 'rgba(1, 1, 1, 0.35)' }}>
      <Link to="/" className="flex items-center">
        <img src={logo} className="w-63px h-39px" alt="" />
        <span className='color-white pl-16px text-18px'>EARTH FORM ANOTHER SUN</span>
      </Link>

      <div className="flex-1">
        <Menu></Menu>
      </div>

      {modalOpen && <LoginWay modalOpen={modalOpen} onClose={() => setModalOpen(false)} />}

      <div className="flex-center sets">

        {(address && chain ? <CustomWalletBtn /> :

          <Button type="primary" onClick={login} className='btn w-100px h-30px text-14px p-0' icon={<LoginOutlined />} >
            {account ? account.substring(0, 6) + '...' : "LOG IN"}
          </Button>)
        }
        {/*  */}

      </div>
    </header>
  );
}
