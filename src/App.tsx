import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import IndexPage from './pages';
import NotFoundPage from './pages/404';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={IndexPage} />
      <Route path="*" component={NotFoundPage} />
    </Routes>
  );
};

export default App;
