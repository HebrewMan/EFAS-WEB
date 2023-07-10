import { Scrollbars } from 'react-custom-scrollbars';

export default function ColoredScrollbars(props: any) {
  const renderThumb = ({ style = {}, ...props }) => {
    const thumbStyle = {
      backgroundColor: `rgba(255, 255, 255,0.2)`,
      borderRadius: '3px',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };
  return <Scrollbars renderThumbHorizontal={renderThumb} renderThumbVertical={renderThumb} {...props} />;
}
