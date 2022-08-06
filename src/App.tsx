import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Front from './ui/Front';

const App = () => {
  const { t } = useTranslation();

  return (
    <Router>
      <h1>{t('logo')}</h1>
      <Routes>
          <Route path="/" element={ <Front />} />
      </Routes>
    </Router>
  );
};

export default App;
