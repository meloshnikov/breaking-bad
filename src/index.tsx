import ReactDOM from 'react-dom';
import init from './init';
import './index.css';

const App = async () => {
  const vdom = await init();
  const root = document.getElementById('root');
  ReactDOM.render(vdom, root);
};

App();
