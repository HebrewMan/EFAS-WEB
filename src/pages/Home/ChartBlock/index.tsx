import LightweightCharts from '@/components/Tradingview/index';
import './index.scss';
export default function index() {
  const { t } = useTranslation();

  return (
    <div className="h-full w-full">
      <LightweightCharts></LightweightCharts>

      <div className="bar h-66vh w-30px fixed left-24px top-17vh z-99 flex-col-center">
        <div className="color-white font-700 flex-col-center mb-5px">
          <span className="text-12px leading-16px">{t('look-down')}</span>
          <span className="text-14px leading-20px">60%</span>
        </div>
        <div className="flex-1 w-20px">
          <div className="bar-down h-60%"></div>
          <div className="h-5px bg-white"></div>
          <div className="bar-up h-40%"></div>
        </div>
        <div className="color-white font-700 flex-col-center mt-5px">
          <span className="text-14px leading-20px">40%</span>
          <span className="text-12px leading-16px">{t('look-up')}</span>
        </div>
      </div>
    </div>
  );
}
