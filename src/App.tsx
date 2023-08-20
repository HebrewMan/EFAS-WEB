import { Suspense, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import routers from './router/routerMap';
import Web3Provider from '@/components/WalletConnect';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ConfigProvider, Spin } from 'antd';
import ColoredScrollbars from '@/components/Scrollbars/index';
import mainBgImage from '@/assets/bgs/T_BG.png';
function App() {
  const mainStyle = {
    backgroundImage: `url(${mainBgImage})`,
    backgroundSize: 'cover',
  }

  useEffect(() => {
    const handleWindowError = (message: string) => {
      if (message.includes("WebSocket connection to 'wss://relay.walletconnect.com")) {
        return true; // 阻止错误消息
      }
      return false; // 允许其他错误消息
    };

    (window as any).onerror = handleWindowError;
    return () => {
      window.onerror = null; // 清除事件处理程序
    };
  }, []);
  return (
    <Web3Provider>
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
    </Web3Provider>
  );
}

export default App;
