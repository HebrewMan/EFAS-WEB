import IcBaselineLanguage from '~icons/ic/baseline-language';
import { Dropdown, MenuProps } from 'antd';
import { Language } from '@/enum';
import { changeLanguage } from '@/i18n';
export default function MyLanguage() {
  const items: MenuProps['items'] = [
    { key: Language.zh, label: <div className="color-white">中文简体</div> },
    { key: Language.tw, label: <div className="color-white">中文繁體</div> },
    { key: Language.en, label: <div className="color-white">English</div> },
    { key: Language.jp, label: <div className="color-white">日語</div> },
  ];

  const handleMenuClick: MenuProps['onClick'] = (item: any) => {
    changeLanguage(item.key);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Dropdown menu={menuProps} className="mx-4" placement="bottom">
      <div className="cursor-pointer text-20px py-10px w-20px h-40px color-#C7CBD5">
        <IcBaselineLanguage></IcBaselineLanguage>
      </div>
    </Dropdown>
  );
}
