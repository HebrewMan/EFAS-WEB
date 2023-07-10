import IcBaselineLanguage from '~icons/ic/baseline-language';
import { Dropdown, MenuProps } from 'antd';
import { Language } from '@/utils/enum';
import { changeLanguage } from '@/utils/i18n';
export default function MyLanguage() {
  const items: MenuProps['items'] = [
    { key: Language.zh, label: '中文简体' },
    { key: Language.tw, label: '中文繁體' },
    { key: Language.en, label: 'English' },
    { key: Language.jp, label: '日本語' },
    { key: Language.tk, label: 'T ürkiye dili' },
  ];

  const handleMenuClick: MenuProps['onClick'] = (item: any) => {
    changeLanguage(item.key);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Dropdown menu={menuProps} className="mx-8" placement="bottom">
      <div className="cursor-pointer text-20px py-10px w-20px h-40px color-#C7CBD5">
        <IcBaselineLanguage></IcBaselineLanguage>
      </div>
    </Dropdown>
  );
}
