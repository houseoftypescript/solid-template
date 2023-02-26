import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Router } from '@solidjs/router';
import { render } from 'solid-js/web';
import App from './App';
import './index.scss';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?'
  );
}

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  root!
);
