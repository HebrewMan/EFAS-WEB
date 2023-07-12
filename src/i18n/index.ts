import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import { EnumStorageKey, Language } from '@/enum';
import { setLocal, getLocal } from '@/utils';
import { store } from '@/store';
import { setLang } from '@/store/slices/appSlice';
export const LANG_CACHE_KEY = 'NFT_LANG_KEY';
export const supportedLngs = ['zh-CN', 'en-US'];

export const getInitLang = () => {
  const langCache = getLocal(EnumStorageKey.lang);
  if (langCache) return langCache as string;
  setLocal(EnumStorageKey.lang, Language.zh, 365);
  return Language.zh as string;
};
export const initLang = getInitLang();

export const changeLanguage = (lang: Language) => {
  i18n.changeLanguage(lang, () => {
    setLocal(EnumStorageKey.lang, lang, 365);
    store.dispatch(setLang(lang));
  });
};

// 初始化
export const initI18n = () => {
  return i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
      //默认语言
      lng: initLang,
      ns: ['common'],
      supportedLngs,
      debug: false,
      backend: {
        loadPath: `${window.location.origin}${import.meta.env.VITE_BASE}/locales/{{lng}}/{{ns}}.json`,
      },
    });
};

export default initI18n;
