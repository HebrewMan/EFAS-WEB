import { createContext } from 'react';

export interface UserInfo {
   isRegistered?: boolean;
   account: string;
   wallet?: string;
   firstName: string;
   lastName: string;
   region: string;
}

type ContextProps = {
   userInfo: UserInfo;
   setUserInfo: (userInfo: UserInfo) => void;
};

export const MyContext = createContext<ContextProps>({
   userInfo: {
      isRegistered: false,
      account: 'LOG IN',
      wallet: '',
      firstName: '',
      lastName: '',
      region: '',
   },
   setUserInfo: () => { },
});