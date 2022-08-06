import { I18nextProvider } from 'react-i18next';
import 'regenerator-runtime';
import i18n from 'i18next';
import { Provider } from "./services/store";
import ru from './locales/ru';
import App from './App'
import './index.css';


const init = async () => {
  await i18n
    .init({
      lng: 'ru',
      resources: {
        ru,
      },
    });

  return (
    <Provider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  );
};

export default init;
