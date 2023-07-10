import ChartBlock from './ChartBlock/index';
import OptionBlock from './OptionBlock/inndex';
import UserBlock from './UserBlock/index';
export default function index() {
  const { t } = useTranslation();

  return (
    <div className="h-full w-full flex">
      <div className="flex-1 w-full">
        <ChartBlock></ChartBlock>
      </div>
      <div className="ml-7px">
        <OptionBlock></OptionBlock>
      </div>
      <div className="ml-7px">
        <UserBlock></UserBlock>
      </div>
    </div>
  );
}
