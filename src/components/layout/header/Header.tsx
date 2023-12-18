import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export function Header() {
return (
  <header>
    <div className="text-xs font-heading uppercase w-screen bg-primary text-white p-2">
      <div className="container mx-auto flex justify-end gap-8">
        <a href="#">Contact</a>
        <a href="#">About us</a>
        <a href="#">+47 99 99 99 99</a>
      </div>
    </div>
    <div>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="uppercase text-3xl m-2">
          <span className="text-primary">linnus</span> <span className="bg-primary text-white px-2">fritid</span>
        </a>
        <div className="w-1/2">
          <input aria-label="Search product" type="search" placeholder="Search" className="p-2 w-full max-w-xl shadow border-1 rounded"/>
        </div>
        <button className="p-1">
          <ShoppingCartIcon className="w-6 text-primary"/>
        </button>
      </div>
    </div>
  </header>
)
}
export default Header;
