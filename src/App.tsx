import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import IndexPage from './pages';
import NotFoundPage from './pages/404';

const isProd: boolean = process.env.NODE_ENV === 'production';
const base: string = isProd ? '/solid-template' : '';

const App: Component = () => {
  return (
    <Routes base={base}>
      <Route path="/" component={IndexPage} />
      <Route path="*" component={NotFoundPage} />
    </Routes>
  );
};

export default App;
