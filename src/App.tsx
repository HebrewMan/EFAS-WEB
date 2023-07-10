import { Suspense } from 'react';
import Footer from '@/components/Footer';
import { useRoutes } from 'react-router-dom';
import routers from './router/routerMap';
import Web3Provider from '@/components/WalletConnect';
import Header from '@/components/Header';
import { Spin } from 'antd';
function App() {
  return (
    <Web3Provider>
      <div className="h-100vh flex flex-col-center bg-#0B1C30">
        <Header></Header>
        <div className="flex-1">
          <Suspense fallback={<Spin />}>{useRoutes(routers)}</Suspense>
        </div>
        <Footer></Footer>
      </div>
    </Web3Provider>
  );
}

export default App;
