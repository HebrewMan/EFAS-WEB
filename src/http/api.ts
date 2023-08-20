import { get, post } from "./axios";
const api: string = import.meta.env.VITE_BATE_URI;

const api2 = import.meta.env.VITE_BATE_ACTION_URI;

//users
const getUserAssets = (data: any) => get(`${api}/v1/{account}/assets/web3`, data);
const getUserInfo = (data: any) => get(`${api}/v1/{account}`, data);
const bindWallet = (data: any) => get(`${api}/v1/bind`, data);
const getWeb2Assets = () => get(`${api}/gift@1.0/web2-asset/1/100`, null);
const preRegistration = (data: any) => get(`/v1/PreRegistration`, data);
const mint = (data: any) => get(`${api}/v1/mint/{itmId}`, data);

const sendVerificationCode = (data: any) => post(`${api}/account@1.0/send-verification-code`, data);
const preRegister = (data: any) => post(`${api}/account@1.0/pre-register`, data);
const hasPreRegister = (data: any) => post(`${api}/account@1.0/has-pre-register/${data}`, data);

const login = (data: any) => post(`${api}/account@1.0/login`, data);
const resetPassword = (data: any) => get(`${api}/reward_apy`, data);

const buildWallet = (data: any) => post(`${api2}/web3_bind_account`, data);

//check
const emailExist: any = (data: any) => get(`${api}/reward_apy`, data);
const accountExist: any = (data: any) => get(`${api}/reward_apy`, data);
const checkEmailAccount: any = (data: any) => get(`${api}/reward_apy`, data);

//market
const getMarketTvl: any = (data: any) => get(`${api}/v1/marketplace/tvl/{24小时}`, data);
const getOrders: any = (data: any) => get(`${api}/v1/marketplace/{collectionName}/{orderId}`, data);
const getTradeHistroy: any = (data: any) => get(`${api}/v1/marketplace/nfts/{nftId}/history`, data);
const getItem: any = (data: any) => get(`${api}/v1/item/{id}`, data);


// const resetPassword: any = (data: any) => get(`/reward_apy`, data);


export {
    getUserAssets,
    getUserInfo,
    getItem,
    getMarketTvl,
    getOrders,
    getTradeHistroy,
    mint,
    bindWallet,
    sendVerificationCode,
    preRegister,
    hasPreRegister,
    login,
    resetPassword,
    checkEmailAccount,
    emailExist,
    accountExist,
    preRegistration,
    buildWallet,
    getWeb2Assets
};