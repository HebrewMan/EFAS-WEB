import LightweightCharts from '@/components/Tradingview/index';
export default function index() {
  const { t } = useTranslation();

  return (
    <div className="h-full w-full">
      <LightweightCharts></LightweightCharts>
    </div>
  );
}
