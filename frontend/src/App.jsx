import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/shared/Header';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import TablePage from './pages/TablePage';
import MenuPage from './pages/MenuPage';
import AdminDash from './pages/AdminDash';
import { useSelector } from 'react-redux';
import useLoadData from './hooks/useLoadData';
import Loading from './components/shared/Loading';

const Layout = () => {

  const isLoading = useLoadData();
  const location = useLocation();
  const routesWithoutHeader = ['/auth'];
  const { isAuth } = useSelector(state => state.user);

  if (isLoading) return <Loading />

  return (
    <>
      {!routesWithoutHeader.includes(location.pathname) && <Header />}
      <Routes>
        <Route path='/' element={
          <ProtectedRoutes>
            <HomePage />
          </ProtectedRoutes>
        } />
        <Route path='/auth' element={isAuth ? <Navigate to={'/'} /> : <AuthPage />} />
        <Route path='/order' element={
          <ProtectedRoutes>
            <OrderPage />
          </ProtectedRoutes>
        } />
        <Route path='/table' element={
          <ProtectedRoutes>
            <TablePage />
          </ProtectedRoutes>
        } />
        <Route path='/menu' element={
          <ProtectedRoutes>
            <MenuPage />
          </ProtectedRoutes>
        } />
        <Route path='/dashboard' element={
          <ProtectedRoutes>
            <AdminDash />
          </ProtectedRoutes>
        } />
        <Route path='*' element={<div>Page Not Found</div>} />
      </Routes>
    </>
  )
}

const ProtectedRoutes = ({children}) => {
  const { isAuth } = useSelector(state => state.user);
  if (!isAuth) {
    return <Navigate to={'/auth'} />
  }
  return children;
}

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  )
}

export default App;