import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const DashboardPage = lazy(() => import('pages/DashboardPage'));
const ReportsPage = lazy(() => import('pages/ReportsPage'));
const SharedLayout = lazy(() => import('pages/SharedLayout'));




export const App = () => {
  return (
<Routes>
<Route path="/" element={<SharedLayout/>}>
<Route index element={<HomePage/>}/>
  <Route path='/register' element={<AuthPage/>}/>
  <Route path='/dashboard' element={<DashboardPage/>}/>
  <Route path='/reports' element={<ReportsPage/>}/>
  <Route path="*" element={<NotFoundPage />} />
</Route>
</Routes>
  );
};
