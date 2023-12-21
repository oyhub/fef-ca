import { Link } from 'react-router-dom';
import CartButton from '../../buttons/CartButton.tsx';

export function Header() {
return (
  <header>
    <div className="text-xs font-heading uppercase w-screen bg-primary text-white p-2">
      <div className="container flex justify-end gap-8">
        <a href="#">Contact</a>
        <a href="#">About us</a>
        <a href="#">+47 99 99 99 99</a>
      </div>
    </div>
    <div>
      <div className="container flex justify-between items-center">
        <Link to="/" className="uppercase text-3xl m-2">
          <span className="text-primary border-primary border-2 px-2 xs:border-0">l<span className="hidden xs:inline">innus</span></span><span className="bg-primary border-primary border-2 text-white px-2">f<span  className="hidden xs:inline">ritid</span></span>
        </Link>
        <div className="w-1/2">
          <input aria-label="Search product" type="search" placeholder="Search" className="p-2 w-full max-w-xl shadow border-1 rounded"/>
        </div>
        <CartButton />
      </div>
    </div>
  </header>
)
}
export default Header;
