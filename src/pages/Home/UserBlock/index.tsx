import IconCopy from '@/assets/svg/copy.svg';
import IconMetamask from '@/assets/svg/metamask.svg';
import './index.scss';
export default function index() {
  const { t } = useTranslation();
  return (
    <div className="w-331px bg-block h-full rounded-4px py-28px select-none">
      <div className="flex items-center justify-between px-20px mb-23px">
        <span className="color-white">P2B option pool</span>
        <span className="color-#6B7083 text-12px">{t('more')}&gt;</span>
      </div>
      <div className="flex justify-between items-center px-20px">
        <div className="flex-center">
          <img
            className="w-38px h-38px rounded-50% mr-7px"
            src="https://s2.aigcviewer.com/logo/1/tether.png?x-oss-process=style/coin_36_webp"
            alt=""
          />
          <div className="flex flex-col">
            <div className="color-white h-16px">USDT</div>
            <div className="color-#6B7083 flex-center mt-2px">
              <span className="text-12px">0xac...5598</span>
              <img className="ml-4px cursor-pointer" src={IconCopy} alt="" />
              <img className="ml-4px" src={IconMetamask} alt="" />
            </div>
          </div>
        </div>
        <div className="in-btn w-78px h-28px flex-center font-700 color-#161720 cursor-pointer rounded-6px ">
          {t('btn-in')}
        </div>
      </div>
      <div className="flex justify-evenly mt-16px mb-26px">
        <div className="flex-col-center">
          <span className="color-white font-700 leading-19px">122334</span>
          <span className="text-12px leading-16px mt-2px color-#6B7083">TVL</span>
        </div>
        <div className="flex-col-center">
          <span className="color-white font-700 leading-19px">122334</span>
          <span className="text-12px leading-16px mt-2px color-#6B7083">{t('my-balance')}</span>
        </div>
      </div>
      <div className="h-1px bg-#2F3545 w-full"></div>
    </div>
  );
}
