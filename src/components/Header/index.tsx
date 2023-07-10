import logo from '@/assets/svg/logo.svg';
import { Link } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useNetwork } from 'wagmi';
import Language from '../Language';
import Menu from '../Menu';
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
    <header className="h-62px w-full flex items-center justify-between px-32px">
      <Link to="/" className="flex items-center">
        <img src={logo} className="w-167px h-37px" alt="" />
      </Link>
      <div className="flex-1 pl-40px">
        <Menu></Menu>
      </div>
      <div className="flex-center">
        <Language></Language>
        <ConnectButton></ConnectButton>
      </div>
    </header>
  );
}
