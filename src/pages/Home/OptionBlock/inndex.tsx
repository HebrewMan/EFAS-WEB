import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, Tooltip } from 'antd';
import OouiHelpNoticeLtr from '~icons/ooui/help-notice-ltr';
import MaterialSymbolsTrendingUp from '~icons/material-symbols/trending-up';
import MaterialSymbolsTrendingDown from '~icons/material-symbols/trending-down';
import IconUp from '@/assets/svg/up.svg';
import IconDown from '@/assets/svg/down.svg';
import IconView from '@/assets/svg/view.svg';
export default function inndex() {
  const { t } = useTranslation();
  const items = [
    {
      label: (
        <div className="flex items-center">
          <img
            className="w-26px h-26px rounded-50% mr-5px"
            src="https://s2.aigcviewer.com/logo/1/tether.png?x-oss-process=style/coin_36_webp"
            alt=""
          />
          <div className="flex flex-col">
            <span className="text-12px color-white">USDT/Doge</span>
            <span className="text-12px color-#81838C mt-3px">{t('balance')} : 33000.00</span>
          </div>
        </div>
      ),
      key: 'USDT',
    },
  ];

  const handleMenuClick = (e: any) => {
    console.log(e);
  };
  return (
    <div className="w-195px bg-block h-full rounded-4px pt-28px flex-col items-center select-none">
      <Dropdown
        menu={{ items: items, onClick: handleMenuClick }}
        className="w-157px"
        trigger={['click']}
        placement="bottomLeft"
      >
        <div className="cursor-pointer flex justify-between items-center w-157px">
          <div className="flex-center ">
            <img
              className="w-26px h-26px rounded-50%"
              src="https://s2.aigcviewer.com/logo/1/tether.png?x-oss-process=style/coin_36_webp"
              alt=""
            />
            <span className="ml-5px text-14px color-white font-bold">USDT</span>
          </div>
          <CaretDownOutlined className="color-#697384" />
        </div>
      </Dropdown>
      <div className="w-157px font-bold color-white text-14px mt-14px">{t('balance')} ：3000</div>
      <div className="mt-38px w-157px h-54px border b-#686A74 rounded-4px relative flex-center">
        <div className="flex items-center absolute top--10px left-16px bg-block color-#81838C px-6px text-14px">
          {t('settlement-time')}
          <Tooltip title="prompt text">
            <OouiHelpNoticeLtr className="text-10px ml-4px cursor-pointer" />
          </Tooltip>
        </div>
        <span className="color-white text-18px">14:42</span>
      </div>
      <div className="mt-25px w-157px h-54px border b-#686A74 rounded-4px relative flex-center">
        <div className="flex items-center absolute top--10px left-16px bg-block color-#81838C px-6px text-14px">
          {t('number')}(USDT)
        </div>
        <span className="color-white text-18px">1200</span>
      </div>
      <div className="flex items-center px-6px text-14px mt-24px">
        <MaterialSymbolsTrendingUp className="color-up mr-10px" />
        <span className="color-white">{t('up-profits')}</span>
        <Tooltip title="prompt text">
          <OouiHelpNoticeLtr className="text-10px ml-7px color-#81838C cursor-pointer" />
        </Tooltip>
      </div>
      <div className="color-up flex-center text-32px my-6px leading-38px">+95%</div>
      <div className="color-up flex-center text-16px leading-19px">+372 USDT</div>
      <button className="bg-up w-173px h-72px flex-center mt-18px rounded-4px hover:opacity-80">
        <img src={IconUp} alt="" />
        <span className="ml-10px text-16px font-bold color-white">{t('look-up')}</span>
      </button>
      <button className="bg-down w-173px h-72px flex-center mt-18px rounded-4px hover:opacity-80">
        <img src={IconDown} alt="" />
        <span className="ml-10px text-16px font-bold color-white">{t('look-down')}</span>
      </button>
      <div className="flex items-center px-6px text-14px mt-24px">
        <MaterialSymbolsTrendingDown className="color-down mr-10px" />
        <span className="color-white">{t('down-profits')}</span>
        <Tooltip title="prompt text">
          <OouiHelpNoticeLtr className="text-10px ml-7px color-#81838C cursor-pointer" />
        </Tooltip>
      </div>
      <div className="color-up flex-center text-32px my-6px leading-38px">+95%</div>
      <div className="color-up flex-center text-16px leading-19px">+372 USDT</div>
      <div className="w-full h-90px flex-col-center bg-#1D4366 mt-42px cursor-pointer hover:opacity-80">
        <img src={IconView} alt="" />
        <span className="text-14px font-bold mt-9px color-white">{t('view')}</span>
      </div>
    </div>
  );
}
