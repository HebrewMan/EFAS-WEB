import './polyfills';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import initI18n from './i18n';
import './main.scss';
import 'uno.css'; //引入unocss
import 'nprogress/nprogress.css';
import '@rainbow-me/rainbowkit/styles.css';
initI18n();
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
