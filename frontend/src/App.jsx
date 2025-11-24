import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path='/' />
        <Route path='/auth' element={<AuthPage />} />
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