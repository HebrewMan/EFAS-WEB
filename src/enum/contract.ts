import * as React from 'react'
import { usePrepareContractWrite, useContractWrite } from 'wagmi'

export function MintNFT() {
    const data: any = {
        address: '0xBfd92c3bC9bBC1851703d6B2e6d3f860849B7955',
        abi: [
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "mint",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
        ],
        functionName: 'mint',
    }
    const { config } = usePrepareContractWrite(data);
    const { write } = useContractWrite(config)

    return write;
}