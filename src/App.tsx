import './App.css';
import Header from './components/layout/header/Header.tsx';
import Footer from './components/layout/footer/footer.tsx';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import Checkout from './pages/Checkout.tsx';
import ContactPage from './pages/Contact.tsx';
import Product from './pages/Product.tsx';
import Success from './pages/Success.tsx';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow container mx-auto px-3 mt-4">
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
        <Route path="/product/:id" element={<Product />} />
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="/contact" element={ <ContactPage /> } />
        <Route path="/success" element={ <Success /> } />
        <Route path="*" element={ <NotFound /> } />
      </Route>
    </Routes>
  )
}

export default App
