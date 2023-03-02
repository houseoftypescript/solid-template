import { Navigate, Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import IndexPage from './pages';
import NotFoundPage from './pages/404';
import ChartPage from './pages/apps/chart';
import TablePage from './pages/apps/table';
import SignPage from './pages/auth/sign-in';
import RegisterPage from './pages/auth/sign-up';
import ForgetPasswordPage from './pages/password/forget';
import ResetPasswordPage from './pages/password/reset';
import ProfilePage from './pages/user/profile';
import SettingsPage from './pages/user/settings';
import CalendarPage from './pages/apps/calendar';

const isProd: boolean = process.env.NODE_ENV === 'production';
const base: string = isProd ? '/solid-template' : '';

const App: Component = () => {
  return (
    <Routes base={base}>
      <Route path="/" component={IndexPage} />
      {/* Auth */}
      <Route
        path="/auth"
        element={<Navigate href={`${base}/auth/sign-in`} />}
      />
      <Route path="/auth/sign-in" component={SignPage} />
      <Route path="/auth/sign-up" component={RegisterPage} />
      {/* Password */}
      <Route
        path="/password"
        element={<Navigate href={`${base}/password/forget`} />}
      />
      <Route path="/password/forget" component={ForgetPasswordPage} />
      <Route path="/password/reset" component={ResetPasswordPage} />
      {/* Apps */}
      <Route path="/apps" element={<Navigate href={`${base}/apps/chart`} />} />
      <Route path="/apps/chart" component={ChartPage} />
      <Route path="/apps/table" component={TablePage} />
      <Route path="/apps/calendar" component={CalendarPage} />
      {/* User */}
      <Route
        path="/user"
        element={<Navigate href={`${base}/user/profile`} />}
      />
      <Route path="/user/profile" component={ProfilePage} />
      <Route path="/user/settings" component={SettingsPage} />
      <Route path="*" component={NotFoundPage} />
    </Routes>
  );
};

export default App;
