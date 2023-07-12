import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getLocal, setLocal } from '@/utils';
import { EnumStorageKey, Language } from '@/enum';
// import { getInitLang } from '@/i18n';

const getInitLang = () => {
  const langCache = getLocal(EnumStorageKey.lang) || Language.zh;
  setLocal(EnumStorageKey.lang, Language.zh, 365);
  return langCache as string;
};

const initLang = getInitLang();
export interface AppState {
  language: string;
}

const initialState: AppState = { language: initLang };

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const selectAppSlice = (state: RootState) => state.app;
export const { setLang } = appSlice.actions;
export default appSlice.reducer;
