import { connectorsForWallets, RainbowKitProvider, darkTheme, getDefaultWallets } from '@rainbow-me/rainbowkit';
import {
  coinbaseWallet,
  imTokenWallet,
  injectedWallet,
  metaMaskWallet,
  trustWallet,
} from '@rainbow-me/rainbowkit/wallets';

import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { zkSync, zkSyncTestnet, bscTestnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

// 自定义链  aithChain

//自定义链图标
// const defaultChains: any[] = [
//   {
//     ...zkSyncTestnet,
//     iconUrl: 'https://example.com/icons/ethereum.png',
//   },
//   {
//     ...zkSync,
//     iconUrl: 'https://example.com/icons/optimism.png',
//   },
// ];

// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [zkSync, zkSyncTestnet, bscTestnet],
//   [publicProvider()],
// );


// const connectors = connectorsForWallets([

//     [
//       injectedWallet({ chains }),
//       coinbaseWallet({ chains}),
//       metaMaskWallet({ chains }),
//       // trustWallet({ projectId, chains }),
//       // imTokenWallet({ projectId, chains }),
//       tokenPocketWallet({ projectId, chains }),
//       // walletConnectWallet({ projectId, chains }),
//     ],

// ]);



const { chains, publicClient, webSocketPublicClient } = configureChains(
  [zkSync, zkSyncTestnet, bscTestnet,],
  [publicProvider()],
);
const connectors = connectorsForWallets([
  {
    groupName: 'Suggested',
    wallets: [
      injectedWallet({ chains }),
      coinbaseWallet({ chains, appName: 'Coinbase' }),
      metaMaskWallet({ chains }),
      trustWallet({ chains }),
      imTokenWallet({ chains }),
      // walletConnectWallet({ chains, projectId: 'a6cc11517a10f6f12953fd67b1eb67e7' }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});


const myDarkTheme = darkTheme({
  accentColor: '#000000',
  accentColorForeground: 'white',
  borderRadius: 'small',
  fontStack: 'system',
  overlayBlur: 'small',
})


export default function Web3Provider({ children }: any) {
  return (
    <div className="h-full w-full">
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          coolMode
          theme={myDarkTheme} chains={chains} initialChain={zkSyncTestnet}>{children}</RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}
