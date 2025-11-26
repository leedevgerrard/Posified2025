import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/shared/Header';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import TablePage from './pages/TablePage';
import MenuPage from './pages/MenuPage';

const Layout = () => {

  const location = useLocation();
  const routesWithoutHeader = ['/auth'];

  return (
    <>
      {!routesWithoutHeader.includes(location.pathname) && <Header />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/table' element={<TablePage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='*' element={<div>Page Not Found</div>} />
      </Routes>
    </>
  )
}

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  )
}

export default App;