import { useContractWrite } from 'wagmi'
import { abi as usdtAbi } from '@/contract/abis/USDT.json';
import { abi as nftAbi } from '@/contract/abis/NFT1155.json';


const usdtAddr = '0x546749661028970d1a72D6D07Eb9656977F199F8';
const nftAddr = '0x4B2BA4fe9cc233277003AC5780e8273ef0aA1802';

export function MintUSDT() {

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: usdtAddr,
    abi: usdtAbi,
    functionName: 'mint',
  });
  return writeAsync;
}

export const MintNFT = (to: string, amount: string | number) => {

  const { data, isLoading, isSuccess, writeAsync } = useContractWrite({
    address: nftAddr,
    abi: usdtAbi,
    functionName: 'mint',
    args: [to, amount]
  });
  return writeAsync;
}


