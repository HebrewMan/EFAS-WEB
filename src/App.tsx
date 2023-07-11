import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routers from './router/routerMap';
import Web3Provider from '@/components/WalletConnect';
import Header from '@/components/Header';
import { ConfigProvider, Spin } from 'antd';
import ColoredScrollbars from '@/components/Scrollbars/index';
function App() {
  return (
    <Web3Provider>
      <ConfigProvider theme={{ token: { borderRadius: 4 } }}>
        <div className="h-100vh w-100vw overflow-hidden">
          <ColoredScrollbars>
            <div className="min-w-1080px h-full flex flex-col-center bg-#0B1C30">
              <Header></Header>
              <div className="flex-1 w-full pb-25px">
                <Suspense
                  fallback={
                    <div className="flex-center w-full h-full">
                      <Spin />
                    </div>
                  }
                >
                  {useRoutes(routers)}
                </Suspense>
              </div>
            </div>
          </ColoredScrollbars>
        </div>
      </ConfigProvider>
    </Web3Provider>
  );
}

export default App;
