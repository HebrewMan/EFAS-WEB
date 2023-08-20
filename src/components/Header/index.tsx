import logo from '@/assets/icons/EFAS_LOGO_White.png';
import { Link } from 'react-router-dom';
// import { ConnectButton } from '@rainbow-me/rainbowkit';
import { CustomWalletBtn } from '@/components/WalletConnect/customWalletBtn';
import { useAccount, useNetwork } from 'wagmi';
import Menu from '../Menu';
import './index.scss'
export default function Header() {
  const { address, connector } = useAccount();
  const { chain } = useNetwork();

  useEffect(() => {
    console.log(address, connector, chain);
    if (address && !chain) {
      console.log('address && !chain', address, chain);
      return;
    }
    if (!address && !chain) {
      // 都为空，则登录失败
    } else if (address && chain) {
      // 都不为空，则登录成功
    }
  }, [address, connector, chain]);

  return (
    <header className="h-62px w-full flex items-center justify-between px-32px " style={{ background: 'rgba(1, 1, 1, 0.35)' }}>
      <Link to="/" className="flex items-center">
        <img src={logo} className="w-63px h-39px" alt="" />
        <span className='color-white pl-16px text-18px'>AUCTION HOUSE</span>
      </Link>

      <div className="flex-1">
        <Menu></Menu>
      </div>
      <div className="flex-center sets">
        <CustomWalletBtn  ></CustomWalletBtn>
      </div>
    </header>
  );
}
