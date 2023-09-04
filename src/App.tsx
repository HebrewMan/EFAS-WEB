import { Suspense, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import routers from './router/routerMap';
import Web3Provider from '@/components/WalletConnect';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ConfigProvider, Spin } from 'antd';
import ColoredScrollbars from '@/components/Scrollbars/index';
import mainBgImage from '@/assets/bgs/BG.jpg';
import { MyContext, UserInfo } from "@/store/context"
function App() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    isRegistered: false,
    account: 'LOG IN',
    wallet: '',
    firstName: '',
    lastName: '',
    region: '',
  });

  const mainStyle = {
    backgroundImage: `url(${mainBgImage})`,
    backgroundSize: 'cover',
  }
  return (
    <Web3Provider>
      <MyContext.Provider value={{ userInfo, setUserInfo, }}>
        <ConfigProvider theme={{ token: { borderRadius: 4 } }}>
          <div className="h-100vh w-100vw overflow-hidden">
            <ColoredScrollbars>
              <div className="min-w-1080px h-full flex flex-col-center bg-#0B1C30">
                <Header></Header>
                <div className="flex-1 w-full pb-25px" style={mainStyle}>
                  <Suspense fallback={<div className="flex-center w-full h-full"> <Spin /> </div>}>
                    {useRoutes(routers)}
                  </Suspense>
                </div>
                <Footer />
              </div>
            </ColoredScrollbars>
          </div>
        </ConfigProvider>
      </MyContext.Provider>
    </Web3Provider>
  );
}

export default App;
