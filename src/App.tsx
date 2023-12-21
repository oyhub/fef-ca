import './App.css';
import Header from './components/layout/header/Header.tsx';
import Footer from './components/layout/footer/footer.tsx';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import Checkout from './pages/Checkout.tsx';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow container mx-auto mt-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Layout /> } >
        <Route index element={ <Home /> } />
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="*" element={ <NotFound /> } />
      </Route>
    </Routes>
  )
}

export default App
